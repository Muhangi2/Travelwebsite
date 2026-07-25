import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function BeyondSustainability() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/parks/uganda/lake-mburo/16498738142-978e9993ef-o.jpg"
        alt="Buffalo herd grazing at golden hour, Lake Mburo National Park, Uganda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-3 text-white">Beyond Sustainability</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            "Sustainable travel" has become a marketing checkbox. Reusable straws. A towel-reuse card on the bed.
            Technically true, often meaningless. We use the word regenerative deliberately, because it asks a harder
            and more honest question: did this trip leave the place better off than before we arrived?
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal variant="left">
            <div className="h-full rounded-md bg-white/10 p-6 text-left ring-1 ring-white/20 backdrop-blur-sm">
              <h3 className="text-base text-white">Sustainable Travel</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Aims to do no further harm. Minimise waste, reduce emissions, leave no trace.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="h-full rounded-md bg-white p-6 text-left text-neutral-900 shadow-lg">
              <h3 className="text-base">Regenerative Travel</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Goes further. It aims to actively restore healthier ecosystems, stronger local economies, more
                resilient communities.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p className="mt-8 text-center text-sm font-medium text-white">
            Sustainability is the floor. Regeneration is the goal we build every itinerary towards.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
