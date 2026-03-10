# People Not Punks

A curated pixel portrait NFT collection built on Base — inspired by early NFT portrait culture, reimagined through identity, individuality, and modern visual curation.

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 3**
- **wagmi v2** + **viem v2** — Ethereum/Base wallet interactions
- **RainbowKit v2** — wallet connection UI
- **TanStack Query v5** — async state management
- **React Router v7** — client-side routing

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured portraits, trait highlights |
| `/collection` | Full portrait collection |
| `/about` | Project background |
| `/faq` | Frequently asked questions |
| `/mint` | Mint interface (state-driven: coming soon / allowlist / public / sold out) |
| `/technical` | Technical and contract details |
| `/creator` | Creator info |

## Getting Started

```bash
npm install
npm run dev
```

### WalletConnect Setup

Before running, replace the placeholder project ID in `src/lib/web3.jsx`:

```js
projectId: 'YOUR_WALLETCONNECT_PROJECT_ID'
```

Get a free project ID at [cloud.walletconnect.com](https://cloud.walletconnect.com).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Status

In development. Supply, price, and contract details are TBD and will be published before launch. The collection deploys on **Base**.
