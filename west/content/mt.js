/* Montana. Every figure has a source link on its card. Fact sheet and verification log: research/montana.md.
   Winter 2025-26 was the warmest on record in Montana and low-elevation snow melted a month early, so 2026
   storage and flow readings are labelled as that year's readings. Figures are as of November 2026. */
(() => {
  const S = {
    swp: ['Montana State Water Plan, 2015', 'https://dnrc.mt.gov/_docs/water/Planning_implementation_coor/2015_mt_water_plan.pdf'],
    fs3: ['Montana DNRC water fact sheet, 2015', 'https://dnrc.mt.gov/_docs/water/Planning_implementation_coor/3_how_much_water_is_there_and_how_is_it_used.pdf'],
    cfk: ['DNRC: Clark Fork and Kootenai basin plan, 2014', 'https://dnrc.mt.gov/_docs/water/Hydro_science_data/clark_fork_kootenai_basin_report_final.pdf'],
    umo: ['DNRC: Upper Missouri basin plan, 2014', 'https://dnrc.mt.gov/_docs/water/Hydro_science_data/upper_missouri_basin_report_final.pdf'],
    lmo: ['DNRC: Lower Missouri basin plan, 2014', 'https://dnrc.mt.gov/_docs/water/Hydro_science_data/lower_missouri_river_basin_report_final.pdf'],
    yel: ['DNRC: Yellowstone basin plan, 2014', 'https://dnrc.mt.gov/_docs/water/Hydro_science_data/yellowstone_river_basin_report_final.pdf'],
    nrcs: ['NRCS Montana water supply report, 1 Apr 2026', 'https://efotg.sc.egov.usda.gov/references/public/MT/WSOR202604.pdf'],
    spring: ['DNRC water supply report, spring 2026', 'https://drought.mt.gov/_docs/Water-Supply-Report-Spring-2026.pdf'],
    summer: ['DNRC water supply report, summer 2026', 'https://drought.mt.gov/_docs/DWSAC-Materials/Water-Supply-Report-Summer-2026-Final_.pdf'],
    gp: ['Reclamation reservoir summary, Sep 2026', 'https://www.usbr.gov/gp/lakes_reservoirs/wareprts/wsrp/2026/12SeptemberHighlights26_508.pdf'],
    corps: ['Army Corps of Engineers, 6 Jul 2026', 'https://www.dvidshub.net/news/printable/569432'],
    siphon: ['Reclamation, 25 Jun 2025', 'https://www.usbr.gov/newsroom/news-release/5189'],
    siphon2: ['Reclamation, 9 Apr 2026', 'https://www.usbr.gov/newsroom/news-release/5314'],
    siphonLeg: ['Reclamation briefing to legislators, Jul 2025', 'https://archive.legmt.gov/content/Committees/Interim/2025-2026/WPIC/July_30_2025/St_Mary_Siphon_Presentation_WPIC.pdf'],
    lyp: ['Reclamation: Lower Yellowstone Project', 'https://www.usbr.gov/gp/mtao/loweryellowstone/index.html'],
    bypass: ['Reclamation, 20 Apr 2022', 'https://www.usbr.gov/newsroom/news-release/4180'],
    scotus: ['US Supreme Court decree, Montana v. Wyoming, 2018', 'https://www.supremecourt.gov/opinions/17pdf/137orig_10n2.pdf'],
    court: ['Montana Water Court report, Jan 2026', 'https://archive.legmt.gov/content/Committees/Interim/2025-2026/WPIC/January_12_2026/WaterCourtReport_WPIC_2026-01.pdf'],
    wells: ['Legislative staff memo on the exempt well lawsuit, Jan 2026', 'https://archive.legmt.gov/content/Committees/Interim/2025-2026/WPIC/January_12_2026/Exempt.Well.Litigation.Summary_Jan2025.pdf'],
    wellData: ['DNRC exempt well data, 2024', 'https://archive.legmt.gov/content/Committees/Interim/2025-2026/WPIC/January_12_2026/StatewideExemptWellData_7-2024.pdf'],
    hb681: ['DNRC: exempt well updates', 'https://dnrc.mt.gov/Water-Resources/Water-Rights/Understanding-Water-Rights/Exempt-Well-Updates'],
    compacts: ['DNRC: water right compacts', 'https://dnrc.mt.gov/Water-Resources/Compacts/'],
    cskt: ['DNRC: summary of the CSKT compact', 'https://dnrc.mt.gov/_docs/water/adjudication/CSKT_summary.pdf'],
    frwmb: ['Flathead Reservation Water Management Board', 'https://www.frwmb.gov/about/'],
    belknap: ['DNRC: Fort Belknap compact', 'https://dnrc.mt.gov/Water-Resources/Compacts/Fort-Belknap-Indian-Community'],
    indianz: ['Indianz.com, 12 Mar 2026', 'https://indianz.com/News/2026/03/12/these-are-treaty-and-trust-responsibilities-lawmakers-struggle-with-tribal-water-rights'],
    eki: ['Energy Keepers presentation, 2018', 'https://www.energy.gov/sites/prod/files/2018/03/f49/Lipscomb-strategic-planning.pdf'],
    lake26: ['Daily Inter Lake, 22 May 2026', 'https://dailyinterlake.com/news/2026/may/22/flathead-lake-already-within-a-foot-of-full-pool-d/'],
    crt: ['British Columbia: Columbia River Treaty', 'https://engage.gov.bc.ca/columbiarivertreaty/agreement-in-principle/'],
    pit: ['Berkeley Pit monitoring report, Jul 2026', 'https://pitwatch.org/wp-content/uploads/2026/08/BMFOU-July-26-Electronic.pdf'],
    pitTreat: ['PitWatch: water treatment', 'https://pitwatch.org/water-treatment/'],
    pitFaq: ['PitWatch', 'https://pitwatch.org/'],
    nps: ['National Park Service: glaciers', 'https://www.nps.gov/glac/learn/nature/glaciersoverview.htm'],
    triple: ['Wikipedia: Triple Divide Peak', 'https://en.wikipedia.org/wiki/Triple_Divide_Peak_(Montana)'],
    fwp: ['Montana FWP, 5 Aug 2026', 'https://content.govdelivery.com/accounts/MTFWP/bulletins/423c99d'],
    fwp2: ['Montana FWP, 28 Aug 2026', 'https://content.govdelivery.com/accounts/MTFWP/bulletins/42748ea'],
    bhwc: ['Big Hole Watershed Committee, Jul 2026', 'https://bhwc.org/entire-bhr-under-hoot-owl-restrictions-effective-july-29/'],
    mtpr: ['Montana Public Radio, 22 Jun 2017', 'https://www.mtpr.org/post/city-missoula-takes-ownership-mountain-water-company'],
    helena: ['Montana Public Radio, 25 Nov 2024', 'https://www.mtpr.org/montana-news/2024-11-25/the-taste-has-changed-but-helena-water-is-safe-public-works-director-says'],
    westEnd: ['Burns & McDonnell: West End plant', 'https://www.burnsmcd.com/projects/west-end-water-treatment-plant'],
    sidney: ['Yellowstone Public Radio, 7 Feb 2023', 'https://www.ypradio.org/business-economics/2023-02-07/community-workers-shocked-by-impending-closure-of-historic-sidney-sugar-beet-factory'],
    gis: ['Map data: Montana DNRC', 'https://gis.dnrc.mt.gov/arcgis/rest/services/WRD/WRD/MapServer'],
    gisSm: ['Route: Montana DNRC', 'https://gis.dnrc.mt.gov/arcgis/rest/services/WRD/WMB_StMary/MapServer'],
    osm: ['Route: OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'],
  };
  const F = [];
  const add = o => F.push(o);
  const btn = (id, label) => `<p><button class="btn" data-feat="${id}">${label}</button></p>`;

  // ----------------------------------------------------------------- snow, rivers, rules
  add({ id: 'snow', kind: 'snow', name: 'Mountain snowpack', short: 'Snowpack', lon: -113.05, lat: 47.45, tier: 1,
    lede: 'Most of Montana\'s river water starts as mountain snow. It piles up over winter and melts into the rivers in late spring and early summer.',
    stats: [['84 of 250', 'snow measuring sites had their lowest 1 April reading on record in 2026'], ['A month early', 'snow below about 6,500 feet melted in 2026'], ['6th year', 'in a row with drought somewhere in Montana', 1]],
    body: '<p>December 2025 to February 2026 was the warmest winter on record in Montana. High peaks held close to normal snow, but lower slopes lost theirs early. By mid-June the Big Hole, Jefferson, Musselshell, Yellowstone and Powder rivers had set record lows for the date.</p><p>River and reservoir readings on this map come from that year. Switch the season to Winter to see where snow usually builds up.</p>',
    sources: [S.nrcs, S.spring, S.summer] });
  add({ id: 'triple', kind: 'source', name: 'Triple Divide Peak', short: 'Triple Divide', lon: -113.517, lat: 48.573, tier: 2,
    lede: 'Rain that falls on this peak in Glacier National Park can end up in three different seas: the Pacific, the Gulf of Mexico or Hudson Bay.',
    stats: [['8,025 ft', 'elevation of the peak'], ['44M AF', 'of water flows out of Montana in an average year'], ['65%', 'of that water starts inside the state']],
    body: '<p>West of the peak, water runs to the Flathead River and on to the Columbia. To the southeast it runs to the Marias and the Missouri. To the northeast it joins the St. Mary River, which flows into Canada.</p><p>AF means acre-feet. One acre-foot covers a football field about one foot deep.</p>' + btn('stmary', 'The canal that moves St. Mary water'),
    sources: [S.triple, S.fs3] });
  add({ id: 'glaciers', kind: 'glacier', name: 'Glaciers of Glacier National Park', short: 'Glaciers', lon: -113.727, lat: 48.752, tier: 3,
    lede: 'The park\'s glaciers are shrinking. They hold a small amount of water compared with the yearly snowpack, but they feed streams late in summer.',
    stats: [['About 80', 'glaciers at the end of the Little Ice Age, around 1850'], ['26', 'named glaciers still larger than 0.1 square kilometres in 2015'], ['39%', 'average loss of area among named glaciers, 1966 to 2015']],
    sources: [S.nps] });
  add({ id: 'threeforks', kind: 'source', name: 'Where the Missouri begins', short: 'Missouri headwaters', lon: -111.508, lat: 45.927, tier: 2,
    lede: 'Three rivers meet near Three Forks to form the Missouri: the Jefferson, the Madison and the Gallatin.',
    stats: [['About 6M AF', 'a year flows down the Missouri at Virgelle, below Great Falls'], ['4.2M AF', 'a year is diverted for irrigation in the upper Missouri basin'], ['970,000 AF', 'of that is used up by crops']],
    body: '<p>Most of the diverted water seeps or drains back to the rivers and is used again downstream.</p><p>The Madison carries natural arsenic from hot springs in Yellowstone National Park. The state holds a right to keep half the Missouri\'s average flow in the river to dilute it.</p>' + btn('closed', 'Why this basin is closed to new water rights'),
    sources: [S.umo, S.swp] });
  add({ id: 'yellowstone', kind: 'riverpt', name: 'The undammed Yellowstone', short: 'Yellowstone River', lon: -109.75, lat: 45.78, tier: 1,
    lede: 'The Yellowstone is the longest free-flowing river in the lower 48 states. No dam stores its water anywhere on the main river.',
    stats: [['700+ mi', 'from Yellowstone National Park to the Missouri'], ['9M AF', 'a year flows out of Montana, on average'], ['2.5M AF', 'a year is diverted for irrigation in the basin'], ['Mid-June 2026', 'the river set record low flows for the date', 1]],
    body: '<p>With no reservoir on the main river, farms and towns depend on each summer\'s flow. Low dams that only raise the water level send it into canals.</p><p>When rivers run low and warm, Montana limits fishing to the cooler hours. The rule bans fishing from 2 p.m. to midnight. In 2026 such limits were set on the Big Hole, Smith and Sun rivers, among others.</p>' + btn('intake', 'The diversion dam at Intake') + btn('bighole', 'The Big Hole River'),
    sources: [S.yel, S.swp, S.summer, S.fwp, S.fwp2, S.bhwc] });
  add({ id: 'bighole', kind: 'riverpt', name: 'Big Hole River', short: 'Big Hole', lon: -112.95, lat: 45.79, tier: 2,
    lede: 'A trout river in a high valley of hay ranches. Ranchers, anglers and agencies share shortages here under a local drought plan.',
    stats: [['29 Jul 2026', 'afternoon fishing was banned on the whole river because of warm water'], ['Mid-June 2026', 'record low flow for the date'], ['5,918 AF', 'a year is piped from this river over the Continental Divide to Butte']],
    body: '<p>The fishing limits are set under the Big Hole River Drought Management Plan. They take effect when the water stays at 73 degrees Fahrenheit or more for three days.</p>' + btn('berkeley', 'Butte and the Berkeley Pit'),
    sources: [S.bhwc, S.summer, S.cfk] });
  add({ id: 'musselshell', kind: 'riverpt', name: 'Musselshell River', short: 'Musselshell', lon: -108.54, lat: 46.44, tier: 3,
    lede: 'A prairie river that runs 340 miles from the mountains of central Montana to Fort Peck Lake.',
    stats: [['72,000 AF', 'capacity of Deadman\'s Basin, the main reservoir beside the river'], ['Mid-June 2026', 'record low flow for the date']],
    body: '<p>The state has closed the Musselshell to most new water rights.</p>',
    sources: [S.lmo, S.swp, S.summer] });
  add({ id: 'milltown', kind: 'riverpt', name: 'Milltown: a dam removed', short: 'Milltown', lon: -113.89, lat: 46.871, tier: 3,
    lede: 'A power dam stood here where the Blackfoot River joins the Clark Fork. It was removed in 2008.',
    stats: [['2008', 'the dam was removed'], ['1904', 'date of the dam\'s old water right'], ['2,000 cfs', 'size of that right: cubic feet of water per second']],
    body: '<p>The upper Clark Fork, from Butte to Missoula, is one of the largest federal toxic cleanup sites in the country. The state took over the old dam\'s water right.</p>' + btn('berkeley', 'The Berkeley Pit'),
    sources: [S.cfk] });
  add({ id: 'watercourt', kind: 'law', name: 'Montana Water Court', short: 'Water Court', lon: -110.99, lat: 45.73, tier: 3,
    lede: 'A court in Bozeman is sorting out every Montana water right that dates from before July 1973. The work began in the 1970s and is nearly done.',
    stats: [['251,669', 'claims to old water rights'], ['97.3%', 'had been through a first court decree by 1 Jan 2026'], ['82.2%', 'were fully settled by that date']],
    body: '<p>Montana follows "first in time, first in right." When a stream runs short, the oldest rights are served first. That only works once the court has fixed each right\'s date and amount.</p><p>Rights from after June 1973 come from a state permit instead.</p>' + btn('closed', 'Basins closed to new rights'),
    sources: [S.court, S.swp] });

  // ----------------------------------------------------------------- reservoirs and dams
  add({ id: 'fortpeck', kind: 'hydro', name: 'Fort Peck Dam and Lake', short: 'Fort Peck', lake: 'Fort Peck Lake', lon: -106.41, lat: 47.99, tier: 1, zoom: .8,
    lede: 'The largest reservoir in Montana and the fifth largest in the United States. The Army Corps of Engineers runs it with five other dams down the Missouri.',
    stats: [['18.5M AF', 'capacity'], ['611,000 AF', 'a year evaporates from reservoirs in the lower Missouri basin, which include this one'], ['60%', 'of average: 2026 runoff forecast for the Missouri above Sioux City, Iowa'], ['2,223.9 ft', 'lake level at the end of June 2026', 1]],
    body: '<p>In the lower Missouri basin, evaporation from reservoirs uses up more water than farms, towns and livestock combined.</p><p>In 2026 the mountain snow above Fort Peck peaked on 16 March, a month early, at 77% of average. The Corps held releases to about 7,000 cubic feet per second.</p>',
    sources: [S.swp, S.lmo, S.corps] });
  add({ id: 'canyonferry', kind: 'hydro', name: 'Canyon Ferry Lake', short: 'Canyon Ferry', lake: 'Canyon Ferry Lake', lon: -111.6, lat: 46.5, tier: 1, zoom: .9,
    lede: 'The largest reservoir on the upper Missouri, east of Helena. It stores water for power, flood control and farms.',
    stats: [['1.99M AF', 'capacity'], ['96%', 'of average storage at the end of September 2026'], ['83%', 'of average: water flowing in during September 2026'], ['58 MW', 'power plant capacity']],
    body: '<p>The reservoir is seldom drawn below 1 million AF. Two smaller dams just downstream, Hauser and Holter, are kept nearly full to make power.</p>' + btn('helena', 'Helena') + btn('greatfalls', 'The dams at Great Falls'),
    sources: [S.umo, S.swp, S.gp] });
  add({ id: 'greatfalls', kind: 'hydro', name: 'The dams at Great Falls', short: 'Great Falls', lon: -111.27, lat: 47.52, tier: 1, zoom: 1,
    lede: 'The Missouri drops over a chain of waterfalls here. Five power dams now sit on them, and their old water rights shape the whole basin upstream.',
    stats: [['5', 'dams: Black Eagle, Rainbow, Cochrane, Ryan and Morony'], ['253 MW', 'combined capacity'], ['10,000 cfs', 'the largest of their water rights, at Cochrane Dam']],
    body: '<p>The dams use the water and return it to the river. Their rights still count: water must reach them, which limits new uses upstream.</p><p>In the upper Missouri basin, about 32 million AF a year passes through power turbines. Much of it is the same water, used at one dam after another.</p>',
    sources: [S.swp] });
  add({ id: 'tiber', kind: 'reservoir', name: 'Tiber Reservoir (Lake Elwell)', short: 'Tiber', lake: 'Tiber Reservoir', lon: -111.2, lat: 48.33, tier: 2,
    lede: 'A federal reservoir on the Marias River near Chester. It is by far the largest in the Marias basin.',
    stats: [['1.56M AF', 'maximum volume, roughly'], ['105%', 'of average storage at the end of September 2026'], ['293%', 'of average: water flowing in during a wet September 2026', 1]],
    sources: [S.umo, S.gp] });
  add({ id: 'gibson', kind: 'reservoir', name: 'Gibson Reservoir', short: 'Gibson', lake: 'Gibson Reservoir', lon: -112.797, lat: 47.606, tier: 3,
    lede: 'The reservoir on the Sun River, where it leaves the Rocky Mountain Front. Its water is sent through canals to farms around Fairfield.',
    stats: [['98,700 AF', 'capacity'], ['73%', 'of average storage at the end of September 2026'], ['46,700 AF', 'held by Pishkun Reservoir, the next stop on the way to the farms']],
    body: btn('greenfields', 'The farms it waters'),
    sources: [S.umo, S.gp] });
  add({ id: 'clarkcanyon', kind: 'reservoir', name: 'Clark Canyon Reservoir', short: 'Clark Canyon', lake: 'Clark Canyon Reservoir', lon: -112.86, lat: 44.99, tier: 2,
    lede: 'A federal reservoir at the head of the Beaverhead River. It waters hay and grain farms around Dillon.',
    stats: [['253,400 AF', 'capacity'], ['73%', 'of average storage at the end of September 2026'], ['50%', 'of average: water flowing in during September 2026', 1]],
    body: '<p>The 2026 readings are from a year of early snowmelt.</p>' + btn('beaverhead', 'Beaverhead Valley farms'),
    sources: [S.umo, S.gp] });
  add({ id: 'hebgen', kind: 'reservoir', name: 'Hebgen Lake', lake: 'Hebgen Lake', lon: -111.2, lat: 44.78, tier: 3,
    lede: 'A reservoir on the Madison River just outside Yellowstone National Park. It is the first of two reservoirs on the Madison.',
    stats: [['386,000 AF', 'capacity, roughly'], ['27,200 AF', 'held by Ennis Lake, the next reservoir down the Madison']],
    sources: [S.umo] });
  add({ id: 'yellowtail', kind: 'hydro', name: 'Yellowtail Dam and Bighorn Lake', short: 'Yellowtail Dam', lake: 'Bighorn Lake', lon: -107.957, lat: 45.307, tier: 1, zoom: .9,
    lede: 'A federal dam on the Bighorn River, the Yellowstone\'s largest tributary. The lake behind it runs up a canyon into Wyoming.',
    stats: [['1.38M AF', 'capacity'], ['250 MW', 'power plant capacity'], ['96%', 'of average storage at the end of September 2026'], ['300,000 AF', 'a year of stored water belongs to the Crow Tribe']],
    body: '<p>About 2 million AF a year flows into Montana down the Bighorn from Wyoming.</p>' + btn('crow', 'The Crow Tribe\'s water'),
    sources: [S.yel, S.swp, S.gp] });
  add({ id: 'tongue', kind: 'reservoir', name: 'Tongue River Reservoir', short: 'Tongue River', lake: 'Tongue River Reservoir', lon: -106.788, lat: 45.095, tier: 2,
    lede: 'A state reservoir just north of the Wyoming line. Montana took Wyoming to the US Supreme Court over the water that reaches it.',
    stats: [['1950', 'compact dividing four Yellowstone tributaries between the two states'], ['1,300 AF', 'Wyoming wrongly kept from Montana in 2004, the court found'], ['$20,340', 'damages Wyoming was ordered to pay in 2018'], ['49%', 'of normal: Tongue basin snowpack on 1 Apr 2026', 1]],
    body: '<p>The compact covers the Clarks Fork, Bighorn, Tongue and Powder rivers. The court ruled that it protects Montana water rights older than 1950 from newer uses in Wyoming.</p><p>The dam was rebuilt and enlarged in 1999. The Northern Cheyenne Tribe\'s water compact was tied to that work.</p>' + btn('cheyenne', 'The Northern Cheyenne Tribe'),
    sources: [S.scotus, S.yel, S.nrcs] });
  add({ id: 'fresno', kind: 'reservoir', name: 'Fresno Reservoir', short: 'Fresno', lake: 'Fresno Reservoir', lon: -109.95, lat: 48.6, tier: 2,
    lede: 'The only dam on the main Milk River. It holds water that arrives from the St. Mary River through a canal and a detour through Canada.',
    stats: [['93,000 AF', 'capacity, roughly'], ['136%', 'of average storage at the end of September 2026'], ['72,000 AF', 'held by Nelson Reservoir, downstream near Malta']],
    body: btn('stmary', 'The St. Mary Canal') + btn('milkfarms', 'Milk River farms'),
    sources: [S.lmo, S.gp] });
  add({ id: 'sherburne', kind: 'reservoir', name: 'Lake Sherburne', short: 'Sherburne', lake: 'Lake Sherburne', lon: -113.56, lat: 48.82, tier: 3,
    lede: 'A reservoir on Swiftcurrent Creek at the edge of Glacier National Park. It stores water for the St. Mary Canal.',
    stats: [['63%', 'of average storage at the end of September 2026'], ['174%', 'of average: water flowing in during a wet September 2026']],
    body: btn('stmary', 'The St. Mary Canal'),
    sources: [S.gp, S.lmo] });
  add({ id: 'hungryhorse', kind: 'hydro', name: 'Hungry Horse Dam', short: 'Hungry Horse', lake: 'Hungry Horse Reservoir', lon: -113.74, lat: 48.14, tier: 1, zoom: .9,
    lede: 'A federal dam on the South Fork of the Flathead River, built in 1952 for power and flood control.',
    stats: [['3.59M AF', 'capacity'], ['2.5M AF', 'a year flows down the South Fork, on average'], ['90,000 AF', 'a year of stored water is set aside for the Confederated Salish and Kootenai Tribes']],
    body: btn('skq', 'Flathead Lake and its dam'),
    sources: [S.cfk, S.cskt] });
  add({ id: 'libby', kind: 'hydro', name: 'Libby Dam and Lake Koocanusa', short: 'Libby Dam', lake: 'Lake Koocanusa', lon: -115.31, lat: 48.43, tier: 1, zoom: .9,
    lede: 'A federal dam on the Kootenai River. Its lake backs 42 miles into Canada, and a treaty between the two countries made it possible.',
    stats: [['6.03M AF', 'capacity'], ['1973', 'completed, under the Columbia River Treaty of 1964'], ['10M AF', 'a year flows out of Montana down the Kootenai'], ['1,820 ft', 'where the river leaves the state, the lowest point in Montana']],
    body: '<p>The treaty set up shared dams for flood control and power on the Columbia and its tributaries. The United States and Canada have reached an agreement in principle to update it. The agencies that run the dams are working under interim agreements in the meantime.</p>',
    sources: [S.cfk, S.swp, S.crt] });
  add({ id: 'skq', kind: 'hydro', name: 'Flathead Lake and SKQ Dam', short: 'Flathead Lake', lon: -114.234, lat: 47.677, tier: 1, zoom: .9,
    lede: 'Flathead Lake is natural. A dam at its outlet controls the top ten feet, and since 2015 that dam has belonged to the Confederated Salish and Kootenai Tribes.',
    stats: [['1.2M AF', 'stored in the top ten feet of the lake'], ['208 MW', 'power plant capacity'], ['5 Sep 2015', 'the tribes bought the dam, once called Kerr Dam'], ['May 2026', 'the lake was reported within a foot of full', 1]],
    body: '<p>SKQ stands for Selish, Ksanka and Qlispe, the names of the tribes in their own languages. The tribes\' company, Energy Keepers, runs it.</p>' + btn('cskt', 'The tribes\' water compact') + btn('hungryhorse', 'Hungry Horse Dam'),
    sources: [S.eki, S.cfk, S.lake26] });
  add({ id: 'noxon', kind: 'hydro', name: 'Noxon Rapids Dam', short: 'Noxon Rapids', lake: 'Noxon Reservoir', lon: -115.73, lat: 47.96, tier: 2,
    lede: 'The largest power dam in the Clark Fork basin, near the Idaho line. More water leaves Montana here than by any other river.',
    stats: [['535 MW', 'capacity'], ['15M AF', 'a year flows out of Montana down the Clark Fork'], ['50,000 cfs', 'the dam\'s water rights, dated 1951, 1959 and 1974']],
    body: '<p>The dam belongs to Avista, a utility based in Spokane. Because its rights are so large, they limit how much new water use can be allowed upstream.</p>',
    sources: [S.cfk, S.swp] });

  // ----------------------------------------------------------------- canals and diversions
  add({ id: 'stmary', kind: 'canalpt', name: 'St. Mary Canal', short: 'St. Mary Canal', lon: -113.37, lat: 48.944, tier: 1, zoom: 1.3,
    lede: 'A century-old canal carries water from the St. Mary River across a divide to the Milk River. On 17 June 2024 its two big pipes burst.',
    stats: [['17 Jun 2024', 'both 90-inch pipes of the St. Mary siphon failed'], ['25 Jun 2025', 'a new siphon was finished and water flowed again'], ['110,000', 'acres of Montana farmland depend on the canal'], ['14,000', 'people get town water from it']],
    body: '<p>A siphon is a pipe that carries a canal down one side of a valley and up the other. Water deliveries through the canal stopped for a year.</p><p>Engineers put the cost of the new siphon at $51.6 million. A second siphon nearby, at Halls Coulee, was replaced by April 2026 for an estimated $18.4 million. The canal\'s diversion dam is being rebuilt, with completion expected in 2028.</p>' + btn('milkfarms', 'Milk River farms') + btn('blackfeet', 'The Blackfeet Nation'),
    sources: [S.siphon, S.siphon2, S.siphonLeg, S.gisSm] });
  add({ id: 'intake', kind: 'reservoir', kindLabel: 'Diversion dam', name: 'Intake Diversion Dam', short: 'Intake', lon: -104.53, lat: 47.283, tier: 2,
    lede: 'A low dam of rock and timber across the Yellowstone. It does not store water. It raises the river enough to push water into a canal.',
    stats: [['58,000', 'acres watered by the Lower Yellowstone Project'], ['71 mi', 'of main canal'], ['$44M', 'spent on a channel that lets fish swim around the dam'], ['April 2022', 'the channel opened']],
    body: '<p>The dam blocked the pallid sturgeon, an endangered fish. The new channel is about two miles long and opens roughly 165 miles of river upstream.</p>' + btn('loweryellowstone', 'Lower Yellowstone farms'),
    sources: [S.lyp, S.bypass] });

  // ----------------------------------------------------------------- cities
  add({ id: 'billings', kind: 'city', name: 'Billings', lon: -108.5, lat: 45.783, tier: 1, zoom: .9,
    lede: 'Montana\'s largest city drinks from the Yellowstone River. It is building a second treatment plant and reservoirs on its west side.',
    stats: [['53,500 AF', 'a year of Yellowstone water reserved by the state for the city\'s growth'], ['18M gallons', 'a day: the new West End plant\'s design capacity'], ['1.6%', 'of the water consumed in the Yellowstone basin goes to public water systems']],
    body: '<p>The new plant will take river water through an irrigation canal, the Billings Bench canal, and from new storage reservoirs. It gives the city a backup if the first plant has to shut down.</p>',
    sources: [S.yel, S.westEnd] });
  add({ id: 'missoula', kind: 'city', name: 'Missoula', lon: -113.994, lat: 46.872, tier: 1, zoom: .9,
    lede: 'Missoula pumps its water from the aquifer under the valley: up to 200 feet of sand, gravel and cobbles.',
    stats: [['22 Jun 2017', 'the city took over the water system from a private owner'], ['$84M', 'paid for it']],
    body: '<p>The aquifer is the city\'s only source of drinking water. Upstream, the upper Clark Fork basin is closed to most new water rights.</p>' + btn('milltown', 'The dam removed just upstream'),
    sources: [S.cfk, S.mtpr] });
  add({ id: 'bozeman', kind: 'city', name: 'Bozeman', lon: -111.044, lat: 45.679, tier: 1, zoom: .9,
    lede: 'A fast-growing city supplied by mountain creeks. The valley around it is closed to most new water rights, so growth has leaned on small wells.',
    stats: [['86%', 'growth in Gallatin County\'s population, 1990 to 2013'], ['10,200 AF', 'stored behind the dam on Hyalite Creek, south of the city'], ['63%', 'of normal: Gallatin basin snowpack on 1 Apr 2026', 1]],
    body: '<p>The city\'s treatment plant is on Sourdough Creek. Lyman Creek is its oldest source.</p>' + btn('gallatinwells', 'Wells that need no permit') + btn('watercourt', 'The Water Court'),
    sources: [S.umo, S.swp, S.nrcs] });
  add({ id: 'helena', kind: 'city', name: 'Helena', lon: -112.036, lat: 46.589, tier: 2,
    lede: 'The state capital has several water sources. One of them is the Missouri River, taken from Canyon Ferry Lake.',
    stats: [['1,870 AF', 'capacity of Chessman Reservoir, which the city owns'], ['10,500 AF', 'capacity of the Helena Valley reservoir, filled from Canyon Ferry']],
    body: '<p>In November 2024 the Missouri River plant was the city\'s only source in service.</p>' + btn('canyonferry', 'Canyon Ferry Lake'),
    sources: [S.helena, S.umo] });

  // ----------------------------------------------------------------- farms
  add({ id: 'milkfarms', kind: 'farm', name: 'Milk River farms', short: 'Milk River valley', lon: -107.87, lat: 48.36, tier: 1, zoom: .8,
    lede: 'A ribbon of irrigated farms along the Milk River, on the northern plains. Much of their water is brought in from the St. Mary River.',
    stats: [['110,000', 'acres irrigated'], ['8', 'irrigation districts'], ['178,500 AF', 'a year brought in from the St. Mary River, on average'], ['58%', 'of normal: St. Mary basin snowpack on 1 Apr 2026', 1]],
    body: '<p>The two rivers cross into Canada. A 1909 treaty divides their water between the two countries.</p>' + btn('stmary', 'The St. Mary Canal') + btn('belknap', 'The court case that began here'),
    sources: [S.siphonLeg, S.lmo, S.nrcs] });
  add({ id: 'greenfields', kind: 'farm', name: 'Fairfield Bench farms', short: 'Fairfield Bench', lon: -111.98, lat: 47.62, tier: 2,
    lede: 'Irrigated farms on a bench above the Sun River. Canals bring their water from Gibson Reservoir in the mountains.',
    stats: [['13 MW', 'of power is made from the water as it drops through the canals'], ['67%', 'of normal: Sun, Teton and Marias snowpack on 1 Apr 2026', 1]],
    body: btn('gibson', 'Gibson Reservoir'),
    sources: [S.umo, S.swp, S.nrcs] });
  add({ id: 'loweryellowstone', kind: 'farm', name: 'Lower Yellowstone farms', short: 'Sidney farms', lon: -104.2, lat: 47.66, tier: 1, zoom: .9,
    lede: 'Irrigated farms along the last stretch of the Yellowstone, around Sidney. They long grew sugar beets for a factory in Sidney.',
    stats: [['58,000', 'acres in the federal irrigation project'], ['45,000', 'acres of beets under contract to the Sidney factory in the 1990s'], ['18,000', 'acres in 2022'], ['Feb 2023', 'the owner said the factory would close']],
    body: '<p>The factory was about a century old. Its owner said local growers were no longer supplying enough beets.</p>' + btn('intake', 'Where the water is taken from the river'),
    sources: [S.lyp, S.sidney] });
  add({ id: 'huntley', kind: 'farm', name: 'Yellowstone valley farms', short: 'Yellowstone valley', lon: -108.2, lat: 45.93, tier: 2,
    lede: 'Canals line the Yellowstone from Laurel past Billings. The Huntley Project, east of Billings, was authorized by Congress in 1905.',
    stats: [['600,000+', 'acres irrigated in the Yellowstone basin'], ['30,000', 'acres in the Huntley Project'], ['1909', 'first water delivered at Huntley'], ['Over half', 'of the basin\'s irrigation water goes to hay']],
    body: '<p>After hay, the most water goes to pasture, then barley, then sugar beets.</p>',
    sources: [S.yel, S.swp] });
  add({ id: 'bitterroot', kind: 'farm', name: 'Bitterroot Valley', lon: -114.12, lat: 46.33, tier: 2,
    lede: 'A long valley south of Missoula, watered by ditches from the Bitterroot River and its side streams.',
    stats: [['85,875', 'acres irrigated'], ['353,489 AF', 'a year diverted to water them'], ['38,495 AF', 'stored in Lake Como'], ['32,362 AF', 'stored in Painted Rocks Reservoir']],
    body: '<p>The basin is closed to most new water rights. New homes here often rely on small wells that need no permit.</p>' + btn('gallatinwells', 'Wells that need no permit'),
    sources: [S.cfk] });
  add({ id: 'missionvalley', kind: 'farm', name: 'Mission Valley farms', short: 'Mission Valley', lon: -114.09, lat: 47.33, tier: 3,
    lede: 'Farms on the Flathead Indian Reservation, watered by a federal irrigation project of canals and small reservoirs.',
    stats: [['Up to 135,000', 'acres the project may serve under the tribes\' water compact'], ['16 Jul 1855', 'the date attached to that water right, from the Treaty of Hellgate']],
    body: btn('cskt', 'The tribes\' water compact'),
    sources: [S.cskt] });
  add({ id: 'beaverhead', kind: 'farm', name: 'Beaverhead Valley farms', short: 'Beaverhead Valley', lon: -112.6, lat: 45.25, tier: 3,
    lede: 'Irrigated valleys around Dillon, at the far upper end of the Missouri basin.',
    stats: [['135,000', 'acres irrigated in the Beaverhead and Red Rock valleys, roughly'], ['338,400 AF', 'of storage in the valley\'s two reservoirs, Clark Canyon and Lima']],
    body: btn('clarkcanyon', 'Clark Canyon Reservoir'),
    sources: [S.umo] });

  // ----------------------------------------------------------------- groundwater and rules
  add({ id: 'gallatinwells', kind: 'well', kindLabel: 'Groundwater', name: 'Wells that need no permit', short: 'Exempt wells', lon: -111.45, lat: 45.97, tier: 2,
    lede: 'Montana lets a small well be drilled without a water right permit. In fast-growing valleys such as the Gallatin, many new homes rely on them.',
    stats: [['35 gallons', 'a minute: the most such a well may pump'], ['10 AF', 'a year: the most it may use'], ['2,814', 'new filings a year, on average over 29 years'], ['12 Nov 2025', 'cities, irrigators and conservation groups sued the state over the rule']],
    body: '<p>These are called exempt wells. Most are shallow and draw on groundwater that also feeds streams. The lawsuit says they take water from older rights.</p><p>The state counts five areas dense with such wells: the Flathead, Missoula and Bitterroot, Helena and Gallatin valleys, and the Billings area. Since 1 January 2026, a notice must be filed with the state before one is used.</p>' + btn('closed', 'Basins closed to new rights'),
    sources: [S.wells, S.wellData, S.hb681] });
  add({ id: 'closed', kind: 'rule', name: 'Basins closed to new water rights', short: 'Closed basins', lon: -111.95, lat: 46.25, tier: 2,
    lede: 'In much of western and central Montana, the rivers are fully claimed. The state has closed these basins to most new water rights.',
    stats: [['5', 'basins closed by state law'], ['16 Apr 1993', 'the upper Missouri basin was closed']],
    body: '<p>The five are the upper Missouri, the Jefferson and Madison, the Teton, the upper Clark Fork and the Bitterroot. Turn on the Groundwater layer to see them.</p><p>In a closed basin, a new large well can be approved only if its effect on streams is made up with water from an existing right.</p>' + btn('gallatinwells', 'The exception for small wells'),
    sources: [S.umo, S.swp, S.gis] });
  add({ id: 'powdercgwa', kind: 'well', kindLabel: 'Groundwater', name: 'Powder River Basin groundwater area', short: 'Powder River Basin', lon: -105.9, lat: 45.5, tier: 3,
    lede: 'The largest controlled groundwater area in Montana, in the coal country of the southeast.',
    stats: [['4.5M acres', 'area'], ['December 1999', 'designated'], ['26%', 'of normal: Powder basin snowpack on 1 Apr 2026', 1]],
    body: '<p>The state can designate a controlled groundwater area to protect the amount or the quality of groundwater. Inside one, special rules apply to new wells.</p>',
    sources: [S.gis, S.cfk, S.nrcs] });

  // ----------------------------------------------------------------- industry
  add({ id: 'berkeley', kind: 'mine', kindLabel: 'Former copper mine', name: 'Berkeley Pit', lon: -112.508, lat: 46.017, tier: 1, zoom: 1.3,
    lede: 'An old open-pit copper mine in Butte, now a lake of acidic, metal-laden water. Pumps and treatment plants hold its level down.',
    stats: [['5,357.91 ft', 'water level on 3 Aug 2026'], ['5,410 ft', 'the level it must stay below'], ['26 Sep 2019', 'pumping from the pit began'], ['7M gallons', 'a day one of the treatment plants can handle']],
    body: '<p>The limit is set at the lowest point of the Butte valley, so that groundwater keeps flowing toward the pit and not away from it. Treated water is released to Silver Bow Creek, the start of the Clark Fork River.</p><p>Butte brings part of its drinking water over the Continental Divide from the Big Hole River.</p>' + btn('bighole', 'The Big Hole River') + btn('milltown', 'Downstream: Milltown'),
    sources: [S.pit, S.pitTreat, S.pitFaq, S.cfk] });
  add({ id: 'colstrip', kind: 'power', name: 'Colstrip power plant', short: 'Colstrip', lon: -106.614, lat: 45.884, tier: 1,
    lede: 'A coal power plant on the dry plains. Its cooling water is pumped 30 miles from the Yellowstone River.',
    stats: [['About 50,000 AF', 'a year: the plant\'s water right'], ['27,400 AF', 'a year consumed by power plants in the Yellowstone basin']],
        sources: [S.yel, S.swp] });
  add({ id: 'bakken', kind: 'oil', name: 'Oil wells of the Bakken', short: 'Oil wells', lon: -104.35, lat: 48.2, tier: 3,
    lede: 'Oil wells in Montana\'s northeast corner are drilled sideways and fractured with water under pressure. None of that water returns to a river.',
    stats: [['10 to 25 AF', 'used over the life of one well'], ['140', 'such wells finished a year, on average, 2004 to 2013'], ['1,400 to 3,500 AF', 'a year in all, at that pace']],
    sources: [S.swp] });

  // ----------------------------------------------------------------- tribes
  add({ id: 'cskt', kind: 'tribe', name: 'Confederated Salish and Kootenai Tribes', short: 'Flathead Reservation', lon: -114.12, lat: 47.6, tier: 2,
    lede: 'The tribes\' water compact was the last of Montana\'s tribal compacts to pass the legislature, in 2015. It took effect in 2021.',
    stats: [['17 Sep 2021', 'the compact took effect'], ['229,383 AF', 'a year the tribes may take from the Flathead River system'], ['90,000 AF', 'of that comes from storage in Hungry Horse Reservoir']],
    body: '<p>The legislature approved the compact in 2015 and Congress in December 2020. A board with members named by the state and the tribes now handles all water rights on the reservation.</p><p>The tribes also hold rights to keep water in streams, dated "time immemorial."</p>' + btn('skq', 'The dam the tribes own') + btn('missionvalley', 'Mission Valley farms'),
    sources: [S.cskt, S.frwmb] });
  add({ id: 'blackfeet', kind: 'tribe', name: 'Blackfeet Nation', short: 'Blackfeet', lon: -113.01, lat: 48.556, tier: 2,
    lede: 'The reservation lies along the east side of Glacier National Park, where the St. Mary, Milk and Two Medicine rivers begin.',
    stats: [['3,000 sq mi', 'area of the reservation'], ['2009', 'the legislature approved the tribe\'s water compact'], ['50,000 AF', 'of St. Mary River water allocated to the tribe']],
    body: '<p>The St. Mary Canal starts on the reservation, and its siphons are inside it. The compact protects the canal\'s deliveries to farms downstream.</p>' + btn('stmary', 'The St. Mary Canal'),
    sources: [S.lmo, S.siphonLeg] });
  add({ id: 'belknap', kind: 'tribe', name: 'Fort Belknap Indian Community', short: 'Fort Belknap', lon: -108.76, lat: 48.48, tier: 2,
    lede: 'A 1908 Supreme Court case about this reservation and the Milk River set the rule for tribal water rights across the West. The tribes\' own settlement is still not final.',
    stats: [['1908', 'Winters v. United States'], ['2001', 'the legislature approved the tribes\' compact'], ['645 cfs', 'of Milk River flow the compact assigns to the tribes'], ['March 2026', 'the bill to approve it was still before Congress']],
    body: '<p>The court held that when the United States set aside a reservation, it also set aside enough water for it. Such rights date from the reservation\'s founding, so they are often the oldest on a river.</p><p>This is the last of Montana\'s seven tribal compacts still waiting for Congress.</p>' + btn('milkfarms', 'Milk River farms'),
    sources: [S.lmo, S.belknap, S.indianz] });
  add({ id: 'rockyboy', kind: 'tribe', name: 'Chippewa Cree Tribe', short: 'Rocky Boy\'s', lon: -109.78, lat: 48.26, tier: 3,
    lede: 'The Rocky Boy\'s Reservation sits in the Bears Paw Mountains. Its compact has been in effect since 1999.',
    stats: [['9 Dec 1999', 'the compact took effect']],
    body: '<p>Big Sandy Creek and its tributaries have been closed to new state water rights since then.</p>',
    sources: [S.lmo, S.compacts] });
  add({ id: 'fortpecktribes', kind: 'tribe', name: 'Assiniboine and Sioux Tribes', short: 'Fort Peck Reservation', lon: -105.2, lat: 48.115, tier: 2,
    lede: 'The Fort Peck tribes signed Montana\'s first tribal water compact, in 1985. It gives them a large right to the Missouri River.',
    stats: [['1985', 'compact ratified'], ['1,050,472 AF', 'a year the tribes may divert'], ['525,236 AF', 'a year they may use up']],
    body: '<p>At most 950,000 AF a year of the diversion may come from rivers. The rest would come from groundwater.</p>',
    sources: [S.lmo] });
  add({ id: 'crow', kind: 'tribe', name: 'Crow Tribe', short: 'Crow', lon: -107.46, lat: 45.6, tier: 2,
    lede: 'The Crow Reservation takes in the lower Bighorn River. The tribe\'s compact gives it both river flow and water stored behind Yellowtail Dam.',
    stats: [['500,000 AF', 'a year from the natural flow of the Bighorn'], ['300,000 AF', 'a year from storage in Bighorn Lake'], ['7 May 1868', 'the date attached to the right']],
    body: '<p>The tribe agreed to share shortages with state water rights that existed before the compact.</p>' + btn('yellowtail', 'Yellowtail Dam'),
    sources: [S.yel] });
  add({ id: 'cheyenne', kind: 'tribe', name: 'Northern Cheyenne Tribe', short: 'Northern Cheyenne', lon: -106.67, lat: 45.62, tier: 2,
    lede: 'The reservation lies between the Tongue River and Rosebud Creek. The tribe\'s 1991 compact was tied to rebuilding the Tongue River Dam.',
    stats: [['1991', 'compact ratified'], ['32,500 AF', 'a year from the Tongue River'], ['20,000 AF', 'of that from storage or exchange']],
    body: btn('tongue', 'Tongue River Reservoir'),
    sources: [S.yel] });

  // ----------------------------------------------------------------- lines and areas
  const riverStyle = {
    Missouri: { w: 4.4, reaches: [{ test: lon => lon < -111.25, w: 3.2 }] }, Yellowstone: { w: 4.2, reaches: [{ test: lon => lon < -109.6, w: 3 }] },
    'Clark Fork': { w: 4.2, reaches: [{ test: lon => lon > -113.3, w: 2 }, { test: lon => lon > -114.6, w: 3 }] }, Columbia: { w: 4.2 },
    Flathead: { w: 3.6 }, Kootenay: { w: 3.6 }, Kootenai: { w: 3.6 }, Bighorn: { w: 3 }, Milk: { w: 2 }, Marias: { w: 2.2 }, Musselshell: { w: 1.6 },
    Madison: { w: 2.2 }, Jefferson: { w: 2.4 }, Gallatin: { w: 2 }, 'Big Hole': { w: 1.8 }, Beaverhead: { w: 1.6 }, 'Red Rock': { w: 1.2 }, Bitterroot: { w: 2.2 }, Blackfoot: { w: 2 },
    Sun: { w: 1.6 }, Teton: { w: 1.2 }, Tongue: { w: 1.5 }, Powder: { w: 1.6 }, Smith: { w: 1.3 }, Judith: { w: 1.3 }, 'St. Mary': { w: 1.7 },
    'S.  Fk.  Flathead': { w: 2 }, 'Middle Fk.  Flathead': { w: 2 }, 'North Fork Flathead': { w: 2 }, 'Clarks Fk.  Yellowstone': { w: 1.8 }, Stillwater: { w: 1.5 },
    'Little Bighorn': { w: 1.3 }, 'Little Missouri': { w: 1.4 }, Swan: { w: 1.2 }, Poplar: { w: 1.1 }, 'Two Medicine': { w: 1.2 }, 'Cut Bank Creek': { w: 1.1 }, Dearborn: { w: 1.1 }, Boulder: { w: 1.1 },
  };
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const kootenai = rv('The Kootenai enters Montana from British Columbia, fills Lake Koocanusa, and leaves for Idaho at the lowest point in the state.',
    [['10M AF', 'a year flows out of Montana, on average'], ['7M AF', 'of that arrives from Canada']], btn('libby', 'Libby Dam'), [S.swp, S.cfk]);
  const rivers = {
    Missouri: rv('The Missouri begins at Three Forks and crosses the whole state. Dams hold it at Canyon Ferry, Great Falls and Fort Peck.',
      [['7M AF', 'a year flows out of Montana, on average'], ['18%', 'of Montana\'s water comes from the Missouri basins, which cover over half the state']],
      btn('threeforks', 'Where it begins') + btn('greatfalls', 'The dams at Great Falls') + btn('fortpeck', 'Fort Peck'), [S.swp, S.fs3]),
    Yellowstone: rv('The longest free-flowing river in the lower 48 states. No dam stores water on the main river.',
      [['9M AF', 'a year flows out of Montana, on average'], ['2M AF', 'a year arrives from Wyoming on the main river']],
      '<p>The state holds a right to keep 5.5 million AF a year in the river at Sidney for fish.</p>' + btn('yellowstone', 'More on the river') + btn('intake', 'The diversion dam at Intake'), [S.swp, S.yel]),
    'Clark Fork': rv('The Clark Fork starts near Butte and carries more water out of Montana than any other river.',
      [['15M AF', 'a year flows out of Montana, on average'], ['59%', 'of Montana\'s water comes from the Clark Fork and Kootenai basins, on 17% of the land']],
      btn('berkeley', 'Its source at Butte') + btn('milltown', 'Milltown') + btn('noxon', 'Noxon Rapids Dam'), [S.swp, S.fs3]),
    Columbia: rv('Below Lake Pend Oreille in Idaho, the Clark Fork\'s water continues toward the Columbia River.', [], btn('noxon', 'Noxon Rapids Dam'), [S.swp]),
    Flathead: rv('The Flathead drains Glacier National Park and the Bob Marshall Wilderness, fills Flathead Lake, and joins the Clark Fork.',
      [['8.4M AF', 'a year, on average'], ['2.2M AF', 'a year arrives from Canada down the North Fork']], btn('skq', 'Flathead Lake and SKQ Dam') + btn('hungryhorse', 'Hungry Horse Dam'), [S.cfk, S.swp]),
    Kootenay: kootenai, Kootenai: kootenai,
    Bighorn: rv('The Yellowstone\'s largest tributary. It arrives from Wyoming through Bighorn Lake.', [['2M AF', 'a year flows in from Wyoming, on average']], btn('yellowtail', 'Yellowtail Dam') + btn('crow', 'The Crow Tribe'), [S.swp]),
    Milk: rv('The Milk rises on the Blackfeet Reservation, loops through Alberta and returns to Montana. Much of its summer flow is St. Mary River water added by canal.',
      [['178,500 AF', 'a year brought in from the St. Mary River, on average'], ['0.4M AF', 'a year enters Montana from Canada']], btn('stmary', 'The St. Mary Canal') + btn('milkfarms', 'Milk River farms'), [S.lmo, S.swp]),
    'St. Mary': rv('The St. Mary River flows north from Glacier National Park into Canada and on toward Hudson Bay. A canal takes part of it east to the Milk River.', [['58%', 'of normal: basin snowpack on 1 Apr 2026']], btn('stmary', 'The St. Mary Canal') + btn('triple', 'Triple Divide Peak'), [S.nrcs, S.lmo]),
    Marias: rv('The Marias gathers streams from the Rocky Mountain Front and is held at Tiber Reservoir.', [], btn('tiber', 'Tiber Reservoir'), [S.umo]),
    Sun: rv('The Sun River leaves the mountains at Gibson Reservoir. Much of its flow is sent to farms on the Fairfield Bench.', [], btn('gibson', 'Gibson Reservoir') + btn('greenfields', 'Fairfield Bench farms'), [S.umo]),
    Madison: rv('The Madison rises in Yellowstone National Park and is one of the three forks of the Missouri.', [['61%', 'of normal: basin snowpack on 1 Apr 2026']], btn('hebgen', 'Hebgen Lake') + btn('threeforks', 'Where the Missouri begins'), [S.umo, S.nrcs]),
    Jefferson: rv('The Jefferson is formed by the Beaverhead and Big Hole rivers and is one of the three forks of the Missouri.', [['Mid-June 2026', 'record low flow for the date']], btn('threeforks', 'Where the Missouri begins'), [S.summer, S.umo]),
    Gallatin: rv('The Gallatin rises in Yellowstone National Park, waters the valley around Bozeman, and is one of the three forks of the Missouri.', [['63%', 'of normal: basin snowpack on 1 Apr 2026']], btn('bozeman', 'Bozeman') + btn('gallatinwells', 'Wells that need no permit'), [S.umo, S.nrcs]),
    'Big Hole': rv('A trout river in a high valley of hay ranches.', [['29 Jul 2026', 'afternoon fishing banned on the whole river']], btn('bighole', 'More on the Big Hole'), [S.bhwc]),
    Beaverhead: rv('The Beaverhead flows from Clark Canyon Reservoir past Dillon.', [], btn('clarkcanyon', 'Clark Canyon Reservoir') + btn('beaverhead', 'Beaverhead Valley farms'), [S.umo]),
    Bitterroot: rv('The Bitterroot runs north through its valley to join the Clark Fork at Missoula.', [['85,875', 'acres irrigated in the valley']], btn('bitterroot', 'Bitterroot Valley'), [S.cfk]),
    Blackfoot: rv('The Blackfoot joins the Clark Fork at Milltown, just above Missoula.', [], btn('milltown', 'Milltown'), [S.cfk]),
    'S.  Fk.  Flathead': rv('The South Fork flows out of the Bob Marshall Wilderness into Hungry Horse Reservoir.', [['2.5M AF', 'a year, on average']], btn('hungryhorse', 'Hungry Horse Dam'), [S.cfk]),
    Tongue: rv('The Tongue flows north from Wyoming. A 1950 compact divides it between the two states.', [['49%', 'of normal: basin snowpack on 1 Apr 2026']], btn('tongue', 'Tongue River Reservoir'), [S.yel, S.nrcs]),
    Powder: rv('A muddy prairie river that flows north from Wyoming to the Yellowstone.', [['26%', 'of normal: basin snowpack on 1 Apr 2026'], ['Mid-June 2026', 'record low flow for the date']], '', [S.nrcs, S.summer]),
    Musselshell: rv('A prairie river that runs 340 miles to Fort Peck Lake.', [], btn('musselshell', 'More on the Musselshell'), [S.lmo]),
    'Silver Bow Creek': rv('The creek through Butte, and the start of the Clark Fork River. Treated water from the Berkeley Pit is released into it.', [], btn('berkeley', 'The Berkeley Pit'), [S.pitFaq]),
    'Swiftcurrent Creek': rv('A creek in Glacier National Park, dammed at Lake Sherburne to store water for the St. Mary Canal.', [], btn('sherburne', 'Lake Sherburne'), [S.lmo]),
    _default: rv('One of the streams that carry Montana\'s mountain snow down to the Missouri, the Yellowstone or the Columbia.', [], '', [S.swp]),
  };
  const milkCanal = { lede: 'A canal of the Milk River Project, which waters farms along the Milk River.', body: btn('milkfarms', 'Milk River farms'), sources: [S.lmo, S.osm] };
  const canals = {
    'St. Mary Canal': { kind: 'Canal between river basins', lede: 'Carries water from the St. Mary River across a low divide to the North Fork of the Milk River. Two siphons take it across valleys on the way.',
      stats: [['17 Jun 2024', 'the St. Mary siphon failed'], ['25 Jun 2025', 'water flowed again']], body: btn('stmary', 'More on the canal'), sources: [S.siphon, S.gisSm] },
    'Lower Yellowstone Main Canal': { lede: 'The main canal of the Lower Yellowstone Project. It starts at Intake Diversion Dam and runs down the valley past Sidney into North Dakota.',
      stats: [['71 mi', 'long'], ['58,000', 'acres watered']], body: btn('intake', 'Intake Diversion Dam') + btn('loweryellowstone', 'Lower Yellowstone farms'), sources: [S.lyp, S.osm] },
    'Billings Bench Canal': { lede: 'An irrigation canal that runs through Billings. The city\'s new West End treatment plant will take Yellowstone River water through it.', body: btn('billings', 'Billings'), sources: [S.westEnd, S.osm] },
    'Big Ditch': { lede: 'One of the old irrigation canals of the Yellowstone valley west of Billings.', body: btn('huntley', 'Yellowstone valley farms'), sources: [S.osm] },
    'Bighorn Canal': { lede: 'An irrigation canal along the Bighorn River on the Crow Reservation.', body: btn('crow', 'The Crow Tribe'), sources: [S.osm] },
    'Dodson South Canal': milkCanal, 'Vandalia South Canal': milkCanal, 'Nelson South Canal': milkCanal,
    'Bitter Root Irrigation District Canal': { lede: 'The main canal on the east side of the Bitterroot Valley. It carries water stored in Lake Como.', body: btn('bitterroot', 'Bitterroot Valley'), sources: [S.cfk, S.osm] },
    'Two Medicine Canal': { lede: 'A canal of the irrigation project on the Blackfeet Reservation.', body: btn('blackfeet', 'The Blackfeet Nation'), sources: [S.osm] },
    'Pablo Feeder Canal': { lede: 'A canal of the Flathead irrigation project. It collects streams from the Mission Mountains for the farms below.', body: btn('missionvalley', 'Mission Valley farms'), sources: [S.cskt, S.osm] },
    'Helena Valley Canal': { lede: 'Carries water pumped from Canyon Ferry Lake to farms in the Helena Valley.', body: btn('canyonferry', 'Canyon Ferry Lake') + btn('helena', 'Helena'), sources: [S.umo, S.osm] },
    'East Bench Canal': { lede: 'Carries water from the Beaverhead River to farms on the bench east of Dillon.', body: btn('beaverhead', 'Beaverhead Valley farms'), sources: [S.osm] },
    'Greenfields Canal': { lede: 'Part of the canal system that brings Sun River water to the Fairfield Bench.', body: btn('greenfields', 'Fairfield Bench farms'), sources: [S.umo, S.osm] },
    _default: { lede: 'An irrigation canal that carries river water to farm fields.', body: '<p>Montana has thousands of ditches like this one. Only some of the larger ones are drawn. About 10.4 million AF a year is diverted for irrigation statewide, and about 23% of it is used up by crops.</p>', sources: [S.swp, S.osm] },
  };
  const cgBase = '<p>The state can designate a controlled groundwater area to protect the amount or the quality of groundwater. Inside one, special rules apply to new wells.</p>';
  const clBase = '<p>In a closed basin the state grants no new rights to river water, with narrow exceptions. A new large well can be approved only if its effect on streams is made up with water from an existing right. Small household wells are exempt.</p>';
  const amas = {
    'Powder River Basin': { lede: 'The largest controlled groundwater area in Montana, in the coal country of the southeast.', stats: [['4.5M acres', 'area'], ['December 1999', 'designated']], body: cgBase + btn('powdercgwa', 'More on this area'), sources: [S.gis, S.cfk] },
    'Yellowstone Controlled Groundwater Area': { lede: 'A controlled groundwater area beside Yellowstone National Park. It was set up under Montana\'s water compact with the National Park Service.', stats: [['854,000 acres', 'area'], ['1994', 'the compact was signed']], body: cgBase, sources: [S.gis, S.swp] },
    'South Pine': { lede: 'A controlled groundwater area on the plains near the North Dakota line.', stats: [['107,000 acres', 'area']], body: cgBase, sources: [S.gis, S.cfk] },
    'Horse Creek': { lede: 'A controlled groundwater area in Stillwater County. Each original parcel may have one small well without a permit. Lawn watering can be restricted in dry spells.', stats: [['8,000 acres', 'area'], ['2012', 'designated']], body: cgBase, sources: [S.gis, S.wellData] },
    'Butte Alluvial and Bedrock Site': { lede: 'A controlled groundwater area over the old mine workings of Butte.', stats: [['5,500 acres', 'area'], ['2009', 'designated']], body: cgBase + btn('berkeley', 'The Berkeley Pit'), sources: [S.gis, S.cfk] },
    'Warm Springs Ponds': { lede: 'A controlled groundwater area around the ponds built to catch mine waste at the head of the Clark Fork River.', stats: [['2,900 acres', 'area'], ['1995', 'designated']], body: cgBase + btn('milltown', 'Mine waste on the Clark Fork'), sources: [S.gis, S.cfk] },
    _cgwa: { lede: 'A controlled groundwater area.', body: cgBase, sources: [S.gis, S.cfk] },
    'Upper Missouri Basin': { lede: 'The Missouri and its tributaries above Morony Dam, near Great Falls. Closed to most new water rights since 1993.', stats: [['16 Apr 1993', 'closed by state law']], body: clBase + btn('closed', 'More on closed basins') + btn('greatfalls', 'The dams at Great Falls'), sources: [S.umo, S.gis] },
    _closure: { lede: 'One of five river basins that state law has closed to most new water rights.', body: clBase + btn('closed', 'More on closed basins') + btn('gallatinwells', 'The exception for small wells'), sources: [S.swp, S.gis] },
    _default: { lede: 'A controlled groundwater area.', body: cgBase, sources: [S.gis, S.cfk] },
  };
  const tr = (lede, id, label, sources) => ({ lede, body: btn(id, label), sources });
  const tribes = {
    Flathead: tr('The Flathead Indian Reservation, home of the Confederated Salish and Kootenai Tribes. Their water compact took effect in 2021.', 'cskt', 'The tribes\' water compact', [S.cskt, S.frwmb]),
    Blackfeet: tr('The Blackfeet Indian Reservation. The legislature approved the tribe\'s water compact in 2009.', 'blackfeet', 'The Blackfeet Nation', [S.lmo]),
    'Fort Belknap': tr('The Fort Belknap Reservation, home of the Gros Ventre and Assiniboine. A 1908 Supreme Court case here set the rule for tribal water rights.', 'belknap', 'Fort Belknap and the Winters case', [S.lmo, S.belknap]),
    'Rocky Boy\'s': tr('The Rocky Boy\'s Reservation, home of the Chippewa Cree Tribe. Its water compact took effect in 1999.', 'rockyboy', 'The Chippewa Cree Tribe', [S.lmo]),
    'Fort Peck': tr('The Fort Peck Reservation, home of the Assiniboine and Sioux Tribes. Their 1985 compact was Montana\'s first.', 'fortpecktribes', 'The Fort Peck compact', [S.lmo]),
    Crow: tr('The Crow Indian Reservation. The tribe\'s compact gives it water from the Bighorn River and from Bighorn Lake.', 'crow', 'The Crow Tribe\'s water', [S.yel]),
    'Northern Cheyenne': tr('The Northern Cheyenne Indian Reservation. The tribe\'s compact dates from 1991.', 'cheyenne', 'The Northern Cheyenne Tribe', [S.yel]),
    'Turtle Mountain': { lede: 'Scattered parcels in Montana held in trust for members of the Turtle Mountain Band of Chippewa, whose reservation is in North Dakota.', sources: [S.compacts] },
    _default: { lede: 'This reservation lies outside Montana. Montana has seven Indian reservations, and each has a water compact with the state.', sources: [S.compacts] },
  };

  window.MAPCONTENT = {
    meta: { title: 'Montana Water: an explorable map', h1: 'Montana Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of Montana's water system. Use the lists in the side panel to browse the same information without the map.", home: 'Show all of Montana' },
    features: F, riverStyle, rivers, canals, amas, tribes,
    kinds: {
      source: ['rivers', 'river', 'River source'], riverpt: ['rivers', 'river', 'River'], glacier: ['rivers', 'snow', 'Glaciers'], law: ['rivers', 'info', 'Water law'],
      canalpt: ['canals', 'canal', 'Canal'], tribe: ['cities', 'tribe', 'Tribal nation'], well: ['ground', 'well', 'Groundwater'], rule: ['ground', 'aquifer', 'Water rules'],
      farm: ['farms', 'farm', 'Farming region'], mine: ['industry', 'mine', 'Mine'], oil: ['industry', 'oil', 'Oil and gas'],
    },
    sprites: {
      oil: ['.kk...........', '.kkkkkkkkkkk..', '.kk..kk....k..', '.....kk....k..', '....kyyk...k..', '...kyyyyk..k..', 'tttttttttttttt'],
    },
    layers: { golf: false, canals: { label: 'Canals' } },
    majorCanals: ['stmary'], canalWidths: { stmary: 2.6 }, canalSub: { stmary: 'Canal between river basins' },
    riverNames: { Kootenay: 'Kootenai River', 'S.  Fk.  Flathead': 'South Fork Flathead River', 'Middle Fk.  Flathead': 'Middle Fork Flathead River', 'Clarks Fk.  Yellowstone': 'Clarks Fork of the Yellowstone',
      'Big Muddy Cr.': 'Big Muddy Creek', 'Big Dry': 'Big Dry Creek', Beaver: 'Beaver Creek', 'S.  Fk.   of the Grand': 'South Fork Grand River', 'S.  Fk.  Shoshone': 'South Fork Shoshone River',
      'Middle Fk.  Salmon': 'Middle Fork Salmon River', 'Middle Fk.  Clearwater': 'Middle Fork Clearwater River', 'Saint Joe': 'St. Joe River', Lodge: 'Lodge Creek', Long: 'Long Creek' },
    areaKind: n => /Basins?$/.test(n) && n !== 'Powder River Basin' && n !== 'Hayes Creek Basin' ? 'Basin closed to new water rights' : 'Controlled groundwater area',
    areaAlt: n => /Basins?$/.test(n) && n !== 'Powder River Basin' && n !== 'Hayes Creek Basin',
    areaLabels: { 'Upper Missouri Basin': { at: [-111.3, 47.05], minZ: .25 }, 'Jefferson and Madison Basins': { at: [-112.3, 45.35], minZ: .3 }, 'Upper Clark Fork Basin': { minZ: .3 }, 'Bitterroot Basin': { minZ: .35 }, 'Teton Basin': { minZ: .35 },
      'Powder River Basin': { minZ: .25 }, 'Yellowstone Controlled Groundwater Area': { minZ: .6 }, 'South Pine': { minZ: .5 }, 'Horse Creek': { minZ: .9 }, 'Hayes Creek Basin': { minZ: 1.4 }, 'Warm Springs Ponds': { minZ: 1.2 },
      'Bozeman Solvent Site': { minZ: 1.4 }, 'Butte Alluvial and Bedrock Site': { minZ: 1.2 }, 'East Valley Zone 1': { minZ: 1.4 } },
    fieldSub: 'Farm fields', farmRadiusKm: 55,
    hud: [['3.6M AF', 'water consumed per year'], ['44M AF', 'flows out of the state each year'], ['84 of 250', 'snow sites at a record low, 1 Apr 2026']],
    budget: {
      title: 'Montana consumes about 3.6 million acre-feet a year',
      lede: 'Almost 44 million acre-feet of water flows out of Montana in an average year, and 65% of it starts inside the state. Montana uses up about 3.6 million. The rest goes on to the Columbia, the Missouri and Hudson Bay.',
      perDrop: 50000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons.',
      sources: [
        { id: 'umo', label: 'Upper Missouri basin', pct: 33, af: 1.179e6, color: '#3a7cc4', layer: 'rivers,reservoirs', feat: 'threeforks', note: 'The Missouri and its tributaries above Fort Peck Lake, from Dillon and Bozeman to Great Falls.' },
        { id: 'lmo', label: 'Lower Missouri basin', pct: 30, af: 1.085e6, color: '#7fb0e6', layer: 'rivers,reservoirs', feat: 'fortpeck', note: 'Fort Peck Lake, the Milk and the Musselshell. More than half of this is evaporation from reservoirs.' },
        { id: 'cfk', label: 'Clark Fork and Kootenai basins', pct: 19, af: 0.669e6, color: '#3f9a8f', layer: 'rivers,reservoirs', feat: 'skq', note: 'West of the Continental Divide: Missoula, the Bitterroot and the Flathead.' },
        { id: 'yel', label: 'Yellowstone basin', pct: 18, af: 0.651e6, color: '#d9a441', layer: 'rivers,reservoirs', feat: 'yellowstone', note: 'The Yellowstone and its tributaries, from Livingston to Sidney.' },
      ],
      uses: [
        { id: 'ag', label: 'Farms', pct: 67, af: 2.414e6, color: 'var(--c-ag)', layer: 'farms', feat: 'milkfarms', note: 'Irrigated hay, pasture, grain and sugar beets on about 2.5 million acres.' },
        { id: 'evap', label: 'Evaporation from reservoirs', pct: 28, af: 1.002e6, color: '#8fc4f2', layer: 'reservoirs', feat: 'fortpeck', note: 'Water lost to the air from reservoir surfaces. The largest share is in the lower Missouri basin, where Fort Peck Lake is.' },
        { id: 'other', label: 'Towns, livestock and industry', pct: 5, af: 0.168e6, color: 'var(--c-muni)', layer: 'cities,industry', feat: 'billings', note: 'Public water systems, household wells, stock water, factories and power plants.' },
      ],
      body: `<div class="note">These figures count water <b>consumed</b>: used up by crops, people, industry and evaporation and not returned to a river. They come from the 2015 Montana State Water Plan, the state's most recent, and describe use around 2010. The basin and sector volumes are added up from the plan's four basin charts. About 98% of the water taken for use in Montana comes from rivers and 2% from wells (US Geological Survey, 2015).</div>
        <div class="note">Counted another way, as water <b>taken out</b> of rivers and wells, farms divert about 10.4 million AF a year. Most of that seeps or drains back and is used again. Another 72 million AF a year passes through power dams and stays in the river.</div>
        <div class="note hot"><b>What is changing:</b> Winter 2025–26 was the warmest on record in Montana. Snow below about 6,500 feet melted a month early, and 2026 was the sixth year in a row with drought somewhere in the state. <button class="btn" data-feat="snow" style="margin-top:6px">See the snowpack</button></div>`,
    },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a reservoir, a river, a field, a canal, or open land.',
    browse: [
      ['Snow, rivers and rules', ['snow', 'triple', 'glaciers', 'threeforks', 'yellowstone', 'bighole', 'musselshell', 'milltown', 'watercourt']],
      ['Dams and reservoirs', ['fortpeck', 'canyonferry', 'greatfalls', 'tiber', 'gibson', 'clarkcanyon', 'hebgen', 'yellowtail', 'tongue', 'fresno', 'sherburne', 'hungryhorse', 'libby', 'skq', 'noxon']],
      ['Canals and diversions', ['stmary', 'intake']],
      ['Cities', ['billings', 'missoula', 'bozeman', 'helena']],
      ['Farms', ['milkfarms', 'greenfields', 'loweryellowstone', 'huntley', 'bitterroot', 'missionvalley', 'beaverhead']],
      ['Groundwater and closed basins', ['gallatinwells', 'closed', 'powdercgwa']],
      ['Tribes', ['cskt', 'blackfeet', 'belknap', 'rockyboy', 'fortpecktribes', 'crow', 'cheyenne']],
      ['Industry', ['berkeley', 'colstrip', 'bakken']],
    ],
    riverLabels: [['MISSOURI RIVER', -109.3, 47.72, .32, -4], ['MISSOURI R.', -111.75, 46.25, .6, -55], ['YELLOWSTONE RIVER', -106.2, 46.42, .32, -22], ['YELLOWSTONE R.', -109.6, 45.72, .6, -8], ['CLARK FORK', -114.85, 47.3, .45, -35],
      ['FLATHEAD R.', -114.55, 47.42, .7, 20], ['KOOTENAI R.', -115.75, 48.5, .6, 10], ['MILK RIVER', -108.3, 48.52, .45, -6], ['MARIAS R.', -111.9, 48.42, .6, -8], ['MUSSELSHELL R.', -108.9, 46.42, .6, 0],
      ['BIGHORN R.', -107.65, 45.75, .6, -60], ['POWDER R.', -105.55, 45.6, .6, -62], ['TONGUE R.', -106.3, 45.75, .7, -55], ['BITTERROOT R.', -114.2, 46.5, .8, -85], ['BIG HOLE R.', -113.3, 45.72, .8, -30]],
    neighbors: [['BRITISH COLUMBIA', -115.3, 49.11, 0], ['ALBERTA', -112.3, 49.11, 0], ['SASKATCHEWAN', -106.6, 49.11, 0], ['IDAHO', -115.35, 46.0, -62], ['WYOMING', -105.9, 44.72, 0], ['N. DAKOTA', -103.87, 47.6, 90], ['S. DAKOTA', -103.87, 45.4, 90]],
    spot: {
      rain: inches => `${inches < 13 ? 'Dry country.' : inches < 18 ? 'Semi-arid country.' : inches < 30 ? 'Wetter foothill or mountain country.' : 'High mountain country. Most of this falls as snow, and this is where the rivers start.'} Most of the water Montana uses comes from mountain snow, not from rain where people live.`,
      crop: 'cropland', rest: 'grassland, sagebrush or rock', restAlone: 'Grassland, sagebrush or bare rock', rulesTitle: 'Water rules here',
      area: n => /Basins?$/.test(n) && n !== 'Powder River Basin' && n !== 'Hayes Creek Basin'
        ? 'State law has closed this basin to most new water rights, because the rivers are already fully claimed. A new large well can be approved only if its effect on streams is made up with water from an existing right. Small household wells are exempt.'
        : 'This is a controlled groundwater area. The state sets these up to protect the amount or the quality of groundwater, and special rules apply to new wells here.',
      basin: n => `This spot is in the <b>${n}</b> planning basin, one of the regions Montana uses for its State Water Plan. `,
      none: 'Water here is shared by seniority: when a stream runs short, older rights are served first. A new use of river water or a large well needs a state permit. A small well, pumping up to 35 gallons a minute and 10 acre-feet a year, needs none.',
      tribal: 'Each of Montana\'s seven reservations has a water compact negotiated with the state. Tribal water rights usually date from the founding of the reservation, which makes them among the oldest on their rivers.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain and snow: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'], S.swp, S.wells, S.compacts],
    },
    legend: {
      rain: 'The plains get 10 to 16 inches a year. The wettest mountains of the northwest get more than 80. PRISM 1991–2020 normals.',
      groundA: 'Controlled groundwater area', groundB: 'Basin closed to new water rights',
      ground: 'Dashed white lines are the state\'s water planning basins. Outside the shaded areas, a new water right is still possible where unclaimed water can be shown.',
      snow: 'Where snow usually builds up (drawn from elevation and precipitation; not a live snow map). In 2026 the lower slopes lost their snow a month early.',
    },
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 3.5 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rain and snow (PRISM 1991–2020 normals). The satellite data shows all cropland, whether or not it is irrigated; most of the wheat land on Montana's plains is not. Large rivers and lakes are from Natural Earth. Smaller rivers, reservoir outlines and most canals are from OpenStreetMap contributors. The St. Mary Canal, the controlled groundwater areas, the closed basins and the planning basins are from the Montana Department of Natural Resources and Conservation. Only the five basins closed by state law are shaded; closures made by agency rule or by compact are not drawn. Tribal lands are from the Census Bureau. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. Figures are as of November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'A state where rivers start', text: 'Almost 44 million acre-feet of water flows out of Montana in an average year. About two-thirds of it starts inside the state. Montana uses up about 3.6 million. The panel shows where that water is used and what uses it.', view: 'home', home: true },
      { title: 'One peak, three seas', text: 'Rain on Triple Divide Peak, in Glacier National Park, can flow to the Pacific, to the Gulf of Mexico or to Hudson Bay. The mountains of western Montana cover 17% of the state and supply 59% of its water.', box: [-115.0, 47.6, -112.0, 49.05], zoom: 1.1, select: 'triple', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'It arrives as snow', text: 'The white areas are where snow usually builds up in winter. Winter 2025–26 was the warmest on record. On 1 April 2026, 84 of 250 long-running snow sites had their lowest reading for the date, and the lower slopes had already melted.', view: 'home', season: 'winter', select: 'snow', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'A canal that broke', text: 'The highlighted line is the St. Mary Canal. It carries water from Glacier National Park to the Milk River, for 110,000 acres of farms. On 17 June 2024 its two main pipes burst. A new siphon carried water again a year later.', box: [-113.75, 48.6, -112.6, 49.02], zoom: 2.2, select: 'stmary', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Two-thirds goes to farms', text: 'Farms use up about 67% of the water consumed in Montana, mostly growing hay. Along the Milk River, irrigated fields follow the river. Most of the cropland around them is wheat watered only by rain.', lon: -108.2, lat: 48.35, zoom: .8, select: 'milkfarms', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'A reservoir that evaporates', text: 'Fort Peck Lake holds 18.5 million acre-feet, more than any other reservoir in Montana. Evaporation from reservoirs makes up 28% of all the water the state consumes, and the largest share is in this basin.', box: [-108.6, 47.2, -105.6, 48.4], zoom: 1, select: 'fortpeck', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'The river with no dam', text: 'The Yellowstone is the longest free-flowing river in the lower 48 states. Farms and towns along it depend on each summer\'s flow. In mid-June 2026 it set record lows for the date.', box: [-111.2, 45.0, -104.0, 47.9], zoom: .7, select: 'yellowstone', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Basins with no water left to claim', text: 'The pale areas are river basins that state law has closed to most new water rights. Small wells are exempt, and in growing valleys like the Gallatin many new homes use them. Cities and irrigators sued over that rule in November 2025.', box: [-114.8, 44.6, -109.8, 48.1], zoom: .8, select: 'gallatinwells', layers: ['rivers', 'ground', 'cities'] },
      { title: 'A pit that must not fill', text: 'The Berkeley Pit in Butte is an old copper mine full of acidic water. Pumps hold the water below 5,410 feet so that it cannot spread into the valley. On 3 August 2026 it stood at 5,357.91 feet.', lon: -112.5, lat: 46.02, zoom: 1.5, select: 'berkeley', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'industry'] },
      { title: 'The oldest rights', text: 'A 1908 court case from the Fort Belknap Reservation established that tribes hold water rights dating from the founding of their reservations. All seven Montana reservations now have water compacts. Fort Belknap\'s still awaits Congress. Now explore: click any reservoir, river, field or patch of open land.', view: 'home', select: 'belknap', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry', 'tribal'] },
    ],
    terrain: {
      // snow line: lower in the wet northwest, higher in the dry southwest valleys (Big Hole, Beaverhead, Centennial) and on the plains
      snowLine: (lat, p) => 1960 + (46.5 - lat) * 60 - Math.max(-250, Math.min(600, (p - 16) * 30)),
      alpine: 2600, saguaro: () => false,
      pivot: (lon, lat) => lon < -111.0 && lon > -113.2 && lat < 46.5,
      redrock: () => 0,
    },
  };
})();
