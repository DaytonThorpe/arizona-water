/* Idaho Power: content for the electricity map.
   The shared machinery is in power/content/kit.js. Plant numbers (capacity, output, emissions) are not typed here:
   they come from the baked dataset in power/data/id.js (EIA-860M inventory and EPA eGRID).
   Fact sheet and verification log: research/idaho_power.md */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'IDAHO POWER CO': ['Idaho Power', 'Idaho Power', 'iou'],
    'PACIFICORP': ['Rocky Mountain Power', 'Rocky Mtn Power', 'iou'],
    'AVISTA CORP': ['Avista', 'Avista', 'iou'],
    'CLEARWATER POWER COMPANY': ['Clearwater Power', 'Clearwater', 'coop'],
    'NORTHERN LIGHTS, INC': ['Northern Lights', 'Northern Lights', 'coop'],
    'LOST RIVER ELECTRIC COOP INC': ['Lost River Electric Cooperative', 'Lost River', 'coop'],
    'SALMON RIVER ELECTRIC COOP INC': ['Salmon River Electric Cooperative', 'Salmon River', 'coop'],
    'FALL RIVER RURAL ELEC COOP INC': ['Fall River Rural Electric Cooperative', 'Fall River', 'coop'],
    'RAFT RURAL ELEC COOP INC': ['Raft River Rural Electric Cooperative', 'Raft River', 'coop'],
    'IDAHO COUNTY L&P COOP ASSN, INC': ['Idaho County Light and Power', 'Idaho County', 'coop'],
    'LOWER VALLEY ENERGY INC': ['Lower Valley Energy', 'Lower Valley', 'coop'],
    'KOOTENAI ELECTRIC COOPERATIVE': ['Kootenai Electric Cooperative', 'Kootenai', 'coop'],
    'UNITED ELECTRIC CO-OP, INC - (ID)': ['United Electric Co-op', 'United', 'coop'],
    'CITY OF IDAHO FALLS - (ID)': ['Idaho Falls Power', 'Idaho Falls', 'public'],
  };
  // Left out: the Bonneville Power Administration (a federal wholesaler drawn as a blob), the City of Minidoka (drawn far larger than the town),
  // and co-ops based in Montana and Oregon that only touch the edge of the map.
  const K = window.POWERKIT.begin({ id: 'id', st: 'ID', name: 'Idaho', util: UTIL, bigUtils: ['Idaho Power', 'Rocky Mtn Power', 'Avista'],
    lineLede: { '500': 'The backbone of the grid. A 500-kilovolt line can carry the output of a large power plant across the state. Idaho uses lines like this to bring in power from its neighbors.',
      '345': 'A long-distance line. Lines at 345 kilovolts cross the Snake River Plain and link Idaho to plants in Wyoming, Utah and Nevada.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. Idaho\'s gas-fired power plants are built on or near lines like this one.' });
  const { SRC_INV } = K;

  // ------------------------------------------------------------------ sources
  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility sales data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA Idaho Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/idaho/'],
    inv: SRC_INV,
    tenk: ['Idaho Power annual report for 2025', 'https://www.sec.gov/Archives/edgar/data/1057877/000105787726000028/ida-20251231.htm'],
    tenq: ['Idaho Power quarterly report, 29 Oct 2026', 'https://www.sec.gov/Archives/edgar/data/1057877/000105787726000137/ida-20260930.htm'],
    ava: ['Avista annual report for 2025', 'https://www.sec.gov/Archives/edgar/data/104918/000119312526067872/ava-20251231.htm'],
    ipHydro: ['Idaho Power: hydroelectric', 'https://www.idahopower.com/energy-environment/energy/energy-sources/hydroelectric/'],
    ipHcc: ['Idaho Power: relicensing the Hells Canyon Complex', 'https://idahopower.com/energy-environment/energy/energy-sources/hydroelectric/relicensing/relicensing-hcc/'],
    fr: ['Federal Register, 10 Sep 2026', 'https://www.federalregister.gov/documents/2026/09/10/2026-18456/idaho-power-company-notice-of-availability-of-the-final-supplemental-environmental-impact-statement'],
    nwc: ['Northwest Power and Conservation Council: Hells Canyon', 'https://www.nwcouncil.org/reports/columbia-river-history/hellscanyon/'],
    ipCoal: ['Idaho Power: our path away from coal', 'https://www.idahopower.com/energy-environment/energy/energy-sources/thermal/emissions-data/'],
    ipClean: ['Idaho Power: clean today, cleaner tomorrow', 'https://www.idahopower.com/energy-environment/energy/clean-today-cleaner-tomorrow/'],
    ipGww: ['Idaho Power: Gateway West', 'https://idahopower.com/energy-environment/energy/planning-and-electrical-projects/current-projects/gateway-west/'],
    ipB2h: ['Idaho Power: Boardman to Hemingway', 'https://www.idahopower.com/energy-environment/energy/planning-and-electrical-projects/current-projects/boardman-to-hemingway/'],
    ipFire: ['Idaho Power: wildfire safety questions', 'https://idahopower.com/outages-safety/wildfire-safety/wildfire-safety-frequently-asked-questions/'],
    ipPeak: ['Idaho Power: Irrigation Peak Rewards', 'https://www.idahopower.com/energy-environment/ways-to-save/savings-for-your-business/irrigation-programs/irrigation-peak-rewards/'],
    kivi: ['KIVI, July 2024', 'https://www.kivitv.com/downtown-boise/safety-has-to-come-first-idaho-power-reflects-on-first-ever-public-safety-power-shutoff-event'],
    rate: ['Idaho Public Utilities Commission, 30 Dec 2025', 'https://puc.idaho.gov/Fileroom/PublicFiles/Press/20251231Idaho%20Power%201230%20Release.pdf.pdf'],
    irp: ['Idaho Public Utilities Commission order 36937, 17 Feb 2026', 'https://puc.idaho.gov/Fileroom/PublicFiles/ELEC/IPC/IPCE2523/OrdNotc/20260217Final_Order_No_36937.pdf'],
    micron: ['Idaho Public Utilities Commission order 37092, 8 Jul 2026', 'https://puc.idaho.gov/Fileroom/PublicFiles/ELEC/IPC/IPCE2444/OrdNotc/20260708Final_Order_No_37092.pdf'],
    micron2: ['Idaho Public Utilities Commission order 37039, 8 May 2026', 'https://puc.idaho.gov/Fileroom/PublicFiles/ELEC/IPC/IPCE2444/OrdNotc/20260508Final_Order_No_37039.pdf'],
    meta: ['Coeur d\'Alene Press, 4 Sep 2026', 'https://cdapress.com/news/2026/sep/04/meta-turns-on-its-12b-idaho-data-center-with-promise-of-water-efficiency/'],
    bayer: ['Bayer filing with the Idaho Public Utilities Commission, 9 May 2023', 'https://puc.idaho.gov/Fileroom/PublicFiles/ELEC/PAC/PACE2309/Intervenor/Bayer/20230509Comments.pdf'],
    lava1: ['Boise State Public Radio, 6 Dec 2024', 'https://www.boisestatepublicradio.org/environment/2024-12-06/blm-approves-lava-ridge-wind-energy-project'],
    lava2: ['Idaho Capital Sun via The Spokesman-Review, 6 Aug 2025', 'https://www.spokesman.com/stories/2025/aug/06/us-secretary-of-interior-announces-end-to-lava-rid'],
    doeAalo: ['US Department of Energy, 6 Jul 2026', 'https://www.energy.gov/articles/department-energy-celebrates-fourth-criticality-ahead-july-4th-goal'],
    ebr: ['US Department of Energy: EBR-I', 'https://www.energy.gov/ne/articles/9-notable-facts-about-worlds-first-nuclear-power-plant-ebr-i'],
    icp: ['US Department of Energy: Idaho Cleanup Project', 'https://www.energy.gov/em/idaho-cleanup-project'],
    settle: ['US Department of Energy: Idaho\'s settlement agreement', 'https://www.energy.gov/em/icpcab/articles/explaining-idahos-unique-settlement-agreement'],
    bpa: ['Bonneville Power Administration: BPA Facts', 'https://www.bpa.gov/-/media/Aep/about/publications/general-documents/bpa-facts.pdf'],
    ifp: ['Idaho Falls Power', 'https://www.ifpower.org/about-us'],
    usbrAmf: ['Bureau of Reclamation: American Falls Dam', 'https://www.usbr.gov/projects/index.php?id=24'],
    idwrSwan: ['Idaho Department of Water Resources, 9 Jul 2026', 'https://idwr.idaho.gov/wp-content/uploads/2026/07/News-Release-20260709-Gov-Little-recommends-proactive-steps-to-avoid-curtailment-for-Swan-Falls-trust-water-users.pdf'],
    nez: ['Idaho Water Resource Board: Nez Perce agreement summary', 'https://idwr.idaho.gov/wp-content/uploads/sites/2/iwrb/2004/20040515-Nez-Perce-Agreement-Summary.pdf'],
    crs: ['Congressional Research Service report R49059, 2026', 'https://www.everycrsreport.com/reports/R49059.html'],
    wDwor: ['Wikipedia: Dworshak Dam (citing the Army Corps of Engineers)', 'https://en.wikipedia.org/wiki/Dworshak_Dam'],
    wAlb: ['Wikipedia: Albeni Falls Dam (citing the Army Corps of Engineers)', 'https://en.wikipedia.org/wiki/Albeni_Falls_Dam'],
    wSwan: ['Wikipedia: Swan Falls Dam (citing Idaho Power)', 'https://en.wikipedia.org/wiki/Swan_Falls_Dam'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
    HIFLD: K.HIFLD,
  };
  const TWH = 1e6;

  // ------------------------------------------------------------------ the two charts (both 2024, so that supply equals use)
  const BUDGET = {
    title: 'Idaho used 28 terawatt-hours of electricity in 2024 and generated 20',
    lede: 'The other 8 came from neighboring states. Dams made the most of what Idaho generated itself, then natural gas plants, then wind farms.',
    tabs: ['Where it comes from (2024)', 'Where it goes (2024)'],
    perDrop: TWH, shape: 'bolt', unitLine: 'Each bolt = 1 terawatt-hour (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. Both charts are for 2024, the latest year for which the federal government has published how much power Idaho brought in. Percentages are shares of the 28.4 TWh that Idaho used or lost on its wires that year.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'hydro', label: 'Dams in Idaho', pct: 32.2, af: 9.15 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'brownlee', note: 'Hydropower from dozens of plants, large and small. The amount follows the snowpack: 11.0 TWh in 2018, 8.0 TWh in 2021 and 8.9 TWh in 2025.' },
      { id: 'import', label: 'Brought in from other states', pct: 29.4, af: 8.35 * TWH, color: '#eb6834', layer: 'lines', feat: 'hemingway', note: 'Net imports: what came in minus what went out. The federal government calculates this figure and does not meter it. It includes power from coal and gas plants in Wyoming and Nevada that Idaho Power part-owns, and from two Idaho Power dams counted in Oregon. In 2009 it was 12.0 TWh.' },
      { id: 'gas', label: 'Natural gas plants in Idaho', pct: 22.1, af: 6.29 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'langley', note: 'Five large plants, three in the south-west and two at Rathdrum in the north. Gas made 1.7 TWh in 2010 and 6.4 TWh in 2025.' },
      { id: 'wind', label: 'Wind farms in Idaho', pct: 10.6, af: 3.02 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'cedarcreek', note: 'Wind farms along the Snake River Plain. They made 2.8 TWh in 2025.' },
      { id: 'solar', label: 'Solar farms in Idaho', pct: 3.6, af: 1.02 * TWH, color: '#f2c230', layer: 'plants', feat: 'pleasantvalley', note: 'Solar farms made 1.6 TWh in 2025 as new ones opened. Rooftop panels are not counted here: the federal estimate for them was another 0.3 TWh in 2024.' },
      { id: 'bio', label: 'Wood waste and other biomass', pct: 1.4, af: 0.41 * TWH, color: '#8a5a3a', layer: 'plants', feat: 'clearwater', note: 'Mostly a pulp and paper mill in Lewiston that burns its own by-products, plus landfill gas and dairy digesters.' },
      { id: 'other', tiny: true, label: 'Geothermal and waste heat', af: 0.16 * TWH, color: '#b0563c', val: '0.6% &middot; 0.2 TWh', layer: 'plants', feat: 'raftriver', note: 'One geothermal plant at Raft River (0.09 TWh) and a generator that runs on waste heat at a fertilizer plant in Pocatello (0.07 TWh).' },
    ],
    uses: [
      { id: 'homes', label: 'Homes', pct: 34.6, af: 9.83 * TWH, color: '#c8442e', layer: 'cities', feat: 'boise', note: 'Sold to 868,000 households in 2024. Homes paid 11.52 cents per kilowatt-hour on average.' },
      { id: 'ind', label: 'Industry', pct: 33.7, af: 9.57 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'bayer', note: 'Factories, food processors, chip makers and phosphate plants. Federal data has no separate row for irrigation pumping. It is counted here or under businesses.' },
      { id: 'biz', label: 'Businesses', pct: 24.5, af: 6.96 * TWH, color: '#3f8f46', layer: 'cities', feat: 'meta', note: 'Shops, offices, schools, data centers and other commercial customers.' },
      { id: 'loss', label: 'Lost on the wires', pct: 4.3, af: 1.23 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'misc', label: 'Used at plants or not accounted for', pct: 2.7, af: 0.78 * TWH, color: '#5c5a66', feat: 'clearwater', note: 'Power that plant owners such as mills used on site without selling it (0.57 TWh), plus 0.21 TWh the federal balance could not assign.' },
    ],
    body: '<p class="gcap">2024: 20.04 TWh generated in Idaho plus 8.35 TWh of net imports equals 28.38 TWh. Idaho sent no net power to other states in any year from 2009 to 2024. In 2025 Idaho plants generated 20.29 TWh; the import figure for 2025 is not published yet. Sources: <a href="https://www.eia.gov/electricity/state/idaho/" target="_blank" rel="noopener">EIA Idaho Electricity Profile, 2024 (tables 5, 8 and 10)</a> &middot; <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a></p>',
  };
  const HUD = [['20.3 TWh', 'electricity generated in 2025'], ['29%', 'of 2024 supply came from other states'], ['3,793 MW', 'Idaho Power record, 22 Jul 2024']];
  const ABOUT = K.aboutStd('Where a card gives 2025 output or fuel deliveries, the figure is our sum of federal plant reports (EIA-923). Oxbow and Hells Canyon dams are on the Idaho-Oregon line and federal files count them in Oregon. The Jim Bridger plant in Wyoming and the North Valmy plant in Nevada, which Idaho Power part-owns, are outside the map; two markers at the map\'s edge stand for them. The Bonneville Power Administration is not drawn as a utility area because it sells wholesale to other utilities. Only some high-voltage lines carry a name in the source.');

  const FEATURES = [], BROWSE = [], TOUR = [], AREAS = {}, PIPECARDS = {}, LINECARDS = [];
  const add = o => FEATURES.push(o);

  // ----------------------------------------------------------------- dams
  add({ id: 'brownlee', kind: 'hydro', plant: 811, name: 'Hells Canyon Complex: Brownlee Dam', short: 'Hells Canyon Complex', tier: 1,
    lede: 'Three Idaho Power dams in the deepest stretch of the Snake River: Brownlee, Oxbow and Hells Canyon. Together they are the largest source of electricity the company owns. Their federal license ran out in 2005.',
    stats: [['5.27 TWh', 'electricity generated by the three dams in 2025'], ['About 30%', 'of all the electricity Idaho Power generates in a normal water year'], ['July 2005', 'when the license expired. The dams have run on one-year licenses since'], ['2027 or later', 'when the company expects a new long-term license']],
    body: '<p>Idaho Power applied for a new license in 2003. Idaho and Oregon issued the water-quality certificates it needs in May 2019. Federal regulators published their final environmental study in September 2026. Since October 2025 customers have paid $38.5 million a year toward the cost of financing the relicensing work.</p><p>None of the three dams has fish passage, so salmon and steelhead cannot reach the river above them. In 1958, the year Brownlee was finished, about 17,000 fall Chinook were counted here.</p><p class="gcap">The table below is for Brownlee only. Oxbow and Hells Canyon have their powerhouses on the Oregon bank, so federal files count their 3.0 TWh in Oregon and not in Idaho\'s total.</p>',
    sources: [S.e923, S.ipHydro, S.ipHcc, S.tenk, S.tenq, S.fr, S.nwc] });
  add({ id: 'hellscanyon', kind: 'hydro', plant: 3013, name: 'Hells Canyon Dam', short: 'Hells Canyon Dam', tier: 3,
    lede: 'The lowest of Idaho Power\'s three dams in Hells Canyon, finished in 1967.',
    stats: [['2.03 TWh', 'electricity generated in 2025'], ['1967', 'year it was completed, the last of the three']],
    body: '<p>In the 1960s other builders proposed a much taller dam farther down the canyon. After a Supreme Court case and years of dispute, Congress protected that reach in 1975 as part of the Hells Canyon National Recreation Area.</p><p class="gcap">Federal files list this plant in Oregon.</p>',
    sources: [S.e923, S.nwc] });
  add({ id: 'oxbow', kind: 'hydro', plant: 3014, name: 'Oxbow Dam', short: 'Oxbow Dam', tier: 3,
    lede: 'The middle dam of the Hells Canyon Complex, 12 miles below Brownlee. It was completed in 1961.',
    stats: [['0.99 TWh', 'electricity generated in 2025']],
    body: '<p class="gcap">Federal files list this plant in Oregon.</p>', sources: [S.e923, S.nwc] });
  add({ id: 'dworshak', kind: 'hydro', plant: 840, name: 'Dworshak Dam', short: 'Dworshak Dam', tier: 1,
    lede: 'A 717-foot federal dam on the North Fork of the Clearwater River, run by the Army Corps of Engineers. The Bonneville Power Administration sells its power.',
    stats: [['1.52 TWh', 'electricity generated in 2025'], ['717 ft', 'height of the dam'], ['200,000 AF', 'water in the reservoir set aside for fish flows. An acre-foot (AF) is 325,851 gallons']],
    body: '<p>The set-aside for fish comes from a 2004 agreement among the Nez Perce Tribe, Idaho and the federal government.</p><p>The Bonneville Power Administration sells the output of 31 federal dams in the Northwest at wholesale. It does not serve homes directly.</p>',
    sources: [S.e923, S.wDwor, S.nez, S.bpa] });
  add({ id: 'cabinetgorge', kind: 'hydro', plant: 833, name: 'Cabinet Gorge Dam', short: 'Cabinet Gorge', tier: 1,
    lede: 'Avista\'s dam on the Clark Fork River, just inside Idaho. It works as a pair with Noxon Rapids Dam, upstream in Montana.',
    stats: [['0.89 TWh', 'electricity generated in 2025'], ['2046', 'year the federal license for the two dams expires']],
    body: '<p>Avista is based in Spokane, Washington. It also owns six smaller dams on the Spokane River.</p>',
    sources: [S.e923, S.ava] });
  add({ id: 'noxon', kind: 'hydro', plant: 2199, name: 'Noxon Rapids Dam', short: 'Noxon Rapids', tier: 3,
    lede: 'Avista\'s largest dam, on the Clark Fork River in Montana. It shares a federal license with Cabinet Gorge.',
    stats: [['1.36 TWh', 'electricity generated in 2025']], sources: [S.e923, S.ava] });
  add({ id: 'albeni', kind: 'hydro', plant: 851, name: 'Albeni Falls Dam', short: 'Albeni Falls', tier: 3,
    lede: 'A federal dam on the Pend Oreille River at the Washington line. It raises the level of Lake Pend Oreille.',
    stats: [['0.18 TWh', 'electricity generated in 2025'], ['1955', 'year it opened']],
    body: '<p>The Army Corps of Engineers runs the dam and the Bonneville Power Administration sells its power.</p>',
    sources: [S.e923, S.wAlb, S.bpa] });
  add({ id: 'palisades', kind: 'hydro', plant: 850, name: 'Palisades Dam', short: 'Palisades', tier: 1,
    lede: 'A federal dam on the upper Snake River at the Wyoming line. It was built to store irrigation water and control floods, and it generates as water is released.',
    stats: [['0.66 TWh', 'electricity generated in 2025'], ['0.74 TWh', 'generated in 2024'], ['8.0%', 'how full the reservoir was on 15 October 2026, after a dry year']],
    body: '<p>The Bureau of Reclamation built the dam between 1951 and 1957. 2026 was a very dry year on the upper Snake. The reservoir reading is this year\'s, not a typical one.</p>',
    sources: [S.e923, S.prof, ['Bureau of Reclamation: upper Snake reservoir levels', 'https://www.usbr.gov/pn/hydromet/burtea.html']] });
  add({ id: 'americanfalls', kind: 'hydro', plant: 809, name: 'American Falls Dam', short: 'American Falls', tier: 2,
    lede: 'The largest reservoir on the Snake River in Idaho. The Bureau of Reclamation owns the dam and Idaho Power owns the power plant at its foot.',
    stats: [['0.21 TWh', 'electricity generated in 2025'], ['February 2025', 'when the power plant\'s federal license expired. It runs on one-year licenses'], ['2027', 'year Idaho Power expects a new license'], ['3.3%', 'how full the reservoir was on 13 September 2026']],
    body: '<p>The first dam was finished in 1927 and replaced in 1978. The reservoir is filled for irrigation and drawn down each summer, so the plant\'s output depends on the farm water schedule. 2026 was a very dry year on the upper Snake. These are this year\'s readings, not typical ones.</p>',
    sources: [S.e923, S.tenq, S.usbrAmf, ['Bureau of Reclamation: upper Snake reservoir levels', 'https://www.usbr.gov/pn/hydromet/burtea.html']] });
  add({ id: 'midsnake', kind: 'hydro', plant: 810, name: 'Mid-Snake dams: Bliss, Salmon Falls and Malad', short: 'Mid-Snake dams', tier: 2,
    lede: 'A chain of small Idaho Power plants where the Snake River drops through its canyon near Hagerman. Springs from the aquifer under the plain keep the river flowing here in dry months.',
    stats: [['0.84 TWh', 'electricity generated in 2025 by Bliss, Lower Salmon, Upper Salmon and the two Malad plants'], ['17', 'hydropower projects Idaho Power runs on the Snake and its tributaries'], ['7.0 TWh', 'what those 17 projects generated in 2025. The 20-year average is 7.3 TWh']],
    body: '<p>In the first nine months of 2026 Idaho Power\'s dams generated 4.5 TWh, against 5.8 TWh in the same months of 2025. The company lists snowpack, reservoir storage, irrigation withdrawals and the state of the aquifer among the things that set its hydropower each year.</p><p class="gcap">The table below is for Bliss only.</p>',
    sources: [S.e923, S.tenk, S.tenq] });
  add({ id: 'cjstrike', kind: 'hydro', plant: 812, name: 'C.J. Strike Dam', short: 'C.J. Strike', tier: 3,
    lede: 'An Idaho Power dam on the Snake River south of Mountain Home.',
    stats: [['0.36 TWh', 'electricity generated in 2025'], ['2034', 'year its federal license expires']], sources: [S.e923, S.tenk] });
  add({ id: 'swanfalls', kind: 'hydro', plant: 819, name: 'Swan Falls Dam', short: 'Swan Falls', tier: 3,
    lede: 'Built in 1901, the oldest hydroelectric dam on the Snake River. A 1984 agreement named for it sets the least flow that must be left in the river here for power.',
    stats: [['0.11 TWh', 'electricity generated in 2025'], ['3,900 cfs', 'minimum summer flow under the 1984 agreement, in cubic feet per second'], ['4,610 cfs', 'flow on 9 July 2026']],
    body: '<p>The agreement settled a dispute between Idaho Power and the state over how much water upstream farms could take. In June 2026 the state warned more than 4,000 water users that they could be cut off if the flow fell to the minimum.</p>',
    sources: [S.e923, S.wSwan, S.idwrSwan] });
  add({ id: 'luckypeak', kind: 'hydro', plant: 10014, name: 'Lucky Peak power plant', short: 'Lucky Peak', tier: 3,
    lede: 'A power plant added in 1988 to a federal flood-control dam on the Boise River, just above the city.',
    stats: [['0.31 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'lowergranite', kind: 'hydro', plant: 6175, name: 'Lower Granite Dam', short: 'Lower Granite', tier: 3,
    lede: 'The uppermost of four federal dams on the lower Snake River, in Washington. Its reservoir reaches Lewiston, Idaho, and makes the city a port for barges.',
    stats: [['1.46 TWh', 'electricity generated in 2025'], ['3,000+ MW', 'capacity of the four lower Snake dams together'], ['12 June 2025', 'date the federal government withdrew from an agreement on the future of the dams']],
    body: '<p>Whether to breach the four dams to help salmon has been argued for decades. Only Congress can authorize breaching. A federal court issued a preliminary order about the dams\' operation on 2 March 2026, and it has been appealed.</p>',
    sources: [S.e923, S.crs] });

  // ----------------------------------------------------------------- natural gas
  add({ id: 'langley', kind: 'gas', plant: 57028, name: 'Langley Gulch Power Plant', short: 'Langley Gulch', tier: 1,
    lede: 'Idaho Power\'s largest gas plant, near New Plymouth. It generated more electricity in 2025 than any plant in Idaho except Brownlee Dam.',
    stats: [['1.76 TWh', 'electricity generated in 2025'], ['12.4 Bcf', 'natural gas delivered in 2025, all bought on the spot market. Bcf means billion cubic feet'], ['All year', 'how the company runs it: as a steady plant, not only at peaks']],
    body: '<p>The plant burns gas in a turbine and then uses the hot exhaust to make steam for a second turbine. That design, called combined cycle, gets more electricity from the same gas.</p>',
    sources: [S.e923, S.e923f, S.tenk] });
  add({ id: 'bennett', kind: 'gas', plant: 55733, name: 'Bennett Mountain Power Plant', short: 'Bennett Mountain', tier: 2,
    lede: 'An Idaho Power gas turbine at Mountain Home, built for peak hours. A second plant is being built beside it, and the company has asked to build two more elsewhere.',
    stats: [['1.00 TWh', 'electricity generated in 2025'], ['167 MW', 'capacity being added next door. Construction began in May 2026, for service in 2028'], ['222 and 430 MW', 'two further gas plants Idaho Power asked regulators to approve in March 2026, for 2029 and 2030']],
    body: '<p>State regulators had not ruled on the two further plants by late October 2026. Idaho Power\'s 2025 long-range plan forecasts that its sales will grow 8.3% a year for five years.</p>',
    sources: [S.e923, S.tenq, S.tenk] });
  add({ id: 'danskin', kind: 'gas', plant: 7953, name: 'Evander Andrews (Danskin) Power Complex', short: 'Danskin', tier: 3,
    lede: 'Three Idaho Power gas turbines north-west of Mountain Home, used to meet peaks. The company also calls the site Danskin.',
    stats: [['0.93 TWh', 'electricity generated in 2025'], ['9.6 Bcf', 'natural gas delivered in 2025, all bought on the spot market']],
    sources: [S.e923, S.e923f, S.tenk] });
  add({ id: 'lancaster', kind: 'gas', plant: 55179, name: 'Rathdrum Power (Lancaster)', short: 'Rathdrum Power', tier: 2,
    lede: 'A combined-cycle gas plant on the Rathdrum Prairie in north Idaho. An independent company owns it and Avista buys its output under contract.',
    stats: [['1.72 TWh', 'electricity generated in 2025'], ['11.5 Bcf', 'natural gas delivered in 2025. The seller listed is Avista']],
    body: '<p>Avista calls the plant Lancaster. A separate Avista plant with two smaller turbines stands a few miles away.</p>',
    sources: [S.e923, S.e923f, S.ava] });
  add({ id: 'rathdrumct', kind: 'gas', plant: 7456, name: 'Rathdrum (Avista)', short: 'Rathdrum turbines', tier: 3,
    lede: 'Two Avista gas turbines built in 1994. Avista says it uses them mainly when demand is highest.',
    stats: [['0.79 TWh', 'electricity generated in 2025']], sources: [S.e923, S.ava] });
  add({ id: 'ifpeak', kind: 'gas', plant: 68021, name: 'Idaho Falls Power peaking plant', short: 'Idaho Falls peaker', tier: 3,
    lede: 'Seven gas engines that the city utility of Idaho Falls switched on in 2026. The city\'s other plants are dams on the Snake River.',
    stats: [['7', 'gas engines, 2.5 MW each']], sources: [S.inv] });

  // ----------------------------------------------------------------- coal and gas plants outside Idaho
  add({ id: 'bridger', kind: 'coal', kindLabel: 'Coal and gas plant, off the map', lon: -110.85, lat: 41.97, name: 'Jim Bridger Power Plant (Wyoming, off the map)', short: 'To Jim Bridger', tier: 2,
    lede: 'Idaho has no coal power plant. Idaho Power owns one-third of this one, about 105 miles east of here in Wyoming. Two of its four units now burn natural gas.',
    stats: [['4.9 TWh', 'electricity the whole plant made from coal in 2025'], ['2.7 TWh', 'made from natural gas in 2025, in the two units converted in spring 2024'], ['2.8M tons', 'coal delivered in 2025 from the Jim Bridger mine beside the plant. Trains brought another 0.2 million tons from two other Wyoming mines'], ['2030', 'year the last two coal units are planned to switch to gas']],
    body: '<p>PacifiCorp owns the other two-thirds and runs the plant. Idaho Power also owns one-third of the company that mines the coal. Power reaches Idaho on the 345-kilovolt lines that leave the map here.</p><p>Idaho Power says it will stop taking part in coal generation by the end of 2030. It owned 10% of the Boardman coal plant in Oregon, which stopped burning coal in October 2020. In 2019 it set a goal of 100% clean energy from its own generation by 2045, which it calls aspirational.</p><p class="gcap">The marker shows where the lines to the plant leave the map. The plant is not in the map\'s data.</p>',
    sources: [S.e923, S.e923f, S.tenk, S.ipCoal, S.ipClean] });
  add({ id: 'valmy', kind: 'gas', kindLabel: 'Former coal plant, off the map', lon: -114.76, lat: 41.86, name: 'North Valmy (Nevada, off the map)', short: 'To North Valmy', tier: 3,
    lede: 'Idaho Power owns half of this plant in northern Nevada, about 140 miles south-west of here. It burned its last coal in 2026 and now runs on natural gas.',
    stats: [['June 2026', 'when the second unit finished its conversion to gas, ending coal at the plant'], ['1.3 TWh', 'electricity the plant made from coal in 2025, its last full year on coal'], ['261,368 tons', 'coal delivered in 2025, by rail from the Spring Creek mine in Montana']],
    body: '<p>NV Energy owns the other half and runs the plant. Idaho Power stopped taking coal power from the first unit in December 2019 and from the second in December 2025.</p><p class="gcap">The marker shows where the line toward Nevada leaves the map. The plant is not in the map\'s data.</p>',
    sources: [S.e923, S.e923f, S.tenk, S.tenq] });

  // ----------------------------------------------------------------- wind, sun, batteries, geothermal, biomass
  add({ id: 'cedarcreek', kind: 'wind', plant: 65311, name: 'Cedar Creek Wind', short: 'Cedar Creek Wind', tier: 2,
    lede: 'The newest large wind farm in Idaho, opened in 2024 in Bingham County. It generated the most of any Idaho wind farm in 2025.',
    stats: [['0.46 TWh', 'electricity generated in 2025'], ['1,132 MW', 'all wind capacity in Idaho in September 2026'], ['2.83 TWh', 'electricity from all Idaho wind farms in 2025, 14% of what the state generated']],
    sources: [S.e923, S.inv] });
  add({ id: 'goshen', kind: 'wind', plant: 57211, name: 'Wind farms east of Idaho Falls', short: 'Goshen wind farms', tier: 3,
    lede: 'Four wind farms on the ridges east of Idaho Falls: Goshen II, Meadow Creek, Wolverine Creek and Horse Butte. Bonneville County has more wind capacity than any other Idaho county.',
    stats: [['0.93 TWh', 'electricity generated by the four in 2025'], ['366 MW', 'wind capacity in Bonneville County']],
    body: '<p>A group of city utilities in Utah and Idaho runs Horse Butte, and Idaho Falls Power owns a share of it.</p><p class="gcap">The table below is for Goshen II only.</p>',
    sources: [S.e923, S.inv, S.ifp] });
  add({ id: 'mthomewind', kind: 'wind', plant: 57444, name: 'Mountain Home wind farms', short: 'Mountain Home wind', tier: 3,
    lede: 'A cluster of small wind farms, most of them about 20 MW, built between 2008 and 2012. A similar cluster stands near Hagerman.',
    stats: [['625 MW', 'wind capacity Idaho Power buys from under a 1978 federal law that requires utilities to buy from small independent producers'], ['1,128 MW', 'all capacity it buys from under that law: wind, solar, hydro and other']],
    body: '<p>Idaho Power bought 4.5 TWh under long-term contracts of this and other kinds in 2025, about a fifth of its supply.</p><p class="gcap">The table below is for one farm, Two Ponds.</p>',
    sources: [S.tenk, S.inv] });
  add({ id: 'pleasantvalley', kind: 'solar', plant: 67211, name: 'Pleasant Valley Solar', short: 'Pleasant Valley Solar', tier: 2,
    lede: 'The solar farm that generated the most electricity in Idaho in 2025, south of Boise. A second phase opened beside it in 2026.',
    stats: [['0.46 TWh', 'electricity generated in 2025, its first year'], ['125 MW', 'capacity of the second phase'], ['1.63 TWh', 'electricity from all Idaho solar farms in 2025, up from 1.02 TWh in 2024']],
    sources: [S.e923, S.prof, S.inv] });
  add({ id: 'jackpot', kind: 'solar', plant: 65778, name: 'Jackpot Solar', short: 'Jackpot Solar', tier: 3,
    lede: 'A solar farm on the Nevada line south of Twin Falls. Franklin Solar and an Idaho Power battery stand nearby.',
    stats: [['0.27 TWh', 'electricity generated in 2025'], ['0.25 TWh', 'generated by Franklin Solar next door in 2025'], ['4 hours', 'time the battery beside Franklin Solar can run at full power: 60 MW, 240 MWh']],
    sources: [S.e923, S.inv] });
  add({ id: 'blackscreek', kind: 'plannedp', plant: 69553, name: 'Blacks Creek Solar (under construction)', short: 'Blacks Creek (planned)', tier: 3,
    lede: 'A solar farm under construction south-east of Boise. When finished it will be the largest in Idaho.',
    stats: [['September 2026', 'date of the federal list that shows it under construction']],
    sources: [S.inv] });
  add({ id: 'arcowind', kind: 'plannedp', plant: 66651, name: 'Arco Wind (planned)', short: 'Arco Wind (planned)', tier: 3,
    lede: 'A wind farm PacifiCorp plans to build in two parts, in 2027 and 2028. The federal list shows its approvals received and construction not yet begun.',
    stats: [['153 and 206 MW', 'capacity of the two parts']], sources: [S.inv] });
  add({ id: 'lavaridge', kind: 'info', lon: -114.19, lat: 42.86, name: 'Lava Ridge wind project (approval withdrawn)', short: 'Lava Ridge (cancelled)', tier: 2,
    lede: 'A wind farm proposed on federal land north-east of Twin Falls. The federal government approved a reduced version in December 2024 and withdrew the approval in August 2025.',
    stats: [['241', 'turbines in the approved version, 231 on federal land and 10 on state land. The first proposal had 400'], ['9 miles', 'least distance required between a turbine and the Minidoka National Historic Site'], ['6 Aug 2025', 'date the Interior Secretary announced the reversal']],
    body: '<p>Minidoka is the site of a camp where Japanese Americans were held during the Second World War. Its supporters, ranchers and Idaho\'s governor and members of Congress opposed the project. The Interior Secretary said his office had found legal defects in the approval. An environmental group said Idaho still needs new sources of power, since it imports much of its electricity.</p><p class="gcap">The marker is approximate. The project would have covered parts of three counties.</p>',
    sources: [S.lava1, S.lava2] });
  add({ id: 'kunabess', kind: 'battery', plant: 67549, name: 'Kuna battery plant', short: 'Kuna battery', tier: 3,
    lede: 'A battery plant owned by an independent company. It opened in 2025.',
    stats: [['659 MW', 'all large batteries in Idaho in September 2026. None existed before 2024'], ['2,632 MWh', 'energy they hold when full: four hours at full power'], ['557 MW', 'battery capacity Idaho Power expects to own by the end of 2026']],
    body: '<p>Idaho Power reports a 20-year contract to use a 150 MW battery plant owned by another company, which came online in May 2025.</p><p>Batteries charge when power is plentiful and discharge for a few hours when it is scarce.</p>',
    sources: [S.inv, S.tenk] });
  add({ id: 'boisebench', kind: 'battery', plant: 68799, name: 'Boise Bench battery', short: 'Boise Bench battery', tier: 3,
    lede: 'An Idaho Power battery at a substation inside Boise. It began full operation in June 2026.',
    stats: [['4 hours', 'time it can run at full power']], sources: [S.inv, S.tenq] });
  add({ id: 'raftriver', kind: 'geo', plant: 56317, name: 'Raft River geothermal plant', short: 'Raft River', tier: 2,
    lede: 'Idaho\'s only geothermal power plant, near the Utah line. It makes power from hot water drawn from deep wells and runs around the clock.',
    stats: [['0.09 TWh', 'electricity generated in 2025'], ['2025', 'year a new generating unit replaced the one that opened in 2008']],
    sources: [S.e923, S.inv] });
  add({ id: 'clearwater', kind: 'bio', kindLabel: 'Paper mill power plant', plant: 50637, name: 'Clearwater Paper, Lewiston', short: 'Clearwater Paper', tier: 2,
    lede: 'A pulp and paper mill that makes much of its own electricity. It burns wood waste and black liquor, a by-product of turning wood into pulp.',
    stats: [['0.46 TWh', 'electricity generated in 2025'], ['0.28 TWh', 'of that from black liquor'], ['0.57 TWh', 'electricity that Idaho plant owners used on site in 2024 without selling it']],
    sources: [S.e923, S.prof] });
  add({ id: 'simplot', kind: 'user', kindLabel: 'Fertilizer plant', plant: 50274, name: 'Simplot Don Plant, Pocatello', short: 'Simplot Don Plant', tier: 3,
    lede: 'A phosphate fertilizer plant. A generator here runs on heat left over from making sulfuric acid, so it burns no extra fuel.',
    stats: [['0.07 TWh', 'electricity generated from waste heat in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'sugar', kind: 'user', kindLabel: 'Sugar factory', plant: 54690, name: 'Amalgamated Sugar, Nampa', short: 'Sugar factory', tier: 3,
    lede: 'A sugar beet factory with its own gas-fired steam turbines. Idaho Power lists food processing first among the industries it serves.',
    stats: [['0.05 TWh', 'electricity generated here in 2025']],
    body: '<p>The steam is used twice: first to turn a generator, then to heat the beet juice. A sister factory in Twin Falls does the same.</p>',
    sources: [S.e923, S.inv, S.tenk] });

  // ----------------------------------------------------------------- nuclear research
  add({ id: 'inl', kind: 'nuclear', kindLabel: 'National laboratory', lon: -112.965, lat: 43.586, name: 'Idaho National Laboratory', short: 'Idaho National Lab', tier: 1,
    lede: 'The federal government\'s reactor testing ground since the early 1950s. Fifty-two reactors have been built on this desert site. None of them sends power to the grid today.',
    stats: [['890 sq mi', 'size of the site'], ['52', 'reactors built here, most the first of their kind'], ['4', 'of those reactors still operating'], ['4 July 2026', 'date a private test reactor, Aalo-X, first sustained a chain reaction here']],
    body: '<p>Aalo-X was the fourth reactor to reach that milestone under a federal program that lets companies build test reactors with Energy Department approval. A May 2025 executive order had set a goal of three by 4 July 2026. The test ran at "zero power": it made no electricity.</p><p>Idaho itself has no nuclear power plant. The marker is at the Advanced Test Reactor, one of the four reactors still running.</p>',
    sources: [S.icp, S.doeAalo] });
  add({ id: 'ebr1', kind: 'nuclear', kindLabel: 'Historic reactor', lon: -113.006, lat: 43.511, name: 'EBR-I: the first electricity from a reactor', short: 'EBR-I', tier: 2,
    lede: 'On 20 December 1951 a reactor here lit four 200-watt light bulbs. It was the first time a power plant made usable electricity from splitting atoms.',
    stats: [['20 Dec 1951', 'date of the first electricity'], ['4', 'light bulbs it lit that day'], ['1955', 'year another reactor on the site powered the nearby town of Arco'], ['1966', 'year it was named a National Historic Landmark']],
    body: '<p>EBR-I stands for Experimental Breeder Reactor I. It was built to show that a reactor could make more fuel than it used. It is now a museum.</p>',
    sources: [S.ebr] });
  add({ id: 'nrf', kind: 'nuclear', kindLabel: 'Naval spent fuel', lon: -112.916, lat: 43.649, name: 'Naval Reactors Facility', short: 'Naval spent fuel', tier: 3,
    lede: 'The Navy sends used fuel from the reactors of its submarines and aircraft carriers here to be examined and stored. A 1995 agreement with Idaho limits how much may come and how long it may stay.',
    stats: [['2035', 'deadline for Navy fuel that arrived before 2026 to leave Idaho'], ['9 metric tons', 'most Navy fuel, measured as heavy metal, allowed in Idaho at one time after 2035'], ['20 a year', 'most shipments allowed, as a running average']],
    body: '<p>Idaho\'s governor signed the agreement to keep the state from becoming a permanent store for nuclear waste. The country still has no permanent repository for used fuel.</p>',
    sources: [S.settle] });

  // ----------------------------------------------------------------- fuel supply
  add({ id: 'gaswest', kind: 'fuel', lon: -117.12, lat: 44.2, name: 'Where the gas comes in: Northwest Pipeline', short: 'Gas enters (west)', tier: 2,
    lede: 'One pipeline system carries gas the length of southern Idaho, from the Oregon line here to the Wyoming corner. The large gas plants of southern Idaho stand near it.',
    stats: [['53.8 Bcf', 'natural gas burned to make electricity in Idaho in 2025. Bcf means billion cubic feet'], ['150,763', 'million British thermal units of gas a day that Idaho Power has the right to ship on this pipeline, roughly 0.15 Bcf'], ['2 others', 'pipelines Idaho Power also holds space on, for its shares of plants in Wyoming and Nevada']],
    body: '<p>Williams owns Northwest Pipeline. Idaho Power buys gas as needed and also rents storage: it holds storage contracts with Northwest Pipeline and, since 2025, with a second company.</p><p>In 2025 Langley Gulch and the Danskin plant listed all their gas as spot purchases, so federal data does not say which gas fields it came from.</p>',
    sources: [S.e923, S.e923f, S.tenk, S.pipes] });
  add({ id: 'gtn', kind: 'fuel', lon: -116.28, lat: 48.67, name: 'Gas from Canada: Gas Transmission Northwest', short: 'Gas enters (north)', tier: 2,
    lede: 'A pipeline that enters the United States at the top of the Idaho Panhandle and runs south-west toward Spokane. The two gas plants at Rathdrum stand beside its route.',
    stats: [['2.5 TWh', 'electricity the two Rathdrum plants generated in 2025'], ['11.5 Bcf', 'gas delivered in 2025 to the larger of the two']],
    sources: [S.e923, S.e923f, S.pipes] });

  // ----------------------------------------------------------------- grid hubs
  add({ id: 'hemingway', kind: 'hub', lon: -116.63, lat: 43.39, name: 'Hemingway substation and the line to Boardman', short: 'Hemingway', tier: 2,
    lede: 'The western gateway of Idaho Power\'s grid. A 300-mile line from Boardman, Oregon, is being built to end here, so that more power can be brought in on the hottest days.',
    stats: [['300 miles', 'length of the Boardman to Hemingway line'], ['Late 2027', 'when it is due in service. Construction began in June 2025'], ['$1.5 to 1.7 billion', 'estimated cost. Idaho Power owns about 45% and PacifiCorp about 55%'], ['166 MW', 'battery plant built at the substation in 2025 and 2026']],
    body: '<p>Idaho Power says the line will let it import power in the hot months, when air conditioners and irrigation pumps run hardest. By autumn 2026 more than half the towers were up and nearly a quarter of the wire was strung.</p><p>Regulators in Idaho, Oregon and Wyoming approved the line in 2023. Oregon\'s commission upheld its approval in November 2025, and opponents have challenged that in two county courts.</p>',
    sources: [S.tenq, S.tenk, S.ipB2h, S.inv] });
  add({ id: 'midpoint', kind: 'hub', lon: -114.42, lat: 42.835, name: 'Midpoint substation', short: 'Midpoint', tier: 2,
    lede: 'A crossroads of the grid near Jerome. Two new lines are planned to meet here: one from Nevada, now under construction, and Gateway West from Wyoming.',
    stats: [['285 miles', 'length of the line from Ely, Nevada, called the Southwest Intertie Project North'], ['2028', 'when the Nevada line is due. Construction began in June 2026'], ['About 11%', 'share of the Nevada line that Idaho Power will buy, with rights to use a further 11%'], ['2030 or later', 'when the Gateway West segment from here to Hemingway would be finished']],
    body: '<p>Gateway West is a line from eastern Wyoming to Hemingway, mostly at 500 kilovolts. PacifiCorp is its majority owner and has built some of the Wyoming segments. Idaho Power asked state regulators in April 2026 to approve the segment between Midpoint and Hemingway and expects to start building it in 2028 if they agree.</p>',
    sources: [S.tenq, S.tenk, S.ipGww] });
  add({ id: 'bpa', kind: 'hub', kindLabel: 'Federal power', lon: -116.91, lat: 46.53, name: 'Bonneville Power Administration lines', short: 'Federal lines', tier: 2,
    lede: 'The 500-kilovolt lines here belong to the Bonneville Power Administration, a federal agency. It sells power from federal dams at wholesale to electric co-ops and city utilities, which deliver it to homes.',
    stats: [['31', 'federal dams in the Northwest whose power the agency sells'], ['3.85 TWh', 'electricity sold in Idaho in 2025 by co-ops and city utilities, 14% of all sales'], ['1937', 'year the agency was created']],
    body: '<p>Dworshak and Albeni Falls are the federal dams in Idaho whose output it sells. Many of Idaho\'s co-ops and city utilities, including Idaho Falls, are its customers.</p><p class="gcap">The map does not draw the agency as a utility area, because it does not deliver power to homes.</p>',
    sources: [S.bpa, S.e861] });

  // ----------------------------------------------------------------- users
  add({ id: 'boise', kind: 'city', lon: -116.203, lat: 43.615, name: 'Boise and Idaho Power\'s peak', short: 'Boise', tier: 1,
    lede: 'Idaho Power serves Boise and most of southern Idaho. Its customers use the most on hot summer evenings, when air conditioners and irrigation pumps run together.',
    stats: [['3,793 MW', 'record demand, set on 22 July 2024. It had not been broken by autumn 2026'], ['2,719 MW', 'winter record, 16 January 2024'], ['7.48%', 'overall rate increase state regulators approved from 1 January 2026'], ['$12.13', 'what that added to the monthly bill of a home using 900 kilowatt-hours']],
    body: '<p>The company had asked for $199.1 million a year and settled for $110 million. It said the money pays for new lines, substations and wildfire protection. It plans to spend $6.3 to $7.2 billion on its system from 2026 to 2030.</p><p>Its 2025 long-range plan forecasts that peak demand will grow 5.1% a year for five years.</p>',
    sources: [S.tenk, S.tenq, S.rate] });
  add({ id: 'irrigation', kind: 'user', kindLabel: 'Irrigation pumps', lon: -113.68, lat: 42.6, name: 'Irrigation pumps', short: 'Irrigation pumps', tier: 1,
    lede: 'Farms on the Snake River Plain lift water from wells, canals and the river with electric pumps. The pumps run in the growing season, the same months as air conditioners.',
    stats: [['2.04 TWh', 'electricity Idaho Power sold for irrigation in 2025'], ['12.6%', 'share of everything it sold to its own customers that year'], ['1.81 TWh', 'what it sold for irrigation in 2023. The amount changes with the weather']],
    body: '<p>Idaho Power pays farmers who agree to let it switch off their pumps for a few hours when summer demand is highest. It says this is one way it avoids building more power plants.</p><p class="gcap">Pumps are spread across the plain. The marker is near Burley.</p>',
    sources: [S.tenk, S.ipPeak, S.e861] });
  add({ id: 'micron', kind: 'fab', lon: -116.146, lat: 43.529, name: 'Micron\'s new chip factory', short: 'Micron', tier: 2,
    lede: 'Micron is building a memory chip factory beside its Boise headquarters. State regulators approved a special power contract for it in 2026.',
    stats: [['8 May 2026', 'date regulators approved the contract, with changes'], ['4.084 cents', 'starting energy price per kilowatt-hour, before charges for peak demand'], ['20 MW', 'size above which a customer needs its own contract with Idaho Power']],
    body: '<p>Idaho Power says the factory\'s demand will rise over several years from 2026. The contract prices energy at the cost of the extra power the factory requires. The company said this protects other customers. A witness for another party said the prices would harm them.</p><p class="gcap">Neither company has published how much power the factory will use.</p>',
    sources: [S.micron, S.micron2, S.tenk] });
  add({ id: 'meta', kind: 'datacenter', lon: -116.275, lat: 43.437, name: 'Meta\'s Kuna data center', short: 'Meta data center', tier: 2,
    lede: 'Meta switched on its first Idaho data center on 3 September 2026. Three new solar farms are being built to match its electricity use.',
    stats: [['$1.2 billion', 'cost of the four-year build'], ['750,000 sq ft', 'size of the buildings'], ['645 MW', 'combined capacity of the three solar projects Meta is paying for'], ['110%', 'most of its own yearly energy needs that Meta may pay to produce, under its contract']],
    body: '<p>Under its contract Meta buys all the output of the solar farms and pays a share of the cost of the grid that delivers power to the site. Solar farms make power only by day, so the match is over a year, not hour by hour.</p><p class="gcap">Idaho Power does not publish how much power a single customer uses.</p>',
    sources: [S.meta, S.tenk] });
  add({ id: 'bayer', kind: 'user', kindLabel: 'Phosphorus plant', lon: -111.585, lat: 42.687, name: 'Bayer phosphorus plant, Soda Springs', short: 'Bayer plant', tier: 2,
    lede: 'Three electric furnaces here melt phosphate ore to make phosphorus. Bayer told regulators in 2023 that the plant is the largest single user of electricity in Idaho.',
    stats: [['180+ MW', 'the plant\'s demand, by Bayer\'s 2023 filing'], ['About 1.4 TWh', 'electricity it uses in a year, by the same filing'], ['3.80 TWh', 'everything Rocky Mountain Power sold in Idaho in 2025, for comparison']],
    body: '<p>Rocky Mountain Power serves the plant under a contract of its own. Of the electricity that utility sold in Idaho in 2025, 63% went to industry.</p>',
    sources: [S.bayer, S.e861] });
  add({ id: 'idahofalls', kind: 'city', lon: -112.034, lat: 43.492, name: 'Idaho Falls', short: 'Idaho Falls', tier: 2,
    lede: 'The city has run its own electric utility since 1900. Its dams on the Snake River supply about a third of the power the city uses.',
    stats: [['34,150', 'customers in 2025'], ['0.78 TWh', 'electricity sold in 2025'], ['5', 'hydropower plants the city owns']],
    body: '<p>The city council governs the utility and sets its rates. The city also owns part of a wind farm and added gas engines in 2026. The federal licenses for its dams expire in January 2029.</p>',
    sources: [S.e861, S.ifp, S.inv] });
  add({ id: 'cda', kind: 'city', lon: -116.78, lat: 47.678, name: 'Coeur d\'Alene and north Idaho', short: 'Coeur d\'Alene', tier: 2,
    lede: 'North Idaho is on a different grid from Boise. Avista, based in Spokane, serves the towns, and member-owned co-ops serve much of the country around them.',
    stats: [['149,098', 'Avista customers in Idaho in 2025'], ['3.65 TWh', 'electricity Avista sold in Idaho in 2025'], ['33,826', 'customers of Kootenai Electric Cooperative in 2025']],
    sources: [S.e861, S.ava] });
  add({ id: 'wildfire', kind: 'info', lon: -116.08, lat: 43.7, name: 'Wildfire and power shutoffs', short: 'Wildfire shutoffs', tier: 3,
    lede: 'On 24 July 2024 Idaho Power cut power on purpose for the first time, to keep its lines from starting fires in high wind. Thousands of customers around Boise lost power for some hours.',
    stats: [['60 mph', 'wind gusts near Boise that day'], ['2022', 'year the company first had a shutoff plan'], ['July 2025', 'when a state law took effect that requires each utility to file a yearly wildfire plan'], ['$90.8 million', 'wildfire costs Idaho Power had set aside for later recovery from Idaho customers by September 2026']],
    body: '<p>Under the 2025 law, state regulators review and approve each utility\'s plan. An approved plan defines the care the utility owes the public with respect to wildfire.</p>',
    sources: [S.ipFire, S.kivi, S.tenk, S.tenq] });

  BROWSE.push(
    ['Dams', ['brownlee', 'oxbow', 'hellscanyon', 'dworshak', 'cabinetgorge', 'noxon', 'albeni', 'palisades', 'americanfalls', 'midsnake', 'cjstrike', 'swanfalls', 'luckypeak', 'lowergranite']],
    ['Natural gas', ['langley', 'bennett', 'danskin', 'lancaster', 'rathdrumct', 'ifpeak']],
    ['Coal, outside Idaho', ['bridger', 'valmy']],
    ['Wind, sun and batteries', ['cedarcreek', 'goshen', 'mthomewind', 'pleasantvalley', 'jackpot', 'blackscreek', 'arcowind', 'lavaridge', 'kunabess', 'boisebench']],
    ['Geothermal and mill power', ['raftriver', 'clearwater', 'simplot', 'sugar']],
    ['Nuclear research', ['inl', 'ebr1', 'nrf']],
    ['Fuel and the grid', ['gaswest', 'gtn', 'hemingway', 'midpoint', 'bpa']],
    ['Who uses it', ['boise', 'irrigation', 'micron', 'meta', 'bayer', 'idahofalls', 'cda', 'wildfire']],
  );

  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025, Idaho only)
  const H = S.HIFLD;
  Object.assign(AREAS, {
    'Idaho Power': { lede: 'The investor-owned utility for Boise and most of southern Idaho. It sells more than half of all the electricity sold in the state.',
      stats: [['15.5 TWh', 'electricity sold in Idaho in 2025, 58% of all sales in the state'], ['636,949', 'customers in Idaho in 2025'], ['3,793 MW', 'record demand, 22 July 2024'], ['2045', 'year by which it aims for 100% clean energy from its own plants, a goal it calls aspirational']],
      body: '<p>In 2025 its supply was 34% from its own dams, 18% from its Idaho gas plants, 14% from coal and gas plants it part-owns in Wyoming and Nevada, and 33% bought from others. The Idaho Public Utilities Commission sets its rates.</p><p>Its 2025 plan adds solar, batteries, wind and 550 MW of new gas plants by 2045, and converts its coal units to gas. In February 2026 it agreed to sell its small Oregon service area to a co-op there.</p>',
      sources: [S.e861, S.tenk, S.ipClean, S.irp, H] },
    'Rocky Mountain Power': { lede: 'PacifiCorp\'s name in eastern Idaho. It serves Rexburg, farms on the upper Snake and the phosphate industry around Soda Springs.',
      stats: [['3.80 TWh', 'electricity sold in Idaho in 2025'], ['92,536', 'customers in Idaho in 2025'], ['63%', 'share of its Idaho sales that went to industry']],
      body: '<p>PacifiCorp also serves parts of Utah, Wyoming, Oregon, Washington and California. It runs the Jim Bridger plant in Wyoming and is the majority owner of the Gateway West line.</p>',
      sources: [S.e861, S.tenk, H] },
    'Avista': { lede: 'A Spokane-based utility that serves the towns of north Idaho, from the Panhandle south to the Lewiston area.',
      stats: [['3.65 TWh', 'electricity sold in Idaho in 2025'], ['149,098', 'customers in Idaho in 2025'], ['$36 million', 'what it spent on equipment for wildfire protection in 2025, in all its states']],
      body: '<p>Avista owns Cabinet Gorge Dam and the Rathdrum gas turbines in Idaho and buys the output of the larger gas plant at Rathdrum.</p>',
      sources: [S.e861, S.ava, H] },
    'Idaho Falls Power': { lede: 'The city-owned utility of Idaho Falls, in business since 1900.',
      stats: [['0.78 TWh', 'electricity sold in 2025'], ['34,150', 'customers in 2025'], ['About a third', 'of the city\'s electricity that comes from its own five dams']],
      sources: [S.e861, S.ifp, H] },
    'Kootenai Electric Cooperative': { lede: 'A member-owned co-op in the country around Coeur d\'Alene.',
      stats: [['0.58 TWh', 'electricity sold in 2025'], ['33,826', 'customers in 2025']], sources: [S.e861, H] },
    'Fall River Rural Electric Cooperative': { lede: 'A member-owned co-op in the upper Snake valley around Ashton and Driggs. It owns several small hydropower plants.',
      stats: [['0.35 TWh', 'electricity sold in Idaho in 2025'], ['18,798', 'customers in Idaho in 2025']], sources: [S.e861, S.inv, H] },
    'Northern Lights': { lede: 'A member-owned co-op in the Panhandle around Sandpoint and Bonners Ferry.',
      stats: [['0.33 TWh', 'electricity sold in Idaho in 2025'], ['19,250', 'customers in Idaho in 2025']], sources: [S.e861, H] },
    'United Electric Co-op': { lede: 'A member-owned co-op around Heyburn and Rupert. More than half of what it sells goes to industry.',
      stats: [['0.36 TWh', 'electricity sold in 2025'], ['7,692', 'customers in 2025']], sources: [S.e861, H] },
    'Raft River Rural Electric Cooperative': { lede: 'A member-owned co-op in the farm and ranch country along the Utah and Nevada lines. Most of its sales are to industrial and commercial accounts, which include irrigation pumps.',
      stats: [['0.27 TWh', 'electricity sold in Idaho in 2025'], ['2,771', 'customers in Idaho in 2025']], sources: [S.e861, H] },
    'Salmon River Electric Cooperative': { lede: 'A member-owned co-op in the Salmon River country around Challis.',
      stats: [['0.10 TWh', 'electricity sold in 2025'], ['3,038', 'customers in 2025']], sources: [S.e861, H] },
    'Lower Valley Energy': { lede: 'A Wyoming-based co-op that also serves a strip of eastern Idaho.',
      stats: [['0.07 TWh', 'electricity sold in Idaho in 2025'], ['2,068', 'customers in Idaho in 2025']], sources: [S.e861, H] },
  });

  // ----------------------------------------------------------------- pipeline cards
  Object.assign(PIPECARDS, {
    'Northwest Pipeline': { lede: 'The pipeline system that carries gas across southern Idaho, from the Oregon line near Payette to the Wyoming corner. Williams owns it. All of Idaho Power\'s gas plants in the state are on it.',
      stats: [['Interstate', 'type of pipeline'], ['150,763', 'million British thermal units a day that Idaho Power has the right to ship on it, roughly 0.15 billion cubic feet', 1], ['2043', 'year Idaho Power\'s gas storage contract with the pipeline ends']],
      body: '<p>Idaho Power also holds space on two other pipelines, Overthrust and Ruby, for its shares of the plants in Wyoming and Nevada.</p>',
      sources: [S.tenk, S.pipes] },
    'Gas Transmission - Northwest': { lede: 'A pipeline from the Canadian border at Eastport, Idaho, south-west across the Panhandle toward Spokane and on to Oregon. The two gas plants at Rathdrum stand beside it.',
      sources: [S.pipes] },
    'Ruby Pipeline LLC': { lede: 'A pipeline from Wyoming to Oregon that clips the bottom edge of this map in Utah and Nevada. Idaho Power holds space on it for the North Valmy plant in Nevada.',
      stats: [['Interstate', 'type of pipeline'], ['78,000', 'million British thermal units a day Idaho Power may ship on it from May 2026, up from 39,000', 1]],
      sources: [S.tenk, S.pipes] },
    'Paiute Pipeline Co': { lede: 'A pipeline that runs south from the Idaho line into northern Nevada.', sources: [S.pipes] },
    'Questar Pipeline Co': { lede: 'Lines of a Utah and Wyoming pipeline system at the south-east corner of the map.', sources: [S.pipes] },
    'Northwestern Energy Co': { lede: 'Gas lines of Montana\'s largest utility. They do not enter Idaho.', sources: [S.pipes] },
  });

  const OSMSRC = K.OSM;
  LINECARDS.push(
    [/Summer Lake - Hemingway/i, { lede: 'A 500-kilovolt line from the Hemingway substation west into Oregon. It is one of the routes by which Idaho Power brings in power from the Northwest. The Boardman to Hemingway line now under construction will be a second.',
      stats: [['500 kV', 'voltage'], ['Late 2027', 'when the second line to Oregon, from Boardman, is due in service']], sources: [S.tenq, OSMSRC] }],
    [/Humboldt ?- ?Midpoint/i, { lede: 'A 345-kilovolt line from the Midpoint substation south into Nevada, toward the North Valmy plant that Idaho Power half-owns. A new 285-mile line from Ely, Nevada, to Midpoint is under construction.',
      stats: [['345 kV', 'voltage'], ['2028', 'when the new line from Nevada is due in service']], sources: [S.tenq, S.tenk, OSMSRC] }],
    [/Dworshak - Taft$/i, { lede: 'A federal 500-kilovolt line from Dworshak Dam north-east across the Bitterroot Mountains into Montana. The Bonneville Power Administration owns it.', sources: [S.bpa, OSMSRC] }],
    [/Lower Granite-Hatwai/i, { lede: 'A federal 500-kilovolt line from Lower Granite Dam in Washington to the Hatwai substation near Lewiston. From Hatwai a line continues to Dworshak Dam.', sources: [S.bpa, OSMSRC] }],
    [/Lower Granite|Little Goose/i, { lede: 'A federal 500-kilovolt line that links the dams of the lower Snake River in Washington. The Bonneville Power Administration owns it.', sources: [S.bpa, OSMSRC] }],
    [/Taft|Garrison/i, { lede: 'One of the 500-kilovolt lines that run east to west across western Montana and the Idaho Panhandle toward Spokane. They carry power from Montana to the Northwest.', sources: [OSMSRC] }],
    [/Grand Coulee/i, { lede: 'A federal 500-kilovolt line in Washington, from Grand Coulee Dam on the Columbia River to a substation at Spokane. It does not enter Idaho.', sources: [OSMSRC] }],
    [/Selkirk|Vaseaux/i, { lede: 'A 500-kilovolt line of BC Hydro in British Columbia, at the top edge of the map. It does not enter Idaho.', sources: [OSMSRC] }],
  );

  // ----------------------------------------------------------------- tour
  const LAY = ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'];
  const ALL = [-117.6, 41.75, -110.7, 49.2];
  TOUR.push(
    { title: 'A state that buys power', text: 'Idaho used 28 terawatt-hours of electricity in 2024 and generated 20. The rest came over the lines from neighboring states. Dams made the most of what Idaho generated itself. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: LAY },
    { title: 'Hells Canyon', text: 'Three Idaho Power dams in the canyon made 5.3 terawatt-hours in 2025. Their license expired in 2005 and they have run on one-year licenses since. A new one is expected in 2027 or later. None of the three has fish passage.', box: [-117.5, 44.5, -116.2, 45.5], zoom: 1.7, select: 'brownlee', layers: ['plants', 'rivers', 'lines'] },
    { title: 'A river that sets the supply', text: 'Dams line the Snake across southern Idaho. Their output follows the snowpack and the farm water schedule: Idaho\'s dams made 11.0 terawatt-hours in 2018 and 8.0 in 2021. 2026 was a dry year, and American Falls Reservoir fell to 3% full in September.', box: [-115.6, 42.2, -112.0, 43.6], zoom: 1.0, select: 'americanfalls', layers: ['plants', 'rivers'] },
    { title: 'Gas fills the gap', text: 'The brown line is the pipeline that crosses southern Idaho. Gas plants on it made 1.7 terawatt-hours in 2010 and 6.4 in 2025. Langley Gulch is the largest. Idaho Power is building a new gas plant at Mountain Home and has asked to build two more.', box: [-117.5, 42.9, -115.2, 44.5], zoom: 1.3, select: 'langley', layers: ['plants', 'pipes', 'rivers'] },
    { title: 'Coal that was never here', text: 'Idaho has no coal plant, but Idaho Power owns shares of two in other states. These lines lead to Jim Bridger in Wyoming, where two units have switched to gas and two still burn coal. North Valmy in Nevada burned its last coal in June 2026.', box: [-114.0, 41.76, -110.75, 43.4], zoom: 1.2, select: 'bridger', layers: ['plants', 'lines', 'pipes'] },
    { title: 'Wind, sun and batteries', text: 'This is the Night view. Solar farms are faded because they make nothing after dark. Wind farms along the plain made 14% of Idaho\'s electricity in 2025 and solar farms 8%. Every large battery in Idaho has been built since 2024. A federal approval for the Lava Ridge wind project was withdrawn in 2025.', box: [-116.9, 42.0, -113.6, 43.7], zoom: 1.1, season: 'winter', select: 'lavaridge', layers: ['plants', 'lines'] },
    { title: 'Pumps and summer evenings', text: 'Idaho Power set its record, 3,793 megawatts, on 22 July 2024. Farms pump irrigation water in the same months that homes run air conditioners. Irrigation took 12.6% of what the company sold in 2025. It pays farmers to switch pumps off for a few hours at the peak.', box: [-115.2, 42.0, -112.4, 43.3], zoom: 1.3, select: 'irrigation', layers: ['cities', 'plants', 'rivers', 'lines'] },
    { title: 'Chips, data and phosphorus', text: 'New customers are arriving around Boise: Micron\'s chip factory, with a power contract approved in 2026, and Meta\'s data center at Kuna, opened in September 2026. Idaho Power expects its sales to grow more than 8% a year. In the east, one phosphorus plant at Soda Springs uses about 1.4 terawatt-hours a year.', box: [-116.75, 43.15, -115.75, 43.85], zoom: 2.0, select: 'meta', layers: ['cities', 'plants', 'lines'] },
    { title: 'The north is another grid', text: 'North Idaho is wired to Spokane, not Boise. Avista serves the towns, and federal dams such as Dworshak sell power at wholesale to co-ops through the Bonneville Power Administration. Gas for the two plants at Rathdrum comes down a pipeline from Canada.', box: [-117.6, 46.2, -115.3, 49.1], zoom: 0.9, select: 'dworshak', layers: ['plants', 'lines', 'pipes', 'rivers', 'cities'] },
    { title: 'New lines, and a reactor test site', text: 'Idaho Power is building a 300-mile line from Oregon to Hemingway, due in late 2027, and a line from Nevada is under construction. In the eastern desert, the Idaho National Laboratory made the first electricity from a reactor in 1951. Now explore: click any plant, line, pipeline or patch of open country.', box: ALL, select: 'hemingway', layers: ['plants', 'planned', 'lines', 'pipes', 'cities'] },
  );

  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    riverLede: 'A river. Dams on Idaho\'s rivers make more of the state\'s electricity than any other source.',
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a power plant, a transmission line, a pipeline, or open country.' });
})();
