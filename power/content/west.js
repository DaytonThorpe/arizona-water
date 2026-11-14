/* Power in the West: the all-states overview of the electricity map.
   Shared machinery is in kit.js. Plant numbers come from the baked dataset power/data/west.js (plants of 50 MW or more).
   Statewide figures: 2025 generation is our sum of EIA-923 (final 2025, including EIA's estimates for small plants), which
   matches each state page; 2024 sales and net flows are from the EIA State Electricity Profiles, Table 10, as on each state page. */
(() => {
  const K = window.POWERKIT.begin({ id: 'west', st: '', name: 'the West', util: {},
    lineLede: { '500': 'The backbone of the western grid. Lines at 500 kilovolts carry the output of large power plants between states.' },
    pipeLede: 'An interstate pipeline that carries natural gas at high pressure from the gas fields of the Rockies, New Mexico, Texas and Canada to power plants and cities.' });
  const { OSM, SRC_INV, SRC_PIPES } = K;
  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    hist: ['EIA state generation history', 'https://www.eia.gov/electricity/data/state/'],
    az: ['EIA Arizona Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/arizona/'], ca: ['EIA California Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/california/'],
    co: ['EIA Colorado Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/colorado/'], id: ['EIA Idaho Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/idaho/'],
    mt: ['EIA Montana Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/montana/'], nm: ['EIA New Mexico Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/newmexico/'],
    nv: ['EIA Nevada Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/nevada/'], ut: ['EIA Utah Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/utah/'],
    ans: ['American Nuclear Society, 3 Apr 2026', 'https://www.ans.org/news/2026-04-03/article-7906/nrc-approves-diablo-canyon-license-renewal-extension'],
    sunzia: ['EIA Today in Energy, 12 Jun 2026', 'https://www.eia.gov/todayinenergy/detail.php?id=67766'],
    ipa: ['Intermountain Power Agency: IPP Renewed', 'https://www.ipautah.com/ipp-renewed/'],
    geysers: ['Calpine: The Geysers', 'https://geysers.com/'],
    wPdci: ['Wikipedia: Pacific DC Intertie', 'https://en.wikipedia.org/wiki/Pacific_DC_Intertie'], wP27: ['Wikipedia: Path 27', 'https://en.wikipedia.org/wiki/Path_27'],
  };
  const TWH = 1e6;

  // ------------------------------------------------------------------ the eight states together
  const BUDGET = {
    title: 'Eight western states generated 548 terawatt-hours of electricity in 2025',
    lede: 'Natural gas made 36% of it and solar farms 19%. Coal, wind, dams and nuclear plants each made about a tenth.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: 5 * TWH, shape: 'bolt', unitLine: 'Each bolt = 5 terawatt-hours (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is what power plants in Arizona, California, Colorado, Idaho, Montana, Nevada, New Mexico and Utah generated in 2025. The second is the electricity sold to customers in those states in 2024, the latest year the federal government has published by state.',
    fmtVal: r => `${r.pct}% &middot; ${Math.round(r.af / 1e6)} TWh`,
    sources: [
      { id: 'gas', label: 'Natural gas', pct: 36.1, af: 197.68 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'gilariver', note: 'The largest source in Arizona, California, Colorado and Nevada. The gas arrives by pipeline from New Mexico, Texas, the Rockies and Canada.' },
      { id: 'solar', label: 'Solar farms', pct: 19.1, af: 104.78 * TWH, color: '#f2c230', layer: 'plants', feat: 'gemini', note: 'More than half of it in California. Rooftop panels are not counted here.' },
      { id: 'coal', label: 'Coal', pct: 11.3, af: 61.87 * TWH, color: '#5c5a66', layer: 'plants,closed', feat: 'colstrip', note: 'Mostly in Utah, Colorado, Montana, Arizona and New Mexico. California and Idaho burn almost none.' },
      { id: 'wind', label: 'Wind', pct: 10.9, af: 59.85 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'sunzia', note: 'Mostly on the plains of Colorado and New Mexico, in California\'s mountain passes and in Montana.' },
      { id: 'hydro', label: 'Hydropower', pct: 10.0, af: 54.83 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'hoover', note: 'More than half of it in California. Dams made 44% of the electricity generated in Idaho. Pumped storage is included.' },
      { id: 'nuclear', label: 'Nuclear', pct: 8.9, af: 48.88 * TWH, color: '#6250d6', layer: 'plants', feat: 'paloverde', note: 'From two plants: Palo Verde in Arizona and Diablo Canyon in California.' },
      { id: 'geo', label: 'Geothermal', pct: 2.8, af: 15.27 * TWH, color: '#c8442e', layer: 'plants', feat: 'geysers', note: 'Almost all in California and Nevada.' },
      { id: 'other', label: 'Wood, landfill gas, oil and waste heat', pct: 1.4, af: 7.76 * TWH, color: '#8a5a3a', layer: 'plants', note: 'California made most of this.' },
    ],
    uses: [
      { id: 'biz', label: 'Businesses', pct: 41.2, af: 222.38 * TWH, color: '#3f8f46', note: 'Shops, offices, schools, data centers and other commercial customers. California alone bought 115 TWh.' },
      { id: 'homes', label: 'Homes', pct: 36.3, af: 196.31 * TWH, color: '#c8442e', note: 'California homes bought 86 TWh and Arizona homes 40 TWh.' },
      { id: 'ind', label: 'Industry', pct: 22.5, af: 121.43 * TWH, color: '#8a5a3a', note: 'Mines, refineries, factories, oil fields and water pumps. In New Mexico industry buys more electricity than homes do.' },
    ],
    body: '<p class="gcap">2025: 548.0 TWh generated in the eight states, our sum of federal plant reports including the federal estimate for small plants. Batteries used 2.9 TWh more than they gave back, so the rows add up to slightly more than the total. 2024: 540.1 TWh sold to customers in the eight states; power lost on the wires and power used by plant owners themselves are not included.</p><p class="gcap">Power also crosses state lines. In 2024 Arizona sent out 19.7 TWh more than it brought in, and California brought in 53.4 TWh more than it sent out. Click a state to see its own figures.</p><p class="gcap">Sources: <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/" target="_blank" rel="noopener">EIA State Electricity Profiles, 2024</a></p>',
  };
  const HUD = [['548 TWh', 'generated in eight states, 2025'], ['36%', 'of it from natural gas'], ['19%', 'from solar farms']];

  // ------------------------------------------------------------------ one card per state
  const st = (id, name, gen, a, b, net, netLab, fact, extra) => ({
    lede: fact, go: id,
    stats: [[gen + ' TWh', 'electricity generated in 2025'], a, b, [net + ' TWh', netLab + ', 2024. A federal estimate, not a meter reading']],
    body: `<p><button class="btn go" data-go="${id}">Explore ${name}'s electricity &rarr;</button></p>`,
    sources: [S.e923, S[id]].concat(extra || []),
  });
  const OUT = 'more sent to other states than brought in', IN = 'more brought in from other states than sent out';
  const stateCards = {
    az: st('az', 'Arizona', '116.5', ['45%', 'from natural gas'], ['27%', 'from one nuclear plant, Palo Verde'], '19.7', OUT, 'One nuclear plant made 27% of Arizona\'s electricity in 2025. About a sixth of what Arizona generates is used in other states.'),
    ca: st('ca', 'California', '205.1', ['36%', 'from natural gas'], ['27%', 'from solar farms'], '53.4', IN, 'In 2024 California brought in more electricity from other states than any other state on this map. Solar farms made 27% of what it generated itself in 2025.'),
    co: st('co', 'Colorado', '56.6', ['32%', 'from natural gas'], ['30%', 'from wind'], '1.4', IN, 'Wind made 30% of Colorado\'s electricity in 2025 and coal 25%. In 2010 coal made 68%.', [S.hist]),
    id: st('id', 'Idaho', '20.3', ['44%', 'from dams'], ['31%', 'from natural gas'], '8.4', IN, 'Dams made 44% of the electricity generated in Idaho in 2025. In 2024 Idaho brought in 29% of its supply from other states.'),
    mt: st('mt', 'Montana', '26.7', ['36%', 'from coal, almost all at Colstrip'], ['32%', 'from dams'], '10.2', OUT, 'One coal plant, Colstrip, made a third of Montana\'s electricity in 2025. In 2024 more than a third of Montana\'s supply was used in other states.'),
    nm: st('nm', 'New Mexico', '39.4', ['36%', 'from wind'], ['27%', 'from natural gas'], '7.5', OUT, 'Wind farms made 36% of New Mexico\'s electricity in 2025, more than any other source. SunZia, the largest wind farm in the country, was finished in 2026.', [S.sunzia]),
    nv: st('nv', 'Nevada', '45.2', ['51%', 'from natural gas'], ['31%', 'from solar farms'], '2.5', OUT, 'Natural gas made half of Nevada\'s electricity in 2025 and solar farms nearly a third. Geothermal plants made more than coal.'),
    ut: st('ut', 'Utah', '38.1', ['47%', 'from coal'], ['30%', 'from natural gas'], '2.0', IN, 'Coal made 47% of Utah\'s electricity in 2025, the largest share of any state on this map. In 2010 it made 81%.', [S.hist]),
    _default: { lede: 'This state is drawn for context. The electricity map covers eight states.' },
  };

  // ------------------------------------------------------------------ a few of the largest plants
  const FEATURES = [], add = o => FEATURES.push(o);
  const go = (id, name) => `<p><button class="btn go" data-go="${id}">Explore ${name}'s electricity &rarr;</button></p>`;
  add({ id: 'paloverde', kind: 'nuclear', plant: 6008, name: 'Palo Verde Generating Station', short: 'Palo Verde', tier: 1,
    lede: 'Three reactors west of Phoenix. In 2025 only one power plant in the United States, Vogtle in Georgia, generated more electricity.',
    stats: [['31.3 TWh', 'electricity generated in 2025, 27% of all generation in Arizona']], body: go('az', 'Arizona'), sources: [S.e923] });
  add({ id: 'diablo', kind: 'nuclear', plant: 6099, name: 'Diablo Canyon Power Plant', short: 'Diablo Canyon', tier: 1,
    lede: 'California\'s only working nuclear plant, on the coast near San Luis Obispo. State law keeps it open through 2030.',
    stats: [['17.6 TWh', 'electricity generated in 2025']], body: go('ca', 'California'), sources: [S.e923, S.ans] });
  add({ id: 'colstrip', kind: 'coal', plant: 6076, name: 'Colstrip Power Plant', short: 'Colstrip', tier: 1,
    lede: 'Montana\'s largest power plant. Most of it was built to serve utilities in Washington and Oregon, over two 500-kilovolt lines.',
    stats: [['9.2 TWh', 'electricity generated in 2025, 34% of all generation in Montana']], body: go('mt', 'Montana'), sources: [S.e923] });
  add({ id: 'fourcorners', kind: 'coal', plant: 2442, name: 'Four Corners Power Plant', short: 'Four Corners', tier: 2,
    lede: 'The last coal plant running in New Mexico, on the Navajo Nation. Utilities in Arizona own most of it.',
    stats: [['8.2 TWh', 'electricity generated in 2025']], body: go('nm', 'New Mexico'), sources: [S.e923] });
  add({ id: 'intermountain', kind: 'gas', plant: 6481, name: 'Intermountain Power Project', short: 'Intermountain', tier: 2,
    lede: 'A plant near Delta, Utah, built to send power to Los Angeles over a direct-current line. Its coal units stopped in November 2025 and new gas units took over.',
    stats: [['4.8 TWh', 'electricity generated in 2025, most of it from coal'], ['488 miles', 'length of the direct-current line to Adelanto, California']], body: go('ut', 'Utah'), sources: [S.e923, S.ipa, S.wP27] });
  add({ id: 'gilariver', kind: 'gas', plant: 55306, name: 'Gila River Power Station', short: 'Gila River', tier: 2,
    lede: 'The largest gas plant in Arizona, at Gila Bend.',
    stats: [['11.0 TWh', 'electricity generated in 2025 by its four power blocks']], body: go('az', 'Arizona'), sources: [S.e923] });
  add({ id: 'sunzia', kind: 'wind', plant: 66923, name: 'SunZia Wind', short: 'SunZia Wind', tier: 1,
    lede: 'The largest wind farm in the United States, in central New Mexico. A direct-current line carries its power 550 miles to Arizona.',
    stats: [['3,021 MW', 'what the direct-current line can carry']], body: go('nm', 'New Mexico'), sources: [S.sunzia, SRC_INV] });
  add({ id: 'gemini', kind: 'solar', plant: 63352, name: 'Gemini Solar', short: 'Gemini Solar', tier: 2,
    lede: 'The solar farm that made the most electricity in Nevada in 2025, north-east of Las Vegas. Its batteries carry some of its midday output into the evening.',
    stats: [['2.2 TWh', 'electricity generated in 2025']], body: go('nv', 'Nevada'), sources: [S.e923, SRC_INV] });
  add({ id: 'geysers', kind: 'geo', plant: 286, name: 'The Geysers', short: 'The Geysers', tier: 2,
    lede: 'A field of natural steam in the mountains north of San Francisco. Its owner calls it the largest complex of geothermal plants in the world.',
    body: go('ca', 'California'), sources: [S.geysers] });
  add({ id: 'hoover', kind: 'hydro', plant: 8902, name: 'Hoover Dam', short: 'Hoover Dam', tier: 2,
    lede: 'The dam that holds Lake Mead, on the Nevada-Arizona line. Its output shrinks as the lake falls.',
    stats: [['2.7 TWh', 'electricity generated in 2025 by both sides of the dam']], body: go('nv', 'Nevada'), sources: [S.e923] });
  add({ id: 'glencanyon', kind: 'hydro', plant: 153, name: 'Glen Canyon Dam', short: 'Glen Canyon', tier: 2,
    lede: 'The dam that holds Lake Powell, in northern Arizona. In August 2026 the lake fell to a record low.',
    stats: [['2.75 TWh', 'electricity generated in 2025']], body: go('az', 'Arizona'), sources: [S.e923, ['AP via Fortune, 17 Aug 2026', 'https://fortune.com/2026/08/17/lake-powell-hydropower-shutdown-record-low/']] });
  add({ id: 'pdci', kind: 'hub', lon: -118.481, lat: 34.312, name: 'Sylmar: the Pacific DC Intertie', short: 'Pacific DC Intertie', tier: 2,
    lede: 'A direct-current line from the Columbia River in Oregon ends here in Los Angeles. Direct current loses less power over long distances than the alternating current used on the rest of the grid.',
    stats: [['846 miles', 'length of the line'], ['3,100 MW', 'power it can carry']], body: go('ca', 'California'), sources: [S.wPdci] });

  const BROWSE = [
    ['Largest plants', ['paloverde', 'diablo', 'gilariver', 'colstrip', 'fourcorners', 'intermountain']],
    ['Wind, sun, water and steam', ['sunzia', 'gemini', 'geysers', 'hoover', 'glencanyon']],
    ['The grid', ['pdci']],
  ];

  // ------------------------------------------------------------------ tour
  const TOUR = [
    { title: 'Power in eight states', text: 'Arizona, California, Colorado, Idaho, Montana, Nevada, New Mexico and Utah generated 548 terawatt-hours of electricity in 2025. Natural gas made 36% and solar farms 19%. The panel shows where it comes from and where it goes.', view: 'home', home: true, layers: ['plants', 'lines', 'closed', 'rivers'] },
    { title: 'Gas first', text: 'Gas was the largest source in Arizona, California, Colorado and Nevada. The brown dashed lines are interstate pipelines. Gila River, in Arizona, is one of the largest gas plants in the West.', box: [-120.5, 31.5, -108.5, 38.0], select: 'gilariver', layers: ['plants', 'pipes', 'rivers'] },
    { title: 'Sun by day', text: 'This is the Night view. Solar farms are faded because they make nothing after dark. They made a fifth of the eight states\' electricity in 2025, most of it in California, Arizona and Nevada.', box: [-121.0, 31.5, -110.0, 37.5], season: 'winter', select: 'gemini', layers: ['plants', 'lines'] },
    { title: 'Coal, and the plants that closed', text: 'Coal made 11% in 2025, mostly in Utah, Colorado, Montana, Arizona and New Mexico. Faded markers are coal plants that have closed. Colstrip, in Montana, made a third of that state\'s power.', view: 'home', select: 'colstrip', layers: ['plants', 'closed', 'lines'] },
    { title: 'Wind on the plains, water in the north', text: 'Wind made 11% and dams 10%. Wind farms made 36% of New Mexico\'s power, and SunZia, the largest wind farm in the country, was finished there in 2026. Dams made 44% of Idaho\'s.', box: [-110.5, 31.3, -102.0, 37.3], select: 'sunzia', layers: ['plants', 'rivers', 'lines'] },
    { title: 'Two nuclear plants', text: 'Palo Verde in Arizona and Diablo Canyon in California made 9% of the eight states\' electricity. Palo Verde alone made 31 terawatt-hours, more than all of Idaho\'s or Montana\'s power plants.', box: [-122.0, 32.0, -110.5, 37.0], select: 'paloverde', layers: ['plants', 'lines'] },
    { title: 'Moving power between states', text: 'Yellow lines carry 500 kilovolts and orange ones are direct-current lines. In 2024 Arizona sent out 19.7 terawatt-hours more than it brought in, and California brought in 53.4 terawatt-hours more than it sent out.', box: [-122.5, 32.5, -111.0, 41.5], select: 'pdci', layers: ['plants', 'lines'] },
    { title: 'Now pick a state', text: 'Each state has its own map, with its plants, utilities, users and a tour. Click a state on the map or in the panel.', view: 'home', home: true, layers: ['plants', 'lines', 'closed', 'rivers'] },
  ];

  const ABOUT = `<p style="font-size:13px">This overview shows power plants of 50 megawatts or more from the federal generator inventory for ${K.INV} (EIA-860M); each state's own map shows plants down to 1 megawatt. Each plant's output and emissions are for ${K.EY}, from EPA's eGRID, in short tons (2,000 pounds). Statewide generation for 2025 is our sum of federal plant reports (EIA-923), including the federal estimate for small plants, and matches each state's map. Sales and the flows between states are from the federal State Electricity Profiles for 2024. Lines of 345 kilovolts and above are from OpenStreetMap contributors and are drawn only around the eight states. Interstate gas pipelines are from EIA map data. The landscape is the same as on the West water map, in 12 km squares. Figures are as of November 2026 and each card links its sources.</p>`;

  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: {},
    meta: { title: 'Power in the West: an explorable map', h1: 'Power in the West', tagline: 'Where it comes from. Where it goes.', aria: 'Interactive map of electricity in the western United States. Use the lists in the side panel to browse the same information without the map.', home: 'Show the whole West' },
    layerList: [
      { id: 'plants', label: 'Power plants', icon: 'gasplant', on: true },
      { id: 'lines', label: 'Transmission', icon: 'pylon', on: true },
      { id: 'pipes', label: 'Gas pipelines', icon: 'pipe', on: false },
      { id: 'emit', label: 'CO2', icon: 'puff', on: false },
      { id: 'closed', label: 'Closed plants', icon: 'retired', on: true },
      { id: 'planned', label: 'Planned plants', icon: 'planned', on: false },
      { id: 'rivers', label: 'Rivers', icon: 'river', on: true },
    ],
    stateCards, stateLabels: true, stateHint: 'Click for its electricity',
    // at this scale draw only the larger plants, and small: more appear as you zoom in
    plantMinZ: p => p.mw >= 700 ? 0 : p.mw >= 300 ? .45 : p.mw >= 100 ? .8 : 1.3,
    plantSize: (p, z, k) => z < .45 ? (p.mw >= 1500 ? 2 : 1) : p.mw >= 400 ? k : 2,
    statesNav: { title: 'Pick a state', items: [['az', 'Arizona', 1], ['ca', 'California', 1], ['co', 'Colorado', 1], ['id', 'Idaho', 1], ['mt', 'Montana', 1], ['nv', 'Nevada', 1], ['nm', 'New Mexico', 1], ['ut', 'Utah', 1]] },
    riverLede: 'One of the West\'s rivers. Dams on them make about a tenth of the region\'s electricity.',
    exploreHint: 'Drag to pan, scroll or pinch to zoom. Click a state for its numbers, or click a power plant or line.' });
})();
