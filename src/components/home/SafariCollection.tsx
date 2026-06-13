import { useRef, type MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'

type Card = {
  image: string
  duration: string
  title: string
  desc: string
  href: string
}

const cards: Card[] = [
  {
    image: '/images/parks/uganda/murchison-falls/mf-1.jpg',
    duration: '10 Days  ·  Uganda',
    title: '10-Day Grand Uganda Safari',
    desc: 'The complete loop — rhinos, Murchison Falls, chimpanzees, tree-climbing lions, and the mountain gorillas of Bwindi.',
    href: '/safari-collections/10-day-grand-uganda-safari',
  },
  {
    image: '/images/activities/gorilla-trekking/18-kibale-lodge-chimpanzee-tadevs-vs-08183.jpg',
    duration: '5 Days  ·  Rwanda · Uganda',
    title: "5 Days Among Uganda's Great Apes",
    desc: "From Kigali into Bwindi — gorillas and chimpanzees in one immersive journey through Uganda's most extraordinary forest.",
    href: '/safari-collections/5-day-kigali-great-apes',
  },
  {
    image: '/images/activities/gorilla-trekking/19-chimp-kya-bbp-img-20190218-wa0007.jpg',
    duration: '8 Days  ·  Uganda',
    title: '8-Day Western Circuit Primate & Wildlife',
    desc: "Chimps in Kibale, tree-climbing lions in Ishasha, and mountain gorillas in Bwindi — Uganda's greatest wildlife corridor.",
    href: '/safari-collections/8-day-western-circuit-primate',
  },
]

function SafariCard({ card, index }: { card: Card; index: number }) {
  const ref = useRef<HTMLElement>(null)

  function track(e: MouseEvent<HTMLElement>) {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    el.style.transition = 'transform 0.1s linear, box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
    el.style.setProperty('--sx', `${(e.clientX - left).toFixed(0)}px`)
    el.style.setProperty('--sy', `${(e.clientY - top).toFixed(0)}px`)
  }

  function reset() {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Reveal delay={index * 130}>
      <article
        ref={ref}
        onMouseMove={track}
        onMouseLeave={reset}
        className="safari-card group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200/70"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="safari-card__spotlight" />
          <div className="safari-card__sheen" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="relative p-5 sm:p-6">
          <div className="safari-card__accent" />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400 transition-[letter-spacing] duration-500 group-hover:tracking-[0.28em]">
            {card.duration}
          </p>
          <h3 className="mt-2 font-serif text-xl sm:text-2xl">{card.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">{card.desc}</p>
          <NavLink
            to={card.href}
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] transition-all duration-300 hover:gap-4"
          >
            EXPLORE
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      </article>
    </Reveal>
  )
}

export default function SafariCollection() {
  return (
    <section id="explore" className="bg-brand-cream/40 py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Curated Itineraries</p>
            <h2 className="mt-3">Our Safari Collection</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-brand-muted sm:text-base">
              Six signature journeys across East Africa — each itinerary handcrafted by our travel designers, every
              lodge personally vetted, every moment privately curated.
            </p>
          </div>
        </Reveal>

        <div className="cards-scroll-3 mt-12 gap-6 md:mt-14 md:gap-8">
          {cards.map((c, i) => (
            <SafariCard key={c.title} card={c} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <NavLink to="/safari-collections" className="btn-primary">
              VIEW ALL SAFARI COLLECTIONS
            </NavLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
