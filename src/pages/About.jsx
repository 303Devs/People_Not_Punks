const differentiators = [
  { title: 'Origin in craft',           desc: 'Every portrait began as a handmade pixel drawing. The AI output is built on that foundation — not generated from scratch.' },
  { title: 'Identity-forward metadata', desc: 'Character metadata built around who someone is, not just what they wear.' },
  { title: 'Curated visual system',     desc: 'Composition, silhouette, and color are as considered as any individual trait.' },
  { title: 'Proceeds to the commons',   desc: 'All mint proceeds flow directly into the CurrencyForCivilization liquidity pool. This collection is not for profit.' },
  { title: 'Homage without imitation',  desc: 'References the era clearly, then does its own thing.' },
]

const beforeAfterPairs = [
  { id: '001', pixel: '/portraits/originals/peopleNotPunks_0001.jpg', real: '/portraits/001.png' },
  { id: '050', pixel: '/portraits/originals/peopleNotPunks_0050.jpg', real: '/portraits/050.png' },
  { id: '075', pixel: '/portraits/originals/peopleNotPunks_0075.jpg', real: '/portraits/075.png' },
  { id: '150', pixel: '/portraits/originals/peopleNotPunks_0150.jpg', real: '/portraits/150.png' },
  { id: '400', pixel: '/portraits/originals/peopleNotPunks_0400.jpg', real: '/portraits/400.png' },
  { id: '425', pixel: '/portraits/originals/peopleNotPunks_0425.jpg', real: '/portraits/425.png' },
]

function BeforeAfterShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-graphite">
      {beforeAfterPairs.map((pair) => (
        <div key={pair.id} className="bg-void">
          <div className="flex">
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
        </div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <main className="flex-1">

      {/* ── Intro — dark ── */}
      <section className="bg-void pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">About People Not Punks</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-bone leading-[1.1] tracking-tight mb-8 max-w-2xl">
            The pixel is the seed.<br />The portrait is the form.
          </h1>
          <p className="text-bone/60 font-light leading-relaxed text-lg max-w-xl">
            People Not Punks started with a handmade pixel portrait of every subject — 500 of them, drawn in the tradition of CryptoPunks-era collectibles. Those drawings were not discarded. They became the structural blueprint for what came next: photorealistic AI-generated portraits, built from the same underlying faces.
          </p>
        </div>
      </section>

      {/* ── Brand story — light ── */}
      <section className="bg-bone border-t border-mist py-24">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            <div>
              <p className="section-label mb-6">Origin</p>
              <p className="text-graphite font-light leading-relaxed">
                The collectible pixel portrait has a specific place in NFT history. It is the format that defined the space — simple, distinct, and wildly collectible. People Not Punks starts there.
              </p>
              <p className="text-graphite font-light leading-relaxed mt-4">
                Each portrait in this collection was originally drawn by hand, in pixel art. Those 500 drawings established the face shapes, features, and character logic that the collection is built on. The pixel art is the DNA.
              </p>
            </div>
            <div>
              <p className="section-label mb-6">The evolution</p>
              <p className="text-graphite font-light leading-relaxed">
                The pixel originals were then transformed using AI into photorealistic portrait photographs — the same people, rendered in a different medium. The result carries that handmade origin forward into a new visual register.
              </p>
              <p className="text-graphite font-light leading-relaxed mt-4">
                These portraits are AI-generated. They are not intended to represent any real person, living or dead. The characters exist entirely within the world of the collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before/after showcase — dark ── */}
      <section className="bg-void border-t border-graphite py-20">
        <div className="page-container">
          <p className="section-label text-amber mb-10">From pixel to portrait</p>
          <BeforeAfterShowcase />
          <p className="text-xs text-amber/40 font-mono mt-4">
            Left: original pixel art. Right: photorealistic AI portrait. Same face — different medium.
          </p>
        </div>
      </section>

      {/* ── What makes it different — light ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container">
          <p className="section-label mb-10">What makes it different</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-amber">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-bone p-7">
                <p className="text-sm text-void font-medium mb-3">{d.title}</p>
                <p className="text-xs text-graphite leading-relaxed">{d.desc}</p>
              </div>
            ))}
            <div className="bg-bone p-7" />
          </div>
        </div>
      </section>

      {/* ── Creative philosophy — dark ── */}
      <section className="bg-void border-t border-graphite py-24">
        <div className="page-container max-w-3xl">
          <p className="section-label text-amber mb-8">Why "People Not Punks"?</p>
          <p className="text-bone/70 font-light leading-relaxed text-lg">
            The name reflects the project's point of view. It acknowledges the legacy of pixel
            portrait collectibles while deliberately shifting focus toward people — their style,
            individuality, and broader range of identity.
          </p>
          <p className="text-bone/70 font-light leading-relaxed text-lg mt-6">
            It is not anti-punk. It is post-punk. It respects what came before and then moves on.
          </p>
        </div>
      </section>

    </main>
  )
}
