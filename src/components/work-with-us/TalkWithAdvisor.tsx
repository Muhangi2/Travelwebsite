export default function TalkWithAdvisor() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <img
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=80"
        alt="Elephants at sunset"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-5xl">Talk With Our Travel Advisor</h2>
        <p className="mt-3 text-sm text-white/85">For Agent Rates &amp; Safari Packages</p>
        <button className="mt-7 rounded-full bg-brand-green px-7 py-3 text-[10px] tracking-[0.25em] text-white shadow hover:bg-brand-green-dark">
          TALK WITH OUR TRAVEL ADVISOR
        </button>
      </div>
    </section>
  )
}
