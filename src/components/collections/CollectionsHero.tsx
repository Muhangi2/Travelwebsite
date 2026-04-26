export default function CollectionsHero() {
  return (
    <section className="relative isolate min-h-[80svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=2400&q=80"
        alt="Mountain gorilla portrait"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[80svh] max-w-5xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="font-serif text-6xl leading-[1.05] md:text-7xl">
            Curated Journeys Across<br />East Africa
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/90">
            Our Safari Collections group our journeys by theme — whether you seek gorilla encounters, classic
            wildlife, luxury escapes, family adventures, or photography safaris. Each collection opens the door to
            unforgettable, tailor-made experiences across Uganda, Rwanda, Kenya, and beyond.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-brand-green px-7 py-3 text-xs tracking-[0.2em] text-white shadow-lg hover:bg-brand-green-dark">
              EXPLORE OUR JOURNEYS
            </button>
            <button className="rounded-full border border-white/50 px-7 py-3 text-xs tracking-[0.2em] text-white backdrop-blur hover:bg-white/10">
              REQUEST A CUSTOM QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
