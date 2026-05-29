import { useState } from 'react'
import Reveal, { Stagger } from '@/components/ui/Reveal'

type Lodge = {
  name: string
  nights: string
  image: string
}

const tiers = {
  midRange: [
    { name: 'Hotel No. 5', nights: 'CHECK IN 1 NIGHT', image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg' },
    { name: 'Protea Hotel Entebbe', nights: 'JIPALO 1 NIGHT', image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg' },
    { name: 'Protea Hotel Entebbe', nights: 'EWAN 1 NIGHT', image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg' },
  ] as Lodge[],
  luxury: [
    { name: 'Singita Kwitonda Lodge', nights: 'CHECK IN 1 NIGHT', image: '/images/parks/rwanda/volcanoes/wilderness-bisate.jpg' },
    { name: 'Bisate Lodge', nights: 'JIPALO 1 NIGHT', image: '/images/parks/rwanda/volcanoes/wilderness-bisate.jpg' },
    { name: 'Mahogany Springs', nights: 'EWAN 1 NIGHT', image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg' },
  ] as Lodge[],
}

export default function HandpickedLodges() {
  const [tier, setTier] = useState<'midRange' | 'luxury'>('midRange')
  const lodges = tiers[tier]

  return (
    <section className="section-alt py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl">Handpicked Lodges</h2>
            <p className="mt-2 text-xs tracking-wide text-neutral-600">Carefully Selected Stays Along Your Safari Journey</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full bg-white p-1 ring-1 ring-neutral-200">
              <button
                type="button"
                onClick={() => setTier('midRange')}
                className={`rounded-full px-6 py-2 text-[10px] tracking-[0.2em] transition ${
                  tier === 'midRange' ? 'bg-black text-white' : 'text-neutral-700 hover:text-neutral-900'
                }`}
              >
                MID RANGE
              </button>
              <button
                type="button"
                onClick={() => setTier('luxury')}
                className={`rounded-full px-6 py-2 text-[10px] tracking-[0.2em] transition ${
                  tier === 'luxury' ? 'bg-black text-white' : 'text-neutral-700 hover:text-neutral-900'
                }`}
              >
                LUXURY
              </button>
            </div>
          </div>
        </Reveal>

        <Stagger className="cards-scroll-3 relative mt-10 gap-6" staggerMs={100} key={tier}>
          {lodges.map((l) => (
            <article key={`${tier}-${l.name}`} className="card-lift overflow-hidden">
              <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-md">
                <img src={l.image} alt={l.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <span className="absolute right-3 top-3 rounded-full bg-black/90 px-3 py-1 text-[10px] tracking-[0.2em] text-white">
                  {l.nights}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium">{l.name}</p>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
