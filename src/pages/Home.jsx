import { Link } from 'react-router-dom'
import PortraitPlaceholder from '../components/PortraitPlaceholder'

const stats = [
  { label: 'Supply', value: 'TBD' },
  { label: 'Format', value: 'Curated pixel portraits' },
  { label: 'Metadata', value: 'Identity-forward' },
  { label: 'Chain', value: 'Base' },
  { label: 'Status', value: 'In Development' },
]

const traitHighlights = [
  { name: 'Head Shapes', desc: 'Distinct silhouettes that anchor every portrait.' },
  { name: 'Skin Tones', desc: 'A broad, considered range — built with the same attention as every other trait.' },
  { name: 'Hair', desc: 'From grounded everyday styles to bold, fashion-forward expressions.' },
  { name: 'Pronouns', desc: 'One layer of the identity system — present naturally, not performatively.' },
]

export default function Home() {
  return (
    <main className="flex-1">

      {/* ── Hero — dark ── */}
      <section className="bg-void pt-40 pb-28">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="section-label mb-6">People Not Punks</p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-bone leading-[1.0] tracking-tight mb-6">
              More human<br />by design.
            </h1>
            <p className="text-base text-bone/60 font-light leading-relaxed max-w-lg mb-12">
              A curated pixel portrait collection inspired by early NFT culture and reimagined
              through identity, individuality, and modern visual curation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/collection" className="btn-primary">View Collection</Link>
              <Link to="/mint"       className="btn-secondary-dark">Explore Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured portraits — dark ── */}
      <section className="bg-void border-t border-graphite py-20">
        <div className="page-container">
          <p className="section-label mb-10">Featured Portraits</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-graphite">
            {Array.from({ length: 6 }).map((_, i) => (
              <PortraitPlaceholder key={i} index={i} />
            ))}
          </div>
          <p className="text-xs text-bone/30 font-mono mt-4">
            Portraits shown are placeholders — final art coming soon.
          </p>
        </div>
      </section>

      {/* ── Concept statement — light ── */}
      <section className="bg-bone border-t border-mist py-24">
        <div className="page-container max-w-3xl">
          <p className="section-label mb-8">The Concept</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-void leading-snug mb-6">
            A polished homage to early NFT portrait culture, reimagined through a more human lens.
          </h2>
          <p className="text-graphite font-light leading-relaxed text-base">
            People Not Punks keeps the clarity and collectibility of pixel portraiture while
            refining the art direction, trait system, and overall visual language to feel more
            cohesive, more expressive, and more considered.
          </p>
        </div>
      </section>

      {/* ── Trait philosophy — light ── */}
      <section className="bg-bone border-t border-mist py-24">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-8">Portrait-first by design</p>
              <p className="text-graphite font-light leading-relaxed text-base max-w-md">
                The collection is built around a structured portrait system. Every design decision
                starts with the portrait — not the trait spreadsheet. The result is a collection
                that feels expressive and collectible without losing visual cohesion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-mist">
              {traitHighlights.map((t) => (
                <div key={t.name} className="bg-bone p-6">
                  <p className="text-sm text-void font-medium mb-2">{t.name}</p>
                  <p className="text-xs text-graphite leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Collection snapshot — dark panel ── */}
      <section className="bg-graphite border-t border-graphite py-20">
        <div className="page-container">
          <p className="section-label mb-10">Collection Overview</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-void/40">
            {stats.map(({ label, value }) => (
              <div key={label} className="bg-graphite p-6">
                <p className="section-label mb-3">{label}</p>
                <p className="text-base text-bone font-light">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark ── */}
      <section className="bg-void border-t border-graphite py-28">
        <div className="page-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-bone mb-4">
            Explore the collection
          </h2>
          <p className="text-bone/50 mb-10 text-base font-light">
            See the portraits, trait system, and project details.
          </p>
          <Link to="/collection" className="btn-primary">View Collection</Link>
        </div>
      </section>

    </main>
  )
}
