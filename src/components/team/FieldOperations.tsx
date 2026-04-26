import { useState } from 'react'
import TeamMemberCard, { type TeamMember } from './TeamMemberCard'

const guides: TeamMember[] = [
  {
    name: 'Ricky Shairff',
    role: 'Head Guide',
    bio: "Ricky is the senior-most member of our field team. As the Head Guide, he sets the standard for safety, professionalism, and local knowledge. He mentors the guiding team and personally leads our most challenging and exclusive expeditions, ensuring a world-class experience every time.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Nicotr Muhwezi',
    role: 'Guide and Head Guide for Excursion',
    bio: "Nicotr brings a dual focus to the team. As a seasoned Guide, he is an expert in wildlife tracking and local culture. His additional role as Head Guide for Excursion means he specializes in planning and executing all day-trips and specialized activities, guaranteeing smooth and memorable short adventures.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Keke',
    role: 'Guide',
    bio: "Keke is known for his infectious enthusiasm and deep connection to the natural environment. As a Guide, he excels at making complex ecological information accessible and engaging, turning every game drive and nature walk into a fascinating educational experience.",
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Daniel',
    role: 'Driver Guide',
    bio: 'Daniel combines decades behind the wheel of safari vehicles with a deep affection for Uganda’s wildlife. He keeps every transit safe, comfortable, and full of stories.',
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Sarah',
    role: 'Birding Specialist',
    bio: 'A certified birding guide, Sarah leads our specialist birding circuits with a sharp eye and an encyclopedic memory of the regional avifauna.',
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Samuel',
    role: 'Trekking Lead',
    bio: 'Samuel leads our gorilla and golden monkey treks, drawing on years of UWA-certified experience in the Albertine Rift.',
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const PER_PAGE = 3

export default function FieldOperations() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(guides.length / PER_PAGE)
  const visible = guides.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl">Field Operations: Our<br />Expert Guides</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visible.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            <span className="text-neutral-900">{page + 1}</span>/{totalPages}
          </p>
          <div className="mx-6 h-px flex-1 bg-neutral-200">
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
              className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50 disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50 disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
