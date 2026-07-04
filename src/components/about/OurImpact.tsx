import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

const items = [
  { label: 'Trips Run Since 2024', body: 'Building steadily, one regenerative itinerary at a time.' },
  { label: 'Reusable Bottles Distributed', body: 'Cutting single-use plastic out of every multi-day safari.' },
  { label: 'Eco-Lodge Partners Onboarded', body: 'And growing every season.' },
  { label: 'Carbon Offset Contributions', body: 'Channelled into verified East African reforestation projects.' },
]

export default function OurImpact() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/parks/rwanda/akagera/1738327984198-magashi-boating-12-24-tc-022.jpg"
        alt="Local guide at work on a boat at Akagera National Park, Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <h2 className="mt-3 text-white">Our Impact So Far</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
              We're a young company, and we'd rather under-promise than inflate our numbers. Here's where we stand
              as we grow.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 80}>
              <div className="h-full rounded-md bg-white/10 p-5 text-center ring-1 ring-white/20 backdrop-blur-sm">
                <h3 className="text-sm text-white">{it.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/80">
            As we scale, we'll publish real, audited numbers here rather than vague claims. Transparency is part of
            the deal.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
