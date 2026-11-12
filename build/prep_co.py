#!/usr/bin/env python3
"""Colorado prep step: download public GIS into build/raw/co/ and write build/raw/co/extras.json,
which build_region.py reads when baking west/data/co.js.

Usage:  python prep_co.py   (then: python build_region.py co)
Needs:  pyshp, pyproj, shapely (only for the water-district shapefile).

What goes into extras.json (all coordinates lon/lat):
  canals  k "tunnel": transmountain tunnels and ditches (names match the cards in west/content/co.js)
          k "other" : main irrigation canals with real surveyed geometry
  areas   k "designated": the eight designated groundwater basins (Colorado DWR)
          k "denver"    : extent of the Denver Basin aquifer system (Colorado DWR)
  basins  the seven water divisions, dissolved from the DWR water-district polygons
  lakes   reservoir outlines (OpenStreetMap) that Natural Earth lacks
  rivers  tributaries (OpenStreetMap) that Natural Earth lacks

Sources
  Colorado Division of Water Resources (DWR / CDSS): designated basins, Denver Basin extent,
    water districts, Division 3 canals, and the structures point layer used to check tunnel portals.
  OpenStreetMap contributors (Overpass API): canal, tunnel, reservoir and river geometry.
Tunnels: where OpenStreetMap has the bore it is used; otherwise a straight line joins portal
  coordinates taken from the DWR structures layer (noted per tunnel below).
"""
import io, json, math, os, subprocess, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw/co"
os.makedirs(RAW, exist_ok=True)
BBOX = "(36.9,-109.1,41.05,-102.0)"          # south, west, north, east: Colorado with a small margin
COSL = math.cos(math.radians(39.0))


def fetch(url, name, post=None):
    path = f"{RAW}/{name}"
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    cmd = ["curl", "-s", "-L", "-m", "300", "-A", "water-map-build/1.0", "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=True)
    return path


def overpass(name, q):
    p = fetch("https://overpass-api.de/api/interpreter", name, post="data=[out:json][timeout:180];" + q)
    try:
        return json.load(open(p))["elements"]
    except Exception:
        os.remove(p)
        raise SystemExit(f"Overpass query {name} failed (busy server?). Run again.")


# ------------------------------------------------------------------ geometry helpers
def km(a, b):
    return math.hypot((a[0] - b[0]) * 111.32 * COSL, (a[1] - b[1]) * 111.2)


def length(l):
    return sum(km(l[i], l[i + 1]) for i in range(len(l) - 1))


def simplify(pts, tol_km):
    """Douglas-Peucker in kilometres."""
    if len(pts) < 3: return pts
    P = [(p[0] * 111.32 * COSL, p[1] * 111.2) for p in pts]
    closed = km(pts[0], pts[-1]) < 1e-6 and len(pts) > 4
    if closed:
        m = max(range(len(P)), key=lambda i: math.hypot(P[i][0] - P[0][0], P[i][1] - P[0][1]))
        return simplify(pts[:m + 1], tol_km)[:-1] + simplify(pts[m:], tol_km)
    keep = [False] * len(P); keep[0] = keep[-1] = True
    st = [(0, len(P) - 1)]
    while st:
        a, b = st.pop()
        ax, ay = P[a]; bx, by = P[b]
        dx, dy = bx - ax, by - ay; L = math.hypot(dx, dy) or 1e-9
        md, mi = 0, -1
        for i in range(a + 1, b):
            d = abs((P[i][0] - ax) * dy - (P[i][1] - ay) * dx) / L
            if d > md: md, mi = d, i
        if md > tol_km:
            keep[mi] = True; st.append((a, mi)); st.append((mi, b))
    return [p for p, k in zip(pts, keep) if k]


def stitch(lines, eps_km=0.03):
    """Join polylines that share end points into longer ones."""
    lines = [list(l) for l in lines if len(l) > 1]
    out = []
    while lines:
        cur = lines.pop()
        grew = True
        while grew:
            grew = False
            for i, l in enumerate(lines):
                if km(cur[-1], l[0]) < eps_km: cur = cur + l[1:]
                elif km(cur[-1], l[-1]) < eps_km: cur = cur + l[::-1][1:]
                elif km(cur[0], l[-1]) < eps_km: cur = l + cur[1:]
                elif km(cur[0], l[0]) < eps_km: cur = l[::-1] + cur[1:]
                else: continue
                lines.pop(i); grew = True; break
        out.append(cur)
    return out


def ring_km2(r):
    return abs(sum(r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1] for i in range(len(r) - 1))) / 2 * 111.32 * COSL * 111.2


def rnd(l):
    return [[round(p[0], 4), round(p[1], 4)] for p in l]


def way_pts(e):
    return [(p["lon"], p["lat"]) for p in e.get("geometry") or []]


def in_box(l, box):          # box = (west, south, east, north); True if the line's midpoint is inside
    x, y = l[len(l) // 2]
    return box[0] <= x <= box[2] and box[1] <= y <= box[3]


canals, areas, basins, lakes, rivers = [], [], [], [], []

# ------------------------------------------------------------------ 1. tunnels and transmountain ditches
# Portal coordinates checked against the DWR structures layer (WDID in brackets) and OpenStreetMap.
els = overpass("osm_tunnels.json",
               f'(way["man_made"="pipeline"]["name"~"Adams Tunnel|Roberts Tunnel|Boustead Tunnel|Gunnison Tunnel|Hoosier Pass Tunnel"]{BBOX};'
               f'way["waterway"]["name"~"Roberts Tunnel|Laramie-Poudre Tunnel|^Grand Ditch$"]{BBOX};);out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append(way_pts(e))


def osm_line(key, exact=False):
    ls = [l for n, v in by.items() if (n == key if exact else key in n) for l in v]
    ls = sorted(stitch(ls, 0.2), key=length, reverse=True)
    return ls[0] if ls else None


TUNNELS = [
    # name on the map, owner, OSM name fragment (or None), fallback straight line [west/inlet portal, east/outlet portal]
    ("Alva B. Adams Tunnel", "Colorado-Big Thompson Project", "Adams Tunnel",
     [(-105.8014, 40.2416), (-105.5784, 40.3276)]),        # DWR 5104634 (Grand Lake) and 0404634 (Wind River, Estes Park)
    ("Moffat Water Tunnel", "Denver Water", None,
     [(-105.7612, 39.8872), (-105.6455, 39.9018)]),        # DWR 5104655 (Fraser River) and 0604655 (South Boulder Creek)
    ("Harold D. Roberts Tunnel", "Denver Water", "Roberts Tunnel",
     [(-106.0461, 39.6171), (-105.6762, 39.4613)]),        # OSM intake at Dillon; DWR 8000653 (North Fork South Platte)
    ("Charles H. Boustead Tunnel", "Fryingpan-Arkansas Project", "Boustead Tunnel",
     [(-106.5305, 39.2444), (-106.4368, 39.2775)]),        # DWR 3804625 (Fryingpan) and 1104615 (outlet, Lake Fork)
    ("Homestake Tunnel", "Aurora and Colorado Springs", None,
     [(-106.4664, 39.3568), (-106.4406, 39.2806)]),        # DWR 3704614 (Homestake Creek) and 1104613 (outlet, Lake Fork)
    ("Twin Lakes Tunnel", "Twin Lakes Reservoir and Canal Co.", None,
     [(-106.6110, 39.0780), (-106.5406, 39.0822)]),        # Grizzly Reservoir (OSM outline, east end) and DWR 1104617 (North Fork Lake Creek)
    ("Gunnison Tunnel", "Uncompahgre Valley Water Users", "Gunnison Tunnel",
     [(-107.6499, 38.5242), (-107.7438, 38.4840)]),        # DWR 6200617 (Gunnison River); west portal from OSM
    ("Hoosier Pass Tunnel", "Colorado Springs Utilities", "Hoosier Pass Tunnel",
     [(-106.0720, 39.3849), (-106.0775, 39.3600)]),        # OSM; DWR 2304612 (outlet, Middle Fork South Platte)
    ("Laramie-Poudre Tunnel", "", "Laramie-Poudre Tunnel",
     [(-105.8519, 40.6763), (-105.8114, 40.6694)]),        # OSM; DWR 4800576 (Laramie River)
]
tunnel_report = []
for name, owner, key, straight in TUNNELS:
    l = osm_line(key) if key else None
    if l and abs(length(l) - km(*straight)) < 0.35 * km(*straight) + 1:
        tunnel_report.append((name, "OpenStreetMap bore", round(length(l), 1)))
    else:
        l = straight
        tunnel_report.append((name, "straight line between portals", round(length(l), 1)))
    canals.append({"n": name, "o": owner, "k": "tunnel", "c": rnd(simplify(l, 0.05))})
gd = sorted(stitch(by.get("Grand Ditch", []), 0.3), key=length, reverse=True)
if gd:
    for l in gd[:2]:
        if length(l) > 3:
            canals.append({"n": "Grand River Ditch", "o": "Water Supply and Storage Co.", "k": "tunnel", "c": rnd(simplify(l, 0.12))})
    tunnel_report.append(("Grand River Ditch", "OpenStreetMap ditch line", round(sum(length(l) for l in gd[:2]), 1)))

# ------------------------------------------------------------------ 2. main canals (OpenStreetMap), k "other"
els = overpass("osm_canals.json",
               '(way["waterway"~"canal|ditch"]["name"~"Highline Canal|High Line Canal|Grand Valley Canal|Orchard Mesa Canal|Fort Lyon Canal|Bessemer Ditch|'
               'Catlin Canal|^Colorado Canal$|Larimer and Weld Canal|Greeley Number 2 Canal|Bijou Canal|Charles Hansen|'
               f'North Sterling Canal|North Sterling Outlet Canal|Riverside Canal|North Poudre Supply Canal"]{BBOX};);out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append(way_pts(e))
CANALS = [
    # map name, owner, [OSM names], bounding box or None, minimum piece length km
    ("Government Highline Canal", "Grand Valley Water Users Association", ["Government Highline Canal"], None, 4),
    ("Grand Valley Canal", "Grand Valley Irrigation Co.", ["Grand Valley Canal", "Main Line Grand Valley Canal"], None, 4),
    ("Orchard Mesa Canals", "Orchard Mesa Irrigation District", ["Orchard Mesa Canal Number 1", "Orchard Mesa Canal Number 2"], None, 4),
    ("Fort Lyon Canal", "Fort Lyon Canal Co.", ["Fort Lyon Canal"], None, 5),
    ("Colorado Canal", "Colorado Canal Co.", ["Colorado Canal"], (-104.6, 38.0, -103.4, 38.5), 5),
    ("Bessemer Ditch", "Bessemer Irrigating Ditch Co.", ["Bessemer Ditch"], None, 5),
    ("Rocky Ford Highline Canal", "Rocky Ford Highline Canal Co.", ["Rocky Ford Highline Canal"], None, 5),
    ("Catlin Canal", "Catlin Canal Co.", ["Catlin Canal"], None, 5),
    ("High Line Canal", "Denver Water", ["High Line Canal"], (-105.3, 39.4, -104.6, 39.9), 4),
    ("Larimer and Weld Canal", "Larimer and Weld Irrigation Co.", ["Larimer and Weld Canal"], None, 4),
    ("Greeley No. 2 Canal", "New Cache la Poudre Irrigating Co.", ["Greeley Number 2 Canal"], None, 5),
    ("Charles Hansen Feeder Canal", "Colorado-Big Thompson Project", ["Charles Hansen Canal", "Charles Hansen Feeder Canal", "Charles Hansen Supply Canal"], None, 3),
    ("Bijou Canal", "Bijou Irrigation Co.", ["Bijou Canal"], None, 5),
    ("Riverside Canal", "Riverside Irrigation District", ["Riverside Canal"], (-104.6, 40.1, -103.6, 40.6), 5),
    ("North Sterling Canal", "North Sterling Irrigation District", ["North Sterling Canal", "North Sterling Outlet Canal"], None, 5),
]
canal_report = []
for name, owner, keys, box, minkm in CANALS:
    ls = [l for k in keys for l in by.get(k, [])]
    ls = [l for l in stitch(ls, 0.15) if length(l) >= minkm and (not box or in_box(l, box))]
    tot = 0
    for l in ls:
        canals.append({"n": name, "o": owner, "k": "other", "c": rnd(simplify(l, 0.18))}); tot += length(l)
    canal_report.append((name, len(ls), round(tot)))

# San Luis Valley canals: official CDSS Division 3 shapefile (UTM 13N), main stems only
try:
    import shapefile
    from pyproj import Transformer
    from shapely.geometry import Polygon
    from shapely.ops import unary_union
    HAVE_SHP = True
except ImportError:
    HAVE_SHP = False
    print("pyshp / pyproj / shapely missing: skipping Division 3 canals and water divisions")


def read_shp(zipname, url):
    zf = zipfile.ZipFile(fetch(url, zipname)); base = zipname[:-4]
    return shapefile.Reader(shp=io.BytesIO(zf.read(base + ".shp")), dbf=io.BytesIO(zf.read(base + ".dbf")), shx=io.BytesIO(zf.read(base + ".shx")))


if HAVE_SHP:
    T = Transformer.from_crs(26913, 4326, always_xy=True)
    ll = lambda pts: [T.transform(x, y) for x, y in pts]
    D3 = {"RIO GRANDE CNL": ("Rio Grande Canal", "Rio Grande Canal Water Users Association", 9), "FARMERS UNION CNL": ("Farmers Union Canal", "San Luis Valley Irrigation District", 8),
          "EMPIRE CNL": ("Empire Canal", "", 8), "MONTE VISTA CNL": ("Monte Vista Canal", "", 6), "SAN LUIS VALLEY CNL": ("San Luis Valley Canal", "", 8),
          "SAN LUIS PEOPLES D": ("San Luis People's Ditch", "", 1.5)}
    got = {}
    for sr in read_shp("Div3_Canals.zip", "https://dnrftp.state.co.us/CDSS/GIS/Div3_Canals.zip").iterShapeRecords():
        nm = sr.record.as_dict()["NAME"]
        if nm in D3:
            pts, parts = sr.shape.points, list(sr.shape.parts) + [len(sr.shape.points)]
            for a, b in zip(parts, parts[1:]):
                got.setdefault(nm, []).append(ll(pts[a:b]))
    for nm, (name, owner, minkm) in D3.items():
        ls = sorted([l for l in stitch(got.get(nm, []), 0.1) if length(l) >= minkm], key=length, reverse=True)[:3]
        for l in ls:
            canals.append({"n": name, "o": owner, "k": "other", "c": rnd(simplify(l, 0.18))})
        canal_report.append((name + " (CDSS)", len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ 3. groundwater areas
gj = json.load(open(fetch("https://gisdnr.state.co.us/arcgis/rest/services/CSLB_External/Water/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson", "designated.geojson")))


def poly_rings(g, tol, min_km2):
    polys = g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
    out = []
    for p in polys:
        r = simplify([tuple(c[:2]) for c in p[0]], tol)
        if len(r) > 3 and ring_km2(r) >= min_km2: out.append(rnd(r))
    return out


for ft in gj["features"]:
    nm = ft["properties"].get("DB_NAME") or ft["properties"].get("db_name")
    nm = " ".join(w.capitalize() for w in nm.replace("-", " ").split())
    nm = nm.replace("Kiowa Bijou", "Kiowa-Bijou")
    rs = poly_rings(ft["geometry"], 0.35, 5)
    if rs: areas.append({"n": nm, "k": "designated", "rings": rs, "sqmi": ft["properties"].get("AREA_MI")})
gj = json.load(open(fetch("https://gisdnr.state.co.us/arcgis/rest/services/CSLB_External/Water/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=geojson", "denver_basin.geojson")))
for ft in gj["features"]:
    rs = poly_rings(ft["geometry"], 0.35, 20)
    if rs: areas.append({"n": "Denver Basin", "k": "denver", "rings": rs})

# ------------------------------------------------------------------ 4. the seven water divisions
DIVS = {1: "South Platte", 2: "Arkansas", 3: "Rio Grande", 4: "Gunnison", 5: "Colorado", 6: "Yampa, White and North Platte", 7: "San Juan and Dolores"}
if HAVE_SHP:
    groups = {}
    for sr in read_shp("Water_Districts.zip", "https://dnrftp.state.co.us/CDSS/GIS/Water_Districts.zip").iterShapeRecords():
        pts, parts = sr.shape.points, list(sr.shape.parts) + [len(sr.shape.points)]
        for a, b in zip(parts, parts[1:]):
            pg = Polygon(pts[a:b]).buffer(0)
            if pg.area > 1e6: groups.setdefault(int(sr.record.as_dict()["DIVISION"]), []).append(pg.buffer(150))   # close slivers between districts
    for d in sorted(groups):
        u = unary_union(groups[d]).buffer(-150)
        polys = list(u.geoms) if u.geom_type == "MultiPolygon" else [u]
        rs = []
        for pg in polys:
            if pg.area < 2e8: continue
            r = simplify(ll(list(pg.exterior.coords)), 0.5)
            if len(r) > 3: rs.append(rnd(r))
        basins.append({"n": f"Division {d}: {DIVS[d]}", "k": str(d), "rings": rs})

# ------------------------------------------------------------------ 5. reservoir outlines (OpenStreetMap)
# name on the map: (OSM names, approximate centre used to pick the right lake where a name repeats)
LAKES = {
    "Dillon Reservoir": (["Dillon Reservoir"], (-106.06, 39.60)), "Horsetooth Reservoir": (["Horsetooth Reservoir"], (-105.16, 40.55)),
    "Carter Lake": (["Carter Lake Reservoir", "Carter Lake"], (-105.22, 40.34)), "Green Mountain Reservoir": (["Green Mountain Reservoir"], (-106.28, 39.87)),
    "Pueblo Reservoir": (["Pueblo Reservoir", "Lake Pueblo"], (-104.78, 38.27)), "John Martin Reservoir": (["John Martin Reservoir"], (-102.98, 38.07)),
    "McPhee Reservoir": (["McPhee Reservoir"], (-108.54, 37.53)), "Eleven Mile Canyon Reservoir": (["Elevenmile Canyon Reservoir"], (-105.51, 38.92)),
    "Gross Reservoir": (["Gross Reservoir"], (-105.37, 39.95)), "Lake Nighthorse": (["Lake Nighthorse"], (-107.92, 37.23)),
    "Wolford Mountain Reservoir": (["Wolford Mountain Reservoir"], (-106.41, 40.15)), "Turquoise Lake": (["Turquoise Lake"], (-106.39, 39.27)),
    "Twin Lakes": (["Twin Lakes"], (-106.34, 39.08)), "Grand Lake": (["Grand Lake"], (-105.81, 40.24)), "Shadow Mountain Lake": (["Shadow Mountain Lake"], (-105.84, 40.23)),
    "Cheesman Lake": (["Cheesman Lake"], (-105.29, 39.19)), "Antero Reservoir": (["Antero Reservoir"], (-105.92, 38.98)),
    "Spinney Mountain Reservoir": (["Spinney Mountain Reservoir"], (-105.64, 38.98)), "Ruedi Reservoir": (["Ruedi Reservoir"], (-106.78, 39.36)),
    "Williams Fork Reservoir": (["Williams Fork Reservoir"], (-106.21, 40.02)), "Taylor Park Reservoir": (["Taylor Park Reservoir"], (-106.58, 38.84)),
    "Ridgway Reservoir": (["Ridgway Reservoir"], (-107.74, 38.22)), "Morrow Point Reservoir": (["Morrow Point Reservoir"], (-107.45, 38.45)),
    "Vallecito Reservoir": (["Vallecito Reservoir"], (-107.55, 37.41)), "Chatfield Reservoir": (["Chatfield Reservoir"], (-105.07, 39.54)),
    "Cherry Creek Reservoir": (["Cherry Creek Reservoir"], (-104.85, 39.64)), "Aurora Reservoir": (["Aurora Reservoir"], (-104.67, 39.61)),
    "Rueter-Hess Reservoir": (["Rueter-Hess Reservoir"], (-104.83, 39.48)), "Stagecoach Reservoir": (["Stagecoach Reservoir"], (-106.85, 40.28)),
    "Homestake Reservoir": (["Homestake Reservoir"], (-106.47, 39.36)), "Rio Grande Reservoir": (["Rio Grande Reservoir"], (-107.31, 37.74)),
    "Platoro Reservoir": (["Platoro Reservoir"], (-106.57, 37.33)), "Sanchez Reservoir": (["Sanchez Reservoir"], (-105.41, 37.09)),
    "Trinidad Lake": (["Trinidad Lake"], (-104.57, 37.14)), "Jackson Lake": (["Jackson Lake"], (-104.08, 40.39)), "Riverside Reservoir": (["Riverside Reservoir"], (-104.27, 40.34)),
    "Empire Reservoir": (["Empire Reservoir"], (-104.17, 40.27)), "Prewitt Reservoir": (["Prewitt Reservoir"], (-103.37, 40.42)),
    "North Sterling Reservoir": (["North Sterling Reservoir"], (-103.30, 40.79)), "Julesburg Reservoir": (["Julesburg Reservoir"], (-102.65, 40.93)),
    "Barr Lake": (["Barr Lake"], (-104.77, 39.94)), "Standley Lake": (["Standley Lake"], (-105.13, 39.87)), "Boyd Lake": (["Boyd Lake"], (-105.04, 40.43)),
    "Vega Reservoir": (["Vega Reservoir"], (-107.79, 39.22)), "Neenoshe Reservoir": (["Neenoshe Reservoir"], (-102.70, 38.34)),
    "Narraguinnep Reservoir": (["Narraguinnep Reservoir"], (-108.62, 37.49)), "Lemon Reservoir": (["Lemon Reservoir"], (-107.66, 37.40)),
    "Paonia Reservoir": (["Paonia Reservoir"], (-107.34, 38.96)), "Union Reservoir": (["Union Reservoir"], (-105.04, 40.18)), "Marston Lake": (["Marston Lake"], (-105.07, 39.63)),
    "Windy Gap Reservoir": (["Windy Gap Reservoir"], (-105.98, 40.10)), "Willow Creek Reservoir": (["Willow Creek Reservoir"], (-105.96, 40.15)),
    "Crystal Reservoir": (["Crystal Reservoir"], (-107.59, 38.49)), "Clear Creek Reservoir": (["Clear Creek Reservoir"], (-106.26, 39.02)),
}
allnames = sorted({n for v in LAKES.values() for n in v[0]})
els = overpass("osm_lakes.json", f'(nwr["natural"="water"]["name"~"^({"|".join(allnames)})$"]{BBOX};);out geom;')
lake_report = []
for name, (keys, ctr) in LAKES.items():
    rings = []
    for e in els:
        if e["tags"].get("name") not in keys: continue
        if e["type"] == "way": parts = [way_pts(e)]
        elif e["type"] == "relation": parts = stitch([way_pts(m) for m in e["members"] if m.get("role") == "outer" and m.get("geometry")], 0.02)
        else: continue
        for r in parts:
            if len(r) < 4 or km(r[0], r[-1]) > 0.05: continue
            cx = sum(p[0] for p in r) / len(r); cy = sum(p[1] for p in r) / len(r)
            if km((cx, cy), ctr) < 12 and ring_km2(r) > 0.25: rings.append(r)
    for r in rings:
        lakes.append({"n": name, "c": rnd(simplify(r, 0.12))})
    lake_report.append((name, len(rings), round(sum(ring_km2(r) for r in rings), 1)))

# ------------------------------------------------------------------ 6. tributary rivers (OpenStreetMap)
# map name (the app appends " River" unless it ends in River/Creek/Fork): (OSM name, box or None, rank)
RIVERS = {
    "Blue": ("Blue River", None, 9), "Eagle": ("Eagle River", None, 9), "Roaring Fork": ("Roaring Fork River", None, 9), "Fryingpan": ("Fryingpan River", None, 10),
    "Williams Fork": ("Williams Fork", (-106.6, 39.6, -105.8, 40.2), 10), "Fraser": ("Fraser River", None, 10),
    "Cache la Poudre": ("Cache la Poudre River", None, 9), "Big Thompson": ("Big Thompson River", None, 9),
    "Boulder Creek": ("Boulder Creek", (-105.8, 39.9, -104.9, 40.2), 10), "South Boulder Creek": ("South Boulder Creek", None, 11),
    "Clear Creek": ("Clear Creek", (-106.0, 39.6, -104.9, 39.9), 10), "Cherry Creek": ("Cherry Creek", (-105.1, 39.2, -104.6, 39.8), 11),
    "Fountain Creek": ("Fountain Creek", None, 10), "Huerfano": ("Huerfano River", None, 10), "Apishapa": ("Apishapa River", None, 11),
    "Lake Creek": ("Lake Creek", (-106.7, 38.95, -106.2, 39.2), 11),
    "Uncompahgre": ("Uncompahgre River", None, 9), "North Fork Gunnison": ("North Fork Gunnison River", None, 10), "East": ("East River", None, 11),
    "Tomichi Creek": ("Tomichi Creek", None, 11), "Lake Fork Gunnison": ("Lake Fork Gunnison River", None, 11), "Crystal": ("Crystal River", None, 10),
    "San Miguel": ("San Miguel River", None, 9), "Elk": ("Elk River", None, 10),
    "Conejos": ("Conejos River", None, 9), "Los Pinos": ("Los Pinos River", (-108.0, 36.9, -107.3, 37.7), 10), "Piedra": ("Piedra River", None, 10),
    "La Plata": ("La Plata River", None, 10), "Mancos": ("Mancos River", None, 10), "Florida": ("Florida River", None, 11), "McElmo Creek": ("McElmo Creek", None, 11),
    "Navajo": ("Navajo River", None, 11),
}
names = sorted({v[0] for v in RIVERS.values()})
els = overpass("osm_rivers.json", f'(way["waterway"~"river|stream"]["name"~"^({"|".join(names)})$"]{BBOX};);out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append(way_pts(e))
river_report = []
for name, (key, box, rank) in RIVERS.items():
    ls = [l for l in stitch(by.get(key, []), 0.08) if length(l) >= 6 and (not box or in_box(l, box))]
    ls = sorted(ls, key=length, reverse=True)[:4]
    for l in ls:
        rivers.append({"n": name, "r": rank, "c": rnd(simplify(l, 0.15))})
    river_report.append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ write
out = {"canals": canals, "areas": areas, "basins": basins, "lakes": lakes, "rivers": rivers}
json.dump(out, open(f"{RAW}/extras.json", "w"), separators=(",", ":"))
npts = lambda key, f: sum(len(f(o)) for o in out[key])
print("tunnels:"); [print("  ", *t) for t in tunnel_report]
print("canals (pieces, km):", canal_report)
print("areas:", [(a["n"], len(a["rings"]), sum(len(r) for r in a["rings"])) for a in areas])
print("divisions:", [(b["n"], len(b["rings"]), sum(len(r) for r in b["rings"])) for b in basins])
print("lakes (rings, km2):", lake_report)
print("rivers (pieces, km):", river_report)
print("points: canals", npts("canals", lambda o: o["c"]), "areas", sum(len(r) for a in areas for r in a["rings"]), "basins", sum(len(r) for a in basins for r in a["rings"]),
      "lakes", npts("lakes", lambda o: o["c"]), "rivers", npts("rivers", lambda o: o["c"]))
print("wrote", f"{RAW}/extras.json", os.path.getsize(f"{RAW}/extras.json") // 1024, "KB")
