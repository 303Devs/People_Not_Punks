// scripts/deploy.cjs
// Run: npx hardhat run scripts/deploy.cjs --network baseSepolia
//      npx hardhat run scripts/deploy.cjs --network base

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Deployer:        ", deployer.address);
  console.log("Balance:         ", ethers.formatEther(balance), "ETH");

  // ── Configure before mainnet deploy ─────────────────────────────────────────
  // Price in ETH — set MINT_PRICE_ETH in .env, or defaults to 0.01.
  const MINT_PRICE_ETH = process.env.MINT_PRICE_ETH || "0.01";
  const MINT_PRICE     = ethers.parseEther(MINT_PRICE_ETH);

  // Set BASE_URI in .env after running upload-metadata.js.
  // Format: "ipfs://<CID>/"  — trailing slash required so tokenURI returns "<baseURI><id>"
  const BASE_URI = process.env.BASE_URI || "";
  if (!BASE_URI || BASE_URI.includes("YOUR_CID_HERE")) {
    console.error("\nERROR: BASE_URI is not set or still contains the placeholder.");
    console.error("  Run upload-metadata.js to get your CID, then set BASE_URI in .env:");
    console.error("  BASE_URI=ipfs://<your-CID>/");
    process.exit(1);
  }
  // ────────────────────────────────────────────────────────────────────────────

  console.log("\nDeploying PeopleNotPunks...");
  console.log("  Mint price:", MINT_PRICE_ETH, "ETH");
  console.log("  Base URI:  ", BASE_URI);

  const PeopleNotPunks = await ethers.getContractFactory("PeopleNotPunks");
  const contract       = await PeopleNotPunks.deploy(MINT_PRICE, BASE_URI);
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("\nPeopleNotPunks deployed to:", address);

  console.log("\n── Verify on Basescan ──────────────────────────────────────────");
  console.log(
    `npx hardhat verify --network <network> ${address} "${MINT_PRICE.toString()}" "${BASE_URI}"`
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
