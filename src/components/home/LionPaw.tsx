const lionImg = 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1400&q=80'

export default function LionPaw() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-6">
        <svg viewBox="0 0 400 400" className="w-72 md:w-96" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lion-pattern" patternUnits="userSpaceOnUse" width="400" height="400">
              <image href={lionImg} x="0" y="0" width="400" height="400" preserveAspectRatio="xMidYMid slice" />
            </pattern>
            <pattern id="lion-pattern-2" patternUnits="userSpaceOnUse" width="400" height="400">
              <image href={lionImg} x="-80" y="-40" width="500" height="500" preserveAspectRatio="xMidYMid slice" />
            </pattern>
            <pattern id="lion-pattern-3" patternUnits="userSpaceOnUse" width="400" height="400">
              <image href={lionImg} x="-160" y="-20" width="600" height="600" preserveAspectRatio="xMidYMid slice" />
            </pattern>
            <pattern id="lion-pattern-4" patternUnits="userSpaceOnUse" width="400" height="400">
              <image href={lionImg} x="-40" y="-60" width="500" height="500" preserveAspectRatio="xMidYMid slice" />
            </pattern>
            <pattern id="lion-pattern-5" patternUnits="userSpaceOnUse" width="400" height="400">
              <image href={lionImg} x="-200" y="-80" width="700" height="700" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          </defs>

          <ellipse cx="100" cy="120" rx="42" ry="55" fill="url(#lion-pattern)" />
          <ellipse cx="170" cy="80" rx="38" ry="50" fill="url(#lion-pattern-2)" />
          <ellipse cx="240" cy="80" rx="38" ry="50" fill="url(#lion-pattern-3)" />
          <ellipse cx="310" cy="120" rx="42" ry="55" fill="url(#lion-pattern-4)" />
          <ellipse cx="205" cy="260" rx="120" ry="110" fill="url(#lion-pattern-5)" />
        </svg>
      </div>
    </section>
  )
}
