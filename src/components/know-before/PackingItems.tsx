import Reveal, { Stagger } from '@/components/ui/Reveal'

const categories = [
  {
    title: 'Clothing',
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
    title: 'Footwear',
    items: [
      'Comfortable closed walking shoes for game drives and short walks.',
      'Sandals or flip-flops for relaxing around camp.',
      'Sturdy boots if your itinerary includes a guided nature walk or trek.',
    ],
  },
  {
    title: 'Health & Toiletries',
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
    title: 'Gear & Accessories',
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
    title: 'Documents & Money',
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
  "Camouflage-pattern clothing — it's reserved for military use and restricted for civilians in several East African countries.",
  "Drones, unless you've confirmed in advance that your destination park permits them and you have the required permit.",
  'Single-use plastic bags — several parks and reserves have banned them entirely.',
]

const climate = [
  { season: 'Dry season (Jun–Oct)', day: 'Warm', night: 'Cold mornings', notes: 'Best wildlife visibility, dusty roads' },
  { season: 'Short rains (Nov)', day: 'Warm', night: 'Mild', notes: 'Brief afternoon showers' },
  { season: 'Long rains (Mar–May)', day: 'Warm', night: 'Mild', notes: 'Lush scenery, fewer crowds — pack rain gear' },
]

export default function PackingItems() {
  return (
    <section className="section-alt py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal variant="scale">
          <div className="section-rule mx-auto" />
          <h2 className="mt-4 text-center">Packing List</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-neutral-500">
            Everything you need for a comfortable, safari-ready trip — and nothing you don't. Packing for a safari is less about packing more, and more about packing right.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerMs={70}>
          {categories.map(({ title, items }) => (
            <div key={title} className="rounded-md border border-neutral-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{title}</p>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-10 rounded-md border border-red-100 bg-red-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-red-600">What NOT to Bring</p>
            <ul className="mt-3 space-y-2">
              {doNotBring.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600">
                  <span className="mt-0.5 shrink-0 text-red-400">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mt-12 text-lg sm:text-2xl text-center">Climate at a Glance</h3>
          <p className="mt-1 text-center text-xs text-neutral-400">Exact temperatures vary by region and altitude — your itinerary will include more specific guidance.</p>
          <div className="mt-5 overflow-x-auto rounded-md border border-neutral-200">
            <table className="w-full min-w-[480px] text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500">Season</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500">Day Temp</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500">Night Temp</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {climate.map((row) => (
                  <tr key={row.season} className="bg-white">
                    <td className="px-4 py-3 font-medium text-neutral-700">{row.season}</td>
                    <td className="px-4 py-3 text-neutral-600">{row.day}</td>
                    <td className="px-4 py-3 text-neutral-600">{row.night}</td>
                    <td className="px-4 py-3 text-neutral-500">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
