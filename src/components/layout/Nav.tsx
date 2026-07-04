import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import DestinationsMenu from './DestinationsMenu'
import Logo from './Logo'
import { site } from '@/config/site'
import { useCountries } from '@/sanity/destinations'

type NavLinkItem = {
  to: string
  label: string
  hasFlyout?: boolean
  subLinks?: { to: string; label: string }[]
}

const links: NavLinkItem[] = [
  { to: '/', label: 'Home' },
  { to: '/safari-collections', label: 'Journeys' },
  { to: '/destinations', label: 'Destinations', hasFlyout: true },
  {
    to: '/about',
    label: 'About Us',
    subLinks: [
      { to: '/about', label: 'Our Story' },
{ to: '/work-with-us', label: 'Work With Us' },
      { to: '/know-before-you-go', label: 'Know Before You Go' },
      { to: '/regenerative-travel', label: 'What Regenerative Travel Means to Us' },
    ],
  },
  { to: '/stories', label: 'Blogs' },
  { to: '/contact', label: 'Contact Us' },
]

const leftLinks = links.slice(0, 3)
const rightLinks = links.slice(3)

const HOVER_CLOSE_DELAY = 160

export default function Nav() {
  const { list: countryList } = useCountries()
  const mobileDestinations = countryList.map((c) => ({
    slug: c.slug,
    name: c.name,
  }))
  const [destOpen, setDestOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [navVisible, setNavVisible] = useState(true)
  const location = useLocation()
  const hasDarkHero = true
  const [scrolled, setScrolled] = useState(!hasDarkHero)
  const destTimer = useRef<number | null>(null)
  const aboutTimer = useRef<number | null>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close all menus and reset nav style on route change
  useEffect(() => {
    setMobileOpen(false)
    setDestOpen(false)
    setAboutOpen(false)
    setMobileExpanded(null)
    setScrolled(window.scrollY > 60)
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

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      if (y < 80) {
        setNavVisible(true)
      } else if (y > lastScrollY.current + 6) {
        setNavVisible(false) // scrolling down — hide
      } else if (y < lastScrollY.current - 6) {
        setNavVisible(true)  // scrolling up — show
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openWithGrace = (
    setter: (v: boolean) => void,
    timerRef: React.RefObject<number | null>,
  ) => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    setter(true)
  }
  const closeWithGrace = (
    setter: (v: boolean) => void,
    timerRef: React.RefObject<number | null>,
  ) => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setter(false), HOVER_CLOSE_DELAY)
  }

  const linkColor = scrolled ? 'text-white hover:text-white/70' : 'text-white hover:text-white/70'
  const activeIndicator = scrolled ? 'border-white' : 'border-white'

  const navItemClass = (active: boolean, open: boolean) =>
    `inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-bold tracking-[0.2em] transition ${linkColor} ${
      active || open ? `border-b-2 ${activeIndicator} pb-1` : ''
    }`

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      } ${
        navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>

        {/* ── Desktop: centred-logo split nav ── */}
        <div className={`container-page hidden items-center xl:grid xl:grid-cols-[1fr_auto_1fr] transition-all duration-500 ${scrolled ? 'h-[5rem]' : 'h-[13rem]'}`}>

          {/* Left links */}
          <nav className="flex items-center gap-7">
            {leftLinks.map((l) => {
              if (l.hasFlyout) {
                return (
                  <div
                    key={l.to}
                    onPointerEnter={(e) => { if (e.pointerType === 'mouse') openWithGrace(setDestOpen, destTimer) }}
                    onPointerLeave={(e) => { if (e.pointerType === 'mouse') closeWithGrace(setDestOpen, destTimer) }}
                  >
                    <NavLink
                      to={l.to}
                      aria-haspopup="true"
                      aria-expanded={destOpen}
                      onClick={() => setDestOpen(false)}
                      className={({ isActive }) => navItemClass(isActive, destOpen)}
                    >
                      {l.label.toUpperCase()}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className={`transition-transform ${destOpen ? 'rotate-180' : ''}`}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </NavLink>
                  </div>
                )
              }
              return (
                <NavLink key={l.to} to={l.to} end={l.to === '/'}
                  className={({ isActive }) => navItemClass(isActive, false)}>
                  {l.label.toUpperCase()}
                </NavLink>
              )
            })}
          </nav>

          {/* Centre logo */}
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center px-8"
          >
            <Logo className={`transition-all duration-500 ${scrolled ? '!h-12 brightness-0 invert' : ''}`} />
          </NavLink>

          {/* Right links + CTA */}
          <nav className="flex items-center justify-end gap-7">
            {rightLinks.map((l) => {
              if (l.subLinks) {
                return (
                  <div
                    key={l.to}
                    className="relative"
                    onPointerEnter={(e) => { if (e.pointerType === 'mouse') openWithGrace(setAboutOpen, aboutTimer) }}
                    onPointerLeave={(e) => { if (e.pointerType === 'mouse') closeWithGrace(setAboutOpen, aboutTimer) }}
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
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </NavLink>
                    {aboutOpen && (
                      <div className="absolute left-1/2 top-full z-40 mt-2 w-60 -translate-x-1/2 overflow-hidden rounded-md bg-black shadow-2xl ring-1 ring-white/10">
                        <ul className="py-2">
                          {l.subLinks.map((s) => (
                            <li key={s.to}>
                              <NavLink
                                to={s.to}
                                end={s.to === l.to}
                                onClick={() => setAboutOpen(false)}
                                className={({ isActive }) =>
                                  `block px-4 py-2.5 text-sm transition ${
                                    isActive ? 'bg-white/10 font-medium text-white' : 'text-white/75 hover:bg-white/5 hover:text-white'
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
                <NavLink key={l.to} to={l.to} end={l.to === '/'}
                  className={({ isActive }) => navItemClass(isActive, false)}>
                  {l.label.toUpperCase()}
                </NavLink>
              )
            })}

            {/* Thin divider */}
            <span className={`h-4 w-px ${scrolled ? 'bg-white/30' : 'bg-white/30'}`} />

            <NavLink
              to="/contact"
              className={`rounded-full border px-4 py-2 text-[10px] font-medium tracking-[0.2em] transition xl:px-5 xl:text-xs ${
                scrolled
                  ? 'border-white bg-white text-black hover:bg-white/90'
                  : 'border-white bg-white/10 text-white backdrop-blur hover:bg-white/20'
              }`}
            >
              INQUIRE NOW
            </NavLink>
          </nav>
        </div>

        {/* Destinations mega-menu — absolute from the fixed header so it centres correctly */}
        {destOpen && (
          <div
            onPointerEnter={(e) => { if (e.pointerType === 'mouse') openWithGrace(setDestOpen, destTimer) }}
            onPointerLeave={(e) => { if (e.pointerType === 'mouse') closeWithGrace(setDestOpen, destTimer) }}
          >
            <DestinationsMenu onClose={() => setDestOpen(false)} />
          </div>
        )}

        {/* ── Mobile: logo centred absolutely, hamburger left ── */}
        <div className={`container-page relative flex items-center xl:hidden transition-all duration-500 ${scrolled ? 'h-16' : 'h-40 sm:h-[9rem] md:h-[11rem]'}`}>
          {/* Burger left */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
              scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
            }`}
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

          {/* Logo absolutely centred */}
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Logo className={`transition-all duration-500 ${scrolled ? '!h-10 brightness-0 invert' : ''}`} />
          </NavLink>

          {/* Right spacer to balance burger */}
          <div className="ml-auto h-10 w-10" />
        </div>

      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-30 xl:hidden transition-opacity duration-300 ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-black text-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col px-6 pb-10 pt-44 sm:pt-40 md:pt-48">
            <p className="eyebrow mb-2 text-white/50">Menu</p>
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
                            `flex-1 py-4 font-serif text-xl transition hover:text-white/70 ${
                              isActive ? 'text-white' : 'text-white/80'
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
                                  `block py-2 text-sm transition hover:text-white ${
                                    isActive ? 'text-white' : 'text-white/70'
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
                      `border-b border-white/10 py-4 font-serif text-xl transition hover:text-white/70 ${
                        isActive ? 'text-white' : 'text-white/80'
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
                <a href={`mailto:${site.email}`} className="mt-1 block transition hover:text-white">
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block transition hover:text-white">
                  {site.phone}
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
