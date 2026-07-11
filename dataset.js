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
{"id": "LIV-04", "domain": "Liveable", "subtheme": "Health", "name": "Life expectancy", "measures": "Average life expectancy at birth", "unit": "years", "direction": "higher", "dataLevel": "Metro", "source": "WHO / OECD Regions", "appearsIn": "GPCI (Livability)", "pilot": 1, "caveat": "Strong for OECD metros; thinner elsewhere.", "contestable": 0, "approx": "none"},
{"id": "LIV-05", "domain": "Liveable", "subtheme": "Health", "name": "Physicians per capita", "measures": "Doctors per 1,000 residents", "unit": "per 1k", "direction": "higher", "dataLevel": "Metro", "source": "OECD / WHO", "appearsIn": "EIU (Healthcare)", "pilot": 1, "caveat": "", "contestable": 0, "approx": "none"},
{"id": "LIV-06", "domain": "Liveable", "subtheme": "Housing & Cost", "name": "House-price-to-income", "measures": "Median home price / median income", "unit": "ratio", "direction": "lower", "dataLevel": "City", "source": "Numbeo / OECD", "appearsIn": "—", "pilot": 1, "caveat": "Core affordability signal.", "contestable": 0, "approx": "crowd"},
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
"Singapore":{"LIV-01": 0.07, "LIV-04": 84.7, "LIV-05": 5.3, "LIV-06": 9.2, "GRN-01": 12.0, "GRN-02": 81, "GRN-05": 52, "SMT-01": 567.1, "SMT-03": 90, "SMT-05": 98.7, "CMP-01": 98296, "CMP-04": 105, "CMP-06": 2517, "TAL-01": 63, "TAL-02": 7, "TAL-06": 39, "CON-01": 311, "CON-03": 95, "CON-05": 16},
"Tokyo":{"LIV-01": 0.23, "LIV-04": 84.0, "LIV-05": 5.5, "LIV-06": null, "GRN-01": 10.8, "GRN-02": 74, "GRN-05": 52, "SMT-01": 313.7, "SMT-03": 87, "SMT-05": 97.6, "CMP-01": 104175, "CMP-04": 102, "CMP-06": 2660, "TAL-01": 63, "TAL-02": 6, "TAL-06": 39, "CON-01": 304, "CON-03": 92, "CON-05": 19},
"Copenhagen":{"LIV-01": 0.84, "LIV-04": 85.9, "LIV-05": 5.9, "LIV-06": 7.6, "GRN-01": 8.3, "GRN-02": 88, "GRN-05": 62, "SMT-01": 328.2, "SMT-03": 84, "SMT-05": 97.0, "CMP-01": 88871, "CMP-04": 95, "CMP-06": 2363, "TAL-01": 59, "TAL-02": 6, "TAL-06": 37, "CON-01": 236, "CON-03": 83, "CON-05": 23},
"Zurich":{"LIV-01": 0.6, "LIV-04": 85.9, "LIV-05": 6.0, "LIV-06": 6.4, "GRN-01": 10.1, "GRN-02": 89, "GRN-05": 58, "SMT-01": 455.6, "SMT-03": 84, "SMT-05": 96.6, "CMP-01": 97266, "CMP-04": 95, "CMP-06": 2550, "TAL-01": 63, "TAL-02": 6, "TAL-06": 37, "CON-01": 247, "CON-03": null, "CON-05": 23},
"Vienna":{"LIV-01": 0.88, "LIV-04": 85.5, "LIV-05": 5.7, "LIV-06": 10.5, "GRN-01": 10.6, "GRN-02": 84, "GRN-05": 55, "SMT-01": 251.9, "SMT-03": 86, "SMT-05": 93.7, "CMP-01": 85786, "CMP-04": 93, "CMP-06": 2058, "TAL-01": 59, "TAL-02": 6, "TAL-06": 37, "CON-01": 256, "CON-03": 82, "CON-05": 23},
"Seoul":{"LIV-01": 0.48, "LIV-04": 84.8, "LIV-05": 4.9, "LIV-06": 13.5, "GRN-01": 25.4, "GRN-02": 73, "GRN-05": 44, "SMT-01": 320.3, "SMT-03": 90, "SMT-05": 98.1, "CMP-01": 93070, "CMP-04": 93, "CMP-06": 2241, "TAL-01": 61, "TAL-02": 6, "TAL-06": 38, "CON-01": 265, "CON-03": 83, "CON-05": 19},
"Melbourne":{"LIV-01": 0.85, "LIV-04": 85.0, "LIV-05": 5.3, "LIV-06": 9.7, "GRN-01": 7.1, "GRN-02": 78, "GRN-05": 51, "SMT-01": 248.8, "SMT-03": null, "SMT-05": 94.4, "CMP-01": 90589, "CMP-04": 85, "CMP-06": 1857, "TAL-01": 58, "TAL-02": 6, "TAL-06": 37, "CON-01": 225, "CON-03": 80, "CON-05": 26},
"Amsterdam":{"LIV-01": 0.69, "LIV-04": 84.9, "LIV-05": 5.3, "LIV-06": 10.7, "GRN-01": 9.6, "GRN-02": 88, "GRN-05": 59, "SMT-01": 317.8, "SMT-03": 85, "SMT-05": 97.3, "CMP-01": 89798, "CMP-04": 101, "CMP-06": 2449, "TAL-01": 57, "TAL-02": 6, "TAL-06": 34, "CON-01": 287, "CON-03": 85, "CON-05": 20},
"London":{"LIV-01": 1.15, "LIV-04": 83.6, "LIV-05": 4.8, "LIV-06": 14.8, "GRN-01": 11.2, "GRN-02": 77, "GRN-05": 49, "SMT-01": 316.7, "SMT-03": 85, "SMT-05": 94.8, "CMP-01": 107029, "CMP-04": 111, "CMP-06": 3000, "TAL-01": 64, "TAL-02": 8, "TAL-06": 42, "CON-01": 291, "CON-03": 95, "CON-05": 15},
"New York":{"LIV-01": 5.76, "LIV-04": 83.1, "LIV-05": 4.7, "LIV-06": 17.0, "GRN-01": 7.7, "GRN-02": null, "GRN-05": null, "SMT-01": 391.7, "SMT-03": 82, "SMT-05": 95.6, "CMP-01": 102888, "CMP-04": 108, "CMP-06": 2951, "TAL-01": 65, "TAL-02": 7, "TAL-06": 39, "CON-01": 287, "CON-03": 87, "CON-05": 19},
"Paris":{"LIV-01": 1.34, "LIV-04": 84.2, "LIV-05": 4.8, "LIV-06": 14.3, "GRN-01": 12.9, "GRN-02": 72, "GRN-05": 49, "SMT-01": 441.5, "SMT-03": null, "SMT-05": 95.3, "CMP-01": 101284, "CMP-04": 101, "CMP-06": 2564, "TAL-01": 64, "TAL-02": 6, "TAL-06": 41, "CON-01": 301, "CON-03": 88, "CON-05": 21},
"Toronto":{"LIV-01": 1.98, "LIV-04": 84.4, "LIV-05": 5.1, "LIV-06": 12.0, "GRN-01": 7.3, "GRN-02": 78, "GRN-05": 51, "SMT-01": 494.5, "SMT-03": 86, "SMT-05": 94.1, "CMP-01": 91317, "CMP-04": 101, "CMP-06": 2435, "TAL-01": 62, "TAL-02": 7, "TAL-06": 37, "CON-01": 256, "CON-03": 81, "CON-05": 22},
"Berlin":{"LIV-01": 0.91, "LIV-04": 84.8, "LIV-05": 5.1, "LIV-06": 15.6, "GRN-01": 13.1, "GRN-02": 83, "GRN-05": 53, "SMT-01": 212.6, "SMT-03": 83, "SMT-05": 95.1, "CMP-01": 92975, "CMP-04": 92, "CMP-06": null, "TAL-01": 60, "TAL-02": 7, "TAL-06": 37, "CON-01": 251, "CON-03": 82, "CON-05": 20},
"Barcelona":{"LIV-01": 0.69, "LIV-04": 84.7, "LIV-05": 5.0, "LIV-06": 11.6, "GRN-01": 12.2, "GRN-02": 74, "GRN-05": 50, "SMT-01": 338.8, "SMT-03": 77, "SMT-05": 93.0, "CMP-01": 82879, "CMP-04": 86, "CMP-06": 2126, "TAL-01": 57, "TAL-02": 5, "TAL-06": 32, "CON-01": 237, "CON-03": 82, "CON-05": null},
"Dubai":{"LIV-01": 0.69, "LIV-04": 83.8, "LIV-05": 4.5, "LIV-06": 18.9, "GRN-01": 45.8, "GRN-02": null, "GRN-05": 36, "SMT-01": 359.0, "SMT-03": 89, "SMT-05": 96.9, "CMP-01": 100722, "CMP-04": 105, "CMP-06": 2663, "TAL-01": 54, "TAL-02": 4, "TAL-06": 33, "CON-01": 296, "CON-03": 94, "CON-05": 18},
"San Francisco":{"LIV-01": 5.76, "LIV-04": 82.4, "LIV-05": 4.6, "LIV-06": 18.1, "GRN-01": 7.4, "GRN-02": 72, "GRN-05": 50, "SMT-01": 367.7, "SMT-03": 90, "SMT-05": 96.2, "CMP-01": 102252, "CMP-04": 105, "CMP-06": 2899, "TAL-01": 69, "TAL-02": 8, "TAL-06": 43, "CON-01": 256, "CON-03": 84, "CON-05": 23}
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
 }
}
};
