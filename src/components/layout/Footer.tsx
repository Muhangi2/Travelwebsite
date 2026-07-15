import { NavLink } from 'react-router-dom'
import { site } from '@/config/site'
import Logo from './Logo'

const Social = ({ label, href, path, brand }: { label: string; href: string; path: string; brand?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={
      brand
        ? 'flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:bg-[#20bd5a]'
        : 'flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 hover:ring-white/40'
    }
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  </a>
)

const partners = [
  { label: 'Singita', logo: '/images/logos/partners/singita.jpg' },
  { label: 'One & Only', logo: '/images/logos/partners/one-and-only.jpg' },
  { label: 'Marriott', logo: '/images/logos/partners/marriot.png' },
  { label: 'MARASA Africa', logo: '/images/logos/partners/marasa-africa.png' },
]

const destinations = [
  { label: 'Explore Uganda — The Pearl of Africa', logo: '/images/logos/tourism-boards/explore-uganda.png', light: true },
  { label: 'Magical Kenya', logo: '/images/logos/tourism-boards/magical-kenya-logo.png', light: false },
  { label: 'Visit Rwanda', logo: '/images/logos/tourism-boards/visit-rwanda-logo.jpg', light: false },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white/75">
      <div className="container-page pb-10 pt-14 sm:pt-16">
        <div className="grid grid-cols-2 items-center gap-6 border-b border-white/10 pb-10 sm:grid-cols-4 sm:gap-10">
          {partners.map((p) => (
            <div key={p.label} className="flex items-center justify-center">
              <img
                src={p.logo}
                alt={p.label}
                loading="lazy"
                className="h-10 w-auto max-w-[140px] object-contain opacity-70 invert mix-blend-screen transition hover:opacity-100 sm:h-12 sm:max-w-[160px]"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <NavLink to="/">
            <Logo variant="full" />
          </NavLink>
          <p className="eyebrow mt-8 text-white/50">Stay In Touch</p>
          <h4 className="mt-2 text-2xl text-white sm:text-3xl">Connect with us</h4>
          <div className="mt-5 flex justify-center gap-3">
            <Social
              label="Follow us on Instagram"
              href={site.instagram}
              path="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.2-4.8-1.7-5-5C2 16.6 2 16.3 2 12s0-3.6.1-4.8c.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.7.1-2.5.1-3.4 1-3.5 3.5C3.7 8.8 3.7 9 3.7 12s0 3.2.1 4.4c.1 2.5 1 3.4 3.5 3.5 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c2.5-.1 3.4-1 3.5-3.5.1-1.2.1-1.5.1-4.4s0-3.2-.1-4.4c-.1-2.5-1-3.4-3.5-3.5-1.2-.1-1.5-.1-4.7-.1zm0 3a5 5 0 110 10A5 5 0 0112 7zm0 8.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm5.2-9.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            />
            <Social
              label="Follow us on Facebook"
              href={site.facebook}
              path="M13 22v-8h3l1-4h-4V7c0-1 .5-2 2-2h2V1h-3c-3 0-5 2-5 5v4H6v4h3v8z"
            />
            <Social
              label="Subscribe on YouTube"
              href={site.youtube}
              path="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"
            />
            <Social
              label="Chat on WhatsApp"
              href={site.whatsappHref}
              brand
              path="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.24-.87.85-.87 2.08s.9 2.41 1.02 2.57c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <form
            className="flex overflow-hidden rounded-full bg-white p-1 shadow-md"
            onSubmit={(e) => {
              e.preventDefault()
              const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value
              window.location.href = `mailto:${site.email}?subject=Newsletter%20signup&body=Please%20add%20me:%20${encodeURIComponent(email || '')}`
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email…"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-neutral-700 outline-none sm:px-5"
            />
            <button
              type="submit"
              className="rounded-full bg-black px-5 py-2 text-[10px] font-medium tracking-[0.2em] text-white ring-1 ring-black transition hover:bg-neutral-900 sm:px-6"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
          <div>
            <h4 className="text-lg text-white">About Us</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-white">Our Story</NavLink></li>
              <li><NavLink to="/know-before-you-go" className="hover:text-white">Know Before You Go</NavLink></li>
              <li><NavLink to="/work-with-us" className="hover:text-white">Work With Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white">Destinations</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><NavLink to="/destinations/uganda" className="hover:text-white">Uganda</NavLink></li>
              <li><NavLink to="/destinations/rwanda" className="hover:text-white">Rwanda</NavLink></li>
              <li><NavLink to="/destinations/kenya" className="hover:text-white">Kenya</NavLink></li>
              <li><NavLink to="/destinations" className="hover:text-white">All Destinations</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
              <li><NavLink to="/safari-collections" className="hover:text-white">Safari Collections</NavLink></li>
              <li><NavLink to="/stories" className="hover:text-white">Stories</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white">Contact Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${site.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {site.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.whatsapp.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
                    <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.1c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" />
                  </svg>
                  {site.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-medium text-white shadow-md transition hover:bg-[#1ebe5a] hover:shadow-lg"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.24-.87.85-.87 2.08s.9 2.41 1.02 2.57c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
                  </svg>
                  {site.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-8">
          {destinations.map((d) => (
            <div key={d.label} className="flex items-center justify-center">
              <img
                src={d.logo}
                alt={d.label}
                loading="lazy"
                className={`h-12 w-auto max-w-[180px] object-contain opacity-70 mix-blend-screen transition hover:opacity-100 sm:h-14 sm:max-w-[200px] ${
                  d.light ? '' : 'invert'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] text-white/55 sm:gap-6 sm:text-xs sm:tracking-[0.25em]">
          <span className="h-px flex-1 bg-white/10" />
          <span>UGANDA</span>
          <span className="text-white/40">·</span>
          <span>RWANDA</span>
          <span className="text-white/40">·</span>
          <span>KENYA</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/55 sm:mt-10 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-3">
            <NavLink to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </NavLink>
            <span>·</span>
            <NavLink to="/privacy-policy" className="hover:text-white">
              Terms &amp; Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
