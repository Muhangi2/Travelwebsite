import { defineField, defineType } from 'sanity'

export const destinationType = defineType({
  name: 'destination',
  title: 'Destination (country)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Country name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'mediaImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exploreIntro',
      title: 'Explore intro',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'parkSummary',
      title: 'Park summary',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'parkSummaryImage',
      title: 'Park summary image',
      type: 'mediaImage',
    }),
    defineField({
      name: 'parks',
      title: 'National parks',
      type: 'array',
      of: [{ type: 'park' }],
    }),
    defineField({
      name: 'privilegedAccess',
      title: 'Privileged access',
      type: 'array',
      of: [{ type: 'privilegedAccess' }],
    }),
    defineField({
      name: 'lodges',
      title: 'Curated lodges',
      type: 'array',
      of: [{ type: 'lodge' }],
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO keywords',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrder',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'name', media: 'heroImage.asset' },
  },
})
