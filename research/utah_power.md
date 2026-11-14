# Utah power: research fact sheet (generation, fuel chains, grid, users, pollution)

Compiled 2026-11-13 for the "Utah Power" map (power/content/ut.js). Format follows `arizona_power.md`.

**Conventions**
- TWh = terawatt-hour = 1 million MWh. MW = megawatt (capacity). Bcf = billion cubic feet. AF = acre-foot. PSC = Utah Public Service Commission. RMP = Rocky Mountain Power (PacifiCorp's name in Utah, Wyoming and Idaho). IPP = Intermountain Power Project. IPA = Intermountain Power Agency. LADWP = Los Angeles Department of Water and Power. UAMPS = Utah Associated Municipal Power Systems. UMPA = Utah Municipal Power Agency.
- Evidence tags: **[P]** = I opened the document and read the number. **[P-data]** = I summed rows of a downloaded federal data file by script (the rows are the agency's, the sum is mine). **[S]** = seen only in a search-engine summary; not used on the map unless later opened. **[derived]** = my arithmetic from tagged figures. **unverified** = could not confirm.
- Federal files used (downloaded 13 Nov 2026):
  - EIA-923 final 2025 (`EIA923_Schedules_2_3_4_5_M_12_2025_Final.xlsx`: Page 1 generation and fuel, Page 5 fuel receipts; `Schedule_8 ... 8D Cooling System Information`): https://www.eia.gov/electricity/data/eia923/
  - EIA-861 final 2025 (`Sales_Ult_Cust_2025.xlsx`, `Operational_Data_2025.xlsx`): https://www.eia.gov/electricity/data/eia861/
  - EIA-860M, September 2026 inventory: https://www.eia.gov/electricity/data/eia860m/
  - EIA State Electricity Profile, Utah, data year 2024, workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20UT.xlsx (page https://www.eia.gov/electricity/state/utah/). The 2025 profile was not posted on 13 Nov 2026.
  - EIA state history: https://www.eia.gov/electricity/data/state/ (`annual_generation_state.xls`, `emission_annual.xlsx`)
  - EIA small-scale solar: https://www.eia.gov/electricity/data/eia861m/ (`small_scale_solar_2025.xlsx`)
  - EIA coal mine map layer (2020 mine locations): https://www.eia.gov/maps/layer_info-m.php
- State source used throughout: Utah Geological Survey / Kem C. Gardner Policy Institute, "Utah's Energy Landscape" research brief, April 2026 (author Michael Vanden Berg), https://d36oiwf74r1rap.cloudfront.net/wp-content/uploads/2026/04/ERG2026-Energy-RB-Apr2026.pdf . Called "UGS brief" below. All [P].
- Web searching stopped part-way through (the session's shared search allowance ran out). Items that could not be chased because of that are listed in section 10.

---

## 1. Statewide budget

### 1a. Where it comes from: net generation in Utah, plants of 1 MW and larger

| Fuel | 2025 TWh | 2025 share | 2024 TWh | 2010 TWh | Tag |
|---|---|---|---|---|---|
| Coal (bituminous 17.68, subbituminous 0.11, waste coal 0.22) | 18.01 | 47.2% | 15.97 | 34.06 | 2025 [P-data] EIA-923; 2024, 2010 [P] state history |
| Natural gas | 11.52 | 30.2% | 11.64 | 6.46 | same |
| Solar farms | 6.62 | 17.4% | 5.31 | 0 | same |
| Wind | 0.79 | 2.1% | 0.75 | 0.45 | same |
| Hydro | 0.53 | 1.4% | 0.76 | 0.70 | same |
| Geothermal | 0.47 | 1.2% | 0.45 | 0.28 | same |
| Other (waste heat 0.13, landfill gas 0.05, oil 0.03, other gas 0.002) | 0.21 | 0.5% | 0.25 | 0.32 | same |
| **Total** | **38.14** | 100% | **35.13** | **42.25** | same |
| Small-scale (rooftop) solar, EIA estimate, not in the total | 1.11 | | 0.99 | | [P-data] `small_scale_solar_2025.xlsx`; 2024 [P] profile table 19 |

Notes
- The UGS brief (April 2026) gives a preliminary 2025 total of 37,445 GWh with solar 5,565 GWh (15%). The final EIA-923 file gives 38,144 GWh and solar 6,619 GWh. The map uses the final federal file. Coal (18,007 GWh) and gas (11,523 vs 11,519) agree between the two.
- History [P, state history file]: total 46.58 TWh in 2008 (coal 38.02), 42.25 in 2010, 33.50 in 2023 (a 27-year low per the UGS brief [P]). Coal share 81.6% in 2008 [derived], 80.6% in 2010 [derived], 47.2% in 2025.
- By balancing area, 2025 [P-data]: PacifiCorp East 32.12 TWh; LADWP (Intermountain) 5.40; Western Area Power Administration 0.60.
- Coal capacity factors rose from 45% in 2024 to 52% in 2025 [P, UGS brief]. Since 2016 the coal plants ramp down at midday when solar output is high [P, UGS brief].

### 1b. Where it goes: EIA State Electricity Profile 2024, Table 10 [P]

| Item | 2024 TWh | Share of total supply |
|---|---|---|
| Generated in Utah | 35.13 | 94.5% |
| Net imports from other states | 2.03 | 5.5% |
| **Total supply** | **37.17** | 100% |
| Homes (residential sales) | 11.83 | 31.8% |
| Businesses (commercial sales) | 14.13 | 38.0% |
| Industry (industrial sales) | 8.68 | 23.4% |
| Transportation sales | 0.05 | 0.1% |
| Direct use by plant owners | 0.59 | 1.6% |
| Estimated losses | 1.62 | 4.4% |
| Unaccounted | 0.27 | 0.7% |

- Utah was a net importer in 2023 (1.90 TWh) and 2024 (2.03 TWh). It was a net exporter of 3.69 TWh in 2022, 5.61 in 2018, 8.70 in 2013 and 12.82 in 2009 [P, Table 10]. The UGS brief: Utah used 66% of what it generated before 2016 and 97% in the last three years [P].
- "Net" hides large gross flows: Intermountain's output is scheduled to California on a direct-current line (5.40 TWh generated in the LADWP balancing area in 2025 [P-data]), while Rocky Mountain Power brings in power from PacifiCorp plants in Wyoming.
- 2025 retail sales, EIA-861 final [P-data]: 35.29 TWh to 1,465,878 customers. Residential 11.92, commercial 14.75, industrial 8.57, transportation 0.05. Residential customers 1,305,508.
- 2024 profile [P]: average price 9.97 cents/kWh (rank 41); residential 12.22. Net summer capacity 10,277 MW. CO2 21.1 million metric tons; 1,322 lb/MWh (8th highest).

### 1c. Capacity, September 2026 (EIA-860M operating generators in Utah, nameplate) [P-data]
Solar 3,454 MW; gas combined cycle 3,047; coal 3,045; batteries 1,071 MW / 3,321 MWh; gas turbines 642; wind 390; hydro 264; gas steam 252; geothermal 120; gas engines 113. Total 12,481 MW.
Planned [P-data]: solar 1,786 MW; pumped storage 1,000; batteries 706; geothermal 88; gas 7.5.
Retired 2025 [P-data]: Intermountain coal units 1 and 2 (820 MW each; EIA lists retirement months October and November 2025); US Magnesium gas turbines (48 MW, December 2025).

### 1d. Emissions trend (EIA `emission_annual.xlsx`, total electric power industry, metric tons) [P]
| Year | CO2 | of which coal | SO2 | NOx |
|---|---|---|---|---|
| 2005 | 36.32M | 35.53M | 31,413 | 63,816 |
| 2010 | 35.52M | 32.66M | 25,495 | 68,088 |
| 2020 | 26.30M | 22.14M | 7,173 | 28,148 |
| 2023 | 20.62M | 15.60M | 4,363 | 20,575 |
| 2024 | 21.12M | 16.06M | 5,004 | 21,168 |
2024 vs 2010: CO2 down 41% [derived]; SO2 down 80%; NOx down 69%.

---

## 2. Candidate places (plant numbers are 2025 EIA-923 [P-data] unless noted; capacity from EIA-860M; coordinates from EIA-860M unless marked approx)

### 2a. Coal
| Place | Numbers | Notes and sources |
|---|---|---|
| Intermountain Power Project, Millard Co. (plant 6481) | 2025: 4.80 TWh (coal 4.20, gas 0.59, oil 0.01). Coal burned 1.95M tons. Coal delivered 1.14M tons by rail: Sufco 0.42M, Skyline 0.28M, Emery 0.21M, Bear Canyon/Gentry 0.06M, Black Thunder (Wyoming) 0.17M. Cooling water consumed 7,292 AF. Two coal units 820 MW each, 1986-87 | Coal units stopped generating 26 Nov 2025 (the day before Thanksgiving) and are "laid up in an operable condition" [P] https://www.heraldextra.com/news/2025/dec/05/ipp-coal-fired-units-are-no-longer-operating-as-state-government-searches-for-buyers/ . Monthly EIA data show coal generation through November and gas from November [P-data]. New gas units: EIA lists two combined-cycle blocks of 546.6 MW, October and December 2025 [P-data]. IPA: 840 MW net, 30% hydrogen at start-up, 100% by 2045; owner IPA (23 Utah municipalities), operator LADWP [P] https://www.ipautah.com/ipp-renewed/ . Direct-current line about 490 miles to Adelanto, California; two 345 kV lines about 50 miles to Mona; one 230 kV line 144 miles to Gonder, Nevada [P] https://www.ipautah.com/about-ipa/project-history-and-location/ . About 98% of the output went to California [P] https://www.ksl.com/article/51196377/ . California contracts now run to 2077 [P, heraldextra Dec 2025]. |
| IPP coal units and state law | 2024: the Legislature required IPA to offer the units to the state. 2025: a law forbade IPA from disconnecting the coal units' switchyard equipment; IPA kept one unit connected. State got 14 responses to a request for information. March 2026: no buyer; a 2026 bill provides a special district able to issue bonds [P] https://www.heraldextra.com/news/2026/mar/24/utah-may-turn-ipp-area-into-a-special-district-to-accelerate-sale-of-coal-generators-there/ . 31 Jul 2026: IPA issued a request for proposals to buy, lease or use the units; any sale needs state approval and the state holds an option [P] https://www.ipautah.com/wp-content/uploads/2026/08/Notice-of-Availability-of-RFP-IPA-Coal-Unit-Sale.pdf | No result of the request for proposals found. Capacity is given as 1,800 or 1,900 MW in press; EIA nameplate is 1,640 MW |
| Hunter, Emery Co. (6165) | 2025: 6.83 TWh, the most of any Utah plant. Coal burned 3.14M tons. Delivered 3.55M tons, all by truck: Sufco 2.80M, Emery 0.60M, Bear Canyon/Gentry 0.15M. Cooling water 12,710 AF. 1,472 MW, 1978-83 | PacifiCorp's 2025 resource plan has no retirement date; assumes not before 2045. The 2023 plan had Hunter 2042 and Huntington 2036 [P] https://www.yahoo.com/news/pacificorp-extends-life-utah-coal-221157429.html (Utah News Dispatch). Ash: 17.6M cubic yards landfill; lithium 210 times, sulfate 62 times the federal level [P] https://earthjustice.org/feature/coal-ash-states/utah |
| Huntington, Emery Co. (8069) | 2025: 4.26 TWh. Coal burned 1.95M tons. Delivered 1.91M tons by truck: Skyline 1.20M, Sufco 0.71M. Cooling 8,412 AF. 1,016 MW, 1974-77 | Ash 7.7M cubic yards; lithium 94 times [P, Earthjustice] |
| Bonanza, Uintah Co. (7790) | 2025: 2.54 TWh. Coal burned 1.29M tons; delivered 1.42M tons by rail from the Deserado mine, Colorado. Cooling 3,066 AF. 500 MW, 1986 | Deseret owns the mine (35 miles away) and an electrified railroad. A 2015 settlement capped coal at 20M tons unless nitrogen-oxide controls (SCR) are added. Deseret says SCR plus 12M more tons lets it run to at least 2041 or 2042 [P] https://sltrib.com/news/environment/2024/05/04/utahs-4th-largest-power-plant-asks . PSC had issued a certificate for the SCR project and approved its financing on 15 Jul 2026 [P] https://pscdocs.utah.gov/electric/26docs/2650604/3461242650604,2602204,2606603,2602803,2603004,and2603103o7-15-2026.pdf . Ash 8.4M cubic yards [P, Earthjustice] |
| Sunnyside Cogeneration, Carbon Co. (50951) | 2025: 0.22 TWh from 235,483 tons of waste coal. 58 MW, 1993 | Turbine failure in fall 2025; shut since; unclear when it returns [P, UGS brief] |
| Carbon plant, Helper (3644), closed 2015 | 189 MW, 1954-57 | EIA retired list [P-data] |
| Kennecott power plant, Magna (56163) | Coal units retired 2016 and 2019 (182 MW). Now 31.8 MW from smelter waste heat plus 30 MW solar (2024-25) | [P-data] EIA-860M |
| Jim Bridger, Wyoming (8066), in frame | 2025: 7.60 TWh (coal 4.88, gas 2.71). Units 1 and 2 now gas | PacifiCorp [P-data] |
| Naughton, Wyoming (4162), in frame | 2025: 2.28 TWh (coal 1.69, gas 0.60) | PacifiCorp [P-data] |

### 2b. Natural gas (2025)
| Plant | Numbers |
|---|---|
| Lake Side, Vineyard (56237), PacifiCorp | 6.05 TWh; 41.7 Bcf delivered; cooling 3,982 AF; 1,247 MW, 2007 and 2014 |
| Currant Creek, Mona (56102), PacifiCorp | 2.80 TWh; 19.9 Bcf; 567 MW, 2005-06; reports zero cooling water (air-cooled) |
| Nebo, Payson (56177), UAMPS | 0.77 TWh; 140 MW |
| West Valley (55622), UMPA | 0.40 TWh; 4.0 Bcf listed as bought from Kern River; 217 MW |
| Gadsby, Salt Lake City (3648), PacifiCorp | 0.23 TWh; 3.7 Bcf; 433 MW; steam units 1951-55, turbines 2002 |
| Millcreek, St. George (56253) | 0.15 TWh; 80 MW |
Gas burned by Utah plants 2025: 86.8 Bcf [P-data]. Receipts reported: 73.6 Bcf, of which 65.3 Bcf listed the seller as "Dominion" (the gas utility's former name; see 3b).

### 2c. Hydro
Flaming Gorge (6405): 0.32 TWh in 2025; 152 MW; 1963. Glen Canyon Dam (Arizona, 153, in frame): 2.75 TWh in 2025. Cutler (3646): 0.04 TWh, 30 MW, 1927. All Utah hydro 0.53 TWh.
- Flaming Gorge 2026 [P] https://www.usbr.gov/newsroom/news-release/5326 (17 Apr 2026): Reclamation intends to release 660,000 AF to 1 million AF from Flaming Gorge between April 2026 and April 2027 to hold up Lake Powell; reservoir then 3.1 million AF, 83% full; Powell's April study projected it below 3,490 ft (minimum power pool) by August 2026 without action. Releases began 23 Apr 2026 [P] https://www.usbr.gov/ColoradoRiverBasin/dcp/droa.html .
- Glen Canyon levels: from `arizona_power.md` (Reclamation daily levels 12 Nov 2026: 3,539.64 ft; record low 3,519.91 ft mid-August 2026; turbines stop below 3,490 ft) [P there].

### 2d. Solar and batteries
Faraday Solar (69748), Utah Co.: 525 MW, 2025; 0.61 TWh in its first partial year; supplies Meta's Eagle Mountain data center through a 20-year contract with RMP; 1.2 million panels [P] https://www.heraldextra.com/news/2025/nov/21/rays-of-power-utahs-largest-solar-plant-becomes-operational-set-to-power-eagle-mountain-data-center/ . Faraday Energy Storage (69424) 150 MW / 600 MWh, Sept 2026.
Green River Energy Center (67501), Emery Co.: 400 MW solar + 400 MW / 1,600 MWh battery, June 2026 [P-data].
Appaloosa Solar I (65678), Iron Co.: 200 MW, 0.54 TWh. Escalante I-III (59387-9), Beaver Co.: 240 MW, 0.63 TWh together. Hornshadow I+II (67497, 67511) beside Hunter: 300 MW. Red Mesa (66404), Navajo Nation: 72 MW, 0.19 TWh, NTUA. Dominguez Energy Storage (68596), Salt Lake: 200 MW / 800 MWh, Dec 2025.
Batteries: 1,071 MW / 3,321 MWh, all but 1 MW opened Dec 2025 or later [P-data].

### 2e. Wind
Milford Wind I+II (57079, 57107): 306 MW; 0.60 TWh; 2009 and 2011; a 345 kV line owned by IPA connects it to the Intermountain switchyard (federal line file) [P-data]. Latigo (59965), Monticello: 62 MW, 0.15 TWh. Spanish Fork (56751): 19 MW. All Utah wind 0.79 TWh.

### 2f. Geothermal
Blundell (299), PacifiCorp: 38 MW, 0.27 TWh, 1984. Cove Fort (58570), Ormat: 25 MW, 0.14 TWh. Thermo (57353): 14 MW, 0.06 TWh.
Cape Station (68068), Fervo Energy, Beaver Co.: first 33 MW unit synchronized 24 Sep 2026, commercial 30 Sep 2026; Phase I about 100 MW in three units, the other two due by 1 Jan 2027; a further 400 MW under construction for 2028 [P] https://www.thinkgeoenergy.com/fervo-energy-announces-commercial-operation-of-first-geothermal-power-plant-in-cape-station-utah/ . EIA-860M: 43 MW operating, 86 MW more planned January 2027 [P-data]. Customers (Southern California Edison, Google 396 MW) [S], not used.

### 2g. Nuclear (none operating)
- UAMPS and NuScale ended the Carbon Free Power Project (planned for Idaho) on 8 Nov 2023 for lack of subscribers [P] https://www.nuscalepower.com/press-releases/2023/utah-associated-municipal-power-systems-and-nuscale-power-agree-to-terminate-the-carbon-free-power-project (date from the release; the headline year 2023 is in the URL).
- TerraPower, Utah Office of Energy Development and Flagship Companies signed a non-binding memorandum (Aug 2025) to pick a Utah site for a Natrium plant: 345 MW reactor, storage can lift output to 500 MW; preliminary sites were due by end of 2025 [P] https://terrapower.com/utah-office-of-energy-development-terrapower-and-flagship-companies-sign-mou-to-explore-siting-of-advanced-nuclear-reactor . No site announcement found. PacifiCorp is not named in the memorandum. The first Natrium plant, Kemmerer Unit 1 in Wyoming (EIA 68635, planned 2030, 500 MW, owner "US SFR Owner LLC"), is in the map frame [P-data].
- Brigham City: state, city, Hi Tech Solutions and Holtec announced a plan (Nov 2025) for Holtec SMR-300 reactors, manufacturing and training; reactor count not stated; "more than $750 million" private investment raised [P] https://www.ans.org/news/2025-11-19/article-7549/operation-gigawatt-looks-to-brigham-city-holtec-and-hi-tech-solutions/
- Green River (Blue Castle): revived in 2026 for two to four Holtec SMR-300s [P] https://www.ans.org/news/2026-07-14/article-8202/ans-webinar-looks-to-utahs-nuclear-future/
- Utah San Rafael Energy Lab, Emery Co.: Valar Atomics' Ward 250 test reactor reached criticality (zero-power) in 2026, the first in the federal pilot program outside a national laboratory [P] https://www.ans.org/news/tag-utah/ . Month (June 2026) [S].
- Operation Gigawatt: state plan to double energy production by 2034 [P, ANS Nov 2025]; "double Utah's electricity generation over a ten-year period" [P, UGS brief].
- 2026 session: Nuclear Energy Regulatory Office created in the Department of Environmental Quality [P] https://utahcleanenergy.org/?p=11343 .

---

## 3. Fuel supply chains

### 3a. Coal [P, UGS brief unless noted]
- Utah mined 8.5M tons in 2025 (7.4M in 2024; 7.0M in 2023, a 45-year low; 24.5M a year in the 2000s). Sufco and Skyline together 6.9M tons, 81%. Fossil Rock (opened 2024) 0.55M; Emery 0.94M; Gentry 0.14M.
- Five mines were active in 2025, the fewest in nearly 150 years. Wolverine Fuels owns all active mines after buying the Emery mine in early 2026.
- Skyline: in January 2026 miners crossed an unknown fault; water flooded the mine and shut it. Unclear if it reopens. 2026 production forecast 5 to 6M tons.
- Lila Canyon: fire began 20 Sep 2022; never reopened; "idled indefinitely"; 150 layoffs January 2024 [P] https://www.sltrib.com/news/2023/12/21/utahs-lila-canyon-mine-is-idled/ . Its loss caused a regional coal shortage in 2024 [P, UGS brief].
- Use: Utah power plants burned 8.7M tons in 2025 (98% of Utah coal demand). Imports from Colorado and Wyoming 1.6M tons (3.1M in 2024). Shipments to other states 175,000 tons (from 1.7M in 2021). Overseas exports about 900,000 tons in 2025 (937,000 in 2024; 2.8M a year average 2017-2023).
- Prices: mine price $63/ton in 2025 ($80 in 2024, $45 in 2023). Delivered to utilities $78.
- Plant-by-plant mine origins: EIA-923 Page 5 [P-data], in 2a. Hunter and Huntington coal arrives by truck. Intermountain's by rail.
- Mine coordinates: EIA coal mine layer (2020) [P]: Sufco 38.913, -111.417; Skyline #3 39.677, -111.233; Lila Canyon 39.426, -110.341; Emery 38.873, -111.235; Deserado (Colorado) 40.169, -108.726.

### 3b. Natural gas and oil
- Utah gas production 329 Bcf in 2025 (peak 491 Bcf in 2012; 240 Bcf in 2021); net exporter again in 2024 and 2025 [P, UGS brief]. Power plants burned 86.8 Bcf [P-data].
- Crude oil: record 67.9M barrels in 2025, 93% from the Uinta Basin; about half trucked to five Salt Lake City refineries, half trucked to Price and loaded on trains to the Gulf Coast; record 35M barrels shipped out [P, UGS brief].
- Pipelines in the federal map file: Questar Pipeline (98 segments), Northwest Pipeline, Kern River, Overland Trails, Colorado Interstate, Rocky Mountain Natural Gas, Overthrust, Wyoming Interstate, Ruby, Questar Southern Trails, Jonah [P-data]. Corporate facts (Questar Pipeline is now MountainWest, owned by Williams; the gas utility Questar/Dominion is now Enbridge Gas Utah; Kern River is 1,700 miles from Wyoming to California) are general knowledge, not opened. The 2026 legislative summary does name the gas utility as "Enbridge" [P, utahcleanenergy.org].
- The Stratos data center project plans to draw on the Ruby Pipeline [S]; county commissioner: "near a natural gas pipeline" [P, UPR].

### 3c. Uranium
- White Mesa Mill, Blanding (Energy Fuels): expected about 1.6M pounds of uranium oxide January-June 2026 (guidance 1.5 to 2.5M for the year); ore from Pinyon Plain (Arizona) and La Sal (Utah); ore processing paused end of June, to resume in the fourth quarter; also separates rare earths [P] company release 11 Jun 2026 via https://wwww.stockwatch.com/News/Item/Z-C!EFR-3831479/C/EFR?fmt=orig . "Only operating conventional mill": the company's description [S]; the Interior Department says Shootaring Canyon is "one of only three licensed, permitted, and constructed uranium mills in the U.S." [P]. Coordinates approx 37.535, -109.503 (between Blanding 37.623 and White Mesa 37.468, Wikipedia coordinates [P]).
- Velvet-Wood mine, Lisbon Valley (Anfield Energy): Interior approved it in May 2025 after an expedited review; three acres of new surface disturbance; Anfield also owns the Shootaring Canyon mill near Ticaboo [P] https://www.doi.gov/pressreleases/interior-department-approves-utah-uranium-vanadium-mine-strengthen-us-mineral . 2026 construction milestones (first blast August 2026, production target end of 2026, mill restart 2027) [S], not used. Coordinates approx.
- Where US reactor fuel comes from: see `arizona_power.md` (EIA Uranium Marketing Annual 2025) [P there].

---

## 4. Transmission and markets
- Federal line file (HIFLD) has Utah's 345 kV network: Huntington/Emery to Mona, Spanish Fork, Sigurd and Pinto; Mona-Camp Williams-Terminal-Ben Lomond-Populus (Idaho); Sigurd-Three Peaks-Red Butte-Harry Allen (Nevada); Bonanza-Mona; Intermountain-Mona; Glen Canyon lines. Direct-current line Intermountain-Adelanto (owner LADWP) [P-data].
- Gateway South: 416 miles, 500 kV, Aeolus (Medicine Bow, Wyoming) to Clover (Mona); in service December 2024. Sigurd-Red Butte (345 kV) May 2015 [P] PacifiCorp 2026 progress report to WECC https://www.wecc.org/sites/default/files/documents/progress_report/2026/PacifiCorp%202026%20APR.pdf . Not in the federal line file (too new); it is drawn from OpenStreetMap as "Gateway South Transmission Line".
- TransWest Express: 405-mile, 3,000 MW, 525 kV direct-current line from Wyoming to central Utah, then a 278-mile, 1,500 MW, 500 kV line to southern Nevada; grading of the Desert Mountain Substation at Delta in 2025; first elements planned in service in 2031 [P] https://www.wecc.org/sites/default/files/documents/progress_report/2026/TWE%202026%20APR.pdf . Construction began 2023 [P] https://www.transwestexpress.net/ . (RTO Insider "2029" [S], superseded.)
- Markets: PacifiCorp and the California grid operator launched the Extended Day-Ahead Market on 1 May 2026 [P] https://www.caiso.com/about/news/news-releases/edam-is-live-pacificorp-and-caiso-successfully-launch-new-market-may-1 . PacifiCorp has traded in the real-time market since 2014 [P, same].
- PacifiCorp system summer peak 2025: 11,263 MW (six states) [P-data, EIA-861 operational]. No Utah-only peak found.

## 5. Users and utilities (EIA-861 2025 [P-data])
| Utility | 2025 sales TWh | Customers | Notes |
|---|---|---|---|
| Rocky Mountain Power (PacifiCorp) | 27.67 | 1,079,617 | 78.4% of Utah sales [derived]. Investor-owned (Berkshire Hathaway Energy: general knowledge). PSC sets rates |
| Provo | 0.78 | 40,813 | peak 184 MW; UMPA member |
| Dixie Power (Dixie Escalante) | 0.72 | 31,630 | peak 222 MW |
| St. George | 0.70 | 33,831 | peak 214 MW |
| Moon Lake Electric | 0.59 | 18,398 | 0.33 TWh industrial (oil field) |
| Lehi | 0.49 | 31,153 | |
| Logan | 0.44 | 22,012 | |
| Murray | 0.39 | 20,962 | |
| Navajo Tribal Utility Authority (Utah) | 0.34 | 2,055 | 0.31 TWh industrial |
| Spanish Fork 0.32; Springville 0.29; Bountiful 0.29; Garkane 0.25 (14,487); Heber 0.23 | | | |
Wholesale agencies [P-data, operational file]: UAMPS summer peak 804 MW, generated 1.04 TWh, bought 2.54 TWh. UMPA peak 324 MW. Intermountain Power Agency net generation 4.80 TWh.
- Rates: RMP asked for $393.7M (18.1%); PSC ordered 4.7% in 2025, a quarter of the request; RMP went to the Utah Supreme Court; a settlement filed June 2026 adds $93M (4.2%, $3.44 a month for a typical home) from 1 July 2026 with no new rate case until 2028 [P] https://www.kpcw.org/state-regional/2026-07-06/rocky-mountain-powers-utah-rate-conflict-may-be-settled-with-an-additional-4-2-hike . PSC approval in August 2026 [S].
- Large loads: SB 132 (2025) lets a customer of 100 MW or more [S for threshold] contract with other generators if it and the utility cannot agree within 90 days [P] https://www.yahoo.com/news/changes-coming-rocky-mountain-power-120443301.html . First agreement under it announced February 2026 [P] https://www.utahbusiness.com/press-releases/2026/02/06/rocky-mountain-power-advances-utah-operation-gigawatt-landmark-energy-agreement .
- Data centers: Meta, Eagle Mountain (Faraday contract) [P]. Delta Gigasite (Creekstone Energy): 10 GW at full build, 1,143 acres, 9 miles south-east of Delta, gas-fired on site, county permits summer 2025, gas works under construction [P] https://sltrib.com/news/2026/09/09/delta-gigasite-worlds-largest-data . Joule Capital Partners: 4,000 acres north-west of Fillmore, more than 4 GW of on-site gas engines, 1.1 GWh battery, broke ground November 2025 [P] https://www.enr.com/articles/61225-joule-caterpillar-partner-to-deliver-utah-4-gw-power-and-hyperscale-computing-campus and https://sanpetemessenger.com/?p=41402 . Stratos, Hansel Valley, Box Elder Co.: 40,000 acres, 9 GW, own gas plant, county consent by unanimous vote, expected to take 10 years [P] https://www.upr.org/politics/2026-05-06/box-elder-data-center . NSA data center at Bluffdale: location only (Wikipedia coordinates [P]); the 65 MW figure is unverified and not used.
- Commercial sales rose 4.1% in 2025, "most likely the result of data center build outs" [P, UGS brief].

## 6. Pollution
- CO2 and trend: 1d. Plant-level: eGRID 2023 in the dataset.
- Ozone: EPA moved the Northern Wasatch Front to "serious" in December 2024 (deadline missed August 2024); on 21 Apr 2026 EPA proposed to repeal that and keep "moderate", finding the area would have met the limit but for emissions from outside the US; covers Salt Lake and Davis counties and parts of Weber and Tooele [P] https://www.standard.net/news/local/2026/apr/22/focused-on-pollution-from-far-away-feds-propose-raising-northern-utahs-ozone-ranking/ . No final rule found.
- Winter inversions: a typical winter has five to six multi-day inversion episodes and 18 days above the federal fine-particle standard [P via page summary] https://deq.utah.gov/air-quality/inversions .
- Coal ash: six plant sites; groundwater above federal levels at all five that monitor; volumes in 2a [P, Earthjustice].
- Regional haze: only 2016-2020 history found [S]; not used.

## 7. Policy
- No binding renewable standard found in sources opened; not stated on the map.
- Coal: laws of 2024 and 2025 on Intermountain (2a). PacifiCorp cited "changes ... in regulatory requirements at the state and federal levels" for dropping retirement dates [P].
- Regulator: PSC (appointed commissioners: general knowledge) sets RMP rates. Municipal utilities and co-ops set their own.

## 8. Current conditions, autumn 2026
Intermountain coal idle since Nov 2025, sale process open. Skyline mine flooded. Cape Station commercial 30 Sep 2026. Flaming Gorge being drawn down for Powell. RMP settlement. Ozone proposal pending. Three very large gas-powered data center campuses permitted.

## 9. Tour ideas
1 budget; 2 Castle Country coal (Hunter, Huntington, mines, trucks); 3 Intermountain: coal off, gas on, line to Los Angeles, state law; 4 gas on the Wasatch Front; 5 solar and batteries (night); 6 Milford: wind, solar, three kinds of geothermal; 7 dams (Flaming Gorge feeding Powell); 8 uranium and nuclear plans; 9 data centers building their own gas plants; 10 CO2 and what next.

## 10. Least sure
- Whether the PSC approved the RMP settlement (reported August 2026, [S]). Card says "filed".
- Whether the 2026 special-district bill was signed. Card says "a 2026 bill provides for".
- Result of the IPA request for proposals (none found).
- TerraPower Utah site (none found); PacifiCorp's role in a Utah Natrium plant (not in the memorandum).
- White Mesa Q4 2026 restart; actual first-half output (release was a forecast).
- Hand-placed coordinates marked "approximate" on cards: White Mesa Mill, Velvet-Wood, Delta Gigasite, Joule campus, Stratos, hydrogen caverns, TransWest terminal, nuclear proposals.
- Pipeline ownership changes (general knowledge, not opened).

## 11. Used on the map: verification log

### Opened and confirmed
| Figure | What I opened |
|---|---|
| All 2025 generation, fuel burned, coal and gas deliveries, cooling water | EIA-923 final 2025 workbooks, summed by script |
| 2024 supply and disposition, sales by sector, net imports, history of net exports | EIA Utah profile workbook, Tables 8 and 10 |
| CO2, SO2, NOx 2005-2024 | EIA `emission_annual.xlsx` |
| Utility sales, customers, peaks 2025 | EIA-861 2025 |
| Capacity, batteries, planned, retired | EIA-860M September 2026 |
| Utah coal production, mines, Skyline flood, exports, prices, oil and gas production, Sunnyside | UGS brief, April 2026 (PDF read in full) |
| [S] IPP coal idle since Nov 2025, 14 responses, law of 2025 | opened heraldextra 5 Dec 2025 and 24 Mar 2026: confirmed |
| [S] IPA request for proposals 31 Jul 2026 | opened the IPA notice PDF: confirmed |
| [S] PacifiCorp no retirement before 2045 | opened Utah News Dispatch story (Yahoo copy): confirmed. An Argus/other summary about biodiesel conversion and Hunter 1 in 2032 was not confirmed and is not used |
| [S] Fervo first power and commercial dates | opened ThinkGeoEnergy: confirmed (33 MW; 30 Sep 2026) |
| [S] RMP 4.7% and 4.2% | opened KPCW 6 Jul 2026: confirmed |
| [S] Bonanza 2015 cap, SCR, 2041-42 | opened Salt Lake Tribune 4 May 2024 and PSC order 15 Jul 2026: confirmed |
| [S] White Mesa 1.6M lb | opened the company release (Stockwatch copy): confirmed as an expectation |
| [S] Gateway South December 2024 | opened PacifiCorp's 2026 WECC report: confirmed |
| [S] TransWest dates | opened TransWest's 2026 WECC report: 2031 (replaces 2029/2030 summaries) |
| [S] Ozone proposal | opened Standard-Examiner 22 Apr 2026 and EPA release of March 2025: confirmed |
| [S] Stratos 9 GW, 40,000 acres | opened Utah Public Radio 6 May 2026: confirmed |
| [S] Delta Gigasite, Joule | opened Salt Lake Tribune 9 Sep 2026, ENR, Sanpete Messenger: confirmed |
| [S] Flaming Gorge releases | opened Reclamation release 17 Apr 2026 and the DROA page: confirmed |
| [S] EDAM 1 May 2026 | opened the California ISO release: confirmed |
| [S] Lila Canyon fire | opened Salt Lake Tribune 21 Dec 2023: confirmed |
| [S] NuScale/UAMPS, TerraPower memorandum, Brigham City, Green River, Valar | opened NuScale and TerraPower releases and three American Nuclear Society pages: confirmed |
| [S] Velvet-Wood approval | opened the Interior release: confirmed |

### Dropped (not used)
PSC approval of the settlement (not opened); NSA 65 MW; Fervo's customers and 396 MW Google contract; Velvet-Wood 2026 milestones and Shootaring 2027 restart; Valar "456 reactors" plan; Stratos tax terms and "64%" emissions estimate; Joule "operational 2026" target; RMP data center load forecasts (Western Resource Advocates sheet, not opened); 100 MW threshold of SB 132; regional haze; Kern River and MountainWest mileage; Wolverine "11 million tons"; Lila Canyon "28% of Utah coal".

### Added 14 Nov 2026 while finishing power/content/ut.js
- `build/raw/power/lines_ut.json` arrived; re-baked. Named lines in the frame: "Gateway South Transmission Line" (500 kV, PacifiCorp), "Adelanto - Intermountain (Path 27 HVDC)" (LADWP), "Bears Ears to Bonanza" (345 kV, WAPA), and three Navajo 500 kV lines in Arizona. Line cards written for each. Most 345 kV lines carry an operator but no name.
- NuScale release date 8 November 2023 read in the release [P]. UAMPS "50 members ... in seven western states" [P, same release].
- Kennecott: 2025 generation 118,038 MWh from waste heat and 34,226 MWh from gas [P-data, EIA-923].
- Statements on cards that rest on general knowledge, not an opened source: Currant Creek is air-cooled (EIA shows zero cooling water); the Western Area Power Administration sells Flaming Gorge and Glen Canyon power to public utilities and co-ops; most of Lake Powell is in Utah; the White Mesa Ute Mountain Ute community lies south of the mill; Dominion formerly owned the Questar system and the gas utility; pipeline route descriptions (Kern River, Northwest, Ruby); Gateway South and TransWest are meant to carry Wyoming wind power; Lake Side stands next to the old Geneva steel site (EIA coordinates of both agree); FORGE is near Cape Station; Moon Lake is a Deseret member (named with Deseret in the PSC order).
