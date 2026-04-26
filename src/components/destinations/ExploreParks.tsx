type Props = {
  countryName: string
  intro: string
  summary: string
  image: string
}

export default function ExploreParks({ countryName, intro, summary, image }: Props) {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl">Explore {countryName}'s National Parks</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">{intro}</p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl">{countryName}'s National Park</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{summary}</p>
            <button className="mt-6 rounded-full bg-brand-green px-6 py-3 text-[10px] tracking-[0.2em] text-white shadow hover:bg-brand-green-dark">
              VIEW ALL {countryName.toUpperCase()} SAFARIS
            </button>
          </div>
          <div>
            <img src={image} alt="" className="rounded-md object-cover shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
