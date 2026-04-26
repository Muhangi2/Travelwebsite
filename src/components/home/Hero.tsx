export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-ink">
      <img
        src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=2400&q=80"
        alt="Leopard in the Ugandan wilderness"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6">
        <div className="max-w-2xl pt-32 text-white">
          <p className="font-sans text-lg">Beautiful Luxury</p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] md:text-7xl">
            In the Heart <br /> of Africa
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/85">
            Bespoke safari experiences curated for the discerning traveler. Discover the raw beauty of Uganda
            through the lens of elegance and exclusivity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-brand-green px-7 py-3 text-xs font-medium tracking-[0.2em] text-white shadow-lg transition hover:bg-brand-green-dark">
              CURATE YOUR JOURNEY
            </button>
            <button className="rounded-full border border-white/40 px-7 py-3 text-xs font-medium tracking-[0.2em] text-white backdrop-blur transition hover:bg-white/10">
              EXPLORE OUR SAFARI COLLECTIONS
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-serif font-bold leading-none text-white/10"
        style={{ fontSize: 'clamp(8rem, 22vw, 22rem)' }}
      >
        UGANDA
      </div>
    </section>
  )
}
