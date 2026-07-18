# LIV-01 city-level upgrade — study, decisions and source record (v3.2.0)

The homicide measure moved from a UNODC national proxy (v1.0–v3.1.0) to a
**mixed city-level collection** in v3.2.0. This file is the decision record:
the feasibility study's verdicts, the owner's rulings, the per-city source
table, and the verification trail. It plays the same role for this upgrade
that `PHASE3.md` plays for the Phase-3 expansion.

## Why the upgrade

The national proxy flattened exactly what a homicide measure exists to show:
under it, Washington DC, Boston and New York shared one number. At city level
(3-year mean rates, per 100k): Washington DC 31.97, Chicago 19.74, Boston
5.48, New York 4.87 — the within-country spread dwarfs between-country
differences. The proxy was the gold tier's most visible compromise; this
replaces it with the best published figure for each actual place, every
compromise on the value's own receipt.

## Process

1. **Feasibility study** (5 research agents, one per region + a global
   frame): every candidate source fetch-verified with a proof value; honest
   "no source exists" verdicts recorded with what was checked.
2. **Adversarial verification** (3 verifiers instructed to refute): every
   load-bearing number recomputed from archived evidence; three overbroad
   claims corrected; one city (Manila) *recovered* by a verifier who found
   an official series the study had missed.
3. **Owner decisions** (D-L1..L6 below) — nothing changed until ruled.
4. **Fill** (4 collection agents delivering raw published inputs) +
   integration by one uniform scripted method, then CI and browser checks.

## The decisions (ruled by the owner, 2026-07-18)

- **D-L1 — geography model: (a) Mixed, flagged per value.** Sources publish
  different geographies (US police agencies = city proper, Canada = census
  metro areas, Europe = mostly city/greater city with six province-level
  rows, Asia = city/province). Each receipt names its unit; the measure
  wears a `Mixed` badge (added to the flag vocabulary under this ruling);
  the caveat states plainly that ranks can shift on boundary choice alone.
- **D-L2 — qualified rows: include, flagged.** Kuala Lumpur
  (conviction-based counts), Tel Aviv (police case files), Manila
  (rate-only), Shanghai (case filings, per the standing China-statistics
  policy), Taipei (mortality lens) are in, each with the compromise on its
  receipt.
- **D-L3 — volatility: mean of annual rates over the up-to-3 most recent
  published years** (2020+; window on every receipt). Single-year city
  counts of 1–30 swing hard (Munich went 12→1 in a year; Frankfurt 9→20).
  Annual rate = the publisher's own rate where published, else count ÷ a
  named same-source population × 100k — exact arithmetic, never estimation.
- **D-L4 — Tokyo/Osaka/Taipei via vital statistics: vetted.** Japan FAILS —
  its vital statistics register far fewer homicide deaths than police data
  imply (Tokyo 23 wards: one homicide death in all of 2023; nationally 222
  vital-stats vs 283 police-recorded homicide deaths in 2024): certification
  bias, so Tokyo and Osaka stay blank with this evidence cited. Taiwan
  WORKS mechanically (two independent MOHW products agree exactly, city
  proper, three years) and Taipei is included with a mortality-lens flag
  (assault deaths run ~1.9× the police lens nationally — stated on the
  receipt).
- **D-L5 — geo-blocked sources (Jakarta/Dubai/Abu Dhabi): owner-side
  fetch.** Named sources exist but block our build environment; blanks
  carry "retrieval failure, not absence" until fetched (list below).
- **D-L6 — vintage floor: Bangkok's 2020–2022 window accepted**, flagged;
  newer years exist only on hosts unreachable from the build environment.

## Coverage: 45 values + 10 explained blanks

**Definitional yardstick:** ICCS 0101 — completed intentional homicide;
attempts, lawful legal intervention and justifiable self-defence excluded.
Deviations are per-value flags, not silent blends.

### Source table (details, counts and windows on every receipt in-app)

| Cities | Source | Geography | Unit |
|---|---|---|---|
| Berlin, Madrid, Rome, Amsterdam, Brussels, Vienna, Oslo, Helsinki, Prague, Warsaw | Eurostat `crim_hom_ocit` (ICCS 0101) | city / greater city | offences |
| Paris | Eurostat `crim_gen_reg` FR101 (city dataset rejected: internally inconsistent rates) | city proper (dépt 75) | offences |
| Copenhagen | Eurostat `crim_gen_reg` DK011 (only internally coherent series) | Byen København (NUTS3) | offences |
| Munich, Frankfurt, Hamburg | Eurostat `crim_gen_reg` NUTS3 | city proper | offences; 2-yr window (German NUTS3 gap 2020–22) |
| Barcelona, Milan, Dublin, Lisbon, Istanbul | Eurostat `crim_gen_reg` NUTS3 | province / metro | offences |
| London | ONS Homicide Index (murder+manslaughter+infanticide, completed; April–March years) | Greater London region | offences |
| Stockholm | Brå "konstaterade fall av dödligt våld" (case-reviewed, completed only) | police region (incl. Gotland) | victims |
| Zurich | Eurostat CH040 = BFS canton series (matches BFS completed-only counts year-for-year) | canton | offences |
| New York, Chicago, Los Angeles, San Francisco, Boston, Seattle, Washington DC | FBI Crime Data Explorer (murder & nonnegligent manslaughter; excl. attempts & justifiable) | police agency = city proper | offenses |
| Toronto, Montreal, Vancouver | Statistics Canada Homicide Survey 35-10-0071 | census metro area (CMA) | victims |
| Sydney | NSW BOCSAR (murder, separate from attempts) — our disclosed sum of Greater Sydney GCCSA areas ÷ ABS ERP | metro (GCCSA), derived | incidents |
| Seoul | KNPA 살인기수 (completed only; attempts separate) ÷ MOIS registered population | city | cases |
| Singapore | SPF/SingStat murder cases ÷ mid-year population | city-state | cases |
| Hong Kong | HKPF homicide ÷ C&SD mid-year population — 2025 excluded (168 of 194 "homicides" are Tai Po fire deaths classified manslaughter) | territory | cases |
| Mumbai, Delhi | NCRB Crime in India, murder (IPC 302; culpable homicide separate) — NCRB's own 2011-census denominators | metropolitan city (police jurisdiction) | cases |
| Bangkok | Royal Thai Police via NSO, murder (attempts separate) ÷ DOPA registered population | province = city | reported cases |
| Kuala Lumpur | PDRM/DOSM `crime_district`, murder — **conviction-based** ("actual crimes"), undercounts | federal territory | convictions |
| Shanghai | Shanghai Statistical Yearbook, 杀人 cases **filed** ÷ 常住 population (official statistic, per China policy) | municipality | filings |
| Manila | PSA OpenSTAT SDG 16.1.1 (PNP), intentional-homicide **rate only** | NCR (Metro Manila) | published rate |
| Tel Aviv | Israel Police murder **case files** (301; attempts separate) ÷ CBS 2023 locality population held constant | municipality | case files |
| Taipei | MOHW vital statistics, assault deaths (X85–Y09, Y87.1) — **mortality lens**, ~1.9× police lens nationally | city proper | deaths |

### The blanks (all click-through in-app)

| City | Reason (evidence cited on the receipt) |
|---|---|
| Tokyo, Osaka | Police counts include attempts+preparation (completed split national-only); vital-statistics route vetted and FAILED (certification bias) |
| Melbourne | Only city-level figure bundles attempted murder and road deaths (~4×) |
| Auckland | No sub-national homicide series exists (RCVS excludes homicide; HVR is national) |
| Ho Chi Minh City | No official public series (verified absence) |
| Shenzhen | Yearbook verified: no crime chapter at all |
| Beijing | Provisional: no published count found; yearbook host unreachable |
| Jakarta, Dubai, Abu Dhabi | Retrieval failure, not absence — named sources geo-block the build environment |

### Owner fetch list (D-L5)

- **Jakarta**: BPS "Statistik Kriminalitas Provinsi DKI Jakarta 2024"
  (jakarta.bps.go.id, rel. 2025-09-29) or a free BPS Web API key; murder =
  *pembunuhan*.
- **Dubai**: Dubai Pulse `dp_critical_crimes_report` / Dubai Police open
  data ("willful murder per 100k"); dsc.gov.ae yearbook as fallback.
- **Abu Dhabi**: SCAD statistical yearbook, justice/security chapter
  (scad.gov.ae).
- **Bangkok (newer years)**: Royal Thai Police statistics
  (rtpstrategy.police.go.th — blocked by our egress allowlist, likely fine
  from a browser).

## Verification highlights

- London's computed 3-year mean reproduces ONS's own published 3-year rate
  (12.78 per million ≈ 1.28 per 100k).
- Zurich's Eurostat canton series matches BFS "vollendet" (completed-only)
  counts year-for-year, six years exact — proving the completed-only basis.
- Belgium's NUTS3 homicide series was caught inconsistent with the
  completed-only city series (34 vs 8 in 2024, likely attempts) and
  excluded; Prague's conflicted 2023 NUTS3 value avoided likewise.
- The UNODC caveat correction: the 2005–2012 city series was discontinued;
  a revived portal dashboard (UN-CTS, ICCS 0101) covers only each country's
  three largest cities, with no bulk download — structurally unable to
  cover this roster, which is why the mixed collection exists.

*Full raw evidence (API responses, spreadsheets, PDFs, manifests) is
archived in the project's build workspace; each receipt names its source
precisely enough to re-fetch independently.*
