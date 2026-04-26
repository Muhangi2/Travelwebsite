type Props = {
  name: string
  blurb: string
  image: string
}

export default function ParkHero({ name, blurb, image }: Props) {
  return (
    <section className="relative isolate min-h-[55svh] overflow-hidden">
      <img src={image} alt={name} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[55svh] max-w-3xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">{name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90">{blurb}</p>
          <button className="mt-8 rounded-full border border-white/40 bg-white/5 px-7 py-2.5 text-[10px] tracking-[0.25em] text-white backdrop-blur hover:bg-white/15">
            BOOK YOUR ADVENTURE
          </button>
        </div>
      </div>
    </section>
  )
}
