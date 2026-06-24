import { defineField, defineType } from 'sanity'

const PAGE_OPTIONS = [
  { title: 'About — Our Story', value: 'about' },
  { title: 'Safari Collections', value: 'collections' },
  { title: 'Stories / Journal', value: 'stories' },
  { title: 'Meet the Team', value: 'team' },
  { title: 'Know Before You Go', value: 'knowBefore' },
  { title: 'Work With Us', value: 'workWithUs' },
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
      validation: (r) => r.required(),
      description: 'Which page this hero applies to. One document per page.',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow label',
      type: 'string',
      description: 'Small text above the heading, e.g. "Our Story".',
    }),
    defineField({
      name: 'heading',
      title: 'Heading (h1)',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'pageHeroCta',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'pageHeroCta',
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
