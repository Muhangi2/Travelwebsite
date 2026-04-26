const team = [
  { name: 'Rick Cheng', role: 'The Director' },
  { name: 'Emma Kiiiza', role: 'Marketing Manager and Travel Advisor' },
  { name: 'Shakirah', role: 'Travel Designer for Uganda and Rwanda' },
  { name: 'Ahemd', role: 'Co-director' },
]

const placeholderAvatar = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-neutral-300">
    <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM2 22c0-5.523 4.477-10 10-10s10 4.477 10 10H2z" />
  </svg>
)

export default function TeamCTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white">
      <img
        src="https://images.unsplash.com/photo-1604569370408-cea5e9d99cf6?auto=format&fit=crop&w=2200&q=80"
        alt="Safari lodge at twilight"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          <div className="hidden gap-6 md:flex md:justify-end">
            {team.slice(0, 2).map((m) => (
              <Member key={m.name} {...m} />
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-serif text-4xl leading-tight">
              Start Planning Your<br />Tailor Made Safari
            </h2>
            <p className="mt-3 text-sm text-white/80">Talk to Our Dedicated Safari Experts Today</p>
            <div className="mt-6 flex justify-center gap-3">
              <button className="rounded-full bg-brand-green px-6 py-2.5 text-[10px] tracking-[0.2em] text-white shadow hover:bg-brand-green-dark">
                REQUEST A CONSULTATION
              </button>
              <button className="rounded-full border border-white/40 px-6 py-2.5 text-[10px] tracking-[0.2em] text-white hover:bg-white/10">
                CALL US
              </button>
            </div>
          </div>

          <div className="hidden gap-6 md:flex">
            {team.slice(2).map((m) => (
              <Member key={m.name} {...m} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 md:hidden">
            {team.map((m) => (
              <Member key={m.name} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Member({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-20 w-20 overflow-hidden rounded-full bg-neutral-200 ring-2 ring-white/40">
        {placeholderAvatar}
      </div>
      <p className="mt-3 font-serif text-sm">{name}</p>
      <p className="text-[10px] text-white/70">({role})</p>
    </div>
  )
}
