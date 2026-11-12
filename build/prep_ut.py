#!/usr/bin/env python3
"""Utah prep step: download public GIS into build/raw/ut/ and write build/raw/ut/extras.json,
which build_region.py reads when baking west/data/ut.js.

Usage:  python prep_ut.py   (then: python build_region.py ut)
Needs:  shapely (to dissolve the groundwater plan pieces).

What goes into extras.json (all coordinates lon/lat):
  canals  k "xfer" : tunnels and one canal that move water from one river basin to another
                     (names match the cards in west/content/ut.js)
          k "other": main irrigation and supply canals, and the railroad causeway across Great Salt Lake
  areas   k "gmp"  : areas with a groundwater management plan (Utah Division of Water Rights policy areas)
  basins  the state's hydrologic planning basins (Utah Division of Water Resources)
  lakes   reservoir and lake outlines that Natural Earth lacks
  rivers  tributaries that Natural Earth lacks

Sources
  Utah Division of Water Rights, ArcGIS Online (services.arcgis.com/ZzrwjTRez6FJiOq4): Utah_Canals (canal lines
    with capacity), PolicyService (groundwater policy areas), GSL_causeway.
  Utah Division of Water Resources / Utah DNR, same host: Utah_Hydrologic_Basins, Lakes_and_Reservoirs (NHD),
    Utah_Major_Rivers_and_Streams.
  OpenStreetMap contributors (Overpass API): the bores of the Strawberry, Duchesne and Water Hollow tunnels.
No line here is invented or drawn straight: a conveyance with no public geometry is left out
  (the Syar Tunnel and Diamond Fork pipeline, the Salt Lake and Jordan aqueducts, the Quail Creek pipeline).
"""
import json, math, os, re, subprocess, urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw/ut"
os.makedirs(RAW, exist_ok=True)
BBOX = "(36.9,-114.1,42.05,-109.0)"
COSL = math.cos(math.radians(39.5))
DNR = "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services"


def fetch(url, name, post=None):
    path = f"{RAW}/{name}"
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    cmd = ["curl", "-s", "-L", "-m", "300", "-A", "water-map-build/1.0", "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=True)
    return path


def arcgis(service, name, where="1=1", fields="*", offset=0.0005):
    """All features of a layer as GeoJSON features (pages of 1000, cached per page)."""
    feats, start = [], 0
    while True:
        qs = urllib.parse.urlencode({"where": where, "outFields": fields, "outSR": 4326, "f": "geojson", "maxAllowableOffset": offset,
                                     "geometryPrecision": 5, "resultOffset": start, "resultRecordCount": 1000})
        p = fetch(f"{DNR}/{service}/FeatureServer/0/query?{qs}", f"{name}_{start}.geojson")
        try:
            fs = json.load(open(p)).get("features", [])
        except Exception:
            os.remove(p); raise SystemExit(f"{service} query failed. Run again.")
        feats += fs; start += len(fs)
        if len(fs) < 1000: break
    return feats


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


def in_box(l, box):
    x, y = l[len(l) // 2]
    return box[0] <= x <= box[2] and box[1] <= y <= box[3]


canals, areas, basins, lakes, rivers = [], [], [], [], []
report = {}

# ------------------------------------------------------------------ 1. tunnels (OpenStreetMap bores)
els = overpass("osm_tunnels.json",
               f'(way["man_made"="pipeline"]["name"~"Tunnel|Aqueduct|Diamond Fork|Syar|Strawberry|Quail Creek|Spanish Fork|Provo River",i]{BBOX};'
               f'way["waterway"]["name"~"Tunnel|Aqueduct|Syar",i]{BBOX};way["waterway"]["tunnel"]["name"]{BBOX};);out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append([(p["lon"], p["lat"]) for p in e["geometry"]])
TUNNELS = [  # map name, owner, OSM name, expected length km (a check against picking up the wrong way)
    ("Strawberry Tunnel", "Strawberry Valley Project", "Strawberry Tunnel", 6),
    ("Duchesne Tunnel", "Provo River Project", "Duchesne Tunnel", 9.7),
    ("Strawberry Aqueduct: Water Hollow Tunnel", "Central Utah Project", "Water Hollow Tunnel", 16),
]
report["tunnels"] = []
for name, owner, key, exp in TUNNELS:
    ls = sorted(stitch(by.get(key, []), 0.2), key=length, reverse=True)
    if ls and abs(length(ls[0]) - exp) < 0.3 * exp:
        canals.append({"n": name, "o": owner, "k": "xfer", "c": rnd(simplify(ls[0], 0.05))})
        report["tunnels"].append((name, round(length(ls[0]), 1), rnd([ls[0][0], ls[0][-1]])))
    else:
        report["tunnels"].append((name, "NOT FOUND in OpenStreetMap: omitted"))

# ------------------------------------------------------------------ 2. canals (Utah Division of Water Rights)
CANALS = [  # map name, owner shown, [names in the state layer], company filter regex or None, k, min piece km
    ("Weber-Provo Diversion Canal", "Provo River Project", ["Weber Provo Diversion Canal"], None, "xfer", 1),
    ("Provo River Aqueduct (Murdock Canal)", "Provo River Water Users Association", ["Murdock Canal Trail Pipe"], None, "other", 2),
    ("Bear River Canal: West Main", "Bear River Canal Company", ["West Main Canal"], "BEAR RIVER", "other", 3),
    ("Bear River Canal: East Main", "Bear River Canal Company", ["Corinne / East Main Canal"], "BEAR RIVER", "other", 3),
    ("Willard Canal", "Weber Basin Project", ["Willard Canal"], None, "other", 2),
    ("Gateway Canal", "Weber Basin Project", ["Gateway Canal"], None, "other", 2),
    ("Davis and Weber Counties Canal", "Davis and Weber Counties Canal Company", ["Davis and Weber County Canal"], None, "other", 3),
    ("Ogden-Brigham Canal", "Ogden River Project", ["Ogden Brigham Canal"], None, "other", 3),
    ("Hooper Canal", "Hooper Irrigation Company", ["Hooper Canal"], None, "other", 3),
    ("Utah and Salt Lake Canal", "Utah and Salt Lake Canal Company", ["Utah & Salt Lake Canal"], None, "other", 3),
    ("East Jordan Canal", "East Jordan Irrigation Company", ["East Jordan Canal"], None, "other", 2),
    ("Jordan and Salt Lake City Canal", "Salt Lake City", ["Jordan & Salt Lake City Canal"], None, "other", 2),
    ("Strawberry High Line Canal", "Strawberry High Line Canal Company", ["Strawberry High Line Canal"], None, "other", 3),
    ("Piute Canal", "Piute Reservoir and Irrigation Company", ["Piute Canal"], None, "other", 4),
    ("Sevier Valley and Piute Canal", "Sevier Valley Canal Company", ["Sevier Valley and Piute Canal"], None, "other", 4),
    ("Central Utah Canal", "Central Utah Water Company", ["Central Utah Canal"], None, "other", 3),
    ("Carbon Canal", "Carbon Canal Company", ["Carbon Canal"], None, "other", 4),
    ("Cottonwood Creek-Huntington Canal", "Emery County Project", ["Cottonwood Creek Huntington Canal"], None, "other", 3),
    ("Steinaker Service Canal", "Central Utah Project, Vernal Unit", ["Steinaker Service Canal"], None, "other", 3),
    ("Farnsworth Canal", "", ["Farnsworth Canal"], None, "other", 4),
    ("West Cache Canal", "West Cache Irrigation Company", ["West Cache Canal"], None, "other", 3),
    ("Randolph and Woodruff Canal", "Randolph Woodruff Canal Company", ["Randolph and Woodruff Canal"], None, "other", 3),
]
names = sorted({n for c in CANALS for n in c[2]})
where = "Canal IN (" + ",".join("'" + n.replace("'", "''") + "'" for n in names) + ")"
cf = arcgis("Utah_Canals", "canals", where, "Canal,Company,MaxCFS,Piped", 0.0003)
report["canals"] = []
for name, owner, keys, comp, k, minkm in CANALS:
    ls, cfs = [], 0
    for f in cf:
        a = f["properties"]
        if (a.get("Canal") or "").strip() in keys and (not comp or re.search(comp, a.get("Company") or "", re.I)):
            ls += lines_of(f["geometry"]); cfs = max(cfs, a.get("MaxCFS") or 0)
    ls = [l for l in stitch(ls, 0.12) if length(l) >= minkm]
    for l in ls:
        canals.append({"n": name, "o": owner, "k": k, "c": rnd(simplify(l, 0.15))})
    report["canals"].append((name, len(ls), round(sum(length(l) for l in ls)), "cfs", cfs))
# the railroad causeway that divides Great Salt Lake (not a canal; drawn so the two arms can be told apart)
for f in arcgis("GSL_causeway", "causeway", offset=0.0002):
    for l in lines_of(f["geometry"]):
        if length(l) > 5:
            canals.append({"n": "Railroad causeway", "o": "Union Pacific Railroad", "k": "other", "c": rnd(simplify(l, 0.1))})
            report.setdefault("causeway", []).append(round(length(l), 1))

# ------------------------------------------------------------------ 3. groundwater management plan areas
from shapely.geometry import shape
from shapely.ops import unary_union
GMP = [  # map name, test on (NAME, DESCRIPT, AREA_CODE)
    ("Beryl-Enterprise", lambda n, d, c: n.startswith("Beryl-Enterprise")),
    ("Cedar City Valley", lambda n, d, c: n.startswith("Cedar City Valley")),
    ("Parowan Valley", lambda n, d, c: n.startswith("Parowan Valley")),
    ("Pahvant Valley", lambda n, d, c: c == "67" and (n == "Pahvant Valley" or d == "Pahvant Valley")),
    ("Salt Lake Valley", lambda n, d, c: d.startswith("Salt Lake Valley Ground-Water")),
    ("Bountiful", lambda n, d, c: n.startswith("Bountiful Subarea")),
    ("Weber Delta", lambda n, d, c: n.startswith("Weber Delta")),
    ("Tooele Valley", lambda n, d, c: n == "Tooele Valley"),
    ("Northern Utah Valley", lambda n, d, c: n == "Northern Utah Valley" and c == "55"),
    ("Southern Utah Valley", lambda n, d, c: n == "Southern Utah Valley" and c == "51"),
    ("Goshen Valley", lambda n, d, c: n == "Goshen Valley"),
    ("Cedar Valley (Utah County)", lambda n, d, c: n == "Cedar Valley" and c == "54"),
    ("Northern Juab Valley", lambda n, d, c: n == "Northern Juab Valley"),
    ("Heber Valley", lambda n, d, c: n == "Heber Valley"),
    ("Snyderville Basin and Park City", lambda n, d, c: d.startswith("Snyderville and Park City")),
    ("Cache Valley", lambda n, d, c: c == "25" and d == "Cache Valley Memo"),
]
pf = arcgis("PolicyService", "policy", fields="NAME,DESCRIPT,AREA_CODE", offset=0.001)
s = lambda v: (v or "").strip()
for name, test in GMP:
    gs = [shape(f["geometry"]).buffer(0) for f in pf if f.get("geometry") and test(s(f["properties"]["NAME"]), s(f["properties"]["DESCRIPT"]), s(f["properties"]["AREA_CODE"]))]
    if not gs: print("no polygons for", name); continue
    u = unary_union([g.buffer(0.002) for g in gs]).buffer(-0.002)
    polys = list(u.geoms) if u.geom_type == "MultiPolygon" else [u]
    rs = []
    for pg in polys:
        r = simplify([tuple(c[:2]) for c in pg.exterior.coords], 0.3)
        if len(r) > 3 and ring_km2(r) >= 4: rs.append(rnd(r))
    if rs: areas.append({"n": name, "k": "gmp", "rings": rs, "km2": round(sum(ring_km2(r) for r in rs))})

# ------------------------------------------------------------------ 4. hydrologic basins (outlines)
BASIN_NAMES = {"JORDAN RIVER": "Jordan River", "WEBER RIVER": "Weber River", "WEST COLORADO RIVER": "West Colorado River", "KANAB CREEK/VIRGIN RIVER": "Kanab Creek and Virgin River",
               "UTAH LAKE": "Utah Lake", "WEST DESERT": "West Desert", "SEVIER RIVER": "Sevier River", "CEDAR/BEAVER": "Cedar and Beaver", "COLUMBIA RIVER": "Columbia River",
               "SOUTHEAST COLORADO RIVER": "Southeast Colorado River", "UINTAH": "Uinta", "BEAR RIVER": "Bear River"}
for f in arcgis("Utah_Hydrologic_Basins", "basins", fields="NAME", offset=0.003):
    nm = BASIN_NAMES.get(s(f["properties"]["NAME"]), s(f["properties"]["NAME"]).title())
    rs = [rnd(simplify(r, 0.8)) for r in lines_of(f["geometry"]) if ring_km2(r) > 150]
    if rs: basins.append({"n": nm + " basin", "k": nm, "rings": rs})

# ------------------------------------------------------------------ 5. lake and reservoir outlines (state NHD layer)
LAKES = {  # map name: (name in the layer, approximate centre)
    "Jordanelle Reservoir": ("Jordanelle Reservoir", (-111.42, 40.60)), "Deer Creek Reservoir": ("Deer Creek Reservoir", (-111.50, 40.43)),
    "Starvation Reservoir": ("Starvation Reservoir", (-110.45, 40.19)), "Willard Bay": ("Willard Bay Reservoir", (-112.10, 41.38)),
    "Pineview Reservoir": ("Pineview Reservoir", (-111.82, 41.27)), "Echo Reservoir": ("Echo Reservoir", (-111.42, 40.94)),
    "Rockport Reservoir": ("Rockport Lake", (-111.39, 40.77)), "East Canyon Reservoir": ("East Canyon Reservoir", (-111.59, 40.90)),
    "Sevier Bridge Reservoir": ("Sevier Bridge Reservoir", (-112.00, 39.30)), "Piute Reservoir": ("Piute Reservoir", (-112.19, 38.30)),
    "Otter Creek Reservoir": ("Otter Creek Reservoir", (-112.01, 38.20)), "Scofield Reservoir": ("Scofield Reservoir", (-111.14, 39.79)),
    "Joes Valley Reservoir": ("Joes Valley Reservoir", (-111.28, 39.30)), "Cutler Reservoir": ("Cutler Reservoir", (-111.95, 41.80)),
    "Mona Reservoir": ("Mona Reservoir", (-111.87, 39.88)), "Minersville Reservoir": ("Minersville Reservoir", (-112.83, 38.22)),
    "DMAD Reservoir": ("D M A D Reservoir", (-112.47, 39.40)), "Steinaker Reservoir": ("Steinaker Reservoir", (-109.53, 40.52)),
    "Panguitch Lake": ("Panguitch Lake", (-112.64, 37.71)), "Moon Lake": ("Moon Lake", (-110.50, 40.57)), "Quail Creek Reservoir": ("Quail Creek Reservoir", (-113.38, 37.19)),
    "Gunlock Reservoir": ("Gunlock Reservoir", (-113.77, 37.26)), "Red Fleet Reservoir": ("Red Fleet Reservoir", (-109.43, 40.58)),
    "Currant Creek Reservoir": ("Currant Creek Reservoir", (-111.05, 40.34)), "Upper Stillwater Reservoir": ("Upper Stillwater Reservoir", (-110.70, 40.57)),
    "Hyrum Reservoir": ("Hyrum Reservoir", (-111.87, 41.62)),
    "Electric Lake": ("Electric Lake", (-111.22, 39.63)),
    "Gunnison Bend Reservoir": ("Gunnison Bend Reservoir", (-112.63, 39.35)), "Big Sand Wash Reservoir": ("Big Sand Wash Reservoir", (-110.22, 40.30)), "Navajo Lake": ("Navajo Lake", (-112.77, 37.52)),
    "Recapture Reservoir": ("Recapture Reservoir", (-109.44, 37.67)),
}
ln = sorted({v[0] for v in LAKES.values()})
lf = arcgis("Lakes_and_Reservoirs", "lakes", "gnis_name IN (" + ",".join("'" + n + "'" for n in ln) + ")", "gnis_name,areasqkm", 0.0004)
report["lakes"] = []
for name, (key, ctr) in LAKES.items():
    rs = []
    for f in lf:
        if s(f["properties"]["gnis_name"]) != key: continue
        for r in lines_of(f["geometry"]):
            cx = sum(p[0] for p in r) / len(r); cy = sum(p[1] for p in r) / len(r)
            if km((cx, cy), ctr) < 25 and ring_km2(r) > 0.3: rs.append(r)
    for r in rs:
        lakes.append({"n": name, "c": rnd(simplify(r, 0.12))})
    report["lakes"].append((name, len(rs), round(sum(ring_km2(r) for r in rs), 1)))

# reservoirs the state layer lacks, from OpenStreetMap (Sand Hollow was first filled in 2003)
OSM_LAKES = {"Sand Hollow Reservoir": (["Sand Hollow Reservoir"], (-113.38, 37.115)), "Fish Lake": (["Fish Lake"], (-111.71, 38.55)),
             "Millsite Reservoir": (["Millsite Reservoir"], (-111.19, 39.10)), "Kolob Reservoir": (["Kolob Reservoir"], (-113.05, 37.44))}
# Sevier Lake is left out on purpose: it is a playa that is dry in most years, and the map would draw it as open water.
on = sorted({n for v in OSM_LAKES.values() for n in v[0]})
els = overpass("osm_lakes.json", f'(nwr["natural"="water"]["name"~"^({"|".join(on)})$"]{BBOX};);out geom;')
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
    report["lakes"].append((name + " (OSM)", len(rs), round(sum(ring_km2(r) for r in rs), 1)))

# ------------------------------------------------------------------ 6. tributary rivers (state layer)
# map name (the app appends " River" unless it ends in River/Creek/Fork/Wash): (name in layer, rank)
RIVERS = {
    "Weber": ("Weber River", 9), "Provo": ("Provo River", 9), "Ogden": ("Ogden River", 10), "South Fork Ogden": ("South Fork Ogden River", 11),
    "Logan": ("Logan River", 10), "Little Bear": ("Little Bear River", 11), "Malad": ("Malad River", 11), "Blacksmith Fork": ("Blacksmith Fork", 11),
    "Spanish Fork": ("Spanish Fork", 10), "Diamond Fork": ("Diamond Fork", 11), "Price": ("Price River", 9), "San Rafael": ("San Rafael River", 9),
    "Escalante": ("Escalante River", 10), "Paria": ("Paria River", 10), "Santa Clara": ("Santa Clara River", 10), "Beaver": ("Beaver River", 10),
    "Uinta": ("Uinta River", 10), "Lake Fork": ("Lake Fork River", 10), "Whiterocks": ("Whiterocks River", 11), "Ashley Creek": ("Ashley Creek", 11),
    "Rock Creek": ("Rock Creek", 11), "Currant Creek": ("Currant Creek", 11), "East Fork Sevier": ("East Fork Sevier River", 10),
    "East Fork Virgin": ("East Fork Virgin River", 11), "North Fork Virgin": ("North Fork Virgin River", 11), "Kanab Creek": ("Kanab Creek", 11),
    "Huntington Creek": ("Huntington Creek", 11), "Ferron Creek": ("Ferron Creek", 11), "Big Cottonwood Creek": ("Big Cottonwood Creek", 11),
    "Montezuma Creek": ("Montezuma Creek", 11), "Otter Creek": ("Otter Creek", 11), "East Canyon Creek": ("East Canyon Creek", 11),
}
rf = arcgis("Utah_Major_Rivers_and_Streams", "rivers", fields="GNIS_Name", offset=0.0006)
report["rivers"] = []
for name, (key, rank) in RIVERS.items():
    ls = [l for f in rf if s(f["properties"]["GNIS_Name"]) == key for l in lines_of(f["geometry"])]
    ls = sorted([l for l in stitch(ls, 0.15) if length(l) >= 4], key=length, reverse=True)[:5]
    for l in ls:
        rivers.append({"n": name, "r": rank, "c": rnd(simplify(l, 0.15))})
    report["rivers"].append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ write
out = {"canals": canals, "areas": areas, "basins": basins, "lakes": lakes, "rivers": rivers}
json.dump(out, open(f"{RAW}/extras.json", "w"), separators=(",", ":"))
for k, v in report.items(): print(k + ":", v)
print("areas:", [(a["n"], len(a["rings"]), a["km2"]) for a in areas])
print("basins:", [(b["n"], len(b["rings"]), sum(len(r) for r in b["rings"])) for b in basins])
print("points: canals", sum(len(o["c"]) for o in canals), "areas", sum(len(r) for a in areas for r in a["rings"]), "basins", sum(len(r) for a in basins for r in a["rings"]),
      "lakes", sum(len(o["c"]) for o in lakes), "rivers", sum(len(o["c"]) for o in rivers))
print("wrote", f"{RAW}/extras.json", os.path.getsize(f"{RAW}/extras.json") // 1024, "KB")
