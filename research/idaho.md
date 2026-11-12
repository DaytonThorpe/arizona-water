# Idaho water: research fact sheet (supply, demand, places, law, GIS)

Compiled 2026-11-12 for the Idaho chapter of the western-water map. Style follows `colorado.md`.

**Conventions**
- AF = acre-feet; KAF = thousand AF; MAF = million AF; cfs = cubic feet per second; ESPA = Eastern Snake Plain Aquifer; IDWR = Idaho Department of Water Resources; IWRB = Idaho Water Resource Board; SWC = Surface Water Coalition; USBR = Bureau of Reclamation.
- Evidence tags: **[P]** = I opened the document or data service itself and read the number. **[S]** = number reached me only through a search-engine summary; re-open before publishing. **[derived]** = my arithmetic. **unverified** = could not confirm this session.
- 2026 context: NRCS called 1 April 2026 very likely the lowest April 1 snowpack since measurements began in the 1930s. Storage and flow readings from 2026 are that year's readings, not typical values.

The closing verification log (section 9) is the authority for what is on the map.

## 1. Statewide budget

Idaho's water agency does not publish a single statewide use budget that I could find, so the map uses USGS 2015 (county data file `usco2015`, summed over Idaho's 44 counties) [P]: https://www.sciencebase.gov/catalog/item/5af3311be4b0da30c1b245d8

Measure: fresh water **withdrawn** (taken out of rivers, springs and wells), not water consumed.

| Item | Mgal/d | MAF/yr [derived, x 1120.147] | Share |
|---|---|---|---|
| Total fresh withdrawals | 17,737.2 | 19.87 | 100% |
| Surface water | 12,384.2 | 13.87 | 69.8% |
| Groundwater | 5,353.0 | 6.00 | 30.2% |
| Irrigation | 15,292.9 | 17.13 | 86.2% |
| Aquaculture (fish farms) | 1,965.0 | 2.20 | 11.1% |
| Public supply | 275.8 | 0.31 | 1.6% |
| Self-supplied domestic | 70.1 | 0.079 | 0.4% |
| Self-supplied industrial | 57.6 | 0.065 | 0.3% |
| Livestock | 50.8 | 0.057 | 0.3% |
| Mining | 23.1 | 0.026 | 0.1% |
| Thermoelectric | 1.8 | 0.002 | 0.0% |

- Irrigation: 5.49 MAF groundwater + 11.64 MAF surface. Irrigated land 3,788,800 acres (2,566,800 sprinkler, 1,218,900 surface/flood, 3,100 micro). USGS consumptive-use estimate for irrigation: 8,917.8 Mgal/d = 9.99 MAF/yr (do not mix with withdrawals).
- Aquaculture: 1,918.8 of 1,965.0 Mgal/d is surface water (springs). By county: Gooding 675.1, Twin Falls 653.7, Jerome 193.7 Mgal/d (the Thousand Springs reach), then Clearwater 128.0 and Nez Perce 110.5 (fish hatcheries). The water runs through raceways and back to the river; almost none is consumed.
- Population in the file (2015): 1,654,900. Census 2025 estimate 2,029,733 (research/west_overview.md).

## 2. Current conditions, 2026 (primary readings)

Reclamation Hydromet daily storage (`https://www.usbr.gov/pn-bin/daily.pl?station=XXX&format=csv&...&pcode=af`), pulled 12 Nov 2026 [P]. Capacities are the active capacities shown on the Hydromet teacup pages; system totals 4,045,695 AF (Upper Snake), 949,700 AF (Boise), 800,452 AF (Payette) read on the pages [P] https://www.usbr.gov/pn/hydromet/burtea.html , https://www.usbr.gov/pn/hydromet/boipaytea.html . Individual capacities are from memory of the same teacups and sum exactly to the page totals; confirm on a Reclamation page before quoting individually.

| Reservoir (station) | Capacity AF | 1 Oct 2025 | 2026 peak | 2026 low | 30 Sep 2026 | 11 Nov 2026 |
|---|---|---|---|---|---|---|
| American Falls (AMF) | 1,672,590 | 49,794 (3.0%) | 1,388,495 on 6 Apr (83.0%) | 55,906 on 13 Sep (3.3%) | 90,032 (5.4%) | 340,668 (20.4%) |
| Palisades (PAL) | 1,200,000 | 91,283 (7.6%) | 735,119 on 8 Apr (61.3%) | 95,990 on 15 Oct (8.0%) | 129,608 (10.8%) | 165,873 (13.8%) |
| Jackson Lake (JCK) | 847,000 | 544,758 (64.3%) | 819,497 on 19 May (96.8%) | 63,942 on 30 Sep (7.5%) | 63,942 (7.5%) | 83,008 (9.8%) |
| Lake Walcott / Minidoka (MIN) | 95,200 | 73,492 | 93,781 on 21 May | 11,888 on 10 Oct (12.5%) | 18,327 | 19,333 (20.3%) |
| Island Park (ISL) | 135,205 | 45,554 | 131,653 on 17 May (97.4%) | 16,630 on 19 Sep (12.3%) | 20,361 | 42,241 (31.2%) |
| Ririe (RIR) | 80,500 | 48,141 | 60,452 | 23,000 on 14 Oct | 23,634 | 24,968 (31.0%) |
| Grassy Lake (GRS) | 15,200 | 9,628 | 14,977 | 6,628 | 6,797 | 7,206 |
| **Upper Snake system** | 4,045,695 | 862,650 (21.3%) | 3,079,616 on 14 Apr (76.1%) | 322,902 on 8 Oct (8.0%) | 352,701 (8.7%) | 683,297 (16.9%); a year earlier 29.7% |
| Anderson Ranch (AND) | 413,100 | 241,941 | 413,739 on 15 May (100%) | | 234,624 (56.8%) | 227,789 (55.1%) |
| Arrowrock (ARK) | 272,200 | 77,367 | 269,314 on 18 Apr (98.9%) | 49,909 on 13 Aug (18.3%) | 70,273 | 100,616 (37.0%) |
| Lucky Peak (LUC) | 264,400 | 55,318 | | 41,066 on 26 Sep | 43,397 | 44,296 (16.8%) |
| **Boise system** | 949,700 | 374,626 (39.4%) | 929,349 on 17 May (97.9%) | 346,456 on 8 Oct (36.5%) | 348,294 (36.7%) | 372,701 (39.2%); a year earlier 41.6% |
| Cascade (CSC) | 646,460 | 363,982 | 631,030 on 30 May (97.6%) | 357,738 on 4 Oct | 359,686 (55.6%) | 361,249 (55.9%) |
| Deadwood (DED) | 153,992 | 72,995 | 152,158 on 29 May | 68,751 | 72,134 | 76,253 (49.5%) |
| **Payette system** | 800,452 | 436,977 | 783,158 on 30 May (97.8%) | 430,228 on 4 Oct (53.7%) | 431,820 | 437,502 (54.7%) |
| Dworshak (DWR) | 3,468,000 total | 2,205,160 | 3,470,120 on 8 Jun (full) | | 2,228,450 | 2,154,480 (62.1%) |
| Owyhee, Oregon (OWY) | | 368,565 | 467,110 | 83,258 on 9 Oct | 93,266 | 96,051 |

Other 2026 primary items:
- NRCS Idaho Water Supply Outlook Report, 1 Apr 2026 [P] https://nrcs-prod.azureedge.us/sites/default/files/2026-04/borid426.pdf : "Idaho's snowpack peaked nearly three weeks early on March 17 at 68% of normal"; "By April 1, 25% of the snowpack had already melted away statewide"; "very likely ... the lowest recorded snowpack on April 1 since NRCS began measurements in the early 1930s"; Boise River basin "currently at 44% of normal"; Mores Creek Summit 7 inches of snow water, 21% of normal, previous record low 10 inches in 1977.
- IDWR news release 26 Aug 2026 [P] (URL in section 6): ESPA volume "had no change from 2024-2025, and this year, it had a net reduction of 600,000 acre-feet", from 329 monitoring wells measured before the 2026 irrigation season; modelled combined net storage gain from recharge and pumping cuts 2.8 MAF; "53% of the Board's recharge flows still being retained".
- IDWR Surface Water Coalition delivery call page [P] https://idwr.idaho.gov/?p=63015 : April 2026 predicted shortfall 181,600 AF; curtailment order 14 May 2026 for rights junior to 11 Oct 1900 not covered by a mitigation plan; July order raised the predicted shortfall to 741,100 AF (order text [P], Twin Falls Canal Co. share 289,400 AF); 2025 for comparison: 63,000 AF (April) and 75,300 AF (July). Background on the same page: SWC formed 2005, about 550,000 acres; groundwater districts irrigate almost 1,000,000 acres.
- East Idaho News, 28 May 2026 [P via WebFetch]: 924 groundwater rights, 736 users; area of common groundwater supply "about 16 counties across 10,800 square miles"; groundwater users must conserve at least 205,000 AF a year under the 2024 agreement; drought emergency declared April 2026 for all 44 counties.
- Reclamation, Anderson Ranch Dam Raise fact sheet, April 2026 [P]: six-foot raise, about 29,000 AF of new space, cost estimate $149M, construction anticipated to start 2027; 10% of space federal, 90% non-federal through IWRB.
- Boise State Public Radio, 26 Aug 2026 [P]: ESPA "sole drinking water source for more than 400,000 people between Hagerman and St. Anthony"; storage built up from about 1 MAF to more than 18 MAF by the early 1950s (the article's wording for cumulative storage change).

## 3. Law, settlements, tribes (opened documents)

| Item | Value | Tag | Source |
|---|---|---|---|
| Doctrine | "Idaho is a prior-appropriation state ... senior-priority water rights receive their water first"; juniors can be curtailed on a delivery call | [P] | IDWR FAQ, 3 Jun 2024: https://idwr.idaho.gov/wp-content/uploads/sites/2/faq/20240603-FAQ-on-the-Directors-curtailment-order-for-general-public.pdf |
| 2015 settlement / 2016 plan | groundwater reductions of 240,000 AF/yr "or 13% across the region" | [P] | same FAQ |
| 2024 curtailment order | 30 May 2024; six groundwater districts; rights junior to 31 Mar 1954; about 6,400 groundwater rights; injury volume 74,100 AF | [P] | https://idwr.idaho.gov/wp-content/uploads/sites/2/news-release/20240530-IDWR-Director-issues-curtailment-order-for-6-groundwater-districts-FINAL.pdf |
| "500,000 acres" for the 2024 order | news figure only | [S] not used | Idaho Capital Sun, Capital Press |
| 2024 Stipulated Mitigation Plan | term 1 Jan 2024 to 31 Dec 2027, renews automatically; districts conserve 205,000 AF annually (total divertible volume 1,590,034 AF); safe harbor from the delivery call | [P] | IDWR final order, 3 Jan 2025: https://idwr.idaho.gov/wp-content/uploads/sites/2/legal/CM-MP-2024-003/CM-MP-2024-003-20250103-Final-Order-Approving-Stipulated-Mitigation-Plan.pdf |
| Storage water under the 2024 plan (up to 75,000 AF) | | [S] not used | AgProud |
| 2026 delivery call | April shortfall 181,600 AF; order 14 May 2026, juniors to 11 Oct 1900; July shortfall 741,100 AF (Twin Falls Canal Co. 289,400 AF); 2025 carryover shortfall 86,756 AF unfilled | [P] | https://idwr.idaho.gov/?p=63015 and the 21 Jul 2026 order |
| Swan Falls | 1984 agreement; minimum flow at the Murphy gage 3,900 cfs (1 Apr to 31 Oct) and 5,600 cfs (1 Nov to 31 Mar) | [P] | https://idwr.idaho.gov/settlements/swan-falls-settlement/ |
| Swan Falls 2026 | flow has never fallen below 3,900 cfs since 1984; early June 2026 IDWR gave notice to more than 4,000 trust water users; flow 4,610 cfs on 9 Jul 2026; governor asked the board to secure 5,900 AF of storage | [P] | https://idwr.idaho.gov/wp-content/uploads/2026/07/News-Release-20260709-Gov-Little-recommends-proactive-steps-to-avoid-curtailment-for-Swan-Falls-trust-water-users.pdf |
| Snake River Basin Adjudication | began 1987; Final Unified Decree signed 25 Aug 2014 | [P] | https://idwr.idaho.gov/water-rights/adjudication/srba/ |
| Domestic exemption | homes, stock and up to half an acre of irrigation, not more than 13,000 gallons a day | [P] | https://idwr.idaho.gov/water-rights/domestic-exemption/ |
| Milner | zero minimum flow at Milner Dam in the State Water Plan | [S] summary of IDWR filings; the river going dry below Milner "at some point every year since at least 1907", at least 25 miles, is [P] | https://www.boisestatepublicradio.org/environment/2013-06-17/why-the-snake-river-in-idaho-runs-dry-for-miles |
| Milner Dam history | gates closed 1 Mar 1905; "today provides irrigation water to more than 500,000 acres" | [P] | https://twinfallscanal.com/?p=19 |
| Nez Perce agreement (2004) | 50,000 AF/yr multiple-use right, mainly Clearwater sources; 200,000 AF in Dworshak for fish flows; $50M trust fund; $23M water and sewer; BLM land worth $7M; minimum flows held by the IWRB | [P] | https://idwr.idaho.gov/wp-content/uploads/sites/2/iwrb/2004/20040515-Nez-Perce-Agreement-Summary.pdf |
| Fort Hall agreement (1990) | "a firm water supply from surface and groundwater totaling 581,031 acre-feet per year"; five years of negotiation; first Indian water settlement in Idaho | [P] | https://www.bia.gov/as-ia/opa/online-press-release/interior-secretary-lujan-approves-historic-agreement-settle-indian |
| Coeur d'Alene Tribe settlement | announced 5 Mar 2026; north Idaho adjudication began 2008; tribe protects existing state rights dated Sept 2023 and earlier plus 10,000 AF/yr of future rights; goes to the Legislature and Congress | [P] | https://gov.idaho.gov/pressrelease/coeur-dalene-tribe-state-of-idaho-announce-historic-water-rights-settlement/ ; https://www.spokanepublicradio.org/2026-03-06/coeur-dalene-tribe-state-of-idaho-reach-water-rights-settlement-agreement |
| Lakebed ownership (2001), 2019 ruling, Avista payments | | [S] not used | |

## 4. Other opened sources

- IWRB recharge: "Over the past 10 years, the Board's program has recharged on average 251,000 acre-feet per year"; goal 250,000 (news release 22 Jan 2025) [P] https://idwr.idaho.gov/wp-content/uploads/sites/2/news-release/IWRB-hears-updates-on-ESPA-recharge-and-cloud-seeding-FINAL.pdf . Legislature directed a 350,000 AF goal on a 15-year rolling average [P] https://idwr.idaho.gov/wp-content/uploads/sites/2/iwrb/Aquifer%20Stabilization/350k-State-Water-Plan-and-ESPA-CAMP-Proposed-Changes.pdf .
- IWRB Aquifer Stabilization Committee materials, 26 Aug 2026 [P] https://idwr.idaho.gov/wp-content/uploads/2026/08/Final-Materials-Aquifer-Stabilization-Cmte.-No.-4-26_w-1.pdf : aquifer lost about 600,000 AF from 2025 to 2026 and about 100,000 AF since 2015; board recharge by calendar year (KAF) 2015: 68, 2016: 77, 2017: 420, 2018: 352, 2019: 337, 2020: 451, 2021: 135, 2022: 157, 2023: 177, 2024: 426, 2025: 133, 2026 through March: 52, total 2,821; modelled storage gain 1.5 MAF from board recharge, 2.8 MAF from all activities.
- Twin Falls Canal Co. 2026: deliveries cut to 1/2 inch per acre before June, after a cut from 3/4 to 5/8 inch before the season; more than half of Twin Falls homes water lawns from the canal system (KIVI, May 2026) [P] https://www.kivitv.com/twin-falls/twin-falls-faces-second-water-delivery-cut-amid-historic-drought-conditions . Coalition statement: 33.3% reduction; reservoirs about 2.47 MAF vs 3.6 MAF a year earlier; SWC about 550,000 acres (Coeur d'Alene Press reprint, 15 Jun 2026) [P] https://cdapress.com/news/2026/jun/15/low-water-supply-means-severe-shortfalls-for-irrigation-season/ . North Side / AFRD2 20%, Minidoka 15%, Milner 12%: [S] not used.
- Big Lost / Little Lost: curtailment took effect 21 Nov 2025, lifted 17 Apr 2026; users joined the 2024 plan (accepted 1 May 2026) (East Idaho News 28 May 2026) [P].
- Reclamation project pages [P]: American Falls Dam completed 1927, replaced 1978, 1,672,590 AF https://www.usbr.gov/projects/index.php?id=24 ; Minidoka Project authorised 23 Apr 1904, five reservoirs, more than 3 MAF active https://www.usbr.gov/projects/index.php?id=361 ; Minidoka Dam completed 1907, powerplant 1909-10 https://www.usbr.gov/projects/index.php?id=565 ; Palisades built 1951-57, supplemental water for about 650,000 acres, 176,600 kW https://www.usbr.gov/projects/index.php?id=382 ; Teton Dam failed 5 Jun 1976, 11 lives, one million cfs https://www.usbr.gov/pn/snakeriver/dams/uppersnake/teton/index.html .
- Idaho Power [P]: 17 hydro projects; Hells Canyon Complex (Brownlee, Oxbow, Hells Canyon) about 70% of its hydro generation and 30% of total energy in a normal year https://www.idahopower.com/energy-environment/energy/energy-sources/hydroelectric/ ; cloud seeding since 2003, Payette snowpack up about 12% on average https://www.idahopower.com/energy-environment/energy/energy-sources/hydroelectric/cloud-seeding/ . IWRB cloud seeding page: 32 remote generators and 2 aircraft in the central mountains, water year 2024 [P] https://idwr.idaho.gov/iwrb/programs/cloud-seeding-program/
- Lower Snake dams: CRS report R49059 (Jul/Aug 2026) [P via WebFetch] https://www.everycrsreport.com/reports/R49059.html : Ice Harbor 1962, Lower Monumental 1969, Little Goose 1970, Lower Granite 1975; more than 3,000 MW; barge transport to Lewiston since 1975; sockeye listed endangered 1991, mean abundance 2010-2019 about 46; MOU withdrawn 12 Jun 2025; preliminary injunction 2 Mar 2026, appealed; replacement cost estimates $10 to $31 billion; only Congress can authorise breaching.
- Sockeye: 1,106 counted at Lower Granite in 2025 (Columbia Basin Bulletin headline, 5 Dec 2025) [P headline only]; "Only 11 sockeye have been counted at Lower Granite Dam to date" through 30 Jun 2026 (Oregon/Washington joint staff fact sheet, 1 Jul 2026) [P] https://www.dfw.state.or.us/fish/OSCRP/CRM/FS/26/07-01-26%20Summer%20Fact%20Sheet%20No.%202.pdf . No final 2026 count found.
- Rathdrum Prairie: Spokane Valley-Rathdrum Prairie aquifer covers about 370 sq mi, "sole source of drinking water for more than 500,000 residents", mean annual inflow and outflow about 1,470 cfs (USGS SIR 2007-5041 summary page) [P] https://www.usgs.gov/publications/hydrogeologic-framework-and-ground-water-budget-spokane-valley-rathdrum-prairie
- Agriculture: Idaho State Dept. of Agriculture, 2025 Idaho Ag Statistics (2023 national rankings) [P] https://agri.idaho.gov/wp-content/uploads/marketing/Publications&Resources/2025-Idaho-Ag-Statistics_Final.pdf : potatoes rank 1, 32.6% of US; barley 1, 32.5%; alfalfa hay 1, 9.0%; sugarbeets 2, 19.8%; trout 1, 36.9%; milk 3, 7.4%; 663,000 dairy cows; harvested acres 2023: potatoes 329,500, hay 1,390,000, sugarbeets 174,000, barley 540,000.
- Aquaculture: first commercial trout farm 1909; about 98% of production in Twin Falls, Gooding and Jerome counties; around 80 fish farms (University of Idaho Extension) [P] https://www.uidaho.edu/extension/county/twin-falls/aquaculture
- City of Boise adopted a Drought Emergency Ordinance (news release July 2026) [P] https://www.cityofboise.org/news/public-works/2026/july/city-of-boise-adopts-drought-ordinance/ . Veolia "70% from wells": [S] not used; the map uses USGS 2015 Ada County public supply instead (72.71 Mgal/d, of which 59.17 groundwater = 81%).
- NWS Boise drought statement, 1 Oct 2026 [P] https://www.weather.gov/media/boi/DGT/DGT_BOI_10012026.pdf : exceptional drought (D4) in southern Owyhee and southern Twin Falls counties; extreme (D3) across Twin Falls, Jerome and Gooding counties.
- Henry's Fork Foundation FAQ, Sept 2026 [P] https://henrysfork.org/?p=13559 : natural flow lowest in the modern record; inflow above Island Park since 1 April 42% below the 1934-2025 average, second lowest in 94 years.
- Wikipedia (opened, secondary; used only for non-critical description): Dworshak Dam 717 ft, 3,468,000 AF total (Hydromet peak of 3,470,120 AF agrees); Brownlee 1959, Oxbow 1961, Hells Canyon 1967, no fish passage; Lake Pend Oreille 1,152 ft deep, fifth deepest in the US; Salmon River 425 miles, undammed; New York Canal 41 miles, opened 22 Feb 1909, ends at Lake Lowell; Bear Lake: Bear River water enters by canal and is pumped out at Lifton, historic low 5,902 ft in 1936.

## 5. Places (candidates; coordinates lon, lat)

Reservoir and lake markers use the centroid of the lake outline (Natural Earth or the National Hydrography Dataset served by IDWR), which is the second source for those coordinates. Dam and town coordinates are from general geographic knowledge and were checked against the rendered map (marker on its lake, river or built-up area).

| # | Place | Lon, lat | Hard numbers | Tag | On map |
|---|---|---|---|---|---|
| 1 | Mountain snowpack (marker in the central mountains) | -115.0, 45.1 | peak 17 Mar 2026 at 68% of normal; 25% melted by 1 Apr; Mores Creek Summit 21% | [P] NRCS | yes |
| 2 | Milner Dam | -114.018, 42.524 | 1905; 500,000+ acres; dry at some point every year since 1907 | [P] | yes |
| 3 | Thousand Springs | -114.845, 42.747 | aquaculture 2.20 MAF/yr; spring flows expected to decline in 2026 | [P] | yes |
| 4 | Swan Falls Dam | -116.378, 43.243 | 3,900 / 5,600 cfs; 4,000+ users noticed; 4,610 cfs on 9 Jul 2026 | [P] | yes |
| 5 | Hells Canyon Complex (marker on Hells Canyon Reservoir) | -116.76, 45.13 | 70% of Idaho Power hydro; 17 projects; 1959-67 | [P] / Wikipedia for dates | yes |
| 6 | Lower Granite Dam, WA | -117.428, 46.66 | 3,000+ MW; 1962-75; $10-31B; injunction 2 Mar 2026 | [P] CRS | yes |
| 7 | Redfish Lake | -114.931, 44.12 | listed 1991; about 46 natural fish/yr 2010-19; 1,106 in 2025; 11 by 30 Jun 2026 | [P] | yes |
| 8 | Blackfoot (2026 curtailment marker) | -112.345, 43.19 | 924 rights; 11 Oct 1900; 181,600 then 741,100 AF | [P] | yes |
| 9 | Teton Dam site | -111.539, 43.909 | 5 Jun 1976; 11 deaths; 1M cfs | [P] | yes |
| 10 | American Falls Reservoir | -112.74, 42.925 | 1,672,590 AF; 3.3% low; 20.4% on 11 Nov 2026 | [P] | yes |
| 11 | Palisades Reservoir | -111.136, 43.296 | 1.2 MAF; 8.0% low; 650,000 acres supplemental | [P] | yes |
| 12 | Jackson Lake, WY | -110.735, 43.9 | 847,000 AF; 7.5% on 30 Sep 2026 | [P] | yes |
| 13 | Lake Walcott / Minidoka Dam | -113.398, 42.679 | 95,200 AF; 1907; 12.5% low | [P] | yes |
| 14 | Island Park Reservoir | -111.485, 44.408 | 135,205 AF; 12.3% low; inflow 42% below average | [P] | yes |
| 15 | Anderson Ranch Reservoir | -115.356, 43.41 | 413,100 AF; raise 6 ft, 29,000 AF, $149M | [P] | yes |
| 16 | Lucky Peak / Arrowrock | -115.995, 43.573 | Boise system 949,700 AF; 97.9% peak; 39.2% on 11 Nov | [P] | yes |
| 17 | Lake Cascade | -116.098, 44.629 | 646,460 AF; Payette system 54.7% on 11 Nov | [P] | yes |
| 18 | Lake Lowell | -116.667, 43.554 | end of the 41-mile New York Canal | Wikipedia | yes |
| 19 | Dworshak Reservoir | -116.2, 46.6 | 3.468 MAF; full 8 Jun 2026; 200,000 AF for fish | [P] / Wikipedia | yes |
| 20 | Bear Lake | -111.335, 42.1 | record low 5,902 ft (1936) | Wikipedia | yes |
| 21 | Lake Coeur d'Alene | -116.795, 47.542 | settlement 5 Mar 2026; 10,000 AF/yr | [P] | yes |
| 22 | Lake Pend Oreille | -116.42, 48.162 | 1,152 ft deep | Wikipedia | yes |
| 23 | Twin Falls Canal Co. (marker on the main canal) | -114.3, 42.487 | 1/2 inch per acre; 33.3%; 289,400 AF | [P] | yes |
| 24 | New York Canal | -116.36, 43.487 | 41 miles; 22 Feb 1909 | Wikipedia | yes |
| 25 | Aquifer recharge (marker on the Milner-Gooding Canal) | -114.2, 42.76 | 251,000 AF/yr average; 2.82 MAF since 2015; 350,000 goal | [P] | yes |
| 26 | Boise | -116.203, 43.615 | Ada County public supply 81% groundwater (2015) | [P] | yes |
| 27 | Twin Falls | -114.461, 42.563 | over half of homes on canal irrigation | [P] | yes |
| 28 | Idaho Falls | -112.034, 43.492 | Bonneville County public supply 100% groundwater | [P] | yes |
| 29 | Coeur d'Alene | -116.78, 47.678 | Kootenai County public supply 99.8% groundwater | [P] | yes |
| 30 | Lewiston | -117.017, 46.417 | barges since 1975; 2.5-3M tons wheat | [P] CRS | yes |
| 31 | Magic Valley farms | -114.52, 42.74 | irrigation 17.13 MAF, 86%; 3.79M acres | [P] | yes |
| 32 | Magic Valley dairies | -114.71, 42.94 | 663,000 cows; milk 3rd, 7.4% | [P] | yes |
| 33 | Upper Snake River Valley farms | -111.9, 43.74 | potatoes 32.6% of US; barley 32.5% | [P] | yes |
| 34 | Burley / Rupert farms | -113.68, 42.6 | sugarbeets 19.8%, 174,000 acres; 48,000 pumped acres | [P] | yes |
| 35 | Treasure Valley farms | -116.72, 43.68 | Canyon County 170,700 irrigated acres, 918 Mgal/d | [P] | yes |
| 36 | Camas Prairie / Palouse dryland wheat | -116.75, 46.25 | none (explains unirrigated cropland) | | yes |
| 37 | Eastern Snake Plain Aquifer | -113.35, 43.3 | -600,000 AF 2025-26; -100,000 AF since 2015; 10,800 sq mi | [P] | yes |
| 38 | Big Lost River valley (Arco) | -113.3, 43.67 | curtailment 21 Nov 2025 to 17 Apr 2026 | [P] | yes |
| 39 | Mountain Home plateau | -115.69, 43.13 | 436,906 and 82,287 acres | [P] GIS | yes |
| 40 | Raft River valley | -113.37, 42.3 | 531,716 acres | [P] GIS | yes |
| 41 | Rathdrum Prairie aquifer | -116.93, 47.83 | 500,000+ people; 370 sq mi; 1,470 cfs | [P] | yes |
| 42 | Trout farms (Buhl) | -114.76, 42.6 | 11% of withdrawals; 36.9% of US trout; about 80 farms | [P] | yes |
| 43 | Cloud seeding (Payette headwaters) | -115.45, 44.2 | 12% more snowpack; 32 generators, 2 aircraft | [P] | yes |
| 44 | Fort Hall (Shoshone-Bannock Tribes) | -112.43, 43.03 | 581,031 AF/yr (1990) | [P] | yes |
| 45 | Lapwai (Nez Perce Tribe) | -116.805, 46.405 | 50,000 AF/yr; $50M; $23M | [P] | yes |
| 46 | Plummer (Coeur d'Alene Tribe) | -116.888, 47.335 | settlement 5 Mar 2026 | [P] | yes |
| 47 | Henrys Lake | -111.399, 44.631 | 65,691 AF on 30 Sep 2026 | [P] Hydromet | outline only |
| 48 | Arrowrock Reservoir | -115.843, 43.613 | 272,200 AF; 18.3% low on 13 Aug | [P] | outline; in Lucky Peak card |
| 49 | Deadwood Reservoir | -115.669, 44.31 | 153,992 AF; 49.5% on 11 Nov | [P] | outline; named on Cascade card |
| 50 | Brownlee Reservoir | -117.092, 44.594 | 585 MW (Wikipedia) | not used | outline |
| 51 | C. J. Strike Reservoir | -115.853, 42.959 | none found | | outline |
| 52 | Magic Reservoir (Big Wood) | -114.388, 43.289 | none found | | outline |
| 53 | Owyhee Reservoir, OR | -117.341, 43.466 | 96,051 AF on 11 Nov 2026, down from 370,360 a year earlier | [P] Hydromet | outline only |
| 54 | Moscow / Palouse basin aquifer | -117.0, 46.73 | none confirmed | | no |
| 55 | Duck Valley Reservation | -116.1, 42.0 | none | | polygon card |
| 56 | Albeni Falls Dam (Pend Oreille outlet) | -117.0, 48.18 | Corps page blocked | | no |
| 57 | Pocatello | -112.445, 42.871 | none | | no |

## 6. Idaho water law in brief (as used in the spot text)

- Prior appropriation, "first in time, first in right" [P IDWR FAQ]. A permit from IDWR is needed for a new diversion of surface water or groundwater; household wells are exempt up to 13,000 gallons a day and half an acre [P].
- Groundwater and surface water are administered together ("conjunctive administration"). Senior surface users make a delivery call; juniors must mitigate under an approved plan or be curtailed [P IDWR delivery call page].
- Critical Ground Water Areas (8) and Ground Water Management Areas (12 named areas, 14 polygons) are designated by the IDWR director [P GIS layer]. The one-line descriptions on the map (not enough water for existing rights / may be approaching that condition) follow Idaho Code 42-233a and 42-233b from general knowledge; the statute text was not opened this session.
- General adjudications: Snake River Basin (1987 to 2014) [P]; Coeur d'Alene-Spokane, Palouse, Clark Fork-Pend Oreille, Kootenai (northern Idaho, begun 2008 per the governor's release) and Bear River [P GIS layer names]. "Still under way" for the northern and Bear River cases is from general knowledge.

## 7. GIS sources (tested 12 Nov 2026 with curl; the IDWR server needs a browser-style User-Agent)

| Layer | URL | Used for |
|---|---|---|
| IDWR ArcGIS root | https://gis.idwr.idaho.gov/hosting/rest/services | |
| ESPA area of common groundwater supply | .../Modeling/EspaACGWSBoundary/FeatureServer/0 | area, k espa |
| Spokane-Rathdrum aquifer (Idaho part) | .../Groundwater/SpokaneRathdrumAquiferComplete/FeatureServer/0 | area, k aquifer |
| Critical Ground Water Areas (8) | .../Regulatory/CriticalGroundwaterAreas/FeatureServer/0 | areas, k cgwa, with ACRES |
| Ground Water Management Areas (14 polygons) | .../Regulatory/GroundwaterManagementAreas/FeatureServer/0 | areas, k gwma (ESPA and Rathdrum Prairie GWMAs left out because the aquifer outlines are drawn instead) |
| Adjudication basins (6 services) | .../Administrative/SnakeRiverBasinAdjudication etc. | basins |
| NHD water bodies | .../Reference/NhdWaterbody/FeatureServer/0 | 26 lake and reservoir outlines |
| Major rivers (NHD) | .../Reference/MajorRivers/FeatureServer/0 | 25 tributaries |
| OpenStreetMap via Overpass (named canals in Idaho) | https://overpass-api.de/api/interpreter (mirrors: overpass.private.coffee, overpass.kumi.systems) | 27 canals |
| Reclamation Hydromet daily data | https://www.usbr.gov/pn-bin/daily.pl?station=AMF&format=csv&year=2025&month=10&day=1&year=2026&month=11&day=11&pcode=af | storage readings (not geometry) |

Not usable: IDWR's NHD flowline layer names the big canals generically ("Main Canal", "High Line Canal"), so it was not used for canals.

## 8. Tour ideas and least-sure list

Tour as built: one river system; snow; upper Snake storage; Milner; Magic Valley farms; the aquifer; the 2026 curtailment; Thousand Springs and trout; Boise; salmon and the north.

Least sure:
1. Individual reservoir capacities other than American Falls (1,672,590 AF read on the Reclamation page), Lake Walcott (95,200 AF, read) and the three system totals (read). Palisades 1,200,000, Jackson 847,000, Island Park 135,205, Anderson Ranch 413,100, Arrowrock 272,200, Lucky Peak 264,400, Cascade 646,460 and Deadwood 153,992 are the Hydromet teacup capacities as I know them; they add up exactly to the three system totals on the pages, but the per-reservoir values are drawn in an image I could not read as text.
2. Dworshak height and capacity, Hells Canyon dates, New York Canal length and date, Lake Pend Oreille depth, Bear Lake details and the Salmon River's length come from Wikipedia.
3. The sockeye figure for 2026 is a mid-season count (through 30 June). No final 2026 count was found.
4. Twin Falls Canal Co. percentages come from news reports of a coalition statement, not from the company.
5. The 2015 water-use year is old. USGS has not published a full 2020 state compilation that I found.
6. Natural Earth names the Snake's main stem "Columbia" (see the verification log).

## 9. Used on the map: verification log

### Budget (one measure: fresh water withdrawn, USGS 2015)
All rows are sums over Idaho's 44 counties in the USGS county file, opened and summed this session. Sources: surface 13.87 MAF (70%), groundwater 6.00 MAF (30%). Uses: irrigation 17.13 MAF (86%), aquaculture 2.20 MAF (11%), public supply 0.31 MAF (1.6%), everything else 0.228 MAF (1.1%: domestic 70.1 + industrial 57.6 + livestock 50.8 + mining 23.1 + thermoelectric 1.8 Mgal/d). Rows sum to 19.87 MAF. The consumptive-use estimate for irrigation (9.99 MAF) appears only in a note and is labelled as a different measure. "Only California takes more among the western states" rests on the nine-state table in research/west_overview.md (same USGS file).

### [S] figures confirmed by opening the source
| Figure | Opened |
|---|---|
| ESPA lost 600,000 AF, 2025 to 2026; 329 wells; 2.8 MAF modelled gain; spring flows expected to decline | IDWR news release 26 Aug 2026 (PDF) |
| ESPA lost about 100,000 AF since 2015; recharge by year; 1.5 MAF from board recharge | IWRB committee materials 26 Aug 2026 (PDF). Note: an IDWR presentation from Sept 2025 reportedly said a 500,000 AF gain since 2015; the two differ by the 2026 loss |
| April 2026 shortfall 181,600 AF; order of 14 May 2026; 11 Oct 1900 | IDWR delivery call page |
| July 2026 shortfall 741,100 AF; TFCC 289,400 AF; 11 Oct 1900 is the date of TFCC right 1-209 | IDWR order of 21 Jul 2026 (PDF) |
| 924 rights; 10,800 square miles; 205,000 AF/yr; Big Lost dates | East Idaho News 28 May 2026 (via WebFetch) |
| 205,000 AF annually; term 2024 to 2027 | IDWR final order approving the 2024 plan (PDF) |
| 240,000 AF/yr under the 2016 plan | IDWR FAQ 3 Jun 2024 (PDF) |
| About 6,400 rights in the May 2024 order | IDWR news release 30 May 2024 (PDF) |
| Swan Falls 3,900 / 5,600 cfs; 4,000+ notices; 4,610 cfs; 5,900 AF | IDWR settlement page and news release 9 Jul 2026 |
| Anderson Ranch raise: 6 ft, 29,000 AF, $149M, 2027, 90% non-federal | Reclamation fact sheet April 2026 (PDF) |
| Snowpack: 68% at peak on 17 March; 25% melted by 1 April; Mores Creek 21%; Boise basin 44% | NRCS April 2026 report (PDF) |
| Salmon basin snowpack 72% on 1 May; no reservoirs in the basin | NRCS May 2026 report (PDF) |
| Recharge average 251,000 AF/yr; 350,000 AF goal | IWRB news release Jan 2025; IWRB plan-change document |
| Nez Perce: 50,000 AF, 200,000 AF, $50M, $23M | IDWR-hosted agreement summary (PDF) |
| Fort Hall: 581,031 AF/yr; five years of negotiation | Interior Department release, 20 Jun 1990 (via WebFetch) |
| Coeur d'Alene settlement 5 Mar 2026; adjudication began 2008; 10,000 AF/yr | Governor's release; Spokane Public Radio |
| Lower Snake dams: capacities, dates, cost range, injunction, sockeye abundance, navigation | CRS report R49059 (via WebFetch, first 100,000 characters) |
| 11 sockeye at Lower Granite through 30 Jun 2026 | joint staff fact sheet 1 Jul 2026 (PDF) |
| Rathdrum: 370 sq mi; 500,000+; 1,470 cfs | USGS publication page |
| Farm rankings and acreages | ISDA 2025 statistics (PDF) |
| TFCC deliveries 1/2 inch from 3/4; over half of Twin Falls homes | Idaho News 6 (KIVI) |
| TFCC 33.3%; about 550,000 acres | Coeur d'Alene Press reprint of the coalition statement |
| Twin Falls County drought class | NWS Boise drought statement 1 Oct 2026 (PDF) |
| Henrys Fork inflow 42% below average, second lowest in 94 years; natural flow 28% below average | Henry's Fork Foundation FAQ |
| Cloud seeding 12%, 2003; 32 generators, 2 aircraft | Idaho Power page; IWRB cloud seeding page |

### Current readings I pulled myself
All reservoir percentages and dates on the map come from the Hydromet daily series pulled on 12 Nov 2026 (section 2). The East Idaho News line "8-9% full" for the upper Snake reservoirs agrees with the Hydromet system low of 8.0% on 8 Oct 2026. The same article's "75-80% of capacity last year at this time" does not agree with Hydromet (21.3% on 1 Oct 2025, 29.7% on 11 Nov 2025) and is not used.

### Changed from first drafts
- The upper Snake "all-time low" wording from news reports is not used; the card gives the dated readings only.
- Island Park low: Hydromet's 16,630 AF (12.3%) on 19 Sep 2026 is used, not the Henry's Fork Foundation's forecast of 11,000 AF.
- Boise groundwater share: USGS Ada County figure (81% of public supply, 2015) replaces the unconfirmed "70% from wells" for one utility.
- Natural Earth files the Snake's main stem under the name "Columbia". The content file maps that name to the Snake River's style, name and card. The only true Columbia inside the frame is a few kilometres in British Columbia at the far north-west corner, which would also read "Snake River" if clicked.

### Dropped (could not confirm, so not on the map)
- The name Aberdeen-Springfield Canal: OpenStreetMap calls the long canal west of the Snake between Idaho Falls and Aberdeen the "Highline Canal", and I could not confirm it is the same canal, so the map uses the OpenStreetMap name and a generic card.
- "500,000 acres" affected by the 2024 order; the 2024 order "lasted about three weeks"; storage water up to 75,000 AF under the 2024 plan.
- Delivery cuts for North Side Canal Co., AFRD2 (20%), Minidoka (15%) and Milner (12%): Idaho Capital Sun returned 403.
- Idaho drought emergency of 13 April 2026 covering all 44 counties: seen only in summaries (Idaho Business Review returned 403), so it is not stated on the map.
- Veolia's 70% groundwater share; Boise Stage 2 restrictions (conflicting commercial pages).
- 2026 sockeye forecast of 3,300; counts at Redfish Lake; "900 miles" migration.
- Coeur d'Alene lakebed ruling (2001), 2019 Idaho Supreme Court ruling, Avista payments, lake level 7.5 ft, mine-waste tonnage.
- Fort Hall priority date (1867) and Fort Hall Act signing date; Nez Perce 427,000 AF flow augmentation and rental rates.
- Idaho trout share of 70 to 80% (older sources); the ISDA 36.9% for 2023 is used.
- Milner-Gooding Mile Post 31 recharge capacity figures; the card says only that the marker sits on that canal.
- Bear Lake 2026 level; Albeni Falls and Lake Pend Oreille operations; Palouse basin aquifer declines; Mountain Home and Raft River designation dates; data-centre and chip-plant water use; Treasure Valley population.
- Brownlee capacity; Hells Canyon Complex megawatts; relicensing status.

### Coordinates
Lake and reservoir markers sit on outline centroids (checked on the rendered map). Milner Dam, Swan Falls Dam, Lower Granite Dam, Teton Dam and Thousand Springs were placed from known coordinates and checked against the river line and canal heads on the map: the two main canals from OpenStreetMap start at -114.010, 42.527, within a kilometre of the Milner marker. The snowpack marker is a stand-in placed in the central mountains, not at a snow gauge. The recharge marker is on the Milner-Gooding Canal line, not at a specific recharge basin.
