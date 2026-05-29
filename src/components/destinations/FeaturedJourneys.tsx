import { Link } from 'react-router-dom'

const journeys = [
  {
    slug: 'uganda-exclusive-primate',
    title: 'Uganda Exclusive Primate Journey',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  },
  {
    slug: 'great-lakes-primate-odyssey',
    title: '',
    image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  },
  {
    slug: 'ultimate-gorilla-expedition',
    title: '',
    image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.jpg',
  },
]

export default function FeaturedJourneys() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl">Featured Journeys</h2>

        <div className="cards-scroll-3 mt-10 gap-6">
          {journeys.map((j) => (
            <Link
              key={j.slug}
              to={`/safari-collections/${j.slug}`}
              className="group relative overflow-hidden rounded-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={j.image} alt={j.title || 'Journey'} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" decoding="async" />
              </div>
              {j.title && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-end justify-between">
                    <p className="text-sm text-white">{j.title}</p>
                    <span className="rounded-full bg-white/20 p-1.5 text-white backdrop-blur">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
