#!/usr/bin/env node
/**
 * Upload all PNP images to Pinata as a directory.
 * Returns the base CID — images will be accessible at ipfs://<CID>/<filename>
 *
 * Usage: node scripts/upload-images.js
 */

import PinataClient from '@pinata/sdk';
import * as dotenv from 'dotenv';
import { existsSync, readdirSync, writeFileSync } from 'fs';
import { extname, resolve } from 'path';

dotenv.config();

const IMAGES_DIR = process.env.IMAGES_DIR || '/Users/anthony/Desktop/PNP';
if (!process.env.IMAGES_DIR) {
  console.warn(`Warning: IMAGES_DIR not set in .env — using default: ${IMAGES_DIR}`);
}

const { PINATA_API_KEY, PINATA_SECRET_KEY } = process.env;

if (!PINATA_API_KEY || !PINATA_SECRET_KEY) {
  console.error('Missing PINATA_API_KEY or PINATA_SECRET_KEY in .env');
  process.exit(1);
}

if (!existsSync(IMAGES_DIR)) {
  console.error(`Images directory not found: ${IMAGES_DIR}`);
  process.exit(1);
}

const imageFiles = readdirSync(IMAGES_DIR).filter(f =>
  ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(extname(f).toLowerCase())
);

if (imageFiles.length === 0) {
  console.error('No image files found in', IMAGES_DIR);
  process.exit(1);
}

console.log(`Found ${imageFiles.length} images in ${IMAGES_DIR}`);
console.log('Connecting to Pinata...');

const pinata = new PinataClient({ pinataApiKey: PINATA_API_KEY, pinataSecretApiKey: PINATA_SECRET_KEY });

try {
  await pinata.testAuthentication();
  console.log('Pinata authentication OK');
} catch (err) {
  console.error('Pinata authentication failed:', err.message);
  process.exit(1);
}

console.log('Uploading images directory to IPFS (this may take a while)...');

const result = await pinata.pinFromFS(resolve(IMAGES_DIR), {
  pinataMetadata: {
    name: 'PeopleNotPunks-Images',
  },
  pinataOptions: {
    wrapWithDirectory: true,
  },
});

const cid = result.IpfsHash;

console.log('\n✓ Images uploaded successfully');
console.log(`  CID:       ${cid}`);
console.log(`  Gateway:   https://gateway.pinata.cloud/ipfs/${cid}`);
console.log(`  IPFS URI:  ipfs://${cid}`);
writeFileSync('.image-cid', cid, 'utf8');
console.log('\nCID saved to .image-cid — update-metadata-uris.js will read it automatically.');
console.log('Or pass it manually: node scripts/update-metadata-uris.js', cid);
