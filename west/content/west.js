/* The whole-West overview. Figures and sources: research/west_overview.md (compiled 12 Nov 2026).
   State-to-state numbers all come from one dataset (USGS water use, 2015) so they can be compared. */
(() => {
  const S = {
    usgs: ['USGS: water use in the US, 2015 (county data, summed by state)', 'https://doi.org/10.5066/F7TB15V5'],
    census: ['Census Bureau 2025 state estimates', 'https://www.census.gov/data/datasets/time-series/demo/popest/2020s-state-total.html'],
    crs: ['Congressional Research Service, Oct 2026', 'https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf'],
    weekly: ['Reclamation weekly update, 8 Nov 2026', 'https://www.usbr.gov/lc/region/g4000/weekly.pdf'],
    doi: ['Interior Department, 21 Aug 2026', 'https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations'],
    cvp: ['Congressional Research Service, Mar 2026', 'https://www.everycrsreport.com/files/2026-03-26_R45342_04a0a7041f6b24badbbcbfe23ef73abb53bffa2f.html'],
    cdec: ['California Data Exchange Center, 11 Nov 2026', 'https://cdec.water.ca.gov/reportapp/javareports?name=RES'],
    ogallala: ['USGS: High Plains aquifer changes to 2019', 'https://pubs.usgs.gov/sir/2023/5143/sir20235143.pdf'],
    gsl: ['Great Salt Lake Strike Team', 'https://gardner.utah.edu/news/great-salt-lake-ends-2025-water-year-at-third-lowest-level-on-record-as-recovery-work-continue/'],
  };
  const F = [];
  const add = o => F.push(o);

  add({ id: 'powell', kind: 'hydro', name: 'Lake Powell', lake: 'Lake Powell', lon: -111.4844, lat: 36.9375, tier: 1, zoom: .9,
    lede: 'The Upper Basin\'s savings account on the Colorado River. Water released here flows through the Grand Canyon to Lake Mead.',
    pct: 27, pctNote: '6.38 million AF, at 3,539 ft (8 Nov 2026)',
    stats: [['3,510 ft', 'the level the new rules try to protect'], ['6–7M AF', 'expected release in 2027'], ['~14 ft', 'gained from October 2026 storms', 1]],
    body: '<p>Lake Powell and Lake Mead both set record lows in 2026.</p>', sources: [S.weekly, S.doi, ['KUNC, Nov 2026', 'https://www.kunc.org/regional-news/2026-11-08/recent-rains-were-a-drop-in-the-bucket-for-colorado-river-reservoir-water']] });
  add({ id: 'leesferry', kind: 'info', name: 'Lees Ferry: where the Colorado is divided', short: 'Lees Ferry', lon: -111.588, lat: 36.865, tier: 2,
    lede: 'A 1922 compact splits the Colorado River here between four Upper Basin states and three Lower Basin states.',
    stats: [['16.4M AF', 'yearly flow the negotiators assumed'], ['16.5M AF', 'promised on paper, including Mexico'], ['12.4M AF', 'average natural flow since 2000', 1]],
    body: '<p>Colorado, Utah, Wyoming and New Mexico share the upper half by percentage: 51.75%, 23%, 14% and 11.25%. California, Arizona and Nevada hold fixed amounts of the lower half: 4.4, 2.8 and 0.3 million AF.</p>', sources: [S.crs] });
  add({ id: 'mead', kind: 'hydro', name: 'Lake Mead & Hoover Dam', short: 'Lake Mead', lake: 'Lake Mead', lon: -114.7378, lat: 36.0156, tier: 1, zoom: .9,
    lede: 'The largest reservoir in the US, and the one that sets the cuts for Arizona, California and Nevada.',
    pct: 27, pctNote: '6.95 million AF, at 1,040 ft (8 Nov 2026)',
    stats: [['1.25M AF', 'a year the three Lower Basin states give up in 2027 and 2028'], ['760,000 AF', 'of that is Arizona\'s'], ['440,000 / 50,000', 'California\'s and Nevada\'s shares of the cut', 1]],
    body: '<p>Mexico gives up another 250,000 AF a year. The Upper Basin states have no mandatory cut. Nevada has sued over the plan.</p><p><button class="btn go" data-go="az">See how the cuts land in Arizona</button></p>', sources: [S.weekly, S.doi, S.crs] });
  add({ id: 'gsl', kind: 'info', icon: 'lake', kindLabel: 'Lake', name: 'Great Salt Lake', lake: 'Great Salt Lake', lon: -112.5, lat: 41.1, tier: 1, zoom: .9,
    lede: 'A lake with no outlet, fed by rivers that farms and cities tap first. It is shrinking.',
    stats: [['4,190.0 ft', 'south arm level, 11 Nov 2026'], ['4,188.5 ft', 'record low, Nov 2022'], ['4,198 ft', 'the state\'s target for a healthy lake', 1]],
    body: '<p>Reaching the target by 2055 would take about 800,000 AF a year of extra inflow. About 400,000 AF in total was delivered from 2021 to 2025.</p>', sources: [['Utah Division of Water Resources', 'https://wre-rapps.utah.gov/GSLApp/'], S.gsl, ['Strike Team report, Jan 2026', 'https://d36oiwf74r1rap.cloudfront.net/wp-content/uploads/2026/01/GSL-Jan2026.pdf']] });
  add({ id: 'butte', kind: 'reservoir', name: 'Elephant Butte Reservoir', short: 'Elephant Butte', lon: -107.192, lat: 33.154, tier: 1, zoom: .9,
    lede: 'The Rio Grande\'s main reservoir, and the point where New Mexico delivers water owed to Texas.',
    stats: [['208,084 AF', 'held on 11 Nov 2026, roughly a tenth of capacity'], ['~1.4%', 'full in summer 2026, the lowest since 1971']],
    body: '<p>A 1938 compact divides the Rio Grande among Colorado, New Mexico and Texas. A 13-year Supreme Court fight between the states over it ended with a settlement in May 2026.</p>',
    sources: [['Reclamation', 'https://www.usbr.gov/rsvrWater/rsv40Day.html?siteid=1119'], ['Western Water, Aug 2026', 'https://www.western-water.com/2026/08/21/still-at-1-4-elephant-butte-at-lowest-level-since-1971/'], ['New Mexico Governor\'s office', 'https://www.governor.state.nm.us/2026/05/28/u-s-supreme-court-approves-rio-grande-compact-settlement-agreement-ends-13-year-inte']] });
  add({ id: 'fortpeck', kind: 'reservoir', name: 'Fort Peck Lake', lake: 'Fort Peck Lake', lon: -106.416, lat: 48.003, tier: 1, zoom: .9,
    lede: 'One of the largest reservoirs in the country, on the Missouri River in Montana.',
    stats: [['~18.7M AF', 'total capacity'], ['63%', 'of average: 2026 runoff forecast for the upper Missouri basin']],
    body: '<p>Montana is almost entirely a river-water state: 98% of its withdrawals come from surface water, and 96.5% go to irrigation.</p>', sources: [['Army Corps of Engineers release, 9 Nov 2026 (via mirror)', 'https://www.defconlevel.com/alert/2026-11-09-u-s-army-corps-of-engineers-northwestern-division-gavins-point-dam-releases-to-be-reduced-to-fall-water-supply-rate'], S.usgs] });
  add({ id: 'shasta', kind: 'reservoir', name: 'Shasta Lake', lon: -122.419, lat: 40.719, tier: 2,
    lede: 'California\'s largest reservoir, at the head of the federal Central Valley Project.',
    pct: 49, pctNote: '2.25 million AF of 4.55 million (11 Nov 2026), 92% of average for the date',
    stats: [['7M AF', 'delivered by the Central Valley Project in an average year'], ['3M+ acres', 'of farmland served']], sources: [S.cdec, S.cvp] });
  add({ id: 'oroville', kind: 'reservoir', name: 'Lake Oroville', lon: -121.486, lat: 39.539, tier: 2,
    lede: 'The main reservoir of California\'s State Water Project, which sends northern water as far as San Diego.',
    pct: 42, pctNote: '1.44 million AF of 3.42 million (11 Nov 2026), 80% of average for the date',
    stats: [['27M', 'people get some water from the project'], ['45%', 'of contracted water delivered in 2026']],
    sources: [S.cdec, S.cvp, ['California Department of Water Resources', 'https://water.ca.gov/News/News-Releases/2026/May-2026/State-Water-Project-Allocation-Increases-Heading-into-Summer-Months']] });
  add({ id: 'delta', kind: 'pump', name: 'Sacramento–San Joaquin Delta', short: 'The Delta', lon: -121.6, lat: 38.05, tier: 1, zoom: 1,
    lede: 'The hub of California\'s plumbing. Two sets of giant pumps here lift northern river water into canals headed south.',
    stats: [['4.30M AF', 'pumped south in 2024'], ['6.59M AF', 'record year, 2011']],
    body: '<p>How much can be pumped without harming the Delta\'s fish is one of the longest-running water fights in the country.</p>', sources: [S.cvp] });
  add({ id: 'snakeplain', kind: 'well', name: 'Eastern Snake Plain Aquifer', short: 'Snake Plain aquifer', lon: -113.4, lat: 43.2, tier: 2,
    lede: 'Idaho withdraws more water than any state on this map except California, nearly all of it for farms along the Snake River.',
    stats: [['19.9M AF', 'withdrawn in Idaho per year (2015)'], ['86%', 'for irrigation, on 3.8 million acres'], ['14M+ AF', 'lost from the aquifer since the early 1950s', 1]],
    body: '<p>About 600,000 AF of that loss came in water year 2026 alone.</p>', sources: [S.usgs, ['Boise State Public Radio, Aug 2026', 'https://www.boisestatepublicradio.org/environment/2026-08-26/idaho-drought-eastern-snake-plain-aquifer']] });
  add({ id: 'ogallala', kind: 'well', name: 'Ogallala Aquifer', lon: -102.4, lat: 40.0, tier: 2,
    lede: 'The aquifer under the High Plains, pumped for irrigation from South Dakota to Texas. It refills far more slowly than it is drawn down.',
    stats: [['286M AF', 'lost from the whole aquifer, across eight states, since about 1950'], ['18.3M AF', 'of that loss was under Colorado'], ['11.4M AF', 'of that loss was under New Mexico']],
    body: '<p>For scale, the 18.3 million AF lost under Colorado is nearly three times what Lake Powell holds today.</p>', sources: [S.ogallala] });
  add({ id: 'klamath', kind: 'info', name: 'Klamath River dam removals', short: 'Klamath dams removed', lon: -122.435, lat: 41.934, tier: 2,
    lede: 'Four hydropower dams here were taken out by 2024, the largest dam removal in US history.',
    stats: [['400+ mi', 'of salmon habitat reopened'], ['20,000+', 'Chinook swam upstream in the two years after']],
    sources: [['NOAA Fisheries', 'https://www.fisheries.noaa.gov/feature-story/worlds-biggest-dam-removal-project-open-420-miles-salmon-habitat-fall'], ['Inside Climate News, Aug 2026', 'https://insideclimatenews.org/news/27082026/salmon-return-to-klamath-river-after-dam-removals/']] });
  add({ id: 'centralvalley', kind: 'farm', name: 'California\'s Central Valley', short: 'Central Valley', lon: -120.2, lat: 36.6, tier: 1, zoom: .8,
    lede: 'The most productive farmland in the country, watered by two canal systems and by wells.',
    stats: [['9.3M', 'irrigated acres in California (2015)'], ['28.7M AF', 'withdrawn statewide per year, the most of any state here'], ['74%', 'of that goes to irrigation']],
    body: '<p>In the 2015 drought year, two thirds of California\'s withdrawals were groundwater, as pumping replaced missing river deliveries. That share is lower in wet years.</p>', sources: [S.usgs, S.cvp] });

  // one card per state; `go` marks the states that have their own detailed map
  const st = (pop, maf, sw, irr, ps, acres, fact, src, go, name) => ({
    lede: fact, go,
    stats: [[maf + 'M AF', 'fresh water withdrawn per year (2015)'], [pop, 'people (2025)'], [irr + '%', 'of withdrawals go to irrigation'], [ps + '%', 'go to public water supply'], [sw + '% / ' + (100 - sw) + '%', 'from rivers and lakes / from wells'], [acres, 'irrigated acres']],
    body: (go ? `<p><button class="btn go" data-go="${go}">Explore ${name}'s water &rarr;</button></p>` : `<p><i>A detailed map of ${name} is on the way.</i></p>`)
      + '<div class="gcap">Withdrawals count water each time it is taken from a river or well. Water that runs off a field and is used again downstream is counted twice, which raises the totals for headwater states.</div>',
    sources: [S.usgs, S.census].concat(src ? [src] : []),
  });
  const stateCards = {
    az: st('7.6M', '6.7', 54, 76, 20, '1.0M', 'Arizona takes the largest cut under the new Colorado River rules: 760,000 AF a year in 2027 and 2028, about 27% of its share.', S.doi, 'az', 'Arizona'),
    co: st('6.0M', '11.6', 85, 87, 8, '3.0M', 'Every major river in Colorado flows out of the state. Most of the water falls west of the Continental Divide, and most of the people live east of it.', null, 'co', 'Colorado'),
    ca: st('39.4M', '28.7', 33, 74, 20, '9.3M', 'Two giant canal systems move northern California\'s water south through the Delta to farms and cities.', S.cvp, 'ca', 'California'),
    nm: st('2.1M', '3.2', 52, 85, 9, '0.8M', 'Elephant Butte, the Rio Grande\'s main reservoir, fell to about 1.4% full in summer 2026, its lowest since 1971.', ['Western Water, Aug 2026', 'https://www.western-water.com/2026/08/21/still-at-1-4-elephant-butte-at-lowest-level-since-1971/'], 'nm', 'New Mexico'),
    ut: st('3.5M', '4.3', 73, 78, 16, '1.3M', 'Great Salt Lake stood 1.5 feet above its record low in November 2026, and 8 feet below the level the state calls healthy.', S.gsl, 'ut', 'Utah'),
    id: st('2.0M', '19.9', 70, 86, 2, '3.8M', 'Idaho withdraws more water than any state here except California, almost all of it to irrigate the Snake River Plain.', null, 'id', 'Idaho'),
    mt: st('1.1M', '11.0', 98, 97, 2, '2.5M', 'Montana runs almost entirely on river water, and nearly all of it goes to irrigation.', null, null, 'Montana'),
    _default: { lede: 'This state is not part of the map yet.' },
  };
  // the 2015 groundwater share for California reflects a drought year; say so wherever it is shown
  stateCards.ca.stats[4][1] = 'from rivers and lakes / from wells (2015 was a drought year)';

  window.MAPCONTENT = {
    meta: { title: 'Water in the West: an explorable map', h1: 'Water in the West', tagline: 'Where it comes from. Where it goes.', aria: 'Interactive map of water in the western United States. Use the lists in the side panel to browse the same information without the map.', home: 'Show the whole West' },
    features: F, stateCards, stateLabels: true,
    sprites: { lake: ['..bbbbbb..', '.bBbbbbBb.', 'bbbbBbbbbb', '.bbBbbbbb.', '..bbbbbb..'] },   // a quiet marker for a lake that is the subject itself
    kinds: { well: ['farms', 'well', 'Groundwater'], pump: ['reservoirs', 'pump', 'Pumping hub'], info: ['rivers', 'info', 'Good to know'] },
    layers: { canals: false, ground: false, golf: false, tribal: false, industry: false, cities: false },
    riverStyle: {
      Colorado: { w: 5 }, Columbia: { w: 7 }, Snake: { w: 4.5 }, Missouri: { w: 4.5 }, Yellowstone: { w: 3 }, 'Rio Grande': { w: 3 }, Sacramento: { w: 4 }, 'San Joaquin': { w: 2.4 },
      Green: { w: 3 }, Arkansas: { w: 2.4 }, 'South Platte': { w: 2 }, 'North Platte': { w: 2 }, 'San Juan': { w: 2 }, Gila: { w: 1.6 }, Pecos: { w: 1.6 }, Klamath: { w: 2.4 }, 'Clark Fork': { w: 3 },
      Bear: { w: 1.6 }, Humboldt: { w: 1.4 }, Salmon: { w: 2.6 }, Feather: { w: 2 }, Flathead: { w: 2.4 }, Bighorn: { w: 2 }, Willamette: { w: 3 }, Canadian: { w: 1.4 },
    },
    rivers: {
      Colorado: { lede: 'About 40 million people in seven states and Mexico depend on this river. It was divided up in 1922 on the assumption that it carried a third more water than it does now.', stats: [['14.6M AF', 'average natural flow a year, 1906–2024'], ['12.4M AF', 'average since 2000'], ['16.5M AF', 'promised on paper'], ['~70%', 'of its use is irrigation']], sources: [S.crs] },
      Columbia: { lede: 'By far the biggest river in the West: about nine times the Colorado\'s natural flow.', stats: [['~139M AF', 'a year at The Dalles, Oregon']], body: '<p>The Snake River, its largest tributary, supplies about a quarter of its spring and summer runoff.</p>', sources: [['National Academies', 'https://www.nationalacademies.org/read/10962/chapter/5'], ['Northwest Power and Conservation Council', 'https://www.nwcouncil.org/news/2025/05/30/2025-columbia-basin-water-supply-outlook/']] },
      Snake: { lede: 'Idaho\'s river. It waters 3.8 million irrigated acres before joining the Columbia.', stats: [['17.1M AF', 'withdrawn for irrigation in Idaho per year (2015)']], sources: [S.usgs] },
      'Rio Grande': { lede: 'Shared by Colorado, New Mexico, Texas and Mexico under a 1938 compact and a 1906 treaty.', body: '<p><button class="btn" data-feat="butte">Elephant Butte Reservoir</button></p>', sources: [S.crs] },
      Missouri: { lede: 'The longest river in the US starts in Montana\'s mountains. Its 2026 runoff above Sioux City was forecast at 63% of average.', sources: [['Army Corps of Engineers release, 9 Nov 2026 (via mirror)', 'https://www.defconlevel.com/alert/2026-11-09-u-s-army-corps-of-engineers-northwestern-division-gavins-point-dam-releases-to-be-reduced-to-fall-water-supply-rate']] },
      Sacramento: { lede: 'California\'s largest river. Much of its water is pumped out of the Delta and sent south.', body: '<p><button class="btn" data-feat="delta">The Delta</button></p>', sources: [S.cvp] },
      Klamath: { lede: 'Four dams on this river were removed by 2024.', body: '<p><button class="btn" data-feat="klamath">The Klamath dam removals</button></p>', sources: [] },
      _default: { lede: 'One of the rivers that carry mountain snowmelt to the farms and cities of the West.', sources: [] },
    },
    canals: { _default: { lede: '' } }, amas: { _default: { lede: '' } }, tribes: { _default: { lede: '' } },
    hud: [['97.5M AF', 'withdrawn per year, nine states'], ['65.7M', 'people'], ['83%', 'goes to irrigation']],
    budget: {
      title: 'The West runs on moved water',
      lede: 'Nine western states withdraw about 97 million acre-feet of fresh water a year. Most of it starts as mountain snow, and most of it ends up on a farm field.',
      perDrop: 1000000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons, a year of water for about three homes.',
      sources: [
        { id: 'surface', label: 'Rivers and lakes', pct: 64, af: 62.4e6, color: 'var(--c-colorado)', layer: 'rivers,reservoirs', feat: 'mead', note: 'Mostly snowmelt, stored behind dams and moved by canal.' },
        { id: 'ground', label: 'Groundwater', pct: 36, af: 35.1e6, color: 'var(--c-ground)', layer: 'farms', feat: 'ogallala', note: 'Pumped from wells. The share was unusually high in 2015 because California was in drought.' },
      ],
      uses: [
        { id: 'ag', label: 'Irrigation', pct: 83, af: 80.9e6, color: 'var(--c-ag)', layer: 'farms', feat: 'centralvalley', note: 'Crops and pasture on 23.9 million irrigated acres. This category also includes golf courses and parks.' },
        { id: 'muni', label: 'Public water supply', pct: 10, af: 10.2e6, color: 'var(--c-muni)', note: 'Homes and businesses, for 65.7 million people.' },
        { id: 'ind', label: 'Everything else', pct: 7, af: 6.4e6, color: 'var(--c-ind)', note: 'Power plants, mines, factories, livestock and fish farms.' },
      ],
      body: `<div class="note">All figures here are from the US Geological Survey's 2015 water-use data, the newest complete count that covers every state the same way. The nine states are the seven on this map plus Nevada and Wyoming. State agencies count differently, so each state's own map uses that state's numbers.</div>
        <div class="note hot"><b>What is changing:</b> Lake Powell and Lake Mead, the two biggest reservoirs in the country, are each 27% full. From 2027, Arizona, California and Nevada together give up 1.25 million AF of Colorado River water a year.</div>`,
    },
    statesNav: { title: 'Pick a state', items: [['az', 'Arizona', 1], ['co', 'Colorado', 1], ['ca', 'California', 1], ['nm', 'New Mexico', 1], ['ut', 'Utah', 1], ['id', 'Idaho', 1], ['mt', 'Montana', 0]] },
    exploreHint: 'Drag to pan, scroll or pinch to zoom. Click a state for its numbers, or click a dam, lake or river.',
    browse: [
      ['The Colorado River', ['powell', 'leesferry', 'mead']],
      ['Other rivers and lakes', ['butte', 'fortpeck', 'gsl', 'klamath']],
      ['California', ['shasta', 'oroville', 'delta', 'centralvalley']],
      ['Groundwater', ['snakeplain', 'ogallala']],
    ],
    riverLabels: [['COLORADO R.', -110.6, 37.75, .3, -40], ['COLUMBIA R.', -119.6, 46.25, .3, 0], ['SNAKE R.', -115.4, 42.75, .3, 10], ['MISSOURI R.', -109.5, 47.85, .3, 0], ['RIO GRANDE', -106.55, 34.9, .3, 80], ['SACRAMENTO R.', -122.35, 39.6, .45, 80], ['GREEN R.', -110.3, 39.6, .45, 80], ['YELLOWSTONE R.', -107.2, 46.1, .45, -20], ['ARKANSAS R.', -103.2, 38.25, .45, 0]],
    neighbors: [['CANADA', -111.5, 49.25, 0], ['MEXICO', -110.2, 31.2, 0], ['PACIFIC OCEAN', -123.6, 35.0, -70]],
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 12 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rainfall (PRISM 1991–2020 normals). Rivers and lakes are from Natural Earth; boundaries from the Census Bureau. River line widths are schematic. Nevada, Wyoming, Oregon and Washington are drawn for context only. Figures are as of November 2026 and each card links its sources.</p>`,
    legend: { rain: 'From under 5 inches a year in the deserts to over 100 in the coastal mountains. PRISM 1991–2020 normals.', ground: '', snow: 'Where snow usually accumulates (drawn from elevation; not a live snow map).' },
    tour: [
      { title: 'A dry region that moves its water', text: 'Nine western states withdraw about 97 million acre-feet of water a year. Little of it is used where it falls. The panel shows where it comes from and where it goes.', view: 'home', home: true },
      { title: 'It starts as snow', text: 'Most of the West\'s rivers begin as winter snow on a few mountain ranges: the Rockies, the Sierra Nevada, the Cascades. The white areas are where snow usually piles up.', view: 'home', season: 'winter', layers: ['rivers', 'reservoirs'] },
      { title: 'A river promised twice over', text: 'The Colorado was divided in 1922 on the assumption that it carried 16.4 million acre-feet a year. Since 2000 it has averaged 12.4 million. Lees Ferry is the dividing point: the four states upstream share one part of the river, and the three states downstream share the other.', lon: -111.2, lat: 37.4, zoom: .55, select: 'leesferry', layers: ['rivers', 'reservoirs', 'farms'] },
      { title: 'The reservoirs show the gap', text: 'Lake Powell and Lake Mead are each 27% full. From 2027 Arizona, California and Nevada give up 1.25 million acre-feet a year between them.', lon: -113.1, lat: 36.4, zoom: .6, select: 'mead', layers: ['rivers', 'reservoirs', 'farms'] },
      { title: 'Most of it goes to farms', text: 'Irrigation takes about 83% of the water withdrawn in these states. California\'s Central Valley alone holds more than a third of the irrigated land.', lon: -120.6, lat: 37.4, zoom: .5, select: 'centralvalley', layers: ['rivers', 'reservoirs', 'farms'] },
      { title: 'When rivers run short, pumps run', text: 'More than a third of the water comes from wells. Under the High Plains, the Ogallala Aquifer has lost 286 million acre-feet since about 1950. Under Idaho, the Snake Plain aquifer has lost more than 14 million.', lon: -108, lat: 41.5, zoom: .3, select: 'ogallala', layers: ['rivers', 'reservoirs', 'farms'] },
      { title: 'Some of it is being given back', text: 'Four dams on the Klamath River came out by 2024, and salmon returned within two years. Utah is trying to find 800,000 acre-feet a year to refill Great Salt Lake.', lon: -117.5, lat: 41.6, zoom: .32, select: 'gsl', layers: ['rivers', 'reservoirs', 'farms'] },
      { title: 'Now pick a state', text: 'Each state has its own story. Arizona, California, Colorado, Idaho, New Mexico and Utah are ready to explore, and Montana is on the way. Click a state on the map or in the panel.', view: 'home', home: true },
    ],
    terrain: {
      snowLine: (lat, p) => 2400 + (40 - lat) * 115 - Math.min(1100, Math.max(0, p - 25) * 28),   // wetter ranges (Sierra, Cascades) hold snow lower down alpine: 3400, saguaro: (lon, lat, e) => e < 1150 && lat < 34.9 && lat > 31.3 && lon > -114.3 && lon < -109.5, pivot: () => false,
      redrock: (lon, lat, e, cl) => cl((38.9 - lat) / .8, 0, 1) * cl((lat - 34.7) / .6, 0, 1) * cl((lon + 113.8) / .6, 0, 1) * cl((-107.8 - lon) / .6, 0, 1) * cl((e - 1100) / 400, 0, 1) * cl((2300 - e) / 300, 0, 1),
    },
  };
})();
