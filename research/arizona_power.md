# Arizona power: research fact sheet (generation, fuel chains, grid, users, pollution)

Compiled 2026-11-13 for the "Arizona Power" map. Format follows `colorado.md`.

**Conventions**
- TWh = terawatt-hour = 1 billion kWh = 1 million MWh. GWh = 1,000 MWh. MW = megawatt (capacity). Bcf = billion cubic feet. ACC = Arizona Corporation Commission. APS = Arizona Public Service. SRP = Salt River Project. TEP = Tucson Electric Power. AEPCO = Arizona Electric Power Cooperative. WAPA = Western Area Power Administration. CAP = Central Arizona Project. NGS = Navajo Generating Station.
- Evidence tags: **[P]** = I opened the document or data file itself and read the number. **[P-data]** = I downloaded the EIA data file and summed rows myself (script-level arithmetic on primary data; the sum is mine, the rows are EIA's). **[S]** = number reached me only through a search-engine summary; re-open before publishing. **[derived]** = my arithmetic from tagged figures. **unverified** = could not confirm.
- EIA files downloaded on 13 Nov 2026 and used throughout:
  - EIA-923 final 2025 (released 14 Sep 2026): https://www.eia.gov/electricity/data/eia923/ (file `f923_2025.zip`, "Page 1 Generation and Fuel Data" and "Page 5 Fuel Receipts and Costs")
  - EIA-861 final 2025: https://www.eia.gov/electricity/data/eia861/ (file `f8612025.zip`, `Sales_Ult_Cust_2025.xlsx`, `Net_Metering_2025.xlsx`)
  - EIA-860M, September 2026 inventory: https://www.eia.gov/electricity/data/eia860m/ (operating, planned and retired generators, with coordinates)
  - EIA State Electricity Profile, Arizona, data year 2024 (released 10 Nov 2025): https://www.eia.gov/electricity/state/arizona/ and its workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20AZ.xlsx . The 2025 profile was not yet posted on 13 Nov 2026.
  - EIA state historical tables (1990-2024): https://www.eia.gov/electricity/data/state/ (`annual_generation_state.xls`, `emission_annual.xlsx`, `sales_annual_a.xlsx`)
  - EIA small-scale solar estimates: https://www.eia.gov/electricity/data/eia861m/ (`small_scale_solar_2024/2025/2026.xlsx`)
- Coordinates for power plants are from EIA-860M (September 2026) unless noted. The main session's eGRID layer is the second source; where I compared them with my own knowledge of the site they agreed to about 0.01 degree. Non-plant places (mines, hubs, campuses) are marked "approx" and need a map check.

---

## 1. Statewide budget

**Which year.** Two usable years exist.
- **2025** is the latest full year for generation by fuel (EIA-923 final) and retail sales (EIA-861 final). EIA has not yet published the 2025 supply-and-disposition table (losses, net interstate exports) or 2025 emissions.
- **2024** is the latest year with a complete, EIA-balanced budget (generation, sales, direct use, losses, net exports, CO2).
- Recommendation: draw the "comes from" side with 2025, and either (a) draw the "goes to" side with 2024 from EIA Table 10 and label it 2024, or (b) use 2025 sales and show "exports and losses" as one derived remainder. Do not mix years inside one bar without a label.

### 1a. Where it comes from: net generation in Arizona, utility-scale (plants of 1 MW and larger)

| Fuel | 2025 TWh | 2025 share | 2024 TWh | 2010 TWh | Tag | Source |
|---|---|---|---|---|---|---|
| Natural gas | 52.67 | 45.2% | 55.09 | 29.68 | 2025 [P-data]; 2024, 2010 [P] | EIA-923 2025; `annual_generation_state.xls` |
| Nuclear (Palo Verde) | 31.32 | 26.9% | 32.39 | 31.20 | same | same |
| Solar, utility-scale (PV plus Solana thermal) | 15.50 | 13.3% | 10.82 | 0.02 | same | same |
| Coal | 9.22 | 7.9% | 9.81 | 43.64 | same | same |
| Hydro (conventional 4.78 + pumped storage 0.07) | 4.85 | 4.2% | 5.38 (5.31 + 0.07) | 6.83 (6.62 + 0.21) | same | same |
| Wind | 3.15 | 2.7% | 2.54 | 0.13 | same | same |
| Biomass (wood 0.20, landfill gas 0.02) | 0.22 | 0.2% | 0.19 | 0.17 | same | same |
| Petroleum | 0.04 | 0.0% | 0.03 | 0.07 | same | same |
| Battery storage (net; batteries use more than they return) | -0.51 | -0.4% | -0.22 ("Other") | 0 | same | same |
| **Total utility-scale** | **116.47** | 100% | **116.03** | **111.75** | same | same |
| Small-scale solar (rooftop; EIA estimate, not in the total above) | 5.80 | (5.0% of utility-scale total) | 5.45 | not estimated | [P-data] | `small_scale_solar_2025.xlsx`, sum of 12 months, all sectors |

Notes
- 2025 solar including rooftop: 15.50 + 5.80 = 21.30 TWh [derived], more than twice coal (9.22).
- Carbon-free share of 2025 utility-scale generation (nuclear + solar + hydro + wind): 54.82 TWh, 47.1% [derived].
- Hoover Dam is split by EIA: only the Arizona-side units ("Hoover Dam (AZ)", 0.93 TWh in 2025) count in Arizona's total. Four Corners (New Mexico) is not in Arizona's total even though APS operates it and takes most of its output.
- Change since 2010 [derived from the table]: coal 43.6 to 9.2 TWh (39% of generation to 8%); gas 29.7 to 52.7 (27% to 45%); utility solar 0.02 to 15.5; wind 0.13 to 3.15; nuclear flat near 31-32; hydro 6.6 to 4.8.
- More years, TWh [P]: coal 36.17 (2015), 23.22 (2019, NGS's last year), 13.75 (2020), 12.07 (2023). Gas 33.66 (2015), 46.08 (2019), 50.78 (2020), 52.82 (2023). Solar 3.46 (2015), 5.28 (2019), 7.44 (2023). Total 113.14 (2015), 113.55 (2019), 109.31 (2020), 111.84 (2023).

### 1b. Where it goes

**2024, EIA's balanced table (State Electricity Profile Table 10)** [P], MWh converted to TWh:

| Item | 2024 TWh | Share of supply | 2023 | 2018 | 2009 |
|---|---|---|---|---|---|
| Total supply (= net generation; no imports counted) | 116.03 | 100% | 111.84 | 111.99 | 112.09 |
| Retail sales to customers | 90.84 | 78.3% | 85.92 | 78.35 | 73.43 |
| ...residential | 40.43 | 34.8% | 38.99 | 34.66 | 32.85 |
| ...commercial | 36.10 | 31.1% | 32.62 | 29.68 | 29.39 |
| ...industrial | 14.30 | 12.3% | 14.30 | 13.99 | 11.20 |
| ...transportation | 0.01 | 0.0% | 0.01 | 0.01 | 0 |
| Direct use (power used on site by the plant owner, not sold) | 0.55 | 0.5% | 0.16 | 0.20 | 0.34 |
| Estimated losses (transmission and distribution) | 4.24 | 3.7% | 3.81 | 4.04 | 4.67 |
| Unaccounted | 0.72 | 0.6% | 0.44 | 0.49 | 0.66 |
| International exports (to Mexico) | 0.002 | 0.0% | 0.004 | 0.036 | 0.354 |
| **Net exports to other states** | **19.67** | **17.0%** | 21.51 | 28.88 | 32.63 |

- Net interstate exports fell from 32.6 TWh (2009) to 19.7 TWh (2024) while in-state sales rose from 73.4 to 90.8 TWh [P]. 2022 was the low: 15.87 TWh.
- EIA's "net interstate trade" is a residual (supply minus sales, direct use, losses, international exports), not a metered flow. Arizona is a net exporter in every year of the table (2009-2024).
- A large part of the "export" is contractual: about half of Palo Verde is owned by utilities in California, New Mexico and Texas (see section 2a; exact current shares not all confirmed), and half or more of Hoover, Davis, Parker and Glen Canyon output is allocated to customers in other states.

**2025 retail sales (EIA-861 final, my sum of all Arizona rows including EIA's adjustment rows)** [P-data]:

| Sector | 2025 TWh | Customers | Share of sales |
|---|---|---|---|
| Residential | 39.60 | 3,203,578 | 43.0% |
| Commercial | 37.62 | | 40.9% |
| Industrial | 14.86 | | 16.1% |
| Transportation | 0.011 | | 0.0% |
| **Total** | **92.08** | 3,563,556 | |

- 2025 revenue $11.92 billion; average price 12.95 cents/kWh [derived: 11,922,005 thousand dollars / 92,082,779 MWh]. EIA's published 2024 average: 12.74 cents/kWh, rank 16 (residential 14.91, commercial 12.23, industrial 7.90) [P]. 2010: 9.69 cents (residential 10.97) [P].
- 2025 remainder: 116.47 generated minus 92.08 sold = 24.39 TWh for direct use, losses and net exports combined [derived]. If losses and direct use were the same as 2024 (about 5.5 TWh), net exports would be about 19 TWh. That is an estimate, not an EIA figure.
- Caution: the EIA-861 state total counts "behind the meter" third-party solar sales (Sunrun, Tesla, SunPower rows, about 1.1 TWh in 2025) as retail sales.

### 1c. Summary statistics (EIA State Electricity Profile 2024) [P]

| Item | Value | Rank among states |
|---|---|---|
| Net summer capacity | 32,877 MW | 9 |
| Net generation | 116,026,511 MWh | 12 |
| Total retail sales | 90,843,288 MWh | 15 |
| Average retail price | 12.74 cents/kWh | 16 |
| CO2 from power plants | 33,418 thousand metric tons | 16 |
| CO2 rate | 634 lb/MWh | 35 |
| SO2 | 5,056 short tons; 0.1 lb/MWh | 33; 42 |
| NOx | 23,593 short tons; 0.4 lb/MWh | 20; 38 |
| Primary energy source | Natural gas | |

Top five retailers, 2024 (Table 3) [P] and 2025 (EIA-861) [P-data], TWh:

| Utility | Type | 2024 total | 2025 total | 2025 residential | 2025 commercial | 2025 industrial | 2025 customers |
|---|---|---|---|---|---|---|---|
| Salt River Project | public power district | 33.58 | 34.40 | 14.73 | 14.70 | 4.96 | 1,188,189 |
| Arizona Public Service | investor-owned | 33.70 | 34.20 | 14.92 | 17.34 | 1.94 | 1,433,294 |
| Tucson Electric Power | investor-owned | 8.96 | 8.93 | 3.92 | 1.97 | 3.05 | 458,898 |
| Morenci Water and Electric (Freeport-McMoRan's utility for the Morenci mine) | investor-owned | 2.74 | 2.94 | 0.02 | 0.02 | 2.90 | 2,637 |
| UNS Electric (Mohave and Santa Cruz counties) | investor-owned | 1.91 | 1.80 | 0.97 | 0.72 | 0.11 | 107,073 |

- SRP passed APS in sales in 2025 (34.40 vs 34.20 TWh) while serving about 245,000 fewer customers [P-data].
- Others, 2025 TWh [P-data]: Sulphur Springs Valley Electric Co-op 0.95; Electrical District No. 3 (Pinal) 0.89; Trico 0.88; Mohave Electric Co-op 0.77; Navopache 0.46; Navajo Tribal Utility Authority (Arizona portion) 0.43 with 30,338 customers; Electrical District No. 8 (Maricopa County, industrial only) 0.39; City of Mesa 0.32; Gila River Indian Community Utility Authority 0.28; San Carlos Irrigation Project (BIA) 0.23.

### 1d. Installed capacity, September 2026 (EIA-860M operating generators in Arizona, nameplate) [P-data]

| Technology | MW |
|---|---|
| Gas combined cycle | 11,814 |
| Solar PV | 8,815 |
| Batteries | 6,888 MW power; 25,020 MWh energy |
| Gas combustion turbine | 4,522 |
| Nuclear | 4,210 |
| Coal | 2,792 |
| Conventional hydro | 2,720 |
| Wind | 1,734 |
| Gas steam | 1,158 |
| Solar thermal (Solana) | 280 |
| Pumped storage | 194 |
| Gas engines 190; oil 125; biomass 30; landfill gas 3 | |

Planned in Arizona (EIA-860M "Planned" sheet, September 2026) [P-data]: batteries 6,558 MW; solar PV 5,969 MW; gas combined cycle 1,250 MW; gas combustion turbine 931 MW. No planned wind, nuclear or coal entries.

### 1e. Power-sector emissions trend (EIA `emission_annual.xlsx`, total electric power industry, metric tons) [P]

| Year | CO2 (million t) | of which coal | of which gas | SO2 (t) | NOx (t) |
|---|---|---|---|---|---|
| 2005 | 52.00 | 40.09 | 11.87 | 47,997 | 75,032 |
| 2010 | 55.68 | 43.47 | 12.16 | 33,371 | 57,244 |
| 2015 | 50.20 | 36.41 | 13.75 | 16,023 | 43,079 |
| 2018 | 46.76 | 30.90 | 15.82 | 14,989 | 38,005 |
| 2019 | 43.56 | 23.90 | 19.61 | 11,017 | 33,594 |
| 2020 | 35.71 | 14.44 | 21.25 | 7,504 | 25,496 |
| 2022 | 32.95 | 14.37 | 18.55 | 6,748 | 22,702 |
| 2023 | 34.79 | 12.86 | 21.90 | 6,381 | 22,421 |
| 2024 | 33.42 | 10.53 | 22.86 | 4,584 | 21,406 |

- 2010 to 2024: CO2 down 40%, SO2 down 86%, NOx down 63% [derived], with generation up 4%.
- CO2 per MWh: 2010 about 498 kg/MWh (55.68 Mt / 111.75 TWh); 2024 about 288 kg/MWh (33.42 / 116.03) [derived]. EIA prints 634 lb/MWh for 2024 [P], which is 288 kg.
- Since 2019 natural gas plants have emitted more CO2 than coal plants in Arizona (2024: gas 22.9 Mt, coal 10.5 Mt) [P].

---

## 2. Candidate places

Count: 62 rows. "2025 output" is net generation from EIA-923 final 2025 [P-data]. "MW" is nameplate from EIA-860M September 2026 [P-data] unless stated. Coordinates are EIA-860M for plants; "approx" means from general geographic knowledge, check on a map. Sources abbreviated: **923** = EIA-923 2025; **860M** = EIA-860M Sep 2026; **10-K** = Pinnacle West/APS annual report for 2025, https://www.sec.gov/Archives/edgar/data/764622/000076462226000011/pnw-20251231.htm (opened and searched as text) [P].

### 2a. Nuclear

| # | Place | Lat, lon | Hard numbers | Why it is interesting | Sources |
|---|---|---|---|---|---|
| 1 | Palo Verde Generating Station (Wintersburg/Tonopah) | 33.388, -112.862 | 3 reactors, 4,210 MW nameplate; 31.32 TWh in 2025, 26.9% of Arizona's generation [P-data]. APS operates it and owns 29.1%, an entitlement of 1,146 MW [P]. Operating licenses run to June 2045 (Unit 1), April 2046 (Unit 2), November 2047 (Unit 3) [P]. Uranium is under contract for 100% of needs through 2028 and 70% through 2029 [P] | One of the largest power plants in the US, in a desert with no river or lake. It is cooled with treated wastewater from Phoenix-area cities, and all its used fuel is still on site. ("Largest in the US by output" was true for decades; Georgia's four-unit Vogtle plant may now exceed it. Not checked; do not claim "largest") | 923; 860M; 10-K |
| | Palo Verde: owners | | Owners by long-standing published shares: APS 29.1%; SRP about 20% (17.49% before buying 114 MW from PNM, agreed December 2020, closing 2023-24); El Paso Electric 15.8%; Southern California Edison 15.8%; PNM (New Mexico) 10.2% before the sale to SRP; Southern California Public Power Authority 5.91%; Los Angeles Dept. of Water and Power 5.7%. California owners together: 27.41% [derived] | More than half the plant belongs to utilities serving other states | APS share [P] 10-K; SRP purchase [P] https://www.world-nuclear-news.org/articles/srp-increases-share-in-nuclear-plant-to-meet-growi ; other shares [S] (NRC transfer documents ML21307A133; search summary only). **Current SRP and PNM percentages after the transfer were not confirmed at a primary source; see "least sure"** |
| | Palo Verde: water | | Cooling water is treated effluent piped about 36 miles from the 91st Avenue wastewater plant in Phoenix; a 2010 agreement provides up to 26 billion gallons a year through 2050; use about 65 million gallons a day [all S]. 26 billion gallons = about 80,000 AF [derived] | Direct tie to the water map: the plant is the largest single user of reclaimed water in the state | [S] https://cronkitenews.azpbs.org/2020/02/25/palo-verde-nuclear-water-use ; https://www.watertechonline.com/process-water/article/16221179/historic-water-agreement-ensures-electric-power-wastewater-treatment-in-valley-through-2050 (not opened; confirm before use). 10-K [P] confirms only that the owners hold "contractual rights to effluent" |
| | Palo Verde: spent fuel | | Used fuel is stored on site in dry casks (an "independent spent fuel storage installation"). The site has room for all fuel used through December 2027 and part of the fuel through 2047. The federal government was required by law to start taking spent fuel in 1998 and has not [P] | No US repository exists, so the waste stays at the plant | 10-K |

### 2b. Coal (operating, closed, and just over the state line)

| # | Place | Lat, lon | Hard numbers | Why it is interesting | Sources |
|---|---|---|---|---|---|
| 2 | Springerville Generating Station (TEP operates; Unit 3 owned by Tri-State, Unit 4 by SRP) | 34.319, -109.164 | 4 units, 1,766 MW nameplate; 5.55 TWh in 2025, the most of any Arizona coal plant; burned 3.42 million short tons of coal in 2025 [P-data]. ACC approved converting Units 1 and 2 to natural gas on 4 March 2026; pipeline due end of 2029, conversion done first quarter 2030 [P]. TEP's cost comparison: gas conversion $170 million, keeping coal $450 million [P]. EIA lists planned retirement of Unit 1 as Dec 2027 and Unit 2 as Dec 2032, a holdover from the earlier plan [P-data] | Arizona's largest remaining coal plant is being kept, but switched to gas, which needs a new pipeline | 923; 860M; https://www.azcc.gov/news/home/2026/03/10/march-4--2026-open-meeting-highlights ; https://www.azcc.gov/news/home/2025/08/28/vice-chair-myers--highlights-from-natural-gas-infrastructure-and-storage-workshop . Unit ownership (Tri-State, SRP) is general knowledge, confirm |
| 3 | Coronado Generating Station (SRP), St. Johns | 34.579, -109.271 | 2 units, 822 MW nameplate (762 MW net summer); 2.93 TWh in 2025; 1.81 million tons of coal [P-data]. SRP board approved conversion to gas 24 June 2025; ACC approved 4 March 2026; SRP puts the cost at $1.1 billion through 2045, $300 million less than a new gas plant [P]. Coal burning to end by 2032 (EIA planned retirement Dec 2032) [P-data] | In 2025 all of its coal came by rail from Wyoming and Montana, about 1,000 miles away | 923; 860M; ACC highlights above |
| 4 | Cholla Power Plant (APS), Joseph City | 34.939, -110.303 | Last coal burned March 2025 (ACC gives 17 March 2025); Units 1 and 3 formally retired 30 April 2025; Unit 2 closed 2015; Unit 4 (PacifiCorp) December 2020 [P]. Generated 0.39 TWh in January-March 2025, then zero [P-data]. APS's 2026 resource plan proposes converting the retired plant to natural gas [P] | Sixty-three years of coal burning beside I-40 ended in 2025; the site may come back as a gas plant | 10-K; 923; ACC date [S] https://azcc.gov/news/home/2025/04/25/chair-thompson-and-vice-chair-myers-question-utilities-regarding-cholla-and-springerville-coal-fired-power-plants ; APS IRP release 2 Nov 2026 [P] https://finviz.com/news/413155/aps-prioritizes-reliability-affordability-in-2026-integrated-resource-plan |
| 5 | Navajo Generating Station site (SRP operated), near Page | 36.905, -111.389 | 2,250 MW, three units opened 1974-76; stopped generating 18 November 2019 [P]. Coal came 78 miles by a dedicated electric railroad from Peabody's Kayenta Mine [P]. More than 430 employees at closure, mostly Native American [P]. APS owned 14% (315 MW) [P] | Built largely to power the Central Arizona Project's pumps; its closure is the biggest single reason Arizona's coal generation fell from 23 TWh (2019) to 14 TWh (2020) | https://www.pbs.org/newshour/nation/long-running-coal-plant-on-navajo-nation-stops-production ; 860M retired sheet; 10-K. Stack demolition 18 Dec 2020 [S] https://www.cdrecycler.com/news/navajo-generating-station-smokestack-implosion |
| 6 | Apache Generating Station (AEPCO), Cochise | 32.060, -109.893 | One coal unit left (Unit 3, 204 MW nameplate, 175 MW net summer) plus gas units; plant total 2.16 TWh in 2025, of which coal 0.40 TWh [P-data]. AEPCO had said coal would end by end of 2027; on 6 Oct 2026 KOLD reported a $21 million US Department of Energy award to modernize the coal unit so it keeps running [P] | A rural electric co-op's plant where federal money reversed a planned coal exit | 923; 860M; https://www.kold.com/2026/10/06/department-energy-awards-21-million-southern-arizona-coal-plant/ |
| 7 | Four Corners Power Plant, Fruitland, New Mexico (APS operates, owns 63% of Units 4-5) | 36.690, -108.481 | 2 units, 1,636 MW nameplate (1,540 net summer); 8.24 TWh in 2025; APS's share 970 MW [P; P-data]. Coal: 4.50 million tons in 2025, all trucked from the adjacent Navajo Mine, owned by the Navajo Transitional Energy Company (NTEC) [P-data]. APS had planned to leave in 2031; in September 2026 it signed an agreement with NTEC that could keep the plant running to 2038, and its November 2026 resource plan says this could save customers close to $1 billion; the site lease requires retirement no later than 2038 [P] | Not in Arizona, but the biggest coal source on APS's system and on Navajo land | 10-K; 923; https://www.kjzz.org/business/2026-10-05/aps-signs-agreement-that-could-extend-four-corners-coal-power-plant-use-until-2038 ; APS IRP release above |
| 8 | San Juan Generating Station, Waterflow, New Mexico (closed) | 36.801, -108.439 | Units 2 and 3 retired Dec 2017; Unit 1 June 2022; Unit 4 Sept 2022 [P-data] | A neighbor of Four Corners that did close; TEP once owned part of it | 860M retired sheet |
| 9 | Mohave Generating Station site, Laughlin, Nevada (closed 2005) | 35.146, -114.590 approx | Fed until 2005 by a 273-mile coal slurry pipeline from Black Mesa that used more than 4,000 AF a year of groundwater from the Navajo aquifer [S] | The only long-distance coal slurry pipeline in the US crossed northern Arizona | [S] https://clui.org/ludb/site/black-mesa-coal-mine-and-pipeline ; https://www.navajotimes.com/news/2011/0711/072811water.php (not opened) |

### 2c. Natural gas

All output figures 923 [P-data]; MW 860M [P-data]. "Gas burned" is 2025 fuel receipts from 923 Page 5, in billion cubic feet (Bcf).

| # | Place | Lat, lon | Hard numbers | Why it is interesting |
|---|---|---|---|---|
| 10 | Gila River Power Station, Gila Bend (4 blocks, all now SRP per EIA) | 32.975, -112.694 | 2,476 MW; 11.04 TWh in 2025 (blocks 1-4: 2.56, 2.89, 2.91, 2.67), the largest gas complex in the state; 77.8 Bcf of gas | Built by merchant developers in 2003 for a boom that fizzled; later bought block by block by utilities. EIA-923 lists SRP as operator of all four blocks, with Block 3 inside TEP's balancing area and the others in SRP's [P-data]; who owns each block was not checked |
| 11 | Mesquite Generating Station, Arlington (Block 1 SRP; Block 2 Mesquite Power LLC) | 33.345, -112.864 | 1,383 MW; 7.47 TWh in 2025 (3.52 + 3.95); 54.3 Bcf | Next door to Palo Verde, using the same transmission hub |
| 12 | Redhawk (APS), Arlington | 33.335, -112.841 | 1,127 MW; 4.84 TWh in 2025; 34.1 Bcf. Eight new combustion turbines (about 397 MW) under construction, due 2028 [P 10-K]; EIA lists 392 MW for Oct 2027 [P-data] | APS's biggest gas plant, being expanded for peak evening demand |
| 13 | Santan (SRP), Gilbert | 33.333, -111.750 | 1,326 MW; 4.64 TWh in 2025; 35.1 Bcf, the most gas of any single Arizona plant | A large plant inside a suburb |
| 14 | West Phoenix (APS) | 33.442, -112.158 | 1,207 MW (1,101 combined cycle + 106 turbines); 4.28 TWh in 2025; 35.0 Bcf | Inside the Phoenix ozone nonattainment area |
| 15 | Griffith Energy, Golden Valley near Kingman | 35.054, -114.133 | 655 MW; 3.78 TWh in 2025; 27.3 Bcf. Runs as its own balancing authority (code GRIF) | A merchant plant in Mohave County that mostly serves buyers outside its neighborhood |
| 16 | Arlington Valley Energy Facility | 33.342, -112.890 | 713 MW; 3.35 TWh in 2025; 24.1 Bcf; own balancing authority (DEAA) | Merchant plant at the Palo Verde hub |
| 17 | Harquahala Generating Project, Tonopah | 33.476, -113.113 | 1,277 MW; 2.90 TWh in 2025; 20.2 Bcf | Sat mostly idle for years after 2004; now runs hard as demand has grown |
| 18 | Desert Basin (SRP), Casa Grande | 32.904, -111.789 | 745 MW; 2.09 TWh in 2025; 15.1 Bcf | |
| 19 | South Point Energy Center, Mohave Valley (on Fort Mojave Indian Reservation land) | 34.868, -114.532 | 708 MW; 2.03 TWh in 2025; 14.9 Bcf | Tribal-land siting is general knowledge; confirm |
| 20 | H. Wilson Sundt (TEP), Tucson | 32.160, -110.905 | 529 MW incl. ten gas engines (188 MW, 2019-20); 1.64 TWh in 2025; 16.6 Bcf | Tucson's in-town plant; its last coal-capable unit switched to gas years ago |
| 21 | Kyrene (SRP), Tempe | 33.356, -111.935 | 596 MW; 1.01 TWh in 2025 | |
| 22 | Ocotillo (APS), Tempe | 33.423, -111.912 | 806 MW of combustion turbines; 0.44 TWh in 2025 | A peaker: large capacity, few hours |
| 23 | Agua Fria (SRP), Glendale | 33.556, -112.215 | 738 MW; 0.24 TWh in 2025 | Steam units from 1957-61 still on standby for summer |
| 24 | Coolidge Generating Station (SRP) | 32.917, -111.503 | 1,023 MW operating after new turbines came online in 2026 [P-data]; 0.06 TWh in 2025 before the expansion. Expansion: 12 turbines, 575 MW; first six by summer 2026, rest by summer 2027 [P]; EIA shows 297 MW still under construction for July 2027 [P-data] | Expansion was approved after a dispute with the neighboring historically Black community of Randolph (context from general knowledge; confirm) |
| 25 | Sundance (APS), Coolidge | 32.929, -111.590 | 695 MW; 0.31 TWh in 2025; two turbines (about 90 MW) added in 2025 [P 10-K] | |
| 26 | Saguaro (APS), Red Rock | 32.552, -111.300 | 185 MW today; APS's 2026 plan expands it with part of the gas capacity first planned for Desert Sun, in service by 2030 [P] | |
| 27 | Desert Sun Power Plant (APS, proposed), 13 miles west of Gila Bend | 32.95, -112.95 approx (site not pinned) | About 1,280 MW at this site; construction 2028 if approved; completion 2031. Needs a Maricopa County air permit and zoning change [P]. Announced October 2025 at "up to 2,000 MW"; to be fueled by the proposed Transwestern pipeline expansion [S] | The largest new gas plant proposed in Arizona, to be paid for partly by data centers and other very large customers |
| 28 | Saddleback Generation Station (Copia Power, proposed), Tonopah area | 33.410, -113.169 | 1,250 MW combined cycle, planned for Dec 2030; status "regulatory approvals not initiated" [P-data] | The only planned combined-cycle plant in EIA's Arizona list |
| 29 | Mohave Energy Park (AEPCO, proposed), near Fort Mohave | 34.932, -114.548 | 242 MW of gas turbines, planned Dec 2027; approvals pending [P-data] | |
| 30 | Yucca (APS), Yuma | 32.721, -114.711 | 422 MW gas and oil; 0.20 TWh in 2025; some units owned by California's Imperial Irrigation District [P 10-K] | |

Sources for 26-27: https://www.aps.com/desertsun [P]; APS IRP release [P]; https://www.kjzz.org/business/2025-10-30/aps-plans-to-build-a-new-natural-gas-power-plant-near-gila-bend [S]. Coolidge: https://www.srpnet.com/grid-water-management/grid-management/improvement-projects/coolidge-expansion-project (page dated 13 May 2025) [P].

### 2d. Hydro

| # | Place | Lat, lon | Hard numbers | Why it is interesting | Sources |
|---|---|---|---|---|---|
| 31 | Glen Canyon Dam (Reclamation; power sold by WAPA) | 36.937, -111.484 | 1,312 MW nameplate; 2.75 TWh in 2025 [P-data]. Lake Powell was at 3,539.64 ft on 12 Nov 2026 [P]; it set a record low of 3,519.91 ft about 15 Aug 2026 [P]. The turbines cannot run below 3,490 ft ("minimum power pool") [P] | In 2026 the lake came within about 30 feet of the level where the dam stops making power | 923; 860M; https://www.usbr.gov/lc/region/g4000/hourly/levels.html ; AP via https://fortune.com/2026/08/17/lake-powell-hydropower-shutdown-record-low/ ; https://www.circleofblue.org/2026/supply/glen-canyon-dam-faces-its-existential-moment/ . Output of 800-870 MW vs 1,320 MW capability in March 2026 is [S] |
| 32 | Hoover Dam (Reclamation), Arizona-Nevada line | 36.016, -114.738 | Arizona-side units: 1,039 MW nameplate, 0.93 TWh in 2025; whole dam 2.73 TWh (Nevada side 1.81) [P-data]. Lake Mead 1,040.71 ft on 12 Nov 2026 [P]. Full capability usually given as 2,074 MW; about 1,288-1,304 MW in 2025-26; Reclamation studies show a steep drop if the lake falls below 1,035 ft [all S] | Lake Mead was within 6 feet of an elevation where Hoover's output is projected to fall sharply | 923; 860M; usbr levels page. Capacity figures [S] https://waterdesk.org/2026/06/hoover-dam-approaches-a-hydropower-cliff/ (403 when opened) and https://www.circleofblue.org/2025/water-energy/once-a-showcase-of-american-optimism-and-engineering-hoover-dam-faces-new-power-generation-declines/ |
| 33 | Davis Dam (Lake Mohave) | 35.197, -114.571 | 255 MW; 0.91 TWh in 2025 [P-data] | | 923; 860M |
| 34 | Parker Dam (Lake Havasu) | 34.297, -114.140 approx | 0.36 TWh in 2025; EIA assigns the plant to California, so it is not in Arizona's total [P-data] | Half its output is reserved for pumping Colorado River water to Southern California (general knowledge; confirm) | 923 |
| 35 | Salt River dams (SRP): Roosevelt, Horse Mesa, Mormon Flat, Stewart Mountain | 33.671, -111.162; 33.591, -111.344; 33.554, -111.443; 33.566, -111.536 | 2025 output: Horse Mesa 0.088 TWh (131 MW incl. 100 MW pumped storage), Roosevelt 0.076 (36 MW), Mormon Flat 0.046 (64 MW), Stewart Mountain 0.037 (13 MW); together 0.25 TWh, 0.2% of state generation [P-data] | SRP began as a hydropower and irrigation project; today its dams are a rounding error next to its gas plants, but Horse Mesa and Mormon Flat are the state's only pumped storage | 923; 860M |
| 36 | Headgate Rock Dam (BIA), Parker | 34.17, -114.28 approx | 0.04 TWh in 2025 [P-data] | Run by the Bureau of Indian Affairs for the Colorado River Indian Tribes | 923 |

### 2e. Solar and storage

| # | Place | Lat, lon | Hard numbers | Why it is interesting |
|---|---|---|---|---|
| 37 | Solana Generating Station, Gila Bend | 32.922, -112.956 | 280 MW solar thermal with molten-salt heat storage (2013); 0.85 TWh in 2025 [P-data] | Arizona's only solar thermal plant: mirrors heat fluid that can make steam for hours after sunset (six hours is the usual figure; confirm) |
| 38 | Agua Caliente Solar, Dateland | 32.977, -113.495 | 348 MW nameplate (2012-14); 0.55 TWh in 2025 [P-data] | Was the largest PV plant in the world when finished |
| 39 | Mesquite Solar 1-3 (and later phases), Arlington | 33.342, -112.904 | Phases 1, 2, 3: 170 + 100 + 150 MW; 0.39 TWh (1) and 0.44 TWh (3) in 2025 [P-data] | |
| 40 | Sonoran Solar Energy, Buckeye | 33.249, -112.542 | 490 MW solar with a 260 MW / 1,040 MWh battery (2023); 1.08 TWh in 2025, the most of any Arizona solar plant [P-data] | Typical of the new model: solar by day, battery into the evening peak |
| 41 | Sun Streams complex (1-4), Arlington/Hassayampa | 33.361, -112.780 | Sun Streams 2, 3 and 4 plus the original: 150 + 215 + 300 + 160 MW solar; batteries 215 MW/860 MWh (3) and 300 MW/1,200 MWh (4); Sun Streams 4 made 0.65 TWh in 2025 [P-data] | |
| 42 | Harquahala/Tonopah solar and battery cluster (Papago, Harquahala Sun, Harquahala 2, Maricopa Solar) | 33.484, -113.038 | Papago Energy Storage 300 MW / 1,200 MWh (2025); Harquahala 2: 300 MW solar + 300 MW / 1,200 MWh battery (2025); Maricopa Solar 550 MW (2026) with a 550 MW battery under construction for Dec 2026 [P-data] | West of Palo Verde is becoming one of the densest battery areas in the country |
| 43 | Atlas / Centennial Flats cluster, La Paz County (near Salome/Vicksburg) | 33.583, -113.577 | Operating by Sept 2026: Atlas VII battery 300 MW / 1,200 MWh, Atlas IX 150 MW / 600 MWh, Atlas V and VI solar 300 MW, Centennial Flats 500 MW solar + 267 MW battery; more under construction (Atlas VIII 382 MW battery) [P-data] | Sits on the Ten West Link line and sells largely to California buyers (buyer detail is general knowledge; confirm) |
| 44 | Eleven Mile Solar Center, Pinal County | 32.861, -111.592 | 300 MW solar + 300 MW / 1,200 MWh battery (2024); 0.79 TWh in 2025 [P-data] | |
| 45 | Phoenix-area standalone batteries: Sierra Estrella (Avondale), Beehive (Peoria), Scatter Wash (north Phoenix), Westwing, Pediment (east Mesa) | 33.411, -112.314; 33.800, -112.273; 33.713, -112.082; 33.713, -112.324; 33.356, -111.602 | Sierra Estrella 250 MW / 1,000 MWh (2024); Beehive 250/1,000 (2026); Scatter Wash 170/680 (2025); Westwing 200/808 (2024-25); Pediment 250/1,000 (2026) [P-data] | Batteries are being placed inside the city, near substations, where gas plants would be hard to site |
| 46 | Roadrunner Reserve (TEP), Tucson | 32.072, -110.816 | Two phases, each 200 MW / 800 MWh (2025 and 2026) [P-data] | TEP's own battery, the "large energy storage facility" its 2026 plan credits with supporting peak load |
| 47 | Box Canyon, Brittlebush, Storey and the Pinal County solar belt (Coolidge/Florence) | 33.161, -111.369 | Box Canyon 300 MW (2025), 0.51 TWh in 2025; Brittlebush 200 MW, 0.56 TWh [P-data] | Solar on retired cotton and alfalfa land, another tie to the water map (land-use history is general knowledge) |
| 48 | Kayenta Solar (Navajo Tribal Utility Authority) | 36.772, -110.264 | 55 MW (2017-19); 0.12 TWh in 2025 [P-data] | The first large solar plant on the Navajo Nation, a few miles from the closed Kayenta coal mine |
| 49 | McFarland / White Wing / Agave cluster, Yuma and Maricopa counties (Dateland-Hyder) | 32.957, -113.476 | McFarland A, B, C: 500 MW solar and 435 MW batteries; McFarland B 0.60 TWh in 2025 [P-data] | |

Statewide storage context [P-data, 860M]: 6,888 MW / 25,020 MWh of batteries operating in Arizona in September 2026, with another 6,558 MW planned. In 2025 Arizona's batteries took in 0.51 TWh more than they gave back (923).

### 2f. Wind

| # | Place | Lat, lon | Hard numbers | Why it is interesting |
|---|---|---|---|---|
| 50 | West Camp Wind Farm (AES), Navajo County | 34.736, -110.425 | 500 MW, online 2026, now the largest wind farm in the state [P-data] | Opened this year |
| 51 | Mohave County Wind Farm ("White Hills"), north of Kingman | 35.791, -114.505 | 350 MW (2020); 1.00 TWh in 2025 [P-data] | The first Arizona wind farm to pass 1 TWh a year |
| 52 | Chevelon Butte (AES), south of Winslow | 34.681, -110.802 | Two phases, 238 + 216 MW (2023, 2024); 1.15 TWh combined in 2025 [P-data] | |
| 53 | Babbitt Ranch Energy Center, north of Flagstaff | 35.628, -111.868 | 163 MW (2024); 0.55 TWh in 2025 [P-data] | On a working cattle ranch; power contracted to SRP (general knowledge; confirm) |
| 54 | Dry Lake Wind, near Snowflake | 34.660, -110.284 | 63 MW (2009), Arizona's first commercial wind farm; 0.11 TWh in 2025 [P-data] | |
| 55 | Perrin Ranch (north of Williams) and Red Horse (Willcox) | 35.416, -112.271; 32.286, -110.088 | Perrin Ranch 99 MW, 0.18 TWh; Red Horse 2: 81 MW (wind plus solar), 0.14 TWh in 2025 [P-data] | |

Arizona wind total: 1,734 MW and 3.15 TWh in 2025, 2.7% of generation [P-data]. SunZia's 3,650 MW of New Mexico wind, delivered to Pinal County, is larger than all in-state wind (section 4).

### 2g. Fuel-chain, grid and user places (details in sections 3-5)

| # | Place | Lat, lon | What it is | Section |
|---|---|---|---|---|
| 56 | Kayenta Mine and Black Mesa Mine (Peabody, closed), Black Mesa | 36.52, -110.42 approx | Supplied Navajo GS by electric railroad (Kayenta, closed 2019) and Mohave GS by slurry pipeline (Black Mesa, closed 2005) | 3 |
| 57 | Pinyon Plain Mine (Energy Fuels), near Tusayan | 35.883, -112.096 approx | Arizona's only operating uranium mine, inside the 2023 national monument | 3 |
| 58 | Baaj Nwaavjo I'tah Kukveni - Ancestral Footprints of the Grand Canyon National Monument | 36.4, -112.6 approx (one of three separate areas) | 2023 monument that made permanent a 2012 ban on new uranium claims | 3 |
| 59 | Navajo Nation abandoned uranium mines (marker suggestion: Cameron, 35.875, -111.413 approx, also on the ore haul route) | | Legacy of 1944-86 mining; more than 500 abandoned mines | 3 |
| 60 | Palo Verde hub / Hassayampa and Delaney switchyards | 33.35, -112.86 approx; Delaney 33.44, -113.0 approx | The Southwest's main power trading point; start of the lines to California | 4 |
| 61 | Pinal Central substation (SunZia's western end), near Coolidge | 32.87, -111.50 approx | Where 550 miles of direct-current line from New Mexico ends | 4 |
| 62 | Users: Mark Wilmer Pumping Plant (CAP), 34.29, -114.11 approx; TSMC Arizona, north Phoenix, 33.775, -112.158 approx; Intel Ocotillo, Chandler, 33.237, -111.885 approx; Mesa Elliot Road data center corridor, 33.349, -111.63 approx; Goodyear data centers, 33.43, -112.39 approx; Morenci Mine, 33.09, -109.36 approx; Navajo Nation homes without power (marker: Kayenta or Chinle) | | See section 5 | 5 |

---

## 3. Fuel supply chains

### 3a. Natural gas

| Item | Value | Tag | Source |
|---|---|---|---|
| Gas burned by Arizona power plants, 2025 | 399.6 Bcf (billion cubic feet), making 52.67 TWh | [P-data] | EIA-923 2025, Page 1 |
| Share of Arizona generation from gas | 45.2% (2025) | [P-data] | section 1 |
| Where it comes from | "Two main underground supply basins": the San Juan Basin (northwest New Mexico) and the Permian Basin (west Texas) | [S] | ACC gas page https://www.azcc.gov/utilities/gas (search summary only) |
| Interstate pipelines serving Arizona | El Paso Natural Gas (owned by Kinder Morgan), with a northern line across the Flagstaff-Kingman corridor and a southern system serving Tucson and Phoenix; and Transwestern (owned by Energy Transfer) across northern Arizona with a lateral south to the Phoenix area | names [P] (ACC workshop page; both also appear as fuel suppliers in EIA-923); route descriptions are general knowledge, **check against EIA's pipeline map layer before drawing** | https://www.azcc.gov/news/home/2025/08/28/vice-chair-myers--highlights-from-natural-gas-infrastructure-and-storage-workshop ; geometry: EIA "Natural Gas Interstate and Intrastate Pipelines" layer at https://atlas.eia.gov |
| Who sold the gas, 2025 (EIA-923 receipts, 393.8 Bcf reported) | Listed supplier names: spot purchases "various" 97.7 Bcf; Kinder Morgan 88.8; Transwestern Pipeline 82.7; El Paso Natural Gas 36.7; BP 27.3 (all of it to Griffith); SRP 20.2; Eagle Energy 16.9. Plants often list the pipeline as the "supplier", so this shows which pipe delivered more than who produced the gas | [P-data] | EIA-923 2025, Page 5 |
| Pipeline capacity | Existing pipelines into Arizona are "100% subscribed" according to APS, SRP, TEP and UNS (August 2025) | [P] | ACC workshop page above |
| Underground storage in Arizona | None operating. Kinder Morgan proposes "Arizona Energy Storage": 4 Bcf of working gas in 4 caverns dissolved in bedded salt south of Eloy. As of August 2025 it was updating costs and schedule; no 2026 status found | proposal [P]; "none operating" [S] plus inference from the workshop | ACC workshop page above |
| Arizona's own gas production | Negligible (a few small wells in the northeast). No figure verified this session | **unverified** | check EIA natural gas production by state |
| New pipeline: Transwestern "Desert Southwest" expansion (Energy Transfer) | Permian Basin to Arizona. August 2025 description: 1.5 Bcf a day, in service late 2029, up to 5,000 construction jobs, crossing Cochise, Graham and Pinal counties [P]. 2026 FERC scoping description: 526.5 miles of 48-inch mainline, 13 laterals totalling 181.5 miles, eight compressor stations, up to 2.3 Bcf a day; FERC accepted it into pre-filing review on 3 April 2026 (docket PF26-9); scoping meetings July-August 2026; not yet approved [S] | [P] / [S] | ACC workshop page; https://ferc.gov/desert-southwest-expansion-project (403 when opened); https://sourcenm.com/2026/08/17/proposed-gas-pipeline-for-project-jupiter-data-center-delayed-to-2027-filings-show/ |
| What depends on it | APS's Desert Sun plant (item 27); the Springerville conversion (TEP: pipeline due end of 2029); Coronado conversion; Southwest Gas signed as a shipper | [P] | ACC pages; KJZZ 30 Oct 2025 https://www.kjzz.org/business/2025-10-30/aps-plans-to-build-a-new-natural-gas-power-plant-near-gila-bend |
| Other proposals mentioned to the ACC | El Paso's Maricopa Lateral expansion (50,517 dekatherms a day to Southwest Gas in Phoenix); a Grupo CLISA pipeline from Quartzsite or Buckeye to the border at San Luis (target mid-2029); UNS Electric's 200 MW of peaking turbines at Black Mountain (2028) | [P] | ACC workshop page |
| Kern River pipeline | Does not enter Arizona (runs Wyoming-Utah-Nevada-California) | general knowledge, **unverified** this session | |
| North Baja pipeline | Starts at Ehrenberg, Arizona, and runs through California to Mexico | general knowledge, **unverified** | |

Biggest gas burners in 2025 (EIA-923 receipts, Bcf) [P-data]: Santan 35.1; West Phoenix 35.0; Redhawk 34.1; Mesquite 2: 28.2; Griffith 27.3; Mesquite 1: 26.1; Arlington Valley 24.1; Gila River blocks 18.0-20.7 each (77.8 together); Harquahala 20.2; Apache 19.2; Sundt 16.6; Desert Basin 15.1; South Point 14.9.

### 3b. Coal

Arizona has no operating coal mine. All coal burned in the state in 2025 (5.73 million short tons [P-data]) came from other states by rail.

**2025 deliveries (EIA-923 Page 5, short tons)** [P-data]:

| Plant | Mine | State (county) | Seller as listed | Tons 2025 | How |
|---|---|---|---|---|---|
| Springerville | Lee Ranch | New Mexico (McKinley) | Peabody | 1,439,275 | rail |
| Springerville | North Antelope Rochelle | Wyoming (Campbell), Powder River Basin | Peabody | 971,581 | rail |
| Springerville | Black Thunder | Wyoming (Campbell) | Arch; Peabody Coal Sales | 982,929 | rail |
| Coronado | Black Thunder | Wyoming (Campbell) | Navajo Transitional Energy Co. (NTEC) | 1,067,147 | rail |
| Coronado | Spring Creek | Montana (Big Horn) | NTEC | 506,628 | rail |
| Coronado | North Antelope Rochelle | Wyoming (Campbell) | NTEC; Peabody | 210,885 | rail |
| Four Corners (NM) | Navajo Mine | New Mexico (San Juan) | listed as "BHP Billiton Marketing" (the mine is owned by NTEC per APS's 10-K) | 4,501,056 | truck |
| Cholla | none in 2025; burned its stockpile (255,255 tons) before closing | | | 0 | |
| Apache | none reported in 2025; burned 236,338 tons | | | 0 reported | |

- Totals 2025 [derived]: Springerville 3.39 million tons received (42% from New Mexico, 58% from Wyoming); Coronado 1.78 million tons (100% from Wyoming and Montana).
- 2024 deliveries for comparison [P-data, EIA-923 2024]: Cholla 628,765 tons, all from El Segundo Mine (McKinley County, New Mexico, Peabody), by rail. Apache 170,634 tons from El Segundo and 86,358 from North Antelope Rochelle. Springerville 3.74 million tons (Lee Ranch 1.01, El Segundo 0.59, North Antelope Rochelle 1.59, Black Thunder 0.55). Coronado 1.62 million tons, all Wyoming and Montana.
- El Segundo appears in 2024 but not in 2025; Lee Ranch volume rose. I did not check whether El Segundo closed or was folded into Lee Ranch reporting.
- Rail route: the New Mexico mines are on a spur off the BNSF main line near Grants; Coronado and Springerville are on a branch south from the BNSF main line at Navajo/Sanders. General knowledge; **check before drawing a line**.
- Counties come from EIA's county codes (Wyoming 5 = Campbell; Montana 3 = Big Horn; New Mexico 31 = McKinley, 45 = San Juan); I decoded them from the standard FIPS list.

**History**

| Item | Value | Tag | Source |
|---|---|---|---|
| Navajo GS and Kayenta Mine | Peabody's Kayenta Mine, on Navajo and Hopi land on Black Mesa, sent all its coal 78 miles to Navajo GS on a dedicated electric railroad (the Black Mesa & Lake Powell). The mine closed in 2019, months before the plant, because it had no other customer | [P] | https://www.pbs.org/newshour/nation/long-running-coal-plant-on-navajo-nation-stops-production |
| Navajo GS owners (2014) | US Bureau of Reclamation 24.3% (for CAP pumping), SRP 21.7%, Los Angeles DWP 21.2%, APS 14%, NV Energy 11.3%, TEP 7.5% | [P] | EPA fact sheet 28 July 2014, https://19january2017snapshot.epa.gov/www3/region9/air/navajo/pdfs/ngs-fact-sheet-2014-07-28.pdf |
| Black Mesa Mine and slurry pipeline | Coal was ground, mixed with groundwater from the Navajo aquifer and piped 273 miles to Mohave GS at Laughlin, Nevada, until the plant shut in 2005; water use more than 4,000 AF a year | [S] | https://clui.org/ludb/site/black-mesa-coal-mine-and-pipeline ; https://www.navajotimes.com/news/2011/0711/072811water.php |
| Coal's fall | Arizona coal generation: 43.6 TWh (2010), 23.2 (2019), 9.2 (2025). Coal burned in 2025: 5.73 million tons | [P]; [P-data] | section 1 |

### 3c. Uranium

| Item | Value | Tag | Source |
|---|---|---|---|
| Palo Verde's fuel contracts | Owners have contracted 100% of uranium concentrate needs through 2028 and 70% through 2029; conversion 100% through 2030; enrichment 100% through 2028; fuel fabrication through 2027-28. Suppliers and countries are not named | [P] | APS 10-K 2025 |
| Where US reactor uranium came from, 2025 | US reactor owners bought 46.9 million pounds of uranium (U3O8 equivalent) at an average $58.46 a pound. Origin: Canada 32%, Kazakhstan 28%, Australia 15%, Uzbekistan 7%, United States 7%, Namibia 4%. So about 93% was foreign [derived] | [P] | EIA Uranium Marketing Annual Report 2025 (released 29 July 2026), https://www.eia.gov/uranium/marketing/ |
| Enrichment, 2025 | 23% of enrichment services bought were US-origin, 77% foreign; of the foreign part Russia 26%, France 18%, UK 14%, Netherlands 8% | [P] | same |
| Caution | Those are national averages. Nothing public says what share of Palo Verde's fuel comes from which country, or that any Arizona-mined uranium goes to Palo Verde | | |
| Pinyon Plain Mine (formerly Canyon Mine), Energy Fuels, Kaibab National Forest about 6 miles south-east of Tusayan | Arizona's only producing uranium mine; began producing ore in late 2023/early 2024. Ore is trucked to the White Mesa Mill near Blanding, Utah, the only operating conventional uranium mill in the US. Grades reported by the company: 1.64% in April 2025, 2.14% in May 2025 (6,043 tons of ore holding 258,745 pounds). Company said 2025 mined output across its mines beat guidance. In the first half of 2026 grades were lower and the mill paused ore processing from July to the fourth quarter | [S] (company statements via trade press; none opened successfully) | https://www.cruxinvestor.com/posts/energy-fuels-pinyon-plain-mine-delivers-record-uranium-production-and-exceptional-drilling-results ; https://skillings.net/energy-fuels-to-hit-mid-year-uranium-milestone-as-white-mesa-output-surges |
| Haul route | Federal and state highways across the western Navajo Nation (commonly described as via Cameron, Tuba City and Kayenta on US 89 and US 160, then US 191 to Blanding; about 300 miles). Highway numbers and mileage **unverified** this session | [S]/unverified | |
| Navajo Nation agreement | Shipments began in summer 2024 and were paused after Navajo objections; talks began August 2024 with Governor Hobbs's office helping; agreement signed late January 2025. Terms: set routes and hours, no hauling on Navajo public-event days, covered loads, Navajo transport licences and inspections, more insurance and driver training; and Energy Fuels will haul away up to 10,000 tons of waste from abandoned uranium mines on the Nation at no cost to the Nation | [P] | American Nuclear Society, 31 Jan 2025, https://www.ans.org/news/2025-01-31/article-6732/energy-fuelsnavajo-nation-agreement-to-restart-uranium-transport/ |
| Payments under the agreement | 50 cents per pound of uranium produced at the mill from the ore, plus $1.2 million to a Navajo cleanup fund | [S] | https://www.yahoo.com/news/trucks-uranium-cross-navajo-nation-201321574.html |
| 2012 withdrawal | The Interior Department barred new mining claims on about 1 million acres around Grand Canyon National Park for 20 years; mines with existing valid rights, including this one, could continue | [P] for the 20-year ban and existing claims; "1 million acres" [S] | https://rollcall.com/2023/08/08/biden-to-designate-national-monument-for-lands-near-grand-canyon/ |
| 2023 monument | Baaj Nwaavjo I'tah Kukveni - Ancestral Footprints of the Grand Canyon National Monument, proclaimed 8 August 2023; "more than 917,000 acres" (917,618 in the proclamation [S]); makes the ban on new claims permanent; existing valid claims remain | [P] | Roll Call above |
| Legacy mines | "Nearly 30 million tons" of uranium ore were mined on Navajo lands from 1944 to 1986 [P]. EPA's long-standing count is 523 abandoned uranium mines; Navajo Times reports 524 with none fully cleaned up, and $1.7 billion available for 219 of them [S]. Lukachukai Mountains Mining District added to the Superfund list (fact sheet July 2025) [P] | [P]/[S] | https://www.epa.gov/navajo-nation-uranium-cleanup ; https://navajotimes.com/reznews/a-toxic-legacy-nnepa-director-confirmed-220-million-cleanup-contracts-awarded/ |

### 3d. Solar and battery manufacturing

- LG Energy Solution, Queen Creek: a $5.5 billion battery complex planned at 53 GWh a year (36 GWh cylindrical cells for vehicles, 17 GWh for grid storage). Production start was reported for spring-summer 2026; I found no confirmation that production has begun [S]. https://www.abc15.com/news/business/lg-energy-solutions-queen-creek-battery-plant-nears-completion-hiring-ramps-up . Use only after checking current status.
- No verified Arizona solar-panel factory figure; leave out.

---

## 4. Transmission and trade

| Item | Value | Tag | Source |
|---|---|---|---|
| How much leaves the state | Net exports to other states 19.67 TWh in 2024 (17% of generation); 21.51 in 2023; 15.87 in 2022; 32.63 in 2009 | [P] | EIA State Electricity Profile Table 10 |
| Why exports are structural | Out-of-state utilities own about half of Palo Verde (section 2a). Arizona plants inside California's grid operator (balancing code CISO) made 4.13 TWh in 2025: mostly solar near Palo Verde and Dateland (McFarland, Agua Caliente, White Wing, Mesquite Solar 1-3, Sun Streams 1-2) | [P-data] | EIA-923 2025 |
| Palo Verde hub | The switchyards at Palo Verde/Hassayampa are the Southwest's main wholesale trading point; three 500 kV lines run west to California (Devers-Palo Verde, Palo Verde-Colorado River, Ten West Link). Description is general knowledge apart from the line names, which are in the CAISO source | names [P] | https://www.caiso.com/about/news/good-news-on-the-transmission-front |
| Ten West Link (same project as "Delaney-Colorado River") | 500 kV, about 125 miles (103.5 in Arizona, 21.5 in California), from APS's Delaney substation near Tonopah to SCE's Colorado River substation near Blythe; 3,200 MW conductor capability; about $400 million [P, as planned in 2021]. Construction finished 7 Feb 2024; energized 7 June 2024 [S] | [P]/[S] | CAISO 2021 post above; energization: https://www.caiso.com/documents/presentation-dcrt-transmission-development-forum-jul-31-2024.pdf (search summary) |
| SunZia | 550-mile high-voltage direct-current line from central New Mexico to south-central Arizona (the Pinal Central substation, per a WECC progress report seen only in a search summary), capacity 3,021 MW, carrying a 3,650 MW wind farm with 916 turbines, the largest in the US. EIA said on 12 June 2026 it was "slated to begin commercial operations this month". 2,131 MW of the line's capacity is to be delivered on to Southern California through the Palo Verde substation | [P] | EIA Today in Energy, 12 June 2026, https://www.eia.gov/todayinenergy/detail.php?id=67766 |
| SunZia vs Arizona wind | 3,650 MW is about twice all wind in Arizona (1,734 MW) | [derived] | |
| Navajo-area lines after the plant closed | The three 500 kV lines built for Navajo GS still run south to Phoenix and west to Nevada. Under the 2017 lease extension the Navajo Nation got the right to use or sell 500 MW of capacity on that system for 35 years; first annual payment about $1.9 million; reported as little used | [S] | https://navajotimes.com/reznews/wheres-the-juice-500-mw-line-open-for-business/ (403 when opened) |
| Balancing authorities with plants in Arizona (EIA codes) | AZPS (APS; 75 plants), SRP (46), TEPC (TEP; 49), WALC (WAPA Desert Southwest; 19, including Glen Canyon, Hoover, Davis, Apache, South Point), CISO (California ISO; 15 plants physically in Arizona), GRIF (Griffith plant alone), DEAA (Arlington Valley plant alone), DOPD (1). 2025 generation by area, TWh: SRP 70.6 (it includes Palo Verde), AZPS 12.5, TEPC 11.3, WALC 10.5, CISO 4.1, GRIF 3.8, DEAA 3.3 | [P-data] | EIA-860M Sep 2026; EIA-923 2025 |
| Western Energy Imbalance Market (real-time trading run by California ISO) | APS joined 2016, SRP 2020, TEP 2022, WAPA Desert Southwest 2023 | [P] | https://www.westernenergymarkets.com/pages/about/default.aspx |
| Day-ahead market choice | On 25 Nov 2024 APS, SRP, TEP and UniSource announced they will join Markets+, run by the Southwest Power Pool of Arkansas, rather than California ISO's Extended Day-Ahead Market; they cited savings of "nearly $100 million" [P]. FERC approved the Markets+ tariff 16 Jan 2025; go-live is expected October 2027 [P]. California's market started in May 2026 with other utilities [S]. WAPA Desert Southwest withdrew from Markets+ development [S] | [P]/[S] | TEP release https://tep.com/?p=28350 ; APS 10-K; RTO Insider (paywalled) |
| Seam | From late 2027 Arizona's big utilities and California would be in different day-ahead markets, with the Palo Verde hub on the boundary | [derived] | |

---

## 5. Users

### 5a. Who sells it (2025, EIA-861 final) [P-data]

See the table in section 1c. Short form: SRP 34.40 TWh to 1.19 million customers; APS 34.20 TWh to 1.43 million; TEP 8.93 TWh to 0.46 million; Morenci Water & Electric 2.94 TWh to 2,637 customers; UNS Electric 1.80 TWh to 107,000. APS plus SRP are 74.5% of all retail sales in the state [derived: 68.60 / 92.08].

### 5b. Summer peaks

| Utility | 2024 record | 2025 record | 2026 record | Tag | Source |
|---|---|---|---|---|---|
| APS | 8,212 MW | 8,631 MW (7 Aug 2025, 118 F in Phoenix) | 9,164 MW preliminary (Sunday 2 Aug 2026, 6-7 pm); APS later cites 9,166 MW. An earlier 2026 record of 9,053 MW was set 24 July | [P] | https://azcc.gov/news/home/2025/08/09/arizona-electric-utilities-set-record-high-demand--again--demand-soars-above-original-forecasts-for-2025 ; https://www.aps.com/en/About/Our-Company/Newsroom/Articles/APS-Customers-Set-New-Peak-Energy-Demand-Record ; APS IRP release |
| SRP | 8,205 MW | 8,542 MW (6 Aug 2025) | 9,072 MW (Friday 24 July 2026, 5-6 pm, 117 F) | [P] | ACC page above; https://www.kjzz.org/business/2026-07-29/aps-srp-saw-peak-demand-records-as-both-neared-planned-power-capacity-for-the-summer |
| TEP | 2,445 MW (set June 2021; still the record in 2024) | 2,502 MW (7 Aug 2025) | no 2026 record found; a July 2026 report says usage reached about 2,400 MW | 2025 [P]; 2026 [S] | ACC page above; https://www.kold.com/2026/07/29/southern-arizona-heat-drives-up-power-grid-demand/ |

- APS's 2026 peak was 533 MW above its 2025 record; SRP's was 530 MW above [derived].
- Both 2026 peaks were about 90% of the capacity the utilities had told the ACC they would have (APS 9,974 MW, SRP 10,003 MW in the April 2026 workshop table) [P]. Reserve margins at the peaks were about 10% against targets of 15-16% [P, KJZZ 26 Oct 2026].
- Pre-summer 2026 forecasts given to the ACC: APS 8,648 MW, SRP 8,869, TEP 2,513, UNS Electric 529, AEPCO 717 [P]. https://azcc.gov/news/home/2026/04/16/acc-2026-summer-preparedness-workshop-highlights
- "1 MW serves about 160 Arizona homes" at peak (APS) [P].

### 5c. Data centers and chip plants

| Item | Value | Tag | Source |
|---|---|---|---|
| APS today | Data centers were about 5% of APS peak load in 2025 and about 7% in 2026 | [P] | KJZZ 26 Oct 2026, https://kjzz.org/business/2026-10-26/arizona-utilities-scramble-to-keep-up-as-data-center-boom-drives-rapid-expansion-of-the-power-grid |
| APS forecast | Peak 8.7 GW (2025) to 12.0 GW (2035); 19 GW of uncommitted requests in its queue; "a typical data center uses about 400 MW", some ask for 2,000 MW | [P] | https://www.aps.com/datacenters |
| APS 2026 resource plan (filed about 30 Oct 2026; release 2 Nov) | Retail sales from about 34,200 GWh (2025) to about 80,600 GWh (2041); peak above 14,500 MW in 2041; about 6,000 MW of batteries on its system by 2030; current mix "about 58% clean". KJZZ: close to 4,000 MW of new gas over the next decade; about 76% of sales growth from data centers and large manufacturers | [P] | APS release; https://www.kjzz.org/business/2026-11-04/fossil-fuel-power-could-remain-big-player-for-decades-to-come-as-aps-expects-energy-demand-to-double |
| SRP today | Data centers drew 441 MW at SRP's 2025 peak, 5.1% of 8,542 MW. SRP serves 59 large-load customers with a combined load of nearly 7,000 MW (April 2026; the figure presumably includes contracted future load) | [P] | SRP chief executive in https://azcapitoltimes.com/news/2026/03/31/the-facts-about-srp-and-data-centers/ ; https://www.azcc.gov/news/home/2026/04/20/acc-large-load-data-center-workshop-highlights |
| SRP forecast | A board member cited growth of 4,700 MW by 2035, about 3,000 MW of it data centers; SRP's lawyer called the figures plausible. 10 data center customers in construction or in the queue need about 2 GW | [P] | https://www.kjzz.org/business/2026-11-02/srp-board-members-weighing-benefits-of-data-center-moratorium ; KJZZ 26 Oct |
| TEP | No data center customers yet (April 2026); one project under contract at 286 MW; others forecast about 800 MW; 8-10 GW of speculative requests | [P] | ACC large-load workshop page |
| Rules, 2025-26 | SRP approved two large-customer tariffs in 2025: customers of 20 MW or more pay a minimum bill based on 80% of forecast demand, plus up-front payment for dedicated lines and substations. APS asked in its June 2025 rate case for a rate increase of "more than 45%" for extra-large users and a subscription model for new plants; the ACC must vote by 31 Dec 2026. ACC held a large-load workshop 16 April 2026; no statewide tariff adopted. On 2 Nov 2026 SRP's board discussed pausing new data center connections; no vote | [P] | KJZZ 2 Nov; SRP CEO commentary; https://www.aps.com/datacenters ; https://azcc.gov/news/home/2026/07/10/what-s-next-in-the-aps-rate-case |
| Counts | "Nearly 100" existing data centers in Arizona; one tracker lists 95 planned projects | [P] (as reported) | KJZZ 26 Oct |
| Named sites | Aligned Data Centers PHX-07, Tolleson (under construction Sept 2026); La Osa near Eloy, proposed at 3 GW, rejected by Pinal County supervisors; Grande Valley, Casa Grande (plans to supply its own power) | [P] | KJZZ 26 Oct |
| Mesa, Goodyear, Phoenix campuses | Mesa's Elliot Road corridor (Google, Meta, Apple) and Goodyear (Microsoft, Vantage, Stream) are the usual examples. I did not verify MW figures or operators this session | **unverified** | |
| TSMC, north Phoenix | APS: TSMC is committed to 12 facilities; "every $100 billion invested represents roughly 1 gigawatt"; total commitment $265 billion [P] (about 2.65 GW by that rule [derived], not an APS figure). A November 2026 KJZZ story says ACC filings suggest the campus could use as much energy as about 300,000 homes [S: headline teaser only]. First phase about 200 MW (older APS figure) [S] | [P]/[S] | https://www.kjzz.org/business/2026-08-04/costs-of-generating-electricity-and-transmission-cut-into-aps-profits-despite-record-sales |
| Intel Ocotillo, Chandler | No published power demand found | **unverified** | |

### 5d. Other large users

| Item | Value | Tag | Source |
|---|---|---|---|
| Copper | Morenci Water & Electric, the utility serving Freeport-McMoRan's Morenci mine and town, sold 2.94 TWh in 2025, 2.90 of it industrial: 3.2% of all electricity sold in Arizona, to 2,637 customers. TEP's two largest customers are mines; its industrial sales were 3.05 TWh | [P-data]; [P] | EIA-861 2025; ACC large-load workshop page |
| Central Arizona Project | Lifts Colorado River water about 3,000 feet over 336 miles with 14 pumping plants; "one of the largest end users of electric energy in the state"; energy costs $60-80 million a year. Power mix since Navajo GS closed (fact sheet Oct 2024): forward market purchases 50-60%, daily market purchases 20%, an SRP contract 12-15% (35 MW, expiring end of 2024), Hoover Dam 6%, a 30 MW solar contract 5% | [P] | https://library.cap-az.com/documents/factsheets/cap-power-portfolio-fact-sheet.pdf |
| CAP energy volume | About 2.5 to 2.8 million MWh a year at full deliveries (2.8 TWh would be about 3% of state retail sales). Deliveries, and so energy use, are lower under current shortages | [S] | https://library.cap-az.com/documents/meetings/10-17-2013/CAP_energy_needs_Board_retreat_10-16-13.pdf (2013; not opened) |
| CAP and Navajo GS | Reclamation owned 24.3% of Navajo GS to power CAP [P, EPA fact sheet]; before 2019 the plant supplied more than 90% of CAP's pumping energy [S] | [P]/[S] | section 3b; https://www.circleofblue.org/2016/water-energy/marriage-coal-water-arizona-renews-vows/ |
| "Largest single user" wording | CAP's own current wording is "one of the largest". Morenci's utility sold more (2.94 TWh in 2025) than CAP's full-delivery figure, so do not call CAP "the largest" without a current CAP number | [derived] | |

### 5e. Homes

| Item | Value | Tag | Source |
|---|---|---|---|
| Residential share | Homes bought 39.60 TWh in 2025, 43% of sales; 3.20 million residential customers; about 12,360 kWh per customer a year [derived] | [P-data] | EIA-861 2025 |
| Rooftop solar | Small-scale solar capacity 3,099 MW at end of 2025 (residential 2,443 MW), 3,208 MW by August 2026; estimated output 5.80 TWh in 2025. Net-metered solar customers: 339,321 in 2025 (333,870 residential), about 10% of residential customers [derived]; 322,190 in 2024 | [P-data]; 2024 [P] | EIA small-scale solar files; EIA-861 Net_Metering_2025; State Profile Table 11 |
| Export rate | Arizona ended retail-rate net metering for new customers in 2016-17 (general knowledge; the source confirms the 10% cap dates from 2017); new systems are paid a set export rate, locked at the rate in force when they applied. For APS and UNS Electric it fell 10% to 5.554 cents/kWh on 1 Sept 2026 (from 6.171); it was 12.9 cents in 2018; cuts are capped at 10% a year. APS had proposed 4.511 cents. A similar TEP cut was due for a vote in September 2026 (outcome not checked) | [P] | https://www.pv-tech.org/acc-cuts-arizona-solar-export-rate/ |
| Solar customer charge | In June 2026 the Arizona Court of Appeals struck down a monthly "grid access charge" on APS solar customers (about $2-3 a month) approved in 2024; on 30 Oct 2026 it refused to reconsider | [P] for June ruling (pv magazine); 30 Oct [S] | https://pv-magazine-usa.com/2026/11/10/arizona-election-results-open-new-opportunities-for-affordable-clean-energy/ ; https://www.kjzz.org/politics/2026-10-30/arizona-court-of-appeals-wont-reinstate-extra-fee-on-aps-solar-customers |
| SRP solar customers | SRP sets its own solar price plans (not the ACC). Not researched | | |
| Navajo Nation homes without electricity | 9,377 of about 55,000 homes (SRP, 15 May 2026); KTAR gives about 9,390 of 56,000 (15 April 2026). SRP says this is roughly 70% of all US households without power. "Light Up Navajo", a volunteer line-building program begun in 2019, aimed for at least 300 homes in 2026; SRP crews have connected 159 homes in total and built about 114 miles of line. NTUA reported 269 homes connected in 2026 [S] | [P]; 269 [S] | https://media.srpnet.com/srp-crews-bring-reliable-power-to-13-remote-homes-in-the-navajo-nation/ ; https://ktar.com/arizona-news/2026-light-up-navajo ; https://www.ntua.com/light-up-navajo.html |
| Navajo Tribal Utility Authority | 30,338 Arizona customers, 0.43 TWh in 2025 | [P-data] | EIA-861 2025 |
| Electric vehicles | No clean official count found (ADOT's registration summaries do not split by fuel; third-party figures range 95,000-130,000) | **dropped** | |

---

## 6. Emissions and other pollution

| Item | Value | Tag | Source |
|---|---|---|---|
| CO2 trend | 55.7 million metric tons (2010) to 33.4 (2024), down 40%; per MWh from about 498 kg to 288 kg | [P]; rate [derived] | section 1e |
| Gas now emits more than coal | 2024: gas plants 22.9 Mt, coal plants 10.5 Mt | [P] | section 1e |
| What closing Navajo GS did | State coal CO2 fell from 30.9 Mt (2018) to 14.4 Mt (2020); SO2 from 14,989 t to 7,504 t; NOx from 38,005 t to 25,496 t. Not all of that is Navajo GS (Cholla 4 also closed in Dec 2020 and coal plants ran less), but it was by far the largest unit change | [P] | EIA emission_annual.xlsx |
| What closing Cholla removed | Cholla generated 0.39 TWh in its last three months (2025); per-plant emissions are in the main session's eGRID data | [P-data] | EIA-923 |
| Largest emitters | Use eGRID. By 2025 output the coal plants are Springerville (5.5 TWh), Coronado (2.9), Apache coal unit (0.4); Four Corners (8.2 TWh) is across the line in New Mexico | [P-data] | EIA-923 |
| Regional haze and the Grand Canyon | EPA's 2014 rule: Navajo GS (2,250 MW) was "one of the largest sources of NOx in the country" and affected visibility at 11 national parks and wilderness areas, including the Grand Canyon; the rule required over 80% NOx reduction, one unit closed or equivalent by 2019 and controls on the others by 2030, under a NOx cap running to 2044. SO2 and particulate controls had been installed earlier; SRP ran a winter visibility study in 1990. The plant closed in 2019 before the later steps. Four Corners is within 300 km of 16 such areas | [P] | EPA fact sheet 28 July 2014 (PDF read) |
| 1991 SO2 scrubber decision at Navajo GS | Widely cited (scrubbers added in the late 1990s after a 1991 EPA visibility rule); **not verified** this session | unverified | |
| Phoenix ozone | Maricopa County area designated nonattainment for the 2015 standard (70 parts per billion) in 2018; classified "moderate" in Oct 2022 with a 3 Aug 2024 deadline, missed. EPA proposed on 19 Nov 2025 to find the area would have met the standard but for emissions from outside the US [P]. EPA finalized that on 23 March 2026, so the area stays "moderate" and avoids "serious" (which brings tighter permitting and offsets); environmental groups have challenged it [S] | [P]/[S] | APS 10-K; https://www.govinfo.gov/content/pkg/FR-2026-03-23/pdf/2026-05601.pdf (not opened); https://earthjustice.org/press/2026/groups-challenge-trump-administrations-phoenix-ozone-pollution-waiver |
| Who causes Phoenix ozone | EPA/MAG modeling: about 80% of ozone in the region comes from natural sources or sources outside the nonattainment area [S]. A 2023 MAG slide appears to attribute about 62% to boundary conditions, 18% on-road vehicles, 10% non-road engines, 3% area sources, 3% point sources (which include power plants), 3% biogenic, 1% wildfire; I could not confirm the label-to-number pairing [S, weak]. "The vast majority of APS's natural gas-fired units" are inside the Phoenix and Yuma nonattainment areas [P] | [S]; [P] | https://www.courthousenews.com/wp-content/uploads/2023/04/maricopa-association-of-governments-ozone-nonattainment-presentation.pdf ; APS 10-K |
| Coal ash | Earthjustice compilation (Sept 2025) of utilities' own federal filings: Springerville landfill 32.6 million cubic yards; Navajo GS landfill 21.8 million; Coronado 16.2 million (2 ponds, 1 landfill); Cholla 15.2 million (3 ponds, 1 landfill); Apache 4.8 million; about 90 million cubic yards in all. Groundwater results above federal health-based levels, as multiples: Cholla boron 25x, sulfate 23x, lithium 18x, cobalt 13x, molybdenum 9x, selenium 3x, arsenic 2x, radium 2x; Coronado lithium 14x; Springerville lithium 26x, sulfate 3x; Apache cobalt, lithium, thallium (no multiples). Multiples come from a 2022 report using data to about 2019-21. Source is an advocacy group quoting industry monitoring; for cards, link the utilities' own "CCR Rule Compliance" pages where possible | [P] (of the compilation) | https://earthjustice.org/feature/coal-ash-states/arizona ; APS Cholla filing https://www.aps.com/-/media/APS/APSCOM-PDFs/Utility/CCR-Documents/Cholla/Fly-Ash-Pond/CH_AssessCorMeas_002_20190614.pdf (not opened) |
| Cholla cleanup costs | APS asked in its 2025 rate case to recover ongoing remediation and ash-pond closure costs at Cholla | [P] | APS 10-K |
| Federal ash rules | EPA extended several coal-ash deadlines in Feb 2026 and bottom-ash wastewater deadlines from 2029 to 2034 (31 Dec 2025) | [P] | APS 10-K |
| Mercury | Not researched to a usable figure | **dropped** | |
| Water consumed for cooling, 2025 | Arizona plants that report cooling data to EIA consumed about 132,600 AF in 2025 [P-data, my sum of EIA-923 Schedule 8D "consumption volume"; converted at 325,851 gallons per AF]. Palo Verde 69,800 AF (53% of the total; treated wastewater); Coronado 5,000; West Phoenix 4,900; Redhawk 4,900; Springerville 4,800; Santan 4,100; Mesquite 1+2: 6,800; Gila River four blocks 9,100; Griffith 3,500; Arlington Valley 3,200; Harquahala 2,800; Apache 2,500; Solana 2,300; Sundt 2,200; Desert Basin 2,100; South Point 1,800; Cholla 1,300 (three months). Four Corners (NM) 12,900 | [P-data] | EIA-923 2025 Schedule 8D. Covers steam and combined-cycle plants above EIA's size threshold; combustion turbines, PV and wind use almost none. Apache reports an implausible withdrawal figure (342,000 AF, evidently recirculating flow); use consumption only |
| Scale against the water map | 132,600 AF is about 2% of Arizona's roughly 7 million AF of annual water use; without Palo Verde's wastewater it is about 63,000 AF, under 1% | [derived] | state total from the water map's ADWR sources |
| Palo Verde water detail | Pumping of treated effluent runs up to 40,000 gallons a minute in winter and 60,000 in summer; in 2020 the plant planned to cut effluent use 20% by treating poor-quality Buckeye-area groundwater | [P] | https://cronkitenews.azpbs.org/2020/02/25/palo-verde-nuclear-water-use |

### Utility targets, late 2026

| Utility | Target | Changed in 2025-26? | Tag | Source |
|---|---|---|---|---|
| APS | "Aspirational goal to be carbon-neutral by 2050", meaning remaining emissions would be offset. About 58% of its 2025 energy was "clean" (nuclear, renewables, efficiency) | Yes. In August 2025 APS changed the goal from zero-carbon (100% clean) by 2050 to carbon-neutral. Its earlier plan to leave coal by 2031 is replaced by Four Corners running to as late as 2038 | [P] | APS 10-K; APS IRP release |
| SRP | Cut CO2 per MWh 82% from 2005 levels by 2035 (to about 284 lb/MWh); net-zero by 2050; cut water used per MWh 30% from 2005. Unverified FY2025 intensity 741 lb/MWh [S] | Targets were raised in March 2024; no change found in 2025-26. Coronado: coal to end by 2032, converted to gas | [P]; 741 [S] | https://srpnet.com/2035 |
| TEP | "Aspires to achieve net zero carbon emissions by 2050". No coal by 2032 (Springerville 1 and 2 to gas by 2030) | Sierra Club says TEP's 2026 plan states it will not meet its earlier goal of an 80% cut by 2035 [S, advocacy source; not confirmed in TEP's filing] | [P]; [S] | https://www.tep.com/resource-plan/ ; https://www.sierraclub.org/press-releases/2026/11/more-same-expensive-dependence-fossil-fuels-tep-and-aps-2026-energy-plans |
| AEPCO | "Committed to reducing emissions 70% by 2031" (chief executive, Oct 2026) | Coal unit now to keep running with federal funds | [P] | KOLD 6 Oct 2026 |

---

## 7. Regulation: who decides what

| Body | Role | Tag | Source |
|---|---|---|---|
| Arizona Corporation Commission (ACC) | Five commissioners elected statewide. Sets rates, monthly charges and solar export rates for investor-owned utilities (APS, TEP, UNS) and co-ops; approves resource plans; issues siting certificates for large plants and lines, including SRP's (it approved the Coronado conversion). Its decisions cannot be directly overridden by the legislature or governor | [P] | pv magazine 10 Nov 2026; ACC 4 March 2026 highlights |
| November 2026 election | Voters elected Clara Pratte and Jonathon Hill to the commission (party and new balance not given in the source I opened; check) | [P] | pv magazine above |
| Renewable standard (REST, 2006: 15% renewable by 2025) | ACC voted 5-0 on 14 Aug 2025 to begin repeal [S]; voted unanimously on 4 March 2026 to repeal [P]; APS, TEP and UNS collected more than $2.3 billion in REST surcharges [P]. The Attorney General's office then refused to certify the repeal, saying the commission broke its own rulemaking process; on 28 May 2026 the ACC authorized its lawyers to "explore next steps" [P]. Final status after June 2026: not found | [P]/[S] | https://www.azcc.gov/news/home/2026/03/10/march-4--2026-open-meeting-highlights ; https://azcc.gov/news/home/2026/06/01/acc-to-explore-options-after-disapproval-of-renewable-energy-standard-and-tariff-rulemaking-package |
| Energy efficiency standard | ACC took a final vote to repeal the electric efficiency standard (reported July 2026) | [S] | https://www.sierraclub.org/press-releases/2026/07/acc-finalizes-repeal-energy-efficiency-rules |
| Salt River Project | A public power district (a political subdivision of the state) governed by its own elected board; its rates are not set by the ACC. The board approved the Coronado conversion (June 2025) and the large-customer tariffs (2025) | SRP "Political Subdivision" [P-data, EIA-861 ownership field]; board actions [P] | EIA-861; ACC and KJZZ sources above |
| Co-ops and districts | AEPCO generates for six distribution co-ops; EIA-861 lists Sulphur Springs Valley, Trico, Mohave, Navopache, Graham County and others, plus irrigation and electrical districts and the City of Mesa | [P-data] | EIA-861 |
| Tribal utilities | Navajo Tribal Utility Authority; Gila River Indian Community Utility Authority; Tohono O'odham Utility Authority; BIA's San Carlos Irrigation Project and Colorado River Agency (Headgate Rock) | [P-data] for NTUA, GRICUA, San Carlos; others general knowledge | EIA-861 |
| Federal | WAPA sells power from Glen Canyon, Hoover, Davis and Parker and runs a balancing area; Reclamation runs the dams; FERC regulates interstate pipelines, wholesale markets and transmission rates; NRC licenses Palo Verde; EPA regulates air on tribal land (Navajo GS, Four Corners) | general knowledge; WAPA sales 0.30 TWh direct to Arizona end users [P-data] | EIA-861 |

---

## 8. Current conditions, autumn 2026

1. **Record demand.** APS 9,164 MW on 2 Aug 2026 and SRP 9,072 MW on 24 July 2026, each more than 500 MW above 2025 [P]. Both utilities ran with about 10% reserves at the peak [P].
2. **Coal exits are being reversed or converted.** Cholla closed (March 2025) but APS now proposes to convert it to gas. Four Corners: APS signed a fuel agreement in September 2026 that could keep it open to 2038 instead of 2031. Springerville 1-2 and Coronado: ACC approved gas conversion on 4 March 2026 (target 2029-30). Apache: federal award of $21 million (Oct 2026) to keep the coal unit running. [all P]
3. **No federal emergency order in Arizona.** The Energy Department has issued more than 40 emergency orders since May 2025 keeping plants open elsewhere (for example Craig Unit 1 in Colorado); I found none for an Arizona plant [S]. Arizona commissioners asked APS and TEP about Cholla and Springerville in April 2025 [S].
4. **Gas build-out.** Planned in EIA's list: 1,250 MW combined cycle (Saddleback) and 931 MW of turbines (Redhawk 392, Coolidge 297 remaining, Mohave Energy Park 242) [P-data]; APS adds Desert Sun (about 1,280 MW, 2031), a Saguaro expansion (2030) and a Cholla conversion [P]. All depend on the Transwestern expansion (pre-filing at FERC; target late 2029).
5. **Batteries and solar are arriving faster than anything else.** 6,888 MW / 25,020 MWh of batteries were operating in September 2026, with 6,558 MW more planned; utility solar output rose from 10.8 TWh (2024) to 15.5 TWh (2025), a 43% rise [P-data; derived].
6. **SunZia is on.** The 550-mile line into Pinal County and its 3,650 MW wind farm entered service in mid-2026 [P].
7. **Hydro at the edge.** Lake Powell set a record low (3,519.91 ft) in mid-August 2026, about 30 ft above the level where Glen Canyon stops generating; after autumn storms it stood at 3,539.64 ft on 12 Nov 2026. Lake Mead stood at 1,040.71 ft on 12 Nov 2026; AP reported it set its own record low about a week before Powell's, in early August 2026 [P]. 2026 is an extreme year; present these as 2026 readings, not as typical.
8. **Rate cases.** APS: 31-day hearing ended 7 July 2026; judge's recommendation due late November; ACC vote required by 31 Dec 2026; new rates early 2027 [P]. APS's request is reported as about 14% for residential customers and about $580-662 million a year [S, sources differ]. TEP: judge recommended about an 11% residential increase (11.6%, $12.92 a month at median use); ACC review expected November 2026, rates from December [P].
9. **Data centers.** See 5c. SRP board discussed a pause on new connections on 2 Nov 2026; Pinal County rejected the 3 GW La Osa project [P].
10. **Rules.** REST repeal voted but blocked at the Attorney General's office (June 2026); efficiency standard repealed; solar export rate cut again to 5.55 cents (Sept 2026); court struck down APS's solar grid-access charge (June 2026) [P/S as tagged above].
11. **Markets.** Markets+ go-live expected October 2027 for APS, SRP, TEP, UNS [P].
12. **Resource plans.** APS (2 Nov 2026 release) and TEP filed 15-year plans around 30 October 2026; APS expects sales to more than double by 2041 [P]. TEP plan details not verified.
13. **Election.** Two ACC seats decided in November 2026 (Pratte, Hill) [P].
14. **Nuclear.** No new reactor in APS's plan; APS, SRP and TEP are jointly studying possible sites [P, KJZZ 4 Nov 2026].

---

## 9. Tour-step ideas (12)

1. **Palo Verde.** Start where a quarter of Arizona's power is made: three reactors in the desert, cooled with Phoenix's treated wastewater, more than half owned by utilities serving other states.
2. **The gas fleet at Arlington/Gila Bend** (Redhawk, Mesquite, Arlington Valley, Gila River within 30 miles). Gas makes 45% of the state's power; show the cluster around the Palo Verde hub.
3. **The pipelines.** Pan east: every cubic foot arrives through two pipeline systems from New Mexico and Texas; Arizona produces almost none and stores none. Show the proposed Transwestern expansion and the Eloy salt-cavern site.
4. **Coal country: Springerville and Coronado.** Coal fell from 39% of generation (2010) to 8% (2025). The coal comes by rail from New Mexico, Wyoming and Montana. Both plants are approved to switch to gas around 2030.
5. **What closed: Navajo GS, Kayenta Mine, Cholla.** The 78-mile electric coal railroad, the slurry pipeline to Nevada, and what the closures did to the state's CO2, SO2 and NOx.
6. **Four Corners (off the map edge).** The plant APS was to leave in 2031, now possibly running to 2038, on Navajo land with a Navajo-owned mine.
7. **Uranium: Pinyon Plain and the haul road.** Fuel for reactors is 93% imported; Arizona's one uranium mine sits inside a 2023 national monument and trucks ore across the Navajo Nation, where more than 500 old mines remain.
8. **The dams: Glen Canyon and Hoover.** Hydro is 4% of generation and falling with the reservoirs; in 2026 Lake Powell came within about 30 feet of the level where power stops.
9. **Sun and batteries west of Phoenix** (Sonoran, Sun Streams, Harquahala, Atlas). Solar passed coal; 25,000 MWh of batteries now shift it into the evening. Add West Camp wind and SunZia's arrival from New Mexico.
10. **The grid and the exports.** The Palo Verde hub and the three lines to California; Arizona sends about a sixth of what it generates to other states, and has chosen a different market from California's starting 2027.
11. **Who uses it: a Phoenix summer evening.** Record peaks at 6 pm in late July and early August; homes are 43% of sales; then the new loads: data centers (5 to 7% of APS's peak and most of forecast growth), TSMC, the Morenci mine, the CAP pumps. End with the 9,400 Navajo homes with no connection at all.
12. **What happens next.** Sales forecast to double by 2041; new gas plants and a pipeline; coal extended; a renewable standard repealed on paper but stuck; an elected commission that just changed; reservoirs that decide how much hydro is left.

---

## 10. Least sure

- **Palo Verde ownership percentages today.** APS 29.1% is confirmed (10-K). SRP's rise to about 20% and PNM's reduced share were announced in 2020 for closing in 2023-24; I did not open a document confirming the closed figures. El Paso Electric 15.8%, SCE 15.8%, SCPPA 5.91%, LADWP 5.7% are long-standing figures seen only in search summaries.
- **Palo Verde water numbers** (36 miles, 26 billion gallons a year, through 2050, 65 million gallons a day): search summaries only. The EIA-923 2025 consumption figure (69,817 AF, which is 22.75 billion gallons) is primary and can replace them.
- **2025 exports and losses.** EIA has not published the 2025 balance; the 24.4 TWh remainder is my subtraction.
- **EIA-861 2025 state total** is my sum of rows (including EIA's adjustment rows and behind-the-meter solar sellers); EIA's published 2025 state total may differ slightly when the profile is posted.
- **Gas pipeline routes, Kern River, North Baja, in-state production, "no storage"**: general knowledge or old summaries. Pull geometry and confirm from EIA's pipeline layer and EIA's state profile text (the EIA state page is now a script-rendered app that my fetch tool could not read).
- **Transwestern expansion size**: 1.5 Bcf/day (ACC, Aug 2025, opened) versus 2.3 Bcf/day and 526.5 miles (FERC scoping, 2026, search summary). The project appears to have grown; confirm at FERC docket PF26-9.
- **Desert Sun size**: 2,000 MW at announcement (Oct 2025) versus about 1,280 MW at the Gila Bend site with part moved to Saguaro (APS page, 2026). I used the APS page. The site coordinate is not pinned.
- **Hoover and Glen Canyon capacity in MW at current lake levels**: search summaries only; the pages returned 403. EIA nameplate and 2025 generation are solid.
- **Navajo GS**: 1991 SO2 rule and scrubber dates not verified; stack demolition date from a summary; the 500 MW Navajo transmission right from a summary.
- **Black Mesa slurry pipeline figures** (273 miles, 4,000+ AF/yr): summaries only.
- **Pinyon Plain** production, grades, haul route and mileage: company statements via trade press summaries; mine coordinates approximate.
- **Abandoned uranium mine count** (523/524): not on the EPA page I opened; "nearly 30 million tons of ore" is.
- **Phoenix ozone**: final EPA action of 23 March 2026 and the 80% outside-sources figure are from summaries; the source-share breakdown is weak.
- **Coal ash**: figures are from an advocacy compilation of industry filings, with contamination multiples dating to about 2019-21.
- **Unit ownership** at Springerville (Tri-State Unit 3, SRP Unit 4), Gila River blocks, Mesquite, South Point's tribal-land siting, Parker Dam's pumping allocation, Solana's six hours of storage, buyers of the La Paz County solar: general knowledge, unchecked.
- **APS rate request size** (14%, $580 million or $662 million): sources differ; not opened at the docket.
- **TEP 2026 resource plan** contents and TEP's 2026 peak: not confirmed.
- **ACC election**: winners' parties and the resulting balance not confirmed.
- **Data center campus names in Mesa and Goodyear, Intel's demand, TSMC's "300,000 homes"**: not verified.
- **Non-plant coordinates** marked "approx".

---

## 11. Verification log

### Opened and confirmed (primary documents or data files)

| Figure | What I opened |
|---|---|
| 2025 generation by fuel (116.47 TWh total; gas 52.67; nuclear 31.32; solar 15.50; coal 9.22; hydro 4.85; wind 3.15), every per-plant 2025 output, gas and coal tonnage burned, coal mine origins 2024 and 2025, cooling-water consumption | EIA-923 final 2025 and 2024 workbooks, summed by script |
| 2010-2024 generation by fuel; emissions 2005-2024 | EIA `annual_generation_state.xls`, `emission_annual.xlsx` |
| 2024 budget (sales by sector, direct use, losses, net interstate exports 19.67 TWh), top-five retailers 2024, net metering 2024, ranks, price 12.74 cents, CO2 634 lb/MWh | EIA State Electricity Profile page and its workbook |
| 2025 sales by sector and utility, customers, revenue | EIA-861 2025 `Sales_Ult_Cust_2025.xlsx` |
| Small-scale solar 5.80 TWh, 3,099 MW; 339,321 net-metered customers | EIA small-scale solar files; `Net_Metering_2025.xlsx` |
| Capacity by technology, battery MW/MWh, planned plants, retirement dates, coordinates | EIA-860M September 2026 |
| APS: Palo Verde 29.1% and 1,146 MW, license dates, fuel contracts, spent fuel storage, Cholla dates, Four Corners 63% and 970 MW, Navajo 14%, Redhawk 397 MW, Markets+ October 2027, carbon-neutral goal and August 2025 change, 58% clean, ozone status to Nov 2025 | Pinnacle West 10-K for 2025 (downloaded, searched as text) |
| APS record 9,164 MW (2 Aug 2026), 9,053 MW (24 July) | APS newsroom article dated 4 Aug 2026 |
| APS IRP: 34,200 to 80,600 GWh, 14,500 MW, 9,166 MW, 6,000 MW batteries, Four Corners "close to $1 billion", 2038 | APS release of 2 Nov 2026 (Business Wire copy on finviz) |
| Four Corners agreement with NTEC, September 2026 | KJZZ 5 Oct 2026 |
| 2024 and 2025 peaks for APS, SRP, TEP | ACC news release 9 Aug 2025 |
| SRP 9,072 MW on 24 July 2026 | KJZZ 29 July 2026 and 26 Oct 2026 |
| 2026 forecasts and capacity table | ACC summer preparedness highlights, April 2026 |
| Springerville and Coronado conversions approved 4 March 2026; costs; REST repeal vote; $2.3 billion | ACC open meeting highlights 10 March 2026 |
| Attorney General disapproval of REST repeal | ACC release 1 June 2026 |
| Gas pipelines 100% subscribed; Arizona Energy Storage 4 Bcf; Transwestern 1.5 Bcf/day; Springerville cost comparison | ACC gas workshop highlights 28 Aug 2025 |
| Large-load numbers (SRP 59 customers, TEP 286 MW etc.) | ACC large-load workshop highlights 20 April 2026 |
| Data center shares, reserve margins, La Osa, counts | KJZZ 26 Oct 2026 |
| SRP board moratorium discussion; 4,700 MW / 3,000 MW; tariff terms | KJZZ 2 Nov 2026 |
| SRP data centers 441 MW, 5.1% | SRP chief executive commentary, Arizona Capitol Times 31 March 2026 |
| APS data center page (8.7 to 12.0 GW, 19 GW queue) | aps.com/datacenters |
| Desert Sun 1,280 MW, 2031 | aps.com/desertsun |
| Desert Sun at announcement (2,000 MW, late 2030, Transwestern) | KJZZ 30 Oct 2025 |
| Coolidge 575 MW, 12 turbines | SRP project page (dated 13 May 2025) |
| Apache $21 million award | KOLD 6 Oct 2026 |
| Navajo GS closure, 2,250 MW, 78-mile railroad, Kayenta | PBS/AP 18 Nov 2019 |
| Navajo GS owners, 11 parks, 80% NOx | EPA fact sheet 28 July 2014 (PDF read) |
| CAP: 14 pumping plants, 3,000 ft, 336 miles, power mix, $60-80 million | CAP power portfolio fact sheet, Oct 2024 (PDF read) |
| Uranium origins 2025 | EIA Uranium Marketing Annual page |
| Navajo-Energy Fuels agreement terms | American Nuclear Society, 31 Jan 2025 |
| Monument name, date, 917,000+ acres, existing claims | Roll Call 8 Aug 2023 |
| "Nearly 30 million tons" of ore; Lukachukai Superfund listing | EPA Navajo uranium cleanup page (updated 12 Nov 2026) |
| SunZia 550 miles, 3,021 MW, 3,650 MW, 916 turbines, 2,131 MW to California | EIA Today in Energy 12 June 2026 |
| Ten West Link 125 miles, 500 kV, 3,200 MW, $400 million (as planned) | CAISO post, Nov 2021 |
| WEIM join years | Western Energy Markets "about" page |
| Markets+ announcement, "nearly $100 million" | TEP release, Nov 2024 |
| Lake Powell 3,539.64 ft, Lake Mead 1,040.71 ft on 12 Nov 2026 | Reclamation daily levels page |
| Lake Powell record low 3,519.91 ft, about 30 ft above power cutoff | AP story on Fortune, 17 Aug 2026 |
| 3,490 ft minimum power pool and other Glen Canyon elevations | Circle of Blue, 29 April 2026 |
| Navajo homes: 9,377 of 55,000; 159 homes by SRP | SRP release 15 May 2026; KTAR 15 April 2026 |
| Export rate 5.554 cents from 1 Sept 2026; history | PV Tech 17 Aug 2026 |
| ACC election winners; June court ruling on solar charge | pv magazine USA 10 Nov 2026 |
| APS rate case timetable | ACC release 10 July 2026 |
| TEP rate case 11% / 11.6%, timetable, 452,000 customers | tep.com/2026-rates |
| SRP goals (82% by 2035, net zero 2050, 30% water) | srpnet.com/2035 |
| TEP net-zero aspiration; Springerville by 2030 | tep.com/resource-plan |
| Coal ash volumes and multiples | Earthjustice Arizona page (advocacy compilation) |
| Palo Verde pumping rates, 20% reduction plan | Cronkite News 25 Feb 2020 |
| SRP's purchase of 114 MW from PNM (as agreed 2020) | World Nuclear News 10 Dec 2020 |
| TSMC: 12 facilities, $265 billion, 1 GW per $100 billion | KJZZ 4 Aug 2026 |

### Still [S] (seen only in search summaries; confirm or drop before use)

- Palo Verde co-owner percentages other than APS; 36-mile pipeline; 26 billion gallons through 2050.
- Cholla's exact last day of coal (17 March 2025, ACC).
- Navajo GS stack demolition date; 500 MW transmission right; more than 90% of CAP energy; 1991 SO2 history.
- Hoover 2,074 MW / 1,288-1,304 MW / below-1,035 ft figures; Glen Canyon 800-870 MW.
- Transwestern 2.3 Bcf/day, 526.5 miles, FERC pre-filing dates.
- Black Mesa slurry pipeline figures.
- Pinyon Plain production and grades; 50 cents a pound; $1.2 million.
- 523/524 abandoned mines; $1.7 billion for 219 mines.
- Ten West energization date 7 June 2024.
- California day-ahead market start (May 2026); WAPA Desert Southwest leaving Markets+.
- CAP 2.5-2.8 million MWh.
- TSMC "300,000 homes"; first phase 200 MW.
- Phoenix ozone final rule 23 March 2026; 80% outside sources; MAG source shares.
- REST: 14 Aug 2025 first vote; efficiency standard repeal.
- APS rate request size; court's 30 Oct 2026 ruling.
- TEP: 80% by 2035 goal dropped; 2026 peak about 2,400 MW.
- SRP FY2025 intensity 741 lb/MWh.
- LG Energy Solution factory figures and status.
- NTUA 269 homes connected in 2026.
- No DOE emergency order for an Arizona plant (absence of evidence in one search).

### Dropped (not used; could not confirm)

- Electric vehicle count (no official figure; third-party range too wide).
- Mercury emissions.
- Intel Ocotillo power demand; MW for named Mesa and Goodyear data centers.
- Arizona's own gas production figure.
- TEP 2026 resource plan numbers (2.5 GW renewables, 1.4 GW storage, 300 MW gas appear in summaries of uncertain date).
- SRP "50% peak growth by 2035" and "26,500 MW by 2035" (older or secondary).
- Total power-plant water figures from older reports (150,000 AF; 176,132 AF; 375,362 AF): replaced by the EIA-923 2025 sum.
- "Palo Verde is the largest US power plant by output" (may no longer be true after Vogtle 3 and 4).
- "CAP is the largest single electricity user" (CAP itself says "one of the largest"; Morenci's utility sold more in 2025).

### Added 13 Nov 2026 while writing power/content/az.js: [S] figures since opened and confirmed

| Figure | What I opened |
|---|---|
| Ten West Link energized 7 June 2024; construction Oct 2022 to 7 Feb 2024; 125 miles; 3,200 MW | Ten West Link briefing PDF to California ISO, 31 July 2024 (pages read) |
| EPA final decision not to reclassify Phoenix-Mesa to "serious" (release dated 22 March 2026) | EPA news release |
| Black Mesa slurry pipeline 273 miles; about 1.3 billion gallons a year from the Navajo Aquifer; mine closed 2005 | Center for Land Use Interpretation page |
| 523 abandoned uranium mines; funds for 230; over $1.7 billion | EPA "abandoned mines cleanup" page (updated 22 Oct 2026). The earlier "219 mines" figure is dropped |
| Palo Verde effluent: up to 26 billion gallons a year through 2050, from Phoenix, Glendale, Mesa, Scottsdale, Tempe | Water Technology article, 2010 |
| Hoover: 2,080 MW full; 1,304 MW at 1,055 ft (2025); 382 MW if the 12 older turbines stop at 1,035 ft | Circle of Blue, 2025 |
| No underground gas storage in Arizona (EIA table through 2024); Arizona marketed gas production 139 million cubic feet in 2024 | EIA natural gas navigator tables |
| Palo Verde co-owner names (not shares); Four Corners co-owners SRP 10%, PNM 13%, TEP 7%, NTEC 7% | APS 10-K |
| Pinyon Plain: producing, 14 surface acres, ore to White Mesa Mill | Energy Fuels mine page |
| Coordinates: Pinyon Plain, TSMC, Mark Wilmer Pumping Plant, Kayenta Mine, Cameron, Chinle, Tolleson | OpenStreetMap (Nominatim). Hubs (Hassayampa, Delaney, Westwing, Pinal Central) from line endpoints in power/data/az.js |

Left off the map for lack of confirmation: Palo Verde co-owner percentages other than APS; Transwestern 2.3 Bcf/day and mileage; Glen Canyon MW at current level; Pinyon Plain output, grades and haul route; Navajo 500 MW transmission right; 1991 SO2 history; ozone source shares; unit ownership at Springerville and Gila River; CAP MWh; TSMC "300,000 homes"; EV count; mercury (the dataset supplies plant mercury where EPA reports it); Intel; named Mesa and Goodyear data centers; LG factory; TEP plan details; ACC election party balance; REST repeal final status (the map does not carry a REST card).
