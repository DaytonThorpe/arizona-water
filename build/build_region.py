#!/usr/bin/env python3
"""Bake raw public geodata into west/data/<region>.js for the multi-state water map.

Usage:  python build_region.py <region>        (region = west, co, ...)

Generalised from build_data.py (which built the original Arizona map and is kept as-is).
Raw inputs are downloaded on first use into build/raw/ (not committed):
  Mapzen/AWS Terrarium elevation tiles, Esri/Impact Observatory Sentinel-2 land cover,
  PRISM 1991-2020 precipitation normals, Natural Earth rivers + lakes, us-atlas boundaries,
  Census TIGERweb tribal lands, OpenStreetMap golf courses (Overpass).
Optional per-region extras (canals, groundwater areas) are read from build/raw/<region>/extras.json,
which a region-specific prep step writes in lon/lat; see EXTRAS below.
"""
import sys, json, math, base64, glob, os, subprocess, urllib.parse
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = f"{HERE}/raw"
REGION = sys.argv[1]
REGIONS = {
    # ext = (west, east, south, north); km = tile size; focus = state FIPS drawn at full colour
    "west": dict(ext=(-124.9, -101.9, 31.0, 49.1), km=12, z=6, focus=["04", "06", "35", "08", "49", "16", "30"],
                 counties=False, golf=None, river_rank=8, lake_min=1.2, tribal=False, lc_k=8,
                 sea=lambda lon, lat: (lon < -116.9) | ((lat < 32.0) & (lon < -113.9))),
    "ca": dict(ext=(-124.75, -113.85, 32.25, 42.25), km=4.5, z=7, focus=["06"], counties=True, golf="US-CA", river_rank=99, lake_min=0.0, tribal=True, lc_k=10,
               sea=lambda lon, lat: lon < -116.9),
    "nm": dict(ext=(-109.4, -102.65, 31.1, 37.3), km=3, z=7, focus=["35"], counties=True, golf="US-NM", river_rank=99, lake_min=0.0, tribal=True, lc_k=10, sea=None),
    "ut": dict(ext=(-114.4, -108.7, 36.75, 42.25), km=3, z=7, focus=["49"], counties=True, golf="US-UT", river_rank=99, lake_min=0.0, tribal=True, lc_k=10, sea=None),
    "id": dict(ext=(-117.6, -110.7, 41.75, 49.2), km=3, z=7, focus=["16"], counties=True, golf="US-ID", river_rank=99, lake_min=0.0, tribal=True, lc_k=10, sea=None),
    "mt": dict(ext=(-116.4, -103.7, 44.1, 49.2), km=3.5, z=7, focus=["30"], counties=True, golf="US-MT", river_rank=99, lake_min=0.0, tribal=True, lc_k=8, sea=None),
    "co": dict(ext=(-109.45, -101.65, 36.65, 41.35), km=3, z=7, focus=["08"], counties=True, golf="US-CO",
               river_rank=99, lake_min=0.0, tribal=True, lc_k=10, sea=None),
}
CFG = REGIONS[REGION]
L0, L1, B0, B1 = CFG["ext"]
KM = CFG["km"]
MID = (B0 + B1) / 2
GH = round((B1 - B0) * 111.2 / KM)
GW = round((L1 - L0) * 111.32 * math.cos(math.radians(MID)) / KM)
OUT = f"{HERE}/../west/data/{REGION}.js"
os.makedirs(os.path.dirname(OUT), exist_ok=True)
os.makedirs(f"{RAW}/{REGION}", exist_ok=True)
print("region", REGION, "grid", GW, "x", GH)


def fetch(url, path, post=None):
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return path
    os.makedirs(os.path.dirname(path), exist_ok=True)
    cmd = ["curl", "-s", "-L", "-m", "240", "-A", "water-map-build/1.0", "-o", path, url]
    if post: cmd += ["--data-urlencode", post]
    subprocess.run(cmd, check=True)
    return path


def px(lon, lat):
    return ((lon - L0) / (L1 - L0) * GW, (B1 - lat) / (B1 - B0) * GH)


def b64(a):
    return base64.b64encode(np.ascontiguousarray(a).tobytes()).decode()


# ---------------------------------------------------------------- terrain
Z = CFG["z"]
n_ = 2 ** Z
tx = lambda lon: int((lon + 180) / 360 * n_)
ty = lambda lat: int((1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * n_)
TX0, TX1, TY0, TY1 = tx(L0), tx(L1), ty(B1), ty(B0)
mos = np.zeros(((TY1 - TY0 + 1) * 256, (TX1 - TX0 + 1) * 256), dtype=np.float32)
for x in range(TX0, TX1 + 1):
    for y in range(TY0, TY1 + 1):
        p = fetch(f"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{Z}/{x}/{y}.png", f"{RAW}/dem/{Z}_{x}_{y}.png")
        t = np.array(Image.open(p).convert("RGB")).astype(np.float32)
        mos[(y - TY0) * 256:(y - TY0 + 1) * 256, (x - TX0) * 256:(x - TX0 + 1) * 256] = t[..., 0] * 256 + t[..., 1] + t[..., 2] / 256 - 32768


def dem_at(lon, lat):
    n = n_ * 256
    X = (lon + 180) / 360 * n - TX0 * 256 - 0.5
    Y = (1 - np.arcsinh(np.tan(np.radians(lat))) / math.pi) / 2 * n - TY0 * 256 - 0.5
    X = np.clip(X, 0, mos.shape[1] - 1.001); Y = np.clip(Y, 0, mos.shape[0] - 1.001)
    x0 = np.floor(X).astype(int); y0 = np.floor(Y).astype(int)
    fx = X - x0; fy = Y - y0
    return (mos[y0, x0] * (1-fx) * (1-fy) + mos[y0, x0+1] * fx * (1-fy)
            + mos[y0+1, x0] * (1-fx) * fy + mos[y0+1, x0+1] * fx * fy)


S = 4
xs = L0 + (np.arange(GW * S) + 0.5) / (GW * S) * (L1 - L0)
ys = B1 - (np.arange(GH * S) + 0.5) / (GH * S) * (B1 - B0)
LON, LAT = np.meshgrid(xs, ys)
hi = dem_at(LON, LAT)
elev = hi.reshape(GH, S, GW, S).mean(axis=(1, 3))
e2 = hi.reshape(GH * 2, 2, GW * 2, 2).mean(axis=(1, 3))
gy, gx = np.gradient(e2, KM * 500.0)
zf = 4.0 * (KM / 3) ** 0.8
az, alt = math.radians(315), math.radians(45)
slope = np.arctan(zf * np.hypot(gx, gy))
aspect = np.arctan2(gy, -gx)
shade = np.sin(alt) * np.cos(slope) + np.cos(alt) * np.sin(slope) * np.cos(az - math.pi/2 - aspect)
shade = np.clip(shade * 255, 0, 255).astype(np.uint8)
elev8 = np.clip(elev / 20, 0, 255).astype(np.uint8)        # 20 m steps (peaks reach 4,400 m)

tlon = L0 + (np.arange(GW) + 0.5) / GW * (L1 - L0)
tlat = B1 - (np.arange(GH) + 0.5) / GH * (B1 - B0)
# ---------------------------------------------------------------- precipitation
Image.MAX_IMAGE_PIXELS = None
pim = Image.open(glob.glob(f"{RAW}/prism/*.tif")[0])
tp = pim.tag_v2[33922]; ps = pim.tag_v2[33550]
pa = np.array(pim)
ci = np.clip(((tlon - tp[3]) / ps[0]).astype(int), 0, pa.shape[1] - 1)
ri = np.clip(((tp[4] - tlat) / ps[1]).astype(int), 0, pa.shape[0] - 1)
pmm = pa[np.ix_(ri, ci)].astype(np.float32)
pmm[pmm < 0] = 0
precip8 = np.clip(np.round(pmm / 25.4 * 2), 0, 255).astype(np.uint8)   # half inches (wet mountains exceed 64 in)


# ---------------------------------------------------------------- land cover
k = CFG["lc_k"]
# The image service keeps pixels square in the requested projection: if the size's aspect ratio differs from the
# bbox's, it silently widens the extent instead of stretching. So ask for a size with the bbox's own aspect
# (degrees wide : degrees tall) and resample the columns to the tile grid afterwards.
LH = GH * k
LW = round(LH * (L1 - L0) / (B1 - B0))
assert LW <= 4000 and LH <= 4000, (LW, LH)       # service limit per request
lcp = fetch("https://ic.imagery1.arcgis.com/arcgis/rest/services/Sentinel2_10m_LandCover/ImageServer/exportImage?"
            f"bbox={L0},{B0},{L1},{B1}&bboxSR=4326&imageSR=4326&size={LW},{LH}&format=png&f=image", f"{RAW}/{REGION}/lc_deg_{LW}x{LH}.png")
lc = np.array(Image.open(lcp).convert("RGB")).astype(np.int32)
assert lc.shape[0] == LH and lc.shape[1] == LW, lc.shape
lc = lc[:, np.minimum(LW - 1, ((np.arange(GW * k) + 0.5) / (GW * k) * LW).astype(int))]
PAL = {"water": (26, 91, 171), "tree": (53, 130, 33), "flood": (135, 209, 158), "crop": (255, 219, 92),
       "built": (237, 2, 42), "bare": (237, 233, 228), "snow": (242, 250, 255), "cloud": (200, 200, 200),
       "range": (239, 207, 168), "sea": (0, 0, 0)}
names = list(PAL)
cls = np.stack([((lc - np.array(PAL[c])) ** 2).sum(-1) for c in names]).argmin(0)


def frac(*keys):
    return np.isin(cls, [names.index(x) for x in keys]).reshape(GH, k, GW, k).mean(axis=(1, 3))


f_crop, f_built, f_tree, f_water, f_bare, f_ice = frac("crop"), frac("built"), frac("tree", "flood"), frac("water"), frac("bare"), frac("snow")
sea = np.zeros((GH, GW), bool)
if CFG["sea"]:
    zone = CFG["sea"](tlon[None, :], tlat[:, None])
    sea = zone & (elev < 3) & ((frac("sea") + f_water) > 0.5)   # offshore is no-data (black) or open water in the land-cover image
    f_water = np.where(sea, 1.0, f_water)
q = lambda f: np.clip(np.round(np.sqrt(f) * 15), 0, 15).astype(np.uint8)
lcA = (q(f_crop) << 4) | q(f_built)
lcB = (q(f_tree) << 4) | q(f_water)
lcC = q(f_bare) | (sea.astype(np.uint8) << 4) | ((f_ice > 0.3).astype(np.uint8) << 5)

# ---------------------------------------------------------------- vector helpers
def dp(pts, tol):
    if len(pts) < 3:
        return pts
    if len(pts) > 4 and math.hypot(pts[0][0] - pts[-1][0], pts[0][1] - pts[-1][1]) < 1e-6:
        m = max(range(len(pts)), key=lambda i: math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]))
        return dp(pts[:m + 1], tol)[:-1] + dp(pts[m:], tol)
    keep = [False] * len(pts); keep[0] = keep[-1] = True
    st = [(0, len(pts) - 1)]
    while st:
        a, b = st.pop()
        ax, ay = pts[a]; bx, by = pts[b]
        dx, dy = bx - ax, by - ay; L = math.hypot(dx, dy) or 1e-9
        md, mi = 0, -1
        for i in range(a + 1, b):
            d = abs((pts[i][0] - ax) * dy - (pts[i][1] - ay) * dx) / L
            if d > md: md, mi = d, i
        if md > tol:
            keep[mi] = True; st.append((a, mi)); st.append((mi, b))
    return [p for p, k_ in zip(pts, keep) if k_]


def proj_line(coords, tol=0.06, clip=True):
    out, cur = [], []
    for c in coords:
        x, y = px(c[0], c[1])
        if clip and not (-2 <= x <= GW + 2 and -2 <= y <= GH + 2):
            if len(cur) > 1: out.append(cur)
            cur = []
        else:
            cur.append((x, y))
    if len(cur) > 1: out.append(cur)
    return [dp(l, tol) for l in out]


def flat(l):
    return [round(v, 2) for p in l for v in p]


def geom_lines(g):
    if not g: return []
    t = g["type"]
    if t == "LineString": return [g["coordinates"]]
    if t == "MultiLineString": return g["coordinates"]
    if t == "Polygon": return [g["coordinates"][0]]
    if t == "MultiPolygon": return [p[0] for p in g["coordinates"]]
    return []


def elev_xy(x, y):
    return float(elev[min(GH - 1, max(0, int(y))), min(GW - 1, max(0, int(x)))])


def ring_area(r):
    return abs(sum(r[i][0] * r[i+1][1] - r[i+1][0] * r[i][1] for i in range(len(r) - 1))) / 2


# ---------------------------------------------------------------- boundaries
topo = json.load(open(f"{RAW}/counties-10m.json"))
sc, tr = topo["transform"]["scale"], topo["transform"]["translate"]
arcs = []
for a in topo["arcs"]:
    x = y = 0; pts = []
    for dx, dy in a:
        x += dx; y += dy
        pts.append((x * sc[0] + tr[0], y * sc[1] + tr[1]))
    arcs.append(pts)
arc = lambda i: arcs[i] if i >= 0 else arcs[~i][::-1]


def rings(geom):
    polys = geom["arcs"] if geom["type"] == "MultiPolygon" else [geom["arcs"]]
    out = []
    for poly in polys:
        pts = []
        for i in poly[0]:
            pts += arc(i)[(1 if pts else 0):]
        out.append(pts)
    return out


def arc_ids(geom):
    polys = geom["arcs"] if geom["type"] == "MultiPolygon" else [geom["arcs"]]
    return {(i if i >= 0 else ~i) for poly in polys for ring in poly for i in ring}


def pip_mask(poly):
    X, Y = np.meshgrid(np.arange(GW) + 0.5, np.arange(GH) + 0.5)
    inside = np.zeros((GH, GW), bool)
    for (x1, y1), (x2, y2) in zip(poly, poly[1:] + poly[:1]):
        if y1 == y2: continue
        inside ^= ((y1 > Y) != (y2 > Y)) & (X < (x2 - x1) * (Y - y1) / (y2 - y1) + x1)
    return inside


states = {g["id"]: g for g in topo["objects"]["states"]["geometries"]}
ABBR = {"04": "AZ", "06": "CA", "08": "CO", "16": "ID", "30": "MT", "32": "NV", "35": "NM", "41": "OR", "49": "UT", "53": "WA", "56": "WY"}
mask = np.zeros((GH, GW), np.uint8)       # 0 = outside the covered states, else 1 + index into `stateList`
outlines, focus_arcs, state_list = [], set(), []
for sid in CFG["focus"]:
    focus_arcs |= arc_ids(states[sid])
for sid, g in states.items():
    big = max(rings(g), key=len)
    cx = sum(p[0] for p in big) / len(big); cy = sum(p[1] for p in big) / len(big)
    if not (L0 < cx < L1 and B0 < cy < B1): continue
    ring_px = [px(*p) for p in big]
    cov = sid in CFG["focus"]
    state_list.append({"id": ABBR.get(sid, sid).lower(), "n": g["properties"]["name"], "c": [round(v, 1) for v in px(cx, cy)], "cov": int(cov)})
    if cov:
        mask[pip_mask(ring_px)] = len(state_list)
        outlines.append(flat(dp(ring_px, 0.05)))
border_lines = [flat(l) for i in range(len(arcs)) if i not in focus_arcs
                and any(i in arc_ids(g) for g in states.values()) for l in proj_line(arcs[i], 0.08)]
county_lines, counties = [], []
if CFG["counties"]:
    carcs = set()
    for g in topo["objects"]["counties"]["geometries"]:
        if g["id"][:2] in CFG["focus"]:
            carcs |= arc_ids(g)
            r = max(rings(g), key=len)
            counties.append({"n": g["properties"]["name"], "p": [round(v, 1) for v in px(sum(p[0] for p in r) / len(r), sum(p[1] for p in r) / len(r))]})
    county_lines = [flat(l) for i in sorted(carcs - focus_arcs) for l in proj_line(arcs[i], 0.08)]

# ---------------------------------------------------------------- rivers + lakes
rivers = []
for fn in ("ne_10m_rivers_lake_centerlines", "ne_10m_rivers_north_america"):
    for ft in json.load(open(f"{RAW}/ne/{fn}.geojson"))["features"]:
        p = ft["properties"]; rank = int(p.get("scalerank") or 12)
        if rank > CFG["river_rank"]: continue
        for line in geom_lines(ft["geometry"]):
            for l in proj_line(line, 0.05):
                if len(l) < 2: continue
                if elev_xy(*l[0]) < elev_xy(*l[-1]) - 3: l = l[::-1]
                rivers.append({"n": p.get("name") or "", "i": 1 if "Intermittent" in (p.get("featurecla") or "") else 0, "r": rank, "l": flat(l)})
lakes = []
for fn in ("ne_10m_lakes", "ne_10m_lakes_north_america"):
    for ft in json.load(open(f"{RAW}/ne/{fn}.geojson"))["features"]:
        for line in geom_lines(ft["geometry"]):
            ls = proj_line(line, 0.04)
            if ls and len(ls[0]) > 3 and ring_area(ls[0] + ls[0][:1]) >= CFG["lake_min"]:
                lakes.append({"n": ft["properties"].get("name") or "", "l": flat(ls[0])})

# ---------------------------------------------------------------- extras (canals, groundwater areas): lon/lat in, tile coords out
#   extras.json = {"canals": [{"n","o","k","c":[[lon,lat],...]}], "areas": [{"n","k","rings":[[[lon,lat],...]]}], "basins": [same],
#                  "lakes": [...], "rivers": [...]}   (the last two are optional, see below)
canals, amas, basins = [], [], []
xp = f"{RAW}/{REGION}/extras.json"
if os.path.exists(xp):
    X = json.load(open(xp))
    for c in X.get("canals", []):
        for l in proj_line(c["c"], 0.04):
            if len(l) > 1: canals.append({"n": c["n"], "o": c.get("o", ""), "k": c.get("k", "other"), "l": flat(l)})
    for key, out, tol in (("areas", amas, 0.08), ("basins", basins, 0.15)):
        for a in X.get(key, []):
            rs = [flat(r) for r in (dp([px(*p) for p in ring], tol) for ring in a["rings"]) if len(r) > 3]
            if rs: out.append({"n": a["n"], "k": a.get("k", ""), "r": rs})
    # optional: reservoir outlines and tributary rivers that Natural Earth lacks
    #   "lakes": [{"n","c":[[lon,lat],...]}]   "rivers": [{"n","c":[[lon,lat],...],"r":rank,"i":0|1}]
    for lk in X.get("lakes", []):
        ls = proj_line(lk["c"], 0.04)
        if ls and len(ls[0]) > 3: lakes.append({"n": lk["n"], "l": flat(ls[0])})
    for rv in X.get("rivers", []):
        for l in proj_line(rv["c"], 0.05):
            if len(l) < 2: continue
            if elev_xy(*l[0]) < elev_xy(*l[-1]) - 3: l = l[::-1]
            rivers.append({"n": rv["n"], "i": rv.get("i", 0), "r": rv.get("r", 10), "l": flat(l)})

# ---------------------------------------------------------------- tribal lands, golf
tribal = []
if CFG["tribal"]:
    tp_ = f"{RAW}/{REGION}/tribal.geojson"
    if not os.path.exists(tp_):
        qs = urllib.parse.urlencode({"geometry": f"{L0},{B0},{L1},{B1}", "geometryType": "esriGeometryEnvelope", "inSR": 4326, "outSR": 4326,
                                     "outFields": "NAME,BASENAME", "f": "geojson", "maxAllowableOffset": 0.005, "geometryPrecision": 3})
        fetch("https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/AIANNHA/MapServer/47/query?" + qs, tp_)
    for ft in json.load(open(tp_)).get("features", []):
        rs = []
        for line in geom_lines(ft["geometry"]):
            r = dp([px(c[0], c[1]) for c in line], 0.12)
            if len(r) > 3 and ring_area(r) >= 0.6: rs.append(flat(r))
        if rs: tribal.append({"n": ft["properties"]["BASENAME"], "r": rs})
golf = []
if CFG["golf"]:
    gp = f"{RAW}/{REGION}/golf.json"
    if not os.path.exists(gp):
        fetch("https://overpass-api.de/api/interpreter", gp, post='data=[out:json][timeout:90];area["ISO3166-2"="%s"]->.a;(way["leisure"="golf_course"](area.a);relation["leisure"="golf_course"](area.a););out center tags;' % CFG["golf"])
    try:
        for e in json.load(open(gp))["elements"]:
            c = e.get("center") or {}
            if "lat" in c:
                x, y = px(c["lon"], c["lat"])
                golf.append([round(x, 2), round(y, 2), (e.get("tags") or {}).get("name", "")])
    except Exception as ex:
        print("golf failed:", ex); os.remove(gp)

data = {
    "region": REGION, "ext": [L0, L1, B0, B1], "gw": GW, "gh": GH, "km": KM, "elevStep": 20, "precipStep": 0.5,
    "elev": b64(elev8), "shade": b64(shade), "lcA": b64(lcA), "lcB": b64(lcB), "lcC": b64(lcC),
    "precip": b64(precip8), "mask": b64(mask), "states": state_list,
    "outlines": outlines, "borders": border_lines, "countyLines": county_lines, "counties": counties,
    "rivers": rivers, "lakes": lakes, "canals": canals, "amas": amas, "basins": basins, "tribal": tribal,
    "golf": golf, "amaHist": {},
}
js = "window.MAPDATA=" + json.dumps(data, separators=(",", ":")) + ";\n"
open(OUT, "w").write(js)
print("wrote", os.path.relpath(OUT, HERE), len(js) // 1024, "KB;", "elev", int(elev.min()), int(elev.max()), "precip in", precip8.max() / 2,
      "crop tiles", int((f_crop > .15).sum()), "built", int((f_built > .15).sum()), "sea", int(sea.sum()),
      "rivers", len(rivers), "lakes", len(lakes), "canals", len(canals), "areas", len(amas), "tribal", len(tribal), "golf", len(golf), "states", [s["id"] for s in state_list])
