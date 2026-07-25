import Picture from '@/components/Picture'
import Reveal, { Stagger } from '@/components/ui/Reveal'

const reasons = [
  {
    num: 1,
    title: 'Regenerative\nBy Default',
    body: 'Every itinerary we execute already meets our carbon and community-impact standards, so your brand inherits that story at no extra effort.',
  },
  {
    num: 2,
    title: 'Two-Country\nDepth',
    body: 'Most ground partners specialise in one country. We run deep operations in both Uganda and Rwanda, simplifying combined gorilla trekking itineraries for your clients.',
  },
  {
    num: 3,
    title: 'Lean And\nResponsive',
    body: "We're a young, hands-on company, which means direct access to decision-makers rather than layers of account managers.",
  },
  {
    num: 4,
    title: 'Built-In\nStorytelling',
    body: 'Our regenerative travel model gives your sales and marketing teams a genuine, differentiated narrative to sell against conventional safari operators.',
  },
]

export default function WhyPartnerWithUs() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/activities/gorilla-trekking/5-mgl-golden-monkey-bb.jpg"
        alt="Golden monkey in the Virunga forest near Mgahinga, on the Uganda-Rwanda border"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-white">Why Operators Choose Us</h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerMs={100}>
          {reasons.map((r) => (
            <div key={r.num} className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-white/40 bg-white/10 backdrop-blur-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 font-serif text-xl text-neutral-900">
                  {r.num}
                </span>
              </div>
              <h3 className="mt-5 whitespace-pre-line text-sm text-white">{r.title}</h3>
              <p className="mt-2 max-w-[26ch] text-xs leading-relaxed text-white/75">{r.body}</p>
            </div>
          ))}
        </Stagger>

        <Reveal delay={200}>
          <blockquote className="mx-auto mt-14 max-w-2xl text-center text-base italic leading-relaxed text-white/90 sm:text-lg">
            "We wanted operators abroad to have one phone call to make for Uganda and Rwanda not two."
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
