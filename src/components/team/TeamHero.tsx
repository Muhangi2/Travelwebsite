import Picture from '@/components/Picture'
export default function TeamHero() {
  return (
    <section className="relative isolate min-h-[60svh] overflow-hidden">
      <Picture
        src="/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.jpg"
        alt="MasterPolo Safaris team in the field"
        className="absolute inset-0 -z-10 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />

      <div className="container-page flex min-h-[60svh] items-center justify-center pt-28 pb-14 text-center text-white sm:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-gold">Our Team</p>
          <h1 className="text-display mt-4 text-white">Meet Our Safari Experts</h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            A passionate team of local experts based in Kampala — combining deep local knowledge, expert planning
            and decades of field experience to deliver seamless, unforgettable safari journeys.
          </p>
        </div>
      </div>
    </section>
  )
}
