import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/config/site'

export default function TravelWithUs() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7518.jpg"
        alt="Forest cabins at Buhoma Lodge on the edge of Bwindi Impenetrable Forest"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-white">Travel With Us</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
            If you're looking for a safari that's as conscious about its footprint as it is about its wildlife
            sightings, we'd love to plan your journey. Every itinerary we build carries the same DNA as the project
            that started it all smaller footprint, deeper impact, still wild.
          </p>

          <p className="mt-6 text-sm text-white/70">
            www.stillwildsafaris.com
            {' · '}
            <a href={`mailto:${site.email}`} className="underline decoration-white/30 underline-offset-4 hover:text-white">
              {site.email}
            </a>
          </p>

          <p className="mt-3 text-xs text-white/50">
            We are represented on{' '}
            <a
              href="https://www.safaribookings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              SafariBookings.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
