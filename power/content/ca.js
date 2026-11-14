/* California Power: content for the electricity map.
   The shared machinery is in kit.js. Plant numbers (capacity, 2023 output, emissions) come from the baked dataset in
   power/data/ca.js (EIA-860M inventory and EPA eGRID); they are not typed here. Hand-written figures are sourced on each card.
   Fact sheet and verification log: research/california_power.md */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'PACIFIC GAS & ELECTRIC CO.': ['Pacific Gas and Electric', 'PG&E', 'iou'], 'SOUTHERN CALIFORNIA EDISON CO': ['Southern California Edison', 'SCE', 'iou'],
    'SAN DIEGO GAS & ELECTRIC CO': ['San Diego Gas & Electric', 'SDG&E', 'iou'], 'LOS ANGELES DEPARTMENT OF WATER & POWER': ['Los Angeles Department of Water and Power', 'LADWP', 'public'],
    'SACRAMENTO MUNICIPAL UTIL DIST': ['Sacramento Municipal Utility District', 'SMUD', 'public'], 'IMPERIAL IRRIGATION DISTRICT': ['Imperial Irrigation District', 'IID', 'public'],
    'PACIFICORP': ['PacifiCorp (Pacific Power)', 'PacifiCorp', 'iou'], 'LIBERTY UTILITIES': ['Liberty Utilities', 'Liberty', 'iou'], 'BEAR VALLEY ELECTRIC SERVICE': ['Bear Valley Electric Service', 'Bear Valley', 'iou'],
    'TURLOCK IRRIGATION DISTRICT': ['Turlock Irrigation District', 'Turlock', 'public'], 'MODESTO IRRIGATION DISTRICT': ['Modesto Irrigation District', 'Modesto', 'public'], 'MERCED IRRIGATION DISTRICT': ['Merced Irrigation District', 'Merced', 'public'],
    'TRINITY PUBLIC UTILITIES DIST': ['Trinity Public Utilities District', 'Trinity', 'public'], 'LASSEN MUNICIPAL UTILITY DISTRICT': ['Lassen Municipal Utility District', 'Lassen', 'public'], 'TRUCKEE DONNER P U D': ['Truckee Donner Public Utility District', 'Truckee Donner', 'public'],
    'SURPRISE VALLEY ELECTRIFICATION': ['Surprise Valley Electrification', 'Surprise Valley', 'coop'], 'PLUMAS-SIERRA RURAL ELEC COOP': ['Plumas-Sierra Rural Electric Cooperative', 'Plumas-Sierra', 'coop'], 'ANZA ELECTRIC COOP INC': ['Anza Electric Cooperative', 'Anza', 'coop'],
    'CITY OF RIVERSIDE - (CA)': ['Riverside Public Utilities', 'Riverside', 'public'], 'CITY OF ANAHEIM - (CA)': ['Anaheim Public Utilities', 'Anaheim', 'public'], 'CITY OF REDDING - (CA)': ['Redding Electric Utility', 'Redding', 'public'],
    'CITY OF ROSEVILLE - (CA)': ['Roseville Electric', 'Roseville', 'public'], 'CITY OF GLENDALE - (CA)': ['Glendale Water and Power', 'Glendale', 'public'], 'CITY OF BURBANK WATER AND POWER': ['Burbank Water and Power', 'Burbank', 'public'],
    'CITY OF PASADENA - (CA)': ['Pasadena Water and Power', 'Pasadena', 'public'], 'CITY OF PALO ALTO - (CA)': ['City of Palo Alto Utilities', 'Palo Alto', 'public'], 'CITY OF SANTA CLARA - (CA)': ['Silicon Valley Power (City of Santa Clara)', 'Silicon Valley Power', 'public'],
    'CITY & COUNTY OF SAN FRANCISCO': ['San Francisco Public Utilities Commission', 'SF PUC', 'public'], 'CITY OF LODI - (CA)': ['Lodi Electric Utility', 'Lodi', 'public'], 'CITY OF COLTON - (CA)': ['Colton Electric Utility', 'Colton', 'public'],
    'CITY OF AZUSA': ['Azusa Light and Water', 'Azusa', 'public'], 'CITY OF BANNING - (CA)': ['Banning Electric Utility', 'Banning', 'public'], 'CITY OF MORENO VALLEY - (CA)': ['Moreno Valley Utility', 'Moreno Valley', 'public'],
    'CITY OF SHASTA LAKE - (CA)': ['City of Shasta Lake', 'Shasta Lake', 'public'], 'CITY OF NEEDLES - (CA)': ['City of Needles', 'Needles', 'public'],
  };
  // Left out on purpose: the Western Area Power Administration and the Colorado River irrigation project (federal wholesalers drawn as huge blobs),
  // Kings River Conservation District and Tuolumne County (generators or agencies drawn as whole regions), Central Coast Community Energy
  // (a power buyer, not a wires utility), Lathrop Irrigation District, City of Industry, and the edges of Nevada and Arizona utilities.
  const K = window.POWERKIT.begin({ id: 'ca', st: 'CA', name: 'California', util: UTIL, bigUtils: ['PG&E', 'SCE', 'SDG&E', 'LADWP', 'SMUD', 'IID'],
    lineLede: { '500': 'The backbone of the grid. Lines at 500 kilovolts run the length of California and reach into Oregon, Nevada and Arizona. Most of the imported power arrives on lines like this one.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. California produces only a small part of the gas it burns, so most of what its power plants use arrives through lines like this one.' });
  const { P, EY, INV, SRC_INV, SRC_EGRID, HIFLD, OSM } = K;

  // ------------------------------------------------------------------ sources
  const S = {
    cec: ['California Energy Commission: 2025 Total System Electric Generation', 'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2025-total-system-electric-generation'],
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA California Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/california/'],
    hist: ['EIA state generation and emissions history', 'https://www.eia.gov/electricity/data/state/'],
    roof: ['EIA small-scale solar estimates', 'https://www.eia.gov/electricity/data/eia861m/'],
    inv: SRC_INV,
    ks: ['California ISO Key Statistics, October 2026', 'https://www.caiso.com/documents/key-statistics-oct-2026.pdf'],
    edam: ['California ISO, 1 May 2026', 'https://www.caiso.com/about/news/news-releases/edam-is-live-pacificorp-and-caiso-successfully-launch-new-market-may-1'],
    curt: ['EIA Today in Energy, 28 May 2025', 'https://www.eia.gov/todayinenergy/detail.php?id=65364'],
    ans: ['American Nuclear Society, 3 Apr 2026', 'https://www.ans.org/news/2026-04-03/article-7906/nrc-approves-diablo-canyon-license-renewal-extension'],
    songs: ['Southern California Edison: San Onofre decommissioning', 'https://www.songscommunity.com/about-decommissioning/decommissioning-san-onofre-nuclear-generating-station'],
    otc: ['State Water Resources Control Board: once-through cooling policy', 'https://www.waterboards.ca.gov/water_issues/programs/ocean/cwa316/policy.html'],
    epaMoss: ['EPA, 8 Sep 2026', 'https://www.epa.gov/newsreleases/epa-begins-final-phase-post-fire-battery-cleanup-moss-landing'],
    geysers: ['Calpine: The Geysers', 'https://geysers.com/'],
    lithium: ['CalMatters, Sep 2026', 'https://calmatters.org/environment/2026/09/lithium-valley-salton-sea-projects/'],
    ivanpah: ['E&E News, 2025', 'https://www.eenews.net/articles/ivanpah-solar-plant-casts-a-shadow-on-doe-loans/'],
    darden: ['California Energy Commission: Darden Clean Energy Project', 'https://www.energy.ca.gov/powerplant/solar-photovoltaic-pv/darden-clean-energy-project'],
    willow: ['California Energy Commission: Willow Rock Energy Storage Center', 'https://www.energy.ca.gov/powerplant/caes/willow-rock-energy-storage-center'],
    boem: ['Bureau of Ocean Energy Management: California', 'https://www.boem.gov/renewable-energy/state-activities/california'],
    osw: ['offshoreWIND.biz, 31 Aug 2026', 'https://offshorewind.biz/2026/08/31/california-files-lawsuit-against-trump-administration-golden-state-wind-developer-over-cancelled-lease'],
    shasta: ['Bureau of Reclamation: Shasta Dam fact sheet, Jan 2025', 'https://www.usbr.gov/mp/mpr-news/docs/factsheets/shasta-dam.pdf'],
    pgeHydro: ['PG&E: hydroelectric system', 'https://www.pge.com/en/about/pge-systems/hydroelectric-system.html'],
    krrc: ['Klamath River Renewal Corporation', 'https://klamathrenewal.org/the-project/'],
    gasMove: ['EIA: natural gas moved into and out of California', 'https://www.eia.gov/dnav/ng/ng_move_ist_a2dcu_SCA_a.htm'],
    gasCons: ['EIA: natural gas consumption in California', 'https://www.eia.gov/dnav/ng/ng_cons_sum_dcu_SCA_a.htm'],
    gasStor: ['EIA: underground gas storage in California', 'https://www.eia.gov/dnav/ng/ng_stor_cap_dcu_SCA_a.htm'],
    gasProd: ['EIA: marketed gas production by state', 'https://www.eia.gov/dnav/ng/ng_prod_sum_a_EPG0_VGM_mmcf_a.htm'],
    cecGas: ['California Energy Commission: natural gas supply', 'https://www.energy.ca.gov/data-reports/energy-almanac/californias-natural-gas-market/supply-and-demand-natural-gas-california'],
    aliso: ['CPUC: Aliso Canyon', 'https://www.cpuc.ca.gov/regulatory-services/safety/gas-safety-and-reliability-branch/aliso-canyon-well-failure'],
    alisoFs: ['CPUC fact sheet, Nov 2024', 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/safety-and-enforcement-division/documents/fact-sheets/ac-pd-fact-sheet-111324.pdf'],
    ipa: ['Intermountain Power Agency: IPP Renewed', 'https://www.ipautah.com/ipp-renewed/'],
    ippCoal: ['Utah News Dispatch, 24 Mar 2026', 'https://www.heraldextra.com/news/2026/mar/24/utah-may-turn-ipp-area-into-a-special-district-to-accelerate-sale-of-coal-generators-there/'],
    tbc: ['Trans Bay Cable', 'https://www.transbaycable.com/'],
    wPdci: ['Wikipedia: Pacific DC Intertie', 'https://en.wikipedia.org/wiki/Pacific_DC_Intertie'],
    wP15: ['Wikipedia: Path 15', 'https://en.wikipedia.org/wiki/Path_15'],
    wP26: ['Wikipedia: Path 26', 'https://en.wikipedia.org/wiki/Path_26'],
    wP46: ['Wikipedia: Path 46', 'https://en.wikipedia.org/wiki/Path_46'],
    wP27: ['Wikipedia: Path 27', 'https://en.wikipedia.org/wiki/Path_27'],
    camp: ['CAL FIRE: Camp Fire', 'https://www.fire.ca.gov/incidents/2018/11/8/camp-fire'],
    eaton: ['CAL FIRE: Eaton Fire', 'https://www.fire.ca.gov/incidents/2025/1/7/eaton-fire'],
    psps: ['CPUC: public safety power shutoffs', 'https://www.cpuc.ca.gov/psps'],
    pgeUg: ['PG&E, 9 Nov 2026', 'https://finviz.com/news/419374/pge-achieves-1500-mile-milestone-in-major-wildfire-safety-undergrounding-effort'],
    sb100: ['California Energy Commission: SB 100', 'https://www.energy.ca.gov/sb100'],
    nbt: ['CPUC: net billing tariff', 'https://www.cpuc.ca.gov/nemrevisit'],
    cecMay: ['California Energy Commission, 4 May 2026', 'https://www.energy.ca.gov/news/2026-05/california-energy-leaders-report-progress-grid-reliability-ahead-summer-2026'],
    refin: ['California Energy Commission: oil refineries, 8 Jul 2026', 'https://www.energy.ca.gov/data-reports/energy-almanac/californias-petroleum-market/californias-oil-refineries'],
    sce: ['Southern California Edison: who we are', 'https://www.sce.com/about-us/who-we-are'],
    sdge: ['SDG&E: about us', 'https://www.sdge.com/more-information/our-company/about-us'],
    smud: ['SMUD: company information', 'https://www.smud.org/Corporate/About-us/Company-Information'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
  };
  const TWH = 1e6;
  const BUDGET = {
    title: 'California\'s grid was supplied with 268 terawatt-hours of electricity in 2025',
    lede: 'Plants inside the state generated 77% of it. The other 23% was imported from the Northwest and the Southwest. Natural gas and solar farms were the two largest sources.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: 2 * TWH, shape: 'bolt', unitLine: 'Each bolt = 2 terawatt-hours (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is the California Energy Commission\'s "total system electric generation" for 2025: what plants of 1 megawatt or more generated inside California, plus net imports. The second is the federal balance for 2024, the latest year published, and its total differs because the two agencies count imports differently.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'gas', label: 'Natural gas, in California', pct: 27.8, af: 74.32 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'delta', note: 'Burned in about 300 plants. Gas generation serving California fell 14% from 2024, which the Energy Commission puts down to a mild summer and more solar and batteries.' },
      { id: 'solar', label: 'Solar farms, in California', pct: 20.7, af: 55.53 * TWH, color: '#f2c230', layer: 'plants', feat: 'solarstar', note: 'Up about 7 TWh in a year. Rooftop panels are not counted here: the federal estimate for them is another 34.4 TWh in 2025.' },
      { id: 'hydro', label: 'Hydropower, in California', pct: 10.3, af: 27.54 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'shasta', note: 'Large dams made 24.1 TWh and small ones 3.4 TWh. Output swings with the snowpack: federal data show 13.8 TWh in 2015 and 32.4 TWh in 2023.' },
      { id: 'nuclear', label: 'Nuclear, in California', pct: 6.6, af: 17.58 * TWH, color: '#6250d6', layer: 'plants', feat: 'diablo', note: 'All from one plant, Diablo Canyon.' },
      { id: 'wind', label: 'Wind, in California', pct: 5.7, af: 15.17 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'alta', note: 'Mostly from three mountain passes and the hills of Solano County.' },
      { id: 'geo', label: 'Geothermal, in California', pct: 4.1, af: 10.91 * TWH, color: '#c8442e', layer: 'plants', feat: 'geysers', note: 'From The Geysers north of San Francisco, the Salton Sea and Imperial Valley, and the Coso field.' },
      { id: 'bio', label: 'Biomass, in California', pct: 1.6, af: 4.23 * TWH, color: '#3f8f46', layer: 'plants', note: 'Wood waste, landfill gas and farm waste.' },
      { id: 'other', tiny: true, label: 'Coal, oil and waste heat, in California', af: 0.43 * TWH, color: '#5c5a66', val: '0.2% &middot; 0.4 TWh', layer: 'plants', feat: 'argus', note: 'One plant at Trona burns coal (0.24 TWh).' },
      { id: 'impsw', label: 'Imported from the Southwest', pct: 15.7, af: 42.01 * TWH, color: '#eb6834', layer: 'lines', feat: 'devers', note: 'From Arizona, Nevada, Utah, New Mexico and beyond: solar 9.9 TWh, wind 8.6, nuclear 8.5, gas 6.9, coal 4.3, geothermal 2.1, hydro 1.0.' },
      { id: 'impnw', label: 'Imported from the Northwest', pct: 7.5, af: 19.96 * TWH, color: '#8a5a3a', layer: 'lines', feat: 'coi', note: 'From Oregon, Washington and beyond: wind 9.4 TWh, hydro 4.8, solar 1.1, and 3.4 from sources the sellers did not specify.' },
    ],
    uses: [
      { id: 'biz', label: 'Businesses', pct: 42.1, af: 115.13 * TWH, color: '#3f8f46', layer: 'cities', feat: 'datacenters', note: 'Shops, offices, schools, data centers and other commercial customers: 1.78 million of them.' },
      { id: 'homes', label: 'Homes', pct: 31.4, af: 85.85 * TWH, color: '#c8442e', layer: 'cities', feat: 'la', note: 'Sold to 14.2 million households. The average home price was 31.97 cents per kilowatt-hour in 2024, up from 20.45 cents in 2020.' },
      { id: 'ind', label: 'Industry', pct: 16.1, af: 44.03 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'watson', note: 'Factories, refineries, oil fields, food processors and water pumping.' },
      { id: 'direct', label: 'Used on site by the plant\'s owner', pct: 4.8, af: 13.04 * TWH, color: '#5c5a66', layer: 'plants', feat: 'watson', note: 'Power that refineries, factories and campuses generate and use themselves without selling it.' },
      { id: 'loss', label: 'Lost on the wires', pct: 4.2, af: 11.47 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'misc', label: 'Sent to Mexico, trains, and not accounted for', pct: 1.5, af: 4.15 * TWH, color: '#6250d6', note: 'Exports to Mexico 1.5 TWh, electric trains and transit 0.7 TWh, and 1.9 TWh the federal balance could not assign.' },
    ],
    body: '<p class="gcap">2025: total 267.7 TWh, of which 205.7 TWh generated in California and 62.0 TWh imported. 2024 federal balance: 273.7 TWh supplied, of which 214.2 TWh generated in California, 53.4 TWh net from other states and 6.0 TWh from Mexico and Canada. Sources: <a href="https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2025-total-system-electric-generation" target="_blank" rel="noopener">California Energy Commission, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/california/" target="_blank" rel="noopener">EIA California Electricity Profile, 2024</a> &middot; <a href="https://www.eia.gov/electricity/data/eia861m/" target="_blank" rel="noopener">EIA small-scale solar</a> &middot; <a href="https://www.eia.gov/electricity/data/state/" target="_blank" rel="noopener">EIA state history</a></p>',
  };
  const HUD = [['268 TWh', 'supplied to California\'s grid, 2025'], ['23%', 'of it imported'], ['50,335 MW', '2026 peak on the main state grid']];
  const ABOUT = K.aboutStd('Where a card gives 2025 output or fuel deliveries, the figure is our sum of federal plant reports (EIA-923). California has about 2,500 plants of 1 megawatt or more on this map; the small ones appear as you zoom in. Some plants that the federal list splits into phases are shown as one (for example The Geysers, Alta Wind and Ivanpah), and where a card\'s table covers only part of a site the card says so. Named 500-kilovolt lines were not available for California when this was built, so lines are described by the substations at their ends, and the Pacific DC Intertie is drawn as an ordinary 500-kilovolt line. Utility areas show who owns the local wires; in much of the state a separate community agency buys the power. Federal power agencies, generators and community agencies that the source draws as large regions are left out. The Palo Verde nuclear plant in Arizona and the Intermountain plant in Utah are outside the map; cards mention them where they matter.');
  const FEATURES = [], add = o => FEATURES.push(o);
  const OTC = 'Once-through cooling means drawing sea water through the plant and returning it warmer. A 2010 state policy requires coastal plants to stop or sharply cut the practice, because the intakes kill fish and other sea life.';

  // ----------------------------------------------------------------- nuclear
  add({ id: 'diablo', kind: 'nuclear', plant: 6099, name: 'Diablo Canyon Power Plant', short: 'Diablo Canyon', tier: 1,
    lede: 'California\'s only working nuclear plant, on the coast near San Luis Obispo. Its owner once planned to close it by 2025. State law now keeps it open through 2030.',
    stats: [['17.6 TWh', 'electricity generated in 2025, 8.5% of all generation in California'], ['2044 and 2045', 'years the two federal licenses now expire, after a renewal on 2 April 2026'], ['2029 and 2030', 'years state regulators have set for the two reactors to stop: 31 October of each year'], ['2016', 'year Pacific Gas and Electric announced it would close the plant']],
    body: '<p>Pacific Gas and Electric owns and runs the plant. A 2022 state law reversed the planned closure. Running either reactor past 2030 would need a new vote of the Legislature, whatever the federal license allows.</p><p>The plant is cooled with sea water. The state\'s rule against that practice was amended in 2023 to move Diablo Canyon\'s deadline.</p>',
    sources: [S.cec, S.ans, S.otc] });
  add({ id: 'sanonofre', kind: 'closed', plant: 360, name: 'San Onofre Nuclear Generating Station (closed 2013)', short: 'San Onofre (closed)', tier: 2,
    lede: 'A nuclear plant on the coast between Los Angeles and San Diego. Its last two reactors stopped for good in June 2013 and the plant is being dismantled.',
    stats: [['7 June 2013', 'date Southern California Edison permanently stopped Units 2 and 3'], ['18.5 TWh', 'nuclear generation in California in 2012, down from 32.2 TWh in 2010, when both plants ran'], ['8 to 10 years', 'planned length of the dismantling work, which needed a 2019 coastal permit']],
    body: '<p>The used fuel is stored on site in steel and concrete containers. When the work is done the land returns to its owner, the US Navy.</p>',
    sources: [S.songs, S.hist] });

  // ----------------------------------------------------------------- gas
  add({ id: 'mosslanding', kind: 'battery', kindLabel: 'Gas plant and battery site', plant: 260, name: 'Moss Landing: gas plant, batteries and the 2025 fire', short: 'Moss Landing', tier: 2,
    lede: 'A gas plant on Monterey Bay whose old turbine hall was filled with batteries. On 16 January 2025 that battery building caught fire and burned for two days.',
    stats: [['300 MW', 'size of the battery building that burned. It held about 100,000 battery modules'], ['About 55%', 'share of those modules damaged in the fire'], ['Mid-2027', 'when the EPA expects battery removal and demolition to be finished'], ['2.1 TWh', 'electricity generated by the gas units here in 2025']],
    body: '<p>The EPA says the cause is unknown. The owner, Vistra, agreed in July 2025 to do and pay for the cleanup under EPA oversight. Nearly 40,000 undamaged batteries were removed and sent for recycling before the final phase began in September 2026.</p><p>The site still lists 450 MW of other batteries, and Pacific Gas and Electric has a separate 182.5 MW battery next door.</p>',
    sources: [S.epaMoss, S.e923, S.inv] });
  add({ id: 'delta', kind: 'gas', plant: 55333, name: 'Delta Energy Center', short: 'Delta Energy Center', tier: 2,
    lede: 'The gas plant that generated the most electricity in California in 2025. It stands at Pittsburg, where the rivers of the Central Valley meet San Francisco Bay.',
    stats: [['4.1 TWh', 'electricity generated in 2025'], ['28.5 Bcf', 'natural gas burned in 2025. Bcf means billion cubic feet'], ['598 Bcf', 'gas burned by all California power plants in 2025']],
    body: '<p>The plant burns gas in turbines and then uses the hot exhaust to make steam for another turbine. That design, called combined cycle, gets more electricity from the same gas.</p><p>Several other gas plants stand along this shore, and so does the closed Pittsburg plant, once the largest in the state.</p>',
    sources: [S.e923, S.inv] });
  add({ id: 'alamitos', kind: 'gas', plant: 315, name: 'Alamitos, Long Beach', short: 'Alamitos', tier: 2,
    lede: 'A coastal gas plant with old and new halves. The old steam units are cooled with sea water and are listed to retire in 2026. A newer plant beside them opened in 2020 and is air-cooled.',
    stats: [['1.5 TWh', 'electricity generated in 2025 by the newer plant'], ['0.03 TWh', 'generated in 2025 by the old units'], ['2023', 'year the state last moved the deadline for the old units to stop using sea water']],
    body: '<p>' + OTC + ' The state moved the deadlines for Alamitos, Huntington Beach and Ormond Beach in 2020 and again in 2023.</p><p class="gcap">The table below adds the old and new plants together.</p>',
    sources: [S.e923, S.otc, S.inv] });
  add({ id: 'scattergood', kind: 'gas', plant: 404, name: 'Scattergood Generating Station', short: 'Scattergood', tier: 3,
    lede: 'A Los Angeles Department of Water and Power gas plant on the beach beside the airport. It is one of the last plants in the state still cooled with sea water.',
    stats: [['1.7 TWh', 'electricity generated in 2025'], ['12.5 Bcf', 'natural gas burned in 2025'], ['2023', 'year the state last revised the plant\'s deadline to stop using sea water']],
    body: '<p>' + OTC + '</p>', sources: [S.e923, S.otc] });
  add({ id: 'redondo', kind: 'closed', plant: 356, name: 'Redondo Beach Generating Station (closed 2023)', short: 'Redondo Beach (closed)', tier: 3,
    lede: 'A sea-water-cooled gas plant on the Los Angeles coast that closed at the end of 2023. Ten coastal plants like it have closed since 2006.',
    stats: [['10', 'coastal gas plants in the federal list that closed between 2006 and 2023, from San Diego Bay to San Francisco'], ['2021', 'year the state extended this plant\'s deadline for the last time']],
    body: '<p>The others are South Bay, Encina, El Segundo, Mandalay, Morro Bay, Hunters Point, Potrero, Pittsburg and Contra Costa. Turn on the Closed plants layer to see them. At several sites a newer gas plant or a battery now stands beside the old one.</p>',
    sources: [S.inv, S.otc] });
  add({ id: 'pastoria', kind: 'gas', plant: 55656, name: 'Pastoria Energy Facility', short: 'Pastoria', tier: 3,
    lede: 'A gas plant at the foot of the Tehachapi Mountains, where the transmission lines and the state aqueduct both climb toward Los Angeles.',
    stats: [['3.6 TWh', 'electricity generated in 2025, the second most of any California gas plant'], ['24.7 Bcf', 'natural gas burned in 2025']],
    body: '<p>A solar farm and a battery were added beside the plant in 2026.</p>', sources: [S.e923, S.inv] });
  add({ id: 'elkhills', kind: 'gas', plant: 55400, name: 'Elk Hills Power', short: 'Elk Hills', tier: 3,
    lede: 'A gas plant inside the Elk Hills oil and gas field west of Bakersfield. The field\'s own operator sells it the gas.',
    stats: [['3.1 TWh', 'electricity generated in 2025'], ['22.6 Bcf', 'natural gas delivered in 2025, all listed as sold by the field operator\'s marketing arm'], ['112 Bcf', 'all the gas produced for sale in California in 2025']],
    body: '<p>California wells supplied about 6% of the gas the state used in 2024.</p>',
    sources: [S.e923, S.e923f, S.gasProd, S.gasCons] });
  add({ id: 'cosumnes', kind: 'gas', plant: 55970, name: 'Cosumnes Power Plant', short: 'Cosumnes', tier: 3,
    lede: 'The Sacramento Municipal Utility District\'s main gas plant. It stands beside the district\'s closed Rancho Seco nuclear plant, which Sacramento voters chose to shut in 1989.',
    stats: [['3.5 TWh', 'electricity generated in 2025, about a third of what the district sold'], ['22.7 Bcf', 'natural gas burned in 2025']],
    body: '<p>Two solar farms named for Rancho Seco now stand on the old plant\'s land.</p>', sources: [S.e923, S.e861, S.inv] });
  add({ id: 'humboldt', kind: 'gas', plant: 246, name: 'Humboldt Bay Generating Station', short: 'Humboldt Bay', tier: 3,
    lede: 'A Pacific Gas and Electric gas plant at Eureka, on the north coast, far from the state\'s other large plants.',
    stats: [['0.36 TWh', 'electricity generated in 2025'], ['3.0 Bcf', 'natural gas burned in 2025']],
    sources: [S.e923] });
  add({ id: 'argus', kind: 'coal', plant: 10684, name: 'Argus Cogeneration Plant, Trona', short: 'Argus (coal)', tier: 2,
    lede: 'The only plant in California whose main fuel is coal. It makes steam and power for a minerals works on Searles Lake, in the Mojave Desert.',
    stats: [['0.25 TWh', 'electricity generated in 2025, 0.1% of California\'s total'], ['534,000 tons', 'coal delivered by rail in 2025'], ['89%', 'share of that coal from the West Elk mine in Colorado. The rest came from Black Thunder in Wyoming'], ['4.7 TWh', 'coal power California imported in 2025, most of it from Utah']],
    body: '<p>Coal plants inside California made 2.1 TWh in 2010. The others have closed or switched fuel.</p>',
    sources: [S.e923, S.e923f, S.cec, S.hist] });
  add({ id: 'watson', kind: 'user', kindLabel: 'Refinery power plant', plant: 50216, name: 'Watson Cogeneration and the refineries', short: 'Refineries', tier: 2,
    lede: 'A gas plant inside the largest oil refinery in California, at Carson. It makes steam for the refinery and electricity at once, which is called cogeneration.',
    stats: [['2.3 TWh', 'electricity generated in 2025'], ['365,000', 'barrels of crude oil a day the Marathon Los Angeles refinery can process'], ['11', 'refineries on the state\'s list in July 2026, with capacity for 1.34 million barrels a day'], ['13.0 TWh', 'electricity that California plant owners used on site without selling it, 2024']],
    body: '<p>Refineries need heat around the clock, so several run their own gas plants. The Chevron refineries at El Segundo and Richmond and the refinery at Martinez have them too.</p>',
    sources: [S.e923, S.refin, S.prof] });

  // ----------------------------------------------------------------- geothermal
  add({ id: 'geysers', kind: 'geo', plant: 286, name: 'The Geysers', short: 'The Geysers', tier: 1,
    lede: 'A field of dry steam in the mountains north of San Francisco. Its owner calls it the largest complex of geothermal plants in the world.',
    stats: [['5.9 TWh', 'electricity generated in 2025 by all the plants here, more than half of California\'s geothermal power'], ['13', 'plants owned by Calpine, on 45 square miles of Sonoma and Lake counties'], ['1960', 'year commercial generation began here'], ['25 MW', 'expansion completed in July 2026']],
    body: '<p>Wells bring up steam that turns the turbines directly. The Northern California Power Agency, a group of city utilities, owns two more plants in the field.</p><p class="gcap">The table below adds four Calpine entries in the federal list. The two city-owned plants are separate dots.</p>',
    sources: [S.e923, S.geysers, S.cec] });
  add({ id: 'saltonsea', kind: 'geo', plant: 10759, name: 'Salton Sea geothermal field and lithium', short: 'Salton Sea geothermal', tier: 1,
    lede: 'Ten geothermal plants at the south end of the Salton Sea draw up very hot brine. The brine is rich in lithium, the metal in car batteries, and three companies plan to extract it. None does so commercially yet.',
    stats: [['2.2 TWh', 'electricity generated in 2025 by the ten plants, which Berkshire Hathaway owns'], ['375 million', 'electric-car batteries the lithium here could make, by a federal laboratory\'s estimate'], ['August 2026', 'when an appeals court sent the largest lithium project back for more environmental review']],
    body: '<p>The court ruled on Hell\'s Kitchen, a project of Controlled Thermal Resources that would add almost 50 MW of geothermal power. It found the review had not shown where 50 years of water would come from, or what less water would do to dust from the shrinking sea.</p><p>Berkshire Hathaway finished a pilot and plans a demonstration plant at Calipatria, to run through 2027. A third company, EnergySource Minerals, has permits.</p><p class="gcap">The table below adds the ten Berkshire Hathaway plants together.</p>',
    sources: [S.e923, S.lithium] });
  add({ id: 'coso', kind: 'geo', plant: 10873, name: 'Coso geothermal field', short: 'Coso', tier: 3,
    lede: 'Three geothermal plants on a Navy weapons range east of the Sierra Nevada.',
    stats: [['0.92 TWh', 'electricity generated by the three plants in 2025']],
    body: '<p class="gcap">The table below adds the three plants together.</p>', sources: [S.e923] });

  // ----------------------------------------------------------------- solar and storage
  add({ id: 'solarstar', kind: 'solar', plant: 58388, name: 'Solar Star', short: 'Solar Star', tier: 2,
    lede: 'Two adjoining solar farms in the Antelope Valley, at the west end of the Mojave Desert. They are among the largest solar farms in the state.',
    stats: [['1.6 TWh', 'electricity generated in 2025'], ['25,633 MW', 'capacity of all the solar farms in California in September 2026'], ['34.4 TWh', 'federal estimate of what rooftop and other small solar systems made in 2025, on top of 55.5 TWh from solar farms']],
    body: '<p>California had 2.1 million customers with solar panels in 2024. Those who applied before 15 April 2023 are credited at close to the retail price for power they send to the grid. Later applicants are paid a lower rate tied to what the power is worth to the grid in that hour. State regulators made that change in December 2022.</p>',
    sources: [S.e923, S.inv, S.roof, S.prof, S.nbt] });
  add({ id: 'edwards', kind: 'solar', plant: 64878, name: 'Edwards Sanborn solar and storage', short: 'Edwards Sanborn', tier: 2,
    lede: 'A solar and battery complex on and around Edwards Air Force Base. It is one of the largest battery sites in the state.',
    stats: [['957 MW', 'solar capacity across the 14 parts of the project'], ['1,066 MW', 'battery power across the project'], ['2,615 MWh', 'energy those batteries hold when full, about two and a half hours at full power'], ['1.75 TWh', 'electricity the project sent out in 2025']],
    body: '<p class="gcap">The federal list splits the project into 14 entries. The table below is for one of them.</p>', sources: [S.inv, S.e923] });
  add({ id: 'desertsunlight', kind: 'solar', plant: 57993, name: 'Desert Sunlight and the Riverside East solar zone', short: 'Desert Sunlight', tier: 2,
    lede: 'One of the first very large solar farms, built on federal desert land along Interstate 10. More than a dozen solar farms and batteries now line the road from here to the Colorado River.',
    stats: [['1.1 TWh', 'electricity generated here in 2025'], ['3.4 million MWh', 'solar and wind power the main grid operator turned away in 2024 because there was nowhere to send it'], ['5.3 million MWh', 'turned away in the first ten months of 2026'], ['April and May', 'the months with the most: 1.46 and 1.45 million MWh in 2026']],
    body: '<p>Turning away power is called curtailment. It happens mostly at midday in spring, when the sun is strong and demand is low. In 2024, 93% of the curtailed energy was solar. Batteries, exports to other states and new transmission lines all reduce it.</p><p class="gcap">The table below adds the farm\'s two phases.</p>',
    sources: [S.e923, S.curt, S.ks] });
  add({ id: 'ivanpah', kind: 'solar', kindLabel: 'Solar thermal plant', plant: 57074, name: 'Ivanpah Solar Electric Generating System', short: 'Ivanpah', tier: 2,
    lede: 'Three towers ringed by mirrors, beside Interstate 15 at the Nevada line. The mirrors focus sunlight on boilers at the top of the towers. The contracts for two of the three towers may end early.',
    stats: [['0.69 TWh', 'electricity generated in 2025'], ['$1.6 billion', 'federal loan guarantees that helped build it'], ['January 2025', 'when Pacific Gas and Electric said it had agreed to end its contracts for two of the towers, which ran to 2039']],
    body: '<p>The utility said ending the contracts would save its customers money, because solar panels with batteries now cost less. The deal needed approval from state regulators. Southern California Edison buys the third tower\'s power.</p><p>The plant also burns some natural gas, which is why the table shows carbon dioxide.</p><p class="gcap">The table below adds the three towers.</p>',
    sources: [S.e923, S.ivanpah] });
  add({ id: 'topaz', kind: 'solar', plant: 57695, name: 'Topaz Solar Farm', short: 'Topaz', tier: 3,
    lede: 'A solar farm on the Carrizo Plain, inland from San Luis Obispo. It opened in 2013 and 2014.',
    stats: [['1.0 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'eland', kind: 'solar', plant: 61168, name: 'Eland Solar and Storage Center', short: 'Eland', tier: 3,
    lede: 'A solar farm with batteries in the Mojave Desert north of the town of Mojave, built in two phases in 2024 and 2025.',
    stats: [['0.94 TWh', 'electricity generated by the two phases in 2025'], ['1,200 MWh', 'energy the two phases\' batteries hold when full']],
    body: '<p class="gcap">The table below is for the first phase.</p>', sources: [S.e923, S.inv] });
  add({ id: 'menifee', kind: 'battery', plant: 66494, name: 'Menifee Power Bank', short: 'Menifee battery', tier: 3,
    lede: 'A battery plant built in 2024 on the site of a gas plant. The Inland Empire Energy Center opened here in 2009 and closed in 2020.',
    stats: [['4 hours', 'time it can run at full power'], ['16,489 MW', 'all large batteries in California in the September 2026 federal list, at 246 sites'], ['10,613 MW', 'more battery capacity planned']],
    body: '<p>California\'s large batteries together hold 56,503 MWh, about three and a half hours at full power. They charge when solar power is plentiful and discharge in the evening. Batteries use more energy than they return: 1.95 TWh more in 2025.</p>',
    sources: [S.inv, S.e923] });
  add({ id: 'darden', kind: 'plannedp', plant: 69661, name: 'Darden Clean Energy Project (under construction)', short: 'Darden (planned)', tier: 3,
    lede: 'A solar farm and battery under construction on former farmland in western Fresno County. The developer bought the land from the Westlands Water District.',
    stats: [['1,150 MW', 'planned solar capacity'], ['4,600 MWh', 'energy the planned batteries would hold: up to 1,150 MW for four hours'], ['About 9,500 acres', 'size of the site'], ['12 June 2025', 'date the California Energy Commission approved it']],
    body: '<p class="gcap">The federal list splits the project into four entries. The table below is for one of them.</p>', sources: [S.darden, S.inv] });
  add({ id: 'willowrock', kind: 'plannedp', plant: 70492, name: 'Willow Rock Energy Storage Center (planned)', short: 'Willow Rock (planned)', tier: 3,
    lede: 'A plant that would store energy as compressed air in a cavern dug into rock, near Rosamond in Kern County.',
    stats: [['500 MW', 'planned output'], ['8 hours', 'time it could run at full power: 4,000 MWh'], ['19 Dec 2025', 'date the California Energy Commission approved it. Construction had not begun by late 2026']],
    sources: [S.willow] });

  // ----------------------------------------------------------------- wind
  add({ id: 'alta', kind: 'wind', plant: 57282, name: 'Alta Wind and the Tehachapi Pass', short: 'Tehachapi wind', tier: 1,
    lede: 'Wind funnels through the Tehachapi Pass between the Central Valley and the Mojave Desert. More than half of California\'s wind capacity stands here.',
    stats: [['3,677 MW', 'wind capacity around the pass in September 2026, of 6,612 MW in all California'], ['2.3 TWh', 'electricity generated in 2025 by Alta Wind, the largest group of farms'], ['15.2 TWh', 'all wind power generated in California in 2025']],
    body: '<p>California imported more wind power in 2025 (18.0 TWh) than it generated. The imports came from the Northwest and from New Mexico and other Southwest states.</p><p class="gcap">The table below adds eight Alta Wind entries in the federal list.</p>',
    sources: [S.inv, S.e923, S.cec] });
  add({ id: 'sangorgonio', kind: 'wind', plant: 55719, name: 'San Gorgonio Pass wind farms', short: 'San Gorgonio wind', tier: 2,
    lede: 'The turbines beside Interstate 10 near Palm Springs. Wind has been farmed here since the early 1980s.',
    stats: [['674 MW', 'wind capacity in the pass in September 2026, in 22 separate farms'], ['1983', 'opening year of the oldest farm still on the federal list here']],
    body: '<p class="gcap">The table below is for one farm, Mountain View I and II.</p>', sources: [S.inv] });
  add({ id: 'altamont', kind: 'wind', plant: 60049, name: 'Altamont Pass wind farms', short: 'Altamont wind', tier: 3,
    lede: 'The hills east of San Francisco Bay, where wind has been farmed since the early 1980s. The farms running today opened between 2004 and 2021.',
    stats: [['326 MW', 'wind capacity in the pass in September 2026'], ['2015', 'year the original Altamont Pass Windplant, opened in 1983, was retired']],
    body: '<p class="gcap">The table below is for one farm, Golden Hills.</p>', sources: [S.inv] });
  add({ id: 'offshore', kind: 'info', lon: -121.75, lat: 35.62, name: 'Offshore wind leases', short: 'Offshore wind', tier: 3,
    lede: 'The federal government leased five areas of deep ocean for floating wind farms in 2022, three off Morro Bay and two off Humboldt Bay. In 2026 it agreed with three of the lease holders to cancel or give up their leases.',
    stats: [['$757 million', 'winning bids at the December 2022 sale'], ['3 of 5', 'leases cancelled, given up or agreed for cancellation in 2026'], ['25 GW', 'offshore wind the state plans for by 2045. A gigawatt (GW) is 1,000 MW'], ['28 Aug 2026', 'date California sued over one of the cancellations']],
    body: '<p>Under the agreements the companies get back what they paid for the leases. In the one California is challenging, the company would recover about $120 million after investing the same amount in oil, gas or other energy projects. The state says federal law does not allow the leases to be cancelled this way.</p><p>No turbine has been built. The federal government has paused new offshore wind leasing.</p><p class="gcap">The marker is approximate: the Morro Bay lease areas are about 20 miles offshore.</p>',
    sources: [S.boem, S.osw] });

  // ----------------------------------------------------------------- hydro
  add({ id: 'shasta', kind: 'hydro', plant: 445, name: 'Shasta Dam', short: 'Shasta Dam', tier: 1,
    lede: 'The dam that holds California\'s largest reservoir, on the Sacramento River. Its powerplant generated more in 2025 than any other dam in the state.',
    stats: [['2.3 TWh', 'electricity generated in 2025'], ['5', 'generators at the foot of the dam'], ['27.5 TWh', 'all hydropower generated in California in 2025, 13% of in-state generation']],
    body: '<p>The US Bureau of Reclamation runs the dam as part of the Central Valley Project. Some of the power runs the project\'s own pumps. The federal Western Area Power Administration sells the rest to public utilities.</p>',
    sources: [S.e923, S.shasta, S.cec] });
  add({ id: 'oroville', kind: 'hydro', plant: 437, name: 'Oroville Dam (Edward Hyatt Powerplant)', short: 'Oroville Dam', tier: 2,
    lede: 'The dam that holds the main reservoir of the State Water Project, on the Feather River. Some of its generators can also pump water back up into the lake.',
    stats: [['2.0 TWh', 'electricity generated in 2025'], ['3.6 TWh', 'generated in 2025 by all the State Water Project\'s plants'], ['3.2 TWh', 'electricity the project used in its own operations that year, mostly to pump water']],
    sources: [S.e923, S.e861, S.inv] });
  add({ id: 'helms', kind: 'pumped', plant: 6100, name: 'Helms Pumped Storage Plant', short: 'Helms', tier: 2,
    lede: 'A power station dug into the Sierra Nevada between two reservoirs. It pumps water uphill when power is plentiful and lets it fall back through the turbines when power is scarce.',
    stats: [['-0.47 TWh', 'net output in 2025. It is negative because pumping takes more energy than the water gives back'], ['3,704 MW', 'pumped storage capacity in California, in six plants'], ['About 3,900 MW', 'size of Pacific Gas and Electric\'s whole hydropower system, with 67 powerhouses']],
    body: '<p>Pumped storage does the same job as a battery and can run for more hours.</p>',
    sources: [S.e923, S.inv, S.pgeHydro] });
  add({ id: 'castaic', kind: 'pumped', plant: 392, name: 'Castaic Power Plant', short: 'Castaic', tier: 2,
    lede: 'The largest pumped storage plant in California, north of Los Angeles. It works between Pyramid Lake and Castaic Lake on the State Water Project, and the Los Angeles Department of Water and Power runs it.',
    stats: [['0.16 TWh', 'net output in 2025. It is positive because aqueduct water also flows down through the plant on its way to Los Angeles']],
    sources: [S.e923, S.inv] });
  add({ id: 'bigcreek', kind: 'hydro', plant: 319, name: 'Big Creek hydroelectric system', short: 'Big Creek', tier: 3,
    lede: 'A chain of powerhouses on the San Joaquin River that Southern California Edison began building in 1913 to power Los Angeles. The same water passes through one powerhouse after another on its way down.',
    stats: [['2.2 TWh', 'electricity generated in 2025 by the six numbered powerhouses']],
    body: '<p class="gcap">The table below adds six powerhouses. The marker is at Powerhouse 3.</p>', sources: [S.e923, S.inv] });
  add({ id: 'klamath', kind: 'closed', plant: 297, name: 'Klamath River dams (removed 2023 and 2024)', short: 'Klamath dams (removed)', tier: 2,
    lede: 'Four hydropower dams on the Klamath River have been taken out so that salmon can return. This was Iron Gate, the lowest of them.',
    stats: [['163 MW', 'generating capacity of the four dams, three in California and one in Oregon'], ['October 2024', 'when the last three were gone. The first, Copco 2, was removed in November 2023'], ['400+ miles', 'of river and streams reopened to salmon']],
    body: '<p>PacifiCorp owned the dams. It agreed to their removal with tribes, the two states and fishing and farming groups, and a nonprofit corporation took ownership to do the work.</p>',
    sources: [S.krrc] });
  add({ id: 'hoover', kind: 'hydro', plant: 8902, name: 'Hoover Dam', short: 'Hoover Dam', tier: 3,
    lede: 'The dam that holds Lake Mead, on the Nevada-Arizona line. Part of its power goes to Southern California.',
    stats: [['2.7 TWh', 'electricity generated in 2025 by both sides of the dam'], ['1.6 TWh', 'electricity the Metropolitan Water District of Southern California used in its own operations in 2025, mostly to pump Colorado River water']],
    body: '<p>Federal files assign the dam to Nevada and Arizona, so the power it sends to California counts as an import.</p>', sources: [S.e923, S.e861] });

  // ----------------------------------------------------------------- fuel supply
  add({ id: 'gasaz', kind: 'fuel', lon: -114.55, lat: 34.74, name: 'Where the gas comes in: from Arizona', short: 'Gas enters (Arizona)', tier: 2,
    lede: 'Three pipeline systems cross the Colorado River near Needles: El Paso, Transwestern and Mojave. They carry gas from the Permian Basin of west Texas and the San Juan Basin of New Mexico.',
    stats: [['898 Bcf', 'natural gas that entered California from Arizona in 2024, 44% of all the gas received from other states. Bcf means billion cubic feet'], ['Nearly 90%', 'share of California\'s gas that comes from outside the state, by the Energy Commission\'s account'], ['567 Bcf', 'gas delivered to California power plants in 2024, 29% of all the gas used in the state']],
    body: '<p>The other two doors are Oregon (686 billion cubic feet in 2024) and Nevada (459 billion). California passes some gas on: 156 billion cubic feet went to Mexico in 2024.</p>',
    sources: [S.gasMove, S.gasCons, S.cecGas, S.pipes] });
  add({ id: 'gasor', kind: 'fuel', lon: -121.37, lat: 41.99, name: 'Where the gas comes in: from Oregon', short: 'Gas enters (Oregon)', tier: 2,
    lede: 'Two interstate pipelines meet Pacific Gas and Electric\'s system at Malin, on the Oregon line. One brings gas from Alberta, Canada. The other, Ruby, brings gas from the Rocky Mountains.',
    stats: [['686 Bcf', 'natural gas that entered California from Oregon in 2024, 34% of all the gas received from other states']],
    body: '<p>From here the gas runs south through the Central Valley to the Bay Area.</p>', sources: [S.gasMove, S.pipes] });
  add({ id: 'gasnv', kind: 'fuel', lon: -115.62, lat: 35.62, name: 'Where the gas comes in: from Nevada', short: 'Gas enters (Nevada)', tier: 3,
    lede: 'The Kern River pipeline crosses from Nevada here on its way from the gas fields of Wyoming and Utah to Kern County and Southern California.',
    stats: [['459 Bcf', 'natural gas that entered California from Nevada in 2024, 22% of all the gas received from other states']],
    body: '<p class="gcap">The marker is where the pipeline in the federal map file crosses the state line. Smaller lines also cross near Lake Tahoe.</p>', sources: [S.gasMove, S.pipes] });
  add({ id: 'aliso', kind: 'fuel', kindLabel: 'Gas storage field', lon: -118.564, lat: 34.315, name: 'Aliso Canyon gas storage', short: 'Aliso Canyon', tier: 2,
    lede: 'A depleted oil field in the hills above Los Angeles where Southern California Gas stores gas for winter and for power plants. A well here leaked from October 2015 to February 2016.',
    stats: [['68.6 Bcf', 'gas the field is allowed to hold, set in August 2023. It held up to 86 Bcf before the leak'], ['14', 'underground gas storage fields in California, all in old oil or gas fields'], ['323 Bcf', 'gas those fields can deliver over a season, 2024'], ['4,121 MMcf a day', 'peak demand forecast at which state regulators would open a case to close the field. MMcf means million cubic feet']],
    body: '<p>Gas plants around Los Angeles lean on the field on hot evenings and cold mornings, when the pipelines alone cannot keep up. Under a 2024 plan, state regulators review every two years whether the field can close without harming reliability or prices. The first review came out in October 2025.</p>',
    sources: [S.aliso, S.alisoFs, S.gasStor] });

  // ----------------------------------------------------------------- grid hubs
  add({ id: 'caiso', kind: 'hub', kindLabel: 'Grid operator', lon: -121.11, lat: 38.645, name: 'California ISO, Folsom', short: 'Grid operator', tier: 2,
    lede: 'The control room of the California Independent System Operator, the organization that runs the grid and the power market for most of the state. Plants in its area made 84% of California\'s electricity in 2025.',
    stats: [['52,061 MW', 'record demand on its grid, 6 September 2022'], ['50,335 MW', 'highest demand in 2026, on 9 September just before 6 p.m.'], ['17,285 MW', 'batteries on its grid on 31 October 2026'], ['1 May 2026', 'date it opened a day-ahead market shared with PacifiCorp, a utility based in Oregon']],
    body: '<p>Los Angeles, Sacramento, the Imperial Valley and Turlock balance their own grids. Since 2014 the operator has also run a real-time market that 24 utilities in 12 states use to trade surplus power. It puts the savings at $9.6 billion. Portland General Electric was due to join the day-ahead market in October 2026, and the Los Angeles utility in 2027.</p>',
    sources: [S.ks, S.edam, S.e923] });
  add({ id: 'path15', kind: 'hub', lon: -121.022, lat: 37.053, name: 'Path 15: the link between north and south', short: 'Path 15', tier: 2,
    lede: 'Three 500-kilovolt lines run down the west side of the Central Valley from the Los Banos substation. They are the main tie between the northern and southern halves of California\'s grid.',
    stats: [['84 miles', 'length of the corridor'], ['Up to 5,400 MW', 'power it can carry northward'], ['21 Dec 2004', 'date a third line was finished, after shortages on this corridor during the 2000 and 2001 power crisis']],
    sources: [S.wP15] });
  add({ id: 'path26', kind: 'hub', lon: -119.452, lat: 35.404, name: 'Midway substation and Path 26', short: 'Path 26', tier: 3,
    lede: 'The Midway substation west of Bakersfield is where Pacific Gas and Electric\'s grid meets Southern California Edison\'s. Three 500-kilovolt lines climb from here over the mountains toward Los Angeles.',
    stats: [['3,700 MW', 'power the three lines can carry southward'], ['3,000 MW', 'power they can carry northward']],
    sources: [S.wP26] });
  add({ id: 'coi', kind: 'hub', lon: -121.317, lat: 42.006, name: 'Malin: the lines to the Northwest', short: 'Northwest intertie', tier: 3,
    lede: 'Three 500-kilovolt lines from Oregon enter California here. Most of the power California imports from the Northwest arrives on them.',
    stats: [['20.0 TWh', 'electricity California imported from the Northwest in 2025'], ['9.4 TWh', 'of that from wind farms, and 4.8 TWh from dams']],
    body: '<p>The Energy Commission says Northwest imports were held down for a third year by low water on the Columbia.</p>', sources: [S.cec] });
  add({ id: 'sylmar', kind: 'hub', lon: -118.481, lat: 34.312, name: 'Sylmar: the south end of the Pacific DC Intertie', short: 'Pacific DC Intertie', tier: 2,
    lede: 'A direct-current line from the Columbia River in Oregon ends at this converter station in Los Angeles. Direct current loses less power over long distances than the alternating current used on the rest of the grid.',
    stats: [['846 miles', 'length of the line, which crosses Nevada east of the Sierra'], ['3,100 MW', 'power it can carry'], ['1970', 'year the first phase was finished']],
    body: '<p>The Los Angeles Department of Water and Power manages the station. On this map the line is the one that runs from the Oregon border down through Nevada and the Owens Valley.</p>',
    sources: [S.wPdci] });
  add({ id: 'adelanto', kind: 'hub', lon: -117.438, lat: 34.551, name: 'Adelanto: the direct-current line from Utah', short: 'Line from Utah', tier: 3,
    lede: 'A direct-current line from the Intermountain power plant near Delta, Utah, ends here. For forty years it carried coal power to Los Angeles and other Southern California cities.',
    stats: [['488 miles', 'length of the line'], ['2,400 MW', 'power it can carry'], ['840 MW', 'output of the gas units that began running at Intermountain in July 2025, built to burn a blend with 30% hydrogen'], ['4.2 TWh', 'electricity Intermountain made from coal in 2025, and 0.6 TWh from gas']],
    body: '<p>The coal units have sat idle since November 2025. A Utah law passed in 2024 requires the plant\'s owner to sell them to the state, which was still looking for a buyer in March 2026. The plant is off this map.</p>',
    sources: [S.wP27, S.ipa, S.ippCoal, S.e923] });
  add({ id: 'devers', kind: 'hub', lon: -116.578, lat: 33.939, name: 'Devers: the lines from Arizona', short: 'Lines from Arizona', tier: 3,
    lede: 'The 500-kilovolt lines along Interstate 10 from the Colorado River reach the Los Angeles basin at this substation near Palm Springs. They carry desert solar power and imports from Arizona.',
    stats: [['42.0 TWh', 'electricity California imported from the Southwest in 2025'], ['8.5 TWh', 'of that nuclear. Southern California utilities own shares of the Palo Verde plant in Arizona, which is off this map'], ['10,623 MW', 'combined rating of the 14 lines that bring power west from the Colorado River and southern Nevada']],
    sources: [S.cec, S.wP46] });
  add({ id: 'transbay', kind: 'hub', lon: -122.386, lat: 37.755, name: 'Trans Bay Cable', short: 'Trans Bay Cable', tier: 3,
    lede: 'A direct-current cable buried in the floor of San Francisco Bay. It runs from Pittsburg, where the power plants are, to San Francisco, which has had no large plant of its own since 2011.',
    stats: [['53 miles', 'length of the cable'], ['About 40%', 'share of San Francisco\'s daily electricity it carries, by its owner\'s account']],
    sources: [S.tbc, S.inv] });

  // ----------------------------------------------------------------- users
  add({ id: 'la', kind: 'city', lon: -118.243, lat: 34.052, name: 'Los Angeles', short: 'Los Angeles', tier: 1,
    lede: 'The city owns its electric utility. Around it, Southern California Edison serves most of the rest of the region.',
    stats: [['20.7 TWh', 'electricity the Los Angeles Department of Water and Power sold in 2025, to 1.5 million customers'], ['5,239 MW', 'its highest demand in 2025'], ['21,112 MW', 'Southern California Edison\'s highest demand in 2025']],
    body: '<p>The city utility runs its own grid, apart from the operator that serves most of the state. It brings power in on its own long lines from Oregon, Utah and Nevada. It is due to join the shared day-ahead market in 2027.</p>',
    sources: [S.e861, S.edam] });
  add({ id: 'bayarea', kind: 'city', lon: -122.42, lat: 37.775, name: 'San Francisco Bay Area', short: 'San Francisco', tier: 1,
    lede: 'Pacific Gas and Electric owns the wires here, but most of its customers now buy their power from someone else, usually a community agency set up by their city or county.',
    stats: [['25', 'community choice agencies in California in 2025'], ['61.1 TWh', 'electricity those agencies sold in 2025, a quarter of all sales in the state, to 6.2 million customers'], ['16,443 MW', 'Pacific Gas and Electric\'s highest demand in 2025']],
    body: '<p>A community choice agency buys electricity for the homes and businesses in its area. The investor-owned utility still delivers it and sends the bill. The largest agencies are in Los Angeles and Ventura counties, San Diego and the East Bay.</p>',
    sources: [S.e861] });
  add({ id: 'sandiego', kind: 'city', lon: -117.161, lat: 32.716, name: 'San Diego', short: 'San Diego', tier: 2,
    lede: 'San Diego Gas & Electric delivers the power. Most of its customers buy their electricity through community agencies.',
    stats: [['16.8 TWh', 'electricity delivered over the utility\'s wires in 2025'], ['83%', 'share of that energy supplied by community agencies and other sellers, not the utility'], ['5,032 MW', 'highest demand in 2025']],
    sources: [S.e861] });
  add({ id: 'sacramento', kind: 'city', lon: -121.494, lat: 38.582, name: 'Sacramento', short: 'Sacramento', tier: 2,
    lede: 'The Sacramento Municipal Utility District, owned by its customers and run by an elected board, serves the capital. It is the second-largest public utility in the state.',
    stats: [['10.5 TWh', 'electricity sold in 2025'], ['675,000', 'customers'], ['2,797 MW', 'highest demand in 2025']],
    sources: [S.e861, S.smud] });
  add({ id: 'datacenters', kind: 'datacenter', lon: -121.955, lat: 37.354, name: 'Santa Clara data centers', short: 'Data centers', tier: 2,
    lede: 'The City of Santa Clara runs its own electric utility, Silicon Valley Power, and data centers have clustered there. Nine-tenths of what it sells goes to industrial customers.',
    stats: [['5.0 TWh', 'electricity the city utility sold in 2025, to 62,000 customers'], ['4.6 TWh', 'of that sold to industrial customers'], ['747 MW', 'its highest demand in 2025']],
    body: '<p>The city sold more electricity in 2025 than the Imperial Irrigation District, which has more than twice as many customers.</p>',
    sources: [S.e861] });
  add({ id: 'swp', kind: 'user', kindLabel: 'Pumping plant', lon: -118.824, lat: 34.944, name: 'Edmonston Pumping Plant and the State Water Project', short: 'Water project pumps', tier: 2,
    lede: 'The State Water Project lifts water from the Central Valley over the Tehachapi Mountains here on its way to Southern California. Moving water makes the project one of the largest users of electricity in the state.',
    stats: [['3.2 TWh', 'electricity the project used in its own operations in 2025, about as much as the Imperial Irrigation District sold'], ['3.6 TWh', 'electricity the project\'s own dams generated that year'], ['1,416 MW', 'the project\'s highest demand in 2025']],
    body: '<p>The state Department of Water Resources runs the project and reports its electricity use to the federal government, as a utility does.</p>',
    sources: [S.e861] });
  add({ id: 'wildfire', kind: 'info', lon: -121.62, lat: 39.76, name: 'Power lines and wildfire: Paradise', short: 'Wildfire and power lines', tier: 2,
    lede: 'On 8 November 2018 a Pacific Gas and Electric transmission line started the Camp Fire, which destroyed most of the town of Paradise.',
    stats: [['85', 'people killed in the Camp Fire. It destroyed 18,804 buildings'], ['19', 'people killed in the Eaton Fire in Altadena in January 2025, whose cause the state lists as electrical'], ['1,500 miles', 'power lines Pacific Gas and Electric had put underground in high fire-risk areas by November 2026'], ['Under 10%', 'share of reported wildfires caused by electrical equipment, which state regulators say caused about half of the most destructive ones']],
    body: '<p>Utilities also switch lines off in dry, windy weather. Six utilities use these "public safety power shutoffs", which state regulators first allowed in 2012 and have fined utilities for handling badly.</p><p>Pacific Gas and Electric has proposed burying 5,000 miles of line over ten years. A proposed decision at the state utilities commission would cut the miles that qualify to about 1,100.</p>',
    sources: [S.camp, S.eaton, S.pgeUg, S.psps] });

  const BROWSE = [
    ['Nuclear and coal', ['diablo', 'sanonofre', 'argus']],
    ['Natural gas', ['delta', 'mosslanding', 'pastoria', 'cosumnes', 'elkhills', 'alamitos', 'scattergood', 'redondo', 'humboldt', 'watson']],
    ['Geothermal', ['geysers', 'saltonsea', 'coso']],
    ['Sun and batteries', ['solarstar', 'edwards', 'desertsunlight', 'ivanpah', 'topaz', 'eland', 'menifee', 'darden', 'willowrock']],
    ['Wind', ['alta', 'sangorgonio', 'altamont', 'offshore']],
    ['Dams and pumped storage', ['shasta', 'oroville', 'helms', 'castaic', 'bigcreek', 'klamath', 'hoover']],
    ['Where the gas comes from', ['gasaz', 'gasor', 'gasnv', 'aliso']],
    ['The grid', ['caiso', 'path15', 'path26', 'coi', 'sylmar', 'adelanto', 'devers', 'transbay']],
    ['Who uses it', ['la', 'bayarea', 'sandiego', 'sacramento', 'datacenters', 'swp', 'wildfire']],
  ];

  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025)
  const small = (lede, twh, cust) => ({ lede, stats: [[twh + ' TWh', 'electricity sold in 2025'], ...(cust ? [[cust, 'customers in 2025']] : [])], sources: [S.e861, HIFLD] });
  const CPUC = 'The California Public Utilities Commission sets its rates.';
  const AREAS = {
    'Pacific Gas and Electric': { lede: 'The investor-owned utility for most of northern and central California. It owns the Diablo Canyon nuclear plant and the largest hydropower system in the state.',
      stats: [['71.8 TWh', 'electricity delivered over its wires in 2025'], ['24.2 TWh', 'of that supplied by the utility itself. Community agencies and other sellers supplied the rest'], ['5.7 million', 'customers in 2025'], ['16,443 MW', 'highest demand in 2025']],
      body: '<p>' + CPUC + ' The company says it serves more than 16 million people across 70,000 square miles.</p><p>Its lines started the 2018 Camp Fire. By November 2026 it had put 1,500 miles of line underground in high fire-risk areas.</p>',
      sources: [S.e861, S.pgeUg, S.camp, HIFLD] },
    'Southern California Edison': { lede: 'The investor-owned utility for most of Southern California outside the cities of Los Angeles and San Diego. It delivers more electricity than any other utility in the state.',
      stats: [['78.3 TWh', 'electricity delivered over its wires in 2025'], ['50.4 TWh', 'of that supplied by the utility itself'], ['5.3 million', 'customers in 2025'], ['21,112 MW', 'highest demand in 2025']],
      body: '<p>' + CPUC + ' The company says it serves 15 million people in 15 counties.</p>', sources: [S.e861, S.sce, HIFLD] },
    'San Diego Gas & Electric': { lede: 'The investor-owned utility for San Diego County and southern Orange County.',
      stats: [['16.8 TWh', 'electricity delivered over its wires in 2025'], ['2.9 TWh', 'of that supplied by the utility itself'], ['1.5 million', 'customers in 2025'], ['5,032 MW', 'highest demand in 2025']],
      body: '<p>' + CPUC + ' The company says it serves 3.7 million people across 4,100 square miles.</p>', sources: [S.e861, S.sdge, HIFLD] },
    'Los Angeles Department of Water and Power': { lede: 'The city-owned utility for Los Angeles. The city council and a board of commissioners set its rates, not the state commission.',
      stats: [['20.7 TWh', 'electricity sold in 2025'], ['1.5 million', 'customers in 2025'], ['5,239 MW', 'highest demand in 2025'], ['19.1 TWh', 'electricity it generated itself in 2025, in and outside California']],
      body: '<p>It runs its own grid and owns long lines to Oregon, Utah and Nevada.</p>', sources: [S.e861, HIFLD] },
    'Sacramento Municipal Utility District': { lede: 'A customer-owned utility for Sacramento County, run by an elected board.',
      stats: [['10.5 TWh', 'electricity sold in 2025'], ['675,000', 'customers in 2025'], ['2,797 MW', 'highest demand in 2025'], ['900 square miles', 'size of its service area']],
      sources: [S.e861, S.smud, HIFLD] },
    'Imperial Irrigation District': { lede: 'An irrigation district that also runs the electric utility for the Imperial Valley and part of the Coachella Valley. It balances its own grid.',
      stats: [['3.4 TWh', 'electricity sold in 2025'], ['166,000', 'customers in 2025'], ['1,133 MW', 'highest demand in 2025'], ['2028', 'year it has committed to join the markets run by the state\'s main grid operator']],
      sources: [S.e861, S.edam, HIFLD] },
    'PacifiCorp (Pacific Power)': small('An investor-owned utility based in Oregon that serves California\'s far north. It owned the Klamath River dams that were removed in 2023 and 2024.', '0.73', '45,889'),
    'Liberty Utilities': small('An investor-owned utility for the California side of Lake Tahoe.', '0.53', '50,162'),
    'Bear Valley Electric Service': small('A small investor-owned utility for Big Bear Lake in the San Bernardino Mountains.', '0.14', '24,891'),
    'Modesto Irrigation District': small('An irrigation district that has sold electricity since 1923.', '2.59', '134,563'),
    'Turlock Irrigation District': small('An irrigation district that runs its own electric utility and balances its own grid.', '2.19', '96,642'),
    'Merced Irrigation District': small('An irrigation district that sells power in and around Merced.', '0.50', '13,671'),
    'Silicon Valley Power (City of Santa Clara)': { lede: 'The City of Santa Clara\'s electric utility. Data centers make it the third-largest public utility in California by sales.',
      stats: [['5.0 TWh', 'electricity sold in 2025'], ['4.6 TWh', 'of that to industrial customers'], ['62,436', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Riverside Public Utilities': small('The City of Riverside\'s electric utility.', '2.10', '114,117'),
    'Anaheim Public Utilities': small('The City of Anaheim\'s electric utility.', '2.12', '124,953'),
    'Roseville Electric': small('The City of Roseville\'s electric utility.', '1.19', '71,571'),
    'Pasadena Water and Power': small('The City of Pasadena\'s electric utility.', '1.02', '67,101'),
    'Glendale Water and Power': small('The City of Glendale\'s electric utility.', '0.97', '91,550'),
    'Burbank Water and Power': small('The City of Burbank\'s electric utility.', '0.96', '53,689'),
    'San Francisco Public Utilities Commission': small('The city agency that powers San Francisco\'s own buildings, transit and airport, mostly with hydropower from its Hetch Hetchy system in the Sierra Nevada.', '0.96', '3,995'),
    'City of Palo Alto Utilities': small('The City of Palo Alto\'s electric utility.', '0.92', '29,265'),
    'Redding Electric Utility': small('The City of Redding\'s electric utility.', '0.75', '45,610'),
    'Lodi Electric Utility': small('The City of Lodi\'s electric utility.', '0.44', '26,343'),
    'Colton Electric Utility': small('The City of Colton\'s electric utility.', '0.36', '19,723'),
    'Azusa Light and Water': small('The City of Azusa\'s electric utility.', '0.24', '17,635'),
    'Moreno Valley Utility': small('The City of Moreno Valley\'s electric utility, which serves newer parts of the city.', '0.22', '9,651'),
    'City of Shasta Lake': small('The electric utility of the City of Shasta Lake, near Shasta Dam.', '0.20', '4,606'),
    'Surprise Valley Electrification': small('A member-owned co-op in the north-east corner of the state.', '0.09', '4,712'),
  };

  // ----------------------------------------------------------------- pipeline cards
  const PIPECARDS = {
    'California Gas Transmission Co': { lede: 'The gas transmission system of Pacific Gas and Electric. Its backbone runs from the Oregon line at Malin down the Central Valley to the Bay Area, and a second arm comes in from the Arizona line.',
      stats: [['Intrastate', 'type of pipeline'], ['686 Bcf', 'gas that entered California from Oregon in 2024. Bcf means billion cubic feet', 1]], sources: [S.gasMove, S.pipes] },
    'Southern California Gas Co': { lede: 'The gas system for Southern California. It takes gas from the interstate pipelines at the Colorado River and in the Mojave Desert, and stores some of it underground at Aliso Canyon and three other fields.',
      stats: [['Intrastate', 'type of pipeline'], ['68.6 Bcf', 'gas its Aliso Canyon field is allowed to hold', 1]], sources: [S.aliso, S.pipes] },
    'San Diego Gas & Elec Co': { lede: 'Gas lines of San Diego Gas & Electric, fed from the Southern California Gas system to the north.', sources: [S.pipes] },
    'El Paso Natural Gas Co': { lede: 'An interstate system that brings gas from the Permian Basin of west Texas and the San Juan Basin of New Mexico across Arizona to the California line.',
      stats: [['Interstate', 'type of pipeline'], ['898 Bcf', 'gas that entered California from Arizona in 2024 on this and two other systems', 1]], sources: [S.gasMove, S.pipes] },
    'Transwestern Gas Co': { lede: 'An interstate pipeline across northern Arizona that meets California\'s gas systems at the Colorado River near Needles.',
      stats: [['Interstate', 'type of pipeline'], ['898 Bcf', 'gas that entered California from Arizona in 2024 on this and two other systems', 1]], sources: [S.gasMove, S.pipes] },
    'Mojave Pipeline Co': { lede: 'An interstate pipeline from the Arizona line across the Mojave Desert to Kern County, where it shares a route with the Kern River line.', sources: [S.pipes] },
    'Kern River Gas Trans Co': { lede: 'An interstate pipeline from the gas fields of Wyoming and Utah, through Las Vegas, to Kern County and Southern California.',
      stats: [['Interstate', 'type of pipeline'], ['459 Bcf', 'gas that entered California from Nevada in 2024', 1]], sources: [S.gasMove, S.pipes] },
    'Gas Transmission - Northwest': { lede: 'An interstate pipeline that brings gas from Alberta, Canada, through Idaho, Washington and Oregon to the California line at Malin.',
      stats: [['Interstate', 'type of pipeline'], ['686 Bcf', 'gas that entered California from Oregon in 2024 on this line and the Ruby pipeline', 1]], sources: [S.gasMove, S.pipes] },
    'Ruby Pipeline LLC': { lede: 'An interstate pipeline from Wyoming across Utah and northern Nevada. It ends at Malin, Oregon, just over the California line.', sources: [S.gasMove, S.pipes] },
    'Tuscarora Pipeline Co': { lede: 'An interstate pipeline from Malin, Oregon, across the north-east corner of California to Reno, Nevada.', sources: [S.pipes] },
    'Paiute Pipeline Co': { lede: 'A pipeline that serves northern Nevada and the Lake Tahoe area.', sources: [S.pipes] },
    'Southwest Gas Corp': { lede: 'Lines of Southwest Gas, a utility that sells gas to homes and businesses in parts of the California desert, Lake Tahoe and Nevada.', sources: [S.pipes] },
    'North Baja Pipeline Co': { lede: 'An interstate pipeline that runs south along the Colorado River to the Mexican border. California sent 156 billion cubic feet of gas on to Mexico in 2024.', sources: [S.gasMove, S.pipes] },
    'Questar Southern Trails Line': { lede: 'An interstate pipeline drawn in federal map data from northern Arizona to the California desert.', sources: [S.pipes] },
    'Northwest Pipeline': { lede: 'An interstate pipeline in Oregon and Idaho. On this map it does not enter California.', sources: [S.pipes] },
  };
  const LINECARDS = [];   // LINECARDS_PLACEHOLDER

  // ----------------------------------------------------------------- tour
  const LAY = ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'];
  const TOUR = [
    { title: 'A quarter comes from somewhere else', text: 'California\'s grid was supplied with 268 terawatt-hours in 2025. Plants in the state made 77% of it and 23% was imported. Natural gas and solar farms are the two largest sources. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: LAY },
    { title: 'The desert fills with solar', text: 'Solar farms made 55.5 terawatt-hours in California in 2025, up 7 in a year, and rooftops made about 34 more. The largest farms are here in the Mojave Desert, with the Tehachapi wind farms just to the north.', box: [-119.3, 34.3, -116.9, 35.6], zoom: 1.3, select: 'solarstar', layers: ['plants', 'lines'] },
    { title: 'Too much at noon', text: 'On spring days the sun makes more power than the grid can use or send away. In April 2026 the grid operator turned away 1.46 million megawatt-hours of solar and wind. These farms along Interstate 10 are among those that get switched down.', box: [-116.4, 33.2, -114.3, 34.3], zoom: 1.4, select: 'desertsunlight', layers: ['plants', 'lines'] },
    { title: 'Batteries carry the evening', text: 'This is the Night view: solar farms are faded. California had 16,489 megawatts of large batteries in September 2026, more than seven times the capacity of its nuclear plant. At Moss Landing, shown here, a building holding 300 megawatts of batteries burned in January 2025.', box: [-122.6, 36.3, -121.0, 37.3], zoom: 1.7, season: 'winter', select: 'mosslanding', layers: ['plants', 'lines'] },
    { title: 'Gas, through three doors', text: 'Gas plants still make more electricity than anything else. Nearly 90% of the gas comes from other states. The brown lines are pipelines: this door, from Arizona, let in 44% of it in 2024. The others are in Oregon and Nevada.', box: [-116.6, 34.0, -114.0, 35.5], zoom: 1.3, select: 'gasaz', layers: ['plants', 'pipes', 'rivers'] },
    { title: 'One nuclear plant left', text: 'Diablo Canyon made 8.5% of California\'s electricity in 2025. It was due to close by 2025. State law now keeps it open through 2030, and in April 2026 federal regulators renewed its licenses for 20 years. San Onofre, down the coast, closed in 2013.', box: [-121.6, 34.8, -119.9, 35.9], zoom: 1.6, select: 'diablo', layers: ['plants', 'closed', 'lines'] },
    { title: 'Steam from the ground', text: 'Geothermal plants made 5% of California\'s electricity in 2025 and run day and night. The Geysers, here, is a field of natural steam with 13 plants owned by one company and a few owned by others. The other big field is at the Salton Sea, where the hot brine also holds lithium.', box: [-123.5, 38.3, -121.9, 39.3], zoom: 1.7, select: 'geysers', layers: ['plants', 'lines', 'rivers'] },
    { title: 'Water makes power, and uses it', text: 'Dams made 13% of California\'s electricity in 2025, and far less in dry years. Shasta, here, made the most. At the other end of the state the same water is pumped over a mountain range, and the State Water Project used 3.2 terawatt-hours doing it.', box: [-123.2, 40.2, -121.6, 41.3], zoom: 1.7, select: 'shasta', layers: ['plants', 'rivers', 'lines'] },
    { title: 'The long wires', text: 'Yellow lines carry 500 kilovolts. Three of them run down the Central Valley and tie north to south. Others reach Oregon, Utah and Arizona, and bring in the imported quarter. Lines also start fires: the Camp Fire of 2018, started by a transmission line, killed 85 people.', box: [-122.5, 35.9, -119.5, 38.2], zoom: 1.1, select: 'path15', layers: ['plants', 'lines', 'cities'] },
    { title: 'What comes out, and what comes next', text: 'Each gray circle is a plant\'s carbon dioxide for 2023. California\'s power plants released 39.6 million metric tons in 2024, down from 55.4 million in 2010. State law says all retail electricity must come from renewable and carbon-free sources by 2045. Now explore: click any plant, line, pipeline or patch of open country.', view: 'home', select: 'delta', layers: ['plants', 'emit', 'closed', 'cities'] },
  ];

  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    riverLede: 'A river. Dams on California\'s rivers make hydropower, and the state\'s water projects use large amounts of electricity to pump water between basins.' });
})();
