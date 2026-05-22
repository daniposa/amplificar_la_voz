import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const chroniclesRoot = path.join(__dirname, '../src/app/core/data/chronicles');

const SAMPLE_ALL_LANGS = `  contextInfo: {
    es: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
    fr: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
    en: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
  },`;

const SAMPLE_ES_ONLY = `  contextInfo: {
    es: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
  },`;

function collectChronicleFiles(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      collectChronicleFiles(full, acc);
    } else if (name.endsWith('.ts') && name !== 'index.ts' && name !== '01-soraida-arauquita.ts') {
      acc.push(full);
    }
  }
  return acc;
}

const files = collectChronicleFiles(chroniclesRoot).sort();
let updated = 0;
let skipped = 0;

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  let text = fs.readFileSync(file, 'utf8');
  if (text.includes('contextInfo:')) {
    skipped++;
    continue;
  }
  const block = i % 2 === 0 ? SAMPLE_ALL_LANGS : SAMPLE_ES_ONLY;
  if (!text.trimEnd().endsWith('};')) {
    console.warn('Unexpected ending:', file);
    continue;
  }
  text = text.trimEnd().replace(/\n};\s*$/, ',\n' + block + '\n};\n');
  fs.writeFileSync(file, text);
  updated++;
}

console.log(`Updated ${updated} files, skipped ${skipped} (already had contextInfo).`);
