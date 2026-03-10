import { useState } from 'react'

const faqs = [
  {
    q: 'What is People Not Punks?',
    a: 'People Not Punks is a curated pixel portrait collection that pays homage to early NFT culture while centering people, identity, and intentional design.',
  },
  {
    q: 'Is this inspired by CryptoPunks?',
    a: 'It is a cultural and visual homage to the early era of collectible pixel portraits, developed as its own project with its own art direction, identity framework, and product vision.',
  },
  {
    q: 'What makes the project different?',
    a: 'The collection is portrait-first, identity-forward, and intentionally curated. It emphasizes people rather than archetypes and balances retro pixel aesthetics with a more refined visual system.',
  },
  {
    q: 'Why are pronouns included?',
    a: 'Pronouns are one layer of the character metadata — part of the identity system, present naturally. The collection reflects people as varied individuals.',
  },
  {
    q: 'How large is the collection?',
    a: 'TBD. The archive is being treated as source material, not locked inventory. A smaller, tighter collection is better than a larger, uneven one. Supply will be confirmed before launch.',
  },
  {
    q: 'Is the collection generative?',
    a: 'The project is built from a structured portrait and trait system, with curation playing a major role in the final output.',
  },
  {
    q: 'What chain will it launch on?',
    a: 'Base — an Ethereum Layer 2 network.',
  },
  {
    q: 'Where will metadata be stored?',
    a: 'Details TBD, but the project is being built with long-term permanence in mind. Storage approach will be published clearly before launch.',
  },
  {
    q: 'When does mint open?',
    a: 'Mint date is TBD. Details will be published well in advance of launch.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-mist">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-6 text-left gap-6"
      >
        <span className="text-sm text-void font-medium leading-relaxed">{q}</span>
        <span
          className={`text-violet shrink-0 text-lg leading-none transition-transform duration-200 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="text-sm text-graphite font-light leading-relaxed max-w-2xl">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="flex-1">

      {/* ── Intro — light ── */}
      <section className="bg-bone pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-void leading-tight tracking-tight mb-4">
            Questions.
          </h1>
          <p className="text-graphite font-light max-w-xl text-base leading-relaxed">
            Straight answers about the project, the collection, and how it works.
          </p>
        </div>
      </section>

      {/* ── FAQ list — light ── */}
      <section className="bg-bone border-t border-mist">
        <div className="page-container max-w-3xl py-4">
          {faqs.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </section>

      {/* ── Transparency — mist ── */}
      <section className="bg-mist border-t border-mist py-20">
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
