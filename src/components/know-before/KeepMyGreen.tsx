import Picture from '@/components/Picture'
import Reveal, { Stagger } from '@/components/ui/Reveal'

const practices = [
  'We work with accommodation and transport partners who meet our own environmental standards — not just the ones with the best views.',
  'A portion of every park entry and conservation fee on your itinerary goes directly toward anti-poaching efforts, habitat protection, and wildlife research.',
  'We prioritise hiring guides, drivers, and camp staff from the communities neighbouring the parks we operate in, so tourism revenue stays local.',
  'We keep group sizes manageable and routes considerate of wildlife, reducing pressure on high-traffic viewing areas.',
  'We actively reduce single-use plastics across our own operations and encourage our partners to do the same.',
]

const guestTips = [
  { tip: 'Bring a reusable water bottle and refill it at camp, rather than buying bottled water at every stop.' },
  { tip: 'Choose reef- and eco-safe sunscreen and insect repellent, especially near lakes, rivers, and coastal waters.' },
  { tip: "Keep a respectful distance from wildlife and follow your guide's lead — for their safety and yours." },
  { tip: "Buy local where you can — community cooperatives and local curio markets put your spending directly into the hands of the people who live alongside the wildlife you've come to see." },
  { tip: 'Leave every campsite, viewpoint, and trail exactly as you found it. Nothing taken, nothing left behind.' },
]

const impact = [
  {
    label: 'Park & Conservation Fees',
    description: 'Anti-poaching patrols, habitat protection, and wildlife research across the parks we visit',
  },
  {
    label: 'Local Guides & Crew',
    description: 'Our team is hired from communities neighbouring the parks we operate in',
  },
  {
    label: 'Community Partnerships',
    description: 'Schools, clean water projects, and craft cooperatives supported through our community fund',
  },
  {
    label: 'Camp & Lodge Partners',
    description: 'Selected for their own conservation and sustainability practices, not just their views',
  },
]

export default function KeepMyGreen() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 text-white">
        <Picture
          src="/images/parks/uganda/murchison-falls/dsc-7081.jpg"
          alt="Wild landscape"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="eyebrow text-white/70">Our Commitment</p>
            <h2 className="mt-4 font-serif text-xl sm:text-3xl lg:text-4xl">Keep My Safari Green</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Wild places stay wild because of the choices we make before, during, and after every trip. Keep My Safari Green is MasterPolo Safaris' promise: that the wonder you experience on your trip doesn't come at the cost of the places that make it possible. It shapes who we partner with, how we operate, and what we ask of every guest who travels with us.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              East Africa's parks and reserves are under real pressure — from habitat loss, climate change, and the sheer popularity of the destinations that draw travellers here in the first place. Responsible tourism isn't a marketing line for us; it's the difference between these landscapes thriving for the next generation, or not.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="section-rule" />
            <h3 className="mt-4 font-serif text-lg sm:text-2xl">How We Operate Responsibly</h3>
            <ul className="mt-5 space-y-3">
              {practices.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600">
                  <span className="mt-1 text-green-600">✦</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h3 className="mt-12 font-serif text-lg sm:text-2xl">Where Your Money Goes</h3>
            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerMs={70}>
              {impact.map(({ label, description }) => (
                <div
                  key={label}
                  className="rounded-md border border-green-100 bg-green-50 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-700">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
              ))}
            </Stagger>
          </Reveal>

          <Reveal>
            <div className="section-rule mt-12" />
            <h3 className="mt-4 font-serif text-lg sm:text-2xl">How You Can Travel Green With Us</h3>
            <p className="mt-2 text-sm text-neutral-500">Sustainability on safari isn't just about what we do behind the scenes — small choices from guests add up too.</p>
            <ul className="mt-5 space-y-3">
              {guestTips.map(({ tip }) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600">
                  <span className="mt-1 text-green-600">✦</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
