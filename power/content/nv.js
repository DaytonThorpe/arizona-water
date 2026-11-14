/* Nevada Power: content for the electricity map.
   The shared machinery is in kit.js. Plant numbers (capacity, output, emissions) are not typed here: they come from the
   baked dataset in power/data/nv.js (EIA-860M inventory and EPA eGRID). research/nevada_power.md has the fact sheet and
   the verification log. */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'NEVADA POWER CO': ['NV Energy (Nevada Power)', 'NV Energy south', 'iou'], 'SIERRA PACIFIC POWER CO': ['NV Energy (Sierra Pacific Power)', 'NV Energy north', 'iou'],
    'MT WHEELER POWER, INC': ['Mt. Wheeler Power', 'Mt. Wheeler', 'coop'], 'WELLS RURAL ELECTRIC CO': ['Wells Rural Electric', 'Wells Rural', 'coop'],
    'VALLEY ELECTRIC ASSN, INC': ['Valley Electric Association', 'Valley Electric', 'coop'], 'HARNEY ELECTRIC COOP, INC': ['Harney Electric Cooperative', 'Harney', 'coop'],
    'RAFT RURAL ELEC COOP INC': ['Raft River Rural Electric Cooperative', 'Raft River', 'coop'], 'SURPRISE VALLEY ELECTRIFICATION': ['Surprise Valley Electrification', 'Surprise Valley', 'coop'],
    'OVERTON POWER DISTRICT NO 5': ['Overton Power District No. 5', 'Overton', 'public'], 'CITY OF CALIENTE - (NV)': ['City of Caliente', 'Caliente', 'public'], 'CITY OF FALLON - (NV)': ['City of Fallon', 'Fallon', 'public'],
  };
  // Left out: Southern California Edison, the Western Area Power Administration and the Colorado River Commission (each drawn as all of Clark County),
  // the two Lincoln County districts (each drawn as the whole county) and a sliver of Idaho Power on the state line.
  const K = window.POWERKIT.begin({ id: 'nv', st: 'NV', name: 'Nevada', util: UTIL, bigUtils: ['NV Energy south', 'NV Energy north', 'Mt. Wheeler', 'Wells Rural', 'Valley Electric'],
    lineLede: { '345': 'A long-distance line. Lines at 345 kilovolts are the backbone of northern Nevada. They link Reno to the plants near Valmy and to Idaho and Utah.',
      '500': 'A 500-kilovolt line, the largest size used in Nevada. Lines like this ring Las Vegas, run to California and Arizona, and one runs north to Ely.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. Nevada produces almost no gas, so what its power plants burn arrives through lines like this one.' });
  const { SRC_INV } = K;

  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2024 and 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA Nevada Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/nevada/'],
    hist: ['EIA state generation and emissions history', 'https://www.eia.gov/electricity/data/state/'],
    roof: ['EIA small-scale solar estimates', 'https://www.eia.gov/electricity/data/eia861m/'],
    inv: SRC_INV,
    wecc: ['NV Energy progress report to the Western grid council, 4 Mar 2026', 'https://www.wecc.org/sites/default/files/documents/progress_report/2026/NVE%202026%20APR.pdf'],
    niGreen: ['The Nevada Independent, 10 Sep 2024', 'https://thenevadaindependent.com/article/massive-4-2b-nv-energy-transmission-line-gets-federal-ok'],
    niValmy: ['The Nevada Independent, 9 Feb 2025', 'https://thenevadaindependent.com/article/ordered-to-close-its-last-coal-plant-nv-energy-will-now-burn-a-different-fossil-fuel'],
    niReid: ['The Nevada Independent, 28 Apr 2024', 'https://thenevadaindependent.com/article/site-of-the-nations-dirtiest-coal-plant-is-now-part-of-nevadas-clean-energy-transition'],
    niToad: ['The Nevada Independent, 7 Oct 2025', 'https://thenevadaindependent.com/article/geothermal-developer-sues-feds-for-listing-nevada-toad-as-endangered'],
    cbd: ['Center for Biological Diversity, 13 Jan 2026', 'https://biologicaldiversity.org/w/news/press-releases/legal-intervention-seeks-to-defend-endangered-nevada-toad-2026-01-13/'],
    irp: ['NV Energy: 2026 resource plan fact sheet, June 2026', 'https://www.nvenergy.com/publish/content/dam/nvenergy/brochures_arch/help/brochures/Integrated-Resource-Plan-IRP-Fact-Sheet.pdf'],
    aeu: ['Advanced Energy United, 20 May 2026', 'https://advancedenergyunited.org/press-releases/nv-energy-2026-irp/'],
    ksnv: ['KSNV News 3, 27 Oct 2026', 'https://news3lv.com/news/local/nevada-regulators-review-nv-energy-2026-plan-as-data-centers-drive-demand'],
    ktnv: ['KTNV, 13 Aug 2025', 'https://www.ktnv.com/news/nv-energy-prepares-year-round-to-keep-power-on-in-southern-nevada-during-extreme-heat'],
    dri: ['Desert Research Institute: data center water and electricity in Nevada, 2025', 'https://www.dri.edu/wp-content/uploads/Data-Center-Report-Final-2.pdf'],
    fortune: ['Fortune, 12 May 2026', 'https://fortune.com/2026/05/12/lake-tahoe-data-center-49000-residents-power-source/'],
    fleet: ['ConstructConnect, 21 Sep 2026', 'https://news.constructconnect.com/nevada-regulators-approve-362-mw-of-temporary-power-projects-for-data-centers'],
    dive: ['Utility Dive, 18 Sep 2025', 'https://www.utilitydive.com/news/regulators-approve-demand-charge-net-metering-changes-for-nv-energy/760485/'],
    vs: ['Vote Solar, 2026', 'https://votesolar.org/?p=11722'],
    rps: ['Public Utilities Commission of Nevada: renewable portfolio standard', 'https://puc.nv.gov/Renewable_Energy/Portfolio_Standard/'],
    q3: ['Ballotpedia: Nevada Question 3 (2018)', 'https://ballotpedia.org/Nevada_Question_3,_Legislature_to_Minimize_Regulations_on_the_Energy_Market_and_Eliminate_Legal_Energy_Monopolies_Amendment_(2018)'],
    vinc: ['Vegas Inc, 25 Feb 2016', 'https://vegasinc.lasvegassun.com/business/2016/feb/25/casinos-go-their-own-ways-nv-energy-exit-after-app/'],
    google: ['Google, June 2024', 'https://blog.google/outreach-initiatives/sustainability/google-clean-energy-partnership/'],
    fervo: ['Fervo Energy, 18 Jul 2023', 'https://fervoenergy.com/fervo-energy-announces-technology-breakthrough-in-next-generation-geothermal/'],
    lat: ['Latitude Media, 15 May 2025', 'https://www.latitudemedia.com/news/the-clean-transition-tariff-won-approval-in-nevada-whats-next-for-fervo/'],
    quin: ['Quinbrook: Gemini', 'https://www.quinbrook.com/?p=154'],
    c11: ['Stretto bankruptcy news, January 2026', 'https://chapter11cases.com/blogs/news/pioneering-nevada-solar-plant-with-molten-salt-storage-files-second-bankruptcy-after-equipment-failures-slash-production-by-half'],
    elev: ['ElevenFlo bankruptcy summary, 2026', 'https://elevenflo.com/blog/tonopah-solar-energy-bankruptcy'],
    levels: ['Reclamation daily lake levels, 12 Nov 2026', 'https://www.usbr.gov/lc/region/g4000/hourly/levels.html'],
    cob: ['Circle of Blue, 2025', 'https://www.circleofblue.org/2025/water-energy/once-a-showcase-of-american-optimism-and-engineering-hoover-dam-faces-new-power-generation-declines/'],
    hfaq: ['Reclamation: Hoover Dam power questions', 'https://www.usbr.gov/lc/hooverdam/faqs/powerfaq.html'],
    clui: ['Center for Land Use Interpretation', 'https://clui.org/ludb/site/black-mesa-coal-mine-and-pipeline'],
    online: ['NV Energy, January 2014', 'https://nvenergy.mediaroom.com/index.php?s=8838&item=136857'],
    twe: ['TransWest Express', 'https://www.transwestexpress.net/'],
    hit: ['Hitachi Energy: Intermountain Power Project', 'https://www.hitachienergy.com/us/en/about-us/case-studies/intermountain-power-project'],
    mcom: ['Mining.com, February 2020', 'https://www.mining.com/web/barrick-and-newmont-to-reduce-coal-use-at-nevada-jv/'],
    lac: ['Lithium Americas: Thacker Pass', 'https://lithiumamericas.com/thacker-pass/overview/default.aspx'],
    alb: ['Albemarle: Silver Peak', 'https://www.albemarle.com/us/en/silver-peak'],
    usgs: ['US Geological Survey: lithium, 2026', 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-lithium.pdf'],
    ion: ['Ioneer: Rhyolite Ridge', 'https://www.ioneer.com/'],
    nrc: ['US Nuclear Regulatory Commission: Yucca Mountain application', 'https://www.nrc.gov/waste/hlw-disposal/yucca-lic-app.html'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
  };
  const OSM = ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'];
  const HIFLD = ['Service territories: HIFLD / Oak Ridge National Laboratory', 'https://hifld-geoplatform.hub.arcgis.com/'];
  const TWH = 1e6;
  const BUDGET = {
    title: 'Nevada generated 45 terawatt-hours of electricity in 2025',
    lede: 'Natural gas made half of it and solar farms made nearly a third. Geothermal plants made more than coal. In 2005 coal made 46%.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: TWH, shape: 'bolt', unitLine: 'Each bolt = 1 terawatt-hour (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is 2025. The second is 2024, the latest year for which the federal government has published where the power went.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'gas', label: 'Natural gas', pct: 50.6, af: 22.88 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'lenzie', note: 'Burned mostly in plants north of Las Vegas and at Tracy, east of Reno. The gas arrives by pipeline from other states. In 2025 the plants burned 172 billion cubic feet.' },
      { id: 'solar', label: 'Solar farms', pct: 30.8, af: 13.91 * TWH, color: '#f2c230', layer: 'plants', feat: 'gemini', note: 'Up from 0.2 TWh in 2010. Only Texas, California, Florida and Arizona made more from solar farms in 2025. Rooftop panels are not counted here: the federal estimate for them is another 2.3 TWh.' },
      { id: 'geo', label: 'Geothermal', pct: 8.3, af: 3.75 * TWH, color: '#c8442e', layer: 'plants', feat: 'mcginness', note: 'From 26 plants across northern Nevada that draw hot water from underground. Only California made more geothermal power in 2025.' },
      { id: 'coal', label: 'Coal', pct: 5.7, af: 2.59 * TWH, color: '#5c5a66', layer: 'plants,closed', feat: 'valmy', note: 'From two plants in northern Nevada. One of them, North Valmy, switched to natural gas at the end of 2025. Coal made 18.4 TWh in 2005.' },
      { id: 'hydro', label: 'Hydropower', pct: 4.2, af: 1.88 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'hoover', note: 'Almost all from the Nevada half of Hoover Dam. The Arizona half made another 0.9 TWh, counted in Arizona.' },
      { id: 'wind', label: 'Wind', pct: 0.8, af: 0.35 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'springvalley', note: 'From one wind farm, Spring Valley, near Ely.' },
      { id: 'other', tiny: true, label: 'Landfill gas, waste heat and oil', af: 0.07 * TWH, color: '#8a5a3a', val: '0.2% &middot; 0.1 TWh', layer: 'plants', note: 'Small plants at two landfills, a heat-recovery unit on a gas pipeline, and diesel backup.' },
    ],
    uses: [
      { id: 'homes', label: 'Homes', pct: 32.1, af: 14.63 * TWH, color: '#c8442e', layer: 'cities', feat: 'lasvegas', note: 'Sold to 1.3 million households in 2024. Air conditioning in Las Vegas drives the summer peak.' },
      { id: 'biz', label: 'Businesses', pct: 31.3, af: 14.26 * TWH, color: '#3f8f46', layer: 'cities', feat: 'strip', note: 'Casinos, data centers, shops and offices. Several of the largest buy their power from sellers other than the utility.' },
      { id: 'ind', label: 'Industry', pct: 25.8, af: 11.77 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'goldmines', note: 'Mines and factories. Industry takes about twice the share it does in Arizona.' },
      { id: 'export', label: 'Sent to other states', pct: 5.4, af: 2.47 * TWH, color: '#eb6834', layer: 'lines', feat: 'eldorado', note: 'What is left after Nevada\'s own use and losses. It is a net figure that the federal government calculates and does not meter. Power flows both ways across the state line every day.' },
      { id: 'loss', label: 'Lost on the wires', pct: 4.2, af: 1.90 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'misc', label: 'Used at plants or not accounted for', pct: 1.1, af: 0.50 * TWH, color: '#5c5a66', note: 'Power that plant owners used on site without selling it (0.2 TWh), plus 0.3 TWh the federal balance could not assign.' },
    ],
    body: '<p class="gcap">2025: total 45.2 TWh from plants of 1 megawatt or more. Batteries used 0.2 TWh more than they gave back, so the rows add up to slightly more than the total. 2024: 45.5 TWh generated. Sources: <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/nevada/" target="_blank" rel="noopener">EIA Nevada Electricity Profile, 2024</a> &middot; <a href="https://www.eia.gov/electricity/data/eia861m/" target="_blank" rel="noopener">EIA small-scale solar</a> &middot; <a href="https://www.eia.gov/electricity/data/state/" target="_blank" rel="noopener">EIA state history</a></p>',
  };
  const HUD = [['45 TWh', 'electricity generated in 2025'], ['31%', 'of it from solar farms'], ['6,168 MW', 'peak demand on NV Energy in the south, 2025']];
  const ABOUT = K.aboutStd('Where a card gives 2025 output or fuel deliveries, the figure is our sum of federal plant reports (EIA-923). Some plants that the inventory lists in several parts are shown as one: Hoover Dam, Copper Mountain Solar, Techren Solar, McGinness Hills and Ivanpah. The map frame includes part of eastern California and corners of Arizona, Idaho and Utah; plants there are clickable, and the cards are about Nevada. Three utility areas are left out because the source draws each as all of Clark County (Southern California Edison, the Western Area Power Administration and the Colorado River Commission), and two because it draws each as all of Lincoln County. Boulder City\'s own utility is not in the source.');
  const FEATURES = [], BROWSE = [], TOUR = [], AREAS = {}, PIPECARDS = {}, LINECARDS = [];
  const add = o => FEATURES.push(o);

  // ----------------------------------------------------------------- natural gas
  add({ id: 'lenzie', kind: 'gas', plant: 55322, name: 'Chuck Lenzie Generating Station', short: 'Chuck Lenzie', tier: 2,
    lede: 'The plant that makes the most electricity in Nevada. It is one of four large gas plants at Apex, in the desert north of Las Vegas, beside the pipeline that feeds them.',
    stats: [['6.2 TWh', 'electricity generated in 2025, 14% of all generation in Nevada'], ['43.2 Bcf', 'natural gas delivered in 2025. Bcf means billion cubic feet'], ['13.2 TWh', 'generated in 2025 by Lenzie and the three plants near it: Harry Allen, Silverhawk and Apex']],
    body: '<p>NV Energy owns the plant. It burns gas in turbines and then uses the hot exhaust to make steam for a second turbine. That design, called combined cycle, gets more electricity from the same gas.</p>',
    sources: [S.e923, S.e923f] });
  add({ id: 'harryallen', kind: 'gas', plant: 7082, name: 'Harry Allen Generating Station', short: 'Harry Allen', tier: 3,
    lede: 'An NV Energy gas plant at Apex. The 500-kilovolt substation beside it is where the line from northern Nevada arrives.',
    stats: [['3.1 TWh', 'electricity generated in 2025'], ['21.8 Bcf', 'natural gas delivered in 2025']], sources: [S.e923, S.e923f] });
  add({ id: 'silverhawk', kind: 'gas', plant: 55841, name: 'Silverhawk Generating Station', short: 'Silverhawk', tier: 3,
    lede: 'An NV Energy gas plant at Apex, opened in 2004.',
    stats: [['2.5 TWh', 'electricity generated in 2025'], ['18.9 Bcf', 'natural gas delivered in 2025']], sources: [S.e923, S.e923f] });
  add({ id: 'apex', kind: 'gas', plant: 55514, name: 'Apex Generating Station', short: 'Apex', tier: 3,
    lede: 'The one large gas plant at Apex that NV Energy does not run. Its operator is an independent company.',
    stats: [['1.5 TWh', 'electricity generated in 2025'], ['10.4 Bcf', 'natural gas delivered in 2025']], sources: [S.e923, S.e923f] });
  add({ id: 'higgins', kind: 'gas', plant: 55687, name: 'Walter M. Higgins Generating Station', short: 'Higgins', tier: 3,
    lede: 'An NV Energy gas plant at Primm, on the California line beside Interstate 15.',
    stats: [['2.1 TWh', 'electricity generated in 2025'], ['15.4 Bcf', 'natural gas delivered in 2025']], sources: [S.e923, S.e923f] });
  add({ id: 'clark', kind: 'gas', plant: 2322, name: 'Clark Generating Station', short: 'Clark', tier: 3,
    lede: 'An NV Energy plant inside the Las Vegas valley. Most of its units are built to run only when demand is highest.',
    stats: [['0.74 TWh', 'electricity generated in 2025'], ['7.1 Bcf', 'natural gas delivered in 2025']],
    body: '<p>Plants like this are called peakers. They sit ready most of the year and run on the hottest afternoons and evenings.</p>', sources: [S.e923, S.e923f] });
  add({ id: 'tracy', kind: 'gas', plant: 2336, name: 'Frank A. Tracy Generating Station', short: 'Tracy', tier: 2,
    lede: 'The main power plant of northern Nevada, on the Truckee River east of Reno. It sits next to the industrial park where the Tesla factory and many data centers are.',
    stats: [['4.0 TWh', 'electricity generated in 2025, second among Nevada plants'], ['29.6 Bcf', 'natural gas delivered in 2025'], ['26.1 Bcf', 'gas that northern Nevada plants listed as bought from the Tuscarora pipeline in 2025']],
    body: '<p>NV Energy owns the plant. Next door is Western 102, a gas plant owned by the mining company Nevada Gold Mines. It generated 0.4 TWh in 2025.</p>', sources: [S.e923, S.e923f] });
  add({ id: 'fortchurchill', kind: 'gas', kindLabel: 'Gas plant and grid hub', plant: 2330, name: 'Fort Churchill and the Greenlink lines', short: 'Fort Churchill', tier: 2,
    lede: 'A gas plant near Yerington from 1968, listed to close in 2028. The substation here, renamed Walker River, is where two new 525-kilovolt lines called Greenlink will meet.',
    stats: [['320 miles', 'length of Greenlink West, from north-west Las Vegas to here. Planned to be in service in May 2027'], ['235 miles', 'length of Greenlink North, from Robinson Summit near Ely to here. Planned for December 2028'], ['$4.24 billion', 'cost of the two lines as reported in September 2024. The first estimate was $2.5 billion'], ['About 70%', 'share of the cost expected to fall on customers in southern Nevada']],
    body: '<p>With the existing line down the east side of the state, the two new lines would complete a triangle joining Las Vegas, Reno and Ely. NV Energy says Greenlink West could carry as much as 4,000 megawatts. State regulators approved the lines in 2021 and 2022. Federal approval for Greenlink West came in September 2024.</p><p>Collector substations along the routes are meant to connect new solar farms. The 700-megawatt Libra Solar project is planned to connect here in October 2027.</p><p>The plant itself generated 0.47 TWh in 2025.</p>',
    sources: [S.wecc, S.niGreen, S.e923, S.inv] });

  // ----------------------------------------------------------------- coal
  add({ id: 'valmy', kind: 'gas', kindLabel: 'Coal plant converted to gas', plant: 8224, name: 'North Valmy Generating Station', short: 'North Valmy', tier: 1,
    lede: 'NV Energy\'s last coal plant. Its last coal was delivered in September 2025 and its first natural gas in December 2025. The federal inventory now lists it as a gas plant.',
    stats: [['1.3 TWh', 'electricity generated in 2025, nearly all of it from coal'], ['261,368 tons', 'coal delivered in 2025, all by rail from the Spring Creek mine in Montana'], ['1.04M tons', 'coal delivered in 2024, from mines in Wyoming, Montana and Colorado'], ['January 2028', 'expected start of two more gas units here, about 437 MW together']],
    body: '<p>NV Energy and Idaho Power own the plant jointly. Its two units opened in 1981 and 1985. NV Energy had planned to close it and replace it with solar and batteries. In 2023 it told regulators that those projects had fallen through, and it proposed burning gas here instead. State regulators approved the conversion, and in December 2024 they approved the two added units.</p><p>The utility says the plant must run to keep power steady around Elko and the gold mines. Conservation groups had asked for solar or batteries on the site.</p><p class="gcap">The table below is for 2023, when the plant burned coal.</p>',
    sources: [S.e923, S.e923f, S.niValmy, S.wecc, S.inv] });
  add({ id: 'tspower', kind: 'coal', plant: 56224, name: 'TS Power Plant', short: 'TS Power', tier: 2,
    lede: 'A coal plant owned by a mining company. It opened in 2008 to power gold mines and now belongs to Nevada Gold Mines, which has added a 200 MW solar farm beside it.',
    stats: [['1.3 TWh', 'electricity generated from coal in 2025'], ['0.42 TWh', 'generated by the solar farm in 2025'], ['726,156 tons', 'coal delivered in 2025, all by rail from the Black Thunder mine in Wyoming'], ['61.5%', 'share of Nevada Gold Mines owned by Barrick. Newmont owns the rest']],
    body: '<p>In 2020 the company approved changes that would let the plant burn natural gas as well as coal, with a goal of finishing in 2022. Federal reports for 2025 show it burned coal only.</p><p>It is the only plant in Nevada that the federal inventory still lists as coal-fired.</p>',
    sources: [S.e923, S.e923f, S.mcom, S.inv] });
  add({ id: 'reidgardner', kind: 'battery', kindLabel: 'Closed coal plant, now a battery', plant: 2324, name: 'Reid Gardner: coal plant turned battery', short: 'Reid Gardner', tier: 2,
    lede: 'A coal plant ran here from 1965. NV Energy shut it between 2014 and 2017 and tore it down in 2020. A 220 MW battery now stands on part of the site.',
    stats: [['557 MW', 'what the coal plant could produce at its peak, according to the utility'], ['500 feet', 'distance from the plant to land of the Moapa Band of Paiutes'], ['5 of 67 acres', 'part of the old site the battery occupies']],
    body: '<p>A 2013 state law directed NV Energy to drop 800 megawatts of coal power. The Moapa Band of Paiutes had campaigned for years against the plant\'s smoke and ash.</p><p>Nevada had 2,104 MW of large batteries running in September 2026, holding 6,366 MWh. Another 2,920 MW was planned.</p>',
    sources: [S.niReid, S.inv] });
  add({ id: 'mohave', kind: 'closed', plant: 2341, name: 'Mohave Generating Station (closed 2005)', short: 'Mohave (closed)', tier: 2,
    lede: 'A coal plant at Laughlin, run by Southern California Edison mostly for Los Angeles. Its coal arrived as a slurry of crushed coal and water, pumped from Black Mesa in Arizona.',
    stats: [['273 miles', 'length of the coal slurry pipeline'], ['1.3 billion gallons', 'groundwater the pipeline used each year'], ['18.4 to 7.0 TWh', 'coal power generated in Nevada in 2005 and in 2010']],
    body: '<p>The plant last ran at the end of 2005. Nevada\'s power plants released 26.2 million metric tons of carbon dioxide in 2005 and 17.0 million in 2010.</p><p class="gcap">The federal inventory dates the retirement of the generators to 2012.</p>',
    sources: [S.clui, S.hist] });

  // ----------------------------------------------------------------- hydro
  add({ id: 'hoover', kind: 'hydro', plant: 154, name: 'Hoover Dam', short: 'Hoover Dam', tier: 2,
    lede: 'The dam that holds Lake Mead, on the Nevada-Arizona line. Its output shrinks as the lake falls, because lower water pushes on the turbines with less force.',
    stats: [['2.73 TWh', 'electricity generated in 2025 by both sides of the dam'], ['1.81 TWh', 'of that from the generators on the Nevada side'], ['1,040.71 ft', 'Lake Mead surface on 12 November 2026'], ['1,035 ft', 'level at which the 12 older turbines may have to stop']],
    body: '<p>With a full lake the dam can produce 2,080 MW. In 2025, with the lake at 1,055 feet, it could produce 1,304 MW. If the 12 older turbines stop, the five newer ones could produce about 382 MW.</p><p>The power is divided by federal law. Nevada receives 23.4%, Arizona 19.0% and Boulder City 1.8%. The rest goes to Southern California. A state agency, the Colorado River Commission of Nevada, sells Nevada\'s share. In 2025 it supplied 0.94 TWh from all its sources to 17 customers.</p><p>The dam has averaged about 4 TWh a year over its life.</p>',
    sources: [S.e923, S.levels, S.cob, S.hfaq, S.e861] });
  add({ id: 'davis', kind: 'hydro', plant: 152, name: 'Davis Dam', short: 'Davis Dam', tier: 3,
    lede: 'The dam that holds Lake Mohave, downstream of Hoover. Its power plant is on the Arizona bank, so its output is counted in Arizona.',
    stats: [['0.91 TWh', 'electricity generated in 2025']], sources: [S.e923] });

  // ----------------------------------------------------------------- geothermal
  add({ id: 'mcginness', kind: 'geo', plant: 57446, name: 'McGinness Hills', short: 'McGinness Hills', tier: 1,
    lede: 'The largest geothermal plant in Nevada, in the middle of the state. Wells bring up hot water, its heat drives turbines, and the water is pumped back underground.',
    stats: [['1.0 TWh', 'electricity generated in 2025'], ['3.75 TWh', 'generated by all 26 geothermal plants in Nevada in 2025, 8.3% of the state\'s total'], ['18 of 26', 'Nevada geothermal plants run by Ormat, a company based in Reno']],
    body: '<p>Geothermal plants run day and night, whatever the weather. In 2025 only California (10.9 TWh) made more geothermal electricity than Nevada. Utah was third with 0.5 TWh.</p>',
    sources: [S.e923, S.inv] });
  add({ id: 'steamboat', kind: 'geo', plant: 50654, name: 'Steamboat geothermal complex', short: 'Steamboat', tier: 2,
    lede: 'Six geothermal plants at Steamboat Springs, on the southern edge of Reno. The first opened in the 1980s.',
    stats: [['0.56 TWh', 'electricity generated by the six plants in 2025']],
    body: '<p class="gcap">The table below is for one of the six plants, Steamboat Hills.</p>', sources: [S.e923, S.inv] });
  add({ id: 'dixievalley', kind: 'geo', plant: 52015, name: 'Dixie Valley', short: 'Dixie Valley', tier: 3,
    lede: 'A geothermal plant in a remote valley east of Fallon, running since 1988. It is operated as part of California\'s grid.',
    stats: [['0.42 TWh', 'electricity generated in 2025'], ['2.8 TWh', 'generated in 2025 by all Nevada plants that are run as part of California\'s grid, most of them solar farms near Las Vegas']],
    sources: [S.e923] });
  add({ id: 'dixiemeadows', kind: 'info', lon: -118.06, lat: 39.80, name: 'Dixie Meadows and the Dixie Valley toad', short: 'Dixie Valley toad', tier: 3,
    lede: 'Ormat began building a geothermal plant here in 2022. That year the federal government listed the Dixie Valley toad, which lives only in the hot springs beside the site, as endangered.',
    stats: [['2022', 'year the toad was listed as endangered and construction stopped'], ['2025', 'year Ormat sued the federal government to overturn the listing'], ['13 Jan 2026', 'date a conservation group and the Fallon Paiute Shoshone Tribe asked to join the case']],
    body: '<p>The toad lives in one spring-fed wetland of a few hundred acres. The Center for Biological Diversity says pumping could dry the springs. Ormat says the listing was made without evidence that the toad\'s numbers were falling.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.niToad, S.cbd] });
  add({ id: 'bluemountain', kind: 'geo', plant: 56982, name: 'Blue Mountain and Fervo\'s Project Red', short: 'Project Red', tier: 2,
    lede: 'Beside this geothermal plant, the company Fervo Energy drilled sideways through hot rock that has no natural water flow, using methods from oil and gas drilling. Google backed the project.',
    stats: [['3.5 MW', 'electric output its wells supported in a 30-day test, announced in July 2023'], ['115 MW', 'size of a second Fervo project that NV Energy agreed to buy from, for Google'], ['0.17 TWh', 'electricity generated by the Blue Mountain plant in 2025']],
    body: '<p>Ordinary geothermal plants need hot water that is already underground. This method, called enhanced geothermal, pumps water down one well, through cracks made in the rock, and up another.</p><p>Under a rate approved by state regulators in 2025, Google pays the extra cost of the 115 MW project, so that other customers do not. NV Energy lists that project, Corsac Station, as connecting at the same new substation as its Sierra Solar project.</p>',
    sources: [S.fervo, S.google, S.lat, S.wecc, S.e923] });
  add({ id: 'stillwater', kind: 'geo', plant: 50765, name: 'Stillwater', short: 'Stillwater', tier: 3,
    lede: 'A geothermal plant near Fallon with solar panels on the same site.',
    stats: [['0.09 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'tungsten', kind: 'geo', plant: 60785, name: 'Tungsten Mountain', short: 'Tungsten Mountain', tier: 3,
    lede: 'A geothermal plant in Churchill County that opened in 2017, with a small solar field beside it.',
    stats: [['0.28 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });

  // ----------------------------------------------------------------- solar, wind and batteries
  add({ id: 'gemini', kind: 'solar', plant: 63352, name: 'Gemini Solar', short: 'Gemini', tier: 2,
    lede: 'The solar farm that made the most electricity in Nevada in 2025. Its battery stores midday output for the evening, when Las Vegas demand is still high and the sun is down.',
    stats: [['2.2 TWh', 'electricity generated in 2025'], ['1,416 MWh', 'energy the battery holds, according to the owner. The federal inventory lists 380 MWh'], ['25 years', 'length of its contract to sell to NV Energy'], ['6,500 acres', 'federal land the project covers']],
    body: '<p>The project has been running since 2024. Its owner is the investment firm Quinbrook.</p>',
    sources: [S.e923, S.quin, S.inv] });
  add({ id: 'coppermountain', kind: 'solar', plant: 58017, name: 'Copper Mountain Solar', short: 'Copper Mountain', tier: 2,
    lede: 'A solar complex in the Eldorado Valley south of Boulder City, built in stages from 2008 to 2021. Most of it is run as part of California\'s grids, not Nevada\'s.',
    stats: [['2.4 TWh', 'electricity generated by the complex in 2025'], ['1.1 TWh', 'of that from parts operated within California\'s main grid'], ['0.6 TWh', 'from the part operated within the Los Angeles city utility\'s grid']],
    body: '<p>The valley holds a cluster of solar farms because several 500-kilovolt lines to California meet at the substations here.</p>', sources: [S.e923, S.inv] });
  add({ id: 'techren', kind: 'solar', plant: 61930, name: 'Techren Solar', short: 'Techren', tier: 3,
    lede: 'Five solar farms built side by side in the Eldorado Valley in 2019 and 2020.',
    stats: [['0.93 TWh', 'electricity generated by the five in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'nso', kind: 'solar', kindLabel: 'Solar thermal plant', plant: 56405, name: 'Nevada Solar One', short: 'Nevada Solar One', tier: 3,
    lede: 'A solar thermal plant from 2007. Curved mirrors heat a fluid that boils water for a steam turbine.',
    stats: [['0.09 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'crescent', kind: 'solar', kindLabel: 'Solar thermal plant', plant: 57275, name: 'Crescent Dunes', short: 'Crescent Dunes', tier: 1,
    lede: 'A field of 10,347 mirrors that aim sunlight at a 640-foot tower near Tonopah. The heat is stored in molten salt so the plant can generate after dark. The salt tanks have leaked four times.',
    stats: [['0.06 TWh', 'electricity generated in 2025'], ['$737 million', 'federal loan guarantee that helped build it'], ['21 Jan 2026', 'date its owner filed for bankruptcy a second time'], ['$7 million', 'price of the sale a court approved on 19 March 2026']],
    body: '<p>The tanks leaked in 2016, 2019, 2022 and 2023. The 2019 leak stopped the plant for more than two years, and NV Energy ended its contract to buy the power that October. Since 2023 the owner has run the salt cooler to avoid leaks, which cut output by about 45%.</p><p>The buyer named in court was Sons of Liberty Construction. The debts listed in the bankruptcy were about $173 million.</p>',
    sources: [S.e923, S.c11, S.elev] });
  add({ id: 'moapa', kind: 'solar', plant: 57859, name: 'Moapa Southern Paiute Solar', short: 'Moapa Paiute Solar', tier: 3,
    lede: 'A solar farm on the Moapa River Indian Reservation, opened in 2016. The reservation is next to the site of the Reid Gardner coal plant.',
    stats: [['0.61 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'eagleshadow', kind: 'solar', plant: 61852, name: 'Eagle Shadow Mountain Solar', short: 'Eagle Shadow Mountain', tier: 3,
    lede: 'A solar farm north of Las Vegas that opened in 2023.',
    stats: [['0.90 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'sierrasolar', kind: 'battery', kindLabel: 'Battery and solar farm', plant: 67978, name: 'Sierra Solar', short: 'Sierra Solar', tier: 2,
    lede: 'NV Energy\'s own solar and battery project in northern Nevada. The battery started in 2026 and is the largest in the federal inventory for Nevada.',
    stats: [['4 hours', 'time the battery can run at full power'], ['400 MW', 'solar capacity of the first phase'], ['600 MW', 'size of a second phase of solar and batteries']],
    body: '<p>Most large solar farms in Nevada are owned by independent companies that sell to the utility. This one the utility owns.</p>', sources: [S.inv, S.wecc] });
  add({ id: 'dodgeflat', kind: 'solar', plant: 63913, name: 'Dodge Flat Solar', short: 'Dodge Flat', tier: 3,
    lede: 'A solar farm with a battery near Wadsworth, east of Reno. It opened in 2022.',
    stats: [['0.55 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'libra', kind: 'plannedp', plant: 69857, name: 'Libra Solar (under construction)', short: 'Libra Solar', tier: 3,
    lede: 'A solar farm with a battery of equal power, under construction in Mineral County. It would be the largest solar project in Nevada.',
    stats: [['October 2027', 'date it is planned to connect, at the Fort Churchill substation'], ['December 2024', 'when state regulators approved it'], ['3,726 MW', 'all solar capacity planned in Nevada in September 2026, this project included']],
    sources: [S.inv, S.wecc] });
  add({ id: 'ivanpah', kind: 'solar', kindLabel: 'Solar thermal plant', plant: 57074, name: 'Ivanpah Solar', short: 'Ivanpah', tier: 3,
    lede: 'Three towers ringed by mirrors, just inside California beside Interstate 15. The plant also burns some natural gas.',
    stats: [['0.66 TWh', 'electricity generated from sunlight in 2025'], ['0.03 TWh', 'generated from natural gas in 2025']],
    body: '<p class="gcap">Its output is counted in California, not Nevada.</p>', sources: [S.e923] });
  add({ id: 'springvalley', kind: 'wind', plant: 57192, name: 'Spring Valley Wind', short: 'Spring Valley Wind', tier: 1,
    lede: 'The only wind farm in Nevada. It opened in 2012 in a valley east of Ely.',
    stats: [['0.35 TWh', 'electricity generated in 2025, 0.8% of Nevada\'s total']], sources: [S.e923, S.inv] });

  // ----------------------------------------------------------------- fuel supply
  add({ id: 'gassouth', kind: 'fuel', lon: -114.05, lat: 37.07, name: 'Where the gas comes in: the Kern River line', short: 'Gas enters (south)', tier: 2,
    lede: 'The Kern River pipeline brings natural gas from Wyoming. It crosses from Utah here, passes the Apex power plants and Las Vegas, and goes on to California.',
    stats: [['172 Bcf', 'natural gas burned by Nevada power plants in 2025. Bcf means billion cubic feet'], ['109.7 Bcf', 'gas that Nevada power plants listed as bought from Kern River in 2025'], ['50.6%', 'share of Nevada\'s electricity made from gas in 2025']],
    body: '<p>Plants reported 160 billion cubic feet of deliveries in 2025. Many list the pipeline company as the seller, so the figures show which pipe carried the gas more than who produced it.</p><p>The pipeline belongs to Berkshire Hathaway Energy, the company that owns NV Energy.</p>',
    sources: [S.e923, S.e923f, S.pipes] });
  add({ id: 'gasnorth', kind: 'fuel', lon: -119.53, lat: 39.60, name: 'Where the gas comes in: the northern lines', short: 'Gas enters (north)', tier: 2,
    lede: 'Northern Nevada is supplied by different pipes from the south. The Tuscarora line arrives here from the Oregon border, and the Paiute line comes down from Idaho.',
    stats: [['26.1 Bcf', 'gas listed as bought from Tuscarora by northern Nevada power plants in 2025'], ['8.8 Bcf', 'gas listed as bought from the Paiute pipeline in 2025'], ['December 2025', 'first gas delivered to the North Valmy plant, listed as bought from the Ruby pipeline']],
    body: '<p>The Ruby pipeline crosses the top of the state on its way from Wyoming to Oregon. Until the North Valmy plant switched to gas, no Nevada power plant listed it as a seller.</p>',
    sources: [S.e923f, S.pipes] });
  add({ id: 'coalsupply', kind: 'fuel', kindLabel: 'Coal supply', lon: -115.77, lat: 40.83, name: 'Coal arrives by rail from Wyoming and Montana', short: 'Coal by rail', tier: 3,
    lede: 'Nevada has no coal mine. The coal burned at TS Power and, until 2025, at North Valmy came by train along the railroad through Elko.',
    stats: [['1.59M tons', 'coal burned by Nevada power plants in 2025'], ['726,156 tons', 'delivered in 2025 from the Black Thunder mine in Wyoming, all to TS Power'], ['261,368 tons', 'delivered in 2025 from the Spring Creek mine in Montana, all to North Valmy']],
    body: '<p class="gcap">The marker stands for mines that are off the map to the north-east.</p>', sources: [S.e923, S.e923f] });
  add({ id: 'thackerpass', kind: 'lithium', lon: -118.055, lat: 41.708, name: 'Thacker Pass lithium mine', short: 'Thacker Pass', tier: 1,
    lede: 'A lithium mine and processing plant under construction in Humboldt County. Lithium is the main ingredient of the batteries now being added to the grid and built into electric cars.',
    stats: [['40,000 tonnes', 'lithium carbonate it is designed to make each year in its first phase'], ['Late 2027', 'when the owner aims to finish construction'], ['$2.23 billion', 'federal loan for the project'], ['38%', 'share owned by General Motors']],
    body: '<p>The owner is Lithium Americas. On this map the site falls in the area of Harney Electric Cooperative, a co-op based in Oregon.</p>', sources: [S.lac] });
  add({ id: 'silverpeak', kind: 'lithium', lon: -117.635, lat: 37.755, name: 'Silver Peak lithium operation', short: 'Silver Peak', tier: 2,
    lede: 'The only place in the United States that produces lithium at commercial scale. Salty water is pumped from underground and left in ponds for 18 to 24 months while the sun evaporates it.',
    stats: [['1', 'commercial lithium operations in the United States in the federal survey for 2026: this one'], ['About 60', 'employees']],
    body: '<p>Albemarle owns the site. The federal government does not publish how much it produces.</p>', sources: [S.alb, S.usgs] });
  add({ id: 'rhyolite', kind: 'lithium', lon: -117.86, lat: 37.81, name: 'Rhyolite Ridge (planned)', short: 'Rhyolite Ridge', tier: 3,
    lede: 'A proposed lithium and boron mine in Esmeralda County. Its owner, Ioneer, says it has its permits and is ready to build.',
    stats: [['$996 million', 'federal loan the company says it has closed']],
    body: '<p>A rare wildflower, Tiehm\'s buckwheat, grows at the site. The company has a conservation plan for it.</p><p class="gcap">The marker is approximate.</p>', sources: [S.ion] });
  add({ id: 'yucca', kind: 'info', lon: -116.485, lat: 36.94, name: 'Yucca Mountain', short: 'Yucca Mountain', tier: 2,
    lede: 'Nevada has no nuclear power plant. Federal law names this ridge as the place to bury the used fuel from reactors in other states. Nothing has been stored here.',
    stats: [['3 June 2008', 'date the US Department of Energy applied for a license to build the repository'], ['0', 'nuclear power plants in Nevada']],
    body: '<p>The State of Nevada has opposed the project. Congress later stopped funding it, and no license has been issued. Used fuel remains at the reactors that produced it.</p>',
    sources: [S.nrc, S.inv] });

  // ----------------------------------------------------------------- grid hubs
  add({ id: 'eldorado', kind: 'hub', lon: -115.005, lat: 35.805, name: 'Eldorado Valley substations', short: 'Eldorado Valley', tier: 2,
    lede: 'Three large substations sit together here: Eldorado, McCullough and Marketplace. Lines from Hoover Dam and Arizona meet lines that run on to Southern California.',
    stats: [['2.5 TWh', 'net electricity Nevada sent to other states in 2024, 5.4% of what it generated'], ['730+ miles', 'length of TransWest Express, a line under construction from Wyoming wind farms to southern Nevada'], ['Late 2023', 'when construction of that line began']],
    body: '<p>Much of the equipment here belongs to California utilities. The solar farms around the valley connect at these substations, and several are run as part of California\'s grid.</p>',
    sources: [S.prof, S.twe, OSM] });
  add({ id: 'robinson', kind: 'hub', lon: -114.974, lat: 39.28, name: 'Robinson Summit and the One Nevada Line', short: 'Robinson Summit', tier: 2,
    lede: 'Until 2014 NV Energy\'s northern and southern systems were not connected to each other. The One Nevada Line, from here to the Harry Allen substation near Las Vegas, joined them.',
    stats: [['231 miles', 'length of the line'], ['800 MW', 'what it could carry when it opened'], ['75%', 'share owned by an affiliate of LS Power. NV Energy owns 25%'], ['December 2028', 'planned start of Greenlink North, a second line from here west to Yerington']],
    sources: [S.online, S.wecc] });

  // ----------------------------------------------------------------- users
  add({ id: 'lasvegas', kind: 'city', lon: -115.14, lat: 36.19, name: 'Las Vegas and the summer peak', short: 'Las Vegas', tier: 1,
    lede: 'NV Energy\'s southern system serves Las Vegas and about seven of every ten electricity customers in Nevada. On a hot afternoon it carries about three times the power it does on a winter day.',
    stats: [['6,168 MW', 'peak demand on NV Energy\'s southern system in 2025'], ['3,073 MW', 'its highest demand in the winter of 2025'], ['1.05 million', 'customers of the southern system in 2025'], ['143,765', 'Nevada customers with rooftop solar credited on their bills in 2025']],
    body: '<p>The grid has to be built for the summer peak, so much of it stands idle the rest of the year.</p><p>Rooftop solar has been argued over for a decade. Regulators cut the credit for power sent back to the grid in 2015, and a 2017 state law restored most of it. In September 2025 regulators approved a daily charge based on each home\'s highest 15 minutes of use, which the utility estimated at about $20 a month, and, in northern Nevada, measuring solar credits every 15 minutes instead of monthly. The daily charge was later put off until 2027. A court dismissed a challenge by a solar group, which has appealed.</p>',
    sources: [S.e861, S.ktnv, S.dive, S.vs] });
  add({ id: 'strip', kind: 'user', kindLabel: 'Large customers', lon: -115.172, lat: 36.105, name: 'The Strip and the customers who left', short: 'The Strip', tier: 2,
    lede: 'Nevada law lets very large customers stop buying power from NV Energy if they pay a fee set by regulators. Some of the largest, casino companies among them, have done so. They buy power elsewhere and still use the utility\'s wires.',
    stats: [['6.6 TWh', 'electricity sold in Nevada in 2024 by sellers other than a utility, 16% of all sales. In 2009 it was 1.5 TWh'], ['$125 million+', 'exit fees regulators set in 2016 for three casino companies together: MGM Resorts, Wynn and Las Vegas Sands'], ['188', 'customers in southern Nevada that used NV Energy\'s wires for power bought elsewhere in 2025'], ['67%', 'share of voters who rejected opening the whole market to competition in 2018']],
    body: '<p>The 2018 measure, Question 3, would have ended the utility\'s monopoly for every customer. Voters had approved it in 2016 with 72%. A change to the state constitution must pass twice, and the second time it failed.</p>',
    sources: [S.prof, S.vinc, S.e861, S.q3] });
  add({ id: 'reno', kind: 'city', lon: -119.81, lat: 39.53, name: 'Reno and Sparks', short: 'Reno', tier: 1,
    lede: 'The centre of NV Energy\'s northern system. Unlike the south, the north sells more electricity to businesses and industry than to homes.',
    stats: [['2,073 MW', 'peak demand on the northern system in 2025'], ['8.8 TWh', 'electricity the northern system sold in 2025, of which 2.7 TWh to homes'], ['386,000', 'customers in 2025'], ['2.9 TWh', 'more that it delivered in 2025 to 24 large customers who buy power elsewhere']],
    sources: [S.e861] });
  add({ id: 'tric', kind: 'datacenter', lon: -119.44, lat: 39.54, name: 'Tahoe-Reno Industrial Center', short: 'Data centers', tier: 2,
    lede: 'An industrial park east of Reno that holds the Tesla battery factory and a growing group of data centers. Requests for power here are larger than anything northern Nevada\'s grid was built for.',
    stats: [['5,900 MW', 'power that 12 data center projects had asked NV Energy for by 2033, in the utility\'s 2024 plan'], ['3,820 MW', 'of that requested at this industrial park'], ['8.6 TWh', 'electricity used by about 40 data centers in Nevada in 2024, by one estimate. All sales in the state were 40.7 TWh'], ['362 MW', 'two gas plants approved in September 2026 for one data center company to power itself here']],
    body: '<p>The utility\'s 2024 plan forecast that data centers would add 24.6 TWh a year to its northern system by 2033. That system sold 8.8 TWh in 2025.</p><p>In May 2026 NV Energy filed a new plan that proposes contracts for about 4,500 MW of renewable power and 5,400 MW of batteries, and 1,200 MW of new gas plants. It also proposes that large new customers commit for the long term and pay for the plants and lines built for them. State regulators were reviewing the plan in late October 2026.</p><p>The two approved gas plants belong to Fleet Data Centers and are meant to run until utility service arrives, in two to three years.</p>',
    sources: [S.dri, S.prof, S.fleet, S.irp, S.ksnv, S.e861] });
  add({ id: 'tahoe', kind: 'user', kindLabel: 'Towns supplied from Nevada', lon: -119.977, lat: 38.94, name: 'Lake Tahoe\'s California shore', short: 'Lake Tahoe', tier: 3,
    lede: 'The California side of Lake Tahoe is wired to Nevada, not to the rest of California. In 2026 NV Energy told the local utility it would stop supplying it after May 2027.',
    stats: [['49,000', 'customers of Liberty Utilities on the California side'], ['75%', 'share of Liberty\'s power that came from NV Energy'], ['June 2027', 'when Liberty has asked California regulators to let it start buying from other sellers']],
    body: '<p>Liberty told California regulators that NV Energy cited data centers near Reno and crowded transmission lines among its reasons. Liberty\'s lines connect only to Nevada, so any replacement power must still cross NV Energy\'s system.</p>',
    sources: [S.fortune] });
  add({ id: 'goldmines', kind: 'mine', lon: -116.379, lat: 40.982, name: 'The Carlin Trend gold mines', short: 'Gold mines', tier: 2,
    lede: 'Northern Nevada\'s gold mines crush and grind rock around the clock, which takes a great deal of electricity. The largest operator, Nevada Gold Mines, owns two power plants of its own.',
    stats: [['25.8%', 'industry\'s share of Nevada\'s electricity supply in 2024'], ['83%', 'share of Wells Rural Electric\'s sales that went to industry in 2025'], ['2 plants', 'owned by Nevada Gold Mines: TS Power, which burns coal, and Western 102 near Reno, which burns gas']],
    body: '<p>The marker is at the Goldstrike mine. Two rural co-ops in mining country, Wells Rural Electric and Mt. Wheeler Power, each sell most of their electricity to industry.</p>',
    sources: [S.prof, S.e861, S.inv] });
  add({ id: 'standard', kind: 'info', lon: -119.766, lat: 39.164, name: 'Carson City: the renewable standard', short: 'Renewable standard', tier: 3,
    lede: 'A 2019 state law requires that a rising share of the electricity sold in Nevada come from renewable sources: half by 2030.',
    stats: [['34%', 'required share for 2024 through 2026'], ['42%', 'required for 2027 through 2029'], ['50%', 'required from 2030'], ['47.5%', 'share NV Energy reported for 2025']],
    body: '<p>The same law set a goal for 2050: as much electricity from sources that release no carbon dioxide as the state\'s utilities sell.</p><p>The Public Utilities Commission of Nevada enforces the standard and sets NV Energy\'s rates.</p>',
    sources: [S.rps, S.irp] });

  BROWSE.push(
    ['Natural gas', ['lenzie', 'harryallen', 'silverhawk', 'apex', 'higgins', 'clark', 'tracy', 'fortchurchill']],
    ['Coal, past and present', ['valmy', 'tspower', 'reidgardner', 'mohave']],
    ['Dams', ['hoover', 'davis']],
    ['Geothermal', ['mcginness', 'steamboat', 'dixievalley', 'dixiemeadows', 'bluemountain', 'stillwater', 'tungsten']],
    ['Sun, wind and batteries', ['gemini', 'coppermountain', 'techren', 'nso', 'crescent', 'moapa', 'eagleshadow', 'sierrasolar', 'dodgeflat', 'libra', 'ivanpah', 'springvalley']],
    ['Fuel and minerals', ['gassouth', 'gasnorth', 'coalsupply', 'thackerpass', 'silverpeak', 'rhyolite', 'yucca']],
    ['The grid', ['eldorado', 'robinson']],
    ['Who uses it', ['lasvegas', 'strip', 'reno', 'tric', 'tahoe', 'goldmines', 'standard']],
  );

  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025)
  Object.assign(AREAS, {
    'NV Energy (Nevada Power)': { lede: 'The southern half of NV Energy, which serves Las Vegas. NV Energy is owned by Berkshire Hathaway Energy.',
      stats: [['21.3 TWh', 'electricity sold in 2025'], ['1.05 million', 'customers in 2025'], ['6,168 MW', 'peak demand in 2025'], ['2.9 TWh', 'more that it delivered to 188 large customers who buy power elsewhere']],
      body: '<p>The Public Utilities Commission of Nevada sets its rates. In 2025 its own plants generated 15.3 TWh and it bought 7.9 TWh from other producers.</p><p>The southern and northern systems were first joined by a power line in 2014.</p>',
      sources: [S.e861, S.google, HIFLD] },
    'NV Energy (Sierra Pacific Power)': { lede: 'The northern half of NV Energy. It serves Reno, Carson City, Elko and most of rural northern Nevada.',
      stats: [['8.8 TWh', 'electricity sold in 2025'], ['386,000', 'customers in 2025'], ['2,073 MW', 'peak demand in 2025'], ['24.6 TWh', 'yearly growth from data centers by 2033 that the utility forecast in its 2024 plan']],
      body: '<p>Its area is drawn generously in the source: several towns inside it have their own utilities.</p>',
      sources: [S.e861, S.dri, HIFLD] },
    'Wells Rural Electric': { lede: 'A member-owned co-op in the north-east. Mines buy most of its power.',
      stats: [['0.64 TWh', 'electricity sold in 2025, of which 0.53 TWh to industry'], ['5,801', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Mt. Wheeler Power': { lede: 'A member-owned co-op based in Ely.',
      stats: [['0.56 TWh', 'electricity sold in 2025, of which 0.44 TWh to industry'], ['7,347', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Valley Electric Association': { lede: 'A member-owned co-op based in Pahrump, west of Las Vegas.',
      stats: [['0.57 TWh', 'electricity sold in 2025'], ['25,416', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Overton Power District No. 5': { lede: 'A public power district that serves Mesquite and the Moapa Valley.',
      stats: [['0.44 TWh', 'electricity sold in 2025'], ['18,965', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Harney Electric Cooperative': { lede: 'A co-op based in Oregon whose lines reach into northern Humboldt County, including the Thacker Pass lithium mine.', sources: [S.lac, HIFLD] },
    'Raft River Rural Electric Cooperative': { lede: 'A co-op based in Idaho that serves the north-east corner of Nevada.',
      stats: [['0.05 TWh', 'electricity sold in Nevada in 2025'], ['1,890', 'Nevada customers in 2025']], sources: [S.e861, HIFLD] },
  });

  // ----------------------------------------------------------------- pipeline and line cards
  Object.assign(PIPECARDS, {
    'Kern River Gas Trans Co': { lede: 'The pipeline that carries the most gas to Nevada power plants. It runs from Wyoming through Utah, past Las Vegas, to California.',
      stats: [['Interstate', 'type of pipeline'], ['109.7 Bcf', 'gas Nevada power plants listed as bought from Kern River in 2025. Bcf means billion cubic feet', 1]],
      body: '<p>The pipeline belongs to Berkshire Hathaway Energy, the company that owns NV Energy.</p>', sources: [S.e923f, S.pipes] },
    'Tuscarora Pipeline Co': { lede: 'A pipeline from the Oregon border to the Reno area. It ends near the Tracy power plant.',
      stats: [['Interstate', 'type of pipeline'], ['26.1 Bcf', 'gas Nevada power plants listed as bought from Tuscarora in 2025', 1]], sources: [S.e923f, S.pipes] },
    'Paiute Pipeline Co': { lede: 'A pipeline from the Idaho line across northern Nevada to Reno, Carson City and Lake Tahoe.',
      stats: [['8.8 Bcf', 'gas Nevada power plants listed as bought from it in 2025', 1]], sources: [S.e923f, S.pipes] },
    'Ruby Pipeline LLC': { lede: 'A pipeline across the top of Nevada, on its way from Wyoming to Oregon. In December 2025 the North Valmy plant listed it as the seller of its first gas.', sources: [S.e923f, S.pipes] },
    'Southwest Gas Corp': { lede: 'Lines of Southwest Gas, the utility that sells gas to homes and businesses in Las Vegas and much of Nevada.',
      stats: [['15.8 Bcf', 'gas Nevada power plants listed as bought from Southwest Gas in 2025', 1]], sources: [S.e923f, S.pipes] },
    'Northwest Pipeline': { lede: 'An interstate pipeline in Idaho. The Paiute line into Nevada starts from it.', sources: [S.pipes] },
    'El Paso Natural Gas Co': { lede: 'An interstate pipeline from New Mexico and Texas that crosses the Arizona corner of this map. No Nevada power plant listed it as a gas seller in 2025.', sources: [S.pipes, S.e923f] },
    'Transwestern Gas Co': { lede: 'An interstate pipeline across northern Arizona to the California line. It does not serve Nevada power plants.', sources: [S.pipes] },
    'Mojave Pipeline Co': { lede: 'An interstate pipeline across the California desert. It is outside Nevada.', sources: [S.pipes] },
    'Southern California Gas Co': { lede: 'Lines of the gas utility for Southern California.', sources: [S.pipes] },
    'California Gas Transmission Co': { lede: 'Lines of Pacific Gas and Electric, the gas utility for northern and central California.', sources: [S.pipes] },
    'Questar Southern Trails Line': { lede: 'An interstate pipeline drawn across the southern tip of Nevada in federal map data. No Nevada power plant listed it as a gas seller in 2025.', sources: [S.pipes, S.e923f] },
  });
  LINECARDS.push(
    [/Southwest Intertie|SWIP/i, { title: 'One Nevada Line', lede: 'The line that first joined NV Energy\'s northern and southern systems. It runs from Robinson Summit near Ely to the Harry Allen substation north of Las Vegas.',
      stats: [['500 kV', 'voltage'], ['231 miles', 'length'], ['800 MW', 'what it could carry when it opened'], ['January 2014', 'when it was dedicated']],
      body: '<p>An affiliate of the company LS Power owns 75% and NV Energy 25%. The line was planned as the first part of a longer project, the Southwest Intertie Project, which is the name it carries in OpenStreetMap.</p>', sources: [S.online, OSM] }],
    [/Intermountain/i, { title: 'Intermountain direct-current line', lede: 'A direct-current line from a power plant at Delta, Utah to Adelanto, California. It crosses southern Nevada and delivers no power there. The plant is off this map.',
      stats: [['500 kV', 'voltage'], ['488 miles', 'length'], ['2,400 MW', 'what it can carry']], sources: [S.hit, OSM] }],
    [/Celilo/i, { title: 'Pacific direct-current line', lede: 'A direct-current line from the Columbia River in Oregon to Los Angeles. It runs down the western edge of Nevada and delivers no power there.', sources: [OSM] }],
    [/Navajo - Crystal/i, { lede: 'A 500-kilovolt line built to bring power from the Navajo coal plant in Arizona, which closed in 2019. It still links southern Nevada to Arizona and Utah.', sources: [OSM] }],
    [/Mohave/i, { lede: 'A 500-kilovolt line built to carry power from the Mohave coal plant at Laughlin, which last ran in 2005.', sources: [S.clui, OSM] }],
    [/Harry Allen|Chuck Lenzie|Crystal/i, { lede: 'One of the 500-kilovolt lines that collect power from the gas plants and solar farms at Apex and carry it around Las Vegas.', sources: [OSM] }],
    [/Mead/i, { lede: 'A 500-kilovolt line at the Mead substation near Boulder City, where power from Hoover Dam and from Arizona is passed on.', sources: [OSM] }],
    [/Eldorado|El Dorado|McCullough|Marketplace/i, { lede: 'One of the 500-kilovolt lines that meet in the Eldorado Valley, south of Boulder City. Most were built by California utilities to bring power from Arizona, Utah and Hoover Dam.', sources: [OSM] }],
    [/Humboldt|Coyote Creek/i, { lede: 'Part of the 345-kilovolt line from the North Valmy plant north-east to Idaho. It is northern Nevada\'s link to the Idaho grid.', sources: [OSM] }],
    [/Path 15|Path 26|Windhub|Whirlwind/i, { lede: 'A 500-kilovolt line in California\'s main north-south corridor. It is outside Nevada.', sources: [OSM] }],
  );

  // ----------------------------------------------------------------- tour
  const LAY = ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'];
  const ALL = [-120.3, 34.9, -113.75, 42.1];
  TOUR.push(
    { title: 'Half gas, a third sun', text: 'Nevada generated 45 terawatt-hours of electricity in 2025. Natural gas made half and solar farms made 31%. Twenty years earlier coal made 46% and solar made none. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: LAY },
    { title: 'The gas plants at Apex', text: 'Four gas plants stand together north of Las Vegas and made 29% of Nevada\'s electricity in 2025. The brown line is the Kern River pipeline, which brings their gas from Wyoming. Nevada produces almost no gas of its own.', box: [-115.6, 35.9, -114.0, 37.2], zoom: 1.5, select: 'lenzie', layers: ['plants', 'pipes', 'lines', 'rivers'] },
    { title: 'Sun by day, batteries by night', text: 'This is the Night view. Solar farms are faded because they make nothing after dark. Gemini, the largest, has a battery that carries some of its midday output into the evening. In September 2026 Nevada had 2,104 megawatts of large batteries.', box: [-115.7, 35.5, -114.2, 36.8], zoom: 1.5, season: 'winter', select: 'gemini', layers: ['plants', 'lines'] },
    { title: 'A dam that depends on the lake', text: 'Hoover Dam made 2.7 terawatt-hours in 2025, about two-thirds of its lifetime average. Lake Mead stood at 1,040.7 feet on 12 November 2026. At 1,035 feet, 12 of the dam\'s 17 main turbines may have to stop.', box: [-115.3, 35.7, -114.2, 36.5], zoom: 2.0, select: 'hoover', layers: ['plants', 'rivers', 'lines'] },
    { title: 'Heat from underground', text: 'Northern Nevada has 26 geothermal plants, and only California makes more power this way. McGinness Hills is the largest. The plants run day and night. One proposed plant has been stopped since 2022 by the listing of a rare toad.', box: [-120.0, 38.9, -116.0, 41.3], zoom: 1.0, select: 'mcginness', layers: ['plants', 'lines'] },
    { title: 'The end of coal', text: 'North Valmy, NV Energy\'s last coal plant, took its last coal in September 2025 and now burns gas. That leaves one coal plant in Nevada, TS Power, owned by a gold mining company. Its coal comes by train from Wyoming.', box: [-118.2, 40.1, -115.4, 41.5], zoom: 1.3, select: 'valmy', layers: ['plants', 'closed', 'lines', 'pipes', 'cities'] },
    { title: 'One state, two grids', text: 'Until 2014 no power line joined Las Vegas to Reno. The One Nevada Line down the east side was the first. Two more lines, called Greenlink, are planned for 2027 and 2028 at a reported cost of $4.24 billion. They would meet here at Fort Churchill.', box: [-120.1, 38.2, -117.4, 40.1], zoom: 1.3, select: 'fortchurchill', layers: ['plants', 'lines'] },
    { title: 'Reno and the data centers', text: 'East of Reno is an industrial park with a Tesla factory and a growing group of data centers. In the utility\'s 2024 plan, data centers had asked for 5,900 megawatts by 2033. The whole northern system peaked at 2,073 megawatts in 2025.', box: [-120.2, 39.0, -118.6, 40.0], zoom: 1.8, select: 'tric', layers: ['cities', 'plants', 'lines', 'pipes'] },
    { title: 'Las Vegas, and who left', text: 'The southern system peaked at 6,168 megawatts in 2025, about three times a winter day. Some large customers, casino companies among them, have paid fees to leave the utility and buy power elsewhere. Sellers other than a utility made 16% of the electricity sales in Nevada in 2024.', box: [-115.6, 35.8, -114.6, 36.5], zoom: 2.0, select: 'strip', layers: ['cities', 'plants', 'lines'] },
    { title: 'What comes next', text: 'Dotted markers are planned plants: mostly solar farms and batteries, plus new gas units at North Valmy. State law requires half of the electricity sold to be renewable by 2030. Now explore: click any plant, line, pipeline or patch of open desert.', box: ALL, select: 'libra', layers: ['plants', 'planned', 'lines', 'pipes', 'cities'] },
  );

  FEATURES.unshift(FEATURES.splice(FEATURES.findIndex(f => f.id === 'lasvegas'), 1)[0]);   // placed first so its label wins over Hoover Dam at the first zoom
  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    kinds: { mine: ['cities', 'mine', 'Gold mines'], lithium: ['pipes', 'mine', 'Lithium mine'] },
    riverLede: 'A river. Nevada\'s only large hydropower plant is Hoover Dam on the Colorado. Small plants on the Truckee and Carson rivers add a little.',
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a power plant, a transmission line, a pipeline, or open desert.' });
})();
