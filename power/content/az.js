/* Arizona Power: content for the electricity map.
   The map engine (west/js/app.js) is shared with the water maps. This file supplies the words, the styles and the
   electricity-specific cards. Plant numbers (capacity, output, emissions) are not typed here: they come from the baked
   dataset in power/data/az.js (EIA-860M inventory and EPA eGRID), so a card can never disagree with the data. */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'ARIZONA PUBLIC SERVICE CO': ['Arizona Public Service', 'APS', 'iou'], 'SALT RIVER PROJECT': ['Salt River Project', 'SRP', 'public'],
    'TUCSON ELECTRIC POWER CO': ['Tucson Electric Power', 'TEP', 'iou'], 'UNS ELECTRIC, INC': ['UniSource Energy Services', 'UniSource', 'iou'],
    'NAVAJO TRIBAL UTILITY AUTHORITY': ['Navajo Tribal Utility Authority', 'NTUA', 'tribal'], 'AHA MACAV POWER SERVICE': ['Aha Macav Power Service', 'Aha Macav', 'tribal'], 'NAVOPACHE ELECTRIC COOP, INC': ['Navopache Electric Cooperative', 'Navopache', 'coop'], 'MOHAVE ELECTRIC COOPERATIVE, INC.': ['Mohave Electric Cooperative', 'Mohave Co-op', 'coop'],
    'SULPHUR SPRINGS VALLEY E C INC': ['Sulphur Springs Valley Electric Cooperative', 'Sulphur Springs', 'coop'], 'TRICO ELECTRIC COOPERATIVE INC': ['Trico Electric Cooperative', 'Trico', 'coop'],
    'GRAHAM COUNTY ELECTRIC COOP INC': ['Graham County Electric Cooperative', 'Graham County', 'coop'], 'DUNCAN VALLEY ELEC COOP, INC': ['Duncan Valley Electric Cooperative', 'Duncan Valley', 'coop'],
    'COLUMBUS ELECTRIC COOP, INC': ['Columbus Electric Cooperative', 'Columbus', 'coop'],
    'CITY OF SAFFORD - (AZ)': ['City of Safford', 'Safford', 'public'], 'PAGE UTILITY ENTERPRISES': ['Page Utility Enterprises', 'Page', 'public'],
  };
  // Territories the source draws as whole counties (several irrigation and tribal utilities) are left out: a wrong answer is worse than none.
  const K = window.POWERKIT.begin({ id: 'az', st: 'AZ', name: 'Arizona', util: UTIL, bigUtils: ['APS', 'SRP', 'TEP', 'NTUA'],
    lineLede: { '345': 'A long-distance line. Lines at 345 kilovolts link the Four Corners and eastern Arizona plants to Phoenix and Tucson.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. Arizona produces almost no gas of its own, so the gas its power plants burn arrives through lines like this one.' });
  const { P, EY, INV, SRC_INV, SRC_EGRID, fmt, mwTxt, genTxt, tonsTxt } = K;

  // ------------------------------------------------------------------ words and figures (research/arizona_power.md has the fact sheet and verification log)
  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923w: ['EIA power plant cooling-water data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2024 and 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility sales data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA Arizona Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/arizona/'],
    hist: ['EIA state generation and emissions history', 'https://www.eia.gov/electricity/data/state/'],
    roof: ['EIA small-scale solar estimates', 'https://www.eia.gov/electricity/data/eia861m/'],
    inv: SRC_INV,
    tenk: ['Pinnacle West (APS) annual report for 2025', 'https://www.sec.gov/Archives/edgar/data/764622/000076462226000011/pnw-20251231.htm'],
    apsPeak: ['APS, 4 Aug 2026', 'https://www.aps.com/en/About/Our-Company/Newsroom/Articles/APS-Customers-Set-New-Peak-Energy-Demand-Record'],
    apsIrp: ['APS resource plan release, 2 Nov 2026', 'https://finviz.com/news/413155/aps-prioritizes-reliability-affordability-in-2026-integrated-resource-plan'],
    apsDc: ['APS: data centers', 'https://www.aps.com/datacenters'],
    apsSun: ['APS: Desert Sun Power Plant', 'https://www.aps.com/desertsun'],
    acc25: ['Arizona Corporation Commission, 9 Aug 2025', 'https://azcc.gov/news/home/2025/08/09/arizona-electric-utilities-set-record-high-demand--again--demand-soars-above-original-forecasts-for-2025'],
    accMar: ['Arizona Corporation Commission, 10 Mar 2026', 'https://www.azcc.gov/news/home/2026/03/10/march-4--2026-open-meeting-highlights'],
    accJun: ['Arizona Corporation Commission, 1 Jun 2026', 'https://azcc.gov/news/home/2026/06/01/acc-to-explore-options-after-disapproval-of-renewable-energy-standard-and-tariff-rulemaking-package'],
    accGas: ['Arizona Corporation Commission gas workshop, 28 Aug 2025', 'https://www.azcc.gov/news/home/2025/08/28/vice-chair-myers--highlights-from-natural-gas-infrastructure-and-storage-workshop'],
    accLoad: ['Arizona Corporation Commission large-load workshop, 20 Apr 2026', 'https://www.azcc.gov/news/home/2026/04/20/acc-large-load-data-center-workshop-highlights'],
    accRate: ['Arizona Corporation Commission, 10 Jul 2026', 'https://azcc.gov/news/home/2026/07/10/what-s-next-in-the-aps-rate-case'],
    kjzzPeak: ['KJZZ, 29 Jul 2026', 'https://www.kjzz.org/business/2026-07-29/aps-srp-saw-peak-demand-records-as-both-neared-planned-power-capacity-for-the-summer'],
    kjzzDc: ['KJZZ, 26 Oct 2026', 'https://kjzz.org/business/2026-10-26/arizona-utilities-scramble-to-keep-up-as-data-center-boom-drives-rapid-expansion-of-the-power-grid'],
    kjzzSrp: ['KJZZ, 2 Nov 2026', 'https://www.kjzz.org/business/2026-11-02/srp-board-members-weighing-benefits-of-data-center-moratorium'],
    kjzzIrp: ['KJZZ, 4 Nov 2026', 'https://www.kjzz.org/business/2026-11-04/fossil-fuel-power-could-remain-big-player-for-decades-to-come-as-aps-expects-energy-demand-to-double'],
    kjzz4c: ['KJZZ, 5 Oct 2026', 'https://www.kjzz.org/business/2026-10-05/aps-signs-agreement-that-could-extend-four-corners-coal-power-plant-use-until-2038'],
    kjzzTsmc: ['KJZZ, 4 Aug 2026', 'https://www.kjzz.org/business/2026-08-04/costs-of-generating-electricity-and-transmission-cut-into-aps-profits-despite-record-sales'],
    srpCeo: ['SRP chief executive, Arizona Capitol Times, 31 Mar 2026', 'https://azcapitoltimes.com/news/2026/03/31/the-facts-about-srp-and-data-centers/'],
    srpGoals: ['SRP: 2035 goals', 'https://srpnet.com/2035'],
    srpCool: ['SRP: Coolidge expansion', 'https://www.srpnet.com/grid-water-management/grid-management/improvement-projects/coolidge-expansion-project'],
    srpNavajo: ['SRP, 15 May 2026', 'https://media.srpnet.com/srp-crews-bring-reliable-power-to-13-remote-homes-in-the-navajo-nation/'],
    tepRates: ['TEP: 2026 rate review', 'https://www.tep.com/2026-rates/'],
    tepPlan: ['TEP: resource planning', 'https://www.tep.com/resource-plan/'],
    tepMkt: ['TEP, Nov 2024', 'https://tep.com/?p=28350'],
    kold: ['KOLD, 6 Oct 2026', 'https://www.kold.com/2026/10/06/department-energy-awards-21-million-southern-arizona-coal-plant/'],
    pbs: ['AP via PBS NewsHour, 18 Nov 2019', 'https://www.pbs.org/newshour/nation/long-running-coal-plant-on-navajo-nation-stops-production'],
    epaNgs: ['EPA fact sheet, 28 Jul 2014', 'https://19january2017snapshot.epa.gov/www3/region9/air/navajo/pdfs/ngs-fact-sheet-2014-07-28.pdf'],
    clui: ['Center for Land Use Interpretation', 'https://clui.org/ludb/site/black-mesa-coal-mine-and-pipeline'],
    ej: ['Earthjustice summary of utility filings, Sep 2025', 'https://earthjustice.org/feature/coal-ash-states/arizona'],
    levels: ['Reclamation daily lake levels, 12 Nov 2026', 'https://www.usbr.gov/lc/region/g4000/hourly/levels.html'],
    ap: ['AP via Fortune, 17 Aug 2026', 'https://fortune.com/2026/08/17/lake-powell-hydropower-shutdown-record-low/'],
    cob: ['Circle of Blue, 29 Apr 2026', 'https://www.circleofblue.org/2026/supply/glen-canyon-dam-faces-its-existential-moment/'],
    cobHoover: ['Circle of Blue, 2025', 'https://www.circleofblue.org/2025/water-energy/once-a-showcase-of-american-optimism-and-engineering-hoover-dam-faces-new-power-generation-declines/'],
    sunzia: ['EIA Today in Energy, 12 Jun 2026', 'https://www.eia.gov/todayinenergy/detail.php?id=67766'],
    tenwest: ['Ten West Link briefing to California ISO, 31 Jul 2024', 'https://www.caiso.com/documents/presentation-dcrt-transmission-development-forum-jul-31-2024.pdf'],
    caiso: ['California ISO, Nov 2021', 'https://www.caiso.com/about/news/good-news-on-the-transmission-front'],
    weim: ['Western Energy Markets: participants', 'https://www.westernenergymarkets.com/pages/about/default.aspx'],
    uma: ['EIA Uranium Marketing Annual Report, 2025', 'https://www.eia.gov/uranium/marketing/'],
    ef: ['Energy Fuels: Pinyon Plain Mine', 'https://www.energyfuels.com/pinyon-plain-mine/'],
    ans: ['American Nuclear Society, 31 Jan 2025', 'https://www.ans.org/news/2025-01-31/article-6732/energy-fuelsnavajo-nation-agreement-to-restart-uranium-transport/'],
    rollcall: ['Roll Call, 8 Aug 2023', 'https://rollcall.com/2023/08/08/biden-to-designate-national-monument-for-lands-near-grand-canyon/'],
    epaU: ['EPA: Navajo Nation uranium cleanup', 'https://www.epa.gov/navajo-nation-uranium-cleanup'],
    epaAum: ['EPA: abandoned mines cleanup', 'https://www.epa.gov/navajo-nation-uranium-cleanup/abandoned-mines-cleanup'],
    epaOzone: ['EPA, 22 Mar 2026', 'https://www.epa.gov/newsreleases/epa-determines-phoenix-mesa-area-will-not-be-unfairly-punished-international-emissions'],
    capPower: ['CAP power fact sheet, Oct 2024', 'https://library.cap-az.com/documents/factsheets/cap-power-portfolio-fact-sheet.pdf'],
    pvWater: ['Water Technology, 2010', 'https://www.watertechonline.com/process-water/article/16221179/historic-water-agreement-ensures-electric-power-wastewater-treatment-in-valley-through-2050'],
    cronkite: ['Cronkite News, 25 Feb 2020', 'https://cronkitenews.azpbs.org/2020/02/25/palo-verde-nuclear-water-use'],
    pvtech: ['PV Tech, 17 Aug 2026', 'https://www.pv-tech.org/acc-cuts-arizona-solar-export-rate/'],
    pvmag: ['pv magazine USA, 10 Nov 2026', 'https://pv-magazine-usa.com/2026/11/10/arizona-election-results-open-new-opportunities-for-affordable-clean-energy/'],
    ktar: ['KTAR, 15 Apr 2026', 'https://ktar.com/arizona-news/2026-light-up-navajo'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
    gasStor: ['EIA: underground gas storage capacity by state', 'https://www.eia.gov/dnav/ng/ng_stor_cap_a_EPG0_SAC_Mmcf_a.htm'],
    gasProd: ['EIA: marketed gas production by state', 'https://www.eia.gov/dnav/ng/ng_prod_sum_a_EPG0_VGM_mmcf_a.htm'],
  };
  const TWH = 1e6;
  const BUDGET = {
    title: 'Arizona generated 116 terawatt-hours of electricity in 2025',
    lede: 'Natural gas and one nuclear plant made 72% of it. Solar farms made more than coal. About a sixth of what Arizona generates is used in other states.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: TWH, shape: 'bolt', unitLine: 'Each bolt = 1 terawatt-hour (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is 2025. The second is 2024, the latest year for which the federal government has published where the power went.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'gas', label: 'Natural gas', pct: 45.2, af: 52.67 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'gilariver', note: 'Burned in gas plants across the state, the largest of them around Phoenix. All of the gas arrives by pipeline from New Mexico and Texas. In 2025 the plants burned about 400 billion cubic feet.' },
      { id: 'nuclear', label: 'Nuclear', pct: 26.9, af: 31.32 * TWH, color: '#6250d6', layer: 'plants', feat: 'paloverde', note: 'All from one plant, Palo Verde, west of Phoenix. Utilities in California, New Mexico and Texas own shares of it.' },
      { id: 'solar', label: 'Solar farms', pct: 13.3, af: 15.50 * TWH, color: '#f2c230', layer: 'plants', feat: 'sonoran', note: 'Up from 10.8 TWh in 2024. Rooftop panels are not counted here: the federal estimate for them is another 5.8 TWh.' },
      { id: 'coal', label: 'Coal', pct: 7.9, af: 9.22 * TWH, color: '#5c5a66', layer: 'plants,closed', feat: 'springerville', note: 'Three plants still burn coal. In 2010 coal made 43.6 TWh, or 39% of Arizona\'s electricity.' },
      { id: 'hydro', label: 'Hydropower', pct: 4.2, af: 4.85 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'glencanyon', note: 'Mostly Glen Canyon, Hoover and Davis dams on the Colorado River. Output falls as the reservoirs fall.' },
      { id: 'wind', label: 'Wind', pct: 2.7, af: 3.15 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'westcamp', note: 'Wind farms on the high country of northern Arizona.' },
      { id: 'other', tiny: true, label: 'Wood waste, landfill gas and oil', af: 0.26 * TWH, color: '#8a5a3a', val: '0.2% &middot; 0.3 TWh', layer: 'plants', note: 'Small plants that burn wood waste, landfill gas or oil.' },
    ],
    uses: [
      { id: 'homes', label: 'Homes', pct: 34.8, af: 40.43 * TWH, color: '#c8442e', layer: 'cities', feat: 'phoenix', note: 'Sold to 3.1 million households in 2024. Air conditioning drives the summer peak.' },
      { id: 'biz', label: 'Businesses', pct: 31.1, af: 36.11 * TWH, color: '#3f8f46', layer: 'cities', feat: 'datacenters', note: 'Shops, offices, schools and other commercial customers.' },
      { id: 'ind', label: 'Industry', pct: 12.3, af: 14.30 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'morenci', note: 'Mines, smelters and factories. The utility that serves the Morenci copper mine sold 2.7 TWh in 2024.' },
      { id: 'export', label: 'Sent to other states', pct: 17.0, af: 19.67 * TWH, color: '#eb6834', layer: 'lines', feat: 'pvhub', note: 'What is left after Arizona\'s own use and losses. It is a net figure. The federal government calculates it and does not meter it. In 2009 it was 32.6 TWh.' },
      { id: 'loss', label: 'Lost on the wires', pct: 3.7, af: 4.24 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'misc', label: 'Used at plants or not accounted for', pct: 1.1, af: 1.27 * TWH, color: '#5c5a66', note: 'Power that plant owners used on site without selling it (0.5 TWh), plus 0.7 TWh the federal balance could not assign.' },
    ],
    body: '<p class="gcap">2025: total 116.5 TWh from plants of 1 megawatt or more. Batteries used 0.5 TWh more than they gave back, so the rows add up to slightly more than the total. 2024: 116.0 TWh generated. Sources: <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/arizona/" target="_blank" rel="noopener">EIA Arizona Electricity Profile, 2024</a> &middot; <a href="https://www.eia.gov/electricity/data/eia861m/" target="_blank" rel="noopener">EIA small-scale solar</a> &middot; <a href="https://www.eia.gov/electricity/data/state/" target="_blank" rel="noopener">EIA state history</a></p>',
  };
  const HUD = [['116 TWh', 'electricity generated in 2025'], ['45%', 'of it from natural gas'], ['9,164 MW', 'record demand on APS, 2 Aug 2026']];
  const ABOUT = `<p style="font-size:13px">Power plants are from the federal generator inventory for ${INV} (EIA-860M): location, fuel, capacity, opening and closing years, and planned projects. Each plant's output and emissions are for ${EY}, from EPA's eGRID, in short tons (2,000 pounds). Where a card gives 2025 output, cooling water or fuel deliveries, the figure is our sum of federal plant reports (EIA-923), and the card says the year. Lines of 345 kilovolts and above are from OpenStreetMap contributors. Lines below 345 kilovolts are from a federal file last checked between 2017 and 2021, so recent lines may be missing. Gas pipelines are from EIA map data. Utility areas are approximate, and several small irrigation districts and tribal utilities are left out because the source draws them as whole counties. The Four Corners and San Juan coal plants in New Mexico are outside the map; cards mention them where they matter. The landscape (elevation, land cover, rivers) is the same as on the Arizona water map. Figures are as of November 2026 and each card links its sources.</p>`;
  const FEATURES = [];
  const BROWSE = [];
  const TOUR = [];
  const AREAS = {};
  const PIPECARDS = {};
  const LINECARDS = [];
  const add = o => FEATURES.push(o);
  const COALASH = 'Coal ash is what is left after coal burns. It is stored on site in ponds and landfills, and federal rules require the owner to test the groundwater around them.';

  // ----------------------------------------------------------------- nuclear
  add({ id: 'paloverde', kind: 'nuclear', plant: 6008, name: 'Palo Verde Generating Station', short: 'Palo Verde', tier: 1,
    lede: 'One plant with three reactors makes more than a quarter of Arizona\'s electricity. It sits in the desert with no river or lake, and is cooled with treated wastewater from Phoenix-area cities.',
    stats: [['31.3 TWh', 'electricity generated in 2025, 26.9% of all generation in Arizona'], ['29.1%', 'share owned by Arizona Public Service, which runs the plant'], ['69,800 AF', 'cooling water consumed in 2025. An acre-foot (AF) is 325,851 gallons'], ['2045 to 2047', 'years the three reactor licenses expire']],
    body: '<p>Seven utilities own the plant. Besides Arizona Public Service and Salt River Project they are Southern California Edison, the Los Angeles Department of Water and Power, the Southern California Public Power Authority, El Paso Electric of Texas and Public Service Company of New Mexico. The out-of-state owners take their shares of the output home.</p><p>Five cities (Phoenix, Glendale, Mesa, Scottsdale and Tempe) agreed in 2010 to sell the plant up to 26 billion gallons of treated wastewater a year through 2050. The water it consumed in 2025 was 53% of all cooling water consumed by Arizona power plants that report to the federal government.</p><p>Used fuel is stored on site in steel and concrete casks. Federal law required the government to start taking used reactor fuel in 1998, and it has not.</p>',
    sources: [S.e923, S.e923w, S.tenk, S.pvWater] });

  // ----------------------------------------------------------------- coal
  add({ id: 'springerville', kind: 'coal', plant: 8223, name: 'Springerville Generating Station', short: 'Springerville', tier: 1,
    lede: 'Arizona\'s largest coal plant, run by Tucson Electric Power. Two of its four units are approved to switch from coal to natural gas in 2030.',
    stats: [['5.5 TWh', 'electricity generated in 2025, the most of any Arizona coal plant'], ['3.4M tons', 'coal delivered by rail in 2025: 42% from New Mexico, 58% from Wyoming'], ['4,800 AF', 'cooling water consumed in 2025'], ['4 Mar 2026', 'date state regulators approved converting Units 1 and 2 to gas']],
    body: '<p>In 2025 the coal came from the Lee Ranch mine in McKinley County, New Mexico (1.44 million tons) and from two mines in Wyoming\'s Powder River Basin, Black Thunder and North Antelope Rochelle (1.95 million tons together). Arizona has no working coal mine.</p><p>Tucson Electric Power told regulators that converting the two units would cost $170 million, against $450 million to keep them on coal. The conversion depends on a new gas pipeline expected at the end of 2029.</p><p>' + COALASH + ' A 2025 summary of the plant\'s own filings lists a 32.6 million cubic yard ash landfill here and lithium in groundwater at 26 times the federal health-based level.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.accMar, S.accGas, S.ej] });
  add({ id: 'coronado', kind: 'coal', plant: 6177, name: 'Coronado Generating Station', short: 'Coronado', tier: 2,
    lede: 'A Salt River Project coal plant near St. Johns. All of its coal in 2025 came by rail from Wyoming and Montana. It is approved to switch to natural gas.',
    stats: [['2.9 TWh', 'electricity generated in 2025'], ['1.78M tons', 'coal delivered in 2025, all from Wyoming and Montana'], ['$1.1 billion', 'Salt River Project\'s estimate for converting to gas and running to 2045'], ['5,000 AF', 'cooling water consumed in 2025']],
    body: '<p>The 2025 coal came from the Black Thunder and North Antelope Rochelle mines in Wyoming and the Spring Creek mine in Montana. Most of it was sold by the Navajo Transitional Energy Company, which the Navajo Nation owns.</p><p>The Salt River Project board approved the gas conversion on 24 June 2025 and state regulators approved it on 4 March 2026. The utility says a new gas plant would cost $300 million more.</p><p>' + COALASH + ' A 2025 summary of the plant\'s own filings lists 16.2 million cubic yards of ash here and lithium in groundwater at 14 times the federal health-based level.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.accMar, S.ej] });
  add({ id: 'apache', kind: 'gas', kindLabel: 'Coal and natural gas plant', plant: 160, name: 'Apache Generating Station', short: 'Apache', tier: 2,
    lede: 'The plant of Arizona Electric Power Cooperative, which generates for rural electric co-ops. One unit still burns coal. The rest burn gas.',
    stats: [['2.2 TWh', 'electricity generated in 2025, of which 0.4 TWh from coal'], ['204 MW', 'capacity of the one coal unit'], ['$21 million', 'federal award reported in October 2026 to modernize the coal unit'], ['2,500 AF', 'cooling water consumed in 2025']],
    body: '<p>The co-op had said it would stop burning coal here by the end of 2027. In October 2026 the US Department of Energy awarded $21 million to modernize the coal unit, and local television reported that the unit will keep running.</p><p>In 2024 the coal came by rail from the El Segundo mine in New Mexico and the North Antelope Rochelle mine in Wyoming.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.kold] });

  // ----------------------------------------------------------------- closed
  add({ id: 'navajo', kind: 'closed', plant: 4941, name: 'Navajo Generating Station (closed 2019)', short: 'Navajo (closed)', tier: 2,
    lede: 'A coal plant near Page, on the Navajo Nation. It stopped generating on 18 November 2019, and Arizona\'s coal power fell by 41% the next year.',
    stats: [['2,250 MW', 'capacity when it ran'], ['24.3%', 'share owned by the US Bureau of Reclamation, to power the Central Arizona Project\'s pumps'], ['78 miles', 'length of the electric railroad that brought its coal from the Kayenta Mine'], ['430+', 'employees at closing']],
    body: '<p>The owners decided in 2017 to close the plant, citing cheaper power from natural gas. The other owners were Salt River Project (21.7%), the Los Angeles Department of Water and Power (21.2%), Arizona Public Service (14%), NV Energy (11.3%) and Tucson Electric Power (7.5%).</p><p>In 2014 the EPA called it one of the largest sources of nitrogen oxides in the country. It found the plant affected visibility at 11 national parks and wilderness areas, including the Grand Canyon, and ordered cuts of more than 80%. The plant closed before most of those steps came due.</p><p>Arizona coal plants generated 23.2 TWh in 2019 and 13.8 TWh in 2020.</p>',
    sources: [S.pbs, S.epaNgs, S.hist] });
  add({ id: 'cholla', kind: 'closed', plant: 113, name: 'Cholla Power Plant (closed 2025)', short: 'Cholla (closed)', tier: 2,
    lede: 'An Arizona Public Service coal plant beside Interstate 40. It burned its last coal in March 2025. The company now proposes to convert it to natural gas.',
    stats: [['March 2025', 'last coal burned. The last two units were formally retired on 30 April 2025'], ['0.39 TWh', 'electricity generated in its final three months'], ['628,765 tons', 'coal delivered in 2024, all from the El Segundo mine in New Mexico'], ['15.2M cubic yards', 'coal ash stored on site, in three ponds and a landfill']],
    body: '<p>Unit 2 closed in 2015 and Unit 4, owned by PacifiCorp, in December 2020. In its 2025 rate request, Arizona Public Service asked to charge customers for the continuing cost of closing the ash ponds and cleaning up the site.</p><p>' + COALASH + ' A 2025 summary of the plant\'s own filings lists boron in groundwater at 25 times the federal health-based level, sulfate at 23 times and lithium at 18 times.</p>',
    sources: [S.tenk, S.e923, S.e923f, S.apsIrp, S.ej] });
  add({ id: 'mohave', kind: 'closed', plant: 2341, name: 'Mohave Generating Station (closed 2005)', short: 'Mohave (closed)', tier: 3,
    lede: 'A coal plant in Laughlin, Nevada, that was fed by a pipeline. Coal from Black Mesa in Arizona was crushed, mixed with groundwater and pumped here as slurry.',
    stats: [['273 miles', 'length of the coal slurry pipeline from Black Mesa'], ['1.3 billion gallons', 'groundwater the pipeline used each year, from the Navajo Aquifer'], ['2005', 'year the plant and the Black Mesa Mine stopped']],
    body: '<p>The plant was the Black Mesa Mine\'s only customer, so the mine closed with it. The Navajo and Hopi tribal councils later banned the use of Navajo Aquifer water to move coal.</p><p class="gcap">The federal inventory dates the retirement of the generators to 2012. The plant last ran in 2005.</p>',
    sources: [S.clui] });

  // ----------------------------------------------------------------- gas
  add({ id: 'gilariver', kind: 'gas', plant: 55306, name: 'Gila River Power Station', short: 'Gila River', tier: 1,
    lede: 'The largest natural gas plant in Arizona, near Gila Bend. Its four blocks made more electricity in 2025 than any plant in the state except Palo Verde.',
    stats: [['11.0 TWh', 'electricity generated by the four blocks in 2025'], ['2,476 MW', 'capacity of the four blocks together'], ['77.8 Bcf', 'natural gas delivered in 2025. Bcf means billion cubic feet'], ['9,100 AF', 'cooling water consumed in 2025']],
    body: '<p>Each block burns gas in turbines and then uses the hot exhaust to make steam for a second turbine. That design, called combined cycle, gets more electricity from the same gas.</p>',
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'mesquite', kind: 'gas', plant: 55481, name: 'Mesquite Generating Station', short: 'Mesquite', tier: 3,
    lede: 'A two-block gas plant next to Palo Verde. It uses the same switchyards to send its power out.',
    stats: [['7.5 TWh', 'electricity generated by the two blocks in 2025'], ['54.3 Bcf', 'natural gas delivered in 2025'], ['6,800 AF', 'cooling water consumed in 2025']],
    
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'redhawk', kind: 'gas', plant: 55455, name: 'Redhawk Power Plant', short: 'Redhawk', tier: 3,
    lede: 'Arizona Public Service\'s largest gas plant, just south of Palo Verde. Eight more turbines are being added for the hours when demand is highest.',
    stats: [['4.8 TWh', 'electricity generated in 2025'], ['34.1 Bcf', 'natural gas delivered in 2025'], ['397 MW', 'capacity of the eight turbines being added, due in 2028'], ['4,900 AF', 'cooling water consumed in 2025']],
    sources: [S.e923, S.e923f, S.e923w, S.tenk] });
  add({ id: 'santan', kind: 'gas', plant: 8068, name: 'Santan Generating Station', short: 'Santan', tier: 2,
    lede: 'A Salt River Project gas plant inside the suburb of Gilbert. It took delivery of more gas in 2025 than any other single plant in Arizona.',
    stats: [['4.6 TWh', 'electricity generated in 2025'], ['35.1 Bcf', 'natural gas delivered in 2025'], ['4,100 AF', 'cooling water consumed in 2025']],
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'westphoenix', kind: 'gas', plant: 117, name: 'West Phoenix Power Plant', short: 'West Phoenix', tier: 3,
    lede: 'An Arizona Public Service gas plant inside the city. Its first units opened in the 1970s.',
    stats: [['4.3 TWh', 'electricity generated in 2025'], ['35.0 Bcf', 'natural gas delivered in 2025'], ['4,900 AF', 'cooling water consumed in 2025']],
    body: '<p>The company says most of its gas-fired units are inside the Phoenix and Yuma areas that do not meet the federal ozone standard. Gas plants release nitrogen oxides, one of the ingredients of ozone.</p>',
    sources: [S.e923, S.e923f, S.e923w, S.tenk] });
  add({ id: 'griffith', kind: 'gas', plant: 55124, name: 'Griffith Energy', short: 'Griffith', tier: 2,
    lede: 'A gas plant near Kingman. Its operator is an independent company, not a utility.',
    stats: [['3.8 TWh', 'electricity generated in 2025'], ['27.3 Bcf', 'natural gas delivered in 2025, all listed as sold by BP'], ['3,500 AF', 'cooling water consumed in 2025']],
    body: '<p>The plant is its own "balancing authority": it must match its output to its sales minute by minute, as a utility does for a whole region.</p>',
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'southpoint', kind: 'gas', plant: 55177, name: 'South Point Energy Center', short: 'South Point', tier: 3,
    lede: 'A gas plant beside the Colorado River south of Bullhead City.',
    stats: [['2.0 TWh', 'electricity generated in 2025'], ['14.9 Bcf', 'natural gas delivered in 2025'], ['1,800 AF', 'cooling water consumed in 2025']],
    sources: [S.e923, S.e923f, S.e923w] });
  add({ id: 'sundt', kind: 'gas', plant: 126, name: 'H. Wilson Sundt Generating Station', short: 'Sundt', tier: 2,
    lede: 'Tucson Electric Power\'s plant inside Tucson. Ten gas engines were added in 2019 and 2020 beside its older steam units.',
    stats: [['1.6 TWh', 'electricity generated in 2025'], ['16.6 Bcf', 'natural gas delivered in 2025'], ['2,200 AF', 'cooling water consumed in 2025']],
    sources: [S.e923, S.e923f, S.e923w, S.inv] });
  add({ id: 'coolidge', kind: 'gas', plant: 56948, name: 'Coolidge Generating Station', short: 'Coolidge', tier: 3,
    lede: 'A Salt River Project plant built to run only when demand is highest. It is being expanded with 12 more gas turbines.',
    stats: [['0.06 TWh', 'electricity generated in 2025, before the expansion'], ['575 MW', 'capacity of the 12 turbines being added'], ['2026 and 2027', 'summers the new turbines were scheduled to start, six each year']],
    body: '<p>Plants like this are called peakers. They sit ready most of the year and run when demand is highest, mostly on summer evenings.</p>',
    sources: [S.e923, S.srpCool] });
  add({ id: 'saddleback', kind: 'plannedp', plant: 69595, name: 'Saddleback Generation Station (planned)', short: 'Saddleback (planned)', tier: 3,
    lede: 'A large gas plant proposed west of Palo Verde by Copia Power, an independent developer. It is the only planned plant of its type in the federal list for Arizona.',
    stats: [['December 2030', 'planned start reported to the federal government'], ['Not yet sought', 'status of its regulatory approvals in September 2026']],
    sources: [S.inv] });
  add({ id: 'desertsun', kind: 'plannedp', lon: -112.95, lat: 33.00, name: 'Desert Sun Power Plant (proposed)', short: 'Desert Sun (proposed)', tier: 3,
    lede: 'A gas plant that Arizona Public Service proposes to build about 13 miles west of Gila Bend. Large customers such as data centers would pay for part of it.',
    stats: [['1,280 MW', 'capacity planned at this site'], ['2028', 'year construction would start, if approved'], ['2031', 'estimated completion']],
    body: '<p>When the company announced the project in October 2025 it described up to 2,000 MW in two phases. It has since moved part of the first phase to its existing Saguaro plant north of Tucson, which it says can be ready by 2030.</p><p>The plant needs a county air permit and a zoning change. The gas would come through a proposed expansion of the Transwestern pipeline from Texas.</p><p class="gcap">The marker is approximate. The company has not published exact coordinates.</p>',
    sources: [S.apsSun, ['KJZZ, 30 Oct 2025', 'https://www.kjzz.org/business/2025-10-30/aps-plans-to-build-a-new-natural-gas-power-plant-near-gila-bend'], S.apsIrp] });

  // ----------------------------------------------------------------- hydro
  add({ id: 'glencanyon', kind: 'hydro', plant: 153, name: 'Glen Canyon Dam', short: 'Glen Canyon', tier: 1,
    lede: 'The dam that holds Lake Powell. In August 2026 the lake fell to a record low, about 30 feet above the level where the dam can no longer make power.',
    stats: [['2.75 TWh', 'electricity generated in 2025'], ['3,539.64 ft', 'Lake Powell surface on 12 November 2026'], ['3,519.91 ft', 'record low reached in mid-August 2026'], ['3,490 ft', 'level below which the turbines cannot run']],
    body: '<p>Water reaches the turbines through eight large pipes high in the dam. If the lake drops below their intakes, water can only leave through four smaller outlets lower down, and generation stops.</p><p>2026 was an extremely dry year on the Colorado River. These are this year\'s readings, not typical ones. The federal Western Area Power Administration sells the dam\'s power.</p>',
    sources: [S.e923, S.levels, S.ap, S.cob] });
  add({ id: 'hoover', kind: 'hydro', plant: 8902, name: 'Hoover Dam', short: 'Hoover Dam', tier: 1,
    lede: 'The dam that holds Lake Mead, on the Arizona-Nevada line. Its output shrinks as the lake falls, because lower water pushes on the turbines with less force.',
    stats: [['2.73 TWh', 'electricity generated in 2025 by both sides of the dam'], ['0.93 TWh', 'of that from the generators on the Arizona side'], ['1,040.71 ft', 'Lake Mead surface on 12 November 2026'], ['1,035 ft', 'level at which the 12 older turbines may have to stop']],
    body: '<p>With a full lake the dam can produce 2,080 MW. In 2025, with the lake at 1,055 feet, it could produce 1,304 MW. If the 12 older turbines stop at 1,035 feet, the five newer ones built for low water could produce about 382 MW.</p><p>2026 was an extremely dry year, and Lake Mead set a record low in August. These are this year\'s readings, not typical ones.</p>',
    sources: [S.e923, S.levels, S.cobHoover, S.ap] });
  add({ id: 'davis', kind: 'hydro', plant: 152, name: 'Davis Dam', short: 'Davis Dam', tier: 3,
    lede: 'The dam that holds Lake Mohave, downstream of Hoover. It generates as it releases water for farms and cities farther south.',
    stats: [['0.91 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'parker', kind: 'hydro', plant: 447, name: 'Parker Dam', short: 'Parker Dam', tier: 3,
    lede: 'The dam that holds Lake Havasu, where the Central Arizona Project and the Colorado River Aqueduct to Southern California both take their water.',
    stats: [['0.36 TWh', 'electricity generated in 2025']],
    body: '<p class="gcap">Federal files assign this plant to California, so its output is not in Arizona\'s total.</p>', sources: [S.e923] });
  add({ id: 'saltdams', kind: 'hydro', plant: 149, name: 'Salt River dams', short: 'Salt River dams', tier: 2,
    lede: 'Four dams east of Phoenix: Roosevelt, Horse Mesa, Mormon Flat and Stewart Mountain. Salt River Project began here, as a water and hydropower project.',
    stats: [['0.25 TWh', 'electricity generated by the four dams in 2025, 0.2% of Arizona\'s total'], ['2 of 4', 'dams that can also pump water back uphill to store energy: Horse Mesa and Mormon Flat']],
    body: '<p>Pumped storage works like a battery. Cheap power pumps water up to the higher lake. When power is needed, the water runs back down through the turbines.</p><p class="gcap">The table below is for Roosevelt Dam only.</p>',
    sources: [S.e923, S.inv] });

  // ----------------------------------------------------------------- solar and batteries
  add({ id: 'sonoran', kind: 'solar', plant: 66627, name: 'Sonoran Solar Energy Center', short: 'Sonoran Solar', tier: 2,
    lede: 'The solar farm that generated the most electricity in Arizona in 2025. A battery on site stores midday output for the evening.',
    stats: [['1.08 TWh', 'electricity generated in 2025'], ['4 hours', 'time the battery can run at full power: 260 MW, 1,040 MWh']],
    body: '<p>Demand in Arizona peaks around 6 p.m. on summer days, as solar output is fading. Pairing a battery with a solar farm moves some midday power into those hours.</p>',
    sources: [S.e923, S.inv] });
  add({ id: 'solana', kind: 'solar', kindLabel: 'Solar thermal plant', plant: 56812, name: 'Solana Generating Station', short: 'Solana', tier: 2,
    lede: 'Arizona\'s only solar thermal plant. Curved mirrors heat a fluid that boils water for a steam turbine, and tanks of molten salt hold heat for use after sunset.',
    stats: [['0.85 TWh', 'electricity generated in 2025'], ['2,300 AF', 'cooling water consumed in 2025. Solar panels use almost none']],
    sources: [S.e923, S.e923w, S.inv] });
  add({ id: 'aguacaliente', kind: 'solar', plant: 57373, name: 'Agua Caliente Solar Project', short: 'Agua Caliente', tier: 3,
    lede: 'One of Arizona\'s first very large solar farms, finished in 2014. It is wired into California\'s grid, not an Arizona utility\'s.',
    stats: [['0.55 TWh', 'electricity generated in 2025'], ['4.1 TWh', 'generated in 2025 by all Arizona plants that are run as part of California\'s grid']],
    sources: [S.e923] });
  add({ id: 'sunstreams', kind: 'solar', plant: 67291, name: 'Sun Streams solar complex', short: 'Sun Streams', tier: 3,
    lede: 'Four solar farms built side by side near Palo Verde between 2020 and 2025. The two newest have large batteries.',
    stats: [['825 MW', 'solar capacity of the four farms together'], ['2,060 MWh', 'energy the two batteries hold when full'], ['0.65 TWh', 'electricity generated in 2025 by Sun Streams 4, the newest']],
    body: '<p class="gcap">The table below is for Sun Streams 4 only.</p>', sources: [S.e923, S.inv] });
  add({ id: 'atlas', kind: 'solar', plant: 68466, name: 'Centennial Flats and Atlas solar', short: 'Centennial Flats', tier: 2,
    lede: 'A cluster of new solar farms and batteries in La Paz County, beside the Ten West Link line to California. Most of it opened in 2025 and 2026.',
    stats: [['800 MW', 'solar capacity running here by September 2026'], ['717 MW', 'battery capacity running here by September 2026'], ['382 MW', 'more battery capacity under construction']],
    body: '<p class="gcap">The table below is for Centennial Flats only.</p>', sources: [S.inv] });
  add({ id: 'elevenmile', kind: 'solar', plant: 66263, name: 'Eleven Mile Solar Center', short: 'Eleven Mile', tier: 3,
    lede: 'A solar farm with a battery of equal power, near Coolidge in Pinal County.',
    stats: [['0.79 TWh', 'electricity generated in 2025'], ['4 hours', 'time the battery can run at full power: 300 MW, 1,200 MWh']],
    sources: [S.e923, S.inv] });
  add({ id: 'kayentasolar', kind: 'solar', plant: 61268, name: 'Kayenta Solar', short: 'Kayenta Solar', tier: 3,
    lede: 'The first large solar farm on the Navajo Nation, built for the Navajo Tribal Utility Authority.',
    stats: [['0.12 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'roadrunner', kind: 'battery', plant: 67905, name: 'Roadrunner Reserve', short: 'Roadrunner Reserve', tier: 3,
    lede: 'Tucson Electric Power\'s own battery plant, built in two phases in 2025 and 2026.',
    stats: [['400 MW', 'power of the two phases together'], ['1,600 MWh', 'energy the two phases hold when full: four hours at full power'], ['$350 million', 'the utility\'s stated investment']],
    body: '<p>Arizona had 6,888 MW of large batteries running in September 2026, holding 25,020 MWh. Another 6,558 MW was planned. In 2025 the state\'s batteries took in 0.5 TWh more than they gave back, because some energy is lost in charging and discharging.</p>',
    sources: [S.inv, S.tepRates, S.e923] });

  // ----------------------------------------------------------------- wind
  add({ id: 'westcamp', kind: 'wind', plant: 69451, name: 'West Camp Wind Farm', short: 'West Camp Wind', tier: 2,
    lede: 'The largest wind farm in Arizona. It opened in 2026 in Navajo County.',
    stats: [['1,734 MW', 'all wind capacity in Arizona in September 2026, this farm included'], ['3.15 TWh', 'electricity from all Arizona wind farms in 2025, before this one opened']],
    sources: [S.inv, S.e923] });
  add({ id: 'mohavewind', kind: 'wind', plant: 63114, name: 'Mohave County Wind Farm', short: 'Mohave County Wind', tier: 2,
    lede: 'A wind farm in the hills south of Hoover Dam.',
    stats: [['1.00 TWh', 'electricity generated in 2025, the most of any Arizona wind farm']], sources: [S.e923] });
  add({ id: 'chevelon', kind: 'wind', plant: 66001, name: 'Chevelon Butte Wind Farm', short: 'Chevelon Butte', tier: 3,
    lede: 'A wind farm south of Winslow, built in two phases in 2023 and 2024.',
    stats: [['1.15 TWh', 'electricity generated by the two phases in 2025'], ['454 MW', 'capacity of the two phases together']],
     sources: [S.e923, S.inv] });
  add({ id: 'babbitt', kind: 'wind', plant: 66110, name: 'Babbitt Ranch Energy Center', short: 'Babbitt Ranch', tier: 3,
    lede: 'A wind farm on ranch land north of Flagstaff. It opened in 2024.',
    stats: [['0.55 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'drylake', kind: 'wind', plant: 57098, name: 'Dry Lake Wind', short: 'Dry Lake Wind', tier: 3,
    lede: 'A small wind farm near Snowflake that opened in 2009. No older wind farm appears in the federal inventory for Arizona.',
    stats: [['0.11 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  // ----------------------------------------------------------------- fuel supply
  add({ id: 'gasnorth', kind: 'fuel', lon: -109.2, lat: 35.62, name: 'Where the gas comes in: the northern lines', short: 'Gas enters (north)', tier: 2,
    lede: 'Two pipeline systems cross from New Mexico here, El Paso Natural Gas and Transwestern, and run west across northern Arizona. Branches turn south to the power plants around Phoenix.',
    stats: [['400 Bcf', 'natural gas burned by Arizona power plants in 2025. Bcf means billion cubic feet'], ['100%', 'share of the existing pipelines\' capacity already under contract, according to four Arizona utilities in 2025'], ['0', 'underground gas storage sites in Arizona in federal data through 2024']],
    body: '<p>Arizona wells produced 0.14 billion cubic feet of gas in 2024, a tiny fraction of what its power plants burn. With nowhere in the state to store gas, the plants depend on what the pipes deliver each day.</p><p>Energy Transfer, which owns Transwestern, proposes a new line from the Permian Basin of west Texas to Arizona. In August 2025 it was described to state regulators as carrying 1.5 billion cubic feet a day, in service in late 2029. Federal regulators have not yet approved it. Several planned gas plants and coal-to-gas conversions depend on it.</p>',
    sources: [S.e923, S.accGas, S.gasStor, S.gasProd, S.pipes] });
  add({ id: 'gassouth', kind: 'fuel', lon: -109.2, lat: 32.45, name: 'Where the gas comes in: the southern lines', short: 'Gas enters (south)', tier: 2,
    lede: 'El Paso Natural Gas lines cross from New Mexico here and run west to Tucson, Phoenix and Yuma.',
    stats: [['125.5 Bcf', 'gas that Arizona power plants listed as bought from El Paso Natural Gas or its owner Kinder Morgan in 2025'], ['82.7 Bcf', 'gas listed as bought from Transwestern in 2025']],
    body: '<p>Plants reported 394 billion cubic feet of gas deliveries in 2025. Many list the pipeline company as the seller, so these figures show which pipes carried the gas more than who produced it. Another 98 billion cubic feet was listed only as spot purchases.</p>',
    sources: [S.e923f, S.pipes] });
  add({ id: 'eloystorage', kind: 'fuel', lon: -111.555, lat: 32.68, name: 'Proposed gas storage near Eloy', short: 'Gas storage (proposed)', tier: 3,
    lede: 'Kinder Morgan proposes to store natural gas in four caverns hollowed out of underground salt south of Eloy. Federal data through 2024 shows no underground gas storage in Arizona.',
    stats: [['4 Bcf', 'gas the four caverns would hold for use'], ['About 4 days', 'how long that would last at the average rate Arizona power plants burned gas in 2025']],
    body: '<p>In August 2025 the company told state regulators it was updating the cost and schedule. Six utilities said they supported studying the project if it proves cost-effective.</p><p class="gcap">The marker is approximate. "About 4 days" is our arithmetic: 400 billion cubic feet a year is 1.1 billion a day.</p>',
    sources: [S.accGas, S.gasStor, S.e923] });
  add({ id: 'coalsupply', kind: 'fuel', kindLabel: 'Coal supply', lon: -109.0, lat: 34.95, name: 'Coal arrives by rail from three states', short: 'Coal by rail', tier: 3,
    lede: 'Arizona has no working coal mine. The coal burned at Springerville and Coronado comes by train from mines in New Mexico, Wyoming and Montana, all off this map.',
    stats: [['5.7M tons', 'coal burned by Arizona power plants in 2025'], ['1.4M tons', 'delivered in 2025 from the Lee Ranch mine in New Mexico, all to Springerville'], ['3.2M tons', 'delivered in 2025 from two Wyoming mines, Black Thunder and North Antelope Rochelle'], ['0.5M tons', 'delivered in 2025 from the Spring Creek mine in Montana, all to Coronado']],
    body: '<p>The Four Corners plant in New Mexico, which Arizona Public Service runs and mostly owns, is the exception. Its coal (4.5 million tons in 2025) is trucked from the Navajo Mine next door, owned by the Navajo Transitional Energy Company.</p><p class="gcap">The marker stands for mines that are off the map to the east and north.</p>',
    sources: [S.e923f, S.e923, S.tenk] });
  add({ id: 'kayentamine', kind: 'coalmine', lon: -110.412, lat: 36.570, name: 'Kayenta Mine and its electric railroad', short: 'Kayenta Mine (closed)', tier: 2,
    lede: 'Peabody\'s Kayenta Mine, on Navajo and Hopi land, supplied one customer: the Navajo Generating Station. A dedicated electric railroad carried the coal 78 miles to the plant.',
    stats: [['2019', 'year the mine closed, a few months before the plant'], ['78 miles', 'length of the electric railroad']],
    body: '<p>The mine closed because it had no other customer. The neighboring Black Mesa Mine had closed in 2005 for the same reason, when the Mohave plant in Nevada shut. Peabody is restoring the mined land.</p>',
    sources: [S.pbs, S.clui] });
  add({ id: 'pinyon', kind: 'umine', lon: -112.096, lat: 35.883, name: 'Pinyon Plain Mine', short: 'Pinyon Plain Mine', tier: 2,
    lede: 'A producing uranium mine south of the Grand Canyon, inside a national monument created in 2023. Its ore is trucked across the Navajo Nation to a mill in Utah.',
    stats: [['14 acres', 'surface area of the mine site'], ['93%', 'share of the uranium bought by US reactor owners in 2025 that came from other countries'], ['917,000+ acres', 'size of the national monument, which bans new mining claims']],
    body: '<p>The monument, Baaj Nwaavjo I\'tah Kukveni, made permanent a 20-year ban on new claims that began in 2012. Mines with existing rights, such as this one, may continue.</p><p>The Navajo Nation objected when ore trucks began crossing its land. In January 2025 it signed an agreement with the owner, Energy Fuels. It sets routes and hours, requires covered loads and Navajo licenses and inspections, and commits the company to haul away up to 10,000 tons of waste from old uranium mines on the Nation.</p><p>Nothing public says where the uranium in Palo Verde\'s fuel is mined. In 2025 US reactor owners bought 32% of their uranium from Canada, 28% from Kazakhstan, 15% from Australia and 7% from US mines.</p>',
    sources: [S.ef, S.ans, S.rollcall, S.uma] });
  add({ id: 'uraniumlegacy', kind: 'info', lon: -111.412, lat: 35.874, name: 'Old uranium mines on the Navajo Nation', short: 'Old uranium mines', tier: 3,
    lede: 'From 1944 to 1986 nearly 30 million tons of uranium ore were mined on Navajo lands. The EPA counts 523 abandoned mines left behind.',
    stats: [['523', 'abandoned uranium mines on the Navajo Nation, by the EPA\'s count'], ['230', 'of those mines with money available to begin assessment and cleanup'], ['$1.7 billion', 'value of the settlements and agreements that fund that work']],
    body: '<p class="gcap">The mines are spread across the Nation. The marker is at Cameron, on its western side.</p>',
    sources: [S.epaU, S.epaAum] });

  // ----------------------------------------------------------------- grid hubs
  add({ id: 'pvhub', kind: 'hub', lon: -112.853, lat: 33.347, name: 'The Palo Verde hub', short: 'Palo Verde hub', tier: 3,
    lede: 'The switchyards beside Palo Verde join the nuclear plant, a ring of gas plants and solar farms, and 500-kilovolt lines to Phoenix, Yuma and California.',
    stats: [['19.7 TWh', 'net electricity Arizona sent to other states in 2024, 17% of what it generated'], ['4.1 TWh', 'generated in 2025 by Arizona plants that are run as part of California\'s grid, most of them solar farms near here'], ['October 2027', 'expected start of the new regional power market that Arizona\'s large utilities have chosen']],
    body: '<p>Arizona\'s utilities already trade power minute by minute in a market run by California\'s grid operator. Arizona Public Service joined in 2016, Salt River Project in 2020 and Tucson Electric Power in 2022.</p><p>For trading a day ahead, the three utilities and UniSource announced in November 2024 that they will join a different market, run by the Southwest Power Pool of Arkansas. They said it would save their customers nearly $100 million.</p>',
    sources: [S.prof, S.e923, S.weim, S.tepMkt, S.tenk] });
  add({ id: 'delaney', kind: 'hub', lon: -113.035, lat: 33.481, name: 'Delaney substation and the Ten West Link', short: 'Ten West Link', tier: 3,
    lede: 'The newest line to California starts here. The Ten West Link, also called Delaney-Colorado River, was switched on in June 2024.',
    stats: [['125 miles', 'length, of which 103.5 miles are in Arizona'], ['3,200 MW', 'what the wires can carry'], ['7 June 2024', 'date it was energized']],
    body: '<p>The line runs beside Interstate 10 to a substation near Blythe, California. New solar farms and batteries have been built along it, including a 300 MW battery next to this substation that opened in 2025.</p>',
    sources: [S.tenwest, S.inv] });
  add({ id: 'westwing', kind: 'hub', lon: -112.323, lat: 33.712, name: 'Westwing substation', short: 'Westwing', tier: 3,
    lede: 'A major substation on the north-west edge of Phoenix. Two 500-kilovolt lines from Palo Verde end here, and lines from northern Arizona arrive from the other direction.',
    stats: [['200 MW', 'power of the battery plant built beside the substation in 2024 and 2025'], ['808 MWh', 'energy that battery holds when full']],
    body: '<p>Utilities are putting batteries next to city substations like this one, where the power is needed on summer evenings.</p>',
    sources: [S.inv] });
  add({ id: 'pinalcentral', kind: 'hub', lon: -111.55, lat: 32.868, name: 'Pinal Central: where SunZia ends', short: 'SunZia terminus', tier: 2,
    lede: 'A 550-mile direct-current line from central New Mexico ends here. It carries power from the largest wind farm in the United States.',
    stats: [['3,650 MW', 'capacity of the New Mexico wind farm, from 916 turbines'], ['3,021 MW', 'what the line can carry'], ['2,131 MW', 'of the line\'s capacity bound for Southern California by way of the Palo Verde substation'], ['June 2026', 'month the wind farm was due to start commercial operation']],
    body: '<p>The wind farm is about twice the size of all the wind farms inside Arizona put together (1,734 MW).</p>',
    sources: [S.sunzia, S.inv] });

  // ----------------------------------------------------------------- users
  add({ id: 'phoenix', kind: 'city', lon: -112.074, lat: 33.448, name: 'Phoenix and the summer peak', short: 'Phoenix', tier: 1,
    lede: 'Arizona\'s grid is built for a few hot evenings. Two utilities serve the Phoenix area, and both set all-time records for demand in the summer of 2026.',
    stats: [['9,164 MW', 'Arizona Public Service record, Sunday 2 August 2026, 6 to 7 p.m.'], ['9,072 MW', 'Salt River Project record, Friday 24 July 2026, 5 to 6 p.m.'], ['500+ MW', 'how far each record was above the utility\'s 2025 record'], ['About 10%', 'spare capacity each utility had at its peak. Their targets are 15% and 16%']],
    body: '<p>Arizona Public Service says one megawatt serves about 160 homes at the peak. Homes bought 43% of the electricity sold in Arizona in 2025.</p><p>About one residential customer in ten has solar panels: utilities reported 333,870 of them in 2025. Newer solar customers are paid a set rate for power they send back to the grid. For Arizona Public Service customers that rate fell to 5.55 cents per kilowatt-hour for systems applied for after 1 September 2026. It was 12.9 cents in 2018.</p>',
    sources: [S.apsPeak, S.kjzzPeak, S.acc25, S.kjzzDc, S.e861, S.pvtech] });
  add({ id: 'tucson', kind: 'city', lon: -110.975, lat: 32.223, name: 'Tucson', short: 'Tucson', tier: 1,
    lede: 'Tucson Electric Power serves the city. A third of what it sells goes to industry, and its two largest customers are mines.',
    stats: [['2,502 MW', 'record demand, set 7 August 2025'], ['8.9 TWh', 'electricity sold in 2025, to 459,000 customers'], ['About 11%', 'rise in average home bills recommended by a judge in the utility\'s rate case']],
    body: '<p>State regulators were expected to vote on the rate case in November 2026. The utility says it has invested about $1.7 billion in its system since 2021.</p><p>The utility had no data center customers in April 2026. It had one project under contract, forecast at 286 MW.</p>',
    sources: [S.acc25, S.e861, S.tepRates, S.accLoad] });
  add({ id: 'datacenters', kind: 'datacenter', lon: -112.259, lat: 33.450, name: 'Data centers', short: 'Data centers', tier: 2,
    lede: 'Data centers are a small but fast-rising share of demand in the Phoenix area. Utilities expect data centers and large factories to account for most of the growth over the next decade.',
    stats: [['About 7%', 'data centers\' share of Arizona Public Service\'s peak demand in 2026, up from about 5% in 2025'], ['441 MW', 'what data centers drew at Salt River Project\'s 2025 peak, 5.1% of the total'], ['19 GW', 'requests waiting in Arizona Public Service\'s queue with no commitment yet. A gigawatt (GW) is 1,000 MW'], ['12.0 GW', 'peak demand the same utility forecasts for 2035, up from 8.7 GW in 2025']],
    body: '<p>The marker is in Tolleson, where a large data center was under construction in September 2026. Pinal County supervisors rejected a proposed 3 GW data center near Eloy.</p><p>Both big utilities now make very large customers pay up front. Salt River Project bills new customers of 20 MW or more for at least 80% of the demand they forecast. Arizona Public Service has asked regulators for a rate increase of more than 45% for its largest users; a decision is due by 31 December 2026. On 2 November 2026 the Salt River Project board discussed pausing new data center connections and did not vote.</p>',
    sources: [S.kjzzDc, S.srpCeo, S.apsDc, S.kjzzSrp, S.accRate] });
  add({ id: 'tsmc', kind: 'fab', lon: -112.161, lat: 33.776, name: 'TSMC Arizona', short: 'TSMC', tier: 2,
    lede: 'The chip maker TSMC is building a campus of factories in north Phoenix, in Arizona Public Service territory.',
    stats: [['12', 'facilities the company is committed to building here, according to the utility'], ['$265 billion', 'the company\'s total commitment so far'], ['About 1 GW', 'power demand the utility expects for every $100 billion invested']],
    body: '<p>The utility\'s 2026 plan forecasts that its electricity sales will rise from about 34,200 GWh in 2025 to about 80,600 GWh in 2041. A gigawatt-hour (GWh) is 1,000 megawatt-hours. It expects about three-quarters of the growth to come from data centers and large manufacturers.</p>',
    sources: [S.kjzzTsmc, S.apsIrp, S.kjzzIrp] });
  add({ id: 'morenci', kind: 'mine', kindLabel: 'Copper mine', lon: -109.35, lat: 33.08, name: 'Morenci Mine', short: 'Morenci Mine', tier: 2,
    lede: 'The Morenci copper mine has its own electric utility. It sold more electricity in 2025 than any Arizona utility except the three largest.',
    stats: [['2.9 TWh', 'electricity sold by Morenci Water and Electric in 2025'], ['3.2%', 'share of all electricity sold in Arizona that year'], ['2,637', 'customers, most of them homes and shops in the mining town']],
    body: '<p>Crushing and grinding rock takes large electric motors that run day and night. Almost all of this utility\'s sales (2.9 of 2.94 TWh) were to industry.</p>',
    sources: [S.e861] });
  add({ id: 'cap', kind: 'user', kindLabel: 'Pumping plant', lon: -114.104, lat: 34.289, name: 'Central Arizona Project pumps', short: 'CAP pumps', tier: 2,
    lede: 'The Central Arizona Project lifts Colorado River water about 3,000 feet on its way to Phoenix and Tucson. That makes it one of the largest users of electricity in the state.',
    stats: [['14', 'pumping plants along the 336-mile canal. This is the first'], ['$60 to 80 million', 'yearly cost of the energy'], ['70 to 80%', 'share of its power bought on the wholesale market, by its October 2024 fact sheet']],
    body: '<p>Until 2019 most of the power came from one source, the Navajo Generating Station, which the federal government partly owned for this purpose. Since the plant closed, the project buys most of its power on the market, with smaller amounts from Hoover Dam (6%) and a solar farm (5%).</p><p>Pumping is scheduled by season and by hour to use the cheapest power available.</p>',
    sources: [S.capPower, S.epaNgs] });
  add({ id: 'navajohomes', kind: 'user', kindLabel: 'Homes without power', lon: -109.567, lat: 36.150, name: 'Navajo Nation homes without electricity', short: 'Homes without power', tier: 2,
    lede: 'About 9,400 homes on the Navajo Nation have no connection to the grid. Salt River Project says that is roughly 70% of all the households in the United States without power.',
    stats: [['9,377', 'homes without electricity, of about 55,000, in May 2026'], ['159', 'homes Salt River Project crews have connected since 2019'], ['114 miles', 'power line those crews built to do it']],
    body: '<p>Homes are far apart, so each connection can need a long stretch of new line. Each spring since 2019, utility crews from around the country have volunteered to build lines with the Navajo Tribal Utility Authority, in a program called Light Up Navajo. In 2026 more than 300 line workers took part.</p><p class="gcap">The homes are spread across the Nation. The marker is at Chinle.</p>',
    sources: [S.srpNavajo, S.ktar] });
  add({ id: 'ozone', kind: 'info', lon: -111.89, lat: 33.61, name: 'Phoenix ozone', short: 'Ozone', tier: 3,
    lede: 'The Phoenix area does not meet the federal limit for ozone, a lung irritant that forms in sunlight from engine and smokestack gases. Gas power plants are one of the sources.',
    stats: [['70 ppb', 'the federal limit, in parts per billion of air'], ['3 Aug 2024', 'deadline the area missed'], ['22 Mar 2026', 'date the EPA decided not to move the area to a stricter category']],
    body: '<p>The EPA found the area would have met the limit but for pollution arriving from outside the United States. The area stays in the "moderate" category. The next category, "serious", would have made permits for new plants and factories harder to get.</p><p>Arizona Public Service says most of its gas-fired units are inside this area or the one around Yuma.</p>',
    sources: [S.epaOzone, S.tenk] });

  BROWSE.push(
    ['Nuclear and coal', ['paloverde', 'springerville', 'coronado', 'apache', 'navajo', 'cholla', 'mohave']],
    ['Natural gas', ['gilariver', 'mesquite', 'redhawk', 'santan', 'westphoenix', 'griffith', 'southpoint', 'sundt', 'coolidge', 'saddleback', 'desertsun']],
    ['Dams', ['glencanyon', 'hoover', 'davis', 'parker', 'saltdams']],
    ['Sun, wind and batteries', ['sonoran', 'solana', 'aguacaliente', 'sunstreams', 'atlas', 'elevenmile', 'kayentasolar', 'roadrunner', 'westcamp', 'mohavewind', 'chevelon', 'babbitt', 'drylake']],
    ['Where the fuel comes from', ['gasnorth', 'gassouth', 'eloystorage', 'coalsupply', 'kayentamine', 'pinyon', 'uraniumlegacy']],
    ['The grid', ['pvhub', 'delaney', 'westwing', 'pinalcentral']],
    ['Who uses it', ['phoenix', 'tucson', 'datacenters', 'tsmc', 'morenci', 'cap', 'navajohomes', 'ozone']],
  );
  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025)
  const HIFLD = ['Service territories: HIFLD / Oak Ridge National Laboratory', 'https://hifld-geoplatform.hub.arcgis.com/'];
  Object.assign(AREAS, {
    'Arizona Public Service': { lede: 'The state\'s largest investor-owned utility. It serves parts of 11 of Arizona\'s 15 counties, including much of Phoenix, and runs the Palo Verde nuclear plant.',
      stats: [['34.2 TWh', 'electricity sold in 2025'], ['1.43 million', 'customers in 2025'], ['9,164 MW', 'record demand, 2 August 2026'], ['About 58%', 'of its 2025 energy that it counts as clean: nuclear, renewables and efficiency']],
      body: '<p>The Arizona Corporation Commission, five commissioners elected statewide, sets its rates. A rate case heard from May to July 2026 must be decided by 31 December 2026.</p><p>In August 2025 the company changed its 2050 goal from zero-carbon to "carbon-neutral", meaning remaining emissions would be offset. Its November 2026 plan adds gas plants and could keep the Four Corners coal plant in New Mexico running until 2038 instead of 2031. It forecasts that its sales will more than double by 2041.</p>',
      sources: [S.e861, S.apsPeak, S.tenk, S.accRate, S.apsIrp, S.kjzz4c, HIFLD] },
    'Salt River Project': { lede: 'A public power district that serves much of the Phoenix area. Its own elected board sets its rates, not the state commission.',
      stats: [['34.4 TWh', 'electricity sold in 2025, the most of any Arizona utility'], ['1.19 million', 'customers in 2025'], ['9,072 MW', 'record demand, 24 July 2026'], ['82%', 'cut in carbon dioxide per megawatt-hour it aims for by 2035, measured from 2005']],
      body: '<p>It began as a water and hydropower project on the Salt River and still delivers water as well as power. It aims for net-zero carbon emissions by 2050.</p><p>A board member said in November 2026 that the utility plans to grow by 4,700 MW by 2035, about 3,000 MW of it for data centers. The utility\'s chief lawyer called the figures plausible.</p>',
      sources: [S.e861, S.kjzzPeak, S.srpGoals, S.kjzzSrp, HIFLD] },
    'Tucson Electric Power': { lede: 'The investor-owned utility for Tucson. It runs the Springerville coal plant in eastern Arizona and plans to convert two of its units to gas.',
      stats: [['8.9 TWh', 'electricity sold in 2025'], ['459,000', 'customers in 2025'], ['2,502 MW', 'record demand, 7 August 2025'], ['2050', 'year by which it aspires to net-zero carbon emissions']],
      body: '<p>The Arizona Corporation Commission sets its rates. A judge has recommended an increase of about 11% in average home bills, and a vote was expected in November 2026.</p>',
      sources: [S.e861, S.acc25, S.tepPlan, S.tepRates, HIFLD] },
    'UniSource Energy Services': { lede: 'A sister company of Tucson Electric Power. It serves Mohave County in the north-west and Santa Cruz County on the Mexican border.',
      stats: [['1.8 TWh', 'electricity sold in 2025'], ['107,000', 'customers in 2025'], ['200 MW', 'gas turbines it plans to add at its Black Mountain plant near Kingman in 2028']],
      sources: [S.e861, S.accGas, HIFLD] },
    'Navajo Tribal Utility Authority': { lede: 'The Navajo Nation\'s own utility. About 9,400 homes in its territory still have no connection.',
      stats: [['30,338', 'customers in Arizona in 2025'], ['0.43 TWh', 'electricity sold in Arizona in 2025'], ['9,377', 'homes on the Nation without electricity, of about 55,000, in May 2026']],
      sources: [S.e861, S.srpNavajo, HIFLD] },
    'Sulphur Springs Valley Electric Cooperative': { lede: 'A member-owned co-op in south-east Arizona. More than half of what it sells goes to customers other than homes.',
      stats: [['0.95 TWh', 'electricity sold in 2025'], ['54,786', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Trico Electric Cooperative': { lede: 'A member-owned co-op that serves the edges of Tucson.',
      stats: [['0.88 TWh', 'electricity sold in 2025'], ['56,123', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Mohave Electric Cooperative': { lede: 'A member-owned co-op along the Colorado River around Bullhead City.',
      stats: [['0.77 TWh', 'electricity sold in 2025'], ['46,326', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Navopache Electric Cooperative': { lede: 'A member-owned co-op in the White Mountains of eastern Arizona.',
      stats: [['0.46 TWh', 'electricity sold in 2025'], ['44,864', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'City of Mesa': { lede: 'The City of Mesa runs its own small electric utility.',
      stats: [['0.32 TWh', 'electricity sold in 2025'], ['18,291', 'customers in 2025']], sources: [S.e861, HIFLD] },
  });

  // ----------------------------------------------------------------- pipeline and line cards
  Object.assign(PIPECARDS, {
    'El Paso Natural Gas Co': { lede: 'The pipeline system that carries the most gas to Arizona power plants. Its lines cross from New Mexico in the north and the south of the state. Kinder Morgan owns it.',
      stats: [['Interstate', 'type of pipeline'], ['125.5 Bcf', 'gas Arizona power plants listed as bought from El Paso Natural Gas or Kinder Morgan in 2025. Bcf means billion cubic feet', 1]],
      body: '<p>Plants reported 394 billion cubic feet of gas deliveries in 2025. Many list the pipeline company as the seller, so the figure shows which pipes carried the gas more than who produced it.</p><p>Four Arizona utilities told state regulators in 2025 that the existing pipelines into Arizona are fully booked.</p>',
      sources: [S.e923f, S.accGas, S.pipes] },
    'Transwestern Gas Co': { lede: 'A pipeline across northern Arizona from New Mexico to the California line. Its owner, Energy Transfer, proposes a large new line to Arizona from west Texas.',
      stats: [['Interstate', 'type of pipeline'], ['82.7 Bcf', 'gas Arizona power plants listed as bought from Transwestern in 2025', 1], ['1.5 Bcf a day', 'what the proposed new line would carry, as described to state regulators in August 2025', 1]],
      body: '<p>The proposed line would start in the Permian Basin and was planned to be in service in late 2029. Federal regulators have not approved it. Arizona Public Service\'s proposed Desert Sun plant and the conversion of the Springerville coal units both depend on it.</p>',
      sources: [S.e923f, S.accGas, S.pipes] },
    'Southwest Gas Corp': { lede: 'Lines owned by Southwest Gas, a utility that sells gas to homes and businesses. It has signed up to ship gas on the proposed Transwestern expansion.',
      sources: [S.accGas, S.pipes] },
    'Kern River Gas Trans Co': { lede: 'An interstate pipeline that crosses the far corner of this map through Utah and Nevada. On the map it does not enter Arizona.', sources: [S.pipes] },
    'North Baja Pipeline Co': { lede: 'An interstate pipeline that runs south near the Colorado River toward the Mexican border.', sources: [S.pipes] },
    'Southern California Gas Co': { lede: 'Lines of the gas utility for Southern California. They meet the pipelines from Arizona at the Colorado River.', sources: [S.pipes] },
    'Questar Southern Trails Line': { lede: 'An interstate pipeline drawn across northern Arizona in federal map data. No Arizona power plant listed it as a gas seller in 2025.', sources: [S.pipes, S.e923f] },
  });
  LINECARDS.push(
    [/SunZia/i, { lede: 'A 550-mile direct-current line from central New Mexico to Pinal County. It carries power from the largest wind farm in the United States. Direct current loses less power over long distances.',
      stats: [['525 kV', 'voltage'], ['3,021 MW', 'what it can carry'], ['3,650 MW', 'capacity of the wind farm at its eastern end'], ['June 2026', 'month the wind farm was due to start commercial operation']],
      body: '<p>Of the line\'s capacity, 2,131 MW is to be delivered on to Southern California by way of the Palo Verde substation.</p>', sources: [S.sunzia, ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright']] }],
    [/Delaney ?- ?Colorado River/i, { title: 'Ten West Link (Delaney to Colorado River)', lede: 'The newest line between Arizona and California. It runs beside Interstate 10 from the Delaney substation near Tonopah to a substation near Blythe.',
      stats: [['500 kV', 'voltage'], ['125 miles', 'length, of which 103.5 miles are in Arizona'], ['3,200 MW', 'what the wires can carry'], ['7 June 2024', 'date it was energized']],
      body: '<p>Construction ran from October 2022 to February 2024. Solar farms and batteries have since been built along the route.</p>', sources: [S.tenwest, ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright']] }],
    [/^Colorado River - Palo Verde/i, { lede: 'An older 500-kilovolt line from the Palo Verde switchyards to California. The Ten West Link was built parallel to it, so that losing one line does not cut the link.', sources: [S.caiso, ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright']] }],
    [/Navajo/i, { lede: 'A 500-kilovolt line built to carry power from the Navajo Generating Station, which closed in 2019. The line still links northern Arizona to the rest of the grid.', sources: [S.pbs, ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright']] }],
    [/Four Corners/i, { lede: 'A 500-kilovolt line from the Four Corners coal plant in New Mexico, which is off this map to the east. Arizona Public Service runs that plant and owns 63% of its two units.', sources: [S.tenk, ['OpenStreetMap contributors', 'https://www.openstreetmap.org/copyright']] }],
    [/Westwing - Palo Verde/i, { lede: 'One of two 500-kilovolt lines that carry power from the Palo Verde switchyards to the Westwing substation on the north-west edge of Phoenix.' }],
    [/HVDC Intermountain/i, { lede: 'A direct-current line that crosses the Nevada corner of this map on its way between Utah and Southern California. It does not touch Arizona.' }],
  );

  // ----------------------------------------------------------------- tour
  const LAY = ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'];
  TOUR.push(
    { title: 'Where the power comes from', text: 'Arizona generated 116 terawatt-hours of electricity in 2025. Natural gas made 45% and one nuclear plant made 27%. Solar farms made more than coal. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: LAY },
    { title: 'One plant, a quarter of the power', text: 'Palo Verde\'s three reactors run around the clock. There is no river here: the plant is cooled with treated wastewater piped from Phoenix-area cities. Utilities in California, New Mexico and Texas own shares of it.', box: [-113.5, 33.0, -112.2, 33.8], zoom: 1.6, select: 'paloverde', layers: ['plants', 'lines', 'rivers'] },
    { title: 'Gas, and the pipes that bring it', text: 'Gas plants make the most electricity in Arizona. The brown lines are pipelines. All of the gas comes from New Mexico and Texas, and Arizona has nowhere to store it. Gila River, shown here, is the largest gas plant.', box: [-113.6, 32.2, -110.6, 33.9], zoom: 1.0, select: 'gilariver', layers: ['plants', 'pipes', 'rivers'] },
    { title: 'Coal, hauled in by train', text: 'Coal made 39% of Arizona\'s electricity in 2010 and 8% in 2025. Springerville and Coronado get their coal by rail from New Mexico, Wyoming and Montana. Both are approved to switch to natural gas around 2030. Cholla, to the north-west, closed in 2025.', box: [-110.8, 33.9, -108.9, 35.3], zoom: 1.3, select: 'springerville', layers: ['plants', 'closed', 'lines', 'pipes'] },
    { title: 'Sun by day, batteries by night', text: 'This is the Night view. Solar farms are faded because they make nothing after dark. In September 2026 Arizona had 6,888 megawatts of large batteries, more than the capacity of its nuclear plant. Full, they can run at that rate for about three and a half hours. They charge at midday and discharge in the evening.', box: [-114.0, 32.6, -112.0, 33.9], zoom: 1.2, season: 'winter', select: 'sonoran', layers: ['plants', 'lines'] },
    { title: 'Dams that depend on the lake', text: 'Glen Canyon Dam made 2.75 terawatt-hours in 2025. In August 2026 Lake Powell fell to a record low, about 30 feet above the level where the turbines stop. Just to the south-east is the site of the Navajo coal plant, closed in 2019.', box: [-112.15, 36.55, -110.85, 37.25], zoom: 2.2, select: 'glencanyon', layers: ['plants', 'closed', 'rivers', 'lines'] },
    { title: 'The grid, and the road to California', text: 'Yellow lines carry alternating current at 500 kilovolts, the backbone of the grid. Many of them meet at the switchyards beside Palo Verde. From there lines run west to California, and Arizona sends about a sixth of what it generates to other states.', box: [-115.0, 32.9, -112.0, 34.1], zoom: 1.1, select: 'pvhub', layers: ['plants', 'lines'] },
    { title: 'Who uses it', text: 'Demand peaks on summer evenings. On 2 August 2026 customers of Arizona Public Service drew a record 9,164 megawatts. Data centers were about 7% of that utility\'s peak, and it expects them and large factories to supply most of its growth.', box: [-112.75, 33.1, -111.4, 33.95], zoom: 1.6, select: 'phoenix', layers: ['cities', 'plants', 'lines'] },
    { title: 'What comes out of the stacks', text: 'Each gray circle is a plant\'s carbon dioxide for 2023. Arizona\'s power plants released 33.4 million metric tons in 2024, down 40% from 2010. Emissions from coal fell by three-quarters over those years. Gas plants now release more than coal plants do.', box: [-115.1, 31.25, -108.9, 37.2], select: 'springerville', layers: ['plants', 'emit', 'closed'] },
    { title: 'What happens next', text: 'Dotted markers are planned plants: mostly solar and batteries, plus new gas plants that depend on a proposed pipeline from Texas. The largest utility expects its sales to more than double by 2041. Now explore: click any plant, line, pipeline or patch of open desert.', box: [-115.1, 31.25, -108.9, 37.2], select: 'desertsun', layers: ['plants', 'planned', 'lines', 'pipes', 'cities'] },
  );

  // ------------------------------------------------------------------ data handed to the map engine
  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    kinds: { mine: ['cities', 'mine', 'Copper mine'] },
    exploreHint: 'Drag to pan, scroll or pinch to zoom, and click anything: a power plant, a transmission line, a pipeline, or open desert.' });
})();
