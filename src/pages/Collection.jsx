import PortraitPlaceholder from '../components/PortraitPlaceholder'

const traitCategories = [
  { name: 'Head Shapes',    desc: 'Strong silhouettes that anchor every portrait and make each one immediately readable.' },
  { name: 'Skin Tones',     desc: 'A broad, deliberate range — built with the same attention as every other trait.' },
  { name: 'Eyes',           desc: 'The most expressive layer. Small shifts in eye design carry enormous personality.' },
  { name: 'Hair',           desc: 'One of the collection\'s strongest identity layers, ranging from everyday styles to bold, fashion-forward expressions.' },
  { name: 'Headwear',       desc: 'A signature strength — hats that sit naturally on the skull and form a strong, readable silhouette.' },
  { name: 'Eyewear',        desc: 'Statement eyewear is rare. When present, the portrait still leads.' },
  { name: 'Facial Hair',    desc: 'Present in some portraits, absent in others — always intentional.' },
  { name: 'Clothing',       desc: 'Anchors the portrait without competing with the face.' },
  { name: 'Backgrounds',    desc: 'A controlled palette. Never washes out the portrait.' },
  { name: 'Pronouns',       desc: 'One layer of the identity system — she/her, he/him, they/them, and more.' },
]

export default function Collection() {
  return (
    <main className="flex-1">

      {/* ── Intro — light ── */}
      <section className="bg-bone pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">The Collection</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-void leading-tight tracking-tight mb-8 max-w-2xl">
            Built as a portrait system.
          </h1>
          <p className="text-graphite font-light leading-relaxed text-lg max-w-xl">
            People Not Punks is built as a portrait system rather than a stack of random traits.
            Each piece is designed to feel distinct, readable, and individual — while remaining
            part of a cohesive visual language.
          </p>
        </div>
      </section>

      {/* ── Gallery grid — dark ── */}
      <section className="bg-void border-t border-graphite py-20">
        <div className="page-container">
          <p className="section-label mb-10">Portraits</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-graphite">
            {Array.from({ length: 12 }).map((_, i) => (
              <PortraitPlaceholder key={i} index={i} />
            ))}
          </div>
          <p className="text-xs text-bone/30 font-mono mt-4">
            Portraits shown are placeholders. Final collection art coming soon.
          </p>
        </div>
      </section>

      {/* ── Trait categories — light ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container">
          <p className="section-label mb-10">Trait System</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-mist">
            {traitCategories.map((t) => (
              <div key={t.name} className="bg-bone p-7">
                <p className="text-sm text-void font-medium mb-3">{t.name}</p>
                <p className="text-xs text-graphite leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curation statement — dark ── */}
      <section className="bg-void border-t border-graphite py-24">
        <div className="page-container max-w-3xl">
          <p className="section-label mb-8">Curated, not chaotic</p>
          <p className="text-bone/70 font-light leading-relaxed text-lg">
            The project favors strong silhouettes, deliberate color relationships, and portrait
            clarity. Rarity comes from design quality and distinctiveness — not visual weirdness.
            Common portraits feel desirable. Rare portraits feel elevated.
          </p>
        </div>
      </section>

    </main>
  )
}
