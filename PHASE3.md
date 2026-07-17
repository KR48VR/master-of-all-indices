# Phase 3 Sourcing Plan — the 19 unsourced catalog measures

*Feasibility study, 2026-07-17. Method: six research passes, one per source
family; every candidate source was actually fetched this session and its
coverage checked against all 55 cities by name (evidence archived in the
session records). No data has been written — this document is the plan, to be
approved before any filling starts.*

**The design constraint this round:** five pilot measures ride on OECD/Europe-
centric products, which is why fourteen cities sit over the coverage floor —
nine of them without being named exceptions, mostly Asian (see ROSTER.md,
"Wave 2 outcome"). Phase 3 therefore favours globally-covered sources: a
measure that blanks the same fifteen non-OECD cities again was graded down
even when technically fillable.

## Verdict summary

| # | Measure | Verdict | Source | Coverage | Level / approx |
|---|---|---|---|---|---|
| LIV-02 | Perceived safety | **RECOMMEND** | Numbeo Safety Index 2026 Mid-Year | 55/55 | City / crowd |
| LIV-03 | Political stability | **RECOMMEND** | World Bank WGI 2025 | 55/55 | Country proxy / perception |
| LIV-07 | Cost of living | **RECOMMEND** | Numbeo CoL Index 2026 Mid-Year | 55/55 | City / crowd |
| LIV-08 | Cultural venues | **REJECT** | none passes the comparability bar | 0/55 | — |
| GRN-03 | CO2 per capita | **RECOMMEND** | EDGAR v2024 urban centres (JRC) | 55/55 | Metro / modelled |
| GRN-04 | Renewable share | **REJECT** | city-level sources dead or dishonest | — | — |
| GRN-06 | Water use per capita | **POSSIBLE** | IWA water statistics | 34/55 | City / self-reported |
| GRN-07 | Hazard exposure | **RECOMMEND** | ThinkHazard (GFDRR/World Bank) | 55/55 | City² / modelled |
| SMT-02 | 5G coverage | **RECOMMEND** | ITU DataHub (SDG 9.c series) | 55/55¹ | Country proxy / none |
| SMT-04 | Open data | **POSSIBLE** | ODIN 2024/25 (Open Data Watch) | 55/55 | Country proxy / none |
| SMT-06 | Smart mobility | **RECOMMEND** | IMD Smart City Index (survey item) | 54/55 | City / perception |
| CMP-02 | Labour productivity | **POSSIBLE (advise skip)** | OECD FUA economy | 33/55 | Metro / modelled |
| CMP-03 | Global firm presence | **RECOMMEND** | Forbes Global 2000, 2025 | 55/55 | Metro / none |
| CMP-05 | Employment growth | **POSSIBLE (advise skip)** | OECD FUA labour | 37/55 | Metro / none |
| TAL-03 | Knowledge workers | **REJECT** | Eurostat only (Europe-only) | 23/55 | — |
| TAL-04 | Researchers per capita | **RECOMMEND** | UNESCO UIS (SDG 9.5.2) | 53/55¹ | Country proxy / none |
| TAL-05 | Talent inflow | **REJECT** | no harmonized source exists | 0/55 | — |
| CON-02 | Global accessibility | **REJECT** | concept gone; GPCI paid + no-reproduction | — | — |
| CON-04 | Commute time | **RECOMMEND** | Numbeo Time Index 2026 Mid-Year | 54/55 | City / crowd |

¹ *Coverage as sourced; the recommended decisions reduce delivered coverage:
D9 blanks Melbourne/Sydney on TAL-04 (→51/55) and D11 blanks Tel Aviv on
SMT-02 (→54/55).*
² *Taipei is available only at Taiwan level — a per-value country-proxy
deviation to flag at fill time.*

**Bottom line: 10 recommended measures give 546 new cells out of a possible
550 as sourced — 543 after the recommended D9/D11 blanks (~99% of the new
set either way; the Asian cities gain the most) — lifting the whole dataset
from 922/1045 (88%) to ~1465/1595 (~92%) across 29 sourced measures**
(~1520/1650 if D3 adopts ODIN as an 11th). Twelve of the fourteen over-floor
cities gain all ten new measures; Taipei gains nine (no TAL-04) and Tel Aviv
eight (no TAL-04; no SMT-02 under D11).

---

## Recommended (10)

### LIV-02 Perceived safety — Numbeo Safety Index
- **Source**: `numbeo.com/crime/rankings.jsp` (2026 Mid-Year edition). Pin
  the `?title=2026-mid` archived URL in provenance — verified byte-identical
  to the live table for the cost-of-living page; verify the crime and
  traffic pinned URLs the same way at integration. 401 cities; all 55
  present after name disambiguation.
- **Column discipline**: Safety Index only (higher = better). The Crime Index
  is its complement (they sum to 100) — recording both would fake a second
  signal.
- **License**: Numbeo terms — personal/academic reuse with link-back credit
  (same posture as existing LIV-06).
- Spot checks match Numbeo's known pattern (Abu Dhabi 88.6, second in the
  world table behind only Ajman; Manila 35.4 low). Auckland reads oddly low
  (49.4) — genuine crowd perception, covered by the existing "soft signal"
  caveat.

### LIV-03 Political stability — World Bank WGI
- **Source**: WGI 2025 release, "Political Stability and Absence of
  Violence/Terrorism", Governance score 0–100. CC BY 4.0. Covers all 36
  country entities → 55/55 cities.
- **Two traps found and solved**: (1) the old API codes (`PV.EST`) are
  archived — the live series are `GOV_WGI_PV.*` under source=3; (2) the 2025
  release switched from percentile ranks to an absolute anchored 0–100 score —
  provenance must name the release, and vintages must never be mixed.
- **Taiwan** is absent from the API but present in the official downloadable
  dataset ("Taiwan, China", 2024 score 81.55) — ingest from the xlsx.
- Flags: Country proxy (blueprint already says so) + approx `perception`
  (WGI is explicitly perception-based).

### LIV-07 Cost of living — Numbeo Cost of Living Index
- **Source**: `numbeo.com/cost-of-living/rankings.jsp`, 2026 Mid-Year, 547
  cities, all 55 present. Cost of Living Index column (excludes rent; New
  York = 100, verified reading exactly 100.0). Rent is already covered by
  LIV-06, so the ex-rent index is the right basket.
- The measure's "lower is better" direction stays contestable exactly as the
  catalog already flags (`contestable: 1`) — restate in the caveat.

### GRN-03 CO2 per capita — EDGAR urban centres
- **Source**: EC JRC, EDGAR v2024 "Emissions in urban areas" (2022 vintage)
  joined to the GHS-UCDB urban-centre population table on the same IDs —
  exact arithmetic on two published tables. One method, one year, all 55
  cities. EC open license with attribution; cite Crippa et al. 2024.
- **Six boundary caveats to record per value**: San Francisco sits inside the
  Bay Area unit (named "San Jose"), Taipei = "New Taipei [Taipei]",
  Manila = "Quezon City [Manila]", Delhi = "Ghaziabad [New Delhi]",
  Osaka = Keihanshin, Shenzhen = Pearl River Delta conurbation.
- **The name-join must be completed and hand-verified at integration**: the
  first automated pass matched 50/55 (the five above resolve via the xlsx's
  own names); Hong Kong has its own urban centre but is listed under country
  "China" (a matcher trap), and Chicago needs disambiguating from a separate
  "Chicago Heights" centre.
- The blueprint hint (Covenant of Mayors / CDP self-reports) was checked and
  loses honestly: ≤43/55, inventory years 2010–2023, wildly inconsistent
  self-chosen boundaries (e.g. "City of Melbourne", 160k people).
- Flags: Metro / `modelled`.

### GRN-07 Hazard exposure — ThinkHazard
- **Source**: thinkhazard.org (GFDRR/World Bank), published modelled hazard
  classes (Very low → High) per administrative division; machine-readable
  JSON; hazard classes CC-BY. All 55 covered.
- **Decision needed (D6)**: classes are ordinal, not numeric. Proposal: code
  Very low/Low/Medium/High as 0–3 and store the **maximum across the four
  relevant hazards** (river flood, urban flood, coastal flood, extreme heat)
  — a deterministic documented rule on published classes, disclosed in the
  caveat. Alternative: store urban-flood class alone.
- **Curation is mandatory**: naive name-matching picked a tiny "Bangkok Noi"
  district (river flood "Very low"); the correct Bangkok region reads High
  for coastal flood and extreme heat (river flood Medium). The saved 55-report
  research artifact is that uncurated naive-match set — it must NOT be
  ingested as-is. A half-day manual pass over all 55 division choices,
  recorded per value. Known quirks: Copenhagen under "Koebenhavns", Helsinki
  at province level, Taipei only at Taiwan level (country proxy for that one
  city), heat "No Data" for the small Sydney/Melbourne divisions (use ADM1
  or blank).

### SMT-06 Smart mobility — IMD Smart City Index
- **Source**: IMD SCI free report PDF — per-city survey score for the
  Mobility/Technologies statement "Online scheduling and ticket sales has
  made public transport easier to use" (0–100). 54/55 (Frankfurt unranked —
  principled blank). Use the current 2026 edition at integration, and
  re-confirm there that Frankfurt is still absent and the statement wording
  unchanged (the feasibility check ran on the 2025 edition).
- **Decision needed (D7)**: the statement measures online
  scheduling/ticketing ease, not literally "real-time info" — the measure
  text/caveat must be adjusted to match, with disclosure.
- The reproducible alternative (official GTFS-Realtime feed presence) was
  **rejected with evidence**: the registry covers only 28/55 and measures
  registry participation, not reality — London and Dublin have official
  real-time feeds missing from it, and Hong Kong/Singapore serve real-time
  data outside the GTFS-RT standard entirely. A binary that scores Seoul and
  Tokyo 0 would be absurd.
- Flags: City / `perception` (~400 respondents/city, 3-year window — caveat).

### CMP-03 Global firm presence — Forbes Global 2000
- **Source**: Forbes Global 2000, 2025 edition, first-party JSON (complete
  2,000-firm list with HQ city fetched and archived). Aggregating HQ counts
  per metro is exact counting. **A rare no-blank measure: 0 is an honest
  value** (Auckland = 0 is real). Fortune 500 checked: paywalled/JS — Forbes
  is bigger and cleanly fetchable.
- **Metro rule (decision D8)**: HQ municipality within the city's MSA-style
  commuting area (Redmond→Seattle, Yokohama→Tokyo, Incheon→Seoul). Under
  this rule **San Francisco = 33 excludes Silicon Valley** (San Jose MSA, 29
  firms, incl. Apple/Alphabet/Nvidia); a CSA rule would give SF 62 but also
  merge Washington DC with Baltimore. Recommend MSA with the rule stated in
  the caveat.
- ~1% of Forbes rows need hand-checks (typos, tax-domicile vs operational
  HQ). Sample counts: Tokyo 122, Beijing 78, New York 76, London 55.
- License: © Forbes, no explicit reuse terms — publish derived counts with
  attribution, archived JSON as evidence.

### TAL-04 Researchers per capita — UNESCO UIS
- **Source**: UIS "Researchers per million inhabitants, FTE" (SDG 9.5.2),
  public API, CC BY-3.0 IGO. Country proxy, uniformly applied: 53/55.
- **Principled blanks**: Taipei (Taiwan doesn't report to UIS) and Tel Aviv
  (Israel reports no FTE density; mixing in OECD MSTI would break the
  one-source rule).
- The OECD regional alternative was checked and rejected: no USA, Japan,
  Australia, NZ or Israel at regional level — a mixed bag worse than a clean
  uniform proxy.
- **Decision needed (D9)**: Australia's latest value is 2010. Recommend
  principled blanks for Melbourne/Sydney (16 years stale in a fast-moving
  quantity) rather than recording it; other stale-ish values (UK 2017,
  India/Indonesia/Philippines 2020) recorded with years visible as usual.
  Exact division converts per-million to per-1,000.

### CON-04 Commute time — Numbeo Time Index
- **Source**: `numbeo.com/traffic/rankings.jsp`, 2026 Mid-Year — the plain
  **Time Index in minutes** (not the composite Traffic Index), matching the
  measure's unit exactly. 54/55.
- **Osaka is a principled blank**: absent from the rankings — its city page
  shows only 14 contributors and Numbeo's own "we need more contributors"
  banner; that low-sample page must NOT be used to backfill.
- Moovit (the blueprint's alternative) is dead as data: its per-metro pages
  now serve one generic 2022 dashboard with nothing parseable.
- Spot checks plausible: Delhi 57.4, Los Angeles 57.1 and Mumbai 55.2 at
  the top; Amsterdam and Frankfurt (22.8) at the bottom.

### SMT-02 5G coverage — ITU DataHub
*(Researched in a sixth pass — this measure was initially missed by the
fan-out, caught in the plan audit.)*
- **Source**: ITU DataHub indicator "Population coverage, by mobile network
  technology — at least 5G" (% of population), reported to ITU by national
  regulators; ITU is the SDG 9.c custodian, i.e. the canonical harmonizer of
  exactly this concept. Bulk CSV verified fetchable without auth. License
  CC BY-NC-SA 3.0 IGO — compatible with the dataset's CC BY-NC-SA 4.0.
- **Coverage**: all 36 entities → 55/55, including Taiwan (98.2, 2024, NCC)
  and Hong Kong (99.0, 2024, OFCA). 46 cities on 2024 vintage, 7 on 2023,
  2 on 2021.
- **Decision needed (D11)**: dataLevel must change the blueprint's Metro →
  **Country proxy**, and the caveat must state the differential distortion:
  big-city 5G is systematically better than the national figure, so the
  proxy understates Jakarta (Indonesia 8.9), Ho Chi Minh City (Vietnam
  25.5), Manila (72.4), Mumbai/Delhi (India 82.2) while barely affecting
  OECD cities. Two value-level calls: **Tel Aviv** — Israel's 30.0 is a
  2021 *ITU estimate*, badly stale (recommend principled blank); **Istanbul**
  — Türkiye's 0.0 (2021) is factually right through 2024 (commercial 5G
  launched only in 2026; record with note, refresh at ITU's next drop).
- Underlying figures are operator-predicted coverage with residual national
  definition variance (US counts locations, UK "very high confidence"
  outdoor) — ITU harmonizes, caveat discloses; approx stays `none`
  (official statistics).
- Rejected alternatives, all fetched: GSMA's free index stops at 2023 and
  lacks Taiwan; GSMA per-city data is commercial; Ookla's 5G map is retired
  and never had % population; OpenSignal measures % of *time* on 5G
  (different concept, crowd, all-rights-reserved); assembling ~36 regulator
  figures directly is definitionally incomparable. No honest city-level
  path exists — the uniform flagged proxy is the right implementation.

## Possible — adopt only with eyes open (3 + water)

### SMT-04 Open data — ODIN (decision D3)
The blueprint's source (Open Data Barometer) died in 2018; **no city-level
open-data index exists any more, anywhere** (verified: OKFN city census
frozen ~2017, EU maturity is country/Europe-only, Global Data Barometer's
2nd edition covers only Africa+LatAm). The only living global option is
**ODIN 2024/25** (Open Data Watch): all 55 covered incl. Taiwan and Hong
Kong, but it measures **openness of national official statistics**, not
municipal open-data provision. Adopting it = an honest concept shift,
renamed in the caveat ("openness of national official statistics, country
proxy; a structured expert desk assessment of published outputs — kept
approx `none` as official-statistics assessment, with the expert-assessed
nature stated in the caveat since the approx taxonomy has no closer label"),
and its exact CC license variant needs one confirmation before data lands.
Otherwise: principled blank for the measure.

### CMP-02 / CMP-05 — OECD-only economy measures (decision D4)
Both fillable from OECD FUA tables (CC BY 4.0), both **0/15 non-OECD** —
they would deepen exactly the coverage pattern Phase 3 is meant to escape.
CMP-02 (productivity, 33/55) is even worse than the known pattern: no data
at all for Toronto, Montreal, Vancouver, Sydney, Melbourne, Tel Aviv,
Istanbul. CMP-05 (employment growth, 37/55) is the less-bad of the two, with
per-city 5-yr windows that vary by country (disclosed per value); Tel Aviv
has employment data but its series starts in 2020, too short for a 5-yr
window — hence 37, not 38.
**Recommendation: skip both in Phase 3**; revisit only if the roster's
OECD skew ever stops mattering.

### GRN-06 Water use — IWA (decision D5)
Both blueprint sources are dead (WCCD is a login-gated certification portal;
IBNET's domain no longer resolves). The only live multi-city source is the
IWA statistics portal: **34/55**, with only ~25 cities at 2020/2022 vintage;
filling the other 21 means a manual utility-yearbook dig on the scale of the
40-city waste effort. License unstated — needs an IWA permission check.
**Recommendation: defer** — or adopt at 34/55 with principled blanks if the
Green area needs the depth sooner.

## Rejected — honest no-data measures (5)

- **LIV-08 Cultural venues**: the crowd-bias risk was confirmed with numbers,
  not hypothetically — Wikidata counts Paris at 1.8× its commonly-cited
  official museum count (~130) while counting Shanghai at 0.4× of its
  official 165 (a ~4.5× relative bias: pure editing
  activity); OSM silently returns nothing for Istanbul; GPCI's museum counts
  are paywalled and ≤40/55. No candidate passes definitional consistency.
- **GRN-04 Renewable share**: WCCD dead; CDP's "city" energy mixes are
  part-national in disguise, electricity-only, some a decade stale. (A
  country-level electricity-mix fallback exists — Ember, CC BY — but that is
  a different measure; noted for the future, not proposed.)
- **TAL-03 Knowledge workers**: only Eurostat harmonizes it — 23/55,
  Europe-only (it does reach Zurich, Oslo, Istanbul and London — but London
  is frozen at 2019 and nothing exists beyond Europe). The ILO occupational
  fallback changes both level and concept.
- **TAL-05 Talent inflow**: nothing harmonized exists at metro level; the
  LinkedIn–World Bank dataset died in 2019 (country-level); OECD regional
  flows lack a working-age split and miss the US, France, Korea and Israel.
- **CON-02 Global accessibility**: four independent disqualifiers — GPCI no
  longer has a travel-time-to-hubs indicator at all; per-indicator values
  are absent from the free summary (sold in the Yearbook); its license
  forbids reproduction; 40/55.
  Computing hub travel times ourselves would be modelling (rule 1). Blank
  forever, reasons recorded.

## Decisions requested (the plan is approved by answering these)

| # | Decision | Recommendation |
|---|---|---|
| D1 | Adopt the three Numbeo measures (making four Numbeo-sourced measures total — one provider, correlated crowd bias, disclosed in Methods)? | Yes — full 55-city Asian coverage is worth the concentration, stated openly |
| D2 | LIV-07 keeps "lower is better" (already flagged contestable)? | Yes, restated in caveat |
| D3 | SMT-04: adopt ODIN with the concept shift to "national statistics openness (country proxy)" — or leave blank? | Adopt with renamed caveat |
| D4 | CMP-02/CMP-05: skip both OECD-only measures? | Skip both |
| D5 | GRN-06 water: defer, or adopt at 34/55? | Defer |
| D6 | GRN-07 coding: max of four hazard classes coded 0–3? | Yes, rule in caveat |
| D7 | SMT-06: adjust measure text to match the IMD ticketing/scheduling statement? | Yes |
| D8 | CMP-03 metro rule: MSA (SF excludes Silicon Valley) vs CSA (SF merges with San Jose, DC with Baltimore)? | MSA, rule stated in caveat |
| D9 | TAL-04 Australia (2010 vintage): principled blank for Melbourne/Sydney, or record with stale note? | Blank |
| D10 | Accept the five rejects as permanent honest no-data measures (reasons recorded here)? | Yes |
| D11 | SMT-02: accept Metro→Country-proxy flag change with the distortion caveat; blank Tel Aviv (2021 ITU estimate); record Istanbul 0.0 with note? | Yes to all three |

## Fill order (once approved)

Cheapest-and-cleanest first, one measure per commit, per-value provenance and
plausibility eyeballing as always:

1. LIV-02, LIV-07, CON-04 (one Numbeo session, three commits)
2. LIV-03 (WGI xlsx), TAL-04 (UIS API), SMT-02 (ITU CSV) — country proxies, quick
3. CMP-03 (Forbes aggregation + metro-rule hand-checks)
4. GRN-03 (EDGAR join + 6 boundary caveats)
5. GRN-07 (ThinkHazard + half-day division curation)
6. SMT-06 (IMD 2026 PDF extraction), SMT-04 if D3 = adopt

Estimated outcome: 29–30 sourced measures, ~92% filled, and the
coverage-floor table in ROSTER.md shrinks instead of growing.
