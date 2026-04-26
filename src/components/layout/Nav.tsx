import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DestinationsMenu from './DestinationsMenu'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/safari-collections', label: 'SAFARI COLLECTIONS' },
  { to: '/destinations', label: 'DESTINATIONS', hasFlyout: true },
  { to: '/about', label: 'ABOUT US' },
  { to: '/stories', label: 'STORIES' },
  { to: '/contact', label: 'CONTACT US' },
]

export default function Nav() {
  const [destOpen, setDestOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold text-white">
            <span className="text-brand-rust">Master</span>
            <span className="text-white">Polo</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) =>
            l.hasFlyout ? (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => setDestOpen(true)}
                onMouseLeave={() => setDestOpen(false)}
              >
                <button
                  className={`text-xs tracking-[0.18em] text-white/90 hover:text-white ${
                    destOpen ? 'border-b-2 border-brand-rust pb-1' : ''
                  }`}
                >
                  {l.label}
                </button>
                {destOpen && <DestinationsMenu onClose={() => setDestOpen(false)} />}
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] text-white/90 hover:text-white ${
                    isActive ? 'border-b-2 border-brand-rust pb-1' : ''
                  }`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Account" className="text-white/90 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          </button>
          <button aria-label="Cart" className="relative text-white/90 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6h15l-1.5 9h-12z" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
            </svg>
            <span className="absolute -top-1 -right-2 rounded-full bg-brand-rust px-1.5 text-[10px] text-white">0</span>
          </button>
          <NavLink
            to="/contact"
            className="rounded-full border border-white/40 bg-black/40 px-5 py-2 text-xs tracking-[0.2em] text-white backdrop-blur hover:bg-black/60"
          >
            INQUIRE NOW
          </NavLink>
        </div>
      </div>
    </header>
  )
}
