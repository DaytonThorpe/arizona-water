/* Idaho. Every figure has a source link on its card. Fact sheet and verification log: research/idaho.md.
   Winter 2025-26 was very likely Idaho's lowest April 1 snowpack since measurements began in the 1930s, so 2026
   storage and flow readings are labelled as that year's readings, not as typical values. Figures are as of November 2026.
   The statewide budget counts water withdrawn (USGS, 2015); Idaho's water agency publishes no statewide use budget. */
(() => {
  const S = {
    usgs: ['USGS water use data, 2015', 'https://www.sciencebase.gov/catalog/item/5af3311be4b0da30c1b245d8'],
    hm: ['Reclamation Hydromet: daily storage', 'https://www.usbr.gov/pn/hydromet/burtea.html'],
    hmBoise: ['Reclamation Hydromet: Boise and Payette storage', 'https://www.usbr.gov/pn/hydromet/boipaytea.html'],
    nrcs: ['NRCS Idaho Water Supply Outlook, 1 Apr 2026', 'https://nrcs-prod.azureedge.us/sites/default/files/2026-04/borid426.pdf'],
    espa26: ['IDWR news release, 26 Aug 2026', 'https://idwr.idaho.gov/wp-content/uploads/2026/08/News-Release-20260826-IDWR-hydrologists-provide-update-on-water-volume-in-Eastern-Snake-Plain-Aquifer-spring-flows-reach-gains-and-impact-of-managed-recharge-activities.pdf'],
    asc: ['Idaho Water Resource Board committee materials, 26 Aug 2026', 'https://idwr.idaho.gov/wp-content/uploads/2026/08/Final-Materials-Aquifer-Stabilization-Cmte.-No.-4-26_w-1.pdf'],
    call: ['IDWR: Surface Water Coalition delivery call', 'https://idwr.idaho.gov/?p=63015'],
    julOrder: ['IDWR order, 21 Jul 2026', 'https://idwr.idaho.gov/wp-content/uploads/2025/08/CM-DC-2010-001-20260721-Order-Revising-April-2026-Forecast-Supply-and-Continuing-Curtailment-Methodology-Steps-5-6.pdf'],
    ein: ['East Idaho News, 28 May 2026', 'https://www.eastidahonews.com/2026/05/curtailment-order-targets-924-groundwater-rights-across-eastern-idaho/'],
    faq24: ['IDWR curtailment questions and answers, Jun 2024', 'https://idwr.idaho.gov/wp-content/uploads/sites/2/faq/20240603-FAQ-on-the-Directors-curtailment-order-for-general-public.pdf'],
    curt24: ['IDWR news release, 30 May 2024', 'https://idwr.idaho.gov/wp-content/uploads/sites/2/news-release/20240530-IDWR-Director-issues-curtailment-order-for-6-groundwater-districts-FINAL.pdf'],
    plan24: ['IDWR order approving the 2024 plan', 'https://idwr.idaho.gov/wp-content/uploads/sites/2/legal/CM-MP-2024-003/CM-MP-2024-003-20250103-Final-Order-Approving-Stipulated-Mitigation-Plan.pdf'],
    bspr: ['Boise State Public Radio, 26 Aug 2026', 'https://www.boisestatepublicradio.org/environment/2026-08-26/idaho-drought-eastern-snake-plain-aquifer'],
    rech: ['Idaho Water Resource Board news release, Jan 2025', 'https://idwr.idaho.gov/wp-content/uploads/sites/2/news-release/IWRB-hears-updates-on-ESPA-recharge-and-cloud-seeding-FINAL.pdf'],
    rech350: ['Idaho Water Resource Board: recharge goal', 'https://idwr.idaho.gov/wp-content/uploads/sites/2/iwrb/Aquifer%20Stabilization/350k-State-Water-Plan-and-ESPA-CAMP-Proposed-Changes.pdf'],
    swan: ['IDWR: Swan Falls settlement', 'https://idwr.idaho.gov/settlements/swan-falls-settlement/'],
    swan26: ['IDWR news release, 9 Jul 2026', 'https://idwr.idaho.gov/wp-content/uploads/2026/07/News-Release-20260709-Gov-Little-recommends-proactive-steps-to-avoid-curtailment-for-Swan-Falls-trust-water-users.pdf'],
    srba: ['IDWR: Snake River Basin Adjudication', 'https://idwr.idaho.gov/water-rights/adjudication/srba/'],
    domestic: ['IDWR: domestic well exemption', 'https://idwr.idaho.gov/water-rights/domestic-exemption/'],
    gis: ['IDWR map data', 'https://gis.idwr.idaho.gov/hosting/rest/services'],
    dry: ['Boise State Public Radio, Jun 2013', 'https://www.boisestatepublicradio.org/environment/2013-06-17/why-the-snake-river-in-idaho-runs-dry-for-miles'],
    tfcc: ['Twin Falls Canal Company: Milner Dam', 'https://twinfallscanal.com/?p=19'],
    kivi: ['Idaho News 6, May 2026', 'https://www.kivitv.com/twin-falls/twin-falls-faces-second-water-delivery-cut-amid-historic-drought-conditions'],
    swcJun: ['Coeur d\'Alene Press, 15 Jun 2026', 'https://cdapress.com/news/2026/jun/15/low-water-supply-means-severe-shortfalls-for-irrigation-season/'],
    np: ['Nez Perce agreement summary, 2004', 'https://idwr.idaho.gov/wp-content/uploads/sites/2/iwrb/2004/20040515-Nez-Perce-Agreement-Summary.pdf'],
    fh: ['Interior Department, 20 Jun 1990', 'https://www.bia.gov/as-ia/opa/online-press-release/interior-secretary-lujan-approves-historic-agreement-settle-indian'],
    cdaGov: ['Idaho Governor\'s Office, 5 Mar 2026', 'https://gov.idaho.gov/pressrelease/coeur-dalene-tribe-state-of-idaho-announce-historic-water-rights-settlement/'],
    cdaSpr: ['Spokane Public Radio, 6 Mar 2026', 'https://www.spokanepublicradio.org/2026-03-06/coeur-dalene-tribe-state-of-idaho-reach-water-rights-settlement-agreement'],
    af: ['Reclamation: American Falls Dam', 'https://www.usbr.gov/projects/index.php?id=24'],
    minProj: ['Reclamation: Minidoka Project', 'https://www.usbr.gov/projects/index.php?id=361'],
    minDam: ['Reclamation: Minidoka Dam and Powerplant', 'https://www.usbr.gov/projects/index.php?id=565'],
    pal: ['Reclamation: Palisades Project', 'https://www.usbr.gov/projects/index.php?id=382'],
    teton: ['Reclamation: Teton Dam', 'https://www.usbr.gov/pn/snakeriver/dams/uppersnake/teton/index.html'],
    ard: ['Reclamation: Anderson Ranch Dam raise, Apr 2026', 'https://www.usbr.gov/pn/studies/boisefeasibility/andersonraise/docs/20260416_ARD%20Raise%20Fact%20Sheet%20April%202026_508.pdf'],
    ip: ['Idaho Power: hydroelectric', 'https://www.idahopower.com/energy-environment/energy/energy-sources/hydroelectric/'],
    ipCloud: ['Idaho Power: cloud seeding', 'https://www.idahopower.com/energy-environment/energy/energy-sources/hydroelectric/cloud-seeding/'],
    cloud: ['Idaho Water Resource Board: cloud seeding', 'https://idwr.idaho.gov/iwrb/programs/cloud-seeding-program/'],
    crs: ['Congressional Research Service, 2026', 'https://www.everycrsreport.com/reports/R49059.html'],
    odfw: ['Oregon and Washington fishery managers, 1 Jul 2026', 'https://www.dfw.state.or.us/fish/OSCRP/CRM/FS/26/07-01-26%20Summer%20Fact%20Sheet%20No.%202.pdf'],
    cbb: ['Columbia Basin Bulletin, 5 Dec 2025', 'https://columbiabasinbulletin.org/endangered-snake-river-sockeye-2025-return-near-average-1106-fish-hatchery-and-wild-make-it-to-lower-granite-dam/'],
    svrp: ['USGS: Spokane Valley-Rathdrum Prairie aquifer', 'https://www.usgs.gov/publications/hydrogeologic-framework-and-ground-water-budget-spokane-valley-rathdrum-prairie'],
    isda: ['Idaho State Department of Agriculture: 2025 statistics', 'https://agri.idaho.gov/wp-content/uploads/marketing/Publications&Resources/2025-Idaho-Ag-Statistics_Final.pdf'],
    uiAqua: ['University of Idaho Extension: aquaculture', 'https://www.uidaho.edu/extension/county/twin-falls/aquaculture'],
    boiseOrd: ['City of Boise, Jul 2026', 'https://www.cityofboise.org/news/public-works/2026/july/city-of-boise-adopts-drought-ordinance/'],
    nws: ['National Weather Service Boise, 1 Oct 2026', 'https://www.weather.gov/media/boi/DGT/DGT_BOI_10012026.pdf'],
    hff: ['Henry\'s Fork Foundation, Sep 2026', 'https://henrysfork.org/?p=13559'],
    wDwor: ['Wikipedia: Dworshak Dam', 'https://en.wikipedia.org/wiki/Dworshak_Dam'],
    wHells: ['Wikipedia: Hells Canyon Dam', 'https://en.wikipedia.org/wiki/Hells_Canyon_Dam'],
    wPend: ['Wikipedia: Lake Pend Oreille', 'https://en.wikipedia.org/wiki/Lake_Pend_Oreille'],
    wSalmon: ['Wikipedia: Salmon River', 'https://en.wikipedia.org/wiki/Salmon_River_(Idaho)'],
    wNyc: ['Wikipedia: New York Canal', 'https://en.wikipedia.org/wiki/New_York_Canal'],
    wBear: ['Wikipedia: Bear Lake', 'https://en.wikipedia.org/wiki/Bear_Lake_(Idaho%E2%80%93Utah)'],
    osm: ['Route: OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'],
    lc: ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'],
  };
  const F = [];
  const add = o => F.push(o);
  const btn = (id, label) => `<p><button class="btn" data-feat="${id}">${label}</button></p>`;
  const dryYear = '<p>These are readings from a record-dry year. They should not be read as typical.</p>';

  // ----------------------------------------------------------------- snow, rivers, law
  add({ id: 'snow', kind: 'snow', name: 'Mountain snowpack', short: 'Snowpack', lon: -115.0, lat: 45.1, tier: 1,
    lede: 'Most of Idaho\'s water arrives as mountain snow. It melts in spring and early summer and fills the rivers and reservoirs that farms draw on until autumn.',
    stats: [['68%', 'of normal: Idaho\'s snowpack at its 2026 peak, on 17 March'], ['3 weeks', 'early: when the 2026 snowpack peaked, roughly'], ['25%', 'of the snowpack had already melted by 1 April 2026'], ['21%', 'of normal on 1 April 2026 at Mores Creek Summit, in the mountains above Boise. It was the lowest reading there on record.']],
    body: '<p>Federal snow surveyors said 1 April 2026 was very likely the lowest April 1 snowpack since measurements began in the 1930s. Reservoir and river readings on this map come from that year.</p><p>Switch the season to Winter to see where snow usually builds up.</p>',
    sources: [S.nrcs] });
  add({ id: 'milner', kind: 'reservoir', kindLabel: 'Diversion dam', name: 'Milner Dam: where the Snake is emptied', short: 'Milner Dam', lon: -114.018, lat: 42.524, tier: 1, zoom: 1.1,
    lede: 'At this low dam the Snake River is turned into canals on both banks. In summer little or no water continues down the riverbed.',
    stats: [['1905', 'the dam\'s gates were first closed'], ['500,000+', 'acres of farmland watered from here'], ['25 miles', 'or more of riverbed below the dam with too little water to paddle, June 2013'], ['Every year', 'since at least 1907 the river below the dam has run dry at some point']],
    body: '<p>Idaho\'s state water plan sets the required flow past Milner at zero. The idea is that all the water above this point may be used. Below here the river is rebuilt by springs and tributaries, and is treated as a second river.</p>' + btn('tfcc', 'The canals that take the water') + btn('thousandsprings', 'Where the river comes back'),
    sources: [S.tfcc, S.dry] });
  add({ id: 'thousandsprings', kind: 'spring', name: 'Thousand Springs', lon: -114.845, lat: 42.747, tier: 2,
    lede: 'Water that sank into the lava plain far upstream pours back out of the canyon wall here. The springs are where the Eastern Snake Plain Aquifer drains into the Snake River.',
    stats: [['2.2M AF', 'a year taken from springs and streams by Idaho fish farms (2015), most of it here'], ['2026', 'spring flows here were expected to decline, state hydrologists said']],
    body: '<p>The springs run at a steady temperature all year, which is why trout farms line this reach. The amount of water coming out depends on how full the aquifer is.</p>' + btn('trout', 'The trout farms') + btn('espa', 'The aquifer behind the springs'),
    sources: [S.espa26, S.usgs, S.uiAqua] });
  add({ id: 'swanfalls', kind: 'hydro', name: 'Swan Falls Dam', short: 'Swan Falls', lon: -116.378, lat: 43.243, tier: 2,
    lede: 'A small Idaho Power dam whose water right led to a 1984 deal that still caps how much the Snake River can be drawn down upstream.',
    stats: [['3,900 cfs', 'minimum flow the state must keep here from April to October'], ['5,600 cfs', 'minimum from November to March'], ['4,000+', 'water users were warned in June 2026 that they could be shut off'], ['4,610 cfs', 'the flow on 9 July 2026']],
    body: '<p>A cfs is one cubic foot of water per second. Water rights issued after the 1984 agreement are called trust water rights. They can be shut off if the river here drops below the minimum.</p><p>That has never happened. In 2026 Idaho Power said it would not press for a shutoff, and the governor asked the state water board to line up 5,900 AF of stored water to cover any shortfall.</p>',
    sources: [S.swan, S.swan26] });
  add({ id: 'hellscanyon', kind: 'hydro', name: 'Hells Canyon dams', short: 'Hells Canyon', lake: 'Hells Canyon Reservoir', lon: -116.76, lat: 45.13, tier: 1, zoom: .8,
    lede: 'Three Idaho Power dams in the deep canyon on the Oregon line: Brownlee, Oxbow and Hells Canyon. They are the company\'s largest source of hydropower.',
    stats: [['About 70%', 'of Idaho Power\'s hydropower comes from these three dams in a normal year'], ['About 30%', 'of all the energy the company generates'], ['17', 'hydropower projects Idaho Power runs on the Snake and its tributaries'], ['1959 to 1967', 'when the three dams were completed']],
    body: '<p>The dams have no fish ladders. Salmon and steelhead that once swam into southern Idaho cannot get past them.</p>' + btn('redfish', 'Idaho\'s salmon') + btn('swanfalls', 'Idaho Power\'s water rights upstream'),
    sources: [S.ip, S.wHells] });
  add({ id: 'lowersnake', kind: 'hydro', name: 'The four lower Snake River dams', short: 'Lower Snake dams', lon: -117.428, lat: 46.66, tier: 1,
    lede: 'Lower Granite Dam, here in Washington, is the last of four federal dams between Idaho and the Columbia River. Every salmon bound for Idaho has to pass all four, twice.',
    stats: [['3,000+ MW', 'combined generating capacity'], ['1962 to 1975', 'when the four dams began operating'], ['$10B to $31B', 'range of estimates to replace what the dams provide'], ['2 Mar 2026', 'a federal judge ordered more water spilled past the dams for fish']],
    body: '<p>The dams make power and let barges reach Lewiston. Some tribes and fishing and conservation groups have argued for removing them to recover salmon. Others want them kept for power, shipping and irrigation.</p><p>A 2023 agreement had paused the court fight. The federal government withdrew from it in June 2025, and the case resumed. The government has appealed the 2026 order. Only Congress can authorise removing a dam it authorised.</p>' + btn('lewiston', 'The port at Lewiston') + btn('redfish', 'The fish at the other end'),
    sources: [S.crs] });
  add({ id: 'redfish', kind: 'lake', kindLabel: 'Salmon lake', name: 'Redfish Lake and the sockeye', short: 'Redfish Lake', lake: 'Redfish Lake', lon: -114.931, lat: 44.12, tier: 1, zoom: .9,
    lede: 'Sockeye salmon born in this mountain lake swim to the Pacific and back, past eight dams each way. It is the only place Snake River sockeye still return to.',
    stats: [['1991', 'Snake River sockeye were listed as endangered'], ['About 46', 'wild fish a year returned on average, 2010 to 2019'], ['1,106', 'hatchery and wild sockeye reached Lower Granite Dam in 2025'], ['11', 'had been counted at Lower Granite Dam by 30 June 2026']],
    body: '<p>The counts include hatchery fish, raised to keep the run from dying out. Lower Granite is the last dam before Idaho.</p><p>The 2026 number is a mid-season count from a hot, dry year. No final count was found.</p>' + btn('lowersnake', 'The four lower Snake dams'),
    sources: [S.crs, S.cbb, S.odfw] });
  add({ id: 'curtail', kind: 'info', name: 'The 2026 shutoff order', short: '2026 shutoff order', lon: -112.345, lat: 43.19, tier: 2,
    lede: 'Idaho shares water by seniority: older rights are served first. In 2026 the state ordered wells on the Snake River Plain to stop pumping unless their owners had joined a plan to make up the water.',
    stats: [['14 May 2026', 'date of the order'], ['11 Oct 1900', 'well rights newer than this date were covered'], ['924', 'groundwater rights were on the first shutoff list'], ['741,100 AF', 'predicted shortage for older canal rights by July, up from 181,600 in April']],
    body: '<p>Wells and the river draw on the same water. Canal companies with rights from around 1900 asked the state in 2005 to protect them from newer wells. Each spring and July the state now estimates how short the canals will be.</p><p>Well owners in groundwater districts are protected if they keep to a 2024 agreement, which requires the districts to cut pumping by 205,000 AF a year. A similar order in May 2024 covered about 6,400 rights.</p>' + btn('espa', 'The aquifer') + btn('tfcc', 'The canal company at the front of the line'),
    sources: [S.call, S.julOrder, S.ein, S.plan24, S.curt24] });
  add({ id: 'tetondam', kind: 'info', name: 'Teton Dam site', short: 'Teton Dam', lon: -111.539, lat: 43.909, tier: 3,
    lede: 'A new federal dam here failed on 5 June 1976 as its reservoir filled for the first time.',
    stats: [['11', 'people died'], ['1M cfs', 'peak flow through the breach: one million cubic feet a second'], ['6 hours', 'or less for the reservoir to drain']],
    body: '<p>The flood hit Rexburg and other towns downstream. The dam was never rebuilt. The failure led the federal government to set up its dam safety program.</p>',
    sources: [S.teton] });

  // ----------------------------------------------------------------- reservoirs and lakes
  add({ id: 'americanfalls', kind: 'reservoir', name: 'American Falls Reservoir', short: 'American Falls', lake: 'American Falls Reservoir', lon: -112.74, lat: 42.925, tier: 1, zoom: .9,
    lede: 'The largest reservoir on the upper Snake River. Farms from here to Twin Falls depend on what it holds at the start of summer.',
    pct: 20, pctNote: '340,668 AF of 1,672,590 AF on 11 Nov 2026, refilling after the irrigation season',
    stats: [['3.3%', 'full at its 2026 low, on 13 September'], ['83%', 'full at its 2026 peak, on 6 April'], ['1927', 'the first dam was finished. It was replaced in 1978.', 1]],
    body: '<p>The reservoir did not fill in 2026. It was emptied almost completely by mid-September.</p>' + dryYear + btn('milner', 'Where the water is taken out'),
    sources: [S.hm, S.af] });
  add({ id: 'palisades', kind: 'reservoir', name: 'Palisades Reservoir', short: 'Palisades', lake: 'Palisades Reservoir', lon: -111.136, lat: 43.296, tier: 2,
    lede: 'A reservoir on the Snake River near the Wyoming line. It holds water over from wet years for use in dry ones.',
    pct: 14, pctNote: '165,873 AF of 1.2 million AF on 11 Nov 2026',
    stats: [['61%', 'full at its 2026 peak, on 8 April'], ['8%', 'full at its 2026 low, on 15 October'], ['650,000', 'acres of farmland get extra water from it, roughly'], ['1957', 'the dam was completed']],
    body: dryYear,
    sources: [S.hm, S.pal] });
  add({ id: 'jackson', kind: 'reservoir', name: 'Jackson Lake', lake: 'Jackson Lake', lon: -110.735, lat: 43.9, tier: 2,
    lede: 'A natural lake in Wyoming\'s Grand Teton National Park, raised by a dam. The water stored on top belongs to Idaho farms downstream.',
    pct: 10, pctNote: '83,008 AF of 847,000 AF of storage on 11 Nov 2026',
    stats: [['97%', 'full at its 2026 peak, on 19 May'], ['7.5%', 'full on 30 September 2026, its low for the year'], ['65%', 'full on the same November date a year earlier', 1]],
    body: '<p>The lake is part of the federal Minidoka Project, which runs five reservoirs on the upper Snake.</p>' + dryYear,
    sources: [S.hm, S.minProj] });
  add({ id: 'walcott', kind: 'reservoir', name: 'Lake Walcott and Minidoka Dam', short: 'Minidoka Dam', lake: 'Lake Walcott', lon: -113.398, lat: 42.679, tier: 2,
    lede: 'Minidoka Dam, finished in 1907, was the start of the federal Minidoka Project. Canals on both banks water the farms around Rupert and Burley.',
    stats: [['1907', 'the dam was completed'], ['1909 to 1910', 'a power plant was added to pump water to higher land'], ['95,200 AF', 'capacity of Lake Walcott'], ['12.5%', 'full at its 2026 low, on 10 October']],
    body: dryYear + btn('minicassia', 'The farms it waters'),
    sources: [S.minDam, S.minProj, S.hm] });
  add({ id: 'islandpark', kind: 'reservoir', name: 'Island Park Reservoir', short: 'Island Park', lake: 'Island Park Reservoir', lon: -111.485, lat: 44.408, tier: 2,
    lede: 'A reservoir on the Henrys Fork, a branch of the upper Snake. Some of the water it holds is owed to American Falls Reservoir downstream.',
    pct: 31, pctNote: '42,241 AF of 135,205 AF on 11 Nov 2026',
    stats: [['12%', 'full at its 2026 low, on 19 September'], ['42%', 'below average: water flowing in above the reservoir from April to September 2026'], ['2nd lowest', 'inflow for those months in 94 years of records']],
    body: dryYear,
    sources: [S.hm, S.hff] });
  add({ id: 'andersonranch', kind: 'reservoir', name: 'Anderson Ranch Reservoir', short: 'Anderson Ranch', lake: 'Anderson Ranch Reservoir', lon: -115.356, lat: 43.41, tier: 2,
    lede: 'The largest of three reservoirs on the Boise River system. The federal government and the state plan to raise its dam by six feet.',
    pct: 55, pctNote: '227,789 AF of 413,100 AF on 11 Nov 2026',
    stats: [['29,000 AF', 'of new storage the raise would add, roughly'], ['$149M', 'estimated cost'], ['2027', 'construction expected to begin'], ['90%', 'of the new space would go to non-federal users through the state water board']],
    body: btn('luckypeak', 'The other Boise River reservoirs') + btn('boise', 'Boise'),
    sources: [S.ard, S.hmBoise] });
  add({ id: 'luckypeak', kind: 'reservoir', name: 'Lucky Peak and Arrowrock', short: 'Lucky Peak', lake: 'Lucky Peak Lake', lon: -115.995, lat: 43.573, tier: 2,
    lede: 'Two reservoirs in the canyon just above Boise. With Anderson Ranch they store the Boise River\'s snowmelt for the Treasure Valley.',
    pct: 39, pctNote: 'The three Boise River reservoirs together: 372,701 AF of 949,700 AF on 11 Nov 2026',
    stats: [['98%', 'full: the three reservoirs at their 2026 peak, on 17 May'], ['36.5%', 'full at their 2026 low, on 8 October'], ['44%', 'of normal: the Boise basin snowpack on 1 April 2026', 1]],
    body: '<p>The reservoirs filled in 2026 despite the poor snowpack, then were drawn down through the summer.</p>' + btn('nycanal', 'Where the water goes next'),
    sources: [S.hmBoise, S.nrcs] });
  add({ id: 'cascade', kind: 'reservoir', name: 'Lake Cascade', short: 'Cascade', lake: 'Cascade Reservoir', lon: -116.098, lat: 44.629, tier: 1, zoom: .9,
    lede: 'The main reservoir on the Payette River. It stores water for farms in the valley around Emmett and Payette.',
    pct: 56, pctNote: '361,249 AF of 646,460 AF on 11 Nov 2026',
    stats: [['98%', 'full: the two Payette reservoirs at their 2026 peak, on 30 May'], ['54%', 'full at their 2026 low, on 4 October']],
    body: '<p>The other Payette reservoir is Deadwood, in the mountains to the east.</p>',
    sources: [S.hmBoise] });
  add({ id: 'lowell', kind: 'reservoir', name: 'Lake Lowell', lake: 'Lake Lowell', lon: -116.667, lat: 43.554, tier: 3,
    lede: 'A reservoir filled by a canal instead of a river. The New York Canal fills it with Boise River water for farms around Nampa and Caldwell.',
    stats: [['41 miles', 'length of the canal that fills it']],
    body: btn('nycanal', 'The New York Canal') + btn('treasurevalley', 'Treasure Valley farms'),
    sources: [S.wNyc] });
  add({ id: 'dworshak', kind: 'reservoir', name: 'Dworshak Reservoir', short: 'Dworshak', lake: 'Dworshak Reservoir', lon: -116.2, lat: 46.6, tier: 1, zoom: .8,
    lede: 'A deep federal reservoir on the North Fork of the Clearwater River. Water released from it in late summer helps salmon in the rivers downstream.',
    pct: 62, pctNote: '2.15 million AF of 3.47 million AF on 11 Nov 2026. It is drawn down every year.',
    stats: [['717 ft', 'height of the dam'], ['8 Jun 2026', 'the reservoir filled'], ['200,000 AF', 'set aside for fish flows under a 2004 agreement with the Nez Perce Tribe']],
    body: btn('nezperce', 'The Nez Perce agreement') + btn('lowersnake', 'The dams downstream'),
    sources: [S.hm, S.wDwor, S.np] });
  add({ id: 'bearlake', kind: 'lake', name: 'Bear Lake', lake: 'Bear Lake', lon: -111.335, lat: 42.1, tier: 2,
    lede: 'A natural lake on the Utah line that has been used as a reservoir for more than a century. Bear River water is sent in by canal and pumped back out for farms downstream.',
    stats: [['5,902 ft', 'the lake\'s record low level, in 1936']],
    body: '<p>The Bear River does not flow into the lake naturally. It starts in Utah, crosses Wyoming and Idaho, and ends in the Great Salt Lake. The three states share it under a compact.</p>',
    sources: [S.wBear] });
  add({ id: 'cdalake', kind: 'lake', name: 'Lake Coeur d\'Alene', lake: 'Coeur D\'Alene Lake', lon: -116.795, lat: 47.542, tier: 2,
    lede: 'A natural lake at the heart of the Coeur d\'Alene Tribe\'s homeland. A dam downstream on the Spokane River holds its level up in summer.',
    stats: [['5 Mar 2026', 'the tribe and the state announced a water rights settlement'], ['2008', 'the court case over water rights in north Idaho began'], ['10,000 AF', 'a year of future water rights for towns that the tribe agreed to protect']],
    body: btn('cdatribe', 'The Coeur d\'Alene Tribe'),
    sources: [S.cdaGov, S.cdaSpr] });
  add({ id: 'pendoreille', kind: 'lake', name: 'Lake Pend Oreille', short: 'Pend Oreille', lake: 'Lake Pend Oreille', lon: -116.42, lat: 48.162, tier: 2,
    lede: 'Idaho\'s largest lake, and one of the five deepest in the United States. The Clark Fork River flows in from Montana and the Pend Oreille River flows out toward Washington.',
    stats: [['1,152 ft', 'deep at its deepest']],
    body: '<p>North Idaho has far more water than the south and far less irrigated land. Its water questions are mostly about lake levels, fish and growth.</p>',
    sources: [S.wPend] });

  // ----------------------------------------------------------------- canals and recharge
  add({ id: 'tfcc', kind: 'canalco', name: 'Twin Falls Canal Company', short: 'Twin Falls canal', lon: -114.3, lat: 42.487, tier: 2,
    lede: 'A farmer-owned company that takes Snake River water at Milner Dam and spreads it across the south side of the Magic Valley. Its main water right is dated 11 October 1900, older than nearly every well on the plain.',
    stats: [['1/2 inch', 'per acre: deliveries after two cuts in spring 2026. The usual rate is 3/4 inch.'], ['33.3%', 'cut in normal deliveries, as the canal companies described it'], ['289,400 AF', 'the company\'s predicted shortage for 2026, in the state\'s July estimate'], ['550,000', 'acres served by the seven canal groups that brought the 2005 complaint, roughly']],
    body: '<p>Seniority protects the company from newer rights but cannot make water. Its manager said the only year like 2026 in his memory was 1992.</p>' + btn('milner', 'Milner Dam') + btn('curtail', 'The 2026 shutoff order'),
    sources: [S.kivi, S.swcJun, S.julOrder, S.call] });
  add({ id: 'nycanal', kind: 'canalco', name: 'New York Canal', lon: -116.36, lat: 43.487, tier: 3,
    lede: 'The main canal of the federal Boise Project. It leaves the Boise River at a small dam above the city and runs to Lake Lowell.',
    stats: [['41 miles', 'long'], ['22 Feb 1909', 'the canal opened']],
    body: '<p>Eastern investors started the canal in the 1880s, which is how it got its name. The federal government finished it.</p>' + btn('lowell', 'Lake Lowell') + btn('treasurevalley', 'Treasure Valley farms'),
    sources: [S.wNyc, S.osm] });
  add({ id: 'recharge', kind: 'recharge', kindLabel: 'Aquifer recharge', name: 'Putting water back underground', short: 'Aquifer recharge', lon: -114.2, lat: 42.76, tier: 2,
    lede: 'When there is river water to spare, the state works with canal companies to run it into unlined canals and basins on the lava plain. It soaks down into the aquifer.',
    stats: [['251,000 AF', 'a year recharged on average over the 10 years to January 2025'], ['2.8M AF', 'recharged by the state program from 2015 to March 2026'], ['133,000 AF', 'recharged in 2025'], ['350,000 AF', 'a year: the new goal set by the Legislature']],
    body: '<p>The marker sits on the Milner-Gooding Canal, which crosses the lava plain north of the river. The state estimates its program has added 1.5 million AF to what the aquifer holds. In a dry year there is little spare water to recharge.</p>' + btn('espa', 'The aquifer'),
    sources: [S.rech, S.asc, S.rech350] });

  // ----------------------------------------------------------------- cities
  add({ id: 'boise', kind: 'city', name: 'Boise', lon: -116.203, lat: 43.615, tier: 1, zoom: .8,
    lede: 'Idaho\'s largest city sits where the Boise River leaves the mountains. Most of its tap water comes from wells, and most of the river goes to farms and lawns through canals.',
    stats: [['81%', 'of public water supply in Ada County came from wells (2015)'], ['39%', 'full: the Boise River reservoirs on 11 Nov 2026'], ['July 2026', 'the city adopted a drought emergency ordinance']],
    body: '<p>The ordinance sets out steps the city can take if its drinking water supply runs short. It followed a winter the city described as having near record-low snowpack.</p>' + btn('luckypeak', 'The reservoirs above the city') + btn('andersonranch', 'A dam to be raised'),
    sources: [S.usgs, S.hmBoise, S.boiseOrd] });
  add({ id: 'twinfalls', kind: 'city', name: 'Twin Falls', lon: -114.461, lat: 42.563, tier: 2,
    lede: 'The main city of the Magic Valley. More than half of its homes water their lawns from the canals, not from the tap.',
    stats: [['Over half', 'of homes water their lawns with canal water'], ['Every other day', 'the city\'s lawn-watering schedule: odd or even dates, by house number']],
    body: '<p>The city holds most of the canal shares in its area, so cuts to canal deliveries in 2026 reached house lots as well as farms. By October 2026 Twin Falls County was in extreme to exceptional drought.</p>' + btn('tfcc', 'The canal company'),
    sources: [S.kivi, S.nws] });
  add({ id: 'idahofalls', kind: 'city', name: 'Idaho Falls', lon: -112.034, lat: 43.492, tier: 2,
    lede: 'The largest city of eastern Idaho. Like nearly every town on the Snake River Plain, it drinks from the aquifer under it.',
    stats: [['100%', 'of public water supply in Bonneville County came from wells (2015)'], ['400,000+', 'people between Hagerman and St. Anthony rely on the aquifer for drinking water']],
    body: '<p>City wells count as groundwater rights like any others. Cities on the plain have their own plan to make up for the water their wells take from the river.</p>' + btn('espa', 'The aquifer') + btn('curtail', 'The 2026 shutoff order'),
    sources: [S.usgs, S.bspr, S.curt24] });
  add({ id: 'coeurdalene', kind: 'town', name: 'Coeur d\'Alene', lon: -116.78, lat: 47.678, tier: 2,
    lede: 'A fast-growing lake city. Its water comes from the Rathdrum Prairie aquifer, which it shares with Spokane across the state line.',
    stats: [['99.8%', 'of public water supply in Kootenai County came from wells (2015)']],
    body: btn('rathdrum', 'The aquifer') + btn('cdalake', 'The lake'),
    sources: [S.usgs] });
  add({ id: 'lewiston', kind: 'town', name: 'Lewiston', lon: -117.017, lat: 46.417, tier: 2,
    lede: 'Idaho\'s lowest point and its only seaport. The Clearwater River meets the Snake here, and barges can travel from here to the Pacific.',
    stats: [['1975', 'barges first reached Lewiston, when the last of four downstream dams was finished'], ['2.5 to 3M tons', 'of wheat shipped on the Snake River a year']],
    body: '<p>The port exists because of the four lower Snake River dams. Whether to keep those dams is the largest water argument in northern Idaho.</p>' + btn('lowersnake', 'The four dams'),
    sources: [S.crs] });

  // ----------------------------------------------------------------- farms
  add({ id: 'magicvalley', kind: 'farm', name: 'Magic Valley farms', short: 'Magic Valley', lon: -114.52, lat: 42.74, tier: 1, zoom: .8,
    lede: 'Sagebrush desert until 1905, when canals from Milner Dam reached it. It now grows potatoes, sugar beets, corn and hay, and has many of Idaho\'s dairies.',
    stats: [['17.1M AF', 'a year taken from rivers and wells for irrigation statewide (2015)'], ['86%', 'of all the water withdrawn in Idaho'], ['3.8M', 'irrigated acres in Idaho'], ['2/3', 'of those acres are watered by sprinkler; the rest mostly by flooding']],
    body: '<p>Twin Falls County took more irrigation water than any other Idaho county in 2015. Much of the water spread on fields here is not used up. It seeps down to the aquifer or drains back to the river.</p>' + btn('milner', 'Where the water comes from') + btn('dairy', 'The dairies'),
    sources: [S.usgs, S.tfcc] });
  add({ id: 'dairy', kind: 'dairy', name: 'Magic Valley dairies', short: 'Dairies', lon: -114.71, lat: 42.94, tier: 2,
    lede: 'Idaho is the third-largest milk producer in the United States. Many of its dairies are on the irrigated land around Jerome, Gooding and Twin Falls.',
    stats: [['663,000', 'dairy cows in Idaho (2023)'], ['7.4%', 'of US milk'], ['1.39M', 'acres of hay harvested in Idaho (2023)'], ['No. 1', 'Idaho\'s rank among states for alfalfa hay']],
    body: '<p>The cows drink little of the state\'s water. The irrigated hay and corn grown to feed them use far more.</p>',
    sources: [S.isda] });
  add({ id: 'uppervalley', kind: 'farm', name: 'Upper Snake River Valley farms', short: 'Upper valley farms', lon: -111.9, lat: 43.74, tier: 1, zoom: .8,
    lede: 'Potato, grain and hay country between Idaho Falls and Ashton. Some farms here take river water through canals. Others pump from the aquifer.',
    stats: [['32.6%', 'of US potatoes are grown in Idaho, more than any other state (2023)'], ['329,500', 'acres of potatoes harvested in Idaho (2023)'], ['32.5%', 'of US barley, also first']],
    body: '<p>The round fields are center-pivot sprinklers. For a century, water leaking from canals and flooded fields here refilled the aquifer. Sprinklers leak less, which is one reason the aquifer has fallen.</p>' + btn('espa', 'The aquifer') + btn('palisades', 'Palisades Reservoir'),
    sources: [S.isda, S.ein] });
  add({ id: 'minicassia', kind: 'farm', name: 'Minidoka and Cassia county farms', short: 'Burley and Rupert', lon: -113.68, lat: 42.6, tier: 2,
    lede: 'Farms around Burley and Rupert, first watered by the federal Minidoka Project in 1907. Sugar beets are a main crop.',
    stats: [['19.8%', 'of US sugar beets are grown in Idaho, second among states (2023)'], ['174,000', 'acres of sugar beets harvested in Idaho (2023)'], ['48,000', 'acres on high ground here that are reached by pumping from the river']],
    body: btn('walcott', 'Minidoka Dam'),
    sources: [S.isda, S.minDam] });
  add({ id: 'treasurevalley', kind: 'farm', name: 'Treasure Valley farms', short: 'Treasure Valley', lon: -116.72, lat: 43.68, tier: 2,
    lede: 'Farms west of Boise watered by the Boise and Payette rivers. Subdivisions are spreading across the same land.',
    stats: [['171,000', 'irrigated acres in Canyon County (2015)'], ['1.03M AF', 'a year withdrawn for irrigation in Canyon County (2015)']],
    body: '<p>When a field here becomes houses, its canal water often keeps flowing, to lawns instead of crops.</p>' + btn('nycanal', 'The New York Canal') + btn('lowell', 'Lake Lowell'),
    sources: [S.usgs] });
  add({ id: 'palouse', kind: 'farm', name: 'Palouse and Camas Prairie wheat', short: 'Dryland wheat', lon: -116.75, lat: 46.25, tier: 2,
    lede: 'The cropland of north-central Idaho is mostly wheat grown on rain and snow, without irrigation.',
    body: '<p>The map shows cropland wherever satellites see it, irrigated or not. In southern Idaho nearly all of it is irrigated. Here very little is.</p><p>Turn on the Rainfall layer to see the difference between this country and the Snake River Plain.</p>',
    sources: [S.lc] });

  // ----------------------------------------------------------------- groundwater
  add({ id: 'espa', kind: 'well', name: 'Eastern Snake Plain Aquifer', short: 'Snake Plain aquifer', lon: -113.35, lat: 43.3, tier: 1, zoom: .6,
    lede: 'A huge body of groundwater in the lava rock under southern Idaho. It supplies wells for about a million acres of farmland and feeds the Snake River through springs.',
    stats: [['600,000 AF', 'lost from the aquifer between spring 2025 and spring 2026'], ['100,000 AF', 'net loss since 2015'], ['10,800 sq mi', 'area managed as one shared water supply'], ['2.8M AF', 'more water in the aquifer than there would be without recharge and pumping cuts since 2015, by the state\'s estimate']],
    body: '<p>Early canals leaked so much that the aquifer rose for decades. It peaked in the early 1950s. Then farms switched to sprinklers, more wells were drilled, and it began to fall.</p><p>A 2015 settlement between canal companies and well owners called for pumping cuts of 240,000 AF a year. A 2024 agreement replaced it with a 205,000 AF requirement. State hydrologists say the aquifer leaks to the river, so gains do not last without continued effort.</p>' + btn('curtail', 'The 2026 shutoff order') + btn('recharge', 'Putting water back') + btn('thousandsprings', 'Where it drains'),
    sources: [S.espa26, S.asc, S.ein, S.faq24, S.plan24, S.bspr, S.call] });
  add({ id: 'biglost', kind: 'well', name: 'Big Lost River valley', short: 'Big Lost River', lon: -113.3, lat: 43.67, tier: 3,
    lede: 'The Big Lost River never reaches the Snake. It sinks into the lava plain and joins the aquifer. In late 2025 wells in this valley were ordered shut off.',
    stats: [['21 Nov 2025', 'a shutoff order for wells here took effect'], ['17 Apr 2026', 'the order was lifted'], ['1 May 2026', 'well owners here were accepted into the 2024 Snake River Plain agreement']],
    body: btn('curtail', 'The 2026 shutoff order'),
    sources: [S.ein] });
  add({ id: 'mountainhome', kind: 'well', name: 'Mountain Home plateau', short: 'Mountain Home', lon: -115.69, lat: 43.13, tier: 2,
    lede: 'A dry plateau southeast of Boise where wells have drawn the water table down. The state limits new wells here.',
    stats: [['436,906', 'acres in the Mountain Home groundwater management area'], ['82,287', 'acres in the Cinder Cone Butte critical area inside it']],
    body: '<p>Turn on the Groundwater layer to see the two areas. Idaho has eight critical groundwater areas and about a dozen management areas.</p>',
    sources: [S.gis] });
  add({ id: 'raftriver', kind: 'well', name: 'Raft River valley', short: 'Raft River', lon: -113.37, lat: 42.3, tier: 3,
    lede: 'The largest of Idaho\'s critical groundwater areas, on the Utah line. Farms here depend on wells.',
    stats: [['531,716', 'acres in the critical area']],
    body: '<p>In a critical groundwater area the state has found there is not enough groundwater for the rights already issued.</p>',
    sources: [S.gis] });
  add({ id: 'rathdrum', kind: 'well', name: 'Rathdrum Prairie aquifer', short: 'Rathdrum aquifer', lon: -116.93, lat: 47.83, tier: 1, zoom: .9,
    lede: 'Gravel left by Ice Age floods holds the only drinking water source for Coeur d\'Alene, Post Falls and Spokane. The water flows underground from Idaho into Washington.',
    stats: [['500,000+', 'people in two states rely on it for drinking water'], ['370 sq mi', 'area of the aquifer in Idaho and Washington'], ['1,470 cfs', 'average flow of water into and out of the aquifer: about 1.06 million AF a year']],
    body: '<p>Lakes and streams around the edge of the prairie leak into the gravel. The water comes back out in the Spokane River. What one state pumps affects the river in the other.</p>' + btn('coeurdalene', 'Coeur d\'Alene'),
    sources: [S.svrp] });

  // ----------------------------------------------------------------- industry
  add({ id: 'trout', kind: 'fish', name: 'Trout farms', lon: -114.76, lat: 42.6, tier: 2,
    lede: 'Idaho raises more trout than any other state. The farms run spring water through long concrete channels and return it to the Snake River.',
    stats: [['11%', 'of all water withdrawn in Idaho goes through fish farms and hatcheries (2015)'], ['2.2M AF', 'a year'], ['36.9%', 'of US trout production (2023)'], ['About 80', 'fish farms in the Magic Valley']],
    body: '<p>This is why Idaho\'s water figures look unusual. Almost none of the fish-farm water is used up. It is borrowed from the springs for a few hundred yards and flows on.</p><p>About 98% of Idaho\'s production is in Twin Falls, Gooding and Jerome counties. The first commercial trout farm opened near Twin Falls in 1909.</p>' + btn('thousandsprings', 'Thousand Springs'),
    sources: [S.usgs, S.isda, S.uiAqua] });
  add({ id: 'cloud', kind: 'cloud', name: 'Cloud seeding', lon: -115.45, lat: 44.2, tier: 3,
    lede: 'Idaho Power and the state release silver iodide into winter storms over these mountains to make them drop more snow.',
    stats: [['About 12%', 'more snowpack in the Payette basin on average, by Idaho Power\'s analysis'], ['2003', 'the program began'], ['32', 'remote-controlled generators in the central mountains (2024)'], ['2', 'aircraft']],
    body: '<p>More snow means more water through Idaho Power\'s dams. The program now also covers the Boise and Wood river basins and the upper Snake.</p>',
    sources: [S.ipCloud, S.cloud] });

  // ----------------------------------------------------------------- tribes
  add({ id: 'forthall', kind: 'tribe', name: 'Shoshone-Bannock Tribes', short: 'Fort Hall', lon: -112.43, lat: 43.03, tier: 2,
    lede: 'The Fort Hall Reservation lies along the Snake River above American Falls. In 1990 the tribes settled their water claims, the first such agreement in Idaho.',
    stats: [['581,031 AF', 'a year of surface water and groundwater confirmed to the tribes'], ['5 years', 'of negotiation']],
    body: '<p>The reservation was set aside by treaty in 1868, so its water rights are older than nearly all others on the upper Snake. The Fort Hall Main Canal on the map carries part of that water.</p>',
    sources: [S.fh, S.pal] });
  add({ id: 'nezperce', kind: 'tribe', name: 'Nez Perce Tribe', short: 'Lapwai', lon: -116.805, lat: 46.405, tier: 2,
    lede: 'The Nez Perce claimed water rights across the Snake River basin to protect salmon promised by treaty. A 2004 agreement settled those claims.',
    stats: [['50,000 AF', 'a year for the tribe\'s own use, mostly from the Clearwater River'], ['200,000 AF', 'in Dworshak Reservoir managed for fish'], ['$50M', 'trust fund for water and fisheries'], ['$23M', 'for water and sewer systems']],
    body: '<p>Under the agreement the state water board holds minimum-flow rights on streams important to the tribe in the Salmon and Clearwater basins.</p>' + btn('dworshak', 'Dworshak Reservoir') + btn('redfish', 'The salmon'),
    sources: [S.np] });
  add({ id: 'cdatribe', kind: 'tribe', name: 'Coeur d\'Alene Tribe', short: 'Plummer', lon: -116.888, lat: 47.335, tier: 2,
    lede: 'The tribe\'s reservation covers the southern end of Lake Coeur d\'Alene. In March 2026 it signed a water rights settlement with the state.',
    stats: [['5 Mar 2026', 'settlement announced'], ['10,000 AF', 'a year of future state water rights the tribe agreed to protect, on top of existing ones']],
    body: '<p>The agreement still needs approval from the Idaho Legislature and Congress. More than a dozen other parties signed it.</p>' + btn('cdalake', 'The lake'),
    sources: [S.cdaGov, S.cdaSpr] });

  // ----------------------------------------------------------------- lines and areas
  const riverStyle = {
    Snake: { w: 4.6, reaches: [
      { test: (lon, lat) => lon > -114.72 && lon < -114.02 && lat < 42.75, w: 1.3 },     // below Milner Dam: most of the river is in the canals
      { test: lon => lon > -111.3, w: 2.8 }, { test: lon => lon > -114.02, w: 3.8 }] }, Clearwater: { w: 3.2 }, Salmon: { w: 3.4 }, 'Pend Orielle': { w: 3.6 }, 'Clark Fork': { w: 3.4 }, Kootenay: { w: 3 },
    Boise: { w: 2.2 }, Payette: { w: 2.4 }, 'North Fork Payette': { w: 1.6 }, 'Henrys Fork': { w: 2.4 }, Bear: { w: 1.9 }, Spokane: { w: 2.4 },
    'Saint Joe': { w: 1.8 }, 'Coeur d\'Alene': { w: 1.7 }, 'Big Wood': { w: 1.5 }, 'Big Lost': { w: 1.4, reaches: [{ test: lon => lon > -113.15, dry: true }] },
    Owyhee: { w: 1.7 }, Bruneau: { w: 1.4 }, Weiser: { w: 1.4 }, Teton: { w: 1.5 }, Portneuf: { w: 1.4 }, Blackfoot: { w: 1.3 },
    'Middle Fk.  Salmon': { w: 2 }, Lochsa: { w: 1.8 }, Selway: { w: 2 }, 'North Fork Clearwater': { w: 2 }, 'S.  Fk.  Boise': { w: 1.5 },
    'South Fork Payette': { w: 1.5 }, 'South Fork Salmon': { w: 1.5 }, 'South Fork Clearwater': { w: 1.4 }, 'Salmon Falls Creek': { w: 1.1 }, 'Little Wood': { w: 1.1 },
  };
  // Natural Earth files the Snake's main stem under the name of the river system it belongs to, "Columbia".
  // Inside this map's frame every such line is the Snake (the Columbia itself only clips the far northwest corner, in Canada).
  riverStyle.Columbia = riverStyle.Snake;
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const rivers = {
    Snake: rv('The Snake crosses the whole of southern Idaho in a long arc, then turns north through Hells Canyon. Nearly all of the state\'s irrigated land and most of its people are along it.',
      [['8%', 'full: the reservoirs on the upper river at their 2026 low, on 8 October'], ['3,900 cfs', 'summer minimum flow the state must keep at Swan Falls'], ['741,100 AF', 'predicted 2026 shortage for the oldest canal rights']],
      '<p>The line thins below Milner Dam, where the canals have taken the river. Springs rebuild it over the next 60 miles.</p>' + btn('milner', 'Milner Dam') + btn('thousandsprings', 'Thousand Springs') + btn('hellscanyon', 'Hells Canyon'), [S.hm, S.swan, S.julOrder]),
    Salmon: rv('The Salmon runs 425 miles through central Idaho without a dam, the longest undammed river in the lower 48 states. It was called the River of No Return.',
      [['0', 'reservoirs in the Salmon basin'], ['72%', 'of normal: the basin\'s snowpack on 1 May 2026']], btn('redfish', 'The sockeye that swim up it'), [S.wSalmon, ['NRCS Idaho Water Supply Outlook, 1 May 2026', 'https://nrcs-prod.azureedge.us/sites/default/files/2026-05/borid0526_0.pdf']]),
    Clearwater: rv('The Clearwater drains the wet mountains of north-central Idaho and meets the Snake at Lewiston.',
      [['50,000 AF', 'a year confirmed to the Nez Perce Tribe, mostly from this river']], btn('nezperce', 'The Nez Perce Tribe') + btn('dworshak', 'Dworshak Reservoir'), [S.np]),
    'North Fork Clearwater': rv('The North Fork of the Clearwater is dammed at Dworshak, one of the tallest dams in the United States.', [['717 ft', 'height of Dworshak Dam']], btn('dworshak', 'Dworshak Reservoir'), [S.wDwor]),
    Boise: rv('The Boise River carries snowmelt from three mountain reservoirs through the state capital to the Snake.',
      [['949,700 AF', 'combined capacity of the three reservoirs'], ['44%', 'of normal: the basin\'s snowpack on 1 April 2026']], btn('luckypeak', 'The reservoirs') + btn('boise', 'Boise') + btn('nycanal', 'The New York Canal'), [S.hmBoise, S.nrcs]),
    Payette: rv('The Payette River waters the orchards and farms around Emmett and Payette. Idaho Power seeds clouds over its headwaters.',
      [['800,452 AF', 'combined capacity of its two reservoirs']], btn('cascade', 'Lake Cascade') + btn('cloud', 'Cloud seeding'), [S.hmBoise]),
    'North Fork Payette': rv('The North Fork of the Payette flows out of Payette Lake at McCall and through Lake Cascade.', [], btn('cascade', 'Lake Cascade'), [S.hmBoise]),
    'Henrys Fork': rv('A spring-fed branch of the Snake that rises near Yellowstone. In 2026 its natural flow was the lowest in the modern record.',
      [['28%', 'below average: natural flow for the water year, to September 2026']], btn('islandpark', 'Island Park Reservoir'), [S.hff]),
    Teton: rv('The Teton River joins the Henrys Fork near Rexburg. A federal dam on it failed in 1976.', [], btn('tetondam', 'Teton Dam'), [S.teton]),
    Bear: rv('The Bear River loops through Utah, Wyoming and Idaho and ends in the Great Salt Lake. It is Idaho\'s only large river that does not reach the Pacific.', [], btn('bearlake', 'Bear Lake'), [S.wBear]),
    'Big Lost': rv('The Big Lost River sinks into the lava plain near Arco and never reaches the Snake. Its water joins the aquifer.', [], btn('biglost', 'Big Lost River valley') + btn('espa', 'The aquifer'), [S.ein]),
    'Big Wood': rv('The river of Sun Valley and Hailey. Its lower valley is one of the state\'s groundwater management areas.', [], '', [S.gis]),
    Spokane: rv('The Spokane River flows out of Lake Coeur d\'Alene into Washington. It trades water back and forth with the aquifer under it.', [], btn('rathdrum', 'The Rathdrum Prairie aquifer') + btn('cdalake', 'Lake Coeur d\'Alene'), [S.svrp]),
    'Pend Orielle': rv('The Pend Oreille River carries the outflow of Idaho\'s largest lake west into Washington.', [], btn('pendoreille', 'Lake Pend Oreille'), [S.wPend]),
    'Clark Fork': rv('The Clark Fork brings Montana\'s western rivers into Lake Pend Oreille.', [], btn('pendoreille', 'Lake Pend Oreille'), [S.wPend]),
    Portneuf: rv('The Portneuf River runs through Pocatello and the Fort Hall Reservation to American Falls Reservoir.', [], btn('forthall', 'The Shoshone-Bannock Tribes'), [S.fh]),
    Owyhee: rv('The Owyhee crosses Idaho\'s empty southwest corner on its way to Oregon. By October 2026 this area was in exceptional drought.', [], '', [S.nws]),
    _default: rv('One of the streams that carry Idaho\'s mountain snow down to the Snake and Columbia rivers.', [], '', [S.nrcs]),
  };
  rivers.Columbia = rivers.Snake;
  const canals = {
    'Twin Falls Main Canal': { lede: 'The canal that turned the south side of the Magic Valley into farmland. It takes Snake River water at Milner Dam.',
      stats: [['1905', 'water first ran'], ['1/2 inch', 'per acre: deliveries after two cuts in spring 2026. The usual rate is 3/4 inch.']], body: btn('tfcc', 'The canal company') + btn('milner', 'Milner Dam'), sources: [S.tfcc, S.kivi, S.osm] },
    'North Side Main Canal': { lede: 'The main canal of the North Side Canal Company. It leaves Milner Dam on the north bank and waters the land around Jerome.',
      body: '<p>Only the first part of the canal is drawn. The company was one of those the state predicted would be short of water in 2026.</p>' + btn('milner', 'Milner Dam'), sources: [S.julOrder, S.osm] },
    'Milner-Gooding Canal': { lede: 'A 70-mile federal canal that carries Snake River water north and west from Milner Dam to farms near Shoshone and Gooding. Construction began in 1928.',
      body: '<p>It crosses bare lava on the way.</p>' + btn('recharge', 'Aquifer recharge'), sources: [S.minProj, S.rech, S.osm] },
    'New York Canal': { lede: 'The main canal of the federal Boise Project, from the Boise River to Lake Lowell.', stats: [['41 miles', 'long'], ['22 Feb 1909', 'the canal opened']], body: btn('nycanal', 'More on the canal'), sources: [S.wNyc, S.osm] },
    'Fort Hall Main Canal': { lede: 'The main canal of the Fort Hall irrigation project on the Shoshone-Bannock reservation.', body: btn('forthall', 'The Shoshone-Bannock Tribes'), sources: [S.fh, S.osm] },
    'Reservation Canal': { lede: 'A canal that brings Snake River water to the Fort Hall Reservation.', body: btn('forthall', 'The Shoshone-Bannock Tribes'), sources: [S.fh, S.osm] },
    'Main South Side Canal': { lede: 'A canal of the Minidoka Project. Water is pumped up to it from the Snake River to reach high ground south of Burley.', body: btn('walcott', 'Minidoka Dam'), sources: [S.minDam, S.osm] },
    'Bear Lake Outlet Canal': { lede: 'The canal that carries water pumped out of Bear Lake back to the Bear River.', body: btn('bearlake', 'Bear Lake'), sources: [S.wBear, S.osm] },
    'Deer Flat Low Line Canal': { lede: 'A canal of the federal Boise Project near Lake Lowell.', body: btn('lowell', 'Lake Lowell'), sources: [S.osm] },
    _default: { lede: 'An irrigation canal that carries river water to farm fields.', body: '<p>Idaho has thousands of miles of canals. Only some of the larger ones are drawn. Most are owned by the farmers they serve, through canal companies and irrigation districts.</p>', sources: [S.osm] },
  };
  const CG = new Set(['Cinder Cone Butte', 'Blue Gulch', 'Raft River', 'West Oakley Fan', 'Curlew Valley', 'Artesian City', 'Oakley Kenyon', 'Cottonwood']);
  const cgBase = '<p>In a critical groundwater area the state has found there is not enough groundwater for the rights already issued. The state can refuse new wells and can order the newest rights to stop pumping.</p>';
  const gmBase = '<p>A groundwater management area is one the state judges may be approaching that condition. New well applications get closer review, and the state can require a management plan.</p>';
  const acres = n => [[n, 'acres in the area']];
  const amas = {
    'Eastern Snake Plain Aquifer': { lede: 'The area the state manages as a single shared supply of groundwater. Wells anywhere inside it are treated as drawing on the same water as the Snake River.',
      stats: [['10,800 sq mi', 'area'], ['600,000 AF', 'lost from the aquifer between spring 2025 and spring 2026'], ['205,000 AF', 'a year groundwater districts must save under the 2024 agreement']],
      body: btn('espa', 'More on the aquifer') + btn('curtail', 'The 2026 shutoff order'), sources: [S.espa26, S.ein, S.plan24, S.gis] },
    'Rathdrum Prairie Aquifer': { lede: 'The Idaho part of an aquifer shared with Spokane, Washington. It is also a state groundwater management area.',
      stats: [['500,000+', 'people in two states rely on it for drinking water']], body: btn('rathdrum', 'More on the aquifer'), sources: [S.svrp, S.gis] },
    'Raft River': { lede: 'The largest critical groundwater area in Idaho.', stats: acres('531,716'), body: cgBase + btn('raftriver', 'Raft River valley'), sources: [S.gis] },
    'Cinder Cone Butte': { lede: 'A critical groundwater area on the Mountain Home plateau.', stats: acres('82,287'), body: cgBase + btn('mountainhome', 'Mountain Home plateau'), sources: [S.gis] },
    'Mountain Home Area': { lede: 'A groundwater management area on the dry plateau southeast of Boise.', stats: acres('436,906'), body: gmBase + btn('mountainhome', 'Mountain Home plateau'), sources: [S.gis] },
    'Curlew Valley': { lede: 'A critical groundwater area on the Utah line.', stats: acres('240,227'), body: cgBase, sources: [S.gis] },
    'Blue Gulch': { lede: 'A critical groundwater area southwest of Twin Falls.', stats: acres('187,658'), body: cgBase, sources: [S.gis] },
    'Oakley Kenyon': { lede: 'A critical groundwater area south of Burley.', stats: acres('135,682'), body: cgBase, sources: [S.gis] },
    'Bear River Area': { lede: 'A groundwater management area covering Idaho\'s part of the Bear River basin.', stats: acres('1,392,979'), body: gmBase + btn('bearlake', 'Bear Lake'), sources: [S.gis] },
    'Big Wood River Area': { lede: 'A groundwater management area covering the Big Wood River valley, from Sun Valley down to the Snake River Plain.', stats: acres('1,073,377'), body: gmBase, sources: [S.gis] },
    'Bruneau-Grandview': { lede: 'A groundwater management area along the Snake River in Owyhee County.', stats: acres('408,134'), body: gmBase, sources: [S.gis] },
    'Malad Valley Area': { lede: 'A groundwater management area on the Utah line.', stats: acres('322,796'), body: gmBase, sources: [S.gis] },
    'Twin Falls Area': { lede: 'A groundwater management area south of Twin Falls.', stats: acres('198,289'), body: gmBase, sources: [S.gis] },
    _cgwa: { lede: 'One of Idaho\'s eight critical groundwater areas.', body: cgBase, sources: [S.gis] },
    _gwma: { lede: 'One of Idaho\'s groundwater management areas.', body: gmBase, sources: [S.gis] },
    _default: { lede: 'A groundwater area with special state rules.', body: gmBase, sources: [S.gis] },
  };
  const tribes = {
    'Fort Hall': { lede: 'The Fort Hall Reservation of the Shoshone-Bannock Tribes. A 1990 agreement confirmed the tribes\' water rights.', stats: [['581,031 AF', 'a year of surface water and groundwater']], body: btn('forthall', 'The Shoshone-Bannock Tribes'), sources: [S.fh] },
    'Nez Perce': { lede: 'The Nez Perce Reservation. The tribe settled its water claims across the Snake River basin in 2004.', stats: [['50,000 AF', 'a year for the tribe\'s own use']], body: btn('nezperce', 'The Nez Perce Tribe'), sources: [S.np] },
    'Coeur d\'Alene': { lede: 'The Coeur d\'Alene Reservation, which includes the southern end of Lake Coeur d\'Alene. The tribe and the state announced a water rights settlement in March 2026.', body: btn('cdatribe', 'The Coeur d\'Alene Tribe'), sources: [S.cdaGov] },
    'Duck Valley': { lede: 'The Duck Valley Reservation of the Shoshone-Paiute Tribes straddles the Idaho-Nevada line on the upper Owyhee River.', body: '<p>By October 2026 this corner of Idaho was in exceptional drought, the most severe category.</p>', sources: [S.nws] },
    _default: { lede: 'This reservation lies outside Idaho.', sources: [['Tribal lands: US Census Bureau', 'https://tigerweb.geo.census.gov/']] },
  };

  window.MAPCONTENT = {
    meta: { title: 'Idaho Water: an explorable map', h1: 'Idaho Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of Idaho's water system. Use the lists in the side panel to browse the same information without the map.", home: 'Show all of Idaho' },
    features: F, riverStyle, rivers, canals, amas, tribes,
    kinds: {
      spring: ['rivers', 'spring', 'Springs'], lake: ['reservoirs', 'lake', 'Natural lake'], tribe: ['cities', 'tribe', 'Tribal nation'],
      fish: ['industry', 'fish', 'Fish farms'], cloud: ['industry', 'cloud', 'Cloud seeding'], well: ['ground', 'well', 'Groundwater'],
      farm: ['farms', 'farm', 'Farming region'], dairy: ['farms', 'dairy', 'Dairies'], canalco: ['canals', 'canal', 'Canal system'],
    },
    sprites: {
      lake: ['..bbbbbb..', '.bBbbbbBb.', 'bbbbBbbbbb', '.bbBbbbbb.', '..bbbbbb..'],
      spring: ['.TTTTTTTTTT.', 'TTdTTTTTdTTT', 'TTTkbbkTTTTT', 'TdTkbBkTTdTT', '...bbbb.....', '..bBbbbb....', '.bbbbBbbb...'],
      fish: ['..........k...', '..kkkkk..kb...', '.kBbbbbkkbb...', 'kbkbbBbbbbb...', '.kbbbbbkkbb...', '..kkkkk..kb...', '..........k...'],
      cloud: ['..GGGG....', '.GGGGGGG..', 'GGGGGGGGG.', '.GGGGGGG..', '.w..w..w..', '..w..w..w.', '.w..w..w..'],
    },
    layers: { industry: { label: 'Fish farms & industry', icon: 'fish' } },
    majorCanals: ['main'], canalWidths: { main: 2.4 }, canalSub: { main: 'Main canal' },
    riverNames: { Columbia: 'Snake River', 'Middle Fk.  Salmon': 'Middle Fork Salmon River', 'S.  Fk.  Boise': 'South Fork Boise River', 'Pend Orielle': 'Pend Oreille River', Kootenay: 'Kootenai River',
      'Saint Joe': 'St. Joe River', 'Saint Maries': 'St. Maries River', 'Middle Fk.  Clearwater': 'Middle Fork Clearwater River', 'S.  Fk.  Flathead': 'South Fork Flathead River',
      'Middle Fk.  Flathead': 'Middle Fork Flathead River', Falls: 'Fall River', 'Bear Lake Outlet': 'Bear Lake Outlet', 'S.  Fk.  Payette': 'South Fork Payette River' },
    areaKind: n => n === 'Eastern Snake Plain Aquifer' ? 'Shared groundwater supply' : n === 'Rathdrum Prairie Aquifer' ? 'Aquifer' : CG.has(n) ? 'Critical groundwater area' : 'Groundwater management area',
    areaAlt: n => n === 'Eastern Snake Plain Aquifer' || n === 'Rathdrum Prairie Aquifer',
    areaLabels: { 'Eastern Snake Plain Aquifer': { at: [-113.2, 43.78], minZ: .15 }, 'Rathdrum Prairie Aquifer': { at: [-116.72, 47.97], minZ: .7 }, 'Banbury Hot Springs': { minZ: 1.2 }, 'Southeast Boise': { minZ: 1.2 }, 'Boise Front': { minZ: .9 },
      'Artesian City': { minZ: .9 }, 'West Oakley Fan': { minZ: .9 }, 'Cottonwood': { minZ: .9 }, 'Lewiston Plateau': { minZ: .6 }, 'Oakley Kenyon': { minZ: .6 }, 'Cinder Cone Butte': { minZ: .6 }, 'Blue Gulch': { minZ: .45 },
      'Twin Falls Area': { minZ: .45 }, 'Curlew Valley': { minZ: .45 }, 'Malad Valley Area': { minZ: .45 }, 'Raft River': { minZ: .3 }, 'Mountain Home Area': { minZ: .3 }, 'Bruneau-Grandview': { minZ: .3 }, 'Big Wood River Area': { minZ: .3 }, 'Bear River Area': { minZ: .3 } },
    fieldSub: 'Farm fields', farmRadiusKm: 55,
    hud: [['19.9M AF', 'water withdrawn per year (2015)'], ['2.0M', 'people'], ['8%', 'full: upper Snake reservoirs, 8 Oct 2026']],
    budget: {
      title: 'Idaho withdraws about 19.9 million acre-feet a year',
      lede: 'Only California takes more water out of its rivers and wells than Idaho among the western states. Nearly all of it is for irrigation, and most of it comes from one river system, the Snake.',
      perDrop: 250000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons.',
      sources: [
        { id: 'surface', label: 'Rivers, streams and springs', pct: 70, af: 13.87e6, color: 'var(--c-colorado)', layer: 'rivers,reservoirs,canals', feat: 'milner', note: 'Snowmelt, stored in reservoirs and carried to fields by canals. This also counts spring water run through fish farms.' },
        { id: 'ground', label: 'Groundwater', pct: 30, af: 6.0e6, color: 'var(--c-ground)', layer: 'ground', feat: 'espa', note: 'Pumped from wells, mostly on the Snake River Plain.' },
      ],
      uses: [
        { id: 'ag', label: 'Irrigation', pct: 86, af: 17.13e6, color: 'var(--c-ag)', layer: 'farms', feat: 'magicvalley', note: 'Potatoes, hay, grain, sugar beets and corn on 3.8 million irrigated acres.' },
        { id: 'fish', label: 'Fish farms', pct: 11, af: 2.2e6, color: 'var(--c-colorado)', layer: 'industry', feat: 'trout', note: 'Spring water run through trout farms and hatcheries and returned to the river. Almost none is used up.' },
        { id: 'muni', label: 'Cities & towns', pct: 1.6, af: 0.31e6, color: 'var(--c-muni)', layer: 'cities', feat: 'boise', note: 'Public water systems. About 90% of this water comes from wells.' },
        { id: 'other', label: 'Everything else', pct: 1.1, af: 0.228e6, color: 'var(--c-ind)', layer: 'industry', feat: 'trout', note: 'Household wells, factories, livestock, mining and power plants with their own supply.' },
      ],
      body: `<div class="note">These figures count water <b>withdrawn</b>: taken out of a river, spring or well. They are US Geological Survey figures for 2015. Idaho's water agency does not publish a statewide total.</div>
        <div class="note">Much of this water is not used up. It soaks into the ground or drains back to a river and is taken out again downstream. The Geological Survey estimated that irrigated crops <b>consumed</b> about 10 million AF of the 17.1 million withdrawn for them.</div>
        <div class="note hot"><b>What is changing:</b> Winter 2025–26 brought very likely the lowest April 1 snowpack since measurements began in the 1930s. The reservoirs on the upper Snake River fell to 8% full in October 2026, and the aquifer under the Snake River Plain lost 600,000 AF in a year. <button class="btn" data-feat="americanfalls" style="margin-top:6px">See the reservoirs</button></div>`,
    },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a reservoir, a canal, a field, a river, or open land.',
    browse: [
      ['Snow, rivers and rules', ['snow', 'milner', 'thousandsprings', 'curtail', 'swanfalls', 'hellscanyon', 'lowersnake', 'redfish', 'tetondam']],
      ['Reservoirs and lakes', ['americanfalls', 'palisades', 'jackson', 'walcott', 'islandpark', 'andersonranch', 'luckypeak', 'cascade', 'lowell', 'dworshak', 'bearlake', 'cdalake', 'pendoreille']],
      ['Canals and recharge', ['tfcc', 'nycanal', 'recharge']],
      ['Cities', ['boise', 'twinfalls', 'idahofalls', 'coeurdalene', 'lewiston']],
      ['Farms', ['magicvalley', 'dairy', 'uppervalley', 'minicassia', 'treasurevalley', 'palouse']],
      ['Groundwater', ['espa', 'biglost', 'mountainhome', 'raftriver', 'rathdrum']],
      ['Tribes', ['forthall', 'nezperce', 'cdatribe']],
      ['Fish farms and industry', ['trout', 'cloud']],
    ],
    riverLabels: [['SNAKE RIVER', -115.45, 42.98, .3, -8], ['SNAKE RIVER', -112.2, 43.42, .45, 52], ['SNAKE R.', -116.95, 45.6, .45, -78], ['SALMON RIVER', -115.6, 45.47, .32, 6], ['CLEARWATER R.', -116.45, 46.52, .45, 22],
      ['BOISE R.', -116.5, 43.72, .6, 20], ['PAYETTE R.', -116.55, 44.0, .6, 12], ['HENRYS FORK', -111.55, 44.1, .6, 60], ['BEAR R.', -111.75, 42.42, .6, -40], ['BIG WOOD R.', -114.35, 43.52, .6, 70],
      ['BIG LOST R.', -113.6, 43.82, .6, 50], ['OWYHEE R.', -116.9, 42.3, .6, -30], ['PEND OREILLE R.', -116.85, 48.25, .6, 15], ['KOOTENAI R.', -116.3, 48.75, .6, 20], ['ST. JOE R.', -116.1, 47.3, .6, 0], ['SPOKANE R.', -117.15, 47.72, .7, 0]],
    neighbors: [['WASHINGTON', -117.38, 47.2, -90], ['OREGON', -117.33, 43.6, -90], ['NEVADA', -116.0, 41.86, 0], ['UTAH', -112.9, 41.86, 0], ['WYOMING', -110.92, 42.75, 90], ['MONTANA', -113.3, 46.6, 0], ['BRITISH COLUMBIA', -116.3, 49.12, 0]],
    spot: {
      rain: inches => `${inches < 12 ? 'Dry country. Crops here need irrigation.' : inches < 18 ? 'Semi-arid country.' : inches < 30 ? 'Wetter foothill, prairie or mountain country.' : 'Wet mountain country. Most of this falls as snow, and this is where the rivers start.'} Most of the water Idaho uses comes from mountain snow, not from rain where people live.`,
      crop: 'cropland', rest: 'sagebrush, grass or rock', restAlone: 'Sagebrush, grassland or bare rock', rulesTitle: 'Water rules here',
      area: n => n === 'Eastern Snake Plain Aquifer'
        ? 'The state manages the groundwater under this spot and the Snake River as one supply. A well here has a place in the same line of seniority as the canals on the river. In a short year newer well rights can be ordered off unless their owners belong to an approved plan to make up the water.'
        : n === 'Rathdrum Prairie Aquifer'
          ? 'This aquifer is the drinking water source for Coeur d\'Alene and Spokane. Idaho treats it as a groundwater management area, where new wells get closer review.'
          : CG.has(n)
            ? 'This is a critical groundwater area. The state has found there is not enough groundwater here for the rights already issued, and can refuse new wells.'
            : 'This is a groundwater management area. The state judges that groundwater here may be running short. New wells get closer review.',
      basin: n => `This spot is in the <b>${n}</b>, a court case that lists every water right in the basin with its date and amount. The Snake River case ran from 1987 to 2014. The northern Idaho and Bear River cases are still under way. `,
      none: 'Water here is shared by seniority: when a river or aquifer runs short, older rights are served first. A new use of river water or groundwater needs a state permit. A household well is exempt if it uses no more than 13,000 gallons a day and waters no more than half an acre.',
      tribal: 'Tribal water rights in Idaho date from the treaties that created the reservations, which makes them older than most other rights.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain and snow: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], S.lc, S.faq24, S.srba, S.domestic],
    },
    legend: {
      rain: 'About 10 inches a year at Twin Falls, 12 at Idaho Falls, 13 at Boise, 25 at Coeur d\'Alene, and over 80 in the wettest mountains. PRISM 1991–2020 normals.',
      groundA: 'Critical or managed groundwater area', groundB: 'Aquifer managed as one supply',
      ground: 'Dashed white lines are the six court cases that sort out water rights, basin by basin. The large pale area is the Eastern Snake Plain Aquifer.',
      snow: 'Where snow usually builds up (drawn from elevation and precipitation; not a live snow map). Winter 2025–26 had far less.',
    },
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 3 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rain and snow (PRISM 1991–2020 normals). The satellite data shows all cropland, whether or not it is irrigated; the wheat country of northern Idaho mostly is not. Large rivers and lakes are from Natural Earth. Smaller rivers and reservoir outlines are from the National Hydrography Dataset, and groundwater areas and court-case boundaries are from the Idaho Department of Water Resources. Canals are from OpenStreetMap contributors. Tribal lands are from the Census Bureau. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. The statewide totals are US Geological Survey figures for 2015. Reservoir readings are from the Bureau of Reclamation's daily records. Figures are as of November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'A state built on one river', text: 'Idaho takes about 19.9 million acre-feet of water a year out of its rivers, springs and wells. Among western states only California takes more. About 86% goes to irrigation, nearly all of it along the Snake River in the south. The panel shows where the water comes from and where it goes.', view: 'home', home: true },
      { title: 'It arrives as snow', text: 'The white areas are where snow usually builds up in winter. The Snake River Plain below them gets about 9 to 13 inches of rain and snow a year. In 2026 the snowpack peaked three weeks early at 68% of normal, and a quarter of it had melted by 1 April.', view: 'home', season: 'winter', select: 'snow', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'Stored for summer', text: 'Reservoirs on the upper Snake hold the snowmelt for farms downstream. American Falls is the largest. In 2026 the reservoirs peaked at 76% full in April and were drawn down to 8% by October.', box: [-113.5, 42.45, -110.7, 44.5], zoom: .9, select: 'americanfalls', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Where the river is emptied', text: 'At Milner Dam the Snake is turned into canals on both banks. The turquoise lines are the main ones. The state plans for no water at all to pass the dam, and in most summers a stretch of riverbed below it runs nearly dry.', box: [-115.0, 42.3, -113.7, 43.1], zoom: 1.3, select: 'milner', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'A desert made into farms', text: 'The Magic Valley was sagebrush until the canals arrived in 1905. Idaho now grows about a third of the country\'s potatoes and is third in milk. Irrigation takes 17.1 million acre-feet a year statewide.', lon: -114.45, lat: 42.72, zoom: .9, select: 'magicvalley', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'The water underneath', text: 'The pale blue area is the Eastern Snake Plain Aquifer, groundwater in lava rock under 10,800 square miles. Wells here water about a million acres. The aquifer lost 600,000 acre-feet between spring 2025 and spring 2026.', box: [-115.3, 42.2, -111.2, 44.6], zoom: .8, select: 'espa', layers: ['rivers', 'ground', 'cities', 'farms'] },
      { title: 'Older rights come first', text: 'Wells and the river draw on the same water, and the canal companies\' rights are older. In May 2026 the state ordered well rights newer than 11 October 1900 to stop pumping unless their owners had joined a plan to make up the water.', lon: -112.5, lat: 43.2, zoom: .8, select: 'curtail', layers: ['rivers', 'reservoirs', 'canals', 'ground', 'cities', 'farms'] },
      { title: 'Where the river comes back', text: 'Below Milner the aquifer pours out of the canyon wall at Thousand Springs and rebuilds the river. Trout farms run the spring water through their ponds. That accounts for 11% of all the water withdrawn in Idaho, though almost none of it is used up.', lon: -114.8, lat: 42.7, zoom: 1.5, select: 'thousandsprings', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry'] },
      { title: 'The capital and its river', text: 'Three reservoirs above Boise store the Boise River for the Treasure Valley. They filled in 2026 and stood at 39% in November. The dam at Anderson Ranch, the largest, is to be raised six feet, with construction expected to start in 2027.', box: [-117.0, 43.2, -115.1, 43.95], zoom: 1.2, select: 'boise', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Salmon, dams and the north', text: 'North of the Snake River Plain there is more water and less irrigation. The arguments are about fish. Sockeye from Redfish Lake pass eight dams on the way to the sea, and by 30 June 2026 only 11 had been counted at the last one. Now explore: click any reservoir, canal, field or patch of open land.', box: [-117.7, 43.7, -113.6, 48.1], zoom: .62, select: 'redfish', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry'] },
    ],
    terrain: {
      // snow line: lower in the wetter north, higher on the dry lava plain and the rain-shadow valleys of the east
      snowLine: (lat, p) => 1900 + (43.5 - lat) * 130 - Math.max(-150, Math.min(400, (p - 20) * 20)),
      alpine: 2900, saguaro: () => false,
      pivot: (lon, lat) => lat < 44.4 && lon > -116.3,
      redrock: () => 0,
    },
  };
})();
