import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function CollectionsIntro() {
  return (
    <section className="section-alt py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <Reveal variant="left" className="order-2 md:order-1">
          <div className="img-zoom overflow-hidden rounded-md shadow-md">
            <Picture
              src="/images/parks/uganda/murchison-falls/dsc-6280.jpg"
              alt="Safari vehicle on the savanna"
              className="object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
        <Reveal variant="right" delay={100} className="order-1 md:order-2">
          <div className="section-rule" />
          <h2 className="mt-4 font-serif text-5xl">Safari collections</h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600">
            East Africa is a tapestry of vibrant cultures, diverse landscapes, and unparalleled wildlife. At Still Wild
            Safaris, we believe that a safari is more than just a trip; it is a transformative experience. Our team of
            local experts is dedicated to providing authentic encounters across Uganda, Rwanda, and Kenya, while
            maintaining the highest standards of luxury and sustainability.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
