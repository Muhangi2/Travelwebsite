import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function ArchitectsOfJourney() {
  return (
    <section className="section-alt py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal variant="left">
            <div className="img-zoom overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/team/ahmed.jpg"
                alt="Safari planning"
                className="object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="section-rule" />
            <h2 className="mt-4 font-serif text-3xl">
              The Architects of <br />
              Your Journey
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              At the heart of every unforgettable journey is a team of dedicated experts. We are the architects of your
              adventure, the navigators of the wild, and the friendly faces that ensure every detail of your experience
              is seamless and enriching. Our team blends strategic leadership, specialized regional knowledge, and
              unparalleled field expertise — all united by a passion for authentic travel.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
