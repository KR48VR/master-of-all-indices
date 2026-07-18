# Master Index Workbench — Project Memory

## What this is
A "build-your-own" city index tool. The insight behind it: liveability / green /
smart / competitive indices keep multiplying until they lose their meaning — so
this is ONE honest engine that can build any of them (or blends of them) on the
fly, from a shared pool of measures. Its whole value is that it stays honest:
every approximation is visible to the user.

Live at: https://kr48vr.github.io/master-of-all-indices/

## Files
- `index.html` — the app: the scoring engine plus the UI. Runs as-is on GitHub
  Pages, no build step.
- `dataset.js` — ALL the data (+ `meta` version block and `provenance` per
  value). It sets `window.INDEX_DATA = {...}` and the app reads from it. This
  is the only file you edit to change data.
- `dataset.csv` — flat export of the same data. NEVER edit by hand: regenerate
  with `node scripts/build-csv.js` after any dataset.js change (CI enforces
  sync).
- `scripts/check-integrity.js` — mechanical enforcement of the honesty rules
  (every value provenanced, blanks explained, flags valid). Run it after any
  data change; CI runs it on every push/PR.
- `scripts/check-freshness.js` — the freshness routine: compares each
  measure's provenance `retrieved` date against its source's declared
  publication cadence (the CADENCE map in the script) plus a standing
  watchlist. A monthly GitHub Action files the report as a public issue
  labelled `freshness`. When you refresh a measure, update its provenance
  `retrieved` date; when a source's cadence changes, update the map.
- `city_index_blueprint.xlsx` — the human-readable catalog of all 38 measures,
  with each one's source, direction, data level, and caveats. The app does NOT
  read it; it is the reference. READ IT to understand any measure.
- `SOURCING.md`, `README.md`, `LICENSE.md`, `CITATION.cff` — sourcing plan,
  public docs, licensing (code MIT / data CC BY-NC-SA 4.0), citation metadata.
  Bump `meta.version` in dataset.js AND `CITATION.cff` together on release.

## Current status
v3.2.0: Phase 3 complete — 55 cities × 35 sourced measures in TWO TIERS.
(v3.2.0 = LIV-01 homicide upgraded from Country proxy to MIXED city-level:
45 city values from Eurostat/FBI/StatCan/national sources, means of annual
rates over up-to-3 recent years, 10 evidence-backed blanks; decisions
D-L1..L6 and the full study in LIV01.md. LIV-01 values NOT comparable to
v3.1.0 national proxies.)
(v3.1.0 = the GRN-03 CO2 measure moved to GHS-UCDB R2024A V1-2, May 2026:
emissions year 2024, international aviation/shipping now INCLUDED, and the
publisher re-benchmarked most centres — median same-year shift ~21%, so
GRN-03 values are NOT comparable to v3.0.0.)
The `tier` field on every measure drives the app: 'gold' (29 measures,
default view — each measures what its name says, from the best available
source), 'extended' (6 known-compromised measures, off by default behind a
labelled toggle with badges and a masthead banner: OECD-only economy pair,
Europe-only knowledge workers, IWA water at 34/55, ODIN open data with
concept drift, and Wikidata museum counts included purely as a crowd-bias
demonstration), and 'none' (3 permanently blank: renewable share, talent
inflow, travel-time-to-hubs — no honest source exists, reasons in PHASE3.md).
Every value has per-value provenance and every blank an explanation
(CI-enforced, incl. missing-key detection and tier validation). Scores
re-scale with the city set AND the active measure set: v3 ranks are NOT
comparable to v2/v1 (state version + tier when citing). `PHASE3.md` holds
the Phase-3 verdicts and approved decisions (D1-D11); `SOURCING.md` the
pilot-era plan; `ROSTER.md` city selection and floor actuals.

## How the engine works — do not change it
For the selected measures: rescale each to 0–100 across the shown cities, flip
the "lower is better" ones, then roll up measure → sub-theme → area → composite.
Areas are equally weighted by default; the user can reweight. Two combine
methods exist: "simple average" (additive) and "balanced" (geometric). Missing
data lowers a city's "coverage %".

## Data model (inside dataset.js)
- 6 areas: Liveable, Green, Smart, Competitive, Talent, Connected.
- 38 measures total; 19 are the "pilot" set (best data coverage) — start there.
- 55 cities: the 16 v1.0 cities (Singapore, Tokyo, Copenhagen, Zurich, Vienna,
  Seoul, Melbourne, Amsterdam, London, New York, Paris, Toronto, Berlin,
  Barcelona, Dubai, San Francisco) plus the v2.0 roster from ROSTER.md —
  Europe (Stockholm, Oslo, Helsinki, Madrid, Milan, Rome, Munich, Frankfurt,
  Hamburg, Brussels, Dublin, Lisbon, Prague, Warsaw, Istanbul), Americas &
  Oceania (Montreal, Vancouver, Chicago, Boston, Los Angeles, Seattle,
  Washington DC, Sydney, Auckland), Asia & Gulf (Osaka, Tel Aviv, Hong Kong,
  Taipei, Bangkok, Kuala Lumpur, Jakarta, Manila, Ho Chi Minh City, Mumbai,
  Abu Dhabi, Shanghai, Beijing, Shenzhen, Delhi).
- Each measure carries honesty flags: `dataLevel` (City / Metro / Mixed / Country proxy —
  Mixed = geography differs by city, each value's true unit on its receipt),
  `direction` (higher / lower), `approx` (crowd / perception / self-reported /
  modelled / none), and a `caveat`. These flags drive the badges in the app, so
  they must stay truthful.

## NON-NEGOTIABLE RULES
1. **YOU MUST NEVER invent, guess, estimate, or interpolate a data value.** If a
   number cannot be verified from a real source, leave it `null`. A blank is
   correct and honest; a fabricated number defeats the entire purpose of this
   tool.
2. **YOU MUST NOT change the scoring logic or the data-quality flags in
   index.html.** Only edit data values in `dataset.js`. If a real source forces
   a flag to change (e.g. you could only find a country-level figure, so it
   becomes a "Country proxy"), tell me and update the flag to match reality —
   never hide the compromise.
3. Whenever you add a real value, record its source and year alongside it.
4. Keep the project dependency-free and single-page (must keep working on
   GitHub Pages with no build step).

## Verify after any change
Open the app (locally or the live URL), toggle an area on/off, and switch the
combine method. Confirm it still renders and re-ranks, and that the coverage %s
and the "N of M active measures are approximations" line still update correctly.
