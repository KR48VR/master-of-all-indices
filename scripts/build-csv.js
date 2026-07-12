#!/usr/bin/env node
// Regenerates dataset.csv from dataset.js (one row per city x sourced measure).
// Usage: node scripts/build-csv.js          -> writes dataset.csv
//        node scripts/build-csv.js --check  -> exits 1 if dataset.csv is out of sync
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
global.window = {};
require(path.join(root, 'dataset.js'));
const P = global.window.INDEX_DATA;

const esc = (s) => {
  if (s === null || s === undefined) return '';
  s = String(s);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

const prov = P.provenance || {};
const sourced = P.variables.filter(v => prov[v.id]);
const header = ['city', 'measure_id', 'measure', 'area', 'subtheme', 'unit', 'direction',
  'data_level', 'approx', 'value', 'year', 'source', 'note'];
const lines = [
  `# ${P.meta.name} v${P.meta.version} (released ${P.meta.released}) — ${P.meta.url}`,
  `# Data license: ${P.meta.dataLicense}`,
  '# A blank value is honest missing data (see the note column), never a zero.',
  header.join(','),
];

for (const v of sourced) {
  for (const city of P.cities) {
    const val = P.data[city][v.id];
    const pc = (prov[v.id].perCity || {})[city] || {};
    lines.push([
      city, v.id, v.name, v.domain, v.subtheme, v.unit, v.direction, v.dataLevel, v.approx,
      (val === null || val === undefined) ? '' : val,
      pc.year || '', pc.source || prov[v.id].source || '', pc.note || '',
    ].map(esc).join(','));
  }
}
const out = lines.join('\n') + '\n';
const target = path.join(root, 'dataset.csv');

if (process.argv.includes('--check')) {
  const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : '';
  if (current !== out) {
    console.error('FAIL: dataset.csv is out of sync with dataset.js — run: node scripts/build-csv.js');
    process.exit(1);
  }
  console.log('OK: dataset.csv is in sync with dataset.js');
} else {
  fs.writeFileSync(target, out);
  console.log(`wrote dataset.csv (${sourced.length} measures x ${P.cities.length} cities)`);
}
