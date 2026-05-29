import { Link } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'

const journeys = [
  {
    slug: 'uganda-exclusive-primate',
    title: 'Uganda Exclusive Primate Journey',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  },
  {
    slug: 'great-lakes-primate-odyssey',
    title: 'The Great Lakes & Primate Odyssey',
    image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  },
  {
    slug: 'ultimate-gorilla-expedition',
    title: 'The Ultimate Gorilla Expedition',
    image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.jpg',
  },
]

export default function FeaturedJourneys() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-serif text-4xl">Featured Journeys</h2>
        </Reveal>

        <div className="cards-scroll-3 mt-10 gap-6">
          {journeys.map((j, i) => (
            <Reveal key={j.slug} delay={i * 90}>
              <Link
                to={`/safari-collections/${j.slug}`}
                className="card-lift group relative block overflow-hidden rounded-md"
              >
                <div className="img-zoom aspect-[4/3]">
                  <img
                    src={j.image}
                    alt={j.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-end justify-between gap-3">
                    <p className="font-serif text-sm text-white">{j.title}</p>
                    <span className="shrink-0 rounded-full bg-white/20 p-1.5 text-white backdrop-blur">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
