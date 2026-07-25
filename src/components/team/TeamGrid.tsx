import Reveal, { Stagger } from '@/components/ui/Reveal'

type Member = {
  name: string
  role: string
  group: string
  bio: string
  quote: string
}

const members: Member[] = [
  {
    name: 'James Mitchell',
    role: 'Director',
    group: 'Leadership',
    bio: 'James provides the strategic direction and long-term planning that guides our company, ensuring sustainable growth and the highest standards of service across all operations.',
    quote: 'A great safari begins long before the plane lands.',
  },
  {
    name: 'Kagabo Habimana',
    role: 'Co-director',
    group: 'Leadership',
    bio: 'Kagabo is the operational backbone of the team, responsible for day-to-day execution, internal coordination, and delivering seamless experiences for every client.',
    quote: 'The land teaches patience. The wildlife teaches humility.',
  },
  {
    name: 'Nakato Namukasa',
    role: 'Marketing & Travel Advisor',
    group: 'Management',
    bio: 'Nakato crafts the stories that inspire travel and personally consults with clients to design bespoke itineraries that perfectly match their dreams.',
    quote: 'Every itinerary is a love letter to East Africa.',
  },
  {
    name: 'Ssemanda Kayiwa',
    role: 'Head Guide',
    group: 'Field',
    bio: 'Ssemanda sets the standard for safety and local knowledge in the field, personally leading our most demanding treks and mentoring the wider guide team.',
    quote: 'Every safari is a story written by the land.',
  },
  {
    name: 'Tumwesigye Byarugaba',
    role: 'Trekking & Excursion Lead',
    group: 'Field',
    bio: 'UWA-certified and gorilla-tracking trained, Tumwesigye leads every primate encounter on our itineraries across the Albertine Rift.',
    quote: 'Spend an hour with a silverback and the rest of life makes more sense.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Birding Specialist',
    group: 'Field',
    bio: 'Sarah leads our specialist birding circuits with a sharp eye and encyclopedic knowledge from shoebills in Mabamba to Albertine endemics in Bwindi.',
    quote: 'You came for the gorillas. You will leave dreaming of the birds.',
  },
]

const groups = ['Leadership', 'Management', 'Field']

export default function TeamGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page max-w-5xl">
        {groups.map((group) => {
          const groupMembers = members.filter((m) => m.group === group)
          return (
            <div key={group} className="mb-14 last:mb-0">
              <Reveal>
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-neutral-200" />
                  <p className="eyebrow">{group}</p>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
              </Reveal>

              <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupMembers.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </Stagger>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex flex-col rounded-xl border border-neutral-100 bg-neutral-50 p-5 transition hover:border-brand-gold/40 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-brand-cream ring-2 ring-white shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-neutral-300">
            <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM2 22c0-5.523 4.477-10 10-10s10 4.477 10 10H2z" />
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-brand-ink">{member.name}</h3>
          <p className="text-[11px] font-medium uppercase tracking-widest text-brand-gold">{member.role}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-brand-muted">{member.bio}</p>

      <blockquote className="mt-4 border-l-2 border-brand-gold/50 pl-3 text-xs italic text-neutral-500">
        &ldquo;{member.quote}&rdquo;
      </blockquote>
    </article>
  )
}
