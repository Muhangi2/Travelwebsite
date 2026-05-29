import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function ClientReflections() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center font-serif text-5xl">
            What Our Clients
            <br />
            Are Saying
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="left">
            <div className="flex justify-center">
              <div className="img-zoom aspect-square w-72 overflow-hidden rounded-full ring-4 ring-white shadow-lg md:w-96">
                <Picture
                  src="/images/destinations/tanzania/sayari-lioness.jpg"
                  alt="Harrison family on safari"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <span className="select-none text-5xl leading-none text-neutral-300">&ldquo;</span>
            <h3 className="font-serif text-2xl">Client Reflections</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              &ldquo;Still Wild Safaris didn&apos;t just plan a vacation; they orchestrated a masterpiece. The attention to
              detail, from the private bush breakfast to the surprise sundowner on the equator, was impeccable. It
              was, quite simply, the trip of a lifetime.&rdquo;
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                <Picture
                  src="/images/team/kelly.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm text-neutral-600">— The Harrison Family, New York</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
