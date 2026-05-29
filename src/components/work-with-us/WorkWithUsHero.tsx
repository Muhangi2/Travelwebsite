import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

export default function WorkWithUsHero() {
  return (
    <section className="relative isolate min-h-[65svh] overflow-hidden">
      <Picture
        src="/images/parks/uganda/murchison-falls/dsc-6280.jpg"
        alt="Murchison Falls safari moment at sunset"
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />

      <div className="container-page flex min-h-[65svh] items-center justify-center pt-28 pb-14 text-center text-white sm:pt-32">
        <HeroStagger className="max-w-3xl">
          <HeroItem>
            <p className="eyebrow text-white/70">Trade Partnerships</p>
          </HeroItem>
          <HeroItem>
            <h1 className="text-display mt-4 text-white">Work With Still Wild Safaris</h1>
          </HeroItem>
          <HeroItem>
            <p className="mt-5 text-base text-white/85 sm:text-lg">Your trusted East African DMC partner.</p>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
