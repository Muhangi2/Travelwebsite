import Picture from '@/components/Picture'
const points = [
  {
    title: 'Expert Local Guides',
    body: "Our guides are born and raised in East Africa — intimately knowledgeable about the land, the wildlife and the culture. They are passionate storytellers who bring the bush to life.",
  },
  {
    title: 'Tailor-Made Itineraries',
    body: "Your dream safari is unique. We craft personalised itineraries matched to your interests, your travel pace and your budget — adventure-led, family-friendly or romantic.",
  },
  {
    title: 'Commitment to Excellence',
    body: "From the comfortable 4x4 safari vehicles to the lodges we hand-pick, every aspect of your journey is seamlessly delivered to a single high standard.",
  },
  {
    title: '24/7 Support',
    body: "From the moment you land at Entebbe, Kigali or Nairobi until you fly home, our team is reachable around the clock.",
  },
]

export default function Difference() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Why Travel With Us</p>
            <h2 className="mt-3">The MasterPolo Difference</h2>
          </div>
          <p className="font-serif text-lg italic leading-relaxed text-brand-charcoal sm:text-xl">
            We believe a truly great safari depends on the quality of the journey. With us, you are not a tourist —
            you are an explorer.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-14 lg:gap-16">
          <ul className="space-y-6">
            <div className="h-px w-20 bg-brand-gold" />
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif text-lg text-brand-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted sm:text-base">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Picture
              src="/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg"
              alt="Elephants walking along the river at sunset"
              loading="lazy"
              className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
