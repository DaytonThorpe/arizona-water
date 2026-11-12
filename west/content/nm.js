/* New Mexico. Every figure has a source link on its card. Fact sheet and verification log: research/new_mexico.md.
   Winter 2025-26 was a record-low snow year in New Mexico and the Rio Grande ran at about 30% of its median flow in 2026,
   so 2026 storage and flow readings are labelled as that year's readings, not as typical values. Figures are as of 12 November 2026. */
(() => {
  const S = {
    tr55: ['State Engineer: Water Use by Categories 2015', 'https://www.ose.nm.gov/WUC/wucTechReports/2015/pdf/2015%20WUR%20final_05142019.pdf'],
    plan: ['New Mexico 50-Year Water Action Plan, 2024', 'https://www.nm.gov/wp-content/uploads/2024/01/New-Mexico-50-Year-WaterAction-Plan.pdf'],
    oseOct: ['State Engineer briefing, 26 Oct 2026', 'https://www.nmlegis.gov/handouts/WNR%20102626%20Item%206%20OSE%20ISC%20Session%20Priorities%20and%20Education%20Initiatives.pdf'],
    oseAug: ['State Engineer briefing, 31 Aug 2026', 'https://www.nmlegis.gov/handouts/WNR%20083126%20Item%203%20OSE%20ISC%20TXvNM%20and%20Water%20Managenent%20Efforts.pdf'],
    iscSettle: ['Interstate Stream Commission: the settlement, Sep 2025', 'https://www.nmlegis.gov/handouts/WNR%20091125%20Item%2011%20ISC%20TX%20v%20NM%20Settlement.pdf'],
    lfcTx: ['Legislative Finance Committee brief, Nov 2025', 'https://www.nmlegis.gov/handouts/ALFC%20111725%20Item%2020%20Texas%20vs.%20NM%20water%20settlement%20update.pdf'],
    gov: ['Governor\'s office, 28 May 2026', 'https://www.governor.state.nm.us/2026/05/28/u-s-supreme-court-approves-rio-grande-compact-settlement-agreement-ends-13-year-interstate-dispute/'],
    iscFact: ['Interstate Stream Commission: Rio Grande Compact fact sheet', 'https://www.mrgcd.com/wp-content/uploads/2026/01/ISC-MRG-RioGrandeCompactLongForm_FINAL.pdf'],
    rgcc: ['Reclamation report to the Rio Grande Compact Commission, Mar 2026', 'https://www.usbr.gov/uc/DocLibrary/Reports/RioGrandeCompactCommission/uc-2025report-riograndecompactcommission-508-aao-20260300.pdf'],
    prc: ['Reclamation report to the Pecos River Commission, Mar 2026', 'https://www.usbr.gov/uc/DocLibrary/Reports/PecosRiverCommission/uc-2025report-pecosrivercommission-508-20260300.pdf'],
    rm: ['Pecos River Master, final report, Jun 2026', 'https://www.supremecourt.gov/DocketPDF/22/22O65/416158/20260710103807537_FR%20AY%202026.pdf'],
    mrgAug: ['Middle Rio Grande Conservancy District update, Aug 2026', 'https://www.mrgcd.com/wp-content/uploads/2026/08/Irrigation-and-Hydrology-Update-August.pdf'],
    mrgJul: ['Middle Rio Grande Conservancy District update, Jul 2026', 'https://www.mrgcd.com/wp-content/uploads/2026/07/Irrigation-and-Hydrology-Update-July.pdf'],
    kunm: ['KUNM, 7 Aug 2026', 'https://www.kunm.org/text/news/2026-08-07/rio-grande-in-albuquerque-dry-from-paseo-del-norte-to-rio-bravo-bridge-as-well-as-long-stretches-in-valencia-socorro-counties'],
    nrcs: ['NRCS New Mexico water supply outlook, 1 Apr 2026', 'https://nrcs-prod.azureedge.us/sites/default/files/2026-04/April%201%202026%20New%20Mexico%20Water%20Supply%20Outlook%20Report.pdf'],
    data: ['Reclamation daily reservoir data', 'https://www.usbr.gov/uc/water/hydrodata/reservoir_data/site_map.html'],
    ms24: ['Reclamation 24-Month Study, Oct 2026', 'https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf'],
    cul: ['Reclamation: Upper Basin water use, 2021–2025', 'https://www.usbr.gov/uc/DocLibrary/Reports/ConsumptiveUsesLosses/uc-ucrb-provisionalconsumptiveusesandlosses-2021-2025-508-20251200.pdf'],
    crs: ['Congressional Research Service, Oct 2026', 'https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf'],
    nws: ['National Weather Service drought statement, 3 Oct 2026', 'https://www.weather.gov/EPZ/DroughtInformationStatement'],
    sf: ['City of Santa Fe Water, 2024 annual report', 'https://santafenm.gov/media/files/public_works/SantaFe2024AnnualReport.pdf'],
    abq: ['Albuquerque Bernalillo County Water Utility Authority', 'https://www.abcwua.org/your-drinking-water-san-juan-chama-project/'],
    tribal: ['State Engineer: tribal water settlements report, 2025', 'https://www.nmlegis.gov/handouts/IAC%20111325%20Item%203%20OSE-Water%20Settlement%20Report.pdf'],
    congress: ['Congress.gov: settlement bills (read 12 Nov 2026)', 'https://www.congress.gov/bill/119th-congress/senate-bill/564'],
    ngw: ['Reclamation: Navajo-Gallup Water Supply Project', 'https://www.usbr.gov/uc/progact/navajo-gallup/'],
    ngw2: ['Reclamation news release on the project, 2026', 'https://www.usbr.gov/newsroom/news-release/5310'],
    pwrc: ['NM Produced Water Research Consortium, 5 Nov 2026', 'https://www.nmlegis.gov/handouts/RHMC%20110526%20Item%202%20Produced%20Water%20Consortium%20Presentation.pdf'],
    ag: ['New Mexico Agricultural Statistics, 2024', 'https://nmdeptag.nmsu.edu/media/pdf/Ag-Stats-2024.pdf'],
    dairy: ['NMSU: dairy industry indicators, Mar 2025', 'https://dairy.nmsu.edu/documents/dairy-status_mar25.pdf'],
    usgsHp: ['USGS: High Plains aquifer changes to 2019', 'https://pubs.usgs.gov/publication/sir20235143'],
    nmbg: ['NM Bureau of Geology: aquifer lifetime, 2017', 'https://geoinfo.nmt.edu/geoscience/research/documents/27/Aquifer_lifetime_201708WEB.pdf'],
    enmLfc: ['Legislative Finance Committee brief, May 2025', 'https://www.nmlegis.gov/handouts/ALFC%20051325%20Item%207%20ENMU%20Water%20Authority.pdf'],
    enmDoi: ['Interior Department project notice, Sep 2026', 'https://www.doi.gov/sites/default/files/documents/2026-09/final-non-availability-project-level-waiver-plunger-valves.pdf'],
    nmunit: ['Reclamation: New Mexico Unit', 'https://www.usbr.gov/lc/phoenix/programs/NMCAPAWSA/NMCAPAWSA.html'],
    utton: ['Utton Center, UNM School of Law: Water Matters!', 'https://uttoncenter.unm.edu/resources/research-resources/water-matters-.html'],
    intel: ['Rio Rancho Observer', 'https://www.rrobserver.com/news/intel-pays-water-authority-32m-to-build-6-mile-pipeline/176934'],
    cob: ['Circle of Blue, 2023', 'https://www.circleofblue.org/2023/world/new-mexicos-largest-fire-wrecked-this-citys-water-source/'],
    tnc: ['The Nature Conservancy, Jan 2022', 'https://www.nature.org/en-us/newsroom/colorado-water-agreement-jicarilla-apache-nation/'],
    oseGis: ['Outline: NM Office of the State Engineer', 'https://services2.arcgis.com/qXZbWTdPDbTjl7Dy/arcgis/rest/services/DeclaredGroundwaterBasins/FeatureServer/0'],
    pecos: ['Interstate Stream Commission: Pecos basin briefing, Nov 2019', 'https://www.nmlegis.gov/handouts/WNR%20110719%20Item%206%20Interstate%20Stream%20Commission.pdf'],
    abqRep: ['Water Authority annual report, 2024', 'https://www.abcwua.org/wp-content/uploads/2024/12/ABCWUA-2024AnnualReport-R4.pdf'],
    osm: ['Route: OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright'],
  };
  const F = [];
  const add = o => F.push(o);
  const btn = (id, label) => `<p><button class="btn" data-feat="${id}">${label}</button></p>`;
  const DRY = '<p>These are readings from 2026, a year of record-low snow. They should not be read as typical.</p>';

  // ----------------------------------------------------------------- snow, rivers, rules
  add({ id: 'snow', kind: 'snow', name: 'Mountain snowpack', short: 'Snowpack', lon: -105.47, lat: 36.33, tier: 1,
    lede: 'New Mexico\'s rivers start as snow in the northern mountains and in Colorado. In winter 2025–26 there was less of it than in any year on record.',
    stats: [['7%', 'of normal: snow in the Rio Chama and upper Rio Grande basin, 31 Mar 2026'], ['11%', 'of normal: snow in the San Juan basin the same day'], ['30%', 'of its median: Rio Grande flow in 2026'], ['9 Mar 2026', 'the statewide snowpack began setting daily record lows', 1]],
    body: '<p>By the end of March 2026 the snow was gone from every basin except the three farthest north. The reservoir and river readings on this map come from that year. They are far below normal.</p><p>Switch the season to Winter to see where snow usually builds up.</p>',
    sources: [S.nrcs, S.oseOct] });
  add({ id: 'otowi', kind: 'info', name: 'Otowi gauge: where the compact is measured', short: 'Otowi gauge', lon: -106.142, lat: 35.875, tier: 3,
    lede: 'A stream gauge on the Rio Grande near Los Alamos. The 1938 Rio Grande Compact uses the flow here to set how much water New Mexico must pass down to Elephant Butte Reservoir.',
    stats: [['About 60%', 'of the flow here must be delivered downstream in a dry year'], ['Over 80%', 'in a wet year'], ['132,000 AF', 'New Mexico\'s running shortfall in deliveries at the end of 2025'], ['200,000 AF', 'a shortfall larger than this would violate the compact']],
    body: '<p>The compact divides the river among Colorado, New Mexico and Texas. Water brought in from the San Juan River through tunnels is counted separately and is not owed downstream.</p><p>While Elephant Butte and Caballo reservoirs together hold less than 400,000 AF of usable water, New Mexico may not store Rio Grande water in newer reservoirs upstream. That rule was in force for all of 2025.</p>' + btn('ebutte', 'Elephant Butte Reservoir'),
    sources: [S.iscFact, S.oseAug, S.rgcc] });
  add({ id: 'drying', kind: 'info', name: 'Where the Rio Grande dries', short: 'Dry riverbed', lon: -106.88, lat: 34.2, tier: 2,
    lede: 'In most summers part of the Rio Grande between Albuquerque and Elephant Butte runs dry. In 2026 the dry stretch was more than twice the usual length.',
    stats: [['82 miles', 'of riverbed dry on 7 Aug 2026'], ['About 37 miles', 'the average in the 25 years the drying has been tracked'], ['About 13 miles', 'of that was inside Albuquerque'], ['2022, 2025, 2026', 'the only years since the 1980s the river has dried in Albuquerque']],
    body: '<p>About 48 of the dry miles were here, below the San Acacia dam. When the river dries, crews rescue endangered Rio Grande silvery minnows from the shrinking pools.</p><p>The line beside the river is the Low Flow Conveyance Channel, a 57-mile channel built to carry water toward Elephant Butte.</p>' + DRY,
    sources: [S.kunm, S.mrgAug, S.rgcc] });
  add({ id: 'txline', kind: 'info', name: 'Texas v. New Mexico', short: 'Texas line', lon: -106.61, lat: 31.98, tier: 2,
    lede: 'In 2013 Texas sued New Mexico in the US Supreme Court. It said wells in southern New Mexico were taking water that belonged to Texas under the Rio Grande Compact. The court approved a settlement on 26 May 2026.',
    stats: [['18,200 AF', 'a year: how much New Mexico must cut the water its wells here use up'], ['10 years', 'allowed to make the cut'], ['Up to $150M', 'the state\'s estimate of the cost over 10 years'], ['57% / 43%', 'the split of the federal irrigation project\'s land between New Mexico and Texas']],
    body: '<p>The river and the aquifer beside it are connected, so pumping from wells lowers the river. The settlement sets a target for how much water must cross the state line each year, with limits on how far New Mexico may run over or under.</p><p>The state plans to buy and retire water rights. More than 7,500 acres were already enrolled in a program that pays farmers to leave fields unwatered.</p>' + btn('pecans', 'The farms that use this water'),
    sources: [S.gov, S.iscSettle, S.lfcTx, S.oseAug] });
  add({ id: 'pecosline', kind: 'info', name: 'Pecos River at the Texas line', short: 'Pecos compact', lon: -104.02, lat: 32.03, tier: 3,
    lede: 'A 1948 compact sets how much Pecos River water New Mexico must let cross into Texas. A court-appointed River Master checks the sums every year.',
    stats: [['110,900 AF', 'New Mexico\'s running surplus of deliveries since 1987'], ['15,100 AF', 'short of its obligation in water year 2025'], ['$14M', 'New Mexico paid Texas after losing a Supreme Court case in the 1980s']],
    body: '<p>After that case New Mexico changed how it runs the river. Under a 2003 agreement the state bought farm water rights and drilled wells that can pump groundwater into the river when a delivery is due.</p>' + btn('roswell', 'The Roswell Artesian Basin'),
    sources: [S.rm, S.pecos] });
  add({ id: 'acequias', kind: 'acequia', name: 'Acequias', short: 'Acequias', lon: -105.6, lat: 36.33, tier: 2,
    lede: 'An acequia is a community irrigation ditch, run by the people who use it. The tradition draws on Pueblo and Spanish practice and is older than the state.',
    stats: [['640', 'acequias in 22 counties (2018 count by the New Mexico Acequia Association)'], ['97', 'in Taos County (2015)'], ['163', 'in Rio Arriba County, the most of any county (2015)']],
    body: '<p>Each acequia elects a commission and a mayordomo, or ditch boss, who decides whose turn it is to take water. State law treats an acequia as a local government.</p><p>Since 2003 an acequia has been able to refuse a request to move a water right off its ditch.</p>',
    sources: [S.utton, ['New Mexico Acequia Association', 'https://lasacequias.org/']] });
  add({ id: 'gila', kind: 'river', name: 'Gila River', lon: -108.56, lat: 32.97, tier: 2,
    lede: 'The Gila rises in the mountains of southwestern New Mexico and flows to Arizona. A 2004 federal law gave New Mexico the chance to take more water from it. The diversion was never built.',
    stats: [['14,000 AF', 'a year on average: the extra water New Mexico was allowed to develop'], ['About $130M', 'in the fund the law created, as of 2026'], ['9,590 cfs', 'peak flow on 30 Sep 2026, after record rain']],
    body: '<p>A 2021 state law directs the fund to local water projects in Catron, Grant, Hidalgo and Luna counties. A cfs is one cubic foot of water per second.</p>',
    sources: [S.nmunit, ['Interstate Stream Commission: fund update, Aug 2026', 'https://www.nmlegis.gov/handouts/WNR%20083126%20Item%202%20ISC%20NM%20Unit%20Fund%20Update.pdf'], S.nws] });

  // ----------------------------------------------------------------- reservoirs
  add({ id: 'ebutte', kind: 'reservoir', name: 'Elephant Butte Reservoir', short: 'Elephant Butte', lake: 'Elephant Butte Reservoir', lon: -107.172, lat: 33.25, tier: 1, zoom: .9,
    lede: 'The largest reservoir in New Mexico and the main store of Rio Grande water for southern New Mexico, west Texas and Mexico. In July 2026 it was nearly empty.',
    stats: [['26,732 AF', 'held on 29 Jul 2026, the least since the 1950s'], ['208,084 AF', 'held on 11 Nov 2026, after autumn storms'], ['2,302,800 AF', 'the most it has held, in June 1942'], ['Under 1.5%', 'full on 31 Aug 2026, the lowest on record for that date', 1]],
    body: '<p>New Mexico\'s compact deliveries are measured here. The water then belongs to a federal irrigation project that serves farms on both sides of the Texas line.</p>' + DRY + btn('otowi', 'How the compact works') + btn('pecans', 'The farms downstream'),
    sources: [S.data, S.oseOct, S.rgcc] });
  add({ id: 'caballo', kind: 'reservoir', name: 'Caballo Reservoir', short: 'Caballo', lake: 'Caballo Reservoir', lon: -107.29, lat: 33.0, tier: 3,
    lede: 'A smaller reservoir just below Elephant Butte. Water is released from here to the farms of the Hatch and Mesilla valleys.',
    stats: [['26,180 AF', 'held on 11 Nov 2026'], ['13,811 AF', 'the 2026 low, on 6 September'], ['346,570 AF', 'the most it has held, in 1942']],
    body: DRY, sources: [S.data] });
  add({ id: 'heron', kind: 'reservoir', name: 'Heron Lake', lake: 'Heron Lake', lon: -106.702, lat: 36.693, tier: 2,
    lede: 'Heron stores water brought through tunnels from the San Juan River basin. Cities and farms along the Rio Grande order it from here.',
    stats: [['75,679 AF', 'held on 11 Nov 2026'], ['26,432 AF', 'on 10 Feb 2026, the least in records back to 1975'], ['402,101 AF', 'the most it has held, in 1994'], ['0 AF', 'available to hand out to users on 1 Jan 2026']],
    body: DRY + btn('azotea', 'The tunnels that fill it'),
    sources: [S.data, S.rgcc] });
  add({ id: 'elvado', kind: 'reservoir', name: 'El Vado Lake', short: 'El Vado', lake: 'El Vado Lake', lon: -106.753, lat: 36.605, tier: 3,
    lede: 'A 1930s dam on the Rio Chama that stores water for farms in the middle Rio Grande valley. Its steel face leaks, and repairs were halted in 2024.',
    stats: [['23,815 AF', 'held on 11 Nov 2026'], ['190,261 AF', 'the most it has held, in 1986'], ['20 Mar 2024', 'work on the repair stopped'], ['$31.2M', 'the repair contract awarded in 2021']],
    body: '<p>Reclamation is choosing a new way to fix the dam. Meanwhile some of the water that would be kept here is stored downstream at Abiquiu.</p>',
    sources: [S.data, S.rgcc] });
  add({ id: 'abiquiu', kind: 'reservoir', name: 'Abiquiu Lake', short: 'Abiquiu', lake: 'Abiquiu Lake', lon: -106.47, lat: 36.26, tier: 2,
    lede: 'An Army Corps of Engineers flood-control dam on the Rio Chama. It also holds Albuquerque\'s stored water.',
    stats: [['203,251 AF', 'held on 11 Nov 2026, the 2026 high'], ['107,947 AF', 'the 2026 low, on 17 July'], ['About 230,000 AF', 'of space Albuquerque\'s water utility may use, up from 200,000']],
    body: '<p>Until 2024 the reservoir was allowed to store only water imported from the San Juan basin. A new agreement lets it hold some Rio Grande water too.</p>' + btn('abq', 'Albuquerque'),
    sources: [S.data, S.abqRep] });
  add({ id: 'cochiti', kind: 'reservoir', name: 'Cochiti Lake', short: 'Cochiti', lake: 'Cochiti Lake', lon: -106.315, lat: 35.63, tier: 2,
    lede: 'An Army Corps of Engineers flood-control dam. It is the gate through which the Rio Grande enters the middle valley.',
    stats: [['About 150 cfs', 'released in early Aug 2026, the lowest since 1988'], ['72,667 AF', 'held on 11 Nov 2026'], ['1,200 acres', 'the size of the permanent pool Congress allowed']],
    body: '<p>A cfs is one cubic foot of water per second. The permanent pool is kept topped up with water imported from the San Juan basin.</p>' + DRY,
    sources: [S.kunm, S.data, S.rgcc] });
  add({ id: 'navajo', kind: 'reservoir', name: 'Navajo Reservoir', short: 'Navajo', lake: 'Navajo Reservoir', lon: -107.5, lat: 36.9, tier: 1, zoom: .9,
    lede: 'The San Juan River is stored here, on the Colorado line. The reservoir supplies the Navajo Nation\'s large farm and a pipeline to Gallup.',
    stats: [['1,436,157 AF', 'held on 11 Nov 2026'], ['777,694 AF', 'the 2026 low, on 14 September'], ['267%', 'of average: water flowing in during September 2026'], ['64%', 'of average storage at the end of September', 1]],
    body: '<p>The reservoir nearly doubled in two months after autumn storms. The San Juan is part of the Colorado River system, and federal rules allow water to be released from here to prop up Lake Powell.</p>' + btn('napi', 'The Navajo farm') + btn('ngwsp', 'The pipeline to Gallup'),
    sources: [S.data, S.ms24, ['Interior Department, 21 Aug 2026', 'https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations']] });
  add({ id: 'santarosa', kind: 'reservoir', name: 'Santa Rosa Lake', short: 'Santa Rosa', lake: 'Santa Rosa Lake', lon: -104.7, lat: 35.05, tier: 2,
    lede: 'The uppermost of four reservoirs that store Pecos River water for farms around Carlsbad, about 200 miles downstream.',
    stats: [['53,332 AF', 'held on 11 Nov 2026'], ['3,563 AF', 'the 2026 low, on 30 July'], ['100,867 AF', 'of space set aside for irrigation water (2025)'], ['176,500 AF', 'the irrigation space in all four reservoirs together']],
    body: '<p>The Army Corps of Engineers finished the dam in 1980.</p>' + btn('carlsbad', 'Carlsbad farms'),
    sources: [S.data, S.prc] });
  add({ id: 'sumner', kind: 'reservoir', name: 'Lake Sumner', lake: 'Lake Sumner', lon: -104.4, lat: 34.64, tier: 3,
    lede: 'A 1938 federal dam on the Pecos near Fort Sumner. It was the main store for Carlsbad\'s farms until Santa Rosa was built.',
    stats: [['15,975 AF', 'held on 11 Nov 2026'], ['2,675 AF', 'the 2026 low, on 21 September'], ['31,767 AF', 'of space set aside for irrigation water (2025)']],
    sources: [S.data, S.prc] });
  add({ id: 'brantley', kind: 'reservoir', name: 'Brantley Lake', short: 'Brantley', lake: 'Brantley Lake', lon: -104.36, lat: 32.57, tier: 2,
    lede: 'The reservoir just above Carlsbad, finished in 1989. Water released upstream is caught here and sent to the farms.',
    stats: [['44,474 AF', 'held on 11 Nov 2026'], ['8,885 AF', 'the 2026 low, on 28 July'], ['40,000 AF', 'of space set aside for irrigation water']],
    body: btn('carlsbad', 'Carlsbad farms'),
    sources: [S.data, S.prc] });
  add({ id: 'conchas', kind: 'reservoir', name: 'Conchas Lake', short: 'Conchas', lake: 'Conchas Lake', lon: -104.22, lat: 35.43, tier: 2,
    lede: 'An Army Corps of Engineers dam on the Canadian River. A long canal carries its water east to farms around Tucumcari.',
    body: '<p>The highlighted line running east from the lake is the Conchas Canal.</p>',
    sources: [S.osm] });
  add({ id: 'ute', kind: 'reservoir', name: 'Ute Reservoir', short: 'Ute', lake: 'Ute Reservoir', lon: -103.49, lat: 35.36, tier: 2,
    lede: 'A state-owned reservoir on the Canadian River. A pipeline is being built from here to towns that are running out of groundwater.',
    stats: [['About 130 miles', 'of pipeline planned'], ['28M gallons', 'a day: the size of the intake built on the south shore']],
    body: btn('enm', 'The pipeline') + btn('ogallala', 'The aquifer it would relieve'),
    sources: [S.enmDoi] });

  // ----------------------------------------------------------------- water moved between basins
  add({ id: 'azotea', kind: 'tunnel', name: 'San Juan-Chama tunnels', short: 'San Juan-Chama', lon: -106.705, lat: 36.95, tier: 1, zoom: 1,
    lede: 'Three tunnels carry water from streams that feed the San Juan River, under the Continental Divide, into the Rio Grande basin. The last one, the Azotea Tunnel, empties toward Heron Lake.',
    stats: [['87,761 AF', 'a year came through on average, 2016 to 2025'], ['45,507 AF', 'in 2025'], ['162,522 AF', 'in 2017, the most in those ten years'], ['0', 'flow in the tunnels on 2 Oct 2026']],
    body: '<p>This is how Albuquerque and Santa Fe drink Colorado River water. Farms in the middle Rio Grande valley get a share as well. Under the compact, the imported water does not have to be passed on to Texas.</p><p>The streams must be left a minimum flow first, so in a dry year the tunnels carry little.</p>' + btn('heron', 'Heron Lake') + btn('abq', 'Albuquerque'),
    sources: [S.rgcc, S.ms24, S.osm] });
  add({ id: 'ngwsp', kind: 'pipe', name: 'Navajo-Gallup Water Supply Project', short: 'Navajo-Gallup pipeline', lon: -108.74, lat: 35.56, tier: 2,
    lede: 'A federal pipeline under construction. It will carry San Juan River water south to Gallup, to 43 Navajo communities and to part of the Jicarilla Apache Nation.',
    stats: [['About 300 miles', 'of pipeline'], ['37,764 AF', 'a year when complete'], ['Late 2028', 'first water expected on the main line. One branch has delivered since 2020.'], ['$2.19B', 'estimated cost in 2023. Congress first approved $870M.']],
    body: '<p>These places now depend on wells. Reclamation says groundwater under Gallup fell about 200 feet in ten years. The project is the centerpiece of the Navajo Nation\'s water rights settlement on the San Juan.</p><p>The route is not drawn on the map.</p>' + btn('navajonation', 'The Navajo Nation settlement'),
    sources: [S.ngw, S.ngw2, S.tribal] });
  add({ id: 'enm', kind: 'pipe', name: 'Eastern New Mexico Rural Water System', short: 'Ute pipeline', lon: -103.33, lat: 34.9, tier: 2,
    lede: 'A pipeline under construction from Ute Reservoir to Clovis, Portales, Texico, Elida and Cannon Air Force Base, where wells are failing.',
    stats: [['About 130 miles', 'of pipeline'], ['28M gallons', 'a day'], ['$672M', 'total cost of the project in a 2026 federal notice'], ['75%', 'of the cost is paid by the federal government']],
    body: '<p>The state pays 15% and local water users 10%. The route is not drawn on the map.</p>' + btn('ogallala', 'Why the wells are failing'),
    sources: [S.enmDoi, S.enmLfc] });

  // ----------------------------------------------------------------- cities
  add({ id: 'abq', kind: 'city', name: 'Albuquerque', lon: -106.65, lat: 35.09, tier: 1, zoom: .8,
    lede: 'Until 2008 Albuquerque drank only from wells, and its aquifer was falling. It now also treats river water that arrives through tunnels from the San Juan basin.',
    stats: [['650,000', 'people served, roughly'], ['2008', 'the river water treatment plant opened'], ['124 gallons', 'used per person per day, down from 252 in the mid-1990s'], ['$400M+', 'cost of the river water project']],
    body: '<p>The utility says groundwater levels have risen significantly since the switch. The aquifer remains the backup: when the river is too low to draw from, as in the summers of 2025 and 2026, the city goes back to its wells.</p>' + btn('azotea', 'The tunnels') + btn('drying', 'The river in 2026'),
    sources: [S.abq, S.abqRep, S.kunm] });
  add({ id: 'santafe', kind: 'city', name: 'Santa Fe', lon: -105.94, lat: 35.687, tier: 1, zoom: .9,
    lede: 'Santa Fe has four sources: the Santa Fe River, the Rio Grande, and two well fields. Using river water first has let its aquifers recover.',
    stats: [['78%', 'of its drinking water came from rivers in 2024'], ['93 gallons', 'used per person per day in 2024'], ['510 ft', 'average rise in water levels in one well field since 2010'], ['9,399 AF', 'produced in 2024']],
    body: '<p>The largest share, 43%, was water from the San Juan basin, taken out of the Rio Grande at a diversion that opened in 2011. The Santa Fe River supplied 35% and wells 22%.</p>' + btn('azotea', 'Where the San Juan water comes from'),
    sources: [S.sf] });
  add({ id: 'lascruces', kind: 'city', name: 'Las Cruces', lon: -106.765, lat: 32.33, tier: 2,
    lede: 'New Mexico\'s second-largest city. It sits beside the Rio Grande but takes its drinking water from wells.',
    stats: [['69%', 'of the water for public supply in New Mexico came from wells (2015)']],
    body: '<p>The wells draw on the same groundwater that the settlement with Texas requires New Mexico to pump less of.</p>' + btn('txline', 'Texas v. New Mexico'),
    sources: [S.tr55, S.iscSettle] });
  add({ id: 'farmington', kind: 'town', name: 'Farmington', lon: -108.2, lat: 36.73, tier: 2,
    lede: 'The Animas and La Plata rivers join the San Juan here. This corner of the state is New Mexico\'s part of the Colorado River basin.',
    stats: [['11.25%', 'New Mexico\'s share of the upper Colorado River basin\'s water'], ['345,400 AF', 'of that water New Mexico consumed in 2024'], ['220,000 AF', 'of it by irrigated farms'], ['68,100 AF', 'of it sent through tunnels to the Rio Grande']],
    body: '<p>The 2024 total also counts 26,400 AF that evaporated from reservoirs and 18,000 AF used up by power plants.</p>' + btn('navajo', 'Navajo Reservoir') + btn('azotea', 'The tunnels'),
    sources: [S.cul, S.crs] });
  add({ id: 'lasvegas', kind: 'town', name: 'Las Vegas', lon: -105.223, lat: 35.594, tier: 2,
    lede: 'A town that drinks from the Gallinas River. In 2022 the largest wildfire in New Mexico\'s history burned the mountains the river comes from.',
    stats: [['341,735', 'acres burned in the Hermit\'s Peak and Calf Canyon fire'], ['17,000', 'people rely on the Gallinas River'], ['$3.95B', 'provided by Congress for losses, including a new treatment plant']],
    body: '<p>Floods off the burned slopes filled the river with ash and mud, and in summer 2022 the town\'s treatment plant could not cope. The fire began as a Forest Service planned burn.</p>',
    sources: [S.cob] });
  add({ id: 'clovis', kind: 'town', name: 'Clovis and Portales', short: 'Clovis', lon: -103.205, lat: 34.405, tier: 2,
    lede: 'Two towns on the high plains with no river. They pump from the Ogallala Aquifer, which is running down beneath them.',
    stats: [['10 to 100+ ft', 'drop in water levels in this area'], ['30 ft', 'of water-bearing rock is about the least that large-scale irrigation needs']],
    body: btn('ogallala', 'The Ogallala Aquifer') + btn('enm', 'The pipeline being built'),
    sources: [S.nmbg] });

  // ----------------------------------------------------------------- farms
  add({ id: 'mrgcd', kind: 'farm', name: 'Middle Rio Grande farms', short: 'Middle valley farms', lon: -106.74, lat: 34.7, tier: 1, zoom: .8,
    lede: 'A ribbon of irrigated land along the river from Cochiti to Socorro, watered by one conservancy district. In 2026 most of its farmers went months without water.',
    stats: [['50,000–70,000', 'acres supplied'], ['1,000+ miles', 'of canals, ditches and drains'], ['Over 100 days', 'farmers near Albuquerque had waited for water by 7 Aug 2026'], ['About 25%', 'of its usual San Juan water had arrived by August 2026']],
    body: '<p>Six pueblos in the valley hold the oldest rights. When the river is very low, their fields are served first and other deliveries stop. The district ran that way for about 50 days by early August.</p>' + DRY + btn('pueblos', 'The six pueblos') + btn('drying', 'Where the river dries'),
    sources: [S.rgcc, S.mrgAug, S.kunm] });
  add({ id: 'pecans', kind: 'farm', name: 'Mesilla Valley pecans', short: 'Mesilla Valley', lon: -106.7, lat: 32.13, tier: 1, zoom: .9,
    lede: 'The valley around Las Cruces grows most of New Mexico\'s pecans. Orchards need water every year, so when the river allotment is small, farmers pump from wells.',
    stats: [['30,200', 'acres of pecan trees in Doña Ana County (2024)'], ['55M lb', 'of pecans from the county in 2024, of 84.8M statewide'], ['2nd', 'New Mexico\'s rank among pecan-growing states'], ['4 inches', 'of river water per acre: the 2026 allotment from Elephant Butte']],
    body: '<p>The 2026 allotment was set in a year of record-low snow. That pumping is what the settlement with Texas requires New Mexico to reduce.</p>' + btn('txline', 'Texas v. New Mexico') + btn('ebutte', 'Elephant Butte'),
    sources: [S.ag, S.nws, S.iscSettle] });
  add({ id: 'hatch', kind: 'farm', name: 'Hatch chile', short: 'Hatch', lon: -107.16, lat: 32.665, tier: 2,
    lede: 'The Hatch Valley is the best-known name in New Mexico chile. The crop is small in acres and is watered from the Rio Grande and from wells.',
    stats: [['8,000', 'acres of chile harvested statewide in 2024'], ['1st', 'New Mexico\'s rank among chile-growing states'], ['2,490', 'of those acres were in Luna County, the most of any county reported']],
    sources: [S.ag] });
  add({ id: 'carlsbad', kind: 'farm', name: 'Carlsbad farms', lon: -104.2, lat: 32.33, tier: 2,
    lede: 'A federal irrigation project on the lower Pecos. Its water is stored in four reservoirs upstream.',
    stats: [['25,055', 'acres may be irrigated'], ['176,500 AF', 'of reservoir space is set aside for it'], ['About 4,500', 'acres here whose water rights the state bought by 2009']],
    body: '<p>The state bought those rights so that the water could flow on to Texas under the Pecos compact.</p>' + btn('pecosline', 'The Pecos compact') + btn('brantley', 'Brantley Lake'),
    sources: [S.prc, S.pecos] });
  add({ id: 'napi', kind: 'farm', name: 'Navajo Indian Irrigation Project', short: 'Navajo farm', lon: -108.3, lat: 36.56, tier: 2,
    lede: 'A large farm on the mesa south of Farmington, owned by the Navajo Nation. A canal brings its water from Navajo Reservoir.',
    stats: [['15,100 AF', 'taken for the farm in September 2026'], ['220,000 AF', 'consumed by all irrigation on New Mexico\'s side of the San Juan basin in 2024']],
    body: '<p>The round fields are center-pivot sprinklers.</p>' + btn('navajo', 'Navajo Reservoir'),
    sources: [S.ms24, S.cul, S.osm] });
  add({ id: 'dairy', kind: 'dairy', name: 'High plains dairies', short: 'Dairies', lon: -103.1, lat: 34.62, tier: 3,
    lede: 'Most of New Mexico\'s dairy cows are in three counties on the eastern plains. The cows and the feed crops grown for them depend on wells.',
    stats: [['240,000', 'milk cows in New Mexico in 2024'], ['31%', 'fewer than in 2006'], ['73,000', 'in Curry County, the most of any county'], ['2,710', 'cows on the average dairy, the largest herds in the US']],
    body: '<p>NMSU\'s dairy specialist lists less water for growing feed as one reason herds are shrinking.</p>' + btn('ogallala', 'The Ogallala Aquifer'),
    sources: [S.dairy] });

  // ----------------------------------------------------------------- groundwater
  add({ id: 'ogallala', kind: 'well', name: 'Ogallala Aquifer', lon: -103.38, lat: 34.15, tier: 1, zoom: .8,
    lede: 'The aquifer under the high plains. Rain refills it very slowly, and farms and towns have pumped it for decades faster than it recovers.',
    stats: [['11.4M AF', 'less water stored under New Mexico in 2019 than before pumping began'], ['19.1 ft', 'average drop in the water level under New Mexico over that time'], ['A few tens of years', 'projected useful life of the aquifer in the heavily irrigated parts of Curry and Roosevelt counties']],
    body: '<p>The shaded areas are groundwater basins the State Engineer has declared here. Inside one, a new well needs a state permit.</p><p>The lifetime projection, from the state\'s Bureau of Geology, assumes water levels keep falling at the rate of the past two decades.</p>' + btn('clovis', 'Clovis and Portales') + btn('enm', 'The pipeline from Ute Reservoir'),
    sources: [S.usgsHp, S.nmbg, ['NM Bureau of Geology: Earth Matters, 2018', 'https://geoinfo.nmt.edu/publications/periodicals/earthmatters/18/n2/em_v18_n2.pdf'], S.utton] });
  add({ id: 'roswell', kind: 'well', name: 'Roswell Artesian Basin', short: 'Roswell basin', lon: -104.5, lat: 33.37, tier: 2,
    lede: 'Farms around Roswell and Artesia pump from an aquifer that also feeds the Pecos River. What is pumped here affects what reaches Texas.',
    stats: [['About 7,500', 'acres here whose water rights the state bought by 2009'], ['15,750 AF', 'a year: what the state\'s wells can add to the river']],
    body: '<p>The purchases and the wells are part of a 2003 agreement to keep New Mexico in line with the Pecos compact.</p>' + btn('pecosline', 'The Pecos compact'),
    sources: [S.pecos, S.rm] });

  // ----------------------------------------------------------------- industry
  add({ id: 'permian', kind: 'oil', name: 'Permian Basin oil and "produced water"', short: 'Oil & produced water', lon: -103.75, lat: 32.4, tier: 1, zoom: .8,
    lede: 'Oil wells here bring up salty, contaminated water along with the oil. It is called produced water. In 2025 there was more of it than New Mexico\'s public water systems withdraw in a year.',
    stats: [['353,000 AF', 'of produced water in 2025 (2.74 billion barrels)'], ['About 60%', 'is pumped back underground for disposal'], ['35%', 'of the total is sent to Texas for disposal'], ['About 40%', 'is reused inside the oilfield']],
    body: '<p>For comparison, public water systems statewide withdrew 284,157 AF in 2015.</p><p>State rules allow test projects for treating this water but do not allow it to be released into rivers or aquifers. The 2025 figures are from a university research group and are preliminary.</p>',
    sources: [S.pwrc, S.tr55, ['Source NM report on the state rules, Nov 2025 (repost)', 'https://www.kiowacountypress.net/content/new-mexico-water-board-tosses-controversial-vote-produced-water-petition']] });
  add({ id: 'intel', kind: 'fab', name: 'Intel, Rio Rancho', short: 'Intel', lon: -106.66, lat: 35.235, tier: 3,
    lede: 'A computer chip plant beside the Rio Grande. It runs on groundwater and sends most of it back to the city sewer system after use.',
    stats: [['756M gallons', 'pumped in 2020'], ['93%', 'of that was treated and returned to the municipal system'], ['1M to 3M gallons', 'a day: what the expanded plant could need']],
    sources: [S.intel] });
  add({ id: 'fourcorners', kind: 'power', name: 'Four Corners power plants', short: 'Power plants', lake: 'Morgan Lake', lon: -108.48, lat: 36.69, tier: 3,
    lede: 'Coal power plants west of Farmington have cooled themselves with San Juan River water since the 1960s. Morgan Lake was built as a cooling pond.',
    stats: [['18,000 AF', 'consumed by power plants on New Mexico\'s side of the basin in 2024'], ['26,600 AF', 'in 2021']],
    body: '<p>Pumps and a reservoir built for one of the plants are being taken over for the Navajo-Gallup pipeline.</p>' + btn('ngwsp', 'The pipeline'),
    sources: [S.cul, S.ngw] });

  // ----------------------------------------------------------------- tribes
  add({ id: 'navajonation', kind: 'tribe', name: 'Navajo Nation', short: 'Shiprock', lon: -108.69, lat: 36.79, tier: 2,
    lede: 'The Navajo Nation settled its claims to the San Juan River in New Mexico in an agreement approved by Congress in 2009.',
    stats: [['325,670 AF', 'a year the Nation may use up under the settlement'], ['606,660 AF', 'a year it may take from the river to do so'], ['Over 40%', 'of Navajo Nation households rely on hauling water, according to Reclamation']],
    body: '<p>The settlement promised a pipeline to bring river water to communities that have none.</p>' + btn('ngwsp', 'The pipeline') + btn('napi', 'The Navajo farm'),
    sources: [['State Engineer: summary of the Navajo settlement, 2011', 'https://www.ose.nm.gov/Legal/settlements/NNWRS/InitialDisclosures/Court%20Filings/FINAL%20Detailed%20Summary%2006-17-11%20(2).pdf'], S.ngw] });
  add({ id: 'jicarilla', kind: 'tribe', name: 'Jicarilla Apache Nation', short: 'Dulce', lon: -107.0, lat: 36.93, tier: 3,
    lede: 'The Jicarilla Apache Nation holds settled rights to San Juan basin water. For decades it leased some of that water to coal power plants.',
    stats: [['Up to 20,000 AF', 'a year the state may lease from the Nation under a 2022 agreement']],
    body: '<p>The state uses the leased water to keep flow in the San Juan River for endangered fish and as a reserve against shortage.</p>',
    sources: [S.tnc] });
  add({ id: 'aamodt', kind: 'tribe', name: 'Pojoaque Basin pueblos', short: 'Pojoaque Basin', lon: -106.02, lat: 35.89, tier: 2,
    lede: 'A lawsuit over the water of this small valley, known as Aamodt, was filed in 1966. Four pueblos, the state and their neighbors settled it in 2010.',
    stats: [['1966', 'the case was filed'], ['$406.3M', 'agreed for a water system to serve the valley'], ['About 2,500 AF', 'a year the system will deliver to the pueblos']],
    body: '<p>The pueblos are Nambé, Pojoaque, San Ildefonso and Tesuque. The first phase was under construction in 2025, with a funding gap still to close.</p>',
    sources: [S.tribal, S.utton] });
  add({ id: 'zuni', kind: 'tribe', name: 'Pueblo of Zuni', short: 'Zuni', lon: -108.85, lat: 35.07, tier: 2,
    lede: 'The Zuni Tribe and the state signed a water rights settlement in 2023. It takes effect only if Congress approves and pays for it.',
    stats: [['$685M', 'in federal money the settlement calls for'], ['5', 'tribal water settlements in New Mexico were waiting on Congress in 2025'], ['Over $3B', 'the federal cost of the five together']],
    body: '<p>As of 12 November 2026 none of the five had become law. The Zuni bill was placed on the Senate calendar on 4 June 2026.</p>',
    sources: [S.tribal, S.congress] });
  add({ id: 'acoma', kind: 'tribe', name: 'Pueblos of Acoma and Laguna', short: 'Acoma & Laguna', lon: -107.45, lat: 35.04, tier: 3,
    lede: 'Two pueblos on the Rio San José, a small tributary of the Rio Grande. They signed a settlement with the state and their neighbors in 2022.',
    stats: [['$850M', 'in federal money the settlement bill calls for'], ['$223M', 'in a companion bill for the Navajo Nation on the same stream']],
    body: '<p>Both bills were waiting on Congress as of 12 November 2026.</p>',
    sources: [S.tribal, S.congress] });
  add({ id: 'pueblos', kind: 'tribe', name: 'Six Middle Rio Grande Pueblos', short: 'Isleta', lon: -106.69, lat: 34.91, tier: 2,
    lede: 'Cochiti, Santo Domingo, San Felipe, Santa Ana, Sandia and Isleta farmed this valley long before anyone else. Their fields hold the oldest water rights on the middle Rio Grande.',
    stats: [['About 50 days', 'in 2026, to early August, when only pueblo fields were served'], ['6', 'pueblos']],
    body: '<p>Federal law calls these rights "prior and paramount." In a severe shortage the irrigation district delivers what the pueblo fields need before anyone else gets water.</p>' + btn('mrgcd', 'Middle Rio Grande farms'),
    sources: [S.mrgAug] });

  // ----------------------------------------------------------------- lines and areas
  const riverStyle = {
    'Rio Grande': { w: 4.4, reaches: [{ test: (lon, lat) => lat > 36.2, w: 3 }, { test: (lon, lat) => lat < 34.6 && lat > 33.4, w: 1.6 }, { test: (lon, lat) => lat <= 33.4 && lat > 32.9, w: 3 }, { test: (lon, lat) => lat <= 32.9, w: 2.2 }] },
    Pecos: { w: 2.8, reaches: [{ test: (lon, lat) => lat > 35.1, w: 1.8 }] }, 'San Juan': { w: 3.2 }, Canadian: { w: 2.2 }, Gila: { w: 2.2 }, 'Rio Chama': { w: 2.2 }, Animas: { w: 2 },
    Cimarron: { w: 1.1 }, Jemez: { w: 1.2 }, 'Santa Fe': { w: 1 }, Mimbres: { w: 1.1 }, 'San Francisco': { w: 1.3 }, 'La Plata': { w: 1 }, 'Rio Hondo': { w: 1.1 }, Mora: { w: 1.2 }, Gallinas: { w: 1 },
    'Rio Pueblo de Taos': { w: 1 }, Navajo: { w: 1.1 }, 'Los Pinos': { w: 1.1 }, Penasco: { w: 1 }, Black: { w: 1 }, 'San Jose': { w: 1 }, Mancos: { w: 1 },
  };
  const rv = (lede, stats, body, sources) => ({ lede, stats, body, sources });
  const rivers = {
    'Rio Grande': rv('The Rio Grande runs the length of New Mexico. A 1938 compact divides it among Colorado, New Mexico and Texas, and in 2026 it carried about 30% of its median flow.',
      [['30%', 'of the median: flow in 2026'], ['82 miles', 'of riverbed dry on 7 Aug 2026'], ['132,000 AF', 'New Mexico\'s running shortfall in deliveries, end of 2025']],
      '<p>The line thins below Albuquerque, where the river often dries in summer, and thickens again below Elephant Butte Dam.</p>' + btn('otowi', 'How the compact works') + btn('drying', 'Where the river dries') + btn('txline', 'Texas v. New Mexico'), [S.oseOct, S.kunm, S.oseAug]),
    Pecos: rv('The Pecos rises in the mountains east of Santa Fe and crosses the eastern plains to Texas. In 2026 it carried 47% of its median flow.',
      [['47%', 'of the median: flow in 2026'], ['110,900 AF', 'New Mexico\'s running surplus of deliveries to Texas']], btn('pecosline', 'The Pecos compact') + btn('carlsbad', 'Carlsbad farms'), [S.oseOct, S.rm]),
    'San Juan': rv('The San Juan is New Mexico\'s piece of the Colorado River system. It carries more water than any other river in the state.',
      [['69%', 'of the median: flow in 2026'], ['345,400 AF', 'of San Juan basin water New Mexico consumed in 2024']], btn('navajo', 'Navajo Reservoir') + btn('farmington', 'New Mexico\'s Colorado River share'), [S.oseOct, S.cul]),
    'Rio Chama': rv('The Rio Chama is the Rio Grande\'s largest tributary in New Mexico. Water imported from the San Juan basin travels down it, through three reservoirs.', [],
      btn('azotea', 'The tunnels') + btn('heron', 'Heron Lake') + btn('abiquiu', 'Abiquiu Lake'), [S.rgcc]),
    Canadian: rv('The Canadian River drains the northeastern plains toward Texas and Oklahoma. Two reservoirs hold it back in New Mexico.', [], btn('conchas', 'Conchas Lake') + btn('ute', 'Ute Reservoir'), [S.enmDoi]),
    Gila: rv('The Gila flows west out of New Mexico\'s southwestern mountains into Arizona.', [['14,000 AF', 'a year: extra water a 2004 law allowed New Mexico to develop. It has not been built.']], btn('gila', 'More on the Gila'), [S.nmunit]),
    Animas: rv('The Animas comes down from Colorado and joins the San Juan at Farmington.', [], btn('farmington', 'Farmington'), [S.cul]),
    Gallinas: rv('The Gallinas River is the water supply of Las Vegas, New Mexico.', [['17,000', 'people rely on it']], btn('lasvegas', 'Las Vegas and the 2022 fire'), [S.cob]),
    'Santa Fe': rv('The Santa Fe River is the city\'s original water supply. Two small reservoirs in the canyon above town store it.', [['35%', 'of Santa Fe\'s drinking water came from this river in 2024']], btn('santafe', 'Santa Fe'), [S.sf]),
    Navajo: rv('The Navajo River is one of the Colorado streams tapped by the San Juan-Chama tunnels.', [], btn('azotea', 'The tunnels'), [S.rgcc]),
    'San Jose': rv('The Rio San José runs past the pueblos of Acoma and Laguna.', [], btn('acoma', 'Acoma and Laguna'), [S.tribal]),
    _default: rv('One of the streams that carry mountain snow and summer storm water toward New Mexico\'s main rivers. Many run only part of the year.', [], '', [S.tr55]),
  };
  const T = 'Water moved between river basins';
  const sjc = (lede, extra) => ({ kind: T, icon: 'tunnel', lede, stats: [['87,761 AF', 'a year through the three tunnels on average, 2016 to 2025'], ['45,507 AF', 'in 2025']], body: (extra || '') + btn('azotea', 'More on the tunnels'), sources: [S.rgcc, S.osm] });
  const canals = {
    'Azotea Tunnel': sjc('The last and longest of the three San Juan-Chama tunnels. It passes under the Continental Divide and empties into a creek that runs to Heron Lake.'),
    'Blanco Tunnel': sjc('The first of the three San Juan-Chama tunnels. It starts at a small dam on the Rio Blanco in Colorado.'),
    'Oso Tunnel': sjc('The middle one of the three San Juan-Chama tunnels, in Colorado. It links the Blanco Tunnel to the Azotea Tunnel.'),
    'Low Flow Conveyance Channel': { lede: 'A 57-mile channel beside the Rio Grande, built by the federal government to carry water to Elephant Butte Reservoir with less loss than the wide, sandy riverbed.', body: btn('drying', 'Where the river dries'), sources: [S.rgcc, S.osm] },
    'Conchas Canal': { lede: 'Carries Canadian River water from Conchas Lake east to farms around Tucumcari.', body: btn('conchas', 'Conchas Lake'), sources: [S.osm] },
    'Navajo Indian Irrigation Project Main Canal': { title: 'Navajo farm main canal', lede: 'Carries water from Navajo Reservoir to the Navajo Nation\'s farm south of Farmington.', stats: [['15,100 AF', 'taken for the farm in September 2026']], body: btn('napi', 'The Navajo farm'), sources: [S.ms24, S.osm] },
    'Carlsbad Main Canal': { lede: 'The main canal of the Carlsbad irrigation project on the lower Pecos.', stats: [['25,055', 'acres may be irrigated']], body: btn('carlsbad', 'Carlsbad farms'), sources: [S.prc, S.osm] },
    'Leasburg Canal': { lede: 'One of the main canals that carry Rio Grande water to the Mesilla Valley.', body: btn('pecans', 'Mesilla Valley pecans'), sources: [S.osm] },
    'West Side Canal': { lede: 'One of the main canals that carry Rio Grande water to the Mesilla Valley.', body: btn('pecans', 'Mesilla Valley pecans'), sources: [S.osm] },
    'Garfield Canal': { lede: 'A canal that carries Rio Grande water to farms in the Hatch Valley.', body: btn('hatch', 'Hatch chile'), sources: [S.osm] },
    'Acequia Madre de Santa Fe': { kind: 'Acequia', lede: 'Santa Fe\'s "mother ditch." It still carries Santa Fe River water through the east side of the city.', body: btn('acequias', 'What an acequia is'), sources: [S.sf, S.osm] },
    _mrg: 0,
    _default: { lede: 'A main irrigation canal that carries river water to farm fields.', body: '<p>New Mexico has thousands of miles of ditches and canals. Only some of the larger ones are drawn.</p>', sources: [S.osm] },
  };
  delete canals._mrg;
  for (const n of ['Albuquerque Main Canal', 'Socorro Main Canal', 'Sile Main Canal', 'Cochiti East Side Main Canal', 'Corrales Main Canal', 'Arenal Canal'])
    canals[n] = { lede: 'One of the main canals of the Middle Rio Grande Conservancy District.', stats: [['1,000+ miles', 'of canals, ditches and drains in the district']], body: btn('mrgcd', 'Middle Rio Grande farms'), sources: [S.rgcc, S.osm] };
  const basinBase = '<p>In a declared basin, the State Engineer decides who may drill a well and how much it may pump. Older rights come first. A household well still gets a permit almost automatically.</p>';
  const og = lede => ({ lede, stats: [['11.4M AF', 'less water stored in the aquifer under New Mexico in 2019 than before pumping began']], body: basinBase + btn('ogallala', 'The Ogallala Aquifer'), sources: [S.oseGis, S.usgsHp, S.utton] });
  const amas = {
    'Curry County': og('A declared groundwater basin around Clovis, over the Ogallala Aquifer.'),
    Portales: og('A declared groundwater basin around Portales, over the Ogallala Aquifer.'),
    'Causey Lingo': og('A declared groundwater basin on the Texas line south of Portales, over the Ogallala Aquifer.'),
    'Lea County': og('A declared groundwater basin around Hobbs and Lovington, over the Ogallala Aquifer.'),
    'Roswell Artesian': { lede: 'The declared groundwater basin around Roswell and Artesia. Its aquifer is connected to the Pecos River.', body: basinBase + btn('roswell', 'More on this basin'), sources: [S.oseGis, S.utton] },
    'Lower Rio Grande': { lede: 'The declared groundwater basin along the Rio Grande below Caballo Dam. Pumping here is at the center of the settlement with Texas.', stats: [['18,200 AF', 'a year: the required cut in water used up by wells here']], body: basinBase + btn('txline', 'Texas v. New Mexico'), sources: [S.oseGis, S.iscSettle, S.utton] },
    Estancia: { lede: 'A declared groundwater basin east of Albuquerque. It has no river flowing out, and its farms run on wells.', body: basinBase, sources: [S.oseGis, S.utton] },
    Mimbres: { lede: 'The declared groundwater basin around Deming. The Mimbres River sinks into the desert here and never reaches the sea.', body: basinBase, sources: [S.oseGis, S.utton] },
    _default: { lede: 'A declared groundwater basin.', body: basinBase, sources: [S.oseGis, S.utton] },
  };
  const tr = (lede, body, sources) => ({ lede, body, sources });
  const mrgP = n => tr(`${n} is one of six pueblos whose fields hold the oldest water rights on the middle Rio Grande.`, btn('pueblos', 'The six pueblos'), [S.mrgAug]);
  const aam = n => tr(`${n} is one of four pueblos in the Pojoaque Basin water settlement of 2010.`, btn('aamodt', 'The settlement'), [S.tribal]);
  const tribes = {
    'Navajo Nation': tr('The Navajo Nation. Its claims to the San Juan River in New Mexico were settled in an agreement Congress approved in 2009.', btn('navajonation', 'The settlement') + btn('ngwsp', 'The pipeline'), [S.ngw]),
    'Jicarilla Apache Nation': tr('The Jicarilla Apache Nation holds settled rights to San Juan basin water.', btn('jicarilla', 'More'), [S.tnc]),
    Zuni: tr('The Zuni Reservation. A 2023 settlement of the tribe\'s water rights is waiting on Congress.', btn('zuni', 'The settlement'), [S.tribal]),
    Acoma: tr('The Pueblo of Acoma. A 2022 settlement of its water rights on the Rio San José is waiting on Congress.', btn('acoma', 'The settlement'), [S.tribal]),
    Laguna: tr('The Pueblo of Laguna. A 2022 settlement of its water rights on the Rio San José is waiting on Congress.', btn('acoma', 'The settlement'), [S.tribal]),
    Cochiti: mrgP('Cochiti'), 'Santo Domingo': mrgP('Santo Domingo'), 'San Felipe': mrgP('San Felipe'), 'Santa Ana': mrgP('Santa Ana'), Sandia: mrgP('Sandia'), Isleta: mrgP('Isleta'),
    Nambe: aam('Nambé'), Pojoaque: aam('Pojoaque'), 'San Ildefonso': aam('San Ildefonso'), Tesuque: aam('Tesuque'),
    Taos: tr('Taos Pueblo settled its water rights in 2010, in an agreement that also protects the acequias of the Taos Valley.', '<p>The settlement was valued at $144 million.</p>' + btn('acequias', 'Acequias'), [S.tribal, S.utton]),
    'Ohkay Owingeh': tr('Ohkay Owingeh has signed a settlement of its water rights on the Rio Chama. It is one of five New Mexico settlements waiting on Congress.', btn('zuni', 'The pending settlements'), [S.tribal, S.congress]),
    Jemez: tr('The Pueblo of Jemez has signed a settlement of its water rights on the Rio Jemez. It is waiting on Congress.', btn('zuni', 'The pending settlements'), [S.tribal, S.congress]),
    Zia: tr('The Pueblo of Zia has signed a settlement of its water rights on the Rio Jemez. It is waiting on Congress.', btn('zuni', 'The pending settlements'), [S.tribal, S.congress]),
    'Southern Ute': tr('This reservation is in Colorado.', '', [S.tribal]), 'Ute Mountain': tr('Most of this reservation is in Colorado.', '', [S.tribal]), 'Ysleta del Sur': tr('This pueblo is in Texas.', '', [S.tribal]),
    _default: tr('Several of New Mexico\'s tribes, pueblos and nations have settled their water rights with the state and federal governments, and five settlements were waiting on Congress in 2025.', btn('zuni', 'The pending settlements'), [S.tribal]),
  };

  window.MAPCONTENT = {
    meta: { title: 'New Mexico Water: an explorable map', h1: 'New Mexico Water', tagline: 'Where it comes from. Where it goes.', aria: "Interactive map of New Mexico's water system. Use the lists in the side panel to browse the same information without the map.", home: 'Show all of New Mexico' },
    features: F, riverStyle, rivers, canals, amas, tribes,
    kinds: {
      tunnel: ['canals', 'tunnel', 'Water moved between basins'], pipe: ['canals', 'pump', 'Pipeline under construction'], tribe: ['cities', 'tribe', 'Tribal nation'], river: ['rivers', 'river', 'River'],
      oil: ['industry', 'oil', 'Oil and gas'], well: ['ground', 'well', 'Groundwater'], farm: ['farms', 'farm', 'Farming region'], acequia: ['canals', 'canal', 'Community ditches'], dairy: ['farms', 'dairy', 'Dairies'], power: ['industry', 'power', 'Power plants'],
    },
    sprites: {
      tunnel: ['.....ww.......', '....wGGw..w...', '...GGGGGGwGG..', '..GGdGGGGGGGG.', '.GGGkkkkkGGdGG', 'GGdkkbbbkkGGGG', 'GGGkbbBbbkGGdG', 'GdGkbBbbbkGGGG', 'bbbbbbbBbbbbBb'],
      oil: ['.kk...........', '.kkkkkkkkkkk..', '.kk..kk....k..', '.....kk....k..', '....kyyk...k..', '...kyyyyk..k..', 'tttttttttttttt'],
    },
    layers: { golf: false, canals: { label: 'Canals & tunnels' } },
    majorCanals: ['sjc'], canalWidths: { sjc: 2.6 }, canalSub: { sjc: 'Water moved between river basins' },
    riverNames: { 'Rio Grande': 'Rio Grande', 'Rio Chama': 'Rio Chama', 'Rio Hondo': 'Rio Hondo', 'Rio Salado': 'Rio Salado', 'Rio Pueblo de Taos': 'Rio Pueblo de Taos', 'Rio Nambe': 'Rio Nambé', 'Rio Tesuque': 'Rio Tesuque', 'Rio de los Pinos': 'Rio de los Pinos', 'Rio San Antonio': 'Rio San Antonio',
      'San Jose': 'Rio San José', Penasco: 'Rio Peñasco', Puerco: 'Rio Puerco', 'Blackwater Draw': 'Blackwater Draw', 'Running Water Draw': 'Running Water Draw', Carrizo: 'Carrizo Creek', 'Rita Blanca': 'Rita Blanca Creek', 'Punta de Agua': 'Punta de Agua Creek',
      Chaco: 'Chaco Wash', 'East Fork Gila': 'East Fork Gila River', 'West Fork Gila': 'West Fork Gila River', 'Middle Fork Gila': 'Middle Fork Gila River', 'Rio Batepito': 'Río Batepito', 'Casas Grandes': 'Río Casas Grandes', 'Agua Prieta': 'Río Agua Prieta' },
    areaKind: n => ['Curry County', 'Portales', 'Causey Lingo', 'Lea County'].includes(n) ? 'Declared basin over the Ogallala Aquifer' : 'Declared groundwater basin',
    areaAlt: n => !['Curry County', 'Portales', 'Causey Lingo', 'Lea County'].includes(n),
    areaLabels: { Portales: { minZ: .5 }, 'Causey Lingo': { minZ: .45 }, 'Curry County': { minZ: .35 }, Estancia: { minZ: .3 } },
    fieldSub: 'Farm fields', farmRadiusKm: 45,
    hud: [['3.1M AF', 'water withdrawn per year'], ['2.1M', 'people'], ['30%', 'of median Rio Grande flow, 2026']],
    budget: {
      title: 'New Mexico withdraws about 3.1 million acre-feet a year',
      lede: 'About half comes from rivers and half from wells. Three-quarters of it goes to irrigated farms. The state expects to have about 25% less water in its rivers and aquifers in 50 years.',
      perDrop: 50000, afNote: 'An acre-foot (AF) covers a football field one foot deep: 325,851 gallons.',
      sources: [
        { id: 'surface', label: 'Rivers and reservoirs', pct: 52, af: 1.63e6, color: 'var(--c-colorado)', layer: 'rivers,reservoirs', feat: 'snow', note: 'Mostly snowmelt, carried by the Rio Grande, the San Juan, the Pecos and the Canadian.' },
        { id: 'ground', label: 'Groundwater', pct: 48, af: 1.484e6, color: 'var(--c-ground)', layer: 'ground', feat: 'ogallala', note: 'Pumped from wells. Wells supply about two-thirds of the water for public water systems.' },
      ],
      uses: [
        { id: 'ag', label: 'Irrigated farms', pct: 76, af: 2.376e6, color: 'var(--c-ag)', layer: 'farms', feat: 'mrgcd', note: 'Crops and pasture on about 750,000 acres. About a third of the river water taken for farms is lost from canals before it reaches a field.' },
        { id: 'muni', label: 'Cities & towns', pct: 9, af: 0.284e6, color: 'var(--c-muni)', layer: 'cities', feat: 'abq', note: 'Public water systems for homes and businesses.' },
        { id: 'evap', label: 'Reservoir evaporation', pct: 7, af: 0.231e6, color: 'var(--c-colorado)', layer: 'reservoirs', feat: 'ebutte', note: 'Water that evaporates from the larger reservoirs. The state counts it as a use.' },
        { id: 'ind', label: 'Business & industry', pct: 5, af: 0.159e6, color: 'var(--c-ind)', layer: 'industry', feat: 'permian', note: 'Businesses, factories, mines and power plants with their own supply.' },
        { id: 'stock', tiny: true, label: 'Livestock', val: '1.2% &middot; 0.04M AF', af: 36046, color: 'var(--c-reclaimed)', layer: 'farms', feat: 'dairy', note: 'Drinking water for cattle and other animals, nearly all from wells.' },
        { id: 'dom', tiny: true, label: 'Household wells', val: '0.9% &middot; 0.03M AF', af: 27949, color: 'var(--ink)', layer: 'ground', feat: 'ogallala', note: 'Homes with their own well.' },
      ],
      body: `<div class="note">These figures count water <b>withdrawn</b>: taken out of a river or pumped from a well, whether or not some later flows back. They are for 2015, from the latest water use report of the Office of the State Engineer, published in 2019.</div>
        <div class="note hot"><b>What is changing:</b> Winter 2025–26 brought the lowest snowpack on record. The Rio Grande carried about 30% of its median flow in 2026 and Elephant Butte Reservoir fell below 1.5% full. The readings on this map are from that year. <button class="btn" data-feat="snow" style="margin-top:6px">See the snowpack</button></div>`,
    },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a reservoir, a tunnel, a field, a canal, or open land.',
    browse: [
      ['Snow, rivers and rules', ['snow', 'otowi', 'drying', 'txline', 'pecosline', 'acequias', 'gila']],
      ['Reservoirs', ['ebutte', 'caballo', 'navajo', 'heron', 'elvado', 'abiquiu', 'cochiti', 'santarosa', 'sumner', 'brantley', 'conchas', 'ute']],
      ['Tunnels and pipelines', ['azotea', 'ngwsp', 'enm']],
      ['Cities and towns', ['abq', 'santafe', 'lascruces', 'farmington', 'lasvegas', 'clovis']],
      ['Farms', ['mrgcd', 'pecans', 'hatch', 'carlsbad', 'napi', 'dairy']],
      ['Groundwater', ['ogallala', 'roswell']],
      ['Tribes and pueblos', ['navajonation', 'jicarilla', 'aamodt', 'pueblos', 'zuni', 'acoma']],
      ['Industry', ['permian', 'intel', 'fourcorners']],
    ],
    riverLabels: [['RIO GRANDE', -106.05, 36.2, .32, -62], ['RIO GRANDE', -107.05, 32.75, .45, -50], ['PECOS RIVER', -104.42, 33.85, .32, -80], ['SAN JUAN R.', -108.75, 36.9, .45, 8], ['CANADIAN R.', -104.5, 35.95, .45, -70], ['GILA R.', -108.75, 32.72, .5, -40], ['RIO CHAMA', -106.4, 36.4, .6, -35], ['RIO PUERCO', -107.05, 34.95, .6, -70]],
    neighbors: [['COLORADO', -105.8, 37.14, 0], ['ARIZONA', -109.22, 34.3, -90], ['TEXAS', -102.82, 33.6, 90], ['OKLAHOMA', -102.82, 36.75, 90], ['TEXAS', -104.6, 31.75, 0], ['MEXICO', -107.6, 31.45, 0], ['UTAH', -109.25, 37.14, 0]],
    spot: {
      rain: inches => `${inches < 11 ? 'Desert country.' : inches < 16 ? 'Dry grassland or mesa country.' : inches < 24 ? 'Wetter foothill or mountain country.' : 'High mountain country. Much of this falls as snow, and this is where the rivers start.'} Most of the river water New Mexico uses comes from mountain snow, here and in Colorado, not from rain where people live.`,
      crop: 'cropland', rest: 'grassland, desert scrub or rock', restAlone: 'Grassland, desert scrub or bare rock', rulesTitle: 'Water rules here',
      area: n => ['Curry County', 'Portales', 'Causey Lingo', 'Lea County'].includes(n)
        ? 'This is a declared groundwater basin over the Ogallala Aquifer, which refills very slowly. There is almost no river water here. The State Engineer decides who may drill a well and how much it may pump.'
        : 'This is one of 39 groundwater basins the State Engineer has declared. Inside one, a new well needs a state permit, and older rights come first.',
      basin: n => `This spot is in the <b>${n}</b> declared groundwater basin, one of 39 that together cover the state. `,
      none: 'Water in New Mexico belongs to the public, and the right to use it goes by seniority: when there is not enough, older rights are served first. A new well needs a permit from the State Engineer, who must consider its effect on nearby rivers and older wells. A household well gets a permit for up to one acre-foot a year almost automatically.',
      tribal: 'Tribal and pueblo water rights are among the oldest in the state. Many have been set by settlements approved by Congress, and several more are pending.',
      sources: [['Elevation: Mapzen/AWS terrain tiles', 'https://registry.opendata.aws/terrain-tiles/'], ['Rain and snow: PRISM 1991–2020 normals', 'https://prism.oregonstate.edu/normals/'], ['Land cover: Esri/Impact Observatory Sentinel-2', 'https://livingatlas.arcgis.com/landcover/'], S.utton, S.oseGis],
    },
    legend: {
      rain: 'About 8 inches a year at Farmington, 9 at Albuquerque, 15 at Santa Fe, 17 at Clovis, and over 40 on the wettest mountains. PRISM 1991–2020 normals.',
      groundA: 'Declared basin over the Ogallala Aquifer', groundB: 'Other declared basins with a card',
      ground: 'Dashed white lines are the 39 declared groundwater basins, which together cover the state. Four that have their own card are shaded lightly.',
      snow: 'Where snow usually builds up (drawn from elevation and precipitation; not a live snow map). Winter 2025–26 had far less.',
    },
    about: `<p style="font-size:13px">The landscape is drawn from real data, in 3 km squares: elevation (Mapzen/AWS terrain tiles), land cover such as fields, rooftops and forest (Esri/Impact Observatory Sentinel-2), and rain and snow (PRISM 1991–2020 normals). The satellite data shows all cropland, whether or not it is irrigated; much of the cropland on the eastern plains is not. Large rivers and some reservoirs are from Natural Earth. Smaller rivers, other reservoir outlines and the groundwater basins are from the New Mexico Office of the State Engineer; reservoir outlines show a full pool, not the 2026 water line. Canals and tunnels are from OpenStreetMap contributors. Tribal lands are from the Census Bureau. The little trees, houses and crop rows are decoration placed where the data says forest, buildings or fields are. River line widths are schematic. Figures are as of 12 November 2026 and each card links its sources.</p>`,
    tour: [
      { title: 'Half from rivers, half from wells', text: 'New Mexico withdraws about 3.1 million acre-feet of water a year. About half comes from rivers and half from wells, and three-quarters goes to irrigated farms. The panel shows where the water comes from and where it goes.', view: 'home', home: true },
      { title: 'It starts as snow', text: 'The white areas are where snow usually builds up in winter. In 2026 there was almost none: at the end of March the upper Rio Grande basin held 7% of its normal snow, a record low. The Rio Grande carried about 30% of its median flow that year.', view: 'home', season: 'winter', select: 'snow', layers: ['rivers', 'reservoirs', 'canals'] },
      { title: 'Colorado River water, through a mountain', text: 'The turquoise lines are tunnels. They carry water from streams that feed the San Juan River under the Continental Divide to Heron Lake, for Albuquerque, Santa Fe and farms on the Rio Grande. An average of 87,761 acre-feet a year came through from 2016 to 2025.', box: [-107.2, 36.5, -106.2, 37.25], zoom: 1.5, select: 'azotea', layers: ['rivers', 'reservoirs', 'canals', 'cities'] },
      { title: 'A city that switched to the river', text: 'Albuquerque drank only from wells until 2008, and its aquifer was falling. It now treats imported river water too, and groundwater levels have risen. When the river is too low, as in the summers of 2025 and 2026, the city goes back to its wells.', lon: -106.6, lat: 35.2, zoom: 1.1, select: 'abq', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'The river ran dry', text: 'On 7 August 2026, 82 miles of the Rio Grande between Albuquerque and Elephant Butte were dry, more than twice the usual. Thirteen of those miles were inside Albuquerque. Farms in the valley went months without water while the six pueblos, which hold the oldest rights, were served first.', box: [-107.5, 33.7, -106.2, 35.0], zoom: 1, select: 'drying', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'An almost empty reservoir', text: 'Elephant Butte is the largest reservoir in the state. On 29 July 2026 it held 26,732 acre-feet, the least since the 1950s. It has held as much as 2.3 million. Autumn storms brought it back to 208,084 by 11 November.', lon: -107.2, lat: 33.15, zoom: 1.1, select: 'ebutte', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms'] },
      { title: 'Pecans, wells and Texas', text: 'When the river allotment is small, pecan growers around Las Cruces pump from wells. Texas sued over that pumping in 2013. Under a settlement approved in May 2026, New Mexico must cut the water those wells use up by 18,200 acre-feet a year within ten years.', box: [-107.4, 31.8, -106.3, 32.9], zoom: 1.1, select: 'txline', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'ground'] },
      { title: 'An aquifer that does not refill', text: 'On the eastern plains there is no river to speak of. Farms, dairies and towns pump the Ogallala Aquifer, shaded here. It held 11.4 million acre-feet less under New Mexico in 2019 than before pumping began. A pipeline is being built from Ute Reservoir to Clovis and Portales.', box: [-104.4, 33.6, -102.9, 35.6], zoom: .9, select: 'ogallala', layers: ['rivers', 'reservoirs', 'ground', 'cities', 'farms'] },
      { title: 'Water that comes up with oil', text: 'Oil wells in the southeast corner brought up 353,000 acre-feet of salty, contaminated water in 2025. Public water systems statewide withdrew 284,157 in 2015. Most of the oilfield water is pumped back underground. Whether it can be cleaned and used is an open question in state policy.', lon: -103.9, lat: 32.5, zoom: .9, select: 'permian', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry'] },
      { title: 'What happens next', text: 'The state\'s 50-year plan expects about 25% less water in rivers and aquifers. Five tribal water settlements are waiting on Congress, and a pipeline from Navajo Reservoir to Gallup is due by 2029. Now explore: click any reservoir, tunnel, field or patch of open land.', view: 'home', select: 'navajo', layers: ['rivers', 'reservoirs', 'canals', 'cities', 'farms', 'industry'] },
    ],
    terrain: {
      // snow line: high in this southern state, lower on the wet northern ranges, and absent from valleys and plains
      snowLine: (lat, p) => 2900 + (36.5 - lat) * 150 - Math.max(-200, Math.min(500, (p - 18) * 30)),
      alpine: 3500, saguaro: () => false,
      pivot: (lon, lat) => lon > -104.9 || (lon < -107.9 && lat > 36.3) || (lat < 32.6 && lon < -107.3) || (lon > -106.3 && lon < -105.8 && lat > 34.5 && lat < 35.2),
      redrock: (lon, lat, e, cl) => cl((-107.0 - lon) / .6, 0, 1) * cl((lat - 35.2) / .5, 0, 1) * cl((2300 - e) / 300, 0, 1),
    },
  };
})();
