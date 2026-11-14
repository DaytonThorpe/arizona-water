/* Montana Power: content for the electricity map.
   The map engine (west/js/app.js) and the machinery in power/content/kit.js are shared. This file supplies the words.
   Plant numbers (capacity, 2023 output, emissions) are not typed here: they come from the baked dataset in
   power/data/mt.js (EIA-860M inventory and EPA eGRID). research/montana_power.md has the fact sheet and verification log. */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'NORTHWESTERN ENERGY LLC - (MT)': ['NorthWestern Energy', 'NorthWestern', 'iou'],
    'MONTANA-DAKOTA UTILITIES CO': ['Montana-Dakota Utilities', 'Montana-Dakota', 'iou'],
    'USBIA-MISSION VALLEY POWER': ['Mission Valley Power', 'Mission Valley', 'federal'],
    'FLATHEAD ELECTRIC COOP INC': ['Flathead Electric Cooperative', 'Flathead Electric', 'coop'],
    'FERGUS ELECTRIC COOP, INC': ['Fergus Electric Cooperative', 'Fergus', 'coop'],
    'MCCONE ELECTRIC COOP INC': ['McCone Electric Cooperative', 'McCone', 'coop'],
    'HILL COUNTY ELECTRIC COOP, INC': ['Hill County Electric Cooperative', 'Hill County', 'coop'],
    'TONGUE RIVER ELECTRIC COOP INC': ['Tongue River Electric Cooperative', 'Tongue River', 'coop'],
    'VIGILANTE ELECTRIC COOP, INC': ['Vigilante Electric Cooperative', 'Vigilante', 'coop'],
    'BIG FLAT ELECTRIC COOP INC': ['Big Flat Electric Cooperative', 'Big Flat', 'coop'],
    'SUN RIVER ELECTRIC COOP, INC': ['Sun River Electric Cooperative', 'Sun River', 'coop'],
    'NORVAL ELECTRIC COOPERATIVE, INC': ['NorVal Electric Cooperative', 'NorVal', 'coop'],
    'SOUTHEAST ELECTRIC COOP, INC': ['Southeast Electric Cooperative', 'Southeast', 'coop'],
    'SHERIDAN ELECTRIC COOP, INC': ['Sheridan Electric Cooperative', 'Sheridan', 'coop'],
    'MID-YELLOWSTONE ELEC COOP, INC': ['Mid-Yellowstone Electric Cooperative', 'Mid-Yellowstone', 'coop'],
    'MISSOULA ELECTRIC COOP, INC': ['Missoula Electric Cooperative', 'Missoula Electric', 'coop'],
    'GLACIER ELECTRIC COOP, INC': ['Glacier Electric Cooperative', 'Glacier Electric', 'coop'],
    'YELLOWSTONE VALLEY ELEC CO-OP': ['Yellowstone Valley Electric Cooperative', 'Yellowstone Valley', 'coop'],
    'BEARTOOTH ELECTRIC COOP, INC': ['Beartooth Electric Cooperative', 'Beartooth', 'coop'],
    'BIG HORN COUNTY ELEC COOP, INC': ['Big Horn County Electric Cooperative', 'Big Horn', 'coop'],
    'PARK ELECTRIC COOP INC': ['Park Electric Cooperative', 'Park Electric', 'coop'],
    'MARIAS RIVER ELECTRIC COOP INC': ['Marias River Electric Cooperative', 'Marias River', 'coop'],
    'LOWER YELLOWSTONE R E A, INC': ['Lower Yellowstone Rural Electric Association', 'Lower Yellowstone', 'coop'],
    'NORTHERN LIGHTS, INC': ['Northern Lights', 'Northern Lights', 'coop'],
    'RAVALLI COUNTY ELEC COOP, INC': ['Ravalli Electric Cooperative', 'Ravalli', 'coop'],
    'LINCOLN ELECTRIC COOP, INC': ['Lincoln Electric Cooperative', 'Lincoln', 'coop'],
  };
  // Left out on purpose: the Western Area Power Administration and the Bonneville Power Administration. The source draws them as
  // very large areas, but they sell wholesale power to utilities. Cards for the federal dams explain them.
  const K = window.POWERKIT.begin({ id: 'mt', st: 'MT', name: 'Montana', util: UTIL, bigUtils: ['NorthWestern', 'Montana-Dakota', 'Flathead Electric'],
    lineLede: { '500': 'The backbone of the grid. Montana\'s 500-kilovolt lines form one corridor. It runs from the Colstrip coal plant west through Broadview, Garrison and Taft toward Washington and Idaho.',
      '230': 'A regional line. Lines at 230 kilovolts link Montana\'s dams, cities and large substations.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. Gas makes about 5% of Montana\'s electricity, in plants built on or near lines like this one.' });
  const { SRC_INV, SRC_EGRID } = K;

  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility sales data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA Montana Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/montana/'],
    inv: SRC_INV,
    coal: ['EIA Annual Coal Report, 2024', 'https://www.eia.gov/coal/annual/'],
    refin: ['EIA Refinery Capacity Report, 1 Jan 2026', 'https://www.eia.gov/petroleum/refinerycapacity/'],
    leg: ['Montana Legislative Fiscal Division: energy report, 2023', 'https://leg.mt.gov/content/Publications/fiscal/2025-Biennium/Special-Topics/Energy/Coal-Fire-Generation-2023.pdf'],
    legGas: ['Montana Legislative Fiscal Division: energy report, 2023', 'https://leg.mt.gov/content/Publications/fiscal/2025-Biennium/Special-Topics/Energy/Natural-Gas-Generation-2023.pdf'],
    legWind: ['Montana Legislative Fiscal Division: energy report, 2023', 'https://leg.mt.gov/content/Publications/fiscal/2025-Biennium/Special-Topics/Energy/Wind-Generation-2023.pdf'],
    deq04: ['Montana DEQ: Electricity Supply and Demand in Montana, 2004', 'https://archive.legmt.gov/content/publications/Environmental/2004deq_energy_report/electricity_text.pdf'],
    nweCol: ['NorthWestern Energy: the Colstrip plant', 'https://northwesternenergy.com/clean-energy/where-does-your-energy-come-from/electric-generation/colstrip-power-plant'],
    nweTx: ['NorthWestern Energy: transmission system', 'https://northwesternenergy.com/clean-energy/where-does-your-energy-come-from/electric-transmission'],
    nweDc: ['NorthWestern Energy: data centers', 'https://northwesternenergy.com/in-your-community/economic-development/data-centers-and-montanas-energy-future'],
    merger: ['Daily Montanan, 10 Nov 2026', 'https://dailymontanan.com/?p=40141'],
    mats: ['Montana Public Radio, 20 Feb 2026', 'https://www.mtpr.org/montana-news/2026-02-20/epa-repeals-air-filtration-requirements-for-power-plants'],
    gov: ['Montana Governor\'s Office, 20 Feb 2026', 'https://news.mt.gov/Governors-Office/Gov-Gianforte-Statement-on-EPA-Reversal-of-Biden-Era-Anti-Coal-Rule'],
    ash: ['MTN News (KPAX): regulators order cleanup of Colstrip ash ponds', 'https://www.kpax.com/news/montana-news/montana-regulators-order-cleanup-of-colstrip-ash-ponds'],
    laurel: ['MTN News (KPAX): Supreme Court upholds Laurel gas plant permit', 'https://www.kpax.com/news/montana-news/montana-supreme-court-upholds-laurel-gas-plant-permit-orders-wider-review'],
    laurel2: ['Earthjustice, 29 Sep 2025', 'https://earthjustice.org/press/2025/groups-challenge-montanas-second-rubberstamp-of-methane-gas-plant-near-laurel'],
    held: ['Grist, 3 Jan 2025', 'https://grist.org/regulation/held-v-montana-youth-climate-lawsuit-supreme-court-decision/'],
    held2: ['MTN News (KPAX): Supreme Court upholds Held v. Montana', 'https://www.kpax.com/news/mt-supreme-court-upholds-held-v-montana-climate-case-ruling'],
    spring: ['US Department of the Interior, 13 Mar 2025', 'https://www.doi.gov/pressreleases/interior-advances-energy-independence-spring-creek-mine-expansion-approval'],
    bull: ['US Department of the Interior, 6 Jun 2025', 'https://www.doi.gov/pressreleases/interior-approves-bull-mountains-mining-plan-modification'],
    decker: ['AP via East Idaho News, 6 Feb 2021', 'https://www.eastidahonews.com/?p=469030'],
    dams: ['Power Engineering, 18 Nov 2014', 'https://www.power-eng.com/renewables/hydropower/northwestern-energy-finalizes-acquisition-of-ppl-montana-s-hydroelectric-facilities/'],
    kerr: ['Renewable Energy World, 18 Sep 2015', 'https://www.renewableenergyworld.com/?p=728921472'],
    water: ['Montana water map: sources for dams and reservoirs', 'https://water.howto115.com/index.html?s=mt'],
    clear: ['Montana Governor\'s Office, 20 Sep 2024', 'https://news.mt.gov/Governors-Office/Governor_Gianforte_Celebrates_Nearly_1_Billion_Energy_Investment_in_Montana'],
    beaver: ['Puget Sound Energy, 19 Aug 2025', 'https://www.pse.com/en/press-release/details/Puget-Sound-Energys-Beaver-Creek-Wind-Farm-now-operational'],
    npc: ['US Department of Energy: North Plains Connector', 'https://www.energy.gov/oe/articles/energy-department-announces-major-milestone-north-plains-connector-bridging-eastern-and'],
    npcDeq: ['Montana DEQ, 28 Aug 2026', 'https://deq.mt.gov/News/pressrelease-folder/NPC-Final-EIS'],
    ties: ['Niskanen Center, June 2026', 'https://www.niskanencenter.org/boosting-reliability-how-hvdc-back-to-backs-improve-power-sharing-between-grids/'],
    matl: ['BHE Canada: Montana Alberta Tie Line', 'https://bhe-canada.ca/?p=390'],
    fed: ['Federal Reserve Bank of Minneapolis, Sept 2005', 'https://www.minneapolisfed.org/article/2005/lighting-up-big-sky-dereg-style'],
    dive: ['Utility Dive, 21 Oct 2025', 'https://www.utilitydive.com/news/northwestern-large-load-data-center-tariff-montana/803334/'],
    irp: ['Parsons Behle &amp; Latimer: NorthWestern\'s 2026 plan and large-load rule', 'https://parsonsbehle.com/insights/northwestern-energys-2026-irp-and-new-large-load-tariff-rule-attempt-to-establish-montanas-data-center-energy-permitting-framework'],
    mtprDc: ['Montana Public Radio, 18 Nov 2025', 'https://www.mtpr.org/montana-news/2025-11-18/data-center-power-needs-could-mean-higher-costs-for-northwestern-customers'],
    cfac: ['EPA, 6 Jul 2026', 'https://www.epa.gov/newsreleases/columbia-falls-aluminum-corporation-llc-agrees-57-million-cleanup-former-smelter-site'],
    still: ['MTN News (KXLF), Feb 2026', 'https://www.kxlf.com/news/montana-news/daines-tours-stillwater-mine-as-tariff-on-russian-palladium-boosts-outlook-on-industry'],
    coops: ['Montana Electric Cooperatives\' Association', 'https://www.mtco-ops.com/'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
    hifld: ['Service territories: HIFLD / Oak Ridge National Laboratory', 'https://hifld-geoplatform.hub.arcgis.com/'],
    hifldLines: ['HIFLD / Oak Ridge National Laboratory: transmission lines', 'https://hifld-geoplatform.hub.arcgis.com/'],
  };
  const TWH = 1e6;
  const BUDGET = {
    title: 'Montana generated 26.7 terawatt-hours of electricity in 2025',
    lede: 'One coal plant, Colstrip, made a third of it. Dams made almost as much, and wind farms made nearly a quarter. More than a third of Montana\'s supply is used in other states.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: TWH / 4, shape: 'bolt', unitLine: 'Each bolt = a quarter of a terawatt-hour (0.25 TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour (TWh) is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is 2025. The second is 2024, the latest year for which the federal government has published where the power went.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'coal', label: 'Coal', pct: 36.0, af: 9.62 * TWH, color: '#5c5a66', layer: 'plants,closed,pipes', feat: 'colstrip', note: 'Almost all from one plant, Colstrip, which made 9.2 TWh. In 2010 coal made 18.6 TWh, or 62% of Montana\'s electricity.' },
      { id: 'hydro', label: 'Hydropower', pct: 31.6, af: 8.44 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'greatfalls', note: 'Dams on the Kootenai, Clark Fork, Flathead and Missouri rivers. Output peaks in May and June, when the snow melts.' },
      { id: 'wind', label: 'Wind', pct: 23.3, af: 6.23 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'clearwater', note: 'Up from 0.9 TWh in 2010. Wind farms make the most in winter. Several of the largest are owned by or sell to utilities in Washington and Oregon.' },
      { id: 'gas', label: 'Natural gas', pct: 4.9, af: 1.32 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'davegates', note: 'A few plants that run when demand is high or when the wind drops. They burned 12.6 billion cubic feet of gas in 2025.' },
      { id: 'solar', label: 'Solar farms', pct: 1.3, af: 0.35 * TWH, color: '#f2c230', layer: 'plants', feat: 'apexsolar', note: 'Two 80 MW solar farms opened in 2023. Rooftop panels are not counted here.' },
      { id: 'other', label: 'Petroleum coke, waste heat and wood', pct: 2.9, af: 0.77 * TWH, color: '#7b8f9b', layer: 'plants', feat: 'yellowstoneenergy', note: 'A plant in Billings that burns petroleum coke, a solid left over when crude oil is refined, made 0.47 TWh. Two small plants near Culbertson that make electricity from heat that would otherwise be thrown away made 0.26 TWh. A sawmill plant, a landfill plant and a refinery generator made 0.04 TWh.' },
    ],
    uses: [
      { id: 'export', label: 'Sent to other states', pct: 37.5, af: 10.20 * TWH, color: '#eb6834', layer: 'lines', feat: 'colstriplines', note: 'What is left after Montana\'s own use, losses and trade with Canada. It is a net figure that the federal government calculates and does not meter. In 2010 it was 14.6 TWh.' },
      { id: 'homes', label: 'Homes', pct: 20.9, af: 5.70 * TWH, color: '#c8442e', layer: 'cities', feat: 'billings', note: 'Sold to 557,000 households in 2024. Demand in Montana is highest in winter cold.' },
      { id: 'biz', label: 'Businesses', pct: 18.5, af: 5.03 * TWH, color: '#3f8f46', layer: 'cities', feat: 'butte', note: 'Shops, offices, schools and other commercial customers.' },
      { id: 'ind', label: 'Industry', pct: 17.7, af: 4.83 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'stillwater', note: 'Refineries, mines, mills and pipelines. Many large customers buy their power from a supplier other than their utility.' },
      { id: 'loss', label: 'Lost on the wires', pct: 2.7, af: 0.73 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'canada', label: 'Sent to Canada', pct: 2.2, af: 0.59 * TWH, color: '#6250d6', layer: 'lines', feat: 'matl', note: 'Montana also took in 0.36 TWh from Canada in 2024, so the net flow north was 0.23 TWh.' },
      { id: 'misc', tiny: true, label: 'Used at plants or not accounted for', af: 0.15 * TWH, color: '#5c5a66', val: '0.5% &middot; 0.15 TWh', note: 'Power that plant owners used on site without selling it, plus an amount the federal balance could not assign.' },
    ],
    body: '<p class="gcap">2025: total 26.73 TWh from plants of 1 megawatt or more (our sum of federal plant reports). 2024: supply of 27.24 TWh, made up of 26.87 TWh generated in Montana and 0.36 TWh from Canada. Sources: <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/montana/" target="_blank" rel="noopener">EIA Montana Electricity Profile, 2024</a></p>',
  };
  const HUD = [['26.7 TWh', 'electricity generated in 2025'], ['34%', 'of it from one coal plant, Colstrip'], ['37%', 'of supply sent to other states, 2024']];
  const ABOUT = K.aboutStd('Where a card gives 2025 output or fuel deliveries, the figure is our sum of federal plant reports (EIA-923). The source draws the two federal power agencies (Bonneville and Western) as very large areas; they sell wholesale power and are left off the Utilities layer. Markers for mines, the closed smelter and proposed lines are approximate. Parts of Idaho, Wyoming and the Dakotas are inside the map frame, and their plants can be clicked.');
  const FEATURES = [], BROWSE = [], TOUR = [], AREAS = {}, PIPECARDS = {}, LINECARDS = [];
  const add = o => FEATURES.push(o);

  // ----------------------------------------------------------------- coal
  add({ id: 'colstrip', kind: 'coal', plant: 6076, name: 'Colstrip power plant', short: 'Colstrip', tier: 1,
    lede: 'Montana\'s largest power plant. Its two remaining units burn coal dug next door, and most of the plant was built to serve utilities in Washington and Oregon.',
    stats: [['9.17 TWh', 'electricity generated in 2025, 34% of all generation in Montana'], ['55%', 'share owned by NorthWestern Energy since 1 January 2026. It was 15% before'], ['5.74M tons', 'coal received in 2025, all from the Rosebud Mine by conveyor belt'], ['2020', 'year the two oldest units shut. Units 3 and 4, from 1984 and 1986, still run']],
    body: '<p>Washington and Oregon have passed laws that push their utilities out of coal. On 1 January 2026 Puget Sound Energy and Avista handed their shares to NorthWestern Energy at no cost. They keep their part of the cleanup and closing costs. The other owners are Portland General Electric (20%), Talen (15%), which runs the plant, and PacifiCorp (10%).</p><p>In 2024 the EPA tightened its limits on toxic metals in the fine particles from coal plants. Colstrip did not meet the new limit. In April 2025 the president exempted Colstrip and nearly 50 other plants for two years. On 20 February 2026 the EPA repealed the 2024 limits, leaving the 2012 rule in force. The governor supported the repeal. The Northern Cheyenne Tribe, whose reservation is downwind, had supported the 2024 limits.</p><p>When state regulators approved NorthWestern\'s merger with Black Hills in November 2026, they ordered the company to report by June 2027 on whether its Colstrip shares could serve Montana customers at least cost.</p>',
    sources: [S.e923, S.e923f, S.nweCol, S.legGas, S.mats, S.gov, S.merger] });
  add({ id: 'colstripash', kind: 'info', lon: -106.64, lat: 45.905, name: 'Colstrip coal ash ponds', short: 'Ash ponds', tier: 3,
    lede: 'Coal ash is what is left after coal burns. At Colstrip it was stored wet, in ponds. State regulators ordered the ash beside the two closed units dug out and moved.',
    stats: [['6.7M cubic yards', 'ash to be moved to a new lined site above the water table'], ['$285 million+', 'the state\'s cost estimate for that work'], ['43,000 gallons', 'contaminated water the two ponds were leaking each day, at most'], ['$485 million', 'money the owners must set aside for ash cleanup across the whole site']],
    body: '<p>The state Department of Environmental Quality found that polluted groundwater had spread up to a mile from the ponds. The plant\'s operator, Talen, must guarantee the money under a 2012 agreement with the state.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.ash] });
  add({ id: 'rosebudpower', kind: 'coal', plant: 10784, name: 'Rosebud Power Plant', short: 'Rosebud Power', tier: 3,
    lede: 'A small plant north of Colstrip that burns waste coal, the low-grade material that the big plant\'s supply leaves behind.',
    stats: [['0.28 TWh', 'electricity generated in 2025'], ['243,000 tons', 'waste coal burned in 2025']],
    sources: [S.e923, S.leg] });
  add({ id: 'hardin', kind: 'coal', plant: 55749, name: 'Hardin Generating Station', short: 'Hardin', tier: 2,
    lede: 'A small coal plant that opened in 2006. For several years its output ran a cryptocurrency operation on the same site.',
    stats: [['0.18 TWh', 'electricity generated in 2025'], ['149,000 tons', 'coal received in 2025, by truck from the Absaloka Mine']],
    body: '<p>A state report said the cryptocurrency contract was due to end in 2022 and left the plant\'s future in question. The plant ran in 2025 at about a fifth of the output it could reach running all year.</p>',
    sources: [S.e923, S.e923f, S.leg] });
  add({ id: 'yellowstoneenergy', kind: 'coal', kindLabel: 'Petroleum coke plant', plant: 50931, name: 'Yellowstone Energy plant', short: 'Yellowstone Energy', tier: 3,
    lede: 'A plant in Billings that burns petroleum coke, a coal-like solid left over when crude oil is refined. Federal files group it with oil.',
    stats: [['0.46 TWh', 'electricity generated in 2025'], ['264,000 tons', 'petroleum coke burned in 2025']],
    sources: [S.e923] });
  add({ id: 'corette', kind: 'closed', plant: 2187, name: 'J.E. Corette plant (closed 2015)', short: 'Corette (closed)', tier: 3,
    lede: 'A coal plant on the Yellowstone River in Billings. It closed in 2015.',
    stats: [['16.0 TWh', 'electricity from coal in Montana in 2015'], ['9.6 TWh', 'electricity from coal in Montana in 2025']],
    body: '<p>Coal capacity in Montana fell from 2,293 MW in 2015 to 1,627 MW in 2024. Corette, two of Colstrip\'s four units and the coal unit at Sidney all closed in those years.</p>',
    sources: [S.prof, S.e923, S.inv] });
  add({ id: 'lewisclark', kind: 'gas', kindLabel: 'Gas plant on a closed coal site', plant: 6089, name: 'Lewis and Clark Station', short: 'Lewis and Clark', tier: 3,
    lede: 'Montana-Dakota Utilities shut its 44 MW coal unit here in 2021. Two gas engines added in 2015 still run when needed.',
    stats: [['2021', 'year the coal unit closed. The utility found it could no longer compete with other sources'], ['0.01 TWh', 'electricity generated by the gas engines in 2025']],
    body: '<p>Sidney is on the Eastern grid, like the rest of this utility\'s Montana territory.</p>',
    sources: [S.leg, S.legGas, S.e923] });

  // ----------------------------------------------------------------- gas
  add({ id: 'ycgs', kind: 'gas', plant: 67766, name: 'Yellowstone County Generating Station', short: 'Laurel gas plant', tier: 2,
    lede: 'NorthWestern Energy\'s newest plant: 18 gas engines beside the Yellowstone River at Laurel. It has run since March 2024 while courts review its permit.',
    stats: [['0.38 TWh', 'electricity generated in 2025'], ['3.1 Bcf', 'natural gas burned in 2025. Bcf means billion cubic feet'], ['770,000 tons', 'carbon emissions a year the plant was expected to produce, as reported by MTN News']],
    body: '<p>In 2023 a district judge revoked the plant\'s air permit because the state had not studied its greenhouse gases. In January 2025 the Montana Supreme Court agreed that the study was required, and let the permit stand while the state did it. The state published the new study on 1 August 2025. Two environmental groups challenged it in September 2025.</p><p>Engines like these can start and stop in minutes. The utility uses them to cover peaks in demand and gaps in wind.</p>',
    sources: [S.e923, S.laurel, S.laurel2, S.legGas] });
  add({ id: 'davegates', kind: 'gas', plant: 56908, name: 'Dave Gates Generating Station', short: 'Dave Gates', tier: 2,
    lede: 'Three gas turbines near Anaconda, opened in 2011. Their job is to keep NorthWestern Energy\'s grid in balance from minute to minute.',
    stats: [['0.50 TWh', 'electricity generated in 2025, the most of any Montana gas plant'], ['5.4 Bcf', 'natural gas burned in 2025'], ['BP, Koch, Mieco', 'the sellers of that gas']],
    body: '<p>Supply and demand on a grid must match at every moment. A plant like this one turns up and down quickly to follow swings in demand and in wind output.</p>',
    sources: [S.e923, S.e923f, S.legGas] });
  add({ id: 'basincreek', kind: 'gas', plant: 55866, name: 'Basin Creek plant', short: 'Basin Creek', tier: 3,
    lede: 'Gas engines south of Butte. NorthWestern Energy has the plant under contract and calls on it when demand spikes or market prices are high.',
    stats: [['0.17 TWh', 'electricity generated in 2025']], sources: [S.e923, S.legGas] });
  add({ id: 'culbertson', kind: 'gas', plant: 56606, name: 'Culbertson Generation Station', short: 'Culbertson', tier: 3,
    lede: 'A gas turbine owned by Basin Electric, a co-op based in North Dakota. It is on the Eastern grid.',
    stats: [['0.23 TWh', 'electricity generated in 2025'], ['2.3%', 'share of Montana\'s 2025 generation that came from plants on the Eastern grid']],
    sources: [S.e923, S.legGas] });
  add({ id: 'oreg', kind: 'gas', kindLabel: 'Waste-heat plant', plant: 56833, name: 'Culbertson waste-heat plants', short: 'Waste-heat plants', tier: 3,
    lede: 'Two small plants that burn no fuel of their own. Federal files list their energy source as waste heat. They sit beside the Northern Border gas pipeline.',
    stats: [['0.26 TWh', 'electricity generated by the two plants in 2025, 1% of Montana\'s total']],
    body: '<p class="gcap">The table below is for the first of the two plants.</p>', sources: [S.e923, S.pipes] });

  // ----------------------------------------------------------------- hydro
  add({ id: 'greatfalls', kind: 'hydro', plant: 2194, name: 'The Great Falls dams', short: 'Great Falls dams', tier: 1,
    lede: 'Five dams on a few miles of the Missouri River: Black Eagle, Rainbow, Cochrane, Ryan and Morony. They were sold in 1999 and bought back in 2014.',
    stats: [['1.22 TWh', 'electricity generated by the five dams in 2025'], ['$900 million', 'price NorthWestern Energy paid in 2014 for 11 dams, these five included'], ['633 MW', 'capacity of the 11 dams together'], ['2.16 TWh', 'electricity from all of NorthWestern\'s dams in 2025']],
    body: '<p>The Montana Power Company, formed in 1912, built or bought the dams. After Montana opened its electricity market in 1997, the company sold most of its power plants to PPL, a Pennsylvania company, at the end of 1999. NorthWestern Energy bought the dams back on 18 November 2014, and customer rates rose about 5% that day to pay for them.</p><p class="gcap">The table below is for Ryan Dam only.</p>',
    sources: [S.e923, S.dams, S.deq04, S.legGas] });
  add({ id: 'holter', kind: 'hydro', plant: 2186, name: 'Holter and Hauser dams', short: 'Holter Dam', tier: 3,
    lede: 'Two NorthWestern Energy dams on the Missouri below Canyon Ferry. Hauser is a few miles upstream of Holter.',
    stats: [['0.25 TWh', 'electricity generated at Holter in 2025'], ['0.13 TWh', 'electricity generated at Hauser in 2025']],
    body: '<p class="gcap">The table below is for Holter only.</p>', sources: [S.e923] });
  add({ id: 'canyonferry', kind: 'hydro', plant: 6400, name: 'Canyon Ferry Dam', short: 'Canyon Ferry', tier: 3,
    lede: 'A federal dam on the Missouri near Helena, run by the Bureau of Reclamation.',
    stats: [['0.27 TWh', 'electricity generated in 2025']],
    body: '<p>Power from federal dams east of the Continental Divide is sold by the Western Area Power Administration, a federal agency. It sells mainly to co-ops, towns and other utilities, not to homes.</p>',
    sources: [S.e923] });
  add({ id: 'madison', kind: 'hydro', plant: 6422, name: 'Madison Dam', short: 'Madison Dam', tier: 3,
    lede: 'A small NorthWestern Energy dam on the Madison River. Its first generator dates from 1906.',
    stats: [['0.08 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'thompsonfalls', kind: 'hydro', plant: 2195, name: 'Thompson Falls Dam', short: 'Thompson Falls', tier: 3,
    lede: 'NorthWestern Energy\'s dam on the Clark Fork River, and one of the 11 it bought in 2014.',
    stats: [['0.44 TWh', 'electricity generated in 2025']], sources: [S.e923, S.dams] });
  add({ id: 'skq', kind: 'hydro', plant: 2188, name: 'Seli’š Ksanka Qlispe’ Dam', short: 'SKQ Dam', tier: 1,
    lede: 'The dam at the outlet of Flathead Lake, formerly Kerr Dam. The Confederated Salish and Kootenai Tribes have owned it since 2015.',
    stats: [['0.97 TWh', 'electricity generated in 2025'], ['$18.2 million', 'price the tribes paid NorthWestern Energy'], ['5 Sept 2015', 'date of the handover'], ['30 years', 'wait written into the dam\'s 1985 federal license before the tribes could take it over']],
    body: '<p>The dam stands on the Flathead Reservation. The tribes\' company, Energy Keepers, runs it and sells the power. A trade publication reported in 2015 that this made them the first tribes in the country to own a major hydroelectric project.</p>',
    sources: [S.e923, S.kerr, S.legGas] });
  add({ id: 'libby', kind: 'hydro', plant: 6172, name: 'Libby Dam', short: 'Libby Dam', tier: 1,
    lede: 'A US Army Corps of Engineers dam on the Kootenai River. It generated more electricity in 2025 than any plant in Montana except Colstrip.',
    stats: [['1.61 TWh', 'electricity generated in 2025'], ['42 miles', 'distance its reservoir, Lake Koocanusa, reaches into Canada'], ['1966 to 1973', 'years it was built, under the Columbia River Treaty with Canada']],
    body: '<p>Power from federal dams west of the Continental Divide is sold by the Bonneville Power Administration, a federal agency based in Oregon. It sells to co-ops and other utilities across the Northwest, including Flathead Electric.</p>',
    sources: [S.e923, S.water] });
  add({ id: 'hungryhorse', kind: 'hydro', plant: 2203, name: 'Hungry Horse Dam', short: 'Hungry Horse', tier: 2,
    lede: 'A Bureau of Reclamation dam on the South Fork of the Flathead River, finished in 1952.',
    stats: [['0.63 TWh', 'electricity generated in 2025']],
    body: '<p>Water released here passes through more dams downstream, on the Flathead, Clark Fork and Columbia rivers. The Bonneville Power Administration sells the power.</p>',
    sources: [S.e923, S.water] });
  add({ id: 'noxon', kind: 'hydro', plant: 2199, name: 'Noxon Rapids Dam', short: 'Noxon Rapids', tier: 2,
    lede: 'A dam on the Clark Fork River owned by Avista, a utility based in Spokane, Washington. A state report says nearly all of its power leaves Montana.',
    stats: [['1.36 TWh', 'electricity generated in 2025']],
    sources: [S.e923, S.legGas] });
  add({ id: 'fortpeck', kind: 'hydro', plant: 6623, name: 'Fort Peck Dam', short: 'Fort Peck', tier: 1,
    lede: 'A US Army Corps of Engineers dam on the Missouri. Its reservoir is one of the largest in the country.',
    stats: [['0.76 TWh', 'electricity generated in 2025'], ['18.5 million AF', 'water the reservoir can hold. An acre-foot (AF) is 325,851 gallons']],
    body: '<p>The Western Area Power Administration, a federal agency, sells the power and owns the lines that carry it across north-east Montana.</p>',
    sources: [S.e923, S.water] });
  add({ id: 'yellowtail', kind: 'hydro', plant: 2204, name: 'Yellowtail Dam', short: 'Yellowtail', tier: 2,
    lede: 'A Bureau of Reclamation dam on the Bighorn River, on the Crow Reservation.',
    stats: [['0.57 TWh', 'electricity generated in 2025']], sources: [S.e923] });

  // ----------------------------------------------------------------- wind and solar
  add({ id: 'clearwater', kind: 'wind', plant: 65577, name: 'Clearwater Wind', short: 'Clearwater Wind', tier: 1,
    lede: 'Montana\'s largest wind farm, built in four phases north of Colstrip from 2022 to 2024. Its power goes to utilities in Washington and Oregon.',
    stats: [['2.94 TWh', 'electricity generated by the four phases in 2025, 11% of all generation in Montana'], ['750 MW+', 'capacity of the four phases, according to the governor\'s office'], ['Nearly $1 billion', 'the developer NextEra\'s investment']],
    body: '<p>Federal files place the first phase in the part of the grid run by Puget Sound Energy of Washington. They list Portland General Electric of Oregon as operator of another phase, and Avista of Spokane as grid operator for a third. All three utilities own or owned shares of the Colstrip coal plant.</p><p class="gcap">The table below is for the first phase only.</p>',
    sources: [S.e923, S.clear, S.inv] });
  add({ id: 'beavercreek', kind: 'wind', plant: 65019, name: 'Beaver Creek Wind', short: 'Beaver Creek Wind', tier: 3,
    lede: 'A wind farm owned by Puget Sound Energy of Washington. It reached full operation on 19 August 2025.',
    stats: [['0.16 TWh', 'electricity generated in 2025, a partial year'], ['About 83,000', 'homes the owner says it can supply']],
    body: '<p>The owner says the power travels on its share of the 500-kilovolt lines built for the Colstrip coal plant.</p>',
    sources: [S.e923, S.beaver] });
  add({ id: 'judithgap', kind: 'wind', plant: 56377, name: 'Judith Gap Wind', short: 'Judith Gap', tier: 2,
    lede: 'Montana\'s first large wind farm, opened in 2005. It sells its output to NorthWestern Energy.',
    stats: [['0.41 TWh', 'electricity generated in 2025'], ['6.23 TWh', 'electricity from all Montana wind farms in 2025. In 2010 it was 0.93 TWh']],
    body: '<p>A federal laboratory ranks Montana second among the states for the wind energy it could produce. A state report says long distances to large cities, and limited transmission lines, have held development back.</p>',
    sources: [S.e923, S.legWind, S.prof] });
  add({ id: 'pryor', kind: 'wind', plant: 59757, name: 'Pryor Mountain Wind', short: 'Pryor Mountain', tier: 2,
    lede: 'A wind farm near Bridger owned by PacifiCorp, which serves customers in six other states. It opened in 2021.',
    stats: [['0.75 TWh', 'electricity generated in 2025']],
    body: '<p>Federal files place it in PacifiCorp\'s own part of the grid, not NorthWestern Energy\'s.</p>', sources: [S.e923, S.legWind] });
  add({ id: 'glacier', kind: 'wind', plant: 57049, name: 'Glacier and Rim Rock wind farms', short: 'Glacier Wind', tier: 2,
    lede: 'Three wind farms near Shelby and Cut Bank, built from 2008 to 2012 by the developer NaturEner.',
    stats: [['0.94 TWh', 'electricity generated by the three farms in 2025'], ['399 MW', 'capacity of the three together']],
    body: '<p>Each is run as its own small "balancing area": the operator must match output to sales from minute to minute, as a utility does for a whole region.</p><p class="gcap">The table below is for Glacier Wind 1 only.</p>',
    sources: [S.e923, S.legWind] });
  add({ id: 'diamondwillow', kind: 'wind', plant: 56782, name: 'Diamond Willow Wind', short: 'Diamond Willow', tier: 3,
    lede: 'A small wind farm near Baker owned by Montana-Dakota Utilities. It is on the Eastern grid.',
    stats: [['0.09 TWh', 'electricity generated in 2025']], sources: [S.e923, S.legWind] });
  add({ id: 'apexsolar', kind: 'solar', plant: 64189, name: 'Apex Solar', short: 'Apex Solar', tier: 3,
    lede: 'One of two 80 MW solar farms that opened in 2023. They are the largest in Montana.',
    stats: [['0.17 TWh', 'electricity generated in 2025'], ['0.35 TWh', 'electricity from all Montana solar farms in 2025, 1.3% of the state\'s total']],
    sources: [S.e923, S.inv] });
  add({ id: 'mtsun', kind: 'solar', plant: 64032, name: 'MTSUN solar farm', short: 'MTSUN', tier: 3,
    lede: 'An 80 MW solar farm north-west of Billings that opened in 2023.',
    stats: [['0.15 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'haymaker', kind: 'plannedp', plant: 63878, name: 'Haymaker wind project (planned)', short: 'Haymaker (planned)', tier: 3,
    lede: 'The largest planned plant in the federal list for Montana: a wind farm in the center of the state, expected in 2031.',
    stats: [['2031', 'expected opening year reported to the federal government']],
    body: '<p>The same list includes a 400 MW solar farm and battery near Dillon (2027), an 80 MW wind farm near Judith Gap (2029) and a 50 MW battery near Laurel (2027). Turn on Planned plants to see them.</p>',
    sources: [S.inv] });

  // ----------------------------------------------------------------- fuel supply
  add({ id: 'rosebudmine', kind: 'coalmineop', lon: -106.82, lat: 45.80, name: 'Rosebud Mine', short: 'Rosebud Mine', tier: 2,
    lede: 'The strip mine beside Colstrip. A conveyor belt carries its coal straight into the power plant, which is its main customer.',
    stats: [['5.98M tons', 'coal mined in 2024'], ['5.74M tons', 'coal delivered to the Colstrip plant in 2025'], ['22nd', 'rank among US coal mines by 2024 output']],
    body: '<p>Westmoreland runs the mine. A plant built at its mine is called a mine-mouth plant: no railroad is needed, and the plant and the mine depend on each other.</p><p class="gcap">The marker is approximate. The mined area surrounds the town.</p>',
    sources: [S.coal, S.e923f] });
  add({ id: 'springcreek', kind: 'coalmineop', lon: -106.90, lat: 45.115, name: 'Spring Creek Mine', short: 'Spring Creek Mine', tier: 2,
    lede: 'Montana\'s largest coal mine and the fifth largest in the United States. None of its coal is burned in Montana power plants. It leaves by train.',
    stats: [['13.05M tons', 'coal mined in 2024, of 27.0 million tons mined in Montana'], ['5.29M tons', 'delivered by rail to US power plants in 2025, in five states'], ['16 years', 'added to the mine\'s life by a federal approval on 13 March 2025']],
    body: '<p>The 2025 deliveries went to plants in Michigan (2.21 million tons), Minnesota (1.32), Washington (0.99), Arizona (0.51) and Nevada (0.26). The Interior Department says the mine also sells to Japan and South Korea.</p><p>The Navajo Transitional Energy Company, owned by the Navajo Nation, runs the mine.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.coal, S.e923f, S.spring] });
  add({ id: 'decker', kind: 'coalmine', lon: -106.83, lat: 45.05, name: 'Decker Mine (closed 2021)', short: 'Decker Mine (closed)', tier: 3,
    lede: 'A strip mine beside the Tongue River Reservoir. It stopped mining in January 2021, after its owner filed for bankruptcy.',
    stats: [['January 2021', 'month mining stopped'], ['76', 'workers laid off after the bankruptcy filing in December 2020']],
    body: '<p>The owner, Lighthouse Resources, told the court that running the mine no longer made economic sense.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.decker] });
  add({ id: 'absaloka', kind: 'coalmineop', lon: -107.07, lat: 45.80, name: 'Absaloka Mine', short: 'Absaloka Mine', tier: 3,
    lede: 'A Westmoreland strip mine east of Hardin. In 2025 its only delivery to a US power plant was to the Hardin plant, by truck.',
    stats: [['149,000 tons', 'coal delivered to the Hardin plant in 2025']],
    body: '<p class="gcap">The marker is approximate.</p>', sources: [S.e923f] });
  add({ id: 'bullmountains', kind: 'coalmineop', lon: -108.40, lat: 46.27, name: 'Bull Mountains Mine', short: 'Bull Mountains Mine', tier: 2,
    lede: 'Montana\'s only underground coal mine, south of Roundup, run by Signal Peak Energy. Its coal is exported to Japan and South Korea.',
    stats: [['7.07M tons', 'coal mined in 2024, 16th among US mines'], ['57.3M tons', 'coal covered by a federal approval on 6 June 2025: 22.8 million federal, 34.5 million other'], ['Up to 9 years', 'added to the mine\'s life by that approval']],
    body: '<p>No US power plant reported a delivery from this mine in 2025. The Interior Department says the mine employs more than 250 people.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.coal, S.bull, S.e923f] });
  add({ id: 'gassupply', kind: 'fuel', lon: -112.47, lat: 48.90, name: 'Gas for Montana\'s power plants', short: 'Gas supply', tier: 3,
    lede: 'The brown dashed lines are gas pipelines. NorthWestern Energy\'s own network runs from the Canadian border here to Great Falls, Helena, Butte and Billings.',
    stats: [['12.6 Bcf', 'natural gas burned by Montana power plants in 2025. Bcf means billion cubic feet'], ['5.4 Bcf', 'of that burned at the Dave Gates plant near Anaconda'], ['3.1 Bcf', 'of that burned at the Laurel plant']],
    body: '<p>The two NorthWestern plants bought their 2025 gas from three trading companies: BP, Koch and Mieco. Montana-Dakota Utilities supplied its own small plants in the east.</p>',
    sources: [S.e923, S.e923f, S.pipes] });

  // ----------------------------------------------------------------- the grid
  add({ id: 'colstriplines', kind: 'hub', lon: -108.852, lat: 46.052, name: 'The twin 500-kilovolt lines', short: 'Colstrip lines', tier: 2,
    lede: 'Two 500-kilovolt lines run side by side from Colstrip to this substation at Broadview and on west. They were built to carry coal power to Washington and Oregon.',
    stats: [['About 250 miles', 'length of the Colstrip lines, by NorthWestern Energy\'s account'], ['31%', 'NorthWestern Energy\'s share of them'], ['10.2 TWh', 'net electricity Montana sent to other states in 2024, 37% of its supply']],
    body: '<p>A kilovolt is 1,000 volts. Higher voltage moves more power with less loss. West of Garrison the lines belong to the Bonneville Power Administration, a federal agency, and continue through Taft to Washington and Idaho.</p><p>Wind farms now use the same lines. Puget Sound Energy says its Beaver Creek wind farm sends power west on its share of them.</p>',
    sources: [S.nweTx, S.prof, S.beaver, S.hifldLines] });
  add({ id: 'garrison', kind: 'hub', lon: -112.888, lat: 46.516, name: 'Garrison substation', short: 'Garrison', tier: 3,
    lede: 'Where the lines from Colstrip meet the federal grid of the Northwest. From here the Bonneville Power Administration owns the 500-kilovolt lines west.',
    stats: [['17.4 TWh', 'electricity generated in 2025 by plants in the part of the grid NorthWestern Energy runs'], ['2.3 TWh', 'generated in 2025 by Montana plants in Bonneville\'s part: Libby and Hungry Horse dams']],
    sources: [S.e923, S.hifldLines] });
  add({ id: 'milescity', kind: 'hub', lon: -105.792, lat: 46.413, name: 'Miles City: where two grids meet', short: 'East-West tie', tier: 2,
    lede: 'Montana straddles the two big power grids of the United States. They are not synchronized, so power can cross only through a converter station. One is here.',
    stats: [['1985', 'year the Miles City converter station opened'], ['7', 'stations of this kind along the whole seam between the Eastern and Western grids'], ['2.3%', 'share of Montana\'s 2025 generation that came from plants on the Eastern grid']],
    body: '<p>The station turns alternating current into direct current and back again, which lets power pass between grids that are out of step. The Western Area Power Administration and Basin Electric, a co-op, own it.</p><p>Most of Montana is on the Western grid. The eastern edge, including the territory of Montana-Dakota Utilities, is on the Eastern grid.</p>',
    sources: [S.ties, S.deq04, S.e923] });
  add({ id: 'npc', kind: 'hub', kindLabel: 'Proposed power line', lon: -105.2, lat: 46.33, name: 'North Plains Connector (proposed)', short: 'North Plains Connector', tier: 2,
    lede: 'A proposed direct-current line from Colstrip to North Dakota. It would be a second and much larger link between the Western and Eastern grids in Montana.',
    stats: [['422 miles', 'length'], ['3,000 MW', 'what it could carry, in either direction'], ['525 kV', 'voltage'], ['28 Aug 2026', 'date the final environmental study was released']],
    body: '<p>The line would cross Rosebud, Custer and Fallon counties and end at two substations near Center and St. Anthony, North Dakota. The US Department of Energy and the state Department of Environmental Quality wrote the study together. The line needs a state certificate before construction can start.</p><p class="gcap">The line is not drawn on the map. The marker is on its approximate route.</p>',
    sources: [S.npc, S.npcDeq] });
  add({ id: 'matl', kind: 'hub', kindLabel: 'Power line to Canada', lon: -111.95, lat: 48.17, name: 'Montana Alberta Tie Line', short: 'Line to Alberta', tier: 3,
    lede: 'A privately owned line from Great Falls to Lethbridge, Alberta, in service since 2013.',
    stats: [['230 kV', 'voltage'], ['300 MW', 'what it can carry'], ['0.59 TWh', 'electricity Montana sent to Canada in 2024. It received 0.36 TWh']],
    body: '<p>Berkshire Hathaway Energy owns it.</p><p class="gcap">The marker is on the approximate route.</p>',
    sources: [S.matl, S.prof] });

  // ----------------------------------------------------------------- users, law and history
  add({ id: 'billings', kind: 'city', lon: -108.5, lat: 45.783, name: 'Billings and its refineries', short: 'Billings', tier: 1,
    lede: 'Montana\'s largest city. Three of the four oil refineries in federal data for Montana are here and at Laurel. Industry buys more than a quarter of the electricity sold in the state.',
    stats: [['62,500', 'barrels of crude oil a day the CHS refinery at Laurel can process'], ['4.4 TWh', 'electricity sold to industry in Montana in 2025, 29% of all sales'], ['2.7 TWh', 'electricity NorthWestern delivered in 2025 to 540 customers who buy from other suppliers']],
    body: '<p>Since the market opened in 1997, large customers in NorthWestern\'s territory may buy power from another supplier and pay the utility only to deliver it. Almost all the power bought that way goes to industry.</p><p>A developer backed by Quantica plans a 5,000-acre energy and data center campus north of the city.</p>',
    sources: [S.refin, S.e861, S.nweDc] });
  add({ id: 'butte', kind: 'datacenter', lon: -112.62, lat: 45.99, name: 'Butte and the data centers', short: 'Butte data centers', tier: 2,
    lede: 'NorthWestern Energy has letters of intent with three data center developers. The largest requests would roughly double the load on its Montana system.',
    stats: [['About 1,300 MW', 'peak demand on NorthWestern\'s Montana system'], ['150 to 1,000+ MW', 'size of the three requests'], ['5 MW', 'size of new customer covered by the rules the utility proposed on 31 March 2026'], ['15 years', 'minimum commitment a very large customer would make under those rules']],
    body: '<p>Sabey Data Centers is buying just over 600 acres west of Butte for $1.2 million, and Atlas Power already runs a data center south of the city. The utility\'s 2026 plan tested three cases: 150, 650 and 1,160 MW of new data centers. It found that average costs per unit fall in the first two and rise in the third.</p><p>Under the proposed rules a large customer would pay for the equipment built for it and for at least 75% of the power it reserves. The Public Service Commission had not ruled when this map was made.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.irp, S.dive, S.nweDc, S.mtprDc] });
  add({ id: 'helena', kind: 'city', lon: -112.036, lat: 46.589, name: 'Helena: the rules', short: 'Helena', tier: 2,
    lede: 'The state capital. The Public Service Commission, five elected members, sets the rates of the investor-owned utilities. Two decisions made here shaped the system.',
    stats: [['1997', 'year the legislature opened the electricity market to competition'], ['$200+', 'price per megawatt-hour some large users faced in 2000 and 2001. It had been about $22'], ['18 Dec 2024', 'date the Montana Supreme Court decided Held v. Montana, by 6 votes to 1'], ['3 to 2', 'the commission\'s vote on 10 November 2026 to approve NorthWestern\'s merger with Black Hills']],
    body: '<p>After the 1997 law the Montana Power Company sold its plants at the end of 1999 and its wires in February 2002, to NorthWestern. NorthWestern went bankrupt in 2003 and later recovered. It has since bought back dams and added plants of its own.</p><p>In Held, 16 young people sued the state. The court struck down a 2023 law that barred state agencies from studying greenhouse gases when they review projects such as power plants. The right to "a clean and healthful environment" is in Montana\'s constitution.</p><p>The merger would create a company called Bright Horizon Energy with 2.1 million electric and gas customers in eight states.</p>',
    sources: [S.deq04, S.fed, S.held, S.held2, S.merger] });
  add({ id: 'cfac', kind: 'user', kindLabel: 'Closed aluminum smelter', lon: -114.14, lat: 48.39, name: 'Columbia Falls aluminum smelter (closed)', short: 'Aluminum smelter (closed)', tier: 2,
    lede: 'Making aluminum takes very large amounts of electricity. A smelter ran here from 1955 to 2009, a few miles from Hungry Horse Dam. The site is now a federal cleanup.',
    stats: [['1955 to 2009', 'years the smelter operated'], ['2,500 MW+', 'power use that aluminum smelters across the Northwest had shut off by July 2001'], ['6 July 2026', 'date the EPA announced a cleanup agreement with the owner']],
    body: '<p>During the price spike of 2000 and 2001, smelters found it paid better to resell their contracted power than to make metal, a state report said.</p><p>The site is on the federal Superfund list. The EPA lists cyanide, fluoride, arsenic and other contaminants. The owner is a subsidiary of Glencore.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.cfac, S.deq04] });
  add({ id: 'stillwater', kind: 'mine', kindLabel: 'Palladium and platinum mine', lon: -109.892, lat: 45.388, name: 'Stillwater Mine', short: 'Stillwater Mine', tier: 3,
    lede: 'An underground palladium and platinum mine near Nye, opened in 1986. Mines like it run large hoists, fans and mills on electricity.',
    stats: [['About 700', 'workers laid off in 2024, about 40% of the company\'s Montana workforce'], ['About 1,050', 'people it employed in Montana in early 2026']],
    body: '<p>The owner, Sibanye-Stillwater, cut back this mine after palladium prices fell by half. It also runs the East Boulder mine near Big Timber and a smelter at Columbus.</p>',
    sources: [S.still] });

  BROWSE.push(
    ['Coal', ['colstrip', 'colstripash', 'rosebudpower', 'hardin', 'yellowstoneenergy', 'corette', 'lewisclark']],
    ['Natural gas', ['ycgs', 'davegates', 'basincreek', 'culbertson', 'oreg']],
    ['Dams', ['greatfalls', 'holter', 'canyonferry', 'madison', 'thompsonfalls', 'skq', 'libby', 'hungryhorse', 'noxon', 'fortpeck', 'yellowtail']],
    ['Wind and sun', ['clearwater', 'beavercreek', 'judithgap', 'pryor', 'glacier', 'diamondwillow', 'apexsolar', 'mtsun', 'haymaker']],
    ['Where the fuel comes from', ['rosebudmine', 'springcreek', 'bullmountains', 'absaloka', 'decker', 'gassupply']],
    ['The grid', ['colstriplines', 'garrison', 'milescity', 'npc', 'matl']],
    ['Who uses it, and the rules', ['billings', 'butte', 'helena', 'cfac', 'stillwater']],
  );

  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025)
  Object.assign(AREAS, {
    'NorthWestern Energy': { lede: 'Montana\'s largest utility, the successor to the Montana Power Company. It serves most of the state\'s cities, from Missoula and Butte to Great Falls and Billings.',
      stats: [['6.4 TWh', 'electricity it sold in 2025'], ['438,000', 'customers in 2025'], ['2.7 TWh', 'more that it delivered for other suppliers, to 540 large customers'], ['About 1,300 MW', 'peak demand on its Montana system']],
      body: '<p>The Public Service Commission sets its rates. The company owns dams, wind farms and gas plants, and since 1 January 2026 it owns 55% of the Colstrip coal plant. In 2025 it owned about 1,065 MW of plants in Montana and had contracts for about 1,070 MW more.</p><p>On 10 November 2026 the commission approved its merger with Black Hills Corporation of South Dakota by 3 votes to 2.</p>',
      sources: [S.e861, S.dive, S.nweCol, S.merger, S.hifld] },
    'Montana-Dakota Utilities': { lede: 'An investor-owned utility based in North Dakota. It serves Montana\'s eastern edge, which is on the Eastern grid.',
      stats: [['0.69 TWh', 'electricity sold in Montana in 2025'], ['25,500', 'Montana customers in 2025']],
      body: '<p>It closed its coal unit at Sidney in 2021 and keeps small gas plants at Glendive, Miles City and Sidney for peaks.</p>',
      sources: [S.e861, S.leg, S.hifld] },
    'Flathead Electric Cooperative': { lede: 'Montana\'s largest electric co-op, owned by its members around Kalispell. It buys federal hydropower through the Bonneville Power Administration.',
      stats: [['1.61 TWh', 'electricity sold in 2025, second only to NorthWestern in Montana'], ['77,300', 'customers in 2025']],
      body: '<p>Montana has 25 electric co-ops. Together they serve more than 400,000 people, mostly outside the cities.</p>',
      sources: [S.e861, S.coops, S.hifld] },
    'Mission Valley Power': { lede: 'A federally owned utility on the Flathead Reservation.',
      stats: [['0.40 TWh', 'electricity sold in 2025'], ['23,250', 'customers in 2025']], sources: [S.e861, S.hifld] },
    'Yellowstone Valley Electric Cooperative': { lede: 'A member-owned co-op around Billings.',
      stats: [['0.31 TWh', 'electricity sold in 2025'], ['23,700', 'customers in 2025']], sources: [S.e861, S.hifld] },
    'Lower Yellowstone Rural Electric Association': { lede: 'A member-owned co-op around Sidney. Most of what it sells goes to industry.',
      stats: [['0.33 TWh', 'electricity sold in 2025, of which 0.24 TWh to industry'], ['5,250', 'customers in 2025']], sources: [S.e861, S.hifld] },
    'Fergus Electric Cooperative': { lede: 'A member-owned co-op in central Montana, around Lewistown.',
      stats: [['0.25 TWh', 'electricity sold in 2025'], ['7,160', 'customers in 2025']], sources: [S.e861, S.hifld] },
    'Missoula Electric Cooperative': { lede: 'A member-owned co-op that serves the country around Missoula.',
      stats: [['0.25 TWh', 'electricity sold in 2025'], ['16,700', 'customers in 2025']], sources: [S.e861, S.hifld] },
  });
  const COOP = { lede: 'A member-owned electric co-op. Montana has 25 of them. Most buy their power wholesale, from federal dams or from larger co-ops that own plants.', sources: [S.coops, S.hifld] };
  Object.values(UTIL).forEach(u => { if (u[2] === 'coop' && !AREAS[u[0]]) AREAS[u[0]] = COOP; });

  // ----------------------------------------------------------------- pipeline and line cards
  Object.assign(PIPECARDS, {
    'Northwestern Energy Co': { lede: 'NorthWestern Energy\'s own gas network. On this map it runs from the Canadian border through Great Falls, Helena and Butte to Billings.',
      stats: [['Intrastate', 'type of pipeline'], ['8.5 Bcf', 'gas burned in 2025 at the two NorthWestern power plants on the system, Dave Gates and Laurel. Bcf means billion cubic feet', 1]],
      sources: [S.e923, S.pipes] },
    'Northern Border PL Co': { lede: 'An interstate pipeline that enters Montana from Saskatchewan and crosses the north-east corner on its way to the Midwest.',
      stats: [['Interstate', 'type of pipeline']],
      body: '<p>The Culbertson gas plant and two small waste-heat plants stand beside it.</p>', sources: [S.pipes, S.e923] },
    'WBI Energy Transmission': { lede: 'An interstate pipeline system across eastern Montana, Wyoming and the Dakotas. It reaches the towns served by Montana-Dakota Utilities.',
      sources: [S.pipes] },
    'Northern Natural Gas Co': { lede: 'Pipelines drawn in north-central Montana, near Havre, in federal map data.', sources: [S.pipes] },
    'Bison Pipeline': { lede: 'An interstate pipeline drawn from Wyoming across the south-east corner of Montana toward North Dakota.', sources: [S.pipes] },
    'Grasslands Pipeline': { lede: 'An interstate pipeline drawn from Wyoming across the south-east corner of Montana toward North Dakota.', sources: [S.pipes] },
    'Colorado Interstate Gas Co': { lede: 'An interstate pipeline in northern Wyoming. On this map it stays south of the Montana line.', sources: [S.pipes] },
    'Gas Transmission - Northwest': { lede: 'An interstate pipeline that carries Canadian gas south through the Idaho panhandle. On this map it does not enter Montana.', sources: [S.pipes] },
    'Northwest Pipeline': { lede: 'An interstate pipeline in northern Idaho. On this map it does not enter Montana.', sources: [S.pipes] },
  });
  LINECARDS.push(
    [/Broadview - Colstrip/i, { lede: 'One of the twin 500-kilovolt lines built to carry power from the Colstrip coal plant west toward Washington and Oregon. Wind farms now use them too.',
      stats: [['500 kV', 'voltage'], ['About 250 miles', 'length of the Colstrip lines, by NorthWestern Energy\'s account'], ['31%', 'NorthWestern Energy\'s share of them']],
      sources: [S.nweTx, S.beaver, K.OSM] }],
    [/Garrison - Broadview/i, { lede: 'The middle section of Montana\'s 500-kilovolt corridor. Two lines cross the center of the state from Broadview to the Garrison substation, where they meet the federal grid of the Northwest.',
      sources: [S.nweTx, K.OSM] }],
    [/Taft|Dworshak/i, { lede: 'A 500-kilovolt line of the Bonneville Power Administration, the federal agency that runs most of the high-voltage grid of the Northwest. Lines like this carry Montana power on to Washington and Idaho.',
      sources: [K.OSM] }],
    [/Selkirk - Cranbrook/i, { lede: 'A 500-kilovolt line in British Columbia, owned by BC Hydro. It crosses the top edge of this map and does not enter Montana.', sources: [K.OSM] }],
    [/Judson/i, { lede: 'A 345-kilovolt line of Basin Electric, a co-op based in North Dakota. It is in North Dakota, on the Eastern grid.', sources: [K.OSM] }],
  );

  // ----------------------------------------------------------------- tour
  const ALL = [-116.3, 44.3, -103.8, 49.1];
  TOUR.push(
    { title: 'Coal, water and wind', text: 'Montana generated 26.7 terawatt-hours of electricity in 2025. Coal made 36%, dams 32% and wind 23%. The state uses a little over half of its supply and sends the rest away. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'] },
    { title: 'One plant, a third of the power', text: 'Colstrip burns coal from the Rosebud Mine next door, delivered by conveyor belt. Two of its four units shut in 2020. Utilities in Washington and Oregon are leaving the plant, and on 1 January 2026 NorthWestern Energy became its majority owner.', box: [-107.5, 45.45, -105.75, 46.35], zoom: 1.7, select: 'colstrip', layers: ['plants', 'closed', 'lines', 'pipes', 'rivers'] },
    { title: 'The lines that take it west', text: 'The thick yellow lines carry 500 kilovolts. Two of them run side by side from Colstrip through Broadview, Garrison and Taft toward Washington and Idaho. They were built for coal power. Wind farms now send power down them too.', box: [-109.7, 45.35, -106.2, 46.75], zoom: 1.0, select: 'colstriplines', layers: ['plants', 'lines'] },
    { title: 'Coal that leaves by train', text: 'Montana mined 27 million tons of coal in 2024. Colstrip burns less than a quarter of that. Spring Creek, the largest mine, ships by rail to power plants in five states and sells to Japan and South Korea. The Decker mine nearby closed in 2021.', box: [-108.9, 44.75, -106.1, 46.6], zoom: 1.2, select: 'springcreek', layers: ['plants', 'pipes', 'closed', 'rivers'] },
    { title: 'Dams sold and bought back', text: 'Five dams crowd the falls of the Missouri at Great Falls. In 1997 Montana opened its power market, and the Montana Power Company sold its plants. Prices jumped in 2000 and 2001. In 2014 NorthWestern Energy bought 11 dams back for $900 million.', box: [-112.5, 46.4, -110.4, 48.0], zoom: 1.4, select: 'greatfalls', layers: ['plants', 'rivers', 'lines'] },
    { title: 'Federal dams and a tribal one', text: 'The largest dams are in the north-west. Libby and Hungry Horse are federal, and their power is sold across the Northwest. The dam at the foot of Flathead Lake has belonged to the Confederated Salish and Kootenai Tribes since 2015.', box: [-116.2, 47.1, -113.2, 49.0], zoom: 1.2, select: 'skq', layers: ['plants', 'rivers', 'lines', 'tribal'] },
    { title: 'Wind for the coast', text: 'Wind farms made 0.9 terawatt-hours in 2010 and 6.2 in 2025. The largest, Clearwater, stands north of Colstrip. Its buyers are utilities in Washington and Oregon, the same ones that are giving up their shares of the coal plant.', box: [-108.3, 45.5, -104.6, 47.5], zoom: 1.1, select: 'clearwater', layers: ['plants', 'lines'] },
    { title: 'Two grids in one state', text: 'Eastern Montana belongs to the Eastern grid, and the rest to the Western grid. The two are out of step, and power crosses only at converter stations like the one at Miles City. A proposed 422-mile line from Colstrip to North Dakota would carry 3,000 megawatts across the seam.', box: [-107.2, 45.6, -104.0, 47.3], zoom: 1.0, select: 'milescity', layers: ['plants', 'lines', 'pipes'] },
    { title: 'Who uses it', text: 'Homes, businesses and industry each take about a fifth of Montana\'s supply. Industry here includes oil refineries at Billings and Laurel. Data center developers have asked NorthWestern Energy for 150 to more than 1,000 megawatts each. Its whole Montana system peaks at about 1,300.', box: [-109.6, 45.2, -107.5, 46.4], zoom: 1.5, select: 'billings', layers: ['cities', 'plants', 'lines', 'pipes', 'closed'] },
    { title: 'What comes out of the stacks', text: 'Each gray circle is a plant\'s carbon dioxide for 2023. Montana\'s power plants released 11.8 million metric tons in 2024, down 42% from 2010, and coal plants released 10.6 million of that. Now explore: click any plant, line, pipeline or patch of open country.', box: ALL, select: 'colstrip', layers: ['plants', 'emit', 'closed', 'lines'] },
  );

  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    kinds: { mine: ['cities', 'mine', 'Mine'] },
    riverLede: 'A river. Dams on Montana\'s rivers make about a third of its electricity.',
    tribeLede: 'Tribal land. Tribes are sovereign. The Confederated Salish and Kootenai Tribes own the largest dam on the Flathead River.' });
})();
