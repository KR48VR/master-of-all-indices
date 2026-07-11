# City Index Workbench — Project Memory

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
- `dataset.js` — ALL the data. It sets `window.INDEX_DATA = {...}` and the app
  reads from it. This is the only file you edit to change data.
- `city_index_blueprint.xlsx` — the human-readable catalog of all 38 measures,
  with each one's source, direction, data level, and caveats. The app does NOT
  read it; it is the reference. READ IT to understand any measure.

## Current status
The engine works and is published. Phase 2 (real data) is largely done for the
PILOT set: 18 of the 19 pilot measures now hold verified, sourced values, with
source/year/method recorded per value in the `provenance` block of `dataset.js`
(the app ignores that block; it exists to satisfy rule 3). CON-01 (airport
connectivity) is deliberately all-null pending manual sourcing — its former
placeholders were removed. The 19 NON-pilot measures still carry ILLUSTRATIVE
PLACEHOLDERS — do not trust any value for a measure without a `provenance`
entry. `SOURCING.md` documents the source plan and verdict per pilot measure.

## How the engine works — do not change it
For the selected measures: rescale each to 0–100 across the shown cities, flip
the "lower is better" ones, then roll up measure → sub-theme → area → composite.
Areas are equally weighted by default; the user can reweight. Two combine
methods exist: "simple average" (additive) and "balanced" (geometric). Missing
data lowers a city's "coverage %".

## Data model (inside dataset.js)
- 6 areas: Liveable, Green, Smart, Competitive, Talent, Connected.
- 38 measures total; 19 are the "pilot" set (best data coverage) — start there.
- 16 cities: Singapore, Tokyo, Copenhagen, Zurich, Vienna, Seoul, Melbourne,
  Amsterdam, London, New York, Paris, Toronto, Berlin, Barcelona, Dubai,
  San Francisco.
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
