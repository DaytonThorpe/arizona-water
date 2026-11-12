/* Terrain: decodes the baked grids and paints the pixel-art base map.
   Everything here is driven by real data (elevation, land cover, rainfall);
   only the little sprites (trees, houses, crop rows) are decoration. */
(() => {
  const D = window.MAPDATA, TS = (window.MAPCONTENT || {}).terrain || {};
  const ES = D.elevStep || 16, PS = D.precipStep || .25;
  const GW = D.gw, GH = D.gh, T = 16;
  const dec = s => { const b = atob(s), a = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; };
  const G = {
    GW, GH, T, WW: GW * T, WH: GH * T,
    elev: dec(D.elev), shade: dec(D.shade), lcA: dec(D.lcA), lcB: dec(D.lcB), lcC: dec(D.lcC),
    precip: dec(D.precip), mask: dec(D.mask),
  };
  const [L0, L1, B0, B1] = D.ext;
  G.ll2t = (lon, lat) => [(lon - L0) / (L1 - L0) * GW, (B1 - lat) / (B1 - B0) * GH];
  G.ll2w = (lon, lat) => { const p = G.ll2t(lon, lat); return [p[0] * T, p[1] * T]; };
  G.t2ll = (tx, ty) => [L0 + tx / GW * (L1 - L0), B1 - ty / GH * (B1 - B0)];
  const fr = q => (q / 15) * (q / 15);
  G.tile = (tx, ty) => {
    if (tx < 0 || ty < 0 || tx >= GW || ty >= GH) return null;
    const i = ty * GW + tx;
    return {
      elevM: G.elev[i] * ES, precipIn: G.precip[i] * PS, inAZ: !!G.mask[i], st: G.mask[i], sea: !!(G.lcC[i] & 16), ice: !!(G.lcC[i] & 32),
      crop: fr(G.lcA[i] >> 4), built: fr(G.lcA[i] & 15), tree: fr(G.lcB[i] >> 4), water: fr(G.lcB[i] & 15), bare: fr(G.lcC[i] & 15),
    };
  };
  const hash = (x, y, s) => { let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
  G.hash = hash;
  const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const cl = (v, a, b) => v < a ? a : v > b ? b : v;

  // --- palette ---------------------------------------------------------
  const SAND = [224, 194, 142], SCRUB = [198, 178, 118], GRASS = [164, 168, 98], REDROCK = [204, 138, 92],
    PLAYA = [236, 226, 204], FOREST = [74, 122, 62], ALPINE = [150, 150, 140],
    WATER = [58, 124, 196], WATER_HI = [112, 170, 226], SEA = [44, 98, 168],
    ROAD = [104, 100, 104], LOT = [168, 160, 150], OUT = [222, 214, 196];
  const ROOFS = [[196, 96, 70], [230, 224, 210], [150, 150, 158], [214, 178, 128], [120, 132, 150], [176, 80, 60]];
  const CROPS = [[98, 170, 70], [72, 142, 66], [140, 190, 90], [180, 142, 96], [214, 192, 100], [86, 156, 84]];
  G.colors = { WATER, WATER_HI };

  G.paint = () => {
    const cv = document.createElement('canvas'); cv.width = G.WW; cv.height = G.WH;
    const ctx = cv.getContext('2d');
    const img = ctx.createImageData(G.WW, G.WH);
    const px = new Uint32Array(img.data.buffer);
    const W = G.WW;
    const put = (x, y, c, f) => {
      if (x < 0 || y < 0 || x >= W || y >= G.WH) return;
      f = f === undefined ? 1 : f;
      px[y * W + x] = 0xff000000 | (cl(c[2] * f, 0, 255) << 16) | (cl(c[1] * f, 0, 255) << 8) | cl(c[0] * f, 0, 255);
    };
    const rect = (x, y, w, h, c, f) => { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) put(x + i, y + j, c, f); };
    const lateSprites = [];

    for (let ty = 0; ty < GH; ty++) for (let tx = 0; tx < GW; tx++) {
      const i = ty * GW + tx, t = G.tile(tx, ty), x0 = tx * T, y0 = ty * T;
      const [lon, lat] = G.t2ll(tx + .5, ty + .5);
      const e = t.elevM, inAZ = t.inAZ;
      // base biome colour from rainfall + elevation + land cover
      const dry = cl((13 - (t.precipIn || (e > 1500 ? 14 : 7))) / 9, 0, 1);
      let base = mix(GRASS, SAND, dry);
      base = mix(base, SCRUB, .35);
      const plateau = TS.redrock ? TS.redrock(lon, lat, e, cl) : cl((lat - 34.7) / .6, 0, 1) * cl((e - 1100) / 400, 0, 1) * cl((2300 - e) / 300, 0, 1);
      base = mix(base, REDROCK, plateau * (.35 + .35 * hash(tx >> 2, ty >> 2, 7)));
      base = mix(base, PLAYA, cl(t.bare * 1.3, 0, .9));
      base = mix(base, FOREST, cl(t.tree * 1.15, 0, .92));
      const AL = TS.alpine || 2750; if (e > AL) base = mix(base, ALPINE, cl((e - AL) / 400, 0, .7));
      if (t.ice) base = mix(base, [236, 242, 250], .8);
      const isWater = t.water >= .3;
      const fade = inAZ ? 0 : .5;

      for (let qy = 0; qy < 2; qy++) for (let qx = 0; qx < 2; qx++) {
        const s = G.shade[(ty * 2 + qy) * GW * 2 + tx * 2 + qx] / 255;
        const sf = cl(.5 + s * .7, .62, 1.22);
        for (let py = 0; py < 8; py++) for (let pxx = 0; pxx < 8; pxx++) {
          const X = x0 + qx * 8 + pxx, Y = y0 + qy * 8 + py;
          let c, f;
          if (isWater) {
            const sea = D.region ? t.sea : lat < 31.9 && lon < -114.2;
            c = sea ? SEA : WATER; f = 1;
            if (hash(X >> 1, Y, 3) > .93 && (Y & 3) === 1) c = WATER_HI;
          } else {
            const n = hash(X >> 1, Y >> 1, 1);
            c = base; f = sf * (.965 + n * .07);
            if (n > .965 && t.tree < .3) f *= .86;            // pebbles / shrubs
          }
          if (fade && !(isWater && t.sea)) c = mix(c, OUT, fade);
          put(X, Y, c, f);
        }
      }
      if (isWater || !inAZ && t.built < .05 && t.crop < .1) continue;
      const fo = c => fade ? mix(c, OUT, fade) : c;

      // ---- farms: fields in each 8x8 quadrant -------------------------
      if (t.crop >= .06) {
        const nq = t.crop > .5 ? 4 : t.crop > .3 ? 3 : t.crop > .15 ? 2 : 1;
        const order = [0, 1, 2, 3].sort((a, b) => hash(tx, ty, 20 + a) - hash(tx, ty, 20 + b));
        const pivot = t.crop > .3 && hash(tx, ty, 31) > .55 && (TS.pivot ? TS.pivot(lon, lat) : (lon < -112.9 || lon > -110.3 || lat > 34));
        if (pivot && nq >= 3) {                                // centre-pivot circle
          const c = fo(CROPS[(hash(tx, ty, 32) * 3) | 0]);
          for (let py = 0; py < 16; py++) for (let pxx = 0; pxx < 16; pxx++) {
            const d = Math.hypot(pxx - 7.5, py - 7.5);
            if (d < 7.2) put(x0 + pxx, y0 + py, c, d > 6.2 ? .8 : ((pxx + py) & 3) === 0 ? .9 : 1);
          }
          put(x0 + 7, y0 + 7, [240, 240, 240]);
        } else for (let k = 0; k < nq; k++) {
          const q = order[k], qx = q & 1, qy = q >> 1;
          const ci = (hash(tx * 2 + qx, ty * 2 + qy, 33) * CROPS.length) | 0, c = fo(CROPS[ci]);
          const horiz = hash(tx * 2 + qx, ty * 2 + qy, 34) > .5;
          for (let py = 0; py < 8; py++) for (let pxx = 0; pxx < 8; pxx++) {
            const edge = pxx === 0 || py === 0;
            const row = ((horiz ? py : pxx) & 1) === 0;
            put(x0 + qx * 8 + pxx, y0 + qy * 8 + py, c, edge ? .72 : row ? .9 : 1.03);
          }
        }
      }
      // ---- towns & cities --------------------------------------------
      if (t.built >= .03) {
        const b = t.built;
        if (b > .45) {                                         // dense: street grid + blocks
          for (let py = 0; py < 16; py++) for (let pxx = 0; pxx < 16; pxx++) {
            const road = (pxx & 7) === 0 || (py & 7) === 0;
            put(x0 + pxx, y0 + py, fo(road ? ROAD : LOT), road ? 1 : .95 + hash(x0 + pxx, y0 + py, 4) * .1);
          }
          for (let q = 0; q < 4; q++) {
            const bx = x0 + (q & 1) * 8 + 1, by = y0 + (q >> 1) * 8 + 1;
            const r = hash(tx * 2 + (q & 1), ty * 2 + (q >> 1), 40);
            if (r < .12) { rect(bx + 1, by + 1, 5, 5, fo([110, 160, 84])); continue; }   // park
            const roof = fo(ROOFS[(r * 97 | 0) % ROOFS.length]);
            if (r > .6) { rect(bx, by + 1, 7, 6, roof, .78); rect(bx, by, 7, 6, roof); }
            else { rect(bx, by + 1, 3, 3, roof); rect(bx + 4, by, 3, 3, fo(ROOFS[(r * 53 | 0) % ROOFS.length])); rect(bx + 1, by + 4, 4, 3, fo(ROOFS[(r * 31 | 0) % ROOFS.length]), .95); }
          }
        } else {                                               // suburbs / small towns: scattered roofs
          const n = Math.round(b * 26) + 1;
          if (b > .2) { for (let k = 0; k < 16; k++) { put(x0 + k, y0 + 8, fo(ROAD)); if (b > .32) put(x0 + 8, y0 + k, fo(ROAD)); } }
          for (let k = 0; k < n; k++) {
            const hx = x0 + 1 + (hash(tx, ty, 50 + k) * 12 | 0), hy = y0 + 1 + (hash(tx, ty, 80 + k) * 12 | 0);
            const roof = fo(ROOFS[(hash(tx, ty, 110 + k) * ROOFS.length) | 0]);
            rect(hx, hy + 1, 3, 2, roof, .7); rect(hx, hy, 3, 2, roof);
          }
        }
        continue;
      }
      if (t.crop >= .3 || !inAZ) continue;
      // ---- wild land decoration ---------------------------------------
      const r = hash(tx, ty, 60);
      if (t.tree > .12) {
        const n = Math.min(7, Math.round(t.tree * 8));
        for (let k = 0; k < n; k++) lateSprites.push(['pine', x0 + 1 + (hash(tx, ty, 61 + k) * 12 | 0), y0 + 2 + (hash(tx, ty, 71 + k) * 10 | 0)]);
      } else if ((TS.saguaro ? TS.saguaro(lon, lat, e) : (e < 1150 && lat < 34.9 && lon > -114.3)) && t.bare < .2 && t.crop < .06) {
        if (r > .45) lateSprites.push(['saguaro', x0 + 2 + (hash(tx, ty, 62) * 10 | 0), y0 + 3 + (hash(tx, ty, 63) * 8 | 0)]);
        if (r > .8) lateSprites.push(['bush', x0 + 1 + (hash(tx, ty, 64) * 12 | 0), y0 + 4 + (hash(tx, ty, 65) * 10 | 0)]);
      } else if (r > .7 && t.bare < .3) {
        lateSprites.push(['bush', x0 + 1 + (hash(tx, ty, 64) * 12 | 0), y0 + 4 + (hash(tx, ty, 65) * 10 | 0)]);
      }
    }
    // sprites drawn back-to-front so they overlap naturally
    const SPR = {
      pine: { p: { g: [44, 96, 52], G: [62, 122, 62], t: [92, 70, 50] }, s: ['..g..', '.gGg.', '.gGg.', 'gGGGg', 'ggGgg', '..t..'] },
      saguaro: { p: { g: [70, 128, 72], d: [50, 100, 60] }, s: ['..g..', 'g.g..', 'g.g.g', 'ggg.g', '..ggg', '..d..', '..d..'] },
      bush: { p: { g: [128, 142, 86], d: [100, 116, 72] }, s: ['.gg.', 'gdgg'] },
    };
    lateSprites.sort((a, b) => a[2] - b[2]);
    for (const [k, x, y] of lateSprites) {
      const sp = SPR[k];
      sp.s.forEach((row, j) => { for (let i = 0; i < row.length; i++) if (row[i] !== '.') put(x + i, y + j - sp.s.length + 2, sp.p[row[i]]); });
    }
    ctx.putImageData(img, 0, 0);

    // big reservoirs as crisp polygons on top of the tile water
    ctx.fillStyle = `rgb(${WATER})`; ctx.strokeStyle = 'rgb(36,84,150)'; ctx.lineWidth = 1.5; ctx.lineJoin = 'round';
    for (const lk of D.lakes) {
      ctx.beginPath();
      for (let i = 0; i < lk.l.length; i += 2) ctx[i ? 'lineTo' : 'moveTo'](lk.l[i] * T, lk.l[i + 1] * T);
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    return cv;
  };

  // low-res overlay canvases ----------------------------------------------
  // rainfall: one blocky cell per tile, single-hue ramp (light = dry, dark = wet)
  G.RAIN_STOPS = [[4, [247, 240, 214]], [8, [205, 226, 216]], [12, [150, 200, 214]], [16, [96, 164, 206]], [22, [56, 118, 186]], [30, [34, 74, 150]], [44, [22, 40, 104]]];
  G.rainColor = inches => {
    const S = G.RAIN_STOPS;
    if (inches <= S[0][0]) return S[0][1];
    for (let i = 1; i < S.length; i++) if (inches <= S[i][0]) return mix(S[i - 1][1], S[i][1], (inches - S[i - 1][0]) / (S[i][0] - S[i - 1][0]));
    return S[S.length - 1][1];
  };
  G.paintRain = () => {
    const cv = document.createElement('canvas'); cv.width = GW; cv.height = GH;
    const ctx = cv.getContext('2d'), img = ctx.createImageData(GW, GH);
    for (let i = 0; i < GW * GH; i++) {
      const p = G.precip[i] * PS; if (!p) continue;
      const c = G.rainColor(p);
      img.data[i * 4] = c[0]; img.data[i * 4 + 1] = c[1]; img.data[i * 4 + 2] = c[2]; img.data[i * 4 + 3] = G.mask[i] ? 215 : 110;
    }
    ctx.putImageData(img, 0, 0); return cv;
  };
  // winter snow zone: elevation-based (roughly where snow typically accumulates), 4 px per tile, dithered edge
  G.SNOW_M = 2050;
  G.paintSnow = () => {
    const S = 4, cv = document.createElement('canvas'); cv.width = GW * S; cv.height = GH * S;
    const ctx = cv.getContext('2d'), img = ctx.createImageData(GW * S, GH * S);
    for (let ty = 0; ty < GH; ty++) for (let tx = 0; tx < GW; tx++) {
      const e = G.elev[ty * GW + tx] * ES, lat = G.t2ll(tx, ty + .5)[1];
      const line = TS.snowLine ? TS.snowLine(lat, G.precip[ty * GW + tx] * PS) : G.SNOW_M + (36 - lat) * 110;           // snow line sits higher in the south
      const k = (e - line) / 350; if (k <= -.2) continue;
      for (let j = 0; j < S; j++) for (let i2 = 0; i2 < S; i2++) {
        if (hash(tx * S + i2, ty * S + j, 9) > cl(k + .35, 0, 1)) continue;
        const o = ((ty * S + j) * GW * S + tx * S + i2) * 4;
        const sh = G.shade[(ty * 2 + (j >> 1)) * GW * 2 + tx * 2 + (i2 >> 1)] / 255;
        const v = 215 + sh * 40;
        img.data[o] = v; img.data[o + 1] = v + 2; img.data[o + 2] = 255; img.data[o + 3] = 235;
      }
    }
    ctx.putImageData(img, 0, 0); return cv;
  };

  window.MAPGRID = G;
})();
