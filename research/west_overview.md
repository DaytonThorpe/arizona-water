# Water in the West: overview fact sheet

Compiled 12 Nov 2026 for the map's top-level "whole West" screen. Every figure carries year + source. **unverified** = not confirmed at a primary/credible source in this pass. "[derived]" = my arithmetic from sourced numbers.

Conversion used throughout: 1 Mgal/d = 1,120.9 AF/yr.

---

## 1. Nine-state table (one consistent dataset: USGS 2015)

**Dataset choice.** USGS "Estimated Use of Water in the United States in 2015" (Circular 1441) is still the newest *complete* all-category, all-state compilation. The newer USGS products (2000-2020 "reanalysis" model releases for public supply, irrigation and thermoelectric, by HUC12 watershed) cover only three categories, only modeled values, and are not published as state totals, so they are not used here.
- Numbers below are **state sums of the USGS 2015 county-level data release v2.0** (file `usco2015v2.0.csv`, fields `TO-WFrTo`, `TO-WGWFr`, `TO-WSWFr`, `IR-WFrTo`, `PS-WFrTo`, `PT-WFrTo`, `IR-IrTot`), summed by me. Source: https://doi.org/10.5066/F7TB15V5 (landing page https://www.sciencebase.gov/catalog/item/5af3311be4b0da30c1b245d8); report: https://pubs.usgs.gov/circ/1441/circ1441.pdf. County sums can differ from the Circular's rounded state table by a few Mgal/d.
- Fresh water only (saline excluded; matters only for CA 3,163, UT 350, WY 97, NM 89, NV 82 Mgal/d saline in 2015).
- Population: Census Vintage 2025, 1 July 2025 (`NST-EST2025-ALLDATA.csv`): https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/state/totals/NST-EST2025-ALLDATA.csv (index: https://www.census.gov/data/datasets/time-series/demo/popest/2020s-state-total.html).

| State | Pop. 2025 | Fresh withdrawals 2015, Mgal/d | = MAF/yr [derived] | Surface / ground | Irrigation | Public supply | Thermo-electric | Everything else | Irrigated acres 2015 |
|---|---|---|---|---|---|---|---|---|---|
| AZ | 7,623,818 | 5,979 | 6.70 | 54% / 46% | 75.7% | 20.0% | 1.4% | 2.9% | 1.04 M |
| CA | 39,355,309 | 25,596 | 28.69 | 33% / 67% | 74.2% | 19.9% | 0.1% | 5.8% | 9.32 M |
| NM | 2,125,498 | 2,809 | 3.15 | 52% / 48% | 84.5% | 9.3% | 1.2% | 5.0% | 0.76 M |
| CO | 6,012,561 | 10,301 | 11.55 | 85% / 15% | 87.4% | 8.2% | 0.4% | 4.1% | 3.04 M |
| UT | 3,538,904 | 3,875 | 4.34 | 73% / 27% | 78.1% | 16.1% | 1.6% | 4.3% | 1.30 M |
| ID | 2,029,733 | 17,737 | 19.88 | 70% / 30% | 86.2% | 1.6% | 0.0% | 12.2% | 3.79 M |
| MT | 1,144,694 | 9,796 | 10.98 | 98% / 2% | 96.5% | 1.6% | 0.8% | 1.2% | 2.47 M |
| NV | 3,282,188 | 2,882 | 3.23 | 53% / 47% | 71.7% | 18.4% | 0.3% | 9.6% | 0.70 M |
| WY | 588,753 | 8,047 | 9.02 | 92% / 8% | 96.8% | 1.3% | 0.6% | 1.3% | 1.44 M |
| **Nine states** | **65,701,458** | **87,022** | **97.5** | | **~83%** | | | | **23.9 M** |

Reading notes (all from the same USGS 2015 file):
- "Everything else" = self-supplied domestic + industrial + livestock + aquaculture + mining. Idaho's 12% is almost all aquaculture (1,965 Mgal/d, trout farms on Snake Plain springs); Nevada's 10% is mostly mining (195 Mgal/d).
- **California's 67% groundwater is a drought-year artifact**: 2015 was the fourth year of the 2012-16 drought and pumping replaced missing surface deliveries. Do not present it as "normal".
- These are **withdrawals**, not consumptive use. MT, WY, ID and CO totals are inflated relative to "water used up" because flood-irrigation return flows go back to the river and get withdrawn again downstream.
- USGS "irrigation" includes golf courses and parks; "thermoelectric" is fresh water withdrawn for power-plant cooling.

**State agencies' own totals differ, and the map should say so.**
- Arizona: ADWR's most-cited figures are ~7.0 MAF total (2017) and 72% agriculture / 22% municipal / 6% industrial (2019 shares), vs USGS 2015 6.70 MAF and 76% irrigation / 20% public supply. Reasons: different years, ADWR counts golf/turf in "industrial" or "municipal", and ADWR reports sector demand rather than point-of-withdrawal categories. Sources already in `research/demand.md`: https://mapazdashboard.arizona.edu/article/arizonas-water-use-sector ; https://www.arizonawaterfacts.com/water-your-facts
- Other states' agency totals (CA DWR "applied water" incl. environmental water; CO CWCB/DWR diversions; ID IDWR; UT DWRe) were **not collected in this pass** and will differ for the same reasons. Each state chapter should give its own agency number alongside the USGS one.

### Signature facts (one per state)

| State | Signature fact | Year | Source |
|---|---|---|---|
| AZ | Arizona takes the largest cut under the new Colorado River rules: 760,000 AF/yr in 2027 and 2028, 27% [derived] of its 2.8 MAF apportionment. | 2026 | https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations |
| CA | Two giant canal systems move northern water south through the Delta: the federal Central Valley Project delivers ~7 MAF in an average year to 3+ million acres; the State Water Project holds contracts for 4.17 MAF. | CRS, Mar 2026 | https://www.everycrsreport.com/files/2026-03-26_R45342_04a0a7041f6b24badbbcbfe23ef73abb53bffa2f.html |
| NM | Elephant Butte, the Rio Grande's main reservoir, fell to ~1.4% full in summer 2026 (lowest since 1971) and held 208,084 AF on 11 Nov 2026 after autumn storms. | 2026 | https://www.western-water.com/2026/08/21/still-at-1-4-elephant-butte-at-lowest-level-since-1971/ ; https://www.usbr.gov/rsvrWater/rsv40Day.html?siteid=1119 |
| CO | Every major river flows out of Colorado; ~80% of the water falls west of the Continental Divide while 80-90% of the people live east, so 24 tunnels and ditches move ~500,000 AF/yr under the mountains. | Colorado Water Plan (2015 summary) | https://waterinfo.specialdistrict.org/files/fbf57c782/colorado-water-plan-summary.pdf (secondary host of the CWCB summary; confirm against CWCB before publishing) |
| UT | Great Salt Lake's south arm stood at 4,190.0 ft on 11 Nov 2026, 1.5 ft [derived] above its record low of 4,188.5 ft (Nov 2022) and 8 ft below the 4,198 ft "healthy" target. | 2026 | https://wre-rapps.utah.gov/GSLApp/ ; https://gardner.utah.edu/news/great-salt-lake-ends-2025-water-year-at-third-lowest-level-on-record-as-recovery-work-continue/ |
| ID | The Eastern Snake Plain Aquifer has lost more than 14 MAF of storage since the early 1950s, and about 600,000 AF in water year 2026 alone. | 2026 | https://www.boisestatepublicradio.org/environment/2026-08-26/idaho-drought-eastern-snake-plain-aquifer |
| MT | Montana is almost entirely a surface-water, irrigation state (98% surface water, 96.5% irrigation, USGS 2015) and holds Fort Peck, an ~18.7 MAF reservoir on the Missouri. | 2015 / USACE | USGS file above; USACE Omaha District Fort Peck page (via search; https://www.nwo.usace.army.mil/Missions/Dam-and-Lake-Projects/Missouri-River-Dams/Fort-Peck/ **URL unverified**) |
| NV | Nevada has the smallest Colorado River share, 300,000 AF/yr, and stretches it with return-flow credits: treated wastewater sent back to Lake Mead lets it divert more than it consumes. Southern Nevada consumed 187,000 AF in 2023. | 2023-25 | https://www.snwa.com/water-resources/where-water-comes-from/ ; https://snwa.com/assets/pdf/water-resource-plan-executive-summary-2025.pdf |
| WY | A headwaters state feeding four major basins (Missouri, Colorado, Columbia, Great Basin); it is party to seven interstate compacts and two Supreme Court decrees governing what must flow out. | SEO | https://seo.wyo.gov/surface-water/interstate-compacts-and-decrees |

---

## 2. Shared river systems

### Colorado River
| Fact | Value | Year | Source |
|---|---|---|---|
| Natural flow at Lees Ferry, long-term | ~14.6 MAF/yr | 1906-2024 | CRS R45546 (1 Oct 2026), from Reclamation natural-flow data: https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf |
| Natural flow since 2000 | ~12.4 MAF/yr (12.43) | 2000-2024 | same |
| Flow assumed by the 1922 Compact negotiators | 16.4 MAF/yr | 1922 | same |
| Total promised on paper | 7.5 (Lower) + 7.5 (Upper) + 1.5 (Mexico, 1944 treaty) = 16.5 MAF | | same; https://www.usbr.gov/lc/region/pao/lawofrvr.html |
| Lower Basin apportionments | CA 4,400,000 AF; AZ 2,800,000 AF; NV 300,000 AF | 1928 BCPA / 1964 decree | same |
| Upper Basin apportionments | AZ 50,000 AF, then percentages of the rest: CO 51.75%, UT 23%, WY 14%, NM 11.25% | 1948 | CRS R45546 |
| Upper Basin in AF if the full 7.5 MAF existed [derived, nominal] | CO 3,855,375; UT 1,713,500; WY 1,043,000; NM 838,125 | | [derived] from the percentages; the Upper Basin has never used close to this |
| Lake Powell now | 6,376,000 AF, 27% full, elev. 3,538.84 ft | 8 Nov 2026 | Reclamation Weekly Hydrologic Update: https://www.usbr.gov/lc/region/g4000/weekly.pdf |
| Lake Mead now | 6,954,000 AF, 27% full, elev. 1,039.66 ft | 8 Nov 2026 | same |
| Total system storage | 19,925,000 AF, 34% of capacity (37% a year earlier) | 8 Nov 2026 | same |
| Daily check | Powell 3,539.48 ft / 6.416 MAF; Mead 1,040.48 ft / 7.011 MAF | 11 Nov 2026 (provisional) | https://www.usbr.gov/lc/region/g4000/hourly/levels.html |
| Context | Both reservoirs set record lows in 2026; October storms raised Powell ~14 ft and added ~850,000 AF | 2026 | https://www.kunc.org/regional-news/2026-11-08/recent-rains-were-a-drop-in-the-bucket-for-colorado-river-reservoir-water |
| Record of Decision | Signed 21 Aug 2026; 10-year framework (through 2036) run in 2-year operating guidelines, first set 2027-2028 | 2026 | https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations ; ROD: https://www.usbr.gov/ColoradoRiverBasin/post2026/decision-doc/P26_RecordofDecision_Final.pdf |
| 2027-28 cuts | 1.25 MAF/yr from the US Lower Basin: AZ 760,000; CA 440,000; NV 50,000 AF. Plus 250,000 AF/yr from Mexico (Minute 334). No mandatory Upper Basin cuts. | 2027-28 | DOI release; CRS R45546 |
| Extra conservation | At least 700,000 AF of voluntary Lower Basin conservation. **Sources conflict**: DOI says "over the two-year period"; CRS says 700,000 AF/yr. | | same two sources |
| Powell release | 6.0-7.0 MAF expected for water year 2027 (framework range 5-12 MAF); floor elevation to protect: 3,510 ft | | DOI release |
| Escalation | If Mead is projected below 1,010 ft, shortages can rise (CRS: up to 3.6 MAF total incl. Mexico; DOI framework "up to 3 MAF" Lower Basin) | | CRS R45546 |
| Litigation | Nevada v. Burgum filed 24 Aug 2026 (D. Nev.) | | CRS R45546 |
| Who depends on it | ~40 million people, 30 tribes, 5.5 million irrigated acres; ~70% of use is irrigation | | CRS R45546; DOI |

### Rio Grande
- Rio Grande Compact (1938) divides the river among Colorado, New Mexico and Texas; New Mexico's delivery point to Texas is Elephant Butte Reservoir. https://www.tceq.texas.gov/news/releases/u-s-supreme-court-resolves-rio-grande-compact-litigation
- *Texas v. New Mexico and Colorado* (filed 2013): Supreme Court entered the final consent decree 26 May 2026 (some reports say 27 May). Terms reported: New Mexico cuts Lower Rio Grande groundwater pumping by 18,200 AF over 10 years; project water below Elephant Butte split 57% NM / 43% TX. https://www.governor.state.nm.us/2026/05/28/u-s-supreme-court-approves-rio-grande-compact-settlement-agreement-ends-13-year-interstate-dispute/ ; https://sourcenm.com/2026/05/28/supreme-court-approves-texas-v-new-mexico-settlement-to-end-rio-grande-water-dispute/
- Elephant Butte storage: 208,084 AF, elev. 4,314.03 ft on 11 Nov 2026 (provisional; was 143,256 AF on 1 Nov). https://www.usbr.gov/rsvrWater/rsv40Day.html?siteid=1119
- Capacity ~1.96-2.0 MAF (Water Data for Texas lists conservation capacity 1,960,900 AF: https://waterdatafortexas.org/reservoirs/individual/elephant-butte) so ~10-11% full [derived].
- Summer 2026 low: ~1.4% full, lowest since 1971. https://www.western-water.com/2026/08/21/still-at-1-4-elephant-butte-at-lowest-level-since-1971/

### Columbia / Snake
- Columbia at The Dalles: ~139 MAF/yr (~192,000 cfs), 1879-2002 average; roughly 9.5x the Colorado's long-term natural flow [derived]. https://www.nationalacademies.org/read/10962/chapter/5
- Snake above Lower Granite supplies ~24% of April-September runoff at The Dalles; Columbia above Grand Coulee ~65% (1991-2020). https://www.nwcouncil.org/news/2025/05/30/2025-columbia-basin-water-supply-outlook/
- Idaho irrigation (USGS 2015): 15,293 Mgal/d = 17.1 MAF/yr [derived] on 3.79 million acres, the second-largest irrigation withdrawal in this nine-state set after California. USGS file above.
- Upper Snake reservoirs (Palisades, American Falls, Jackson Lake) reported 8-9% full in Oct 2026, described as an all-time low, vs 75-80% a year earlier (news report citing Reclamation; **not confirmed on a Reclamation page**). https://www.eastidahonews.com/2026/10/record-heat-and-dwindling-reservoirs-leave-idaho-bracing-for-another-tough-water-year/
- Salmon/dams: 14 federal dams in the Columbia River System (31 in the wider federal power system); four lower Snake dams (Ice Harbor, Lower Monumental, Little Goose, Lower Granite) total 3,000+ MW; 13 ESA-listed salmon/steelhead populations basin-wide, 4 in the Snake. The 2023 federal-tribal-state MOU was withdrawn by presidential memorandum on 12 Jun 2025 and the litigation stay was lifted 11 Sep 2025. https://www.everycrsreport.com/files/2026-01-13_R48089_fe37e4f1d679fc054be14280fe77db352db19f97.html

### Missouri headwaters (Montana)
- Fort Peck Lake total capacity ~18.7 MAF (USACE Omaha District figure; daily bulletins use 18.46 MAF at elev. 2,250 ft). Source via search of USACE pages; archived bulletin: https://webarchive.library.unt.edu/web/20170119025851/http://www.nwd-mr.usace.army.mil/rcc/nwo/dailybull.pdf
- Fort Peck elevation 2,221.4 ft at end of October 2026, releases 7,000 cfs (USACE Northwestern Division release of 9 Nov 2026, read on a mirror; **storage in MAF for Nov 2026 not found**). https://www.defconlevel.com/alert/2026-11-09-u-s-army-corps-of-engineers-northwestern-division-gavins-point-dam-releases-to-be-reduced-to-fall-water-supply-rate
- Upper Missouri Basin 2026 runoff forecast: 16.2 MAF, 63% of average; six-reservoir system storage forecast ~44.8 MAF at the start of the 2027 runoff season, below the base of the flood-control zone. Same source.
- Montana withdrawals are 98% surface water and 96.5% irrigation (USGS 2015).
- Fort Peck storage 12.6 MAF in Jan 2026 (Montana DNRC reservoir report, search snippet only, **unverified**).

### Sacramento-San Joaquin / Central Valley
- Central Valley Project: >7 MAF delivered in an average year (~5 MAF farms, 0.6 MAF cities, ~1.2 MAF refuges/fish); 3+ million acres; 20 dams, ~500 miles of canals; contracts total >9.5 MAF. CRS R45342 (26 Mar 2026): https://www.everycrsreport.com/files/2026-03-26_R45342_04a0a7041f6b24badbbcbfe23ef73abb53bffa2f.html
- State Water Project: contract ("Table A") total 4.17 MAF; ~2.5 MAF delivered on average; serves 27 million people and 750,000 acres (DWR). https://water.ca.gov/What-We-Do/Water-Storage-And-Supply ; CRS R45342
- 2026 allocations: SWP 10% (1 Dec 2025) -> 30% (29 Jan) -> 45% (15 May 2026; no later change found). CVP south-of-Delta irrigation 15% (Feb) -> 20% (24 Mar) -> 25% (19 May) -> 28% (11 Aug 2026). https://water.ca.gov/News/News-Releases/2026/May-2026/State-Water-Project-Allocation-Increases-Heading-into-Summer-Months ; https://www.usbr.gov/mp/drought/
- Delta exports (SWP + CVP pumps): record 6.59 MAF in 2011; 4.30 MAF in 2024. CRS R45342.
- Reservoirs on 11 Nov 2026 (CDEC): Shasta 2,246,293 AF = 49% of 4,552,000 (92% of average); Oroville 1,436,913 AF = 42% of 3,424,753 (80% of average); San Luis 1,323,451 AF = 65%. https://cdec.water.ca.gov/reportapp/javareports?name=RES

### Great Salt Lake / Bear River
- South arm 4,190.0 ft, north arm 4,189.7 ft on 11 Nov 2026 (provisional). https://wre-rapps.utah.gov/GSLApp/
- Record low 4,188.5 ft, Nov 2022; state's healthy-range target 4,198 ft. Great Salt Lake Strike Team: https://gardner.utah.edu/news/great-salt-lake-ends-2025-water-year-at-third-lowest-level-on-record-as-recovery-work-continue/
- Getting to 4,198 ft by 2055 needs ~800,000 AF/yr of additional inflow; ~400,000 AF total was delivered 2021-2025. Strike Team Jan 2026 report: https://d36oiwf74r1rap.cloudfront.net/wp-content/uploads/2026/01/GSL-Jan2026.pdf
- The lake is terminal (no outlet), fed by the Bear, Weber and Jordan rivers; the Bear, which loops through WY, ID and UT, is the largest. Bear River share of inflow (commonly cited ~60% of surface inflow) is **unverified** in this pass.
- State official (Aug 2026): no new record expected in 2026, but a repeat of the dry 2025-26 winter would make a 2027 record "unavoidable". https://missoulacurrent.com/great-salt-lake-7/

### Ogallala / High Plains aquifer
All from USGS SIR 2023-5143 (predevelopment, ~1950, to 2019): https://pubs.usgs.gov/sir/2023/5143/sir20235143.pdf
- Whole aquifer (8 states, 111.8 million acres): area-weighted water level down 16.5 ft; recoverable storage down 286.4 MAF to ~2.91 billion AF.
- Colorado: water level down 14.0 ft; storage down 18.3 MAF.
- New Mexico: water level down 19.1 ft; storage down 11.4 MAF.
- Wyoming: down 0.8 ft; 0.5 MAF. (Texas, for scale: down 44.1 ft; 169.6 MAF.)
- For scale [derived]: Colorado's 18.3 MAF loss is about 2.9x what Lake Powell holds today.

### Klamath
- Four hydropower dams (J.C. Boyle, Copco No. 1, Copco No. 2, Iron Gate) removed, finished in 2024: the largest dam removal in US history, reopening 400+ miles (640+ km) of salmon habitat. https://www.fisheries.noaa.gov/feature-story/worlds-biggest-dam-removal-project-open-420-miles-salmon-habitat-fall ; https://www.usgs.gov/publications/rewilding-upper-klamath-river-basin-rapid-recolonization-chinook-salmon-following
- More than 20,000 Chinook moved upstream in the two years after removal. https://insideclimatenews.org/news/27082026/salmon-return-to-klamath-river-after-dam-removals/
- 2025 monitoring: 2,497 fish passed Keno Dam and 210 salmon passed Link River Dam into Upper Klamath Lake (both dams remain, with fish ladders). Same source family (search summary; confirm figures in the article before quoting).
- 2026 run size: **not found**.

---

## 3. Candidate overview markers

Coordinates are decimal degrees from general reference knowledge, good to roughly 0.01 degree; **check against GNIS/NID before plotting dams at high zoom**. Storage "now" = date shown.

| # | Marker | Lat | Lon | Capacity | Storage now | Source for storage |
|---|---|---|---|---|---|---|
| 1 | Lake Powell (lake label) | 37.07 | -111.24 | ~23.3 MAF live [derived from 6.416 MAF = 27.5%] | 6,376,000 AF, 27% (8 Nov 2026) | https://www.usbr.gov/lc/region/g4000/weekly.pdf |
| 2 | Glen Canyon Dam, AZ | 36.937 | -111.484 | impounds Powell | 3,538.84 ft; floor to protect 3,510 ft | same; DOI release |
| 3 | Lees Ferry, AZ (Compact dividing point) | 36.866 | -111.588 | n/a | natural flow 14.6 MAF long-term, 12.4 since 2000 | CRS R45546 |
| 4 | Lake Mead (lake label) | 36.15 | -114.43 | 26.12 MAF available capacity | 6,954,000 AF, 27% (8 Nov 2026) | weekly.pdf; https://www.usbr.gov/lc/region/g4000/hourly/levels.html |
| 5 | Hoover Dam, NV/AZ | 36.016 | -114.737 | impounds Mead | 1,039.66 ft | same |
| 6 | Flaming Gorge Dam, UT (Green River) | 40.915 | -109.422 | ~3.75 MAF [derived] | 2,400,000 AF, 64% (11 Nov 2026) | levels.html |
| 7 | Blue Mesa Dam, CO (Gunnison) | 38.453 | -107.334 | ~0.83 MAF [derived] | 176,500 AF, 21% (11 Nov 2026) | levels.html |
| 8 | Navajo Dam, NM (San Juan) | 36.800 | -107.612 | ~1.70 MAF [derived] | 1,440,000 AF, 85% (11 Nov 2026) | levels.html |
| 9 | Elephant Butte Dam, NM (Rio Grande) | 33.154 | -107.192 | ~1.96-2.0 MAF | 208,084 AF, ~10-11% [derived] (11 Nov 2026) | https://www.usbr.gov/rsvrWater/rsv40Day.html?siteid=1119 |
| 10 | Fort Peck Dam, MT (Missouri) | 48.003 | -106.416 | ~18.7 MAF | elev. 2,221.4 ft end Oct 2026; MAF **not found** | USACE via mirror (section 2) |
| 11 | Shasta Dam, CA (Sacramento; CVP) | 40.719 | -122.419 | 4,552,000 AF | 2,246,293 AF, 49% (11 Nov 2026) | https://cdec.water.ca.gov/reportapp/javareports?name=RES |
| 12 | Oroville Dam, CA (Feather; SWP) | 39.539 | -121.486 | 3,424,753 AF | 1,436,913 AF, 42% (11 Nov 2026) | same |
| 13 | Sacramento-San Joaquin Delta, CA | 38.05 | -121.60 | n/a | exports 4.30 MAF in 2024; record 6.59 MAF (2011) | CRS R45342 |
| 14 | Great Salt Lake, UT | 41.10 | -112.50 | terminal lake | 4,190.0 ft south arm (11 Nov 2026); record low 4,188.5 ft | https://wre-rapps.utah.gov/GSLApp/ |
| 15 | American Falls Dam, ID (Snake) | 42.779 | -112.874 | ~1.67 MAF (**unverified**, from memory of Reclamation figure) | reported 8-9% full, Oct 2026 (news, not confirmed) | East Idaho News (section 2) |
| 16 | Palisades Dam, ID (Snake) | 43.333 | -111.203 | ~1.2 MAF active (**unverified**) | reported 8-9% full, Oct 2026 (news, not confirmed) | same |
| 17 | Grand Coulee Dam, WA (Columbia; edge of frame) | 47.956 | -118.982 | ~9.6 MAF total, ~5.2 MAF active (Reclamation); irrigates ~671,000 acres | not collected | https://usbr.gov/projects/index.php?id=155 |
| 18 | Former Iron Gate Dam site, CA (Klamath) | 41.934 | -122.435 | removed 2024 | free-flowing | NOAA (section 2) |
| 19 | Ogallala in Colorado (Yuma County area) | 40.0 | -102.4 | aquifer | CO storage down 18.3 MAF since ~1950 | USGS SIR 2023-5143 |
| 20 | Ogallala in New Mexico (Clovis/Portales area) | 34.40 | -103.20 | aquifer | NM storage down 11.4 MAF; level down 19.1 ft | same |
| 21 | Lower Granite Dam, WA (lower Snake; edge of frame) | 46.660 | -117.428 | 810 MW | n/a | CRS R48089 |

Suggested core 12 for a first cut: 1, 3, 4/5, 6, 7, 9, 10, 11, 12, 13, 14, 15, plus 19 as the one groundwater marker.

---

## 4. Guided-tour story beats

1. **It starts as snow.** The Colorado "relies largely on snowmelt in the basin's northern areas"; a Powell spring inflow is ~5 MAF in an average year, and snowpack supplies ~30% of California's water. (CRS R45546; KUNC Nov 2026; CRS R45342)
2. **The Continental Divide splits it.** In Colorado ~80% of the water falls west of the Divide and 80-90% of the people live east; ~500,000 AF/yr goes through 24 tunnels and ditches. (Colorado Water Plan summary)
3. **Most of it goes to farms.** Across the nine states, irrigation is ~83% of 97.5 MAF of fresh withdrawals, on 23.9 million irrigated acres (USGS 2015). [derived]
4. **Cities take a small share.** Public supply is 20% in Arizona and California, 8% in Colorado, under 2% in Idaho, Montana and Wyoming (USGS 2015), for 65.7 million people (Census 2025).
5. **Paper river vs real river.** The Colorado was divided assuming 16.4 MAF/yr; 16.5 MAF is promised; it has averaged 12.4 MAF since 2000. (CRS R45546)
6. **The reservoirs show the gap.** Powell and Mead are each 27% full (8 Nov 2026); starting in 2027 the Lower Basin gives up 1.25 MAF/yr, 760,000 AF of it from Arizona. (Reclamation; DOI)
7. **When rivers run short, pumps run.** Groundwater was 46% of Arizona's and 67% of drought-year California's withdrawals (USGS 2015); the High Plains aquifer is down 286 MAF since ~1950 and Idaho's Snake Plain aquifer 14+ MAF. (USGS SIR 2023-5143; Boise State Public Radio)
8. **Some of it is being given back.** Four Klamath dams came out in 2024 and 20,000+ Chinook swam upstream within two years; Utah is trying to find ~800,000 AF/yr to refill Great Salt Lake. (NOAA; Inside Climate News; GSL Strike Team)

---

## 5. Figures I am least sure about

1. **State totals are my county sums** of the USGS 2015 file, not copied from the Circular's state table; expect last-digit differences (e.g. UA WRRC quotes Arizona at 6,022 Mgal/d including reclaimed water vs my 5,979 fresh).
2. **California's 67% groundwater share** is correct for 2015 but unrepresentative (deep drought year).
3. **700,000 AF of extra Lower Basin conservation**: per two years (DOI) or per year (CRS)? Check the 2027-2028 Operations Plan, p. 8.
4. **Maximum shortage "sideboard"**: 3.0 MAF (news/DOI framing) vs 3.6 MAF (CRS, apparently including Mexico).
5. **Upper Basin apportionments in AF** are nominal derivations from percentages, not legal quantities.
6. **Elephant Butte percent full** depends on which capacity is used (1.96-2.01 MAF), and storage jumped ~65,000 AF in ten days; the number will date quickly.
7. **Fort Peck**: capacity quoted three ways (18.46, 18.7, 19.1 MAF); current storage in MAF not found; USACE release read only via a mirror site.
8. **Upper Snake "8-9% full"** comes from one news article; American Falls and Palisades capacities are from memory.
9. **Colorado "80% west / 500,000 AF / 24 tunnels"** is from a secondary copy of the Colorado Water Plan summary (2015-era).
10. **Great Salt Lake**: Bear River's share of inflow not sourced; the 4,190.0 ft reading is provisional and rounded on the state page.
11. **Klamath 2025 passage counts** (2,497 / 210) came from a search summary, not a page I read in full.
12. **All marker coordinates** are from general knowledge, not a gazetteer lookup.
13. **SWP "27 million people / 750,000 acres"** is DWR's current phrasing; CRS says ~25 million. SWP 45% and CVP 28% are the latest allocations found, not confirmed as final for 2026.
