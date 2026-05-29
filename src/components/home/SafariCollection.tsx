import { NavLink } from 'react-router-dom'

type Card = {
  image: string
  duration: string
  title: string
  desc: string
  href: string
}

const cards: Card[] = [
  {
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
    duration: '11 Days  ·  Uganda & Rwanda',
    title: 'Ultimate Gorilla Expedition',
    desc: 'A journey through the heart of East Africa, from Kampala to the misty Virungas — twin gorilla treks across Bwindi and Volcanoes.',
    href: '/safari-collections',
  },
  {
    image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg',
    duration: '9 Days  ·  Uganda',
    title: 'Uganda Primate & Adventure Circuit',
    desc: "A perfect blend of adrenaline, wildlife, and Uganda's world-famous primate encounters — gorillas, chimpanzees and the savannahs of Queen Elizabeth.",
    href: '/safari-collections',
  },
  {
    image: '/images/lodges/rwanda/volcanoes-national-park/wildernes-bisate-lodge/1753110933515-bisate-gorilla-trekking-06-25-fr-31.jpg',
    duration: '4 Days  ·  Rwanda',
    title: 'The "Ikaze" (Welcome) Short Break',
    desc: 'The essence of Rwanda in four days. A short but profound encounter with mountain gorillas, served with eco-luxury at Wilderness Bisate.',
    href: '/safari-collections',
  },
]

export default function SafariCollection() {
  return (
    <section id="explore" className="bg-brand-cream/40 py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="text-center">
          <p className="eyebrow">Curated Itineraries</p>
          <h2 className="mt-3">Our Safari Collection</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-brand-muted sm:text-base">
            Six signature journeys across East Africa — each itinerary handcrafted by our travel designers, every
            lodge personally vetted, every moment privately curated.
          </p>
        </div>

        <div className="cards-scroll-3 mt-12 gap-6 md:mt-14 md:gap-8">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200/70 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[11px] font-medium tracking-[0.18em] text-brand-gold uppercase">{c.duration}</p>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{c.desc}</p>
                <NavLink
                  to={c.href}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brand-green transition hover:gap-3 hover:text-brand-green-dark"
                >
                  EXPLORE
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </NavLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <NavLink to="/safari-collections" className="btn-primary">
            VIEW ALL SAFARI COLLECTIONS
          </NavLink>
        </div>
      </div>
    </section>
  )
}
