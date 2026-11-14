/* Shared machinery for every state's electricity map.
   A state file (power/content/<id>.js) calls POWERKIT.begin(...) to get helpers, writes its words, then calls K.finish(...).
   Plant numbers (capacity, output, emissions) are never typed in a state file: they come from the baked dataset
   power/data/<id>.js (EIA-860M inventory and EPA eGRID), so a card can never disagree with the data.

   Loaded after the state's base map (window.MAPDATA or window.AZDATA) and its water content (for river styles and terrain). */
window.POWERKIT = {
  begin(cfg) {
    // cfg: { id: 'co', st: 'CO', name: 'Colorado',
    //        util: { 'NAME AS PUBLISHED': ['Display name', 'Short label', 'iou|public|coop|tribal|federal'] },
    //        bigUtils: ['Short label', ...]   labels shown from the first zoom; the rest appear on zooming in
    //        lineLede: { '345': '...' }       optional replacement for the one-line description of a voltage class
    //        pipeLede: '...'                  optional lede for a pipeline with no card of its own }
    const P = window.POWERDATA, BASE = window.MAPDATA || window.AZDATA, WATER = window.MAPCONTENT || window.AZCONTENT || {};
    const EY = P.egridYear, INV = P.inventory, UTIL = cfg.util || {};
    const KINDNAME = { iou: 'Investor-owned utility', public: 'Public power', coop: 'Electric cooperative', tribal: 'Tribal utility', federal: 'Federal power agency' };
    const KINDFILL = { iou: ['rgba(235,104,52,.26)', '#ffd9c7'], public: ['rgba(58,124,196,.34)', '#d6ecff'], coop: ['rgba(98,80,214,.26)', '#dcd6ff'], tribal: ['rgba(138,90,58,.34)', '#f3dcc8'], federal: ['rgba(63,143,70,.26)', '#d6f0d0'] };
    // Several source names can map to one display name (a utility drawn in pieces): they become one area.
    const byName = {};
    P.territories.filter(t => UTIL[t.n]).forEach(t => { const u = UTIL[t.n], o = byName[u[0]] || (byName[u[0]] = { n: u[0], k: u[2], a: 0, r: [] }); o.a += t.a; o.r = o.r.concat(t.r); });
    const territories = Object.values(byName).sort((a, b) => a.a - b.a);   // smallest first, so a town inside a big territory wins a click
    const utilKind = {}; territories.forEach(t => utilKind[t.n] = t.k);
    const areaLabels = {}; Object.values(UTIL).forEach(u => areaLabels[u[0]] = { short: u[1], minZ: (cfg.bigUtils || []).includes(u[1]) ? .2 : .6 });

    const FUELNAME = { coal: 'Coal', gas: 'Natural gas', nuclear: 'Nuclear', solar: 'Solar', wind: 'Wind', hydro: 'Hydropower', pumped: 'Pumped storage', battery: 'Battery storage', oil: 'Oil', bio: 'Biomass or landfill gas', geo: 'Geothermal', other: 'Other' };
    const FUELICON = { coal: 'coal', gas: 'gasplant', nuclear: 'nuclear', solar: 'solar', wind: 'wind', hydro: 'hydro', pumped: 'hydro', battery: 'battery', geo: 'geo' };
    const STATES = { AZ: 'Arizona', NM: 'New Mexico', NV: 'Nevada', CA: 'California', UT: 'Utah', CO: 'Colorado', ID: 'Idaho', MT: 'Montana', WY: 'Wyoming', OR: 'Oregon', WA: 'Washington',
      ND: 'North Dakota', SD: 'South Dakota', NE: 'Nebraska', KS: 'Kansas', OK: 'Oklahoma', TX: 'Texas' };
    const fmt = n => Math.round(n).toLocaleString('en-US');
    const mwTxt = mw => (mw >= 100 ? fmt(mw) : mw >= 10 ? mw.toFixed(0) : mw.toFixed(1)) + ' MW';
    const genTxt = mwh => mwh >= 1e6 ? (mwh / 1e6).toFixed(mwh >= 1e7 ? 1 : 2) + ' TWh' : fmt(mwh / 1e3) + ' GWh';
    const tonsTxt = t => t >= 1e6 ? (t / 1e6).toFixed(2) + ' million tons' : fmt(t) + ' tons';
    const SRC_INV = ['EIA-860M generator inventory, ' + INV, 'https://www.eia.gov/electricity/data/eia860m/'];
    const SRC_EGRID = ['EPA eGRID' + EY, 'https://www.epa.gov/egrid'];
    const HIFLD = ['Service territories: HIFLD / Oak Ridge National Laboratory', 'https://hifld-geoplatform.hub.arcgis.com/'];
    const OSM = ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'];
    const SRC_PIPES = ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'];

    // the numbers for one plant, straight from the dataset
    function plantStats(p) {
      const s = [];
      const what = p.s === 'retired' ? 'capacity when it ran' : p.s === 'planned' ? 'planned capacity' : 'capacity: the most it can produce at one moment';
      s.push([mwTxt(p.mw), what]);
      if (p.mix) s.push([Object.entries(p.mix).sort((a, b) => b[1] - a[1]).map(([f, v]) => `${FUELNAME[f].toLowerCase()} ${mwTxt(v)}`).join(', '), 'what that capacity is made of', 1]);
      if (p.bmwh) s.push([fmt(p.bmwh) + ' MWh', 'energy its batteries hold when full']);
      if (p.g > 0 && p.s !== 'planned') s.push([genTxt(p.g), `electricity generated in ${EY}`]);
      if (p.g < 0 && p.s !== 'planned') s.push([genTxt(-p.g), `more electricity used than generated in ${EY}`]);
      if (p.co2) s.push([tonsTxt(p.co2), `carbon dioxide released in ${EY}`]);
      if (p.g > 1e4 && p.co2) s.push([fmt(p.co2 * 2000 / p.g) + ' lb', `of CO2 per megawatt-hour in ${EY}`]);
      if (p.nox) s.push([fmt(p.nox) + ' tons', `nitrogen oxides released in ${EY}`]);
      if (p.so2) s.push([fmt(p.so2) + ' tons', `sulfur dioxide released in ${EY}`]);
      if (p.hg) s.push([fmt(p.hg) + ' lb', `mercury released in ${EY}`]);
      if (p.y0) s.push([String(p.y0), p.y1 ? `first unit opened (newest: ${p.y1})` : 'year it opened']);
      if (p.ry) s.push([String(p.ry), 'year the last unit closed']);
      if (p.ret) s.push([mwTxt(p.ret[0]), `of ${FUELNAME[p.ret[2]].toLowerCase()} units already closed here, the last in ${p.ret[1]}`]);
      if (p.pr) s.push([String(p.pr[0]), `closing year on file with EIA for ${mwTxt(p.pr[1])} of this plant. A unit converted to another fuel also counts as closed.`]);
      if (p.add) s.push([mwTxt(p.add[0]), `more ${FUELNAME[p.add[2]].toLowerCase()} planned here, expected ${p.add[1]}`]);
      if (p.py) s.push([String(p.py), 'year it is expected to open']);
      return s;
    }
    const FUELLEDE = {
      solar: 'A solar farm. It produces power only while the sun is up, and the most around midday.', wind: 'A wind farm. Its output rises and falls with the wind.',
      gas: 'A plant that burns natural gas. Gas plants can be turned up and down quickly, so they fill in when solar and wind fall off.',
      coal: 'A plant that burns coal.', nuclear: 'A nuclear plant. It runs at full power around the clock.', hydro: 'A dam that makes power from falling water.',
      pumped: 'A plant that stores energy by pumping water uphill and makes power by letting it run back down.', battery: 'A battery plant. It charges when power is plentiful and discharges for a few hours when it is scarce.',
      bio: 'A small plant that burns wood waste or landfill gas.', oil: 'A small plant that burns diesel or other oil, usually for backup.',
      geo: 'A geothermal plant. It makes power from hot water or steam drawn from underground, and runs around the clock.',
    };
    const plantIcon = p => p.s === 'retired' ? 'retired' : p.s === 'planned' ? 'planned' : FUELICON[p.f] || 'power';
    function plantCard(p) {
      const st = p.s === 'retired' ? 'Closed ' : p.s === 'planned' ? 'Planned ' : '';
      const where = p.st !== cfg.st && STATES[p.st] ? ` It is in ${STATES[p.st]}.` : '';
      const lede = p.s === 'retired' ? `A ${FUELNAME[p.f].toLowerCase()} plant that has closed.${where}`
        : p.s === 'planned' ? `A ${FUELNAME[p.f].toLowerCase()} project that has been reported to the federal government but is not running yet.${where}`
        : `${FUELLEDE[p.f] || 'A power plant.'}${where}`;
      return { kind: st + (st ? FUELNAME[p.f].toLowerCase() : FUELNAME[p.f]) + ' plant', icon: plantIcon(p), title: p.n, lede,
        stats: plantStats(p), body: `<p>Operator: ${p.op}.</p>` + (p.g || p.co2 ? `<p class="gcap">Output and emissions are for ${EY}, the latest year EPA has published for every plant. Capacity is from the ${INV} inventory.</p>` : ''),
        sources: p.g || p.co2 ? [SRC_INV, SRC_EGRID] : [SRC_INV] };
    }

    const LINECLASS = {
      '500': ['500 kV line', 'The backbone of the grid. A 500-kilovolt line can carry the output of a large power plant across the state. Like most of the grid, it carries alternating current.'],
      '345': ['345 kV line', 'A long-distance line. Lines at 345 kilovolts carry power from large plants to cities and between states.'],
      '230': ['230 kV line', 'A regional line. Lines at 230 kilovolts move power around a metro area and out to large substations.'],
      '115': ['115 to 161 kV line', 'A local transmission line. It feeds the substations that serve towns and neighborhoods.'],
      dc: ['High-voltage direct current line', 'A direct-current line. The rest of the grid carries alternating current. Direct current loses less power over very long distances, so it is used for a few long lines that run between just two points, often at about 500 kilovolts.'],
    };
    Object.entries(cfg.lineLede || {}).forEach(([k, v]) => LINECLASS[k][1] = v);
    const PIPELEDE = cfg.pipeLede || 'A pipeline that carries natural gas at high pressure. Gas-fired power plants are built on or near lines like this one.';
    const plantById = {}; P.plants.forEach(p => plantById[p.id] = p);

    // The standard "about the data" paragraph. `extra` is state-specific sentences inserted before the closing line.
    const aboutStd = (extra) => `<p style="font-size:13px">Power plants are from the federal generator inventory for ${INV} (EIA-860M): location, fuel, capacity, opening and closing years, and planned projects. Each plant's output and emissions are for ${EY}, from EPA's eGRID, in short tons (2,000 pounds). Where a card gives a figure for another year, the card says the year and links its source. Lines of 345 kilovolts and above are from OpenStreetMap contributors. Lines below 345 kilovolts are from a federal file last checked between 2017 and 2021, so recent lines may be missing. Gas pipelines are from EIA map data. Utility areas are approximate. ${extra || ''} The landscape (elevation, land cover, rivers) is the same as on the ${cfg.name} water map. Figures are as of November 2026 and each card links its sources.</p>`;

    const K = { P, EY, INV, BASE, cfg, FUELNAME, STATES, KINDNAME, fmt, mwTxt, genTxt, tonsTxt, SRC_INV, SRC_EGRID, HIFLD, OSM, SRC_PIPES, plantStats, plantCard, plantIcon, plantById, aboutStd, territories };

    // c: { budget, hud, about, features, browse, tour, areas, pipeCards, lineCards, statesNav,
    //      meta (optional), kinds (optional extra kinds), sprites (optional extra sprites),
    //      riverLede, tribeLede, exploreHint (optional) }
    K.finish = function (c) {
      // one colour per thing on every state's chart, tested so each pair stays apart for readers with the three common kinds of colour blindness
      if (c.budget) {
        c.budget.notesBelow = true;   // the unit definitions are long: show the chart's key first, then the definitions
        c.budget.sources.forEach(r => { const k = POWERKIT.ALIAS[r.id] || r.id; if (POWERKIT.FUELCOLOR[k]) r.color = POWERKIT.FUELCOLOR[k]; });
        c.budget.uses.forEach(r => { const k = POWERKIT.ALIAS[r.id] || r.id; if (POWERKIT.USECOLOR[k]) r.color = POWERKIT.USECOLOR[k]; });
      }
      window.MAPDATA = Object.assign({}, BASE, {
        region: cfg.id === 'west' ? 'west' : cfg.id + '-power', canals: [],   // 'west' tells the engine this is the overview, with no link back basins: [], golf: [], amaHist: {},
        amas: territories.map(t => ({ n: t.n, k: t.k, r: t.r })),
        plants: P.plants,
        netLines: P.lines.concat(P.pipes.map(p => ({ k: 'gas', n: p.n, t: p.t, l: p.l }))),
      });
      const AREAS = c.areas || {}, name = cfg.name, poss = name + "'s";
      window.MAPCONTENT = {
        meta: c.meta || { title: `${name} Power: an explorable map`, h1: `${name} Power`, tagline: 'Where it comes from. Where it goes.', aria: `Interactive map of ${poss} electricity system. Use the Places list in the side panel to browse the same information without the map.`, home: `Show all of ${name}` },
        night: true,
        layerList: c.layerList || [
          { id: 'plants', label: 'Power plants', icon: 'gasplant', on: true },
          { id: 'lines', label: 'Transmission', icon: 'pylon', on: true },
          { id: 'pipes', label: 'Gas pipelines', icon: 'pipe', on: true },
          { id: 'cities', label: 'Power users', icon: 'city', on: true },
          { id: 'emit', label: 'CO2', icon: 'puff', on: false },
          { id: 'closed', label: 'Closed plants', icon: 'retired', on: true },
          { id: 'planned', label: 'Planned plants', icon: 'planned', on: false },
          { id: 'ground', label: 'Utilities', icon: 'meter', on: false },
          { id: 'rivers', label: 'Rivers', icon: 'river', on: true },
          { id: 'tribal', label: 'Tribal lands', icon: 'tribe', on: false },
        ],
        sprites: Object.assign({
          coal: ['..dd....dd....', '.ddd...ddd....', '..d.....d.....', '..kk....kk....', '..kGk...kGk...', '..kGk...kGk...', '.kkGkkkkkGkkk.', '.kTTTTTTTTTTk.', '.kTkTTkTTkTTk.', 'kkkkkkkkkkkkkk'],
          gasplant: ['.........ww...', '........kGk...', '........kGk...', '.kkkkkk.kGk...', '.kGGGGkkkGkkk.', '.kGccGGGGGGGk.', '.kGccGkGkGkGk.', 'kkkkkkkkkkkkkk'],
          solar: ['.kkkkkk.kkkkkk', '.kbBbBk.kbBbBk', '.kBbBbk.kBbBbk', '.kkkkkk.kkkkkk', '...k......k...', '..kkk....kkk..'],
          wind: ['......w......', '......w......', '..w...w......', '...ww.k..ww..', '.....wkww....', '......k......', '......k......', '......k......', '.....kkk.....'],
          battery: ['.kkkkkkkkkkkk.', '.kNNNNkkNNNNk.', '.kNwwNkkNwwNk.', '.kNNNNkkNNNNk.', '.kkkkkkkkkkkk.'],
          geo: ['...ww...ww....', '..w..w.w..w...', '...ww...ww....', '....w...w.....', '.kkkkkkkkkkkk.', '.kGGooGGooGGk.', '.kGGooGGooGGk.', 'kkkkkkkkkkkkkk'],
          retired: ['..kk....kk....', '..kdk...kdk...', '..kdk...kdk...', '.kkdkkkkkdkkk.', '.kddddddddddk.', '.kdkddkddkddk.', 'kkkkkkkkkkkkkk'],
          planned: ['k.k.k.k.k.k.k', '.............', 'k.....y.....k', '.....yyy.....', 'k.....y.....k', '.............', 'k.k.k.k.k.k.k'],
          pylon: ['....kk....', '..kkkkkk..', '....kk....', '.kkkkkkkk.', '....kk....', '...k..k...', '..k....k..', '.k......k.'],
          pipe: ['..........', 'kkkkkkkkkk', 'oooooooooo', 'oeoooeoooe', 'kkkkkkkkkk', '..........'],
          puff: ['...dddd...', '.dddddddd.', 'dddddddddd', '.dddddddd.', '...dddd...'],
          meter: ['.kkkkkkkk.', 'kssssssssk', 'kskkkkkksk', 'ksyyyyyksk', 'kskkkkkksk', 'kssssssssk', '.kkkkkkkk.'],
          substation: ['.k..k..k..', '.kkkkkkk..', '.k..k..k..', 'kkkkkkkkkk', 'kGGkGGkGGk', 'kkkkkkkkkk'],
        }, c.sprites || {}),
        kinds: Object.assign({
          nuclear: ['plants', 'nuclear', 'Nuclear plant'], coal: ['plants', 'coal', 'Coal plant'], gas: ['plants', 'gasplant', 'Natural gas plant'], solar: ['plants', 'solar', 'Solar farm'],
          wind: ['plants', 'wind', 'Wind farm'], hydro: ['plants', 'hydro', 'Dam and hydropower'], pumped: ['plants', 'hydro', 'Pumped storage'], battery: ['plants', 'battery', 'Battery storage'],
          geo: ['plants', 'geo', 'Geothermal plant'], bio: ['plants', 'power', 'Biomass plant'], closed: ['closed', 'retired', 'Closed plant'],
          hub: ['lines', 'substation', 'Grid hub'], fuel: ['pipes', 'pipe', 'Fuel supply'], user: ['cities', 'city', 'Power user'],
          info: ['plants', 'info', 'Good to know'], city: ['cities', 'city', 'City'], mine: ['cities', 'mine', 'Mine'], fab: ['cities', 'fab', 'Chip factory'], datacenter: ['cities', 'datacenter', 'Data centers'],
          umine: ['pipes', 'mine', 'Uranium mine'], coalmine: ['closed', 'mine', 'Closed coal mine'], coalmineop: ['pipes', 'mine', 'Coal mine'], gasfield: ['pipes', 'pipe', 'Oil and gas field'],
          plannedp: ['planned', 'planned', 'Planned plant'],
        }, c.kinds || {}),
        plantLayer: p => p.s === 'retired' ? 'closed' : p.s === 'planned' ? 'planned' : 'plants',
        plantIcon, plantCard,
        plantSub: p => (p.s === 'retired' ? 'Closed ' : p.s === 'planned' ? 'Planned ' : '') + FUELNAME[p.f].toLowerCase() + ', ' + mwTxt(p.mw),
        plantAlpha: (p, season) => season === 'winter' && p.f === 'solar' && p.s === 'op' ? .32 : 1,
        plantExtra: p => `<div class="statgrid data">${plantStats(p).map(s => `<div class="stat${s[2] ? ' wide' : ''}"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>`,
        lineStyles: {
          '115': { layer: 'lines', color: '#b9b4c0', w: .8, minZ: 1.0, casing: false, z: 1, label: '115 to 161 kV line' },
          '230': { layer: 'lines', color: '#e8e2d0', w: 1.1, minZ: .42, z: 2, label: '230 kV line' },
          '345': { layer: 'lines', color: '#f7dc7a', w: 1.7, z: 3, label: '345 kV line' },
          '500': { layer: 'lines', color: '#f2c230', w: 2.3, z: 4, label: '500 kV line' },
          dc: { layer: 'lines', color: '#eb6834', w: 2.5, z: 5, label: 'Direct-current line' },
          gas: { layer: 'pipes', color: '#e7a36a', casing: '#6b3a1a', w: .9, dash: [5, 3], z: 0, label: 'Natural gas pipeline' },
        },
        lineName: l => l.k === 'gas' ? l.n + ' pipeline' : l.n || (l.e ? `${l.e[0]} to ${l.e[1]}` : LINECLASS[l.k][0]),
        lineCard: l => l.k === 'gas'
          ? Object.assign({ kind: 'Natural gas pipeline', icon: 'pipe', title: l.n, lede: PIPELEDE,
            stats: [[l.t || 'n/a', 'type of pipeline']], sources: [SRC_PIPES] }, (window.MAPCONTENT.pipeCards || {})[l.n] || {})
          : Object.assign({ kind: 'Transmission line', icon: 'pylon', title: l.n || (l.e ? `${l.e[0]} to ${l.e[1]}` : LINECLASS[l.k][0]), lede: LINECLASS[l.k][1],
            stats: [[l.kv + ' kV', 'voltage'], ...(l.e ? [[`${l.e[0]} and ${l.e[1]}`, 'substations it connects', 1]] : []), ...(l.o ? [[l.o, l.osm ? 'operator listed in OpenStreetMap' : 'owner on record', 1]] : [])],
            body: l.osm ? '<p class="gcap">The route and name are from OpenStreetMap, which volunteers map from aerial photos and public records.</p>'
              : '<p class="gcap">The route is from a federal dataset last checked between 2017 and 2021.</p>',
            sources: [l.osm ? OSM : ['HIFLD / Oak Ridge National Laboratory: transmission lines', 'https://hifld-geoplatform.hub.arcgis.com/']] },
            (window.MAPCONTENT.lineCards || []).reduce((a, x) => a || (l.n && x[0].test(l.n) ? x[1] : null), null) || {}),
        lineCards: c.lineCards || [],   // [regex on the line's name, card fields that replace the generic ones]
        pipeCards: c.pipeCards || {},   // keyed by the pipeline operator name in the dataset
        areaKind: n => KINDNAME[utilKind[n]] || 'Electric utility',
        areaAlt: () => false,
        areaStyle: (n, k) => ({ fill: (KINDFILL[k] || KINDFILL.iou)[0], stroke: (KINDFILL[k] || KINDFILL.iou)[1] }),
        areaLabels, areaMinZ: .6,
        legend: {
          groundCustom: '<span class="px">Who delivers the power</span>' + Object.keys(KINDNAME).filter(k => territories.some(t => t.k === k)).map(k => `<div><span class="sw" style="background:${KINDFILL[k][0].replace(/[\d.]+\)$/, '.8)')}"></span>${KINDNAME[k]}</div>`).join('') + '<p>Boundaries are approximate. Where two utilities overlap, a click picks the smaller one.</p>',
          rain: '', ground: '', snow: '',
        },
        legendExtra: (on, season, h) => (on.emit ? `${h ? '<hr>' : ''}<span class="px">Carbon dioxide, ${EY}</span><div><span class="sw" style="background:rgba(58,48,62,.6);border-radius:50%"></span>Bigger circle = more CO2 in a year</div><p>The circle's area is in proportion to the plant's CO2 for the year. Solar, wind, hydro and nuclear plants release none while running.</p>` : '')
          + (season === 'winter' ? `${h || on.emit ? '<hr>' : ''}<span class="px">Night</span><p>Solar farms are faded: they produce nothing after dark. Other plants and batteries carry the evening.</p>` : ''),
        riverScale: .45, riverStyle: WATER.riverStyle || {}, rivers: { _default: { lede: c.riverLede || `A river. Dams on ${poss} rivers make hydropower, and several power plants draw cooling water from rivers or canals.` } },
        canals: { _default: {} }, tribes: { _default: { lede: c.tribeLede || 'Tribal land. Tribes are sovereign and several run their own electric utilities.' } },
        amas: Object.assign(AREAS, { _default: { lede: 'An electric utility. It delivers power to homes and businesses inside this area, over its own local lines.', sources: [HIFLD] } }),
        riverLabels: WATER.riverLabels || [], neighbors: WATER.neighbors || [],
        features: c.features, browse: c.browse, hud: c.hud, budget: c.budget,
        statesNav: c.statesNav === undefined ? POWERKIT.statesNav(cfg.id) : c.statesNav,
        stateCards: c.stateCards, stateLabels: c.stateLabels, stateHint: c.stateHint,   // used by the all-states overview
        plantMinZ: c.plantMinZ, plantSize: c.plantSize,   // optional: when each plant appears and how big it is drawn
        spot: {
          rulesTitle: 'Who delivers electricity here',
          inside: n => `This spot is served by <b>${n}</b>.`, aboutBtn: n => `About ${n}`,
          area: n => `${KINDNAME[utilKind[n]] || 'Electric utility'}. It delivers power here over its own local lines, whoever generated it.`,
          none: 'No utility territory is mapped at this spot.',
          tribal: 'Tribes are sovereign, and several run their own electric utilities.',
          stats: (t, lon, lat, hh) => {
            const T = 16, KM = BASE.km || 3, near = (test) => { let b = null, d0 = 1e9; for (const p of P.plants) { if (!test(p)) continue; const d = Math.hypot(p.x * T - hh.wx, p.y * T - hh.wy); if (d < d0) { d0 = d; b = p; } } return b && [b, d0 / T * KM / 1.609]; };
            const a = near(p => p.s === 'op'), b = near(p => p.s === 'op' && p.mw >= 200);
            const row = (r, lab) => [`${r[0].n}`, `${lab}: ${FUELNAME[r[0].f].toLowerCase()}, ${mwTxt(r[0].mw)}, about ${r[1] < 10 ? r[1].toFixed(1) : Math.round(r[1])} miles away`, 1];
            return [[fmt(Math.round(t.elevM * 3.281 / 100) * 100) + ' ft', 'elevation here'], ...(a ? [row(a, 'nearest power plant')] : []), ...(b && a && b[0] !== a[0] ? [row(b, 'nearest large plant')] : [])];
          },
          sources: [SRC_INV, HIFLD],
        },
        exploreHint: c.exploreHint || 'Drag to pan, scroll or pinch to zoom, and click anything: a power plant, a transmission line, a pipeline, or open country.',
        about: c.about,
        tour: c.tour,
        terrain: WATER.terrain,
      };
    };
    return K;
  },
  // chart colours (where it comes from / where it goes), checked with simulated protan, deutan and tritan vision: every pair that can appear in one chart
  // is at least 15 apart for normal vision and 8 apart for colour-blind vision (OKLab x 100)
  FUELCOLOR: { gas: '#f87726', solar: '#e9d32e', coal: '#2c2e34', wind: '#71dafe', hydro: '#0051b5', nuclear: '#c55ae7', geo: '#aa2727', other: '#7b8f9b', imp: '#28c58b' },
  USECOLOR: { homes: '#e95e0b', biz: '#039b6f', ind: '#014fad', export: '#f9cb3c', loss: '#babcd1', misc: '#1f303b', direct: '#75532a', canada: '#c462bf' },
  ALIAS: { import: 'imp', impsw: 'imp', impnw: 'imp', bio: 'other', coke: 'other', heat: 'other' },
  // chips in the home panel that switch to another state's electricity map; a state appears once its page exists
  LIVE: ['az', 'ca', 'co', 'id', 'mt', 'nv', 'nm', 'ut'],
  NAMES: { az: 'Arizona', ca: 'California', co: 'Colorado', id: 'Idaho', mt: 'Montana', nv: 'Nevada', nm: 'New Mexico', ut: 'Utah' },
  statesNav(self) { const items = [['west', 'All states', 1]].concat(this.LIVE.filter(s => s !== self).map(s => [s, this.NAMES[s], 1])); return { title: 'Electricity in other states', items }; },
};
