// City Index — data file. Edit values here; the app reads this.
// Values are real & sourced where 'provenance' has an entry for the measure;
// all other values are ILLUSTRATIVE placeholders awaiting replacement.
// A null is honest missing data — never fill it with a guess (see CLAUDE.md).
window.INDEX_DATA = {
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
{"id": "LIV-04", "domain": "Liveable", "subtheme": "Health", "name": "Life expectancy", "measures": "Average life expectancy at birth", "unit": "years", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regions / SingStat / World Bank", "appearsIn": "GPCI (Livability)", "pilot": 1, "caveat": "OECD regional data at the finest level published: city/metro for most, but state or province values for New York (NY State), San Francisco (California), Toronto (Ontario) and Amsterdam (North Holland); Dubai is a UAE national figure (country proxy). Years mix 2020-2025 — the US and Tokyo values are 2020, depressed by COVID.", "contestable": 0, "approx": "none"},
{"id": "LIV-05", "domain": "Liveable", "subtheme": "Health", "name": "Physicians per capita", "measures": "Doctors per 1,000 residents", "unit": "per 1k", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regional health / data.gov.sg / DHA", "appearsIn": "EIU (Healthcare)", "pilot": 1, "caveat": "OECD regional physician density: province/state values for Amsterdam (N-Holland), Toronto (Ontario), New York (NY State), San Francisco (California), Barcelona (Catalonia); Paris is the dense core departement and reads high. Berlin is 2019 vintage. London blank (OECD series ends 2016; NHS fallback pending). Singapore from MOH via data.gov.sg; Dubai from DHA statistical book 2022.", "contestable": 0, "approx": "none"},
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
{"id": "CMP-01", "domain": "Competitive", "subtheme": "Economic Output", "name": "GDP per capita", "measures": "Metro GDP / population", "unit": "USD PPP", "direction": "higher", "dataLevel": "Metro", "source": "OECD Metro (FUA) / World Bank", "appearsIn": "GPCI (Economy)", "pilot": 1, "caveat": "OECD metropolitan (FUA) GDP per head in constant-2015-PPP USD; years 2020-2023 (London, Melbourne and Toronto are 2020 COVID-dip values, the latter two from an archived vintage). Singapore is a national World Bank figure on a 2021 PPP base — close but not identical basis. Dubai: no free PPP metro figure exists (blank).", "contestable": 0, "approx": "none"},
{"id": "CMP-02", "domain": "Competitive", "subtheme": "Economic Output", "name": "Labour productivity", "measures": "Gross value added per worker", "unit": "USD", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-03", "domain": "Competitive", "subtheme": "Business Environment", "name": "Global firm presence", "measures": "Number of major global-firm HQs", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "GPCI / Fortune", "appearsIn": "GPCI (Economy)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-04", "domain": "Competitive", "subtheme": "Business Environment", "name": "Startup density", "measures": "Dealroom-tracked startups per 100,000 metro residents", "unit": "per 100k", "direction": "higher", "dataLevel": "Metro", "source": "Dealroom (public hub pages)", "appearsIn": "GPCI-Startup", "pilot": 1, "caveat": "Dealroom \"tracked startups\" per hub / page-shown metro population (captured 11 Jul 2026). Hubs are metros: SF = Bay Area, Toronto = Toronto-Waterloo, Berlin = Berlin/Brandenburg. Copenhagen, Vienna, Seoul, Dubai show no count and Amsterdam no population (blank). Database coverage varies by region — deepest in Europe/US.", "contestable": 0, "approx": "modelled"},
{"id": "CMP-05", "domain": "Competitive", "subtheme": "Dynamism", "name": "Employment growth", "measures": "5-year change in metro employment", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-06", "domain": "Competitive", "subtheme": "Dynamism", "name": "VC funding", "measures": "Dealroom \"VC invested\" per resident (metro hub)", "unit": "USD", "direction": "higher", "dataLevel": "Metro", "source": "Dealroom (public hub pages)", "appearsIn": "Startup Genome", "pilot": 1, "caveat": "Dealroom hub \"VC invested\" / page-shown metro population (captured 11 Jul 2026). The source page does not state the time window of \"VC invested\" — compare across cities, not against external annual figures. Amsterdam blank (no population shown).", "contestable": 0, "approx": "none"},
{"id": "TAL-01", "domain": "Talent", "subtheme": "Education", "name": "Tertiary attainment", "measures": "% of adults with tertiary education", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD / Eurostat", "appearsIn": "—", "pilot": 1, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "TAL-02", "domain": "Talent", "subtheme": "Education", "name": "Top universities", "measures": "Universities in the global top 500", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "QS / THE rankings", "appearsIn": "GPCI (R&D)", "pilot": 1, "caveat": "Easy to source.", "contestable": 0, "approx": "none"},
{"id": "TAL-03", "domain": "Talent", "subtheme": "Skills & Workforce", "name": "Knowledge workers", "measures": "% employed in knowledge-intensive jobs", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "Eurostat / OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "TAL-04", "domain": "Talent", "subtheme": "Skills & Workforce", "name": "Researchers per capita", "measures": "R&D personnel per 1,000", "unit": "per 1k", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "GPCI (R&D)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "TAL-05", "domain": "Talent", "subtheme": "Attractiveness", "name": "Talent inflow", "measures": "Net migration of working-age people", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "National statistics", "appearsIn": "—", "pilot": 0, "caveat": "Hard to standardise across countries.", "contestable": 0, "approx": "none"},
{"id": "TAL-06", "domain": "Talent", "subtheme": "Attractiveness", "name": "International openness", "measures": "Foreign-born population share", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "GPCI", "pilot": 1, "caveat": "A proxy for openness — contestable as 'better'.", "contestable": 1, "approx": "none"},
{"id": "CON-01", "domain": "Connected", "subtheme": "Global Connectivity", "name": "Airport connectivity", "measures": "Direct international destinations served", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "OAG / GPCI", "appearsIn": "GPCI (Accessibility)", "pilot": 1, "caveat": "Well covered.", "contestable": 0, "approx": "none"},
{"id": "CON-02", "domain": "Connected", "subtheme": "Global Connectivity", "name": "Global accessibility", "measures": "Travel time to major world hubs", "unit": "hours", "direction": "lower", "dataLevel": "City", "source": "GPCI", "appearsIn": "GPCI (Accessibility)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CON-03", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Transit access", "measures": "% residents near frequent public transit", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "UITP / WCCD", "appearsIn": "—", "pilot": 1, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CON-04", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Commute time", "measures": "Average one-way commute", "unit": "minutes", "direction": "lower", "dataLevel": "City", "source": "Numbeo / Moovit", "appearsIn": "—", "pilot": 0, "caveat": "Crowd-sourced component.", "contestable": 0, "approx": "crowd"},
{"id": "CON-05", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Traffic congestion", "measures": "Extra travel time caused by congestion", "unit": "%", "direction": "lower", "dataLevel": "City", "source": "TomTom Traffic Index", "appearsIn": "—", "pilot": 1, "caveat": "Great free annual data.", "contestable": 0, "approx": "none"}
],
"cities":["Singapore", "Tokyo", "Copenhagen", "Zurich", "Vienna", "Seoul", "Melbourne", "Amsterdam", "London", "New York", "Paris", "Toronto", "Berlin", "Barcelona", "Dubai", "San Francisco"],
"data":{
"Singapore":{"LIV-01": 0.07, "LIV-04": 83.9, "LIV-05": 2.9, "LIV-06": 24.7, "GRN-01": 12.0, "GRN-02": 70.3, "GRN-05": 52.0, "SMT-01": 567.1, "SMT-03": 87.5, "SMT-05": 94.4, "CMP-01": 132570, "CMP-04": 68.1, "CMP-06": 690, "TAL-01": 63, "TAL-02": 7, "TAL-06": 39, "CON-01": 311, "CON-03": 95, "CON-05": 16},
"Tokyo":{"LIV-01": 0.23, "LIV-04": 84.9, "LIV-05": 3.26, "LIV-06": 16.0, "GRN-01": 10.8, "GRN-02": 74.8, "GRN-05": 21.4, "SMT-01": 313.7, "SMT-03": 85.42, "SMT-05": 85.5, "CMP-01": 50287, "CMP-04": 14.8, "CMP-06": 81, "TAL-01": 63, "TAL-02": 6, "TAL-06": 39, "CON-01": 304, "CON-03": 92, "CON-05": 19},
"Copenhagen":{"LIV-01": 0.84, "LIV-04": 81.5, "LIV-05": 5.79, "LIV-06": 10.7, "GRN-01": 6.9, "GRN-02": 83.7, "GRN-05": 42.0, "SMT-01": 328.2, "SMT-03": 90.63, "SMT-05": 99.8, "CMP-01": 85842, "CMP-04": null, "CMP-06": 842, "TAL-01": 59, "TAL-02": 6, "TAL-06": 37, "CON-01": 236, "CON-03": 83, "CON-05": 23},
"Zurich":{"LIV-01": 0.6, "LIV-04": 84.1, "LIV-05": 5.67, "LIV-06": 12.8, "GRN-01": 7.6, "GRN-02": 67.6, "GRN-05": 46.0, "SMT-01": 455.6, "SMT-03": 81.25, "SMT-05": 97.3, "CMP-01": 88723, "CMP-04": 49.0, "CMP-06": 571, "TAL-01": 63, "TAL-02": 6, "TAL-06": 37, "CON-01": 247, "CON-03": null, "CON-05": 23},
"Vienna":{"LIV-01": 0.88, "LIV-04": 81.0, "LIV-05": 7.17, "LIV-06": 15.8, "GRN-01": 9.9, "GRN-02": 72.4, "GRN-05": 35.2, "SMT-01": 251.9, "SMT-03": 84.38, "SMT-05": 91.9, "CMP-01": 66253, "CMP-04": null, "CMP-06": 63, "TAL-01": 59, "TAL-02": 6, "TAL-06": 37, "CON-01": 256, "CON-03": 82, "CON-05": 23},
"Seoul":{"LIV-01": 0.48, "LIV-04": 85.0, "LIV-05": 4.27, "LIV-06": 30.0, "GRN-01": 25.4, "GRN-02": 48.8, "GRN-05": 61.7, "SMT-01": 320.3, "SMT-03": 87.5, "SMT-05": 97.9, "CMP-01": 51292, "CMP-04": null, "CMP-06": 258, "TAL-01": 61, "TAL-02": 6, "TAL-06": 38, "CON-01": 265, "CON-03": 83, "CON-05": 19},
"Melbourne":{"LIV-01": 0.85, "LIV-04": 84.1, "LIV-05": 4.72, "LIV-06": 7.5, "GRN-01": 7.9, "GRN-02": 84.4, "GRN-05": 47.9, "SMT-01": 248.8, "SMT-03": null, "SMT-05": 96.1, "CMP-01": 40848, "CMP-04": 27.3, "CMP-06": 306, "TAL-01": 58, "TAL-02": 6, "TAL-06": 37, "CON-01": 225, "CON-03": 80, "CON-05": 26},
"Amsterdam":{"LIV-01": 0.69, "LIV-04": 82.1, "LIV-05": 4.89, "LIV-06": 9.9, "GRN-01": 8.9, "GRN-02": 77.6, "GRN-05": 25.0, "SMT-01": 317.8, "SMT-03": 78.13, "SMT-05": 97.0, "CMP-01": 87028, "CMP-04": null, "CMP-06": null, "TAL-01": 57, "TAL-02": 6, "TAL-06": 34, "CON-01": 287, "CON-03": 85, "CON-05": 20},
"London":{"LIV-01": 1.15, "LIV-04": 82.5, "LIV-05": null, "LIV-06": 16.7, "GRN-01": 11.2, "GRN-02": 87.1, "GRN-05": 32.6, "SMT-01": 316.7, "SMT-03": 87.5, "SMT-05": 95.5, "CMP-01": 72186, "CMP-04": 116.3, "CMP-06": 1867, "TAL-01": 64, "TAL-02": 8, "TAL-06": 42, "CON-01": 291, "CON-03": 95, "CON-05": 15},
"New York":{"LIV-01": 5.76, "LIV-04": 77.7, "LIV-05": 5.02, "LIV-06": 10.9, "GRN-01": 7.1, "GRN-02": 71.0, "GRN-05": 21.8, "SMT-01": 391.7, "SMT-03": 90.63, "SMT-05": 94.7, "CMP-01": 91990, "CMP-04": 86.9, "CMP-06": 1717, "TAL-01": 65, "TAL-02": 7, "TAL-06": 39, "CON-01": 287, "CON-03": 87, "CON-05": 19},
"Paris":{"LIV-01": 1.34, "LIV-04": 84.1, "LIV-05": 9.38, "LIV-06": 17.0, "GRN-01": 9.3, "GRN-02": 51.6, "GRN-05": 20.0, "SMT-01": 441.5, "SMT-03": 81.25, "SMT-05": 88.7, "CMP-01": 83089, "CMP-04": 42.0, "CMP-06": 516, "TAL-01": 64, "TAL-02": 6, "TAL-06": 41, "CON-01": 301, "CON-03": 88, "CON-05": 21},
"Toronto":{"LIV-01": 1.98, "LIV-04": 81.8, "LIV-05": 2.21, "LIV-06": 11.6, "GRN-01": 9.4, "GRN-02": 91.7, "GRN-05": 50.6, "SMT-01": 494.5, "SMT-03": 79.17, "SMT-05": 94.4, "CMP-01": 44561, "CMP-04": 52.9, "CMP-06": 433, "TAL-01": 62, "TAL-02": 7, "TAL-06": 37, "CON-01": 256, "CON-03": 81, "CON-05": 22},
"Berlin":{"LIV-01": 0.91, "LIV-04": 81.2, "LIV-05": 5.51, "LIV-06": 11.1, "GRN-01": 11.3, "GRN-02": 68.2, "GRN-05": 30.8, "SMT-01": 212.6, "SMT-03": 88.54, "SMT-05": 93.5, "CMP-01": 59205, "CMP-04": 49.4, "CMP-06": 452, "TAL-01": 60, "TAL-02": 7, "TAL-06": 37, "CON-01": 251, "CON-03": 82, "CON-05": 20},
"Barcelona":{"LIV-01": 0.69, "LIV-04": 84.2, "LIV-05": 4.47, "LIV-06": 13.8, "GRN-01": 10.9, "GRN-02": null, "GRN-05": 42.1, "SMT-01": 338.8, "SMT-03": null, "SMT-05": 95.8, "CMP-01": 52064, "CMP-04": 28.5, "CMP-06": 222, "TAL-01": 57, "TAL-02": 5, "TAL-06": 32, "CON-01": 237, "CON-03": 82, "CON-05": null},
"Dubai":{"LIV-01": 0.69, "LIV-04": 83.1, "LIV-05": 3.35, "LIV-06": 7.8, "GRN-01": 35.0, "GRN-02": 40.6, "GRN-05": null, "SMT-01": 359.0, "SMT-03": 90.63, "SMT-05": 100.0, "CMP-01": null, "CMP-04": null, "CMP-06": 661, "TAL-01": 54, "TAL-02": 4, "TAL-06": 33, "CON-01": 296, "CON-03": 94, "CON-05": 18},
"San Francisco":{"LIV-01": 5.76, "LIV-04": 79.0, "LIV-05": 3.02, "LIV-06": 6.5, "GRN-01": 7.4, "GRN-02": null, "GRN-05": 53.1, "SMT-01": 367.7, "SMT-03": null, "SMT-05": 94.7, "CMP-01": 146853, "CMP-04": 320.8, "CMP-06": 20260, "TAL-01": 69, "TAL-02": 8, "TAL-06": 43, "CON-01": 256, "CON-03": 84, "CON-05": 23}
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
   }
  }
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
    "value": null,
    "year": "n/a",
    "note": "Null per instruction: OECD latest year 2016 is older than the 2019 cutoff. NHS workforce fallback is a separate later task."
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
 }
}
};
