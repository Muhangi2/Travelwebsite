import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'
import { dataset, isSanityConfigured, projectId } from './env'

const builder = isSanityConfigured ? imageUrlBuilder({ projectId, dataset }) : null

export function urlFor(source: SanityImageSource | undefined | null, width = 1600, quality = 80): string | null {
  if (!builder || !source) return null
  try {
    return builder.image(source).auto('format').width(width).quality(quality).fit('max').url()
  } catch {
    return null
  }
}
