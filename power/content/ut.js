/* Utah Power: content for the electricity map.
   The shared machinery is in power/content/kit.js. Plant numbers (capacity, 2023 output, emissions) are not typed here:
   they come from the baked dataset in power/data/ut.js (EIA-860M inventory and EPA eGRID).
   The fact sheet and verification log are in research/utah_power.md. */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'PACIFICORP': ['Rocky Mountain Power', 'Rocky Mountain Power', 'iou'],
    'GARKANE ENERGY COOP, INC': ['Garkane Energy Cooperative', 'Garkane', 'coop'], 'MOON LAKE ELECTRIC ASSN INC': ['Moon Lake Electric Association', 'Moon Lake', 'coop'],
    'DIXIE ESCALANTE R E A, INC': ['Dixie Power', 'Dixie Power', 'coop'], 'MT WHEELER POWER, INC': ['Mt. Wheeler Power', 'Mt. Wheeler', 'coop'],
    'RAFT RURAL ELEC COOP INC': ['Raft River Rural Electric Cooperative', 'Raft River', 'coop'], 'BRIDGER VALLEY ELEC ASSN, INC': ['Bridger Valley Electric Association', 'Bridger Valley', 'coop'],
    'EMPIRE ELECTRIC ASSN, INC': ['Empire Electric Association', 'Empire', 'coop'], 'WELLS RURAL ELECTRIC CO': ['Wells Rural Electric', 'Wells Rural', 'coop'],
    'NAVAJO TRIBAL UTILITY AUTHORITY': ['Navajo Tribal Utility Authority', 'NTUA', 'tribal'],
    'CITY OF ST GEORGE': ['City of St. George', 'St. George', 'public'], 'PROVO CITY CORP': ['Provo City Power', 'Provo', 'public'], 'LEHI CITY CORPORATION': ['Lehi City Power', 'Lehi', 'public'],
    'CITY OF LOGAN - (UT)': ['Logan City Light and Power', 'Logan', 'public'], 'CITY OF MURRAY - (UT)': ['Murray City Power', 'Murray', 'public'], 'CITY OF BOUNTIFUL': ['Bountiful City Light and Power', 'Bountiful', 'public'],
    'SPANISH FORK CITY CORPORATION': ['Spanish Fork City', 'Spanish Fork', 'public'], 'CITY OF SPRINGVILLE - (UT)': ['Springville City', 'Springville', 'public'], 'HEBER LIGHT & POWER COMPANY': ['Heber Light and Power', 'Heber', 'public'],
    'HURRICANE CITY POWER': ['Hurricane City Power', 'Hurricane', 'public'], 'CITY OF WASHINGTON - (UT)': ['Washington City', 'Washington', 'public'], 'BRIGHAM CITY CORPORATION': ['Brigham City', 'Brigham City', 'public'],
    'KAYSVILLE CITY CORPORATION': ['Kaysville City', 'Kaysville', 'public'], 'PAYSON CITY CORPORATION': ['Payson City', 'Payson', 'public'], 'SALEM CITY CORPORATION - (UT)': ['Salem City', 'Salem', 'public'],
    'CITY OF BLANDING - (UT)': ['City of Blanding', 'Blanding', 'public'], 'BEAVER CITY CORPORATION': ['Beaver City', 'Beaver', 'public'], 'PAROWAN CITY CORPORATION': ['Parowan City', 'Parowan', 'public'],
    'FILLMORE CITY CORPORATION': ['Fillmore City', 'Fillmore', 'public'], 'MORGAN CITY - (UT)': ['Morgan City', 'Morgan', 'public'], 'STRAWBERRY ELECTRIC SERV DIST': ['Strawberry Electric Service District', 'Strawberry', 'public'],
  };
  // Left out: the Western Area Power Administration, a federal agency that sells wholesale power from dams. The source draws it as a large blob; it is not a retail utility.
  const K = window.POWERKIT.begin({ id: 'ut', st: 'UT', name: 'Utah', util: UTIL, bigUtils: ['Rocky Mountain Power', 'Moon Lake', 'Garkane', 'Dixie Power', 'NTUA'],
    lineLede: { '345': 'A long-distance line. Lines at 345 kilovolts are the backbone of Utah\'s grid. They link the coal plants of central Utah to the Wasatch Front and to neighboring states.',
      dc: 'A direct-current line from the Intermountain plant near Delta to Adelanto, California, about 490 miles away. Direct current loses less power over very long distances than the alternating current used on the rest of the grid.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. Utah produces gas, mostly in the Uinta Basin, and also sits on pipelines that carry Wyoming gas west.' });
  const { INV, SRC_INV } = K;

  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923w: ['EIA power plant cooling-water data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility sales data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA Utah Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/utah/'],
    hist: ['EIA state generation and emissions history', 'https://www.eia.gov/electricity/data/state/'],
    inv: SRC_INV,
    ugs: ['Utah Geological Survey and Gardner Institute: Utah energy brief, April 2026', 'https://d36oiwf74r1rap.cloudfront.net/wp-content/uploads/2026/04/ERG2026-Energy-RB-Apr2026.pdf'],
    coalmap: ['EIA coal mine map data', 'https://www.eia.gov/maps/layer_info-m.php'],
    ippDec: ['Daily Herald (Utah News Dispatch), 5 Dec 2025', 'https://www.heraldextra.com/news/2025/dec/05/ipp-coal-fired-units-are-no-longer-operating-as-state-government-searches-for-buyers/'],
    ippMar: ['Daily Herald (Utah News Dispatch), 24 Mar 2026', 'https://www.heraldextra.com/news/2026/mar/24/utah-may-turn-ipp-area-into-a-special-district-to-accelerate-sale-of-coal-generators-there/'],
    ippRfp: ['Intermountain Power Agency notice, July 2026', 'https://www.ipautah.com/wp-content/uploads/2026/08/Notice-of-Availability-of-RFP-IPA-Coal-Unit-Sale.pdf'],
    ippRenew: ['Intermountain Power Agency: IPP Renewed', 'https://www.ipautah.com/ipp-renewed/'],
    ippHist: ['Intermountain Power Agency: project history', 'https://www.ipautah.com/about-ipa/project-history-and-location/'],
    ksl: ['KSL, 2024', 'https://www.ksl.com/article/51196377/what-is-utahs-plan-for-the-intermountain-power-agencys-coal-fired-units'],
    aces: ['Hydrogen Fuel News, March 2026', 'https://www.hydrogenfuelnews.com/hydrogen-production-soars-as-aces-deltas-electrolyzers-hit-full-load/8575121'],
    irp: ['Utah News Dispatch via Yahoo News, 2025', 'https://www.yahoo.com/news/pacificorp-extends-life-utah-coal-221157429.html'],
    ej: ['Earthjustice summary of utility filings', 'https://earthjustice.org/feature/coal-ash-states/utah'],
    bon24: ['Salt Lake Tribune, 4 May 2024', 'https://sltrib.com/news/environment/2024/05/04/utahs-4th-largest-power-plant-asks'],
    bon26: ['Utah Public Service Commission order, 15 Jul 2026', 'https://pscdocs.utah.gov/electric/26docs/2650604/3461242650604,2602204,2606603,2602803,2603004,and2603103o7-15-2026.pdf'],
    lila: ['Salt Lake Tribune, 21 Dec 2023', 'https://www.sltrib.com/news/2023/12/21/utahs-lila-canyon-mine-is-idled/'],
    rate: ['KPCW (Utah News Dispatch), 6 Jul 2026', 'https://www.kpcw.org/state-regional/2026-07-06/rocky-mountain-powers-utah-rate-conflict-may-be-settled-with-an-additional-4-2-hike'],
    sb132: ['Utah News Dispatch via Yahoo News, 2025', 'https://www.yahoo.com/news/changes-coming-rocky-mountain-power-120443301.html'],
    og: ['Rocky Mountain Power release, Feb 2026', 'https://www.utahbusiness.com/press-releases/2026/02/06/rocky-mountain-power-advances-utah-operation-gigawatt-landmark-energy-agreement'],
    edam: ['California ISO, 1 May 2026', 'https://www.caiso.com/about/news/news-releases/edam-is-live-pacificorp-and-caiso-successfully-launch-new-market-may-1'],
    gws: ['PacifiCorp progress report to the Western grid council, 2026', 'https://www.wecc.org/sites/default/files/documents/progress_report/2026/PacifiCorp%202026%20APR.pdf'],
    twe: ['TransWest Express progress report to the Western grid council, 2026', 'https://www.wecc.org/sites/default/files/documents/progress_report/2026/TWE%202026%20APR.pdf'],
    tweSite: ['TransWest Express', 'https://www.transwestexpress.net/'],
    fervo: ['ThinkGeoEnergy, October 2026', 'https://www.thinkgeoenergy.com/fervo-energy-announces-commercial-operation-of-first-geothermal-power-plant-in-cape-station-utah/'],
    faraday: ['Daily Herald, 21 Nov 2025', 'https://www.heraldextra.com/news/2025/nov/21/rays-of-power-utahs-largest-solar-plant-becomes-operational-set-to-power-eagle-mountain-data-center/'],
    usbr: ['Bureau of Reclamation, 17 Apr 2026', 'https://www.usbr.gov/newsroom/news-release/5326'],
    droa: ['Bureau of Reclamation: drought response operations', 'https://www.usbr.gov/ColoradoRiverBasin/dcp/droa.html'],
    levels: ['Reclamation daily lake levels, 12 Nov 2026', 'https://www.usbr.gov/lc/region/g4000/hourly/levels.html'],
    ap: ['AP via Fortune, 17 Aug 2026', 'https://fortune.com/2026/08/17/lake-powell-hydropower-shutdown-record-low/'],
    ef: ['Energy Fuels release, 11 Jun 2026', 'https://wwww.stockwatch.com/News/Item/Z-C!EFR-3831479/C/EFR?fmt=orig'],
    doi: ['US Department of the Interior, May 2025', 'https://www.doi.gov/pressreleases/interior-department-approves-utah-uranium-vanadium-mine-strengthen-us-mineral'],
    uma: ['EIA Uranium Marketing Annual Report, 2025', 'https://www.eia.gov/uranium/marketing/'],
    nuscale: ['NuScale Power, 8 Nov 2023', 'https://www.nuscalepower.com/press-releases/2023/utah-associated-municipal-power-systems-and-nuscale-power-agree-to-terminate-the-carbon-free-power-project'],
    tp: ['TerraPower, August 2025', 'https://terrapower.com/utah-office-of-energy-development-terrapower-and-flagship-companies-sign-mou-to-explore-siting-of-advanced-nuclear-reactor'],
    ansBrig: ['American Nuclear Society, 19 Nov 2025', 'https://www.ans.org/news/2025-11-19/article-7549/operation-gigawatt-looks-to-brigham-city-holtec-and-hi-tech-solutions/'],
    ansWeb: ['American Nuclear Society, 14 Jul 2026', 'https://www.ans.org/news/2026-07-14/article-8202/ans-webinar-looks-to-utahs-nuclear-future/'],
    ansUt: ['American Nuclear Society: Utah news', 'https://www.ans.org/news/tag-utah/'],
    uce: ['Utah Clean Energy: 2026 legislative summary', 'https://utahcleanenergy.org/?p=11343'],
    delta: ['Salt Lake Tribune, 9 Sep 2026', 'https://sltrib.com/news/2026/09/09/delta-gigasite-worlds-largest-data'],
    joule: ['Engineering News-Record, 2025', 'https://www.enr.com/articles/61225-joule-caterpillar-partner-to-deliver-utah-4-gw-power-and-hyperscale-computing-campus'],
    sanpete: ['Sanpete Messenger, 2026', 'https://sanpetemessenger.com/?p=41402'],
    stratos: ['Utah Public Radio, 6 May 2026', 'https://www.upr.org/politics/2026-05-06/box-elder-data-center'],
    ozone: ['Standard-Examiner (Utah News Dispatch), 22 Apr 2026', 'https://www.standard.net/news/local/2026/apr/22/focused-on-pollution-from-far-away-feds-propose-raising-northern-utahs-ozone-ranking/'],
    deq: ['Utah Department of Environmental Quality: inversions', 'https://deq.utah.gov/air-quality/inversions'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
  };
  const TWH = 1e6;
  const BUDGET = {
    title: 'Utah generated 38 terawatt-hours of electricity in 2025',
    lede: 'Coal made 47% of it. In 2010 coal made 81%. Solar farms made 17%, up from 0.03 TWh in 2015. In 2024 Utah used slightly more electricity than it generated.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: TWH, shape: 'bolt', unitLine: 'Each bolt = 1 terawatt-hour (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is 2025. The second is 2024, the latest year for which the federal government has published where the power went.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'coal', label: 'Coal', pct: 47.2, af: 18.01 * TWH, color: '#5c5a66', layer: 'plants,closed,pipes', feat: 'hunter', note: 'Burned at four large plants. Almost all of the coal is mined in central Utah and most of it reaches the plants by truck. Coal made 34.1 TWh in 2010 and 38.0 TWh in 2008.' },
      { id: 'gas', label: 'Natural gas', pct: 30.2, af: 11.52 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'lakeside', note: 'Most of it from two Rocky Mountain Power plants, Lake Side and Currant Creek. Utah power plants burned 87 billion cubic feet of gas in 2025.' },
      { id: 'solar', label: 'Solar farms', pct: 17.4, af: 6.62 * TWH, color: '#f2c230', layer: 'plants', feat: 'appaloosa', note: 'Up from 5.3 TWh in 2024. Rooftop panels are not counted here: the federal estimate for them is another 1.1 TWh.' },
      { id: 'wind', label: 'Wind', pct: 2.1, af: 0.79 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'milfordwind', note: 'Most of it from one wind farm near Milford.' },
      { id: 'hydro', label: 'Hydropower', pct: 1.4, af: 0.53 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'flaminggorge', note: 'Flaming Gorge Dam made more than half of it. Glen Canyon Dam is just across the line in Arizona and is not counted here.' },
      { id: 'geo', label: 'Geothermal', pct: 1.2, af: 0.47 * TWH, color: '#c8442e', layer: 'plants', feat: 'cape', note: 'Three plants in south-west Utah. A fourth, of a new kind, started in September 2026.' },
      { id: 'other', tiny: true, label: 'Waste heat, landfill gas and oil', af: 0.21 * TWH, color: '#8a5a3a', val: '0.5% &middot; 0.2 TWh', layer: 'plants', note: 'Small plants that use waste heat from industry, landfill gas or oil.' },
    ],
    uses: [
      { id: 'biz', label: 'Businesses', pct: 38.0, af: 14.13 * TWH, color: '#3f8f46', layer: 'cities', feat: 'meta', note: 'Shops, offices, schools and data centers. This is the group that is growing: sales to businesses rose about 4% in 2025.' },
      { id: 'homes', label: 'Homes', pct: 31.8, af: 11.83 * TWH, color: '#c8442e', layer: 'cities', feat: 'slc', note: 'Sold to 1.27 million households in 2024.' },
      { id: 'ind', label: 'Industry', pct: 23.4, af: 8.68 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'kennecott', note: 'Mines, smelters, refineries, oil fields and factories.' },
      { id: 'loss', label: 'Lost on the wires', pct: 4.4, af: 1.62 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'misc', label: 'Used at plants or not accounted for', pct: 2.5, af: 0.91 * TWH, color: '#5c5a66', note: 'Power that plant owners used on site without selling it (0.6 TWh), 0.3 TWh the federal balance could not assign, and 0.05 TWh sold to electric transit.' },
    ],
    body: '<p class="gcap">2025: total 38.1 TWh from plants of 1 megawatt or more. 2024: 35.1 TWh generated in Utah plus a net 2.0 TWh from other states, 37.2 TWh in all. The net figure hides large flows both ways: the Intermountain plant sends its power to California, and Rocky Mountain Power brings power in from Wyoming. In 2009 Utah sent a net 12.8 TWh to other states. Sources: <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/utah/" target="_blank" rel="noopener">EIA Utah Electricity Profile, 2024</a> &middot; <a href="https://www.eia.gov/electricity/data/eia861m/" target="_blank" rel="noopener">EIA small-scale solar</a> &middot; <a href="https://www.eia.gov/electricity/data/state/" target="_blank" rel="noopener">EIA state history</a></p>',
  };
  const HUD = [['38.1 TWh', 'electricity generated in 2025'], ['47%', 'of it from coal'], ['1,640 MW', 'coal units idle at Intermountain since November 2025']];
  const ABOUT = K.aboutStd('Where a card gives 2025 output, cooling water or fuel deliveries, the figure is our sum of federal plant reports (EIA-923). The TransWest Express line, which is under construction, is not drawn. The Western Area Power Administration, a federal agency that sells wholesale power from dams, is left out of the utility areas because the source draws it as one large block. Plants just outside Utah appear where the map frame includes them: Jim Bridger, Naughton and the planned Kemmerer reactor in Wyoming, and Glen Canyon Dam in Arizona. The California end of the Intermountain direct-current line is off the map.');
  const FEATURES = [], BROWSE = [], TOUR = [], AREAS = {}, PIPECARDS = {}, LINECARDS = [];
  const add = o => FEATURES.push(o);
  const COALASH = 'Coal ash is what is left after coal burns. It is stored on site in ponds and landfills, and federal rules require the owner to test the groundwater around them.';
  const AF = 'An acre-foot (AF) is 325,851 gallons';

  // ----------------------------------------------------------------- coal
  add({ id: 'ipp', kind: 'gas', kindLabel: 'Gas plant with idle coal units', plant: 6481, name: 'Intermountain Power Project', short: 'Intermountain', tier: 1,
    lede: 'A plant near Delta built to send power to Southern California. Its two coal units stopped on 26 November 2025 and new gas units took over, and state law keeps the coal units intact while Utah looks for a buyer.',
    stats: [['4.8 TWh', 'electricity generated in 2025: 4.2 TWh from coal and 0.6 TWh from the new gas units'], ['840 MW', 'net output of the new gas units, by the owner\'s figure. The coal units\' capacity was 1,640 MW'], ['About 490 miles', 'length of the direct-current line from here to Adelanto, California'], ['7,300 AF', 'cooling water consumed in 2025. ' + AF]],
    body: '<p>The Intermountain Power Agency, formed by 23 Utah cities and towns, owns the plant. The Los Angeles Department of Water and Power runs it and buys the largest share. About 98% of the coal units\' power went to California, which no longer allows its utilities to buy coal power. The new units burn natural gas and are built to burn a mix with up to 30% hydrogen, rising to 100% hydrogen by 2045.</p><p>In 2024 the Utah Legislature required the agency to sell the coal units to the state. A 2025 law forbade disconnecting them from the switchyard, and the agency says they are "laid up in an operable condition". By March 2026 the state had 14 replies to a request for information and no buyer. A bill from the 2026 session provides for a special district that could issue bonds to buy the units. On 31 July 2026 the agency asked for proposals to buy, lease or use the units. Any sale needs the state\'s approval.</p><p>' + COALASH + ' A summary of the plant\'s filings lists 17.1 million cubic yards of ash here and arsenic in groundwater at 32 times the federal health-based level.</p><p class="gcap">The 2023 output and emissions in the table below are from when the plant burned coal.</p>',
    sources: [S.e923, S.e923w, S.ippRenew, S.ippHist, S.ippDec, S.ippMar, S.ippRfp, S.ksl, S.ej] });
  add({ id: 'hunter', kind: 'coal', plant: 6165, name: 'Hunter Power Plant', short: 'Hunter', tier: 1,
    lede: 'Utah\'s largest coal plant, near Castle Dale. It generated more electricity in 2025 than any other plant in the state. Its coal arrives by truck from mines in the plateau to the south-west.',
    stats: [['6.8 TWh', 'electricity generated in 2025, 18% of all generation in Utah'], ['3.5M tons', 'coal delivered by truck in 2025: 79% from the Sufco mine'], ['12,700 AF', 'cooling water consumed in 2025. ' + AF], ['Not before 2045', 'earliest closing assumed in the owner\'s 2025 plan. Its 2023 plan said 2042']],
    body: '<p>PacifiCorp runs the plant. In Utah the company does business as Rocky Mountain Power. A company spokesperson said the closing dates were removed mainly because of changes in state and federal rules. The company also said it now runs its coal units less at midday, when solar power is cheap. Solar farms totaling 400 MW have been built beside the plant since 2021.</p><p>' + COALASH + ' A summary of the plant\'s filings lists a 17.6 million cubic yard ash landfill here and lithium in groundwater at 210 times the federal health-based level.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.irp, S.ej, S.inv] });
  add({ id: 'huntington', kind: 'coal', plant: 8069, name: 'Huntington Power Plant', short: 'Huntington', tier: 2,
    lede: 'PacifiCorp\'s second coal plant in Emery County, at the mouth of Huntington Canyon. In 2025 most of its coal came from the Skyline mine, which flooded in January 2026.',
    stats: [['4.3 TWh', 'electricity generated in 2025'], ['1.9M tons', 'coal delivered by truck in 2025: 63% from Skyline, 37% from Sufco'], ['8,400 AF', 'cooling water consumed in 2025'], ['Not before 2045', 'earliest closing assumed in the owner\'s 2025 plan. Its 2023 plan said 2036']],
    body: '<p>' + COALASH + ' A summary of the plant\'s filings lists 7.7 million cubic yards of ash here and lithium in groundwater at 94 times the federal health-based level.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.irp, S.ugs, S.ej] });
  add({ id: 'bonanza', kind: 'coal', plant: 7790, name: 'Bonanza Power Plant', short: 'Bonanza', tier: 1,
    lede: 'The plant of Deseret Power, a cooperative that generates for rural electric co-ops. Its coal comes from the co-op\'s own mine in Colorado on the co-op\'s own electric railroad.',
    stats: [['2.5 TWh', 'electricity generated in 2025'], ['1.4M tons', 'coal delivered in 2025, all from the Deserado mine in Colorado'], ['20M tons', 'coal the plant may burn after 2020 under a 2015 settlement, unless it adds controls for nitrogen oxides'], ['2041 or 2042', 'how long the co-op says it can run with those controls']],
    body: '<p>The 2015 settlement ended a challenge to the plant\'s federal air permit. In 2024 the co-op asked state regulators to approve the controls, called selective catalytic reduction. The Utah Public Service Commission issued a certificate for the project and approved its financing on 15 July 2026.</p><p>The plant consumed 3,100 acre-feet of cooling water in 2025. A summary of its filings lists 8.4 million cubic yards of coal ash in two landfills.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.bon24, S.bon26, S.ej] });
  add({ id: 'sunnyside', kind: 'coal', kindLabel: 'Waste-coal plant', plant: 50951, name: 'Sunnyside Cogeneration', short: 'Sunnyside', tier: 3,
    lede: 'A small plant in East Carbon that burns waste coal left behind by an old coal-washing plant. A turbine failed in fall 2025 and the plant has been shut since.',
    stats: [['0.22 TWh', 'electricity generated in 2025, before the failure'], ['235,000 tons', 'waste coal burned in 2025']],
    body: '<p>In April 2026 the state geological survey said it was unclear when the plant might run again.</p>', sources: [S.e923, S.ugs] });
  add({ id: 'carbon', kind: 'closed', plant: 3644, name: 'Carbon Power Plant (closed 2015)', short: 'Carbon (closed)', tier: 3,
    lede: 'A PacifiCorp coal plant in the canyon north of Helper. It opened in 1954 and closed in April 2015.',
    stats: [['3,045 MW', 'coal capacity still listed as operating in Utah in September 2026'], ['1,640 MW', 'coal capacity listed as retired in 2025, all of it at Intermountain']], sources: [S.inv] });
  add({ id: 'bridger', kind: 'coal', kindLabel: 'Coal and natural gas plant', plant: 8066, name: 'Jim Bridger Power Plant', short: 'Jim Bridger', tier: 2,
    lede: 'A PacifiCorp plant in Wyoming, larger than any plant in Utah. Two of its four units have been converted from coal to natural gas.',
    stats: [['7.6 TWh', 'electricity generated in 2025: 4.9 TWh from coal and 2.7 TWh from gas']],
    body: '<p>Rocky Mountain Power\'s Utah customers are served from PacifiCorp plants in several states, so part of Utah\'s electricity is generated here.</p>', sources: [S.e923, S.inv] });
  add({ id: 'naughton', kind: 'coal', kindLabel: 'Coal and natural gas plant', plant: 4162, name: 'Naughton Power Plant', short: 'Naughton', tier: 3,
    lede: 'A PacifiCorp plant at Kemmerer, Wyoming. One of its three units burns gas. The first Natrium nuclear reactor is planned nearby.',
    stats: [['2.3 TWh', 'electricity generated in 2025: 1.7 TWh from coal and 0.6 TWh from gas']], sources: [S.e923, S.inv] });

  // ----------------------------------------------------------------- gas
  add({ id: 'lakeside', kind: 'gas', plant: 56237, name: 'Lake Side Power Plant', short: 'Lake Side', tier: 2,
    lede: 'Utah\'s largest natural gas plant, beside Utah Lake at Vineyard. It was built in 2007 and doubled in 2014, next to the site of the old Geneva steel mill.',
    stats: [['6.0 TWh', 'electricity generated in 2025, second only to Hunter'], ['41.7 Bcf', 'natural gas delivered in 2025. Bcf means billion cubic feet'], ['4,000 AF', 'cooling water consumed in 2025']],
    body: '<p>Each of its two blocks burns gas in turbines and then uses the hot exhaust to make steam for a second turbine. That design, called combined cycle, gets more electricity from the same gas. Rocky Mountain Power runs the plant.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.inv] });
  add({ id: 'currant', kind: 'gas', plant: 56102, name: 'Currant Creek Power Plant', short: 'Currant Creek', tier: 3,
    lede: 'A Rocky Mountain Power gas plant at Mona, next to the substations where lines from the coal plants, the Intermountain plant and Wyoming meet.',
    stats: [['2.8 TWh', 'electricity generated in 2025'], ['19.9 Bcf', 'natural gas delivered in 2025'], ['0', 'cooling water it reported consuming in 2025. It is cooled with air']],
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'gadsby', kind: 'gas', plant: 3648, name: 'Gadsby Power Plant', short: 'Gadsby', tier: 3,
    lede: 'A Rocky Mountain Power plant just west of downtown Salt Lake City. Its steam units date from 1951 to 1955 and now run only when demand is high.',
    stats: [['0.23 TWh', 'electricity generated in 2025, from 433 MW of capacity'], ['3.7 Bcf', 'natural gas delivered in 2025']],
    body: '<p>Plants that sit ready most of the year and run in the hours of highest demand are called peakers.</p>', sources: [S.e923, S.e923f, S.inv] });
  add({ id: 'westvalley', kind: 'gas', plant: 55622, name: 'West Valley Power Plant', short: 'West Valley', tier: 3,
    lede: 'Gas turbines in the Salt Lake Valley owned by the Utah Municipal Power Agency, which supplies Provo and several smaller cities.',
    stats: [['0.40 TWh', 'electricity generated in 2025'], ['324 MW', 'the agency\'s peak demand in summer 2025']], sources: [S.e923, S.e861] });
  add({ id: 'nebo', kind: 'gas', plant: 56177, name: 'Nebo Power Station', short: 'Nebo', tier: 3,
    lede: 'A gas plant at Payson owned by Utah Associated Municipal Power Systems, an agency through which city utilities buy and generate power together. It has 50 members in seven states.',
    stats: [['0.77 TWh', 'electricity generated in 2025'], ['2.5 TWh', 'power the agency bought from others in 2025, against 1.0 TWh it generated']],
    body: '<p>The agency was the sponsor of a plan to build small nuclear reactors with the company NuScale. The two ended the project on 8 November 2023, saying too few utilities had signed up to buy the power.</p>',
    sources: [S.e923, S.e861, S.nuscale] });
  add({ id: 'millcreek', kind: 'gas', plant: 56253, name: 'Millcreek Power Plant', short: 'Millcreek', tier: 3,
    lede: 'The City of St. George\'s own gas turbines. The city runs its electric utility and buys most of its power from outside.',
    stats: [['0.15 TWh', 'electricity generated in 2025'], ['0.70 TWh', 'electricity the city utility sold in 2025']], sources: [S.e923, S.e861] });

  // ----------------------------------------------------------------- hydro
  add({ id: 'flaminggorge', kind: 'hydro', plant: 6405, name: 'Flaming Gorge Dam', short: 'Flaming Gorge', tier: 2,
    lede: 'A federal dam on the Green River and Utah\'s largest hydropower plant. Since April 2026 it has been releasing extra water to hold up Lake Powell, far downstream.',
    stats: [['0.32 TWh', 'electricity generated in 2025, 61% of Utah\'s hydropower'], ['660,000 to 1 million AF', 'water the federal government planned to release from April 2026 to April 2027. ' + AF], ['3.1 million AF', 'water in the reservoir in April 2026, when it was 83% full'], ['23 Apr 2026', 'date the extra releases began']],
    body: '<p>2026 brought the lowest snowpack on record in the Colorado River basin. The Bureau of Reclamation projected that without action Lake Powell would fall below the level at which Glen Canyon Dam can make power. It ordered the releases from Flaming Gorge and cut the water sent on from Lake Powell.</p><p>The federal Western Area Power Administration sells the dam\'s power to public utilities and co-ops.</p>',
    sources: [S.e923, S.usbr, S.droa] });
  add({ id: 'glencanyon', kind: 'hydro', plant: 153, name: 'Glen Canyon Dam', short: 'Glen Canyon', tier: 2,
    lede: 'The dam that holds Lake Powell. The dam is in Arizona and most of the lake is in Utah. In August 2026 the lake fell to a record low, about 30 feet above the level where the dam can no longer make power.',
    stats: [['2.75 TWh', 'electricity generated in 2025. It counts in Arizona\'s total, not Utah\'s'], ['3,539.64 ft', 'Lake Powell surface on 12 November 2026'], ['3,519.91 ft', 'record low reached in mid-August 2026'], ['3,490 ft', 'level below which the turbines cannot run']],
    body: '<p>The dam made more than five times as much electricity in 2025 as all the hydropower plants in Utah. Utah cities and co-ops buy shares of its output through the federal Western Area Power Administration.</p><p>2026 was an extremely dry year on the Colorado River. These are this year\'s readings, not typical ones.</p>',
    sources: [S.e923, S.levels, S.ap, S.usbr] });
  add({ id: 'cutler', kind: 'hydro', plant: 3646, name: 'Cutler Dam', short: 'Cutler Dam', tier: 3,
    lede: 'A Rocky Mountain Power dam on the Bear River, built in 1927. It is the largest hydropower plant in Utah after Flaming Gorge.',
    stats: [['0.04 TWh', 'electricity generated in 2025'], ['0.53 TWh', 'electricity from all hydropower plants in Utah in 2025, 1.4% of the state\'s generation']], sources: [S.e923] });

  // ----------------------------------------------------------------- solar and batteries
  add({ id: 'faraday', kind: 'solar', plant: 69748, name: 'Faraday Solar', short: 'Faraday Solar', tier: 2,
    lede: 'The largest solar farm in Utah, south-west of Utah Lake. It opened in 2025 to supply Meta\'s data center at Eagle Mountain.',
    stats: [['0.61 TWh', 'electricity generated in 2025, its first partial year'], ['1.2 million', 'solar panels'], ['20 years', 'length of the contract, which runs through Rocky Mountain Power'], ['150 MW', 'battery added next to it in September 2026, holding 600 MWh']],
    sources: [S.e923, S.faraday, S.inv] });
  add({ id: 'greenriver', kind: 'solar', plant: 67501, name: 'Green River Energy Center', short: 'Green River Energy', tier: 2,
    lede: 'A solar farm with the largest battery in Utah, in Emery County about 12 miles south of the Hunter coal plant. It opened in June 2026.',
    stats: [['4 hours', 'time the battery can run at full power: 400 MW, 1,600 MWh'], ['1,071 MW', 'all large batteries running in Utah in September 2026. All but 1 MW opened in December 2025 or later']],
    body: '<p>A battery charges at midday, when solar power is plentiful, and discharges in the evening. Utah\'s large batteries together hold 3,321 MWh when full, about three hours at full power.</p>', sources: [S.inv] });
  add({ id: 'appaloosa', kind: 'solar', plant: 65678, name: 'Appaloosa Solar', short: 'Appaloosa Solar', tier: 2,
    lede: 'One of many solar farms on the desert floor north of Cedar City. Iron and Beaver counties hold much of Utah\'s solar capacity.',
    stats: [['0.54 TWh', 'electricity generated in 2025'], ['3,454 MW', 'all solar farm capacity in Utah in September 2026'], ['1,786 MW', 'more solar capacity planned, by the federal inventory']],
    body: '<p>Utah\'s first large solar farms opened in 2015 and 2016. In 2025 solar farms made 6.6 TWh, 17% of the state\'s electricity. The state geological survey says the coal plants now turn down at midday to make room for solar and turn back up in the evening.</p>',
    sources: [S.e923, S.inv, S.ugs] });
  add({ id: 'escalante', kind: 'solar', plant: 59387, name: 'Escalante Solar', short: 'Escalante Solar', tier: 3,
    lede: 'Three solar farms of 80 MW each near Milford, built in 2016. An 80 MW battery was added in April 2026.',
    stats: [['0.63 TWh', 'electricity generated by the three farms in 2025']],
    body: '<p class="gcap">The table below is for Escalante Solar I only.</p>', sources: [S.e923, S.inv] });
  add({ id: 'redmesa', kind: 'solar', plant: 66404, name: 'Red Mesa Solar', short: 'Red Mesa Solar', tier: 3,
    lede: 'A solar farm on the Navajo Nation in Utah\'s south-east corner, built by a company of the Navajo Tribal Utility Authority. It opened in 2023.',
    stats: [['0.19 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'dominguez', kind: 'battery', plant: 68596, name: 'Dominguez Energy Storage', short: 'Dominguez battery', tier: 3,
    lede: 'A battery plant on the west side of Salt Lake City, next to a major substation. It opened in December 2025 and was the first large battery in Utah.',
    stats: [['4 hours', 'time it can run at full power: 200 MW, 800 MWh']], sources: [S.inv] });

  // ----------------------------------------------------------------- wind
  add({ id: 'milfordwind', kind: 'wind', plant: 57079, name: 'Milford Wind', short: 'Milford Wind', tier: 2,
    lede: 'Utah\'s largest wind farm, built in two stages in 2009 and 2011. A 345-kilovolt line carries its power north to the Intermountain plant, where the direct-current line to California begins.',
    stats: [['0.60 TWh', 'electricity generated by the two stages in 2025, three-quarters of Utah\'s wind power'], ['306 MW', 'capacity of the two stages together'], ['390 MW', 'all wind capacity in Utah in September 2026']],
    body: '<p class="gcap">The table below is for the first stage only.</p>', sources: [S.e923, S.inv] });
  add({ id: 'latigo', kind: 'wind', plant: 59965, name: 'Latigo Wind Park', short: 'Latigo Wind', tier: 3,
    lede: 'A wind farm near Monticello. It opened in 2016.',
    stats: [['0.15 TWh', 'electricity generated in 2025']], sources: [S.e923] });

  // ----------------------------------------------------------------- geothermal
  add({ id: 'cape', kind: 'geo', plant: 68068, name: 'Cape Station', short: 'Cape Station', tier: 1,
    lede: 'A geothermal plant of a new kind, built by Fervo Energy north of Milford. It drills into hot dry rock, cracks it, and circulates water through it to make steam. Its first unit began selling power on 30 September 2026.',
    stats: [['33 MW', 'capacity of the first unit, by the company\'s figure'], ['About 100 MW', 'the first phase: three units, the other two due by 1 January 2027'], ['400 MW', 'the second phase, under construction and due in 2028'], ['23 months', 'time the company says it took to build and start the first unit']],
    body: '<p>Older geothermal plants need a place where hot water already flows underground. This method, called enhanced geothermal, makes its own reservoir with the drilling and fracturing tools of the oil and gas industry. The company calls this the first plant of its kind built on a new site to reach commercial operation. A federal research site for the same method, called FORGE, is nearby.</p>',
    sources: [S.fervo, S.inv, S.ugs] });
  add({ id: 'blundell', kind: 'geo', plant: 299, name: 'Blundell Geothermal Plant', short: 'Blundell', tier: 3,
    lede: 'The oldest geothermal plant still running in Utah, opened in 1984. Rocky Mountain Power runs it.',
    stats: [['0.27 TWh', 'electricity generated in 2025, more than half of Utah\'s geothermal power'], ['0.47 TWh', 'electricity from all geothermal plants in Utah in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'covefort', kind: 'geo', plant: 58570, name: 'Cove Fort Geothermal Plant', short: 'Cove Fort', tier: 3,
    lede: 'A geothermal plant beside Interstate 15, opened in 2013 by Ormat on the site of an earlier plant that closed in 2003.',
    stats: [['0.14 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });

  // ----------------------------------------------------------------- fuel supply: coal
  add({ id: 'sufco', kind: 'coalmineop', lon: -111.417, lat: 38.913, name: 'Sufco Mine', short: 'Sufco Mine', tier: 2,
    lede: 'Utah\'s most productive coal mine, an underground mine east of Salina. In 2025 it supplied 79% of the coal delivered to the Hunter plant.',
    stats: [['8.5M tons', 'coal mined in Utah in 2025, up from 7.0 million in 2023, the lowest in 45 years'], ['6.9M tons', 'of that from two mines, Sufco and Skyline'], ['3.9M tons', 'Sufco coal delivered to Utah power plants in 2025: Hunter 2.8 million, Huntington 0.7 million, Intermountain 0.4 million'], ['About 0.9M tons', 'Utah coal shipped overseas in 2025. The average for 2017 to 2023 was 2.8 million']],
    body: '<p>Five coal mines worked in Utah in 2025, the fewest since mining began there nearly 150 years ago. One company, Wolverine Fuels, has owned all of the active mines since early 2026. In the 2000s Utah mined an average of 24.5 million tons a year.</p><p>Utah power plants burned 8.7 million tons in 2025, 98% of the coal used in the state. Utah also brought in 1.6 million tons from Colorado and Wyoming. Coal for export goes by rail to ports on the West Coast.</p>',
    sources: [S.ugs, S.e923f, S.coalmap] });
  add({ id: 'skyline', kind: 'coalmine', kindLabel: 'Coal mine (flooded 2026)', lon: -111.233, lat: 39.677, name: 'Skyline Mine', short: 'Skyline Mine (flooded)', tier: 2,
    lede: 'A large underground mine near Scofield. In January 2026 miners cut through an unknown fault, water poured in, and the mine flooded and shut.',
    stats: [['1.2M tons', 'Skyline coal delivered to the Huntington plant in 2025, 63% of that plant\'s supply'], ['5 to 6M tons', 'forecast for all Utah coal mining in 2026, down from 8.5 million in 2025']],
    body: '<p>In April 2026 the state geological survey said it was unclear whether the mine would reopen. It expected a newer mine nearby, Fossil Rock, to make up part of the loss when it reached full production.</p>',
    sources: [S.ugs, S.e923f, S.coalmap] });
  add({ id: 'lila', kind: 'coalmine', lon: -110.341, lat: 39.426, name: 'Lila Canyon Mine (closed)', short: 'Lila Canyon (closed)', tier: 3,
    lede: 'A coal mine in the Book Cliffs that caught fire underground on 20 September 2022 and never reopened. Its owner laid off the remaining 150 workers in January 2024.',
    stats: [['2023', 'year the state lists the mine as idled'], ['$80 a ton', 'average price of Utah coal at the mine in 2024, up from $45 in 2023']],
    body: '<p>The state geological survey says the mine\'s unexpected closing caused a regional coal shortage in 2024. Utah power plants brought in a near-record 3.1 million tons from Colorado and Wyoming that year.</p>',
    sources: [S.lila, S.ugs, S.coalmap] });
  add({ id: 'deserado', kind: 'coalmineop', lon: -108.726, lat: 40.169, name: 'Deserado Mine and its electric railroad', short: 'Deserado Mine', tier: 3,
    lede: 'An underground coal mine in Colorado with one customer, the Bonanza plant 35 miles to the west. Deseret Power owns the mine, the plant and the electric railroad between them.',
    stats: [['1.4M tons', 'coal delivered to Bonanza in 2025'], ['12M tons', 'more coal the co-op says it could mine here if the plant adds pollution controls']],
    sources: [S.e923f, S.bon24, S.coalmap] });

  // ----------------------------------------------------------------- fuel supply: gas, oil, hydrogen
  add({ id: 'uinta', kind: 'gasfield', lon: -110.06, lat: 40.12, name: 'Uinta Basin oil and gas fields', short: 'Uinta Basin', tier: 2,
    lede: 'The basin that produces 93% of Utah\'s oil, along with natural gas. Utah produced more gas than it used in 2024 and 2025.',
    stats: [['329 Bcf', 'natural gas produced in Utah in 2025. Bcf means billion cubic feet. The peak was 491 Bcf in 2012'], ['87 Bcf', 'natural gas burned by Utah power plants in 2025'], ['67.9M barrels', 'oil produced in Utah in 2025, a record']],
    body: '<p>The basin\'s waxy crude oil leaves by truck. About half goes to five refineries around Salt Lake City and half to rail yards near Price, where it is loaded on trains for the Gulf Coast.</p><p>The oil field is a large electricity customer too. Moon Lake Electric, the local co-op, sold more than half of its power to industry in 2025.</p><p class="gcap">The fields cover much of the basin. The marker is near Myton.</p>',
    sources: [S.ugs, S.e923, S.e861] });
  add({ id: 'hydrogen', kind: 'fuel', kindLabel: 'Hydrogen storage', lon: -112.62, lat: 39.545, name: 'Hydrogen caverns at Delta', short: 'Hydrogen caverns', tier: 3,
    lede: 'The Intermountain plant sits over a thick dome of underground salt. A project next to it makes hydrogen from water with electricity and stores it in caverns hollowed out of the salt.',
    stats: [['220 MW', 'electricity the hydrogen-making equipment draws at full load'], ['30%', 'share of hydrogen the plant\'s new gas turbines are built to burn at first'], ['2045', 'year the plant\'s owner aims to burn hydrogen alone']],
    body: '<p>The idea is to store energy for months. Solar and wind power makes hydrogen when it is plentiful. The plant burns the hydrogen when power is short. The owner calls the salt dome the only one of its kind in the western United States.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.aces, S.ippRenew] });

  // ----------------------------------------------------------------- uranium and nuclear
  add({ id: 'whitemesa', kind: 'umine', kindLabel: 'Uranium mill', lon: -109.503, lat: 37.535, name: 'White Mesa Mill', short: 'White Mesa Mill', tier: 1,
    lede: 'A mill south of Blanding that turns uranium ore into uranium oxide, the first step toward reactor fuel. Ore is trucked here from mines in Utah and Arizona.',
    stats: [['About 1.6M pounds', 'uranium oxide the owner expected to produce here from January to June 2026'], ['1.5 to 2.5M pounds', 'the owner\'s forecast for all of 2026'], ['3', 'uranium mills built and licensed in the United States, by the Interior Department\'s count. Two are in Utah'], ['7%', 'share of the uranium bought by US reactor owners in 2025 that came from US mines']],
    body: '<p>The owner, Energy Fuels, said the ore came from its Pinyon Plain mine near the Grand Canyon and its La Sal mines in Utah. It planned to pause in July 2026 to rebuild its ore stockpile and to resume late in the year. The mill also separates rare earth metals.</p><p>The Ute Mountain Ute community of White Mesa is a few miles to the south. Utah has no nuclear power plant.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.ef, S.doi, S.uma] });
  add({ id: 'velvet', kind: 'umine', lon: -109.14, lat: 38.13, name: 'Velvet-Wood uranium mine', short: 'Velvet-Wood mine', tier: 2,
    lede: 'An old underground uranium and vanadium mine in the Lisbon Valley that its owner, Anfield Energy, is reopening. The Interior Department approved it in May 2025 after a shortened review.',
    stats: [['3 acres', 'new ground the project will disturb at the surface, by the department\'s figure']],
    body: '<p>The department said the review was the first done under emergency procedures for energy projects. The company also owns a uranium mill at Shootaring Canyon, near Ticaboo, that it intends to reopen.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.doi] });
  add({ id: 'kemmerer', kind: 'plannedp', kindLabel: 'Planned nuclear plant', plant: 68635, name: 'Kemmerer Unit 1 (planned)', short: 'Kemmerer reactor (planned)', tier: 3,
    lede: 'The first Natrium reactor, which the company TerraPower plans in Wyoming near the Naughton coal plant. The federal inventory expects it in 2030. In August 2025 TerraPower and the State of Utah agreed to look for a site for another one in Utah.',
    stats: [['345 MW', 'output of one Natrium reactor. Stored heat can raise it to 500 MW when needed'], ['End of 2025', 'when the partners aimed to name preliminary Utah sites. No site had been published when this map was made']],
    body: '<p>The Utah agreement is not binding. The other partner is Flagship Companies, a developer. Site selection is to weigh community support, the land, and the chance of a federal license.</p>',
    sources: [S.tp, S.inv] });
  add({ id: 'brigham', kind: 'plannedp', kindLabel: 'Proposed nuclear site', lon: -112.03, lat: 41.50, name: 'Brigham City nuclear proposal', short: 'Brigham City (proposed)', tier: 3,
    lede: 'In November 2025 the state, Brigham City and two companies announced a plan to build small reactors, a factory and a training center here. The reactor would be a design by the company Holtec called the SMR-300.',
    stats: [['Not stated', 'number of reactors planned'], ['$750 million', 'private investment the partners say they have raised'], ['2034', 'year by which the state\'s "Operation Gigawatt" plan aims to double Utah\'s energy production']],
    body: '<p>No reactor has been licensed for the site. In 2026 the Legislature created a state Nuclear Energy Regulatory Office.</p><p class="gcap">The marker is at the city. No site has been published.</p>',
    sources: [S.ansBrig, S.uce] });
  add({ id: 'greenrivernuke', kind: 'plannedp', kindLabel: 'Proposed nuclear site', lon: -110.20, lat: 39.02, name: 'Green River nuclear proposal', short: 'Green River (proposed)', tier: 2,
    lede: 'A nuclear plant was first proposed near Green River almost 20 years ago and stalled. In 2026 its backers revived it as a site for two to four small reactors.',
    stats: [['2 to 4', 'small reactors now proposed, of the Holtec SMR-300 design']],
    body: '<p>The original plan, called Blue Castle, was for two large reactors.</p><p class="gcap">The marker is approximate.</p>', sources: [S.ansWeb, S.ansUt] });
  add({ id: 'sanrafael', kind: 'nuclear', kindLabel: 'Test reactor', lon: -111.03, lat: 39.25, name: 'Utah San Rafael Energy Lab', short: 'San Rafael Energy Lab', tier: 3,
    lede: 'An energy research lab in Emery County. In 2026 a start-up, Valar Atomics, started a small test reactor here. It makes no electricity.',
    stats: [['First', 'reactor in a federal pilot program to start a chain reaction outside a national laboratory, by the Energy Department\'s account']],
    body: '<p>The test was at "zero power": the reactor sustained a chain reaction without making useful heat.</p><p class="gcap">The marker is approximate.</p>', sources: [S.ansUt, S.ansWeb] });

  // ----------------------------------------------------------------- grid
  add({ id: 'mona', kind: 'hub', lon: -111.895, lat: 39.789, name: 'Mona and Clover substations', short: 'Mona hub', tier: 2,
    lede: 'The crossroads of Utah\'s grid. Lines from the Emery County coal plants, the Intermountain plant and Bonanza meet here, and since December 2024 so does a 500-kilovolt line from Wyoming.',
    stats: [['416 miles', 'length of the Gateway South line from Medicine Bow, Wyoming, to the Clover substation here'], ['December 2024', 'when Gateway South went into service'], ['1 May 2026', 'date PacifiCorp began trading power a day ahead in a market run by California\'s grid operator']],
    body: '<p>Gateway South connects PacifiCorp\'s plants and wind farms in Wyoming to Utah. A kilovolt is 1,000 volts. Higher voltage lets a line carry more power.</p><p>The new market plans each next day\'s plants across PacifiCorp\'s six states and California together. PacifiCorp has traded in the same operator\'s real-time market since 2014.</p>',
    sources: [S.gws, S.edam] });
  add({ id: 'transwest', kind: 'hub', kindLabel: 'Planned line', lon: -112.48, lat: 39.44, name: 'TransWest Express terminal', short: 'TransWest Express', tier: 3,
    lede: 'A line under construction from Wyoming to Nevada. Its direct-current section ends near Delta, where a new substation was graded in 2025.',
    stats: [['405 miles', 'direct-current line from Wyoming to central Utah, able to carry 3,000 MW'], ['278 miles', 'alternating-current line on to southern Nevada, able to carry 1,500 MW'], ['2031', 'year the first parts are planned to enter service']],
    body: '<p>The line is meant to carry Wyoming wind power to the Southwest. Construction began in 2023.</p><p class="gcap">The marker is approximate. The line is not drawn on the map.</p>',
    sources: [S.twe, S.tweSite] });
  add({ id: 'pumped', kind: 'plannedp', kindLabel: 'Planned pumped storage', plant: 66684, name: 'Intermountain Pumped Storage (planned)', short: 'Pumped storage (planned)', tier: 3,
    lede: 'A proposal to store energy by pumping water uphill near the Intermountain plant. It is the largest planned project in the federal inventory for Utah.',
    stats: [['Not yet sought', 'status of its regulatory approvals in September 2026']], sources: [S.inv] });

  // ----------------------------------------------------------------- users
  add({ id: 'slc', kind: 'city', lon: -111.891, lat: 40.761, name: 'Salt Lake City and the Wasatch Front', short: 'Salt Lake City', tier: 1,
    lede: 'Most Utahns live on the Wasatch Front, and one company, Rocky Mountain Power, serves most of them. It sold 78% of all the electricity sold in Utah in 2025.',
    stats: [['27.7 TWh', 'electricity Rocky Mountain Power sold in Utah in 2025, to 1.08 million customers'], ['4.7%', 'rate increase state regulators allowed in 2025. The company had asked for 18.1%'], ['4.2%', 'further increase in a settlement filed in June 2026, about $3.44 a month for a typical home']],
    body: '<p>The Utah Public Service Commission sets the company\'s rates. After the 2025 decision the company appealed to the Utah Supreme Court. The settlement would end that appeal, and the company would not ask for another general increase before 2028.</p><p>More than 20 Utah cities, among them Provo, Logan, Murray, Bountiful and St. George, run their own electric utilities. Their councils or boards set their rates.</p>',
    sources: [S.e861, S.rate] });
  add({ id: 'air', kind: 'info', lon: -111.99, lat: 40.93, name: 'Wasatch Front air', short: 'Air quality', tier: 3,
    lede: 'The Wasatch Front does not meet the federal limit for ozone in summer, and in winter cold air trapped in the valleys holds fine particles near the ground. Power plants are one of many sources.',
    stats: [['18 days', 'in an average winter with fine-particle levels above the federal limit, by the state\'s count'], ['21 Apr 2026', 'date the EPA proposed to keep the area in the "moderate" ozone category']],
    body: '<p>In December 2024 the EPA moved Salt Lake and Davis counties and parts of Weber and Tooele counties to the stricter "serious" category, because the area missed an August 2024 deadline. In April 2026 it proposed to undo that. It said the area would have met the limit but for pollution from outside the United States. Environmental groups opposed the proposal. No final decision had been published when this map was made.</p><p>The "serious" category makes permits for new plants and factories harder to get.</p>',
    sources: [S.deq, S.ozone] });
  add({ id: 'meta', kind: 'datacenter', lon: -112.03, lat: 40.30, name: 'Meta data center, Eagle Mountain', short: 'Meta data center', tier: 2,
    lede: 'A data center campus that buys solar power through Rocky Mountain Power. A 2025 state law lets very large new customers arrange their own power supply.',
    stats: [['525 MW', 'capacity of Faraday Solar, built to supply this campus under a 20-year contract'], ['About 4%', 'rise in electricity sold to Utah businesses in 2025, which the state geological survey attributes mostly to data centers'], ['90 days', 'time a very large customer and the utility have to agree before the customer may contract with other generators']],
    body: '<p>The 2025 law, Senate Bill 132, is meant to keep the cost of serving very large customers off other customers\' bills. In February 2026 Rocky Mountain Power and state leaders announced the first agreement under it, with a data center that they said would cover its full cost of service.</p><p>A National Security Agency data center stands about 10 miles north-east, at Bluffdale.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.faraday, S.inv, S.ugs, S.sb132, S.og] });
  add({ id: 'deltagiga', kind: 'datacenter', lon: -112.45, lat: 39.27, name: 'Delta Gigasite', short: 'Delta Gigasite', tier: 2,
    lede: 'A data center campus under development south-east of Delta. Its developer plans to make its own power on site by burning natural gas.',
    stats: [['10 GW', 'power the developer says the campus could use when complete. A gigawatt (GW) is 1,000 MW'], ['1,143 acres', 'size of the campus the county permitted in summer 2025'], ['12,481 MW', 'for comparison, the capacity of every power plant in Utah in September 2026']],
    body: '<p>The developer is Creekstone Energy. In September 2026 its gas works were under construction. It says cooling will use up to 2 acre-feet of water a year for each 100 MW.</p><p>A second developer, Joule Capital Partners, broke ground in November 2025 on a 4,000-acre campus north-west of Fillmore, planned with more than 4 GW of gas engines on site.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.delta, S.joule, S.sanpete, S.inv] });
  add({ id: 'stratos', kind: 'datacenter', lon: -112.60, lat: 41.80, name: 'Stratos project, Hansel Valley', short: 'Stratos project', tier: 2,
    lede: 'A data center and power plant proposed on 40,000 acres of Box Elder County. County commissioners consented to it by a unanimous vote in May 2026.',
    stats: [['9 GW', 'power the project is projected to use when complete'], ['10 years', 'time the project is expected to take'], ['55 decibels', 'noise limit the county negotiated for the data center and its power plant']],
    body: '<p>The project would generate its own power from a nearby natural gas pipeline and would not connect to the local grid, a county commissioner said. A state agency, the Military Installation Development Authority, is the sponsor. Hundreds of people attended the county meeting to oppose it. The project still needs air and water permits.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.stratos] });
  add({ id: 'kennecott', kind: 'mine', kindLabel: 'Copper smelter and mine', plant: 56163, name: 'Kennecott Utah Copper', short: 'Kennecott', tier: 2,
    lede: 'The Bingham Canyon copper mine and its smelter are a large industrial power user. The company closed its own coal-fired power plant in stages in 2016 and 2019.',
    stats: [['182 MW', 'coal units retired here in 2016 and 2019'], ['32 MW', 'generator that still runs here on waste heat from the smelter'], ['30 MW', 'solar farm the company added in 2024 and 2025'], ['8.6 TWh', 'electricity sold to all Utah industry in 2025, 24% of sales']],
    sources: [S.inv, S.e861] });
  add({ id: 'stgeorge', kind: 'city', lon: -113.577, lat: 37.103, name: 'St. George', short: 'St. George', tier: 2,
    lede: 'Utah\'s fast-growing south-west corner is served by a city utility and a co-op, not by Rocky Mountain Power.',
    stats: [['214 MW', 'peak demand on the City of St. George utility in summer 2025'], ['222 MW', 'peak demand on Dixie Power, the co-op around the city, in summer 2025'], ['0.70 and 0.72 TWh', 'electricity each sold in 2025']],
    sources: [S.e861] });

  BROWSE.push(
    ['Coal', ['ipp', 'hunter', 'huntington', 'bonanza', 'sunnyside', 'carbon', 'bridger', 'naughton']],
    ['Natural gas', ['lakeside', 'currant', 'gadsby', 'westvalley', 'nebo', 'millcreek']],
    ['Dams', ['flaminggorge', 'glencanyon', 'cutler']],
    ['Sun, wind, heat and batteries', ['faraday', 'greenriver', 'appaloosa', 'escalante', 'redmesa', 'dominguez', 'milfordwind', 'latigo', 'cape', 'blundell', 'covefort']],
    ['Where the fuel comes from', ['sufco', 'skyline', 'lila', 'deserado', 'uinta', 'hydrogen', 'whitemesa', 'velvet']],
    ['Nuclear plans', ['kemmerer', 'brigham', 'greenrivernuke', 'sanrafael']],
    ['The grid', ['mona', 'transwest', 'pumped']],
    ['Who uses it', ['slc', 'stgeorge', 'meta', 'deltagiga', 'stratos', 'kennecott', 'air']],
  );

  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025)
  const HIFLD = K.HIFLD;
  Object.assign(AREAS, {
    'Rocky Mountain Power': { lede: 'The investor-owned utility for most of Utah. It is the local name of PacifiCorp, which serves six western states and runs the Hunter and Huntington coal plants.',
      stats: [['27.7 TWh', 'electricity sold in Utah in 2025, 78% of the state total'], ['1.08 million', 'Utah customers in 2025'], ['11,263 MW', 'peak demand on all of PacifiCorp, in six states, in summer 2025'], ['Not before 2045', 'earliest closing of its Utah coal plants assumed in its 2025 plan']],
      body: '<p>The Utah Public Service Commission sets its rates. The commission allowed a 4.7% increase in 2025 after the company asked for 18.1%. A settlement filed in June 2026 would add 4.2% and bar another general rate request before 2028.</p><p>On 1 May 2026 PacifiCorp began trading power a day ahead in a market run by California\'s grid operator.</p>',
      sources: [S.e861, S.rate, S.irp, S.edam, HIFLD] },
    'Dixie Power': { lede: 'A member-owned co-op around St. George and in the Escalante Valley. Its formal name is Dixie Escalante Rural Electric Association.',
      stats: [['0.72 TWh', 'electricity sold in Utah in 2025'], ['31,630', 'Utah customers in 2025'], ['222 MW', 'peak demand in summer 2025']], sources: [S.e861, HIFLD] },
    'City of St. George': { lede: 'The city runs its own electric utility and owns gas turbines at Millcreek.',
      stats: [['0.70 TWh', 'electricity sold in 2025'], ['33,831', 'customers in 2025'], ['214 MW', 'peak demand in summer 2025']], sources: [S.e861, HIFLD] },
    'Moon Lake Electric Association': { lede: 'A member-owned co-op in the Uinta Basin. More than half of what it sells goes to industry, mostly the oil and gas fields. It is a member of Deseret Power, owner of the Bonanza plant.',
      stats: [['0.59 TWh', 'electricity sold in Utah in 2025, of which 0.33 TWh to industry'], ['18,398', 'Utah customers in 2025']], sources: [S.e861, HIFLD] },
    'Garkane Energy Cooperative': { lede: 'A member-owned co-op across the canyon country of south-central Utah.',
      stats: [['0.25 TWh', 'electricity sold in Utah in 2025'], ['14,487', 'Utah customers in 2025']], sources: [S.e861, HIFLD] },
    'Navajo Tribal Utility Authority': { lede: 'The Navajo Nation\'s own utility. In Utah most of what it sells goes to industry.',
      stats: [['0.34 TWh', 'electricity sold in Utah in 2025, of which 0.31 TWh to industry'], ['2,055', 'Utah customers in 2025']], sources: [S.e861, HIFLD] },
    'Provo City Power': { lede: 'The largest city-owned electric utility in Utah by sales. It buys its power through the Utah Municipal Power Agency.',
      stats: [['0.78 TWh', 'electricity sold in 2025'], ['40,813', 'customers in 2025'], ['184 MW', 'peak demand in summer 2025']], sources: [S.e861, HIFLD] },
    'Lehi City Power': { lede: 'The city-owned utility for Lehi, at the north end of Utah Lake.',
      stats: [['0.49 TWh', 'electricity sold in 2025'], ['31,153', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Logan City Light and Power': { lede: 'The city-owned utility for Logan. It runs small hydropower plants of its own.',
      stats: [['0.44 TWh', 'electricity sold in 2025'], ['22,012', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Murray City Power': { lede: 'The city-owned utility for Murray, inside the Salt Lake Valley.',
      stats: [['0.39 TWh', 'electricity sold in 2025'], ['20,962', 'customers in 2025']], sources: [S.e861, HIFLD] },
  });

  // ----------------------------------------------------------------- pipeline and line cards
  Object.assign(PIPECARDS, {
    'Questar Pipeline Co': { lede: 'The pipeline network with the most miles in Utah. It links the gas fields of eastern Utah and Wyoming to the Wasatch Front. Federal map data lists it under the name Questar.',
      stats: [['Interstate', 'type of pipeline'], ['65.3 Bcf', 'gas that Utah power plants reported under the seller name Dominion in 2025, of 73.6 Bcf reported. Dominion is a former owner of this system and of Utah\'s gas utility. Bcf means billion cubic feet', 1]],
      body: '<p>Lake Side and Currant Creek, the two largest gas plants, took 61.6 billion cubic feet between them in 2025.</p>', sources: [S.e923f, S.pipes] },
    'Kern River Gas Trans Co': { lede: 'An interstate pipeline that carries Wyoming gas across Utah to Nevada and California. It passes the Salt Lake Valley and leaves the state near St. George.',
      stats: [['Interstate', 'type of pipeline'], ['4.0 Bcf', 'gas the West Valley power plant listed as bought from Kern River in 2025', 1]], sources: [S.e923f, S.pipes] },
    'Northwest Pipeline': { lede: 'An interstate pipeline that runs north through eastern Utah and Wyoming toward the Pacific Northwest.', sources: [S.pipes] },
    'Ruby Pipeline LLC': { lede: 'An interstate pipeline from Wyoming across the northern edge of Utah to Oregon. The Stratos data center project in Box Elder County plans to make its power from a nearby gas pipeline.', sources: [S.pipes, S.stratos] },
    'Overland Trails Trans Co': { lede: 'A pipeline within one state, drawn in federal map data in the Wyoming corner of this map.', sources: [S.pipes] },
    'Colorado Interstate Gas Co': { lede: 'An interstate pipeline system based in Colorado and Wyoming.', sources: [S.pipes] },
    'Questar Southern Trails Line': { lede: 'An interstate pipeline drawn across the south-east corner of the map in federal data.', sources: [S.pipes] },
  });
  const OSMSRC = ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'];
  LINECARDS.push(
    [/Intermountain.*(Adelanto|DC|HVDC)|HVDC Intermountain|Southern Transmission|Path 27/i, { title: 'Intermountain to Adelanto direct-current line', lede: 'The line built to carry the Intermountain plant\'s power to Southern California. It runs about 490 miles to Adelanto, with a converter station at each end.',
      body: '<p>The California end is off the map. A 345-kilovolt line from Milford Wind joins the grid at the same switchyard.</p>', sources: [S.ippHist, OSMSRC] }],
    [/Gateway South|Aeolus/i, { title: 'Gateway South (Aeolus to Clover)', lede: 'PacifiCorp\'s 500-kilovolt line from Medicine Bow, Wyoming, to the Clover substation at Mona. It was built to bring Wyoming wind power to Utah.',
      stats: [['500 kV', 'voltage'], ['416 miles', 'length'], ['December 2024', 'when it went into service']], sources: [S.gws, OSMSRC] }],
    [/Sigurd.*Red Butte|Red Butte.*Sigurd/i, { lede: 'A 345-kilovolt line from central Utah to the St. George area, finished in May 2015 as part of the same PacifiCorp program as Gateway South.', sources: [S.gws, OSMSRC] }],
    [/Bears Ears/i, { lede: 'A 345-kilovolt line from the Bonanza plant east into Colorado. Deseret Power sells part of the plant\'s output to co-ops outside Utah.', sources: [S.bon24, OSMSRC] }],
    [/Navajo/i, { lede: 'A 500-kilovolt line in Arizona built to carry power from the Navajo Generating Station near Page, which closed in 2019.', sources: [OSMSRC] }],
    [/TransWest/i, { lede: 'The TransWest Express line, under construction from Wyoming to Nevada. Its first parts are planned to enter service in 2031.', sources: [S.twe, OSMSRC] }],
  );

  // ----------------------------------------------------------------- tour
  const LAY = ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'];
  const ALL = [-114.4, 36.75, -108.7, 42.25];
  TOUR.push(
    { title: 'A coal state, changing', text: 'Utah generated 38 terawatt-hours of electricity in 2025. Coal made 47% of it, down from 81% in 2010. Natural gas made 30% and solar farms 17%. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: LAY },
    { title: 'Castle Country: mines next to plants', text: 'Hunter and Huntington made 29% of Utah\'s electricity in 2025. Their coal comes by truck from mines in the plateau to the west. Supply is tight: the Lila Canyon mine burned in 2022 and the Skyline mine flooded in January 2026. The owner\'s 2025 plan has no closing date for either plant.', box: [-111.75, 38.7, -110.15, 39.85], zoom: 1.5, select: 'hunter', layers: ['plants', 'closed', 'pipes', 'lines'] },
    { title: 'A plant built for Los Angeles', text: 'Intermountain sent almost all of its power to California on the orange direct-current line. California utilities may no longer buy coal power, so the coal units stopped in November 2025 and gas units replaced them. Utah law keeps the coal units intact while the state seeks a buyer.', box: [-113.35, 38.95, -111.75, 39.95], zoom: 1.5, select: 'ipp', layers: ['plants', 'closed', 'lines', 'pipes'] },
    { title: 'Gas on the Wasatch Front', text: 'Lake Side, on Utah Lake, is the state\'s largest gas plant and its second-largest generator. The brown lines are gas pipelines. Utah produced more gas than it used in 2024 and 2025. Much of it comes from the Uinta Basin to the east.', box: [-112.55, 39.65, -111.2, 41.0], zoom: 1.5, select: 'lakeside', layers: ['plants', 'pipes', 'cities', 'lines'] },
    { title: 'Sun by day, and the first batteries', text: 'This is the Night view. Solar farms are faded because they make nothing after dark. Utah\'s solar farms cluster here in Iron and Beaver counties. Until December 2025 the state had almost no large batteries. By September 2026 it had 1,071 megawatts.', box: [-114.0, 37.45, -112.5, 38.75], zoom: 1.5, season: 'winter', select: 'appaloosa', layers: ['plants', 'lines'] },
    { title: 'Heat from the ground at Milford', text: 'Wind, solar and geothermal plants stand side by side here. Blundell has drawn on natural hot water since 1984. Cape Station, which began selling power on 30 September 2026, makes its own reservoir by fracturing hot dry rock.', box: [-113.35, 38.25, -112.45, 38.8], zoom: 2.2, select: 'cape', layers: ['plants', 'lines'] },
    { title: 'A dam that props up another', text: 'Flaming Gorge is Utah\'s largest hydropower plant, and hydropower is only 1.4% of the state\'s electricity. In 2026, after the lowest snowpack on record in the Colorado River basin, the federal government began releasing extra water from this reservoir to keep Lake Powell high enough for Glen Canyon Dam to generate.', box: [-110.35, 40.45, -108.75, 41.35], zoom: 1.6, select: 'flaminggorge', layers: ['plants', 'rivers', 'lines', 'pipes'] },
    { title: 'Uranium, and reactors on paper', text: 'Utah has no nuclear plant. It has two of the country\'s three uranium mills, and White Mesa produced uranium in 2026. The state has also signed up developers who want to build small reactors. Dotted markers show the proposals. None has a license.', box: [-112.6, 36.9, -107.9, 39.7], zoom: 0.8, select: 'whitemesa', layers: ['plants', 'pipes', 'planned', 'cities'] },
    { title: 'Data centers that bring their own power plants', text: 'Three very large data center campuses won county approval in 2025 and 2026. Each plans to burn natural gas on site instead of buying from the grid. Two are near Delta. The developer of one says it could use 10 gigawatts, close to the capacity of every power plant in Utah today.', box: [-113.3, 38.85, -111.6, 40.6], zoom: 1.3, select: 'deltagiga', layers: ['cities', 'plants', 'pipes', 'lines'] },
    { title: 'What comes out of the stacks, and what comes next', text: 'Each gray circle is a plant\'s carbon dioxide for 2023. Utah\'s power plants released 21.1 million metric tons in 2024, down 41% from 2010, as coal plants ran less. Dotted markers are planned plants: mostly solar and batteries. Now explore: click any plant, line, pipeline or patch of open country.', box: ALL, select: 'hunter', layers: ['plants', 'emit', 'closed', 'planned'] },
  );

  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    riverLede: 'A river. Dams on Utah\'s rivers make a small share of its power, and the coal plants draw their cooling water from rivers and reservoirs.' });
})();
