export default function WorkWithUsHero() {
  return (
    <section className="relative isolate min-h-[55svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=2400&q=80"
        alt="Safari vehicle at sunset"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[55svh] max-w-4xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">
            Work With <br />
            MasterPolo Safaris
          </h1>
          <p className="mt-4 text-sm text-white/85">Your Trusted East African DMC Partner</p>
        </div>
      </div>
    </section>
  )
}
