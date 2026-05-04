import { useState, useEffect } from 'react'
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change-like body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled ? 'bg-brand-ink/85 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-page flex items-center justify-between py-4 sm:py-5">
          <NavLink to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              <span className="text-brand-gold">Master</span>
              <span className="text-white">Polo</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) =>
              l.hasFlyout ? (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => setDestOpen(true)}
                  onMouseLeave={() => setDestOpen(false)}
                >
                  <button
                    className={`text-[11px] font-medium tracking-[0.2em] text-white/90 transition hover:text-white ${
                      destOpen ? 'border-b-2 border-brand-gold pb-1' : ''
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
                    `text-[11px] font-medium tracking-[0.2em] text-white/90 transition hover:text-white ${
                      isActive ? 'border-b-2 border-brand-gold pb-1' : ''
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <NavLink
              to="/contact"
              className="hidden rounded-full border border-white/40 bg-white/8 px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-white backdrop-blur transition hover:bg-white/15 sm:inline-flex sm:px-5 sm:text-xs"
            >
              INQUIRE NOW
            </NavLink>
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-brand-forest-dark text-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col px-6 pb-10 pt-24">
            <p className="eyebrow text-brand-gold mb-2">Menu</p>
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-white/10 py-4 font-serif text-xl transition hover:text-brand-gold ${
                      isActive ? 'text-brand-gold' : 'text-white'
                    }`
                  }
                >
                  {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                </NavLink>
              ))}
            </nav>
            <div className="mt-8 grid gap-3 text-sm text-white/70">
              <div>
                <p className="font-serif text-base text-white">Contact</p>
                <p className="mt-1">info@masterpolosafaris.com</p>
                <p>+256 769 797 796</p>
              </div>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 w-full justify-center">
                INQUIRE NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
