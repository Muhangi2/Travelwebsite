type Review = {
  date: string
  name: string
  body: string
}

const reviews: Review[] = [
  {
    date: '31/01/2026',
    name: 'The Harrison Family',
    body: '"MasterPolo Safaris exceeded every expectation. Our guide was not just a driver but a fountain of knowledge. The attention to detail in our luxury lodge selections made the trip truly special."',
  },
  {
    date: '31/01/2026',
    name: 'Sarah Mitchell',
    body: '"Our safari with MasterPolo Safaris was beyond anything we imagined. The guides were incredibly knowledgeable, the lodges were beautiful, and gorilla trekking was a life-changing experience."',
  },
  {
    date: '31/01/2026',
    name: 'Daniel Roberts',
    body: '"From the moment we arrived, everything felt seamless and personal. Our driver-guide made us feel safe and welcomed, and we saw the Big Five in just two days! This was not just a trip"',
  },
]

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f4a82c">
    <path d="M12 2l2.95 6.97 7.55.63-5.74 4.95L18.5 22 12 17.77 5.5 22l1.74-7.45L1.5 9.6l7.55-.63z" />
  </svg>
)

const VerifiedBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1e5631">
    <path d="M12 1l3 3 4-1 1 4 3 3-3 3 1 4-4-1-3 3-3-3-4 1-1-4-3-3 3-3-1-4 4 1z" />
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
  </svg>
)

const UgandaFlag = () => (
  <div className="h-6 w-6 overflow-hidden rounded-full ring-1 ring-neutral-200">
    <div className="h-1/3 bg-black" />
    <div className="h-1/3 bg-yellow-400" />
    <div className="h-1/3 bg-red-600" />
  </div>
)

export default function GuestReviews() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-4xl">Our Guests Reviews</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-md bg-white p-6 shadow-sm ring-1 ring-neutral-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-neutral-300">
                      <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM2 22c0-5.523 4.477-10 10-10s10 4.477 10 10H2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-500">{r.date}</p>
                    <p className="font-serif text-sm font-semibold text-brand-green">{r.name}</p>
                  </div>
                </div>
                <UgandaFlag />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex gap-0.5"><Star /><Star /><Star /><Star /><Star /></div>
                <VerifiedBadge />
              </div>
              <div className="relative mt-4">
                <span className="absolute -right-1 -top-1 select-none text-5xl leading-none text-neutral-200">”</span>
                <p className="text-sm leading-relaxed text-neutral-700">{r.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-brand-green' : 'bg-neutral-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
