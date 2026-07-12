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
- `city_index_blueprint.xlsx` — the human-readable catalog of all 38 measures,
  with each one's source, direction, data level, and caveats. The app does NOT
  read it; it is the reference. READ IT to understand any measure.
- `SOURCING.md`, `README.md`, `LICENSE.md`, `CITATION.cff` — sourcing plan,
  public docs, licensing (code MIT / data CC BY-NC-SA 4.0), citation metadata.
  Bump `meta.version` in dataset.js AND `CITATION.cff` together on release.

## Current status
v2.0.0: the roster expansion is complete — 55 cities × 19 sourced pilot
measures, ~88% of cells filled, every value with a per-value `provenance`
entry (source/year/method) and every blank explained (CI-enforced, including
missing-key detection). Expansion happened in two waves on top of the 16-city
v1.0.0: Wave 1 added 26 OECD-country cities, Wave 2 the final 13 Asian/Gulf
cities plus a 40-city waste-recycling dig. Some measures are structurally
thin outside the OECD (Dealroom counts, UN LOSI, ITDP transit, OECD metro
GDP, foreign-born stats) — those blanks are principled, with reasons recorded
per city. Scores re-scale with the city set: v2 ranks are NOT comparable to
v1.x (state the version when citing). The 19 NON-pilot measures have never
had data values (the app shows them as "no data"); sourcing them is Phase 3.
`SOURCING.md` documents the source plan per pilot measure; `ROSTER.md` the
city-selection rules, named floor exceptions and Wave-2 actuals.

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
- Each measure carries honesty flags: `dataLevel` (City / Metro / Country proxy),
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
