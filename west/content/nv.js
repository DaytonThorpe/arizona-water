/* Nevada. Every figure has a source link on its card. Fact sheet and verification log: research/nevada.md.
   Winter 2025-26 set record-low snowpack readings across Nevada, so 2026 storage and lake readings are
   labelled as that year's readings, not as typical values. Figures are as of November 2026. */
(() => {
  const S = {
    usgs15: ['USGS: water use in 2015 (county data)', 'https://doi.org/10.5066/F7TB15V5'],
    wrp: ['Southern Nevada Water Authority: 2026 Water Resource Plan', 'https://www.snwa.com/assets/pdf/water-resource-plan-2026.pdf'],
    snwa: ['Southern Nevada Water Authority: where water comes from', 'https://www.snwa.com/water-resources/where-water-comes-from/'],
    weekly: ['Reclamation weekly update, 8 Nov 2026', 'https://www.usbr.gov/lc/region/g4000/weekly.pdf'],
    crs: ['Congressional Research Service, Oct 2026', 'https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf'],
    niSuit: ['Nevada Independent, Aug 2026', 'https://thenevadaindependent.com/article/nevada-sues-interior-over-cuts-to-already-meager-colorado-river-water-allocation'],
    niAz: ['Nevada Independent, autumn 2026', 'https://thenevadaindependent.com/article/drawing-a-line-in-the-sand-arizona-joins-nevadas-lawsuit-over-colorado-river-cuts'],
    niBank: ['Nevada Independent, autumn 2026', 'https://thenevadaindependent.com/article/nevada-has-lots-of-water-in-a-lake-mead-bank-what-happens-if-water-levels-keep-dropping'],
    niDc: ['Nevada Independent, 2026', 'https://thenevadaindependent.com/article/how-much-water-and-power-do-data-centers-really-use'],
    niReno: ['Nevada Independent, 2026', 'https://thenevadaindependent.com/article/reno-breaks-ground-on-nevadas-first-wastewater-to-drinking-water-plant'],
    niThacker: ['Nevada Independent, Aug 2025', 'https://thenevadaindependent.com/article/settlement-reached-in-messy-thacker-pass-water-dispute'],
    niWalker: ['Nevada Independent, 2023', 'https://thenevadaindependent.com/article/walker-lake-is-on-the-brink-of-collapse-is-this-the-year-it-starts-rebounding'],
    niDv: ['Nevada Independent, June 2022', 'https://thenevadaindependent.com/article/justices-uphold-groundwater-plan-in-ruling-that-could-significantly-affect-water-managementefbfbc'],
    niGeo: ['Nevada Independent, Apr 2024', 'https://thenevadaindependent.com/article/tapping-into-the-heat-beneath-nevadans-feet'],
    niSe: ['Nevada Independent, 2018', 'https://thenevadaindependent.com/article/after-nearly-two-decades-of-drought-state-engineer-tackles-excess-water-rights-and-faces-a-backlash-in-the-courts'],
    dri: ['Desert Research Institute, Jan 2026', 'https://www.dri.edu/wp-content/uploads/Data-Center-Report-Final-2.pdf'],
    hooverDam: ['Reclamation: Hoover Dam', 'https://www.usbr.gov/lc/hooverdam/faqs/damfaqs.html'],
    hooverPower: ['Reclamation: Hoover Dam power', 'https://www.usbr.gov/lc/hooverdam/faqs/powerfaq.html'],
    meadFaq: ['Reclamation: Lake Mead', 'https://www.usbr.gov/lc/hooverdam/faqs/lakefaqs.html'],
    sun24: ['Las Vegas Sun, Feb 2024', 'https://www.lasvegassun.com/news/2024/feb/15/nevada-water-law-ruling-backs-state-engineers-powe/'],
    sun20: ['Las Vegas Sun, Apr 2020', 'https://lasvegassun.com/news/2020/apr/17/las-vegas-giving-up-bid-to-pump-pipe-water-from-ru/'],
    drought: ['Drought.gov snow update, 9 Apr 2026', 'https://www.drought.gov/drought-status-updates/snow-drought-current-conditions-and-impacts-west-2026-04-09'],
    unr: ['University of Nevada, Reno: state climate office', 'https://www.unr.edu/nevada-climate-office/about-our-climate'],
    lcb: ['Nevada Legislative Counsel Bureau, Dec 2019', 'https://www.leg.state.nv.us/Division/Research/Documents/water-overview-2019.pdf'],
    pump: ['Nevada Division of Water Resources: 2017 pumpage inventory', 'https://water.nv.gov/uploads/water-use-inventories-docs/Nevada_Groundwater_Pumpage_2017.pdf'],
    basins: ['Nevada Division of Water Resources: basin map data', 'https://arcgis.water.nv.gov/arcgis/rest/services/NDWR/Basins_State_Engineer_Admin_Boundaries/MapServer/0'],
    lwrfsGis: ['Nevada Division of Water Resources: flow system boundary', 'https://arcgis.water.nv.gov/arcgis/rest/services/NDWR/LWRFS_Boundary/MapServer/0'],
    humModel: ['Nevada Division of Water Resources, 18 Jun 2026', 'https://water.nv.gov/uploads/happening-now-docs/Middle_Humboldt_Model_Released.pdf'],
    humUpdate: ['Nevada Division of Water Resources: Humboldt update, Jun 2025', 'https://water.nv.gov/uploads/humboldt-docs/6-10-2025_Humboldt_Update.pdf'],
    newlands: ['Reclamation: Newlands Project', 'https://www.usbr.gov/mp/lbao/programs/newlands-project.html'],
    newlands2: ['Reclamation: Newlands Project history', 'https://www.usbr.gov/projects/index.php?id=368'],
    derby: ['Reclamation: Derby Dam fact sheet', 'https://www.usbr.gov/mp/mpr-news/docs/factsheets/Derby%20Dam.pdf'],
    tcidGis: ['Route: Nevada Division of Water Resources', 'https://arcgis.water.nv.gov/arcgis/rest/services/NDWR/TCID_Infrastructure/MapServer/0'],
    fallonPost: ['Fallon Post, 12 Mar 2026', 'https://thefallonpost.org/article/8958,tcid-sets-100-water-season-water-orders-begin-march-16'],
    gLahontan: ['USGS gauge: Lahontan Reservoir', 'https://waterdata.usgs.gov/monitoring-location/10312100/'],
    gTahoe: ['USGS gauge: Lake Tahoe', 'https://waterdata.usgs.gov/monitoring-location/10337000/'],
    gPyramid: ['USGS gauge: Pyramid Lake', 'https://waterdata.usgs.gov/monitoring-location/10336500/'],
    gWalker: ['USGS gauge: Walker Lake', 'https://waterdata.usgs.gov/monitoring-location/10288500/'],
    gTopaz: ['USGS gauge: Topaz Lake', 'https://waterdata.usgs.gov/monitoring-location/10297000/'],
    tmwa: ['Truckee Meadows Water Authority: plan summary, 2025', 'https://tmwa.com/wp-content/uploads/2025/10/TMWA-WRP-AtAGlance.pdf'],
    troa: ['Truckee Meadows Water Authority: operating agreement', 'https://tmwa.com/?p=10782'],
    act: ['Public Law 101-618 (1990)', 'https://www.govinfo.gov/content/pkg/STATUTE-104/pdf/STATUTE-104-Pg3289.pdf'],
    enr: ['Engineering News-Record, 2022', 'https://www.enr.com/articles/53987-pipeline-will-bring-water-to-reno-industrial-park'],
    tnc: ['The Nature Conservancy: Stillwater wetlands', 'https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/stillwater-and-carson-lake-wetlands/'],
    usgsWalker: ['USGS: Walker River basin', 'https://www.usgs.gov/centers/nevada-water-science-center/science/hydrology-walker-river-basin'],
    wbc: ['Walker Basin Conservancy', 'https://www.walkerbasin.org/water'],
    ryePatch: ['Reclamation: Rye Patch Dam fact sheet', 'https://www.usbr.gov/mp/mpr-news/docs/factsheets/rye-patch.pdf'],
    humProj: ['Reclamation: Humboldt Project', 'https://www.usbr.gov/mp/lbao/programs/humboldt-project.html'],
    carlin: ['USGS: Carlin Trend groundwater, 2005', 'https://pubs.usgs.gov/publication/sir20055075'],
    kunc: ['KUNC, 21 Sep 2022', 'https://www.kunc.org/regional-news/2022-09-21/a-plan-to-share-the-pain-of-water-scarcity-divides-farmers-in-this-rural-nevada-community'],
    amargosa: ['Amargosa Conservancy, 2024', 'https://www.amargosaconservancy.org/a-new-era-of-nevada-groundwater-management-has-begun-heres-what-it-could-mean-for-the-amargosa-river/'],
    nps: ['National Park Service, 3 Nov 2026', 'https://www.nps.gov/deva/learn/news/rare-devils-hole-pupfish-count-more-than-doubles-since-fall-2025.htm'],
    fws: ['US Fish and Wildlife Service: Devils Hole', 'https://www.fws.gov/story/inside-devils-hole-mysterious-depths-endangered-fish-and-unwavering-partnership'],
    duck: ['Interior Department, 2015', 'https://www.doi.gov/news/pressreleases/secretary-jewell-signs-historic-water-rights-agreement-with-shoshone-paiute-tribes-and-state-of-nevada'],
    farmBureau: ['Nevada Farm Bureau Federation', 'https://files.constantcontact.com/ce74815a701/33823c44-acc2-41ce-8220-27cd2ade4741.pdf'],
    census: ['Tribal lands: US Census Bureau', 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/AIANNHA/MapServer/47'],
    osm: ['Route: OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'],
    nhd: ['Route: USGS National Hydrography Dataset', 'https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer'],
    pit: ['Nevada Division of Environmental Protection: pit lakes', 'https://ndep.nv.gov/uploads/land-mining-faq-docs/Pit_Lakes.pdf'],
  };
  const F = [];
  const add = o => F.push(o);
  const btn = (id, label) => `<p><button class="btn" data-feat="${id}">${label}</button></p>`;
  const dry = '<p>These are readings from 2026, a year of record-low snowpack. They should not be read as typical.</p>';

  // ----------------------------------------------------------------- snow, rivers, law
  add({ id: 'snow', kind: 'snow', name: 'Mountain snowpack', short: 'Snowpack', lon: -115.47, lat: 40.62, tier: 1,
    lede: 'Most of the water in northern Nevada\'s rivers starts as snow in the Sierra Nevada and on the ranges of the Great Basin. In 2026 there was very little of it.',
    stats: [['13%', 'of the usual peak: snow water at Nevada\'s mountain gauges in early April 2026, the lowest on record'], ['1% to 38%', 'of the median, from the Humboldt basin to the Walker basin'], ['34 to 61 days', 'early: when most gauges lost their snow', 1]],
    body: '<p>The snowpack peaked in late February, more than a month early. Reservoir and lake readings on this map come from that year. The marker is in the Ruby Mountains.</p><p>Switch the season to Winter to see where snow usually builds up.</p>',
    sources: [S.drought] });
  add({ id: 'sink', kind: 'lake', kindLabel: 'Dry lake bed', name: 'Humboldt Sink', lon: -118.6, lat: 39.98, tier: 3,
    lede: 'The Humboldt River ends here, in a flat basin with no outlet. Most of Nevada lies in the Great Basin, where rivers never reach the sea.',
    stats: [['10.3 in', 'of rain and snow a year, averaged across Nevada'], ['7.1 in', 'in southern Nevada'], ['14', 'hydrographic regions the state is divided into']],
    body: '<p>Water that reaches a sink evaporates or soaks into the ground. The Truckee, Carson and Walker rivers end the same way, in Pyramid Lake, the Carson Sink and Walker Lake.</p><p>A legislative overview calls Nevada the most arid state in the nation.</p>' + btn('walkerlake', 'Walker Lake') + btn('pyramid', 'Pyramid Lake'),
    sources: [S.unr, S.lcb, S.basins] });
  add({ id: 'law', kind: 'info', name: 'First in time, first in right', short: 'Water law', lon: -119.767, lat: 39.164, tier: 2,
    lede: 'Water in Nevada belongs to the public. The State Engineer, in Carson City, decides who may use it. Older rights are served first when water runs short.',
    stats: [['1903', 'the office of the State Engineer was created'], ['256', 'groundwater basins the state is divided into'], ['50%', 'of them have as many rights as water, or more'], ['2 AF', 'a year a household well may pump without a permit']],
    body: '<p>A right must be used or it is lost. Rights can be sold and moved to a new use, which is how cities have acquired farm water.</p><p>A quarter of the basins have rights to more than twice the water the state estimates they can supply.</p>' + btn('diamond', 'A valley that pumps more than it gets'),
    sources: [S.lcb, S.basins] });
  add({ id: 'humboldt', kind: 'info', name: 'Wells that take from a river', short: 'Humboldt wells', lon: -116.93, lat: 40.64, tier: 2,
    lede: 'The Humboldt River crosses 34 groundwater basins. Wells in those basins lower the river, and the farmers with the oldest river rights are at the far end.',
    stats: [['34', 'groundwater basins the river crosses'], ['2021', 'the State Engineer set interim rules for new groundwater rights that would take from the river'], ['18 Jun 2026', 'the last of three computer models of the river and its wells was released']],
    body: '<p>Nevada law treats rivers and wells under separate chapters, but the water is connected. The models estimate how much each well takes from the river.</p><p>The state has said a draft order to cut off wells is planned, and that it would be a last resort.</p>' + btn('lovelock', 'The farms at the end of the river') + btn('carlin', 'The gold mines'),
    sources: [S.niSe, S.humUpdate, S.humModel] });

  // ----------------------------------------------------------------- Colorado River and Las Vegas
  add({ id: 'lasvegas', kind: 'city', name: 'Las Vegas', lon: -115.2, lat: 36.24, tier: 1, zoom: .9,
    lede: 'More than 2.3 million people live in the Las Vegas area. About 90% of their water comes from the Colorado River and 10% from wells under the valley.',
    stats: [['198,000 AF', 'of Colorado River water used up in 2025'], ['55%', 'drop in water use per person between 2002 and 2024'], ['829,000', 'people added over the same years'], ['2.2M AF', 'saved and stored by 2024']],
    body: '<p>The valley uses less than Nevada\'s 300,000 AF share. The Southern Nevada Water Authority stores the difference in Lake Mead, underground, and with Arizona and California.</p><p>Single-family homes take 42% of the metered water. Resorts take 6.6% and golf courses 5.2%.</p>' + btn('wash', 'Water that is used twice') + btn('turf', 'The grass rules') + btn('bank', 'Where the savings are kept'),
    sources: [S.wrp, S.snwa, S.niAz] });
  add({ id: 'mead', kind: 'hydro', name: 'Lake Mead & Hoover Dam', short: 'Lake Mead', lake: 'Lake Mead', lon: -114.40, lat: 36.08, tier: 1, zoom: .9,
    lede: 'The largest reservoir in the United States. About 90% of southern Nevada\'s water is drawn from it.',
    pct: 27, pctNote: '6.95 million AF on 8 Nov 2026. The surface was at 1,039.7 feet above sea level.',
    stats: [['300,000 AF', 'a year: Nevada\'s share of the Colorado River, the smallest of the seven states'], ['28.9M AF', 'what the lake holds when full'], ['1,034.5 ft', 'projected level at the end of 2026'], ['726 ft', 'height of Hoover Dam, finished in 1935']],
    body: '<p>The lake\'s level decides how much Arizona, California and Nevada may take from the river. Hoover Dam is at the lake\'s southwest end, and Las Vegas draws its water through intakes near it.</p>' + btn('cut', 'The 2027 cut and the lawsuit') + btn('intake', 'How Las Vegas reaches the water'),
    sources: [S.weekly, S.snwa, S.meadFaq, S.hooverDam] });
  add({ id: 'cut', kind: 'info', name: 'The 2027 cut and Nevada\'s lawsuit', short: 'Cut & lawsuit', lon: -114.70, lat: 35.80, tier: 2,
    lede: 'In August 2026 the federal government set Colorado River rules for 2027 and 2028 without agreement among the seven states. Three days later Nevada sued.',
    stats: [['50,000 AF', 'a year Nevada gives up in 2027 and 2028, one sixth of its share'], ['198,000 AF', 'what southern Nevada used in 2025'], ['213,556 AF', 'the largest cut Nevada could face under the rules, about 71% of its share'], ['24 Aug 2026', 'Nevada filed suit in federal court']],
    body: '<p>Arizona gives up 760,000 AF a year and California 440,000. Colorado, Utah, Wyoming and New Mexico have no mandatory cut.</p><p>The larger cut would apply only if shortages on the lower river reached 3.6 million AF a year. The state, its Colorado River Commission and the Southern Nevada Water Authority asked the court to set the decision aside. Arizona later joined the case.</p>' + btn('lasvegas', 'How Las Vegas uses its share'),
    sources: [S.crs, S.niSuit, S.niAz] });
  add({ id: 'intake', kind: 'pump', name: 'The third intake', short: 'Third intake', lon: -114.805, lat: 36.068, tier: 2,
    lede: 'Las Vegas draws its water through intakes in Lake Mead. The lake is now below the level the oldest intake needs, and a third was built deeper.',
    stats: [['875 ft', 'lake level the newest intake and its pumping station can still reach'], ['1,050 and 1,000 ft', 'levels at which the two older intakes stop working'], ['About 20 ft', 'below the lowest level at which Hoover Dam can release water downstream']],
    body: '<p>The intake went into service in 2015. Its pumping station was finished in 2020 and ran through 2022 and part of 2023.</p><p>Las Vegas could still take water from the lake at a level where no water could pass the dam to Arizona, California or Mexico.</p>' + btn('mead', 'Lake Mead'),
    sources: [S.wrp] });
  add({ id: 'wash', kind: 'reclaim', name: 'Las Vegas Wash', short: 'Las Vegas Wash', lon: -114.99, lat: 36.095, tier: 2,
    lede: 'Treated wastewater from Las Vegas flows down this channel back into Lake Mead. Nevada is credited for every gallon returned, and may take that much again.',
    stats: [['45%', 'of the water delivered in the Las Vegas area becomes treated wastewater'], ['99%', 'of that wastewater is recycled'], ['55%', 'of the water delivered is used up, mostly on landscapes and in cooling']],
    body: '<p>Nevada\'s share of the river is counted as water taken out minus water put back. So water used indoors can be used again, and water used outdoors cannot.</p><p>This is why the region\'s rules target lawns, pools and cooling towers, and not showers or toilets.</p>' + btn('turf', 'The grass rules'),
    sources: [S.wrp, S.nhd] });
  add({ id: 'turf', kind: 'info', name: 'Grass, pools and golf', short: 'Grass rules', lon: -115.33, lat: 36.19, tier: 3,
    lede: 'A 2021 state law bars Colorado River water from being used on decorative grass at businesses, apartment complexes, street medians and similar places by the end of 2026.',
    stats: [['End of 2026', 'deadline to stop watering the grass the law covers'], ['600 sq ft', 'largest pool allowed at a new home'], ['4.0 AF', 'of water a year allowed per irrigated acre of golf course, down from 6.3'], ['163,000 gallons', 'a year: a cap on a house\'s use that the water authority may impose if cuts deepen']],
    body: '<p>The law does not cover lawns at single-family homes. New developments may not plant grass at all, new golf courses may not use Colorado River water, and new buildings may not use cooling that evaporates water.</p><p>The water authority has paid people to remove grass since 1999.</p>' + btn('wash', 'Why outdoor water matters most'),
    sources: [S.wrp, S.niBank] });
  add({ id: 'bank', kind: 'recharge', name: 'Water saved for later', short: 'Water bank', lon: -115.02, lat: 36.27, tier: 3,
    lede: 'Southern Nevada stores water it does not use. Some is pumped into the ground under the Las Vegas Valley. More is held in Lake Mead and in Arizona and California.',
    stats: [['342,000 AF', 'stored under the Las Vegas Valley'], ['890,000 AF', 'credited to Nevada in Lake Mead at the end of 2025'], ['614,000 AF', 'stored underground in Arizona'], ['1,000 ft', 'if Lake Mead falls below this level, most of the water stored in it cannot be taken out']],
    body: '<p>Lake Mead stood at about 1,040 feet in November 2026. A dry-case federal projection from October 2026 has it falling below 1,000 feet in March 2028.</p><p>Another 330,000 AF is stored with the Metropolitan Water District of Southern California.</p>',
    sources: [S.niBank, S.wrp, S.weekly] });
  add({ id: 'datacenters', kind: 'datacenter', name: 'Southern Nevada data centers', short: 'Data centers', lon: -115.03, lat: 36.03, tier: 3,
    lede: 'Data centers use water to keep computers cool. In southern Nevada, new ones may not use cooling that evaporates water.',
    stats: [['0.5%', 'of southern Nevada\'s water use goes to data centers'], ['630 AF', 'used by Google\'s Henderson data center in 2024'], ['70+', 'data centers operating or planned in Nevada']],
    body: '<p>Golf courses use more than 5% of southern Nevada\'s water and casinos 7%.</p>' + btn('tric', 'Data centers near Reno'),
    sources: [S.niDc, S.dri] });
  add({ id: 'virgin', kind: 'town', name: 'Mesquite and the Virgin River', short: 'Mesquite', lon: -114.07, lat: 36.80, tier: 3,
    lede: 'The Virgin River crosses the corner of Nevada on its way to Lake Mead. Las Vegas holds rights to it that it has agreed not to develop.',
    stats: [['113,000 AF', 'a year of Virgin River rights granted to the Southern Nevada Water Authority in 1994'], ['5,000 AF', 'of that passed to the local water district'], ['2007', 'the authority suspended plans to use the rest']],
    body: '<p>In exchange, the other Colorado River states agreed to help Nevada find 75,000 AF a year of new supply.</p>',
    sources: [S.wrp] });
  add({ id: 'lwrfs', kind: 'well', name: 'Lower White River Flow System', short: 'White River flow system', lon: -114.93, lat: 36.80, tier: 2,
    lede: 'Seven valleys north of Las Vegas share one deep aquifer. It feeds the warm springs where the Muddy River begins.',
    stats: [['8,000 AF', 'a year is all that can be pumped across the seven valleys, the State Engineer found in 2020'], ['1,100 sq mi', 'area where water levels fell during a two-year pumping test'], ['150,000', 'homes once planned at Coyote Springs, which depends on this water']],
    body: '<p>The springs are the only home of the Moapa dace, an endangered fish. A test from 2010 to 2012 pumped about 8,050 AF a year, and spring flows dropped.</p><p>Water users sued, saying the State Engineer could not manage separate basins as one. In January 2024 the Nevada Supreme Court ruled that he could. Switch on the Groundwater layer to see the area.</p>',
    sources: [S.sun24, S.lwrfsGis] });
  add({ id: 'pipeline', kind: 'plan', name: 'The pipeline that was not built', short: 'Abandoned pipeline', lon: -114.45, lat: 39.2, tier: 2,
    lede: 'In 1989 Las Vegas applied for groundwater under valleys in eastern Nevada, including this one, Spring Valley. A 250-mile pipeline would have carried it south.',
    stats: [['1989', 'the applications were filed'], ['250 mi', 'planned length of the pipeline'], ['84,000 AF', 'a year: the State Engineer\'s estimate of what Spring Valley can supply'], ['2020', 'the water authority gave up the plan']],
    body: '<p>Ranchers, tribes, Utah counties and environmental groups fought the plan in court for more than a decade. In March 2020 a judge ruled against the water rights, and the Southern Nevada Water Authority chose not to appeal.</p><p>The authority then withdrew its remaining applications. Its plans now rest on conservation and the Colorado River.</p>',
    sources: [S.sun20, S.wrp, S.basins] });
  add({ id: 'pahrump', kind: 'town', name: 'Pahrump', lon: -115.98, lat: 36.21, tier: 2,
    lede: 'A town west of Las Vegas that runs on wells. Thousands of homes have their own.',
    stats: [['About 11,500', 'household wells'], ['16,416 AF', 'pumped in the valley in 2017'], ['20,000 AF', 'a year: what the state estimates the valley can supply'], ['2 AF', 'of water rights must be given up before a new household well is drilled']],
    body: '<p>Each household well may pump up to 2 AF a year, so the wells already drilled could by themselves exceed the supply. The State Engineer first set the rule for new wells in December 2017.</p>' + btn('devilshole', 'A spring downstream'),
    sources: [S.amargosa, S.pump, S.basins, S.niSe] });
  add({ id: 'devilshole', kind: 'lake', kindLabel: 'Protected spring', name: 'Devils Hole', lon: -116.291, lat: 36.425, tier: 2,
    lede: 'A water-filled cave in the desert, and the only home of the Devils Hole pupfish. In 1976 the US Supreme Court recognized a water right for the pool itself.',
    stats: [['137', 'pupfish counted on 10 Oct 2026'], ['69', 'counted a year earlier'], ['1976', 'the Supreme Court recognized a water right for the pool'], ['Nearly 450 ft', 'deep, as far as divers have mapped']],
    body: '<p>The fish feed and spawn on one shallow rock shelf. In the late 1960s the water over the shelf began to drop.</p><p>The ruling, Cappaert v. United States, protects a water level high enough to cover the shelf. Biologists released 72 captive-raised fish into the pool between March 2025 and February 2026.</p>',
    sources: [S.nps, S.fws] });
  add({ id: 'amargosa', kind: 'dairy', name: 'Amargosa Valley dairy and alfalfa', short: 'Amargosa farms', lon: -116.44, lat: 36.57, tier: 3,
    lede: 'A large dairy and the alfalfa fields that feed it, watered by wells in one of the driest parts of North America.',
    stats: [['16,920 AF', 'pumped in the Amargosa Desert basin in 2017'], ['24,000 AF', 'a year: what the state estimates the basin can supply'], ['About 15,000 AF', 'a year used by the dairy and its fields, by a conservation group\'s estimate']],
    body: btn('devilshole', 'Devils Hole'),
    sources: [S.pump, S.basins, S.amargosa] });

  // ----------------------------------------------------------------- Truckee, Carson, Walker
  add({ id: 'tahoe', kind: 'lake', name: 'Lake Tahoe', lake: 'Lake Tahoe', lon: -120.03, lat: 39.09, tier: 1, zoom: .9,
    lede: 'A small dam at the lake\'s only outlet makes the top six feet of Lake Tahoe a reservoir. The Truckee River starts there.',
    stats: [['3.4 ft', 'above its natural rim on 12 Nov 2026'], ['6.1 ft', 'of the lake above the rim can be stored and released'], ['744,600 AF', 'held in that top layer when full'], ['1913', 'the dam was built']],
    body: '<p>The Truckee is the lake\'s only outlet. When the lake drops below its rim, nothing flows out, and the river depends on smaller reservoirs downstream.</p><p>A 1990 federal law allots 23,000 AF a year of the Tahoe basin\'s water to California and 11,000 to Nevada.</p>' + btn('reno', 'Reno and Sparks'),
    sources: [S.gTahoe, S.tmwa, S.newlands, S.act] });
  add({ id: 'reno', kind: 'city', name: 'Reno and Sparks', short: 'Reno', lon: -119.81, lat: 39.53, tier: 1, zoom: .9,
    lede: 'About 475,000 people in the Reno area drink the Truckee River. Wells supply 15 to 20% of their water.',
    stats: [['475,000', 'people served by the Truckee Meadows Water Authority'], ['About 4%', 'of the river\'s flow is used by the utility in a normal year, 8% in a drought'], ['86', 'wells'], ['143 to 104', 'gallons used up per customer per day, 2003 and 2024']],
    body: '<p>A 2015 agreement among Nevada, California, the federal government, the utility and the Pyramid Lake Paiute Tribe lets the utility hold back water in upstream reservoirs for dry years.</p><p>Many of the utility\'s water rights were once farm rights in the valley.</p>' + btn('tahoe', 'Lake Tahoe') + btn('renoreuse', 'Turning wastewater into supply'),
    sources: [S.tmwa, S.troa] });
  add({ id: 'renoreuse', kind: 'reclaim', name: 'Reno\'s purified water plant', short: 'Purified water plant', lon: -119.88, lat: 39.66, tier: 3,
    lede: 'In 2026 Reno and its water utility began building a plant that cleans wastewater to drinking standards and puts it into an aquifer. It is the first in Nevada.',
    stats: [['2M gallons', 'a day to be treated'], ['About 2,000 AF', 'a year added to the supply'], ['2029', 'expected finish'], ['$128M', 'in state financing']],
    body: '<p>The utility expects demand to grow by about 20,000 AF over 20 years. The plant would cover about a tenth of that.</p>',
    sources: [S.niReno] });
  add({ id: 'tric', kind: 'datacenter', name: 'Tahoe-Reno Industrial Center', short: 'Industrial center', lon: -119.49, lat: 39.515, tier: 3,
    lede: 'A large industrial park east of Reno, home to large data centers. A pipeline was built to bring it treated wastewater from Sparks instead of river water.',
    stats: [['4,000 AF', 'a year of treated wastewater the pipeline was built to carry'], ['16 mi', 'length of the pipeline'], ['3,820 MW', 'of new power requested by data centers here'], ['5,000 to 37,000 AF', 'a year: projected cooling water for Nevada data centers by 2033']],
    body: '<p>The projection is from the Desert Research Institute and covers the whole state. The range depends on how the buildings are cooled.</p><p>A 2022 report expected the pipeline to be running by early 2023. Its route is not drawn because no public map of it was found.</p>',
    sources: [S.enr, S.dri] });
  add({ id: 'derby', kind: 'reservoir', kindLabel: 'Diversion dam', name: 'Derby Dam', lon: -119.447, lat: 39.586, tier: 2,
    lede: 'The first thing the US Bureau of Reclamation ever built. Since 1905 it has turned part of the Truckee River into a canal bound for farms in another river\'s basin.',
    stats: [['1905', 'completed'], ['1,500 cfs', 'what the canal can take, in cubic feet per second'], ['31 ft', 'high'], ['2020', 'a screen was finished that keeps fish out of the canal']],
    body: '<p>Water sent down the canal does not reach Pyramid Lake, where the Truckee ends. The dam also blocked fish. By the mid-1960s the lake\'s Lahontan cutthroat trout were gone. Federal agencies and the Pyramid Lake Paiute Tribe have since worked to bring them back.</p>' + btn('pyramid', 'Pyramid Lake') + btn('fallon', 'Where the canal water goes'),
    sources: [S.derby, S.newlands] });
  add({ id: 'pyramid', kind: 'lake', name: 'Pyramid Lake', lake: 'Pyramid Lake', lon: -119.55, lat: 40.05, tier: 1, zoom: .9,
    lede: 'The Truckee River ends in this desert lake, which lies within the Pyramid Lake Paiute Reservation. It has no outlet.',
    stats: [['3,801.3 ft', 'above sea level on 2 Nov 2026'], ['1905', 'Derby Dam began diverting the river upstream'], ['2015', 'a new agreement on running the river took effect, after 26 years of talks']],
    body: '<p>The lake is home to the cui-ui, an endangered fish, and to Lahontan cutthroat trout, a threatened one. Its level depends on how much of the Truckee is left after cities and farms take their share.</p>' + btn('pyramidtribe', 'The Pyramid Lake Paiute Tribe') + btn('derby', 'Derby Dam'),
    sources: [S.gPyramid, S.newlands2, S.troa, S.derby] });
  add({ id: 'pyramidtribe', kind: 'tribe', name: 'Pyramid Lake Paiute Tribe', short: 'Pyramid Lake Paiute', lon: -119.36, lat: 39.83, tier: 2,
    lede: 'The lake and the last miles of the Truckee River are on the tribe\'s reservation. The tribe is one of five parties to the agreement that governs the river.',
    stats: [['$25M', 'fisheries fund set up for the tribe by a 1990 federal law'], ['$40M', 'economic development fund under the same law'], ['Dec 2015', 'the river agreement took effect']],
    body: '<p>The 1990 law settled decades of lawsuits over water taken from the river before it reaches the lake. It required the agreement that now governs the river.</p>' + btn('pyramid', 'Pyramid Lake'),
    sources: [S.act, S.troa] });
  add({ id: 'lahontan', kind: 'reservoir', name: 'Lahontan Reservoir', short: 'Lahontan', lake: 'Lahontan Reservoir', lon: -119.122, lat: 39.363, tier: 2, zoom: .9,
    lede: 'The only large reservoir on the Carson River. It also stores Truckee River water that arrives by canal.',
    pct: 20, pctNote: '57,870 AF of 289,721 AF on 12 Nov 2026, after the irrigation season',
    stats: [['211,823 AF', 'held on 10 March 2026, before the season'], ['100%', 'of a full supply was promised to farms in March 2026'], ['1915', 'the dam was completed', 1]],
    body: '<p>The reservoir is drawn down every summer and refills in winter and spring. ' + 'The November reading follows a year of record-low snowpack.</p>' + btn('fallon', 'The farms it waters'),
    sources: [S.gLahontan, S.newlands, S.fallonPost] });
  add({ id: 'fallon', kind: 'farm', name: 'Fallon farms', short: 'Fallon', lon: -118.78, lat: 39.47, tier: 2, zoom: .9,
    lede: 'The Newlands Project was one of the first federal irrigation projects in the United States. It waters farms around Fallon with the Carson River and part of the Truckee.',
    stats: [['1903', 'the project was authorized'], ['About 55,000', 'acres of farmland around Fallon'], ['68.5 mi', 'of main canals'], ['285,000', 'acres of alfalfa were harvested across Nevada in 2022, the state\'s largest crop']],
    body: '<p>The highlighted line on the map is the Truckee Canal, which carries Truckee River water about 31 miles to Lahontan Reservoir.</p><p>Water from about 6,000 acres of project land has been moved to the wetlands downstream.</p>' + btn('lahontan', 'Lahontan Reservoir') + btn('stillwater', 'The wetlands'),
    sources: [S.newlands, S.newlands2, S.farmBureau, S.tcidGis] });
  add({ id: 'stillwater', kind: 'lake', kindLabel: 'Wetlands', name: 'Stillwater wetlands', short: 'Stillwater', lon: -118.50, lat: 39.56, tier: 2,
    lede: 'Marshes at the end of the Carson River, used by migrating birds. They shrank after the river was put to work for farms, and have been partly restored with purchased water rights.',
    stats: [['Under 10,000', 'acres of wetland remained at the low point'], ['Nearly 30,000 AF', 'of water rights bought for the wetlands since 1989'], ['250,000+', 'waterfowl use the wetlands']],
    body: '<p>The rights were bought by the state, the federal wildlife agency and conservation groups, in about fifty purchases.</p>' + btn('fallon', 'Fallon farms'),
    sources: [S.tnc, S.newlands2] });
  add({ id: 'fallontribe', kind: 'tribe', name: 'Fallon Paiute-Shoshone Tribe', short: 'Fallon Paiute-Shoshone', lon: -118.62, lat: 39.51, tier: 3,
    lede: 'The tribe\'s reservation lies inside the Newlands Project. A 1990 federal law settled its water claims.',
    stats: [['$43M', 'settlement fund set up by the 1990 law'], ['1990', 'the settlement became law']],
    body: '<p>The fund pays for repairs to the reservation\'s irrigation system and for economic development.</p>',
    sources: [S.act] });
  add({ id: 'walkerlake', kind: 'lake', name: 'Walker Lake', lake: 'Walker Lake', lon: -118.71, lat: 38.70, tier: 1, zoom: .9,
    lede: 'The Walker River ends in this lake. Farms upstream take most of the river, and the lake has been shrinking and growing saltier since the 1880s.',
    stats: [['Nearly 160 ft', 'drop in the lake\'s level since 1882'], ['3,914 ft', 'above sea level on 12 Nov 2026'], ['2009', 'the last Lahontan cutthroat trout was caught here'], ['59%', 'of the water needed to restore the fishery has been bought']],
    body: '<p>As the lake shrinks, its salt is concentrated. The water held about 2,500 milligrams of dissolved salts per liter in 1882 and about 24,000 in recent measurements.</p><p>Since 2005 a federal program has bought water rights from farmers who choose to sell. The first of that water reached the lake in 2019.</p>' + btn('walkerfarms', 'The farms upstream'),
    sources: [S.usgsWalker, S.gWalker, S.niWalker, S.wbc] });
  add({ id: 'walkerfarms', kind: 'farm', name: 'Mason and Smith valleys', short: 'Mason Valley', lon: -119.17, lat: 38.93, tier: 2,
    lede: 'Two farm valleys on the Walker River around Yerington. They irrigate with river water and with wells.',
    stats: [['43,000+', 'irrigated acres in the Walker River basin in 2017'], ['30,414 AF', 'pumped from wells in Mason Valley in 2017'], ['25,000 AF', 'a year: what the state estimates Mason Valley\'s aquifer can supply']],
    body: '<p>In an average or dry year, farms use up most of the river\'s flow before it reaches Walker Lake.</p>' + btn('walkerlake', 'Walker Lake'),
    sources: [S.niWalker, S.usgsWalker, S.pump, S.basins] });
  add({ id: 'walkertribe', kind: 'tribe', name: 'Walker River Paiute Tribe', short: 'Walker River Paiute', lon: -118.81, lat: 38.95, tier: 3,
    lede: 'The Walker River crosses the tribe\'s reservation on its last miles to Walker Lake.',
    body: btn('walkerlake', 'Walker Lake') + btn('walkerfarms', 'The farms upstream'),
    sources: [S.niWalker, S.census] });
  add({ id: 'topaz', kind: 'reservoir', name: 'Topaz Lake', lake: 'Topaz Lake', lon: -119.53, lat: 38.69, tier: 3,
    lede: 'A reservoir on the California line, filled from the West Walker River.',
    stats: [['16,440 AF', 'held on 12 Nov 2026']],
    body: dry + btn('walkerfarms', 'The farm valleys downstream'),
    sources: [S.gTopaz] });

  // ----------------------------------------------------------------- Humboldt and the north
  add({ id: 'ryepatch', kind: 'reservoir', name: 'Rye Patch Reservoir', short: 'Rye Patch', lake: 'Rye Patch Reservoir', lon: -118.257, lat: 40.694, tier: 2,
    lede: 'A reservoir on the Humboldt River. It holds water over from wet years for the farms around Lovelock.',
    stats: [['213,000 AF', 'total capacity'], ['1936', 'the dam was completed'], ['21 mi', 'long when full']],
    body: '<p>The Humboldt\'s flow varies widely from year to year. No storage reading for 2026 is shown because the public gauge reports only the water level.</p>' + btn('lovelock', 'Lovelock farms'),
    sources: [S.ryePatch, S.humProj] });
  add({ id: 'lovelock', kind: 'farm', name: 'Lovelock farms', short: 'Lovelock', lon: -118.47, lat: 40.16, tier: 2,
    lede: 'The last farms on the Humboldt River, just above the sink where it ends.',
    stats: [['30,000', 'irrigated acres, roughly'], ['37,085 AF', 'pumped from wells for irrigation in Pershing County in 2017']],
    body: '<p>The farms depend on water that has to pass every well and ditch upstream. A 2015 court case over the river\'s older rights pushed the state to study how much those wells take.</p>' + btn('humboldt', 'Wells that take from a river') + btn('ryepatch', 'Rye Patch Reservoir'),
    sources: [S.humProj, S.pump, S.niSe] });
  add({ id: 'carlin', kind: 'mine', kindLabel: 'Gold mines', name: 'Carlin Trend gold mines', short: 'Carlin Trend', lon: -116.36, lat: 40.98, tier: 1, zoom: .9,
    lede: 'Large open-pit gold mines north of Carlin. Their pits go far below the water table, so wells around them pump constantly to keep the pits dry.',
    stats: [['Almost 130,000 AF', 'pumped by four mines in each of 1994 and 1998'], ['1,600+ ft', 'drop in the water table at the deepest mine between 1990 and 2003'], ['34,153 AF', 'pumped for mining in the two basins around the mines in 2017'], ['8%', 'of the groundwater pumped in Nevada in 2017 was for mining']],
    body: '<p>Water the mines do not need is stored in reservoirs, used on farms in place of well water, or left to soak back into the ground. When a mine closes and the pumps stop, the pit floods over a number of years and becomes a lake.</p>' + btn('humboldt', 'The Humboldt River and its wells'),
    sources: [S.carlin, S.pump, S.pit] });
  add({ id: 'orovada', kind: 'farm', name: 'Quinn River Valley farms', short: 'Quinn River Valley', lon: -117.78, lat: 41.52, tier: 2,
    lede: 'Round fields near Orovada, watered by wells. Humboldt County pumps more groundwater than any other county in Nevada.',
    stats: [['52,918 AF', 'pumped in the Orovada part of the valley in 2017'], ['60,000 AF', 'a year: what the state estimates the whole valley can supply'], ['281,526 AF', 'pumped in Humboldt County in 2017, 23% of the state total']],
    body: btn('thacker', 'A lithium mine in the same valley'),
    sources: [S.pump, S.basins] });
  add({ id: 'thacker', kind: 'mine', kindLabel: 'Lithium mine', name: 'Thacker Pass lithium mine', short: 'Thacker Pass', lon: -118.05, lat: 41.71, tier: 2,
    lede: 'A lithium mine under construction in the Quinn River Valley. Its water comes from wells in a farming basin, and a neighboring rancher challenged its rights in court.',
    stats: [['About 2,600 AF', 'a year needed once the first phase is running'], ['About 200 AF', 'a year needed during construction'], ['31 Jul 2025', 'the company and the rancher settled'], ['Late 2027', 'first phase expected to be complete']],
    body: '<p>In spring 2025 a state court ruled for the rancher. The company then bought water rights from him, and he agreed to drop his objections.</p>' + btn('orovada', 'The valley\'s farms'),
    sources: [S.niThacker] });
  add({ id: 'silverpeak', kind: 'mine', kindLabel: 'Lithium brine', name: 'Silver Peak lithium', short: 'Silver Peak', lon: -117.60, lat: 37.77, tier: 3,
    lede: 'Lithium here is not dug up. Salty groundwater is pumped into ponds in Clayton Valley and left to evaporate, and the lithium is taken from what remains.',
    stats: [['8,387 AF', 'pumped for mining in Clayton Valley in 2017'], ['20,000 AF', 'a year: what the state estimates the valley can supply']],
    sources: [S.pump, S.basins] });
  add({ id: 'diamond', kind: 'farm', name: 'Diamond Valley', lon: -115.97, lat: 39.70, tier: 1, zoom: .9,
    lede: 'A valley of hay fields near Eureka where the state gave out rights to four times the water the aquifer gets. Farmers here agreed to share the cuts, and Nevada\'s highest court let them.',
    stats: [['74,069 AF', 'pumped in 2017'], ['30,000 AF', 'a year: what the state estimates the valley can supply'], ['2 ft', 'a year the water table has fallen, on average, for more than 50 years'], ['35 years', 'over which the farmers\' plan phases in cuts']],
    body: '<p>Under Nevada law the newest rights would be shut off first, which would have stopped more than half the pumping. In 2018 a majority of water users voted for a plan that cuts everyone, the newest rights most.</p><p>Holders of older rights sued. In June 2022 the Nevada Supreme Court upheld the plan by 4 votes to 3. Diamond Valley is the only place the state has declared a critical management area, in 2015.</p>' + btn('law', 'How water rights work'),
    sources: [S.pump, S.basins, S.kunc, S.niDv] });
  add({ id: 'duckvalley', kind: 'tribe', name: 'Shoshone-Paiute Tribes of Duck Valley', short: 'Duck Valley', lon: -116.10, lat: 41.95, tier: 2,
    lede: 'The reservation straddles the Idaho line on the Owyhee River, which flows north to the Snake. An agreement on the tribes\' water rights on the Nevada side was signed in 2015.',
    stats: [['294,000', 'acres, about half in each state'], ['$60M', 'for water projects and the reservation\'s irrigation system'], ['2009', 'Congress authorized the settlement']],
    body: '<p>The agreement sets the tribes\' rights on the East Fork of the Owyhee River and how they relate to ranchers upstream.</p>',
    sources: [S.duck] });
  add({ id: 'geothermal', kind: 'power', kindLabel: 'Geothermal power', name: 'Geothermal power plants', short: 'Geothermal', lon: -117.855, lat: 39.967, tier: 3,
    lede: 'Hot water deep under the Great Basin is pumped up to make electricity. Nevada produces more geothermal power than any state except California.',
    stats: [['27', 'geothermal plants, mostly in northern Nevada (2024)'], ['About 9%', 'of the electricity generated in Nevada'], ['827 MW', 'combined capacity']],
    body: '<p>The marker is at the Dixie Valley plant. Others are spread across the northern half of the state.</p>',
    sources: [S.niGeo] });

  // ----------------------------------------------------------------- lines and areas
  // only rivers that usually carry water get a styled line; the rest fall back to the app's thin "minor stream" style
  const riverStyle = {
    Colorado: { w: 5 }, Humboldt: { w: 2.4, reaches: [{ test: (lon, lat) => lon < -118.3 && lat < 40.47, w: 1.2 }, { test: lon => lon > -115.6, w: 1.6 }] },
    Truckee: { w: 2.6, reaches: [{ test: (lon, lat) => lon > -119.44 && lat > 39.55, w: 1.5 }] },
    Carson: { w: 2, reaches: [{ test: lon => lon > -119.05, w: 1 }] }, 'East Fork Carson': { w: 1.4 }, 'West Fork Carson': { w: 1.1 },
    Walker: { w: 1.8, reaches: [{ test: lon => lon > -118.95, w: 1 }] }, 'East Walker': { w: 1.3 }, 'West Walker': { w: 1.4 },
    Virgin: { w: 1.6 }, Muddy: { w: 1.1 }, 'Las Vegas Wash': { w: 1.5 }, Owyhee: { w: 1.4 },
    Owens: { w: 1.2 }, 'San Joaquin': { w: 1.6 }, Feather: { w: 1.4 }, Pit: { w: 1.2 },
  };
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const rivers = {
    Colorado: rv('The Colorado River forms Nevada\'s southern tip. Nevada\'s share is 300,000 AF a year, the smallest of the seven states that divide the river.',
      [['300,000 AF', 'a year: Nevada\'s share'], ['198,000 AF', 'used up by southern Nevada in 2025'], ['50,000 AF', 'a year Nevada gives up in 2027 and 2028']], btn('mead', 'Lake Mead') + btn('cut', 'The cut and the lawsuit'), [S.crs, S.niAz]),
    Humboldt: rv('The longest river that starts and ends inside Nevada. It runs west from the mountains near Elko and disappears into a sink past Lovelock.',
      [['34', 'groundwater basins the river crosses'], ['1%', 'of the median: snow in the Humboldt basin in early April 2026']], btn('humboldt', 'Wells that take from the river') + btn('lovelock', 'Lovelock farms') + btn('sink', 'Where it ends'), [S.niSe, S.drought]),
    Truckee: rv('The Truckee flows from Lake Tahoe through Reno to Pyramid Lake. The line thins below Derby Dam, where a canal takes part of the river to farms near Fallon.',
      [['About 226,000 AF', 'a year of rights on the river, fixed by a 1944 court decree'], ['Dec 2015', 'a new operating agreement took effect']], btn('tahoe', 'Lake Tahoe') + btn('reno', 'Reno and Sparks') + btn('derby', 'Derby Dam') + btn('pyramid', 'Pyramid Lake'), [S.tmwa, S.troa]),
    Carson: rv('The Carson River rises in the Sierra Nevada south of Lake Tahoe and ends in the desert past Fallon. Lahontan is its only large reservoir.',
      [['289,721 AF', 'capacity of Lahontan Reservoir'], ['About 55,000', 'acres of farmland it waters around Fallon']], btn('lahontan', 'Lahontan Reservoir') + btn('fallon', 'Fallon farms') + btn('stillwater', 'The wetlands at the end'), [S.newlands]),
    Walker: rv('The Walker River runs from the Sierra Nevada through farm valleys around Yerington to Walker Lake.',
      [['Nearly 160 ft', 'drop in Walker Lake since 1882'], ['43,000+', 'irrigated acres in the basin in 2017']], btn('walkerfarms', 'Mason and Smith valleys') + btn('walkerlake', 'Walker Lake'), [S.usgsWalker, S.niWalker]),
    'East Walker': rv('The east branch of the Walker River. It joins the west branch above Yerington.', [], btn('walkerfarms', 'Mason and Smith valleys'), [S.usgsWalker]),
    'West Walker': rv('The west branch of the Walker River. Topaz Lake stores some of its water for farms downstream.', [['16,440 AF', 'held in Topaz Lake on 12 Nov 2026']], btn('topaz', 'Topaz Lake'), [S.gTopaz]),
    Virgin: rv('The Virgin River flows out of Utah and Arizona, past Mesquite, into Lake Mead.', [['113,000 AF', 'a year of rights granted to the Southern Nevada Water Authority in 1994 and not developed']], btn('virgin', 'Mesquite and the Virgin River'), [S.wrp]),
    Muddy: rv('A short river fed by warm springs north of Las Vegas. Its springs are the only home of the Moapa dace, an endangered fish.', [['8,000 AF', 'a year: the limit the state found for pumping from the aquifer that feeds the springs']], btn('lwrfs', 'The aquifer that feeds it'), [S.sun24]),
    'Las Vegas Wash': rv('The channel that carries Las Vegas\'s treated wastewater back to Lake Mead.', [['99%', 'of the area\'s wastewater is recycled, most of it by this route']], btn('wash', 'Water that is used twice'), [S.wrp]),
    Amargosa: rv('A desert river that runs mostly underground. It starts north of Beatty and ends in Death Valley.', [], btn('devilshole', 'Devils Hole') + btn('amargosa', 'Amargosa farms'), [S.amargosa]),
    Quinn: rv('A small river that ends in the Black Rock Desert. The farms in its valley run on wells.', [['52,918 AF', 'pumped in the Orovada part of the valley in 2017']], btn('orovada', 'Quinn River Valley farms'), [S.pump]),
    Owyhee: rv('The Owyhee flows north out of Nevada, across the Duck Valley Reservation, to the Snake River.', [], btn('duckvalley', 'Duck Valley'), [S.duck]),
    _default: rv('One of the streams that carry mountain snow into Nevada\'s desert valleys. Many of them end in a dry lake bed.', [], '', [S.basins]),
  };
  const canals = {
    'Truckee Canal': { kind: 'Water moved between river basins', lede: 'Carries Truckee River water from Derby Dam to Lahontan Reservoir, on the Carson River. Water sent this way does not reach Pyramid Lake.',
      stats: [['About 31 mi', 'long'], ['1,500 cfs', 'the most the dam can divert, in cubic feet per second'], ['1906', 'completed']], body: btn('derby', 'Derby Dam') + btn('lahontan', 'Lahontan Reservoir') + btn('pyramid', 'Pyramid Lake'), sources: [S.derby, S.newlands2, S.tcidGis] },
    'V-Line Canal': { lede: 'A main canal of the Newlands Project. It carries water from the Carson River below Lahontan Dam to farms around Fallon.', body: btn('fallon', 'Fallon farms'), sources: [S.newlands, S.tcidGis] },
    'Duck Valley Canal': { lede: 'An irrigation canal on the Duck Valley Reservation.', body: btn('duckvalley', 'Duck Valley'), sources: [S.osm] },
    'Pitt-Taylor Diversion Canal': { lede: 'Carries Humboldt River water to side reservoirs above Rye Patch.', body: btn('ryepatch', 'Rye Patch Reservoir'), sources: [S.osm] },
    _newlands: { lede: 'One of the main canals of the Newlands Project, which waters farms around Fallon.', stats: [['68.5 mi', 'of main canals in the project']], body: btn('fallon', 'Fallon farms'), sources: [S.newlands2, S.tcidGis] },
    _default: { lede: 'An irrigation canal that carries river water to farm fields.', body: '<p>Only the larger named canals are drawn.</p>', sources: [S.osm] },
  };
  for (const n of ['T-Line Canal', 'S-Line Canal', 'A-Line Canal', 'L-Line Canal', 'G-Line Canal']) canals[n] = canals._newlands;

  // groundwater basins: State Engineer's perennial yield, area and 2017 pumpage (build/prep_nv.py writes this table)
  const BT = /*BASIN_TABLE*/{"Lower White River Flow System":{k:"lwrfs",sq:1550},"Diamond Valley":{py:30000,sq:746,pu:74069},"Alkali Spring Valley":{py:3000,sq:306,pu:79},"Amargosa Desert":{py:24000,sq:978,pu:16920,part:1},"Antelope Valley (basin 057)":{py:9000,sq:452,pu:17648},"Antelope Valley (basin 093)":{py:150,sq:16,pu:255},"Antelope Valley (basin 106)":{py:2600,sq:116,pu:2291},"Bedell Flat":{py:550,sq:51,pu:90},"Big Smoky Valley: Northern Part":{py:65000,sq:1315,pu:14901},"Big Smoky Valley: Tonopah Flat":{py:6000,sq:1599,pu:6410},"Black Mountains Area":{py:1300,sq:637,pu:1634},"Black Rock Desert":{py:30000,sq:2172,pu:7835},"Boulder Flat":{py:30000,sq:546,pu:32488},"Bradys Hot Springs Area":{py:2500,sq:178,pu:34},"Buena Vista Valley":{py:10000,sq:737,pu:7523},"Buffalo Valley":{py:8000,sq:500,pu:7308},"Carico Lake Valley":{py:4000,sq:377,pu:1326},"Carson Desert":{py:2500,sq:2013,pu:14086},"Carson Desert: Packard Valley":{py:710,sq:169,pu:16},"Carson Valley":{py:49000,sq:415,pu:23425},"Churchill Valley":{py:1600,sq:496,pu:2020},"Clayton Valley":{py:20000,sq:557,pu:8802},"Clover Valley":{py:19000,sq:452,pu:9416},"Clovers Area":{py:72000,sq:722,pu:9743},"Cold Spring Valley":{py:1500,sq:30,pu:1373},"Colorado Valley":{py:200,sq:559,pu:810},"Cowkick Valley":{py:6100,sq:108,pu:6},"Crescent Valley":{py:16000,sq:750,pu:10782},"Dayton Valley":{sq:365,pu:7158},"Desert Valley":{py:5000,sq:1059,pu:25317},"Dixie Creek-Tenmile Creek Area":{py:13000,sq:390,pu:3811},"Dixie Valley":{py:15000,sq:1307,pu:9855},"Duck Lake Valley":{py:8000,sq:537,pu:1798},"Eagle Valley":{sq:71,pu:4257},"East Walker Area":{py:5500,sq:592,pu:7062},"Eastgate Valley Area":{py:6100,sq:214,pu:10},"Eldorado Valley":{py:500,sq:532,pu:706},"Elko Segment":{py:13000,sq:318,pu:8336},"Fairview Valley":{py:6100,sq:287,pu:13},"Fernley Area":{py:600,sq:124,pu:5971},"Fish Lake Valley":{py:30000,sq:710,pu:29342},"Gabbs Valley":{py:5000,sq:1279,pu:11523},"Goshute Valley":{py:11000,sq:957,pu:2110},"Grass Valley (basin 071)":{py:13000,sq:522,pu:21035},"Grass Valley (basin 138)":{py:13000,sq:594,pu:3196},"Hardscrabble Area":{py:34000,sq:165},"Hidden Valley":{sq:32,pu:9},"Honey Lake Valley":{py:13000,sq:193,pu:932},"Hualapai Flat":{py:6700,sq:315,pu:6165},"Huntington Valley":{py:14000,sq:791,pu:622},"Imlay Area":{py:3000,sq:762,pu:2245},"Independence Valley":{py:9000,sq:564,pu:4434},"Indian Springs Valley":{py:500,sq:671,pu:619,part:1},"Ivanpah Valley: Northern Part":{py:250,sq:77,pu:280},"Ivanpah Valley: Southern Part":{py:700,sq:256,pu:254},"Jean Lake Valley":{py:50,sq:91,pu:150},"Jersey Valley":{py:250,sq:135,pu:10},"Kelley Creek Area":{py:72000,sq:301,pu:11115},"Kings River Valley: Rio King Subarea":{py:17000,sq:298,pu:46620},"Kings River Valley: Sod House Subarea":{py:17000,sq:116,pu:6},"Kobeh Valley":{py:15000,sq:862,pu:1913},"Lake Tahoe Basin":{sq:136,pu:8828},"Lake Valley":{py:12000,sq:562,pu:15442},"Lamoille Valley":{py:83000,sq:251,pu:1102},"Las Vegas Valley":{py:25000,sq:1544,pu:73010},"Lemmon Valley: Eastern Part":{py:400,sq:41,pu:1328},"Lemmon Valley: Western Part":{py:900,sq:57,pu:951},"Little Humboldt Valley":{py:34000,sq:986,pu:5974},"Long Valley":{py:10000,sq:435,pu:297},"Long Valley: Long Valley":{sq:21,pu:290},"Lovelock Valley":{py:2200,sq:630,pu:342},"Lovelock Valley: Oreana Subarea":{py:2000,sq:101,pu:1240},"Lower Meadow Valley Wash":{py:25000,sq:944,pu:2472},"Lower Moapa Valley":{py:50,sq:272,pu:2940},"Lower Reese River Valley":{sq:594,pu:10192},"Maggie Creek Area":{py:4000,sq:394,pu:20861},"Marys Creek Area":{py:13000,sq:64,pu:451},"Marys River Area":{py:83000,sq:1085,pu:5867},"Mason Valley":{py:25000,sq:506,pu:30414},"Mesquite Valley":{py:2200,sq:235,pu:625},"Middle Reese River Valley":{py:14000,sq:319,pu:22193},"Newark Valley":{py:18000,sq:806,pu:8711},"Newcomb Lake Valley":{py:200,sq:7},"North Fork Area":{py:83000,sq:1102,pu:3056},"Oasis Valley":{py:24000,sq:461,pu:243,part:1},"Owyhee River Area":{py:7000,sq:532,pu:242},"Pahranagat Valley":{sq:768,pu:5790},"Pahrump Valley":{py:20000,sq:783,pu:16416},"Panaca Valley":{py:25000,sq:344,pu:14637},"Paradise Valley":{py:34000,sq:602,pu:43826},"Penoyer Valley":{py:4000,sq:694,pu:10926},"Pilot Creek Valley":{py:4500,sq:329,pu:439},"Pine Forest Valley":{py:11000,sq:529,pu:22029},"Pine Valley":{py:20000,sq:1001,pu:3131},"Piute Valley":{py:300,sq:337,pu:849},"Pleasant Valley (basin 088)":{py:3000,sq:39,pu:1663},"Pleasant Valley (basin 130)":{py:2600,sq:282,pu:1117},"Pumpernickel Valley":{py:72000,sq:309,pu:1681},"Pyramid Lake Valley":{py:7000,sq:677,pu:74},"Quinn River Valley: McDermitt Subarea":{py:60000,sq:585,pu:3317,part:1},"Quinn River Valley: Orovada Subarea":{py:60000,sq:626,pu:52918,part:1},"Ralston Valley":{py:6000,sq:980,pu:676},"Red Rock Valley":{sq:42,pu:721},"Rock Creek Valley":{py:2800,sq:442,pu:533},"Ruby Valley":{py:37000,sq:1010,pu:13379},"Salmon Falls Creek Area":{py:7400,sq:1222,pu:4375},"San Emidio Desert":{py:4600,sq:305,pu:4841},"Sarcobatus Flat":{py:3000,sq:801,pu:51},"Silver State Valley":{py:5900,sq:320,pu:17059,part:1},"Skedaddle Creek Valley":{py:200,sq:43},"Smith Valley":{py:17000,sq:464,pu:14284},"Soda Spring Valley: Eastern Part":{py:600,sq:251,pu:323},"Soda Spring Valley: Western Part":{py:200,sq:129},"South Fork Area":{py:3000,sq:101,pu:66},"Spanish Springs Valley":{py:1000,sq:73,pu:2869},"Starr Valley Area":{py:83000,sq:327,pu:359},"Steptoe Valley":{py:70000,sq:1946,pu:47547},"Stingaree Valley":{py:6100,sq:47,pu:8},"Stone Cabin Valley":{py:2000,sq:979,pu:10224},"Sun Valley":{py:25,sq:9,pu:246},"Susie Creek Area":{py:2000,sq:222,pu:233},"Thousand Springs Valley":{py:1800,sq:155,pu:161},"Thousand Springs Valley: Montello-Crittenden Cr. Area":{py:14000,sq:486,pu:5865},"Thousand Springs Valley: Rocky Butte Area":{py:1400,sq:187,pu:9},"Thousand Springs Valley: Toano-Rock Spring Area":{py:2600,sq:620,pu:85},"Three Lakes Valley: North":{py:3700,sq:289},"Three Lakes Valley: South":{py:4500,sq:320,pu:1017,part:1},"Tracy Segment":{py:11500,sq:295,pu:5232},"Truckee Canyon Segment":{py:2000,sq:79,pu:1827},"Truckee Meadows":{py:27000,sq:204,pu:15849},"Upper Reese River Valley":{py:37000,sq:1143,pu:9433},"Virgin River Valley":{py:3600,sq:906,pu:6799},"Walker Lake Valley: Whiskey Flat-Hawthorne Subarea":{py:5000,sq:538,pu:2434},"Warm Springs Valley":{py:3000,sq:250,pu:3582},"Washoe Valley":{py:15000,sq:84,pu:6501},"Whirlwind Valley":{sq:98,pu:1273},"White Plains":{py:100,sq:166,pu:16},"White River Valley":{py:37000,sq:1599,pu:22155},"Willow Creek Valley":{py:2800,sq:407,pu:536},"Winnemucca Lake Valley":{py:3300,sq:370,pu:6},"Winnemucca Segment":{py:17000,sq:426,pu:21585}}/*END*/;
  const num = n => n.toLocaleString('en-US');
  const desigBase = '<p>In a designated basin the State Engineer can limit new wells, require meters, and decide which uses come first. The yield is the state\'s estimate of how much can be pumped each year without draining the basin. Some neighboring basins share one figure.</p>';
  const amas = {
    'Lower White River Flow System': { lede: 'Seven valleys that share one aquifer. In 2020 the State Engineer ordered that they be managed as a single basin.',
      stats: [['8,000 AF', 'a year: the most that can be pumped across the seven valleys, the state found'], ['About 1,550 sq mi', 'area']], body: btn('lwrfs', 'More on the flow system'), sources: [S.sun24, S.lwrfsGis] },
    _default: { lede: 'A groundwater basin that the State Engineer has designated for closer management.', body: desigBase, sources: [S.basins, S.lcb] },
  };
  const areaLabels = { 'Lower White River Flow System': { minZ: 99 }, 'Diamond Valley': { minZ: 99 }, 'Las Vegas Valley': { at: [-115.5, 36.5], minZ: 1.2 }, 'Pahrump Valley': { at: [-115.75, 36.05], minZ: 1.2 } };   // these two already have marker labels
  const more = { 'Diamond Valley': ['diamond', 'More on Diamond Valley'], 'Pahrump Valley': ['pahrump', 'Pahrump'], 'Amargosa Desert': ['amargosa', 'Amargosa farms'], 'Las Vegas Valley': ['bank', 'Water stored under the valley'],
    'Quinn River Valley: Orovada Subarea': ['orovada', 'Quinn River Valley farms'], 'Boulder Flat': ['carlin', 'The gold mines'], 'Maggie Creek Area': ['carlin', 'The gold mines'], 'Mason Valley': ['walkerfarms', 'Mason and Smith valleys'],
    'Smith Valley': ['walkerfarms', 'Mason and Smith valleys'], 'Clayton Valley': ['silverpeak', 'Silver Peak lithium'] };
  for (const n in BT) {
    const b = BT[n]; if (b.k === 'lwrfs') continue;
    const stats = [];
    if (b.pu) stats.push([num(b.pu) + ' AF', 'pumped from wells in 2017']);
    if (b.py) stats.push([num(b.py) + ' AF', 'a year: the state\'s estimate of what the basin can supply']);
    if (b.sq) stats.push([num(b.sq) + ' sq mi', 'area']);
    amas[n] = { lede: n === 'Diamond Valley' ? 'The only basin Nevada has declared a critical management area. Wells here pump more than twice what the state estimates the aquifer can supply.'
        : `One of 146 groundwater basins, out of 256 in Nevada, that the State Engineer has designated${b.part ? ' in part' : ''}.`,
      stats, body: desigBase + (more[n] ? btn(more[n][0], more[n][1]) : ''), sources: [S.pump, S.basins] };
    if (!areaLabels[n]) areaLabels[n] = { minZ: b.sq > 900 ? .8 : 1.2 };
  }
  const tribes = {
    'Pyramid Lake Paiute': { lede: 'The Pyramid Lake Paiute Reservation surrounds Pyramid Lake, where the Truckee River ends.', body: btn('pyramidtribe', 'The Pyramid Lake Paiute Tribe') + btn('pyramid', 'Pyramid Lake'), sources: [S.act, S.census] },
    'Walker River': { lede: 'The Walker River Paiute Reservation. The Walker River crosses it on the way to Walker Lake.', body: btn('walkertribe', 'The Walker River Paiute Tribe') + btn('walkerlake', 'Walker Lake'), sources: [S.niWalker, S.census] },
    'Fallon Paiute-Shoshone': { lede: 'The Fallon Paiute-Shoshone Reservation, inside the Newlands Project. A 1990 federal law settled the tribe\'s water claims.', body: btn('fallontribe', 'The Fallon Paiute-Shoshone Tribe'), sources: [S.act, S.census] },
    'Duck Valley': { lede: 'The Duck Valley Reservation of the Shoshone-Paiute Tribes, on the Owyhee River at the Idaho line.', body: btn('duckvalley', 'More on Duck Valley'), sources: [S.duck, S.census] },
    'Moapa River': { lede: 'The Moapa River Reservation of the Moapa Band of Paiutes, north of Las Vegas. It lies over the aquifer that feeds the Muddy River springs.', body: btn('lwrfs', 'The aquifer under it'), sources: [S.lwrfsGis, S.census] },
    _default: { lede: 'Tribal land. Where a tribe\'s water rights in Nevada have been decided, it was by a court decree or a settlement approved by Congress.', sources: [S.census] },
  };

  window.MAPCONTENT = {
    meta: { title: 'Nevada Water: an explorable map', h1: 'Nevada Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of Nevada's water system. Use the lists in the side panel to browse the same information without the map.", home: 'Show all of Nevada' },
    features: F, riverStyle, rivers, canals, amas, tribes,
    kinds: {
      lake: ['rivers', 'lake', 'Lake'], tribe: ['cities', 'tribe', 'Tribal nation'], well: ['ground', 'well', 'Groundwater'], farm: ['farms', 'farm', 'Farming region'],
      mine: ['industry', 'mine', 'Mine'], pump: ['reservoirs', 'pump', 'Water intake'], plan: ['canals', 'pump', 'Abandoned pipeline plan'], recharge: ['ground', 'recharge', 'Water banking'],
    },
    sprites: { lake: ['..bbbbbb..', '.bBbbbbBb.', 'bbbbBbbbbb', '.bbBbbbbb.', '..bbbbbb..'] },
    layers: { golf: { on: false } },
    majorCanals: ['truckee'], canalWidths: { truckee: 2.6 }, canalSub: { truckee: 'Water moved between river basins' },
    riverNames: { 'Meadow Valley': 'Meadow Valley Wash', 'S.  Fk.  American': 'South Fork American River' },
    areaKind: n => n === 'Diamond Valley' ? 'Critical management area' : n === 'Lower White River Flow System' ? 'Basins managed as one' : 'Designated groundwater basin',
    areaAlt: n => n !== 'Diamond Valley' && n !== 'Lower White River Flow System',
    areaLabels,
    golfCard: { lede: 'A golf course mapped by OpenStreetMap contributors.', body: '<p>Golf courses take 5.2% of the metered water in the Las Vegas area. Since January 2024 a course there may use 4.0 AF of water a year for each irrigated acre, down from 6.3. New courses may not use Colorado River water.</p>' + btn('turf', 'The grass rules'), sources: [S.wrp, S.osm] },
    fieldSub: 'Farm fields', farmRadiusKm: 45,
    hud: [['3.2M AF', 'water withdrawn per year'], ['3.3M', 'people'], ['27%', 'full: Lake Mead, 8 Nov 2026']],
    budget: {
      title: 'Nevada takes about 3.2 million acre-feet a year from rivers and wells',
      lede: 'Nevada gets about 10 inches of rain and snow a year and is the driest of the 50 states. Nearly three-quarters of the water it takes goes to farms. More than two-thirds of its people live in the Las Vegas area, on a small share of the Colorado River.',
      perDrop: 50000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons.',
      sources: [
        { id: 'surface', label: 'Rivers and lakes', pct: 53, af: 1.704e6, color: 'var(--c-colorado)', layer: 'rivers,reservoirs', feat: 'mead', note: 'The Colorado River in the south. The Truckee, Carson, Walker and Humboldt rivers in the north.' },
        { id: 'ground', label: 'Groundwater', pct: 47, af: 1.526e6, color: 'var(--c-ground)', layer: 'ground', feat: 'diamond', note: 'Pumped from wells. Most farm valleys away from the few rivers depend on it.' },
      ],
      uses: [
        { id: 'ag', label: 'Farms', pct: 72, af: 2.316e6, color: 'var(--c-ag)', layer: 'farms', feat: 'fallon', note: 'Irrigated crops and pasture on about 700,000 acres. Alfalfa is the largest crop.' },
        { id: 'muni', label: 'Cities & towns', pct: 18, af: 0.595e6, color: 'var(--c-muni)', layer: 'cities', feat: 'lasvegas', note: 'Public water systems. Las Vegas returns much of what it takes to Lake Mead, so it uses up less than this.' },
        { id: 'ind', label: 'Mines', pct: 7, af: 0.219e6, color: 'var(--c-ind)', layer: 'industry', feat: 'carlin', note: 'Almost all pumped from the ground, much of it to keep open pits dry.' },
        { id: 'other', label: 'Everything else', pct: 3, af: 0.1e6, color: 'var(--c-reclaimed)', layer: 'ground', feat: 'pahrump', note: 'Household wells, fish farms, power plants, factories and livestock.' },
      ],
      body: `<div class="note">These figures count water <b>withdrawn</b>: taken out of a river or pumped from a well, whether or not some later flows back. They are for 2015, from the US Geological Survey, because Nevada has not published a newer statewide total that covers both rivers and wells.</div>
        <div class="note">The Colorado River is counted differently. Nevada's 300,000 AF share is a limit on water <b>used up</b>: what is taken out minus what is returned. On that measure southern Nevada used 198,000 AF in 2025.</div>
        <div class="note hot"><b>What is changing:</b> Lake Mead is 27% full. From 2027 Nevada gives up 50,000 AF a year of its Colorado River share, and it has sued over the federal plan. <button class="btn" data-feat="cut" style="margin-top:6px">See the cut and the lawsuit</button></div>`,
    },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a lake, a canal, a field, a mine, or open desert.',
    browse: [
      ['Snow, rivers and rules', ['snow', 'law', 'humboldt', 'sink']],
      ['Colorado River and Las Vegas', ['mead', 'cut', 'intake', 'lasvegas', 'wash', 'turf', 'bank', 'datacenters', 'virgin']],
      ['Truckee and Carson rivers', ['tahoe', 'reno', 'renoreuse', 'tric', 'derby', 'pyramid', 'lahontan', 'fallon', 'stillwater']],
      ['Walker River', ['walkerlake', 'walkerfarms', 'topaz']],
      ['Humboldt River and the north', ['ryepatch', 'lovelock', 'carlin', 'orovada', 'thacker', 'geothermal']],
      ['Groundwater', ['diamond', 'lwrfs', 'pipeline', 'pahrump', 'devilshole', 'amargosa', 'silverpeak']],
      ['Tribes', ['pyramidtribe', 'walkertribe', 'fallontribe', 'duckvalley']],
    ],
    riverLabels: [['COLORADO RIVER', -114.52, 35.45, .35, 80], ['HUMBOLDT RIVER', -116.55, 40.78, .32, 8], ['HUMBOLDT R.', -118.05, 40.78, .6, 40], ['TRUCKEE R.', -119.62, 39.47, .7, 0], ['CARSON R.', -119.42, 39.22, .6, -25], ['WALKER R.', -118.98, 39.12, .6, 20],
      ['VIRGIN R.', -114.2, 36.68, .6, -35], ['REESE R.', -117.2, 39.9, .6, -75], ['QUINN R.', -118.2, 41.35, .6, 40], ['OWYHEE R.', -116.25, 41.72, .6, -50], ['AMARGOSA R.', -116.62, 36.72, .6, 50]],
    neighbors: [['OREGON', -118.6, 42.13, 0], ['IDAHO', -115.6, 42.13, 0], ['UTAH', -113.9, 39.6, 90], ['ARIZONA', -113.95, 36.3, 90], ['CALIFORNIA', -118.55, 37.15, 43]],
    spot: {
      rain: inches => `${inches < 8 ? 'Desert.' : inches < 14 ? 'Dry valley or foothill country.' : inches < 25 ? 'Mountain country, wetter than the valleys around it.' : 'High mountain country. Most of this falls as snow, and this is where the rivers start.'} Most of the water Nevada uses comes from mountain snow or from the Colorado River, not from rain where people live.`,
      crop: 'cropland', rest: 'desert, sagebrush or rock', restAlone: 'Desert, sagebrush or bare rock', rulesTitle: 'Water rules here',
      area: n => n === 'Diamond Valley'
        ? 'This is Nevada\'s only critical management area. Wells here pump more than the aquifer gets. Under a plan the farmers wrote and the courts upheld in 2022, every well owner takes a cut that grows over 35 years.'
        : n === 'Lower White River Flow System'
          ? 'Seven valleys here share one aquifer that feeds the Muddy River springs. Since 2020 the State Engineer has managed them as a single basin, and found that only 8,000 acre-feet a year can be pumped across all of them.'
          : 'This is a designated groundwater basin. The State Engineer can limit new wells here, require meters, and decide which uses come first.',
      basin: n => `This spot is in the <b>${n}</b>, one of 14 hydrographic regions that Nevada is divided into. `,
      none: 'Water here is shared by seniority: when it runs short, older rights are served first. A well needs a permit from the State Engineer, and each of the state\'s 256 groundwater basins has an estimate of how much can be pumped. A household well is exempt and may pump up to 2 acre-feet a year.',
      tribal: 'Tribal water rights are set by federal law, court decrees and settlements approved by Congress.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain and snow: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'], S.lcb, S.basins],
    },
    legend: {
      rain: 'About 4 inches a year at Las Vegas, 8 in Diamond Valley, 10 at Reno and Elko, and over 40 on the Sierra Nevada crest west of Lake Tahoe. PRISM 1991–2020 normals.',
      groundA: 'Critical management area, or basins managed as one', groundB: 'Designated groundwater basin',
      ground: 'Dashed white lines are the 14 hydrographic regions. Click a shaded basin for its pumping and the state\'s estimate of its supply.',
      snow: 'Where snow usually builds up (drawn from elevation and precipitation; not a live snow map). Winter 2025–26 had far less.',
    },
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 3 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rain and snow (PRISM 1991–2020 normals). Large rivers and lakes are from Natural Earth. Smaller rivers are from the US Geological Survey's National Hydrography Dataset. Groundwater basins, hydrographic regions and the canals of the Newlands Project are from the Nevada Division of Water Resources. Reservoir outlines, other canals and golf courses are from OpenStreetMap contributors. Tribal lands are from the Census Bureau. Some conveyances are not drawn because no public map of their route was found: the Las Vegas intakes and pipelines at Lake Mead, and the reclaimed-water pipeline to the Tahoe-Reno Industrial Center. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. Figures are as of November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'The driest state', text: 'Nevada averages about 10 inches of rain and snow a year. It takes about 3.2 million acre-feet a year from rivers and wells, and farms take 72% of that. Most of its people live at the southern tip, on a small share of the Colorado River. The panel shows where the water comes from and where it goes.', view: 'home', home: true },
      { title: 'A little snow, in a few places', text: 'The white areas are where snow usually builds up in winter: the Sierra Nevada in the west and the high ranges of the Great Basin. In early April 2026 the snow at Nevada\'s mountain gauges held 13% of its usual peak, the lowest on record.', view: 'home', season: 'winter', select: 'snow', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'One reservoir for 2.3 million people', text: 'About 90% of the Las Vegas area\'s water comes from Lake Mead. Nevada\'s share of the Colorado River is 300,000 acre-feet a year, the smallest of the seven states. On 8 November 2026 the lake was 27% full.', box: [-115.6, 35.75, -114.0, 36.6], zoom: 1.5, select: 'mead', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'Water that is used twice', text: 'Nevada\'s share counts only water that is used up. Treated wastewater flows down the Las Vegas Wash back to Lake Mead, and the state may take that much again. About 99% of the area\'s wastewater is recycled.', box: [-115.45, 35.9, -114.55, 36.4], zoom: 2.4, select: 'wash', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'So the rules are about grass', text: 'Water used outdoors does not come back. A state law bars Colorado River water on decorative grass at businesses and street medians by the end of 2026. New pools are capped at 600 square feet, and golf courses, marked with flags, have a water budget. Use per person fell 55% from 2002 to 2024.', box: [-115.45, 35.9, -114.55, 36.4], zoom: 2.4, select: 'turf', layers: ['rivers', 'reservoirs', 'cities', 'golf'] },
      { title: 'A river split in two', text: 'In the north, the Truckee River runs from Lake Tahoe through Reno toward Pyramid Lake. Since 1905 Derby Dam has turned part of it into the turquoise canal, which carries it to another river\'s reservoir and the farms around Fallon.', box: [-120.25, 38.95, -118.3, 40.3], zoom: 1.3, select: 'derby', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'A lake at the end of a river', text: 'Nevada\'s rivers end in desert lakes and sinks. Farms take most of the Walker River before it reaches Walker Lake, which has dropped nearly 160 feet since 1882. A federal program buys water rights from farmers to send the water back.', box: [-119.75, 38.3, -118.3, 39.3], zoom: 1.5, select: 'walkerlake', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Pumping more than twice the supply', text: 'The shaded areas are groundwater basins under closer state management. In Diamond Valley, the darkest, wells pumped 74,069 acre-feet in 2017. The state estimates the aquifer can supply 30,000. Farmers there agreed to share the cuts, and the courts upheld their plan in 2022.', box: [-117.2, 38.9, -114.9, 40.5], zoom: 1.1, select: 'diamond', layers: ['rivers', 'ground', 'cities', 'farms'] },
      { title: 'Mines, wells and one long river', text: 'Gold mines on the Carlin Trend pump groundwater to keep their pits dry. The Humboldt River runs past them, across 34 groundwater basins, to farms at Lovelock. The state has built models of how much the wells take from the river and is drafting rules.', box: [-118.9, 39.9, -115.3, 41.5], zoom: .95, select: 'carlin', layers: ['rivers', 'reservoirs', 'canals', 'ground', 'farms', 'industry'] },
      { title: 'What happens next', text: 'From 2027 Nevada gives up 50,000 acre-feet a year of Colorado River water. The federal rules allow a cut of up to 213,556 if the shortage deepens. Nevada sued on 24 August 2026 to set the rules aside. Now explore: click any lake, canal, field, mine or patch of open desert.', box: [-116.3, 35.2, -113.9, 37.0], zoom: 1.2, select: 'cut', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry'] },
    ],
    terrain: {
      // snow line: lower on the wet Sierra Nevada, higher over the dry interior ranges and in the south, so valleys stay bare
      snowLine: (lat, p) => 2500 + (39.5 - lat) * 130 - Math.max(-250, Math.min(700, (p - 16) * 32)),
      alpine: 3200, saguaro: () => false,
      pivot: (lon, lat) => lon > -118.4 || lat > 40.6 || lat < 37.2,
      redrock: (lon, lat, e, cl) => cl((lon + 115.2) / .5, 0, 1) * cl((37.3 - lat) / .5, 0, 1) * cl((1900 - e) / 300, 0, 1) * .6,
    },
  };
})();
