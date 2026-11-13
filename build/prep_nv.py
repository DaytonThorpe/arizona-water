#!/usr/bin/env python3
"""Nevada prep step: download public GIS into build/raw/nv/ and write build/raw/nv/extras.json,
which build_region.py reads when baking west/data/nv.js.

Usage:  python prep_nv.py   (then: python build_region.py nv)
Needs:  shapely (to dissolve basin pieces).

What goes into extras.json (all coordinates lon/lat):
  canals  k "truckee": the Truckee Canal, which moves Truckee River water into the Carson River basin
          k "other"  : main canals of the Newlands Project, and named irrigation canals elsewhere in Nevada
  areas   k "cma"    : Diamond Valley, the state's only critical management area
          k "lwrfs"  : the Lower White River Flow System (State Engineer Order 1309)
          k "desig"  : the other groundwater basins the State Engineer has designated, in whole or in part
  basins  the 14 hydrographic regions (outlines)
  lakes   reservoir and lake outlines that Natural Earth lacks
  rivers  rivers that Natural Earth lacks (Truckee, Carson, Walker and others)
It also writes build/raw/nv/basin_table.json: for each area drawn, the State Engineer's perennial yield,
the basin's size and (when pump17.txt is present) the groundwater pumped in 2017. The content file embeds that table.

Sources
  Nevada Division of Water Resources (arcgis.water.nv.gov/arcgis/rest/services/NDWR):
    Basins_State_Engineer_Admin_Boundaries (256 hydrographic areas with designation status and perennial yield),
    Basins_State_Engineer_Hydrographic_Regions, LWRFS_Boundary, TCID_Infrastructure (Newlands Project canals).
  Nevada Division of Water Resources, "Nevada Statewide Groundwater Pumpage Inventory, Calendar Year 2017"
    (https://water.nv.gov/uploads/water-use-inventories-docs/Nevada_Groundwater_Pumpage_2017.pdf), converted to text
    with pdftotext -layout and saved as build/raw/nv/pump17.txt.
  US Geological Survey, National Hydrography Dataset (hydro.nationalmap.gov): rivers.
  OpenStreetMap contributors (Overpass API): lake outlines, and named canals outside the Newlands Project.
No line here is invented or drawn straight. Conveyances with no public geometry are left out: the Southern Nevada
  Water Authority's intakes, tunnels and pipelines at Lake Mead, the reclaimed-water pipeline to the
  Tahoe-Reno Industrial Center, and the Marlette Lake water system.
"""
import json, math, os, re, subprocess, time, urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw/nv"
os.makedirs(RAW, exist_ok=True)
BBOX = "(34.9,-120.3,42.1,-113.9)"
COSL = math.cos(math.radians(38.5))
NDWR = "https://arcgis.water.nv.gov/arcgis/rest/services/NDWR"


def fetch(url, name, post=None):
    path = f"{RAW}/{name}"
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    cmd = ["curl", "-s", "-L", "-m", "300", "-A", "water-map-build/1.0", "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=True)
    return path


def arcgis(service, name, layer=0, where="1=1", fields="*", offset=0.0005):
    """All features of a layer as GeoJSON features (pages of 1000, cached per page)."""
    feats, start = [], 0
    while True:
        qs = urllib.parse.urlencode({"where": where, "outFields": fields, "outSR": 4326, "f": "geojson", "maxAllowableOffset": offset,
                                     "geometryPrecision": 5, "resultOffset": start, "resultRecordCount": 1000})
        p = fetch(f"{NDWR}/{service}/MapServer/{layer}/query?{qs}", f"{name}_{start}.geojson")
        try:
            fs = json.load(open(p)).get("features", [])
        except Exception:
            os.remove(p); raise SystemExit(f"{service} query failed. Run again.")
        feats += fs; start += len(fs)
        if len(fs) < 1000: break
    return feats


def overpass(name, q):
    for attempt in range(4):
        p = fetch("https://overpass-api.de/api/interpreter", name, post="data=[out:json][timeout:180];" + q)
        try:
            return json.load(open(p))["elements"]
        except Exception:
            os.remove(p); time.sleep(20 * (attempt + 1))
    raise SystemExit(f"Overpass query {name} failed (busy server?). Run again.")


# ------------------------------------------------------------------ geometry helpers
def km(a, b):
    return math.hypot((a[0] - b[0]) * 111.32 * COSL, (a[1] - b[1]) * 111.2)


def length(l):
    return sum(km(l[i], l[i + 1]) for i in range(len(l) - 1))


def simplify(pts, tol_km):
    if len(pts) < 3: return pts
    P = [(p[0] * 111.32 * COSL, p[1] * 111.2) for p in pts]
    if km(pts[0], pts[-1]) < 1e-6 and len(pts) > 4:
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


def lines_of(g):
    if not g: return []
    t = g["type"]
    if t == "LineString": return [[tuple(c[:2]) for c in g["coordinates"]]]
    if t == "MultiLineString": return [[tuple(c[:2]) for c in l] for l in g["coordinates"]]
    if t == "Polygon": return [[tuple(c[:2]) for c in g["coordinates"][0]]]
    if t == "MultiPolygon": return [[tuple(c[:2]) for c in p[0]] for p in g["coordinates"]]
    return []


s = lambda v: (v or "").strip()
canals, areas, basins, lakes, rivers = [], [], [], [], []
report = {}

# ------------------------------------------------------------------ 1. groundwater basins (NDWR)
from shapely.geometry import shape
from shapely.ops import unary_union

# 2017 pumpage by basin, from the text of the NDWR inventory (optional)
pump = {}
pt = f"{RAW}/pump17.txt"
if os.path.exists(pt):
    for line in open(pt):
        m = re.match(r"^\s*(\d{3})\s+(?:([A-H])\s+)?([A-Za-z].*?)\s{2,}.*?([\d,]+)\s*$", line)
        if not m: continue
        nums = re.findall(r"(?<![\w.])\d[\d,]*(?![\w.])", line[m.end(1):])
        if len(nums) < 15: continue                       # basin rows carry 14 uses and a total
        key = m.group(1) + (m.group(2) or "")
        pump[key] = pump.get(key, 0) + int(nums[-1].replace(",", ""))
report["pumpage rows"] = len(pump)

bf = arcgis("Basins_State_Engineer_Admin_Boundaries", "ndwr_basins", fields="BasinID,BasinName,SubAreaName,DesignationStatus,PerennialYield,AreaSquareMiles,HydroRegionName", offset=0.002)
LWRFS_IDS = {"210", "215", "216", "217", "218", "219", "220", "206"}   # Order 1309 basins plus Kane Springs Valley (part of 215 only)
table = {}


def rings_of(geom, tol, min_km2):
    polys = list(geom.geoms) if geom.geom_type == "MultiPolygon" else [geom]
    out = []
    for pg in polys:
        r = simplify([tuple(c[:2]) for c in pg.exterior.coords], tol)
        if len(r) > 3 and ring_km2(r) >= min_km2: out.append(rnd(r))
    return out


def py_of(a):
    try: return int(float(s(a.get("PerennialYield")) or 0))
    except ValueError: return 0


desig = []
for f in bf:
    a = f["properties"]; bid = s(a["BasinID"]); st = s(a["DesignationStatus"])
    if not f.get("geometry"): continue
    g = shape(f["geometry"]).buffer(0)
    nm = s(a["BasinName"]); sub = s(a["SubAreaName"])
    rec = dict(id=bid, n=nm + (": " + sub if sub else ""), py=py_of(a), sq=int(a.get("AreaSquareMiles") or 0), st=st, g=g, pump=pump.get(bid))
    if bid == "153": rec["k"] = "cma"; rec["n"] = "Diamond Valley"
    elif st: rec["k"] = "desig"
    else: continue
    desig.append(rec)
# the Lower White River Flow System outline (drawn on top of its member basins, which are dropped from the list)
lw = arcgis("LWRFS_Boundary", "ndwr_lwrfs", offset=0.002)
lwg = unary_union([shape(f["geometry"]).buffer(0) for f in lw if f.get("geometry")])
report["lwrfs km2"] = round(sum(ring_km2(list(p.exterior.coords)) for p in (lwg.geoms if lwg.geom_type == "MultiPolygon" else [lwg])))
keep = []
for r in desig:
    inside = r["g"].intersection(lwg).area / max(r["g"].area, 1e-12)
    if inside > 0.6: report.setdefault("in lwrfs", []).append((r["id"], r["n"], round(inside, 2))); continue
    keep.append(r)
names = {}
for r in keep: names.setdefault(r["n"], []).append(r)
for n, rs in names.items():
    if len(rs) > 1:
        for r in rs: r["n"] = f"{n} (basin {r['id']})"
order = sorted(keep, key=lambda r: (r["k"] != "cma", r["n"]))
areas.append({"n": "Lower White River Flow System", "k": "lwrfs", "rings": rings_of(lwg, 0.8, 20)})
table["Lower White River Flow System"] = dict(k="lwrfs", sq=round(report["lwrfs km2"] / 2.59))
for r in order:
    rs = rings_of(r["g"], 1.1, 15)
    if not rs: continue
    areas.append({"n": r["n"], "k": r["k"], "rings": rs})
    table[r["n"]] = dict(id=r["id"], py=r["py"], sq=r["sq"], pu=r["pump"], part=1 if "PART" in r["st"] else 0)
json.dump(table, open(f"{RAW}/basin_table.json", "w"), separators=(",", ":"))
report["designated drawn"] = len(order)
report["designated, all 256"] = (sum(1 for f in bf if s(f["properties"]["DesignationStatus"])), len(bf))

# ------------------------------------------------------------------ 2. hydrographic regions (outlines)
for f in arcgis("Basins_State_Engineer_Hydrographic_Regions", "ndwr_regions", fields="HydroRegionName", offset=0.004):
    nm = s(f["properties"]["HydroRegionName"])
    rs = [rnd(simplify(r, 1.5)) for r in lines_of(f["geometry"]) if ring_km2(r) > 300]
    if rs: basins.append({"n": nm, "k": nm, "rings": rs})

# ------------------------------------------------------------------ 3. canals
tc = arcgis("TCID_Infrastructure", "ndwr_tcid", fields="CommonName,NAME,Description,CanalGroup,MaxCap,Length_Mi", offset=0.0003)
grp = {}
for f in tc:
    a = f["properties"]
    nm = s(a.get("CommonName")) or s(a.get("NAME"))
    grp.setdefault(nm, []).extend(lines_of(f["geometry"]))
report["tcid names"] = sorted(((n, round(sum(length(l) for l in ls), 1)) for n, ls in grp.items()), key=lambda x: -x[1])[:40]
TCID = [  # map name, [names in the layer], k, min piece km
    ("Truckee Canal", ["Truckee Canal", "TRUCKEE CANAL"], "truckee", 2),
    ("V-Line Canal", ["V-LINE"], "other", 2), ("T-Line Canal", ["T-LINE"], "other", 2), ("S-Line Canal", ["S-LINE"], "other", 2),
    ("A-Line Canal", ["A-LINE"], "other", 2), ("L-Line Canal", ["L-LINE"], "other", 2), ("G-Line Canal", ["G-LINE"], "other", 2),
]
report["tcid"] = []
for name, keys, k, minkm in TCID:
    ls = [l for key in keys for l in grp.get(key, [])]
    ls = [l for l in stitch(ls, 0.15) if length(l) >= minkm]
    for l in ls:
        canals.append({"n": name, "o": "Newlands Project (Truckee-Carson Irrigation District)", "k": k, "c": rnd(simplify(l, 0.12))})
    report["tcid"].append((name, len(ls), round(sum(length(l) for l in ls), 1)))

# named canals elsewhere (OpenStreetMap)
els = overpass("osm_canals.json", f'(way["waterway"="canal"]["name"]{BBOX};);out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append([(p["lon"], p["lat"]) for p in e["geometry"]])
have = {c["n"] for c in canals}
NV_BOX = (-120.01, 35.0, -114.03, 42.0)
report["osm canals"] = []
for nm, ls in sorted(by.items()):
    if nm in have or nm == "Truckee Canal" or re.search(r"Drain|Slough", nm): continue
    for l in stitch(ls, 0.15):
        x, y = l[len(l) // 2]
        in_nv = NV_BOX[0] < x < NV_BOX[2] and NV_BOX[1] < y < NV_BOX[3] and not (y < 39.0 and x < -120.0 + (39.0 - y) * 1.33)   # east of the diagonal California line
        if in_nv and length(l) >= 5:
            canals.append({"n": nm, "o": "", "k": "other", "c": rnd(simplify(l, 0.15))})
            report["osm canals"].append((nm, round(length(l), 1)))

# ------------------------------------------------------------------ 4. lakes and reservoirs (OpenStreetMap)
OSM_LAKES = {  # map name: ([OSM names], approximate centre)
    "Lahontan Reservoir": (["Lahontan Reservoir", "Lake Lahontan"], (-119.10, 39.42)), "Topaz Lake": (["Topaz Lake"], (-119.53, 38.69)),
    "Washoe Lake": (["Washoe Lake"], (-119.79, 39.27)), "Stampede Reservoir": (["Stampede Reservoir"], (-120.13, 39.48)),
    "Boca Reservoir": (["Boca Reservoir"], (-120.10, 39.41)), "Prosser Creek Reservoir": (["Prosser Creek Reservoir", "Prosser Reservoir"], (-120.16, 39.38)),
    "Donner Lake": (["Donner Lake"], (-120.27, 39.32)), "Bridgeport Reservoir": (["Bridgeport Reservoir"], (-119.21, 38.30)),
    "Weber Reservoir": (["Weber Reservoir"], (-118.87, 39.03)), "Wild Horse Reservoir": (["Wild Horse Reservoir"], (-115.82, 41.68)),
    "South Fork Reservoir": (["South Fork Reservoir"], (-115.78, 40.68)), "Lake Las Vegas": (["Lake Las Vegas"], (-114.93, 36.11)),
    "Marlette Lake": (["Marlette Lake"], (-119.90, 39.17)), "Independence Lake": (["Independence Lake"], (-120.31, 39.44)),
}
on = sorted({n for v in OSM_LAKES.values() for n in v[0]})
els = overpass("osm_lakes.json", f'(nwr["natural"="water"]["name"~"^({"|".join(on)})$"]{BBOX};);out geom;')
report["lakes"] = []
for name, (keys, ctr) in OSM_LAKES.items():
    rs = []
    for e in els:
        if e["tags"].get("name") not in keys: continue
        if e["type"] == "way": parts = [[(p["lon"], p["lat"]) for p in e.get("geometry") or []]]
        elif e["type"] == "relation": parts = stitch([[(p["lon"], p["lat"]) for p in m["geometry"]] for m in e["members"] if m.get("role") == "outer" and m.get("geometry")], 0.02)
        else: continue
        for r in parts:
            if len(r) < 4 or km(r[0], r[-1]) > 0.05: continue
            cx = sum(p[0] for p in r) / len(r); cy = sum(p[1] for p in r) / len(r)
            if km((cx, cy), ctr) < 25 and ring_km2(r) > 0.3: rs.append(r)
    for r in rs:
        lakes.append({"n": name, "c": rnd(simplify(r, 0.12))})
    report["lakes"].append((name, len(rs), round(sum(ring_km2(r) for r in rs), 1)))

# ------------------------------------------------------------------ 5. rivers (USGS National Hydrography Dataset)
# map name (the app appends " River" unless it ends in River/Creek/Fork/Wash): (GNIS name, rank, pieces to keep)
RIVERS = {
    "Truckee": ("Truckee River", 8, 3), "Carson": ("Carson River", 9, 4), "East Fork Carson": ("East Fork Carson River", 10, 2),
    "West Fork Carson": ("West Fork Carson River", 11, 2), "Walker": ("Walker River", 9, 4), "East Walker": ("East Walker River", 10, 3),
    "West Walker": ("West Walker River", 10, 3), "Las Vegas Wash": ("Las Vegas Wash", 10, 2), "Little Humboldt": ("Little Humboldt River", 10, 2),
    "North Fork Humboldt": ("North Fork Humboldt River", 11, 2), "South Fork Humboldt": ("South Fork Humboldt River", 11, 2),
    "Marys": ("Marys River", 11, 1), "Little Truckee": ("Little Truckee River", 11, 2), "South Fork Owyhee": ("South Fork Owyhee River", 11, 2),
}
NHD = "https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query"
RBOX = (-120.4, 34.9, -113.9, 42.1)
report["rivers"] = []
for name, (key, rank, n) in RIVERS.items():
    ls, start = [], 0
    while True:
        qs = urllib.parse.urlencode({"where": f"gnis_name='{key}'", "outFields": "gnis_name", "outSR": 4326, "f": "geojson", "maxAllowableOffset": 0.0006,
                                     "geometryPrecision": 5, "geometry": "%s,%s,%s,%s" % RBOX, "geometryType": "esriGeometryEnvelope", "inSR": 4326,
                                     "resultOffset": start, "resultRecordCount": 1000})
        p = fetch(f"{NHD}?{qs}", f"nhd_{key.replace(' ', '_')}_{start}.geojson")
        try:
            fs = json.load(open(p)).get("features", [])
        except Exception:
            os.remove(p); raise SystemExit(f"NHD query for {key} failed. Run again.")
        ls += [l for f in fs for l in lines_of(f["geometry"])]; start += len(fs)
        if len(fs) < 1000: break
    ls = sorted([l for l in stitch(ls, 0.3) if length(l) >= 4], key=length, reverse=True)[:n]
    for l in ls:
        rivers.append({"n": name, "r": rank, "c": rnd(simplify(l, 0.15))})
    report["rivers"].append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ write
out = {"canals": canals, "areas": areas, "basins": basins, "lakes": lakes, "rivers": rivers}
json.dump(out, open(f"{RAW}/extras.json", "w"), separators=(",", ":"))
for k, v in report.items(): print(k + ":", v)
print("areas:", len(areas), [(a["n"], len(a["rings"])) for a in areas[:4]])
print("basins:", [(b["n"], len(b["rings"]), sum(len(r) for r in b["rings"])) for b in basins])
print("points: canals", sum(len(o["c"]) for o in canals), "areas", sum(len(r) for a in areas for r in a["rings"]), "basins", sum(len(r) for a in basins for r in a["rings"]),
      "lakes", sum(len(o["c"]) for o in lakes), "rivers", sum(len(o["c"]) for o in rivers))
print("wrote", f"{RAW}/extras.json", os.path.getsize(f"{RAW}/extras.json") // 1024, "KB")
