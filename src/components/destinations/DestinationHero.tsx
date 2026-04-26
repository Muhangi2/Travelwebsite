type Props = {
  title: string
  subtitle: string
  image: string
}

export default function DestinationHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative isolate min-h-[60svh] overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[60svh] max-w-5xl items-center justify-center px-6 pt-24 text-center text-white">
        <div>
          <h1 className="whitespace-pre-line font-serif text-5xl leading-[1.1] md:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/85">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
