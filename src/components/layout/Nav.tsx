import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import DestinationsMenu from './DestinationsMenu'
import { countries as countriesData } from '@/data/destinations'

type NavLinkItem = {
  to: string
  label: string
  hasFlyout?: boolean
  subLinks?: { to: string; label: string }[]
}

const links: NavLinkItem[] = [
  { to: '/', label: 'Home' },
  { to: '/safari-collections', label: 'Safari Collections' },
  { to: '/destinations', label: 'Destinations', hasFlyout: true },
  {
    to: '/about',
    label: 'About Us',
    subLinks: [
      { to: '/about', label: 'Our Story' },
      { to: '/meet-the-team', label: 'Meet the Team' },
      { to: '/work-with-us', label: 'Work With Us' },
      { to: '/know-before-you-go', label: 'Know Before You Go' },
    ],
  },
  { to: '/stories', label: 'Stories' },
  { to: '/contact', label: 'Contact Us' },
]

const mobileDestinations = Object.values(countriesData).map((c) => ({
  slug: c.slug,
  name: c.name,
}))

const HOVER_CLOSE_DELAY = 160

export default function Nav() {
  const [destOpen, setDestOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const destTimer = useRef<number | null>(null)
  const aboutTimer = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close all menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setDestOpen(false)
    setAboutOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  // Escape closes any open menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setDestOpen(false)
      setAboutOpen(false)
      setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openWithGrace = (
    setter: (v: boolean) => void,
    timerRef: React.MutableRefObject<number | null>,
  ) => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    setter(true)
  }
  const closeWithGrace = (
    setter: (v: boolean) => void,
    timerRef: React.MutableRefObject<number | null>,
  ) => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setter(false), HOVER_CLOSE_DELAY)
  }

  const navItemClass = (active: boolean, open: boolean) =>
    `inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.2em] text-white/90 transition hover:text-white ${
      active || open ? 'border-b-2 border-brand-gold pb-1' : ''
    }`

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
            {links.map((l) => {
              if (l.hasFlyout) {
                return (
                  <div
                    key={l.to}
                    className="relative"
                    onMouseEnter={() => openWithGrace(setDestOpen, destTimer)}
                    onMouseLeave={() => closeWithGrace(setDestOpen, destTimer)}
                  >
                    <NavLink
                      to={l.to}
                      aria-haspopup="true"
                      aria-expanded={destOpen}
                      onClick={() => setDestOpen(false)}
                      className={({ isActive }) => navItemClass(isActive, destOpen)}
                    >
                      {l.label.toUpperCase()}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform ${destOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </NavLink>
                    {destOpen && <DestinationsMenu onClose={() => setDestOpen(false)} />}
                  </div>
                )
              }

              if (l.subLinks) {
                return (
                  <div
                    key={l.to}
                    className="relative"
                    onMouseEnter={() => openWithGrace(setAboutOpen, aboutTimer)}
                    onMouseLeave={() => closeWithGrace(setAboutOpen, aboutTimer)}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      aria-haspopup="true"
                      aria-expanded={aboutOpen}
                      onClick={() => setAboutOpen(false)}
                      className={({ isActive }) => navItemClass(isActive, aboutOpen)}
                    >
                      {l.label.toUpperCase()}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </NavLink>
                    {aboutOpen && (
                      <div className="absolute left-1/2 top-full z-40 mt-2 w-60 -translate-x-1/2 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black/5">
                        <ul className="py-2">
                          {l.subLinks.map((s) => (
                            <li key={s.to}>
                              <NavLink
                                to={s.to}
                                end={s.to === l.to}
                                onClick={() => setAboutOpen(false)}
                                className={({ isActive }) =>
                                  `block px-4 py-2.5 text-sm transition ${
                                    isActive
                                      ? 'bg-brand-green/10 font-medium text-brand-green'
                                      : 'text-neutral-800 hover:bg-neutral-100'
                                  }`
                                }
                              >
                                {s.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => navItemClass(isActive, false)}
                >
                  {l.label.toUpperCase()}
                </NavLink>
              )
            })}
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
            <nav className="flex flex-col">
              {links.map((l) => {
                const subs = l.hasFlyout
                  ? mobileDestinations.map((c) => ({
                      to: `/destinations/${c.slug}`,
                      label: c.name,
                    }))
                  : l.subLinks

                if (subs && subs.length > 0) {
                  const expanded = mobileExpanded === l.to
                  return (
                    <div key={l.to} className="border-b border-white/10">
                      <div className="flex items-center">
                        <NavLink
                          to={l.to}
                          end={l.to === '/'}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `flex-1 py-4 font-serif text-xl transition hover:text-brand-gold ${
                              isActive ? 'text-brand-gold' : 'text-white'
                            }`
                          }
                        >
                          {l.label}
                        </NavLink>
                        <button
                          type="button"
                          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${l.label}`}
                          aria-expanded={expanded}
                          onClick={() => setMobileExpanded(expanded ? null : l.to)}
                          className="-mr-2 flex h-12 w-12 items-center justify-center text-white/70 transition hover:text-white"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                      </div>
                      {expanded && (
                        <ul className="mb-3 ml-1 space-y-1 border-l border-white/15 pl-4">
                          {subs.map((s) => (
                            <li key={s.to}>
                              <NavLink
                                to={s.to}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                  `block py-2 text-sm transition hover:text-brand-gold ${
                                    isActive ? 'text-brand-gold' : 'text-white/80'
                                  }`
                                }
                              >
                                {s.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                }

                return (
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
                    {l.label}
                  </NavLink>
                )
              })}
            </nav>

            <div className="mt-8 grid gap-3 text-sm text-white/70">
              <div>
                <p className="font-serif text-base text-white">Contact</p>
                <a href="mailto:info@masterpolosafaris.com" className="mt-1 block transition hover:text-white">
                  info@masterpolosafaris.com
                </a>
                <a href="tel:+256769797796" className="block transition hover:text-white">
                  +256 769 797 796
                </a>
              </div>
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 w-full justify-center"
              >
                INQUIRE NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
