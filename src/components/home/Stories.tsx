import { NavLink } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'

const posts = [
  {
    slug: 'visit-saves-uganda-mountain-gorillas',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
    title: 'Tracking the Mountain Gorillas of Bwindi',
    author: 'Still Wild Safaris Team',
    date: 'Jan 2026',
  },
  {
    slug: 'beyond-gorillas-rwanda-big-five',
    image: '/images/parks/rwanda/akagera/wilderness-magashi-7.jpg',
    title: 'Beyond the Gorillas: Discovering Rwanda’s Big Five and Hidden Gems',
    author: 'Still Wild Safaris Team',
    date: 'Jan 2026',
    tag: 'Rwanda',
  },
  {
    slug: 'safari-photography-uganda',
    image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
    title: 'Photography in the African Bush',
    author: 'Still Wild Safaris Team',
    date: 'Jan 2026',
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
              Travel tales, wildlife moments and behind-the-scenes safari life from East Africa.
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
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-brand-green/90 px-3 py-1 text-[10px] tracking-wide text-white">
                  {p.tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="text-[10px] tracking-wide text-white/75">{p.author} · {p.date}</p>
                <h3 className="mt-1 font-serif text-lg leading-snug text-white sm:text-xl">{p.title}</h3>
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
