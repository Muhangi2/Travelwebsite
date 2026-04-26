export default function InspiredCTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white">
      <img
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=80"
        alt="Sunset savanna"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-5xl leading-tight">Inspired by our stories? Let's<br />create your own.</h2>
        <p className="mt-3 text-sm text-white/80">Inspired by our stories? Let's create your own.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button className="rounded-full border border-white/40 bg-black/30 px-7 py-3 text-[10px] tracking-[0.25em] text-white backdrop-blur hover:bg-black/50">
            PLAN MY SAFARI
          </button>
          <button className="rounded-full border border-white/40 bg-black/30 px-7 py-3 text-[10px] tracking-[0.25em] text-white backdrop-blur hover:bg-black/50">
            TALK TO AN EXPERT
          </button>
        </div>
      </div>
    </section>
  )
}
