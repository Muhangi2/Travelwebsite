export default function StoriesHero() {
  return (
    <section className="relative isolate min-h-[55svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=80"
        alt="Mountain sunset"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="mx-auto flex min-h-[55svh] max-w-4xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">Stories from the Wild</h1>
          <p className="mt-4 text-sm text-white/85">
            Travel tales, wildlife insights, and behind-the-scenes moments from our safaris across East Africa.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-white/75">
            From misty gorilla forests to golden savannah sunsets, our blog brings you closer to the heart of Africa.
            Discover stories, travel tips, conservation insights, and unforgettable safari moments — written by guides,
            explorers, and passionate storytellers.
          </p>
          <button className="mt-8 rounded-full bg-brand-green px-7 py-3 text-[10px] tracking-[0.25em] text-white shadow hover:bg-brand-green-dark">
            EXPLORE OUR STORIES
          </button>
        </div>
      </div>
    </section>
  )
}
