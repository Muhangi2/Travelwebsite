import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

const practices = [
  {
    num: '01',
    title: 'Carbon-Conscious Routing',
    body: 'We design itineraries that minimise unnecessary transfers and flights wherever a lower-carbon alternative exists, without compromising the experience our travellers came for.',
  },
  {
    num: '02',
    title: 'Reusable, Not Disposable',
    body: 'Every guest on a Still Wild Safaris trip receives a refillable bottle at the start of their journey — removing a meaningful amount of single-use plastic waste across a multi-day safari.',
  },
  {
    num: '03',
    title: 'Eco-Lodge Partnerships',
    body: 'We prioritise accommodation built and run on genuine sustainability principles — solar power, water recycling, local sourcing — over properties that simply use the language of eco-tourism.',
  },
  {
    num: '04',
    title: 'Local-First Hiring',
    body: 'Guides, drivers, and staff are hired first from the communities surrounding the destinations we operate in. Tourism revenue that stays local is tourism that protects what it touches.',
  },
  {
    num: '05',
    title: 'Carbon Offset & Reforestation',
    body: 'A percentage of every booking is channelled into verified offset and reforestation initiatives across Uganda and Rwanda — real trees, real funding, real accountability.',
  },
]

export default function HowWePractiseIt() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/lodges/rwanda/volcanoes-national-park/one-and-only-gorilla-nest/ajqwtbm-sghilb7nle6tsj60kf09t2y-5t9-yogkjdukgiwdyxdqa3q5xhnkhpsmgq-zfpyh4-wq0ahhc9fjpalj-rthz6sczpv5eey2khgmwvwq0mmt-h400-nu.jpg"
        alt="Eco-lodge nestled in the forest near Volcanoes National Park, Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/75" />

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="eyebrow text-center text-white/70">Our Practice</p>
          <h2 className="mt-3 text-center text-white">How We Practise It, On The Ground</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-white/15 border-y border-white/15">
          {practices.map((p, i) => (
            <Reveal key={p.num} delay={i * 80}>
              <div className="flex gap-6 py-7 sm:gap-10">
                <span className="shrink-0 font-serif text-4xl text-white/30 sm:text-5xl">{p.num}</span>
                <div>
                  <h3 className="text-base text-white sm:text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={practices.length * 80 + 80}>
          <blockquote className="mx-auto mt-12 max-w-2xl text-center text-base italic leading-relaxed text-white/90 sm:text-lg">
            "A safari shouldn't just take a traveller to see something wild. It should leave that wild place a little
            stronger for the next visitor too."
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
