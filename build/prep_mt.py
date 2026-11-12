#!/usr/bin/env python3
"""Montana prep step: download public GIS into build/raw/mt/ and write build/raw/mt/extras.json,
which build_region.py reads when baking west/data/mt.js.

Usage:  python prep_mt.py   (then: python build_region.py mt)

What goes into extras.json (all coordinates lon/lat):
  canals  k "stmary": the St. Mary Canal (Montana DNRC survey lines), drawn highlighted
          k "other" : main irrigation canals with real geometry (OpenStreetMap)
  areas   k "cgwa"   : controlled groundwater areas (Montana DNRC)
          k "closure": basins closed to most new water rights (Montana DNRC), dissolved to a few shapes
  basins  the four state water planning basins (Montana DNRC)
  lakes   reservoir and lake outlines (OpenStreetMap) that Natural Earth lacks
  rivers  tributaries (OpenStreetMap) that Natural Earth lacks

Sources
  Montana DNRC ArcGIS server (gis.dnrc.mt.gov, folder WRD): WMB_StMary, WRD (layers 11 and 12),
    PIC_PlanningBasinBoundaries.
  OpenStreetMap contributors (Overpass API): canal, lake and river geometry.
No line is invented: a canal that neither source has is left out.
"""
import json, math, os, subprocess, sys, time, urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw/mt"
os.makedirs(RAW, exist_ok=True)
BBOX = "(44.3,-116.1,49.05,-104.0)"          # south, west, north, east
COSL = math.cos(math.radians(47.0))
DNRC = "https://gis.dnrc.mt.gov/arcgis/rest/services/WRD"


def fetch(url, name, post=None):
    path = f"{RAW}/{name}"
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    cmd = ["curl", "-s", "-L", "-m", "300", "-A", "water-map-build/1.0", "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=True)
    return path


def overpass(name, q):
    for attempt in range(4):
        p = fetch("https://overpass-api.de/api/interpreter", name, post="data=[out:json][timeout:180];" + q)
        try:
            return json.load(open(p))["elements"]
        except Exception:
            os.remove(p); time.sleep(20 * (attempt + 1))
    raise SystemExit(f"Overpass query {name} failed (busy server?). Run again.")


def arcgis(name, service, layer, where="1=1", fields="*", offset=0.0005):
    qs = urllib.parse.urlencode({"where": where, "outFields": fields, "outSR": 4326, "f": "geojson", "maxAllowableOffset": offset, "geometryPrecision": 5})
    return json.load(open(fetch(f"{DNRC}/{service}/MapServer/{layer}/query?{qs}", name)))


# ------------------------------------------------------------------ geometry helpers
def km(a, b):
    return math.hypot((a[0] - b[0]) * 111.32 * COSL, (a[1] - b[1]) * 111.2)


def length(l):
    return sum(km(l[i], l[i + 1]) for i in range(len(l) - 1))


def simplify(pts, tol_km):
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


def in_box(l, box):
    x, y = l[len(l) // 2]
    return box[0] <= x <= box[2] and box[1] <= y <= box[3]


def gj_lines(g):
    if not g: return []
    t = g["type"]
    if t == "LineString": return [g["coordinates"]]
    if t == "MultiLineString": return g["coordinates"]
    return []


def gj_polys(g):
    if not g: return []
    return [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"] if g["type"] == "MultiPolygon" else []


canals, areas, basins, lakes, rivers = [], [], [], [], []

# ------------------------------------------------------------------ 1. St. Mary Canal (Montana DNRC survey lines)
# Layers 14-20 are the seven canal reaches, 21-24 the two siphons (St. Mary River and Halls Coulee), each with two barrels.
sm = []
for lyr in list(range(14, 21)) + [21, 23]:
    for ft in arcgis(f"stmary_{lyr}.geojson", "WMB_StMary", lyr)["features"]:
        sm += [[tuple(c[:2]) for c in l] for l in gj_lines(ft["geometry"])]
sm = sorted(stitch(sm, 0.4), key=length, reverse=True)
sm_km = 0
for l in sm:
    if length(l) < 0.3: continue
    canals.append({"n": "St. Mary Canal", "o": "Milk River Project (Bureau of Reclamation)", "k": "stmary", "c": rnd(simplify(l, 0.05))}); sm_km += length(l)

# ------------------------------------------------------------------ 2. main canals (OpenStreetMap), k "other"
els = json.load(open(fetch("https://overpass-api.de/api/interpreter", "osm_canals_all.json",
                           post=f'data=[out:json][timeout:180];(way["waterway"="canal"]["name"]{BBOX};);out tags geom;')))["elements"]
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append(way_pts(e))
CANALS = [
    # map name, owner, [OSM names], bounding box (west, south, east, north) or None, minimum piece length km, max pieces
    ("Lower Yellowstone Main Canal", "Lower Yellowstone Project", ["Main Canal"], (-105.0, 47.0, -103.9, 48.1), 5, 3),
    ("Huntley Project Main Canal", "Huntley Project Irrigation District", ["Main Canal"], (-108.5, 45.7, -107.6, 46.2), 4, 3),
    ("Billings Bench Canal", "Billings Bench Water Association", ["Billings Canal"], None, 5, 3),
    ("Big Ditch", "Big Ditch Co.", ["Big Ditch"], (-109.4, 45.4, -108.3, 45.9), 5, 2),
    ("Bighorn Canal", "Crow Irrigation Project", ["Big Horn Canal"], (-108.2, 45.0, -107.3, 46.0), 5, 3),
    ("Dodson South Canal", "Milk River Project", ["Dodson South Canal"], None, 5, 3),
    ("Vandalia South Canal", "Milk River Project", ["Vandalia South Canal"], None, 5, 2),
    ("Nelson South Canal", "Milk River Project", ["Nelson South Canal"], None, 5, 2),
    ("Bitter Root Irrigation District Canal", "Bitter Root Irrigation District", ["Bitterroot Irrigation District Canal"], None, 5, 3),
    ("Two Medicine Canal", "Blackfeet Irrigation Project", ["Two Medicine Canal"], None, 5, 3),
    ("Pablo Feeder Canal", "Flathead Indian Irrigation Project", ["Pablo Feeder Canal"], None, 5, 3),
    ("Helena Valley Canal", "Helena Valley Irrigation District", ["Helena Valley Irrigation"], None, 4, 3),
    ("East Bench Canal", "East Bench Irrigation District", ["East Bench Canal"], None, 5, 2),
    ("Cartersville Canal", "Cartersville Irrigation District", ["Cartersville Canal"], None, 5, 2),
    ("Greenfields Canal", "Greenfields Irrigation District", ["Greenfields Main Canal", "Greenfields South Canal"], None, 3, 3),
]
canal_report = [("St. Mary Canal (DNRC)", len(sm), round(sm_km))]
for name, owner, keys, box, minkm, maxn in CANALS:
    ls = [l for k in keys for l in by.get(k, [])]
    ls = [l for l in stitch(ls, 0.15) if length(l) >= minkm and (not box or in_box(l, box))]
    ls = sorted(ls, key=length, reverse=True)[:maxn]
    for l in ls:
        canals.append({"n": name, "o": owner, "k": "other", "c": rnd(simplify(l, 0.2))})
    canal_report.append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ 3. groundwater-layer areas (Montana DNRC)
def poly_rings(g, tol, min_km2):
    out = []
    for p in gj_polys(g):
        r = simplify([tuple(c[:2]) for c in p[0]], tol)
        if len(r) > 3 and ring_km2(r) >= min_km2: out.append(rnd(r))
    return out


cg = arcgis("cgwa.geojson", "WRD", 11, fields="NAME,STATUS,ACREAGE", offset=0.002)
cg_report = []
for ft in cg["features"]:
    pr = ft["properties"]
    nm = pr.get("NAME") or "Controlled groundwater area"
    nm = {"USNPS Montana Compact Yellowstone": "Yellowstone Controlled Groundwater Area"}.get(nm, nm)
    rs = poly_rings(ft["geometry"], 0.4, 3)
    if rs:
        areas.append({"n": nm.strip(), "k": "cgwa", "rings": rs}); cg_report.append((nm.strip(), round(sum(ring_km2(r) for r in rs))))

cl = arcgis("closures.geojson", "WRD", 12, where="CLOSURE_TYPE='Legislative'", fields="NAME,CLOSURE_TYPE", offset=0.004)   # the five basins closed by statute
try:
    from shapely.geometry import shape
    from shapely.ops import unary_union
    groups, closed = {}, []
    for ft in cl["features"]:
        pr = ft["properties"]
        nm = pr.get("NAME") or "Closure"
        groups.setdefault(nm.strip(), []).append(shape(ft["geometry"]).buffer(0))
    cl_report = []
    for nm, gs in groups.items():
        u = unary_union([g.buffer(0.003) for g in gs]).buffer(-0.003)
        polys = list(u.geoms) if u.geom_type == "MultiPolygon" else [u]
        rs = []
        for pg in polys:
            r = simplify([tuple(c[:2]) for c in pg.exterior.coords], 1.2)
            if len(r) > 3 and ring_km2(r) >= 60: rs.append(rnd(r))
        if rs:
            closed.append({"n": nm, "k": "closure", "rings": rs}); cl_report.append((nm, len(rs), round(sum(ring_km2(r) for r in rs))))
    # the app tests areas in list order when clicked: small controlled areas first, then closures from smallest to largest
    areas += sorted(closed, key=lambda a: sum(ring_km2(r) for r in a["rings"]))
except ImportError:
    cl_report = ["shapely missing: closures skipped"]

# ------------------------------------------------------------------ 4. the four state water planning basins
pb = arcgis("planning_basins.geojson", "PIC_PlanningBasinBoundaries", 0, fields="BASIN_NAME,FIRST_AREA_SQMI", offset=0.004)
for ft in pb["features"]:
    pr = ft["properties"]
    nm = pr.get("BASIN_NAME") or "Basin"
    rs = poly_rings(ft["geometry"], 1.2, 500)
    if rs: basins.append({"n": nm.strip(), "k": "", "rings": rs})

# ------------------------------------------------------------------ 5. lake and reservoir outlines (OpenStreetMap)
LAKES = {
    "Bighorn Lake": (["Bighorn Lake", "Bighorn Reservoir"], (-108.2, 45.15), 60), "Tongue River Reservoir": (["Tongue River Reservoir"], (-106.78, 45.08), 15),
    "Holter Lake": (["Holter Lake"], (-111.95, 46.90), 20), "Hauser Lake": (["Hauser Lake"], (-111.87, 46.72), 15), "Lake Helena": (["Lake Helena"], (-111.93, 46.70), 10),
    "Gibson Reservoir": (["Gibson Reservoir"], (-112.83, 47.60), 12), "Pishkun Reservoir": (["Pishkun Reservoir"], (-112.48, 47.69), 10),
    "Willow Creek Reservoir": (["Willow Creek Reservoir"], (-112.43, 47.55), 10), "Lake Frances": (["Lake Frances"], (-112.27, 48.28), 12),
    "Noxon Reservoir": (["Noxon Reservoir", "Noxon Rapids Reservoir"], (-115.6, 47.85), 40), "Cabinet Gorge Reservoir": (["Cabinet Gorge Reservoir"], (-115.95, 48.05), 20),
    "Lake Sherburne": (["Lake Sherburne"], (-113.55, 48.82), 10), "Saint Mary Lake": (["Saint Mary Lake"], (-113.5, 48.7), 14), "Lower Saint Mary Lake": (["Lower Saint Mary Lake"], (-113.42, 48.80), 10),
    "Lake McDonald": (["Lake McDonald"], (-113.9, 48.58), 14), "Whitefish Lake": (["Whitefish Lake"], (-114.38, 48.45), 10), "Swan Lake": (["Swan Lake"], (-113.87, 47.93), 12),
    "Georgetown Lake": (["Georgetown Lake"], (-113.3, 46.19), 10), "Ennis Lake": (["Ennis Lake"], (-111.68, 45.44), 10), "Lima Reservoir": (["Lima Reservoir"], (-112.2, 44.65), 15),
    "Deadmans Basin Reservoir": (["Deadmans Basin Reservoir", "Deadman's Basin Reservoir"], (-109.42, 46.33), 10), "Lake Como": (["Lake Como"], (-114.25, 46.06), 8),
    "Painted Rocks Lake": (["Painted Rocks Lake", "Painted Rocks Reservoir"], (-114.3, 45.70), 8), "Hyalite Reservoir": (["Hyalite Reservoir"], (-110.96, 45.48), 6),
    "Cooney Reservoir": (["Cooney Reservoir"], (-109.2, 45.44), 8), "Ruby River Reservoir": (["Ruby River Reservoir", "Ruby Reservoir"], (-112.11, 45.23), 8),
    "Berkeley Pit": (["Berkeley Pit"], (-112.50, 46.017), 4), "Castle Rock Lake": (["Castle Rock Lake"], (-106.64, 45.88), 5),
    "Seeley Lake": (["Seeley Lake"], (-113.52, 47.19), 8), "Bynum Reservoir": (["Bynum Reservoir"], (-112.42, 47.97), 10), "Quake Lake": (["Quake Lake", "Earthquake Lake"], (-111.39, 44.84), 8),
    "Martinsdale Reservoir": (["Martinsdale Reservoir"], (-110.27, 46.45), 8), "Lake Mary Ronan": (["Lake Mary Ronan"], (-114.38, 47.93), 8), "Pablo Reservoir": (["Pablo Reservoir"], (-114.16, 47.63), 8),
    "Ninepipe Reservoir": (["Ninepipe Reservoir"], (-114.11, 47.44), 6), "Bowdoin Lake": (["Lake Bowdoin", "Bowdoin Lake"], (-107.65, 48.40), 10),
}
allnames = sorted({n for v in LAKES.values() for n in v[0]})
els = overpass("osm_lakes.json", f'(nwr["natural"="water"]["name"~"^({"|".join(allnames)})$"]{BBOX};nwr["landuse"="reservoir"]["name"~"^({"|".join(allnames)})$"]{BBOX};);out geom;')
lake_report = []
for name, (keys, ctr, rad) in LAKES.items():
    if not keys: continue
    rings = []
    for e in els:
        if e["tags"].get("name") not in keys: continue
        if e["type"] == "way": parts = [way_pts(e)]
        elif e["type"] == "relation": parts = stitch([way_pts(m) for m in e["members"] if m.get("role") == "outer" and m.get("geometry")], 0.02)
        else: continue
        for r in parts:
            if len(r) < 4 or km(r[0], r[-1]) > 0.05: continue
            cx = sum(p[0] for p in r) / len(r); cy = sum(p[1] for p in r) / len(r)
            if km((cx, cy), ctr) < rad and ring_km2(r) > 0.25: rings.append(r)
    for r in rings:
        lakes.append({"n": name, "c": rnd(simplify(r, 0.15))})
    lake_report.append((name, len(rings), round(sum(ring_km2(r) for r in rings), 1), [round(sum(p[0] for p in rings[0]) / len(rings[0]), 3), round(sum(p[1] for p in rings[0]) / len(rings[0]), 3)] if rings else None))

# ------------------------------------------------------------------ 6. tributary rivers (OpenStreetMap)
# map name (the app appends " River" unless it ends in River/Creek/Fork): (OSM name, box or None, rank)
RIVERS = {
    "Kootenai": ("Kootenai River", None, 8), "Teton": ("Teton River", (-113.0, 47.5, -110.4, 48.2), 10), "Judith": ("Judith River", None, 10), "Smith": ("Smith River", None, 10),
    "Dearborn": ("Dearborn River", None, 11), "Stillwater": ("Stillwater River", (-110.3, 45.0, -109.2, 45.8), 10), "Boulder": ("Boulder River", (-110.6, 45.0, -109.8, 46.0), 11),
    "Ruby": ("Ruby River", None, 11), "Swan": ("Swan River", None, 11), "Rock Creek": ("Rock Creek", (-114.0, 46.0, -113.3, 46.8), 11),
    "Little Bighorn": ("Little Bighorn River", None, 10), "Rosebud Creek": ("Rosebud Creek", (-107.2, 45.2, -106.2, 46.4), 11), "Shields": ("Shields River", None, 11),
    "North Fork Flathead": ("North Fork Flathead River", None, 10), "Little Blackfoot": ("Little Blackfoot River", None, 11), "Jocko": ("Jocko River", None, 11),
    "Thompson": ("Thompson River", None, 11), "Yaak": ("Yaak River", None, 11), "Fisher": ("Fisher River", None, 11), "Tobacco": ("Tobacco River", None, 11),
    "Saint Regis": ("Saint Regis River", None, 11), "Flint Creek": ("Flint Creek", (-113.6, 46.1, -113.0, 46.8), 11), "Silver Bow Creek": ("Silver Bow Creek", None, 11),
    "East Gallatin": ("East Gallatin River", None, 11), "Tenmile Creek": ("Tenmile Creek", (-112.5, 46.4, -111.8, 46.8), 11), "Redwater": ("Redwater River", None, 11),
    "Swiftcurrent Creek": ("Swiftcurrent Creek", None, 11), "Big Spring Creek": ("Big Spring Creek", (-109.6, 46.9, -109.2, 47.3), 11), "Pryor Creek": ("Pryor Creek", None, 11),
    "Flatwillow Creek": ("Flatwillow Creek", None, 11), "Whitefish": ("Whitefish River", None, 11), "Birch Creek": ("Birch Creek", (-113.2, 48.0, -111.9, 48.5), 11),
    "Badger Creek": ("Badger Creek", (-113.3, 48.1, -112.2, 48.6), 11), "O'Fallon Creek": ("O'Fallon Creek", None, 11), "Armells Creek": ("Armells Creek", (-107.0, 45.7, -106.4, 46.4), 11),
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
        rivers.append({"n": name, "r": rank, "c": rnd(simplify(l, 0.25))})
    river_report.append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ write
out = {"canals": canals, "areas": areas, "basins": basins, "lakes": lakes, "rivers": rivers}
json.dump(out, open(f"{RAW}/extras.json", "w"), separators=(",", ":"))
npts = lambda key, f: sum(len(f(o)) for o in out[key])
print("canals (pieces, km):", canal_report)
print("controlled groundwater areas (km2):", cg_report)
print("closures:", cl_report)
print("planning basins:", [(b["n"], len(b["rings"]), sum(len(r) for r in b["rings"])) for b in basins])
print("lakes (rings, km2, centroid):", lake_report)
print("rivers (pieces, km):", river_report)
print("points: canals", npts("canals", lambda o: o["c"]), "areas", sum(len(r) for a in areas for r in a["rings"]), "basins", sum(len(r) for a in basins for r in a["rings"]),
      "lakes", npts("lakes", lambda o: o["c"]), "rivers", npts("rivers", lambda o: o["c"]))
print("wrote", f"{RAW}/extras.json", os.path.getsize(f"{RAW}/extras.json") // 1024, "KB")
