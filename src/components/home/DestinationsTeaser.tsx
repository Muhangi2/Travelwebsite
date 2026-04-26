export default function DestinationsTeaser() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-5xl">Explore Our Destinations</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600">
            Tailor-made tours across Uganda and East Africa. Experience wildlife, culture, trekking, and the Nile then
            explore Tanzania, Kenya, and Rwanda for even more adventure.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1200&q=80"
              alt="Chimpanzee in the forest"
              className="max-h-96 w-auto"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl">Uganda: The Pearl of Africa</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              A sanctuary for luxury adventurers, Uganda offers a rare blend of raw wilderness and refined comfort.
              Encounter majestic mountain gorillas in ancient forests, glide across Lake Victoria in a private yacht,
              and unwind in boutique lodges perched on crater lake shores. Uganda is where untamed beauty meets
              elegance.
            </p>
            <button className="mt-6 rounded-full bg-brand-green px-7 py-3 text-xs tracking-[0.2em] text-white shadow hover:bg-brand-green-dark">
              EXPLORE UGANDA
            </button>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between">
          <p className="text-sm text-neutral-500"><span className="text-neutral-900">1</span>/3</p>
          <div className="mx-6 h-px flex-1 bg-neutral-200">
            <div className="h-full w-1/3 bg-brand-green" />
          </div>
          <div className="flex gap-2">
            <button aria-label="Previous" className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button aria-label="Next" className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
