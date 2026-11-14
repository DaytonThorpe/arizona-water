# New Mexico power: research fact sheet (generation, fuel chains, grid, users, pollution)

Compiled 2026-11-13 and 14 for the "New Mexico Power" map (power/content/nm.js). Format follows `arizona_power.md`.

**Conventions**
- TWh = terawatt-hour = 1 million MWh. MW = megawatt (capacity). Bcf / Tcf = billion / trillion cubic feet. AF = acre-foot. PNM = Public Service Company of New Mexico. SPS = Southwestern Public Service (Xcel Energy). EPE = El Paso Electric. PRC = New Mexico Public Regulation Commission. APS = Arizona Public Service. NTEC = Navajo Transitional Energy Company. NTUA = Navajo Tribal Utility Authority. ETA = Energy Transition Act (2019). SPP = Southwest Power Pool.
- Evidence tags: **[P]** = I opened the document and read the number. **[P-data]** = I summed rows of a downloaded EIA data file myself. **[S]** = seen only in a search-engine summary. **[derived]** = my arithmetic from tagged figures. **[GK]** = general knowledge, no source opened. **unverified** = could not confirm.
- EIA files used (downloaded 13 Nov 2026, shared with the Arizona chapter): EIA-923 final 2025 (pages 1 and 5, and Schedule 8D cooling); EIA-861 final 2025 (`Sales_Ult_Cust_2025.xlsx`); EIA-860M September 2026; EIA state historical tables (`annual_generation_state.xls`, `emission_annual.xlsx`); small-scale solar estimates 2024 to 2026. New for this chapter: EIA State Electricity Profile, New Mexico, data year 2024, workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20NM.xlsx (page https://www.eia.gov/electricity/state/newmexico/).
- Plant coordinates are from EIA-860M. Hub coordinates are line endpoints in the federal (HIFLD) line file. Other places: OpenStreetMap Nominatim where it answered, otherwise marked approximate.
- Map frame: longitude -109.4 to -102.65, latitude 31.1 to 37.3. It includes El Paso, part of west Texas, and the Springerville and Coronado coal plants in Arizona. Tolk (Texas coal, SPS) is just outside.

---

## 1. Statewide budget

### 1a. Where it comes from: net generation in New Mexico, plants of 1 MW and larger

| Fuel | 2025 TWh | 2025 share | 2024 | 2015 | 2010 | 2005 | Tag |
|---|---|---|---|---|---|---|---|
| Wind | 14.39 | 36.5% | 15.14 | 2.09 | 1.83 | 0.79 | 2025 [P-data] EIA-923; earlier [P] state history |
| Natural gas | 10.50 | 26.6% | 11.65 | 9.36 | 8.51 | 4.19 | same |
| Coal (Four Corners only in 2025) | 8.18 | 20.7% | 8.43 | 20.44 | 25.62 | 29.95 | same |
| Solar, utility-scale | 6.27 | 15.9% | 4.29 | 0.61 | 0.01 | n/a | same |
| Hydro | 0.125 | 0.3% | 0.15 | 0.10 | 0.22 | 0.16 | same |
| Geothermal | 0.058 | 0.1% | 0.03 | 0.01 | n/a | n/a | same |
| Biogas (landfill, other) | 0.015 | 0.0% | 0.03 | 0.02 | 0.01 | 0.00 | same |
| Batteries (net) | -0.10 | -0.3% | -0.01 | | | | same |
| **Total** | **39.44** | | **39.70** | 32.70 | 36.25 | 35.14 | same |
| Small-scale solar (not in total) | 0.84 | | 0.80 | | | | [P-data] small-scale solar files |

Notes
- Coal share: 85% in 2005 (29.95 of 35.14), 71% in 2010, 21% in 2025 [derived]. 2023 coal was 7.37 TWh (first full year after San Juan).
- 31 wind plant IDs reported generation in 2025 [P-data].
- By balancing authority, 2025 [P-data]: PNM 16.00 TWh; SPP (code SWPP, eastern grid) 10.50; APS (Four Corners) 8.24; EPE 1.84; Gridforce (GRIS: Broadview wind) 1.20; Tucson Electric (Oso Grande and Borderlands wind) 0.80; WAPA Colorado-Missouri (Farmington, small hydro) 0.60; California ISO (SunZia test energy) 0.12. Wind on SPP 4.14; solar on EPE 0.91.
- Gas burned for power in 2025: 98.1 Bcf [P-data].

### 1b. Where it goes: EIA State Electricity Profile Table 10, 2024 [P]

| Item | 2024 TWh | Share | 2023 | 2022 | 2018 |
|---|---|---|---|---|---|
| Total net generation = supply | 39.70 | 100% | 39.27 | 40.89 | 32.67 |
| Retail sales | 30.30 | 76.3% | 28.35 | 27.16 | 24.05 |
| ...residential | 7.35 | 18.5% | 7.34 | 7.28 | 6.83 |
| ...commercial | 9.59 | 24.2% | 9.35 | 9.08 | 9.04 |
| ...industrial | 13.36 | 33.6% | 11.66 | 10.79 | 8.19 |
| Direct use | 0.26 | 0.6% | 0.20 | 0.16 | 0.18 |
| Estimated losses | 1.41 | 3.6% | 1.26 | 1.47 | 1.24 |
| Unaccounted | 0.24 | 0.6% | 0.14 | -0.05 | 0.15 |
| Net interstate exports | 7.49 | 18.9% | 9.32 | 12.16 | 7.05 |

- 2024 summary [P]: net summer capacity 11,887 MW; CO2 13,402 thousand metric tons, 743 lb/MWh; average price 9.18 cents/kWh (residential 14.20); 936,098 residential customers; primary source: wind.
- 2025 sales (EIA-861, [P-data]): total 31.51 TWh; residential 7.24, commercial 9.38, industrial 14.89; 1,104,062 customers.
- Caveat used on the map: Four Corners counts as New Mexico generation but is 80% owned by Arizona utilities and runs in APS's balancing area, so "net exports" understates how much New Mexico generation is built for other states. SunZia (2026) will raise exports sharply; not yet in any annual table.

### 1c. Capacity, September 2026 (EIA-860M operating, nameplate) [P-data]
Wind 8,079 MW; solar 3,302; gas combined cycle 1,740; coal 1,636; batteries 1,360 MW / 5,179 MWh; gas turbines 1,128; gas steam 720; hydro 82; gas engines 69; oil 27; geothermal 19. Total 18,165 MW. Planned: solar 1,703; gas turbines 1,089 (NTEC); batteries 928; wind 190; gas engines 60.

### 1d. Power-sector emissions (EIA `emission_annual.xlsx`, metric tons) [P]
CO2: 33.27 million (2005), 29.38 (2010), 24.85 (2015), 20.39 (2019), 18.11 (2022), 13.54 (2023), 13.40 (2024). Down 59.7% from 2005 to 2024 [derived]. Coal CO2 30.69 to 7.87; gas 2.55 to 5.53. SO2 27,914 to 1,556 t; NOx 69,498 to 7,789 t.

---

## 2. Candidate places (coordinates lon, lat from EIA-860M unless noted; 2025 output [P-data])

### Coal and mines
1. **Four Corners** (2442; -108.481, 36.690). 1,636 MW (units 4 and 5); 633 MW (units 1 to 3) retired 2013 [P-data]. 2025: 8.24 TWh; coal burned 4.48 M tons; deliveries 4.50 M tons, all Navajo Mine; cooling water consumed 12,932 AF [P-data]. Owners APS 63%, PNM 13%, SRP 10%, TEP 7%, NTEC 7% (Albuquerque Journal 19 Aug 2025 [P]). 251 employees and about 100 contractors; PNM plans exit by 2031 (same [P]). APS signed a confidential agreement with NTEC in Sept 2026 that could allow operation to 2038 (KJZZ 5 Oct 2026 [P]). Ash 19,246,038 cubic yards, 4 ponds, 1 landfill; boron x74, cobalt x45, lithium x23 (Earthjustice Sep 2025 [P]). EIA planned retirement 2031.
2. **Navajo Mine** (Nominatim: 36.709, -108.430 [P]; marker moved south into the lease, approximate). Owned by NTEC (APS 10-K per Arizona log). 2025 seller listed in EIA-923 as "BHP Billiton Marketing" (legacy name).
3. **San Juan Generating Station** (2451; -108.439, 36.800). 1,848 MW; units 2 and 3 stopped 2017, 1 and 4 in 2022; stacks demolished 24 Aug 2024; about 450 jobs lost; PRC approved abandonment 2020; Farmington spent about $3 million on carbon capture effort; about $20 million of transition funds distributed (Albuquerque Journal 24 Aug 2024 [P]).
4. **San Juan Mine**: last ton mined, announced 13 Sep 2022; surface mine from 1973, later underground longwall; San Juan and La Plata mines sole suppliers for nearly five decades (Coal Age 3 Nov 2022 [P]). Marker approximate.
5. **Escalante** (87; -108.082, 35.416). Tri-State; 253 MW; retired 2020; Escalante Solar 200 MW on the site, in operation 1 June 2024; Tri-State has 11 New Mexico co-op members (Tri-State/Origis 11 Jun 2024 [P]). Solar 2025: 0.526 TWh. Ash 1.09 M cubic yards, lithium x15, arsenic x3 (Earthjustice [P]).
6. **Lee Ranch Mine** (McKinley County). 2025: 1.44 M tons by rail to Springerville (42% of that plant's coal) [P-data]. Marker approximate [GK].
7. **NTEC Gas Plant** (66478; -108.450, 36.683). Planned, 18 x 60.5 MW, June 2028, "regulatory approvals pending" [P-data]. EPA permit for "742 MW" and "reclaimed Navajo Mine" site: [S] only.
8. Springerville (AZ, 5.55 TWh) and Coronado (AZ, 2.93 TWh) are inside the frame.

### Wind
9. **SunZia Wind** (66923 + 66924, merged; -105.593, 34.352). 3,650 MW, 916 turbines (242 north, 674 south), San Miguel, Lincoln, Torrance counties; 550-mile HVDC line, 3,021 MW, 2,131 MW to Southern California; NM wind 3,997 to 7,647 MW; "slated to begin commercial operations this month" (EIA 12 Jun 2026 [P]). 2025 test energy 0.118 TWh, balancing authority California ISO [P-data].
10. **Western Spirit**: Red Cloud 350 MW (1.18 TWh), Clines Corners 325 (1.06), Tecolote 272 (0.87), Duran Mesa 105 (0.36) [P-data]. Line 155 miles, 345 kV, up to 800 MW; four projects over 1,050 MW; energized Dec 2021; PNM to acquire (Pattern 6 Dec 2021 [P]).
11. **Sagamore** (63578) 522 MW, SPS-owned, 2.11 TWh. 12. **El Cabo** (58098) 298 MW, 1.06. 13. **La Joya** (61044) 0.91; 166 MW and 140 MW parts (PNM 10-K glossary [P]). 14. **Roosevelt County** 0.98. 15. **Grady** 0.81 (PNM balancing area) with **Broadview JN/KW** 0.67 + 0.53 (Gridforce). 16. **New Mexico Wind Energy Center** (2003) 0.50. 17. **Oso Grande** (TEP) 0.55; **Borderlands** (TEP area) 0.25. 18. Aragonne 0.62, Caprock 0.38, High Lonesome 0.31, San Juan Mesa 0.25.

### Gas
19. **Hobbs** (56458) 681.5 MW, 3.28 TWh, 25.97 Bcf (supplier "XCEL"), no cooling water reported. 20. **Cunningham** 1.79 TWh, 19.5 Bcf, 1,928 AF; **Maddox** 0.57, 6.0 Bcf, 2,130 AF. 21. **Luna** (55343) 1.66 TWh (3.33 in 2024 [P]); 12.46 Bcf (Phelps Dodge 4.8, Tucson Electric 4.8, spot 2.9); 1,708 AF. 22. **Afton** 0.46, 4.2 Bcf. 23. **Rio Grande** (EPE) 0.79, 8.25 Bcf, 660 AF. 24. **Newman** (TX) 4.00; **Montana** (TX) 0.91. 25. **Rio Bravo** 0.29; **Reeves** 0.17 (239 AF); **Valencia** 0.15; **La Luz** 0.02. 26. **Pyramid** (Tri-State) 0.27; **Lordsburg** 0.07. 27. **Bluffview** (Farmington) 0.41. 28. **Chino Mines** (Freeport) 0.21.

### Solar and storage
29. **Atrisco Solar** 300 MW, 0.72 TWh; **Atrisco Energy Storage** 300 MW / 1,200 MWh. 30. **Arroyo** 300 MW + 150 MW / 600 MWh, 0.68. 31. **San Juan Solar I** 200 MW + 100 MW / 561 MWh, 0.48; 20-year contract [P]. 32. **Sky Ranch** 0.50. 33. **Buena Vista** (EPE) 0.39. 34. **Jicarilla 1 and 2** 0.107 + 0.128. 35. **Taos Mesa** 15 MW + 12.5 MW battery; Kit Carson: 41 MW solar, 15 MW storage, nearly 30,000 members, left Tri-State 2016 (release 3 Jun 2022 [P]). 36. **Santa Teresa Solar** 150 MW (2026), EPE (Albuquerque Journal 17 Aug 2025 [P]). 37. **Sandia Energy Center** 60 MW / 240 MWh (PNM, 2026). 38. Facebook 1 to 3 solar (10 MW each).

### Hydro and geothermal
39. **Navajo Dam** (Farmington) 30 MW, 0.088 TWh. 40. **Elephant Butte** 27.9 MW, 1940, 0.017 TWh; eGRID 2023 net -31,601 MWh. 41. **Abiquiu** 0.016; **El Vado** 0.004 (Los Alamos County). 42. **Lightning Dock** 19 MW, 0.058.

### Fuel, grid and users
43. Permian Basin. 44. San Juan Basin. 45. Grants uranium district. 46. Urenco USA. 47. WIPP. 48. Blackwater tie. 49. Eddy County tie. 50. West Mesa. 51. Albuquerque. 52. Meta Los Lunas (Nominatim 34.828, -106.785 [P]). 53. Project Jupiter (Santa Teresa 31.870, -106.687 [P]). 54. Carlsbad oil field load. 55. Los Alamos (Nominatim 35.819, -106.266 for the lab; marker at the town). 56. Las Cruces. 57. Farmington. 58. Shiprock.

---

## 3. Fuel supply chains
- **Gas.** New Mexico marketed production 4,130,971 MMcf in 2025 (3rd among states; US 43,229,110; 9.6%); 1,965,533 in 2020 (EIA [P]). Crude oil 804,950 thousand barrels in 2025, 2nd to Texas (EIA [P]). Power plants burned 98 Bcf = 2.4% of production [derived]. Permian was 23% of US gas in 2025, mostly associated gas [S]. Pipeline operators in the map data: El Paso Natural Gas, Transwestern, PNM-labelled intrastate lines (today a separate gas company [GK]), Northern Natural, Natural Gas Pipeline Co of America, ONEOK WesTex, TransColorado, Northwest, and Texas intrastate lines.
- **Methane rule.** Operators must capture 98% of gas by 31 Dec 2026; routine venting and flaring banned; applies to wells, gathering lines, boosting (state page [P]). 88% of operators at 98% by mid-2024 [S].
- **Coal.** Only Navajo Mine to Four Corners inside the state. Lee Ranch ships to Arizona. San Juan and La Plata mines closed.
- **Uranium.** Grants district: primary focus of New Mexico uranium production from the 1950s to late 1990s; Homestake mill 1958, dismantled 1993 to 1995, Superfund; Jackpile-Paguate 1953 to 1982, Superfund; counties Cibola, McKinley, Sandoval, Bernalillo; 2024 to 2028 five-year plan (EPA [P]). Urenco USA, Eunice: 4.3 million SWU, about one-third of US demand, only commercial enrichment plant in the US, operating since 2010; +700,000 SWU by 2027; new 2.1 million SWU plant, first production 2032 (Urenco 2 Jun 2026 [P]).
- **Waste.** WIPP: defense transuranic waste, 2,150 ft deep in salt, 26 miles south-east of Carlsbad, first shipment 26 Mar 1999 (DOE [P]). Holtec cancelled its interim spent-fuel store near Carlsbad and Hobbs, up to 10,000 canisters (ANS 10 Oct 2025 [P]).

## 4. Transmission and trade
- Three balancing regimes meet: the western grid (PNM, EPE, Tri-State, WAPA), the eastern grid (SPS in SPP), and plants run from Arizona or California (Four Corners in APS; SunZia in California ISO) [P-data].
- **Blackwater** back-to-back DC station near Clovis: 200 MW, PNM-owned, 1985 (Hitachi Energy [P]). **Eddy County tie** near Artesia links EPE to SPS (City Desk ABQ [P]); 200 MW, 1984, replacement proposed by EPE [S].
- **Markets.** PNM in the Western Energy Imbalance Market since 2021; joins California ISO's day-ahead market in 2027; $20 million a year projected; about $170 million of real-time market benefits by April 2025 (California ISO 1 Jul 2025 [P]). EPE announced in Jan 2025 it will join SPP's Markets+ in 2028 (City Desk ABQ 14 Mar 2025 [P]).
- Named lines in OpenStreetMap inside the frame (after re-bake 14 Nov): SunZia Transmission Project (dc), Western Spirit Transmission Line, Four Corners - Moenkopi (500), Hesperus to Waterflow, Montrose to Hesperus, Waterflow to San Juan, West Mesa to Sandia, Ojo - Taos, TUCO-Yoakum, Cholla - Coronado, Silverking - Coronado.

## 5. Users and utilities (EIA-861 2025, New Mexico only) [P-data]
| Utility | Sales TWh | Customers | Note |
|---|---|---|---|
| SPS | 12.73 | 128,335 | industrial 9.04 (71%); 7.66 in 2024 [P]; residential 1.18 |
| PNM | 10.05 | 556,585 | res 3.31, com 3.85, ind 2.89 |
| EPE | 1.83 | 110,178 | |
| Central Valley co-op | 0.94 | 14,927 | industrial 0.82 (87%) |
| Farmington | 0.89 | 45,167 | |
| Lea County co-op | 0.69 | 11,212 | |
| Los Alamos County | 0.51 | 9,299 | one industrial customer 0.39 |
| Continental Divide | 0.48 | 23,458 | |
| Farmers' | 0.37 | 13,737 | |
| Jemez Mountains | 0.36 | 31,792 | |
| Kit Carson | 0.29 | 31,076 | |
| Southwestern | 0.27 | 2,279 | |
| Central NM | 0.27 | 21,230 | |
| Springer 0.20 / 3,054; Otero County 0.20 / 20,763; Roosevelt 0.14 / 6,004; NTUA 0.12 / 10,857; WAPA 0.13 / 4; Navopache 0.012 / 1,728 | | | |

- PNM peak 2,264 MW, Monday 3 Aug 2026, 5 p.m., 6% above July 2023 record; about 4,900 MW of capacity; 500 MW rooftop solar; request for 800 MW wind, 240 MW solar, 610 MW storage, 40 MW gas (Albuquerque Journal 7 Aug 2026 [P]). PNM 80% carbon-free in 2025 (TXNM release 27 Feb 2026 [P]).
- SPS: PRC approved (7 May 2026, 2 to 1) 2,088 MW gas, 1,100 MW wind, 189 MW solar, 472 MW / 1.9 GWh storage, $9.38 billion, in service 2028 to 2030; summer peak up about 40% by 2030 to 4,771 to 6,517 MW; Tolk retirement delayed to 31 Mar 2029; rate case $168 million (16%) pending (Utility Dive 26 May 2026 [P]).
- Meta, Los Lunas: began 2016; 1,175 MW renewables and 368 MW storage in total; latest 290 MW solar and 268 MW storage approved 18 Dec 2025 (PRC briefing to legislators, 13 Jul 2026 [P]). Meta/XGS 150 MW geothermal, $1.2 billion, announced 2025 (Albuquerque Journal 17 Aug 2025 [P]).
- Project Jupiter, Santa Teresa: 1,400 acres; Oracle and OpenAI; county approval 4 to 1, Sept 2025; fuel cells replaced gas turbines in April 2026; up to 2.8 GW in permit applications; 10.1 vs 14 million tons of greenhouse gases a year; off-grid; permit pending Aug 2026 (Daily Lobo 17 Aug 2026 [P]; CleanTechnica 30 May 2026 [P]). 2025 microgrid law: exempt from ETA targets until 2035, zero-carbon by 2045 (Albuquerque Journal [P]).
- Navajo Nation: 9,377 homes without power of about 55,000, May 2026 (SRP, confirmed in the Arizona log).

## 6. Policy and current events
- ETA (SB 489, 2019): 50% renewable by 2030 for investor-owned utilities and co-ops; goal of 80% by 2040; zero-carbon by 2045 (investor-owned) and 2050 (co-ops); support for affected communities and replacement power in San Juan County (state page [P]).
- Blackstone agreed to buy TXNM Energy for $11.5 billion ($61.25 a share); PRC fined the companies $300,000 in July 2026 over a $400 million stock sale; deadline extended to 31 May 2027; PRC approval pending (KANW 21 Jul 2026 [P]; TXNM release [P]).
- PRC has three appointed commissioners [GK; the 2 to 1 vote is consistent].

## 7. Tour (as built)
Wind state; Four Corners; San Juan closed; SunZia; two grids at Blackwater; oil field load; solar and batteries at night; users (Albuquerque, Meta); uranium (Urenco, Grants); CO2 and planned plants.

## 8. Least sure
- Co-op territories are drawn from HIFLD as county-like blocks; not checked one by one.
- Marker positions for San Juan Mine, Lee Ranch Mine, Urenco, Project Jupiter, San Juan Basin, Permian Basin are approximate.
- "One industrial customer" of Los Alamos County is assumed to be the laboratory.
- Whether SunZia reached full commercial operation in June 2026: EIA said "slated"; later trade coverage [S] says yes.
- Wholesale suppliers of the eastern co-ops (Western Farmers [GK]) are not stated on the map.

## 9. Used on the map: verification log

### [S] figures opened and confirmed before use
| Figure | What I opened |
|---|---|
| Four Corners ownership shares; 251 employees; PNM exit by 2031 | Albuquerque Journal, 19 Aug 2025 |
| APS/NTEC agreement, Sept 2026, could run to 2038 | KJZZ, 5 Oct 2026 |
| San Juan: unit dates, stacks 24 Aug 2024, 450 jobs, $3 million, $20 million | Albuquerque Journal, 24 Aug 2024 |
| San Juan Mine last ton Sept 2022, 1973 start | Coal Age, 3 Nov 2022 |
| Escalante Solar 200 MW, 1 Jun 2024; 11 NM members | Tri-State / Origis release |
| SunZia numbers | EIA Today in Energy, 12 Jun 2026 |
| Western Spirit 155 miles, 345 kV, 800 MW, 1,050 MW | Pattern Energy release |
| Urenco 4.3 million SWU and expansion | Urenco release, 2 Jun 2026 |
| WIPP depth, distance, first shipment | DOE WIPP page |
| Holtec cancellation, 10,000 canisters | American Nuclear Society |
| Methane rule 98% by 31 Dec 2026 | state methane rule page |
| ETA targets | New Mexico Indian Affairs Department ETA page |
| PNM peak 2,264 MW and resource request | Albuquerque Journal, 7 Aug 2026 |
| SPS plan | Utility Dive, 26 May 2026 |
| Meta contracts | PRC briefing PDF (text extracted locally) |
| Project Jupiter | Daily Lobo; CleanTechnica |
| Blackwater 200 MW, 1985, PNM | Hitachi Energy page |
| EPE Markets+ 2028; Eddy tie links EPE and SPS | City Desk ABQ |
| PNM day-ahead market 2027, $20 million, $170 million | California ISO release |
| Kit Carson 41 MW, 15 MW, 100% daytime, 2016 | co-op release (Torch Clean Energy copy) |
| Blackstone $11.5 billion, $300,000 penalty, 31 May 2027 | KANW / Source NM |
| Coal ash volumes and multiples | Earthjustice New Mexico page |
| Gas and oil production | EIA navigator tables |
| Grants district facts | EPA page |
| La Joya 166 and 140 MW | PNM 10-K glossary (only the glossary was readable) |

### Dropped or left off the map (not confirmed)
- NTEC gas plant "742 MW", EPA final permit, "reclaimed mine" site ([S]; EPA pages returned 404).
- Eddy tie 200 MW, 1984, and EPE's replacement filing ([S]; PDF too large to open).
- Kit Carson $37 million exit fee ([S]).
- Project Jupiter 2.45 GW of Bloom fuel cells, pipeline length and cost details ([S] or conflicting).
- Los Alamos lab demand in MW, 14-mile 115 kV line ([S]; DOE page 404, trade article paywalled).
- PNM customer count, Palo Verde percentage and plant shares from the 10-K body (SEC page gave only the glossary); EIA-861 used instead.
- Escalante employee count; San Juan Mine tonnage and layoffs; Holtec tonnage and license date; ETA securitization bond amounts.
- SPS current peak (6.15 GW [S]); EPE's WEIM date; SunZia "two decades of permitting".
- Church Rock 1979 spill; Mount Taylor mine; refineries; Intel Rio Rancho; Kirtland and Sandia loads (not researched to [P]).
