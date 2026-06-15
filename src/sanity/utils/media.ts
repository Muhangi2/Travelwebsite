import type { SanityImageSource } from '@sanity/image-url'
import { urlFor } from '../image'

export type SanityMediaImage = {
  asset?: SanityImageSource
  path?: string
  alt?: string
}

export function resolveMediaImage(media: SanityMediaImage | undefined | null, width = 1600, quality = 80): string {
  if (!media) return ''
  return urlFor(media.asset, width, quality) ?? media.path ?? ''
}

export function resolveMediaImages(items: SanityMediaImage[] | undefined | null, width = 1600, quality = 80): string[] {
  if (!items?.length) return []
  return items.map((item) => resolveMediaImage(item, width, quality)).filter(Boolean)
}
