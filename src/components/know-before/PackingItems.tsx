import Reveal, { Stagger } from '@/components/ui/Reveal'

const categories = [
  {
    number: '01',
    title: 'Clothing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 3h11M6.5 3C5 3 3 4.5 3 7l1.5 2.5L6 8v13h12V8l1.5 1.5L21 7c0-2.5-2-4-3.5-4M6.5 3C7.5 3 9 4 9 5.5S10.5 7 12 7s3-1.5 3-1.5S16.5 3 17.5 3" />
      </svg>
    ),
    items: [
      "Neutral-coloured clothing — khaki, olive, sand and brown blend into the bush and won't startle wildlife. Avoid bright white and dark blue or black (attracts tsetse flies in some areas).",
      'Lightweight, long-sleeved shirts and trousers for sun and insect protection, especially at dawn and dusk.',
      'A warm fleece or light jacket — early morning game drives can be surprisingly cold, even in the dry season.',
      'A light rain jacket if travelling in the wetter months.',
      'Comfortable shorts or t-shirts for warm afternoons at camp.',
      'Swimwear, if your lodge or camp has a pool.',
      'A wide-brimmed hat or cap for sun protection.',
    ],
  },
  {
    number: '02',
    title: 'Footwear',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18M3 17c0 1.1.9 2 2 2h14a2 2 0 002-2M3 17l2-8h4l1 4h4l2-4h3l2 8" />
      </svg>
    ),
    items: [
      'Comfortable closed walking shoes for game drives and short walks.',
      'Sandals or flip-flops for relaxing around camp.',
      'Sturdy boots if your itinerary includes a guided nature walk or trek.',
    ],
  },
  {
    number: '03',
    title: 'Health & Toiletries',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    items: [
      'Any personal medication in its original packaging, plus a copy of the prescription.',
      'Anti-malarial medication, if prescribed by your doctor — please consult a travel clinic before departure.',
      'Insect repellent, ideally DEET-based, for evenings and early mornings.',
      'Sunscreen (reef- and eco-safe where your itinerary includes lake or coastal areas).',
      'A small personal first-aid kit — plasters, rehydration salts, basic pain relief.',
      'Hand sanitiser and travel-size toiletries.',
    ],
  },
  {
    number: '04',
    title: 'Gear & Accessories',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h3l2-3h8l2 3h3a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z" />
      </svg>
    ),
    items: [
      'Binoculars — a must for spotting wildlife at a distance.',
      'Camera, spare batteries and memory cards.',
      'A reusable water bottle.',
      'A power bank and a universal travel adapter (East Africa uses Type G/D, 220–240V).',
      'A small daypack for game drives.',
      'A headlamp or torch for camps without 24-hour power.',
      'A soft-sided duffel bag rather than a hard suitcase — easier to pack into safari vehicles and small aircraft.',
    ],
  },
  {
    number: '05',
    title: 'Documents & Money',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
    items: [
      'Passport, valid for at least 6 months beyond your travel dates.',
      'Visa or e-visa confirmation, if required for your nationality.',
      'Proof of travel insurance, including medical evacuation cover.',
      'A printed or digital copy of your booking confirmation and itinerary.',
      'Cash for tips, curios and any items not included in your package.',
    ],
  },
]

const doNotBring = [
  { label: 'Camouflage clothing', detail: "Reserved for military use and restricted for civilians in several East African countries." },
  { label: 'Drones', detail: "Unless you've confirmed the destination park permits them and you hold the required permit." },
  { label: 'Single-use plastic bags', detail: "Several parks and reserves have banned them entirely." },
]

const climate = [
  { season: 'Dry Season', months: 'Jun – Oct', icon: '☀', day: 'Warm', night: 'Cold mornings', notes: 'Best wildlife visibility, dusty roads' },
  { season: 'Short Rains', months: 'Nov', icon: '🌦', day: 'Warm', night: 'Mild', notes: 'Brief afternoon showers' },
  { season: 'Long Rains', months: 'Mar – May', icon: '🌿', day: 'Warm', night: 'Mild', notes: 'Lush scenery, fewer crowds — pack rain gear' },
]

export default function PackingItems() {
  return (
    <section className="bg-[#F7F4EF] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <Reveal variant="scale">
          <div className="section-rule mx-auto" />
          <h2 className="mt-4 text-center">Packing List</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-neutral-500">
            Everything you need for a comfortable, safari-ready trip — and nothing you don't. Packing for a safari is less about packing more, and more about packing right.
          </p>
        </Reveal>

        {/* Category rows */}
        <div className="mt-14 space-y-2">
          {categories.map(({ number, title, icon, items }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="group overflow-hidden rounded-xl bg-white transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-6 p-7 sm:flex-row sm:gap-10">
                  {/* Left: number + icon + title */}
                  <div className="flex shrink-0 items-start gap-4 sm:w-52 sm:flex-col sm:gap-3">
                    <span className="font-mono text-xs text-neutral-300">{number}</span>
                    <div className="text-[#8B6F4E]">{icon}</div>
                    <h3 className="text-base font-semibold tracking-tight text-neutral-800 sm:mt-0">{title}</h3>
                  </div>

                  {/* Divider */}
                  <div className="hidden w-px self-stretch bg-neutral-100 sm:block" />

                  {/* Right: items */}
                  <ul className="flex-1 columns-1 gap-x-8 space-y-2 sm:columns-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 break-inside-avoid text-sm leading-relaxed text-neutral-600">
                        <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-[#8B6F4E]" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Do Not Bring */}
        <Reveal>
          <div className="mt-6 overflow-hidden rounded-xl bg-neutral-900 p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
                <span className="text-sm text-red-400">✕</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400">What NOT to Bring</p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {doNotBring.map(({ label, detail }) => (
                <div key={label} className="rounded-lg bg-white/5 px-4 py-4">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Climate at a Glance */}
        <Reveal>
          <div className="mt-14">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Section 06</p>
              <h3 className="mt-1 text-2xl font-semibold text-neutral-800">Climate at a Glance</h3>
              <p className="mt-1 text-sm text-neutral-400">Exact temperatures vary by region and altitude — your itinerary will include more specific guidance.</p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {climate.map(({ season, months, icon, day, night, notes }) => (
                <div key={season} className="rounded-xl border border-neutral-200 bg-white p-6">
                  <div className="text-3xl">{icon}</div>
                  <p className="mt-3 text-base font-semibold text-neutral-800">{season}</p>
                  <p className="text-xs text-[#8B6F4E]">{months}</p>
                  <div className="mt-4 space-y-1.5 border-t border-neutral-100 pt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-400">Day</span>
                      <span className="font-medium text-neutral-700">{day}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-400">Night</span>
                      <span className="font-medium text-neutral-700">{night}</span>
                    </div>
                    <div className="pt-1 text-xs leading-relaxed text-neutral-400">{notes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
