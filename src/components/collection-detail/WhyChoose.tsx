import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <Reveal variant="left">
          <div className="section-rule" />
          <h2 className="mt-4 font-serif text-4xl">
            Why Choose This <br />
            Safari?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600">
            This safari is a comprehensive exploration of Uganda&apos;s natural wonders, combining wildlife encounters and
            primate tracking in one unforgettable journey. It is ideal for travelers who want a varied itinerary that
            includes multiple primate species and the chance to experience Uganda&apos;s most iconic destinations. The
            selection of handpicked accommodations ensures comfort and an elevated experience throughout your
            journey, from intimate boutique hotels to exclusive luxury camps.
          </p>
        </Reveal>
        <Reveal variant="right" delay={100}>
          <div className="img-zoom overflow-hidden rounded-md shadow-md">
            <Picture
              src="/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg"
              alt="Luxury safari lodge bedroom"
              className="object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
