const traitCategories = [
  { name: 'Skin Tone',        desc: 'A broad, deliberate range — built with the same attention as every other trait.' },
  { name: 'Eyes',             desc: 'The most expressive layer. Small shifts carry enormous personality.' },
  { name: 'Mouth Expression', desc: 'One of the quieter traits — and one of the most defining.' },
  { name: 'Hair',             desc: 'One of the collection\'s strongest identity layers, ranging from everyday styles to bold, fashion-forward expressions.' },
  { name: 'Headwear',         desc: 'A signature strength — sits naturally and forms a strong, readable silhouette.' },
  { name: 'Pronouns',         desc: 'One layer of the identity system — she/her, he/him, they/them, and more.' },
]

// 12 gallery portraits using available files
const galleryPortraits = [
  { file: '/portraits/001.png', label: '#001' },
  { file: '/portraits/002.png', label: '#002' },
  { file: '/portraits/003.png', label: '#003' },
  { file: '/portraits/004.png', label: '#004' },
  { file: '/portraits/005.png', label: '#005' },
  { file: '/portraits/006.png', label: '#006' },
  { file: '/portraits/007.png', label: '#007' },
  { file: '/portraits/050.png', label: '#050' },
  { file: '/portraits/075.png', label: '#075' },
  { file: '/portraits/150.png', label: '#150' },
  { file: '/portraits/400.png', label: '#400' },
  { file: '/portraits/425.png', label: '#425' },
]

export default function Collection() {
  return (
    <main className="flex-1">

      {/* ── Intro — dark ── */}
      <section className="bg-void pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">The Collection</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-bone leading-[1.1] tracking-tight mb-8 max-w-2xl">
            Built as a portrait system.
          </h1>
          <p className="text-bone/60 font-light leading-relaxed text-lg max-w-xl">
            People Not Punks is built as a portrait system rather than a stack of random traits.
            Each of the 500 pieces is designed to feel distinct, readable, and individual — while remaining
            part of a cohesive visual language.
          </p>
        </div>
      </section>

      {/* ── Gallery grid — dark ── */}
      <section className="bg-void border-t border-graphite py-20">
        <div className="page-container">
          <p className="section-label mb-10">Portraits</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-graphite">
            {galleryPortraits.map((p) => (
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

      {/* ── Trait categories — light ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container">
          <p className="section-label mb-10">Trait System</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-amber">
            {traitCategories.map((t) => (
              <div key={t.name} className="bg-bone p-7">
                <p className="text-sm text-void font-medium mb-3">{t.name}</p>
                <p className="text-xs text-graphite leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-graphite/40 font-mono mt-6">14 trait categories in total. The rest are yours to discover.</p>
        </div>
      </section>

      {/* ── Curation statement — dark ── */}
      <section className="bg-void border-t border-graphite py-24">
        <div className="page-container max-w-3xl">
          <p className="section-label text-amber mb-8">Curated, not chaotic</p>
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
