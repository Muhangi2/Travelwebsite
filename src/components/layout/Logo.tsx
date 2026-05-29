type LogoProps = {
  variant?: 'nav' | 'full'
  className?: string
}

const LOGO = '/Still_Wild_Safaris_final_one.png'

export default function Logo({ variant = 'nav', className = '' }: LogoProps) {
  if (variant === 'full') {
    return (
      <img
        src={LOGO}
        alt="Still Wild Safaris"
        className={`mx-auto block h-auto w-56 sm:w-64 md:w-72 ${className}`}
      />
    )
  }

  return (
    <img
      src={LOGO}
      alt="Still Wild Safaris"
      className={`block h-36 w-auto sm:h-40 md:h-44 lg:h-48 ${className}`}
    />
  )
}
