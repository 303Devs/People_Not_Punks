import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useChainId } from 'wagmi'
import { base } from 'wagmi/chains'

// Flip this to change the mint UI state:
// 'coming_soon' | 'allowlist' | 'public' | 'sold_out'
const MINT_STATUS = 'coming_soon'

const mintInfo = [
  { label: 'Supply',         value: 'TBD' },
  { label: 'Price',          value: 'TBD' },
  { label: 'Max per wallet', value: 'TBD' },
  { label: 'Chain',          value: 'Base' },
  { label: 'Contract',       value: 'Not yet deployed' },
  { label: 'Phase',          value: 'Coming Soon' },
  { label: 'Reveal',         value: 'TBD' },
]

const statusConfig = {
  coming_soon: { label: 'Coming Soon',      dot: 'bg-graphite',  text: 'text-bone/50' },
  allowlist:   { label: 'Allowlist Live',   dot: 'bg-violet',    text: 'text-violet' },
  public:      { label: 'Public Mint Live', dot: 'bg-eteal animate-pulse', text: 'text-eteal' },
  sold_out:    { label: 'Sold Out',         dot: 'bg-graphite',  text: 'text-bone/50' },
}

function MintWidget() {
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const onBase = chainId === base.id

  if (MINT_STATUS === 'coming_soon' || MINT_STATUS === 'sold_out') {
    return (
      <div className="border border-graphite p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className={`w-2 h-2 rounded-full ${statusConfig[MINT_STATUS].dot}`} />
          <span className={`text-sm font-mono ${statusConfig[MINT_STATUS].text}`}>
            {statusConfig[MINT_STATUS].label}
          </span>
        </div>
        <p className="text-bone/40 text-sm font-light leading-relaxed max-w-sm mx-auto">
          {MINT_STATUS === 'coming_soon'
            ? 'Mint is not yet open. Details will be published clearly before launch.'
            : 'This collection has sold out.'}
        </p>
      </div>
    )
  }

  return (
    <div className="border border-graphite p-8 space-y-6">
      <div>
        <p className="section-label mb-4">Wallet</p>
        <ConnectButton />
      </div>

      {isConnected && !onBase && (
        <div className="border border-red-800/50 bg-red-950/20 p-4">
          <p className="text-xs text-red-400">
            Wrong network. Please switch to Base to mint.
          </p>
        </div>
      )}

      {isConnected && onBase && (
        <div className="space-y-4">
          <div>
            <p className="section-label mb-3">Quantity</p>
            <div className="flex items-center gap-4">
              <button className="w-9 h-9 border border-graphite text-bone hover:border-violet transition-colors">−</button>
              <span className="text-bone w-8 text-center">1</span>
              <button className="w-9 h-9 border border-graphite text-bone hover:border-violet transition-colors">+</button>
            </div>
          </div>
          <button className="btn-primary w-full text-center">
            {MINT_STATUS === 'allowlist' ? 'Mint (Allowlist)' : 'Mint'}
          </button>
        </div>
      )}
    </div>
  )
}

export default function Mint() {
  const status = statusConfig[MINT_STATUS]

  return (
    <main className="flex-1">

      {/* ── Intro — dark ── */}
      <section className="bg-void pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">Mint</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-bone leading-tight tracking-tight mb-6 max-w-2xl">
            Mint People Not Punks
          </h1>
          <p className="text-bone/60 font-light leading-relaxed text-lg max-w-lg">
            A curated pixel portrait collection built with a more human lens.
          </p>
        </div>
      </section>

      {/* ── Mint info + widget — dark ── */}
      <section className="bg-void border-t border-graphite py-20">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">

            {/* Status + info */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                <span className={`text-sm font-mono ${status.text}`}>{status.label}</span>
              </div>
              <div className="border border-graphite">
                {mintInfo.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-baseline px-5 py-4 border-b border-graphite last:border-b-0">
                    <span className="text-xs text-bone/40 font-mono uppercase tracking-wider">{label}</span>
                    <span className="text-sm text-bone">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget */}
            <div>
              <p className="section-label mb-6">
                {MINT_STATUS === 'coming_soon' ? 'Status' : 'Mint'}
              </p>
              <MintWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparency — light ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container max-w-3xl">
          <p className="section-label mb-4">Transparency</p>
          <p className="text-graphite font-light leading-relaxed text-base">
            People Not Punks is designed with clarity in mind. Mint details, contract information,
            and release terms will be published clearly before launch.
          </p>
        </div>
      </section>

    </main>
  )
}
