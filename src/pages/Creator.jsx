export default function Creator() {
  return (
    <main className="flex-1">

      {/* ── Intro — dark ── */}
      <section className="bg-void pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">Creator</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-bone leading-[1.1] tracking-tight mb-8 max-w-2xl">
            Built end-to-end.
          </h1>
          <p className="text-bone/60 font-light leading-relaxed text-lg max-w-xl">
            People Not Punks is a digital collectible project and launch-ready Web3 product
            built on a photorealistic AI portrait system. The project began as 500 handmade
            pixel drawings — a reinterpretation of early NFT portrait culture — and evolved
            into a broader exercise in art direction, identity design, trait architecture,
            branding, and product strategy. The collection is part of the Civil Protocol
            ecosystem, with all proceeds directed to the CurrencyForCivilization liquidity pool.
          </p>
        </div>
      </section>

      {/* ── Work areas — light ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-px bg-amber">
            {[
              { area: 'Concept & Vision',   desc: 'Project direction, cultural framing, and product positioning within the Civil Protocol ecosystem.' },
              { area: 'Art Direction',       desc: 'Portrait system design, AI generation pipeline, trait architecture, and visual curation.' },
              { area: 'Identity System',     desc: 'Naming, brand language, metadata design, and character philosophy across 14 trait categories.' },
              { area: 'Technical Build',     desc: 'Smart contract, mint site, IPFS metadata infrastructure, and deployment on Base.' },
            ].map(({ area, desc }) => (
              <div key={area} className="bg-bone p-7">
                <p className="text-sm text-void font-medium mb-3">{area}</p>
                <p className="text-xs text-graphite leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-mist">
            <p className="section-label mb-4">Contact</p>
            <p className="text-graphite font-light leading-relaxed text-sm">
              Details coming soon.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
