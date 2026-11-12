#!/usr/bin/env python3
"""California prep step: download public GIS into build/raw/ca/ and write build/raw/ca/extras.json,
which build_region.py reads when baking west/data/ca.js.

Usage:  python prep_ca.py   (then: python build_region.py ca)
Needs:  only the standard library (curl on the PATH).

What goes into extras.json (all coordinates lon/lat):
  canals  k "swp"  : State Water Project: California Aqueduct and its branches (DWR centerline)
          k "cvp"  : Central Valley Project canals and tunnels (DWR copy of Reclamation's canal layer)
          k "crb"  : Colorado River water: Colorado River Aqueduct, All-American Canal, Coachella Canal
          k "city" : city aqueducts: Los Angeles, Hetch Hetchy, Mokelumne, San Diego
          k "other": main canals of irrigation districts
  areas   k "cod"  : the 21 groundwater basins DWR lists as critically overdrafted
          k "sgma" : the other high- and medium-priority basins that must be managed under the 2014 groundwater law
  basins  DWR's ten hydrologic regions (outlines)
  lakes   reservoir outlines (OpenStreetMap) that Natural Earth lacks
  rivers  rivers (OpenStreetMap) that Natural Earth lacks

Sources
  California Department of Water Resources (DWR) ArcGIS services: State Water Project centerline,
    federal canals and aqueducts, local canals and aqueducts, critically overdrafted basins,
    Bulletin 118 basins with 2019 SGMA priority, hydrologic regions.
  OpenStreetMap contributors (Overpass API): reservoir outlines and rivers.
Every line is surveyed geometry from those layers. Nothing is drawn as a straight line between end points.
"""
import json, math, os, subprocess, time

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw/ca"
os.makedirs(RAW, exist_ok=True)
COSL = math.cos(math.radians(37.2))
DWR = "https://gis.water.ca.gov/arcgis/rest/services"
UTIL = "https://utility.arcgis.com/usrsvcs/servers"
Q = "query?where=1%3D1&outFields=*&outSR=4326&f=geojson&geometryPrecision=5"
LAYERS = {
    "dwr_swp.geojson": f"{UTIL}/0c1e0a5ca1ba488ea740fa0d654df4c8/rest/services/Structure/i17_StateWaterProject_Centerline/MapServer/0/{Q}",
    "dwr_federal.geojson": f"{UTIL}/f4da75bd38564758a7a729ae7c8dc94d/rest/services/InlandWaters/i12_Canals__and_Aqueducts_Federal/MapServer/0/{Q}",
    "dwr_local.geojson": f"{UTIL}/b43dc55d1e1448f2b384ebb8efac9042/rest/services/InlandWaters/i12_Canals_and_Aqueducts_local/MapServer/0/{Q}",
    "dwr_cod.geojson": f"{DWR}/Geoscientific/i08_CriticallyOverdraftedBasins/MapServer/0/{Q}&maxAllowableOffset=0.003",
    "dwr_prio.geojson": f"{DWR}/Geoscientific/i08_B118_SGMA_2019_Basin_Prioritization/MapServer/1/{Q}&maxAllowableOffset=0.004",
    "dwr_hr.geojson": f"{DWR}/Boundaries/i03_Hydrologic_Regions/MapServer/0/{Q}&maxAllowableOffset=0.01",
}


def fetch(url, name, post=None):
    path = f"{RAW}/{name}"
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    cmd = ["curl", "-s", "-L", "-m", "300", "-A", "water-map-build/1.0", "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=True)
    return path


def feats(name):
    return json.load(open(fetch(LAYERS[name], name)))["features"]


def overpass(name, q):
    for attempt in range(4):
        p = fetch("https://overpass-api.de/api/interpreter", name, post="data=[out:json][timeout:240];" + q)
        try:
            return json.load(open(p))["elements"]
        except Exception:
            os.remove(p)
            time.sleep(30 * (attempt + 1))
    raise SystemExit(f"Overpass query {name} failed (busy server?). Run again.")


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


def glines(g):
    if not g: return []
    c = g["coordinates"]
    ls = [c] if g["type"] == "LineString" else c if g["type"] == "MultiLineString" else []
    return [[tuple(p[:2]) for p in l] for l in ls]


def gpolys(g):
    if not g: return []
    c = g["coordinates"]
    ps = [c] if g["type"] == "Polygon" else c if g["type"] == "MultiPolygon" else []
    return [[tuple(p[:2]) for p in poly[0]] for poly in ps]


def way_pts(e):
    return [(p["lon"], p["lat"]) for p in e.get("geometry") or []]


def in_box(l, box):
    x, y = l[len(l) // 2]
    return box[0] <= x <= box[2] and box[1] <= y <= box[3]


canals, areas, basins, lakes, rivers = [], [], [], [], []
report = []


def add_canal(name, owner, k, lines, minkm, tol, eps=0.25, top=None):
    ls = sorted([l for l in stitch(lines, eps) if length(l) >= minkm], key=length, reverse=True)
    if top: ls = ls[:top]
    for l in ls:
        canals.append({"n": name, "o": owner, "k": k, "c": rnd(simplify(l, tol))})
    report.append((name, k, len(ls), round(sum(length(l) for l in ls))))


# ------------------------------------------------------------------ 1. State Water Project (DWR centerline)
swp = {}
for ft in feats("dwr_swp.geojson"):
    p = ft["properties"]
    sub = p.get("Conv_Sub") or ""
    if any(w in sub for w in ("Penstock", "Discharge Line", "Wasteway", "Bypass", "Spur", "Barrel 2", "Barrel 3", "Stem", "Inland Feeder", "Improvement")): continue
    swp.setdefault(p.get("Conveyance") or sub, []).extend(glines(ft["geometry"]))
DWRO = "California Department of Water Resources"
# the San Luis Canal is the reach of the California Aqueduct shared by the state and federal projects; it is in the federal layer
SANLUIS = [l for ft in feats("dwr_federal.geojson") if ft["properties"]["Display_Name"].split("--")[0].strip() in ("SAN LUIS CANAL", "CALIFORNIA AQUEDUCT-SAN LUIS") for l in glines(ft["geometry"])]
add_canal("California Aqueduct", DWRO, "swp", swp.get("California Aqueduct", []) + SANLUIS, 3, 0.25, 1.5)
add_canal("California Aqueduct, East Branch", DWRO, "swp", swp.get("East Branch", []) + swp.get("East Branch Extension", []), 4, 0.25, 0.6)
add_canal("California Aqueduct, West Branch", DWRO, "swp", swp.get("West Branch", []), 2, 0.2, 0.6)
add_canal("Coastal Branch Aqueduct", DWRO, "swp", swp.get("Coastal Branch", []), 4, 0.3, 0.6)
add_canal("South Bay Aqueduct", DWRO, "swp", swp.get("South Bay Aqueduct", []), 4, 0.25, 0.6)
add_canal("North Bay Aqueduct", DWRO, "swp", swp.get("North Bay Aqueduct", []), 4, 0.25, 0.6)

# ------------------------------------------------------------------ 2. federal canals (Reclamation, via DWR)
fed = {}
for ft in feats("dwr_federal.geojson"):
    fed.setdefault(ft["properties"]["Display_Name"].split("--")[0].strip(), []).extend(glines(ft["geometry"]))
USBR = "Bureau of Reclamation"
fl = lambda *names: [l for n in names for l in fed.get(n, [])]
add_canal("Delta-Mendota Canal", USBR, "cvp", fl("DELTA-MENDOTA CANAL", "TRACY PP INLET CHANNEL", "TRACY PUMPING PLANT DISCHARGE LINES"), 3, 0.25, 0.6)
add_canal("Friant-Kern Canal", USBR, "cvp", fl("FRIANT-KERN CANAL", "FRIANT-KERN CANAL KINGS RIVER SIPHON"), 3, 0.25, 0.6)
add_canal("Madera Canal", USBR, "cvp", fl("MADERA CANAL"), 3, 0.25, 0.6)
add_canal("Tehama-Colusa Canal", USBR, "cvp", fl("TEHAMA-COLUSA CANAL"), 3, 0.25, 0.6)
add_canal("Corning Canal", USBR, "cvp", fl("CORNING CANAL"), 3, 0.3, 0.6)
add_canal("Folsom South Canal", USBR, "cvp", fl("FOLSOM SOUTH CANAL"), 3, 0.25, 0.6)
add_canal("Contra Costa Canal", USBR, "cvp", fl("CONTRA COSTA CANAL", "CONTRA COSTA CANAL TUNNEL NO 1"), 3, 0.25, 0.6)
add_canal("Clear Creek Tunnel", USBR, "cvp", fl("CLEAR CREEK TUNNEL"), 2, 0.1, 0.6)
add_canal("Pacheco Tunnel and Conduit", USBR, "cvp", fl("PACHECO TUNNEL REACH 1", "PACHECO TUNNEL REACH 2", "PACHECO CONDUIT", "SANTA CLARA TUNNEL", "SANTA CLARA CONDUIT", "HOLLISTER CONDUIT"), 2, 0.2, 0.6)
add_canal("Coalinga Canal", USBR, "cvp", fl("COALINGA CANAL"), 3, 0.25, 0.6)
add_canal("Putah South Canal", USBR + " (Solano Project)", "other", fl("PUTAH SOUTH CANAL"), 3, 0.3, 0.6)
add_canal("All-American Canal", "Imperial Irrigation District", "crb", fl("ALL AMERICAN CANAL", "ALL AMERICAN CANAL ALL AMERICAN CANAL NEW RIVER SIPHON"), 3, 0.25, 0.6)
add_canal("Coachella Canal", "Coachella Valley Water District", "crb", fl("COACHELLA CANAL"), 3, 0.25, 0.6)

# ------------------------------------------------------------------ 3. city aqueducts and district canals (DWR "local" layer)
loc = {}
for ft in feats("dwr_local.geojson"):
    p = ft["properties"]
    loc.setdefault(((p.get("Name") or "").strip(), (p.get("Operator") or "").strip()), []).extend(glines(ft["geometry"]))


def ll(name, op=None):
    return [l for (n, o), v in loc.items() if n == name and (op is None or op in o) for l in v]


add_canal("Colorado River Aqueduct", "Metropolitan Water District of Southern California", "crb", ll("Colorado River Aqueduct"), 3, 0.25, 0.8)
add_canal("Los Angeles Aqueduct", "Los Angeles Department of Water and Power", "city", ll("Los Angeles Aqueduct"), 3, 0.25, 0.8)
add_canal("Hetch Hetchy Aqueduct", "San Francisco Public Utilities Commission", "city", ll("Hetch Hetchy Aqueduct") + ll("San Francisco Public Utility Commission"), 3, 0.25, 0.8)
add_canal("Mokelumne Aqueduct", "East Bay Municipal Utility District", "city", ll("Mokelumne Aqueduct"), 3, 0.25, 0.8)
add_canal("San Diego Aqueduct", "San Diego County Water Authority", "city", ll("San Diego Aqueduct") + ll("San Diego Canal"), 3, 0.25, 0.8)
OTHER = [
    # map name, owner, layer name, operator fragment or None
    ("Glenn-Colusa Canal", "Glenn-Colusa Irrigation District", "Glenn Colusa Canal", None),
    ("Sutter Butte Canal", "", "Sutter Butte Canal", None),
    ("Western Canal", "Western Canal Water District", "Western Canal", None),
    ("Turlock Main Canal", "Turlock Irrigation District", "Turlock Main Canal", None),
    ("Modesto Main Canal", "Modesto Irrigation District", "Modesto Main Canal", None),
    ("Merced Main Canal", "Merced Irrigation District", "Main Canal", "Merced"),
    ("Madera Main Canal", "Madera Irrigation District", "Main Canal", "Madera"),
    ("Central California Irrigation District Main Canal", "Central California Irrigation District", "Main Canal", "Central California"),
    ("Outside Canal", "Central California Irrigation District", "Outside Canal", None),
    ("South San Joaquin Main Canal", "South San Joaquin Irrigation District", "Main District Canal", None),
    ("Fresno Canal", "Fresno Irrigation District", "Fresno Canal", None),
    ("Enterprise Canal", "Fresno Irrigation District", "Enterprise Canal", None),
    ("Consolidated Canal", "Consolidated Irrigation District", "Consolidated Canal", None),
    ("Alta Main Canal", "Alta Irrigation District", "Alta Main Canal", None),
    ("Tulare Main Canal", "Tulare Irrigation District", "Main Canal", "Tulare"),
    ("Lemoore Canal", "Kings River Water Association", "Lemoore Canal", None),
    ("Tulare Lake Canal", "Kings River Water Association", "Tulare Lake Canal", None),
    ("Blakeley Canal", "Tulare Lake Basin Water Storage District", "Blakeley Canal", None),
    ("Cross Valley Canal", "Kern County Water Agency", "Cross Valley Canal", None),
    ("Arvin-Edison Canal", "Arvin-Edison Water Storage District", "Arvin Edison Canal", None),
    ("Calloway Canal", "North Kern Water Storage District", "Calloway Canal", None),
    ("Kern Island Canal", "Kern Delta Water District", "Kern Island Canal", None),
    ("East Highline Canal", "Imperial Irrigation District", "East Highline Canal", None),
    ("Central Main Canal", "Imperial Irrigation District", "Central Main Canal", None),
    ("Westside Main Canal", "Imperial Irrigation District", "Westside Main Canal", None),
]
for name, owner, key, op in OTHER:
    add_canal(name, owner, "other", ll(key, op), 5, 0.35, 0.5, top=3)

# ------------------------------------------------------------------ 4. groundwater basins
def nice(sub):
    s = sub.split(" - ")[-1].title().replace("'S", "'s").replace("/", " / ")
    s = s.replace("180 / 400 Foot Aquifer", "Salinas Valley 180/400-Foot Aquifer").replace("Paso Robles Area", "Paso Robles").replace("Los Osos Area", "Los Osos")
    s = s.replace(" Of ", " of ").replace("Indio", "Coachella Valley (Indio)").replace("Coastal Plain of Orange County", "Orange County")
    return s


def basin_name(s):
    """Add the word Basin so the name reads well in a sentence ("Inside the Kings Basin")."""
    if "Aquifer" in s: return s
    m = s.find(" (")
    return s + " Basin" if m < 0 else s[:m] + " Basin" + s[m:]


def poly_rings(g, tol, min_km2):
    out = []
    for r in gpolys(g):
        r = simplify(r, tol)
        if len(r) > 3 and ring_km2(r) >= min_km2: out.append(rnd(r))
    return out


cod_ids = set()
for ft in feats("dwr_cod.geojson"):
    p = ft["properties"]
    cod_ids.add(p["Basin_Subbasin_Number"])
    rs = poly_rings(ft["geometry"], 0.8, 8)
    if rs: areas.append({"n": basin_name(nice(p["Basin_Subbasin_Name"]).replace("Pleasant Valley", "Pleasant Valley (Ventura County)")), "k": "cod", "rings": rs, "sqmi": round(p["Area_SqMiles"]), "id": p["Basin_Subbasin_Number"]})
PRE = "atlas_wmas.SDE.i08_B118_CA_GroundwaterBasins."
prio = {"High": 0, "Medium": 0, "Low": 0, "Very Low": 0}
for ft in feats("dwr_prio.geojson"):
    p = ft["properties"]
    pr = p.get("atlas_wmas.SDE.i08_SGMA_2019_Basin_Prioritization.Priority") or ""
    prio[pr] = prio.get(pr, 0) + 1
    if pr not in ("High", "Medium") or p[PRE + "Basin_Subbasin_Number"] in cod_ids: continue
    rs = poly_rings(ft["geometry"], 1.6, 60)
    if rs: areas.append({"n": basin_name(nice(p[PRE + "Basin_Subbasin_Name"]).replace("Pleasant Valley", "Pleasant Valley (Fresno County)")), "k": "sgma", "rings": rs, "sqmi": round(p[PRE + "Area_SqMiles"]), "id": p[PRE + "Basin_Subbasin_Number"]})

# ------------------------------------------------------------------ 5. hydrologic regions
hr = {}
for ft in feats("dwr_hr.geojson"):
    for r in gpolys(ft["geometry"]):
        if ring_km2(r) > 400: hr.setdefault(ft["properties"]["HR_NAME"], []).append(rnd(simplify(r, 3.0)))
for n, rs in hr.items():
    basins.append({"n": n, "k": n, "rings": rs})

# ------------------------------------------------------------------ 6. reservoir outlines (OpenStreetMap)
LAKES = {
    "New Melones Lake": (["New Melones Lake", "New Melones Reservoir"], (-120.52, 37.99)), "Don Pedro Reservoir": (["Don Pedro Reservoir", "Lake Don Pedro", "Don Pedro Lake"], (-120.38, 37.74)),
    "Lake McClure": (["Lake McClure"], (-120.27, 37.63)), "Folsom Lake": (["Folsom Lake"], (-121.13, 38.73)), "Pine Flat Lake": (["Pine Flat Lake", "Pine Flat Reservoir"], (-119.25, 36.86)),
    "New Bullards Bar Reservoir": (["New Bullards Bar Reservoir"], (-121.13, 39.43)), "Hetch Hetchy Reservoir": (["Hetch Hetchy Reservoir"], (-119.73, 37.95)),
    "Pardee Reservoir": (["Pardee Reservoir"], (-120.83, 38.26)), "Camanche Reservoir": (["Camanche Reservoir"], (-120.97, 38.22)),
    "Castaic Lake": (["Castaic Lake"], (-118.60, 34.54)), "Pyramid Lake (Los Angeles County)": (["Pyramid Lake"], (-118.77, 34.66)), "Diamond Valley Lake": (["Diamond Valley Lake"], (-117.04, 33.68)),
    "Lake Mathews": (["Lake Mathews"], (-117.43, 33.84)), "Lake Perris": (["Lake Perris", "Perris Reservoir"], (-117.17, 33.86)), "Silverwood Lake": (["Silverwood Lake"], (-117.33, 34.29)),
    "Lake Skinner": (["Lake Skinner"], (-117.06, 33.59)), "San Vicente Reservoir": (["San Vicente Reservoir"], (-116.92, 32.92)), "Lake Elsinore": (["Lake Elsinore"], (-117.35, 33.66)),
    "Whiskeytown Lake": (["Whiskeytown Lake"], (-122.55, 40.62)), "Lake Sonoma": (["Lake Sonoma"], (-123.05, 38.73)), "Lake Mendocino": (["Lake Mendocino"], (-123.18, 39.21)),
    "Lake Pillsbury": (["Lake Pillsbury"], (-122.95, 39.42)), "Lake Kaweah": (["Lake Kaweah"], (-118.98, 36.41)), "Lake Success": (["Lake Success", "Success Lake"], (-118.92, 36.07)),
    "Crowley Lake": (["Crowley Lake", "Lake Crowley"], (-118.73, 37.60)), "Anderson Lake": (["Anderson Lake", "Anderson Reservoir"], (-121.62, 37.17)),
    "Los Vaqueros Reservoir": (["Los Vaqueros Reservoir"], (-121.73, 37.82)), "Clifton Court Forebay": (["Clifton Court Forebay"], (-121.57, 37.84)),
    "O'Neill Forebay": (["O'Neill Forebay"], (-121.05, 37.09)), "Lake Cachuma": (["Lake Cachuma"], (-119.95, 34.58)), "Lake Nacimiento": (["Lake Nacimiento"], (-120.95, 35.75)),
    "Lake San Antonio": (["Lake San Antonio"], (-120.95, 35.83)), "Lake Casitas": (["Lake Casitas"], (-119.33, 34.39)), "Black Butte Lake": (["Black Butte Lake"], (-122.37, 39.80)),
    "Indian Valley Reservoir": (["Indian Valley Reservoir"], (-122.53, 39.12)), "Camp Far West Reservoir": (["Camp Far West Reservoir"], (-121.28, 39.04)),
    "Shaver Lake": (["Shaver Lake"], (-119.30, 37.13)), "Huntington Lake": (["Huntington Lake"], (-119.20, 37.23)), "Bass Lake": (["Bass Lake"], (-119.56, 37.31)),
    "Cherry Lake": (["Cherry Lake"], (-119.90, 38.00)), "Calaveras Reservoir": (["Calaveras Reservoir"], (-121.82, 37.47)), "Crystal Springs Reservoir": (["Crystal Springs Reservoir", "Lower Crystal Springs Reservoir", "Upper Crystal Springs Reservoir"], (-122.35, 37.51)),
    "San Pablo Reservoir": (["San Pablo Reservoir"], (-122.25, 37.93)), "Lake Del Valle": (["Lake Del Valle"], (-121.73, 37.59)), "Thermalito Afterbay": (["Thermalito Afterbay"], (-121.67, 39.47)),
    "Stampede Reservoir": (["Stampede Reservoir"], (-120.12, 39.48)), "Lake Britton": (["Lake Britton"], (-121.65, 41.02)), "Union Valley Reservoir": (["Union Valley Reservoir"], (-120.42, 38.87)),
    "Lake Henshaw": (["Lake Henshaw"], (-116.75, 33.24)), "El Capitan Reservoir": (["El Capitan Reservoir"], (-116.79, 32.90)), "Big Bear Lake": (["Big Bear Lake"], (-116.93, 34.24)),
    "Owens Lake": (["Owens Lake"], (-117.95, 36.43)), "Tulloch Reservoir": (["Tulloch Reservoir", "Lake Tulloch"], (-120.59, 37.89)), "Englebright Lake": (["Englebright Lake"], (-121.24, 39.26)),
    "Hensley Lake": (["Hensley Lake"], (-119.87, 37.13)), "Eastman Lake": (["Eastman Lake", "H. V. Eastman Lake"], (-119.98, 37.23)), "Stony Gorge Reservoir": (["Stony Gorge Reservoir"], (-122.54, 39.58)),
    "East Park Reservoir": (["East Park Reservoir"], (-122.51, 39.34)), "Lewiston Lake": (["Lewiston Lake"], (-122.78, 40.75)), "Lake Davis": (["Lake Davis"], (-120.47, 39.90)),
}
allnames = sorted({n for v in LAKES.values() for n in v[0]})
rx = "|".join(n.replace(".", "\\\\.") for n in allnames)
els = overpass("osm_lakes.json", f'area["ISO3166-2"="US-CA"]->.a;(way["natural"="water"]["name"~"^({rx})$"](area.a);relation["natural"="water"]["name"~"^({rx})$"](area.a););out geom;')
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
            if km((cx, cy), ctr) < 14 and ring_km2(r) > 0.5: rings.append(r)
    rings = sorted(rings, key=ring_km2, reverse=True)[:2]
    for r in rings:
        lakes.append({"n": name, "c": rnd(simplify(r, 0.5))})
    lake_report.append((name, len(rings), round(sum(ring_km2(r) for r in rings), 1)))

# ------------------------------------------------------------------ 7. rivers (OpenStreetMap)
# map name (the app appends " River" unless it ends in River/Creek/Fork): (OSM name, box or None, rank)
RIVERS = {
    "Yuba": ("Yuba River", None, 9), "Bear": ("Bear River", (-121.7, 38.8, -120.6, 39.4), 10), "Cosumnes": ("Cosumnes River", None, 10), "Calaveras": ("Calaveras River", None, 11),
    "Kaweah": ("Kaweah River", None, 10), "Tule": ("Tule River", (-119.6, 35.9, -118.6, 36.3), 10), "McCloud": ("McCloud River", None, 10),
    "Cache Creek": ("Cache Creek", (-122.8, 38.6, -121.6, 39.1), 10), "Putah Creek": ("Putah Creek", (-122.8, 38.4, -121.6, 38.9), 10), "Stony Creek": ("Stony Creek", (-122.8, 39.3, -122.0, 39.9), 11),
    "Napa": ("Napa River", None, 11), "Pajaro": ("Pajaro River", None, 11), "Santa Ynez": ("Santa Ynez River", None, 10), "Santa Maria": ("Santa Maria River", None, 11), "Cuyama": ("Cuyama River", None, 11),
    "Santa Clara": ("Santa Clara River", (-119.4, 34.1, -118.0, 34.6), 10), "Los Angeles": ("Los Angeles River", None, 10), "San Gabriel": ("San Gabriel River", (-118.3, 33.7, -117.7, 34.4), 10),
    "Santa Ana": ("Santa Ana River", None, 10), "San Diego": ("San Diego River", None, 11), "San Luis Rey": ("San Luis Rey River", None, 11), "Santa Margarita": ("Santa Margarita River", None, 11),
    "Whitewater": ("Whitewater River", None, 11), "New": ("New River", (-116.0, 32.6, -115.3, 33.2), 10), "Alamo": ("Alamo River", (-115.8, 32.6, -115.0, 33.3), 10),
    "Truckee": ("Truckee River", None, 10), "Carson": ("Carson River", None, 11), "West Walker": ("West Walker River", None, 11), "Susan": ("Susan River", None, 11),
    "Scott": ("Scott River", None, 10), "Shasta": ("Shasta River", None, 10), "Salmon": ("Salmon River", (-123.6, 41.0, -122.9, 41.5), 10), "Smith": ("Smith River", (-124.3, 41.7, -123.6, 42.0), 10),
    "Mad": ("Mad River", None, 10), "Van Duzen": ("Van Duzen River", None, 11), "South Fork Eel": ("South Fork Eel River", None, 10), "Navarro": ("Navarro River", None, 11),
    "Middle Fork Feather": ("Middle Fork Feather River", None, 10), "Middle Fork American": ("Middle Fork American River", None, 11), "South Fork Kern": ("South Fork Kern River", None, 11),
    "Chowchilla": ("Chowchilla River", None, 11), "Fresno": ("Fresno River", None, 11), "Lost": ("Lost River", (-121.9, 41.6, -121.0, 42.1), 11), "Carmel": ("Carmel River", None, 11),
}
names = sorted({v[0] for v in RIVERS.values()})
els = overpass("osm_rivers.json", f'area["ISO3166-2"="US-CA"]->.a;(way["waterway"="river"]["name"~"^({"|".join(names)})$"](area.a););out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append(way_pts(e))
river_report = []
MAPNAME = {}
for name, (key, box, rank) in RIVERS.items():
    ls = [l for l in stitch(by.get(key, []), 0.1) if length(l) >= 8 and (not box or in_box(l, box))]
    ls = sorted(ls, key=length, reverse=True)[:3]
    for l in ls:
        rivers.append({"n": MAPNAME.get(name, name), "r": rank, "c": rnd(simplify(l, 0.5))})
    river_report.append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ write
out = {"canals": canals, "areas": areas, "basins": basins, "lakes": lakes, "rivers": rivers}
json.dump(out, open(f"{RAW}/extras.json", "w"), separators=(",", ":"))
npts = lambda key, f: sum(len(f(o)) for o in out[key])
print("canals (name, k, pieces, km):"); [print("  ", *t) for t in report]
print("priority counts:", prio, "critically overdrafted:", len(cod_ids))
print("areas:", [(a["n"], a["k"], a.get("sqmi"), sum(len(r) for r in a["rings"])) for a in areas])
print("regions:", [(b["n"], len(b["rings"]), sum(len(r) for r in b["rings"])) for b in basins])
print("lakes (rings, km2):", lake_report)
print("rivers (pieces, km):", river_report)
print("points: canals", npts("canals", lambda o: o["c"]), "areas", sum(len(r) for a in areas for r in a["rings"]), "basins", sum(len(r) for a in basins for r in a["rings"]),
      "lakes", npts("lakes", lambda o: o["c"]), "rivers", npts("rivers", lambda o: o["c"]))
print("wrote", f"{RAW}/extras.json", os.path.getsize(f"{RAW}/extras.json") // 1024, "KB")
