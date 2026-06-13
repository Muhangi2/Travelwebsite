import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'
import { dataset, isSanityConfigured, projectId } from './env'

const builder = isSanityConfigured ? imageUrlBuilder({ projectId, dataset }) : null

export function urlFor(source: SanityImageSource | undefined | null): string | null {
  if (!builder || !source) return null
  try {
    return builder.image(source).auto('format').fit('max').url()
  } catch {
    return null
  }
}
