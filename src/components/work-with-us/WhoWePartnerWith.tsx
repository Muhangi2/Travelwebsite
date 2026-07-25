import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

const categories = [
  {
    title: 'Travel Agents & Travel Agencies',
    body: 'Independent agents and agency teams selling Africa to their clients, who need a dependable local operator to turn a sold itinerary into a flawlessly run trip without having to manage logistics, permits, or vehicles themselves.',
  },
  {
    title: 'Tour Operators',
    body: 'Inbound and outbound tour operators who build East Africa itineraries for their own client base and need a ground partner who can execute reliably at volume, season after season, without surprises.',
  },
  {
    title: 'Other DMCs',
    body: 'DMCs based in other African countries, or globally, who occasionally need Uganda or Rwanda coverage outside their usual footprint and would rather sub-contract to a specialist than build local capacity from scratch.',
  },
  {
    title: 'Specialist & Niche Operators',
    body: 'Birding specialists, photography tour operators, honeymoon and luxury travel designers, conservation and volunteering organisations, and university or research groups needing logistics support for fieldwork in Uganda or Rwanda.',
  },
  {
    title: 'Corporate & MICE Groups',
    body: 'Companies organising incentive travel, corporate retreats, or conference add-on safaris for delegates visiting East Africa, who need a single accountable point of contact for everything on the ground.',
  },
]

export default function WhoWePartnerWith() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/activities/gorilla-trekking/32-mount-gahinga-lodge-gorilla.jpg"
        alt="Mountain gorilla family in the forest near Mgahinga"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <h2 className="mt-3 text-white">Who We Work With</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
              We partner with businesses abroad who sell East Africa but need a trusted team actually standing on
              the ground in Uganda and Rwanda. If you fall into any of the categories below, we're already built to
              support you.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="h-full rounded-md bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm">
                <h3 className="text-base text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
