#!/usr/bin/env python3
"""New Mexico prep step: download public GIS into build/raw/nm/ and write build/raw/nm/extras.json,
which build_region.py reads when baking west/data/nm.js.

Usage:  python prep_nm.py   (then: python build_region.py nm)

What goes into extras.json (all coordinates lon/lat):
  canals  k "sjc"   : the three San Juan-Chama Project tunnels (names match the cards in west/content/nm.js)
          k "other" : main irrigation canals and the Low Flow Conveyance Channel (OpenStreetMap geometry)
  areas   k "ogallala": the four declared groundwater basins on the High Plains (Ogallala) aquifer
          k "basin"   : four other declared basins that have a card on the map
  basins  all 39 declared underground water basins (outlines only)
  lakes   reservoir outlines that Natural Earth lacks (NM Office of the State Engineer; a few from OpenStreetMap)
  rivers  tributaries that Natural Earth lacks (NM Office of the State Engineer "Rivers" layer)

Sources
  New Mexico Office of the State Engineer (OSE) ArcGIS services: declared groundwater basins, reservoirs, rivers.
  OpenStreetMap contributors (Overpass API): canals, tunnels, a few small reservoirs.
Tunnels: the OpenStreetMap bore is used where it exists and its length is close to the published length;
  otherwise a straight line joins the two portals (noted in the report this script prints, and on the card).
"""
import json, math, os, subprocess, time

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw/nm"
os.makedirs(RAW, exist_ok=True)
BBOX = "(31.3,-109.1,37.45,-102.9)"          # south, west, north, east: New Mexico plus the Colorado end of the San Juan-Chama tunnels
COSL = math.cos(math.radians(34.3))
OSE = "https://services2.arcgis.com/qXZbWTdPDbTjl7Dy/arcgis/rest/services"
MIRRORS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter",
           "https://overpass.private.coffee/api/interpreter", "https://maps.mail.ru/osm/tools/overpass/api/interpreter"]


def fetch(url, name, post=None, tmax=300):
    path = f"{RAW}/{name}"
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    cmd = ["curl", "-s", "-L", "-m", str(tmax), "-A", "water-map-build/1.0", "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=False)
    return path


def overpass(name, q):
    """Cached Overpass query. Tries the main server first, then public mirrors, waiting longer after each failure."""
    path = f"{RAW}/{name}"
    for attempt in range(10):
        m = MIRRORS[0] if attempt % 3 < 2 else MIRRORS[1 + (attempt // 3) % (len(MIRRORS) - 1)]
        p = fetch(m, name, post="data=[out:json][timeout:120];" + q, tmax=150)
        try:
            return json.load(open(p))["elements"]
        except Exception:
            if os.path.exists(path): os.remove(path)
            time.sleep(8 + 8 * attempt)
    raise SystemExit(f"Overpass query {name} failed on every try. Run again later.")


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


def gj(name, url):
    return json.load(open(fetch(url, name)))["features"]


def poly_rings(g, tol, min_km2):
    polys = g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
    out = []
    for p in polys:
        r = simplify([tuple(c[:2]) for c in p[0]], tol)
        if len(r) > 3 and ring_km2(r) >= min_km2: out.append(rnd(r))
    return out


canals, areas, basins, lakes, rivers = [], [], [], [], []
Q = "query?where=1%3D1&outFields=*&outSR=4326&f=geojson"

# ------------------------------------------------------------------ 1. San Juan-Chama tunnels (k "sjc")
els = overpass("osm_tunnels.json",
               f'(way["name"~"Azotea Tunnel|Blanco Tunnel|Oso Tunnel"](36.7,-107.1,37.4,-106.4);'
               f'way["waterway"]["tunnel"](36.7,-107.1,37.4,-106.4);way["man_made"="pipeline"](36.7,-107.1,37.4,-106.4););out tags geom;')
by = {}
for e in els:
    by.setdefault((e.get("tags") or {}).get("name", ""), []).append(way_pts(e))
# name, OSM name fragment, published length km (Reclamation: Blanco 8.64 mi, Oso 5.05 mi, Azotea 12.8 mi),
# fallback straight line [inlet, outlet]: Blanco Diversion Dam -> Little Oso siphon; Little Oso -> Oso Diversion Dam (Navajo River);
# Oso Diversion Dam -> Azotea Creek outlet near Chama. Portal coordinates from OpenStreetMap / USGS place names.
TUNNELS = [
    ("Blanco Tunnel", "Blanco", 13.9, [(-106.8117, 37.2037), (-106.8072, 37.0797)]),
    ("Oso Tunnel", "Oso", 8.1, [(-106.8072, 37.0797), (-106.7377, 37.0302)]),
    ("Azotea Tunnel", "Azotea", 20.6, [(-106.7377, 37.0302), (-106.6712, 36.8533)]),
]
tunnel_report = []
for name, key, pub_km, straight in TUNNELS:
    cand = [l for n, v in by.items() if key in n for l in v]
    cand += stitch(cand, 0.3)                    # single ways first, then stitched runs; keep the one closest to the published length
    l = min(cand, key=lambda c: abs(length(c) - pub_km)) if cand else None
    if l and abs(length(l) - pub_km) < 0.25 * pub_km:
        tunnel_report.append((name, "OpenStreetMap bore", round(length(l), 1), "published", pub_km, rnd([l[0], l[-1]])))
    else:
        tunnel_report.append((name, "straight line between portals", round(length(straight), 1), "published", pub_km, "osm candidate km", round(length(l), 1) if l else None))
        l = straight
    canals.append({"n": name, "o": "San Juan-Chama Project (Bureau of Reclamation)", "k": "sjc", "c": rnd(simplify(l, 0.05))})

# ------------------------------------------------------------------ 2. main canals (OpenStreetMap), k "other"
els = overpass("osm_canals.json", f'(way["waterway"~"canal|ditch|drain"]["name"]{BBOX};);out tags geom;')
by = {}
for e in els:
    by.setdefault(e["tags"]["name"], []).append(way_pts(e))
CANALS = [
    # map name, owner, [OSM names], bounding box or None, minimum piece length km, simplify km
    ("Low Flow Conveyance Channel", "Bureau of Reclamation", ["Low Flow Conveyance Channel", "Rio Grande Main Conveyance Channel", "Conveyance Channel"], (-107.4, 33.2, -106.6, 34.4), 3),
    ("Albuquerque Main Canal", "Middle Rio Grande Conservancy District", ["Albuquerque Main Canal"], None, 3),
    ("Belen Highline Canal", "Middle Rio Grande Conservancy District", ["Belen Highline Canal", "Belen High Line Canal"], None, 3),
    ("Peralta Main Canal", "Middle Rio Grande Conservancy District", ["Peralta Main Canal"], None, 3),
    ("Socorro Main Canal", "Middle Rio Grande Conservancy District", ["Socorro Main Canal", "Socorro Main Canal North", "Socorro Main Canal Center", "Socorro Main Canal South"], None, 3),
    ("Leasburg Canal", "Elephant Butte Irrigation District", ["Leasburg Canal"], None, 3),
    ("West Side Canal", "Elephant Butte Irrigation District", ["West Side Canal", "Westside Canal"], (-107.2, 31.7, -106.5, 32.5), 3),
    ("East Side Canal", "Elephant Butte Irrigation District", ["East Side Canal", "Eastside Canal"], (-107.2, 31.7, -106.5, 32.5), 3),
    ("Rincon Valley Main Canal", "Elephant Butte Irrigation District", ["Rincon Valley Main Canal", "Rincon Valley Canal"], None, 3),
    ("Carlsbad Main Canal", "Carlsbad Irrigation District", ["Carlsbad Irrigation Canal", "CID"], (-104.5, 32.0, -103.9, 32.6), 3),
    ("Garfield Canal", "Elephant Butte Irrigation District", ["Garfield Canal"], None, 3),
    ("Sile Main Canal", "Middle Rio Grande Conservancy District", ["Sile Main Canal"], None, 3),
    ("Cochiti East Side Main Canal", "Middle Rio Grande Conservancy District", ["Cochiti East Side Main Canal"], None, 3),
    ("Corrales Main Canal", "Middle Rio Grande Conservancy District", ["Corrales Main Canal"], None, 3),
    ("Arenal Canal", "Middle Rio Grande Conservancy District", ["Arenal Canal"], None, 3),
    ("Citizens Ditch", "Bloomfield Irrigation District", ["BID Citizens Ditch"], None, 3),
    ("Farmers Mutual Ditch", "", ["Farmer's Mutual Ditch"], None, 3),
    ("Fort Sumner Main Canal", "Fort Sumner Irrigation District", ["Fort Sumner Main Canal", "Main Canal", "High Line Canal"], (-104.5, 34.2, -104.0, 34.7), 3),
    ("Conchas Canal", "Arch Hurley Conservancy District", ["Conchas Canal"], None, 3),
    ("Hudson Canal", "Arch Hurley Conservancy District", ["Hudson Canal"], None, 3),
    ("Navajo Indian Irrigation Project Main Canal", "Navajo Indian Irrigation Project", ["NAPI Canal"], None, 3),
    ("Hogback Canal", "Navajo Nation", ["Hogback Canal", "Hogback Canal A Line"], None, 3),
    ("Fruitland Canal", "Navajo Nation", ["Fruitland Canal", "Fruitland Irrigation Canal"], None, 3),
    ("Hammond Main Canal", "Hammond Conservancy District", ["Hammond Canal", "Hammond Main Canal", "Hammond Ditch"], None, 3),
    ("Hagerman Canal", "Hagerman Irrigation Company", ["Hagerman Canal"], None, 3),
    ("Acequia Madre de Santa Fe", "", ["Acequia Madre"], (-106.05, 35.6, -105.85, 35.75), 1),
]
canal_report = []
for name, owner, keys, box, minkm in CANALS:
    ls = [l for k in keys for l in by.get(k, [])]
    ls = [l for l in stitch(ls, 0.15) if length(l) >= minkm and (not box or in_box(l, box))]
    tot = 0
    for l in ls:
        canals.append({"n": name, "o": owner, "k": "other", "c": rnd(simplify(l, 0.2))}); tot += length(l)
    canal_report.append((name, len(ls), round(tot)))

# ------------------------------------------------------------------ 3. groundwater: declared underground water basins (OSE)
OGALLALA = {"Lea County", "Curry County", "Portales", "Causey Lingo"}
CARDS = {"Roswell": "Roswell Artesian", "Estancia": "Estancia", "Mimbres": "Mimbres", "Lower Rio Grande": "Lower Rio Grande"}
for ft in gj("ose_basins.geojson", f"{OSE}/DeclaredGroundwaterBasins/FeatureServer/0/{Q}&maxAllowableOffset=0.003&geometryPrecision=4"):
    nm = ft["properties"]["Basin"].strip()
    sqmi = round(ft["properties"]["Shape__Area"] / 2.59e6)       # service area is in square metres (state plane / UTM), so this is approximate
    if nm in OGALLALA:
        areas.append({"n": nm, "k": "ogallala", "rings": poly_rings(ft["geometry"], 0.5, 5), "sqmi": sqmi})
    elif nm in CARDS:
        areas.append({"n": CARDS[nm], "k": "basin", "rings": poly_rings(ft["geometry"], 0.5, 5), "sqmi": sqmi})
    rs = poly_rings(ft["geometry"], 0.8, 30)
    if rs: basins.append({"n": nm, "k": "declared", "rings": rs})

# ------------------------------------------------------------------ 4. reservoir outlines
OSE_LAKES = {"Heron Lake": "Heron Lake", "El Vado Lake": "El Vado Lake", "Abiquiu Reservoir": "Abiquiu Lake", "Cochiti Lake": "Cochiti Lake",
             "Santa Rosa Lake": "Santa Rosa Lake", "Sumner Lake": "Lake Sumner", "Lake Avalon": "Lake Avalon", "Eagle Nest Lake": "Eagle Nest Lake",
             "Bluewater Lake": "Bluewater Lake", "Jemez Canyon Reservior": None, "Two Rivers Reservoir": None}     # the last two are normally dry flood-control pools
lake_report = []
for ft in gj("ose_reservoirs.geojson", f"{OSE}/Reservoirs_/FeatureServer/1/{Q}&geometryPrecision=4"):
    nm = OSE_LAKES.get(ft["properties"]["NAME"])
    if not nm: continue
    g = ft["geometry"]
    polys = g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
    for p in polys:
        r = [tuple(c[:2]) for c in p[0]]
        if ring_km2(r) > 0.3:
            lakes.append({"n": nm, "c": rnd(simplify(r, 0.12))}); lake_report.append((nm, "OSE", round(ring_km2(r), 1)))
OSM_LAKES = {"Morgan Lake": (["Morgan Lake"], (-108.47, 36.70)), "Storrie Lake": (["Storrie Lake"], (-105.23, 35.66)),
             "McClure Reservoir": (["McClure Reservoir"], (-105.83, 35.69)), "Lake Farmington": (["Farmington Lake", "Lake Farmington"], (-108.10, 36.79)),
             "Nambe Falls Reservoir": (["Nambe Falls Reservoir", "Nambe Falls Lake", "Nambé Falls Reservoir", "Nambe Lake"], (-105.90, 35.85))}
try:
    allnames = sorted({n for v in OSM_LAKES.values() for n in v[0]})
    els = overpass("osm_lakes.json", f'(nwr["natural"="water"]["name"~"^({"|".join(allnames)})$"]{BBOX};);out geom;')
except SystemExit as ex:
    print(ex); els = []
for name, (keys, ctr) in OSM_LAKES.items():
    for e in els:
        if e["tags"].get("name") not in keys: continue
        if e["type"] == "way": parts = [way_pts(e)]
        elif e["type"] == "relation": parts = stitch([way_pts(m) for m in e["members"] if m.get("role") == "outer" and m.get("geometry")], 0.02)
        else: continue
        for r in parts:
            if len(r) < 4 or km(r[0], r[-1]) > 0.05: continue
            cx = sum(p[0] for p in r) / len(r); cy = sum(p[1] for p in r) / len(r)
            if km((cx, cy), ctr) < 10 and ring_km2(r) > 0.2:
                lakes.append({"n": name, "c": rnd(simplify(r, 0.1))}); lake_report.append((name, "OSM", round(ring_km2(r), 1)))

# ------------------------------------------------------------------ 5. tributary rivers (OSE "Rivers" layer)
# OSE name -> (map name, rank). Rivers already in Natural Earth (Rio Grande, Pecos, Gila, San Juan, Canadian, Animas, Cimarron,
# Rio Chama, the two Puercos, Rio San Jose) are left out. The app adds " River" to a name unless content.riverNames overrides it.
RIVERS = {"Jemez River": ("Jemez", 10), "Santa Fe River": ("Santa Fe", 11), "Mimbres River": ("Mimbres", 10), "San Francisco River": ("San Francisco", 10),
          "La Plata River": ("La Plata", 11), "Rio Hondo": ("Rio Hondo", 10), "Mora River": ("Mora", 10), "Gallinas River": ("Gallinas", 11),
          "Rio Pueblo de Taos": ("Rio Pueblo de Taos", 11), "Rio Salado": ("Rio Salado", 11), "Navajo River": ("Navajo", 11), "Los Pinos River": ("Los Pinos", 11),
          "Costilla Creek": ("Costilla Creek", 11), "Ute Creek": ("Ute Creek", 11), "Pojoaque River": ("Pojoaque", 11), "Rio Nambe": ("Rio Nambe", 11),
          "Rio Tesuque": ("Rio Tesuque", 11), "Rio de Los Pinos": ("Rio de los Pinos", 11), "Mancos River": ("Mancos", 11),
          "East Fork Gila River": ("East Fork Gila", 11), "West Fork Gila River": ("West Fork Gila", 11), "Middle Fork Gila River": ("Middle Fork Gila", 11),
          "East Fork Jemez River": ("Jemez", 11), "Rio San Antonio": ("Rio San Antonio", 11)}
got = {}
for ft in gj("ose_rivers.geojson", f"{OSE}/Rivers/FeatureServer/1/{Q}&maxAllowableOffset=0.001&geometryPrecision=4"):
    nm = ft["properties"]["gnis_name"]
    if nm not in RIVERS or not ft["geometry"]: continue
    g = ft["geometry"]
    got.setdefault(nm, []).extend([[tuple(c[:2]) for c in l] for l in (g["coordinates"] if g["type"] == "MultiLineString" else [g["coordinates"]])])
river_report = []
for nm, (name, rank) in RIVERS.items():
    ls = sorted([l for l in stitch(got.get(nm, []), 0.1) if length(l) >= 4], key=length, reverse=True)[:5]
    for l in ls:
        rivers.append({"n": name, "r": rank, "c": rnd(simplify(l, 0.2))})
    river_report.append((name, len(ls), round(sum(length(l) for l in ls))))

# ------------------------------------------------------------------ write
out = {"canals": canals, "areas": areas, "basins": basins, "lakes": lakes, "rivers": rivers}
json.dump(out, open(f"{RAW}/extras.json", "w"), separators=(",", ":"))
npts = lambda key, f: sum(len(f(o)) for o in out[key])
print("tunnels:"); [print("  ", *t) for t in tunnel_report]
print("canals (pieces, km):", canal_report)
print("areas:", [(a["n"], a["k"], a.get("sqmi"), sum(len(r) for r in a["rings"])) for a in areas])
print("declared basins:", len(basins), sum(len(r) for b in basins for r in b["rings"]), "points")
print("lakes (source, km2):", lake_report)
print("rivers (pieces, km):", river_report)
print("points: canals", npts("canals", lambda o: o["c"]), "lakes", npts("lakes", lambda o: o["c"]), "rivers", npts("rivers", lambda o: o["c"]))
print("wrote", f"{RAW}/extras.json", os.path.getsize(f"{RAW}/extras.json") // 1024, "KB")
