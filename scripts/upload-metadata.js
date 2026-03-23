#!/usr/bin/env node
/**
 * Upload all PNP metadata JSON files to Pinata as a directory.
 * Returns the base CID — metadata will be accessible at ipfs://<CID>/<tokenId>
 *
 * Run this AFTER:
 *   1. upload-images.js  → get IMAGE_CID
 *   2. update-metadata-uris.js <IMAGE_CID>  → patch all JSON files
 *
 * Usage: node scripts/upload-metadata.js
 */

import PinataClient from '@pinata/sdk';
import * as dotenv from 'dotenv';
import { existsSync, readdirSync, writeFileSync } from 'fs';
import { extname, resolve } from 'path';

dotenv.config();

const METADATA_DIR = process.env.METADATA_DIR || '/Users/anthony/Desktop/PNP/metadata';
if (!process.env.METADATA_DIR) {
  console.warn(`Warning: METADATA_DIR not set in .env — using default: ${METADATA_DIR}`);
}

const { PINATA_API_KEY, PINATA_SECRET_KEY } = process.env;

if (!PINATA_API_KEY || !PINATA_SECRET_KEY) {
  console.error('Missing PINATA_API_KEY or PINATA_SECRET_KEY in .env');
  process.exit(1);
}

if (!existsSync(METADATA_DIR)) {
  console.error(`Metadata directory not found: ${METADATA_DIR}`);
  console.error('Generate your metadata JSON files and run update-metadata-uris.js first.');
  process.exit(1);
}

const jsonFiles = readdirSync(METADATA_DIR).filter(f => extname(f) === '.json');

if (jsonFiles.length === 0) {
  console.error('No JSON files found in', METADATA_DIR);
  process.exit(1);
}

console.log(`Found ${jsonFiles.length} metadata files in ${METADATA_DIR}`);
console.log('Connecting to Pinata...');

const pinata = new PinataClient({ pinataApiKey: PINATA_API_KEY, pinataSecretApiKey: PINATA_SECRET_KEY });

try {
  await pinata.testAuthentication();
  console.log('Pinata authentication OK');
} catch (err) {
  console.error('Pinata authentication failed:', err.message);
  process.exit(1);
}

console.log('Uploading metadata directory to IPFS...');

const result = await pinata.pinFromFS(resolve(METADATA_DIR), {
  pinataMetadata: {
    name: 'PeopleNotPunks-Metadata',
  },
  pinataOptions: {
    wrapWithDirectory: true,
  },
});

const cid = result.IpfsHash;

console.log('\n✓ Metadata uploaded successfully');
console.log(`  CID:       ${cid}`);
console.log(`  Gateway:   https://gateway.pinata.cloud/ipfs/${cid}`);
console.log(`  IPFS URI:  ipfs://${cid}`);
writeFileSync('.metadata-cid', cid, 'utf8');
console.log('\nCID saved to .metadata-cid for reference.');
console.log('\nUse this as your baseURI in the smart contract:');
console.log(`  ipfs://${cid}/`);
console.log('\nSet in .env before deploying:');
console.log(`  BASE_URI=ipfs://${cid}/`);
console.log('\n(Token #1 metadata will resolve to: ipfs://' + cid + '/1)');
