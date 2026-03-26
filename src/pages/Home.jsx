import { Link } from 'react-router-dom'

const stats = [
  { label: 'Supply',   value: '500' },
  { label: 'Format',   value: 'Photorealistic AI portraits' },
  { label: 'Metadata', value: 'Identity-forward' },
  { label: 'Chain',    value: 'Base' },
  { label: 'Status',   value: 'In Development' },
]

const traitHighlights = [
  { name: 'Eyes',      desc: 'The most expressive layer. The rest of the portrait answers to them.' },
  { name: 'Hair',      desc: 'One of the collection\'s strongest identity signals. From cropped to cascading.' },
  { name: 'Headwear',  desc: 'A signature category. When it\'s there, it owns the frame.' },
  { name: 'Pronouns',  desc: 'One layer of the identity system — present naturally, not performed.' },
]

// Before/after pairs for the home showcase (smaller version)
const showcasePairs = [
  { id: '001', pixel: '/portraits/originals/peopleNotPunks_0001.jpg', real: '/portraits/001.png' },
  { id: '050', pixel: '/portraits/originals/peopleNotPunks_0050.jpg', real: '/portraits/050.png' },
  { id: '075', pixel: '/portraits/originals/peopleNotPunks_0075.jpg', real: '/portraits/075.png' },
]

// Featured portrait images (6 picks from Pablo's list)
const featuredPortraits = [
  { file: '/portraits/001.png', label: '#001' },
  { file: '/portraits/050.png', label: '#050' },
  { file: '/portraits/075.png', label: '#075' },
  { file: '/portraits/150.png', label: '#150' },
  { file: '/portraits/400.png', label: '#400' },
  { file: '/portraits/425.png', label: '#425' },
]

export default function Home() {
  return (
    <main className="flex-1">

      {/* ── Hero — dark ── */}
      <section className="bg-void pt-40 pb-28">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="section-label mb-6">People Not Punks</p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-bone leading-[0.95] tracking-tight mb-8">
              More human<br />by design.
            </h1>
            <p className="text-base text-bone/60 font-light leading-relaxed max-w-lg mb-12">
              500 photorealistic portraits. Each one began as a handmade pixel drawing. Each one was then rendered into the face you see now.
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
          <p className="section-label text-amber mb-10">Featured Portraits</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-graphite">
            {featuredPortraits.map((p) => (
              <div key={p.file} className="relative aspect-square overflow-hidden bg-void group cursor-pointer">
                <img
                  src={p.file}
                  alt="People Not Punks portrait"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Concept statement — light ── */}
      <section className="bg-bone border-t border-mist py-24">
        <div className="page-container max-w-3xl">
          <p className="section-label mb-8">The Concept</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-void leading-snug mb-6">
            A homage to early NFT portrait culture, evolved into something more human.
          </h2>
          <p className="text-graphite font-light leading-relaxed text-base">
            People Not Punks started as 500 handmade pixel portraits — drawn in the spirit of CryptoPunks-era NFT culture. Those originals became the foundation. The collection you are looking at now is what they turned into: photorealistic AI-generated portraits, built from that pixel DNA.
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
                The collection is built around a portrait system across 14 trait categories. Every design decision starts with the face — not the spreadsheet. The result is a collection that holds together as a set while letting each portrait stand on its own.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-amber">
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

      {/* ── Before/after mini showcase — dark ── */}
      <section className="bg-void border-t border-graphite py-20">
        <div className="page-container">
          <p className="section-label text-amber mb-10">Pixel → Portrait</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-graphite">
            {showcasePairs.map((pair) => (
              <div key={pair.id} className="bg-void flex">
                <div className="flex-1 aspect-square overflow-hidden group cursor-pointer">
                  <img
                    src={pair.pixel}
                    alt="People Not Punks pixel original"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    style={{ imageRendering: 'pixelated' }}
                    loading="lazy"
                  />
                </div>
                <div className="w-px bg-amber/50" />
                <div className="flex-1 aspect-square overflow-hidden group cursor-pointer">
                  <img
                    src={pair.real}
                    alt="People Not Punks portrait"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-bone/30 font-mono mt-4">
            Each portrait began as a handmade pixel drawing. See the full story on <Link to="/about" className="underline hover:text-bone/60 transition-colors">About</Link>.
          </p>
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
