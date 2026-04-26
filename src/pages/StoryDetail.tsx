import { useState } from 'react'

const safariTypes = [
  'Gorilla Trekking',
  'Big Five & Akagera',
  'Chimpanzees of Nyungwe',
  'Lake Kivu Retreat',
  'Full-Spectrum Rwanda',
]

export default function StoryDetail() {
  const [form, setForm] = useState({ name: '', email: '', safariType: '', consent: false })

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="mx-auto flex min-h-[42svh] max-w-4xl items-center justify-center px-6 pt-24 text-center text-white">
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">Stories from the Wild</h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1600&q=80"
            alt="Mountain gorilla portrait"
            className="aspect-[16/10] w-full object-cover"
          />
          <span className="absolute right-4 top-4 rounded-full bg-brand-green/90 px-3 py-1 text-[10px] tracking-wide text-white">
            Gorillas, Rwanda
          </span>
        </div>

        <p className="mt-6 text-[10px] tracking-wide text-brand-green">
          Author: MasterPolo Safaris Team | Jan 2026
        </p>

        <h1 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
          Beyond the Gorillas: Discovering Rwanda's Big Five and Hidden Gems
        </h1>

        <p className="mt-6 font-semibold text-sm text-neutral-900">Rwanda Big Five Safari</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          When most travelers think of a Rwanda safari, the iconic image of a silverback gorilla in the misty mountains
          of Volcanoes National Park immediately comes to mind. While gorilla trekking is undoubtedly a life-changing
          experience, Rwanda is a complete safari destination, offering a diversity of ecosystems that rivals its East
          African neighbors. For the savvy traveler in 2026, the true adventure lies in discovering the country's "Big
          Five" and its stunning, less-traveled national parks.
        </p>

        <h2 className="mt-10 font-serif text-2xl">Akagera National Park: Rwanda's Big Five Comeback Story</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          Akagera National Park, located in the east of Rwanda, is the country's only savannah park and the setting
          for a remarkable conservation success story. Once decimated by conflict and poaching, Akagera has been
          meticulously restored and is now a thriving ecosystem where the{' '}
          <span className="font-semibold">Big Five (Lion, Leopard, Rhino, Elephant, and Buffalo)</span> roam freely.
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-forest text-white">
                <th className="px-4 py-3 text-left font-medium">Detail</th>
                <th className="px-4 py-3 text-left font-medium">Information for 2026</th>
                <th className="px-4 py-3 text-left font-medium">Pro-Tip for Success</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-t border-neutral-100">
                <td className="px-4 py-3 align-top">Cost</td>
                <td className="px-4 py-3 align-top">$1,500 USD per person, per trek</td>
                <td className="px-4 py-3 align-top">
                  Book through a reputable tour operator (see Blog 1) at least 6 months in advance.
                </td>
              </tr>
              <tr className="border-t border-neutral-100">
                <td className="px-4 py-3 align-top">Location</td>
                <td className="px-4 py-3 align-top">Volcanoes National Park (VNP).</td>
                <td className="px-4 py-3 align-top">
                  Permits are non-refundable, but can be transferred in certain circumstances.
                </td>
              </tr>
              <tr className="border-t border-neutral-100">
                <td className="px-4 py-3 align-top">Experience</td>
                <td className="px-4 py-3 align-top">Limited to one hour with the gorillas.</td>
                <td className="px-4 py-3 align-top">
                  Only 8 people are allowed per gorilla family per day, making early booking essential.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-neutral-700">
          The park's management, in partnership with African Parks, has implemented cutting-edge anti-poaching
          technology, making it one of the safest and most exclusive Big Five experiences in Africa 1. Unlike the
          crowded game reserves of Kenya or Tanzania, Akagera offers a tranquil, intimate safari where you can often
          have a sighting all to yourself.
        </p>

        <div className="mt-10 overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1600&q=80"
            alt="Chimpanzee in Nyungwe Forest"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <h2 className="mt-10 font-serif text-2xl">
          Nyungwe Forest National Park: The Realm of Primates and Canopy Walks
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          Moving from the dry savannah, Nyungwe Forest National Park in the southwest is one of the oldest rainforests
          in Africa and a biodiversity hotspot. This park is the ultimate destination for primate enthusiasts, home to
          13 different species, including the charismatic <span className="font-semibold">Chimpanzee</span>.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-neutral-700">
          <span className="font-semibold">Chimpanzee Trekking:</span> Chimpanzee trekking in Nyungwe is a high-energy
          contrast to the more serene gorilla experience. Chimps are highly mobile, and tracking them through the
          dense, mountainous terrain is a thrilling challenge. The reward is observing their complex social behaviors,
          from grooming to hunting, in their natural habitat.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">
          <span className="font-semibold">The Canopy Walkway:</span> For a truly unique perspective, the Nyungwe
          Canopy Walkway is a must-do. This 200-meter-long, 70-meter-high suspension bridge offers a breathtaking view
          over the forest, allowing you to observe the rich birdlife and the forest canopy from above.
        </p>

        <div className="mt-10 overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=1600&q=80"
            alt="Black-and-white colobus monkey"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <h2 className="mt-10 font-serif text-2xl">Lake Kivu: Rwanda's Coastal Escape</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          Rwanda's western border is defined by the stunning shores of Lake Kivu, a vast freshwater lake offering a
          perfect post-safari relaxation spot. The towns of Gisenyi (Rubavu) and Kibuye (Karongi) provide a tranquil
          base for water sports, boat trips, and enjoying the sunset over the Congolese mountains. This is the ideal
          "hidden gem" to round off a high-octane safari, offering a blend of cultural interaction and peaceful
          downtime.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">
          Rwanda is not just a gorilla destination; it is a full-spectrum safari experience. By combining the iconic
          gorilla trek with the Big Five of Akagera and the chimpanzees of Nyungwe, you unlock the full potential of
          this extraordinary country.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm">
          <a href="#" className="text-neutral-600 hover:text-brand-green">&larr; Previous</a>
          <a href="#" className="text-brand-green hover:underline">Next &rarr;</a>
        </div>
      </article>

      <section className="bg-white pb-8">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl leading-tight">
            Begin Your Unforgettable
            <br />
            Rwanda Safari Today!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
            Ready to explore Rwanda beyond the gorillas? The Big Five of Akagera and the chimpanzees of Nyungwe are
            waiting. Don't miss out on the full spectrum of this incredible country's wildlife.
          </p>
          <p className="mt-4 text-sm text-brand-green">
            Your adventure starts with{' '}
            <a href="/contact" className="underline">
              a single click.
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-md bg-neutral-100 p-8 md:p-10">
            <h3 className="text-center font-serif text-2xl">Exclusive Offer: Your Personalized Rwanda Itinerary</h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-neutral-600">
              Sign up below to receive a <span className="font-semibold">free, personalized 7-day Rwanda safari itinerary</span>{' '}
              tailored to your budget and interests, and get access to our exclusive{' '}
              <span className="font-semibold">Gorilla Permit Availability Tracker</span>.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full rounded border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-green"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full rounded border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-green"
                />
              </div>
              <select
                value={form.safariType}
                onChange={(e) => update('safariType', e.target.value)}
                className="w-full rounded border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 outline-none focus:border-brand-green"
              >
                <option value="">Preferred Safari Type</option>
                {safariTypes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <label className="flex items-start gap-2 text-xs text-neutral-600">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-0.5"
                />
                <span>* By signing up, you agree to receive our best Rwanda travel tips and exclusive offers.</span>
              </label>

              <button
                type="submit"
                className="rounded-full bg-brand-green px-7 py-3 text-[10px] font-semibold tracking-[0.2em] text-white shadow hover:bg-brand-green-dark"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
