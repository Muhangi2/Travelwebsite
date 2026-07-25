import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function WhereWeHeaded() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/activities/helicopter-rwanda/1000045711.jpg"
        alt="Aerial view of a river valley and terraced hills in Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-3 text-white">Where We're Headed</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            We're still early in this journey and we mean that literally. Still Wild Safaris is a young company
            built by people who are still learning, still testing, and still improving every itinerary we put out
            into the world. But our founding question hasn't changed since our university days: how do we make sure
            the wild places we love are still wild for the next generation of travellers?
          </p>
        </Reveal>
      </div>
    </section>
  )
}
