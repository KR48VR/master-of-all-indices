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
{"id": "GRN-01", "domain": "Green", "subtheme": "Air & Environment", "name": "PM2.5 air pollution", "measures": "Annual mean fine particulate matter", "unit": "µg/m³", "direction": "lower", "dataLevel": "City", "source": "WHO Ambient Air Quality DB v6.1", "appearsIn": "GPCI (Environment)", "pilot": 1, "caveat": "WHO DB v6.1 (2024 release): reference year varies by city (2019-2021). New York, San Francisco and Amsterdam rows are metro-area aggregates. Upgrade to DB v8.0 (June 2026) pending.", "contestable": 0, "approx": "none"},
{"id": "GRN-02", "domain": "Green", "subtheme": "Air & Environment", "name": "Green space access", "measures": "% residents within 300m of green space", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "UN-Habitat / ESA satellite", "appearsIn": "—", "pilot": 1, "caveat": "Satellite-derived; consistent method.", "contestable": 0, "approx": "none"},
{"id": "GRN-03", "domain": "Green", "subtheme": "Climate & Emissions", "name": "CO2 per capita", "measures": "Territorial emissions per resident", "unit": "tonnes", "direction": "lower", "dataLevel": "City", "source": "Global Covenant of Mayors", "appearsIn": "—", "pilot": 0, "caveat": "Self-reported by cities; has gaps.", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-04", "domain": "Green", "subtheme": "Climate & Emissions", "name": "Renewable share", "measures": "% of city energy from renewables", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "WCCD (ISO 37120)", "appearsIn": "—", "pilot": 0, "caveat": "Only for cities that report to WCCD.", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-05", "domain": "Green", "subtheme": "Resource Efficiency", "name": "Waste recycled", "measures": "% of municipal waste recycled", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "WCCD (ISO 37120)", "appearsIn": "—", "pilot": 1, "caveat": "Only for reporting cities.", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-06", "domain": "Green", "subtheme": "Resource Efficiency", "name": "Water use per capita", "measures": "Daily water consumption per resident", "unit": "litres/day", "direction": "lower", "dataLevel": "City", "source": "WCCD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "self-reported"},
{"id": "GRN-07", "domain": "Green", "subtheme": "Climate Risk", "name": "Hazard exposure", "measures": "Modelled exposure to flood / extreme heat", "unit": "index", "direction": "lower", "dataLevel": "City", "source": "WRI / modelled", "appearsIn": "—", "pilot": 0, "caveat": "Modelled estimate, not observed.", "contestable": 0, "approx": "modelled"},
{"id": "SMT-01", "domain": "Smart", "subtheme": "Connectivity", "name": "Broadband speed", "measures": "Test-weighted mean fixed download speed (Ookla open-data tiles)", "unit": "Mbps", "direction": "higher", "dataLevel": "City", "source": "Ookla Open Data (Speedtest tiles)", "appearsIn": "IMD Smart City", "pilot": 1, "caveat": "Computed from Ookla Q1 2026 open-data tiles aggregated over a documented city-core bounding box per city (recorded in provenance) — a test-weighted mean, not the median in Ookla’s consumer pages, and the boundary choice affects the value. © Ookla, CC BY-NC-SA 4.0.", "contestable": 0, "approx": "modelled"},
{"id": "SMT-02", "domain": "Smart", "subtheme": "Connectivity", "name": "5G coverage", "measures": "% population with 5G access", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "GSMA / regulators", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "SMT-03", "domain": "Smart", "subtheme": "Digital Governance", "name": "E-government", "measures": "Availability of online public services", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "UN E-Gov / IMD", "appearsIn": "IMD Smart City", "pilot": 1, "caveat": "Partly survey-based.", "contestable": 0, "approx": "perception"},
{"id": "SMT-04", "domain": "Smart", "subtheme": "Digital Governance", "name": "Open data", "measures": "Maturity of public open-data provision", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "Open Data Barometer", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "SMT-05", "domain": "Smart", "subtheme": "Digital Adoption", "name": "Population online", "measures": "% of residents using the internet", "unit": "%", "direction": "higher", "dataLevel": "Country proxy", "source": "ITU", "appearsIn": "—", "pilot": 1, "caveat": "Usually only available country-level.", "contestable": 0, "approx": "proxy"},
{"id": "SMT-06", "domain": "Smart", "subtheme": "Smart Services", "name": "Smart mobility", "measures": "Real-time transit info / app availability", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "IMD Smart City survey", "appearsIn": "IMD Smart City", "pilot": 0, "caveat": "Perception-based (resident survey).", "contestable": 0, "approx": "perception"},
{"id": "CMP-01", "domain": "Competitive", "subtheme": "Economic Output", "name": "GDP per capita", "measures": "Metro GDP / population", "unit": "USD PPP", "direction": "higher", "dataLevel": "Metro", "source": "OECD Metro DB", "appearsIn": "GPCI (Economy)", "pilot": 1, "caveat": "Strong for OECD.", "contestable": 0, "approx": "none"},
{"id": "CMP-02", "domain": "Competitive", "subtheme": "Economic Output", "name": "Labour productivity", "measures": "Gross value added per worker", "unit": "USD", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-03", "domain": "Competitive", "subtheme": "Business Environment", "name": "Global firm presence", "measures": "Number of major global-firm HQs", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "GPCI / Fortune", "appearsIn": "GPCI (Economy)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-04", "domain": "Competitive", "subtheme": "Business Environment", "name": "Startup density", "measures": "Startups per 100,000 residents", "unit": "per 100k", "direction": "higher", "dataLevel": "City", "source": "Dealroom / Startup Genome", "appearsIn": "GPCI-Startup", "pilot": 1, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-05", "domain": "Competitive", "subtheme": "Dynamism", "name": "Employment growth", "measures": "5-year change in metro employment", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "CMP-06", "domain": "Competitive", "subtheme": "Dynamism", "name": "VC funding", "measures": "Venture capital raised per capita", "unit": "USD", "direction": "higher", "dataLevel": "City", "source": "Dealroom / PitchBook", "appearsIn": "Startup Genome", "pilot": 1, "caveat": "Some sources behind paywalls.", "contestable": 0, "approx": "none"},
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
"Singapore":{"LIV-01": 0.07, "LIV-04": 83.9, "LIV-05": 2.9, "LIV-06": 24.7, "GRN-01": 12.0, "GRN-02": 81, "GRN-05": 52, "SMT-01": 567.1, "SMT-03": 90, "SMT-05": 98.7, "CMP-01": 98296, "CMP-04": 105, "CMP-06": 2517, "TAL-01": 63, "TAL-02": 7, "TAL-06": 39, "CON-01": 311, "CON-03": 95, "CON-05": 16},
"Tokyo":{"LIV-01": 0.23, "LIV-04": 84.9, "LIV-05": 3.26, "LIV-06": 16.0, "GRN-01": 10.8, "GRN-02": 74, "GRN-05": 52, "SMT-01": 313.7, "SMT-03": 87, "SMT-05": 97.6, "CMP-01": 104175, "CMP-04": 102, "CMP-06": 2660, "TAL-01": 63, "TAL-02": 6, "TAL-06": 39, "CON-01": 304, "CON-03": 92, "CON-05": 19},
"Copenhagen":{"LIV-01": 0.84, "LIV-04": 81.5, "LIV-05": 5.79, "LIV-06": 10.7, "GRN-01": 8.3, "GRN-02": 88, "GRN-05": 62, "SMT-01": 328.2, "SMT-03": 84, "SMT-05": 97.0, "CMP-01": 88871, "CMP-04": 95, "CMP-06": 2363, "TAL-01": 59, "TAL-02": 6, "TAL-06": 37, "CON-01": 236, "CON-03": 83, "CON-05": 23},
"Zurich":{"LIV-01": 0.6, "LIV-04": 84.1, "LIV-05": 5.67, "LIV-06": 12.8, "GRN-01": 10.1, "GRN-02": 89, "GRN-05": 58, "SMT-01": 455.6, "SMT-03": 84, "SMT-05": 96.6, "CMP-01": 97266, "CMP-04": 95, "CMP-06": 2550, "TAL-01": 63, "TAL-02": 6, "TAL-06": 37, "CON-01": 247, "CON-03": null, "CON-05": 23},
"Vienna":{"LIV-01": 0.88, "LIV-04": 81.0, "LIV-05": 7.17, "LIV-06": 15.8, "GRN-01": 10.6, "GRN-02": 84, "GRN-05": 55, "SMT-01": 251.9, "SMT-03": 86, "SMT-05": 93.7, "CMP-01": 85786, "CMP-04": 93, "CMP-06": 2058, "TAL-01": 59, "TAL-02": 6, "TAL-06": 37, "CON-01": 256, "CON-03": 82, "CON-05": 23},
"Seoul":{"LIV-01": 0.48, "LIV-04": 85.0, "LIV-05": 4.27, "LIV-06": 30.0, "GRN-01": 25.4, "GRN-02": 73, "GRN-05": 44, "SMT-01": 320.3, "SMT-03": 90, "SMT-05": 98.1, "CMP-01": 93070, "CMP-04": 93, "CMP-06": 2241, "TAL-01": 61, "TAL-02": 6, "TAL-06": 38, "CON-01": 265, "CON-03": 83, "CON-05": 19},
"Melbourne":{"LIV-01": 0.85, "LIV-04": 84.1, "LIV-05": 4.72, "LIV-06": 7.5, "GRN-01": 7.1, "GRN-02": 78, "GRN-05": 51, "SMT-01": 248.8, "SMT-03": null, "SMT-05": 94.4, "CMP-01": 90589, "CMP-04": 85, "CMP-06": 1857, "TAL-01": 58, "TAL-02": 6, "TAL-06": 37, "CON-01": 225, "CON-03": 80, "CON-05": 26},
"Amsterdam":{"LIV-01": 0.69, "LIV-04": 82.1, "LIV-05": 4.89, "LIV-06": 9.9, "GRN-01": 9.6, "GRN-02": 88, "GRN-05": 59, "SMT-01": 317.8, "SMT-03": 85, "SMT-05": 97.3, "CMP-01": 89798, "CMP-04": 101, "CMP-06": 2449, "TAL-01": 57, "TAL-02": 6, "TAL-06": 34, "CON-01": 287, "CON-03": 85, "CON-05": 20},
"London":{"LIV-01": 1.15, "LIV-04": 82.5, "LIV-05": null, "LIV-06": 16.7, "GRN-01": 11.2, "GRN-02": 77, "GRN-05": 49, "SMT-01": 316.7, "SMT-03": 85, "SMT-05": 94.8, "CMP-01": 107029, "CMP-04": 111, "CMP-06": 3000, "TAL-01": 64, "TAL-02": 8, "TAL-06": 42, "CON-01": 291, "CON-03": 95, "CON-05": 15},
"New York":{"LIV-01": 5.76, "LIV-04": 77.7, "LIV-05": 5.02, "LIV-06": 10.9, "GRN-01": 7.7, "GRN-02": null, "GRN-05": null, "SMT-01": 391.7, "SMT-03": 82, "SMT-05": 95.6, "CMP-01": 102888, "CMP-04": 108, "CMP-06": 2951, "TAL-01": 65, "TAL-02": 7, "TAL-06": 39, "CON-01": 287, "CON-03": 87, "CON-05": 19},
"Paris":{"LIV-01": 1.34, "LIV-04": 84.1, "LIV-05": 9.38, "LIV-06": 17.0, "GRN-01": 12.9, "GRN-02": 72, "GRN-05": 49, "SMT-01": 441.5, "SMT-03": null, "SMT-05": 95.3, "CMP-01": 101284, "CMP-04": 101, "CMP-06": 2564, "TAL-01": 64, "TAL-02": 6, "TAL-06": 41, "CON-01": 301, "CON-03": 88, "CON-05": 21},
"Toronto":{"LIV-01": 1.98, "LIV-04": 81.8, "LIV-05": 2.21, "LIV-06": 11.6, "GRN-01": 7.3, "GRN-02": 78, "GRN-05": 51, "SMT-01": 494.5, "SMT-03": 86, "SMT-05": 94.1, "CMP-01": 91317, "CMP-04": 101, "CMP-06": 2435, "TAL-01": 62, "TAL-02": 7, "TAL-06": 37, "CON-01": 256, "CON-03": 81, "CON-05": 22},
"Berlin":{"LIV-01": 0.91, "LIV-04": 81.2, "LIV-05": 5.51, "LIV-06": 11.1, "GRN-01": 13.1, "GRN-02": 83, "GRN-05": 53, "SMT-01": 212.6, "SMT-03": 83, "SMT-05": 95.1, "CMP-01": 92975, "CMP-04": 92, "CMP-06": null, "TAL-01": 60, "TAL-02": 7, "TAL-06": 37, "CON-01": 251, "CON-03": 82, "CON-05": 20},
"Barcelona":{"LIV-01": 0.69, "LIV-04": 84.2, "LIV-05": 4.47, "LIV-06": 13.8, "GRN-01": 12.2, "GRN-02": 74, "GRN-05": 50, "SMT-01": 338.8, "SMT-03": 77, "SMT-05": 93.0, "CMP-01": 82879, "CMP-04": 86, "CMP-06": 2126, "TAL-01": 57, "TAL-02": 5, "TAL-06": 32, "CON-01": 237, "CON-03": 82, "CON-05": null},
"Dubai":{"LIV-01": 0.69, "LIV-04": 83.1, "LIV-05": 3.35, "LIV-06": 7.8, "GRN-01": 45.8, "GRN-02": null, "GRN-05": 36, "SMT-01": 359.0, "SMT-03": 89, "SMT-05": 96.9, "CMP-01": 100722, "CMP-04": 105, "CMP-06": 2663, "TAL-01": 54, "TAL-02": 4, "TAL-06": 33, "CON-01": 296, "CON-03": 94, "CON-05": 18},
"San Francisco":{"LIV-01": 5.76, "LIV-04": 79.0, "LIV-05": 3.02, "LIV-06": 6.5, "GRN-01": 7.4, "GRN-02": 72, "GRN-05": 50, "SMT-01": 367.7, "SMT-03": 90, "SMT-05": 96.2, "CMP-01": 102252, "CMP-04": 105, "CMP-06": 2899, "TAL-01": 69, "TAL-02": 8, "TAL-06": 43, "CON-01": 256, "CON-03": 84, "CON-05": 23}
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
  "source": "WHO Ambient Air Quality Database v6.1 (2024 update), annual mean PM2.5",
  "url": "https://cdn.who.int/media/docs/default-source/air-pollution-documents/air-quality-and-health/who_ambient_air_quality_database_version_2024_(v6.1).xlsx?sfvrsn=c504c0cd_3&download=true",
  "license": "CC BY-NC-SA 3.0 IGO",
  "retrieved": "2026-07-11 (via verified mirror; sheet \"Update 2024 (V6.1)\")",
  "method": "Latest year per city with non-null pm25_concentration; exact Name/ISO3 row matching (Wien/AUT for Vienna, Kobenhavn/DNK for Copenhagen, Greater Amsterdam/NLD, US CBSA rows for NY & SF). v8.0 (June 2026) upgrade planned once downloadable.",
  "perCity": {
   "Singapore": {
    "value": 12.0,
    "year": 2021,
    "whoRow": "Singapore/SGP"
   },
   "Tokyo": {
    "value": 10.8,
    "year": 2019,
    "whoRow": "Tokyo/JPN",
    "pm25TemporalCoverage": 98.0
   },
   "Seoul": {
    "value": 25.4,
    "year": 2019,
    "whoRow": "Seoul/KOR"
   },
   "Melbourne": {
    "value": 7.1,
    "year": 2019,
    "whoRow": "Melbourne/AUS"
   },
   "London": {
    "value": 11.2,
    "year": 2019,
    "whoRow": "London/GBR",
    "pm25TemporalCoverage": 95.0
   },
   "Paris": {
    "value": 12.9,
    "year": 2021,
    "whoRow": "Paris/FRA",
    "pm25TemporalCoverage": 82.0
   },
   "Toronto": {
    "value": 7.3,
    "year": 2020,
    "whoRow": "Toronto/CAN",
    "pm25TemporalCoverage": 99.0
   },
   "Berlin": {
    "value": 13.1,
    "year": 2021,
    "whoRow": "Berlin/DEU",
    "pm25TemporalCoverage": 88.0
   },
   "Barcelona": {
    "value": 12.2,
    "year": 2021,
    "whoRow": "Barcelona/ESP",
    "pm25TemporalCoverage": 73.0
   },
   "Dubai": {
    "value": 45.8,
    "year": 2021,
    "whoRow": "Dubai/ARE",
    "pm25TemporalCoverage": 97.0
   },
   "Vienna": {
    "value": 10.6,
    "year": 2021,
    "whoRow": "Wien/AUT",
    "pm25TemporalCoverage": 93.0
   },
   "Copenhagen": {
    "value": 8.3,
    "year": 2020,
    "whoRow": "Kobenhavn/DNK",
    "pm25TemporalCoverage": 98.0
   },
   "Zurich": {
    "value": 10.1,
    "year": 2021,
    "whoRow": "Zurich/CHE"
   },
   "Amsterdam": {
    "value": 9.6,
    "year": 2020,
    "whoRow": "Greater Amsterdam/NLD",
    "pm25TemporalCoverage": 98.0
   },
   "New York": {
    "value": 7.7,
    "year": 2021,
    "whoRow": "New York Newark Jersey City NY NJ PA/USA"
   },
   "San Francisco": {
    "value": 7.4,
    "year": 2021,
    "whoRow": "San Francisco Oakland Hayward CA/USA"
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
 }
}
};
