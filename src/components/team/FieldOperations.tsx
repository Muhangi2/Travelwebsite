import TeamMemberCard, { type TeamMember } from './TeamMemberCard'
import Reveal from '@/components/ui/Reveal'

const guides: TeamMember[] = [
  {
    name: 'Ssemanda Kayiwa',
    role: 'Head Guide',
    bio: "Ssemanda is the senior-most member of our field team. As the Head Guide, he sets the standard for safety, professionalism and local knowledge — mentoring the guiding team and personally leading our most challenging and exclusive expeditions.",
    quote: 'Every safari is a story written by the land. My job is to read it for you.',
  },
  {
    name: 'Tumwesigye Byarugaba',
    role: 'Trekking & Excursion Lead',
    bio: "Tumwesigye specialises in primate trekking and high-altitude excursions across the Albertine Rift. UWA-certified and gorilla-tracking trained, he plans and leads every gorilla, golden-monkey and chimp encounter on our itineraries.",
    quote: 'Spend an hour with a silverback and the rest of life makes more sense.',
  },
]

export default function FieldOperations() {
  return (
    <section className="bg-white py-10">
      <div className="container-page max-w-5xl">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <p className="eyebrow">Field Operations</p>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
