#!/usr/bin/env python3
"""Bake raw geodata into data.js for the Arizona water map.

Usage:  python build_data.py <raw_dir> <out_js>

Raw inputs (see fetch.sh for where each comes from):
  dem/7_x_y.png            Mapzen/AWS Terrarium elevation tiles
  cdl/lc.png               Esri/Impact Observatory Sentinel-2 10m land cover (export)
  prism/*.tif              PRISM 1991-2020 annual precipitation normals (4km)
  ne/*.geojson             Natural Earth 10m rivers + lakes
  counties-10m.json        us-atlas (Census) county/state boundaries
  adwr/*.geojson           ADWR AMAs/INAs + groundwater basins, CAP canals, Census tribal lands
  osm/golf.json            OpenStreetMap golf courses (Overpass)
"""
import sys, json, math, base64, glob, os
import numpy as np
from PIL import Image

RAW, OUT = sys.argv[1], sys.argv[2]
L0, L1, B0, B1 = -115.2, -108.8, 31.15, 37.35   # lon/lat extent
GW, GH = 196, 230                                # tiles (~3 km each)


def px(lon, lat):
    return ((lon - L0) / (L1 - L0) * GW, (B1 - lat) / (B1 - B0) * GH)


def b64(a):
    return base64.b64encode(np.ascontiguousarray(a).tobytes()).decode()


# ---------------------------------------------------------------- terrain
TX0, TY0, Z = 23, 49, 7
mos = np.zeros((4 * 256, 3 * 256), dtype=np.float32)
for x in range(3):
    for y in range(4):
        t = np.array(Image.open(f"{RAW}/dem/{Z}_{TX0+x}_{TY0+y}.png").convert("RGB")).astype(np.float32)
        mos[y*256:(y+1)*256, x*256:(x+1)*256] = t[..., 0] * 256 + t[..., 1] + t[..., 2] / 256 - 32768


def dem_at(lon, lat):
    """bilinear sample; lon/lat arrays"""
    n = 2 ** Z * 256
    X = (lon + 180) / 360 * n - TX0 * 256 - 0.5
    Y = (1 - np.arcsinh(np.tan(np.radians(lat))) / math.pi) / 2 * n - TY0 * 256 - 0.5
    X = np.clip(X, 0, mos.shape[1] - 1.001); Y = np.clip(Y, 0, mos.shape[0] - 1.001)
    x0 = np.floor(X).astype(int); y0 = np.floor(Y).astype(int)
    fx = X - x0; fy = Y - y0
    return (mos[y0, x0] * (1-fx) * (1-fy) + mos[y0, x0+1] * fx * (1-fy)
            + mos[y0+1, x0] * (1-fx) * fy + mos[y0+1, x0+1] * fx * fy)


S = 4  # supersample
xs = L0 + (np.arange(GW * S) + 0.5) / (GW * S) * (L1 - L0)
ys = B1 - (np.arange(GH * S) + 0.5) / (GH * S) * (B1 - B0)
LON, LAT = np.meshgrid(xs, ys)
hi = dem_at(LON, LAT)
elev = hi.reshape(GH, S, GW, S).mean(axis=(1, 3))
e2 = hi.reshape(GH * 2, 2, GW * 2, 2).mean(axis=(1, 3))       # 1.5 km
gy, gx = np.gradient(e2, 1500.0)
zf = 4.0
az, alt = math.radians(315), math.radians(45)
slope = np.arctan(zf * np.hypot(gx, gy))
aspect = np.arctan2(gy, -gx)
shade = np.sin(alt) * np.cos(slope) + np.cos(alt) * np.sin(slope) * np.cos(az - math.pi/2 - aspect)
shade = np.clip(shade * 255, 0, 255).astype(np.uint8)
elev8 = np.clip(elev / 16, 0, 255).astype(np.uint8)

# ---------------------------------------------------------------- land cover
lc = np.array(Image.open(f"{RAW}/cdl/lc.png").convert("RGB")).astype(np.int32)
PAL = {"water": (26, 91, 171), "tree": (53, 130, 33), "flood": (135, 209, 158), "crop": (255, 219, 92),
       "built": (237, 2, 42), "bare": (237, 233, 228), "snow": (242, 250, 255), "cloud": (200, 200, 200),
       "range": (239, 207, 168), "sea": (0, 0, 0)}
names = list(PAL)
dist = np.stack([((lc - np.array(PAL[k])) ** 2).sum(-1) for k in names])
cls = dist.argmin(0)
k = lc.shape[0] // GH
assert lc.shape[0] == GH * k and lc.shape[1] == GW * k


def frac(*keys):
    m = np.isin(cls, [names.index(x) for x in keys])
    return m.reshape(GH, k, GW, k).mean(axis=(1, 3))


f_crop, f_built, f_tree, f_water, f_bare = frac("crop"), frac("built"), frac("tree", "flood"), frac("water"), frac("bare")
# black = no data. It is the Gulf of California in the far southwest; elsewhere it is a gap, not water.
_lat = B1 - (np.arange(GH) + 0.5) / GH * (B1 - B0); _lon = L0 + (np.arange(GW) + 0.5) / GW * (L1 - L0)
gulf = (_lat[:, None] < 31.95) & (_lon[None, :] < -113.9)
f_water = np.where(gulf, f_water + frac("sea"), f_water)
q = lambda f: np.clip(np.round(np.sqrt(f) * 15), 0, 15).astype(np.uint8)   # sqrt keeps small fractions visible
lcA = (q(f_crop) << 4) | q(f_built)
lcB = (q(f_tree) << 4) | q(f_water)
lcC = q(f_bare)

# ---------------------------------------------------------------- precipitation
Image.MAX_IMAGE_PIXELS = None
pim = Image.open(glob.glob(f"{RAW}/prism/*.tif")[0])
tp = pim.tag_v2[33922]; ps = pim.tag_v2[33550]
pa = np.array(pim)
tlon = L0 + (np.arange(GW) + 0.5) / GW * (L1 - L0)
tlat = B1 - (np.arange(GH) + 0.5) / GH * (B1 - B0)
ci = np.clip(((tlon - tp[3]) / ps[0]).astype(int), 0, pa.shape[1] - 1)
ri = np.clip(((tp[4] - tlat) / ps[1]).astype(int), 0, pa.shape[0] - 1)
pmm = pa[np.ix_(ri, ci)]
pmm[pmm < 0] = 0          # outside US (Mexico) -> no data
precip8 = np.clip(np.round(pmm / 25.4 * 4), 0, 255).astype(np.uint8)   # quarter inches

# ---------------------------------------------------------------- vector helpers
def dp(pts, tol):
    """Douglas-Peucker on list of (x,y); closed rings are split at their farthest point first"""
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
    """lon/lat line -> list of tile-coord polylines (split where it leaves the map)"""
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

# ---------------------------------------------------------------- boundaries (topojson)
topo = json.load(open(f"{RAW}/counties-10m.json"))
sc, tr = topo["transform"]["scale"], topo["transform"]["translate"]
arcs = []
for a in topo["arcs"]:
    x = y = 0; pts = []
    for dx, dy in a:
        x += dx; y += dy
        pts.append((x * sc[0] + tr[0], y * sc[1] + tr[1]))
    arcs.append(pts)


def arc(i):
    return arcs[i] if i >= 0 else arcs[~i][::-1]


def rings(geom):
    polys = geom["arcs"] if geom["type"] == "MultiPolygon" else [geom["arcs"]]
    out = []
    for poly in polys:
        for ring in poly:
            pts = []
            for i in ring:
                pts += arc(i)[(1 if pts else 0):]
            out.append(pts)
    return out


def arc_ids(geom):
    polys = geom["arcs"] if geom["type"] == "MultiPolygon" else [geom["arcs"]]
    return {(i if i >= 0 else ~i) for poly in polys for ring in poly for i in ring}


states = {g["id"]: g for g in topo["objects"]["states"]["geometries"]}
az_ring = max(rings(states["04"]), key=len)
az_px = [px(*p) for p in az_ring]



def pip_mask(poly):
    """vectorised ray cast: poly in tile coords -> bool GHxGW for tile centres"""
    X, Y = np.meshgrid(np.arange(GW) + 0.5, np.arange(GH) + 0.5)
    inside = np.zeros((GH, GW), bool)
    for (x1, y1), (x2, y2) in zip(poly, poly[1:] + poly[:1]):
        if y1 == y2: continue
        c = ((y1 > Y) != (y2 > Y)) & (X < (x2 - x1) * (Y - y1) / (y2 - y1) + x1)
        inside ^= c
    return inside


az_mask = pip_mask(az_px).astype(np.uint8)

county_arcs, counties = set(), []
for g in topo["objects"]["counties"]["geometries"]:
    if g["id"].startswith("04"):
        county_arcs |= arc_ids(g)
        r = max(rings(g), key=len)
        cx = sum(p[0] for p in r) / len(r); cy = sum(p[1] for p in r) / len(r)
        counties.append({"n": g["properties"]["name"], "p": [round(v, 1) for v in px(cx, cy)]})
state_arcs = set()
for sid in ("04", "32", "49", "06", "35", "08"):
    state_arcs |= arc_ids(states[sid])
az_state_arcs = arc_ids(states["04"])
border_lines = [flat(l) for i in sorted(state_arcs - az_state_arcs) for l in proj_line(arcs[i], 0.08)]
county_lines = [flat(l) for i in sorted(county_arcs - az_state_arcs) for l in proj_line(arcs[i], 0.08)]
az_outline = flat(dp(az_px, 0.05))

# ---------------------------------------------------------------- rivers
rivers = []
for fn in ("ne_10m_rivers_lake_centerlines", "ne_10m_rivers_north_america"):
    for ft in json.load(open(f"{RAW}/ne/{fn}.geojson"))["features"]:
        p = ft["properties"]
        for line in geom_lines(ft["geometry"]):
            for l in proj_line(line, 0.05):
                if len(l) < 2: continue
                # orient downstream using the DEM
                if elev_xy(*l[0]) < elev_xy(*l[-1]) - 3:
                    l = l[::-1]
                rivers.append({"n": p.get("name") or "", "i": 1 if "Intermittent" in (p.get("featurecla") or "") else 0,
                               "r": int(p.get("scalerank") or 12), "l": flat(l)})

lakes = []
for fn in ("ne_10m_lakes", "ne_10m_lakes_north_america"):
    for ft in json.load(open(f"{RAW}/ne/{fn}.geojson"))["features"]:
        for line in geom_lines(ft["geometry"]):
            ls = proj_line(line, 0.04)
            if ls and len(ls[0]) > 3:
                lakes.append({"n": ft["properties"].get("name") or "", "l": flat(ls[0])})

# ---------------------------------------------------------------- canals
def chain(segs):
    """greedy: order unordered segments into one path starting from the westernmost end"""
    segs = [list(s) for s in segs if len(s) > 1]
    start = min(range(len(segs)), key=lambda i: min(segs[i][0][0], segs[i][-1][0]))
    cur = segs.pop(start)
    if cur[-1][0] < cur[0][0]: cur = cur[::-1]
    path = cur
    while segs:
        ex, ey = path[-1]
        best, bd, rev = None, 1e9, False
        for i, s in enumerate(segs):
            for r, pt in ((False, s[0]), (True, s[-1])):
                d = math.hypot(pt[0] - ex, pt[1] - ey)
                if d < bd: best, bd, rev = i, d, r
        if bd > 0.25: break            # > ~25 km gap: not part of the main stem
        s = segs.pop(best)
        path += (s[::-1] if rev else s)
    return path, segs


canals = []
capd = json.load(open(f"{RAW}/adwr/cap_canal.geojson"))["features"]
main = [l for f in capd if f["properties"]["NAME"] in ("Central Arizona Project Canal", "CAP Canal - Tucson Pipeline")
        for l in geom_lines(f["geometry"])]
cap_path, left = chain(main)
print("CAP chain pts", len(cap_path), "leftover segs", len(left), "start", cap_path[0], "end", cap_path[-1])
canals.append({"n": "Central Arizona Project", "o": "CAP", "k": "cap", "l": flat(proj_line(cap_path, 0.04, False)[0])})
wad = [l for f in capd if "Waddell" in f["properties"]["NAME"] for l in geom_lines(f["geometry"])]
if wad:
    wp, _ = chain(wad)
    canals.append({"n": "Waddell Canal", "o": "CAP", "k": "cap2", "l": flat(proj_line(wp, 0.04, False)[0])})

for ft in json.load(open(f"{RAW}/adwr/crb_canals.geojson"))["features"]:
    p = ft["properties"]; n = p["NAME"].strip(); o = (p.get("OWNER") or "").strip()
    if n == "Central Arizona Project Canal": continue
    for line in geom_lines(ft["geometry"]):
        for l in proj_line(line, 0.05):
            if len(l) < 2: continue
            ln = sum(math.hypot(l[i+1][0]-l[i][0], l[i+1][1]-l[i][1]) for i in range(len(l)-1))
            if ln < 1.2: continue
            if elev_xy(*l[0]) < elev_xy(*l[-1]) - 3: l = l[::-1]
            canals.append({"n": n, "o": o, "k": "srp" if "Salt River" in o else "other", "l": flat(l)})

# ---------------------------------------------------------------- groundwater areas, basins, tribal lands
def polys(path, namekey, tol, min_area=0.0, keep=None):
    out = []
    for ft in json.load(open(path))["features"]:
        n = ft["properties"][namekey]
        if keep and not keep(n): continue
        rs = []
        for line in geom_lines(ft["geometry"]):
            r = dp([px(c[0], c[1]) for c in line], tol)
            if len(r) > 3 and ring_area(r) >= min_area: rs.append(flat(r))
        if rs: out.append({"n": n.title() if n.isupper() else n, "r": rs})
    return out


amas = polys(f"{RAW}/adwr/ama_ina.geojson", "BASIN_NAME", 0.08)
for a in amas: a["n"] = a["n"].replace(" Ama", " AMA").replace(" Ina", " INA")
basins = polys(f"{RAW}/adwr/basins.geojson", "BASIN_NAME", 0.2)
for a in basins: a["n"] = a["n"].replace(" Ama", " AMA")
tribal = polys(f"{RAW}/adwr/tribal.geojson", "BASENAME", 0.12, min_area=0.6)

# ---------------------------------------------------------------- golf
golf = []
for e in json.load(open(f"{RAW}/osm/golf.json"))["elements"]:
    c = e.get("center") or {}
    if "lat" in c:
        x, y = px(c["lon"], c["lat"])
        golf.append([round(x, 2), round(y, 2), (e.get("tags") or {}).get("name", "")])

# ---------------------------------------------------------------- AMA demand history (Kyl Center / ADWR)
hist = {}
hp = f"{RAW}/adwr/ama_hist.json"
if os.path.exists(hp):
    for ft in json.load(open(hp))["features"]:
        a = ft.get("attributes") or ft.get("properties")
        nm = a["BASIN_NAME"].title().replace(" Ama", " AMA")
        rows = []
        for yr in range(1985, 2020):
            g = lambda k_: a.get(f"{k_}_D_{yr}")
            if g("Muni") is None: continue
            rows.append([yr, g("Muni") or 0, g("Indu") or 0, g("Agri") or 0, g("Indn") or 0])
        hist[nm] = rows

data = {
    "ext": [L0, L1, B0, B1], "gw": GW, "gh": GH,
    "elev": b64(elev8), "shade": b64(shade), "lcA": b64(lcA), "lcB": b64(lcB), "lcC": b64(lcC),
    "precip": b64(precip8), "mask": b64(az_mask),
    "outline": az_outline, "borders": border_lines, "countyLines": county_lines, "counties": counties,
    "rivers": rivers, "lakes": lakes, "canals": canals, "amas": amas, "basins": basins, "tribal": tribal,
    "golf": golf, "amaHist": hist,
}
js = "window.AZDATA=" + json.dumps(data, separators=(",", ":")) + ";\n"
open(OUT, "w").write(js)
print("wrote", OUT, len(js) // 1024, "KB")
for k_, v in data.items():
    print(f"  {k_}: {len(json.dumps(v))//1024} KB", end="")
print()
print("elev range", elev.min(), elev.max(), "precip in", precip8.min()/4, precip8.max()/4,
      "crop tiles", int((f_crop > .15).sum()), "built tiles", int((f_built > .15).sum()), "rivers", len(rivers), "canals", len(canals), "golf", len(golf))
