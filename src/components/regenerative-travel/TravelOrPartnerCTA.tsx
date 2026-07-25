import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { site } from '@/config/site'

export default function TravelOrPartnerCTA() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/parks/uganda/lake-mburo/16261416770-9668a9647a-o.jpg"
        alt="Dining table overlooking the savannah at a lodge in Lake Mburo National Park, Uganda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

      <div className="container-page text-center">
        <HeroStagger className="mx-auto max-w-2xl">
          <HeroItem>
            <p className="eyebrow text-white/70">Travel Or Partner With Purpose</p>
          </HeroItem>
          <HeroItem>
            <h2 className="text-display mt-3 text-white">This Is The Standard Every Itinerary Is Built Against</h2>
          </HeroItem>
          <HeroItem>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              Whether you're booking a trip with us directly, or you're a travel agent or tour operator looking for
              a regenerative-minded ground partner in Uganda and Rwanda, this is the standard every itinerary is
              built against.
            </p>
          </HeroItem>
          <HeroItem>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <NavLink to="/safari-collections" className="btn-primary">
                START YOUR JOURNEY
              </NavLink>
              <NavLink to="/work-with-us" className="btn-ghost">
                PARTNER WITH US
              </NavLink>
            </div>
          </HeroItem>
          <HeroItem>
            <p className="mt-6 text-sm text-white/70">
              <a
                href="https://www.stillwildsafaris.com"
                className="underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                www.stillwildsafaris.com
              </a>
              {' · '}
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-white/70">Operating in: Uganda | Rwanda</p>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
