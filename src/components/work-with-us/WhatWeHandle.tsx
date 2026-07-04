import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

const items = [
  {
    title: 'Full Itinerary Execution',
    body: 'Vehicles, drivers, guides, accommodation, and park logistics handled end-to-end across both countries.',
  },
  {
    title: 'White-Label Packages',
    body: 'Your brand, our ground operations. Your clients never need to know who is running the logistics behind the scenes.',
  },
  {
    title: 'Permits & Park Bookings',
    body: 'Gorilla and chimp trekking permits, park entry fees, and all related paperwork in Uganda and Rwanda, secured and managed in advance.',
  },
  {
    title: 'Cross-Border Coordination',
    body: 'Seamless Uganda-Rwanda combined itineraries, including border logistics and timing.',
  },
  {
    title: 'Local Vetting',
    body: "Every lodge, driver, and guide in our network is vetted against our own sustainability and regenerative travel standards, so your client's experience is consistent every time.",
  },
  {
    title: 'Crisis & On-Ground Support',
    body: 'A real team in-country who can respond immediately if anything changes mid-trip.',
  },
]

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default function WhatWeHandle() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/25-kyambura-gorge-rf-dsc-3399-copie.jpg"
        alt="Aerial view of Kyambura Gorge, Queen Elizabeth National Park, Uganda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/75" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-white">What We Handle As Your Ground Partner</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="h-full rounded-md bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15">
                  <CheckIcon />
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
