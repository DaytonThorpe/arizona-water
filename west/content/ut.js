/* Utah. Every figure has a source link on its card. Fact sheet and verification log: research/utah.md.
   Winter 2025-26 was the lowest snowpack on record in Utah, so 2026 storage and flow readings are
   labelled as that year's readings, not as typical values. Figures are as of 12 November 2026. */
(() => {
  const S = {
    budget: ['Utah Division of Water Resources: Utah Water Budget, Dec 2025', 'https://water.utah.gov/wp-content/uploads/2025/12/Utah-Water-Budget-Handout.pdf'],
    plan: ['Western Water on the draft 2026 State Water Plan, 27 Jul 2026', 'https://www.western-water.com/2026/07/27/utah-unveils-draft-2026-water-plan-for-comment/'],
    strike: ['Great Salt Lake Strike Team report, Jan 2026', 'https://d36oiwf74r1rap.cloudfront.net/wp-content/uploads/2026/02/GSL-Jan2026-Final.pdf'],
    usgsGsl: ['USGS lake gauge at Saltair', 'https://waterdata.usgs.gov/monitoring-location/10010000/'],
    uofu: ['University of Utah, Jan 2026', 'https://attheu.utah.edu/research/great-salt-lake-levels-remain-low-yet-salinity-remains-close-to-healthy-targets/'],
    usmag: ['Deseret News, 28 Jan 2026', 'https://www.deseret.com/environment/2026/01/28/great-salt-lake-us-magnesium-purchase-water-rights'],
    brd: ['Utah Division of Water Resources: Bear River Development', 'https://water.utah.gov/?p=381'],
    wwa: ['Western Water Assessment briefing, 9 Apr 2026', 'https://wwa.colorado.edu/resources/intermountain-west-dashboard/briefing/april-9-2026-co-ut-wy'],
    ksl: ['KSL, 6 Oct 2026', 'https://www.ksl.com/article/51632628/utahs-truly-strange-2026-water-year-has-ended-what-happens-next'],
    des: ['Deseret News, 9 Apr 2026', 'https://www.deseret.com/utah/2026/04/09/utah-collected-a-record-low-snowpack-this-year'],
    nws: ['National Weather Service drought statement, 6 Oct 2026', 'https://www.weather.gov/media/slc/DGT/DGT_SLC_10062026.txt'],
    nrcs: ['NRCS reservoir readings, 1 Nov 2026', 'https://wcc.sc.egov.usda.gov/reportGenerator/view/customMultipleStationReport/monthly/start_of_period/state=%22UT%22%20AND%20element=%22RESC%22%20AND%20outServiceDate=%222100-01-01%22%7Cname/2026-10-01,2026-11-01/stationId,name,RESC::value,RESC::median_1991,RESC::pctOfMedian_1991'],
    cap: ['NRCS: reservoir capacities', 'https://wcc.sc.egov.usda.gov/awdbRestApi/services/v1/stations?stationTriplets=*:UT:BOR&returnReservoirMetadata=true&returnStationElements=false'],
    ms24: ['Reclamation 24-Month Study, Oct 2026', 'https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf'],
    cul: ['Reclamation: Upper Basin water use, 2021–2025', 'https://www.usbr.gov/uc/DocLibrary/Reports/ConsumptiveUsesLosses/uc-ucrb-provisionalconsumptiveusesandlosses-2021-2025-508-20251200.pdf'],
    ap: ['Associated Press via PBS, 16 Aug 2026', 'https://www.pbs.org/newshour/nation/lake-powell-hits-record-low-threatening-key-water-and-electricity-supply-for-millions'],
    upr: ['Utah Public Radio, 26 Aug 2026', 'https://www.upr.org/environment/2026-08-26/colorado-river-voluntary-upper-basin-conservation'],
    trib: ['Salt Lake Tribune, 30 Sep 2026', 'https://sltrib.com/news/environment/2026/09/30/utahs-colorado-river-conservation'],
    cra: ['Colorado River Authority of Utah', 'https://cra.utah.gov/'],
    crs: ['Congressional Research Service, Oct 2026', 'https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf'],
    cupOver: ['Interior Department: Central Utah Project overview', 'https://www.doi.gov/cupcao/Overview'],
    cupSacs: ['Interior Department: Strawberry Aqueduct and Collection System', 'https://www.doi.gov/cupcao/strawberry-aqueduct-and-collection-system'],
    cupDf: ['Interior Department: Diamond Fork System', 'https://www.doi.gov/cupcao/diamond-fork-system'],
    slc: ['Salt Lake City Mayor\'s Office, 19 Mar 2026', 'https://www.slc.gov/mayor/2026/03/19/mayor-mendenhall-responds-to-drought-calls-for-water-conservation-efforts-heading-into-warmer-weather/'],
    kuer: ['KUER, 29 Jun 2026', 'https://www.kuer.org/science-environment/2026-06-29/how-fast-pineview-reservoir-refills-after-pipeline-repair-is-up-to-mother-nature'],
    pcUtah: ['Central Utah Water Conservancy District: 2024 per-person use report', 'https://www.waterrights.utah.gov/per-capita-consumptive-use/Reports/2024-Utah.pdf'],
    pcWeber: ['Weber Basin Water Conservancy District: 2024 per-person use report', 'https://waterrights.utah.gov/per-capita-consumptive-use/Reports/2024-Davis-Weber.pdf'],
    pcWash: ['Washington County Water Conservancy District: 2024 per-person use report', 'https://waterrights.utah.gov/per-capita-consumptive-use/Reports/2024-Washington.pdf'],
    meter: ['Utah Division of Water Resources: secondary metering', 'https://water.utah.gov/secondary-metering'],
    wcUse: ['Washington County Water Conservancy District: water use and supply', 'https://www.wcwcd.gov/use/'],
    wcTrib: ['Salt Lake Tribune, 14 Sep 2026', 'https://www.sltrib.com/news/2026/09/14/southern-utah-water-district-plans/'],
    lpp: ['Utah Division of Water Resources, Jun 2020', 'https://water.utah.gov/lake-powell-pipeline-draft-eis-issued/'],
    lppFox: ['Fox 13: pipeline moved to the back burner', 'https://www.fox13now.com/news/local-news/lake-powell-pipeline-is-moved-to-the-backburner'],
    cedar: ['Central Iron County Water Conservancy District, 2 Mar 2026', 'https://cedarvalleywaterutah.gov/2026/03/02/water-conservancy-celebrates-federal-approval-of-the-pine-valley-water-supply-project/'],
    cedarFact: ['Central Iron County Water Conservancy District: project fact sheet', 'https://cedarvalleywaterutah.gov/fact-sheet-basin-14/'],
    cedarPlan: ['Utah Division of Water Rights: Cedar City Valley plan', 'https://waterrights.utah.gov/groundwater/ManagementReports/CedarValley/CedarValley.asp'],
    beryl: ['Utah Division of Water Rights: Beryl-Enterprise plan', 'https://waterrights.utah.gov/groundwater/ManagementReports/BerylEnt/berylEnterprise.asp'],
    parowan: ['Utah Division of Water Rights: Parowan Valley plan', 'https://waterrights.utah.gov/groundwater/ManagementReports/Parowan/Parowan.asp'],
    pahvant: ['Utah Division of Water Rights: Pahvant Valley', 'https://waterrights.utah.gov/groundwater/ManagementReports/Pahvant/Pahvant.asp'],
    gmp: ['Utah Division of Water Rights: groundwater management plans', 'https://waterrights.utah.gov/groundwater/ManagementReports/'],
    law: ['Utah Division of Water Rights: water right information', 'https://waterrights.utah.gov/wrinfo/default.asp'],
    hay: ['KSL, 11 Jan 2025', 'https://www.ksl.com/article/51223842/study-says-2-key-crops-are-harming-great-salt-lake-state-unsure-on-recommendations'],
    stratos: ['Deseret News, 12 May 2026', 'https://www.deseret.com/utah/2026/05/12/everything-about-utah-stratos-project-data-center/'],
    stratosW: ['Standard-Examiner, 8 May 2026', 'https://www.standard.net/news/2026/may/08/company-withdraws-its-bid-for-data-center-water-but-not-because-its-backing-down/'],
    dc: ['Utah Division of Water Rights: data center reporting', 'https://waterrights.utah.gov/data-centers/'],
    navajo: ['Interior Department, 27 May 2022', 'https://www.doi.gov/node/41166'],
    ute: ['Utah Department of Natural Resources: Ute Indian Tribe litigation', 'https://naturalresources.utah.gov/tribes/ute'],
    canalGis: ['Route and capacity: Utah Division of Water Rights canal data', 'https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Canals/FeatureServer/0'],
    policyGis: ['Outline: Utah Division of Water Rights policy areas', 'https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/PolicyService/FeatureServer/0'],
    osm: ['Route: OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'],
  };
  const RES = [S.nrcs, S.cap];
  const F = [];
  const add = o => F.push(o);
  const btn = (id, label) => `<p><button class="btn" data-feat="${id}">${label}</button></p>`;
  const dry = '<p>These are readings from a record-dry year and should not be read as typical.</p>';

  // ----------------------------------------------------------------- snow, rivers, law
  add({ id: 'snow', kind: 'snow', name: 'Mountain snowpack', short: 'Snowpack', lon: -110.95, lat: 40.73, tier: 1,
    lede: 'About 95% of Utah\'s water supply starts as mountain snow. It builds up over the winter and melts into the rivers in spring.',
    stats: [['22%', 'of the median: statewide snowpack on 1 Apr 2026, the lowest on record'], ['8.4 in', 'of water in the snowpack at its 2026 peak in March, the lowest since daily records began in the 1980s'], ['21', 'streams had their lowest snowmelt runoff on record in 2026'], ['20–55%', 'of average: 2026 streamflow forecasts for Utah']],
    body: '<p>Winter 2025–26 was a record-low snow year, and March 2026 was the warmest March on record in Utah. Reservoir and river readings on this map come from that year.</p><p>Switch the season to Winter to see where snow usually builds up.</p>',
    sources: [S.wwa, S.ksl, S.des] });
  add({ id: 'law', kind: 'info', name: 'First in time, first in right', short: 'Water law', lon: -111.888, lat: 40.777, tier: 3,
    lede: 'All water in Utah is public property. A water right is a right to take a set amount and put it to use, and older rights are served before newer ones.',
    stats: [['1897', 'the office of the State Engineer was created'], ['1903', 'the state adopted a full water code'], ['2022', 'a state law began counting water left for Great Salt Lake as a recognized use']],
    body: '<p>The system is called prior appropriation. To get a new right, a person files an application with the Division of Water Rights. The State Engineer, who heads the division, decides whether to approve it.</p><p>Wells are part of the same system. Rights to groundwater that were in use before 1935 can still be claimed on the strength of that early use.</p>',
    sources: [S.law, S.usmag] });
  add({ id: 'coloriver', kind: 'river', name: 'Utah\'s share of the Colorado River', short: 'Colorado River', lon: -109.58, lat: 38.6, tier: 2,
    lede: 'The Colorado River crosses the state\'s southeast corner. A 1948 compact gives Utah 23% of the water available to the four Upper Basin states.',
    stats: [['1.15M AF', 'of Colorado River water consumed by Utah in 2024, including evaporation from reservoirs'], ['766,000 AF', 'of that was consumed by irrigated farms'], ['248,000 AF', 'of that was sent out of the river basin, toward the Wasatch Front and other valleys'], ['200,000 AF', 'a year: the voluntary conservation goal for the four Upper Basin states together']],
    body: '<p>In August 2026 the federal government set rules for 2027 and 2028. Arizona, California and Nevada must give up 1.25 million AF a year. Utah and the other Upper Basin states have no mandatory cut.</p><p>The Green River, which joins the Colorado south of here, carries most of the water Utah uses from this basin.</p>' + btn('greenriver', 'Paying farmers to use less') + btn('cup', 'How the water crosses the mountains'),
    sources: [S.cul, S.crs, S.upr, S.trib] });
  add({ id: 'bearriver', kind: 'river', name: 'Bear River', lon: -112.1, lat: 41.576, tier: 2,
    lede: 'The Bear River is the largest source of water for Great Salt Lake. It loops through Wyoming and Idaho before it reaches the lake here.',
    stats: [['64.4%', 'of the river water reaching Great Salt Lake comes from the Bear, on average'], ['220,000 AF', 'a year: what a 1991 state law planned to develop from the river for cities'], ['2050 or later', 'when the state now expects that water to be needed'], ['8.5 in', 'average drop in the lake level the state estimates the project would cause']],
    body: '<p>The 1991 plan is called Bear River Development. It would build reservoirs and pipelines for four water districts. The state\'s cost estimates range from $1.5 billion to $2.8 billion. Nothing has been built.</p>' + btn('bearfarms', 'Farms on the Bear River') + btn('gsl', 'Great Salt Lake'),
    sources: [S.strike, S.brd] });

  // ----------------------------------------------------------------- Great Salt Lake
  add({ id: 'gsl', kind: 'lake', name: 'Great Salt Lake', lake: 'Great Salt Lake', lon: -112.5, lat: 41.1, tier: 1, zoom: .8,
    lede: 'A salt lake with no outlet. Water leaves only by evaporation, so the lake shrinks when farms and cities upstream use more of the rivers that feed it.',
    stats: [['4,190.0 ft', 'surface level of the south arm, 12 Nov 2026'], ['4,188.5 ft', 'the record low, set in November 2022'], ['4,198 ft', 'the lowest level the state counts as healthy'], ['800,000 AF', 'a year of extra inflow needed to reach 4,198 ft by 2055']],
    body: '<p>Three rivers feed the lake: the Bear, the Weber and the Jordan. Between 2000 and 2025 they delivered about 1.67 million AF a year on average. In 2025 they delivered 1.28 million AF.</p><p>From 2021 to 2025, nearly 400,000 AF in total was set aside and delivered to the lake through leases, donations and reservoir releases.</p>' + btn('bearriver', 'The lake\'s main source') + btn('causeway', 'Why the lake has two halves') + btn('farmington', 'The dry lakebed'),
    sources: [S.usgsGsl, S.strike] });
  add({ id: 'causeway', kind: 'lake', kindLabel: 'Great Salt Lake', name: 'The railroad causeway', short: 'Causeway', lon: -112.7, lat: 41.221, tier: 3,
    lede: 'A rock-fill railroad causeway crosses the lake and splits it into a north arm and a south arm. The three rivers all flow into the south arm.',
    stats: [['9 to 12%', 'salt: the springtime target for the south arm'], ['18%', 'salt in the south arm in 2022, when the lake hit its record low'], ['4,189.6 ft', 'level of the north arm on 11 Nov 2026']],
    body: '<p>The north arm gets almost no fresh water. It stays as salty as water can get.</p><p>The two arms connect through a gap in the causeway. The state raises and lowers a berm in that gap to control how much heavy north-arm brine flows south. Brine shrimp in the south arm need the salt level kept in a narrow range.</p>',
    sources: [S.uofu, S.strike, ['USGS lake gauge at Saline', 'https://waterdata.usgs.gov/monitoring-location/10010100/']] });
  add({ id: 'farmington', kind: 'info', name: 'Farmington Bay: the dry lakebed', short: 'Dry lakebed', lon: -112.07, lat: 40.94, tier: 3,
    lede: 'As the lake shrinks it leaves bare lakebed behind. Wind can lift the dust and carry it over the cities of the Wasatch Front.',
    stats: [['About 800 sq mi', 'of lakebed around the whole lake is exposed to wind'], ['120+ sq mi', 'of that is in Farmington Bay, next to Salt Lake City\'s northern suburbs'], ['21 sq mi', 'of Farmington Bay are known dust "hot spots"'], ['About 210,000 AF', 'would refill the bay to 4,199 ft and cover 58% of the hot spots']],
    body: '<p>About 2.5 million people live along the Wasatch Front. The state is building a network of dust monitors around the lake.</p>',
    sources: [S.strike, S.uofu] });
  add({ id: 'usmag', kind: 'mine', kindLabel: 'Mineral extraction', name: 'Former US Magnesium plant', short: 'US Magnesium', lon: -112.733, lat: 40.915, tier: 2,
    lede: 'Companies pump lake water into shallow ponds and let it evaporate to collect salt, potash and magnesium. In January 2026 the state bought the largest of these operations out of bankruptcy.',
    stats: [['$30M', 'what the state paid for the plant, land and water rights'], ['144,000 AF', 'a year of water rights came with it, a little more than that'], ['4,500 acres', 'of land on the lake\'s southwest shore'], ['5.7%', 'of the water people use up in the lake\'s basin goes to mineral extraction (2020–2024)']],
    body: '<p>The plant stopped making magnesium in 2021 and its owner filed for bankruptcy in September 2025. State officials said they were talking with mineral producers who might use the site, on the condition that they use methods that lose less water.</p>',
    sources: [S.usmag, S.strike] });
  add({ id: 'willard', kind: 'reservoir', name: 'Willard Bay', lake: 'Willard Bay', lon: -112.1, lat: 41.38, tier: 2,
    lede: 'A freshwater reservoir on the edge of Great Salt Lake, enclosed by a dike. A canal fills it with Weber River water.',
    pct: 48, pctNote: '103,725 AF of 215,000 AF on 1 Nov 2026. That is 77% of the usual amount for the date.',
    stats: [['100,000+ AF', 'released from here into Great Salt Lake in 2025'], ['1,050 cfs', 'capacity of the Willard Canal. A cfs is one cubic foot of water per second.']],
    sources: [...RES, S.strike, S.canalGis] });
  add({ id: 'utahlake', kind: 'lake', name: 'Utah Lake', lake: 'Utah Lake', lon: -111.82, lat: 40.21, tier: 2, zoom: .9,
    lede: 'A large, shallow freshwater lake. The Provo and Spanish Fork rivers flow in, and the Jordan River carries its water north to Great Salt Lake.',
    pct: 54, pctNote: '466,695 AF of 870,900 AF on 1 Nov 2026. That is 78% of the usual amount for the date.',
    stats: [['80,000 AF', 'released from Utah Lake to Great Salt Lake in 2025'], ['20.7%', 'of the river water reaching Great Salt Lake comes down the Jordan, on average']],
    body: '<p>Water brought through the mountains by the Central Utah Project also reaches this valley.</p>' + btn('cup', 'The Central Utah Project'),
    sources: [...RES, S.strike] });

  // ----------------------------------------------------------------- reservoirs
  add({ id: 'strawberry', kind: 'reservoir', name: 'Strawberry Reservoir', short: 'Strawberry', lake: 'Strawberry Reservoir', lon: -111.03, lat: 40.14, tier: 1, zoom: .9,
    lede: 'Utah\'s largest reservoir apart from Lake Powell and Flaming Gorge. It sits in the Colorado River basin and stores water that tunnels carry west to the Wasatch Front.',
    pct: 76, pctNote: '837,442 AF of 1,105,900 AF on 1 Nov 2026. That is 99% of the usual amount for the date.',
    stats: [['1972', 'the reservoir was enlarged from 273,000 AF to its present size'], ['10', 'mountain streams are collected and piped into it'], ['163,400 AF', 'a year leaves it for the west side of the mountains, on average']],
    body: '<p>A large reservoir can carry water over from wetter years. Strawberry stayed close to normal in 2026 while smaller reservoirs emptied.</p>' + btn('cup', 'The Central Utah Project') + btn('strawtunnel', 'The 1912 tunnel'),
    sources: [...RES, S.cupSacs, S.cupDf] });
  add({ id: 'jordanelle', kind: 'reservoir', name: 'Jordanelle Reservoir', short: 'Jordanelle', lake: 'Jordanelle Reservoir', lon: -111.42, lat: 40.6, tier: 2,
    lede: 'A Central Utah Project reservoir on the Provo River above Heber Valley. It stores drinking water for Salt Lake and Utah counties.',
    pct: 57, pctNote: '179,264 AF of 314,000 AF on 1 Nov 2026. That is 76% of the usual amount for the date.',
    body: dry + btn('deercreek', 'Deer Creek, downstream') + btn('slc', 'Salt Lake City'),
    sources: RES });
  add({ id: 'deercreek', kind: 'reservoir', name: 'Deer Creek Reservoir', short: 'Deer Creek', lake: 'Deer Creek Reservoir', lon: -111.5, lat: 40.43, tier: 2,
    lede: 'A reservoir on the Provo River. It holds water from the Provo, and from the Weber and Duchesne rivers, which reach it through a canal and a tunnel.',
    pct: 51, pctNote: '76,646 AF of 149,700 AF on 1 Nov 2026. That is 76% of the usual amount for the date.',
    body: dry + btn('duchesnetunnel', 'The Duchesne Tunnel'),
    sources: [...RES, ['Salt Lake City water quality report, 2026', 'https://www.slc.gov/utilities/wp-content/uploads/sites/22/2026/06/2026-04_Water-Quality-Report-2026-digital-FNL.pdf']] });
  add({ id: 'starvation', kind: 'reservoir', name: 'Starvation Reservoir', short: 'Starvation', lake: 'Starvation Reservoir', lon: -110.45, lat: 40.19, tier: 2,
    lede: 'A Central Utah Project reservoir near Duchesne. It stores water for the Uinta Basin, on the Colorado River side of the mountains.',
    pct: 61, pctNote: '100,148 AF of 164,118 AF on 1 Nov 2026. That is 78% of the usual amount for the date.',
    body: dry, sources: RES });
  add({ id: 'pineview', kind: 'reservoir', name: 'Pineview Reservoir', short: 'Pineview', lake: 'Pineview Reservoir', lon: -111.82, lat: 41.265, tier: 2,
    lede: 'A reservoir on the Ogden River. In 2026 it was drained on purpose, during a drought, so Ogden could replace a leaking water pipeline that runs under it.',
    pct: 2, pctNote: '2,406 AF of 110,100 AF on 1 Nov 2026. That is 5% of the usual amount for the date.',
    stats: [['100 years', 'age of the pipeline being replaced'], ['1M gallons', 'a day the old pipe leaks, roughly'], ['120,000', 'water users depend on the pipeline'], ['Late Jan 2027', 'when work is due to finish and refilling can begin']],
    body: '<p>The city says one average winter of snow would refill the reservoir.</p>' + btn('ogden', 'Ogden'),
    sources: [...RES, S.kuer] });
  add({ id: 'echo', kind: 'reservoir', name: 'Echo and Rockport reservoirs', short: 'Echo & Rockport', lake: 'Echo Reservoir', lon: -111.43, lat: 40.95, tier: 3,
    lede: 'Two reservoirs on the upper Weber River. They store snowmelt for farms and towns from here to Ogden.',
    stats: [['33%', 'full: Echo held 24,182 AF of 73,900 AF on 1 Nov 2026'], ['40%', 'full: Rockport, upstream, held 24,579 AF of 60,900 AF']],
    body: dry + btn('davis', 'Where the water goes'),
    sources: RES });
  add({ id: 'sevierbridge', kind: 'reservoir', name: 'Sevier Bridge Reservoir (Yuba)', short: 'Sevier Bridge', lake: 'Sevier Bridge Reservoir', lon: -112.02, lat: 39.33, tier: 1, zoom: .9,
    lede: 'The largest reservoir on the Sevier River. It stores water for farms around Delta. By November 2026 it was almost empty.',
    pct: 2, pctNote: '4,988 AF of 236,000 AF on 1 Nov 2026. That is 7% of the usual amount for the date.',
    stats: [['7,430 AF', 'held a month earlier, on 1 Oct 2026'], ['47%', 'full: the average for Utah reservoirs on 6 Oct 2026, leaving out Lake Powell and Flaming Gorge']],
    body: '<p>The National Weather Service reported in October 2026 that several reservoirs in central and southern Utah were critically low. These are readings from a record-dry year.</p>' + btn('piute', 'Upstream: Piute and Otter Creek') + btn('deltafarms', 'The farms it serves'),
    sources: [...RES, S.nws] });
  add({ id: 'piute', kind: 'reservoir', name: 'Piute and Otter Creek reservoirs', short: 'Piute & Otter Creek', lake: 'Piute Reservoir', lon: -112.19, lat: 38.31, tier: 2,
    lede: 'Two reservoirs near the top of the Sevier River. They hold water for farms in the Sevier Valley.',
    stats: [['12%', 'full: Piute held 8,639 AF of 71,800 AF on 1 Nov 2026'], ['10%', 'full: Otter Creek held 5,400 AF of 52,500 AF'], ['2,809 AF', 'in Piute a month earlier, on 1 Oct 2026']],
    body: dry + btn('sevierfarms', 'Sevier Valley farms'),
    sources: RES });
  add({ id: 'panguitch', kind: 'reservoir', name: 'Panguitch Lake', lake: 'Panguitch Lake', lon: -112.64, lat: 37.715, tier: 3,
    lede: 'A mountain reservoir above the town of Panguitch, near the head of the Sevier River.',
    pct: 9, pctNote: '2,000 AF of 22,300 AF on 1 Nov 2026. That is 19% of the usual amount for the date.',
    body: dry, sources: RES });
  add({ id: 'scofield', kind: 'reservoir', name: 'Scofield Reservoir', short: 'Scofield', lake: 'Scofield Reservoir', lon: -111.13, lat: 39.79, tier: 3,
    lede: 'The main reservoir on the Price River. It supplies the towns and farms of Carbon County.',
    pct: 34, pctNote: '22,653 AF of 65,800 AF on 1 Nov 2026. That is 112% of the usual amount for the date.',
    body: '<p>Scofield is rarely full. Its 2026 reading was low against its size but slightly above normal for the time of year.</p>',
    sources: RES });
  add({ id: 'sandhollow', kind: 'reservoir', name: 'Sand Hollow and Quail Creek reservoirs', short: 'Sand Hollow', lake: 'Sand Hollow Reservoir', lon: -113.38, lat: 37.115, tier: 2,
    lede: 'The two main reservoirs for the St. George area. Neither sits on a river. A pipeline fills them with water taken from the Virgin River upstream.',
    stats: [['73%', 'full: Sand Hollow held 36,467 AF of 50,000 AF on 1 Nov 2026'], ['62%', 'full: Quail Creek held 24,922 AF of 40,000 AF'], ['103%', 'of the usual amount for the date at Quail Creek']],
    body: btn('stgeorge', 'St. George'),
    sources: RES });
  add({ id: 'flaminggorge', kind: 'hydro', name: 'Flaming Gorge Dam', short: 'Flaming Gorge', lake: 'Flaming Gorge Reservoir', lon: -109.422, lat: 40.915, tier: 1, zoom: .8,
    lede: 'A dam on the Green River just south of the Wyoming line. Its reservoir is being drawn down to send extra water to Lake Powell.',
    pct: 65, pctNote: '2,420,375 AF of 3,749,000 AF on 1 Nov 2026. That is 76% of the usual amount for the date.',
    stats: [['660,000 to 1M AF', 'of extra water being released toward Lake Powell through April 2027'], ['80%', 'of average: the river\'s natural flow into the reservoir in September 2026']],
    body: '<p>The releases are part of a drought plan the Upper Basin states and the federal government signed in 2019. They are meant to keep Lake Powell above the level its dam needs to make power.</p>' + btn('powell', 'Lake Powell'),
    sources: [...RES, S.ms24] });
  add({ id: 'powell', kind: 'hydro', name: 'Lake Powell', lake: 'Lake Powell', lon: -110.72, lat: 37.52, tier: 1, zoom: .7,
    lede: 'The second-largest reservoir in the United States. Most of it lies in Utah, behind Glen Canyon Dam in Arizona. In 2026 it fell to its lowest level since it first filled.',
    pct: 22, pctNote: '5.16 million AF, 22% of usable capacity, at the end of September 2026',
    stats: [['3,518 ft', 'surface level at the end of September 2026, about 182 ft below full'], ['15 Aug 2026', 'the lake dropped below its previous record low, set in April 2023'], ['39%', 'of average: the river\'s natural flow into the lake in water year 2026'], ['About 30 ft', 'above the level where the dam\'s turbines stop, as of mid-August 2026']],
    body: '<p>Lake Powell holds the water the Upper Basin states pass downstream to Arizona, California, Nevada and Mexico. A water year runs from October to September.</p>' + btn('flaminggorge', 'Extra water from Flaming Gorge') + btn('coloriver', 'Utah\'s share of the river'),
    sources: [S.ms24, S.ap] });

  // ----------------------------------------------------------------- water moved between basins
  add({ id: 'cup', kind: 'tunnel', name: 'Central Utah Project', short: 'Central Utah Project', lon: -111.053, lat: 40.325, tier: 2, zoom: 1,
    lede: 'A federal project that collects water from streams on the south side of the Uinta Mountains, in the Colorado River basin, and sends it through the Wasatch range to the cities and farms on the other side.',
    stats: [['101,900 AF', 'a year moved across the mountains, on average'], ['36.8 mi', 'of aqueduct, mostly tunnel, gather the streams into Strawberry Reservoir'], ['10', 'streams tapped along the way'], ['1956', 'Congress authorized the project']],
    body: '<p>The highlighted line here is one of the aqueduct\'s tunnels. From Strawberry Reservoir the water goes west through the Syar Tunnel and a string of pipelines to the Spanish Fork River. That stretch is not drawn, because no public map of its route was found.</p><p>The first plan, in 1939, would have moved one million AF a year. Later plans cut that to about a tenth.</p>' + btn('strawberry', 'Strawberry Reservoir') + btn('provo', 'Where the water arrives'),
    sources: [S.cupSacs, S.cupOver, S.cupDf, S.osm] });
  add({ id: 'strawtunnel', kind: 'tunnel', name: 'Strawberry Tunnel', lon: -111.25, lat: 40.161, tier: 3,
    lede: 'Built between 1906 and 1912 for one of the first federal irrigation projects. It carries Colorado River basin water under the ridge to farms in southern Utah Valley.',
    stats: [['1906–1912', 'years of construction'], ['61,500 AF', 'a year of this older project\'s water now crosses the mountains, on average'], ['About 3.7 mi', 'long, measured on the mapped route']],
    body: '<p>Today most of the water takes a newer route beside it, built for the Central Utah Project.</p>' + btn('cup', 'The Central Utah Project'),
    sources: [S.cupDf, S.osm] });
  add({ id: 'duchesnetunnel', kind: 'tunnel', name: 'Duchesne Tunnel', lon: -110.944, lat: 40.61, tier: 3,
    lede: 'A tunnel under the west end of the Uinta Mountains. It moves water from the Duchesne River, in the Colorado River basin, to the head of the Provo River.',
    stats: [['About 6 mi', 'long, measured on the mapped route']],
    body: '<p>The water is stored downstream in Jordanelle and Deer Creek reservoirs. A canal a few miles west does the same job for the Weber River.</p>' + btn('deercreek', 'Deer Creek Reservoir'),
    sources: [S.osm, ['Salt Lake City water quality report, 2026', 'https://www.slc.gov/utilities/wp-content/uploads/sites/22/2026/06/2026-04_Water-Quality-Report-2026-digital-FNL.pdf']] });
  add({ id: 'lpp', kind: 'tunnel', kindLabel: 'Proposed pipeline', icon: 'info', name: 'Lake Powell Pipeline (proposed)', short: 'Lake Powell Pipeline', lon: -111.66, lat: 37.08, tier: 3,
    lede: 'A state plan to pump water from Lake Powell to the St. George area through a buried pipeline. It has not been built.',
    stats: [['86,249 AF', 'a year at most'], ['140 mi', 'of pipeline'], ['June 2020', 'a draft federal environmental review was published']],
    body: '<p>The head of the Washington County water district has said the pipeline is not dead but is part of a very long-term strategy. He said the district would spend the next 20 years on conservation and local supplies.</p>' + btn('stgeorge', 'St. George'),
    sources: [S.lpp, S.lppFox] });

  // ----------------------------------------------------------------- cities
  add({ id: 'slc', kind: 'city', name: 'Salt Lake City', lon: -111.891, lat: 40.761, tier: 1, zoom: .8,
    lede: 'The city\'s water comes first from streams in the Wasatch Mountains just to its east. Reservoirs on the Provo River and wells fill in the rest.',
    stats: [['50–60%', 'of the supply comes from Wasatch mountain streams in an average year'], ['19 Mar 2026', 'the city declared a Stage 2 water shortage, its first since October 2022'], ['10M gallons', 'a day: the cut in water use the city asked for'], ['5', 'stages in the city\'s shortage plan']],
    body: '<p>About 80% of Utahns live along the Wasatch Front and in the valleys just behind it. The state had 3.6 million people in 2025.</p>' + btn('deercreek', 'Deer Creek Reservoir') + btn('snow', 'The snowpack'),
    sources: [S.slc, S.plan] });
  add({ id: 'provo', kind: 'city', name: 'Provo and Orem', short: 'Provo-Orem', lon: -111.658, lat: 40.234, tier: 2,
    lede: 'The cities of Utah Valley sit where the Central Utah Project\'s water comes out of the mountains.',
    stats: [['155 gallons', 'consumed per person per day in Utah County in 2024'], ['130 gallons', 'the same measure in 2023'], ['19', 'cities included in the count']],
    body: '<p>This measure counts water that is used up. Water that goes down a drain and back to a stream through a treatment plant is left out. A 2023 state law requires large water districts to report it each year.</p>' + btn('cup', 'The Central Utah Project') + btn('utahlake', 'Utah Lake'),
    sources: [S.pcUtah] });
  add({ id: 'ogden', kind: 'city', name: 'Ogden', lon: -111.973, lat: 41.223, tier: 2,
    lede: 'Ogden\'s main water line comes down Ogden Canyon from Pineview Reservoir. In 2026 the city drained the reservoir to replace the part of the pipe that lies under it.',
    stats: [['120,000', 'water users depend on the pipeline'], ['55 years', 'the underwater section has been in place, roughly'], ['152 gallons', 'consumed per person per day in Weber County in 2024']],
    body: btn('pineview', 'Pineview Reservoir'),
    sources: [S.kuer, S.pcWeber] });
  add({ id: 'davis', kind: 'town', name: 'Davis County: two sets of pipes', short: 'Secondary water', lon: -111.971, lat: 41.06, tier: 2,
    lede: 'Many Utah homes have a second water line that brings untreated canal water for lawns and gardens. It is called secondary water, and most of it has never been metered.',
    stats: [['1 Jan 2030', 'deadline for every pressurized secondary connection to have a meter'], ['$250M', 'in federal relief money set aside for meters'], ['151 gallons', 'consumed per person per day in Davis County in 2024'], ['22', 'secondary water systems report to the local water district']],
    body: '<p>Hundreds of thousands of home connections in Utah use secondary water. The legislature passed the metering requirement in 2022 and 2023.</p><p>A water supplier that misses the deadline loses access to state water funding.</p>',
    sources: [S.meter, S.pcWeber] });
  add({ id: 'stgeorge', kind: 'city', name: 'St. George', lon: -113.584, lat: 37.104, tier: 1, zoom: .8,
    lede: 'The fastest-growing corner of the state is also its hottest and driest. Washington County depends almost entirely on the Virgin River and the streams that feed it.',
    stats: [['258,304', 'people in Washington County in 2024'], ['145 gallons', 'consumed per person per day in 2025. It was 148 in 2024.'], ['About $2B', 'planned cost of adding about 40,000 AF a year of new supply'], ['66%', 'of that new supply would be treated wastewater, used again']],
    body: '<p>The county water district expects conservation to cover about half of the growth in demand over 20 years. The rest is to come mostly from cleaning wastewater until it is fit to drink. A $7 million demonstration plant is due to open in 2028.</p>' + btn('sandhollow', 'The reservoirs') + btn('lpp', 'The Lake Powell Pipeline'),
    sources: [S.wcUse, S.pcWash, S.wcTrib] });
  add({ id: 'cedarcity', kind: 'town', name: 'Cedar City', lon: -113.061, lat: 37.677, tier: 1,
    lede: 'Cedar City and the farms around it live on wells. They pump more than rain and snow put back, and the state has ordered pumping cut to a sustainable level.',
    stats: [['7,000+ AF', 'a year more is pumped than the aquifer can sustain'], ['2080', 'deadline to bring pumping down to that level'], ['15,000 AF', 'a year the local district may import from Pine Valley, 2 Mar 2026 federal decision'], ['Up to 70%', 'of the city supply the district says would be lost without new sources']],
    body: '<p>The state adopted its plan for this valley in January 2021. The pumping cuts fall first on the newest water rights.</p><p>The district plans a well field and pipeline in Pine Valley, a desert basin to the northwest. Conservation groups and a tribe appealed the federal approval. The district reports the appeals were dismissed.</p>' + btn('berylwell', 'The valley next door'),
    sources: [S.cedar, S.cedarFact, S.cedarPlan, ['Central Iron County Water Conservancy District, Aug 2026', 'https://cedarvalleywaterutah.gov/2026/08/12/all-administrative-appeals-of-pine-valley-water-supply-project-dismissed-clearing-path-forward/']] });

  // ----------------------------------------------------------------- farms
  add({ id: 'bearfarms', kind: 'farm', name: 'Bear River valley farms', short: 'Bear River farms', lon: -112.17, lat: 41.71, tier: 2, zoom: .8,
    lede: 'Canals take water from the Bear River just before it reaches Great Salt Lake and spread it over the farms of Box Elder County.',
    stats: [['65%', 'of the water people use up in the Great Salt Lake basin goes to farms (2020–2024)'], ['26.8%', 'of it is used up by cities and industry'], ['About 80%', 'of the farm water in the basin grows alfalfa and grass hay, a 2025 study found'], ['730 cfs', 'capacity of the largest canal here, in cubic feet of water per second']],
    body: '<p>Alfalfa and hay are fed to dairy and beef cattle. The same study said a 35% cut in water use across the basin would be needed to start refilling the lake.</p><p>The state\'s approach has been to pay for more efficient irrigation and to let farmers lease water to the lake. The legislature has put more than $200 million into irrigation upgrades.</p>' + btn('gsl', 'Great Salt Lake'),
    sources: [S.strike, S.hay, S.canalGis] });
  add({ id: 'deltafarms', kind: 'farm', name: 'Delta farms', lon: -112.58, lat: 39.35, tier: 2,
    lede: 'Alfalfa fields at the far end of the Sevier River. Canals from Sevier Bridge Reservoir water them, and little of the river flows past.',
    stats: [['75%', 'of the water taken from Utah\'s rivers and wells goes to farms'], ['More than half', 'of Utah\'s irrigated farmland grows alfalfa and hay, a 2022 state report found'], ['2%', 'full: Sevier Bridge Reservoir on 1 Nov 2026']],
    body: btn('sevierbridge', 'Sevier Bridge Reservoir'),
    sources: [S.budget, S.hay, ...RES] });
  add({ id: 'sevierfarms', kind: 'farm', name: 'Sevier Valley farms', short: 'Sevier Valley', lon: -112.08, lat: 38.77, tier: 2,
    lede: 'A long, narrow valley of hay fields along the Sevier River, which starts and ends inside Utah.',
    stats: [['799,000 AF', 'a year taken from rivers and wells in the Sevier River basin (2020–2024)'], ['16%', 'of all the water taken in Utah'], ['300 cfs', 'capacity of the Sevier Valley and Piute Canal, in cubic feet of water per second']],
    body: btn('piute', 'Piute and Otter Creek reservoirs'),
    sources: [S.budget, S.canalGis] });
  add({ id: 'uintafarms', kind: 'farm', name: 'Uinta Basin farms', short: 'Uinta Basin', lon: -110.0, lat: 40.3, tier: 2,
    lede: 'Hay and pasture watered by streams from the Uinta Mountains. These farms use most of the Colorado River water that Utah consumes.',
    stats: [['680,000 AF', 'consumed by irrigated farms in Utah\'s part of the Green River basin in 2024'], ['252,700', 'irrigated acres there in 2024'], ['62%', 'of Utah\'s Colorado River water use is for farming']],
    body: btn('starvation', 'Starvation Reservoir') + btn('ute', 'The Ute Indian Tribe'),
    sources: [S.cul, S.cra] });
  add({ id: 'greenriver', kind: 'farm', name: 'Green River: paid to use less', short: 'Green River', lon: -110.16, lat: 38.995, tier: 2,
    lede: 'Utah pays farmers who volunteer to leave fields dry for a season. The water they would have used stays in the Colorado River system.',
    stats: [['$390', 'paid per AF saved by leaving a field unplanted'], ['633 AF', 'one ranch near here expected to save on 200 acres of alfalfa'], ['About 5,000 AF', 'saved statewide in 2025, by early figures. The estimate had been 10,705.'], ['2 years in 5', 'the most a field may be left dry']],
    body: '<p>The state began the program as a pilot with its own money. The federal government later awarded $100 million to the four Upper Basin states for work of this kind.</p>' + btn('coloriver', 'Utah\'s share of the river'),
    sources: [S.trib, S.upr] });
  add({ id: 'emery', kind: 'farm', name: 'Castle Valley farms', short: 'Castle Valley', lon: -111.13, lat: 39.09, tier: 3,
    lede: 'Small farm towns at the foot of the Wasatch Plateau. Creeks from the plateau are their only water.',
    stats: [['Half', 'of their fields: all one Ferron farmer could water in 2026'], ['30%', 'of normal: that farm\'s harvest'], ['40%', 'full: Millsite Reservoir, above Ferron, held 7,241 AF of 18,061 AF on 1 Nov 2026']],
    body: dry, sources: [S.nws, ...RES] });
  add({ id: 'berylwell', kind: 'well', name: 'Escalante Valley wells', short: 'Beryl-Enterprise', lon: -113.66, lat: 37.72, tier: 2,
    lede: 'The round fields here are sprinklers fed by wells. There is no river. The state adopted a plan in 2012 to bring pumping down to what the aquifer can sustain.',
    stats: [['399,000 AF', 'a year taken from wells and streams in the Cedar and Beaver basin, which includes this valley (2020–2024)'], ['8%', 'of all the water taken in Utah']],
    body: '<p>State law lets the State Engineer limit pumping in a valley to its "safe yield": the amount that can be taken year after year without draining the aquifer. Where rights add up to more than that, the newest are cut first.</p>' + btn('cedarcity', 'Cedar City'),
    sources: [S.beryl, S.gmp, S.budget] });

  // ----------------------------------------------------------------- industry
  add({ id: 'hunter', kind: 'power', name: 'Emery County power plants', short: 'Hunter plant', lon: -111.029, lat: 39.174, tier: 3,
    lede: 'Coal power plants here cool themselves with water from creeks that run to the Green River.',
    stats: [['21,700 AF', 'consumed by power plants in Utah\'s part of the Colorado River basin in 2024'], ['33,300 AF', 'in 2021'], ['2%', 'of the Colorado River water Utah consumed in 2024, roughly']],
    sources: [S.cul] });
  add({ id: 'stratos', kind: 'datacenter', name: 'Stratos data center (proposed)', short: 'Stratos (proposed)', lon: -112.65, lat: 41.75, tier: 2,
    lede: 'A very large data center and gas power plant proposed in Hansel Valley, north of Great Salt Lake. Its water plans drew thousands of objections.',
    stats: [['40,000 acres', 'approved by Box Elder County on 4 May 2026'], ['1,900 AF', 'a year of spring water the developer applied to use, mainly for the power plant'], ['About 3,900', 'formal protests were filed'], ['75 AF', 'a year: data centers planning to use this much must now report to the state']],
    body: '<p>The developer withdrew the water application in May 2026 and said it would file again. The governor asked for a water plan showing no harm to Great Salt Lake. The developer says cooling would use a closed loop.</p><p>The reporting law took effect on 1 July 2026. The state will publish each large data center\'s yearly water use.</p>',
    sources: [S.stratos, S.stratosW, S.dc] });

  // ----------------------------------------------------------------- tribes
  add({ id: 'navajo', kind: 'tribe', name: 'Navajo Nation in Utah', short: 'Navajo Nation', lon: -110.23, lat: 37.03, tier: 2,
    lede: 'The northern edge of the Navajo Nation lies in Utah, along the San Juan River. A 2022 settlement confirmed its water rights here.',
    stats: [['81,500 AF', 'a year the Nation may use from the San Juan River in Utah'], ['$200M+', 'in federal money for water systems, plus $8 million from the state'], ['5,000+', 'Navajo citizens live in the Utah part of the reservation'], ['Half', 'of the households there had indoor plumbing in 2022']],
    body: '<p>The agreement was signed at Oljato-Monument Valley on 27 May 2022.</p>',
    sources: [S.navajo] });
  add({ id: 'ute', kind: 'tribe', name: 'Ute Indian Tribe', short: 'Ute Tribe', lon: -109.86, lat: 40.285, tier: 2,
    lede: 'The Uintah and Ouray Reservation covers much of the Uinta Basin. How much water the tribe is owed, and who must deliver it, has been in court since 2018.',
    stats: [['2018', 'the tribe sued the federal government over its water'], ['12 of 16', 'claims were dismissed by a federal court in 2021'], ['$354M', 'a court noted the tribe had received under a 1992 federal law']],
    body: '<p>The 1992 law finished the Central Utah Project and was written in part to settle the tribe\'s water claims. The tribe says the law took its property. Appeals were still being heard in 2026.</p><p>Tribal use makes up about 15% of Utah\'s Colorado River supply, by the state\'s count.</p>' + btn('uintafarms', 'Uinta Basin farms'),
    sources: [S.ute, S.cra] });

  // ----------------------------------------------------------------- lines and areas
  const riverStyle = {
    Colorado: { w: 4.4 }, Green: { w: 3.8 }, 'San Juan': { w: 2.4 }, Yampa: { w: 2.4 }, White: { w: 1.8 }, Dolores: { w: 1.6 },
    Bear: { w: 2.6 }, Weber: { w: 2 }, Jordan: { w: 1.9 }, Provo: { w: 1.9 }, Ogden: { w: 1.3 }, Logan: { w: 1.4 }, 'Spanish Fork': { w: 1.3 },
    Sevier: { w: 2, reaches: [{ test: lon => lon < -112.7, w: 1 }] }, Virgin: { w: 2 }, Duchesne: { w: 2 }, Strawberry: { w: 1.4 }, Price: { w: 1.5 }, 'San Rafael': { w: 1.4 },
    Escalante: { w: 1.3 }, 'Dirty Devil': { w: 1.2 }, Fremont: { w: 1.3 }, 'San Pitch': { w: 1.1 }, Uinta: { w: 1.3 }, 'Lake Fork': { w: 1.2 }, Beaver: { w: 1.1 },
    'Santa Clara': { w: 1.1 }, Paria: { w: 1.1 }, 'East Fork Sevier': { w: 1.2 }, Malad: { w: 1.1 }, 'Little Bear': { w: 1.1 },
  };
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const rivers = {
    Colorado: rv('The Colorado crosses Utah\'s canyon country and ends in Lake Powell. Utah is entitled to 23% of the water available to the four Upper Basin states.',
      [['1.15M AF', 'consumed by Utah from the river and its branches in 2024'], ['39%', 'of average: natural flow into Lake Powell, water year 2026']], btn('coloriver', 'Utah\'s share of the river') + btn('powell', 'Lake Powell'), [S.cul, S.ms24, S.crs]),
    Green: rv('The Green River is the Colorado\'s largest branch. It enters Utah at Flaming Gorge and carries most of the Colorado River water the state uses.',
      [['1.06M AF', 'consumed in Utah\'s part of the Green River basin in 2024'], ['252,000 AF', 'of that was sent out of the basin']], btn('flaminggorge', 'Flaming Gorge Dam') + btn('uintafarms', 'Uinta Basin farms'), [S.cul]),
    'San Juan': rv('The San Juan River runs along the north edge of the Navajo Nation and into Lake Powell.', [['81,500 AF', 'a year the Navajo Nation may use from it in Utah']], btn('navajo', 'Navajo Nation in Utah'), [S.navajo]),
    Bear: rv('The largest river feeding Great Salt Lake. It starts in Utah\'s Uinta Mountains, loops through Wyoming and Idaho, and comes back.',
      [['64.4%', 'of the river water reaching the lake, on average']], btn('bearriver', 'More on the Bear River'), [S.strike]),
    Weber: rv('The Weber River drains the west end of the Uinta Mountains and reaches Great Salt Lake near Ogden.', [['16.7%', 'of the river water reaching Great Salt Lake, on average']], btn('echo', 'Echo and Rockport reservoirs') + btn('willard', 'Willard Bay'), [S.strike]),
    Jordan: rv('The Jordan River flows north from Utah Lake through the Salt Lake Valley to Great Salt Lake.', [['20.7%', 'of the river water reaching Great Salt Lake, on average']], btn('utahlake', 'Utah Lake') + btn('gsl', 'Great Salt Lake'), [S.strike]),
    Provo: rv('The Provo River runs from the Uinta Mountains to Utah Lake. A tunnel and a canal add water from two other rivers near its head.', [], btn('jordanelle', 'Jordanelle Reservoir') + btn('deercreek', 'Deer Creek Reservoir') + btn('duchesnetunnel', 'The Duchesne Tunnel'), RES),
    Ogden: rv('The Ogden River is dammed at Pineview Reservoir, which was drained in 2026 for pipeline work.', [], btn('pineview', 'Pineview Reservoir'), [S.kuer]),
    Sevier: rv('The Sevier River starts and ends inside Utah. Farms take nearly all of it before it reaches the desert.',
      [['799,000 AF', 'a year taken from rivers and wells in its basin (2020–2024)'], ['2%', 'full: its largest reservoir on 1 Nov 2026']], btn('sevierbridge', 'Sevier Bridge Reservoir') + btn('sevierfarms', 'Sevier Valley farms'), [S.budget, ...RES]),
    Virgin: rv('The Virgin River flows out of Zion National Park and past St. George on its way to Lake Mead. It is Washington County\'s main water source.',
      [['133,000 AF', 'a year taken from rivers and wells in Utah\'s part of the lower Colorado basin (2020–2024)']], btn('stgeorge', 'St. George') + btn('sandhollow', 'The reservoirs'), [S.budget, S.wcTrib]),
    Duchesne: rv('The Duchesne River drains the south side of the Uinta Mountains to the Green River. A tunnel takes some of its water west to the Provo River.', [], btn('duchesnetunnel', 'The Duchesne Tunnel') + btn('starvation', 'Starvation Reservoir'), [S.cupSacs]),
    Strawberry: rv('The Strawberry River is dammed to form Strawberry Reservoir, the hub of the Central Utah Project.', [], btn('strawberry', 'Strawberry Reservoir'), [S.cupSacs]),
    'Spanish Fork': rv('Water brought through the mountains from Strawberry Reservoir comes down this river to Utah Valley.', [['163,400 AF', 'a year arrives from the Colorado River basin, on average']], btn('cup', 'The Central Utah Project'), [S.cupDf]),
    Price: rv('The Price River runs from Scofield Reservoir through Carbon County to the Green River.', [], btn('scofield', 'Scofield Reservoir'), RES),
    _default: rv('One of the streams that carry Utah\'s mountain snow down to its valleys and deserts.', [], '', [S.budget]),
  };
  const X = 'Water moved between river basins';
  const canals = {
    'Strawberry Tunnel': { kind: X, icon: 'tunnel', lede: 'Built 1906 to 1912. It carries water from Strawberry Reservoir, in the Colorado River basin, toward farms in Utah Valley.', body: btn('strawtunnel', 'More on the tunnel'), sources: [S.cupDf, S.osm] },
    'Duchesne Tunnel': { kind: X, icon: 'tunnel', lede: 'Moves water from the Duchesne River, in the Colorado River basin, to the head of the Provo River.', body: btn('duchesnetunnel', 'More on the tunnel'), sources: [S.osm] },
    'Strawberry Aqueduct: Water Hollow Tunnel': { kind: 'Central Utah Project', icon: 'tunnel', lede: 'One of the tunnels of the Strawberry Aqueduct. The aqueduct gathers 10 mountain streams and delivers them to Strawberry Reservoir.',
      stats: [['36.8 mi', 'length of the whole aqueduct'], ['101,900 AF', 'a year carried on to the Wasatch Front, on average']], body: btn('cup', 'The Central Utah Project'), sources: [S.cupSacs, S.osm] },
    'Weber-Provo Diversion Canal': { kind: X, icon: 'canal', lede: 'A canal across the Kamas Valley. It moves Weber River water to the Provo River, where it is stored in Jordanelle and Deer Creek reservoirs.', stats: [['1,000 cfs', 'capacity, in cubic feet of water per second']], body: btn('deercreek', 'Deer Creek Reservoir'), sources: [S.canalGis] },
    'Provo River Aqueduct (Murdock Canal)': { lede: 'Once an open canal along the bench above Utah Valley, now a buried pipe. It carries Provo River water north toward Salt Lake County.', stats: [['550 cfs', 'capacity, in cubic feet of water per second']], sources: [S.canalGis] },
    'Bear River Canal: West Main': { lede: 'The larger of two main canals that take Bear River water to farms in Box Elder County.', stats: [['730 cfs', 'capacity, in cubic feet of water per second']], body: btn('bearfarms', 'Bear River valley farms'), sources: [S.canalGis] },
    'Bear River Canal: East Main': { lede: 'One of two main canals that take Bear River water to farms in Box Elder County.', stats: [['350 cfs', 'capacity, in cubic feet of water per second']], body: btn('bearfarms', 'Bear River valley farms'), sources: [S.canalGis] },
    'Willard Canal': { lede: 'Carries Weber River water north to Willard Bay, and can bring it back when it is needed.', stats: [['1,050 cfs', 'capacity, in cubic feet of water per second']], body: btn('willard', 'Willard Bay'), sources: [S.canalGis] },
    'Railroad causeway': { kind: 'Railroad causeway', icon: 'info', lede: 'Not a canal. This is the rock-fill railroad line that divides Great Salt Lake into a north arm and a south arm.', body: btn('causeway', 'Why it matters'), sources: [['Line: Utah Department of Natural Resources', 'https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/GSL_causeway/FeatureServer/0'], S.uofu] },
    'Sevier Valley and Piute Canal': { lede: 'Carries Sevier River water along the valley to hay fields.', stats: [['300 cfs', 'capacity, in cubic feet of water per second']], body: btn('sevierfarms', 'Sevier Valley farms'), sources: [S.canalGis] },
    'Piute Canal': { lede: 'Carries water from Piute Reservoir to farms down the Sevier Valley.', stats: [['200 cfs', 'capacity, in cubic feet of water per second']], body: btn('piute', 'Piute Reservoir'), sources: [S.canalGis] },
    'Strawberry High Line Canal': { lede: 'Delivers water that came through the Strawberry Tunnel to farms in southern Utah Valley.', stats: [['300 cfs', 'capacity, in cubic feet of water per second']], body: btn('strawtunnel', 'The Strawberry Tunnel'), sources: [S.canalGis] },
    _default: { lede: 'A canal that carries river water to farm fields or to a town.', body: '<p>Utah has thousands of canals and ditches. Only some of the larger ones are drawn.</p>', sources: [S.canalGis] },
  };
  const gmpBase = '<p>A groundwater management plan is a set of rules the State Engineer adopts for one valley. It can cap pumping and close the valley to new wells.</p>';
  const amas = {
    'Beryl-Enterprise': { lede: 'A desert farming valley that depends on wells. The state adopted a plan here in 2012 to bring pumping down to what the aquifer can sustain.', body: gmpBase + btn('berylwell', 'More on this valley'), sources: [S.beryl, S.policyGis] },
    'Cedar City Valley': { lede: 'Wells here pump more than the aquifer can sustain. A state plan adopted in January 2021 requires that to end.',
      stats: [['7,000+ AF', 'a year of overpumping'], ['2080', 'deadline to end it']], body: gmpBase + btn('cedarcity', 'More on Cedar City'), sources: [S.cedarPlan, S.cedar, S.cedarFact, S.policyGis] },
    'Parowan Valley': { lede: 'A farming valley north of Cedar City that depends on wells. The state adopted a groundwater plan for it on 15 October 2024.', body: gmpBase, sources: [S.parowan, S.policyGis] },
    'Pahvant Valley': { lede: 'A farming valley around Fillmore that depends on wells. The State Engineer has been holding public meetings on a new groundwater plan for it.', body: gmpBase, sources: [S.pahvant, S.policyGis] },
    'Salt Lake Valley': { lede: 'The aquifer under Salt Lake County. Cities use its wells mostly in summer, when mountain streams run low.', body: gmpBase, sources: [S.gmp, S.policyGis] },
    _default: { lede: 'A valley with a state groundwater management plan.', body: gmpBase, sources: [S.gmp, S.policyGis] },
  };
  const tribes = {
    'Navajo Nation': { lede: 'The Utah part of the Navajo Nation. A settlement signed in 2022 confirmed the Nation\'s right to 81,500 AF a year from the San Juan River.', body: btn('navajo', 'Navajo Nation in Utah'), sources: [S.navajo] },
    'Uintah and Ouray': { lede: 'The reservation of the Ute Indian Tribe. The tribe and the federal government have been in court over its water since 2018.', body: btn('ute', 'The Ute Indian Tribe'), sources: [S.ute] },
    _default: { lede: 'Tribal land. Seven tribes in the Colorado River basin have land in Utah.', sources: [S.cra] },
  };

  window.MAPCONTENT = {
    meta: { title: 'Utah Water: an explorable map', h1: 'Utah Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of Utah's water system. Use the lists in the side panel to browse the same information without the map.", home: 'Show all of Utah' },
    features: F, riverStyle, rivers, canals, amas, tribes,
    kinds: {
      tunnel: ['canals', 'tunnel', 'Water moved between basins'], river: ['rivers', 'river', 'River'], lake: ['rivers', 'lake', 'Lake'], tribe: ['cities', 'tribe', 'Tribal nation'],
      well: ['ground', 'well', 'Groundwater'], farm: ['farms', 'farm', 'Farming region'], datacenter: ['industry', 'datacenter', 'Data center'],
    },
    sprites: {
      tunnel: ['.....ww.......', '....wGGw..w...', '...GGGGGGwGG..', '..GGdGGGGGGGG.', '.GGGkkkkkGGdGG', 'GGdkkbbbkkGGGG', 'GGGkbbBbbkGGdG', 'GdGkbBbbbkGGGG', 'bbbbbbbBbbbbBb'],
      lake: ['..bbbbbb..', '.bBbbbbBb.', 'bbbbBbbbbb', '.bbBbbbbb.', '..bbbbbb..'],
    },
    layers: { golf: false, canals: { label: 'Canals & tunnels' } },
    majorCanals: ['xfer'], canalWidths: { xfer: 2.6 }, canalSub: { xfer: 'Water moved between river basins' },
    areaKind: () => 'Groundwater management plan',
    areaAlt: n => !['Beryl-Enterprise', 'Cedar City Valley', 'Parowan Valley'].includes(n),
    areaLabels: { Bountiful: { minZ: .7 }, 'Northern Juab Valley': { minZ: .6 }, 'Heber Valley': { minZ: .6 }, 'Snyderville Basin and Park City': { minZ: .7 }, 'Northern Utah Valley': { minZ: .6 }, 'Southern Utah Valley': { minZ: .6 },
      'Goshen Valley': { minZ: .6 }, 'Cedar Valley (Utah County)': { minZ: .6 }, 'Weber Delta': { minZ: .5 }, 'Cache Valley': { minZ: .5 }, 'Salt Lake Valley': { minZ: .4 }, 'Tooele Valley': { minZ: .45 }, 'Parowan Valley': { minZ: .4 }, 'Cedar City Valley': { minZ: .4 } },
    fieldSub: 'Farm fields', farmRadiusKm: 45,
    hud: [['5.1M AF', 'water taken from rivers and wells per year'], ['3.6M', 'people'], ['22%', 'of median snowpack, 1 Apr 2026']],
    budget: {
      title: 'Utah takes about 5.1 million acre-feet a year from its rivers and wells',
      lede: 'About 3.5 million acre-feet of that is used up by crops, lawns, people and industry. The rest runs back to a river or soaks into the ground. Three-quarters goes to farms.',
      perDrop: 100000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons.',
      sources: [
        { id: 'gsl', label: 'Great Salt Lake basin', pct: 51, af: 2.605e6, color: 'var(--c-instate)', layer: 'rivers,reservoirs', feat: 'gsl', note: 'The Bear, Weber, Provo and Jordan rivers and the wells of the Wasatch Front. Every drop taken here is one that does not reach the lake.' },
        { id: 'ucol', label: 'Colorado River basin', pct: 23, af: 1.167e6, color: 'var(--c-colorado)', layer: 'rivers,reservoirs,canals', feat: 'coloriver', note: 'The Green, Colorado and San Juan rivers and their branches in eastern Utah. Some of this water is sent through tunnels to the Wasatch Front.' },
        { id: 'sevier', label: 'Sevier River basin', pct: 16, af: 0.799e6, color: 'var(--c-reclaimed)', layer: 'rivers,reservoirs', feat: 'sevierbridge', note: 'A river that starts and ends inside Utah, used almost entirely by farms.' },
        { id: 'cedar', label: 'Cedar and Beaver basin', pct: 8, af: 0.399e6, color: 'var(--c-ground)', layer: 'ground', feat: 'cedarcity', note: 'Desert valleys in the southwest that rely heavily on wells.' },
        { id: 'virgin', label: 'Virgin River basin', pct: 2.6, af: 0.133e6, color: 'var(--c-ind)', layer: 'rivers,reservoirs', feat: 'stgeorge', note: 'The far southwest corner around St. George, which drains to Lake Mead.' },
        { id: 'columbia', label: 'Columbia River basin', tiny: true, af: 0.017e6, val: '0.3% &middot; 0.02M AF', color: '#8a8f98', note: 'A small corner in the northwest that drains to the Snake River.' },
      ],
      uses: [
        { id: 'ag', label: 'Farms', pct: 75, af: 3.82e6, color: 'var(--c-ag)', layer: 'farms', feat: 'bearfarms', note: 'Irrigated crops and pasture. More than half of the irrigated land grows alfalfa and hay.' },
        { id: 'muni', label: 'Cities, towns & industry', pct: 25, af: 1.3e6, color: 'var(--c-muni)', layer: 'cities,industry', feat: 'slc', note: 'Homes, lawns, businesses and factories for 3.6 million people. The state counts cities and industry together.' },
      ],
      body: `<div class="note">These figures count water <b>taken out</b> of rivers and wells, as a yearly average for 2020 to 2024. They come from the Utah Division of Water Resources' water budget. The state does not publish a statewide split of the water <b>used up</b> by farms and by cities.</div>
        <div class="note">About 72% of the water taken comes from rivers and lakes and about 28% from wells, according to the state's draft 2026 water plan.</div>
        <div class="note hot"><b>What is changing:</b> Winter 2025–26 brought the lowest snowpack on record, 22% of the median on 1 April. The reservoir and lake readings on this map are from that year. <button class="btn" data-feat="snow" style="margin-top:6px">See the snowpack</button></div>`,
    },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a reservoir, a tunnel, a field, a canal, or open land.',
    browse: [
      ['Snow, rivers and rules', ['snow', 'bearriver', 'coloriver', 'law']],
      ['Great Salt Lake', ['gsl', 'causeway', 'farmington', 'usmag', 'willard', 'utahlake']],
      ['Reservoirs', ['strawberry', 'jordanelle', 'deercreek', 'starvation', 'pineview', 'echo', 'sevierbridge', 'piute', 'panguitch', 'scofield', 'sandhollow', 'flaminggorge', 'powell']],
      ['Through the mountains', ['cup', 'strawtunnel', 'duchesnetunnel', 'lpp']],
      ['Cities', ['slc', 'provo', 'ogden', 'davis', 'stgeorge', 'cedarcity']],
      ['Farms', ['bearfarms', 'deltafarms', 'sevierfarms', 'uintafarms', 'greenriver', 'emery']],
      ['Groundwater', ['berylwell', 'cedarcity']],
      ['Tribes', ['navajo', 'ute']],
      ['Industry', ['usmag', 'stratos', 'hunter']],
    ],
    riverLabels: [['COLORADO RIVER', -109.95, 38.3, .32, 48], ['GREEN RIVER', -109.9, 39.75, .32, 80], ['SAN JUAN R.', -109.9, 37.22, .45, 8], ['BEAR R.', -111.05, 41.75, .5, -80], ['WEBER R.', -111.5, 41.08, .6, 35], ['SEVIER RIVER', -112.2, 38.95, .4, -62],
      ['VIRGIN R.', -113.3, 37.2, .6, 20], ['DUCHESNE R.', -110.2, 40.14, .5, 5], ['PRICE R.', -110.5, 39.42, .6, 30], ['JORDAN R.', -111.98, 40.6, .8, -85], ['PROVO R.', -111.3, 40.52, .7, 40], ['SAN RAFAEL R.', -110.5, 38.9, .6, 30]],
    neighbors: [['IDAHO', -112.9, 42.13, 0], ['WYOMING', -109.9, 41.6, 0], ['COLORADO', -108.9, 39.3, 90], ['ARIZONA', -111.6, 36.88, 0], ['NEVADA', -114.22, 39.3, -90]],
    spot: {
      rain: inches => `${inches < 10 ? 'Desert.' : inches < 16 ? 'Dry country.' : inches < 28 ? 'Wetter foothill or mountain country.' : 'High mountain country. Most of this falls as snow, and this is where the rivers start.'} Most of the water Utah uses comes from mountain snow, not from rain where people live.`,
      crop: 'cropland', rest: 'sagebrush, desert or rock', restAlone: 'Sagebrush, desert or bare rock', rulesTitle: 'Water rules here',
      area: n => ['Beryl-Enterprise', 'Cedar City Valley', 'Parowan Valley'].includes(n)
        ? 'The State Engineer has adopted a groundwater management plan for this valley since 2012. Such a plan can limit pumping to the valley\'s "safe yield": what can be taken year after year without draining the aquifer. Where water rights add up to more than that, the newest are cut first.'
        : 'This valley has a state groundwater management plan or policy. The plan sets how much may be pumped and whether new wells are allowed.',
      basin: n => `This spot is in the <b>${n}</b>, one of the river basins the state uses for water planning. `,
      none: 'All water in Utah is public property. To use it, a person needs a water right from the State Engineer, and older rights are served before newer ones. Wells are part of the same system.',
      tribal: 'Tribal water rights are set by federal law and by settlements with the state, not by the state\'s permit system.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain and snow: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'], S.law, S.gmp],
    },
    legend: {
      rain: 'Colors show average rain and snow per year, from under 8 inches in the deserts to more than 50 on the highest Wasatch peaks. PRISM 1991–2020 normals.',
      groundA: 'Plan adopted since 2012 to bring pumping down', groundB: 'Other groundwater plan area',
      ground: 'Dashed white lines are the river basins the state uses for planning. Every well in Utah needs a water right, inside these areas or not.',
      snow: 'Where snow usually builds up (drawn from elevation and precipitation; not a live snow map). Winter 2025–26 had far less.',
    },
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 3 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rain and snow (PRISM 1991–2020 normals). Large rivers and lakes are from Natural Earth. Smaller rivers, reservoir outlines, planning basins, canals and groundwater plan areas are from the Utah Department of Natural Resources. Three tunnels and four reservoir outlines are from OpenStreetMap contributors. Some conveyances are not drawn because no public map of their route was found: the Syar Tunnel and Diamond Fork pipelines, the Salt Lake and Jordan aqueducts, and the pipeline that fills Sand Hollow and Quail Creek. Lake outlines show a full lake, not the 2026 level. Tribal lands are from the Census Bureau. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. Figures are as of 12 November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'A desert state that runs on snow', text: 'Utah takes about 5.1 million acre-feet of water a year from its rivers and wells. Three-quarters of it goes to farms. The panel shows which river basins the water comes from and where it goes.', view: 'home', home: true },
      { title: 'It arrives as snow', text: 'The white areas are where snow usually builds up in winter. About 95% of the state\'s water supply starts there. On 1 April 2026 the snowpack was 22% of the median, the lowest on record, so this year\'s readings on the map are far below normal.', view: 'home', season: 'winter', select: 'snow', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'A lake with no outlet', text: 'Great Salt Lake only loses water by evaporation. It stood at 4,190.0 feet on 12 November 2026. The record low is 4,188.5 feet, and the state counts 4,198 feet as the lowest healthy level. Getting there by 2055 would take about 800,000 acre-feet more inflow every year.', box: [-113.3, 40.55, -111.7, 41.85], zoom: 1.1, select: 'gsl', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Where the lake\'s water goes', text: 'The Bear River brings about 64% of the river water that reaches the lake. Canals take water out just upstream for farms. Across the lake\'s basin, farms account for 65% of the water people use up, and cities and industry for about 27%.', box: [-112.7, 41.3, -111.6, 42.0], zoom: 1.4, select: 'bearfarms', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Water through the mountains', text: 'The turquoise lines are tunnels. The Central Utah Project gathers streams in the Colorado River basin, stores the water in Strawberry Reservoir, and sends about 101,900 acre-feet a year under the Wasatch range to Utah Valley and the Salt Lake area.', box: [-112.0, 39.95, -110.6, 40.75], zoom: 1.4, select: 'cup', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'A city under its own mountains', text: 'Salt Lake City gets 50 to 60% of its water from streams in the Wasatch Mountains beside it. On 19 March 2026 it declared a Stage 2 water shortage, its first since 2022, and asked for a cut of 10 million gallons a day.', lon: -111.75, lat: 40.7, zoom: 1.3, select: 'slc', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'A river used to the last drop', text: 'The Sevier River starts and ends inside Utah, and farms take nearly all of it. Its largest reservoir, Sevier Bridge, held 2% of what it can hold on 1 November 2026. That is a reading from a record-dry year.', box: [-112.9, 38.2, -111.5, 39.9], zoom: 1, select: 'sevierbridge', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Valleys that run on wells', text: 'The shaded areas have state groundwater plans. Around Cedar City, wells pump over 7,000 acre-feet a year more than the aquifer can sustain. The state has set a deadline of 2080 to end that. The round fields to the west are sprinklers fed by wells.', box: [-114.0, 37.4, -112.5, 38.2], zoom: 1.2, select: 'cedarcity', layers: ['rivers', 'ground', 'cities', 'farms'] },
      { title: 'Growth in the driest corner', text: 'Washington County had 258,304 people in 2024 and relies almost entirely on the Virgin River. Its water district plans to meet half of future demand through conservation and most of the rest by cleaning wastewater to drink.', lon: -113.45, lat: 37.15, zoom: 1.3, select: 'stgeorge', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'What happens next', text: 'Lake Powell ended September 2026 at 22% of its usable capacity, after setting a record low in August. Utah faces no mandatory cut under the new Colorado River rules, but Flaming Gorge is being drawn down to prop Powell up. Now explore: click any reservoir, tunnel, field or patch of open land.', view: 'home', select: 'powell', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry'] },
    ],
    terrain: {
      // snow line: lower on the wet Wasatch and Uinta ranges, higher over the dry basins and in the south
      snowLine: (lat, p) => 2900 + (39.5 - lat) * 110 - Math.max(-200, Math.min(800, (p - 14) * 45)),
      alpine: 3300, saguaro: () => false,
      pivot: (lon, lat) => lon < -112.2 && (lat < 39.7 || lat > 41.5),
      // redrock canyon country: the Colorado Plateau in the south-east, and the far south-west around St. George
      redrock: (lon, lat, e, cl) => cl((lon - (lat < 37.6 ? -113.9 : -111.7)) / .4, 0, 1) * cl((39.6 - lat) / .5, 0, 1) * cl((2300 - e) / 300, 0, 1),
    },
  };
})();
