/* All the words and numbers on the map. Every figure has a source link; see research/*.md for
   the full fact sheets, including what could NOT be verified. Figures are as of November 2026. */
(() => {
  const S = {
    adwrFacts: ['Arizona Water Facts (ADWR)', 'https://www.arizonawaterfacts.com/water-your-facts'],
    uaSplit: ['Univ. of Arizona, citing ADWR 2020', 'https://environment.arizona.edu/news/where-does-our-water-come'],
    sector: ['UA MAP Dashboard, citing ADWR', 'https://mapazdashboard.arizona.edu/article/arizonas-water-use-sector'],
    usbrLevels: ['Reclamation daily levels, 10 Nov 2026', 'https://www.usbr.gov/lc/region/g4000/hourly/levels.html'],
    usbrUse: ['Reclamation 2025 water accounting (provisional)', 'https://www.usbr.gov/lc/region/g4000/hourly/use_2025.pdf'],
    usbrROD: ['Reclamation, 21 Aug 2026', 'https://www.usbr.gov/newsroom/news-release/5392'],
    arc: ['CAP/ADWR briefing, 24 Aug 2026', 'https://library.cap-az.com/documents/public-information/2026-08-24-ARC-Meeting.pdf'],
    dcp: ['CAP shortage fact sheet', 'https://library.cap-az.com/documents/departments/planning/colorado-river-programs/CAP-FactSheet-DCP-May2025.pdf'],
    capFacts: ['CAP fact sheet, Apr 2026', 'https://library.cap-az.com/documents/factsheets/CAP-FactSheet-Apr2026.pdf'],
    capHist: ['CAP history', 'https://www.cap-az.com/about/history-of-cap/'],
    capDeliv: ['CAP deliveries 2025', 'https://library.cap-az.com/documents/departments/water-operations/year-to-date-by-contract-type-2025.pdf'],
    srpDaily: ['SRP daily water report, 11 Nov 2026', 'https://streamflow.watershedconnection.com/Dwr'],
    srpBrief: ['SRP briefing to ADWR, May 2026', 'https://www.azwater.gov/sites/default/files/2026-06/20260514_Drought_ICGmeeting_SRPupdate.pdf'],
    srpStorm: ['AZFamily, 6 Nov 2026', 'https://www.azfamily.com/2026/11/06/historic-arizona-fall-rain-fills-srp-reservoirs-70/'],
    ama: ['ADWR: Active Management Areas', 'https://www.azwater.gov/ama'],
    goals: ['ADWR management goals report, 2022', 'https://www.azwater.gov/sites/default/files/media/ManagementGoalsReport2022_0.pdf'],
    phxModel: ['ADWR: Phoenix AMA groundwater model', 'https://www.azwater.gov/phoenix-ama-groundwater-supply-updates'],
    subs: ['ADWR: land subsidence', 'https://www.azwater.gov/hydrology/field-services/land-subsidence-arizona'],
    willcox: ['ADWR Willcox AMA workshop, Apr 2025', 'https://azwater.gov/sites/default/files/2025-04/2025.04.08.WillcoxAMAGoalWorkshop.pdf'],
    ranegras: ['UA WRRC: Ranegras Plain becomes 8th AMA', 'https://wrrc.arizona.edu/news/ranegras-plain-becomes-arizonas-8th-ama'],
    adwrAR: ['ADWR annual report FY2025', 'https://www.azwater.gov/sites/default/files/2026-01/2025_ADWR_ANNUAL_REPORT_web_version_0.pdf'],
    census: ['Census Bureau 2025 estimates', 'https://www.census.gov/newsroom/press-releases/2026/vintage-2025-city-town-pop-estimates.html'],
    agProfiles: ['UA Extension county ag profiles (2022 Census of Ag)', 'https://www.extension.arizona.edu/sites/default/files/2025-01/Arizona-County-Agricultural-Economy-Profiles_2022.pdf'],
    asuPinal: ['ASU: shortage impacts on central Arizona farms', 'https://azwaterinnovation.asu.edu/impacts-colorado-river-water-shortages-agriculture-central-arizona'],
    wrrcInd: ['UA WRRC: rural industrial water users, Jun 2026', 'https://wrrc.arizona.edu/sites/default/files/2026-06/Rural_Industrial_Water_Users_6.28.26.pdf'],
    landdesk: ['Land Desk, Mar 2026', 'https://coyotegulch.blog/2026/03/30/the-water-footprint-of-arizonas-copper-mines-agriculture-guzzles-more-water-but-mines-are-drying-up-springs-and-streams-nonetheless-jonathan-p-thompson-landdesk-org/'],
    golfUA: ['UA: golf industry study, 2014', 'https://www.extension.arizona.edu/publication/contribution-golf-industry-arizona-economy-2014'],
    usgsFlow: ['USGS stream gauges (annual means)', 'https://waterservices.usgs.gov/'],
    natflow: ['Reclamation natural-flow record', 'https://www.usbr.gov/lc/region/g4000/NaturalFlow/NaturalFlows1906-2020_20221215.xlsx'],
    snotel: ['NRCS SNOTEL', 'https://wcc.sc.egov.usda.gov/'],
    normals: ['NOAA 1991–2020 climate normals', 'https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals'],
    tribalCAP: ['CAP: tribal water', 'https://www.cap-az.com/tribal-water'],
    entitle: ['Reclamation: Arizona priority-1 entitlements', 'https://www.usbr.gov/lc/region/g4000/contracts/entitlements/Entitlements_AZ_Priority_1.pdf'],
  };
  const C_SRP = 'var(--c-instate)', C_CAP = 'var(--c-colorado)', C_GW = 'var(--c-ground)', C_RE = 'var(--c-reclaimed)';
  const F = [];
  const add = o => F.push(o);

  // ----------------------------------------------------------------- Colorado River system
  add({ id: 'rockies', kind: 'snow', name: 'Rocky Mountain snow (off the map)', short: 'Rockies snowmelt', lon: -110.15, lat: 37.2, tier: 1,
    lede: 'Arizona\'s biggest surface-water source starts as snow hundreds of miles away in Colorado, Wyoming and Utah.',
    stats: [['~90%', 'of the Colorado\'s flow originates above Lees Ferry'], ['60%', 'of normal: peak Upper Basin snowpack, winter 2025–26'], ['4.69M AF', 'flowed into Lake Powell in water year 2025, 49% of average', 1]],
    body: '<p>Reclamation called the 2025–26 snowpack the lowest on record. Two poor winters in a row are why Lake Powell and Lake Mead both hit all-time lows in fall 2026.</p>',
    sources: [['USGS', 'https://www.usgs.gov/news/national-news-release/more-half-streamflow-upper-colorado-river-basin-originates-groundwater'], ['CAP fact sheet, Aug 2026', 'https://library.cap-az.com/documents/factsheets/CAP-FactSheet-Aug2026.pdf'], S.usbrROD] });
  add({ id: 'powell', kind: 'hydro', name: 'Lake Powell & Glen Canyon Dam', short: 'Lake Powell', lake: 'Lake Powell', lon: -111.4844, lat: 36.9375, tier: 1, zoom: .6,
    lede: 'The Upper Basin\'s savings account. Water is released from here downstream to Lake Mead.',
    pct: 27, pctNote: '6.4 million AF of 23.3 million, at 3,539 ft (10 Nov 2026)',
    stats: [['3,516.6 ft', 'all-time low since filling, 15 Sep 2026'], ['3,490 ft', 'below this the dam cannot make power'], ['6–7M AF', 'planned release in 2027, down from the usual 8.23M', 1]],
    body: '<p>Glen Canyon Dam can generate 1,320 megawatts when full. It loses roughly 3 MW for every foot the lake drops. Fall storms lifted Powell about 23 feet between mid-September and mid-November 2026.</p>',
    sources: [S.usbrLevels, S.usbrROD, ['Reclamation Powell elevation record', 'https://www.usbr.gov/uc/water/hydrodata/reservoir_data/919/csv/49.csv'], ['POWER magazine', 'https://www.powermag.com/drought-crippled-hoover-dam-glen-canyon-hydropower-plants-operating-at-substantially-decreased-capacity/']] });
  add({ id: 'leesferry', kind: 'info', name: 'Lees Ferry: where the river is divided', short: 'Lees Ferry', lon: -111.588, lat: 36.865, tier: 3,
    lede: 'The 1922 Colorado River Compact splits the river here between the Upper Basin and the Lower Basin (Arizona, California, Nevada).',
    stats: [['17.7M AF', 'average flow in the 1906–1930 data the Compact relied on'], ['12.4M AF', 'average since 2000'], ['16.5M AF', 'promised on paper: 15M to the states plus 1.5M to Mexico', 1]],
    body: '<p>The river was divided during an unusually wet stretch. This century it has carried about a quarter less than the paper promises, and every shortage rule since is an attempt to deal with that gap.</p>',
    sources: [S.natflow, ['CAP river conditions', 'https://library.cap-az.com/documents/community/cap-university/CR-Conditions-Presentation.pdf']] });
  add({ id: 'mead', kind: 'hydro', name: 'Lake Mead & Hoover Dam', short: 'Lake Mead', lake: 'Lake Mead', lon: -114.7378, lat: 36.0156, tier: 1, zoom: .7, widget: 'shortage',
    lede: 'The Lower Basin\'s reservoir. Its water level on January 1 decides how much Colorado River water Arizona gets that year.',
    pct: 27, pctNote: '7.0 million AF of 26.1 million, at 1,040 ft (10 Nov 2026)',
    stats: [['1,037.2 ft', 'all-time low, 22 Oct 2026'], ['~800,000 AF', 'evaporates from the lake each year'], ['950 ft', 'Hoover Dam stops making power'], ['895 ft', '"dead pool": nothing flows downstream']],
    sources: [S.usbrLevels, S.dcp, S.usbrROD, S.arc, ['Reclamation Mead FAQ', 'https://www.usbr.gov/lc/hooverdam/faqs/lakefaqs.html']] });
  add({ id: 'mohave', kind: 'reservoir', name: 'Lake Mohave & Davis Dam', short: 'Lake Mohave', lake: 'Lake Mohave', lon: -114.5695, lat: 35.1988, tier: 3,
    lede: 'A regulating reservoir that evens out releases from Hoover Dam.', pct: 89, pctNote: '1.66 million AF stored (10 Nov 2026)',
    body: '<p>The small downstream reservoirs are kept nearly full on purpose. The shortage shows up in Mead and Powell, not here.</p>', sources: [S.usbrLevels] });
  add({ id: 'havasu', kind: 'reservoir', name: 'Lake Havasu & Parker Dam', short: 'Lake Havasu', lake: 'Lake Havasu', lon: -114.1397, lat: 34.2964, tier: 2,
    lede: 'The pool that two giant aqueducts drink from: the Central Arizona Project heading east and California\'s Colorado River Aqueduct heading west.',
    pct: 93, pctNote: '528,700 AF stored (10 Nov 2026)', body: '<p>Havasu is held steady so the pumps always have water. Follow the turquoise line east from here: that is the CAP canal.</p>', sources: [S.usbrLevels] });
  add({ id: 'wilmer', kind: 'pump', name: 'Mark Wilmer Pumping Plant', short: 'CAP intake', lon: -114.1036, lat: 34.2889, tier: 2, zoom: .9,
    lede: 'Mile zero of the Central Arizona Project. Six 66,000-horsepower pumps lift the Colorado River 824 feet up and through a 7-mile mountain tunnel.',
    stats: [['336 mi', 'of canal from here to south of Tucson'], ['~3,000 ft', 'total lift, through 15 pumping plants'], ['$60–80M', 'a year in electricity'], ['871,797 AF', 'delivered in 2025']],
    body: '<p>Water does not flow to Phoenix and Tucson on its own. It is pushed uphill, which makes CAP one of the largest electricity users in the state. CAP was built last (deliveries began in 1985), so its water rights are junior: when the river is short, CAP is cut first.</p><p><button class="btn" data-feat="mead">See how shortage cuts work</button></p>',
    sources: [S.capFacts, S.capHist, ['CAP power fact sheet', 'https://library.cap-az.com/documents/factsheets/cap-power-portfolio-fact-sheet.pdf'], S.capDeliv] });
  add({ id: 'pleasant', kind: 'reservoir', name: 'Lake Pleasant', lon: -112.2661, lat: 33.8469, tier: 2,
    lede: 'CAP\'s battery. Colorado River water is pumped in during winter, when power is cheap, and released in summer when cities need it.',
    stats: [['811,784 AF', 'operational capacity'], ['~50,000 AF', 'evaporates per year']], body: '<p>The lake sits on the Agua Fria River but most of its water arrived by canal from 150 miles away.</p>',
    sources: [['CAP: New Waddell Dam', 'https://library.cap-az.com/documents/factsheets/CAP-FactSheet-New-Waddell-Dam.pdf'], ['CAP FAQ', 'https://www.cap-az.com/about/faq/']] });
  add({ id: 'imperial', kind: 'reservoir', name: 'Imperial Dam', lon: -114.465, lat: 32.883, tier: 2,
    lede: 'The last big fork in the river. Canals split off here to Yuma\'s farms on the Arizona side and to California\'s Imperial Valley.',
    stats: [['241,396 AF', 'used by Wellton-Mohawk district, 2025'], ['209,233 AF', 'used by Yuma County Water Users\' Assn, 2025']],
    body: '<p>Yuma-area districts hold some of the oldest rights on the river (the Water Users\' Association dates to 1901), so past shortages have passed them by. Below here the Colorado is a fraction of its former self.</p>', sources: [S.usbrUse, S.entitle] });
  add({ id: 'delta', kind: 'delta', name: 'The Colorado River Delta', short: 'River delta', lon: -114.93, lat: 32.2, tier: 2,
    lede: 'The river almost never reaches the sea. What remains at the border is diverted to Mexican farms and cities under a 1944 treaty.',
    stats: [['1.5M AF', 'a year owed to Mexico by treaty'], ['105,000 AF', '2014 "pulse flow" that briefly reconnected river and sea']],
    body: '<p>A second agreement set aside 210,000 AF over nine years for delta restoration. It expires at the end of 2026.</p>',
    sources: [['Utah State Univ. / Flessa', 'https://qanr.usu.edu/coloradoriver/news/Flessa-deliveries.php'], ['High Country News', 'https://www.hcn.org/issues/49-18/colorado-river-why-a-colorado-river-reunion-with-the-sea-isnt-a-guarantee/']] });

  // ----------------------------------------------------------------- Salt / Verde / Gila
  add({ id: 'roosevelt', kind: 'reservoir', name: 'Roosevelt Lake', lake: 'Theodore Roosevelt Lake', lon: -111.1611, lat: 33.6717, tier: 1, zoom: .9,
    lede: 'The biggest reservoir entirely inside Arizona and the heart of the Salt River Project, which has watered the Phoenix valley since 1911.',
    pct: 65, pctNote: '1.06 million AF of 1.63 million (11 Nov 2026)',
    stats: [['13,000 sq mi', 'of mountain watershed feed SRP\'s lakes'], ['765,028 AF', 'delivered by SRP in 2023'], ['53% → 70%', 'SRP storage in the first week of Nov 2026, after record storms', 1]],
    body: '<p>This system swings fast. Water year 2025 brought the lowest inflow on record (205,000 AF, 30% of median). Then one week of fall storms in 2026 added about 370,000 AF.</p>',
    sources: [S.srpDaily, S.srpBrief, S.srpStorm, ['SRP company statistics', 'https://www.srpnet.com/about/financial-data-company-stats']] });
  add({ id: 'apache', kind: 'reservoir', name: 'Apache Lake', lon: -111.3439, lat: 33.5908, tier: 3, lede: 'Second of four stair-step reservoirs on the Salt River.', pct: 94, pctNote: '230,573 AF stored (11 Nov 2026)', sources: [S.srpDaily] });
  add({ id: 'saguaro', kind: 'reservoir', name: 'Saguaro Lake', lon: -111.5356, lat: 33.5667, tier: 3, lede: 'The last Salt River reservoir before the water reaches the Phoenix canals.', pct: 97, pctNote: '67,737 AF stored (11 Nov 2026)', sources: [S.srpDaily] });
  add({ id: 'bartlett', kind: 'reservoir', name: 'Bartlett Lake', lon: -111.6317, lat: 33.8181, tier: 3, lede: 'The larger of two reservoirs on the Verde River.', pct: 97, pctNote: '172,091 AF stored (11 Nov 2026)',
    body: '<p>The Verde side is small: its two lakes hold 287,000 AF, about an eighth of SRP\'s storage, so in wet years water spills past.</p>', sources: [S.srpDaily] });
  add({ id: 'horseshoe', kind: 'reservoir', name: 'Horseshoe Lake', lon: -111.7085, lat: 33.9834, tier: 3, lede: 'Upper reservoir on the Verde River.', pct: 73, pctNote: '79,685 AF stored (11 Nov 2026)', sources: [S.srpDaily] });
  add({ id: 'granitereef', kind: 'reservoir', name: 'Granite Reef Dam: where the Salt River ends', short: 'Granite Reef', lon: -111.6915, lat: 33.5158, tier: 2, zoom: 1.5,
    lede: 'This low dam, finished in 1908, turns the entire normal flow of the Salt and Verde rivers into two canals. Downstream, the riverbed through Phoenix is usually dry.',
    stats: [['131 mi', 'of SRP canals fan out across the valley'], ['0', 'water stored here: it only diverts']],
    body: '<p>Zoom in to see the canals (thin blue lines) spreading through Tempe, Mesa, Phoenix and Glendale. Many follow routes first dug by the Hohokam about a thousand years ago.</p>',
    sources: [['Reclamation: Salt River Project', 'https://usbr.gov/projects/index.php?id=395'], ['AMWUA', 'https://www.amwua.org/blog/salt-river-bringing-life-to-a-desert-valley']] });
  add({ id: 'sancarlos', kind: 'reservoir', name: 'San Carlos Lake & Coolidge Dam', short: 'San Carlos Lake', lake: 'San Carlos Reservoir', lon: -110.5279, lat: 33.1747, tier: 2,
    lede: 'The Gila River\'s main reservoir, and a picture of how erratic it is.', pct: 19, pctNote: '168,900 AF of 875,000 (10 Nov 2026)',
    stats: [['186 AF', 'in July 2026: effectively empty'], ['168,900 AF', 'four months later, after fall storms']],
    body: '<p>Water released here is diverted to farms around Florence and Coolidge and to the Gila River Indian Community. Past those diversions the Gila is usually a dry bed.</p>',
    sources: [['USGS gauge 09469000', 'https://waterservices.usgs.gov/nwis/dv/?format=rdb&sites=09469000&period=P5D'], S.snotel] });
  add({ id: 'alamo', kind: 'reservoir', name: 'Alamo Lake', lon: -113.6022, lat: 34.2321, tier: 3, lede: 'A flood-control reservoir on the Bill Williams River. Most of its space is kept empty to catch floods.',
    stats: [['81,000 AF', 'average yearly flow of the Bill Williams below the dam']], sources: [S.usgsFlow] });
  add({ id: 'snowslide', kind: 'snow', name: 'San Francisco Peaks snowpack', short: 'Snowslide Canyon', lon: -111.651, lat: 35.342, tier: 2,
    lede: 'The wettest weather station in Arizona: 37 inches of precipitation in a normal year, five times what Phoenix gets.',
    stats: [['16.8 in', 'median peak snow-water content'], ['36.2 in', 'in the big winter of 2023'], ['14.0 in', 'in 2026']], body: '<p>Switch to <b>Winter</b> in the layers box to see where snow usually sits. That white band along the Mogollon Rim and White Mountains is the Salt and Verde rivers\' supply.</p>', sources: [S.snotel, S.normals] });
  add({ id: 'whitemtn', kind: 'snow', name: 'White Mountains snowpack', short: 'Hannagan Meadows', lon: -109.309, lat: 33.654, tier: 3,
    lede: 'Headwaters of the Salt River. Snow here in March is Phoenix tap water in July.',
    stats: [['10.2 in', 'median peak snow-water content'], ['1.4 in', 'in 2025'], ['2.4 in', 'in 2026']], body: '<p>Two winters in a row came in at a fraction of normal. Water year 2025 was SRP\'s lowest reservoir inflow on record.</p>', sources: [S.snotel, S.srpBrief] });
  add({ id: 'rim', kind: 'snow', name: 'Mogollon Rim snowpack', short: 'Mogollon Rim', lon: -111.011, lat: 34.368, tier: 3,
    lede: 'The Rim wrings moisture out of winter storms and sends it down the Verde and Salt.',
    stats: [['12.7 in', 'median peak snow-water content (Promontory)'], ['19.1 in', 'in 2023'], ['2.1 in', 'in 2026']], sources: [S.snotel] });

  // ----------------------------------------------------------------- cities
  const city = (id, name, lon, lat, tier, pop, o) => add(Object.assign({ id, kind: 'city', name, lon, lat, tier }, o, { stats: (pop ? [[pop, 'people (2025 estimate)']] : []).concat(o.stats || []), sources: [S.census].concat(o.src || []) }));
  city('phoenix', 'Phoenix', -112.074, 33.448, 1, '1,665,481', { zoom: 1.1, ama: 'Phoenix AMA',
    lede: 'The fifth-largest US city runs almost entirely on rivers: the Salt and Verde through SRP canals, and the Colorado through the CAP.',
    mix: [['Salt & Verde (SRP)', 58, C_SRP], ['Colorado (CAP)', 40, C_CAP], ['Groundwater', 2, C_GW]], mixNote: 'City wording: "nearly 60%", 40% and "about 2%"',
    stats: [['92 gal', 'per resident per day at home (2023), down from 139 in 1990']],
    body: '<p>In 1990, 80% of Phoenix lots had grass over most of the yard. Now about 7% do, according to city research cited by the state. Nearly all of the city\'s wastewater is reused, much of it to cool the Palo Verde nuclear plant.</p>',
    src: [['City of Phoenix water supply Q&A', 'https://www.phoenix.gov/waterservices/resourcesconservation/drought-information/climatechange/water-supply-q-a'], ['Phoenix conservation', 'https://waterworks.phoenix.gov/water-conservation/'], ['ADWR on Phoenix turf', 'https://www.azwater.gov/news/articles/2021-19-04']] });
  city('tucson', 'Tucson', -110.975, 32.222, 1, '548,371', { zoom: 1.1,
    lede: 'Tucson pumped its aquifer down for most of a century. Today it drinks Colorado River water that has traveled 336 miles and been soaked into the ground first.',
    stats: [['72 gal', 'per resident per day at home (2024), down from 112 in 2000'], ['144,191 AF', 'yearly CAP allocation, more than the city uses']],
    body: '<p>Because it uses less than its allocation, Tucson has been paid to leave water in Lake Mead. Click the recharge basins west of town to see how the system works.</p><p><button class="btn" data-feat="cavsarp">Tucson\'s recharge basins</button></p>',
    src: [['Tucson Water FY25 conservation report', 'https://www.tucsonaz.gov/files/sharedassets/public/v/1/water/documents/conservation/fy25-water-conservation-report.pdf'], ['KOLD', 'https://www.kold.com/2024/09/10/tucson-water-will-leave-even-more-water-lake-mead-next-year/']] });
  city('mesa', 'Mesa', -111.831, 33.415, 2, '513,656', { lede: 'Arizona\'s third-largest city leans slightly more on the Colorado than on the Salt.', mix: [['Colorado (CAP)', 53, C_CAP], ['Salt & Verde (SRP)', 40, C_SRP], ['Groundwater', 7, C_GW]], mixNote: 'Current city figures',
    body: '<p>Mesa says it has more than 555,000 AF banked underground for dry years.</p>', src: [['City of Mesa', 'https://www.mesaaz.gov/Utilities/Water-Wastewater/Mesas-Water-Reliability-and-Preparedness']] });
  city('scottsdale', 'Scottsdale', -111.9, 33.6, 2, '243,006', { lede: 'The most Colorado-dependent big city in the valley, and the one with the most golf.',
    mix: [['Colorado (CAP)', 70, C_CAP], ['Salt & Verde (SRP)', 16, C_SRP], ['Reclaimed', 10, C_RE], ['Groundwater', 4, C_GW]], mixNote: '2023 supply',
    body: '<p>Scottsdale runs a separate reclaimed-water system that irrigates 23 golf courses with treated wastewater.</p>', src: [['Scottsdale Water', 'https://scottsdaleaz.gov/water/water-quality-report'], ['KTAR', 'https://ktar.com/arizona-news/wastewater-partnership-keeps-scottsdales-golf-courses-in-the-green']] });
  city('chandler', 'Chandler', -111.841, 33.306, 2, '278,748', { lede: 'Home to Intel\'s huge Ocotillo campus, and still mostly on Salt River water.',
    mix: [['Salt & Verde (SRP)', 57, C_SRP], ['Colorado (CAP)', 37, C_CAP], ['Groundwater', 6, C_GW]], mixNote: '104,631 AF of drinking water, 2026 council figures', stats: [['112 gal', 'per resident per day at home (2024)']],
    body: '<p>Chandler also runs a separate 29,936 AF reclaimed-water system, and caps data centers at 115 gallons a day per 1,000 square feet.</p>', src: [['Chandler council slides, May 2026', 'https://public.destinyhosted.com/chanddocs/2026/CC/20260521_2291/9962_V2_Council_Work_Session_05.21.26.pdf'], S.wrrcInd] });
  city('tempe', 'Tempe', -111.94, 33.425, 3, '190,571', { lede: 'Old farmland with old water rights: Tempe gets most of its water from the Salt River.', mix: [['Salt & Verde (SRP)', 87, C_SRP], ['Groundwater', 7, C_GW], ['Colorado (CAP)', 6, C_CAP]], mixNote: 'Typical year',
    body: '<p>Cities built on land that SRP has served for a century can lean on the Salt. Newer suburbs further out mostly cannot.</p>', src: [['City of Tempe', 'https://www.tempe.gov/government/public-works/water/water-resiliency-and-drought-preparedness']] });
  city('glendale', 'Glendale', -112.186, 33.538, 3, '260,572', { lede: 'Split almost evenly between the two river systems.', mix: [['Colorado (CAP)', 44, C_CAP], ['Salt & Verde (SRP)', 43, C_SRP], ['Groundwater', 7, C_GW]], mixNote: 'City figures (other sources make up the rest)', src: [['City of Glendale', 'https://www.glendaleaz.gov/Live/City-Services/Water-Services/Water-Conservation-and-Sustainable-Living/Drought-Preparedness']] });
  city('gilbert', 'Gilbert', -111.789, 33.353, 3, '287,285', { lede: 'A farm town turned suburb that recycles a notable share of its water.', mix: [['Colorado (CAP)', 41, C_CAP], ['Salt & Verde (SRP)', 40, C_SRP], ['Reclaimed', 15, C_RE], ['Groundwater', 4, C_GW]], mixNote: '2025 town figures', src: [['Town of Gilbert', 'https://www.gilbertaz.gov/departments/public-works/water/water-resources/water-supply']] });
  city('buckeye', 'Buckeye', -112.58, 33.37, 3, '125,445', { lede: 'One of the fastest-growing cities in the country (up from 91,000 in 2020), on the far edge of the valley beyond the old canal network.',
    body: '<p>Growth out here has leaned on groundwater. In 2023 the state stopped approving new subdivisions in the Phoenix area that rely on groundwater alone, which lands hardest on edge cities like this one.</p><p><button class="btn" data-ama="Phoenix AMA">About the Phoenix groundwater area</button></p>', src: [S.phxModel] });
  city('yuma', 'Yuma', -114.628, 32.693, 2, '105,227', { lede: 'The driest city on the map, with 3.3 inches of rain a year, sitting on the most reliable water in Arizona.',
    body: '<p>In Yuma County, farms use about 97% of the water and the city uses the rest.</p><p><button class="btn" data-feat="yumafarm">Yuma\'s farms</button></p>', src: [S.normals, ['UA WRRC Yuma factsheet', 'https://www.wrrc.arizona.edu/sites/default/files/2026-02/Yuma_Factsheet_02_2026.pdf']] });
  city('flagstaff', 'Flagstaff', -111.651, 35.198, 2, '77,260', { lede: 'At 7,000 feet, Flagstaff gets 20.5 inches of precipitation a year but has no big river. It relies on wells, a small lake and conservation.',
    stats: [['under 90 gal', 'per person per day, down from 189 in 1999']], src: [S.normals, ['The Municipal', 'https://www.themunicipal.com/2024/06/flagstaff-arizona-recognized-for-water-conservation-efforts']] });
  city('prescott', 'Prescott', -112.468, 34.54, 2, '48,420', { lede: 'A groundwater town. The Prescott area was put under state management in 1980 with a goal of pumping no more than nature replaces by 2025.',
    body: '<p>It did not get there. ADWR\'s last assessment found the Prescott area still in long-term overdraft.</p>', src: [S.goals] });
  city('casagrande', 'Casa Grande', -111.757, 32.879, 3, '69,753', { lede: 'A growing city in the middle of Pinal County\'s farm belt (up from 54,000 in 2020).', body: '<p><button class="btn" data-feat="pinal">Pinal County farms and the shortage</button></p>' });
  city('havasucity', 'Lake Havasu City', -114.322, 34.484, 3, '59,358', { lede: 'A river town with 4.2 inches of rain a year. Like other communities along the Colorado, it draws directly from the river.', src: [S.normals] });
  city('sierravista', 'Sierra Vista', -110.303, 31.554, 3, '', { lede: 'The city and Fort Huachuca pump from the same aquifer that keeps the San Pedro River flowing.',
    body: '<p>In 2023 a court quantified the federal water right for the San Pedro conservation area as minimum groundwater levels at nine monitoring wells, an unusual way to protect a river.</p>', src: [['Arizona Daily Star', 'https://thisistucson.com/news/article_711ced06-58f9-11ee-ba93-43e7c385cb70.html']] });
  city('kingman', 'Kingman', -114.053, 35.189, 3, '', { lede: 'Kingman\'s only water source is the Hualapai Valley aquifer, which large new farms began tapping in the 2010s.',
    body: '<p>USGS modeling projects water levels at Kingman-area wells falling 87 to 128 feet by 2050. In December 2022 the state barred new irrigated acreage here, its first such move in 40 years.</p>', src: [['USGS SIR 2021-5077', 'https://pubs.usgs.gov/publication/sir20215077'], S.adwrAR] });
  add({ id: 'rioverde', kind: 'town', name: 'Rio Verde Foothills', lon: -111.68, lat: 33.72, tier: 3,
    lede: 'The neighborhood that had its water cut off. Homes here had no utility and relied on water trucked from a Scottsdale standpipe.',
    body: '<p>On January 1, 2023, Scottsdale closed the standpipe to haulers serving the area. More than 1,000 residents were affected. It took a state law and three years before a private utility\'s hauling station opened in January 2026.</p><p>The area was built through a loophole: split land into five lots or fewer and the state\'s 100-year water supply rule does not apply.</p>',
    sources: [['AZFamily', 'https://www.azfamily.com/2023/01/02/city-scottsdale-cuts-off-rio-verde-foothills-residents-water-supply/'], ['Fox 10', 'https://www.fox10phoenix.com/news/rio-verde-foothills-water-supply-woes-end-new-water-station-opens']] });
  add({ id: 'reclaim', kind: 'reclaim', name: 'Recycled wastewater', short: '91st Ave plant', lon: -112.25, lat: 33.39, tier: 3,
    lede: 'What goes down Phoenix-area drains is treated here and used again: for a nuclear plant, for farms, and for wetlands along the Salt River.',
    stats: [['~264,000 AF', 'of wastewater reused statewide per year (2022)'], ['119,000 AF', 'of it irrigates crops']],
    body: '<p>Reclaimed water is the only Arizona water source that grows with population.</p>', sources: [['Arizona Republic', 'https://www.yahoo.com/news/arizona-recycles-more-water-most-120130741.html'], ['UA WRRC', 'https://wrrc.arizona.edu/sites/wrrc.arizona.edu/files/2023-05/arroyo-factsheet-2023-reclaimed-water-agriculture-5-31-23.pdf']] });

  // ----------------------------------------------------------------- farms
  add({ id: 'yumafarm', kind: 'farm', name: 'Yuma: America\'s winter salad bowl', short: 'Yuma farms', lon: -114.6, lat: 32.6, tier: 1, zoom: 1.3,
    lede: 'In peak December weeks, 80 to 95% of the leafy greens shipped in the US come from these fields.',
    stats: [['201,881', 'acres of cropland, all irrigated'], ['97%', 'of the county\'s water goes to farms'], ['1901', 'priority date of the oldest big district: first in line on the river', 1]],
    body: '<p>Yuma farmers have shifted from thirsty full-season crops to winter vegetables. Water delivered per acre is down about 18% since 1975 while vegetable acreage is up roughly sixfold.</p><p>Because their rights are senior, these districts have not been cut in past shortages. That is expected to start changing in 2027.</p>',
    sources: [['UA WRRC Yuma factsheet', 'https://www.wrrc.arizona.edu/sites/default/files/2026-02/Yuma_Factsheet_02_2026.pdf'], S.agProfiles, ['UA CLIMAS', 'https://www.climas.arizona.edu/sites/climas.arizona.edu/files/pdfacasestudyinefficiency.pdf'], S.arc] });
  add({ id: 'wellton', kind: 'farm', name: 'Wellton-Mohawk Valley', short: 'Wellton-Mohawk', lon: -114.0, lat: 32.7, tier: 3,
    lede: 'A ribbon of fields along the dry lower Gila, watered by a canal from the Colorado.', stats: [['241,396 AF', 'of Colorado River water used in 2025']],
    sources: [S.usbrUse] });
  add({ id: 'crit', kind: 'farm', kindLabel: 'Tribal farms', name: 'Colorado River Indian Tribes', short: 'CRIT farms', lon: -114.35, lat: 33.95, tier: 2,
    lede: 'The single largest water right on Arizona\'s side of the river, and the oldest.',
    stats: [['662,402 AF', 'yearly right, dating to 1865–1874'], ['330,472 AF', 'actually consumed in 2025']],
    body: '<p>That right is nearly a quarter of Arizona\'s whole Colorado River share. The tribes fallowed fields in 2020–22 to leave 150,000 AF in Lake Mead, and can now lease water off the reservation.</p>', sources: [S.entitle, S.usbrUse, ['Ten Tribes Partnership', 'https://tentribespartnership.org/tribes/colorado-river-indian-tribes/']] });
  add({ id: 'pinal', kind: 'farm', name: 'Pinal County: first to be cut', short: 'Pinal farms', lon: -111.75, lat: 32.85, tier: 1, zoom: 1.0,
    lede: 'The largest farm county in Arizona, and home to the first farms to lose their Colorado River water when shortage was declared.',
    stats: [['295,876', 'acres of cropland'], ['100%', 'of CAP farm water gone since 2023'], ['−30%', 'cultivated land in one large district, 2020–2024', 1]],
    body: '<p>CAP\'s farm water was lowest priority. It was cut 65% in 2022 and to zero in 2023. In the Maricopa-Stanfield district, satellite data show alfalfa down 48% and corn down 70%. Farmers who kept going turned back to wells, in a valley where pumping has already sunk the land by up to 18 feet.</p><p>Next door, the Ak-Chin community, with senior tribal rights, stayed about 99% planted.</p>',
    sources: [S.asuPinal, S.agProfiles, S.subs] });
  add({ id: 'westvalley', kind: 'farm', name: 'West Valley farms', short: 'West Valley', lon: -112.62, lat: 33.4, tier: 3,
    lede: 'Fields on the edge of metro Phoenix, steadily turning into rooftops.',
    stats: [['264,018', 'acres of cropland in Maricopa County'], ['150 AF', 'of housing credit per acre retired under a 2025 law']],
    body: '<p>A house uses less water than the same land in alfalfa. Arizona\'s 2025 "ag-to-urban" law lets Phoenix-area farmers retire fields and hand the groundwater savings to home builders.</p>',
    sources: [S.agProfiles, ['SB 1611 summary', 'https://www.azleg.gov/legtext/57leg/1R/summary/S.1611NR_ASPASSEDCOW.DOCX.htm']] });
  add({ id: 'gilabend', kind: 'farm', name: 'Gila Bend', lon: -112.72, lat: 32.95, tier: 3, lede: 'Groundwater-fed fields along the old Gila channel. The state held a meeting in 2024 about regulating pumping here; nothing has been decided.',
    sources: [['ADWR', 'https://www.azwater.gov/proposed-gila-bend-groundwater-basin-ama']] });
  add({ id: 'harquahala', kind: 'farm', name: 'Harquahala Valley', lon: -113.15, lat: 33.45, tier: 3,
    lede: 'A desert basin where irrigation has been frozen at its early-1980s footprint. No new acres may be irrigated.', body: '<p>The CAP canal runs right through, and cities have bought land here for the right to move its groundwater to Phoenix.</p>', sources: [S.ama] });
  add({ id: 'fondomonte', kind: 'farm', kindLabel: 'Export hay', name: 'Ranegras Plain & the Saudi alfalfa farms', short: 'Ranegras / Fondomonte', lon: -113.75, lat: 33.75, tier: 2,
    lede: 'A Saudi-owned company, Fondomonte, grows alfalfa here and ships it home to feed dairy cows. Until 2026, nobody limited or even measured the pumping.',
    stats: [['200+ ft', 'drop in groundwater levels since the 1980s'], ['~10,000', 'acres Fondomonte bought near Vicksburg in 2014'], ['Jan 2026', 'the basin became Arizona\'s 8th managed groundwater area', 1]],
    body: '<p>The state ended Fondomonte\'s cheap leases of state land in nearby Butler Valley in 2024, and the Attorney General is suing over the remaining pumping, which the suit puts at about 31,000 AF in 2023.</p><p>A caveat on the story: University of Arizona researchers estimate over 90% of Arizona-grown alfalfa is fed to livestock inside the state. Exports are the exception.</p>',
    sources: [S.ranegras, ['Fronteras Desk', 'https://fronterasdesk.org/node/1873581'], ['AZ Attorney General (suit)', 'https://www.azag.gov/press-release/attorney-general-mayes-sues-fondomonte-violating-public-nuisance-law-through'], ['AZ Attorney General', 'https://www.azag.gov/press-release/attorney-general-mayes-wins-ruling-keep-public-nuisance-lawsuit-against-fondomonte'], ['UA Extension az2121', 'https://extension.arizona.edu/sites/default/files/2025-05/az2121_How-much-of-Arizonas-agricultural-production-stays-in-state.pdf']] });
  add({ id: 'willcox', kind: 'dairy', name: 'Willcox: the fastest-sinking basin', short: 'Willcox', lon: -109.85, lat: 32.15, tier: 1, zoom: 1.0,
    lede: 'No river, no canal. Everything green here is pumped from an aquifer that is being drained far faster than it refills.',
    stats: [['108,426 AF', 'pumped each year beyond what refills'], ['~110,000 AF', 'a year used by one dairy company, about what Tucson homes use'], ['11.5 ft', 'how far the ground has sunk in the worst spots'], ['71', 'monitored wells gone dry']],
    body: '<p>Look for the round fields: center-pivot sprinklers. For decades there were no pumping rules at all. The state imposed a management area in January 2025, and the dairy owner agreed in a settlement to fallow 2,000 acres and pay $11 million toward neighbors\' wells.</p>',
    sources: [S.willcox, ['Circle of Blue', 'https://www.circleofblue.org/2022/world/unsafe-yield/'], ['AZ Luminaria', 'https://azluminaria.org/2026/01/13/arizona-strikes-agreement-with-dairy-farm-to-limit-groundwater-pumping-in-willcox/'], ['Arizona Daily Star', 'https://tucson.com/news/local/environment/arizona-groundwater-subsidence-fissures-cracking/article_8ce612da-9b64-11ee-855e-b333f3d21290.html']] });
  add({ id: 'douglas', kind: 'farm', name: 'Douglas basin', lon: -109.68, lat: 31.68, tier: 3, lede: 'Residents here voted in 2022 to bring state groundwater management on themselves, the first time that had happened in Arizona.', sources: [['ADWR Douglas AMA', 'https://www.azwater.gov/sites/default/files/2024-06/DAMA_FactSheet_6-2024.pdf']] });
  add({ id: 'safford', kind: 'farm', name: 'Safford Valley', lon: -109.75, lat: 32.85, tier: 3, lede: 'Cotton and hay along the upper Gila, one of the few places Arizona farms still take water straight from a free-flowing river.',
    stats: [['39,511', 'acres of cropland in Graham County'], ['321,000 AF', 'average yearly flow of the Gila entering the valley']], sources: [S.agProfiles, S.usgsFlow] });
  add({ id: 'hualapai', kind: 'farm', name: 'Hualapai Valley', lon: -113.95, lat: 35.45, tier: 3, lede: 'Nut orchards and hay planted since the 2010s on the aquifer Kingman depends on.',
    body: '<p>The state froze irrigation at its current footprint in December 2022. USGS found pumping here comes "overwhelmingly from storage": water that will not come back on any human timescale.</p>', sources: [['USGS SIR 2021-5077', 'https://pubs.usgs.gov/publication/sir20215077'], S.adwrAR] });

  // ----------------------------------------------------------------- groundwater extras
  add({ id: 'eloy', kind: 'well', name: 'Eloy: where the ground sank', short: 'Eloy subsidence', lon: -111.55, lat: 32.75, tier: 2,
    lede: 'Pump enough water out of the ground and the ground itself drops. Land near Eloy has fallen more than 18 feet since the early 1900s.',
    stats: [['3,400+ sq mi', 'of Arizona has measurable subsidence'], ['167 mi', 'of earth fissures mapped']], body: '<p>Fissures are cracks that open at the edges of sinking basins. They have split roads, canals and house lots. Subsidence slowed sharply around Phoenix and Tucson after river water replaced pumping.</p>', sources: [S.subs, ['ADWR: subsidence monitoring', 'https://www.azwater.gov/node/847']] });
  add({ id: 'cavsarp', kind: 'recharge', name: 'Tucson\'s recharge basins', short: 'Clearwater recharge', lon: -111.23, lat: 32.22, tier: 2,
    lede: 'Tucson does not put Colorado River water straight into pipes. It pours it into desert basins, lets it soak down to the aquifer, and pumps the blend back out.',
    stats: [['71,947 AF', 'soaked in during 2022'], ['150+ ft', 'rise in local groundwater levels since 2000']],
    body: '<p>Storing water underground means nothing evaporates. Statewide, more than 14.6 million AF of storage credits have been created this way since the program began (a running total; some has since been pumped back out).</p>',
    sources: [['Tucson Water', 'https://content.govdelivery.com/accounts/AZTUCSON/bulletins/38e045e'], S.adwrAR] });

  // ----------------------------------------------------------------- industry
  add({ id: 'tsmc', kind: 'fab', name: 'TSMC Arizona', lon: -112.158, lat: 33.775, tier: 2,
    lede: 'Making computer chips takes ultra-pure water, and a lot of it. TSMC\'s Phoenix campus takes in 4.75 million gallons a day.',
    stats: [['~5,300 AF', 'a year at that rate'], ['65%', 'recycled on site today; 90% is the goal']],
    body: '<p>For scale: that intake would irrigate roughly 900 acres of alfalfa. Arizona has 280,000 acres of alfalfa.</p>', sources: [['AZFamily, Aug 2026', 'https://www.azfamily.com/2026/08/24/arizonas-chip-footprint-grows-tsmcs-water-demand-sparks-questions/'], ['Axios Phoenix', 'https://www.axios.com/local/phoenix/2025/08/27/tsmc-industrial-water-reclamation-plant-phoenix']] });
  add({ id: 'intel', kind: 'fab', name: 'Intel Ocotillo', lon: -111.886, lat: 33.239, tier: 2,
    lede: 'Intel has made chips in Chandler since 1980. The campus withdrew about 10,400 AF of fresh water in 2021, by the company\'s own figures.',
    body: '<p>Intel and the city have run a shared brine-recycling plant since 1995, and Intel funds river restoration projects to offset what it consumes. Those numbers are company-reported.</p>', sources: [['The Register', 'https://www.theregister.com/2022/07/13/intels_net_positive_water_use/'], ['Intel water report', 'https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2026-07/water-restoration-progress-report.pdf']] });
  add({ id: 'datacenters', kind: 'datacenter', name: 'Data centers', short: 'Data centers', lon: -111.65, lat: 33.33, tier: 2,
    lede: 'Arizona has more than 100 data centers, most of them around Phoenix. How much water they use is disputed, because nobody is required to report it.',
    stats: [['~1,200 AF', 'a year for cooling, Phoenix area (one 2025 estimate)'], ['~10,000 AF', 'if you add water used to generate their electricity'], ['0.1%', 'of Arizona\'s 7 million AF, counting the electricity. The same study projects cooling use growing nearly tenfold by the early 2030s.', 1]],
    body: '<p>They are spread across the Phoenix area, including Mesa, Chandler and Goodyear. This marker sits on one cluster, in southeast Mesa, where Google and Meta have sites.</p><p>Google\'s and Meta\'s deals with Mesa allow up to 4 million gallons a day each, but those are ceilings, not meter readings. Newer centers are moving to air cooling, which saves water and burns more power.</p><p>ASU\'s Kyl Center disputes the alarm, noting that Phoenix-area farms use about 580,000 AF a year.</p>',
    sources: [['Cronkite News, Sep 2026', 'https://cronkitenews.azpbs.org/2026/09/11/data-centers-water-colorado-river/'], ['Phoenix New Times (Ceres study)', 'https://www.phoenixnewtimes.com/news/phoenix-data-center-water-use-surge-nearly-tenfold-study-22762054/'], ['Grist', 'https://grist.org/technology/arizona-water-data-centers-semiconducters'], S.wrrcInd] });
  add({ id: 'paloverde', kind: 'nuclear', name: 'Palo Verde nuclear plant', short: 'Palo Verde', lon: -112.865, lat: 33.389, tier: 1,
    lede: 'One of the largest power plants in the US sits in a desert with no river. It is cooled entirely with treated sewage from Phoenix-area cities.',
    stats: [['~75,000 AF', 'of treated wastewater a year'], ['$300/AF', 'contract price for 2025, up from $53 in 2010']], body: '<p>As one local water group puts it: in Arizona, flushing keeps the lights on.</p>',
    sources: [S.wrrcInd, ['AMWUA', 'https://amwua.org/blog/arizona-where-flushing-keeps-the-lights-on'], ['Rose Law Group Reporter', 'https://roselawgroupreporter.com/2022/05/huge-nuclear-plant-in-arizona-desert-seeking-new-sources-of-water-it-uses-23b-gallons-per-year/']] });
  add({ id: 'morenci', kind: 'mine', name: 'Morenci copper mine', short: 'Morenci mine', lon: -109.35, lat: 33.07, tier: 2,
    lede: 'One of the largest copper mines in North America. Arizona produces most of the nation\'s copper, and it takes water to do it.',
    stats: [['~14,000 AF', 'a year at Morenci (ADWR, via Land Desk)'], ['55,659 AF', 'a year across the largest mines in a 2010 state study: under 1% of state use']],
    body: '<p>Mines use far less water than farms, but they pump in remote places where a spring or stream may have no other source.</p>', sources: [S.landdesk, S.wrrcInd] });
  add({ id: 'sierrita', kind: 'mine', name: 'Sierrita mine', lon: -111.13, lat: 31.87, tier: 3, lede: 'A copper mine south of Tucson that reported pumping 22,490 AF of groundwater in 2023.', sources: [S.landdesk] });
  add({ id: 'resolution', kind: 'mine', name: 'Resolution Copper (proposed)', short: 'Resolution (proposed)', lon: -111.07, lat: 33.3, tier: 3,
    lede: 'A proposed deep mine at Oak Flat near Superior. The company estimates it would use 15,700 to 20,000 AF a year; critics say far more.', sources: [['Resolution DEIS', 'https://www.resolutionmineeis.us/sites/default/files/deis/resolution-deis-executive-summary.pdf'], S.wrrcInd] });
  add({ id: 'springerville', kind: 'power', name: 'Springerville power plant', short: 'Springerville plant', lon: -109.165, lat: 34.318, tier: 3,
    lede: 'A coal plant that withdrew about 9,700 AF in 2022. Steam power plants need cooling water; solar panels and wind turbines need almost none.', sources: [['Trout Unlimited / EIA data', 'https://tu.org/wp-content/uploads/2024/09/AZ-fossil-fuel_water-report.pdf']] });
  add({ id: 'golfscott', kind: 'golf', name: 'Golf in the desert', short: 'Scottsdale golf', lon: -111.84, lat: 33.68, tier: 2 });

  // golf + farm math shared text
  const golfCard = {
    lede: 'Arizona has about 370 golf courses. Every green dot on the map is one.',
    stats: [['~2%', 'of the state\'s water goes to golf'], ['167,397 AF', 'used on 45,000 acres (2014 survey)'], ['4.1 AF', 'per acre of turf per year, about the same as a hay field'], ['~1/3', 'of golf water is reclaimed wastewater']],
    body: '<p>Golf is visible and easy to resent, but it is small next to farming. All of it together uses about as much as 28,000 acres of alfalfa; Arizona grows 280,000.</p><p>State limits exist for courses that use groundwater, but an Arizona Republic investigation found 30 to 50% of courses exceeded them in a typical year, with two enforcement actions in two decades.</p>',
    sources: [S.golfUA, S.wrrcInd, ['Arizona State Law Journal', 'https://arizonastatelawjournal.org/2022/10/23/the-battle-over-arizona-golf-courses-most-valuable-resource-water/'], ['Locations: OpenStreetMap', 'https://www.openstreetmap.org/copyright']],
  };
  Object.assign(F[F.length - 1], golfCard);

  // ----------------------------------------------------------------- lines & areas
  const riverStyle = {
    Colorado: { w: 6.5, reaches: [{ test: (lon, lat) => lat < 32.49, dry: true }, { test: (lon, lat) => lat < 32.72, w: 1.2 }, { test: (lon, lat) => lat < 32.88, w: 2.4 }, { test: (lon, lat) => lat < 34.29, w: 5 }] },
    'San Juan': { w: 2.4 }, Virgin: { w: 1.6 }, 'Little Colorado': { w: 1.4 },
    Salt: { w: 2.8, reaches: [{ test: lon => lon < -111.69, dry: true }] },
    Verde: { w: 2.2 }, Black: { w: 1.6 }, White: { w: 1.4 },
    Gila: { w: 2, reaches: [{ test: lon => lon < -113.0, dry: true }, { test: lon => lon < -112.3, w: 1.2 }, { test: lon => lon < -111.25, dry: true }] },
    'Bill Williams': { w: 1.3 }, 'San Pedro': { w: 1 },
  };
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const rivers = {
    Colorado: rv('The river that seven states and Mexico depend on. Arizona is entitled to 2.8 million AF a year but used only 1.91 million in 2025.',
      [['2.8M AF', 'Arizona\'s yearly share on paper'], ['1.91M AF', 'actually used in 2025'], ['12.4M AF', 'the river\'s average natural flow since 2000'], ['760,000 AF', 'Arizona\'s required cut in 2027']],
      '<p>The line on the map gets thinner as it goes south because that is what happens to the river: canals take it away piece by piece until almost nothing crosses into Mexico\'s delta.</p><p>Half of Arizona\'s share is used by farms and tribes along the river. The other half is pumped to Phoenix and Tucson through the CAP.</p>', [S.usbrUse, S.natflow, S.usbrROD, ['ADWR allocation', 'https://www.azwater.gov/crm/colorado-river-allocation']]),
    Salt: rv('Phoenix exists because of this river. Four dams store its flow, and at Granite Reef all of it is turned into canals.',
      [['606,000 AF', 'average yearly flow into Roosevelt Lake since 1914'], ['423,000 AF', 'average since 2000']], '<p>West of Granite Reef the map shows a dotted brown line: the riverbed through Phoenix, which carries water only in floods.</p>', [S.usgsFlow, ['Reclamation', 'https://usbr.gov/projects/index.php?id=395']]),
    Verde: rv('One of Arizona\'s last rivers that still flows year-round for most of its length. It joins the Salt just above Phoenix.', [['390,000 AF', 'average yearly flow above Horseshoe Lake']], '', [S.usgsFlow]),
    Gila: rv('Once navigable by flatboat across the whole state. Today it is dammed and diverted in the east, and in most years almost none of its water reaches the Colorado.',
      [['321,000 AF', 'average yearly flow entering the Safford Valley'], ['23,000 AF', 'average reaching Yuma since 2000']], '<p>The dotted stretches are usually dry sand. The short flowing reach west of Phoenix is mostly treated wastewater and farm runoff.</p>', [S.usgsFlow]),
    'Little Colorado': rv('Drains the high plateau of northeastern Arizona into the Grand Canyon. It runs muddy in floods and thin or dry in between.', [['146,000 AF', 'average yearly flow near Cameron']], '', [S.usgsFlow]),
    'San Pedro': rv('The last major undammed desert river in the Southwest, and a migratory-bird highway. It has lost over half of its year-round length.', [['35,000 AF', 'average yearly flow at Charleston, long-term'], ['22,000 AF', 'average since 1991']], '<p>The river lives on groundwater seeping into its bed, the same groundwater that nearby wells pump.</p>', [S.usgsFlow]),
    'Santa Cruz': rv('Tucson\'s river. It was pumped dry by the mid-20th century, and the stretches that flow today run mostly on treated wastewater.', [['16,000 AF', 'average yearly flow near Nogales, long-term'], ['5,500 AF', 'average since 2000']], '', [S.usgsFlow]),
    'Bill Williams': rv('A small desert river that reaches the Colorado at Lake Havasu, controlled by Alamo Dam.', [['81,000 AF', 'average yearly flow below Alamo Dam']], '', [S.usgsFlow]),
    _default: rv('Most Arizona streams run only after storms. For scale, every river that starts inside Arizona adds up to a small fraction of the Colorado.', [], '', [S.usgsFlow]),
  };
  const canals = {
    cap: { title: 'Central Arizona Project canal', lede: 'A 336-mile artificial river that carries the Colorado uphill to Phoenix and Tucson. More than 80% of Arizonans live in the three counties it serves.',
      stats: [['~1.5M AF', 'a year when the river is healthy'], ['871,797 AF', 'delivered in 2025'], ['46%', 'of CAP water is allocated to tribes'], ['$4B+', 'to build; completed 1993']],
      body: '<p>The canal slopes just 5 inches per mile. Between slopes, 15 pumping plants lift the water nearly 3,000 feet in total. About 4.5% is lost to evaporation and seepage along the way.</p>', sources: [S.capFacts, S.capHist, S.capDeliv, S.tribalCAP, ['Route: CAP GIS', 'https://services1.arcgis.com/osPHyJW29upTLmlM/arcgis/rest/services/CAP_Canal/FeatureServer/0']] },
    srp: { lede: 'One of the Salt River Project canals that spread the Salt and Verde rivers across the Phoenix valley by gravity.', stats: [['131 mi', 'of main canals'], ['765,028 AF', 'delivered in 2023']],
      body: '<p>These canals turned the valley into farmland a century ago. As farms became subdivisions, the same water rights and the same canals now supply city treatment plants.</p>', sources: [['SRP', 'https://www.srpnet.com/about/about-srp'], ['AMWUA', 'https://www.amwua.org/blog/salt-river-bringing-life-to-a-desert-valley']] },
    'Colorado River Aqueduct': { lede: 'California\'s straw. This aqueduct carries Colorado River water 242 miles west from Lake Havasu to Los Angeles and San Diego.', stats: [['440,000 AF', 'California\'s cut in 2027, vs. Arizona\'s 760,000']],
      body: '<p>California holds older rights than CAP. That is why Arizona, with a smaller share of the river, takes the larger cut.</p>', sources: [S.usbrROD] },
    _default: { lede: 'An irrigation canal carrying river water to farm fields.', body: '<p>Arizona farming is canal farming: almost none of the state\'s cropland can grow anything on rain alone.</p>', sources: [['Canal routes: CAP GIS', 'https://services1.arcgis.com/osPHyJW29upTLmlM/arcgis/rest/services/Colorado_River_Basin_Canals/FeatureServer']] },
  };
  const amaBase = '<p>In an Active Management Area you need a state right to pump, big wells are metered, and new subdivisions must prove a 100-year water supply.</p>';
  const amas = {
    'Phoenix AMA': { ama: 'Phoenix AMA', lede: 'The most populous managed groundwater area. Its legal goal was "safe yield" by 2025: pump no more than is replaced. It missed.',
      stats: [['4.86M AF', 'of groundwater demand the state\'s model says cannot be met over 100 years'], ['2023', 'state stopped approving new groundwater-only subdivisions']],
      body: amaBase + '<p>The shortfall is about 4% of projected demand, but the 100-year rule means any shortfall blocks new approvals. Cities with existing designations keep growing. In April 2026 a judge ruled the state adopted its standards improperly; that fight continues.</p>', sources: [S.phxModel, S.goals, ['Kyl Center explainer', 'https://morrisoninstitute.asu.edu/sites/default/files/kyl_center_phoenix_ama_groundwater_model_explainer_062023.pdf'], ['Gallagher & Kennedy', 'https://www.gblaw.com/legal-alert-the-superior-court-granted-hbacas-motion-for-summary-judgment-in-the-homebuilders-lawsuit-against-adwr/']] },
    'Tucson AMA': { lede: 'The one original management area judged to be in long-term balance, thanks to Colorado River water being recharged into the aquifer.', body: amaBase + '<p>That balance depends on CAP deliveries continuing.</p>', sources: [S.goals, S.ama] },
    'Pinal AMA': { lede: 'A farming area with a different goal: keep agriculture going as long as feasible while saving some groundwater for later.', body: amaBase + '<p>With CAP farm water gone since 2023, pumping here is rising again.</p><p><button class="btn" data-feat="pinal">Pinal farms and the shortage</button></p>', sources: [S.ama, S.asuPinal] },
    'Prescott AMA': { lede: 'A small highland area with no imported water. Still in long-term overdraft as of the state\'s last assessment.', body: amaBase, sources: [S.goals] },
    'Santa Cruz AMA': { lede: 'A narrow river valley along the Mexican border, managed to keep the water table from falling.', body: amaBase, sources: [S.ama] },
    'Douglas AMA': { lede: 'Created in December 2022 by a vote of local residents, the first time Arizonans chose groundwater regulation at the ballot box.', body: amaBase, sources: [['ADWR', 'https://www.azwater.gov/sites/default/files/2024-06/DAMA_FactSheet_6-2024.pdf']] },
    'Willcox AMA': { lede: 'Designated in January 2025, the first management area imposed by the state rather than created by law or local vote.', stats: [['108,426 AF', 'yearly overdraft'], ['50%', 'draft goal: cut overdraft by this much by 2075']], body: amaBase + '<p><button class="btn" data-feat="willcox">The Willcox story</button></p>', sources: [S.willcox, ['ADWR', 'https://www.azwater.gov/node/5934']] },
    'Ranegras Plain AMA': { lede: 'Arizona\'s newest managed area, designated January 2026 after water levels fell more than 200 feet.', body: amaBase + '<p>Only land irrigated in the five years before November 2025 may keep being irrigated.</p><p><button class="btn" data-feat="fondomonte">Ranegras and the Saudi alfalfa farms</button></p>', sources: [S.ranegras, ['ADWR', 'https://www.azwater.gov/node/6223']] },
    _default: { lede: 'A state-managed groundwater area.', body: amaBase, sources: [S.ama] },
    _ina: { lede: 'A lighter form of regulation: existing farms keep pumping, but no new land may be irrigated.', body: '<p>Arizona has three of these. Hualapai Valley, added in December 2022, was the first new one in 40 years.</p>', sources: [S.ama, S.adwrAR] },
  };
  const tribes = {
    'Gila River': { lede: 'The Gila River Indian Community holds one of the largest tribal water settlements in the US: a budget of 653,500 AF a year from the CAP, the Gila, the Salt and other sources.', body: '<p>Upstream diversions dried up the community\'s river and its farms in the late 1800s. The 2004 settlement made it one of the biggest water holders in central Arizona, and a key partner in deals to prop up Lake Mead.</p>', sources: [['US Dept. of Justice', 'https://www.justice.gov/enrd/4533.htm'], S.tribalCAP] },
    'Colorado River': { lede: 'The Colorado River Indian Tribes hold 662,402 AF a year, the oldest and largest right on Arizona\'s side of the river.', body: '<p><button class="btn" data-feat="crit">CRIT farms</button></p>', sources: [S.entitle] },
    'Navajo Nation': { lede: 'The largest reservation in the US borders the Colorado for hundreds of miles, yet many homes here have no running water and most of the Nation\'s Arizona water claims remain unsettled.', body: '<p>A $5 billion settlement approved by the Navajo, Hopi and San Juan Southern Paiute tribes and the state in 2024 would deliver 44,700 AF a year to the Navajo Nation. As of November 2026 Congress has not passed it.</p>', sources: [['Congress.gov S.953', 'https://www.congress.gov/bill/119th-congress/senate-bill/953/all-info'], ['Arizona Capitol Times, Oct 2026', 'https://azcapitoltimes.com/news/2026/10/28/water-settlement-would-be-game-changer-for-northeastern-arizona-tribes-experts-argue/']] },
    Hopi: { lede: 'The Hopi Tribe is part of the same unratified northeastern Arizona settlement as the Navajo Nation, which would provide 2,300 AF a year of Colorado River water plus other sources.', sources: [['Congress.gov S.953', 'https://www.congress.gov/bill/119th-congress/senate-bill/953/all-info']] },
    "Tohono O'odham Nation": { lede: 'A 1982 settlement and its 2004 update provide the Nation with CAP water, including 66,000 AF a year for two districts near Tucson.', sources: [['Univ. of Arizona', 'https://www.environment.arizona.edu/news/what-southern-arizona-water-rights-act'], S.tribalCAP] },
    Hualapai: { lede: 'A 2023 federal law gave the Hualapai Tribe 4,000 AF a year of CAP water and funding for a pipeline from the river.', sources: [S.adwrAR] },
    _default: { lede: 'Tribes hold some of the oldest and most secure water rights in Arizona. About 46% of CAP water is permanently allocated to tribes.', body: '<p>Several tribes, including the Havasupai, Kaibab Paiute and Tonto Apache, still have no settlement of their claims.</p>', sources: [S.tribalCAP] },
  };

  window.AZCONTENT = {
    features: F, riverStyle, rivers, canals, amas, tribes, golfCard,
    hud: [['7.0M AF', 'water used per year'], ['7.6M', 'people'], ['27% full', 'Lake Mead, Nov 2026']],
    budget: {
      title: 'Arizona runs on 7 million acre-feet a year',
      lede: 'That is about what it used in 1957, with more than six times the people. Here is the whole budget, one drop at a time.',
      perDrop: 100000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons, a year of water for about three homes.',
      sources: [
        { id: 'ground', label: 'Groundwater', pct: 41, af: 2.87e6, color: 'var(--c-ground)', layer: 'ground', note: 'Pumped from aquifers. Mostly ancient water that rain does not replace.' },
        { id: 'colorado', label: 'Colorado River', pct: 36, af: 2.52e6, color: 'var(--c-colorado)', layer: 'rivers,canals', feat: 'mead', note: 'Snowmelt from the Rockies. Shrinking: actual use was 1.9M AF in 2025.' },
        { id: 'instate', label: 'In-state rivers', pct: 18, af: 1.26e6, color: 'var(--c-instate)', layer: 'rivers', feat: 'roosevelt', note: 'The Salt, Verde, Gila and others, fed by Arizona\'s own mountains.' },
        { id: 'reclaimed', label: 'Reclaimed water', pct: 5, af: 0.35e6, color: 'var(--c-reclaimed)', feat: 'reclaim', note: 'Treated wastewater, used again.' },
      ],
      uses: [
        { id: 'ag', label: 'Farms', pct: 72, af: 5.04e6, color: 'var(--c-ag)', layer: 'farms', feat: 'yumafarm', note: 'Irrigated crops, led by alfalfa. Farming is about 0.4% of the state\'s economy.' },
        { id: 'muni', label: 'Cities & towns', pct: 22, af: 1.54e6, color: 'var(--c-muni)', layer: 'cities', feat: 'phoenix', note: 'Homes, businesses, parks. Up to 70% of home use is outdoors.' },
        { id: 'ind', label: 'Industry', pct: 6, af: 0.42e6, color: 'var(--c-ind)', layer: 'industry,golf', feat: 'paloverde', note: 'Mines, power plants, golf courses, dairies, factories.' },
        // not a slice of its own: too small for a drop, and already counted inside the rows above
        { id: 'dc', tiny: true, label: 'Data centers', val: '0.1% &middot; 0.01M AF', af: 1e4, color: 'var(--ink)', layer: 'industry', feat: 'datacenters', note: 'The dark speck after the last drop, drawn to scale. About 1,200 AF a year for cooling in the Phoenix area by one 2025 estimate, or roughly 10,000 AF counting the water used to make their electricity. Nobody has to report it. Already counted in the rows above.' },
      ],
      body: `<div class="note">These shares are the state water agency's standard figures (total from 2017, source split from 2020). They are the newest statewide numbers Arizona publishes.</div>
        <div class="note hot"><b>What is changing:</b> Lake Mead and Lake Powell both hit record lows in fall 2026. For 2027 and 2028, Arizona must give up 760,000 AF of Colorado River water a year, about a quarter of its share. <button class="btn" data-feat="mead" style="margin-top:6px">See how the cuts work</button></div>`,
    },
    shortage: {
      min: 895, max: 1220, current: 1040, full: 1219.6, dead: 895, powerPool: 950, entitlement: 2.8e6, capNormal: 1.5e6,
      tiers: [
        { above: 1090, name: 'Normal', af: 0 }, { above: 1075, name: 'Tier 0', af: 192000 }, { above: 1050, name: 'Tier 1 shortage', af: 512000, note: 'This is the tier in force for 2026.' },
        { above: 1045, name: 'Tier 2a shortage', af: 592000 }, { above: 1025, name: 'Tier 2b shortage', af: 640000, note: 'Mead is in this range today. But each year\'s tier is fixed by a forecast made the previous August, so 2026 is running as Tier 1.' }, { above: 0, name: 'Tier 3 shortage', af: 720000, note: 'The old rules stop here. Below 1,025 ft the states had only promised to "consult".' },
      ],
      after: '<b>From 2027 the tiers are gone.</b> With no seven-state deal, the federal government set a flat cut for 2027–28: Arizona gives up <b>760,000 AF</b> a year, more than the old worst case. CAP expects to lose all farm water plus, for the first time, about 14% of city water and 10% of tribal water. Nevada has sued to block the plan and Arizona has moved to join.',
    },
    riverLabels: [['COLORADO RIVER', -112.6, 36.27, .32, -8], ['COLORADO R.', -114.38, 33.35, .45, 80], ['GILA RIVER', -113.55, 32.87, .4, 8], ['GILA R.', -109.95, 32.98, .7, -25], ['SALT RIVER', -110.75, 33.72, .55, 20], ['VERDE R.', -111.9, 34.45, .6, 60], ['LITTLE COLORADO', -110.75, 35.2, .5, 28], ['SAN PEDRO', -110.28, 32.15, .7, 75], ['SANTA CRUZ', -111.25, 32.55, .8, 55], ['BILL WILLIAMS', -113.75, 34.3, .9, 10]],
    neighbors: [['NEVADA', -114.75, 36.95, 0], ['UTAH', -112.2, 37.2, 0], ['CALIFORNIA', -114.98, 34.6, -78], ['NEW MEXICO', -108.92, 34.3, 90], ['SONORA, MEXICO', -112.2, 31.42, 0]],
    spot: {
      rain: inches => `${inches < 8 ? 'This is true desert.' : inches < 14 ? 'Semi-arid country.' : inches < 22 ? 'Wet by Arizona standards.' : 'One of the wettest parts of the state: this is where rivers start.'} For comparison, an open pond in Arizona loses 50 to 80 inches a year to evaporation (about 72 in Phoenix), so almost everywhere, far more water can leave than arrives.`,
      ama: 'Groundwater here is regulated: wells need rights, large pumpers are metered, and new subdivisions must show a 100-year water supply.',
      ina: 'No new farmland may be irrigated here, but existing farms can keep pumping.',
      none: 'It is outside every managed area. Like most of rural Arizona, there is essentially no limit on groundwater pumping here: a landowner may drill and pump for any reasonable use.',
      tribal: 'Tribal water rights are separate from state rules and are often the most senior in their basin.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'], ['Evaporation: WRCC', 'https://wrcc.dri.edu/climate/narrative_az.php'], S.ama],
    },
    legend: {
      rain: 'Phoenix gets 7 inches a year, Yuma 3, the highest peaks over 35. PRISM 1991–2020 normals.',
      ground: 'Dashed white lines are groundwater basins. Outside the shaded areas, pumping is essentially unregulated.',
      snow: 'Where snow usually accumulates (drawn from elevation; not a live snow map).',
    },
    browse: [
      ['The Colorado', ['rockies', 'powell', 'leesferry', 'mead', 'havasu', 'wilmer', 'pleasant', 'imperial', 'delta']],
      ['Arizona\'s own rivers', ['roosevelt', 'granitereef', 'bartlett', 'sancarlos', 'snowslide', 'whitemtn']],
      ['Groundwater', ['willcox', 'fondomonte', 'eloy', 'cavsarp', 'hualapai', 'rioverde']],
      ['Farms', ['yumafarm', 'pinal', 'crit', 'wellton', 'westvalley', 'safford']],
      ['Cities', ['phoenix', 'tucson', 'mesa', 'scottsdale', 'chandler', 'tempe', 'buckeye', 'yuma', 'flagstaff', 'prescott']],
      ['Industry & golf', ['paloverde', 'tsmc', 'intel', 'datacenters', 'morenci', 'golfscott', 'reclaim']],
    ],
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 3 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rainfall (PRISM 1991–2020 normals). Rivers and lakes are from Natural Earth; canals from the Central Arizona Project's GIS; groundwater areas from the Arizona Department of Water Resources; tribal lands from the Census Bureau; golf courses from OpenStreetMap contributors. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. Figures are as of November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'A desert state with a 7-million-acre-foot habit', text: 'Arizona uses about 7 million acre-feet of water a year. Everything green or built on this map exists because water was moved to it. The panel shows where that water comes from.', view: 'home', home: true },
      { title: 'It starts as snow, somewhere else', text: 'The biggest single source is the Colorado River, and about 90% of its water comes from mountains upstream of Arizona. It collects in Lake Powell, which hit a record low in September 2026.', lon: -112.3, lat: 36.45, zoom: .5, select: 'powell', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'Lake Mead keeps the score', text: 'Mead is 27% full. Its level decides how much Arizona must give up each year. Drag the Lake Mead slider and watch the turquoise canal to Phoenix shrink.', scroll: '#meadSlider', box: [-115.0, 33.15, -111.7, 36.35], zoom: .6, select: 'mead', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'A river pumped uphill', text: 'At Lake Havasu the Central Arizona Project lifts the Colorado out of its canyon and sends it 336 miles across the desert to Phoenix and Tucson, climbing nearly 3,000 feet.', lon: -112.9, lat: 33.6, zoom: .42, select: 'wilmer', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Arizona\'s own snow', text: 'The other river system is home-grown. Winter snow on the Mogollon Rim and White Mountains melts into the Salt and Verde and is caught in a chain of reservoirs above Phoenix.', lon: -111.2, lat: 34.0, zoom: .6, select: 'roosevelt', season: 'winter', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Where a river ends', text: 'At Granite Reef, the whole Salt River is turned into canals. Follow the dotted line west: that is the dry riverbed through Phoenix. The city\'s water runs beside it in concrete.', lon: -111.9, lat: 33.47, zoom: 1.5, select: 'granitereef', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'golf', 'industry'] },
      { title: 'Most of it grows crops', text: 'Farms use about 72% of Arizona\'s water. Yuma\'s fields, with the oldest rights on the river, grow most of the nation\'s winter lettuce. Every striped square is real cropland seen by satellite.', lon: -114.4, lat: 32.68, zoom: 1.3, select: 'yumafarm', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'What about data centers?', text: 'Arizona has more than 100 of them, and their thirst makes headlines. The best estimates: about 1,200 acre-feet a year for cooling around Phoenix, or 10,000 counting the water used to make their electricity. That is 0.1% of the state\'s water. Farms near Phoenix use about 580,000.', lon: -111.72, lat: 33.36, zoom: 1.2, select: 'datacenters', layers: ['rivers', 'canals', 'cities', 'farms', 'industry'] },
      { title: 'The water you cannot see', text: 'About 41% of supply is pumped from underground. Only the blue areas have real pumping rules. In Willcox, in the southeast corner, wells are going dry and the ground is sinking.', lon: -111.6, lat: 33.2, zoom: .34, select: 'willcox', layers: ['rivers', 'ground', 'farms', 'cities'] },
      { title: 'What happens next', text: 'In 2027 Arizona loses 760,000 acre-feet of Colorado River water, with cuts reaching cities and tribes for the first time. Now explore: click any dam, field, canal or patch of desert.', view: 'home', home: true },
    ],
  };
})();
