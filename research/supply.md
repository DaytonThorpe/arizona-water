# Arizona water: SUPPLY-side fact sheet

Compiled 2026-11-11. Every number carries its year and a source URL. "Computed" means I derived the figure from the linked primary dataset (method stated). "Unverified" means I could not confirm it from a source in this session; do not publish those without checking.

Abbreviations: AF = acre-feet, KAF = thousand AF, MAF = million AF, AFY = AF per year, AMA = Active Management Area, INA = Irrigation Non-Expansion Area, CAP = Central Arizona Project, ADWR = Arizona Department of Water Resources, USBR = Bureau of Reclamation, ROD = Record of Decision.

Companion map files saved alongside this file:
- `cap_canal_mainline.geojson`: CAP mainline stitched into one ordered LineString (6,815 points) from CAP's own public layer.
- `adwr_ama_ina.geojson`: ADWR's AMA and INA polygons (11 features, includes Ranegras Plain AMA and Hualapai Valley INA).

---

## 1. Statewide supply

| Item | Value | Year | Source |
|---|---|---|---|
| Total annual water use | about 7.0 MAF | 2017 (ADWR's own public figure is still this old) | https://www.arizonawaterfacts.com/water-your-facts |
| Split by source, as attributed to ADWR | groundwater 41%, Colorado River 36%, in-state rivers 18%, reclaimed 5% | 2020 | https://environment.arizona.edu/news/where-does-our-water-come and https://wrrc.arizona.edu/sites/wrrc.arizona.edu/files/2024-06/Arroyo-2024.pdf |
| Older ADWR budget | Colorado River 2.8 MAF (39.4%), groundwater 2.7 MAF (38.0%), in-state rivers 1.4 MAF (19.7%), reclaimed 0.2 MAF (2.8%); total about 7.1 MAF | 2014 annual report | https://prism.lib.asu.edu/system/files/c16/122420/2014_Annual_Report.pdf |
| ADWR's current phrasing | Colorado River serves "approximately 40 percent" of annual demand | FY2025 annual report | https://www.azwater.gov/sites/default/files/2026-01/2025_ADWR_ANNUAL_REPORT_web_version_0.pdf |
| Actual Colorado River consumptive use by Arizona | 1,909,590 AF (provisional), against a 2.8 MAF entitlement | CY2025 | https://www.usbr.gov/lc/region/g4000/hourly/use_2025.pdf |

Notes:
- The 41/36/18/5 split reached me only through University of Arizona pages that credit "ADWR 2020"; I could not find the split on azwater.gov itself. Treat the attribution as secondhand.
- The splits disagree mainly because the Colorado River share has fallen with shortages. At 1.91 MAF of use in 2025, the Colorado River would be roughly 27% of a 7 MAF total (my arithmetic, not an ADWR figure).
- No ADWR statewide total newer than 2017 was found.

---

## 2. Colorado River

### 2a. Entitlement and how it divides

| Item | Value | Source |
|---|---|---|
| Arizona Lower Basin apportionment | 2.8 MAF/yr (plus 50,000 AF Upper Basin) | https://www.azwater.gov/crm/colorado-river-allocation ; https://www.everycrsreport.com/files/2026-10-01_R45546_bf1a38985da0c527a52e6fc0e5df2b533fff3b3e.html |
| Division | "approximately one-half" to mainstream (on-river) users, one-half to CAP | https://www.azwater.gov/crm/colorado-river-allocation |
| Priority order | P1 present perfected rights; P2 and P3 pre-30 Sep 1968 federal reservations and contracts (co-equal); P4 post-1968 contracts (CAP is mostly P4); P5 unused entitlement; P6 surplus | same |
| CAP long-term pools | Indian P3 settlement water 68,400 AF; P4 Indian 343,079 AF plus M&I 638,823 AF (981,902 AF through 2043); Non-Indian Agricultural (NIA) pool 364,698 AF | same |
| Colorado River Indian Tribes (CRIT), Arizona decreed diversion right | 662,402 AF/yr (358,400 + 252,016 + 51,986), priority dates 1865 to 1874 | https://www.usbr.gov/lc/region/g4000/contracts/entitlements/Entitlements_AZ_Priority_1.pdf |
| Yuma County Water Users' Association, P1 entitlement | 254,200 AF/yr consumptive use, 1901 priority | same |

Actual consumptive use, CY2025, provisional (USBR, https://www.usbr.gov/lc/region/g4000/hourly/use_2025.pdf):

| User | Consumptive use (AF) |
|---|---|
| Arizona total | 1,909,590 |
| CAP (Central Arizona Water Conservation District) | 906,711 |
| CRIT (Arizona) | 330,472 (diversion 527,539) |
| Wellton-Mohawk Irrigation and Drainage District | 241,396 |
| Yuma County Water Users' Association | 209,233 |
| Yuma Mesa district | 54,575 |
| Fort Mojave Indian Reservation (AZ) | 37,981 |
| Yuma Irrigation District | 32,700 |
| Unit B district | 12,692 |
| North Gila Valley district | 9,379 |

### 2b. CAP deliveries (CAP "Deliveries by Rate" reports)

| Year | Delivered (AF) | Source |
|---|---|---|
| 2023 | 774,305 | https://library.cap-az.com/documents/departments/water-operations/year-to-date-by-contract-type-2023.pdf |
| 2024 | 858,648 | https://library.cap-az.com/documents/departments/water-operations/year-to-date-by-contract-type-2024.pdf |
| 2025 | 871,797 (Federal/tribal 323,497; M&I subcontract 546,317) | https://library.cap-az.com/documents/departments/water-operations/year-to-date-by-contract-type-2025.pdf |
| 2026 | 697,174 delivered Jan to Sep; 846,121 scheduled for the year (report run 2 Nov 2026) | https://library.cap-az.com/documents/departments/water-operations/year-to-date-by-contract-type-2026.pdf |

- CAP's "normal" supply is described as about 1.5 to 1.6 MAF/yr ("when fully used, CAP delivers an average of 1.5 MAF"): https://www.arizonawaterfacts.com/water-your-facts

### 2c. Shortage tiers through 2026 (2007 Interim Guidelines plus 2019 Drought Contingency Plan)

| Tier | Lake Mead elevation trigger (1 Jan projection) | Arizona total reduction |
|---|---|---|
| Tier Zero | below 1,090 ft | 192,000 AF |
| Tier 1 | below 1,075 ft | 512,000 AF |
| Tier 2a | below 1,050 ft | 592,000 AF |
| Tier 2b | below 1,045 ft | 640,000 AF |
| Tier 3 | below 1,025 ft | 720,000 AF |

Source: CAP DCP fact sheet, May 2025: https://library.cap-az.com/documents/departments/planning/colorado-river-programs/CAP-FactSheet-DCP-May2025.pdf. Tier Zero and Tier 1 volumes also in https://www.azwater.gov/sites/default/files/2022-07/CAP-FactSheet-CoRiverShortage-042721.pdf.

- The split of each total into "2007 Guidelines" vs "DCP" components (commonly given as 320/400/480 KAF plus 192/240 KAF) is **unverified** here.
- Tier 1 equals about 30% of CAP's normal supply, 18% of Arizona's Colorado River supply, under 8% of total state use (same ADWR-hosted fact sheet).
- These rules expire at the end of 2026.

### 2d. What is in effect for 2026 and 2027

| Year | Condition | Arizona reduction | Source |
|---|---|---|---|
| 2026 | Tier 1 shortage (set by the August 2025 24-Month Study) | 512,000 AF | https://library.cap-az.com/documents/factsheets/CAP-FactSheet-Apr2026.pdf |
| 2027 | "Shortage condition" under the new 2027-2028 Operating Guidelines (August 2026 24-Month Study, released 21 Aug 2026). No tier label. Lower Basin cut 1.25 MAF | 760,000 AF if the Lower Basin sharing agreement is implemented (California 440,000; Nevada 50,000) | https://www.usbr.gov/newsroom/news-release/5392 |
| 2028 | Same | 760,000 AF | https://library.cap-az.com/documents/public-information/2026-08-24-ARC-Meeting.pdf |

- 760 KAF is larger than the old Tier 3 (720 KAF).
- On top of the cuts, the Lower Basin "700+ Plan" adds at least 700 KAF of voluntary conservation over 2026 to 2028 (Arizona 300 KAF, California 300 KAF, Nevada 100 KAF). Total reductions plus conservation through 2028: 3.2 MAF, of which Arizona 1.82 MAF (CAP/ADWR ARC slides, link above).
- Lake Powell for water year 2027: "Lower Elevation Infrastructure Protection Range"; release 6.0 to 7.0 MAF (vs the historical 8.23 MAF minimum objective), managed to hold Powell at or above 3,510 ft; final volume set April 2027 (USBR release above).
- August 2026 24-Month Study projections: Mead end of CY2027 at 1,011.6 ft (6.0 MAF Powell release) or 1,023.2 ft (7.0 MAF); minimum-probable 999.9 ft. Mead could drop below 1,010 ft as early as June 2027 with a 6.0 MAF release (ARC slides).
- Later update: Reclamation's 8 Nov 2026 weekly report (October 24-Month Study) projects Mead at 1,034.52 ft at end of CY2026, and the WY2027 Powell inflow forecast jumped to 10.01 MAF (104% of normal) from 7.8 MAF after the fall storms: https://www.usbr.gov/lc/region/g4000/weekly.pdf

Preliminary effect inside Arizona in 2027-2028 (ARC slides, "for illustrative purposes only"):
- CAP agricultural pool and NIA-priority pool cut 100%.
- CAP M&I-priority (city) water cut about 14%; CAP Indian-priority cut about 10%. This is the first cut ever to reach the city and tribal priority pools.
- CAP is seeking offsets: 20 KAF/yr from Yuma wells, 40 KAF/yr from Lake Pleasant.
- For the first time, part of the cut is expected to fall on on-river P4 users (2020 to 2026 cuts fell only on CAP); the on-river share is still "TBD".

### 2e. Post-2026 guidelines: current status (as of 11 Nov 2026)

| Date | Event | Source |
|---|---|---|
| Jun 2023 | NEPA process starts | https://www.usbr.gov/newsroom/news-release/5392 |
| Jan 2026 | Draft EIS published | https://library.cap-az.com/documents/public-information/2026-08-24-ARC-Meeting.pdf |
| 1 May 2026 | Arizona, California, Nevada submit a 2-year Lower Basin proposal | https://www.azwater.gov/sites/default/files/2026-05/2026.05.01%20LB2YearPlanFINAL.pdf |
| 31 Jul 2026 | Final EIS, with a "Decision Framework" preferred alternative | USBR release |
| 21 Aug 2026 | Interior Secretary Burgum signs the ROD and the 2027-2028 Operating Guidelines | USBR release |
| 24 Aug 2026 | Nevada (state, Colorado River Commission, Southern Nevada Water Authority) sues Interior to set aside the ROD | https://www.gov.nv.gov/press-releases/nevada-files-lawsuit-against-department-of-the-interior-over-colorado-river-operations-record-of-decision/ |
| 16 Oct 2026 | Arizona (Gov. Hobbs and ADWR) moves to intervene in Nevada's suit | https://azgovernor.gov/office-arizona-governor/news/2026/10/governor-katie-hobbs-and-adwr-join-nevada-colorado-river |

- **No seven-state deal.** The ROD says so itself: "basin-wide consensus on long-term operations has not been reached" (ARC slides).
- **What the ROD decided:** a 10-year decision framework through 2036, with operating guidelines adopted in 2-year blocks. The process for 2029-2030 starts no later than October 2027.
- **Framework sideboards** (ARC slides):
  - Lower Basin shortages up to 3.0 MAF/yr, not counting Mexico, allocated by federal reading of priority.
  - Powell releases anywhere from 5.0 to 12.0 MAF.
  - Consultation triggers at Mead 1,010 ft and Powell 3,500 ft.
  - No mandatory Upper Basin cuts; voluntary Upper Basin contributions up to 200 KAF/yr; possible releases of up to 1 MAF from upstream federal reservoirs (Flaming Gorge, Aspinall, Navajo).
  - A federally managed pool in Mead for tribal firming.
- **Arizona's position:** accepts the 2-year numbers but objects to the 10-year framework as inconsistent with the Colorado River Compact, and "does not consent" to the 3.0 MAF authority (ARC slides). Gov. Hobbs called a 77% cut scenario "an unacceptable disaster" (https://www.western-water.com/2026/08/21/the-decision-colorado-river-gets-2-year-plan-amid-record-lows/). CAP's board has reportedly also moved to join the suit (headline only, not read: https://smartwatermagazine.com/news/smart-water-magazine/central-arizona-project-moves-to-join-nevada-lawsuit-over-colorado-river-cuts).
- **Still unfinished:** the Lower Basin implementation agreement that makes the 760/440/50 split binding was not final as of 16 Oct 2026 ("remains a priority", governor's release). The ARC slides list Arizona legislative authorization, an intra-Arizona storage framework, and Minute 334 with Mexico as pending. If the agreement is not executed, the Secretary sets each state's share "in accordance with applicable law". I found no report of signing as of 11 Nov 2026.
- **Discrepancy:** the Congressional Research Service (1 Oct 2026) describes the maximum as up to 3.6 MAF/yr, vs 3.0 MAF "not including Mexico" in the Arizona slides. The difference is probably Mexico's share, but I did not confirm: https://www.everycrsreport.com/files/2026-10-01_R45546_bf1a38985da0c527a52e6fc0e5df2b533fff3b3e.html

---

## 3. Reservoirs

Current values are provisional operational data.

### 3a. Colorado River mainstem (USBR daily report, 10 Nov 2026: https://www.usbr.gov/lc/region/g4000/hourly/levels.html)

| Reservoir (dam) | Capacity (AF) | Full-pool elev. | Storage 10 Nov 2026 | % full | Current elev. | Dam lat, lon |
|---|---|---|---|---|---|---|
| Lake Powell (Glen Canyon) | 23,314,000 live | 3,700.0 ft | 6,405,000 AF | 27% | 3,539.30 ft | 36.9375, -111.4844 |
| Lake Mead (Hoover) | 26,120,000 (to bottom of flood-control space) | 1,219.6 ft | 6,992,000 AF | 27% | 1,040.21 ft | 36.0156, -114.7378 |
| Lake Mohave (Davis) | 1,873,648 "available capacity" (NRCS lists 1,810,000) | 647.0 ft | 1,658,800 AF | 89% (92% on the NRCS capacity) | 639.40 ft | 35.1988, -114.5695 |
| Lake Havasu (Parker) | 570,253 "available capacity" (NRCS lists 619,000) | 450.0 ft | 528,700 AF | 93% (85% on the NRCS capacity) | 447.86 ft | 34.2964, -114.1397 |

- Percent full is computed from the same report (Reclamation's weekly report also gives 27% for both big reservoirs on 8 Nov 2026).
- NRCS capacities: https://wcc.sc.egov.usda.gov/awdbRestApi/services/v1/stations?stationTriplets=*:AZ:BOR&elements=RESC&returnReservoirMetadata=true
- Total Colorado system contents: 19.925 MAF, 34% of capacity, on 8 Nov 2026 (37% a year earlier): https://www.usbr.gov/lc/region/g4000/weekly.pdf

Record lows (computed from USBR daily elevation files; provisional):

| Reservoir | New record low | Previous record low | Data |
|---|---|---|---|
| Lake Mead | 1,037.16 ft on 22 Oct 2026 | 1,040.58 ft on 28 Jul 2022 | https://www.usbr.gov/uc/water/hydrodata/reservoir_data/921/csv/49.csv |
| Lake Powell (since filling) | 3,516.62 ft on 15 Sep 2026 | 3,519.92 ft on 13 Apr 2023 | https://www.usbr.gov/uc/water/hydrodata/reservoir_data/919/csv/49.csv |

- News coverage dated the first record-breaking days as 7 Aug 2026 (Mead, 1,040.50 ft) and 15-16 Aug 2026 (Powell, 3,519.91 ft); both lakes kept falling afterward: https://www.pbs.org/newshour/nation/lake-powell-hits-record-low
- Highest levels on record, same files: Mead 1,225.83 ft (24 Jul 1983); Powell 3,708.34 ft (14 Jul 1983).
- Powell rose about 23 ft between 15 Sep and 10 Nov 2026 after fall storms (same file).

### 3b. Salt River Project reservoirs (SRP daily water report, retrieved 11 Nov 2026: https://streamflow.watershedconnection.com/Dwr)

Capacity is computed as current storage plus the "available" space SRP lists. The page did not print its report date.

| Lake (dam) | River | Capacity (AF) | Storage (AF) | % full | Dam lat, lon |
|---|---|---|---|---|---|
| Roosevelt (Theodore Roosevelt) | Salt | 1,631,532 | 1,060,728 | 65% | 33.6717, -111.1611 |
| Apache (Horse Mesa) | Salt | 245,138 | 230,573 | 94% | 33.5908, -111.3439 |
| Canyon (Mormon Flat) | Salt | 57,852 | 16,859 | 29% (planned drawdown, fall 2026 to winter 2027) | 33.5533, -111.4433 |
| Saguaro (Stewart Mountain) | Salt | 69,765 | 67,737 | 97% | 33.5667, -111.5356 |
| Horseshoe | Verde | 109,217 | 79,685 | 73% | 33.9834, -111.7085 |
| Bartlett | Verde | 178,186 | 172,091 | 97% | 33.8181, -111.6317 |
| Salt system | | 2,004,287 | 1,375,897 | 69% | |
| Verde system | | 287,403 | 251,776 | 88% | |
| SRP total | | 2,291,690 | 1,627,673 | 71% | |

- SRP storage jumped from 53% on 1 Nov to 70% on 6 Nov 2026 (about +370,000 AF) after record fall storms; peak inflow to Roosevelt was about 145,000 cfs: https://www.azfamily.com/2026/11/06/historic-arizona-fall-rain-fills-srp-reservoirs-70/
- Canyon Lake drawdown is scheduled maintenance: https://www.azwater.gov/sites/default/files/2026-06/20260514_Drought_ICGmeeting_SRPupdate.pdf

### 3c. Other reservoirs

| Reservoir (dam) | Capacity (AF) | Most recent storage | Dam lat, lon | Sources |
|---|---|---|---|---|
| Lake Pleasant (New Waddell), CAP storage on the Agua Fria | 811,784 operational | **Unverified.** CAP publishes only a forecast graph | 33.8469, -112.2661 | https://library.cap-az.com/documents/factsheets/CAP-FactSheet-New-Waddell-Dam.pdf ; https://www.cap-az.com/cap-system/water-operations/lake-pleasant/ |
| San Carlos (Coolidge), Gila River | 875,000 | 168,900 AF on 10 Nov 2026 (19%) | 33.1747, -110.5279 | https://waterservices.usgs.gov/nwis/dv/?format=rdb&sites=09469000&period=P5D |
| Alamo Lake (Alamo), Bill Williams River | 995,300 gross at spillway crest (1,265 ft); mostly flood-control space. The National Inventory of Dams lists 1,409,000 | **Unverified** | 34.2321, -113.6022 | https://www.cbrfc.noaa.gov/present/crfs/2017spring/ArmyCorps.pdf ; live data: https://resreg.spl.usace.army.mil/ |

- San Carlos was effectively empty in summer 2026: monthly storage 254 AF (June) and 186 AF (July), then 56,260 AF by 31 Oct and 168,900 AF by 10 Nov (NRCS: https://wcc.sc.egov.usda.gov/awdbRestApi/services/v1/data?stationTriplets=09469000:AZ:BOR&elements=RESC&duration=MONTHLY&beginDate=2026-06-01&endDate=2026-11-11).
- A maximum Lake Pleasant capacity of 1,108,600 AF appears on Wikipedia; not checked against Reclamation.

Coordinate sources: Wikipedia article coordinates for Glen Canyon, Hoover, Davis, Parker, Roosevelt, Horse Mesa, Stewart Mountain, Bartlett, New Waddell, Coolidge; OpenStreetMap (Nominatim) for Mormon Flat, Horseshoe, Alamo. Other map points: Granite Reef Diversion Dam 33.5158, -111.6915; Mark Wilmer Pumping Plant 34.2889, -114.1036; Imperial Dam 32.883, -114.465; Headgate Rock Dam (CRIT diversion) 34.1684, -114.2771; Painted Rock Dam 33.0728, -113.0156.

---

## 4. CAP canal

| Fact | Value | Source |
|---|---|---|
| Length | 336 miles, Lake Havasu to a terminus southwest of Tucson | https://library.cap-az.com/documents/factsheets/CAP-FactSheet-Apr2026.pdf |
| Segments | Hayden-Rhodes Aqueduct (about 190 mi including siphons and tunnels), Fannin-McFarland (about 58 mi), Tucson Aqueduct (87 mi) | https://www.usbr.gov/projects/index.php?id=504 |
| Total lift | "approximately 3,000 feet" (CAP also says "more than 2,900 feet"). First lift at Mark Wilmer: about 824 ft with six 66,000 hp pumps | https://library.cap-az.com/documents/factsheets/cap-power-portfolio-fact-sheet.pdf ; https://www.cap-az.com/about/history-of-cap/ |
| Pumping plants | 15 per the 2026 fact sheet and history page (14 per older CAP sheets); 4 tunnels, 10 siphons, 39 radial gates, 50+ turnouts | CAP fact sheet Apr 2026 |
| Capacity | 3,000 cfs maximum at the head; 2,750 falling to 2,250 cfs on Fannin-McFarland; 2,250 falling to 200 cfs at the Tucson terminus | USBR project page |
| Pumping energy | "One of the largest end users of electric energy in the state"; energy cost $60 to $80 million/yr. Annual MWh: **unverified** (2.5 to 2.8 million MWh appears only in secondary sources) | CAP power fact sheet |
| Power sources | 50-60% market forward purchases, 20% short-term market, 12-15% SRP contract, 6% Hoover, 5% solar. Navajo Generating Station, the original source, closed in 2019 | CAP power fact sheet (Oct 2024) |
| Cost | "More than $4 billion"; repayment obligation $1.646 billion, payments 1994 to 2045 | history page; CAP fact sheet |
| Timeline | Authorized 1968 (Colorado River Basin Project Act); construction began 1973 at Lake Havasu; deliveries began 1985; backbone aqueduct declared substantially complete 1993 | history page; fact sheet; USBR page |
| Storage | Lake Pleasant, connected by the 4.9-mile Waddell Canal | New Waddell fact sheet |
| Slope | About 5 inches per mile; includes the 7-mile Buckskin Mountain Tunnel | history page |
| Service area | Maricopa, Pinal, Pima counties (over 80% of state population) | CAP fact sheet |

### GIS layer
- **CAP's own public canal centerline** (owner account "Central_Arizona_Project", 76 segments typed as open canal, siphon, tunnel, pipeline): https://services1.arcgis.com/osPHyJW29upTLmlM/arcgis/rest/services/CAP_Canal/FeatureServer/0
- GeoJSON query: `https://services1.arcgis.com/osPHyJW29upTLmlM/arcgis/rest/services/CAP_Canal/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson`
- The same account publishes "Aqueduct_Reach", "CAP_Trail" and "Colorado_River_Basin_Canals" services. License terms were not checked.

### Waypoints (25 points)
Computed by stitching the "Central Arizona Project Canal" and "Pima Mine Rd Recharge" segments of the layer above end to end, starting at the Lake Havasu intake, and sampling at equal distance. The stitched line measures 342 miles, slightly more than the official 336, because it includes the short spur to the Pima Mine Road recharge site. The Waddell Canal to Lake Pleasant and the Tucson Pipeline branch are not included.

| # | Mile | Lat | Lon | Note |
|---|---|---|---|---|
| 0 | 0 | 34.2887 | -114.1041 | Mark Wilmer Pumping Plant, Lake Havasu |
| 1 | 16 | 34.0833 | -114.0015 | |
| 2 | 30 | 33.9210 | -113.8639 | |
| 3 | 43 | 33.7780 | -113.7974 | |
| 4 | 58 | 33.6154 | -113.6503 | |
| 5 | 73 | 33.5645 | -113.4230 | |
| 6 | 86 | 33.5864 | -113.2010 | |
| 7 | 101 | 33.5659 | -112.9849 | |
| 8 | 114 | 33.6102 | -112.7777 | |
| 9 | 129 | 33.6974 | -112.5640 | |
| 10 | 143 | 33.7684 | -112.3519 | near the Waddell Canal / Lake Pleasant junction |
| 11 | 157 | 33.7423 | -112.1331 | north Phoenix |
| 12 | 171 | 33.6426 | -111.9441 | Scottsdale |
| 13 | 185 | 33.5435 | -111.7444 | near Granite Reef / Salt River crossing |
| 14 | 200 | 33.4087 | -111.6082 | east Mesa |
| 15 | 214 | 33.2321 | -111.5061 | |
| 16 | 228 | 33.0789 | -111.3766 | |
| 17 | 244 | 32.9555 | -111.4265 | |
| 18 | 257 | 32.7823 | -111.4063 | |
| 19 | 272 | 32.6435 | -111.3390 | |
| 20 | 285 | 32.5029 | -111.2338 | |
| 21 | 300 | 32.3651 | -111.2112 | |
| 22 | 314 | 32.2085 | -111.1874 | west of Tucson |
| 23 | 329 | 32.0627 | -111.0890 | |
| 24 | 342 | 31.9990 | -110.9928 | Pima Mine Road recharge, south of Tucson |

The place-name notes are my approximate labels, not from the layer.

---

## 5. SRP system

| Fact | Value | Year | Source |
|---|---|---|---|
| Watershed (Salt, Verde, East Clear Creek) | 13,000 square miles | current | https://www.srpnet.com/about/about-srp |
| Reservoirs | 7 reservoirs, 8 dams | | https://www.amwua.org/blog/salt-river-bringing-life-to-a-desert-valley |
| Storage capacity | 2,291,690 AF across the six Salt and Verde lakes (computed from SRP's daily report). SRP's statistics page lists 2,306,690 AF | Nov 2026; 2022 | https://streamflow.watershedconnection.com/Dwr ; https://srpnet.com/about/financial-data-company-stats |
| Annual deliveries | about 244 billion gallons (roughly 750,000 AF, my conversion); 756,780 AF reported for 2022; "about 800,000 AF" in SRP media | current; 2022 | same two SRP pages |
| Canals | 131 miles | | AMWUA link above |
| SRP groundwater pumping | 225,000 AF | 2026 | https://www.azwater.gov/sites/default/files/2026-06/20260514_Drought_ICGmeeting_SRPupdate.pdf |
| Granite Reef Diversion Dam | 33.5158, -111.6915. About 4 miles below the Salt-Verde confluence, 22 miles east of Phoenix, completed 1908. Diverts all normal flow into the Arizona Canal (north) and South Canal; stores no water | | https://usbr.gov/projects/index.php?id=395 |

- The 2022 storage and delivery figures and the 131-mile figure came from search-result excerpts of the SRP and AMWUA pages, not a full read.
- A "4 million AF" SRP capacity figure in trade press appears to count Roosevelt's flood-control space; treat it as a different measure.

Recent inflows (SRP hydrologist's briefing to ADWR, 14 May 2026, link above):
- Water year 2025 reservoir inflow: 205,083 AF, 30% of median, the lowest on record; storage fell from 76% to 53%.
- Jan to May 2025 streamflow of 97,000 AF was a record low (records from 1913).
- Water year 2026 through 30 Apr: 335,000 AF (74% of median), most of it from a wet fall 2025.

---

## 6. Groundwater

### 6a. Law and basics

| Fact | Detail | Source |
|---|---|---|
| 1980 Groundwater Management Act | Created ADWR, four initial AMAs (Prescott, Phoenix, Pinal, Tucson) and two INAs (Douglas, Joseph City); AMAs get management plans with mandatory conservation; created the Assured Water Supply program | https://www.azwater.gov/sites/default/files/2026-01/2025_ADWR_ANNUAL_REPORT_web_version_0.pdf |
| Safe-yield definition | "Accomplished when no more groundwater is being withdrawn than is being replaced annually"; statutory goal date was 2025 for Phoenix, Prescott, Tucson | https://www.azwater.gov/ama |
| Has safe-yield been reached? | No. ADWR's 2022 report: as of 2019 the Prescott, Phoenix, Pinal and Santa Cruz AMAs are in long-term overdraft; Tucson is in long-term balance but faces "significant obstacles". "It is unlikely that safe-yield will be met and thereafter maintained in any AMA where that is the goal" | https://www.azwater.gov/sites/default/files/media/ManagementGoalsReport2022_0.pdf |
| Annual overdraft, statewide | **Unverified.** I found no single ADWR statewide figure. Willcox basin alone: 108,426 AFY (ADWR 2022 model) | https://azwater.gov/sites/default/files/2025-04/2025.04.08.WillcoxAMAGoalWorkshop.pdf |
| 100-year Assured Water Supply rule | New subdivisions (6 or more lots) in an AMA need a Certificate, or service from a provider with a Designation, showing a 100-year supply that is physically, continuously and legally available, of adequate quality, financially feasible, and consistent with the management goal. Outside AMAs an "Adequate" program applies (5 of the 6 criteria; inadequacy must be disclosed) | https://www.azwater.gov/aaws ; https://morrisoninstitute.asu.edu/sites/default/files/kyl_center_phoenix_ama_groundwater_model_explainer_062023.pdf |
| Year the AWS rules were adopted (often given as 1995) | **Unverified** in this session | |

### 6b. AMAs and INAs (boundaries as of ADWR's current layer)

| Area | Type | Designated | How | Goal |
|---|---|---|---|---|
| Phoenix | AMA | 1980 | Act | Safe-yield by 2025 |
| Tucson | AMA | 1980 | Act | Safe-yield by 2025 |
| Prescott | AMA | 1980 | Act | Safe-yield by 2025 |
| Pinal | AMA | 1980 | Act | Preserve the agricultural economy as long as feasible while preserving groundwater for future non-irrigation use |
| Santa Cruz | AMA | split from Tucson AMA; year (commonly 1994) **unverified** here | Legislature | Maintain safe-yield and prevent long-term water-table decline |
| Douglas | AMA | 1 Dec 2022 (replaced the 1980 Douglas INA) | Local petition and election | Not stated on ADWR page |
| Willcox | AMA | Order 19 Dec 2024; legal designation date 8 Jan 2025 | First director-designated AMA | Draft: cut overdraft at least 50% by 2075; hearing 16 Nov 2026 |
| Ranegras Plain (La Paz and Yuma counties) | AMA | Order 9 Jan 2026 | Director-designated; 8th AMA | Draft (5 Mar 2026): cut overdraft 50% in 50 years |
| Joseph City | INA | 1980 | Act | No new irrigated acres |
| Harquahala | INA | 1981 (one source cites a June 1982 order) | Director | No new irrigated acres |
| Hualapai Valley | INA | 19 Dec 2022 | Director | No new irrigated acres |
| Gila Bend basin | none | Informal ADWR meeting 30 Jan 2024; no decision found | | |

Sources: https://www.azwater.gov/ama ; ADWR FY2025 annual report (link above) ; Willcox https://www.azwater.gov/node/5934 ; Ranegras https://www.azwater.gov/node/6223 and https://wrrc.arizona.edu/news/ranegras-plain-becomes-arizonas-8th-ama ; Douglas https://www.azwater.gov/sites/default/files/2024-06/DAMA_FactSheet_6-2024.pdf ; Gila Bend https://www.azwater.gov/proposed-gila-bend-groundwater-basin-ama

- ADWR notes the December 2022 changes were the first change to the AMA/INA footprint since 1981.
- Ranegras rules: only acres irrigated in the five years before 5 Nov 2025 may be irrigated; grandfathered-right applications due 4 May 2027.

Boundary data:
- **ADWR FeatureServer** (owner "ADWR GIS Admin"; 11 polygons with `BASIN_NAME`): https://services.arcgis.com/C34zQ7veRS0V1t04/arcgis/rest/services/AMA_INA_2024/FeatureServer/0
- GeoJSON query: `.../FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson`
- ADWR groundwater basins: https://services.arcgis.com/C34zQ7veRS0V1t04/arcgis/rest/services/Groundwater_Basin_2024/FeatureServer
- ADWR GIS portal: https://www.azwater.gov/gis-data-and-maps ; PDF map: https://www.azwater.gov/sites/default/files/2026-06/AMAs_and_INAs.pdf
- Kyl Center (ASU) copies: https://services3.arcgis.com/0OPQIK59PJJqLK0A/arcgis/rest/services/Active_Management_Areas_Updated/FeatureServer and `.../INAs_Updated/FeatureServer`
- ADWR subsidence map: https://azwatermaps.azwater.gov/subsidence-map/

### 6c. Phoenix AMA model, the moratorium, and the workarounds

| Item | Detail | Source |
|---|---|---|
| Model release | June 2023 (1 June) | https://www.azwater.gov/phoenix-ama-groundwater-supply-updates |
| Result | 4.86 MAF of unmet groundwater demand over 100 years (to 2121), about 4% of projected groundwater demand | ADWR page; Kyl Center explainer (link above); https://azwaterblueprint.asu.edu/news/new-phoenix-ama-model-shows-limits-groundwater-assured-water-supply |
| Consequence | ADWR will not approve new Assured Water Supply determinations based on groundwater in the Phoenix AMA. Existing certificates and designations are unaffected; 15 designated providers, including Phoenix and all the AMA's large cities, keep growing on existing designations | ADWR page; Kyl explainer |
| Model updates | 2024 update still does not support new groundwater-based determinations; a 2026 "Version 3" update exists | ADWR page |
| ADAWS (Alternative Designation of Assured Water Supply) | Rules adopted in FY2025; a path for water providers to get a designation while cutting groundwater reliance. Three applications under review at mid-2025, which would be the first new Phoenix AMA designations in over 20 years | ADWR FY2025 annual report |
| "Ag-to-Urban" law (SB 1611) | Signed 30 Jun 2025. Voluntary, Phoenix and Pinal AMAs: retire irrigated farmland and convert its groundwater right into credits for housing. Credits per retired acre: 150 AF (Phoenix), 100 AF (Pinal). No new credits after 1 Jan 2036 unless extended. Rules due by 30 Jun 2026 | https://www.azleg.gov/legtext/57leg/1R/summary/S.1611NR_ASPASSEDCOW.DOCX.htm ; https://www.courthousenews.com/arizona-approves-ag-to-urban-water-conservation-plan/ |
| Court ruling (contested, moving) | 21 Apr 2026: Maricopa County Superior Court (Judge Blaney) ruled in the home builders' suit that ADWR's "AMA-wide unmet demand" and "AMA-wide depth-to-water" standards were adopted without proper rulemaking, and enjoined ADWR from relying on them for certificates. Procedural, not a ruling on the hydrology. ADWR said it would challenge the decision | https://www.gblaw.com/legal-alert-the-superior-court-granted-hbacas-motion-for-summary-judgment-in-the-homebuilders-lawsuit-against-adwr/ |

- An updated-model unmet-demand figure of 3.6 MAF appears in an AMWUA post; ADWR's page still shows 4.86 MAF. Not reconciled.
- The court ruling details come from law-firm and secondary summaries surfaced by search; I did not read the order. Appeal status and a reported June 2026 ruling voiding part of the ADAWS rule are **unverified**.

### 6d. Declines, subsidence, fissures

| Basin | Numbers | Source |
|---|---|---|
| Statewide | Over 3,400 square miles of subsidence across 26+ features (2017 article); "more than 4,300 square miles" in 30+ features on ADWR's current page. 167 miles of earth fissures mapped (2017). Maximum: over 18 to 19 ft since the 1950s near Luke Air Force Base and Eloy | https://www.azwater.gov/node/847 ; https://www.azwater.gov/node/999 ; https://www.azwater.gov/hydrology/field-services/land-subsidence-arizona |
| Pinal (Eloy / Picacho) | Parts of Maricopa and Pinal counties have subsided more than 18 ft since the early 1900s. Phoenix and Tucson AMA subsidence rates fell 25 to 90% vs the 1990s | same ADWR pages |
| Willcox | Overdraft 108,426 AFY. Water-level decline 2.28 ft/yr (1990-2021), rising to 3.28 ft/yr (2015-2021). 71 monitored wells dry, 29 in the last 10 years. One spot has sunk nearly 11.6 ft since 1969; rate up from 1.2 in/yr (1996) to 2.8 in/yr (2023). Highest InSAR rate in the state, 16 cm/yr (6.3 in/yr). 48.76 miles of fissures (July 2023), the most of any Arizona basin | https://azwater.gov/sites/default/files/2025-04/2025.04.08.WillcoxAMAGoalWorkshop.pdf ; https://www.azwater.gov/news/articles/2025-04-10 ; https://tucson.com/news/local/environment/arizona-groundwater-subsidence-fissures-cracking/article_8ce612da-9b64-11ee-855e-b333f3d21290.html ; https://www.azwater.gov/node/847 |
| Ranegras Plain | Groundwater levels down more than 200 ft since the 1980s; "significant" subsidence; subsidence rates 2 to 5 times the 1990s rates | https://wrrc.arizona.edu/news/ranegras-plain-becomes-arizonas-8th-ama ; https://www.azwater.gov/node/847 |
| McMullen Valley | Subsidence documented by ADWR and NASA (2010-2015). Cumulative feet and rate: **unverified** | https://earthdata.nasa.gov/news/feature-articles/subsidence-mcmullen-valley-groundwater-basin-arizona |
| Hualapai Valley (Kingman) | USGS model projects mean declines of 87 to 128 ft by 2050 and 204 to 241 ft by 2080 at Kingman subbasin wells; pumping is "overwhelmingly from storage". Observed decline rate and overdraft volume: **unverified** | https://pubs.usgs.gov/publication/sir20215077 |

- The Willcox figures were taken from search-result excerpts of the cited ADWR workshop slides and Arizona Daily Star reporting; confirm against the slides before quoting.

### 6e. Underground storage and the Water Bank

| Item | Value | Year | Source |
|---|---|---|---|
| Long-term storage credits created since the recharge program began (all storers) | more than 14.6 MAF | through FY2025 | ADWR FY2025 annual report |
| Delivered for storage in one year | 571,590 AF (170,240 AF recovered within the year; 39,550 AF of long-term credits recovered) | FY2025 | same |
| Arizona Water Banking Authority credits | about 4.38 MAF accrued: about 3.77 MAF for Arizona uses, 613,846 AF held for Nevada | through 2023 | https://waterbank.az.gov |
| Water Bank policy | Firming of CAP M&I subcontractors extended through 2027; credits offered for 700+ Plan conservation through 2028 | 2026 | ARC slides (section 2 link) |

- 14.6 MAF is cumulative credits created, not the balance still in the ground; the remaining balance is **unverified**.
- The Water Bank figures came from a search excerpt of its home page (the page blocked direct fetch).

---

## 7. Climate inputs

### 7a. Precipitation normals, 1991-2020 (NOAA NCEI)

Query: `https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-annualseasonal-1991-2020&stations=<ID>&dataTypes=ANN-PRCP-NORMAL&format=csv&units=standard`

| Place | Station | Annual (in) |
|---|---|---|
| Yuma | Yuma MCAS, USW00003145 | 3.28 |
| Lake Havasu City | USC00024761 | 4.16 |
| Page | Page Municipal Airport, USW00003162 (co-op station USC00026180: 6.88) | 6.13 |
| Phoenix | Sky Harbor, USW00023183 | 7.22 |
| Kingman | Mohave County Airport, USW00093167 | 8.00 |
| Safford | Ag Center, USC00027390 (airport USW00093084: 7.98) | 8.78 |
| Tucson | International Airport, USW00023160 | 10.61 |
| Sierra Vista | USC00027880 | 13.01 |
| Show Low | Airport, USC00027855 | 15.70 |
| Prescott | USC00026796 (Love Field airport USW00023184: 12.85) | 16.46 |
| Payson | USW00093139 | 19.84 |
| Flagstaff | Pulliam Airport, USW00003103 | 20.52 |
| Baldy SNOTEL (Mt Baldy, 9,210 ft) | USS0009S01S | 26.25 |
| Sunrise Mountain | USC00028326 | 26.68 |
| Workman Creek SNOTEL (Sierra Ancha) | USS0010S01S | 32.34 |
| Promontory SNOTEL (Mogollon Rim) | USS0011R10S | 34.32 |
| **Wettest station with a published normal:** Snowslide Canyon SNOTEL (San Francisco Peaks, 9,720 ft) | USS0011P08S | **37.00** |

- Wettest and driest are from a query of all 214 Arizona stations in the normals inventory (https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/doc/inventory_30yr.txt). Driest: Yuma Quartermaster Depot, 3.19 in.
- Hawley Lake has no 1991-2020 normal (its SNOTEL site started in 2015), so the traditional "Hawley Lake is wettest" claim cannot be checked against current normals.

### 7b. Monsoon vs winter share (computed from the same normals; monthly dataset `normals-monthly-1991-2020`)

| Station | Jul-Sep share | Dec-Feb share |
|---|---|---|
| Yuma | 34% | 37% |
| Phoenix | 33% | 34% |
| Tucson | 52% | 25% |
| Flagstaff | 37% | 30% |
| Sierra Vista (Jun-Aug used; Jul-Sep not pulled) | 57% | 17% |

So the monsoon delivers about a third of annual rain in Phoenix and the northwest, and over half in the southeast.

### 7c. Evaporation

| Item | Value | Source |
|---|---|---|
| Lake evaporation, Phoenix | about 72 in/yr (Tucson about 70; statewide range about 50 in northeast to 80 in southwest) | https://wrcc.dri.edu/climate/narrative_az.php |
| Class A pan evaporation, Phoenix | **Unverified** (pan values run higher than lake values) | |
| Lake Mead evaporation | "About 800,000 acre-feet each year" (USBR); USGS measured 6.22 ft/yr; older USGS estimate 791,000 AFY (1953-1994) | https://www.usbr.gov/lc/hooverdam/faqs/lakefaqs.html ; https://www.usgs.gov/centers/nv-water/science/evaporation-lake-mead-and-lake-mohave-lower-colorado-river-basin-nev |
| Lower Basin mainstem evaporation, Mead to Mexico | about 860,000 AFY; with riparian losses about 1.30 MAF/yr (2017-2021 average) | https://www.usbr.gov/lc/region/g4000/4200Rpts/LCRBEvapReport/evapreport.html |

- The Phoenix lake-evaporation figure came from a search excerpt of the Western Regional Climate Center narrative.
- Mead's evaporation falls as the lake shrinks; the 800,000 AF figure is a long-standing rounded number, not a 2026 value.

### 7d. Colorado River natural flow at Lees Ferry

Computed from Reclamation's natural-flow workbook (water years): https://www.usbr.gov/lc/region/g4000/NaturalFlow/NaturalFlows1906-2020_20221215.xlsx

| Period | Average natural flow |
|---|---|
| 1906-1930 (the data behind the 1922 Compact) | 17.7 MAF/yr |
| 1906-1999 | 15.2 MAF/yr |
| 1991-2020 | 13.5 MAF/yr |
| 2000-2020 | 12.6 MAF/yr |
| 2000-2025 (CAP chart of Reclamation data) | 12.4 MAF/yr; 1906-2025 average 14.6 MAF/yr |

- CAP chart: https://library.cap-az.com/documents/community/cap-university/CR-Conditions-Presentation.pdf. CRS gives 12.43 MAF for 2000-2024.
- The Compact divides 15 MAF among the states plus 1.5 MAF for Mexico, more than the river has averaged this century.
- Gauged (not natural) flow at Lees Ferry, USGS 09380000: 10.4 MAF/yr for 1922-2025; 8.7 MAF/yr for 2000-2025 (computed from https://waterservices.usgs.gov/nwis/stat/?format=rdb&sites=09380000&statReportType=annual&statYearType=water&parameterCd=00060).
- Share from the Upper Basin: USGS says about 90% of Colorado River Basin streamflow originates above Lees Ferry: https://www.usgs.gov/news/national-news-release/more-half-streamflow-upper-colorado-river-basin-originates-groundwater
- Share from snowpack: a precise "85% from snowmelt" figure is **unverified**. USGS work finds over half of Upper Basin streamflow passes through groundwater first (56% in the 2016 study; 63% baseflow in a newer 1986-2020 study), much of it snowmelt-derived.
- Upper Basin snowpack, winter 2025-26: peaked 9 Mar 2026 at 8.9 in of snow water equivalent (SWE), 60% of the median peak; Reclamation called the winter's snowpack the lowest on record. Lake Powell's water year 2025 unregulated inflow was 4.69 MAF (49% of average): https://library.cap-az.com/documents/factsheets/CAP-FactSheet-Aug2026.pdf ; https://www.usbr.gov/newsroom/news-release/5392 ; CAP conditions presentation.

### 7e. Salt/Verde and other Arizona snowpack (NRCS SNOTEL)

- Arizona has 23 active SNOTEL sites: https://wcc.sc.egov.usda.gov/awdbRestApi/services/v1/stations?stationTriplets=*:AZ:SNTL&activeOnly=true
- Peak SWE below is computed from daily data: `https://wcc.sc.egov.usda.gov/awdbRestApi/services/v1/data?stationTriplets=<ID>:AZ:SNTL&elements=WTEQ&duration=DAILY`. Median is of water-year peaks 1991-2020.

| Site (elev.) | Basin | Lat, lon | Median peak SWE (in) | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|---|---|
| Baldy (9,210 ft) | White Mtns | 33.978, -109.504 | 7.8 | 10.0 | 6.9 | 1.1 | 1.6 |
| Hannagan Meadows (9,030 ft) | Salt/Black | 33.654, -109.309 | 10.2 | 11.4 | 11.9 | 1.4 | 2.4 |
| Maverick Fork (9,210 ft) | Salt/Black | 33.921, -109.459 | 9.1 | 11.4 | 8.6 | 1.2 | 1.8 |
| Workman Creek (7,030 ft) | Salt | 33.813, -110.919 | 6.9 | 9.3 | 5.3 | 1.3 | 1.5 |
| Promontory (7,930 ft) | Mogollon Rim | 34.368, -111.011 | 12.7 | 19.1 | 9.6 | 3.0 | 2.1 |
| Baker Butte (7,360 ft) | Verde | 34.457, -111.407 | 6.0 | 12.8 | 6.2 | 3.8 | 2.4 |
| Happy Jack (7,520 ft) | Verde | 34.746, -111.412 | 6.7 (21 yrs) | 18.6 | 8.6 | 3.8 | 2.6 |
| Fry (7,220 ft) | Verde | 35.074, -111.845 | 7.8 | 21.8 | 8.5 | 2.9 | 2.3 |
| Snowslide Canyon (9,720 ft) | San Francisco Peaks | 35.342, -111.651 | 16.8 (23 yrs) | 36.2 | 22.8 | 14.9 | 14.0 |
| Hawley Lake (8,290 ft) | White Mtns | 33.971, -109.765 | n/a | 20.9 | 18.2 | 4.9 | 5.2 |

Recent winters in one line each:
- 2023: big, 1.5 to 3 times median on the Verde side.
- 2024: near median.
- 2025: about 15 to 50% of median; SRP's lowest-inflow year on record.
- 2026: again about 20 to 35% of median, with the peak in February. SRP put late-December 2025 snowpack at 32% (Verde) and 9% (Salt) of median.
- Then record fall storms in October-November 2026: water year 2027 Salt/Verde precipitation to date 11.24 in, 752% of normal (USBR weekly report, 8 Nov 2026).

---

## 8. Reclaimed water, in-state rivers, augmentation

### 8a. Reclaimed water

| Item | Value | Year | Source |
|---|---|---|---|
| Reclaimed share of state supply | 5% (ADWR-attributed) | 2020 | https://environment.arizona.edu/news/where-does-our-water-come |
| Volume reused statewide | about 264,000 AFY | 2022 | https://www.yahoo.com/news/arizona-recycles-more-water-most-120130741.html |
| Reclaimed water used for farm irrigation | 119,000 AFY (2.3% of agricultural use) | 2023 fact sheet | https://wrrc.arizona.edu/sites/wrrc.arizona.edu/files/2023-05/arroyo-factsheet-2023-reclaimed-water-agriculture-5-31-23.pdf |

- No official ADWR statewide volume was found; 5% of 7 MAF would be about 350,000 AF, which does not match 264,000 AF. Present both with their sources. The 264,000 AF figure is from a news report of a university study, seen as a search excerpt.

### 8b. Main in-state rivers

Mean annual flow is computed from USGS annual mean discharge (cfs times 723.97), full period of record and the 1991-2020 subset: `https://waterservices.usgs.gov/nwis/stat/?format=rdb&sites=<ID>&statReportType=annual&statYearType=water&parameterCd=00060`

| River | Gauge (USGS ID) | Record | Mean, full record (AFY) | Mean, 1991-2020 (AFY) | Mean, 2000 on (AFY) |
|---|---|---|---|---|---|
| Salt | near Roosevelt (09498500) | 1914-2024 | 606,000 | 529,000 | 423,000 |
| Verde | below Tangle Creek, above Horseshoe (09508500) | 1946-2024 | 390,000 | 380,000 | 320,000 |
| Gila (upper) | head of Safford Valley near Solomon (09448500) | 1921-2024 | 321,000 | 347,000 | 255,000 |
| Gila (middle) | at Kelvin, below Coolidge Dam (09474000) | 1912-2025 | 340,000 | 318,000 | 186,000 |
| Gila (lower) | below Painted Rock Dam (09519800) | 1960-2025 | 238,000 | 239,000 | 52,000 |
| Gila (mouth) | near Dome (09520500) | 1906-2026, gaps | 154,000 | 201,000 | 23,000 |
| Little Colorado | near Cameron (09402000) | 1948-2025 | 146,000 | 118,000 | 98,000 |
| Bill Williams | below Alamo Dam (09426000) | 1970-2025 | 81,000 | 78,000 | 54,000 |
| Agua Fria | near Rock Springs (09512800) | 1971-2025 | 47,000 | 47,000 | 31,000 |
| San Pedro | at Charleston (09471000) | 1913-2025 | 35,000 | 22,000 | 22,000 |
| Santa Cruz | near Nogales (09480500) | 1914-2025 | 16,000 | 8,300 | 5,500 |

- The lower Gila means are dominated by rare flood years (1980, 1983, 1993); in most years almost nothing reaches the Colorado.
- For scale: all of these together are a small fraction of the Colorado's roughly 12.4 MAF natural flow.

Perennial status: no single authoritative current list was found.
- Arizona has lost roughly 35% of its perennial stream flow over 200 years (Brown and others, 1981, cited in later literature); the San Pedro has lost over half its perennial length, and about 32% of its length inside the San Pedro Riparian National Conservation Area had surface flow in every year of 12 years of mapping: https://www.springerprofessional.de/wet-dry-mapping-using-citizen-scientists-to-monitor-the-extent-o/5187538
- Qualitative, advocacy-sourced (https://www.biologicaldiversity.org/news/media-archive/UpperVerde8-6-06.pdf): the Salt's natural flow ends at the SRP dams and Granite Reef, leaving a normally dry bed through Phoenix; the Gila is largely diverted at and below Coolidge Dam; the Santa Cruz near Nogales and Tucson flows mainly on treated effluent.
- Reach-by-reach status for the Verde, Little Colorado, Bill Williams and Agua Fria: **unverified**. Do not label any river "perennial" or "dry" on the map without checking a specific reach.

### 8c. Long-term augmentation (Water Infrastructure Finance Authority of Arizona, WIFA)

| Item | Detail | Source |
|---|---|---|
| Fund | Legislature appropriated $1 billion in 2022; about two-thirds was later swept back; about $386 million provided to date | https://azcapitoltimes.com/news/2026/10/07/arizona-exploring-long-term-water-importation-options/ |
| Solicitation | 17 responses, narrowed to 7 projects from 2 teams (Acciona/Fengate and EPCOR Water Innovation Partners) | same |
| Status at 3 Nov 2026 | 5 importation projects in early appraisal studies (about $27 million of study): South Bay Potable Reuse and California Groundwater Recovery (approved 19 Aug 2026); Northern Gulf of California Desalination Plant (16 Sep 2026); Gulf of California Desalination and Binational Conveyance, plus a Reclamation and Reuse project (5 Oct 2026) | https://wifa.az.gov/news/arizona-continues-advancing-studies-long-term-water-supply-solutions |
| Need estimate | 100,000 to 500,000 AFY of new supply over 10 to 15 years | https://wifa.az.gov/ |

- Nothing is funded for construction; all five are studies. Figures are from search excerpts of the WIFA and Capitol Times pages.

---

## 9. Tribal water rights

| Tribe / settlement | Volume | Status | Source |
|---|---|---|---|
| Tribal share of CAP | About 46% of CAP supply "is, or will be, permanently allocated" to tribes (54% municipal / 46% tribal in CAP's fact sheet) | Under the 2004 Arizona Water Settlements Act | https://www.cap-az.com/tribal-water ; https://library.cap-az.com/documents/factsheets/CAP-FactSheet-Apr2026.pdf |
| CAP Indian-priority and settlement pools | 343,079 AF (P4 Indian) plus 68,400 AF (P3: Ak-Chin 50,000 and Salt River Pima-Maricopa 22,000, less 5% loss) | | https://www.azwater.gov/crm/colorado-river-allocation |
| Gila River Indian Community | Water budget of 653,500 AFY from CAP, Gila, Salt and other sources | Settled (2004 Act) | https://www.climas.arizona.edu/publication/arizona-water-settlement-act-and-urban-water-supplies |
| Tohono O'odham Nation | 66,000 AFY addressed by the 1982 Southern Arizona Water Rights Settlement Act; the 2004 Act added 28,200 AF of CAP water | Partially resolved (other districts' claims remain) | https://www.govinfo.gov/content/pkg/PLAW-108publ451/html/PLAW-108publ451.htm ; https://www.cap-az.com/tribal-water |
| Colorado River Indian Tribes | 662,402 AFY decreed diversion right in Arizona, priority 1865-1874 (first priority on the river). 2025 use: 330,472 AF consumptive | Adjudicated in Arizona v. California | USBR entitlement and use tables (section 2) |
| Other mainstem decreed rights (AZ) | Fort Mojave 103,535 AF (27,969 + 75,566); Cocopah 7,681 + 1,140 AF; Fort Yuma/Quechan 6,350 AF | Adjudicated | https://www.usbr.gov/lc/region/g4000/contracts/entitlements/Entitlements_AZ_Priority_1.pdf |
| Hualapai Tribe | 4,000 AFY of agricultural-priority water; project to deliver up to 3,414 AFY from the Colorado River | Act signed 5 Jan 2023 | ADWR FY2025 annual report |
| Navajo Nation, Hopi Tribe, San Juan Southern Paiute (Northeastern Arizona Indian Water Rights Settlement) | $5.0 billion federal; 44,700 AFY of Arizona Upper Basin Colorado River water to Navajo and 2,300 AFY to Hopi, plus other sources | **Not enacted.** Agreement approved by the tribes and state in 2024. Bills S.953 and H.R.2025 (119th Congress) remain in committee; Senate Indian Affairs hearing March 2026; Upper Basin states have objected to moving water across the basin line; tribal leaders were still urging passage in late Oct 2026 | https://www.congress.gov/bill/119th-congress/senate-bill/953/all-info ; https://azcapitoltimes.com/news/2026/10/28/water-settlement-would-be-game-changer-for-northeastern-arizona-tribes-experts-argue/ ; https://coloradonewsline.com/2026/07/03/states-stalling-water-rights-deal/ |
| Yavapai-Apache Nation | Settlement signed by Gov. Hobbs in 2024 | Awaiting Congress | ADWR FY2025 annual report |
| No settlement yet | Havasupai, Kaibab Paiute, Pascua Yaqui, Tonto Apache; San Carlos Apache partially resolved | | https://www.cap-az.com/tribal-water |

- A different CRIT figure, 719,248 AF, appears in news coverage and probably includes the tribe's California lands; **unverified**. Use 662,402 AF for Arizona.
- The Gila River and Tohono O'odham volumes came from search excerpts; the 46% figure was read on CAP's page.
- New in the 2027-2028 guidelines: a federally managed pool in Lake Mead can offset up to 25% of tribal shortages (ARC slides).

---

## Unverified list (do not publish without checking)

- Current storage for Lake Pleasant and Alamo Lake; Lake Pleasant maximum capacity (1,108,600 AF).
- CAP annual pumping energy in MWh.
- Statewide annual groundwater overdraft; remaining balance of water stored underground.
- Year the Assured Water Supply rules were adopted (1995); year the Santa Cruz AMA was created (1994).
- Split of each shortage tier between the 2007 Guidelines and the DCP.
- McMullen Valley subsidence in feet; Hualapai Valley observed decline rate.
- Phoenix Class A pan evaporation.
- "85% of Colorado River flow is snowmelt".
- Reach-by-reach perennial status of the in-state rivers.
- Whether the Lower Basin implementation agreement, Arizona's legislative authorization and Minute 334 have been signed; status of the appeal in the home builders' case.
