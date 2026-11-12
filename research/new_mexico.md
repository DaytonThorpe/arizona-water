# New Mexico water: research fact sheet (supply, demand, places, law, GIS)

Compiled 2026-11-12 for the New Mexico chapter of the western-water map. Style follows `colorado.md`.

**Conventions**
- AF = acre-feet; KAF = thousand AF; MAF = million AF; cfs = cubic feet per second; OSE = New Mexico Office of the State Engineer; ISC = Interstate Stream Commission; USBR = Bureau of Reclamation; MRGCD = Middle Rio Grande Conservancy District; EBID = Elephant Butte Irrigation District; SJC = San Juan-Chama Project.
- Evidence tags: **[P]** = I opened the document itself (or its data file) and read the number. **[S]** = number seen only in a search-engine summary; re-open before use. **[derived]** = my arithmetic from [P] numbers. **unverified** = not confirmed.
- 2026 context: winter 2025-26 was a record-low snow year in New Mexico (statewide snow water equivalent set daily record lows from 9 March 2026). Spring and summer flows were far below normal; then September 2026 brought record rain in the south and October storms refilled part of Navajo, Heron and Abiquiu. All 2026 storage and flow readings are that year's readings, not typical values.

---

## 1. Statewide budget

### 1a. Where it goes and where it comes from (measure: withdrawals)

Source: OSE Technical Report 55, *New Mexico Water Use by Categories 2015* (May 2019), the latest edition published as a report. [P] https://www.ose.nm.gov/WUC/wucTechReports/2015/pdf/2015%20WUR%20final_05142019.pdf (listed at https://www.ose.nm.gov/WUC/wuc_waterUseData.php)

| Item | Value (calendar 2015, withdrawals) | Tag |
|---|---|---|
| Total withdrawals | 3,114,255 AF | [P] |
| Surface water | 1,629,968 AF (52.34%) | [P] |
| Groundwater | 1,484,287 AF (47.66%) | [P] |
| Irrigated agriculture | 2,376,065 AF (76.30%); 1,255,440 AF surface, 1,120,625 AF ground; canal and lateral conveyance losses 425,618 AF (33.90% of the surface diversion) | [P] |
| Public water supply | 284,157 AF (9.12%); 87,399 AF surface (30.76%), 196,758 AF ground (69.24%) | [P] |
| Reservoir evaporation (reservoirs of 5,000 AF or more) | 231,081 AF (7.42%) | [P] |
| Commercial | 57,526 AF (1.85%) | [P] |
| Power | 50,419 AF (1.62%) | [P] |
| Mining | 42,294 AF (1.36%) | [P] |
| Livestock | 36,046 AF (1.16%) | [P] |
| Self-supplied domestic (household wells) | 27,949 AF (0.90%), all groundwater | [P] |
| Industrial | 8,718 AF (0.28%), all groundwater | [P] |
| Commercial + industrial + mining + power together | 159,168 AF (5.11%) (report's own sum) | [P] |
| Irrigated acreage | 749,769 acres: 226,870 surface only, 408,628 ground only, 114,271 both; flood 45.45%, sprinkler 51.42%, drip 3.13% | [P] |
| Population | 2,099,856 (2015) | [P] |

- The report tabulates **withdrawals**, not consumptive use. Reservoir evaporation is counted as a withdrawal category. The map's budget uses this one measure throughout.
- Newer data: OSE's public GIS layer `water_use_2020` (county table, 33 rows) sums to 3,805,077 AF for 2020 (irrigated agriculture 2,966,697; public supply 299,803; reservoir evaporation 282,522; power 65,420; mining 56,752; commercial 56,627; livestock 38,519; domestic 30,151; industrial 8,586; surface 1,882,385; ground 1,922,692; 786,192 irrigated acres). [derived] by summing the layer: https://services2.arcgis.com/qXZbWTdPDbTjl7Dy/arcgis/rest/services/water_use_2020/FeatureServer/0 . No 2020 report is listed on the OSE page as of 12 Nov 2026, so the map uses the published 2015 report and does not show the 2020 sums.
- USGS 2015 (overview table): 2,809 Mgal/d = 3.15 MAF, 52% surface / 48% ground, consistent with OSE.

### 1b. Future supply

| Item | Value | Tag | Source |
|---|---|---|---|
| 50-Year Water Action Plan (Jan 2024) | "New Mexico will have approximately 25% less water available in rivers and aquifers" over the next 50 years | [P] | https://www.nm.gov/wp-content/uploads/2024/01/New-Mexico-50-Year-WaterAction-Plan.pdf |
| Shortfall | "Within the next 50 years New Mexico will have a shortage of 750,000 acre feet of water" | [P] | same |
| Use | "New Mexicans use a total of approximately three million acre-feet of surface and groundwater per year" | [P] | same |
| New-water goals | "By 2028, 100,000-acre-feet of new water"; by 2035, 50,000 AF of treated brackish water; cut public-system water loss 25% by 2040 | [P] | same |
| Newer wording | "We need to prepare for 25-30% less water by 2070" | [P] | OSE/ISC presentation to the legislature's Water and Natural Resources Committee, 26 Oct 2026 |
| Groundwater share | groundwater is "52% of NM's total water supply", "78% of drinking water"; "24 of 33 counties rely primarily on groundwater"; "~45% of withdrawals metered" (NM Groundwater Alliance report, as summarized by OSE) | [P] | same presentation |


### 1c. Source documents opened (short names used below)

| Short name | Document | URL |
|---|---|---|
| TR55 | OSE Technical Report 55, Water Use by Categories 2015 | https://www.ose.nm.gov/WUC/wucTechReports/2015/pdf/2015%20WUR%20final_05142019.pdf |
| PLAN | 50-Year Water Action Plan, Jan 2024 | https://www.nm.gov/wp-content/uploads/2024/01/New-Mexico-50-Year-WaterAction-Plan.pdf |
| OSE-OCT | OSE/ISC "State Priorities for the Coming Year", legislature's Water and Natural Resources Committee, 26 Oct 2026 | https://www.nmlegis.gov/handouts/WNR%20102626%20Item%206%20OSE%20ISC%20Session%20Priorities%20and%20Education%20Initiatives.pdf |
| OSE-AUG | OSE/ISC "Building a Resilient Water Future for the Rio Grande", same committee, 31 Aug 2026 | https://www.nmlegis.gov/handouts/WNR%20083126%20Item%203%20OSE%20ISC%20TXvNM%20and%20Water%20Managenent%20Efforts.pdf |
| ISC-SEP25 | ISC "Texas v New Mexico and Colorado: Settlement and Implementation", 12 Sep 2025 | https://www.nmlegis.gov/handouts/WNR%20091125%20Item%2011%20ISC%20TX%20v%20NM%20Settlement.pdf |
| LFC-TX | Legislative Finance Committee brief, Texas v. New Mexico Settlement, 18 Nov 2025 | https://www.nmlegis.gov/handouts/ALFC%20111725%20Item%2020%20Texas%20vs.%20NM%20water%20settlement%20update.pdf |
| GOV | Governor's release, 28 May 2026 | https://www.governor.state.nm.us/2026/05/28/u-s-supreme-court-approves-rio-grande-compact-settlement-agreement-ends-13-year-interstate-dispute/ |
| ISC-FACT | ISC Rio Grande Compact fact sheet (long form, hosted by MRGCD, Jan 2026) | https://www.mrgcd.com/wp-content/uploads/2026/01/ISC-MRG-RioGrandeCompactLongForm_FINAL.pdf |
| RGCC | Reclamation, Calendar Year 2025 Report to the Rio Grande Compact Commission, Mar 2026 | https://www.usbr.gov/uc/DocLibrary/Reports/RioGrandeCompactCommission/uc-2025report-riograndecompactcommission-508-aao-20260300.pdf |
| PRC | Reclamation, Calendar Year 2025 Report to the Pecos River Compact Commission, Mar 2026 | https://www.usbr.gov/uc/DocLibrary/Reports/PecosRiverCommission/uc-2025report-pecosrivercommission-508-20260300.pdf |
| RM | Pecos River Master, Final Report, Water Year 2025 / Accounting Year 2026 | https://www.supremecourt.gov/DocketPDF/22/22O65/416158/20260710103807537_FR%20AY%202026.pdf |
| ISC-PECOS | ISC "Pecos Basin Water Issues", 8 Nov 2019 (legislative handout) | https://www.nmlegis.gov/handouts/WNR%20110719%20Item%206%20Interstate%20Stream%20Commission.pdf |
| MRG-AUG / MRG-JUL | MRGCD Irrigation and Hydrology Update, Aug and Jul 2026 | https://www.mrgcd.com/wp-content/uploads/2026/08/Irrigation-and-Hydrology-Update-August.pdf ; https://www.mrgcd.com/wp-content/uploads/2026/07/Irrigation-and-Hydrology-Update-July.pdf |
| KUNM | KUNM interview with MRGCD's Anne Marken, 7 Aug 2026 | https://www.kunm.org/text/news/2026-08-07/rio-grande-in-albuquerque-dry-from-paseo-del-norte-to-rio-bravo-bridge-as-well-as-long-stretches-in-valencia-socorro-counties |
| NRCS | NRCS New Mexico Water Supply Outlook Report, 1 Apr 2026 | https://nrcs-prod.azureedge.us/sites/default/files/2026-04/April%201%202026%20New%20Mexico%20Water%20Supply%20Outlook%20Report.pdf |
| USBR-DATA | Reclamation Upper Colorado hydrologic database, daily storage (json per reservoir) | https://www.usbr.gov/uc/water/hydrodata/reservoir_data/site_map.html |
| 24MS | Reclamation 24-Month Study, Oct 2026 | https://www.usbr.gov/uc/water/crsp/studies/24Month_10_ucb.pdf |
| CUL | Reclamation, Upper Colorado River Basin Consumptive Uses and Losses 2021-2025 | https://www.usbr.gov/uc/DocLibrary/Reports/ConsumptiveUsesLosses/uc-ucrb-provisionalconsumptiveusesandlosses-2021-2025-508-20251200.pdf |
| NWS | NWS El Paso Drought Information Statement, 3 Oct 2026 | https://www.weather.gov/EPZ/DroughtInformationStatement |
| SF24 | City of Santa Fe Water 2024 Annual Report | https://santafenm.gov/media/files/public_works/SantaFe2024AnnualReport.pdf |
| ABQ | Albuquerque Bernalillo County Water Utility Authority: San Juan-Chama project page; 2024 annual report | https://www.abcwua.org/your-drinking-water-san-juan-chama-project/ ; https://www.abcwua.org/wp-content/uploads/2024/12/ABCWUA-2024AnnualReport-R4.pdf |
| TRIBAL | 2025 OSE/ISC Annual Report on Funding for Tribal Water Rights Settlements | https://www.nmlegis.gov/handouts/IAC%20111325%20Item%203%20OSE-Water%20Settlement%20Report.pdf |
| NGW | Reclamation Navajo-Gallup Water Supply Project page; news release 5310 | https://www.usbr.gov/uc/progact/navajo-gallup/ ; https://www.usbr.gov/newsroom/news-release/5310 |
| PWRC | NM Produced Water Research Consortium (NMSU) presentation, 5 Nov 2026 | https://www.nmlegis.gov/handouts/RHMC%20110526%20Item%202%20Produced%20Water%20Consortium%20Presentation.pdf |
| AG24 | 2024 New Mexico Agricultural Statistics Bulletin (NMDA / USDA NASS, Aug 2025) | https://nmdeptag.nmsu.edu/media/pdf/Ag-Stats-2024.pdf |
| DAIRY | NMSU, New Mexico Dairy Industry Key Indicators, Mar 2025 | https://dairy.nmsu.edu/documents/dairy-status_mar25.pdf |
| USGS-HP | USGS SIR 2023-5143, High Plains aquifer water-level and storage changes, predevelopment to 2019 | https://pubs.usgs.gov/publication/sir20235143 |
| NMBG | NM Bureau of Geology, aquifer lifetime in Curry and Roosevelt counties (2017 fact sheet; Earth Matters 2018) | https://geoinfo.nmt.edu/geoscience/research/documents/27/Aquifer_lifetime_201708WEB.pdf ; https://geoinfo.nmt.edu/publications/periodicals/earthmatters/18/n2/em_v18_n2.pdf |
| ENM-LFC | LFC brief, Eastern New Mexico Rural Water System, 14 May 2025 | https://www.nmlegis.gov/handouts/ALFC%20051325%20Item%207%20ENMU%20Water%20Authority.pdf |
| ENM-DOI | Interior Dept waiver notice describing the Eastern New Mexico Rural Water System, Sep 2026 | https://www.doi.gov/sites/default/files/documents/2026-09/final-non-availability-project-level-waiver-plunger-valves.pdf |
| NMUNIT | Reclamation, New Mexico Unit of the Central Arizona Project; ISC NM Unit Fund update 31 Aug 2026 (local download) | https://www.usbr.gov/lc/phoenix/programs/NMCAPAWSA/NMCAPAWSA.html |
| UTTON | Utton Center (UNM School of Law), Water Matters! chapters on groundwater, domestic wells, acequias, adjudications, Active Water Resource Management, Strategic Water Reserve | https://uttoncenter.unm.edu/resources/research-resources/water-matters-.html |
| NMAA | NM Acequia Association presentation to the legislature, 3 Oct 2018 (local download; county table) | https://lasacequias.org/ |
| INTEL | Rio Rancho Observer, "Intel pays water authority $32M to build 6-mile pipeline" | https://www.rrobserver.com/news/intel-pays-water-authority-32m-to-build-6-mile-pipeline/176934 |
| COB | Circle of Blue, 2023, Las Vegas NM after the Hermit's Peak/Calf Canyon fire | https://www.circleofblue.org/2023/world/new-mexicos-largest-fire-wrecked-this-citys-water-source/ |
| TNC | The Nature Conservancy release on the Jicarilla Apache water lease, Jan 2022 | https://www.nature.org/en-us/newsroom/colorado-water-agreement-jicarilla-apache-nation/ |
| CONGRESS | Congress.gov bill status pages (S.562, S.563, S.564, S.565, H.R.1322-1324, H.R.1444), read 12 Nov 2026 | https://www.congress.gov/bill/119th-congress/senate-bill/564 |

---

## 2. Places and figures

Coordinates: reservoirs use Reclamation's site metadata (dam) and the outline centroid on the map; towns from general knowledge checked against the baked county and land-cover layers when rendering.

### 2a. Snow, rivers, 2026 conditions

| Item | Value | Date | Tag | Source |
|---|---|---|---|---|
| Snowpack | "Record low snow conditions have plagued New Mexico throughout the water year." Rio Chama-Upper Rio Grande, Rio Grande Headwaters and San Juan basins at 7, 9 and 11 percent of normal snow water equivalent; "No Snow" in all but the three northernmost basins | 31 Mar 2026 | [P] | NRCS |
| Statewide record | "Statewide record low SWE began on March 9, 2026" | 2026 | [P] | NRCS |
| 2026 streamflow | "Despite record-breaking September rainstorms, 2026 flows were well below historical medians: Rio Grande 30%, Pecos River 47%, San Juan River 69%" | 2026 | [P] | OSE-OCT |
| March heat | Average March 2026 temperature in the northern mountains over 4 degrees above the previous record | 2026 | [P] | OSE-AUG |
| Summer | "2026 was by far the warmest summer on record" (Middle Rio Grande Valley, May-Aug) | 2026 | [P] | OSE-OCT |
| Water year 2025 | Rio Grande streamflow 43% of the 1991-2020 median; San Juan 50% | 2025 | [P] | OSE-AUG |
| Otowi runoff 2025 | March-July native flow at Otowi 185,260 AF, 33% of median | 2025 | [P] | RGCC |
| September 2026 | "Record-setting September precipitation"; 300-400% of normal for the month in southern NM; Rio Grande at El Paso crest 14,900 cfs on 1 Oct | 2026 | [P] | NWS |
| River drying 2025 | Maximum 78.85 miles dry between Cochiti Dam and Elephant Butte on 19 Aug 2025; Albuquerque (Angostura) reach dried from 13 Jul, max 11.67 miles, reconnected 14 Sep | 2025 | [P] | RGCC |
| River drying 2026 | "More than 86 miles ... currently dry through the Middle Valley, including nearly 12 miles in the Albuquerque reach" (1 Jul); "More than 80 river miles remain dry, including nearly 13 miles through Albuquerque" (Aug) | 2026 | [P] | MRG-JUL, MRG-AUG |
| Same | 82 miles dry; about 13 in Albuquerque from Paseo del Norte to south of Rio Bravo; "only the third year since the 1980s that the river through Albuquerque has dried. So it dried in 2022, 2025, and now this year"; 25-year average about 37 miles; Cochiti release about 150 cfs, lowest since 1988 | 7 Aug 2026 | [P] | KUNM |
| Later peak | 112.4 miles dry (Source NM, 2 Sep 2026); 95.8 miles a record since monitoring began in 2004 (MRGCD July board) | 2026 | [S], not opened (403) | not used |
| Otowi flow | 235-250 cfs, "approximately one-quarter of the average flow for this time of year" | Aug 2026 | [P] | MRG-AUG |

### 2b. Rio Grande Compact and Texas v. New Mexico

| Item | Value | Tag | Source |
|---|---|---|---|
| Delivery duty | NM must deliver a share of the native flow entering the Middle Valley near Espanola to Elephant Butte: "In dry years, approximately 60% of flows must be delivered; in wet years, more than 80%"; excludes imported San Juan-Chama water | [P] | ISC-FACT |
| Debt | "If debt exceeds 200,000 acre-feet, it is considered a violation"; "Current compact status is -132,000 acre-feet"; debit rose by 8,000 AF in 2025; NM began 2025 with a debit of 124,000 AF | [P] | ISC-FACT, OSE-AUG, RGCC, MRG-AUG |
| Article VII | No native water may be stored in post-1929 upstream reservoirs (El Vado) when usable water in Elephant Butte and Caballo is below 400,000 AF; in effect for all of 2025 | [P] | RGCC |
| Rio Grande Project | Authorized 1905; lands 57% in New Mexico, 43% in Texas; about 178,000 acres | [P] | ISC-SEP25, RGCC |
| Case | Texas sued in the US Supreme Court in 2013; damages claimed could have exceeded $1 billion | [P] | ISC-SEP25 |
| Approval | "The U. S. Supreme Court Tuesday approved a historic settlement" (release dated Thu 28 May 2026, so Tuesday 26 May 2026) | [P] | GOV |
| Terms | Groundwater depletions in NM to fall by 18,200 AF per year, over 10 years; a state-line index with allowed over- and under-deliveries; a Lower Rio Grande plan within two years; Project water may be used for purposes other than irrigation | [P] | ISC-SEP25, LFC-TX |
| Cost | "could cost up to $150 million over 10 years"; $75 million requested for FY27 | [P] | LFC-TX |
| Leasing | "over 7,500 acres enrolled" in the voluntary Lower Rio Grande groundwater conservation (fallowing) program through 2028 | [P] | OSE-AUG, OSE-OCT |
| EBID 2026 | "2026 Rio Grande irrigation season surface water allotment ended at four inches (4") per acre" | [P] | NWS |
| Project 2025 | Final allocations: EBID 98,213 AF, El Paso district 142,261 AF, Mexico 11,705 AF | [P] | RGCC |

### 2c. Reservoirs (Reclamation daily storage data, read 12 Nov 2026; all [P] from USBR-DATA unless noted)

| Reservoir | Dam lat, lon | Storage 11 Nov 2026 | 2026 low | 2026 high | Notes |
|---|---|---|---|---|---|
| Elephant Butte | 33.154, -107.192 | 208,084 AF | 26,732 AF on 29 Jul | 251,819 AF on 17 Apr | 2026 low is the lowest daily value in the record since 1956 (26,700 AF on 8 Nov 1956; yearly lows: 1971 30,600; 2013 60,327; 2025 62,674) [derived]. Record high 2,302,800 AF, 16 Jun 1942. OSE: "August 31, 2026: Less than 1.5%; lowest level on record for that date" [P OSE-OCT]. Weekly summary 5 Nov 2026: 160,000 AF, 8% of capacity [P]. Combined capacity of Elephant Butte + Caballo implied by RGCC percentages is about 2.2 MAF [derived]. 2025 hydropower 17 million kWh [P RGCC] |
| Caballo | 32.896, -107.292 | 26,180 AF | 13,811 AF on 6 Sep | 48,447 AF on 28 May | record high 346,570 AF (1942) |
| Heron | 36.697, -106.699 | 75,679 AF | 26,432 AF on 10 Feb (lowest in the record back to 1975) | 75,679 AF on 11 Nov | record high 402,101 AF (1994). Allocable San Juan-Chama water on 1 Jan 2026 was 0 AF [P RGCC] |
| El Vado | 36.595, -106.737 | 23,815 AF | 16,025 AF on 16 Sep | 34,601 AF on 3 Nov | record high 190,261 AF (1986). Built by MRGCD in the 1930s with a steel faceplate; repair contract ($31.2M, 2021) stopped 20 Mar 2024; new alternatives under study [P RGCC] |
| Abiquiu | 36.269, -106.455 | 203,251 AF | 107,947 AF on 17 Jul | 203,251 AF on 11 Nov | Army Corps dam. In 2024 the Water Authority's storage space rose from 200,000 to about 230,000 AF and native Rio Grande water may now be stored [P ABQ annual report] |
| Cochiti | 35.628, -106.317 | 72,667 AF | 41,459 AF on 31 Jul | 74,171 AF on 9 Nov | Army Corps flood-control dam; a permanent recreation pool of 1,200 surface acres kept with San Juan-Chama water [P RGCC] |
| Navajo | 36.801, -107.612 | 1,436,157 AF | 777,694 AF on 14 Sep | 1,436,157 AF on 11 Nov | Total capacity 1,708,600 AF [P Reclamation Navajo Unit page]. End of Sep 2026: 0.824 MAF, 64% of average; Sep inflow 267% of average [P 24MS]. 5 Nov: 1,389,000 AF, 84% of live capacity [P weekly summary] |
| Santa Rosa | 35.044, -104.666 | 53,332 AF | 3,563 AF on 30 Jul | 75,594 AF on 13 Feb | Army Corps, completed 1980; irrigation entitlement 100,867 AF in 2025 [P PRC] |
| Sumner | 34.629, -104.392 | 15,975 AF | 2,675 AF on 21 Sep | 24,003 AF on 21 Feb | completed 1938; entitlement 31,767 AF [P PRC] |
| Brantley | 32.544, -104.381 | 44,474 AF | 8,885 AF on 28 Jul | 44,647 AF on 10 Nov | completed 1989, replaced McMillan; entitlement 40,000 AF [P PRC] |
| Avalon | 32.491, -104.252 | 4,842 AF | | | rebuilt 1907; entitlement 3,866 AF [P PRC] |
| Conchas | 35.40, -104.19 | not opened | | | Army Corps, completed 1939 (Wikipedia, [S]-grade); card carries no storage number |
| Ute | 35.35, -103.45 | not opened | | | state-owned, on the Canadian River |

Pecos system: four reservoirs' total irrigation entitlement is 176,500 AF; Carlsbad Project may irrigate up to 25,055 acres [P PRC].

### 2d. San Juan-Chama Project

| Item | Value | Tag | Source |
|---|---|---|---|
| What | Three diversion dams on San Juan tributaries in Colorado; water goes "through the Azotea Tunnel to Heron Reservoir" | [P] | RGCC |
| Azotea outflow | 45,507 AF in 2025; 10-year average 87,761 AF (2016-2025); yearly: 94,309 / 162,522 / 34,377 / 148,270 / 48,214 / 60,129 / 67,934 / 142,195 / 74,151 / 45,507 | [P] | RGCC Table 3 |
| 2025 allocation | 37,500 AF total (full allocation is about 96,200 AF; the full figure itself was not opened this session, so it is not on the map) | [P] / unverified | RGCC |
| 2026 | No initial allocation; Rio Blanco and Navajo River forecasts 54-55% of median; on 2 Oct 2026 "The San Juan-Chama project was diverting 0 cfs" | [P] | RGCC, 24MS |
| MRGCD share | "A full allocation is 20,900 AF which the MRGCD has not received since 2024"; about 25% of that accumulated in 2026 | [P] | MRG-AUG |
| NM export in Colorado River accounts | "Export outside system" for New Mexico: 56.3 KAF (2021), 63.8 (2022), 130.5 (2023), 68.1 (2024) | [P] | CUL |
| Tunnel lengths | Blanco 8.64 mi, Oso 5.05 mi, Azotea 12.8 mi: general knowledge, not opened; OSM bores measure 14.1, 8.7 and 20.8 km, consistent | unverified / [derived] | OSM |

### 2e. Cities

| City | Lat, lon | Figures | Tag | Source |
|---|---|---|---|---|
| Albuquerque | 35.084, -106.650 | Water Authority serves "some 650,000 people"; San Juan-Chama Drinking Water Project "completed in 2008", "more than $400 million", treatment plant about 80 million gallons a day; per-person use 252 gallons a day in the mid-1990s, about 124 now; aquifer levels "have risen significantly" | [P] | ABQ |
| Santa Fe | 35.687, -105.938 | 2024: 9,399 AF produced; 78% surface water (43.0% Buckman Direct Diversion on the Rio Grande, 34.8% Santa Fe River), 22% wells; 93 gallons per person per day; water levels up about 60 ft in the City Wellfield and 510 ft in the Buckman Wellfield since 2010; diversion online 2011 | [P] | SF24 |
| Las Cruces | 32.312, -106.778 | all groundwater (Mesilla and Jornada basins); about 100,000 people | [S] | search summary only; the card states only that the city relies on wells, with TR55 county data not used |
| Rio Rancho / Intel | 35.233, -106.664; Intel 35.229, -106.657 | Intel pumped more than 756 million gallons in 2020 and returned about 705 million (93%) to the municipal system; expansion could need 1 to 3 million gallons a day; $32M, 6-mile pipeline | [P] | INTEL |
| Las Vegas | 35.594, -105.223 | Gallinas River supplies 17,000 people; 2022 Hermit's Peak/Calf Canyon fire burned 341,735 acres; Congress provided $3.95 billion including a new treatment plant | [P] | COB |
| Gallup | 35.528, -108.743 | groundwater levels "dropped approximately 200 feet over the past 10 years" (Reclamation wording, undated) | [P] | NGW |
| Clovis / Portales | 34.405, -103.205 / 34.186, -103.334 | see 2g | | |

### 2f. Farms

| Item | Value | Tag | Source |
|---|---|---|---|
| Statewide | 749,769 irrigated acres (2015); irrigation is 76.30% of withdrawals | [P] | TR55 |
| MRGCD | supplies water to 50,000-70,000 acres; over 1,000 miles of canals, laterals and drains; 57-mile Low Flow Conveyance Channel; 2026: about 50 days of pueblo-only ("prior and paramount") deliveries by 5 Aug; non-pueblo farmers near Albuquerque waited over 100 days | [P] | RGCC, MRG-AUG, KUNM |
| Pecans | NM ranked 2nd in 2024 with 84.8 million lb; 49,000 bearing acres statewide; Dona Ana County 30,200 acres and 55.0 million lb | [P] | AG24 |
| Chile | NM ranked 1st; 8,000 acres harvested in 2024 (8,700 in 2016); Luna County 2,490 acres | [P] | AG24 |
| Dairy | 240,000 milk cows (2024), down 31% from 348,000 in 2006; fewer than 100 dairies; 2,710 cows per dairy, the largest average herd in the US; Curry 73,000 cows, Chaves 53,000, Roosevelt 50,000 | [P] | DAIRY |
| Carlsbad | up to 25,055 acres | [P] | PRC |
| Navajo Indian Irrigation Project | diverted 15,100 AF in Sep 2026; authorized 110,630 acres and 508,000 AF/yr ([S], not opened; not on the map) | [P] / [S] | 24MS |
| Arch Hurley (Tucumcari) | 41,400 acres, 300 miles of canals (Wikipedia; [S]-grade, not used as a stat) | [S] | |

### 2g. Groundwater

| Item | Value | Tag | Source |
|---|---|---|---|
| Law | Groundwater Code 1931; "thirty-nine groundwater basins"; "By 2006, all groundwater basins in the state had been declared"; domestic well permit up to 1 AF/yr | [P] | UTTON |
| Statewide | groundwater 47.66% of withdrawals (2015); 69.24% of public supply | [P] | TR55 |
| High Plains (Ogallala) in NM | area-weighted water-level change -19.1 ft, predevelopment to 2019; storage change -11.4 million AF | [P] | USGS-HP |
| Curry / Roosevelt | declines of 10 to over 100 feet; 30 feet of saturated thickness is roughly the minimum for large-scale irrigation; projected lifetime to that threshold "a few tens of years in the heavily irrigated region of southeast Curry and northeast Roosevelt Counties", based on the decline rate of the last two decades | [P] | NMBG (fact sheet and Earth Matters) |
| Eastern NM Rural Water System | about 130 miles of pipeline from Ute Reservoir, 28 million gallons a day, to Clovis, Portales, Texico, Elida and Cannon Air Force Base; total cost of infrastructure $672,365,830; cost shares 75% federal, 15% state, 10% local | [P] | ENM-DOI, ENM-LFC |
| Pecos / Roswell | 2003 settlement: state bought water rights on about 4,500 acres in Carlsbad district and 7,500 acres in the Roswell basin by 2009; augmentation wells of 15,750 AF/yr capacity; 1988 decree and $14 million paid to Texas | [P] | ISC-PECOS |
| Pecos compact status | Water year 2025 shortfall 15,100 AF; accumulated overage since 1987 110,900 AF | [P] | RM |
| Lower Rio Grande | see 2b | | |
| Augustin Plains | court upheld denial of an application to pump 54,000 AF/yr (KRWG, Aug 2026; page read from local download, URL not recovered) | [P] text, no URL | not on the map |

### 2h. San Juan basin and Colorado River

| Item | Value | Tag | Source |
|---|---|---|---|
| NM share | 11.25% of the Upper Basin's water | [P] | overview file (CRS) |
| NM use | 354.6 KAF (2021), 347.3 (2022), 424.3 (2023), 345.4 (2024) consumptive use and losses; 2024 parts: irrigation 220.0, export to the Rio Grande 68.1, reservoir evaporation 26.4, power plants 18.0, other cities and industry 10.8 | [P] | CUL |
| Navajo-Gallup | about 300 miles of pipeline, 19 pumping plants, two treatment plants; 37,764 AF/yr; about 250,000 people in 40 years; 43 Navajo chapters, Gallup, part of the Jicarilla Apache Nation; Cutter Lateral deliveries began 2020; San Juan Lateral more than 70% complete, first deliveries late 2028, completion end of 2029; cost about $2.194 billion (Oct 2023 estimate) against $870 million first authorized | [P] | NGW, TRIBAL |
| Navajo households | "over 40 percent of Navajo Nation households rely on water hauling" (sentence partly truncated in my read) | [P] partial | NGW |

### 2i. Tribes

| Item | Value | Tag | Source |
|---|---|---|---|
| Navajo Nation, San Juan | 606,660 AF/yr diversion or 325,670 AF/yr depletion; signed 2005, Congress 2009, Interior 17 Dec 2010 | [P] | ISC summary of the Navajo decree, 1 May 2011 (local download) |
| Jicarilla Apache | 2022 agreement lets the ISC lease up to 20,000 AF a year; the Nation formerly leased to coal plants | [P] | TNC |
| Aamodt (Nambe, Pojoaque, San Ildefonso, Tesuque) | filed 1966; 2010 Act; regional water system $406.3 million ($276.8M federal, $104.5M state, $38.4M county wording as printed); pueblo portion about 2,500 AF/yr; phase 1 under way | [P] | TRIBAL, UTTON |
| Taos Pueblo | 2010 settlement, $144 million | [P] | TRIBAL |
| Pending in Congress | five settlements; federal cost "over $3 billion", state $234,385,803. Zuni $685 million; Acoma and Laguna $850 million; Navajo Nation Rio San Jose $223,271,000. Latest actions on Congress.gov: Senate calendar 4 Jun 2026 (H.R.1323, H.R.1444); none enacted as read 12 Nov 2026 | [P] | TRIBAL, CONGRESS |
| Six Middle Rio Grande Pueblos | hold "the most senior water rights in the region" ("prior and paramount") | [P] | MRG-AUG |

### 2j. Industry

| Item | Value | Tag | Source |
|---|---|---|---|
| Produced water | 2025: 2.74 billion barrels = 7.5 million barrels a day = 353,000 AF/yr; about 60% disposed of by injection (35% sent to Texas, 24% injected in NM), about 40% reused in the oilfield (27% fracking, 14% enhanced recovery). Presentation marked preliminary | [P] | PWRC |
| Rules | Water Quality Control Commission allowed pilot projects but no discharge to surface or groundwater (2025); later vote 7-4 to vacate a July decision to hear an industry petition | [P] | Kiowa County Press repost of Source NM (local download) |
| Mining, power | mining 42,294 AF, power 50,419 AF of withdrawals in 2015 | [P] | TR55 |
| Power plants, San Juan basin | 18.0 KAF consumed in 2024 (26.6 in 2021) | [P] | CUL |
| Intel | see 2e | | |
| Data centers | Oracle "Project Jupiter" statement: about 11 million gallons initial fill, 168,000 gallons a year (company claim; not on the map) | [P] | company page |
| PFAS | Cannon Air Force Base plume four miles long; Highland Dairy (details beyond that not read) | [P] partial | NMED release (local download) |

### 2k. Acequias

| Item | Value | Tag | Source |
|---|---|---|---|
| Count | 640 acequias in 22 counties (NMAA 2018); 583 in 20 counties (NMAA 2015); Rio Arriba 163, Taos 97 (2015) | [P] | NMAA |
| History and law | Spanish colonists arrived 1598; acequias are political subdivisions run by a commission and a mayordomo; 2003 laws let acequias decide on water transfers out of the ditch | [P] | UTTON |
| Fund | $2.5 million a year Acequia and Community Ditch Infrastructure Fund | [P] | ISC Acequia Bureau, 1 Jul 2025 |

### 2l. Gila

| Item | Value | Tag | Source |
|---|---|---|---|
| Entitlement | Interior "may contract with users in New Mexico for up to an annual average of 14,000 acre-feet" under the 2004 Arizona Water Settlements Act | [P] | NMUNIT |
| Fund | NM Unit Fund about $130 million (about $40M + $90M accounts) in 2026; 2021 state law; spent on local water projects in Catron, Grant, Hidalgo and Luna counties; $26 million cap per cycle | [P] | ISC update 31 Aug 2026 |
| 2026 | Gila crest 9,590 cfs on 30 Sep 2026 | [P] | NWS |

---

## 3. GIS sources (no key; each tested 12 Nov 2026 with curl)

| Layer | URL | Used for |
|---|---|---|
| OSE Declared Groundwater Basins (39 polygons) | https://services2.arcgis.com/qXZbWTdPDbTjl7Dy/arcgis/rest/services/DeclaredGroundwaterBasins/FeatureServer/0 | basin outlines; 10 filled areas |
| OSE Reservoirs (17) | .../Reservoirs_/FeatureServer/1 | Heron, El Vado, Abiquiu, Cochiti, Santa Rosa, Sumner, Avalon, Eagle Nest, Bluewater outlines |
| OSE Rivers (55) | .../Rivers/FeatureServer/1 | tributaries missing from Natural Earth |
| OSE Conveyances (25,699 lines) | .../OSE_Conveyances/FeatureServer/0 | tested; names and LengthMiles are unreliable (one name carries thousands of km), so not used |
| OSE water_use_2020 (county table) | .../water_use_2020/FeatureServer/0 | 2020 sums in section 1a |
| Also present, unused | AWRM, MeteredBasins, NM_Irrigation_Districts, NM_Aquifers_Simplified | |
| OpenStreetMap via Overpass | https://overpass-api.de/api/interpreter | canals, the Blanco and Oso tunnel bores, small lakes. Server was at capacity for long stretches on 12 Nov; the script retries |

## 4. Tour ideas

1. Home: 3.1 MAF withdrawn; half rivers, half wells. 2. Snow (winter): record low 2026. 3. San Juan-Chama tunnels: Colorado River water into the Rio Grande. 4. Albuquerque: river and aquifer; river dry in the city 2022, 2025, 2026. 5. Middle valley farms and the pueblos' senior rights. 6. Elephant Butte: 26,732 AF in July 2026. 7. Mesilla Valley pecans and the Texas settlement. 8. Ogallala at Clovis and the pipeline from Ute. 9. Permian produced water. 10. Navajo Dam and Navajo-Gallup; close.

## 5. Figures I am least sure about

- Elephant Butte "lowest since 1956" is my reading of Reclamation's daily series; journalism said "lowest since 1971" at about 1.4%. The map states the volume and the OSE "lowest level on record for that date" wording.
- 2020 statewide withdrawals (3.8 MAF) are my sum of a GIS table, not a published total.
- Produced-water shares come from a presentation marked preliminary.
- Dairy and pecan figures are 2024; the dairy herd has been falling.
- Tribal bill status is as read on Congress.gov on 12 Nov 2026.

---

## 6. Used on the map: verification log

Written 12 Nov 2026 after building `west/content/nm.js`. Every number on the map is listed in section 2 with a [P] tag, or below.

### Budget (one measure: withdrawals, calendar 2015, OSE Technical Report 55)

- Total 3,114,255 AF. Sources: surface 1,629,968 AF (52%), groundwater 1,484,287 AF (48%).
- Uses: irrigated agriculture 2,376,065 AF (76%); public water supply 284,157 AF (9%); reservoir evaporation 231,081 AF (7%); commercial + industrial + mining + power 159,168 AF (5%, the report's own sum); livestock 36,046 AF (1.2%); self-supplied domestic 27,949 AF (0.9%). Percentages sum to 100.0.
- Notes on the budget card: about 750,000 irrigated acres (749,769); canal losses about a third of surface irrigation diversions (33.90%); wells supply about two-thirds of public supply (69.24%). All [P] TR55.
- Lede: "about 25% less water" in 50 years [P] PLAN. HUD: 2.1M people is the report's 2015 population (2,099,856); 30% of median Rio Grande flow in 2026 [P] OSE-OCT.

### [S] figures confirmed by opening the source

| Figure | Opened |
|---|---|
| Supreme Court approval date: "Tuesday" before the 28 May 2026 release, so 26 May 2026 | Governor's release (curl) |
| River dry in Albuquerque in 2022, 2025 and 2026 only since the 1980s; 82 miles; 37-mile average; Cochiti release lowest since 1988 | KUNM transcript (curl) |
| Settlement cost up to $150 million over 10 years | LFC brief (PDF) |
| Navajo-Gallup: about 300 miles, 37,764 AF/yr, late 2028 / end of 2029, more than 70% complete | Reclamation project page and news release 5310 (curl) |
| 14,000 AF Gila entitlement | Reclamation NM Unit page (curl) |
| Jicarilla lease up to 20,000 AF/yr | TNC release (local download; URL returns 200) |
| Pecos accumulated overage 110,900 AF; 2025 shortfall 15,100 AF | River Master final report (PDF) |
| Intel 756 million gallons (2020), 93% returned, 1 to 3 million gallons a day | Rio Rancho Observer (curl) |
| Las Vegas: 17,000 people, 341,735 acres, $3.95 billion | Circle of Blue (local download) |
| San Juan-Chama Drinking Water Project completed 2008, more than $400 million | abcwua.org page (curl) |

URLs for documents first read from local downloads were checked on 12 Nov 2026 by fetching them and comparing byte sizes with the copies read (OSE-OCT, OSE-AUG, ISC-SEP25, LFC-TX, TRIBAL, PWRC, DAIRY, AG24, SF24, ENM-LFC, RM, ISC-PECOS, the NM Unit Fund update, the Navajo settlement summary, the ABCWUA 2024 annual report).

### Derived by me, shown on the map

- Elephant Butte "the least since the 1950s": Reclamation's daily series shows 26,732 AF on 29 Jul 2026; the last lower daily value was 26,700 AF on 8 Nov 1956. News reports said "lowest since 1971"; the 1971 low in the series is 30,600 AF.
- Heron "the least in records back to 1975": minimum of the same series (the series starts 31 Dec 1974).
- Produced water compared with public supply: 353,000 AF (2025) against 284,157 AF (2015); the years differ and the card says so.
- Tour: "nearly doubled in two months" for Navajo is 777,694 AF (14 Sep) to 1,436,157 AF (11 Nov).
- Rain legend values read from the baked PRISM grid at each town.

### Dropped (could not confirm, so not on the map)

- San Juan-Chama full allocation (96,200 AF), city shares (Albuquerque 48,200 AF, Santa Fe 5,605 AF) and tunnel lengths in miles: not opened.
- Elephant Butte and Navajo percent-full gauges: no capacity figure with a checked URL (the Reclamation weekly summary and Navajo Unit page were read only from local downloads whose URLs I could not recover). Cards give volumes instead. Caballo, Conchas and Ute capacities likewise; Conchas and Ute cards have no storage numbers.
- River drying peak of 112.4 miles and the 95.8-mile record (Source NM returns 403).
- Las Cruces population served and well counts; Rio Rancho; aquifer rise in feet at Albuquerque (the 50-foot figure is from a 2018 op-ed, not opened).
- Navajo Indian Irrigation Project acreage (110,630 authorized; 63,881 to 75,000 irrigated in various sources) and 508,000 AF.
- Four Corners Power Plant and San Juan Generating Station plant-level figures and closure dates.
- Arch Hurley acreage and Conchas capacity (Wikipedia only); Eastern New Mexico pipeline's 16,450 AF/yr and 73,000 people; its completion year.
- Brackish desalination facility at Alamogordo, Estancia and Tularosa declines, Augustin Plains ruling (text read, URL not recovered), Cannon Air Force Base PFAS details, Chino and Tyrone mines, potash, data centers (company claims only), Acequia de Chamita and Acequia Madre dates, the number of dry-well or water-hauling households beyond Reclamation's "over 40 percent".
- EBID full allotment (3 AF per acre) and acreage (90,640): not opened. The card gives only the 2026 allotment of 4 inches.
- The 2020 water-use sums (3.8 MAF): my own total of a GIS table.
- The year of the federal law that authorized the Navajo farm and the tunnels (1962) and the 1880s origin of the Carlsbad project: general knowledge, removed.

### Current readings not re-opened by me at the live source

- Reservoir storage for Elephant Butte, Caballo, Heron, El Vado, Abiquiu and Cochiti comes from Reclamation json files downloaded earlier on 12 Nov 2026 by a helper process (last value 11 Nov 2026); I read the files but did not re-download them. Navajo, Santa Rosa, Sumner, Brantley and Avalon I downloaded myself the same day.
- Congress.gov bill status was read from files downloaded the same morning.

### Coordinates

Reservoir markers sit on the baked outline (checked in screenshots); dam coordinates from Reclamation metadata agree within the lake. Otowi gauge 35.875, -106.142 (general knowledge; it plots on the Rio Grande at Otowi bridge in the render). Tunnel routes are OpenStreetMap bores for all three (lengths 14.1, 8.7 and 20.9 km against published 8.64, 5.05 and 12.8 miles). The Navajo-Gallup and Eastern New Mexico pipelines are not drawn; their markers sit at Gallup and between Ute Reservoir and Clovis. The snowpack marker is in the Sangre de Cristo range as a stand-in for the northern mountains.
