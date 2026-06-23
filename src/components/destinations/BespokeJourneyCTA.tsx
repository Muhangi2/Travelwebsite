import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import { site } from '@/config/site'
import Reveal from '@/components/ui/Reveal'

type Props = {
  backgroundImage?: string
}

export default function BespokeJourneyCTA({ backgroundImage }: Props) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#111]" />
      )}

      <div className="container-page relative z-10">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
              Speak to a Specialist
            </p>
            <h2 className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Begin Your Bespoke Journey
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              Connect with our dedicated specialists to transform your vision into a meticulously planned,
              life-altering reality.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal variant="left">
            <div className="h-px w-12 bg-amber-400" />
            <h3 className="mt-6 text-2xl text-white sm:text-3xl">Our experts possess</h3>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              First-hand knowledge of every lodge, every trail, and every hidden gem we recommend. They are your
              personal curators, ensuring a seamless, worry-free experience from the first conversation to your
              return home.
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-white/35">
              Hours: MON–FRI 8AM–6PM EAT · SAT 9AM–5PM EAT
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-amber-300"
              >
                Call Us
              </a>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Request a Consultation
              </NavLink>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="img-zoom overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Picture
                src="/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg"
                alt="Luxury lodge"
                imgClassName="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
