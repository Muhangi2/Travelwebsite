import { useState } from 'react'

type Lodge = {
  name: string
  nights: string
  image: string
}

const tiers = {
  midRange: [
    { name: 'Hotel No. 5', nights: 'CHECK IN 1 NIGHT', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80' },
    { name: 'Protea Hotel Entebbe', nights: 'JIPALO 1 NIGHT', image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=900&q=80' },
    { name: 'Protea Hotel Entebbe', nights: 'EWAN 1 NIGHT', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80' },
  ] as Lodge[],
  luxury: [
    { name: 'Singita Kwitonda Lodge', nights: 'CHECK IN 1 NIGHT', image: 'https://images.unsplash.com/photo-1580977251946-1633a59c20a6?auto=format&fit=crop&w=900&q=80' },
    { name: 'Bisate Lodge', nights: 'JIPALO 1 NIGHT', image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=80' },
    { name: 'Mahogany Springs', nights: 'EWAN 1 NIGHT', image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80' },
  ] as Lodge[],
}

export default function HandpickedLodges() {
  const [tier, setTier] = useState<'midRange' | 'luxury'>('midRange')
  const lodges = tiers[tier]

  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-brand-forest">Handpicked Lodges</h2>
          <p className="mt-2 text-xs tracking-wide text-neutral-600">Carefully Selected Stays Along Your Safari Journey</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 ring-1 ring-neutral-200">
            <button
              onClick={() => setTier('midRange')}
              className={`rounded-full px-6 py-2 text-[10px] tracking-[0.2em] ${
                tier === 'midRange' ? 'bg-brand-green text-white' : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              MID RANGE
            </button>
            <button
              onClick={() => setTier('luxury')}
              className={`rounded-full px-6 py-2 text-[10px] tracking-[0.2em] ${
                tier === 'luxury' ? 'bg-brand-green text-white' : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              LUXURY
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <button
            aria-label="Previous"
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-neutral-300 bg-white p-3 text-neutral-700 hover:bg-neutral-50 lg:block"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="grid gap-6 md:grid-cols-3">
            {lodges.map((l) => (
              <article key={`${tier}-${l.name}`} className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <img src={l.image} alt={l.name} className="h-full w-full object-cover" />
                  <span className="absolute right-3 top-3 rounded-full bg-brand-green/90 px-3 py-1 text-[10px] tracking-[0.2em] text-white">
                    {l.nights}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium">{l.name}</p>
              </article>
            ))}
          </div>

          <button
            aria-label="Next"
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-neutral-300 bg-white p-3 text-neutral-700 hover:bg-neutral-50 lg:block"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
