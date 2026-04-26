type Card = {
  image: string
  duration: string
  title: string
  desc: string
  cta: string
}

const cards: Card[] = [
  {
    image: 'https://images.unsplash.com/photo-1551634979-2b11f8c218da?auto=format&fit=crop&w=1200&q=80',
    duration: '11 Days  |  Uganda & Rwanda',
    title: 'Ultimate Gorilla Expedition',
    desc: 'A journey through the heart of East Africa, from the bustling streets of Kampala to the misty mountains of the Virunga.',
    cta: 'EXPLORE NOW',
  },
  {
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
    duration: '9 Days  |  Uganda',
    title: 'Uganda Primate & Adventure Circuit',
    desc: "A Perfect Blend of Adrenaline, Wildlife, and Uganda's World-Famous Primate Encounters…",
    cta: 'EXPLORE NOW',
  },
  {
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    duration: '4 Days  |  Rwanda',
    title: 'The "Ikaze" (Welcome) Short Break',
    desc: 'The essence of Rwanda in four days. A short but profound encounter with the majestic mountain gorillas.',
    cta: 'VISIT NOW',
  },
]

export default function SafariCollection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-5xl">Our Safari Collection</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600">
            Our safari collection brings together exclusive wildlife encounters, breathtaking scenery, and expertly
            guided journeys across Uganda.
          </p>
        </div>

        <div className="relative mt-14">
          <button
            aria-label="Previous"
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-neutral-300 bg-white p-3 text-neutral-700 hover:bg-neutral-50 lg:block"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <article key={c.title} className="overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-neutral-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium tracking-wide text-brand-green">{c.duration}</p>
                  <h3 className="mt-2 font-serif text-xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.desc}</p>
                  <button
                    className={`mt-5 rounded-full px-5 py-2 text-[10px] tracking-[0.2em] ${
                      c.cta === 'VISIT NOW'
                        ? 'border border-neutral-900 text-neutral-900 hover:bg-neutral-100'
                        : 'bg-neutral-900 text-white hover:bg-black'
                    }`}
                  >
                    {c.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Next"
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-neutral-300 bg-white p-3 text-neutral-700 hover:bg-neutral-50 lg:block"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full bg-brand-green px-8 py-3 text-xs tracking-[0.2em] text-white shadow hover:bg-brand-green-dark">
            VIEW ALL SAFARI COLLECTION
          </button>
        </div>
      </div>
    </section>
  )
}
