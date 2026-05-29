import type { SanityImageSource } from '@sanity/image-url'
import { urlFor } from '../image'

export type SanityMediaImage = {
  asset?: SanityImageSource
  path?: string
  alt?: string
}

export function resolveMediaImage(media: SanityMediaImage | undefined | null): string {
  if (!media) return ''
  return urlFor(media.asset) ?? media.path ?? ''
}

export function resolveMediaImages(items: SanityMediaImage[] | undefined | null): string[] {
  if (!items?.length) return []
  return items.map(resolveMediaImage).filter(Boolean)
}
