import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

const items = [
  {
    title: 'Local-First Guiding',
    body: 'We prioritise hiring guides, drivers, and staff from the communities surrounding the destinations we operate in.',
  },
  {
    title: 'Profit-Share Commitment',
    body: 'A percentage of every booking is directed back into community and conservation partners along our routes.',
  },
  {
    title: 'Women- and Youth-Led Partnerships',
    body: 'We actively seek out and support women-led and youth-led guiding and hospitality initiatives across East Africa.',
  },
  {
    title: 'Reforestation Partnerships',
    body: 'We work with local reforestation and conservation initiatives to put real trees and real funding behind every trip we run.',
  },
]

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
    <path d="M21 3c-9 0-15 5-15 13v5h5c8 0 13-6 13-15-1 0-2 0-3 .1" />
    <path d="M9 17c2-3 5-6 9-8" />
  </svg>
)

export default function GivingBackBuiltIn() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/parks/rwanda/akagera/wilderness-magashi-23.jpg"
        alt="Community members sharing a cultural demonstration near Akagera National Park, Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-white">Giving Back, Built In Not Bolted On</h2>
          </div>
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
