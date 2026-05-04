import Picture from '@/components/Picture'
export default function WorkWithUsHero() {
  return (
    <section className="relative isolate min-h-[65svh] overflow-hidden">
      <Picture
        src="/images/parks/uganda/murchison-falls/dsc-6280.jpg"
        alt="Murchison Falls safari moment at sunset"
        className="absolute inset-0 -z-10 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />

      <div className="container-page flex min-h-[65svh] items-center justify-center pt-28 pb-14 text-center text-white sm:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-gold">Trade Partnerships</p>
          <h1 className="text-display mt-4 text-white">Work With MasterPolo Safaris</h1>
          <p className="mt-5 text-base text-white/85 sm:text-lg">Your trusted East African DMC partner.</p>
        </div>
      </div>
    </section>
  )
}
