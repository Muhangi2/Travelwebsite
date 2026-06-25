import TeamMemberCard, { type TeamMember } from './TeamMemberCard'
import Reveal from '@/components/ui/Reveal'

const management: TeamMember[] = [
  {
    name: 'Nakato Namukasa',
    role: 'Marketing Manager & Travel Advisor',
    bio: "Nakato is the voice of our brand and a dedicated client advocate. As Marketing Manager, she crafts the stories that inspire your travels. As a Travel Advisor, she leverages her deep knowledge to personally consult with clients, designing bespoke itineraries that perfectly match their dreams and expectations.",
    quote: 'Every itinerary is a love letter to East Africa.',
  },
]

export default function Management() {
  return (
    <section className="section-alt py-10">
      <div className="container-page max-w-5xl">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <p className="eyebrow">Management</p>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
        </Reveal>
        <div className="mx-auto max-w-xl">
          {management.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
