import TeamMemberCard, { type TeamMember } from './TeamMemberCard'
import Reveal, { Stagger } from '@/components/ui/Reveal'

const leadership: TeamMember[] = [
  {
    name: 'Rick Cheng',
    role: 'The Director',
    bio: "As the visionary Director, Rick provides the strategic direction and long-term planning that guides our company. His focus is on ensuring sustainable growth, maintaining the highest standards of service, and fostering a culture of excellence and innovation across all operations.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: '/images/team/rick-cheng.jpg',
  },
  {
    name: 'Ahemd',
    role: 'Co-director',
    bio: "Working closely with the Director, Ahemd is the operational backbone of the entire team. The Co-director is responsible for the day-to-day execution of our strategy, optimizing internal processes, and ensuring seamless coordination between all departments to deliver exceptional client experiences.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: '/images/team/ahmed.jpg',
  },
]

export default function Leadership() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center font-serif text-3xl">The Leadership</h2>
        </Reveal>
        <Stagger className="cards-scroll-2 mt-10 gap-6">
          {leadership.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
