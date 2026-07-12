# Master Index Workbench

**Live: https://kr48vr.github.io/master-of-all-indices/**

[![Data integrity](https://github.com/KR48VR/master-of-all-indices/actions/workflows/integrity.yml/badge.svg)](https://github.com/KR48VR/master-of-all-indices/actions/workflows/integrity.yml)

City indices keep multiplying — liveability, green, smart, competitive — until
the labels stop meaning anything. This project takes the opposite bet: **one
honest engine, one shared pool of measures**, and *you* decide what to blend.
Pick areas, drop measures, reweight, switch the combine method — the ranking
rebuilds live, and every approximation stays visible.

Its only claim to authority is that **every number can prove where it came
from**: click any value on the site to see its source, reference year,
extraction method and caveats. Blanks are honest missing data — click them and
they explain themselves.

## The rules (enforced by CI, not just promised)

1. **No number is ever invented, estimated or interpolated.** Unverifiable ⇒ blank.
2. **Every value carries its receipt** — source, year, method, caveats, per value.
3. **Compromises are flagged, never hidden** — metro stand-ins, country proxies,
   crowd-sourced and modelled figures are all badged in the UI.
4. **Missing data costs visibility, not rank** — never an assumed zero.

The [integrity workflow](.github/workflows/integrity.yml) fails any change that
adds a value without provenance, breaks a flag, or lets `dataset.csv` drift
from `dataset.js`.

## Why so small?

Conventional indices cover 100–200 cities and dozens of indicators. This one is
deliberately smaller — every cell must meet the same bar, or stay blank.

| | Conventional global index | This workbench |
|---|---|---|
| Where a number comes from | a sources appendix, at best | click it: source, year, method, caveat |
| Missing data | filled by estimation, invisibly | left blank, explained, counted against coverage |
| Approximations | undisclosed | badged per measure, tallied in the UI |
| Weights & method | fixed by the publisher | yours to change; ranking rebuilds live |
| Robustness | asserted | measured (drop-one-measure rank ranges, in the UI) |
| The data | paywalled or PDF | versioned CSV download, licensed |
| The rules | an editorial promise | a public automated check on every change |

Conventional indices are genuinely better at breadth, long time series and
expert judgement where hard data doesn't exist. If you need 200 cities, use
them. If you need to check the receipts, you're in the right place.

## What's in the box

| File | What it is |
|---|---|
| `index.html` | The whole app: engine + UI. No build step, no dependencies. |
| `dataset.js` | All data + the `provenance` block (source/year/method per value). |
| `dataset.csv` | The same data flat: one row per city × measure. |
| `SOURCING.md` | The per-measure sourcing plan and verdicts. |
| `city_index_blueprint.xlsx` | The measure catalog (reference, not read by the app). |
| `scripts/` | Integrity checker and CSV generator (plain Node, no deps). |

Current scale: 16 cities × 19 sourced measures (of a 38-measure catalog), 93%
of cells filled — live figures are computed on the site's *Methods & choices*
section. Target: ~50 cities × ~35 measures with ≥85% coverage, 100% provenance.

## Cite

> Poon, K. W. Master Index Workbench, v1.0.0 (2026). https://kr48vr.github.io/master-of-all-indices/

See `CITATION.cff` (GitHub's "Cite this repository" button uses it). Please
state the version: adding cities re-scales all scores, so scores are comparable
within a version, not across versions.

## License

Code: MIT. Dataset: CC BY-NC-SA 4.0, with per-value source terms recorded in
provenance — see `LICENSE.md` for why and what that means for reuse.
