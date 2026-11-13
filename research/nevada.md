# Nevada water: research fact sheet (supply, demand, places, law, GIS)

Compiled 2026-11-12 for the Nevada chapter of the western-water map. Style follows `colorado.md`.

**Conventions**
- AF = acre-feet; MAF = million AF; AFY = AF per year; cfs = cubic feet per second; GPCD = gallons per person per day; SNWA = Southern Nevada Water Authority; NDWR = Nevada Division of Water Resources (the State Engineer's office); TMWA = Truckee Meadows Water Authority; TCID = Truckee-Carson Irrigation District; TROA = Truckee River Operating Agreement; CRS = Congressional Research Service.
- Evidence tags: **[P]** = I opened the document itself and read the number (PDFs were downloaded and read as text). **[S]** = number reached me only through a search-engine summary; re-open before publishing. **[derived]** = my arithmetic. **unverified** = could not confirm at a credible source this session.
- Coordinates are approximate centroids checked against the baked lake outlines, OpenStreetMap or the NDWR basin layer (section 8); see the verification log.
- 2026 context: winter 2025-26 set record-low 1 April snowpack readings across Nevada and most of the West. Storage and flow readings for 2026 are that year's readings, not typical values.

---

## 1. Statewide budget

Nevada's own statewide plan (Nevada State Water Plan, Division of Water Planning) dates from March 1999 and uses 1995 data: 4,041,000 AF withdrawn in 1995 (agriculture 3,120,000 = 77%; public supply 525,000 = 13%; mining 274,000 = 7%; other 122,000 = 3%), "approximately one-half of these withdrawals are consumptively used". [P] https://water.nv.gov/uploads/library-docs/SWP_Executive_Summary.pdf
NDWR today publishes groundwater pumpage inventories only (latest: 2021 statewide pumpage report, file dated 28 Oct 2025; the PDF returned 404/empty to curl and WebFetch on 12 Nov 2026, so its figures are [S] only: irrigation 69% of pumpage in 2017, municipal 10%, mining and milling 8%). No current state figure covers surface water. **Therefore the map budget uses USGS 2015**, the same dataset as the overview card.

### 1a/1b. USGS 2015 withdrawals, Nevada (fresh water)

County sums of `usco2015v2.0.csv` (USGS data release https://doi.org/10.5066/F7TB15V5; report https://pubs.usgs.gov/circ/1441/circ1441.pdf), summed by me [P for the file, derived for the sums]; 1 Mgal/d = 1,120.9 AF/yr.

| Item | Mgal/d | MAF/yr | Share |
|---|---|---|---|
| Total fresh withdrawals | 2,882.0 | 3.230 | 100% |
| Surface water | 1,520.5 | 1.704 | 52.8% |
| Groundwater | 1,361.5 | 1.526 | 47.2% |
| Irrigation (crops 2,036.3 + golf 29.8) | 2,066.1 | 2.316 | 71.7% |
| Public supply | 531.2 | 0.595 | 18.4% (73% of it surface water) |
| Mining | 195.5 | 0.219 | 6.8% (96% of it groundwater) |
| Self-supplied domestic | 35.8 | 0.040 | 1.2% |
| Aquaculture | 34.0 | 0.038 | 1.2% |
| Thermoelectric | 8.7 | 0.010 | 0.3% |
| Self-supplied industrial | 5.7 | 0.006 | 0.2% |
| Livestock | 4.9 | 0.006 | 0.2% |
| Irrigated acres | 697,600 acres (365,000 sprinkler, 332,400 surface) | | |
| Population 2015 (USGS) | 2.89 million | | |

Measure: **withdrawals**, not consumptive use. Southern Nevada's Colorado River accounting is in consumptive use (diversion minus return flow) and must not be mixed into this chart.

### 1c. Colorado River slice (consumptive use)

| Item | Value | Year | Tag | Source |
|---|---|---|---|---|
| Nevada apportionment | 300,000 AFY consumptive use (Boulder Canyon Project Act 1928; 0.3 of 7.5 MAF) | | [P] | SNWA 2026 Water Resource Plan https://www.snwa.com/assets/pdf/water-resource-plan-2026.pdf ; CRS R45546 (1 Oct 2026) |
| Definition | "Consumptive use is water diversions minus any Colorado River water returned to the Colorado River. These returns are also called return-flow credits." | | [P] | SNWA 2026 plan, ch. 3 |
| Southern Nevada consumptive use | 212,000 AF "by the end of 2024" | 2024 | [P] | SNWA 2026 plan |
| Same, 2025 | 198,000 AF | 2025 | [P] | Nevada Independent (Aug 2026) https://thenevadaindependent.com/article/nevada-sues-interior-over-cuts-to-already-meager-colorado-river-water-allocation |
| Same, 2023 | about 187,000 AF | 2023 | [S] | SNWA 2025 plan (now 404) |
| Share of supply | Colorado River 90%, Las Vegas Valley groundwater 10% | | [P] | https://www.snwa.com/water-resources/where-water-comes-from/ |
| People served | more than 2.3 million residents | 2026 | [P] | SNWA 2026 plan |
| Indoor / outdoor | about 45% of water delivered becomes treated wastewater; about 99% of that is recycled (mostly returned to Lake Mead via the Las Vegas Wash); about 55% is consumed, mainly landscape irrigation and cooling | 2024 | [P] | SNWA 2026 plan, fig. 3.1 |
| Per-person use | fell 55% between 2002 and 2024 while population served rose by about 829,000 (about 55%); goal 86 GPCD by 2035 | | [P] | SNWA 2026 plan, fig. 3.4 |
| Metered use by sector 2024 | single-family homes 42.1%, apartments 16.5%, commercial/industrial 16.0%, resorts 6.6%, schools/government/parks 6.5%, common areas 5.7%, golf courses 5.2%, other 1.3% | 2024 | [P] | SNWA 2026 plan, fig. 3.3 |
| Banked water | more than 2.2 MAF stored through 2024, "eleven times Nevada's 2024 consumptive Colorado River water use" (Southern Nevada bank 342,000 AF; California bank 330,225 AF; Arizona bank about 614,000 AF; rest in Lake Mead) | 2024 | [P] | SNWA 2026 plan |
| Intake No. 3 / Low Lake Level Pumping Station | intake in service 2015; pumping station completed 2020, operated for 2022 and part of 2023; can pump down to lake elevation 875 ft, about 20 ft below the lowest level at which Hoover Dam can release water (intakes 1 and 2 stop at 1,050 and 1,000 ft) | | [P] | SNWA 2026 plan, ch. 2 |
| Turf law | AB356 (2021) bars Colorado River water on "non-functional turf" at non-single-family properties "by the end of 2026" | | [P] | SNWA 2026 plan |
| Other rules | new residential pools limited to 600 sq ft surface (2022); golf course water budgets cut from 6.3 to 4.0 AF per irrigated acre (effective Jan 2024); no Colorado River water for new golf courses (2021-22); no new grass in new development; evaporative cooling barred in new buildings; AB220 (2023) lets SNWA cap a single-family home at about 163,000 gallons a year if Nevada's allocation is cut to 270,000 AF or less | | [P] | SNWA 2026 plan |
| Septic | about 14,500 septic systems in the greater Las Vegas Valley; water sent to them cannot be recovered; pilot conversion grants since 2023 | | [P] | SNWA 2026 plan |
| Lake Mead | 1,039.66 ft, 6,954,000 AF, 27% full | 8 Nov 2026 | [P] | Reclamation weekly update https://www.usbr.gov/lc/region/g4000/weekly.pdf |
| 2027-28 cut | Lower Basin 1.25 MAF/yr: Arizona 760,000, California 440,000, Nevada 50,000 AF | Aug 2026 | [P] | CRS R45546; Interior release 21 Aug 2026 |
| Worst case | Nevada's 300,000 AF could be cut by up to 213,556 AF if Lower Basin shortages reach 3.6 MAF | | [P] | Nevada Independent, Aug 2026 |
| Lawsuit | Nevada v. Burgum, No. 2:26-cv-02665 (D. Nev., filed 24 Aug 2026), by the State, the Colorado River Commission of Nevada and SNWA; asks the court to set aside the Record of Decision; first state to sue | | [P] | CRS R45546 footnote 156; Nevada Independent |


---

## 2. Facts gathered by topic (all opened this session unless tagged otherwise)

### 2a. Snow, climate, 2026 conditions
| Item | Value | Date | Tag | Source |
|---|---|---|---|---|
| Statewide precipitation | "Average annual precipitation state-wide may be 10.3 inches"; 7.1 in. in southern Nevada, 12.85 in. in the northeast; "one of the driest states" | 1901-2000 | [P] | https://www.unr.edu/nevada-climate-office/about-our-climate |
| "Driest state" | "Nevada is the most arid state in the nation" | 2019 | [P] | Legislative Counsel Bureau, Water Policy and Issues in Nevada (Dec 2019) https://www.leg.state.nv.us/Division/Research/Documents/water-overview-2019.pdf |
| 2026 snowpack | "Statewide SWE, averaged across 66 SNOTEL stations, was 2.6 inches, 13% of the median peak SWE and the lowest on record. SWE peaked in late February, over one month early." Basins ranged from 1% (Humboldt) to 38% (Walker) of median. Nevada among eight states with record-low 1 April readings since the 1980s. Meltout 34 to 61 days early. | status update dated 9 Apr 2026 | [P] | https://www.drought.gov/drought-status-updates/snow-drought-current-conditions-and-impacts-west-2026-04-09 |
| Conflicting figure | KSL table: Nevada 10.2 in., 52% of median on 1 April | Apr 2026 | [P] but not used (different date/measure; conflicts with drought.gov) | https://www.ksl.com/article/51482910/ |
| Truckee basin | snow water equivalent "hit its second-lowest level since 1986 this year"; Truckee Meadows/Tahoe in moderate drought | 2026 | [P] | Nevada Independent, Reno purified-water plant story (2026) |
| Lake Tahoe now | gage height 6.44 ft at Tahoe City on 12 Nov 2026. Gage datum 6,220 ft, so about 6,226.4 ft: 3.4 ft above the natural rim (6,223.0), 2.7 ft below the legal maximum (6,229.1) | 12 Nov 2026 | [P] reading; datum from the USGS site page [derived elevation] | https://waterdata.usgs.gov/monitoring-location/10337000/ ; rim and maximum: TMWA Water Resource Plan At a Glance |
| Lahontan Reservoir now | 57,870 AF on 12 Nov 2026 (20% of 289,721 AF) [derived %]; 211,823 AF on 10 Mar 2026; TCID set a 100% allocation on 10 Mar 2026 | 2026 | [P] | https://waterdata.usgs.gov/monitoring-location/10312100/ ; https://thefallonpost.org/article/8958,tcid-sets-100-water-season-water-orders-begin-march-16 |
| Walker Lake now | elevation 3,914.07 ft; storage 1,128,000 AF | 12 Nov 2026 | [P] | https://waterdata.usgs.gov/monitoring-location/10288500/ |
| Pyramid Lake now | elevation 3,801.30 ft | 2 Nov 2026 | [P] | https://waterdata.usgs.gov/monitoring-location/10336500/ |
| Topaz Lake now | 16,440 AF | 12 Nov 2026 | [P] | https://waterdata.usgs.gov/monitoring-location/10297000/ |
| Stampede / Boca now | 138,600 AF / 8,738 AF | 12 Nov 2026 | [P] | USGS 10344300, 10344490 |
| Lake Mead now | 1,039.66 ft; 6.954 MAF; 27% full; projected 1,034.52 ft at end of 2026 | 8 Nov 2026 | [P] | Reclamation weekly update |

### 2b. Colorado River and Southern Nevada (beyond section 1c)
- Hoover Dam: 726.4 ft high; concrete finished 29 May 1935; powerplant nameplate about 2,080 MW; about 4 billion kWh a year; Nevada's share of the power 23.3706% [P] https://www.usbr.gov/lc/hooverdam/faqs/damfaqs.html , https://www.usbr.gov/lc/hooverdam/faqs/powerfaq.html . Lake Mead holds 28,945,000 AF at elevation 1,221.4 ft [P] https://www.usbr.gov/lc/hooverdam/faqs/lakefaqs.html . (SNWA's page says Nevada gets "one-third" of Hoover electricity; conflicts with Reclamation's 23.37%, so neither share is used.)
- Lake Mead bank: about 890,000 AF of Nevada water banked in Lake Mead at end of 2025; "most of the water can't be taken out once Lake Mead drops below 1,000 feet"; Mead at 1,037 ft on 18 Oct 2026; Reclamation's October dry-case projection has Mead below 1,000 ft in March 2028; 400,000 AF of the balance came from paying for Brock Reservoir; other banks: 614,000 AF in Arizona, 342,000 AF under the Las Vegas Valley, 330,000 AF in California; Water Smart Landscapes ("Cash for Grass") began 1999 [P] Nevada Independent (Oct/Nov 2026) https://thenevadaindependent.com/article/nevada-has-lots-of-water-in-a-lake-mead-bank-what-happens-if-water-levels-keep-dropping
- Arizona intervened in Nevada's lawsuit (announced on a Friday in autumn 2026); "Nevada, the Colorado River Commission of Nevada and the Southern Nevada Water Authority filed suit Aug. 24"; cut of up to 213,556 AF "or about 71 percent"; the three Lower Basin states proposed the 760/440/50 split in May 2026 [P] https://thenevadaindependent.com/article/drawing-a-line-in-the-sand-arizona-joins-nevadas-lawsuit-over-colorado-river-cuts
- SNWA has spent more than $300 million on conservation since 2002 [P] Nevada Independent https://thenevadaindependent.com/article/nevadas-expected-to-lose-a-quarter-of-its-colorado-river-water-what-happens-next/
- Excess-use charge: since Jan 2023 the Las Vegas Valley Water District charges $9 per 1,000 gallons above a seasonal threshold [P] Nevada Independent water index page (2026).
- Data centers: more than 70 operating or planned in Nevada; about 0.5% of Southern Nevada water use, against more than 5% for golf courses and 7% for casinos; SNWA barred evaporative cooling for new ones [P] https://thenevadaindependent.com/article/how-much-water-and-power-do-data-centers-really-use . Google's Henderson data center "consumed more than 630 acre-feet in 2024"; projections for the 2033 build-out: 5,021 to 37,343 AF a year for cooling statewide; data centers asked NV Energy for 3,820 MW at the Tahoe-Reno Industrial Center [P] Desert Research Institute, Data Center Water and Electricity Consumption in Nevada (Jan 2026) https://www.dri.edu/wp-content/uploads/Data-Center-Report-Final-2.pdf
- Virgin River: SNWA was permitted 113,000 AFY of Virgin River rights in 1994, transferred 5,000 AFY to the Virgin Valley Water District, and suspended development under the 2007 seven-state agreement [P] SNWA 2026 plan.
- Lower White River Flow System: Order 1309 (2020) treats seven basins as one and found only 8,000 AFY can be pumped; pump test 2010-12 at about 8,050 AFY lowered water levels across 1,100 sq mi; Moapa dace listed 1967; Nevada Supreme Court upheld the State Engineer's authority (Sullivan v. Lincoln County Water District, 25 Jan 2024); Coyote Springs planned 150,000 homes on 56,000 acres; SNWA holds about 15,000 AF of Muddy River surface rights [P] Las Vegas Sun, 15 Feb 2024 https://www.lasvegassun.com/news/2024/feb/15/nevada-water-law-ruling-backs-state-engineers-powe/ ; ruling date [S].
- Eastern Nevada pipeline: applications filed by the Las Vegas Valley Water District in 1989; 250-mile pipeline; opponents' cost estimate $15 billion; District Judge Robert Estes's 9 March 2020 ruling became final when SNWA said in April 2020 it would not appeal [P] Las Vegas Sun, 17 Apr 2020 https://lasvegassun.com/news/2020/apr/17/las-vegas-giving-up-bid-to-pump-pipe-water-from-ru/ ; "In 2020, the SNWA withdrew the remaining applications" [P] SNWA 2026 plan. Board vote 21 May 2020 and $330 million spent: [S] only, not used. Basin perennial yields (NDWR layer): Spring Valley 84,000; Snake Valley 25,000; Cave Valley 5,600; Dry Lake Valley 15,000; Delamar Valley 6,100 AFY [P].

### 2c. Truckee, Carson, Walker
- Newlands Project (Reclamation): authorized 14 Mar 1903; Derby Diversion Dam built 1905, "the first construction project of the Bureau of Reclamation", 31 ft high, diversion capacity 1,500 cfs; Truckee Canal completed Nov 1906; Lahontan Dam completed 1915, 162 ft high, 289,721 AF at spillway level (312,984 AF with flashboards), "the only major reservoir on the Carson River"; Carson Division about 55,000 acres, Truckee Division about 5,000 acres; Lake Tahoe Dam built 1913, 744,600 AF of storage; 68.5 miles of main canals; fish screen at Derby Dam built 2019-2020 [P] https://www.usbr.gov/mp/lbao/programs/newlands-project.html ; https://www.usbr.gov/projects/index.php?id=368 ; Derby Dam fact sheet https://www.usbr.gov/mp/mpr-news/docs/factsheets/Derby%20Dam.pdf
- TROA: took effect December 2015 "after 26 years"; Orr Ditch Decree 1944 fixed rights at about 226,000 AF a year; TMWA serves about 475,000 people; groundwater 15-20% of supply from 86 wells; TMWA uses about 4% of the river in a normal year, 8% in drought; about 82,000 AF of decreed rights converted to TMWA; customers' consumptive use fell from 143 gallons a day (2003) to 104 (2024); Tahoe rim 6,223.0 ft, maximum 6,229.1 ft; top 6.1 ft of the lake is storage [P] TMWA https://tmwa.com/?p=10782 , https://tmwa.com/wp-content/uploads/2025/10/TMWA-WRP-AtAGlance.pdf , https://tmwa.com/?p=29962 (the last is an older, wet-year page; only the 6.1 ft and 744,600 AF facts are used).
- Truckee-Carson-Pyramid Lake Water Rights Settlement Act (Public Law 101-618, 16 Nov 1990): Fallon Paiute Shoshone settlement fund $43,000,000; Pyramid Lake Paiute Fisheries Fund $25,000,000 and Economic Development Fund $40,000,000; Lake Tahoe basin allocation 23,000 AFY to California and 11,000 AFY to Nevada; California's Truckee basin allocation 32,000 AFY [P] https://www.govinfo.gov/content/pkg/STATUTE-104/pdf/STATUTE-104-Pg3289.pdf
- Reno reuse: Advanced Purified Water Facility broke ground 2026; about 2 million gallons a day, about 2,000 AFY, recharged near Stead; done fall 2029; $128 million in state revolving fund financing; Nevada's first [P] https://thenevadaindependent.com/article/reno-breaks-ground-on-nevadas-first-wastewater-to-drinking-water-plant
- TRIC pipeline: 16 miles, $32 million, 4,000 AFY of treated effluent from Sparks to the Tahoe-Reno Industrial Center; 2,000 AF reservoir; "expects the full system to be operational by early 2023" [P] Engineering News-Record, 2022 https://www.enr.com/articles/53987-pipeline-will-bring-water-to-reno-industrial-park . Completion not confirmed at a later source.
- Stillwater: wetlands "had shrunk to less than 10,000 acres"; since 1989 close to 30,000 AF of water rights bought in close to fifty transactions; "25,000 acres of wetlands"; more than a quarter million waterfowl [P] https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/stillwater-and-carson-lake-wetlands/ . Reclamation: water from about 6,000 acres of project land transferred to the wetlands [P] usbr.gov project page.
- Walker: lake level down "nearly 160 feet" since 1882; TDS from 2,500 to 28,000 mg/L (USGS science page); "more than 150 feet and storage loss of 7,400,000 acre-feet" 1882-2008 (USGS SIR 2009-5157 abstract) [P] https://www.usgs.gov/centers/nevada-water-science-center/science/hydrology-walker-river-basin ; last Lahontan cutthroat caught 2009; TDS about 24,000 mg/L recently; conservancy goal at least 50,000 AFY to the lake; more than 43,000 irrigated acres in the basin by 2017; first acquired water reached the lake 2019 [P] Nevada Independent, 2023 https://thenevadaindependent.com/article/walker-lake-is-on-the-brink-of-collapse-is-this-the-year-it-starts-rebounding ; Walker Basin Conservancy "has acquired 59% of the water needed to restore Walker Lake's fishery"; target long-term TDS 12,000 mg/L [P] https://www.walkerbasin.org/water

### 2d. Humboldt, mines, lithium, groundwater law
- Rye Patch: built 1935-36; total capacity 213,000 AF (fact sheet; the LBAO page says "can store 190,000 acre-feet"); about 30,000 irrigated acres near Lovelock; operated by the Pershing County Water Conservation District [P] https://www.usbr.gov/mp/mpr-news/docs/factsheets/rye-patch.pdf ; https://www.usbr.gov/mp/lbao/programs/humboldt-project.html . USGS gauge 10334500 gives elevation only (4,096.43 ft on 12 Nov 2026), no storage; no 2026 allocation found: left off the map.
- Humboldt conjunctive management: 34 groundwater basins intersect the river; a 2015 court case over senior river rights; Interim Order 1329 (Dec 2021) upheld Oct 2024; NDWR released the Middle Humboldt capture model on 18 June 2026 (Bulletin 51 / USGS Professional Paper 1906), completing upper, middle and lower basin models; a draft curtailment order is planned [P] NDWR release https://water.nv.gov/uploads/happening-now-docs/Middle_Humboldt_Model_Released.pdf ; NDWR update of 10 June 2025 https://water.nv.gov/uploads/humboldt-docs/6-10-2025_Humboldt_Update.pdf ; Nevada Independent 2018. Pershing County WCD v. Cacioppo (Nev. Sup. Ct., 30 Apr 2026): exists, holding not opened: not used.
- Carlin Trend: mine pumping "ranged from about 5,000 acre-feet in 1989 to almost 130,000 acre-feet in 1994 and 1998"; water levels down more than 1,600 ft at the Betze Mine since 1990 [P] USGS SIR 2005-5075 abstract https://pubs.usgs.gov/publication/sir20055075 . 2017 mining pumpage: Boulder Flat 14,568 AF, Maggie Creek Area 19,585 AF [P] NDWR 2017 inventory.
- Pit lakes: totals reached me only as [S] (about 35 pit lakes; 1.42 MAF): not used.
- Thacker Pass: about 200 AFY during construction through 2027; phase one needs about 2,600 AFY; settlement with rancher Edward Bartell 31 July 2025; phase one completion expected late 2027 [P] https://thenevadaindependent.com/article/settlement-reached-in-messy-thacker-pass-water-dispute . Quinn River Valley perennial yield 60,000 AFY; 2017 pumpage in the Orovada Subarea 52,918 AF [P] NDWR.
- Silver Peak: Clayton Valley mining and milling pumpage 8,387 AF in 2017; perennial yield 20,000 AFY [P] NDWR.
- NDWR 2017 inventory [P] https://water.nv.gov/uploads/water-use-inventories-docs/Nevada_Groundwater_Pumpage_2017.pdf : statewide pumpage 1,207,946 AF (irrigation 834,087 = 69%; municipal 126,372 = 10%; mining and milling 91,664 = 8%; domestic wells about 4%); committed groundwater rights 3,036,240 AF (Sept 2017). Basin totals: Diamond Valley 74,069; Kings River Valley 46,620; Paradise Valley 43,826; Pahrump Valley 16,416; Amargosa Desert 16,920; Las Vegas Valley 73,010; Mason Valley 30,414; Smith Valley 14,284; Humboldt County 281,526.
- Basins: 256 hydrographic areas, of which 146 carry a designation status (139 designated, 7 partly) [P, counted from the NDWR layer]; "50% are fully or over-committed; and 25% are over-committed by more than two times the perennial yield"; Office of the State Engineer created 1903; domestic wells exempt from permits, up to 2 AFY; proof of pre-statutory claims due by 31 Dec 2027 [P] Legislative Counsel Bureau overview, Dec 2019. "84 are out of balance" (Nevada Independent, 2018) [P], older and superseded by the LCB shares.
- Diamond Valley: 26,000 irrigated acres; rights issued for about 126,000 AFY against 30,000 AFY available; water table down an average of 2 ft a year; critical management area 2015, the only one; plan approved by users 2018 [P] KUNC / Mountain West News Bureau, 21 Sep 2022 https://www.kunc.org/regional-news/2022-09-21/a-plan-to-share-the-pain-of-water-scarcity-divides-farmers-in-this-rural-nevada-community ; Supreme Court 4-3, plan phases cuts over 35 years [P] Nevada Independent, June 2022; ruling date 16 June 2022 [S].
- Pahrump: Order 1293A (July 2018) requires 2 AF of rights to be given up for each new domestic well; upheld by the Nevada Supreme Court 25 Feb 2021 [S]; about 11,500 domestic wells; Ponderosa Dairy and its alfalfa about 15,000 AFY [P] Amargosa Conservancy https://www.amargosaconservancy.org/a-new-era-of-nevada-groundwater-management-has-begun-heres-what-it-could-mean-for-the-amargosa-river/ . Perennial yield 20,000 AFY [P] NDWR.
- Devils Hole: 137 pupfish on 10 Oct 2026; 77 in spring 2026; 69 in fall 2025; 72 captive-raised fish released Mar 2025-Feb 2026 [P] NPS release, 3 Nov 2026 https://www.nps.gov/deva/learn/news/rare-devils-hole-pupfish-count-more-than-doubles-since-fall-2025.htm ; Cappaert v. United States (1976) "recognized a water right for Devils Hole"; water level began to fall in the late 1960s; listed 1967; mapped to nearly 450 ft deep [P] https://www.fws.gov/story/inside-devils-hole-mysterious-depths-endangered-fish-and-unwavering-partnership
- Duck Valley: settlement authorized 2009, signed 2015, $60 million; reservation 294,000 acres split between Idaho and Nevada; East Fork Owyhee River [P] https://www.doi.gov/news/pressreleases/secretary-jewell-signs-historic-water-rights-agreement-with-shoshone-paiute-tribes-and-state-of-nevada . 111,476 AFY [S]: not used.
- Geothermal: Nevada produced 25% of US geothermal electricity in 2024, second to California [S, EIA state profile]: confirm before use.

---

## 3. Places on the map (coordinates and checks)

Coordinates were checked against a second source: OpenStreetMap (Nominatim/Overpass lookups on 12 Nov 2026), the baked lake outlines, the NDWR basin polygons or the Census tribal polygons. "km" is the distance between my marker and the OpenStreetMap point.

| id | Place | lon, lat | Check |
|---|---|---|---|
| snow | Ruby Mountains (snow marker) | -115.47, 40.62 | OSM Ruby Mountains 7 km |
| sink | Humboldt Sink | -118.60, 39.98 | OSM 2 km |
| law | Carson City (State Engineer) | -119.767, 39.164 | OSM 0 km |
| humboldt | Humboldt River at Battle Mountain | -116.93, 40.64 | OSM 2 km |
| mead | Lake Mead (marker in the Virgin Basin so its label clears Las Vegas) | -114.40, 36.08 | inside the baked lake outline; Hoover Dam itself is at -114.7378, 36.0156 |
| cut | Colorado River below Hoover Dam | -114.70, 35.80 | on the river line; Willow Beach 9 km |
| intake | Saddle Island / SNWA intakes | -114.805, 36.068 | OSM Saddle Island -114.799, 36.068; Alfred Merritt Smith plant -114.813, 36.070 |
| lasvegas | Las Vegas (marker north of downtown) | -115.20, 36.24 | inside Las Vegas Valley basin; downtown is -115.14, 36.17 |
| wash | Las Vegas Wash (Wetlands Park) | -114.99, 36.095 | OSM 1 km; on the NHD line |
| turf | Summerlin | -115.33, 36.19 | OSM 2 km |
| bank | North-east Las Vegas Valley | -115.02, 36.27 | inside Las Vegas Valley basin (schematic) |
| datacenters | Henderson | -115.03, 36.03 | OSM 4 km (schematic; not a specific building) |
| virgin | Mesquite | -114.07, 36.80 | OSM 0 km |
| lwrfs | Coyote Springs | -114.93, 36.80 | OSM 0 km; inside the NDWR flow-system boundary |
| pipeline | Spring Valley (basin 184) | -114.45, 39.20 | inside NDWR basin 184 |
| pahrump | Pahrump | -115.98, 36.21 | OSM 4 km |
| devilshole | Devils Hole | -116.291, 36.425 | OSM 0 km |
| amargosa | Amargosa Valley | -116.44, 36.57 | OSM 2 km |
| tahoe | Lake Tahoe | -120.03, 39.09 | inside lake outline |
| reno | Reno | -119.81, 39.53 | OSM 0 km |
| renoreuse | Stead | -119.88, 39.66 | OSM 0 km |
| tric | Tahoe-Reno Industrial Center | -119.49, 39.515 | OSM 5 km (park is large) |
| derby | Derby Dam | -119.447, 39.586 | OSM 0 km |
| pyramid | Pyramid Lake | -119.55, 40.05 | inside lake outline |
| pyramidtribe | Nixon | -119.36, 39.83 | OSM 0 km; inside Census polygon |
| lahontan | Lahontan Reservoir | -119.122, 39.363 | inside OSM lake outline |
| fallon | Fallon | -118.78, 39.47 | OSM 1 km |
| stillwater | Stillwater refuge | -118.50, 39.56 | OSM 7 km (refuge centroid) |
| fallontribe | Fallon Paiute-Shoshone Reservation | -118.62, 39.51 | OSM 0 km; inside Census polygon |
| walkerlake | Walker Lake | -118.71, 38.70 | inside lake outline |
| walkerfarms | Mason Valley, south of Yerington | -119.17, 38.93 | OSM Yerington 6 km; inside Mason Valley basin |
| walkertribe | Schurz | -118.81, 38.95 | OSM 4 km; inside Census polygon |
| topaz | Topaz Lake | -119.53, 38.69 | inside lake outline |
| ryepatch | Rye Patch Reservoir | -118.257, 40.694 | inside Natural Earth outline (the dam is at the south end, about -118.31, 40.47) |
| lovelock | Lovelock | -118.47, 40.16 | OSM 2 km |
| carlin | Goldstrike (Betze-Post) pit area | -116.36, 40.98 | inside NDWR Boulder Flat basin. Nominatim returns a "Meikle/Goldstrike Mine" point 33 km away in Elko County; not used |
| orovada | fields south of Orovada | -117.78, 41.52 | OSM Orovada 6 km; inside Quinn River Valley (Orovada Subarea) |
| thacker | Thacker Pass | -118.05, 41.71 | OSM 3 km |
| silverpeak | Clayton Valley ponds, east of Silver Peak | -117.60, 37.77 | OSM town 4 km; inside Clayton Valley basin |
| diamond | Diamond Valley fields | -115.97, 39.70 | inside NDWR basin 153 |
| duckvalley | Duck Valley Reservation | -116.10, 41.95 | OSM Owyhee 8 km; inside Census polygon |
| geothermal | Dixie Valley geothermal plant | -117.855, 39.967 | OSM "Dixie Valley Geothermal Facility" -117.856, 39.967 |

## 4. Law, compacts, tribes (summary for the cards)
- Prior appropriation and beneficial use; State Engineer (office created 1903) inside the Division of Water Resources; surface water and groundwater in separate statute chapters but, since 2017, a legislative declaration that all waters are managed conjunctively [P] LCB overview.
- Groundwater: 256 hydrographic areas in 14 hydrographic regions; perennial yield as the planning limit; "designated" basins (146 in whole or part) where the State Engineer has added powers; one critical management area (Diamond Valley, 2015); Order 1309 superbasin (2020, upheld Jan 2024).
- Colorado River: Boulder Canyon Project Act 1928 / Arizona v. California: 300,000 AFY; 2007 Interim Guidelines and 2019 Drought Contingency Plan (up to 30,000 AFY of reductions through 2026); Record of Decision 21 Aug 2026; Nevada v. Burgum.
- Truckee/Carson/Tahoe: Orr Ditch Decree (1944), Public Law 101-618 (1990), Truckee River Operating Agreement (effective Dec 2015).
- Walker: federal decree (1936; date [S] only, not shown on the map); Walker Basin Restoration Program (2005 law).
- Tribes on the map: Pyramid Lake Paiute (PL 101-618 funds; TROA party), Fallon Paiute-Shoshone ($43M fund, PL 101-618), Walker River Paiute (river crosses the reservation), Shoshone-Paiute of Duck Valley (2009 act, 2015 signing, $60M), Moapa Band of Paiutes (reservation centroid lies inside the NDWR flow-system boundary [derived from GIS]). Other reservation polygons get a generic card.

## 5. GIS sources (all tested 12 Nov 2026)
- NDWR ArcGIS server https://arcgis.water.nv.gov/arcgis/rest/services/NDWR : `Basins_State_Engineer_Admin_Boundaries/MapServer/0` (256 polygons; fields BasinID, BasinName, SubAreaName, DesignationStatus, PerennialYield, AreaSquareMiles, HydroRegionName), `Basins_State_Engineer_Hydrographic_Regions/MapServer/0` (14), `LWRFS_Boundary/MapServer/0`, `TCID_Infrastructure/MapServer/0` (Newlands canals with CommonName; Truckee Canal 50.1 km). All return GeoJSON with `f=geojson`.
- USGS National Hydrography Dataset: https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6 (`gnis_name='East Walker River'` etc.; slow, about a minute per query).
- OpenStreetMap Overpass: lake outlines and named canals. OSM river names were incomplete for the East and West Walker, so NHD is used for rivers.
- USGS water services (current lake readings): https://waterservices.usgs.gov/nwis/iv/?format=json&sites=10337000,10336500,10288500,10312100,10334500,10344490,10297000,10344300
- Not found as public geometry: SNWA intakes/tunnels/pipelines; the TRIC reclaimed-water pipeline; Marlette Lake water system. Not drawn.

## 6. Tour (as built)
1 The driest state. 2 A little snow, in a few places. 3 One reservoir for 2.3 million people. 4 Water that is used twice (Las Vegas Wash). 5 So the rules are about grass. 6 A river split in two (Derby Dam, Truckee Canal). 7 A lake at the end of a river (Walker Lake). 8 Pumping more than twice the supply (Diamond Valley). 9 Mines, wells and one long river (Carlin Trend, Humboldt). 10 What happens next (the cut and the lawsuit).

## 7. Least sure
- Lake Tahoe elevation is derived: USGS gage height 6.44 ft plus the gage datum of 6,220 ft (Bureau of Reclamation datum), compared with the 6,223.0 ft rim. The datum is from memory of the USGS station description and the search summary of that page ("natural rim 6,223 feet ... maximum 6,229.1 feet (BOR datum)"), not from a page I opened in full.
- Lahontan "20% full" divides a USGS storage reading by Reclamation's spillway-level capacity; the two may use slightly different capacity tables.
- "146 designated basins" counts hydrographic areas and sub-areas with any designation status in the NDWR layer, including 7 partly designated.
- Perennial-yield figures come straight from the NDWR layer. Some are shared between adjacent basins or sub-areas (for example the Quinn River Valley's 60,000 AFY covers both sub-areas; the 8,000 AFY on each Lower White River basin is the system total). Cards say so in general terms.
- 2017 is the newest pumpage inventory I could open; the 2021 report exists but the file returned 404.
- The eastern Nevada pipeline valley names (Spring, Snake, Cave, Dry Lake, Delamar) reached me from the task brief and search-result titles of NDWR hearing files; the opened sources say only "valleys in White Pine and Lincoln counties". The card names Spring Valley only.
- The five TROA signatories are listed from a search summary; TMWA's page says "five signatory parties" without listing them in the text I read.
- Silver Peak: that the Clayton Valley mining pumpage is lithium brine is general knowledge, not stated in the NDWR table.
- Whether the TRIC reclaimed-water pipeline is in service: the newest source opened is from 2022 and says "expected". The card says so.
- Thacker Pass and Diamond Valley ruling details were read through a page summary tool, not as raw text.
- Las Vegas share of state population ("more than two-thirds") divides SNWA's "more than 2.3 million residents" by the Census 2025 state estimate.

## 8. Used on the map: verification log

**[S] figures confirmed by opening the source**
- Nevada v. Burgum, 24 Aug 2026, No. 2:26-cv-02665: CRS R45546 text (footnote 156) and two Nevada Independent articles.
- 50,000 AF cut; 760,000 / 440,000 split: CRS text.
- 198,000 AF used in 2025; 213,556 AF maximum cut (71%): Nevada Independent (two articles).
- Groundwater pumpage shares (69% irrigation, 10% municipal, 8% mining): opened the 2017 NDWR report (text extracted), used 2017 instead of the unavailable 2021 report.
- 256 basins: LCB overview and the NDWR layer (256 features).
- Diamond Valley: 30,000 AFY (NDWR layer and KUNC), 126,000 AFY of rights, 2 ft a year, 2015 designation (KUNC), 4-3 vote and 35 years (Nevada Independent).
- Lahontan 211,823 AF and 100% allocation: Fallon Post article.
- Walker Lake 59%: walkerbasin.org/water. "Nearly 160 feet": USGS science page.
- Devils Hole 137 / 77 / 69: NPS release.
- Rye Patch 213,000 AF: Reclamation fact sheet.
- Lower White River 8,000 AFY, 1,100 sq mi, 150,000 homes, January 2024 ruling: Las Vegas Sun.
- TRIC pipeline 16 miles, 4,000 AFY: Engineering News-Record.
- Geothermal: second to California, about 9%, 27 plants, 827 MW: Nevada Independent (Apr 2024).
- Alfalfa 285,000 acres in 2022, "Nevada's Number One Crop": Nevada Farm Bureau Federation presentation (PDF text).
- Fallon $43M; Pyramid Lake $25M and $40M; Tahoe 23,000 / 11,000 AFY: statute text.
- Duck Valley $60M, 294,000 acres: Interior release.
- Thacker Pass 2,600 AFY, 200 AFY, 31 Jul 2025 settlement: Nevada Independent.
- Newlands figures (1903, 1905, 1,500 cfs, 289,721 AF, 55,000 acres, 68.5 miles): Reclamation pages and fact sheet.

**[S] figures dropped (not confirmed, so not on the map)**
- NDWR 2021 pumpage figures (file 404). SNWA 2023 use of 187,000 AF (2025 plan now 404). Colorado River Commission Jan-Sep 2025 diversions and return-flow credits (404).
- SNWA board vote of 21 May 2020, $330 million spent, 300 miles, 58 billion gallons (pipeline). The card uses the Las Vegas Sun's 250 miles and 1989, and SNWA's own "withdrew the remaining applications" in 2020.
- Goldstrike 1.1 MAF pumped since 1991; Gold Quarry 50,000 AFY; pit-lake counts and volumes.
- Stillwater 75,000 AF target; Walker Lake 181 ft and 90% of volume; Pyramid Lake 3,796 ft (1980).
- Lake Tahoe "1.5 feet below the rim in February 2026" and TMWA "72% storage, 38,000 AF of drought reserves" (conflicting or unopened).
- Thacker Pass 2,800 AF total; Quinn River Valley "over-appropriated" in a 2024 assessment.
- Pahrump Order 1293A dated July 2018 and the Feb 2021 Supreme Court ruling (the card uses "December 2017" from the Nevada Independent and does not mention the ruling).
- Duck Valley 111,476 AFY; Walker River Paiute storage-right litigation; Walker River decree year 1936.
- KSL "52% of median" for 1 April 2026 (conflicts with Drought.gov's 13% of median peak; Drought.gov used, with its date).
- EIA "25% of US geothermal generation"; Pershing County WCD v. Cacioppo (30 Apr 2026) holding; Humboldt Order 1329 month; exact ruling dates 25 Jan 2024 and 16 Jun 2022 (cards give month and year only).
- Hoover Dam power share: SNWA "one-third" vs Reclamation 23.37% conflict; neither shown.
- Topaz Lake and Rye Patch 2026 storage as a share of capacity (no verified usable capacity for Topaz; Rye Patch gauge reports level only).
- "Lake Mead set a record low in 2026" (from the overview's KUNC citation, which I did not open): removed from the card.

**Current readings**: all 2026 readings on the map were opened by me on 12 Nov 2026: Reclamation weekly update of 8 Nov (Lake Mead), USGS gauges of 12 Nov (Tahoe, Lahontan, Walker, Topaz) and 2 Nov (Pyramid), NPS release of 3 Nov, Drought.gov update of 9 Apr.
