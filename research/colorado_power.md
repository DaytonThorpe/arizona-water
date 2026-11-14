# Colorado power: research fact sheet (generation, fuel chains, grid, users, pollution)

Compiled 2026-11-13/14 for the "Colorado Power" map (power/content/co.js). Format follows `arizona_power.md`.

**Conventions**
- TWh = terawatt-hour = 1 million MWh. MW = megawatt (capacity). Bcf = billion cubic feet. PUC = Colorado Public Utilities Commission. PSCo = Public Service Company of Colorado (Xcel Energy's Colorado utility). CSU = Colorado Springs Utilities. PRPA = Platte River Power Authority. WAPA = Western Area Power Administration. SPP = Southwest Power Pool. DOE = US Department of Energy.
- Evidence tags: **[P]** = the document or data file was opened and the number read there. **[P-data]** = summed from an EIA data file by script (rows are EIA's, the sum is ours). **[S]** = seen only in a search-result summary; not used on the map unless later confirmed. **[derived]** = arithmetic on tagged figures. **[GK]** = general knowledge, no source opened; listed in section 10. **unverified** = could not confirm.
- EIA files (the same downloads as the Arizona chapter, plus the Colorado profile workbook):
  - EIA-923 final 2025: https://www.eia.gov/electricity/data/eia923/ (Page 1 generation and fuel; Page 5 fuel receipts)
  - EIA-861 final 2025: https://www.eia.gov/electricity/data/eia861/ (`Sales_Ult_Cust_2025.xlsx`)
  - EIA-860M, September 2026: https://www.eia.gov/electricity/data/eia860m/ (as baked in power/data/co.js)
  - EIA State Electricity Profile, Colorado, data year 2024: https://www.eia.gov/electricity/state/colorado/ , workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20CO.xlsx
  - EIA state history: https://www.eia.gov/electricity/data/state/ (`annual_generation_state.xls`, `emission_annual.xlsx`)
  - EIA small-scale solar: https://www.eia.gov/electricity/data/eia861m/
- Web research was done by three sub-agents on 13 Nov 2026 and spot-checked by re-opening pages. Several sites refused automated reading (puc.colorado.gov, energyoffice.colorado.gov, cpr.org: 403; coloradosun.com: 429 on most tries), so PUC facts rest on the PUC's emailed newsletters (content.govdelivery.com) and on journalism.

---

## 1. Statewide budget

### 1a. Where it comes from: net generation in Colorado, plants of 1 MW and larger

| Fuel | 2025 TWh | 2025 share | 2024 TWh | 2010 TWh | Tag |
|---|---|---|---|---|---|
| Natural gas | 18.14 | 32.0% | 17.93 | 11.06 | 2025 [P-data] EIA-923; 2024, 2010 [P] state history |
| Wind | 17.02 | 30.0% | 17.60 | 3.45 | same |
| Coal (subbituminous 11.55 + bituminous 2.46) | 14.02 | 24.7% | 16.48 | 34.56 | same |
| Solar, utility-scale | 5.61 | 9.9% | 4.94 | 0.04 | same |
| Hydro (conventional 1.725 + pumped storage 0.057) | 1.78 | 3.1% | 1.73 | 1.46 | same |
| Landfill/sewage gas 0.074, waste heat 0.047, oil 0.014 | 0.13 | 0.2% | | | [P-data] |
| Batteries (net) | -0.056 | | | | [P-data] |
| **Total** | **56.64** | | **58.80** | **50.72** | |
| Small-scale solar (EIA estimate; not in total) | 2.23 | | 2.04 | | [P-data]; capacity 1,309 MW Dec 2025 |

- Coal share: 68.1% in 2010 (34.56/50.72), 24.7% in 2025 [derived]. Coal TWh: 35.57 (2005), 31.54 (2015), 25.32 (2019), 19.48 (2020), 18.79 (2023) [P].
- Ten largest plants by 2025 output [P-data]: Comanche 4.17; Fort St. Vrain 4.13; Craig 3.78; Cherokee 3.67; Rocky Mountain Energy Center 2.44; Hayden 2.28; Rush Creek Wind 2.15; Front Range 2.05; Cheyenne Ridge 1.64; Pueblo Airport 1.61. Then Rawhide 1.33, Ray Nixon 1.27, Pawnee 1.17 (all coal, its last coal year), Bronco Plains 1.09.
- In frame, out of state [P-data]: Four Corners (NM) 8.24 TWh; Bonanza (UT) 2.54; Flaming Gorge (UT) 0.32.

### 1b. Where it goes (2024, EIA State Electricity Profile Table 10) [P]

| Item | TWh | Share of 60.24 supply |
|---|---|---|
| Net generation | 58.80 | |
| Net interstate imports (a calculated residual) | 1.44 | |
| Total supply | 60.24 | 100% |
| Residential sales | 20.69 | 34.4% |
| Commercial | 21.17 | 35.1% |
| Industrial | 14.89 | 24.7% |
| Transportation | 0.09 | 0.1% |
| Direct use | 0.29 | 0.5% |
| Estimated losses | 2.65 | 4.4% |
| Unaccounted | 0.45 | 0.7% |

- Net imports were 4.2-4.4 TWh in 2009, 2013 and 2018; 1.0 in 2023 [P].
- 2024 customers 2,978,176 (residential 2,557,732); average price 12.07 cents/kWh (residential 14.92) [P].
- 2025 retail sales (EIA-861, all Colorado rows) [P-data]: total 56.89 TWh; residential 20.55, commercial 20.94, industrial 15.32, transportation 0.09; 3,022,699 customers.

### 1c. Summary statistics 2024 [P]
Net summer capacity 19,817 MW (rank 22); generation 58,798,395 MWh (28); CO2 25,602 thousand metric tons (27), 958 lb/MWh; SO2 7,353 short tons; NOx 14,121 short tons; primary source natural gas.

### 1d. Installed capacity, September 2026 (sum of power/data/co.js, Colorado plants) [P-data]
Operating MW: gas 8,751; wind 5,851; coal 3,646; solar 3,398; hydro 679; batteries 670 (2,413 MWh); pumped storage 509; oil 174. Planned: solar 3,154; batteries 1,899; wind 1,041; gas 480.

### 1e. Emissions trend (EIA) [P]
CO2, million metric tons: 41.40 (2005), 40.50 (2010), 37.41 (2015), 33.91 (2019), 27.58 (2023), 25.60 (2024): down 36.8% from 2010 [derived]. From coal 17.19, from gas 8.37 in 2024. SO2 short tons: 49,468 (2010), 7,353 (2024). NOx: 60,700 (2010), 14,121 (2024).

---

## 2. Candidate places (plants take coordinates and data grids from the dataset; 2025 figures are EIA-923 [P-data])

### Coal
| Place | EIA id | Facts |
|---|---|---|
| Comanche, Pueblo (PSCo) | 470 | 4.17 TWh 2025. 2.54M tons delivered, all Wyoming by rail: Belle Ayr 1.43M, North Antelope Rochelle 0.59M, Black Thunder 0.45M, Eagle Butte 0.08M. Unit 1 retired 2022 (dataset). Unit 2: PUC variance (Dec 2025) moved closing from end-2025 to end-2026, the Unit 3 outage the sole reason [P Utility Dive]; approval date also given as 21 Jan 2026 [P PUC newsletter 4081f96]. Proposed settlement: run to March 2028 capped at 63% of capacity; PUC hearing 6-7 Nov 2026, no ruling found [P KUNC 7 Nov 2026]. Unit 3: 750 MW, online July 2010, out 12 Aug 2025 to mid-Aug 2026 [P KUNC; DOE docket filing]; Xcel 67% [P Xcel annual report]; CORE 25%, Holy Cross 8% [S, not used]; approved closing 1 Jan 2031 [P]. Ash 4,272,415 cubic yards, no groundwater data [P Earthjustice]. |
| Craig (Tri-State) | 6021 | 3.78 TWh. 2.51M tons: Trapper 1.83M (truck), Colowyo 0.67M (rail). Units 427/410/448 MW; Units 1-2 owned by Tri-State, PRPA, PacifiCorp, Xcel, Salt River Project; Unit 3 Tri-State alone; Units 2 and 3 retire 2028 [P Tri-State 23 Jan 2026]. Unit 2 on 30 Sept 2028 [P prpa.org]; Unit 3 on 1 Jan 2028 [P Colorado Sun 25 Apr 2026]. PRPA 18% [P], Xcel 10% [P]; other shares [S]. DOE 202(c) orders on Unit 1: 202-25-14 (30 Dec 2025), 202-26-21 (30 Mar 2026), 202-26-31 (26 Jun), 202-26-49 (25 Sep; in effect 27 Sep to 25 Dec 2026) [P energy.gov]. Rehearing requests by Tri-State and PRPA, the State of Colorado and environmental groups denied by operation of law 24 Aug 2026; further requests 23 Oct; D.C. Circuit petitions 26-1060, 26-1172 [P]. Cost: no primary figure; "$1 million a month" and "$85 million a year" are [S] and conflict (dropped). |
| Hayden (PSCo) | 525 | 2.28 TWh. 1.29M tons: Foidel Creek (Twentymile) 1.24M, West Elk 0.05M, by rail. Unit 2 2027, Unit 1 2028 [P Xcel AR]; Xcel owns 76% / 37% [P]. Scrubber repair $9-10M [P KUNC Jun 2026]. Routt County/Hayden sought $89M, Xcel offered $16M over six years [P Steamboat Pilot 29 Apr 2025]. Ash 8,822,367 cubic yards; boron x27, molybdenum x34, sulfate x27 [P Earthjustice]. A March 2026 filing floating 2030 is [S] (not used). |
| Pawnee, Brush (PSCo) | 6248 | 1.17 TWh in 2025, all coal; 0.52M tons from Buckskin and Eagle Butte (WY). Coal retired 2025, gas conversion completed 2026 [P Xcel AR]. Dataset now classes it gas. Lithium x4, sulfate x10 [P Earthjustice]. |
| Rawhide (PRPA) | 6761 | 1.33 TWh (coal 1.22, gas 0.11). 0.69M tons from Antelope mine (WY), seller Navajo Transitional Energy Co. Coal unit closes by end of 2029; five aeroderivative gas turbines, 200 MW, late 2029 [P prpa.org]. Board removed the 2030 deadline for its noncarbon goal 29 Oct 2026 [P ColoradoBiz]. Lithium x14 [P Earthjustice]. |
| Ray Nixon (CSU) | 8219 | 1.27 TWh. 0.61M tons from Black Thunder and North Antelope Rochelle. SB 26-182 moves closing from 31 Dec 2029 to 31 Dec 2032 [P csu.org blog; P APPA 28 May 2026 "Governor signs bill"]. |
| Bonanza, Utah (Deseret) | 7790 | 2.54 TWh; 1.42M tons from Deserado mine (CO) [P-data]. |
| Closed: Martin Drake | none | All generation ended 1 Sept 2022; demolition completed 2024 [P csu.org]. Not in the dataset; marker hand-placed at 38.824, -104.833 (downtown Colorado Springs, approximate). |
| Closed: Nucla 527 (2019), Cameo 468 (2010), Arapahoe 465 (2013) | | Years from the dataset. Other details [S], not used. |

### Gas
Fort St. Vrain 6112: 4.13 TWh, 29.0 Bcf burned; former 330 MW helium-cooled reactor, commercial power July 1979, shut 1989, gas conversion from 1996 [P Wikipedia]; two more turbines, 400 MW [P WECC report], target January 2028 [P KUNC Jun 2026]. Cherokee 469: 3.67 TWh, 26.5 Bcf, all gas. Rocky Mountain Energy Center 55835: 2.44 TWh, 17.0 Bcf. Front Range 55283: 2.05 TWh, 14.6 Bcf. Pueblo Airport 56998: 1.61 TWh, 13.7 Bcf delivered. J.M. Shafer 50707: 0.72 TWh, 6.1 Bcf delivered. Mountain Peak 68386: 0.12 TWh (opened 2025). Horizon 68705 (planned, CSU, 480 MW, 2028: dataset).

### Hydro and storage
Blue Mesa 512: 0.198 TWh; Morrow Point 514: 0.263; Crystal 6159: 0.141; three together 0.60 [P-data]. Blue Mesa Reservoir 84.47 ft below full on 4 Aug 2026, under 25% full, could fall below minimum power pool by November at the earliest; no emergency release to Powell was made from it [P Colorado Sun 7 Aug 2026]. Reclamation 5 Nov 2026: will not fill this year; projected 42% of live capacity at end of water year 2027 [P usbr.gov]. Shoshone 476: 0.092 TWh; generating since 1909, 1902 right [P Wikipedia]; $99M purchase by the Colorado River District, $40M federal release May 2026, water court and PUC approvals pending [P Colorado Sun 22 May 2026]. Flatiron 518: 0.215 TWh; Colorado-Big Thompson power marketed by WAPA [P Wikipedia]. Cabin Creek 467 (300 MW in the dataset, 1967). Mount Elbert 6208: -0.024 TWh net. State: 65 hydro generators, 693 MW; three pumped-storage plants, about 580 MW [P EIA state profile].

### Wind, solar, batteries [P-data unless noted]
Rush Creek 60619: 2.15 TWh. Cheyenne Ridge 62952: 1.64. Limon I/II/III: 0.57 + 0.49 + 0.65 = 1.70; 601 MW. Peetz Table 56563: 0.67. Cedar Creek I + II: 0.69 + 0.61 = 1.30. Colorado Green 56173: 0.56 (2003; the oldest operating wind plant over 10 MW in the dataset). Dusty Rose 69893 (502 MW, 2026). Singing Grass 68982 (planned, 603 MW). Bighorn Solar 63770: 0.58 TWh; 300 MW, 613,400 MWh a year expected, about 90% of the mill's demand, 1,800 acres, Lightsource bp, 20-year contract with Xcel, online end of 2021; mill operator "Xcel's largest retail electric customer in Colorado", more than 1,000 jobs [P POWER magazine]. Neptune 63731: 0.68. Hooper 60008: 0.12. Axial Basin 65480: 0.05 (opened 2025). Wind ranks seventh in capacity; 29% of 2024 generation [P EIA state profile].

### Hand-placed markers (coordinates)
| Marker | Lat, lon | Source and check |
|---|---|---|
| Twentymile Mine | 40.3461, -107.0612 | OpenStreetMap (Nominatim); in Routt County south-east of Hayden plant (dataset 40.486, -107.185) |
| Trapper Mine | 40.4033, -107.5542 | OpenStreetMap; 4 miles south of Craig Station (dataset 40.463, -107.591) |
| Colowyo Mine | 40.2416, -107.8236 | OpenStreetMap "Colowyo Strip Mine, Moffat County"; south-west of Axial Basin Solar (dataset 40.328, -107.753) |
| West Elk Mine | 38.9266, -107.4442 | OpenStreetMap; 1.5 miles east of Somerset (38.928, -107.473, Wikipedia) |
| Deserado Mine | 40.19, -108.70 | Approximate, north-east of Rangely; no second source; card says approximate |
| Uravan | 38.3683, -108.7364 | OpenStreetMap and Wikipedia agree |
| Cotter mill site | 38.40, -105.22 | Approximate: just south of Lincoln Park (38.4256, -105.2131, Wikipedia); card says approximate |
| Canal Crossing (Power Pathway) | 40.045, -103.526 | End point of the unnamed PSCo 345 kV lines in OpenStreetMap |
| Lamar converter station | 38.209, -102.519 | West end of the OSM line "Finney to Lamar HVDC" |
| Missile Site, Ault | 39.691, -104.024; 40.608, -104.814 | OSM line end points |
| Denver, Colorado Springs | 39.739, -104.990; 38.834, -104.821 | City centers |
| Gas fields: DJ, Piceance, San Juan | 40.43, -104.55; 39.62, -108.05; 37.115, -107.633 | Regional markers (Weld County; between Meeker and Parachute; Ignacio) |
| Cheyenne hub | 40.93, -104.85 | Approximate: where Rockies Express, Trailblazer, Cheyenne Plains and Wyoming Interstate segments meet in the pipeline data |
| Data centers | 39.74, -104.74 | Aurora, approximate; card says so |

---

## 3. Fuel supply chains

**Coal.** Deliveries to Colorado plants 2025: 8.16M tons, of which 3.80M from Colorado mines (Trapper 1.83M, Foidel Creek/Twentymile 1.24M, Colowyo 0.67M, West Elk 0.05M) and 4.36M from Wyoming (Belle Ayr 1.43M, North Antelope Rochelle 0.91M, Black Thunder 0.73M, Antelope 0.69M, Eagle Butte 0.31M, Buckskin 0.29M), all by rail except Trapper [P-data]. Burned: 8.09M tons. Colorado production: 11,440 thousand tons in 2025, 12,391 in 2024 (EIA Quarterly Coal Report) [P]; the state agency counts 11,040,817 tons for 2024 [P DRMS]. Per mine 2024 (DRMS): West Elk 3,702,937; Deserado 2,335,267; Colowyo 1,893,271; Trapper 1,522,698; Foidel Creek 1,007,039; King II 579,605 [P]. Peak about 40 million tons in 2004 [P Colorado Sun 5 May 2025]. Peabody says Twentymile produced 1.8M tons in 2025 [P]. Colowyo to end production by the close of 2025; more than 120 workers [P Tri-State]. West Elk coal in 2025 went to plants in California (0.48M), Michigan, Mississippi and Hayden [P-data]. About two-fifths of Colorado coal is burned in state; the rest to 17 other states plus a little export [P EIA]. Deseret Power Railway: about 35 miles, opened 1984 [P Wikipedia]. Railroad company names (BNSF, Union Pacific) were not confirmed and are not on the map.

**Natural gas.** Marketed production 1,870 Bcf (2025), 1,847 (2024), peak 1,997 (2020) [P EIA]. Eighth-largest producing state; Denver-Julesburg and Piceance the largest regions; San Juan declining; coalbed methane about a third of US output in 2023, down about 50% since 2010; Weld County 8 of 10 barrels of the state's oil [P EIA state profile]. Deliveries to power plants 141.7 Bcf in 2025 [P EIA]; EIA-923 consumption sums to 146.6 Bcf [P-data] (the map uses 142). Power sector 33% of state gas demand in 2024 [P]. Storage: 10 fields, 141 Bcf [P]. Rockies Express: 1,679 miles, Meeker hub to Ohio via the Cheyenne hub, 3.6 Bcf/d, completed 2009 [P Wikipedia]. Colorado Interstate Gas is a Kinder Morgan subsidiary [P Wikipedia].

**Uranium.** Uravan: founded 1936 by US Vanadium; Manhattan Project supplier [P Wikipedia]; Superfund cleanup 1987-2007, more than 10 million cubic yards [P EPA]. Belt mined since 1898 [P Wikipedia]. "No uranium has been mined in the state since 2005" [P EIA state profile]. Sunday Mine Complex "fully permitted and operational", stockpiling [P company site]. Cotter/Lincoln Park: discharges 1958-1979, listed 1984, remedial investigation ordered 2014 and continuing, state-led [P EPA]. Grand Junction disposal cell built 1994, still open [P DOE]. April 2025 law recognizes nuclear as clean energy [P EIA].

## 4. Transmission and markets
- Highest voltage in Colorado is 345 kV (dataset; the two 500 kV lines in frame are Four Corners-Moenkopi and Gateway South).
- Colorado's Power Pathway: 560 to 650 miles of double-circuit 345 kV in Xcel's WECC report; "550-mile" in the PUC newsletter; $1.7 billion; four new substations (Canal Crossing, Goose Creek, May Valley, Sandstone); five existing stations expanded (Cheyenne Ridge, Fort St. Vrain, Harvest Mile, Pawnee, Tundra); approved 2022; completion expected May 2027 (as of March 2026) [P WECC; P HPPR]. Segments 1, 2, 3 in service; 4 and part of 5 under construction (project site, Nov 2026) [P]. PUC overrode Elbert County's denial 6 Apr 2026; El Paso County appeal pending [P PUC newsletter].
- Lamar DC tie: 210 MW; $250M DOE award (Sept 2026) toward a roughly $1.2 billion, 28-mile project raising it to 700 MW; needs PUC and FERC approval [P HPPR 28 Sep 2026].
- SPP's western expansion went live 1 Apr 2026: Tri-State, CSU, PRPA, Fountain, United Power, Delta-Montrose, La Plata, WAPA regions; more than 30 utilities in eight states [P POWER; P NMPP]. Xcel Colorado: PUC approved Markets+ participation 9 Oct 2025; start 2027; full-market application deadline 1 June 2029 [P PUC newsletter].

## 5. Users and utilities (EIA-861 2025 [P-data])
PSCo 28.26 TWh, 1,605,246 customers. CSU 4.51 TWh, 264,106 (industrial 41%); record 1,034 MW on 20 July 2026 [P APPA]. United Power 3.50 TWh, 115,479 (industrial 52%). CORE 2.62, 182,993. Black Hills 1.75, 111,502; rate request $26.7M filed 12 June 2026, $10.90 a month [P]. Poudre Valley 1.68; Fort Collins 1.45; Holy Cross 1.26 (85% carbon-free in 2025, goal 100% by 2030 [P annual report]); Mountain View 0.98; La Plata 0.85; Longmont 0.80; Loveland 0.73; Morgan County 0.56; Delta-Montrose 0.55; Empire 0.54; Yampa Valley 0.54; White River 0.53 (90% industrial); Highline 0.52; Moon Lake 0.49 in Colorado (93% industrial); San Isabel 0.42; Y-W 0.39; Mountain Parks 0.36; Grand Valley 0.25; K.C. 0.23; Fountain 0.23; Southeast 0.23; San Miguel 0.21; San Luis Valley 0.20; High West 0.20 in Colorado.
- Xcel: 1.6 million customers; large loads two-thirds of new demand; 950 MW of new generation for them over five years; large-load tariff filed 2 Apr 2026, 50 MW threshold, 15-year contracts, hearings 25 Aug and 20 Oct 2026 [P HPPR 7 Apr 2026; P PUC newsletter]. Rate case: asked $356M, approved $157M on 20 Aug 2026, about $5 a month [P]. PUC ceiling of 6,000 MW (Xcel sought 14,000 MW) [P]; up to 4,100 MW near-term [P].
- Tri-State: $2.5 billion New ERA award 25 Oct 2024, 1,280 MW [P]; down to 35 members by end of 2027 [P Pagosa Daily Post]; United Power left May 2024, La Plata due to leave 1 Apr 2026 [P].
- No Xcel Colorado peak-demand record for 2025 or 2026 was found; none is on the map.

## 6. Pollution
- Ozone: Denver Metro/North Front Range is Severe under the 2008 standard (deadline 20 July 2027) and Serious under 2015; Colorado plans to request Severe under 2015 (deadline 3 Aug 2033) [P CDPHE; P EPA Green Book, current to 31 Oct 2026].
- Regional haze: EPA disapproved Colorado's plan, release dated 8 Jan 2026, naming Nixon Unit 1 [P EPA].
- Coal ash: Earthjustice compilation of utility filings, 2 Sept 2025 [P]. Its Craig row is mislabeled and was not used.

## 7. Policy
SB23-016 goals (50% by 2030, net zero 2050) [S]. No statute sets a 2040 clean-electricity target; a 2026 proposal to move net zero to 2040 was not introduced [S]. Renewable standard 30% for investor-owned utilities [P EIA]. None of the [S] items is on the map.

## 8. Tour (as built)
Overview; Comanche; Yampa Valley (Craig); wind by night (Rush Creek); Power Pathway and Lamar; gas and Fort St. Vrain; Blue Mesa; Uravan; Denver and data centers; CO2 and planned plants.

## 9. Least sure
- Whether the PUC has ruled on the Comanche 2 / Hayden settlement since 7 Nov 2026.
- The Craig Unit 1 court cases; whether the unit has run much.
- Power Pathway route shown is only what OpenStreetMap had; this map names the unnamed PSCo 345 kV segments itself.
- Deserado and Cotter marker positions (approximate).
- EIA and the state disagree on 2024 coal tonnage (12.39M vs 11.04M); the West Elk "a third of the state total" uses the state's figures.
- Cabin Creek: EIA-923 shows positive net output (0.125 TWh) for 2025, unusual for pumped storage; not used.

## 10. Statements resting on general knowledge (no source opened)
- Tri-State is owned by rural electric co-ops; WAPA sells federal dam power to co-ops, cities and tribes.
- How pumped storage, combined cycle, peakers and DC ties work.
- The United States has separate eastern and western grids; SPP is based in Arkansas.
- Line-card descriptions of what each named line connects (from the line names in OpenStreetMap plus geography), including that the Pronghorn/Shortgrass line was built for Rush Creek and Cheyenne Ridge.
- Co-op one-line locations (which towns each serves); that the San Luis Valley has irrigated farms; Mountain Parks covers Grand and Jackson counties.
- Pipeline one-line descriptions (direction of flow, destinations) beyond what the map data shows.
- Colorado-Big Thompson moves water under the Continental Divide; Blue Mesa/Morrow Point/Crystal belong to the Colorado River Storage Project.

## 11. Used on the map: verification log

### [S] figures confirmed by opening the source
| Figure | What was opened |
|---|---|
| SB 26-182: Nixon deadline 31 Dec 2029 to 31 Dec 2032; signed | csu.org blog (passed both chambers); APPA article 28 May 2026 "Governor signs bill" (read) |
| Craig unit sizes, owners, 30 Dec 2025 order, valve failure, no cost estimate | Tri-State release 23 Jan 2026 (re-read) |
| Comanche 3: 750 MW, July 2010, outage Aug 2025 to mid-Aug 2026; settlement March 2028, 63% cap; hearings Nov 2026 | KUNC 7 Nov 2026 (re-read) |
| Bighorn Solar 300 MW, 613,400 MWh, about 90%, 1,800 acres, Lightsource bp, 20-year contract, largest retail customer | POWER magazine (re-read) |
| EIA state profile statements (wind rank, coal destinations, gas rank, coalbed methane, storage, uranium 2005, hydro counts, nuclear law) | https://www.eia.gov/state/text/CO_overview.html (re-read; updated 17 July 2025) |
| Holy Cross 85% and 2030 goal | Annual report page (re-read) |
| Power Pathway segments 1-3 in service | coloradospowerpathway.com (re-read) |

### Dropped ([S] or unconfirmed; not on the map)
- Comanche 3 co-owner shares (CORE 25%, Holy Cross 8%); the $845M tax figure; advanced nuclear study.
- Craig Unit 1 cost figures; exact Yampa shares other than PRPA and Xcel.
- Hayden unit sizes; the 2030 filing; biomass and molten-salt plans.
- Rawhide turbine model and cost.
- Drake coal end date (Aug 2021) and demolition cost; Nucla, Cameo, Arapahoe, Valmont, W.N. Clark, Lamar details beyond dataset years.
- Xcel peak-demand records and forecast (7,534 MW); carbon targets; wildfire plan cost; Marshall Fire settlement.
- Tri-State member count (41); exit fees (United Power $627.6M vs $331M conflict; La Plata $209.7M); 307 MW Moffat County gas plant.
- SB21-072 market deadline; SB23-016 targets; 2040 proposals; 2026 bills (HB26-1226 etc.); data-center bills; Denver moratorium; governor's election.
- QTS Aurora 177 MW; "62% of energy growth"; "1,500 MW by 2030"; NREL/Kestrel; Suncor; Climax and Henderson; Farr pumps.
- Black Hills customer count from news (EIA-861 used) and its pending merger.
- Fort St. Vrain spent fuel; Cabin Creek 324 MW and upgrade; Vestas factories; Rush Creek turbine count.
- Railroad company names; White River hub location.
- Haze litigation in the Tenth Circuit; ozone source shares; mercury (the dataset supplies plant mercury where EPA reports it).
- Earthjustice's Craig row (mislabeled owner).
