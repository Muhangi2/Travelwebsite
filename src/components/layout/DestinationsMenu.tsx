import { useState } from 'react'

type Country = {
  name: string
  parks: string[]
  images: string[]
}

const countries: Country[] = [
  {
    name: 'Uganda',
    parks: [
      'Bwindi Impenetrable National Park',
      'Queen Elizabeth National Park',
      'Murchison Falls National Park',
      'Kibale Forest National Park',
      'Lake Mburo National Park',
      'Mgahinga Gorilla National Park',
    ],
    images: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    name: 'Rwanda',
    parks: [
      'Volcanoes National Park',
      'Akagera National Park',
      'Nyungwe Forest National Park',
      'Gishwati-Mukura National Park',
    ],
    images: [
      'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1604569370408-cea5e9d99cf6?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    name: 'Kenya',
    parks: [
      'Maasai Mara National Reserve',
      'Amboseli National Park',
      'Tsavo East National Park',
      'Tsavo West National Park',
      'Lake Nakuru National Park',
      'Samburu National Reserve',
      'Aberdare National Park',
      'Mount Kenya National Park',
    ],
    images: [
      'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1604569370408-cea5e9d99cf6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    name: 'Burundi',
    parks: ['Kibira National Park', 'Ruvubu National Park'],
    images: [
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80',
    ],
  },
]

export default function DestinationsMenu({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState('Kenya')
  const [imageIndex, setImageIndex] = useState(0)
  const country = countries.find((c) => c.name === active)!

  return (
    <div className="absolute left-1/2 top-full z-40 mt-2 w-[920px] -translate-x-1/2 overflow-hidden rounded-md bg-white shadow-2xl">
      <div className="grid grid-cols-[260px_1fr]">
        <aside className="border-r border-neutral-100 bg-white p-6">
          <h3 className="font-serif text-xl text-neutral-900">Destinations</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {countries.map((c) => {
              const isActive = c.name === active
              return (
                <li key={c.name}>
                  <button
                    onMouseEnter={() => {
                      setActive(c.name)
                      setImageIndex(0)
                    }}
                    onClick={() => setActive(c.name)}
                    className={`flex w-full items-center justify-between text-left ${
                      isActive ? 'font-medium text-brand-green' : 'text-neutral-700 hover:text-neutral-900'
                    }`}
                  >
                    <span>{c.name}</span>
                    {isActive && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        <div className="bg-brand-green p-6 text-white">
          <button
            onClick={onClose}
            className="ml-auto flex items-center gap-1 text-xs text-white/80 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 9l6 6M15 9l-6 6" />
            </svg>
            Close
          </button>

          <div className="mt-3 grid gap-6 md:grid-cols-2">
            <ul className="space-y-3 text-sm">
              {country.parks.map((p) => (
                <li key={p}>
                  <a href="#" className="block hover:underline">{p}</a>
                </li>
              ))}
            </ul>
            <div className="relative">
              <div className="overflow-hidden rounded-md">
                <img
                  src={country.images[imageIndex]}
                  alt={`${country.name} lodge`}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                {country.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`h-1.5 w-1.5 rounded-full ${i === imageIndex ? 'bg-white' : 'bg-white/40'}`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
