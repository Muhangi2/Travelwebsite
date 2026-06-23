import { useState } from 'react'
import Reveal, { Stagger } from '@/components/ui/Reveal'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'

type LodgeEntry = { name: string; nights: string; image: string; tier: 'luxury' | 'midRange' }
type LocationGroup = { location: string; lodges: LodgeEntry[] }

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
  'Kansanga Guest House':         '/images/parks/uganda/murchison-falls/dsc-7062.jpg',
  'Amuka Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-7442.jpg',
  'Jinja Nile Resort':            '/images/parks/uganda/murchison-falls/dsc-6200.jpg',
  'Nile Porch':                   '/images/parks/uganda/murchison-falls/dsc-6200.jpg',
  "Mountains of the Moon Hotel":  '/images/parks/uganda/murchison-falls/dsc-5888.jpg',
  'Apoka Safari Lodge':           '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.jpg',
}

const LODGE_LOCATION: Record<string, string> = {
  'Kigali Serena Hotel':           'Kigali, Rwanda',
  'Hotel des Mille Collines':      'Kigali, Rwanda',
  'The Retreat by Heaven':         'Kigali, Rwanda',
  'Lemigo Hotel':                  'Kigali, Rwanda',
  'Marriott Kigali':               'Kigali, Rwanda',
  'Gorilla Forest Camp':           'Bwindi Impenetrable Forest',
  'Gorilla Forest Camp by A&K':    'Bwindi Impenetrable Forest',
  'Sanctuary Gorilla Forest Camp': 'Bwindi Impenetrable Forest',
  'Mahogany Springs':              'Bwindi Impenetrable Forest',
  'Buhoma Lodge':                  'Bwindi Impenetrable Forest',
  'Bwindi Lodge':                  'Bwindi Impenetrable Forest',
  'Gorilla Forest Lodge by A&K Sanctuary': 'Bwindi Impenetrable Forest',
  'Mahogany Springs Lodge':        'Bwindi Impenetrable Forest',
  'Clouds Mountain Gorilla Lodge': 'Bwindi Impenetrable Forest',
  'Clouds Mountain Lodge':         'Bwindi Impenetrable Forest',
  'Ichumbi Gorilla Lodge':         'Bwindi Impenetrable Forest',
  'Mount Gahinga Lodge':           'Mgahinga Gorilla National Park',
  "Baker's Lodge":                 'Murchison Falls National Park',
  'Paraa Safari Lodge':            'Murchison Falls National Park',
  'Murchison River Lodge':         'Murchison Falls National Park',
  'Buffalo Safari Lodge':          'Murchison Falls National Park',
  'Amuka Safari Lodge':            'Murchison Falls National Park',
  'Mweya Safari Lodge':            'Queen Elizabeth National Park',
  'Kyambura Gorge Lodge':          'Queen Elizabeth National Park',
  'Ishasha Wilderness Camp':       'Queen Elizabeth National Park',
  'Mihingo Lodge':                 'Lake Mburo National Park',
  'Rwakobo Rock':                  'Lake Mburo National Park',
  'Primate Lodge':                 'Kibale Forest National Park',
  'Ndali Lodge':                   'Kibale Forest National Park',
  'Turaco Treetops':               'Kibale Forest National Park',
  'Chimpundu Lodge':               'Kibale Forest National Park',
  'Arcadia Cottages Lake Bunyonyi':'Lake Bunyonyi',
  'No.5 Boutique Hotel':           'Entebbe',
  'Protea Hotel Entebbe':          'Entebbe',
  'Serena Kampala Hotel':          'Kampala',
  'Kansanga Guest House':          'Kampala',
  'Jinja Nile Resort':             'Jinja',
  'Nile Porch':                    'Jinja',
  "Mountains of the Moon Hotel":   'Fort Portal',
  'Apoka Safari Lodge':            'Kidepo Valley National Park',
}

const FALLBACK = '/images/activities/gorilla-trekking/3-mgl-gorilla-bb.jpg'

function parseDays(days: JourneyDay[]): LocationGroup[] {
  const locationMap = new Map<string, Map<string, { nights: number; tier: 'luxury' | 'midRange' }>>()

  for (const day of days) {
    const acc = day.accommodation
    if (!acc || acc === '—') continue

    const segments = acc.split('|').map((s) => s.trim())
    for (const seg of segments) {
      let tier: 'luxury' | 'midRange' = 'luxury'
      let namesPart = seg

      if (/^mid-range:/i.test(seg)) {
        tier = 'midRange'
        namesPart = seg.replace(/^mid-range:/i, '').trim()
      } else if (/^luxury:/i.test(seg)) {
        namesPart = seg.replace(/^luxury:/i, '').trim()
      }

      namesPart.split('/').map((n) => n.trim()).filter(Boolean).forEach((name) => {
        const location = LODGE_LOCATION[name] ?? 'Other'
        if (!locationMap.has(location)) locationMap.set(location, new Map())
        const lodgeMap = locationMap.get(location)!
        const existing = lodgeMap.get(name)
        lodgeMap.set(name, { nights: (existing?.nights ?? 0) + 1, tier })
      })
    }
  }

  return Array.from(locationMap.entries()).map(([location, lodgeMap]) => ({
    location,
    lodges: Array.from(lodgeMap.entries()).map(([name, { nights, tier }]) => ({
      name,
      nights: `${nights} ${nights === 1 ? 'NIGHT' : 'NIGHTS'}`,
      image: LODGE_IMAGES[name] ?? FALLBACK,
      tier,
    })),
  }))
}

const STATIC_GROUPS: LocationGroup[] = [
  {
    location: 'Bwindi Impenetrable Forest',
    lodges: [
      { name: 'Gorilla Forest Camp', nights: '2 NIGHTS', image: LODGE_IMAGES['Gorilla Forest Camp'], tier: 'luxury' },
      { name: 'Mahogany Springs',     nights: '1 NIGHT',  image: LODGE_IMAGES['Mahogany Springs'],    tier: 'luxury' },
      { name: 'Buhoma Lodge',         nights: '2 NIGHTS', image: LODGE_IMAGES['Buhoma Lodge'],        tier: 'midRange' },
    ],
  },
  {
    location: 'Murchison Falls National Park',
    lodges: [
      { name: "Baker's Lodge",        nights: '1 NIGHT',  image: LODGE_IMAGES["Baker's Lodge"],       tier: 'luxury' },
    ],
  },
  {
    location: 'Lake Mburo National Park',
    lodges: [
      { name: 'Mihingo Lodge',        nights: '1 NIGHT',  image: LODGE_IMAGES['Mihingo Lodge'],       tier: 'luxury' },
      { name: 'Rwakobo Rock',         nights: '1 NIGHT',  image: LODGE_IMAGES['Rwakobo Rock'],        tier: 'midRange' },
    ],
  },
]

type Props = { days?: JourneyDay[] }

export default function HandpickedLodges({ days }: Props) {
  const groups = days ? parseDays(days) : STATIC_GROUPS

  const [activeLocation, setActiveLocation] = useState(groups[0]?.location ?? '')

  if (groups.length === 0) return null

  const activeGroup = groups.find((g) => g.location === activeLocation) ?? groups[0]

  return (
    <section className="section-alt py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="">Handpicked Lodges</h2>
            <p className="mt-2 text-xs tracking-wide text-neutral-600">Carefully selected stays along your safari journey</p>
          </div>
        </Reveal>

        {/* Location tabs */}
        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {groups.map((g) => (
                <button
                  key={g.location}
                  type="button"
                  onClick={() => setActiveLocation(g.location)}
                  className={`rounded-xl px-4 sm:px-5 py-2 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] font-bold uppercase transition-all duration-200 ${
                    activeLocation === g.location
                      ? 'bg-black text-white shadow-sm'
                      : 'ring-1 ring-black text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {g.location}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Lodge cards for active location */}
        <Stagger
          key={activeLocation}
          className="cards-scroll-3 mt-10 gap-5"
          staggerMs={80}
        >
          {activeGroup.lodges.map((l) => (
            <article
              key={l.name}
              className="group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Full-bleed image */}
              <img
                src={l.image}
                alt={l.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

              {/* Top badges */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm shadow-sm ${
                  l.tier === 'luxury'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white/90 text-neutral-700'
                }`}>
                  {l.tier === 'luxury' ? 'Luxury' : 'Mid-Range'}
                </span>
                <span className="rounded-full bg-black/70 px-3 py-1 text-[10px] tracking-[0.18em] text-white backdrop-blur-sm">
                  {l.nights}
                </span>
              </div>

              {/* Bottom name + divider */}
              <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                <div className="mb-2.5 h-[1px] w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-14 group-hover:bg-white/70" />
                <p className="font-serif text-[17px] leading-snug text-white">{l.name}</p>
                <p className="mt-1 text-[11px] text-white/60 tracking-wide">{activeLocation}</p>
              </div>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
