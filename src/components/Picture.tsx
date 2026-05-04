/**
 * Picture — drop-in <img> replacement that serves a .webp companion when the
 * browser supports it (almost all modern browsers), falling back to the
 * original JPG/PNG for legacy clients. WebP companions are pre-generated on
 * disk by scripts/gen-webp.
 */
type Props = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  width?: number | string
  height?: number | string
  decoding?: 'async' | 'sync' | 'auto'
}

function deriveWebp(src: string): string | null {
  // Only swap for .jpg / .jpeg paths under /images/. Skip if already webp / png / svg / external URL.
  if (!src.startsWith('/images/')) return null
  if (/\.(webp|png|svg|gif)$/i.test(src)) return null
  if (!/\.(jpe?g)$/i.test(src)) return null
  return src.replace(/\.jpe?g$/i, '.webp')
}

export default function Picture({
  src,
  alt,
  className,
  imgClassName,
  loading = 'lazy',
  fetchPriority,
  width,
  height,
  decoding = 'async',
}: Props) {
  const webp = deriveWebp(src)
  const imgProps = {
    src,
    alt,
    loading,
    decoding,
    fetchPriority,
    width,
    height,
    className: imgClassName ?? className,
  }

  if (!webp) {
    return <img {...imgProps} />
  }

  return (
    <picture className={className}>
      <source srcSet={webp} type="image/webp" />
      <img {...imgProps} />
    </picture>
  )
}
