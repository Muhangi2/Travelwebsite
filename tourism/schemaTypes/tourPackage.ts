import { defineField, defineType } from 'sanity'

const tagOptions = [
  { title: 'Luxury Adventure', value: 'Luxury Adventure' },
  { title: 'Family-Friendly', value: 'Family-Friendly' },
  { title: 'Photography Focus', value: 'Photography Focus' },
]

export const tourPackageType = defineType({
  name: 'tourPackage',
  title: 'Tour package / Safari collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country label',
      type: 'string',
      description: 'Shown on the card, e.g. UGANDA',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. 9 Days / 8 Nights',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: tagOptions },
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight on collections grid',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'listImage',
      title: 'Listing card image',
      type: 'mediaImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detailTitle',
      title: 'Detail page title',
      type: 'text',
      rows: 2,
      description: 'Optional override for the detail hero (supports line breaks).',
    }),
    defineField({
      name: 'subtitle',
      title: 'Detail subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Detail hero image',
      type: 'mediaImage',
      description: 'Falls back to listing image if empty.',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'days',
      title: 'Itinerary days',
      type: 'array',
      of: [{ type: 'journeyDay' }],
      description: 'Required for a full detail page itinerary.',
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
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'duration', media: 'listImage.asset' },
  },
})
