import TeamMemberCard, { type TeamMember } from './TeamMemberCard'

const leadership: TeamMember[] = [
  {
    name: 'Rick Cheng',
    role: 'The Director',
    bio: "As the visionary Director, Rick provides the strategic direction and long-term planning that guides our company. His focus is on ensuring sustainable growth, maintaining the highest standards of service, and fostering a culture of excellence and innovation across all operations.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Ahemd',
    role: 'Co-director',
    bio: "Working closely with the Director, Ahemd is the operational backbone of the entire team. The Co-director is responsible for the day-to-day execution of our strategy, optimizing internal processes, and ensuring seamless coordination between all departments to deliver exceptional client experiences.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

export default function Leadership() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center font-serif text-3xl">The Leadership</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leadership.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
