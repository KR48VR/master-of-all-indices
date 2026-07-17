// City Index — data file. Edit values here; the app reads this.
// Every value present is REAL and SOURCED — see the 'provenance' block for
// source/year/method per value (the app ignores that block; it satisfies
// CLAUDE.md rule 3). A null/absent value is honest missing data — never
// fill one with a guess. The 19 non-pilot measures have no data yet.
window.INDEX_DATA = {
"meta":{"name": "Master Index Workbench", "version": "3.0.0", "released": "2026-07-17", "dataLicense": "CC BY-NC-SA 4.0 (compilation); individual values inherit source terms recorded in provenance", "codeLicense": "MIT", "url": "https://kr48vr.github.io/master-of-all-indices/"},
"domains":[
{"id": "Liveable", "tint": "#F6C99A", "ink": "#8a4b12"},
{"id": "Green", "tint": "#A9CE9C", "ink": "#2f5d29"},
{"id": "Smart", "tint": "#9CC2E6", "ink": "#1f4a73"},
{"id": "Competitive", "tint": "#E7A6BE", "ink": "#8a2b4e"},
{"id": "Talent", "tint": "#EBCE7A", "ink": "#7a5a10"},
{"id": "Connected", "tint": "#BFA9DB", "ink": "#4a2f73"}
],
"variables":[
{"id": "LIV-01", "domain": "Liveable", "subtheme": "Safety & Stability", "name": "Homicide rate", "measures": "Intentional homicides per 100,000 residents", "unit": "per 100k", "direction": "lower", "dataLevel": "Country proxy", "source": "UNODC CTS (national rates)", "appearsIn": "EIU (Stability)", "pilot": 1, "caveat": "UNODC discontinued its city-level series, so these are NATIONAL rates standing in for cities (Singapore is a city-state, so national = city; London uses England & Wales). Crime definitions vary by country. City-level upgrade from national police statistics planned.", "contestable": 0, "approx": "proxy", "tier": "gold"},
{"id": "LIV-02", "domain": "Liveable", "subtheme": "Safety & Stability", "name": "Perceived safety", "measures": "Resident-reported feeling of safety", "unit": "index 0-100", "direction": "higher", "dataLevel": "City", "source": "Numbeo Safety Index", "appearsIn": "—", "pilot": 0, "caveat": "Numbeo Safety Index (0-100, higher = safer), crowd-sourced resident perception — treat as a soft signal; contributor counts per city are not published. The Crime Index is its complement (they sum to 100) and is deliberately not recorded. 2026 Mid-Year edition snapshot.", "contestable": 0, "approx": "crowd", "tier": "gold"},
{"id": "LIV-03", "domain": "Liveable", "subtheme": "Safety & Stability", "name": "Political stability", "measures": "Absence of violence / terrorism", "unit": "index", "direction": "higher", "dataLevel": "Country proxy", "source": "World Bank WGI", "appearsIn": "EIU (Stability)", "pilot": 0, "caveat": "Country-level stand-in, not city-specific (all cities of a country share one value; Hong Kong and Taiwan are separate WGI entities). WGI is explicitly perception-based. The value is the 2025-release 'Governance score' on an absolute anchored 0-100 scale — NOT the percentile rank of pre-2025 WGI releases; never compare across releases.", "contestable": 0, "approx": "perception", "tier": "gold"},
{"id": "LIV-04", "domain": "Liveable", "subtheme": "Health", "name": "Life expectancy", "measures": "Average life expectancy at birth", "unit": "years", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regions / SingStat / World Bank", "appearsIn": "GPCI (Livability)", "pilot": 1, "caveat": "OECD regional data at the finest level published: city or metro for most European cities; state/province proxies for the US, Canadian and Australian cities (named per value); Dubai is a UAE national figure. Years mix 2019-2025 — US values are 2020 (COVID-depressed, DC 2019), Japanese life tables are quinquennial (2020). 2026 Asian additions mix levels (named per value): Bangkok, Manila and Abu Dhabi are national proxies; Jakarta and Ho Chi Minh City are province-level; Mumbai reads as Maharashtra; Delhi and Kuala Lumpur are their own city-territories; mainland-Chinese figures are municipal official statistics on varying bases (Shanghai is hukou-based 2022, COVID-depressed). Hong Kong is blank — its statistics office publishes life expectancy by sex only.", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "LIV-05", "domain": "Liveable", "subtheme": "Health", "name": "Physicians per capita", "measures": "Doctors per 1,000 residents", "unit": "per 1k", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regional health / data.gov.sg / DHA", "appearsIn": "EIU (Healthcare)", "pilot": 1, "caveat": "OECD regional physician density, finest comparable level: city/metro for many European cities, state/province/region proxies for US, Canadian, Italian and German cities (German Laender end 2019). Core districts read high (Paris, Warsaw-core rejected for a reporting break, Washington DC extreme - physicians counted at workplace). Dublin and London-style gaps filled or left blank per value; Singapore from MOH, Dubai from DHA 2022. Years mix 2019-2025. 2026 Asian additions: mostly WHO national densities (country proxy, named per value); Bangkok is a city-level health-ministry figure. Definitions differ: mainland-Chinese counts include TCM, dental and public-health physicians; Hong Kong counts registered (not necessarily practising) doctors; Taipei counts practising Western-medicine physicians at place of practice; Beijing reads high (national hospitals serve all of China).", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "LIV-06", "domain": "Liveable", "subtheme": "Housing & Cost", "name": "House-price-to-income", "measures": "Median home price / median income", "unit": "ratio", "direction": "lower", "dataLevel": "City", "source": "Numbeo Property Prices Index", "appearsIn": "—", "pilot": 1, "caveat": "Numbeo 2026 Mid-Year edition: crowd-sourced median apartment price over median familial disposable income (years). Core affordability signal — treat as a soft, crowd-sourced estimate.", "contestable": 0, "approx": "crowd", "tier": "gold"},
{"id": "LIV-07", "domain": "Liveable", "subtheme": "Housing & Cost", "name": "Cost of living", "measures": "Standard basket cost vs a benchmark city", "unit": "index", "direction": "lower", "dataLevel": "City", "source": "Numbeo", "appearsIn": "Mercer", "pilot": 0, "caveat": "Numbeo Cost of Living Index (New York = 100, rent excluded — rent is captured separately by LIV-06), crowd-sourced prices. Direction 'lower is better' is contestable: high costs partly reflect prosperity; reweight or drop this measure if you disagree. 2026 Mid-Year edition snapshot.", "contestable": 1, "approx": "crowd", "tier": "gold"},
{"id": "LIV-08", "domain": "Liveable", "subtheme": "Culture & Amenities", "name": "Cultural venues (bias demo)", "measures": "Wikidata-counted museums per 100,000 — a deliberate demonstration of crowd-data bias", "unit": "per 100k", "direction": "higher", "dataLevel": "City", "source": "City open data / GPCI", "appearsIn": "GPCI (Cultural Interaction)", "pilot": 0, "caveat": "EXTENDED TIER — INCLUDED AS A BIAS DEMONSTRATION, NOT A MEASUREMENT. These numbers measure Wikipedia/Wikidata editing activity and location-graph linkage, not cultural infrastructure. Three documented distortions: (1) editorial attention — Paris counts 1.8x its ~130 official museums while Shanghai counts 0.4x of its ~165 registered ones (a 4-5x relative bias); (2) graph linkage — London (0.1), Amsterdam (0.1), Copenhagen and Auckland (0.0) score near zero purely because their museums link to a different database item than the conventional city entry (the British Museum's chain never reaches 'London'); (3) denominator quirks — some city items carry agglomeration-scale populations (Kuala Lumpur, Delhi). Every count is reproducible from the recorded uniform query; no value should be read as a fact about culture. This is what an index built on convenient crowd counts looks like.", "contestable": 0, "approx": "crowd", "tier": "extended"},
{"id": "GRN-01", "domain": "Green", "subtheme": "Air & Environment", "name": "PM2.5 air pollution", "measures": "Annual mean fine particulate matter", "unit": "µg/m³", "direction": "lower", "dataLevel": "City", "source": "WHO Ambient Air Quality DB v8.0", "appearsIn": "GPCI (Environment)", "pilot": 1, "caveat": "WHO DB v8.0 (June 2026): reference year varies by city (2019-2024 — Tokyo, Seoul and London are stuck at 2019). Several rows are greater-city/metro aggregates (Zurich, Paris, Amsterdam, New York, San Francisco). Barcelona station coverage moderate (79%).", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "GRN-02", "domain": "Green", "subtheme": "Air & Environment", "name": "Open space access", "measures": "% of residents within 400 m walk of an open public space", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "UN-Habitat SDG 11.7.1", "appearsIn": "—", "pilot": 1, "caveat": "SDG 11.7.1 access measure (2020): \"open public space\" includes plazas and squares, not only green areas, and the share is computed from OpenStreetMap public-space mapping plus a modelled population grid — not a survey. Replaces the original \"within 300 m of green space\" definition, which no global source publishes. Barcelona and San Francisco are outside UN-Habitat’s city sample (blank).", "contestable": 0, "approx": "modelled", "tier": "gold"},
{"id": "GRN-03", "domain": "Green", "subtheme": "Climate & Emissions", "name": "CO2 per capita", "measures": "Territorial emissions per resident", "unit": "tonnes", "direction": "lower", "dataLevel": "Metro", "source": "Global Covenant of Mayors", "appearsIn": "—", "pilot": 0, "caveat": "EDGAR v2024 modelled emissions summed over each city's GHS urban centre ÷ the centre's published 2020 population (JRC's own arithmetic, reproduced exactly; 2022 is the latest emissions year, 2020 the nearest population epoch). Urban centres are contiguous built-up areas, not administrative cities — six are merged conurbations (SF=Bay Area, Taipei=with New Taipei, Manila=Metro Manila, Delhi=NCR, Osaka=Keihanshin, Shenzhen=Pearl River Delta), noted per value. International aviation and shipping are EXCLUDED, so port/hub cities read low (Hong Kong's 1.35 vs ~4.5 in territory statistics is flagged per value). A May 2026 UCDB revision (V1.2) adds international transport and a newer EDGAR release — values will shift when we adopt it (documented version-bump candidate).", "contestable": 0, "approx": "modelled", "tier": "gold"},
{"id": "GRN-04", "domain": "Green", "subtheme": "Climate & Emissions", "name": "Renewable share", "measures": "% of city energy from renewables", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "WCCD (ISO 37120)", "appearsIn": "—", "pilot": 0, "caveat": "Only for cities that report to WCCD.", "contestable": 0, "approx": "self-reported", "tier": "none"},
{"id": "GRN-05", "domain": "Green", "subtheme": "Resource Efficiency", "name": "Waste recycled", "measures": "% of municipal waste recycled", "unit": "%", "direction": "higher", "dataLevel": "City", "source": "Official city/national waste statistics", "appearsIn": "—", "pilot": 1, "caveat": "Compiled city-by-city from official sources — definitions are NOT directly comparable: mixes true recycling rates, separate-collection shares (Milan, Rome, Madrid, Prague, Frankfurt, Stockholm) and landfill-diversion rates (San Francisco, Toronto, Montreal, Washington DC, Sydney, Chicago, Auckland, Manila, Abu Dhabi; Tel Aviv's includes waste-to-energy); scopes differ (Singapore's 52% overall vs ~12% domestic; Chicago and Osaka structurally low from narrow administrative scope; Vancouver metro-wide all sectors incl. construction). Kuala Lumpur and Dublin are NATIONAL rates (country proxy); Abu Dhabi is the emirate; Vienna and Frankfurt are computed from official tonnages (no rate published). Years mostly 2023-2025 — Boston 2019, Hamburg 2020 and Manila 2015 are those cities' latest official rates. Cities publishing no genuine rate are blank, each with the reason recorded.", "contestable": 0, "approx": "self-reported", "tier": "gold"},
{"id": "GRN-06", "domain": "Green", "subtheme": "Resource Efficiency", "name": "Water use per capita", "measures": "Daily water consumption per resident", "unit": "litres/day", "direction": "lower", "dataLevel": "City", "source": "WCCD", "appearsIn": "—", "pilot": 0, "caveat": "EXTENDED TIER — coverage-poor and vintage-mixed (adopted knowingly, D5-reframed): the only living multi-city source (IWA International Statistics for Water Services) covers 34 of 55 cities, mixing editions 2016-2022 — seven cities' newest figures are a decade old (2016: London, Melbourne, Sydney, Prague, Shanghai, Beijing, Shenzhen), flagged per value. Madrid and Barcelona share one Spain-wide figure (IWA's own note: country proxy). New York's 438 L/c/d exceeds the sanity band (likely total system demand) — recorded as published, flagged. Self-reported by utilities; no explicit portal license (cited with edition year; permissions check pending).", "contestable": 0, "approx": "self-reported", "tier": "extended"},
{"id": "GRN-07", "domain": "Green", "subtheme": "Climate Risk", "name": "Hazard exposure", "measures": "Modelled exposure to flood / extreme heat", "unit": "index", "direction": "lower", "dataLevel": "City", "source": "WRI / modelled", "appearsIn": "—", "pilot": 0, "caveat": "Approved coding (D6): ThinkHazard's published hazard classes (Very low=0 … High=3) for river flood, urban flood, coastal flood and extreme heat — the stored value is the MAXIMUM of the four (lower is better). Classes come from published global models (GFDRR/World Bank; CC-BY) — modelled, precautionary, and coarse: the coding skews high (38 of 55 cities score 3), so this measure discriminates mainly among lower-risk cities. Division choices were manually curated (naive matching had picked wrong-country namesakes); where a city division lacked data the surrounding region supplies ALL four classes (never mixed), and Taipei is a Taiwan-level country proxy. Known layer artifacts flagged per value: Norway lacks a coastal-flood layer (Oslo 0), Great-Lakes/river cities and Washington DC have coastal No Data, Istanbul's published coastal class is Very low.", "contestable": 0, "approx": "modelled", "tier": "gold"},
{"id": "SMT-01", "domain": "Smart", "subtheme": "Connectivity", "name": "Broadband speed", "measures": "Test-weighted mean fixed download speed (Ookla open-data tiles)", "unit": "Mbps", "direction": "higher", "dataLevel": "City", "source": "Ookla Open Data (Speedtest tiles)", "appearsIn": "IMD Smart City", "pilot": 1, "caveat": "Computed from Ookla Q1 2026 open-data tiles aggregated over a documented city-core bounding box per city (recorded in provenance) — a test-weighted mean, not the median in Ookla’s consumer pages, and the boundary choice affects the value. © Ookla, CC BY-NC-SA 4.0.", "contestable": 0, "approx": "modelled", "tier": "gold"},
{"id": "SMT-02", "domain": "Smart", "subtheme": "Connectivity", "name": "5G coverage", "measures": "% population with 5G access", "unit": "%", "direction": "higher", "dataLevel": "Country proxy", "source": "GSMA / regulators", "appearsIn": "—", "pilot": 0, "caveat": "ITU national '% of population covered by at least a 5G network' (reported to ITU by each regulator) — a COUNTRY proxy with a known differential distortion: big-city 5G is systematically better than the national figure, so the proxy understates dense Asian cities (Jakarta reads as Indonesia's 8.9, Ho Chi Minh City as Vietnam's 25.5) while barely affecting OECD cities. Underlying figures are operator-predicted coverage with residual national definition variance (harmonized by ITU as SDG 9.c custodian). Istanbul 0.0 is genuine — Türkiye launched commercial 5G only in 2026. Tel Aviv blank (Israel's figure is a stale 2021 ITU estimate).", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "SMT-03", "domain": "Smart", "subtheme": "Digital Governance", "name": "E-government", "measures": "UN Local Online Service Index — share of 95 assessed portal features", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "UN E-Government Survey 2024 (LOSI)", "appearsIn": "IMD Smart City", "pilot": 1, "caveat": "LOSI is an objective checklist of city-portal features (not a survey), assessed for each country’s most populous city only: Melbourne, Barcelona and San Francisco are not assessed (blank). One portal per city; biennial — 2024 edition.", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "SMT-04", "domain": "Smart", "subtheme": "Digital Governance", "name": "Open data (national)", "measures": "Openness of national official statistics (ODIN overall score)", "unit": "index", "direction": "higher", "dataLevel": "Country proxy", "source": "Open Data Barometer", "appearsIn": "—", "pilot": 0, "caveat": "EXTENDED TIER — concept drift (approved D3): no city-level open-data index exists anywhere any more (the blueprint's Open Data Barometer died in 2018), so this is ODIN by Open Data Watch: the openness and coverage of each country's NATIONAL official statistics — a different institution than the city's own open-data provision, which genuinely varies between cities of one country. Country proxy; a structured expert desk assessment of published outputs (no closer approx label exists in the taxonomy). ODIN license: CC (variant unconfirmed — pending a publisher check).", "contestable": 0, "approx": "none", "tier": "extended"},
{"id": "SMT-05", "domain": "Smart", "subtheme": "Digital Adoption", "name": "Population online", "measures": "% of residents using the internet", "unit": "%", "direction": "higher", "dataLevel": "Country proxy", "source": "World Bank WDI (ITU series)", "appearsIn": "—", "pilot": 1, "caveat": "Country-level series (ITU via World Bank WDI); reference year mostly 2024, Switzerland and Austria 2025. New York and San Francisco share the single US value; the UAE source records exactly 100.", "contestable": 0, "approx": "proxy", "tier": "gold"},
{"id": "SMT-06", "domain": "Smart", "subtheme": "Smart Services", "name": "Smart mobility", "measures": "Ease of using public transport via online scheduling & ticketing (resident survey)", "unit": "index", "direction": "higher", "dataLevel": "City", "source": "IMD Smart City survey", "appearsIn": "IMD Smart City", "pilot": 0, "caveat": "IMD Smart City Index 2026 resident-survey score (0-100) for the statement 'Online scheduling and ticket sales has made public transport easier to use' — a PERCEPTION measure (~120 residents/city/year, three survey years weighted 3:2:1), and a deliberate concept adjustment from the blueprint's 'real-time transit info' (no honest reproducible source exists for that; the GTFS-Realtime registry was rejected as measuring registry participation, not reality). Satisfaction scales differ culturally — expectation effects are part of what is measured. Frankfurt is blank (not ranked in the SCI).", "contestable": 0, "approx": "perception", "tier": "gold"},
{"id": "CMP-01", "domain": "Competitive", "subtheme": "Economic Output", "name": "GDP per capita", "measures": "Metro GDP / population", "unit": "USD PPP", "direction": "higher", "dataLevel": "Metro", "source": "OECD Metro (FUA) / World Bank", "appearsIn": "GPCI (Economy)", "pilot": 1, "caveat": "OECD metropolitan (FUA) GDP per head in constant-2015-PPP USD; years 2020-2023. London and the archived-vintage metros (Melbourne, Toronto, Montreal, Vancouver, Sydney) are 2020 COVID-dip values. Dublin reads high (multinational profit-shifting). Singapore is a national World Bank figure on a 2021 PPP base. Dubai and Tel Aviv: no honest metro PPP figure exists (blank).", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "CMP-02", "domain": "Competitive", "subtheme": "Economic Output", "name": "Labour productivity", "measures": "Gross value added per worker", "unit": "USD", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "EXTENDED TIER — OECD-only coverage (33/55, zero non-OECD; adopted knowingly per the D4 reframing) and worse than the usual OECD pattern: no productivity exists for the Australian, Canadian or Israeli metros (their FUAs have no GDP series) nor Istanbul. Reference years vary 2021-2023 (Tokyo/Osaka are single-year 2021 series). Genuine outliers flagged, not smoothed: San Francisco ~277k USD/worker (tech), Dublin ~256k (multinational profit-shifting inflates Irish GDP — interpret with care).", "contestable": 0, "approx": "none", "tier": "extended"},
{"id": "CMP-03", "domain": "Competitive", "subtheme": "Business Environment", "name": "Global firm presence", "measures": "Number of major global-firm HQs", "unit": "count", "direction": "higher", "dataLevel": "Metro", "source": "GPCI / Fortune", "appearsIn": "GPCI (Economy)", "pilot": 0, "caveat": "Count of Forbes Global 2000 (2025) firms headquartered in each city's metro area — exact counting, and 0 is a real value (Auckland's 0 means no NZ firm made the list). US cities use the official OMB 2023 Combined Statistical Areas (approved D8): San Francisco INCLUDES Silicon Valley (San Jose MSA), Washington DC includes Baltimore, New York includes SW Connecticut — the rule is uniform, per-value notes name what was absorbed. Elsewhere: commuting-area rule (Yokohama→Tokyo, Incheon→Seoul...). Firms are counted where Forbes places their HQ city, which inflates tax-domicile hubs — Dublin's 15 includes several Irish-domiciled firms operationally elsewhere (flagged per value). ~1% of Forbes rows had glitches, each correction documented in provenance.", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "CMP-04", "domain": "Competitive", "subtheme": "Business Environment", "name": "Startup density", "measures": "Dealroom-tracked startups per 100,000 metro residents", "unit": "per 100k", "direction": "higher", "dataLevel": "Metro", "source": "Dealroom (public hub pages)", "appearsIn": "GPCI-Startup", "pilot": 1, "caveat": "Dealroom \"tracked startups\" per hub / page-shown metro population (captured 11-12 Jul 2026). Hubs are metros: SF = Bay Area, Toronto = Toronto-Waterloo, Berlin = Berlin/Brandenburg. Hubs whose pages render no startup count are blank (Copenhagen, Vienna, Seoul, Dubai and most hubs added in the 2026 expansion outside the largest ecosystems); Amsterdam shows no population (blank). Database coverage varies by region — deepest in Europe/US.", "contestable": 0, "approx": "modelled", "tier": "gold"},
{"id": "CMP-05", "domain": "Competitive", "subtheme": "Dynamism", "name": "Employment growth", "measures": "5-year change in metro employment", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD", "appearsIn": "—", "pilot": 0, "caveat": "EXTENDED TIER — OECD-only coverage (37/55; adopted knowingly per the D4 reframing). 5-year % change of OECD FUA resident employment, exact arithmetic on two published levels — but windows vary by country (Copenhagen ends 2018, German metros 2021, Zurich/Prague 2022) and the 7 US metros use the 15+ age band (15-64 unpublished for the US), so cross-city comparison is loose. Brussels and London are blank (absent from the labour table; the place-of-work alternative was deliberately not mixed in); Tel Aviv's series starts 2020 (no window).", "contestable": 0, "approx": "none", "tier": "extended"},
{"id": "CMP-06", "domain": "Competitive", "subtheme": "Dynamism", "name": "VC funding", "measures": "Dealroom \"VC invested\" per resident (metro hub)", "unit": "USD", "direction": "higher", "dataLevel": "Metro", "source": "Dealroom (public hub pages)", "appearsIn": "Startup Genome", "pilot": 1, "caveat": "Dealroom hub \"VC invested\" / page-shown metro population (captured 11-12 Jul 2026). The source page does not state the time window of \"VC invested\" — compare across cities, not against external annual figures. Amsterdam blank (no population shown).", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "TAL-01", "domain": "Talent", "subtheme": "Education", "name": "Tertiary attainment", "measures": "% of adults with tertiary education", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD Regions / SingStat / Dubai Statistics Center", "appearsIn": "—", "pilot": 1, "caveat": "OECD regional shares (25-64, ISCED 5-8), finest level published: city-level for some, but state/province/region proxies for the US, Canadian, Australian, Italian, German and Japanese cities (named per value; Milan reads as Lombardy, Osaka as Kansai). Singapore counts residents 25+. Dubai is on a DIFFERENT basis — university-and-above as % of population 10+ (DSC 2023). Years mix 2020-2025. 2026 Asian additions vary in basis (named per value): mainland-Chinese cities are 2020-census shares of the TOTAL population of all ages; Hong Kong and Taipei are 15+ attended/registered shares; Bangkok and Jakarta are national bachelor's-and-above; Kuala Lumpur is a national employed-persons share; Manila is NCR 25+ completed, Ho Chi Minh City is a 2020 labour-force share, Mumbai and Delhi are 15+ state shares.", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "TAL-02", "domain": "Talent", "subtheme": "Education", "name": "Top universities", "measures": "Universities in the global top 500", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "QS World University Rankings 2026", "appearsIn": "GPCI (R&D)", "pilot": 1, "caveat": "QS 2026 edition, counted with QS’s own city labels, city-proper rule: Stanford and Berkeley fall outside San Francisco (a real 0), the Saclay cluster outside Paris — counts are boundary-sensitive for SF, NY and Paris. Dubai’s 0 is real: all six UAE top-500 universities are in other emirates.", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "TAL-03", "domain": "Talent", "subtheme": "Skills & Workforce", "name": "Knowledge workers", "measures": "% employed in knowledge-intensive jobs", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "Eurostat / OECD", "appearsIn": "—", "pilot": 0, "caveat": "EXTENDED TIER — Europe-only (23/55; the reject reframed as extended per D10): Eurostat NUTS2 knowledge-intensive employment, the only harmonized sub-national source anywhere. London is a NUTS1 aggregate frozen at 2019 (post-Brexit); Lisbon uses the NUTS2024 successor region (series to 2025); several regions are much larger than the city (Milan=Lombardy, Barcelona=Catalonia, Munich=Oberbayern). France/Spain values carry Eurostat's 'definition differs' flag.", "contestable": 0, "approx": "none", "tier": "extended"},
{"id": "TAL-04", "domain": "Talent", "subtheme": "Skills & Workforce", "name": "Researchers per capita", "measures": "R&D personnel per 1,000", "unit": "per 1k", "direction": "higher", "dataLevel": "Country proxy", "source": "OECD", "appearsIn": "GPCI (R&D)", "pilot": 0, "caveat": "UNESCO UIS national researcher density (FTE per million, converted to per 1,000 by exact division) — a COUNTRY proxy: every city of a country shares one value. Principled blanks: Taipei (Taiwan does not report to UIS), Tel Aviv (Israel reports no FTE density to UIS), and Melbourne/Sydney (Australia's latest figure is 2010 — 16 years stale, deliberately not recorded). Reference years vary by country (mostly 2021-2023; UK 2017, India/Indonesia/Philippines 2020) — shown per value.", "contestable": 0, "approx": "none", "tier": "gold"},
{"id": "TAL-05", "domain": "Talent", "subtheme": "Attractiveness", "name": "Talent inflow", "measures": "Net migration of working-age people", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "National statistics", "appearsIn": "—", "pilot": 0, "caveat": "Hard to standardise across countries.", "contestable": 0, "approx": "none", "tier": "none"},
{"id": "TAL-06", "domain": "Talent", "subtheme": "Attractiveness", "name": "International openness", "measures": "Foreign-born population share", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "OECD FUA / national censuses / UN DESA", "appearsIn": "GPCI", "pilot": 1, "caveat": "Mixes concepts and boundaries, disclosed per value: census/register foreign-born for most; foreign NATIONALS for Tokyo, Seoul, Osaka, Taipei; non-citizens for Kuala Lumpur; Hong Kong counts everyone born outside HK INCLUDING mainland China (29.9 of its 38.3 points). City vs metro boundaries and years 2021-2026 vary. Many Asian cities publish nothing honest here - blanks explain themselves. A proxy for openness - contestable as \"better\".", "contestable": 1, "approx": "none", "tier": "gold"},
{"id": "CON-01", "domain": "Connected", "subtheme": "Global Connectivity", "name": "Airport connectivity", "measures": "Direct international destinations served", "unit": "count", "direction": "higher", "dataLevel": "City", "source": "Wikipedia airport destination tables", "appearsIn": "GPCI (Accessibility)", "pilot": 1, "caveat": "Counted from Wikipedia \"Airlines and destinations\" tables (July 2026 snapshots): distinct international destination airports with scheduled or announced passenger service (charter/cargo excluded; suspended-annotated routes retained), union across each city's airport system, Wikidata-verified country classification. Crowd-maintained lists - completeness varies by page: Tokyo, Osaka and Taipei are blank because their articles are known-pruned. Mainland China / Hong Kong / Macau / Taiwan routes are counted as international throughout (separate customs territories). Snapshot, not an official OAG count.", "contestable": 0, "approx": "crowd", "tier": "gold"},
{"id": "CON-02", "domain": "Connected", "subtheme": "Global Connectivity", "name": "Global accessibility", "measures": "Travel time to major world hubs", "unit": "hours", "direction": "lower", "dataLevel": "City", "source": "GPCI", "appearsIn": "GPCI (Accessibility)", "pilot": 0, "caveat": "", "contestable": 0, "approx": "none", "tier": "none"},
{"id": "CON-03", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Transit access", "measures": "% residents within 500 m of frequent transit (ITDP PNFT)", "unit": "%", "direction": "higher", "dataLevel": "Metro", "source": "ITDP Atlas (People Near Frequent Transit)", "appearsIn": "—", "pilot": 1, "caveat": "Share of the GHSL urban agglomeration within 500 m of a stop served at least every ~10 min (7am-9pm), GIS-computed by ITDP from open GTFS feeds; latest RELIABLE year per city (2023-2025 - one-cycle feed collapses are treated as artifacts, disclosed per value). Cities without usable open feeds are blank, NOT zero (Tokyo, London, Zurich, Melbourne, Amsterdam, Seoul, Oslo, Frankfurt, Istanbul, Osaka).", "contestable": 0, "approx": "modelled", "tier": "gold"},
{"id": "CON-04", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Commute time", "measures": "Average one-way commute", "unit": "minutes", "direction": "lower", "dataLevel": "City", "source": "Numbeo / Moovit", "appearsIn": "—", "pilot": 0, "caveat": "Numbeo Time Index: crowd-reported average one-way commute in minutes (all modes), 2026 Mid-Year edition — the plain minutes column, not the composite Traffic Index. Osaka is blank: it fails Numbeo's own inclusion bar (only 14 contributors on its city page), so no comparable value exists.", "contestable": 0, "approx": "crowd", "tier": "gold"},
{"id": "CON-05", "domain": "Connected", "subtheme": "Urban Mobility", "name": "Traffic congestion", "measures": "Extra travel time caused by congestion", "unit": "%", "direction": "lower", "dataLevel": "City", "source": "TomTom Traffic Index", "appearsIn": "—", "pilot": 1, "caveat": "TomTom Traffic Index \"Ranking 2025\" (full-year 2025, city-center definition): average extra travel time vs free-flow. Seoul is not covered by TomTom — INRIX also excludes Korea (blank).", "contestable": 0, "approx": "none", "tier": "gold"}
],
"cities":["Singapore", "Tokyo", "Copenhagen", "Zurich", "Vienna", "Seoul", "Melbourne", "Amsterdam", "London", "New York", "Paris", "Toronto", "Berlin", "Barcelona", "Dubai", "San Francisco", "Stockholm", "Oslo", "Helsinki", "Madrid", "Milan", "Rome", "Munich", "Frankfurt", "Hamburg", "Brussels", "Dublin", "Lisbon", "Prague", "Warsaw", "Istanbul", "Montreal", "Vancouver", "Chicago", "Boston", "Los Angeles", "Seattle", "Washington DC", "Sydney", "Auckland", "Osaka", "Tel Aviv", "Hong Kong", "Taipei", "Bangkok", "Kuala Lumpur", "Jakarta", "Manila", "Ho Chi Minh City", "Mumbai", "Abu Dhabi", "Shanghai", "Beijing", "Shenzhen", "Delhi"],
"data":{
"Singapore":{"LIV-01": 0.07, "LIV-04": 83.9, "LIV-05": 2.9, "LIV-06": 24.7, "GRN-01": 12.0, "GRN-02": 70.3, "GRN-05": 52.0, "SMT-01": 567.1, "SMT-03": 87.5, "SMT-05": 94.4, "CMP-01": 132570, "CMP-04": 68.1, "CMP-06": 690, "TAL-01": 54.1, "TAL-02": 2, "TAL-06": 48.7, "CON-01": 175, "CON-03": 28.0, "CON-05": 43.9, "LIV-02": 77.7, "LIV-07": 90.8, "CON-04": 41.0, "LIV-03": 86.94, "TAL-04": 8.78, "SMT-02": 95.0, "SMT-06": 65.3, "GRN-03": 4.88, "CMP-03": 11.0, "GRN-07": 3.0, "SMT-04": 90.0, "GRN-06": 154.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.6},
"Tokyo":{"LIV-01": 0.23, "LIV-04": 84.9, "LIV-05": 3.26, "LIV-06": 16.0, "GRN-01": 10.8, "GRN-02": 74.8, "GRN-05": 21.4, "SMT-01": 313.7, "SMT-03": 85.42, "SMT-05": 85.5, "CMP-01": 50287, "CMP-04": 14.8, "CMP-06": 81, "TAL-01": 64.2, "TAL-02": 4, "TAL-06": 5.6, "CON-01": null, "CON-03": null, "CON-05": 44.1, "LIV-02": 75.9, "LIV-07": 54.3, "CON-04": 42.7, "LIV-03": 85.27, "TAL-04": 5.61, "SMT-02": 96.6, "SMT-06": 54.1, "GRN-03": 3.16, "CMP-03": 122.0, "GRN-07": 3.0, "SMT-04": 71.0, "GRN-06": 215.0, "CMP-02": 88996.0, "CMP-05": 4.0, "TAL-03": null, "LIV-08": 2.7},
"Copenhagen":{"LIV-01": 0.84, "LIV-04": 81.5, "LIV-05": 5.79, "LIV-06": 10.7, "GRN-01": 6.9, "GRN-02": 83.7, "GRN-05": 42.0, "SMT-01": 328.2, "SMT-03": 90.63, "SMT-05": 99.8, "CMP-01": 85842, "CMP-04": null, "CMP-06": 842, "TAL-01": 58.2, "TAL-02": 1, "TAL-06": 26.7, "CON-01": 192, "CON-03": 74.5, "CON-05": 40.2, "LIV-02": 73.7, "LIV-07": 86.8, "CON-04": 27.5, "LIV-03": 79.03, "TAL-04": 8.84, "SMT-02": 100.0, "SMT-06": 71.1, "GRN-03": 1.2, "CMP-03": 10.0, "GRN-07": 3.0, "SMT-04": 89.0, "GRN-06": 103.0, "CMP-02": 145510.0, "CMP-05": 9.8, "TAL-03": 58.7, "LIV-08": 0.0},
"Zurich":{"LIV-01": 0.6, "LIV-04": 84.1, "LIV-05": 5.67, "LIV-06": 12.8, "GRN-01": 7.6, "GRN-02": 67.6, "GRN-05": 46.0, "SMT-01": 455.6, "SMT-03": 81.25, "SMT-05": 97.3, "CMP-01": 88723, "CMP-04": 49.0, "CMP-06": 571, "TAL-01": 56.6, "TAL-02": 2, "TAL-06": 44.0, "CON-01": 224, "CON-03": null, "CON-05": 48.9, "LIV-02": 75.9, "LIV-07": 123.1, "CON-04": 37.0, "LIV-03": 82.65, "TAL-04": 6.11, "SMT-02": 100.0, "SMT-06": 79.6, "GRN-03": 2.04, "CMP-03": 16.0, "GRN-07": 2.0, "SMT-04": 66.0, "GRN-06": null, "CMP-02": 124657.0, "CMP-05": 3.6, "TAL-03": 57.1, "LIV-08": 15.9},
"Vienna":{"LIV-01": 0.88, "LIV-04": 81.0, "LIV-05": 7.17, "LIV-06": 15.8, "GRN-01": 9.9, "GRN-02": 72.4, "GRN-05": 35.2, "SMT-01": 251.9, "SMT-03": 84.38, "SMT-05": 91.9, "CMP-01": 66253, "CMP-04": null, "CMP-06": 63, "TAL-01": 46.3, "TAL-02": 2, "TAL-06": 40.9, "CON-01": 204, "CON-03": 86.7, "CON-05": 48.6, "LIV-02": 70.6, "LIV-07": 74.5, "CON-04": 22.9, "LIV-03": 74.29, "TAL-04": 6.63, "SMT-02": 98.0, "SMT-06": 76.4, "GRN-03": 1.96, "CMP-03": 8.0, "GRN-07": 2.0, "SMT-04": 72.0, "GRN-06": null, "CMP-02": 126851.0, "CMP-05": 5.4, "TAL-03": 52.5, "LIV-08": 8.9},
"Seoul":{"LIV-01": 0.48, "LIV-04": 85.0, "LIV-05": 4.27, "LIV-06": 30.0, "GRN-01": 25.4, "GRN-02": 48.8, "GRN-05": 61.7, "SMT-01": 320.3, "SMT-03": 87.5, "SMT-05": 97.9, "CMP-01": 51292, "CMP-04": null, "CMP-06": 258, "TAL-01": 67.3, "TAL-02": 8, "TAL-06": 3.9, "CON-01": 142, "CON-03": null, "CON-05": null, "LIV-02": 74.6, "LIV-07": 64.5, "CON-04": 40.4, "LIV-03": 76.82, "TAL-04": 9.47, "SMT-02": 94.0, "SMT-06": 77.1, "GRN-03": 3.11, "CMP-03": 54.0, "GRN-07": 2.0, "SMT-04": 75.0, "GRN-06": 206.0, "CMP-02": 92111.0, "CMP-05": 3.9, "TAL-03": null, "LIV-08": 1.1},
"Melbourne":{"LIV-01": 0.85, "LIV-04": 84.1, "LIV-05": 4.72, "LIV-06": 7.5, "GRN-01": 7.9, "GRN-02": 84.4, "GRN-05": 47.9, "SMT-01": 248.8, "SMT-03": null, "SMT-05": 96.1, "CMP-01": 40848, "CMP-04": 27.3, "CMP-06": 306, "TAL-01": 53.5, "TAL-02": 6, "TAL-06": 35.7, "CON-01": 40, "CON-03": null, "CON-05": 52.9, "LIV-02": 55.7, "LIV-07": 77.3, "CON-04": 42.0, "LIV-03": 79.44, "TAL-04": null, "SMT-02": 89.0, "SMT-06": 53.6, "GRN-03": 2.92, "CMP-03": 10.0, "GRN-07": 3.0, "SMT-04": 77.0, "GRN-06": 149.0, "CMP-02": null, "CMP-05": 6.8, "TAL-03": null, "LIV-08": 0.3},
"Amsterdam":{"LIV-01": 0.69, "LIV-04": 82.1, "LIV-05": 4.89, "LIV-06": 9.9, "GRN-01": 8.9, "GRN-02": 77.6, "GRN-05": 25.0, "SMT-01": 317.8, "SMT-03": 78.13, "SMT-05": 97.0, "CMP-01": 87028, "CMP-04": null, "CMP-06": null, "TAL-01": 52.2, "TAL-02": 2, "TAL-06": 37.6, "CON-01": 285, "CON-03": null, "CON-05": 45.7, "LIV-02": 70.0, "LIV-07": 81.4, "CON-04": 22.8, "LIV-03": 73.21, "TAL-04": 6.56, "SMT-02": 99.0, "SMT-06": 65.5, "GRN-03": 2.69, "CMP-03": 17.0, "GRN-07": 3.0, "SMT-04": 82.0, "GRN-06": 141.0, "CMP-02": 136917.0, "CMP-05": 9.8, "TAL-03": 58.4, "LIV-08": 0.1},
"London":{"LIV-01": 1.15, "LIV-04": 82.5, "LIV-05": 4.55, "LIV-06": 16.7, "GRN-01": 11.2, "GRN-02": 87.1, "GRN-05": 32.6, "SMT-01": 316.7, "SMT-03": 87.5, "SMT-05": 95.5, "CMP-01": 72186, "CMP-04": 116.3, "CMP-06": 1867, "TAL-01": 74.1, "TAL-02": 9, "TAL-06": 40.6, "CON-01": 411, "CON-03": null, "CON-05": 51.6, "LIV-02": 44.7, "LIV-07": 88.0, "CON-04": 44.7, "LIV-03": 70.3, "TAL-04": 4.47, "SMT-02": 85.0, "SMT-06": 66.0, "GRN-03": 2.06, "CMP-03": 57.0, "GRN-07": 3.0, "SMT-04": 70.0, "GRN-06": 149.0, "CMP-02": 142615.0, "CMP-05": null, "TAL-03": 61.2, "LIV-08": 0.1},
"New York":{"LIV-01": 5.76, "LIV-04": 77.7, "LIV-05": 5.02, "LIV-06": 10.9, "GRN-01": 7.1, "GRN-02": 71.0, "GRN-05": 21.8, "SMT-01": 391.7, "SMT-03": 90.63, "SMT-05": 94.7, "CMP-01": 91990, "CMP-04": 86.9, "CMP-06": 1717, "TAL-01": 53.0, "TAL-02": 2, "TAL-06": 30.8, "CON-01": 153, "CON-03": 61.6, "CON-05": 48.8, "LIV-02": 49.2, "LIV-07": 100.0, "CON-04": 43.3, "LIV-03": 64.27, "TAL-04": 4.94, "SMT-02": 96.0, "SMT-06": 64.2, "GRN-03": 4.22, "CMP-03": 90.0, "GRN-07": 3.0, "SMT-04": 78.0, "GRN-06": 438.0, "CMP-02": 188044.0, "CMP-05": 0.5, "TAL-03": null, "LIV-08": 2.0},
"Paris":{"LIV-01": 1.34, "LIV-04": 84.1, "LIV-05": 9.38, "LIV-06": 17.0, "GRN-01": 9.3, "GRN-02": 51.6, "GRN-05": 20.0, "SMT-01": 441.5, "SMT-03": 81.25, "SMT-05": 88.7, "CMP-01": 83089, "CMP-04": 42.0, "CMP-06": 516, "TAL-01": 58.6, "TAL-02": 7, "TAL-06": 22.7, "CON-01": 305, "CON-03": 83.0, "CON-05": 40.0, "LIV-02": 42.1, "LIV-07": 78.4, "CON-04": 41.1, "LIV-03": 61.77, "TAL-04": 5.37, "SMT-02": 93.0, "SMT-06": 64.1, "GRN-03": 1.64, "CMP-03": 44.0, "GRN-07": 3.0, "SMT-04": 63.0, "GRN-06": 201.0, "CMP-02": 159930.0, "CMP-05": 4.3, "TAL-03": 53.8, "LIV-08": 11.2},
"Toronto":{"LIV-01": 1.98, "LIV-04": 81.8, "LIV-05": 2.21, "LIV-06": 11.6, "GRN-01": 9.4, "GRN-02": 91.7, "GRN-05": 50.6, "SMT-01": 494.5, "SMT-03": 79.17, "SMT-05": 94.4, "CMP-01": 44561, "CMP-04": 52.9, "CMP-06": 433, "TAL-01": 71.0, "TAL-02": 2, "TAL-06": 46.6, "CON-01": 172, "CON-03": 55.7, "CON-05": 47.7, "LIV-02": 56.3, "LIV-07": 65.6, "CON-04": 43.9, "LIV-03": 76.12, "TAL-04": 5.62, "SMT-02": 94.3, "SMT-06": 60.5, "GRN-03": 6.72, "CMP-03": 28.0, "GRN-07": 2.0, "SMT-04": 78.0, "GRN-06": null, "CMP-02": null, "CMP-05": 9.2, "TAL-03": null, "LIV-08": 1.4},
"Berlin":{"LIV-01": 0.91, "LIV-04": 81.2, "LIV-05": 5.51, "LIV-06": 11.1, "GRN-01": 11.3, "GRN-02": 68.2, "GRN-05": 30.8, "SMT-01": 212.6, "SMT-03": 88.54, "SMT-05": 93.5, "CMP-01": 59205, "CMP-04": 49.4, "CMP-06": 452, "TAL-01": 48.1, "TAL-02": 3, "TAL-06": 24.9, "CON-01": 161, "CON-03": 70.5, "CON-05": 44.6, "LIV-02": 55.4, "LIV-07": 72.5, "CON-04": 33.4, "LIV-03": 68.02, "TAL-04": 5.93, "SMT-02": 98.0, "SMT-06": 65.1, "GRN-03": 3.66, "CMP-03": 2.0, "GRN-07": 3.0, "SMT-04": 79.0, "GRN-06": 115.0, "CMP-02": 108606.0, "CMP-05": 3.9, "TAL-03": 56.0, "LIV-08": 6.2},
"Barcelona":{"LIV-01": 0.69, "LIV-04": 84.2, "LIV-05": 4.47, "LIV-06": 13.8, "GRN-01": 10.9, "GRN-02": null, "GRN-05": 42.1, "SMT-01": 338.8, "SMT-03": null, "SMT-05": 95.8, "CMP-01": 52064, "CMP-04": 28.5, "CMP-06": 222, "TAL-01": 46.9, "TAL-02": 5, "TAL-06": 27.3, "CON-01": 202, "CON-03": 66.9, "CON-05": 41.1, "LIV-02": 47.9, "LIV-07": 59.9, "CON-04": 29.8, "LIV-03": 65.84, "TAL-04": 3.65, "SMT-02": 85.4, "SMT-06": 67.6, "GRN-03": 1.48, "CMP-03": 1.0, "GRN-07": 3.0, "SMT-04": 77.0, "GRN-06": 128.0, "CMP-02": 106109.0, "CMP-05": 11.3, "TAL-03": 38.0, "LIV-08": 5.7},
"Dubai":{"LIV-01": 0.69, "LIV-04": 83.1, "LIV-05": 3.35, "LIV-06": 7.8, "GRN-01": 35.0, "GRN-02": 40.6, "GRN-05": null, "SMT-01": 359.0, "SMT-03": 90.63, "SMT-05": 100.0, "CMP-01": null, "CMP-04": null, "CMP-06": 661, "TAL-01": 41.0, "TAL-02": 0, "TAL-06": null, "CON-01": 310, "CON-03": 24.8, "CON-05": 42.7, "LIV-02": 83.8, "LIV-07": 62.5, "CON-04": 36.3, "LIV-03": 79.37, "TAL-04": 2.61, "SMT-02": 99.46, "SMT-06": 81.8, "GRN-03": 13.93, "CMP-03": 5.0, "GRN-07": 3.0, "SMT-04": 85.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.4},
"San Francisco":{"LIV-01": 5.76, "LIV-04": 79.0, "LIV-05": 3.02, "LIV-06": 6.5, "GRN-01": 7.4, "GRN-02": null, "GRN-05": 53.1, "SMT-01": 367.7, "SMT-03": null, "SMT-05": 94.7, "CMP-01": 146853, "CMP-04": 320.8, "CMP-06": 20260, "TAL-01": 46.9, "TAL-02": 0, "TAL-06": 32.4, "CON-01": 60, "CON-03": 29.6, "CON-05": 49.7, "LIV-02": 39.5, "LIV-07": 94.9, "CON-04": 49.0, "LIV-03": 64.27, "TAL-04": 4.94, "SMT-02": 96.0, "SMT-06": 60.5, "GRN-03": 3.66, "CMP-03": 63.0, "GRN-07": 3.0, "SMT-04": 78.0, "GRN-06": null, "CMP-02": 276597.0, "CMP-05": -2.1, "TAL-03": null, "LIV-08": 6.5},
"Stockholm":{"SMT-01": 302.2, "CMP-01": 81394, "LIV-04": 85.0, "TAL-01": 60.0, "LIV-05": 4.91, "LIV-01": 1.15, "SMT-05": 95.8, "GRN-01": 4.9, "GRN-02": 86.0, "LIV-06": 12.5, "CON-05": 42.8, "CON-03": 70.1, "SMT-03": 80.21, "TAL-02": 2, "CON-01": 142, "TAL-06": 27.2, "GRN-05": 31.0, "CMP-04": null, "CMP-06": 1167, "LIV-02": 53.8, "LIV-07": 79.1, "CON-04": 34.1, "LIV-03": 76.2, "TAL-04": 8.91, "SMT-02": 98.2, "SMT-06": 72.4, "GRN-03": 0.66, "CMP-03": 22.0, "GRN-07": 2.0, "SMT-04": 83.0, "GRN-06": 184.0, "CMP-02": 141198.0, "CMP-05": 2.2, "TAL-03": 64.3, "LIV-08": 0.7},
"Oslo":{"SMT-01": 281.9, "CMP-01": 63394, "LIV-04": 83.3, "TAL-01": 56.5, "LIV-05": 6.8, "LIV-01": 0.72, "SMT-05": 99.0, "GRN-01": 8.5, "GRN-02": 56.0, "LIV-06": 11.0, "CON-05": 33.2, "CON-03": null, "SMT-03": 78.13, "TAL-02": 1, "CON-01": 125, "TAL-06": 28.1, "GRN-05": 43.4, "CMP-04": null, "CMP-06": 297, "LIV-02": 65.7, "LIV-07": 92.1, "CON-04": 27.8, "LIV-03": 81.32, "TAL-04": 7.45, "SMT-02": 99.7, "SMT-06": 78.4, "GRN-03": 1.04, "CMP-03": 5.0, "GRN-07": 0.0, "SMT-04": 89.0, "GRN-06": 161.0, "CMP-02": 112828.0, "CMP-05": 8.0, "TAL-03": 56.4, "LIV-08": 0.7},
"Helsinki":{"SMT-01": 238.8, "CMP-01": 66107, "LIV-04": 81.9, "TAL-01": 48.1, "LIV-05": 3.72, "LIV-01": 0.98, "SMT-05": 93.7, "GRN-01": 5.4, "GRN-02": null, "LIV-06": 11.4, "CON-05": 51.9, "CON-03": 78.0, "SMT-03": 81.25, "TAL-02": 1, "CON-01": 118, "TAL-06": 17.5, "GRN-05": 45.0, "CMP-04": null, "CMP-06": 688, "LIV-02": 74.9, "LIV-07": 73.9, "CON-04": 24.1, "LIV-03": 80.12, "TAL-04": 8.31, "SMT-02": 99.99, "SMT-06": 78.4, "GRN-03": 3.2, "CMP-03": 10.0, "GRN-07": 2.0, "SMT-04": 89.0, "GRN-06": 130.0, "CMP-02": 116570.0, "CMP-05": 3.0, "TAL-03": 52.6, "LIV-08": 12.7},
"Madrid":{"SMT-01": 382.3, "CMP-01": 59768, "LIV-04": 85.4, "TAL-01": 50.0, "LIV-05": 6.18, "LIV-01": 0.69, "SMT-05": 95.8, "GRN-01": 10.3, "GRN-02": 63.1, "LIV-06": 13.2, "CON-05": 38.0, "CON-03": 68.8, "SMT-03": 92.71, "TAL-02": 4, "CON-01": 197, "TAL-06": 22.7, "GRN-05": 47.7, "CMP-04": 21.0, "CMP-06": 179, "LIV-02": 71.0, "LIV-07": 59.1, "CON-04": 28.2, "LIV-03": 65.84, "TAL-04": 3.65, "SMT-02": 85.4, "SMT-06": 70.6, "GRN-03": 1.03, "CMP-03": 12.0, "GRN-07": 2.0, "SMT-04": 77.0, "GRN-06": 128.0, "CMP-02": 110651.0, "CMP-05": 10.6, "TAL-03": 45.7, "LIV-08": 3.2},
"Milan":{"SMT-01": 429.2, "CMP-01": 82014, "LIV-04": 84.7, "TAL-01": 23.6, "LIV-05": 5.59, "LIV-01": 0.57, "SMT-05": 89.2, "GRN-01": 20.4, "GRN-02": 76.2, "LIV-06": 18.2, "CON-05": 49.4, "CON-03": 50.4, "SMT-03": null, "TAL-02": 4, "CON-01": 244, "TAL-06": 15.0, "GRN-05": 63.33, "CMP-04": null, "CMP-06": 344, "LIV-02": 46.0, "LIV-07": 74.3, "CON-04": 35.9, "LIV-03": 71.17, "TAL-04": 2.86, "SMT-02": 90.0, "SMT-06": 70.7, "GRN-03": 2.11, "CMP-03": 11.0, "GRN-07": 2.0, "SMT-04": 76.0, "GRN-06": 265.0, "CMP-02": 148811.0, "CMP-05": 2.2, "TAL-03": 34.4, "LIV-08": 9.2},
"Rome":{"SMT-01": 376.5, "CMP-01": 65690, "LIV-04": 83.6, "TAL-01": 28.5, "LIV-05": 6.77, "LIV-01": 0.57, "SMT-05": 89.2, "GRN-01": 11.8, "GRN-02": 80.0, "LIV-06": 14.9, "CON-05": 45.2, "CON-03": 71.7, "SMT-03": 81.25, "TAL-02": 2, "CON-01": 219, "TAL-06": 13.6, "GRN-05": 48.03, "CMP-04": null, "CMP-06": 58, "LIV-02": 53.3, "LIV-07": 60.0, "CON-04": 35.2, "LIV-03": 71.17, "TAL-04": 2.86, "SMT-02": 90.0, "SMT-06": 61.9, "GRN-03": 3.08, "CMP-03": 6.0, "GRN-07": 2.0, "SMT-04": 76.0, "GRN-06": 186.0, "CMP-02": 130468.0, "CMP-05": 1.4, "TAL-03": 43.9, "LIV-08": 8.3},
"Munich":{"SMT-01": 221.7, "CMP-01": 102244, "LIV-04": 83.1, "TAL-01": 38.6, "LIV-05": 4.56, "LIV-01": 0.91, "SMT-05": 93.5, "GRN-01": 7.9, "GRN-02": null, "LIV-06": 13.1, "CON-05": 43.7, "CON-03": 81.9, "SMT-03": null, "TAL-02": 2, "CON-01": 202, "TAL-06": 31.9, "GRN-05": 55.3, "CMP-04": 52.5, "CMP-06": 1280, "LIV-02": 78.3, "LIV-07": 77.4, "CON-04": 28.2, "LIV-03": 68.02, "TAL-04": 5.93, "SMT-02": 98.0, "SMT-06": 69.0, "GRN-03": 3.17, "CMP-03": 10.0, "GRN-07": 2.0, "SMT-04": 79.0, "GRN-06": null, "CMP-02": 151118.0, "CMP-05": 1.3, "TAL-03": 46.4, "LIV-08": 4.8},
"Frankfurt":{"SMT-01": 232.1, "CMP-01": 82688, "LIV-04": 81.9, "TAL-01": 35.6, "LIV-05": 4.27, "LIV-01": 0.91, "SMT-05": 93.5, "GRN-01": 8.7, "GRN-02": null, "LIV-06": 7.7, "CON-05": 42.3, "CON-03": null, "SMT-03": null, "TAL-02": 1, "CON-01": 284, "TAL-06": 35.5, "GRN-05": 37.6, "CMP-04": 7.8, "CMP-06": 18, "LIV-02": 54.5, "LIV-07": 71.5, "CON-04": 22.8, "LIV-03": 68.02, "TAL-04": 5.93, "SMT-02": 98.0, "SMT-06": null, "GRN-03": 3.56, "CMP-03": 5.0, "GRN-07": 3.0, "SMT-04": 79.0, "GRN-06": null, "CMP-02": 132741.0, "CMP-05": -0.2, "TAL-03": 48.8, "LIV-08": 8.1},
"Hamburg":{"SMT-01": 196.7, "CMP-01": 77768, "LIV-04": 80.9, "TAL-01": 43.0, "LIV-05": 6.4, "LIV-01": 0.91, "SMT-05": 93.5, "GRN-01": 9.1, "GRN-02": 78.2, "LIV-06": 11.1, "CON-05": 49.3, "CON-03": 68.8, "SMT-03": null, "TAL-02": 1, "CON-01": 117, "TAL-06": 24.6, "GRN-05": 45.8, "CMP-04": 13.6, "CMP-06": 34, "LIV-02": 59.3, "LIV-07": 70.8, "CON-04": 30.5, "LIV-03": 68.02, "TAL-04": 5.93, "SMT-02": 98.0, "SMT-06": 65.2, "GRN-03": 3.5, "CMP-03": 2.0, "GRN-07": 3.0, "SMT-04": 79.0, "GRN-06": null, "CMP-02": 132626.0, "CMP-05": 3.1, "TAL-03": 50.5, "LIV-08": 6.2},
"Brussels":{"SMT-01": 266.9, "CMP-01": 78040, "LIV-04": 82.2, "TAL-01": 56.9, "LIV-05": 4.44, "LIV-01": 1.08, "SMT-05": 95.8, "GRN-01": 7.6, "GRN-02": 85.8, "LIV-06": 7.2, "CON-05": 46.2, "CON-03": 89.0, "SMT-03": 73.96, "TAL-02": 2, "CON-01": 249, "TAL-06": 43.5, "GRN-05": 35.0, "CMP-04": 15.3, "CMP-06": 55, "LIV-02": 44.1, "LIV-07": 71.9, "CON-04": 36.4, "LIV-03": 67.97, "TAL-04": 5.99, "SMT-02": 99.8, "SMT-06": 63.8, "GRN-03": 2.98, "CMP-03": 6.0, "GRN-07": 1.0, "SMT-04": 54.0, "GRN-06": 96.0, "CMP-02": 166099.0, "CMP-05": null, "TAL-03": 52.1, "LIV-08": 10.0},
"Dublin":{"SMT-01": 337.0, "CMP-01": 141694, "LIV-04": 83.3, "TAL-01": 61.0, "LIV-05": null, "LIV-01": 0.65, "SMT-05": 97.2, "GRN-01": 7.3, "GRN-02": 84.2, "LIV-06": 9.0, "CON-05": 72.9, "CON-03": 66.3, "SMT-03": 68.75, "TAL-02": 3, "CON-01": 199, "TAL-06": 26.6, "GRN-05": 42.0, "CMP-04": null, "CMP-06": 456, "LIV-02": 45.9, "LIV-07": 76.3, "CON-04": 40.4, "LIV-03": 78.02, "TAL-04": 5.75, "SMT-02": 86.0, "SMT-06": 62.0, "GRN-03": 3.18, "CMP-03": 15.0, "GRN-07": 3.0, "SMT-04": 77.0, "GRN-06": null, "CMP-02": 256297.0, "CMP-05": 15.6, "TAL-03": 55.6, "LIV-08": 5.1},
"Lisbon":{"SMT-01": 354.4, "CMP-01": 50408, "LIV-04": 81.2, "TAL-01": 43.3, "LIV-05": 8.37, "LIV-01": 0.72, "SMT-05": 88.5, "GRN-01": 7.6, "GRN-02": 87.4, "LIV-06": 18.7, "CON-05": 39.0, "CON-03": 43.6, "SMT-03": 70.83, "TAL-02": 2, "CON-01": 146, "TAL-06": 17.3, "GRN-05": 26.0, "CMP-04": null, "CMP-06": 82, "LIV-02": 67.1, "LIV-07": 55.2, "CON-04": 34.6, "LIV-03": 75.07, "TAL-04": 5.98, "SMT-02": 98.7, "SMT-06": 65.9, "GRN-03": 0.92, "CMP-03": 3.0, "GRN-07": 3.0, "SMT-04": 83.0, "GRN-06": 111.0, "CMP-02": 92934.0, "CMP-05": 2.7, "TAL-03": 48.6, "LIV-08": 14.3},
"Prague":{"SMT-01": 258.9, "CMP-01": 83056, "LIV-04": 81.1, "TAL-01": 54.8, "LIV-05": 8.24, "LIV-01": 0.77, "SMT-05": 87.7, "GRN-01": 13.4, "GRN-02": 83.5, "LIV-06": 18.2, "CON-05": 53.5, "CON-03": 89.2, "SMT-03": 67.71, "TAL-02": 2, "CON-01": 165, "TAL-06": 15.5, "GRN-05": 32.3, "CMP-04": null, "CMP-06": 69, "LIV-02": 75.3, "LIV-07": 57.3, "CON-04": 31.8, "LIV-03": 82.5, "TAL-04": 4.5, "SMT-02": 98.6, "SMT-06": 71.9, "GRN-03": 2.06, "CMP-03": 1.0, "GRN-07": 1.0, "SMT-04": 63.0, "GRN-06": 108.0, "CMP-02": 128349.0, "CMP-05": 0.3, "TAL-03": 57.8, "LIV-08": 7.9},
"Warsaw":{"SMT-01": 362.9, "CMP-01": 81920, "LIV-04": 81.0, "TAL-01": 65.3, "LIV-05": 6.3, "LIV-01": 0.8, "SMT-05": 88.6, "GRN-01": 14.7, "GRN-02": 88.0, "LIV-06": 11.7, "CON-05": 51.3, "CON-03": 70.1, "SMT-03": 77.08, "TAL-02": 2, "CON-01": 152, "TAL-06": 5.7, "GRN-05": 28.5, "CMP-04": null, "CMP-06": 91, "LIV-02": 74.7, "LIV-07": 52.7, "CON-04": 34.8, "LIV-03": 74.41, "TAL-04": 3.68, "SMT-02": 91.0, "SMT-06": 69.9, "GRN-03": 2.44, "CMP-03": 4.0, "GRN-07": 2.0, "SMT-04": 90.0, "GRN-06": 122.0, "CMP-02": 139824.0, "CMP-05": 5.1, "TAL-03": 55.2, "LIV-08": 6.6},
"Istanbul":{"SMT-01": 251.2, "CMP-01": 56428, "LIV-04": 77.1, "TAL-01": 31.8, "LIV-05": 2.96, "LIV-01": 3.23, "SMT-05": 89.8, "GRN-01": 50.5, "GRN-02": 59.8, "LIV-06": 10.1, "CON-05": 62.0, "CON-03": null, "SMT-03": 89.58, "TAL-02": 4, "CON-01": 322, "TAL-06": null, "GRN-05": null, "CMP-04": null, "CMP-06": 40, "LIV-02": 52.0, "LIV-07": 46.6, "CON-04": 50.7, "LIV-03": 49.31, "TAL-04": 2.64, "SMT-02": 0.0, "SMT-06": 61.8, "GRN-03": 1.52, "CMP-03": 10.0, "GRN-07": 3.0, "SMT-04": 64.0, "GRN-06": 147.0, "CMP-02": null, "CMP-05": 14.6, "TAL-03": 31.2, "LIV-08": 0.4},
"Montreal":{"SMT-01": 334.2, "CMP-01": 38730, "LIV-04": 82.5, "TAL-01": 59.0, "LIV-05": 2.6, "LIV-01": 1.98, "SMT-05": 94.4, "GRN-01": 8.6, "GRN-02": 91.8, "LIV-06": 7.6, "CON-05": 41.3, "CON-03": 52.7, "SMT-03": null, "TAL-02": 3, "CON-01": 139, "TAL-06": 24.3, "GRN-05": 49.0, "CMP-04": 24.4, "CMP-06": 226, "LIV-02": 67.0, "LIV-07": 58.3, "CON-04": 40.1, "LIV-03": 76.12, "TAL-04": 5.62, "SMT-02": 94.3, "SMT-06": 63.4, "GRN-03": 5.59, "CMP-03": 11.0, "GRN-07": 3.0, "SMT-04": 78.0, "GRN-06": null, "CMP-02": null, "CMP-05": 4.3, "TAL-03": null, "LIV-08": 2.3},
"Vancouver":{"SMT-01": 374.2, "CMP-01": 45902, "LIV-04": 81.5, "TAL-01": 64.0, "LIV-05": 2.71, "LIV-01": 1.98, "SMT-05": 94.4, "GRN-01": 6.0, "GRN-02": null, "LIV-06": 11.7, "CON-05": 56.5, "CON-03": 53.7, "SMT-03": null, "TAL-02": 1, "CON-01": 74, "TAL-06": 41.8, "GRN-05": 65.0, "CMP-04": 56.4, "CMP-06": 600, "LIV-02": 57.2, "LIV-07": 68.5, "CON-04": 35.9, "LIV-03": 76.12, "TAL-04": 5.62, "SMT-02": 94.3, "SMT-06": 56.0, "GRN-03": 4.27, "CMP-03": 4.0, "GRN-07": 3.0, "SMT-04": 78.0, "GRN-06": 337.0, "CMP-02": null, "CMP-05": 8.6, "TAL-03": null, "LIV-08": 2.9},
"Chicago":{"SMT-01": 392.9, "CMP-01": 75524, "LIV-04": 76.8, "TAL-01": 50.9, "LIV-05": 3.7, "LIV-01": 5.76, "SMT-05": 94.7, "GRN-01": 8.7, "GRN-02": 47.8, "LIV-06": 3.2, "CON-05": 46.1, "CON-03": 43.2, "SMT-03": null, "TAL-02": 2, "CON-01": 81, "TAL-06": 19.4, "GRN-05": 9.0, "CMP-04": 29.4, "CMP-06": 210, "LIV-02": 34.8, "LIV-07": 75.8, "CON-04": 41.7, "LIV-03": 64.27, "TAL-04": 4.94, "SMT-02": 96.0, "SMT-06": 62.2, "GRN-03": 5.57, "CMP-03": 35.0, "GRN-07": 2.0, "SMT-04": 78.0, "GRN-06": 280.0, "CMP-02": 151167.0, "CMP-05": -0.9, "TAL-03": null, "LIV-08": 1.6},
"Boston":{"SMT-01": 361.6, "CMP-01": 101761, "LIV-04": 79.0, "TAL-01": 58.2, "LIV-05": 5.52, "LIV-01": 5.76, "SMT-05": 94.7, "GRN-01": 6.4, "GRN-02": 68.2, "LIV-06": 7.9, "CON-05": 42.1, "CON-03": 47.6, "SMT-03": null, "TAL-02": 2, "CON-01": 63, "TAL-06": 20.7, "GRN-05": 25.0, "CMP-04": 126.9, "CMP-06": 2714, "LIV-02": 59.7, "LIV-07": 89.0, "CON-04": 45.0, "LIV-03": 64.27, "TAL-04": 4.94, "SMT-02": 96.0, "SMT-06": 59.0, "GRN-03": 5.19, "CMP-03": 22.0, "GRN-07": 3.0, "SMT-04": 78.0, "GRN-06": null, "CMP-02": 189747.0, "CMP-05": -0.9, "TAL-03": null, "LIV-08": 3.4},
"Los Angeles":{"SMT-01": 392.1, "CMP-01": 70646, "LIV-04": 79.0, "TAL-01": 46.9, "LIV-05": 3.02, "LIV-01": 5.76, "SMT-05": 94.7, "GRN-01": 10.5, "GRN-02": null, "LIV-06": 8.2, "CON-05": 59.8, "CON-03": 5.7, "SMT-03": null, "TAL-02": 2, "CON-01": 81, "TAL-06": 33.4, "GRN-05": null, "CMP-04": 45.6, "CMP-06": 876, "LIV-02": 46.2, "LIV-07": 84.5, "CON-04": 57.1, "LIV-03": 64.27, "TAL-04": 4.94, "SMT-02": 96.0, "SMT-06": 59.8, "GRN-03": 4.68, "CMP-03": 16.0, "GRN-07": 3.0, "SMT-04": 78.0, "GRN-06": 265.0, "CMP-02": 147690.0, "CMP-05": -0.5, "TAL-03": null, "LIV-08": 1.8},
"Seattle":{"SMT-01": 410.0, "CMP-01": 111516, "LIV-04": 79.2, "TAL-01": 52.9, "LIV-05": 2.98, "LIV-01": 5.76, "SMT-05": 94.7, "GRN-01": 6.1, "GRN-02": 63.5, "LIV-06": 4.8, "CON-05": 44.9, "CON-03": 26.1, "SMT-03": null, "TAL-02": 1, "CON-01": 38, "TAL-06": 22.1, "GRN-05": 53.4, "CMP-04": 73.8, "CMP-06": 1650, "LIV-02": 44.7, "LIV-07": 91.4, "CON-04": 42.9, "LIV-03": 64.27, "TAL-04": 4.94, "SMT-02": 96.0, "SMT-06": 56.1, "GRN-03": 4.13, "CMP-03": 14.0, "GRN-07": 3.0, "SMT-04": 78.0, "GRN-06": null, "CMP-02": 206967.0, "CMP-05": 6.7, "TAL-03": null, "LIV-08": 2.8},
"Washington DC":{"SMT-01": 362.5, "CMP-01": 83988, "LIV-04": 78.0, "TAL-01": 70.7, "LIV-05": 12.02, "LIV-01": 5.76, "SMT-05": 94.7, "GRN-01": 6.3, "GRN-02": 52.8, "LIV-06": 4.3, "CON-05": 37.3, "CON-03": 33.1, "SMT-03": null, "TAL-02": 2, "CON-01": 70, "TAL-06": 24.7, "GRN-05": 27.93, "CMP-04": 36.9, "CMP-06": 556, "LIV-02": 40.3, "LIV-07": 92.1, "CON-04": 41.2, "LIV-03": 64.27, "TAL-04": 4.94, "SMT-02": 96.0, "SMT-06": 60.2, "GRN-03": 3.21, "CMP-03": 28.0, "GRN-07": 2.0, "SMT-04": 78.0, "GRN-06": null, "CMP-02": 160101.0, "CMP-05": 1.4, "TAL-03": null, "LIV-08": 14.8},
"Sydney":{"SMT-01": 239.5, "CMP-01": 45152, "LIV-04": 84.1, "TAL-01": 52.5, "LIV-05": 4.58, "LIV-01": 0.85, "SMT-05": 96.1, "GRN-01": null, "GRN-02": 33.4, "LIV-06": 12.5, "CON-05": 43.7, "CON-03": 49.2, "SMT-03": 77.08, "TAL-02": 4, "CON-01": 65, "TAL-06": 38.6, "GRN-05": 52.0, "CMP-04": 40.1, "CMP-06": 250, "LIV-02": 66.2, "LIV-07": 79.2, "CON-04": 43.5, "LIV-03": 79.44, "TAL-04": null, "SMT-02": 89.0, "SMT-06": 65.9, "GRN-03": 1.93, "CMP-03": 14.0, "GRN-07": 3.0, "SMT-04": 77.0, "GRN-06": 206.0, "CMP-02": null, "CMP-05": 5.1, "TAL-03": null, "LIV-08": 0.1},
"Auckland":{"SMT-01": 283.4, "CMP-01": 55906, "LIV-04": 82.7, "TAL-01": 45.5, "LIV-05": 3.47, "LIV-01": 1.46, "SMT-05": 93.5, "GRN-01": 5.5, "GRN-02": 88.4, "LIV-06": 10.5, "CON-05": 42.2, "CON-03": 37.6, "SMT-03": 80.21, "TAL-02": 2, "CON-01": 46, "TAL-06": 42.5, "GRN-05": 27.0, "CMP-04": null, "CMP-06": 166, "LIV-02": 49.4, "LIV-07": 64.4, "CON-04": 37.4, "LIV-03": 85.55, "TAL-04": 5.44, "SMT-02": 40.44, "SMT-06": 55.3, "GRN-03": 1.42, "CMP-03": 0.0, "GRN-07": 3.0, "SMT-04": 76.0, "GRN-06": null, "CMP-02": 101779.0, "CMP-05": 9.3, "TAL-03": null, "LIV-08": 0.0},
"Osaka":{"SMT-01": 295.1, "CMP-01": 41497, "LIV-04": 84.2, "TAL-01": 56.9, "LIV-05": 2.92, "LIV-01": 0.23, "SMT-05": 85.5, "GRN-01": 9.4, "GRN-02": 72.2, "LIV-06": 10.6, "CON-05": 42.9, "CON-03": null, "SMT-03": null, "TAL-02": 1, "CON-01": null, "TAL-06": 6.8, "GRN-05": 9.5, "CMP-04": 3.7, "CMP-06": 21, "LIV-02": 67.0, "LIV-07": 42.7, "CON-04": null, "LIV-03": 85.27, "TAL-04": 5.61, "SMT-02": 96.6, "SMT-06": 51.2, "GRN-03": 4.41, "CMP-03": 14.0, "GRN-07": 3.0, "SMT-04": 71.0, "GRN-06": 246.0, "CMP-02": 76746.0, "CMP-05": 1.7, "TAL-03": null, "LIV-08": 1.7},
"Tel Aviv":{"SMT-01": 366.9, "CMP-01": null, "LIV-04": 83.1, "TAL-01": 60.4, "LIV-05": 4.9, "LIV-01": 1.63, "SMT-05": 88.2, "GRN-01": 17.4, "GRN-02": 65.7, "LIV-06": 20.0, "CON-05": null, "CON-03": 87.9, "SMT-03": null, "TAL-02": 1, "CON-01": 114, "TAL-06": 23.5, "GRN-05": 36.0, "CMP-04": null, "CMP-06": 2111, "LIV-02": 73.8, "LIV-07": 103.9, "CON-04": 36.6, "LIV-03": 48.17, "TAL-04": null, "SMT-02": null, "SMT-06": 62.9, "GRN-03": 1.26, "CMP-03": 11.0, "GRN-07": 2.0, "SMT-04": 74.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 15.6},
"Hong Kong":{"SMT-01": 431.6, "TAL-02": 5, "CON-03": 52.2, "CON-05": 47.7, "CMP-01": 66154, "LIV-01": 0.38, "SMT-05": 95.8, "GRN-01": 19.8, "GRN-02": 95.7, "SMT-03": null, "TAL-06": 38.3, "CON-01": 149.0, "GRN-05": 34.0, "CMP-04": 16.5, "CMP-06": 413, "LIV-04": null, "LIV-05": 2.2, "TAL-01": 35.7, "LIV-06": 35.2, "LIV-02": 78.2, "LIV-07": 76.4, "CON-04": 41.9, "LIV-03": 76.67, "TAL-04": 5.87, "SMT-02": 99.0, "SMT-06": 68.0, "GRN-03": 1.35, "CMP-03": 41.0, "GRN-07": 3.0, "SMT-04": 88.0, "GRN-06": 234.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.7},
"Taipei":{"SMT-01": 258.2, "TAL-02": 4, "CON-03": null, "CON-05": 43.6, "CMP-01": null, "LIV-01": 0.32, "SMT-05": 88.8, "GRN-01": 15.0, "GRN-02": null, "SMT-03": null, "TAL-06": 3.3, "CON-01": null, "GRN-05": 70.8, "CMP-04": null, "CMP-06": 25, "LIV-04": 83.4, "LIV-05": 4.76, "TAL-01": 66.2, "LIV-06": 31.4, "LIV-02": 83.4, "LIV-07": 54.5, "CON-04": 34.6, "LIV-03": 81.55, "TAL-04": null, "SMT-02": 98.17, "SMT-06": 77.8, "GRN-03": 1.9, "CMP-03": 30.0, "GRN-07": 3.0, "SMT-04": 66.0, "GRN-06": 336.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 4.0},
"Bangkok":{"SMT-01": 375.6, "TAL-02": 1, "CON-03": null, "CON-05": 67.9, "CMP-01": null, "LIV-01": 4.79, "SMT-05": 90.9, "GRN-01": 23.4, "GRN-02": 11.8, "SMT-03": 66.67, "TAL-06": null, "CON-01": 154.0, "GRN-05": null, "CMP-04": null, "CMP-06": 8, "LIV-04": 76.6, "LIV-05": 2.34, "TAL-01": 17.4, "LIV-06": 37.8, "LIV-02": 61.6, "LIV-07": 43.5, "CON-04": 44.4, "LIV-03": 54.22, "TAL-04": 1.59, "SMT-02": 95.0, "SMT-06": 76.1, "GRN-03": 1.71, "CMP-03": 16.0, "GRN-07": 3.0, "SMT-04": 64.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 1.0},
"Kuala Lumpur":{"SMT-01": 272.1, "TAL-02": 4, "CON-03": null, "CON-05": 39.1, "CMP-01": null, "LIV-01": 0.73, "SMT-05": 98.0, "GRN-01": 28.3, "GRN-02": 46.1, "SMT-03": 59.38, "TAL-06": 13.1, "CON-01": 131.0, "GRN-05": 37.9, "CMP-04": null, "CMP-06": 19, "LIV-04": 76.7, "LIV-05": 2.27, "TAL-01": 34.9, "LIV-06": 8.6, "LIV-02": 40.9, "LIV-07": 38.8, "CON-04": 41.6, "LIV-03": 72.47, "TAL-04": 1.22, "SMT-02": 82.4, "SMT-06": 81.0, "GRN-03": 3.8, "CMP-03": 9.0, "GRN-07": 3.0, "SMT-04": 90.0, "GRN-06": 245.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.3},
"Jakarta":{"SMT-01": 97.7, "TAL-02": 0, "CON-03": 22.6, "CON-05": 59.8, "CMP-01": null, "LIV-01": 0.3, "SMT-05": 72.8, "GRN-01": 33.8, "GRN-02": 24.2, "SMT-03": 68.75, "TAL-06": null, "CON-01": 50.0, "GRN-05": null, "CMP-04": null, "CMP-06": 13, "LIV-04": 76.0, "LIV-05": 0.56, "TAL-01": 9.3, "LIV-06": 24.9, "LIV-02": 47.3, "LIV-07": 28.7, "CON-04": 53.5, "LIV-03": 55.49, "TAL-04": 0.4, "SMT-02": 8.92, "SMT-06": 83.2, "GRN-03": 2.01, "CMP-03": 12.0, "GRN-07": 3.0, "SMT-04": 74.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.7},
"Manila":{"SMT-01": 198.9, "TAL-02": 0, "CON-03": null, "CON-05": 57.3, "CMP-01": null, "LIV-01": 4.35, "SMT-05": 67.3, "GRN-01": 15.4, "GRN-02": 28.7, "SMT-03": 60.42, "TAL-06": null, "CON-01": 66.0, "GRN-05": 48.0, "CMP-04": null, "CMP-06": 10, "LIV-04": 69.9, "LIV-05": 0.87, "TAL-01": 32.3, "LIV-06": 34.8, "LIV-02": 35.4, "LIV-07": 34.3, "CON-04": 50.7, "LIV-03": 52.67, "TAL-04": 0.32, "SMT-02": 72.41, "SMT-06": 61.9, "GRN-03": 0.43, "CMP-03": 7.0, "GRN-07": 3.0, "SMT-04": 74.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.5},
"Ho Chi Minh City":{"SMT-01": 269.6, "TAL-02": 0, "CON-03": null, "CON-05": 40.3, "CMP-01": null, "LIV-01": 1.54, "SMT-05": 84.2, "GRN-01": 23.5, "GRN-02": 30.4, "SMT-03": 63.54, "TAL-06": null, "CON-01": 75.0, "GRN-05": null, "CMP-04": null, "CMP-06": 9, "LIV-04": 76.6, "LIV-05": 1.11, "TAL-01": 27.9, "LIV-06": 32.4, "LIV-02": 50.2, "LIV-07": 29.6, "CON-04": 32.1, "LIV-03": 65.99, "TAL-04": 0.84, "SMT-02": 25.5, "SMT-06": 76.3, "GRN-03": 0.92, "CMP-03": 1.0, "GRN-07": 3.0, "SMT-04": 48.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.0},
"Mumbai":{"SMT-01": 93.4, "TAL-02": 1, "CON-03": null, "CON-05": 61.5, "CMP-01": null, "LIV-01": 2.82, "SMT-05": 70.0, "GRN-01": 49.5, "GRN-02": 35.3, "SMT-03": 56.25, "TAL-06": null, "CON-01": 52.0, "GRN-05": null, "CMP-04": 8.7, "CMP-06": 122, "LIV-04": 72.8, "LIV-05": 0.96, "TAL-01": 18.8, "LIV-06": 30.1, "LIV-02": 56.1, "LIV-07": 25.8, "CON-04": 55.2, "LIV-03": 52.47, "TAL-04": 0.26, "SMT-02": 82.15, "SMT-06": 80.9, "GRN-03": 0.79, "CMP-03": 33.0, "GRN-07": 3.0, "SMT-04": 54.0, "GRN-06": 150.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.0},
"Abu Dhabi":{"SMT-01": 348.1, "TAL-02": 1, "CON-03": 60.8, "CON-05": 25.5, "CMP-01": null, "LIV-01": 0.69, "SMT-05": 100.0, "GRN-01": 30.9, "GRN-02": 37.6, "SMT-03": null, "TAL-06": null, "CON-01": 165.0, "GRN-05": 32.0, "CMP-04": null, "CMP-06": 136, "LIV-04": 83.1, "LIV-05": 2.99, "TAL-01": null, "LIV-06": 7.4, "LIV-02": 88.6, "LIV-07": 55.1, "CON-04": 29.8, "LIV-03": 79.37, "TAL-04": 2.61, "SMT-02": 99.46, "SMT-06": 79.1, "GRN-03": 5.08, "CMP-03": 9.0, "GRN-07": 3.0, "SMT-04": 85.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.2},
"Shanghai":{"SMT-01": 458.1, "TAL-02": 5, "CON-03": null, "CON-05": null, "CMP-01": null, "LIV-01": 0.5, "SMT-05": 91.6, "GRN-01": 28.4, "GRN-02": 29.9, "SMT-03": 86.46, "TAL-06": null, "CON-01": 105.0, "GRN-05": 43.2, "CMP-04": 11.7, "CMP-06": 137, "LIV-04": 83.2, "LIV-05": 3.8, "TAL-01": 33.9, "LIV-06": 31.2, "LIV-02": 73.5, "LIV-07": 40.5, "CON-04": 45.1, "LIV-03": 63.28, "TAL-04": 2.11, "SMT-02": 96.0, "SMT-06": 84.8, "GRN-03": 6.58, "CMP-03": 35.0, "GRN-07": 3.0, "SMT-04": 39.0, "GRN-06": 223.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.3},
"Beijing":{"SMT-01": 331.9, "TAL-02": 7, "CON-03": null, "CON-05": null, "CMP-01": null, "LIV-01": 0.5, "SMT-05": 91.6, "GRN-01": 31.0, "GRN-02": null, "SMT-03": null, "TAL-06": null, "CON-01": 124.0, "GRN-05": 39.8, "CMP-04": 19.1, "CMP-06": 281, "LIV-04": 82.5, "LIV-05": 6.34, "TAL-01": 42.0, "LIV-06": 29.7, "LIV-02": 74.4, "LIV-07": 37.9, "CON-04": 43.0, "LIV-03": 63.28, "TAL-04": 2.11, "SMT-02": 96.0, "SMT-06": 84.0, "GRN-03": 2.53, "CMP-03": 79.0, "GRN-07": 3.0, "SMT-04": 39.0, "GRN-06": 100.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.5},
"Shenzhen":{"SMT-01": 314.9, "TAL-02": 2, "CON-03": null, "CON-05": null, "CMP-01": null, "LIV-01": 0.5, "SMT-05": 91.6, "GRN-01": 17.3, "GRN-02": 21.9, "SMT-03": null, "TAL-06": null, "CON-01": 54.0, "GRN-05": null, "CMP-04": 9.2, "CMP-06": 86, "LIV-04": 83.9, "LIV-05": 3.02, "TAL-01": 28.8, "LIV-06": 28.6, "LIV-02": 75.5, "LIV-07": 38.7, "CON-04": 33.7, "LIV-03": 63.28, "TAL-04": 2.11, "SMT-02": 96.0, "SMT-06": 86.7, "GRN-03": 2.25, "CMP-03": 21.0, "GRN-07": 3.0, "SMT-04": 39.0, "GRN-06": 292.0, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.1},
"Delhi":{"SMT-01": 120.5, "TAL-02": 2, "CON-03": null, "CON-05": 55.4, "CMP-01": null, "LIV-01": 2.82, "SMT-05": 70.0, "GRN-01": 107.0, "GRN-02": 43.6, "SMT-03": null, "TAL-06": null, "CON-01": 79.0, "GRN-05": null, "CMP-04": 8.4, "CMP-06": 98, "LIV-04": 74.2, "LIV-05": 0.96, "TAL-01": 24.2, "LIV-06": 16.1, "LIV-02": 41.0, "LIV-07": 22.1, "CON-04": 57.4, "LIV-03": 52.47, "TAL-04": 0.26, "SMT-02": 82.15, "SMT-06": 79.7, "GRN-03": 0.63, "CMP-03": 15.0, "GRN-07": 3.0, "SMT-04": 54.0, "GRN-06": null, "CMP-02": null, "CMP-05": null, "TAL-03": null, "LIV-08": 0.0}
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
   },
   "Stockholm": {
    "value": 1.15,
    "year": "2023",
    "source": "Sweden (SWE) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NCCP/CTS"
   },
   "Oslo": {
    "value": 0.72,
    "year": "2023",
    "source": "Norway (NOR) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: UNSDC/GSH 2019 Revision/SDG/Eurostat/CTS/NP"
   },
   "Helsinki": {
    "value": 0.98,
    "year": "2023",
    "source": "Finland (FIN) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: UNSDC/CTS/SDG"
   },
   "Madrid": {
    "value": 0.69,
    "year": "2023",
    "source": "Spain (ESP) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: WHO Adjusted/Eurostat/CTS/SDG"
   },
   "Milan": {
    "value": 0.57,
    "year": "2023",
    "source": "Italy (ITA) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: UNSDC/CTS/SDG"
   },
   "Rome": {
    "value": 0.57,
    "year": "2023",
    "source": "Italy (ITA) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: UNSDC/CTS/SDG"
   },
   "Munich": {
    "value": 0.91,
    "year": "2023",
    "source": "Germany (DEU) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: SDG/CTS/NP"
   },
   "Frankfurt": {
    "value": 0.91,
    "year": "2023",
    "source": "Germany (DEU) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: SDG/CTS/NP"
   },
   "Hamburg": {
    "value": 0.91,
    "year": "2023",
    "source": "Germany (DEU) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: SDG/CTS/NP"
   },
   "Brussels": {
    "value": 1.08,
    "year": "2021",
    "source": "Belgium (BEL) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: WHO Adjusted/UNSDC/Eurostat/MoI"
   },
   "Dublin": {
    "value": 0.65,
    "year": "2023",
    "source": "Ireland (IRL) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: UNSDC/NP/NSO/CTS/SDG"
   },
   "Lisbon": {
    "value": 0.72,
    "year": "2022",
    "source": "Portugal (PRT) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: MD Adjusted/Eurostat/SDG/GSH 2023 Revision/CTS"
   },
   "Prague": {
    "value": 0.77,
    "year": "2023",
    "source": "Czechia (CZE) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: Eurostat/UNSDC/GSH 2019 Revision/CTS/SDG"
   },
   "Warsaw": {
    "value": 0.8,
    "year": "2023",
    "source": "Poland (POL) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: UNSDC/Eurostat/CTS/SDG"
   },
   "Istanbul": {
    "value": 3.23,
    "year": "2023",
    "source": "Türkiye (TUR) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: CTS"
   },
   "Montreal": {
    "value": 1.98,
    "year": "2023",
    "source": "Canada (CAN) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NSO/OAS/CTS/SDG/GSH 2023 Revision"
   },
   "Vancouver": {
    "value": 1.98,
    "year": "2023",
    "source": "Canada (CAN) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NSO/OAS/CTS/SDG/GSH 2023 Revision"
   },
   "Chicago": {
    "value": 5.76,
    "year": "2023",
    "source": "United States of America (USA) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NP/UNSDC/CTS/GSH 2019 Revision"
   },
   "Boston": {
    "value": 5.76,
    "year": "2023",
    "source": "United States of America (USA) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NP/UNSDC/CTS/GSH 2019 Revision"
   },
   "Los Angeles": {
    "value": 5.76,
    "year": "2023",
    "source": "United States of America (USA) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NP/UNSDC/CTS/GSH 2019 Revision"
   },
   "Seattle": {
    "value": 5.76,
    "year": "2023",
    "source": "United States of America (USA) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NP/UNSDC/CTS/GSH 2019 Revision"
   },
   "Washington DC": {
    "value": 5.76,
    "year": "2023",
    "source": "United States of America (USA) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: NP/UNSDC/CTS/GSH 2019 Revision"
   },
   "Sydney": {
    "value": 0.85,
    "year": "2023",
    "source": "Australia (AUS) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: MD/Eurostat/GSH 2019 Revision/CTS"
   },
   "Auckland": {
    "value": 1.46,
    "year": "2022",
    "source": "New Zealand (NZL) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: WHO Adjusted/UNSDC/NP/CTS"
   },
   "Osaka": {
    "value": 0.23,
    "year": "2023",
    "source": "Japan (JPN) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: GSH 2019 Revision/SDG/CTS/MoI"
   },
   "Tel Aviv": {
    "value": 1.63,
    "year": "2022",
    "source": "Israel (ISR) — country proxy",
    "note": "UNODC ('data_cts_intentional_homicide' sheet), victims, Total/Total/Total, rate per 100,000; source field: UNSDC/NSO/SDG/CTS"
   },
   "Hong Kong": {
    "value": 0.38,
    "year": "2023",
    "source": "China, Hong Kong Special Administrative Region (HKG)",
    "note": "UNODC dataUNODC CTS export (unodc_hom_faresmts.xlsx), Victims of intentional homicide, rate per 100,000; source flag GOV/SDG/CTS; raw 0.3762"
   },
   "Taipei": {
    "value": 0.32,
    "year": "2024",
    "source": "Taiwan (computed: NPA yearbook deaths / MOI population)",
    "note": "No UNODC row for Taiwan. Computed: 74 deaths from intentional homicide (NPA Police Statistics Yearbook 2024, Table 15 'Casualties of Crime Victims - by Classification', item 故意殺人 Murder and Nonnegligent Manslaughter, Dea"
   },
   "Bangkok": {
    "value": 4.79,
    "year": "2011",
    "source": "Thailand (THA)",
    "note": "UNODC CTS export; latest rate year in file is 2011 (no later THA rows exist in this UNODC export) - notably stale; source flag UNSDC/WHO Adjusted/NP; raw 4.7923"
   },
   "Kuala Lumpur": {
    "value": 0.73,
    "year": "2023",
    "source": "Malaysia (MYS)",
    "note": "UNODC CTS export; source flag UNSDC/WHO/NP/SDG/CTS; raw 0.7345"
   },
   "Jakarta": {
    "value": 0.3,
    "year": "2022",
    "source": "Indonesia (IDN)",
    "note": "UNODC CTS export; source flag UNSDC/Interpol/CTS; raw 0.3038"
   },
   "Manila": {
    "value": 4.35,
    "year": "2023",
    "source": "Philippines (PHL)",
    "note": "UNODC CTS export; source flag NP/UNSDC/CTS/GSH 2019 Revision; raw 4.3476"
   },
   "Ho Chi Minh City": {
    "value": 1.54,
    "year": "2011",
    "source": "Viet Nam (VNM)",
    "note": "UNODC CTS export; latest rate year in file is 2011 (no later VNM rows) - notably stale; source flag WHO; raw 1.5350"
   },
   "Mumbai": {
    "value": 2.82,
    "year": "2022",
    "source": "India (IND)",
    "note": "UNODC CTS export; source flag MoI/NCRB India; raw 2.8153; shared with Delhi (country proxy)"
   },
   "Abu Dhabi": {
    "value": 0.69,
    "year": "2022",
    "source": "United Arab Emirates (ARE)",
    "note": "UNODC CTS export; source flag CTS; raw 0.6932; same UAE national value as Dubai already in dataset (0.69) - consistent"
   },
   "Shanghai": {
    "value": 0.5,
    "year": "2020",
    "source": "China (CHN)",
    "note": "UNODC CTS export; source flag UNSDC/NSO; raw 0.5019; shared with Beijing and Shenzhen (country proxy)"
   },
   "Beijing": {
    "value": 0.5,
    "year": "2020",
    "source": "China (CHN)",
    "note": "Same China national value as Shanghai/Shenzhen (country proxy)"
   },
   "Shenzhen": {
    "value": 0.5,
    "year": "2020",
    "source": "China (CHN)",
    "note": "Same China national value as Shanghai/Beijing (country proxy)"
   },
   "Delhi": {
    "value": 2.82,
    "year": "2022",
    "source": "India (IND)",
    "note": "Same India national value as Mumbai (country proxy)"
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
   },
   "Stockholm": {
    "value": 4.9,
    "year": "2024",
    "source": "Stockholm Greater City/SWE",
    "note": "pm25_concentration raw 4.883; pm25_tempcov 88"
   },
   "Oslo": {
    "value": 8.5,
    "year": "2024",
    "source": "Oslo/NOR",
    "note": "pm25_concentration raw 8.477; pm25_tempcov 86"
   },
   "Helsinki": {
    "value": 5.4,
    "year": "2024",
    "source": "Helsinki Helsingfors Greater City/FIN",
    "note": "pm25_concentration raw 5.363; pm25_tempcov 99"
   },
   "Madrid": {
    "value": 10.3,
    "year": "2024",
    "source": "Madrid/ESP",
    "note": "pm25_concentration raw 10.272; pm25_tempcov 86"
   },
   "Milan": {
    "value": 20.4,
    "year": "2024",
    "source": "Milano Greater City/ITA",
    "note": "pm25_concentration raw 20.448; pm25_tempcov 94"
   },
   "Rome": {
    "value": 11.8,
    "year": "2024",
    "source": "Roma/ITA",
    "note": "pm25_concentration raw 11.793; pm25_tempcov 95"
   },
   "Munich": {
    "value": 7.9,
    "year": "2024",
    "source": "Munchen/DEU",
    "note": "pm25_concentration raw 7.87; pm25_tempcov 98"
   },
   "Frankfurt": {
    "value": 8.7,
    "year": "2024",
    "source": "Frankfurt Am Main/DEU",
    "note": "pm25_concentration raw 8.698; pm25_tempcov 100"
   },
   "Hamburg": {
    "value": 9.1,
    "year": "2024",
    "source": "Hamburg/DEU",
    "note": "pm25_concentration raw 9.07; pm25_tempcov 84"
   },
   "Brussels": {
    "value": 7.6,
    "year": "2024",
    "source": "Bruxelles Brussel/BEL",
    "note": "pm25_concentration raw 7.597; pm25_tempcov 98"
   },
   "Dublin": {
    "value": 7.3,
    "year": "2024",
    "source": "Dublin/IRL",
    "note": "pm25_concentration raw 7.318; pm25_tempcov 94"
   },
   "Lisbon": {
    "value": 7.6,
    "year": "2024",
    "source": "Lisboa Greater City/PRT",
    "note": "pm25_concentration raw 7.604; pm25_tempcov 84"
   },
   "Prague": {
    "value": 13.4,
    "year": "2024",
    "source": "Praha/CZE",
    "note": "pm25_concentration raw 13.404; pm25_tempcov 98"
   },
   "Warsaw": {
    "value": 14.7,
    "year": "2024",
    "source": "Warszawa/POL",
    "note": "pm25_concentration raw 14.703; pm25_tempcov 99"
   },
   "Istanbul": {
    "value": 50.5,
    "year": "2025",
    "source": "Istanbul/TUR",
    "note": "pm25_concentration raw 50.45; pm25_tempcov NA"
   },
   "Montreal": {
    "value": 8.6,
    "year": "2023",
    "source": "Montreal/CAN",
    "note": "pm25_concentration raw 8.625; pm25_tempcov 98"
   },
   "Vancouver": {
    "value": 6.0,
    "year": "2023",
    "source": "Vancouver/CAN",
    "note": "pm25_concentration raw 6.0; pm25_tempcov 98"
   },
   "Chicago": {
    "value": 8.7,
    "year": "2022",
    "source": "Chicago Naperville Elgin IL IN WI/USA",
    "note": "pm25_concentration raw 8.671; pm25_tempcov 63"
   },
   "Boston": {
    "value": 6.4,
    "year": "2022",
    "source": "Boston Cambridge Newton MA NH/USA",
    "note": "pm25_concentration raw 6.432; pm25_tempcov 46"
   },
   "Los Angeles": {
    "value": 10.5,
    "year": "2022",
    "source": "Los Angeles Long Beach Anaheim CA/USA",
    "note": "pm25_concentration raw 10.53; pm25_tempcov 44"
   },
   "Seattle": {
    "value": 6.1,
    "year": "2022",
    "source": "Seattle Tacoma Bellevue WA/USA",
    "note": "pm25_concentration raw 6.085; pm25_tempcov 25"
   },
   "Washington DC": {
    "value": 6.3,
    "year": "2022",
    "source": "Washington Arlington Alexandria DC VA MD WV/USA",
    "note": "pm25_concentration raw 6.322; pm25_tempcov 64"
   },
   "Sydney": {
    "value": null,
    "year": "n/a",
    "note": "Sydney absent from WHO Ambient Air Quality Database V8.0 (2026): no Sydney label among the 41 AUS city entries (only state-level 'New South Wales/AUS', not used). Left null."
   },
   "Auckland": {
    "value": 5.5,
    "year": "2021",
    "source": "Auckland/NZL",
    "note": "pm25_concentration raw 5.5; pm25_tempcov NA; 'Auckland CBD/NZL' (2023, 9.0) exists but is a sub-district label, not the city — not used"
   },
   "Osaka": {
    "value": 9.4,
    "year": "2022",
    "source": "Osaka/JPN",
    "note": "pm25_concentration raw 9.4; pm25_tempcov 97"
   },
   "Tel Aviv": {
    "value": 17.4,
    "year": "2024",
    "source": "Tel Aviv/ISR",
    "note": "pm25_concentration raw 17.364; pm25_tempcov 88"
   },
   "Hong Kong": {
    "value": 19.8,
    "year": "2019",
    "source": "Hong Kong/CHN",
    "note": "WHO AAQ DB v8.0 (2026); pm25 19.833, tempcov 97; latest non-null pm25 year is 2019 (stuck like Tokyo/Seoul/London)"
   },
   "Taipei": {
    "value": 15.0,
    "year": "2018",
    "source": "Taipei/CHN",
    "note": "WHO AAQ DB v8.0; pm25 15.0, tempcov 99, n=2 stations. Candidates listed: Taipei/CHN (2014,2018), Taipei City/CHN (2017 only); New Taipei rows excluded (different city). Latest non-null = Taipei/CHN 2018"
   },
   "Bangkok": {
    "value": 23.4,
    "year": "2021",
    "source": "Bangkok/THA",
    "note": "WHO AAQ DB v8.0; pm25 23.417, tempcov 99"
   },
   "Kuala Lumpur": {
    "value": 28.3,
    "year": "2019",
    "source": "Kuala Lumpur/MYS",
    "note": "WHO AAQ DB v8.0; pm25 28.27, tempcov NA"
   },
   "Jakarta": {
    "value": 33.8,
    "year": "2021",
    "source": "DKI Jakarta/IDN",
    "note": "WHO AAQ DB v8.0; pm25 33.84, tempcov 100. Candidates: DKI Jakarta/IDN (2018-2021) and Jakarta/IDN (2015-2016); latest is DKI Jakarta 2021"
   },
   "Manila": {
    "value": 15.4,
    "year": "2020",
    "source": "Manila/PHL",
    "note": "WHO AAQ DB v8.0; pm25 15.43, tempcov only 50 (low temporal coverage); City of Manila, not Metro Manila"
   },
   "Ho Chi Minh City": {
    "value": 23.5,
    "year": "2020",
    "source": "Ho Chi Minh/VNM",
    "note": "WHO AAQ DB v8.0; pm25 23.5, tempcov NA"
   },
   "Mumbai": {
    "value": 49.5,
    "year": "2021",
    "source": "Mumbai/IND",
    "note": "WHO AAQ DB v8.0; pm25 49.5, tempcov NA, n=2 stations"
   },
   "Abu Dhabi": {
    "value": 30.9,
    "year": "2024",
    "source": "Abu Dhabi /ARE",
    "note": "WHO AAQ DB v8.0; pm25 30.937, tempcov 98, n=13 (label has trailing space in source); older 'Abu Dhabi/ARE' label ends 2021"
   },
   "Shanghai": {
    "value": 28.4,
    "year": "2024",
    "source": "Shanghai/CHN",
    "note": "WHO AAQ DB v8.0; pm25 28.434, tempcov 98, n=19"
   },
   "Beijing": {
    "value": 31.0,
    "year": "2024",
    "source": "Beijing/CHN",
    "note": "WHO AAQ DB v8.0; pm25 30.98, tempcov 98, n=23; 'Beijing Shi/CHN' label ends 2019"
   },
   "Shenzhen": {
    "value": 17.3,
    "year": "2024",
    "source": "Shenzhen/CHN",
    "note": "WHO AAQ DB v8.0; pm25 17.256, tempcov 98, n=15; 'Shenzhen Shi/CHN' label ends 2019"
   },
   "Delhi": {
    "value": 107.0,
    "year": "2021",
    "source": "Delhi/IND",
    "note": "WHO AAQ DB v8.0; pm25 107.0, tempcov NA, n=1 station (V7.0 vintage)"
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
   },
   "Shanghai": {
    "value": 458.1,
    "year": "2026 Q1",
    "bbox": [
     121.2,
     30.95,
     121.8,
     31.45
    ],
    "tiles": 5784,
    "tests": 160005,
    "note": "Mainland-China Speedtest sample may skew toward users measuring international connectivity; dense sample but interpret with care."
   },
   "Beijing": {
    "value": 331.9,
    "year": "2026 Q1",
    "bbox": [
     116.15,
     39.75,
     116.65,
     40.1
    ],
    "tiles": 3870,
    "tests": 56718,
    "note": "Mainland-China Speedtest sample may skew toward users measuring international connectivity; dense sample but interpret with care."
   },
   "Shenzhen": {
    "value": 314.9,
    "year": "2026 Q1",
    "bbox": [
     113.75,
     22.45,
     114.35,
     22.75
    ],
    "tiles": 2646,
    "tests": 79761,
    "note": "Mainland-China Speedtest sample may skew toward users measuring international connectivity; dense sample but interpret with care."
   },
   "Hong Kong": {
    "value": 431.6,
    "year": "2026 Q1",
    "bbox": [
     113.85,
     22.15,
     114.35,
     22.55
    ],
    "tiles": 1891,
    "tests": 384829
   },
   "Taipei": {
    "value": 258.2,
    "year": "2026 Q1",
    "bbox": [
     121.45,
     24.95,
     121.65,
     25.15
    ],
    "tiles": 1077,
    "tests": 391702
   },
   "Bangkok": {
    "value": 375.6,
    "year": "2026 Q1",
    "bbox": [
     100.35,
     13.6,
     100.75,
     13.95
    ],
    "tiles": 4665,
    "tests": 545764
   },
   "Kuala Lumpur": {
    "value": 272.1,
    "year": "2026 Q1",
    "bbox": [
     101.55,
     3.0,
     101.8,
     3.25
    ],
    "tiles": 1820,
    "tests": 314454
   },
   "Jakarta": {
    "value": 97.7,
    "year": "2026 Q1",
    "bbox": [
     106.7,
     -6.35,
     107.0,
     -6.1
    ],
    "tiles": 2416,
    "tests": 639684
   },
   "Manila": {
    "value": 198.9,
    "year": "2026 Q1",
    "bbox": [
     120.9,
     14.45,
     121.15,
     14.75
    ],
    "tiles": 1826,
    "tests": 981482
   },
   "Ho Chi Minh City": {
    "value": 269.6,
    "year": "2026 Q1",
    "bbox": [
     106.55,
     10.65,
     106.85,
     10.9
    ],
    "tiles": 2033,
    "tests": 454528
   },
   "Mumbai": {
    "value": 93.4,
    "year": "2026 Q1",
    "bbox": [
     72.75,
     18.9,
     73.05,
     19.3
    ],
    "tiles": 1865,
    "tests": 314353
   },
   "Delhi": {
    "value": 120.5,
    "year": "2026 Q1",
    "bbox": [
     76.95,
     28.4,
     77.4,
     28.85
    ],
    "tiles": 5131,
    "tests": 704262
   },
   "Abu Dhabi": {
    "value": 348.1,
    "year": "2026 Q1",
    "bbox": [
     54.3,
     24.3,
     54.65,
     24.55
    ],
    "tiles": 1434,
    "tests": 111780
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
   },
   "Shanghai": {
    "value": 83.2,
    "year": "2022",
    "raw": 83.18,
    "source": "Shanghai Statistical Yearbook 2023, Table 2.1 (Shanghai Municipal Bureau of Statistics)",
    "note": "Registered (hukou) population basis. 2022 was depressed by Shanghai's COVID mortality spike (2021 in the same table: 84.11); later yearbook editions dropped the column and the health commission site was unreachable, so 2022 is the newest verifiable official figure. Official statistic; independent verification not possible."
   },
   "Beijing": {
    "value": 82.5,
    "year": "2023",
    "raw": 82.51,
    "source": "Beijing municipal government data page (2024 health white-paper figure), beijing.gov.cn",
    "note": "Municipal figure, 82.51 in 2023. A Nov 2025 official press conference announced 83.93 for 2024, but the transcript states no population basis and the +1.4y jump suggests a series change, so the white-paper series value is recorded and the announcement noted. Official statistic; independent verification not possible."
   },
   "Shenzhen": {
    "value": 83.9,
    "year": "2022",
    "raw": 83.93,
    "source": "Shenzhen Residents' Health White Paper 2022 (Shenzhen Municipal Health Commission)",
    "note": "Municipal figure (83.93). The 2023-edition white paper publishes no updated life expectancy, so 2022 remains the latest official figure. Official statistic; independent verification not possible."
   },
   "Hong Kong": {
    "value": null,
    "year": "n/a",
    "note": "NULL: Hong Kong C&SD publishes life expectancy at birth BY SEX ONLY — 2024 provisional: male 82.8, female 88.4 (2023 final: 82.5/88.1; 'Women and Men in Hong Kong 2025', Table 2.3). No official both-sexes figure exists and combining would require a weighting assumption, i.e. estimation."
   },
   "Taipei": {
    "value": 83.4,
    "year": "2024",
    "source": "Taiwan Ministry of the Interior abridged life tables by county/city (內政統計通報 114年第34週)",
    "note": "Taipei City figure, registered (household-registration) population basis — highest of Taiwan's six special municipalities."
   },
   "Bangkok": {
    "value": 76.6,
    "year": "2024",
    "raw": 76.564,
    "source": "World Bank SP.DYN.LE00.IN — Thailand",
    "note": "COUNTRY proxy (Thailand national figure): Thai NSO/MOPH sites were bot-blocked this session, no Bangkok-level official figure fetchable."
   },
   "Kuala Lumpur": {
    "value": 76.7,
    "year": "2024",
    "source": "DOSM Abridged Life Tables Malaysia 2023-2025, Chart 2 (state level)",
    "note": "W.P. Kuala Lumpur (the Federal Territory = the city proper); 2024 preliminary (2023 final: 75.4)."
   },
   "Jakarta": {
    "value": 76.0,
    "year": "2024",
    "raw": 75.99,
    "source": "BPS, Umur Harapan Hidup [Metode Baru, SP2020 long-form basis], statistics table 2206",
    "note": "DKI Jakarta PROVINCE (≈ city-region). Transcribed from the official BPS table via an archived copy (bps.go.id bot-blocked this session)."
   },
   "Manila": {
    "value": 69.9,
    "year": "2024",
    "raw": 69.946,
    "source": "World Bank SP.DYN.LE00.IN — Philippines",
    "note": "COUNTRY proxy (Philippines national figure): psa.gov.ph blocked this session, no official NCR-level life expectancy fetchable."
   },
   "Ho Chi Minh City": {
    "value": 76.6,
    "year": "2024",
    "source": "GSO/NSO Statistical Yearbook of Viet Nam 2024, Table 43 (province level)",
    "note": "TP. Ho Chi Minh PROVINCE (≈ the city), 2024 preliminary (2023: 76.5). Official PDF via archived copy (nso.gov.vn blocked this session)."
   },
   "Mumbai": {
    "value": 72.8,
    "year": "2019-23",
    "source": "India SRS Abridged Life Tables 2019-23, Statement 3 (Office of the Registrar General)",
    "note": "STATE proxy: Maharashtra (rural+urban, both sexes) — India publishes no city life tables."
   },
   "Delhi": {
    "value": 74.2,
    "year": "2019-23",
    "source": "India SRS Abridged Life Tables 2019-23, Statement 3 (Office of the Registrar General)",
    "note": "NCT of Delhi (the state IS the city-region), rural+urban, both sexes."
   },
   "Abu Dhabi": {
    "value": 83.1,
    "year": "2024",
    "raw": 83.069,
    "source": "World Bank SP.DYN.LE00.IN — United Arab Emirates",
    "note": "COUNTRY proxy (UAE national figure), same treatment as Dubai; SCAD unreachable this session and archived SCAD pages carry no life-expectancy figure."
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
   },
   "Stockholm": {
    "value": 4.91,
    "year": "2023",
    "source": "OECD SE110 Stockholm County (TL3)",
    "note": "TL2 SE11 identical (4.91, 2023). County = metro proxy."
   },
   "Oslo": {
    "value": 6.8,
    "year": "2024",
    "source": "OECD NO081 Oslo (TL3)",
    "note": "Oslo municipality/county = city proper; core density reads high (parent TL2 NO08 Oslo and Viken = 5.22 in 2024), same pattern as Paris FR101 in v1.0. Series dipped 7.59 (2022) to 6.67 (2023) then 6.80 (2024)."
   },
   "Helsinki": {
    "value": 3.72,
    "year": "2021",
    "source": "OECD FI1B1 Helsinki-Uusimaa (TL3)",
    "note": "TL3 = TL2 FI1B (same region, whole Uusimaa). Finnish series ends 2021 - older vintage than most cities in this wave."
   },
   "Madrid": {
    "value": 6.18,
    "year": "2024",
    "source": "OECD ES30 Madrid (TL2)",
    "note": "Community of Madrid. TL3 ES300 exists but ends 2011 - rejected as stale (same rule v1.0 applied to Barcelona ES511). Spanish series volatile recently (2022=5.11, 2023=5.45, 2024=6.18); Catalonia shows the same pattern an"
   },
   "Milan": {
    "value": 5.59,
    "year": "2023",
    "source": "OECD ITC4 Lombardy (TL2)",
    "note": "Region proxy - Italy has no TL3 physician data in this flow."
   },
   "Rome": {
    "value": 6.77,
    "year": "2023",
    "source": "OECD ITI4 Lazio (TL2)",
    "note": "Region proxy - Italy has no TL3 physician data in this flow."
   },
   "Munich": {
    "value": 4.56,
    "year": "2019",
    "source": "OECD DE2 Bavaria (TL2)",
    "note": "German TL2 in this flow = the 16 Laender only (no Oberbayern DE21), so Bavaria is the finest comparable geography; a large-state proxy. TL2 series ends 2019 (same vintage as v1.0 Berlin). TL3 DE212 Muenchen Kreisfreie St"
   },
   "Frankfurt": {
    "value": 4.27,
    "year": "2019",
    "source": "OECD DE7 Hesse (TL2)",
    "note": "Land proxy; TL2 series ends 2019. TL3 DE712 Frankfurt am Main Kreisfreie Stadt (1.83, 2024) rejected as non-comparable subset series (see Munich note)."
   },
   "Hamburg": {
    "value": 6.4,
    "year": "2019",
    "source": "OECD DE6 Hamburg (TL2)",
    "note": "City-state = true city level, but 2019 vintage (German TL2 series ends 2019, as with v1.0 Berlin). TL3 DE600 (1.86, 2024) rejected as non-comparable subset series."
   },
   "Brussels": {
    "value": 4.44,
    "year": "2023",
    "source": "OECD BE100 Arr. Brussels-Capital (TL3)",
    "note": "TL3 = TL2 BE1 Brussels Capital Region (identical, 4.44 in 2023). City-region, true city level."
   },
   "Dublin": {
    "value": null,
    "year": "n/a",
    "note": "Ireland has NO TL2/TL3 physician data in this flow - only country level (CTRY IRL: 4.09 in 2025). Left null per the TL3/TL2 convention; using the national figure would require a Country-proxy dataLevel decision by the ma"
   },
   "Lisbon": {
    "value": 8.37,
    "year": "2024",
    "source": "OECD PT1A0 Greater Lisbon (TL3)",
    "note": "TL3 = TL2 PT1A (identical). NUTS2024 Grande Lisboa geography; series only spans 2021-2024. Reads high - capital-region concentration."
   },
   "Prague": {
    "value": 8.24,
    "year": "2024",
    "source": "OECD CZ010 Prague (TL3)",
    "note": "City = region (TL2 CZ01 identical). True city level; capital core density reads high, like Paris/Vienna in v1.0."
   },
   "Warsaw": {
    "value": 6.3,
    "year": "2024",
    "source": "OECD PL91 Warsaw Capital Region (TL2)",
    "note": "Metro region chosen over city-core PL911 (11.12, 2023), which sits on a source-side 2023 reporting-definition break (Eurostat-confirmed jump 8.36->11.12); PL91 2024 has no break and matches the Metro data level."
   },
   "Istanbul": {
    "value": 2.96,
    "year": "2023",
    "source": "OECD TR100 Istanbul (TL3)",
    "note": "Istanbul province = TL2 TR10 (identical). Province is close to the metro."
   },
   "Montreal": {
    "value": 2.6,
    "year": "2024",
    "source": "OECD CA24 Quebec (TL2)",
    "note": "Province proxy, not Montreal - Canada has no TL3 in this flow (same convention as v1.0 Toronto = Ontario CA35)."
   },
   "Vancouver": {
    "value": 2.71,
    "year": "2024",
    "source": "OECD CA59 British Columbia (TL2)",
    "note": "Province proxy, not Vancouver - Canada has no TL3 in this flow."
   },
   "Chicago": {
    "value": 3.7,
    "year": "2022",
    "source": "OECD US17 Illinois (TL2)",
    "note": "State proxy per v1.0 US convention (no finer OECD geography). US series has a level break around 2019 (2018=2.68, 2019=3.36) noted in v1.0."
   },
   "Boston": {
    "value": 5.52,
    "year": "2022",
    "source": "OECD US25 Massachusetts (TL2)",
    "note": "State proxy per v1.0 US convention. Same 2019 level break (2018=4.24, 2019=5.39)."
   },
   "Los Angeles": {
    "value": 3.02,
    "year": "2022",
    "source": "OECD US06 California (TL2)",
    "note": "State proxy per v1.0 US convention - identical series and value as v1.0 San Francisco (California 2022=3.02)."
   },
   "Seattle": {
    "value": 2.98,
    "year": "2022",
    "source": "OECD US53 Washington (TL2)",
    "note": "Washington state proxy per v1.0 US convention. Same 2019 level break (2018=2.54, 2019=3.05)."
   },
   "Washington DC": {
    "value": 12.02,
    "year": "2022",
    "source": "OECD US11 District of Columbia (TL2)",
    "note": "DC is its own TL2 'state' - a small urban core district, so density reads extremely high (physicians counted at workplace serving the whole metro), like Paris FR101 in v1.0 but stronger. Series breaks: 9.07 (2009) to 6.8"
   },
   "Sydney": {
    "value": 4.58,
    "year": "2024",
    "source": "OECD AU1GS Greater Sydney (TL3)",
    "note": "Greater Sydney metro (TL3), exactly matching v1.0 Melbourne convention (AU2GM). Parent TL2 AU1 New South Wales = 4.32 in 2024."
   },
   "Auckland": {
    "value": 3.47,
    "year": "2019",
    "source": "OECD NZ012 Auckland (TL3)",
    "note": "Auckland region; TL3 = TL2 NZ12 (identical). New Zealand series ends 2019 - oldest vintage in this wave alongside German Laender."
   },
   "Osaka": {
    "value": 2.92,
    "year": "2024",
    "source": "OECD JPG27 Osaka (TL3)",
    "note": "Osaka prefecture (TL3), matching v1.0 Tokyo convention (JPD13). Parent TL2 JPG Kansai region = 2.96 in 2024. Japanese physician survey is biennial (2020, 2022, 2024)."
   },
   "Tel Aviv": {
    "value": 4.9,
    "year": "2023",
    "source": "OECD IL05 Tel Aviv District (TL2)",
    "note": "Tel Aviv District - Israel has TL2 districts only in this flow (no TL3). District is a reasonable metro-core proxy; national ISR = 3.50 in 2023."
   },
   "Shanghai": {
    "value": 3.8,
    "year": "2024",
    "source": "Shanghai Statistical Yearbook 2025, Table 21.1: 38 licensed (assistant) physicians per 10,000",
    "note": "Yearbook publishes the ratio as an integer per 10,000 (coarse). Chinese 执业(助理)医师 includes clinical, TCM, stomatology and public-health physicians — broader than OECD 'practising'. Official statistic; independent verification not possible."
   },
   "Beijing": {
    "value": 6.34,
    "year": "2025",
    "source": "2025 Beijing health development statistical communiqué (Beijing Municipal Health Commission)",
    "note": "Per 1,000 RESIDENT population. Reads high partly because Beijing's national-level hospitals serve patients from across China (place-of-practice basis, like Washington DC). Broad Chinese physician definition (incl. TCM etc.). Official statistic; independent verification not possible."
   },
   "Shenzhen": {
    "value": 3.02,
    "year": "2024",
    "source": "Computed: 54,296 licensed (assistant) physicians (Guangdong Statistical Yearbook 2025, Table 21-4) / 17.99M year-end resident population (Table 3-7)",
    "note": "Exact division of two published official numbers. Cross-check: the city's own 2023 white paper states 2.86 per 1,000 at end-2023. Broad Chinese physician definition. Official statistic; independent verification not possible."
   },
   "Hong Kong": {
    "value": 2.2,
    "year": "2024",
    "source": "Computed: 16,533 registered doctors / 7.5241M mid-2024 population, both from 'Health Facts of Hong Kong 2025' (Department of Health)",
    "note": "Doctors ON THE REGISTER (not necessarily practising), excludes dentists and Chinese-medicine practitioners — narrower than the mainland definition. DoH's own printed ratio 1:456 ≈ 2.19 per 1,000."
   },
   "Taipei": {
    "value": 4.76,
    "year": "2024",
    "source": "Taiwan MOHW 2024 medical-institution annual report, Table 29: 47.6 Western-medicine physicians per 10,000, Taipei City",
    "note": "Practising WESTERN-MEDICINE physicians only (TCM and dentists published separately), counted at place of practice over registered population — inflated by patients commuting from the wider metro (like DC/Paris cores)."
   },
   "Bangkok": {
    "value": 2.34,
    "year": "2024",
    "source": "MOPH Thailand, Report on Health Resources 2024, Table 11: population per doctor = 428 in Bangkok",
    "note": "CITY level (all affiliations incl. private). Denominator is the registered mid-year population; Bangkok's service population is larger and its doctors serve patients nationwide. Thailand national comparator: 0.59 per 1,000 (WHO, 2023)."
   },
   "Kuala Lumpur": {
    "value": 2.27,
    "year": "2024",
    "source": "WHO GHO HWF_0001 — Malaysia: 22.72 medical doctors per 10,000",
    "note": "COUNTRY proxy (no state-level density published)."
   },
   "Jakarta": {
    "value": 0.56,
    "year": "2024",
    "source": "WHO GHO HWF_0001 — Indonesia: 5.59 per 10,000",
    "note": "COUNTRY proxy (BPS provincial health statistics not fetchable this session)."
   },
   "Manila": {
    "value": 0.87,
    "year": "2024",
    "source": "WHO GHO HWF_0001 — Philippines: 8.69 per 10,000",
    "note": "COUNTRY proxy."
   },
   "Ho Chi Minh City": {
    "value": 1.11,
    "year": "2021",
    "source": "WHO GHO HWF_0001 — Viet Nam: 11.07 per 10,000 (latest)",
    "note": "COUNTRY proxy."
   },
   "Mumbai": {
    "value": 0.96,
    "year": "2024",
    "source": "WHO GHO HWF_0001 — India: 9.55 per 10,000",
    "note": "COUNTRY proxy (state tables publish registered stock, not active density)."
   },
   "Delhi": {
    "value": 0.96,
    "year": "2024",
    "source": "WHO GHO HWF_0001 — India: 9.55 per 10,000",
    "note": "COUNTRY proxy — same national figure as Mumbai."
   },
   "Abu Dhabi": {
    "value": 2.99,
    "year": "2023",
    "source": "WHO GHO HWF_0001 — United Arab Emirates: 29.92 per 10,000 (latest)",
    "note": "COUNTRY proxy (SCAD emirate-level figure not fetchable this session)."
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
   },
   "Stockholm": {
    "value": 12.5,
    "year": "2026 Mid-Year",
    "source": "Stockholm, Sweden",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Oslo": {
    "value": 11.0,
    "year": "2026 Mid-Year",
    "source": "Oslo, Norway",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Helsinki": {
    "value": 11.4,
    "year": "2026 Mid-Year",
    "source": "Helsinki, Finland",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Madrid": {
    "value": 13.2,
    "year": "2026 Mid-Year",
    "source": "Madrid, Spain",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Milan": {
    "value": 18.2,
    "year": "2026 Mid-Year",
    "source": "Milan, Italy",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Rome": {
    "value": 14.9,
    "year": "2026 Mid-Year",
    "source": "Rome, Italy",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Munich": {
    "value": 13.1,
    "year": "2026 Mid-Year",
    "source": "Munich, Germany",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Frankfurt": {
    "value": 7.7,
    "year": "2026 Mid-Year",
    "source": "Frankfurt, Germany",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Hamburg": {
    "value": 11.1,
    "year": "2026 Mid-Year",
    "source": "Hamburg, Germany",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Brussels": {
    "value": 7.2,
    "year": "2026 Mid-Year",
    "source": "Brussels, Belgium",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Dublin": {
    "value": 9.0,
    "year": "2026 Mid-Year",
    "source": "Dublin, Ireland",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Lisbon": {
    "value": 18.7,
    "year": "2026 Mid-Year",
    "source": "Lisbon, Portugal",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Prague": {
    "value": 18.2,
    "year": "2026 Mid-Year",
    "source": "Prague, Czech Republic",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Warsaw": {
    "value": 11.7,
    "year": "2026 Mid-Year",
    "source": "Warsaw, Poland",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Istanbul": {
    "value": 10.1,
    "year": "2026 Mid-Year",
    "source": "Istanbul, Turkey",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Montreal": {
    "value": 7.6,
    "year": "2026 Mid-Year",
    "source": "Montreal, Canada",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Vancouver": {
    "value": 11.7,
    "year": "2026 Mid-Year",
    "source": "Vancouver, Canada",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Chicago": {
    "value": 3.2,
    "year": "2026 Mid-Year",
    "source": "Chicago, IL, United States",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Boston": {
    "value": 7.9,
    "year": "2026 Mid-Year",
    "source": "Boston, MA, United States",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Los Angeles": {
    "value": 8.2,
    "year": "2026 Mid-Year",
    "source": "Los Angeles, CA, United States",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Seattle": {
    "value": 4.8,
    "year": "2026 Mid-Year",
    "source": "Seattle, WA, United States",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Washington DC": {
    "value": 4.3,
    "year": "2026 Mid-Year",
    "source": "Washington, DC, United States",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Sydney": {
    "value": 12.5,
    "year": "2026 Mid-Year",
    "source": "Sydney, Australia",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Auckland": {
    "value": 10.5,
    "year": "2026 Mid-Year",
    "source": "Auckland, New Zealand",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Osaka": {
    "value": 10.6,
    "year": "current (last update 2026-06-19)",
    "source": "Osaka, Japan (city page)",
    "note": "Absent from 2026 Mid-Year rankings table; taken from numbeo.com/property-investment/in/Osaka current view: Price to Income Ratio 10.59 (80 entries, 16 contributors, past 18 months)."
   },
   "Tel Aviv": {
    "value": 20.0,
    "year": "2026 Mid-Year",
    "source": "Tel Aviv-Yafo, Israel",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Hong Kong": {
    "value": 35.2,
    "year": "2026 Mid-Year",
    "source": "Hong Kong, Hong Kong (China)",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Taipei": {
    "value": 31.4,
    "year": "2026 Mid-Year",
    "source": "Taipei, Taiwan",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Bangkok": {
    "value": 37.8,
    "year": "2026 Mid-Year",
    "source": "Bangkok, Thailand",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Kuala Lumpur": {
    "value": 8.6,
    "year": "2026 Mid-Year",
    "source": "Kuala Lumpur, Malaysia",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Jakarta": {
    "value": 24.9,
    "year": "2026 Mid-Year",
    "source": "Jakarta, Indonesia",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Manila": {
    "value": 34.8,
    "year": "2026 Mid-Year",
    "source": "Manila, Philippines",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Ho Chi Minh City": {
    "value": 32.4,
    "year": "2026 Mid-Year",
    "source": "Ho Chi Minh City, Vietnam",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Mumbai": {
    "value": 30.1,
    "year": "2026 Mid-Year",
    "source": "Mumbai, India",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Abu Dhabi": {
    "value": 7.4,
    "year": "2026 Mid-Year",
    "source": "Abu Dhabi, United Arab Emirates",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Shanghai": {
    "value": 31.2,
    "year": "2026 Mid-Year",
    "source": "Shanghai, China",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Beijing": {
    "value": 29.7,
    "year": "2026 Mid-Year",
    "source": "Beijing, China",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Shenzhen": {
    "value": 28.6,
    "year": "2026 Mid-Year",
    "source": "Shenzhen, China",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
   },
   "Delhi": {
    "value": 16.1,
    "year": "2026 Mid-Year",
    "source": "Delhi, India",
    "note": "Price To Income Ratio column, Numbeo Property Prices Index 2026 Mid-Year (rankings.jsp fetched 2026-07-12)"
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
   },
   "Stockholm": {
    "value": 86.0,
    "year": "2020",
    "source": "City Code SE_STOCKHOLM / City Name 'Stockholm' (Sweden)",
    "note": "col [b] pop. within 400m walk of open public space; raw 85.96437964029612"
   },
   "Oslo": {
    "value": 56.0,
    "year": "2022",
    "source": "City Code NO_OSLO / City Name 'Oslo' (Norway)",
    "note": "col [b] pop. within 400m walk of open public space; raw 56.000037585683614; latest of 2 non-blank rows (others: [('2018', '56')])"
   },
   "Helsinki": {
    "value": null,
    "year": "n/a",
    "note": "City not present in UN-Habitat SDG 11.7.1 table (sdg_11-7-1.csv, 1711 rows) — confirmed by accent-normalized substring search; left null."
   },
   "Madrid": {
    "value": 63.1,
    "year": "2020",
    "source": "City Code ES_MADRID / City Name 'Madrid' (Spain)",
    "note": "col [b] pop. within 400m walk of open public space; raw 63.12604019448668"
   },
   "Milan": {
    "value": 76.2,
    "year": "2020",
    "source": "City Code IT_MILANO / City Name 'Milano (Milan)' (Italy)",
    "note": "col [b] pop. within 400m walk of open public space; raw 76.21590965651872"
   },
   "Rome": {
    "value": 80.0,
    "year": "2020",
    "source": "City Code IT_ROMA / City Name 'Roma (Rome)' (Italy)",
    "note": "col [b] pop. within 400m walk of open public space; raw 80.04956961629782"
   },
   "Munich": {
    "value": null,
    "year": "n/a",
    "note": "City not present in UN-Habitat SDG 11.7.1 table (sdg_11-7-1.csv, 1711 rows) — confirmed by accent-normalized substring search; left null."
   },
   "Frankfurt": {
    "value": null,
    "year": "n/a",
    "note": "City not present in UN-Habitat SDG 11.7.1 table (sdg_11-7-1.csv, 1711 rows) — confirmed by accent-normalized substring search; left null."
   },
   "Hamburg": {
    "value": 78.2,
    "year": "2020",
    "source": "City Code DE_HAMBURG / City Name 'Hamburg' (Germany)",
    "note": "col [b] pop. within 400m walk of open public space; raw 78.20667555518477"
   },
   "Brussels": {
    "value": 85.8,
    "year": "2020",
    "source": "City Code BE_BRUXELLES / City Name 'Bruxelles-Brussel' (Belgium)",
    "note": "col [b] pop. within 400m walk of open public space; raw 85.81047593478537"
   },
   "Dublin": {
    "value": 84.2,
    "year": "2020",
    "source": "City Code IE_DUBLIN / City Name 'Dublin' (Ireland)",
    "note": "col [b] pop. within 400m walk of open public space; raw 84.24154094300785"
   },
   "Lisbon": {
    "value": 87.4,
    "year": "2020",
    "source": "City Code PT_LISBOA / City Name 'Lisboa (Lisbon)' (Portugal)",
    "note": "col [b] pop. within 400m walk of open public space; raw 87.42410412082377"
   },
   "Prague": {
    "value": 83.5,
    "year": "2020",
    "source": "City Code CZ_PRAHA / City Name 'Praha (Prague)' (Czechia)",
    "note": "col [b] pop. within 400m walk of open public space; raw 83.54677682853324"
   },
   "Warsaw": {
    "value": 88.0,
    "year": "2020",
    "source": "City Code PL_WARSZAWA / City Name 'Warszawa (Warsaw)' (Poland)",
    "note": "col [b] pop. within 400m walk of open public space; raw 87.9503102113149"
   },
   "Istanbul": {
    "value": 59.8,
    "year": "2020",
    "source": "City Code TR_ISTANBUL / City Name 'Istanbul' (Türkiye)",
    "note": "col [b] pop. within 400m walk of open public space; raw 59.78115215902099; 1 blank-value duplicate row(s) ignored"
   },
   "Montreal": {
    "value": 91.8,
    "year": "2020",
    "source": "City Code CA_MONTREAL_QUE / City Name 'Montréal' (Canada)",
    "note": "col [b] pop. within 400m walk of open public space; raw 91.80630156189909"
   },
   "Vancouver": {
    "value": null,
    "year": "n/a",
    "note": "City not present in UN-Habitat SDG 11.7.1 table (sdg_11-7-1.csv, 1711 rows) — confirmed by accent-normalized substring search; left null."
   },
   "Chicago": {
    "value": 47.8,
    "year": "2020",
    "source": "City Code US_CHICAGO_IL / City Name 'Chicago' (United States of America)",
    "note": "col [b] pop. within 400m walk of open public space; raw 47.84582347745486"
   },
   "Boston": {
    "value": 68.2,
    "year": "2020",
    "source": "City Code US_BOSTON / City Name 'Boston' (United States of America)",
    "note": "col [b] pop. within 400m walk of open public space; raw 68.16232443542638"
   },
   "Los Angeles": {
    "value": null,
    "year": "n/a",
    "note": "City not present in UN-Habitat SDG 11.7.1 table (sdg_11-7-1.csv, 1711 rows) — confirmed by accent-normalized substring search; left null."
   },
   "Seattle": {
    "value": 63.5,
    "year": "2020",
    "source": "City Code US_SEATTLE / City Name 'Seattle' (United States of America)",
    "note": "col [b] pop. within 400m walk of open public space; raw 63.46851224746973"
   },
   "Washington DC": {
    "value": 52.8,
    "year": "2020",
    "source": "City Code US_WASHINGTON_D_C / City Name 'Washington, D.C.' (United States of America)",
    "note": "col [b] pop. within 400m walk of open public space; raw 52.80240014132506"
   },
   "Sydney": {
    "value": 33.4,
    "year": "2020",
    "source": "City Code AU_SYDNEY / City Name 'Sydney' (Australia)",
    "note": "col [b] pop. within 400m walk of open public space; raw 33.378630658442155"
   },
   "Auckland": {
    "value": 88.4,
    "year": "2020",
    "source": "City Code NZ_AUCKLAND / City Name 'Auckland' (New Zealand)",
    "note": "col [b] pop. within 400m walk of open public space; raw 88.44423455352216"
   },
   "Osaka": {
    "value": 72.2,
    "year": "2020",
    "source": "City Code JP_OSAKA / City Name 'Osaka' (Japan)",
    "note": "col [b] pop. within 400m walk of open public space; raw 72.21445774289073"
   },
   "Tel Aviv": {
    "value": 65.7,
    "year": "2021",
    "source": "City Code IL_TEL_AVIV_YAFO / City Name 'Tel Aviv-Yafo (Tel Aviv-Jaffa)' (Israel)",
    "note": "col [b] pop. within 400m walk of open public space; raw 65.70408763024312"
   },
   "Hong Kong": {
    "value": 95.7,
    "year": "2020",
    "source": "Hong Kong, Hong Kong (CN_HONG_KONG)",
    "note": "UN-Habitat SDG 11.7.1, % urban population within 400m of open public space; raw 95.7067"
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "Not in UN-Habitat SDG 11.7.1 city sample (no Taipei/Taiwan row in sdg_11-7-1.csv) - null"
   },
   "Bangkok": {
    "value": 11.8,
    "year": "2020",
    "source": "Krung Thep (Bangkok) (TH_BANGKOK)",
    "note": "raw 11.7699"
   },
   "Kuala Lumpur": {
    "value": 46.1,
    "year": "2020",
    "source": "Kuala Lumpur (MY_KUALA_LUMPUR)",
    "note": "raw 46.1299"
   },
   "Jakarta": {
    "value": 24.2,
    "year": "2020",
    "source": "Jakarta (ID_JAKARTA)",
    "note": "raw 24.1664"
   },
   "Manila": {
    "value": 28.7,
    "year": "2020",
    "source": "Manila (PH_MANILA)",
    "note": "raw 28.7472; City of Manila, not Metro Manila"
   },
   "Ho Chi Minh City": {
    "value": 30.4,
    "year": "2020",
    "source": "Thanh Pho Ho Chi Minh (Ho Chi Minh City) (VN_THANH_PHO_HO_CHI_MINH)",
    "note": "raw 30.3985"
   },
   "Mumbai": {
    "value": 35.3,
    "year": "2020",
    "source": "Mumbai (Bombay) (IN_MUMBAI)",
    "note": "raw 35.3464"
   },
   "Abu Dhabi": {
    "value": 37.6,
    "year": "2020",
    "source": "Abu Zaby (Abu Dhabi) (AE_ABU_ZABY)",
    "note": "raw 37.5679"
   },
   "Shanghai": {
    "value": 29.9,
    "year": "2020",
    "source": "Shanghai (CN_SHANGHAI)",
    "note": "raw 29.9136"
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "Not in UN-Habitat SDG 11.7.1 city sample - checked all 35 China rows and pinyin/Peking variants; no Beijing row exists - null"
   },
   "Shenzhen": {
    "value": 21.9,
    "year": "2020",
    "source": "Shenzhen (CN_SHENZHEN_GUANGDONG)",
    "note": "raw 21.9394"
   },
   "Delhi": {
    "value": 43.6,
    "year": "2020",
    "source": "Delhi (IN_DELHI)",
    "note": "raw 43.5836"
   }
  }
 },
 "GRN-05": {
  "source": "Official municipal/national waste statistics per city (46 sourced cities; see perCity)",
  "url": "various — see perCity source fields",
  "license": "official statistics, various open licenses",
  "edition": "latest available per city — mostly 2023-2025 (Boston 2019, Hamburg 2020, Manila 2015)",
  "retrieved": "2026-07-11 (first 15 cities) / 2026-07-12 (40-city expansion)",
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
    "year": "n/a",
    "note": "NULL, retry-confirmed 2026-07-12: no official recycling rate exists. Only official figures are the Warsan waste-to-energy plant's 62% landfill diversion (one incineration plant, not emirate-wide, not recycling) and Circle Dubai 2041 targets (100% diversion, recycled >=56% of that) — targets, not achieved rates. Dubai Statistics Center unreachable (TLS refused)."
   },
   "San Francisco": {
    "value": 53.1,
    "raw": 53.1,
    "year": "FY2025 (Jul 2024-Jun 2025)",
    "source": "SF Controller City Performance Scorecard measure 382 'Percentage of residential and commercial refuse recovered through recycling and composting', FY2025 average of 12 official monthly actuals = 0.530",
    "note": "'Recovery rate' = tons recycled+composted / total refuse (recycling+composting+trash), net of residual contamination, as reported by Recology to SF Environment. Scope: residential and small-business ('Fantastic 3') colle"
   },
   "Stockholm": {
    "value": 31.0,
    "year": "2024",
    "source": "Avfall Sverige, Hushållsavfall i siffror – kommun- och länsstatistik (publ. Sept 2025), Tabell 5",
    "note": "Share of HOUSEHOLD waste collected for material recycling incl. biological treatment, municipality of Stockholm (Avfall Sverige municipal statistics, Tabell 5). The same table's output-based rate after rejects is 26% — this is a separate-collection-style measure."
   },
   "Oslo": {
    "value": 43.4,
    "year": "2025",
    "source": "Statistics Norway (SSB), StatBank table 12263 (KOSTRA), updated 2026-06-15",
    "note": "Share of HOUSEHOLD waste sent to material recovery incl. biological treatment, municipality of Oslo, Statistics Norway KOSTRA table 12263 (2025 data); collection-based, not output-based. 2024: 42.5%."
   },
   "Helsinki": {
    "value": 45.0,
    "year": "2024",
    "source": "HSY (Helsinki Region Environmental Services), Jätemäärät ja kierrätysaste",
    "note": "HOUSEHOLD waste recycling rate for the municipality of Helsinki (HSY): true recycling with process rejects deducted; material + biological recycling, remainder to energy. Paper and WEEE inputs allocated from national data by population."
   },
   "Madrid": {
    "value": 47.7,
    "year": "2023",
    "source": "Ayuntamiento de Madrid, Estrategia de prevención y gestión de residuos domésticos y comerciales de la ciudad de Madrid – 2030 (Abril 2025), Tabla 5bis",
    "note": "SEPARATE-COLLECTION share of municipal (domestic + commercial) waste managed by city services, city of Madrid (waste strategy 2030, Tabla 5bis) — NOT a recycling output rate. City press reported 51.4% for 2024 but that page was unfetchable this session; the verified 2023 PDF value is used."
   },
   "Milan": {
    "value": 63.33,
    "year": "2024",
    "source": "ISPRA Catasto Nazionale Rifiuti, produzione e raccolta comunale, Comune di Milano",
    "note": "Raccolta differenziata = SEPARATE-COLLECTION share of municipal waste, Comune di Milano (ISPRA Catasto Rifiuti) — an upper bound on recycling, not an output rate. 2023: 62.44%."
   },
   "Rome": {
    "value": 48.03,
    "year": "2024",
    "source": "ISPRA Catasto Nazionale Rifiuti, produzione e raccolta comunale, Comune di Roma",
    "note": "Raccolta differenziata = SEPARATE-COLLECTION share of municipal waste, Comune di Roma (ISPRA Catasto Rifiuti) — an upper bound on recycling, not an output rate. 2023: 46.64%."
   },
   "Munich": {
    "value": 55.3,
    "year": "2023",
    "source": "AWM Abfallwirtschaftsbetrieb München, 'Der AWM in Zahlen' (Geschäftsbericht 2023)",
    "note": "AWM-published Recyclingquote for HOUSEHOLD waste, city of Munich ('Der AWM in Zahlen' 2023; total-recovery quota 59.0% in same sheet). Exact calculation method not detailed; Bavaria publishes no per-city quota."
   },
   "Frankfurt": {
    "value": 37.6,
    "year": "2024",
    "source": "Hessisches Statistisches Landesamt, Haushaltsabfälle in Hessen 2024 (QII7-j/24, Dez. 2025), Tabelle 2",
    "note": "SEPARATE-COLLECTION share of household waste: exact ratio of published official tonnages (separately collected organics + Wertstoffe over total household waste), Hessisches Statistisches Landesamt Tabelle 2 — Hesse publishes no per-city percentage or recycling rate (same computed-from-tonnages treatment as Vienna). 2023 edition: 38.6%."
   },
   "Hamburg": {
    "value": 45.8,
    "year": "2020",
    "source": "Abfallwirtschaftsplan Siedlungsabfälle 2023, Freie und Hansestadt Hamburg (BUKEA), Tabelle 8: 'R-Quote 2', Ist 2020",
    "note": "City's own input-based household-waste recycling quota 'R-Quote 2' (separate collection + bulky/WEEE/textiles to recovery + post-incineration metals), Abfallwirtschaftsplan 2023. STALE: 2020 is the latest published actual — newer official sheets publish tonnages only. Narrower R-Quote 1: 38.3%; wider R-Quote 3: 59.7%."
   },
   "Brussels": {
    "value": 35.0,
    "year": "2023",
    "source": "Bruxelles Environnement, 'L'environnement : état des lieux' — indicateur 'Déchets préparés en vue du réemploi et du recyclage' (actualisation décembre 2025)",
    "note": "Recycled-or-reused share of municipal waste (household + comparable business), Brussels-Capital Region (19 communes), Bruxelles Environnement état des lieux (Dec 2025 update); energy recovery excluded."
   },
   "Dublin": {
    "value": 42.0,
    "year": "2023",
    "source": "EPA (Ireland), 'Municipal Waste Statistics for Ireland', latest reference year 2023 (release 24 September 2025)",
    "note": "COUNTRY PROXY: Ireland NATIONAL municipal recycling rate (EPA, EU definition: material recycling + composting/AD + preparing for reuse over generated) — the EPA publishes no Dublin/regional split."
   },
   "Lisbon": {
    "value": 26.0,
    "year": "2024",
    "source": "APA (Agência Portuguesa do Ambiente), Relatório Anual Resíduos Urbanos 2024 (setembro 2025), Tabela 17 — PRR por SGRU: VALORSUL",
    "note": "EU 'preparing for reuse and recycling' (PRR) rate for the VALORSUL multi-municipal waste system (19 municipalities incl. Lisbon, ~1.69M residents) — no Lisbon-city-only rate exists. Volatile series: 29/38/31/26% for 2021-24 (APA annual urban-waste report, Tabela 17)."
   },
   "Prague": {
    "value": 32.3,
    "year": "2023",
    "source": "MŽP ČR (Czech Ministry of the Environment), verified 2023 waste data (ISOH), press release 'Odpady v roce 2023', 20 March 2025",
    "note": "Statutory municipal SORTING level (share of separately collected recyclables in municipal waste, Czech Act 541/2020) — separate collection, NOT final recycling output. Prague is its own region, so genuinely city-level; lowest of the 14 Czech regions (national avg 44.4%)."
   },
   "Warsaw": {
    "value": 28.5,
    "year": "2024",
    "source": "Raport o stanie miasta Warszawa 2024 (City of Warsaw, June 2025), waste management chapter",
    "note": "Statutory preparing-for-reuse-and-recycling level, City of Warsaw, EU-aligned calculation (recycled output over municipal waste generated), from the city's own Raport o stanie miasta 2024 — vs 45% legally required."
   },
   "Istanbul": {
    "value": null,
    "year": "n/a",
    "note": "NULL: no official recycling RATE exists — the Ministry's 2023 provincial environment report and İBB/İSTAÇ publish tonnages only (6.09Mt household waste, 5.42Mt landfilled), and TurkStat treatment splits are national. Deriving a share from incomplete flows would be estimation."
   },
   "Montreal": {
    "value": 49.0,
    "year": "2024",
    "source": "Ville de Montréal — Bilan 2024 de la gestion des matières résiduelles de l'agglomération de Montréal (reddition de compte PDGMR 2020-2025)",
    "note": "Diversion-from-disposal rate of municipal-managed (residential) streams, Agglomeration of Montreal (Island), Bilan 2024 GMR — diversion, not pure recycling; vs 70% target."
   },
   "Vancouver": {
    "value": 65.0,
    "year": "2023",
    "source": "Metro Vancouver — Recycling and Solid Waste Management 2023 Report (annual summary, revised June 3 2025)",
    "note": "METRO Vancouver regional recycling rate, ALL sectors (residential + commercial + construction/demolition, incl. EPR tonnages) — the widest scope in this column; not City of Vancouver alone. Report carries a draft banner but is the published annual summary."
   },
   "Chicago": {
    "value": 9.0,
    "year": "2025",
    "source": "City of Chicago, Dept. of Streets & Sanitation — Chicago Recycles 'Recycling Rates' page, 2025 Household Waste Diversion Totals (Tons)",
    "note": "Household waste DIVERSION rate for the ~625k city-serviced 1-4-unit households only (Blue Cart + yard + food); excludes multi-unit/commercial private haulers — structurally low scope. 2024: ~9.4%."
   },
   "Boston": {
    "value": 25.0,
    "year": "2019",
    "source": "City of Boston — Zero Waste Boston: Recommendations of the Zero Waste Advisory Committee (June 2019)",
    "note": "Citywide recycling rate (~25%: reused/recycled/composted, all generators), Zero Waste Boston 2019 (data c.2017-18). STALE: the most recent official published rate — MassDEP now publishes tonnages only and explicitly no longer calculates rates."
   },
   "Los Angeles": {
    "value": null,
    "year": "n/a",
    "note": "NULL: no current official rate exists — California abandoned rate-based accounting after 2013. The last published figure, 76.4% (2013, AB 939 landfill diversion incl. SOURCE-REDUCTION CREDITS for waste never generated, per the Zero Waste LA franchise board report), is 13 years stale and definitionally incomparable with this column, so it is not recorded."
   },
   "Seattle": {
    "value": 53.4,
    "year": "2023",
    "source": "Seattle Public Utilities — 2023 Waste Prevention & Recycling Report",
    "note": "Overall MSW recycling rate (recycled + composted over generated; all sectors, excl. third-party C&D), SPU 2023 Waste Prevention & Recycling Report — SPU's LAST published rate (metric retired 2024). Live PDF delisted; verified from the Internet Archive copy of the official report."
   },
   "Washington DC": {
    "value": 27.93,
    "year": "2022",
    "source": "DC Dept. of Public Works, Office of Waste Diversion — Solid Waste Diversion Progress Report CY2019-2022",
    "note": "Citywide waste DIVERSION rate, entire District stream (residential + commercial), DPW Office of Waste Diversion progress report CY2019-2022 (latest edition); residential-only 29.19%. Diversion, not pure recycling."
   },
   "Sydney": {
    "value": 52.0,
    "year": "2024/25",
    "source": "City of Sydney — Green Report 2024/25 (Annual Environmental Report)",
    "note": "Residential landfill-DIVERSION rate, City of Sydney LGA only (NOT Greater Sydney), Green Report 2024/25; source-separated recycling alone is 32% — diversion includes treatment of red-bin waste."
   },
   "Auckland": {
    "value": 27.0,
    "year": "2023",
    "source": "Auckland Council — Auckland's Waste Assessment 2023 (November 2023)",
    "note": "Domestic KERBSIDE diversion to recycling, Auckland region (Waste Assessment 2023 s7.4.3); household kerbside only, excludes commercial and private diversion; predates full food-scraps rollout."
   },
   "Osaka": {
    "value": 9.5,
    "year": "FY2023",
    "source": "Japan Ministry of the Environment — 一般廃棄物処理実態調査 (Municipal Solid Waste Survey), FY2023 (令和5年度) results, Osaka Prefecture municipal file",
    "note": "Administrative recycling rate R (MOE 一般廃棄物処理実態調査 FY2023, per-municipality file): direct recycling + post-treatment recovery + group collection over municipal general waste; excludes private independent recovery, so structurally low (national avg 19.5%)."
   },
   "Tel Aviv": {
    "value": 36.0,
    "year": "2024",
    "source": "Tel Aviv-Yafo Municipality, Statistical Yearbook 2025 — 'עיקר הנתונים והמגמות' (key data and trends) presentation, sustainability page (p.39)",
    "note": "City-reported share of all waste removed sent for recycling/recovery (Statistical Yearbook 2025) — a DIVERSION-style measure whose stream includes organics, green waste, packaging AND waste-to-energy/RDF, so broader than material recycling. National-methodology figure unverifiable this session (gov.il 403-blocked)."
   },
   "Shanghai": {
    "value": 43.2,
    "year": "2023",
    "source": "Shanghai Municipal Bureau of Ecology and Environment, 2023 Annual Bulletin on Solid Waste Pollution Prevention (上海市2023年度固体废物污染环境防治信息公告)",
    "note": "Household-waste recovery-and-utilisation rate (回收利用率), whole municipality: recyclables + food/wet-waste utilisation over household waste generated; broader than dry-materials recycling, excludes incineration (the 86.4% 资源化利用率 incl. WtE was NOT used). Official statistic; independent verification not possible."
   },
   "Beijing": {
    "value": 39.8,
    "year": "2023",
    "source": "Beijing Municipal Ecology and Environment Bureau, 2023 Solid Waste Pollution Prevention Information Notice (北京市2023年固体废物污染环境防治信息通告)",
    "note": "Household-waste recovery-and-utilisation rate (回收利用率): kitchen/food waste treated + recyclables recovered over household waste generated; excludes incineration (the 80.94% rate incl. WtE was NOT used). Official statistic; independent verification not possible."
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "NULL: an official figure exists (48.5% household-waste recovery rate 2023, per the city administration bureau's statistics report) but every Shenzhen government host refused connections/403'd this session and no archive snapshot exists — not recordable without fetching the official source."
   },
   "Hong Kong": {
    "value": 34.0,
    "year": "2024",
    "source": "EPD, Monitoring of Solid Waste in Hong Kong — Waste Statistics for 2024 (published 22 Dec 2025)",
    "note": "MSW RECOVERY rate = recyclables recovered for recycling / MSW generated, territory-wide incl. commercial & industrial; 79% of recovered material exported for recycling (recovery ≠ verified final recycling). 2023: 33%."
   },
   "Taipei": {
    "value": 70.8,
    "year": "2024",
    "source": "Taiwan Ministry of Environment (MOENV) open-data indicator 一般廢棄物回收率 (dataset STAT_P_46), Taipei City, ROC year 113 (=2024)",
    "note": "General (municipal household) waste recycling rate, Taipei City: recyclables + food-waste recycling + bulky-waste reuse over general waste generated; includes composting, excludes incineration. From MOENV open-data indicator STAT_P_46. 2023: 70.27%."
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "NULL: BMA publishes no recycling rate — only collection tonnages and a facility-level 39.18% 'returned to use' share (FY2023) that includes incineration/MBT, i.e. disposal-centre diversion, not recycling. The source-separation indicator is reported only as 'target met' with no value."
   },
   "Kuala Lumpur": {
    "value": 37.9,
    "year": "2024",
    "source": "Statistik KPKT 2024 (Ministry of Housing and Local Government Malaysia; source SWCorp) — Kadar Kitar Semula Kebangsaan / National Recycling Rate",
    "note": "COUNTRY PROXY: Malaysia NATIONAL household/MSW recycling rate (SWCorp via Statistik KPKT 2024) — no KL-specific rate is published (only kerbside collection tonnage). 2023: 35.38%."
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "NULL: the national SIPSN per-city recycling-rate table is no longer publicly reachable (old app dead, successor portal login-gated, archives empty). Jakarta's official SILIKA dashboard publishes reduction (26%) / handling (73%) shares, which are not a recycling rate."
   },
   "Manila": {
    "value": 48.0,
    "year": "2015",
    "source": "Senate of the Philippines, Senate Economic Planning Office, 'Philippine Solid Wastes At A Glance' (AG-17-01, Nov 2017), citing DENR-NSWMC",
    "note": "Solid-waste DIVERSION rate for Metro Manila (NCR), RA 9003 definition: reuse + recycling + composting + resource recovery (incineration is banned in the Philippines). STALE: 2015 is the latest official NCR figure (Senate SEPO 2017, citing DENR-NSWMC; verified via archived official PDF); no newer percentage published through 2018+ reports."
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "NULL: official statements give only a treatment mix (~69% landfilled, remainder blending recycling with composting/incineration) — no genuine recycling share; DONRE portal unreachable this session."
   },
   "Mumbai": {
    "value": null,
    "year": "n/a",
    "note": "NULL: CPCB publishes only 'waste processed/treated' (includes incineration, composting, RDF) — processed ≠ recycled; no city recycling rate exists for Mumbai."
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "NULL: CPCB reports ~48% 'processed/treated', which includes Delhi's waste-to-energy incineration and composting — not a recycling/material-recovery share; no official recycling rate exists."
   },
   "Abu Dhabi": {
    "value": 32.0,
    "year": "2024",
    "source": "Tadweer Group (Abu Dhabi government waste management company) Sustainability Report 2024, esg.tadweer.ae",
    "note": "Landfill-DIVERSION of non-hazardous waste (recycling + composting + further treatment), Tadweer Sustainability Report 2024. Geography: the EMIRATE of Abu Dhabi (Tadweer manages the whole emirate's waste), not the city proper."
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
   },
   "Stockholm": {
    "value": 80.21,
    "year": "2024",
    "source": "Stockholm (eGovKB id 70)",
    "note": "raw LOSI 0.8021, rank 27; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Oslo": {
    "value": 78.13,
    "year": "2024",
    "source": "Oslo (eGovKB id 153)",
    "note": "raw LOSI 0.7813, rank 35; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Helsinki": {
    "value": 81.25,
    "year": "2024",
    "source": "Helsinki (eGovKB id 29)",
    "note": "raw LOSI 0.8125, rank 21; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Madrid": {
    "value": 92.71,
    "year": "2024",
    "source": "Madrid (eGovKB id 68)",
    "note": "raw LOSI 0.9271, rank 1; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Milan": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Rome": {
    "value": 81.25,
    "year": "2024",
    "source": "Roma (eGovKB id 41)",
    "note": "raw LOSI 0.8125, rank 21; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Munich": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Frankfurt": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Hamburg": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Brussels": {
    "value": 73.96,
    "year": "2024",
    "source": "Brussels (eGovKB id 10)",
    "note": "raw LOSI 0.7396, rank 43; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Dublin": {
    "value": 68.75,
    "year": "2024",
    "source": "Dublin (eGovKB id 116)",
    "note": "raw LOSI 0.6875, rank 47; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Lisbon": {
    "value": 70.83,
    "year": "2024",
    "source": "Lisbon (eGovKB id 60)",
    "note": "raw LOSI 0.7083, rank 45; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Prague": {
    "value": 67.71,
    "year": "2024",
    "source": "Prague (eGovKB id 23)",
    "note": "raw LOSI 0.6771, rank 49; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Warsaw": {
    "value": 77.08,
    "year": "2024",
    "source": "Warsaw (eGovKB id 59)",
    "note": "raw LOSI 0.7708, rank 37; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Istanbul": {
    "value": 89.58,
    "year": "2024",
    "source": "Istanbul (eGovKB id 75)",
    "note": "raw LOSI 0.8958, rank 7; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Montreal": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Vancouver": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Chicago": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Boston": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Los Angeles": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Seattle": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Washington DC": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Sydney": {
    "value": 77.08,
    "year": "2024",
    "source": "Sydney (eGovKB id 5)",
    "note": "raw LOSI 0.7708, rank 37; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Auckland": {
    "value": 80.21,
    "year": "2024",
    "source": "Auckland (eGovKB id 95)",
    "note": "raw LOSI 0.8021, rank 27; verified identical in Technical Appendix Table 12 (UN E-Government Survey 2024) AND eGovKB city page dataYear/2024."
   },
   "Osaka": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Tel Aviv": {
    "value": null,
    "year": "2024",
    "note": "not assessed (not the country's most populous city)"
   },
   "Hong Kong": {
    "value": null,
    "year": "2024",
    "note": "UN LOSI 2024 assesses one city per UN member state (the most populous); China's assessed city is Shanghai. Hong Kong SAR not assessed."
   },
   "Taipei": {
    "value": null,
    "year": "2024",
    "note": "Taiwan is not covered by the UN E-Government Survey; no LOSI assessment."
   },
   "Bangkok": {
    "value": 66.67,
    "year": "2024",
    "source": "UN LOSI 2024 (raw 0.6667, rank 51)",
    "note": "UN E-Government Survey 2024 Technical Appendix Table 12; cross-checked against eGovKB city page id/73-Bangkok/dataYear/2024 (0.6667, rank 51). Stored as raw x100."
   },
   "Kuala Lumpur": {
    "value": 59.38,
    "year": "2024",
    "source": "UN LOSI 2024 (raw 0.5938, rank 62)",
    "note": "Malaysia's assessed LOSI city confirmed as Kuala Lumpur. Table 12 + eGovKB id/48-Kuala-Lumpur (0.5938, rank 62 match). Stored as raw x100."
   },
   "Jakarta": {
    "value": 68.75,
    "year": "2024",
    "source": "UN LOSI 2024 (raw 0.6875, rank 47)",
    "note": "Table 12 + eGovKB id/38-Jakarta (0.6875, rank 47 match). Stored as raw x100."
   },
   "Manila": {
    "value": 60.42,
    "year": "2024",
    "source": "UN LOSI 2024 — assessed city: Quezon City (raw 0.6042, rank 59)",
    "note": "WITHIN-METRO NOTE: the UN assessed Quezon City (the Philippines' most populous city, within Metro Manila), not the City of Manila; recorded under Manila per v1.0 precedent. Table 12 + eGovKB id/164-Quezon (0.6042, rank 5"
   },
   "Ho Chi Minh City": {
    "value": 63.54,
    "year": "2024",
    "source": "UN LOSI 2024 (raw 0.6354, rank 53)",
    "note": "Viet Nam's assessed LOSI city confirmed as Ho Chi Minh City. Table 12 + eGovKB id/84-Ho-Chi-Minh (0.6354, rank 53 match). Stored as raw x100."
   },
   "Mumbai": {
    "value": 56.25,
    "year": "2024",
    "source": "UN LOSI 2024 (raw 0.5625, rank 70)",
    "note": "India's assessed LOSI city confirmed as Mumbai (not Delhi). Table 12 + eGovKB id/37-Mumbai (0.5625, rank 70 match). Stored as raw x100."
   },
   "Abu Dhabi": {
    "value": null,
    "year": "2024",
    "note": "UAE's assessed LOSI city is Dubai (already in dataset); Abu Dhabi not assessed."
   },
   "Shanghai": {
    "value": 86.46,
    "year": "2024",
    "source": "UN LOSI 2024 (raw 0.8646, rank 12)",
    "note": "China's assessed LOSI city. Table 12 + eGovKB id/19-Shanghai (0.8646, rank 12 match). Stored as raw x100."
   },
   "Beijing": {
    "value": null,
    "year": "2024",
    "note": "China's assessed LOSI city is Shanghai (most populous city rule); Beijing not assessed."
   },
   "Shenzhen": {
    "value": null,
    "year": "2024",
    "note": "China's assessed LOSI city is Shanghai; Shenzhen not assessed."
   },
   "Delhi": {
    "value": null,
    "year": "2024",
    "note": "India's assessed LOSI city is Mumbai (confirmed in Table 12); Delhi not assessed."
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
   },
   "Stockholm": {
    "value": 95.8,
    "year": "2025",
    "source": "Sweden (SWE) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Oslo": {
    "value": 99.0,
    "year": "2024",
    "source": "Norway (NOR) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Helsinki": {
    "value": 93.7,
    "year": "2024",
    "source": "Finland (FIN) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Madrid": {
    "value": 95.8,
    "year": "2024",
    "source": "Spain (ESP) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Milan": {
    "value": 89.2,
    "year": "2024",
    "source": "Italy (ITA) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Rome": {
    "value": 89.2,
    "year": "2024",
    "source": "Italy (ITA) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Munich": {
    "value": 93.5,
    "year": "2024",
    "source": "Germany (DEU) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Frankfurt": {
    "value": 93.5,
    "year": "2024",
    "source": "Germany (DEU) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Hamburg": {
    "value": 93.5,
    "year": "2024",
    "source": "Germany (DEU) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Brussels": {
    "value": 95.8,
    "year": "2024",
    "source": "Belgium (BEL) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Dublin": {
    "value": 97.2,
    "year": "2024",
    "source": "Ireland (IRL) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Lisbon": {
    "value": 88.5,
    "year": "2024",
    "source": "Portugal (PRT) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Prague": {
    "value": 87.7,
    "year": "2024",
    "source": "Czechia (CZE) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Warsaw": {
    "value": 88.6,
    "year": "2024",
    "source": "Poland (POL) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Istanbul": {
    "value": 89.8,
    "year": "2025",
    "source": "Turkiye (TUR) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Montreal": {
    "value": 94.4,
    "year": "2024",
    "source": "Canada (CAN) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Vancouver": {
    "value": 94.4,
    "year": "2024",
    "source": "Canada (CAN) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Chicago": {
    "value": 94.7,
    "year": "2024",
    "source": "United States (USA) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Boston": {
    "value": 94.7,
    "year": "2024",
    "source": "United States (USA) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Los Angeles": {
    "value": 94.7,
    "year": "2024",
    "source": "United States (USA) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Seattle": {
    "value": 94.7,
    "year": "2024",
    "source": "United States (USA) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Washington DC": {
    "value": 94.7,
    "year": "2024",
    "source": "United States (USA) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Sydney": {
    "value": 96.1,
    "year": "2024",
    "source": "Australia (AUS) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Auckland": {
    "value": 93.5,
    "year": "2024",
    "source": "New Zealand (NZL) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Osaka": {
    "value": 85.5,
    "year": "2024",
    "source": "Japan (JPN) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Tel Aviv": {
    "value": 88.2,
    "year": "2024",
    "source": "Israel (ISR) — country proxy",
    "note": "World Bank WDI IT.NET.USER.ZS (individuals using the Internet, % of population), mrnev=1; API lastupdated 2026-07-01"
   },
   "Hong Kong": {
    "value": 95.8,
    "year": "2024",
    "source": "Hong Kong SAR, China (HKG)",
    "note": "World Bank API IT.NET.USER.ZS mrnev=1; raw 95.75536971"
   },
   "Taipei": {
    "value": 88.8,
    "year": "2025",
    "source": "Taiwan - TWNIC 2025 Taiwan Internet Report",
    "note": "Taiwan not in World Bank WDI. TWNIC 2025 Taiwan Internet Report (report.twnic.tw/2025/en): 'Internet access rate 88.75%'; survey conducted Jul 28-Sep 1 2025 among people aged 18+, weighted, n=2,142. Methodology differs f"
   },
   "Bangkok": {
    "value": 90.9,
    "year": "2024",
    "source": "Thailand (THA)",
    "note": "World Bank API; raw 90.86718789"
   },
   "Kuala Lumpur": {
    "value": 98.0,
    "year": "2024",
    "source": "Malaysia (MYS)",
    "note": "World Bank API; raw 98.0206059"
   },
   "Jakarta": {
    "value": 72.8,
    "year": "2024",
    "source": "Indonesia (IDN)",
    "note": "World Bank API; raw 72.78075544"
   },
   "Manila": {
    "value": 67.3,
    "year": "2024",
    "source": "Philippines (PHL)",
    "note": "World Bank API; raw 67.26300914"
   },
   "Ho Chi Minh City": {
    "value": 84.2,
    "year": "2024",
    "source": "Viet Nam (VNM)",
    "note": "World Bank API; raw 84.15 (rounds half-up to 84.2)"
   },
   "Mumbai": {
    "value": 70.0,
    "year": "2025",
    "source": "India (IND)",
    "note": "World Bank API; reported as integer 70; shared with Delhi (country proxy)"
   },
   "Abu Dhabi": {
    "value": 100.0,
    "year": "2024",
    "source": "United Arab Emirates (ARE)",
    "note": "World Bank API; source records exactly 100 (same UAE value as Dubai in dataset)"
   },
   "Shanghai": {
    "value": 91.6,
    "year": "2025",
    "source": "China (CHN)",
    "note": "World Bank API; raw 91.6; shared with Beijing and Shenzhen (country proxy)"
   },
   "Beijing": {
    "value": 91.6,
    "year": "2025",
    "source": "China (CHN)",
    "note": "Same China national value (country proxy)"
   },
   "Shenzhen": {
    "value": 91.6,
    "year": "2025",
    "source": "China (CHN)",
    "note": "Same China national value (country proxy)"
   },
   "Delhi": {
    "value": 70.0,
    "year": "2025",
    "source": "India (IND)",
    "note": "Same India national value as Mumbai (country proxy)"
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
   },
   "Hong Kong": {
    "value": 66154,
    "year": "2024",
    "source": "World Bank NY.GDP.PCAP.PP.KD - GDP per capita, PPP (constant 2021 international $), Hong Kong SAR",
    "note": "SAR-level figure (city-territory, Singapore treatment); constant-PPP basis close to but not identical with the OECD metros (2021 vs 2015 base) - disclosed."
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Kuala Lumpur": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Mumbai": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
   },
   "Shanghai": {
    "value": null,
    "year": "n/a",
    "note": "Municipal GDP published in CNY (official); no PPP metro figure exists and self-converting would be modelling - blank per rule 1."
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "Municipal GDP published in CNY (official); no PPP metro figure exists and self-converting would be modelling - blank per rule 1."
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "Municipal GDP published in CNY (official); no PPP metro figure exists and self-converting would be modelling - blank per rule 1."
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "No honest metro PPP GDP exists: municipal GDP is published in local currency only, and converting it with our own PPP factors would be modelling (banned by rule 1)."
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
   },
   "Stockholm": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Oslo": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Helsinki": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Madrid": {
    "value": 21.0,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 1407,
    "pagePopulation": 6700000
   },
   "Milan": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Rome": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Munich": {
    "value": 52.5,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 1313,
    "pagePopulation": 2500000
   },
   "Frankfurt": {
    "value": 7.8,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 452,
    "pagePopulation": 5800000
   },
   "Hamburg": {
    "value": 13.6,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 694,
    "pagePopulation": 5100000
   },
   "Brussels": {
    "value": 15.3,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 383,
    "pagePopulation": 2500000
   },
   "Dublin": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Lisbon": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Prague": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Warsaw": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Istanbul": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Montreal": {
    "value": 24.4,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 1050,
    "pagePopulation": 4300000
   },
   "Vancouver": {
    "value": 56.4,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 1691,
    "pagePopulation": 3000000
   },
   "Chicago": {
    "value": 29.4,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 2936,
    "pagePopulation": 10000000
   },
   "Boston": {
    "value": 126.9,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 6217,
    "pagePopulation": 4900000
   },
   "Los Angeles": {
    "value": 45.6,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 8475,
    "pagePopulation": 18600000
   },
   "Seattle": {
    "value": 73.8,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 2951,
    "pagePopulation": 4000000
   },
   "Washington DC": {
    "value": 36.9,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 2323,
    "pagePopulation": 6300000
   },
   "Sydney": {
    "value": 40.1,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 2087,
    "pagePopulation": 5200000
   },
   "Auckland": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Osaka": {
    "value": 3.7,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "trackedStartups": 720,
    "pagePopulation": 19300000
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0."
   },
   "Hong Kong": {
    "value": 16.5,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712080815 of https://dealroom.co/cities/hong-kong/ — peer-table self row (#15): Combined EV=$179B, 5-yr EV growth=12.4×, Unicorns=20, VC invested=$3.1B, Tracked startups=1,235; hero: 'Metro area · Asia · Pop. 7.5M · #37 city by EV'",
    "trackedStartups": 1235,
    "pagePopulation": 7500000
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0. Capture: web.archive.org capture 20260712081007 of https://dealroom.co/cities/taipei/"
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0. Capture: web.archive.org capture 20260712081154 of https://dealroom.co/cities/bangkok/"
   },
   "Kuala Lumpur": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0. Capture: web.archive.org capture 20260712081400 of https://dealroom.co/cities/kuala-lumpur/"
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0. Capture: web.archive.org capture 20260712081519 of https://dealroom.co/cities/jakarta/"
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0. Capture: web.archive.org capture 20260712081718 of https://dealroom.co/cities/manila/"
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0. Capture: web.archive.org capture 20260712081817 of https://dealroom.co/cities/ho-chi-minh/"
   },
   "Mumbai": {
    "value": 8.7,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081906 of https://dealroom.co/cities/mumbai/ — peer-table self row (#2): Combined EV=$243B, 5-yr EV growth=15.3×, Unicorns=26, VC invested=$2.8B, Tracked startups=1,995; hero: 'Metro area · India · Pop. 22.9M · #25 city by EV'",
    "trackedStartups": 1995,
    "pagePopulation": 22900000
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "Hub page renders no startup count (no comparison table), as with Copenhagen/Vienna/Seoul/Dubai in v1.0. Capture: web.archive.org capture 20260712081955 of https://dealroom.co/cities/abu-dhabi/"
   },
   "Shanghai": {
    "value": 11.7,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082046 of https://dealroom.co/cities/shanghai/ — peer-table self row (#5): Combined EV=$1T, 5-yr EV growth=5.3×, Unicorns=128, VC invested=$4.1B, Tracked startups=3,500; hero: 'Metro area · China · Pop. 29.9M · #12 city by EV'",
    "trackedStartups": 3500,
    "pagePopulation": 29900000
   },
   "Beijing": {
    "value": 19.1,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082234 of https://dealroom.co/cities/beijing/ — peer-table self row (#3): Combined EV=$1.6T, 5-yr EV growth=3.6×, Unicorns=169, VC invested=$6.3B, Tracked startups=4,278; hero: 'Metro area · China · Pop. 22.4M · #8 city by EV'",
    "trackedStartups": 4278,
    "pagePopulation": 22400000
   },
   "Shenzhen": {
    "value": 9.2,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082325 of https://dealroom.co/cities/shenzhen/ — peer-table self row (#4): Combined EV=$1T, 5-yr EV growth=1.9×, Unicorns=49, VC invested=$2B, Tracked startups=2,152; hero: 'Metro area · China · Pop. 23.3M · #11 city by EV'",
    "trackedStartups": 2152,
    "pagePopulation": 23300000
   },
   "Delhi": {
    "value": 8.4,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082414 of https://dealroom.co/cities/delhi/ — peer-table self row (#3): Combined EV=$228B, 5-yr EV growth=6.1×, Unicorns=30, VC invested=$2.8B, Tracked startups=2,403; hero: 'Metro area · India · Pop. 28.5M · #27 city by EV'",
    "trackedStartups": 2403,
    "pagePopulation": 28500000
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
   },
   "Stockholm": {
    "value": 1167,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 2800000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 2400000
   },
   "Oslo": {
    "value": 297,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 564900000,
    "vcWindow": "not stated on page",
    "pagePopulation": 1900000
   },
   "Helsinki": {
    "value": 688,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 1100000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 1600000
   },
   "Madrid": {
    "value": 179,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 1200000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 6700000
   },
   "Milan": {
    "value": 344,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 1100000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 3200000
   },
   "Rome": {
    "value": 58,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 254700000,
    "vcWindow": "not stated on page",
    "pagePopulation": 4400000
   },
   "Munich": {
    "value": 1280,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 3200000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 2500000
   },
   "Frankfurt": {
    "value": 18,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 105300000,
    "vcWindow": "not stated on page",
    "pagePopulation": 5800000
   },
   "Hamburg": {
    "value": 34,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 175200000,
    "vcWindow": "not stated on page",
    "pagePopulation": 5100000
   },
   "Brussels": {
    "value": 55,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 138500000,
    "vcWindow": "not stated on page",
    "pagePopulation": 2500000
   },
   "Dublin": {
    "value": 456,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 958400000,
    "vcWindow": "not stated on page",
    "pagePopulation": 2100000
   },
   "Lisbon": {
    "value": 82,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 237200000,
    "vcWindow": "not stated on page",
    "pagePopulation": 2900000
   },
   "Prague": {
    "value": 69,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 185500000,
    "vcWindow": "not stated on page",
    "pagePopulation": 2700000
   },
   "Warsaw": {
    "value": 91,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 281400000,
    "vcWindow": "not stated on page",
    "pagePopulation": 3100000
   },
   "Istanbul": {
    "value": 40,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 636900000,
    "vcWindow": "not stated on page",
    "pagePopulation": 15800000
   },
   "Montreal": {
    "value": 226,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 971400000,
    "vcWindow": "not stated on page",
    "pagePopulation": 4300000
   },
   "Vancouver": {
    "value": 600,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 1800000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 3000000
   },
   "Chicago": {
    "value": 210,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 2100000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 10000000
   },
   "Boston": {
    "value": 2714,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 13300000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 4900000
   },
   "Los Angeles": {
    "value": 876,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 16300000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 18600000
   },
   "Seattle": {
    "value": 1650,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 6600000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 4000000
   },
   "Washington DC": {
    "value": 556,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 3500000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 6300000
   },
   "Sydney": {
    "value": 250,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 1300000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 5200000
   },
   "Auckland": {
    "value": 166,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 281400000,
    "vcWindow": "not stated on page",
    "pagePopulation": 1700000
   },
   "Osaka": {
    "value": 21,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 406500000,
    "vcWindow": "not stated on page",
    "pagePopulation": 19300000
   },
   "Tel Aviv": {
    "value": 2111,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712 of dealroom.co hub page",
    "vcInvestedUsd": 9500000000,
    "vcWindow": "not stated on page",
    "pagePopulation": 4500000
   },
   "Hong Kong": {
    "value": 413,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712080815 of https://dealroom.co/cities/hong-kong/ — peer-table self row (#15): Combined EV=$179B, 5-yr EV growth=12.4×, Unicorns=20, VC invested=$3.1B, Tracked startups=1,235; hero: 'Metro area · Asia · Pop. 7.5M · #37 city by EV'",
    "vcInvestedUsd": 3100000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 7500000
   },
   "Taipei": {
    "value": 25,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081007 of https://dealroom.co/cities/taipei/ — no peer table rendered; VC invested from the page's own meta description; hero: 'Metro area · Taiwan · Pop. 7M'",
    "vcInvestedUsd": 172100000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 7000000
   },
   "Bangkok": {
    "value": 8,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081154 of https://dealroom.co/cities/bangkok/ — no peer table rendered; VC invested from the page's own meta description; hero: 'Metro area · Thailand · Pop. 14.6M'",
    "vcInvestedUsd": 120700000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 14600000
   },
   "Kuala Lumpur": {
    "value": 19,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081400 of https://dealroom.co/cities/kuala-lumpur/ — no peer table rendered; VC invested from the page's own meta description; hero: 'Metro area · Malaysia · Pop. 8.5M'",
    "vcInvestedUsd": 163700000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 8500000
   },
   "Jakarta": {
    "value": 13,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081519 of https://dealroom.co/cities/jakarta/ — no peer table rendered; VC invested from the page's own meta description; hero: 'Metro area · Indonesia · Pop. 31.7M'",
    "vcInvestedUsd": 407800000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 31700000
   },
   "Manila": {
    "value": 10,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081718 of https://dealroom.co/cities/manila/ — no peer table rendered; VC invested from the page's own meta description; hero: 'Metro area · Philippines · Pop. 13.5M'",
    "vcInvestedUsd": 129100000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 13500000
   },
   "Ho Chi Minh City": {
    "value": 9,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081817 of https://dealroom.co/cities/ho-chi-minh/ — no peer table rendered; VC invested from the page's own meta description; hero: 'Metro area · Vietnam · Pop. 21.3M'",
    "vcInvestedUsd": 200300000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 21300000
   },
   "Mumbai": {
    "value": 122,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081906 of https://dealroom.co/cities/mumbai/ — peer-table self row (#2): Combined EV=$243B, 5-yr EV growth=15.3×, Unicorns=26, VC invested=$2.8B, Tracked startups=1,995; hero: 'Metro area · India · Pop. 22.9M · #25 city by EV'",
    "vcInvestedUsd": 2800000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 22900000
   },
   "Abu Dhabi": {
    "value": 136,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712081955 of https://dealroom.co/cities/abu-dhabi/ — no peer table rendered; VC invested from the page's own meta description; hero: 'Metro area · United Arab Emirates · Pop. 1.6M'",
    "vcInvestedUsd": 218000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 1600000
   },
   "Shanghai": {
    "value": 137,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082046 of https://dealroom.co/cities/shanghai/ — peer-table self row (#5): Combined EV=$1T, 5-yr EV growth=5.3×, Unicorns=128, VC invested=$4.1B, Tracked startups=3,500; hero: 'Metro area · China · Pop. 29.9M · #12 city by EV'",
    "vcInvestedUsd": 4100000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 29900000
   },
   "Beijing": {
    "value": 281,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082234 of https://dealroom.co/cities/beijing/ — peer-table self row (#3): Combined EV=$1.6T, 5-yr EV growth=3.6×, Unicorns=169, VC invested=$6.3B, Tracked startups=4,278; hero: 'Metro area · China · Pop. 22.4M · #8 city by EV'",
    "vcInvestedUsd": 6300000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 22400000
   },
   "Shenzhen": {
    "value": 86,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082325 of https://dealroom.co/cities/shenzhen/ — peer-table self row (#4): Combined EV=$1T, 5-yr EV growth=1.9×, Unicorns=49, VC invested=$2B, Tracked startups=2,152; hero: 'Metro area · China · Pop. 23.3M · #11 city by EV'",
    "vcInvestedUsd": 2000000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 23300000
   },
   "Delhi": {
    "value": 98,
    "year": "2026-07-12 (live db)",
    "source": "web.archive.org capture 20260712082414 of https://dealroom.co/cities/delhi/ — peer-table self row (#3): Combined EV=$228B, 5-yr EV growth=6.1×, Unicorns=30, VC invested=$2.8B, Tracked startups=2,403; hero: 'Metro area · India · Pop. 28.5M · #27 city by EV'",
    "vcInvestedUsd": 2800000000,
    "vcWindow": "not stated on page (label 'VC invested', no time window shown)",
    "pagePopulation": 28500000
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
   },
   "Shanghai": {
    "value": 33.9,
    "year": "2020",
    "source": "Shanghai Statistical Yearbook 2025, Table 2.13 (7th National Population Census): 33,872 per 100,000 with university education",
    "note": "DIFFERENT BASIS: share of the TOTAL resident population of ALL AGES (not 25-64) with junior college (大专) and above, incl. non-completers and current students — like Dubai, not comparable with OECD shares. Official statistic; independent verification not possible."
   },
   "Beijing": {
    "value": 42.0,
    "year": "2020",
    "raw": 41.98,
    "source": "Beijing 7th National Population Census communiqué No.4: 41,980 per 100,000 with university education",
    "note": "DIFFERENT BASIS: TOTAL population of all ages (not 25-64), junior college and above, incl. non-completers and current students. Official statistic; independent verification not possible."
   },
   "Shenzhen": {
    "value": 28.8,
    "year": "2020",
    "raw": 28.849,
    "source": "Guangdong 7th National Population Census communiqué No.5, Table 5-1: 28,849 per 100,000 with university education",
    "note": "DIFFERENT BASIS: TOTAL population of all ages (not 25-64), junior college and above — highest of all 21 Guangdong cities. Official statistic; independent verification not possible."
   },
   "Hong Kong": {
    "value": 35.7,
    "year": "2024",
    "source": "Computed from C&SD 'Women and Men in Hong Kong 2025', Table 4.1: (589,000 post-secondary non-degree + 1,794,600 degree) / 6,683,000 aged 15+",
    "note": "DIFFERENT BASIS: population aged 15+ (not 25-64), highest level ATTENDED whether or not completed (General Household Survey). Exact division of published counts."
   },
   "Taipei": {
    "value": 66.2,
    "year": "2025",
    "source": "Computed from Taipei Dept. of Civil Affairs / MOI household-registration table: 1,422,066 aged 15+ with junior college and above / 2,147,609 aged 15+",
    "note": "DIFFERENT BASIS: registered population aged 15+ (not 25-64), 大專以上 per MOI grouping (incl. non-completers). National comparator on the same basis: 51.4%. Exact division of published counts."
   },
   "Bangkok": {
    "value": 17.4,
    "year": "2022",
    "raw": 17.35,
    "source": "World Bank/UNESCO UIS SE.TER.CUAT.BA.ZS — Thailand: population 25+ with at least a Bachelor's",
    "note": "COUNTRY proxy AND narrower basis (bachelor's-and-above excludes short-cycle tertiary); Thai NSO Bangkok tables not fetchable this session."
   },
   "Kuala Lumpur": {
    "value": 34.9,
    "year": "2024",
    "source": "DOSM Labour Force Survey Report Malaysia 2024: tertiary-educated share of employed persons",
    "note": "COUNTRY proxy AND different basis: share of EMPLOYED PERSONS, Malaysia-wide (no fetchable state attainment table)."
   },
   "Jakarta": {
    "value": 9.3,
    "year": "2023",
    "raw": 9.33,
    "source": "World Bank/UNESCO UIS SE.TER.CUAT.BA.ZS — Indonesia: population 25+ with at least a Bachelor's",
    "note": "COUNTRY proxy AND narrower basis (bachelor's-and-above). DKI Jakarta's true share is well above this national figure (provincial tables were unfetchable) — treat as a lower bound."
   },
   "Manila": {
    "value": 32.3,
    "year": "2020",
    "source": "Computed from PSA 2020 Census attainment table: (162,655 short-cycle + 2,132,943 college + 70,552 post-bacc graduates) / 7,318,450 aged 25+",
    "note": "NCR (Metro Manila) region, aged 25+, highest COMPLETED level. Exact division of published census counts (via archived copy of the official XLSX; psa.gov.ph blocked)."
   },
   "Ho Chi Minh City": {
    "value": 27.9,
    "year": "2020",
    "source": "GSO Viet Nam Labour Force Survey 2020, Table 1.4: HCMC labour force with college (4.0%) + university and above (23.9%)",
    "note": "DIFFERENT BASIS: share of the LABOUR FORCE (not population 25-64), 2020 — newer provincial LFS tables not fetchable. Sum of two published components."
   },
   "Mumbai": {
    "value": 18.8,
    "year": "2023-24",
    "source": "India PLFS Annual Report 2023-24, Table 8 — Maharashtra, persons 15+: diploma 1.7 + graduate 13.5 + postgraduate+ 3.6",
    "note": "STATE proxy (Maharashtra) AND different basis: persons aged 15+, rural+urban. Sum of published shares."
   },
   "Delhi": {
    "value": 24.2,
    "year": "2023-24",
    "source": "India PLFS Annual Report 2023-24, Table 8 — NCT of Delhi, persons 15+: diploma 0.3 + graduate 19.1 + postgraduate+ 4.8",
    "note": "NCT of Delhi (state = city-region), persons aged 15+. Sum of published shares."
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "NULL: no official figure fetchable this session — SCAD unreachable, UAE stat portals 403, and the World Bank/UIS publish no tertiary-attainment series for the UAE."
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
   },
   "Stockholm": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Stockholm']",
    "note": "KTH Royal Institute of Technology (78); Stockholm University (147)"
   },
   "Oslo": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Oslo']",
    "note": "University of Oslo (119)"
   },
   "Helsinki": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Helsinki']",
    "note": "University of Helsinki (116) Aalto is in Espoo (excluded, city-proper rule)."
   },
   "Madrid": {
    "value": 4,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Madrid']",
    "note": "Complutense University of Madrid (187); Universidad Autónoma de Madrid (206); Universidad Carlos III de Madrid (UC3M) (301); Universidad Politécnica de Madrid (UPM) (334)"
   },
   "Milan": {
    "value": 4,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Milan', 'Milan,']",
    "note": "Politecnico di Milano (98); University of Milan (276); Università Cattolica del Sacro Cuore (409); Università Vita-Salute San Raffaele (461)"
   },
   "Rome": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Rome']",
    "note": "Sapienza University of Rome (128); University of Rome \"Tor Vergata\" (355)"
   },
   "Munich": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Munich']",
    "note": "Technical University of Munich (22); Ludwig-Maximilians-Universität München (58)"
   },
   "Frankfurt": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Frankfurt am Main']",
    "note": "Goethe-University Frankfurt am Main (316)"
   },
   "Hamburg": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Hamburg']",
    "note": "Universität Hamburg (193)"
   },
   "Brussels": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Brussels']",
    "note": "Universite libre de Bruxelles (227); Vrije Universiteit Brussel (VUB) (294)"
   },
   "Dublin": {
    "value": 3,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Dublin']",
    "note": "Trinity College Dublin, The University of Dublin (75); University College Dublin (118); Dublin City University (410)"
   },
   "Lisbon": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Lisbon']",
    "note": "University of Lisbon (230); Universidade Nova de Lisboa (327)"
   },
   "Prague": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Prague']",
    "note": "Charles University (265); Czech Technical University in Prague (416)"
   },
   "Warsaw": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Warsaw']",
    "note": "University of Warsaw (271); Warsaw University of Technology (487)"
   },
   "Istanbul": {
    "value": 4,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Istanbul']",
    "note": "Istanbul Technical University (298); Koç University (323); Boğaziçi University (371); Sabanci University (404)"
   },
   "Montreal": {
    "value": 3,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Montreal']",
    "note": "McGill University (27); Université de Montréal (168); Concordia University (465)"
   },
   "Vancouver": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Vancouver']",
    "note": "University of British Columbia (40)"
   },
   "Chicago": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Chicago']",
    "note": "University of Chicago (13); University of Illinois Chicago (UIC) (334)"
   },
   "Boston": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Boston']",
    "note": "Boston University (88); Northeastern University (384) Harvard/MIT are in Cambridge (excluded, city-proper rule)."
   },
   "Los Angeles": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Los Angeles']",
    "note": "University of California, Los Angeles (UCLA) (46); University of Southern California (146)"
   },
   "Seattle": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Seattle']",
    "note": "University of Washington (81)"
   },
   "Washington DC": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Washington D.C.']",
    "note": "Georgetown University (285); George Washington University (358)"
   },
   "Sydney": {
    "value": 4,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Sydney']",
    "note": "The University of New South Wales (UNSW Sydney) (20); The University of Sydney (25); The University of Technology Sydney (UTS) (96); Macquarie University (Sydney, Australia) (138)"
   },
   "Auckland": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Auckland']",
    "note": "The University of Auckland (65); Auckland University of Technology (AUT) (410)"
   },
   "Osaka": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Osaka City', 'Osaka']",
    "note": "The University of Osaka (91) QS label 'Osaka City'."
   },
   "Tel Aviv": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Tel Aviv']",
    "note": "Tel Aviv University (223)"
   },
   "Hong Kong": {
    "value": 5,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Hong Kong']",
    "note": "The University of Hong Kong (11); The Chinese University of Hong Kong (CUHK) (32); The Hong Kong University of Science and Technology (44); The Hong Kong Polytechnic University (54"
   },
   "Taipei": {
    "value": 4,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Taipei', 'Taipei City']",
    "note": "National Taiwan University (NTU) (63); National Taiwan University of Science and Technology (Taiwan Tech) (345); National Taipei University of Technology (420); National Taiwan Nor"
   },
   "Bangkok": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Bangkok']",
    "note": "Chulalongkorn University (221)"
   },
   "Kuala Lumpur": {
    "value": 4,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Kuala Lumpur']",
    "note": "Universiti Malaya (UM) (58); Taylor's University (253); UCSI University (269); Sunway University (410)"
   },
   "Jakarta": {
    "value": 0,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): []",
    "note": "True zero: Universitas Indonesia carries QS city Depok (excluded, city-proper rule)."
   },
   "Manila": {
    "value": 0,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): []",
    "note": "True zero: UP Diliman and Ateneo carry QS city Quezon City (excluded, city-proper rule); no Manila-proper top-500 entry."
   },
   "Ho Chi Minh City": {
    "value": 0,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): []",
    "note": "True zero under the city-proper rule."
   },
   "Mumbai": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Mumbai']",
    "note": "Indian Institute of Technology Bombay (IITB) (129)"
   },
   "Delhi": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['New Delhi', 'Delhi']",
    "note": "QS labels: New Delhi (within Delhi NCT, counted). Indian Institute of Technology Delhi (IITD) (123); University of Delhi (328)"
   },
   "Shanghai": {
    "value": 5,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Shanghai']",
    "note": "Fudan University (30); Shanghai Jiao Tong University (47); Tongji University (177); East China Normal University (433); Shanghai University (465)"
   },
   "Beijing": {
    "value": 7,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Beijing']",
    "note": "Peking University (14); Tsinghua University (17); Beijing Normal University (247); Beijing Institute of Technology (259); University of Chinese Academy of Sciences (UCAS) (362); Be"
   },
   "Shenzhen": {
    "value": 2,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Shenzhen']",
    "note": "Southern University of Science and Technology (SUSTech) (343); Shenzhen University (452)"
   },
   "Abu Dhabi": {
    "value": 1,
    "year": "2026",
    "source": "QS WUR 2026, QS city label(s): ['Abu Dhabi']",
    "note": "Khalifa University (177)"
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
   },
   "Stockholm": {
    "value": 27.2,
    "year": "2024",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Stockholm (SE001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Oslo": {
    "value": 28.1,
    "year": "2025",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Oslo (NO001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Helsinki": {
    "value": 17.5,
    "year": "2024",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Helsinki (FI001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Madrid": {
    "value": 22.7,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Madrid (ES001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Milan": {
    "value": 15.0,
    "year": "2021",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Milano (IT002C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Rome": {
    "value": 13.6,
    "year": "2021",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Roma (IT001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Munich": {
    "value": 31.9,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Muenchen (DE003C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Frankfurt": {
    "value": 35.5,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Frankfurt am Main (DE005C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Hamburg": {
    "value": 24.6,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Hamburg (DE002C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Brussels": {
    "value": 43.5,
    "year": "2021",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Bruxelles/Brussel (BE001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP); city-level (Brussels-Capital area per OECD city definition); FUA 2021 = 25.2"
   },
   "Dublin": {
    "value": 26.6,
    "year": "2022",
    "source": "CSO Census 2022 PxStat F1046 — Dublin city and suburbs settlement",
    "note": "CONCEPT: born outside Ireland (foreign-born). 336,021 / 1,263,219 usual residents; CSO-published share 26.6%. OECD DF_ORIGIN has no FB data for IE001C, so national census used (city+suburbs settlement geography)"
   },
   "Lisbon": {
    "value": 17.3,
    "year": "2021",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Lisboa (PT001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Prague": {
    "value": 15.5,
    "year": "2021",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Praha (CZ001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Warsaw": {
    "value": 5.7,
    "year": "2021",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Warszawa (PL001C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP)"
   },
   "Istanbul": {
    "value": null,
    "year": "n/a",
    "note": "CONCEPT: null. OECD DF_ORIGIN has no FB rows for TR012C/F. TurkStat publishes no foreign-BORN statistic by province; its ADNKS 'foreign population' is foreign NATIONALS and explicitly excludes people under temporary protection (mo"
   },
   "Montreal": {
    "value": 24.3,
    "year": "2021",
    "source": "Statistics Canada Census 2021 Profile SDMX (STC_CP,DF_CMACA v1.3) — Montreal CMA (2021S0503462)",
    "note": "CONCEPT: immigrants (foreign-born landed immigrants; excludes non-permanent residents). 1,022,940 / 4,206,455 = 24.32%; same method as v1.0 Toronto"
   },
   "Vancouver": {
    "value": 41.8,
    "year": "2021",
    "source": "Statistics Canada Census 2021 Profile SDMX (STC_CP,DF_CMACA v1.3) — Vancouver CMA (2021S0503933)",
    "note": "CONCEPT: immigrants (foreign-born landed immigrants; excludes non-permanent residents). 1,089,185 / 2,607,015 = 41.78%; same method as v1.0 Toronto"
   },
   "Chicago": {
    "value": 19.4,
    "year": "2024",
    "source": "US Census Bureau ACS 2024 1-year B05012 — Chicago-Naperville-Elgin, IL-IN Metro Area (MSA 16980)",
    "note": "CONCEPT: foreign-born (B05012_003E/B05012_001E). 1,825,700 / 9,406,924 = 19.41%; metro geography"
   },
   "Boston": {
    "value": 20.7,
    "year": "2024",
    "source": "US Census Bureau ACS 2024 1-year B05012 — Boston-Cambridge-Newton, MA-NH Metro Area (MSA 14460)",
    "note": "CONCEPT: foreign-born (B05012_003E/B05012_001E). 1,037,969 / 5,025,517 = 20.65%; metro geography"
   },
   "Los Angeles": {
    "value": 33.4,
    "year": "2024",
    "source": "US Census Bureau ACS 2024 1-year B05012 — Los Angeles-Long Beach-Anaheim, CA Metro Area (MSA 31080)",
    "note": "CONCEPT: foreign-born (B05012_003E/B05012_001E). 4,318,347 / 12,927,614 = 33.40%; metro geography"
   },
   "Seattle": {
    "value": 22.1,
    "year": "2024",
    "source": "US Census Bureau ACS 2024 1-year B05012 — Seattle-Tacoma-Bellevue, WA Metro Area (MSA 42660)",
    "note": "CONCEPT: foreign-born (B05012_003E/B05012_001E). 917,149 / 4,145,494 = 22.12%; metro geography"
   },
   "Washington DC": {
    "value": 24.7,
    "year": "2024",
    "source": "US Census Bureau ACS 2024 1-year B05012 — Washington-Arlington-Alexandria, DC-VA-MD-WV Metro Area (MSA 47900)",
    "note": "CONCEPT: foreign-born (B05012_003E/B05012_001E). 1,589,838 / 6,437,907 = 24.69%; metro geography"
   },
   "Sydney": {
    "value": 38.6,
    "year": "2021",
    "source": "ABS Census 2021 General Community Profile G01 — Greater Sydney (GCCSA 1GSYD)",
    "note": "CONCEPT: born overseas (Birthplace: Elsewhere, excl. not stated) / total persons incl. not stated. 2,021,079 / 5,231,147 = 38.64%; same method as v1.0 Melbourne. OECD CITY value for comparison: 41.7 (2021)"
   },
   "Auckland": {
    "value": 42.5,
    "year": "2023",
    "source": "Stats NZ 2023 Census totals by topic (SA2, StatsNZGeospatial ArcGIS) aggregated to Auckland Region (Regional Council 2023)",
    "note": "CONCEPT: overseas-born / birthplace total incl. not-elsewhere-included. 703,416 / 1,656,468 = 42.46% (633 SA2s; 6 tiny suppressed cells). Cross-checked against Stats NZ place-summary category counts (sum 703,419) and tot"
   },
   "Osaka": {
    "value": 6.8,
    "year": "2025",
    "source": "Osaka Prefecture, Basic Resident Register (Jumin Kihon Daicho) as of 2025-01-01 — Osaka City (Osaka-shi)",
    "note": "CONCEPT: foreign NATIONALS (registered residents), NOT foreign-born — same registry concept as v1.0 Tokyo. 189,281 (93,953 M + 95,328 F) / 2,778,917 = 6.81%; city-proper geography"
   },
   "Tel Aviv": {
    "value": 23.5,
    "year": "2022",
    "source": "OECD DSD_FUA_DEMO@DF_ORIGIN v1.2 (OECD.CFE.EDS), CITY level — Tel Aviv-Yafo (ISR10C)",
    "note": "CONCEPT: foreign-born share of population (OECD ORIGIN=FB, PT_POP); city-level; FUA 2022 = 21.5"
   },
   "Hong Kong": {
    "value": 38.3,
    "year": "2021",
    "source": "Born outside Hong Kong, 2021 Population Census (C&SD)",
    "note": "CONCEPT: place of birth — includes persons born in mainland China/Macao/Taiwan (29.9pp of the 38.3%); born elsewhere only 8.4pp. Main Results Table 3.6: (2,213,862+624,374)/7,413,070 = 38.29%. Interpretation differs shar"
   },
   "Taipei": {
    "value": 3.3,
    "year": "2025",
    "source": "Foreign residents share, NIA valid-ARC holders in Taiwan, Dec 2025",
    "note": "CONCEPT: foreign NATIONALS with residence permits (like Tokyo/Seoul), not foreign-born. NIA 外僑居留人數統計表 11412: Taipei City 84,362 currently-in-Taiwan valid ARC holders; ÷ (2,439,507 household-registered population end-Dec "
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "Thailand NSO's 2020 census counted non-Thai nationals but no verifiable official Bangkok-level share was fetchable; left null rather than estimated."
   },
   "Kuala Lumpur": {
    "value": 13.1,
    "year": "2025",
    "source": "Non-citizens share of population, DOSM current population estimates 2025",
    "note": "CONCEPT: NON-CITIZENS (nationality), not foreign-born. OpenDOSM population_state: W.P. Kuala Lumpur 2025 non-citizens 270.7k / 2,074.1k = 13.05% -> 13.1. Note DOSM rebased non-citizen estimates in the 2024/2025 vintages "
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "BPS publishes no city-level foreign-born or registered-foreigner share for Jakarta; left null."
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "PSA census does not publish a usable city/metro foreign-born share; left null."
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "Viet Nam's census does not publish a city-level foreign-born/registered-foreigner share; left null."
   },
   "Mumbai": {
    "value": null,
    "year": "n/a",
    "note": "India's last published born-abroad data is Census 2011; too stale to mix with 2021-2026 values. Null pending Census 2027."
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "SCAD publishes only a citizens/non-citizens nationality split for the emirate — a different concept, not used (consistent with Dubai's blank in v1.0). No foreign-born stat."
   },
   "Shanghai": {
    "value": null,
    "year": "n/a",
    "note": "2020 census: NBS Communique No.8 gives only COMBINED HK/Macao/Taiwan residents + foreigners per province (Shanghai 163,954, ~0.7% incl. HMT Chinese nationals — wrong concept); foreigners-only exists only as national tota"
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "Same as Shanghai: only combined HMT+foreigners published (Beijing 62,812, ~0.3% incl. HMT). Foreigners-only per city not published. Null."
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "2020 census publishes HMT+foreigners only to province level (Guangdong 418,509); Shenzhen bulletin excludes them from resident population and gives no count. Null."
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "Same as Mumbai: Census 2011 born-abroad is 15 years stale. Null pending Census 2027."
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
   },
   "Stockholm": {
    "value": 70.1,
    "year": "2025",
    "source": "The Stockholm area",
    "note": "transit_pnft_2025=0.7013; stable series (72.1/70.8/70.1)."
   },
   "Oslo": {
    "value": null,
    "year": "2025",
    "note": "NA in all years 2023-2025 - agglomeration present in atlas but no PNFT value (no usable GTFS feed); matches v1.0 projection."
   },
   "Helsinki": {
    "value": 78.0,
    "year": "2025",
    "source": "The Helsinki / Vantaa area",
    "note": "transit_pnft_2025=0.7802; stable series."
   },
   "Madrid": {
    "value": 68.8,
    "year": "2025",
    "source": "The Madrid / Móstoles / Leganés area",
    "note": "transit_pnft_2025=0.6880 (62.2/62.0/68.8)."
   },
   "Milan": {
    "value": 50.4,
    "year": "2025",
    "source": "The Milan / Monza area",
    "note": "transit_pnft_2025=0.5038; stable series."
   },
   "Rome": {
    "value": 71.7,
    "year": "2025",
    "source": "The Rome area",
    "note": "transit_pnft_2025=0.7170; 2024 value (7.5%) was a single-year feed artifact, 2023 (71.5%) and 2025 agree."
   },
   "Munich": {
    "value": 81.9,
    "year": "2025",
    "source": "The Munich area",
    "note": "transit_pnft_2025=0.8190; 2023 (14.1%) was a feed artifact, 2024/2025 agree at ~81.9%."
   },
   "Frankfurt": {
    "value": null,
    "year": "2025",
    "note": "NA in all years 2023-2025 - no PNFT value in atlas feed; matches v1.0 projection."
   },
   "Hamburg": {
    "value": 68.8,
    "year": "2024",
    "source": "The Hamburg area",
    "note": "2025 value (9.8%) is an implausible one-year collapse from 68.6/68.8% - treated as GTFS feed-lapse artifact; using last plausible year 2024 (transit_pnft_2024=0.6879). FLAGGED for review."
   },
   "Brussels": {
    "value": 89.0,
    "year": "2024",
    "source": "The Brussels area",
    "note": "2025 value (40.9%) is an implausible one-year halving vs 83.8/89.0% in 2023/24 - treated as partial-feed artifact; using 2024 (transit_pnft_2024=0.8905). FLAGGED for review."
   },
   "Dublin": {
    "value": 66.3,
    "year": "2025",
    "source": "The Dublin area",
    "note": "transit_pnft_2025=0.6629 (62.9/71.3/66.3)."
   },
   "Lisbon": {
    "value": 43.6,
    "year": "2025",
    "source": "The Lisbon / Amadora / Agualva-Cacém area",
    "note": "transit_pnft_2025=0.4365; 2024 (44.1%) agrees, but 2023 was 74.8% - unexplained persistent drop, possibly a feed-coverage change. Latest retained; treat with caution."
   },
   "Prague": {
    "value": 89.2,
    "year": "2023",
    "source": "The Prague area",
    "note": "2024 (7.7%) and 2025 (6.7%) are implausible collapses from 89.2% - treated as GTFS feed-lapse artifacts; using last plausible year 2023 (transit_pnft_2023=0.8916). FLAGGED for review."
   },
   "Warsaw": {
    "value": 70.1,
    "year": "2025",
    "source": "The Warsaw area",
    "note": "transit_pnft_2025=0.7009; 2024 (69.2%) agrees, 2023 was 81.8%."
   },
   "Istanbul": {
    "value": null,
    "year": "2025",
    "note": "2025=0.2% is a near-zero feed artifact per v1.0 rule; 2023/24 (~3.1%) are also implausibly low for Istanbul's network (partial Turkish GTFS coverage in Mobility Database) - excluded as unreliable. FLAGGED: strict rule ap"
   },
   "Montreal": {
    "value": 52.7,
    "year": "2024",
    "source": "The Montreal / Laval / Longueuil area",
    "note": "2025 value (11.1%) is an implausible one-year collapse from 51.9/52.7% - treated as feed artifact; using 2024 (transit_pnft_2024=0.5271). FLAGGED for review."
   },
   "Vancouver": {
    "value": 53.7,
    "year": "2025",
    "source": "The Vancouver / Surrey / Burnaby area",
    "note": "transit_pnft_2025=0.5370; Canada agglomeration (not 'The Portland / Vancouver / Gresham area', US)."
   },
   "Chicago": {
    "value": 43.2,
    "year": "2025",
    "source": "The Chicago / Evanston / Elmhurst area",
    "note": "transit_pnft_2025=0.4323 (35.4/40.5/43.2)."
   },
   "Boston": {
    "value": 47.6,
    "year": "2025",
    "source": "The Boston / Cambridge / Quincy area",
    "note": "transit_pnft_2025=0.4756; stable series."
   },
   "Los Angeles": {
    "value": 5.7,
    "year": "2025",
    "source": "The Los Angeles / Long Beach / Anaheim area",
    "note": "transit_pnft_2025=0.0570; 2024 (6.9%) agrees, but 2023 was 18.5% - persistent drop, possibly partial feed. Latest retained; treat with caution."
   },
   "Seattle": {
    "value": 26.1,
    "year": "2025",
    "source": "The Seattle / Bellevue area",
    "note": "transit_pnft_2025=0.2607; stable series."
   },
   "Washington DC": {
    "value": 33.1,
    "year": "2025",
    "source": "The Washington / Arlington / Alexandria area",
    "note": "transit_pnft_2025=0.3311; 2024 (33.0%) agrees; 2023 (14.0%) was an artifact year."
   },
   "Sydney": {
    "value": 49.2,
    "year": "2025",
    "source": "The Sydney area",
    "note": "transit_pnft_2025=0.4917; stable series."
   },
   "Auckland": {
    "value": 37.6,
    "year": "2025",
    "source": "The Auckland area",
    "note": "transit_pnft_2025=0.3755; stable series."
   },
   "Osaka": {
    "value": null,
    "year": "2025",
    "note": "All years near-zero (0.9/0.9/0.07%) - feed artifact, Japanese GTFS largely absent from Mobility Database (same pattern as Tokyo 0.12% nulled in v1.0)."
   },
   "Tel Aviv": {
    "value": 87.9,
    "year": "2025",
    "source": "The Tel Aviv / Rishon LeZion / Petah Tikva area",
    "note": "transit_pnft_2025=0.8785; stable series (87.8/86.6/87.9); Israel has comprehensive national GTFS."
   },
   "Hong Kong": {
    "value": 52.2,
    "year": "2025",
    "source": "ITDP Atlas PNFT, The Hong Kong / Kowloon area",
    "note": "series [('2023', 26.3), ('2024', 50.4), ('2025', 52.2)]; 244 qualifying stops - LIKELY PARTIAL FEED for an agglomeration this size; treat as a lower bound."
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "The New Taipei / Taipei / Taoyuan area: only zero/artifact values [('2023', 0.0), ('2024', 0.0), ('2025', 0.0)]"
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "The Bangkok / Nonthaburi / Pak Kret area: only zero/artifact values [('2023', 0.0), ('2024', 0.0), ('2025', 0.0)]"
   },
   "Kuala Lumpur": {
    "value": null,
    "year": "n/a",
    "note": "The Kuala Lumpur / Kajang / Klang area: no PNFT value (no usable open GTFS feed)"
   },
   "Jakarta": {
    "value": 22.6,
    "year": "2025",
    "source": "ITDP Atlas PNFT, The Jakarta / Bekasi / Tangerang area",
    "note": "series [('2023', 24.3), ('2024', 22.9), ('2025', 22.6)]; 6514 qualifying stops"
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "The Quezon City / Manila / Caloocan area: only zero/artifact values [('2023', 0.0), ('2024', 0.0), ('2025', 0.0)]"
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "The Ho Chi Minh City / Thủ Đức / Thủ Dầu Một area: no PNFT value (no usable open GTFS feed)"
   },
   "Mumbai": {
    "value": null,
    "year": "n/a",
    "note": "The Mumbai / Thane / Navi Mumbai area: no PNFT value (no usable open GTFS feed)"
   },
   "Abu Dhabi": {
    "value": 60.8,
    "year": "2023",
    "source": "ITDP Atlas PNFT, The Abu Dhabi area",
    "note": "series [('2023', 60.8), ('2024', 61.4), ('2025', 0.0)]; 239 qualifying stops"
   },
   "Shanghai": {
    "value": null,
    "year": "n/a",
    "note": "The Shanghai / Pudong / Taicang area: no PNFT value (no usable open GTFS feed)"
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "The Beijing / Shunyi / Mentougou area: no PNFT value (no usable open GTFS feed)"
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "The Shenzhen / Guangzhou / Foshan area: only zero/artifact values [('2023', 0.0), ('2024', 0.0), ('2025', 0.0)]"
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "agglomeration: no PNFT value (no usable open GTFS feed)"
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
   },
   "Stockholm": {
    "value": 42.8,
    "year": "2025",
    "source": "Stockholm, SE",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Oslo": {
    "value": 33.2,
    "year": "2025",
    "source": "Oslo, NO",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Helsinki": {
    "value": 51.9,
    "year": "2025",
    "source": "Helsinki, FI",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Madrid": {
    "value": 38.0,
    "year": "2025",
    "source": "Madrid, ES",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Milan": {
    "value": 49.4,
    "year": "2025",
    "source": "Milan, IT",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Rome": {
    "value": 45.2,
    "year": "2025",
    "source": "Rome, IT",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Munich": {
    "value": 43.7,
    "year": "2025",
    "source": "Munich, DE",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Frankfurt": {
    "value": 42.3,
    "year": "2025",
    "source": "Frankfurt am Main, DE",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Hamburg": {
    "value": 49.3,
    "year": "2025",
    "source": "Hamburg, DE",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Brussels": {
    "value": 46.2,
    "year": "2025",
    "source": "Brussels, BE",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Dublin": {
    "value": 72.9,
    "year": "2025",
    "source": "Dublin, IE",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Lisbon": {
    "value": 39.0,
    "year": "2025",
    "source": "Lisboa, PT",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field. Listed as 'Lisboa'."
   },
   "Prague": {
    "value": 53.5,
    "year": "2025",
    "source": "Prague, CZ",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Warsaw": {
    "value": 51.3,
    "year": "2025",
    "source": "Warsaw, PL",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Istanbul": {
    "value": 62.0,
    "year": "2025",
    "source": "Istanbul, TR",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Montreal": {
    "value": 41.3,
    "year": "2025",
    "source": "Montreal, CA",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Vancouver": {
    "value": 56.5,
    "year": "2025",
    "source": "Vancouver, CA",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field. Canada entry (no Vancouver WA/USA in table)."
   },
   "Chicago": {
    "value": 46.1,
    "year": "2025",
    "source": "Chicago, IL, US",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Boston": {
    "value": 42.1,
    "year": "2025",
    "source": "Boston, MA, US",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Los Angeles": {
    "value": 59.8,
    "year": "2025",
    "source": "Los Angeles, CA, US",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Seattle": {
    "value": 44.9,
    "year": "2025",
    "source": "Seattle, WA, US",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Washington DC": {
    "value": 37.3,
    "year": "2025",
    "source": "Washington, DC, US",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field. Entry 'Washington, DC', country US."
   },
   "Sydney": {
    "value": 43.7,
    "year": "2025",
    "source": "Sydney, AU",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Auckland": {
    "value": 42.2,
    "year": "2025",
    "source": "Auckland, NZ",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Osaka": {
    "value": 42.9,
    "year": "2025",
    "source": "Osaka, JP",
    "note": "TomTom Traffic Index 2025 full-year congestion level, City (center) tab; country verified via country field."
   },
   "Tel Aviv": {
    "value": null,
    "year": "2025",
    "note": "Not in TomTom Traffic Index 2025 city table (no Israel entries in the 492-city decoded ranking data)."
   },
   "Hong Kong": {
    "value": 47.7,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Hong Kong, HK",
    "note": "city-tab rank 114"
   },
   "Taipei": {
    "value": 43.6,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Taipei City, TW",
    "note": "city-tab rank 70"
   },
   "Bangkok": {
    "value": 67.9,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Bangkok, TH",
    "note": "city-tab rank 10"
   },
   "Kuala Lumpur": {
    "value": 39.1,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Kuala Lumpur, MY",
    "note": "city-tab rank 128"
   },
   "Jakarta": {
    "value": 59.8,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Jakarta, ID",
    "note": "city-tab rank 24"
   },
   "Manila": {
    "value": 57.3,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Manila, PH",
    "note": "city-tab rank 14"
   },
   "Ho Chi Minh City": {
    "value": 40.3,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Ho Chi Minh, VN",
    "note": "city-tab rank 104"
   },
   "Mumbai": {
    "value": 61.5,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Mumbai, IN",
    "note": "city-tab rank 3"
   },
   "Delhi": {
    "value": 55.4,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - New Delhi, IN",
    "note": "city-tab rank 17"
   },
   "Abu Dhabi": {
    "value": 25.5,
    "year": "2025",
    "source": "TomTom Traffic Index Ranking 2025 - Abu Dhabi, AE",
    "note": "city-tab rank 375"
   },
   "Shanghai": {
    "value": null,
    "year": "n/a",
    "note": "Not in the TomTom 2025 table (TomTom does not cover this market - mainland China and some others excluded)."
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "Not in the TomTom 2025 table (TomTom does not cover this market - mainland China and some others excluded)."
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "Not in the TomTom 2025 table (TomTom does not cover this market - mainland China and some others excluded)."
   }
  }
 },
 "CON-01": {
  "source": "English Wikipedia per-airport \"Airlines and destinations\" tables (passenger sections only)",
  "url": "https://en.wikipedia.org/wiki/ (one article per airport in each city's system; raw wikitext/HTML + per-city destination lists archived in session evidence)",
  "license": "CC BY-SA 4.0 (Wikipedia)",
  "edition": "live tables as of 2026-07-12",
  "retrieved": "2026-07-12",
  "method": "Per airport: parse passenger destination table; include year-round, seasonal and announced routes; exclude charter-only and cargo. Per city: union of INTERNATIONAL (non-domestic) destinations across its airports, deduplicated by wikilink target/normalized name. Counted by parallel agents with a shared rule set; judgment calls recorded per city.",
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
   },
   "Stockholm": {
    "value": 142,
    "year": "2026-07-12",
    "airports": "ARN+BMA+NYO",
    "note": "BMA adds only 2 Swedish domestic routes; Salen/Scandinavian Mtns counted domestic (in Sweden per Wikidata P17); 12 charter-only excluded"
   },
   "Oslo": {
    "value": 125,
    "year": "2026-07-12",
    "airports": "OSL+TRF",
    "note": "Svalbard/Longyearbyen counted domestic (Norway); 1 charter-only excluded"
   },
   "Helsinki": {
    "value": 118,
    "year": "2026-07-12",
    "airports": "HEL",
    "note": "Mariehamn (Aland) counted domestic (Finland); 2 charter-only excluded"
   },
   "Madrid": {
    "value": 197,
    "year": "2026-07-12",
    "airports": "MAD",
    "note": "Canaries+Balearics counted domestic per method note; 5 charter-only excluded"
   },
   "Milan": {
    "value": 244,
    "year": "2026-07-12",
    "airports": "MXP+LIN+BGY",
    "note": "Red Sea Intl (Saudi) excluded as suspended indefinitely (BeOnd); Male retained via another scheduled listing; 1 charter-only excluded"
   },
   "Rome": {
    "value": 219,
    "year": "2026-07-12",
    "airports": "FCO+CIA",
    "note": "FCO table has Refs column (handled); 1 charter-only excluded"
   },
   "Munich": {
    "value": 202,
    "year": "2026-07-12",
    "airports": "MUC",
    "note": "Ben Gurion included: article says suspended until 1 Jul 2026, before retrieval date; EuroAirport Basel counted international (France); 1 charter-only excluded"
   },
   "Frankfurt": {
    "value": 284,
    "year": "2026-07-12",
    "airports": "FRA",
    "note": "EuroAirport Basel counted international (France, though Wikidata also lists Germany); 2 charter-only excluded"
   },
   "Hamburg": {
    "value": 117,
    "year": "2026-07-12",
    "airports": "HAM",
    "note": "EuroAirport Basel counted international (France); no charter-only rows"
   },
   "Brussels": {
    "value": 249,
    "year": "2026-07-12",
    "airports": "BRU+CRL",
    "note": "No Belgian domestic destinations at either airport; 1 charter-only excluded"
   },
   "Dublin": {
    "value": 199,
    "year": "2026-07-12",
    "airports": "DUB",
    "note": "Only Donegal+Kerry domestic; Belfast (UK) counted international; 17 charter entries -> 2 charter-only destinations excluded"
   },
   "Lisbon": {
    "value": 146,
    "year": "2026-07-12",
    "airports": "LIS",
    "note": "Madeira+Azores counted domestic (Portugal); Ben Gurion included (suspension ended 1 Jul 2026); 5 charter-only excluded"
   },
   "Prague": {
    "value": 165,
    "year": "2026-07-12",
    "airports": "PRG",
    "note": "21 charter-only destinations excluded (largest charter market in set); no Czech domestic routes"
   },
   "Warsaw": {
    "value": 152,
    "year": "2026-07-12",
    "airports": "WAW+WMI",
    "note": "53 charter-only entries excluded at WAW (bold Charter/Seasonal charter labels)."
   },
   "Istanbul": {
    "value": 322,
    "year": "2026-07-12",
    "airports": "IST+SAW",
    "note": "Nicosia-Ercan (Wikidata: Northern Cyprus/Cyprus) counted international; 4 Iran routes annotated temporarily-suspended retained per strip-annotations rule."
   },
   "Montreal": {
    "value": 139,
    "year": "2026-07-12",
    "airports": "YUL",
    "note": "1 suspended-annotated route (Tel Aviv) retained per strip-annotations rule."
   },
   "Vancouver": {
    "value": 74,
    "year": "2026-07-12",
    "airports": "YVR"
   },
   "Chicago": {
    "value": 81,
    "year": "2026-07-12",
    "airports": "ORD+MDW",
    "note": "US territories (e.g. San Juan PR) counted domestic per method."
   },
   "Boston": {
    "value": 63,
    "year": "2026-07-12",
    "airports": "BOS"
   },
   "Los Angeles": {
    "value": 81,
    "year": "2026-07-12",
    "airports": "LAX+BUR+LGB+ONT+SNA (Greater LA airport system)",
    "note": "US territories counted domestic; LGB currently lists only 5 destinations (all domestic)."
   },
   "Seattle": {
    "value": 38,
    "year": "2026-07-12",
    "airports": "SEA+PAE",
    "note": "PAE all-domestic, contributes 0 international; suspended-annotated Kelowna retained."
   },
   "Washington DC": {
    "value": 70,
    "year": "2026-07-12",
    "airports": "IAD+DCA+BWI (Washington–Baltimore airport system)",
    "note": "US territories counted domestic; 1 suspended-annotated route (Tel Aviv from IAD) retained."
   },
   "Sydney": {
    "value": 65,
    "year": "2026-07-12",
    "airports": "SYD",
    "note": "Norfolk Island counted DOMESTIC (Australian external territory); 2 suspended-annotated routes retained."
   },
   "Auckland": {
    "value": 46,
    "year": "2026-07-12",
    "airports": "AKL",
    "note": "Rarotonga (Cook Islands) and Niue counted INTERNATIONAL (separate Wikidata P17 countries in NZ realm)."
   },
   "Osaka": {
    "value": null,
    "year": "n/a",
    "airports": "KIX+ITM+UKB",
    "note": "NULL: the Kansai (KIX) Wikipedia article was purged of unsourced destination rows on 2026-07-02 (ANA/JAL and most China/US/Europe routes deleted), so a count would be a serious artifact undercount - same treatment as Tokyo in v1.0"
   },
   "Tel Aviv": {
    "value": 114,
    "year": "2026-07-12",
    "airports": "TLV",
    "note": "10 routes annotated suspended (war-related, most with stated resume dates, e.g. Amsterdam, Madrid, Copenhagen, Moscow-Domodedovo) RETAINED per strip-annotations rule; only domestic destination is Eilat-Ramon."
   },
   "Hong Kong": {
    "value": 149.0,
    "year": "2026-07-12",
    "airports": "HKG",
    "note": "149 unique passenger destinations, ALL counted international: by the separate-customs-territory convention, mainland China, Macau and Taiwan are international from Hong Kong; HK has no domestic air destinations. Table intact (Apr 2026 purge removed only 2 destinations)."
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "airports": "TPE+TSA",
    "note": "NULL - artifact risk: the TPE 'Airlines and destinations' table was gutted 2026-06-30 ('remove unsourced', -27.9 kB): 21 airline rows deleted incl. operating majors (JAL, KLM, Turkish, China Eastern/Southern, Philippine, Etihad...), losing >=14 destinations. Current tables give 99 intl, pre-purge 109; neither reliable, so no value - same treatment as Tokyo/Osaka."
   },
   "Bangkok": {
    "value": 154.0,
    "year": "2026-07-12",
    "airports": "BKK+DMK",
    "note": "Union BKK+DMK: 154 international, domestic = Thailand. Unsourced-row purges (BKK Oct 2025 & 2026-07-05, DMK 2026-05-20) removed small-carrier rows; pre-purge union ~160, so 154 may slightly understate. All major carriers present."
   },
   "Kuala Lumpur": {
    "value": 131.0,
    "year": "2026-07-12",
    "airports": "KUL+SZB",
    "note": "Union KUL (128 intl) + SZB (9 intl) = 131 unique international, domestic = Malaysia. KUL had unsourced-row trims (Jan/Jun 2026) but net destination count unchanged vs pre-purge revision and all major carriers present, so the count is treated as sound."
   },
   "Jakarta": {
    "value": 50.0,
    "year": "2026-07-12",
    "airports": "CGK+HLP",
    "note": "CGK 50 international; HLP passenger table is domestic-only, contributes 0. 6 charter-only destinations excluded at CGK. Dedup by redirect-resolved wikilink; international = Wikidata P17 != Indonesia."
   },
   "Manila": {
    "value": 66.0,
    "year": "2026-07-12",
    "airports": "MNL+CRK",
    "note": "Metro-system definition: MNL (main gateway, 65 intl) + Clark CRK (80 km NW, secondary gateway, 10 intl; 9 overlap, adds only Cheongju) = 66 unique. Charter-only excluded (Ulaanbaatar, Madinah)."
   },
   "Ho Chi Minh City": {
    "value": 75.0,
    "year": "2026-07-12",
    "airports": "SGN",
    "note": "Tan Son Nhat (SGN) passenger table: 75 unique international destinations (20 domestic); no charter-only entries; includes announced 2026-27 routes."
   },
   "Mumbai": {
    "value": 52.0,
    "year": "2026-07-12",
    "airports": "BOM",
    "note": "BOM passenger table: 52 international. A 2026-06-26 unsourced-content cleanup removed 5 international destinations (Male, Tehran, Najaf, Baghdad, Aden); pre-cleanup revision yields 57. Table NOT gutted (45 airline rows remain), so the as-published count is reported but likely slightly undercounts."
   },
   "Abu Dhabi": {
    "value": 165.0,
    "year": "2026-07-12",
    "airports": "AUH",
    "note": "AUH: 165 unique international destinations; 0 domestic (UAE has no scheduled domestic passenger service). 3 charter-only destinations excluded. Includes announced 2026-27 routes."
   },
   "Shanghai": {
    "value": 105.0,
    "year": "2026-07-12",
    "airports": "PVG+SHA",
    "note": "HK/Macau/Taiwan destinations counted international (separate customs territories). PVG table purged of unsourced rows 2025-10-05 and re-sourced since; pre-purge revision yields 112, so 105 may modestly understate (losses mostly secondary Japanese/regional seasonal routes). All major carriers present."
   },
   "Beijing": {
    "value": 124.0,
    "year": "2026-07-12",
    "airports": "PEK+PKX",
    "note": "Union PEK (101 intl) + PKX (55 intl) = 124 unique international. HK/Macau/Taiwan counted international. No purge-scale deletions in either article's history back to late 2023; China Southern absent from PEK genuinely (moved to Daxing 2019)."
   },
   "Shenzhen": {
    "value": 54.0,
    "year": "2026-07-12",
    "airports": "SZX",
    "note": "182 unique destinations, 54 international. HK/Macau/Taiwan counted international; includes Macau scheduled helicopter shuttle (a passenger-table row). History clean back to 2023-07."
   },
   "Delhi": {
    "value": 79.0,
    "year": "2026-07-12",
    "airports": "DEL",
    "note": "DEL passenger table: 79 international, 75 domestic. A 2026-06-18 cleanup was checked against the pre-cleanup revision: destinations table not reduced, no adjustment needed."
   }
  }
 },
 "LIV-02": {
  "source": "Numbeo Crime rankings — Safety Index column",
  "url": "https://www.numbeo.com/crime/rankings.jsp?title=2026-mid (pinned edition URL, verified byte-identical to the live table 2026-07-17)",
  "license": "Numbeo Terms of Use: free personal/academic reuse with link-back credit to Numbeo.com; not an open license",
  "edition": "Property-style rankings table, 2026 Mid-Year (401 cities)",
  "retrieved": "2026-07-17",
  "method": "Parsed HTML table id=t2; Safety Index = 4th column (2nd numeric), transcribed verbatim. City rows disambiguated by country (Melbourne AU, Vancouver CA, Barcelona ES, Washington DC, Tel Aviv-Yafo...). Evidence: raw HTML + parse script archived in session records.",
  "perCity": {
   "Singapore": {
    "value": 77.7,
    "year": "2026 Mid-Year",
    "source": "Singapore, Singapore",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Tokyo": {
    "value": 75.9,
    "year": "2026 Mid-Year",
    "source": "Tokyo, Japan",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Copenhagen": {
    "value": 73.7,
    "year": "2026 Mid-Year",
    "source": "Copenhagen, Denmark",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Zurich": {
    "value": 75.9,
    "year": "2026 Mid-Year",
    "source": "Zurich, Switzerland",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Vienna": {
    "value": 70.6,
    "year": "2026 Mid-Year",
    "source": "Vienna, Austria",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Seoul": {
    "value": 74.6,
    "year": "2026 Mid-Year",
    "source": "Seoul, South Korea",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Melbourne": {
    "value": 55.7,
    "year": "2026 Mid-Year",
    "source": "Melbourne, Australia",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Amsterdam": {
    "value": 70.0,
    "year": "2026 Mid-Year",
    "source": "Amsterdam, Netherlands",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "London": {
    "value": 44.7,
    "year": "2026 Mid-Year",
    "source": "London, United Kingdom",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "New York": {
    "value": 49.2,
    "year": "2026 Mid-Year",
    "source": "New York, NY, United States",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Paris": {
    "value": 42.1,
    "year": "2026 Mid-Year",
    "source": "Paris, France",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Toronto": {
    "value": 56.3,
    "year": "2026 Mid-Year",
    "source": "Toronto, Canada",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Berlin": {
    "value": 55.4,
    "year": "2026 Mid-Year",
    "source": "Berlin, Germany",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Barcelona": {
    "value": 47.9,
    "year": "2026 Mid-Year",
    "source": "Barcelona, Spain",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Dubai": {
    "value": 83.8,
    "year": "2026 Mid-Year",
    "source": "Dubai, United Arab Emirates",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "San Francisco": {
    "value": 39.5,
    "year": "2026 Mid-Year",
    "source": "San Francisco, CA, United States",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Stockholm": {
    "value": 53.8,
    "year": "2026 Mid-Year",
    "source": "Stockholm, Sweden",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Oslo": {
    "value": 65.7,
    "year": "2026 Mid-Year",
    "source": "Oslo, Norway",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Helsinki": {
    "value": 74.9,
    "year": "2026 Mid-Year",
    "source": "Helsinki, Finland",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Madrid": {
    "value": 71.0,
    "year": "2026 Mid-Year",
    "source": "Madrid, Spain",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Milan": {
    "value": 46.0,
    "year": "2026 Mid-Year",
    "source": "Milan, Italy",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Rome": {
    "value": 53.3,
    "year": "2026 Mid-Year",
    "source": "Rome, Italy",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Munich": {
    "value": 78.3,
    "year": "2026 Mid-Year",
    "source": "Munich, Germany",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Frankfurt": {
    "value": 54.5,
    "year": "2026 Mid-Year",
    "source": "Frankfurt, Germany",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Hamburg": {
    "value": 59.3,
    "year": "2026 Mid-Year",
    "source": "Hamburg, Germany",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Brussels": {
    "value": 44.1,
    "year": "2026 Mid-Year",
    "source": "Brussels, Belgium",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Dublin": {
    "value": 45.9,
    "year": "2026 Mid-Year",
    "source": "Dublin, Ireland",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Lisbon": {
    "value": 67.1,
    "year": "2026 Mid-Year",
    "source": "Lisbon, Portugal",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Prague": {
    "value": 75.3,
    "year": "2026 Mid-Year",
    "source": "Prague, Czech Republic",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Warsaw": {
    "value": 74.7,
    "year": "2026 Mid-Year",
    "source": "Warsaw, Poland",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Istanbul": {
    "value": 52.0,
    "year": "2026 Mid-Year",
    "source": "Istanbul, Turkey",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Montreal": {
    "value": 67.0,
    "year": "2026 Mid-Year",
    "source": "Montreal, Canada",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Vancouver": {
    "value": 57.2,
    "year": "2026 Mid-Year",
    "source": "Vancouver, Canada",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Chicago": {
    "value": 34.8,
    "year": "2026 Mid-Year",
    "source": "Chicago, IL, United States",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Boston": {
    "value": 59.7,
    "year": "2026 Mid-Year",
    "source": "Boston, MA, United States",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Los Angeles": {
    "value": 46.2,
    "year": "2026 Mid-Year",
    "source": "Los Angeles, CA, United States",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Seattle": {
    "value": 44.7,
    "year": "2026 Mid-Year",
    "source": "Seattle, WA, United States",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Washington DC": {
    "value": 40.3,
    "year": "2026 Mid-Year",
    "source": "Washington, DC, United States",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Sydney": {
    "value": 66.2,
    "year": "2026 Mid-Year",
    "source": "Sydney, Australia",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Auckland": {
    "value": 49.4,
    "year": "2026 Mid-Year",
    "source": "Auckland, New Zealand",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Osaka": {
    "value": 67.0,
    "year": "2026 Mid-Year",
    "source": "Osaka, Japan",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Tel Aviv": {
    "value": 73.8,
    "year": "2026 Mid-Year",
    "source": "Tel Aviv-Yafo, Israel",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Hong Kong": {
    "value": 78.2,
    "year": "2026 Mid-Year",
    "source": "Hong Kong, Hong Kong (China)",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Taipei": {
    "value": 83.4,
    "year": "2026 Mid-Year",
    "source": "Taipei, Taiwan",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Bangkok": {
    "value": 61.6,
    "year": "2026 Mid-Year",
    "source": "Bangkok, Thailand",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Kuala Lumpur": {
    "value": 40.9,
    "year": "2026 Mid-Year",
    "source": "Kuala Lumpur, Malaysia",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Jakarta": {
    "value": 47.3,
    "year": "2026 Mid-Year",
    "source": "Jakarta, Indonesia",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Manila": {
    "value": 35.4,
    "year": "2026 Mid-Year",
    "source": "Manila, Philippines",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Ho Chi Minh City": {
    "value": 50.2,
    "year": "2026 Mid-Year",
    "source": "Ho Chi Minh City, Vietnam",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Mumbai": {
    "value": 56.1,
    "year": "2026 Mid-Year",
    "source": "Mumbai, India",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Abu Dhabi": {
    "value": 88.6,
    "year": "2026 Mid-Year",
    "source": "Abu Dhabi, United Arab Emirates",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Shanghai": {
    "value": 73.5,
    "year": "2026 Mid-Year",
    "source": "Shanghai, China",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Beijing": {
    "value": 74.4,
    "year": "2026 Mid-Year",
    "source": "Beijing, China",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Shenzhen": {
    "value": 75.5,
    "year": "2026 Mid-Year",
    "source": "Shenzhen, China",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Delhi": {
    "value": 41.0,
    "year": "2026 Mid-Year",
    "source": "Delhi, India",
    "note": "Safety Index column, Numbeo Crime rankings 2026 Mid-Year (fetched 2026-07-17)"
   }
  }
 },
 "LIV-07": {
  "source": "Numbeo Cost of Living rankings — Cost of Living Index column (excl. rent)",
  "url": "https://www.numbeo.com/cost-of-living/rankings.jsp?title=2026-mid (pinned edition URL, verified byte-identical to the live table)",
  "license": "Numbeo Terms of Use: free personal/academic reuse with link-back credit to Numbeo.com; not an open license",
  "edition": "2026 Mid-Year (547 cities)",
  "retrieved": "2026-07-17",
  "method": "Parsed HTML table id=t2; Cost of Living Index = first numeric column, transcribed verbatim (New York verified reading exactly 100.0). Rent/Groceries/Restaurant/Purchasing-Power columns not used.",
  "perCity": {
   "Singapore": {
    "value": 90.8,
    "year": "2026 Mid-Year",
    "source": "Singapore, Singapore",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Tokyo": {
    "value": 54.3,
    "year": "2026 Mid-Year",
    "source": "Tokyo, Japan",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Copenhagen": {
    "value": 86.8,
    "year": "2026 Mid-Year",
    "source": "Copenhagen, Denmark",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Zurich": {
    "value": 123.1,
    "year": "2026 Mid-Year",
    "source": "Zurich, Switzerland",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Vienna": {
    "value": 74.5,
    "year": "2026 Mid-Year",
    "source": "Vienna, Austria",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Seoul": {
    "value": 64.5,
    "year": "2026 Mid-Year",
    "source": "Seoul, South Korea",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Melbourne": {
    "value": 77.3,
    "year": "2026 Mid-Year",
    "source": "Melbourne, Australia",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Amsterdam": {
    "value": 81.4,
    "year": "2026 Mid-Year",
    "source": "Amsterdam, Netherlands",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "London": {
    "value": 88.0,
    "year": "2026 Mid-Year",
    "source": "London, United Kingdom",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "New York": {
    "value": 100.0,
    "year": "2026 Mid-Year",
    "source": "New York, NY, United States",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Paris": {
    "value": 78.4,
    "year": "2026 Mid-Year",
    "source": "Paris, France",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Toronto": {
    "value": 65.6,
    "year": "2026 Mid-Year",
    "source": "Toronto, Canada",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Berlin": {
    "value": 72.5,
    "year": "2026 Mid-Year",
    "source": "Berlin, Germany",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Barcelona": {
    "value": 59.9,
    "year": "2026 Mid-Year",
    "source": "Barcelona, Spain",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Dubai": {
    "value": 62.5,
    "year": "2026 Mid-Year",
    "source": "Dubai, United Arab Emirates",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "San Francisco": {
    "value": 94.9,
    "year": "2026 Mid-Year",
    "source": "San Francisco, CA, United States",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Stockholm": {
    "value": 79.1,
    "year": "2026 Mid-Year",
    "source": "Stockholm, Sweden",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Oslo": {
    "value": 92.1,
    "year": "2026 Mid-Year",
    "source": "Oslo, Norway",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Helsinki": {
    "value": 73.9,
    "year": "2026 Mid-Year",
    "source": "Helsinki, Finland",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Madrid": {
    "value": 59.1,
    "year": "2026 Mid-Year",
    "source": "Madrid, Spain",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Milan": {
    "value": 74.3,
    "year": "2026 Mid-Year",
    "source": "Milan, Italy",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Rome": {
    "value": 60.0,
    "year": "2026 Mid-Year",
    "source": "Rome, Italy",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Munich": {
    "value": 77.4,
    "year": "2026 Mid-Year",
    "source": "Munich, Germany",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Frankfurt": {
    "value": 71.5,
    "year": "2026 Mid-Year",
    "source": "Frankfurt, Germany",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Hamburg": {
    "value": 70.8,
    "year": "2026 Mid-Year",
    "source": "Hamburg, Germany",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Brussels": {
    "value": 71.9,
    "year": "2026 Mid-Year",
    "source": "Brussels, Belgium",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Dublin": {
    "value": 76.3,
    "year": "2026 Mid-Year",
    "source": "Dublin, Ireland",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Lisbon": {
    "value": 55.2,
    "year": "2026 Mid-Year",
    "source": "Lisbon, Portugal",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Prague": {
    "value": 57.3,
    "year": "2026 Mid-Year",
    "source": "Prague, Czech Republic",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Warsaw": {
    "value": 52.7,
    "year": "2026 Mid-Year",
    "source": "Warsaw, Poland",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Istanbul": {
    "value": 46.6,
    "year": "2026 Mid-Year",
    "source": "Istanbul, Turkey",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Montreal": {
    "value": 58.3,
    "year": "2026 Mid-Year",
    "source": "Montreal, Canada",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Vancouver": {
    "value": 68.5,
    "year": "2026 Mid-Year",
    "source": "Vancouver, Canada",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Chicago": {
    "value": 75.8,
    "year": "2026 Mid-Year",
    "source": "Chicago, IL, United States",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Boston": {
    "value": 89.0,
    "year": "2026 Mid-Year",
    "source": "Boston, MA, United States",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Los Angeles": {
    "value": 84.5,
    "year": "2026 Mid-Year",
    "source": "Los Angeles, CA, United States",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Seattle": {
    "value": 91.4,
    "year": "2026 Mid-Year",
    "source": "Seattle, WA, United States",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Washington DC": {
    "value": 92.1,
    "year": "2026 Mid-Year",
    "source": "Washington, DC, United States",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Sydney": {
    "value": 79.2,
    "year": "2026 Mid-Year",
    "source": "Sydney, Australia",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Auckland": {
    "value": 64.4,
    "year": "2026 Mid-Year",
    "source": "Auckland, New Zealand",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Osaka": {
    "value": 42.7,
    "year": "2026 Mid-Year",
    "source": "Osaka, Japan",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Tel Aviv": {
    "value": 103.9,
    "year": "2026 Mid-Year",
    "source": "Tel Aviv-Yafo, Israel",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Hong Kong": {
    "value": 76.4,
    "year": "2026 Mid-Year",
    "source": "Hong Kong, Hong Kong (China)",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Taipei": {
    "value": 54.5,
    "year": "2026 Mid-Year",
    "source": "Taipei, Taiwan",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Bangkok": {
    "value": 43.5,
    "year": "2026 Mid-Year",
    "source": "Bangkok, Thailand",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Kuala Lumpur": {
    "value": 38.8,
    "year": "2026 Mid-Year",
    "source": "Kuala Lumpur, Malaysia",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Jakarta": {
    "value": 28.7,
    "year": "2026 Mid-Year",
    "source": "Jakarta, Indonesia",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Manila": {
    "value": 34.3,
    "year": "2026 Mid-Year",
    "source": "Manila, Philippines",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Ho Chi Minh City": {
    "value": 29.6,
    "year": "2026 Mid-Year",
    "source": "Ho Chi Minh City, Vietnam",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Mumbai": {
    "value": 25.8,
    "year": "2026 Mid-Year",
    "source": "Mumbai, India",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Abu Dhabi": {
    "value": 55.1,
    "year": "2026 Mid-Year",
    "source": "Abu Dhabi, United Arab Emirates",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Shanghai": {
    "value": 40.5,
    "year": "2026 Mid-Year",
    "source": "Shanghai, China",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Beijing": {
    "value": 37.9,
    "year": "2026 Mid-Year",
    "source": "Beijing, China",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Shenzhen": {
    "value": 38.7,
    "year": "2026 Mid-Year",
    "source": "Shenzhen, China",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Delhi": {
    "value": 22.1,
    "year": "2026 Mid-Year",
    "source": "Delhi, India",
    "note": "Cost of Living Index (excl. rent, NYC=100), Numbeo 2026 Mid-Year (fetched 2026-07-17)"
   }
  }
 },
 "CON-04": {
  "source": "Numbeo Traffic rankings — Time Index column (average one-way commute, minutes)",
  "url": "https://www.numbeo.com/traffic/rankings.jsp?title=2026-mid (pinned edition URL, verified byte-identical to the live table 2026-07-17)",
  "license": "Numbeo Terms of Use: free personal/academic reuse with link-back credit to Numbeo.com; not an open license",
  "edition": "2026 Mid-Year (341 cities)",
  "retrieved": "2026-07-17",
  "method": "Parsed HTML table id=t2; Time Index (minutes) = 2nd numeric column, transcribed verbatim. Composite Traffic/Inefficiency/CO2 columns not used. Moovit checked as alternative and rejected (per-metro pages frozen at a generic 2022 dashboard).",
  "perCity": {
   "Singapore": {
    "value": 41.0,
    "year": "2026 Mid-Year",
    "source": "Singapore, Singapore",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Tokyo": {
    "value": 42.7,
    "year": "2026 Mid-Year",
    "source": "Tokyo, Japan",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Copenhagen": {
    "value": 27.5,
    "year": "2026 Mid-Year",
    "source": "Copenhagen, Denmark",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Zurich": {
    "value": 37.0,
    "year": "2026 Mid-Year",
    "source": "Zurich, Switzerland",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Vienna": {
    "value": 22.9,
    "year": "2026 Mid-Year",
    "source": "Vienna, Austria",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Seoul": {
    "value": 40.4,
    "year": "2026 Mid-Year",
    "source": "Seoul, South Korea",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Melbourne": {
    "value": 42.0,
    "year": "2026 Mid-Year",
    "source": "Melbourne, Australia",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Amsterdam": {
    "value": 22.8,
    "year": "2026 Mid-Year",
    "source": "Amsterdam, Netherlands",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "London": {
    "value": 44.7,
    "year": "2026 Mid-Year",
    "source": "London, United Kingdom",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "New York": {
    "value": 43.3,
    "year": "2026 Mid-Year",
    "source": "New York, NY, United States",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Paris": {
    "value": 41.1,
    "year": "2026 Mid-Year",
    "source": "Paris, France",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Toronto": {
    "value": 43.9,
    "year": "2026 Mid-Year",
    "source": "Toronto, Canada",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Berlin": {
    "value": 33.4,
    "year": "2026 Mid-Year",
    "source": "Berlin, Germany",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Barcelona": {
    "value": 29.8,
    "year": "2026 Mid-Year",
    "source": "Barcelona, Spain",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Dubai": {
    "value": 36.3,
    "year": "2026 Mid-Year",
    "source": "Dubai, United Arab Emirates",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "San Francisco": {
    "value": 49.0,
    "year": "2026 Mid-Year",
    "source": "San Francisco, CA, United States",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Stockholm": {
    "value": 34.1,
    "year": "2026 Mid-Year",
    "source": "Stockholm, Sweden",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Oslo": {
    "value": 27.8,
    "year": "2026 Mid-Year",
    "source": "Oslo, Norway",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Helsinki": {
    "value": 24.1,
    "year": "2026 Mid-Year",
    "source": "Helsinki, Finland",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Madrid": {
    "value": 28.2,
    "year": "2026 Mid-Year",
    "source": "Madrid, Spain",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Milan": {
    "value": 35.9,
    "year": "2026 Mid-Year",
    "source": "Milan, Italy",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Rome": {
    "value": 35.2,
    "year": "2026 Mid-Year",
    "source": "Rome, Italy",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Munich": {
    "value": 28.2,
    "year": "2026 Mid-Year",
    "source": "Munich, Germany",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Frankfurt": {
    "value": 22.8,
    "year": "2026 Mid-Year",
    "source": "Frankfurt, Germany",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Hamburg": {
    "value": 30.5,
    "year": "2026 Mid-Year",
    "source": "Hamburg, Germany",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Brussels": {
    "value": 36.4,
    "year": "2026 Mid-Year",
    "source": "Brussels, Belgium",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Dublin": {
    "value": 40.4,
    "year": "2026 Mid-Year",
    "source": "Dublin, Ireland",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Lisbon": {
    "value": 34.6,
    "year": "2026 Mid-Year",
    "source": "Lisbon, Portugal",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Prague": {
    "value": 31.8,
    "year": "2026 Mid-Year",
    "source": "Prague, Czech Republic",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Warsaw": {
    "value": 34.8,
    "year": "2026 Mid-Year",
    "source": "Warsaw, Poland",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Istanbul": {
    "value": 50.7,
    "year": "2026 Mid-Year",
    "source": "Istanbul, Turkey",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Montreal": {
    "value": 40.1,
    "year": "2026 Mid-Year",
    "source": "Montreal, Canada",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Vancouver": {
    "value": 35.9,
    "year": "2026 Mid-Year",
    "source": "Vancouver, Canada",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Chicago": {
    "value": 41.7,
    "year": "2026 Mid-Year",
    "source": "Chicago, IL, United States",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Boston": {
    "value": 45.0,
    "year": "2026 Mid-Year",
    "source": "Boston, MA, United States",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Los Angeles": {
    "value": 57.1,
    "year": "2026 Mid-Year",
    "source": "Los Angeles, CA, United States",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Seattle": {
    "value": 42.9,
    "year": "2026 Mid-Year",
    "source": "Seattle, WA, United States",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Washington DC": {
    "value": 41.2,
    "year": "2026 Mid-Year",
    "source": "Washington, DC, United States",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Sydney": {
    "value": 43.5,
    "year": "2026 Mid-Year",
    "source": "Sydney, Australia",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Auckland": {
    "value": 37.4,
    "year": "2026 Mid-Year",
    "source": "Auckland, New Zealand",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Osaka": {
    "value": null,
    "year": "n/a",
    "note": "NULL: Osaka is absent from Numbeo's traffic rankings — its city page shows only 14 contributors and Numbeo's own 'we need more contributors' banner, i.e. it fails the source's inclusion bar. The low-sample page value is deliberately NOT used."
   },
   "Tel Aviv": {
    "value": 36.6,
    "year": "2026 Mid-Year",
    "source": "Tel Aviv-Yafo, Israel",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Hong Kong": {
    "value": 41.9,
    "year": "2026 Mid-Year",
    "source": "Hong Kong, Hong Kong (China)",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Taipei": {
    "value": 34.6,
    "year": "2026 Mid-Year",
    "source": "Taipei, Taiwan",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Bangkok": {
    "value": 44.4,
    "year": "2026 Mid-Year",
    "source": "Bangkok, Thailand",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Kuala Lumpur": {
    "value": 41.6,
    "year": "2026 Mid-Year",
    "source": "Kuala Lumpur, Malaysia",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Jakarta": {
    "value": 53.5,
    "year": "2026 Mid-Year",
    "source": "Jakarta, Indonesia",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Manila": {
    "value": 50.7,
    "year": "2026 Mid-Year",
    "source": "Manila, Philippines",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Ho Chi Minh City": {
    "value": 32.1,
    "year": "2026 Mid-Year",
    "source": "Ho Chi Minh City, Vietnam",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Mumbai": {
    "value": 55.2,
    "year": "2026 Mid-Year",
    "source": "Mumbai, India",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Abu Dhabi": {
    "value": 29.8,
    "year": "2026 Mid-Year",
    "source": "Abu Dhabi, United Arab Emirates",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Shanghai": {
    "value": 45.1,
    "year": "2026 Mid-Year",
    "source": "Shanghai, China",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Beijing": {
    "value": 43.0,
    "year": "2026 Mid-Year",
    "source": "Beijing, China",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Shenzhen": {
    "value": 33.7,
    "year": "2026 Mid-Year",
    "source": "Shenzhen, China",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   },
   "Delhi": {
    "value": 57.4,
    "year": "2026 Mid-Year",
    "source": "Delhi, India",
    "note": "Time Index (avg one-way commute, minutes), Numbeo Traffic rankings 2026 Mid-Year (fetched 2026-07-17)"
   }
  }
 },
 "LIV-03": {
  "source": "World Bank Worldwide Governance Indicators (WGI), 2025 release — Political Stability and Absence of Violence/Terrorism, Governance score (0-100)",
  "url": "https://www.worldbank.org/content/dam/sites/govindicators/doc/wgidataset_with_sourcedata-2025.xlsx (full dataset incl. Taiwan; API series GOV_WGI_PV.SC covers the other 35 entities and matches the xlsx)",
  "license": "CC BY 4.0 (World Bank)",
  "edition": "WGI 2025 release, reference year 2024",
  "retrieved": "2026-07-17",
  "method": "Country score assigned to each city (country proxy). 2024 Governance scores transcribed verbatim from the official dataset; Taiwan (absent from the WB API) read from the xlsx (\"Taiwan, China\"). The 2025 methodology replaced percentile ranks with an absolute anchored score — release year is part of the citation.",
  "perCity": {
   "Singapore": {
    "value": 86.94,
    "year": "2024",
    "source": "WGI 2025 — Singapore (score 86.94, estimate 1.232)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Tokyo": {
    "value": 85.27,
    "year": "2024",
    "source": "WGI 2025 — Japan (score 85.27, estimate 1.134)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Copenhagen": {
    "value": 79.03,
    "year": "2024",
    "source": "WGI 2025 — Denmark (score 79.03, estimate 0.769)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Zurich": {
    "value": 82.65,
    "year": "2024",
    "source": "WGI 2025 — Switzerland (score 82.65, estimate 0.981)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Vienna": {
    "value": 74.29,
    "year": "2024",
    "source": "WGI 2025 — Austria (score 74.29, estimate 0.492)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Seoul": {
    "value": 76.82,
    "year": "2024",
    "source": "WGI 2025 — Korea, Rep. (score 76.82, estimate 0.639)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Melbourne": {
    "value": 79.44,
    "year": "2024",
    "source": "WGI 2025 — Australia (score 79.44, estimate 0.793)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Amsterdam": {
    "value": 73.21,
    "year": "2024",
    "source": "WGI 2025 — Netherlands (score 73.21, estimate 0.428)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "London": {
    "value": 70.3,
    "year": "2024",
    "source": "WGI 2025 — United Kingdom (score 70.3, estimate 0.258)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "New York": {
    "value": 64.27,
    "year": "2024",
    "source": "WGI 2025 — United States (score 64.27, estimate -0.095)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Paris": {
    "value": 61.77,
    "year": "2024",
    "source": "WGI 2025 — France (score 61.77, estimate -0.241)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Toronto": {
    "value": 76.12,
    "year": "2024",
    "source": "WGI 2025 — Canada (score 76.12, estimate 0.598)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Berlin": {
    "value": 68.02,
    "year": "2024",
    "source": "WGI 2025 — Germany (score 68.02, estimate 0.124)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Barcelona": {
    "value": 65.84,
    "year": "2024",
    "source": "WGI 2025 — Spain (score 65.84, estimate -0.003)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Dubai": {
    "value": 79.37,
    "year": "2024",
    "source": "WGI 2025 — United Arab Emirates (score 79.37, estimate 0.789)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "San Francisco": {
    "value": 64.27,
    "year": "2024",
    "source": "WGI 2025 — United States (score 64.27, estimate -0.095)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Stockholm": {
    "value": 76.2,
    "year": "2024",
    "source": "WGI 2025 — Sweden (score 76.2, estimate 0.604)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Oslo": {
    "value": 81.32,
    "year": "2024",
    "source": "WGI 2025 — Norway (score 81.32, estimate 0.903)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Helsinki": {
    "value": 80.12,
    "year": "2024",
    "source": "WGI 2025 — Finland (score 80.12, estimate 0.833)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Madrid": {
    "value": 65.84,
    "year": "2024",
    "source": "WGI 2025 — Spain (score 65.84, estimate -0.003)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Milan": {
    "value": 71.17,
    "year": "2024",
    "source": "WGI 2025 — Italy (score 71.17, estimate 0.309)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Rome": {
    "value": 71.17,
    "year": "2024",
    "source": "WGI 2025 — Italy (score 71.17, estimate 0.309)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Munich": {
    "value": 68.02,
    "year": "2024",
    "source": "WGI 2025 — Germany (score 68.02, estimate 0.124)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Frankfurt": {
    "value": 68.02,
    "year": "2024",
    "source": "WGI 2025 — Germany (score 68.02, estimate 0.124)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Hamburg": {
    "value": 68.02,
    "year": "2024",
    "source": "WGI 2025 — Germany (score 68.02, estimate 0.124)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Brussels": {
    "value": 67.97,
    "year": "2024",
    "source": "WGI 2025 — Belgium (score 67.97, estimate 0.121)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Dublin": {
    "value": 78.02,
    "year": "2024",
    "source": "WGI 2025 — Ireland (score 78.02, estimate 0.71)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Lisbon": {
    "value": 75.07,
    "year": "2024",
    "source": "WGI 2025 — Portugal (score 75.07, estimate 0.537)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Prague": {
    "value": 82.5,
    "year": "2024",
    "source": "WGI 2025 — Czechia (score 82.5, estimate 0.972)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Warsaw": {
    "value": 74.41,
    "year": "2024",
    "source": "WGI 2025 — Poland (score 74.41, estimate 0.499)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Istanbul": {
    "value": 49.31,
    "year": "2024",
    "source": "WGI 2025 — Türkiye (score 49.31, estimate -0.971)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Montreal": {
    "value": 76.12,
    "year": "2024",
    "source": "WGI 2025 — Canada (score 76.12, estimate 0.598)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Vancouver": {
    "value": 76.12,
    "year": "2024",
    "source": "WGI 2025 — Canada (score 76.12, estimate 0.598)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Chicago": {
    "value": 64.27,
    "year": "2024",
    "source": "WGI 2025 — United States (score 64.27, estimate -0.095)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Boston": {
    "value": 64.27,
    "year": "2024",
    "source": "WGI 2025 — United States (score 64.27, estimate -0.095)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Los Angeles": {
    "value": 64.27,
    "year": "2024",
    "source": "WGI 2025 — United States (score 64.27, estimate -0.095)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Seattle": {
    "value": 64.27,
    "year": "2024",
    "source": "WGI 2025 — United States (score 64.27, estimate -0.095)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Washington DC": {
    "value": 64.27,
    "year": "2024",
    "source": "WGI 2025 — United States (score 64.27, estimate -0.095)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Sydney": {
    "value": 79.44,
    "year": "2024",
    "source": "WGI 2025 — Australia (score 79.44, estimate 0.793)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Auckland": {
    "value": 85.55,
    "year": "2024",
    "source": "WGI 2025 — New Zealand (score 85.55, estimate 1.151)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Osaka": {
    "value": 85.27,
    "year": "2024",
    "source": "WGI 2025 — Japan (score 85.27, estimate 1.134)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Tel Aviv": {
    "value": 48.17,
    "year": "2024",
    "source": "WGI 2025 — Israel (score 48.17, estimate -1.038)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Hong Kong": {
    "value": 76.67,
    "year": "2024",
    "source": "WGI 2025 — Hong Kong SAR, China (score 76.67, estimate 0.631)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Taipei": {
    "value": 81.55,
    "year": "2024",
    "source": "WGI 2025 — Taiwan, China (score 81.55, estimate 0.917)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Bangkok": {
    "value": 54.22,
    "year": "2024",
    "source": "WGI 2025 — Thailand (score 54.22, estimate -0.683)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Kuala Lumpur": {
    "value": 72.47,
    "year": "2024",
    "source": "WGI 2025 — Malaysia (score 72.47, estimate 0.385)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Jakarta": {
    "value": 55.49,
    "year": "2024",
    "source": "WGI 2025 — Indonesia (score 55.49, estimate -0.609)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Manila": {
    "value": 52.67,
    "year": "2024",
    "source": "WGI 2025 — Philippines (score 52.67, estimate -0.774)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Ho Chi Minh City": {
    "value": 65.99,
    "year": "2024",
    "source": "WGI 2025 — Viet Nam (score 65.99, estimate 0.006)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Mumbai": {
    "value": 52.47,
    "year": "2024",
    "source": "WGI 2025 — India (score 52.47, estimate -0.786)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Abu Dhabi": {
    "value": 79.37,
    "year": "2024",
    "source": "WGI 2025 — United Arab Emirates (score 79.37, estimate 0.789)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Shanghai": {
    "value": 63.28,
    "year": "2024",
    "source": "WGI 2025 — China (score 63.28, estimate -0.153)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Beijing": {
    "value": 63.28,
    "year": "2024",
    "source": "WGI 2025 — China (score 63.28, estimate -0.153)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Shenzhen": {
    "value": 63.28,
    "year": "2024",
    "source": "WGI 2025 — China (score 63.28, estimate -0.153)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   },
   "Delhi": {
    "value": 52.47,
    "year": "2024",
    "source": "WGI 2025 — India (score 52.47, estimate -0.786)",
    "note": "COUNTRY proxy: national Governance score 0-100 (2025 release, absolute anchored scale), applied to the city."
   }
  }
 },
 "TAL-04": {
  "source": "UNESCO Institute for Statistics — Researchers per million inhabitants, FTE (SDG 9.5.2, indicator RESDEN.INHAB.TFTE)",
  "url": "https://api.uis.unesco.org/api/public/data/indicators?indicator=RESDEN.INHAB.TFTE&geoUnit={ISO3}",
  "license": "CC BY-3.0 IGO (UIS open data policy)",
  "edition": "latest reported year per country (fetched 2026-07-17)",
  "retrieved": "2026-07-17",
  "method": "National FTE researcher density per million ÷ 1000 = per 1,000 (exact division, 2 decimals), assigned to each city as a country proxy. Latest year per country taken from the full UIS series. OECD regional alternative rejected in the plan (no USA/Japan/Australia/NZ/Israel at regional level).",
  "perCity": {
   "Singapore": {
    "value": 8.78,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — SGP: 8781.7 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Tokyo": {
    "value": 5.61,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — JPN: 5608.6 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Copenhagen": {
    "value": 8.84,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — DNK: 8837.5 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Zurich": {
    "value": 6.11,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — CHE: 6108.0 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Vienna": {
    "value": 6.63,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — AUT: 6633.6 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Seoul": {
    "value": 9.47,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — KOR: 9471.8 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Melbourne": {
    "value": null,
    "year": "n/a",
    "note": "NULL (D9): Australia's latest UIS figure is 2010 (4,568.6 per million) — 16 years stale in a fast-moving quantity, deliberately not recorded."
   },
   "Amsterdam": {
    "value": 6.56,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — NLD: 6563.3 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "London": {
    "value": 4.47,
    "year": "2017",
    "source": "UIS RESDEN.INHAB.TFTE — GBR: 4472.7 per million (2017)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "New York": {
    "value": 4.94,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — USA: 4937.5 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Paris": {
    "value": 5.37,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — FRA: 5368.6 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Toronto": {
    "value": 5.62,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — CAN: 5624.3 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Berlin": {
    "value": 5.93,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — DEU: 5926.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Barcelona": {
    "value": 3.65,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — ESP: 3653.8 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Dubai": {
    "value": 2.61,
    "year": "2021",
    "source": "UIS RESDEN.INHAB.TFTE — ARE: 2606.8 per million (2021)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "San Francisco": {
    "value": 4.94,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — USA: 4937.5 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Stockholm": {
    "value": 8.91,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — SWE: 8910.7 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Oslo": {
    "value": 7.45,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — NOR: 7450.6 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Helsinki": {
    "value": 8.31,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — FIN: 8314.9 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Madrid": {
    "value": 3.65,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — ESP: 3653.8 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Milan": {
    "value": 2.86,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — ITA: 2855.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Rome": {
    "value": 2.86,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — ITA: 2855.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Munich": {
    "value": 5.93,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — DEU: 5926.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Frankfurt": {
    "value": 5.93,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — DEU: 5926.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Hamburg": {
    "value": 5.93,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — DEU: 5926.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Brussels": {
    "value": 5.99,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — BEL: 5990.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Dublin": {
    "value": 5.75,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — IRL: 5752.8 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Lisbon": {
    "value": 5.98,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — PRT: 5983.3 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Prague": {
    "value": 4.5,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — CZE: 4504.6 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Warsaw": {
    "value": 3.68,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — POL: 3675.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Istanbul": {
    "value": 2.64,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — TUR: 2644.7 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Montreal": {
    "value": 5.62,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — CAN: 5624.3 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Vancouver": {
    "value": 5.62,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — CAN: 5624.3 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Chicago": {
    "value": 4.94,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — USA: 4937.5 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Boston": {
    "value": 4.94,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — USA: 4937.5 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Los Angeles": {
    "value": 4.94,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — USA: 4937.5 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Seattle": {
    "value": 4.94,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — USA: 4937.5 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Washington DC": {
    "value": 4.94,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — USA: 4937.5 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Sydney": {
    "value": null,
    "year": "n/a",
    "note": "NULL (D9): Australia's latest UIS figure is 2010 — deliberately not recorded (see Melbourne)."
   },
   "Auckland": {
    "value": 5.44,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — NZL: 5435.5 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Osaka": {
    "value": 5.61,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — JPN: 5608.6 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "NULL: Israel reports no FTE researcher density to UIS (OECD MSTI has one, but mixing sources across cities would break the one-source rule)."
   },
   "Hong Kong": {
    "value": 5.87,
    "year": "2024",
    "source": "UIS RESDEN.INHAB.TFTE — HKG: 5873.7 per million (2024)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "NULL: Taiwan is not a UNESCO UIS reporter — no researcher-density series exists; mixing in another source would break the one-source rule."
   },
   "Bangkok": {
    "value": 1.59,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — THA: 1592.0 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Kuala Lumpur": {
    "value": 1.22,
    "year": "2022",
    "source": "UIS RESDEN.INHAB.TFTE — MYS: 1218.3 per million (2022)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Jakarta": {
    "value": 0.4,
    "year": "2020",
    "source": "UIS RESDEN.INHAB.TFTE — IDN: 395.3 per million (2020)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Manila": {
    "value": 0.32,
    "year": "2020",
    "source": "UIS RESDEN.INHAB.TFTE — PHL: 320.3 per million (2020)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Ho Chi Minh City": {
    "value": 0.84,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — VNM: 836.1 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Mumbai": {
    "value": 0.26,
    "year": "2020",
    "source": "UIS RESDEN.INHAB.TFTE — IND: 259.3 per million (2020)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Abu Dhabi": {
    "value": 2.61,
    "year": "2021",
    "source": "UIS RESDEN.INHAB.TFTE — ARE: 2606.8 per million (2021)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Shanghai": {
    "value": 2.11,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — CHN: 2107.3 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Beijing": {
    "value": 2.11,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — CHN: 2107.3 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Shenzhen": {
    "value": 2.11,
    "year": "2023",
    "source": "UIS RESDEN.INHAB.TFTE — CHN: 2107.3 per million (2023)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   },
   "Delhi": {
    "value": 0.26,
    "year": "2020",
    "source": "UIS RESDEN.INHAB.TFTE — IND: 259.3 per million (2020)",
    "note": "COUNTRY proxy: national FTE researchers per million / 1000."
   }
  }
 },
 "SMT-02": {
  "source": "ITU DataHub — 'Population coverage, by mobile network technology', sub-series 'At least 5G' (% of population)",
  "url": "https://datahub.itu.int/data/?i=100095 (bulk CSV via the public download API; national values as reported by each regulator)",
  "license": "CC BY-NC-SA 3.0 IGO (ITU DataHub terms)",
  "edition": "latest reported year per country (46 cities on 2024, 7 on 2023, Istanbul on 2021), downloaded 2026-07-17",
  "retrieved": "2026-07-17",
  "method": "National % of population covered by at least a 5G network, assigned to each city as a country proxy; values transcribed verbatim from the ITU bulk CSV. Taiwan and Hong Kong are separate ITU entities (NCC / OFCA figures). GSMA/Ookla/OpenSignal alternatives rejected in the plan (stale, no Taiwan, or different concept).",
  "perCity": {
   "Singapore": {
    "value": 95.0,
    "year": "2024",
    "source": "ITU DataHub — Singapore (InfoComm Media Development Authority)",
    "note": "COUNTRY proxy: national 5G population coverage (Singapore)."
   },
   "Tokyo": {
    "value": 96.6,
    "year": "2023",
    "source": "ITU DataHub — Japan (Ministry of Internal Affairs and Communications)",
    "note": "COUNTRY proxy: national 5G population coverage (Japan). As of March 2024"
   },
   "Copenhagen": {
    "value": 100.0,
    "year": "2024",
    "source": "ITU DataHub — Denmark (Agency for Digital Government)",
    "note": "COUNTRY proxy: national 5G population coverage (Denmark)."
   },
   "Zurich": {
    "value": 100.0,
    "year": "2024",
    "source": "ITU DataHub — Switzerland (Office fédéral de la communication)",
    "note": "COUNTRY proxy: national 5G population coverage (Switzerland). Telecommunications statistics 2024 / Definitive data"
   },
   "Vienna": {
    "value": 98.0,
    "year": "2024",
    "source": "ITU DataHub — Austria (Austrian Regulatory Authority for Broadcasting and Telecommunications)",
    "note": "COUNTRY proxy: national 5G population coverage (Austria)."
   },
   "Seoul": {
    "value": 94.0,
    "year": "2023",
    "source": "ITU DataHub — Korea (Rep. of) (ITU estimate. )",
    "note": "COUNTRY proxy: national 5G population coverage (Korea (Rep. of))."
   },
   "Melbourne": {
    "value": 89.0,
    "year": "2024",
    "source": "ITU DataHub — Australia (Department of Infrastructure, Transport, Regional Development and Communications)",
    "note": "COUNTRY proxy: national 5G population coverage (Australia). Source: Telstra Annual Report 2024"
   },
   "Amsterdam": {
    "value": 99.0,
    "year": "2024",
    "source": "ITU DataHub — Netherlands (Authority for Consumers and Markets)",
    "note": "COUNTRY proxy: national 5G population coverage (Netherlands)."
   },
   "London": {
    "value": 85.0,
    "year": "2023",
    "source": "ITU DataHub — United Kingdom (Office of Communications)",
    "note": "COUNTRY proxy: national 5G population coverage (United Kingdom). From Ofcom Connected Nations reporting. 85% is at Very High Confidence level; 93% is the percentage at Ofcom's High Confidence level."
   },
   "New York": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — United States (U.S. Federal Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (United States). Share of Locations.  Source:  FCC Broadband Data Collection (Preliminary and Subject to Change). #"
   },
   "Paris": {
    "value": 93.0,
    "year": "2023",
    "source": "ITU DataHub — France (Autorité de Régulation des Communications électroniques, des postes et de la distribution de la presse)",
    "note": "COUNTRY proxy: national 5G population coverage (France)."
   },
   "Toronto": {
    "value": 94.3,
    "year": "2024",
    "source": "ITU DataHub — Canada (Canadian Radio-television and Telecommunications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (Canada)."
   },
   "Berlin": {
    "value": 98.0,
    "year": "2024",
    "source": "ITU DataHub — Germany (Bundesnetzagentur (BNetzA) / Federal Network Agency)",
    "note": "COUNTRY proxy: national 5G population coverage (Germany). Data refers only to the operator with the largest coverage."
   },
   "Barcelona": {
    "value": 85.4,
    "year": "2023",
    "source": "ITU DataHub — Spain (Comisión Nacional de los Mercados y la Competencia)",
    "note": "COUNTRY proxy: national 5G population coverage (Spain). \tProvisional data"
   },
   "Dubai": {
    "value": 99.46,
    "year": "2024",
    "source": "ITU DataHub — United Arab Emirates (Telecommunications Regulatory Authority)",
    "note": "COUNTRY proxy: national 5G population coverage (United Arab Emirates)."
   },
   "San Francisco": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — United States (U.S. Federal Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (United States). Share of Locations.  Source:  FCC Broadband Data Collection (Preliminary and Subject to Change). #"
   },
   "Stockholm": {
    "value": 98.2,
    "year": "2024",
    "source": "ITU DataHub — Sweden (Swedish Post and Telecom Authority)",
    "note": "COUNTRY proxy: national 5G population coverage (Sweden)."
   },
   "Oslo": {
    "value": 99.7,
    "year": "2024",
    "source": "ITU DataHub — Norway (ITU Research based on NKOM)",
    "note": "COUNTRY proxy: national 5G population coverage (Norway)."
   },
   "Helsinki": {
    "value": 99.99,
    "year": "2024",
    "source": "ITU DataHub — Finland (Finnish Transport and Communications Agency)",
    "note": "COUNTRY proxy: national 5G population coverage (Finland). 5G Basic coverage"
   },
   "Madrid": {
    "value": 85.4,
    "year": "2023",
    "source": "ITU DataHub — Spain (Comisión Nacional de los Mercados y la Competencia)",
    "note": "COUNTRY proxy: national 5G population coverage (Spain). \tProvisional data"
   },
   "Milan": {
    "value": 90.0,
    "year": "2024",
    "source": "ITU DataHub — Italy (AGCOM)",
    "note": "COUNTRY proxy: national 5G population coverage (Italy). estimated"
   },
   "Rome": {
    "value": 90.0,
    "year": "2024",
    "source": "ITU DataHub — Italy (AGCOM)",
    "note": "COUNTRY proxy: national 5G population coverage (Italy). estimated"
   },
   "Munich": {
    "value": 98.0,
    "year": "2024",
    "source": "ITU DataHub — Germany (Bundesnetzagentur (BNetzA) / Federal Network Agency)",
    "note": "COUNTRY proxy: national 5G population coverage (Germany). Data refers only to the operator with the largest coverage."
   },
   "Frankfurt": {
    "value": 98.0,
    "year": "2024",
    "source": "ITU DataHub — Germany (Bundesnetzagentur (BNetzA) / Federal Network Agency)",
    "note": "COUNTRY proxy: national 5G population coverage (Germany). Data refers only to the operator with the largest coverage."
   },
   "Hamburg": {
    "value": 98.0,
    "year": "2024",
    "source": "ITU DataHub — Germany (Bundesnetzagentur (BNetzA) / Federal Network Agency)",
    "note": "COUNTRY proxy: national 5G population coverage (Germany). Data refers only to the operator with the largest coverage."
   },
   "Brussels": {
    "value": 99.8,
    "year": "2024",
    "source": "ITU DataHub — Belgium (Belgian Institute for Postal Services and Telecommunications)",
    "note": "COUNTRY proxy: national 5G population coverage (Belgium). February 2025 data"
   },
   "Dublin": {
    "value": 86.0,
    "year": "2024",
    "source": "ITU DataHub — Ireland (Commission for Communications Regulation)",
    "note": "COUNTRY proxy: national 5G population coverage (Ireland). Estimate"
   },
   "Lisbon": {
    "value": 98.7,
    "year": "2024",
    "source": "ITU DataHub — Portugal (Autoridade Nacional de Comunicaçőes)",
    "note": "COUNTRY proxy: national 5G population coverage (Portugal). Source: Broadband Coverage in the EU, 2024 (preliminary results)#Percentage of households."
   },
   "Prague": {
    "value": 98.6,
    "year": "2024",
    "source": "ITU DataHub — Czech Republic (Czech Telecommunication Office)",
    "note": "COUNTRY proxy: national 5G population coverage (Czech Republic). 5G, at least one operator. Estimates"
   },
   "Warsaw": {
    "value": 91.0,
    "year": "2024",
    "source": "ITU DataHub — Poland (Office of Electronic Communications)",
    "note": "COUNTRY proxy: national 5G population coverage (Poland)."
   },
   "Istanbul": {
    "value": 0.0,
    "year": "2021",
    "source": "ITU DataHub — Türkiye (Information and Communication Technologies Authority of Türkiye (BTK))",
    "note": "COUNTRY proxy: Türkiye 0.0% (2021) is factually accurate through 2024 - commercial 5G launched only in 2026. Refresh at ITU's next data drop."
   },
   "Montreal": {
    "value": 94.3,
    "year": "2024",
    "source": "ITU DataHub — Canada (Canadian Radio-television and Telecommunications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (Canada)."
   },
   "Vancouver": {
    "value": 94.3,
    "year": "2024",
    "source": "ITU DataHub — Canada (Canadian Radio-television and Telecommunications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (Canada)."
   },
   "Chicago": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — United States (U.S. Federal Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (United States). Share of Locations.  Source:  FCC Broadband Data Collection (Preliminary and Subject to Change). #"
   },
   "Boston": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — United States (U.S. Federal Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (United States). Share of Locations.  Source:  FCC Broadband Data Collection (Preliminary and Subject to Change). #"
   },
   "Los Angeles": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — United States (U.S. Federal Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (United States). Share of Locations.  Source:  FCC Broadband Data Collection (Preliminary and Subject to Change). #"
   },
   "Seattle": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — United States (U.S. Federal Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (United States). Share of Locations.  Source:  FCC Broadband Data Collection (Preliminary and Subject to Change). #"
   },
   "Washington DC": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — United States (U.S. Federal Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (United States). Share of Locations.  Source:  FCC Broadband Data Collection (Preliminary and Subject to Change). #"
   },
   "Sydney": {
    "value": 89.0,
    "year": "2024",
    "source": "ITU DataHub — Australia (Department of Infrastructure, Transport, Regional Development and Communications)",
    "note": "COUNTRY proxy: national 5G population coverage (Australia). Source: Telstra Annual Report 2024"
   },
   "Auckland": {
    "value": 40.44,
    "year": "2024",
    "source": "ITU DataHub — New Zealand (Commerce Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (New Zealand)."
   },
   "Osaka": {
    "value": 96.6,
    "year": "2023",
    "source": "ITU DataHub — Japan (Ministry of Internal Affairs and Communications)",
    "note": "COUNTRY proxy: national 5G population coverage (Japan). As of March 2024"
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "NULL (D11): Israel's only ITU figure is 30.0 from 2021 and is marked an ITU ESTIMATE - stale and likely far below current reality, so deliberately not recorded."
   },
   "Hong Kong": {
    "value": 99.0,
    "year": "2024",
    "source": "ITU DataHub — Hong Kong, China (Office of the Communications Authority)",
    "note": "COUNTRY proxy: national 5G population coverage (Hong Kong, China)."
   },
   "Taipei": {
    "value": 98.17,
    "year": "2024",
    "source": "ITU DataHub — Taiwan, Province of China (National Communications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (Taiwan, Province of China)."
   },
   "Bangkok": {
    "value": 95.0,
    "year": "2024",
    "source": "ITU DataHub — Thailand (The National Broadcasting and Telecommunications Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (Thailand). Data from the largest mobile operator in Thailand"
   },
   "Kuala Lumpur": {
    "value": 82.4,
    "year": "2024",
    "source": "ITU DataHub — Malaysia (Malaysian Communications and Multimedia Commission)",
    "note": "COUNTRY proxy: national 5G population coverage (Malaysia). Aggressive government initiatives to widen 5G network coverage nationwide."
   },
   "Jakarta": {
    "value": 8.92,
    "year": "2024",
    "source": "ITU DataHub — Indonesia (Ministry of Communications and Informatics)",
    "note": "COUNTRY proxy: national 5G population coverage (Indonesia). the infrastructure development is still in progress"
   },
   "Manila": {
    "value": 72.41,
    "year": "2024",
    "source": "ITU DataHub — Philippines (Department of Information and Communication Technology)",
    "note": "COUNTRY proxy: national 5G population coverage (Philippines)."
   },
   "Ho Chi Minh City": {
    "value": 25.5,
    "year": "2024",
    "source": "ITU DataHub — Viet Nam (Ministry of Science and Technology)",
    "note": "COUNTRY proxy: national 5G population coverage (Viet Nam)."
   },
   "Mumbai": {
    "value": 82.15,
    "year": "2024",
    "source": "ITU DataHub — India (Department of Telecommunications)",
    "note": "COUNTRY proxy: national 5G population coverage (India). As in December 2024"
   },
   "Abu Dhabi": {
    "value": 99.46,
    "year": "2024",
    "source": "ITU DataHub — United Arab Emirates (Telecommunications Regulatory Authority)",
    "note": "COUNTRY proxy: national 5G population coverage (United Arab Emirates)."
   },
   "Shanghai": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — China (Ministry of Industry and Information Technology)",
    "note": "COUNTRY proxy: national 5G population coverage (China)."
   },
   "Beijing": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — China (Ministry of Industry and Information Technology)",
    "note": "COUNTRY proxy: national 5G population coverage (China)."
   },
   "Shenzhen": {
    "value": 96.0,
    "year": "2024",
    "source": "ITU DataHub — China (Ministry of Industry and Information Technology)",
    "note": "COUNTRY proxy: national 5G population coverage (China)."
   },
   "Delhi": {
    "value": 82.15,
    "year": "2024",
    "source": "ITU DataHub — India (Department of Telecommunications)",
    "note": "COUNTRY proxy: national 5G population coverage (India). As in December 2024"
   }
  }
 },
 "SMT-06": {
  "source": "IMD Smart City Index 2026 (7th ed., IMD World Competitiveness Center) — Technologies pillar / Mobility: 'Online scheduling and ticket sales has made public transport easier to use'",
  "url": "https://imd.widen.net/content/697v9hkavp/pdf/SmartCityIndex-2026.pdf (free report; landing page imd.org/smart-city-observatory)",
  "license": "© IMD World Competitiveness Center; report freely downloadable, values cited with attribution",
  "edition": "SCI 2026 (published March 2026, 148 cities)",
  "retrieved": "2026-07-17",
  "method": "pdftotext -layout extraction of the statement's score from each city profile (regex anchored to the exact statement text; zero ambiguities across 148 cities); 10 cities spot-checked visually against the rendered PDF, all matching. Report names mapped: 'Washington D.C.', 'Taipei City'.",
  "perCity": {
   "Singapore": {
    "value": 65.3,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Tokyo": {
    "value": 54.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Copenhagen": {
    "value": 71.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Zurich": {
    "value": 79.6,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Vienna": {
    "value": 76.4,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Seoul": {
    "value": 77.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Melbourne": {
    "value": 53.6,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Amsterdam": {
    "value": 65.5,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "London": {
    "value": 66.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "New York": {
    "value": 64.2,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Paris": {
    "value": 64.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Toronto": {
    "value": 60.5,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Berlin": {
    "value": 65.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Barcelona": {
    "value": 67.6,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Dubai": {
    "value": 81.8,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "San Francisco": {
    "value": 60.5,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Stockholm": {
    "value": 72.4,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Oslo": {
    "value": 78.4,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Helsinki": {
    "value": 78.4,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Madrid": {
    "value": 70.6,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Milan": {
    "value": 70.7,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Rome": {
    "value": 61.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Munich": {
    "value": 69.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Frankfurt": {
    "value": null,
    "year": "n/a",
    "note": "NULL: Frankfurt is not among the 148 cities ranked in IMD SCI 2026 (nor in 2025); no comparable survey score exists."
   },
   "Hamburg": {
    "value": 65.2,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Brussels": {
    "value": 63.8,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Dublin": {
    "value": 62.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Lisbon": {
    "value": 65.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Prague": {
    "value": 71.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Warsaw": {
    "value": 69.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Istanbul": {
    "value": 61.8,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Montreal": {
    "value": 63.4,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Vancouver": {
    "value": 56.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Chicago": {
    "value": 62.2,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Boston": {
    "value": 59.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Los Angeles": {
    "value": 59.8,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Seattle": {
    "value": 56.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Washington DC": {
    "value": 60.2,
    "year": "2026",
    "source": "IMD SCI 2026 city profile ('Washington D.C.')",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Sydney": {
    "value": 65.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Auckland": {
    "value": 55.3,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Osaka": {
    "value": 51.2,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Tel Aviv": {
    "value": 62.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Hong Kong": {
    "value": 68.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Taipei": {
    "value": 77.8,
    "year": "2026",
    "source": "IMD SCI 2026 city profile ('Taipei City')",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Bangkok": {
    "value": 76.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Kuala Lumpur": {
    "value": 81.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Jakarta": {
    "value": 83.2,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Manila": {
    "value": 61.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Ho Chi Minh City": {
    "value": 76.3,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Mumbai": {
    "value": 80.9,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Abu Dhabi": {
    "value": 79.1,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Shanghai": {
    "value": 84.8,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Beijing": {
    "value": 84.0,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Shenzhen": {
    "value": 86.7,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   },
   "Delhi": {
    "value": 79.7,
    "year": "2026",
    "source": "IMD SCI 2026 city profile",
    "note": "Resident-survey score 0-100 for the online scheduling & ticketing statement (Technologies/Mobility)."
   }
  }
 },
 "GRN-03": {
  "source": "EC JRC — EDGAR v2024 'Emissions in urban areas' (CO2 per sector per GHS urban centre) + GHS-UCDB R2024A population, joined on urban-centre ID",
  "url": "https://edgar.jrc.ec.europa.eu/dataset_ucdb (EDGAR_emiss_on_UCDB_2024.xlsx) + https://human-settlement.emergency.copernicus.eu/ghs_ucdb_2024.php (population attribute table)",
  "license": "European Commission open reuse with attribution; cite Crippa et al. 2024 (ESSD 16:2811) and GHSL",
  "edition": "EDGAR v2024 on UCDB R2024A V1-0; emissions year 2022, population epoch 2020",
  "retrieved": "2026-07-17",
  "method": "Sum of the six published CO2 sector columns for 2022 (Agriculture+Energy+Industry+Residential+Transport+Waste, ton/yr — verified equal to the published EM_CO2_TOT_2022 to the tonne for all 55) ÷ GH_POP_TOT_2020, exact division. Validation: the same arithmetic on 2020 columns reproduces JRC's published EM_CO2_PEC_2020 exactly for all 55 cities. All 55 urban-centre matches verified by name+country (Chicago disambiguated from Chicago Heights; Hong Kong's own centre is listed under country 'China').",
  "perCity": {
   "Singapore": {
    "value": 4.88,
    "year": "2022",
    "source": "EDGAR v2024 UC #178 'Singapore': 24,449,810 t CO2 / 5,015,276 residents (2020 epoch)"
   },
   "Tokyo": {
    "value": 3.16,
    "year": "2022",
    "source": "EDGAR v2024 UC #5929 'Tokyo': 105,599,814 t CO2 / 33,447,551 residents (2020 epoch)",
    "note": "UC is the contiguous Tokyo-Yokohama built-up area (pop 33.4M)."
   },
   "Copenhagen": {
    "value": 1.2,
    "year": "2022",
    "source": "EDGAR v2024 UC #698 'Copenhagen': 1,441,306 t CO2 / 1,201,209 residents (2020 epoch)"
   },
   "Zurich": {
    "value": 2.04,
    "year": "2022",
    "source": "EDGAR v2024 UC #1689 'Zurich': 1,365,715 t CO2 / 667,861 residents (2020 epoch)"
   },
   "Vienna": {
    "value": 1.96,
    "year": "2022",
    "source": "EDGAR v2024 UC #1081 'Vienna': 3,887,187 t CO2 / 1,988,046 residents (2020 epoch)"
   },
   "Seoul": {
    "value": 3.11,
    "year": "2022",
    "source": "EDGAR v2024 UC #348 'Seoul': 69,150,094 t CO2 / 22,243,919 residents (2020 epoch)"
   },
   "Melbourne": {
    "value": 2.92,
    "year": "2022",
    "source": "EDGAR v2024 UC #1747 'Melbourne': 11,099,087 t CO2 / 3,801,530 residents (2020 epoch)"
   },
   "Amsterdam": {
    "value": 2.69,
    "year": "2022",
    "source": "EDGAR v2024 UC #1590 'Amsterdam': 3,187,682 t CO2 / 1,185,152 residents (2020 epoch)"
   },
   "London": {
    "value": 2.06,
    "year": "2022",
    "source": "EDGAR v2024 UC #5816 'London': 20,515,376 t CO2 / 9,970,600 residents (2020 epoch)"
   },
   "New York": {
    "value": 4.22,
    "year": "2022",
    "source": "EDGAR v2024 UC #8099 'New York': 59,615,973 t CO2 / 14,113,884 residents (2020 epoch)",
    "note": "UC pop 14.1M is the contiguous built-up core, smaller than the 20M metro."
   },
   "Paris": {
    "value": 1.64,
    "year": "2022",
    "source": "EDGAR v2024 UC #2878 'Paris': 15,112,530 t CO2 / 9,198,552 residents (2020 epoch)"
   },
   "Toronto": {
    "value": 6.72,
    "year": "2022",
    "source": "EDGAR v2024 UC #2869 'Toronto': 36,168,756 t CO2 / 5,379,559 residents (2020 epoch)"
   },
   "Berlin": {
    "value": 3.66,
    "year": "2022",
    "source": "EDGAR v2024 UC #5483 'Berlin': 12,875,028 t CO2 / 3,521,506 residents (2020 epoch)"
   },
   "Barcelona": {
    "value": 1.48,
    "year": "2022",
    "source": "EDGAR v2024 UC #5071 'Barcelona': 5,634,871 t CO2 / 3,797,532 residents (2020 epoch)"
   },
   "Dubai": {
    "value": 13.93,
    "year": "2022",
    "source": "EDGAR v2024 UC #1007 'Dubai': 60,548,757 t CO2 / 4,347,871 residents (2020 epoch)",
    "note": "UC pop 4.35M spans the Dubai-Sharjah-Ajman conurbation."
   },
   "San Francisco": {
    "value": 3.66,
    "year": "2022",
    "source": "EDGAR v2024 UC #1461 'San Jose': 17,111,098 t CO2 / 4,679,439 residents (2020 epoch)",
    "note": "GHS UC covers the contiguous SF Bay Area conurbation (UCDB main-city label 'San Jose'/'San Francisco'), i.e. SF+San Jose+Oakland combined."
   },
   "Stockholm": {
    "value": 0.66,
    "year": "2022",
    "source": "EDGAR v2024 UC #1693 'Stockholm': 962,293 t CO2 / 1,450,800 residents (2020 epoch)",
    "note": "Notably low but equals JRC's own published per-capita pattern (PEC_2020=0.664); EDGAR UC totals exclude international aviation/shipping."
   },
   "Oslo": {
    "value": 1.04,
    "year": "2022",
    "source": "EDGAR v2024 UC #828 'Oslo': 873,752 t CO2 / 839,636 residents (2020 epoch)"
   },
   "Helsinki": {
    "value": 3.2,
    "year": "2022",
    "source": "EDGAR v2024 UC #572 'Helsinki': 3,193,624 t CO2 / 997,296 residents (2020 epoch)"
   },
   "Madrid": {
    "value": 1.03,
    "year": "2022",
    "source": "EDGAR v2024 UC #3338 'Madrid': 5,680,607 t CO2 / 5,511,255 residents (2020 epoch)"
   },
   "Milan": {
    "value": 2.11,
    "year": "2022",
    "source": "EDGAR v2024 UC #1498 'Milan': 6,609,724 t CO2 / 3,137,748 residents (2020 epoch)"
   },
   "Rome": {
    "value": 3.08,
    "year": "2022",
    "source": "EDGAR v2024 UC #3938 'Rome': 7,562,888 t CO2 / 2,456,126 residents (2020 epoch)"
   },
   "Munich": {
    "value": 3.17,
    "year": "2022",
    "source": "EDGAR v2024 UC #5249 'Munich': 5,593,992 t CO2 / 1,767,347 residents (2020 epoch)"
   },
   "Frankfurt": {
    "value": 3.56,
    "year": "2022",
    "source": "EDGAR v2024 UC #3400 'Frankfurt': 3,158,777 t CO2 / 887,963 residents (2020 epoch)"
   },
   "Hamburg": {
    "value": 3.5,
    "year": "2022",
    "source": "EDGAR v2024 UC #4184 'Hamburg': 6,085,594 t CO2 / 1,739,084 residents (2020 epoch)"
   },
   "Brussels": {
    "value": 2.98,
    "year": "2022",
    "source": "EDGAR v2024 UC #1290 'Brussels': 4,228,795 t CO2 / 1,417,148 residents (2020 epoch)"
   },
   "Dublin": {
    "value": 3.18,
    "year": "2022",
    "source": "EDGAR v2024 UC #394 'Dublin': 3,432,062 t CO2 / 1,079,513 residents (2020 epoch)"
   },
   "Lisbon": {
    "value": 0.92,
    "year": "2022",
    "source": "EDGAR v2024 UC #231 'Lisbon': 1,775,416 t CO2 / 1,922,855 residents (2020 epoch)"
   },
   "Prague": {
    "value": 2.06,
    "year": "2022",
    "source": "EDGAR v2024 UC #560 'Prague': 2,435,768 t CO2 / 1,181,057 residents (2020 epoch)"
   },
   "Warsaw": {
    "value": 2.44,
    "year": "2022",
    "source": "EDGAR v2024 UC #3712 'Warsaw': 4,617,116 t CO2 / 1,892,607 residents (2020 epoch)"
   },
   "Istanbul": {
    "value": 1.52,
    "year": "2022",
    "source": "EDGAR v2024 UC #2637 'Istanbul': 21,699,290 t CO2 / 14,266,277 residents (2020 epoch)"
   },
   "Montreal": {
    "value": 5.59,
    "year": "2022",
    "source": "EDGAR v2024 UC #3700 'Montreal': 17,541,154 t CO2 / 3,135,550 residents (2020 epoch)"
   },
   "Vancouver": {
    "value": 4.27,
    "year": "2022",
    "source": "EDGAR v2024 UC #358 'Vancouver': 8,952,028 t CO2 / 2,098,675 residents (2020 epoch)"
   },
   "Chicago": {
    "value": 5.57,
    "year": "2022",
    "source": "EDGAR v2024 UC #7532 'Chicago': 29,466,945 t CO2 / 5,289,806 residents (2020 epoch)"
   },
   "Boston": {
    "value": 5.19,
    "year": "2022",
    "source": "EDGAR v2024 UC #8255 'Boston': 8,608,558 t CO2 / 1,657,547 residents (2020 epoch)"
   },
   "Los Angeles": {
    "value": 4.68,
    "year": "2022",
    "source": "EDGAR v2024 UC #2007 'Los Angeles': 62,446,185 t CO2 / 13,341,630 residents (2020 epoch)"
   },
   "Seattle": {
    "value": 4.13,
    "year": "2022",
    "source": "EDGAR v2024 UC #5098 'Seattle': 8,403,515 t CO2 / 2,033,619 residents (2020 epoch)"
   },
   "Washington DC": {
    "value": 3.21,
    "year": "2022",
    "source": "EDGAR v2024 UC #7910 'Washington': 10,869,752 t CO2 / 3,383,772 residents (2020 epoch)"
   },
   "Sydney": {
    "value": 1.93,
    "year": "2022",
    "source": "EDGAR v2024 UC #2324 'Sydney': 7,949,223 t CO2 / 4,120,983 residents (2020 epoch)"
   },
   "Auckland": {
    "value": 1.42,
    "year": "2022",
    "source": "EDGAR v2024 UC #1147 'Auckland': 2,157,190 t CO2 / 1,521,127 residents (2020 epoch)"
   },
   "Osaka": {
    "value": 4.41,
    "year": "2022",
    "source": "EDGAR v2024 UC #4399 'Osaka [Kyoto]': 58,715,371 t CO2 / 13,299,772 residents (2020 epoch)",
    "note": "GHS UC 'Osaka [Kyoto]' covers the Keihanshin conurbation (Osaka-Kobe-Kyoto)."
   },
   "Tel Aviv": {
    "value": 1.26,
    "year": "2022",
    "source": "EDGAR v2024 UC #457 'Tel Aviv': 3,063,982 t CO2 / 2,429,768 residents (2020 epoch)"
   },
   "Hong Kong": {
    "value": 1.35,
    "year": "2022",
    "source": "EDGAR v2024 UC #11185 'Hong Kong': 6,492,985 t CO2 / 4,811,077 residents (2020 epoch)",
    "note": "Own UC (listed under country 'China'). Value looks low vs territory statistics (~4.5 t/cap incl. electricity): UC covers 4.8M of HK's 7.5M residents and major power stations may fall outside the UC polygon. Matches JRC's own published UC figure (PEC_2020=1.479)."
   },
   "Taipei": {
    "value": 1.9,
    "year": "2022",
    "source": "EDGAR v2024 UC #1142 'New Taipei [Taipei]': 17,702,256 t CO2 / 9,312,193 residents (2020 epoch)",
    "note": "GHS UC 'New Taipei [Taipei]' covers the Taipei-New Taipei(-Taoyuan) conurbation, not Taipei City alone."
   },
   "Bangkok": {
    "value": 1.71,
    "year": "2022",
    "source": "EDGAR v2024 UC #2315 'Bangkok': 29,825,407 t CO2 / 17,430,926 residents (2020 epoch)"
   },
   "Kuala Lumpur": {
    "value": 3.8,
    "year": "2022",
    "source": "EDGAR v2024 UC #1648 'Kuala Lumpur': 29,431,599 t CO2 / 7,750,184 residents (2020 epoch)"
   },
   "Jakarta": {
    "value": 2.01,
    "year": "2022",
    "source": "EDGAR v2024 UC #5472 'Jakarta': 76,986,578 t CO2 / 38,214,046 residents (2020 epoch)"
   },
   "Manila": {
    "value": 0.43,
    "year": "2022",
    "source": "EDGAR v2024 UC #2323 'Quezon City [Manila]': 10,499,127 t CO2 / 24,447,603 residents (2020 epoch)",
    "note": "GHS UC 'Quezon City [Manila]' covers the contiguous Metro Manila conurbation, not the City of Manila alone."
   },
   "Ho Chi Minh City": {
    "value": 0.92,
    "year": "2022",
    "source": "EDGAR v2024 UC #5239 'Ho Chi Minh City': 11,840,120 t CO2 / 12,917,368 residents (2020 epoch)"
   },
   "Mumbai": {
    "value": 0.79,
    "year": "2022",
    "source": "EDGAR v2024 UC #7599 'Mumbai': 15,299,093 t CO2 / 19,252,504 residents (2020 epoch)"
   },
   "Abu Dhabi": {
    "value": 5.08,
    "year": "2022",
    "source": "EDGAR v2024 UC #325 'Abu Dhabi': 2,658,538 t CO2 / 523,212 residents (2020 epoch)"
   },
   "Shanghai": {
    "value": 6.58,
    "year": "2022",
    "source": "EDGAR v2024 UC #11345 'Shanghai': 183,230,071 t CO2 / 27,835,301 residents (2020 epoch)"
   },
   "Beijing": {
    "value": 2.53,
    "year": "2022",
    "source": "EDGAR v2024 UC #8745 'Beijing': 44,399,379 t CO2 / 17,524,930 residents (2020 epoch)"
   },
   "Shenzhen": {
    "value": 2.25,
    "year": "2022",
    "source": "EDGAR v2024 UC #10933 'Shenzhen [Guangzhou]': 92,965,841 t CO2 / 41,337,427 residents (2020 epoch)",
    "note": "GHS UC 'Shenzhen [Guangzhou]' covers the merged Pearl River Delta conurbation (Shenzhen+Guangzhou+Dongguan+Foshan, pop 41.3M); no separate Shenzhen-only UC exists."
   },
   "Delhi": {
    "value": 0.63,
    "year": "2022",
    "source": "EDGAR v2024 UC #7963 'Ghaziabad [New Delhi]': 18,377,948 t CO2 / 29,391,147 residents (2020 epoch)",
    "note": "GHS UC 'Ghaziabad [New Delhi]' covers the contiguous Delhi NCR built-up area (Delhi+Ghaziabad+Noida etc.)."
   }
  }
 },
 "CMP-03": {
  "source": "Forbes Global 2000, 2025 edition (published 2025-06-12) — HQ city per firm, aggregated to metro counts",
  "url": "https://www.forbes.com/forbesapi/org/global2000/2025/position/true.json (complete 2000-firm list archived in session evidence); US metro rule: OMB July-2023 CSA delineations (Census list1_2023.xlsx)",
  "license": "© Forbes (no explicit reuse terms) — derived per-city counts published with attribution; the fetched list is archived as the reproducibility anchor",
  "edition": "Global 2000, 2025",
  "retrieved": "2026-07-17",
  "method": "Each firm assigned to a metro by its Forbes HQ city: US municipalities mapped to counties to OMB 2023 CSAs; non-US per the documented commuting-area rule. Corrections (all listed): Stockholm typo fixed; CITIC counted to Beijing (Forbes city) not its HK domicile; CRH to New York, Seagate to Fremont/SF, Amcor to Zurich, STMicroelectronics to Schiphol/Amsterdam, AngloGold Ashanti to Staines/London — all per Forbes city placement, ambiguity noted. Sum of the 55 counts = 1,137; 863 firms fall outside all 55 metros. Cross-checks vs feasibility: Tokyo 122=122, Beijing 79=78+CITIC, SF 63=33+29+Seagate.",
  "perCity": {
   "Singapore": {
    "value": 11.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "City-state; Forbes city 'Singapore' (11)."
   },
   "Tokyo": {
    "value": 122.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Kanto metro: Tokyo 115 + Yokohama 2 + Kawasaki 1 + Chiba 3 + Urayasu 1 (Oriental Land). Fanuc (Minamitsuru-gun, Yamanashi) and Gunma Bank (Maebashi) excluded as outside commuting area. Matches feasibility count 122."
   },
   "Copenhagen": {
    "value": 10.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Copenhagen 5 + suburbs Bagsvaerd (Novo Nordisk), Ballerup, Hedehusene (Rockwool), Humlebaek (Coloplast), Lyngby."
   },
   "Zurich": {
    "value": 16.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Zurich 11 + lake suburbs Kilchberg, Staefa, Herrliberg, Rapperswil-Jona + Amcor (Forbes: city Zurich, country UK - counted where Forbes places the city). Canton Zug cluster (Holcim, Glencore, Sika, Partners Group, Coca-Cola HBC, Sandoz) and Schindellegi (Kuehne+Nagel) excluded: Zug is its own FUA, not Zurich metro."
   },
   "Vienna": {
    "value": 8.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Vienna, Austria' only (8). Vienna VA firms go to Washington DC."
   },
   "Seoul": {
    "value": 54.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Seoul Capital Area: Seoul 43 + Seongnam 5 + Incheon ('Inchon') 2 + Yongin 2 + Suwon 1 + Icheon (SK Hynix) 1."
   },
   "Melbourne": {
    "value": 10.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Melbourne 6 + Docklands 3 (ANZ etc.) + Clayton 1. Bendigo excluded (separate city)."
   },
   "Amsterdam": {
    "value": 17.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Amsterdam 11 + metro Hoofddorp, Zaandam, Diemen, Almere, Hilversum + STMicroelectronics (Forbes: city Schiphol = Haarlemmermeer, Amsterdam metro; country field says Switzerland - ambiguous, counted per Forbes city). Rotterdam/The Hague/Utrecht/Eindhoven excluded."
   },
   "London": {
    "value": 57.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "London 44 + commuter belt Windsor 2 (Centrica, IHG), Uxbridge, Slough, Weybridge, Chertsey, Woking, Welwyn Garden City, Reigate, Luton, Basildon + Beazley (country listed Ireland, city London) + AngloGold Ashanti (country South Africa, city Staines-upon-Thames, Surrey). Vodafone (Newbury) and AstraZeneca (Cambridge) excluded as outside commuter belt."
   },
   "New York": {
    "value": 90.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "OMB 2023 New York-Newark NY-NJ-CT-PA CSA: NYC 54 + Westchester (Armonk/Purchase/Tarrytown) + Nassau/Queens (Hicksville, Jericho, Lake Success, Long Island City) + North NJ (Newark, Jersey City, Parsippany etc., 14) + Mercer Cty NJ via Trenton-Princeton MSA (Bristol Myers Squibb/Princeton, Church & Dwight/Ewing) + SW Connecticut via Bridgeport-Stamford-Danbury MSA (Stamford 6, Norwalk 3, Greenwich 2) + CRH (Irish-domiciled, Forbes city New York). "
   },
   "Paris": {
    "value": 44.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Ile-de-France: Paris 26 + 18 petite/grande-couronne communes (Courbevoie, Issy, Velizy, Boulogne-Billancourt, Nanterre, Neuilly, Saint-Ouen, Tremblay etc.). Clermont-Ferrand (Michelin) and Limoges excluded."
   },
   "Toronto": {
    "value": 28.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "GTA: Toronto 25 + Aurora (Magna) + Vaughan + Woodbridge."
   },
   "Berlin": {
    "value": 2.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Berlin' only (2)."
   },
   "Barcelona": {
    "value": 1.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Barcelona' only (1)."
   },
   "Dubai": {
    "value": 5.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Dubai' only (5). Ras Al-Khaimah excluded."
   },
   "San Francisco": {
    "value": 63.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "OMB 2023 San Jose-San Francisco-Oakland CSA: SF-Oakland-Fremont MSA 33 (SF 17, Oakland 3, San Mateo 3, Redwood City 2, Menlo Park 2, Foster City, Fremont 2, Pleasanton 2, Dublin CA) + San Jose MSA 29 (San Jose 10, Santa Clara 8 incl. Nvidia/Intel, Sunnyvale 3, Palo Alto 3, Mountain View 2, Cupertino/Apple, Milpitas, Los Gatos/Netflix) + Seagate (Irish-domiciled, Forbes city Fremont = Fremont CA). Keysight (Santa Rosa) NOT absorbed: Sonoma County "
   },
   "Stockholm": {
    "value": 22.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Stockholm 17 + Sundbyberg, Kista, Solna, Nacka + Evolution Gaming ('Stockhold' typo fixed). SSAB row carries bogus state 'Alberta' but city Stockholm - counted. Gothenburg/Lund excluded."
   },
   "Oslo": {
    "value": 5.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Oslo 3 + Fornebu (Aker BP) + Lysaker (Baerum suburbs). Kongsberg excluded (separate labour market)."
   },
   "Helsinki": {
    "value": 10.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Helsinki 6 + Espoo 4 - all 10 Finnish Global-2000 firms."
   },
   "Madrid": {
    "value": 12.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Madrid 11 + Majadahonda (Bankinter). Bilbao/Valencia/A Coruna (Inditex) excluded."
   },
   "Milan": {
    "value": 11.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Milan 9 + San Donato Milanese (Saipem) + Basiglio. Turin/Bologna excluded."
   },
   "Rome": {
    "value": 6.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Rome' only (6)."
   },
   "Munich": {
    "value": 10.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Munich 9 + Garching."
   },
   "Frankfurt": {
    "value": 5.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Frankfurt 4 + Bad Homburg (Fresenius). Darmstadt (Merck KGaA) excluded - separate OECD FUA, consistent with established rule."
   },
   "Hamburg": {
    "value": 2.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Hamburg' only (2)."
   },
   "Brussels": {
    "value": 6.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Brussels' only (6). AB InBev (Leuven) excluded - Leuven is a separate FUA under the established metro rule; borderline case, noted."
   },
   "Dublin": {
    "value": 15.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Dublin 13 + Swords (Ryanair, Trane Technologies). Includes Irish-domiciled firms Forbes places in Dublin whose operational HQs are elsewhere (PDD Holdings, Eaton, Aon, Steris, Allegion, Smurfit Westrock, Experian) - counted per Forbes city placement, flagged. Irish-domiciled firms Forbes places OUTSIDE Dublin are not counted here (Medtronic/Galway, JCI/Cork, Kerry/Tralee, Kingspan/Kingscourt, CRH/New York, Seagate/Fremont, Beazley/London, Aptiv/S"
   },
   "Lisbon": {
    "value": 3.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Lisbon 3. Porto excluded."
   },
   "Prague": {
    "value": 1.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Prague' (1, CEZ)."
   },
   "Warsaw": {
    "value": 4.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Warsaw 4. Plock (Orlen) excluded (outside Warsaw metro)."
   },
   "Istanbul": {
    "value": 10.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Istanbul 9 + Umraniye (an Istanbul district) 1."
   },
   "Montreal": {
    "value": 11.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Montreal 7 + Laval 2 + boroughs Saint-Laurent, Verdun."
   },
   "Vancouver": {
    "value": 4.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Vancouver, Canada' (4)."
   },
   "Chicago": {
    "value": 35.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "OMB 2023 Chicago-Naperville IL-IN-WI CSA: Chicago 17 + Cook/DuPage/Lake/Will suburbs 16 (Abbott Park, North Chicago, Deerfield, Lake Forest, Northbrook, Riverwoods, Vernon Hills, Rosemont, Rolling Meadows, Glenview, Downers Grove, Bolingbrook) + Merrillville IN (NiSource; Lake County IN, in MSA) + Kenosha WI (Snap-on; Kenosha CBSA is a CSA member). Moline (Deere) excluded (Quad Cities)."
   },
   "Boston": {
    "value": 22.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "OMB 2023 Boston-Worcester-Providence MA-RI-NH CSA: Boston/Cambridge 8 + MSA suburbs (Waltham, Framingham, Marlborough, Burlington, Wilmington) + Milford MA (Waters; Worcester County) + Providence RI 3 (Citizens, Textron, United Natural Foods) + Woonsocket RI (CVS Health) + Portsmouth NH (Iron Mountain; Rockingham County is in the Boston MSA). Eversource (Springfield MA) excluded - Springfield is its own CSA."
   },
   "Los Angeles": {
    "value": 16.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "OMB 2023 Los Angeles-Long Beach CSA: LA County 9 (LA, Burbank, Glendale, Long Beach, Pasadena 2, Rosemead, Manhattan Beach, Beverly Hills) + Orange County (Irvine 2, Newport Beach) + Ventura County (Amgen + Teledyne in Thousand Oaks, Trade Desk in Ventura) + Riverside County (Monster Beverage, Corona). Deckers (Goleta/Santa Barbara) excluded."
   },
   "Seattle": {
    "value": 14.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "OMB 2023 Seattle-Tacoma CSA: Seattle 7 + Bellevue 2, Redmond (Microsoft), Issaquah (Costco), Kirkland, Everett + Tacoma 1. Identical to MSA count - no extra CSA firms."
   },
   "Washington DC": {
    "value": 28.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "OMB 2023 Washington-Baltimore-Arlington CSA: DC 4 + NoVa 17 (Arlington 6, McLean 4, Reston 4, Falls Church, Herndon, Vienna VA) + Montgomery Cty MD (Bethesda 3 incl. Lockheed Martin/Marriott, Silver Spring) + Baltimore absorbed under CSA rule: +3 (Constellation Energy, T. Rowe Price, McCormick). Richmond/Norfolk-area firms excluded."
   },
   "Sydney": {
    "value": 14.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Sydney 12 + suburbs Mascot (Qantas), Alexandria."
   },
   "Auckland": {
    "value": 0.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Real zero: no New Zealand firm made the 2025 Global 2000."
   },
   "Osaka": {
    "value": 14.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Osaka' (14). Per established rule Kobe (2) and Kyoto (4) are separate hubs, not absorbed."
   },
   "Tel Aviv": {
    "value": 11.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Gush Dan: Tel Aviv 7 + Ramat Gan 2 + Givatayim + Petach Tikva. Haifa (2) excluded."
   },
   "Hong Kong": {
    "value": 41.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Hong Kong' (41). CITIC (HK-domiciled, Forbes city Beijing) reassigned to Beijing."
   },
   "Taipei": {
    "value": 30.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Taipei 27 + New Taipei 2 + Keelung 1. Taoyuan (3) excluded per established Taipei-Keelung metro rule; Hsinchu (4) excluded."
   },
   "Bangkok": {
    "value": 16.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Bangkok' (16)."
   },
   "Kuala Lumpur": {
    "value": 9.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "KL 8 + Petaling Jaya 1 (Klang Valley)."
   },
   "Jakarta": {
    "value": 12.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Jakarta 11 + Tangerang 1 (Jabodetabek)."
   },
   "Manila": {
    "value": 7.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Metro Manila: Manila 1 + Makati 4 (two Forbes spellings 'Makati'/'Makati City') + Pasay + Pasig."
   },
   "Ho Chi Minh City": {
    "value": 1.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "HCMC 1. Hanoi firms (7, two spellings 'Ha Noi'/'Hanoi') are not HCMC."
   },
   "Mumbai": {
    "value": 33.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Mumbai 32 + Thane 1 (MMR). Pune (6) excluded - separate metro."
   },
   "Abu Dhabi": {
    "value": 9.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Abu Dhabi' (9)."
   },
   "Shanghai": {
    "value": 35.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Shanghai' (35). Suzhou excluded (separate prefecture-level city)."
   },
   "Beijing": {
    "value": 79.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Beijing 78 + CITIC (Forbes country Hong Kong, city Beijing - counted where Forbes places the city). Langfang excluded. Feasibility count 78; +1 is CITIC."
   },
   "Shenzhen": {
    "value": 21.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "Forbes city 'Shenzhen' (21). Dongguan (2) and Huizhou (2) excluded - separate prefecture-level cities in the PRD."
   },
   "Delhi": {
    "value": 15.0,
    "year": "2025",
    "source": "Forbes Global 2000 (2025) HQ-city aggregation",
    "note": "NCR: New Delhi 9 + Gurgaon/Gurugram 5 (two Forbes spellings) + Noida 1."
   }
  }
 },
 "GRN-07": {
  "source": "ThinkHazard! (GFDRR / World Bank) — published hazard classes per administrative division: river flood, urban flood, coastal flood, extreme heat",
  "url": "https://thinkhazard.org/en/report/{code}.json (division codes recorded per city)",
  "license": "Hazard classes CC-BY (thinkhazard.org/en/about)",
  "edition": "live classes fetched 2026-07-17 (the site does not version-stamp)",
  "retrieved": "2026-07-17",
  "method": "For each city: the curated division report fetched fresh; the four classes coded 0-3 and the maximum stored (deterministic documented rule, exact on published classes). Division identity verified by report title + breadcrumb chain; all 55 chosen divisions and all four input classes recorded per value. Where a hazard is No Data at the chosen division the max runs over the available classes (stated per value); region fallbacks always supply all four classes together.",
  "perCity": {
   "Singapore": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #222 'Singapore' — river Low, urban High, coastal High, heat Medium",
    "note": "City-state: national (ADM0) report IS the city. Verified title \"Singapore\"."
   },
   "Tokyo": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #1690 'Tokyo' — river High, urban High, coastal High, heat Medium",
    "note": "ADM1 Tokyo Metropolis (Japan > Tokyo) = the city-prefecture; no meaningful ADM2 city unit."
   },
   "Copenhagen": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #15074 'Koebenhavns' — river Very low, urban Very low, coastal High, heat Very low",
    "note": "ADM2 Koebenhavns under Denmark > Koebenhavn (the Danish-spelled Copenhagen division; English search for \"Copenhagen\" finds nothing). Coastal High drives the score."
   },
   "Zurich": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #2832 'Zurich' — river Medium, urban Medium, coastal No Data, heat Low",
    "note": "ADM1 canton Zurich (Switzerland > Zurich); compact canton containing the city; no city ADM2 in ThinkHazard search. Coastal No Data at all Swiss levels (landlocked) - max over the 3 available classes."
   },
   "Vienna": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #5672 'Wien' — river Medium, urban Low, coastal No Data, heat Low",
    "note": "ADM2 Wien (Austria > Wien > Wien) = the city itself. Coastal No Data (landlocked) - max over 3 available."
   },
   "Seoul": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #2443 'Seoul' — river Low, urban Medium, coastal No Data, heat Medium",
    "note": "ADM1 Seoul Special City (Republic of Korea > Seoul) = the city; no higher sub-national fallback exists. Coastal flood No Data for this inland-river division - max over 3 available."
   },
   "Melbourne": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #476 'Victoria' — river High, urban High, coastal High, heat Medium",
    "note": "ADM1 Victoria used per instruction: city division Melbourne (C) (5396) has Extreme heat AND Coastal flood No Data. State-level classes (river/urban/coastal all High) applied to the city - state-proxy, may overstate river flood for the city proper."
   },
   "Amsterdam": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #2165 'Noord-holland' — river High, urban High, coastal High, heat Very low",
    "note": "ADM1 Noord-Holland province: ThinkHazard has no Amsterdam city division at all (only \"Nieuw Amsterdam\", Suriname - the naive trap). Province contains the city; below-sea-level polder geography makes the all-High flood classes plausible."
   },
   "London": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #40110 'Greater London' — river Medium, urban Low, coastal High, heat Low",
    "note": "ADM2 Greater London (United Kingdom > England) = the city. Coastal High (tidal Thames). Naive match had picked Londonderry, NI - corrected."
   },
   "New York": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #3246 'New York' — river High, urban High, coastal High, heat Medium",
    "note": "ADM1 New York State fallback: the ADM2 \"New York\" county (Manhattan, 30535) has River flood AND Coastal flood No Data (only 2 of 4 hazards populated), and NYC has no single city ADM2 (5 separate boroughs/counties). State-proxy; its Coastal High / River High are plausible for NYC (Sandy) but classes cover the whole state."
   },
   "Paris": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #16280 'Paris' — river High, urban Medium, coastal No Data, heat Low",
    "note": "ADM2 Paris (France > Ile-de-France) = the city department. Coastal No Data (inland) - max over 3 available; River flood High (Seine) drives the score."
   },
   "Toronto": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #12686 'Toronto' — river Very low, urban Low, coastal No Data, heat Medium",
    "note": "ADM2 Toronto (Canada > Ontario) = the city. Coastal No Data (Great Lakes are not in the coastal-flood dataset); did NOT fall back to Ontario ADM1, which would import Hudson Bay coastline - max over 3 available."
   },
   "Berlin": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #1310 'Berlin' — river High, urban Low, coastal No Data, heat Low",
    "note": "ADM1 city-state Berlin (Germany > Berlin) = the city. Coastal No Data (inland) - max over 3 available. River flood High (Spree/Havel) drives the score - flagged as a mild surprise but it is the published class."
   },
   "Barcelona": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #2724 'Cataluña/Catalunya' — river High, urban Medium, coastal High, heat Medium",
    "note": "ADM1 Cataluña fallback: ADM2 Barcelona province (25806) has Coastal flood No Data despite the city being on the Mediterranean; the ADM1 report has Coastal High. Per rules ADM1 used for ALL four (River High, Urban Medium, Heat Medium) - region-proxy."
   },
   "Dubai": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #3177 'Dubai' — river Low, urban Low, coastal High, heat High",
    "note": "ADM1 emirate of Dubai (United Arab Emirates > Dubai) = the city-emirate. Coastal High + Extreme heat High."
   },
   "San Francisco": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #28902 'San Francisco' — river Very low, urban Very low, coastal High, heat Low",
    "note": "ADM2 San Francisco county (USA > California) = the consolidated city-county. Naive match had picked San Francisco, Venezuela - corrected via fresh search. Coastal High drives the score."
   },
   "Stockholm": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #2800 'Stockholms Laen' — river Very low, urban Low, coastal Medium, heat Very low",
    "note": "ADM1 Stockholm County fallback: ADM2 Stockholm municipality (26170) has Coastal flood No Data despite the Baltic waterfront; county report has Coastal Medium, so ADM1 used for ALL four per rules."
   },
   "Oslo": {
    "value": 0.0,
    "year": "2026",
    "source": "ThinkHazard division #23413 'Oslo' — river Very low, urban Very low, coastal No Data, heat Very low",
    "note": "ADM2 Oslo municipality (Norway > Oslo). Coastal flood No Data at ADM2 AND at ADM1 (2255, identical classes) - Norway appears to lack a coastal-flood layer, so the fjord city scores on the 3 available classes, all Very low. Lowest score in the set - flagged, not smoothed."
   },
   "Helsinki": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #16230 'Uusimaa' — river Very low, urban Very low, coastal Medium, heat Low",
    "note": "ADM2 Uusimaa region (Finland > Southern Finland): Helsinki has no own division in ThinkHazard; Uusimaa is its surrounding region (region-proxy). Coastal Medium drives the score."
   },
   "Madrid": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #25820 'Madrid' — river Low, urban Very low, coastal No Data, heat Medium",
    "note": "ADM2 Madrid (Spain > Comunidad de Madrid) = the city province. Coastal No Data (inland) - max over 3 available. Naive match had picked Madrid, Colombia - corrected."
   },
   "Milan": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #18363 'Milano' — river Low, urban Low, coastal No Data, heat Medium",
    "note": "ADM2 Milano province (Italy > Lombardia) contains the city. Coastal No Data (inland) - max over 3 available."
   },
   "Rome": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #18350 'Roma' — river Low, urban Low, coastal Medium, heat Medium",
    "note": "ADM2 Roma province (Italy > Lazio) contains the city; all four classes populated (Coastal Medium at Ostia coast)."
   },
   "Munich": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #16532 'Oberbayern' — river Medium, urban Low, coastal No Data, heat Low",
    "note": "ADM2 Oberbayern government region (Germany > Bayern): German GAUL ADM2 stops at Regierungsbezirk level, no Munich city division exists - region-proxy containing the city. Coastal No Data (inland) - max over 3 available."
   },
   "Frankfurt": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #16541 'Darmstadt' — river High, urban Medium, coastal No Data, heat Low",
    "note": "ADM2 Regierungsbezirk Darmstadt (Germany > Hessen), the government region containing Frankfurt am Main - region-proxy (no city division in GAUL). Coastal No Data (inland) - max over 3; River High (Main/Rhine) drives the score."
   },
   "Hamburg": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #1313 'Hamburg' — river High, urban High, coastal High, heat Low",
    "note": "ADM1 city-state Hamburg (Germany > Hamburg) = the city. Naive match had picked Novo Hamburgo, Brazil - corrected. River/Urban/Coastal all High (Elbe estuary storm surge)."
   },
   "Brussels": {
    "value": 1.0,
    "year": "2026",
    "source": "ThinkHazard division #600 'Region de Bruxelles-Capitale / Brussels Hoofdstedelijk Gewes' — river Low, urban Low, coastal No Data, heat Low",
    "note": "ADM1 Brussels-Capital Region = the city. Coastal No Data (inland) - max over 3 available."
   },
   "Dublin": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #1587 'Dublin' — river Very low, urban Very low, coastal High, heat Very low",
    "note": "ADM1 Dublin county (Ireland > Dublin) = the city and county. Coastal High drives the score; everything else Very low."
   },
   "Lisbon": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #2406 'Lisboa' — river High, urban Low, coastal Medium, heat Medium",
    "note": "ADM1 Lisboa district fallback: ADM2 Lisboa (24830) has Coastal flood No Data despite the Tagus estuary; district report has Coastal Medium, so ADM1 used for ALL four per rules (River High drives the score)."
   },
   "Prague": {
    "value": 1.0,
    "year": "2026",
    "source": "ThinkHazard division #14834 'Praha' — river Low, urban Low, coastal No Data, heat Low",
    "note": "ADM2 Praha (Czech Republic > Praha > Praha) = the city; ADM1 (1032) is identical. Coastal No Data (landlocked) - max over 3 available."
   },
   "Warsaw": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #24452 'Warszawa' — river Medium, urban Low, coastal No Data, heat Low",
    "note": "ADM2 Warszawa (Poland > Mazowieckie) = the city. Coastal No Data (inland) - max over 3 available."
   },
   "Istanbul": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #3056 'Istanbul' — river High, urban High, coastal Very low, heat Medium",
    "note": "ADM1 Istanbul province (Turkey > Istanbul) = the city-province. Note the published Coastal flood class is Very low for this Bosphorus/Marmara city - surprising but reported as-is; River/Urban High drive the score anyway."
   },
   "Montreal": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #12713 'Montréal' — river High, urban Medium, coastal No Data, heat Medium",
    "note": "ADM2 Montréal (Canada > Quebec) = the city region. Coastal No Data (river city ~1000 km from open ocean); did NOT fall back to Quebec ADM1, which would import Gulf of St Lawrence coastline - max over 3 available; River High (2017/2019 floods) drives the score."
   },
   "Vancouver": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #12552 'Greater Vancouver' — river Low, urban Low, coastal High, heat Medium",
    "note": "ADM2 Greater Vancouver regional district (Canada > British Columbia) = the metro city. Coastal High drives the score."
   },
   "Chicago": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #29288 'Cook' — river Low, urban Low, coastal No Data, heat Medium",
    "note": "ADM2 Cook County (USA > Illinois) = the city county. Coastal No Data (Lake Michigan not in the coastal-flood dataset); Illinois ADM1 fallback would not add coastal data - max over 3 available."
   },
   "Boston": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #29907 'Suffolk' — river Very low, urban Low, coastal High, heat Medium",
    "note": "ADM2 Suffolk County (USA > Massachusetts) = Boston's county. Coastal High drives the score."
   },
   "Los Angeles": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #28883 'Los Angeles' — river Very low, urban Very low, coastal High, heat Medium",
    "note": "ADM2 Los Angeles County (USA > California) = the city county. Coastal High drives the score."
   },
   "Seattle": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #31646 'King' — river Low, urban Low, coastal High, heat Medium",
    "note": "ADM2 King County (USA > Washington) = Seattle's county (disambiguated from King, TX). Coastal High drives the score."
   },
   "Washington DC": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #28997 'District of Columbia' — river Low, urban Low, coastal No Data, heat Medium",
    "note": "ADM2 District of Columbia (USA > District of Columbia) = the city; ADM1 (3222) is identical. Coastal flood No Data at both levels despite the tidal Potomac - max over 3 available; flagged as a quirk of the US coastal layer."
   },
   "Sydney": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #470 'New South Wales' — river High, urban High, coastal High, heat Medium",
    "note": "ADM1 New South Wales used per instruction: city division Sydney (C) (154637) has Extreme heat AND Coastal flood (and Earthquake) No Data. State-level classes (river/urban/coastal all High) applied - state-proxy, may overstate river flood for the city proper."
   },
   "Auckland": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #2171 'Auckland' — river Very low, urban Low, coastal High, heat Very low",
    "note": "ADM1 Auckland region (New Zealand > Auckland) = the city region. Coastal High drives the score."
   },
   "Osaka": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #1682 'Oosaka' — river High, urban High, coastal High, heat Medium",
    "note": "ADM1 Osaka prefecture (Japan > Oosaka): the city itself exists only as ~24 tiny ku (ward) ADM2 units (Oosakasi_*), so the compact prefecture is the right city-scale division. River/Urban/Coastal all High."
   },
   "Tel Aviv": {
    "value": 2.0,
    "year": "2026",
    "source": "ThinkHazard division #1615 'Tel Aviv' — river Low, urban Low, coastal No Data, heat Medium",
    "note": "ADM1 Tel Aviv district (Israel > Tel Aviv) = the city district. Coastal flood No Data at ADM1 despite the Mediterranean seafront (flagged); country-level Israel (121) shows Coastal Medium, which would not change the max anyway - max over 3 available = Extreme heat Medium."
   },
   "Hong Kong": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #33364 'Hong Kong, SAR' — river Very low, urban High, coastal High, heat Medium",
    "note": "ADM0-level Hong Kong SAR report = the city. Urban/Coastal High drive the score."
   },
   "Taipei": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #925 'Taiwan Sheng' — river High, urban High, coastal High, heat High",
    "note": "Taiwan-level report (925 Taiwan Sheng; ADM0 147296 has identical classes) - country-proxy for this city: ThinkHazard has no Taipei division. All four classes High."
   },
   "Bangkok": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #2853 'Bangkok' — river Medium, urban Medium, coastal High, heat High",
    "note": "ADM1 Bangkok (Thailand > Bangkok) = the BMA city province - NOT the tiny Bangkok Noi district from the naive match. River/Urban Medium, Coastal High, Heat High."
   },
   "Kuala Lumpur": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #37366 'Kuala Lumpur' — river Low, urban High, coastal No Data, heat Medium",
    "note": "ADM2 Kuala Lumpur (Malaysia > Kuala Lumpur > Kuala Lumpur) = the federal-territory city; ADM1 (1894) is identical. Coastal No Data at both levels (city is ~35 km inland) - max over 3 available; Urban flood High drives the score."
   },
   "Jakarta": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #1516 'Dki Jakarta' — river High, urban High, coastal High, heat Medium",
    "note": "ADM1 DKI Jakarta (Indonesia > Dki Jakarta) = the capital city province (the ADM2s are its kota sub-cities). River/Urban/Coastal all High."
   },
   "Manila": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #24210 'Metropolitan Manila' — river Low, urban Medium, coastal High, heat Medium",
    "note": "ADM2 Metropolitan Manila (Philippines > NCR) = the metro city. Coastal High drives the score."
   },
   "Ho Chi Minh City": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #3352 'Ho Chi Minh City' — river High, urban High, coastal High, heat Medium",
    "note": "ADM1 Ho Chi Minh City (Vietnam > Ho Chi Minh City) = the city province. River/Urban/Coastal all High."
   },
   "Mumbai": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #70184 'Mumbai city' — river Very low, urban Low, coastal High, heat High",
    "note": "ADM2 Mumbai city district (India > Maharashtra); the alternative Mumbai Suburban (70183) yields the same max. Coastal High + Heat High."
   },
   "Abu Dhabi": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #3173 'Abu Dhabi' — river Low, urban Low, coastal High, heat High",
    "note": "ADM1 emirate of Abu Dhabi (UAE > Abu Dhabi) containing the city (emirate is large but city-relevant classes: Coastal High, Heat High)."
   },
   "Shanghai": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #13242 'Shanghai' — river Low, urban Low, coastal High, heat High",
    "note": "ADM2 Shanghai (China > Shanghai Shi) = the urban core; ADM1 municipality (922) has identical four classes. Coastal High + Heat High."
   },
   "Beijing": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #899 'Beijing Shi' — river High, urban Low, coastal No Data, heat High",
    "note": "ADM1 Beijing municipality (China > Beijing Shi) = the city. Coastal No Data (inland) - max over 3 available; River High + Heat High drive the score."
   },
   "Shenzhen": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #13030 'Shenzhen' — river Very low, urban High, coastal High, heat High",
    "note": "ADM2 Shenzhen (China > Guangdong Sheng) = the city. Urban/Coastal/Heat all High."
   },
   "Delhi": {
    "value": 3.0,
    "year": "2026",
    "source": "ThinkHazard division #17633 'Delhi' — river High, urban High, coastal No Data, heat High",
    "note": "ADM2 Delhi (India > Delhi > Delhi) = the city; ADM1 NCT (1489) is identical. Coastal No Data (inland) - max over 3 available; River/Urban/Heat all High."
   }
  }
 },
 "SMT-04": {
  "source": "ODIN — Open Data Inventory 2024/25 (Open Data Watch), overall score per country",
  "url": "https://odin.opendatawatch.com/ (data pages; edition updated 2025-07-21)",
  "license": "Creative Commons per site footer; exact variant to be confirmed with the publisher before commercial reuse",
  "edition": "ODIN 2024/25 (197 countries)",
  "retrieved": "2026-07-17",
  "method": "National overall ODIN score assigned to each city as a country proxy. Coverage and openness subscores archived in evidence. Taiwan and Hong Kong are separate ODIN entities.",
  "perCity": {
   "Singapore": {
    "value": 90.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Singapore: overall 90.0 (coverage 84.0, openness 95.0, rank 1)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Tokyo": {
    "value": 71.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Japan: overall 71.0 (coverage 67.0, openness 76.0, rank 48)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Copenhagen": {
    "value": 89.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Denmark: overall 89.0 (coverage 83.0, openness 94.0, rank 4)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Zurich": {
    "value": 66.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Switzerland: overall 66.0 (coverage 70.0, openness 64.0, rank 57)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Vienna": {
    "value": 72.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Austria: overall 72.0 (coverage 65.0, openness 77.0, rank 44)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Seoul": {
    "value": 75.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Korea, Rep.: overall 75.0 (coverage 58.0, openness 88.0, rank 33)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Melbourne": {
    "value": 77.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Australia: overall 77.0 (coverage 66.0, openness 86.0, rank 24)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Amsterdam": {
    "value": 82.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Netherlands: overall 82.0 (coverage 70.0, openness 92.0, rank 15)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "London": {
    "value": 70.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United Kingdom: overall 70.0 (coverage 61.0, openness 78.0, rank 49)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "New York": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United States: overall 78.0 (coverage 70.0, openness 85.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Paris": {
    "value": 63.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — France: overall 63.0 (coverage 53.0, openness 71.0, rank 68)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Toronto": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Canada: overall 78.0 (coverage 77.0, openness 80.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Berlin": {
    "value": 79.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Germany: overall 79.0 (coverage 71.0, openness 86.0, rank 17)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Barcelona": {
    "value": 77.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Spain: overall 77.0 (coverage 78.0, openness 77.0, rank 24)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Dubai": {
    "value": 85.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United Arab Emirates: overall 85.0 (coverage 74.0, openness 95.0, rank 9)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "San Francisco": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United States: overall 78.0 (coverage 70.0, openness 85.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Stockholm": {
    "value": 83.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Sweden: overall 83.0 (coverage 78.0, openness 86.0, rank 11)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Oslo": {
    "value": 89.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Norway: overall 89.0 (coverage 80.0, openness 96.0, rank 4)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Helsinki": {
    "value": 89.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Finland: overall 89.0 (coverage 82.0, openness 95.0, rank 4)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Madrid": {
    "value": 77.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Spain: overall 77.0 (coverage 78.0, openness 77.0, rank 24)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Milan": {
    "value": 76.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Italy: overall 76.0 (coverage 73.0, openness 78.0, rank 29)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Rome": {
    "value": 76.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Italy: overall 76.0 (coverage 73.0, openness 78.0, rank 29)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Munich": {
    "value": 79.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Germany: overall 79.0 (coverage 71.0, openness 86.0, rank 17)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Frankfurt": {
    "value": 79.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Germany: overall 79.0 (coverage 71.0, openness 86.0, rank 17)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Hamburg": {
    "value": 79.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Germany: overall 79.0 (coverage 71.0, openness 86.0, rank 17)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Brussels": {
    "value": 54.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Belgium: overall 54.0 (coverage 52.0, openness 55.0, rank 105)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Dublin": {
    "value": 77.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Ireland: overall 77.0 (coverage 60.0, openness 91.0, rank 24)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Lisbon": {
    "value": 83.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Portugal: overall 83.0 (coverage 71.0, openness 93.0, rank 11)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Prague": {
    "value": 63.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Czech Republic: overall 63.0 (coverage 58.0, openness 67.0, rank 68)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Warsaw": {
    "value": 90.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Poland: overall 90.0 (coverage 82.0, openness 97.0, rank 1)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Istanbul": {
    "value": 64.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Türkiye: overall 64.0 (coverage 70.0, openness 59.0, rank 65)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Montreal": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Canada: overall 78.0 (coverage 77.0, openness 80.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Vancouver": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Canada: overall 78.0 (coverage 77.0, openness 80.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Chicago": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United States: overall 78.0 (coverage 70.0, openness 85.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Boston": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United States: overall 78.0 (coverage 70.0, openness 85.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Los Angeles": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United States: overall 78.0 (coverage 70.0, openness 85.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Seattle": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United States: overall 78.0 (coverage 70.0, openness 85.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Washington DC": {
    "value": 78.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United States: overall 78.0 (coverage 70.0, openness 85.0, rank 21)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Sydney": {
    "value": 77.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Australia: overall 77.0 (coverage 66.0, openness 86.0, rank 24)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Auckland": {
    "value": 76.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — New Zealand: overall 76.0 (coverage 66.0, openness 85.0, rank 29)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Osaka": {
    "value": 71.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Japan: overall 71.0 (coverage 67.0, openness 76.0, rank 48)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Tel Aviv": {
    "value": 74.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Israel: overall 74.0 (coverage 64.0, openness 83.0, rank 37)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Hong Kong": {
    "value": 88.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Hong Kong SAR, China: overall 88.0 (coverage 81.0, openness 93.0, rank 7)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Taipei": {
    "value": 66.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Taiwan: overall 66.0 (coverage 58.0, openness 72.0, rank 57)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Bangkok": {
    "value": 64.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Thailand: overall 64.0 (coverage 64.0, openness 64.0, rank 65)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Kuala Lumpur": {
    "value": 90.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Malaysia: overall 90.0 (coverage 79.0, openness 99.0, rank 1)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Jakarta": {
    "value": 74.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Indonesia: overall 74.0 (coverage 71.0, openness 76.0, rank 37)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Manila": {
    "value": 74.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Philippines: overall 74.0 (coverage 69.0, openness 79.0, rank 37)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Ho Chi Minh City": {
    "value": 48.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — Vietnam: overall 48.0 (coverage 43.0, openness 53.0, rank 128)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Mumbai": {
    "value": 54.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — India: overall 54.0 (coverage 52.0, openness 55.0, rank 105)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Abu Dhabi": {
    "value": 85.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — United Arab Emirates: overall 85.0 (coverage 74.0, openness 95.0, rank 9)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Shanghai": {
    "value": 39.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — China: overall 39.0 (coverage 48.0, openness 32.0, rank 159)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Beijing": {
    "value": 39.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — China: overall 39.0 (coverage 48.0, openness 32.0, rank 159)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Shenzhen": {
    "value": 39.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — China: overall 39.0 (coverage 48.0, openness 32.0, rank 159)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   },
   "Delhi": {
    "value": 54.0,
    "year": "2024/25",
    "source": "ODIN 2024/25 — India: overall 54.0 (coverage 52.0, openness 55.0, rank 105)",
    "note": "EXTENDED tier, COUNTRY proxy with concept drift: openness of NATIONAL official statistics, not municipal open data."
   }
  }
 },
 "GRN-06": {
  "source": "IWA International Statistics for Water Services — 'Specific Water Consumption for Households (litres/capita/day)', newest edition carrying each city",
  "url": "https://waterstatistics.iwa-network.org/ (per-edition chart API; responses archived in session evidence)",
  "license": "No explicit license stated by the portal — cited as IWA ISWS with edition year; permissions check recommended before commercial reuse",
  "edition": "editions 2014-2022; newest per city (21 cities on 2022, 7 stuck at 2016)",
  "retrieved": "2026-07-17",
  "method": "Per city: the household specific-consumption value from the newest IWA edition that carries it (verified year-to-year variation, no carry-forward; Households=0 treated as no data; namesakes verified via country group). Cities absent from all editions are explained blanks. The heavier utility-yearbook dig for the missing 21 was deferred per plan.",
  "perCity": {
   "Singapore": {
    "value": 154.0,
    "year": "2020",
    "source": "IWA ISWS 2020 edition — 'Singapore'",
    "note": "IWA country group SGP (Singapore) — namesake verified. IWA note (household only): 2020 consumption higher than 2018 due to Covid-19 home working/washing. Editions with data: 2018/2020"
   },
   "Tokyo": {
    "value": 215.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Tokyo'",
    "note": "IWA country group JPN (Japan) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Copenhagen": {
    "value": 103.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Copenhagen'",
    "note": "IWA country group DNK (Denmark) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Zurich": {
    "value": null,
    "year": "n/a",
    "note": "Listed in the IWA portal (Switzerland group) but the household value is empty/0 in every edition — effectively not in any IWA edition."
   },
   "Vienna": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Seoul": {
    "value": 206.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Seoul'",
    "note": "IWA country group KOR (South Korea) — namesake verified. Editions with data: 2014/2016/2018/2022"
   },
   "Melbourne": {
    "value": 149.0,
    "year": "2016",
    "source": "IWA ISWS 2016 edition — 'Melbourne'",
    "note": "IWA country group AUS (Australia) — namesake verified. STALE: newest appearance is the 2016 edition (decade-old vintage). Editions with data: 2014/2016"
   },
   "Amsterdam": {
    "value": 141.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Amsterdam'",
    "note": "IWA country group NLD (Netherlands) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "London": {
    "value": 149.0,
    "year": "2016",
    "source": "IWA ISWS 2016 edition — 'London'",
    "note": "IWA country group GBR (United Kingdom) — namesake verified. STALE: newest appearance is the 2016 edition (decade-old vintage). Editions with data: 2014/2016"
   },
   "New York": {
    "value": 438.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'New York'",
    "note": "IWA country group USA (United States) — namesake verified. OUTLIER: 438 exceeds the ~80-400 sanity band (prior editions 447/2016, 476/2014 — consistently high; likely reflects total system demand per capita). Recorded as-is, not smoothed. Editions with data: 2014/2016/2022"
   },
   "Paris": {
    "value": 201.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Paris'",
    "note": "IWA country group FRA (France) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Toronto": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Berlin": {
    "value": 115.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Berlin'",
    "note": "IWA country group DEU (Germany) — namesake verified. Editions with data: 2016/2018/2020/2022"
   },
   "Barcelona": {
    "value": 128.0,
    "year": "2018",
    "source": "IWA ISWS 2018 edition — 'Barcelona'",
    "note": "IWA country group ESP (Spain) — namesake verified. Somewhat stale: newest appearance is the 2018 edition. CAUTION: IWA 2018 note says Spain could not provide city-level data; this is the Spain-wide household figure (country proxy). Madrid carries the identical number. Editions with data: 2014/2016/2018"
   },
   "Dubai": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "San Francisco": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Stockholm": {
    "value": 184.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Stockholm'",
    "note": "IWA country group SWE (Sweden) — namesake verified. Editions with data: 2016/2018/2022"
   },
   "Oslo": {
    "value": 161.0,
    "year": "2020",
    "source": "IWA ISWS 2020 edition — 'Oslo'",
    "note": "IWA country group NOR (Norway) — namesake verified. Editions with data: 2014/2016/2018/2020"
   },
   "Helsinki": {
    "value": 130.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Helsinki'",
    "note": "IWA country group FIN (Finland) — namesake verified. Value is for the HSY supply area (Helsinki, Espoo, Vantaa, Kauniainen), per IWA note. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Madrid": {
    "value": 128.0,
    "year": "2018",
    "source": "IWA ISWS 2018 edition — 'Madrid'",
    "note": "IWA country group ESP (Spain) — namesake verified. Somewhat stale: newest appearance is the 2018 edition. CAUTION: IWA 2018 note says Spain could not provide city-level data; this is the Spain-wide household figure (country proxy). Barcelona carries the identical number. Editions with data: 2014/2016/2018"
   },
   "Milan": {
    "value": 265.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Milan'",
    "note": "IWA country group ITA (Italy) — namesake verified. High for Europe (265) but consistent with Milan's known high domestic use; in range. Editions with data: 2018/2022"
   },
   "Rome": {
    "value": 186.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Rome'",
    "note": "IWA country group ITA (Italy) — namesake verified. Editions with data: 2018/2022"
   },
   "Munich": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Frankfurt": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Hamburg": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Brussels": {
    "value": 96.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Brussels'",
    "note": "IWA country group BEL (Belgium) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Dublin": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Lisbon": {
    "value": 111.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Lisbon'",
    "note": "IWA country group PRT (Portugal) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Prague": {
    "value": 108.0,
    "year": "2016",
    "source": "IWA ISWS 2016 edition — 'Prague'",
    "note": "IWA country group CZE (Czechia) — namesake verified. STALE: newest appearance is the 2016 edition (decade-old vintage). Editions with data: 2016"
   },
   "Warsaw": {
    "value": 122.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Warsaw'",
    "note": "IWA country group POL (Poland) — namesake verified. Editions with data: 2016/2018/2020/2022"
   },
   "Istanbul": {
    "value": 147.0,
    "year": "2018",
    "source": "IWA ISWS 2018 edition — 'Istanbul'",
    "note": "IWA country group TUR (Turkey) — namesake verified. Somewhat stale: newest appearance is the 2018 edition. Editions with data: 2016/2018"
   },
   "Montreal": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Vancouver": {
    "value": 337.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Vancouver'",
    "note": "IWA country group CAN (Canada) — namesake verified. High-side (337; 2020 edition showed 434) — flagged, not smoothed. Canadian Vancouver (IWA group CAN). Editions with data: 2014/2016/2018/2020/2022"
   },
   "Chicago": {
    "value": 280.0,
    "year": "2018",
    "source": "IWA ISWS 2018 edition — 'Chicago'",
    "note": "IWA country group USA (United States) — namesake verified. Somewhat stale: newest appearance is the 2018 edition. IWA note sources this from CMAP 'water demand' indicator (may include non-household demand). 2018 edition only. Editions with data: 2018"
   },
   "Boston": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Los Angeles": {
    "value": 265.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Los Angeles'",
    "note": "IWA country group USA (United States) — namesake verified. Editions with data: 2014/2016/2018/2022"
   },
   "Seattle": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Washington DC": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Sydney": {
    "value": 206.0,
    "year": "2016",
    "source": "IWA ISWS 2016 edition — 'Sydney'",
    "note": "IWA country group AUS (Australia) — namesake verified. STALE: newest appearance is the 2016 edition (decade-old vintage). Editions with data: 2014/2016"
   },
   "Auckland": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Osaka": {
    "value": 246.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Osaka'",
    "note": "IWA country group JPN (Japan) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Hong Kong": {
    "value": 234.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Hong Kong'",
    "note": "IWA country group HKG (Hong Kong SAR) — namesake verified. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Taipei": {
    "value": 336.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Taipei'",
    "note": "IWA country group TWN (Taiwan) — namesake verified. High-side but in range (336). TWN group, Taipei City. Editions with data: 2014/2016/2018/2020/2022"
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Kuala Lumpur": {
    "value": 245.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Kuala Lumpur'",
    "note": "IWA country group MYS (Malaysia) — namesake verified. Editions with data: 2018/2022"
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Mumbai": {
    "value": 150.0,
    "year": "2022",
    "source": "IWA ISWS 2022 edition — 'Mumbai'",
    "note": "IWA country group IND (India) — namesake verified. Editions with data: 2020/2022"
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   },
   "Shanghai": {
    "value": 223.0,
    "year": "2016",
    "source": "IWA ISWS 2016 edition — 'Shanghai'",
    "note": "IWA country group CHN (China) — namesake verified. STALE: newest appearance is the 2016 edition (decade-old vintage). Editions with data: 2014/2016"
   },
   "Beijing": {
    "value": 100.0,
    "year": "2016",
    "source": "IWA ISWS 2016 edition — 'Beijing'",
    "note": "IWA country group CHN (China) — namesake verified. STALE: newest appearance is the 2016 edition (decade-old vintage). Editions with data: 2014/2016"
   },
   "Shenzhen": {
    "value": 292.0,
    "year": "2016",
    "source": "IWA ISWS 2016 edition — 'Shenzhen'",
    "note": "IWA country group CHN (China) — namesake verified. STALE: newest appearance is the 2016 edition (decade-old vintage). Editions with data: 2014/2016"
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "not in any IWA edition"
   }
  }
 },
 "CMP-02": {
  "source": "OECD Metropolitan/FUA database — Economy (DSD_FUA_ECO@DF_ECONOMY v1.1), MEASURE=LAB_PROD, USD per worker PPP",
  "url": "https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_FUA_ECO@DF_ECONOMY,1.1/.A.LAB_PROD..?format=csvfilewithlabels",
  "license": "CC BY 4.0 (OECD)",
  "edition": "latest year per FUA (2021-2023), pulled 2026-07-17",
  "retrieved": "2026-07-17",
  "method": "Latest-year labour productivity per FUA, FUA names verified against the OECD codelist (London UK001F not London ON; LA USA02F not Los Angeles CL). Non-covered cities are explained blanks.",
  "perCity": {
   "Singapore": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Tokyo": {
    "value": 88996.0,
    "year": "2021",
    "source": "OECD Metropolitan/FUA database — JPN01F Tokyo",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP; single-year series (2021 only)"
   },
   "Copenhagen": {
    "value": 145510.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — DK001F København",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Zurich": {
    "value": 124657.0,
    "year": "2021",
    "source": "OECD Metropolitan/FUA database — CH002F Zürich",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Vienna": {
    "value": 126851.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — AT001F Wien",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Seoul": {
    "value": 92111.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — KOR01F Seoul",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Melbourne": {
    "value": null,
    "year": "n/a",
    "note": "FUA has no GDP series (AUS/CAN/ISR)"
   },
   "Amsterdam": {
    "value": 136917.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — NL001F Amsterdam",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "London": {
    "value": 142615.0,
    "year": "2021",
    "source": "OECD Metropolitan/FUA database — UK001F London",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "New York": {
    "value": 188044.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — USA01F New York (Greater)",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Paris": {
    "value": 159930.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — FR001F Paris",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Toronto": {
    "value": null,
    "year": "n/a",
    "note": "FUA has no GDP series (AUS/CAN/ISR)"
   },
   "Berlin": {
    "value": 108606.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — DE001F Berlin",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Barcelona": {
    "value": 106109.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — ES002F Barcelona",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Dubai": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "San Francisco": {
    "value": 276597.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — USA05F San Francisco (Greater)",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Stockholm": {
    "value": 141198.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — SE001F Stockholm",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Oslo": {
    "value": 112828.0,
    "year": "2021",
    "source": "OECD Metropolitan/FUA database — NO001F Oslo",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Helsinki": {
    "value": 116570.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — FI001F Helsinki/Helsingfors",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Madrid": {
    "value": 110651.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — ES001F Madrid",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Milan": {
    "value": 148811.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — IT002F Milano",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Rome": {
    "value": 130468.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — IT001F Roma",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Munich": {
    "value": 151118.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — DE003F München",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Frankfurt": {
    "value": 132741.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — DE005F Frankfurt am Main",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Hamburg": {
    "value": 132626.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — DE002F Hamburg",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Brussels": {
    "value": 166099.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — BE001F Bruxelles/Brussel/Leuven",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Dublin": {
    "value": 256297.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — IE001F Dublin",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Lisbon": {
    "value": 92934.0,
    "year": "2021",
    "source": "OECD Metropolitan/FUA database — PT001F Lisboa",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Prague": {
    "value": 128349.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — CZ001F Praha",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Warsaw": {
    "value": 139824.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — PL001F Warszawa",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Istanbul": {
    "value": null,
    "year": "n/a",
    "note": "Istanbul: GDP without place-of-work employment — LAB_PROD not published"
   },
   "Montreal": {
    "value": null,
    "year": "n/a",
    "note": "FUA has no GDP series (AUS/CAN/ISR)"
   },
   "Vancouver": {
    "value": null,
    "year": "n/a",
    "note": "FUA has no GDP series (AUS/CAN/ISR)"
   },
   "Chicago": {
    "value": 151167.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — USA03F Chicago",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Boston": {
    "value": 189747.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — USA11F Boston",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Los Angeles": {
    "value": 147690.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — USA02F Los Angeles (Greater)",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Seattle": {
    "value": 206967.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — USA14F Seattle",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Washington DC": {
    "value": 160101.0,
    "year": "2023",
    "source": "OECD Metropolitan/FUA database — USA04F Washington (Greater)",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Sydney": {
    "value": null,
    "year": "n/a",
    "note": "FUA has no GDP series (AUS/CAN/ISR)"
   },
   "Auckland": {
    "value": 101779.0,
    "year": "2022",
    "source": "OECD Metropolitan/FUA database — NZL01F Auckland",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP"
   },
   "Osaka": {
    "value": 76746.0,
    "year": "2021",
    "source": "OECD Metropolitan/FUA database — JPN02F Osaka",
    "note": "OECD DSD_FUA_ECO@DF_ECONOMY LAB_PROD, USD per worker PPP; single-year series (2021 only)"
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "FUA has no GDP series (AUS/CAN/ISR)"
   },
   "Hong Kong": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Kuala Lumpur": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Mumbai": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Shanghai": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA productivity series — non-OECD"
   }
  }
 },
 "CMP-05": {
  "source": "OECD Metropolitan/FUA database — Labour market (DSD_FUA_LAB@DF_LABOUR v1.1), MEASURE=EMP (place of residence)",
  "url": "https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_FUA_LAB@DF_LABOUR,1.1/.A.EMP...?format=csvfilewithlabels",
  "license": "CC BY 4.0 (OECD)",
  "edition": "latest 5-year window per FUA (ending 2018-2024), pulled 2026-07-17",
  "retrieved": "2026-07-17",
  "method": "(EMP_t / EMP_t-5 - 1) x 100, exact arithmetic on two published levels; both levels and both years recorded per value. Age band Y15T64 except the 7 US FUAs (Y_GE15, the only published band). Place-of-work series never substituted.",
  "perCity": {
   "Singapore": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Tokyo": {
    "value": 4.0,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — JPN01F Tokyo",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 17733670 -> 18443730"
   },
   "Copenhagen": {
    "value": 9.8,
    "year": "2013..2018",
    "source": "OECD Metropolitan/FUA database — DK001F København",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64; series ends 2018 Levels: 934125 -> 1025206"
   },
   "Zurich": {
    "value": 3.6,
    "year": "2017..2022",
    "source": "OECD Metropolitan/FUA database — CH002F Zürich",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64; series ends 2022 Levels: 807549 -> 836846"
   },
   "Vienna": {
    "value": 5.4,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — AT001F Wien",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1373569 -> 1448230"
   },
   "Seoul": {
    "value": 3.9,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — KOR01F Seoul",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 11818475 -> 12277303"
   },
   "Melbourne": {
    "value": 6.8,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — AUS02F Greater Melbourne",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 2459370 -> 2625670"
   },
   "Amsterdam": {
    "value": 9.8,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — NL001F Amsterdam",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1444765 -> 1586775"
   },
   "London": {
    "value": null,
    "year": "n/a",
    "note": "absent from OECD FUA labour table (place-of-residence EMP not published); economy-table place-of-work series deliberately not substituted"
   },
   "New York": {
    "value": 0.5,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — USA01F New York (Greater)",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y_GE15 (15+; 15-64 band not published for US FUAs) Levels: 9857116 -> 9903378"
   },
   "Paris": {
    "value": 4.3,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — FR001F Paris",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 5721320 -> 5965171"
   },
   "Toronto": {
    "value": 9.2,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — CAN01F Toronto",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 3621786 -> 3954944"
   },
   "Berlin": {
    "value": 3.9,
    "year": "2016..2021",
    "source": "OECD Metropolitan/FUA database — DE001F Berlin",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64; series ends 2021 Levels: 2317508 -> 2407404"
   },
   "Barcelona": {
    "value": 11.3,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — ES002F Barcelona",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 2269341 -> 2525747"
   },
   "Dubai": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "San Francisco": {
    "value": -2.1,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — USA05F San Francisco (Greater)",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y_GE15 (15+; 15-64 band not published for US FUAs) Levels: 3533025 -> 3457795"
   },
   "Stockholm": {
    "value": 2.2,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — SE001F Stockholm",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1226375 -> 1252769"
   },
   "Oslo": {
    "value": 8.0,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — NO001F Oslo",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 804258 -> 868200"
   },
   "Helsinki": {
    "value": 3.0,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — FI001F Helsinki/Helsingfors",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 734692 -> 756792"
   },
   "Madrid": {
    "value": 10.6,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — ES001F Madrid",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 3147609 -> 3481840"
   },
   "Milan": {
    "value": 2.2,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — IT002F Milano",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 2190883 -> 2240167"
   },
   "Rome": {
    "value": 1.4,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — IT001F Roma",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1772832 -> 1798498"
   },
   "Munich": {
    "value": 1.3,
    "year": "2016..2021",
    "source": "OECD Metropolitan/FUA database — DE003F München",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64; series ends 2021 Levels: 1536096 -> 1556134"
   },
   "Frankfurt": {
    "value": -0.2,
    "year": "2016..2021",
    "source": "OECD Metropolitan/FUA database — DE005F Frankfurt am Main",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64; series ends 2021 Levels: 1273878 -> 1271068"
   },
   "Hamburg": {
    "value": 3.1,
    "year": "2016..2021",
    "source": "OECD Metropolitan/FUA database — DE002F Hamburg",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64; series ends 2021 Levels: 1653952 -> 1704514"
   },
   "Brussels": {
    "value": null,
    "year": "n/a",
    "note": "absent from OECD FUA labour table (place-of-residence EMP not published); economy-table place-of-work series deliberately not substituted"
   },
   "Dublin": {
    "value": 15.6,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — IE001F Dublin",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1023070 -> 1182736"
   },
   "Lisbon": {
    "value": 2.7,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — PT001F Lisboa",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1320844 -> 1357119"
   },
   "Prague": {
    "value": 0.3,
    "year": "2017..2022",
    "source": "OECD Metropolitan/FUA database — CZ001F Praha",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64; series ends 2022 Levels: 1114213 -> 1117860"
   },
   "Warsaw": {
    "value": 5.1,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — PL001F Warszawa",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1659622 -> 1743501"
   },
   "Istanbul": {
    "value": 14.6,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — TR012F Istanbul",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 5090189 -> 5832897"
   },
   "Montreal": {
    "value": 4.3,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — CAN02F Montreal",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 2176906 -> 2270964"
   },
   "Vancouver": {
    "value": 8.6,
    "year": "2019..2024",
    "source": "OECD Metropolitan/FUA database — CAN03F Vancouver",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 1342126 -> 1457448"
   },
   "Chicago": {
    "value": -0.9,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — USA03F Chicago",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y_GE15 (15+; 15-64 band not published for US FUAs) Levels: 4752023 -> 4711429"
   },
   "Boston": {
    "value": -0.9,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — USA11F Boston",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y_GE15 (15+; 15-64 band not published for US FUAs) Levels: 2417583 -> 2394710"
   },
   "Los Angeles": {
    "value": -0.5,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — USA02F Los Angeles (Greater)",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y_GE15 (15+; 15-64 band not published for US FUAs) Levels: 8408131 -> 8364810"
   },
   "Seattle": {
    "value": 6.7,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — USA14F Seattle",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y_GE15 (15+; 15-64 band not published for US FUAs) Levels: 2042197 -> 2179394"
   },
   "Washington DC": {
    "value": 1.4,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — USA04F Washington (Greater)",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y_GE15 (15+; 15-64 band not published for US FUAs) Levels: 4809569 -> 4877070"
   },
   "Sydney": {
    "value": 5.1,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — AUS01F Greater Sydney",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 2599170 -> 2731330"
   },
   "Auckland": {
    "value": 9.3,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — NZL01F Auckland",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 826053 -> 903241"
   },
   "Osaka": {
    "value": 1.7,
    "year": "2018..2023",
    "source": "OECD Metropolitan/FUA database — JPN02F Osaka",
    "note": "OECD DSD_FUA_LAB@DF_LABOUR EMP (place of residence), age Y15T64 Levels: 7457250 -> 7587650"
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "labour series starts 2020 — no 5-year window"
   },
   "Hong Kong": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Kuala Lumpur": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Mumbai": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Shanghai": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "no OECD FUA labour series — non-OECD"
   }
  }
 },
 "TAL-03": {
  "source": "Eurostat — employment in technology and knowledge-intensive sectors, NUTS2 (htec_emp_reg2, NACE=KIS, % of employment)",
  "url": "https://ec.europa.eu/eurostat/api/dissemination/sdmx/2.1/data/htec_emp_reg2/A.KIS.PC_EMP.T.?format=SDMX-CSV",
  "license": "CC BY 4.0 (Eurostat reuse policy)",
  "edition": "latest year per region (2025 except London 2019), dataset updated 2026-06-30",
  "retrieved": "2026-07-17",
  "method": "Each European city mapped to its NUTS2 region (code+name recorded per value); latest year per region. Non-European cities are explained blanks (no harmonized source exists beyond Europe).",
  "perCity": {
   "Singapore": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Tokyo": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Copenhagen": {
    "value": 58.7,
    "year": "2025",
    "source": "Eurostat — DK01 Hovedstaden",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Zurich": {
    "value": 57.1,
    "year": "2025",
    "source": "Eurostat — CH04 Zürich",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Vienna": {
    "value": 52.5,
    "year": "2025",
    "source": "Eurostat — AT13 Wien",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Seoul": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Melbourne": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Amsterdam": {
    "value": 58.4,
    "year": "2025",
    "source": "Eurostat — NL32 Noord-Holland",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "London": {
    "value": 61.2,
    "year": "2019",
    "source": "Eurostat — UKI London (Greater London, NUTS1 aggregate)",
    "note": "Eurostat htec_emp_reg2, KIS % of employment; UK series frozen at 2019 (post-Brexit); UKI is the NUTS1 Greater London aggregate published in the NUTS2 table"
   },
   "New York": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Paris": {
    "value": 53.8,
    "year": "2025",
    "source": "Eurostat — FR10 Ile-de-France",
    "note": "Eurostat htec_emp_reg2, KIS % of employment; Eurostat flag 'd' (definition differs)"
   },
   "Toronto": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Berlin": {
    "value": 56.0,
    "year": "2025",
    "source": "Eurostat — DE30 Berlin",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Barcelona": {
    "value": 38.0,
    "year": "2025",
    "source": "Eurostat — ES51 Cataluña",
    "note": "Eurostat htec_emp_reg2, KIS % of employment; Eurostat flag 'd' (definition differs)"
   },
   "Dubai": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "San Francisco": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Stockholm": {
    "value": 64.3,
    "year": "2025",
    "source": "Eurostat — SE11 Stockholm",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Oslo": {
    "value": 56.4,
    "year": "2025",
    "source": "Eurostat — NO08 Oslo og Viken",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Helsinki": {
    "value": 52.6,
    "year": "2025",
    "source": "Eurostat — FI1B Helsinki-Uusimaa",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Madrid": {
    "value": 45.7,
    "year": "2025",
    "source": "Eurostat — ES30 Comunidad de Madrid",
    "note": "Eurostat htec_emp_reg2, KIS % of employment; Eurostat flag 'd' (definition differs)"
   },
   "Milan": {
    "value": 34.4,
    "year": "2025",
    "source": "Eurostat — ITC4 Lombardia",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Rome": {
    "value": 43.9,
    "year": "2025",
    "source": "Eurostat — ITI4 Lazio",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Munich": {
    "value": 46.4,
    "year": "2025",
    "source": "Eurostat — DE21 Oberbayern",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Frankfurt": {
    "value": 48.8,
    "year": "2025",
    "source": "Eurostat — DE71 Darmstadt",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Hamburg": {
    "value": 50.5,
    "year": "2025",
    "source": "Eurostat — DE60 Hamburg",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Brussels": {
    "value": 52.1,
    "year": "2025",
    "source": "Eurostat — BE10 Région de Bruxelles-Capitale/Brussels Hoofdstedelijk Gewest",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Dublin": {
    "value": 55.6,
    "year": "2025",
    "source": "Eurostat — IE06 Eastern and Midland",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Lisbon": {
    "value": 48.6,
    "year": "2025",
    "source": "Eurostat — PT1A Grande Lisboa",
    "note": "Eurostat htec_emp_reg2, KIS % of employment; PT1A Grande Lisboa is the NUTS2024 successor region (2019-2025); predecessor PT17 Área Metropolitana de Lisboa frozen at 2018 (47.2)"
   },
   "Prague": {
    "value": 57.8,
    "year": "2025",
    "source": "Eurostat — CZ01 Praha",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Warsaw": {
    "value": 55.2,
    "year": "2025",
    "source": "Eurostat — PL91 Warszawski stołeczny",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Istanbul": {
    "value": 31.2,
    "year": "2025",
    "source": "Eurostat — TR10 İstanbul",
    "note": "Eurostat htec_emp_reg2, KIS % of employment"
   },
   "Montreal": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Vancouver": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Chicago": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Boston": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Los Angeles": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Seattle": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Washington DC": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Sydney": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Auckland": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Osaka": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Tel Aviv": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Hong Kong": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Taipei": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Bangkok": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Kuala Lumpur": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Jakarta": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Manila": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Ho Chi Minh City": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Mumbai": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Abu Dhabi": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Shanghai": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Beijing": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Shenzhen": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   },
   "Delhi": {
    "value": null,
    "year": "n/a",
    "note": "Eurostat NUTS2 series is Europe-only"
   }
  }
 },
 "LIV-08": {
  "source": "Wikidata (live): distinct items instance-of museum (P31/P279* Q33506) located in the city (P131* chain to the city item), per 100k of the city item's own population claim (P1082)",
  "url": "https://query.wikidata.org/sparql (forced-join-order query; all per-city results and population responses archived in session evidence)",
  "license": "Wikidata content CC0",
  "edition": "live database, 2026-07-17 (counts are not stable over time)",
  "retrieved": "2026-07-17",
  "method": "One uniform rule applied identically to all 55 cities (QIDs label-verified; one mapping error caught — an early Abu Dhabi QID resolved to Jerusalem). Exact arithmetic; no smoothing of the artifacts — they are the point. The five feasibility spot-counts reproduced exactly.",
  "perCity": {
   "Singapore": {
    "value": 0.6,
    "year": "2026 (live db)",
    "source": "Wikidata Q334: 38 museums / 5,866,139 population",
    "note": "BIAS DEMO. city-state: QID is the country item (no separate city item); pop as of 2021-07-00"
   },
   "Tokyo": {
    "value": 2.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q1490: 383 museums / 14,264,798 population",
    "note": "BIAS DEMO. Q1490 = Tokyo Metropolis (no city item since 1943); count spans 23 special wards + Tama + islands; pop as of 2022-00-00"
   },
   "Copenhagen": {
    "value": 0.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q1748: 0 museums / 667,099 population",
    "note": "BIAS DEMO. LINKAGE ARTIFACT: 0-count because museums P131-link to Copenhagen Municipality Q504125, not city item Q1748; pop as of 2025-01-01"
   },
   "Zurich": {
    "value": 15.9,
    "year": "2026 (live db)",
    "source": "Wikidata Q72: 72 museums / 452,421 population",
    "note": "BIAS DEMO. pop as of 2025-12-31"
   },
   "Vienna": {
    "value": 8.9,
    "year": "2026 (live db)",
    "source": "Wikidata Q1741: 181 museums / 2,028,289 population",
    "note": "BIAS DEMO. pop as of 2025-01-01"
   },
   "Seoul": {
    "value": 1.1,
    "year": "2026 (live db)",
    "source": "Wikidata Q8684: 109 museums / 9,668,465 population",
    "note": "BIAS DEMO. pop as of 2020-00-00"
   },
   "Melbourne": {
    "value": 0.3,
    "year": "2026 (live db)",
    "source": "Wikidata Q3141: 15 museums / 5,350,705 population",
    "note": "BIAS DEMO. PARTIAL LINKAGE ARTIFACT: Q3141 is not an admin unit; most museums link to LGAs chaining to Victoria; pop as of 2024-06-30"
   },
   "Amsterdam": {
    "value": 0.1,
    "year": "2026 (live db)",
    "source": "Wikidata Q727: 1 museums / 921,468 population",
    "note": "BIAS DEMO. SEVERE LINKAGE ARTIFACT: Dutch museums (e.g. Rijksmuseum) P131-link to a separate municipality item Q9899 'Amsterdam', not city item Q727 — count of 1 measures graph structure, not museums; pop as of 2023-01-00"
   },
   "London": {
    "value": 0.1,
    "year": "2026 (live db)",
    "source": "Wikidata Q84: 8 museums / 8,799,728 population",
    "note": "BIAS DEMO. SEVERE LINKAGE ARTIFACT: boroughs' P131 chains terminate at Greater London Q23306, not Q84 (e.g. British Museum -> Camden -> Greater London), so only 8 directly-linked items counted; pop as of 2021-00-00"
   },
   "New York": {
    "value": 2.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q60: 178 museums / 8,804,190 population",
    "note": "BIAS DEMO. pop as of 2020-04-01"
   },
   "Paris": {
    "value": 11.2,
    "year": "2026 (live db)",
    "source": "Wikidata Q90: 235 museums / 2,103,778 population",
    "note": "BIAS DEMO. bias anchor: 235 counted vs ~130 official museums (~1.8x overcount from high editing activity); pop as of 2023-01-01"
   },
   "Toronto": {
    "value": 1.4,
    "year": "2026 (live db)",
    "source": "Wikidata Q172: 40 museums / 2,794,356 population",
    "note": "BIAS DEMO. pop as of 2021-00-00"
   },
   "Berlin": {
    "value": 6.2,
    "year": "2026 (live db)",
    "source": "Wikidata Q64: 235 museums / 3,782,202 population",
    "note": "BIAS DEMO. pop as of 2023-12-31"
   },
   "Barcelona": {
    "value": 5.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q1492: 98 museums / 1,731,649 population",
    "note": "BIAS DEMO. pop as of 2025-01-01"
   },
   "Dubai": {
    "value": 0.4,
    "year": "2026 (live db)",
    "source": "Wikidata Q612: 14 museums / 3,944,751 population",
    "note": "BIAS DEMO. pop as of 2025-00-00"
   },
   "San Francisco": {
    "value": 6.5,
    "year": "2026 (live db)",
    "source": "Wikidata Q62: 57 museums / 873,965 population",
    "note": "BIAS DEMO. pop as of 2020-04-01"
   },
   "Stockholm": {
    "value": 0.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q1754: 7 museums / 984,748 population",
    "note": "BIAS DEMO. pop as of 2022-12-31"
   },
   "Oslo": {
    "value": 0.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q585: 5 museums / 717,710 population",
    "note": "BIAS DEMO. pop as of 2024-01-01"
   },
   "Helsinki": {
    "value": 12.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q1757: 88 museums / 694,392 population",
    "note": "BIAS DEMO. pop as of 2025-12-31"
   },
   "Madrid": {
    "value": 3.2,
    "year": "2026 (live db)",
    "source": "Wikidata Q2807: 113 museums / 3,506,730 population",
    "note": "BIAS DEMO. pop as of 2025-01-01"
   },
   "Milan": {
    "value": 9.2,
    "year": "2026 (live db)",
    "source": "Wikidata Q490: 125 museums / 1,354,196 population",
    "note": "BIAS DEMO. pop as of 2023-01-01"
   },
   "Rome": {
    "value": 8.3,
    "year": "2026 (live db)",
    "source": "Wikidata Q220: 227 museums / 2,748,109 population",
    "note": "BIAS DEMO. pop as of 2023-01-01"
   },
   "Munich": {
    "value": 4.8,
    "year": "2026 (live db)",
    "source": "Wikidata Q1726: 73 museums / 1,510,378 population",
    "note": "BIAS DEMO. pop as of 2023-12-31"
   },
   "Frankfurt": {
    "value": 8.1,
    "year": "2026 (live db)",
    "source": "Wikidata Q1794: 63 museums / 775,790 population",
    "note": "BIAS DEMO. pop as of 2023-12-31"
   },
   "Hamburg": {
    "value": 6.2,
    "year": "2026 (live db)",
    "source": "Wikidata Q1055: 118 museums / 1,910,160 population",
    "note": "BIAS DEMO. pop as of 2023-12-31"
   },
   "Brussels": {
    "value": 10.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q240: 126 museums / 1,255,795 population",
    "note": "BIAS DEMO. chose Brussels-Capital Region Q240 (commonly-understood city, 19 communes, pop 1.26M) over City of Brussels municipality Q239 (pop ~0.19M); pop as of 2025-01-01"
   },
   "Dublin": {
    "value": 5.1,
    "year": "2026 (live db)",
    "source": "Wikidata Q1761: 30 museums / 592,713 population",
    "note": "BIAS DEMO. pop as of 2022-04-03"
   },
   "Lisbon": {
    "value": 14.3,
    "year": "2026 (live db)",
    "source": "Wikidata Q597: 78 museums / 545,796 population",
    "note": "BIAS DEMO. pop as of 2021-00-00"
   },
   "Prague": {
    "value": 7.9,
    "year": "2026 (live db)",
    "source": "Wikidata Q1085: 110 museums / 1,397,880 population",
    "note": "BIAS DEMO. pop as of 2025-01-01"
   },
   "Warsaw": {
    "value": 6.6,
    "year": "2026 (live db)",
    "source": "Wikidata Q270: 123 museums / 1,862,402 population",
    "note": "BIAS DEMO. pop P585 recorded in Wikidata as 2024-06-31 (nonexistent date), kept as-is; pop as of 2024-06-31"
   },
   "Istanbul": {
    "value": 0.4,
    "year": "2026 (live db)",
    "source": "Wikidata Q406: 67 museums / 15,655,924 population",
    "note": "BIAS DEMO. pop as of 2023-00-00"
   },
   "Montreal": {
    "value": 2.3,
    "year": "2026 (live db)",
    "source": "Wikidata Q340: 44 museums / 1,895,211 population",
    "note": "BIAS DEMO. pop as of 2024-00-00"
   },
   "Vancouver": {
    "value": 2.9,
    "year": "2026 (live db)",
    "source": "Wikidata Q24639: 19 museums / 662,248 population",
    "note": "BIAS DEMO. pop as of 2021-00-00"
   },
   "Chicago": {
    "value": 1.6,
    "year": "2026 (live db)",
    "source": "Wikidata Q1297: 44 museums / 2,746,388 population",
    "note": "BIAS DEMO. implausibly low vs reality (44) — editing-activity artifact noted in feasibility test; pop as of 2020-04-01"
   },
   "Boston": {
    "value": 3.4,
    "year": "2026 (live db)",
    "source": "Wikidata Q100: 23 museums / 675,647 population",
    "note": "BIAS DEMO. pop as of 2020-04-01"
   },
   "Los Angeles": {
    "value": 1.8,
    "year": "2026 (live db)",
    "source": "Wikidata Q65: 71 museums / 3,898,747 population",
    "note": "BIAS DEMO. pop as of 2020-04-01"
   },
   "Seattle": {
    "value": 2.8,
    "year": "2026 (live db)",
    "source": "Wikidata Q5083: 21 museums / 737,015 population",
    "note": "BIAS DEMO. pop as of 2020-04-01"
   },
   "Washington DC": {
    "value": 14.8,
    "year": "2026 (live db)",
    "source": "Wikidata Q61: 102 museums / 689,545 population",
    "note": "BIAS DEMO. Q61 Washington, D.C.; pop as of 2020-04-01"
   },
   "Sydney": {
    "value": 0.1,
    "year": "2026 (live db)",
    "source": "Wikidata Q3130: 3 museums / 5,450,496 population",
    "note": "BIAS DEMO. LINKAGE ARTIFACT: Q3130 is not an admin unit; museums link to LGAs chaining to NSW — count of 3 is an artifact; pop as of 2023-06-30"
   },
   "Auckland": {
    "value": 0.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q37100: 0 museums / 1,470,100 population",
    "note": "BIAS DEMO. LINKAGE ARTIFACT: 0-count because museums P131-link to Auckland Region Q726917, not city item Q37100; pop as of 2020-06-30"
   },
   "Osaka": {
    "value": 1.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q35765: 46 museums / 2,751,862 population",
    "note": "BIAS DEMO. Q35765 Osaka City (not prefecture Q122723); pop as of 2021-03-01"
   },
   "Tel Aviv": {
    "value": 15.6,
    "year": "2026 (live db)",
    "source": "Wikidata Q33935: 73 museums / 467,875 population",
    "note": "BIAS DEMO. pop as of 2021-00-00"
   },
   "Hong Kong": {
    "value": 0.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q8646: 50 museums / 7,413,070 population",
    "note": "BIAS DEMO. Q8646 SAR item (city = territory); pop as of 2021-00-00"
   },
   "Taipei": {
    "value": 4.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q1867: 96 museums / 2,429,429 population",
    "note": "BIAS DEMO. pop claim dated 2026-04; pop as of 2026-04-00"
   },
   "Bangkok": {
    "value": 1.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q1861: 54 museums / 5,676,648 population",
    "note": "BIAS DEMO. pop claim dated 2018-12-31 (registered population); pop as of 2018-12-31"
   },
   "Kuala Lumpur": {
    "value": 0.3,
    "year": "2026 (live db)",
    "source": "Wikidata Q1865: 30 museums / 9,000,280 population",
    "note": "BIAS DEMO. item's preferred pop claim 9,000,280 (2025 estimate) is Greater-KL-scale (2020 census city proper: 1,982,100); used per uniform rule — inflates denominator; pop as of 2025-00-00"
   },
   "Jakarta": {
    "value": 0.7,
    "year": "2026 (live db)",
    "source": "Wikidata Q3630: 76 museums / 11,135,191 population",
    "note": "BIAS DEMO. pop as of 2024-06-30"
   },
   "Manila": {
    "value": 0.5,
    "year": "2026 (live db)",
    "source": "Wikidata Q1461: 10 museums / 1,902,590 population",
    "note": "BIAS DEMO. pop as of 2024-07-01"
   },
   "Ho Chi Minh City": {
    "value": 0.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q1854: 7 museums / 14,002,598 population",
    "note": "BIAS DEMO. 7/14.0M rounds to 0.0; item's pop claim (2024-12-31) is the expanded/merged-scale figure; pop as of 2024-12-31"
   },
   "Mumbai": {
    "value": 0.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q1156: 4 museums / 15,414,288 population",
    "note": "BIAS DEMO. 4/15.4M rounds to 0.0; pop claim dated 2018; pop as of 2018-00-00"
   },
   "Abu Dhabi": {
    "value": 0.2,
    "year": "2026 (live db)",
    "source": "Wikidata Q1519: 3 museums / 1,570,000 population",
    "note": "BIAS DEMO. pop as of 2023-00-00"
   },
   "Shanghai": {
    "value": 0.3,
    "year": "2026 (live db)",
    "source": "Wikidata Q8686: 65 museums / 24,870,895 population",
    "note": "BIAS DEMO. bias anchor: 65 counted vs 165-171 officially registered museums (~0.4x undercount); pop as of 2020-00-00"
   },
   "Beijing": {
    "value": 0.5,
    "year": "2026 (live db)",
    "source": "Wikidata Q956: 115 museums / 21,893,095 population",
    "note": "BIAS DEMO. pop as of 2020-00-00"
   },
   "Shenzhen": {
    "value": 0.1,
    "year": "2026 (live db)",
    "source": "Wikidata Q15174: 21 museums / 17,494,398 population",
    "note": "BIAS DEMO. pop as of 2020-00-00"
   },
   "Delhi": {
    "value": 0.0,
    "year": "2026 (live db)",
    "source": "Wikidata Q1353: 9 museums / 26,495,000 population",
    "note": "BIAS DEMO. Q1353 NCT of Delhi (not New Delhi Q987); item's pop claim 26,495,000 (2016) is an agglomeration-scale figure, not a city-proper census; pop as of 2016-00-00"
   }
  }
 }
}
};
