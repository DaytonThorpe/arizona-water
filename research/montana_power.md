# Montana power: research fact sheet (generation, fuel chains, grid, users, pollution)

Compiled 2026-11-13 for the "Montana Power" map (power/content/mt.js). Format follows `arizona_power.md`.

**Conventions**
- TWh = terawatt-hour = 1 million MWh. MW = megawatt (capacity). Bcf = billion cubic feet. NWE = NorthWestern Energy. MDU = Montana-Dakota Utilities. PSC = Montana Public Service Commission. DEQ = Montana Department of Environmental Quality. BPA = Bonneville Power Administration. WAPA = Western Area Power Administration. CSKT = Confederated Salish and Kootenai Tribes. MATS = federal Mercury and Air Toxics Standards. PSE = Puget Sound Energy. PGE = Portland General Electric.
- Evidence tags: **[P]** = I opened the document or data file and read the number. **[P-data]** = I summed rows of an EIA data file myself. **[S]** = seen only in a search-engine summary. **[derived]** = my arithmetic from tagged figures. **[GK]** = general knowledge, no source opened (kept off the map unless stated in the final report). **unverified** = could not confirm.
- EIA files used (already downloaded in the session scratchpad on 13 Nov 2026):
  - EIA-923 final 2025: https://www.eia.gov/electricity/data/eia923/ ("Page 1 Generation and Fuel Data", "Page 5 Fuel Receipts and Costs")
  - EIA-861 final 2025: https://www.eia.gov/electricity/data/eia861/ (`Sales_Ult_Cust_2025.xlsx`)
  - EIA-860M, September 2026 inventory (baked into power/data/mt.js): https://www.eia.gov/electricity/data/eia860m/
  - EIA State Electricity Profile, Montana, data year 2024: https://www.eia.gov/electricity/state/montana/ , workbook https://www.eia.gov/electricity/state/xls/SEP%20Tables%20for%20MT.xlsx (Tables 1, 3, 4A, 5, 7, 8, 10)
  - EIA Annual Coal Report 2024, Table 1 and Table 9: https://www.eia.gov/coal/annual/
  - EIA Refinery Capacity Report, Table 5, as of 1 Jan 2026: https://www.eia.gov/petroleum/refinerycapacity/
- Web search stopped working part-way through (the session's shared search limit was reached). Items that could not be searched after that point are listed under "Dropped".

---

## 1. Statewide budget

### 1a. Where it comes from: net generation in Montana, plants of 1 MW and larger

| Fuel | 2025 TWh | 2025 share | 2024 TWh | 2015 | 2010 | Tag |
|---|---|---|---|---|---|---|
| Coal (subbituminous 9.340 + waste coal 0.276) | 9.62 | 36.0% | 9.79 | 16.01 | 18.60 | 2025 [P-data] EIA-923; other years [P] SEP Table 5 |
| Hydro | 8.44 | 31.6% | 9.22 | 9.89 | 9.41 | same |
| Wind | 6.23 | 23.3% | 5.82 | 1.96 | 0.93 | same |
| Natural gas | 1.32 | 4.9% | 1.00 | 0.60 | 0.06 | same |
| Petroleum coke 0.455 + diesel 0.013 | 0.47 | 1.8% | 0.39 (petroleum) | 0.50 | 0.41 | same |
| Solar | 0.35 | 1.3% | 0.37 | n/a | n/a | same |
| Waste heat (EIA "other") | 0.26 | 1.0% | 0.26 | 0.30 | 0.28 | same |
| Wood 0.021, landfill gas 0.017, refinery gas 0.003 | 0.04 | 0.2% | 0.04 | | | same |
| **Total** | **26.73** | 100% | **26.87** | 29.30 | 29.79 | same |

- Colstrip alone: 9.17 TWh in 2025, 34.3% of the state [P-data, derived]. 2023 (eGRID, in the baked data): 10.82 TWh, 11.99 million short tons CO2.
- Monthly 2025, TWh [P-data]: hydro peaks May 1.09, June 0.95, low October 0.48; wind peaks Dec/Jan 0.76, low Sep 0.35; coal low April-June (0.40-0.51).
- Generation by balancing authority, 2025 [P-data]: NorthWestern (NWMT) 17.43; BPA 2.28 (Libby, Hungry Horse); Avista 1.74 (Noxon Rapids 1.36, Clearwater Wind III 0.38); WAPA Upper Great Plains West 1.63 (Fort Peck, Yellowtail, Canyon Ferry); Puget 1.33 (Clearwater Wind I); PacifiCorp East 0.78 (Pryor Mountain); NaturEner Glacier 0.41 and Rim Rock 0.53 (their own balancing areas); Southwest Power Pool 0.49 and MISO 0.12 (the Eastern grid: Culbertson, two waste-heat plants, Diamond Willow). Eastern-grid share: 0.61 of 26.73 = 2.3% [derived]. A 2004 state report gave "about 2 percent of the electricity generated in Montana" and "about 7 percent of Montana's load" in the eastern interconnection [P] https://archive.legmt.gov/content/publications/Environmental/2004deq_energy_report/electricity_text.pdf
- Capacity 2024 (SEP Table 4A) [P]: total 7,183 MW (rank 42); hydro 2,834; wind 1,890; coal 1,627; gas 554; solar 179. Wind was 379 MW in 2010.

### 1b. Where it goes (2024, SEP Table 10) [P]

| Item | 2024 TWh | Share of supply | 2015 | 2010 |
|---|---|---|---|---|
| Generation | 26.87 | | 29.30 | 29.79 |
| Imports from Canada | 0.36 | | 0.14 | 0.25 |
| **Total supply** | **27.24** | 100% | 29.44 | 30.04 |
| Retail sales | 15.57 | 57.2% | 14.21 | 13.77 |
| ...residential | 5.70 | 20.9% | | |
| ...commercial | 5.03 | 18.5% | | |
| ...industrial | 4.83 | 17.7% | | |
| Direct use | 0.02 | 0.1% | | |
| Exports to Canada | 0.59 | 2.2% | 0.31 | 0.63 |
| Estimated losses | 0.73 | 2.7% | | |
| Unaccounted | 0.12 | 0.5% | | |
| **Net exports to other states** | **10.20** | **37.5%** | 13.89 | 14.60 |

- Net interstate exports: 14.6 TWh (2010), 13.9 (2015), 6.8 (2020, low), 10.2 (2024) [P].
- Summary (SEP Table 1, 2024) [P]: average price 10.83 cents/kWh (rank 37); residential 12.66 cents; CO2 11,839 thousand metric tons (rank 36), 969 lb/MWh (rank 14); SO2 7,593 short tons; NOx 13,669 short tons. Customers 692,539 (557,432 residential).
- 2025 retail sales (EIA-861, my sum) [P-data]: 15.35 TWh = 12.66 bundled + 2.69 energy-only. Residential 5.79, commercial 5.13, industrial 4.43.

### 1c. Emissions trend (SEP Table 7) [P]
- CO2, thousand metric tons: 17,896 (2000); 19,875 (2005); 20,370 (2010); 18,136 (2015); 10,415 (2020); 13,774 (2023); 11,839 (2024). 2010 to 2024: down 42% [derived]. Coal was 10,601 of 11,839 in 2024.
- SO2 short tons: 52,083 (2000); 24,285 (2010); 7,593 (2024). NOx: 39,666 (2000); 23,367 (2010); 13,669 (2024).

---

## 2. Places (candidates). Plant capacity, 2023 output and emissions come from the baked dataset; figures below are what the dataset lacks.

### Coal
| Place | Facts | Tag / source |
|---|---|---|
| Colstrip (EIA 6076) | 2025 output 9.17 TWh; 5.74 M tons of coal received in 2025, all from the Rosebud Mine by conveyor (EIA transport code TC). Units 1 and 2 (307 MW each) shut in 2020. Units 3 (1984) and 4 (1986), 740 MW nameplate each. Before 2026: PSE 25%, PGE 20%, Talen 15% (30% of Unit 3; Talen operates), NWE 15% (30% of Unit 4), Avista 15%, PacifiCorp 10%. | [P-data] EIA-923; [P] Montana Legislative Fiscal Division energy report https://leg.mt.gov/content/Publications/fiscal/2025-Biennium/Special-Topics/Energy/Coal-Fire-Generation-2023.pdf and Natural-Gas-Generation-2023.pdf (Table 1.4) |
| Colstrip ownership 2026 | Effective 1 Jan 2026 NWE acquired, at no cost, PSE's 370 MW and Avista's 222 MW; "now owns 55%". Avista and PSE keep their share of environmental and decommissioning costs. | [P] https://northwesternenergy.com/clean-energy/where-does-your-energy-come-from/electric-generation/colstrip-power-plant |
| Colstrip and the PSC | PSC approved the NorthWestern / Black Hills merger 3-2 on 10 Nov 2026, with conditions: a plan by June 2027 on whether Colstrip generation could serve Montana customers as a least-cost resource; analysis of the PSE shares in the 2026 resource plan. NWE had said the PSE shares would go into a subsidiary outside the regulators' control. | [P] Daily Montanan https://dailymontanan.com/?p=40141 |
| Colstrip and MATS | 2024 EPA amendments tightened the particulate limit; Colstrip did not meet it while many other coal plants did (MTPR: "the highest emitter of these air toxins in the country"). April 2025: two-year presidential exemption for Colstrip and nearly 50 other plants. 20 Feb 2026: EPA finalized repeal of the 2024 amendments; the 2012 standards remain. Northern Cheyenne Tribe (downwind) supported the 2024 rule. Governor's 2023 letter: early retirement would cost consumers about $1.1 billion over 20 years. | [P] MTPR https://www.mtpr.org/montana-news/2026-02-20/epa-repeals-air-filtration-requirements-for-power-plants ; [P] Governor https://news.mt.gov/Governors-Office/Gov-Gianforte-Statement-on-EPA-Reversal-of-Biden-Era-Anti-Coal-Rule . Limit value 0.010 lb/MMBtu and effective date 27 Apr 2026: [S] |
| Colstrip ash ponds | DEQ ordered full excavation of the Units 1 and 2 ponds: 6.7 million cubic yards, 330-acre site, DEQ estimate more than $285 million; site-wide financial assurance $485 million; ponds leaking up to 43,000 gallons a day; plume up to one mile. Order dated November 2020 per search summary. | [P] KPAX https://www.kpax.com/news/montana-news/montana-regulators-order-cleanup-of-colstrip-ash-ponds (article undated: date [S]) |
| Rosebud Power Plant (Colstrip Energy LP, 10784) | Burns waste coal from the Colstrip plant; 2025 output 0.28 TWh from 243,277 tons of waste coal. | [P] leg.mt.gov report; [P-data] |
| Hardin (55749) | 2025 output 0.18 TWh; 149,285 tons of coal by truck from the Absaloka Mine. Powered a cryptocurrency operation; that contract was to expire end 2022. | [P-data]; [P] leg.mt.gov report |
| Yellowstone Energy LP (50931) | Billings; burns petroleum coke (263,678 tons in 2025); 0.46 TWh. | [P-data] |
| J.E. Corette | Billings, closed 2015 (dataset). | dataset |
| Lewis and Clark, Sidney (6089) | MDU shut the 44 MW coal unit in 2021; gas engines (19 MW, 2015) remain; 0.01 TWh in 2025. Eastern grid. | [P] leg.mt.gov; [P-data] |

### Coal mines
| Place | Facts | Tag / source |
|---|---|---|
| Montana total | 26.98 M short tons in 2024 from 4 mines (29.07 M in 2023); US 512.5 M; Wyoming 190.7 M | [P] EIA Annual Coal Report Table 1 |
| Spring Creek (NTEC) | 13.05 M tons in 2024, 5th largest US mine. 2025 deliveries to US power plants 5.29 M tons, all by rail: Michigan 2.21, Minnesota 1.32, Washington (Centralia) 0.99, Arizona (Coronado) 0.51, Nevada (North Valmy) 0.26. Interior approved a mining plan 13 Mar 2025: 39.9 M tons of federal coal, 16 more years, 280 jobs; customers also in Japan and South Korea. | [P] EIA Table 9; [P-data] EIA-923; [P] https://www.doi.gov/pressreleases/interior-advances-energy-independence-spring-creek-mine-expansion-approval |
| Bull Mountains (Signal Peak) | Underground; 7.07 M tons in 2024 (16th). Interior approved 6 Jun 2025: 22.8 M tons federal + 34.5 M non-federal, up to 9 more years, 250+ workers, exports to Japan and South Korea. No 2025 deliveries to US power plants in EIA-923. | [P] EIA Table 9; [P] https://www.doi.gov/pressreleases/interior-approves-bull-mountains-mining-plan-modification ; [P-data] |
| Rosebud (Westmoreland) | 5.98 M tons in 2024 (22nd); 5.74 M delivered to Colstrip in 2025 by conveyor. EIA names it "Rosebud Mine & Crusher/Conveyor". | [P] EIA Table 9; [P-data] |
| Absaloka (Westmoreland) | 149,285 tons to Hardin in 2025, by truck; not in EIA's 2024 major-mines list. | [P-data] |
| Decker | Stopped mining January 2021 after owner Lighthouse Resources filed for bankruptcy in December 2020; 76 laid off. | [P] AP via East Idaho News https://www.eastidahonews.com/?p=469030 |

### Hydro (2025 output, EIA-923 [P-data])
Libby 1.61 TWh (Army Corps; BPA area); Noxon Rapids 1.36 (Avista); Seli'š Ksanka Qlispe' 0.97 (Energy Keepers / CSKT); Fort Peck 0.76 (Army Corps; WAPA); Hungry Horse 0.63 (Reclamation; BPA); Yellowtail 0.57 (Reclamation; WAPA); Thompson Falls 0.44 (NWE); Ryan 0.38, Rainbow 0.30, Cochrane 0.22, Morony 0.22, Black Eagle 0.11 (the five Great Falls dams, 1.22 together [derived]); Canyon Ferry 0.27 (Reclamation); Holter 0.25; Hauser 0.13; Madison 0.08; Mystic 0.05. NWE hydro in total 2.16 TWh.
- NWE bought 11 dams (633 MW) and one storage reservoir from PPL Montana for $900 million, closed 18 Nov 2014; list: Thompson Falls, Kerr, Madison, Mystic Lake, Hauser, Holter, Black Eagle, Rainbow, Cochrane, Ryan, Morony. [P] https://www.power-eng.com/renewables/hydropower/northwestern-energy-finalizes-acquisition-of-ppl-montana-s-hydroelectric-facilities/
- Kerr: CSKT paid $18.2 million; handover 5 Sep 2015; "first tribes in the nation to own a major hydroelectric project"; 1985 licence made the tribes co-licensee with the right to take over after 30 years. [P] https://www.renewableenergyworld.com/?p=728921472 . Other reports say $18.3 million [S].
- Montana Power formed 1912; the 11 dams were built between the early 1900s and late 1950s; Noxon Rapids "nearly all of its power is exported". [P] leg.mt.gov report.
- From research/montana.md (water map, [P] there): Lake Koocanusa runs 42 miles into Canada, Libby built 1966-1973 under the Columbia River Treaty; Fort Peck 18.46 million acre-feet; Hungry Horse built 1952.

### Gas
- Dave Gates (Mill Creek, near Anaconda): 3 turbines, 2011, "provides regulation services for NorthWestern's balancing area"; 2025: 0.50 TWh, 5.38 Bcf; sellers BP, Koch, Mieco. [P] leg.mt.gov; [P-data]
- Yellowstone County Generating Station (Laurel): 175 MW, 18 reciprocating engines; began generating March 2024; 2025: 0.38 TWh, 3.10 Bcf. District judge Michael Moses revoked the air permit in 2023; Montana Supreme Court (ruling of January 2025, split 3-2-2) reinstated the permit and ordered DEQ to review greenhouse gases; "nearly 770,000 tons" of carbon a year expected; DEQ final supplemental assessment 1 Aug 2025; MEIC and Northern Plains Resource Council filed a new challenge 29 Sep 2025; outcome not found. [P] KPAX https://www.kpax.com/news/montana-news/montana-supreme-court-upholds-laurel-gas-plant-permit-orders-wider-review ; [P] Earthjustice https://earthjustice.org/press/2025/groups-challenge-montanas-second-rubberstamp-of-methane-gas-plant-near-laurel ; [P] leg.mt.gov; [P-data]
- Basin Creek (Butte): peaking plant under contract to NWE, 2025 0.17 TWh. Culbertson (Basin Electric, 2010, Eastern grid) 0.23 TWh. MDU peakers at Glendive, Miles City: "run infrequently". [P] leg.mt.gov; [P-data]
- OREG 1 and 2 (Ormat, Culbertson): energy source "waste heat" in EIA-923; 0.26 TWh together in 2025; Southwest Power Pool. [P-data]
- All Montana plants burned 12.56 Bcf of gas in 2025. [P-data]

### Wind and solar (2025 output [P-data])
Clearwater Wind I 1.33, East 0.83, II 0.40, III 0.38 = 2.94 TWh [derived]; Pryor Mountain 0.75; Rim Rock 0.53; Judith Gap 0.41; Glacier 1 and 2 0.41; Stillwater 0.25; South Peak 0.24; Beaver Creek 0.16 (partial year); Diamond Willow 0.09. Solar: Apex 0.17, MTSUN 0.15.
- Clearwater: NextEra, four phases, "over 750 MW", Custer, Garfield and Rosebud counties, nearly $1 billion, ribbon cutting 19 Sep 2024. [P] https://news.mt.gov/Governors-Office/Governor_Gianforte_Celebrates_Nearly_1_Billion_Energy_Investment_in_Montana . Buyers PSE (350 MW) and PGE (311 MW): [S]; EIA-923 puts Clearwater I in Puget's balancing area and lists PGE as operator of Clearwater East [P-data].
- Beaver Creek: PSE-owned, 248 MW, Stillwater County, fully operational 19 Aug 2025, uses "existing PSE transmission on the Colstrip Transmission System". [P] https://www.pse.com/en/press-release/details/Puget-Sound-Energys-Beaver-Creek-Wind-Farm-now-operational
- Judith Gap 135 MW, 2005, the state's first utility-scale wind farm, Invenergy, sells to NWE; Glacier 210 MW 2008-2009; Rim Rock 189 MW 2012; Pryor Mountain 240 MW 2021 (PacifiCorp); wind potential ranked second in the US by NREL. [P] leg.mt.gov Wind-Generation-2023.pdf
- Planned (dataset): Haymaker wind 630 MW (2031); Antelope Hills solar and battery 400 MW (2027); Jawbone wind 80 MW (2029); Beartooth storage 50 MW (2027).

### Grid
- Colstrip Transmission System: 500 kV, about 250 miles from Colstrip toward the west; NWE owns 31%. [P] https://northwesternenergy.com/clean-energy/where-does-your-energy-come-from/electric-transmission . Dataset (HIFLD): two 500 kV lines Colstrip-Broadview (NWE), two Broadview-Garrison and two Garrison-Taft (BPA), then Taft-Bell and Taft-Dworshak. "248 miles to just south of Townsend", capacities 2,260 and 1,930 MW: [S], not used.
- NWE: 6,596 miles of transmission in Montana; joined the Western Energy Imbalance Market June 2021. [P] same page
- Miles City Converter Station: back-to-back DC tie between the two grids, 1985, owned by WAPA and Basin Electric. [P] Niskanen Center https://www.niskanencenter.org/boosting-reliability-how-hvdc-back-to-backs-improve-power-sharing-between-grids/ (seven east-west ties listed; nine back-to-back stations nationally "about 2 GW"). 200 MW each way, WAPA 60% / Basin 40%, $30 million: [S] (the WAPA brochure page would not load).
- "Montana straddles the two major electric interconnections"; 1997 law SB 390; Montana Power sold most generating units to PPL Montana at the end of 1999 and the distribution utility to NorthWestern in February 2002; 32 distribution utilities then (2 investor-owned, 26 co-ops, 3 federal, 1 municipal). [P] 2004 state energy report (URL above)
- Deregulation context: 1997 industrial rate 3.66 cents/kWh, lowest in the country; short-term rates rose from about $22 to $200 or more per MWh in 2000-2001; rate freeze ended July 2002; NorthWestern bankruptcy 2003; Touch America collapsed. [P] Minneapolis Fed, Sept 2005 https://www.minneapolisfed.org/article/2005/lighting-up-big-sky-dereg-style
- North Plains Connector: 422 miles, 525 kV direct current, 3,000 MW both ways, Colstrip to two endpoints near Center and St. Anthony, North Dakota; Montana counties Rosebud, Custer, Fallon; final EIS 28 Aug 2026 (DOE and DEQ); DEQ certificate needed before construction; application received 18 Sep 2024. [P] https://www.energy.gov/oe/articles/energy-department-announces-major-milestone-north-plains-connector-bridging-eastern-and ; [P] https://deq.mt.gov/News/pressrelease-folder/NPC-Final-EIS . Cost about $6.0 billion, $700 million federal grant, developer Grid United: [S].
- Montana Alberta Tie Line: 230 kV, 345 km, 300 MW, Great Falls to Lethbridge, in service 2013, BHE. [P] https://bhe-canada.ca/?p=390
- Co-ops: 25 electric cooperatives serve more than 400,000 Montanans. [P] https://www.mtco-ops.com/

### Utilities (EIA-861, 2025 [P-data] unless noted)
| Utility | Sales TWh | Customers | Notes |
|---|---|---|---|
| NorthWestern Energy (MT) | 6.38 bundled + 2.69 delivered for other suppliers | 438,311 + 540 | Peak about 1,300 MW; "average daily peak" about 760 MW; owns about 1,065 MW and contracts for about 1,070 MW in Montana [P] Utility Dive 21 Oct 2025 https://www.utilitydive.com/news/northwestern-large-load-data-center-tariff-montana/803334/ |
| Flathead Electric Co-op | 1.61 | 77,288 | BPA balancing area |
| Montana-Dakota Utilities | 0.69 | 25,498 | Eastern grid (Southwest Power Pool code in EIA-861) |
| Mission Valley Power (federal, on the Flathead Reservation) | 0.40 | 23,250 | |
| Lower Yellowstone REA | 0.33 (0.24 industrial) | 5,253 | |
| Yellowstone Valley Electric Co-op | 0.31 | 23,683 | |
| Fergus Electric Co-op | 0.25 | 7,157 | |
| Missoula Electric Co-op | 0.25 | 16,711 | |
| Talen Energy Marketing (retail supplier) | 0.29 | 6 | |
| WAPA direct sales | 0.16 | 16 | |
- Merger: NorthWestern / Black Hills, $15.4 billion, new parent "Bright Horizon Energy", 2.1 million customers in eight states; PSC vote 3-2 on 10 Nov 2026. [P] Daily Montanan (URLs above and https://dailymontanan.com/2026/10/23/public-service-commission-to-take-up-northwestern-black-hills-merger/ )
- Large loads: NWE filed a Large New Load tariff 31 Mar 2026 (loads of 5 MW or more; projects over 50 MW need an approved service agreement; 15-year minimum, 75% minimum bill). 2026 resource plan filed 30 Apr 2026: scenarios of 150, 650 and 1,160 MW of data centers; letters of intent with three developers for 150 MW to over 1,000 MW; winter shortfall of about 23 MW in 2027-2028. Sabey (Butte) and Big Sky Digital Infrastructure, a Quantica platform (5,000-acre campus north of Billings). Sabey buying just over 600 acres west of Butte for $1.2 million; Atlas Power runs a data center south of Butte. [P] NWE https://northwesternenergy.com/in-your-community/economic-development/data-centers-and-montanas-energy-future ; [P] Parsons Behle https://parsonsbehle.com/insights/northwestern-energys-2026-irp-and-new-large-load-tariff-rule-attempt-to-establish-montanas-data-center-energy-permitting-framework ; [P] MTPR 18 Nov 2025 https://www.mtpr.org/montana-news/2025-11-18/data-center-power-needs-could-mean-higher-costs-for-northwestern-customers

### Users
- Refineries (crude capacity, 1 Jan 2026): CHS Laurel 62,500 barrels a day; Calumet Great Falls 15,000. [P] EIA Table 5. The two Billings refineries (Par Montana; Phillips 66 / Cenovus) are in the table but my text extraction could not pair them with their figures: not used.
- Columbia Falls Aluminum: smelter ran 1955 to 2009; Superfund; owner CFAC, parent Glencore; cleanup agreement announced 6 Jul 2026 ("$57 million" in the headline); contaminants cyanide, fluoride, arsenic, PAHs. [P] https://www.epa.gov/newsreleases/columbia-falls-aluminum-corporation-llc-agrees-57-million-cleanup-former-smelter-site . By July 2001 aluminum smelters across the Northwest had cut more than 2,500 MW of use, reselling their contracted power [P] 2004 state report.
- Sibanye-Stillwater: about 700 laid off in 2024 (about 40%); about 1,050 employees in early 2026; Stillwater Mine (Nye, 1986) put in care and maintenance; East Boulder near Big Timber; smelter at Columbus; preliminary 132.83% tariff on Russian palladium. [P] KXLF https://www.kxlf.com/news/montana-news/daines-tours-stillwater-mine-as-tariff-on-russian-palladium-boosts-outlook-on-industry
- Held v. Montana: Montana Supreme Court, 18 Dec 2024, 6-1, 16 youth plaintiffs; struck a 2023 law (HB 971) that barred greenhouse-gas analysis in state environmental reviews. [P] Grist https://grist.org/regulation/held-v-montana-youth-climate-lawsuit-supreme-court-decision/ ; [P] KPAX https://www.kpax.com/news/mt-supreme-court-upholds-held-v-montana-climate-case-ruling

---

## 3. Fuel supply chain
- Coal: Colstrip is a mine-mouth plant (Rosebud Mine, conveyor). Hardin trucks from Absaloka. No Montana power plant received coal by rail in 2025 [P-data]. Spring Creek ships by rail to five states and abroad; Bull Mountains exports.
- Petroleum coke: Yellowstone Energy in Billings; supplier not in EIA receipts. That it comes from the Billings refineries is [GK].
- Gas: 12.56 Bcf burned in 2025. Dave Gates and Laurel buy from BP, Koch and Mieco; MDU supplies its own plants. Pipelines in the dataset: NorthWestern Energy (intrastate, 415 segments from the Canadian border near Cut Bank to Billings); Northern Border (enters from Saskatchewan near 107.5 W and crosses to North Dakota); WBI Energy; Northern Natural; Bison and Grasslands in the south-east. Volumes and sources of gas on each: not researched (search limit).

## 4. Policy and current events (autumn 2026)
- 10 Nov 2026: PSC approves the NorthWestern / Black Hills merger 3-2. 28 Aug 2026: final EIS for the North Plains Connector. 20 Feb 2026: EPA repeals the 2024 MATS amendments. 1 Jan 2026: NWE becomes 55% owner of Colstrip. 31 Mar and 30 Apr 2026: large-load tariff and resource plan. 6 Jul 2026: CFAC cleanup agreement.
- Montana's renewable standard (repealed 2021): [GK], not used.

## 5. Tour ideas
Budget; Colstrip and its mine; the twin 500 kV lines west; coal that leaves by rail; the Great Falls dams and the 1997-2014 sale and buy-back; federal and tribal dams of the north-west; wind in the east and who buys it; two grids and the proposed DC line; who uses it (Billings, Butte data centers); CO2.

## 6. Least sure
- Mine marker positions (Rosebud, Spring Creek, Decker, Absaloka, Bull Mountains), the smelter, the Butte data center park and the North Plains Connector and MATL markers are placed from general knowledge of the area; the geocoder would not return them. Cards say "approximate".
- Whether the September 2025 challenge to the Laurel plant has been decided; whether DEQ has issued the North Plains Connector certificate; the Colstrip exemption's current status.
- Date of the Colstrip ash order (the article opened is undated).

---

## Used on the map: verification log

### [S] figures confirmed by opening the source
| Figure | What I opened |
|---|---|
| NWE owns 55% of Colstrip from 1 Jan 2026; 370 MW + 222 MW at no cost | NorthWestern's Colstrip page |
| EPA repeal of 2024 MATS amendments on 20 Feb 2026; April 2025 two-year exemption for Colstrip and nearly 50 plants | MTPR 20 Feb 2026; Governor's statement |
| Colstrip ash: 6.7 million cubic yards, $285 million, $485 million, 43,000 gallons a day | KPAX article |
| Laurel plant: 175 MW, March 2024, Supreme Court ruling, 770,000 tons; second challenge 29 Sep 2025 | KPAX; Earthjustice release |
| PSC merger vote 3-2 on 10 Nov 2026 and the Colstrip conditions | Daily Montanan |
| North Plains Connector: 422 miles, 525 kV, 3,000 MW, final EIS 28 Aug 2026, three Montana counties | DOE article; DEQ release |
| Spring Creek and Bull Mountains approvals (tons, years, jobs, Japan and South Korea) | Interior press releases |
| Montana coal 26.98 M tons; Spring Creek 13.05 M, Bull Mountains 7.07 M, Rosebud 5.98 M (2024) | EIA Annual Coal Report Tables 1 and 9 (PDF text) |
| Decker stopped January 2021 | AP via East Idaho News |
| NWE dams: $900 million, 11 dams, 633 MW, 18 Nov 2014 | Power Engineering |
| Kerr: $18.2 million, 5 Sep 2015, first tribes to own a major hydro project | Renewable Energy World |
| Held: 18 Dec 2024, 6-1, 16 plaintiffs, HB 971 | Grist; KPAX |
| MATL 230 kV, 300 MW, 2013 | BHE Canada |
| Beaver Creek 248 MW, 19 Aug 2025, PSE-owned, uses Colstrip lines | PSE press release |
| Clearwater: over 750 MW, four phases, NextEra, three counties | Governor's release |
| Large-load tariff and resource plan figures; NWE peak 1,300 MW | NWE page; Parsons Behle; Utility Dive |
| CFAC 1955-2009, July 2026 agreement | EPA release |
| Stillwater layoffs and workforce | KXLF |
| Miles City: 1985, WAPA and Basin Electric, east-west back-to-back tie | Niskanen Center |
| Deregulation dates (1997 law; end-1999 sale to PPL; Feb 2002 sale to NorthWestern) | 2004 state energy report (PDF text) |
| 25 co-ops, more than 400,000 Montanans | Montana Electric Cooperatives' Association home page |
| CHS Laurel 62,500 and Calumet 15,000 barrels a day | EIA Table 5 (PDF text) |

### Dropped (not used; could not confirm)
- Miles City tie rating (200 MW each way), ownership split and cost: only in a search summary.
- Colstrip Transmission System segment ratings and "248 miles to Townsend"; names of the co-owners of the line.
- North Plains Connector cost ($6.0 billion), federal grant ($700 million) and developer name.
- MATS particulate limit value and the repeal's effective date.
- Fort Peck's units being split between the two grids (Wikipedia only, uncited there).
- Kerr price of $18.3 million (the opened article says $18.2 million; the map uses $18.2 million).
- Clearwater offtake MW by buyer; turbine counts.
- Capacities of the two Billings refineries; refinery electricity use.
- REC Silicon at Butte; Atlas Power megawatts (75 MW seen only in a summary); Montana Resources mine; any megawatt figure for the Columbia Falls smelter; Stillwater's electricity use.
- Montana renewable standard and its 2021 repeal; NWE rate-case outcomes; NWE day-ahead market choice.
- History of the Great Falls dams and the copper industry (Anaconda, John D. Ryan): no source opened.
- Coal export route (railroad and port names): no source opened; cards say only that Interior lists customers in Japan and South Korea.
- Date of the ash-pond order (November 2020 in a summary): the card gives no date.
- Yellowstone County plant cost.

### Added 14 Nov 2026: named lines
build/raw/power/lines_mt.json arrived and Montana was re-baked. Lines of 345 kV and above now come from OpenStreetMap with names: Broadview - Colstrip #1 and #2 (operator NorthWestern Energy); Garrison - Broadview #1 and #2 (NorthWestern Energy; one doubled segment tagged Bonneville); Taft - Garrison No. 1 and No. 2, Taft - Hot Springs, Taft-Bell, Dworshak - Taft (Bonneville); Selkirk - Cranbrook (BC Hydro, in British Columbia); Judson - Tande and Judson - Patent Gate (345 kV, Basin Electric, North Dakota). LINECARDS cover all of these. The earlier federal file listed Bonneville as owner of Broadview - Garrison; OpenStreetMap lists NorthWestern as operator. Cards therefore say only that the lines west of Garrison are Bonneville's.
