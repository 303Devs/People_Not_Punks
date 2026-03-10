const differentiators = [
  { title: 'Portrait-first art direction',  desc: 'Every design decision starts with the portrait — not the trait spreadsheet.' },
  { title: 'Identity-forward metadata',     desc: 'Character metadata built around who someone is, not just what they wear.' },
  { title: 'Curated visual system',         desc: 'Composition, silhouette, and color are as considered as any individual trait.' },
  { title: 'Modern launch design',          desc: 'Built with the same attention to product craft as the art itself.' },
  { title: 'Homage without imitation',      desc: 'References the era clearly, then does its own thing.' },
]

export default function About() {
  return (
    <main className="flex-1">

      {/* ── Intro — dark ── */}
      <section className="bg-void pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">About People Not Punks</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-bone leading-tight tracking-tight mb-8 max-w-2xl">
            The medium stays.<br />The emphasis changes.
          </h1>
          <p className="text-bone/60 font-light leading-relaxed text-lg max-w-xl">
            People Not Punks began as a response to one of the most recognizable visual formats
            in Web3: the collectible pixel portrait. Instead of leaning further into fixed
            archetypes, the project moves in the opposite direction — toward people, identity,
            style, and individuality.
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
                The collectible pixel portrait has a specific place in NFT history. It is the format
                that helped define the space — simple, distinct, and wildly collectible. People Not
                Punks acknowledges that legacy directly.
              </p>
              <p className="text-graphite font-light leading-relaxed mt-4">
                The result is a curated portrait collection that respects the history of early NFT
                culture while reworking it with more humanity and more intention.
              </p>
            </div>
            <div>
              <p className="section-label mb-6">The rebuild</p>
              <p className="text-graphite font-light leading-relaxed">
                People Not Punks is both a homage and a rebuild. It keeps the clarity and
                collectibility of pixel portraiture while refining the art direction, trait system,
                and overall visual language to feel more cohesive, more expressive, and more
                considered.
              </p>
              <p className="text-graphite font-light leading-relaxed mt-4">
                Pronouns are part of the identity system — not as a gimmick, but as one layer in a
                broader structure meant to reflect a wider range of personhood and self-expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What makes it different — light ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container">
          <p className="section-label mb-10">What makes it different</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-mist">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-bone p-7">
                <p className="text-sm text-void font-medium mb-3">{d.title}</p>
                <p className="text-xs text-graphite leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Creative philosophy — dark ── */}
      <section className="bg-void border-t border-graphite py-24">
        <div className="page-container max-w-3xl">
          <p className="section-label mb-8">Why "People Not Punks"?</p>
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
