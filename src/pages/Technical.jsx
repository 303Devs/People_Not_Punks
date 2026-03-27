export default function Technical() {
  return (
    <main className="flex-1">

      {/* ── Intro — dark ── */}
      <section className="bg-void pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">Technical Details</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-bone leading-[1.1] tracking-tight mb-8 max-w-2xl">
            Built with intention.
          </h1>
          <p className="text-bone/60 font-light leading-relaxed text-lg max-w-xl">
            This project is built as a professional end-to-end collectible product, with
            attention to art systems, metadata design, contract structure, and mint experience.
          </p>
        </div>
      </section>

      {/* ── Contract — light ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container max-w-4xl space-y-16">

          <div>
            <p className="section-label mb-6">Contract</p>
            <div className="border border-mist">
              {[
                ['Standard',        'ERC-721'],
                ['Chain',           'Base (Ethereum L2)'],
                ['Royalties',       'TBD'],
                ['Mint logic',      'TBD'],
                ['Allowlist',       'TBD'],
                ['Reveal approach', 'TBD'],
                ['Contract address','Not yet deployed'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-baseline px-5 py-4 border-b border-mist last:border-b-0">
                  <span className="text-xs text-graphite font-mono uppercase tracking-wider">{label}</span>
                  <span className="text-sm text-void">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metadata */}
          <div>
            <p className="section-label mb-6">Metadata Architecture</p>
            <div className="grid sm:grid-cols-2 gap-px bg-amber">
              {[
                { title: 'Trait structure',     desc: 'A layered portrait system across 20 categories: skin tone, face shape, eyes, brows, mouth expression, hair, head hair color, hair accessory, facial hair, facial hair color, headwear, eyewear, facewear, ear accessory, neckwear, clothing, background, border, and profile.' },
                { title: 'Pronoun metadata',    desc: 'Pronouns are included as an identity-layer trait — present in the metadata as one part of a broader character profile.' },
                { title: 'Image hosting',       desc: 'Images and metadata are stored on IPFS for long-term, decentralized permanence.' },
                { title: 'Metadata permanence', desc: 'Full metadata schema will be published before launch.' },
              ].map((item) => (
                <div key={item.title} className="bg-bone p-7">
                  <p className="text-sm text-void font-medium mb-3">{item.title}</p>
                  <p className="text-xs text-graphite leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design system */}
          <div>
            <p className="section-label mb-6">Design System Notes</p>
            <div className="grid sm:grid-cols-3 gap-px bg-amber">
              {[
                { title: 'Curated output policy',    desc: 'Not every AI-generated output ships. The final set is reviewed for visual coherence and portrait quality before publication.' },
                { title: 'Portrait-first philosophy',desc: 'Every design decision starts with the face. Rarity emerges from the system — not from arbitrary weight tables.' },
                { title: 'Rarity by composition',   desc: 'Rarity reflects silhouette strength and visual distinctiveness. Common portraits are desirable. Rare portraits are elevated.' },
              ].map((item) => (
                <div key={item.title} className="bg-bone p-7">
                  <p className="text-sm text-void font-medium mb-3">{item.title}</p>
                  <p className="text-xs text-graphite leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="section-label mb-6">Links</p>
            <div className="flex flex-col">
              {[
                { label: 'Contract',    note: 'Not yet deployed' },
                { label: 'GitHub',      note: 'Coming soon' },
                { label: 'Marketplace', note: 'TBD' },
              ].map(({ label, note }) => (
                <div key={label} className="flex items-center gap-4 py-3 border-b border-mist">
                  <span className="text-sm text-void w-32">{label}</span>
                  <span className="text-xs text-graphite font-mono">{note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
