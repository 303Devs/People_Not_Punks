#!/usr/bin/env node
/**
 * After images are uploaded, update all metadata JSON files so that
 * the "image" field points to the correct IPFS CID.
 *
 * Expects metadata JSON files to have:
 *   "image": "ipfs://PLACEHOLDER/<filename>"
 * or any value containing the literal string PLACEHOLDER.
 *
 * Usage: node scripts/update-metadata-uris.js <IMAGE_CID>
 *
 * Example:
 *   node scripts/update-metadata-uris.js QmXxxx...
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { extname, join, resolve } from 'path';

const METADATA_DIR = process.env.METADATA_DIR || '/Users/anthony/Desktop/PNP/metadata';
if (!process.env.METADATA_DIR) {
  console.warn(`Warning: METADATA_DIR not set in .env — using default: ${METADATA_DIR}`);
}
const PLACEHOLDER = 'PLACEHOLDER';

let [, , IMAGE_CID] = process.argv;

// Fall back to reading the CID saved by upload-images.js
if (!IMAGE_CID && existsSync('.image-cid')) {
  IMAGE_CID = readFileSync('.image-cid', 'utf8').trim();
  console.log(`Using IMAGE_CID from .image-cid: ${IMAGE_CID}`);
}

if (!IMAGE_CID) {
  console.error('Usage: node scripts/update-metadata-uris.js <IMAGE_CID>');
  console.error('  IMAGE_CID is the CID returned by upload-images.js');
  console.error('  Or run upload-images.js first — it saves the CID to .image-cid automatically.');
  process.exit(1);
}

if (IMAGE_CID.length < 10) {
  console.error('IMAGE_CID looks too short — double-check the value');
  process.exit(1);
}

if (!existsSync(METADATA_DIR)) {
  console.error(`Metadata directory not found: ${METADATA_DIR}`);
  console.error('Generate your metadata JSON files first, then run this script.');
  process.exit(1);
}

const jsonFiles = readdirSync(METADATA_DIR).filter(f => extname(f) === '.json');

if (jsonFiles.length === 0) {
  console.error('No JSON files found in', METADATA_DIR);
  process.exit(1);
}

console.log(`Updating ${jsonFiles.length} metadata files with IMAGE_CID: ${IMAGE_CID}`);

let updated = 0;
let skipped = 0;

for (const file of jsonFiles) {
  const filePath = join(resolve(METADATA_DIR), file);
  const raw = readFileSync(filePath, 'utf8');

  if (!raw.includes(PLACEHOLDER)) {
    skipped++;
    continue;
  }

  const newContent = raw.replaceAll(PLACEHOLDER, IMAGE_CID);
  writeFileSync(filePath, newContent, 'utf8');
  updated++;
}

console.log(`\n✓ Done`);
console.log(`  Updated: ${updated} files`);
if (skipped > 0) {
  console.log(`  Skipped: ${skipped} files (no ${PLACEHOLDER} found — already updated?)`);
}
console.log('\nNext: run upload-metadata.js to pin the metadata to IPFS');
