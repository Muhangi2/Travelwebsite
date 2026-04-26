export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[60svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=2400&q=80"
        alt="Mountain gorilla"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[60svh] max-w-4xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="font-serif text-5xl leading-[1.1] md:text-6xl">
            Welcome to <br />
            MasterPolo Safaris
          </h1>
          <p className="mt-4 text-sm text-white/85">East Africa's Chinese-Focused Destination Management Company</p>
          <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 text-[10px] tracking-[0.25em] text-white shadow hover:bg-brand-green-dark">
            START YOUR SAFARI JOURNEY
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
