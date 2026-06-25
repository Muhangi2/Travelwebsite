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
      title: 'Package title',
      type: 'string',
      description: 'e.g. "8-Day Western Circuit Primate & Wildlife" — shown on the listing card.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'e.g. "8-day-western-circuit-primate" — auto-generated from the title. Click Generate.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country / Region',
      type: 'string',
      description: 'Select the destination country or cross-border region. Shown on the listing card.',
      options: {
        list: [
          { title: 'Uganda', value: 'UGANDA' },
          { title: 'Rwanda', value: 'RWANDA' },
          { title: 'Kenya', value: 'KENYA' },
          { title: 'Rwanda · Uganda (cross-border)', value: 'RWANDA · UGANDA' },
          { title: 'Uganda · Kenya (cross-border)', value: 'UGANDA · KENYA' },
          { title: 'Multi-Country', value: 'MULTI-COUNTRY' },
        ],
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "8 Days / 7 Nights" or "2 Days / 1 Night" — shown on the listing card.',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: tagOptions },
      description: 'Select all that apply — used as filter buttons on the Safari Collections grid. A package can have multiple tags.',
    }),
    defineField({
      name: 'highlight',
      title: 'Feature on collections grid',
      type: 'boolean',
      initialValue: false,
      description: 'Turn on to display this package in a larger featured card at the top of the collections grid.',
    }),
    defineField({
      name: 'listImage',
      title: 'Listing card image',
      type: 'mediaImage',
      description: 'The main photo shown on the collection grid card. Portrait or square images work best.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detailTitle',
      title: 'Detail page title (optional override)',
      type: 'text',
      rows: 2,
      description: 'e.g. "8 Days — Western Circuit\nPrimate & Wildlife" — overrides the main title in the detail page hero. Add \\n for a line break. Leave blank to use the main title.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Detail subtitle',
      type: 'text',
      rows: 3,
      description: 'e.g. "Uganda\'s most complete wildlife circuit — gorillas, chimpanzees, tree-climbing lions and the Nile." — shown below the heading on the detail hero.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Detail hero image',
      type: 'mediaImage',
      description: 'Full-screen hero image for the detail page. Falls back to the listing card image if left blank.',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 6,
      description: 'e.g. "Designed for discerning travellers with limited time who refuse to compromise on experience..." — 2–4 paragraphs introducing the package shown on the detail page.',
    }),
    defineField({
      name: 'days',
      title: 'Itinerary days',
      type: 'array',
      of: [{ type: 'journeyDay' }],
      description: 'Add one entry per day in order. Required to display the full itinerary on the detail page.',
    }),
    defineField({
      name: 'highlights',
      title: 'Trip highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "Private, expert English-speaking driver-guide from arrival to departure" — add 5–8 bullet points shown in the Highlights tab. Leave blank to use the default highlights.',
    }),
    defineField({
      name: 'included',
      title: "What's included",
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "All accommodation as listed per itinerary" or "Mountain gorilla trekking permit" — add each item included in the tour price. Leave blank to use the default list.',
    }),
    defineField({
      name: 'notIncluded',
      title: "What's not included",
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "International flights & departure taxes" or "Travel insurance" — add each item NOT covered by the tour price. Leave blank to use the default list.',
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [{ type: 'faqItem' }],
      description: 'Frequently asked questions specific to this tour. Leave blank to use the standard FAQ set.',
    }),
    defineField({
      name: 'waypoints',
      title: 'Route waypoints',
      type: 'array',
      of: [{ type: 'routeWaypoint' }],
      description: 'Add stops in order — used to draw the route line on the map. Right-click a location in Google Maps → "What\'s here?" to get coordinates.',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      initialValue: 0,
      description: 'e.g. 1, 2, 3 — lower numbers appear first in the collections grid.',
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
