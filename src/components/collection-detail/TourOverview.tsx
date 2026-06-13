type Props = {
  overview: string
  subtitle?: string
  country?: string
  daysCount: number
}

export default function TourOverview({ overview, subtitle, country, daysCount }: Props) {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-neutral-100">
      <div className="container-page">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_320px] xl:gap-20">

          {/* Left — text */}
          <div>
            <p className="eyebrow mb-4">Overview</p>
            {subtitle && (
              <p className="font-serif text-2xl sm:text-3xl text-neutral-800 leading-snug mb-6">{subtitle}</p>
            )}
            <p className="text-[15px] leading-[1.85] text-neutral-600">{overview}</p>
          </div>

          {/* Right — key facts */}
          <div className="flex flex-col gap-4 lg:pt-12">
            {country && (
              <div className="rounded-2xl bg-neutral-50 px-6 py-5 ring-1 ring-neutral-100">
                <p className="text-[10px] font-medium tracking-[0.22em] text-neutral-400 uppercase mb-1">Destination</p>
                <p className="font-serif text-lg text-neutral-800">{country.split('·').map(s => s.trim()).join(' & ')}</p>
              </div>
            )}
            <div className="rounded-2xl bg-neutral-50 px-6 py-5 ring-1 ring-neutral-100">
              <p className="text-[10px] font-medium tracking-[0.22em] text-neutral-400 uppercase mb-1">Duration</p>
              <p className="font-serif text-lg text-neutral-800">{daysCount} Days / {daysCount - 1} Nights</p>
            </div>
            <div className="rounded-2xl bg-teal-50 px-6 py-5 ring-1 ring-teal-100">
              <p className="text-[10px] font-medium tracking-[0.22em] text-teal-600 uppercase mb-1">Travel Style</p>
              <p className="font-serif text-lg text-teal-900">Luxury · Private · Expert-guided</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
