/* Arizona Water map: camera, layers, drawing, interaction, panel, tour. */
(() => {
  const D = window.MAPDATA, C = window.MAPCONTENT, G = window.MAPGRID;
  const T = G.T, WW = G.WW, WH = G.WH;
  const $ = s => document.querySelector(s);
  const cv = $('#map'), ctx = cv.getContext('2d');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = n => Math.round(n).toLocaleString('en-US');
  const fmtAF = af => af >= 1e6 ? (af / 1e6).toFixed(af >= 1e7 ? 1 : 2).replace(/\.?0+$/, '') + ' million AF' : fmt(af) + ' AF';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const KM_PER_TILE = D.km || 3.0;
  const areaKind = n => C.areaKind ? C.areaKind(n) : / INA$/.test(n) ? 'Irrigation Non-Expansion Area' : 'Active Management Area';
  const MAJOR = new Set(C.majorCanals || ['cap', 'cap2']);
  const areaAlt = n => C.areaAlt ? C.areaAlt(n) : / INA$/.test(n);   // second, lighter style for groundwater-layer polygons
  const riverName = n => (C.riverNames || {})[n] || (n ? n + (/(Wash|River|Creek|Fork)$/.test(n) ? '' : ' River') : 'Stream');

  // ------------------------------------------------------------------ sprites
  const PAL = {
    k: '#2b2430', w: '#ffffff', g: '#9a9aa2', G: '#cfcfd6', d: '#5c5a66', b: '#3a7cc4', B: '#8fc4f2', r: '#c8442e', o: '#d98a4a',
    y: '#f2c230', n: '#3f8f46', N: '#8fce6a', t: '#d9b97f', T: '#8a5a3a', p: '#6250d6', c: '#5fd0d8', s: '#f4f0e6', R: '#8f2f20', e: '#eb6834',
  };
  const SPR = {
    dam: ['bbbbbbkk......', 'bBbbbbkGk.....', 'bbbbBbkGGk....', 'bbbbbbkGdGk...', 'bBbbbbkGdGGk..', 'bbbbbbkGdGdGk.', 'bbbBbbkGdGdGGk', 'bbbbbbkGdGdGGk', 'kkkkkkkGGGGGGk', '......kkkkkkBb', '..........bBbb'],
    hydro: ['bbbbbbkk......', 'bBbbbbkGk.....', 'bbbbBbkGGk....', 'bbbbbbkGdGk.y.', 'bBbbbbkGdGkyy.', 'bbbbbbkGdGyyyy', 'bbbBbbkGdGdyy.', 'bbbbbbkGdGdyGk', 'kkkkkkkGGGGyGk', '......kkkkkkBb', '..........bBbb'],
    power: ['...ww....ww...', '..www...www...', '...w.....w....', '..kGGk..kGGk..', '..kGGk..kGGk..', '.kGGGGkkGGGGk.', '.kGdGGkkGdGGk.', 'kGGdGGGkGdGGGk', 'kGGdGGGkGdGGGk', 'kkkkkkkkkkkkkk'],
    nuclear: ['...ww....ww...', '..www...www...', '...w.....w....', '..kGGk..kGGk..', '..kGGk..kGGk..', '.kGGGGkkGGGGk.', '.kGyyGkkGyyGk.', 'kGGyyGGkGyyGGk', 'kGGGGGGkGGGGGk', 'kkkkkkkkkkkkkk'],
    fab: ['.kkkkkkkkkkkk.', '.kssssssssssk.', '.kscscscscssk.', '.kssssssssssk.', '.kbbbbbbbbbbk.', '.kssssssssssk.', '.ksskksyyyssk.', '.ksskksyyyssk.', '.kkkkkkkkkkkk.'],
    datacenter: ['..GG..GG..GG..', '.kkkkkkkkkkkk.', '.kddddddddddk.', '.kdNdNdNdNddk.', '.kddddddddddk.', '.kdNdcdNdcddk.', '.kddddddddddk.', '.kdNdNdNdNddk.', '.kkkkkkkkkkkk.'],
    mine: ['....kkkkkk....', '..kkooooookk..', '.kooTTTTTTook.', 'koTTooooooTTok', 'koToTTTTTToTok', 'koToTccccToTok', 'koToTTTTTToTok', 'koTTooooooTTok', '.kooTTTTTTook.', '..kkooooookk..', '....kkkkkk....'],
    golf: ['....kr....', '....krr...', '....krrr..', '....kr....', '....k.....', '.NNNkNNN..', 'NnnnwnnnN.', '.NNNNNNN..'],
    farm: ['....rr.....GG.', '...rrrr...kGGk', '..rrrrrr..kGGk', '.krrrrrrk.kGGk', '.krwrrwrk.kGGk', '.krrkkrrk.kGGk', '.krrkkrrk.kGGk', 'NnNnNnNnNnNnNn', 'nNnNnNnNnNnNnN'],
    dairy: ['....rr.....GG.', '...rrrr...kGGk', '..rrrrrr..kGGk', '.krrrrrrk.kGGk', '.krwrrwrk.kkkk', '.krrkkrrk.wkw.', '.krrkkrrk.www.', 'NnNnNnNnNkwkwk', 'nNnNnNnNnNk.k.'],
    city: ['.....kk.......', '....kBBk..kk..', '.kk.kBBk.kBGk.', 'kBGkkBBkkkBGk.', 'kBGkBBBBGkBGk.', 'kBGkBGBBGkBGkk', 'kBGkBBBBGkBGGk', 'kBGkBGBBGkBGGk', 'kkkkkkkkkkkkkk'],
    town: ['..............', '...rr.....rr..', '..rrrr...rrrr.', '.krrrrk.krrrrk', '.kswssk.ksswsk', '.kssksk.ksksk.', '.kkkkkk.kkkkk.'],
    pump: ['.kkkkk........', '.kyyyk....kkk.', '.kyyykkkkkkBk.', '.kyyykBBBBBBk.', '.kkkkkkkkkkkk.', '..kBk.........', '..kBk.........', 'bbkBkbbbbbbbbb', 'bBbbbbbBbbbbBb'],
    recharge: ['..kkkkkkkk..', '.kbbbbbbbbk.', 'kbbBbbbbBbbk', 'kbbbbwwbbbbk', 'kbBbbwwbbBbk', 'kbbwwwwwwbbk', '.kbbwwwwbbk.', '..kkbwwbkk..', '....kwwk....', '.....kk.....'],
    well: ['...kkkkk...', '...kbbbk...', '....kbk....', '....kbk....', '.rr.kbk.rr.', '.rrrkbkrrr.', '..rrrrrrr..', '...rrrrr...', '....rrr....', '.....r.....'],
    snow: ['.....w.....', '..w..w..w..', '...w.w.w...', '....www....', 'wwwwwwwwwww', '....www....', '...w.w.w...', '..w..w..w..', '.....w.....'],
    reclaim: ['..kkkkkkkk..', '.kNNNNNNNNk.', 'kNNNbbNNNNNk', 'kNNbbbbNNwNk', 'kNbbbbbbNwNk', 'kNbbbbbbwwwk', 'kNNbbbbNNwNk', '.kNNNNNNNNk.', '..kkkkkkkk..'],
    delta: ['...........', '.ttttttttt.', 'ttTtttttTtt', 'tttttbttttt', 'ttttbbttTtt', 'tTttbttttt.', '.ttttttt...'],
    info: ['.kkkkkkkk.', 'kyyyyyyyyk', 'kyyykkyyyk', 'kyyyyyyyyk', 'kyyykkyyyk', 'kyyykkyyyk', 'kyyykkyyyk', 'kyyyyyyyyk', '.kkkkkkkk.'],
    tribe: ['....kk....', '...kook...', '..kooook..', '.koowwook.', 'koowkkwook', 'koowkkwook', 'kkkkkkkkkk'],
    rain: ['..GGGG....', '.GGGGGGG..', 'GGGGGGGGG.', '.GGGGGGG..', '.b..b..b..', 'b..b..b...', '..b..b..b.'],
    river: ['bb........', 'bBbb......', '.bbBbb....', '...bbbBb..', '.....bbBbb', '......bbBb', '.......bbb'],
    canal: ['..........', 'kkkkkkkkkk', 'bBbbbBbbbB', 'bbbBbbbBbb', 'kkkkkkkkkk', '..........'],
    aquifer: ['tttttttttt', 'tTtttttTtt', 'kkkkkkkkkk', 'bbBbbbbBbb', 'bbbbBbbbbb', 'bBbbbbbBbb', 'kkkkkkkkkk'],
  };
  Object.assign(SPR, C.sprites || {});
  const sprCache = {};
  function sprite(name) {
    if (sprCache[name]) return sprCache[name];
    const rows = SPR[name] || SPR.info, w = Math.max(...rows.map(r => r.length)), h = rows.length;
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d');
    rows.forEach((row, j) => { for (let i = 0; i < row.length; i++) if (row[i] !== '.') { x.fillStyle = PAL[row[i]]; x.fillRect(i, j, 1, 1); } });
    return sprCache[name] = c;
  }
  function iconEl(name, px = 24) {
    const s = sprite(name), c = document.createElement('canvas'); c.width = c.height = 16;
    const x = c.getContext('2d'); x.drawImage(s, Math.floor((16 - s.width) / 2), Math.floor((16 - s.height) / 2));
    c.style.width = c.style.height = px + 'px'; return c;
  }

  // ------------------------------------------------------------------ layers
  const LAYERS = [
    { id: 'rivers', label: 'Rivers', icon: 'river', on: true },
    { id: 'reservoirs', label: 'Dams & lakes', icon: 'dam', on: true },
    { id: 'canals', label: 'Canals', icon: 'canal', on: true },
    { id: 'ground', label: 'Groundwater', icon: 'aquifer', on: false },
    { id: 'rain', label: 'Rainfall', icon: 'rain', on: false },
    { id: 'cities', label: 'Cities', icon: 'city', on: true },
    { id: 'farms', label: 'Farms', icon: 'farm', on: true },
    { id: 'industry', label: 'Industry', icon: 'fab', on: true },
    { id: 'golf', label: 'Golf', icon: 'golf', on: true },
    { id: 'tribal', label: 'Tribal lands', icon: 'tribe', on: false },
  ];
  if (C.layers) for (let i = LAYERS.length - 1; i >= 0; i--) { const o = C.layers[LAYERS[i].id]; if (o === false) LAYERS.splice(i, 1); else if (o) Object.assign(LAYERS[i], o); }
  if (C.layerList) { LAYERS.length = 0; LAYERS.push(...C.layerList); }   // a content file may define the whole layer list
  const on = {}; LAYERS.forEach(l => on[l.id] = l.on);
  let season = 'summer';
  const KIND = {   // feature kind -> layer + sprite + label
    reservoir: ['reservoirs', 'dam', 'Reservoir'], hydro: ['reservoirs', 'hydro', 'Dam & hydropower'], pump: ['canals', 'pump', 'Pumping plant'],
    recharge: ['ground', 'recharge', 'Water banking'], well: ['ground', 'well', 'Groundwater hot spot'], city: ['cities', 'city', 'City'], town: ['cities', 'town', 'Town'],
    farm: ['farms', 'farm', 'Farming region'], dairy: ['farms', 'dairy', 'Dairy & farms'], fab: ['industry', 'fab', 'Chip factory'], datacenter: ['industry', 'datacenter', 'Data centers'],
    mine: ['industry', 'mine', 'Copper mine'], power: ['industry', 'power', 'Power plant'], nuclear: ['industry', 'nuclear', 'Nuclear plant'], reclaim: ['cities', 'reclaim', 'Reclaimed water'],
    golf: ['golf', 'golf', 'Golf'], snow: ['rivers', 'snow', 'Snowpack'], delta: ['rivers', 'delta', 'River delta'], info: ['rivers', 'info', 'Good to know'],
  };

  Object.assign(KIND, C.kinds || {});
  // ------------------------------------------------------------------ world data prep
  const plantRaw = {}; (D.plants || []).forEach(p => plantRaw[p.id] = p);
  const feats = C.features.map(f => { const pp = f.plant && plantRaw[f.plant]; const [x, y] = pp && f.lon === undefined ? [pp.x * T, pp.y * T] : G.ll2w(f.lon, f.lat); return Object.assign({ x, y, tier: 2 }, f, { layer: KIND[f.kind][0] }); });
  const featById = {}; feats.forEach(f => featById[f.id] = f);

  // river styling: width from typical flow; some reaches are dry because everything upstream is diverted
  function riverStyle(name, lon, lat) {
    const rs = C.riverStyle[name];
    if (!rs) return null;
    let w = rs.w, dry = false;
    if (rs.reaches) for (const r of rs.reaches) if (r.test(lon, lat)) { w = r.w !== undefined ? r.w : w; dry = !!r.dry; break; }
    return { w, dry };
  }
  const rivers = [];   // split into runs of equal style
  for (const r of D.rivers) {
    const name = r.n, pts = r.l;
    let cur = null;
    for (let i = 0; i < pts.length; i += 2) {
      const [lon, lat] = G.t2ll(pts[i], pts[i + 1]);
      let st = riverStyle(name, lon, lat) || { w: r.r <= 10 ? 1.4 : 1, dry: !!r.i, minor: true };
      if (r.i && !C.riverStyle[name]) st.dry = true;
      const key = st.w + '|' + st.dry;
      if (!cur || cur.key !== key) {
        const prev = cur;
        cur = { name, key, w: st.w, dry: st.dry, minor: !!st.minor, pts: [] };
        if (prev) { cur.pts.push(prev.pts[prev.pts.length - 2], prev.pts[prev.pts.length - 1]); }
        rivers.push(cur);
      }
      cur.pts.push(pts[i] * T, pts[i + 1] * T);
    }
  }
  if (C.riverScale) for (const r of rivers) r.w *= C.riverScale;   // a map about something else can draw rivers thinner
  const canals = D.canals.map(c => ({ name: c.n, owner: c.o, k: c.k, pts: c.l.map(v => v * T) }));
  const polyPrep = arr => arr.map(a => {
    const rings = a.r.map(r => r.map(v => v * T));
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, big = rings[0];
    for (const r of rings) { if (r.length > big.length) big = r; for (let i = 0; i < r.length; i += 2) { x0 = Math.min(x0, r[i]); x1 = Math.max(x1, r[i]); y0 = Math.min(y0, r[i + 1]); y1 = Math.max(y1, r[i + 1]); } }
    let cx = 0, cy = 0; for (let i = 0; i < big.length; i += 2) { cx += big[i]; cy += big[i + 1]; }
    return { name: a.n, k: a.k, rings, bbox: [x0, y0, x1, y1], c: [cx / (big.length / 2), cy / (big.length / 2)] };
  });
  const amas = polyPrep(D.amas), basins = polyPrep(D.basins), tribal = polyPrep(D.tribal);
  if (C.areaLabels) for (const a of amas) { const o = C.areaLabels[a.name]; if (o) { if (o.at) a.c = G.ll2w(o.at[0], o.at[1]); a.minZ = o.minZ; a.short = o.short; } }   // optional label position / minimum zoom
  const lakes = D.lakes.map(l => ({ name: l.n, pts: l.l.map(v => v * T) }));
  const golf = D.golf.map(g => ({ x: g[0] * T, y: g[1] * T, name: g[2] }));
  // optional data-driven layers: point plants and styled network lines (used by the electricity maps)
  const plants = (D.plants || []).map(p => Object.assign({}, p, { x: p.x * T, y: p.y * T, feat: feats.find(f => f.plant === p.id) || null }));
  const plantLayer = p => C.plantLayer ? C.plantLayer(p) : 'plants';
  const LS = C.lineStyles || {};
  const netLines = (D.netLines || []).map(l => { const pts = l.l.map(v => v * T); let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; for (let i = 0; i < pts.length; i += 2) { x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); y0 = Math.min(y0, pts[i + 1]); y1 = Math.max(y1, pts[i + 1]); } return Object.assign({}, l, { pts, bbox: [x0, y0, x1, y1], st: LS[l.k] || {} }); });
  const netGroups = {}; netLines.forEach(l => (netGroups[l.k] = netGroups[l.k] || []).push(l));
  const netOrder = Object.keys(netGroups).sort((a, b) => ((LS[a] || {}).z || 0) - ((LS[b] || {}).z || 0));
  const inRing = (r, x, y) => { let c = false; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) if ((r[i + 1] > y) !== (r[j + 1] > y) && x < (r[j] - r[i]) * (y - r[i + 1]) / (r[j + 1] - r[i + 1]) + r[i]) c = !c; return c; };
  const inPoly = (p, x, y) => x >= p.bbox[0] && x <= p.bbox[2] && y >= p.bbox[1] && y <= p.bbox[3] && p.rings.some(r => inRing(r, x, y));
  const distToLine = (pts, x, y) => {
    let best = 1e9;
    for (let i = 0; i < pts.length - 2; i += 2) {
      const ax = pts[i], ay = pts[i + 1], dx = pts[i + 2] - ax, dy = pts[i + 3] - ay, L = dx * dx + dy * dy || 1;
      const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / L));
      const d = Math.hypot(x - ax - t * dx, y - ay - t * dy); if (d < best) best = d;
    }
    return best;
  };

  // ------------------------------------------------------------------ camera
  const cam = { x: WW / 2, y: WH / 2, z: .25 };
  let vw = 0, vh = 0, dpr = 1, zMin = .1; const zMax = 5;
  // compact = phone layout (bottom sheet in portrait, side sheet in landscape); must match the media queries in style.css
  const compact = () => innerWidth <= 820 || innerHeight <= 520;
  const sideSheet = () => innerHeight <= 520 && innerWidth >= 560 && innerWidth > innerHeight;
  const pad = () => !compact() ? { l: 200, r: 372, t: 20, b: 20 } : sideSheet() ? { l: 10, r: innerWidth * .46 + 10, t: 56, b: 10 }
    : { l: 10, r: 10, t: 104, b: innerHeight * (document.querySelector('#panel.touring') ? .54 : .46) };
  const w2s = (x, y) => [(x - cam.x) * cam.z + vw / 2, (y - cam.y) * cam.z + vh / 2];
  const s2w = (x, y) => [(x - vw / 2) / cam.z + cam.x, (y - vh / 2) / cam.z + cam.y];
  function homeView() {
    const p = pad(); if (!compact()) p.t = 92;   // keep the top of the map clear of the title and stats plates
    const aw = vw - p.l - p.r, ah = vh - p.t - p.b;
    const z = Math.min(aw / (WW * .96), ah / (WH * .97));
    return { z, x: WW / 2 - ((p.l - p.r) / 2) / z, y: WH * .5 - ((p.t - p.b) / 2) / z };
  }
  function resize() {
    dpr = Math.min(2, devicePixelRatio || 1); vw = cv.clientWidth; vh = cv.clientHeight;
    cv.width = Math.round(vw * dpr); cv.height = Math.round(vh * dpr);
    if (vw < 50 || vh < 50) return;
    const hv = homeView(); zMin = hv.z * .7; dirty = true;
    if (!userMoved) { cam.x = hv.x; cam.y = hv.y; cam.z = hv.z; }
  }
  let fly = null, userMoved = false;
  function flyTo(x, y, z, ms = 900) {
    userMoved = true;
    // offset so the target lands in the unobscured part of the viewport
    const p = pad(); x -= ((p.l - p.r) / 2) / z; y -= ((p.t - p.b) / 2) / z;
    if (reduceMotion || ms === 0) { cam.x = x; cam.y = y; cam.z = z; fly = null; dirty = true; return; }
    fly = { x0: cam.x, y0: cam.y, z0: cam.z, x, y, z, t0: performance.now(), ms };
  }
  function clampCam() {
    cam.z = Math.max(zMin, Math.min(zMax, cam.z));
    cam.x = Math.max(-WW * .2, Math.min(WW * 1.2, cam.x)); cam.y = Math.max(-WH * .2, Math.min(WH * 1.2, cam.y));
  }
  function zoomAt(sx, sy, f) {
    const [wx, wy] = s2w(sx, sy);
    cam.z = Math.max(zMin, Math.min(zMax, cam.z * f));
    cam.x = wx - (sx - vw / 2) / cam.z; cam.y = wy - (sy - vh / 2) / cam.z; fly = null; clampCam(); dirty = true;
  }

  // ------------------------------------------------------------------ drawing
  let terrain, rainCv, snowCv, nightCv, dirty = true, tPrev = 0, flowT = 0;
  let selected = null, hover = null;   // {type, ref}
  let capScale = 1;                    // CAP canal width multiplier (shortage slider)
  const iconScale = () => cam.z < .45 ? 2 : cam.z < 1.3 ? 2 : 3;
  const featVisible = f => on[f.layer] && (f.kind !== 'snow' || true) && cam.z >= (f.tier === 1 ? 0 : f.tier === 2 ? .42 : .8);
  const lw = w => w * Math.max(.75, Math.pow(cam.z, .45)) / cam.z;     // screen-ish widths inside world transform

  function path(pts) { ctx.beginPath(); for (let i = 0; i < pts.length; i += 2) ctx[i ? 'lineTo' : 'moveTo'](pts[i], pts[i + 1]); }
  function ringsPath(rings) { ctx.beginPath(); for (const r of rings) { for (let i = 0; i < r.length; i += 2) ctx[i ? 'lineTo' : 'moveTo'](r[i], r[i + 1]); ctx.closePath(); } }
  function label(txt, sx, sy, size, color = '#fff', align = 'center', halo = '#2b2430') {
    ctx.font = `${size}px Silkscreen, ui-monospace, monospace`; ctx.textAlign = align; ctx.textBaseline = 'middle';
    ctx.lineWidth = 3; ctx.strokeStyle = halo; ctx.lineJoin = 'round'; ctx.strokeText(txt, sx, sy); ctx.fillStyle = color; ctx.fillText(txt, sx, sy);
  }

  function draw(now) {
    const dt = Math.min(64, now - tPrev); tPrev = now; if (!reduceMotion) flowT += dt / 1000;
    if (fly) {
      const k = Math.min(1, (now - fly.t0) / fly.ms), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      const lz = Math.exp(Math.log(fly.z0) + (Math.log(fly.z) - Math.log(fly.z0)) * e);
      cam.x = fly.x0 + (fly.x - fly.x0) * e; cam.y = fly.y0 + (fly.y - fly.y0) * e; cam.z = lz; if (k >= 1) fly = null;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#cfc4a6'; ctx.fillRect(0, 0, vw, vh);
    const z = cam.z, ox = vw / 2 - cam.x * z, oy = vh / 2 - cam.y * z;
    ctx.imageSmoothingEnabled = z < 1; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(terrain, ox, oy, WW * z, WH * z);
    if (season === 'winter' && C.night) {
      ctx.fillStyle = 'rgba(10,12,40,.68)'; ctx.fillRect(0, 0, vw, vh);
      ctx.imageSmoothingEnabled = false; ctx.globalCompositeOperation = 'lighter'; ctx.drawImage(nightCv, ox, oy, WW * z, WH * z); ctx.globalCompositeOperation = 'source-over';
    } else if (season === 'winter') { ctx.imageSmoothingEnabled = false; ctx.drawImage(snowCv, ox, oy, WW * z, WH * z); }
    if (on.rain) { ctx.imageSmoothingEnabled = false; ctx.globalAlpha = .88; ctx.drawImage(rainCv, ox, oy, WW * z, WH * z); ctx.globalAlpha = 1; }

    ctx.setTransform(dpr * z, 0, 0, dpr * z, dpr * ox, dpr * oy);     // world space
    ctx.lineJoin = ctx.lineCap = 'round';

    if (on.ground) {
      ctx.fillStyle = 'rgba(28,36,70,.30)'; ctx.fillRect(-WW, -WH, WW * 3, WH * 3);
      ctx.setLineDash([lw(3), lw(4)]); ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = lw(1);
      for (const b of basins) { ringsPath(b.rings); ctx.stroke(); }
      ctx.setLineDash([]);
      for (const a of amas) {
        const ina = areaAlt(a.name);
        const as = C.areaStyle ? C.areaStyle(a.name, a.k) : null;
        ringsPath(a.rings); ctx.fillStyle = as ? as.fill : ina ? 'rgba(120,200,255,.28)' : 'rgba(70,150,255,.42)'; ctx.fill();
        ctx.strokeStyle = as ? as.stroke : ina ? '#bfe4ff' : '#ffffff'; ctx.lineWidth = lw(2.2); if (ina) ctx.setLineDash([lw(6), lw(4)]); ctx.stroke(); ctx.setLineDash([]);
      }
    }
    if (on.tribal) {
      for (const t of tribal) { ringsPath(t.rings); ctx.fillStyle = 'rgba(190,90,40,.20)'; ctx.fill(); ctx.strokeStyle = '#8a3a14'; ctx.lineWidth = lw(1.6); ctx.setLineDash([lw(5), lw(3)]); ctx.stroke(); }
      ctx.setLineDash([]);
    }
    // borders
    if (z > .5) { ctx.strokeStyle = 'rgba(43,36,48,.35)'; ctx.lineWidth = lw(1); ctx.setLineDash([lw(2), lw(4)]); for (const l of D.countyLines) { path(l.map(v => v * T)); ctx.stroke(); } ctx.setLineDash([]); }
    ctx.strokeStyle = 'rgba(43,36,48,.5)'; ctx.lineWidth = lw(1.2); for (const l of borderLines) { path(l); ctx.stroke(); }
    ctx.strokeStyle = '#2b2430'; ctx.lineWidth = lw(2.6); for (const o of outlines) { path(o); ctx.closePath(); ctx.stroke(); }

    // rivers: dark casing, blue body, lighter moving dashes = direction of flow
    if (on.rivers) {
      for (const r of rivers) {
        if (r.minor && z < .35) continue;
        const sel = selected && selected.type === 'river' && selected.ref === r.name;
        path(r.pts);
        if (r.dry) {
          ctx.strokeStyle = sel ? '#fff' : 'rgba(238,222,178,.9)'; ctx.lineWidth = lw(r.minor ? 2 : 4.5); ctx.stroke(); ctx.strokeStyle = 'rgba(122,82,44,.95)'; ctx.lineWidth = lw(r.minor ? 1.2 : 1.8); ctx.setLineDash([lw(.5), lw(5)]); ctx.stroke(); ctx.setLineDash([]);
        } else {
          const w = r.w;
          ctx.strokeStyle = sel ? '#fff' : '#1d4f8f'; ctx.lineWidth = lw(w + (sel ? 3.4 : 1.8 * (C.riverScale || 1))); ctx.stroke();
          ctx.strokeStyle = '#3f8fe0'; ctx.lineWidth = lw(w); ctx.stroke();
          if (z > .3 || w > 3) {
            ctx.strokeStyle = 'rgba(210,236,255,.9)'; ctx.lineWidth = lw(Math.max(1, w * .4));
            const d = lw(5 + w); ctx.setLineDash([d, d * 2.2]); ctx.lineDashOffset = -flowT * lw(14 + w * 2); ctx.stroke(); ctx.setLineDash([]);
          }
        }
      }
    }
    if (on.canals) {
      for (const c of canals) {
        const cap = MAJOR.has(c.k);
        if (!cap && z < .6) continue;
        const sel = selected && selected.type === 'canal' && (selected.ref === c.k || selected.ref === c.name);
        const w = (C.canalWidths || {})[c.k] || (cap ? (c.k === 'cap' ? 3.2 * capScale + .6 : 1.6) : c.k === 'srp' ? 1.5 : 1.2);
        path(c.pts);
        ctx.strokeStyle = sel ? '#fff' : cap ? '#2b2430' : '#27508a'; ctx.lineWidth = lw(w + (sel ? 3.6 : cap ? 2.2 : 1.2)); ctx.stroke();
        ctx.strokeStyle = cap ? '#35c7d6' : '#6fb8e8'; ctx.lineWidth = lw(w); ctx.stroke();
        if (cap || z > 1) { ctx.strokeStyle = '#eaffff'; ctx.lineWidth = lw(Math.max(.8, w * .4)); const d = lw(4); ctx.setLineDash([d, d * 2.5]); ctx.lineDashOffset = -flowT * lw(cap ? 22 * (capScale * .7 + .3) : 12); ctx.stroke(); ctx.setLineDash([]); }
      }
    }
    for (const k of netOrder) {
      const st = LS[k] || {}; if (!on[st.layer] || z < (st.minZ || 0)) continue;
      ctx.beginPath(); for (const l of netGroups[k]) { const q = l.pts; ctx.moveTo(q[0], q[1]); for (let i = 2; i < q.length; i += 2) ctx.lineTo(q[i], q[i + 1]); }
      const w = st.w || 1.4;
      if (st.casing !== false) { ctx.strokeStyle = st.casing || '#2b2430'; ctx.lineWidth = lw(w + 1.5); ctx.stroke(); }
      ctx.strokeStyle = st.color || '#f2c230'; ctx.lineWidth = lw(w); if (st.dash) ctx.setLineDash(st.dash.map(lw)); ctx.stroke(); ctx.setLineDash([]);
    }
    if (selected && selected.type === 'line') { path(selected.ref.pts); ctx.strokeStyle = '#fff'; ctx.lineWidth = lw((selected.ref.st.w || 1.4) + 3.4); ctx.stroke(); ctx.strokeStyle = selected.ref.st.color || '#f2c230'; ctx.lineWidth = lw(selected.ref.st.w || 1.4); ctx.stroke(); }
    // selection outlines for polygons
    if (selected && (selected.type === 'ama' || selected.type === 'tribal' || selected.type === 'basin')) {
      const pulse = 1 + .3 * Math.sin(now / 250);
      ringsPath(selected.poly.rings); ctx.strokeStyle = '#ffe04a'; ctx.lineWidth = lw(3 * pulse); ctx.stroke();
    }
    if (on.golf && z < 1.5) { ctx.fillStyle = '#19a34a'; const s = lw(z < .5 ? 2.2 : 3); for (const g of golf) { ctx.fillRect(g.x - s / 2, g.y - s / 2, s, s); } ctx.strokeStyle = '#0b4d22'; ctx.lineWidth = lw(.6); if (z > .5) for (const g of golf) ctx.strokeRect(g.x - s / 2, g.y - s / 2, s, s); }

    // ---- screen space: icons + labels -------------------------------------
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.imageSmoothingEnabled = false;
    const boxes = [];
    const place = (x0, y0, x1, y1) => { for (const b of boxes) if (x0 < b[2] && x1 > b[0] && y0 < b[3] && y1 > b[1]) return false; boxes.push([x0, y0, x1, y1]); return true; };
    if (on.golf && z >= 1.5) { const s = sprite('golf'), k = 2; for (const g of golf) { const [sx, sy] = w2s(g.x, g.y); if (sx < -20 || sy < -20 || sx > vw + 20 || sy > vh + 20) continue; ctx.drawImage(s, Math.round(sx - s.width * k / 2), Math.round(sy - s.height * k + 4), s.width * k, s.height * k); } }
    const k = iconScale();
    if (on.emit) {   // one translucent puff per plant, area in proportion to its yearly CO2
      const es = (C.emitScale || 15) * Math.max(.75, Math.pow(z, .5));
      for (const p of plants) { if (!p.co2 || p.s !== 'op') continue; const [sx, sy] = w2s(p.x, p.y), r = Math.sqrt(p.co2 / 1e6) * es; if (r < 1.2 || sx < -r || sy < -r || sx > vw + r || sy > vh + r) continue; ctx.beginPath(); ctx.arc(sx, sy - 4, r, 0, 6.2832); ctx.fillStyle = 'rgba(58,48,62,.46)'; ctx.fill(); ctx.strokeStyle = 'rgba(30,24,34,.75)'; ctx.lineWidth = 1.5; ctx.stroke(); }
    }
    for (const p of plants) {
      p._s = null; if (p.feat || !on[plantLayer(p)]) continue;
      if (z < (C.plantMinZ ? C.plantMinZ(p) : p.mw >= 400 ? 0 : p.mw >= 100 ? .4 : p.mw >= 20 ? .75 : 1.15)) continue;
      const [sx, sy] = w2s(p.x, p.y); if (sx < -30 || sy < -30 || sx > vw + 30 || sy > vh + 30) continue;
      const s = sprite(C.plantIcon(p)), kk = C.plantSize ? C.plantSize(p, z, k) : p.mw >= 400 ? k : p.mw >= 60 || z > 1.6 ? 2 : 1, w = s.width * kk, h = s.height * kk;
      const isSel = selected && selected.ref === p, isHov = hover && hover.ref === p;
      if (isSel || isHov) { ctx.fillStyle = isSel ? '#ffe04a' : 'rgba(255,255,255,.85)'; ctx.fillRect(Math.round(sx - w / 2 - 3), Math.round(sy - h / 2 - 3), w + 6, h + 6); ctx.strokeStyle = '#2b2430'; ctx.lineWidth = 2; ctx.strokeRect(Math.round(sx - w / 2 - 3), Math.round(sy - h / 2 - 3), w + 6, h + 6); }
      ctx.globalAlpha = C.plantAlpha ? C.plantAlpha(p, season) : 1; ctx.drawImage(s, Math.round(sx - w / 2), Math.round(sy - h / 2), w, h); ctx.globalAlpha = 1;
      p._s = [sx, sy, w / 2 + 4, h / 2 + 4];
    }
    const vis = feats.filter(featVisible).sort((a, b) => a.y - b.y);
    for (const f of vis) {
      const [sx, sy] = w2s(f.x, f.y); f._s = null;
      if (sx < -40 || sy < -40 || sx > vw + 40 || sy > vh + 40) continue;
      const s = sprite(f.icon || KIND[f.kind][1]), w = s.width * k, h = s.height * k;
      const isSel = selected && selected.ref === f, isHov = hover && hover.ref === f;
      if (isSel || isHov) { ctx.fillStyle = isSel ? '#ffe04a' : 'rgba(255,255,255,.85)'; const p = isSel ? 4 + 1.5 * Math.sin(now / 200) : 3; ctx.fillRect(Math.round(sx - w / 2 - p), Math.round(sy - h / 2 - p), w + p * 2, h + p * 2); ctx.strokeStyle = '#2b2430'; ctx.lineWidth = 2; ctx.strokeRect(Math.round(sx - w / 2 - p), Math.round(sy - h / 2 - p), w + p * 2, h + p * 2); }
      else { ctx.fillStyle = 'rgba(43,36,48,.35)'; ctx.fillRect(Math.round(sx - w / 2) + 2, Math.round(sy + h / 2) - 1, w, 3); }
      if (C.plantAlpha && f.plant && plantRaw[f.plant]) ctx.globalAlpha = C.plantAlpha(plantRaw[f.plant], season);
      ctx.drawImage(s, Math.round(sx - w / 2), Math.round(sy - h / 2), w, h); ctx.globalAlpha = 1;
      f._s = [sx, sy, w / 2 + 5, h / 2 + 5]; boxes.push([sx - w / 2, sy - h / 2, sx + w / 2, sy + h / 2]);
    }
    // labels (greedy, most important first)
    const lab = vis.filter(f => f._s && (f.tier === 1 || z > .55 || (selected && selected.ref === f))).sort((a, b) => a.tier - b.tier);
    for (const f of lab) {
      const size = f.tier === 1 && z > .3 ? 12 : 10, txt = (f.short || f.name).toUpperCase();
      ctx.font = `${size}px Silkscreen, ui-monospace, monospace`; const tw = ctx.measureText(txt).width;
      const [sx, sy, , hh] = f._s, ly = sy + hh + 5;
      if (place(sx - tw / 2 - 2, ly - 7, sx + tw / 2 + 2, ly + 7) || (selected && selected.ref === f)) label(txt, sx, ly, size, f.layer === 'cities' ? '#fff' : '#ffeeb0');
    }
    if (z > 1.25) for (const p of plants) { if (!p._s || p.mw < (z > 2.2 ? 0 : 20)) continue; const txt = p.n.toUpperCase(); ctx.font = '10px Silkscreen, ui-monospace, monospace'; const tw = ctx.measureText(txt).width, ly = p._s[1] + p._s[3] + 4; if (place(p._s[0] - tw / 2 - 2, ly - 7, p._s[0] + tw / 2 + 2, ly + 7)) label(txt, p._s[0], ly, 10, '#ffeeb0'); }
    if (on.emit) for (const p of plants) { if (!p.co2 || p.co2 < (C.emitLabelMin || 1e6) || p.s !== 'op') continue; const [sx, sy] = w2s(p.x, p.y); if (sx < 0 || sy < 0 || sx > vw || sy > vh) continue; label((p.co2 / 1e6).toFixed(1) + 'M TONS', sx, sy - 10 - Math.sqrt(p.co2 / 1e6) * (C.emitScale || 15) * Math.max(.75, Math.pow(z, .5)), 10, '#fff', 'center', '#3a303e'); }
    if (on.ground) for (const a of amas) { const [sx, sy] = w2s(a.c[0], a.c[1]); if (z > (a.minZ || C.areaMinZ || .2)) label((a.short || a.name).toUpperCase(), sx, sy, z > .5 ? 12 : 10, '#dff1ff', 'center', '#16305c'); }
    if (on.tribal && z > .28) for (const t of tribal) { if ((t.bbox[2] - t.bbox[0]) * z < 70) continue; const [sx, sy] = w2s(t.c[0], t.c[1]); label(t.name.toUpperCase(), sx, sy, 10, '#ffe2cf', 'center', '#5a2408'); }
    if (on.rivers && z > .3) for (const rl of C.riverLabels || []) { const [wx, wy] = G.ll2w(rl[1], rl[2]); const [sx, sy] = w2s(wx, wy); if (z < (rl[3] || 0)) continue; ctx.save(); ctx.translate(sx, sy); ctx.rotate((rl[4] || 0) * Math.PI / 180); label(rl[0], 0, 0, 10, '#d8ecff', 'center', '#123c70'); ctx.restore(); }
    if (C.stateLabels) for (const s of D.states) { const [sx, sy] = w2s(s.c[0] * T, s.c[1] * T); ctx.globalAlpha = s.cov ? .95 : .55; label(s.n.toUpperCase(), sx, sy - (s.cov ? 26 : 0), s.cov ? (z > .3 ? 14 : 12) : 10, s.cov ? '#fff' : '#f6efdc', 'center', s.cov ? '#2b2430' : '#6a6070'); ctx.globalAlpha = 1; }
    for (const n of C.neighbors || []) { const [wx, wy] = G.ll2w(n[1], n[2]); const [sx, sy] = w2s(wx, wy); ctx.globalAlpha = .6; ctx.save(); ctx.translate(sx, sy); ctx.rotate((n[3] || 0) * Math.PI / 180); label(n[0], 0, 0, z > .4 ? 14 : 11, '#f6efdc', 'center', '#6a6070'); ctx.restore(); ctx.globalAlpha = 1; }
    dirty = false;
  }
  const outlines = (D.outlines || [D.outline]).map(o => o.map(v => v * T)), borderLines = D.borders.map(l => l.map(v => v * T));
  function loop(now) { draw(now); requestAnimationFrame(loop); }

  // ------------------------------------------------------------------ hit testing
  let slop = 0; // extra tap tolerance for fingers
  function hit(sx, sy) {
    const [wx, wy] = s2w(sx, sy), z = cam.z;
    let best = null, bd = 1e9;
    for (const f of feats) if (f._s && featVisible(f)) { const dx = Math.abs(sx - f._s[0]), dy = Math.abs(sy - f._s[1]); if (dx < f._s[2] + slop && dy < f._s[3] + slop && dx + dy < bd) { bd = dx + dy; best = f; } }
    if (best) return { type: 'feature', ref: best, name: best.name, sub: KIND[best.kind][2] };
    if (on.golf) { for (const g of golf) { const d = Math.hypot(g.x - wx, g.y - wy) * z; if (d < 7 + slop && d < bd) { bd = d; best = g; } } if (best) return { type: 'golf', ref: best, name: best.name || 'Golf course', sub: 'Golf course' }; }
    const tol = (7 + slop) / z;
    best = null; bd = 1e9;
    for (const p of plants) if (p._s) { const dx = Math.abs(sx - p._s[0]), dy = Math.abs(sy - p._s[1]); if (dx < p._s[2] + slop && dy < p._s[3] + slop && dx + dy < bd) { bd = dx + dy; best = p; } }
    if (best) return { type: 'plant', ref: best, name: best.n, sub: C.plantSub ? C.plantSub(best) : 'Power plant' };
    for (let gi = netOrder.length - 1; gi >= 0; gi--) { const st = LS[netOrder[gi]] || {}; if (!on[st.layer] || z < (st.minZ || 0)) continue; for (const l of netGroups[netOrder[gi]]) { if (wx < l.bbox[0] - tol || wx > l.bbox[2] + tol || wy < l.bbox[1] - tol || wy > l.bbox[3] + tol) continue; if (distToLine(l.pts, wx, wy) < tol) return { type: 'line', ref: l, name: C.lineName ? C.lineName(l) : l.n || st.label, sub: st.label || '' }; } }
    if (on.canals) for (const c of canals) { if (!MAJOR.has(c.k) && z < .6) continue; if (distToLine(c.pts, wx, wy) < tol) return { type: 'canal', ref: c.k === 'cap2' ? 'cap' : (c.k === 'other' || C.canals[c.name]) ? c.name : c.k, canal: c, name: c.k.startsWith('cap') ? 'Central Arizona Project canal' : c.name, sub: c.k === 'srp' ? 'Salt River Project canal' : (C.canalSub || {})[c.k] || 'Canal' }; }
    if (on.reservoirs || on.rivers) for (const l of lakes) if (inRing(l.pts, wx, wy)) { const f = feats.find(f => f.lake === l.name); if (f) return { type: 'feature', ref: f, name: f.name, sub: 'Reservoir' }; }
    if (on.rivers) for (const r of rivers) { if (r.minor && z < .35) continue; if (distToLine(r.pts, wx, wy) < tol + r.w / 2 / z) return { type: 'river', ref: r.name, river: r, name: riverName(r.name), sub: r.dry ? 'Usually dry here' : 'River' }; }
    if (on.ground) for (const a of amas) if (inPoly(a, wx, wy)) return { type: 'ama', ref: a.name, poly: a, name: a.name, sub: areaKind(a.name) };
    if (on.tribal) for (const t of tribal) if (inPoly(t, wx, wy)) return { type: 'tribal', ref: t.name, poly: t, name: t.name, sub: 'Tribal land' };
    const tx = Math.floor(wx / T), ty = Math.floor(wy / T), tile = G.tile(tx, ty);
    if (!tile) return null;
    // land-cover driven: fields -> nearest farm region, rooftops -> nearest city
    const near = (kinds, maxKm) => { let b = null, d0 = maxKm / KM_PER_TILE * T; for (const f of feats) if (kinds.includes(f.kind)) { const d = Math.hypot(f.x - wx, f.y - wy); if (d < d0) { d0 = d; b = f; } } return b; };
    // a field only belongs to a farm region in the same groundwater area (so Chandler's fields are not "Pinal")
    const amaOf = (x, y) => { const a = amas.find(a => inPoly(a, x, y)); return a ? a.name : ''; };
    if (on.farms && tile.crop > .12) {
      const here = amaOf(wx, wy), f = near(['farm', 'dairy'], C.farmRadiusKm || 70);
      if (f && (f._ama === undefined ? (f._ama = amaOf(f.x, f.y)) : f._ama) === here) return { type: 'feature', ref: f, name: f.name, sub: C.fieldSub || 'Irrigated fields', soft: true };
      if (tile.built <= .12) return { type: 'spot', tx, ty, tile, wx, wy, name: 'Farm fields', sub: here || 'What\'s here?' };
    }
    if (on.cities && tile.built > .12) { const f = near(['city', 'town'], 22); if (f) return { type: 'feature', ref: f, name: 'Near ' + f.name, sub: 'Built-up area', soft: true }; }
    if (C.stateCards && tile.st) { const s = D.states[tile.st - 1]; return { type: 'state', ref: s.id, name: s.n, sub: C.stateCards[s.id] && C.stateCards[s.id].go ? (C.stateHint || 'Click for its water story') : 'Coming soon' }; }
    return { type: 'spot', tx, ty, tile, wx, wy, name: tile.inAZ && C.spot ? 'What\'s here?' : '', sub: '' };
  }

  // ------------------------------------------------------------------ panel rendering
  const body = $('#panelBody'), panel = $('#panel');
  const srcs = list => list && list.length ? `<div class="srcs">Sources: ${list.map(s => `<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(' · ')}</div>` : '';
  const stats = list => list && list.length ? `<div class="statgrid">${list.map(s => `<div class="stat${s[2] ? ' wide' : ''}"><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join('')}</div>` : '';
  const head = (kindLabel, icon, title) => `<button class="back" data-act="home">&larr; Overview</button><div class="kind" data-icon="${icon}">${esc(kindLabel)}</div><h2>${esc(title)}</h2>`;
  function setPanel(html) {
    body.innerHTML = html; body.scrollTop = 0;
    body.querySelectorAll('[data-icon]').forEach(el => el.prepend(iconEl(el.dataset.icon)));
    if (panel.classList.contains('min')) panel.classList.remove('min');
  }
  function gauge(pct, cap) { return `<div class="gauge"><i style="width:${Math.max(1, Math.min(100, pct))}%"></i><em>${Math.round(pct)}% full</em></div><div class="gcap">${cap}</div>`; }

  function shortageWidget() {
    const S = C.shortage; if (!S) return '';
    return `<h3>Try it: drain Lake Mead</h3>
      <p>Drag the lake level. Under the rules in force through 2026, the lower Mead falls on January 1, the more Colorado River water Arizona gives up.</p>
      <input type="range" id="meadSlider" min="${S.min}" max="${S.max}" step="1" value="${S.current}" aria-label="Lake Mead elevation in feet">
      <div id="meadOut"></div>`;
  }
  function updateShortage() {
    const el = $('#meadSlider'); if (!el) return;
    const S = C.shortage, ft = +el.value, tier = S.tiers.find(t => ft >= t.above) || S.tiers[S.tiers.length - 1];
    const full = S.entitlement, cut = tier.af, pctFull = Math.max(0, Math.min(100, (ft - S.dead) / (S.full - S.dead) * 100));
    capScale = Math.max(.12, 1 - cut / S.capNormal);
    $('#meadOut').innerHTML = `<div class="tier"><b class="px">${fmt(ft)} ft &middot; ${esc(tier.name)}</b><br>${tier.af ? `Arizona gives up <b>${fmt(cut)} AF</b> a year, ${Math.round(cut / full * 100)}% of its ${(full / 1e6).toFixed(1)} million AF share.` : 'No required cut for Arizona.'} ${esc(tier.note || '')}</div>
      <div class="bars">
        <div class="bar"><span>AZ still gets</span><i style="width:${(full - cut) / full * 100}%;--c:var(--c-colorado)"></i><span>${((full - cut) / 1e6).toFixed(2)}M</span></div>
        <div class="bar"><span>AZ cut</span><i class="cut" style="width:${Math.max(.5, cut / full * 100)}%"></i><span>${(cut / 1e6).toFixed(2)}M</span></div>
      </div>
      <div class="gcap">${ft <= S.powerPool ? '<b>Below minimum power pool:</b> Hoover Dam can no longer generate electricity. ' : ''}${ft <= S.dead + 1 ? '<b>Dead pool:</b> water can no longer flow past the dam. ' : ''}Watch the CAP canal on the map thin out: nearly all of the cut lands on the Central Arizona Project.</div>${S.after ? `<div class="note hot">${S.after}</div>` : ''}`;
  }

  function sparkAMA(name) {
    const rows = D.amaHist[name]; if (!rows || !rows.length) return '';
    const Wd = 316, H = 150, m = { l: 34, r: 78, t: 8, b: 20 }, x = y => m.l + (y - rows[0][0]) / (rows[rows.length - 1][0] - rows[0][0]) * (Wd - m.l - m.r);
    const max = 1.4e6, yy = v => H - m.b - v / max * (H - m.t - m.b);
    const series = [['Cities', 1, 'var(--c-muni)'], ['Farms', 3, 'var(--c-ag)'], ['Tribal', 4, 'var(--c-reclaimed)'], ['Industry', 2, 'var(--c-ind)']];
    let s = `<svg class="spark" viewBox="0 0 ${Wd} ${H}" role="img" aria-label="Water demand in the ${esc(name)} by sector, ${rows[0][0]} to ${rows[rows.length - 1][0]}">`;
    for (const g of [0, .5e6, 1e6]) s += `<line x1="${m.l}" x2="${Wd - m.r}" y1="${yy(g)}" y2="${yy(g)}" stroke="#dccfa9"/><text x="${m.l - 4}" y="${yy(g) + 4}" text-anchor="end">${g / 1e6}M</text>`;
    const ly = {}, ends = series.map(([lab, i]) => [lab, yy(rows[rows.length - 1][i])]).sort((p, q) => p[1] - q[1]);
    ends.forEach((e, k) => { if (k && e[1] < ends[k - 1][1] + 13) e[1] = ends[k - 1][1] + 13; ly[e[0]] = e[1]; });   // keep end labels from colliding
    for (const [lab, i, col] of series) {
      s += `<polyline fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round" points="${rows.map(r => x(r[0]).toFixed(1) + ',' + yy(r[i]).toFixed(1)).join(' ')}"><title>${lab}: ${fmt(rows[0][i])} AF in ${rows[0][0]}, ${fmt(rows[rows.length - 1][i])} AF in ${rows[rows.length - 1][0]}</title></polyline>`;
      const last = rows[rows.length - 1]; s += `<circle cx="${x(last[0])}" cy="${yy(last[i])}" r="3.5" fill="${col}" stroke="#f6efdc" stroke-width="1.5"/><text x="${x(last[0]) + 7}" y="${ly[lab] + 4}" style="fill:#2b2430">${lab}</text>`;
    }
    s += `<text x="${m.l}" y="${H - 5}">${rows[0][0]}</text><text x="${Wd - m.r}" y="${H - 5}" text-anchor="end">${rows[rows.length - 1][0]}</text></svg>`;
    return `<h3>Water use across the ${esc(name)} (AF/yr)</h3>${s}<div class="gcap">In ${rows[0][0]} farms used about twice what cities did. They crossed around 2000. Data: ADWR via ASU Kyl Center.</div>`;
  }

  function showFeature(f, opts = {}) {
    selected = { type: 'feature', ref: f };
    if (!on[f.layer]) setLayer(f.layer, true);
    let h = head(f.kindLabel || KIND[f.kind][2], f.icon || KIND[f.kind][1], f.name);
    if (f.lede) h += `<p class="lede">${f.lede}</p>`;
    if (f.pct !== undefined) h += gauge(f.pct, f.pctNote || '');
    h += stats(f.stats);
    if (f.plant && C.plantExtra && plantRaw[f.plant]) h += C.plantExtra(plantRaw[f.plant]);
    if (f.mix) h += `<h3>Where its water comes from</h3><div class="bars">${f.mix.map(m => `<div class="bar" style="grid-template-columns:128px 1fr 40px"><span>${esc(m[0])}</span><i style="width:${m[1]}%;--c:${m[2]}"></i><span>${m[1]}%</span></div>`).join('')}</div><div class="gcap">${esc(f.mixNote || '')}</div>`;
    if (f.body) h += f.body;
    if (f.widget === 'shortage') h += shortageWidget();
    if (f.ama) h += sparkAMA(f.ama);
    h += srcs(f.sources);
    setPanel(h); updateShortage();
    if (opts.fly !== false) flyTo(f.x, f.y, Math.max(cam.z, opts.z || f.zoom || .9));
  }
  function showGeneric(card, kindLabel, icon, title) {
    let h = head(kindLabel, icon, title);
    if (card) { if (card.lede) h += `<p class="lede">${card.lede}</p>`; h += stats(card.stats) + (card.body || '') + (card.ama ? sparkAMA(card.ama) : '') + srcs(card.sources); }
    setPanel(h);
  }
  function showSpot(hh) {
    const t = hh.tile, [lon, lat] = G.t2ll(hh.wx / T, hh.wy / T);
    const basin = basins.find(b => inPoly(b, hh.wx, hh.wy)), ama = amas.find(a => inPoly(a, hh.wx, hh.wy)), tr = tribal.find(a => inPoly(a, hh.wx, hh.wy));
    const cover = [[C.spot.crop || 'irrigated crops', t.crop], ['buildings & pavement', t.built], ['trees', t.tree], ['open water', t.water], ['bare ground', t.bare]].filter(c => c[1] > .04).sort((a, b) => b[1] - a[1]);
    const rest = 1 - cover.reduce((a, c) => a + c[1], 0);
    let h = head('This spot', 'info', `${Math.abs(lat).toFixed(2)}°N, ${Math.abs(lon).toFixed(2)}°W`);
    if (C.spot.stats) h += stats(C.spot.stats(t, lon, lat, hh)); else h += stats([[fmt(Math.round(t.elevM * 3.281 / 100) * 100) + ' ft', `elevation (${KM_PER_TILE} km average)`], [t.precipIn ? t.precipIn.toFixed(1) + ' in' : 'n/a', 'rain + snow in a normal year'],
      [cover.length ? cover.map(c => `${Math.round(c[1] * 100)}% ${c[0]}`).join(', ') + (rest > .05 ? `, rest ${C.spot.rest || 'desert/rangeland'}` : '') : (C.spot.restAlone || 'Desert or rangeland'), `what satellites see on this ${KM_PER_TILE} km square`, 1]]);
    if (t.precipIn && C.spot.rain) h += `<p>${C.spot.rain(t.precipIn)}</p>`;
    if (t.inAZ) {
      h += `<h3>${C.spot.rulesTitle || 'Groundwater rules here'}</h3>`;
      if (ama) h += `<p>${C.spot.inside ? C.spot.inside(esc(ama.name)) : `Inside the <b>${esc(ama.name)}</b>.`} ${C.spot.area ? C.spot.area(ama.name) : / INA$/.test(ama.name) ? C.spot.ina : C.spot.ama}</p><p><button class="btn" data-ama="${esc(ama.name)}">${C.spot.aboutBtn ? C.spot.aboutBtn(esc(ama.name)) : `About the ${esc(ama.name)}`}</button></p>`;
      else h += `<p>${basin ? (C.spot.basin ? C.spot.basin(esc(basin.name)) : `This is the <b>${esc(basin.name)}</b> groundwater basin. `) : ''}${C.spot.none}</p>`;
      if (tr) h += `<p>This is also <b>${esc(tr.name)}</b> tribal land. ${C.spot.tribal}</p>`;
    }
    h += srcs(C.spot.sources);
    selected = { type: 'spot' }; setPanel(h);
  }
  function select(hh) {
    if (!hh) return;
    if (hh.type === 'feature') return showFeature(hh.ref, { fly: !hh.soft });
    if (hh.type === 'spot') { if (hh.tile.inAZ && C.spot) showSpot(hh); return; }
    selected = hh;
    if (hh.type === 'plant') { const c = C.plantCard(hh.ref); showGeneric(c, c.kind, c.icon, c.title || hh.ref.n); return; }
    if (hh.type === 'line') { const c = C.lineCard(hh.ref); showGeneric(c, c.kind, c.icon, c.title || hh.name); return; }
    if (hh.type === 'state') { const c = C.stateCards[hh.ref] || C.stateCards._default; showGeneric(c, c.go ? 'State' : 'Coming soon', 'info', hh.name); return; }
    if (hh.type === 'river') { const c = C.rivers[hh.ref]; showGeneric(c || C.rivers._default, hh.river.dry ? 'Dry riverbed' : 'River', 'river', hh.name); }
    else if (hh.type === 'canal') { const c = C.canals[hh.ref] || C.canals._default; showGeneric(c, c.kind || 'Canal', hh.ref === 'cap' ? 'pump' : c.icon || 'canal', c.title || hh.name); if (hh.ref === 'cap') { const el = document.createElement('div'); el.innerHTML = `<p><button class="btn" data-feat="mead">Try the Lake Mead shortage slider</button></p>`; body.insertBefore(el, body.querySelector('.srcs')); } }
    else if (hh.type === 'ama') showGeneric(C.amas[hh.ref] || (hh.poly && hh.poly.k && C.amas['_' + hh.poly.k]) || C.amas[/ INA$/.test(hh.ref) ? '_ina' : '_default'], hh.sub, 'aquifer', hh.name);
    else if (hh.type === 'tribal') showGeneric(C.tribes[hh.ref] || C.tribes._default, 'Tribal land', 'tribe', hh.name);
    else if (hh.type === 'golf') showGeneric(C.golfCard, 'Golf course', 'golf', hh.name);
  }

  // overview: the statewide budget as a droplet pictogram
  let budgetMode = 'sources';
  function showHome() {
    selected = null; capScale = 1;
    const B = C.budget, all = B[budgetMode], rows = all.filter(r => !r.tiny), per = B.perDrop;
    let drops = '', n = 0; const tot = Math.round(rows.reduce((a, r) => a + r.af, 0) / per), counts = rows.map(r => Math.floor(r.af / per));
    rows.map((r, i) => [r.af / per - counts[i], i]).sort((a, b) => b[0] - a[0]).slice(0, tot - counts.reduce((a, c) => a + c, 0)).forEach(x => counts[x[1]]++);
    rows.forEach((r, i) => { for (let k = 0; k < counts[i]; k++, n++) drops += `<i class="drop" data-k="${r.id}" style="--c:${r.color}"></i>`; });
    // rows too small for a whole drop get one speck, its area in proportion to a drop
    all.filter(r => r.tiny).forEach(r => { drops += `<i class="drop tiny" data-k="${r.id}" style="--c:${r.color};--s:${Math.sqrt(r.af / per).toFixed(3)}"><b></b></i>`; });
    let h = `<h2>${B.title}</h2><p class="lede">${B.lede}</p>${C.homeTop || ''}
      <div class="seg" role="tablist"><button role="tab" data-mode="sources" class="${budgetMode === 'sources' ? 'on' : ''}">${(B.tabs || [])[0] || 'Where it comes from'}</button><button role="tab" data-mode="uses" class="${budgetMode === 'uses' ? 'on' : ''}">${(B.tabs || [])[1] || 'Where it goes'}</button></div>
      <div class="picto${B.shape ? ' ' + B.shape : ''}" id="picto" role="img" aria-label="${all.map(r => `${r.label}: ${r.tiny ? r.val.replace('&middot;', ',') : r.pct + '%'}`).join('; ')}">${drops}</div>
      <div class="gcap">${B.unitLine || `Each drop = ${fmt(per)} acre-feet a year.`}${B.notesBelow ? '' : ' ' + B.afNote}</div>
      <div id="keys">${all.map(r => `<button class="keyrow${r.tiny ? ' sub' : ''}" data-k="${r.id}" data-layer="${r.layer || ''}" data-feat="${r.feat || ''}" style="--c:${r.color}"><i></i><b>${r.label}</b><span>${r.tiny ? r.val : B.fmtVal ? B.fmtVal(r) : `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)}M AF`}</span></button><div class="gcap" style="margin:0 0 6px 24px">${r.note}</div>`).join('')}</div>
      ${B.notesBelow && B.afNote ? `<div class="gcap units">${B.afNote}</div>` : ''}
      ${B.body}
      <h3>Explore</h3><p style="font-size:13.5px">${C.exploreHint || 'Drag to pan, scroll or pinch to zoom, and click anything: a dam, a field, a canal, or bare desert.'}</p>`;
    if (C.statesNav) h += `<h3>${C.statesNav.title}</h3><div class="chips">${C.statesNav.items.map(s => s[2] ? `<button class="chip go" data-go="${s[0]}">${esc(s[1])} &rarr;</button>` : `<button class="chip" disabled>${esc(s[1])} (soon)</button>`).join('')}</div>`;
    const groups = C.browse;
    for (const g of groups) h += `<h3>${g[0]}</h3><div class="chips">${g[1].map(id => featById[id] ? `<button class="chip" data-feat="${id}">${esc(featById[id].short || featById[id].name)}</button>` : '').join('')}</div>`;
    h += `<h3>About the data</h3>${C.about}`;
    body.innerHTML = h; body.scrollTop = 0;
    const pic = $('#picto');
    const hl = k => { pic.classList.toggle('dim', !!k); pic.querySelectorAll('.drop').forEach(d => d.classList.toggle('hl', d.dataset.k === k)); body.querySelectorAll('.keyrow').forEach(d => d.classList.toggle('hl', d.dataset.k === k)); };
    body.querySelectorAll('.keyrow, .drop').forEach(el => { el.addEventListener('pointerenter', () => hl(el.dataset.k)); el.addEventListener('pointerleave', () => hl(null)); el.addEventListener('focus', () => hl(el.dataset.k)); el.addEventListener('blur', () => hl(null)); });
  }
  body.addEventListener('click', e => {
    const t = e.target.closest('button, a'); if (!t) return;
    if (t.dataset.go) { location.search = '?s=' + t.dataset.go; return; }
    if (t.dataset.act === 'home') { endTourIfAny(); showHome(); }
    else if (t.dataset.mode) { budgetMode = t.dataset.mode; showHome(); }
    else if (t.dataset.ama) { const a = amas.find(a => a.name === t.dataset.ama); if (a) { setLayer('ground', true); select({ type: 'ama', ref: a.name, poly: a, name: a.name, sub: areaKind(a.name) }); } }
    else if (t.dataset.feat && featById[t.dataset.feat]) showFeature(featById[t.dataset.feat]);
    else if (t.classList.contains('keyrow') && t.dataset.layer) { t.dataset.layer.split(',').forEach(l => setLayer(l, true)); }
  });
  body.addEventListener('input', e => { if (e.target.id === 'meadSlider') updateShortage(); });

  // ------------------------------------------------------------------ layers UI
  const layerList = $('#layerList');
  function setLayer(id, v) { on[id] = v; const b = layerList.querySelector(`[data-id="${id}"]`); if (b) b.setAttribute('aria-pressed', v); updateLegend(); }
  LAYERS.forEach(l => {
    const b = document.createElement('button'); b.className = 'layerBtn'; b.dataset.id = l.id; b.setAttribute('aria-pressed', l.on);
    b.append(iconEl(l.icon, 22), document.createTextNode(l.label)); b.onclick = () => setLayer(l.id, !on[l.id]); layerList.append(b);
  });
  document.querySelectorAll('.season button').forEach(b => b.onclick = () => setSeason(b.dataset.season));
  function setSeason(s) { season = s; document.querySelectorAll('.season button').forEach(x => x.classList.toggle('on', x.dataset.season === s)); updateLegend(); }
  $('#layersToggle').onclick = () => { const c = $('#layers').classList.toggle('closed'); $('#layersToggle').setAttribute('aria-expanded', !c); };
  if (compact()) $('#layers').classList.add('closed');
  function updateLegend() {
    const L = $('#legend'); let h = '';
    if (on.rain) h += `<span class="px">Rain + snow per year</span><div class="ramp">${G.RAIN_STOPS.map(s => `<i style="background:rgb(${s[1].map(Math.round)})"></i>`).join('')}</div><div class="ticks">${G.RAIN_STOPS.map(s => `<span>${s[0]}"</span>`).join('')}</div><p>${C.legend.rain}</p>`;
    if (on.ground && C.legend.groundCustom) h += (h ? '<hr>' : '') + C.legend.groundCustom;
    else if (on.ground) h += `${h ? '<hr>' : ''}<span class="px">Groundwater rules</span><div><span class="sw" style="background:#5a96ee"></span>${C.legend.groundA || 'Active Management Area'}</div>${C.legend.groundB === false ? '' : `<div><span class="sw" style="background:#a9d4f5;border-style:dashed"></span>${C.legend.groundB || 'Irrigation Non-Expansion Area'}</div>`}<p>${C.legend.ground}</p>`;
    if (C.legendExtra) h += C.legendExtra(on, season, h);
    if (season === 'winter' && !C.night) h += `${h ? '<hr>' : ''}<span class="px">Winter</span><div><span class="sw" style="background:#fff"></span>Typical snow zone</div><p>${C.legend.snow}</p>`;
    L.hidden = !h; L.innerHTML = h;
  }

  // ------------------------------------------------------------------ tour
  let tourI = -1;
  const tourEl = $('#tour'), tourStart = $('#tourStart');
  function tourGo(i) {
    const S = C.tour; tourI = i; const s = S[i];
    tourEl.hidden = false; tourStart.hidden = true; panel.classList.add('touring');
    $('#tourText').innerHTML = `<h3>${i + 1}. ${s.title}</h3><p>${s.text}</p>`;
    $('#tourDots').innerHTML = S.map((_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('');
    $('#tourPrev').disabled = i === 0; $('#tourNext').textContent = i === S.length - 1 ? 'Finish ✓' : 'Next →';
    if (s.layers) LAYERS.forEach(l => setLayer(l.id, s.layers.includes(l.id)));
    setSeason(s.season || 'summer');
    if (s.select && featById[s.select]) showFeature(featById[s.select], { fly: false }); else if (s.home) showHome();
    if (s.view === 'home') { const hv = homeView(); fly = { x0: cam.x, y0: cam.y, z0: cam.z, x: hv.x, y: hv.y, z: hv.z, t0: performance.now(), ms: reduceMotion ? 1 : 1100 }; }
    else if (s.box) { // fit a lon/lat box [west, south, east, north] into the unobscured part of the viewport
      const [x0, y0] = G.ll2w(s.box[0], s.box[3]), [x1, y1] = G.ll2w(s.box[2], s.box[1]), p = pad();
      const b2 = !compact() ? Math.max(p.b, vh - tourEl.getBoundingClientRect().top + 8) : p.b; // the tour box also covers the bottom of the map
      const z = Math.max(.12, Math.min((vw - p.l - p.r) / (x1 - x0) * .92, (vh - p.t - b2) / (y1 - y0) * .92, s.zoom || 9));
      flyTo((x0 + x1) / 2, (y0 + y1) / 2 + ((b2 - p.b) / 2) / z, z, 1300);
    }
    else { const [x, y] = G.ll2w(s.lon, s.lat); flyTo(x, y, s.zoom * (compact() ? .7 : 1), 1300); } // phones get a wider view of the same place
    if (compact()) {
      panel.classList.remove('min', 'max'); $('#layers').classList.add('closed');
      const el = s.scroll && body.querySelector(s.scroll); if (el) body.scrollTop = el.offsetTop - body.offsetTop - 4;
    }
  }
  // on phones the tour lives at the top of the bottom sheet instead of floating over the map
  function dockTour() { const m = compact(); if (m && tourEl.parentNode !== panel) panel.insertBefore(tourEl, body); else if (!m && tourEl.parentNode === panel) tourStart.parentNode.insertBefore(tourEl, tourStart); }
  dockTour(); addEventListener('resize', dockTour);
  function tourEnd() { tourI = -1; tourEl.hidden = true; tourStart.hidden = false; panel.classList.remove('touring'); LAYERS.forEach(l => setLayer(l.id, l.on)); setSeason('summer'); }
  function endTourIfAny() { if (tourI >= 0) tourEnd(); }
  tourStart.onclick = () => tourGo(0);
  if (!C.tour || !C.tour.length) tourStart.hidden = true;
  $('#tourNext').onclick = () => tourI >= C.tour.length - 1 ? (tourEnd(), showHome(), goHome()) : tourGo(tourI + 1);
  $('#tourPrev').onclick = () => tourI > 0 && tourGo(tourI - 1);
  $('#tourExit').onclick = tourEnd;
  function goHome() { const hv = homeView(); fly = { x0: cam.x, y0: cam.y, z0: cam.z, x: hv.x, y: hv.y, z: hv.z, t0: performance.now(), ms: reduceMotion ? 1 : 800 }; }

  // ------------------------------------------------------------------ input
  const ptrs = new Map(); let dragDist = 0, pinch0 = null;
  const tip = $('#tip');
  cv.addEventListener('pointerdown', e => { userMoved = true; try { cv.setPointerCapture(e.pointerId); } catch (err) {} ptrs.set(e.pointerId, [e.clientX, e.clientY]); dragDist = 0; fly = null; if (ptrs.size === 2) { const p = [...ptrs.values()]; pinch0 = { d: Math.hypot(p[0][0] - p[1][0], p[0][1] - p[1][1]), z: cam.z }; } cv.classList.add('drag'); tip.hidden = true; });
  cv.addEventListener('pointermove', e => {
    const r = cv.getBoundingClientRect(), sx = e.clientX - r.left, sy = e.clientY - r.top;
    if (ptrs.has(e.pointerId)) {
      const p = ptrs.get(e.pointerId), dx = e.clientX - p[0], dy = e.clientY - p[1]; ptrs.set(e.pointerId, [e.clientX, e.clientY]);
      if (ptrs.size === 1) { cam.x -= dx / cam.z; cam.y -= dy / cam.z; dragDist += Math.abs(dx) + Math.abs(dy); clampCam(); }
      else if (ptrs.size === 2 && pinch0) { const q = [...ptrs.values()], d = Math.hypot(q[0][0] - q[1][0], q[0][1] - q[1][1]); const mx = (q[0][0] + q[1][0]) / 2 - r.left, my = (q[0][1] + q[1][1]) / 2 - r.top; zoomAt(mx, my, pinch0.z * d / pinch0.d / cam.z); dragDist += 10; }
      return;
    }
    if (e.pointerType === 'touch') return;
    const h = hit(sx, sy); hover = h && h.type !== 'spot' ? h : null;
    cv.classList.toggle('hot', !!hover);
    if (h && h.name) { tip.hidden = false; tip.style.left = sx + 'px'; tip.style.top = sy + 'px'; tip.innerHTML = `${esc(h.name)}${h.sub ? ` <small>· ${esc(h.sub)}</small>` : ''}`; } else tip.hidden = true;
  });
  const up = e => { const had = ptrs.has(e.pointerId); ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch0 = null; if (!ptrs.size) cv.classList.remove('drag'); const touch = e.pointerType === 'touch'; if (had && dragDist < (touch ? 14 : 6) && e.type === 'pointerup') { const r = cv.getBoundingClientRect(); slop = touch ? 9 : 0; select(hit(e.clientX - r.left, e.clientY - r.top)); slop = 0; } };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('pointerleave', () => { tip.hidden = true; hover = null; });
  cv.addEventListener('wheel', e => { e.preventDefault(); userMoved = true; const r = cv.getBoundingClientRect(); zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * (e.ctrlKey ? .01 : .0016))); }, { passive: false });
  cv.addEventListener('dblclick', e => { const r = cv.getBoundingClientRect(); const [wx, wy] = s2w(e.clientX - r.left, e.clientY - r.top); fly = { x0: cam.x, y0: cam.y, z0: cam.z, x: wx, y: wy, z: Math.min(zMax, cam.z * 2), t0: performance.now(), ms: 350 }; });
  cv.addEventListener('keydown', e => {
    const s = 80 / cam.z, k = e.key;
    if (k === 'ArrowLeft') cam.x -= s; else if (k === 'ArrowRight') cam.x += s; else if (k === 'ArrowUp') cam.y -= s; else if (k === 'ArrowDown') cam.y += s;
    else if (k === '+' || k === '=') zoomAt(vw / 2, vh / 2, 1.3); else if (k === '-' || k === '_') zoomAt(vw / 2, vh / 2, 1 / 1.3); else if (k === '0') goHome(); else return;
    e.preventDefault(); clampCam();
  });
  $('#zin').onclick = () => zoomAt(vw / 2, vh / 2, 1.5); $('#zout').onclick = () => zoomAt(vw / 2, vh / 2, 1 / 1.5); $('#zhome').onclick = () => { goHome(); userMoved = false; };
  // embedded in a blog post: offer a way out to the full-screen page (a framed map is cramped on a phone)
  let framed = false; try { framed = self !== top; } catch (e) { framed = true; }
  if (framed) { $('#zfull').hidden = false; $('#zfull').onclick = () => open(location.href, '_blank', 'noopener'); }
  // bottom sheet: drag the handle to resize (snaps to small / medium / tall); a tap or Enter cycles through the three
  {
    const handle = $('#panelHandle'); let sd = null;
    const sheetState = () => panel.classList.contains('min') ? 0 : panel.classList.contains('max') ? 2 : 1;
    const setSheet = n => { panel.classList.toggle('min', n === 0); panel.classList.toggle('max', n === 2); };
    const cycle = s => setSheet(s === 0 ? 1 : s === 2 ? 0 : 2);
    handle.addEventListener('pointerdown', e => {
      if (sideSheet()) return;
      sd = { y: e.clientY, h: panel.getBoundingClientRect().height, moved: 0, s: sheetState() };
      try { handle.setPointerCapture(e.pointerId); } catch (err) {}
      panel.style.transition = 'none';
    });
    handle.addEventListener('pointermove', e => {
      if (!sd) return; const dy = sd.y - e.clientY; sd.moved = Math.max(sd.moved, Math.abs(dy));
      if (sd.moved > 5) panel.style.height = Math.max(64, Math.min(innerHeight * .9, sd.h + dy)) + 'px';
    });
    const end = e => {
      if (!sd) return; const d = sd, dy = d.y - e.clientY; sd = null; panel.style.transition = '';
      if (d.moved <= 5) { panel.style.height = ''; if (e.type === 'pointerup') cycle(d.s); return; }
      const h = d.h + dy, snaps = [64, innerHeight * (panel.classList.contains('touring') ? .54 : .46), innerHeight * .82];
      let n = 0; snaps.forEach((v, i) => { if (Math.abs(v - h) < Math.abs(snaps[n] - h)) n = i; });
      if (n === d.s && Math.abs(dy) > 36) n = Math.max(0, Math.min(2, d.s + Math.sign(dy)));   // a clear flick moves one step even if it stops short
      setSheet(n); requestAnimationFrame(() => { panel.style.height = ''; });
    };
    handle.addEventListener('pointerup', end); handle.addEventListener('pointercancel', end);
    handle.addEventListener('click', e => { if (e.detail === 0) cycle(sheetState()); });   // keyboard activation only; pointer taps are handled above
  }
  addEventListener('resize', resize);

  function updateScale() {
    const targetPx = 110, km = targetPx / (cam.z * T) * KM_PER_TILE, mi = km / 1.609;
    const nice = [1, 2, 5, 10, 20, 50, 100, 200].reduce((a, b) => Math.abs(b - mi) < Math.abs(a - mi) ? b : a);
    $('#scaleBar').style.width = Math.round(nice * 1.609 / KM_PER_TILE * T * cam.z) + 'px'; $('#scaleTxt').textContent = nice + ' mi';
  }
  setInterval(updateScale, 250);

  // ------------------------------------------------------------------ boot
  if (C.meta) { document.title = C.meta.title; $('#hud h1').textContent = C.meta.h1; $('#hud .title p').textContent = C.meta.tagline; cv.setAttribute('aria-label', C.meta.aria); $('#zhome').title = C.meta.home; $('#zhome').setAttribute('aria-label', C.meta.home); }
  if ($('#navWest') && D.region !== 'west') $('#navWest').hidden = false;
  $('#hudstats').innerHTML = C.hud.map(s => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('');
  resize();
  setTimeout(() => {
    terrain = G.paint(); rainCv = G.paintRain(); snowCv = G.paintSnow();
    if (C.night) {   // city lights: lit pixels where the land cover is built up
      const S = 4; nightCv = document.createElement('canvas'); nightCv.width = D.gw * S; nightCv.height = D.gh * S; const nx = nightCv.getContext('2d');
      for (let ty = 0; ty < D.gh; ty++) for (let tx = 0; tx < D.gw; tx++) { const t = G.tile(tx, ty); if (!t || t.built < .04) continue; const n = Math.min(S * S, Math.ceil(t.built * S * S * 1.25)); let h = (tx * 73856093) ^ (ty * 19349663); for (let i = 0; i < n; i++) { h = (h * 1103515245 + 12345) & 0x7fffffff; const c = h % (S * S); nx.fillStyle = (h >> 8) % 5 ? 'rgba(255,214,120,.9)' : 'rgba(255,244,214,.95)'; nx.fillRect(tx * S + c % S, ty * S + (c / S | 0), 1, 1); } }
    }
    resize();
    showHome(); updateLegend(); $('#loading').remove();
    // arriving from the other map of the same place (#v=x,y,zoom): keep the same view
    const kv = /[#&]v=(-?[\d.]+),(-?[\d.]+),([\d.]+)/.exec(location.hash);
    if (kv) { cam.x = +kv[1]; cam.y = +kv[2]; cam.z = +kv[3]; userMoved = true; clampCam(); dirty = true; }
    requestAnimationFrame(loop);
    window.AZMAP = { cam, flyTo, featById, showFeature, setLayer, setSeason, tourGo, G, select, hit };
  }, 30);
})();
