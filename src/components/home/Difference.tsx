import { useState } from 'react'
import Picture from '@/components/Picture'

const tabs = [
  {
    label: 'Local Roots',
    title: 'Locally Rooted, Globally Responsible',
    body: 'We forge deep partnerships with community-owned conservancies and employ local guides, ensuring your adventure directly supports wildlife protection and empowers the people who live alongside it. This approach fosters sustainable economic growth and authentic cultural exchange, making every journey a force for good.',
    image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
  },
  {
    label: 'Low Impact',
    title: 'Low Impact, High Reward',
    body: 'Experience the wild intimately with our small groups and eco-certified camps. We eschew mass-market tourism, offering exclusive access to pristine wilderness without the crowds. Our philosophy is simple: minimize our footprint, maximize your connection with nature. This means more profound encounters and a truly undisturbed safari experience.',
    image: '/images/lodges/rwanda/volcanoes-national-park/wildernes-bisate-lodge/1753110933515-bisate-gorilla-trekking-06-25-fr-31.jpg',
  },
  {
    label: 'Tailored',
    title: 'Built Around You, Not a Brochure',
    body: 'Your dream safari is unique, and so is our approach. Whether you envision a classic 7-day expedition through the Serengeti or a bespoke month-long exploration of hidden gems, we meticulously tailor every detail. From selecting the perfect camps to curating daily activities, we transform your aspirations into an unforgettable reality. You dream it. We track it down.',
    image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg',
  },
  {
    label: 'Carbon-Conscious',
    title: 'Carbon-Conscious Travel, Standard',
    body: 'Environmental stewardship is at the heart of our operations. Every trip booked with Still Wild Safaris is 100% carbon offset, and we actively reinvest in vital tree-planting initiatives and anti-poaching efforts. For us, being "green" isn\'t merely a label; it\'s an integral part of our daily practice, ensuring a healthier planet for future generations.',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  },
]

export default function Difference() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Why Still Wild Safaris</p>
            <h2 className="mt-3">Not just another safari. A better way to go wild.</h2>
            <p className="mt-4 font-serif text-base italic text-brand-charcoal sm:text-lg">
              Small. Thoughtful. Wild by nature.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
            At Still Wild Safaris, we believe that extraordinary adventure and profound conservation are not mutually
            exclusive; they are intrinsically linked. We craft journeys that immerse you in the breathtaking beauty of
            Africa while actively contributing to its preservation — a promise to the wild and its communities.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="What sets us apart"
          className="mt-10 flex items-center gap-4 overflow-x-auto border-b border-brand-ink/10 pb-px sm:gap-8 md:mt-14"
        >
          {tabs.map((tab, idx) => {
            const isActive = idx === active
            return (
              <button
                key={tab.label}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(idx)}
                className={`relative whitespace-nowrap px-1 pb-3 text-[11px] font-medium uppercase tracking-[0.2em] transition sm:text-xs ${
                  isActive ? 'text-brand-ink' : 'text-brand-muted hover:text-brand-ink'
                }`}
              >
                {tab.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-px h-0.5 transition ${
                    isActive ? 'bg-brand-gold' : 'bg-transparent'
                  }`}
                />
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Picture
              key={current.image}
              src={current.image}
              alt={current.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl leading-tight text-brand-ink sm:text-4xl md:text-5xl">
              {current.title}
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-brand-muted sm:text-base">{current.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
