import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function OurStory() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <Picture
        src="/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg"
        alt="Hot air balloon over the Masai Mara at sunrise"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        imgClassName="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <div className="mx-auto max-w-3xl px-6 text-white">
        <Reveal>
          <div className="section-rule" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-3 text-white">Our Story</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Still Wild Safaris was founded in 2024 by two university graduates who shared a simple but stubborn
            belief: that safari travel could give back to the wild places it depends on, instead of quietly
            costing them.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            It began as a university project called Keep Your Safari Green a small research initiative built
            around one question: how much carbon does a single safari actually produce, and what could
            realistically be done about it? What started as a class assignment quickly became something neither
            founder could put down. The data was sobering. The opportunity was obvious. And the idea that travel
            through Africa's wildest landscapes could become part of the solution, rather than part of the
            problem, refused to let them go.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            That university project became Still Wild Safaris a tour operator built from the ground up around
            regenerative travel, with carbon reduction stitched into every itinerary we design.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
