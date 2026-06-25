import { defineField, defineType } from 'sanity'

export const statItemType = defineType({
  name: 'statItem',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Number / value',
      type: 'string',
      description: 'e.g. "459", "1,000+", "$800", "54%"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "mountain gorillas protected" or "gorilla permit fee funds conservation"',
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: 'number', subtitle: 'label' } },
})

export const whyVisitBulletType = defineType({
  name: 'whyVisitBullet',
  title: 'Bullet point',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Gorilla Trekking Capital of the World"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 2,
      description: 'e.g. "Bwindi and Mgahinga shelter over 54% of the global mountain gorilla population."',
    }),
  ],
  preview: { select: { title: 'title' } },
})

export const whyVisitType = defineType({
  name: 'whyVisit',
  title: 'Why Visit section',
  type: 'object',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'text',
      rows: 4,
      description: 'e.g. "Uganda is East Africa\'s most extraordinary wilderness destination — home to over half the world\'s mountain gorillas..."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{ type: 'whyVisitBullet' }],
      description: 'Add 4–6 bullet points highlighting what sets this destination apart.',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{ type: 'statItem' }],
      description: 'Add 3–5 compelling numbers shown in the dark stat panel, e.g. "459 mountain gorillas".',
    }),
  ],
})

export const seasonType = defineType({
  name: 'season',
  title: 'Season',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Season name',
      type: 'string',
      description: 'e.g. "Dry Season" or "Green Season" or "Long Rains"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'string',
      description: 'e.g. "June – September" or "December – February"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'wildlife',
      title: 'Wildlife highlight',
      type: 'string',
      description: 'e.g. "Gorilla trekking, game drives, birding" — shown as a quick summary tag.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. "The peak season for wildlife viewing — firm trails, clear skies and excellent trekking conditions."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Season image',
      type: 'mediaImage',
      description: 'A landscape image that captures the feel of this season.',
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'dates' } },
})

export const specialistQuoteType = defineType({
  name: 'specialistQuote',
  title: 'Specialist quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      description: 'e.g. "Uganda changed the way I see the natural world. Nowhere else can you look a mountain gorilla in the eye."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author name',
      type: 'string',
      description: 'e.g. "Sarah Mitchell"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / title',
      type: 'string',
      description: 'e.g. "Travel Designer, Still Wild Safaris"',
    }),
  ],
})

export const conservationType = defineType({
  name: 'conservation',
  title: 'Conservation & Impact',
  type: 'object',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'text',
      rows: 4,
      description: 'e.g. "Uganda\'s gorilla population has grown from 620 to over 1,000 individuals in two decades — a conservation success directly funded by gorilla trekking permits."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Conservation stats',
      type: 'array',
      of: [{ type: 'statItem' }],
      description: 'Add 3–4 impactful numbers, e.g. "1,000+" gorillas or "$800" permit fee funds conservation.',
    }),
    defineField({
      name: 'partners',
      title: 'Conservation partners',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "Uganda Wildlife Authority", "Gorilla Doctors", "International Gorilla Conservation Programme"',
    }),
  ],
})

export const countryFaqType = defineType({
  name: 'countryFaq',
  title: 'Country FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'e.g. "Do I need a visa to visit Uganda?" or "What fitness level is required for gorilla trekking?"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 3,
      description: 'e.g. "Most nationalities require a tourist visa, available online via the Uganda e-Visa portal before departure."',
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: 'question' } },
})

export const travelStatsType = defineType({
  name: 'travelStats',
  title: 'Travel stats bar',
  type: 'object',
  fields: [
    defineField({
      name: 'bestTime',
      title: 'Best time to visit',
      type: 'string',
      description: 'e.g. "June – September & Dec – Feb"',
    }),
    defineField({
      name: 'duration',
      title: 'Recommended duration',
      type: 'string',
      description: 'e.g. "7 – 14 days"',
    }),
    defineField({
      name: 'keyWildlife',
      title: 'Key wildlife',
      type: 'string',
      description: 'e.g. "Mountain gorillas, chimpanzees, tree-climbing lions"',
    }),
    defineField({
      name: 'travelStyle',
      title: 'Travel style',
      type: 'string',
      description: 'e.g. "Luxury lodge safari" or "Mixed luxury & mid-range"',
    }),
  ],
})

export const pageHeroCtaType = defineType({
  name: 'pageHeroCta',
  title: 'CTA button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button label',
      type: 'string',
      description: 'e.g. "START YOUR JOURNEY" or "EXPLORE OUR STORIES" — use uppercase.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link URL or path',
      type: 'string',
      description: 'e.g. "/safari-collections" or "/contact" — use a relative path for internal pages.',
      validation: (r) => r.required(),
    }),
  ],
})

export const routeWaypointType = defineType({
  name: 'routeWaypoint',
  title: 'Route waypoint',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Place name',
      type: 'string',
      description: 'e.g. "Kigali, Rwanda" or "Bwindi Impenetrable Forest"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'lng',
      title: 'Longitude',
      type: 'number',
      description: 'e.g. 30.0619 — right-click on Google Maps → "What\'s here?" to copy coordinates.',
      validation: (r) => r.required().min(-180).max(180),
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
      description: 'e.g. -1.9441 — negative values = south of the equator.',
      validation: (r) => r.required().min(-90).max(90),
    }),
  ],
  preview: {
    select: { title: 'name', lng: 'lng', lat: 'lat' },
    prepare({ title, lng, lat }) {
      return { title, subtitle: `${lng}, ${lat}` }
    },
  },
})

/** Image upload or static path under /public (e.g. /images/...) */
export const mediaImageType = defineType({
  name: 'mediaImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'asset',
      title: 'Upload image',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload a photo directly. Drag and drop or click to browse.',
    }),
    defineField({
      name: 'path',
      title: 'Static path (alternative to upload)',
      type: 'string',
      description: 'e.g. /images/parks/uganda/bwindi/gorilla.jpg — only use if the image is already in the /public folder.',
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'e.g. "Mountain gorilla in Bwindi Impenetrable Forest" — describe the image for accessibility.',
    }),
  ],
})

export const titleBodyType = defineType({
  name: 'titleBody',
  title: 'Title & body',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Private Gorilla Permits"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 4,
      description: 'e.g. "We hold a small allocation of Bwindi permits each season, including the rare habituation experience."',
    }),
  ],
})

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'q',
      title: 'Question',
      type: 'string',
      description: 'e.g. "What is the best time of year to visit?"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'a',
      title: 'Answer',
      type: 'text',
      rows: 3,
      description: 'e.g. "The dry seasons — June to September and December to February — offer the best trekking conditions."',
      validation: (r) => r.required(),
    }),
  ],
})

export const parkAttractionType = defineType({
  name: 'parkAttraction',
  title: 'Attraction',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Attraction name',
      type: 'string',
      description: 'e.g. "Mountain Gorilla Trekking" or "Gorilla Habituation Experience"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. "Trek through ancient rainforest with expert rangers to spend one hour with a wild gorilla family."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Attraction image',
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
    defineField({
      name: 'title',
      title: 'Activity name',
      type: 'string',
      description: 'e.g. "Birding — 350+ species" or "Forest Night Walk"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. "Bwindi harbours 23 Albertine Rift endemic species found nowhere else on earth."',
    }),
    defineField({
      name: 'image',
      title: 'Activity image',
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
    defineField({
      name: 'title',
      title: 'Experience title',
      type: 'string',
      description: 'e.g. "Private Gorilla Habituation Experience" or "Behind-the-Scenes with Gorilla Doctors"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Rushaga Sector, Bwindi Impenetrable Forest"',
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. "Spend a full day — dawn to dusk — accompanying researchers with a gorilla family being habituated to human presence."',
      validation: (r) => r.required(),
    }),
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
    defineField({
      name: 'name',
      title: 'Lodge name',
      type: 'string',
      description: 'e.g. "Gorilla Forest Camp" or "Mahogany Springs" — use the exact name as it appears on the lodge website.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Bwindi Impenetrable Forest, Uganda" or "Murchison Falls National Park"',
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. "Set within the forest boundary, this intimate camp offers six luxury tents with sweeping canopy views and direct gorilla access."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Lodge image',
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
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'e.g. "bwindi" or "queen-elizabeth" — used in the park detail page URL. Click Generate.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'name',
      title: 'Park name',
      type: 'string',
      description: 'e.g. "Bwindi Impenetrable National Park" — use the full official name.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      rows: 3,
      description: 'e.g. "Home to roughly half the world\'s remaining mountain gorillas, this UNESCO World Heritage Site protects 331 km² of ancient rainforest." — 1–2 sentences shown on park cards.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'mediaImage',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Southwestern Uganda" or "Western Uganda, Queen Elizabeth Conservation Area"',
    }),
    defineField({
      name: 'size',
      title: 'Park size',
      type: 'string',
      description: 'e.g. "331 km²" or "1,978 km²"',
    }),
    defineField({
      name: 'altitude',
      title: 'Altitude range',
      type: 'string',
      description: 'e.g. "1,160 – 2,607 m" or "910 – 1,390 m"',
    }),
    defineField({
      name: 'bestTime',
      title: 'Best time to visit',
      type: 'string',
      description: 'e.g. "June – September & December – February" or "Year-round"',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 6,
      description: 'Detailed description of the park — ecology, history, wildlife, and what makes it special. 3–6 paragraphs.',
    }),
    defineField({
      name: 'attractions',
      title: 'Key attractions',
      type: 'array',
      of: [{ type: 'parkAttraction' }],
      description: 'Add 3–5 headline experiences that draw visitors to this park.',
    }),
    defineField({
      name: 'activities',
      title: 'Top activities',
      type: 'array',
      of: [{ type: 'parkActivity' }],
      description: 'Add 4–8 activities available in the park, e.g. Gorilla Trekking, Birding, Night Walk.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faqItem' }],
      description: 'Add 4–6 frequently asked questions specific to this park.',
    }),
  ],
})

export const experienceHighlightType = defineType({
  name: 'experienceHighlight',
  title: 'Highlight',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Highlight title',
      type: 'string',
      description: 'e.g. "Permits Secured in Advance" or "Expert Tracker-Led Treks"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. "We hold a small allocation of Bwindi and Volcanoes permits each season, including the rare habituation experience for guests who want four hours instead of one."',
      validation: (r) => r.required(),
    }),
  ],
})

export const experienceLocationType = defineType({
  name: 'experienceLocation',
  title: 'Location',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Location name',
      type: 'string',
      description: 'e.g. "Bwindi Impenetrable Forest" or "Volcanoes National Park"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'Uganda', value: 'Uganda' },
          { title: 'Rwanda', value: 'Rwanda' },
          { title: 'Kenya', value: 'Kenya' },
          { title: 'Tanzania', value: 'Tanzania' },
          { title: 'Multiple Countries', value: 'Multiple Countries' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. "Home to 19 habituated gorilla families across four trekking sectors — the largest concentration of mountain gorillas anywhere on earth."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Location image',
      type: 'mediaImage',
      description: 'A landscape image representing this specific location.',
    }),
  ],
})

export const journeyDayType = defineType({
  name: 'journeyDay',
  title: 'Itinerary day',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day number',
      type: 'number',
      description: 'e.g. 1, 2, 3 — must be a whole number starting from 1.',
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Day title',
      type: 'string',
      description: 'e.g. "Kigali to Bwindi — Crossing into Gorilla Country"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Day description',
      type: 'text',
      rows: 4,
      description: 'e.g. "Depart Kigali International Airport with your private driver-guide and begin the scenic 4–5 hour overland drive west through Rwanda\'s rolling hills into Uganda..."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'accommodationTier',
      title: 'Accommodation tier',
      type: 'string',
      description: 'Select the tier that matches the lodge(s) for this night.',
      options: {
        list: [
          { title: 'Luxury', value: 'luxury' },
          { title: 'Mid-Range', value: 'midRange' },
          { title: 'Budget', value: 'budget' },
          { title: 'Fly Camp', value: 'flyCamp' },
          { title: 'No overnight', value: 'none' },
        ],
      },
    }),
    defineField({
      name: 'accommodation',
      title: 'Lodge name(s)',
      type: 'string',
      description: 'e.g. "Gorilla Forest Camp / Mahogany Springs / Bwindi Lodge" — separate alternative lodge options with " / ". Leave blank if no overnight stay.',
    }),
    defineField({
      name: 'meals',
      title: 'Meals included',
      type: 'string',
      description: 'Select which meals are included in the package price for this day.',
      options: {
        list: [
          { title: 'Breakfast', value: 'Breakfast' },
          { title: 'Lunch', value: 'Lunch' },
          { title: 'Dinner', value: 'Dinner' },
          { title: 'Breakfast & Lunch', value: 'Breakfast, Lunch' },
          { title: 'Lunch & Dinner', value: 'Lunch, Dinner' },
          { title: 'Breakfast & Dinner', value: 'Breakfast, Dinner' },
          { title: 'Breakfast, Lunch & Dinner', value: 'Breakfast, Lunch, Dinner' },
          { title: 'Full Board', value: 'Full Board' },
          { title: 'No meals included', value: '—' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Day image',
      type: 'mediaImage',
      description: 'A photo representing the main activity or location for this day.',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { day: 'day', title: 'title' },
    prepare({ day, title }) {
      return { title: `Day ${day}: ${title}` }
    },
  },
})

export const objectTypes = [
  statItemType,
  whyVisitBulletType,
  whyVisitType,
  seasonType,
  specialistQuoteType,
  conservationType,
  countryFaqType,
  travelStatsType,
  pageHeroCtaType,
  routeWaypointType,
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
