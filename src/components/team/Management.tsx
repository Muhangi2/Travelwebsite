import TeamMemberCard, { type TeamMember } from './TeamMemberCard'
import Reveal, { Stagger } from '@/components/ui/Reveal'

const management: TeamMember[] = [
  {
    name: 'Nakato Namukasa',
    role: 'Marketing Manager and Travel Advisor',
    bio: "Nakato is the voice of our brand and a dedicated client advocate. As Marketing Manager, she crafts the stories that inspire your travels. As a Travel Advisor, she leverages her deep knowledge to personally consult with clients, designing bespoke itineraries that perfectly match their dreams and expectations.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Karungi Asiimwe',
    role: 'Travel Designer for Uganda and Rwanda',
    bio: "Karungi is our regional specialist, possessing an intimate knowledge of East Africa. As the Travel Designer for Uganda and Rwanda, she meticulously curates unique, immersive, and responsible travel experiences in these spectacular destinations, ensuring every itinerary is a masterpiece of local insight.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

export default function Management() {
  return (
    <section className="section-alt py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center">Management and Specialization</h2>
        </Reveal>
        <Stagger className="cards-scroll-2 mt-10 gap-6">
          {management.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
