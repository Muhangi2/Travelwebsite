import { useState } from 'react'
import TeamMemberCard, { type TeamMember } from './TeamMemberCard'

const guides: TeamMember[] = [
  {
    name: 'Steven',
    role: 'Head Guide',
    bio: "Steven is the senior-most member of our field team. As the Head Guide, he sets the standard for safety, professionalism and local knowledge — mentoring the guiding team and personally leading our most challenging and exclusive expeditions.",
    quote: 'Every safari is a story written by the land. My job is to read it for you.',
    image: '/images/team/steven.jpg',
  },
  {
    name: 'Micheal',
    role: 'Trekking & Excursion Lead',
    bio: "Micheal specialises in primate trekking and high-altitude excursions across the Albertine Rift. UWA-certified and gorilla-tracking trained, he plans and leads every gorilla, golden-monkey and chimp encounter on our itineraries.",
    quote: 'Spend an hour with a silverback and the rest of life makes more sense.',
    image: '/images/team/micheal.jpg',
  },
  {
    name: 'Keke',
    role: 'Wildlife Guide',
    bio: "Keke is known for his infectious enthusiasm and deep connection to the natural environment. As a Wildlife Guide, he excels at making complex ecological information accessible and engaging — turning every game drive into a fascinating field lesson.",
    quote: 'There is no such thing as a slow day in the bush — only undertrained eyes.',
    image: '/images/team/keke.jpg',
  },
  {
    name: 'Kelly',
    role: 'Birding Specialist',
    bio: "A certified birding guide, Kelly leads our specialist birding circuits with a sharp eye and an encyclopedic memory of the regional avifauna. From shoebills in the Mabamba swamp to the Albertine endemics of Bwindi, she finds them all.",
    quote: 'You came for the gorillas. You will leave dreaming of the birds.',
    image: '/images/team/kelly.jpg',
  },
]

const PER_PAGE = 3

export default function FieldOperations() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(guides.length / PER_PAGE)
  const visible = guides.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <p className="eyebrow text-center">In The Field</p>
        <h2 className="mt-3 text-center">Field Operations &middot; Our Expert Guides</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-muted sm:text-base">
          Our guides are the heart of every safari — born and raised in East Africa, certified to the highest
          standards, and obsessed with making every day in the field unforgettable.
        </p>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
          {visible.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-brand-muted">
              <span className="text-brand-ink">{page + 1}</span>/{totalPages}
            </p>
            <div className="mx-4 h-px flex-1 bg-neutral-200 sm:mx-6">
              <div
                className="h-full bg-brand-green transition-all"
                style={{ width: `${((page + 1) / totalPages) * 100}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="rounded-full border border-neutral-300 p-3 text-brand-ink transition hover:border-brand-green hover:bg-brand-cream disabled:opacity-40"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                aria-label="Next"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="rounded-full border border-neutral-300 p-3 text-brand-ink transition hover:border-brand-green hover:bg-brand-cream disabled:opacity-40"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
