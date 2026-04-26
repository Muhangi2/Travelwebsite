import { NavLink } from 'react-router-dom'

const Social = ({ label, path }: { label: string; path: string }) => (
  <a
    href="#"
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/15 hover:bg-black/60"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  </a>
)

const partners = [
  { label: 'ATTA', text: 'Atta' },
  { label: 'Uganda Wildlife', text: 'UWA' },
  { label: 'ITB Asia', text: 'ITB ASIA' },
  { label: 'We Are Africa', text: 'WE ARE AFRICA' },
]

const destinations = [
  { label: 'Explore Uganda — The Pearl of Africa' },
  { label: 'Magical Kenya' },
  { label: 'Visit Rwanda' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-forest-dark text-white/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-10 md:grid-cols-4">
          {partners.map((p) => (
            <div key={p.label} className="flex items-center justify-center">
              <span className="font-serif text-lg tracking-wide text-white/40">{p.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h4 className="font-serif text-lg text-white">Connect with us</h4>
          <div className="mt-4 flex justify-center gap-3">
            <Social label="Facebook" path="M13 22v-8h3l1-4h-4V7c0-1 .5-2 2-2h2V1h-3c-3 0-5 2-5 5v4H6v4h3v8z" />
            <Social label="LinkedIn" path="M4 4h4v16H4zm2-4a2 2 0 11.001 4 2 2 0 010-4zM10 8h4v2c1-2 3-2 4-2 4 0 4 3 4 6v6h-4v-6c0-1-.5-2-2-2s-2 1-2 2v6h-4z" />
            <Social label="X" path="M18 3l-6 8 7 10h-4l-5-7-5 7H3l7-9-7-9h4l4 6 4-6z" />
            <Social label="YouTube" path="M22 8s-.2-1.5-.8-2.1c-.7-.8-1.6-.8-2-.9C16.4 4.7 12 4.7 12 4.7s-4.4 0-7.2.3c-.4.1-1.3.1-2 .9C2.2 6.5 2 8 2 8s-.2 1.7-.2 3.5v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.7.8 1.7.8 2.2.9 1.6.2 7 .3 7 .3s4.4 0 7.2-.3c.4-.1 1.3-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6C22.2 9.7 22 8 22 8zM10 15V9l5 3z" />
            <Social label="Pinterest" path="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.2-5 1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3-.1.3-.3 1-.3 1.2-.1.2-.2.3-.4.2-1.4-.7-2.3-2.7-2.3-4.4 0-3.6 2.6-6.9 7.5-6.9 3.9 0 7 2.8 7 6.6 0 3.9-2.5 7.1-5.9 7.1-1.2 0-2.3-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.5 3.1.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
            <Social label="Vimeo" path="M22 7c-.1 2.4-1.7 5.6-4.9 9.7-3.3 4.3-6.1 6.4-8.4 6.4-1.4 0-2.6-1.3-3.6-4-1-3.6-1.5-7.2-1.7-7.6-.6 0-1.6 1-2.9 2.1L0 12.3C1.3 11.1 2.6 10 3.9 8.8 5.8 7.3 7.2 6.4 8.1 6.3c2.2-.2 3.6 1.3 4.1 4.5.5 3.4.8 5.6 1.1 6.5.5 1.7 1 2.5 1.7 2.5.5 0 1.3-.7 2.4-2.2 1-1.4 1.6-2.6 1.7-3.4.1-1.5-.4-2.2-1.6-2.2-.5 0-1.1.1-1.7.3 1-3.4 3.1-5.1 6-5 2.2.1 3.3 1.4 3.2 4z" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex overflow-hidden rounded-full bg-white p-1">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="flex-1 bg-transparent px-5 py-2 text-sm text-neutral-700 outline-none"
            />
            <button className="rounded-full bg-brand-green px-6 py-2 text-[10px] tracking-[0.2em] text-white hover:bg-brand-green-dark">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <div>
            <h4 className="font-serif text-lg text-white">About Us</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">The East African DMC</a></li>
              <li><NavLink to="/meet-the-team" className="hover:text-white">Meet the Team</NavLink></li>
              <li><NavLink to="/know-before-you-go" className="hover:text-white">Know Before You Go</NavLink></li>
              <li><NavLink to="/work-with-us" className="hover:text-white">Work With Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-white">Destinations</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Uganda</a></li>
              <li><a href="#" className="hover:text-white">Rwanda</a></li>
              <li><a href="#" className="hover:text-white">Kenya</a></li>
              <li><a href="#" className="hover:text-white">Burundi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
              <li><NavLink to="/safari-collections" className="hover:text-white">Safari Collection</NavLink></li>
              <li><NavLink to="/stories" className="hover:text-white">Stories</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white">Contact Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>info@masterpolosafaris.com</li>
              <li>Imperial Mall — Ground Level Suite 30, Uganda</li>
              <li>+256 769 797 796 · +256 705 527 599</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.label} className="text-center font-serif text-sm tracking-wide text-white/40">
              {d.label}
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-8 text-xs tracking-[0.25em] text-white/60">
          <span className="h-px flex-1 bg-white/10" />
          <span>UGANDA</span>
          <span className="text-white/40">●</span>
          <span>RWANDA</span>
          <span className="text-white/40">●</span>
          <span>KENYA</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>Copyright © {new Date().getFullYear()} MasterPolo Safaris. All Rights Reserved.</p>
          <div className="flex gap-3">
            <NavLink to="/privacy-policy" className="hover:text-white">Privacy Policy</NavLink>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
