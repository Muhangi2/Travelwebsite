import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { site } from '@/config/site'

export default function TalkWithAdvisor() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/parks/rwanda/volcanoes/wilderness-bisate-29.jpg"
        alt="Bisate Lodge's nest-like villas on the slopes of Volcanoes National Park, Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

      <div className="container-page text-center">
        <HeroStagger className="mx-auto max-w-2xl">
          <HeroItem>
            <p className="eyebrow text-white/70">Let's Talk</p>
          </HeroItem>
          <HeroItem>
            <h2 className="text-display mt-3 text-white">
              If You're Selling Uganda Or Rwanda Or Want To Start
            </h2>
          </HeroItem>
          <HeroItem>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              We'll walk you through how we run trips, show you our lodge and guide network, and quote a real
              itinerary so you can see exactly what working with us looks like before you commit to anything. No
              formal application. No lengthy onboarding. Just a real team, on the ground in Uganda and Rwanda, ready
              to make your East Africa offering easier to sell and easier to deliver.
            </p>
          </HeroItem>
          <HeroItem>
            <NavLink to="/contact" className="btn-primary mt-8">
              START A CONVERSATION
            </NavLink>
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
                href={`mailto:${site.partnersEmail}`}
                className="underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                {site.partnersEmail}
              </a>
            </p>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
