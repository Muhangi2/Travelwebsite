import TeamMemberCard, { type TeamMember } from './TeamMemberCard'
import Reveal from '@/components/ui/Reveal'

const leadership: TeamMember[] = [
  {
    name: 'James Mitchell',
    role: 'The Director',
    bio: "As the visionary Director, James provides the strategic direction and long-term planning that guides our company. His focus is on ensuring sustainable growth, maintaining the highest standards of service, and fostering a culture of excellence and innovation across all operations.",
    quote: 'A great safari begins long before the plane lands.',
  },
]

export default function Leadership() {
  return (
    <section className="bg-white py-10">
      <div className="container-page max-w-5xl">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <p className="eyebrow">Leadership</p>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
        </Reveal>
        <div className="mx-auto max-w-xl">
          {leadership.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
