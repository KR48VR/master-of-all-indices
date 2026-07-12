// City Index — data file. Edit values here; the app reads this.
// Every value present is REAL and SOURCED — see the 'provenance' block for
// source/year/method per value (the app ignores that block; it satisfies
// CLAUDE.md rule 3). A null/absent value is honest missing data — never
// fill one with a guess. The 19 non-pilot measures have no data yet.
window.INDEX_DATA = {
"meta":{"name": "Master Index Workbench", "version": "1.0.0", "released": "2026-07-12", "dataLicense": "CC BY-NC-SA 4.0 (compilation); individual values inherit source terms recorded in provenance", "codeLicense": "MIT", "url": "https://kr48vr.github.io/master-of-all-indices/"},
"domains":[
{"id": "Liveable", "tint": "#F6C99A", "ink": "#8a4b12"},
{"id": "Green", "tint": "#A9CE9C", "ink": "#2f5d29"},
{"id": "Smart", "tint": "#9CC2E6", "ink": "#1f4a73"},
{"id": "Competitive", "tint": "#E7A6BE", "ink": "#8a2b4e"},
{"id": "Talent", "tint": "#EBCE7A", "ink": "#7a5a10"},
{"id": "Connected", "tint": "#BFA9DB", "ink": "#4a2f73"}
],
"variables":[
{"id": "LIV-01", "domain": "Liveable", "subtheme": "Safety & Stability", "name": "Homicide rate", "measures": "Intentional homicides per 100,000 residents", "unit": "per 100k", "direction": "lower", "dataLevel": "Country proxy", "source": "UNODC CTS (national rates)", "appearsIn": "EIU (Stability)", "pilot": 1, "caveat": "UNODC discontinued its city-level series, so these are NATIONAL rates standing in for cities (Singapore is a city-state, so national = city; London uses England & Wales). Crime definitions vary by country. City-level upgrade from national police statistics planned.", "contestable": 0, "approx": "proxy"},
{"id": "LIV-02", "domain": "Liveable", "subtheme": "Safety & Stability", "name": "Perceived safety", "measures": "Resident-reported feeling of safety", "unit": "index 0-100", "direction": "higher", "dataLevel": "City", "source": "Numbeo Safety Index", "appearsIn": "—", "pilot": 0, "caveat": "Crowd-sourced — treat as a soft signal.", "contestable": 0, "approx": "crowd"},
{"id": "LIV-03", "domain": "Liveable", "subtheme": "Safety & Stability", "name": "Political stability", "measures": "Absence of violence / terrorism", "unit": "index", "direction": "higher", "dataLevel": "Country proxy", "source": "World Bank WGI", "appearsIn": "EIU (Stability)", "pilot": 0, "caveat": "Country-level stand-in, not city-specific.", "contestable": 0, "approx": "proxy"},
{"id": "LIV-04", "domain": "Liveable", "subtheme": "Health", "name": "Life expectancy", "measures": "Average life expectancy at birth", "unit": "years", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regions / SingStat / World Bank", "appearsIn": "GPCI (Livability)", "pilot": 1, "caveat": "OECD regional data at the finest level published: city or metro for most European cities; state/province proxies for the US, Canadian and Australian cities (named per value); Dubai is a UAE national figure. Years mix 2019-2025 — US values are 2020 (COVID-depressed, DC 2019), Japanese life tables are quinquennial (2020).", "contestable": 0, "approx": "none"},
{"id": "LIV-05", "domain": "Liveable", "subtheme": "Health", "name": "Physicians per capita", "measures": "Doctors per 1,000 residents", "unit": "per 1k", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regional health / data.gov.sg / DHA", "appearsIn": "EIU (Healthcare)", "pilot": 1, "caveat": "OECD regional physician density: province/state values for Amsterdam (N-Holland), Toronto (Ontario), New York (NY State), San Francisco (California), Barcelona (Catalonia); Paris is the dense core departement and reads high. Berlin is 2019 vintage. London computed from NHS + ONS files replicating OECD's documented UK method (NHS staff only). Singapore from MOH via data.gov.sg; Dubai from DHA statistical book 2022.", "contestable": 0, "approx": "none"},
{"id": "LIV-06", "domain": "Liveable", "subtheme": "Housing & Cost", "name": "House-price-to-income", "measures": "Median home price / median income", "unit": "ratio", "direction": "lower", "dataLevel": "City", "source": "Numbeo Property Prices Index", "appearsIn": "—", "pilot": 1, "caveat": "Numbeo 2026 Mid-Year edition: crowd-sourced median apartment price over median familial disposable income (years). Core affordability signal — treat as a soft, crowd-sourced estimate.", "contestable": 0, "approx": "crowd"},
{"id": "LIV-07", "domain": "Liveable", "subtheme": "Housing & Cost", "name": "Cost of living", "measures": "Standard basket cost vs a benchmark city", "unit": "index", "direction": "lower", "dataLevel": "City", "source": "Numbeo", "appearsIn": "Mercer", "pilot": 0, "caveat": "Direction is contestable — a rich city having high costs isn't necessarily 'bad'.", "contestable": 1, "approx": "crowd"},
{"id": "LIV-08", "domain": "Liveable", "subtheme": "Culture & Amenities", "name": "Cultural venues", "measures": "Museums / theatres / venues per 100,000", "unit": "per 100k", "direction": "higher", "dataLevel": "City", "source": "City open data / GPCI", "appearsIn": "GPCI (Cultural Interaction)", "pilot": 0, "caveat": "Sourcing and definitions vary widely.", "contestable": 0, "approx": "none"},
{"id": "GRN-01", "domain": "Green", "subtheme": "Air & Environment", "name": "PM2.5 air pollution", "measures": "Annual mean fine particulate matter", "unit": "µg/m³", "direction": "lower", "dataLevel": "City", "source": "WHO Ambient Air Quality DB v8.0", "appearsIn": "GPCI (Environment)", "pilot": 1, "caveat": "WHO DB v8.0 (June 2026): reference year varies by city (2019-2024 — Tokyo, Seoul and London are stuck at 2019). Several rows are greater-city/metro aggregates (Zurich, Paris, Amsterdam, New York, San Francisco). Barcelona station coverage moderate (79%).", "contestable": 0, "approx": "none"},
{"id": "GRN-02", "domain": "Green", "subtheme": "Air & Environment", "name": "Open space access", "measures": "% of residents within 400 m walk of an open public space", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "UN-Habitat SDG 11.7.1", "appearsIn": "—", "pilot": 1, "caveat": "SDG 11.7.1 access measure (2020): \"open public space\" includes plazas and squares, not only green areas, and the share is computed from OpenStreetMap public-space mapping plus a modelled population grid — not a survey. Replaces the original \"within 300 m of green space\" definition, which no global source publishes. Barcelona and San Francisco are outside UN-Habitat’s city sample (blank).", "contestable": 0, "approx": "modelled"},
{"id": "GRN-03", "domain": "Green", "subtheme": "Climate & Emissions", "name": "CO2 per capita", "measures": "Territorial emissions per resident", "unit": "tonnes", "direction": "lower", "dataLevel": "City", "source": "Global Covenant of Mayors", "appearsIn": "—", "pilot": 0, "caveat": "Self-reported by cities; has gaps.", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-04", "domain": "Green", "subtheme": "Climate & Emissions", "name": "Renewable share", "measures": "% of city energy from renewables", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "WCCD (ISO 37120)", "appearsIn": "—", "pilot": 0, "caveat": "Only for cities that report to WCCD.", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-05", "domain": "Green", "subtheme": "Resource Efficiency", "name": "Waste recycled", "measures": "% of municipal waste recycled", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "Official city/national waste statistics", "appearsIn": "—", "pilot": 1, "caveat": "Compiled city-by-city from official sources — definitions are NOT directly comparable: mixes recycling, separate-collection and diversion rates; household-only vs all municipal waste (Singapore’s 52% overall vs ~12% domestic); Vienna computed from official tonnages (no official rate published); San Francisco/Toronto report diversion. Years 2023-2025. Dubai publishes no rate (blank).", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-06", "domain": "Green", "subtheme": "Resource Efficiency", "name": "Water use per capita", "measures": "Daily water consumption per resident", "unit": "litres/day", "direction": "lower", "dataLevel": "City", "source": "WCCD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-07", "domain": "Green", "subtheme": "Climate Risk", "name": "Hazard exposure", "measures": "Modelled exposure to flood / extreme heat", "unit": "index", "direction": "lower", "dataLevel": "City", "source": "WRI / modelled", "appearsIn": "—", "pilot": 0, "caveat": "Modelled estimate, not observed.", "contestable": 0, "approx": "modelled"},
{"id": "SMT-01", "domain": "Smart", "subtheme": "Connectivity", "name": "Broadband speed", "measures": "Test-weighted mean fixed download speed (Ookla open-data tiles)", "unit": "Mbps", "direction": "higher", "dataLevel": "City", "source": "Ookla Open Data (Speedtest tiles)", "appearsIn": "IMD Smart City", "pilot": 1, "caveat": "Computed from Ookla Q1 2026 open-data tiles aggregated over a documented city-core bounding box per city (recorded in provenance) — a test-weighted mean, not the median in Ookla’s consumer pages, and the boundary choice affects the value. © Ookla, CC BY-NC-SA 4.0.", "contestable": 0, "approx": "modelled"},
{"id": "SMT-02", "domain": "Smart", "subtheme": "Connectivity", "name": "5G coverage", "measures": "% population with 5G access", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "GSMA / regulators", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "SMT-03", "domain": "Smart", "subtheme": "Digital Governance", "name": "E-government", "measures": "UN Local Online Service Index — share of 95 assessed portal features", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "UN E-Government Survey 2024 (LOSI)", "appearsIn": "IMD Smart City", "pilot": 1, "caveat": "LOSI is an objective checklist of city-portal features (not a survey), assessed for each country’s most populous city only: Melbourne, Barcelona and San Francisco are not assessed (blank). One portal per city; biennial — 2024 edition.", "contestable": 0, "approx": "none"},
{"id": "SMT-04", "domain": "Smart", "subtheme": "Digital Governance", "name": "Open data", "measures": "Maturity of public open-data provision", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "Open Data Barometer", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "SMT-05", "domain": "Smart", "subtheme": "Digital Adoption", "name": "Population online", "measures": "% of residents using the internet", "unit": "%", "direction": "higher", "dataLevel": "Country proxy", "source": "World Bank WDI (ITU series)", "appearsIn": "—", "pilot": 1, "caveat": "Country-level series (ITU via World Bank WDI); reference year mostly 2024, Switzerland and Austria 2025. New York and San Francisco share the single US value; the UAE source records exactly 100.", "contestable": 0, "approx": "proxy"},
{"id": "SMT-06", "domain": "Smart", "subtheme": "Smart Services", "name": "Smart mobility", "measures": "Real-time transit info / app availability", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "IMD Smart City survey", "appearsIn": "IMD Smart City", "pilot": 0, "caveat": "Perception-based (resident survey).", "contestable": 0, "approx": "perception"},
{"id": "CMP-01", "domain": "Competitive", "subtheme": "Economic Output", "name": "GDP per capita", "measures": "Metro GDP / population", "unit": "USD PPP", "direction": "higher", "dataLevel": "Metro", "source": "OECD Metro (FUA) / World Bank", "appearsIn": "GPCI (Economy)", "pilot": 1, "caveat": "OECD metropolitan (FUA) GDP per head in constant-2015-PPP USD; years 2020-2023. London and the archived-vintage metros (Melbourne, Toronto, Montreal, Vancouver, Sydney) are 2020 COVID-dip values. Dublin reads high (multinational profit-shifting). Singapore is a national World Bank figure on a 2021 PPP base. Dubai and Tel Aviv: no honest metro PPP figure exists (blank).", "contestable": 0, "approx": "none"},
{"id": "CMP-02", "domain": "Competitive", "subtheme": "Economic Output", "name": "Labour productivity", "measures": "Gross value added per worker", "unit": "USD", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-03", "domain": "Competitive", "subtheme": "Business Environment", "name": "Global firm presence", "measures": "Number of major global-firm HQs", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "GPCI / Fortune", "appearsIn": "GPCI (Economy)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-04", "domain": "Competitive", "subtheme": "Business Environment", "name": "Startup density", "measures": "Dealroom-tracked startups per 100,000 metro residents", "unit": "per 100k", "direction": "higher", "dataLevel": "Metro", "source": "Dealroom (public hub pages)", "appearsIn": "GPCI-Startup", "pilot": 1, "caveat": "Dealroom \"tracked startups\" per hub / page-shown metro population (captured 11 Jul 2026). Hubs are metros: SF = Bay Area, Toronto = Toronto-Waterloo, Berlin = Berlin/Brandenburg. Copenhagen, Vienna, Seoul, Dubai show no count and Amsterdam no population (blank). Database coverage varies by region — deepest in Europe/US.", "contestable": 0, "approx": "modelled"},
{"id": "CMP-05", "domain": "Competitive", "subtheme": "Dynamism", "name": "Employment growth", "measures": "5-year change in metro employment", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-06", "domain": "Competitive", "subtheme": "Dynamism", "name": "VC funding", "measures": "Dealroom \"VC invested\" per resident (metro hub)", "unit": "USD", "direction": "higher", "dataLevel": "Metro", "source": "Dealroom (public hub pages)", "appearsIn": "Startup Genome", "pilot": 1, "caveat": "Dealroom hub \"VC invested\" / page-shown metro population (captured 11 Jul 2026). The source page does not state the time window of \"VC invested\" — compare across cities, not against external annual figures. Amsterdam blank (no population shown).", "contestable": 0, "approx": "none"},
{"id": "TAL-01", "domain": "Talent", "subtheme": "Education", "name": "Tertiary attainment", "measures": "% of adults with tertiary education", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regions / SingStat / Dubai Statistics Center", "appearsIn": "—", "pilot": 1, "caveat": "OECD regional shares (25-64, ISCED 5-8), finest level published: city-level for some, but state/province/region proxies for the US, Canadian, Australian, Italian, German and Japanese cities (named per value; Milan reads as Lombardy, Osaka as Kansai). Singapore counts residents 25+. Dubai is on a DIFFERENT basis — university-and-above as % of population 10+ (DSC 2023). Years mix 2020-2025.", "contestable": 0, "approx": "none"},
{"id": "TAL-02", "domain": "Talent", "subtheme": "Education", "name": "Top universities", "measures": "Universities in the global top 500", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "QS World University Rankings 2026", "appearsIn": "GPCI (R&D)", "pilot": 1, "caveat": "QS 2026 edition, counted with QS’s own city labels, city-proper rule: Stanford and Berkeley fall outside San Francisco (a real 0), the Saclay cluster outside Paris — counts are boundary-sensitive for SF, NY and Paris. Dubai’s 0 is real: all six UAE top-500 universities are in other emirates.", "contestable": 0, "approx": "none"},
{"id": "TAL-03", "domain": "Talent", "subtheme": "Skills & Workforce", "name": "Knowledge workers", "measures": "% employed in knowledge-intensive jobs", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "Eurostat / OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "TAL-04", "domain": "Talent", "subtheme": "Skills & Workforce", "name": "Researchers per capita", "measures": "R&D personnel per 1,000", "unit": "per 1k", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "GPCI (R&D)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "TAL-05", "domain": "Talent", "subtheme": "Attractiveness", "name": "Talent inflow", "measures": "Net migration of working-age people", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "National statistics", "appearsIn": "—", "pilot": 0, "caveat": "Hard to standardise across countries.", "contestable": 0, "approx": "none"},
{"id": "TAL-06", "domain": "Talent", "subtheme": "Attractiveness", "name": "International openness", "measures": "Foreign-born population share", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD FUA / national censuses / UN DESA", "appearsIn": "GPCI", "pilot": 1, "caveat": "Mixes concepts and boundaries, disclosed per value: census/register foreign-born for most cities; foreign NATIONALS (not foreign-born) for Tokyo and Seoul; UN migrant-stock estimate for Singapore; city boundaries for the OECD-city rows, metro for the census rows; years 2021-2026. Dubai publishes no foreign-born statistic (blank). A proxy for openness — contestable as \"better\".", "contestable": 1, "approx": "none"},
{"id": "CON-01", "domain": "Connected", "subtheme": "Global Connectivity", "name": "Airport connectivity", "measures": "Direct international destinations served", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "Wikipedia airport destination tables", "appearsIn": "GPCI (Accessibility)", "pilot": 1, "caveat": "Counted from Wikipedia \"Airlines and destinations\" tables (12 Jul 2026): distinct international destination airports with scheduled or announced passenger service (charter/cargo excluded), union across each city's airports. Crowd-maintained lists — completeness varies by page: Tokyo is blank because Haneda's table is known-pruned; Dubai includes suspended routes as listed. Snapshot, not an official OAG count.", "contestable": 0, "approx": "crowd"},
{"id": "CON-02", "domain": "Connected", "subtheme": "Global Connectivity", "name": "Global accessibility", "measures": "Travel time to major world hubs", "unit": "hours", "direction": "lower", "dataLevel": "City", "source": "GPCI", "appearsIn": "GPCI (Accessibility)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CON-03", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Transit access", "measures": "% residents within 500 m of frequent transit (ITDP PNFT)", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "ITDP Atlas (People Near Frequent Transit)", "appearsIn": "—", "pilot": 1, "caveat": "Share of the GHSL urban agglomeration within 500 m of a stop served at least every ~10 min (7am-9pm), GIS-computed by ITDP from open GTFS feeds (2025 network). Where cities publish no usable open feed the Atlas reports zeros — Tokyo, London, Zurich, Melbourne, Amsterdam and Seoul are therefore blank here, NOT zero. San Francisco is the combined San Jose/SF/Oakland area.", "contestable": 0, "approx": "modelled"},
{"id": "CON-04", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Commute time", "measures": "Average one-way commute", "unit": "minutes", "direction": "lower", "dataLevel": "City", "source": "Numbeo / Moovit", "appearsIn": "—", "pilot": 0, "caveat": "Crowd-sourced component.", "contestable": 0, "approx": "crowd"},
{"id": "CON-05", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Traffic congestion", "measures": "Extra travel time caused by congestion", "unit": "%", "direction": "lower", "dataLevel": "City", "source": "TomTom Traffic Index", "appearsIn": "—", "pilot": 1, "caveat": "TomTom Traffic Index \"Ranking 2025\" (full-year 2025, city-center definition): average extra travel time vs free-flow. Seoul is not covered by TomTom — INRIX also excludes Korea (blank).", "contestable": 0, "approx": "none"}
],
"cities":["Singapore", "Tokyo", "Copenhagen", "Zurich", "Vienna", "Seoul", "Melbourne", "Amsterdam", "London", "New York", "Paris", "Toronto", "Berlin", "Barcelona", "Dubai", "San Francisco", "Stockholm", "Oslo", "Helsinki", "Madrid", "Milan", "Rome", "Munich", "Frankfurt", "Hamburg", "Brussels", "Dublin", "Lisbon", "Prague", "Warsaw", "Istanbul", "Montreal", "Vancouver", "Chicago", "Boston", "Los Angeles", "Seattle", "Washington DC", "Sydney", "Auckland", "Osaka", "Tel Aviv"],
"data":{
"Singapore":{"LIV-01": 0.07, "LIV-04": 83.9, "LIV-05": 2.9, "LIV-06": 24.7, "GRN-01": 12.0, "GRN-02": 70.3, "GRN-05": 52.0, "SMT-01": 567.1, "SMT-03": 87.5, "SMT-05": 94.4, "CMP-01": 132570, "CMP-04": 68.1, "CMP-06": 690, "TAL-01": 54.1, "TAL-02": 2, "TAL-06": 48.7, "CON-01": 175, "CON-03": 28.0, "CON-05": 43.9},
"Tokyo":{"LIV-01": 0.23, "LIV-04": 84.9, "LIV-05": 3.26, "LIV-06": 16.0, "GRN-01": 10.8, "GRN-02": 74.8, "GRN-05": 21.4, "SMT-01": 313.7, "SMT-03": 85.42, "SMT-05": 85.5, "CMP-01": 50287, "CMP-04": 14.8, "CMP-06": 81, "TAL-01": 64.2, "TAL-02": 4, "TAL-06": 5.6, "CON-01": null, "CON-03": null, "CON-05": 44.1},
"Copenhagen":{"LIV-01": 0.84, "LIV-04": 81.5, "LIV-05": 5.79, "LIV-06": 10.7, "GRN-01": 6.9, "GRN-02": 83.7, "GRN-05": 42.0, "SMT-01": 328.2, "SMT-03": 90.63, "SMT-05": 99.8, "CMP-01": 85842, "CMP-04": null, "CMP-06": 842, "TAL-01": 58.2, "TAL-02": 1, "TAL-06": 26.7, "CON-01": 192, "CON-03": 74.5, "CON-05": 40.2},
"Zurich":{"LIV-01": 0.6, "LIV-04": 84.1, "LIV-05": 5.67, "LIV-06": 12.8, "GRN-01": 7.6, "GRN-02": 67.6, "GRN-05": 46.0, "SMT-01": 455.6, "SMT-03": 81.25, "SMT-05": 97.3, "CMP-01": 88723, "CMP-04": 49.0, "CMP-06": 571, "TAL-01": 56.6, "TAL-02": 2, "TAL-06": 44.0, "CON-01": 224, "CON-03": null, "CON-05": 48.9},
"Vienna":{"LIV-01": 0.88, "LIV-04": 81.0, "LIV-05": 7.17, "LIV-06": 15.8, "GRN-01": 9.9, "GRN-02": 72.4, "GRN-05": 35.2, "SMT-01": 251.9, "SMT-03": 84.38, "SMT-05": 91.9, "CMP-01": 66253, "CMP-04": null, "CMP-06": 63, "TAL-01": 46.3, "TAL-02": 2, "TAL-06": 40.9, "CON-01": 204, "CON-03": 86.7, "CON-05": 48.6},
"Seoul":{"LIV-01": 0.48, "LIV-04": 85.0, "LIV-05": 4.27, "LIV-06": 30.0, "GRN-01": 25.4, "GRN-02": 48.8, "GRN-05": 61.7, "SMT-01": 320.3, "SMT-03": 87.5, "SMT-05": 97.9, "CMP-01": 51292, "CMP-04": null, "CMP-06": 258, "TAL-01": 67.3, "TAL-02": 8, "TAL-06": 3.9, "CON-01": 142, "CON-03": null, "CON-05": null},
"Melbourne":{"LIV-01": 0.85, "LIV-04": 84.1, "LIV-05": 4.72, "LIV-06": 7.5, "GRN-01": 7.9, "GRN-02": 84.4, "GRN-05": 47.9, "SMT-01": 248.8, "SMT-03": null, "SMT-05": 96.1, "CMP-01": 40848, "CMP-04": 27.3, "CMP-06": 306, "TAL-01": 53.5, "TAL-02": 6, "TAL-06": 35.7, "CON-01": 40, "CON-03": null, "CON-05": 52.9},
"Amsterdam":{"LIV-01": 0.69, "LIV-04": 82.1, "LIV-05": 4.89, "LIV-06": 9.9, "GRN-01": 8.9, "GRN-02": 77.6, "GRN-05": 25.0, "SMT-01": 317.8, "SMT-03": 78.13, "SMT-05": 97.0, "CMP-01": 87028, "CMP-04": null, "CMP-06": null, "TAL-01": 52.2, "TAL-02": 2, "TAL-06": 37.6, "CON-01": 285, "CON-03": null, "CON-05": 45.7},
"London":{"LIV-01": 1.15, "LIV-04": 82.5, "LIV-05": 4.55, "LIV-06": 16.7, "GRN-01": 11.2, "GRN-02": 87.1, "GRN-05": 32.6, "SMT-01": 316.7, "SMT-03": 87.5, "SMT-05": 95.5, "CMP-01": 72186, "CMP-04": 116.3, "CMP-06": 1867, "TAL-01": 74.1, "TAL-02": 9, "TAL-06": 40.6, "CON-01": 411, "CON-03": null, "CON-05": 51.6},
"New York":{"LIV-01": 5.76, "LIV-04": 77.7, "LIV-05": 5.02, "LIV-06": 10.9, "GRN-01": 7.1, "GRN-02": 71.0, "GRN-05": 21.8, "SMT-01": 391.7, "SMT-03": 90.63, "SMT-05": 94.7, "CMP-01": 91990, "CMP-04": 86.9, "CMP-06": 1717, "TAL-01": 53.0, "TAL-02": 2, "TAL-06": 30.8, "CON-01": 153, "CON-03": 61.6, "CON-05": 48.8},
"Paris":{"LIV-01": 1.34, "LIV-04": 84.1, "LIV-05": 9.38, "LIV-06": 17.0, "GRN-01": 9.3, "GRN-02": 51.6, "GRN-05": 20.0, "SMT-01": 441.5, "SMT-03": 81.25, "SMT-05": 88.7, "CMP-01": 83089, "CMP-04": 42.0, "CMP-06": 516, "TAL-01": 58.6, "TAL-02": 7, "TAL-06": 22.7, "CON-01": 305, "CON-03": 83.0, "CON-05": 40.0},
"Toronto":{"LIV-01": 1.98, "LIV-04": 81.8, "LIV-05": 2.21, "LIV-06": 11.6, "GRN-01": 9.4, "GRN-02": 91.7, "GRN-05": 50.6, "SMT-01": 494.5, "SMT-03": 79.17, "SMT-05": 94.4, "CMP-01": 44561, "CMP-04": 52.9, "CMP-06": 433, "TAL-01": 71.0, "TAL-02": 2, "TAL-06": 46.6, "CON-01": 172, "CON-03": 55.7, "CON-05": 47.7},
"Berlin":{"LIV-01": 0.91, "LIV-04": 81.2, "LIV-05": 5.51, "LIV-06": 11.1, "GRN-01": 11.3, "GRN-02": 68.2, "GRN-05": 30.8, "SMT-01": 212.6, "SMT-03": 88.54, "SMT-05": 93.5, "CMP-01": 59205, "CMP-04": 49.4, "CMP-06": 452, "TAL-01": 48.1, "TAL-02": 3, "TAL-06": 24.9, "CON-01": 161, "CON-03": 70.5, "CON-05": 44.6},
"Barcelona":{"LIV-01": 0.69, "LIV-04": 84.2, "LIV-05": 4.47, "LIV-06": 13.8, "GRN-01": 10.9, "GRN-02": null, "GRN-05": 42.1, "SMT-01": 338.8, "SMT-03": null, "SMT-05": 95.8, "CMP-01": 52064, "CMP-04": 28.5, "CMP-06": 222, "TAL-01": 46.9, "TAL-02": 5, "TAL-06": 27.3, "CON-01": 202, "CON-03": 66.9, "CON-05": 41.1},
"Dubai":{"LIV-01": 0.69, "LIV-04": 83.1, "LIV-05": 3.35, "LIV-06": 7.8, "GRN-01": 35.0, "GRN-02": 40.6, "GRN-05": null, "SMT-01": 359.0, "SMT-03": 90.63, "SMT-05": 100.0, "CMP-01": null, "CMP-04": null, "CMP-06": 661, "TAL-01": 41.0, "TAL-02": 0, "TAL-06": null, "CON-01": 310, "CON-03": 24.8, "CON-05": 42.7},
"San Francisco":{"LIV-01": 5.76, "LIV-04": 79.0, "LIV-05": 3.02, "LIV-06": 6.5, "GRN-01": 7.4, "GRN-02": null, "GRN-05": 53.1, "SMT-01": 367.7, "SMT-03": null, "SMT-05": 94.7, "CMP-01": 146853, "CMP-04": 320.8, "CMP-06": 20260, "TAL-01": 46.9, "TAL-02": 0, "TAL-06": 32.4, "CON-01": 60, "CON-03": 29.6, "CON-05": 49.7},
"Stockholm":{"SMT-01": 302.2, "CMP-01": 81394, "LIV-04": 85.0, "TAL-01": 60.0},
"Oslo":{"SMT-01": 281.9, "CMP-01": 63394, "LIV-04": 83.3, "TAL-01": 56.5},
"Helsinki":{"SMT-01": 238.8, "CMP-01": 66107, "LIV-04": 81.9, "TAL-01": 48.1},
"Madrid":{"SMT-01": 382.3, "CMP-01": 59768, "LIV-04": 85.4, "TAL-01": 50.0},
"Milan":{"SMT-01": 429.2, "CMP-01": 82014, "LIV-04": 84.7, "TAL-01": 23.6},
"Rome":{"SMT-01": 376.5, "CMP-01": 65690, "LIV-04": 83.6, "TAL-01": 28.5},
"Munich":{"SMT-01": 221.7, "CMP-01": 102244, "LIV-04": 83.1, "TAL-01": 38.6},
"Frankfurt":{"SMT-01": 232.1, "CMP-01": 82688, "LIV-04": 81.9, "TAL-01": 35.6},
"Hamburg":{"SMT-01": 196.7, "CMP-01": 77768, "LIV-04": 80.9, "TAL-01": 43.0},
"Brussels":{"SMT-01": 266.9, "CMP-01": 78040, "LIV-04": 82.2, "TAL-01": 56.9},
"Dublin":{"SMT-01": 337.0, "CMP-01": 141694, "LIV-04": 83.3, "TAL-01": 61.0},
"Lisbon":{"SMT-01": 354.4, "CMP-01": 50408, "LIV-04": 81.2, "TAL-01": 43.3},
"Prague":{"SMT-01": 258.9, "CMP-01": 83056, "LIV-04": 81.1, "TAL-01": 54.8},
"Warsaw":{"SMT-01": 362.9, "CMP-01": 81920, "LIV-04": 81.0, "TAL-01": 65.3},
"Istanbul":{"SMT-01": 251.2, "CMP-01": 56428, "LIV-04": 77.1, "TAL-01": 31.8},
"Montreal":{"SMT-01": 334.2, "CMP-01": 38730, "LIV-04": 82.5, "TAL-01": 59.0},
"Vancouver":{"SMT-01": 374.2, "CMP-01": 45902, "LIV-04": 81.5, "TAL-01": 64.0},
"Chicago":{"SMT-01": 392.9, "CMP-01": 75524, "LIV-04": 76.8, "TAL-01": 50.9},
"Boston":{"SMT-01": 361.6, "CMP-01": 101761, "LIV-04": 79.0, "TAL-01": 58.2},
"Los Angeles":{"SMT-01": 392.1, "CMP-01": 70646, "LIV-04": 79.0, "TAL-01": 46.9},
"Seattle":{"SMT-01": 410.0, "CMP-01": 111516, "LIV-04": 79.2, "TAL-01": 52.9},
"Washington DC":{"SMT-01": 362.5, "CMP-01": 83988, "LIV-04": 78.0, "TAL-01": 70.7},
"Sydney":{"SMT-01": 239.5, "CMP-01": 45152, "LIV-04": 84.1, "TAL-01": 52.5},
"Auckland":{"SMT-01": 283.4, "CMP-01": 55906, "LIV-04": 82.7, "TAL-01": 45.5},
"Osaka":{"SMT-01": 295.1, "CMP-01": 41497, "LIV-04": 84.2, "TAL-01": 56.9},
"Tel Aviv":{"SMT-01": 366.9, "CMP-01": null, "LIV-04": 83.1, "TAL-01": 60.4}
},
"provenance":{
 "LIV-01": {
  "source": "UNODC Data Portal — Crime Trend Survey, intentional homicide victims, rate per 100,000 (Total/Total/Total)",
  "url": "https://data.unodc.org/sites/dataportal.unodc.org/files/2026-05/data_cts_intentional_homicide.xlsx",
  "fileMd5": "a8997bd607ffa1b4ce056a5b6eea3335",
  "license": "(c) United Nations — reuse with attribution (dataunodc.un.org/termsofuse)",
  "retrieved": "2026-07-11 (via byte-identical mirror; md5 matches Our World in Data attestation of the official URL, 2026-06-12)",
  "method": "Latest available year per country; national rate used as a city proxy (dataLevel flag downgraded accordingly). New York and San Francisco share the USA value; London = England & Wales (GBR_E_W; no whole-UK rate published).",
  "perCity": {
   "Singapore": {
    "value": 0.07,
    "year": 2023,
    "series": "Singapore"
   },
   "Tokyo": {
    "value": 0.23,
    "year": 2023,
    "series": "Japan"
   },
   "Copenhagen": {
    "value": 0.84,
    "year": 2023,
    "series": "Denmark"
   },
   "Zurich": {
    "value": 0.6,
    "year": 2023,
    "series": "Switzerland"
   },
   "Vienna": {
    "value": 0.88,
    "year": 2023,
    "series": "Austria"
   },
   "Seoul": {
    "value": 0.48,
    "year": 2023,
    "series": "Republic of Korea"
   },
   "Melbourne": {
    "value": 0.85,
    "year": 2023,
    "series": "Australia"
   },
   "Amsterdam": {
    "value": 0.69,
    "year": 2023,
    "series": "Netherlands (Kingdom of the)"
   },
   "London": {
    "value": 1.15,
    "year": 2021,
    "series": "United Kingdom (England and Wales)"
   },
   "New York": {
    "value": 5.76,
    "year": 2023,
    "series": "United States of America"
   },
   "San Francisco": {
    "value": 5.76,
    "year": 2023,
    "series": "United States of America"
   },
   "Paris": {
    "value": 1.34,
    "year": 2023,
    "series": "France"
   },
   "Toronto": {
    "value": 1.98,
    "year": 2023,
    "series": "Canada"
   },
   "Berlin": {
    "value": 0.91,
    "year": 2023,
    "series": "Germany"
   },
   "Barcelona": {
    "value": 0.69,
    "year": 2023,
    "series": "Spain"
   },
   "Dubai": {
    "value": 0.69,
    "year": 2022,
    "series": "United Arab Emirates"
   }
  }
 },
 "GRN-01": {
  "source": "WHO Ambient Air Quality Database V8.0",
  "url": "https://cdn.who.int/media/docs/default-source/air-pollution-documents/air-quality-and-health/who-ambient-air-quality-database-version-2026-v8.xlsx?sfvrsn=95d122a4_5&download=true",
  "license": "WHO website Terms of Use (footer link); no explicit CC license stated on the fetched pages. Suggested citation per page: World Health Organization (2026). WHO Ambient Air Quality Database (Version 8.0). Geneva: WHO.",
  "edition": "V8.0, released 30 June 2026 (8th edition); sheet 'GlobalCity_Db_V8.0_2026-06-28'; landing page https://www.who.int/data/gho/data/themes/air-pollution/who-air-quality-database",
  "retrieved": "2026-07-11",
  "method": "Fetched WHO air-quality database landing page; followed 'Excel Version V8.0' link to publications item page; downloaded cdn.who.int xlsx (2.0 MB). The workbook has a single sheet 'GlobalCity_Db_V8.0_2026-06-28' (no 'Update'-named sheet in v8 — visible adaptation). Each Excel row holds a CSV-encoded record; quoted fields containing commas were split across spreadsheet columns, so cells per row were rejoined with ',' and parsed with Python csv (multi-line continuations appended); took the first 12 fields (who_region, iso3, country_name, city, year, version, pm10/pm25/no2 concentration, pm10/pm25/no2 tempcov). Result: 55,214 records, 8,023 unique cities (matches page's '8 024 human settlements'). For each of the 16 cities, listed all case-insensitive substring candidates, then selected the exact label + iso3 (excluding false matches: London/CAN, Londonderry/GBR, Bernau Bei Berlin/DEU, Barce",
  "perCity": {
   "Singapore": {
    "value": 12.0,
    "raw": 12,
    "year": "2021",
    "source": "Singapore/SGP",
    "note": "pm25_tempcov=NA; version V6.0 (2023), n=1 station; no data newer than 2021 in v8 — identical to project's v6.1 value (12.0, 2021)"
   },
   "Tokyo": {
    "value": 10.8,
    "raw": 10.828,
    "year": "2019",
    "source": "Tokyo/JPN",
    "note": "pm25_tempcov=99; version V6.0 (2023), n=18 stations; no data newer than 2019 in v8 (v6.1 had 10.8, 2019)"
   },
   "Copenhagen": {
    "value": 6.9,
    "raw": 6.912,
    "year": "2024",
    "source": "Kobenhavn/DNK",
    "note": "pm25_tempcov=98; version V8.0 (2026), n=4 stations, EEA source (v6.1: 8.3, 2020)"
   },
   "Zurich": {
    "value": 7.6,
    "raw": 7.595,
    "year": "2024",
    "source": "Zurich Greater City/CHE",
    "note": "LABEL CHANGED from v6.1 'Zurich/CHE' (plain label only covers 2010-2012 in v8); 'Greater City' implies metro-ish scope. pm25_tempcov=100; V8.0, n=7 stations (v6.1: 10.1, 2021)"
   },
   "Vienna": {
    "value": 9.9,
    "raw": 9.926,
    "year": "2024",
    "source": "Wien/AUT",
    "note": "pm25_tempcov=100; V8.0, n=19 stations; excluded Parkersburg Vienna WV/USA, Schottwien, Wiener Neudorf/Neustadt (v6.1: 10.6, 2021)"
   },
   "Seoul": {
    "value": 25.4,
    "raw": 25.397,
    "year": "2019",
    "source": "Seoul/KOR",
    "note": "pm25_tempcov=NA; version V5.0 (2022), n=37 stations; no data newer than 2019 in v8 (v6.1: 25.4, 2019)"
   },
   "Melbourne": {
    "value": 7.9,
    "raw": 7.93,
    "year": "2024",
    "source": "Melbourne/AUS",
    "note": "pm25_tempcov=NA; V8.0, n=1 station only; excluded Palm Bay Melbourne Titusville FL/USA (v6.1: 7.1, 2019)"
   },
   "Amsterdam": {
    "value": 8.9,
    "raw": 8.886,
    "year": "2024",
    "source": "Greater Amsterdam/NLD",
    "note": "pm25_tempcov=99; V8.0, n=10 stations; plain 'Amsterdam/NLD' exists only for 2010 (v6.1: 9.6, 2020)"
   },
   "London": {
    "value": 11.2,
    "raw": 11.205,
    "year": "2019",
    "source": "London/GBR",
    "note": "pm25_tempcov=95; version V6.0 (2023), n=16 stations; excluded London/CAN and Londonderry/GBR; no data newer than 2019 in v8 (v6.1: 11.2, 2019)"
   },
   "New York": {
    "value": 7.1,
    "raw": 7.07,
    "year": "2022",
    "source": "New York Newark Jersey City NY NJ PA/USA",
    "note": "CBSA metro area — v8 label dropped the '(CBSA)' suffix used in v6.1. pm25_tempcov=56 (LOW temporal coverage); version V7.0 (2024), n=18 stations, EPA source (v6.1: 7.7, 2021)"
   },
   "Paris": {
    "value": 9.3,
    "raw": 9.309,
    "year": "2024",
    "source": "Paris Greater City/FRA",
    "note": "LABEL CHANGED from v6.1 'Paris/FRA' (plain label only covers 2010 in v8); 'Greater City' scope. pm25_tempcov=97; V8.0, n=34 stations (v6.1: 12.9, 2021)"
   },
   "Toronto": {
    "value": 9.4,
    "raw": 9.4,
    "year": "2023",
    "source": "Toronto/CAN",
    "note": "pm25_tempcov=98; V8.0, n=5 stations (v6.1: 7.3, 2020; ratio 1.29, within 2x)"
   },
   "Berlin": {
    "value": 11.3,
    "raw": 11.323,
    "year": "2024",
    "source": "Berlin/DEU",
    "note": "pm25_tempcov=100; V8.0, n=42 stations; excluded Bernau Bei Berlin/DEU (v6.1: 13.1, 2021)"
   },
   "Barcelona": {
    "value": 10.9,
    "raw": 10.904,
    "year": "2024",
    "source": "Barcelona/ESP",
    "note": "pm25_tempcov=79 (moderate coverage); V8.0, n=30 stations; excluded Barcelona/VEN (v6.1: 12.2, 2021)"
   },
   "Dubai": {
    "value": 35.0,
    "raw": 35,
    "year": "2024",
    "source": "Dubai/ARE",
    "note": "pm25_tempcov=95; V8.0, n=5 stations (source 'International'); value is integer 35 in source (v6.1: 45.8, 2021; ratio 0.76, within 2x)"
   },
   "San Francisco": {
    "value": 7.4,
    "raw": 7.383,
    "year": "2021",
    "source": "San Francisco Oakland Hayward CA/USA",
    "note": "CBSA metro area — v8 label dropped '(CBSA)' suffix. pm25_tempcov=NA; version V6.0 (2023), n=10 stations; no data newer than 2021 in v8 (v6.1: 7.4, 2021)"
   }
  }
 },
 "SMT-01": {
  "source": "Ookla Open Data — Speedtest by Ookla global fixed network performance tiles, Q1 2026",
  "url": "https://ookla-open-data.s3.amazonaws.com/parquet/performance/type=fixed/year=2026/quarter=1/2026-01-01_performance_fixed_tiles.parquet",
  "license": "CC BY-NC-SA 4.0, (c) Ookla",
  "retrieved": "2026-07-11 (direct download, 348,853,499 bytes; file published 2026-04-13)",
  "method": "SUM(avg_d_kbps*tests)/SUM(tests)/1000 over all zoom-16 tiles whose centroid falls in the city-core bounding box [lonMin, latMin, lonMax, latMax] below. Mean of tile averages weighted by test count; flagged \"modelled\" because boundary choice and mean-vs-median both shape the number.",
  "perCity": {
   "Singapore": {
    "value": 567.1,
    "year": "2026 Q1",
    "bbox": [
     103.6,
     1.2,
     104.1,
     1.48
    ],
    "tiles": 1574,
    "tests": 442452
   },
   "Tokyo": {
    "value": 313.7,
    "year": "2026 Q1",
    "bbox": [
     139.6,
     35.53,
     139.92,
     35.82
    ],
    "tiles": 3093,
    "tests": 166682
   },
   "Copenhagen": {
    "value": 328.2,
    "year": "2026 Q1",
    "bbox": [
     12.45,
     55.61,
     12.65,
     55.73
    ],
    "tiles": 1005,
    "tests": 34324
   },
   "Zurich": {
    "value": 455.6,
    "year": "2026 Q1",
    "bbox": [
     8.45,
     47.32,
     8.63,
     47.44
    ],
    "tiles": 686,
    "tests": 23925
   },
   "Vienna": {
    "value": 251.9,
    "year": "2026 Q1",
    "bbox": [
     16.25,
     48.13,
     16.5,
     48.28
    ],
    "tiles": 1306,
    "tests": 57381
   },
   "Seoul": {
    "value": 320.3,
    "year": "2026 Q1",
    "bbox": [
     126.8,
     37.45,
     127.15,
     37.65
    ],
    "tiles": 2044,
    "tests": 58979
   },
   "Melbourne": {
    "value": 248.8,
    "year": "2026 Q1",
    "bbox": [
     144.85,
     -37.95,
     145.1,
     -37.7
    ],
    "tiles": 1995,
    "tests": 127333
   },
   "Amsterdam": {
    "value": 317.8,
    "year": "2026 Q1",
    "bbox": [
     4.75,
     52.3,
     5.05,
     52.43
    ],
    "tiles": 1195,
    "tests": 66353
   },
   "London": {
    "value": 316.7,
    "year": "2026 Q1",
    "bbox": [
     -0.35,
     51.4,
     0.1,
     51.6
    ],
    "tiles": 4444,
    "tests": 411821
   },
   "New York": {
    "value": 391.7,
    "year": "2026 Q1",
    "bbox": [
     -74.05,
     40.55,
     -73.75,
     40.9
    ],
    "tiles": 3053,
    "tests": 265816
   },
   "Paris": {
    "value": 441.5,
    "year": "2026 Q1",
    "bbox": [
     2.25,
     48.81,
     2.42,
     48.9
    ],
    "tiles": 745,
    "tests": 58740
   },
   "Toronto": {
    "value": 494.5,
    "year": "2026 Q1",
    "bbox": [
     -79.55,
     43.6,
     -79.2,
     43.8
    ],
    "tiles": 2248,
    "tests": 118768
   },
   "Berlin": {
    "value": 212.6,
    "year": "2026 Q1",
    "bbox": [
     13.2,
     52.42,
     13.55,
     52.6
    ],
    "tiles": 2531,
    "tests": 76537
   },
   "Barcelona": {
    "value": 338.8,
    "year": "2026 Q1",
    "bbox": [
     2.05,
     41.32,
     2.25,
     41.45
    ],
    "tiles": 633,
    "tests": 54826
   },
   "Dubai": {
    "value": 359.0,
    "year": "2026 Q1",
    "bbox": [
     55.05,
     24.9,
     55.55,
     25.35
    ],
    "tiles": 3427,
    "tests": 377179
   },
   "San Francisco": {
    "value": 367.7,
    "year": "2026 Q1",
    "bbox": [
     -122.52,
     37.7,
     -122.35,
     37.83
    ],
    "tiles": 542,
    "tests": 64515
   },
   "Stockholm": {
    "value": 302.2,
    "year": "2026 Q1",
    "bbox": [
     17.95,
     59.25,
     18.2,
     59.4
    ],
    "tiles": 1191,
    "tests": 15924,
    "note": "THIN sample: 1191 tiles / 15924 tests (threshold 500 tiles / 20000 tests)"
   },
   "Oslo": {
    "value": 281.9,
    "year": "2026 Q1",
    "bbox": [
     10.6,
     59.85,
     10.9,
     60.0
    ],
    "tiles": 1384,
    "tests": 31268
   },
   "Helsinki": {
    "value": 238.8,
    "year": "2026 Q1",
    "bbox": [
     24.8,
     60.13,
     25.1,
     60.3
    ],
    "tiles": 1709,
    "tests": 26211
   },
   "Madrid": {
    "value": 382.3,
    "year": "2026 Q1",
    "bbox": [
     -3.85,
     40.3,
     -3.55,
     40.55
    ],
    "tiles": 1627,
    "tests": 72940
   },
   "Milan": {
    "value": 429.2,
    "year": "2026 Q1",
    "bbox": [
     9.05,
     45.4,
     9.3,
     45.55
    ],
    "tiles": 1395,
    "tests": 89027
   },
   "Rome": {
    "value": 376.5,
    "year": "2026 Q1",
    "bbox": [
     12.35,
     41.8,
     12.65,
     42.0
    ],
    "tiles": 1964,
    "tests": 163732
   },
   "Munich": {
    "value": 221.7,
    "year": "2026 Q1",
    "bbox": [
     11.4,
     48.05,
     11.7,
     48.25
    ],
    "tiles": 1746,
    "tests": 57386
   },
   "Frankfurt": {
    "value": 232.1,
    "year": "2026 Q1",
    "bbox": [
     8.55,
     50.05,
     8.8,
     50.2
    ],
    "tiles": 1070,
    "tests": 32538
   },
   "Hamburg": {
    "value": 196.7,
    "year": "2026 Q1",
    "bbox": [
     9.85,
     53.45,
     10.15,
     53.65
    ],
    "tiles": 2034,
    "tests": 45610
   },
   "Brussels": {
    "value": 266.9,
    "year": "2026 Q1",
    "bbox": [
     4.25,
     50.75,
     4.5,
     50.92
    ],
    "tiles": 1520,
    "tests": 49458
   },
   "Dublin": {
    "value": 337.0,
    "year": "2026 Q1",
    "bbox": [
     -6.4,
     53.25,
     -6.1,
     53.42
    ],
    "tiles": 1849,
    "tests": 58932
   },
   "Lisbon": {
    "value": 354.4,
    "year": "2026 Q1",
    "bbox": [
     -9.25,
     38.68,
     -9.05,
     38.82
    ],
    "tiles": 722,
    "tests": 60212
   },
   "Prague": {
    "value": 258.9,
    "year": "2026 Q1",
    "bbox": [
     14.3,
     49.98,
     14.6,
     50.15
    ],
    "tiles": 1624,
    "tests": 53154
   },
   "Warsaw": {
    "value": 362.9,
    "year": "2026 Q1",
    "bbox": [
     20.85,
     52.1,
     21.15,
     52.35
    ],
    "tiles": 2432,
    "tests": 66840
   },
   "Istanbul": {
    "value": 251.2,
    "year": "2026 Q1",
    "bbox": [
     28.75,
     40.95,
     29.25,
     41.15
    ],
    "tiles": 2737,
    "tests": 288219
   },
   "Montreal": {
    "value": 334.2,
    "year": "2026 Q1",
    "bbox": [
     -73.75,
     45.4,
     -73.45,
     45.6
    ],
    "tiles": 2009,
    "tests": 74946
   },
   "Vancouver": {
    "value": 374.2,
    "year": "2026 Q1",
    "bbox": [
     -123.25,
     49.2,
     -123.0,
     49.32
    ],
    "tiles": 945,
    "tests": 45783
   },
   "Chicago": {
    "value": 392.9,
    "year": "2026 Q1",
    "bbox": [
     -87.85,
     41.7,
     -87.55,
     42.0
    ],
    "tiles": 2791,
    "tests": 83677
   },
   "Boston": {
    "value": 361.6,
    "year": "2026 Q1",
    "bbox": [
     -71.2,
     42.25,
     -70.95,
     42.42
    ],
    "tiles": 1340,
    "tests": 38615
   },
   "Los Angeles": {
    "value": 392.1,
    "year": "2026 Q1",
    "bbox": [
     -118.5,
     33.9,
     -118.15,
     34.15
    ],
    "tiles": 3045,
    "tests": 166002
   },
   "Seattle": {
    "value": 410.0,
    "year": "2026 Q1",
    "bbox": [
     -122.45,
     47.48,
     -122.2,
     47.75
    ],
    "tiles": 1907,
    "tests": 52618
   },
   "Washington DC": {
    "value": 362.5,
    "year": "2026 Q1",
    "bbox": [
     -77.15,
     38.8,
     -76.9,
     39.0
    ],
    "tiles": 1697,
    "tests": 45242
   },
   "Sydney": {
    "value": 239.5,
    "year": "2026 Q1",
    "bbox": [
     151.0,
     -34.0,
     151.3,
     -33.75
    ],
    "tiles": 2399,
    "tests": 200325
   },
   "Auckland": {
    "value": 283.4,
    "year": "2026 Q1",
    "bbox": [
     174.65,
     -37.0,
     174.9,
     -36.75
    ],
    "tiles": 1395,
    "tests": 34112
   },
   "Osaka": {
    "value": 295.1,
    "year": "2026 Q1",
    "bbox": [
     135.35,
     34.55,
     135.65,
     34.75
    ],
    "tiles": 1643,
    "tests": 42868
   },
   "Tel Aviv": {
    "value": 366.9,
    "year": "2026 Q1",
    "bbox": [
     34.72,
     32.0,
     34.85,
     32.15
    ],
    "tiles": 456,
    "tests": 70038,
    "note": "THIN sample: 456 tiles / 70038 tests (threshold 500 tiles / 20000 tests)"
   }
  },
  "edition": ""
 },
 "LIV-04": {
  "source": "OECD Regional Demography — Life expectancy (DSD_REG_DEMO@DF_LIFE_EXP v2.0); SingStat table M810501 (Singapore); World Bank SP.DYN.LE00.IN (Dubai/UAE)",
  "url": "https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_DEMO@DF_LIFE_EXP,2.0/all?startPeriod=2018&format=csvfilewithlabels",
  "license": "OECD data: OECD Terms & Conditions (CC BY 4.0); SingStat: Singapore Open Data Licence; World Bank: CC BY 4.0",
  "edition": "OECD SDMX API pulled 2026-07-11 (data through 2023); SingStat API M810501 (data through 2025 preliminary); World Bank API last updated 2026-07-01 (data through 2024)",
  "retrieved": "2026-07-11",
  "method": "OECD: fetched dataflow structure (dimensions confirmed: FREQ, TERRITORIAL_LEVEL, REF_AREA, TERRITORIAL_TYPE, MEASURE, AGE, SEX, UNIT_MEASURE), then pulled full CSV with labels (startPeriod=2018). Filtered SEX=_T (Total), AGE=Y0 ('0 years' = at birth), UNIT=Years, non-null OBS_VALUE; took latest TIME_PERIOD per region. Preferred finest geography with data: TL3 used for Vienna (AT130), Copenhagen (DK011 City of Copenhagen), Zurich (CH040), Paris (FR101), Barcelona (ES511), Seoul (KR011), Tokyo (JPD13), Melbourne (AU2GM); TL2 used where no TL3 life-expectancy exists in the file: UKI Greater London, NL32 North Holland, CA35 Ontario, US36 New York State, US06 California; DE3 Berlin TL2 chosen over TL3 DE300 because DE300 stops at 2020 while DE3 (identical city-state territory) runs to 2023. Verified every code against its label in the file. Singapore: SingStat TableBuilder API table M810501 '",
  "perCity": {
   "Singapore": {
    "value": 83.9,
    "raw": 83.9,
    "year": "2025",
    "source": "SingStat M810501 — Total Life Expectancy At Birth (Residents)",
    "note": "City-state = city-level. 2025 figure flagged preliminary by SingStat (2024 final = 83.7). Resident population (citizens + PRs)."
   },
   "Tokyo": {
    "value": 84.9,
    "raw": 84.87,
    "year": "2020",
    "source": "OECD TL3 JPD13 — Tokyo",
    "note": "Tokyo prefecture (TL3). Latest available year in OECD file is 2020 for Japan."
   },
   "Copenhagen": {
    "value": 81.5,
    "raw": 81.5,
    "year": "2023",
    "source": "OECD TL3 DK011 — City of Copenhagen",
    "note": "City proper (TL3). TL2 DK01 Capital region 2023 = 82.0 for comparison."
   },
   "Zurich": {
    "value": 84.1,
    "raw": 84.1,
    "year": "2023",
    "source": "OECD TL3 CH040 — Zürich",
    "note": "Canton of Zürich (TL3). TL2 CH04 (same canton territory, different OECD estimation) shows 84.4 for 2023."
   },
   "Vienna": {
    "value": 81.0,
    "raw": 81,
    "year": "2023",
    "source": "OECD TL3 AT130 — Vienna",
    "note": "City/state of Vienna (TL3). OECD obs status: Estimated value."
   },
   "Seoul": {
    "value": 85.0,
    "raw": 85,
    "year": "2023",
    "source": "OECD TL3 KR011 — Seoul",
    "note": "Seoul city proper (TL3)."
   },
   "Melbourne": {
    "value": 84.1,
    "raw": 84.1,
    "year": "2022",
    "source": "OECD TL3 AU2GM — Melbourne",
    "note": "Greater Melbourne (TL3). Latest year 2022."
   },
   "Amsterdam": {
    "value": 82.1,
    "raw": 82.1,
    "year": "2023",
    "source": "OECD TL2 NL32 — North Holland",
    "note": "Province-level proxy (no NL TL3 life expectancy in dataset). dataLevel should be Metro/region, not City."
   },
   "London": {
    "value": 82.5,
    "raw": 82.5,
    "year": "2023",
    "source": "OECD TL2 UKI — Greater London",
    "note": "Greater London (TL2) matches city boundary. OECD obs status: Estimated value."
   },
   "New York": {
    "value": 77.7,
    "raw": 77.7,
    "year": "2020",
    "source": "OECD TL2 US36 — New York",
    "note": "New York STATE proxy (no US TL3 in dataset). 2020 is latest and is COVID-depressed (2019 = 80.7). dataLevel = state proxy."
   },
   "Paris": {
    "value": 84.1,
    "raw": 84.1,
    "year": "2022",
    "source": "OECD TL3 FR101 — Paris",
    "note": "Paris département = city proper (TL3), latest 2022. TL2 FR1 Île-de-France 2023 = 84.9. OECD obs status: Estimated value."
   },
   "Toronto": {
    "value": 81.8,
    "raw": 81.82,
    "year": "2022",
    "source": "OECD TL2 CA35 — Ontario",
    "note": "Ontario PROVINCE proxy (CA3520/no Canadian TL3 life expectancy in dataset). dataLevel = province proxy."
   },
   "Berlin": {
    "value": 81.2,
    "raw": 81.2,
    "year": "2023",
    "source": "OECD TL2 DE3 — Berlin",
    "note": "Berlin city-state (TL2 = city boundary). TL3 DE300 identical territory but stops at 2020. OECD obs status: Time series break."
   },
   "Barcelona": {
    "value": 84.2,
    "raw": 84.15,
    "year": "2023",
    "source": "OECD TL3 ES511 — Barcelona",
    "note": "Barcelona province (TL3), slightly wider than the city."
   },
   "Dubai": {
    "value": 83.1,
    "raw": 83.069,
    "year": "2024",
    "source": "World Bank SP.DYN.LE00.IN — United Arab Emirates",
    "note": "COUNTRY proxy (UAE national figure). dataLevel = Country proxy."
   },
   "San Francisco": {
    "value": 79.0,
    "raw": 79,
    "year": "2020",
    "source": "OECD TL2 US06 — California",
    "note": "California STATE proxy (no US TL3 in dataset). 2020 is latest and is COVID-depressed (2019 = 80.9). dataLevel = state proxy."
   },
   "Stockholm": {
    "value": 85.0,
    "year": "2024",
    "source": "OECD SE11 Stockholm (TL2)",
    "note": "TL2 Stockholm = Stockholm County (same boundary as TL3 SE110, which only runs to 2022); county-level"
   },
   "Oslo": {
    "value": 83.3,
    "year": "2022",
    "source": "OECD NO081 Oslo (TL3)",
    "note": "Oslo county/municipality — city-level"
   },
   "Helsinki": {
    "value": 81.9,
    "year": "2023",
    "source": "OECD FI1B1 Helsinki-Uusimaa (TL3)",
    "note": "Uusimaa region containing Helsinki — region proxy"
   },
   "Madrid": {
    "value": 85.4,
    "year": "2023",
    "source": "OECD ES300 Madrid (TL3)",
    "note": "Madrid province = Comunidad de Madrid; region-level"
   },
   "Milan": {
    "value": 84.7,
    "year": "2024",
    "source": "OECD ITC4C Milan (TL3)",
    "note": "Metropolitan City of Milan — metro-level"
   },
   "Rome": {
    "value": 83.6,
    "year": "2024",
    "source": "OECD ITI43 Rome (TL3)",
    "note": "Metropolitan City of Rome — metro-level"
   },
   "Munich": {
    "value": 83.1,
    "year": "2020",
    "source": "OECD DE212 München, Kreisfreie Stadt (TL3)",
    "note": "City proper; latest year published at German TL3 is 2020"
   },
   "Frankfurt": {
    "value": 81.9,
    "year": "2020",
    "source": "OECD DE712 Frankfurt am Main, Kreisfreie Stadt (TL3)",
    "note": "City proper; latest year published at German TL3 is 2020"
   },
   "Hamburg": {
    "value": 80.9,
    "year": "2023",
    "source": "OECD DE6 Hamburg (TL2)",
    "note": "City-state = city boundary (TL3 DE600 identical but only to 2020)"
   },
   "Brussels": {
    "value": 82.2,
    "year": "2023",
    "source": "OECD BE1 Brussels-Capital Region (TL2)",
    "note": "Brussels-Capital Region — city-region"
   },
   "Dublin": {
    "value": 83.3,
    "year": "2023",
    "source": "OECD IE06 Eastern and Midland (TL2)",
    "note": "Region proxy containing Dublin; no Dublin TL3 in this dataflow"
   },
   "Lisbon": {
    "value": 81.2,
    "year": "2023",
    "source": "OECD PT1A Greater Lisbon (TL2)",
    "note": "Grande Lisboa (NUTS2024) — metro-level"
   },
   "Prague": {
    "value": 81.1,
    "year": "2023",
    "source": "OECD CZ010 Prague (TL3)",
    "note": "Praha = city boundary"
   },
   "Warsaw": {
    "value": 81.0,
    "year": "2024",
    "source": "OECD PL911 City of Warsaw (TL3)",
    "note": "City proper"
   },
   "Istanbul": {
    "value": 77.1,
    "year": "2023",
    "source": "OECD TR10 Istanbul (TL2)",
    "note": "Istanbul province = greater city (TL3 TR100 identical but only to 2019)"
   },
   "Montreal": {
    "value": 82.5,
    "year": "2022",
    "source": "OECD CA24 Quebec (TL2)",
    "note": "Province proxy — no Montreal TL3 in this dataflow (v1.0 convention for Canada)"
   },
   "Vancouver": {
    "value": 81.5,
    "year": "2022",
    "source": "OECD CA59 British Columbia (TL2)",
    "note": "Province proxy (v1.0 convention for Canada)"
   },
   "Chicago": {
    "value": 76.8,
    "year": "2020",
    "source": "OECD US17 Illinois (TL2)",
    "note": "State proxy (v1.0 convention for US); latest US state year is 2020"
   },
   "Boston": {
    "value": 79.0,
    "year": "2020",
    "source": "OECD US25 Massachusetts (TL2)",
    "note": "State proxy (v1.0 convention for US)"
   },
   "Los Angeles": {
    "value": 79.0,
    "year": "2020",
    "source": "OECD US06 California (TL2)",
    "note": "State proxy (v1.0 convention for US)"
   },
   "Seattle": {
    "value": 79.2,
    "year": "2020",
    "source": "OECD US53 Washington (TL2)",
    "note": "Washington State proxy (v1.0 convention for US)"
   },
   "Washington DC": {
    "value": 78.0,
    "year": "2019",
    "source": "OECD US11 District of Columbia (TL2)",
    "note": "DC is a TL2 unit = the city itself; latest published year 2019 (no 2020 row for DC)"
   },
   "Sydney": {
    "value": 84.1,
    "year": "2022",
    "source": "OECD AU1GS Sydney (TL3)",
    "note": "Greater Sydney — metro-level"
   },
   "Auckland": {
    "value": 82.7,
    "year": "2023",
    "source": "OECD NZ12 Auckland (TL2)",
    "note": "Auckland region = same boundary as TL3 NZ012 (which only runs to 2018)"
   },
   "Osaka": {
    "value": 84.2,
    "year": "2020",
    "source": "OECD JPG27 Osaka (TL3)",
    "note": "Osaka prefecture; Japanese regional life tables published every 5 years — 2020 is latest"
   },
   "Tel Aviv": {
    "value": 83.1,
    "year": "2022",
    "source": "OECD IL050 Tel Aviv District (TL3)",
    "note": "Tel Aviv District containing the city — district-level"
   }
  }
 },
 "LIV-05": {
  "source": "OECD Regional Health database (dataflow OECD.CFE.EDS/DSD_REG_HEALTH@DF_HEALTH v2.5), measure DOC 'Active physicians', unit 10P3HB 'Per 1 000 inhabitants'; supplemented by data.gov.sg MOH 'Health Personnel (Per 10,000 Total Population)' for Singapore and Dubai Health Authority 'Dubai Health Statistical Annual Book 2022' for Dubai; cross-checked against Eurostat hlth_rs_physreg",
  "url": "https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_HEALTH@DF_HEALTH,/A....DOC._T._T.10P3HB?format=csvfilewithlabels",
  "license": "OECD Terms & Conditions (CC BY 4.0); Eurostat reuse policy; Singapore Open Data Licence; DHA public statistical yearbook",
  "edition": "DF_HEALTH v2.5 accessed 2026-07-11; data.gov.sg resource d_5257cff1ee5e6a16db6a9606a983efa4 (series through 2024); DHA Annual Book 2022 (published 18/12/2024); Eurostat hlth_rs_physreg accessed 2026-07-11",
  "retrieved": "2026-07-11",
  "method": "OECD SDMX: fetched dataflow structure (references=all), identified MEASURE=DOC 'Active physicians' and UNIT_MEASURE=10P3HB 'Per 1 000 inhabitants'; pulled full CSV via key A....DOC._T._T.10P3HB (dims FREQ.TERRITORIAL_LEVEL.REF_AREA.TERRITORIAL_TYPE.MEASURE.AGE.SEX.UNIT_MEASURE), filtered AGE=_T SEX=_T, took latest non-null year per region. Used finer TL3 geography where a comparable series with recent data exists (FR101 Paris, KR011 Seoul, JPD13 Tokyo, AU2GM Greater Melbourne); kept TL2 elsewhere. Rejected German TL3 DE300 (1.76 in 2024) as a non-comparable series — German TL3 national mean is 1.54 vs TL2-consistent ~4-5+, indicating a physician subset — and used DE3 TL2 (2019) for Berlin. Eurostat hlth_rs_physreg (P_HTHAB per 100,000; divided by 100) cross-check: DK01 2023 578.71→5.79, NL32 2023 489.08→4.89, ES51 2023 412.15→4.12, AT13 2023 705.34→7.05 — all exactly match OECD 2023 valu",
  "perCity": {
   "Singapore": {
    "value": 2.9,
    "raw": 2.9,
    "year": "2024",
    "source": "data.gov.sg d_5257cff1ee5e6a16db6a9606a983efa4, DataSeries 'Doctors Per 10,000 Total Population', 2024 = 29",
    "note": "Derived: 29 per 10,000 / 10 = 2.9 per 1,000. Source series is integer-rounded (29), so derived value carries ~±0.05 rounding. Whole-country value; Singapore is a city-state."
   },
   "Tokyo": {
    "value": 3.26,
    "raw": 3.26,
    "year": "2024",
    "source": "OECD DF_HEALTH, REF_AREA JPD13 'Tokyo' (TL3), DOC per 1,000 inhabitants, 2024",
    "note": "Tokyo prefecture (TL3). Parent Southern-Kanto TL2 (JPD) = 2.58 in 2024."
   },
   "Copenhagen": {
    "value": 5.79,
    "raw": 5.79,
    "year": "2023",
    "source": "OECD DF_HEALTH, REF_AREA DK01 'Capital Region of Denmark' (TL2), DOC per 1,000 inhabitants, 2023",
    "note": "Metro/region proxy (Hovedstaden), not city proper. Cross-checked exactly vs Eurostat hlth_rs_physreg DK01 2023 = 578.71 per 100k."
   },
   "Zurich": {
    "value": 5.67,
    "raw": 5.67,
    "year": "2024",
    "source": "OECD DF_HEALTH, REF_AREA CH04 'Zurich' (TL2, canton), DOC per 1,000 inhabitants, 2024",
    "note": "Canton of Zurich; TL3 CH040 is identical (5.67, 2024)."
   },
   "Vienna": {
    "value": 7.17,
    "raw": 7.17,
    "year": "2024",
    "source": "OECD DF_HEALTH, REF_AREA AT13 'Vienna' (TL2, city-state), DOC per 1,000 inhabitants, 2024",
    "note": "City-state, true city level. Eurostat AT13 2024 shows 721.02 per 100k (7.21) — minor vintage difference; 2023 matches exactly (7.05 both sources). High density partly reflects hospitals serving the surrounding region."
   },
   "Seoul": {
    "value": 4.27,
    "raw": 4.27,
    "year": "2025",
    "source": "OECD DF_HEALTH, REF_AREA KR011 'Seoul' (TL3), DOC per 1,000 inhabitants, 2025",
    "note": "Seoul Special City (TL3). Parent Capital Region TL2 (KR01) = 2.94 in 2025."
   },
   "Melbourne": {
    "value": 4.72,
    "raw": 4.72,
    "year": "2024",
    "source": "OECD DF_HEALTH, REF_AREA AU2GM 'Greater Melbourne' (TL3), DOC per 1,000 inhabitants, 2024",
    "note": "Greater Melbourne metro (TL3). Victoria TL2 = 4.52 in 2024."
   },
   "Amsterdam": {
    "value": 4.89,
    "raw": 4.89,
    "year": "2023",
    "source": "OECD DF_HEALTH, REF_AREA NL32 'North Holland' (TL2), DOC per 1,000 inhabitants, 2023",
    "note": "Province proxy (Noord-Holland), not city proper; no TL3 physician data. Cross-checked exactly vs Eurostat NL32 2023 = 489.08 per 100k."
   },
   "London": {
    "value": 4.55,
    "raw": 4.5548,
    "year": "2025 (workforce 30 Sep 2025; population mid-2024)",
    "source": "NHS Workforce Statistics Sep 2025 (HCHS doctors, London region Y56, headcount 34,136) + General Practice Workforce Sep 2025 (GPs excl. locums 7,266) / ONS mid-2024 London population 9,089,736 x 1000",
    "note": "Replicates OECD's documented UK methodology (headcount at 30 Sep, retainers in, locums out, NHS staff only) at London-region level; private-only doctors excluded — non-trivial in London. England check by same method: 3.63 vs OECD-published UK 3.4 (earlier year). Fills the gap left by the OECD regional series (Greater London ends 2016)."
   },
   "New York": {
    "value": 5.02,
    "raw": 5.02,
    "year": "2022",
    "source": "OECD DF_HEALTH, REF_AREA US36 'New York' (TL2, state), DOC per 1,000 inhabitants, 2022",
    "note": "New York State proxy, not NYC; no finer OECD geography with data. Series has a level break around 2019 (2018=3.51, 2019=4.46) suggesting a source-method change."
   },
   "Paris": {
    "value": 9.38,
    "raw": 9.38,
    "year": "2025",
    "source": "OECD DF_HEALTH, REF_AREA FR101 'Paris' (TL3, departement), DOC per 1,000 inhabitants, 2025",
    "note": "Paris departement = city proper. Core density is inflated by hospital/physician concentration serving the metro: Ile-de-France TL2 = 3.87 (2025). Counts physicians by place of work, not residence of patients."
   },
   "Toronto": {
    "value": 2.21,
    "raw": 2.21,
    "year": "2024",
    "source": "OECD DF_HEALTH, REF_AREA CA35 'Ontario' (TL2, province), DOC per 1,000 inhabitants, 2024",
    "note": "Ontario province proxy, not Toronto; no finer OECD geography with data."
   },
   "Berlin": {
    "value": 5.51,
    "raw": 5.51,
    "year": "2019",
    "source": "OECD DF_HEALTH, REF_AREA DE3 'Berlin' (TL2, city-state), DOC per 1,000 inhabitants, 2019",
    "note": "City-state, true city level, but 2019 vintage — TL2 series ends 2019. TL3 DE300 runs to 2024 but was rejected as non-comparable (2024=1.76; German TL3 national mean 1.54 vs TL2-consistent ~4-5, indicating it covers only "
   },
   "Barcelona": {
    "value": 4.47,
    "raw": 4.47,
    "year": "2024",
    "source": "OECD DF_HEALTH, REF_AREA ES51 'Catalonia' (TL2), DOC per 1,000 inhabitants, 2024",
    "note": "Catalonia region proxy; TL3 ES511 Barcelona province exists but ends in 2011. Eurostat ES51 2023 (412.15 per 100k = 4.12) matches OECD 2023 exactly."
   },
   "Dubai": {
    "value": 3.35,
    "raw": 3.35,
    "year": "2022",
    "source": "DHA 'Dubai Health Statistical Annual Book 2022', Table 48 p.267 'Physicians (1000 Pop.)' = 3.35 (2022); also stated in narrative p.256",
    "note": "Official DHA-stated rate; licensed physicians in the emirate (licence counts may include some non-practising). Newer DHA yearbooks (2023: 13,228 physicians; 2024: 14,861) publish only headcounts, no per-1,000 rate."
   },
   "San Francisco": {
    "value": 3.02,
    "raw": 3.02,
    "year": "2022",
    "source": "OECD DF_HEALTH, REF_AREA US06 'California' (TL2, state), DOC per 1,000 inhabitants, 2022",
    "note": "California state proxy, not San Francisco; no finer OECD geography with data. Same 2019 level break as other US states (2018=2.60, 2019=3.15)."
   }
  }
 },
 "LIV-06": {
  "source": "Numbeo Property Prices Index (Price To Income Ratio)",
  "url": "https://www.numbeo.com/property-investment/rankings.jsp",
  "license": "Copyright (c) 2009-2026 Numbeo; subject to Numbeo Terms of Use — no open license stated on the page",
  "edition": "Property Prices Index by City 2026 Mid-Year",
  "retrieved": "2026-07-11",
  "method": "curl with browser User-Agent fetched rankings.jsp (HTTP 200, saved as rankings.html). Regex-parsed HTML table id=\"t2\" (header: Rank | City | Price To Income Ratio | ...); took the first numeric cell after the City cell as Price To Income Ratio, transcribed verbatim (no arithmetic, no rounding). Matched cities by exact \"City, Country\" label (US cities include state: \"New York, NY, United States\", \"San Francisco, CA, United States\"). Cross-checked Singapore (rankings 24.7 vs city page 24.65 — consistent within rounding) and San Francisco (rankings 6.5 vs city page 6.38 — city page shows live current data vs the mid-year edition snapshot; column alignment confirmed against raw row HTML). 393 rows parsed total.",
  "perCity": {
   "Singapore": {
    "value": 24.7,
    "raw": 24.7,
    "year": "2026 Mid-Year",
    "source": "Singapore, Singapore",
    "note": "Cross-checked vs individual city page (live value 24.65, consistent)"
   },
   "Tokyo": {
    "value": 16.0,
    "raw": 16,
    "year": "2026 Mid-Year",
    "source": "Tokyo, Japan"
   },
   "Copenhagen": {
    "value": 10.7,
    "raw": 10.7,
    "year": "2026 Mid-Year",
    "source": "Copenhagen, Denmark"
   },
   "Zurich": {
    "value": 12.8,
    "raw": 12.8,
    "year": "2026 Mid-Year",
    "source": "Zurich, Switzerland"
   },
   "Vienna": {
    "value": 15.8,
    "raw": 15.8,
    "year": "2026 Mid-Year",
    "source": "Vienna, Austria"
   },
   "Seoul": {
    "value": 30.0,
    "raw": 30,
    "year": "2026 Mid-Year",
    "source": "Seoul, South Korea"
   },
   "Melbourne": {
    "value": 7.5,
    "raw": 7.5,
    "year": "2026 Mid-Year",
    "source": "Melbourne, Australia"
   },
   "Amsterdam": {
    "value": 9.9,
    "raw": 9.9,
    "year": "2026 Mid-Year",
    "source": "Amsterdam, Netherlands"
   },
   "London": {
    "value": 16.7,
    "raw": 16.7,
    "year": "2026 Mid-Year",
    "source": "London, United Kingdom"
   },
   "New York": {
    "value": 10.9,
    "raw": 10.9,
    "year": "2026 Mid-Year",
    "source": "New York, NY, United States"
   },
   "Paris": {
    "value": 17.0,
    "raw": 17,
    "year": "2026 Mid-Year",
    "source": "Paris, France"
   },
   "Toronto": {
    "value": 11.6,
    "raw": 11.6,
    "year": "2026 Mid-Year",
    "source": "Toronto, Canada"
   },
   "Berlin": {
    "value": 11.1,
    "raw": 11.1,
    "year": "2026 Mid-Year",
    "source": "Berlin, Germany"
   },
   "Barcelona": {
    "value": 13.8,
    "raw": 13.8,
    "year": "2026 Mid-Year",
    "source": "Barcelona, Spain"
   },
   "Dubai": {
    "value": 7.8,
    "raw": 7.8,
    "year": "2026 Mid-Year",
    "source": "Dubai, United Arab Emirates"
   },
   "San Francisco": {
    "value": 6.5,
    "raw": 6.5,
    "year": "2026 Mid-Year",
    "source": "San Francisco, CA, United States",
    "note": "Individual city page currently shows 6.38 (live data drifts from the mid-year edition snapshot); the 6.5 edition value is used. Column parse verified against raw row HTML."
   }
  }
 },
 "GRN-02": {
  "source": "UN-Habitat, Open spaces and green areas (SDG 11.7.1), Urban Indicators Database — via HDX",
  "url": "https://data.humdata.org/dataset/open-spaces-world (resource: https://data.humdata.org/dataset/d0a53e4a-5f49-46cb-83d6-51e5974ab8e5/resource/69bbeeaf-c5c9-4492-ba83-2c0d894fdae3/download/sdg_11-7-1.csv)",
  "license": "Open Data Commons Public Domain Dedication and License (PDDL)",
  "edition": "HDX dataset last modified 2026-04-01 (resource files 2025-11/2026-04); data reference year 2020; dataset date range 2014-2022",
  "retrieved": "2026-07-11",
  "method": "Downloaded HDX package_show for id=open-spaces-world, then all 4 resources (sdg_11-7-1 csv+xlsx; green-areas csv+xlsx) plus the ArcGIS item fbb02b19d417497093418484448e3465 (an xlsx identical in shape/columns to the HDX table, 1711x15). Target column taken verbatim: 'Average share of urban population with convenient access to open public spaces (%) [b]' (footnote [b]: share of urban population who can access an open public space within a walking distance of 400 meters along the street network) — NOT column [a] (built-up-area share). Matched cities on 'City Code' after listing all candidate rows per name substring (accent-normalized) and per country; each of the 14 matched cities has exactly one row, Data Reference Year 2020, Data Source 'UN-Habitat Urban Indicators Database'. Values transcribed literally from the raw CSV text via csv.DictReader (no rounding, no arithmetic). Cross-checks:",
  "perCity": {
   "Singapore": {
    "value": 70.3,
    "raw": 70.26102718096323,
    "year": "2020",
    "source": "City Code SG_SINGAPORE / City Name 'Singapore' (Singapore), col [b]",
    "note": "Not in green-areas companion file."
   },
   "Tokyo": {
    "value": 74.8,
    "raw": 74.8168617408365,
    "year": "2020",
    "source": "City Code JP_TOKYO / City Name 'Tokyo' (Japan), col [b]",
    "note": "Green-areas file 2020: green share 9.026259%, 12.838383 m2/person."
   },
   "Copenhagen": {
    "value": 83.7,
    "raw": 83.6896815232158,
    "year": "2020",
    "source": "City Code DK_KOBENHAVN / City Name 'København (Copenhagen)' (Denmark), col [b]",
    "note": "Green-areas file 2020: green share 22.293090%, 58.758074 m2/person."
   },
   "Zurich": {
    "value": 67.6,
    "raw": 67.58544468364762,
    "year": "2020",
    "source": "City Code CH_ZURICH / City Name 'Zürich (Zurich)' (Switzerland), col [b]",
    "note": "Not in green-areas companion file."
   },
   "Vienna": {
    "value": 72.4,
    "raw": 72.42082087095444,
    "year": "2020",
    "source": "City Code AT_WIEN / City Name 'Wien (Vienna)' (Austria), col [b]",
    "note": "Green-areas file 2020: green share 30.743121%, 60.439214 m2/person."
   },
   "Seoul": {
    "value": 48.8,
    "raw": 48.75343275074322,
    "year": "2020",
    "source": "City Code KR_SEOUL / City Name 'Seoul' (Republic of Korea), col [b]",
    "note": "Not in green-areas companion file."
   },
   "Melbourne": {
    "value": 84.4,
    "raw": 84.42671865187526,
    "year": "2020",
    "source": "City Code AU_MELBOURNE / City Name 'Melbourne' (Australia), col [b]",
    "note": "Present despite expected gap (Australia has 22 city rows). Not in green-areas companion file."
   },
   "Amsterdam": {
    "value": 77.6,
    "raw": 77.6242385602859,
    "year": "2020",
    "source": "City Code NL_AMSTERDAM / City Name 'Amsterdam' (Netherlands (Kingdom of the)), col [b]",
    "note": "Green-areas file 2020: green share 11.973888%, 27.347040 m2/person."
   },
   "London": {
    "value": 87.1,
    "raw": 87.09553002937504,
    "year": "2020",
    "source": "City Code GB_LONDON / City Name 'London' (United Kingdom of Great Britain and Northern Ireland), col [b]",
    "note": "Disambiguated from 'East London (Buffalo City)', South Africa. Green-areas file 2020: green share 26.941187%, 41.984309 m2/person."
   },
   "New York": {
    "value": 71.0,
    "raw": 71.02611045468767,
    "year": "2020",
    "source": "City Code US_NEW_YORK_NY / City Name 'New York' (United States of America), col [b]",
    "note": "Not in green-areas companion file."
   },
   "Paris": {
    "value": 51.6,
    "raw": 51.584051812114716,
    "year": "2020",
    "source": "City Code FR_PARIS / City Name 'Paris' (France), col [b]",
    "note": "Not in green-areas companion file."
   },
   "Toronto": {
    "value": 91.7,
    "raw": 91.66187243895654,
    "year": "2020",
    "source": "City Code CA_TORONTO_ONT / City Name 'Toronto' (Canada), col [b]",
    "note": "Green-areas file 2020: green share 19.175989%, 56.790012 m2/person."
   },
   "Berlin": {
    "value": 68.2,
    "raw": 68.18943135144086,
    "year": "2020",
    "source": "City Code DE_BERLIN / City Name 'Berlin' (Germany), col [b]",
    "note": "Not in green-areas companion file."
   },
   "Barcelona": {
    "value": null,
    "year": "2020",
    "note": "Null per rules: no Spanish Barcelona row in the access dataset and no substitution of other definitions. Note the green-areas companion file DOES carry ES_BARCELONA (green share 2020 5.918326%, 3.049561 m2/person) but th"
   },
   "Dubai": {
    "value": 40.6,
    "raw": 40.60414512731577,
    "year": "2020",
    "source": "City Code AE_DUBAYY / City Name 'Dubayy (Dubai)' (United Arab Emirates), col [b]",
    "note": "Green-areas file 2020: green share 3.025461%, 5.811141 m2/person."
   },
   "San Francisco": {
    "value": null,
    "year": "2020",
    "note": "Null per rules: UN-Habitat's national-sample construction omits San Francisco CA; nearby San Jose exists in the file but is a different city and was not substituted. Also absent from the green-areas companion file."
   }
  }
 },
 "GRN-05": {
  "source": "Official municipal/national waste statistics per city (16 sources; see perCity)",
  "url": "various — see perCity source fields",
  "license": "official statistics, various open licenses",
  "edition": "latest available per city, 2023-2025",
  "retrieved": "2026-07-11",
  "method": "One official source per city (city waste authority, national statistics or federal waste report); metric definition recorded per value; no cross-source estimation.",
  "perCity": {
   "Singapore": {
    "value": 52.0,
    "raw": 52,
    "year": "2025",
    "source": "NEA 'Waste Statistics and Overall Recycling' (2025 key highlights): \"Singapore's overall recycling rate remained stable at 52 per cent in 2025\"",
    "note": "OVERALL recycling rate = recycled share of ALL solid waste managed in Singapore (domestic + non-domestic, incl. C&D, industrial, slag etc.) — broader than household municipal waste. Domestic (household-type) recycling ra"
   },
   "Tokyo": {
    "value": 21.4,
    "raw": 21.4,
    "year": "FY2024 (Reiwa 6, Apr 2024–Mar 2025)",
    "source": "東京都区市町村清掃事業年報（令和6年度実績）p.141, ■7 資源化量(1)総資源化量, row 区部地域 計, column リサイクル率 = 21.4%",
    "note": "23 special wards (ku-area) municipal waste (一般廃棄物 handled by ward cleansing services: household + small-business waste). リサイクル率 = (resource collection + resources recovered in processing + community group collection + pi"
   },
   "Copenhagen": {
    "value": 42.0,
    "raw": 42,
    "year": "2023",
    "source": "StatBank LABY25, Copenhagen (municipality 101), GENPCT 'Houshold waste collected for recycling (per cent)' = 42 (2023)",
    "note": "Household waste only (all fractions incl. garden/food waste). Share of total household waste COLLECTED for recycling incl. other final material recovery (input basis, treatment code GENANV); waste-to-energy incineration "
   },
   "Zurich": {
    "value": 46.0,
    "raw": 46,
    "year": "2024",
    "source": "ERZ Tätigkeitsbericht 2024, p.25 'Recyclingquote Stadt Zürich' = 46% (2024); series 2020-2024: 43/44/45/44/46",
    "note": "Household waste handled by city ERZ only. City's own formula (footnote p.25): separately collected recyclables (glass, metals, paper, cardboard, textiles, bio-waste, e-waste etc., 55,927 t) / (recyclables + Hauskehricht "
   },
   "Vienna": {
    "value": 35.2,
    "raw": 35.2,
    "year": "2023",
    "source": "DERIVED from BMLUK/Umweltbundesamt Statusbericht 2025, Tabelle 66, column W (Wien): Gesamt 861,830 t; Restmüll 515,696 t; Sperrmüll 29,095 t; Straßenkehricht 13,955 t; separately collected fractions 3",
    "note": "NOT an official published city rate — Vienna publishes no municipal recycling quota (verified: MA48 AWP 2025-2030, EMAS Umwelterklärung 2024, city yearbook give tonnages only). Value = separate-collection share of munici"
   },
   "Seoul": {
    "value": 61.7,
    "raw": 61.7,
    "year": "2024",
    "source": "기후에너지환경 통계포털 (stat.mcee.go.kr) table DT_106N_29_2020005 '폐기물 발생량 및 처리현황_생활폐기물', 서울/합계 row, 2024: 발생량 2,893,575.5 t, 재활용 1,784,403.2 t → 61.7%",
    "note": "생활(가정)폐기물 = household municipal waste under the Korean Wastes Control Act (excludes workplace non-facility 'municipal-type' waste, reported separately). Rate computed as recycled/generated from the official table (the sa"
   },
   "Melbourne": {
    "value": 47.9,
    "raw": 47.9,
    "year": "FY2023-24",
    "source": "Victorian local government waste data dashboard (EPA Victoria/vic.gov.au), measure 'Kerbside diversion rate', Year 2024 (=FY2023-24), region 'Port Phillip' (DELWP metropolitan region, 31 councils) = 0",
    "note": "GEOGRAPHY: metropolitan Melbourne (31-council DELWP Port Phillip region), not City of Melbourne council (which alone = 23.3%, same source - CBD high-rise skew). Kerbside household services only (garbage, mixed recycling,"
   },
   "Amsterdam": {
    "value": 25.0,
    "raw": 25,
    "year": "2024 publication (reference year not stated in document)",
    "source": "Gemeente Amsterdam, 'Kader Schoon en Afvalvrij 2025-2028' (8 Oct 2024), p. section 'Minder (rest)afval': 'Van de totale hoeveelheid afval wordt 25% nadat het gescheiden is, ook daadwerkelijk gerecycle",
    "note": "DEFINITION: 25% of total household waste (incl. small-business waste using household facilities via reinigingsrecht) is ACTUALLY RECYCLED after separation; the SEPARATION (diversion-to-separate-collection incl. post-sepa"
   },
   "London": {
    "value": 32.6,
    "raw": 32.6,
    "year": "2024/25 (financial year)",
    "source": "DEFRA, Local authority collected waste management – annual results 2024/25, Figure 9 data: 'Household waste' recycling rates, England and regions — row 'London', column '2024/25' = 32.6",
    "note": "DEFINITION: 'household waste' (ex-NI192) recycling rate = % of household waste sent for reuse, recycling or composting; broader than 'waste from households' (includes street bins, street sweepings, gully emptyings, parks"
   },
   "New York": {
    "value": 21.8,
    "raw": 21.8,
    "year": "FY2025 (Jul 2024-Jun 2025)",
    "source": "MMR 2025, DSNY chapter p.151, Goal 3a table, indicator 'Overall recycling diversion rate (%)', FY25 actual",
    "note": "Diversion, not strict recycling-only: 'percentage of recyclable material kept out of landfills', includes curbside+containerized recycling, curbside composting, third-party-collected textiles/e-waste, and recovered metal"
   },
   "Paris": {
    "value": 20.0,
    "raw": 20,
    "year": "2023",
    "source": "Ville de Paris, PLPDMA 2024-2030 (adopted Dec 2024), 'Objectifs de réduction et de valorisation': 'en 2023, le taux final de valorisation des déchets ménagers et assimilés à Paris s'élevait à 20%'",
    "note": "DEFINITION: final material+organic valorisation rate of déchets ménagers et assimilés (household and assimilated municipal waste, 929,701 t in 2023) AFTER sorting rejects; excludes incineration/waste-to-energy. Source-se"
   },
   "Toronto": {
    "value": 50.6,
    "raw": 50.6,
    "year": "2025",
    "source": "toronto.ca 'Solid Waste Reports & Diversion Rates': 2025 combined residential diversion rate, Total Residential row (355,657 t garbage / 364,961 t diverted / 50.6%)",
    "note": "Residential waste only (single-family 60.3%, multi-residential 26.3%). Diversion includes Blue Bin recycling, Green Bin organics, yard waste, e-waste, HHW, backyard composting, deposit-return, tires (GAP/RPRA Datacall me"
   },
   "Berlin": {
    "value": 30.8,
    "raw": 30.8,
    "year": "2023",
    "source": "Abfallbilanz des Landes Berlin 2023 (SenMVKU, Stand 01/2025), section 5.1.4: 'rund 414.000 Megagramm Abfälle recycelt. Dies entspricht einer Recyclingquote von rund 30,8 Prozent.'",
    "note": "Waste from households and small businesses (Geschäftsmüll) handed to public disposal + dual-system packaging. STRICT output-based material-recycling quota (computed on actually materially recovered OUTPUT streams after s"
   },
   "Barcelona": {
    "value": 42.1,
    "raw": 42.14,
    "year": "2024",
    "source": "Agència de Residus de Catalunya / Dept. de Territori, Habitatge i Transició Ecològica, dataset 'Estadístiques de residus municipals' (69zu-w48s), row municipi='Barcelona', any='2024', field 'R.S. / R.",
    "note": "DEFINITION: gross selective collection (recollida selectiva) as % of total municipal waste generated (317,446.43 t of 753,337.10 t) — a DIVERSION/collection metric, before sorting rejects, not final recycling. Includes o"
   },
   "Dubai": {
    "value": null,
    "year": "2025 (reviewed Feb 2026)",
    "note": "NULL because no official municipal RECYCLING rate is fetchable this session. The only official current figure found is the quoted 62% LANDFILL-DIVERSION statement tied to the Warsan waste-to-energy plant's operational pe"
   },
   "San Francisco": {
    "value": 53.1,
    "raw": 53.1,
    "year": "FY2025 (Jul 2024-Jun 2025)",
    "source": "SF Controller City Performance Scorecard measure 382 'Percentage of residential and commercial refuse recovered through recycling and composting', FY2025 average of 12 official monthly actuals = 0.530",
    "note": "'Recovery rate' = tons recycled+composted / total refuse (recycling+composting+trash), net of residual contamination, as reported by Recology to SF Environment. Scope: residential and small-business ('Fantastic 3') colle"
   }
  }
 },
 "SMT-03": {
  "source": "UN E-Government Survey 2024 — Local Online Service Index (LOSI), Technical Appendix Table 12 'Local Online Service Index and its components', cross-checked against UN eGovKB city pages",
  "url": "https://desapublications.un.org/sites/default/files/publications/2024-09/Technical%20Appendix%20(Web%20version)%201292024.pdf (cross-check: https://publicadministration.un.org/egovkb/en-us/Data/City/id/<id>-<City>/dataYear/2024)",
  "license": "United Nations publication (© United Nations). Publicly accessible via UN DESA Publications and the UN eGovKB; no explicit open-data license stated on the pages — standard UN copyright, cite UN DESA.",
  "edition": "2024 (13th edition of the UN E-Government Survey, released September 2024)",
  "retrieved": "2026-07-11",
  "method": "Downloaded the official UN E-Government Survey 2024 Technical Appendix PDF from desapublications.un.org. Table 12 \"Local Online Service Index and its components\" (appendix pp. 70-77 = PDF pages 78-85) is printed on rotated pages, so pdfplumber extracts each word character-reversed in reverse column order; reconstructed rows by reversing each extracted line character-wise and reversing the per-page token stream (saved as table12_forward_tokens.txt). Row layout: City | Country | Region | LOSI Group | Rank | LOSI 2024 | IF | CP | SP | EPI | TEC | OSI Group | OSI 2024. Took the \"LOSI 2024\" column (the value immediately after Rank) for each of the 13 covered cities and multiplied by 100 (LOSI is on a 0-1 scale). Cross-checked ALL 13 cities (not just 3) against their individual eGovKB pages (https://publicadministration.un.org/egovkb/en-us/Data/City/id/<id>-<City>/dataYear/2024), parsing the e",
  "perCity": {
   "Singapore": {
    "value": 87.5,
    "raw": 87.5,
    "year": "2024",
    "source": "Table 12: Singapore (Singapore), Asia — LOSI 2024 = 0.8750, Rank 9; eGovKB city id 175 confirms 0.87500, rank 9",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Tokyo": {
    "value": 85.42,
    "raw": 85.42,
    "year": "2024",
    "source": "Table 12: Tokyo (Japan), Asia — LOSI 2024 = 0.8542, Rank 13; eGovKB city id 42 confirms 0.85420, rank 13",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Copenhagen": {
    "value": 90.63,
    "raw": 90.63,
    "year": "2024",
    "source": "Table 12: Copenhagen (Denmark), Europe — LOSI 2024 = 0.9063, Rank 4; eGovKB city id 111 confirms 0.90630, rank 4",
    "note": "Verified in both PDF Table 12 and eGovKB city page. PDF renders the city as 'copenhagen' due to a small-caps font quirk."
   },
   "Zurich": {
    "value": 81.25,
    "raw": 81.25,
    "year": "2024",
    "source": "Table 12: Zurich (Switzerland), Europe — LOSI 2024 = 0.8125, Rank 21; eGovKB city id 198 confirms 0.81250, rank 21",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Vienna": {
    "value": 84.38,
    "raw": 84.38,
    "year": "2024",
    "source": "Table 12: Vienna (Austria), Europe — LOSI 2024 = 0.8438, Rank 16; eGovKB city id 6 confirms 0.84380, rank 16",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Seoul": {
    "value": 87.5,
    "raw": 87.5,
    "year": "2024",
    "source": "Table 12: Seoul (Republic of Korea), Asia — LOSI 2024 = 0.8750, Rank 9; eGovKB city id 61 confirms 0.87500, rank 9",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Melbourne": {
    "value": null,
    "year": "2024",
    "note": "LOSI covers only the most populous city per UN member state; Melbourne absent from both PDF Table 12 and the eGovKB 193-city list. Null is correct."
   },
   "Amsterdam": {
    "value": 78.13,
    "raw": 78.13,
    "year": "2024",
    "source": "Table 12: Amsterdam (Netherlands), Europe — LOSI 2024 = 0.7813, Rank 35; eGovKB city id 53 confirms 0.78130, rank 35 (2022 rank 42)",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "London": {
    "value": 87.5,
    "raw": 87.5,
    "year": "2024",
    "source": "Table 12: London (United Kingdom of Great Britain and Northern Ireland), Europe — LOSI 2024 = 0.8750, Rank 9; eGovKB city id 79 confirms 0.87500, rank 9",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "New York": {
    "value": 90.63,
    "raw": 90.63,
    "year": "2024",
    "source": "Table 12: New York (United States of America), Americas — LOSI 2024 = 0.9063, Rank 4; eGovKB city id 81 confirms 0.90630, rank 4",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Paris": {
    "value": 81.25,
    "raw": 81.25,
    "year": "2024",
    "source": "Table 12: Paris (France), Europe — LOSI 2024 = 0.8125, Rank 21; eGovKB city id 30 confirms 0.81250, rank 21",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Toronto": {
    "value": 79.17,
    "raw": 79.17,
    "year": "2024",
    "source": "Table 12: Toronto (Canada), Americas — LOSI 2024 = 0.7917, Rank 32; eGovKB city id 17 confirms 0.79170, rank 32",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Berlin": {
    "value": 88.54,
    "raw": 88.54,
    "year": "2024",
    "source": "Table 12: Berlin (Germany), Europe — LOSI 2024 = 0.8854, Rank 8; eGovKB city id 31 confirms 0.88540, rank 8 (also appears as sub-region leader on Amsterdam's page at 0.88540)",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "Barcelona": {
    "value": null,
    "year": "2024",
    "note": "LOSI covers only the most populous city per UN member state; Barcelona absent from both PDF Table 12 and the eGovKB 193-city list. Null is correct."
   },
   "Dubai": {
    "value": 90.63,
    "raw": 90.63,
    "year": "2024",
    "source": "Table 12: Dubai (United Arab Emirates), Asia — LOSI 2024 = 0.9063, Rank 4; eGovKB city id 78 confirms 0.90630, rank 4 (2022 rank 5)",
    "note": "Verified in both PDF Table 12 and eGovKB city page."
   },
   "San Francisco": {
    "value": null,
    "year": "2024",
    "note": "LOSI covers only the most populous city per UN member state; San Francisco absent from both PDF Table 12 and the eGovKB 193-city list. Null is correct."
   }
  }
 },
 "SMT-05": {
  "source": "World Bank World Development Indicators — IT.NET.USER.ZS, Individuals using the Internet (% of population) (mirror of ITU series i99H); cross-checked against ITU DataHub indicator 11624",
  "url": "https://api.worldbank.org/v2/country/SGP;JPN;DNK;CHE;AUT;KOR;AUS;NLD;GBR;USA;FRA;CAN;DEU;ESP;ARE/indicator/IT.NET.USER.ZS?format=json&mrnev=1&per_page=20",
  "license": "CC BY 4.0 (World Bank Open Data terms); ITU DataHub data used for cross-check only",
  "edition": "WDI API, database lastupdated 2026-07-01; most recent non-empty value per country (mrnev=1)",
  "retrieved": "2026-07-11",
  "method": "GET https://api.worldbank.org/v2/country/SGP;JPN;DNK;CHE;AUT;KOR;AUS;NLD;GBR;USA;FRA;CAN;DEU;ESP;ARE/indicator/IT.NET.USER.ZS?format=json&mrnev=1&per_page=20 (first attempt returned a transient server error; identical retry returned HTTP 200, saved as wdi_it_net_user_zs_mrnev1.json). For each of the 15 countries, took the single mrnev=1 record's 'value' and 'date' fields verbatim, rounded value to 1 decimal (Python round-half-even not used — standard decimal rounding of the printed values, no ties occurred), and mapped ISO3 to city per the given mapping (USA value applied to both New York and San Francisco). Cross-check: the ITU DataHub page (datahub.itu.int/data/?i=11624) is a client-side Next.js app whose browser rendering was blocked (ERR_CONNECTION_RESET in headless Chromium), so I extracted the API pattern from its JS chunks: https://api.datahub.itu.int/v2/data/download?codesid=1162",
  "perCity": {
   "Singapore": {
    "value": 94.4,
    "raw": 94.4,
    "year": "2024",
    "source": "SGP / Singapore, IT.NET.USER.ZS, date 2024, value 94.37757178",
    "note": "Cross-checked vs ITU DataHub i=11624: SGP 2024 = 94.3776 (IMDA, aged 16-74) — exact match. Country-level value."
   },
   "Tokyo": {
    "value": 85.5,
    "raw": 85.5,
    "year": "2024",
    "source": "JPN / Japan, IT.NET.USER.ZS, date 2024, value 85.54153081",
    "note": "Country-level value applied to city."
   },
   "Copenhagen": {
    "value": 99.8,
    "raw": 99.8,
    "year": "2024",
    "source": "DNK / Denmark, IT.NET.USER.ZS, date 2024, value 99.76915157",
    "note": "Country-level value applied to city."
   },
   "Zurich": {
    "value": 97.3,
    "raw": 97.3,
    "year": "2025",
    "source": "CHE / Switzerland, IT.NET.USER.ZS, date 2025, value 97.32103855",
    "note": "Reference year 2025 (newer than most countries in this set). Country-level value."
   },
   "Vienna": {
    "value": 91.9,
    "raw": 91.9,
    "year": "2025",
    "source": "AUT / Austria, IT.NET.USER.ZS, date 2025, value 91.92573373",
    "note": "Reference year 2025 (newer than most countries in this set). Country-level value."
   },
   "Seoul": {
    "value": 97.9,
    "raw": 97.9,
    "year": "2024",
    "source": "KOR / Korea, Rep., IT.NET.USER.ZS, date 2024, value 97.89563777",
    "note": "Country-level value applied to city."
   },
   "Melbourne": {
    "value": 96.1,
    "raw": 96.1,
    "year": "2024",
    "source": "AUS / Australia, IT.NET.USER.ZS, date 2024, value 96.13140106",
    "note": "Country-level value applied to city."
   },
   "Amsterdam": {
    "value": 97.0,
    "raw": 97,
    "year": "2024",
    "source": "NLD / Netherlands, IT.NET.USER.ZS, date 2024, value 97.00679779",
    "note": "Country-level value applied to city."
   },
   "London": {
    "value": 95.5,
    "raw": 95.5,
    "year": "2024",
    "source": "GBR / United Kingdom, IT.NET.USER.ZS, date 2024, value 95.4720993",
    "note": "Country-level value applied to city."
   },
   "New York": {
    "value": 94.7,
    "raw": 94.7,
    "year": "2024",
    "source": "USA / United States, IT.NET.USER.ZS, date 2024, value 94.69380188",
    "note": "Same USA country value shared with San Francisco."
   },
   "Paris": {
    "value": 88.7,
    "raw": 88.7,
    "year": "2024",
    "source": "FRA / France, IT.NET.USER.ZS, date 2024, value 88.65381638",
    "note": "Country-level value applied to city."
   },
   "Toronto": {
    "value": 94.4,
    "raw": 94.4,
    "year": "2024",
    "source": "CAN / Canada, IT.NET.USER.ZS, date 2024, value 94.353302",
    "note": "Country-level value applied to city."
   },
   "Berlin": {
    "value": 93.5,
    "raw": 93.5,
    "year": "2024",
    "source": "DEU / Germany, IT.NET.USER.ZS, date 2024, value 93.49999579",
    "note": "Country-level value applied to city."
   },
   "Barcelona": {
    "value": 95.8,
    "raw": 95.8,
    "year": "2024",
    "source": "ESP / Spain, IT.NET.USER.ZS, date 2024, value 95.7574516",
    "note": "Country-level value applied to city."
   },
   "Dubai": {
    "value": 100.0,
    "raw": 100,
    "year": "2024",
    "source": "ARE / United Arab Emirates, IT.NET.USER.ZS, date 2024, value 100",
    "note": "Source records exactly 100 (obs_status empty). Cross-checked vs ITU DataHub i=11624: ARE 2024 = 100 (TDRA, aged 15-74) — exact match. Country-level value."
   },
   "San Francisco": {
    "value": 94.7,
    "raw": 94.7,
    "year": "2024",
    "source": "USA / United States, IT.NET.USER.ZS, date 2024, value 94.69380188",
    "note": "Same USA country value shared with New York."
   }
  }
 },
 "CMP-01": {
  "source": "OECD Regions, cities and local areas database — Economy - FUAs (OECD.CFE.EDS:DSD_FUA_ECO@DF_ECONOMY v1.1); OECD archived Metropolitan areas (OECD:DF_CITIES v1.0) for Melbourne/Toronto; World Bank WDI NY.GDP.PCAP.PP.CD for Singapore",
  "url": "https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_FUA_ECO@DF_ECONOMY,1.1/ (archive: https://sdmx.oecd.org/archive/rest/data/OECD,DF_CITIES,1.0/ ; Singapore: https://api.worldbank.org/v2/country/SGP/indicator/NY.GDP.PCAP.PP.CD)",
  "license": "OECD Terms & Conditions (OECD data CC BY 4.0); World Bank Open Data CC BY 4.0",
  "edition": "OECD SDMX API pulled 2026-07-11 (DF_ECONOMY v1.1; archive DF_CITIES v1.0); World Bank API lastupdated 2026-07-01",
  "retrieved": "2026-07-11",
  "method": "Step 1: fetched DSD_REG_ECO@DF_GDP v2.0 structure (dims FREQ.TERRITORIAL_LEVEL.REF_AREA.TERRITORIAL_TYPE.MEASURE.ACTIVITY.PRICES.UNIT_MEASURE; measure GDP; unit USD_PPP_PS 'US dollars per person, PPP converted'; prices V=current). availableconstraint for UNIT_MEASURE=USD_PPP_PS showed TERRITORIAL_LEVEL only CTRY/TL2/TL3 — NO metro/FUA rows in DF_GDP. Step 2: found current FUA dataflow OECD.CFE.EDS:DSD_FUA_ECO@DF_ECONOMY v1.1; pulled key {REF_AREA}.A.GDP.USD_PPP_PS.FUA (csvfilewithlabels) for 14 FUA codes; took the max TIME_PERIOD row per REF_AREA (all OBS_STATUS=A, UNIT_MULT=0). 12 cities returned data. FUA codes: AT001F Wien, JPN01F Tokyo, DK001F København, CH002F Zürich, KOR01F Seoul, NL001F Amsterdam, UK001F London, USA01F New York (Greater), FR001F Paris, DE001F Berlin, ES002F Barcelona, USA05F San Francisco (Greater). Step 3: AUS02F/CAN01F returned NoRecordsFound, so Melbourne and T",
  "perCity": {
   "Singapore": {
    "value": 132570,
    "raw": 132569.525225795,
    "year": "2024",
    "source": "World Bank NY.GDP.PCAP.PP.KD — GDP per capita, PPP (constant 2021 international $), Singapore",
    "note": "National figure (city-state). Constant-PPP like the OECD metro values but on a 2021 base year vs OECD’s 2015 base — residual basis mismatch disclosed. Replaces the current-price figure (150,689, 2024) which was not compa"
   },
   "Tokyo": {
    "value": 50287,
    "raw": 50287,
    "year": "2021",
    "source": "JPN01F | Tokyo | FUA | GDP | USD_PPP_PS | 2021",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology."
   },
   "Copenhagen": {
    "value": 85842,
    "raw": 85842,
    "year": "2023",
    "source": "DK001F | København | FUA | GDP | USD_PPP_PS | 2023",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "Zurich": {
    "value": 88723,
    "raw": 88723,
    "year": "2022",
    "source": "CH002F | Zürich | FUA | GDP | USD_PPP_PS | 2022",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "Vienna": {
    "value": 66253,
    "raw": 66253,
    "year": "2022",
    "source": "AT001F | Wien | FUA | GDP | USD_PPP_PS | 2022",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "Seoul": {
    "value": 51292,
    "raw": 51292,
    "year": "2022",
    "source": "KOR01F | Seoul | FUA | GDP | USD_PPP_PS | 2022",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "Melbourne": {
    "value": 40848,
    "raw": 40848,
    "year": "2020",
    "source": "AUS02 | Greater Melbourne | GDP_PC_REAL_PPP (USD, constant prices, constant PPP, base year 2015) | 2020",
    "note": "From ARCHIVED OECD Metropolitan areas dataset (DF_CITIES) — current FUA dataflow has no Australian GDP rows. Same constant-2015-PPP basis as the FUA values but older year (2020, COVID-affected; 2019=42299). Newer alterna"
   },
   "Amsterdam": {
    "value": 87028,
    "raw": 87028,
    "year": "2022",
    "source": "NL001F | Amsterdam | FUA | GDP | USD_PPP_PS | 2022",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "London": {
    "value": 72186,
    "raw": 72186,
    "year": "2020",
    "source": "UK001F | London | FUA | GDP | USD_PPP_PS | 2020",
    "note": "Latest available year is 2020 — a COVID-dip value (2019 was 82348). OECD FUA (metro), constant-PPP real USD per person."
   },
   "New York": {
    "value": 91990,
    "raw": 91990,
    "year": "2023",
    "source": "USA01F | New York (Greater) | FUA | GDP | USD_PPP_PS | 2023",
    "note": "OECD FUA (metro), constant-PPP real USD per person. US FUAs aggregated from BEA county-level GDP."
   },
   "Paris": {
    "value": 83089,
    "raw": 83089,
    "year": "2021",
    "source": "FR001F | Paris | FUA | GDP | USD_PPP_PS | 2021",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "Toronto": {
    "value": 44561,
    "raw": 44561,
    "year": "2020",
    "source": "CAN01 | Toronto | GDP_PC_REAL_PPP (USD, constant prices, constant PPP, base year 2015) | 2020",
    "note": "From ARCHIVED OECD Metropolitan areas dataset (DF_CITIES) — current FUA dataflow has no Canadian GDP rows. Same constant-2015-PPP basis as the FUA values but older year (2020, COVID-affected; 2019=46648). Newer alternati"
   },
   "Berlin": {
    "value": 59205,
    "raw": 59205,
    "year": "2022",
    "source": "DE001F | Berlin | FUA | GDP | USD_PPP_PS | 2022",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "Barcelona": {
    "value": 52064,
    "raw": 52064,
    "year": "2022",
    "source": "ES002F | Barcelona | FUA | GDP | USD_PPP_PS | 2022",
    "note": "OECD FUA (metro), constant-PPP real USD per person. Modelled estimate."
   },
   "Dubai": {
    "value": null,
    "year": "n/a",
    "note": "null by approved decision — no free PPP metro figure; AED conversion not performed."
   },
   "San Francisco": {
    "value": 146853,
    "raw": 146853,
    "year": "2023",
    "source": "USA05F | San Francisco (Greater) | FUA | GDP | USD_PPP_PS | 2023",
    "note": "OECD FUA (metro), constant-PPP real USD per person. 'San Francisco (Greater)' FUA is the wider Bay Area delineation; aggregated from BEA county-level GDP."
   },
   "Stockholm": {
    "value": 81394,
    "year": "2023",
    "source": "SE001F | Stockholm | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (79724 vs 2019=81785); latest 2023 value is post-dip."
   },
   "Oslo": {
    "value": 63394,
    "year": "2021",
    "source": "NO001F | Oslo | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. Latest is 2021; series shows a sharp drop 2020=73788 to 2021=63394 (OBS_STATUS=A for both) - likely P"
   },
   "Helsinki": {
    "value": 66107,
    "year": "2023",
    "source": "FI001F | Helsinki/Helsingfors | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (67861 vs 2019=70878); latest 2023 value is post-dip."
   },
   "Madrid": {
    "value": 59768,
    "year": "2022",
    "source": "ES001F | Madrid | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (52853 vs 2019=59996); latest 2022 value is post-dip."
   },
   "Milan": {
    "value": 82014,
    "year": "2022",
    "source": "IT002F | Milano | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (70127 vs 2019=75533); latest 2022 value is post-dip."
   },
   "Rome": {
    "value": 65690,
    "year": "2022",
    "source": "IT001F | Roma | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (55988 vs 2019=61814); latest 2022 value is post-dip."
   },
   "Munich": {
    "value": 102244,
    "year": "2022",
    "source": "DE003F | München | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (96323 vs 2019=102253); latest 2022 value is post-dip."
   },
   "Frankfurt": {
    "value": 82688,
    "year": "2022",
    "source": "DE005F | Frankfurt am Main | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (79678 vs 2019=84554); latest 2022 value is post-dip."
   },
   "Hamburg": {
    "value": 77768,
    "year": "2022",
    "source": "DE002F | Hamburg | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (70709 vs 2019=74563); latest 2022 value is post-dip."
   },
   "Brussels": {
    "value": 78040,
    "year": "2023",
    "source": "BE001F | Bruxelles/Brussel/Leuven | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (71470 vs 2019=76045); latest 2023 value is post-dip. FUA is"
   },
   "Dublin": {
    "value": 141694,
    "year": "2023",
    "source": "IE001F | Dublin | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. Caution: Irish GDP is inflated by multinational profit-shifting; per-capita GDP overstates local inco"
   },
   "Lisbon": {
    "value": 50408,
    "year": "2022",
    "source": "PT001F | Lisboa | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (44950 vs 2019=49536); latest 2022 value is post-dip."
   },
   "Prague": {
    "value": 83056,
    "year": "2022",
    "source": "CZ001F | Praha | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (74036 vs 2019=80076); latest 2022 value is post-dip."
   },
   "Warsaw": {
    "value": 81920,
    "year": "2022",
    "source": "PL001F | Warszawa | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (73598 vs 2019=78295); latest 2022 value is post-dip."
   },
   "Istanbul": {
    "value": 56428,
    "year": "2023",
    "source": "TR012F | Istanbul | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2023 value; no 2020 dip in this series (2019=47823, 2020=46353, 2021=52370)."
   },
   "Montreal": {
    "value": 38730,
    "year": "2020",
    "source": "CAN02 | Montreal | METRO (archived DF_CITIES) | GDP_PC_REAL_PPP",
    "note": "From ARCHIVED OECD Metropolitan areas dataset (OECD:DF_CITIES v1.0, tenant=archive) - current FUA dataflow DF_ECONOMY v1.1 has no GDP rows for this metro. USD, constant prices, constant PPP, base year 2015 (same basis as"
   },
   "Vancouver": {
    "value": 45902,
    "year": "2020",
    "source": "CAN03 | Vancouver | METRO (archived DF_CITIES) | GDP_PC_REAL_PPP",
    "note": "From ARCHIVED OECD Metropolitan areas dataset (OECD:DF_CITIES v1.0, tenant=archive) - current FUA dataflow DF_ECONOMY v1.1 has no GDP rows for this metro. USD, constant prices, constant PPP, base year 2015 (same basis as"
   },
   "Chicago": {
    "value": 75524,
    "year": "2023",
    "source": "USA03F | Chicago | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (68589 vs 2019=72110); latest 2023 value is post-dip."
   },
   "Boston": {
    "value": 101761,
    "year": "2023",
    "source": "USA11F | Boston | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (95573 vs 2019=95945); latest 2023 value is post-dip."
   },
   "Los Angeles": {
    "value": 70646,
    "year": "2023",
    "source": "USA02F | Los Angeles (Greater) | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (63941 vs 2019=66132); latest 2023 value is post-dip. Used U"
   },
   "Seattle": {
    "value": 111516,
    "year": "2023",
    "source": "USA14F | Seattle | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (101014 vs 2019=101024); latest 2023 value is post-dip."
   },
   "Washington DC": {
    "value": 83988,
    "year": "2023",
    "source": "USA04F | Washington (Greater) | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (79173 vs 2019=80601); latest 2023 value is post-dip. Used U"
   },
   "Sydney": {
    "value": 45152,
    "year": "2020",
    "source": "AUS01 | Greater Sydney | METRO (archived DF_CITIES) | GDP_PC_REAL_PPP",
    "note": "From ARCHIVED OECD Metropolitan areas dataset (OECD:DF_CITIES v1.0, tenant=archive) - current FUA dataflow DF_ECONOMY v1.1 has no GDP rows for this metro. USD, constant prices, constant PPP, base year 2015 (same basis as"
   },
   "Auckland": {
    "value": 55906,
    "year": "2022",
    "source": "NZL01F | Auckland | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (50555 vs 2019=51431); latest 2022 value is post-dip."
   },
   "Osaka": {
    "value": 41497,
    "year": "2021",
    "source": "JPN02F | Osaka | FUA | USD_PPP_PS",
    "note": "OECD FUA (metro), USD per person PPP, constant prices/constant PPP (real). Modelled estimate per OECD FUA methodology. 2020 was a COVID-dip year in this series (40063 vs 2019=41719); latest 2021 value is post-dip. Latest"
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "null - no GDP data exists for Tel Aviv in either source: current flow DSD_FUA_ECO@DF_ECONOMY v1.1 has only EMPW (employment) rows for ISR10F, and archived DF_CITIES has only environmental/hazard variables for ISR10 (no G"
   }
  }
 },
 "CMP-04": {
  "source": "Dealroom.co public city/country startup-ecosystem profile pages (free hub pages), accessed via Internet Archive Save Page Now captures made this session",
  "url": "https://dealroom.co/cities/ (per-hub pages, e.g. https://dealroom.co/cities/london/; Singapore: https://dealroom.co/countries/singapore/)",
  "license": "Proprietary Dealroom.co data shown on free public pages; no explicit reuse license reviewed — cite Dealroom.co. Wayback captures are publicly accessible.",
  "edition": "Live pages as of 2026-07-11 (Save Page Now captures 13:30–13:57 UTC, capture timestamps per city in notes)",
  "retrieved": "2026-07-11",
  "method": "Values read from Internet Archive Save Page Now captures (made 2026-07-11) of Dealroom’s own server-rendered hub pages, then divided by the metro population shown on the same page. per-100k = trackedStartups / pagePopulation * 100000.",
  "perCity": {
   "San Francisco": {
    "value": 320.8,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/bay-area/ ('Bay Area') — peer-table self row: Combined EV=$20T, 5-yr EV growth=8.0×, Unicorns=841, VC invested=$156B, Tracked startups=24.7K; hero: 'Supercluster",
    "trackedStartups": 24700,
    "pagePopulation": 7700000
   },
   "New York": {
    "value": 86.9,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/new-york-city/ — peer-table self row: Combined EV=$1.7T, 5-yr EV growth=5.1×, Unicorns=321, VC invested=$32.8B, Tracked startups=16.6K; hero: 'Metro area · Unite",
    "trackedStartups": 16600,
    "pagePopulation": 19100000
   },
   "London": {
    "value": 116.3,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/london/ — peer-table self row: Combined EV=$716B, 5-yr EV growth=5.6×, Unicorns=156, VC invested=$18.3B, Tracked startups=11.4K; hero: 'Metro area · United Kingd",
    "trackedStartups": 11400,
    "pagePopulation": 9800000
   },
   "Paris": {
    "value": 42.0,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/paris/ — peer-table self row: Combined EV=$287B, 5-yr EV growth=5.8×, Unicorns=54, VC invested=$6.3B, Tracked startups=5,123; hero: 'Metro area · France · Pop. 1",
    "trackedStartups": 5123,
    "pagePopulation": 12200000
   },
   "Berlin": {
    "value": 49.4,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/berlin-brandenburg/ ('Berlin/Brandenburg') — peer-table self row: Combined EV=$184B, 5-yr EV growth=3.6×, Unicorns=33, VC invested=$2.8B, Tracked startups=3,064;",
    "trackedStartups": 3064,
    "pagePopulation": 6200000
   },
   "Amsterdam": {
    "value": null,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/utrecht/ — 'Top cities in Netherlands' peer-table row #1 'Amsterdam': Combined EV=$257B, 5-yr EV growth=2.7×, Unicorns=25, VC invested=$1.6B, Tracked startups=1,",
    "trackedStartups": 1714,
    "pagePopulation": null,
    "note": "missing page figure (startup count or population not displayed)"
   },
   "Barcelona": {
    "value": 28.5,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/barcelona/ — peer-table self row: Combined EV=$40.5B, 5-yr EV growth=4.9×, Unicorns=6, VC invested=$1.2B, Tracked startups=1,538; hero: 'Metro area · Spain · Pop",
    "trackedStartups": 1538,
    "pagePopulation": 5400000
   },
   "Copenhagen": {
    "value": null,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/copenhagen/ — hero: 'Metro area · Denmark · Pop. 1.9M · #43 city by EV'; meta description: 'Copenhagen startup ecosystem: $125B combined EV, 22 unicorns, 27 thor",
    "trackedStartups": null,
    "pagePopulation": 1900000,
    "note": "missing page figure (startup count or population not displayed)"
   },
   "Zurich": {
    "value": 49.0,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/zurich/ — peer-table self row: Combined EV=$58.3B, 5-yr EV growth=7.9×, Unicorns=16, VC invested=$1.2B, Tracked startups=1,030; hero: 'Metro area · Switzerland ·",
    "trackedStartups": 1030,
    "pagePopulation": 2100000
   },
   "Vienna": {
    "value": null,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/vienna/ — hero: 'Metro area · Austria · Pop. 2.9M'; meta description: 'Vienna startup ecosystem: $23.2B combined EV, 5 unicorns, 6 thoroughbreds, $181.4M VC inve",
    "trackedStartups": null,
    "pagePopulation": 2900000,
    "note": "missing page figure (startup count or population not displayed)"
   },
   "Tokyo": {
    "value": 14.8,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/tokyo/ — peer-table self row: Combined EV=$188B, 5-yr EV growth=5.2×, Unicorns=20, VC invested=$3.3B, Tracked startups=6,034; hero: 'Metro area · Japan · Pop. 40",
    "trackedStartups": 6034,
    "pagePopulation": 40700000
   },
   "Seoul": {
    "value": null,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/seoul/ — hero: 'Metro area · South Korea · Pop. 26M · #17 city by EV'; meta description: 'Seoul startup ecosystem: $357B combined EV, 41 unicorns, 37 thoroughbre",
    "trackedStartups": null,
    "pagePopulation": 26000000,
    "note": "missing page figure (startup count or population not displayed)"
   },
   "Dubai": {
    "value": null,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/dubai/ — hero: 'Metro area · United Arab Emirates · Pop. 5.6M'; meta description: 'Dubai startup ecosystem: $64.4B combined EV, 17 unicorns, 14 thoroughbreds, $3",
    "trackedStartups": null,
    "pagePopulation": 5600000,
    "note": "missing page figure (startup count or population not displayed)"
   },
   "Melbourne": {
    "value": 27.3,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/melbourne/ — peer-table self row: Combined EV=$63.5B, 5-yr EV growth=5.9×, Unicorns=21, VC invested=$1.5B, Tracked startups=1,339; hero: 'Metro area · Australia ",
    "trackedStartups": 1339,
    "pagePopulation": 4900000
   },
   "Toronto": {
    "value": 52.9,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/toronto-waterloo/ ('Toronto-Waterloo') — peer-table self row: VC invested=$2.9B, Tracked startups=3,547; hero: 'Metro area · Canada · Pop. 6.7M · #38 city by EV'",
    "trackedStartups": 3547,
    "pagePopulation": 6700000
   },
   "Singapore": {
    "value": 68.1,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/countries/singapore/ (country page, city-state) — Asia peer-table self row (#5): Combined EV=$321B, EV growth=8.6×, Unicorns=40, VC invested=$4B, Tracked startups=3,951",
    "trackedStartups": 3951,
    "pagePopulation": 5800000
   }
  }
 },
 "CMP-06": {
  "source": "Dealroom.co public city/country startup-ecosystem profile pages (free hub pages), accessed via Internet Archive Save Page Now captures made this session",
  "url": "https://dealroom.co/cities/ (per-hub pages, e.g. https://dealroom.co/cities/london/; Singapore: https://dealroom.co/countries/singapore/)",
  "license": "Proprietary Dealroom.co data shown on free public pages; no explicit reuse license reviewed — cite Dealroom.co. Wayback captures are publicly accessible.",
  "edition": "Live pages as of 2026-07-11 (Save Page Now captures 13:30–13:57 UTC, capture timestamps per city in notes)",
  "retrieved": "2026-07-11",
  "method": "Values read from Internet Archive Save Page Now captures (made 2026-07-11) of Dealroom’s own server-rendered hub pages, then divided by the metro population shown on the same page. per-capita = vcInvestedUsd / pagePopulation.",
  "perCity": {
   "San Francisco": {
    "value": 20260,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/bay-area/ ('Bay Area') — peer-table self row: Combined EV=$20T, 5-yr EV growth=8.0×, Unicorns=841, VC invested=$156B, Tracked startups=24.7K; hero: 'Supercluster",
    "vcInvestedUsd": 156000000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 7700000
   },
   "New York": {
    "value": 1717,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/new-york-city/ — peer-table self row: Combined EV=$1.7T, 5-yr EV growth=5.1×, Unicorns=321, VC invested=$32.8B, Tracked startups=16.6K; hero: 'Metro area · Unite",
    "vcInvestedUsd": 32800000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 19100000
   },
   "London": {
    "value": 1867,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/london/ — peer-table self row: Combined EV=$716B, 5-yr EV growth=5.6×, Unicorns=156, VC invested=$18.3B, Tracked startups=11.4K; hero: 'Metro area · United Kingd",
    "vcInvestedUsd": 18300000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 9800000
   },
   "Paris": {
    "value": 516,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/paris/ — peer-table self row: Combined EV=$287B, 5-yr EV growth=5.8×, Unicorns=54, VC invested=$6.3B, Tracked startups=5,123; hero: 'Metro area · France · Pop. 1",
    "vcInvestedUsd": 6300000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 12200000
   },
   "Berlin": {
    "value": 452,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/berlin-brandenburg/ ('Berlin/Brandenburg') — peer-table self row: Combined EV=$184B, 5-yr EV growth=3.6×, Unicorns=33, VC invested=$2.8B, Tracked startups=3,064;",
    "vcInvestedUsd": 2800000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 6200000
   },
   "Amsterdam": {
    "value": null,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/utrecht/ — 'Top cities in Netherlands' peer-table row #1 'Amsterdam': Combined EV=$257B, 5-yr EV growth=2.7×, Unicorns=25, VC invested=$1.6B, Tracked startups=1,",
    "vcInvestedUsd": 1600000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": null,
    "note": "missing page figure (startup count or population not displayed)"
   },
   "Barcelona": {
    "value": 222,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/barcelona/ — peer-table self row: Combined EV=$40.5B, 5-yr EV growth=4.9×, Unicorns=6, VC invested=$1.2B, Tracked startups=1,538; hero: 'Metro area · Spain · Pop",
    "vcInvestedUsd": 1200000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 5400000
   },
   "Copenhagen": {
    "value": 842,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/copenhagen/ — hero: 'Metro area · Denmark · Pop. 1.9M · #43 city by EV'; meta description: 'Copenhagen startup ecosystem: $125B combined EV, 22 unicorns, 27 thor",
    "vcInvestedUsd": 1600000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 1900000
   },
   "Zurich": {
    "value": 571,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/zurich/ — peer-table self row: Combined EV=$58.3B, 5-yr EV growth=7.9×, Unicorns=16, VC invested=$1.2B, Tracked startups=1,030; hero: 'Metro area · Switzerland ·",
    "vcInvestedUsd": 1200000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 2100000
   },
   "Vienna": {
    "value": 63,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/vienna/ — hero: 'Metro area · Austria · Pop. 2.9M'; meta description: 'Vienna startup ecosystem: $23.2B combined EV, 5 unicorns, 6 thoroughbreds, $181.4M VC inve",
    "vcInvestedUsd": 181400000,
    "vcWindow": "not stated on page",
    "pagePopulation": 2900000
   },
   "Tokyo": {
    "value": 81,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/tokyo/ — peer-table self row: Combined EV=$188B, 5-yr EV growth=5.2×, Unicorns=20, VC invested=$3.3B, Tracked startups=6,034; hero: 'Metro area · Japan · Pop. 40",
    "vcInvestedUsd": 3300000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 40700000
   },
   "Seoul": {
    "value": 258,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/seoul/ — hero: 'Metro area · South Korea · Pop. 26M · #17 city by EV'; meta description: 'Seoul startup ecosystem: $357B combined EV, 41 unicorns, 37 thoroughbre",
    "vcInvestedUsd": 6700000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 26000000
   },
   "Dubai": {
    "value": 661,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/dubai/ — hero: 'Metro area · United Arab Emirates · Pop. 5.6M'; meta description: 'Dubai startup ecosystem: $64.4B combined EV, 17 unicorns, 14 thoroughbreds, $3",
    "vcInvestedUsd": 3700000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 5600000
   },
   "Melbourne": {
    "value": 306,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/melbourne/ — peer-table self row: Combined EV=$63.5B, 5-yr EV growth=5.9×, Unicorns=21, VC invested=$1.5B, Tracked startups=1,339; hero: 'Metro area · Australia ",
    "vcInvestedUsd": 1500000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 4900000
   },
   "Toronto": {
    "value": 433,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/cities/toronto-waterloo/ ('Toronto-Waterloo') — peer-table self row: VC invested=$2.9B, Tracked startups=3,547; hero: 'Metro area · Canada · Pop. 6.7M · #38 city by EV'",
    "vcInvestedUsd": 2900000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 6700000
   },
   "Singapore": {
    "value": 690,
    "year": "2026-07-11 (live db)",
    "source": "dealroom.co/countries/singapore/ (country page, city-state) — Asia peer-table self row (#5): Combined EV=$321B, EV growth=8.6×, Unicorns=40, VC invested=$4B, Tracked startups=3,951",
    "vcInvestedUsd": 4000000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 5800000
   }
  }
 },
 "TAL-01": {
  "source": "OECD Regional education (DSD_REG_EDU@DF_ATTAIN) / data.gov.sg (SingStat) / Dubai Statistics Center yearbook",
  "url": "https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_EDU@DF_ATTAIN,/all?format=csvfilewithlabels",
  "license": "OECD terms (attribution) / Singapore Open Data Licence / DSC official statistics",
  "edition": "OECD pull 2026-07-11 (years 2020-2025 per region); SingStat 2024; DSC yearbook 2023",
  "retrieved": "2026-07-11",
  "method": "OECD: EDUCATION_LEV=ISCED11_5T8, AGE=Y25T64, SEX=_T, latest year per region, finest geography with recent data. Singapore: SingStat \"Tertiary\" series, residents 25+. Dubai: University-and-above count / total population 10+ from DSC yearbook Table 01-07 (computed from official counts).",
  "perCity": {
   "Vienna": {
    "value": 46.3,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, AT13 Vienna (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Vienna city-state (TL2 = city)"
   },
   "Berlin": {
    "value": 48.1,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, DE3 Berlin (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Berlin city-state (TL2 = city)"
   },
   "Copenhagen": {
    "value": 58.2,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, DK01 Capital Region of Denmark (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Capital Region (metro proxy)"
   },
   "Zurich": {
    "value": 56.6,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, CH04 Zurich (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Canton of Zurich"
   },
   "Paris": {
    "value": 58.6,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, FR1 Île-de-France (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Ile-de-France (metro)"
   },
   "London": {
    "value": 74.1,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, UKI Greater London (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Greater London"
   },
   "Amsterdam": {
    "value": 52.2,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, NL32 North Holland (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "North Holland province"
   },
   "Barcelona": {
    "value": 46.9,
    "year": "2025",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, ES51 Catalonia (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Catalonia region"
   },
   "Seoul": {
    "value": 67.3,
    "year": "2020",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, KR011 Seoul (TL3), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Seoul city proper (TL3)"
   },
   "Tokyo": {
    "value": 64.2,
    "year": "2020",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, JPD Southern-Kanto (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Southern-Kanto (greater Tokyo)"
   },
   "Melbourne": {
    "value": 53.5,
    "year": "2021",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, AU2 Victoria (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Victoria STATE proxy (Greater Melbourne TL3 only 2016)"
   },
   "Toronto": {
    "value": 71.0,
    "year": "2024",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, CA35 Ontario (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "Ontario PROVINCE proxy"
   },
   "New York": {
    "value": 53.0,
    "year": "2024",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, US36 New York (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "New York STATE proxy"
   },
   "San Francisco": {
    "value": 46.9,
    "year": "2024",
    "source": "OECD DSD_REG_EDU@DF_ATTAIN, US06 California (TL2), ISCED11_5T8, Y25T64, SEX=_T",
    "note": "California STATE proxy"
   },
   "Singapore": {
    "value": 54.1,
    "year": "2024",
    "source": "data.gov.sg d_7317a32321dbfad2cbb5b60ca74c9f08 (SingStat M850701), DataSeries 'Tertiary', 2024",
    "note": "Residents aged 25 AND OVER (not 25-64); tertiary per SingStat grouping. City-state = city-level."
   },
   "Dubai": {
    "value": 41.0,
    "year": "2023",
    "source": "Dubai Statistics Center, Statistical Yearbook 2023, Table 01-07 Population (10+) by Educational Status: University and Post Graduate 1,302,272 / Total 3,179,347",
    "note": "DIFFERENT BASIS: university degree AND ABOVE only (excludes sub-degree diplomas) as % of population aged 10+ (not 25-64). Computed from official counts. Read with care."
   },
   "Stockholm": {
    "value": 60.0,
    "year": "2025",
    "source": "OECD SE11 Stockholm (TL2)",
    "note": "Stockholm County — county-level"
   },
   "Oslo": {
    "value": 56.5,
    "year": "2025",
    "source": "OECD NO08 Oslo and Viken (TL2)",
    "note": "Broader region proxy (Oslo + former Viken); no Oslo-only unit in this dataflow"
   },
   "Helsinki": {
    "value": 48.1,
    "year": "2025",
    "source": "OECD FI1B Helsinki-Uusimaa (TL2)",
    "note": "Uusimaa region containing Helsinki — region proxy"
   },
   "Madrid": {
    "value": 50.0,
    "year": "2025",
    "source": "OECD ES30 Madrid (TL2)",
    "note": "Comunidad de Madrid — region-level"
   },
   "Milan": {
    "value": 23.6,
    "year": "2025",
    "source": "OECD ITC4 Lombardy (TL2)",
    "note": "Region proxy — Italy has no TL3 in this dataflow; Lombardy is much wider than Milan"
   },
   "Rome": {
    "value": 28.5,
    "year": "2025",
    "source": "OECD ITI4 Lazio (TL2)",
    "note": "Region proxy — Lazio is wider than Rome"
   },
   "Munich": {
    "value": 38.6,
    "year": "2025",
    "source": "OECD DE2 Bavaria (TL2)",
    "note": "State (Land) proxy — no German TL3 in this dataflow"
   },
   "Frankfurt": {
    "value": 35.6,
    "year": "2025",
    "source": "OECD DE7 Hesse (TL2)",
    "note": "State (Land) proxy"
   },
   "Hamburg": {
    "value": 43.0,
    "year": "2025",
    "source": "OECD DE6 Hamburg (TL2)",
    "note": "City-state = city boundary"
   },
   "Brussels": {
    "value": 56.9,
    "year": "2025",
    "source": "OECD BE1 Brussels Capital Region (TL2)",
    "note": "Brussels-Capital Region — city-region"
   },
   "Dublin": {
    "value": 61.0,
    "year": "2021",
    "source": "OECD IE061 Dublin (TL3)",
    "note": "Dublin TL3 (city+county), latest TL3 year 2021; coarser IE06 Eastern & Midland has 2025 (63.0)"
   },
   "Lisbon": {
    "value": 43.3,
    "year": "2025",
    "source": "OECD PT1A Greater Lisbon (TL2)",
    "note": "Grande Lisboa (NUTS2024) — metro-level"
   },
   "Prague": {
    "value": 54.8,
    "year": "2025",
    "source": "OECD CZ01 Prague (TL2)",
    "note": "Praha = city boundary"
   },
   "Warsaw": {
    "value": 65.3,
    "year": "2025",
    "source": "OECD PL91 Warsaw Capital Region (TL2)",
    "note": "Warszawski stoleczny — Warsaw + surrounding metro belt"
   },
   "Istanbul": {
    "value": 31.8,
    "year": "2025",
    "source": "OECD TR10 Istanbul (TL2)",
    "note": "Istanbul province = greater city"
   },
   "Montreal": {
    "value": 59.0,
    "year": "2024",
    "source": "OECD CA24 Quebec (TL2)",
    "note": "Province proxy (v1.0 convention for Canada)"
   },
   "Vancouver": {
    "value": 64.0,
    "year": "2024",
    "source": "OECD CA59 British Columbia (TL2)",
    "note": "Province proxy (v1.0 convention for Canada)"
   },
   "Chicago": {
    "value": 50.9,
    "year": "2024",
    "source": "OECD US17 Illinois (TL2)",
    "note": "State proxy (v1.0 convention for US)"
   },
   "Boston": {
    "value": 58.2,
    "year": "2024",
    "source": "OECD US25 Massachusetts (TL2)",
    "note": "State proxy (v1.0 convention for US)"
   },
   "Los Angeles": {
    "value": 46.9,
    "year": "2024",
    "source": "OECD US06 California (TL2)",
    "note": "State proxy (v1.0 convention for US)"
   },
   "Seattle": {
    "value": 52.9,
    "year": "2024",
    "source": "OECD US53 Washington (TL2)",
    "note": "Washington State proxy (v1.0 convention for US)"
   },
   "Washington DC": {
    "value": 70.7,
    "year": "2024",
    "source": "OECD US11 District of Columbia (TL2)",
    "note": "DC is a TL2 unit = the city itself"
   },
   "Sydney": {
    "value": 52.5,
    "year": "2021",
    "source": "OECD AU1 New South Wales (TL2)",
    "note": "State proxy (v1.0 convention for Australia); Greater Sydney TL3 (AU1GS) exists but latest is 2016 (52.8)"
   },
   "Auckland": {
    "value": 45.5,
    "year": "2020",
    "source": "OECD NZ12 Auckland (TL2)",
    "note": "Auckland region; latest published year 2020"
   },
   "Osaka": {
    "value": 56.9,
    "year": "2020",
    "source": "OECD JPG Kansai region (TL2)",
    "note": "Wide-region proxy: Osaka TL3 (JPG27) rows are all 'Missing value' in OECD; Kansai (Osaka+Kyoto+Hyogo+Shiga+Nara+Wakayama) census-based, decennial — 2020 latest"
   },
   "Tel Aviv": {
    "value": 60.4,
    "year": "2022",
    "source": "OECD IL050 Tel Aviv District (TL3)",
    "note": "Tel Aviv District containing the city — district-level"
   }
  }
 },
 "TAL-02": {
  "source": "QS World University Rankings 2026 — official topuniversities.com rankings JSON endpoint (rankings/endpoint?nid=4061771)",
  "url": "https://www.topuniversities.com/world-university-rankings/2026",
  "license": "Proprietary, © QS Quacquarelli Symonds; publicly viewable ranking data, per-city counts derived from QS's own published city attributions",
  "edition": "QS World University Rankings 2026 (fetched from live QS endpoint 2026-07-11; site's current edition is 2027 nid=4153156, but 2026 nid=4061771 was retrieved directly to match the project's verified mirror)",
  "retrieved": "2026-07-11",
  "method": "Loaded https://www.topuniversities.com/world-university-rankings/2026 in Playwright Chromium (through the agent proxy; required --ssl-version-max=tls1.2 to pass the proxy MITM, plus realistic UA/viewport to clear Cloudflare). Captured the site's own XHR endpoint, then paginated it via same-origin in-page fetch: https://www.topuniversities.com/rankings/endpoint?nid=4061771&page={0..3}&items_per_page=500&tab=indicators — 4 pages, total_record=1504, all saved raw. Parsed rank with regex ^=?(\\d+) from each node's 'rank' field; kept parsed rank <= 500 (exactly 500 institutions, unique ranks 1-500). Counted institutions whose QS 'city' field exactly equals the target label: 'Singapore','Tokyo','Copenhagen','Zürich','Vienna','Seoul','Melbourne','Amsterdam','New York City','Paris','Toronto','Berlin','Barcelona','Dubai','San Francisco'; for London, labels 'London' and 'London,' (QS's trailing-com",
  "perCity": {
   "Singapore": {
    "value": 2,
    "raw": 2,
    "year": "2026",
    "source": "QS city='Singapore'",
    "note": "NUS (8), NTU Singapore (12). Equals country total for Singapore (2)."
   },
   "Tokyo": {
    "value": 4,
    "raw": 4,
    "year": "2026",
    "source": "QS city='Tokyo'",
    "note": "University of Tokyo (37), Tokyo Institute of Technology (85), Waseda (196), Keio (217)."
   },
   "Copenhagen": {
    "value": 1,
    "raw": 1,
    "year": "2026",
    "source": "QS city='Copenhagen'",
    "note": "University of Copenhagen (101). DTU carries QS city 'Kongens Lyngby', not counted."
   },
   "Zurich": {
    "value": 2,
    "raw": 2,
    "year": "2026",
    "source": "QS city='Zürich' (umlaut in source)",
    "note": "ETH Zurich (7), University of Zurich (100)."
   },
   "Vienna": {
    "value": 2,
    "raw": 2,
    "year": "2026",
    "source": "QS city='Vienna'",
    "note": "University of Vienna (152), TU Wien (197)."
   },
   "Seoul": {
    "value": 8,
    "raw": 8,
    "year": "2026",
    "source": "QS city='Seoul'",
    "note": "SNU (39), Yonsei (50), Korea Univ (61), SKKU (126), Hanyang (159), Kyung Hee (331), Sejong (392), Chung-Ang (479). KAIST is QS city 'Daejeon', not counted."
   },
   "Melbourne": {
    "value": 6,
    "raw": 6,
    "year": "2026",
    "source": "QS city='Melbourne'",
    "note": "Univ of Melbourne (19), Monash (36), RMIT (125), Deakin (207), La Trobe (233), Swinburne (295). Deakin/La Trobe are QS's own 'Melbourne' attributions."
   },
   "Amsterdam": {
    "value": 2,
    "raw": 2,
    "year": "2026",
    "source": "QS city='Amsterdam'",
    "note": "University of Amsterdam (53), Vrije Universiteit Amsterdam (195)."
   },
   "London": {
    "value": 9,
    "raw": 9,
    "year": "2026",
    "source": "QS city='London' or 'London,' with country=United Kingdom",
    "note": "Imperial (2), UCL (9), KCL (31), LSE (56), Queen Mary (110, QS label 'London,'), City St George's (310), Brunel (385), Birkbeck (389), Royal Holloway (463). Western University (Canada, QS city 'London') excluded."
   },
   "New York": {
    "value": 2,
    "raw": 2,
    "year": "2026",
    "source": "QS city='New York City'",
    "note": "Columbia (38), NYU (55). QS uses label 'New York City'; no plain 'New York' label exists in top 500."
   },
   "Paris": {
    "value": 7,
    "raw": 7,
    "year": "2026",
    "source": "QS city='Paris'",
    "note": "PSL (28), Institut Polytechnique de Paris (41), Paris-Saclay (71), Sorbonne (73), Paris 1 Panthéon-Sorbonne (258), Université Paris Cité (300), Sciences Po (368). IP Paris and Paris-Saclay are QS's own 'Paris' attributio"
   },
   "Toronto": {
    "value": 2,
    "raw": 2,
    "year": "2026",
    "source": "QS city='Toronto'",
    "note": "University of Toronto (29), York University (333)."
   },
   "Berlin": {
    "value": 3,
    "raw": 3,
    "year": "2026",
    "source": "QS city='Berlin'",
    "note": "Freie Universitaet Berlin (89), Humboldt (130), TU Berlin (145)."
   },
   "Barcelona": {
    "value": 5,
    "raw": 5,
    "year": "2026",
    "source": "QS city='Barcelona'",
    "note": "Universitat de Barcelona (160), UAB (172), Pompeu Fabra (266), UPC BarcelonaTech (394), Ramon Llull (437)."
   },
   "Dubai": {
    "value": 0,
    "raw": 0,
    "year": "2026",
    "source": "QS city='Dubai' (no matches)",
    "note": "Verified true zero: all 6 UAE top-500 entries are elsewhere — Khalifa (177, Abu Dhabi), UAEU (229, Al Ain), AUS (272, Sharjah), Univ of Sharjah (330, Sharjah), Abu Dhabi Univ (391, city=null in QS data), Ajman Univ (440,"
   },
   "San Francisco": {
    "value": 0,
    "raw": 0,
    "year": "2026",
    "source": "QS city='San Francisco' (no matches)",
    "note": "True zero per city-proper rule: no top-500 entry carries QS city 'San Francisco'. Stanford (QS city 'Stanford') and UC Berkeley (QS city 'Berkeley') are separate QS cities and excluded."
   }
  }
 },
 "TAL-06": {
  "source": "Multi-source stitch — lead: OECD 'Foreign-born population - Cities and FUAs' (OECD.CFE.EDS DSD_FUA_DEMO@DF_ORIGIN v1.2, gives shares directly as % of population); plus UN DESA International Migrant Stock 2024 (Singapore), US Census ACS 2024 1-year B05012 (NY, SF), ONS Census 2021 TS004 via Nomis (London), Statistics Canada Census 2021 Profile SDMX (Toronto), ABS Census 2021 General Community Profile G01 (Melbourne), Stadt Wien MA23/Statistik Austria table 5.2.6 (Vienna), Tokyo Metropolitan Government registration statistics (Tokyo), Korea MOIS 2024 Foreign Residents of Local Governments press release (Seoul)",
  "url": "https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_FUA_DEMO@DF_ORIGIN,1.2/all",
  "license": "Mixed open licenses: OECD terms of use; UN CC BY 3.0 IGO; US Census public domain; UK OGL v3 (ONS/Nomis); Statistics Canada Open Licence; ABS CC BY 4.0; Stadt Wien OGD CC BY 4.0; Tokyo Metropolitan Government open data terms; Korea MOIS public release (KOGL)",
  "edition": "All fetched 2026-07-11; reference years per city 2021-2026 (see perCity)",
  "retrieved": "2026-07-11",
  "method": "1) OECD SDMX: fetched full DSD_FUA_DEMO@DF_ORIGIN v1.2 dataset as CSV (62,702 rows) and structure XML. Filtered ORIGIN=FB (Foreign-born), UNIT_MEASURE=PT_POP (Percentage of population), AGE=_T, SEX=_T; took latest TIME_PERIOD at TERRITORIAL_LEVEL=CITY for Amsterdam (NL001C), Barcelona (ES002C), Berlin (DE001C), Copenhagen (DK001C), Paris (FR001C), Zurich (CH002C) — shares used verbatim, no arithmetic. FUA-level values recorded in notes. 2) US: data.census.gov table API (api.census.gov keyless was blocked, redirects to missing_key) ACSDT1Y2024.B05012 for MSAs 35620 and 41860; share = B05012_003E / B05012_001E * 100. 3) London: Nomis NM_2024_1 (Census 2021 TS004) geography E12000007; non-UK-born = Total (8,799,726) - 'Europe: United Kingdom' (5,223,986) = 3,575,740; share = 3,575,740/8,799,726. 4) Toronto: StatCan census profile SDMX DF_CMACA, DGUID 2021S0503535, characteristics 1513 (tota",
  "perCity": {
   "Singapore": {
    "value": 48.7,
    "raw": 48.72,
    "year": "2024",
    "source": "UN DESA International Migrant Stock 2024, destination workbook Table 3 ('International migrant stock as a percentage of the total population'), row 'Singapore' (location code 702, data type B), both s",
    "note": "CONCEPT: international migrant stock as % of total population, derived from foreign-born data (workbook data-type legend: B = estimates derived from foreign-born population). Country level, but Singapore is a city-state."
   },
   "Tokyo": {
    "value": 5.6,
    "raw": 5.57,
    "year": "2026",
    "source": "TMG 外国人人口 table 1 (ga26ev0100.csv), 地域コード 13000 総数 = 783,701 (Jan 1, 2026); TMG 住民基本台帳による世帯と人口 (jm261v0000_1.csv), 13000 人口総数(日本人+外国人) = 14,077,552 (Jan 1, 2026). 783,701/14,077,552 = 5.567%",
    "note": "CONCEPT: foreign nationals (registered residents under Basic Resident Registration), NOT foreign-born. Geography: Tokyo Metropolis (Tokyo-to, prefecture incl. 23 wards + Tama + islands). Numerator and denominator from th"
   },
   "Copenhagen": {
    "value": 26.7,
    "raw": 26.7,
    "year": "2025",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2: REF_AREA=DK001C (København), TERRITORIAL_LEVEL=CITY, ORIGIN=FB, UNIT=PT_POP, 2025 = 26.7",
    "note": "CONCEPT: foreign-born share, published directly as % of population by OECD. FUA (DK001F) 2025 = 22.0 also available. City = OECD 'city' boundary for København."
   },
   "Zurich": {
    "value": 44.0,
    "raw": 44,
    "year": "2024",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2: REF_AREA=CH002C (Zurich), TERRITORIAL_LEVEL=CITY, ORIGIN=FB, UNIT=PT_POP, 2024 = 44.0",
    "note": "CONCEPT: foreign-born share. FUA (CH002F) 2024 = 35.6 also available."
   },
   "Vienna": {
    "value": 40.9,
    "raw": 40.91,
    "year": "2025",
    "source": "Stadt Wien MA23 open-data table 5.2.6 'Bevölkerung nach Geburtsland' (source Statistik Austria), Stichtag 1.1.2025: Wien total 2,028,289; Geburtsland 'Fremde Insgesamt' (born abroad) 829,778. 829,778/",
    "note": "CONCEPT: foreign-born (country of birth abroad). City of Vienna (= Bundesland Wien). OECD DF_ORIGIN had no usable total-FB row for AT001 (only FB_EU 31.2 + FB_NONEU 46.1 for 2021, which cannot both be % of total populati"
   },
   "Seoul": {
    "value": 3.9,
    "raw": 3.93,
    "year": "2024",
    "source": "Korea MOIS '2024 지방자치단체 외국인주민 현황' press-release statistical table (PDF p.7, basis 2024-11-01 register-based census): Seoul 총인구 9,335,444; 한국국적을 가지지 아니한 자 (foreign nationals) 소계 367,291. 367,291/9,335,",
    "note": "CONCEPT: foreign nationals residing in Seoul (register-based census count of persons without Korean nationality), NOT foreign-born; excludes naturalized citizens (47,124) and Korean-born children of foreign residents (36"
   },
   "Melbourne": {
    "value": 35.7,
    "raw": 35.7,
    "year": "2021",
    "source": "ABS Census 2021 General Community Profile GCP_2GMEL.xlsx, sheet G01 'Selected person characteristics by sex', Greater Melbourne (GCCSA 2GMEL): Birthplace: Elsewhere = 1,755,627; Total persons = 4,917,",
    "note": "CONCEPT: born overseas ('Birthplace: Elsewhere'). Denominator = total persons including birthplace not stated (~4.4%), so this understates the share among stated responses (37.3%). OECD AUS02C ('Greater Melbourne', CITY "
   },
   "Amsterdam": {
    "value": 37.6,
    "raw": 37.6,
    "year": "2025",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2: REF_AREA=NL001C (Amsterdam), TERRITORIAL_LEVEL=CITY, ORIGIN=FB, UNIT=PT_POP, 2025 = 37.6",
    "note": "CONCEPT: foreign-born share. FUA (NL001F) 2025 = 24.7 also available."
   },
   "London": {
    "value": 40.6,
    "raw": 40.63,
    "year": "2021",
    "source": "ONS Census 2021 table TS004 (Country of birth) via Nomis dataset NM_2024_1, geography E12000007 (London region = Greater London): Total usual residents 8,799,726; 'Europe: United Kingdom' 5,223,986; n",
    "note": "CONCEPT: born outside the UK, census usual residents. Geography: Greater London (region). OECD UK001C (CITY) 2021 = 35.4 (APS-based, lower) — ONS census used per task instruction."
   },
   "New York": {
    "value": 30.8,
    "raw": 30.81,
    "year": "2024",
    "source": "US Census Bureau ACS 2024 1-year, table B05012, New York-Newark-Jersey City, NY-NJ Metro Area (MSA 35620, GEO_ID 310M700US35620): B05012_003E (foreign-born) 6,143,359 / B05012_001E (total) 19,940,274 ",
    "note": "CONCEPT: foreign-born. Geography: metropolitan statistical area (Metro level). Fetched via data.census.gov table API because api.census.gov now requires an API key. OECD USA01 2023: CITY 30.5 / FUA 29.2 (cross-check, con"
   },
   "Paris": {
    "value": 22.7,
    "raw": 22.7,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2: REF_AREA=FR001C (Paris), TERRITORIAL_LEVEL=CITY, ORIGIN=FB, UNIT=PT_POP, 2022 = 22.7",
    "note": "CONCEPT: foreign-born share. FUA (FR001F, ~Île-de-France functional area) 2022 = 20.3 also available."
   },
   "Toronto": {
    "value": 46.6,
    "raw": 46.6,
    "year": "2021",
    "source": "Statistics Canada Census 2021 Profile SDMX (STC_CP,DF_CMACA), DGUID 2021S0503535 (Toronto CMA): characteristic 1515 'Immigrants' 2,862,850 / characteristic 1513 'Total - Immigrant status...' 6,142,880",
    "note": "CONCEPT: 'immigrants' (foreign-born landed immigrants/permanent residents), population in private households, 25% sample data. EXCLUDES non-permanent residents (249,980 = 4.1%), who are also foreign-born — so total forei"
   },
   "Berlin": {
    "value": 24.9,
    "raw": 24.9,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2: REF_AREA=DE001C (Berlin), TERRITORIAL_LEVEL=CITY, ORIGIN=FB, UNIT=PT_POP, 2022 = 24.9",
    "note": "CONCEPT: foreign-born share. Only 2021-2022 available for Germany. FUA (DE001F) 2022 = 20.5 also available."
   },
   "Barcelona": {
    "value": 27.3,
    "raw": 27.3,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2: REF_AREA=ES002C (Barcelona), TERRITORIAL_LEVEL=CITY, ORIGIN=FB, UNIT=PT_POP, 2022 = 27.3",
    "note": "CONCEPT: foreign-born share. FUA (ES002F) 2022 = 21.2 also available."
   },
   "Dubai": {
    "value": null,
    "year": "n/a",
    "note": "Null per task instruction: no official foreign-born statistic is published for Dubai; the Emirati/non-Emirati nationality split is a different concept and was not used."
   },
   "San Francisco": {
    "value": 32.4,
    "raw": 32.4,
    "year": "2024",
    "source": "US Census Bureau ACS 2024 1-year, table B05012, San Francisco-Oakland-Fremont, CA Metro Area (MSA 41860, GEO_ID 310M700US41860): B05012_003E (foreign-born) 1,506,259 / B05012_001E (total) 4,648,486 = ",
    "note": "CONCEPT: foreign-born. Geography: metropolitan statistical area (Metro level; 2023 OMB delineation 'SF-Oakland-Fremont'). OECD USA05 2023: CITY 34.9 / FUA 34.2 — difference reflects boundary/vintage, ACS 2024 MSA used pe"
   }
  }
 },
 "CON-03": {
  "source": "ITDP Atlas of Sustainable City Transport — People Near Frequent Transport (pnft), all-cities agglomeration CSV downloaded via the in-app Download button",
  "url": "https://atlas.itdp.org",
  "license": "Open Database License (ODbL) 1.0 for the database; Database Contents License (DbCL) 1.0 for contents — stated in the app's About > Data & Algorithms tab (evidence: 30_about_full.txt)",
  "edition": "In-app CSV atlas_cities_pnft.csv downloaded 2026-07-11; contains columns transit_pnft_2023 / _2024 / _2025 for 1,117 GHSL agglomerations; latest non-null column (2025 for all cities with data) used",
  "retrieved": "2026-07-11",
  "method": "Playwright (Chromium 141 at /opt/pw-browsers/chromium, headless, routed through the local agent proxy with --ssl-version-max=tls1.2 because the proxy resets Chromium's TLS1.3/ML-KEM ClientHello; certificate verification stayed on). Opened https://atlas.itdp.org, dismissed the intro modal, selected indicator 'People Near Frequent Transport' (internal id pnft) in the #indicator selectpicker, opened the Download dropdown and clicked the cities 'data table (.csv)' shiny-download-link (session/<id>/download/downloadData_cities_csv) via expect_download; the server-suggested filename was atlas_cities_pnft.csv (1,117 agglomeration rows; columns hdc, country, name, transit_pnft_2023/2024/2025 + pnftpoints). For each of the 16 index cities: matched the GHSL agglomeration row by name substring (candidates listed first; excluded Barcelona/Venezuela hdc=04175 and Maracaibo/'San Francisco'/Venezuela h",
  "perCity": {
   "Singapore": {
    "value": 28.0,
    "raw": 27.98,
    "year": "2025",
    "source": "hdc=00178, name='The Singapore area', Singapore, column transit_pnft_2025=0.279773231110237",
    "note": "App cross-check 2024: '28% of people'. Stable across 2023-2025 (0.278-0.280)."
   },
   "Tokyo": {
    "value": null,
    "year": "2025",
    "note": "DATA ARTIFACT - RECOMMEND TREATING AS NULL. Published value is near-zero because open GTFS for Japan is essentially absent from the Mobility Database the Atlas ingests: 2023=0.0, 2024=0.0 (app text for 2024: 'there were "
   },
   "Copenhagen": {
    "value": 74.5,
    "raw": 74.52,
    "year": "2025",
    "source": "hdc=00698, name='The Copenhagen area', Denmark, column transit_pnft_2025=0.745156430109699"
   },
   "Zurich": {
    "value": null,
    "year": "2025",
    "note": "DATA ARTIFACT - RECOMMEND TREATING AS NULL. All years 2023-2025 = 0.0; in-app text confirms 'there were 0 transit stops... 0% of people' (2024). Swiss GTFS evidently not ingested by the Atlas pipeline; a real 0% for Zuri"
   },
   "Vienna": {
    "value": 86.7,
    "raw": 86.73,
    "year": "2025",
    "source": "hdc=01081, name='The Vienna area', Austria, column transit_pnft_2025=0.867320065030927",
    "note": "Highest of the 16; consistent 0.868-0.876 across 2023-2025."
   },
   "Seoul": {
    "value": null,
    "year": "n/a",
    "note": "Null as expected: row exists but all year columns are NA (no open GTFS for Korea in the Mobility Database). In-app the city option exists but shows no PNFT value (click on the option timed out, consistent with a disabled"
   },
   "Melbourne": {
    "value": null,
    "year": "2025",
    "note": "DATA ARTIFACT - RECOMMEND TREATING AS NULL. All years 0.0; app text confirms '0 transit stops... 0% of people' (2024) despite Victoria publishing GTFS. Feed-ingestion artifact, not a measurement."
   },
   "Amsterdam": {
    "value": null,
    "year": "2025",
    "note": "DATA ARTIFACT - RECOMMEND TREATING AS NULL. All years 0.0; app confirms 'In 2024, 0% of people' for The Amsterdam area (screenshot 21_city_Amsterdam.png). NL open transit data exists, so this is a pipeline/coverage artif"
   },
   "London": {
    "value": null,
    "year": "2025",
    "note": "DATA ARTIFACT - RECOMMEND TREATING AS NULL. 2023=16.03%, 2024=0.04%, 2025=0.11%; app text for 2024: 'there were 2 transit stops... 0% of people'. Even the 2023 figure is implausibly low for London (TfL 6-min headway netw"
   },
   "New York": {
    "value": 61.6,
    "raw": 61.58,
    "year": "2025",
    "source": "hdc=08099, name='The New York / Newark / Jersey City area', United States, column transit_pnft_2025=0.615828599456679"
   },
   "Paris": {
    "value": 83.0,
    "raw": 83,
    "year": "2025",
    "source": "hdc=02878, name='The Paris / Argenteuil / Saint-Denis area', France, column transit_pnft_2025=0.830012787812135",
    "note": "Scale anchor: app displays '84% of people' for 2024 (CSV 0.837176), confirming CSV values are 0-1 shares."
   },
   "Toronto": {
    "value": 55.7,
    "raw": 55.68,
    "year": "2025",
    "source": "hdc=02869, name='The Toronto / Mississauga / Brampton area', Canada, column transit_pnft_2025=0.556778206351584",
    "note": "2024 dipped to 0.511 then recovered to 0.557 in 2025."
   },
   "Berlin": {
    "value": 70.5,
    "raw": 70.54,
    "year": "2025",
    "source": "hdc=05483, name='The Berlin area', Germany, column transit_pnft_2025=0.705375878587089",
    "note": "Declining series 2023-2025 (0.794 -> 0.720 -> 0.705)."
   },
   "Barcelona": {
    "value": 66.9,
    "raw": 66.91,
    "year": "2025",
    "source": "hdc=05071, name=\"The Barcelona / l'Hospitalet de Llobregat area\", Spain, column transit_pnft_2025=0.669096433544622",
    "note": "Matched the Spain row; a second 'Barcelona / Puerto La Cruz / Lecheria' row (Venezuela, hdc=04175, all NA) was excluded."
   },
   "Dubai": {
    "value": 24.8,
    "raw": 24.79,
    "year": "2025",
    "source": "hdc=01007, name='The Dubai / Sharjah / Ajman area', United Arab Emirates, column transit_pnft_2025=0.24793747679618",
    "note": "Values almost flat 2023-2025 (0.2498 -> 0.2489 -> 0.2479), consistent with the task briefing's warning that the RTA GTFS feed is stale (staleness itself not independently verifiable from the Atlas UI this session — treat"
   },
   "San Francisco": {
    "value": 29.6,
    "raw": 29.59,
    "year": "2025",
    "source": "hdc=01461, name='The San Jose / San Francisco / Oakland area', United States, column transit_pnft_2025=0.295899140902484",
    "note": "Agglomeration merges San Jose, San Francisco and Oakland; the share is diluted by lower-frequency South Bay areas, so it understates SF proper."
   }
  }
 },
 "CON-05": {
  "source": "TomTom Traffic Index — Ranking",
  "url": "https://www.tomtom.com/traffic-index/ranking/",
  "license": "Proprietary TomTom data, publicly published free of charge on tomtom.com; cite with attribution to TomTom Traffic Index (no open-data license)",
  "edition": "TomTom Traffic Index 2026 edition (site label: 'Ranking 2025'), full-year 2025 data; page fetched 2026-07-11",
  "retrieved": "2026-07-11",
  "method": "curl-fetched the ranking page HTML (HTTP 200). The site is Astro: the complete ranking dataset is embedded in the HTML as serialized props on the RankingComponent astro-island (component-url /_astro/Ranking.B7ZbRa4G.js). HTML-unescaped the props attribute, JSON-parsed it, and recursively decoded Astro's [type, value] tuple encoding (0=scalar, 1=array). This yields rankingData.center (492 cities, the default 'City' tab) and rankingData.metro (492, the 'Metro' tab). Verified against the fetched JS bundles that field 'c' is rendered as the 'Average congestion' column with '%' suffix, and constants.js sets the edition year R=2025 ('Ranking 2025', delta column = 'Change from 2024'). Took each target city's 'c' value from the CITY (center) list only — never the metro list — matching by key: singapore, tokyo, copenhagen, zurich, vienna, melbourne, amsterdam, london (UK, not london-ontario), new",
  "perCity": {
   "Singapore": {
    "value": 43.9,
    "raw": 43.9,
    "year": "2025",
    "source": "Singapore, SG (key: singapore, City tab, rank 162)",
    "note": "Average congestion, city-center definition"
   },
   "Tokyo": {
    "value": 44.1,
    "raw": 44.1,
    "year": "2025",
    "source": "Tokyo, JP (key: tokyo, City tab, rank 160)",
    "note": "Average congestion, city-center definition"
   },
   "Copenhagen": {
    "value": 40.2,
    "raw": 40.2,
    "year": "2025",
    "source": "Copenhagen, DK (key: copenhagen, City tab, rank 229)",
    "note": "Average congestion, city-center definition"
   },
   "Zurich": {
    "value": 48.9,
    "raw": 48.9,
    "year": "2025",
    "source": "Zurich, CH (key: zurich, City tab, rank 101)",
    "note": "Average congestion, city-center definition"
   },
   "Vienna": {
    "value": 48.6,
    "raw": 48.6,
    "year": "2025",
    "source": "Vienna, AT (key: vienna, City tab, rank 104)",
    "note": "Average congestion, city-center definition"
   },
   "Seoul": {
    "value": null,
    "year": "2025",
    "note": "Confirmed absent: no Seoul entry and no South Korea (KR) entries at all in either the City or Metro lists of the TomTom Traffic Index (Japan is covered; South Korea is not)"
   },
   "Melbourne": {
    "value": 52.9,
    "raw": 52.9,
    "year": "2025",
    "source": "Melbourne, AU (key: melbourne, City tab, rank 64)",
    "note": "Average congestion, city-center definition"
   },
   "Amsterdam": {
    "value": 45.7,
    "raw": 45.7,
    "year": "2025",
    "source": "Amsterdam, NL (key: amsterdam, City tab, rank 139)",
    "note": "Average congestion, city-center definition"
   },
   "London": {
    "value": 51.6,
    "raw": 51.6,
    "year": "2025",
    "source": "London, UK (key: london, City tab, rank 75)",
    "note": "UK London taken; a separate 'London, CA' (Ontario, key london-ontario) also exists and was excluded"
   },
   "New York": {
    "value": 48.8,
    "raw": 48.8,
    "year": "2025",
    "source": "New York, NY, US (key: new-york-ny, City tab, rank 102)",
    "note": "Average congestion, city-center definition"
   },
   "Paris": {
    "value": 40.0,
    "raw": 40,
    "year": "2025",
    "source": "Paris, FR (key: paris, City tab, rank 231)",
    "note": "Value is exactly 40 (site renders '40%'); population field (9,904,000) suggests a wide Paris region delineation, but this is the City-tab entry"
   },
   "Toronto": {
    "value": 47.7,
    "raw": 47.7,
    "year": "2025",
    "source": "Toronto, CA (key: toronto, City tab, rank 113)",
    "note": "Average congestion, city-center definition"
   },
   "Berlin": {
    "value": 44.6,
    "raw": 44.6,
    "year": "2025",
    "source": "Berlin, DE (key: berlin, City tab, rank 155)",
    "note": "Average congestion, city-center definition"
   },
   "Barcelona": {
    "value": 41.1,
    "raw": 41.1,
    "year": "2025",
    "source": "Barcelona, ES (key: barcelona, City tab, rank 209)",
    "note": "Average congestion, city-center definition"
   },
   "Dubai": {
    "value": 42.7,
    "raw": 42.7,
    "year": "2025",
    "source": "Dubai, AE (key: dubai, City tab, rank 184)",
    "note": "Average congestion, city-center definition"
   },
   "San Francisco": {
    "value": 49.7,
    "raw": 49.7,
    "year": "2025",
    "source": "San Francisco, CA, US (key: san-francisco-ca, City tab, rank 89)",
    "note": "Average congestion, city-center definition"
   }
  }
 },
 "CON-01": {
  "source": "English Wikipedia per-airport \"Airlines and destinations\" tables (passenger sections only)",
  "url": "https://en.wikipedia.org/wiki/ (26 airport articles; raw HTML + per-city destination lists archived in session evidence)",
  "license": "CC BY-SA 4.0 (Wikipedia)",
  "edition": "live tables as of 2026-07-12",
  "retrieved": "2026-07-12",
  "method": "Per airport: parse passenger destination table; include year-round, seasonal and announced routes; exclude charter-only and cargo. Per city: union of INTERNATIONAL (non-domestic) destinations across its airports, deduplicated by wikilink target/normalized name. Counted by 4 parallel agents with a shared rule set; judgment calls recorded per city.",
  "perCity": {
   "Singapore": {
    "value": 175,
    "year": "2026-07-12",
    "airports": "SIN"
   },
   "Tokyo": {
    "value": null,
    "year": "n/a",
    "airports": "HND+NRT",
    "note": "NULL: Haneda's Wikipedia table is known-pruned by citation cleanup (ANA shows only 28 destinations; Sapporo/London/Bangkok missing) — the counted 117 would be a material undercount, not comparable."
   },
   "Copenhagen": {
    "value": 192,
    "year": "2026-07-12",
    "airports": "CPH"
   },
   "Zurich": {
    "value": 224,
    "year": "2026-07-12",
    "airports": "ZRH"
   },
   "Vienna": {
    "value": 204,
    "year": "2026-07-12",
    "airports": "VIE",
    "note": "One suspended entry (Tehran) kept as listed."
   },
   "Seoul": {
    "value": 142,
    "year": "2026-07-12",
    "airports": "ICN+GMP"
   },
   "Melbourne": {
    "value": 40,
    "year": "2026-07-12",
    "airports": "MEL"
   },
   "Amsterdam": {
    "value": 285,
    "year": "2026-07-12",
    "airports": "AMS",
    "note": "Dutch Caribbean (Aruba, Bonaire, Curacao, Sint Maarten) counted domestic by analogy with the Greenland rule; 289 if counted international."
   },
   "London": {
    "value": 411,
    "year": "2026-07-12",
    "airports": "LHR+LGW+STN+LTN+LCY"
   },
   "New York": {
    "value": 153,
    "year": "2026-07-12",
    "airports": "JFK+EWR+LGA",
    "note": "Adjusted from raw string-union 154: \"Delhi\" and \"Delhi-Gandhi\" are the same airport (Wikidata Q821275), merged for consistency with the link-target dedup used for other cities."
   },
   "Paris": {
    "value": 305,
    "year": "2026-07-12",
    "airports": "CDG+ORY",
    "note": "Basel/Mulhouse (EuroAirport, on French soil) counted domestic; French overseas territories domestic."
   },
   "Toronto": {
    "value": 172,
    "year": "2026-07-12",
    "airports": "YYZ"
   },
   "Berlin": {
    "value": 161,
    "year": "2026-07-12",
    "airports": "BER"
   },
   "Barcelona": {
    "value": 202,
    "year": "2026-07-12",
    "airports": "BCN"
   },
   "Dubai": {
    "value": 310,
    "year": "2026-07-12",
    "airports": "DXB+DWC",
    "note": "Includes 12 destinations with suspended-only service as listed (298 excluding them)."
   },
   "San Francisco": {
    "value": 60,
    "year": "2026-07-12",
    "airports": "SFO",
    "note": "US territories (San Juan etc.) counted domestic."
   }
  }
 }
}
};
