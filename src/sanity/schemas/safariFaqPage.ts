import { defineField, defineType } from 'sanity'

export const safariFaqPageType = defineType({
  name: 'safariFaqPage',
  title: 'Safari FAQ (Know Before You Go)',
  type: 'document',
  fields: [
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faqItem' }],
      description: 'General safari FAQs shown on the Know Before You Go page.',
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Safari FAQ (Know Before You Go)' }
    },
  },
})
