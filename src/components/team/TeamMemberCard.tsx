export type TeamMember = {
  name: string
  role: string
  bio: string
  quote: string
  image?: string
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex gap-4 rounded-xl border border-neutral-100 bg-white p-5 shadow-sm transition hover:border-brand-gold/40 hover:shadow-md">
      <div className="mt-1 h-11 w-11 flex-shrink-0 overflow-hidden rounded-full bg-brand-cream ring-2 ring-neutral-100">
        {member.image ? (
          <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-neutral-300">
            <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM2 22c0-5.523 4.477-10 10-10s10 4.477 10 10H2z" />
          </svg>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-semibold text-brand-ink leading-tight">{member.name}</p>
        <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-brand-gold">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">{member.bio}</p>
        <blockquote className="mt-3 border-l-2 border-brand-gold/50 pl-3 text-xs italic text-neutral-400">
          &ldquo;{member.quote}&rdquo;
        </blockquote>
      </div>
    </article>
  )
}
