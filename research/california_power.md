# California power: research fact sheet (generation, imports, fuel chains, grid, users, pollution)

Compiled 2026-11-13 for the "California Power" map (power/content/ca.js). Format follows `arizona_power.md`.

**Conventions**
- TWh = terawatt-hour = 1,000 GWh = 1 million MWh. MW = megawatt (capacity). Bcf = billion cubic feet. MMcf = million cubic feet.
- CEC = California Energy Commission. CPUC = California Public Utilities Commission. CAISO = California Independent System Operator (the grid operator for about 80% of the state's load). PG&E, SCE, SDG&E = the three large investor-owned utilities. LADWP = Los Angeles Department of Water and Power. SMUD = Sacramento Municipal Utility District. IID = Imperial Irrigation District. CCA = community choice aggregator. DWR = California Department of Water Resources. OTC = once-through cooling.
- Evidence tags: **[P]** = I opened the document and read the number. **[P-data]** = I summed rows of a downloaded federal data file myself (the rows are the agency's, the sum is mine). **[W]** = read on a Wikipedia page that I opened; secondary, used only for five transmission paths where no primary page could be reached. **[S]** = seen only in a search-engine summary. **[GK]** = general knowledge, no source opened. **unverified** = could not confirm.
- Search limit: the shared web-search budget for this session ran out after ten searches. Everything after that was done by opening known URLs directly. Topics that needed a search to find a 2026 source are listed under "Least sure".
- Federal files used (already in the session scratchpad, downloaded 13 Nov 2026):
  - EIA-923 final 2025: https://www.eia.gov/electricity/data/eia923/ (generation and fuel by plant; fuel receipts)
  - EIA-861 final 2025: https://www.eia.gov/electricity/data/eia861/ (`Sales_Ult_Cust_2025.xlsx`, `Operational_Data_2025.xlsx`)
  - EIA-860M September 2026 inventory: https://www.eia.gov/electricity/data/eia860m/ (this is what the map's plant layer is baked from)
  - EIA State Electricity Profile, California, data year 2024: https://www.eia.gov/electricity/state/california/ , workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20CA.xlsx
  - EIA state historical tables: https://www.eia.gov/electricity/data/state/ (`annual_generation_state.xls`, `emission_annual.xlsx`)
  - EIA small-scale solar: https://www.eia.gov/electricity/data/eia861m/ (`small_scale_solar_2025.xlsx`)
  - EIA natural gas navigator, California: movements https://www.eia.gov/dnav/ng/ng_move_ist_a2dcu_SCA_a.htm ; consumption https://www.eia.gov/dnav/ng/ng_cons_sum_dcu_SCA_a.htm ; storage https://www.eia.gov/dnav/ng/ng_stor_cap_dcu_SCA_a.htm ; marketed production https://www.eia.gov/dnav/ng/ng_prod_sum_a_EPG0_VGM_mmcf_a.htm
- Plant coordinates come from EIA-860M through the baked dataset. Hub coordinates are the endpoints of the 500 kV and DC lines in the baked dataset (HIFLD); they agree with the substations' known locations.

---

## 1. Statewide budget

### 1a. Where it comes from: CEC "total system electric generation", 2025

Measure: **total system electric generation (TSEG)** = utility-scale generation inside California (plants of 1 MW or more) plus net imports. Source: CEC, "2025 Total System Electric Generation", https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2025-total-system-electric-generation **[P]** (page fetched and table read 13 Nov 2026).

| Fuel | In-state GWh | Northwest imports | Southwest imports | Total mix GWh | Share of mix |
|---|---|---|---|---|---|
| Natural gas | 74,316 | 60 | 6,943 | 81,319 | 30.38% |
| Solar | 55,528 | 1,079 | 9,852 | 66,459 | 24.83% |
| Wind | 15,171 | 9,421 | 8,560 | 33,152 | 12.39% |
| Large hydro | 24,125 | 4,754 | 1,013 | 29,892 | 11.17% |
| Nuclear | 17,575 | 288 | 8,536 | 26,399 | 9.86% |
| Geothermal | 10,908 | 167 | 2,085 | 13,160 | 4.92% |
| Biomass | 4,226 | 653 | 52 | 4,930 | 1.84% |
| Coal | 244 | 122 | 4,324 | 4,691 | 1.75% |
| Unspecified | 0 | 3,384 | 639 | 4,022 | 1.50% |
| Small hydro | 3,417 | 29 | 1 | 3,447 | 1.29% |
| Other (waste heat, petroleum coke) | 157 | 0 | 2 | 158 | 0.06% |
| Oil | 31 | 0 | 0 | 31 | 0.01% |
| **Total** | **205,698** | **19,957** | **42,007** | **267,661** | 100% |

- Imports were 61,964 GWh, 23.15% of the total [derived]. In-state generation was down 5% from 216,181 GWh in 2024; TSEG was down 4%. [P]
- In-state shares of in-state generation: gas 36.13%, solar 26.99%, large hydro 11.73%, nuclear 8.54%, wind 7.38%, geothermal 5.30%. [P]
- CEC text: gas serving California fell 14% from 2024; CAISO peak was 44,434 MW on 21 Aug 2025 against 48,353 MW on 5 Sep 2024; solar PV rose about 7,000 GWh; California hydro was 27,542 GWh, 6% below 2024. [P]
- CEC: behind-the-meter solar reached almost 20,000 MW in 2025; the 2025 demand forecast put behind-the-meter solar output at 30,303 GWh; statewide battery capacity was 18,296 MW on 31 Dec 2025, of which 3,174 MW behind the meter. [P]
- Cross-check with EIA-923 final 2025 [P-data]: California net generation 205.11 TWh (gas 74.29, solar 54.89, conventional hydro 28.15, nuclear 17.56, wind 15.10, geothermal 10.90, wood 2.06, landfill gas and other biomass 2.24, other gas 1.11, coal 0.23, pumped storage 0.22, batteries -1.95). The two sources agree to 0.3%.
- EIA small-scale (rooftop) solar estimate for California, 2025: 34.4 TWh from 20,024 MW [P-data]. Not in either total above.
- Map choice: the "comes from" chart uses the CEC table, with in-state rows by fuel and two import rows (Northwest, Southwest). Large and small hydro are added together (27,542 GWh). Coal, oil and "other" in-state are one row (432 GWh).

History, EIA `annual_generation_state.xls` [P], TWh generated in California:

| | 2001 | 2010 | 2012 | 2015 | 2020 | 2023 | 2024 |
|---|---|---|---|---|---|---|---|
| Natural gas | 111.9 | 107.5 | 119.7 | 116.1 | 92.0 | 94.4 | 86.7 |
| Nuclear | 33.2 | 32.2 | 18.5 | 18.5 | 16.3 | 17.7 | 18.4 |
| Hydro | 25.5 | 33.4 | 26.8 | 13.8 | 21.4 | 32.4 | 29.5 |
| Solar (utility-scale) | 0.5 | 0.8 | 1.4 | 14.8 | 30.3 | 41.0 | 48.4 |
| Wind | 3.5 | 6.1 | 9.8 | 12.2 | 13.6 | 14.0 | 15.6 |
| Geothermal | 12.2 | 12.6 | 12.5 | 11.9 | 11.4 | 11.3 | 10.5 |
| Coal | 2.2 | 2.1 | 1.4 | 0.3 | 0.3 | 0.2 | 0.2 |
| Total | 198.6 | 204.1 | 199.5 | 196.7 | 193.1 | 216.6 | 214.2 |

- Nuclear fell from 32.2 TWh (2010) to 18.5 TWh (2012) when San Onofre stopped. [P]

### 1b. Where it goes: EIA State Electricity Profile Table 10, 2024 [P]

| Item | 2024 TWh | Share of supply |
|---|---|---|
| Total supply | 273.66 | 100% |
| ...generated in California | 214.19 | 78.3% |
| ...net imports from other states | 53.44 | 19.5% |
| ...imports from Mexico and Canada | 6.03 | 2.2% |
| Retail sales: residential | 85.85 | 31.4% |
| Retail sales: commercial | 115.13 | 42.1% |
| Retail sales: industrial | 44.03 | 16.1% |
| Retail sales: transportation | 0.72 | 0.3% |
| Direct use (used on site by the generator's owner) | 13.04 | 4.8% |
| Exports to Mexico | 1.49 | 0.5% |
| Estimated losses | 11.47 | 4.2% |
| Unaccounted | 1.95 | 0.7% |

- Net interstate imports by year [P]: 86.7 TWh (2018), 71.0 (2019), 80.0 (2020), 72.7 (2021), 71.5 (2022), 43.2 (2023), 53.4 (2024).
- 2024 customers: 14.22 million residential, 1.78 million commercial, 146,327 industrial [P]. Average price 27.04 cents/kWh, second highest in the US; residential 31.97 cents (20.45 cents in 2020) [P].
- 2024 power-sector CO2: 39.6 million metric tons (15th among states); 407 lb/MWh (45th) [P]. 2010: 55.4 million metric tons; 2001: 71.7 [P, `emission_annual.xlsx`]. 2024 NOx 62,519 short tons, SO2 748 short tons [P].
- 2025 retail sales (EIA-861 final) [P-data]: 242.97 TWh to 16.29 million customers; residential 85.11, commercial 114.17, industrial 42.98, transportation 0.71.
- Net metering 2024 [P]: 2,136,252 solar customers, 18,221 MW; 223,630 customers with batteries, 1,831 MW.

## 2. Candidate places (plant figures: 2025 from EIA-923 [P-data]; capacity from EIA-860M Sept 2026)

Nuclear
- **Diablo Canyon** (id 6099): 17.56 TWh in 2025; CEC counts 17,575 GWh, 8.54% of in-state generation [P]. NRC renewed both licenses on 2 Apr 2026, to 2 Nov 2044 (Unit 1) and 26 Aug 2045 (Unit 2); a 2022 state law keeps it open through 2030 and requires the Legislature to approve anything beyond; the CPUC set 31 Oct 2029 (Unit 1) and 31 Oct 2030 (Unit 2); PG&E had planned in 2016 to close the units in 2024 and 2025 [P, American Nuclear Society 3 Apr 2026, https://www.ans.org/news/2026-04-03/article-7906/nrc-approves-diablo-canyon-license-renewal-extension]. Coastal Commission approval Dec 2025 and Regional Water Board permits 26 Feb 2026 [S].
- **San Onofre** (id 360): SCE certified permanent shutdown of Units 2 and 3 on 7 June 2013; dismantling 8 to 10 years; site to return to the US Navy [P, https://www.songscommunity.com/about-decommissioning/decommissioning-san-onofre-nuclear-generating-station]. Inventory: 2,254 MW.
- Rancho Seco (SMUD, closed 1989 after a public vote) [GK]: NRC and SMUD pages could not be opened. Not given its own marker.

Gas
- Largest by 2025 output [P-data]: Delta Energy Center 4.14 TWh (28.5 Bcf), Pastoria 3.62 (24.7), Cosumnes 3.54 (22.7), High Desert 3.33 (23.3), Elk Hills 3.13 (22.6), Gateway 2.91, Colusa 2.58, Los Medanos 2.49, Metcalf 2.33, Watson Cogeneration 2.33 (22.4), Moss Landing gas units 2.07 (14.7), Huntington Beach Energy Project 1.88, Scattergood 1.66, Haynes 1.65, Otay Mesa 1.63, Alamitos Energy Center 1.48, Palomar 1.47, Mountainview 1.37.
- California power plants burned 598 Bcf of gas in 2025, 530 Bcf of it counted toward electricity [P-data, EIA-923]. EIA's gas series gives 482 Bcf delivered to the electric power sector in 2025 and 567 Bcf in 2024 [P]; the sector definition differs (industrial and commercial cogeneration is excluded).
- **Once-through cooling**: State Water Board policy adopted 4 May 2010, effective 1 Oct 2010; amended 2020, 2021 and 2023; the 2023 amendment (Resolution 2023-0025, 15 Aug 2023) revised the compliance schedules for Alamitos, Huntington Beach, Ormond Beach, Scattergood and Diablo Canyon [P, https://www.waterboards.ca.gov/water_issues/programs/ocean/cwa316/policy.html]. The exact new dates were not read (commonly reported as end of 2026 for the first three, 2029 for Scattergood, 2030 for Diablo Canyon) [GK]. The EIA inventory lists planned retirement years: Alamitos old units 2026 (1,115 MW), Ormond Beach 2027 (1,612 MW), Scattergood 2029 (326 MW) [P-data]. 2025 output of the old steam units: Alamitos 0.03 TWh, Huntington Beach 0.006, Ormond Beach 0.02 [P-data]. Retired coastal plants in the inventory: Redondo Beach 2023, Encina 2018, Mandalay 2018, Pittsburg 2017, El Segundo 2015, Morro Bay 2014, Contra Costa 2013, South Bay 2011, Potrero 2011, Hunters Point 2006.
- **Moss Landing** (id 260): gas 1,398 MW plus 450 MW of batteries in the inventory. Fire on 16 Jan 2025 at Vistra's 300 MW battery building, burned until 18 Jan; about 100,000 battery modules, about 55% damaged; nearly 40,000 intact batteries removed in phase one; final phase began Sept 2026; removal and demolition expected complete in mid-2027; Vistra pays under a July 2025 agreement [P, EPA 8 Sep 2026, https://www.epa.gov/newsreleases/epa-begins-final-phase-post-fire-battery-cleanup-moss-landing]. PG&E's Elkhorn battery (182.5 MW) is next door.
- **Argus Cogen**, Trona (id 10684): the only plant in California whose main fuel is coal; 0.25 TWh in 2025; 534,076 tons of coal received in 2025, 476,760 from the West Elk mine in Colorado and 57,316 from Black Thunder in Wyoming, all by rail, sold by Arch Coal [P-data, EIA-923 fuel receipts].

Geothermal
- **The Geysers**: Calpine owns and operates 13 plants on 28,447 acres (45 square miles) in Sonoma and Lake counties; "the largest complex of geothermal power plants in the world"; a 25 MW expansion was completed in July 2026 [P, https://geysers.com/]. 2025: Calpine plants 5.29 TWh; with the two Northern California Power Agency plants 5.95 TWh [P-data].
- **Salton Sea**: CalEnergy (Berkshire Hathaway) runs 10 plants; 2.24 TWh in 2025 [P-data]. Imperial Valley geothermal in the inventory: 9 map entries, 789 MW. Lithium: Lawrence Berkeley lab estimate of enough for 375 million EV batteries; Hell's Kitchen (Controlled Thermal Resources) would make up to 300,000 metric tons of lithium carbonate a year and almost 50 MW; in Aug 2026 an appeals court sent the environmental review back to Imperial County over water supply and Salton Sea dust; Berkshire Hathaway finished a pilot and plans a demonstration plant in Calipatria by end of 2026; EnergySource Minerals has permits for Project ATLiS [P, CalMatters Sept 2026, https://calmatters.org/environment/2026/09/lithium-valley-salton-sea-projects/].
- **Coso** (Inyo County, on the Navy's China Lake range [GK]): 0.92 TWh in 2025 [P-data].

Solar and batteries
- 2025 output [P-data]: Solar Star 1.62 TWh; Edwards Sanborn (all units) 1.75; Desert Sunlight 1.14; Topaz 1.02; Eland phases 1 and 2 0.94; Ivanpah 0.69; Aquamarine 0.66; Mojave Solar 0.59. Solar thermal plants 1.86 TWh of the 54.9 TWh.
- Inventory, Sept 2026, plants in California [P-data, our sums]: batteries 16,489 MW holding 56,503 MWh at 246 sites, another 10,613 MW planned; solar 25,633 MW, 7,636 MW planned; wind 6,612 MW; gas 40,280 MW; geothermal 2,936 MW; hydro 10,026 MW; pumped storage 3,704 MW.
- CAISO Key Statistics, Oct 2026 [P, https://www.caiso.com/documents/key-statistics-oct-2026.pdf]: installed batteries 17,285 MW on 31 Oct 2026; record demand 52,061 MW on 6 Sep 2022; 2026 monthly peaks 43,625 MW (July), 47,140 (Aug), 50,335 on 9 Sep at 5:54 p.m., 46,786 (Oct); solar record 23,896 MW on 19 Aug 2026; wind record 8,312 MW on 15 May 2026; steepest three-hour ramp 25,023 MW on 25 Oct 2026; wind and solar curtailed by month in 2026: Jan 26,572 MWh, Feb 242,714, Mar 774,415, Apr 1,460,005, May 1,448,995, Jun 600,081, Jul 241,073, Aug 154,939, Sep 166,629, Oct 182,465 (sum 5.30 million MWh [derived]); real-time market benefits $9.6 billion since 2014; 24 participants in 12 states.
- Curtailment 2024: 3.4 million MWh, up 29% on 2023, 93% of it solar [P, EIA Today in Energy 28 May 2025, https://www.eia.gov/todayinenergy/detail.php?id=65364].
- **Edwards Sanborn** (Kern County, partly on Edwards Air Force Base [GK]): 14 inventory entries, 957 MW solar, 1,066 MW batteries holding 2,615 MWh [P-data]. Developer claims of 3,287 MWh not opened; not used.
- **Ivanpah**: 386 MW (392.8 MW nameplate in the inventory); $1.6 billion federal loan guarantees; PG&E agreed in Jan 2025 to end its contracts for two units, which ran to 2039, subject to CPUC approval; SCE in talks about the third [P, E&E News, https://www.eenews.net/articles/ivanpah-solar-plant-casts-a-shadow-on-doe-loans/]. CPUC Resolution E-5429 rejecting the terminations "without prejudice" [S]; not opened. The plant generated 0.69 TWh in 2025 [P-data].
- **Darden** (Fresno County): 1,150 MW solar, up to 1,150 MW / 4,600 MWh batteries, about 9,500 acres, land bought from Westlands Water District, certified by the CEC 12 June 2025, under construction [P, https://www.energy.ca.gov/powerplant/solar-photovoltaic-pv/darden-clean-energy-project].
- **Willow Rock** (Kern County): compressed-air storage, 500 MW net, 4,000 MWh net, Hydrostor, certified by the CEC 19 Dec 2025, pre-construction [P, https://www.energy.ca.gov/powerplant/caes/willow-rock-energy-storage-center].
- **Menifee Power Bank**: 680 MW / 2,720 MWh, opened 2024, at the coordinates of the Inland Empire Energy Center gas plant (819 MW, retired 2020) [P-data].

Wind
- Inventory counts [P-data, our boxes]: Tehachapi area 3,677 MW in 42 entries; Solano County 1,098 MW; San Gorgonio Pass 674 MW in 22 entries; Altamont Pass 326 MW (Golden Hills 2015, Vasco 2011, Summit 2021 and others). The Altamont Pass Windplant (332.5 MW, opened 1983) retired in 2015.
- 2025 [P-data]: Alta Wind (8 entries) 2.29 TWh; Shiloh (4) 1.34; Solano Wind (SMUD) 0.77; Golden Hills 0.25; Mountain View I and II 0.28.
- **Offshore**: lease sale 6 to 7 Dec 2022, five leases (two off Humboldt, three off Morro Bay), $757.1 million, about 373,268 acres, over 4.5 GW; lease 0565 (Invenergy, Morro Bay) cancelled in 2026 by settlement; lease 0561 (RWE, Humboldt) relinquished 3 Sep 2026; lease 0564 (Golden State Wind, Morro Bay) to be cancelled under a 27 Apr 2026 agreement; no status change shown for 0562 and 0563 [P, BOEM, https://www.boem.gov/renewable-energy/state-activities/california]. California sued on 28 Aug 2026 over the Golden State Wind deal (about $120 million refund, 2 GW project); state plan is 25 GW by 2045 [P, offshoreWIND.biz 31 Aug 2026].

Hydro and pumped storage (2025 [P-data])
- Shasta 2.35 TWh (five generators; power sold by WAPA [P, Reclamation fact sheet Jan 2025]); Edward Hyatt (Oroville) 1.95; Colgate 1.26; Devil Canyon 0.79; Big Creek powerhouses 1 to 8 2.24; Holm 0.58; Folsom 0.50; Thermalito 0.32.
- Pumped storage net output: Helms -0.47; Gianelli (San Luis) -0.15; Castaic +0.16 (it also passes aqueduct water downhill); Eastwood 0.09. Inventory capacity: Castaic 1,682 MW, Helms 1,053 MW, Gianelli 424 MW, Hyatt 644 MW (293 MW reversible), Eastwood 200 MW.
- PG&E hydro system: 67 powerhouses, about 3,900 MW, more than 100 reservoirs, 16 river basins [P, https://www.pge.com/en/about/pge-systems/hydroelectric-system.html].
- **Klamath**: PacifiCorp's Klamath project was seven dams, 169 MW; the four lower dams (163 MW) were removed, Copco 2 in Nov 2023 and Iron Gate, Copco 1 and J.C. Boyle by Oct 2024; fish regained more than 400 stream miles [P, https://klamathrenewal.org/the-project/].
- Hoover Dam 2025: 2.74 TWh both sides (Nevada 1.81, Arizona 0.93); Parker 0.36 [P-data].

## 3. Utilities (EIA-861 final 2025 [P-data] unless noted)

| Utility | Type | TWh over its wires | Customers | 2025 peak MW | Notes |
|---|---|---|---|---|---|
| PG&E | investor-owned | 71.76 (24.19 its own supply + 47.57 delivered for other suppliers) | 5.73 million | 16,443 | "more than 16 million people across 70,000 square miles" [P, PG&E release 9 Nov 2026] |
| SCE | investor-owned | 78.27 (50.35 + 27.92) | 5.33 million | 21,112 | 15 million people, 50,000 square miles, 15 counties, 125,000 miles of lines [P, sce.com] |
| SDG&E | investor-owned | 16.79 (2.88 + 13.90) | 1.54 million | 5,032 | 3.7 million people, 4,100 square miles [P, sdge.com] |
| LADWP | city | 20.72 | 1.52 million | 5,239 | own balancing area; ladwp.com blocked |
| SMUD | public district | 10.51 | 675,491 | 2,797 | 900 square miles, 1.5 million people [P, smud.org] |
| IID | irrigation district | 3.39 | 165,797 | 1,133 | own balancing area; to join the CAISO markets in 2028 [P, CAISO 1 May 2026] |
| Silicon Valley Power (Santa Clara) | city | 4.99, of which 4.59 industrial | 62,436 | 747 | |
| Modesto ID 2.59 (134,563); Turlock ID 2.19 (96,642); Anaheim 2.12; Riverside 2.10; Roseville 1.19; Vernon 1.03; Pasadena 1.02; Glendale 0.97; SF 0.96; Burbank 0.96; Palo Alto 0.92; Redding 0.75; PacifiCorp 0.73 (45,889); Liberty 0.53 (50,162); Merced ID 0.50; Lodi 0.44; Colton 0.36; Azusa 0.24; Moreno Valley 0.22; Shasta Lake 0.20; Bear Valley 0.14 (24,891); Surprise Valley 0.09 (4,712) | | | | | |

- CCAs: 25 in the 2025 file, 61.09 TWh to 6.16 million customers; largest Clean Power Alliance 10.42 TWh, San Diego Community Power 7.44, Ava 6.95, Marin Clean Energy 5.26, Central Coast Community Energy 5.14 [P-data]. Retail power marketers ("direct access") 21.65 TWh [P-data].
- Regulators: the CPUC (five commissioners appointed by the governor [GK]) regulates PG&E, SCE, SDG&E, PacifiCorp, Liberty and Bear Valley; public utilities answer to their own boards or councils.
- DWR (State Water Project): generated 3.61 TWh, used 3.23 TWh in its own operations, peak 1,416 MW (2025); Metropolitan Water District used 1.58 TWh in its own operations [P-data, EIA-861 Operational Data]. The claim that the State Water Project is "the largest single user of electricity in California" could not be opened on a DWR page (water.ca.gov returned 403) and is not used.

## 4. Fuel supply

- Gas received by California from other states, 2024 [P, EIA]: 2,042,808 MMcf; from Arizona 898,052 (44%), Oregon 686,167 (34%), Nevada 458,589 (22%). Delivered onward to Mexico 155,767; to Arizona 81,121; to Nevada 48,413. Total consumption 1,938,982 MMcf (2024). Marketed production in California 124,391 MMcf (2024), 111,955 (2025).
- CEC: California depends on out-of-state gas for "nearly 90 percent" of supply [P, CEC supply and demand page; the page's demand figures are for 2012].
- Storage: 14 fields, all depleted oil or gas fields; total capacity 604,048 MMcf; working gas 323,068 MMcf (2024) [P, EIA].
- **Aliso Canyon**: leak 23 Oct 2015 to 12 Feb 2016; inventory limit set at 68.6 Bcf on 31 Aug 2023, against 86 Bcf before the leak [P, CPUC Aliso page]. CPUC plan (Nov 2024 fact sheet): a proceeding to close the field opens when the peak-day demand forecast for two years out falls to 4,121 MMcf a day and a biennial assessment finds it can close without harming reliability or rates [P, https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/safety-and-enforcement-division/documents/fact-sheets/ac-pd-fact-sheet-111324.pdf]. First biennial assessment 1 Oct 2025 [P, listed on the page]. SoCalGas application A.26-01-009 and its outcome [S].
- Pipelines in the map data (EIA): interstate El Paso, Transwestern, Mojave, Kern River, Questar Southern Trails, North Baja, Gas Transmission Northwest, Ruby, Tuscarora, Northwest; intrastate California Gas Transmission (PG&E, 669 segments), Southern California Gas (206), SDG&E, Southwest Gas, Paiute.
- Basins: gas arriving from Arizona comes from the Permian and San Juan basins; gas through Nevada (Kern River) from the Rockies; gas through Oregon from Alberta and, on Ruby, the Rockies [GK; the entry states are P].
- Fuel receipts (EIA-923) name marketers and the gas utilities as sellers, so they do not show basins: PG&E 80 Bcf, Calpine 72, SoCalGas 55, CRC Marketing 23 (Elk Hills field gas [GK]) [P-data].
- Coal: Argus only (above). Imported coal power 4,446 GWh in 2025 (CEC) [P]. Intermountain Power Project, Utah (off the map): 4.20 TWh from coal and 0.59 TWh from gas in 2025 [P-data]; new gas units for 840 MW began commercial operation July 2025, designed for 30% hydrogen at start and 100% by 2045 [P, https://www.ipautah.com/ipp-renewed/]; coal units "idle since November" 2025, Utah seeking a buyer under a 2024 law [P, Utah News Dispatch via Daily Herald, 24 Mar 2026].
- Uranium: nothing public on the origin of Diablo Canyon's fuel. Not researched further.

## 5. Transmission and markets

- CAISO: Extended Day-Ahead Market launched 1 May 2026 with PacifiCorp; Portland General Electric due October 2026; LADWP and others in 2027; IID to join both markets in 2028; real-time market has 22 participants in 11 states (May 2026) and $8.6 billion in benefits since 2014 ($9.6 billion by the Q3 2026 report) [P, https://www.caiso.com/about/news/news-releases/edam-is-live-pacificorp-and-caiso-successfully-launch-new-market-may-1 and Key Statistics Oct 2026].
- Balancing areas with California plants, 2025 generation [P-data]: CAISO 171.5 TWh; Balancing Authority of Northern California (SMUD and others) 14.5; LADWP 10.3; IID 6.0; Turlock 2.0.
- Paths [W]: Pacific DC Intertie, 846 miles, plus and minus 500 kV, 3,100 MW, Celilo (The Dalles, Oregon) to Sylmar, first phase May 1970, southern station managed by LADWP. Path 15, 84 miles, three 500 kV lines, 4,800 to 5,400 MW northbound, third Los Banos to Gates line finished 21 Dec 2004. Path 26, three 500 kV lines Midway to Vincent/Whirlwind, 3,700 MW southbound, 3,000 MW northbound. Path 46 (West of Colorado River), 14 lines, 10,623 MW westbound. Intermountain DC (Path 27), 488 miles, plus and minus 500 kV, 2,400 MW, Delta, Utah to Adelanto.
- Trans Bay Cable: 53 miles of DC cable under San Francisco Bay, Pittsburg to San Francisco, about 40% of San Francisco's daily power [P, https://www.transbaycable.com/]. Drawn in the dataset as a 200 kV DC line.
- In the baked data the Pacific DC Intertie is drawn (HIFLD, "Celilo to Sylmar East") but classed as an ordinary 500 kV line; the Intermountain line is classed DC.
- Named OSM lines: `build/raw/power/lines_ca.json` had not arrived when this was written (checked at start and before finishing).

## 6. Wildfire

- Camp Fire, 8 Nov 2018: 153,336 acres, 18,804 structures, 85 deaths, cause "Power Lines" [P, CAL FIRE, https://www.fire.ca.gov/incidents/2018/11/8/camp-fire]. PG&E bankruptcy 2019 to 2020 [GK].
- Eaton Fire, 7 Jan 2025: 14,021 acres, 9,419 structures destroyed, 19 deaths, cause listed "Electrical" [P, CAL FIRE, https://www.fire.ca.gov/incidents/2025/1/7/eaton-fire].
- CPUC: utilities may shut off power to reduce fire risk; six utilities do so; electrical equipment caused less than 10% of reported wildfires but roughly half of the most destructive; first authority 2012; penalties in Nov 2024 of $2,339,690 (SCE) and $1,753,100 (PG&E) for 2021 shutoffs [P, https://www.cpuc.ca.gov/psps].
- PG&E undergrounding: 1,500 miles energized since 2021 (release 9 Nov 2026); 325 miles in 2026; ignition risk on those lines cut about 98%; a 10-year plan for 5,000 miles is pending; a CPUC proposed decision would cut the eligible miles to about 1,100 [P, PG&E release via PR Newswire, https://finviz.com/news/419374/pge-achieves-1500-mile-milestone-in-major-wildfire-safety-undergrounding-effort].

## 7. Policy

- SB 100 (2018): renewable and zero-carbon resources to supply 100% of retail electricity sales by 2045 [P, https://www.energy.ca.gov/sb100]. Interim renewable targets (60% by 2030) and SB 1020 (90% by 2035, 95% by 2040) [GK; leginfo returned 403].
- Rooftop solar: CPUC decision D.22-12-056 (Dec 2022) created the net billing tariff for applications from 15 Apr 2023 [P, https://www.cpuc.ca.gov/nemrevisit].
- CEC summer 2026 outlook (4 May 2026): more than 31,000 MW of new plants since 2020; over 17,000 MW of batteries; up to 4,500 MW of contingency resources [P, https://www.energy.ca.gov/news/2026-05/california-energy-leaders-report-progress-grid-reliability-ahead-summer-2026].
- Refineries: CEC list as of 8 July 2026 has 11 refineries with 1,338,171 barrels a day of crude capacity; largest Marathon Los Angeles 365,000, Chevron El Segundo 269,000, Chevron Richmond 245,271 [P, https://www.energy.ca.gov/data-reports/energy-almanac/californias-petroleum-market/californias-oil-refineries]. The list has no Phillips 66 Los Angeles or Valero Benicia entry; the reasons were not opened.

## 8. Tour ideas

1. Home: a quarter of the power is imported. 2. Solar by day (Mojave and the desert), and the midday surplus. 3. Batteries and Night view (Moss Landing, the fire). 4. Gas and the pipes: three doors into the state; coastal plants. 5. Diablo Canyon and San Onofre. 6. Geothermal: Geysers and Salton Sea. 7. Water power and water pumping: Shasta to Edmonston. 8. The grid: Path 15, the DC lines, imports. 9. Who delivers: utilities, wildfire. 10. What comes out of the stacks / what is planned.

## 9. Least sure

- 2026 events found only in search summaries and not opened: Coastal Commission and water-board approvals for Diablo Canyon; CPUC Resolution E-5429 on Ivanpah; Aliso Canyon application A.26-01-009; LADWP's "coal-free" announcement; battery discharge record of 12.99 GW on 9 July 2026; RWE and Invenergy settlement amounts.
- Exact once-through-cooling deadlines after the 2023 amendment.
- Transmission path ratings rest on Wikipedia.
- Basin shares of gas supply (Permian, San Juan, Rockies, Canada): only the entry states are documented.
- The State Water Project as "largest single user".
- Rate cases, the 2025 wildfire-fund law, data-center load forecasts, refinery closures, LADWP's 2035 goal, SMUD's 2030 goal: not researched (no search budget).

---

## Used on the map: verification log

### [S] figures confirmed by opening the source

| Figure | What I opened |
|---|---|
| NRC renewal 2 Apr 2026; licenses to 2 Nov 2044 and 26 Aug 2045; state law through 2030; CPUC dates 31 Oct 2029 and 31 Oct 2030 | American Nuclear Society article, 3 Apr 2026 |
| Moss Landing fire 16 to 18 Jan 2025, 300 MW, about 100,000 modules, 55% damaged, nearly 40,000 removed, finish mid-2027 | EPA news release, 8 Sep 2026 |
| EDAM launch 1 May 2026 with PacifiCorp; later entrants; market benefits | CAISO news release 1 May 2026; CAISO Key Statistics Oct 2026 |
| Offshore leases: 2022 sale, 2026 cancellations, state lawsuit, 25 GW by 2045 | BOEM California page; offshoreWIND.biz 31 Aug 2026 |
| Battery capacity (17,285 MW), 2026 peak (50,335 MW), record (52,061 MW), curtailment by month | CAISO Key Statistics, Sept and Oct 2026 PDFs |
| Lithium: appeals court ruling Aug 2026, Hell's Kitchen size, Berkshire Hathaway demonstration plant, 375 million batteries | CalMatters, Sept 2026 |
| Aliso Canyon 68.6 Bcf; leak dates; 4,121 MMcf a day trigger | CPUC Aliso Canyon page; CPUC fact sheet Nov 2024 |
| PG&E 1,500 miles underground; 5,000-mile plan; proposed cut to about 1,100 | PG&E release, 9 Nov 2026 |
| Intermountain: 840 MW gas units in service July 2025; coal units idle since Nov 2025 | Intermountain Power Agency page; Utah News Dispatch 24 Mar 2026 |
| Ivanpah: PG&E contract termination announced Jan 2025, subject to CPUC | E&E News |

### [S] or [GK] figures dropped (not on the map)

- Ivanpah: CPUC Resolution E-5429 outcome. The card says only that the CPUC had to approve and that the plant generated in 2025.
- Diablo Canyon: Coastal Commission and water-board dates.
- Aliso Canyon: 2026 application and any 2026 decision.
- "Coal-free Los Angeles" announcement and the 11% coal share for 2024.
- Battery discharge record (12.99 GW).
- Once-through-cooling deadline dates (the cards use the inventory's planned retirement years, which the dataset supplies).
- Rancho Seco capacity and dates (one sentence of general knowledge remains on the Cosumnes card: that the plant stands beside the closed Rancho Seco nuclear plant, which the inventory's "Rancho Seco Solar" entries corroborate by name).
- State Water Project "largest single user".
- Edwards Sanborn developer figures (875 MW, 3,287 MWh): replaced by inventory sums.
- Hell's Kitchen financing (SPAC) details.
- SB 1020 interim targets and the 60% by 2030 renewable target (leginfo blocked): not on the map.

### Statements on the map that rest on general knowledge, not an opened source

- Which basins feed which pipelines (Permian and San Juan through Arizona; Rockies on Kern River and Ruby; Alberta on Gas Transmission Northwest).
- The CPUC regulates the investor-owned utilities; public utilities set their own rates.
- PG&E's 2019 bankruptcy.
- Coso is on the Navy's China Lake range; Edwards Sanborn is partly on Edwards Air Force Base.
- Rancho Seco closed in 1989 after a public vote.
- How combined-cycle, pumped storage, once-through cooling and direct current work.

### Coordinates

- Plants: EIA-860M via the dataset.
- Hubs (Sylmar, Adelanto, Los Banos, Gates, Midway, Vincent, Devers, Malin, Trans Bay Cable terminal): line endpoints in the baked HIFLD data; each matches the place name.
- Edmonston Pumping Plant -118.824, 34.944 (from research/california.md, where it was checked for the water map; the Pastoria plant in EIA data is 2 km away, as expected).
- Aliso Canyon -118.564, 34.315; Paradise -121.62, 39.76; Santa Clara -121.955, 37.354; city markers: standard city coordinates. Offshore wind marker is approximate (centre of the Morro Bay lease area, about 20 miles offshore) and the card says so. Gas entry markers are placed where the pipelines in the dataset cross the state line.
