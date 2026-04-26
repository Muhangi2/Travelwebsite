export default function BeginYourLegacy() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white">
      <img
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=80"
        alt="African savanna sunset"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-6xl">Begin Your Legacy</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/85">
          Africa is waiting to change you. Let us guide you there. Contact our travel specialists today to start
          planning your signature safari.
        </p>
        <button className="mt-8 rounded-full border border-white/40 bg-white/5 px-8 py-3 text-xs tracking-[0.25em] text-white backdrop-blur hover:bg-white/15">
          INQUIRE NOW
        </button>
      </div>
    </section>
  )
}
