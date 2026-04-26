export type Park = {
  slug: string
  name: string
  blurb: string
  image: string
  location: string
  size: string
  altitude: string
  bestTime: string
  overview: string
  attractions: { title: string; body: string; image: string }[]
  activities: { title: string; body?: string; image: string }[]
  faqs: { q: string; a: string }[]
}

export type Country = {
  slug: string
  name: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  exploreIntro: string
  parkSummary: string
  parkSummaryImage: string
  parks: Park[]
  privilegedAccess: { title: string; location: string; body: string; image: string }[]
  lodges: { name: string; location: string; body: string; image: string }[]
  seoKeywords: string
}

const bwindi: Park = {
  slug: 'bwindi',
  name: 'Bwindi Impenetrable National Park',
  blurb:
    "Bwindi Impenetrable National Park is a UNESCO World Heritage site and one of Africa's most ancient and biologically diverse rainforests. Located in southwestern Uganda, this mist-covered primeval forest is home to roughly half of the world's remaining mountain gorilla population.",
  image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1600&q=80',
  location: 'Southwestern Uganda',
  size: '331 km² (128 sq mi)',
  altitude: '1,160 — 2,607 m (3,806 — 8,553 ft)',
  bestTime: 'June–August & December–February',
  overview:
    "Bwindi Impenetrable National Park is a UNESCO World Heritage site and one of Africa's most ancient and biologically diverse rainforests. Located in southwestern Uganda, this mist-covered primeval forest is home to roughly half of the world's remaining mountain gorilla population. Its rugged terrain and dense canopy provide a sanctuary for a staggering array of wildlife, making it a bucket-list destination for nature enthusiasts and adventurers alike.",
  attractions: [
    {
      title: 'Mountain Gorillas',
      body: "The park's primary draw, offering a rare opportunity to observe these gentle giants in their natural habitat.",
      image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Diverse Birdlife',
      body: 'With over 350 recorded species, including 23 Albertine Rift endemics, it is a premier birding destination.',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Ancient Flora',
      body: 'A lush landscape of giant ferns, orchids, and towering trees that have stood for over 25,000 years.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80',
    },
  ],
  activities: [
    {
      title: 'Forest Lodge Stay',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Batwa Cultural Experience',
      body: 'Learn about the traditions and forest-dwelling history of the Batwa people, the original inhabitants of the forest.',
      image: 'https://images.unsplash.com/photo-1604569370408-cea5e9d99cf6?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Sundowner on the Equator',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80',
    },
  ],
  faqs: [
    {
      q: 'When is the best time for gorilla trekking?',
      a: 'The dry seasons — June to August and December to February — offer the best trekking conditions, with firmer trails and lower rainfall. Gorilla tracking is available year-round, however.',
    },
    {
      q: 'How much does a gorilla permit cost?',
      a: 'A Uganda Wildlife Authority gorilla trekking permit currently costs USD 800 per person for foreign non-residents. Permit availability is limited so we recommend booking 6+ months ahead.',
    },
    {
      q: 'What should I pack?',
      a: 'Long sleeves and trousers, sturdy waterproof hiking boots, gardening gloves for nettles, a lightweight rain jacket, a daypack, and at least 2 litres of water. We provide a detailed packing list before your trip.',
    },
  ],
}

const queenElizabeth: Park = {
  slug: 'queen-elizabeth',
  name: 'Queen Elizabeth National Park',
  blurb:
    "Uganda's most popular savanna park, famed for tree-climbing lions, the Kazinga Channel and the volcanic crater lakes of the Rift Valley.",
  image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=80',
  location: 'Western Uganda',
  size: '1,978 km²',
  altitude: '910 — 1,845 m',
  bestTime: 'January–February & June–September',
  overview: 'Spanning the equator and dominated by the Kazinga Channel, Queen Elizabeth is a mosaic of grassland, wetland and forest with iconic East-African wildlife.',
  attractions: [],
  activities: [],
  faqs: [],
}

const murchison: Park = {
  slug: 'murchison-falls',
  name: 'Murchison Falls National Park',
  blurb: "Uganda's largest national park, where the mighty Nile thunders through a 7-metre gorge before fanning into a delta on Lake Albert.",
  image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1600&q=80',
  location: 'Northwestern Uganda',
  size: '3,840 km²',
  altitude: '619 — 1,292 m',
  bestTime: 'December–February & June–September',
  overview: '',
  attractions: [],
  activities: [],
  faqs: [],
}

const kibale: Park = {
  slug: 'kibale',
  name: 'Kibale Forest National Park',
  blurb: 'A tropical rainforest with the highest density of primates in East Africa, including 13 species of monkeys and chimpanzees.',
  image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1600&q=80',
  location: 'Western Uganda',
  size: '795 km²',
  altitude: '1,100 — 1,590 m',
  bestTime: 'June–September & December–February',
  overview: '',
  attractions: [],
  activities: [],
  faqs: [],
}

const lakeMburo: Park = {
  slug: 'lake-mburo',
  name: 'Lake Mburo National Park',
  blurb: "Uganda's smallest savanna park — a compact mosaic of acacia and lake habitats famous for zebra, eland and walking safaris.",
  image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1600&q=80',
  location: 'Western Uganda',
  size: '370 km²',
  altitude: '1,220 — 1,828 m',
  bestTime: 'Year-round',
  overview: '',
  attractions: [],
  activities: [],
  faqs: [],
}

const mgahinga: Park = {
  slug: 'mgahinga',
  name: 'Mgahinga Gorilla National Park',
  blurb: 'A small park dominated by three Virunga volcanoes, home to mountain gorillas and the only park in Uganda where you can track golden monkeys.',
  image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1600&q=80',
  location: 'Southwestern Uganda',
  size: '33.7 km²',
  altitude: '2,227 — 4,127 m',
  bestTime: 'June–August & December–February',
  overview: '',
  attractions: [],
  activities: [],
  faqs: [],
}

export const countries: Record<string, Country> = {
  uganda: {
    slug: 'uganda',
    name: 'Uganda',
    heroTitle: 'Uganda: The Pearl of Africa,\nRevealed in Absolute Luxury',
    heroSubtitle:
      "Beyond Bwindi's misty forests lies Uganda's wild beauty. Our expertly crafted safaris offer rare access to mountain gorillas, chimpanzees, and iconic wildlife, paired with seamless travel and eco-luxury stays — an unforgettable journey into the true Pearl of Africa.",
    heroImage: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=2400&q=80',
    exploreIntro:
      "From misty rainforests and endangered gorillas to wide savannahs and roaring waterfalls, Uganda is Africa's most diverse safari destination.",
    parkSummary:
      "Each of Uganda's national parks offers a completely different world — rich wildlife, dramatic landscapes, and unforgettable encounters. Choose your journey and explore the wild heart of the Pearl of Africa.",
    parkSummaryImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
    parks: [bwindi, queenElizabeth, murchison, kibale, lakeMburo, mgahinga],
    privilegedAccess: [
      {
        title: 'Lion Tracking with Research Team',
        location: 'Queen Elizabeth National Park',
        body: 'Join a dedicated research team for a morning to track and monitor the park’s iconic lion prides, gaining scientific insight few travelers ever receive.',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Conservation Legacy: Meet the Park Director',
        location: 'Bwindi Impenetrable National Park',
        body: 'An exclusive opportunity to meet with a senior park official or conservationist to understand how your visit directly funds the protection of the gorillas and the local Batwa community.',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Nile Angling Expedition by Private Launch',
        location: 'Murchison Falls National Park',
        body: 'A bespoke angling experience on the mighty Nile, targeting the legendary Nile Perch from the comfort of a private, fully-staffed launch.',
        image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    lodges: [
      {
        name: 'Kyaninga Lodge',
        location: 'Kibale National Park',
        body: 'Architectural Marvel: Perched above a stunning crater lake, offering exceptional views and direct access to chimpanzee trekking.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Ishasha Wilderness Camp',
        location: 'Queen Elizabeth National Park',
        body: 'Untamed Seclusion: A remote, eco-friendly tented camp in the heart of the tree-climbing lion territory, offering an authentic, yet luxurious, bush experience.',
        image: 'https://images.unsplash.com/photo-1604569370408-cea5e9d99cf6?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Kyambura Gorge Lodge',
        location: 'Queen Elizabeth National Park',
        body: 'Transformative Retreat: A former coffee plantation transformed into an intimate lodge overlooking the dramatic Kyambura Gorge, ideal for trail-tracker experiences.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    seoKeywords:
      'luxury safaris Uganda, bespoke gorilla trekking, private Uganda safari, high-end Uganda lodges, exclusive Uganda travel.',
  },
}
