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
        className={`mx-auto block h-auto w-48 sm:w-56 ${className}`}
      />
    )
  }

  return (
    <img
      src={LOGO}
      alt="Still Wild Safaris"
      className={`block h-14 w-auto sm:h-16 md:h-[4.75rem] ${className}`}
    />
  )
}
