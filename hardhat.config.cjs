// hardhat.config.cjs  (CommonJS — required because package.json has "type": "module")
require("@nomicfoundation/hardhat-toolbox");

// Load .env if present (dotenv is included with hardhat-toolbox)
try { require("dotenv").config(); } catch (_) {}

const PRIVATE_KEY      = process.env.PRIVATE_KEY      || "0x" + "0".repeat(64);
const BASESCAN_API_KEY = process.env.BASESCAN_API_KEY || "";

/** @type {import('hardhat/config').HardhatUserConfig} */
module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "cancun",
    },
  },

  networks: {
    // Base Mainnet
    base: {
      url:      process.env.BASE_RPC_URL      || "https://mainnet.base.org",
      accounts: [PRIVATE_KEY],
      chainId:  8453,
    },
    // Base Sepolia Testnet
    baseSepolia: {
      url:      process.env.BASE_SEPOLIA_RPC_URL || "https://sepolia.base.org",
      accounts: [PRIVATE_KEY],
      chainId:  84532,
    },
  },

  // Contract verification via Basescan
  etherscan: {
    apiKey: {
      base:        BASESCAN_API_KEY,
      baseSepolia: BASESCAN_API_KEY,
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL:     "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL:     "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },

  // Gas reporter (set REPORT_GAS=true in env to enable)
  gasReporter: {
    enabled:  process.env.REPORT_GAS === "true",
    currency: "USD",
  },
};
