import { useState } from 'react'
import Reveal, { Stagger } from '@/components/ui/Reveal'

const faqs = [
  {
    q: 'When is the best time to go on safari?',
    a: 'It depends on what you want to see. June to October (dry season) offers the best wildlife visibility and is peak season for events like the wildebeest migration. The shoulder months (November and March–May) bring lower prices, fewer crowds, and lush green scenery, with shorter, predictable rain showers.',
  },
  {
    q: 'Do I need a visa?',
    a: "Most nationalities require a visa or e-visa for travel in East Africa. Requirements vary by country and nationality, so we recommend checking with the relevant embassy or e-visa portal at least a few weeks before departure. We're happy to point you in the right direction when you book.",
  },
  {
    q: 'What vaccinations do I need?',
    a: 'Requirements vary by country of origin and destination. A Yellow Fever vaccination certificate is mandatory for entry into Uganda and Rwanda. We strongly recommend visiting a travel health clinic 4–6 weeks before departure for personalised advice, including malaria prevention and any required certificates.',
  },
  {
    q: 'Is it safe to go on safari?',
    a: "Yes — safari travel with an experienced operator is a very safe way to experience wildlife. Our guides are trained in safety protocols, our vehicles are well maintained, and we work only with vetted accommodation partners. As with all travel, sensible precautions and following your guide's instructions are part of having a smooth trip.",
  },
  {
    q: 'What does a typical day on safari look like?',
    a: 'Most days start with an early game drive (often before sunrise, when wildlife is most active), followed by breakfast back at camp. Afternoons are for resting, a second game drive, or an optional activity, with dinner and stories around the fire to close the day.',
  },
  {
    q: 'What is a typical safari vehicle like?',
    a: 'Our private safaris use 4×4 Toyota Land Cruisers with a pop-up roof for unobstructed game viewing. Each vehicle is fitted with a fridge, charging ports, binoculars, and a reference library — and you only ever share the vehicle with your own party.',
  },
  {
    q: 'Will I have phone or internet access?',
    a: 'Many lodges and camps offer Wi-Fi, though it can be slower or limited in more remote areas — part of the appeal of being off the grid. Mobile signal is generally available near towns and reception areas, but can drop out in the bush. We recommend letting people know you may be less reachable for a few days. Local SIM cards are easy to obtain in Kampala or Kigali.',
  },
  {
    q: 'Can children come on safari?',
    a: "Yes, many of our itineraries are family-friendly. Some activities and properties have minimum age requirements (commonly 6–12 years for game drives, higher for walking safaris), which we'll flag when planning your trip.",
  },
  {
    q: 'How much should I tip?',
    a: "Tipping is appreciated but never obligatory. As a general guide, many travellers tip driver-guides around USD 10–15 per group per day, and camp staff around USD 5–10 per group per day, often left in a communal staff tip box. We'll include more specific guidance with your final itinerary.",
  },
  {
    q: 'How much cash should I bring?',
    a: "Most costs are covered in your package, but it's worth carrying some cash in USD for tips, curios, drinks not included in your package, and any optional extras. Card facilities are limited in remote areas, so cash is the most reliable option once you're out of the city.",
  },
  {
    q: 'What happens if it rains during my safari?',
    a: "Game drives generally continue in light rain — wildlife doesn't stop for weather, and rain often brings out fresh activity. In the rare case of a serious weather disruption, your guide will adjust the day's plan to keep you safe and comfortable.",
  },
  {
    q: 'Can I bring my camera and drone?',
    a: 'Cameras are very welcome — bring spare batteries and memory cards, as charging points can be limited in remote camps. Drones require prior park permission and a permit in most reserves; please confirm with us before packing one, as unauthorised use can result in confiscation.',
  },
  {
    q: 'What is the luggage limit for internal flights?',
    a: 'Bush flights operated by Aerolink, Bar Aviation, or Akagera Aviation typically permit 15 kg of soft-sided luggage per person, including carry-on. We will confirm exact limits for your specific itinerary.',
  },
  {
    q: 'What is MasterPolo Safaris doing to protect the environment?',
    a: "It's central to how we operate. Our Keep My Safari Green commitment means working with conservation-linked partners, encouraging guests to reduce single-use plastics, and ensuring park and conservation fees go toward protecting the wildlife and landscapes we all come to see.",
  },
]

export default function SafariFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-center font-serif text-xl sm:text-3xl lg:text-4xl">Safari FAQ for East Africa</h2>
          <p className="mt-2 text-center text-sm text-neutral-500">
            Answers to the questions we hear most before guests travel with us.
          </p>
        </Reveal>

        <Stagger className="mt-10 space-y-3" staggerMs={40}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className="card-lift rounded-md border border-neutral-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm">{f.q}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-neutral-100 px-5 py-4 text-sm leading-relaxed text-neutral-600">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Stagger>

        <Reveal>
          <p className="mt-8 text-center text-sm text-neutral-500">
            Still have questions? <a href="/contact" className="underline underline-offset-2 hover:text-neutral-800">Reach out any time</a> — we're always happy to help you plan with confidence.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
