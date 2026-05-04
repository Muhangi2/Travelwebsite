import Picture from '@/components/Picture'
export default function KnowBeforeHero() {
  return (
    <section className="relative isolate min-h-[55svh] overflow-hidden">
      <Picture
        src="/images/parks/uganda/murchison-falls/dsc-6951.jpg"
        alt="Safari preparation"
        className="absolute inset-0 -z-10 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />

      <div className="container-page flex min-h-[55svh] items-center justify-center pt-28 pb-14 text-center text-white sm:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-gold">Travel Essentials</p>
          <h1 className="text-display mt-4 text-white">Know Before You Go</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Practical information to make sure your safari runs effortlessly — visas, packing, payments, tipping
            and trekking fitness.
          </p>
        </div>
      </div>
    </section>
  )
}
