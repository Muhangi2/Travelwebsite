import { useState } from 'react'

const faqs = [
  {
    q: 'What is the best time to visit East Africa for a safari?',
    a: 'The dry seasons (June–October and December–February) offer the best wildlife viewing. Specific timing depends on what you want to see — gorilla trekking is year-round but most comfortable in dry months, while the wildebeest migration is best between July and October.',
  },
  {
    q: 'What is a typical safari vehicle like?',
    a: 'Our private safaris use 4×4 Toyota Land Cruisers with a pop-up roof for unobstructed game viewing. Each vehicle is fitted with a fridge, charging ports, binoculars, and a reference library — and you only ever share the vehicle with your own party.',
  },
  {
    q: 'Is it safe to travel to East Africa?',
    a: 'Yes. Uganda, Rwanda, and Kenya are politically stable and welcoming to visitors. Our team monitors local conditions continuously and adjusts itineraries if needed. We also recommend comprehensive travel insurance.',
  },
  {
    q: 'What is the luggage limit for internal flights?',
    a: 'Bush flights operated by Aerolink, Bar Aviation, or Akagera Aviation typically permit 15 kg of soft-sided luggage per person, including carry-on. We will confirm exact limits for your specific itinerary.',
  },
  {
    q: 'Will I have Wi-Fi and phone connectivity?',
    a: 'Most lodges offer Wi-Fi in main areas, though connections can be slow. Mobile coverage is patchy in remote parks. We recommend embracing the disconnect — but local SIM cards are easy to obtain in Kampala or Kigali if needed.',
  },
]

export default function SafariFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-serif text-3xl">Safari FAQ for East Africa</h2>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className="rounded-md border border-neutral-200 bg-white">
                <button
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
                    className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-neutral-100 px-5 py-4 text-sm leading-relaxed text-neutral-600">
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
