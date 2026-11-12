#!/usr/bin/env python3
"""Idaho prep step: download public GIS into build/raw/id/ and write build/raw/id/extras.json,
which build_region.py reads when baking west/data/id.js.

Usage:  python prep_id.py   (then: python build_region.py id)
Needs:  only the standard library and curl.

What goes into extras.json (all coordinates lon/lat):
  canals  k "main" : the four signature canals (Twin Falls Main, North Side Main, Milner-Gooding, New York)
          k "other": other large irrigation canals with real surveyed geometry
  areas   k "espa"   : Eastern Snake Plain Aquifer, area of common groundwater supply (IDWR)
          k "aquifer": Rathdrum Prairie aquifer, Idaho part of the Spokane Valley-Rathdrum Prairie aquifer (IDWR)
          k "cgwa"   : the eight Critical Ground Water Areas (IDWR)
          k "gwma"   : Ground Water Management Areas other than the Eastern Snake Plain one (IDWR)
  basins  the six water-right adjudication basins that together cover the state (IDWR)
  lakes   reservoir and lake outlines (National Hydrography Dataset, served by IDWR) that Natural Earth lacks
  rivers  tributaries (IDWR "major rivers" layer, from the National Hydrography Dataset) that Natural Earth lacks

Sources
  Idaho Department of Water Resources ArcGIS server: https://gis.idwr.idaho.gov/hosting/rest/services
  OpenStreetMap contributors (Overpass API): canal lines. Idaho's hydrography layer names most big canals
    only generically ("Main Canal", "High Line Canal"), so OpenStreetMap is used for canals.
No route is invented: a canal missing from OpenStreetMap is skipped.
"""
import json, math, os, subprocess, time, urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw/id"
os.makedirs(RAW, exist_ok=True)
COSL = math.cos(math.radians(44.5))
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36"   # the IDWR server returns nothing to a bare agent string
IDWR = "https://gis.idwr.idaho.gov/hosting/rest/services"
MIRRORS = ["https://overpass-api.de/api/interpreter", "https://overpass.private.coffee/api/interpreter", "https://overpass.kumi.systems/api/interpreter"]


def curl(url, path, post=None, agent=UA):
    cmd = ["curl", "-s", "-L", "-m", "300", "-A", agent, "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=True)


def overpass(name, q):
    path = f"{RAW}/{name}"
    for attempt in range(6):
        if os.path.exists(path) and os.path.getsize(path) > 2000:
            try: return json.load(open(path))["elements"]
            except Exception: os.remove(path)
        curl(MIRRORS[attempt % len(MIRRORS)], path, post="data=[out:json][timeout:240];" + q, agent="water-map-build/1.0")
        if not (os.path.exists(path) and os.path.getsize(path) > 2000): time.sleep(10 * (attempt + 1))
    raise SystemExit(f"Overpass query {name} failed on every mirror. Run again later.")


def arcgis(name, service, where="1=1", fields="*", offset=None):
    """Query an IDWR feature layer (paged), cache the features as JSON."""
    path = f"{RAW}/{name}"
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return json.load(open(path))
    feats, off = [], 0
    while True:
        q = {"where": where, "outFields": fields, "outSR": 4326, "geometryPrecision": 5, "f": "json", "resultOffset": off, "resultRecordCount": 1000}
        if offset: q["maxAllowableOffset"] = offset
        curl(f"{IDWR}/{service}/FeatureServer/0/query?" + urllib.parse.urlencode(q), path + ".part")
        d = json.load(open(path + ".part")); fs = d.get("features", [])
        feats += fs; off += len(fs)
        if not fs or not d.get("exceededTransferLimit"): break
    os.remove(path + ".part")
    json.dump(feats, open(path, "w"))
    return feats


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


def in_box(l, box):          # box = (west, south, east, north); True if the line's midpoint is inside
    x, y = l[len(l) // 2]
    return box[0] <= x <= box[2] and box[1] <= y <= box[3]


def poly_rings(feat, tol, min_km2):
    out = []
    for ring in (feat.get("geometry") or {}).get("rings", []):
        r = simplify([tuple(c[:2]) for c in ring], tol)
        if len(r) > 3 and ring_km2(r) >= min_km2: out.append(rnd(r))
    return out


canals, areas, basins, lakes, rivers = [], [], [], [], []

# ------------------------------------------------------------------ 1. canals (OpenStreetMap)
els = overpass("osm_canals_all.json", 'area["ISO3166-2"="US-ID"]->.a;(way["waterway"="canal"]["name"](area.a););out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append([(p["lon"], p["lat"]) for p in e.get("geometry") or []])
CANALS = [
    # map name, owner, kind, [OSM names], bounding box or None, minimum piece length km
    ("Twin Falls Main Canal", "Twin Falls Canal Company", "main", ["Twin Falls Main Canal"], None, 3),
    ("North Side Main Canal", "North Side Canal Company", "main", ["North Side Main Canal"], None, 3),
    ("Milner-Gooding Canal", "American Falls Reservoir District No. 2", "main", ["Milner Gooding Canal"], None, 3),
    ("New York Canal", "Boise Project Board of Control", "main", ["New York Canal"], None, 3),
    ("Ridenbaugh Canal", "Nampa and Meridian Irrigation District", "other", ["Ridenbaugh Canal"], None, 5),
    ("Phyllis Canal", "Pioneer Irrigation District", "other", ["Phyllis Canal"], None, 5),
    ("Deer Flat Low Line Canal", "Boise Project Board of Control", "other", ["Deer Flat Low Line Canal"], None, 5),
    ("Farmers Union Canal", "Farmers Union Ditch Company", "other", ["Farmers Union Canal"], None, 6),
    ("Black Canyon Canal", "Black Canyon Irrigation District", "other", ["Black Canyon Canal"], None, 5),
    ("Fort Hall Main Canal", "Fort Hall Irrigation Project", "other", ["Fort Hall Main Canal"], None, 4),
    ("Highline Canal", "", "other", ["Highline Canal"], (-113.0, 42.8, -112.0, 43.5), 6),          # west side of the Snake between Idaho Falls and Aberdeen; owner not confirmed
    ("Main South Side Canal", "Burley Irrigation District", "other", ["Main South Side Canal"], None, 4),
    ("Snake River Valley Canal", "Snake River Valley Irrigation District", "other", ["Snake River Valley Canal"], None, 5),
    ("Great Western Canal", "New Sweden Irrigation District", "other", ["Great Western Canal"], None, 5),
    ("Idaho Canal", "Idaho Irrigation District", "other", ["Idaho Canal"], None, 5),
    ("Butte Market Lake Canal", "Butte and Market Lake Canal Company", "other", ["Butte Market Lake Canal"], None, 5),
    ("Farmers Friend Canal", "Farmers Friend Irrigation Company", "other", ["Farmers Friend Canal"], None, 5),
    ("Enterprise Canal", "Enterprise Canal Company", "other", ["Enterprise Canal"], (-112.0, 43.5, -111.4, 44.1), 5),
    ("St. Anthony Canal", "St. Anthony Union Canal Company", "other", ["St. Anthony Canal"], None, 5),
    ("Crosscut Canal", "Fremont-Madison Irrigation District", "other", ["Crosscut Canal"], None, 3),
    ("King Hill Main Canal", "King Hill Irrigation District", "other", ["King Hill Main Canal"], None, 4),
    ("North Shoshone Canal", "Big Wood Canal Company", "other", ["North Shoshone Canal"], None, 5),
    ("Gooding Main Canal", "American Falls Reservoir District No. 2", "other", ["Gooding Main Canal"], None, 4),
    ("Galloway Canal", "Weiser Irrigation District", "other", ["Galloway Canal"], None, 5),
    ("Bear Lake Outlet Canal", "PacifiCorp", "other", ["Bear Lake Outlet Canal"], None, 4),
    ("Reservation Canal", "Fort Hall Irrigation Project", "other", ["Reservation Canal"], None, 4),
    ("Grand View Canal", "Grand View Irrigation District", "other", ["Grand View Irrigation District Canal"], None, 5),
]
canal_report = []
for name, owner, k, keys, box, minkm in CANALS:
    ls = [l for key in keys for l in by.get(key, [])]
    ls = [l for l in stitch(ls, 0.15) if length(l) >= minkm and (not box or in_box(l, box))]
    ls = sorted(ls, key=length, reverse=True)[:4]
    for l in ls:
        canals.append({"n": name, "o": owner, "k": k, "c": rnd(simplify(l, 0.15 if k == "main" else 0.2))})
    canal_report.append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ 2. groundwater areas (IDWR)
for ft in arcgis("espa_acgws.json", "Modeling/EspaACGWSBoundary", offset=0.002):
    rs = poly_rings(ft, 0.6, 50)
    if rs: areas.append({"n": "Eastern Snake Plain Aquifer", "k": "espa", "rings": rs})
rr = []
for ft in arcgis("rathdrum.json", "Groundwater/SpokaneRathdrumAquiferComplete", offset=0.001):
    rr += poly_rings(ft, 0.3, 15)
if rr: areas.append({"n": "Rathdrum Prairie Aquifer", "k": "aquifer", "rings": rr})
for ft in arcgis("cgwa.json", "Regulatory/CriticalGroundwaterAreas", offset=0.001):
    rs = poly_rings(ft, 0.3, 5)
    if rs: areas.append({"n": ft["attributes"]["NAME"], "k": "cgwa", "rings": rs, "acres": ft["attributes"].get("ACRES")})
gw = {}
for ft in arcgis("gwma.json", "Regulatory/GroundwaterManagementAreas", offset=0.001):
    nm = ft["attributes"]["NAME"]
    if nm in ("Eastern Snake Plain Aquifer", "Rathdrum Prairie"): continue          # drawn from the aquifer boundaries instead
    g = gw.setdefault(nm, {"rings": [], "acres": 0}); g["rings"] += poly_rings(ft, 0.3, 3); g["acres"] += ft["attributes"].get("ACRES") or 0
for nm, g in gw.items():
    if g["rings"]: areas.append({"n": nm + (" Area" if nm in ("Twin Falls", "Mountain Home", "Bear River", "Big Wood River", "Malad Valley") else ""), "k": "gwma", "rings": g["rings"], "acres": g["acres"]})

# the two big aquifer outlines go last, so a click inside a smaller area that overlaps them finds the smaller one first
areas.sort(key=lambda a: a["k"] in ("espa", "aquifer"))

# ------------------------------------------------------------------ 3. adjudication basins (IDWR)
ADJ = [("Snake River Basin Adjudication", "Administrative/SnakeRiverBasinAdjudication", "srba"),
       ("Coeur d'Alene-Spokane River Basin Adjudication", "Administrative/CoeurdAleneSpokaneRiverBasinAdjudication", "csrba"),
       ("Palouse River Basin Adjudication", "Administrative/PalouseRiverBasinAdjudication", "prba"),
       ("Clark Fork-Pend Oreille River Basin Adjudication", "Administrative/ClarkForkPendOreilleRiverBasinAdjudication", "cfpo"),
       ("Kootenai River Basin Adjudication", "Administrative/KootenaiRiverBasinAdjudication", "krba"),
       ("Bear River Basin Adjudication", "Administrative/BearRiverBasinAdjudicationBoundary", "brba")]
for nm, svc, k in ADJ:
    rs = []
    for ft in arcgis(f"adj_{k}.json", svc, offset=0.003):
        rs += poly_rings(ft, 1.2, 100)
    if rs: basins.append({"n": nm, "k": k, "rings": rs})

# ------------------------------------------------------------------ 4. lake and reservoir outlines (NHD via IDWR)
# name on the map: (NHD names, approximate centre used to pick the right water body where a name repeats)
LAKES = {
    "Anderson Ranch Reservoir": (["Anderson Ranch Reservoir"], (-115.36, 43.43)), "Arrowrock Reservoir": (["Arrowrock Reservoir"], (-115.83, 43.60)),
    "Lucky Peak Lake": (["Lucky Peak Lake"], (-116.02, 43.55)), "Lake Lowell": (["Lake Lowell"], (-116.67, 43.55)),
    "Brownlee Reservoir": (["Brownlee Reservoir"], (-117.05, 44.60)), "C. J. Strike Reservoir": (["C J Strike Reservoir"], (-115.85, 42.95)),
    "Island Park Reservoir": (["Island Park Reservoir"], (-111.48, 44.42)), "Henrys Lake": (["Henrys Lake"], (-111.39, 44.64)),
    "Payette Lake": (["Payette Lake"], (-116.08, 44.96)), "Magic Reservoir": (["Magic Reservoir"], (-114.37, 43.28)),
    "Deadwood Reservoir": (["Deadwood Reservoir"], (-115.65, 44.32)), "Redfish Lake": (["Redfish Lake"], (-114.93, 44.11)),
    "Ririe Reservoir": (["Ririe Reservoir"], (-111.73, 43.55)), "Hayden Lake": (["Lake Hayden", "Hayden Lake"], (-116.70, 47.77)),
    "Mackay Reservoir": (["Mackay Reservoir"], (-113.68, 43.96)), "Salmon Falls Creek Reservoir": (["Salmon Falls Creek Reservoir"], (-114.73, 42.15)),
    "Oxbow Reservoir": (["Oxbow Reservoir"], (-116.87, 44.90)), "Hells Canyon Reservoir": (["Hells Canyon Reservoir"], (-116.78, 45.12)),
    "Black Canyon Reservoir": (["Black Canyon Reservoir"], (-116.40, 43.93)), "Mud Lake": (["Mud Lake"], (-112.42, 43.89)),
    "Murtaugh Lake": (["Murtaugh Lake"], (-114.17, 42.46)), "Alexander Reservoir": (["Alexander Reservoir"], (-111.65, 42.65)),
    "Spirit Lake": (["Spirit Lake"], (-116.90, 47.94)), "Chesterfield Reservoir": (["Chesterfield Reservoir"], (-111.96, 42.89)),
    "Milner Lake": (["Milner Lake", "Milner Reservoir"], (-113.95, 42.53)), "Little Wood Reservoir": (["Little Wood River Reservoir", "Little Wood Reservoir"], (-114.03, 43.43)),
    "Oakley Reservoir": (["Lower Goose Creek Reservoir", "Oakley Reservoir"], (-113.93, 42.17)), "Lake Chatcolet": (["Chatcolet Lake"], (-116.74, 47.36)),
}
allnames = sorted({n for v in LAKES.values() for n in v[0]})
wb = arcgis("nhd_lakes.json", "Reference/NhdWaterbody", where="AreaSqKm>0.8 AND GNIS_Name IN (" + ",".join("'" + n + "'" for n in allnames) + ")",
            fields="GNIS_Name,AreaSqKm", offset=0.0004)
lake_report = []
for name, (keys, ctr) in LAKES.items():
    rings = []
    for ft in wb:
        if ft["attributes"]["GNIS_Name"] not in keys: continue
        for ring in ft["geometry"].get("rings", []):
            r = [tuple(c[:2]) for c in ring]
            if len(r) < 4: continue
            cx = sum(p[0] for p in r) / len(r); cy = sum(p[1] for p in r) / len(r)
            if km((cx, cy), ctr) < 30 and ring_km2(r) > 0.6: rings.append(r)
    for r in rings:
        lakes.append({"n": name, "c": rnd(simplify(r, 0.15))})
    lake_report.append((name, len(rings), round(sum(ring_km2(r) for r in rings), 1)))

# ------------------------------------------------------------------ 5. tributary rivers (IDWR major rivers layer, from NHD)
# map name (the app appends " River" unless it ends in River/Creek/Fork): (GNIS name, box or None, rank)
RIVERS = {
    "Henrys Fork": ("Henrys Fork", None, 8), "Teton": ("Teton River", (-112.0, 43.5, -110.9, 44.1), 9), "Falls": ("Fall River", (-111.8, 43.9, -110.8, 44.3), 10),
    "Portneuf": ("Portneuf River", None, 9), "Little Wood": ("Little Wood River", None, 10), "Raft": ("Raft River", None, 10),
    "Salmon Falls Creek": ("Salmon Falls Creek", None, 10), "Goose Creek": ("Goose Creek", (-114.6, 41.7, -113.5, 42.6), 11),
    "Little Lost": ("Little Lost River", None, 10), "Birch Creek": ("Birch Creek", (-113.3, 43.8, -112.6, 44.6), 11),
    "Lemhi": ("Lemhi River", None, 10), "Little Salmon": ("Little Salmon River", None, 10), "South Fork Salmon": ("South Fork Salmon River", None, 10),
    "East Fork Salmon": ("East Fork Salmon River", None, 11), "South Fork Payette": ("South Fork Payette River", None, 10), "Weiser": ("Weiser River", None, 9),
    "Middle Fork Boise": ("Middle Fork Boise River", None, 10), "Mores Creek": ("Mores Creek", None, 11), "Jarbidge": ("Jarbidge River", None, 11),
    "Coeur d'Alene": ("Coeur d'Alene River", None, 9), "Spokane": ("Spokane River", None, 8), "Saint Maries": ("Saint Maries River", None, 10),
    "South Fork Clearwater": ("South Fork Clearwater River", None, 10), "Potlatch": ("Potlatch River", None, 10), "Moyie": ("Moyie River", None, 10),
    "Willow Creek": ("Willow Creek", (-112.1, 43.1, -111.3, 43.7), 11), "Camas Creek": ("Camas Creek", (-115.3, 43.2, -114.3, 43.45), 11),
    "Malad": ("Malad River", (-115.0, 42.8, -114.6, 43.0), 10), "Deadwood": ("Deadwood River", None, 11),
}
names = sorted({v[0] for v in RIVERS.values()})
rv = arcgis("idwr_rivers.json", "Reference/MajorRivers", where="GNIS_NAME IN (" + ",".join("'" + n.replace("'", "''") + "'" for n in names) + ")", fields="GNIS_NAME", offset=0.0006)
by = {}
for ft in rv:
    for p in (ft.get("geometry") or {}).get("paths", []):
        by.setdefault(ft["attributes"]["GNIS_NAME"], []).append([tuple(c[:2]) for c in p])
river_report = []
for name, (key, box, rank) in RIVERS.items():
    seen, ls = set(), []
    for l in by.get(key, []):                       # the layer repeats some reaches
        sig = (round(l[0][0], 4), round(l[0][1], 4), round(l[-1][0], 4), round(l[-1][1], 4))
        if sig not in seen and sig[2:] + sig[:2] not in seen: seen.add(sig); ls.append(l)
    ls = [l for l in stitch(ls, 0.35) if length(l) >= 5 and (not box or in_box(l, box))]
    ls = sorted(ls, key=length, reverse=True)[:5]
    for l in ls:
        rivers.append({"n": name, "r": rank, "c": rnd(simplify(l, 0.2))})
    river_report.append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ write
out = {"canals": canals, "areas": areas, "basins": basins, "lakes": lakes, "rivers": rivers}
json.dump(out, open(f"{RAW}/extras.json", "w"), separators=(",", ":"))
npts = lambda key, f: sum(len(f(o)) for o in out[key])
print("canals (pieces, km):", canal_report)
print("areas:", [(a["n"], a["k"], len(a["rings"]), sum(len(r) for r in a["rings"]), round(a.get("acres") or 0)) for a in areas])
print("basins:", [(b["n"], len(b["rings"]), sum(len(r) for r in b["rings"])) for b in basins])
print("lakes (rings, km2):", lake_report)
print("rivers (pieces, km):", river_report)
print("points: canals", npts("canals", lambda o: o["c"]), "areas", sum(len(r) for a in areas for r in a["rings"]), "basins", sum(len(r) for a in basins for r in a["rings"]),
      "lakes", npts("lakes", lambda o: o["c"]), "rivers", npts("rivers", lambda o: o["c"]))
print("wrote", f"{RAW}/extras.json", os.path.getsize(f"{RAW}/extras.json") // 1024, "KB")
