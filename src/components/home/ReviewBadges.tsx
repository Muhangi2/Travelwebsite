const Star = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f4a82c">
    <path d="M12 2l2.95 6.97 7.55.63-5.74 4.95L18.5 22 12 17.77 5.5 22l1.74-7.45L1.5 9.6l7.55-.63z" />
  </svg>
)

export default function ReviewBadges() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-md bg-white p-8 text-center shadow-md ring-1 ring-neutral-100">
            <div className="flex h-12 items-center justify-center">
              <span className="font-sans text-3xl font-bold">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>
            <div className="mt-5 flex justify-center gap-1"><Star /><Star /><Star /><Star /><Star /></div>
            <p className="mt-4 font-serif text-3xl">5.0</p>
            <button className="mt-5 rounded-full bg-brand-green px-7 py-2 text-[10px] tracking-[0.2em] text-white hover:bg-brand-green-dark">
              REVIEW US
            </button>
          </div>

          <div className="rounded-md bg-white p-8 text-center shadow-md ring-1 ring-neutral-100">
            <div className="flex h-12 items-center justify-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#34E0A1]">
                <span className="text-xs">●●</span>
              </span>
              <span className="font-sans text-2xl font-bold tracking-tight">Tripadvisor</span>
            </div>
            <div className="mt-5 flex justify-center gap-1"><Star /><Star /><Star /><Star /><Star /></div>
            <p className="mt-4 font-serif text-3xl">5.0</p>
            <button className="mt-5 rounded-full border border-neutral-300 px-7 py-2 text-[10px] tracking-[0.2em] text-neutral-800 hover:bg-neutral-50">
              REVIEW US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
