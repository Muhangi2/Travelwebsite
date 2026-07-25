import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function WhyThisMatters() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/activities/gorilla-trekking/34-mount-gahinga-lodge-gorilla.jpg"
        alt="Baby mountain gorilla with its family, near Mgahinga"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-3 text-white">Why This Matters In Uganda And Rwanda</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            Gorilla trekking, chimp tracking, and savannah safaris all depend entirely on healthy, intact ecosystems
            and communities that have a real stake in protecting them. In Uganda and Rwanda specifically,
            conservation areas like Bwindi, Mgahinga, Volcanoes National Park, and Nyungwe Forest exist in direct
            relationship with the communities living on their borders. When that relationship is extractive
            tourism revenue flowing out, communities seeing little benefit the pressure on these ecosystems only
            grows.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Regenerative travel reverses that pressure. Done well, every trip becomes another small reason for a
            community to protect the forest, the river, or the gorilla family next door, rather than see it as
            competition for land and resources.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
