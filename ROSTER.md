# ROSTER.md — evidence base for the ~50-city expansion (v2.0)

Prepared 2026-07-12, updated as candidates are studied. Status: **projection complete
for 39 candidates; no roster decision taken yet.**

## What this is

Version 1.0 covers 16 cities. The published target is ~50 cities × ~35 measures with
≥85% cell coverage and 100% provenance. This document is the evidence for choosing
which cities get the ~34 new seats — so that the final roster follows a published rule,
not taste.

## Method — measured, not guessed

For each candidate city we checked each of the 19 existing measure pipelines:

- **Artifact-measured** (most cells): checked directly against the actual raw source
  files retained from the v1.0 data collection — the full Ookla Q1-2026 world tile file
  (tile/test density per city bounding box), the WHO Air Quality DB v8.0 workbook (row
  presence + latest year), the ITDP Atlas all-cities CSV, TomTom's decoded ranking data,
  the UNODC homicide workbook, UN-Habitat's SDG 11.7.1 file, the LOSI 2024 appendix,
  Numbeo's rankings page, the QS 2026 rankings data, and Dealroom's own hub index — plus
  a live pull of the OECD FUA codelist.
- **Rule-based** (marked * in the working files): OECD regional health/education
  coverage inferred from OECD membership; LOSI from its one-most-populous-city-per-UN-member
  design.

Scores mean: **Quick fill** = cells fillable from existing pipelines (including honest
country proxies) with no new source work; **With manual digs** = adding national/city
statistical-office work of the kind done for waste recycling in v1.0.

**A projection is not a filled value.** It measures availability, not verified data —
fill time can still surprise (v1.0 examples: Vienna hiding as "Wien/AUT"; transit values
that turned out to be feed artifacts). Treat every number below as an upper bound minus
surprises.

## Results — 39 candidates, ranked

| City | Quick fill | With manual digs | Remaining honest blanks |
|---|---|---|---|
| Stockholm | 17/19 | **19/19** (100%) | — |
| Madrid | 17/19 | **19/19** (100%) | — |
| Rome | 18/19 | **19/19** (100%) | — |
| Dublin | 17/19 | **19/19** (100%) | — |
| Lisbon | 17/19 | **19/19** (100%) | — |
| Prague | 17/19 | **19/19** (100%) | — |
| Warsaw | 17/19 | **19/19** (100%) | — |
| Istanbul | 17/19 | **19/19** (100%) | — |
| Sydney | 17/19 | **19/19** (100%) | — |
| Auckland | 17/19 | **19/19** (100%) | — |
| Hong Kong | 16/19 | **18/19** (95%) | SMT-03 |
| Oslo | 17/19 | **18/19** (95%) | CON-03 |
| Helsinki | 16/19 | **18/19** (95%) | GRN-02 |
| Milan | 16/19 | **18/19** (95%) | SMT-03 |
| Munich | 16/19 | **18/19** (95%) | SMT-03 |
| Hamburg | 16/19 | **18/19** (95%) | SMT-03 |
| Brussels | 16/19 | **18/19** (95%) | GRN-02 |
| Montreal | 16/19 | **18/19** (95%) | SMT-03 |
| Vancouver | 16/19 | **18/19** (95%) | SMT-03 |
| Chicago | 16/19 | **18/19** (95%) | SMT-03 |
| Boston | 16/19 | **18/19** (95%) | SMT-03 |
| Los Angeles | 16/19 | **18/19** (95%) | SMT-03 |
| Seattle | 16/19 | **18/19** (95%) | SMT-03 |
| Washington DC | 16/19 | **18/19** (95%) | SMT-03 |
| Osaka | 16/19 | **18/19** (95%) | SMT-03 |
| Bangkok | 15/19 | **17/19** (89%) | CMP-01, TAL-06 |
| Kuala Lumpur | 14/19 | **17/19** (89%) | CMP-01, CON-03 |
| Jakarta | 15/19 | **17/19** (89%) | CMP-01, TAL-06 |
| Manila | 15/19 | **17/19** (89%) | CMP-01, TAL-06 |
| Tel Aviv | 15/19 | **17/19** (89%) | SMT-03, CON-05 |
| Taipei | 9/19 | **16/19** (84%) | GRN-02, SMT-03, CMP-01 |
| Ho Chi Minh | 14/19 | **16/19** (84%) | CMP-01, TAL-06, CON-03 |
| Mumbai | 14/19 | **16/19** (84%) | CMP-01, TAL-06, CON-03 |
| Frankfurt | 14/19 | **16/19** (84%) | GRN-02, SMT-03, CON-03 |
| Abu Dhabi | 13/19 | **16/19** (84%) | SMT-03, CMP-01, TAL-06 |
| Shanghai | 13/19 | **15/19** (79%) | CMP-01, TAL-06, CON-03, CON-05 |
| Shenzhen | 13/19 | **15/19** (79%) | SMT-03, CMP-01, TAL-06, CON-05 |
| Delhi | 13/19 | **15/19** (79%) | SMT-03, CMP-01, TAL-06, CON-03 |
| Beijing | 12/19 | **14/19** (74%) | SMT-03, CMP-01, TAL-06, CON-03, CON-05 |

For calibration: the current 16 cities average 17.6/19 (93%) actually filled.

## Key findings

1. **The OECD candidates are nearly free.** Ten cities project at 19/19 with modest
   manual work; the whole OECD group averages ~18/19. Wave-1 expansion is cheap.
2. **Asia is far more coverable than assumed.** Measured, not guessed: Ookla has dense
   broadband data even in mainland China (Shanghai: 5,784 tiles, 160k tests); WHO v8
   carries 2024 PM2.5 for Chinese cities — fresher than London's 2019; ITDP transit
   unexpectedly covers Shenzhen; Numbeo, QS, Dealroom and UN-Habitat cover essentially
   all twelve Asian candidates.
3. **The blanks are structural, not scattered.** The same few measures fail everywhere
   outside the OECD: metro GDP in PPP (an OECD-only product), foreign-born share (the
   statistic mostly does not exist in Asia), TomTom skipping mainland China, and LOSI's
   one-city-per-country rule (which also blanks every second city of Germany, the US,
   Canada, Japan — SMT-03 coverage dilutes as the roster grows, by design of its source).
4. **Taipei is a political data gap, not a development one.** It scores 9/19 quick only
   because Taiwan is excluded from UN/World Bank/WHO datasets; Taiwan's own statistics
   are excellent, lifting it to 16/19 with manual work. An honest index should say this
   in the caveat if Taipei is admitted.
5. **Mainland China is usable but requires a stance.** Several cells would rest on
   official NBS/municipal statistics, which carry known comparability debates. Usable
   with explicit caveats — but that is a deliberate editorial position to take.

## Decisions taken (2026-07-12, maintainer)

1. **Selection rule: Option B — coverage floor with named exceptions.**
   The operational floor: a city is admitted by rule if it projects (or, for
   incumbents, actually has) **no more than 3 honest blanks out of the 19 measures
   (≥84% cell coverage)**. Cities below the floor may be admitted only as **named
   exceptions**, listed here with reasons, their thinner coverage displayed by the
   app as usual. The site's published bar (≥85% cell coverage) applies to the
   index-wide average, which the roster below meets comfortably (~92% projected).

2. **Mainland-China statistics: accepted, with blunt caveats.**
   Where the only source for a Chinese city's value is official NBS/municipal
   statistics, the value may be used; its provenance and caveat must state that it
   is an official statistic for which independent verification is not possible.
   This mirrors existing practice (crowd-sourced values are flagged, computed
   values disclose their arithmetic). Any value that cannot even be verified as
   officially published stays blank.

3. **Within-metro judgment calls** (e.g. LOSI's Philippines entry is Quezon City,
   not Manila proper) are decided at fill time and documented per value, as in v1.0.

## The v2.0 roster (55 cities, frozen on merge of this document)

Applying the rule to the whole candidate pool — incumbents included, because a rule
that exempts incumbents is not a rule — yields **51 cities by floor and 4 by
exception**. The target said ~50; the rule yields 55; we keep 55 rather than trim by
taste, which would reintroduce the cherry-picking the rule exists to prevent.

**Incumbents passing the floor (15):** Singapore, Tokyo, Copenhagen, Zurich, Vienna,
Seoul, Melbourne, Amsterdam, London, New York, Paris, Toronto, Berlin, Barcelona,
San Francisco.

**New admissions by floor (35):** Stockholm, Oslo, Helsinki, Madrid, Milan, Rome,
Munich, Frankfurt, Hamburg, Brussels, Dublin, Lisbon, Prague, Warsaw, Istanbul,
Montreal, Vancouver, Chicago, Boston, Los Angeles, Seattle, Washington DC, Sydney,
Auckland, Osaka, Tel Aviv, Abu Dhabi, Hong Kong, Taipei, Bangkok, Kuala Lumpur,
Jakarta, Manila, Ho Chi Minh City, Mumbai.

**Named exceptions (5):**
- **Dubai** (incumbent, 15/19 actual = 79%): global hub; no foreign-born statistic,
  no PPP metro GDP, no published recycling rate.
- **Shanghai** (15/19 projected) and **Shenzhen** (15/19) and **Delhi** (15/19) and
  **Beijing** (14/19 = 74%): among the most-compared cities on Earth; their gaps are
  structural (OECD-only products, nonexistent statistics, TomTom's China exclusion),
  not informational poverty. Excluding them would misrepresent the urban world more
  than their blanks misrepresent them.

Honest consequences to disclose when v2.0 ships: SMT-03 (e-government) coverage
dilutes by design — LOSI scores only each country's most populous city, so every
second city of a country arrives blank on it; and all scores re-scale when the city
set grows, so v2.0 ranks are not comparable to v1.x.

## Next steps

1. ~~Roster decision~~ — taken above; the list freezes when this document merges.
2. Wave 1 fill: the 26 OECD-country admissions against existing pipelines.
3. Phase 3 measure feasibility (the 19 unsourced catalog measures) against the full roster.
4. Wave 2 fill: the manual-heavy cities (Asia + exceptions). Ship as v2.0.

Working data for this study (per-city, per-measure marks and the raw artifact checks)
is preserved in the session records; the matrices above are the decision-relevant summary.

## Wave 2 outcome — projection vs. actual (recorded at v2.0.0, 2026-07-12)

The floor above was applied on *projected* coverage. After sourcing everything,
actual coverage came in lower for the non-OECD additions, because five measures
turned out structurally thinner outside the OECD than projected: CMP-04
(Dealroom shows no startup count for smaller hubs — 24 of 55 cities blank),
SMT-03 (UN LOSI scores ~1 city per country — 22 blank), CON-03 (ITDP transit
feeds absent/artifactual — 20 blank), CMP-01 (OECD-only metro GDP — 14 blank),
TAL-06 (foreign-born rarely published in Asia — 12 blank).

**Cities over the 3-blank floor at v2.0.0** (blanks of 19; all blanks are
explained per value):

| City | Blanks | Named exception? |
|---|---|---|
| Taipei | 6 | no |
| Shenzhen | 6 | yes |
| Beijing | 6 | yes |
| Ho Chi Minh City | 5 | no |
| Delhi | 5 | yes |
| Bangkok | 5 | no |
| Abu Dhabi | 5 | no |
| Tel Aviv | 4 | no |
| Shanghai | 4 | yes |
| Mumbai | 4 | no |
| Manila | 4 | no |
| Jakarta | 4 | no |
| Istanbul | 4 | no |
| Dubai | 4 | yes |

Nine cities breach the floor without being named exceptions. They were kept in
v2.0.0 because their gaps are the same *structural* kind the exceptions were
named for (source-coverage geography, not informational poverty), dropping them
would undo the roster's purpose (closing the Asia gap), and the app already
prices blanks honestly via each city's visible coverage %. This is a standing
policy question: either these nine join the exception list, or Phase 3 must
prefer measures with genuinely global sources so the floor becomes attainable
outside the OECD.
