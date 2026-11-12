/* California. Every figure has a source link on its card. Fact sheet and verification log: research/california.md.
   Winter 2025-26 left very little snow (18% of average on 1 April) but reservoirs stayed near average, so 2026 storage
   readings are labelled with their dates. The Colorado River side of the state shares that river's shortage.
   Figures are as of November 2026. */
(() => {
  const S = {
    wb: ['DWR water balance data, 2002–2023', 'https://data.cnra.ca.gov/dataset/water-plan-water-balance-data'],
    ppic: ['PPIC: Water Use in California', 'https://www.ppic.org/publication/water-use-in-california/'],
    usgs: ['USGS: water use in 2015', 'https://pubs.usgs.gov/circ/1441/circ1441.pdf'],
    acwa: ['ACWA summary of the state snow survey, Apr 2026', 'https://www.acwa.com/news/dry-march-leaves-no-measurable-snow-for-april-survey/'],
    cdecSnow: ['CDEC snow report, 1 Apr 2026', 'https://cdec.water.ca.gov/reportapp/javareports?name=DLYSWEQ.20260401'],
    dwrMay: ['DWR release, 15 May 2026', 'https://content.govdelivery.com/accounts/CNRA/bulletins/417836b'],
    res: ['CDEC daily reservoir report', 'https://cdec.water.ca.gov/reportapp/javareports?name=RES'],
    sum: ['CDEC statewide storage summary', 'https://cdec.water.ca.gov/reportapp/javareports?name=STORSUM'],
    crsCvp: ['Congressional Research Service: Central Valley Project, Mar 2026', 'https://www.everycrsreport.com/files/2026-03-26_R45342_04a0a7041f6b24badbbcbfe23ef73abb53bffa2f.html'],
    cvpFeb: ['Reclamation, 26 Feb 2026', 'https://www.usbr.gov/newsroom/news-release/5289'],
    cvpAug: ['Reclamation, 11 Aug 2026', 'https://www.usbr.gov/newsroom/news-release/5386'],
    wefSwp: ['Water Education Foundation: State Water Project', 'https://www.watereducation.org/aquapedia/state-water-project'],
    wefDelta: ['Water Education Foundation: the Delta', 'https://www.watereducation.org/aquapedia/sacramento-san-joaquin-delta'],
    wefOro: ['Water Education Foundation: Oroville Dam', 'https://www.watereducation.org/aquapedia/oroville-dam'],
    ops: ['Reclamation: project facilities', 'https://www.usbr.gov/mp/bdo/docs/lto01-19/appendix-a-facilitydescriptions.pdf'],
    dcpSite: ['Delta Conveyance Project: status', 'https://www.deltaconveyanceproject.com/'],
    dcpGov: ['Governor\'s office, 5 Jun 2026', 'https://www.gov.ca.gov/2026/06/05/delta-conveyance-project-receives-critical-federal-clearance-to-advance-construction/'],
    dcpAho: ['State Water Board hearing ruling, 5 Nov 2026', 'https://www.waterboards.ca.gov/water_issues/programs/administrative_hearings_office/docs/2026/2026-11-05-procedural-ruling-dcp.pdf'],
    sitesWr: ['State Water Board, 4 Nov 2026', 'https://www.waterboards.ca.gov/press_room/press_releases/2026/pr20261104-state-water-board-approves-water-right-for-sites-reservoir.html'],
    sites: ['Sites Project Authority', 'https://sitesproject.org/'],
    sitesBase: ['Sites baseline report, Aug 2026 draft', 'https://sitesproject.org/wp-content/uploads/2025/12/03-02-Sites-Project-Baseline-Report-August-2026-Draft-08.26.pdf'],
    faq: ['State Water Board: water rights questions', 'https://www.waterboards.ca.gov/waterrights/board_info/faqs.html'],
    monoSwb: ['State Water Board: Mono Lake', 'https://www.waterboards.ca.gov/waterrights/water_issues/programs/mono_lake/'],
    monoLadwp: ['LADWP, Apr 2026', 'https://ladwpnews.com/ladwp-announces-annual-mono-lake-level-reading-taking-final-measurement-with-mono-lake-committee/'],
    monoMlc: ['Mono Lake Committee forecast, Jun 2026', 'https://www.monolake.org/wp-content/uploads/2026/07/Lake-level-forecast-report-June-2026-final.pdf'],
    sgma: ['Assembly budget subcommittee briefing on the groundwater law', 'https://abgt.assembly.ca.gov/media/7522'],
    sgmaSwb: ['State Water Board: basins under state intervention', 'https://www.waterboards.ca.gov/sgma/groundwater_basins/'],
    dm: ['State Water Board, 7 Apr 2026', 'https://www.waterboards.ca.gov/press_room/press_releases/2026/pr20260407-delta-mendota-subbasin-returns-to-dwr-oversight.html'],
    gw: ['DWR groundwater update, May 2026', 'https://mavensnotebook.com/wp-content/uploads/2026/05/may_2026_semi_annual_groundwater_report.pdf'],
    usgsSub: ['USGS: land subsidence in the San Joaquin Valley', 'https://www.usgs.gov/centers/land-subsidence-in-california/science/land-subsidence-san-joaquin-valley'],
    tl: ['ABC7, 2023', 'https://abc7news.com/tulare-lake-reaches-peak-california-2023/13356811/'],
    kwb: ['Kern Water Bank Authority', 'https://www.kwb.org/'],
    fkc: ['Reclamation: Friant-Kern Canal fact sheet, Dec 2024', 'https://www.usbr.gov/mp/mpr-news/docs/factsheets/fkc-fact%20sheet-dec2024.pdf'],
    fkcNr: ['Reclamation: Friant-Kern pump stations, 2026', 'https://www.usbr.gov/newsroom/news-release/5422'],
    sisk: ['Reclamation: B.F. Sisk Dam raise', 'https://www.usbr.gov/mp/sccao/sisk/raise.html'],
    almond: ['Almond Board acreage estimate, Apr 2026', 'https://www.almonds.org/sites/default/files/2026-04/2026_InitialAlmondReport_FINAL.pdf'],
    wwd: ['Westlands Water District, 10 Mar 2026', 'https://wwd.ca.gov/wwd-media/press-release-3-10-2026/'],
    rice: ['California Rice Commission', 'https://www.calrice.org/'],
    bawsca: ['Bay Area Water Supply and Conservation Agency', 'https://bawsca.org/water/supply/hetchhetchy'],
    ebmud: ['East Bay Municipal Utility District', 'https://www.ebmud.com/water/about-your-water/water-supply'],
    ebmud2: ['East Bay MUD: who we are', 'https://www.ebmud.com/about-us/who-we-are'],
    vw: ['Valley Water: where your water comes from', 'https://www.valleywater.org/your-water/where-your-water-comes-from'],
    anderson: ['Valley Water: Anderson Dam', 'https://www.valleywater.org/news-events/news-releases/Anderson-Dam-Tunnel-Project-on-track-for-completion-in-2026'],
    krrc: ['Klamath River Renewal Corporation', 'https://klamathrenewal.org/the-project/'],
    icn: ['Inside Climate News, 27 Aug 2026', 'https://insideclimatenews.org/news/27082026/salmon-return-to-klamath-river-after-dam-removals/'],
    trrp: ['Trinity River Restoration Program', 'https://www.trrp.net/program-structure/background/rod/'],
    cec: ['California Energy Commission: 2025 generation', 'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2025-total-system-electric-generation'],
    oil: ['Central Valley Water Board: oil field water and food safety', 'https://www.waterboards.ca.gov/centralvalley/water_issues/oil_fields/food_safety/'],
    edm: ['Wikipedia: Edmonston Pumping Plant', 'https://en.wikipedia.org/wiki/Edmonston_Pumping_Plant'],
    acc: ['Reclamation: Colorado River accounting, 2025', 'https://www.usbr.gov/lc/region/g4000/4200Rpts/DecreeRpt/2025/2025.pdf'],
    acc24: ['Reclamation: Colorado River accounting, 2024', 'https://www.usbr.gov/lc/region/g4000/4200Rpts/DecreeRpt/2024/2024.pdf'],
    crs: ['Congressional Research Service: Colorado River, Oct 2026', 'https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf'],
    doi: ['Interior Department, 21 Aug 2026', 'https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations'],
    aac: ['Reclamation: All-American Canal System', 'https://www.usbr.gov/projects/index.php?id=514'],
    calm: ['CalMatters, Aug 2026', 'https://calmatters.org/environment/water/2026/08/california-colorado-river-two-year-plan-chaos/'],
    sdCol: ['San Diego County Water Authority: Colorado River', 'https://www.sdcwa.org/your-water/imported-water-supplies/colorado-river/'],
    sdDesal: ['San Diego County Water Authority: desalination', 'https://www.sdcwa.org/your-water/local-water-supplies/seawater-desalination/'],
    cvwdCanal: ['Coachella Valley Water District: Coachella Canal', 'https://www.cvwd.org/169/Coachella-Canal'],
    cvwdGw: ['Coachella Valley Water District: groundwater', 'https://www.cvwd.org/160/Groundwater-Replenishment-Imported-Water'],
    pvid: ['Palo Verde Irrigation District', 'https://www.pvid.org/'],
    salton: ['State Water Board staff report on the Salton Sea, Apr 2026', 'https://water.waterboards.ca.gov/board_info/agendas/2026/may/05202026-6staffrpt.pdf'],
    mwd21: ['Metropolitan Water District: aqueduct fact sheet', 'https://www.mwdh2o.com/media/ja5k5pcu/cra_fact-sheet-2021.pdf'],
    mwd22: ['Metropolitan Water District at a glance', 'https://www-admin.mwdh2o.com/media/vhgmeiub/2022_district-at-glance.pdf'],
    uwmp: ['LADWP 2025 Urban Water Management Plan', 'https://www.ladwp.com/sites/default/files/2026-06/LADWP%202025%20Urban%20Water%20Management%20Plan_Final.pdf'],
    ocwd: ['Orange County Water District: Groundwater Replenishment System', 'https://www.ocwd.com/gwrs/'],
    ocwd2: ['Orange County Water District', 'https://www.ocwd.com/about/'],
    recycled: ['State Water Board: recycled water in 2025', 'https://www.waterboards.ca.gov/water_issues/programs/recycled_water/docs/2026/infographic-2025.pdf'],
    dpr: ['State Water Board: direct potable reuse rules', 'https://www.waterboards.ca.gov/drinking_water/certlic/drinkingwater/direct_potable_reuse.html'],
    agua: ['Agua Caliente testimony to the Senate, 29 Jul 2026', 'https://www.indian.senate.gov/wp-content/uploads/07.29.26-Testimony-Grubbe.pdf'],
    cod: ['DWR: critically overdrafted basins map data', 'https://gis.water.ca.gov/arcgis/rest/services/Geoscientific/i08_CriticallyOverdraftedBasins/MapServer/0'],
    prio: ['DWR: basin priority map data', 'https://gis.water.ca.gov/arcgis/rest/services/Geoscientific/i08_B118_SGMA_2019_Basin_Prioritization/MapServer/1'],
    dwrGis: ['Route: California Department of Water Resources', 'https://gis.water.ca.gov/'],
    osm: ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'],
  };
  const F = [];
  const add = o => F.push(o);
  const btn = (id, label) => `<p><button class="btn" data-feat="${id}">${label}</button></p>`;
  const NOV = '11 Nov 2026';

  // ----------------------------------------------------------------- snow, rivers, law
  add({ id: 'snow', kind: 'snow', name: 'Sierra Nevada snowpack', short: 'Snowpack', lon: -119.25, lat: 37.45, tier: 1,
    lede: 'Snow that piles up on the Sierra Nevada in winter melts in spring and early summer and fills the reservoirs below. In 2026 there was very little of it.',
    stats: [['18%', 'of average: statewide snowpack on 1 Apr 2026, the second-lowest for that date on record'], ['12%', 'of average on 15 May 2026'], ['106%', 'of average: water held in California reservoirs on 31 Oct 2026', 1]],
    body: '<p>The snowpack peaked around 24 February 2026, and a record-hot March melted most of it. At Phillips Station, where the state measures snow by hand, there was none to measure on 1 April.</p><p>Reservoirs started the year fuller than usual, so storage stayed near average even though the snow did not. Switch the season to Winter to see where snow usually builds up.</p>',
    sources: [S.acwa, S.cdecSnow, S.dwrMay, S.sum] });
  add({ id: 'delta', kind: 'delta', name: 'The Sacramento-San Joaquin Delta', short: 'The Delta', lon: -121.62, lat: 38.08, tier: 1, zoom: 1.1,
    lede: 'The Sacramento and San Joaquin rivers meet here and flow to San Francisco Bay. Pumps at the south end pull part of that water out and send it to farms and cities farther south.',
    stats: [['30M', 'Californians get some of their drinking water from the Delta, roughly'], ['2.5M', 'acres of farmland irrigated with water pumped from it, roughly'], ['1,100 mi', 'of levees protect its farms and towns'], ['5.9M AF', 'a year must flow out to the bay, on average']],
    body: '<p>The two rivers drain about 40% of California. The Delta itself is more than 738,000 acres of farmed islands and channels.</p><p>Water that must flow out to the bay keeps salt water away from the pumps and supports fish. The state counts it as environmental water.</p>' + btn('pumps', 'The export pumps') + btn('dcp', 'The proposed tunnel'),
    sources: [S.wefDelta, S.wb, S.ppic] });
  add({ id: 'pumps', kind: 'pump', kindLabel: 'Pumping plants', name: 'Delta export pumps', short: 'Delta pumps', lon: -121.60, lat: 37.80, tier: 2,
    lede: 'Two pumping plants near Tracy lift water out of the Delta. The state\'s Banks plant feeds the California Aqueduct. The federal Jones plant feeds the Delta-Mendota Canal.',
    stats: [['4.30M AF', 'pumped out by the two plants together in 2024'], ['6.59M AF', 'the most in one year, in 2011'], ['444 mi', 'length of the California Aqueduct'], ['117 mi', 'length of the Delta-Mendota Canal']],
    body: '<p>How much the plants may pump is limited by rules that protect fish and keep the Delta fresh. A new federal operating decision in December 2025 is expected to raise deliveries. Environmental groups sued over it in March 2026.</p>' + btn('sanluis', 'Where the water is parked') + btn('edmonston', 'Where it is pumped over the mountains'),
    sources: [S.crsCvp, S.wefSwp, S.ops] });
  add({ id: 'dcp', kind: 'info', kindLabel: 'Proposed project', name: 'Delta Conveyance Project (proposed)', short: 'Delta tunnel (proposed)', lon: -121.517, lat: 38.368, tier: 3,
    lede: 'The state proposes a tunnel that would take Sacramento River water from the north Delta to the existing pumps in the south. It has not been approved or built.',
    stats: [['956,000 AF', 'the state says the project could have captured in water year 2025'], ['Jun 2026', 'federal wildlife agencies cleared construction'], ['Apr 2027', 'last written arguments due in the water right hearing']],
    body: '<p>The project still needs a water right from the State Water Board. In April 2026 the Delta Stewardship Council upheld most of the state\'s plan and sent two issues back. Delta counties and local water agencies have appealed the revised version.</p>',
    sources: [S.dcpSite, S.dcpGov, S.dcpAho] });
  add({ id: 'klamath', kind: 'restore', name: 'Klamath River dam removals', short: 'Klamath dams removed', lon: -122.435, lat: 41.934, tier: 1,
    lede: 'Four hydropower dams on the Klamath River were taken out in 2023 and 2024. This was the site of Iron Gate Dam, the lowest of the four.',
    stats: [['4', 'dams removed: Copco No. 2 in 2023, then J.C. Boyle, Copco No. 1 and Iron Gate in 2024'], ['400+ mi', 'of river and streams reopened to fish'], ['2,497', 'Chinook salmon passed Keno Dam, in Oregon, in 2025. None did in 2024.'], ['163 MW', 'the power the four dams could make']],
    body: '<p>More than 20,000 Chinook salmon swam upriver past the old dam sites in the first two years.</p><p>In 2026 low snow cut the river\'s spring flows and a parasite outbreak killed hundreds of young salmon.</p>' + btn('hoopa', 'Tribes on the Klamath and Trinity'),
    sources: [S.krrc, S.icn] });
  add({ id: 'mono', kind: 'lake', name: 'Mono Lake', lake: 'Mono Lake', lon: -119.01, lat: 38.01, tier: 2,
    lede: 'A salt lake east of the Sierra. Los Angeles began diverting the streams that feed it in 1941, and the lake fell 45 feet by 1982.',
    stats: [['6,382.75 ft', 'lake level on 1 Apr 2026'], ['6,392 ft', 'the level the state ordered in 1994'], ['6,417 ft', 'the level in 1941'], ['16,000 AF', 'Los Angeles may take in 2026–27']],
    body: '<p>In 1983 the California Supreme Court ruled that the state must protect lakes and rivers held in trust for the public, even from long-standing water rights. The 1994 order followed from that case.</p><p>The lake has not reached the ordered level. The State Water Board held workshops in 2026 on whether to revisit the order.</p>' + btn('laaq', 'The Los Angeles Aqueduct'),
    sources: [S.monoSwb, S.monoLadwp, S.monoMlc] });
  add({ id: 'owens', kind: 'lake', kindLabel: 'Dry lake', name: 'Owens Lake', lake: 'Owens Lake', lon: -117.95, lat: 36.44, tier: 3,
    lede: 'The Owens River once ended in this lake. After Los Angeles began taking the river in 1913, the lake dried up and its bed became a source of dust.',
    stats: [['About 60,000 AF', 'a year Los Angeles spreads on the lakebed to hold down dust']],
    body: btn('laaq', 'The Los Angeles Aqueduct'),
    sources: [S.uwmp] });
  add({ id: 'salton', kind: 'lake', name: 'Salton Sea', lake: 'Salton Sea', lon: -115.83, lat: 33.3, tier: 1,
    lede: 'California\'s largest lake formed in 1905 and is fed mostly by water draining off farms. It has no outlet, and it is shrinking.',
    stats: [['14.6 ft', 'drop in the surface since 2003, as of March 2026'], ['41,800', 'acres of lake area lost since 2003'], ['24,490', 'acres of dry lakebed now exposed, roughly'], ['29,800', 'acres of habitat and dust control the state must build by the end of 2028']],
    body: '<p>The lake is more than twice as salty as the ocean. As it shrinks, wind lifts dust from the exposed lakebed.</p><p>When farms use less Colorado River water, less drains to the lake. The state\'s dashboard lists 2,357 acres of habitat completed and 7,643 under construction.</p>' + btn('imperial', 'Imperial Valley farms'),
    sources: [S.salton, ['Salton Sea Management Program dashboard', 'https://projects.saltonsea.ca.gov/Results/ProgressDashboard']] });
  add({ id: 'tularelake', kind: 'lake', kindLabel: 'Former lake', name: 'Tulare Lake', lon: -119.82, lat: 36.02, tier: 2,
    lede: 'A lake once filled this low spot in the San Joaquin Valley. The rivers that fed it were dammed and diverted, and the lakebed is farmed. In the wet year of 2023 the lake came back.',
    stats: [['178 sq mi', 'covered by water at the 2023 peak, roughly']],
    body: '<p>The Kings, Kaweah, Tule and Kern rivers drain toward this basin, which has no natural outlet to the sea in most years.</p>' + btn('corcoran', 'The sinking ground nearby'),
    sources: [S.tl] });
  add({ id: 'imperialdam', kind: 'reservoir', kindLabel: 'Dam', name: 'Imperial Dam: California\'s share of the Colorado', short: 'Colorado River share', lon: -114.465, lat: 32.883, tier: 2,
    lede: 'California holds the largest share of the Colorado River of any state. Most of it is taken out here, where the All-American Canal begins.',
    stats: [['4.4M AF', 'a year: California\'s basic share'], ['3.65M AF', 'California consumed in 2025'], ['440,000 AF', 'a year California is to give up in 2027 and 2028'], ['5.2M AF', 'a year California used before a 2003 agreement, roughly']],
    body: '<p>In August 2026 the federal government set rules for 2027 and 2028. Arizona, California and Nevada must cut 1.25 million AF a year between them. California\'s part is 440,000 AF if the three states carry out the sharing plan they proposed.</p><p>The dam raises the river 25 feet so that water flows by gravity into the canals.</p>' + btn('imperial', 'Imperial Valley farms') + btn('havasu', 'The Colorado River Aqueduct'),
    sources: [S.acc, S.doi, S.crs, S.aac] });
  add({ id: 'havasu', kind: 'pump', name: 'Colorado River Aqueduct intake', short: 'Aqueduct intake', lon: -114.16, lat: 34.30, tier: 2,
    lede: 'Pumps on Lake Havasu start Colorado River water on a 242-mile trip across the desert to Lake Mathews, near Riverside.',
    stats: [['242 mi', 'long'], ['1,617 ft', 'total lift at five pumping plants'], ['812,927 AF', 'taken from Lake Havasu in 2025'], ['About 1.25M AF', 'a year is the most it can carry']],
    body: '<p>The aqueduct belongs to the Metropolitan Water District of Southern California, a wholesaler with 26 member agencies that serve 19 million people. Construction began in 1933 and deliveries began in 1941.</p>' + btn('dvl', 'Diamond Valley Lake') + btn('la', 'Los Angeles'),
    sources: [S.mwd21, S.mwd22, S.acc, S.dwrGis] });

  // ----------------------------------------------------------------- reservoirs
  add({ id: 'shasta', kind: 'hydro', name: 'Shasta Lake', short: 'Shasta', lake: 'Shasta Lake', lon: -122.419, lat: 40.719, tier: 1, zoom: .9,
    lede: 'California\'s largest reservoir, on the Sacramento River. It is the main storage of the federal Central Valley Project.',
    pct: 49, pctNote: `2,246,293 AF of 4,552,000 AF (${NOV}). That is 92% of average for the date.`,
    stats: [['602 ft', 'height of Shasta Dam, built 1938–1945'], ['About 5M AF', 'a year the Central Valley Project delivers to farms'], ['13.4%', 'of the electricity generated in California in 2025 came from hydropower', 1]],
    body: '<p>The Central Valley Project has 20 dams and about 500 miles of canals between Redding and Bakersfield. It also delivers about 600,000 AF a year to cities and 410,000 AF to wildlife refuges.</p>' + btn('pumps', 'The Delta pumps') + btn('trinity', 'Trinity Lake'),
    sources: [S.res, S.crsCvp, S.cec] });
  add({ id: 'oroville', kind: 'reservoir', name: 'Lake Oroville', short: 'Oroville', lake: 'Lake Oroville', lon: -121.486, lat: 39.539, tier: 1, zoom: .9,
    lede: 'The main reservoir of the State Water Project, on the Feather River. Its dam is the tallest in the United States.',
    pct: 42, pctNote: `1,436,913 AF of 3,424,753 AF (${NOV}). That is 80% of average for the date.`,
    stats: [['770 ft', 'height of the dam, completed in 1968'], ['27M', 'people get some water from the State Water Project'], ['45%', 'of requested water delivered by the project in 2026'], ['99%', 'full on 15 May 2026']],
    body: '<p>The State Water Project supplies 29 public water agencies and about 750,000 acres of farmland. About two-thirds of its water goes to cities.</p><p>In February 2017 the dam\'s main spillway broke apart during a storm and about 188,000 people downstream were told to leave. Repairs cost about $1.1 billion.</p>' + btn('edmonston', 'Where the water goes over the mountains'),
    sources: [S.res, S.wefOro, S.wefSwp, S.dwrMay] });
  add({ id: 'trinity', kind: 'reservoir', name: 'Trinity Lake', short: 'Trinity', lake: 'Trinity Lake', lon: -122.763, lat: 40.801, tier: 2,
    lede: 'A reservoir on the Trinity River, which flows to the Klamath and the Pacific. A tunnel sends part of its water east to the Sacramento River instead.',
    pct: 66, pctNote: `1,624,855 AF of 2,447,650 AF (${NOV}). That is 115% of average for the date.`,
    stats: [['48%', 'of the water flowing into the lake must stay in the Trinity River, under a federal decision in 2000'], ['About 25%', 'stayed in the river before that']],
    body: '<p>The highlighted line is the Clear Creek Tunnel. It carries water from Lewiston Dam, just downstream, to Whiskeytown Lake.</p>' + btn('hoopa', 'Tribes downstream'),
    sources: [S.res, S.trrp, S.ops] });
  add({ id: 'folsom', kind: 'reservoir', name: 'Folsom Lake', short: 'Folsom', lake: 'Folsom Lake', lon: -121.156, lat: 38.708, tier: 2,
    lede: 'A federal reservoir on the American River, just upstream of Sacramento. It stores water and holds back floods.',
    pct: 37, pctNote: `362,012 AF of 977,000 AF (${NOV}). That is 89% of average for the date.`,
    body: btn('sacramento', 'Sacramento'),
    sources: [S.res] });
  add({ id: 'newmelones', kind: 'reservoir', name: 'New Melones Lake', short: 'New Melones', lake: 'New Melones Lake', lon: -120.528, lat: 37.947, tier: 3,
    lede: 'A federal reservoir on the Stanislaus River.',
    pct: 63, pctNote: `1,511,079 AF of 2,400,000 AF (${NOV}). That is 117% of average for the date.`,
    sources: [S.res] });
  add({ id: 'donpedro', kind: 'reservoir', name: 'Don Pedro Reservoir', short: 'Don Pedro', lake: 'Don Pedro Reservoir', lon: -120.421, lat: 37.699, tier: 3,
    lede: 'A reservoir on the Tuolumne River owned by the Turlock and Modesto irrigation districts. The canals leaving the river below it water farms around both cities.',
    pct: 72, pctNote: `1,471,223 AF of 2,030,000 AF (${NOV}). That is 110% of average for the date.`,
    body: btn('hetchy', 'Hetch Hetchy, upstream'),
    sources: [S.res, S.dwrGis] });
  add({ id: 'hetchy', kind: 'reservoir', name: 'Hetch Hetchy Reservoir', short: 'Hetch Hetchy', lake: 'Hetch Hetchy Reservoir', lon: -119.788, lat: 37.947, tier: 2,
    lede: 'San Francisco\'s main reservoir, on the Tuolumne River inside Yosemite National Park. Its water flows to the Bay Area by gravity.',
    pct: 71, pctNote: `257,308 AF of 360,000 AF (${NOV}). That is 101% of average for the date.`,
    stats: [['85%', 'of the regional system\'s water comes from Sierra snowmelt'], ['160 mi', 'from Yosemite to the Bay Area'], ['2.4M', 'people supplied in four counties']],
    body: btn('sf', 'San Francisco'),
    sources: [S.res, S.bawsca] });
  add({ id: 'millerton', kind: 'reservoir', name: 'Millerton Lake', short: 'Millerton', lake: 'Millerton Lake', lon: -119.705, lat: 37.001, tier: 2,
    lede: 'Friant Dam holds the San Joaquin River here. Two canals carry most of the river away: the Friant-Kern Canal south toward Bakersfield and the Madera Canal north.',
    pct: 43, pctNote: `221,484 AF of 520,500 AF (${NOV}). That is 97% of average for the date.`,
    stats: [['100%', 'of the first 800,000 AF promised to Friant contractors was allocated in 2026'], ['0%', 'of the second tier, which is delivered only in wetter years']],
    body: btn('friantkern', 'The Friant-Kern Canal'),
    sources: [S.res, S.cvpFeb] });
  add({ id: 'pineflat', kind: 'reservoir', name: 'Pine Flat Lake', short: 'Pine Flat', lake: 'Pine Flat Lake', lon: -119.326, lat: 36.832, tier: 3,
    lede: 'The reservoir on the Kings River, which waters farms around Fresno and once fed Tulare Lake.',
    pct: 19, pctNote: `188,771 AF of 1,000,000 AF (${NOV}). That is 66% of average for the date.`,
    body: btn('tularelake', 'Tulare Lake'),
    sources: [S.res] });
  add({ id: 'sanluis', kind: 'reservoir', name: 'San Luis Reservoir', short: 'San Luis', lake: 'San Luis Reservoir', lon: -121.09, lat: 37.06, tier: 1, zoom: .9,
    lede: 'No large river fills this reservoir. Water pumped out of the Delta in winter is lifted into it and released to the canals in summer. The state and federal projects share it.',
    pct: 65, pctNote: `1,323,451 AF of 2,041,000 AF (${NOV}). That is 137% of average for the date.`,
    stats: [['966,000 AF', 'of the space belongs to the federal project'], ['382 ft', 'height of B.F. Sisk Dam, built 1963–1967'], ['130,000 AF', 'a planned 10-foot raise of the dam would add']],
    body: '<p>It is the largest reservoir in the United States that sits off a river.</p>' + btn('pumps', 'The Delta pumps') + btn('westlands', 'Farms that depend on it'),
    sources: [S.res, S.sisk, S.crsCvp] });
  add({ id: 'castaic', kind: 'reservoir', name: 'Castaic Lake', short: 'Castaic', lake: 'Castaic Lake', lon: -118.607, lat: 34.519, tier: 3,
    lede: 'The end of the West Branch of the California Aqueduct. Water from northern California is stored here for the Los Angeles area.',
    pct: 81, pctNote: `263,193 AF of 325,000 AF (${NOV}). That is 105% of average for the date.`,
    body: btn('edmonston', 'How the water gets here'),
    sources: [S.res, S.dwrGis] });
  add({ id: 'dvl', kind: 'reservoir', name: 'Diamond Valley Lake', short: 'Diamond Valley', lake: 'Diamond Valley Lake', lon: -117.042, lat: 33.678, tier: 2,
    lede: 'Southern California\'s largest reservoir, finished in 2000. The Metropolitan Water District fills it with imported water to hold for dry years and emergencies.',
    pct: 99, pctNote: '797,895 AF of 810,000 AF (5 Nov 2026)',
    stats: [['810,000 AF', 'capacity'], ['1,072,000 AF', 'in all the district\'s own reservoirs together']],
    body: btn('havasu', 'The Colorado River Aqueduct'),
    sources: [S.mwd21, ['CDEC station DMV', 'https://cdec.water.ca.gov/dynamicapp/QueryDaily?s=DMV']] });
  add({ id: 'anderson', kind: 'reservoir', name: 'Anderson Reservoir', short: 'Anderson', lake: 'Anderson Lake', lon: -121.619, lat: 37.171, tier: 3,
    lede: 'Santa Clara County\'s largest reservoir has been kept nearly empty since 2020, when federal regulators ordered it drained because the dam could fail in an earthquake.',
    stats: [['30 Oct 2026', 'first water released through a new 1,700-foot outlet tunnel'], ['Jan 2027', 'rebuilding of the dam expected to begin']],
    body: btn('sanjose', 'San Jose'),
    sources: [S.anderson] });
  add({ id: 'sites', kind: 'reservoir', kindLabel: 'Planned reservoir', icon: 'info', name: 'Sites Reservoir (planned)', short: 'Sites (planned)', lon: -122.341, lat: 39.355, tier: 2,
    lede: 'A planned reservoir in a valley west of the Sacramento River. It would be filled by pumping from the river in wet months. It has not been built.',
    stats: [['1.5M AF', 'planned capacity'], ['4 Nov 2026', 'the State Water Board approved its water right'], ['986,000 AF', 'a year is the most it may take from the river, between November and mid-June'], ['$6.6B', 'estimated cost in 2024 dollars, before contingency']],
    body: '<p>Thirty water agencies are taking part in the project. Its baseline schedule shows completion in late 2034.</p><p>It may take water only when there is more than older rights, Delta water quality and fish need.</p>',
    sources: [S.sitesWr, S.sites, S.sitesBase] });

  // ----------------------------------------------------------------- conveyance
  add({ id: 'edmonston', kind: 'pump', name: 'Edmonston Pumping Plant', short: 'Edmonston pumps', lon: -118.825, lat: 34.942, tier: 1, zoom: 1,
    lede: 'At the south end of the San Joaquin Valley the California Aqueduct meets the Tehachapi Mountains. Fourteen pumps push the water up and over in a single lift.',
    stats: [['1,926 ft', 'the lift'], ['14', 'pumps of 80,000 horsepower each'], ['444 mi', 'length of the California Aqueduct'], ['45%', 'of requested water the State Water Project delivered in 2026']],
    body: '<p>South of the mountains the aqueduct splits. The West Branch runs to Castaic Lake. The East Branch crosses the desert to reservoirs near San Bernardino and Riverside.</p>' + btn('castaic', 'Castaic Lake') + btn('oroville', 'Where the water starts'),
    sources: [S.edm, S.wefSwp, S.dwrMay, S.dwrGis] });
  add({ id: 'friantkern', kind: 'canalpt', name: 'Friant-Kern Canal: sunk by pumping', short: 'Friant-Kern Canal', lon: -119.17, lat: 35.86, tier: 2,
    lede: 'This 152-mile canal carries San Joaquin River water south by gravity. Groundwater pumping has made the land sink, and the canal sank with it.',
    stats: [['40%', 'of its original capacity: what the worst stretch could carry before repairs'], ['300,000 AF', 'a year of deliveries lost in some years'], ['1M', 'acres of farmland served, roughly'], ['Spring 2024', 'a rebuilt middle section was finished']],
    body: '<p>A canal that runs by gravity needs a steady downhill slope. Where the ground dropped, the canal sagged and water backed up.</p><p>In 2026 the federal government began a $200 million replacement of 13 pump stations along the canal.</p>' + btn('corcoran', 'Why the ground is sinking') + btn('millerton', 'Where the canal starts'),
    sources: [S.fkc, S.fkcNr, S.dwrGis] });
  add({ id: 'laaq', kind: 'canalpt', name: 'Los Angeles Aqueduct', lon: -118.255, lat: 36.978, tier: 2,
    lede: 'Since 1913 this aqueduct has carried the Owens River to Los Angeles by gravity. A 1940 extension reaches north to the streams that feed Mono Lake.',
    stats: [['1913', 'first aqueduct completed'], ['1970', 'second aqueduct completed'], ['181,022 AF', 'a year delivered, 2020–2025 average'], ['531,729 AF', 'the most in one year, in 1983–84']],
    body: '<p>The aqueduct supplies between 10% and 50% of the city\'s water, depending on the year\'s snow.</p>' + btn('mono', 'Mono Lake') + btn('owens', 'Owens Lake') + btn('la', 'Los Angeles'),
    sources: [S.uwmp, S.dwrGis] });

  // ----------------------------------------------------------------- cities
  add({ id: 'la', kind: 'city', name: 'Los Angeles', lon: -118.243, lat: 34.054, tier: 1, zoom: .8,
    lede: 'Little of Los Angeles\'s water comes from Los Angeles. Most arrives through aqueducts from the eastern Sierra, northern California and the Colorado River.',
    stats: [['54%', 'bought from the Metropolitan Water District, which imports it'], ['38%', 'from the Los Angeles Aqueduct'], ['6% and 2%', 'local groundwater and recycled water'], ['101 gallons', 'used per person per day in 2024']],
    body: '<p>The shares are averages for the five years to mid-2025. The city\'s utility serves about 3.88 million people.</p><p>The city plans to turn wastewater into drinking water at a plant that could make up to 210 million gallons a day. That project is still being planned.</p>' + btn('laaq', 'The Los Angeles Aqueduct') + btn('havasu', 'The Colorado River Aqueduct') + btn('edmonston', 'Water from the north'),
    sources: [S.uwmp] });
  add({ id: 'sandiego', kind: 'city', name: 'San Diego', lon: -117.164, lat: 32.716, tier: 1, zoom: .8,
    lede: 'San Diego County bought its own Colorado River supply from Imperial Valley farmers and built a seawater desalination plant.',
    stats: [['200,000 AF', 'a year bought from the Imperial Irrigation District'], ['77,700 AF', 'a year saved by lining two desert canals with concrete'], ['About 10%', 'of the region\'s demand met by desalination'], ['22', 'local agencies supplied by the county water authority']],
    body: '<p>The farm-to-city transfer runs to at least 2047. The water authority calls it the largest in the nation.</p><p>The city is also building a plant to purify wastewater for drinking. In August 2026 it was preparing to start up.</p>' + btn('carlsbad', 'The desalination plant') + btn('imperial', 'Imperial Valley farms'),
    sources: [S.sdCol, S.sdDesal, S.acc, ['City of San Diego memo, 27 Aug 2026', 'https://www.sandiego.gov/sites/default/files/2026-08/recycled-water-system-status-update-september-2026.pdf']] });
  add({ id: 'carlsbad', kind: 'desal', name: 'Carlsbad Desalination Plant', short: 'Carlsbad desalination', lon: -117.335, lat: 33.139, tier: 2,
    lede: 'A plant that turns seawater into drinking water for San Diego County. It opened in December 2015.',
    stats: [['50M+ gallons', 'of drinking water a day'], ['56,000 AF', 'a year at most'], ['About 400,000', 'people\'s worth of supply'], ['$1B', 'cost to build']],
    body: '<p>The county water authority buys the water under a 30-year contract with the plant\'s private owner.</p>',
    sources: [S.sdDesal] });
  add({ id: 'oc', kind: 'reuse', name: 'Orange County\'s recycled water', short: 'Orange County reuse', lon: -117.946, lat: 33.691, tier: 2,
    lede: 'A plant in Fountain Valley purifies treated wastewater and puts it into the ground, where it becomes part of the drinking water supply. It has run since January 2008.',
    stats: [['130M gallons', 'purified a day'], ['1M', 'people\'s worth of supply'], ['85%', 'of the water for 2.5 million people in north and central Orange County comes from the groundwater basin'], ['733,000 AF', 'of recycled water used statewide in 2025']],
    body: '<p>The district calls it the world\'s largest system of its kind. California set a goal of recycling 2.5 million AF a year. In 2025 about 1.5 million AF of treated wastewater was still sent to the ocean.</p><p>Since October 2024 state rules also allow purified wastewater to go straight into drinking water pipes.</p>',
    sources: [S.ocwd, S.ocwd2, S.recycled, S.dpr] });
  add({ id: 'sf', kind: 'city', name: 'San Francisco', lon: -122.416, lat: 37.778, tier: 1, zoom: .8,
    lede: 'San Francisco\'s water comes from the Tuolumne River in Yosemite National Park, through its own aqueduct across the Central Valley.',
    stats: [['85%', 'of the regional system\'s water is Sierra snowmelt'], ['15%', 'comes from local reservoirs in Alameda and San Mateo counties'], ['2.4M', 'people supplied in four counties'], ['160 mi', 'from Yosemite, by gravity']],
    body: btn('hetchy', 'Hetch Hetchy Reservoir'),
    sources: [S.bawsca, S.dwrGis] });
  add({ id: 'oakland', kind: 'city', name: 'Oakland and the East Bay', short: 'Oakland', lon: -122.271, lat: 37.804, tier: 3,
    lede: 'The East Bay\'s water starts in the Mokelumne River watershed in the Sierra and travels 90 miles through the Mokelumne Aqueducts.',
    stats: [['1.5M', 'water customers'], ['90 mi', 'from the Sierra'], ['90%', `full: Pardee Reservoir, the system's main mountain storage, on ${NOV}`]],
    sources: [S.ebmud, S.ebmud2, S.res] });
  add({ id: 'sanjose', kind: 'city', name: 'San Jose', lon: -121.891, lat: 37.336, tier: 2,
    lede: 'Santa Clara County imports about half of its water. The rest comes from local reservoirs and the groundwater basin under the valley.',
    stats: [['About 50%', 'of the county\'s supply is imported']],
    body: '<p>The imported water arrives from the Delta through state and federal canals and from San Francisco\'s Hetch Hetchy system. The county\'s largest reservoir has been out of service since 2020.</p>' + btn('anderson', 'Anderson Reservoir'),
    sources: [S.vw] });
  add({ id: 'sacramento', kind: 'city', name: 'Sacramento', lon: -121.494, lat: 38.581, tier: 1, zoom: .8,
    lede: 'The state capital sits where the American River joins the Sacramento. The State Water Resources Control Board, which issues and polices water rights, is based here.',
    stats: [['1914', 'since this year a new right to take river water needs a state permit'], ['2', 'main kinds of right: riparian and appropriative']],
    body: '<p>A riparian right belongs to land that touches a river. It is not lost if unused, and it cannot be used to store water.</p><p>An appropriative right is a right to take a set amount and use it somewhere else. When water is short, older appropriative rights are served before newer ones.</p>' + btn('folsom', 'Folsom Lake') + btn('mono', 'A limit on those rights'),
    sources: [S.faq] });
  add({ id: 'fresno', kind: 'city', name: 'Fresno', lon: -119.787, lat: 36.738, tier: 2,
    lede: 'The largest city in the San Joaquin Valley sits over the Kings groundwater basin, one of 21 basins the state lists as critically overdrafted.',
    stats: [['1,533 sq mi', 'area of the Kings basin'], ['19%', `full: Pine Flat Lake on the Kings River, ${NOV}`], ['43%', 'full: Millerton Lake on the San Joaquin River, the same day']],
    body: btn('corcoran', 'Groundwater in the valley') + btn('millerton', 'Millerton Lake'),
    sources: [S.cod, S.res] });

  // ----------------------------------------------------------------- farms
  add({ id: 'sacvalley', kind: 'farm', name: 'Sacramento Valley rice', short: 'Rice country', lon: -121.98, lat: 39.25, tier: 1, zoom: .8,
    lede: 'The flat clay soils north of Sacramento hold water well, and most of California\'s rice grows here in flooded fields.',
    stats: [['500,000', 'acres of rice fields'], ['100%', 'of contract water allocated in 2026 to the valley\'s senior federal contractors'], ['230', 'wildlife species use the flooded fields']],
    body: '<p>Many irrigation districts here took water from the Sacramento River before Shasta Dam was built. Their contracts with the federal project reflect those older rights, so they are cut last.</p><p>The rice industry says 95% of California\'s original wetlands are gone and that winter-flooded fields now stand in for them.</p>' + btn('sites', 'A reservoir planned nearby'),
    sources: [S.rice, S.cvpFeb] });
  add({ id: 'westlands', kind: 'farm', name: 'Westlands Water District', short: 'Westlands', lon: -120.103, lat: 36.429, tier: 1, zoom: .8,
    lede: 'A farming district of more than 600,000 acres on the dry west side of the San Joaquin Valley. It depends on water pumped from the Delta.',
    stats: [['600,000+', 'acres in the district'], ['242,000+', 'acres left unplanted in 2025'], ['28%', 'of its federal contract water allocated in 2026'], ['About 700', 'farms']],
    body: '<p>Westlands holds the largest contract with the Central Valley Project, but its rights are newer than most. In 2026 its allocation started at 15% in February and was raised three times.</p><p>When canal water falls short, farms here pump groundwater or leave land unplanted.</p>' + btn('sanluis', 'San Luis Reservoir') + btn('corcoran', 'Groundwater in the valley'),
    sources: [S.crsCvp, S.wwd, S.cvpFeb, S.cvpAug] });
  add({ id: 'almonds', kind: 'farm', name: 'Almond orchards', short: 'Almonds', lon: -120.55, lat: 37.33, tier: 2,
    lede: 'Orchards and vineyards now cover nearly half of California\'s irrigated cropland. Unlike a vegetable field, an orchard cannot be left dry for a year.',
    stats: [['1.39M', 'acres of nut-bearing almond trees in 2026'], ['47,588', 'acres of almond trees removed in the past year'], ['60%+', 'of irrigated land in the San Joaquin Valley was in orchards and vines in 2018'], ['8.5M', 'acres of irrigated cropland statewide']],
    body: '<p>Almonds grow the length of the Central Valley. This marker stands in the orchards of Merced County.</p>',
    sources: [S.almond, S.ppic] });
  add({ id: 'imperial', kind: 'farm', name: 'Imperial Valley farms', short: 'Imperial Valley', lon: -115.5, lat: 32.95, tier: 1, zoom: .8,
    lede: 'A desert valley farmed entirely with Colorado River water. The Imperial Irrigation District consumes more than half of all the Colorado River water California uses.',
    stats: [['2.19M AF', 'consumed in 2025'], ['60%', 'of all the Colorado River water California consumed that year'], ['500,000', 'acres of alfalfa, grasses and winter vegetables, roughly'], ['255,300 AF', 'left in Lake Mead in 2025 under a federally paid conservation deal']],
    body: '<p>The water arrives through the 80-mile All-American Canal, which runs just north of the Mexican border. The district\'s rights are among the oldest on the river.</p><p>The district sends 200,000 AF a year to San Diego County under a 2003 agreement. Water that drains off the fields flows to the Salton Sea.</p>' + btn('imperialdam', 'California\'s share of the river') + btn('salton', 'The Salton Sea'),
    sources: [S.acc, S.calm, S.aac, S.sdCol] });
  add({ id: 'coachella', kind: 'farm', name: 'Coachella Valley', lon: -116.15, lat: 33.62, tier: 3,
    lede: 'Date palms, vegetables, golf courses and resort towns in a valley that gets about three inches of rain a year. Colorado River water arrives through the 123-mile Coachella Canal.',
    stats: [['317,762 AF', 'of Colorado River water consumed in 2025'], ['3.4B gallons', 'of wastewater recycled a year by the valley\'s main water district, roughly']],
    body: '<p>The local water district says more water is pumped from the valley\'s aquifer than nature puts back. It uses imported water to refill it.</p>' + btn('aguacaliente', 'A tribe\'s claim to the groundwater'),
    sources: [S.acc, S.cvwdGw, S.aac] });
  add({ id: 'paloverde', kind: 'farm', name: 'Palo Verde Valley', short: 'Palo Verde', lon: -114.66, lat: 33.6, tier: 2,
    lede: 'Farms around Blythe, on the Colorado River itself. Farmers here are paid to leave some fields unplanted so that the water stays in the river system.',
    stats: [['291,223 AF', 'consumed in 2025'], ['117,021 AF', 'left in Lake Mead in 2025 by not planting fields'], ['131,298', 'acres in the irrigation district, roughly']],
    body: '<p>The Metropolitan Water District, Southern California\'s urban wholesaler, runs the program with the irrigation district.</p>',
    sources: [S.acc, S.pvid] });
  add({ id: 'salinas', kind: 'farm', name: 'Salinas Valley', lon: -121.62, lat: 36.62, tier: 3,
    lede: 'A coastal valley of lettuce and other vegetables that is watered almost entirely from wells. The aquifers nearest the coast are on the state\'s critical list.',
    stats: [['140 sq mi', 'area of the critically overdrafted basin near the coast']],
    body: '<p>Turn on the Groundwater layer to see the basin.</p>',
    sources: [S.cod] });
  add({ id: 'kernoil', kind: 'oil', name: 'Oil field water on crops', short: 'Oil field water', lon: -118.983, lat: 35.456, tier: 3,
    lede: 'Oil wells near Bakersfield bring up water along with oil. After treatment, some of it is delivered to nearby irrigation districts and used on crops.',
    body: '<p>The regional water board runs a food safety program that tests this water and the crops grown with it. The districts that receive it include Cawelo, North Kern and Kern-Tulare.</p>',
    sources: [S.oil] });

  // ----------------------------------------------------------------- groundwater
  add({ id: 'corcoran', kind: 'well', name: 'The sinking valley', short: 'Sinking ground', lon: -119.56, lat: 36.098, tier: 1, zoom: .8,
    lede: 'When more water is pumped from the ground than soaks back in, the land above can sink for good. Parts of the San Joaquin Valley have dropped by as much as 28 feet.',
    stats: [['28 ft', 'the most the land had sunk by 1970'], ['3,100 sq mi', 'sank more than an inch in the year to September 2025'], ['7 in', 'the most in that year, near old Tulare Lake'], ['8.1M AF', 'of groundwater lost from Central Valley storage since 2019']],
    body: '<p>Wells supply about 42% of the water California\'s farms and cities use in an average year, and more than half in dry years.</p><p>Sinking land has damaged canals, and falling water tables leave household wells dry: 1,441 were reported dry in 2015 and 106 in 2025.</p>' + btn('probation', 'What the state is doing') + btn('friantkern', 'A canal that sank'),
    sources: [S.usgsSub, S.gw, S.wb] });
  add({ id: 'probation', kind: 'well', kindLabel: 'Groundwater law', name: 'Basins on probation', short: 'Probation', lon: -119.05, lat: 36.07, tier: 2,
    lede: 'A 2014 law requires local agencies to stop overdrawing groundwater. Where their plans fall short, the state can step in. This basin, the Tule, is one of two on probation.',
    stats: [['94', 'of California\'s 515 groundwater basins fall under the law'], ['21', 'are listed as critically overdrafted'], ['2040', 'deadline for those 21 to reach balance'], ['2', 'basins on probation: Tulare Lake (April 2024) and Tule (September 2024)']],
    body: '<p>On probation, well owners who pump more than 20 AF a year must measure and report what they take to the state. Four other basins fixed their plans and returned to normal oversight: Chowchilla, Kaweah, Kern County and Delta-Mendota.</p><p>Turn on the Groundwater layer to see the basins.</p>',
    sources: [S.sgma, S.sgmaSwb, S.dm] });
  add({ id: 'kwb', kind: 'recharge', name: 'Kern Water Bank', lon: -119.267, lat: 35.30, tier: 2,
    lede: 'In wet years, spare river and canal water is spread over these sandy ponds and sinks into the ground. In dry years it is pumped back out.',
    stats: [['1.5M AF', 'can be stored underground'], ['32 sq mi', 'area of the bank'], ['4.6M AF', 'put into the ground on purpose statewide in the wet year of 2023'], ['1.1M AF', 'statewide in 2025']],
    sources: [S.kwb, S.gw] });

  // ----------------------------------------------------------------- tribes
  add({ id: 'aguacaliente', kind: 'tribe', name: 'Agua Caliente Band of Cahuilla Indians', short: 'Agua Caliente', lon: -116.54, lat: 33.825, tier: 2,
    lede: 'The tribe\'s reservation is a checkerboard of land in and around Palm Springs. In 2017 a federal appeals court ruled that its water rights extend to the groundwater under it.',
    stats: [['20,000 AF', 'a year for the tribe under a proposed settlement'], ['$500M', 'federal trust fund in the Senate bill'], ['34,000', 'acres in the reservation']],
    body: '<p>The settlement needs approval from Congress. A Senate committee held a hearing on it on 29 July 2026.</p>',
    sources: [S.agua] });
  add({ id: 'hoopa', kind: 'tribe', name: 'Hoopa Valley and Yurok tribes', short: 'Hoopa and Yurok', lon: -123.674, lat: 41.05, tier: 2,
    lede: 'The Trinity River runs through the Hoopa Valley Reservation and joins the Klamath on the Yurok Reservation. Salmon in both rivers are central to both tribes.',
    stats: [['48%', 'of the water flowing into Trinity Lake must now stay in the river'], ['400+ mi', 'of the Klamath and its streams reopened by dam removal']],
    body: btn('trinity', 'Trinity Lake') + btn('klamath', 'The Klamath dam removals'),
    sources: [S.trrp, S.krrc] });
  add({ id: 'fortyuma', kind: 'tribe', name: 'Quechan Tribe (Fort Yuma Reservation)', short: 'Quechan', lon: -114.62, lat: 32.76, tier: 3,
    lede: 'The Quechan Tribe farms with Colorado River water taken at Imperial Dam.',
    stats: [['17,022 AF', 'consumed in 2025'], ['13,000 AF', 'left in Lake Mead in 2025 under a deal with the Metropolitan Water District']],
    sources: [S.acc] });
  add({ id: 'sanluisrey', kind: 'tribe', name: 'San Luis Rey bands', lon: -116.99, lat: 33.31, tier: 3,
    lede: 'Five bands in northern San Diego County settled their water claims with water saved far away. Lining the All-American and Coachella canals with concrete stopped leaks, and part of the saving goes to them.',
    stats: [['16,000 AF', 'a year of saved canal water for the bands']],
    body: '<p>The bands are La Jolla, Rincon, San Pasqual, Pauma and Pala.</p>',
    sources: [S.sdCol, S.acc] });

  // ----------------------------------------------------------------- lines and areas
  const riverStyle = {
    Sacramento: { w: 4.6, reaches: [{ test: (lon, lat) => lat > 40.6, w: 2.4 }] }, 'San Joaquin': { w: 3, reaches: [{ test: (lon, lat) => lon > -120.5 && lat < 37.2, w: 1.8 }] },
    Colorado: { w: 4.2 }, Klamath: { w: 3.4 }, Feather: { w: 3 }, American: { w: 2.4 }, Trinity: { w: 2.2 }, Pit: { w: 2.2 }, Eel: { w: 2.2 },
    Tuolumne: { w: 1.9 }, Merced: { w: 1.7 }, Stanislaus: { w: 1.7 }, Mokelumne: { w: 1.5 }, Kings: { w: 1.9 }, Kern: { w: 1.7 }, Owens: { w: 1.5 }, Russian: { w: 1.6 },
    Salinas: { w: 1.3 }, Yuba: { w: 1.8 }, 'North Yuba': { w: 1.2 }, Truckee: { w: 1.4 }, Kaweah: { w: 1.2 }, Tule: { w: 1 }, 'Santa Ana': { w: 1.1 }, 'Los Angeles': { w: 1.1 },
    New: { w: 1 }, Alamo: { w: 1 }, McCloud: { w: 1.4 }, 'North Fork Feather': { w: 1.5 }, 'Middle Fork Feather': { w: 1.3 }, 'North Fork American': { w: 1.3 }, 'S.  Fk.  American': { w: 1.3 },
    Scott: { w: 1.2 }, Shasta: { w: 1.2 }, Smith: { w: 1.3 }, Mad: { w: 1.1 }, 'South Fork Eel': { w: 1.3 }, Cosumnes: { w: 1.1 }, 'Cache Creek': { w: 1.1 }, 'Putah Creek': { w: 1.1 },
    Gila: { w: 2 },
  };
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const rivers = {
    Sacramento: rv('California\'s largest river. It gathers the rain and snowmelt of the northern mountains and carries it south to the Delta.',
      [['49%', `full: Shasta Lake, its main reservoir, on ${NOV}`], ['986,000 AF', 'a year the planned Sites Reservoir may take from it in wet months']], btn('shasta', 'Shasta Lake') + btn('delta', 'The Delta') + btn('sacvalley', 'Rice country'), [S.res, S.sitesWr]),
    'San Joaquin': rv('The river of the southern Central Valley. Friant Dam sends most of its water into canals, so the river below is much smaller than it once was.',
      [['43%', `full: Millerton Lake, behind Friant Dam, on ${NOV}`]], btn('millerton', 'Millerton Lake') + btn('delta', 'The Delta'), [S.res]),
    Colorado: rv('The river forms California\'s border with Arizona. California holds the largest share of it, and nearly all of that is used in the desert valleys and on the south coast.',
      [['4.4M AF', 'a year: California\'s basic share'], ['3.65M AF', 'consumed in 2025'], ['440,000 AF', 'a year to be given up in 2027 and 2028']], btn('imperialdam', 'California\'s share') + btn('havasu', 'The Colorado River Aqueduct'), [S.acc, S.doi]),
    Klamath: rv('The Klamath starts in Oregon and reaches the Pacific on the Yurok Reservation. Four dams were removed from it in 2023 and 2024.',
      [['400+ mi', 'of river and streams reopened to fish']], btn('klamath', 'The dam removals') + btn('hoopa', 'The tribes on the river'), [S.krrc]),
    Trinity: rv('The largest tributary of the Klamath. Part of its water is sent through a tunnel to the Sacramento River.', [['48%', 'of the water flowing into Trinity Lake must stay in the river']], btn('trinity', 'Trinity Lake') + btn('hoopa', 'The tribes on the river'), [S.trrp]),
    Feather: rv('The river behind Oroville Dam. Its water is the main supply of the State Water Project.', [['42%', `full: Lake Oroville on ${NOV}`]], btn('oroville', 'Lake Oroville'), [S.res]),
    American: rv('The American River meets the Sacramento in the state capital.', [['37%', `full: Folsom Lake on ${NOV}`]], btn('folsom', 'Folsom Lake') + btn('sacramento', 'Sacramento'), [S.res]),
    Tuolumne: rv('The Tuolumne rises in Yosemite. San Francisco takes water from it at Hetch Hetchy, and two irrigation districts take more at Don Pedro Reservoir.', [], btn('hetchy', 'Hetch Hetchy') + btn('donpedro', 'Don Pedro Reservoir'), [S.res]),
    Stanislaus: rv('A Sierra river dammed at New Melones Lake.', [], btn('newmelones', 'New Melones Lake'), [S.res]),
    Mokelumne: rv('The East Bay\'s water supply. Aqueducts carry it 90 miles from the Sierra foothills to Oakland and its neighbors.', [], btn('oakland', 'Oakland and the East Bay'), [S.ebmud]),
    Kings: rv('The Kings River waters farms around Fresno. In very wet years what is left flows into the old bed of Tulare Lake.', [['19%', `full: Pine Flat Lake on ${NOV}`]], btn('pineflat', 'Pine Flat Lake') + btn('tularelake', 'Tulare Lake'), [S.res]),
    Kern: rv('The southernmost Sierra river. Around Bakersfield its water is spread into canals and recharge ponds.', [], btn('kwb', 'Kern Water Bank'), [S.kwb]),
    Owens: rv('The river of the eastern Sierra. Since 1913 most of it has gone into the Los Angeles Aqueduct.', [], btn('laaq', 'The Los Angeles Aqueduct') + btn('owens', 'Owens Lake'), [S.uwmp]),
    New: rv('The New River carries farm drainage north from the Mexican border to the Salton Sea.', [], btn('salton', 'The Salton Sea'), [S.salton]),
    Alamo: rv('The Alamo River carries farm drainage through the Imperial Valley to the Salton Sea.', [], btn('salton', 'The Salton Sea'), [S.salton]),
    _default: rv('One of the rivers and streams that carry California\'s rain and snowmelt to the valleys and the sea.', [], '', [S.osm]),
  };
  const SWP = 'State Water Project', CVP = 'Central Valley Project';
  const canals = {
    'California Aqueduct': { kind: SWP, lede: 'The main canal of the State Water Project. It runs 444 miles from the Delta down the west side of the San Joaquin Valley and over the mountains to Southern California.',
      stats: [['444 mi', 'long'], ['27M', 'people get some water from the project'], ['750,000', 'acres of farmland supplied, roughly'], ['45%', 'of requested water delivered in 2026']],
      body: '<p>One stretch in the middle is shared with the federal Central Valley Project.</p>' + btn('pumps', 'Where it starts') + btn('edmonston', 'Where it climbs the mountains'), sources: [S.wefSwp, S.dwrMay, S.dwrGis] },
    'California Aqueduct, East Branch': { kind: SWP, lede: 'The branch of the California Aqueduct that crosses the Mojave Desert to reservoirs near San Bernardino and Riverside.', body: btn('edmonston', 'Edmonston Pumping Plant'), sources: [S.dwrGis] },
    'California Aqueduct, West Branch': { kind: SWP, lede: 'The branch of the California Aqueduct that runs to Castaic Lake, north of Los Angeles.', body: btn('castaic', 'Castaic Lake'), sources: [S.dwrGis] },
    'Coastal Branch Aqueduct': { kind: SWP, lede: 'A branch of the California Aqueduct, mostly pipeline, that carries water to San Luis Obispo and Santa Barbara counties.', sources: [S.dwrGis] },
    'South Bay Aqueduct': { kind: SWP, lede: 'A State Water Project branch that carries Delta water to Alameda and Santa Clara counties.', body: btn('sanjose', 'San Jose'), sources: [S.dwrGis] },
    'North Bay Aqueduct': { kind: SWP, lede: 'A State Water Project pipeline that carries Delta water to Napa and Solano counties.', sources: [S.dwrGis] },
    'Delta-Mendota Canal': { kind: CVP, lede: 'The federal canal that carries water pumped from the Delta 117 miles south. Much of it replaces San Joaquin River water that Friant Dam sends elsewhere.',
      stats: [['117 mi', 'long'], ['4.30M AF', 'pumped from the Delta by the state and federal plants together in 2024']], body: btn('pumps', 'The Delta pumps') + btn('westlands', 'Westlands Water District'), sources: [S.crsCvp, S.dwrGis] },
    'Friant-Kern Canal': { kind: CVP, lede: 'A 152-mile federal canal from Friant Dam to Bakersfield. Parts of it have sunk as the land subsided.',
      stats: [['152 mi', 'long'], ['1M', 'acres served, roughly'], ['40%', 'of original capacity: what the worst stretch could carry before repairs']], body: btn('friantkern', 'More on the canal'), sources: [S.fkc, S.dwrGis] },
    'Madera Canal': { kind: CVP, lede: 'A federal canal that carries San Joaquin River water north from Friant Dam.', body: btn('millerton', 'Millerton Lake'), sources: [S.dwrGis] },
    'Tehama-Colusa Canal': { kind: CVP, lede: 'A federal canal that carries Sacramento River water down the west side of the Sacramento Valley.', body: btn('sacvalley', 'Sacramento Valley farms'), sources: [S.dwrGis] },
    'Clear Creek Tunnel': { kind: CVP, icon: 'canal', lede: 'A tunnel that carries Trinity River water east from Lewiston Dam to Whiskeytown Lake, on its way to the Sacramento River.', body: btn('trinity', 'Trinity Lake'), sources: [S.ops, S.dwrGis] },
    'Pacheco Tunnel and Conduit': { kind: CVP, icon: 'canal', lede: 'A tunnel and pipelines that carry water from San Luis Reservoir west under the Coast Range to Santa Clara and San Benito counties.', body: btn('sanluis', 'San Luis Reservoir') + btn('sanjose', 'San Jose'), sources: [S.dwrGis] },
    'All-American Canal': { kind: 'Colorado River water', lede: 'An 80-mile canal from Imperial Dam to the Imperial Valley. It is the valley\'s only source of water.',
      stats: [['80 mi', 'long'], ['2.19M AF', 'taken for the Imperial Irrigation District at Imperial Dam in 2025'], ['67,700 AF', 'saved in 2025 by the concrete lining of one section']], body: btn('imperial', 'Imperial Valley farms'), sources: [S.aac, S.acc, S.dwrGis] },
    'Coachella Canal': { kind: 'Colorado River water', lede: 'A 123-mile branch of the All-American Canal that carries Colorado River water north to the Coachella Valley.',
      stats: [['123 mi', 'long'], ['337,717 AF', 'taken for the Coachella Valley at Imperial Dam in 2025'], ['30,850 AF', 'saved in 2025 by its concrete lining']], body: btn('coachella', 'Coachella Valley'), sources: [S.aac, S.acc, S.dwrGis] },
    'Colorado River Aqueduct': { kind: 'Colorado River water', lede: 'A 242-mile aqueduct from Lake Havasu to Lake Mathews, near Riverside. It brings Colorado River water to the cities of the south coast.',
      stats: [['242 mi', 'long'], ['1,617 ft', 'total lift'], ['812,927 AF', 'taken from Lake Havasu in 2025']], body: btn('havasu', 'More on the aqueduct'), sources: [S.mwd21, S.mwd22, S.acc, S.dwrGis] },
    'Los Angeles Aqueduct': { kind: 'City aqueduct', lede: 'Carries water from the Owens Valley and the Mono Basin to Los Angeles by gravity. The first aqueduct was finished in 1913 and a second in 1970.',
      stats: [['181,022 AF', 'a year delivered, 2020–2025 average']], body: btn('laaq', 'More on the aqueduct'), sources: [S.uwmp, S.dwrGis] },
    'Hetch Hetchy Aqueduct': { kind: 'City aqueduct', lede: 'San Francisco\'s tunnels and pipelines from the Tuolumne River across the Central Valley to the Bay Area.', stats: [['160 mi', 'from Yosemite, by gravity']], body: btn('hetchy', 'Hetch Hetchy Reservoir') + btn('sf', 'San Francisco'), sources: [S.bawsca, S.dwrGis] },
    'Mokelumne Aqueduct': { kind: 'City aqueduct', lede: 'Three pipelines that carry Mokelumne River water across the Delta to the East Bay.', stats: [['90 mi', 'from the Sierra to the East Bay']], body: btn('oakland', 'Oakland and the East Bay'), sources: [S.ebmud, S.dwrGis] },
    'San Diego Aqueduct': { kind: 'City aqueduct', lede: 'Pipelines and canals that carry imported water south to San Diego County.', body: btn('sandiego', 'San Diego'), sources: [S.dwrGis] },
    'Glenn-Colusa Canal': { lede: 'The main canal of the largest irrigation district in the Sacramento Valley. It takes water from the Sacramento River.', body: btn('sacvalley', 'Sacramento Valley farms'), sources: [S.dwrGis] },
    cvp: { kind: CVP, lede: 'A canal of the federal Central Valley Project.', body: btn('shasta', 'About the Central Valley Project'), sources: [S.crsCvp, S.dwrGis] },
    swp: { kind: SWP, lede: 'Part of the State Water Project.', body: btn('oroville', 'About the State Water Project'), sources: [S.wefSwp, S.dwrGis] },
    _default: { lede: 'A main canal of a local irrigation district. It carries river water to farm fields.', body: '<p>California has thousands of miles of canals. Only some of the larger ones are drawn.</p>', sources: [S.dwrGis] },
  };
  const COD = { 'Cuyama Valley Basin': 378, 'Santa Cruz Mid-County Basin': 56, 'Chowchilla Basin': 227, 'Kaweah Basin': 689, 'Oxnard Basin': 90, 'Merced Basin': 801, 'Borrego Springs Basin': 98, 'Indian Wells Valley Basin': 596, 'Eastern San Joaquin Basin': 1195,
    'Salinas Valley 180/400-Foot Aquifer': 140, 'Pleasant Valley Basin (Ventura County)': 31, 'Paso Robles Basin': 681, 'Westside Basin': 972, 'Kern County Basin': 2785, 'Delta-Mendota Basin': 1195, 'Pajaro Valley Basin': 117, 'Madera Basin': 543, 'Kings Basin': 1533,
    'Tulare Lake Basin': 837, 'Tule Basin': 746, 'Los Osos Basin': 7 };
  const codBase = '<p>The state lists 21 basins as critically overdrafted: more water has been pumped out than soaks back in, with lasting harm. Local agencies must bring each one into balance by 2040.</p>';
  const codCard = (n, lede, extra) => ({ lede, stats: [[COD[n].toLocaleString('en-US') + ' sq mi', 'area of the basin']], body: codBase + (extra || ''), sources: [S.cod, S.sgma] });
  const back = '<p>The State Water Board found its first plans inadequate. The agencies revised them and the basin returned to normal state oversight.</p>';
  const amas = {
    'Tulare Lake Basin': { lede: 'A critically overdrafted basin under the old lakebed. In April 2024 it became the first basin the State Water Board placed on probation.', stats: [['837 sq mi', 'area of the basin'], ['7 in', 'the most the land sank in the Tulare Lake region in the year to September 2025']], body: codBase + btn('probation', 'What probation means') + btn('corcoran', 'The sinking ground'), sources: [S.cod, S.sgmaSwb, S.gw] },
    'Tule Basin': { lede: 'A critically overdrafted basin around Porterville. The State Water Board placed it on probation on 17 September 2024.', stats: [['746 sq mi', 'area of the basin']], body: codBase + btn('probation', 'What probation means') + btn('friantkern', 'The canal that sank here'), sources: [S.cod, S.sgmaSwb] },
    'Kaweah Basin': codCard('Kaweah Basin', 'A critically overdrafted basin around Visalia and Tulare.', back),
    'Kern County Basin': codCard('Kern County Basin', 'The largest of the critically overdrafted basins, at the south end of the San Joaquin Valley.', back + btn('kwb', 'Kern Water Bank')),
    'Delta-Mendota Basin': codCard('Delta-Mendota Basin', 'A critically overdrafted basin along the west side of the San Joaquin Valley. In April 2026 it became the fourth basin to return from state review to normal oversight.'),
    'Chowchilla Basin': codCard('Chowchilla Basin', 'A critically overdrafted basin in Madera and Merced counties.', back),
    'Westside Basin': codCard('Westside Basin', 'The critically overdrafted basin under Westlands Water District.', btn('westlands', 'Westlands Water District')),
    'Kings Basin': codCard('Kings Basin', 'A critically overdrafted basin under Fresno and the farms around it.', btn('fresno', 'Fresno')),
    'Salinas Valley 180/400-Foot Aquifer': codCard('Salinas Valley 180/400-Foot Aquifer', 'A critically overdrafted basin at the coastal end of the Salinas Valley, named for the depths of its two main aquifers.', btn('salinas', 'Salinas Valley')),
    'Pleasant Valley Basin (Fresno County)': { lede: 'A basin around Coalinga. In 2026 the State Water Board was weighing whether to put it on probation.', body: btn('probation', 'What probation means'), sources: [S.sgmaSwb, S.prio] },
    'Orange County Basin': { lede: 'The groundwater basin under north and central Orange County. It is refilled on purpose with river water, imported water and purified wastewater.', stats: [['85%', 'of the water supply for 2.5 million people comes from this basin']], body: btn('oc', 'Orange County\'s recycled water'), sources: [S.ocwd2, S.prio] },
    'Coachella Valley Basin (Indio)': { lede: 'The main groundwater basin of the Coachella Valley. The local water district says it is in overdraft and refills it with imported water.', body: btn('coachella', 'Coachella Valley') + btn('aguacaliente', 'A tribe\'s claim to this groundwater'), sources: [S.cvwdGw, S.prio] },
    _cod: { lede: 'One of the 21 groundwater basins the state lists as critically overdrafted.', body: codBase + btn('probation', 'How the law works'), sources: [S.cod, S.sgma] },
    _sgma: { lede: 'A groundwater basin the state ranks as high or medium priority. Under the 2014 groundwater law, local agencies must bring it into balance by 2042.', body: '<p>The law covers 94 of California\'s 515 basins. They account for most of the groundwater pumped in the state.</p>' + btn('probation', 'How the law works'), sources: [S.prio, S.sgma] },
    _default: { lede: 'A groundwater basin managed under the 2014 groundwater law.', body: btn('probation', 'How the law works'), sources: [S.prio, S.sgma] },
  };
  for (const n in COD) if (!amas[n]) amas[n] = codCard(n, 'One of the 21 groundwater basins the state lists as critically overdrafted.', btn('probation', 'How the law works'));
  const crTribe = (lede, stats) => ({ lede, stats, body: '<p>Tribes along the lower Colorado River hold some of the oldest rights on the river.</p>' + btn('imperialdam', 'California\'s share of the river'), sources: [S.acc] });
  const slr = { lede: 'One of five bands in northern San Diego County that settled their water claims together.', body: btn('sanluisrey', 'The San Luis Rey settlement'), sources: [S.sdCol] };
  const tribes = {
    'Agua Caliente': { lede: 'The Agua Caliente Indian Reservation, a checkerboard of land in and around Palm Springs.', body: btn('aguacaliente', 'The tribe\'s groundwater rights'), sources: [S.agua] },
    'Hoopa Valley': { lede: 'The Hoopa Valley Reservation, on the Trinity River.', body: btn('hoopa', 'Tribes on the Klamath and Trinity'), sources: [S.trrp] },
    Yurok: { lede: 'The Yurok Reservation follows the lower Klamath River to the sea.', body: btn('hoopa', 'Tribes on the Klamath and Trinity') + btn('klamath', 'The dam removals'), sources: [S.krrc] },
    'Fort Yuma': { lede: 'The Fort Yuma Reservation of the Quechan Tribe, on the Colorado River.', body: btn('fortyuma', 'The Quechan Tribe'), sources: [S.acc] },
    'Colorado River': crTribe('The Colorado River Indian Reservation lies on both banks of the river. Most of its farmland and water use is on the Arizona side.', [['1,826 AF', 'consumed on the California side in 2025']]),
    Chemehuevi: crTribe('The Chemehuevi Reservation, on the California shore of Lake Havasu.', [['249 AF', 'of Colorado River water consumed in 2025']]),
    'Fort Mojave': crTribe('The Fort Mojave Reservation spans California, Arizona and Nevada.', [['6,715 AF', 'consumed on the California side in 2025']]),
    'La Jolla': slr, Rincon: slr, Pala: slr, 'Pauma and Yuima': slr,
    _default: { lede: 'Tribal land.', body: '<p>A tribe\'s water rights date from the creation of its reservation. In 2017 a federal appeals court ruled that they can include groundwater.</p>' + btn('aguacaliente', 'The case behind that ruling'), sources: [S.agua] },
  };

  // label the big critically overdrafted basins first; small basins only when zoomed in
  const areaLabels = {};
  for (const a of (window.MAPDATA || {}).amas || []) areaLabels[a.n] = { minZ: COD[a.n] ? (COD[a.n] > 2000 ? .3 : COD[a.n] > 500 ? .5 : .9) : 1.2 };

  window.MAPCONTENT = {
    meta: { title: 'California Water: an explorable map', h1: 'California Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of California's water system. Use the lists in the side panel to browse the same information without the map.", home: 'Show all of California' },
    features: F, riverStyle, rivers, canals, amas, tribes,
    golfCard: { lede: 'A golf course mapped by OpenStreetMap contributors.', body: '<p>The state counts golf courses with parks and other large landscapes. Together they were applied about 0.8 million acre-feet of water a year, on average from 2002 to 2023. That is about a tenth of all urban water use.</p>', sources: [S.wb, S.osm] },
    kinds: {
      lake: ['rivers', 'lake', 'Lake'], restore: ['rivers', 'river', 'River restoration'], desal: ['cities', 'reclaim', 'Seawater desalination'], reuse: ['cities', 'reclaim', 'Recycled water'],
      canalpt: ['canals', 'canal', 'Aqueduct'], tribe: ['cities', 'tribe', 'Tribal nation'], well: ['farms', 'well', 'Groundwater'], recharge: ['farms', 'recharge', 'Water banking'],
      farm: ['farms', 'farm', 'Farming region'], oil: ['farms', 'oil', 'Oil field'], pump: ['canals', 'pump', 'Pumping plant'], delta: ['rivers', 'delta', 'River delta'],
    },
    sprites: {
      lake: ['..bbbbbb..', '.bBbbbbBb.', 'bbbbBbbbbb', '.bbBbbbbb.', '..bbbbbb..'],
      oil: ['.kk...........', '.kkkkkkkkkkk..', '.kk..kk....k..', '.....kk....k..', '....kyyk...k..', '...kyyyyk..k..', 'tttttttttttttt'],
    },
    layers: { industry: false, golf: { on: false }, canals: { label: 'Canals & aqueducts' } },
    majorCanals: ['swp', 'cvp', 'crb', 'city'], canalWidths: { swp: 2.8, cvp: 2.1, crb: 2.6, city: 2 },
    canalSub: { swp: 'State Water Project', cvp: 'Central Valley Project', crb: 'Colorado River water', city: 'City aqueduct' },
    riverNames: { 'S.  Fk.  American': 'South Fork American River', 'Fresno Slough': 'Fresno Slough', 'Meadow Valley': 'Meadow Valley Wash' },
    areaKind: n => COD[n] ? 'Critically overdrafted basin' : 'Groundwater basin under the 2014 law',
    areaAlt: n => !COD[n],
    areaLabels,
    fieldSub: 'Farm fields', farmRadiusKm: 60,
    hud: [['77M AF', 'water accounted for per year'], ['39.4M', 'people'], ['18%', 'of average snowpack, 1 Apr 2026']],
    budget: {
      title: 'California accounts for about 77 million acre-feet of water a year',
      lede: 'That is the state\'s own count, averaged over 2002 to 2023. About half is water left in rivers for the environment. Farms get about 40% and cities about 10%.',
      perDrop: 1000000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons.',
      sources: [
        { id: 'surface', label: 'California\'s rivers and streams', pct: 72, af: 55.4e6, color: 'var(--c-instate)', layer: 'rivers,reservoirs', feat: 'snow', note: 'Rain and snowmelt, much of it caught in reservoirs and moved by canals. About two-thirds of this is the environmental water that stays in rivers.' },
        { id: 'ground', label: 'Groundwater', pct: 22, af: 17.0e6, color: 'var(--c-ground)', layer: 'ground', feat: 'corcoran', note: 'Pumped from wells, mostly in the Central Valley. As little as 10.7M AF in a wet year and as much as 23M AF in a dry one.' },
        { id: 'colorado', label: 'Colorado River', pct: 6, af: 4.6e6, color: 'var(--c-colorado)', layer: 'canals', feat: 'imperialdam', note: 'Delivered by canal and aqueduct to the desert valleys and the south coast.' },
      ],
      uses: [
        { id: 'env', label: 'Environment', pct: 49, af: 37.7e6, color: 'var(--c-instate)', layer: 'rivers', feat: 'delta', note: 'Water left in protected wild rivers (23.7M AF), required stream flows (6.7M), required Delta outflow (5.9M) and wildlife wetlands (1.5M).' },
        { id: 'ag', label: 'Farms', pct: 41, af: 31.3e6, color: 'var(--c-ag)', layer: 'farms', feat: 'westlands', note: 'Applied to about 8.5 million acres of irrigated crops.' },
        { id: 'muni', label: 'Cities & towns', pct: 10, af: 8.1e6, color: 'var(--c-muni)', layer: 'cities', feat: 'la', note: 'Homes, businesses, industry and parks for 39.4 million people.' },
      ],
      body: `<div class="note">These figures count <b>applied water</b>: water delivered to a use, whether or not it is used up. Some returns to rivers and aquifers and is used again. They are averages of the Department of Water Resources' yearly water balances. The river figure is the total minus groundwater and Colorado River water.</div>
        <div class="note">California is unusual in counting water left in rivers as a use. Most of it is in wild rivers on the north coast, far from farms and cities. Leaving it out, farms take about 80% of the water people use and cities about 20%.</div>
        <div class="note">The US Geological Survey counts differently. It adds up only water <b>taken out</b> of rivers and wells for farms, cities and industry: 28.7 million AF of fresh water in California in 2015, a drought year. The whole-West map uses that measure.</div>
        <div class="note hot"><b>Wet and dry years:</b> the total ranged from 59M AF in 2022 to 105M AF in 2006. Nearly all of the swing is environmental water. Farm and city use changes much less, because wells make up the difference. <button class="btn" data-feat="corcoran" style="margin-top:6px">See what that does to the ground</button></div>`,
    },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a reservoir, an aqueduct, a field, a river, or open land.',
    browse: [
      ['Snow, rivers and rules', ['snow', 'delta', 'dcp', 'klamath', 'mono', 'owens', 'salton', 'tularelake', 'sacramento']],
      ['Reservoirs', ['shasta', 'oroville', 'trinity', 'folsom', 'sanluis', 'newmelones', 'donpedro', 'hetchy', 'millerton', 'pineflat', 'castaic', 'dvl', 'anderson', 'sites']],
      ['Pumps and aqueducts', ['pumps', 'edmonston', 'friantkern', 'laaq', 'havasu', 'imperialdam']],
      ['Cities', ['la', 'sandiego', 'sf', 'oakland', 'sanjose', 'fresno', 'oc', 'carlsbad']],
      ['Farms', ['sacvalley', 'westlands', 'almonds', 'salinas', 'imperial', 'coachella', 'paloverde', 'kernoil']],
      ['Groundwater', ['corcoran', 'probation', 'kwb']],
      ['Tribes', ['hoopa', 'aguacaliente', 'fortyuma', 'sanluisrey']],
    ],
    riverLabels: [['SACRAMENTO R.', -122.05, 39.75, .35, 78], ['SAN JOAQUIN R.', -120.75, 37.05, .45, 45], ['KLAMATH R.', -123.1, 41.72, .45, 5], ['COLORADO RIVER', -114.42, 33.95, .35, 80], ['FEATHER R.', -121.52, 39.2, .6, 85],
      ['TRINITY R.', -123.25, 40.75, .6, -25], ['EEL R.', -123.75, 40.2, .6, 60], ['PIT R.', -121.3, 41.1, .6, 20], ['KINGS R.', -119.5, 36.62, .7, 40], ['KERN R.', -118.75, 35.5, .7, 40], ['OWENS R.', -118.3, 37.2, .6, 62], ['TUOLUMNE R.', -120.45, 37.6, .7, 10], ['AMERICAN R.', -121.2, 38.62, .8, 15]],
    neighbors: [['OREGON', -121.2, 42.12, 0], ['NEVADA', -116.9, 39.3, 0], ['ARIZONA', -114.05, 34.9, 90], ['MEXICO', -115.6, 32.42, 0], ['PACIFIC OCEAN', -123.2, 35.3, 0]],
    spot: {
      rain: inches => `${inches < 7 ? 'Desert.' : inches < 15 ? 'Dry country. Crops here need irrigation.' : inches < 30 ? 'Moderately wet. Nearly all of it falls between November and April.' : 'Wet coastal or mountain country. In the high mountains most of this falls as snow.'} Most of California's rain and snow falls in the north and the mountains, in winter. Most of its water is used farther south, in summer.`,
      crop: 'cropland', rest: 'grassland, scrub, desert or rock', restAlone: 'Grassland, scrub, desert or bare rock', rulesTitle: 'Water rules here',
      area: n => COD[n]
        ? 'This basin is on the state\'s list of 21 that are critically overdrafted. Under the 2014 groundwater law, local agencies must stop the decline by 2040. If their plan falls short, the State Water Board can put the basin on probation and require pumpers to report what they take.'
        : 'This is one of the 94 basins the state ranks as high or medium priority. Under the 2014 groundwater law, local agencies must have a plan to bring pumping into balance by 2042.',
      basin: n => `This spot is in the <b>${n}</b> hydrologic region, one of ten the state uses for water planning. `,
      none: 'River water is shared under two kinds of right. Land beside a river has a riparian right to use it. Other users hold appropriative rights, and when water is short the older ones are served first. Since 1914 a new right has needed a state permit. Outside the basins covered by the 2014 groundwater law, a landowner may generally pump the groundwater under their land without a state permit.',
      tribal: 'A tribe\'s water rights date from the creation of its reservation. A federal appeals court ruled in 2017 that they can include groundwater.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain and snow: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'], S.faq, S.sgma, S.agua],
    },
    legend: {
      rain: 'About 3 inches a year in the Imperial Valley, 12 at Fresno, 15 at Los Angeles, 20 at Sacramento, and over 100 on the wettest northern mountains. PRISM 1991–2020 normals.',
      groundA: 'Critically overdrafted basin', groundB: 'Other basin under the 2014 groundwater law',
      ground: 'Dashed white lines are the state\'s ten hydrologic regions. Basins not shaded are ranked low priority and are not covered by the law.',
      snow: 'Where snow usually builds up (drawn from elevation and precipitation; not a live snow map). Winter 2025–26 had far less.',
    },
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 4.5 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rain and snow (PRISM 1991–2020 normals). The satellite data shows all cropland, whether or not it is irrigated. Large rivers are from Natural Earth. Smaller rivers, reservoir outlines and golf courses are from OpenStreetMap contributors. Aqueducts and canals, groundwater basins and hydrologic regions are from the California Department of Water Resources. Tribal lands are from the Census Bureau. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. Reservoir readings are from the state's daily report for 11 November 2026. Figures are as of November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'A state that moves its water', text: 'California accounts for about 77 million acre-feet of water a year. About half is left in rivers for the environment. Most of the rain and snow falls in the north and the mountains. Most of the farms and people are farther south. The panel shows where the water comes from and where it goes.', view: 'home', home: true },
      { title: 'It starts as snow', text: 'The white areas are where snow usually builds up in winter. It melts in spring and fills the reservoirs. On 1 April 2026 the snowpack was 18% of average, the second-lowest on record for that date. Reservoirs had started the year fuller than usual, so storage stayed near average.', view: 'home', season: 'winter', select: 'snow', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'Two big projects catch it', text: 'Shasta Lake belongs to the federal Central Valley Project. Lake Oroville belongs to the State Water Project. Both release water down the Sacramento Valley toward the Delta. On 11 November 2026 Oroville was 42% full, which is 80% of average for the date.', box: [-123.3, 38.9, -120.6, 41.2], zoom: .9, select: 'oroville', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'The Delta is the hub', text: 'The rivers meet in the Delta. Pumps at its south end lift water into two canals. About 30 million Californians get some of their drinking water this way, and about 2.5 million acres of farmland are irrigated with it. The pumps took 4.30 million acre-feet in 2024.', box: [-122.4, 37.3, -120.6, 38.7], zoom: 1.3, select: 'delta', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Over the mountains', text: 'The California Aqueduct runs 444 miles. At the south end of the valley, 14 pumps lift the water 1,926 feet over the Tehachapi Mountains to Southern California. In 2026 the State Water Project delivered 45% of the water its customers asked for.', box: [-120.0, 34.2, -117.3, 35.7], zoom: 1.2, select: 'edmonston', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Farms use four times what cities do', text: 'Farms get about 31 million acre-feet a year and cities about 8 million. Westlands, on the dry west side of the San Joaquin Valley, depends on Delta water. It was allocated 28% of its federal contract in 2026 and left more than 242,000 acres unplanted in 2025.', lon: -120.1, lat: 36.5, zoom: .75, select: 'westlands', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'When canals run short, wells run', text: 'The shaded areas are groundwater basins that must be brought into balance under a 2014 law. The darker ones are critically overdrafted. Pumping has made parts of this valley sink by as much as 28 feet. Two basins here are on state probation.', box: [-121.2, 34.9, -118.4, 37.5], zoom: .8, select: 'corcoran', layers: ['rivers', 'ground', 'cities', 'farms'] },
      { title: 'The Colorado River corner', text: 'California holds the largest share of the Colorado River: 4.4 million acre-feet a year. Imperial Valley farms consumed 2.19 million in 2025. Under federal rules for 2027 and 2028, California is to give up 440,000 acre-feet a year.', box: [-116.6, 32.5, -114.2, 34.0], zoom: .9, select: 'imperial', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'A city built on imports', text: 'Los Angeles gets 38% of its water from its own aqueduct to the eastern Sierra, and buys 54% from a wholesaler that imports it from northern California and the Colorado River. Local groundwater and recycled water supply the rest.', box: [-119.3, 33.3, -116.6, 34.8], zoom: 1, select: 'la', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'What happens next', text: 'Cities are adding local supplies: Orange County purifies 130 million gallons of wastewater a day. The state approved a water right for Sites Reservoir in November 2026, and a tunnel under the Delta is still in hearings. Now explore: click any reservoir, aqueduct, field or patch of open land.', view: 'home', select: 'sites', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
    ],
    terrain: {
      // snow line: higher in the south and on the dry east side, lower on the wet northern ranges
      snowLine: (lat, p) => 2050 + (38 - lat) * 120 - Math.max(-350, Math.min(250, (p - 25) * 12)),
      alpine: 3300, saguaro: () => false,
      pivot: () => false,
      redrock: () => 0,
    },
  };
})();
