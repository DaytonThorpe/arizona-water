# Colorado water: research fact sheet (supply, demand, places, law, GIS)

Compiled 2026-11-12 for the Colorado chapter of the western-water map. Style follows `supply.md` / `demand.md`.

**Conventions**
- AF = acre-feet; KAF = thousand AF; MAF = million AF; cfs = cubic feet per second; CU = consumptive use; TMD = transmountain diversion; CWCB = Colorado Water Conservation Board; DWR = Colorado Division of Water Resources; USBR = Bureau of Reclamation; ROD = Record of Decision; C-BT = Colorado-Big Thompson; SLV = San Luis Valley.
- Evidence tags: **[P]** = I opened the document itself and read the number. **[S]** = number reached me only through a search-engine summary of the linked page (page not opened, or blocked); re-open before publishing. **[derived]** = my arithmetic. **unverified** = could not confirm at a credible source this session.
- Coordinates: rows marked (DWR) come from the DWR structures layer (section 3). All others are approximate centroids from general geographic knowledge; spot-check on a map before plotting.
- Untagged colour in the "Why it matters" and "Notes" columns (construction years such as 1909, 1928, 1935, 1852; "four endangered fish"; "most-rafted river"; "first Yampa call in 2018") is from general knowledge and was not checked this session; verify before quoting.
- 2026 context that colours almost every "current" number: winter 2025-26 was the worst snowpack on record in Colorado, and water year 2026 was the lowest or near-lowest runoff year on many gauges. Do not present 2026 storage as typical.

---

## 1. Statewide budget

### 1a. Where the water comes from

| Item | Value | Year / basis | Tag | Source |
|---|---|---|---|---|
| Streamflow originating in Colorado | "An average of 13.7 million acre-feet of streamflow originates annually in Colorado via precipitation" | long-term average (page undated; cites 2015 Water Plan data) | [P] | https://waterknowledge.colostate.edu/water-management-administration/water-uses/ |
| Alternative, rounder figure | rivers "produce an estimated 15 million acre-feet" a year; Coloradans "consume approximately 5 million" with the balance crossing state lines | summary of the 2023 Water Plan | [S] secondary | https://argentco.com/?p=9374 |
| Water leaving the state | about 10.43 MAF/yr ("Colorado Historic Average Annual Stream Flows" table total) | DWR table in a 2002 drought assessment | [S] | https://dnrweblink.state.co.us/CWCB/0/doc/103457/Page7.aspx |
| Share leaving | roughly 61% (13.7 minus 5.3 consumed) to roughly two-thirds (10 of 15) | | [derived] | rows above |
| Total diversions vs consumption | 15.3 MAF/yr diverted; 5.3 MAF/yr consumed. Diversions exceed native supply because return flows are re-diverted downstream | 2015 Water Plan data via CSU | [P] | https://waterknowledge.colostate.edu/water-management-administration/water-uses/ |
| Total diversions, newer | 14,951,000 AF/yr average | 2011-2020, DWR diversion records as used in a state oil-and-gas regulator report | [S] | https://ecmc.prod.govaccess.org/home/showpublisheddocument/1246/638514632998800000 (TLS error when I tried to open it) |
| Surface vs groundwater | about 83% surface water, 17% groundwater (of water consumed); about 2 MAF/yr of groundwater withdrawn | CSU | [P] | https://waterknowledge.colostate.edu/water-management-administration/water-uses/ |
| Reuse | no statewide volume published that I could find | | **unverified** | |
| West/east imbalance | "80% [of] water falls west of the Continental Divide"; "90% [of] people live east of the Continental Divide" | 2023 Water Plan one-pager | [P] | https://dnrweblink.state.co.us/CWCB/0/edoc/217378/2023WaterPlanRolloutOnePagerFINAL.pdf |
| Same, CSU wording | "approximately 80% of Colorado's water falls and flows west of the Continental Divide"; "80% of the population and the majority of irrigated acres are found east" | | [P] | CSU page above |
| Population | 5.8 million; statewide per-capita use down 5% (since 2015) despite growth | 2023 Water Plan one-pager | [P] | one-pager above |
| Legal frame | "nine interstate compacts, two equitable apportionment decrees", 8 major river basins, 2 federally recognized tribes | 2023 Water Plan one-pager | [P] | one-pager above |
| Snow share | Denver Water: "Eighty to 90% of our water comes from that snowpack". No statewide percentage found at a primary source | 2026 | [S]; statewide share **unverified** | https://www.denverwater.org/tap/how-much-precipitation-will-it-take-end-drought |

Why 13.7 vs 15 MAF: different periods of record and "originating" vs "produced" definitions; the 15 MAF figure reached me only secondhand. Use 13.7 MAF with the CSU citation, or say "about 14 to 15 MAF".

### 1b. Where it goes

| Source (data year) | Measure | Agriculture | Municipal | Industrial | Notes | URL |
|---|---|---|---|---|---|---|
| 2023 Colorado Water Plan one-pager | "water use by sector" (measure not stated on the page) | 91% | 7% | 2% ("large industry") | Headline graphic | [P] https://dnrweblink.state.co.us/CWCB/0/edoc/217378/2023WaterPlanRolloutOnePagerFINAL.pdf |
| Draft 2023 Water Plan as reported by BizWest | consumptive, 5.3 MAF total | 4.8 MAF | 380,000 AF | 116,000 AF | The AF behind 91/7/2 (4.8/5.3 = 90.6%, 0.38/5.3 = 7.2%, 0.116/5.3 = 2.2%) | [S] https://bizwest.com/?p=361384 |
| 2023 Plan via Colorado Sun | consumptive | | "all of the cities, towns and industries... about 380,000 acre-feet per year" | | Sun wording lumps industry in; BizWest splits it | [S] https://coloradosun.com/2024/03/13/states-colorado-river-plans-water-experts-impacts-to-colorado/ |
| CSU Water Knowledge (2015 Plan data) | consumptive use, 5.3 MAF | 89% (about 4,717,000 AF) | 7% (about 371,000 AF) | self-supplied industry 4% (about 212,000 AF) | | [P] https://waterknowledge.colostate.edu/water-management-administration/water-uses/ |
| CSU Water Knowledge (2015 Plan data) | diversions/deliveries, 15.3 MAF | 86.7% (about 13,265,100 AF; 81% surface / 19% ground) | 6.7% (about 1,025,100 AF; 94% / 6%) | 1.1% (168,300 AF; 80% / 20%) | plus 5.5% (841,500 AF) non-consumptive recreation/environment. Text on same page says municipal "about 975,000 AF" | [P] same |
| CWCB supply planning page | "water use" | "about 86 percent" | | | matches the diversion measure | [S] https://cwcb.colorado.gov/focus-areas/supply/water-supply-planning |

Small sectors (statewide):

| Use | Value | Year | Tag | Source |
|---|---|---|---|---|
| Hydraulic fracturing | about 26,000 AF/yr, 0.17% of total diversions | 2011-2020 average | [S] | ECMC report above; https://insideclimatenews.org/news/13032025/colorado-oil-fracking-water-recycling/ |
| Snowmaking | about 3,582 AF/yr (1.2 billion gallons), DWR 2001-2020; older CWCB figure 5,620 AF/yr (2015), projected 7,950 by 2050; about 80% returns to streams at melt | | [S] | https://www.cbsnews.com/colorado/news/colorado-skiing-snowmaking-gallons-water-use ; https://watereducationcolorado.org/?p=26229 |
| Data centers | projection of about 6,000 AF/yr for cooling within 10 years (Western Resource Advocates); others say about 0.1% of state consumptive use. No measured statewide figure. Reporting bill SB26-102 died 11 May 2026; Denver passed a one-year moratorium on new data centers | 2026 | [S] | https://www.denvergazette.com/?p=546049 ; https://coloradosun.com/2026/04/27/data-center-bills-stalled-colorado-legislature/ |
| Power plants | see Craig and Comanche in section 2 | | | |

Colorado River basin slice (primary, USBR "Provisional Upper Colorado River System Consumptive Uses and Losses 2021-2025", Dec 2025) [P]: https://www.usbr.gov/uc/DocLibrary/Reports/ConsumptiveUsesLosses/uc-ucrb-provisionalconsumptiveusesandlosses-2021-2025-508-20251200.pdf

| Colorado, KAF | 2021 | 2022 | 2023 | 2024 |
|---|---|---|---|---|
| Total CU and losses (excl. big-reservoir evaporation) | 1,804.3 | 1,847.0 | 2,301.7 | 1,917.3 |
| Irrigated agriculture | 1,122.5 | 1,172.3 | 1,626.3 | 1,235.4 |
| Exports out of the Colorado River system (the transmountain diversions) | 514.5 | 504.6 | 502.7 | 510.1 |
| M&I other | 44.4 | 44.5 | 44.6 | 44.9 |
| Thermal electric | 15.6 | 16.7 | 12.5 | 13.0 |
| Reservoir evaporation (state-assigned) | 88.8 | 90.7 | 97.6 | 95.8 |

- Report's Colorado average: 1,968 KAF/yr (2021-24; 2025 column blank). Upper Basin grand total 3.93 to 4.71 MAF/yr.
- So Colorado uses roughly 2 MAF/yr of Colorado River water, a quarter of it by export to the East Slope.

### 1c. Recommended headline set (internally consistent)

- Supply: about 13.7 MAF of streamflow starts in Colorado each year; about 80% of it west of the Divide; about 90% of 5.8 million people live east.
- Consumed: about 5.3 MAF/yr (roughly 40%); the rest, on the order of 8 to 10 MAF, flows to 18 downstream states and Mexico under 9 compacts and 2 decrees. ("18 states" is the customary figure; **unverified** this session.)
- Consumed by sector (2023 Water Plan): agriculture about 4.8 MAF (91%), cities about 380,000 AF (7%), large industry about 116,000 AF (2%).
- Source of the water consumed: about 83% surface, 17% groundwater (about 2 MAF pumped).
- Moved across the Divide: about 500,000 AF/yr (USBR measured 503 to 515 KAF/yr in 2021-24; Water Plan one-pager: 27 tunnels and ditches, "over 500,000 acre-feet").
- If you prefer the diversion measure (15.3 MAF; ag 86.7%), say so explicitly; do not mix it with the 5.3 MAF set.

---

## 2. Places

Count: 62 rows across the tables below.

### 2a. Headwaters, rivers, snowpack

| # | Place | Lat, lon | Hard numbers | Why it matters | Source |
|---|---|---|---|---|---|
| 1 | Colorado River headwaters, La Poudre Pass (Rocky Mountain NP) | 40.477, -105.811 | Cumulative WY2026 flow at Cameo (near Palisade) the lowest in nearly a century of record [S]; Lake Powell WY2026 unregulated inflow 3.72 MAF, 39% of average; Apr-Jul 1.14 MAF, 18% [P] | The river that seven states fight over begins here and is tapped within its first mile (Grand River Ditch) | https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf ; https://coyotegulch.blog/2026/09/04/a-first-in-the-110-plus-year-history-of-this-canal-allen-best-bigpivots-com-coloradoriver-coriver-aridification/ |
| 2 | Snowpack as the reservoir (marker: Berthoud Pass on the Divide) | 39.798, -105.777 | Statewide snowpack 24% of median on 1 Apr 2026, record low [S]; 22% on 9 Apr [S]; median SNOTEL melt-out 36 days early [P via repost]; statewide Mar-May flows 50% of median; Jun-Jul forecast 24% of median [P via repost] | Most of Colorado's usable water arrives as snow and leaves as a few weeks of runoff | https://wwa.colorado.edu/resources/intermountain-west-dashboard/briefing/april-9-2026-co-ut-wy ; https://coyotegulch.blog/2026/06/06/remaining-period-forecasts-reduced-following-early-snowmelt-nrcs-snowpack-runoff/ (NRCS release of 5 Jun 2026) |
| 3 | South Platte River at Denver (Confluence Park) and at Julesburg state line | 39.755, -105.008 ; 40.988, -102.264 | 1923 compact: when state-line flow is under 120 cfs in irrigation season (1 Apr-15 Oct), Colorado curtails lower-river rights junior to 14 Jun 1897 [P]. US Supreme Court let Nebraska's Perkins County Canal suit proceed 29 Jun 2026; canal about 60% designed, 2032 target [S] | The Front Range's home river, reused several times before Nebraska | https://waterknowledge.colostate.edu/water-management-administration/agreements-compacts-treaties/ ; https://www.wowt.com/2026/06/29/high-court-clears-nebraska-water-rights-lawsuit-against-colorado/ |
| 4 | Arkansas River headwaters near Leadville | 39.25, -106.29 | Voluntary Flow Management Program normally holds 700 cfs at Wellsville 1 Jul-15 Aug; 2026 program water was effectively zero [S] | The most-rafted river in the US depends on imported West Slope water | https://coloradosun.com/2026/05/22/arkansas-river-rafting-low-flows/ |
| 5 | Rio Grande at Del Norte | 37.679, -106.353 | 2026 forecast 172,000 AF, 36% of average (USBR April plan) vs 270,000 AF, 42% (DWR Div 3, 6 Apr) [S]; observed total **unverified** | Index gauge that sets Colorado's Rio Grande Compact delivery | https://usbr.gov/uc/DocLibrary/Plans/RioGrande/uc-2026annualoperatingplan-riogrande-508-20260416.pdf |
| 6 | Yampa River at Steamboat / Lily Park call point | 40.485, -106.832 ; 40.452, -108.440 | Peaked weeks early at about a third of normal; main-stem call placed 19 Aug 2026 at Lily Park Ditch, more than 300 upstream diversions affected; Elkhead Reservoir releases began 13 Jul [S] | Last largely free-flowing big river in the basin; calls on it were unheard of before 2018 | https://coyotegulch.blog/2026/08/28/rare-yampariver-call-curtails-junior-water-rights-amid-historic-drought-more-than-300-upstream-diversions-could-be-affected-as-low-flows-reservoir-releases-and-worsening-drought-strain-water-suppl/ ; https://www.western-water.com/2026/07/17/drought-triggers-emergency-releases-on-yampa-river/ |
| 7 | Gunnison River, Black Canyon / Whitewater reach | 38.575, -107.742 ; 38.983, -108.450 | 1 Oct 2026: Crystal release about 770 cfs, Gunnison Tunnel taking about 560 cfs, Black Canyon about 210 cfs; Whitewater endangered-fish baseflow target cut to 500 cfs (normal Jun-Jul about 1,050; floor 750) [P] | Shows the trade between fish flows, a national park, a tunnel and a shrinking reservoir | https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf ; https://www.kvnf.org/kvnf-stories/2026-07-29/record-low-at-blue-mesa-forces-deep-cuts-to-gunnison-river-flows |
| 8 | San Juan River / Navajo Reservoir (Arboles, CO arm) | 37.02, -107.42 | See reservoir table | Colorado's southwest corner drains to New Mexico and the Navajo Nation | |

### 2b. Reservoirs

Capacities and storage. "Autumn 2026" values are the latest I could open.

| # | Reservoir | Lat, lon | Capacity (AF) | Latest storage | Why it matters | Source |
|---|---|---|---|---|---|---|
| 9 | Blue Mesa (Gunnison; largest in Colorado) | 38.47, -107.20 | about 829,500 live ("0.83 maf"; 143,500 AF = 17% [derived]); total cited as 938,141 or 940,700 [S, conflicting] | 143,500 AF, 17% of capacity, elev 7,413.20 ft on 30 Sep 2026; 140,029 AF on 14 Oct 2026. Peaked for the year on 19 Jan 2026 at 51%. WY2026 inflow 377,000 AF, 42% of average; Apr-Jul 155,000 AF, 24%. About 19 ft above the 7,393 ft critical elevation [P; critical elev S] | Colorado's biggest bucket ended 2026 near minimum power pool | https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf ; https://www.western-water.com/2026/09/05/colorado-water-supplies-tighten-as-drought-deepens/ ; https://www.coloradopolitics.com/2026/10/19/watchers-bemoan-water-conditions-as-federal-authorities-mull-releases/ |
| 10 | Dillon (Denver Water) | 39.61, -106.05 | 257,304 [P] | 63% full on 12 Oct 2026 (about 162,000 AF [derived]) vs about 95% typical; projected 45-50% by 1 Apr 2027; record low 35% (1978). Peaked at 80% on 17 Jun 2026; peak inflow 404 cfs vs 1,750 normal [P] | About 38% of Denver Water's storage, on the wrong side of the Divide | https://www.denverwater.org/your-water/water-supply-and-planning/collection-system ; https://www.denvergazette.com/2026/10/12/dillon-reservoir-projected-to-hit-near-record-low-capacity-by-april-1/ ; https://www.denverwater.org/tap/years-peak-record-low-runoff-leaves-reservoirs-far-below-normal |
| 11 | Lake Granby (C-BT) | 40.15, -105.86 | about 539,800 (storage + space to fill [derived]; commonly 539,758) | 61% of average at end Sep 2026; Sep inflow 34% of average [P]. (End Oct 2025: 440,900 AF) | The C-BT's main collection pool, pumped uphill to the Adams Tunnel | https://www.usbr.gov/gp/lakes_reservoirs/wareprts/wsrp/2026/12SeptemberHighlights26_508.pdf ; https://www.usbr.gov/gp/lakes_reservoirs/wareprts/wsrp/2026/Table_B_Oct26.pdf |
| 12 | Horsetooth (C-BT) | 40.56, -105.16 | about 156,700 [derived] | 139% of average end Sep 2026 [P] | East Slope terminal storage: full while the West Slope source was empty | same |
| 13 | Carter Lake (C-BT) | 40.33, -105.21 | about 112,200 [derived] | 110% of average end Sep 2026 [P] | Feeds the southern C-BT service area (Boulder, Longmont, Broomfield) | same |
| 14 | Green Mountain (C-BT, West Slope compensation) | 39.87, -106.31 | about 153,600 [derived] | 21,812 AF on 4 Sep 2026 (elev 7,840.77 ft); 16% of average at end Sep, "critically low". C-BT four-reservoir total 475,200 AF, 68% of average [P] | Built to compensate the West Slope for C-BT; its Historic Users Pool failed to fill in 2026 | Sept highlights above; https://www.western-water.com/2026/09/05/colorado-water-supplies-tighten-as-drought-deepens/ |
| 15 | Pueblo Reservoir (Fry-Ark) | 38.265, -104.74 | about 256,900 conservation (normal full) [derived]; total with flood pool often cited 357,678 **unverified** | 98% of average end Sep 2026; Fry-Ark four-reservoir total 370,700 AF, 80% of average [P] | Terminal storage for Fry-Ark and intake for Colorado Springs' Southern Delivery System | Sept highlights above |
| 16 | John Martin (Arkansas; Army Corps) | 38.07, -102.95 | conservation pool about 338,600 to 348,700 depending on survey; about 793,400 at top of dam (USGS 2003) [S] | autumn 2026 storage **unverified** | Compact reservoir: where Colorado's and Kansas's shares are split | https://pubs.usgs.gov/wdr/wdr-co-03-1/vol1/html/07130000.2003.sw.html ; https://www.co-ks-arkansasrivercompactadmin.org/wp-content/uploads/2019/08/Ark_River_Compact.pdf |
| 17 | McPhee (Dolores Project) | 37.53, -108.56 | 381,000 (district) / 381,195 total with 229,200 active (USBR) [S] | 57% of median on 1 Jun 2026 (10th percentile); remaining-period inflow forecast 24% [P via repost]. 2026 full-service allocation about 3 of 22 inches (about 14%) [S]. Ute Mountain Ute Farm and Ranch at 15-20% of allocation [P] | Serves about 63,000 acres and the Ute Mountain Ute farm, all junior | https://doloreswater.com/faq ; https://www.ksjd.org/2026-06-19/mcphee-water-shortage-drought-growers-montezuma-county ; https://www.coloradopolitics.com/2026/10/19/watchers-bemoan-water-conditions-as-federal-authorities-mull-releases/ |
| 18 | Navajo (shared with New Mexico; about 15% of the surface in Colorado) | 37.02, -107.42 (CO arm); dam 36.80, -107.61 | about 1,708,600 total, 1,036,100 active (USBR project page); 1,647,937 in 2019 survey [S] | 0.824 MAF live at end Sep 2026 (64% of average for date); 856,394 AF on 14 Oct; elev 6,018.9 ft vs 5,990 ft critical [P; critical S] | Could be tapped to prop up Powell under the 2027-28 guidelines | https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf ; https://usbr.gov/projects/index.php?id=310 |
| 19 | Eleven Mile Canyon (Denver Water, South Park) | 38.93, -105.50 | 97,779 [P] | autumn 2026 level **unverified**. Antero (20,122 AF) was mostly drained into Cheesman in spring 2026 to cut evaporation [P] | Denver's drought reserve on the South Platte | https://www.denverwater.org/your-water/water-supply-and-planning/collection-system ; https://www.denverwater.org/tap/years-peak-record-low-runoff-leaves-reservoirs-far-below-normal |
| 20 | Gross Reservoir (Denver Water; Moffat system) | 39.95, -105.36 | 41,811 now; about 119,000-120,000 after the raise (adds about 77,000) [P/S] | Dam raise completed 3 Jun 2026; federal appeals court ruled for Denver Water (reported 17 Sep 2026); not yet filled [S] | The newest big storage in Colorado, fed through the Moffat Tunnel | https://www.denverwater.org/grossreservoir/news/major-milestone-gross-dam-construction ; https://www.wateronline.com/doc/federal-court-ruling-clears-way-for-completion-of-gross-reservoir-expansion-project-0001 |
| 21 | Lake Nighthorse (Animas-La Plata) | 37.22, -107.91 | 123,541 [S, USBR] | see Tribes | A full reservoir whose owners mostly cannot reach it | https://www.usbr.gov/uc/progact/animas/index.html |
| 22 | Wolford Mountain (Colorado River District) | 40.13, -106.41 | capacity **unverified** (about 66,000 AF from memory) | Emergency releases began 6 Jun 2026; level down more than 30 ft; district approved $450,000 to support release of over 15,000 AF from Wolford and Ruedi [S] | West Slope's own drought bank | https://www.coloradoriverdistrict.org/press-release-emergency-reservoir-releases-to-protect-west-slope-communities-from-extreme-drought-impacts/ |

Other system snapshots: statewide reservoir storage 85% of median in early May and 75% on 1 Jun 2026 (Colorado headwaters 80%, Upper Rio Grande 86%, South Platte 90%) [P via repost of NRCS]. Denver Water total capacity 708,250 AF [P]; expected to fall to about 60% before 2027 runoff [S]. Aurora Water 39% of 156,411 AF active capacity on 25 Oct 2026 (Spinney Mountain 26%, Aurora Reservoir 67%) [S, https://www.auroragov.org/waterstorage].

### 2c. Transmountain diversions

| # | Diversion | Lat, lon | AF per year | Notes | Source |
|---|---|---|---|---|---|
| 23 | Alva B. Adams Tunnel (C-BT), Grand Lake to Estes Park | West portal 40.2416, -105.8014 (DWR) | about 200,000 delivered on average since 1957 (Northern Water) [P]; state model 1975-2005 about 232,000; Colorado River District "more than 220,000"; design 310,000 [S] | 13.1 miles; 12 reservoirs, 35 miles of tunnels, 95 miles of canals; 1.1 million people, 550,000 irrigated acres [P]. 2026 quota 80% set 9 Apr 2026 (50% initial) [S] | https://www.northernwater.org/deliver-water/colorado-big-thompson-project ; https://www.northernwater.org/news/2026-cbt-quota ; https://www.coloradoriverdistrict.org/wp-content/uploads/2021/02/transmountain-water-diversions-2020.pdf |
| 24 | Moffat Water Tunnel (Denver Water), Fraser River to South Boulder Creek | West portal 39.8872, -105.7612 (DWR) | over 57,000 (1975-2005) [S] | Feeds Gross Reservoir; pioneer bore of the 1928 railroad tunnel | https://dnrweblink.state.co.us/CWCB/0/doc/125202/Page7.aspx |
| 25 | Harold D. Roberts Tunnel (Denver Water), Dillon to North Fork South Platte | West intake about 39.615, -106.06; east portal near Grant about 39.46, -105.68 (approx; DWR layer has no coordinates) | about 58,600 (1975-2005) [S] | 23.3 miles | same; https://denverwater.org/node/16205 |
| 26 | Charles H. Boustead Tunnel (Fry-Ark), Fryingpan to Turquoise Lake | Outlet 39.2775, -106.4368 (DWR) | 52,698 average since 1972; 63,600 average 2013-17; authorised 69,200 [S] | Up to 945 cfs; supplies Pueblo, Colorado Springs and lower Arkansas farms. Colorado Politics (19 Oct 2026) gives a 2026 Fry-Ark figure of "1,000 acre-feet" that is ambiguous in the article; treat as **unverified** | https://aspenjournalism.org/water-district-clings-to-conditional-water-rights-in-holy-cross-wilderness/ |
| 27 | Homestake Tunnel (Aurora + Colorado Springs), Eagle River to Turquoise Lake | Outlet 39.2806, -106.4406 (DWR) | about 23,000-24,000; one older "Phase I" figure 28,000 [S] | Completed 1967; carried via the Otero pipeline, which supplies about half of Aurora's and about 70% of Colorado Springs' water (older figure) [S] | https://issuu.com/cfwe/docs/cfwe_cgtb_web/24 ; https://dnrweblink.state.co.us/CWCB/0/doc/125202/Page7.aspx |
| 28 | Twin Lakes Tunnel (Independence Pass system), Roaring Fork to Lake Creek | Inlet 39.0822, -106.5406 (DWR) | about 38,500 (1975-2005); 42,800 in an older table [S] | 1935; the water that once irrigated Crowley County, now mostly owned by Colorado Springs, Pueblo, Aurora | https://dnrweblink.state.co.us/CWCB/0/doc/125202/Page7.aspx |
| 29 | Grand River Ditch, Never Summer Range to La Poudre Pass | 40.477, -105.811 | 17,839 average 1950-2002 (max 25,229 in 1978) [S] | First water crossed 15 Oct 1890; about 18,000 of the 55,500 AF Water Supply and Storage Co. delivers | https://dnrweblink.state.co.us/CWCB/0/doc/128391/Page8.aspx |
| 30 | Gunnison Tunnel (in-basin, Gunnison to Uncompahgre) | 38.5242, -107.6499 (DWR) | about 560 cfs on 1 Oct 2026 [P]; annual AF **unverified** | 1909; not transmountain but the same idea; see Uncompahgre | https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf |

Totals: USBR measured 502.7 to 514.5 KAF/yr exported from the Colorado River system in Colorado, 2021-24 [P]. 2023 Water Plan one-pager: 27 tunnels and ditches, over 500,000 AF [P]. Water Education Colorado: 27 transbasin diversions, more than 580,000 AF (counts all transbasin moves, not only West to East) [S]. CWCB fact sheet: 450,000-600,000 AF [S]. Grand County alone: about 307,500 AF/yr to the East Slope [S]. The seven named above sum to roughly 450,000 AF using the averages listed [derived; mixed periods]. Sources: https://dnrweblink.state.co.us/CWCB/0/edoc/201036/cofactsheet.pdf ; https://watereducationcolorado.org/?p=2866

### 2d. Cities

| # | Place | Lat, lon | Hard numbers | Why it matters | Source |
|---|---|---|---|---|---|
| 31 | Denver Water | 39.739, -104.990 | 1.5 million people; about half of supply from Colorado River tributaries (Blue, Fraser, Williams Fork), half South Platte; 4,000 sq mi collection area; 708,250 AF storage [P]. Stage 1 drought declared March 2026, two-day watering, 20% cut sought; storage peaked 81% on 17 Jun 2026 (typical 97.5%); outdoor watering ended 1 Oct [P]. Per-capita: goal of 165 gpcd met by 2017 [S]; current gpcd **unverified** | About a quarter of the state's people served by one utility (its share of state water use, often quoted as about 2%, is **unverified**) | https://www.denverwater.org/your-water/water-supply-and-planning/collection-system ; https://www.denverwater.org/your-water/water-supply-and-planning/downstream-reservoir-program ; https://www.denverwater.org/tap/years-peak-record-low-runoff-leaves-reservoirs-far-below-normal |
| 32 | Aurora Water / Prairie Waters | City 39.729, -104.832; Prairie Waters wellfield near Brighton about 39.98, -104.82 (approx) | Prairie Waters delivers up to 10 MGD now, design 50 MGD; added about 20% (3.3 billion gal/yr) to supply; cost $638M-$653M [S]. Stage 1 drought 6 Apr 2026; storage 39% on 25 Oct 2026 [S]. Population served **unverified** (about 400,000) | Recaptures its own effluent from the South Platte and pumps it back to the city (pipeline length, often given as 34 miles, **unverified**): Colorado's flagship potable reuse | https://www.auroragov.org/prairiewaters ; https://www.auroragov.org/waterstorage ; https://auroragov.org/news/whats_new/city_of_aurora_declares_stage_1_drought |
| 33 | Colorado Springs Utilities | 38.834, -104.821 | About 50% of raw supply from the Colorado River basin, about 70% of demand served by it once reuse is counted [S]. Southern Delivery System: 50 MGD plant, 50-62 miles of pipe from Pueblo Reservoir [S]. About three years of supply in storage, May 2026 [S]. Customers served **unverified** | Largest Colorado city with no river of its own | https://www.csu.org/blog/colorado-river-water-supply-plan ; https://www.axios.com/local/colorado-springs/2026/05/19/colorado-springs-drought-restrictions-water-reserve |
| 34 | Fort Collins | 40.585, -105.084 | About 50% Poudre River, 50% Colorado River via Horsetooth/C-BT [S]. Voluntary Water Shortage Watch from 1 May 2026 [S]. In Oct 2026 the city moved to drop its Halligan expansion and join NISP [S] | A college town half-watered from the far side of the Divide | https://www.fortcollins.gov/News-Articles/News/2026-Q2/Voluntary-Water-Shortage-Watch ; https://www.kunc.org/news/2026-10-20/fort-collins-giving-up-halligan-water-expansion-joining-troubled-nisp-and-glade-project |
| 35 | Northern Water / NISP (Glade Reservoir site) | about 40.70, -105.19 (approx) | Glade 170,000 AF; cost grew from $400M to $2.2B (May 2025); construction expected early 2027; investor withdrawal Feb 2026 [S]. Project yield about 40,000 AF/yr **unverified** this session | The biggest new reservoir planned in Colorado | https://www.northernwater.org/NISP/project ; https://www.kunc.org/news/2025-05-15/northern-colorado-will-soon-have-new-reservoirs-but-the-cost-to-build-them-has-skyrocketed ; https://coloradosun.com/2026/06/10/northern-water-winning-some-losing-some-on-massive-dam-project/ |
| 36 | Pueblo | 38.254, -104.609 | Pueblo Board of Water Works leases Arkansas River water to Xcel's Comanche plant [S]. Service population and supply AF **unverified** | Senior Arkansas rights make Pueblo a seller, not a buyer | https://coloradosun.com/2020/07/16/water-saved-closing-coal-power-plants-colorado/ |
| 37 | Grand Junction / Ute Water | 39.064, -108.551 | City supply from Kannah Creek on Grand Mesa; snowpack there 41% in spring 2026; Ute Water asked customers not to irrigate with treated water [S] | West Slope hub, upstream of nothing but still short | https://thebusinesstimes.com/?p=41283 ; https://utewater.specialdistrict.org/droughtresponse |
| 38 | Castle Rock / Douglas County (Denver Basin aquifer) | 39.372, -104.856 | About one-third of Castle Rock's water is renewable; town uses more than 3.2 billion gal/yr; goal 100% renewable in an average year by 2065; $29M of Weld County land and water bought [S] | Suburbs built on fossil groundwater now buying farms 60 miles away | https://www.coloradopolitics.com/2026/05/24/tapped-castle-rock-working-to-reduce-per-capita-water-use/ ; https://www.coloradopolitics.com/2026/05/24/tapped-douglas-county-looks-to-diversify-water-supply-as-population-grows/ |

### 2e. Farms

| # | Place | Lat, lon | Hard numbers | Why it matters | Source |
|---|---|---|---|---|---|
| 39 | South Platte valley / Weld County (Greeley) | 40.423, -104.709 | Weld = 26% of Colorado's $9.22B farm sales (about $2.4B [derived]); top county for cattle; cattle and calves are 50.5% of state sales [S] | Corn and alfalfa here are feed: the water leaves as beef and milk | https://nass.usda.gov/Publications/AgCensus/2022/Online_Resources/County_Profiles/Colorado/cp08123.pdf |
| 40 | Lower Arkansas valley, Rocky Ford | 38.052, -103.720 | Five counties (Bent, Crowley, Otero, Prowers, Pueblo) lost more than 120,000 irrigated acres 1978-2022 [S]. HB26-1340 (signed 1 Jun 2026) requires revegetation of dried-up land [S] | Melon country, and the textbook case of "buy and dry" | https://coloradosun.com/2024/08/04/lower-arkansas-valley-water-rights/ ; https://www.western-water.com/2026/06/20/buy-dry-colorado-law-forces-revegetation-of-dried-up-farmland/ |
| 41 | Crowley County (Ordway) | 38.218, -103.756 | More than 50,000 irrigated acres once; about 5,000 later; 1,994 in the 2022 Census (a 92% loss) [S] | What a county looks like after its water is sold to cities | https://coloradosun.com/2024/08/04/lower-arkansas-valley-water-rights/ ; https://coyotegulch.blog/2015/08/04/buying-and-drying-water-lessons-from-crowley-county-the-colorado-independent/ |
| 42 | San Luis Valley, Subdistrict 1 (Center) | 37.753, -106.108 | Unconfined aquifer 1.425 MAF below its 1976 benchmark after losing 71,921 AF Sep 2025-Sep 2026; must recover to within 200,000-400,000 AF by 2031; pumping fee proposed to rise from $150 to $500 per AF for water not offset by surface supplies; well shut-offs possible from 2027; water court ruling pending [S] | Potato country (nearly all of Colorado's crop) pumping a closed basin dry | https://www.freshplaza.com/article/9885261/groundwater-levels-decline-further-in-colorado-potato-growing-region/ ; https://insideclimatenews.org/news/04102026/san-luis-valley-water-trial/ ; https://www.hppr.org/hppr-news/2026-10-07/who-will-stop-the-draining-of-san-luis-valleys-water-lifeline |
| 43 | Grand Valley / Palisade peaches | Palisade 39.110, -108.351; Cameo diversion about 39.186, -108.27 (approx) | Rights: Grand Valley Irrigation Co. 520 cfs (senior), Palisade + Mesa County districts 120 cfs, Orchard Mesa 460 cfs, Grand Valley Water Users 730 cfs (junior); GVWUA serves more than 23,000 acres. Government Highline Canal deliveries stopped 3 Sep 2026, the first such shutoff in 110-plus years [P/S]. Talbott Farms about 200,000 trees [S] | Senior West Slope farms ran out before the Front Range did | https://www.western-water.com/2026/09/05/colorado-water-supplies-tighten-as-drought-deepens/ ; https://www.kunc.org/news/2026-07-24/peaches-pay-the-bills-for-western-colorado-farmers-but-prolonged-drought-makes-their-future-uncertain |
| 44 | Uncompahgre Valley (Montrose) | 38.478, -107.876 | About 80,000 acres via the Gunnison Tunnel; 2026 season opened at 50% allocation; zero direct-flow water from the Uncompahgre; Ridgway Reservoir held at about 85% [P] | Sweet corn country on a 1909 federal tunnel | https://www.kvnf.org/kvnf-stories/2026-07-29/record-low-at-blue-mesa-forces-deep-cuts-to-gunnison-river-flows |
| 45 | Republican River basin / Ogallala (Wray, Yuma) | Wray 40.076, -102.223; Yuma 40.122, -102.725 | Compact allocation 54,100 AF/yr [P]. Compliance pipeline: 8 wells north of Wray, 12.6 miles to the North Fork, $60M-$72M, operating since 2012 [S]. Must retire 25,000 irrigated acres in the South Fork Focus Zone: 10,000 by 2024 (met), 15,000 more by 31 Dec 2029; 17,065 retired per a district grant application (date unconfirmed) [S]. Ogallala saturated thickness under 50 ft near Sterling to about 300 ft near Wray [S]; decline in feet **unverified** | Pumping groundwater into a river to satisfy Kansas, while paying farmers to stop pumping | https://waterknowledge.colostate.edu/water-management-administration/agreements-compacts-treaties/ ; https://www.kunc.org/news/2025-08-02/hard-questions-about-groundwater-mining-in-colorados-republican-river-basin ; https://dnr.colorado.gov/Kansas-Nebraska-Agree-Colorado-Has-Reached-Republican-River-Compact-Milestone |
| 46 | Hay and alfalfa (statewide; marker: North Park or Gunnison hay meadows 38.545, -106.925) | 38.545, -106.925 | Hay harvested 1,241,836 acres, alfalfa 635,129 acres, irrigated land 2,287,808 acres (2022 Census via CSU Extension; table extraction messy) [S]. 2024 NASS: alfalfa 675,000 acres, corn for grain 1,180,000 acres [S]. "Largest crop water user" is consistent with hay being about half of irrigated acres [derived] but no state crop-by-crop CU table was found: **unverified** | Most of Colorado's water grows feed, not food | https://abm.extension.colostate.edu/wp-content/uploads/sites/61/2024/06/2022_Ag_Census_Colorado_and_64Counties.pdf ; https://data.nass.usda.gov/Statistics_by_State/Colorado/Publications/Agriculture_Profile/Colorado-AG-Profile-2024.pdf |
| 47 | Dolores Project / Ute Mountain Ute Farm and Ranch (Towaoc) | 37.204, -108.729 | See McPhee row: about 14% allocation for full-service farms; tribe's farm 15-20% [S/P] | A tribal farm with paper rights and a junior project | sources in row 17 |

### 2f. Groundwater

| # | Place | Lat, lon | Hard numbers | Why it matters | Source |
|---|---|---|---|---|---|
| 48 | Denver Basin aquifers (Dawson, Denver, Arapahoe, Laramie-Fox Hills) | centroid about 39.45, -104.60 | About 6,700 sq mi [S]. Allocated on a 100-year life (El Paso County uses 300 years) [S]. Historical declines: Arapahoe 100 to almost 300 ft 1990-2000; more than 20 ft/yr in places; about 25 ft/yr average in south-metro Douglas County in one older DWR assessment [S]. Current rates **unverified** (DWR 2025 water-level report exists but not opened) | Essentially non-renewable; the reason for WISE, Rueter-Hess and farm purchases | https://issuu.com/cfwe/docs/cg-groundwater/7 ; https://dnrweblink.state.co.us/CWCB/0/doc/169773/Page17.aspx ; https://spl.cde.state.co.us/artemis/nrserials/nr51021internet/nr510212025internet.pdf |
| 49 | Northern High Plains Designated Basin (Ogallala) | about 39.9, -102.6 | 9,293 sq mi, the largest of 8 designated basins [P, DWR GIS attributes] | Where prior appropriation was swapped for managed depletion | section 3 |
| 50 | San Luis Valley confined / unconfined aquifers | Alamosa 37.469, -105.870 | See row 42 | | |
| 51 | South Platte alluvial wells (Central Colorado WCD Well Augmentation Subdistrict; Wiggins/Fort Morgan area) | about 40.23, -104.07 | State ordered about 440 wells shut in 2006 in Adams, Morgan and Weld counties; the replacement plan later sought to re-pump about 200 [S]. Acres affected **unverified** (often cited as roughly 30,000) | The day Colorado enforced "wells are part of the river" | https://legacy.rma.usda.gov/bulletins/info/2006/was.pdf ; https://bizwest.com/2007/05/11/irrigation-woes-hang-over-spring-planting-season/ |

### 2g. Law, compacts, river politics

| # | Place / topic | Lat, lon | Hard numbers | Why it matters | Source |
|---|---|---|---|---|---|
| 52 | Prior appropriation (marker: Colorado Supreme Court, Denver, or the San Luis People's Ditch, 1852, 37.20, -105.42) | 39.738, -104.987 | "First in time, first in right"; seven water divisions each with a water court (1969 Act). Colorado Constitution 1876, Art. XVI | Seniority, not need or location, decides who gets cut | https://waterknowledge.colostate.edu/ (general); dates from general knowledge, **unverified** this session |
| 53 | Lee Ferry, Arizona (compact point) | 36.865, -111.588 | 1922 Compact: Upper Basin not to deplete flow below 75 MAF in any 10 years; Upper Basin 7.5 MAF/yr on paper. 1948 Upper Basin Compact: Colorado 51.75%, Utah 23%, Wyoming 14%, New Mexico 11.25%, Arizona 50,000 AF [P]. Ten-year Lee Ferry flow about 81.2 MAF as of 1 Oct 2026, below the roughly 82.3-82.5 MAF "tripwire" that includes half the Mexico obligation [S] | The number that could trigger the first compact fight in a century | https://waterknowledge.colostate.edu/water-management-administration/agreements-compacts-treaties/ ; https://www.kunc.org/regional-news/2026-09-10/if-colorado-river-compact-heads-to-supreme-court-everybody-loses-experts-say ; https://www.colorado.edu/center/gwc/media/861 |
| 54 | Post-2026 Colorado River rules (what they mean for Colorado) | (use Lake Powell or Blue Mesa marker) | ROD and 2027-2028 Operating Guidelines signed 21 Aug 2026; 10-year framework to 2036 with two-year guidelines; no seven-state deal. Powell releases 6.0-8.23 MAF/yr, adjustable down to 5 MAF "in combination with releases from CRSP Upper Initial Units to protect elevation 3,500 ft". WY2027 Powell release set at 6.0-7.0 MAF. Lower Basin cut 1.25 MAF in 2027 and 2028 plus at least 700 KAF conservation [P]. Upper Basin: no mandatory cuts; voluntary contributions "up to 200 kaf per year"; $100M federal money; possible Upper Basin conservation pool in Powell; Colorado targets about 50,000 AF in WY2027 [S/P]. 2026 Drought Response Operations: 660,000 AF to 1.0 MAF from Flaming Gorge by April 2027; none from Aspinall (Blue Mesa) in WY2026 [P/S]. Nevada sued within days; Powell at 3,519 ft on 14 Oct 2026 vs 3,510 ft protection level [P] | Colorado avoided mandatory cuts but is being asked to pay farmers not to irrigate, and its reservoirs are the backstop | https://www.usbr.gov/ColoradoRiverBasin/post2026/decision-doc/FutureColoradoOperations_Factsheet.pdf ; https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf ; https://www.kunc.org/regional-news/2026-08-24/colorado-river-plan-orders-cuts-in-the-lower-basin-while-relying-on-voluntary-conservation-upstream ; https://www.kunc.org/news/2026-09-19/colorado-has-a-new-voluntary-program-to-conserve-colorado-river-water-farmers-are-wary ; https://www.usbr.gov/ColoradoRiverBasin/documents/dcp/DROA/2026/uc-2026droughtresponseoperationsplan-summaryandframework-508-20260423.pdf |
| 55 | Shoshone Power Plant, Glenwood Canyon | about 39.571, -107.227 (approx) | Senior 1902 right (1,250 cfs, **unverified** this session) plus a 1929 right of 158 cfs [S]; non-consumptive. Colorado River District buying both from Xcel for $99M; $97M raised incl. $40M federal released 22 May 2026; CWCB accepted instream-flow use Nov 2025; change case 25CW3177 filed Nov 2025 in Division 5 water court, about 60 parties; still needs decree and PUC approval; not closed as of last report found [P/S] | One old hydro right keeps the upper Colorado flowing west past the Front Range's tunnels | https://www.coloradoriverdistrict.org/press-release-department-of-interior-releases-40-million-award-for-the-shoshone-water-rights-preservation-project/ ; https://coloradosun.com/2026/02/04/colorado-water-historic-colorado-river-court-case-shoshone/ |
| 56 | Arkansas River Compact / Kansas v. Colorado (state line near Holly) | 38.03, -102.05 | 1948 compact; Colorado paid Kansas more than $34M in April 2005 for depletions 1950-1996/99 caused by post-compact wells, plus about $1.1M costs in 2006 [S]. The 60/40 Colorado/Kansas split of John Martin conservation storage is **unverified** this session | Why every Arkansas valley well now needs an augmentation plan | https://agriculture.ks.gov/dwr/interstate-rivers-and-compacts/kansas-colorado-arkansas-river-compact |
| 57 | Rio Grande Compact (Lobatos gauge near state line) | 37.078, -105.757 | 1938; Colorado delivers on sliding index schedules tied to Del Norte and Conejos gauges [P]. Share delivered in a given year **unverified** | In good years Colorado owes more, so farmers are curtailed even when the river is high | https://waterknowledge.colostate.edu/water-management-administration/agreements-compacts-treaties/ |
| 58 | 15-Mile Reach, Colorado River (Palisade to Gunnison confluence) | midpoint 39.09, -108.46 | April 2026: about 50 cfs for several days vs dry-year target 1,240 cfs. August 2026 average about 119 cfs vs 810 cfs target [S] | Four endangered fish live below the last big diversions and above the next tributary | https://waterdesk.org/?p=18593 ; https://www.kunc.org/news/2026-09-19/colorado-has-a-new-voluntary-program-to-conserve-colorado-river-water-farmers-are-wary |
| 59 | Instream flow and recreation rights (Golden whitewater park; Salida) | Golden 39.754, -105.228; Salida 38.537, -105.992 | CWCB holds instream-flow rights on nearly 1,700 stream segments, more than 9,700 miles, plus 480 natural lakes [S]. 21 local governments hold recreational in-channel diversion rights; Golden was first [S] | Colorado law's answer to "what about the river itself" | https://cwcb.colorado.gov/focus-areas/ecosystem-health/instream-flow-program ; https://www.kunc.org/news/2025-05-29/colorado-communities-have-spent-millions-of-dollars-on-whitewater-parks-are-they-worthwhile |

### 2h. Tribes

| # | Place | Lat, lon | Hard numbers | Why it matters | Source |
|---|---|---|---|---|---|
| 60 | Southern Ute (Ignacio) and Ute Mountain Ute (Towaoc); Animas-La Plata / Lake Nighthorse | Ignacio 37.118, -107.633; Towaoc 37.204, -108.729; lake 37.22, -107.91 | 1986 settlement, ratified 1988 (PL 100-585). A-LP statutory supply: 33,050 AF/yr to each tribe (16,525 AF depletion each); Colorado subtotal 81,760 AF [S, USBR FAQ]. Lake Nighthorse 123,541 AF, filled 2011. Only 4 of 11 project entities have used water. Southern Ute first tapped its water in May 2025 (council approved up to 2,000 AF/yr, for oil and gas well completions), the first tribal use since authorisation in 1968. Ute Mountain Ute still has no delivery route [P via repost] | Settled rights without pipes are water on paper | https://coyotegulch.blog/2025/08/03/the-southern-ute-tribe-has-finally-tapped-lakenighthorse-water-why-did-it-take-60-years-shannon-mullane-fresh-water-news-animasriver/ (repost of https://coloradosun.com/2025/07/27/southern-ute-tribe-colorado-animas-la-plata-water-rights/) ; https://webarchive.library.unt.edu/eot2008/20090118131129/http:/www.usbr.gov/uc/progact/animas/faq.html |

### 2i. Industry and other

| # | Place | Lat, lon | Hard numbers | Why it matters | Source |
|---|---|---|---|---|---|
| 61 | Craig Station (Tri-State), Yampa River | 40.463, -107.591 | Uses 16,000 AF/yr (KUNC) or about 9,400 AF/yr (8.4 MGD, Colorado Sun): sources conflict. Closing 2028. USBR counts 12.5-16.7 KAF/yr thermal-electric CU in Colorado's Green River basin, 2021-24 [P] | What happens to a coal plant's water right when the plant closes | https://www.kunc.org/environment/2020-02-21/as-western-coal-plants-close-what-happens-to-their-water ; https://coloradosun.com/2020/07/16/water-saved-closing-coal-power-plants-colorado/ ; USBR CU report |
| 62 | Comanche Station (Xcel), Pueblo | 38.208, -104.575 | About 9.4 MGD, the most of any Colorado power plant (2020); unit retirements cut use about 70% [S]. A "14 AF in 2023" figure in one blog is implausible; ignore | Leased city water cooling a coal plant | https://coloradosun.com/2020/07/16/water-saved-closing-coal-power-plants-colorado/ |
| (63) | Coors brewery, Golden (Clear Creek) | 39.757, -105.217 | Clear Creek is the only source; under 4:1 water-to-beer in 2014, goal 3:1; about 10 million barrels/yr; upgrade to save 100 million gal/yr [S, dated] | A brand built on a water right | https://www.kunc.org/business/2014-05-06/saving-water-the-key-to-beers-success ; https://www.molsoncoors.com/our-locations/us/brewery/golden |
| (64) | Ski areas / snowmaking (marker: Keystone 39.605, -105.954) | 39.605, -105.954 | Statewide about 3,582 AF/yr; about 80% returns at melt [S] | Tiny volume, large economic value, taken in early winter low flows | section 1b |
| (65) | Oil and gas, Wattenberg field (Weld County) | about 40.2, -104.8 | Fracking about 26,000 AF/yr statewide, 0.17% of diversions [S] | Small share, but 100% consumptive | section 1b |

### 2j. Stress numbers

| Topic | Value | Tag | Source |
|---|---|---|---|
| 2050 municipal and industrial gap | 230,000 to 740,000 AF/yr (2023 Plan); one-pager headline "740 thousand acre foot municipal gap". 2019 Technical Update wording: 245,000-754,000 | [P] one-pager; [S] ranges | one-pager above; https://waterdesk.org/2022/07/state-officials-looking-for-engagement-on-updated-water-plan/ |
| Agricultural gap | about 20% of ag diversion demand unmet today; could reach 3.5 MAF by 2050 in the hot-growth scenario | [S] | https://westernresourceadvocates.org/?p=15630 |
| Population | 5.8 million now; 8.6 to 10 million by 2050 | [P] | CSU page above |
| Farmland loss projections | about 14,000 acres to urbanisation (2023 Plan); 33,000-76,000 acres to buy-and-dry (stakeholder estimate); up to 20% of irrigated land by 2050 without action | [S] | search summary of plan coverage; https://bizwest.com/?p=361384 |
| Turf law | SB24-005: from 1 Jan 2026 no new nonfunctional turf, artificial turf or invasive plants in the covered new development, including street rights-of-way, parking lots, medians and transportation corridors (exact property classes: read the bill); existing turf untouched. State turf-replacement fund $2M (HB22-1151), 50 projects, then about $470,000. Acres replaced **unverified** | [S] | https://leg.colorado.gov/sites/default/files/documents/2024A/bills/2024a_005_eng.pdf ; https://www.kunc.org/news/2025-01-23/replacing-grass-can-help-save-water-but-just-how-much |
| 2026 municipal restrictions | Denver Stage 1 (March), Aurora Stage 1 (6 Apr), Aspen Stage 3 (15 May), Eagle River district Stage 3, Golden and Arvada Stage 1, Fort Collins watch (1 May) | [S] | https://www.cpr.org/2026/04/14/colorado-water-restrictions-drought/ |
| West Slope shortfall | Colorado users on the Colorado River system were short an average 600,000 AF/yr in 2021-23 (state estimate) | [S] | https://coloradosun.com/2025/10/10/farmers-ranchers-colorado-river-water-use-dry-year/ |

---

## 3. GIS sources (no key; each tested 12 Nov 2026 with plain curl)

| Layer | URL | Test result | Notes |
|---|---|---|---|
| DWR water districts (dissolve to the 7 divisions) | https://dnrftp.state.co.us/CDSS/GIS/Water_Districts.zip | 200, 2.7 MB; unzipped OK | Shapefile, 78 polygons, fields DISTRICT, DIVISION, BASIN, NAME; NAD83 UTM 13N (reproject to 4326). Dissolve on DIVISION for divisions 1-7. No standalone divisions file found under guessed names |
| Designated groundwater basins | https://gisdnr.state.co.us/arcgis/rest/services/CSLB_External/Water/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson | 200, GeoJSON, 8 features | DB_NAME, AREA_MI (Northern High Plains 9,293 sq mi; Kiowa Bijou 2,096; Southern High Plains 2,506; Upper Big Sandy 441; Lost Creek 433; Upper Black Squirrel Creek 349; Upper Crow Creek 259; Camp Creek 180). Shapefile alternative: https://dnrftp.state.co.us/CDSS/GIS/Designated_Basins.zip (200, 28 KB) |
| Denver Basin aquifer system extent | https://gisdnr.state.co.us/arcgis/rest/services/CSLB_External/Water/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=geojson | 200, GeoJSON, 1 polygon | Single outline. Per-aquifer extents (USGS PP 1770: Dawson, Denver, Arapahoe, Laramie-Fox Hills), third-party host: https://services6.arcgis.com/xywRsoW77b9tukTL/arcgis/rest/services/Extents/FeatureServer (200; 11 layers) |
| Canals and ditches, statewide-ish | https://services.arcgis.com/04HiymDgLlsbhaV4/arcgis/rest/services/DWR_Irrigation_Ditches/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson | 200, GeoJSON polylines; 5,290 features (page with resultOffset; transfer limit applies) | Third-party (HDR) copy of DWR's irrigation ditch layer. Fields NAME1, WDID1, DIVISION, LENGTH_FT. Extent stops at -107.49 W and only divisions 2, 3, 4, 6 are tagged, so the Grand Valley and most of Divisions 5 and 7 are missing ("not complete for the State") |
| Canals, Division 1 (South Platte) | https://dnrftp.state.co.us/CDSS/GIS/Div1_Canals.zip | 200, 15.2 MB (header only; not unzipped) | Official CDSS shapefile |
| Canals, Division 3 (Rio Grande) | https://dnrftp.state.co.us/CDSS/GIS/Div3_Canals.zip | 200, 0.5 MB (header only) | Official CDSS shapefile. Div2/4/5/6/7 `_Canals.zip` return 404; real names are on https://cdss.colorado.gov/gis-data/gis-data-by-category, which returned 403 to both curl and WebFetch (CloudFront block), so open it in a browser |
| Grand Valley canals fallback | https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query (where ftype=336, bbox -108.75,39.0,-108.3,39.25) | Service root 200; my count query timed out twice | USGS NHD flowlines; FType 336 = canal/ditch. **Not confirmed working** |
| Transbasin tunnels (points) | https://gisdnr.state.co.us/arcgis/rest/services/Hosted/DWR_Structure_Open_Data/FeatureServer/0/query?where=upper(structname)%20LIKE%20%27%25TUNNEL%25%27&outFields=wdid,structname,structtype,div,latdecdeg,longdecdeg,watersrc&f=geojson | 200, GeoJSON; 113 matches incl. mine tunnels | Official DWR "All Structures" point layer (max 2,000 per request). Key WDIDs: 5104634 Adams Tunnel; 5104655 Moffat Water Tunnel; 0800653 Roberts Tunnel (no coordinates); 1104615 Boustead outlet; 1104613 Homestake outlet; 1104617 Twin Lakes Tunnel; 6200617 Gunnison Tunnel; 3801763 Independence Pass tunnel no. 2; 5104679 Vasquez; 5104603 Williams Fork; 4800576 Laramie River Tunnel. No line geometry for tunnels found: draw straight portal-to-portal lines |
| DWR gauges, wells with water levels | https://gisdnr.state.co.us/arcgis/rest/services/Hosted (DWR_Active_Surface_Water_Gages_Open_Data, DWR_Wells_With_Water_Levels_Open_Data, etc.) | Folder listing 200 | Useful for later layers; individual layers not tested |
| Lower Arkansas named canals | https://services8.arcgis.com/M8gfRYkM5rpzCso9/arcgis/rest/services/Catlin_Canal/FeatureServer (also Holbrook_Canal, Colorado_Canal_Main_Canal, Bessemer_Canal_shapefile) | Listed as public on ArcGIS Online; not queried | Lower Arkansas Valley WCD; handy for the buy-and-dry story |

---

## 4. Tour ideas (two-minute guided tour)

1. Berthoud Pass on the Divide: 80% of the water falls on the west side, 90% of the people live on the east. In 2026 the snow was a quarter of normal.
2. La Poudre Pass: the Colorado River is diverted in its first mile by a ditch dug in 1890.
3. Adams Tunnel, Grand Lake: 13 miles under Rocky Mountain National Park; about 200,000 AF a year to 1.1 million people and 550,000 acres. All the tunnels together move about half a million AF.
4. Dillon Reservoir: Denver's biggest bucket sits west of the Divide and ended 2026 at 63%.
5. Greeley and Weld County: nine-tenths of the water Colorado consumes goes to farms, most of it to feed cattle.
6. Crowley County: 50,000 irrigated acres became 2,000 when the water was sold to cities.
7. Castle Rock: suburbs on a one-time aquifer, now buying farms to replace it.
8. San Luis Valley: potato growers taxing their own wells as the aquifer sits 1.4 MAF below its 1976 mark.
9. Shoshone and Palisade: a 1902 hydro right pulls the river west; even so, the Grand Valley's canal ran dry in September 2026 for the first time in over a century.
10. Blue Mesa to Lee Ferry: Colorado's largest reservoir finished the year at 17%; the state avoided mandatory cuts in the August 2026 federal decision but two-thirds of its water is still owed downstream.

---

## 5. Figures I am least sure about

- Native supply: 13.7 MAF (opened, CSU) vs "15 MAF" (secondhand). The "two-thirds leaves" line depends on which you use; the 10.43 MAF outflow figure is from a search summary of a 2002 DWR table.
- The 4.8 MAF / 380 KAF / 116 KAF sector volumes: BizWest's report of the draft 2023 plan, not read in the plan itself (the executive-summary PDF exceeded the fetch size limit). The 91/7/2 percentages are confirmed on the plan one-pager.
- Per-tunnel averages: mixed periods (mostly 1975-2005 state model) and all from search summaries. Only the roughly 505-515 KAF/yr export total is primary.
- Reservoir capacities marked [derived] (storage plus space-to-fill from a USBR table) and John Martin, Navajo, Pueblo total, Wolford: several conflicting or unconfirmed values.
- Autumn 2026 storage for John Martin, Eleven Mile, McPhee, Pueblo (AF) and Horsetooth/Carter/Granby in AF: not found; only percent-of-average for end of September.
- 2022 Census irrigated acres (2,287,808) and hay/alfalfa acreage: read from a garbled table extraction.
- Denver Basin decline rates: old (1990s-2000s) and from summaries; nothing current opened.
- Republican River acres retired to date (17,065) and the pipeline's cost and length: conflicting sources, undated.
- Craig Station water use: 9,400 vs 16,000 AF/yr.
- Shoshone 1,250 cfs figure and the deal's status after May 2026: no later report found; do not say it has closed.
- San Luis Valley 1.425 MAF deficit: trade-press article whose exact date I did not confirm (an earlier report said 1.3 MAF).
- Lee Ferry ten-year flow (81.2 MAF) and tripwire (82.3-82.5 MAF): from analysts, not an official accounting.
- "Colorado targets 50,000 AF of conservation in WY2027" and the "up to 200 KAF" Upper Basin figure: journalism and a law-firm summary; the ROD text itself was not opened.
- Items left **unverified** and stated only from memory: 18 downstream states; 60/40 John Martin split; NISP 40,000 AF yield; Aurora population; 1876 constitution / 1969 Act details; 2006 curtailment acreage.
- All non-DWR coordinates.

---

## 6. Used on the map: verification log

Compiled 12 Nov 2026 while writing `west/content/co.js`. "Opened" means the page or PDF text itself was read this session.

### Budget (all one measure: water consumed)

- **Opened the 2023 Colorado Water Plan full text** (PDF copy at https://smwsdco.specialdistrict.org/files/2de8a9473/Colorado_WaterPlan_2023_Digital.pdf; the map links the plan's home page, https://cwcb.colorado.gov/colorado-water-plan). It gives, on one page: agricultural 4,844,000 AF (~90%), municipal 380,000 AF (~7%), industrial 116,000 AF (~3%); "13.5 million acre-feet" originating in Colorado; "more than 60 percent" provided to "the 19 states and Mexico"; "less than 40 percent, or 5.3 million acre-feet" consumed. These replace the BizWest [S] figures (BizWest is paywalled; not confirmed there). The three sector volumes sum to 5.34 MAF; shares shown as 91 / 7 / 2, which matches the plan's one-page summary.
- Used 13.5 MAF and "19 downstream states" (plan), not 13.7 MAF / 18 states (CSU page) or 15 MAF (secondhand).
- Surface 83% / groundwater 17%: confirmed on the CSU page as shares "of this amount consumed", and in the plan as a graphic. The map applies the shares to 5.34 MAF (4.43 / 0.91 MAF) and says so in the note. The "about 2 MAF pumped" figure is a withdrawal measure and is not shown.
- 15.3 MAF diverted (CSU, [P]) appears only in a text note that explains the difference; it is not in the chart.

### [S] figures confirmed (and where)

| Figure | Opened |
|---|---|
| Snowpack 24% of median on 1 Apr 2026, record low; streamflow forecasts 25-45% of average | wwa.colorado.edu briefing, 9 Apr 2026 |
| "Roughly 500,000 AF" moved across the Divide; C-BT "more than 220,000" (not shown; map uses Northern Water's 200,000) | Colorado River District policy PDF (text extracted locally) |
| 27 diversions; Ewing Ditch 1880; Moffat 1936 / railroad tunnel 1928; Roberts and Dillon 1964; Homestake 1967 (Aurora and Colorado Springs); Hoosier 1952; Gunnison Tunnel 1909 and about 390,000 AF/yr; Shoshone 1909, 15 MW; Grand Valley Canal 1882 most senior right; Fry-Ark 265,000 acres; Pueblo Dam 1970-75; Aurora and 95% of the Rocky Ford Ditch by 1999; Southern Delivery System 2016; Dolores Project 1977 | Water Plan text |
| Instream flow program: 1,700+ segments, 9,800+ miles, 482 lakes, since 1973; whitewater-park rights since 2001 | Water Plan text (the 9,700 miles / 480 lakes in section 2g were older) |
| Oldest right: San Luis People's Ditch, 1852; seven water courts; 100+ acequias | Water Plan text |
| Irrigated acres: South Platte 850,000+; lower Arkansas 220,000+; San Luis Valley about 520,000; Republican nearly 580,000; 20% of farm demand unmet; 33,000-76,000 acres at risk from planned buy and dry | Water Plan text |
| Groundwater: 60% of pumping from nonrenewable aquifers; Southern High Plains declines 3.5-21 ft 2008-2018; SLV shallow aquifer down about 1.2 MAF since 1977 (2022 report); seven subdistricts; well rules March 2021; Denver Basin wells drying in 2002 | Water Plan text |
| Designated basins: eight, Ground Water Commission, 1965 Act; tributary / nontributary definitions; Denver Basin 100-year aquifer life; exempt wells | CSU Water Knowledge, groundwater rights page |
| Compacts: South Platte 1923, 120 cfs, 14 Jun 1897; Upper Basin 51.75%; 75 MAF in 10 years; Republican 54,100 AF; Rio Grande 1938; Arkansas 1948 | CSU compacts page and Water Plan |
| Shoshone: $99M price; $97M secured incl. $40M federal (22 May 2026); water court change case filed | Colorado River District press release |
| 15-Mile Reach: "just over 50 cfs" for several days in April 2026 vs 1,240 cfs dry-year April target; four fish; canals take a combined 1,950 cfs; 16,000 AF, half the usual fish water | Aspen Journalism, "Fish out of water" (waterdesk.org copy returned 403) |
| Yampa call 19 Aug 2026 at Lily Park Ditch No. 1 pump station; "well over 300 diversions"; fifth main-stem call below Stagecoach | Steamboat Pilot via Coyote Gulch |
| Elkhead releases began 13 Jul 2026 | western-water.com, 17 Jul 2026 |
| Green Mountain 21,812 AF on 4 Sep and 32,080 AF on 29 Jul 2026; Grand Valley rights 520 / 120 / 460 / 730 cfs; Blue Mesa inflow 377,000 AF (42%), Apr-Jul 155,000 AF | western-water.com, 5 Sep 2026 |
| Government Highline Canal undeliverable 3 Sep 2026, "first time since around 1914"; designed for 730 cfs, 100 cfs available; Green Mountain 14.8% full | Big Pivots via Coyote Gulch |
| Peaches: about 3 ft of water per acre; Talbott about 200,000 trees; picking a month early | KUNC, 24 Jul 2026 |
| Uncompahgre: about 80,000 acres; 50% opening allocation; Ridgway about 85%; Whitewater target 500 cfs (normal about 1,050, floor 750) | KVNF, 29 Jul 2026 |
| McPhee: 381,000 AF with 229,000 active; about 63,000 acres; full-service supply "about 13 or 14 percent" | KSJD, 19 Jun 2026 |
| Boustead Tunnel: 945 cfs; 51,650 AF/yr 1985-2017; 63,600 AF/yr 2013-17; 120,000 AF one-year cap | Aspen Journalism, 2018 |
| Roberts Tunnel 23 miles, Dillon to the South Platte near Bailey | Denver Water |
| Denver Water: 1.5M people, "nearly one-fourth of all Coloradans"; 4,000 sq mi; 708,250 AF; Dillon 257,304, Eleven Mile 97,779, Gross 41,811, Antero 20,122 AF; "approximately half" of supply from the Colorado River; 81% peak vs 97.5% typical; Dillon 80% on 17 Jun, 404 cfs vs 1,750; Stage 1, two days, 20% | Denver Water pages |
| Gross Reservoir: about 42,000 to about 119,000 AF; dam raised 131 ft; dam-raising phase finished 3 Jun 2026; court ruling Sep 2026 | Denver Water Gross pages |
| C-BT: 200,000 AF average; 13.1-mile tunnel; 1.1M residents; 550,000 acres; 12 reservoirs | Northern Water |
| Glade: 170,000 AF; up to 40,000 AF/yr; construction anticipated 2027 | Northern Water NISP page |
| Aurora: storage 39% of 156,411 AF on 25 Oct 2026; Prairie Waters up to 10 MGD, 29 wells, pumps lift almost 1,000 ft; about 50% of rights portfolio from South Platte farms | auroragov.org |
| Colorado Springs: Colorado River basin "about half our raw water supply"; "up to 70%" with reuse | csu.org, Jan 2023 |
| Castle Rock: about a third renewable; 3.2B+ gallons; 2065 goal; about $29M in Weld County; about 90,000 residents | Colorado Politics, 24 May 2026 |
| Fort Collins voluntary shortage watch from 1 May 2026, two days a week | fortcollins.gov |
| Wolford: releases from 6 Jun 2026; $450,000; over 15,000 AF from Wolford and Ruedi; about 3,000 AF for indoor use | Colorado River District press release |
| Crowley County: 50,000+ irrigated acres in the 1970s; about 5,000 by 2015; 2,500 in 2012; buyers; 90% of Twin Lakes water owned by cities and industry; Colorado Canal 1890s | Colorado Independent (2015) via Coyote Gulch |
| San Luis Valley: about 1.3 MAF lost since 1976; fee $150 to $500 per AF proposed; 2031; trial summer 2026 | Inside Climate News, 4 Oct 2026 |
| Republican: eight wells, 12.6 miles, 2012, $72M; 25,000 acres by Dec 2029; 17,120 retired by early 2025; about 5,000 wells | KUNC / Big Pivots, Aug 2025 |
| Lake Nighthorse 123,541 AF; first filled 29 Jun 2011; 280 cfs pumps | Reclamation project page |
| Southern Ute first use May 2025, up to 2,000 AF/yr, oil and gas well completions; 4 of 11 entities; Ute Mountain Ute still seeking access; 1968 / 1986 / 1988 | Fresh Water News via Coyote Gulch |
| Craig 8.4M gallons/day; Comanche 9.4M gallons/day, most of any plant (2014-18); 70% cut from two unit closures; water leased from Pueblo Board of Water Works | Colorado Sun, Jul 2020 |
| Fracking about 26,000 AF/yr, 0.17% of state water use; DJ Basin almost three-quarters of industry use, 0.4% recycled (2022) | Inside Climate News, Mar 2025 |
| Snowmaking about 2.2 billion gallons/yr statewide; about 80% returns; Breckenridge 197M gallons | CBS Colorado, Dec 2021. The 3,582 AF and 5,620 AF figures in section 1b were not found there and are not used |
| Colorado's voluntary program: 50,000 AF in water year 2027 | KUNC / Colorado Newsline, 19 Sep 2026 |
| Supreme Court let Nebraska file its complaint (29 Jun 2026); Nebraska set aside roughly $500M in 2022; canal near Ovid | WOWT |

### Changed from the fact sheet

- Supply 13.7 MAF and 18 states replaced by the plan's 13.5 MAF and 19 states.
- San Luis Valley deficit: used 1.3 MAF (Inside Climate News, opened) and 1.2 MAF since 1977 (Water Plan), not 1.425 MAF (trade press, not confirmed).
- Republican acres retired: 17,120 by early 2025 (KUNC), not 17,065. Pipeline cost $72M, not a range.
- Shoshone Power Plant coordinates corrected to 39.5879, -107.1937 (DWR structure 5300584); the fact sheet's approximate point was about 3 km off. Lily Park call point set to the DWR pump station (40.4515, -108.4525). Glade site set to DWR structure 0303900 (40.678, -105.188).

### Dropped (could not confirm, so not on the map)

- Per-tunnel averages for Moffat, Roberts, Homestake, Twin Lakes and Grand River Ditch (the dnrweblink page needs cookies). Those cards carry dates and routes only. The 1890 date for the Grand River Ditch is also left out.
- Shoshone right sizes (1,250 and 158 cfs) and the 1902 / 1929 dates (Colorado Sun returned 429). The card says only that the rights are among the largest and most senior on the river.
- Lower Arkansas "120,000 acres lost 1978-2022" and Crowley's 1,994 acres in 2022 (Colorado Sun 429); HB26-1340.
- Kansas v. Colorado damages ($34M) and the 60/40 John Martin split (Kansas page 403; CSU page gives no split). John Martin capacity (USGS page 403); the card has no volume.
- Navajo capacity (Reclamation project page under maintenance), so no percent-full bar; storage and percent of average only.
- Weld County farm sales (NASS PDF blocked); hay and alfalfa acreage (garbled table); the hay feature was not built.
- 2006 South Platte well shutdown (440 wells); Denver Basin area and decline rates; Ogallala saturated thickness.
- Fort Collins 50/50 Poudre / C-BT split and NISP cost figures; Grand Junction / Ute Water figures; Coors; data-centre projections; Lee Ferry ten-year flow and "tripwire"; "up to 200 kaf" Upper Basin contributions; Arkansas voluntary flow programme; Rio Grande 2026 forecast; ski snowmaking in AF; turf law; 2050 gap figures.
- Ute Mountain Ute farm allocation of 15-20% (the KSJD piece opened did not carry it); the tribe's card repeats the project-wide 13-14%.

### Coordinates

Reservoir markers use the centroid of the OpenStreetMap outline. Tunnel portals come from the DWR structures layer and agree with OpenStreetMap where both exist (Adams, Roberts east portal, Boustead, Gunnison, Hoosier). Moffat, Homestake and Twin Lakes are straight lines between DWR portals (Twin Lakes west end: Grizzly Reservoir outline). Snowpack marker is placed at Monarch Pass as a stand-in for the whole Divide.
