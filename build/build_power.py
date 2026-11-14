#!/usr/bin/env python3
"""Bake the electricity layers for one region into power/data/<id>.js.

  python build/build_power.py az

Reuses the region's existing base map (terrain, rivers, borders) and adds:
  plants       every power plant inside the map frame (EIA-860M inventory + EPA eGRID annual output and emissions)
  lines        high-voltage transmission lines (HIFLD / Oak Ridge National Laboratory)
  pipes        natural gas transmission pipelines (EIA)
  territories  electric retail service territories (HIFLD / Oak Ridge National Laboratory)
Raw downloads are cached in build/raw/power/ (git-ignored).
"""
import json, os, re, sys, time, zipfile, urllib.request, urllib.parse, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, 'build', 'raw', 'power')
UA = {'User-Agent': 'Mozilla/5.0 (map build script)'}
EGRID_URL = 'https://www.epa.gov/system/files/documents/2025-06/egrid2023_data_rev2.xlsx'
EIA860M_URL = 'https://www.eia.gov/electricity/data/eia860m/xls/september_generator2026.xlsx'
PIPE_URL = 'https://www.eia.gov/maps/map_data/NaturalGas_InterIntrastate_Pipelines_US_EIA.zip'
TERR_URL = 'https://services3.arcgis.com/OYP7N6mAJJCyH6hd/arcgis/rest/services/Electric_Retail_Service_Territories_HIFLD/FeatureServer/0/query'
EGRID_YEAR, INVENTORY = 2023, 'September 2026'

# region id -> (base data file, global name, states whose service territories to draw)
REGIONS = {'az': ('data.js', 'AZDATA', ['AZ'])}


def fetch(url, name, data=None, tries=4):
    path = os.path.join(RAW, name)
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    os.makedirs(RAW, exist_ok=True)
    import subprocess
    for i in range(tries):
        cmd = ['curl', '-sL', '--max-time', '400', '-A', UA['User-Agent'], '-o', path, url]
        if data is not None: cmd += ['--data-binary', data.decode()]
        subprocess.run(cmd)
        if os.path.exists(path) and os.path.getsize(path) > 200 and b'rate_limited' not in open(path, 'rb').read(600) and b'<html' not in open(path, 'rb').read(200).lower():
            return path
        print('  retry', name); time.sleep(15 * (i + 1))
    raise SystemExit('could not download ' + url)


def base_ext(region):
    """Read ext/gw/gh from the region's base data file without a JS engine."""
    src = open(os.path.join(ROOT, REGIONS[region][0])).read(4000)
    ext = json.loads(re.search(r'"?ext"?\s*:\s*(\[[^\]]+\])', src).group(1))
    gw = int(re.search(r'"?gw"?\s*:\s*(\d+)', src).group(1)); gh = int(re.search(r'"?gh"?\s*:\s*(\d+)', src).group(1))
    return ext, gw, gh


FUEL = {  # EIA energy source code -> map fuel group
    'NUC': 'nuclear', 'NG': 'gas', 'SUN': 'solar', 'WND': 'wind', 'WAT': 'hydro', 'MWH': 'battery', 'GEO': 'geo',
    'BIT': 'coal', 'SUB': 'coal', 'LIG': 'coal', 'RC': 'coal', 'WC': 'coal', 'ANT': 'coal', 'SGC': 'coal',
    'DFO': 'oil', 'RFO': 'oil', 'JF': 'oil', 'KER': 'oil', 'PC': 'oil', 'WO': 'oil',
    'WDS': 'bio', 'LFG': 'bio', 'OBG': 'bio', 'MSW': 'bio', 'AB': 'bio', 'BLQ': 'bio', 'OBS': 'bio', 'WDL': 'bio', 'OBL': 'bio',
}


def num(v):
    try:
        return float(str(v).replace(',', ''))
    except (TypeError, ValueError):
        return 0.0


def main(region):
    import openpyxl, shapefile
    from shapely.geometry import shape, box, LineString
    from shapely.ops import unary_union
    (L0, L1, B0, B1), GW, GH = base_ext(region)
    frame = box(L0, B0, L1, B1)
    tx = lambda lon: round((lon - L0) / (L1 - L0) * GW, 2)
    ty = lambda lat: round((B1 - lat) / (B1 - B0) * GH, 2)
    inside = lambda lon, lat: L0 <= lon <= L1 and B0 <= lat <= B1
    flat = lambda coords: [v for lon, lat in coords for v in (tx(lon), ty(lat))]

    # ---------------------------------------------------------------- plants: EIA-860M inventory
    wb = openpyxl.load_workbook(fetch(EIA860M_URL, 'eia860m.xlsx'), read_only=True)
    plants = {}

    def rows(sheet):
        ws = wb[sheet]; it = ws.iter_rows(min_row=3, values_only=True); hdr = [str(c).strip() if c else '' for c in next(it)]
        for r in it:
            d = dict(zip(hdr, r))
            lat, lon = num(d.get('Latitude')), num(d.get('Longitude'))
            if not d.get('Plant ID') or not lat or not inside(lon, lat):
                continue
            yield d, lon, lat

    def plant(d, lon, lat):
        pid = int(num(d['Plant ID']))
        return plants.setdefault(pid, dict(id=pid, n=str(d['Plant Name']).strip(), st=d['Plant State'], op=str(d['Entity Name']).strip(), lon=lon, lat=lat,
                                           ba=(d.get('Balancing Authority Code') or '').strip(), mw=collections.Counter(), y0=9999, y1=0, mwh=0.0,
                                           retire=[], retired=collections.Counter(), retiredYear=0, planned=collections.Counter(), plannedYear=9999, plannedStatus=''))

    for d, lon, lat in rows('Operating'):
        p = plant(d, lon, lat); f = FUEL.get(str(d['Energy Source Code']).strip(), 'other'); mw = num(d['Nameplate Capacity (MW)'])
        if str(d['Prime Mover Code']).strip() == 'PS': f = 'pumped'
        p['mw'][f] += mw
        y = int(num(d['Operating Year']))
        if y: p['y0'] = min(p['y0'], y); p['y1'] = max(p['y1'], y)
        p['mwh'] += num(d.get('Nameplate Energy Capacity (MWh)'))
        ry = int(num(d.get('Planned Retirement Year')))
        if ry: p['retire'].append((ry, f, mw))
    for d, lon, lat in rows('Retired'):
        y = int(num(d['Retirement Year']))
        if y < 2000: continue
        p = plant(d, lon, lat); f = FUEL.get(str(d['Energy Source Code']).strip(), 'other')
        p['retired'][f] += num(d['Nameplate Capacity (MW)']); p['retiredYear'] = max(p['retiredYear'], y)
        oy = int(num(d['Operating Year']))
        if oy: p['y0'] = min(p['y0'], oy)
    for d, lon, lat in rows('Planned'):
        p = plant(d, lon, lat); f = FUEL.get(str(d['Energy Source Code']).strip(), 'other')
        p['planned'][f] += num(d['Nameplate Capacity (MW)'])
        y = int(num(d['Planned Operation Year']))
        if y: p['plannedYear'] = min(p['plannedYear'], y)
        p['plannedStatus'] = str(d['Status']).strip()

    # ---------------------------------------------------------------- annual output and emissions: EPA eGRID
    eg = openpyxl.load_workbook(fetch(EGRID_URL, 'egrid2023.xlsx'), read_only=True)['PLNT23']
    it = eg.iter_rows(min_row=2, values_only=True); hdr = list(next(it)); col = {h: i for i, h in enumerate(hdr)}
    egrid = {}
    for r in it:
        if r[col['ORISPL']] is None: continue
        egrid[int(r[col['ORISPL']])] = r
    out = []
    for p in plants.values():
        op, rt, pl = sum(p['mw'].values()), sum(p['retired'].values()), sum(p['planned'].values())
        status = 'op' if op > 0 else 'retired' if rt > 0 else 'planned'
        mix = p['mw'] if op > 0 else p['retired'] if rt > 0 else p['planned']
        gen_mix = {k: v for k, v in mix.items() if k != 'battery'} or mix          # a solar farm with a battery is a solar farm
        fuel = max(gen_mix.items(), key=lambda kv: kv[1])[0]
        mw = round(sum(mix.values()), 1)
        if mw < 1: continue
        rec = dict(id=p['id'], n=p['n'], st=p['st'], op=p['op'], x=tx(p['lon']), y=ty(p['lat']), f=fuel, mw=mw, s=status)
        parts = {k: round(v, 1) for k, v in mix.items() if v >= 1}
        if len(parts) > 1: rec['mix'] = parts
        if p['mwh'] > 0: rec['bmwh'] = round(p['mwh'])
        if p['y0'] < 9999: rec['y0'] = p['y0']
        if p['y1'] and p['y1'] != p['y0']: rec['y1'] = p['y1']
        if status == 'op' and rt >= 1: rec['ret'] = [round(rt, 1), p['retiredYear'], max(p['retired'].items(), key=lambda kv: kv[1])[0]]
        if status == 'retired': rec['ry'] = p['retiredYear']
        if status == 'op' and p['retire']:
            yr = min(r[0] for r in p['retire']); rec['pr'] = [yr, round(sum(r[2] for r in p['retire'] if r[0] == yr), 1)]
        if pl >= 1 and status != 'planned': rec['add'] = [round(pl, 1), p['plannedYear'], max(p['planned'].items(), key=lambda kv: kv[1])[0]]
        if status == 'planned': rec['py'] = p['plannedYear']; rec['ps'] = p['plannedStatus']
        e = egrid.get(p['id'])
        if e:
            g = num(e[col['PLNGENAN']])
            if g or num(e[col['PLCO2AN']]):
                rec['g'] = round(g)                                   # MWh, eGRID year
                for key, c in (('co2', 'PLCO2AN'), ('nox', 'PLNOXAN'), ('so2', 'PLSO2AN')):
                    v = num(e[col[c]])
                    if v >= .5: rec[key] = round(v)                   # short tons
                hg = num(e[col['PLHGAN']])
                if hg >= .5: rec['hg'] = round(hg)                    # pounds
        out.append(rec)
    # EIA lists some plants as several entries (power blocks, phases, the two halves of Hoover Dam) while EPA reports their output under one.
    # Merge each group into one plant: [name pattern, id to keep, display name]
    MERGE = [(r'^Gila River Power Block', 55306, 'Gila River Power Station'), (r'^Mesquite Generating Station Block', 55481, 'Mesquite Generating Station'),
             (r'^Hoover Dam', 8902, 'Hoover Dam'), (r'^Chevelon Butte', 66001, 'Chevelon Butte Wind Farm')]
    for pat, keep, name in MERGE:
        grp = [r for r in out if re.search(pat, r['n'])]
        if len(grp) < 2: continue
        m = next(r for r in grp if r['id'] == keep); m['n'] = name; m['parts'] = len(grp)
        for r in grp:
            if r is m: continue
            m['mw'] = round(m['mw'] + r['mw'], 1)
            for k in ('g', 'co2', 'nox', 'so2', 'hg', 'bmwh'):
                if k in r: m[k] = m.get(k, 0) + r[k]
            if 'y0' in r: m['y1'] = max(m.get('y1', m.get('y0', 0)), r.get('y1', r['y0'])); m['y0'] = min(m.get('y0', 9999), r['y0'])
            out.remove(r)
        if m.get('y1') == m.get('y0'): m.pop('y1', None)
    out.sort(key=lambda r: -r['mw'])
    print('plants', len(out), {s: sum(1 for r in out if r['s'] == s) for s in ('op', 'retired', 'planned')})

    # ---------------------------------------------------------------- transmission lines: OpenStreetMap
    # HIFLD / Oak Ridge National Laboratory (federal); 115 kV and above
    LINE_URL = 'https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Electric_Power_Transmission_Lines/FeatureServer/0/query'
    qs = urllib.parse.urlencode({'where': 'VOLTAGE>=115', 'geometry': f'{L0},{B0},{L1},{B1}', 'geometryType': 'esriGeometryEnvelope', 'inSR': 4326, 'spatialRel': 'esriSpatialRelIntersects',
                                 'outFields': 'VOLTAGE,OWNER,SUB_1,SUB_2,TYPE,STATUS,SOURCEDATE,VAL_DATE', 'outSR': 4326, 'f': 'geojson', 'geometryPrecision': 4})
    gj = json.load(open(fetch(LINE_URL + '?' + qs, f'lines_hifld_{region}.geojson')))
    lines = []; clean = lambda v: '' if not v or str(v).upper().startswith(('NOT AVAIL', 'UNKNOWN', 'TAP', 'UNK')) else str(v).strip().title()
    for ft in gj['features']:
        a = ft['properties']; kv = num(a['VOLTAGE']); g = shape(ft['geometry']).intersection(frame)
        if g.is_empty or 'NOT IN SERVICE' in str(a.get('STATUS', '')).upper(): continue
        k = 'dc' if 'DC' in str(a.get('TYPE', '')).upper().split(';')[0] else '500' if kv >= 450 else '345' if kv >= 300 else '230' if kv >= 200 else '115'
        g = g.simplify(.004 if k != '115' else .008)
        for part in (g.geoms if hasattr(g, 'geoms') else [g]):
            if part.geom_type != 'LineString' or part.length < .01: continue
            rec = {'k': k, 'kv': round(kv), 'l': flat(part.coords)}
            if clean(a.get('OWNER')): rec['o'] = clean(a['OWNER'])
            ends = [clean(a.get('SUB_1')), clean(a.get('SUB_2'))]
            if all(ends): rec['e'] = ends
            lines.append(rec)
    # The federal file was last checked in 2017-2021. For the backbone (345 kV and above, and direct current) use OpenStreetMap when its
    # download is present: it is current, and it names each line. Fetch with:
    #   curl --data-urlencode 'data=[out:json][timeout:240];way["power"="line"]["voltage"](S,W,N,E);out tags geom;' https://overpass-api.de/api/interpreter > build/raw/power/lines_<id>.json
    lp = os.path.join(RAW, f'lines_{region}.json')
    if os.path.exists(lp):
        from shapely.ops import linemerge
        groups = collections.defaultdict(list)
        for w in json.load(open(lp))['elements']:
            t = w.get('tags', {})
            try:
                kv = max(float(v) for v in re.split(r'[;,/ ]+', t.get('voltage', '')) if v) / 1000
            except ValueError:
                continue
            if kv < 300 or 'geometry' not in w or len(w['geometry']) < 2: continue
            k = 'dc' if t.get('frequency') == '0' else '500' if kv >= 450 else '345'
            name = re.sub(r'\s*\d+\s*KV', '', t.get('name') or '', flags=re.I).replace('\u2010', '-').strip()
            groups[(k, round(kv), name, (t.get('operator') or '').split(';')[0][:48])].append(LineString([(g['lon'], g['lat']) for g in w['geometry']]))
        lines = [l for l in lines if l['k'] in ('115', '230')]
        for (k, kv, name, op), geoms in groups.items():
            m = linemerge(geoms) if len(geoms) > 1 else geoms[0]
            m = m.intersection(frame).simplify(.004)
            for part in (m.geoms if hasattr(m, 'geoms') else [m]):
                if part.geom_type != 'LineString' or part.length < .01: continue
                rec = {'k': k, 'kv': kv, 'l': flat(part.coords), 'osm': 1}
                if name: rec['n'] = name
                if op: rec['o'] = op
                lines.append(rec)
    print('lines', len(lines), collections.Counter(l['k'] for l in lines))

    # ---------------------------------------------------------------- natural gas pipelines: EIA
    zp = fetch(PIPE_URL, 'gas_pipelines.zip'); zd = os.path.join(RAW, 'gas_pipelines')
    if not os.path.isdir(zd): zipfile.ZipFile(zp).extractall(zd)
    shp = [os.path.join(dp, f) for dp, _, fs in os.walk(zd) for f in fs if f.endswith('.shp')][0]
    sf = shapefile.Reader(shp); fields = [f[0] for f in sf.fields[1:]]
    pipes = []
    for i in range(len(sf)):
        try:
            g = shape(sf.shape(i).__geo_interface__)       # a few records have no geometry
        except Exception:
            continue
        if g.is_empty or not g.intersects(frame): continue
        a = dict(zip(fields, sf.record(i))); g = g.intersection(frame).simplify(.006)
        for part in (g.geoms if hasattr(g, 'geoms') else [g]):
            if part.geom_type != 'LineString' or part.length < .02: continue
            pipes.append({'n': str(a.get('Operator') or '').strip(), 't': str(a.get('TYPEPIPE') or '').strip(), 'l': flat(part.coords)})
    print('pipes', len(pipes), collections.Counter(p['n'] for p in pipes).most_common(8), fields)

    # ---------------------------------------------------------------- service territories: HIFLD
    terr = []
    for st in REGIONS[region][2]:
        qs = urllib.parse.urlencode({'where': f"STATE='{st}'", 'outFields': 'NAME,TYPE,HOLDING_CO', 'outSR': 4326, 'f': 'geojson', 'geometryPrecision': 4})
        gj = json.load(open(fetch(TERR_URL + '?' + qs, f'territories_{st}.geojson')))
        for ft in gj['features']:
            g = shape(ft['geometry']).buffer(0).intersection(frame).simplify(.01)
            if g.is_empty: continue
            rings = [flat(poly.exterior.coords) for poly in (g.geoms if hasattr(g, 'geoms') else [g]) if poly.geom_type == 'Polygon' and poly.area > .0008]
            if rings: terr.append({'n': ft['properties']['NAME'].strip(), 't': ft['properties']['TYPE'], 'a': round(g.area, 3), 'r': rings})
    terr.sort(key=lambda t: -t['a'])
    print('territories', len(terr), [(t['n'], t['a']) for t in terr[:6]])

    data = dict(region=region, egridYear=EGRID_YEAR, inventory=INVENTORY, plants=out, lines=lines, pipes=pipes, territories=terr)
    os.makedirs(os.path.join(ROOT, 'power', 'data'), exist_ok=True)
    dst = os.path.join(ROOT, 'power', 'data', region + '.js')
    with open(dst, 'w') as f:
        f.write('window.POWERDATA=' + json.dumps(data, separators=(',', ':')) + ';')
    print('wrote', dst, os.path.getsize(dst) // 1024, 'KB')


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'az')
