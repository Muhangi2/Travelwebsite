import { defineField, defineType } from 'sanity'

const PAGE_OPTIONS = [
  { title: 'About — Our Story', value: 'about' },
  { title: 'Safari Collections', value: 'collections' },
  { title: 'Stories / Journal', value: 'stories' },
  { title: 'Meet the Team', value: 'team' },
  { title: 'Know Before You Go', value: 'knowBefore' },
  { title: 'Work With Us', value: 'workWithUs' },
  { title: 'Regenerative Travel', value: 'regenerativeTravel' },
] as const

const PAGE_LABELS: Record<string, string> = Object.fromEntries(
  PAGE_OPTIONS.map((o) => [o.value, o.title]),
)

export const pageHeroType = defineType({
  name: 'pageHero',
  title: 'Page hero',
  type: 'document',
  fields: [
    defineField({
      name: 'pageKey',
      title: 'Page',
      type: 'string',
      options: { list: PAGE_OPTIONS as unknown as { title: string; value: string }[] },
      description: 'Select which page this hero applies to. Create one document per page.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow label',
      type: 'string',
      description: 'e.g. "Our Story" or "Journal" or "Travel Essentials" — small text shown above the main heading.',
    }),
    defineField({
      name: 'heading',
      title: 'Heading (H1)',
      type: 'text',
      rows: 2,
      description: 'e.g. "Welcome to Still Wild Safaris" — the main full-screen heading. Keep it short and impactful.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body text',
      type: 'text',
      rows: 4,
      description: 'e.g. "East Africa\'s bespoke destination management company — designing private safaris in Uganda, Rwanda and Kenya." — 1–2 sentences shown below the heading.',
    }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'mediaImage',
      description: 'Full-screen background photo for the hero. Use a high-impact landscape image (1920px wide or larger).',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA button',
      type: 'pageHeroCta',
      description: 'e.g. label "START YOUR JOURNEY" → href "/safari-collections" — the main call-to-action button.',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA button (optional)',
      type: 'pageHeroCta',
      description: 'e.g. label "REQUEST A CUSTOM QUOTE" → href "/contact" — an optional second button shown alongside the primary.',
    }),
  ],
  preview: {
    select: { pageKey: 'pageKey', heading: 'heading', media: 'image.asset' },
    prepare({ pageKey, heading, media }) {
      return {
        title: PAGE_LABELS[pageKey] ?? pageKey,
        subtitle: heading,
        media,
      }
    },
  },
})
