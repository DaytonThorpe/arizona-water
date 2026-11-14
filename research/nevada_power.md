# Nevada power: research fact sheet (generation, fuel chains, grid, users, pollution)

Compiled 2026-11-13/14 for the "Nevada Power" map. Format follows `arizona_power.md`.

**Conventions**
- TWh = terawatt-hour = 1 million MWh. MW = megawatt (capacity). Bcf = billion cubic feet. PUCN = Public Utilities Commission of Nevada. NVE = NV Energy (Nevada Power Co in the south, Sierra Pacific Power Co in the north). BHE = Berkshire Hathaway Energy. TRIC = Tahoe-Reno Industrial Center. IRP = integrated resource plan. CRC = Colorado River Commission of Nevada.
- Evidence tags: **[P]** = I opened the document itself and read the number. **[P-data]** = I summed rows of a downloaded EIA data file (the sum is mine, the rows are EIA's). **[S]** = seen only in a search-engine summary. **[GK]** = general knowledge, no source opened. **[derived]** = my arithmetic. **unverified** = could not confirm.
- EIA files (downloaded 13 Nov 2026, shared with the Arizona chapter): EIA-923 final 2025 and 2024 (https://www.eia.gov/electricity/data/eia923/), EIA-861 final 2025 (https://www.eia.gov/electricity/data/eia861/; `Sales_Ult_Cust_2025.xlsx`, `Operational_Data_2025.xlsx`, `Net_Metering_2025.xlsx`), EIA-860M September 2026 (https://www.eia.gov/electricity/data/eia860m/), EIA State Electricity Profile for Nevada, data year 2024 (https://www.eia.gov/electricity/state/nevada/ ; workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20NV.xlsx), EIA state history (https://www.eia.gov/electricity/data/state/), EIA small-scale solar (https://www.eia.gov/electricity/data/eia861m/).
- **Search limit.** The session's web-search budget ran out after about 20 searches, and the page-fetch tool hit a usage limit later. Everything after that was done by opening known URLs directly. Topics that would have benefited from more searching are listed in section 10.
- Map frame: lon -120.35 to -113.70, lat 34.75 to 42.25. It includes eastern California down to the Tehachapi and Kern County (many California plants), the north-west corner of Arizona (Davis Dam, Griffith, South Point) and slivers of Idaho and Utah. The Intermountain plant at Delta, Utah is outside the frame.

---

## 1. Statewide budget

### 1a. Where it comes from: net generation in Nevada, plants of 1 MW and larger

| Fuel | 2025 TWh | 2025 share | 2024 | 2010 | 2005 | Tag |
|---|---|---|---|---|---|---|
| Natural gas | 22.88 | 50.6% | 25.00 | 23.69 | 18.84 | 2025 [P-data] EIA-923; earlier [P] `annual_generation_state.xls` |
| Solar (PV plus two solar thermal plants) | 13.91 | 30.8% | 12.45 | 0.22 | 0 | same |
| Geothermal | 3.75 | 8.3% | 3.89 | 2.07 | 1.26 | same |
| Coal | 2.59 | 5.7% | 2.32 | 7.00 | 18.38 | same |
| Hydro (Hoover's Nevada side 1.81, six small plants 0.07) | 1.88 | 4.2% | 1.61 | 2.16 | 1.70 | same |
| Wind (one farm) | 0.35 | 0.8% | 0.32 | 0 | 0 | same |
| Landfill gas 0.051, waste heat 0.014, oil 0.007 | 0.07 | 0.2% | 0.06 | | | same |
| Batteries (net; they use more than they return) | -0.24 | -0.5% | -0.14 | | | same |
| **Total** | **45.19** | | **45.53** | **35.15** | **40.21** | same |
| Small-scale (rooftop) solar, EIA estimate, not in the total | 2.27 | | 2.04 | | | [P-data] `small_scale_solar_2025.xlsx` |

- Coal: 18.4 TWh (46% of generation) in 2005; 7.0 in 2010; 2.6 in 2025 [P].
- 2025 monthly [P-data]: in April solar made 1.36 TWh and gas 1.41 TWh; in August gas 2.55, solar 1.44; in December gas 1.93, solar 0.69.
- Rank among states, 2025 EIA-923 [P-data]: geothermal California 10.90 TWh, Nevada 3.75, Utah 0.47. Utility solar: Texas 66.1, California 54.9, Florida 24.9, Arizona 15.5, Nevada 13.9.
- By grid area (EIA-923 balancing authority code) [P-data]: NV Energy 39.54 TWh; California ISO 2.77 (Copper Mountain 2 and 4, Silver State South, Dixie Valley geothermal, Desert Star gas, Sunshine Valley); Western Area Power Administration 2.27 (Hoover Nevada side, Townsite); Los Angeles Department of Water and Power 0.60 (Copper Mountain 3).
- Hoover is split by EIA: Nevada side 1.81 TWh, Arizona side 0.93 TWh in 2025 [P-data]. Only the Nevada side is in Nevada's total.

### 1b. Where it goes: 2024, EIA State Electricity Profile Table 10 [P]

| Item | 2024 TWh | Share |
|---|---|---|
| Total supply (= generation) | 45.53 | 100% |
| Retail sales | 40.66 | 89.3% |
| ...residential | 14.63 | 32.1% |
| ...commercial | 14.26 | 31.3% |
| ...industrial | 11.77 | 25.8% |
| ...transportation | 0.008 | |
| Direct use | 0.17 | 0.4% |
| Estimated losses | 1.90 | 4.2% |
| Unaccounted | 0.32 | 0.7% |
| Net exports to other states | 2.47 | 5.4% |

- Net interstate exports: 1.10 TWh (2022), 1.90 (2023), 2.47 (2024) [P]. A residual, not a metered flow.
- "Energy-only providers" (sellers other than the utility, to customers who left it) sold 6.64 TWh in 2024, 16.3% of sales; 1.48 TWh in 2009 [P].
- 2025 retail sales, EIA-861, bundled plus energy-only rows [P-data]: 39.84 TWh; residential 13.91, commercial 14.27, industrial 11.66; 1,519,245 customers, 1,335,581 residential.
- 2024 summary (Table 1) [P]: net summer capacity 16,725 MW (rank 28); generation 45,528,427 MWh (32); sales 40,664,639 MWh (33); average price 11.47 cents/kWh (25), residential 15.00; CO2 13,068 thousand metric tons (35), 631 lb/MWh; SO2 3,537 short tons; NOx 10,539 short tons.
- Top retailers 2024 (Table 3) [P]: Nevada Power 22.12 TWh; Sierra Pacific 8.65; Tenaska Power Services 2.96 (all commercial); Silver State Energy Association 0.98; Shell Energy North America 0.92 (all industrial).

### 1c. Capacity, September 2026 (EIA-860M, nameplate) [P-data]

Gas combined cycle 6,514 MW; solar PV 5,279; batteries 2,104 MW / 6,366 MWh; gas combustion turbine 1,840; hydro 1,053; gas steam 917; geothermal 914; coal 242 (TS Power only; EIA now lists North Valmy as gas); wind 150; solar thermal 201 (Crescent Dunes 125, Nevada Solar One 76); gas engines 118.
Planned: batteries 2,919.5 MW; solar 3,726 MW; gas turbines 416 MW (North Valmy, 2028); geothermal 26.5 MW (Fish Lake).

### 1d. Emissions (EIA `emission_annual.xlsx`, metric tons CO2; short tons SO2, NOx) [P]

| Year | CO2 Mt | coal | gas | SO2 | NOx |
|---|---|---|---|---|---|
| 2005 | 26.20 | 18.01 | 8.13 | 48,403 | 43,578 |
| 2010 | 17.02 | 7.20 | 9.75 | 7,161 | 15,267 |
| 2015 | 14.75 | 2.87 | 11.79 | 4,852 | 9,882 |
| 2020 | 13.48 | 2.09 | 11.35 | 1,903 | 9,670 |
| 2023 | 12.54 | 2.40 | 10.11 | 2,603 | 9,746 |
| 2024 | 13.07 | 2.70 | 10.35 | 3,211 | 9,564 |

2005 to 2024: CO2 down 50%, SO2 down 93%, NOx down 78% [derived]. The big step (2005 to 2006) is the closing of Mohave at the end of 2005.

---

## 2. Candidate places (2025 output from EIA-923 [P-data]; capacity and years from EIA-860M; coordinates from EIA-860M unless noted)

### Gas
- Chuck Lenzie (Apex, north of Las Vegas; Nevada Power): 6.16 TWh; 43.2 Bcf delivered. Largest generator in the state.
- Tracy (east of Reno; Sierra Pacific): 4.01 TWh; 29.6 Bcf. Next to TRIC. Tuscarora listed as seller of 26.1 Bcf.
- Harry Allen: 3.10 TWh; 21.8 Bcf. Silverhawk: 2.48 TWh; 18.9 Bcf. Apex Generating Station (independent): 1.47 TWh; 10.4 Bcf. All in the Apex area.
- Walter M. Higgins (Primm): 2.09 TWh; 15.4 Bcf. Clark (Las Vegas): 0.74 TWh; 7.1 Bcf. Las Vegas Generating Station 0.64. Fort Churchill (Yerington): 0.47 TWh; EIA closing year 2028 for 230 MW. Desert Star (Boulder City; operator name in EIA includes SDG&E; California grid): 0.38.
- Western 102 (Nevada Gold Mines, next to Tracy): 0.41 TWh, gas engines.
- All Nevada: 171.8 Bcf burned for power in 2025 [P-data]. Deliveries reported: 160.5 Bcf; sellers listed: Kern River 109.7, Tuscarora 26.1, Southwest Gas 15.8, Paiute 8.8, Ruby 0.05.

### Coal
- North Valmy (Sierra Pacific operates; NV Energy and Idaho Power own it jointly [P] Nevada Independent): units 1981 and 1985. 2025: 1.30 TWh, of which 1.29 from coal and 0.005 from gas (December only) [P-data]. Coal deliveries 2025: 261,368 tons, all Spring Creek mine, Montana, by rail, last delivery September; 2024: 1,036,489 tons from Kemmerer and Black Butte (Wyoming), Spring Creek (Montana), West Elk (Colorado), North Antelope Rochelle (Wyoming) [P-data]. First gas delivery December 2025, seller Ruby [P-data]. EIA-860M September 2026 lists the plant as natural gas, 567 MW, plus 416 MW of gas turbines planned for 2028. PUCN approved the conversion; NV Energy then proposed two peaking units (411 MW in the Nevada Independent; 436.6 MW, in service January 2028, in NV Energy's March 2026 WECC report) [P]. Conversion "to be completed by the end of 2026" [P] Nevada Independent. Unit stop dates (Unit 1 September 2025, Unit 2 January 2026) [S] only: not used.
- TS Power Plant (Dunphy; Nevada Gold Energy / Nevada Gold Mines): 242 MW coal + 200 MW solar in EIA. 2025: 1.72 TWh total, 1.30 coal, 0.42 solar [P-data]. Coal: 726,156 tons delivered 2025, all Black Thunder, Wyoming, by rail [P-data]. No gas burned in 2025 [P-data]. Conversion to dual fuel approved February 2020, commissioning targeted Q2 2022; 200 MW solar then under review; Barrick 61.5% [P] mining.com. Current status of the gas conversion: unverified.
- Reid Gardner (Moapa): coal 1965 to 2014/2017, 557 MW at peak (EIA nameplate 636.8), demolished 2020; 220 MW battery since 2023 on 5 of 67 acres; 500 feet from Moapa Band of Paiutes land; a 2013 law directed NV Energy to drop 800 MW of coal [P] Nevada Independent.
- Mohave (Laughlin): 1,636 MW nameplate; Southern California Edison; 273-mile slurry pipeline from Black Mesa; 1.3 billion gallons a year; closed 2005 [P] CLUI. Coal 2005: 18.4 TWh statewide, 7.0 in 2010.

### Hydro
- Hoover: 2.73 TWh both sides in 2025 [P-data]. Lake Mead 1,040.71 ft on 12 Nov 2026 [P] Reclamation. 2,080 MW with a full lake; 1,304 MW at 1,055 ft (2025); 12 older turbines stop at 1,035 ft, leaving 382 MW [P] Circle of Blue. Allocation: Nevada 23.37%, Arizona 18.95%, Metropolitan Water District 28.54%, Los Angeles 15.42%, Boulder City 1.77% [P] Reclamation FAQ. CRC manages Nevada's share [P].
- Davis Dam (Arizona side): 0.91 TWh.

### Geothermal (26 plants generating in 2025; 18 run by Ormat companies, 2.79 of 3.75 TWh [P-data])
- McGinness Hills (Lander County; Ormat): 1.00 TWh from the two EIA entries; 203 MW.
- Steamboat complex (south Reno; six plants): 0.56 TWh. Dixie Valley: 0.42 TWh, in California's grid. Tungsten Mountain 0.28 (with solar). Blue Mountain 0.17. Stillwater 0.09 (geothermal plus solar on one site). Don A. Campbell 0.19.
- Dixie Meadows: Ormat applied about 2015, started building 2022; toad listed endangered 2022; listing "has prevented construction"; Ormat sued in 2025; Center for Biological Diversity and Fallon Paiute Shoshone Tribe moved to intervene 13 Jan 2026 [P] Nevada Independent, CBD, KUNR. Scaled to 12 MW: [S] only, not used.
- Fervo Project Red: 30-day well test, 3.5 MW, announced 18 July 2023; Google partner since 2021 [P] Fervo. Google/NV Energy tariff with 115 MW from Fervo [P] Google. PUCN approved the tariff [P] Latitude Media. Corsac 115 MW to connect at Lantern substation; PUCN approval December 2024; proposed in-service June 2036 [P] NV Energy WECC report. Project Red sits beside the Blue Mountain plant: [GK].

### Solar and batteries
- Gemini: 2.18 TWh; 690 MW solar, 380 MW / 1,416 MWh battery; 25-year contract with NV Energy; operating since April 2024 [P] Quinbrook. EIA lists 380 MWh.
- Copper Mountain (Eldorado Valley; six EIA entries, 813 MW): 2.37 TWh. Techren (five entries, 400 MW): 0.93. Eagle Shadow Mountain 0.90. Silver State South 0.68. Moapa Southern Paiute 0.61. Arrow Canyon 0.60. Dodge Flat 0.55. Boulder Solar I and II 0.39. Nevada Solar One (solar thermal, 2007) 0.09.
- Crescent Dunes: 110 MW tower (EIA 125), 10,347 heliostats, 640-ft tower; leaks October 2016, March 2019 (more than two years down), February 2022, February 2023; output about 45% lower since; second bankruptcy 21 Jan 2026; $173 million secured debt [P] chapter11cases. NV Energy ended its contract October 2019; $737 million federal loan guarantee; sale to Sons of Liberty Construction for $7 million approved 19 Mar 2026 [P] ElevenFlo. 2025 output 0.059 TWh [P-data].
- Sierra Solar (Sierra Pacific): battery 400 MW / 1,600 MWh running 2026; 400 MW solar due 2026 (EIA). Phase 2 is 600 MW [P] WECC report.
- Libra Solar (Mineral County): 700 MW solar + 700 MW battery, under construction, to connect at Fort Churchill, October 2027; PUCN approval December 2024 [P] WECC report, EIA.
- Batteries statewide: 2,104 MW / 6,366 MWh operating; 2,920 MW planned [P-data].
- Ivanpah (California, at the state line): 0.66 TWh solar plus 0.03 from gas in 2025 [P-data]. Closure plans: [S]/Wikipedia only, not used.
- Spring Valley Wind (White Pine County): 0.35 TWh; the only wind farm.

### Grid
- Greenlink West: 525 kV, 320 miles, Northwest substation (Las Vegas) to Walker River (Fort Churchill) at Yerington, proposed in service May 2027; Greenlink North: 525 kV, 235 miles, Robinson Summit to Walker River, December 2028 [P] NV Energy WECC report, 4 Mar 2026. Cost $4.24 billion, first estimated $2.5 billion; could carry 4,000 MW; southern customers pay about 70% [P] Nevada Independent (article gives 350 miles).
- One Nevada Line: 231 miles, 500 kV, up to 800 MW at first; LS Power affiliate 75%, NV Energy 25%; first link between NV Energy's north and south; dedicated January 2014 [P] NV Energy release. Drawn in OpenStreetMap as "Southwest Intertie Project -SWIP".
- TransWest Express: over 730 miles, Wyoming to southern Nevada; construction began late 2023 [P] project site. Southern end at Marketplace substation: Wikipedia only.
- Intermountain direct-current line: 488 miles, Delta, Utah to Adelanto, California, 2,400 MW [P] Hitachi Energy.
- Pacific DC Intertie (Celilo to Sylmar) crosses western Nevada [GK]; drawn in the data.
- Markets: NV Energy's choice of day-ahead market: unverified, not used.

### Users
- Peaks, EIA-861 2025 [P-data]: Nevada Power 6,168 MW summer, 3,073 winter; Sierra Pacific 2,073 summer, 1,319 winter. A KTNV piece quotes NV Energy: about 6,200 MW "last summer", 2,000 to 2,500 MW on a winter day [P].
- Data centers: about 40 in Nevada in 2024 using 8.6 TWh, by an S&P estimate; could reach 14.8 TWh by 2030; 12 projects asking NV Energy for 5,900 MW by 2033; 3,820 MW of that at TRIC; forecast growth 24,633 GWh at Sierra Pacific by 2033; operating data center capacity about 713 MW [P] Desert Research Institute report, 2025.
- 2026 IRP (filed May 2026): about 4,500 MW renewables, more than 5,400 MW batteries, 1,200 MW gas; 47.5% renewable in 2025 against a 34% requirement [P] NV Energy fact sheet (June 2026). "Nearly 40%" rise in peak in five years [P] Advanced Energy United. PUCN was reviewing it in the last week of October 2026 [P] KSNV. No decision found.
- Fleet Data Centers: PUCN approved two gas plants, 144 MW and 218 MW, in Storey County, to run until utility service arrives in two to three years [P] ConstructConnect, 21 Sep 2026.
- Lake Tahoe: NV Energy told Liberty Utilities it will stop supplying after May 2027; 49,000 California customers; 75% of Liberty's power from NV Energy [P] Fortune, 12 May 2026.
- Customers that left: MGM, Wynn and Las Vegas Sands were told to pay more than $125 million in all to leave [P] Vegas Inc, 25 Feb 2016. Individual fees ($86.9M, $15.7M, $23.9M) [S], not used. Question 3: 72.36% yes in 2016, 67.05% no in 2018 [P] Ballotpedia.
- Mines: Wells Rural Electric sold 0.53 of 0.64 TWh to industry; Mt. Wheeler 0.44 of 0.56 [P-data].
- Lithium: Thacker Pass, Humboldt County, 40,000 tonnes a year in phase 1, mechanical completion late 2027, $2.23 billion federal loan, General Motors 38% [P] Lithium Americas. Silver Peak "the only active lithium resource in the United States", about 60 employees [P] Albemarle; USGS 2026: US commercial production from one brine operation in Nevada [P]. Rhyolite Ridge: permitted, "construction-ready", $996 million federal loan [P] Ioneer.

### Policy
- Renewable standard: 34% for 2024 to 2026, 42% for 2027 to 2029, 50% from 2030; 2050 goal of zero-carbon output equal to sales (Senate Bill 358, 2019) [P] PUCN.
- Rooftop solar: 135,443 net-metered customers and 1,124 MW in 2024 [P]; 2025: 143,765 customers, 1,226 MW [P-data]. PUCN, 16 Sep 2025, 3-0: daily demand charge for homes and small businesses in the south from April 2026 (utility estimate about $20 a month), and 15-minute netting in the north; request cut by more than a third from $224 million [P] Utility Dive. Demand charge delayed to 2027; court challenge dismissed; appeal to Nevada Supreme Court [P] Vote Solar. The 2015 cut and 2017 restoration: [GK].
- Yucca Mountain: license application 3 June 2008 [P] NRC. Designation by Congress and end of funding: [GK].
- NV Energy is a subsidiary of Berkshire Hathaway Energy [P] Google. Purchase year and price: [GK], not used.

---

## 3. Fuel supply chains
- Gas: Nevada has no meaningful gas production [GK]. South: Kern River line from Wyoming enters from Utah near lat 37.07, lon -114.05 (EIA map data) and passes Apex and Las Vegas. North: Tuscarora (from the Oregon border to Wadsworth by Tracy), Paiute (from the Idaho line to Reno and Tahoe), Ruby (across the north, Wyoming to Oregon). Lengths and owners of these pipelines: Wikipedia only, not used on cards except that Kern River belongs to Berkshire Hathaway Energy [GK].
- Coal: by rail from Wyoming and Montana (section 2).
- Uranium: none; no reactor in Nevada.
- Lithium for batteries: section 2.

## 4. Utilities (EIA-861 2025 [P-data])
| Utility | Type | Sales TWh | Customers |
|---|---|---|---|
| Nevada Power | investor-owned | 21.29 (+2.90 delivered for 188 customers who buy elsewhere) | 1,052,455 |
| Sierra Pacific Power | investor-owned | 8.76 (+2.88 delivered for 24 customers) | 386,254 |
| Wells Rural Electric | co-op | 0.64 | 5,801 |
| Valley Electric Association | co-op | 0.57 | 25,416 |
| Mt. Wheeler Power | co-op | 0.56 | 7,347 |
| Overton Power District No. 5 | public | 0.44 | 18,965 |
| Boulder City | municipal | 0.15 | 8,224 |
| Raft Rural Electric (Nevada part) | co-op | 0.05 | 1,890 |
| Colorado River Commission | state | 0.94 (energy to 17 customers) | |

Territory data (HIFLD): Nevada Power IS present and plausible. Southern California Edison, WAPA and the Colorado River Commission are each drawn as all of Clark County: left out. Lincoln County Power District No. 1 and Alamo Power District No. 3 are each drawn as all of Lincoln County: left out. Idaho Power is a sliver on the state line: left out. Boulder City's utility is not in the file.

## 5. Tour ideas
Half gas, a third sun; the Apex gas cluster and Kern River; Gemini and night; Hoover and the lake; the geothermal belt; the end of coal (Reid Gardner, Mohave, Valmy, TS); Greenlink; Reno and the data centers; Las Vegas and who left the utility; what comes next.

## 10. Least sure
- No PUCN decision on the 2026 IRP was found; the card says it was under review in late October 2026.
- TS Power gas conversion status; North Valmy unit-by-unit conversion dates.
- Whether the Crescent Dunes sale closed and whether the plant runs now.
- Ivanpah's closure status. NV Energy's market choice. Switch's proposed 510 MW gas plant ([S] only, not used).
- A 2026 peak-demand record for NV Energy was not found; the map uses the 2025 peaks reported to EIA.
- Pipeline lengths and owners (Tuscarora, Paiute, Ruby) not confirmed from a primary source.
- Rhyolite Ridge and Dixie Meadows marker positions are approximate.

## 11. Used on the map: verification log

### [S] figures opened and confirmed
- Greenlink $4.24 billion, 4,000 MW, May 2027: Nevada Independent article opened; dates and mileage also in NV Energy's WECC report (opened as PDF text).
- Gemini 690 MW / 380 MW / 1,416 MWh: Quinbrook project page opened.
- Crescent Dunes second bankruptcy 21 Jan 2026, four leaks, $173 million: chapter11cases article opened. $7 million sale approved 19 Mar 2026, contract ended October 2019, $737 million: ElevenFlo page opened.
- Data centers 22% / 8.6 TWh / 5,900 MW: Desert Research Institute report opened. Note the report words the 22% as a share of "generation capacity"; the map gives the 8.6 TWh and compares it with sales itself.
- Lake Tahoe: Fortune article opened. Fleet gas plants: ConstructConnect opened.
- Demand charge and 15-minute netting: Utility Dive opened; delay to 2027: Vote Solar opened.
- Thacker Pass: Lithium Americas page opened (loan is $2.23 billion there; a 2024 news story said $2.26 billion).
- Dixie Valley toad: Nevada Independent, CBD and KUNR opened. Fervo 3.5 MW and Google 115 MW: company pages opened.
- 2026 IRP: NV Energy fact sheet (PDF) and Advanced Energy United release opened.
- Question 3 percentages: Ballotpedia opened. Renewable standard: PUCN page opened.

### Dropped
- Individual casino exit fees; Switch's exit and fee; Caesars' exit.
- Dixie Meadows "12 MW"; North Valmy unit stop dates and $573 million cost; "nearly three times peak" data center requests; NV Energy peak "about 9,000 MW".
- Switch 510 MW gas plant; Ivanpah closure; Berkshire purchase price; Mohave ownership shares; SWIP-North; TransWest cost; day-ahead market choice.
- Lake Mead record low in August 2026 (from the Arizona file; not re-opened here).

### Statements on the map that rest on general knowledge
- Yucca Mountain was named by Congress and later lost its funding; no license issued.
- Regulators cut rooftop solar credits in 2015 and a 2017 law restored most of them.
- Kern River pipeline starts in Wyoming and belongs to Berkshire Hathaway Energy; Tuscarora comes from the Oregon border; Ruby runs Wyoming to Oregon.
- Fervo's Project Red is beside the Blue Mountain plant.
- The Pacific direct-current line runs from the Columbia River to Los Angeles; neither direct-current line delivers power in Nevada.
- Nevada produces almost no natural gas and has no coal mine or reactor.
- Moapa Southern Paiute solar is on the Moapa River Indian Reservation; Nevada Solar One uses curved mirrors.
