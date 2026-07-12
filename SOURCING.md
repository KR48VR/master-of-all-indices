# SOURCING.md — Stage 1 sourcing plan for the 19 pilot measures

Prepared 2026-07-11. **Plan only — no data has been changed.** Each entry answers one
question: can this measure be filled quickly and free from a public source, or does it
need manual/paid digging?

**How this was researched.** One research agent per measure hunted for sources, then an
independent adversarial agent tried to refute every claim (dead links, paywalls, wrong
geography, wrong columns). Where a file could be reached, it was downloaded and its
actual sheets/columns inspected. Important honesty note: this sandbox's egress proxy
blocks almost every host except GitHub and AWS S3, so many URLs could not be fetched
directly. "Verified" below means one of: (a) file downloaded and inspected this session
(via a byte-identical mirror where needed), or (b) URL + content corroborated through
multiple independent live search-index results and production code that uses it. URLs
that are only search-corroborated are marked *(link not directly fetched)*.

## Scoreboard

| # | ID | Measure | Verdict | Recommended source | Data year |
|---|----|---------|---------|--------------------|-----------|
| 1 | LIV-01 | Homicide rate | 🔴 Manual | UNODC (country only) + per-city police stats | 2021–2024 |
| 2 | LIV-04 | Life expectancy | 🟡 Quick, 2 gaps | OECD Regions (SDMX) | ~2022–23 |
| 3 | LIV-05 | Physicians per capita | 🟡 Quick, 2 gaps | OECD Regional health (SDMX) | 2021–2023 |
| 4 | LIV-06 | House-price-to-income | ✅ Quick & free* | Numbeo Property Prices Index | 2026 mid-yr |
| 5 | GRN-01 | PM2.5 | ✅ Quick & free* | WHO Ambient Air Quality DB v8.0 | 2019–2024 |
| 6 | GRN-02 | Green space access | 🟡 Quick, 3 gaps + definition change | UN-Habitat SDG 11.7.1 (HDX) | 2020 |
| 7 | GRN-05 | Waste recycled | 🔴 Manual | ~15 city/agency sources (CDP as accelerator) | mixed |
| 8 | SMT-01 | Broadband speed | ✅ Quick & free (fully verified) | Ookla Open Data (S3 parquet) | Q1 2026 |
| 9 | SMT-03 | E-government | 🟡 Quick, 3 structural gaps | UN E-Gov Survey 2024 LOSI | 2024 |
| 10 | SMT-05 | Population online | ✅ Quick & free | World Bank WDI (ITU series) | ~2024 |
| 11 | CMP-01 | GDP per capita | 🟡 Quick, 2 gaps | OECD Regional GDP (SDMX) | ~2023 |
| 12 | CMP-04 | Startup density | 🔴 Manual + flag changes | Dealroom city pages (browser) | live 2026 |
| 13 | CMP-06 | VC funding | 🟡 Browser copy, flag change | Dealroom GTEI 2026 dashboard | 2025 |
| 14 | TAL-01 | Tertiary attainment | 🟡 Quick, 2 gaps | OECD Regional education (SDMX) | 2020–2024 |
| 15 | TAL-02 | Top universities | 🔴 Semi-manual | QS 2026 CSV (verified) + manual city step | 2026 ed. |
| 16 | TAL-06 | International openness | 🔴 Manual stitch | OECD FUA foreign-born + 6 others | 2020–2024 |
| 17 | CON-01 | Airport connectivity | 🔴 Manual | FlightConnections (browser, ~26 pages) | snapshot |
| 18 | CON-03 | Transit access | 🟡 Quick, 1 gap + flag changes | ITDP Atlas (app CSV download) | 2025 |
| 19 | CON-05 | Traffic congestion | 🟡 Browser copy, 1 gap | TomTom Traffic Index 2026 | 2025 |

\* free but bot-blocked website — needs a human browser (details per measure).

**Tally: 4 quick & free · 9 quick with known gaps · 6 manual.** No measure requires a
paid source if the manual routes are acceptable.

## Cross-cutting facts (read first)

1. **The OECD trap is real and confirmed**: every OECD-based measure (LIV-04, LIV-05,
   CMP-01, TAL-01, TAL-06) is missing **Singapore and Dubai**. Singapore usually has an
   official national statistic (city-state, so country = city — flag stays honest with a
   caveat); Dubai often has nothing comparable → `null`.
2. **One flag set per measure.** The app's `dataLevel`/`approx` flags are per measure,
   not per city. Filling a gap from a different-quality source silently mislabels that
   value. Default recommendation throughout: **leave gaps `null`** unless noted.
3. **Seoul is the transport gap**: no open GTFS (CON-03) and not in TomTom/INRIX
   (CON-05). Both get `null` — no honest alternative exists.
4. **Melbourne, Barcelona, San Francisco** are structurally missing from UN
   most-populous-city datasets (SMT-03 LOSI, and the same three in GRN-02's city table)
   because Sydney/Madrid/New York represent their countries.
5. **Execution environment**: this sandbox can fetch GitHub and AWS S3 only. OECD,
   Eurostat, WHO, World Bank, UN, Numbeo, TomTom, Dealroom etc. are all blocked at the
   proxy. Stage 2 therefore splits into (A) what I can pull autonomously here,
   (B) one-page browser pastes I'd ask you for, (C) genuinely manual digging. See
   "Stage 2 execution plan" at the end.

---

## Liveable

### LIV-01 Homicide rate — 🔴 MANUAL (blueprint source no longer works at city level)

**Finding:** UNODC — the blueprint's primary source — **dropped its city-level homicide
series**. The current workbook (2026-05 release) was downloaded via a byte-identical,
md5-attested mirror and inspected directly: it has no city dimension at all. The legacy
UNODC city file covers only 2005–2012 "most populous city" data.

- **Quick option (country proxy):** `https://data.unodc.org/sites/dataportal.unodc.org/files/2026-05/data_cts_intentional_homicide.xlsx`
  (content verified via mirror; md5 `a8997bd607ffa1b4ce056a5b6eea3335`). Sheet
  `data_cts_intentional_homicide`, header on row 3. Filter: Indicator=`Victims of
  intentional homicide`, Dimension/Sex/Age=`Total`, Unit=`Rate per 100,000 population`,
  latest year per country (2023 for most; UAE 2022; UK only as `GBR_E_W` England & Wales,
  2021). **Cost: `dataLevel` must change City → Country proxy for 15 of 16 cities**
  (Singapore stays City — city-state).
- **Honest option (city level, manual):** per-city official statistics, all free:
  Eurostat `crim_hom_vcit` (largest EU cities — Vienna, Berlin, Copenhagen, Amsterdam,
  Paris; **not** Barcelona), StatCan table 35-10-0071-01 (Toronto CMA), FBI Crime Data
  Explorer (New York, San Francisco), ONS police-force tables (London), e-Stat/TMPD
  (Tokyo), KOSIS (Seoul), Crime Statistics Agency Victoria (Melbourne), Ministerio del
  Interior (Barcelona), Swiss FSO PKS (Zurich), Dubai Police open data (Dubai, "willful
  murder"). Toronto and Melbourne come as Metro; definitions vary more than the current
  caveat admits.

**Decision needed:** country proxy (fast, one file, honest flag downgrade) vs. manual
city route (slow, keeps City level, ~14 separate sources). My recommendation: do the
country-proxy pull first so the measure works, then upgrade city-by-city later.

### LIV-04 Life expectancy — 🟡 QUICK, missing Singapore & Dubai

- **Source:** OECD Regions, dataflow `OECD.CFE.EDS,DSD_REG_DEMO@DF_LIFE_EXP,2.0` *(link
  not directly fetched; URL pattern proven in Google Data Commons production code)*.
  CSV: `https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_DEMO@DF_LIFE_EXP,2.0/all?startPeriod=2018&format=csvfilewithlabels`
- **What to use:** filter `SEX=_T`, `AGE=Y0` (at birth — verifier correction: not `_T`),
  latest `TIME_PERIOD`, column `OBS_VALUE`. TL2 codes (two corrected by verification):
  AT13 Vienna, **DE3** Berlin, DK01 Copenhagen, CH04 Zurich, **FR1** Paris, UKI London,
  NL32 Amsterdam, ES51 Barcelona, KR01 Seoul, JPD Tokyo (Southern-Kanto), AU2 Melbourne,
  CA35 Toronto, US36 New York, US06 San Francisco. TL3 rows exist for Melbourne (AU2GM),
  Toronto (CA3520), Tokyo (JPD13) — prefer them if life-expectancy values are published there.
- **Gaps:** Singapore → SingStat Complete Life Tables (83.5 years, 2024 — verified);
  Dubai → UAE national, World Bank `SP.DYN.LE00.IN` (82.91, 2023).
- **Flag/caveat impact:** Melbourne/Toronto/New York/San Francisco values are
  state/province level (Victoria, Ontario, NY State, California) unless TL3 pans out —
  name them in the caveat.

### LIV-05 Physicians per capita — 🟡 QUICK, missing Singapore & Dubai

- **Source:** OECD regional health dataflow — pinned by the verifier as
  `OECD.CFE.EDS,DSD_REG_HEALTH@DF_HEALTH` ("Health statistics - Regions") *(link not
  directly fetched)*. Indicator "Physicians density per 1 000 inhabitants", TL2, latest
  year. Same region codes as LIV-04. Cross-check for EU: Eurostat `hlth_rs_physreg`
  (note: `hlth_rs_prs2` is national — a research-stage error the verifier caught).
- **Gaps:** Singapore → data.gov.sg dataset `d_5257cff1ee5e6a16db6a9606a983efa4`
  "Health Personnel (Per 10,000 Total Population)" — take Doctors ÷ 10 (verified to
  exist, updated Dec 2024). Dubai → DHA Annual Health Statistical Report PDF
  (dha.gov.ae/en/open-data; ~2.9/1,000, but the confirmable figure is ~2018 — may be
  better left `null` if nothing fresher is in the current report).
- **Risk:** London may be stale/absent in recent OECD vintages (UK regional health
  reporting post-Brexit); fallback NHS England workforce stats (manual).
- **Flag/caveat impact:** same four state-level cities as LIV-04.

### LIV-06 House-price-to-income — ✅ QUICK & FREE (browser paste)

- **Source:** Numbeo Property Prices Index 2026 Mid-Year,
  `https://www.numbeo.com/property-investment/rankings.jsp`, column **"Price To Income
  Ratio"**. Definition matches the blueprint (median apartment price / median familial
  disposable income). All 16 cities covered (Dubai and Singapore spot-confirmed).
- **Catch:** Numbeo 403-blocks all non-browser fetchers and its ToS prohibit scraping.
  **You open the one rankings page in your browser and paste the 16 rows** — that's the
  whole job. Cite as "Numbeo Property Prices Index, 2026 Mid-Year edition".
- **Flags:** unchanged (`crowd` already set — correct).

## Green

### GRN-01 PM2.5 — ✅ QUICK & FREE (one xlsx; recipe corrected by verification)

- **Source:** WHO Ambient Air Quality Database **V8.0** (June 2026; 8,024 settlements).
  Landing: `https://www.who.int/data/gho/data/themes/air-pollution/who-air-quality-database`
  — download the xlsx from that page in a browser (who.int is blocked from this sandbox;
  the V6.1 predecessor was verified end-to-end via a GitHub mirror).
- **What to use** (schema verified on V6.1; stable since 2022): the version-named data
  sheet (e.g. `Update 2026 (V8.0)` — **not** the first sheet, which is a Readme),
  columns `city`, `year`, `pm25_concentration`. City rows are `Name/ISO3` strings —
  exact matches needed: `Wien/AUT` (not Vienna), `Kobenhavn/DNK` for recent years
  (`Copenhagen/DNK` exists only for 2010), `Greater Amsterdam/NLD` for recent years,
  `Dubai/ARE` (present through 2021 — Dubai IS covered), US cities as CBSA names
  (`New York Newark Jersey City NY NJ PA/USA`, `San Francisco Oakland Hayward CA/USA`).
  Take max year per city and **record it per value** — years will range ~2019–2024.
- **Flags:** unchanged; caveat should note per-city year variance and metro-aggregate
  rows for the US cities and Amsterdam.

### GRN-02 Green space access — 🟡 QUICK but the definition must change

- **Finding:** no free global source measures the blueprint's exact "% within **300 m**
  of **green** space". What exists globally is SDG indicator 11.7.1: **% of population
  within 400 m walking distance of an open public space** (includes plazas, not only
  green). Keeping the 300 m definition = manual/Europe-only (EEA 2012, JRC rasters).
- **Source:** UN-Habitat "Open spaces and green areas" on HDX:
  `https://data.humdata.org/dataset/open-spaces-world` *(existence + structure confirmed
  via the dataset's public build pipeline on GitHub)*. City-level rows, reference year
  2020. The same file carries "green area share of city (%)" as an alternative metric.
- **Gaps:** Melbourne, Barcelona, San Francisco (most-populous-city sampling) → SEDAC
  SDGI 11.7.1 2023 release (DOI 10.7927/EAVC-4K45, 8,873 urban centres, free Earthdata
  login) very likely covers them.
- **Flag/caveat impact:** measure definition text and caveat must be rewritten (400 m,
  open public space, OSM + modelled population raster — "satellite-derived" is wrong for
  the access component). **Decision needed:** accept the 11.7.1 definition, switch to the
  "green area share of city %" column instead, or drop from pilot.

### GRN-05 Waste recycled — 🔴 MANUAL (blueprint source effectively dead)

- **Finding:** the WCCD/ISO-37120 portal is now a member-gated "Reporting Portal"; it
  never covered more than ~7 of our 16, with 2014–2019 vintages. No free single source
  has city recycling rates for this city set (OECD/Eurostat are country-level or lack
  the variable).
- **Accelerator:** CDP Full Cities datasets on `data.cdp.net` (Socrata; free anonymous
  CSV export, e.g. 2025 dataset `fjfh-2t9d`, 2023 `7hmg-eagz` — IDs verified) contain
  self-reported waste questions for some cities — worth one pass, but answers are
  optional/patchy.
- **Realistic route:** ~15 city/agency sources (Singapore NEA via data.gov.sg dataset
  `d_daf568968ab40dc81e7b08887a83c8fa` — verified; Tokyo TMG; Copenhagen/Danish EPA;
  Zurich ERZ; Vienna MA48; Seoul MoE; Melbourne Victoria; Amsterdam CBS/municipality;
  London DEFRA local-authority stats; NYC DSNY; Paris/Eurostat; Toronto city; Berlin
  Senate; Barcelona ARC; Dubai municipality; SF Recology/CalRecycle).
- **Caveat must be strengthened:** definitions are not comparable (recycling vs
  "diversion" incl. compost/waste-to-energy; household vs all municipal waste;
  Singapore's overall 52% vs domestic 11%). Flags stay City / self-reported.

## Smart

### SMT-01 Broadband speed — ✅ QUICK & FREE (fully machine-verified this session)

- **Source:** Ookla Open Data, public S3, no account:
  `https://ookla-open-data.s3.amazonaws.com/parquet/performance/type=fixed/year=2026/quarter=1/2026-01-01_performance_fixed_tiles.parquet`
  — **downloaded in full this session (348.9 MB, 6,312,198 rows) and aggregation run for
  all 16 cities** (e.g. Singapore: 1,574 tiles, 442k tests, 567 Mbps). License
  CC BY-NC-SA 4.0, attribute Ookla.
- **What to use:** filter tiles by city boundary (`tile_x`/`tile_y`), compute
  `SUM(avg_d_kbps × tests) / SUM(tests) / 1000` = test-weighted mean download Mbps.
- **Flag decision needed:** the tiles yield a test-weighted **mean**, not the median in
  the measure definition, over an analyst-chosen boundary → honest treatment is
  `approx: none → modelled` + caveat recording quarter and boundary choice. Alternative
  that keeps flags exactly as-is: you paste the median values from Ookla's
  speedtest.net/performance city pages in a browser (~20 min). I recommend the open-data
  route with the flag change — reproducible and dated.

### SMT-03 E-government — 🟡 QUICK; 3 structural gaps; flags IMPROVE

- **Source:** UN E-Government Survey 2024 **LOSI** (Local Online Service Index) — an
  objective 95-feature checklist of each country's most populous city's portal. Free:
  Technical Appendix PDF
  (`https://desapublications.un.org/sites/default/files/publications/2024-09/Technical%20Appendix%20(Web%20version)%201292024.pdf`)
  or per-city eGovKB pages (`.../egovkb/en-us/Data/City/id/78-Dubai/dataYear/2024` —
  pattern verified for Dubai and Amsterdam). *(links not directly fetched)*
- **What to use:** LOSI 2024 value (0–1) × 100. Published top-10 already confirms
  Copenhagen .95-ish, Dubai, New York, Berlin, Seoul, Singapore ranks.
- **Gaps (structural):** Melbourne (Sydney assessed), Barcelona (Madrid), San Francisco
  (New York) → **leave null**; do not substitute country EGDI (different construct).
- **Flag impact (positive):** `approx: perception → none` (checklist, not survey);
  caveat rewrite: "UN assesses each country's most populous city only; Melbourne,
  Barcelona, San Francisco not assessed."
- Survey is biennial — the 2026 edition lands late 2026; worth re-pulling then.

### SMT-05 Population online — ✅ QUICK & FREE (already flagged Country proxy — correct)

- **Source:** World Bank WDI `IT.NET.USER.ZS` (mirror of the blueprint's ITU series;
  CC BY 4.0, no key). One API call for all 15 countries:
  `https://api.worldbank.org/v2/country/SGP;JPN;DNK;CHE;AUT;KOR;AUS;NLD;GBR;USA;FRA;CAN;DEU;ESP;ARE/indicator/IT.NET.USER.ZS?format=json&mrnev=1&per_page=20`
  *(pattern verified against WB API docs; blocked from this sandbox — needs one browser
  fetch or open network)*. Bulk-CSV and ITU DataHub (indicator 11624) alternatives exist.
- **What to use:** `value` + `date` per country; **record each country's year** (survey
  years differ). Map countries → cities; USA feeds both New York and San Francisco.
- **Flags:** unchanged — blueprint already says Country proxy.

## Competitive

### CMP-01 GDP per capita — 🟡 QUICK, missing Singapore & Dubai

- **Source:** OECD regional GDP dataflow `OECD.CFE.EDS,DSD_REG_ECO@DF_GDP` v2.0, measure
  GDP, `PRICE_BASE=Q`, `UNIT_MEASURE=USD_PPP_PS` (USD PPP per person) *(codes observed in
  a live indexed explorer query; link not directly fetched)*. Route B: archived OECD
  "Metropolitan areas" dataset (`DF_CITIES`, frozen ~2019-20) if metro-level rows are
  missing from the current flow. Alternate mirror if OECD stays blocked: DBnomics
  `db.nomics.world/OECD/DSD_REG_ECO@DF_GDP`.
- **Gaps:** Singapore → national GDP pc PPP (IMF WEO or WDI `NY.GDP.PCAP.PP.CD`), flag
  Country proxy + "city-state coincides" caveat. Dubai → **recommend `null`** (only an
  AED non-PPP emirate figure exists; converting it ourselves = modelling).

### CMP-04 Startup density — 🔴 MANUAL + flags must change

- **Finding:** no free downloadable dataset of city startup counts exists anywhere.
  Startup Genome publishes only ranges (using a midpoint would violate rule 1).
  Dealroom shows real counts free on city pages / the GTEI 2026 dashboard, but there is
  no export and the site bot-blocks fetchers → **hand-copy ~16 values in a browser**.
- **Source:** `https://dealroom.co/cities/<slug>` ("VC-backed startups" count) or
  `https://tech-ecosystem-index.dealroom.co/` (Density Leaders lens). San Francisco
  exists only as **Bay Area**; Singapore lives under `/countries/singapore/`
  (both verified via search index). Record retrieval date — it's a live database.
- **Per-100k:** divide by ONE consistent metro-population source (UN World Urbanization
  Prospects) and record it.
- **Flag impact (required):** `dataLevel: City → Metro` (Dealroom units are metro
  "ecosystems"); `approx: none → modelled` (VC-backed companies tracked by Dealroom ≠
  census of startups; coverage varies by geography). **Decision needed:** accept flag
  changes, or drop from pilot.

### CMP-06 VC funding — 🟡 BROWSER COPY; dataLevel → Metro

- **Source:** Dealroom GTEI 2026 dashboard (`tech-ecosystem-index.dealroom.co`, free) —
  "VC investment" per hub in USD, one consistent window (2025 / last-12-months as
  labelled). Copenhagen city page verified showing the exact metric ($1.6B L12M).
  Toronto appears as **Toronto-Waterloo**, San Francisco as **Bay Area**.
- **Per capita:** divide by hub population (state the denominator source).
- **Fallbacks for stragglers:** PitchBook free rankings article (6-yr aggregate — cross-
  check only), national VC reports (Swiss VC Report, CVCA, MAGNiTT…).
- **Flag impact (required):** `dataLevel: City → Metro`; caveat: totals include
  Dealroom-estimated undisclosed rounds.

## Talent

### TAL-01 Tertiary attainment — 🟡 QUICK, missing Singapore & Dubai

- **Source:** OECD `OECD.CFE.EDS,DSD_REG_EDU@DF_ATTAIN` ("Educational attainment -
  Regions"), filter `EDUCATION_LEV=ISCED11_5T8`, `AGE=Y25T64`, `SEX=_T`, TL2, latest
  year *(landing page title verified verbatim via search index)*. Same region codes as
  LIV-04 (DE3, FR1). Years mix: EU ~2024, US ~2023 ACS, Canada/Australia 2021 census,
  Japan 2020 census — record per value.
- **Gaps:** Singapore → data.gov.sg `d_7317a32321dbfad2cbb5b60ca74c9f08` (verified;
  SingStat residents 25+, use their tertiary grouping, note definitional difference).
  Dubai → Dubai Statistics Center education theme (manual PDF; may end `null`).
- **Flag/caveat impact:** same four state-level cities; optional true-metro upgrade for
  New York/San Francisco via US Census ACS table S1501.

### TAL-02 Top universities — 🔴 SEMI-MANUAL (data verified; city step is manual)

- **Verified base:** QS World University Rankings 2026 full CSV via GitHub mirror —
  downloaded and inspected this session (1,501 rows; 502 top-500 incl. ties; md5-checked
  by the verifier; top-20 matches the published ranking):
  `https://raw.githubusercontent.com/CheekyRishi/2026-qs-world-university-eda/main/2026%20QS%20World%20University%20Rankings.csv`
- **The catch:** the file has **no city column** (only country), and every ranking site
  that shows city bot-blocks fetchers. So the city attribution is manual: use the City
  filter on topuniversities.com in a browser for each of the 16 cities (~16 lookups), or
  hand-verify the ~287 top-500 institutions in our 15 country labels.
- **Notable verified fact:** **Dubai = true 0** (all 6 UAE top-500 institutions are in
  Abu Dhabi/Sharjah/Al Ain/Ajman) — a real zero, not a null.
- **Flag/caveat impact:** flags hold ONLY if QS's own city attribution is the counting
  rule; caveat must note boundary sensitivity (Stanford/Berkeley fall outside
  San Francisco city-proper; Saclay cluster outside Paris). If you prefer metro
  counting, `dataLevel → Metro`. **Decision needed:** city-proper vs metro counting.

### TAL-06 International openness — 🔴 MANUAL STITCH (~7 sources; concept warning)

- **Best anchor (found by the verifier):** OECD `DSD_FUA_DEMO@DF_ORIGIN`
  "**Foreign-born** population - Cities and FUAs" v1.1 *(live-indexed; not fetchable
  this session; per-city row coverage unconfirmed — must be checked first)*, backed by
  `DF_CITIZENSHIP` from the OECD Municipal Migration Database.
- **Fill-ins:** Eurostat `urb_cpopcb` indicator `DE2009V` (foreign-born, city level) for
  EU cities; US Census ACS table B05012 — **foreign-born is `B05012_003E` ÷
  `B05012_001E`** (the researcher's original formula used _002E = native; corrected by
  verification) for New York & San Francisco metros; UN DESA International Migrant
  Stock 2024 for Singapore.
- **Concept warnings:** Tokyo and Seoul (and partly Germany) publish foreign
  **nationals**, not foreign-born → `approx` cannot stay `none` for all cities; Dubai
  has no foreign-born stat (DSC nationality split ≈90% non-Emirati is a different
  concept) → likely `null` or explicit proxy caveat. Years mix 2020–2024.

## Connected

### CON-01 Airport connectivity — 🔴 MANUAL (real source is paywalled)

- **Finding:** OAG (blueprint source) is enterprise-paid; GPCI's yearbook with this
  exact indicator costs JPY 16,500. OpenFlights data is frozen at 2014. No free dataset
  of "direct international destinations per city" exists.
- **Free manual route:** FlightConnections per-airport pages
  (`flightconnections.com/flights-from-<slug>-<iata>`) — header "flights scheduled to N
  destinations in M countries" (format + anchor figures verified via search index: LHR
  223, JFK 198, DXB 262, SIN 165). Transcribe by hand in a browser (~26 airport pages),
  take the **union** of international destinations across each city's airports
  (LHR+LGW+STN+LTN+LCY; JFK+EWR+LGA; HND+NRT; CDG+ORY; ICN+GMP; DXB+DWC; rest single),
  subtract domestic. Record retrieval date — it's a live schedule snapshot.
- **Caveat impact:** "well covered" → note unofficial aggregator, seasonal snapshot,
  airport-system definition per city. Fallback per airport: Wikipedia destination
  tables (then `approx → crowd` for that value — better to avoid mixing).

### CON-03 Transit access — 🟡 QUICK (one CSV), Seoul null, flags must change

- **Source:** ITDP Atlas of Sustainable City Transport (`atlas.itdp.org`) — indicator
  "People Near Frequent Transit": % of residents within 500 m of a stop with ≤10-min
  mean headway (07:00–21:00). The app's Download button serves one all-cities CSV,
  **`atlas_cities_pnft.csv`** (filename and columns `transit_pnft_YYYY`, through 2025,
  verified by reading the live app's source code on GitHub — there is no stable direct
  URL; one browser click needed).
- **Coverage:** 15 of 16 with active open GTFS. **Seoul: no open GTFS exists → null**
  (verified against the Mobility Database catalog). Two quality warnings from the
  pipeline check: Tokyo's value is computed from partial feeds (Toei+Metro only — biased
  low; consider `null`), Dubai's RTA feed is stale.
- **Flag impact (required):** `dataLevel: City → Metro` (GHSL agglomerations);
  `approx: none → modelled` (GIS-computed from GTFS + modelled population raster).

### CON-05 Traffic congestion — 🟡 BROWSER COPY, Seoul null

- **Source:** TomTom Traffic Index 2026 edition (published Jan 2026; full-year 2025
  data; 500 cities): `https://www.tomtom.com/traffic-index/ranking/` — "Congestion
  level (%)" column; sortable table, ~15 values in minutes in a browser (site is
  bot-blocked). Per-city pages: `/traffic-index/city/<slug>/` — US slugs carry state
  suffixes (`san-francisco-ca`, `new-york-ny`).
- **Coverage:** 15 of 16 (SF 49.7% and NY 48.4% already visible in press coverage).
  **Seoul is not covered** (INRIX also excludes Korea; Seoul TOPIS publishes speeds,
  not congestion % — converting would be modelling) → `null`.
- **Flags:** unchanged. Cite "TomTom Traffic Index 2026 edition (2025 data)".

---

## Flag changes requiring your sign-off (CLAUDE.md rule 2)

| Measure | Change | Why |
|---|---|---|
| LIV-01 | `dataLevel: City → Country proxy` (if quick route) | UNODC dropped city series |
| GRN-02 | definition → "within 400 m of open public space" + caveat rewrite | only global source is SDG 11.7.1 |
| SMT-01 | `approx: none → modelled` + definition note (mean, not median) | tile aggregation over chosen boundary |
| SMT-03 | `approx: perception → none` + caveat (3 cities unassessed) | LOSI is an objective checklist — an upgrade |
| CMP-04 | `dataLevel: City → Metro`, `approx: none → modelled` | Dealroom metro hubs; tracked-DB counts |
| CMP-06 | `dataLevel: City → Metro` | Bay Area / Toronto-Waterloo hubs |
| CON-03 | `dataLevel: City → Metro`, `approx: none → modelled` | GHSL agglomerations; GIS-computed |
| several | per-value year recording (source+year per city) | years differ within one measure |

## Stage 2 execution plan (on your approval)

**Wave A — I can do autonomously from this session** (verified mirrors / open S3):
1. SMT-01 Ookla parquet (already proven end-to-end).
2. LIV-01 country-proxy values from the verified UNODC workbook (if you approve the flag change).
3. TAL-02 country-level top-500 counts from the verified QS CSV (city step waits for you).

**Wave B — needs ~10 minutes of your browser time** (paste results into the chat, or
run Stage 2 from a network without the egress block):
- Numbeo rankings table (LIV-06) · TomTom ranking table (CON-05) · WHO V8.0 xlsx
  (GRN-01) · ITDP Atlas CSV (CON-03) · LOSI table from the UN appendix PDF (SMT-03) ·
  Dealroom dashboard values (CMP-04, CMP-06) · OECD Data Explorer CSV exports (LIV-04,
  LIV-05, CMP-01, TAL-01, TAL-06 anchor) · World Bank API response (SMT-05) ·
  UN-Habitat HDX file (GRN-02).

**Wave C — slow manual digging, propose doing last / partially:**
- LIV-01 city-level route (~14 sources) · GRN-05 (~15 sources) · CON-01 (~26 airport
  pages) · TAL-02 city attribution · TAL-06 multi-source stitch.

**Open decisions for you:**
1. LIV-01: country proxy now vs manual city route (or proxy now, upgrade later)?
2. GRN-02: accept the 400 m open-public-space definition, or drop from pilot?
3. SMT-01: Ookla open-data mean (flag → modelled) vs browser-pasted medians (flags unchanged)?
4. TAL-02: city-proper or metro counting for university counts?
5. Approve the flag-change table above?
6. Wave B: will you paste browser downloads here, or should Stage 2 run somewhere with open egress?
