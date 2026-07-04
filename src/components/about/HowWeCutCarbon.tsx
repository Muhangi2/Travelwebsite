import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

const items = [
  {
    title: 'Reusable Bottles on Every Trip',
    body: 'Every guest receives a refillable bottle at the start of their safari, cutting down dramatically on single-use plastic waste across multi-day itineraries.',
  },
  {
    title: 'Eco-Lodge Partnerships',
    body: 'We prioritise accommodation built and run on genuine sustainability principles: solar power, water recycling, local sourcing, and low-impact construction.',
  },
  {
    title: 'Carbon-Conscious Routing',
    body: 'We design itineraries that reduce unnecessary transfers and flights wherever a lower-carbon alternative exists without compromising the experience.',
  },
  {
    title: 'Destination Selection',
    body: 'We actively promote destinations and tour circuits that are structured around conservation outcomes, not just wildlife viewing.',
  },
  {
    title: 'Carbon Offset Partnerships',
    body: 'A portion of every booking contributes to verified offset and reforestation initiatives across East Africa.',
  },
]

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
    <path d="M21 3c-9 0-15 5-15 13v5h5c8 0 13-6 13-15-1 0-2 0-3 .1" />
    <path d="M9 17c2-3 5-6 9-8" />
  </svg>
)

export default function HowWeCutCarbon() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7863.jpg"
        alt="Buhoma Lodge at dusk, on the edge of Bwindi Impenetrable Forest"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-white">How We Cut Down Carbon on Safari</h2>
        </Reveal>

        <div className="cards-scroll-4 mt-10 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="h-full rounded-md bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15">
                  <LeafIcon />
                </div>
                <h3 className="mt-4 text-base text-white">{it.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
