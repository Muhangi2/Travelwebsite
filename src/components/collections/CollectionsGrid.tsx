import { Link } from 'react-router-dom'

type Tag = 'Luxury Adventure' | 'Family-Friendly' | 'Photography Focus'

type Journey = {
  id: string
  image: string
  country?: string
  tags: Tag[]
  title: string
  duration: string
  highlight?: boolean
}

const journeys: Journey[] = [
  {
    id: 'uganda-exclusive-primate',
    image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
    country: 'UGANDA',
    tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
    title: 'Uganda Exclusive Primate  Journey',
    duration: '9 Days / 8 Nights',
    highlight: true,
  },
  {
    id: 'great-lakes-primate-odyssey',
    image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
    tags: ['Family-Friendly', 'Photography Focus'],
    title: 'The Great Lakes & Primate Odyssey',
    duration: '10 Days / 9 Nights',
  },
  {
    id: 'ultimate-gorilla-expedition',
    image: '/images/destinations/tanzania/sayari-lioness.jpg',
    tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
    title: 'The Ultimate Gorilla Expedition',
    duration: '11 Days / 10 Nights',
  },
  {
    id: 'primates-mist-rainforest',
    image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
    tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
    title: 'Primates of the Mist & Rainforest',
    duration: '8 Days / 7 Nights',
  },
  {
    id: 'conservationists-path',
    image: '/images/activities/helicopter-rwanda/1000045751.jpg',
    tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
    title: "The Conservationist's Path",
    duration: '7 Days / 6 Nights',
  },
  {
    id: 'ikaze-short-welcome',
    image: '/images/parks/rwanda/volcanoes/wilderness-bisate.jpg',
    tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
    title: 'The Ikaze Short Welcome',
    duration: '4  Days / 3 Nights',
  },
]

const tagIcon: Record<Tag, React.ReactNode> = {
  'Luxury Adventure': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.4 6.5L21 10l-5 4.4 1.6 6.6L12 17.7 6.4 21 8 14.4 3 10l6.6-1.5z" />
    </svg>
  ),
  'Family-Friendly': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" />
      <path d="M3 21c0-3 2.7-6 6-6s6 3 6 6M14 21c0-2 1.3-4 3-4s3 2 3 4" />
    </svg>
  ),
  'Photography Focus': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="14" r="3.5" />
    </svg>
  ),
}

export default function CollectionsGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-5xl">Safari Collections and Journeys</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {journeys.map((j) => (
            <article
              key={j.id}
              className="group overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={j.image} alt={j.title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" decoding="async" />
                {j.country && (
                  <span className="absolute right-4 top-4 rounded-full bg-brand-green px-4 py-1 text-[10px] tracking-[0.2em] text-white">
                    {j.country}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-3 text-[10px] text-brand-green">
                  {j.tags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1">
                      {tagIcon[t]} {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-serif text-xl">{j.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">{j.duration}</p>
                <Link
                  to={`/safari-collections/${j.id}`}
                  className={`mt-4 inline-block rounded-full px-5 py-2 text-[10px] tracking-[0.2em] ${
                    j.highlight
                      ? 'bg-neutral-900 text-white hover:bg-black'
                      : 'border border-neutral-300 text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  VIEW FULL ITINERARY
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary">
            REQUEST A CUSTOM JOURNEY
          </Link>
        </div>
      </div>
    </section>
  )
}
