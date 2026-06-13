import { useState } from 'react'
import Reveal, { Stagger } from '@/components/ui/Reveal'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'

type Lodge = { name: string; nights: string; image: string }

// Best available image per known lodge name
const LODGE_IMAGES: Record<string, string> = {
  'Kigali Serena Hotel':          '/images/lodges/rwanda/kigali/serena-kigali/1000045517.jpg',
  'Hotel des Mille Collines':     '/images/lodges/rwanda/kigali/serena-kigali/1000045518.jpg',
  'Gorilla Forest Camp':          '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
  'Gorilla Forest Camp by A&K':   '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
  'Sanctuary Gorilla Forest Camp':'/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
  'Mahogany Springs':             '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7419.jpg',
  'Buhoma Lodge':                 '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7518.jpg',
  'Bwindi Lodge':                 '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7863.jpg',
  'Mount Gahinga Lodge':          '/images/activities/gorilla-trekking/35-mount-gahinga-lodge-golden-monkey.jpg',
  'Clouds Mountain Lodge':        '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'Ichumbi Gorilla Lodge':        '/images/activities/gorilla-trekking/33-mount-gahinga-lodge-gorilla.jpg',
  'Primate Lodge':                '/images/activities/gorilla-trekking/6-kibale-lodge-chimpanzee-tadevs-vs-08101.jpg',
  'Ndali Lodge':                  '/images/activities/gorilla-trekking/7-kibale-lodge-chimpanzee-tadevs-vs-08284.jpg',
  'Turaco Treetops':              '/images/activities/gorilla-trekking/22-chimpanzee-kya-7-s-g13.jpg',
  'Chimpundu Lodge':              '/images/activities/gorilla-trekking/20-chimp-ah1i4531.jpg',
  "Baker's Lodge":                '/images/parks/uganda/murchison-falls/mf-1.jpg',
  'Paraa Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-6226.jpg',
  'Murchison River Lodge':        '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
  'Mweya Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-6490.jpg',
  'Kyambura Gorge Lodge':         '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/7-kyambura-gorge-lodge-swimming-pool.jpg',
  'Buffalo Safari Lodge':         '/images/parks/uganda/murchison-falls/dsc-5888.jpg',
  'Ishasha Wilderness Camp':      '/images/parks/uganda/lake-mburo/15651972443-ec37184968-o.jpg',
  'Mihingo Lodge':                '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
  'Rwakobo Rock':                 '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg',
  'Arcadia Cottages Lake Bunyonyi':'/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'No.5 Boutique Hotel':          '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.jpg',
  'Protea Hotel Entebbe':         '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.jpg',
  'Serena Kampala Hotel':         '/images/parks/uganda/murchison-falls/dsc-7062.jpg',
  'Amuka Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-7442.jpg',
  'Jinja Nile Resort':            '/images/parks/uganda/murchison-falls/dsc-6200.jpg',
  'Nile Porch':                   '/images/parks/uganda/murchison-falls/dsc-6200.jpg',
  "Mountains of the Moon Hotel":  '/images/parks/uganda/murchison-falls/dsc-5888.jpg',
  'Apoka Safari Lodge':           '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/' + 'anyadawe-house',
}

const FALLBACK = '/images/activities/gorilla-trekking/3-mgl-gorilla-bb.jpg'

function parseDays(days: JourneyDay[]): { midRange: Lodge[]; luxury: Lodge[] } {
  const midMap = new Map<string, number>()
  const luxMap = new Map<string, number>()

  for (const day of days) {
    const acc = day.accommodation
    if (!acc || acc === '—') continue

    // format: "Mid-Range: A / B | Luxury: C / D"  OR  "Luxury: C / D"  OR  "C / D"
    const segments = acc.split('|').map((s) => s.trim())
    for (const seg of segments) {
      let map = luxMap
      let namesPart = seg

      if (/^mid-range:/i.test(seg)) {
        map = midMap
        namesPart = seg.replace(/^mid-range:/i, '').trim()
      } else if (/^luxury:/i.test(seg)) {
        namesPart = seg.replace(/^luxury:/i, '').trim()
      }

      namesPart.split('/').map((n) => n.trim()).filter(Boolean).forEach((name) => {
        map.set(name, (map.get(name) ?? 0) + 1)
      })
    }
  }

  const toArr = (m: Map<string, number>): Lodge[] =>
    Array.from(m.entries()).map(([name, n]) => ({
      name,
      nights: `${n} ${n === 1 ? 'NIGHT' : 'NIGHTS'}`,
      image: LODGE_IMAGES[name] ?? FALLBACK,
    }))

  return { midRange: toArr(midMap), luxury: toArr(luxMap) }
}

// Static fallback when no days provided
const STATIC: { midRange: Lodge[]; luxury: Lodge[] } = {
  midRange: [
    { name: 'Buhoma Lodge', nights: '2 NIGHTS', image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7518.jpg' },
    { name: 'Murchison River Lodge', nights: '1 NIGHT', image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg' },
    { name: 'Rwakobo Rock', nights: '1 NIGHT', image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg' },
  ],
  luxury: [
    { name: 'Gorilla Forest Camp', nights: '2 NIGHTS', image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg' },
    { name: "Baker's Lodge", nights: '1 NIGHT', image: '/images/parks/uganda/murchison-falls/mf-1.jpg' },
    { name: 'Mihingo Lodge', nights: '1 NIGHT', image: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg' },
  ],
}

type Props = { days?: JourneyDay[] }

export default function HandpickedLodges({ days }: Props) {
  const derived = days ? parseDays(days) : STATIC
  const hasMid = derived.midRange.length > 0
  const hasLux = derived.luxury.length > 0
  const defaultTier: 'midRange' | 'luxury' = hasMid ? 'midRange' : 'luxury'
  const [tier, setTier] = useState<'midRange' | 'luxury'>(defaultTier)
  const lodges = derived[tier]

  return (
    <section className="section-alt py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl">Handpicked Lodges</h2>
            <p className="mt-2 text-xs tracking-wide text-neutral-600">Carefully selected stays along your safari journey</p>
          </div>
        </Reveal>

        {hasMid && hasLux && (
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
        )}

        {!hasMid && hasLux && (
          <Reveal delay={80}>
            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-[10px] tracking-[0.2em] text-teal-700 ring-1 ring-teal-100">
                LUXURY LODGES
              </span>
            </div>
          </Reveal>
        )}

        <Stagger className="cards-scroll-3 relative mt-10 gap-6" staggerMs={100} key={tier}>
          {lodges.map((l) => (
            <article key={l.name} className="card-lift overflow-hidden">
              <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-xl">
                <img src={l.image} alt={l.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-[10px] tracking-[0.18em] text-white">
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
