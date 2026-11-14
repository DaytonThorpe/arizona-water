/* New Mexico Power: content for the electricity map.
   The shared machinery is in kit.js. Plant numbers (capacity, output, emissions) are not typed here: they come from the baked
   dataset in power/data/nm.js (EIA-860M inventory and EPA eGRID). research/new_mexico_power.md has the fact sheet and verification log. */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'PUBLIC SERVICE CO OF NM': ['Public Service Company of New Mexico (PNM)', 'PNM', 'iou'],
    'SOUTHWESTERN PUBLIC SERVICE CO': ['Southwestern Public Service (Xcel Energy)', 'Xcel', 'iou'],
    'EL PASO ELECTRIC CO': ['El Paso Electric', 'El Paso Electric', 'iou'],
    'NAVAJO TRIBAL UTILITY AUTHORITY': ['Navajo Tribal Utility Authority', 'NTUA', 'tribal'],
    'KIT CARSON ELECTRIC COOP, INC': ['Kit Carson Electric Cooperative', 'Kit Carson', 'coop'],
    'CITY OF FARMINGTON - (NM)': ['Farmington Electric Utility System', 'Farmington', 'public'],
    'LOS ALAMOS COUNTY': ['Los Alamos County utilities', 'Los Alamos', 'public'],
    'CITY OF GALLUP - (NM)': ['City of Gallup', 'Gallup', 'public'],
    'FARMERS ELECTRIC COOP, INC - (NM)': ['Farmers\' Electric Cooperative', 'Farmers\'', 'coop'],
    'LEA COUNTY ELECTRIC COOP, INC': ['Lea County Electric Cooperative', 'Lea County', 'coop'],
    'CENTRAL VALLEY ELEC COOP, INC': ['Central Valley Electric Cooperative', 'Central Valley', 'coop'],
    'ROOSEVELT COUNTY ELEC COOP INC': ['Roosevelt County Electric Cooperative', 'Roosevelt County', 'coop'],
    'SOUTHWESTERN ELECTRIC COOP INC - (NM)': ['Southwestern Electric Cooperative', 'Southwestern', 'coop'],
    'SPRINGER ELECTRIC COOP, INC': ['Springer Electric Cooperative', 'Springer', 'coop'],
    'OTERO COUNTY ELECTRIC COOP INC': ['Otero County Electric Cooperative', 'Otero County', 'coop'],
    'CENTRAL NEW MEXICO EL COOP, INC': ['Central New Mexico Electric Cooperative', 'Central NM', 'coop'],
    'SOCORRO ELECTRIC COOP, INC': ['Socorro Electric Cooperative', 'Socorro', 'coop'],
    'CONTINENTAL DIVIDE EL COOP INC': ['Continental Divide Electric Cooperative', 'Continental Divide', 'coop'],
    'JEMEZ MOUNTAINS ELEC COOP, INC': ['Jemez Mountains Electric Cooperative', 'Jemez Mountains', 'coop'],
    'SIERRA ELECTRIC COOP, INC': ['Sierra Electric Cooperative', 'Sierra', 'coop'],
    'COLUMBUS ELECTRIC COOP, INC': ['Columbus Electric Cooperative', 'Columbus', 'coop'],
    'MORA-SAN MIGUEL ELEC COOP': ['Mora-San Miguel Electric Cooperative', 'Mora-San Miguel', 'coop'],
    'NORTHERN RIO ARRIBA E COOP INC': ['Northern Rio Arriba Electric Cooperative', 'N. Rio Arriba', 'coop'],
    'NAVOPACHE ELECTRIC COOP, INC': ['Navopache Electric Cooperative', 'Navopache', 'coop'],
    'DUNCAN VALLEY ELEC COOP, INC': ['Duncan Valley Electric Cooperative', 'Duncan Valley', 'coop'],
  };
  // Left out: the Western Area Power Administration (a federal wholesaler, drawn as a block of the north-west), Rio Grande Electric Cooperative
  // (a Texas co-op drawn as a block of southern New Mexico), and two co-ops based in Oklahoma and Colorado that reach a sliver of the frame.
  const K = window.POWERKIT.begin({ id: 'nm', st: 'NM', name: 'New Mexico', util: UTIL, bigUtils: ['PNM', 'Xcel', 'El Paso Electric', 'NTUA'],
    lineLede: { '345': 'A long-distance line. Lines at 345 kilovolts are the backbone of New Mexico\'s grid. They link the Four Corners plants to Albuquerque and Albuquerque to the south.',
      '230': 'A regional line. Lines at 230 kilovolts carry power across the Navajo Nation and the oil fields of the south-east.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. New Mexico produces far more gas than it burns, so most of the gas in lines like this one is on its way to other states.' });
  const { P, EY, INV, SRC_INV, SRC_EGRID, HIFLD, OSM } = K;

  // ------------------------------------------------------------------ sources
  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923w: ['EIA power plant cooling-water data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility sales data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA New Mexico Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/newmexico/'],
    hist: ['EIA state generation and emissions history', 'https://www.eia.gov/electricity/data/state/'],
    roof: ['EIA small-scale solar estimates', 'https://www.eia.gov/electricity/data/eia861m/'],
    inv: SRC_INV,
    lines: ['Federal transmission line file (HIFLD / Oak Ridge National Laboratory)', 'https://hifld-geoplatform.hub.arcgis.com/'],
    gasProd: ['EIA: marketed gas production by state', 'https://www.eia.gov/dnav/ng/ng_prod_sum_a_EPG0_VGM_mmcf_a.htm'],
    oilProd: ['EIA: crude oil production by state', 'https://www.eia.gov/dnav/pet/pet_crd_crpdn_adc_mbbl_a.htm'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
    sunzia: ['EIA Today in Energy, 12 Jun 2026', 'https://www.eia.gov/todayinenergy/detail.php?id=67766'],
    kjzz4c: ['KJZZ, 5 Oct 2026', 'https://www.kjzz.org/business/2026-10-05/aps-signs-agreement-that-could-extend-four-corners-coal-power-plant-use-until-2038'],
    abq4c: ['Albuquerque Journal, 19 Aug 2025', 'https://www.abqjournal.com/business/new-mexicos-four-corners-power-plant-could-see-operations-continue-beyond-2031/390298'],
    ej: ['Earthjustice summary of utility filings, Sep 2025', 'https://earthjustice.org/feature/coal-ash-states/new-mexico'],
    abqSj: ['Albuquerque Journal, 24 Aug 2024', 'https://www.abqjournal.com/business/this-era-is-over-pnm-demolishes-san-juan-generating-station/497105'],
    coalage: ['Coal Age, 3 Nov 2022', 'https://coalage.com/us-news/the-end-of-an-era-at-san-juan'],
    tsEsc: ['Tri-State and Origis Energy, 11 Jun 2024', 'https://tristate.coop/origis-energy-and-tri-state-announce-commercial-operation-escalante-solar'],
    eta: ['New Mexico Indian Affairs Department: Energy Transition Act', 'https://www.iad.nm.gov/programs-and-funding/energy-transition-act/'],
    spirit: ['Pattern Energy, 6 Dec 2021', 'https://patternenergy.com/pattern-energy-and-reta-announce-energization-western-spirit-transmission-line-new-mexico/'],
    urenco: ['Urenco USA, 2 Jun 2026', 'https://www.urenco.com/news/usa/2026/urenco-usa-plans-significant-expansion-of-us-uranium-enrichment-capacity'],
    wipp: ['US Department of Energy: WIPP site', 'https://wipp.energy.gov/wipp-site.asp'],
    holtec: ['American Nuclear Society, 10 Oct 2025', 'https://www.ans.org/news/2025-10-10/article-7449/holtec-pulls-out-of-new-mexico-snf-interim-storage-project/'],
    grants: ['EPA: Grants Mining District', 'https://www.epa.gov/grants-mining-district'],
    methane: ['New Mexico: methane waste rule', 'https://www.climateaction.nm.gov/emnrd/methane-waste-rule/'],
    kanw: ['Source New Mexico via KANW, 21 Jul 2026', 'https://www.kanw.org/new-mexico-news/2026-07-21/pnm-private-equity-firm-extend-merger-deadline-to-mid-2027-after-regulators-deem-stock-sale-illegal'],
    txnm: ['TXNM Energy results for 2025, 27 Feb 2026', 'https://last10k.com/sec-filings/pnmxo/0001108426-26-000006.htm'],
    abqPeak: ['Albuquerque Journal, 7 Aug 2026', 'https://www.abqjournal.com/business/new-mexicos-power-grid-hits-all-time-high-amid-punishing-heat/3098905'],
    sps: ['Utility Dive, 26 May 2026', 'https://www.utilitydive.com/news/new-mexico-regulators-approve-sps-9b-gas-heavy-resource-plan/820978/'],
    lobo: ['Daily Lobo, 17 Aug 2026', 'https://www.dailylobo.com/article/2026/08/project-jupiter-where-the-ai-data-center-project-stands-in-nm'],
    ct: ['CleanTechnica, 30 May 2026', 'https://cleantechnica.com/2026/05/30/giant-data-center-in-new-mexico-will-be-powered-by-fuel-cells/'],
    prcDc: ['New Mexico Public Regulation Commission briefing, 13 Jul 2026', 'https://www.nmlegis.gov/handouts/WNR%20071326%20Item%207%20PRC%20Data%20Centers%20Large%20Load%20Energy%20Use.pdf'],
    abqDc: ['Albuquerque Journal, 17 Aug 2025', 'https://www.abqjournal.com/business/data-center-boom-puts-new-mexicos-power-grid-and-climate-goals-to-the-test/399588'],
    edam: ['California ISO, 1 Jul 2025', 'https://www.caiso.com/about/news/news-releases/public-service-company-of-new-mexico-commits-to-join-the-extended-day-ahead-market'],
    citydesk: ['City Desk ABQ, 14 Mar 2025', 'https://citydesk.org/2025/03/14/prc-commissioners-taken-surprise-by-el-paso-electrics-decision-to-join-new-market/'],
    hitachi: ['Hitachi Energy: Blackwater station', 'https://www.hitachienergy.com/news-and-events/customer-stories/blackwater'],
    torch: ['Kit Carson Electric Cooperative and Guzman Energy, 3 Jun 2022', 'https://www.torchcleanenergy.com/press/kitcarsonelectric'],
    srpNavajo: ['Salt River Project, 15 May 2026', 'https://media.srpnet.com/srp-crews-bring-reliable-power-to-13-remote-homes-in-the-navajo-nation/'],
  };
  const TWH = 1e6;
  const BUDGET = {
    title: 'New Mexico generated 39 terawatt-hours of electricity in 2025',
    lede: 'Wind farms made more of it than any other source. One coal plant made a fifth. About a fifth of what New Mexico generates is used in other states.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: TWH / 2, shape: 'bolt', unitLine: 'Each bolt = half a terawatt-hour (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is 2025. The second is 2024, the latest year for which the federal government has published where the power went.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'wind', label: 'Wind', pct: 36.5, af: 14.39 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'sunzia', note: 'From 31 wind farms on the plains and mesas of central and eastern New Mexico. In 2010 wind made 1.8 TWh. The largest wind farm in the country, SunZia, was finished in 2026 and is barely in this figure.' },
      { id: 'gas', label: 'Natural gas', pct: 26.6, af: 10.50 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'hobbs', note: 'Burned in plants near the oil fields of the south-east, around Albuquerque and along the southern border. The plants burned about 98 billion cubic feet in 2025. New Mexico wells produced 42 times that much.' },
      { id: 'coal', label: 'Coal', pct: 20.7, af: 8.18 * TWH, color: '#5c5a66', layer: 'plants,closed', feat: 'fourcorners', note: 'All from one plant, Four Corners. Arizona utilities own most of it and take most of its power. In 2005 coal made 30.0 TWh, or 85% of New Mexico\'s electricity.' },
      { id: 'solar', label: 'Solar farms', pct: 15.9, af: 6.27 * TWH, color: '#f2c230', layer: 'plants', feat: 'atrisco', note: 'Up from 4.3 TWh in 2024 and 0.6 TWh in 2015. Rooftop panels are not counted here: the federal estimate for them is another 0.8 TWh.' },
      { id: 'hydro', label: 'Hydropower', pct: 0.3, af: 0.125 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'navajodam', val: '0.3% &middot; 0.1 TWh', note: 'Four small plants at dams on the San Juan River, the Rio Chama and the Rio Grande.' },
      { id: 'other', tiny: true, label: 'Geothermal and biogas', af: 0.073 * TWH, color: '#8a5a3a', val: '0.2% &middot; 0.07 TWh', layer: 'plants', feat: 'lightningdock', note: 'One geothermal plant in the south-west corner (0.06 TWh) and small plants that burn gas from landfills and sewage.' },
    ],
    uses: [
      { id: 'ind', label: 'Industry', pct: 33.6, af: 13.36 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'oilfield', note: 'Oil and gas fields, mines, refineries and factories. Sales to industry rose from 8.2 TWh in 2018 to 13.4 TWh in 2024. The utility for the oil fields of the south-east made 57% of the 2024 sales.' },
      { id: 'biz', label: 'Businesses', pct: 24.2, af: 9.59 * TWH, color: '#3f8f46', layer: 'cities', feat: 'meta', note: 'Shops, offices, schools, data centers and other commercial customers.' },
      { id: 'homes', label: 'Homes', pct: 18.5, af: 7.35 * TWH, color: '#c8442e', layer: 'cities', feat: 'albuquerque', note: 'Sold to 936,000 households in 2024.' },
      { id: 'export', label: 'Sent to other states', pct: 18.9, af: 7.49 * TWH, color: '#eb6834', layer: 'lines', feat: 'fourcorners', note: 'What is left after New Mexico\'s own use and losses. It is a net figure. The federal government calculates it and does not meter it. In 2022 it was 12.2 TWh.' },
      { id: 'loss', label: 'Lost on the wires', pct: 3.6, af: 1.41 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'misc', label: 'Used at plants or not accounted for', pct: 1.3, af: 0.50 * TWH, color: '#5c5a66', note: 'Power that plant owners used on site without selling it (0.26 TWh), plus 0.24 TWh the federal balance could not assign.' },
    ],
    body: '<p class="gcap">2025: total 39.4 TWh from plants of 1 megawatt or more. Batteries used 0.1 TWh more than they gave back, so the rows add up to slightly more than the total. 2024: 39.7 TWh generated. Sources: <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/newmexico/" target="_blank" rel="noopener">EIA New Mexico Electricity Profile, 2024</a> &middot; <a href="https://www.eia.gov/electricity/data/eia861m/" target="_blank" rel="noopener">EIA small-scale solar</a> &middot; <a href="https://www.eia.gov/electricity/data/state/" target="_blank" rel="noopener">EIA state history</a> &middot; <a href="https://www.eia.gov/dnav/ng/ng_prod_sum_a_EPG0_VGM_mmcf_a.htm" target="_blank" rel="noopener">EIA gas production</a></p>',
  };
  const HUD = [['39.4 TWh', 'electricity generated in 2025'], ['36%', 'of it from wind'], ['2,264 MW', 'record demand on the largest utility, 3 Aug 2026']];
  const ABOUT = K.aboutStd('Where a card gives 2025 output, cooling water or fuel deliveries, the figure is our sum of federal plant reports (EIA-923), and the card says the year. Only a few of the lines carry a name in OpenStreetMap. The two halves of the SunZia wind farm are shown as one plant. Three utility areas are left out because the source draws them as blocks that do not match where they deliver power: the Western Area Power Administration, Rio Grande Electric Cooperative and Tri-County Electric Cooperative. The map frame takes in El Paso and part of west Texas, and the Springerville and Coronado coal plants in Arizona; those plants are clickable but are not in New Mexico\'s totals.');
  const FEATURES = [], BROWSE = [], TOUR = [], AREAS = {}, PIPECARDS = {}, LINECARDS = [];
  const add = o => FEATURES.push(o);
  const COALASH = 'Coal ash is what is left after coal burns. It is stored on site in ponds and landfills, and federal rules require the owner to test the groundwater around them.';

  // ----------------------------------------------------------------- coal: running, closed, and the mines
  add({ id: 'fourcorners', kind: 'coal', plant: 2442, name: 'Four Corners Power Plant', short: 'Four Corners', tier: 1,
    lede: 'The last coal plant running in New Mexico. It stands on the Navajo Nation, burns coal from the mine next door, and sends most of its power to Arizona.',
    stats: [['8.2 TWh', 'electricity generated in 2025: all of New Mexico\'s coal power, and 20.7% of everything generated in the state'], ['63%', 'share owned by Arizona Public Service, which runs the plant. Public Service Company of New Mexico owns 13%'], ['4.5M tons', 'coal delivered in 2025, all from the Navajo Mine'], ['12,900 AF', 'cooling water consumed in 2025. An acre-foot (AF) is 325,851 gallons']],
    body: '<p>The other owners are Salt River Project (10%) and Tucson Electric Power (7%), both of Arizona, and the Navajo Transitional Energy Company (7%), which the Navajo Nation owns. The plant is operated as part of Arizona Public Service\'s grid, not a New Mexico utility\'s. In August 2025 it employed 251 people and about 100 contractors.</p><p>The owners had planned to stop in 2031. In September 2026 Arizona Public Service signed an agreement with the Navajo Transitional Energy Company that could keep the plant running until 2038. It said the agreement alone does not settle the date. In August 2025 Public Service Company of New Mexico said it still planned to leave by 2031.</p><p>' + COALASH + ' A 2025 summary of the plant\'s own filings lists 19.2 million cubic yards of ash here, and boron in groundwater at 74 times the federal health-based level.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.abq4c, S.kjzz4c, S.ej] });
  add({ id: 'navajomine', kind: 'coalmineop', lon: -108.47, lat: 36.60, name: 'Navajo Mine', short: 'Navajo Mine', tier: 3,
    lede: 'A surface coal mine on the Navajo Nation with one customer, the Four Corners plant beside it. The Navajo Transitional Energy Company, which the Navajo Nation owns, owns the mine.',
    stats: [['4.5M tons', 'coal delivered to Four Corners in 2025'], ['1', 'power plants it supplies'], ['0', 'other New Mexico mines that delivered coal to a New Mexico power plant in 2025']],
    body: '<p>The mine and the plant depend on each other. A new gas plant is planned beside the mine and the coal plant: turn on Planned plants to see it.</p><p class="gcap">The mine stretches south from the plant for many miles. The marker is approximate.</p>',
    sources: [S.e923f, S.abq4c, S.inv] });
  add({ id: 'ntecgas', kind: 'plannedp', plant: 66478, name: 'Navajo Transitional Energy Company gas plant (planned)', short: 'Navajo gas plant (planned)', tier: 3,
    lede: 'A gas plant that the Navajo Nation\'s energy company plans beside the Four Corners coal plant. The federal list shows 18 gas turbines.',
    stats: [['18', 'gas turbines listed, each of 60.5 MW'], ['June 2028', 'planned start reported to the federal government'], ['Pending', 'status of its regulatory approvals in September 2026. Construction had not started']],
    body: '<p>It is the largest planned gas plant in the federal list for New Mexico.</p>',
    sources: [S.inv] });
  add({ id: 'sanjuan', kind: 'closed', plant: 2451, name: 'San Juan Generating Station (closed 2022)', short: 'San Juan (closed)', tier: 2,
    lede: 'A coal plant west of Farmington. Its last two units stopped in 2022 and its smokestacks were demolished in 2024. A solar farm now stands on its land.',
    stats: [['2017 and 2022', 'years its units stopped: two in 2017, the last two in 2022'], ['About 450', 'workers who lost their jobs when it closed'], ['24 Aug 2024', 'date the four smokestacks, each about 400 feet tall, were brought down'], ['30.0 to 8.2 TWh', 'electricity made from coal in New Mexico in 2005 and in 2025']],
    body: '<p>Public Service Company of New Mexico owned most of the plant. State regulators approved its plan to abandon the plant in 2020, a year after the Energy Transition Act became law. The act provides money to support workers and communities affected by coal plant closures. State agencies had distributed about $20 million of it by August 2024.</p><p>The City of Farmington, a part owner, spent about $3 million trying to keep the plant open with equipment to capture its carbon dioxide. The effort ended in 2022. San Juan County required the plant to be demolished.</p>',
    sources: [S.abqSj, S.eta, S.hist] });
  add({ id: 'sanjuanmine', kind: 'coalmine', lon: -108.50, lat: 36.83, name: 'San Juan Mine (closed 2022)', short: 'San Juan Mine (closed)', tier: 3,
    lede: 'The mine that fed the San Juan plant and nothing else. Its crews dug the last ton in September 2022.',
    stats: [['1973', 'year it began, as a surface mine, when the plant\'s first unit started'], ['September 2022', 'last coal mined'], ['Nearly 50 years', 'time it and the nearby La Plata mine were the plant\'s only coal suppliers']],
    body: '<p>The mine later moved underground. Westmoreland owned it when it closed.</p><p class="gcap">The marker is approximate. The mine lies beside the plant site.</p>',
    sources: [S.coalage] });
  add({ id: 'sanjuansolar', kind: 'solar', plant: 66574, name: 'San Juan Solar', short: 'San Juan Solar', tier: 3,
    lede: 'A solar farm and battery on the land of the closed San Juan coal plant. It opened in 2024 and sells its power to Public Service Company of New Mexico.',
    stats: [['0.48 TWh', 'electricity generated in 2025'], ['561 MWh', 'energy its battery holds when full'], ['20 years', 'length of the power contract']],
    body: '<p>The Energy Transition Act supports building replacement power in San Juan County, where the coal plant paid local taxes. Two more solar farms with batteries are under construction just to the north-east: turn on Planned plants to see them.</p>',
    sources: [S.e923, S.inv, S.abqSj, S.eta] });
  add({ id: 'escalante', kind: 'closed', plant: 87, name: 'Escalante Station (closed 2020)', short: 'Escalante (closed)', tier: 3,
    lede: 'A coal plant near Prewitt, between Gallup and Grants. Tri-State, a power supplier owned by rural electric co-ops, retired it in 2020. A solar farm was built on the site.',
    stats: [['2020', 'year it retired'], ['200 MW', 'capacity of the solar farm that replaced it, running since 1 June 2024'], ['0.53 TWh', 'electricity the solar farm generated in 2025'], ['1.09M cubic yards', 'coal ash in the landfill left on site']],
    body: '<p>The solar farm sells to Tri-State, which supplies 11 electric co-ops in New Mexico.</p><p>' + COALASH + ' A 2025 summary of the owner\'s filings lists lithium in groundwater at 15 times the federal health-based level and arsenic at 3 times.</p>',
    sources: [S.tsEsc, S.e923, S.ej] });
  add({ id: 'leeranch', kind: 'coalmineop', lon: -107.70, lat: 35.55, name: 'Lee Ranch Mine', short: 'Lee Ranch Mine', tier: 3,
    lede: 'A surface coal mine north of Grants. In 2025 all of the coal it sent to power plants went by rail to one plant in Arizona.',
    stats: [['1.44M tons', 'coal delivered in 2025 to the Springerville plant in Arizona'], ['42%', 'share of Springerville\'s coal that came from here. The rest came from Wyoming'], ['0', 'New Mexico power plants that took its coal in 2025']],
    body: '<p>Springerville is on this map, across the state line to the south-west.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.e923f] });

  // ----------------------------------------------------------------- wind
  add({ id: 'sunzia', kind: 'wind', plant: 66923, name: 'SunZia Wind', short: 'SunZia Wind', tier: 1,
    lede: 'The largest wind farm in the United States. Its 916 turbines were due to begin commercial operation in June 2026, and a direct-current line carries the power 550 miles to Arizona.',
    stats: [['916', 'turbines, in San Miguel, Lincoln and Torrance counties'], ['3,021 MW', 'what the line to Arizona can carry'], ['2,131 MW', 'of the line\'s capacity bound for Southern California'], ['3,997 to 7,647 MW', 'wind capacity in New Mexico before and after SunZia, by the federal count in June 2026']],
    body: '<p>The wind farm is more than three times the size of the next largest in the country. Construction began in 2023.</p><p>Federal files show the wind farm run as part of the grid operated for most of California, not a New Mexico utility\'s. Most of its power leaves the state. It generated 0.12 TWh in 2025 while turbines were being tested.</p><p class="gcap">The federal inventory lists a northern and a southern half at one location. They are shown here as one plant. The turbines are spread over a much wider area than the marker. The orange line running west from here is the direct-current line.</p>',
    sources: [S.sunzia, S.e923, S.inv] });
  add({ id: 'westernspirit', kind: 'wind', plant: 63981, name: 'Red Cloud and the Western Spirit wind farms', short: 'Western Spirit wind', tier: 2,
    lede: 'Four wind farms built at once in 2021, with a new line to carry their power to the grid near Albuquerque. Red Cloud is the largest of the four.',
    stats: [['1,050+ MW', 'capacity of the four wind farms together'], ['155 miles', 'length of the Western Spirit line, at 345 kilovolts'], ['800 MW', 'wind power the line was built to collect'], ['1.18 TWh', 'electricity Red Cloud generated in 2025']],
    body: '<p>The other three are Clines Corners, Tecolote and Duran Mesa. A state agency, the Renewable Energy Transmission Authority, developed the line with Pattern Energy. It was switched on in December 2021 and Public Service Company of New Mexico was to buy and run it.</p><p class="gcap">The table below is for Red Cloud only. Click the line that runs north-west from these wind farms to see the Western Spirit line.</p>',
    sources: [S.spirit, S.e923, S.inv] });
  add({ id: 'sagamore', kind: 'wind', plant: 63578, name: 'Sagamore Wind', short: 'Sagamore Wind', tier: 2,
    lede: 'A wind farm near Portales owned by the utility itself, Southwestern Public Service. It generated more electricity in 2025 than any other wind farm in New Mexico.',
    stats: [['2.11 TWh', 'electricity generated in 2025'], ['4.14 TWh', 'generated in 2025 by all wind farms on the eastern grid in New Mexico'], ['1,100 MW', 'more wind in the plan state regulators approved for this utility on 7 May 2026']],
    body: '<p>This part of New Mexico is on the eastern grid, which is not synchronized with the grid west of here. Power from this wind farm flows to the utility\'s customers in eastern New Mexico and the Texas Panhandle.</p>',
    sources: [S.e923, S.sps] });
  add({ id: 'elcabo', kind: 'wind', plant: 58098, name: 'El Cabo Wind', short: 'El Cabo Wind', tier: 3,
    lede: 'A wind farm at Encino that opened in 2017.',
    stats: [['1.06 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'lajoya', kind: 'wind', plant: 61044, name: 'La Joya Wind', short: 'La Joya Wind', tier: 3,
    lede: 'A wind farm north-west of Encino in two parts. Public Service Company of New Mexico buys the output.',
    stats: [['0.91 TWh', 'electricity generated in 2025'], ['166 and 140 MW', 'output of the two parts, as the utility describes them'], ['80%', 'share of the utility\'s energy in 2025 that it counts as carbon-free']],
    sources: [S.e923, S.txnm, ['Public Service Company of New Mexico annual report for 2025', 'https://www.sec.gov/Archives/edgar/data/81023/000110842626000006/pnm-20251231.htm']] });
  add({ id: 'nmwec', kind: 'wind', plant: 56097, name: 'New Mexico Wind Energy Center', short: 'NM Wind Energy Center', tier: 3,
    lede: 'The oldest large wind farm in New Mexico. It opened in 2003 near House, on the edge of the eastern plains.',
    stats: [['0.50 TWh', 'electricity generated in 2025'], ['0.8 to 14.4 TWh', 'electricity from wind in New Mexico in 2005 and in 2025']],
    sources: [S.e923, S.hist, S.inv] });
  add({ id: 'grady', kind: 'wind', plant: 60317, name: 'Grady and Broadview wind farms', short: 'Grady wind', tier: 3,
    lede: 'Three wind farms north of Clovis, at the Texas line. Federal files list Grady as part of the western grid of Public Service Company of New Mexico, not the eastern grid whose utility surrounds it.',
    stats: [['2.01 TWh', 'electricity generated by the three in 2025'], ['545 MW', 'capacity of the three together']],
    body: '<p class="gcap">The table below is for Grady only. The other two are Broadview JN and Broadview KW, just to the west.</p>',
    sources: [S.e923, S.inv] });
  add({ id: 'osogrande', kind: 'wind', plant: 63502, name: 'Oso Grande Wind', short: 'Oso Grande Wind', tier: 3,
    lede: 'A wind farm between Roswell and Hobbs that belongs to Tucson Electric Power of Arizona. Its output counts as New Mexico generation and is used in Tucson.',
    stats: [['0.55 TWh', 'electricity generated in 2025'], ['0.80 TWh', 'generated in 2025 by the two New Mexico wind farms run as part of Tucson Electric Power\'s grid']],
    sources: [S.e923, S.inv] });

  // ----------------------------------------------------------------- natural gas
  add({ id: 'hobbs', kind: 'gas', plant: 56458, name: 'Hobbs Generating Station', short: 'Hobbs', tier: 2,
    lede: 'The gas plant that generated the most electricity in New Mexico in 2025. It sits in the Permian Basin oil field, on the eastern grid.',
    stats: [['3.28 TWh', 'electricity generated in 2025'], ['26.0 Bcf', 'natural gas delivered in 2025, all listed as supplied by Xcel Energy. Bcf means billion cubic feet'], ['0', 'cooling water it reported using in 2025']],
    body: '<p>An independent company, Lea Power Partners, operates the plant. Xcel Energy owns Southwestern Public Service, the utility for this corner of the state.</p><p>The plant burns gas in turbines and then uses the hot exhaust to make steam for a second turbine. That design, called combined cycle, gets more electricity from the same gas.</p>',
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'cunningham', kind: 'gas', plant: 2454, name: 'Cunningham and Maddox stations', short: 'Cunningham', tier: 3,
    lede: 'Two older gas plants west of Hobbs that belong to Southwestern Public Service. The utility has added a solar farm and a battery beside them.',
    stats: [['2.36 TWh', 'electricity generated by the two plants in 2025'], ['25.5 Bcf', 'natural gas delivered to the two in 2025'], ['4,100 AF', 'cooling water the two consumed in 2025'], ['2,088 MW', 'new gas capacity in the plan state regulators approved for this utility on 7 May 2026']],
    body: '<p>The approved plan covers the utility\'s whole system in New Mexico and Texas: about 3,800 MW of new plants, at a cost of $9.38 billion, to start between 2028 and 2030. The vote was 2 to 1.</p><p class="gcap">The table below is for Cunningham only.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.sps] });
  add({ id: 'luna', kind: 'gas', plant: 55343, name: 'Luna Energy Facility', short: 'Luna', tier: 1,
    lede: 'A gas plant near Deming, where the main lines of southern New Mexico meet. Public Service Company of New Mexico operates it.',
    stats: [['1.66 TWh', 'electricity generated in 2025, half the 3.33 TWh of 2024'], ['12.5 Bcf', 'natural gas delivered in 2025'], ['1,700 AF', 'cooling water consumed in 2025']],
    body: '<p>Federal fuel reports list Tucson Electric Power and the mining company Phelps Dodge, now part of Freeport-McMoRan, as buyers of part of the plant\'s gas. A 130 MW battery opened six miles to the east in 2026.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.prof, S.inv] });
  add({ id: 'afton', kind: 'gas', plant: 55210, name: 'Afton Generating Station', short: 'Afton', tier: 3,
    lede: 'A gas plant south-west of Las Cruces that belongs to Public Service Company of New Mexico.',
    stats: [['0.46 TWh', 'electricity generated in 2025'], ['4.2 Bcf', 'natural gas delivered in 2025']],
    sources: [S.e923, S.e923f] });
  add({ id: 'riogrande', kind: 'gas', plant: 2444, name: 'Rio Grande Power Station', short: 'Rio Grande', tier: 3,
    lede: 'El Paso Electric\'s gas plant in New Mexico, at Sunland Park beside the Rio Grande. Its oldest unit dates from the 1950s.',
    stats: [['0.79 TWh', 'electricity generated in 2025'], ['8.2 Bcf', 'natural gas delivered in 2025'], ['660 AF', 'cooling water consumed in 2025']],
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'newman', kind: 'gas', plant: 3456, name: 'Newman Power Station (Texas)', short: 'Newman (Texas)', tier: 3,
    lede: 'El Paso Electric\'s largest plant. It is in Texas, a few miles from the state line, and serves the utility\'s customers in both states.',
    stats: [['4.00 TWh', 'electricity generated in 2025. It counts toward Texas, not New Mexico'], ['1.84 TWh', 'generated in 2025 by all plants in New Mexico that are run as part of El Paso Electric\'s grid']],
    sources: [S.e923] });
  add({ id: 'riobravo', kind: 'gas', plant: 55039, name: 'Rio Bravo and Reeves stations', short: 'Albuquerque gas plants', tier: 3,
    lede: 'Two gas plants inside Albuquerque that belong to Public Service Company of New Mexico.',
    stats: [['0.29 TWh', 'electricity Rio Bravo generated in 2025'], ['0.17 TWh', 'electricity Reeves generated in 2025'], ['240 AF', 'cooling water Reeves consumed in 2025']],
    body: '<p class="gcap">The table below is for Rio Bravo, in the south of the city. Reeves is in the north.</p>',
    sources: [S.e923, S.e923w] });
  add({ id: 'pyramid', kind: 'gas', plant: 7975, name: 'Pyramid Generating Station', short: 'Pyramid', tier: 3,
    lede: 'Four gas turbines near Lordsburg that belong to Tri-State, the power supplier for most rural co-ops in western New Mexico.',
    stats: [['0.27 TWh', 'electricity generated in 2025']], sources: [S.e923] });

  // ----------------------------------------------------------------- solar and batteries
  add({ id: 'atrisco', kind: 'solar', plant: 67003, name: 'Atrisco Solar and its battery', short: 'Atrisco Solar', tier: 2,
    lede: 'The solar farm that generated the most electricity in New Mexico in 2025, on the mesa west of Albuquerque. A battery of the same power stands three miles away.',
    stats: [['0.72 TWh', 'electricity generated in 2025'], ['300 MW', 'power of the Atrisco battery'], ['1,200 MWh', 'energy that battery holds when full: four hours at full power'], ['1,360 MW', 'all large batteries running in New Mexico in September 2026, holding 5,179 MWh']],
    body: '<p>Demand in Albuquerque peaks around 5 p.m. on summer days, as solar output is falling. A battery moves some midday power into the evening. In 2025 New Mexico\'s batteries took in 0.1 TWh more than they gave back, because some energy is lost in charging and discharging.</p><p>Another 928 MW of batteries was planned in September 2026.</p>',
    sources: [S.e923, S.inv, S.abqPeak] });
  add({ id: 'arroyo', kind: 'solar', plant: 63172, name: 'Arroyo Solar', short: 'Arroyo Solar', tier: 3,
    lede: 'A solar farm with a large battery on the high desert in the north-east of McKinley County.',
    stats: [['0.68 TWh', 'electricity generated in 2025'], ['4 hours', 'time its battery can run at full power: 150 MW, 600 MWh']],
    sources: [S.e923, S.inv] });
  add({ id: 'jicarilla', kind: 'solar', plant: 66163, name: 'Jicarilla Solar', short: 'Jicarilla Solar', tier: 3,
    lede: 'Two solar farms in Rio Arriba County, on the Jicarilla Apache Nation. One has a battery.',
    stats: [['0.24 TWh', 'electricity generated by the two in 2025'], ['100 MW', 'solar capacity of the two together']],
    body: '<p class="gcap">The table below is for Jicarilla Solar 1 only. Jicarilla Solar 2 is about 13 miles to the south.</p>',
    sources: [S.e923, S.inv] });
  add({ id: 'kitcarson', kind: 'solar', plant: 63728, name: 'Taos Mesa solar: Kit Carson Electric', short: 'Kit Carson solar', tier: 1,
    lede: 'The co-op that serves Taos said in 2022 that solar farms now meet all of its daytime demand on summer days. This solar farm and battery completed the set.',
    stats: [['41 MW', 'solar spread across the co-op\'s territory, by its 2022 count'], ['15 MW', 'batteries, by the same count'], ['Nearly 30,000', 'members of the co-op'], ['2016', 'year it left Tri-State, the supplier owned by rural co-ops, for another wholesaler']],
    body: '<p>The co-op serves Taos, Colfax and Rio Arriba counties. It paid Tri-State a fee to leave and now buys the rest of its power from Guzman Energy. A second solar farm with a battery opened near the Colorado line in 2025.</p>',
    sources: [S.torch, S.inv] });
  add({ id: 'santateresa', kind: 'solar', plant: 68866, name: 'Santa Teresa Solar', short: 'Santa Teresa Solar', tier: 3,
    lede: 'A solar farm for El Paso Electric at the southern border. It opened in 2026 with a battery that was finished but not yet in service in September.',
    stats: [['0.91 TWh', 'electricity from all solar farms on El Paso Electric\'s grid in New Mexico in 2025, before this one opened']],
    sources: [S.inv, S.e923, S.abqDc] });
  add({ id: 'sandiabattery', kind: 'battery', plant: 68210, name: 'Sandia Energy Center', short: 'Sandia battery', tier: 3,
    lede: 'A battery plant in south-east Albuquerque that the utility owns itself. It opened in 2026.',
    stats: [['4 hours', 'time it can run at full power: 60 MW, 240 MWh']],
    body: '<p>Public Service Company of New Mexico has asked regulators for 610 MW more battery storage, along with 800 MW of wind, 240 MW of solar and a 40 MW addition to a gas plant.</p>',
    sources: [S.inv, S.abqPeak] });

  // ----------------------------------------------------------------- hydro and geothermal
  add({ id: 'elephantbutte', kind: 'hydro', plant: 6402, name: 'Elephant Butte Dam', short: 'Elephant Butte', tier: 1,
    lede: 'A federal dam on the Rio Grande. Its power plant can make electricity only from the water released downstream, and in 2025 it made very little.',
    stats: [['0.017 TWh', 'electricity generated in 2025, 0.04% of New Mexico\'s total'], ['1940', 'year the power plant opened'], ['0.3%', 'hydropower\'s share of New Mexico generation in 2025']],
    body: '<p>The US Bureau of Reclamation runs the dam. In 2023 the plant\'s net output was below zero: it used slightly more power than it made, which is why the table below shows a negative figure.</p>',
    sources: [S.e923, S.inv] });
  add({ id: 'navajodam', kind: 'hydro', plant: 584, name: 'Navajo Dam', short: 'Navajo Dam', tier: 3,
    lede: 'A federal dam on the San Juan River. The City of Farmington owns the power plant at its foot, the state\'s largest source of hydropower.',
    stats: [['0.088 TWh', 'electricity generated in 2025, 70% of New Mexico\'s hydropower'], ['1989', 'year the power plant opened']],
    sources: [S.e923, S.inv] });
  add({ id: 'abiquiu', kind: 'hydro', plant: 7789, name: 'Abiquiu Dam', short: 'Abiquiu Dam', tier: 3,
    lede: 'A flood-control dam on the Rio Chama. Los Alamos County owns the power plant here and a smaller one upstream at El Vado Dam.',
    stats: [['0.016 TWh', 'electricity generated here in 2025'], ['0.004 TWh', 'generated at El Vado Dam in 2025']],
    sources: [S.e923, S.inv] });
  add({ id: 'lightningdock', kind: 'geo', plant: 58629, name: 'Lightning Dock Geothermal', short: 'Lightning Dock', tier: 2,
    lede: 'The only geothermal power plant in New Mexico, in the Animas Valley near the Arizona line.',
    stats: [['0.058 TWh', 'electricity generated in 2025'], ['150 MW', 'size of a geothermal plant that Meta and XGS Energy announced in 2025 to supply Meta\'s data center. Its site was not given']],
    sources: [S.e923, S.inv, S.abqDc] });

  // ----------------------------------------------------------------- fuel supply
  add({ id: 'permian', kind: 'gasfield', lon: -103.60, lat: 32.20, name: 'Permian Basin: oil and gas', short: 'Permian Basin', tier: 1,
    lede: 'The oil field under south-east New Mexico and west Texas. It made New Mexico the second-largest oil producer and third-largest gas producer among the states.',
    stats: [['4.13 Tcf', 'natural gas New Mexico produced in 2025, 9.6% of the US total. Tcf means trillion cubic feet'], ['2.0 to 4.1 Tcf', 'New Mexico gas production in 2020 and in 2025'], ['805 million barrels', 'crude oil New Mexico produced in 2025, second to Texas'], ['98 Bcf', 'gas burned by all New Mexico power plants in 2025: 2.4% of what the state produced']],
    body: '<p>Most of the gas here comes up with the oil. The dashed lines on the map are the pipelines that carry it away, east into Texas and west toward Arizona and California.</p><p>A state rule requires oil and gas operators to capture 98% of their gas by 31 December 2026. It bans routine venting and flaring, the release or burning of gas at the well, and covers wells, gathering pipelines and booster stations.</p><p class="gcap">State totals include the San Juan Basin in the north-west. The marker is in southern Lea County.</p>',
    sources: [S.gasProd, S.oilProd, S.e923, S.methane, S.pipes] });
  add({ id: 'sanjuanbasin', kind: 'gasfield', lon: -107.80, lat: 36.72, name: 'San Juan Basin gas field', short: 'San Juan Basin', tier: 2,
    lede: 'The older of New Mexico\'s two gas fields. Pipelines gather its gas near Bloomfield and Blanco and carry it west across Arizona and north into Colorado.',
    stats: [['4', 'interstate pipeline systems on this map that start or pass here: El Paso Natural Gas, Transwestern, TransColorado and Northwest Pipeline'], ['0.41 TWh', 'electricity the City of Farmington\'s gas plant, Bluffview, generated in 2025']],
    body: '<p>Federal fuel reports list the Navajo Tribal Utility Authority as the supplier of the small amount of gas that the Four Corners coal plant burns.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.pipes, S.e923, S.e923f] });
  add({ id: 'grantsuranium', kind: 'umine', kindLabel: 'Old uranium district', lon: -107.85, lat: 35.40, name: 'Grants uranium district', short: 'Grants uranium district', tier: 2,
    lede: 'From the 1950s to the late 1990s most uranium mining and milling in New Mexico took place here. No mine is producing now, and the cleanup continues.',
    stats: [['4', 'counties the uranium belt crosses: Cibola, McKinley, Sandoval and Bernalillo, with tribal lands'], ['1958', 'year the Homestake mill began. It was torn down between 1993 and 1995 and is a federal Superfund site'], ['1953 to 1982', 'years the Jackpile-Paguate mine on Laguna Pueblo ran. It is also a Superfund site']],
    body: '<p>The EPA and other agencies work to a five-year plan for the district, the current one for 2024 to 2028. It covers old mines and mill sites on tribal and other land.</p><p class="gcap">The marker is at Ambrosia Lake, in the middle of the district.</p>',
    sources: [S.grants] });
  add({ id: 'urenco', kind: 'enrich', lon: -103.08, lat: 32.435, name: 'Urenco USA enrichment plant', short: 'Urenco enrichment', tier: 2,
    lede: 'The only commercial uranium enrichment plant in the United States, near Eunice. New Mexico has no nuclear power plant, but this plant can do about a third of the enrichment that US reactors need.',
    stats: [['4.3 million SWU', 'yearly capacity. A separative work unit (SWU) measures the work of enriching uranium'], ['About one-third', 'of current US demand that this capacity equals, by the company\'s account'], ['2.1 million SWU', 'capacity of a new plant announced in June 2026, to start producing in 2032'], ['2010', 'year it began commercial operation']],
    body: '<p>Natural uranium has too little of the form that splits in a reactor. Enrichment raises that share by spinning uranium gas in centrifuges. The company is also adding 700,000 SWU to the existing plant, to be finished in 2027.</p><p class="gcap">The marker is approximate: the plant is about five miles east of Eunice, at the Texas line.</p>',
    sources: [S.urenco] });
  add({ id: 'wipp', kind: 'info', kindLabel: 'Nuclear waste repository', lon: -103.792, lat: 32.373, name: 'Waste Isolation Pilot Plant', short: 'WIPP', tier: 3,
    lede: 'A federal repository 26 miles south-east of Carlsbad. It holds waste from making nuclear weapons, 2,150 feet down in a bed of salt. It does not take used fuel from power plants.',
    stats: [['2,150 feet', 'depth of the disposal rooms'], ['26 Mar 1999', 'date the first shipment arrived, from Los Alamos'], ['October 2025', 'month Holtec dropped a separate plan to store used power-plant fuel between Carlsbad and Hobbs']],
    body: '<p>Federal law limits the site to waste from defense work. The Holtec site would have stored up to 10,000 canisters of used fuel from commercial reactors.</p>',
    sources: [S.wipp, S.holtec] });

  // ----------------------------------------------------------------- grid hubs
  add({ id: 'blackwater', kind: 'hub', lon: -103.174, lat: 34.301, name: 'Blackwater tie: where two grids meet', short: 'Blackwater tie', tier: 1,
    lede: 'North America has separate eastern and western grids that are not synchronized. They meet in eastern New Mexico, and this station near Clovis is one of the few places power can cross.',
    stats: [['200 MW', 'the most it can transfer'], ['1985', 'year it was built'], ['10.5 TWh', 'generated in 2025 by New Mexico plants on the eastern grid, 27% of the state\'s total']],
    body: '<p>The station converts alternating current to direct current and back, so power can pass between grids that are out of step with each other. Public Service Company of New Mexico owns it.</p><p>Everything east of here, including Clovis, Portales, Roswell, Hobbs and Carlsbad, is on the eastern grid and in the Southwest Power Pool, a grid operator based in Arkansas. Albuquerque, Santa Fe, Las Cruces and Farmington are on the western grid.</p>',
    sources: [S.hitachi, S.e923, S.lines] });
  add({ id: 'eddytie', kind: 'hub', lon: -104.241, lat: 32.814, name: 'Eddy County tie', short: 'Eddy County tie', tier: 3,
    lede: 'The second crossing between the eastern and western grids in New Mexico, east of Artesia. It links El Paso Electric to Southwestern Public Service.',
    stats: [['345 kV', 'voltage of the line that runs from here west to El Paso Electric\'s system'], ['2028', 'year El Paso Electric plans to join a day-ahead power market run by the Southwest Power Pool']],
    body: '<p>El Paso Electric told state regulators in 2025 that this tie was one reason it chose that market over the one run by California\'s grid operator, which Public Service Company of New Mexico chose. The two largest utilities on New Mexico\'s western grid will be in different markets.</p>',
    sources: [S.citydesk, S.lines] });
  add({ id: 'westmesa', kind: 'hub', lon: -106.724, lat: 35.114, name: 'West Mesa: Albuquerque\'s main substation', short: 'West Mesa', tier: 3,
    lede: 'The lines from the Four Corners coal plants end here, on the west side of Albuquerque. Another 345-kilovolt line runs south from here toward Las Cruces and El Paso.',
    stats: [['2021', 'year Public Service Company of New Mexico joined the real-time power market run by California\'s grid operator'], ['2027', 'year it is to join that operator\'s day-ahead market'], ['$20 million', 'yearly benefit the utility projected from the day-ahead market']],
    body: '<p>In these markets utilities across the West trade power to meet demand at the lowest cost. California\'s grid operator said in 2025 that the real-time market had brought the utility about $170 million in benefits since 2021.</p>',
    sources: [S.lines, S.edam] });

  // ----------------------------------------------------------------- users
  add({ id: 'albuquerque', kind: 'city', lon: -106.651, lat: 35.084, name: 'Albuquerque', short: 'Albuquerque', tier: 1,
    lede: 'New Mexico\'s largest city and the center of its largest utility, Public Service Company of New Mexico. The utility set an all-time record for demand in August 2026.',
    stats: [['2,264 MW', 'record demand, Monday 3 August 2026, at 5 p.m.'], ['6%', 'how far that was above the old record, from July 2023'], ['500 MW', 'rooftop solar on the utility\'s grid'], ['0.84 TWh', 'federal estimate of electricity from rooftop and other small solar in New Mexico in 2025']],
    body: '<p>The utility has about 4,900 MW of capacity to draw on. Solar output is falling by the 5 p.m. peak, so the utility relies on gas, coal and nuclear plants at night.</p><p>Blackstone, an investment firm, agreed in 2025 to buy the utility\'s parent company for $11.5 billion. State regulators had not approved the sale by July 2026. That month they fined the companies $300,000 over a $400 million stock sale made without approval, and the companies moved their deadline to 31 May 2027.</p>',
    sources: [S.abqPeak, S.roof, S.kanw] });
  add({ id: 'meta', kind: 'datacenter', lon: -106.785, lat: 34.828, name: 'Meta data center, Los Lunas', short: 'Meta data center', tier: 2,
    lede: 'Meta began building a data center campus here in 2016 and has expanded it several times. The utility buys wind, solar and battery power on its behalf under special contracts.',
    stats: [['1,175 MW', 'wind and solar contracted for the campus in total, by the state regulator\'s July 2026 count'], ['368 MW', 'battery storage contracted in total'], ['18 Dec 2025', 'date regulators approved the latest round: 290 MW of solar and 268 MW of batteries']],
    body: '<p>Three small solar farms near here are named Facebook 1, 2 and 3 in the federal list.</p><p>A 2025 state law lets regulators approve special rates so that a utility recovers the cost of serving a very large customer from that customer.</p>',
    sources: [S.prcDc, S.inv, S.abqDc] });
  add({ id: 'jupiter', kind: 'datacenter', lon: -106.70, lat: 31.86, name: 'Project Jupiter data center (under construction)', short: 'Project Jupiter', tier: 2,
    lede: 'A data center campus under construction at Santa Teresa for Oracle and OpenAI. It is designed to make its own power from natural gas and stay off the public grid.',
    stats: [['1,400 acres', 'size of the site'], ['Up to 2.8 GW', 'power its own plant could generate, by its air permit applications. A gigawatt (GW) is 1,000 MW'], ['10.1 million tons', 'greenhouse gases a year the developers estimate from fuel cells, down from 14 million in the first design'], ['4 to 1', 'vote by which Doña Ana County commissioners approved the project in September 2025']],
    body: '<p>In April 2026 the developers withdrew plans for gas turbines and diesel generators and applied to use fuel cells, which make electricity from natural gas without burning it. The air permit was still pending in August 2026, and residents had filed lawsuits.</p><p>For comparison, the record demand on New Mexico\'s largest utility is 2.26 GW. A state law passed in 2025 exempts self-contained power systems like this one from the state\'s renewable energy targets until 2035. They must be zero-carbon by 2045.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.lobo, S.ct, S.abqDc, S.abqPeak] });
  add({ id: 'oilfield', kind: 'user', kindLabel: 'Oil and gas field', lon: -104.229, lat: 32.421, name: 'Carlsbad and the oil field load', short: 'Oil field load', tier: 2,
    lede: 'Drilling rigs, gas processing plants and pipeline compressors in the oil field are switching from diesel engines to electric motors. Industry is now the largest buyer of power in New Mexico, and the fastest-growing.',
    stats: [['9.0 TWh', 'electricity Southwestern Public Service sold to industry in New Mexico in 2025, up from 7.7 TWh in 2024'], ['71%', 'share of that utility\'s New Mexico sales that went to industry in 2025'], ['About 40%', 'growth in summer peak demand the utility expects by 2030'], ['87%', 'share of Central Valley Electric Cooperative\'s sales that went to industry in 2025']],
    body: '<p>The utility told regulators the growth comes from oil and gas drilling, processing plants and pipeline compressors, along with data centers and factories. Its forecast for the 2030 peak ranges from 4,771 to 6,517 MW across its New Mexico and Texas system.</p><p>Homes bought 9% of what this utility sold in New Mexico in 2025.</p>',
    sources: [S.e861, S.prof, S.sps] });
  add({ id: 'lanl', kind: 'user', kindLabel: 'National laboratory', lon: -106.30, lat: 35.875, name: 'Los Alamos National Laboratory', short: 'Los Alamos lab', tier: 2,
    lede: 'The laboratory and the town share one small public utility, run by Los Alamos County. Three-quarters of what it sells goes to a single industrial customer.',
    stats: [['0.51 TWh', 'electricity the county utility sold in 2025'], ['0.39 TWh', 'of that sold to its one industrial customer'], ['9,299', 'customers in all']],
    body: '<p>The county also owns two small hydropower plants on the Rio Chama, at Abiquiu and El Vado dams.</p>',
    sources: [S.e861, S.inv] });
  add({ id: 'lascruces', kind: 'city', lon: -106.778, lat: 32.312, name: 'Las Cruces', short: 'Las Cruces', tier: 2,
    lede: 'El Paso Electric, a Texas utility, serves Las Cruces and the rest of the southern Rio Grande valley in New Mexico.',
    stats: [['110,178', 'customers in New Mexico in 2025'], ['1.83 TWh', 'electricity sold in New Mexico in 2025'], ['2028', 'year it plans to join a day-ahead power market run by the Southwest Power Pool']],
    body: '<p>Most of the utility\'s plants and customers are in Texas. It also owns part of the Palo Verde nuclear plant in Arizona.</p>',
    sources: [S.e861, S.citydesk, ['Pinnacle West (APS) annual report for 2025', 'https://www.sec.gov/Archives/edgar/data/764622/000076462226000011/pnw-20251231.htm']] });
  add({ id: 'farmington', kind: 'city', lon: -108.19, lat: 36.75, name: 'Farmington', short: 'Farmington', tier: 2,
    lede: 'Farmington runs its own electric utility. Its gas plant and its hydropower plant at Navajo Dam generated more than half as much power in 2025 as the utility sold.',
    stats: [['45,167', 'customers in 2025'], ['0.89 TWh', 'electricity sold in 2025'], ['0.41 TWh', 'generated in 2025 by Bluffview, its gas plant'], ['0.088 TWh', 'generated in 2025 at Navajo Dam']],
    body: '<p>The city was a part owner of the San Juan coal plant until it closed in 2022.</p>',
    sources: [S.e861, S.e923, S.abqSj] });
  add({ id: 'chino', kind: 'mine', plant: 54667, name: 'Chino copper mine', short: 'Chino Mine', tier: 3,
    lede: 'An open-pit copper mine east of Silver City with its own gas-fired power plant. Its owner, Freeport-McMoRan, uses the power at the mine.',
    stats: [['0.21 TWh', 'electricity the mine\'s plant generated in 2025'], ['0.26 TWh', 'electricity that plant owners across New Mexico used on site in 2024 without selling it']],
    sources: [S.e923, S.prof] });
  add({ id: 'navajohomes', kind: 'user', kindLabel: 'Homes without power', lon: -108.687, lat: 36.786, name: 'Navajo Nation homes without electricity', short: 'Homes without power', tier: 3,
    lede: 'About 9,400 homes on the Navajo Nation, which spans New Mexico, Arizona and Utah, have no connection to the grid.',
    stats: [['9,377', 'homes without electricity, of about 55,000 on the whole Nation, in May 2026'], ['10,857', 'customers of the Navajo Tribal Utility Authority in New Mexico in 2025'], ['0.12 TWh', 'electricity it sold in New Mexico in 2025']],
    body: '<p>Homes are far apart, so each connection can need a long stretch of new line. The Four Corners plant and the lines that leave it stand on the same Nation.</p><p class="gcap">The homes are spread across the Nation. The marker is at Shiprock.</p>',
    sources: [S.srpNavajo, S.e861] });

  BROWSE.push(
    ['Coal and its mines', ['fourcorners', 'navajomine', 'ntecgas', 'sanjuan', 'sanjuanmine', 'sanjuansolar', 'escalante', 'leeranch']],
    ['Wind', ['sunzia', 'westernspirit', 'sagamore', 'elcabo', 'lajoya', 'nmwec', 'grady', 'osogrande']],
    ['Natural gas plants', ['hobbs', 'cunningham', 'luna', 'afton', 'riogrande', 'newman', 'riobravo', 'pyramid']],
    ['Sun, batteries, water and heat', ['atrisco', 'arroyo', 'jicarilla', 'kitcarson', 'santateresa', 'sandiabattery', 'elephantbutte', 'navajodam', 'abiquiu', 'lightningdock']],
    ['Gas fields and nuclear fuel', ['permian', 'sanjuanbasin', 'grantsuranium', 'urenco', 'wipp']],
    ['The grid', ['blackwater', 'eddytie', 'westmesa']],
    ['Who uses it', ['albuquerque', 'meta', 'jupiter', 'oilfield', 'lanl', 'lascruces', 'farmington', 'chino', 'navajohomes']],
  );

  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025, New Mexico only)
  const coop = (lede, twh, cust, extra) => ({ lede, stats: [[twh + ' TWh', 'electricity sold in 2025'], [cust, 'customers in 2025']].concat(extra || []), sources: [S.e861, HIFLD] });
  const TRI = ' It buys its power from Tri-State, a supplier owned by rural co-ops in four states.';
  Object.assign(AREAS, {
    'Public Service Company of New Mexico (PNM)': { lede: 'The state\'s largest utility, owned by investors. It serves Albuquerque, Santa Fe and towns from the north to the south-west.',
      stats: [['556,585', 'customers in 2025'], ['10.0 TWh', 'electricity sold in 2025'], ['2,264 MW', 'record demand, 3 August 2026'], ['80%', 'of its 2025 energy that it counts as carbon-free']],
      body: '<p>The New Mexico Public Regulation Commission, three appointed commissioners, sets its rates. The utility owns 13% of the Four Corners coal plant and part of the Palo Verde nuclear plant in Arizona.</p><p>The Energy Transition Act of 2019 requires investor-owned utilities to get half of their power from renewable sources by 2030 and all of it from sources that release no carbon by 2045. It sets a goal of 80% renewable by 2040.</p><p>Blackstone agreed in 2025 to buy the utility\'s parent company for $11.5 billion. State regulators had not approved the sale by July 2026.</p>',
      sources: [S.e861, S.abqPeak, S.txnm, S.abq4c, S.eta, S.kanw, HIFLD] },
    'Southwestern Public Service (Xcel Energy)': { lede: 'The investor-owned utility for eastern New Mexico and the Texas Panhandle, part of Xcel Energy. It sold more electricity in New Mexico in 2025 than any other utility, most of it to the oil field.',
      stats: [['12.7 TWh', 'electricity sold in New Mexico in 2025'], ['128,335', 'customers in New Mexico in 2025'], ['71%', 'share of those sales that went to industry'], ['$9.38 billion', 'cost of the building plan state regulators approved on 7 May 2026']],
      body: '<p>Its territory is on the eastern grid and in the Southwest Power Pool. The approved plan adds 2,088 MW of gas plants, 1,100 MW of wind, 189 MW of solar and 472 MW of batteries across its New Mexico and Texas system between 2028 and 2030. Regulators also let it keep a coal plant in Texas, off this map, running three months longer, to 31 March 2029.</p><p>A separate request to raise rates by 16% was due for a decision in late 2026.</p>',
      sources: [S.e861, S.sps, HIFLD] },
    'El Paso Electric': { lede: 'A Texas utility owned by investors. In New Mexico it serves Las Cruces and the southern Rio Grande valley.',
      stats: [['110,178', 'customers in New Mexico in 2025'], ['1.83 TWh', 'electricity sold in New Mexico in 2025'], ['2028', 'year it plans to join a day-ahead power market run by the Southwest Power Pool']],
      body: '<p>The New Mexico Public Regulation Commission sets its New Mexico rates. Its largest plant, Newman, is in Texas just across the state line.</p>',
      sources: [S.e861, S.citydesk, HIFLD] },
    'Navajo Tribal Utility Authority': { lede: 'The Navajo Nation\'s own utility. About 9,400 homes on the Nation, across three states, still have no connection.',
      stats: [['10,857', 'customers in New Mexico in 2025'], ['0.12 TWh', 'electricity sold in New Mexico in 2025'], ['9,377', 'homes on the whole Nation without electricity, of about 55,000, in May 2026']],
      sources: [S.e861, S.srpNavajo, HIFLD] },
    'Kit Carson Electric Cooperative': { lede: 'The member-owned co-op for Taos and the mountains around it. It left its old wholesale supplier in 2016 and built solar farms across its territory.',
      stats: [['0.29 TWh', 'electricity sold in 2025'], ['31,076', 'customers in 2025'], ['41 MW', 'solar in its territory, by its 2022 count'], ['100%', 'of daytime demand on summer days that it said solar could meet in 2022']],
      sources: [S.e861, S.torch, HIFLD] },
    'Farmington Electric Utility System': { lede: 'The City of Farmington\'s own utility. It serves the city and nearby parts of San Juan County.',
      stats: [['0.89 TWh', 'electricity sold in 2025'], ['45,167', 'customers in 2025']],
      body: '<p>The city owns a gas plant, Bluffview, and the hydropower plant at Navajo Dam.</p><p class="gcap">The area drawn is the city itself. The utility also serves customers outside it.</p>', sources: [S.e861, S.inv, HIFLD] },
    'Los Alamos County utilities': { lede: 'The county-owned utility for Los Alamos. One industrial customer buys three-quarters of its power.',
      stats: [['0.51 TWh', 'electricity sold in 2025'], ['0.39 TWh', 'of that sold to its one industrial customer'], ['9,299', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'City of Gallup': { lede: 'The City of Gallup runs its own electric utility.', sources: [HIFLD] },
    'Central Valley Electric Cooperative': coop('A member-owned co-op around Artesia, in the oil field. Industry buys most of its power.', '0.94', '14,927', [['87%', 'share of its sales that went to industry']]),
    'Lea County Electric Cooperative': coop('A member-owned co-op in the oil field around Lovington. Homes buy 14% of its power.', '0.69', '11,212'),
    'Farmers\' Electric Cooperative': coop('A member-owned co-op on the eastern plains around Clovis.', '0.37', '13,737'),
    'Roosevelt County Electric Cooperative': coop('A member-owned co-op around Portales.', '0.14', '6,004'),
    'Continental Divide Electric Cooperative': coop('A member-owned co-op around Grants.' + TRI, '0.48', '23,458'),
    'Jemez Mountains Electric Cooperative': coop('A member-owned co-op that covers a large part of northern New Mexico, around Española and Cuba.' + TRI, '0.36', '31,792'),
    'Southwestern Electric Cooperative': coop('A member-owned co-op in the north-east corner of the state. Nearly all of its sales are to industry.' + TRI, '0.27', '2,279'),
    'Central New Mexico Electric Cooperative': coop('A member-owned co-op east of Albuquerque, where many of the state\'s wind farms stand.' + TRI, '0.27', '21,230'),
    'Springer Electric Cooperative': coop('A member-owned co-op in the north-east.' + TRI, '0.20', '3,054'),
    'Otero County Electric Cooperative': coop('A member-owned co-op in the mountains east of Alamogordo.' + TRI, '0.20', '20,763'),
    'Socorro Electric Cooperative': { lede: 'A member-owned co-op in west-central New Mexico.' + TRI, sources: [S.tsEsc, HIFLD] },
    'Sierra Electric Cooperative': { lede: 'A member-owned co-op around Truth or Consequences.' + TRI, sources: [S.tsEsc, HIFLD] },
    'Columbus Electric Cooperative': { lede: 'A member-owned co-op in the south-west corner of the state.' + TRI, sources: [S.tsEsc, HIFLD] },
    'Mora-San Miguel Electric Cooperative': { lede: 'A member-owned co-op in the mountains north of Las Vegas, New Mexico.' + TRI, sources: [S.tsEsc, HIFLD] },
    'Northern Rio Arriba Electric Cooperative': { lede: 'A member-owned co-op around Chama, at the Colorado line.' + TRI, sources: [S.tsEsc, HIFLD] },
    'Navopache Electric Cooperative': { lede: 'An Arizona co-op that also serves part of Catron County in New Mexico.', stats: [['1,728', 'customers in New Mexico in 2025']], sources: [S.e861, HIFLD] },
    'Duncan Valley Electric Cooperative': { lede: 'An Arizona co-op that reaches a small part of New Mexico at the state line.', sources: [HIFLD] },
  });

  // ----------------------------------------------------------------- pipeline and line cards
  Object.assign(PIPECARDS, {
    'El Paso Natural Gas Co': { lede: 'The largest pipeline system on this map. It gathers gas in both of New Mexico\'s fields, the Permian Basin and the San Juan Basin, and carries it west to Arizona and California. Kinder Morgan owns it.',
      stats: [['Interstate', 'type of pipeline'], ['4.13 Tcf', 'gas New Mexico produced in 2025. Its power plants burned 2.4% of that. Tcf means trillion cubic feet', 1]],
      sources: [S.gasProd, S.e923, S.pipes] },
    'Transwestern Gas Co': { lede: 'An interstate pipeline from the Permian Basin and the San Juan Basin west across Arizona to the California line. Energy Transfer owns it.',
      sources: [S.pipes] },
    'Public Service Co of NM': { lede: 'The pipelines that deliver gas to cities and power plants inside New Mexico. Federal map data lists them under the electric utility\'s name. They are a separate gas system today.',
      sources: [S.pipes] },
    'Northern Natural Gas Co': { lede: 'An interstate pipeline that carries Permian Basin gas north-east toward the Midwest.', sources: [S.pipes] },
    'Natural Gas PL Co of Am': { lede: 'An interstate pipeline that carries Permian Basin gas north-east toward Chicago.', sources: [S.pipes] },
    'ONEOK Westex Pipeline': { lede: 'A pipeline inside Texas that gathers Permian Basin gas east of the New Mexico line.', sources: [S.pipes] },
    'Southern Union Gas Services (TX)': { lede: 'Gathering lines in the Permian Basin oil field, on the Texas side of the state line.', sources: [S.pipes] },
    'El Paso Texas Pipeline Co': { lede: 'A pipeline inside Texas that serves El Paso and the power plants around it.', sources: [S.pipes] },
    'TransColorado Gas Trans Co': { lede: 'An interstate pipeline between the San Juan Basin and western Colorado.', sources: [S.pipes] },
    'Northwest Pipeline': { lede: 'An interstate pipeline that runs from the San Juan Basin north toward the Pacific Northwest.', sources: [S.pipes] },
    'Colorado Interstate Gas Co': { lede: 'An interstate pipeline that crosses the north-east corner of this map on its way between Texas and Colorado.', sources: [S.pipes] },
    'Agua Blanca Pipeline': { lede: 'A pipeline inside Texas that moves Permian Basin gas south, away from the New Mexico line.', sources: [S.pipes] },
    'Questar Southern Trails Line': { lede: 'An interstate pipeline drawn west from the San Juan Basin in federal map data.', sources: [S.pipes] },
    'Roadrunner': { lede: 'A pipeline inside Texas that carries Permian Basin gas to the Mexican border near El Paso.', sources: [S.pipes] },
  });
  LINECARDS.push(
    [/SunZia/i, { lede: 'A 550-mile direct-current line from central New Mexico to Arizona. It carries power from the largest wind farm in the United States. Direct current loses less power over long distances.',
      stats: [['3,021 MW', 'what it can carry'], ['2,131 MW', 'of that bound for Southern California'], ['June 2026', 'month the wind farm at its eastern end was due to begin commercial operation']], sources: [S.sunzia, OSM] }],
    [/Western Spirit/i, { lede: 'A 155-mile line built in 2021 to collect up to 800 MW of wind power from central New Mexico and carry it to the grid near Albuquerque.',
      stats: [['345 kV', 'voltage'], ['155 miles', 'length'], ['December 2021', 'month it was switched on']], sources: [S.spirit, OSM] }],
    [/Four Corners/i, { lede: 'A 500-kilovolt line from the Four Corners coal plant west across the Navajo Nation into Arizona. Arizona utilities own 80% of the plant and take most of its power.', sources: [S.abq4c, OSM] }],
    [/Hesperus|Montrose/i, { lede: 'A federal line north into Colorado. The Western Area Power Administration, which sells power from federal dams to utilities and co-ops, is listed as its operator.', sources: [OSM] }],
    [/Waterflow to San Juan/i, { lede: 'A short line at the site of the San Juan coal plant, which closed in 2022. The substations built for the coal plants still tie the north-west corner of the state to the rest of the grid.', sources: [S.abqSj, OSM] }],
    [/West Mesa to Sandia/i, { lede: 'A line across Albuquerque, from the West Mesa substation on the west side of the city to the Sandia substation on the east side.', sources: [OSM] }],
    [/Ojo - Taos/i, { lede: 'The line that feeds Taos and the territory of Kit Carson Electric Cooperative from the main grid of northern New Mexico.', sources: [OSM] }],
    [/TUCO/i, { lede: 'A line on the eastern grid in Texas, run by Xcel Energy. It carries power south toward the oil fields along the New Mexico line.', sources: [OSM] }],
    [/Coronado/i, { lede: 'A 500-kilovolt line in Arizona that serves the Coronado coal plant. It does not enter New Mexico.', sources: [OSM] }],
  );

  // ----------------------------------------------------------------- tour
  const LAY = ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'];
  const ALL = [-109.2, 31.2, -102.8, 37.2];
  TOUR.push(
    { title: 'A state that runs on wind', text: 'New Mexico generated 39 terawatt-hours of electricity in 2025. Wind made 36% of it, more than gas, coal or the sun. Twenty years earlier coal made 85%. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: LAY },
    { title: 'The last coal plant', text: 'Four Corners made a fifth of New Mexico\'s electricity in 2025. It stands on the Navajo Nation and burns coal from the Navajo Mine next door. Arizona utilities own 80% of it. The owners planned to stop in 2031. A September 2026 agreement could keep it running to 2038.', box: [-109.3, 36.2, -107.4, 37.2], zoom: 1.5, select: 'fourcorners', layers: ['plants', 'closed', 'lines', 'pipes', 'rivers'] },
    { title: 'The one that closed', text: 'A few miles north stood the San Juan plant. Its owner decided to close it after a 2019 state law set a 2045 deadline for carbon-free power. The last units stopped in 2022 and about 450 people lost their jobs. A solar farm now stands on its land.', box: [-109.0, 36.45, -107.8, 37.1], zoom: 2.1, select: 'sanjuan', layers: ['plants', 'closed', 'lines', 'rivers'] },
    { title: 'Wind on the mesas', text: 'SunZia is the largest wind farm in the United States: 916 turbines, due to enter service in June 2026. A direct-current line carries its power 550 miles to Arizona, and most of it goes on to Southern California. The other markers are older wind farms that feed Albuquerque.', box: [-106.9, 33.6, -104.3, 35.4], zoom: 1.3, select: 'sunzia', layers: ['plants', 'lines', 'cities'] },
    { title: 'Two grids in one state', text: 'North America\'s eastern and western grids are not synchronized, and the seam runs through eastern New Mexico. This station near Clovis can pass 200 megawatts across. Clovis, Roswell, Hobbs and Carlsbad are on the eastern grid. Albuquerque and Las Cruces are on the western one.', box: [-105.4, 33.2, -102.8, 35.4], zoom: 1.3, select: 'blackwater', layers: ['plants', 'lines', 'cities'] },
    { title: 'The oil field plugs in', text: 'The Permian Basin made New Mexico the third-largest gas producer among the states. The state\'s power plants burn 2.4% of that gas. The dashed lines carry the rest away. Oil-field equipment is switching from diesel engines to electric motors, and one utility\'s sales to industry here rose from 7.7 to 9.0 terawatt-hours in a year.', box: [-105.1, 31.7, -102.8, 33.6], zoom: 1.4, select: 'oilfield', layers: ['plants', 'pipes', 'cities', 'lines'] },
    { title: 'Sun by day, batteries by night', text: 'This is the Night view. Solar farms are faded because they make nothing after dark. Solar output grew from 4.3 to 6.3 terawatt-hours between 2024 and 2025. In September 2026 New Mexico had 1,360 megawatts of large batteries. Full, they can run at that rate for almost four hours.', box: [-107.7, 34.3, -105.9, 35.7], zoom: 1.6, season: 'winter', select: 'atrisco', layers: ['plants', 'lines', 'cities'] },
    { title: 'Who uses it', text: 'Industry buys more electricity in New Mexico than homes do, and more than businesses do. The largest utility set a record of 2,264 megawatts on 3 August 2026. South of Albuquerque, a data center campus has 1,175 megawatts of wind and solar under contract. At the southern border, another is being built to make its own power from gas.', box: [-107.6, 34.3, -105.8, 36.1], zoom: 1.5, select: 'meta', layers: ['cities', 'plants', 'lines'] },
    { title: 'Uranium, without a reactor', text: 'New Mexico has no nuclear power plant. But the only commercial plant in the country that enriches uranium for reactor fuel is here, near Eunice. And the old mines of the Grants district, far to the north-west, supplied uranium from the 1950s to the 1990s. Their cleanup continues.', box: [-104.9, 31.8, -102.8, 33.2], zoom: 1.7, select: 'urenco', layers: ['plants', 'pipes', 'cities', 'lines'] },
    { title: 'What comes out, and what comes next', text: 'Each gray circle is a plant\'s carbon dioxide for 2023. New Mexico\'s power plants released 13.4 million metric tons in 2024, down 60% from 2005. Dotted markers are planned plants: mostly solar and batteries, and a large gas plant beside Four Corners. Now explore: click any plant, line, pipeline or patch of open country.', box: ALL, select: 'fourcorners', layers: ['plants', 'emit', 'closed', 'planned', 'cities'] },
  );

  // ------------------------------------------------------------------ data handed to the map engine
  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    kinds: { mine: ['cities', 'mine', 'Copper mine'], enrich: ['pipes', 'nuclear', 'Uranium enrichment plant'], umine: ['pipes', 'mine', 'Old uranium district'] },
    riverLede: 'A river. New Mexico\'s rivers make little hydropower: 0.3% of the state\'s electricity in 2025. The Four Corners coal plant draws its cooling water from the San Juan River.',
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a power plant, a transmission line, a pipeline, or open country.' });
})();
