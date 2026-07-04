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
      <section id="keep-green" className="relative isolate overflow-hidden py-24 text-white">
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
            <h2 className="mt-4 text-white">Keep My Safari Green</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Wild places stay wild because of the choices we make before, during, and after every trip. Keep My Safari Green is Still Wild Safaris' promise: that the wonder you experience on your trip doesn't come at the cost of the places that make it possible. It shapes who we partner with, how we operate, and what we ask of every guest who travels with us.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              East Africa's parks and reserves are under real pressure — from habitat loss, climate change, and the sheer popularity of the destinations that draw travellers here in the first place. Responsible tourism isn't a marketing line for us; it's the difference between these landscapes thriving for the next generation, or not.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16">
        <Picture
          src="/images/parks/rwanda/akagera/wilderness-magashi-7.jpg"
          alt="Wilderness Magashi camp, Akagera National Park, Rwanda"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />

        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="section-rule" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <h3 className="mt-4 text-lg text-white sm:text-2xl">How We Operate Responsibly</h3>
            <ul className="mt-5 space-y-3">
              {practices.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h3 className="mt-12 text-lg text-white sm:text-2xl">Where Your Money Goes</h3>
            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerMs={70}>
              {impact.map(({ label, description }) => (
                <div
                  key={label}
                  className="rounded-md bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-300">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
                </div>
              ))}
            </Stagger>
          </Reveal>

          <Reveal>
            <div className="section-rule mt-12" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <h3 className="mt-4 text-lg text-white sm:text-2xl">How You Can Travel Green With Us</h3>
            <p className="mt-2 text-sm text-white/70">Sustainability on safari isn't just about what we do behind the scenes — small choices from guests add up too.</p>
            <ul className="mt-5 space-y-3">
              {guestTips.map(({ tip }) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400/70" />
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
