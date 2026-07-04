import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function WhereWeOperate() {
  return (
    <section className="section-alt py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="section-rule mx-auto" />
            <h2 className="mt-3">Where We Operate</h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal variant="left">
            <div className="relative isolate h-80 overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/activities/gorilla-trekking/9-gorilla3-bfo9.jpg"
                alt="Mountain gorilla in Bwindi Impenetrable Forest, Uganda"
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
              <div className="flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-base text-white">Uganda</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Gorilla trekking across Bwindi Impenetrable Forest and Mgahinga, chimpanzee trekking at Kibale and
                  Budongo, the Nile and savannah landscapes of Murchison Falls and Queen Elizabeth National Park, and
                  the remote wilderness of Kidepo Valley. We know the roads, the rangers, the permit offices, and the
                  lodges — and we know which ones actually deliver.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="relative isolate h-80 overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/destinations/rwanda/image-20260331125717.jpg"
                alt="Lodge deck overlooking the Virunga volcanoes, Rwanda"
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
              <div className="flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-base text-white">Rwanda</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Mountain gorilla trekking at Volcanoes National Park, chimpanzee and canopy walk experiences at
                  Nyungwe Forest, Big Five safari at Akagera, and Lake Kivu stays. Our Rwanda ground team mirrors the
                  same standard as our Uganda operation — local, accountable, and responsive.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-neutral-600">
            Cross-border logistics between Uganda and Rwanda — including the Cyanika and Katuna border crossings
            used for combined gorilla trekking itineraries — are something we manage routinely, not occasionally.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
