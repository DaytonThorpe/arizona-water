/* Colorado Power: content for the electricity map.
   The map engine (west/js/app.js) and the shared machinery (power/content/kit.js) do the drawing. This file supplies Colorado's words.
   Plant numbers (capacity, output, emissions) are not typed here: they come from the baked dataset in power/data/co.js
   (EIA-860M inventory and EPA eGRID). The fact sheet and verification log are in research/colorado_power.md. */
(() => {
  const UTIL = {   // service-territory names as published -> [display name, short label, kind]
    'PUBLIC SERVICE CO OF COLORADO': ['Xcel Energy (Public Service Company of Colorado)', 'Xcel Energy', 'iou'],
    'BLACK HILLS COLORADO ELECTRIC, LLC': ['Black Hills Energy', 'Black Hills', 'iou'],
    'CITY OF COLORADO SPRINGS - (CO)': ['Colorado Springs Utilities', 'Colorado Springs', 'public'],
    'CITY OF FORT COLLINS - (CO)': ['Fort Collins Utilities', 'Fort Collins', 'public'], 'CITY OF LOVELAND - (CO)': ['Loveland Water and Power', 'Loveland', 'public'],
    'CITY OF LONGMONT': ['Longmont Power and Communications', 'Longmont', 'public'], 'CITY OF FOUNTAIN': ['City of Fountain', 'Fountain', 'public'],
    'CITY OF DELTA - (CO)': ['City of Delta', 'Delta', 'public'], 'CITY OF TRINIDAD - (CO)': ['City of Trinidad', 'Trinidad', 'public'],
    'CORE ELECTRIC COOPERATIVE': ['CORE Electric Cooperative', 'CORE', 'coop'], 'UNITED POWER, INC': ['United Power', 'United Power', 'coop'],
    'POUDRE VALLEY REA, INC': ['Poudre Valley Rural Electric Association', 'Poudre Valley', 'coop'], 'HOLY CROSS ELECTRIC ASSN, INC': ['Holy Cross Energy', 'Holy Cross', 'coop'],
    'MOUNTAIN VIEW ELEC ASSN, INC': ['Mountain View Electric Association', 'Mountain View', 'coop'], 'LA PLATA ELECTRIC ASSN, INC': ['La Plata Electric Association', 'La Plata', 'coop'],
    'DELTA MONTROSE ELECTRIC ASSN': ['Delta-Montrose Electric Association', 'Delta-Montrose', 'coop'], 'YAMPA VALLEY ELECTRIC ASSN INC': ['Yampa Valley Electric Association', 'Yampa Valley', 'coop'],
    'WHITE RIVER ELECTRIC ASSN, INC': ['White River Electric Association', 'White River', 'coop'], 'MOON LAKE ELECTRIC ASSN INC': ['Moon Lake Electric Association', 'Moon Lake', 'coop'],
    'EMPIRE ELECTRIC ASSN, INC': ['Empire Electric Association', 'Empire', 'coop'], 'SAN MIGUEL POWER ASSN, INC': ['San Miguel Power Association', 'San Miguel', 'coop'],
    'GUNNISON COUNTY ELEC ASSN.': ['Gunnison County Electric Association', 'Gunnison County', 'coop'], 'GRAND VALLEY POWER': ['Grand Valley Power', 'Grand Valley', 'coop'],
    'MOUNTAIN PARKS ELECTRIC, INC': ['Mountain Parks Electric', 'Mountain Parks', 'coop'], 'SAN LUIS VALLEY R E C, INC': ['San Luis Valley Rural Electric Cooperative', 'San Luis Valley', 'coop'],
    'SANGRE DE CRISTO ELEC ASSN INC': ['Sangre de Cristo Electric Association', 'Sangre de Cristo', 'coop'], 'SAN ISABEL ELECTRIC ASSN, INC': ['San Isabel Electric Association', 'San Isabel', 'coop'],
    'SOUTHEAST COLORADO POWER ASSN': ['Southeast Colorado Power Association', 'Southeast Colorado', 'coop'], 'K C ELECTRIC ASSOCIATION': ['K.C. Electric Association', 'K.C. Electric', 'coop'],
    'Y-W ELECTRIC ASSN INC': ['Y-W Electric Association', 'Y-W Electric', 'coop'], 'HIGHLINE ELECTRIC ASSN': ['Highline Electric Association', 'Highline', 'coop'],
    'MORGAN COUNTY RURAL ELEC ASSN': ['Morgan County Rural Electric Association', 'Morgan County', 'coop'], 'HIGH WEST ENERGY, INC': ['High West Energy', 'High West', 'coop'],
  };
  // Left out: the Western Area Power Administration and Deseret (wholesale sellers that the source draws as huge areas), the Town of Oak Creek
  // (drawn far larger than the town) and co-ops whose territory is almost all in a neighboring state.
  const K = window.POWERKIT.begin({ id: 'co', st: 'CO', name: 'Colorado', util: UTIL, bigUtils: ['Xcel Energy', 'Colorado Springs', 'Black Hills', 'United Power', 'CORE'],
    lineLede: { '345': 'A long-distance line. Lines at 345 kilovolts are the highest voltage in Colorado. They carry power from the large plants and the wind farms of the eastern plains to the cities along the Front Range.',
      '230': 'A regional line. Lines at 230 kilovolts move power around the Front Range cities and across the mountains.' },
    pipeLede: 'A pipeline that carries natural gas at high pressure. Colorado produces far more gas than it burns, so lines like this one carry gas both to its power plants and out of the state.' });
  const { P, EY, INV, SRC_INV, SRC_EGRID } = K;
  // The newest 345 kV lines on the plains are drawn in OpenStreetMap without a name. They are segments of Colorado's Power Pathway.
  P.lines.forEach(l => { if (l.k === '345' && l.osm && !l.n && /Public Service/.test(l.o || '')) l.n = 'Colorado\'s Power Pathway'; });

  // ------------------------------------------------------------------ sources
  const S = {
    e923: ['EIA power plant data (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e923f: ['EIA fuel deliveries to power plants (Form EIA-923), 2025', 'https://www.eia.gov/electricity/data/eia923/'],
    e861: ['EIA utility sales data (Form EIA-861), 2025', 'https://www.eia.gov/electricity/data/eia861/'],
    prof: ['EIA Colorado Electricity Profile, 2024', 'https://www.eia.gov/electricity/state/colorado/'],
    hist: ['EIA state generation and emissions history', 'https://www.eia.gov/electricity/data/state/'],
    roof: ['EIA small-scale solar estimates', 'https://www.eia.gov/electricity/data/eia861m/'],
    inv: SRC_INV,
    eiaState: ['EIA Colorado energy profile, July 2025', 'https://www.eia.gov/state/analysis.php?sid=CO'],
    gasProd: ['EIA: Colorado marketed gas production', 'https://www.eia.gov/dnav/ng/hist/n9050co2a.htm'],
    gasBurn: ['EIA: gas delivered to Colorado power plants', 'https://www.eia.gov/dnav/ng/hist/n3045co2a.htm'],
    gasStor: ['EIA: Colorado underground gas storage capacity', 'https://www.eia.gov/dnav/ng/hist/na1391_sco_8a.htm'],
    coalQ: ['EIA Quarterly Coal Report', 'https://www.eia.gov/coal/production/quarterly/'],
    drms: ['Colorado Division of Reclamation, Mining and Safety: coal production, December 2024', 'https://spl.cde.state.co.us/artemis/nrserials/nr1210internet/nr1210202412internet.pdf'],
    sunCoal: ['Colorado Sun, 5 May 2025', 'https://coloradosun.com/2025/05/05/coal-mining-colorado-trump-revival-climate-change/'],
    sunCraig: ['Colorado Sun, 25 Apr 2026', 'https://coloradosun.com/2026/04/25/craig-tri-state-coal-power-station-trump-emergency-orders/'],
    tsCraig: ['Tri-State, 23 Jan 2026', 'https://tristate.coop/tri-state-makes-craig-generating-station-unit-1-available-operate-compliance-doe-emergency-order'],
    doeCraig: ['US Department of Energy order 202-26-49, 25 Sep 2026', 'https://www.energy.gov/node/4860393'],
    doeCraigJun: ['US Department of Energy order 202-26-31, 26 Jun 2026', 'https://www.energy.gov/ceser/federal-power-act-section-202c-craig-order-no-202-26-31'],
    steam: ['Steamboat Pilot, 30 Mar 2026', 'https://www.steamboatpilot.com/news/craig-coal-plant-u-s-energy-department-emergency-order-extended/'],
    steamHayden: ['Steamboat Pilot, 29 Apr 2025', 'https://www.steamboatpilot.com/news/community-prepares-to-weigh-in-on-xcel-settlement-as-hayden-station-closure-nears/'],
    tsColowyo: ['Tri-State: Colowyo Mine', 'https://tristate.coop/colowyo-mine-conclude-coal-production-2025-transitioning-full-reclamation'],
    peabody: ['Peabody: Twentymile Mine', 'https://peabodyenergy.com/Operations/U-S-Mining/Western-Mining/Twentymile-Mine'],
    kuncNov: ['KUNC, 7 Nov 2026', 'https://www.kunc.org/news/2026-11-07/how-long-should-xcel-keep-this-coal-plant-running'],
    kuncJun: ['KUNC, 20 Jun 2026', 'https://www.kunc.org/news/2026-06-20/xcel-energys-worries-about-short-term-resource-adequacy'],
    ud: ['Utility Dive, Dec 2025', 'https://www.utilitydive.com/news/xcel-colorado-comanche-2-coal-plant/805250/'],
    xar: ['Xcel Energy annual report for 2025', 'https://s202.q4cdn.com/586283047/files/doc_financials/2025/sr/Xcel-Energy-2025-Annual-Report.pdf'],
    prpaYampa: ['Platte River Power Authority: Yampa Project', 'https://prpa.org/generation/yampa-project/'],
    prpaAero: ['Platte River Power Authority: new gas turbines', 'https://prpa.org/aeroderivative-turbines/'],
    coBiz: ['ColoradoBiz, Oct 2026', 'https://coloradobiz.com/platte-river-removes-2030-deadline-noncarbon-energy-goal/'],
    csuBill: ['Colorado Springs Utilities, May 2026', 'https://www.csu.org/blog/senate-bill-26-182-advances-to-governor-polis'],
    appaBill: ['American Public Power Association, 28 May 2026', 'https://www.publicpower.org/periodical/article/governor-signs-bill-allows-colorado-springs-utilities-continue-operating-coal-fired-unit'],
    appaPeak: ['American Public Power Association, 2026', 'https://www.publicpower.org/periodical/article/colorado-springs-utilities-reaches-new-peak-electric-demand-record'],
    csuDrake: ['Colorado Springs Utilities: Martin Drake', 'https://www.csu.org/pages/martin-drake-r.aspx'],
    epaHaze: ['EPA, 8 Jan 2026', 'https://www.epa.gov/newsreleases/epa-disapproves-colorados-regional-haze-plan-and-supports-states-coal-plants'],
    ej: ['Earthjustice summary of utility filings, Sep 2025', 'https://earthjustice.org/feature/coal-ash-states/colorado'],
    pucJan: ['Colorado Public Utilities Commission newsletter, Jan 2026', 'https://content.govdelivery.com/accounts/CODORA/bulletins/4081f96'],
    pucFeb: ['Colorado Public Utilities Commission newsletter, Feb 2026', 'https://content.govdelivery.com/accounts/CODORA/bulletins/40e1e0f'],
    pucApr: ['Colorado Public Utilities Commission newsletter, Apr 2026', 'https://content.govdelivery.com/accounts/CODORA/bulletins/4136266'],
    pucJul: ['Colorado Public Utilities Commission newsletter, Jul 2026', 'https://content.govdelivery.com/accounts/CODORA/bulletins/423911b'],
    wecc: ['Xcel Energy progress report to the Western grid council, 27 Mar 2026', 'https://www.wecc.org/sites/default/files/documents/progress_report/2026/PSCo%202026%20APR.pdf'],
    pathway: ['Xcel Energy: Colorado\'s Power Pathway', 'https://www.coloradospowerpathway.com/'],
    hpprTie: ['High Plains Public Radio, 28 Sep 2026', 'https://www.hppr.org/hppr-news/2026-09-28/cash-from-feds-will-spark-1-2b-electric-transmission-project-in-eastern-colorado'],
    hpprDc: ['High Plains Public Radio, 7 Apr 2026', 'https://www.hppr.org/hppr-news/2026-04-07/xcel-proposes-new-rate-scale-for-data-centers-to-shield-consumers-from-added-power-costs'],
    spp: ['POWER magazine, Apr 2026', 'https://www.powermag.com/southwest-power-pool-announces-expansion-of-service-territory/'],
    gcnRate: ['Gas Compression News, Aug 2026', 'https://gcn.com/?p=21721'],
    gcnBh: ['Gas Compression News, Jun 2026', 'https://gcn.com/electric-rate-increase-black-hills-energy/21855/'],
    tsNewEra: ['Tri-State, 25 Oct 2024', 'https://tristate.coop/usda-new-era-award-finance-25-billion-tri-state-clean-energy-investments'],
    tsErp: ['Tri-State: resource plan settlement', 'https://tristate.coop/co-regulators-approve-ERP-settlement'],
    pagosa: ['Pagosa Daily Post, Dec 2025', 'https://pagosadailypost.com/?p=143324'],
    lpea: ['La Plata Electric Association, 2026', 'https://lpea.coop/press-releases/10th-circuit-ruling-signals-end-years-exit-fee-litigation-ahead-lpeas-april-1'],
    holy: ['Holy Cross Energy annual report for 2025', 'https://www.holycross.com/about-us/library/annual-report-2025'],
    bighorn: ['POWER magazine: Bighorn Solar', 'https://powermag.com/solar-project-forges-a-bright-future-for-colorado-steel-mill'],
    epaUravan: ['EPA Superfund: Uravan Uranium Project', 'https://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0800076'],
    epaCotter: ['EPA Superfund: Lincoln Park', 'https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0800115'],
    doeGj: ['US Department of Energy: Grand Junction disposal site', 'https://www.energy.gov/lm/grand-junction-colorado-disposal-and-processing-sites'],
    wu: ['Western Uranium and Vanadium', 'https://www.western-uranium.com/'],
    wikiU: ['Wikipedia: Uranium mining in Colorado', 'https://en.wikipedia.org/wiki/Uranium_mining_in_Colorado'],
    wikiFsv: ['Wikipedia: Fort Saint Vrain Nuclear Power Plant', 'https://en.wikipedia.org/wiki/Fort_Saint_Vrain_Nuclear_Power_Plant'],
    wikiRex: ['Wikipedia: Rockies Express Pipeline', 'https://en.wikipedia.org/wiki/Rockies_Express_Pipeline'],
    wikiCig: ['Wikipedia: Colorado Interstate Gas', 'https://en.wikipedia.org/wiki/Colorado_Interstate_Gas'],
    wikiDes: ['Wikipedia: Deseret Power Railway', 'https://en.wikipedia.org/wiki/Deseret_Power_Railway'],
    wikiSho: ['Wikipedia: Shoshone Generating Station', 'https://en.wikipedia.org/wiki/Shoshone_Hydroelectric_Generating_Station'],
    wikiCbt: ['Wikipedia: Colorado-Big Thompson Project', 'https://en.wikipedia.org/wiki/Colorado%E2%80%93Big_Thompson_Project'],
    sunBlue: ['Colorado Sun, 7 Aug 2026', 'https://coloradosun.com/2026/08/07/blue-mesa-largest-reservoir-colorado-quarter-full-official-actions/'],
    usbrAsp: ['Reclamation: Aspinall Unit operations, 5 Nov 2026', 'https://www.usbr.gov/uc/water/crsp/cs/asp.html'],
    sunSho: ['Colorado Sun, 22 May 2026', 'https://coloradosun.com/2026/05/22/trump-administration-historic-colorado-river-rights-deal-shoshone/'],
    cdphe: ['Colorado health department: ozone nonattainment', 'https://cdphe.colorado.gov/nonattainment-federal-ozone-pollution-standards'],
    green: ['EPA Green Book, 31 Oct 2026', 'https://www3.epa.gov/airquality/greenbook/anayo_co.html'],
    pipes: ['EIA: natural gas pipelines map data', 'https://www.eia.gov/maps/layer_info-m.php'],
  };
  const HIFLD = K.HIFLD, OSM = K.OSM;
  const TWH = 1e6;
  const BUDGET = {
    title: 'Colorado generated 56.6 terawatt-hours of electricity in 2025',
    lede: 'Natural gas made 32% of it, wind 30% and coal 25%. In 2010 coal made 68%. Colorado uses slightly more electricity than it generates and brings in the rest from other states.',
    tabs: ['Where it comes from (2025)', 'Where it goes (2024)'],
    perDrop: TWH, shape: 'bolt', unitLine: 'Each bolt = 1 terawatt-hour (TWh) a year.',
    afNote: 'A megawatt (MW) measures how much power a plant can make at one moment. A megawatt-hour (MWh) is one megawatt kept up for an hour. A terawatt-hour is a million megawatt-hours, or a billion of the kilowatt-hours on a home bill. The first chart is 2025. The second is 2024, the latest year for which the federal government has published where the power went.',
    fmtVal: r => `${r.pct}% &middot; ${(r.af / 1e6).toFixed(1)} TWh`,
    sources: [
      { id: 'gas', label: 'Natural gas', pct: 32.0, af: 18.14 * TWH, color: '#d98a4a', layer: 'plants,pipes', feat: 'fsv', note: 'Burned in plants along the Front Range, the largest of them north of Denver. Colorado is the eighth-largest gas-producing state, and its power plants took 142 billion cubic feet in 2025.' },
      { id: 'wind', label: 'Wind', pct: 30.0, af: 17.02 * TWH, color: '#5fd0d8', layer: 'plants', feat: 'rushcreek', note: 'Almost all from wind farms on the eastern plains. In 2010 wind made 3.5 TWh.' },
      { id: 'coal', label: 'Coal', pct: 24.7, af: 14.02 * TWH, color: '#5c5a66', layer: 'plants,closed', feat: 'comanche', note: 'Six plants burned coal in 2025. In 2010 coal made 34.6 TWh, or 68% of Colorado\'s electricity. One of the six, Pawnee, has since switched to natural gas.' },
      { id: 'solar', label: 'Solar farms', pct: 9.9, af: 5.61 * TWH, color: '#f2c230', layer: 'plants', feat: 'bighorn', note: 'Up from 4.9 TWh in 2024. Rooftop panels are not counted here: the federal estimate for them is another 2.2 TWh.' },
      { id: 'hydro', label: 'Hydropower', pct: 3.1, af: 1.78 * TWH, color: '#3a7cc4', layer: 'plants,rivers', feat: 'bluemesa', note: 'Many small plants and a few federal dams. The three dams on the Gunnison River made a third of it.' },
      { id: 'other', tiny: true, label: 'Landfill and sewage gas, waste heat and oil', af: 0.13 * TWH, color: '#8a5a3a', val: '0.2% &middot; 0.1 TWh', layer: 'plants', note: 'Small plants that burn landfill gas, sewage gas or oil, or make power from waste heat.' },
    ],
    uses: [
      { id: 'homes', label: 'Homes', pct: 34.4, af: 20.69 * TWH, color: '#c8442e', layer: 'cities', feat: 'denver', note: 'Sold to 2.56 million households in 2024.' },
      { id: 'biz', label: 'Businesses', pct: 35.1, af: 21.17 * TWH, color: '#3f8f46', layer: 'cities', feat: 'datacenters', note: 'Shops, offices, schools, data centers and other commercial customers.' },
      { id: 'ind', label: 'Industry', pct: 24.7, af: 14.89 * TWH, color: '#8a5a3a', layer: 'cities', feat: 'djbasin', note: 'Oil and gas fields, mines, a steel mill and factories. Several rural co-ops in oil and gas country sell most of their power to industry.' },
      { id: 'loss', label: 'Lost on the wires', pct: 4.4, af: 2.65 * TWH, color: '#b9b4c0', layer: 'lines', note: 'Power lines and transformers turn some electricity into heat. This is a federal estimate.' },
      { id: 'misc', label: 'Used at plants, by trains, or not accounted for', pct: 1.4, af: 0.83 * TWH, color: '#5c5a66', note: 'Power that plant owners used on site without selling it (0.3 TWh), sales to electric rail (0.1 TWh), and 0.5 TWh the federal balance could not assign.' },
    ],
    body: '<p class="gcap">2025: total 56.6 TWh from plants of 1 megawatt or more. Batteries used 0.06 TWh more than they gave back, so the rows add up to slightly more than the total. 2024: Colorado generated 58.8 TWh and took a net 1.4 TWh from other states, so 60.2 TWh was used or lost here. The net import is calculated by the federal government, not metered. Sources: <a href="https://www.eia.gov/electricity/data/eia923/" target="_blank" rel="noopener">EIA plant data, 2025</a> &middot; <a href="https://www.eia.gov/electricity/state/colorado/" target="_blank" rel="noopener">EIA Colorado Electricity Profile, 2024</a> &middot; <a href="https://www.eia.gov/electricity/data/eia861m/" target="_blank" rel="noopener">EIA small-scale solar</a> &middot; <a href="https://www.eia.gov/electricity/data/state/" target="_blank" rel="noopener">EIA state history</a></p>',
  };
  const HUD = [['56.6 TWh', 'electricity generated in 2025'], ['30%', 'of it from wind'], ['25%', 'from coal. It was 68% in 2010']];
  const ABOUT = K.aboutStd('Where a card gives 2025 output or fuel deliveries, the figure is our sum of federal plant reports (EIA-923). The Western Area Power Administration and Deseret Power sell wholesale and are not drawn as utilities, and a few areas that the source draws wrongly are left out. Four new 345-kilovolt line segments on the eastern plains carry no name in OpenStreetMap; this map labels them as Colorado\'s Power Pathway. The Four Corners plant in New Mexico and the Bonanza plant in Utah are on the map because they sit inside its frame.');
  const FEATURES = [], BROWSE = [], TOUR = [], AREAS = {}, PIPECARDS = {}, LINECARDS = [];
  const add = o => FEATURES.push(o);
  const COALASH = 'Coal ash is what is left after coal burns. It is stored on site in ponds and landfills, and federal rules require the owner to test the groundwater around them.';

  // ----------------------------------------------------------------- coal
  add({ id: 'comanche', kind: 'coal', plant: 470, name: 'Comanche Generating Station', short: 'Comanche', tier: 1,
    lede: 'Colorado\'s largest coal plant, run by Xcel Energy on the south side of Pueblo. Its oldest unit closed in 2022. The closing date for the second has been pushed back, and the third and largest is due to close by 2031.',
    stats: [['4.2 TWh', 'electricity generated in 2025, the most of any Colorado plant'], ['2.5M tons', 'coal delivered by rail in 2025, all of it from Wyoming'], ['12 Aug 2025', 'date Unit 3, the 750 MW unit, was forced out of service. It returned in mid-August 2026'], ['31 Dec 2026', 'approved closing date for Unit 2. It had been 31 December 2025']],
    body: '<p>State regulators moved Unit 2\'s closing date by a year in December 2025 and said the Unit 3 outage was the only reason. In 2026 Xcel, the state energy office and the state consumer advocate proposed letting Unit 2 run until March 2028, capped at 63% of its capacity. The Public Utilities Commission held hearings in early November 2026 and had not ruled when this map was written.</p><p>Xcel owns 67% of Unit 3. Its approved closing date is 1 January 2031. The 2025 coal came from four mines in Wyoming\'s Powder River Basin, most of it from the Belle Ayr mine.</p><p>' + COALASH + ' A 2025 summary of utility filings lists 4.3 million cubic yards of ash here and no published groundwater data.</p>',
    sources: [S.e923, S.e923f, S.ud, S.kuncNov, S.xar, S.ej] });
  add({ id: 'craig', kind: 'coal', plant: 6021, name: 'Craig Station', short: 'Craig', tier: 1,
    lede: 'A three-unit coal plant in Moffat County, run by Tri-State, a power supplier owned by rural electric co-ops. Unit 1 was due to close on 31 December 2025. A federal emergency order has kept it available since.',
    stats: [['3.8 TWh', 'electricity generated in 2025'], ['2.5M tons', 'coal delivered in 2025, all from two mines in the same county'], ['25 Dec 2026', 'end of the current federal order on Unit 1, the fourth in a row'], ['2028', 'year Units 2 and 3 are scheduled to close']],
    body: '<p>The US Department of Energy issued the first order on 30 December 2025 under a law that lets it keep plants running in an emergency. Each order lasts about 90 days. Tri-State and Platte River Power Authority, the State of Colorado and environmental groups asked the department to reconsider and were turned down. Court challenges were pending in November 2026.</p><p>Tri-State said in January 2026 that complying would raise costs and that it had no estimate yet. The owners told the department their customers would pay.</p><p>Units 1 and 2 are owned jointly by Tri-State, Platte River, PacifiCorp, Xcel Energy and Salt River Project of Arizona. Tri-State owns all of Unit 3. In 2025 the Trapper mine next door trucked in 1.83 million tons and the Colowyo mine sent 0.67 million tons by rail.</p>',
    sources: [S.e923, S.e923f, S.tsCraig, S.doeCraig, S.doeCraigJun, S.steam, S.sunCraig] });
  add({ id: 'hayden', kind: 'coal', plant: 525, name: 'Hayden Station', short: 'Hayden', tier: 2,
    lede: 'A two-unit Xcel Energy coal plant in the Yampa Valley, about 20 miles east of Craig. Almost all of its coal comes from one underground mine nearby.',
    stats: [['2.3 TWh', 'electricity generated in 2025'], ['1.29M tons', 'coal delivered by rail in 2025, of which 1.24 million from the Twentymile mine'], ['2027 and 2028', 'approved closing years for Unit 2 and Unit 1, as listed in Xcel\'s annual report for 2025']],
    body: '<p>Xcel owns 76% of Unit 1 and 37% of Unit 2. Repairs to the pollution scrubber on Unit 2 were estimated in June 2026 at $9 to 10 million, and the settlement pending before state regulators in November 2026 would let Xcel make them.</p><p>Routt County and the town of Hayden asked Xcel for $89 million to make up for lost taxes and jobs. In 2025 Xcel offered $16 million over six years.</p><p>' + COALASH + ' A 2025 summary of utility filings lists 8.8 million cubic yards of ash here, with boron in groundwater at 27 times the federal health-based level and molybdenum at 34 times.</p>',
    sources: [S.e923, S.e923f, S.xar, S.kuncJun, S.kuncNov, S.steamHayden, S.ej] });
  add({ id: 'pawnee', kind: 'gas', kindLabel: 'Former coal plant, now natural gas', plant: 6248, name: 'Pawnee Generating Station', short: 'Pawnee', tier: 2,
    lede: 'An Xcel Energy plant near Brush that burned coal from 1981 to 2025. It was converted to burn natural gas, and the conversion was finished in 2026.',
    stats: [['1.2 TWh', 'electricity generated in 2025, its last year on coal'], ['0.52M tons', 'coal delivered in 2025, from two mines in Wyoming']],
    body: '<p>The table below shows 2023, when the plant still burned coal. A new 345-kilovolt line, Colorado\'s Power Pathway, passes the plant, and Xcel plans a solar farm and battery here.</p><p>' + COALASH + ' A 2025 summary of utility filings lists lithium in groundwater here at 4 times the federal health-based level and sulfate at 10 times.</p>',
    sources: [S.e923, S.e923f, S.xar, S.inv, S.ej] });
  add({ id: 'rawhide', kind: 'coal', kindLabel: 'Coal and natural gas plant', plant: 6761, name: 'Rawhide Energy Station', short: 'Rawhide', tier: 2,
    lede: 'The plant of Platte River Power Authority, which generates for four cities: Fort Collins, Loveland, Longmont and Estes Park. Its one coal unit is due to close by the end of 2029.',
    stats: [['1.3 TWh', 'electricity generated in 2025, of which 1.2 TWh from coal'], ['0.69M tons', 'coal delivered by rail in 2025, all from the Antelope mine in Wyoming'], ['200 MW', 'capacity of five gas turbines planned to start in late 2029']],
    body: '<p>The authority had a goal of power with no carbon emissions by 2030. On 29 October 2026 its board kept the goal and removed the 2030 deadline.</p><p>' + COALASH + ' A 2025 summary of utility filings lists lithium in groundwater here at 14 times the federal health-based level.</p>',
    sources: [S.e923, S.e923f, S.prpaAero, S.coBiz, S.ej] });
  add({ id: 'nixon', kind: 'coal', plant: 8219, name: 'Ray Nixon Power Plant', short: 'Ray Nixon', tier: 2,
    lede: 'The last coal unit of Colorado Springs Utilities, south of the city. A 2026 state law moved its closing deadline from the end of 2029 to the end of 2032.',
    stats: [['1.3 TWh', 'electricity generated in 2025'], ['0.61M tons', 'coal delivered by rail in 2025, from two mines in Wyoming'], ['31 Dec 2032', 'closing deadline under Senate Bill 26-182']],
    body: '<p>The utility supported the change. The law requires it to report each year. The gas-fired Front Range Power Plant stands next door.</p>',
    sources: [S.e923, S.e923f, S.csuBill, S.appaBill] });
  add({ id: 'bonanza', kind: 'coal', plant: 7790, name: 'Bonanza Power Plant', short: 'Bonanza (Utah)', tier: 3,
    lede: 'A coal plant in Utah that burns Colorado coal. An electric railroad about 35 miles long, used for nothing else, brings the coal from the Deserado mine near Rangely.',
    stats: [['2.5 TWh', 'electricity generated in 2025'], ['1.42M tons', 'coal delivered in 2025, all from the Deserado mine']],
    sources: [S.e923, S.e923f, S.wikiDes] });

  // ----------------------------------------------------------------- closed
  add({ id: 'drake', kind: 'closed', lon: -104.833, lat: 38.824, name: 'Martin Drake Power Plant (closed 2022)', short: 'Drake (closed)', tier: 3,
    lede: 'A coal plant that stood at the edge of downtown Colorado Springs. All generation inside the plant ended on 1 September 2022, and demolition was finished in 2024.',
    body: '<p class="gcap">The plant is not in the federal list of retired generators that this map draws, so it has no data table.</p>',
    sources: [S.csuDrake] });
  add({ id: 'nucla', kind: 'closed', plant: 527, name: 'Nucla Station (closed 2019)', short: 'Nucla (closed)', tier: 3,
    lede: 'A small Tri-State coal plant in the far west of Montrose County, in old uranium country.',
    sources: [S.inv] });
  add({ id: 'cameo', kind: 'closed', plant: 468, name: 'Cameo Station (closed 2010)', short: 'Cameo (closed)', tier: 3,
    lede: 'A small coal plant beside the Colorado River east of Grand Junction.',
    sources: [S.inv] });
  add({ id: 'arapahoe', kind: 'closed', plant: 465, name: 'Arapahoe Station (closed 2013)', short: 'Arapahoe (closed)', tier: 3,
    lede: 'A coal plant inside Denver, on the South Platte River. Coal burning inside the Denver area ended in stages. Cherokee, to the north, now burns gas.',
    sources: [S.inv] });

  // ----------------------------------------------------------------- gas
  add({ id: 'fsv', kind: 'gas', plant: 6112, name: 'Fort St. Vrain Generating Station', short: 'Fort St. Vrain', tier: 1,
    lede: 'Colorado\'s largest gas plant, near Platteville. It began as the state\'s only nuclear power plant, which sold power from 1979 and shut in 1989.',
    stats: [['4.1 TWh', 'electricity generated in 2025, second only to the Comanche coal plant'], ['29 Bcf', 'natural gas burned in 2025. Bcf means billion cubic feet'], ['400 MW', 'capacity of two more gas turbines Xcel plans here. In June 2026 the target was January 2028'], ['330 MW', 'capacity of the old reactor']],
    body: '<p>The reactor was cooled with helium gas, not water, an unusual design. Conversion of the site to natural gas began in 1996. Colorado has had no nuclear plant since. In April 2025 the governor signed a law that counts nuclear power as clean energy.</p><p>The plant stands in the Denver-Julesburg Basin, the state\'s largest oil and gas field. It is one end of a new 345-kilovolt line, Colorado\'s Power Pathway.</p>',
    sources: [S.e923, S.wikiFsv, S.kuncJun, S.wecc, S.eiaState] });
  add({ id: 'cherokee', kind: 'gas', plant: 469, name: 'Cherokee Generating Station', short: 'Cherokee', tier: 2,
    lede: 'An Xcel Energy plant in north Denver that burned coal for decades and now burns only natural gas.',
    stats: [['3.7 TWh', 'electricity generated in 2025, all from natural gas'], ['26.5 Bcf', 'natural gas burned in 2025']],
    body: '<p>The plant is inside the Denver area that does not meet the federal ozone limit. Gas plants release nitrogen oxides, one of the ingredients of ozone. ' + COALASH + ' A 2025 summary of utility filings lists boron in groundwater here at 2 times the federal health-based level and lithium at 3 times.</p>',
    sources: [S.e923, S.cdphe, S.ej] });
  add({ id: 'rmec', kind: 'gas', plant: 55835, name: 'Rocky Mountain Energy Center', short: 'Rocky Mountain Energy', tier: 3,
    lede: 'An Xcel Energy gas plant near Keenesburg, in the oil and gas fields of Weld County.',
    stats: [['2.4 TWh', 'electricity generated in 2025'], ['17.0 Bcf', 'natural gas burned in 2025']],
    body: '<p>The plant burns gas in turbines and then uses the hot exhaust to make steam for a second turbine. That design, called combined cycle, gets more electricity from the same gas.</p>',
    sources: [S.e923] });
  add({ id: 'frontrange', kind: 'gas', plant: 55283, name: 'Front Range Power Plant', short: 'Front Range', tier: 3,
    lede: 'The main gas plant of Colorado Springs Utilities, beside the Ray Nixon coal unit.',
    stats: [['2.1 TWh', 'electricity generated in 2025'], ['14.6 Bcf', 'natural gas burned in 2025']],
    sources: [S.e923] });
  add({ id: 'pags', kind: 'gas', plant: 56998, name: 'Pueblo Airport Generating Station', short: 'Pueblo Airport', tier: 3,
    lede: 'The main plant of Black Hills Energy, the utility for Pueblo and Cañon City. It opened in 2012.',
    stats: [['1.6 TWh', 'electricity generated in 2025'], ['13.7 Bcf', 'natural gas delivered in 2025']],
    sources: [S.e923, S.e923f] });
  add({ id: 'shafer', kind: 'gas', plant: 50707, name: 'J.M. Shafer Generating Station', short: 'J.M. Shafer', tier: 3,
    lede: 'Tri-State\'s largest gas plant in Colorado, at Fort Lupton.',
    stats: [['0.72 TWh', 'electricity generated in 2025'], ['6.1 Bcf', 'natural gas delivered in 2025']],
    sources: [S.e923, S.e923f] });
  add({ id: 'mountainpeak', kind: 'gas', plant: 68386, name: 'Mountain Peak Power Station', short: 'Mountain Peak', tier: 3,
    lede: 'A gas plant that opened in 2025 in Weld County, in the oil and gas fields north of Denver.',
    stats: [['0.12 TWh', 'electricity generated in 2025, its first year']],
    body: '<p>Plants like this are called peakers. They sit ready most of the year and run when demand is highest.</p>',
    sources: [S.e923, S.inv] });
  add({ id: 'horizon', kind: 'plannedp', plant: 68705, name: 'Horizon gas plant (planned)', short: 'Horizon (planned)', tier: 3,
    lede: 'A gas plant that Colorado Springs Utilities has reported to the federal government. It is the largest planned gas plant in the federal list for Colorado.',
    sources: [S.inv] });

  // ----------------------------------------------------------------- hydro
  add({ id: 'bluemesa', kind: 'hydro', plant: 512, name: 'Blue Mesa Dam and the Gunnison River dams', short: 'Blue Mesa Dam', tier: 1,
    lede: 'Three federal dams in a row on the Gunnison River: Blue Mesa, Morrow Point and Crystal. Blue Mesa holds Colorado\'s largest reservoir, which was less than a quarter full in August 2026.',
    stats: [['0.60 TWh', 'electricity generated by the three dams in 2025, a third of Colorado\'s hydropower'], ['84 feet', 'how far Blue Mesa Reservoir was below full on 4 August 2026'], ['42%', 'how full Reclamation projects the reservoir will be at the end of September 2027']],
    body: '<p>2026 was an extremely dry year on the Colorado River and its branches. These are this year\'s readings, not typical ones. In August officials said the reservoir could fall below the level needed to make power by November at the earliest. On 5 November Reclamation said it would not fill this year.</p><p>The dams are part of the Colorado River Storage Project, with Glen Canyon and Flaming Gorge. The federal Western Area Power Administration sells their power to co-ops, cities and tribes.</p><p class="gcap">The table below is for Blue Mesa only.</p>',
    sources: [S.e923, S.sunBlue, S.usbrAsp] });
  add({ id: 'morrowpoint', kind: 'hydro', plant: 514, name: 'Morrow Point Dam', short: 'Morrow Point', tier: 3,
    lede: 'The middle of the three Gunnison River dams, and the one with the most generating capacity.',
    stats: [['0.26 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'cabincreek', kind: 'pumped', plant: 467, name: 'Cabin Creek pumped storage', short: 'Cabin Creek', tier: 2,
    lede: 'Xcel Energy\'s pumped-storage plant, high in the mountains above Georgetown. It has worked like a battery since 1967.',
    stats: [['3', 'pumped-storage plants in Colorado, with about 580 MW between them'], ['670 MW', 'large batteries running in Colorado in September 2026, holding 2,413 MWh']],
    body: '<p>When power is plentiful, the plant pumps water from a lower reservoir to an upper one. When power is needed, the water runs back down through the turbines.</p>',
    sources: [S.eiaState, S.inv] });
  add({ id: 'mtelbert', kind: 'pumped', plant: 6208, name: 'Mount Elbert pumped storage', short: 'Mount Elbert', tier: 3,
    lede: 'A federal pumped-storage plant at Twin Lakes, south of Leadville. It used 0.02 TWh more in 2025 than it gave back, as any storage plant does.',
    sources: [S.e923] });
  add({ id: 'shoshone', kind: 'hydro', plant: 476, name: 'Shoshone Generating Station', short: 'Shoshone', tier: 2,
    lede: 'A small Xcel Energy plant in Glenwood Canyon that has made power since 1909. Its water right matters more than its electricity.',
    stats: [['0.09 TWh', 'electricity generated in 2025'], ['1902', 'year its main water right dates from, older than most rights on the Colorado River in the state'], ['$99 million', 'price a public water district has agreed to pay Xcel for the plant\'s water rights']],
    body: '<p>Because the right is so old, water must be left in the river to reach the plant, and it then flows on to towns, farms and rafters downstream. The Colorado River District is buying the rights so that the flow would continue if the plant ever closed. In May 2026 the federal government released $40 million toward the price. A water court and the utilities commission still had to approve.</p>',
    sources: [S.e923, S.wikiSho, S.sunSho] });
  add({ id: 'flatiron', kind: 'hydro', plant: 518, name: 'Flatiron and the Colorado-Big Thompson plants', short: 'Flatiron', tier: 3,
    lede: 'One of a chain of federal power plants on the Colorado-Big Thompson Project, which moves water under the Continental Divide to the Front Range. The water makes power as it falls toward the plains.',
    stats: [['0.22 TWh', 'electricity generated at Flatiron in 2025']],
    body: '<p>The Western Area Power Administration sells the power.</p>', sources: [S.e923, S.wikiCbt] });

  // ----------------------------------------------------------------- wind
  add({ id: 'rushcreek', kind: 'wind', plant: 60619, name: 'Rush Creek Wind', short: 'Rush Creek Wind', tier: 1,
    lede: 'The wind farm that generates the most electricity in Colorado. Xcel Energy owns it and built its own 345-kilovolt line to carry the power toward Denver.',
    stats: [['2.15 TWh', 'electricity generated in 2025'], ['17.0 TWh', 'electricity from all Colorado wind farms in 2025, 30% of the state\'s generation'], ['5,851 MW', 'all wind capacity in Colorado in September 2026']],
    body: '<p>Colorado ranked seventh among the states in wind capacity in 2024. Nearly all of its wind farms are on the eastern plains, far from the cities, so wind power depends on long transmission lines.</p>',
    sources: [S.e923, S.inv, S.eiaState] });
  add({ id: 'cheyenneridge', kind: 'wind', plant: 62952, name: 'Cheyenne Ridge Wind', short: 'Cheyenne Ridge', tier: 2,
    lede: 'An Xcel Energy wind farm near the Kansas line. A second phase of about the same size is planned.',
    stats: [['1.64 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'limon', kind: 'wind', plant: 58126, name: 'Limon Wind Energy Center', short: 'Limon Wind', tier: 3,
    lede: 'Three wind farms built side by side near Limon between 2012 and 2014.',
    stats: [['1.70 TWh', 'electricity generated by the three farms in 2025'], ['601 MW', 'capacity of the three farms together']],
    body: '<p class="gcap">The table below is for Limon Wind I only.</p>', sources: [S.e923, S.inv] });
  add({ id: 'peetz', kind: 'wind', plant: 56563, name: 'Peetz Table Wind', short: 'Peetz Table', tier: 2,
    lede: 'One of a group of wind farms on the high ground along the Nebraska line, north of Sterling. This one opened in 2007.',
    stats: [['0.67 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'cedarcreek', kind: 'wind', plant: 56371, name: 'Cedar Creek Wind', short: 'Cedar Creek', tier: 3,
    lede: 'Two wind farms in northern Weld County, opened in 2007 and 2011.',
    stats: [['1.30 TWh', 'electricity generated by the two farms in 2025']],
    body: '<p class="gcap">The table below is for the first farm only.</p>', sources: [S.e923, S.inv] });
  add({ id: 'coloradogreen', kind: 'wind', plant: 56173, name: 'Colorado Green', short: 'Colorado Green', tier: 2,
    lede: 'A wind farm south of Lamar that opened in 2003. It is the oldest large wind farm still running in Colorado.',
    stats: [['0.56 TWh', 'electricity generated in 2025']], sources: [S.e923, S.inv] });
  add({ id: 'dustyrose', kind: 'wind', plant: 69893, name: 'Dusty Rose Wind', short: 'Dusty Rose Wind', tier: 3,
    lede: 'A large wind farm that opened in 2026 on the plains of eastern Colorado.',
    sources: [S.inv] });
  add({ id: 'singinggrass', kind: 'plannedp', plant: 68982, name: 'Singing Grass Wind (planned)', short: 'Singing Grass (planned)', tier: 3,
    lede: 'A wind farm that Xcel Energy plans on the eastern plains. It would be about the size of Rush Creek.',
    body: '<p>In September 2026 the federal inventory listed 1,041 MW of planned wind, 3,154 MW of planned solar and 1,899 MW of planned batteries in Colorado.</p>',
    sources: [S.inv, S.wecc] });

  // ----------------------------------------------------------------- solar and batteries
  add({ id: 'bighorn', kind: 'solar', plant: 63770, name: 'Bighorn Solar and the Pueblo steel mill', short: 'Bighorn Solar', tier: 2,
    lede: 'A solar farm built on the grounds of the Pueblo steel mill, which recycles scrap metal into new steel. The mill is Xcel Energy\'s largest retail customer in Colorado.',
    stats: [['0.58 TWh', 'electricity generated in 2025'], ['About 90%', 'share of the mill\'s yearly electricity use the solar farm was designed to match'], ['1,800 acres', 'land the panels cover, between the mill and the Comanche coal plant']],
    body: '<p>Lightsource bp owns the solar farm and sells the output to Xcel under a 20-year contract. Xcel delivers power to the mill around the clock. The mill supported more than 1,000 local jobs when the farm opened at the end of 2021.</p>',
    sources: [S.e923, S.bighorn] });
  add({ id: 'neptune', kind: 'solar', plant: 63731, name: 'Neptune Energy Center', short: 'Neptune', tier: 3,
    lede: 'A solar farm with a battery, east of Pueblo. It generated more in 2025 than any other solar farm in Colorado.',
    stats: [['0.68 TWh', 'electricity generated in 2025']],
    body: '<p>Pueblo County has the state\'s largest cluster of solar farms. They stand beside the lines built for the Comanche coal plant.</p>', sources: [S.e923, S.inv] });
  add({ id: 'rmsolar', kind: 'solar', plant: 69100, name: 'Rocky Mountain Solar', short: 'Rocky Mountain Solar', tier: 3,
    lede: 'An Xcel Energy solar farm and battery south of the Comanche plant. It opened in 2025.',
    sources: [S.inv] });
  add({ id: 'hooper', kind: 'solar', plant: 60008, name: 'Hooper Solar and the San Luis Valley', short: 'Hooper Solar', tier: 3,
    lede: 'One of several solar farms in the San Luis Valley, a high, dry and sunny basin. One 230-kilovolt line and smaller lines over the mountains connect the valley to the rest of the grid.',
    stats: [['0.12 TWh', 'electricity generated in 2025']], sources: [S.e923] });
  add({ id: 'axial', kind: 'solar', plant: 65480, name: 'Axial Basin Solar', short: 'Axial Basin Solar', tier: 3,
    lede: 'A Tri-State solar farm that opened in 2025 in coal country, between the Craig plant and the Colowyo mine.',
    stats: [['1,280 MW', 'solar, wind and storage that Tri-State plans to add with a $2.5 billion federal award announced in October 2024']],
    sources: [S.inv, S.tsNewEra] });
  add({ id: 'jackson', kind: 'battery', plant: 69122, name: 'Jackson Fuller Energy Storage', short: 'Jackson Fuller battery', tier: 3,
    lede: 'A battery plant that opened in 2025. Colorado has about a tenth of the large battery capacity of Arizona, and more is planned.',
    stats: [['670 MW', 'large batteries running in Colorado in September 2026'], ['2,413 MWh', 'energy those batteries hold when full'], ['1,899 MW', 'more battery capacity planned']],
    sources: [S.inv] });

  // ----------------------------------------------------------------- fuel supply
  add({ id: 'prbcoal', kind: 'fuel', kindLabel: 'Coal supply', lon: -104.45, lat: 41.0, name: 'Coal arrives by rail from Wyoming', short: 'Wyoming coal by rail', tier: 2,
    lede: 'The four coal plants along the Front Range burn no Colorado coal. Theirs comes by train from surface mines in Wyoming\'s Powder River Basin, off this map to the north.',
    stats: [['8.2M tons', 'coal delivered to Colorado power plants in 2025'], ['4.4M tons', 'of that from Wyoming, to Comanche, Pawnee, Rawhide and Ray Nixon'], ['3.8M tons', 'from Colorado mines, to Craig and Hayden']],
    body: '<p>The largest single source in 2025 was the Belle Ayr mine in Wyoming, which sent 1.43 million tons to Comanche.</p><p class="gcap">The marker stands for mines that are off the map.</p>',
    sources: [S.e923f] });
  add({ id: 'twentymile', kind: 'coalmineop', lon: -107.0612, lat: 40.3461, name: 'Twentymile Mine', short: 'Twentymile Mine', tier: 2,
    lede: 'Peabody\'s underground coal mine in Routt County, also called Foidel Creek. It mainly supplies the Hayden plant, by rail.',
    stats: [['1.24M tons', 'coal it delivered to Hayden in 2025'], ['1.8M tons', 'coal the mine produced in 2025, according to Peabody']],
    sources: [S.e923f, S.peabody, S.sunCoal] });
  add({ id: 'trapper', kind: 'coalmineop', lon: -107.5542, lat: 40.4033, name: 'Trapper Mine', short: 'Trapper Mine', tier: 3,
    lede: 'A surface coal mine beside the Craig plant. Its coal goes to the plant by truck.',
    stats: [['1.83M tons', 'coal delivered to Craig in 2025, 73% of what the plant received']],
    sources: [S.e923f] });
  add({ id: 'colowyo', kind: 'coalmine', lon: -107.8236, lat: 40.2416, name: 'Colowyo Mine (production ended 2025)', short: 'Colowyo Mine (closed)', tier: 3,
    lede: 'A surface coal mine owned by Tri-State, south-west of Craig. Tri-State planned to end production by the close of 2025 and begin restoring the land.',
    stats: [['0.67M tons', 'coal delivered by rail to Craig in 2025, its last year'], ['1.89M tons', 'coal produced in 2024'], ['120+', 'workers at the mine when the closing was announced']],
    sources: [S.e923f, S.drms, S.tsColowyo] });
  add({ id: 'westelk', kind: 'coalmineop', lon: -107.4442, lat: 38.9266, name: 'West Elk Mine', short: 'West Elk Mine', tier: 2,
    lede: 'Colorado\'s largest coal mine, underground near Somerset in Gunnison County. Most of its coal leaves the state by rail.',
    stats: [['3.7M tons', 'coal produced in 2024, a third of the state total'], ['11.4M tons', 'coal produced by all Colorado mines in 2025'], ['About 40M tons', 'Colorado\'s peak, in 2004']],
    body: '<p>In 2025 power plants in California, Michigan and Mississippi reported coal from this mine, and it sent a small amount to Hayden. About two-fifths of Colorado coal is burned in Colorado. The rest goes to 17 other states, and a little is exported.</p>',
    sources: [S.drms, S.coalQ, S.sunCoal, S.e923f, S.eiaState] });
  add({ id: 'deserado', kind: 'coalmineop', lon: -108.70, lat: 40.19, name: 'Deserado Mine', short: 'Deserado Mine', tier: 3,
    lede: 'An underground coal mine near Rangely with one customer: the Bonanza power plant across the Utah line. The coal travels on its own electric railroad.',
    stats: [['1.42M tons', 'coal delivered to Bonanza in 2025'], ['About 35 miles', 'length of the railroad, which opened in 1984']],
    body: '<p class="gcap">The marker is approximate.</p>',
    sources: [S.e923f, S.wikiDes] });
  add({ id: 'djbasin', kind: 'gasfield', lon: -104.55, lat: 40.43, name: 'Denver-Julesburg Basin', short: 'Denver-Julesburg Basin', tier: 2,
    lede: 'The oil and gas field north-east of Denver, centered on Weld County. With the Piceance Basin in the west, it is one of Colorado\'s two largest gas-producing regions.',
    stats: [['1,870 Bcf', 'natural gas produced in Colorado in 2025. Bcf means billion cubic feet'], ['142 Bcf', 'natural gas delivered to Colorado power plants in 2025, about 8% of that'], ['1.82 TWh', 'electricity that United Power, the local co-op, sold to industry in 2025, more than half of all it sold']],
    body: '<p>Colorado is the eighth-largest gas-producing state. Most of its gas leaves by pipeline. Power plants became the state\'s largest gas users in 2024, with 33% of demand.</p><p>Oil and gas wells also use electricity, for pumps and compressors. Weld County produces 8 of every 10 barrels of Colorado\'s oil.</p><p class="gcap">"About 8%" is our arithmetic.</p>',
    sources: [S.gasProd, S.gasBurn, S.eiaState, S.e861] });
  add({ id: 'piceance', kind: 'gasfield', lon: -108.05, lat: 39.62, name: 'Piceance Basin and the Meeker gas hub', short: 'Piceance Basin', tier: 2,
    lede: 'The gas field of north-west Colorado. The Rockies Express pipeline starts near Meeker and carries gas east as far as Ohio.',
    stats: [['1,679 miles', 'length of the Rockies Express pipeline system'], ['2009', 'year it was completed'], ['90%', 'share of White River Electric\'s 2025 sales that went to industry, most of it gas processing and pumping']],
    sources: [S.eiaState, S.wikiRex, S.e861] });
  add({ id: 'sanjuan', kind: 'gasfield', lon: -107.633, lat: 37.115, name: 'San Juan Basin', short: 'San Juan Basin', tier: 3,
    lede: 'A gas field that straddles the New Mexico line around Ignacio, much of it on Southern Ute land. The gas here comes from coal seams.',
    stats: [['About a third', 'Colorado\'s share of US gas from coal seams in 2023, the most of any state'], ['About 50%', 'fall in Colorado\'s production of that gas from 2010 to 2023']],
    sources: [S.eiaState] });
  add({ id: 'gasstorage', kind: 'fuel', lon: -104.85, lat: 40.93, name: 'The Cheyenne gas hub and underground storage', short: 'Cheyenne gas hub', tier: 3,
    lede: 'Several pipelines meet near the Wyoming line north of Greeley. Colorado also stores gas underground in old gas fields, to draw on when demand is high.',
    stats: [['10', 'underground gas storage fields in Colorado'], ['141 Bcf', 'gas they can hold, about as much as the state\'s power plants burn in a year']],
    body: '<p class="gcap">The marker is approximate. The storage fields are spread around the state.</p>',
    sources: [S.eiaState, S.gasStor, S.gasBurn] });
  add({ id: 'uravan', kind: 'umine', kindLabel: 'Former uranium mill town', lon: -108.7364, lat: 38.3683, name: 'Uravan and the uranium belt', short: 'Uravan', tier: 2,
    lede: 'A company town built around a uranium and vanadium mill, founded in 1936. It supplied uranium to the first atomic bomb project. The site was later cleaned up under the federal Superfund program.',
    stats: [['1987 to 2007', 'years of the cleanup'], ['10 million+', 'cubic yards of radioactive waste dealt with'], ['2005', 'last year uranium was mined in Colorado, according to the federal energy agency']],
    body: '<p>The Uravan mineral belt runs through western Montrose and San Miguel counties. Mining here began in 1898. Colorado has no nuclear plant today.</p><p>Western Uranium and Vanadium says its Sunday Mine Complex, to the south, is permitted and operating, and that it is stockpiling ore for a processing plant it plans.</p>',
    sources: [S.epaUravan, S.wikiU, S.eiaState, S.wu] });
  add({ id: 'cotter', kind: 'info', kindLabel: 'Former uranium mill', lon: -105.22, lat: 38.40, name: 'Cotter uranium mill site, Cañon City', short: 'Cotter mill site', tier: 3,
    lede: 'A former uranium mill on the south edge of Cañon City. Liquid waste from the mill, discharged between 1958 and 1979, contaminated groundwater in the Lincoln Park neighborhood.',
    stats: [['1984', 'year the site joined the federal Superfund cleanup list'], ['2014', 'year the current study of the full cleanup was ordered. It was still under way in 2026']],
    body: '<p>The state health department leads the cleanup. Waste from old uranium mills elsewhere in western Colorado is buried in federal disposal sites. The one near Grand Junction was built in 1994 and is still open to receive more.</p><p class="gcap">The marker is approximate.</p>',
    sources: [S.epaCotter, S.doeGj] });

  // ----------------------------------------------------------------- grid
  add({ id: 'pathway', kind: 'hub', lon: -103.526, lat: 40.045, name: 'Colorado\'s Power Pathway', short: 'Power Pathway', tier: 2,
    lede: 'A loop of new 345-kilovolt line that Xcel Energy is building around the eastern plains, to collect wind and solar power and carry it to the Front Range. This is Canal Crossing, one of its four new substations.',
    stats: [['550 miles', 'length, as described by state regulators'], ['$1.7 billion', 'cost'], ['3 of 5', 'segments in service in November 2026'], ['May 2027', 'expected completion, as of March 2026']],
    body: '<p>State regulators approved the project in 2022. It adds four new substations and ties into five existing ones: Fort St. Vrain, Pawnee, Cheyenne Ridge, Tundra near Pueblo and Harvest Mile on the edge of Aurora.</p><p>Elbert County denied a permit for the last segment. On 6 April 2026 the Public Utilities Commission overrode the county. A similar appeal over El Paso County was pending.</p><p class="gcap">The map shows the segments that volunteers had drawn in OpenStreetMap when the data was collected.</p>',
    sources: [S.wecc, S.pathway, S.pucApr, S.hpprTie] });
  add({ id: 'lamartie', kind: 'hub', lon: -102.519, lat: 38.209, name: 'Lamar: the tie to the eastern grid', short: 'Lamar DC tie', tier: 2,
    lede: 'The United States has two main power grids that are not synchronized, east and west. Colorado is on the western one. At Lamar a converter station lets a limited amount of power cross.',
    stats: [['210 MW', 'what the tie can carry now'], ['700 MW', 'what a proposed expansion would carry'], ['$250 million', 'federal award for the expansion, announced September 2026'], ['About $1.2 billion', 'cost of the expansion, which includes 28 miles of new line']],
    body: '<p>The converter changes alternating current to direct current and back, so that the two grids do not have to run in step. The expansion still needs approval from state and federal regulators.</p>',
    sources: [S.hpprTie] });
  add({ id: 'missilesite', kind: 'hub', lon: -104.024, lat: 39.691, name: 'Missile Site substation', short: 'Missile Site', tier: 3,
    lede: 'A substation on the plains east of Denver where 345-kilovolt lines from the wind farms meet. Lines from Rush Creek, Limon and Pawnee arrive here and go on to the city.',
    sources: [OSM] });
  add({ id: 'ault', kind: 'hub', lon: -104.814, lat: 40.608, name: 'Ault substation and the two power markets', short: 'Ault substation', tier: 3,
    lede: 'Lines from the Craig coal plant and from Wyoming meet here, north of Greeley. In 2026 Colorado\'s utilities split between two organized power markets.',
    stats: [['1 Apr 2026', 'date Tri-State, Colorado Springs Utilities, Platte River and others joined the Southwest Power Pool'], ['2027', 'year Xcel Energy is due to begin trading in a separate day-ahead market run by the same organization'], ['1 June 2029', 'deadline state regulators set for Xcel to apply to join a full regional market']],
    body: '<p>The Southwest Power Pool, based in Arkansas, runs the grid and a wholesale market across the Great Plains. Its expansion into the western grid on 1 April 2026 took in more than 30 utilities, among them the federal Western Area Power Administration\'s lines in Colorado.</p><p>Xcel, the state\'s largest utility, did not join. State regulators approved its plan for the day-ahead market, called Markets+, on 9 October 2025.</p>',
    sources: [S.spp, ['NMPP Energy, Apr 2026', 'https://nmppenergy.org/news/spps-expansion-western-interconnection-goes-live'], S.pucJan, OSM] });

  // ----------------------------------------------------------------- users
  add({ id: 'denver', kind: 'city', lon: -104.990, lat: 39.739, name: 'Denver and the Front Range', short: 'Denver', tier: 1,
    lede: 'Most Coloradans live in a strip of cities along the east side of the mountains. Xcel Energy serves Denver and most of its suburbs, and sells half of all the electricity sold in Colorado.',
    stats: [['28.3 TWh', 'electricity Xcel sold in Colorado in 2025, of 56.9 TWh sold by all utilities'], ['1.6 million', 'Xcel customers in Colorado'], ['$157 million', 'yearly rate increase state regulators approved on 20 August 2026, about $5 a month for a home']],
    body: '<p>Xcel asked for $356 million. The Colorado Public Utilities Commission sets its rates.</p><p>Homes with rooftop solar made an estimated 2.2 TWh in 2025, on 1,309 MW of small panels statewide.</p>',
    sources: [S.e861, S.gcnRate, S.pucJul, S.roof] });
  add({ id: 'cosprings', kind: 'city', lon: -104.821, lat: 38.834, name: 'Colorado Springs', short: 'Colorado Springs', tier: 1,
    lede: 'The city owns its utility, which sells electricity, gas and water. It is the second-largest seller of electricity in Colorado.',
    stats: [['1,034 MW', 'record demand, set on 20 July 2026'], ['4.5 TWh', 'electricity sold in 2025, to 264,000 customers'], ['41%', 'share of those sales that went to industry']],
    body: '<p>The city council acts as the utility\'s board and sets its rates. The utility joined the Southwest Power Pool\'s market on 1 April 2026.</p>',
    sources: [S.appaPeak, S.e861, S.spp] });
  add({ id: 'datacenters', kind: 'datacenter', lon: -104.74, lat: 39.74, name: 'Data centers', short: 'Data centers', tier: 2,
    lede: 'Xcel Energy says large new customers, most of them data centers, account for two-thirds of the new demand it expects. In April 2026 it proposed a separate rate for them.',
    stats: [['950 MW', 'new generation Xcel says it needs over five years to serve these customers'], ['50 MW', 'size of customer at which the proposed rate would apply'], ['15 years', 'length of the contract a large customer would have to sign']],
    body: '<p>The company says the rate is meant to keep the cost of serving large users from falling on others. In one six-month stretch, requests for 4,000 MW were withdrawn and requests for 3,500 MW were filed. State regulators held hearings in August and October 2026 and had not ruled when this map was written.</p><p class="gcap">The marker is in Aurora, east of Denver. Data centers are spread around the metro area.</p>',
    sources: [S.hpprDc, S.pucJul] });
  add({ id: 'ozone', kind: 'info', lon: -105.02, lat: 39.93, name: 'Front Range ozone', short: 'Ozone', tier: 3,
    lede: 'Denver and the northern Front Range do not meet the federal limits for ozone, a lung irritant that forms in sunlight from engine, oil-field and smokestack gases. Power plants are one of the sources.',
    stats: [['Severe', 'the area\'s category under the 2008 federal limit'], ['20 July 2027', 'deadline to meet that limit'], ['Serious', 'its category under the stricter 2015 limit, in October 2026']],
    body: '<p>Colorado has said it will ask to be moved to "severe" under the 2015 limit as well, which would move that deadline to 2033. A higher category brings stricter permit rules for plants and factories.</p><p>Colorado power plants released 14,121 tons of nitrogen oxides in 2024, down from 60,700 tons in 2010.</p>',
    sources: [S.cdphe, S.green, S.prof] });
  add({ id: 'haze', kind: 'info', lon: -105.68, lat: 40.34, name: 'Haze over the national parks', short: 'Haze rule', tier: 3,
    lede: 'Federal law asks states to clear the haze over national parks such as Rocky Mountain. Colorado\'s plan relied on coal plant closing dates. In January 2026 the EPA rejected it.',
    body: '<p>The EPA said closing the plants was not necessary to meet the haze rule, and that Colorado had counted closures the owners had not agreed to. It named the Ray Nixon unit. Colorado must revise the plan, or the EPA will write one.</p><p>Colorado power plants released 7,353 tons of sulfur dioxide in 2024, down from 49,468 tons in 2010.</p>',
    stats: [['8 Jan 2026', 'date the EPA announced its decision']],
    sources: [S.epaHaze, S.prof] });

  BROWSE.push(
    ['Coal', ['comanche', 'craig', 'hayden', 'rawhide', 'nixon', 'pawnee', 'bonanza', 'drake', 'nucla', 'cameo', 'arapahoe']],
    ['Natural gas', ['fsv', 'cherokee', 'rmec', 'frontrange', 'pags', 'shafer', 'mountainpeak', 'horizon']],
    ['Wind', ['rushcreek', 'cheyenneridge', 'limon', 'peetz', 'cedarcreek', 'coloradogreen', 'dustyrose', 'singinggrass']],
    ['Sun, water and batteries', ['bighorn', 'neptune', 'rmsolar', 'hooper', 'axial', 'jackson', 'bluemesa', 'morrowpoint', 'cabincreek', 'mtelbert', 'shoshone', 'flatiron']],
    ['Where the fuel comes from', ['prbcoal', 'twentymile', 'trapper', 'colowyo', 'westelk', 'deserado', 'djbasin', 'piceance', 'sanjuan', 'gasstorage', 'uravan', 'cotter']],
    ['The grid', ['pathway', 'lamartie', 'missilesite', 'ault']],
    ['Who uses it, and the air', ['denver', 'cosprings', 'datacenters', 'ozone', 'haze']],
  );

  // ----------------------------------------------------------------- utility cards (figures: EIA-861, 2025)
  const coop = (lede, twh, cust, extra) => ({ lede, stats: [[twh + ' TWh', 'electricity sold in 2025'], [cust, 'customers in 2025'], ...(extra || [])], sources: [S.e861, HIFLD] });
  Object.assign(AREAS, {
    'Xcel Energy (Public Service Company of Colorado)': { lede: 'The state\'s largest utility, owned by investors. It serves Denver, most of the Front Range and scattered towns in the mountains and the west.',
      stats: [['28.3 TWh', 'electricity sold in 2025, half of all sales in Colorado'], ['1.6 million', 'customers in 2025'], ['6,000 MW', 'ceiling state regulators set in January 2026 on new plants it may add over about five years'], ['14,000 MW', 'what it had asked for']],
      body: '<p>The Colorado Public Utilities Commission sets its rates. On 20 August 2026 the commission approved an increase of $157 million a year. The company had asked for $356 million.</p><p>It runs the Comanche, Hayden and Pawnee plants and is building the Power Pathway line. In February 2026 regulators approved up to 4,100 MW of nearer-term projects: solar, storage, wind and gas.</p>',
      sources: [S.e861, S.pucJan, S.pucFeb, S.hpprDc, S.gcnRate, HIFLD] },
    'Black Hills Energy': { lede: 'The investor-owned utility for Pueblo, Cañon City and nearby towns.',
      stats: [['1.75 TWh', 'electricity sold in 2025'], ['111,500', 'customers in 2025'], ['$26.7 million', 'yearly rate increase it requested on 12 June 2026, about $10.90 a month for a home']],
      body: '<p>The Public Utilities Commission is expected to decide the request in spring 2027.</p>', sources: [S.e861, S.gcnBh, S.pucJul, HIFLD] },
    'Colorado Springs Utilities': { lede: 'A city-owned utility. The city council sets its rates, not the state commission.',
      stats: [['4.5 TWh', 'electricity sold in 2025'], ['264,000', 'customers in 2025'], ['1,034 MW', 'record demand, 20 July 2026'], ['31 Dec 2032', 'deadline to close its last coal unit, under a 2026 state law']],
      sources: [S.e861, S.appaPeak, S.appaBill, HIFLD] },
    'Fort Collins Utilities': { lede: 'A city-owned utility. With Loveland, Longmont and Estes Park it owns Platte River Power Authority, which generates its power at the Rawhide plant and elsewhere.',
      stats: [['1.45 TWh', 'electricity sold in 2025'], ['80,929', 'customers in 2025']], sources: [S.e861, S.coBiz, HIFLD] },
    'Loveland Water and Power': { lede: 'A city-owned utility and one of the four owners of Platte River Power Authority.', stats: [['0.73 TWh', 'electricity sold in 2025'], ['42,769', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'Longmont Power and Communications': { lede: 'A city-owned utility and one of the four owners of Platte River Power Authority.', stats: [['0.80 TWh', 'electricity sold in 2025'], ['44,390', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'City of Fountain': { lede: 'A city-owned utility south of Colorado Springs.', stats: [['0.23 TWh', 'electricity sold in 2025'], ['18,127', 'customers in 2025']], sources: [S.e861, HIFLD] },
    'United Power': { lede: 'A member-owned co-op north of Denver, in the oil and gas fields. It left Tri-State, its former supplier, in May 2024 and now buys its own power.',
      stats: [['3.5 TWh', 'electricity sold in 2025, the most of any Colorado co-op'], ['115,479', 'customers in 2025'], ['52%', 'share of its sales that went to industry']], sources: [S.e861, S.pagosa, HIFLD] },
    'CORE Electric Cooperative': { lede: 'A member-owned co-op that serves the suburbs and foothills south and east of Denver.',
      stats: [['2.6 TWh', 'electricity sold in 2025'], ['182,993', 'customers in 2025, the most of any Colorado co-op']], sources: [S.e861, HIFLD] },
    'Holy Cross Energy': { lede: 'A member-owned co-op that serves Aspen, Vail and the valleys between. It aims for electricity with no carbon emissions by 2030.',
      stats: [['1.26 TWh', 'electricity sold in 2025'], ['61,834', 'customers in 2025'], ['85%', 'share of its 2025 supply that it counts as carbon-free']], sources: [S.e861, S.holy, HIFLD] },
    'Poudre Valley Rural Electric Association': coop('A member-owned co-op around Fort Collins, Loveland and Greeley. Tri-State supplies it.', '1.68', '56,750'),
    'Mountain View Electric Association': coop('A member-owned co-op on the plains east of Colorado Springs. Tri-State supplies it.', '0.98', '65,946'),
    'La Plata Electric Association': { lede: 'A member-owned co-op around Durango. It planned to leave Tri-State, its supplier, on 1 April 2026, after two years\' notice.',
      stats: [['0.85 TWh', 'electricity sold in 2025'], ['47,488', 'customers in 2025']], sources: [S.e861, S.lpea, HIFLD] },
    'Delta-Montrose Electric Association': coop('A member-owned co-op on the Western Slope. It has left Tri-State, its former supplier.', '0.55', '37,301'),
    'Yampa Valley Electric Association': coop('A member-owned co-op around Steamboat Springs and Craig, in the valley of the Hayden and Craig coal plants.', '0.54', '28,314'),
    'White River Electric Association': coop('A small co-op around Meeker, in the Piceance gas field. Nine-tenths of what it sells goes to industry.', '0.53', '3,502'),
    'Moon Lake Electric Association': { lede: 'A co-op based in Utah. Its Colorado corner, around Rangely, has an oil field and the Deserado coal mine.',
      stats: [['0.49 TWh', 'electricity sold in Colorado in 2025, 93% of it to industry'], ['2,222', 'customers in Colorado in 2025']], sources: [S.e861, HIFLD] },
    'Empire Electric Association': coop('A member-owned co-op around Cortez, in the south-west corner. More than half of its sales go to industry.', '0.54', '15,986'),
    'San Miguel Power Association': coop('A member-owned co-op around Telluride, Ouray and the old uranium towns of the west end.', '0.21', '15,087'),
    'Grand Valley Power': coop('A member-owned co-op around Grand Junction.', '0.25', '20,095'),
    'Mountain Parks Electric': coop('A member-owned co-op in Grand and Jackson counties. It has left Tri-State, its former supplier.', '0.36', '23,368'),
    'San Luis Valley Rural Electric Cooperative': coop('A member-owned co-op in the San Luis Valley, where farms pump groundwater for irrigation.', '0.20', '13,020'),
    'San Isabel Electric Association': coop('A member-owned co-op in the country around Pueblo and south to Trinidad.', '0.42', '26,166'),
    'Southeast Colorado Power Association': coop('A member-owned co-op in the south-east corner, around La Junta and Lamar.', '0.23', '10,970'),
    'K.C. Electric Association': coop('A member-owned co-op on the eastern plains, where several of the largest wind farms stand.', '0.23', '6,609'),
    'Y-W Electric Association': coop('A member-owned co-op in Yuma and Washington counties, in the north-east.', '0.39', '8,809'),
    'Highline Electric Association': coop('A member-owned co-op in the north-east corner. Most of what it sells is classed as industrial.', '0.52', '8,415'),
    'Morgan County Rural Electric Association': coop('A member-owned co-op around Fort Morgan and Brush.', '0.56', '9,650'),
    'Gunnison County Electric Association': { lede: 'A member-owned co-op around Gunnison and Crested Butte.', sources: [HIFLD] },
    'Sangre de Cristo Electric Association': { lede: 'A member-owned co-op in the upper Arkansas River valley, around Buena Vista.', sources: [HIFLD] },
    'City of Delta': { lede: 'A city-owned utility on the Western Slope.', sources: [HIFLD] },
    'City of Trinidad': { lede: 'A city-owned utility near the New Mexico line.', sources: [HIFLD] },
    'High West Energy': { lede: 'A co-op based in Wyoming that reaches into northern Weld County.', stats: [['0.20 TWh', 'electricity sold in Colorado in 2025, 95% of it to industry']], sources: [S.e861, HIFLD] },
  });

  // ----------------------------------------------------------------- pipeline cards
  Object.assign(PIPECARDS, {
    'Colorado Interstate Gas Co': { lede: 'The most widespread pipeline system in Colorado. It links the gas fields of the Rockies to the Front Range cities and their power plants. Kinder Morgan owns it.',
      stats: [['Interstate', 'type of pipeline'], ['142 Bcf', 'natural gas delivered to all Colorado power plants in 2025, by every pipeline. Bcf means billion cubic feet', 1]],
      sources: [S.wikiCig, S.gasBurn, S.pipes] },
    'Rockies Express Pipeline': { lede: 'A pipeline built to carry Rocky Mountain gas east. Its system runs 1,679 miles, from near Meeker in north-west Colorado to Ohio, and was completed in 2009.', sources: [S.wikiRex, S.pipes] },
    'Rockies Express (Entrega)': { lede: 'The western leg of the Rockies Express system. It runs from the Meeker hub in the Piceance gas field north into Wyoming and east to the Cheyenne hub in Weld County.', sources: [S.wikiRex, S.pipes] },
    'TransColorado Gas Trans Co': { lede: 'An interstate pipeline that runs north to south down Colorado\'s western edge, between the Piceance gas field and the San Juan Basin.', sources: [S.pipes] },
    'Northwest Pipeline': { lede: 'An interstate pipeline that runs from the San Juan Basin north through western Colorado toward the Pacific Northwest.', sources: [S.pipes] },
    'Rocky Mountain Natural Gas Co': { lede: 'A pipeline system inside Colorado that delivers gas to mountain and Western Slope towns.', sources: [S.pipes] },
    'Tallgrass Interstate Gas Transmission': { lede: 'An interstate pipeline system on the plains of eastern Colorado, reaching into Kansas, Nebraska and Wyoming.', sources: [S.pipes] },
    'Cheyenne Plains Pipeline Co': { lede: 'An interstate pipeline that carries gas east from the Cheyenne hub across the plains toward Kansas.', sources: [S.pipes] },
    'Trailblazer Pipeline Co': { lede: 'An interstate pipeline that runs east from the Cheyenne hub along the Colorado-Nebraska line.', sources: [S.pipes] },
    'Pony Express Pipeline': { lede: 'A line drawn across north-east Colorado in federal gas pipeline map data.', sources: [S.pipes] },
    'Wyoming Interstate PL Co': { lede: 'An interstate pipeline that links the gas fields of north-west Colorado and Wyoming to the Cheyenne hub.', sources: [S.pipes] },
    'Questar Pipeline Co': { lede: 'An interstate pipeline system in north-west Colorado, Utah and Wyoming.', sources: [S.pipes] },
    'Southern Star Central Gas PL Co': { lede: 'An interstate pipeline that crosses northern Colorado in federal map data, on its way to Kansas.', sources: [S.pipes] },
    'Northern Natural Gas Co': { lede: 'An interstate pipeline in the Kansas and Oklahoma corner of this map. It does not enter Colorado on the map.', sources: [S.pipes] },
    'El Paso Natural Gas Co': { lede: 'An interstate pipeline that carries San Juan Basin gas south and west, toward Arizona and California.', sources: [S.pipes] },
    'Transwestern Gas Co': { lede: 'An interstate pipeline that carries San Juan Basin gas south into New Mexico.', sources: [S.pipes] },
    'Questar Southern Trails Line': { lede: 'An interstate pipeline drawn west from the San Juan Basin in federal map data.', sources: [S.pipes] },
    'Public Service Co of NM': { lede: 'Gas lines in northern New Mexico, just south of the Colorado line.', sources: [S.pipes] },
  });

  // ----------------------------------------------------------------- line cards (names from OpenStreetMap)
  LINECARDS.push(
    [/Power Pathway/, { title: 'Colorado\'s Power Pathway', lede: 'A segment of the new 345-kilovolt loop that Xcel Energy is building around the eastern plains, to carry wind and solar power to the Front Range.',
      stats: [['345 kV', 'voltage'], ['550 miles', 'length of the whole project, as described by state regulators'], ['$1.7 billion', 'cost'], ['3 of 5', 'segments in service in November 2026']],
      body: '<p class="gcap">OpenStreetMap carries no name for this line. This map labels it from its route and operator.</p>', sources: [S.wecc, S.pathway, S.hpprTie, OSM] }],
    [/Lamar HVDC/i, { title: 'Finney to Lamar', lede: 'The line between the converter station at Lamar and a substation in Kansas, on the eastern grid. The station lets power cross between the country\'s eastern and western grids.',
      stats: [['345 kV', 'voltage'], ['210 MW', 'what the tie can carry'], ['700 MW', 'what a proposed expansion would carry']], sources: [S.hpprTie, OSM] }],
    [/Craig to Ault/i, { lede: 'A 345-kilovolt line over the mountains from the Craig coal plant to the Ault substation north of Greeley. The federal Western Area Power Administration is listed as its operator.', sources: [OSM] }],
    [/Laramie River/i, { lede: 'A 345-kilovolt line from the Laramie River coal plant in Wyoming, off this map to the north.', sources: [OSM] }],
    [/Pronghorn|Shortgrass|Cheyenne Ridge/i, { lede: 'Part of the 345-kilovolt line Xcel Energy built to carry power from the Rush Creek and Cheyenne Ridge wind farms to the Missile Site substation east of Denver.', sources: [OSM, S.inv] }],
    [/Limon Wind/i, { lede: 'A 345-kilovolt line that carries power from the three Limon wind farms to the Missile Site substation.', sources: [OSM, S.inv] }],
    [/Tundra|Comanche/i, { lede: 'Part of the 345-kilovolt backbone between Pueblo and the south side of Denver. It was built to carry the output of the Comanche coal plant and now also carries solar power from Pueblo County.', sources: [OSM] }],
    [/Missile Site|Smoky Hill|Harvest Mile|Daniels Park|Waterton/i, { lede: 'One of the 345-kilovolt lines that bring power into the Denver area from the plains and the south.', sources: [OSM] }],
    [/Meeker|Rifle|Grand Junction|Montrose|Hesperus/i, { lede: 'Part of the 345-kilovolt backbone of western Colorado. It runs from the Craig coal plant south through Meeker, Rifle, Grand Junction and Montrose to the Four Corners.', sources: [OSM] }],
    [/Bonanza/i, { lede: 'A 345-kilovolt line between north-west Colorado and the Bonanza coal plant in Utah.', sources: [OSM] }],
    [/Gateway South/i, { lede: 'A 500-kilovolt line between Wyoming and Utah, listed under PacifiCorp. It crosses the north-west corner of Colorado.', sources: [OSM] }],
    [/Four Corners|San Juan|Waterflow/i, { lede: 'A line at the Four Corners plant in New Mexico, a hub where the grids of Arizona, New Mexico and Colorado meet.', sources: [OSM] }],
    [/Keota|Story|Archer|Sidney|Keystone|Gentleman|Stegall/i, { lede: 'A 345-kilovolt line of the co-op and public power systems of Wyoming and Nebraska, at the northern edge of this map.', sources: [OSM] }],
  );

  // ----------------------------------------------------------------- tour
  const LAY = ['plants', 'lines', 'pipes', 'cities', 'closed', 'rivers'];
  const ALL = [-109.4, 36.7, -101.7, 41.3];
  TOUR.push(
    { title: 'Three fuels, nearly level', text: 'Colorado generated 56.6 terawatt-hours of electricity in 2025. Natural gas made 32%, wind 30% and coal 25%. In 2010 coal made 68%. The panel shows where the power comes from and where it goes.', view: 'home', home: true, layers: LAY },
    { title: 'Coal with a closing date', text: 'Comanche, at Pueblo, is the largest coal plant. Its biggest unit broke down for a year in 2025 and 2026, so regulators let an older unit run past its closing date. Around it stand the state\'s largest solar farms, one of them built for the steel mill next door.', box: [-105.3, 37.85, -103.8, 38.75], zoom: 1.6, select: 'comanche', layers: ['plants', 'closed', 'lines', 'cities'] },
    { title: 'The Yampa Valley', text: 'Craig and Hayden burn coal dug a few miles away. One unit at Craig was due to close at the end of 2025. Federal emergency orders have kept it available since, over the objections of its owners and the state. One of the two mines that fed Craig stopped producing in 2025.', box: [-108.5, 39.9, -106.6, 40.9], zoom: 1.4, select: 'craig', layers: ['plants', 'closed', 'lines', 'pipes', 'rivers'] },
    { title: 'Wind on the plains, by night', text: 'This is the Night view. Solar farms are faded because they make nothing after dark. Wind farms on the eastern plains made 30% of Colorado\'s electricity in 2025, about as much as natural gas. Rush Creek, shown here, made the most.', box: [-105.2, 38.3, -101.9, 40.2], zoom: 1.0, season: 'winter', select: 'rushcreek', layers: ['plants', 'lines'] },
    { title: 'A new loop of wire', text: 'The wind is far from the cities. Xcel Energy is building a 550-mile loop of 345-kilovolt line around the plains, at a cost of $1.7 billion. Three of its five segments were in service in November 2026. At Lamar, a converter station links Colorado to the separate grid of the eastern United States.', box: [-104.6, 38.6, -102.2, 40.5], zoom: 1.25, select: 'pathway', layers: ['plants', 'lines'] },
    { title: 'Gas, and a plant that was nuclear', text: 'The brown lines are gas pipelines. Colorado is the eighth-largest gas-producing state and burns less than a tenth of its gas in power plants. Fort St. Vrain, the largest gas plant, was once the state\'s only nuclear plant.', box: [-105.6, 39.5, -103.9, 40.8], zoom: 1.5, select: 'fsv', layers: ['plants', 'pipes', 'lines', 'cities'] },
    { title: 'Water power in a dry year', text: 'Hydropower made 3% of Colorado\'s electricity in 2025. A third of it came from three federal dams on the Gunnison River. In August 2026 the reservoir behind Blue Mesa Dam was less than a quarter full.', box: [-108.3, 38.05, -106.6, 38.95], zoom: 1.7, select: 'bluemesa', layers: ['plants', 'rivers', 'lines'] },
    { title: 'What uranium left behind', text: 'Western Colorado supplied uranium for the first atomic bombs and later for reactors. The mill site at Uravan went through a 20-year federal cleanup. The federal energy agency says no uranium has been mined in the state since 2005. A small coal plant here closed in 2019.', box: [-109.4, 37.8, -107.6, 38.9], zoom: 1.6, select: 'uravan', layers: ['plants', 'closed', 'pipes', 'rivers'] },
    { title: 'Who uses it', text: 'Homes, businesses and industry each take a large share. Xcel Energy sells half of all the electricity sold in Colorado. It says data centers and other large new customers account for two-thirds of the growth it expects.', box: [-105.6, 39.2, -104.2, 40.3], zoom: 1.6, select: 'denver', layers: ['cities', 'plants', 'lines'] },
    { title: 'What comes out of the stacks, and what is next', text: 'Each gray circle is a plant\'s carbon dioxide for 2023. Colorado\'s power plants released 25.6 million metric tons in 2024, down 37% from 2010. Dotted markers are planned plants: mostly solar, wind and batteries. Now explore: click any plant, line, pipeline or patch of open country.', box: ALL, select: 'comanche', layers: ['plants', 'emit', 'closed', 'planned', 'cities'] },
  );

  K.finish({ budget: BUDGET, hud: HUD, about: ABOUT, features: FEATURES, browse: BROWSE, tour: TOUR, areas: AREAS, pipeCards: PIPECARDS, lineCards: LINECARDS,
    kinds: { umine: ['pipes', 'mine', 'Uranium'], gasfield: ['pipes', 'pipe', 'Gas field'] },
    riverLede: 'A river. Dams on Colorado\'s rivers make hydropower, and power plants draw cooling water from rivers and reservoirs.' });
})();
