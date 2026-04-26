export type TeamMember = {
  name: string
  role: string
  bio: string
  quote: string
  image?: string
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="rounded-md bg-white p-6 shadow-sm ring-1 ring-neutral-100">
      <div className="flex justify-center">
        <div className="h-24 w-24 overflow-hidden rounded-full bg-neutral-200 ring-4 ring-white shadow">
          {member.image ? (
            <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-neutral-300">
              <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM2 22c0-5.523 4.477-10 10-10s10 4.477 10 10H2z" />
            </svg>
          )}
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg text-brand-green">{member.name}</h3>
        <p className="text-xs text-neutral-500">({member.role})</p>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-neutral-600">{member.bio}</p>
      <blockquote className="mt-4 rounded-md bg-brand-green/5 px-4 py-3 text-center text-[11px] italic text-brand-green/90">
        “{member.quote}”
      </blockquote>
    </article>
  )
}
