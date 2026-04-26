export default function KnowBeforeHero() {
  return (
    <section className="relative isolate min-h-[40svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=2400&q=80"
        alt="Forest"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[40svh] max-w-3xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">Know Before You Go</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/85">
            The single most important thing we want our travelers to know is how much information to bring. You ensure
            for a smooth, worry-free safari experience.
          </p>
        </div>
      </div>
    </section>
  )
}
