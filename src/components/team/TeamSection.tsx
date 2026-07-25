type Member = {
  name: string
  role: string
  bio: string
}

const members: Member[] = [
  {
    name: 'James Mitchell',
    role: 'Director',
    bio: 'James provides the strategic direction and long-term planning that guides our company, ensuring sustainable growth and the highest standards of service across all operations.',
  },
  {
    name: 'Nakato Namukasa',
    role: 'Marketing & Travel Advisor',
    bio: 'Nakato crafts the stories that inspire travel and personally consults with clients to design bespoke itineraries that perfectly match their dreams and expectations.',
  },
  {
    name: 'Ssemanda Kayiwa',
    role: 'Head Guide',
    bio: 'Ssemanda sets the standard for safety and local knowledge in the field, personally leading our most demanding treks and mentoring the wider guide team.',
  },
  {
    name: 'Tumwesigye Byarugaba',
    role: 'Trekking & Excursion Lead',
    bio: 'UWA-certified and gorilla-tracking trained, Tumwesigye leads every primate encounter on our itineraries across the Albertine Rift.',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <p className="eyebrow text-center">Meet The Team</p>
        <h2 className="mt-3 text-center">The People Behind Every Journey</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:shadow-md">
      {/* Avatar */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-neutral-400">
          <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM2 22c0-5.523 4.477-10 10-10s10 4.477 10 10H2z" />
        </svg>
      </div>

      {/* Name black */}
      <p className="text-lg font-bold leading-tight text-black">{member.name}</p>

      {/* Role green */}
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: '#166534' }}>
        {member.role}
      </p>

      {/* Green divider */}
      <div className="my-4 h-0.5 w-10" style={{ backgroundColor: '#166534' }} />

      {/* Bio dark gray / near black */}
      <p className="flex-1 text-sm leading-relaxed text-gray-700">{member.bio}</p>
    </div>
  )
}
