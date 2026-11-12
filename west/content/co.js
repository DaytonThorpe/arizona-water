/* Colorado. Every figure has a source link on its card. Fact sheet and verification log: research/colorado.md.
   Winter 2025-26 was the lowest snowpack on record in Colorado, so 2026 storage and flow readings are
   labelled as that year's readings, not as typical values. Figures are as of November 2026. */
(() => {
  const S = {
    wp: ['Colorado Water Plan, 2023', 'https://cwcb.colorado.gov/colorado-water-plan'],
    one: ['Water Plan summary sheet', 'https://dnrweblink.state.co.us/CWCB/0/edoc/217378/2023WaterPlanRolloutOnePagerFINAL.pdf'],
    csu: ['Colorado State University: water uses', 'https://waterknowledge.colostate.edu/water-management-administration/water-uses/'],
    compacts: ['Colorado State University: compacts', 'https://waterknowledge.colostate.edu/water-management-administration/agreements-compacts-treaties/'],
    gwlaw: ['Colorado State University: groundwater rights', 'https://waterknowledge.colostate.edu/water-management-administration/water-rights/groundwater-rights/'],
    wwa: ['Western Water Assessment briefing, 9 Apr 2026', 'https://wwa.colorado.edu/resources/intermountain-west-dashboard/briefing/april-9-2026-co-ut-wy'],
    nrcs: ['NRCS release, 5 Jun 2026 (repost)', 'https://coyotegulch.blog/2026/06/06/remaining-period-forecasts-reduced-following-early-snowmelt-nrcs-snowpack-runoff/'],
    ms24: ['Reclamation 24-Month Study, Oct 2026', 'https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf'],
    gp: ['Reclamation reservoir summary, Sep 2026', 'https://www.usbr.gov/gp/lakes_reservoirs/wareprts/wsrp/2026/12SeptemberHighlights26_508.pdf'],
    cul: ['Reclamation: Upper Basin water use, 2021–2025', 'https://www.usbr.gov/uc/DocLibrary/Reports/ConsumptiveUsesLosses/uc-ucrb-provisionalconsumptiveusesandlosses-2021-2025-508-20251200.pdf'],
    doi: ['Interior Department, 21 Aug 2026', 'https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations'],
    crs: ['Congressional Research Service, Oct 2026', 'https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf'],
    dwSys: ['Denver Water: collection system', 'https://www.denverwater.org/your-water/water-supply-and-planning/collection-system'],
    dwTap: ['Denver Water, 24 Jun 2026', 'https://www.denverwater.org/tap/years-peak-record-low-runoff-leaves-reservoirs-far-below-normal'],
    dwHalf: ['Denver Water: supply sources', 'https://www.denverwater.org/your-water/water-supply-and-planning/downstream-reservoir-program'],
    dwGross: ['Denver Water: Gross Reservoir', 'https://www.denverwater.org/grossreservoir'],
    dwRoberts: ['Denver Water: drought and supply', 'https://denverwater.org/node/16205'],
    gazette: ['Denver Gazette, 12 Oct 2026', 'https://www.denvergazette.com/2026/10/12/dillon-reservoir-projected-to-hit-near-record-low-capacity-by-april-1/'],
    nw: ['Northern Water: Colorado-Big Thompson Project', 'https://www.northernwater.org/deliver-water/colorado-big-thompson-project'],
    nisp: ['Northern Water: NISP', 'https://www.northernwater.org/NISP/project'],
    crdTmd: ['Colorado River District policy, 2020', 'https://www.coloradoriverdistrict.org/wp-content/uploads/2021/02/transmountain-water-diversions-2020.pdf'],
    crdSho: ['Colorado River District, 22 May 2026', 'https://www.coloradoriverdistrict.org/press-release-department-of-interior-releases-40-million-award-for-the-shoshone-water-rights-preservation-project/'],
    crdWolf: ['Colorado River District, 18 Jun 2026', 'https://www.coloradoriverdistrict.org/press-release-emergency-reservoir-releases-to-protect-west-slope-communities-from-extreme-drought-impacts/'],
    aj15: ['Aspen Journalism, May 2026', 'https://aspenjournalism.org/?p=888693'],
    ajFry: ['Aspen Journalism, 2018', 'https://aspenjournalism.org/water-district-clings-to-conditional-water-rights-in-holy-cross-wilderness/'],
    ww: ['Western Water, 5 Sep 2026', 'https://www.western-water.com/2026/09/05/colorado-water-supplies-tighten-as-drought-deepens/'],
    wwYampa: ['Western Water, 17 Jul 2026', 'https://www.western-water.com/2026/07/17/drought-triggers-emergency-releases-on-yampa-river/'],
    pivots: ['Big Pivots, 3 Sep 2026 (repost)', 'https://coyotegulch.blog/2026/09/04/a-first-in-the-110-plus-year-history-of-this-canal-allen-best-bigpivots-com-coloradoriver-coriver-aridification/'],
    pilot: ['Steamboat Pilot, 26 Aug 2026 (repost)', 'https://coyotegulch.blog/2026/08/28/rare-yampariver-call-curtails-junior-water-rights-amid-historic-drought-more-than-300-upstream-diversions-could-be-affected-as-low-flows-reservoir-releases-and-worsening-drought-strain-water-suppl/'],
    kvnf: ['KVNF, 29 Jul 2026', 'https://www.kvnf.org/kvnf-stories/2026-07-29/record-low-at-blue-mesa-forces-deep-cuts-to-gunnison-river-flows'],
    ksjd: ['KSJD, 19 Jun 2026', 'https://www.ksjd.org/2026-06-19/mcphee-water-shortage-drought-growers-montezuma-county'],
    peach: ['KUNC, 24 Jul 2026', 'https://www.kunc.org/news/2026-07-24/peaches-pay-the-bills-for-western-colorado-farmers-but-prolonged-drought-makes-their-future-uncertain'],
    rep: ['KUNC / Big Pivots, Aug 2025', 'https://www.kunc.org/news/2025-08-02/hard-questions-about-groundwater-mining-in-colorados-republican-river-basin'],
    program: ['KUNC / Colorado Newsline, 19 Sep 2026', 'https://www.kunc.org/news/2026-09-19/colorado-has-a-new-voluntary-program-to-conserve-colorado-river-water-farmers-are-wary'],
    slv: ['Inside Climate News, 4 Oct 2026', 'https://insideclimatenews.org/news/04102026/san-luis-valley-water-trial/'],
    frack: ['Inside Climate News, Mar 2025', 'https://insideclimatenews.org/news/13032025/colorado-oil-fracking-water-recycling/'],
    coal: ['Colorado Sun, Jul 2020', 'https://coloradosun.com/2020/07/16/water-saved-closing-coal-power-plants-colorado/'],
    snowmaking: ['CBS Colorado, Dec 2021', 'https://www.cbsnews.com/colorado/news/colorado-skiing-snowmaking-gallons-water-use'],
    crowley: ['Colorado Independent, 2015 (repost)', 'https://coyotegulch.blog/2015/08/04/buying-and-drying-water-lessons-from-crowley-county-the-colorado-independent/'],
    castle: ['Colorado Politics, 24 May 2026', 'https://www.coloradopolitics.com/2026/05/24/tapped-castle-rock-working-to-reduce-per-capita-water-use/'],
    aurora: ['Aurora Water: storage, 25 Oct 2026', 'https://www.auroragov.org/waterstorage'],
    prairie: ['Aurora Water: Prairie Waters', 'https://www.auroragov.org/prairiewaters'],
    springs: ['Colorado Springs Utilities, Jan 2023', 'https://www.csu.org/blog/colorado-river-water-supply-plan'],
    foco: ['City of Fort Collins, 30 Apr 2026', 'https://www.fortcollins.gov/News-Articles/News/2026-Q2/Voluntary-Water-Shortage-Watch'],
    alp: ['Reclamation: Animas-La Plata Project', 'https://www.usbr.gov/uc/progact/animas/index.html'],
    fwn: ['Fresh Water News, Jul 2025 (repost)', 'https://coyotegulch.blog/2025/08/03/the-southern-ute-tribe-has-finally-tapped-lakenighthorse-water-why-did-it-take-60-years-shannon-mullane-fresh-water-news-animasriver/'],
    dbGis: ['Colorado DWR: designated basins map data', 'https://gisdnr.state.co.us/arcgis/rest/services/CSLB_External/Water/MapServer/0'],
    dwrStruct: ['Colorado DWR: structures map data', 'https://gisdnr.state.co.us/arcgis/rest/services/Hosted/DWR_Structure_Open_Data/FeatureServer/0'],
    osm: ['Route: OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'],
    cdss: ['Route: Colorado DWR (CDSS)', 'https://cdss.colorado.gov/gis-data'],
  };
  const F = [];
  const add = o => F.push(o);
  const btn = (id, label) => `<p><button class="btn" data-feat="${id}">${label}</button></p>`;

  // ----------------------------------------------------------------- snow, rivers, law
  add({ id: 'snow', kind: 'snow', name: 'Mountain snowpack', short: 'Snowpack', lon: -106.325, lat: 38.497, tier: 1,
    lede: 'Colorado\'s biggest reservoir is its snow. Winter storms pile it on the high country, and it melts into the rivers over a few weeks of spring and early summer.',
    stats: [['24%', 'of the median: statewide snowpack on 1 Apr 2026, the lowest on record'], ['25–45%', 'of average: 2026 streamflow forecasts for Colorado'], ['36 days', 'earlier than usual: when snow gauges melted out in 2026', 1]],
    body: '<p>Winter 2025–26 was a record-low snow year. Reservoir and river readings on this map come from that year. They are far below normal and should not be read as typical.</p><p>Switch the season to Winter to see where snow usually builds up.</p>',
    sources: [S.wwa, S.nrcs, S.wp] });
  add({ id: 'headwaters', kind: 'source', name: 'Colorado River headwaters', short: 'Colorado headwaters', lon: -105.811, lat: 40.477, tier: 2,
    lede: 'The Colorado River starts here at La Poudre Pass, in Rocky Mountain National Park. A ditch along the mountainside carries some of its first water east over the pass.',
    stats: [['3.72M AF', 'flowed into Lake Powell in water year 2026, 39% of average'], ['18%', 'of average: Lake Powell inflow, April to July 2026'], ['Up to 70%', 'of the river\'s water flows out of the state', 1]],
    body: '<p>The highlighted line beside the marker is the Grand River Ditch. It crosses the Continental Divide at the pass and empties into the Cache la Poudre River.</p>',
    sources: [S.ms24, S.wp, S.osm] });
  add({ id: 'shoshone', kind: 'hydro', kindLabel: 'Hydropower plant', name: 'Shoshone Power Plant', short: 'Shoshone', lon: -107.1937, lat: 39.5879, tier: 2,
    lede: 'A small hydropower plant in Glenwood Canyon. Its old water rights pull the Colorado River west, past the tunnels that would take it east.',
    stats: [['1909', 'the plant began operating'], ['15 MW', 'maximum output'], ['$99M', 'price the Colorado River District agreed to pay for the water rights'], ['$97M', 'raised by May 2026, including $40M in federal money']],
    body: '<p>The plant uses the water and puts it straight back in the river. Because its rights are among the largest and oldest on the river, water has to be left in the stream to reach it.</p><p>The River District wants to keep those flows if the plant ever closes. It has asked a water court to let the rights also be used to keep water in the river. The purchase had not closed at the last report found.</p>',
    sources: [S.crdSho, S.wp, S.dwrStruct] });
  add({ id: 'reach15', kind: 'info', name: 'The 15-Mile Reach', short: '15-Mile Reach', lon: -108.46, lat: 39.09, tier: 3,
    lede: 'The stretch of the Colorado River between Palisade and the mouth of the Gunnison. The valley\'s canals take their water just upstream, so this reach often runs low.',
    stats: [['About 50 cfs', 'for several days in April 2026'], ['1,240 cfs', 'the April target for a dry year'], ['1,950 cfs', 'what the Grand Valley canals can take from the river combined']],
    body: '<p>The reach is protected habitat for four endangered fish: the humpback chub, razorback sucker, bonytail and Colorado pikeminnow. A cfs is one cubic foot of water per second.</p><p>In 2026 the recovery program expected about half its usual supply of water set aside for the fish.</p>',
    sources: [S.aj15] });
  add({ id: 'utahline', kind: 'info', name: 'Where the Colorado leaves the state', short: 'Utah line', lon: -109.0265, lat: 39.1327, tier: 2,
    lede: 'Colorado shares this river with six other states and Mexico. Two compacts decide how much it may keep.',
    stats: [['51.75%', 'Colorado\'s share of the Upper Basin\'s water'], ['75M AF', 'the Upper Basin must not deplete the flow at Lee Ferry, Arizona, below this in any 10 years'], ['1.92M AF', 'Colorado River water Colorado consumed in 2024'], ['50,000 AF', 'Colorado\'s voluntary conservation target for water year 2027']],
    body: '<p>In August 2026 the federal government set rules for 2027 and 2028 with no agreement among the seven states. Arizona, California and Nevada must give up 1.25 million AF a year. Colorado and the other Upper Basin states have no mandatory cut.</p><p>Colorado\'s program would pay water users who choose to use less. The federal government would fund it.</p>',
    sources: [S.compacts, S.wp, S.cul, S.program, S.doi, S.crs] });
  add({ id: 'julesburg', kind: 'info', name: 'South Platte at the Nebraska line', short: 'Nebraska line', lon: -102.25, lat: 40.975, tier: 2,
    lede: 'The South Platte leaves Colorado near Julesburg. A 1923 compact with Nebraska sets what must reach the state line in summer.',
    stats: [['120 cfs', 'if summer flow here drops below this, some Colorado users must stop diverting'], ['14 Jun 1897', 'water rights on the lower river newer than this date are cut off first'], ['29 Jun 2026', 'the US Supreme Court let Nebraska file a complaint against Colorado', 1]],
    body: '<p>Nebraska plans a canal that would take water from the South Platte near Ovid, Colorado, under the compact. Nebraska set aside roughly $500 million for it in 2022.</p>',
    sources: [S.compacts, ['WOWT, 29 Jun 2026', 'https://www.wowt.com/2026/06/29/high-court-clears-nebraska-water-rights-lawsuit-against-colorado/']] });
  add({ id: 'yampa', kind: 'info', name: 'A rare call on the Yampa', short: 'Yampa call', lon: -108.4525, lat: 40.4515, tier: 2,
    lede: 'A "call" is how seniority works in practice. When an older water right is not getting its water, newer rights upstream are ordered to stop diverting.',
    stats: [['19 Aug 2026', 'a call was placed here, at the Lily Park Ditch pump station'], ['300+', 'upstream diversions that could be cut off'], ['5th', 'call ever on the main Yampa below Stagecoach Reservoir']],
    body: '<p>The Yampa is the largest tributary of the Green River. In January 2022 the state declared part of the river over-appropriated: at some times of year there are more rights than water.</p><p>In July 2026 managers began releasing stored water from Elkhead Reservoir to hold off a call.</p>',
    sources: [S.pilot, S.wwYampa, S.wp, S.dwrStruct] });
  add({ id: 'blackcanyon', kind: 'info', name: 'Black Canyon and the Gunnison Tunnel', short: 'Gunnison Tunnel', lon: -107.6499, lat: 38.5242, tier: 2,
    lede: 'Here the Gunnison River is split. Part goes through a 1909 tunnel to farms in the next valley. The rest continues into Black Canyon of the Gunnison National Park.',
    stats: [['About 560 cfs', 'into the tunnel, 1 Oct 2026'], ['About 210 cfs', 'left for the canyon the same day'], ['390,000 AF', 'a year carried by the tunnel, roughly'], ['500 cfs', 'reduced 2026 target for endangered fish downstream; the usual floor is 750']],
    body: '<p>The tunnel, three dams upstream, the national park and the fish all draw on the same water. In 2026 there was not enough for every target.</p>' + btn('uncompahgre', 'The farms the tunnel waters') + btn('bluemesa', 'Blue Mesa Reservoir'),
    sources: [S.ms24, S.wp, S.kvnf, S.dwrStruct] });
  add({ id: 'salida', kind: 'info', name: 'Water rights for the river itself', short: 'Instream flows', lon: -105.9989, lat: 38.5347, tier: 3,
    lede: 'Colorado water rights were built around taking water out of rivers. Since 1973 the state has also been able to hold rights that keep water in them.',
    stats: [['1,700+', 'stream segments with a state instream flow right'], ['9,800+ mi', 'of stream covered'], ['482', 'natural lakes with a protected level']],
    body: '<p>The Colorado Water Conservation Board holds these rights on behalf of the public. Each has a date and a place in the seniority line like any other right.</p><p>Since 2001, local governments have been able to claim flows for whitewater parks. Browns Canyon, just upstream on the Arkansas, is one of the most popular rafting runs in the United States.</p>',
    sources: [S.wp] });
  add({ id: 'peoplesditch', kind: 'info', name: 'First in time, first in right', short: 'People\'s Ditch', lon: -105.4239, lat: 37.2008, tier: 2,
    lede: 'The San Luis People\'s Ditch holds the oldest water right in Colorado, dated 1852. Under state law, older rights are served first when water runs short.',
    stats: [['1852', 'the oldest water right in the state'], ['7', 'water courts, one for each major river basin'], ['100+', 'acequias, community ditches run by their users']],
    body: '<p>The system is called prior appropriation. A right is tied to a date, an amount and a use. In a dry year the newest rights are shut off first, no matter where they are on the river or what the water is for.</p><p>Water rights are property. They can be sold and moved to a new use, which is how cities have acquired farm water.</p>' + btn('crowley', 'What happens when farm water is sold'),
    sources: [S.wp, S.cdss] });

  // ----------------------------------------------------------------- reservoirs
  add({ id: 'bluemesa', kind: 'reservoir', name: 'Blue Mesa Reservoir', short: 'Blue Mesa', lake: 'Blue Mesa Reservoir', lon: -107.2, lat: 38.47, tier: 1, zoom: .9,
    lede: 'The largest reservoir in Colorado, on the Gunnison River. It stores water for the Colorado River system and makes power.',
    pct: 17, pctNote: '143,500 AF of 0.83 million AF of usable capacity (30 Sep 2026)',
    stats: [['42%', 'of average: water flowing in during water year 2026'], ['24%', 'of average: inflow from April to July 2026'], ['51%', 'full at its 2026 peak, on 19 January', 1]],
    body: '<p>These are readings from a record-dry year. In 2026 Blue Mesa was at its fullest in January and fell from there.</p><p>Under the federal rules for 2027 and 2028, water can be released from reservoirs like this one to prop up Lake Powell.</p>',
    sources: [S.ms24, S.ww, S.doi] });
  add({ id: 'dillon', kind: 'reservoir', name: 'Dillon Reservoir', short: 'Dillon', lake: 'Dillon Reservoir', lon: -106.061, lat: 39.599, tier: 1, zoom: .9,
    lede: 'Denver Water\'s largest reservoir sits on the Blue River, west of the Continental Divide. A 23-mile tunnel carries its water east.',
    pct: 63, pctNote: '63% full on 12 Oct 2026. About 95% is typical for the date.',
    stats: [['257,304 AF', 'capacity'], ['80%', 'full at its 2026 peak, on 17 June'], ['404 cfs', 'peak inflow in 2026. Normal is 1,750.', 1]],
    body: '<p>Denver Water projected Dillon would fall to between 45% and 50% by 1 April 2027. Its record low is 35%, in 1978.</p>' + btn('roberts', 'The Roberts Tunnel') + btn('denver', 'Denver Water'),
    sources: [S.dwSys, S.gazette, S.dwTap] });
  add({ id: 'granby', kind: 'reservoir', name: 'Lake Granby', lake: 'Lake Granby', lon: -105.86, lat: 40.15, tier: 2,
    lede: 'The main storage pool of the Colorado-Big Thompson Project. Water is pumped from here up to Grand Lake, where the Adams Tunnel begins.',
    stats: [['61%', 'of average storage at the end of September 2026'], ['34%', 'of average: inflow in September 2026'], ['68%', 'of average: the project\'s four main reservoirs together', 1]],
    body: '<p>These are readings from a record-dry year.</p>' + btn('adams', 'The Adams Tunnel'),
    sources: [S.gp, S.nw] });
  add({ id: 'horsetooth', kind: 'reservoir', name: 'Horsetooth Reservoir', short: 'Horsetooth', lake: 'Horsetooth Reservoir', lon: -105.163, lat: 40.558, tier: 3,
    lede: 'The east end of the Colorado-Big Thompson Project. Water that started west of the Divide is held here above Fort Collins.',
    stats: [['139%', 'of average storage at the end of September 2026'], ['61%', 'of average at Lake Granby, the project\'s west-side source, on the same date']],
    body: '<p>In 2026 the project kept its east-side reservoirs full while the west-side ones were drawn down.</p>',
    sources: [S.gp, S.nw] });
  add({ id: 'greenmtn', kind: 'reservoir', name: 'Green Mountain Reservoir', short: 'Green Mountain', lake: 'Green Mountain Reservoir', lon: -106.271, lat: 39.864, tier: 2,
    lede: 'Built on the Blue River to make up for water sent east through the Adams Tunnel. It holds water for users west of the Divide.',
    pct: 15, pctNote: '14.8% full on 3 Sep 2026 (Reclamation figure, reported by Big Pivots)',
    stats: [['21,812 AF', 'held on 4 Sep 2026'], ['32,080 AF', 'held on 29 Jul 2026'], ['16%', 'of average storage at the end of September 2026', 1]],
    body: '<p>The reservoir came out of the negotiations over the Colorado-Big Thompson Project in the 1930s. Readings are from a record-dry year.</p>',
    sources: [S.ww, S.pivots, S.gp, S.wp] });
  add({ id: 'pueblores', kind: 'reservoir', name: 'Pueblo Reservoir', lake: 'Pueblo Reservoir', lon: -104.775, lat: 38.268, tier: 1, zoom: .9,
    lede: 'The last stop for water brought under the Divide by the Fryingpan-Arkansas Project. From here it goes to cities and to farms down the Arkansas Valley.',
    stats: [['98%', 'of average storage at the end of September 2026'], ['80%', 'of average: the project\'s four reservoirs together'], ['265,000', 'acres of farmland the project delivers water for', 1]],
    body: '<p>The dam was built between 1970 and 1975. A pipeline finished in 2016 carries water from here north to Colorado Springs.</p>',
    sources: [S.gp, S.wp] });
  add({ id: 'johnmartin', kind: 'reservoir', name: 'John Martin Reservoir', short: 'John Martin', lake: 'John Martin Reservoir', lon: -102.98, lat: 38.069, tier: 2,
    lede: 'Colorado and Kansas share the Arkansas River through this reservoir. A 1948 compact divides the river by setting how the reservoir is run.',
    stats: [['1948', 'compact signed and dam completed']],
    body: '<p>The compact does not promise Kansas a fixed amount of water. It protects the uses that existed in 1948 and bars either state from materially depleting the river beyond that.</p>',
    sources: [S.wp] });
  add({ id: 'mcphee', kind: 'reservoir', name: 'McPhee Reservoir', short: 'McPhee', lake: 'McPhee Reservoir', lon: -108.54, lat: 37.53, tier: 1, zoom: .9,
    lede: 'The reservoir of the Dolores Project, which waters farms in the dry southwest corner of the state.',
    stats: [['381,000 AF', 'capacity, of which 229,000 can be used'], ['63,000', 'irrigated acres served, roughly'], ['13 to 14%', 'of a full supply delivered to most farms in 2026', 1]],
    body: '<p>Construction of the project began in 1977. The 2026 figure is from a record-dry year.</p>' + btn('towaoc', 'The Ute Mountain Ute Tribe'),
    sources: [S.ksjd, S.wp] });
  add({ id: 'navajo', kind: 'reservoir', name: 'Navajo Reservoir', short: 'Navajo', lake: 'Navajo Reservoir', lon: -107.44, lat: 37.03, tier: 2,
    lede: 'The San Juan River flows out of Colorado into this reservoir, which straddles the New Mexico line.',
    stats: [['0.82M AF', 'held at the end of September 2026'], ['64%', 'of average for that date']],
    body: '<p>Like Blue Mesa, Navajo is one of the upstream reservoirs that federal rules allow to be drawn on to protect Lake Powell. Readings are from a record-dry year.</p>',
    sources: [S.ms24, S.doi] });
  add({ id: 'elevenmile', kind: 'reservoir', name: 'Eleven Mile Canyon Reservoir', short: 'Eleven Mile', lake: 'Eleven Mile Canyon Reservoir', lon: -105.512, lat: 38.924, tier: 3,
    lede: 'A Denver Water reservoir on the upper South Platte, high in South Park.',
    stats: [['97,779 AF', 'capacity'], ['20,122 AF', 'capacity of Antero Reservoir, upstream, which was mostly drained in 2026']],
    body: '<p>Denver Water drained most of Antero in 2026 and moved the water downstream to cut losses to evaporation.</p>',
    sources: [S.dwSys, S.dwTap] });
  add({ id: 'gross', kind: 'reservoir', name: 'Gross Reservoir', short: 'Gross', lake: 'Gross Reservoir', lon: -105.373, lat: 39.945, tier: 2,
    lede: 'Denver Water\'s reservoir at the east end of the Moffat Tunnel. Its dam has just been raised to nearly triple what it can hold.',
    stats: [['41,811 AF', 'capacity before the raise'], ['119,000 AF', 'capacity after, roughly'], ['131 ft', 'added to the height of the dam'], ['3 Jun 2026', 'crews finished raising the dam']],
    body: '<p>The project was challenged in federal court. In September 2026 a ruling cleared the way for it to be completed.</p>' + btn('moffat', 'The Moffat Tunnel'),
    sources: [S.dwSys, S.dwGross, ['Denver Water, Jun 2026', 'https://www.denverwater.org/grossreservoir/news/major-milestone-gross-dam-construction']] });
  add({ id: 'nighthorse', kind: 'reservoir', name: 'Lake Nighthorse', short: 'Nighthorse', lake: 'Lake Nighthorse', lon: -107.926, lat: 37.226, tier: 2,
    lede: 'Built to settle the water claims of Colorado\'s two Ute tribes. Water is pumped uphill into it from the Animas River at Durango.',
    stats: [['123,541 AF', 'capacity'], ['29 Jun 2011', 'first filled'], ['May 2025', 'the Southern Ute Tribe first used its water'], ['4 of 11', 'owners of project water had been able to use it by 2025']],
    body: '<p>Most of the project\'s owners have not yet been able to use their water. The Ute Mountain Ute Tribe, farther from the reservoir, was still looking for a way to reach its share in 2025.</p>' + btn('ignacio', 'The Southern Ute Tribe') + btn('towaoc', 'The Ute Mountain Ute Tribe'),
    sources: [S.alp, S.fwn, S.wp] });
  add({ id: 'wolford', kind: 'reservoir', name: 'Wolford Mountain Reservoir', short: 'Wolford', lake: 'Wolford Mountain Reservoir', lon: -106.413, lat: 40.146, tier: 3,
    lede: 'A reservoir owned by the Colorado River District, the Western Slope\'s own water agency. In 2026 it was opened early for drought relief.',
    stats: [['6 Jun 2026', 'emergency releases began'], ['15,000+ AF', 'to be released from Wolford and Ruedi reservoirs'], ['$450,000', 'approved by the district to pay for it']],
    body: '<p>About 3,000 AF was set aside to keep taps running in Summit, Grand and Eagle counties through spring 2027. Other water went to farms in the Grand Valley.</p>',
    sources: [S.crdWolf] });

  // ----------------------------------------------------------------- water moved across the Divide
  add({ id: 'adams', kind: 'tunnel', name: 'Alva B. Adams Tunnel', short: 'Adams Tunnel', lon: -105.69, lat: 40.285, tier: 1, zoom: 1,
    lede: 'A 13.1-mile tunnel under Rocky Mountain National Park. It carries Colorado River water from Grand Lake to the Big Thompson River and the northern Front Range.',
    stats: [['200,000 AF', 'delivered in an average year'], ['1.1M', 'residents supplied'], ['550,000', 'acres of farmland supplied'], ['12', 'reservoirs in the project']],
    body: '<p>This is the Colorado-Big Thompson Project, the largest of the 27 tunnels and ditches that move water across Colorado\'s mountain divides. Together they move about half a million AF a year from west to east.</p><p>On its way down the east side the water passes through power plants before reaching Horsetooth Reservoir and Carter Lake.</p>',
    sources: [S.nw, S.one, S.crdTmd, S.osm] });
  add({ id: 'moffat', kind: 'tunnel', name: 'Moffat Water Tunnel', short: 'Moffat Tunnel', lon: -105.70, lat: 39.895, tier: 2,
    lede: 'Denver\'s first tunnel under the Continental Divide. It runs beside a railroad tunnel and has carried Fraser River water east since 1936.',
    stats: [['1936', 'Denver Water began sending water through'], ['1928', 'the railroad tunnel beside it was built']],
    body: '<p>The water comes out into South Boulder Creek and is stored in Gross Reservoir.</p><p>The line on the map is drawn straight between the two portals.</p>' + btn('gross', 'Gross Reservoir'),
    sources: [S.wp, S.dwrStruct] });
  add({ id: 'roberts', kind: 'tunnel', name: 'Harold D. Roberts Tunnel', short: 'Roberts Tunnel', lon: -105.86, lat: 39.54, tier: 2,
    lede: 'A 23-mile tunnel from Dillon Reservoir under the Continental Divide to the North Fork of the South Platte River, on the way to Denver.',
    stats: [['23 mi', 'long'], ['1964', 'began operating, along with Dillon Reservoir']],
    body: btn('dillon', 'Dillon Reservoir') + btn('denver', 'Denver Water'),
    sources: [S.dwRoberts, S.wp, S.osm] });
  add({ id: 'turquoise', kind: 'tunnel', name: 'Turquoise Lake: where two tunnels arrive', short: 'Boustead & Homestake tunnels', lake: 'Turquoise Lake', lon: -106.384, lat: 39.267, tier: 2,
    lede: 'Two tunnels under the Continental Divide end above this lake near Leadville. Both bring water into the Arkansas River basin.',
    stats: [['51,650 AF', 'a year through the Boustead Tunnel, 1985–2017 average'], ['945 cfs', 'the Boustead Tunnel\'s capacity'], ['1967', 'the Homestake Project was completed']],
    body: '<p>The Boustead Tunnel belongs to the federal Fryingpan-Arkansas Project. It takes water from the Fryingpan River for cities and farms in the Arkansas basin.</p><p>The Homestake Tunnel belongs to Aurora and Colorado Springs. It takes water from the upper Eagle River.</p>' + btn('pueblores', 'Pueblo Reservoir'),
    sources: [S.ajFry, S.wp, S.dwrStruct] });
  add({ id: 'twinlakes', kind: 'tunnel', name: 'Twin Lakes Tunnel', lake: 'Twin Lakes', lon: -106.34, lat: 39.08, tier: 3,
    lede: 'A tunnel under the Continental Divide brings water from the Roaring Fork River basin to these lakes on the Arkansas side.',
    stats: [['90%', 'of the water stored in Twin Lakes is owned by cities and industry (2015)']],
    body: '<p>The water once went mostly to farms far down the Arkansas. In the 1980s much of it changed hands as cities looked for new supplies.</p><p>The line on the map is drawn straight between the two portals.</p>' + btn('crowley', 'Crowley County'),
    sources: [S.crowley, S.wp, S.dwrStruct] });

  // ----------------------------------------------------------------- cities
  add({ id: 'denver', kind: 'city', name: 'Denver', lon: -104.99, lat: 39.739, tier: 1, zoom: .8,
    lede: 'Denver Water serves 1.5 million people, nearly a quarter of the state. About half its supply comes from the Colorado River basin, through tunnels under the Continental Divide.',
    stats: [['1.5M', 'people served'], ['708,250 AF', 'of reservoir space'], ['81%', 'full at the 2026 peak. 97.5% is typical.'], ['2 days', 'a week of lawn watering allowed in 2026']],
    body: '<p>The other half comes from the South Platte River. The collection system covers about 4,000 square miles of mountains.</p><p>Denver Water declared a Stage 1 drought in March 2026 and asked customers to use 20% less.</p>' + btn('dillon', 'Dillon Reservoir') + btn('roberts', 'The Roberts Tunnel'),
    sources: [S.dwSys, S.dwHalf, S.dwTap] });
  add({ id: 'aurora', kind: 'city', name: 'Aurora', lon: -104.832, lat: 39.729, tier: 2,
    lede: 'Aurora has no large river of its own. It bought farm water rights, built a mountain tunnel with Colorado Springs, and takes water back out of the South Platte to use again.',
    stats: [['39%', 'full: Aurora\'s reservoirs on 25 Oct 2026'], ['156,411 AF', 'of usable reservoir space'], ['10M gallons', 'a day the Prairie Waters system can add'], ['About 50%', 'of its water rights were bought from farms on the South Platte']],
    body: '<p>Prairie Waters draws water from 29 wells beside the South Platte, downstream of the Denver area. The river sand filters it, and pumps lift it almost 1,000 feet back toward the city to be treated.</p><p>By 1999 Aurora had also bought about 95% of the Rocky Ford Ditch, in the Arkansas Valley. The storage figure is from a record-dry year.</p>',
    sources: [S.aurora, S.prairie, S.wp] });
  add({ id: 'cosprings', kind: 'city', name: 'Colorado Springs', lon: -104.821, lat: 38.834, tier: 1, zoom: .8,
    lede: 'Colorado Springs has no large river. About half of its raw water comes from the Colorado River basin, on the other side of the mountains.',
    stats: [['About 50%', 'of raw supply comes from the Colorado River basin'], ['Up to 70%', 'of what customers use, once that water has been reused']],
    body: '<p>Water brought in from another basin may legally be used more than once, so the city reuses it. The water arrives through tunnels near Leadville and a pipeline from Pueblo Reservoir.</p>' + btn('turquoise', 'The tunnels near Leadville'),
    sources: [S.springs, S.wp] });
  add({ id: 'fortcollins', kind: 'city', name: 'Fort Collins', lon: -105.084, lat: 40.585, tier: 2,
    lede: 'A city on the Cache la Poudre River, below Horsetooth Reservoir.',
    stats: [['1 May 2026', 'voluntary water shortage watch began'], ['2 days', 'a week: the suggested limit on lawn watering']],
    body: '<p>The city called the 2025–26 snowpack a historic low.</p>' + btn('horsetooth', 'Horsetooth Reservoir') + btn('glade', 'A new reservoir planned nearby'),
    sources: [S.foco] });
  add({ id: 'glade', kind: 'reservoir', kindLabel: 'Planned reservoir', icon: 'info', name: 'Glade Reservoir (planned)', short: 'Glade (planned)', lon: -105.188, lat: 40.678, tier: 3,
    lede: 'The main piece of the Northern Integrated Supply Project, a plan to store Poudre River water for growing towns in northern Colorado. It has not been built.',
    stats: [['170,000 AF', 'planned capacity'], ['40,000 AF', 'a year of new supply, at most'], ['2027', 'construction expected to begin']],
    sources: [S.nisp, S.dwrStruct] });
  add({ id: 'pueblo', kind: 'city', name: 'Pueblo', lon: -104.63, lat: 38.285, tier: 2,
    lede: 'A city on the Arkansas River. Its water board owns the oldest ditch across the Continental Divide and leases river water to a power plant.',
    stats: [['1880', 'the Ewing Ditch was dug, the state\'s first diversion across the Divide'], ['About 1M', 'people get water from the Arkansas basin']],
    body: btn('comanche', 'The power plant') + btn('pueblores', 'Pueblo Reservoir'),
    sources: [S.wp, S.coal] });
  add({ id: 'grandjunction', kind: 'town', name: 'Grand Junction', lon: -108.551, lat: 39.064, tier: 2,
    lede: 'The Gunnison River joins the Colorado here. The valley around the city has been irrigated since the 1880s.',
    body: btn('grandvalley', 'Grand Valley farms') + btn('reach15', 'The 15-Mile Reach'),
    sources: [S.wp] });
  add({ id: 'castlerock', kind: 'town', name: 'Castle Rock', lon: -104.856, lat: 39.372, tier: 1,
    lede: 'A fast-growing town built on wells. Only about a third of its water comes from sources that rain and snow refill.',
    stats: [['About 1/3', 'of its water is renewable'], ['3.2B+ gallons', 'used a year'], ['2065', 'target year to meet demand with renewable water in an average year'], ['$29M', 'spent on land and water rights in Weld County']],
    body: '<p>The rest is pumped from the Denver Basin aquifers under the town. The town\'s utility serves about 90,000 people.</p>' + btn('denverbasin', 'The Denver Basin aquifers'),
    sources: [S.castle] });
  add({ id: 'ignacio', kind: 'tribe', name: 'Southern Ute Indian Tribe', short: 'Ignacio', lon: -107.633, lat: 37.118, tier: 2,
    lede: 'One of two tribes with reservations in Colorado. Its water rights were settled in a 1986 agreement built around Lake Nighthorse.',
    stats: [['May 2025', 'first use of its Lake Nighthorse water'], ['2,000 AF', 'a year at most, approved by the tribal council']],
    body: '<p>The project was first authorized in 1968. The tribe\'s first use of the water was for completing oil and gas wells.</p>' + btn('nighthorse', 'Lake Nighthorse'),
    sources: [S.fwn, S.wp] });
  add({ id: 'towaoc', kind: 'tribe', name: 'Ute Mountain Ute Tribe', short: 'Towaoc', lon: -108.729, lat: 37.204, tier: 2,
    lede: 'The tribe runs a large farm on water from McPhee Reservoir. It also owns water in Lake Nighthorse that it has no way to reach.',
    stats: [['13 to 14%', 'of a full supply delivered to most McPhee farms in 2026']],
    body: '<p>As of 2025 the tribe was still looking for a way to bring its Lake Nighthorse water to the reservation.</p>' + btn('mcphee', 'McPhee Reservoir') + btn('nighthorse', 'Lake Nighthorse'),
    sources: [S.ksjd, S.fwn, S.wp] });

  // ----------------------------------------------------------------- farms
  add({ id: 'weld', kind: 'farm', name: 'South Platte valley farms', short: 'South Platte farms', lon: -104.709, lat: 40.423, tier: 1, zoom: .8,
    lede: 'The South Platte basin has more irrigated land than any other in Colorado. It is also where about 70% of the state\'s people live.',
    stats: [['850,000+', 'irrigated acres in the basin'], ['91%', 'of the water Colorado consumes goes to farms'], ['20%', 'of the water farms statewide need goes unmet in a typical year']],
    body: '<p>Water here is used many times. A farm takes it from the river, some seeps back, and the next ditch downstream takes it again. In this basin more water is diverted than the river naturally carries.</p><p>Cities are buying farms for their water. The state water plan expects irrigated land in this basin to shrink.</p>',
    sources: [S.wp, S.one] });
  add({ id: 'lowerark', kind: 'farm', name: 'Lower Arkansas Valley', short: 'Arkansas Valley', lon: -103.72, lat: 38.052, tier: 2,
    lede: 'A strip of irrigated farms along the Arkansas River east of Pueblo, known for Rocky Ford melons.',
    stats: [['220,000+', 'irrigated acres in the lower basin'], ['33,000–76,000', 'acres statewide that could be dried up by planned sales of farm water to cities']],
    body: '<p>Selling a farm\'s water to a city and leaving the land dry is called "buy and dry." By 1999 Aurora had bought about 95% of the Rocky Ford Ditch here.</p>' + btn('crowley', 'Crowley County'),
    sources: [S.wp] });
  add({ id: 'crowley', kind: 'farm', name: 'Crowley County', lon: -103.756, lat: 38.218, tier: 2,
    lede: 'In the 1970s farmers here began selling their water rights. Most of the county\'s irrigated land has been dry since.',
    stats: [['50,000+', 'irrigated acres in the 1970s'], ['About 5,000', 'by 2015'], ['2,500', 'in the 2012 drought']],
    body: '<p>The water came through the Colorado Canal, shown on the map, and from Twin Lakes in the mountains. The rights ended up with Pueblo, Colorado Springs, Pueblo West and Aurora.</p>' + btn('twinlakes', 'Twin Lakes'),
    sources: [S.crowley] });
  add({ id: 'slv', kind: 'farm', name: 'San Luis Valley farms', short: 'San Luis Valley', lon: -106.108, lat: 37.753, tier: 1, zoom: .8,
    lede: 'A high, dry valley that grows potatoes with water from the Rio Grande and from wells. The aquifer under it has been falling for decades.',
    stats: [['520,000', 'irrigated acres, roughly'], ['1.3M AF', 'lost from the shallow aquifer since 1976'], ['$150 to $500', 'proposed rise in the fee per AF pumped'], ['2031', 'deadline to stop the decline']],
    body: '<p>The round fields are center-pivot sprinklers fed by wells. Farmers here formed districts that charge themselves for pumping and pay neighbors to retire land.</p><p>If the aquifer has not recovered by the deadline, the state engineer has said he will have to shut off wells. A water court trial over the latest plan was held in summer 2026.</p>',
    sources: [S.wp, S.slv] });
  add({ id: 'grandvalley', kind: 'farm', name: 'Grand Valley farms', short: 'Grand Valley', lon: -108.351, lat: 39.11, tier: 1, zoom: 1,
    lede: 'Orchards and farms watered by canals from the Colorado River. On 3 September 2026 the valley\'s largest canal stopped delivering water.',
    stats: [['3 Sep 2026', 'the Government Highline Canal shut off, for the first time since about 1914'], ['100 cfs', 'was available to a canal built for 730'], ['520 cfs', 'the oldest right in the valley, held by the Grand Valley Canal'], ['3 ft', 'of water a peach orchard needs each season']],
    body: '<p>The Grand Valley Canal\'s 1882 right is the oldest in the basin. Seniority puts these canals first in line, but in 2026 the river itself ran short.</p><p>One Palisade grower with about 200,000 trees began picking a month early.</p>' + btn('reach15', 'The river just downstream'),
    sources: [S.pivots, S.ww, S.peach, S.wp] });
  add({ id: 'uncompahgre', kind: 'farm', name: 'Uncompahgre Valley farms', short: 'Uncompahgre Valley', lon: -107.876, lat: 38.478, tier: 2,
    lede: 'Farms around Montrose and Delta are watered by the Gunnison Tunnel, which brings river water through a ridge from the next valley.',
    stats: [['80,000', 'acres served, roughly'], ['50%', 'of a normal supply: the 2026 season\'s opening allocation'], ['About 85%', 'full: Ridgway Reservoir, the valley\'s other source, in July 2026']],
    body: btn('blackcanyon', 'The Gunnison Tunnel'),
    sources: [S.kvnf, S.wp] });
  add({ id: 'republican', kind: 'farm', name: 'Republican River farms', short: 'Republican River', lon: -102.223, lat: 40.076, tier: 1, zoom: .8,
    lede: 'Irrigated farms on the far eastern plains. Almost all of the water comes from wells in the Ogallala Aquifer, and a compact with Kansas and Nebraska limits how much Colorado may use.',
    stats: [['54,100 AF', 'a year: Colorado\'s share under the compact'], ['25,000', 'acres to be taken out of irrigation by December 2029'], ['17,120', 'acres retired by early 2025'], ['$72M', 'for wells and a 12.6-mile pipeline that add water to the river']],
    body: '<p>Since 2012 the local water district has pumped groundwater from eight former farm wells into the North Fork, near the Nebraska line, so that Colorado meets the compact.</p><p>If the acreage goal is missed, the state engineer can shut down wells.</p>' + btn('ogallala', 'The aquifer underneath'),
    sources: [S.compacts, S.rep, S.wp] });

  // ----------------------------------------------------------------- groundwater
  add({ id: 'denverbasin', kind: 'well', name: 'Denver Basin aquifers', short: 'Denver Basin', lon: -104.6, lat: 39.45, tier: 2,
    lede: 'Layers of water-bearing rock deep under the plains from Greeley to Colorado Springs. Rain and snow refill them so slowly that the water is treated as nonrenewable.',
    stats: [['100 years', 'the aquifer life assumed when the state hands out pumping rights'], ['60%', 'of all groundwater pumped in Colorado comes from nonrenewable aquifers']],
    body: '<p>The water belongs to whoever owns the land above it. Suburbs south of Denver, in Douglas and Arapahoe counties, grew on these wells.</p><p>Water levels have fallen. In the 2002 drought some wells on the western edge went dry. Many towns are now paying for river water instead.</p>' + btn('castlerock', 'Castle Rock'),
    sources: [S.wp, S.gwlaw] });
  add({ id: 'ogallala', kind: 'well', name: 'Northern High Plains basin', short: 'Ogallala Aquifer', lon: -102.725, lat: 40.122, tier: 2,
    lede: 'The largest of eight designated groundwater basins on the eastern plains. Farms here pump from the Ogallala Aquifer because there is almost no river water.',
    stats: [['9,293 sq mi', 'area of the basin'], ['Nearly 580,000', 'irrigated acres in the Republican River basin, which rely on wells'], ['About 5,000', 'irrigation wells']],
    body: '<p>In a designated basin a state commission issues well permits, under a 1965 law that set up a modified form of "first in time, first in right" for this groundwater.</p><p>The state water plan expects irrigated land here to shrink as the aquifer thins.</p>' + btn('republican', 'Republican River farms'),
    sources: [S.dbGis, S.wp, S.rep, S.gwlaw] });
  add({ id: 'slvaquifer', kind: 'well', name: 'San Luis Valley aquifers', short: 'Valley aquifers', lon: -105.87, lat: 37.47, tier: 2,
    lede: 'The valley\'s streams, wetlands and aquifers are connected. Pumping from wells lowers the rivers, including the Rio Grande.',
    stats: [['1.2M AF', 'lost from the shallow aquifer between 1977 and 2022'], ['7', 'local districts formed to cut pumping'], ['March 2021', 'state well rules took effect']],
    body: '<p>Under the rules, every well owner must help restore the aquifer and replace the water the well takes from the rivers.</p>' + btn('slv', 'San Luis Valley farms'),
    sources: [S.wp] });

  // ----------------------------------------------------------------- industry
  add({ id: 'craig', kind: 'power', name: 'Craig Station', lon: -107.591, lat: 40.463, tier: 2,
    lede: 'A coal power plant that runs on water from the Yampa River. Its owner plans to shut it down.',
    stats: [['8.4M gallons', 'of Yampa River water used a day (2020 report)'], ['13,000 AF', 'consumed by all power plants on Colorado\'s side of the upper Colorado River basin in 2024']],
    body: '<p>In 2020 the owner planned to close all three units between 2025 and 2030, and had not decided what to do with the water rights.</p>',
    sources: [S.coal, S.cul] });
  add({ id: 'comanche', kind: 'power', name: 'Comanche Station', lon: -104.575, lat: 38.208, tier: 3,
    lede: 'A coal power plant in Pueblo. It runs on Arkansas River water leased from the city\'s water board.',
    stats: [['9.4M gallons', 'consumed a day, the most of any Colorado power plant (2014–2018)'], ['70%', 'expected drop in water use from closing two of its three units']],
    sources: [S.coal] });
  add({ id: 'wattenberg', kind: 'oil', name: 'Oil and gas wells', short: 'Oil & gas', lon: -104.8, lat: 40.2, tier: 3,
    lede: 'The oil and gas fields on the plains north of Denver account for almost three-quarters of the industry\'s water use in Colorado.',
    stats: [['26,000 AF', 'a year diverted for fracking statewide'], ['0.17%', 'of the water diverted in Colorado'], ['0.4%', 'of the water that comes back up from wells here is recycled (2022 data)']],
    sources: [S.frack] });
  add({ id: 'ski', kind: 'ski', name: 'Snowmaking at ski areas', short: 'Snowmaking', lon: -106.067, lat: 39.48, tier: 3,
    lede: 'Ski areas take water from mountain streams in early winter to make snow. Most of it melts back into the same streams in spring.',
    stats: [['2.2B gallons', 'a year used statewide, on average'], ['About 80%', 'returns to the watershed'], ['197M gallons', 'a year at Breckenridge, the most of any ski area']],
    sources: [S.snowmaking] });

  // ----------------------------------------------------------------- lines and areas
  const riverStyle = {
    Colorado: { w: 4.6, reaches: [{ test: lon => lon > -106.0, w: 1.8 }, { test: lon => lon > -107.3, w: 3.2 }, { test: (lon, lat) => lon < -108.36 && lon > -108.57 && lat > 38.9, w: 1.6 }] },
    Gunnison: { w: 3 }, Green: { w: 3.6 }, Yampa: { w: 2.6 }, White: { w: 1.8 }, 'San Juan': { w: 2.4 }, Animas: { w: 1.8 }, Dolores: { w: 1.6 },
    'South Platte': { w: 3, reaches: [{ test: lon => lon < -105.15, w: 1.8 }] }, 'North Platte': { w: 1.8 }, Laramie: { w: 1.2 },
    Arkansas: { w: 3, reaches: [{ test: lon => lon < -105.3, w: 2.2 }] }, 'Rio Grande': { w: 2.6 }, Purgatoire: { w: 1.2 }, 'Little Snake': { w: 1.3 },
    Blue: { w: 1.6 }, Eagle: { w: 1.8 }, 'Roaring Fork': { w: 2 }, 'Cache la Poudre': { w: 1.8 }, 'Big Thompson': { w: 1.4 }, Uncompahgre: { w: 1.5 },
    Conejos: { w: 1.3 }, 'San Miguel': { w: 1.3 }, 'Fountain Creek': { w: 1.1 }, 'Clear Creek': { w: 1.1 },
  };
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const rivers = {
    Colorado: rv('The river that seven states and Mexico depend on begins in Colorado. Most of the state\'s water falls on this side of the mountains, and most of its people live on the other.',
      [['51.75%', 'Colorado\'s share of the Upper Basin\'s water'], ['1.92M AF', 'consumed by Colorado in 2024'], ['510,100 AF', 'of that was sent out of the basin, mostly east under the Divide'], ['39%', 'of average: flow into Lake Powell, water year 2026']],
      '<p>The line thins between Palisade and Grand Junction, where the valley\'s canals have taken their water.</p>' + btn('utahline', 'How the river is shared') + btn('reach15', 'The 15-Mile Reach'), [S.compacts, S.cul, S.ms24]),
    'South Platte': rv('The river of the Front Range. About 70% of Coloradans live in its basin, and its water is used and reused all the way to Nebraska.',
      [['850,000+', 'irrigated acres in the basin'], ['About 70%', 'of its yearly flow comes during spring runoff']], btn('weld', 'South Platte farms') + btn('julesburg', 'The Nebraska line'), [S.wp]),
    Arkansas: rv('The Arkansas starts near Leadville and crosses the plains to Kansas. Tunnels add Colorado River water to it near the top.',
      [['About 1M', 'people supplied from the basin'], ['220,000+', 'irrigated acres in the lower valley']], btn('turquoise', 'The tunnels') + btn('johnmartin', 'John Martin Reservoir'), [S.wp]),
    'Rio Grande': rv('The Rio Grande rises in the San Juan Mountains and crosses the San Luis Valley. A 1938 compact sets how much Colorado must pass on to New Mexico and Texas.',
      [['520,000', 'irrigated acres in the valley, roughly'], ['8 times', 'less than average: how low runoff can fall in a dry year']], '<p>What Colorado owes downstream rises with the river\'s flow, so the share it can keep changes every year.</p>' + btn('slv', 'San Luis Valley farms'), [S.wp, S.compacts]),
    Gunnison: rv('A major tributary of the Colorado. Three dams, a 1909 tunnel, a national park and endangered fish all depend on the same flow.',
      [['About 770 cfs', 'released from the lowest dam, 1 Oct 2026'], ['About 560 cfs', 'of that went into the Gunnison Tunnel']], btn('bluemesa', 'Blue Mesa Reservoir') + btn('blackcanyon', 'Black Canyon and the tunnel'), [S.ms24]),
    Yampa: rv('The largest tributary of the Green River. It rises in the mountains around Steamboat Springs and flows west for more than 140 miles.',
      [['19 Aug 2026', 'a call cut off newer water rights'], ['5th', 'call ever on the main river below Stagecoach Reservoir']], btn('yampa', 'The 2026 call'), [S.pilot, S.wp]),
    'San Juan': rv('The San Juan drains Colorado\'s southwest corner into Navajo Reservoir, on the New Mexico line.', [], btn('navajo', 'Navajo Reservoir'), [S.wp]),
    Animas: rv('The river through Durango. Unlike its neighbors, it usually carries enough water to meet demand all year.', [['280 cfs', 'capacity of the pumps that lift water from here to Lake Nighthorse']], btn('nighthorse', 'Lake Nighthorse'), [S.wp, S.alp]),
    Dolores: rv('The Dolores is dammed at McPhee Reservoir. Most of its water is sent south to farms around Cortez.', [], btn('mcphee', 'McPhee Reservoir'), [S.wp]),
    'North Platte': rv('The North Platte starts in North Park, a high basin of hay meadows and ranches, and flows north into Wyoming.', [], '', [S.wp]),
    Republican: rv('A small river on the eastern plains. Colorado\'s use of it is capped by a 1942 compact with Kansas and Nebraska.', [['54,100 AF', 'a year: Colorado\'s share']], btn('republican', 'Republican River farms'), [S.compacts]),
    Blue: rv('The Blue River fills Dillon Reservoir and Green Mountain Reservoir before joining the Colorado.', [], btn('dillon', 'Dillon Reservoir') + btn('greenmtn', 'Green Mountain Reservoir'), [S.wp]),
    Eagle: rv('The Eagle River joins the Colorado above Glenwood Canyon. The state\'s first ditch across the Continental Divide took water from its headwaters in 1880.', [['1880', 'the Ewing Ditch was built'], ['1967', 'the Homestake Project began sending Eagle River water east']], btn('turquoise', 'Where that water arrives'), [S.wp]),
    'Roaring Fork': rv('The river through Aspen. Tunnels take water from its headwaters and from the Fryingpan River to the Arkansas basin.', [], btn('twinlakes', 'Twin Lakes Tunnel') + btn('turquoise', 'Boustead Tunnel'), [S.wp]),
    Fryingpan: rv('A tributary of the Roaring Fork. The Boustead Tunnel takes water from its headwaters to the Arkansas River.', [['51,650 AF', 'a year on average, 1985–2017']], btn('turquoise', 'Boustead Tunnel'), [S.ajFry]),
    Fraser: rv('The Fraser River supplies the Moffat Tunnel, which has carried its water to Denver since 1936.', [], btn('moffat', 'Moffat Tunnel'), [S.wp]),
    'Cache la Poudre': rv('The river through Fort Collins and Greeley. Water from the Colorado River\'s headwaters is added to it at the top.', [], btn('headwaters', 'Colorado River headwaters') + btn('glade', 'A reservoir planned beside it'), [S.wp]),
    'Big Thompson': rv('The Adams Tunnel empties into this river\'s basin near Estes Park.', [['200,000 AF', 'a year arrives through the tunnel, on average']], btn('adams', 'Adams Tunnel'), [S.nw]),
    Uncompahgre: rv('The last large tributary of the Gunnison. Most of the water its valley uses comes through a tunnel from the Gunnison itself.', [], btn('uncompahgre', 'Uncompahgre Valley farms'), [S.wp]),
    _default: rv('One of the streams that carry Colorado\'s mountain snow to the plains and deserts below.', [], '', [S.wp]),
  };
  const T = 'Water moved across a divide';
  const canals = {
    'Alva B. Adams Tunnel': { kind: T, icon: 'tunnel', lede: 'A 13.1-mile tunnel under Rocky Mountain National Park, from Grand Lake to the east side of the Continental Divide.', stats: [['200,000 AF', 'delivered in an average year'], ['1.1M', 'residents supplied']], body: btn('adams', 'More on the tunnel'), sources: [S.nw, S.osm] },
    'Moffat Water Tunnel': { kind: T, icon: 'tunnel', lede: 'Denver Water\'s tunnel from the Fraser River to South Boulder Creek, in use since 1936. Drawn as a straight line between its portals.', body: btn('moffat', 'More on the tunnel'), sources: [S.wp, S.dwrStruct] },
    'Harold D. Roberts Tunnel': { kind: T, icon: 'tunnel', lede: 'Denver Water\'s 23-mile tunnel from Dillon Reservoir to the North Fork of the South Platte.', body: btn('roberts', 'More on the tunnel'), sources: [S.dwRoberts, S.wp, S.osm] },
    'Charles H. Boustead Tunnel': { kind: T, icon: 'tunnel', lede: 'The tunnel of the Fryingpan-Arkansas Project. It carries Fryingpan River water under the Divide to Turquoise Lake.',
      stats: [['51,650 AF', 'a year on average, 1985–2017'], ['63,600 AF', 'a year on average, 2013–2017'], ['120,000 AF', 'the most it may take in any one year'], ['945 cfs', 'capacity']], body: btn('turquoise', 'Turquoise Lake'), sources: [S.ajFry, S.osm] },
    'Homestake Tunnel': { kind: T, icon: 'tunnel', lede: 'Carries water from the upper Eagle River to the Arkansas basin for Aurora and Colorado Springs. Completed in 1967. Drawn as a straight line between its portals.', body: btn('turquoise', 'Turquoise Lake'), sources: [S.wp, S.dwrStruct] },
    'Twin Lakes Tunnel': { kind: T, icon: 'tunnel', lede: 'Carries water from the Roaring Fork basin under Independence Pass toward Twin Lakes. Drawn as a straight line between its portals.', body: btn('twinlakes', 'Twin Lakes'), sources: [S.dwrStruct] },
    'Grand River Ditch': { kind: T, icon: 'canal', lede: 'An open ditch cut along the Never Summer Mountains. It collects snowmelt from the Colorado River\'s headwaters and carries it over La Poudre Pass to the Cache la Poudre River.', body: btn('headwaters', 'Colorado River headwaters'), sources: [S.osm] },
    'Hoosier Pass Tunnel': { kind: T, icon: 'tunnel', lede: 'Opened in 1952 by Colorado Springs. It takes water from the Blue River basin on its way to the Arkansas basin.', sources: [S.wp, S.osm] },
    'Laramie-Poudre Tunnel': { kind: T, icon: 'tunnel', lede: 'A short tunnel that moves water from the Laramie River, which flows to Wyoming, into the Cache la Poudre River.', sources: [S.dwrStruct, S.osm] },
    'Gunnison Tunnel': { kind: 'Irrigation tunnel', icon: 'tunnel', lede: 'Completed in 1909. It carries Gunnison River water through a ridge to farms in the Uncompahgre Valley.',
      stats: [['390,000 AF', 'a year, roughly'], ['80,000', 'acres served, roughly'], ['About 560 cfs', 'flowing through on 1 Oct 2026']], body: btn('blackcanyon', 'Black Canyon and the tunnel'), sources: [S.wp, S.kvnf, S.ms24, S.osm] },
    'Government Highline Canal': { lede: 'The largest canal in the Grand Valley, opened about 1914. On 3 September 2026 it stopped delivering water during the irrigation season for the first time.',
      stats: [['730 cfs', 'the flow it was designed for'], ['100 cfs', 'available when it shut off']], body: btn('grandvalley', 'Grand Valley farms'), sources: [S.pivots, S.ww, S.osm] },
    'Grand Valley Canal': { lede: 'Holds the oldest large water right in the Grand Valley, established in 1882.', stats: [['520 cfs', 'its right: the first water in the river goes here']], body: btn('grandvalley', 'Grand Valley farms'), sources: [S.ww, S.wp, S.osm] },
    'Orchard Mesa Canals': { lede: 'Canals serving the peach orchards on Orchard Mesa, south of the river at Palisade.', stats: [['460 cfs', 'the district\'s water right']], body: btn('grandvalley', 'Grand Valley farms'), sources: [S.ww, S.osm] },
    'Colorado Canal': { lede: 'Brought irrigation to Crowley County in the 1890s. Most of the water rights it carried were later sold to cities.', body: btn('crowley', 'Crowley County'), sources: [S.crowley, S.osm] },
    'San Luis People\'s Ditch': { lede: 'A community ditch dug in 1852. It holds the oldest water right in Colorado.', body: btn('peoplesditch', 'First in time, first in right'), sources: [S.wp, S.cdss] },
    'Charles Hansen Feeder Canal': { lede: 'Part of the Colorado-Big Thompson Project. It carries water that came through the Adams Tunnel north toward Horsetooth Reservoir.', body: btn('adams', 'Adams Tunnel'), sources: [S.nw, S.osm] },
    'High Line Canal': { lede: 'An irrigation canal that winds through the Denver area.', sources: [S.osm] },
    _default: { lede: 'An irrigation canal that carries river water to farm fields.', body: '<p>Colorado has thousands of ditches like this one. Only the larger ones are drawn. Each has its own place in the line of seniority on its river.</p>', sources: [S.osm, S.cdss] },
  };
  const desigBase = '<p>In a designated basin, well permits come from the Colorado Ground Water Commission and local management districts, not from the water courts. The rules are a modified form of "first in time, first in right."</p>';
  const dbCard = (lede, sqmi, extra) => ({ lede, stats: [[sqmi + ' sq mi', 'area of the basin']], body: desigBase + (extra || ''), sources: [S.dbGis, S.gwlaw] });
  const amas = {
    'Northern High Plains': dbCard('The largest designated groundwater basin. Its farms pump from the Ogallala Aquifer.', '9,293', btn('ogallala', 'More on this basin')),
    'Southern High Plains': { lede: 'A designated basin in the state\'s southeast corner, where towns and farms depend on wells.', stats: [['2,506 sq mi', 'area of the basin'], ['3.5 to 21 ft', 'drop in water levels, 2008 to 2018']], body: desigBase, sources: [S.dbGis, S.wp, S.gwlaw] },
    'Kiowa-Bijou': dbCard('A designated basin on the plains east of Denver.', '2,096'),
    'Upper Big Sandy': dbCard('A designated basin on the plains near Limon.', '441'),
    'Lost Creek': dbCard('A designated basin on the plains northeast of Denver.', '433'),
    'Upper Black Squirrel Creek': dbCard('A designated basin east of Colorado Springs.', '349'),
    'Upper Crow Creek': dbCard('A designated basin on the Wyoming line.', '259'),
    'Camp Creek': dbCard('The smallest designated basin.', '180'),
    'Denver Basin': { lede: 'The outline of the Denver Basin aquifers: deep layers of rock that hold very old water. It is refilled so slowly that it is treated as nonrenewable.',
      stats: [['100 years', 'the aquifer life assumed when pumping rights are handed out']], body: '<p>The right to pump goes with ownership of the land above.</p>' + btn('denverbasin', 'More on the Denver Basin') + btn('castlerock', 'A town that depends on it'), sources: [S.wp, S.gwlaw, ['Outline: Colorado DWR', 'https://gisdnr.state.co.us/arcgis/rest/services/CSLB_External/Water/MapServer/1']] },
    _default: { lede: 'A designated groundwater basin.', body: desigBase, sources: [S.dbGis, S.gwlaw] },
  };
  const tribes = {
    'Southern Ute': { lede: 'The Southern Ute Indian Reservation. The tribe\'s water rights were settled in a 1986 agreement and confirmed in state court in 1991.', body: btn('ignacio', 'The Southern Ute Tribe') + btn('nighthorse', 'Lake Nighthorse'), sources: [S.wp] },
    'Ute Mountain': { lede: 'The Ute Mountain Ute Reservation. The tribe\'s water rights were settled in the same 1986 agreement as the Southern Ute Tribe\'s.', body: btn('towaoc', 'The Ute Mountain Ute Tribe') + btn('mcphee', 'McPhee Reservoir'), sources: [S.wp] },
    _default: { lede: 'This reservation lies outside Colorado. Colorado has two federally recognized tribes, both in the southwest corner of the state.', sources: [S.wp] },
  };

  window.MAPCONTENT = {
    meta: { title: 'Colorado Water: an explorable map', h1: 'Colorado Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of Colorado's water system. Use the lists in the side panel to browse the same information without the map.", home: 'Show all of Colorado' },
    features: F, riverStyle, rivers, canals, amas, tribes,
    kinds: {
      tunnel: ['canals', 'tunnel', 'Water moved across the Divide'], source: ['rivers', 'river', 'River source'], tribe: ['cities', 'tribe', 'Tribal nation'],
      oil: ['industry', 'oil', 'Oil and gas'], ski: ['industry', 'snow', 'Ski areas'], well: ['ground', 'well', 'Groundwater'], farm: ['farms', 'farm', 'Farming region'],
    },
    sprites: {
      tunnel: ['.....ww.......', '....wGGw..w...', '...GGGGGGwGG..', '..GGdGGGGGGGG.', '.GGGkkkkkGGdGG', 'GGdkkbbbkkGGGG', 'GGGkbbBbbkGGdG', 'GdGkbBbbbkGGGG', 'bbbbbbbBbbbbBb'],
      oil: ['.kk...........', '.kkkkkkkkkkk..', '.kk..kk....k..', '.....kk....k..', '....kyyk...k..', '...kyyyyk..k..', 'tttttttttttttt'],
    },
    layers: { golf: false, canals: { label: 'Canals & tunnels' } },
    majorCanals: ['tunnel'], canalWidths: { tunnel: 2.6 }, canalSub: { tunnel: 'Water moved across a divide' },
    riverNames: { 'Big Sandy': 'Big Sandy Creek', Beaver: 'Beaver Creek', Lodgepole: 'Lodgepole Creek', 'S. Fork Republican': 'South Fork Republican River', 'Lake Fork Gunnison': 'Lake Fork of the Gunnison' },
    areaKind: n => n === 'Denver Basin' ? 'Bedrock aquifers' : 'Designated groundwater basin',
    areaAlt: n => n === 'Denver Basin',
    areaLabels: { 'Denver Basin': { at: [-104.93, 39.2], minZ: .3 }, 'Camp Creek': { minZ: .45 }, 'Lost Creek': { minZ: .45 }, 'Upper Big Sandy': { minZ: .45 }, 'Upper Black Squirrel Creek': { minZ: .45 }, 'Upper Crow Creek': { minZ: .45 }, 'Kiowa-Bijou': { minZ: .3 } },
    fieldSub: 'Farm fields', farmRadiusKm: 45,
    hud: [['5.3M AF', 'water consumed per year'], ['5.8M', 'people'], ['24%', 'of median snowpack, 1 Apr 2026']],
    budget: {
      title: 'Colorado consumes about 5.3 million acre-feet a year',
      lede: 'About 13.5 million acre-feet of water starts in Colorado each year, most of it as mountain snow. The state consumes less than 40%. The rest flows on to 19 downstream states and Mexico.',
      perDrop: 100000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons.',
      sources: [
        { id: 'surface', label: 'Rivers and streams', pct: 83, af: 4.43e6, color: 'var(--c-colorado)', layer: 'rivers,reservoirs', feat: 'snow', note: 'Snowmelt, caught in reservoirs and carried by ditches, canals and tunnels.' },
        { id: 'ground', label: 'Groundwater', pct: 17, af: 0.91e6, color: 'var(--c-ground)', layer: 'ground', feat: 'ogallala', note: 'Pumped from wells, mostly on the eastern plains and in the San Luis Valley.' },
      ],
      uses: [
        { id: 'ag', label: 'Farms', pct: 91, af: 4.844e6, color: 'var(--c-ag)', layer: 'farms', feat: 'weld', note: 'Irrigated crops and pasture. Grass pasture is the state\'s main irrigated crop, and much of the land grows hay for livestock.' },
        { id: 'muni', label: 'Cities & towns', pct: 7, af: 0.38e6, color: 'var(--c-muni)', layer: 'cities', feat: 'denver', note: 'Homes, businesses and parks for 5.8 million people.' },
        { id: 'ind', label: 'Large industry', pct: 2, af: 0.116e6, color: 'var(--c-ind)', layer: 'industry', feat: 'craig', note: 'Power plants, oil and gas, snowmaking and factories with their own supply.' },
      ],
      body: `<div class="note">These figures count water <b>consumed</b>: used up by crops, people and industry and not returned to a river. They come from the 2023 Colorado Water Plan. The plan gives the split between rivers and wells only as shares, so those two volumes are the shares applied to the total.</div>
        <div class="note">Counted another way, as water <b>taken out</b> of rivers and wells, the total is about 15.3 million AF a year. That is more than the rivers carry, because the same water is taken out, partly returned, and taken out again downstream.</div>
        <div class="note hot"><b>What is changing:</b> Winter 2025–26 brought the lowest snowpack on record, 24% of the median on 1 April. The reservoir and river readings on this map are from that year. <button class="btn" data-feat="snow" style="margin-top:6px">See the snowpack</button></div>`,
    },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a reservoir, a tunnel, a field, a canal, or open land.',
    browse: [
      ['Snow, rivers and rules', ['snow', 'headwaters', 'shoshone', 'reach15', 'utahline', 'yampa', 'blackcanyon', 'julesburg', 'salida', 'peoplesditch']],
      ['Reservoirs', ['bluemesa', 'dillon', 'granby', 'greenmtn', 'horsetooth', 'pueblores', 'johnmartin', 'mcphee', 'navajo', 'nighthorse', 'gross', 'elevenmile', 'wolford', 'glade']],
      ['Across the Divide', ['adams', 'moffat', 'roberts', 'turquoise', 'twinlakes']],
      ['Cities', ['denver', 'aurora', 'cosprings', 'fortcollins', 'pueblo', 'grandjunction', 'castlerock']],
      ['Farms', ['weld', 'lowerark', 'crowley', 'slv', 'grandvalley', 'uncompahgre', 'republican']],
      ['Groundwater', ['denverbasin', 'ogallala', 'slvaquifer']],
      ['Tribes', ['ignacio', 'towaoc']],
      ['Industry', ['craig', 'comanche', 'wattenberg', 'ski']],
    ],
    riverLabels: [['COLORADO RIVER', -107.72, 39.5, .32, -8], ['GUNNISON R.', -108.3, 38.72, .45, -42], ['YAMPA R.', -107.95, 40.42, .45, 5], ['WHITE R.', -108.3, 40.05, .6, 8], ['SOUTH PLATTE R.', -103.6, 40.37, .32, -18], ['ARKANSAS RIVER', -103.3, 38.02, .32, 3], ['ARKANSAS R.', -105.75, 38.42, .6, 30], ['RIO GRANDE', -106.6, 37.63, .45, 12], ['SAN JUAN R.', -107.2, 37.17, .6, 30], ['DOLORES R.', -108.75, 38.1, .6, -55], ['NORTH PLATTE R.', -106.3, 40.85, .6, -60], ['REPUBLICAN R.', -102.45, 39.72, .6, -20]],
    neighbors: [['WYOMING', -106.4, 41.17, 0], ['NEBRASKA', -102.9, 41.17, 0], ['UTAH', -109.25, 39.6, -90], ['NEW MEXICO', -105.6, 36.83, 0], ['KANSAS', -101.85, 38.9, 90], ['OKLAHOMA', -102.6, 36.83, 0]],
    spot: {
      rain: inches => `${inches < 12 ? 'Dry country.' : inches < 18 ? 'Semi-arid country.' : inches < 30 ? 'Wetter foothill or mountain country.' : 'High mountain country. Most of this falls as snow, and this is where the rivers start.'} Most of the water Colorado uses comes from mountain snow, not from rain where people live.`,
      crop: 'cropland', rest: 'grassland, sagebrush or rock', restAlone: 'Grassland, sagebrush or bare rock', rulesTitle: 'Water rules here',
      area: n => n === 'Denver Basin'
        ? 'Deep bedrock aquifers lie under this spot. Rain and snow refill them very slowly, so the water is treated as nonrenewable. The right to pump goes with the land above, on the assumption that the aquifer should last 100 years.'
        : 'This is one of eight designated groundwater basins on the eastern plains, where there is little river water and wells are the main supply. A state commission issues well permits here, under a modified form of "first in time, first in right."',
      basin: n => `This spot is in water <b>${n}</b>, one of seven divisions that follow the state's river basins. Each has its own water court. `,
      none: 'Water here is shared by seniority: when a river runs short, older rights are served first. Groundwater that is connected to a stream counts as part of that stream, so a well needs a state permit and has its own place in line. Small household wells are exempt.',
      tribal: 'The two Ute tribes settled their water rights with the state and federal governments in 1986.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain and snow: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'], S.gwlaw, S.wp],
    },
    legend: {
      rain: 'About 8 inches a year at Alamosa, 9 at Grand Junction, 15 at Denver, and over 40 on the wettest mountains. PRISM 1991–2020 normals.',
      groundA: 'Designated groundwater basin', groundB: 'Denver Basin aquifers',
      ground: 'Dashed white lines are the seven water divisions. Outside the shaded areas, most wells are treated as part of the nearest river.',
      snow: 'Where snow usually builds up (drawn from elevation and precipitation; not a live snow map). Winter 2025–26 had far less.',
    },
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 3 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rain and snow (PRISM 1991–2020 normals). The satellite data shows all cropland, whether or not it is irrigated; much of the cropland on the eastern plains is not. Large rivers are from Natural Earth. Smaller rivers, reservoir outlines, canals and most tunnels are from OpenStreetMap contributors. Three tunnels are drawn as straight lines between portals recorded by the Colorado Division of Water Resources. Groundwater basins, water divisions and San Luis Valley canals are from the same agency. Tribal lands are from the Census Bureau. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. Figures are as of November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'A state where the rivers start', text: 'About 13.5 million acre-feet of water starts in Colorado each year. The state consumes about 5.3 million. The rest flows out in every direction, to 19 downstream states and Mexico. The panel shows where the water comes from and where it goes.', view: 'home', home: true },
      { title: 'It arrives as snow', text: 'The white areas are where snow usually builds up in winter. That snow is the state\'s largest reservoir. On 1 April 2026 the snowpack was 24% of the median, the lowest on record, so this year\'s readings on the map are far below normal.', view: 'home', season: 'winter', select: 'snow', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'Water on one side, people on the other', text: 'About 80% of Colorado\'s water falls west of the Continental Divide. Nearly 90% of its people live east of it. The turquoise lines are tunnels under the mountains. This one, the Adams Tunnel, runs 13 miles beneath Rocky Mountain National Park.', box: [-106.35, 39.95, -104.75, 40.75], zoom: 1.5, select: 'adams', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Denver\'s reservoir across the mountains', text: 'Dillon Reservoir is Denver Water\'s largest, and it sits west of the Divide. A 23-mile tunnel carries its water toward the city. In October 2026 Dillon was 63% full, when about 95% is normal.', box: [-106.4, 39.3, -104.7, 39.95], zoom: 1.5, select: 'dillon', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Nine-tenths goes to farms', text: 'Farms consume about 91% of the water used in Colorado. The South Platte valley has more irrigated land than any other basin, and the same water is taken out and returned many times on its way to Nebraska.', lon: -104.3, lat: 40.3, zoom: .75, select: 'weld', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'When farm water is sold', text: 'Water rights can be sold. In the 1970s farmers in Crowley County began selling theirs, and the water went to cities. The county had more than 50,000 irrigated acres. By 2015 it had about 5,000.', lon: -103.9, lat: 38.2, zoom: .9, select: 'crowley', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Water that does not refill', text: 'The pale blue area is the Denver Basin: deep aquifers that refill very slowly. Castle Rock gets only about a third of its water from renewable sources. The darker areas are basins on the plains where farms depend on wells.', box: [-105.4, 38.6, -102.0, 40.9], zoom: .8, select: 'castlerock', layers: ['rivers', 'ground', 'cities', 'farms'] },
      { title: 'A valley that runs on wells', text: 'The round fields in the San Luis Valley are sprinklers fed by wells. The shallow aquifer has lost about 1.3 million acre-feet since 1976. Farmers charge themselves for pumping, and the state has set a 2031 deadline to stop the decline.', lon: -106.0, lat: 37.6, zoom: .9, select: 'slv', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Even the oldest rights ran short', text: 'Farms in the Grand Valley hold some of the oldest rights on the Colorado River. On 3 September 2026 the river ran so low that the valley\'s largest canal stopped delivering water, for the first time since about 1914.', lon: -108.45, lat: 39.12, zoom: 1.6, select: 'grandvalley', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'What happens next', text: 'Blue Mesa, the state\'s largest reservoir, ended September 2026 at 17%. Colorado faces no mandatory cut under the new Colorado River rules, but its reservoirs can be drawn on to prop up Lake Powell. Now explore: click any reservoir, tunnel, field or patch of open land.', view: 'home', select: 'bluemesa', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry'] },
    ],
    terrain: {
      // snow line: higher in the south and in dry rain-shadow basins (South Park, North Park, the Gunnison and San Luis valleys), lower on wet ranges
      snowLine: (lat, p) => 2950 + (39 - lat) * 110 - Math.max(-200, Math.min(800, (p - 14) * 45)),
      alpine: 3500, saguaro: () => false,
      pivot: (lon, lat) => lon > -103.4 || (lon > -106.35 && lon < -105.55 && lat > 37.0 && lat < 38.2),
      redrock: (lon, lat, e, cl) => cl((-107.6 - lon) / .5, 0, 1) * cl((2300 - e) / 300, 0, 1),
    },
  };
})();
