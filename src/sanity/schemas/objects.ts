import { defineField, defineType } from 'sanity'

/** Image upload or static path under /public (e.g. /images/...) */
export const mediaImageType = defineType({
  name: 'mediaImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'asset',
      title: 'Upload',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'path',
      title: 'Static path',
      type: 'string',
      description: 'Optional fallback, e.g. /images/parks/uganda/...',
    }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
  ],
})

export const titleBodyType = defineType({
  name: 'titleBody',
  title: 'Title & body',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
  ],
})

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({ name: 'q', title: 'Question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'a', title: 'Answer', type: 'text', rows: 3, validation: (r) => r.required() }),
  ],
})

export const parkAttractionType = defineType({
  name: 'parkAttraction',
  title: 'Attraction',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
  ],
})

export const parkActivityType = defineType({
  name: 'parkActivity',
  title: 'Activity',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
  ],
})

export const privilegedAccessType = defineType({
  name: 'privilegedAccess',
  title: 'Privileged access',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
  ],
})

export const lodgeType = defineType({
  name: 'lodge',
  title: 'Lodge',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
  ],
})

export const parkType = defineType({
  name: 'park',
  title: 'National park',
  type: 'object',
  fields: [
    defineField({ name: 'slug', title: 'Slug', type: 'slug', validation: (r) => r.required() }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'blurb', title: 'Blurb', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'size', title: 'Size', type: 'string' }),
    defineField({ name: 'altitude', title: 'Altitude', type: 'string' }),
    defineField({ name: 'bestTime', title: 'Best time to visit', type: 'string' }),
    defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 6 }),
    defineField({
      name: 'attractions',
      title: 'Key attractions',
      type: 'array',
      of: [{ type: 'parkAttraction' }],
    }),
    defineField({
      name: 'activities',
      title: 'Top activities',
      type: 'array',
      of: [{ type: 'parkActivity' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faqItem' }],
    }),
  ],
})

export const experienceHighlightType = defineType({
  name: 'experienceHighlight',
  title: 'Highlight',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 3, validation: (r) => r.required() }),
  ],
})

export const experienceLocationType = defineType({
  name: 'experienceLocation',
  title: 'Location',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'country', title: 'Country', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'image', title: 'Image', type: 'mediaImage' }),
  ],
})

export const journeyDayType = defineType({
  name: 'journeyDay',
  title: 'Itinerary day',
  type: 'object',
  fields: [
    defineField({ name: 'day', title: 'Day number', type: 'number', validation: (r) => r.required().min(1) }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'accommodation', title: 'Accommodation', type: 'string' }),
    defineField({ name: 'meals', title: 'Meals', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
  ],
})

export const objectTypes = [
  mediaImageType,
  titleBodyType,
  faqItemType,
  parkAttractionType,
  parkActivityType,
  privilegedAccessType,
  lodgeType,
  parkType,
  experienceHighlightType,
  experienceLocationType,
  journeyDayType,
]
