import { defineField, defineType } from 'sanity'

export const storyType = defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article title',
      type: 'string',
      description: 'e.g. "Inside Bwindi: What No One Tells You About Gorilla Trekking" — shown as the article headline.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'e.g. "inside-bwindi-gorilla-trekking" — auto-generated from the title. Click Generate.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'e.g. "We spent three days in Bwindi\'s Rushaga sector with a habituated gorilla family — here\'s what surprised us most." — 1–2 sentences, max 280 characters. Shown on the Stories listing and at the top of the article.',
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
      description: 'The hero photo for this article — shown on the listing card and at the top of the article page. Use a landscape image.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'e.g. "Mountain gorilla feeding in Bwindi Impenetrable Forest at dawn" — describe the image for accessibility and SEO.',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'e.g. "Sarah Mitchell" or "Still Wild Safaris Team" — shown below the article title.',
      initialValue: 'Still Wild Safaris Team',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'The publication date — shown on the article and used for ordering. Defaults to today.',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Select all relevant categories — shown as filter pills on the Stories page. A story can have multiple tags.',
      options: {
        list: [
          { title: 'Gorillas', value: 'Gorillas' },
          { title: 'Destinations', value: 'Destinations' },
          { title: 'Safari Tips', value: 'Safari Tips' },
          { title: 'Culture', value: 'Culture' },
          { title: 'Conservation', value: 'Conservation' },
          { title: 'Photography', value: 'Photography' },
          { title: 'Guide Tips', value: 'Guide Tips' },
          { title: 'Uganda', value: 'Uganda' },
          { title: 'Rwanda', value: 'Rwanda' },
          { title: 'Kenya', value: 'Kenya' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Stories page',
      type: 'boolean',
      description: 'Turn on to pin this story to the top of the Stories listing page.',
      initialValue: false,
    }),
    defineField({
      name: 'gallery',
      title: 'Background gallery',
      type: 'array',
      of: [{ type: 'mediaImage' }],
      description: 'Optional photos used as full-bleed background breaks between sections of the article body. Add 3–6 images. Leave blank for a plain article layout.',
    }),
    defineField({
      name: 'body',
      title: 'Article body',
      type: 'array',
      description: 'Write your article here. Use Heading 2 for main section titles, Heading 3 for sub-sections, and Quote for pull-quotes. You can also insert images between paragraphs.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Paragraph', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description: 'e.g. "Silverback gorilla resting in Bwindi forest" — describe the image.',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'e.g. "A silverback in Bwindi\'s Buhoma sector, photographed at dawn." — shown below the image in the article.',
            }),
          ],
        },
        { type: 'articleTable' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', subtitle: 'author' },
  },
})
