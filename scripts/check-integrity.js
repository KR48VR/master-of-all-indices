#!/usr/bin/env node
// Integrity checks for dataset.js — enforces the project's honesty rules mechanically:
//  1. every present value belongs to a measure with provenance AND has a per-city provenance entry
//  2. provenance values match stored values
//  3. explained blanks: null cells of sourced measures have a per-city provenance entry
//  4. measures without provenance carry no values at all
//  5. flags are valid enums; structure is sound; version metadata present
// Exits 1 with a list of failures if any rule is broken.
'use strict';
const path = require('path');

global.window = {};
require(path.join(__dirname, '..', 'dataset.js'));
const P = global.window.INDEX_DATA;

const errs = [];
const ok = (cond, msg) => { if (!cond) errs.push(msg); };

// structure & meta
ok(P && Array.isArray(P.domains) && Array.isArray(P.variables) && Array.isArray(P.cities) && P.data,
  'INDEX_DATA missing a core block (domains/variables/cities/data)');
ok(P.meta && /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(P.meta.version || ''), 'meta.version missing or not semver');
ok(P.meta && P.meta.released, 'meta.released missing');

const domainIds = new Set(P.domains.map(d => d.id));
const varIds = new Set();
const DATA_LEVELS = new Set(['City', 'Metro', 'Country proxy']);
const APPROX = new Set(['none', 'crowd', 'perception', 'self-reported', 'modelled', 'proxy']);
const DIRECTION = new Set(['higher', 'lower']);

const TIERS = new Set(['gold', 'extended', 'none']);
for (const v of P.variables) {
  ok(!varIds.has(v.id), `duplicate variable id ${v.id}`);
  varIds.add(v.id);
  ok(domainIds.has(v.domain), `${v.id}: unknown domain '${v.domain}'`);
  ok(DATA_LEVELS.has(v.dataLevel), `${v.id}: invalid dataLevel '${v.dataLevel}'`);
  ok(APPROX.has(v.approx), `${v.id}: invalid approx '${v.approx}'`);
  ok(DIRECTION.has(v.direction), `${v.id}: invalid direction '${v.direction}'`);
  ok(TIERS.has(v.tier), `${v.id}: invalid tier '${v.tier}' (gold/extended/none)`);
  if (v.tier === 'gold') ok(!!(P.provenance || {})[v.id], `${v.id}: tier 'gold' but no provenance block — gold measures must be sourced`);
  if (v.tier === 'none') {
    for (const city of P.cities) {
      const val = (P.data[city] || {})[v.id];
      ok(val === null || val === undefined, `${city}/${v.id}: tier 'none' measure carries a value`);
    }
  }
}

const prov = P.provenance || {};
for (const pid of Object.keys(prov)) {
  ok(varIds.has(pid), `provenance for unknown measure '${pid}'`);
  for (const c of Object.keys(prov[pid].perCity || {})) {
    ok(P.cities.includes(c), `${pid}: provenance for unknown city '${c}'`);
  }
}

for (const city of Object.keys(P.data)) {
  ok(P.cities.includes(city), `data for unknown city '${city}'`);
  for (const [mid, val] of Object.entries(P.data[city])) {
    ok(varIds.has(mid), `${city}: data for unknown measure '${mid}'`);
    const p = prov[mid];
    if (val !== null && val !== undefined) {
      ok(typeof val === 'number' && isFinite(val), `${city}/${mid}: value is not a finite number`);
      ok(!!p, `${city}/${mid}: VALUE WITHOUT PROVENANCE — a number with no receipt`);
      const pc = p && (p.perCity || {})[city];
      ok(!!pc, `${city}/${mid}: no per-city provenance entry`);
      if (pc && typeof pc.value === 'number') {
        ok(Math.abs(pc.value - val) < 1e-9, `${city}/${mid}: provenance value ${pc.value} != stored ${val}`);
      }
      ok(pc && pc.year !== undefined, `${city}/${mid}: provenance entry missing year`);
    } else if (p) {
      // an honest blank must be explained
      const pc = (p.perCity || {})[city];
      ok(!!pc, `${city}/${mid}: null value with no per-city provenance explanation`);
      ok(pc && (pc.value === null || pc.value === undefined), `${city}/${mid}: stored null but provenance has value ${pc && pc.value}`);
    }
  }
}

// measures without provenance must be fully empty
for (const v of P.variables) {
  if (prov[v.id]) continue;
  for (const city of P.cities) {
    const val = (P.data[city] || {})[v.id];
    ok(val === null || val === undefined, `${city}/${v.id}: value present but measure has NO provenance block`);
  }
}

// sourced measures must have an explicit cell (value or explained null) for EVERY city —
// a missing key would silently evade the explained-blank rule above
for (const v of P.variables) {
  if (!prov[v.id]) continue;
  for (const city of P.cities) {
    ok(v.id in (P.data[city] || {}),
      `${city}/${v.id}: DATA KEY MISSING — sourced measure has no cell for this city (not even an explained blank)`);
  }
}

if (errs.length) {
  console.error(`INTEGRITY FAIL — ${errs.length} problem(s):`);
  errs.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
const sourced = P.variables.filter(v => prov[v.id]).length;
let filled = 0, total = 0;
P.variables.filter(v => prov[v.id]).forEach(v => P.cities.forEach(c => {
  total++; const val = P.data[c][v.id];
  if (val !== null && val !== undefined) filled++;
}));
console.log(`INTEGRITY OK — v${P.meta.version}: ${P.cities.length} cities, ${sourced} sourced measures, ` +
  `${filled}/${total} cells filled, every value provenanced, every blank explained.`);
