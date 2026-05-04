import Picture from '@/components/Picture'
export default function StoriesHero() {
  return (
    <section className="relative isolate min-h-[65svh] overflow-hidden">
      <Picture
        src="/images/activities/helicopter-rwanda/1000045751.jpg"
        alt="Aerial view of Rwanda's volcanoes at golden hour"
        className="absolute inset-0 -z-10 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/35 to-black/65" />

      <div className="container-page flex min-h-[65svh] items-center justify-center pt-28 pb-14 text-center text-white sm:pt-32">
        <div className="max-w-4xl">
          <p className="eyebrow text-brand-gold">Journal</p>
          <h1 className="text-display mt-4 text-white">Stories from the Wild</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Travel tales, wildlife insights and behind-the-scenes moments from our safaris across Uganda, Rwanda
            and Kenya — written by guides, designers and the explorers we travel alongside.
          </p>
          <a href="#articles" className="btn-primary mt-8">EXPLORE OUR STORIES</a>
        </div>
      </div>
    </section>
  )
}
