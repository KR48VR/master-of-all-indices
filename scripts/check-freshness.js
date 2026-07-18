#!/usr/bin/env node
// Freshness report for dataset.js — makes staleness a visible, first-class property.
// For every sourced measure: when we last verified it (from its own provenance),
// how often its source publishes, and therefore whether a refresh is DUE.
// This is a REPORT, not a gate: exit code is always 0. Run monthly by CI
// (.github/workflows/freshness.yml), which files the output as a public issue.
// Usage: node scripts/check-freshness.js [--md]
'use strict';
const path = require('path');

global.window = {};
require(path.join(__dirname, '..', 'dataset.js'));
const P = global.window.INDEX_DATA;

// Publication cadence per measure: how many months between source updates,
// and what to watch for. Keep this honest — it is the contract the report runs on.
const CADENCE = {
  'LIV-01': { months: 12, why: 'UNODC updates national homicide series annually' },
  'LIV-02': { months: 6,  why: 'Numbeo publishes Mid-Year (~Jul) and full-year (~Jan) editions' },
  'LIV-03': { months: 12, why: 'WGI releases annually (~Sept); never mix releases' },
  'LIV-04': { months: 12, why: 'national life tables / WB series update annually' },
  'LIV-05': { months: 12, why: 'OECD regional / WHO GHO physician densities update annually' },
  'LIV-06': { months: 6,  why: 'Numbeo property editions, twice a year' },
  'LIV-07': { months: 6,  why: 'Numbeo cost-of-living editions, twice a year' },
  'LIV-08': { months: 6,  why: 'live Wikidata counts drift continuously; re-run the uniform query to keep the bias demo current' },
  'GRN-01': { months: 24, why: 'WHO Ambient Air Quality DB releases roughly every two years' },
  'GRN-02': { months: 24, why: 'UN-Habitat SDG 11.7.1 sample updates irregularly' },
  'GRN-03': { months: 12, why: 'EDGAR annual releases; UCDB V1.2 adoption decision pending' },
  'GRN-05': { months: 12, why: '40 hand-collected official sources; an annual manual sweep' },
  'GRN-06': { months: 24, why: 'IWA water statistics editions are biennial' },
  'GRN-07': { months: 6,  why: 'ThinkHazard classes are unversioned and can change silently; re-probe twice a year' },
  'SMT-01': { months: 6,  why: 'Ookla open data ships quarterly; a 2-quarter refresh keeps speeds honest' },
  'SMT-02': { months: 6,  why: 'ITU drops data each July and December; Turkiye 0.0 should flip at the next drop' },
  'SMT-03': { months: 24, why: 'UN E-Government Survey (LOSI) is biennial (even years)' },
  'SMT-05': { months: 12, why: 'World Bank WDI internet-use series updates annually' },
  'SMT-04': { months: 12, why: 'ODIN updates annually (~July)' },
  'SMT-06': { months: 12, why: 'IMD Smart City Index publishes each March' },
  'CMP-01': { months: 12, why: 'OECD metro GDP updates annually' },
  'CMP-02': { months: 12, why: 'OECD FUA economy tables update annually' },
  'CMP-03': { months: 12, why: 'Forbes Global 2000 publishes each June' },
  'CMP-04': { months: 6,  why: 'Dealroom is a live database; re-capture twice a year' },
  'CMP-05': { months: 12, why: 'OECD FUA labour tables update annually' },
  'CMP-06': { months: 6,  why: 'Dealroom is a live database; re-capture twice a year' },
  'TAL-01': { months: 12, why: 'labour-force surveys / census-derived shares update annually' },
  'TAL-02': { months: 12, why: 'QS rankings publish each June' },
  'TAL-03': { months: 12, why: 'Eurostat regional KIS series updates annually' },
  'TAL-04': { months: 12, why: 'UNESCO UIS updates annually' },
  'TAL-06': { months: 24, why: 'foreign-born stocks are census/register-based; biennial check' },
  'CON-01': { months: 6,  why: 'Wikipedia airport tables get purged and restored; twice-yearly integrity re-count' },
  'CON-04': { months: 6,  why: 'Numbeo traffic editions, twice a year' },
  'CON-03': { months: 12, why: 'ITDP atlas updates annually' },
  'CON-05': { months: 12, why: 'TomTom Traffic Index publishes each February' },
};

// Standing watch items that are not simple age questions.
const WATCHLIST = [
  'GRN-03: UCDB V1.2 (May 2026) adds international transport and a newer EDGAR release — values will shift; adopting it is a documented version-bump decision.',
  'SMT-02: Turkiye launched commercial 5G in 2026 — Istanbul\'s honest 0.0 should become a real number at the next ITU drop.',
  'SMT-04: ODIN\'s exact Creative Commons variant still needs one publisher confirmation.',
  'GRN-06: IWA reuse permission check still pending.',
  'CON-01: Tokyo, Osaka and Taipei stay blank until their Wikipedia airport tables recover from citation purges — re-check history on each sweep.',
  'TAL-04 / SMT-02: Israel gaps (no UIS FTE density; 2021 ITU estimate) — re-check for newer official figures.',
];

const now = new Date();
const latestDate = (s) => {
  const m = String(s || '').match(/\d{4}-\d{2}(-\d{2})?/g);
  if (!m) return null;
  return m.map(x => new Date(x.length === 7 ? x + '-01' : x)).sort((a, b) => b - a)[0];
};
const monthsBetween = (a, b) => (b - a) / (1000 * 60 * 60 * 24 * 30.44);

const rows = [];
for (const v of P.variables) {
  const prov = (P.provenance || {})[v.id];
  if (!prov) continue; // unsourced (tier 'none') measures have no freshness
  const cad = CADENCE[v.id];
  const retrieved = latestDate(prov.retrieved) || latestDate(prov.edition);
  const age = retrieved ? monthsBetween(retrieved, now) : null;
  let status = 'UNKNOWN', due = null;
  if (cad && age !== null) {
    due = Math.round((cad.months - age) * 10) / 10;
    status = age > cad.months ? 'OVERDUE' : (age > cad.months * 0.75 ? 'DUE SOON' : 'fresh');
  }
  rows.push({
    id: v.id, name: v.name, tier: v.tier,
    retrieved: retrieved ? retrieved.toISOString().slice(0, 10) : '—',
    ageMonths: age === null ? null : Math.round(age * 10) / 10,
    cadence: cad ? cad.months : null, status,
    why: cad ? cad.why : 'no cadence declared — add one to CADENCE in this script',
  });
}
rows.sort((a, b) => (b.ageMonths ?? -1) / (b.cadence || 99) - (a.ageMonths ?? -1) / (a.cadence || 99));

const overdue = rows.filter(r => r.status === 'OVERDUE');
const dueSoon = rows.filter(r => r.status === 'DUE SOON');
const unknown = rows.filter(r => r.status === 'UNKNOWN');

if (process.argv.includes('--md')) {
  console.log(`## Freshness report — ${now.toISOString().slice(0, 10)}`);
  console.log(`\nDataset v${P.meta.version} · ${rows.length} sourced measures · ` +
    `**${overdue.length} overdue**, ${dueSoon.length} due soon, ${rows.length - overdue.length - dueSoon.length - unknown.length} fresh` +
    (unknown.length ? `, ${unknown.length} unknown` : '') + '\n');
  const table = (rs) => {
    console.log('| Measure | Tier | Last verified | Age (mo) | Cadence (mo) | Why this cadence |');
    console.log('|---|---|---|---|---|---|');
    rs.forEach(r => console.log(`| ${r.id} ${r.name} | ${r.tier} | ${r.retrieved} | ${r.ageMonths ?? '—'} | ${r.cadence ?? '—'} | ${r.why} |`));
  };
  if (overdue.length) { console.log('### Overdue\n'); table(overdue); console.log(''); }
  if (dueSoon.length) { console.log('### Due soon\n'); table(dueSoon); console.log(''); }
  console.log('### Standing watch items\n');
  WATCHLIST.forEach(w => console.log('- ' + w));
  console.log('\n### All measures\n');
  table(rows);
  console.log('\n*Ages are computed from each measure\'s own provenance `retrieved` field; ' +
    'cadences are declared in `scripts/check-freshness.js`. This report never blocks anything — ' +
    'it exists so staleness is a visible property, not a quiet one.*');
} else {
  console.log(`FRESHNESS — v${P.meta.version}, ${now.toISOString().slice(0, 10)}: ` +
    `${rows.length} sourced measures — ${overdue.length} OVERDUE, ${dueSoon.length} due soon.`);
  for (const r of rows) {
    if (r.status !== 'fresh') console.log(`  ${r.status.padEnd(9)} ${r.id} ${r.name} — verified ${r.retrieved} (${r.ageMonths}mo old, cadence ${r.cadence}mo): ${r.why}`);
  }
  console.log(`  watchlist: ${WATCHLIST.length} standing items (run with --md for the full report)`);
}
process.exit(0);
