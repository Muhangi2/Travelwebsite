type Experience = {
  title: string
  body: string
  image: string
}

const experiences: Experience[] = [
  {
    title: 'Triple Primate Encounter',
    body: 'Track the intelligent Chimpanzees in Kibale Forest and the magnificent Mountain Gorillas in Bwindi, offering diverse primate encounters across Uganda’s most biodiverse regions.',
    image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg',
  },
  {
    title: 'Shoebill Stalking Adventure',
    body: 'Experience a final thrilling adventure searching for the magnificent and prehistoric-looking shoebill stork, a fitting finale to your wildlife safari.',
    image: '/images/activities/helicopter-rwanda/1000045712.jpg',
  },
  {
    title: 'Kazinga Channel Wildlife',
    body: "Enjoy spectacular game viewing along one of Africa's most wildlife-rich waterways, home to massive hippo pods, crocodiles, and diverse birdlife.",
    image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.jpg',
  },
]

export default function UniqueExperiences() {
  return (
    <section className="bg-brand-forest py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl">Unique &amp; Exclusive Experiences</h2>

        <div className="relative mt-12">
          <button
            aria-label="Previous"
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 p-3 text-white hover:bg-white/10 lg:block"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="cards-scroll-3 gap-6">
            {experiences.map((e) => (
              <article key={e.title} className="overflow-hidden rounded-md bg-white text-neutral-800 shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.image} alt={e.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{e.body}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Next"
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 p-3 text-white hover:bg-white/10 lg:block"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
