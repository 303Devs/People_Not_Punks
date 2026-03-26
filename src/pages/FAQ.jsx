import { useState } from 'react'

const faqs = [
  {
    q: 'What is People Not Punks?',
    a: 'People Not Punks is a collection of 500 photorealistic AI-generated portraits, each one built from a handmade pixel drawing. It pays homage to early NFT culture while centering people, identity, and intentional design.',
  },
  {
    q: 'Is this inspired by CryptoPunks?',
    a: 'Directly. The collection began as 500 pixel portraits drawn in the tradition of CryptoPunks-era collectibles — one for each subject. Those pixel originals were then transformed into the photorealistic portraits you see now. The cultural reference is explicit; the execution is its own.',
  },
  {
    q: 'What makes the project different?',
    a: 'A few things. The portraits are AI-generated, but each one originated as a handmade pixel drawing — the AI didn\'t start from nothing. The identity system covers 14 trait categories, including pronouns. And all mint proceeds flow into the CurrencyForCivilization (C4C) liquidity pool — a DeFi project within the Civil Protocol ecosystem, built by the same creator. This collection is designed to sell out and fund that pool. It is not for profit.',
  },
  {
    q: 'Why are pronouns included?',
    a: 'Pronouns are one layer of the character metadata — part of the identity system, present naturally. The collection reflects people as varied individuals.',
  },
  {
    q: 'How large is the collection?',
    a: '500 portraits. That number is confirmed and will not change.',
  },
  {
    q: 'Is the collection generative?',
    a: 'The portraits are AI-generated, but the process was not random. Each one began as a handmade pixel drawing that established the face and structure. The AI rendered that into photorealistic form. The final collection was then reviewed and curated — not every output made it in.',
  },
  {
    q: 'What chain will it launch on?',
    a: 'Base — an Ethereum Layer 2 network.',
  },
  {
    q: 'Where will metadata be stored?',
    a: 'Images and metadata are stored on IPFS. Full technical details will be published before launch.',
  },
  {
    q: 'When does mint open?',
    a: 'Mint date is TBD. Details will be published well in advance of launch.',
  },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-mist">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex items-start justify-between py-6 text-left gap-6 group"
      >
        <span className={`text-sm font-medium leading-relaxed transition-colors duration-200 ${open ? 'text-void' : 'text-void/80 group-hover:text-void'}`}>{q}</span>
        <span
          className={`text-amber shrink-0 text-xl leading-none transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-graphite font-light leading-relaxed max-w-2xl pb-6">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="flex-1">

      {/* ── Intro — dark ── */}
      <section className="bg-void pt-32 pb-20">
        <div className="page-container">
          <p className="section-label mb-6">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-bone leading-[1.1] tracking-tight mb-4">
            Questions.
          </h1>
          <p className="text-bone/60 font-light max-w-xl text-base leading-relaxed">
            Straight answers about the project, the collection, and how it works.
          </p>
        </div>
      </section>

      {/* ── FAQ list — light ── */}
      <section className="bg-bone border-t border-mist">
        <div className="page-container max-w-3xl py-16">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} {...item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Transparency — mist ── */}
      <section className="bg-bone border-t border-mist py-20">
        <div className="page-container max-w-3xl">
          <p className="section-label mb-4">Transparency</p>
          <p className="text-graphite font-light leading-relaxed text-base">
            People Not Punks is designed with clarity in mind. Mint details, contract information,
            and release terms will be published clearly before launch. All proceeds from this collection
            go directly to the CurrencyForCivilization (C4C) liquidity pool — part of the Civil Protocol
            ecosystem. There is no profit motive behind this mint.
          </p>
        </div>
      </section>

    </main>
  )
}
