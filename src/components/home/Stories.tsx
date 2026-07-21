import { NavLink } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

const posts = [
  {
    slug: 'bwindi-impenetrable-forest-visitor-guide',
    image: '/images/activities/gorilla-trekking/26-ah1i3781.webp',
    title: 'Bwindi Impenetrable Forest: Complete Visitor Guide 2026',
    author: 'Still Wild Safaris Team',
    date: 'Jun 2026',
  },
  {
    slug: 'uganda-vs-rwanda-gorilla-trekking',
    image: '/images/activities/gorilla-trekking/4-mgl-gorilla-bb.webp',
    title: 'Uganda vs Rwanda Gorilla Trekking: Which is Better in 2026?',
    author: 'Still Wild Safaris Team',
    date: 'Jun 2026',
    tag: 'Rwanda',
  },
  {
    slug: 'what-to-pack-gorilla-trekking-uganda',
    image: '/images/activities/gorilla-trekking/9-gorilla3-bfo9.webp',
    title: 'What to Pack for Gorilla Trekking in Uganda: Ultimate Checklist',
    author: 'Still Wild Safaris Team',
    date: 'May 2026',
  },
]

export default function Stories() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Journal</p>
            <h2 className="mt-3">Stories from the Wild</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-brand-muted sm:text-base">
              Travel tales, wildlife moments and behind-the-scenes{' '}
              <a
                href="https://safarioptions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-700"
              >
                safari
              </a>{' '}
              life from East Africa.
            </p>
          </div>
        </Reveal>

        <div className="cards-scroll-3 mt-12 gap-6 md:mt-14">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
            <NavLink
              to={`/stories/${p.slug}`}
              className="card-lift group relative block overflow-hidden rounded-xl shadow-md"
            >
              <div className="img-zoom aspect-[4/5]">
                <Picture src={p.image} alt={p.title} loading="lazy" imgClassName="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-brand-green/90 px-3 py-1 text-[10px] tracking-wide text-white">
                  {p.tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="text-[10px] tracking-wide text-white/75">{p.author} · {p.date}</p>
                <h3 className="mt-1 text-lg leading-snug text-white sm:text-xl">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-brand-gold transition group-hover:gap-3">
                  READ MORE
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </NavLink>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <NavLink to="/stories" className="btn-secondary">
              VIEW ALL STORIES
            </NavLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
