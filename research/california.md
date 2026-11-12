# California water: research fact sheet (supply, demand, places, law, GIS)

Compiled 2026-11-12 for the California chapter of the western-water map. Style follows `colorado.md`.

**Conventions**
- AF = acre-feet; MAF = million AF; cfs = cubic feet per second; DWR = California Department of Water Resources; SWP = State Water Project; CVP = Central Valley Project; MWD = Metropolitan Water District of Southern California; IID = Imperial Irrigation District; SGMA = Sustainable Groundwater Management Act; CDEC = California Data Exchange Center.
- Evidence tags: **[P]** = the document itself was opened and the number read there. **[P-calc]** = arithmetic on [P] numbers. **[S]** = seen only in a search summary or the page was blocked; re-open before use. **unverified** = not confirmed.
- 2026 context: California's water year 2026 had near-average precipitation (about 97% by late May) but very little snow: 18% of average on 1 April, the second-lowest on record. Reservoirs entered the year full, so statewide storage on 31 Oct 2026 was 106% of average. This differs from the interior West, where 2026 was record dry. The Colorado River side of the state shares that river's shortage.
- Sections A and B below are the two research passes (statewide/north and south/Colorado River) as delivered. Section C onward (GIS, tour ideas, least-sure list, verification log) is appended as the build proceeds.

---

# Part A. Statewide, Central Valley and northern California

# California water chapter: verified figures (research done 12 Nov 2026)

Topics 1-3 are well covered from primary documents. Topics 4-6 and 9 are partly covered. Topics 7-8 are thin: I stopped at about 50 tool calls. No project files were touched.

**Tags.** [P] = I read the number in the document itself. [P-calc] = my arithmetic on [P] numbers. [S] = seen only in a search summary.

**Access problems.**
- water.ca.gov, ppic.org and web.archive.org block automated requests, and sfpuc.gov did not respond. Nothing on water.ca.gov was opened directly.
- DWR releases are readable through the govdelivery mirror `content.govdelivery.com/accounts/CNRA/bulletins/...`.
- Several documents were already in the scratch folder from the earlier attempt. I read them, but their source URL was not recorded. These are marked "(URL not recovered)" with the local filename; the caller should re-find the URL before citing.

Scratch folder: `/private/tmp/claude-501/-Users-daytonthorpe-Documents-Claude-blog-az-water-use/a31ff4d1-f35c-47b3-9314-2c00975492cf/scratchpad/dl_ca_a/`

## 1. Statewide budget (DWR applied-water accounting)

Source A is DWR's "Water Plan Water Balance Data", statewide (ST) CSVs for water years 2002-2023: https://data.cnra.ca.gov/dataset/water-plan-water-balance-data (files in `dl_ca_a/wb/`, download links in `wb/urls.txt`). I summed the "Applied Water Use" rows myself.

Source B is the PPIC fact sheet "Water Use in California" (April 2023), read via a mirror PDF: https://avek.specialdistrict.org/files/fead7d2c9/23.04+Water+Use+in+California.pdf

| Item | Value | Tag | Source |
|---|---|---|---|
| Average shares | Communities 10%, agriculture 40%, environment 50% | P | B |
| Average volumes, WY2002-2023 (22 years) | Urban 8.1 MAF, agriculture 31.3, environment 37.7, total 77.0 (10/41/49%) | P-calc | A |
| Environment components, same average | Wild and scenic rivers 23.7 MAF, instream flow requirements 6.7, required Delta outflow 5.9, managed wetlands 1.5 | P-calc | A |
| Wild and scenic share of environmental water | 63% (PPIC); 23.7/37.7 = 63% from DWR data | P | B, A |
| Wettest years | 2006: 104.8 MAF total (urban 9.3, ag 30.5, env 65.0; 9/29/62%). 2017: 103.7 (7.6/31.6/64.6). 2023: 91.8 (7.0/29.3/55.4; 8/32/60%) | P-calc | A |
| Driest years | 2022: 59.1 MAF (7.2/29.7/22.1; 12/50/37%). 2021: 60.7 (7.7/31.5/21.5). 2015: 61.9 (6.7/30.6/24.6). 2014: 62.0 (7.7/32.7/21.6; 12/53/35%) | P-calc | A |
| PPIC wet vs dry | Environment is 61% of water in wet years, 41% in dry years | P | B |
| Definition | "Applied" water is water delivered; "net" use (consumed, evaporated, or discharged to saline water) is lower. Some water returns to rivers and aquifers and is reused | P | B |
| Environmental water counted as a use | Four categories: wild and scenic rivers, instream ecosystem use, water-quality maintenance (Delta outflow, which also keeps the Delta fresh for cities and farms), and wetlands in wildlife preserves | P | B |
| Net use, 2018 example | Agriculture 28.2 MAF net vs 31.0 applied; urban 5.3 vs 7.9 | P | A (2018 ST file) |
| Groundwater extraction | Average 17.0 MAF/yr 2002-2023; low 10.7 (2023), high 23.0 (2014) and 22.9 (2015) | P-calc | A |
| Groundwater share of human (urban + ag + wetland) applied water | Average about 42%; wet years 28% (2023) to 33%; dry years 55% (2014), 59% (2015), 53% (2022) | P-calc | A |
| Irrigated cropland | 8.5 million acres (PPIC says 8.5M, not 9M) | P | B |
| Perennial crops | Nearly half of irrigated acreage in 2018; over 60% in the San Joaquin Valley | P | B |
| Urban use trend | Plateaued although population grew 5.5 million 2000-2020; outdoor use is nearly half of urban use | P | B |
| Groundwater basins | 515 statewide | P | DWR Semi-Annual Groundwater Update May 2026 (`gw2026.pdf`, URL not recovered) |

Note: the DWR "Agriculture applied water use" row includes about 0.7 MAF of agricultural groundwater recharge in 2018 and excludes conveyance losses (2.7 MAF for agriculture in 2018).

## 2. Snowpack, water year 2026, reservoirs

| Item | Value | Tag | Source |
|---|---|---|---|
| Statewide snowpack, 1 Apr 2026 | 18% of average; no measurable snow at Phillips Station; second-lowest April 1 on record; peak on or near 24 Feb | P | https://www.acwa.com/news/dry-march-leaves-no-measurable-snow-for-april-survey/ (ACWA summary of the DWR release) |
| Same, CDEC sensors | 18% statewide (North 6%, Central 21%, South 31%), 112 stations, 4.9 in average water content | P | https://cdec.water.ca.gov/reportapp/javareports?name=DLYSWEQ.20260401 (I did not check the report's date header, but it matches the DWR figure) |
| Snowpack in late Feb 2026 | About 59% of average | P | Reclamation release 26 Feb 2026, https://www.usbr.gov/newsroom/news-release/5289 |
| Snowpack 15 May 2026 | 12% of average; DWR says it "peaked in mid-February" | P | https://content.govdelivery.com/accounts/CNRA/bulletins/417836b |
| Reservoirs 15 May 2026 | Statewide 117% of average; Oroville 99% of capacity | P | same |
| WY2026 precipitation | About 97% of average statewide by 28 May 2026; very low snow; warm, dry March | P | Jay Lund, California WaterBlog, about June 2026 (`lund.html`, URL not recovered; californiawaterblog.com) |
| WY2026 character | Wet December, dry warm January, late-February storms, record-hot March, rain in April | P | DWR and Reclamation releases above |
| Statewide storage, 31 Oct 2026 | 154 in-state reservoirs: 21.27 MAF, 106% of average, 56% of capacity | P | CDEC STORSUM report (`storsum.html`; column labels on that page are confusing) |

Reservoir storage at midnight 11 Nov 2026, from https://cdec.water.ca.gov/reportapp/javareports?name=RES (all [P]):

| Reservoir | Capacity (AF) | Storage (AF) | % capacity | % of average |
|---|---|---|---|---|
| Shasta | 4,552,000 | 2,246,293 | 49 | 92 |
| Oroville | 3,424,753 | 1,436,913 | 42 | 80 |
| Trinity | 2,447,650 | 1,624,855 | 66 | 115 |
| New Melones | 2,400,000 | 1,511,079 | 63 | 117 |
| San Luis | 2,041,000 | 1,323,451 | 65 | 137 |
| Don Pedro | 2,030,000 | 1,471,223 | 72 | 110 |
| Folsom | 977,000 | 362,012 | 37 | 89 |
| Millerton | 520,500 | 221,484 | 43 | 97 |
| New Bullards Bar | 966,000 | 629,259 | 65 | 110 |
| Pine Flat | 1,000,000 | 188,771 | 19 | 66 |
| McClure | 1,024,600 | 502,280 (10 Nov; blank in the 11 Nov report) | 49 (calc) | 115 (calc, vs 435,483 average) |
| Castaic | 325,000 | 263,193 | 81 | 105 |
| Diamond Valley | not in the report | 797,895 (5 Nov, CDEC station DMV, latest value) | not computed | not available |
| Hetch Hetchy | 360,000 | 257,308 | 71 | 101 |
| Pardee | 203,795 | 183,222 | 90 | 108 |

McClure and Diamond Valley storage came from the CDEC CSV service (stations EXC and DMV, sensor 15).

## 3. State Water Project and Central Valley Project

| Item | Value | Tag | Source |
|---|---|---|---|
| SWP 2026 allocation | 10% (1 Dec 2025), 30% (29 Jan 2026), 45% (15 May 2026). No later change found, so treat 45% as final | P | https://content.govdelivery.com/accounts/CNRA/bulletins/417836b |
| SWP 30-year average allocation | 60% | P | Lund blog (secondary) |
| SWP reach | 29 public water agencies; 27 million people; 750,000 acres | P | same DWR release; also https://www.gov.ca.gov/2026/04/24/delta-conveyance-project-achieves-important-milestone-advances-closer-to-construction/ |
| SWP urban/farm split | 66% urban, 34% agriculture; California Aqueduct 444 miles | P | https://www.watereducation.org/aquapedia/state-water-project |
| Oroville operations 2026 | Flexible flood operations added 400,000 AF of storage | P | DWR release 15 May 2026 |
| Oroville Dam height | 770 ft | S | search summary only |
| CVP 2026 south-of-Delta irrigation | 15% (26 Feb), 20% (24 Mar), 25% (19 May) | P | https://www.usbr.gov/newsroom/news-release/5289 and https://www.usbr.gov/newsroom/news-release/5305; May release in `cvp_may.html` (URL not recovered) |
| CVP 2026 south-of-Delta municipal | 65%, then 70%, then 75% of historic use | P | same |
| CVP 2026 other | North-of-Delta 100%; Sacramento River Settlement and San Joaquin Exchange contractors 100%; refuges 100%; Eastside 0, raised to 49,000 AF in May | P | same |
| Friant 2026 | Class 1: 100% (first 800,000 AF); Class 2: 0% (next supply up to 1.4 MAF) | P | /5289 |
| South-of-Delta 12-year average allocation | 30% | P | Lund blog (secondary) |
| CVP size | 20 dams and reservoirs, 11 power plants, 500 miles of canals, about 400 miles Redding to Bakersfield, about 12 MAF storage, more than 250 contractors (the 2026 release says over 270 contracts and about 3 million acres) | P | CRS R45342, https://www.everycrsreport.com/files/2026-03-26_R45342_04a0a7041f6b24badbbcbfe23ef73abb53bffa2f.html; Reclamation CVP fact sheet (`fs_cvp.pdf`) |
| CVP average deliveries | About 5 MAF to farms, 600,000 AF municipal, 410,000 AF refuges, 800,000 AF other fish and wildlife; contracts exceed 9.5 MAF/yr | P | CRS R45342 |
| Shasta | 602 ft high, built 1938-1945, 4.552 MAF | P | Reclamation fact sheet (`fs_shasta-dam.pdf`); CDEC |
| Friant-Kern Canal | 152 miles; serves about 1 million acres; built 1951 at 5,000 cfs tapering to 2,000 | P | Reclamation fact sheet, Dec 2024 (`fkc_fs.pdf`) |
| Friant-Kern subsidence | Worst reach (mileposts 88-121) cut to 1,600 cfs from an original 4,000 cfs; up to 300,000 AF/yr of lost deliveries in some years | P | same |
| Friant-Kern repair | Middle Reach Capacity Correction phase 1 completed spring 2024; phase 2 (upper and lower reaches) in negotiation since Dec 2024. In 2026 Reclamation broke ground on a $200M replacement of 13 pump stations (5 in phase 1), with construction into 2027 | P | fact sheet; Reclamation release (`fkc_nr.html`, exact date not captured) |
| Delta-Mendota Canal | 117 miles (CRS); "nearly 120 miles" to Mendota Pool (Reclamation) | P | CRS; Jones fact sheet |
| Jones Pumping Plant | Physical capacity about 5,200 cfs; generally limited to 4,600 cfs by the canal; six 22,500-hp motors | P | https://www.usbr.gov/mp/bdo/docs/lto01-19/appendix-a-facilitydescriptions.pdf; fact sheet |
| Banks Pumping Plant | Clifton Court Forebay inflow normally limited to 6,680 cfs (3-day average) | P | same appendix |
| San Luis Reservoir | 2,041,000 AF (CDEC); federal share 966,000 AF; B.F. Sisk Dam 382 ft high, 3.5 miles long, built 1963-67; largest offstream reservoir in the US | P | CDEC; Reclamation (`sisk.html`, `fs_cvp.pdf`) |
| Sisk Dam raise | 10 ft raise adds 130,000 AF; federal contribution $95M to date. The page uses Biden-era wording, so it may be out of date | P | `sisk.html` |
| San Luis drought reserve 2026 | About 93,000-94,000 AF held back; 203,000-222,000 AF of rescheduled 2025 water | P | Feb and Mar releases |
| Dec 2025 operations decision | New Record of Decision; Reclamation expects +130,000-180,000 AF/yr CVP and +120,000-220,000 AF/yr SWP; environmental groups sued in March 2026 | P | CRS R45342 |

## 4. Delta, Delta Conveyance Project, Sites Reservoir

| Item | Value | Tag | Source |
|---|---|---|---|
| Combined exports | 6.59 MAF in 2011 (record), 6.42 MAF in 2017, 4.30 MAF in 2024 | P | CRS R45342 |
| Delta watershed | Almost 60,000 sq mi, about 40% of California; a source for "tens of millions" and more than 3 million acres | P | watereducation.org SWP page |
| Delta Conveyance: Delta Plan | Certification filed Oct 2025. On 23 Apr 2026 the Delta Stewardship Council upheld most of it and sent two issues back. A revised certification (C20262) has been filed and appealed by San Joaquin, Solano and Yolo counties and Delta water agencies | P | gov.ca.gov 24 Apr 2026 (URL above); Council page (`dsc.html`, URL not recovered) |
| Delta Conveyance: federal | Biological opinions for construction received June 2026 | P | https://www.gov.ca.gov/2026/06/05/delta-conveyance-project-receives-critical-federal-clearance-to-advance-construction/ |
| Delta Conveyance: water right | Hearing still open. Ruling of 5 Nov 2026 sets closing briefs for 11 Feb 2027 and reply briefs for 12 Apr 2027, so no decision before spring 2027 | P | https://www.waterboards.ca.gov/water_issues/programs/administrative_hearings_office/docs/2026/2026-11-05-procedural-ruling-dcp.pdf |
| Delta Conveyance: financing | DWR dismissed its second bond validation action (May 2026); the Governor's fast-track proposal stalled | S | search summary only |
| Sites: water right | Approved 4 Nov 2026. Up to 986,000 AF/yr from the Sacramento River, November to mid-June only; a separate hearing on two local creeks starts Jan 2027; hearings took 32 days over two years | P | State Water Board release 4 Nov 2026 (`sites_pr.html`, URL not recovered) |
| Sites: size | 1.5 MAF offstream, 10 miles west of Maxwell, 30 participating agencies | P | https://sitesproject.org/ |
| Sites: cost | $6.6B management estimate, $7.5B with contingency (2024 dollars), about $9.9B in year-of-spending dollars | P | Sites Project Baseline Report, Aug 2026 draft (`sites_base.pdf`, URL not recovered) |
| Sites: schedule | Completion late 2034 in the baseline schedule; not yet under construction | P | same |

## 5. Law and SGMA

| Item | Value | Tag | Source |
|---|---|---|---|
| Rights system | Riparian, appropriative and prescriptive rights. Since the 1914 Water Commission Act a new right requires a state permit. California and Oklahoma are the only western states still recognising riparian rights; riparian rights are not lost by non-use and cannot be used for storage | P | State Water Board water rights FAQ (`wrfaq.html`, URL not recovered) |
| Mono Lake | Los Angeles diversions dropped the lake 45 ft between 1941 and 1982; Decision 1631 (1994) set a target level of 6,392 ft; the Board held workshops in 2026 on reopening it | P | https://www.waterboards.ca.gov/waterrights/water_issues/programs/mono_lake/ |
| SGMA scope | Applies to 94 of 515 basins; 21 critically overdrafted; deadlines 31 Jan 2040 (critically overdrafted) and 31 Jan 2042 (others) | P | https://abgt.assembly.ca.gov/media/7522 |
| Probationary basins, Nov 2026 | Tulare Lake (April 2024) and Tule (17 Sep 2024) | P | https://www.waterboards.ca.gov/sgma/groundwater_basins/ |
| Under evaluation for probation | Pleasant Valley | P | same |
| Returned to DWR oversight | Chowchilla, Kaweah, Kern County, Delta-Mendota (the fourth to exit, 7 Apr 2026) | P | same; Board release 7 Apr 2026 (`dm.html`) |
| Tule and Tulare Lake details | Pumpers of 20 AF/yr or less excluded on 7 Apr 2026 (about 3,000 pumpers, under 2% of pumping); about 3,360 others must report. Eight Tule agencies were denied exclusions on 21 Apr 2026. The Board's SGMA page refers to a "suspension of probationary requirements" in Tulare Lake | P | `dm.html`, `tule.html`, `sgma.html` |

## 6. Groundwater

| Item | Value | Tag | Source |
|---|---|---|---|
| Historic subsidence | By 1970 more than 1 ft over about 5,200 sq mi (half the San Joaquin Valley); locally as much as 28 ft | P | https://www.usgs.gov/centers/land-subsidence-in-california/science/land-subsidence-san-joaquin-valley |
| Subsidence WY2025 | About 3,100 sq mi sank more than 0.1 ft (2,200 sq mi in WY2024); maximum 0.6 ft, in the Tulare Lake region | P | DWR Semi-Annual Groundwater Update May 2026 (`gw2026.pdf`) |
| Extraction | 12.8 MAF reported in WY2025 (11.5 in WY2024); 83% in the Central Valley | P | same |
| Managed recharge | 4.6 MAF in WY2023, 1.9 in WY2024, 1.1 in WY2025. This report says 4.6, not 4.1, for 2023 | P | same |
| Storage change | Net decline of 1.5 MAF in WY2025 (reported by local agencies); Central Valley down 8.1 MAF since WY2019, of which 4.1 MAF in the Tulare area | P | same |
| Dry wells reported | 1,441 (WY2015), 1,063 (2021), 1,383 (2022), 382 (2023), 166 (2024), 106 (2025) | P | same |
| Tulare Lake 2023 | Peaked at about 178 sq mi (about 114,000 acres by my conversion) | P | https://abc7news.com/tulare-lake-reaches-peak-california-2023/13356811/ |
| Kern Water Bank | About 20,000 acres | S | search summary only |

## 7. Farms

| Item | Value | Tag | Source |
|---|---|---|---|
| Almonds | 1,385,870 bearing acres (2026 initial estimate, released 23 Apr 2026); 47,588 acres removed | P | Land IQ / Almond Board, "2026 Standing Acreage Initial Estimate" (`almond.pdf`, URL not recovered) |
| Westlands | About 700 farms on more than 600,000 acres in Fresno and Kings counties; largest CVP contractor | P | CRS R45342 |
| Westlands fallowing | Over 242,000 acres fallowed in 2025; about 1,100 miles of buried pipe | P | Westlands 2025 Crop Report release (`wwd.html`, `wwd2.html`; wwd.ca.gov) |
| South-of-Delta service contracts | 2.09 MAF, 22.1% of CVP contract water | P | CRS R45342 |
| Dairy | 1.69 million dairy cows in 2022; Tulare County about 30% | S | search summary only |

## 8. Northern cities

| Item | Value | Tag | Source |
|---|---|---|---|
| Hetch Hetchy Reservoir | 360,000 AF capacity | P | CDEC |
| EBMUD | Supply starts in the Mokelumne watershed and runs 90 miles to the East Bay; 1.5 million water customers (EBMUD's page says 1.5M, not 1.4M); Pardee 203,795 AF | P | https://www.ebmud.com/water/about-your-water/water-supply ; https://www.ebmud.com/about-us/who-we-are ; CDEC |
| Anderson Dam | Federal regulators ordered the reservoir drained in 2020. First release through the new 1,700-ft outlet tunnel on 30 Oct 2026; the dam rebuild is expected to start Jan 2027 | P | https://www.valleywater.org/news-events/news-releases/Anderson-Dam-Tunnel-Project-on-track-for-completion-in-2026 |
| Anderson Dam contract | Awarded 24 Jul 2026, about $1.88B; completion about 2033 | S | search summary only |

## 9. Klamath, Trinity, Eel, hydropower

| Item | Value | Tag | Source |
|---|---|---|---|
| Klamath dams | J.C. Boyle, Copco No. 1, Copco No. 2, Iron Gate. Copco No. 2 removed Nov 2023; the other three Oct 2024. The four totalled 163 MW | P | https://klamathrenewal.org/the-project/ |
| Salmon, autumn 2025 | 208 adult Chinook in Jenny Creek and 260 in Shovel Creek; more than 1,200 entered Fall Creek hatchery; salmon seen above Upper Klamath Lake | P | CDFW release, https://content.govdelivery.com/accounts/CNRA/bulletins/3fc0376 |
| Salmon, cumulative | Over 20,000 Chinook upriver in two years; 2,497 passed Keno Dam in 2025 (zero in 2024); 210 passed Link River Dam | P | https://insideclimatenews.org/news/27082026/salmon-return-to-klamath-river-after-dam-removals/ |
| Klamath 2026 | Low snow and drought; Reclamation cut spring flows; a parasite outbreak killed hundreds of juveniles; spring-run not yet back. No 2026 count is available yet (final estimates come in January) | P | same |
| Iron Gate sonar counts | 7,742 (2024) and 13,310 (2025) | S | search summary only |
| Trinity River | Record of Decision signed 19 Dec 2000 raised the river's share from about 25% to 48% of Trinity Lake inflow; flows rose from 340,000 AF to as much as 452,600 AF | P | https://www.trrp.net/program-structure/background/rod/ |
| Trinity diversion | Water leaves at Lewiston Dam through the Clear Creek Tunnel to Whiskeytown | P | Reclamation appendix (URL in section 3) |
| Potter Valley | PG&E filed to surrender the licence on 25 Jul 2025 (remove Scott Dam and most of Cape Horn Dam, with a new Eel-Russian diversion). Federal regulators began environmental scoping 22 May 2026. No decision yet | S | search summary only |
| Hydropower share | 2025: 27,542 GWh in-state (large 24,125 + small 3,417), which is 13.4% of in-state generation (205,698 GWh), down 6% from 2024 | P | https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2025-total-system-electric-generation |
| Kern produced water | The regional water board's food-safety programme covers oilfield water delivered to Cawelo, North Kern and Kern-Tulare districts. No volumes captured | P (names only) | https://www.waterboards.ca.gov/centralvalley/water_issues/oil_fields/food_safety/ |

## Coordinates (lon, lat)

First source is Wikipedia's coordinate API; second is CDEC station metadata where a station exists.

| Place | lon, lat | Second source |
|---|---|---|
| Shasta Dam | -122.419, 40.719 | CDEC -122.420, 40.718 |
| Oroville Dam | -121.486, 39.539 | CDEC -121.493, 39.540 |
| Trinity Dam | -122.763, 40.801 | CDEC -122.762, 40.801 |
| New Melones Dam | -120.528, 37.947 | CDEC -120.525, 37.948 |
| New Don Pedro Dam | -120.421, 37.699 | CDEC -120.421, 37.702 |
| Folsom Dam | -121.156, 38.708 | CDEC -121.183, 38.683 (differs; use Wikipedia for the dam) |
| Friant Dam | -119.705, 37.001 | CDEC same |
| New Bullards Bar Dam | -121.143, 39.393 | CDEC -121.140, 39.393 |
| Pine Flat Dam | -119.326, 36.832 | CDEC -119.325, 36.833 |
| New Exchequer Dam (McClure) | -120.269, 37.586 | CDEC -120.270, 37.585 |
| Castaic Dam | -118.607, 34.519 | CDEC -118.610, 34.515 |
| Diamond Valley Lake | -117.042, 33.678 | CDEC -117.066, 33.670 |
| O'Shaughnessy Dam | -119.788, 37.947 | CDEC -119.783, 37.950 |
| Pardee Dam | -120.850, 38.257 | CDEC -120.850, 38.250 |
| Iron Gate Dam (former) | -122.435, 41.934 | CDEC -122.436, 41.934 |
| Lewiston Dam | -122.796, 40.725 | CDEC -122.793, 40.727 |
| San Luis Reservoir | -121.081, 37.068 | CDEC -121.133, 37.033 (the dam itself was not confirmed) |
| Jones Pumping Plant | -121.585, 37.797 | none |
| Banks Pumping Plant | -121.621, 37.801 | none |
| Clifton Court Forebay | -121.557, 37.830 | none |

Single source only (Wikipedia): J.C. Boyle Dam -122.048, 42.123; Copco Lake -122.304, 41.979; Lake Pillsbury (Scott Dam) -122.957, 39.407; Van Arsdale Reservoir (Cape Horn Dam) -123.117, 39.386; Potter Valley -123.113, 39.322; Anderson Lake -121.619, 37.171; Sites Reservoir -122.341, 39.355; Maxwell -122.195, 39.277; Hood -121.517, 38.368; Mendota -120.382, 36.754; Corcoran -119.560, 36.098; Tulare Lake -119.788, 36.050; Kern Water Bank -119.267, 35.300; Kern River Oil Field -118.983, 35.456; Five Points (Westlands) -120.103, 36.429; Mono Lake -119.009, 38.017; Hoopa -123.674, 41.050; Klamath town -124.038, 41.526; Weitchpec -123.708, 41.188; Whiskeytown Dam -122.540, 40.599; Edmonston Pumping Plant -118.825, 34.942; Sacramento -121.494, 38.581; Fresno -119.767, 36.750; San Jose -121.891, 37.336; San Francisco -122.416, 37.778; Oakland -122.271, 37.804; Tulare -119.343, 36.207; Salinas -121.656, 36.678; Bakersfield -119.019, 35.373; Stockton -121.293, 37.958; Tracy -121.426, 37.740; Castroville -121.758, 36.766; Los Banos -120.850, 37.058.

## Could not confirm

- **SWP facts:** 4.17 MAF of contracts and the 705-mile system length (search results say "700 miles"). Oroville's 770 ft is [S] only.
- **Delta Conveyance:** cost ($20.1B) and capacity (6,000 cfs) were not seen in any opened document; the bond-validation story is [S] only.
- **Snowpack's ~30% share of supply:** not seen in an opened document. The DWR April release itself is behind the block.
- **Diamond Valley Lake:** capacity and % of average.
- **SFPUC:** 85% of supply, 2.7 million people, 167 miles (site unreachable).
- **Groundwater:** the 1925-77 dating and Mendota location for the 28 ft figure (USGS says "by 1970... as much as 28 feet"); Corcoran-specific subsidence; the ~2 MAF/yr average overdraft; Kern Water Bank storage.
- **Farms:** rice acreage, a dairy cow count from USDA, Salinas Valley seawater intrusion, Westlands contract volume.
- **Cities:** Sacramento and Fresno supply mix, San Jose / Valley Water supply mix, statewide residential gallons per person per day, EBMUD's "90% from the Mokelumne".
- **Klamath and Eel:** the "400+ miles" of reopened habitat; any Yurok or Hoopa Valley specifics; a 2026 salmon count; Potter Valley beyond the search summary.
- **Kern oilfield water:** volumes.
- **May 2026 CVP release:** the 25% figure is [P] from the saved page, but its URL was not recovered.


---

# Part B. Southern California and the Colorado River

## Southern California and the Colorado River: research report (cut short by a usage limit)

Tags: **[P]** = I opened the document and read the number there. **[S]** = seen only in a search summary, or the page returned 403 when I tried to open it. No project files were created or edited; downloads are in `/private/tmp/claude-501/-Users-daytonthorpe-Documents-Claude-blog-az-water-use/a31ff4d1-f35c-47b3-9314-2c00975492cf/scratchpad/dl_ca_b/`.

Sites that blocked both WebFetch and curl (403): iid.com, saltonsea.ca.gov, water.ca.gov, ppic.org, crb.ca.gov, businesswire.com, carlsbaddesal.com, most mwdh2o.com HTML pages. Topics 8 and 9 are therefore thin.

URL shorthand used in the tables:
- **ACC25** = https://www.usbr.gov/lc/region/g4000/4200Rpts/DecreeRpt/2025/2025.pdf (Reclamation accounting report, CY2025, dated May 15, 2026)
- **ACC24** = https://www.usbr.gov/lc/region/g4000/4200Rpts/DecreeRpt/2024/2024.pdf
- **CRS** = https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf
- **DOI** = https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations
- **UWMP** = https://www.ladwp.com/sites/default/files/2026-06/LADWP%202025%20Urban%20Water%20Management%20Plan_Final.pdf
- **MWD21** = https://www.mwdh2o.com/media/ja5k5pcu/cra_fact-sheet-2021.pdf (July 2021 fact sheet)
- **MWD22** = https://www-admin.mwdh2o.com/media/vhgmeiub/2022_district-at-glance.pdf
- **SWB-SS** = https://water.waterboards.ca.gov/board_info/agendas/2026/may/05202026-6staffrpt.pdf (State Water Board staff report, April 2026)

### 1. Colorado River

| Item | Value | Tag | URL |
|---|---|---|---|
| California basic apportionment | 4,400,000 AF/yr ("Basic Apportionment 4,400,000", Table 11) | P | ACC25; CRS |
| 2027-28 federal rules | Lower Basin reductions "of 1.25 million acre-feet in each year of the next two years"; Arizona 760,000, California 440,000, Nevada 50,000 AF "if the Lower Basin States implement their proposed sharing agreement". Guidelines and ROD released 21 Aug 2026 | P | DOI; CRS p. 33 |
| Voluntary conservation on top | DOI: "at least 700,000 acre-feet of water over the two-year period". CRS words it differently: "700,000 AF/year of voluntary system conservation in 2027 and 2028". Use the DOI wording | P (both) | DOI; CRS |
| Possible deeper cuts | If Mead is projected below 1,010 ft, Reclamation consults and "could implement additional shortages up to a total of 3.6 MAF"; cuts beyond 1.25 MAF would follow priority | P | CRS |
| Litigation | Nevada v. Burgum, D. Nev., filed 24 Aug 2026 (CRS footnote 156) | P | CRS |
| QSA 2003 | Before the QSA California used "approximately 5.2 MAF"; the QSA brought it to 4.4 MAF. Signed 10 Oct 2003 by IID, MWD, CVWD | P | CRS |
| IID present perfected right | "Imperial Irrigation District rights to 2.6 MAF" (CRS footnote 43) | P | CRS |
| California total consumptive use 2025 | 3,646,992 AF (diversions 4,064,141) | P | ACC25 Table 5 |
| California total consumptive use 2024 | 3,943,741 AF (diversions 4,378,710) | P | ACC24 Table 5 |
| IID consumptive use | 2025: 2,187,165 AF; 2024: 2,311,905 AF | P | ACC25; ACC24 |
| MWD consumptive use | 2025: 810,401 AF (diverted 812,927 from Lake Havasu); 2024: 957,797 AF | P | ACC25; ACC24 |
| CVWD consumptive use | 2025: 317,762 AF; 2024: 318,380 AF | P | ACC25; ACC24 |
| PVID consumptive use | 2025: 291,223 AF (diverted 636,830 at Palo Verde Dam); 2024: 307,564 AF | P | ACC25; ACC24 |
| Yuma Project Reservation Division | 2025: Bard Water District 11,445 AF + Fort Yuma (Quechan) 17,022 AF, now reported separately; 2024: YPRD total 33,213 AF | P | ACC25; ACC24 |
| Tribal use, California side, 2025 | Fort Mojave 6,715; Chemehuevi 249; Colorado River Indian Reservation 1,826 AF. 2024: 5,899; 237; 1,928 | P | ACC25; ACC24 |
| System conservation left in Lake Mead by California, 2025 | IID 255,300; MWD 242,286; PVID/MWD fallowing 117,021; CVWD 38,889; Quechan/MWD 13,000; MWD/Bard 9,286 AF; plus MWD ICS creation 77,095 | P | ACC25 Tables 11, 18 |
| IID transfers 2025 | To SDCWA 200,000; to CVWD 98,000; to MWD under the 1988 agreement 105,000 (MWD 90,000, CVWD 15,000) | P | ACC25 Table 18 |
| Canal lining water 2025 | All-American 67,700 AF (SDCWA 56,200; San Luis Rey parties 11,500); Coachella 30,850 AF (SDCWA 21,500; San Luis Rey 4,500; CVWD mitigation 4,850). Total MWD exchange with SDCWA 277,700 AF | P | ACC25 Table 18 |
| California ICS in Lake Mead | Total California ICS 1,731,217 AF (2025 report) | P | ACC25 |
| Lake Mead, 8 Nov 2026 | 1,039.66 ft, 6,954 kaf, 27% full; projected end-2026 1,034.52 ft. Powell 3,538.84 ft, 27%. System contents 34% | P | https://www.usbr.gov/lc/region/g4000/weekly.pdf |
| California's 2025 use lowest since 1949 | John Fleck / Inkstain claim, Oct 2025 | S | https://www.inkstain.net/2025/10/californias-2025-use-of-colorado-river-water-is-on-track-to-be-the-lowest-since-1949/ |
| Priority split (3.85 MAF for the four agricultural agencies, 550,000 AF for MWD) | PPIC page returned 403 | S | https://www.ppic.org/blog/unpacking-the-latest-developments-on-the-colorado-river/ |

### 2. IID, Coachella, Palo Verde, Bard

| Item | Value | Tag | URL |
|---|---|---|---|
| All-American Canal System | "80-mile All-American Canal, the 123-mile Coachella Canal"; can irrigate "about 530,000 acres" in Imperial Valley and "about 78,530 acres" in Coachella Valley (older Reclamation project text) | P | https://www.usbr.gov/projects/index.php?id=514 |
| All-American Canal capacity | "design capacity of 15,155 cubic feet per second from the desilting works to Siphon Drop"; official deliveries began October 1940 | P | same |
| IID irrigated area and crops | "half a million acres of alfalfa, grasses, winter vegetables and other crops" (CalMatters, Aug 2026) | P (journalism) | https://calmatters.org/environment/water/2026/08/california-colorado-river-two-year-plan-chaos/ |
| IID 2025 diversion at Imperial Dam | 2,189,521 AF | P | ACC25 |
| IID-Reclamation conservation deal | 2025 system conservation 255,300 AF under an agreement dated 26 Aug 2024. CalMatters: "more than half a billion federal dollars" | P | ACC25; CalMatters |
| IID deal detail | Up to 700,000 AF through 2026, about $589.2M, signed 25 Sep 2024; more than 800,000 AF with the 2023 deal | S | https://mavensnotebook.com/2024/09/27/press-release-iids-colorado-river-agreement-to-raise-lake-mead-by-10-feet/ |
| IID-San Diego transfer | 200,000 AF/yr; initial term through 2047, renewable to 2077; "largest agriculture to urban water transfer in the nation" | P | https://www.sdcwa.org/your-water/imported-water-supplies/colorado-river/ |
| CVWD 2025 diversion at Imperial Dam | 337,717 AF (consumptive use 317,762) | P | ACC25 |
| Salton Sea per CVWD | "approximately 162,000 acres"; 34 miles long | P | https://www.cvwd.org/169/Coachella-Canal |
| PVID size | "about 189 square miles"; "approximately 131,298 acres, 26,798 acres of which are on the Palo Verde Mesa" | P | https://www.pvid.org/ |
| PVID/MWD fallowing 2025 | 117,021 AF of system conservation water | P | ACC25 |
| Bard and Quechan 2025 diversions at Imperial Dam | Bard 25,720 AF; Fort Yuma Reservation 34,579 AF | P | ACC25 |

### 3. Salton Sea

| Item | Value | Tag | URL |
|---|---|---|---|
| Elevation | "243.09 feet below mean sea level" as of 10 Mar 2026 (Pacific Institute figure quoted by the Board); "a drop of approximately 14.6 feet from the 2003 baseline elevation of 228.9 feet below" | P | SWB-SS |
| Area lost and playa | Area reduction "41,800 acres (65 sq. miles)"; "approximately 24,490 acres (38 sq. miles) of net exposed playa"; shrinking "about 2,400 acres ... each year" | P | SWB-SS |
| Salinity | "more than twice as salty as the Pacific Ocean" (no ppt figure found) | P | SWB-SS |
| Inflow source | About 80% of drain water comes from Imperial Valley; sea formed 1905 | P | SWB-SS |
| Phase 1 target | Cumulative 29,800 acres by end of 2028 (21,600 by 2026; 17,600 by 2025), under Water Rights Order 2017-0134 | P | SWB-SS |
| Species Conservation Habitat | "approximately 10,000-acre project"; "completed construction on several ponds (4,910 acres) and two ponds (2,010 acres) have been filled" | P (page undated) | https://projects.saltonsea.ca.gov/Project/Detail/17267 |
| Programme dashboard | Habitat acres counted toward target 13,545: 2,357 completed, 7,643 in construction, 3,545 planned. Dust suppression 4,725: 2,425 completed | P (undated; labels inferred from page order) | https://projects.saltonsea.ca.gov/Results/ProgressDashboard |
| Funding | "over $500 million available in state funding"; $250M federal (IRA) for Salton Sea | P | SDCWA Colorado River page; CRS |

### 4. Colorado River Aqueduct and MWD

| Item | Value | Tag | URL |
|---|---|---|---|
| Length and route | "242 miles from Lake Havasu to Lake Mathews, Riverside" | P | MWD21; MWD22 |
| Construction | "Began 1933, completed in 1939; Regional distribution system operational 1941" (so not "built 1933-1941" strictly) | P | MWD21 |
| Capacity | "About 1.25 million acre-feet annually" (2021 sheet); "1.3 million acre-feet annually", design 1,605 cfs (2022 sheet) | P | MWD21; MWD22 |
| Lift | Whitsett Intake 291 ft, Gene 303, Iron Mountain 144, Eagle Mountain 438, Julian Hinds 441; "Total lift 1,617 feet" | P | MWD22 |
| Structure | 92 miles of tunnels (29), 63 miles of canals, 144 siphons | P | MWD22 |
| Lake Mathews | 182,000 AF; elevation "nearly 1,400 feet" | P | MWD21 |
| MWD | 26 member agencies; 19 million people; six counties; about 5,200 sq mi; incorporated 6 Dec 1928 | P | MWD22 |
| Diamond Valley Lake | 810,000 AF, completed 2000; total MWD reservoir capacity 1,072,000 AF | P | MWD21 |
| Diamond Valley Lake current storage | About 0.78 of 0.81 MAF, 97% (June 2026) | S | search summary only |
| Pure Water Southern California | Up to 150 mgd with LA County Sanitation Districts (2022 sheet). Board votes on it "could come as soon as next year" (CalMatters, Aug 2026) | P | MWD22; CalMatters |
| Pure Water Southern California EIR | Certified 10 Feb 2026 | S | https://www.businesswire.com/news/home/20260210905616/en/ |

### 5. Los Angeles (all LADWP 2025 UWMP unless noted)

| Item | Value | Tag | URL |
|---|---|---|---|
| Supply mix, FY2020/21 to FY2024/25 average | "38 percent from the LAA, 6 percent from local groundwater, 54 percent from MWD, and 2 percent from recycled water" | P | UWMP |
| Calendar 2025 mix | LA Aqueduct 44%, MWD 52%, groundwater 1%, recycled 3% | P | https://dwqr.ladwp.com/2025dwqr/water-sources |
| Population served | "approximately 3.88 million residents" (2025) | P | UWMP |
| Per capita use | 101 GPCD in 2024 (113 in 2021; 106 in 2020) | P | UWMP |
| LA Aqueduct | First aqueduct completed 1913 ($23M bond, 1907); Mono extension 1940; Second aqueduct completed 1970, raising capacity from 485 to 775 cfs | P | UWMP |
| LA Aqueduct deliveries | 5-year average 181,022 AFY; peak 531,729 AF (FY1983/84); "ranges from 10 to 50 percent" of supply | P | UWMP; LADWP news |
| Owens Lake dust water | "remained steady at approximately 60,000 AFY" (62,000 AFY in the allocation breakdown; once exceeded 75,000) | P | UWMP |
| Mono Lake level | 6,382.75 ft on 1 Apr 2026; 9.2 ft below the 6,392 ft mandate; 1941 level 6,417 ft; lowest 6,372 ft | P | https://ladwpnews.com/ladwp-announces-annual-mono-lake-level-reading-taking-final-measurement-with-mono-lake-committee/ ; https://www.monolake.org/wp-content/uploads/2026/07/Lake-level-forecast-report-June-2026-final.pdf |
| Mono export | 2026-27: LADWP plans the maximum 16,000 AF (allowed when the lake is 6,380-6,391 ft); 2025-26 actual 15,900 AF; about 5,000 AF/yr more leaves as tunnel groundwater flow | P | same two |
| Mono forecast | 6,382.24 ft on 1 Apr 2027 (Mono Lake Committee, "Dry-Normal I" year) | P | Mono Lake Committee PDF |
| Stormwater | Goal of 150,000 AF capture capacity; Tujunga Spreading Grounds about 16,000 AFY | P | UWMP |
| Pure Water Los Angeles | Formerly Operation NEXT / Hyperion 2035; up to 210 mgd; "currently in the pre-planning phase" | P | UWMP |
| Groundwater and recycled | Groundwater 28,985 AFY (5-year average; rights about 109,800 AFY); recycled peak 13,241 AF in FY2024/25 | P | UWMP |

### 6. San Diego

| Item | Value | Tag | URL |
|---|---|---|---|
| QSA supplies | 200,000 AF/yr IID transfer + 77,700 AF/yr canal lining (through 2112) = 277,700 AF | P | https://www.sdcwa.org/your-water/imported-water-supplies/colorado-river/ ; ACC25 |
| Carlsbad plant | "more than 50 million gallons ... per day"; up to 56,000 AF/yr, "approximately 10 percent" of regional demand; serves about 400,000; "$1 billion project"; commercial operations late 2015 (December 2015 in the page timeline); 30-year purchase agreement with Poseidon | P | https://www.sdcwa.org/your-water/local-water-supplies/seawater-desalination/ |
| 2025 UWMP | Board adopted; supplies sufficient through 2050; 22 member agencies | P | https://www.sdcwa.org/?p=20578 |
| Pure Water San Diego Phase 1 | City memo of 27 Aug 2026: North City plant shut 28 Aug to 5 Sep 2026 "as the Pure Water project moves towards startup". Not yet delivering as of that memo | P | https://www.sandiego.gov/sites/default/files/2026-08/recycled-water-system-status-update-september-2026.pdf |

### 7. Orange County and statewide reuse

| Item | Value | Tag | URL |
|---|---|---|---|
| GWRS | "world's largest water purification system for indirect potable reuse"; "130 million gallons of water a day"; "1 million people served"; operating since January 2008 | P | https://www.ocwd.com/gwrs/ |
| OC basin | "provides approximately 85% of the water supply for 2.5 million people in north and central Orange County" (MWDOC also says 85%, April 2026) | P | https://www.ocwd.com/about/ |
| Direct potable reuse rules | Board "adopted the DPR regulations on December 19, 2023"; "effective on October 1, 2024" | P | https://www.waterboards.ca.gov/drinking_water/certlic/drinkingwater/direct_potable_reuse.html |
| Recycled water statewide | 733,000 AF in 2025; ocean discharge 1.5M AF; goal 2.5 MAF/yr | P | https://www.waterboards.ca.gov/water_issues/programs/recycled_water/docs/2026/infographic-2025.pdf |
| Doheny desal | 5 mgd; EIR addendum approved 14 May 2026; no confirmed construction start | S | https://ceqanet.lci.ca.gov/2016031038/9 |

### 8. Tribes

| Item | Value | Tag | URL |
|---|---|---|---|
| Agua Caliente | 2017 ruling on federal reserved rights to groundwater; settlement quantifies "20,000 acre-feet per year", reducible by up to 5,000 AF in state-declared shortages; $500M federal trust fund in S. 4368; awaiting Congress (Senate Indian Affairs hearing 29 Jul 2026); reservation 34,000 acres | P | https://www.indian.senate.gov/wp-content/uploads/07.29.26-Testimony-Grubbe.pdf |
| Agua Caliente bills | H.R. 5935 introduced 7 Nov 2025; S. 4368 introduced 22 Apr 2026; agreement dated 19 May 2025 | S | https://cvwd.org/331/Information-About-Agua-Caliente-Lawsuit |
| San Luis Rey bands | "16,000 acre-feet of conserved water per year" from canal lining (11,500 + 4,500 in 2025) | P | SDCWA Colorado River page; ACC25 |
| Quechan | 2025 consumptive use 17,022 AF; 13,000 AF system conservation via MWD plus 820 AF fallowing | P | ACC25 |
| Chemehuevi, Fort Mojave, CRIT (California side) | Actual 2025 use 249; 6,715; 1,826 AF. Entitlements not verified | P (use only) | ACC25 |
| Tule River Tribe | S. 689: 5,828 AF/yr, $568M; reported by committee 12 May 2025 (WebFetch summary of the bill text); not enacted per search | P (summary) / S (status) | https://www.congress.gov/119/bills/s689/BILLS-119s689rs.htm |

### 9. Inland and desert

| Item | Value | Tag | URL |
|---|---|---|---|
| Cadiz | Capital cost "approximately $403.3 million"; contracts announced 28 Jul 2026; WIFIA application for up to $194M; financing not closed (WebFetch summary of the company release) | P (summary) | https://cadizinc.com/cadiz-executes-guaranteed-maximum-price-construction-contracts-for-northern-pipeline-project/ |
| Cadiz right-of-way | BLM grant 10 Jul 2026 | S | https://cadizinc.com/?p=19304 |
| CVWD recycling | "about 3.4 billion gallons of wastewater annually"; basin "is in overdraft" | P | https://www.cvwd.org/160/Groundwater-Replenishment-Imported-Water |

### 10. 2026 conditions

| Item | Value | Tag | URL |
|---|---|---|---|
| SWP allocation 2026 | 10% (1 Dec 2025), 30% (January), 45% (May) | P via MWDOC; DWR page 403 | https://www.mwdoc.com/news-and-events/insights-articles/summer-2026-water-supply-findings-and-outlook/ |
| Snow | No measurable snow at the 1 April 2026 survey, after a record March heatwave; statewide snowpack about 12% of average by mid-May | P | same, and https://www.mwdoc.com/news-and-events/insights-articles/spring-2026-water-supply-findings-and-outlook/ |
| MWD storage | Projected to end 2025 with 3.8 MAF, "matching the district's record set in 2024" (a projection; no 2026 figure found) | P (trade press) | https://www.western-water.com/2025/12/05/metropolitan-highlights-storage-as-california-swp-opens-at-10/ |
| LADWP snow survey | 24% of normal, April 2026 | S | LADWP news |

### Coordinates (lon, lat)

Wikipedia rate-limited the lookup after about ten places, so only the first group has two sources.

Two sources agree (Wikipedia and OpenStreetMap):
- Imperial Dam: -114.465, 32.883
- Parker Dam: -114.140, 34.296 (Whitsett Intake is about 2 miles upstream on the California shore; not found separately)
- Blythe: -114.596, 33.610
- El Centro: -115.567, 32.800 (OSM -115.563, 32.792)
- Calipatria (near Hell's Kitchen): -115.514, 33.126
- Hoover Dam: -114.738, 36.016
- Lake Skinner: -117.057, 33.588
- Cadiz: -115.513, 34.520 (OSM -115.508, 34.512)
- Diamond Valley Lake: -117.042, 33.678 (OSM -117.028, 33.680)
- Lake Mathews: -117.435, 33.840 (OSM -117.372, 33.823; lake centroids differ)
- Lake Havasu: -114.383, 34.483 (OSM -114.291, 34.411; lake centroids differ)
- Pyramid Lake: -118.764, 34.644 (OSM -118.781, 34.665)

Wikipedia only:
- Palo Verde Dam: -114.511, 33.733

OpenStreetMap only (needs a second check):
- Salton Sea: -115.786, 33.317
- Coachella: -116.176, 33.679
- Palm Springs: -116.540, 33.825
- Bard: -114.556, 32.789
- Winterhaven: -114.640, 32.737
- Needles: -114.604, 34.838
- Los Angeles City Hall: -118.243, 34.054
- San Diego: -117.164, 32.716
- Carlsbad Desalination Plant: -117.335, 33.139
- San Vicente Dam: -116.924, 32.913
- GWRS (18700 Ward St, Fountain Valley): -117.946, 33.691
- Doheny State Beach: -117.677, 33.460
- Owens Lake: -117.869, 36.447
- Mono Lake: -118.967, 38.008
- Aberdeen (LA Aqueduct intake area): -118.255, 36.978
- Edmonston Pumping Plant: -118.824, 34.944
- Castaic Lake: -118.587, 34.541
- Lake Perris: -117.176, 33.857
- Iron Mountain Pumping Plant (airport): -115.119, 34.132
- Pechanga Reservation: -117.076, 33.448
- Havasu Lake (Chemehuevi): -114.414, 34.482
- Tule River Reservation: -118.795, 36.026
- Morongo: -116.803, 33.958
- Thermal (Torres Martinez): -116.125, 33.628
- Lancaster: -118.137, 34.698
- Chino: -117.690, 34.013
- Bakersfield: -119.019, 35.374
- Tehachapi: -118.449, 35.132
- Lake Mead: -114.413, 36.213
- Parker, AZ: -114.289, 34.150

Lookup failed or returned the wrong place (do not use): Imperial city, LA Aqueduct Cascades, Brock Reservoir, Hyperion, Gene / Eagle Mountain / Hinds pumping plants, Fort Yuma Reservation.

### Could not confirm
- **Split of the 440,000 AF among California agencies:** no published split found in two searches.
- **Seven-Party priority volumes** (3.85 MAF agricultural, MWD 550,000, CVWD 330,000, IID 3.1 MAF cap): not read in a primary document. Only the IID 2.6 MAF present perfected right is [P].
- **IID from its own site:** acreage, entitlement, crops, canal miles (403). The dollar value and 700,000 AF of the 2024-26 deal are [S].
- **PVID 1877 priority date; Coachella Canal lining details.**
- **Salton Sea:** numeric salinity; the 2026 annual report itself (403); lithium / Hell's Kitchen status.
- **SDCWA supply mix by percentage for 2025/26:** not found. Also the price per AF of Carlsbad water and the San Vicente Dam raise.
- **MWD:** source split, actual end-2025 or 2026 storage, current Diamond Valley Lake storage [S only]; any final Pure Water Southern California approval.
- **LA Aqueduct lengths** (233 / 137 / 338 miles) and the Owens Lake $2.5B cost: not in the pages I opened.
- **Lake Havasu level** in autumn 2026.
- **Orange County:** GWRS 2023 expansion date; Doheny status [S only]; number of operating seawater desal plants statewide.
- **Tribes:** decree entitlements (Chemehuevi 11,340 AF, Fort Mojave, CRIT California side, Quechan); Pechanga 2016; Torres Martinez; Morongo; the count of 109 federally recognized tribes; current floor status of S. 689 and S. 4368.
- **Inland:** Edmonston (1,926 ft lift, power use), Castaic / Perris / Pyramid capacities, Antelope Valley adjudication, Chino desalters, Coachella golf course count, Kern oil water, Tehachapi: not researched.
- **Drought declarations in 2026:** not checked. Whether 45% was the final SWP allocation is unconfirmed.

---

# Part C. Budget arithmetic checked by the chapter author

DWR "Water Plan Water Balance Data", statewide (ST) files for water years 2002-2023 (22 files), https://data.cnra.ca.gov/dataset/water-plan-water-balance-data. I re-summed the rows myself on 12 Nov 2026 [P-calc]:

| Row ("Applied Water Use") | 22-year average, thousand AF |
|---|---|
| Agriculture | 31,265 |
| Urban | 8,071 (of which urban large landscape 789) |
| Wild and Scenic Rivers | 23,681 |
| Instream Flow Requirements | 6,697 |
| Required Delta Outflow | 5,867 |
| Managed Wetlands | 1,452 |
| **Total** | **77,033** |

- Environment = 37,697 (49%); agriculture 41%; urban 10%. Agriculture share of agriculture + urban: 79.5%.
- Supplies, same files: groundwater extraction 15,648 (unadjudicated) + 1,270 (adjudicated) + 99 (banked) = 17,017; Colorado River deliveries 4,634; State Water Project deliveries 2,355; Central Valley Project 3,854 (project) + 3,172 (base).
- Net water use (applied minus reuse): agriculture 27,269; urban 5,719.
- Map budget ("where it comes from"): groundwater 17.0 MAF (22%), Colorado River 4.6 MAF (6%), in-state rivers and streams 55.4 MAF (72%) **by subtraction from the 77.0 total** [derived; said so on the map]. DWR's own supply total is a little larger (about 80 MAF) because it includes water lost in conveyance.
- USGS 2015 comparison (from `west_overview.md`): 25,596 Mgal/d fresh = 28.69 MAF/yr, irrigation 74.2%, public supply 19.9%. That row's "33% / 67%" is surface / ground; 2015 was a deep drought year.

# Part D. Extra checks made while writing the cards (12 Nov 2026)

| Item | Value | Tag | URL |
|---|---|---|---|
| CVP south-of-Delta irrigation, final 2026 | raised from 25% to 28% on 11 Aug 2026; M&I 78% | P | https://www.usbr.gov/newsroom/news-release/5386 |
| CVP May 2026 update | 20% to 25% on 19 May 2026 (read in a saved copy; release is /5338 per search) | P (copy) | https://www.usbr.gov/newsroom/news-release/5338 |
| Sites water right | approved 4 Nov 2026; up to 986,000 AF/yr; November to mid-June | P (saved copy of the release) | https://www.waterboards.ca.gov/press_room/press_releases/2026/pr20261104-state-water-board-approves-water-right-for-sites-reservoir.html |
| Oroville Dam | 770 ft, "tallest in the United States", completed 1968; 2017: about 188,000 evacuated, $1.1B repairs | P | https://www.watereducation.org/aquapedia/oroville-dam |
| Delta | "some 30 million Californians"; "roughly 2.5 million acres"; "some 1,100 miles" of levees; "more than 738,000 acres"; watershed about 40% of the state | P | https://www.watereducation.org/aquapedia/sacramento-san-joaquin-delta |
| Hetch Hetchy regional system | 85% Sierra snowmelt, 15% local watersheds; 2.4 million people; 160 miles, gravity; four counties | P | https://bawsca.org/water/supply/hetchhetchy |
| Santa Clara County | "about 50 percent" imported | P | https://www.valleywater.org/your-water/where-your-water-comes-from |
| Sacramento Valley rice | "500,000 acres of rice fields"; 230 species; 95% of wetlands gone (industry source) | P | https://www.calrice.org/ |
| Kern Water Bank | "can store 1.5 million acre-feet"; 32 square miles (another part of the page says 30) | P | https://www.kwb.org/ |
| Edmonston Pumping Plant | 1,926 ft lift; 14 pumps of 80,000 hp; coordinates 34.9424, -118.8247 | P, secondary source | https://en.wikipedia.org/wiki/Edmonston_Pumping_Plant (DWR's own page is blocked to automated requests; a search summary of it gives the same figures) |
| Delta Conveyance Project | status items and "956,000 acre-feet could have been captured" in WY2025 (DWR's claim) | P | https://www.deltaconveyanceproject.com/ |
| Klamath | "more than 400 stream miles" | P (saved copy) | https://klamathrenewal.org/the-project/ |
| SWP contracts | 4.17 MAF | P (saved copy of CRS R45342) | CRS R45342 |
| California dairy cows | 1.71 million (USDA, Feb 2025) | S | not used |
| Delta Conveyance cost $20.1B, 6,000 cfs, 45 miles | | S | not used |

# Part E. GIS sources (each tested 12 Nov 2026 with plain curl; no key)

| Layer | URL | Used for |
|---|---|---|
| DWR State Water Project centerline | https://utility.arcgis.com/usrsvcs/servers/0c1e0a5ca1ba488ea740fa0d654df4c8/rest/services/Structure/i17_StateWaterProject_Centerline/MapServer/0 | California Aqueduct and branches |
| DWR copy of Reclamation canals | https://utility.arcgis.com/usrsvcs/servers/f4da75bd38564758a7a729ae7c8dc94d/rest/services/InlandWaters/i12_Canals__and_Aqueducts_Federal/MapServer/0 | Delta-Mendota, Friant-Kern, Madera, Tehama-Colusa, Corning, Folsom South, Contra Costa, Coalinga canals; Clear Creek and Pacheco tunnels; San Luis Canal (joint reach of the California Aqueduct); All-American and Coachella canals |
| DWR local canals and aqueducts | https://utility.arcgis.com/usrsvcs/servers/b43dc55d1e1448f2b384ebb8efac9042/rest/services/InlandWaters/i12_Canals_and_Aqueducts_local/MapServer/0 | Colorado River, Los Angeles, Hetch Hetchy, Mokelumne and San Diego aqueducts; 24 irrigation district canals |
| DWR critically overdrafted basins (21) | https://gis.water.ca.gov/arcgis/rest/services/Geoscientific/i08_CriticallyOverdraftedBasins/MapServer/0 | groundwater areas, k "cod"; areas in sq mi |
| DWR Bulletin 118 basins with 2019 priority (515: 46 high, 48 medium, 11 low, 410 very low) | https://gis.water.ca.gov/arcgis/rest/services/Geoscientific/i08_B118_SGMA_2019_Basin_Prioritization/MapServer/1 | other high and medium basins, k "sgma" (those over 60 sq km) |
| DWR hydrologic regions (10) | https://gis.water.ca.gov/arcgis/rest/services/Boundaries/i03_Hydrologic_Regions/MapServer/0 | region outlines |
| OpenStreetMap via Overpass (area ISO3166-2 = US-CA) | https://overpass-api.de/api/interpreter | 58 reservoir outlines, 44 rivers, golf courses (983) |

Lengths measured from the layers agree with the published ones: Delta-Mendota 187 km (117 mi), Friant-Kern 243 km (152 mi), Colorado River Aqueduct 378 km (242 mi published), All-American 123 km (80 mi published for the main canal), Coachella 192 km (123 mi), Hetch Hetchy 271 km, Mokelumne 142 km (90 mi), California Aqueduct main stem 680 km in four pieces (444 mi published).
No line on the California map is a straight line between end points. Not found in OpenStreetMap under the names tried, so not drawn: Camp Far West Reservoir, Englebright Lake, Cuyama River, Carson River. Not drawn at all: the Klamath Project canals (in Oregon), the Los Angeles Aqueduct's Mono Craters tunnel as a separate piece, the proposed Delta tunnel route, Sites Reservoir's outline.

# Part F. Tour (as built)

1 overview budget; 2 snow (winter); 3 Shasta and Oroville; 4 the Delta; 5 Edmonston and the California Aqueduct; 6 Westlands and farm use; 7 groundwater basins and subsidence; 8 Imperial Valley and the Colorado River; 9 Los Angeles's imports; 10 new supplies and what is pending (Sites, Delta tunnel).

# Part G. Figures I am least sure about

1. Budget "rivers and streams" 55.4 MAF is a remainder, not a DWR line item.
2. Kern Water Bank area: the bank's own page says both 30 and 32 square miles; the map uses 32.
3. Edmonston figures rest on Wikipedia (the DWR page could not be opened).
4. Sisk Dam raise (130,000 AF): Reclamation's page may be out of date; the card calls the raise "planned".
5. Salton Sea dashboard numbers (2,357 acres completed, 7,643 under construction) come from an undated page whose labels were inferred from layout.
6. SWP "45%" is the May 2026 allocation; no later change was found, so it is treated as final.
7. Sites cost $6.6B is from an August 2026 draft baseline report (2024 dollars, before contingency).
8. Diamond Valley Lake: 797,895 AF is the latest CDEC value (5 Nov 2026), 98.5% of 810,000 AF; shown as 99%.
9. The Don Pedro ownership sentence (Turlock and Modesto irrigation districts) and the 1983 public trust ruling on the Mono Lake card are general knowledge, not read in a source this session.
10. Subsidence is shown in inches converted from DWR's feet (0.1 ft = "more than an inch"; 0.6 ft = "7 in").

# Used on the map: verification log

## Budget (one measure: applied water, DWR, 2002-2023 average)
Uses: environment 37.7 MAF (49%), farms 31.3 (41%), cities 8.1 (10%); total 77.0. Sources: in-state rivers 55.4 (remainder), groundwater 17.0, Colorado River 4.6. Stated on the map as applied water, with the USGS 2015 withdrawal figure (28.7 MAF) given separately and labelled as a different measure. Range 59 MAF (2022) to 105 MAF (2006).

## [S] figures confirmed before use (and what was opened)
- Oroville Dam 770 ft: Water Education Foundation page (Part D).
- Sites water right 4 Nov 2026 / 986,000 AF: saved copy of the State Water Board release; URL found by search.
- CVP 25% (May): saved copy; then superseded by the 28% August release, which I opened.
- SFPUC "85%": confirmed at BAWSCA (which gives 2.4 million people and 160 miles; those are the figures used, not 2.7 million / 167 miles).
- Kern Water Bank: kwb.org opened (1.5 MAF; 32 sq mi).
- Edmonston 1,926 ft: Wikipedia opened (secondary).
- SWP 4.17 MAF: read in CRS R45342 copy (not shown on the map).

## [S] or unconfirmed figures dropped (not on the map)
Delta Conveyance cost, length and capacity; DWR bond validation story; IID 2024-26 deal dollars and 700,000 AF; California's 2025 use "lowest since 1949"; the 3.85 MAF / 550,000 AF priority split and IID 3.1 MAF cap; split of the 440,000 AF among agencies; Diamond Valley % of average; Pure Water Southern California EIR date; Doheny desalination; Agua Caliente bill numbers; Tule River Tribe settlement; Cadiz; LADWP April snow survey; MWD record storage; dairy cow counts and Tulare County share; Anderson Dam contract value; Iron Gate sonar counts; Potter Valley surrender; Kern Water Bank acres; rice water per acre; Salinas seawater intrusion acres; Sacramento and Fresno supply mixes; statewide gallons per person; LA Aqueduct mileage; Owens Lake cost; tribal decree entitlements; number of federally recognized tribes; water year 2026 precipitation "97%" (source URL not recovered); snowpack's share of supply; average overdraft; Corcoran-specific subsidence rates.

## Current readings not re-opened by the chapter author
All CDEC reservoir readings for 11 Nov 2026, the 31 Oct statewide storage summary, the 1 Apr and 15 May snow figures, the Lake Mead reading, the Salton Sea staff report figures, Reclamation's 2025 Colorado River accounting figures, the LADWP plan figures and the Mono Lake level were read by the two research passes (Parts A and B), not opened a second time by me. I re-derived the budget from the DWR files and opened the pages listed in Part D.

## Coordinates
Dams and reservoirs: Wikipedia coordinates checked against CDEC station metadata (Part A table). Folsom uses the dam (Wikipedia), not the CDEC gauge. Places with a single source (Part A and B lists) were then checked by eye on the rendered map against the baked lake outlines, rivers and built-up areas: Shasta, Oroville, Trinity, Folsom, New Melones, Don Pedro, Millerton, Pine Flat, San Luis, Diamond Valley, Salton Sea, Mono Lake, Imperial Dam, the Delta pumps, Edmonston (at the foot of the Tehachapi crossing on the DWR aqueduct line) Folsom, Owens Lake and the city markers sit on their features. Not individually checked on the render: Castaic, Anderson, Carlsbad, the Orange County plant, Kern Water Bank, the oil field marker and the Quechan marker. Area-type markers (snowpack, rice country, almonds, Imperial Valley, Coachella Valley, Salinas Valley, the sinking valley, probation, Friant-Kern, Los Angeles Aqueduct, San Luis Rey bands) are placed by hand inside the area they describe.
