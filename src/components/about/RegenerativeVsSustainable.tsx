import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function RegenerativeVsSustainable() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/parks/uganda/murchison-falls/dsc-7494.jpg"
        alt="Breakfast laid out on a boat at sunset on the Victoria Nile"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <h2 className="mt-3 text-white">Regenerative, Not Just Sustainable</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
              These two words get used interchangeably in travel marketing, but they mean very different
              things and the difference matters to us.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal variant="left">
            <div className="h-full rounded-md bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm">
              <h3 className="text-base text-white">Sustainable Travel</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Aims to do no further harm. Minimise waste, reduce emissions, leave no trace.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="h-full rounded-md bg-white p-6 text-neutral-900 shadow-lg">
              <h3 className="text-base">Regenerative Travel</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Goes further. It aims to leave a destination measurably better off than before the
                visit healthier ecosystems, stronger local economies, more resilient communities.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p className="mt-8 text-center text-sm font-medium text-white">
            Sustainability is the floor. Regeneration is the goal. Every itinerary we design is built to clear
            that higher bar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
