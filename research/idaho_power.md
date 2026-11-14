# Idaho power: research fact sheet (generation, fuel chains, grid, users, pollution)

Compiled 2026-11-13 for the "Idaho Power" electricity map (power/content/id.js). Format follows `arizona_power.md`.

**Conventions**
- TWh = terawatt-hour = 1 billion kWh = 1 million MWh. GWh = 1,000 MWh. MW = megawatt (capacity). IPC = Idaho Power Company (parent IDACORP). RMP = Rocky Mountain Power (PacifiCorp's name in Idaho). BPA = Bonneville Power Administration. IPUC = Idaho Public Utilities Commission. INL = Idaho National Laboratory. HCC = Hells Canyon Complex. B2H = Boardman to Hemingway. GWW = Gateway West. SWIP-N = Southwest Intertie Project North.
- Evidence tags: **[P]** = I opened the document or data file and read the number. **[P-data]** = I summed rows of an EIA data file myself. **[S]** = seen only in a search summary; not used on the map unless later opened. **[derived]** = my arithmetic from tagged figures. **[GK]** = general knowledge, not opened this session. **unverified** = could not confirm; not used.
- EIA files used (downloaded 13 Nov 2026):
  - EIA-923 final 2025: https://www.eia.gov/electricity/data/eia923/ ("Page 1 Generation and Fuel Data", "Page 5 Fuel Receipts and Costs")
  - EIA-861 final 2025: https://www.eia.gov/electricity/data/eia861/ (`Sales_Ult_Cust_2025.xlsx`)
  - EIA-860M, September 2026 inventory: https://www.eia.gov/electricity/data/eia860m/
  - EIA State Electricity Profile, Idaho, data year 2024: https://www.eia.gov/electricity/state/idaho/ , workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20ID.xlsx (Tables 1, 2A, 2B, 3, 4A, 5, 7, 8, 10, 19). The 2025 profile was not posted on 13 Nov 2026.
- Company filings opened: IDACORP / Idaho Power 10-K for 2025 (filed 19 Feb 2026) https://www.sec.gov/Archives/edgar/data/1057877/000105787726000028/ida-20251231.htm ; 10-Q for the quarter ended 30 Sep 2026 (filed 29 Oct 2026) https://www.sec.gov/Archives/edgar/data/1057877/000105787726000137/ida-20260930.htm ; Avista 10-K for 2025 (filed 25 Feb 2026) https://www.sec.gov/Archives/edgar/data/104918/000119312526067872/ava-20251231.htm
- Plant coordinates are from EIA-860M (baked into power/data/id.js). I compared 15 of them with places I know (Brownlee, Dworshak, Langley Gulch, Cabinet Gorge, Palisades, American Falls, Raft River and others) and they agree to about 0.01 degree.

---

## 1. Statewide budget

**Which year.** Idaho uses much more electricity than it generates, so the budget has to show net imports. Only EIA's Table 10 (latest year 2024) gives a balanced account with imports and losses. I therefore drew BOTH tabs with 2024 so that supply equals use (28.38 TWh), and put the 2025 generation figures in the row notes and the HUD.

### 1a. Where it comes from

| Source | 2024 TWh | share of 2024 supply | 2025 TWh (generation only) | 2010 TWh | Tag |
|---|---|---|---|---|---|
| Hydropower | 9.150 | 32.2% | 8.851 | 9.154 | 2024, 2010 [P] Table 5; 2025 [P-data] EIA-923 |
| Natural gas | 6.285 | 22.1% | 6.365 | 1.689 | same |
| Wind | 3.016 | 10.6% | 2.825 | 0.441 | same |
| Solar farms | 1.018 | 3.6% | 1.628 | 0 | same |
| Wood and other biomass | 0.405 (wood 0.308 + other biomass 0.097) | 1.4% | 0.502 (wood solids 0.128, black liquor 0.280, landfill gas 0.064, other biogas 0.030) | 0.501 | same |
| Geothermal, waste heat, oil, batteries | 0.161 (geothermal 0.092, other 0.070, oil 0.000, battery -0.001) | 0.6% | 0.114 (geothermal 0.088, waste heat 0.066, oil 0.0002, batteries -0.040) | 0.151 | same |
| Coal | 0 | 0 | 0 | 0.088 | same |
| **Total generated in Idaho** | **20.035** | 70.6% | **20.285** | 12.025 | same |
| **Net imports from other states** | **8.348** | 29.4% | not yet published | 2009: 11.975 | [P] Table 10 |
| **Total supply** | **28.383** | 100% | | 2009: 25.089 | [P] Table 10 |

Notes
- 2025 shares of in-state generation [derived]: hydro 43.6%, gas 31.4%, wind 13.9%, solar 8.0%, biomass 2.5%, other 0.6%.
- Oxbow and Hells Canyon dams sit on the Idaho-Oregon line with powerhouses on the Oregon bank. EIA assigns them to Oregon: 0.990 and 2.025 TWh in 2025 [P-data]. They are NOT in Idaho's 20.3 TWh. Brownlee (2.256 TWh) is. All three belong to Idaho Power.
- Net imports by year, TWh [P]: 2009 11.97; 2012 10.48; 2017 8.46; 2020 8.75; 2021 10.43; 2022 11.88; 2023 9.70; 2024 8.35. Net trade index 0.52 (2009), 0.71 (2024).
- Generation by year, TWh [P]: 13.10 (2009), 12.02 (2010), 15.19 (2013), 18.17 (2018), 16.84 (2021), 16.28 (2022), 17.84 (2023), 20.04 (2024). Hydro: 10.43 (2009), 11.02 (2018), 8.00 (2021), 8.36 (2022), 8.38 (2023), 9.15 (2024). Gas: 1.64 (2009), 3.28 (2018), 4.33 (2022), 5.69 (2023), 6.29 (2024).
- Monthly 2025 [P-data], GWh: hydro peaks April (1,121) and July (1,113), low in November (381). Gas is highest in August (747), July (710) and January (656), lowest in April (277). Solar 49 in January, 224 in June. Wind 150 in September, 322 in March.
- Gas burned by Idaho power plants in 2025: 63.0 Bcf in total, 53.8 Bcf for electricity [P-data].
- By grid operator area, 2025 generation [P-data]: Idaho Power 11.45 TWh, Avista 3.94, BPA 3.01, PacifiCorp East 1.87.
- Small-scale (rooftop) solar, EIA estimate 2024: 0.276 TWh from 178 MW [P] Table 19. Not in the totals above.

### 1b. Where it goes (2024, EIA Table 10) [P]

| Item | 2024 TWh | share of supply |
|---|---|---|
| Homes (residential sales) | 9.832 | 34.6% |
| Industry (industrial sales) | 9.574 | 33.7% |
| Businesses (commercial sales) | 6.964 | 24.5% |
| Estimated losses | 1.230 | 4.3% |
| Direct use (used on site by the plant owner) | 0.575 | 2.0% |
| Unaccounted | 0.209 | 0.7% |
| Net interstate exports | 0 | |
| **Total** | **28.383** | |

- Retail sales 26.37 TWh in 2024, 868,141 residential customers, 1,021,781 customers in all; average price 9.51 cents/kWh, rank 44 (residential 11.52, commercial 9.17, industrial 7.69) [P] Tables 1 and 8.
- 2025 sales (EIA-861 final, my sum of all Idaho rows) [P-data]: 26.81 TWh; residential 9.94, commercial 7.09, industrial 9.78; 1,043,533 customers (887,745 residential); revenue $2.605 billion, 9.72 cents/kWh [derived].
- EIA files irrigation pumping under "industrial" or "commercial"; it has no row of its own. Idaho Power reports it separately (section 5).

### 1c. Summary statistics, 2024 (Table 1) [P]

Net summer capacity 5,548 MW (rank 44); net generation 20,035,438 MWh (rank 43); retail sales 26,369,555 MWh (rank 40); CO2 3,482 thousand metric tons (rank 45), 382 lb/MWh (rank 46); SO2 2,832 short tons; NOx 4,446 short tons; primary energy source hydroelectric.

Ten largest plants by 2024 generation (Table 2B) [P]: Brownlee 2.21 TWh, Langley Gulch 1.83, Rathdrum Power LLC 1.37, Dworshak 1.35, Evander Andrews 1.10, Bennett Mountain 0.92, Rathdrum (Avista) 0.87, Cabinet Gorge 0.86, Palisades 0.74, C.J. Strike 0.42.

### 1d. Capacity, September 2026 (EIA-860M operating generators in Idaho, nameplate) [P-data]

Hydro 2,696 MW (76 plants); wind 1,132; solar 827; batteries 659 MW holding 2,632 MWh; gas combined cycle 620; gas combustion turbine 616; wood 126; gas steam 21; gas engines 17.5; geothermal 16; other (waste heat) 16; landfill gas 13.5; other biomass 9; oil 5. No coal and no nuclear power plant.
- Added 2024: wind 160 (Cedar Creek), solar 100, batteries 40. 2025: batteries 419, solar 200, geothermal 16 (Raft River replacement unit). 2026 through September: batteries 200, solar 125, gas engines 17.5 (Idaho Falls).
- Wind by county: Bonneville 366 MW, Elmore 225, Twin Falls 194, Bingham 160, Power 124, Cassia 53, Gooding 10. Solar: Ada 385, Twin Falls 222, Elmore 160, Power 40, Owyhee 20.
- Planned (EIA-860M): Blacks Creek Solar 400 MW, Ada County, 2027, under construction; Arco Wind (PacifiCorp) 153 MW in 2027 and 206 MW in 2028, approvals received, county given as Bonneville; Crimson Orchard solar 100 MW with battery 100 MW, Elmore County, 2027, approvals pending. No planned gas plant is in the federal list yet (Idaho Power's are in section 2c).

### 1e. Emissions (Table 7) [P]

| Year | CO2, thousand metric tons | of which gas | coal | SO2 short tons | NOx short tons | CO2 lb/MWh |
|---|---|---|---|---|---|---|
| 2009 | 1,024 | 780 | 242 | 5,098 | 2,218 | 172 |
| 2010 | 1,213 | 737 | 474 | 7,322 | 4,556 | 222 |
| 2018 | 1,766 | 1,653 | 111 | 4,266 | 4,673 | 214 |
| 2021 | 2,573 | 2,440 | 133 | 4,006 | 4,349 | 336 |
| 2022 | 2,287 | 2,245 | 43 | 3,569 | 4,089 | 309 |
| 2023 | 3,002 | 3,002 | 0 | 3,470 | 4,164 | 370 |
| 2024 | 3,482 | 3,482 | 0 | 2,832 | 4,446 | 382 |

- CO2 from Idaho plants more than tripled from 2009 to 2024 as gas generation rose from 1.6 to 6.3 TWh. The 2024 rate, 382 lb/MWh, is the fifth lowest of the states (rank 46 of 51) [P].
- These figures count only plants inside Idaho. They leave out the coal and gas plants in Wyoming and Nevada that Idaho Power part-owns, and whatever made the imported power.
- Most SO2 (2,813 of 2,832 tons in 2024) is in EIA's "other" fuel row [P]. Which plants is not stated; pulp mill and fertilizer plant boilers are the likely sources [GK, not used].
- The small coal entries through 2022 were industrial boilers (sugar factories) [GK]; the federal inventory lists no coal generator in Idaho in 2026 [P-data].

---

## 2. Candidate places (2025 output is EIA-923 [P-data]; capacity and dates come from the baked dataset)

### 2a. Hydro
1. **Hells Canyon Complex** (Brownlee 811, Oxbow 3014, Hells Canyon 3013; Idaho Power). 2025: Brownlee 2.256 TWh, Oxbow 0.990, Hells Canyon 2.025; together 5.27 TWh [P-data]. FERC-listed capacity of the three 1,276 MW [P 10-K table]. About 70% of Idaho Power's hydro generation and 30% of its total generation in a normal year [P] https://www.idahopower.com/energy-environment/energy/energy-sources/hydroelectric/ . Licence: issued August 1955; Brownlee completed 1958 [P] https://www.nwcouncil.org/reports/columbia-river-history/hellscanyon/ . Licence expired July 2005; new application filed 21 July 2003; water-quality certifications from Idaho and Oregon May 2019; draft supplemental EIS 14 Jan 2026 [P] https://idahopower.com/energy-environment/energy/energy-sources/hydroelectric/relicensing/relicensing-hcc/ . Final supplemental EIS noticed in the Federal Register 10 Sep 2026 (91 FR 57591, Project 1971-079) [P] https://www.federalregister.gov/documents/2026/09/10/2026-18456/ . Idaho Power expects a licence "in 2027 or thereafter"; costs of $35 to $45 million a year until then; IPUC in July 2026 found 2016-2025 relicensing spending prudent [P 10-Q]. Customers pay $38.5 million a year toward relicensing financing costs since 1 Oct 2025 (was $8.8 million) [P 10-K]. Fish counts before the dams (about 17,000 fall Chinook in 1958) [P] NW Council page. No fish passage: Wikipedia only, and the settlement of 22 Apr 2019 on Chinook and steelhead is [S]; card says only that the three dams have no fish ladders [GK, flagged].
2. **Dworshak** (840; Army Corps). 2025: 1.517 TWh [P-data]. 717 ft high, opened 1973: Wikipedia infobox citing the Corps (Corps page returned 403). 200,000 AF reserved for fish flows under the 2004 Nez Perce agreement [P, from research/idaho.md]. BPA sells the output [P: BPA markets power from 31 federal dams] https://www.bpa.gov/-/media/Aep/about/publications/general-documents/bpa-facts.pdf
3. **Cabinet Gorge** (833; Avista), Clark Fork River. 2025: 0.886 TWh. Avista owns Noxon Rapids (Montana, 2199: 1.362 TWh in 2025) and Cabinet Gorge under one 45-year FERC licence that expires in 2046 [P Avista 10-K]. Opened 1952 (dataset).
4. **Albeni Falls** (851; Army Corps), Pend Oreille River. 2025: 0.177 TWh. Opened 1955, raises Lake Pend Oreille: Wikipedia citing the Corps. Spillway-gate defect and replacement: Corps page blocked, unverified, not used.
5. **Palisades** (850; Reclamation). 2025: 0.657 TWh; 2024: 0.744 [P]. Built 1951-57 [P, water research, Reclamation page]. Reservoir at 8.0% on 15 Oct 2026 [P water research].
6. **American Falls** (809; Idaho Power owns the powerhouse, Reclamation the dam [P 10-Q]). 2025: 0.206 TWh. Dam completed 1927, replaced 1978 [P] https://www.usbr.gov/projects/index.php?id=24 . Licence expired February 2025; annual licences since; new licence expected 2027; nameplate 92.3 MW, FERC-authorised 67.5 MW [P 10-Q]. Reservoir fell to 3.3% on 13 Sep 2026 [P water research].
7. **C.J. Strike** (812). 2025: 0.364 TWh. Licence to 2034 [P 10-K].
8. **Swan Falls** (819). 2025: 0.110 TWh. Built 1901, the oldest hydroelectric dam on the Snake; powerhouse replaced in the 1990s: Wikipedia citing Idaho Power. 1984 agreement minimum flow 3,900 cfs in summer; flow 4,610 cfs on 9 Jul 2026 [P water research, IDWR].
9. **Mid-Snake plants**: Bliss (810) 0.298 TWh; Lower Salmon (816) 0.197; Upper Salmon A and B 0.182; Lower and Upper Malad 0.160; Thousand Springs 0.052; Shoshone Falls 0.052; Twin Falls 0.044 [P-data]. Idaho Power: 17 hydro projects, 1,818 MW, 7.3 TWh average over 20 years; 7.0 TWh in 2025 [P 10-K]. 2026: 4.47 TWh in the first nine months against 5.75 TWh in the same months of 2025 [P 10-Q].
10. **Lucky Peak** (10014), Boise River, 0.311 TWh; built 1988 at a Corps dam; operator on file Boise-Kuna Irrigation District (dataset).
11. **Idaho Falls city plants**: Gem State 0.117 TWh; City, Upper, Lower No. 1 and 2 (dataset).
12. **Lower Granite** (6175, Washington; Army Corps): 1.461 TWh in 2025. Opened 1975; four lower Snake dams total more than 3,000 MW; agreement on the dams withdrawn 12 Jun 2025; only Congress can authorise breaching [P water research, CRS R49059].
13. Others in frame: Boundary (Seattle, WA), Libby and Hungry Horse (MT), Box Canyon (WA).

### 2b. Imported coal and gas (off the map)
14. **Jim Bridger**, Wyoming (8066). Idaho Power one-third, PacifiCorp two-thirds and operator. Units 1 and 2 converted to gas in spring 2024; units 3 and 4 planned to convert in 2030 [P 10-K]. 2025 whole plant: 4.876 TWh from coal, 2.711 TWh from gas [P-data]. 2025 coal receipts: 2.78 million tons from the Jim Bridger mine by conveyor or truck, 0.124 million from Antelope (Wyoming) and 0.100 million from Black Butte by rail [P-data]. Bridger Coal Company (Idaho Power one-third) has a coal agreement through 2027 [P 10-K]. EIA-860M: units 1 and 2 gas, 578 and 586 MW; units 3 and 4 coal, 578 and 584 MW [P-data].
15. **North Valmy**, Nevada (8224). Idaho Power 50%, NV Energy operator. Idaho Power left coal operations at unit 1 in December 2019 and unit 2 in December 2025. Unit 1 gas conversion in service December 2025; unit 2 completed June 2026, "ending all coal-fired generation at the plant" [P 10-K, 10-Q]. 2025: 1.29 TWh from coal [P-data]; 2025 coal from Spring Creek, Montana, 261,368 tons by rail [P-data].
16. **Boardman**, Oregon. Idaho Power 10%, Portland General Electric 90%; stopped burning coal October 2020 [P] https://www.idahopower.com/energy-environment/energy/energy-sources/thermal/emissions-data/ . Not in the map frame.
- Idaho Power supply 2025 [P 10-K]: hydro 7,021 GWh; jointly owned coal and gas plants 2,906; its Idaho gas plants 3,685; purchased power 6,783 (wholesale market 2,315; long-term contracts 4,468); total 20,395. Retail sales 16,177 GWh.
- Goals [P]: "100% clean energy by 2045" adopted 2019, called aspirational https://www.idahopower.com/energy-environment/energy/clean-today-cleaner-tomorrow/ ; exit from coal by end of 2030; five-year average 781 lb CO2/MWh for 2021-2025, about 35% below 2005 (emissions-data page).

### 2c. Natural gas
17. **Langley Gulch** (57028; Idaho Power; combined cycle, 2012). 2025: 1.755 TWh; 12.4 Bcf of gas received, all spot purchases [P-data]. Run as a baseload plant [P 10-K].
18. **Rathdrum Power LLC** (55179; also called Lancaster; combined cycle, 2001). 2025: 1.715 TWh; 11.5 Bcf, seller listed as Avista [P-data]. Avista buys the output under a contract ("Lancaster Plant PPA") [P Avista 10-K].
19. **Rathdrum** (7456; Avista; two turbines, 1994). 2025: 0.793 TWh. Used mainly for peaks [P Avista 10-K].
20. **Bennett Mountain** (55733; Idaho Power; 2005). 2025: 0.999 TWh. IPUC approved 167 MW more beside it in March 2026; construction began May 2026; service 2028 [P 10-Q].
21. **Evander Andrews, also called Danskin** (7953; Idaho Power). 2025: 0.926 TWh; 9.6 Bcf, spot purchases [P-data].
22. **Idaho Falls Power peaking plant** (68021): seven gas engines, 17.5 MW, 2026 [P-data].
23. Proposed: Idaho Power asked the IPUC in March 2026 for two more gas plants, 222 MW (2029) and 430 MW (2030); pending on 29 Oct 2026 [P 10-Q]. Sites not stated in the filing.
- 2025 plan (IRP) preferred portfolio through 2045: 1,445 MW solar, 885 MW storage, 700 MW wind, 550 MW new gas, 484 MW of coal units converted to gas [P] IPUC Order 36937, 17 Feb 2026 https://puc.idaho.gov/Fileroom/PublicFiles/ELEC/IPC/IPCE2523/OrdNotc/20260217Final_Order_No_36937.pdf
- Load forecast, five-year annual growth: retail sales 8.3% and peak 5.1% (2025 plan); preliminary 2027 plan 8.9% and 5.4% [P 10-Q].

### 2d. Wind, solar, batteries, geothermal
24. **Cedar Creek Wind** (65311; 160 MW, 2024; Bingham County): 0.455 TWh in 2025, the most of any Idaho wind farm [P-data].
25. **Goshen II / Meadow Creek / Wolverine Creek / Horse Butte** east of Idaho Falls: 0.337, 0.292, 0.144, 0.158 TWh. Horse Butte is run by Utah Associated Municipal Power Systems; Idaho Falls Power owns a share [P] https://www.ifpower.org/about-us
26. **Mountain Home and Hagerman wind clusters**: dozens of projects of 10 to 23 MW (dataset). Idaho Power buys from 1,128 MW of projects under the federal PURPA law, 625 MW of it wind, and 596 MW of other contracts [P 10-K].
27. **Matrix Pleasant Valley solar** (67211; 200 MW, 2025; Ada County): 0.460 TWh in 2025, the most of any Idaho solar farm. Pleasant Valley Solar 2 (125 MW) opened 2026 [P-data].
28. **Jackpot Solar** (65778; 120 MW, 2022): 0.275 TWh. **Franklin Solar** (67190; 100 MW, 2024): 0.252 TWh, with Idaho Power's 60 MW / 240 MWh battery beside it.
29. **Blacks Creek Solar** (planned, 400 MW, 2027, under construction) [P-data].
30. **Arco Wind** (planned, PacifiCorp, 359 MW, 2027-28) [P-data].
31. **Lava Ridge** (not built). BLM record of decision 6 Dec 2024: 231 turbines on federal land (down from 400) plus 10 on state land; turbines at least nine miles from Minidoka National Historic Site [P] https://www.boisestatepublicradio.org/environment/2024-12-06/blm-approves-lava-ridge-wind-energy-project . Interior Secretary Burgum announced the reversal on 6 Aug 2025, citing "crucial legal deficiencies"; permitting began 2019; halted by executive order January 2025 [P] https://www.spokesman.com/stories/2025/aug/06/us-secretary-of-interior-announces-end-to-lava-rid . Capacity (1,000 or 1,200 MW) conflicts between sources: not used. Developer Magic Valley Energy / LS Power [S].
32. **Batteries**: 659 MW / 2,632 MWh in Idaho, all since 2024 [P-data]. Hemingway 166 MW / 664 MWh; Boise Bench 150 / 600 (2026); Kuna BESS 150 / 600 (third party, 2025); Happy Valley 82 / 328; Franklin 60 / 240; Black Mesa 40 / 160. Idaho Power expects 557 MW of its own storage by end of 2026 [P 10-K].
33. **Raft River geothermal** (56317; 16 MW). 2025: 0.088 TWh. First unit 2008 (18 MW) retired 2025 and a 16 MW unit started 2025 [P-data]. Operator on file U.S. Geothermal (bought by Ormat, [S]). Neal Hot Springs (Oregon, 58022): 0.152 TWh.
34. **Clearwater Paper, Lewiston** (50637; 114 MW): 0.463 TWh in 2025, 0.280 of it from black liquor, a pulp-making by-product [P-data].
35. **Simplot Don plant, Pocatello** (50274; 15.9 MW waste heat): 0.066 TWh [P-data].
36. **Amalgamated Sugar** Nampa (54690) 0.047 TWh, Twin Falls (10504): gas-fired steam turbines at sugar factories [P-data].

### 2e. Nuclear research
37. **INL**: 890 square miles; established 1952 as the National Reactor Testing Station (the date is DOE's wording; EBR-I ran in 1951); 52 reactors built, four still operating [P] https://www.energy.gov/em/idaho-cleanup-project
38. **EBR-I**: on 20 Dec 1951 the first power plant to produce usable electricity from fission; lit four 200-watt bulbs; national historic landmark 1966; BORAX-III powered the town of Arco in 1955 [P] https://www.energy.gov/ne/articles/9-notable-facts-about-worlds-first-nuclear-power-plant-ebr-i
39. **New test reactors**: Aalo-X reached criticality at INL on Saturday 4 July 2026, a "zero-power" test, the fourth reactor to do so under DOE's Reactor Pilot Program; the goal of three by 4 July 2026 came from a May 2025 executive order; Antares Mark-0, Valar Ward 250 and Deployable Energy's Unity reached criticality in June [P] https://www.energy.gov/articles/department-energy-celebrates-fourth-criticality-ahead-july-4th-goal . Which of the June three are at INL: [S] only (Antares and Unity at INL, Valar in Utah), not used. MARVEL "by 2027" and Oklo Aurora: [S], not used. No reactor at INL sends power to the grid.
40. **Spent fuel**: 1995 settlement: Idaho allows limited shipments for 40 years; Navy addendum: Navy fuel arriving before 2026 must leave by 2035; cap of nine metric tons of heavy metal after 2035; at most 20 shipments a year on average [P] https://www.energy.gov/em/icpcab/articles/explaining-idahos-unique-settlement-agreement . The page dates the addendum 2004 where others say 2008; date not used.
- UAMPS / NuScale Carbon Free Power Project at INL (cancelled November 2023): could not open a source; not used.

---

## 3. Fuel supply chains

- **Gas**. Idaho Power's gas reaches its Idaho, Wyoming and Nevada plants under contracts with Williams Northwest Pipeline (150,763 MMBtu a day), Williams' Overthrust pipeline (89,000) and Tallgrass Ruby (39,000, rising to 78,000 in May 2026) [P 10-K]. Northwest Pipeline takes gas from western Canada and the Rocky Mountains: Wikipedia stub only [GK]; the map draws the line from the Oregon border near Payette across the Snake River Plain to the Wyoming corner (EIA map data). Gas Transmission Northwest crosses the Panhandle from the Canadian border at Eastport (EIA map data); the two Rathdrum plants sit on it [GK for the connection].
- EIA-923 receipts 2025 [P-data]: Langley Gulch 12.37 Bcf and Evander Andrews 9.63 Bcf, both "various, spot purchases"; Rathdrum Power 11.46 Bcf, seller Avista. Bennett Mountain and Avista's Rathdrum did not report receipts.
- Proposed Williams "Silver Spur" expansion into Idaho (about 88 miles of 24-inch pipe from Elko County, Nevada to Twin Falls County; FERC pre-filing accepted 24 Sep 2026; 275 MMcf/d): [S] only, FERC page returned 403. Not used.
- Idaho's own gas production (small wells in Payette County): not verified, not used.
- **Coal**. None is burned for power in Idaho. See Jim Bridger and North Valmy above.
- **Uranium**: no power reactor. Not relevant.

## 4. Transmission and markets

- **B2H**: 300 miles, Longhorn substation near Boardman, Oregon, to Hemingway; construction began June 2025; more than half of the towers up and nearly a quarter of the wire strung by autumn 2026; in service late 2027; Idaho Power about 45%, PacifiCorp about 55%; Idaho Power had spent about $1.15 billion by 30 Sep 2026 [P 10-Q]. Total cost $1.5 to $1.7 billion; state approvals 2023; Oregon commission upheld its approval November 2025; court challenges pending [P 10-K]. Purpose: imports in the hot months when air conditioners and irrigation pumps run [P Idaho Power B2H page]. Voltage 500 kV [GK; the filing says "high-voltage"]: card does not state it.
- **Gateway West**: Wyoming near Douglas/Casper to Hemingway; PacifiCorp majority owner; mostly 500 kV; Idaho Power's main piece is Segment E-8, Hemingway to Midpoint; request to the IPUC filed April 2026, pending; construction of E-8 would start 2028; whole segment in service 2030 or later; BLM environmental statement 2017 [P] https://idahopower.com/energy-environment/energy/planning-and-electrical-projects/current-projects/gateway-west/ and 10-Q. About 620 miles of 500 kV from Populus to Hemingway in pre-construction since March 2023 [P 10-Q].
- **SWIP-N**: 285 miles, Robinson Summit near Ely, Nevada, to Midpoint near Jerome; construction began June 2026; in service 2028; Idaho Power to buy about 11% plus about 11% more capacity for 40 years [P 10-K, 10-Q].
- Existing 500 kV in the dataset: Hemingway to Midpoint; Hemingway west toward Burns (the Summer Lake line); BPA lines Dworshak-Hatwai-Lower Granite and Taft-Bell-Garrison in the north. 345 kV: Midpoint-Borah-Kinport-Populus and on to Jim Bridger; Midpoint south to Nevada (Humboldt).
- OpenStreetMap line names arrived on 13 Nov 2026 and the data was re-baked (26 lines at 500 kV, 23 at 345 kV). Named lines: Summer Lake - Hemingway (PacifiCorp); Humboldt-Midpoint (NV Energy, 345 kV); BPA's Dworshak - Taft, Lower Granite-Hatwai, Lower Granite and Little Goose lines, Taft-Bell, Taft - Garrison, Taft - Hot Springs, Grand Coulee-Bell; NorthWestern's Garrison - Broadview; BC Hydro's Selkirk lines. Hemingway-Midpoint and the 345 kV lines across the plain carry no name in OpenStreetMap. Line cards use only geometry and figures already sourced above; that the Taft and Garrison lines carry Montana power west is [GK].
- **Markets**: Idaho Power and Avista take part in the Western Energy Imbalance Market run by California's grid operator [P 10-Ks]. Idaho Power says it is discussing a day-ahead market with others; no decision stated [P 10-K]. BPA's choice of the Southwest Power Pool's Markets+ (May 2025) and PacifiCorp's entry into California's day-ahead market (1 May 2026): [S], not used.
- Idaho Power has agreed to sell its Oregon distribution business to Oregon Trail Electric Cooperative (13 Feb 2026) [P 10-K].

## 5. Users and utilities

2025, EIA-861 [P-data]:

| Utility | Type | Sales TWh | residential | commercial | industrial | Idaho customers |
|---|---|---|---|---|---|---|
| Idaho Power | investor-owned | 15.50 | 5.83 | 4.23 | 5.45 | 636,949 |
| Rocky Mountain Power (PacifiCorp) | investor-owned | 3.80 | 0.81 | 0.60 | 2.40 | 92,536 |
| Avista | investor-owned | 3.65 | 1.40 | 1.07 | 1.18 | 149,098 |
| Idaho Falls Power | city | 0.78 | 0.33 | 0.39 | 0.06 | 34,150 |
| Kootenai Electric Cooperative | co-op | 0.58 | 0.42 | 0.14 | 0.03 | 33,826 |
| United Electric Co-op | co-op | 0.36 | | | 0.19 | 7,692 |
| Fall River Rural Electric | co-op | 0.35 | | | | 18,798 |
| Northern Lights | co-op | 0.33 | | | | 19,250 |
| Raft Rural Electric | co-op | 0.27 | | | 0.16 | 2,771 |
| Salmon River Electric | co-op | 0.10 | | | | 3,038 |
| Lower Valley Energy (Idaho part) | co-op | 0.07 | | | | 2,068 |
| Inland Power and Light (Idaho part) | co-op | 0.04 | | | | 2,335 |

- Three investor-owned utilities: 22.96 TWh, 85.6% of sales. Everyone else (co-ops and city utilities, including small ones EIA reports only as a lump): 3.85 TWh, 14.4% [derived].
- **Idaho Power**: 664,000 retail customers in southern Idaho and eastern Oregon, 561,000 residential; 24,000 square miles; 1.4 million people; record peak 3,793 MW on 22 July 2024; winter record 2,719 MW on 16 January 2024 (no new record in 2025 or through September 2026); company-wide 2025 sales: residential 6,010 GWh, commercial 4,348, industrial 3,775, irrigation 2,044 (12.6% of 16,177) [P 10-K, 10-Q]. Rate case: IPUC approved a settlement on 30 Dec 2025: $110 million a year, 7.48%, against $199.1 million requested; about $12.13 a month for a 900 kWh home; effective 1 Jan 2026 [P] https://puc.idaho.gov/Fileroom/PublicFiles/Press/20251231Idaho%20Power%201230%20Release.pdf.pdf . Capital spending 2026-2030: $6.3 to $7.2 billion [P 10-K].
- **Irrigation**: pumps run during the growing season; sales peak in the summer irrigation and cooling season; Irrigation Peak Rewards lets the company switch off enrolled pumps for a few hours [P 10-K; https://www.idahopower.com/energy-environment/ways-to-save/savings-for-your-business/irrigation-programs/irrigation-peak-rewards/]. Irrigation's share of the peak in MW: not found, not used.
- **Micron**: special contract for the new memory fab in Boise filed 6 Dec 2024; approved with modifications 8 May 2026 (Order 37039); compliance approved 8 Jul 2026 (Order 37092); energy charge $0.04084/kWh; a load above 20 MW needs a special contract; load ramps up over years from 2026 [P] https://puc.idaho.gov/Fileroom/PublicFiles/ELEC/IPC/IPCE2444/OrdNotc/20260708Final_Order_No_37092.pdf and Order 37039; 10-K. Contract MW and dollar size of the fab: not found, not used.
- **Meta, Kuna**: opened Thursday 3 Sep 2026; $1.2 billion; 750,000 square feet; three solar projects totalling 645 MW back it; Meta paid $100 million for a water and wastewater plant; Idaho Power does not disclose the load [P] https://cdapress.com/news/2026/sep/04/meta-turns-on-its-12b-idaho-data-center-with-promise-of-water-efficiency/ . Meta subsidiary Brisbie: special contract approved May 2023; 320 MW solar purchase approved April 2025, online as early as December 2027 [P 10-K].
- **Bayer, Soda Springs**: three electric furnaces making elemental phosphorus; "largest single user of electricity in Idaho" and on PacifiCorp's system; load above 180 MW; about 1.4 million MWh a year (Bayer filing, 9 May 2023) [P] https://puc.idaho.gov/Fileroom/PublicFiles/ELEC/PAC/PACE2309/Intervenor/Bayer/20230509Comments.pdf . 1.4 TWh is 37% of Rocky Mountain Power's 2025 Idaho sales [derived, mixes 2023 and 2025: stated as such].
- **Idaho Falls Power**: municipal since 1900; five hydro plants supply about a third of the city's electricity; part-owner of Horse Butte Wind; licences expire 31 Jan 2029 [P] https://www.ifpower.org/about-us . Buys from BPA: [S] and [GK].
- **BPA**: sells wholesale power from 31 federal dams; territory includes Idaho [P] BPA Facts. That most Idaho co-ops and city utilities buy their power from BPA is [GK] (search summaries agree; no document opened that says "most").
- **Avista**: Idaho part of a Spokane-based utility; Western EIM participant; wildfire spending $36 million capital in 2025 [P Avista 10-K].
- **Regulator**: IPUC sets rates for the three investor-owned utilities [P 10-Ks]. Three commissioners appointed by the governor: [GK], not on the map. Idaho has no renewable portfolio standard: [GK], not on the map.

## 6. Wildfire

- Idaho Power has had a shutoff plan since 2022; first public safety power shutoff 24 July 2024, with gusts up to 60 mph near Boise [P] https://idahopower.com/outages-safety/wildfire-safety/wildfire-safety-frequently-asked-questions/ ; "thousands" lost power (KIVI) [P]; exact count not found.
- Wildfire Standard of Care Act (Idaho Code 61-1801 to 1808): enacted April 2025, effective July 2025; utilities file yearly wildfire plans for IPUC approval; an approved plan sets the utility's duty of care. Idaho Power filed its first plan October 2025 and its 2027 plan October 2026; wildfire cost deferral $90.8 million at 30 Sep 2026 [P 10-K, 10-Q].

## 7. Current events, autumn 2026 (all [P] from the 10-Q unless noted)

- North Valmy coal ended June 2026. Hemingway expansion and Boise Bench batteries (250 MW) fully operating June 2026. SWIP-N construction began June 2026. B2H wire stringing began July 2026. Bennett Mountain expansion under construction since May 2026. Two more gas plants requested. Hells Canyon final supplemental EIS September 2026. Meta's Kuna data center opened 3 Sep 2026 (CdA Press). Micron contract approved May-July 2026 (IPUC). Aalo-X criticality 4 July 2026 (DOE).
- 2026 was a dry year on the upper Snake (American Falls at 3.3% on 13 Sep 2026; research/idaho.md). Idaho Power hydro for January to September 2026 was 22% below the same months of 2025 [derived from 10-Q: 4,469 vs 5,751 GWh].

## 8. Tour ideas

1. A state that imports: 28 TWh used, 20 generated. 2. Hells Canyon. 3. The Snake River Plain dams and the dry year. 4. Gas: Langley Gulch and the pipeline. 5. The coal Idaho never burned at home: Bridger and Valmy, off the map. 6. Wind, sun and batteries. 7. Irrigation and the summer peak. 8. Chips, data and phosphorus. 9. The north: federal dams, Avista, BPA. 10. INL. 11. New lines.

## 9. Least sure

1. That "most" Idaho co-ops and municipal utilities buy most of their power from BPA (general knowledge; I could not open a BPA customer list).
2. Hells Canyon fish passage wording (no ladders) and the 2019 settlement: general knowledge and search summaries.
3. Dworshak height, Albeni Falls and Swan Falls dates: Wikipedia infoboxes citing the agencies; agency pages returned 403.
4. Which gas fields feed Northwest Pipeline (Canada and the Rockies): Wikipedia stub and general knowledge.
5. Bayer's load is a 2023 figure from the company's own filing.
6. Lava Ridge marker and the two off-map plant markers are approximate by design.
7. Coordinates of Micron, Meta and Bayer are from my knowledge of the sites (Micron at Federal Way in south-east Boise; Meta at Kuna-Mora and Cole roads per the CdA Press; Bayer plant north of Soda Springs). OpenStreetMap's geocoder was rate-limited, so they have only the news description as a second source.

## 10. Used on the map: verification log

### Opened and confirmed
| Figure | What I opened |
|---|---|
| All 2024 budget rows, sales, prices, emissions, top plants | EIA State Electricity Profile workbook for Idaho (Tables 1, 2B, 3, 5, 7, 8, 10, 19) |
| All 2025 plant and state generation, gas receipts, coal receipts at Bridger and Valmy | EIA-923 2025 final, pages 1 and 5 (my sums) |
| 2025 utility sales and customers | EIA-861 2025 `Sales_Ult_Cust_2025.xlsx` (my sums) |
| Capacity by type, batteries, planned and retired units, Bridger and Valmy unit fuels | EIA-860M September 2026 |
| Idaho Power peak, customers, supply mix, irrigation sales, coal exit dates, gas contracts, PURPA MW, battery plans, B2H, GWW, SWIP-N, Hells Canyon and American Falls licences, wildfire act, new gas plants, 2026 hydro | IDACORP 10-K (2025) and 10-Q (Q3 2026) |
| [S] 7.48% rate increase: confirmed | IPUC news release 30 Dec 2025 (PDF) |
| [S] Micron contract approved: confirmed, dates and energy charge | IPUC Orders 37039 and 37092 (PDFs) |
| [S] Meta Kuna opening, $1.2 billion, 645 MW solar: confirmed | Coeur d'Alene Press, 4 Sep 2026 |
| [S] Bayer 180 MW, 1.4 million MWh, three furnaces: confirmed | Bayer comments to the IPUC, 9 May 2023 (PDF) |
| [S] Lava Ridge 231 + 10 turbines, nine miles, 6 Dec 2024; reversal 6 Aug 2025: confirmed | Boise State Public Radio; Spokesman-Review |
| [S] First shutoff 24 July 2024: confirmed | Idaho Power wildfire FAQ; KIVI |
| [S] Aalo-X criticality: confirmed (4 July 2026, fourth under the program) | DOE release, 6 July 2026 |
| [S] Navy fuel terms: confirmed | DOE Idaho Cleanup Project citizens board article |
| [S] Hells Canyon final supplemental EIS: confirmed | Federal Register notice, 10 Sep 2026; Idaho Power relicensing page |
| [S] 2045 goal still posted: confirmed | Idaho Power "Clean today, cleaner tomorrow" page |
| 2025 plan resource totals | IPUC Order 36937 (PDF) |
| EBR-I, INL size and reactor count | DOE pages |
| Avista licence 2046, Lancaster contract, Rathdrum use | Avista 10-K |
| Idaho Falls Power hydro share | ifpower.org |

### Dropped (seen only in search summaries or not found)
- Lava Ridge megawatts (1,000 vs 1,200 vs 1,500 in different summaries).
- Micron fab megawatts and investment; Meta's load (Epoch AI estimate of 152 MW).
- Silver Spur pipeline details; Rockies Columbia Connector.
- MARVEL date, Oklo Aurora, Antares and Unity locations; Carbon Free Power Project cancellation.
- BPA Markets+ decision; PacifiCorp day-ahead market start; Idaho Power day-ahead choice.
- Albeni Falls spillway gates; Raft River ownership by Ormat and contract terms.
- Irrigation's share of Idaho Power's peak; Peak Rewards megawatts.
- Idaho gas production; Idaho's lack of a renewable standard; IPUC make-up.
- Hells Canyon 2019 fish settlement terms; the "1,167 MW" figure for the complex (the 10-K table gives 1,276 MW, which is what the map uses).
- Idaho Falls Power's BPA contract savings ($105 million).
- BPA "twenty-one Idaho customers".

### Added 14 Nov 2026 while finishing power/content/id.js
- The two off-map markers sit where the lines leave the frame in the re-baked data: Jim Bridger at -110.85, 41.97 (about 105 miles from the plant), North Valmy at -114.76, 41.86 (about 140 miles). Distances are my arithmetic from the plants' EIA coordinates.
- Removed before publishing for lack of an opened source: Avista hydro meeting half its needs; Hells Canyon 100 free-flowing miles; Dworshak releases timing; who supports and opposes breaching the lower Snake dams; Kuna battery being the one under Idaho Power's 20-year contract (the card states the contract and the plant separately); any link between Blacks Creek Solar and Meta.
- Rests on general knowledge, flagged in the report: BPA serves many Idaho co-ops and Idaho Falls; the Swan Falls agreement settled a dispute over upstream farm water; the Advanced Test Reactor is one of the four operating reactors; locations of co-op service areas; Lucky Peak is a federal flood-control dam; Minidoka's history and who opposed Lava Ridge beyond the officials named in the Spokesman-Review article.
