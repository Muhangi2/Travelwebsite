export default function TeamHero() {
  return (
    <section className="relative isolate min-h-[45svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2400&q=80"
        alt="MasterPolo Safaris team"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[45svh] max-w-3xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">Meet Our Safari<br />Experts</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/85">
            Our passionate team of local experts based in Uganda combines local knowledge, expert planning, and
            field experience to deliver seamless, unforgettable safari journeys.
          </p>
        </div>
      </div>
    </section>
  )
}
