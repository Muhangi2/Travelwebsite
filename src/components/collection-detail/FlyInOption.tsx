import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function FlyInOption() {
  return (
    <section className="section-alt py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-center font-serif text-xl sm:text-3xl lg:text-4xl">
            Optional Luxury Fly-In
            <br />
            Version (7 Days)
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2">
          <Reveal variant="left">
            <div className="img-zoom min-h-[220px] overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/parks/uganda/murchison-falls/dsc-6280.jpg"
                alt="Safari vehicle"
                className="object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="section-rule" />
            <h3 className="mt-4 font-serif text-xl sm:text-2xl">For travelers seeking</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              To minimize driving time, replace the long Bwindi → Entebbe drive with a scenic 1.5-hour flight from
              Kihihi/Kisoro. Additional flights can be added between western parks to further reduce driving time and
              maximize your time in the parks.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
