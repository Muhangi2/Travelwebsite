export type TeamMember = {
  name: string
  role: string
  bio: string
  quote: string
  image?: string
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-md ring-1 ring-neutral-200/70 transition hover:-translate-y-1 hover:shadow-xl sm:p-7">
      <div className="flex justify-center">
        <div className="h-28 w-28 overflow-hidden rounded-full bg-brand-cream ring-4 ring-white shadow-lg sm:h-32 sm:w-32">
          {member.image ? (
            <img src={member.image} alt={member.name} loading="lazy" className="h-full w-full object-cover" />
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-neutral-300">
              <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM2 22c0-5.523 4.477-10 10-10s10 4.477 10 10H2z" />
            </svg>
          )}
        </div>
      </div>
      <div className="mt-5 text-center">
        <h3 className="font-serif text-xl text-brand-ink">{member.name}</h3>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-gold">{member.role}</p>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-brand-muted">{member.bio}</p>
      <blockquote className="mt-5 rounded-md bg-brand-green/5 px-4 py-3 text-center text-xs italic text-brand-green/95 sm:text-sm">
        &ldquo;{member.quote}&rdquo;
      </blockquote>
    </article>
  )
}
