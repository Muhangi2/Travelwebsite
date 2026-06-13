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
  image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
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
      image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
    },
    {
      title: 'Diverse Birdlife',
      body: 'With over 350 recorded species, including 23 Albertine Rift endemics, it is a premier birding destination.',
      image: '/images/activities/birding/lensoffthegreen-1748944212110.jpg',
    },
    {
      title: 'Ancient Flora',
      body: 'A lush landscape of giant ferns, orchids, and towering trees that have stood for over 25,000 years.',
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
    },
  ],
  activities: [
    {
      title: 'Forest Lodge Stay',
      image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
    },
    {
      title: 'Batwa Cultural Experience',
      body: 'Learn about the traditions and forest-dwelling history of the Batwa people, the original inhabitants of the forest.',
      image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
    },
    {
      title: 'Sundowner on the Equator',
      image: '/images/activities/game-drive/asilia-roho-2017-17-1.jpg',
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
  image: '/images/activities/game-drive/asilia-roho-2017-1-1.jpg',
  location: 'Western Uganda',
  size: '1,978 km²',
  altitude: '910 — 1,845 m',
  bestTime: 'January–February & June–September',
  overview:
    "Spanning the equator and dominated by the Kazinga Channel, Queen Elizabeth is a mosaic of grassland, wetland and forest with iconic East-African wildlife. Its open savannahs hold elephants, buffalo and the famously tree-climbing lions of the Ishasha sector, while the channel itself supports one of the highest hippo concentrations in Africa. With volcanic crater lakes to the north and the chimpanzee-filled Kyambura Gorge to the south, the park rewards travellers who give it three nights or more.",
  attractions: [
    {
      title: 'Tree-Climbing Lions of Ishasha',
      body: "Ishasha's southern sector is one of only two places on earth where lions habitually rest in the limbs of giant fig trees — a sighting our guides specifically plan for.",
      image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
    },
    {
      title: 'Kazinga Channel Cruise',
      body: 'A 40-km natural channel linking Lakes Edward and George, lined with the densest hippo population in Africa and a non-stop parade of elephants, buffalo and waterbirds at the banks.',
      image: '/images/activities/game-drive/boating-safari-hippo-spot2.jpg',
    },
    {
      title: 'Kyambura Gorge Chimps',
      body: 'A hidden tropical gorge slicing through the savannah, home to a small habituated chimpanzee community — a half-day primate experience without the long road transfer to Kibale.',
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/25-kyambura-gorge-rf-dsc-3399-copie.jpg',
    },
  ],
  activities: [
    {
      title: 'Stay at Kyambura Gorge Lodge',
      body: 'A renovated coffee plantation overlooking the gorge, balancing intimate luxury with one of Africa’s most progressive community-conservation models.',
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/23-kyambura-gorge-lodge-qe-30042024-volcanoessafaris-8624-edit-copy.jpg',
    },
    {
      title: 'Crater-Lakes Drive',
      body: 'A scenic loop through the explosion craters of the northern park — dramatic ridge-top viewpoints over the Rift Valley and pink-flecked flamingo lakes.',
      image: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
    },
    {
      title: 'Mongoose Tracking',
      body: 'A relaxed walk with researchers in Mweya following habituated banded mongoose troops — a delight for families and a glimpse of long-running primate-style fieldwork.',
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg',
    },
  ],
  faqs: [
    {
      q: 'How many nights should I plan in Queen Elizabeth?',
      a: 'Three nights is the sweet spot — one in the north for game drives and the channel cruise, two further south in Ishasha for tree-climbing lions and (optionally) Kyambura chimp tracking.',
    },
    {
      q: 'How does it pair with gorilla trekking?',
      a: 'Beautifully. Queen Elizabeth sits directly between Kibale’s chimpanzees and Bwindi’s gorillas, so most of our itineraries weave all three together over 7–9 nights.',
    },
    {
      q: 'Best time to visit?',
      a: 'June–September and January–February are driest, with the best game viewing. The greener “shoulder” months still deliver excellent sightings and fewer vehicles.',
    },
  ],
}

const murchison: Park = {
  slug: 'murchison-falls',
  name: 'Murchison Falls National Park',
  blurb: "Uganda's largest national park, where the mighty Nile thunders through a 7-metre gorge before fanning into a delta on Lake Albert.",
  image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
  location: 'Northwestern Uganda',
  size: '3,840 km²',
  altitude: '619 — 1,292 m',
  bestTime: 'December–February & June–September',
  overview:
    "Murchison Falls is Uganda at its most theatrical — the Nile compressed through a seven-metre rock cleft, a thunder of water that defines the park and gives it its name. Above the falls, vast savannahs of borassus palms host elephants, Rothschild's giraffe, lions and the highest density of leopards in the country. Below, the river opens into a wildlife-rich delta on Lake Albert where Nile crocodiles, hippos and the elusive shoebill make their home. A perfect three- to four-night stay combining big-game drives, boat safaris and a hike to the top of the falls.",
  attractions: [
    {
      title: 'The Falls Themselves',
      body: 'The full force of the Nile squeezed through a 7-metre cleft — best appreciated by boat to the base, then a guided climb to the “Top of the Falls” viewpoint above the spray.',
      image: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
    },
    {
      title: 'Rothschild’s Giraffe',
      body: 'Murchison protects the largest remaining population of the endangered Rothschild’s giraffe — a sub-species you’ll see in tower-of-twenty herds across the northern savannah.',
      image: '/images/parks/uganda/murchison-falls/dsc-6828.jpg',
    },
    {
      title: 'Nile Delta & Shoebill',
      body: 'A specialist boat safari into the papyrus delta on Lake Albert in search of the prehistoric shoebill stork — Africa’s most sought-after bird sighting.',
      image: '/images/parks/uganda/murchison-falls/dsc-6951.jpg',
    },
  ],
  activities: [
    {
      title: 'Launch Cruise to the Falls',
      body: 'A three-hour upstream boat safari past hippo pods, crocodile sandbanks and bathing elephants, ending at the base of the cascade.',
      image: '/images/parks/uganda/murchison-falls/dsc-6271.jpg',
    },
    {
      title: 'Northern Savannah Game Drives',
      body: 'Open-vehicle drives across the Buligi tracks at dawn — lion prides, Jackson’s hartebeest, oribi, and the park’s famous leopards along the Albert Nile.',
      image: '/images/parks/uganda/murchison-falls/dsc-6884.jpg',
    },
    {
      title: 'Nile Angling for Nile Perch',
      body: 'A private fishing expedition by launch — catch-and-release Nile perch of trophy size, fully guided and serviced from the riverside.',
      image: '/images/parks/uganda/murchison-falls/dsc-7062.jpg',
    },
  ],
  faqs: [
    {
      q: 'How do we get there?',
      a: 'A 1-hour scheduled or charter flight from Entebbe to Pakuba or Bugungu airstrip is the recommended option. The road journey is 5–6 hours via the Ziwa Rhino Sanctuary, which we often build in as a half-day stop.',
    },
    {
      q: 'How many days do we need?',
      a: 'Three nights gives you the falls, a launch cruise, full days of game viewing and time for the delta shoebill cruise. Two nights is the absolute minimum.',
    },
    {
      q: 'Is malaria a concern?',
      a: 'Like the rest of Uganda’s lowland parks, prophylaxis is recommended. Lodges are well-screened and use repellent provision and mosquito nets as standard.',
    },
  ],
}

const kibale: Park = {
  slug: 'kibale',
  name: 'Kibale Forest National Park',
  blurb: 'A tropical rainforest with the highest density of primates in East Africa, including 13 species of monkeys and chimpanzees.',
  image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  location: 'Western Uganda',
  size: '795 km²',
  altitude: '1,100 — 1,590 m',
  bestTime: 'June–September & December–February',
  overview:
    "Kibale is the primate capital of Africa — a sprawling tract of rainforest harbouring 13 species in total, including over 1,500 chimpanzees in well-habituated communities. A morning trek with the chimps is the obvious draw, but the all-day Habituation Experience and the bird-rich Bigodi Wetlands on the edge of the park reward those who linger. Pair Kibale with Queen Elizabeth or Bwindi for the classic Uganda primate circuit.",
  attractions: [
    {
      title: 'Habituated Chimpanzee Communities',
      body: 'Trek into the forest with researchers to spend an hour with one of three habituated communities — a high-success encounter with our closest living relatives.',
      image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
    },
    {
      title: 'Thirteen Primate Species',
      body: 'Red colobus, L’Hoest’s, blue, grey-cheeked mangabey, black-and-white colobus — Kibale’s canopy is in constant motion overhead during a forest walk.',
      image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
    },
    {
      title: 'Bigodi Wetland Sanctuary',
      body: 'A community-run papyrus swamp on the park edge — over 200 bird species, including the great blue turaco, and a low-impact afternoon walk.',
      image: '/images/activities/birding/lensoffthegreen-1748944212110.jpg',
    },
  ],
  activities: [
    {
      title: 'Chimpanzee Habituation Experience',
      body: 'A full-day immersion with the researchers, dawn-to-dusk, as a community is gradually conditioned to human presence — the most intimate primate encounter in East Africa.',
      image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
    },
    {
      title: 'Stay at Kyaninga Lodge',
      body: 'Hand-built log lodge above a crater lake, with vast suites, dramatic views over Kibale, and effortless access to the trek start point.',
      image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.jpg',
    },
    {
      title: 'Crater-Lakes Walk',
      body: 'A gentle walk along the chain of volcanic crater lakes between Kibale and Fort Portal — tea estates, lake-edge picnics and rural-Uganda atmosphere.',
      image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
    },
  ],
  faqs: [
    {
      q: 'How likely am I to see chimpanzees?',
      a: 'Success rates on the morning trek run at over 90% — communities are tracked daily by researchers and our guides coordinate with the ranger team to position you correctly.',
    },
    {
      q: 'Standard trek or Habituation Experience?',
      a: 'The 1-hour trek is best for most travellers. The full-day Habituation Experience is for keen primatologists and photographers willing to invest a long, demanding day for an extraordinary encounter.',
    },
    {
      q: 'What should I wear?',
      a: 'Long trousers, sturdy walking shoes and a long-sleeve shirt — the forest is humid and the undergrowth lively. Lodges provide gaiters and gardening gloves on request.',
    },
  ],
}

const lakeMburo: Park = {
  slug: 'lake-mburo',
  name: 'Lake Mburo National Park',
  blurb: "Uganda's smallest savanna park — a compact mosaic of acacia and lake habitats famous for zebra, eland and walking safaris.",
  image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.jpg',
  location: 'Western Uganda',
  size: '370 km²',
  altitude: '1,220 — 1,828 m',
  bestTime: 'Year-round',
  overview:
    "Lake Mburo punches well above its weight. The only Ugandan park with plains zebra, it's also the most accessible for guests breaking the long drive between Entebbe and the gorillas. Without lions in the open park, walking and horseback safaris are part of daily life — a rare way to feel the African bush at ground level. Compact, friendly and underrated, it makes an elegant first or last night on a Uganda journey.",
  attractions: [
    {
      title: 'Plains Zebra',
      body: "The only park in Uganda where you'll see large herds of zebra grazing in the open — alongside impala, topi, eland and the largest population of Uganda's only antelope, the topi.",
      image: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
    },
    {
      title: 'Lake Mburo Itself',
      body: 'The boat cruise along the lake reveals hippos, crocodiles, fish eagles and the rare African finfoot in quiet papyrus channels.',
      image: '/images/parks/uganda/lake-mburo/16498738142-978e9993ef-o.jpg',
    },
    {
      title: 'Eland & Roan Antelope',
      body: 'Africa’s largest antelope is common here in herds of fifty, and roan — rare elsewhere in East Africa — make a quiet showing across the southern plains.',
      image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg',
    },
  ],
  activities: [
    {
      title: 'Walking Safari',
      body: 'With no lions in the immediate area, you can walk Mburo with an armed ranger — gentle, slow, ear-to-the-ground bush time you cannot replicate from a vehicle.',
      image: '/images/parks/uganda/lake-mburo/15829575593-2fb45ea828-o.jpg',
    },
    {
      title: 'Horseback Safari',
      body: 'Mihingo Lodge runs the only ridden safari in Uganda — quiet, low-impact, and astonishing for how close you can approach plains game on horseback.',
      image: '/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.jpg',
    },
    {
      title: 'Sunset Boat Cruise',
      body: 'A two-hour cruise across the lake at golden hour — hippos surfacing, fish eagles calling, the savannah glowing pink behind the papyrus.',
      image: '/images/parks/uganda/lake-mburo/52760819657-a6f9d6bf99-o.jpg',
    },
  ],
  faqs: [
    {
      q: 'How does it fit into a Uganda safari?',
      a: 'Most often as a first night out of Entebbe before heading to Bwindi, or as a wind-down stop on the return — it breaks the long drive and adds a completely different habitat.',
    },
    {
      q: 'Is it safe to walk?',
      a: 'Yes — guided walks with an armed ranger are a hallmark of the park. There are no resident lions, and the larger predators (leopard, hyena) are nocturnal and shy.',
    },
    {
      q: 'When is the best time to visit?',
      a: 'Lake Mburo is genuinely year-round. The drier months (June–August, January–February) deliver crisp game viewing; the wet months bring lush landscapes and excellent birding.',
    },
  ],
}

const mgahinga: Park = {
  slug: 'mgahinga',
  name: 'Mgahinga Gorilla National Park',
  blurb: 'A small park dominated by three Virunga volcanoes, home to mountain gorillas and the only park in Uganda where you can track golden monkeys.',
  image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
  location: 'Southwestern Uganda',
  size: '33.7 km²',
  altitude: '2,227 — 4,127 m',
  bestTime: 'June–August & December–February',
  overview:
    "Mgahinga is Uganda's quiet alternative to Bwindi — smaller, higher and dramatically framed by three Virunga volcanoes that march along the Rwandan border. A single habituated gorilla family, the Nyakagezi group, roams freely across the three countries (Uganda, Rwanda and the DRC) and when they're home, the trekking is exceptional. Add habituated golden monkeys found nowhere else in Uganda, a half-day immersion with the indigenous Batwa, and the option to summit Mt Sabyinyo straddling all three borders — Mgahinga is small but layered, and well worth the effort.",
  attractions: [
    {
      title: 'The Nyakagezi Gorilla Family',
      body: 'A single habituated mountain-gorilla group ranges across the Virunga massif — fewer trekkers, drier terrain than Bwindi, and unmatched volcanic backdrops when conditions align.',
      image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
    },
    {
      title: 'Habituated Golden Monkeys',
      body: 'A vibrant, endemic monkey species found only in the Virunga bamboo zone. The morning trek is far easier than gorilla tracking and the photography is sensational.',
      image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
    },
    {
      title: 'Three Virunga Volcanoes',
      body: 'Mt Sabyinyo, Mt Gahinga and Mt Muhabura — three dormant volcanoes that define the park, each climbable as a full-day summit hike with extraordinary triple-country views.',
      image: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.jpg',
    },
  ],
  activities: [
    {
      title: 'Batwa Trail Experience',
      body: "A half-day cultural walk led by Batwa elders — the original forest-dwelling people of the Virungas — showing fire-making, hunting techniques, medicinal plants and traditional song in the lower forest.",
      image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
    },
    {
      title: 'Volcano Summit Hike',
      body: "Climb Mt Sabyinyo (3,669 m) to stand simultaneously in Uganda, Rwanda and the DRC, or take on the steeper Muhabura (4,127 m) — for fit walkers, two of East Africa's most rewarding day-summits.",
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
    },
    {
      title: 'Stay at Mount Gahinga Lodge',
      body: 'Stone-and-thatch bandas at the foot of the volcanoes — intimate, fire-warmed and the most direct base for both gorilla and golden-monkey trekking.',
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg',
    },
  ],
  faqs: [
    {
      q: 'Mgahinga or Bwindi for gorilla tracking?',
      a: 'Bwindi has 20+ habituated families and near-certain tracking. Mgahinga has one family that occasionally crosses into Rwanda or the DRC — we secure a permit only when our local team confirms the group is currently in Uganda.',
    },
    {
      q: 'How fit do I need to be?',
      a: 'Golden-monkey trekking is gentle (1–2 hours, mild gradient). Gorilla trekking is moderate (2–5 hours on volcanic slopes). The summit hikes are strenuous full days requiring a good level of fitness.',
    },
    {
      q: 'How does it fit into a wider itinerary?',
      a: 'Mgahinga pairs beautifully with Bwindi (2.5-hour drive) and is the natural border-crossing point into Rwanda’s Volcanoes National Park — a classic combined-Virunga itinerary.',
    },
  ],
}

export const countries: Record<string, Country> = {
  uganda: {
    slug: 'uganda',
    name: 'Uganda',
    heroTitle: 'Uganda: The Pearl of Africa,\nRevealed in Absolute Luxury',
    heroSubtitle:
      "Beyond Bwindi's misty forests lies Uganda's wild beauty. Our expertly crafted safaris offer rare access to mountain gorillas, chimpanzees, and iconic wildlife, paired with seamless travel and eco-luxury stays — an unforgettable journey into the true Pearl of Africa.",
    heroImage: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
    exploreIntro:
      "From misty rainforests and endangered gorillas to wide savannahs and roaring waterfalls, Uganda is Africa's most diverse safari destination.",
    parkSummary:
      "Each of Uganda's national parks offers a completely different world — rich wildlife, dramatic landscapes, and unforgettable encounters. Choose your journey and explore the wild heart of the Pearl of Africa.",
    parkSummaryImage: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
    parks: [bwindi, queenElizabeth, murchison, kibale, lakeMburo, mgahinga],
    privilegedAccess: [
      {
        title: 'Lion Tracking with Research Team',
        location: 'Queen Elizabeth National Park',
        body: 'Join a dedicated research team for a morning to track and monitor the park’s iconic lion prides, gaining scientific insight few travelers ever receive.',
        image: '/images/activities/big-five/roho-ya-selous-elephant.jpg',
      },
      {
        title: 'Conservation Legacy: Meet the Park Director',
        location: 'Bwindi Impenetrable National Park',
        body: 'An exclusive opportunity to meet with a senior park official or conservationist to understand how your visit directly funds the protection of the gorillas and the local Batwa community.',
        image: '/images/activities/gorilla-trekking/15-gorilla-ah1i7197.jpg',
      },
      {
        title: 'Nile Angling Expedition by Private Launch',
        location: 'Murchison Falls National Park',
        body: 'A bespoke angling experience on the mighty Nile, targeting the legendary Nile Perch from the comfort of a private, fully-staffed launch.',
        image: '/images/parks/uganda/murchison-falls/dsc-6951.jpg',
      },
    ],
    lodges: [
      {
        name: 'Kyaninga Lodge',
        location: 'Kibale National Park',
        body: 'Architectural Marvel: Perched above a stunning crater lake, offering exceptional views and direct access to chimpanzee trekking.',
        image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.jpg',
      },
      {
        name: 'Ishasha Wilderness Camp',
        location: 'Queen Elizabeth National Park',
        body: 'Untamed Seclusion: A remote, eco-friendly tented camp in the heart of the tree-climbing lion territory, offering an authentic, yet luxurious, bush experience.',
        image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg',
      },
      {
        name: 'Kyambura Gorge Lodge',
        location: 'Queen Elizabeth National Park',
        body: 'Transformative Retreat: A former coffee plantation transformed into an intimate lodge overlooking the dramatic Kyambura Gorge, ideal for trail-tracker experiences.',
        image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/23-kyambura-gorge-lodge-qe-30042024-volcanoessafaris-8624-edit-copy.jpg',
      },
    ],
    seoKeywords:
      'luxury safaris Uganda, bespoke gorilla trekking, private Uganda safari, high-end Uganda lodges, exclusive Uganda travel.',
  },

  rwanda: {
    slug: 'rwanda',
    name: 'Rwanda',
    heroTitle: 'Rwanda: A Land of\nA Thousand Hills',
    heroSubtitle:
      "From the misty volcanoes where mountain gorillas roam to the vast plains of Akagera teeming with the Big Five, Rwanda is a small country with extraordinary depth — sustainable luxury, conservation triumphs, and a warm, modern capital wrapped into one extraordinary safari.",
    heroImage: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.jpg',
    exploreIntro:
      "Rwanda is conservation-led luxury at its purest — gorilla trekking in Volcanoes, the Big Five in restored Akagera, canopy walks in Nyungwe and lakeside elegance on Kivu.",
    parkSummary:
      "Two flagship national parks, two distinct safari worlds. Volcanoes opens the door to mountain gorillas in their misty bamboo realm; Akagera's restored savannahs unite lions, leopards, elephants, buffalo and rhino on a single horizon.",
    parkSummaryImage: '/images/parks/rwanda/akagera/wilderness-magashi-1.jpg',
    parks: [
      {
        slug: 'volcanoes',
        name: 'Volcanoes National Park',
        blurb:
          "The Rwandan section of the Virunga Massif — five towering volcanoes cloaked in bamboo and rainforest, sanctuary to roughly a third of the world's mountain gorillas and a thriving population of golden monkeys.",
        image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
        location: 'Northwestern Rwanda',
        size: '160 km²',
        altitude: '2,400 — 4,507 m',
        bestTime: 'June–September & December–February',
        overview:
          "Volcanoes is where Dian Fossey changed the world for mountain gorillas, and where the model of conservation-driven tourism continues to flourish. Trekking groups are kept small and intimate; lodges are some of Africa's most refined.",
        attractions: [
          {
            title: 'Mountain Gorilla Tracking',
            body: "An intimate hour with a habituated family group in a bamboo cathedral — the experience that defined Rwanda's modern tourism.",
            image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
          },
          {
            title: 'Golden Monkey Trekking',
            body: 'A vivid alternative — playful, photogenic golden monkeys leaping through bamboo at the volcano slopes.',
            image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
          },
          {
            title: 'Dian Fossey Hike',
            body: "A pilgrimage through the forest to the grave of Dian Fossey beside the great silverback Digit — for the conservation-minded traveler.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-15.jpg',
          },
        ],
        activities: [
          {
            title: 'Helicopter Transfers',
            body: 'Skip the road and arrive in style — aerial transfers from Kigali deliver guests to the lodges with views over the Twin Lakes.',
            image: '/images/activities/helicopter-rwanda/1000045751.jpg',
          },
          {
            title: 'Bisate Reforestation Walk',
            body: 'Plant a sapling in the Wilderness Bisate reforestation project — your contribution to a 100,000-tree restoration of native forest.',
            image: '/images/parks/rwanda/volcanoes/1750336906468-the-sanctuary-at-bisate-view-1-aerial.jpg',
          },
          {
            title: 'Kigali Genocide Memorial',
            body: 'A respectful, contextual visit to the Kigali Genocide Memorial — essential reading on the journey of modern Rwanda.',
            image: '/images/destinations/rwanda/image-20260331125636.jpg',
          },
        ],
        faqs: [
          {
            q: 'How much is a Rwanda gorilla permit?',
            a: "USD 1,500 per person per trek. Permits are limited — only 96 per day are issued — so we recommend booking 6+ months in advance for high season.",
          },
          {
            q: 'How fit do I need to be?',
            a: "Treks vary from 1 to 6+ hours of moderate hiking at altitude (2,500–3,000 m). The Park Warden assigns groups based on fitness; porters are available and recommended.",
          },
          {
            q: 'When is the best time to visit?',
            a: "Year-round trekking is possible, but the dry seasons (June–September and December–February) offer firmer trails. The forest is greenest in the rainier months.",
          },
        ],
      },
      {
        slug: 'akagera',
        name: 'Akagera National Park',
        blurb:
          "Africa's most successful conservation comeback story — savannahs, papyrus swamps and lakes restored to a full Big Five reserve since 2010, with reintroduced lions and rhinos thriving alongside elephants, leopards and buffalo.",
        image: '/images/parks/rwanda/akagera/wilderness-magashi-1.jpg',
        location: 'Eastern Rwanda',
        size: '1,122 km²',
        altitude: '1,250 — 1,825 m',
        bestTime: 'July–September & December–February',
        overview:
          "Akagera is Rwanda's only savannah park — a landscape of acacia plains, hippo-filled lakes and rolling escarpments. African Parks took over management in 2010; lions returned in 2015, rhinos in 2017, and the Big Five circle is now complete.",
        attractions: [
          {
            title: 'The Restored Big Five',
            body: 'See lions, leopards, elephants, buffalo and Eastern black rhino on a single drive through one of Africa’s great conservation success stories.',
            image: '/images/parks/rwanda/akagera/wilderness-magashi-7.jpg',
          },
          {
            title: 'Lake Ihema Boat Safari',
            body: "Cruise the second-largest lake in Rwanda among hippos, crocodiles and African fish eagles — a hot-afternoon must.",
            image: '/images/parks/rwanda/akagera/1738327984199-magashi-boating-12-24-tc-025.jpg',
          },
          {
            title: 'Magashi Conservation Drives',
            body: 'Exclusive game drives in the Magashi private concession — fewer vehicles, better light, and direct support for park management.',
            image: '/images/parks/rwanda/akagera/wilderness-magashi-19.jpg',
          },
        ],
        activities: [
          {
            title: 'Wilderness Magashi Camp Stay',
            body: 'Six tented suites on the shore of Lake Rwanyakazinga — Rwanda’s flagship eco-luxury safari camp.',
            image: '/images/parks/rwanda/akagera/wilderness-magashi-23.jpg',
          },
          {
            title: 'Behind-the-Scenes with Park Rangers',
            body: 'Spend a morning with the African Parks ranger team — a privileged window into anti-poaching operations and the rhino monitoring programme.',
            image: '/images/parks/rwanda/akagera/1738328418703-magashi-staff-12-24-tc-035.jpg',
          },
          {
            title: 'Sundowners on the Plains',
            body: 'Bush bar set up at sunset on a remote escarpment — with sundown over the Tanzania border in the distance.',
            image: '/images/parks/rwanda/akagera/1738328545766-magashi-sundowners-12-24-tc-012.jpg',
          },
        ],
        faqs: [
          {
            q: 'Do I need to book Magashi separately?',
            a: 'Wilderness Magashi is a private concession within the park — we secure availability and the gate access permits as part of the booking.',
          },
          {
            q: 'How does Akagera compare to East African parks like the Mara?',
            a: "Akagera is more intimate and intentionally low-volume — perfect for travelers who value exclusivity over crowd-density. Wildlife densities are lower than the Mara but rebounding fast.",
          },
        ],
      },
    ],
    privilegedAccess: [
      {
        title: 'Private Helicopter to the Volcanoes',
        location: 'Volcanoes National Park',
        body: "Skip the four-hour road. A private R44 helicopter transfer from Kigali to Bisate or Singita Kwitonda — with a low-level pass over the Twin Lakes en route.",
        image: '/images/activities/helicopter-rwanda/1000045744.jpg',
      },
      {
        title: 'Behind-the-Scenes at the Dian Fossey Campus',
        location: 'Volcanoes National Park',
        body: 'A private tour of the new Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund — meet researchers and see the lab work that protects the gorillas you visit in the wild.',
        image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.jpg',
      },
      {
        title: 'Rhino Conservation Briefing in Akagera',
        location: 'Akagera National Park',
        body: "A private session with the African Parks rhino-monitoring unit — understand exactly how your visit funds the rhino reintroduction programme.",
        image: '/images/parks/rwanda/akagera/wilderness-magashi-31.jpg',
      },
    ],
    lodges: [
      {
        name: 'Wilderness Bisate',
        location: 'Volcanoes National Park',
        body: "Six conical forest villas built on the rim of an extinct volcano — sustainably built, deeply local, and the gold standard for gorilla-tracking lodges.",
        image: '/images/lodges/rwanda/volcanoes-national-park/wildernes-bisate-lodge/1753110933515-bisate-gorilla-trekking-06-25-fr-31.jpg',
      },
      {
        name: 'Singita Kwitonda Lodge',
        location: 'Volcanoes National Park',
        body: 'Eight suites and a private two-bedroom villa on a 178-acre reforestation property right at the park boundary — quiet luxury in service of conservation.',
        image: '/images/lodges/rwanda/volcanoes-national-park/singita-kwitonda-lodge/dsc07739.jpg',
      },
      {
        name: 'Wilderness Magashi',
        location: 'Akagera National Park',
        body: "Six lakeside tented suites in Akagera's most exclusive concession — an unhurried Big-Five safari with no other vehicles in sight.",
        image: '/images/parks/rwanda/akagera/wilderness-magashi.jpg',
      },
      {
        name: 'Virunga Lodge',
        location: 'Volcanoes National Park',
        body: 'Volcanoes Safaris’ original gorilla lodge — a hilltop sanctuary with sweeping views of the Twin Lakes and the volcano chain.',
        image: '/images/lodges/rwanda/volcanoes-national-park/virunga-lodge/11-virunga-lodge-map-room-gvw-dsc-2068-hdr.jpg',
      },
      {
        name: 'One&Only Gorilla’s Nest',
        location: 'Volcanoes National Park',
        body: 'A modern, design-forward retreat at the foot of Mount Sabyinyo — ideal for travelers who prefer contemporary architecture to safari rustic.',
        image: '/images/lodges/rwanda/volcanoes-national-park/one-and-only-gorilla-nest/ajqwtbm-sghilb7nle6tsj60kf09t2y-5t9-yogkjdukgiwdyxdqa3q5xhnkhpsmgq-zfpyh4-wq0ahhc9fjpalj-rthz6sczpv5eey2khgmwvwq0mmt-h400-nu.jpg',
      },
    ],
    seoKeywords:
      'luxury Rwanda safari, gorilla trekking Rwanda, Akagera Big Five, Wilderness Bisate, Singita Kwitonda, Volcanoes National Park lodges.',
  },

  kenya: {
    slug: 'kenya',
    name: 'Kenya',
    heroTitle: 'Kenya: The Original\nSafari Country',
    heroSubtitle:
      "Kenya is where the safari was born — and where it has been quietly reinvented. From the herds of the Mara to the elephants of Amboseli framed by Kilimanjaro, the rhinos of Laikipia to the unique north of Samburu, every chapter is delivered through a private conservancy lens.",
    heroImage: '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
    exploreIntro:
      "Kenya offers the broadest variety of any East African safari — wildebeest spectacle, elephant herds beneath Kilimanjaro, rhino conservation pioneers, the unique “Samburu Five” and the most exclusive private conservancies on the continent.",
    parkSummary:
      "Five distinct ecosystems, each curated to a different traveler. The Mara delivers the great migration; Amboseli, the elephants under Kilimanjaro; Laikipia, the conservation pioneers; Samburu, the dry-country specialists; Tsavo, scale and remoteness in equal measure.",
    parkSummaryImage: '/images/parks/kenya/laikipia-loisaba/1752747854365-kenya-suyian-lodge-exterior-elephant-view-8.jpg',
    parks: [
      {
        slug: 'masai-mara',
        name: 'Masai Mara National Reserve',
        blurb:
          "The northern extension of the Serengeti and the stage for the Great Migration each July to October — plus year-round resident lion, leopard and cheetah on Africa's most photographed plains.",
        image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
        location: 'Southwest Kenya',
        size: '1,510 km² + 6 conservancies',
        altitude: '1,500 — 2,170 m',
        bestTime: 'July–October (migration) & January–February (calving in Serengeti)',
        overview:
          "The Mara reserve and its surrounding private conservancies are where you'll find the highest big-cat density in Africa, the most reliable migration crossings and the most varied luxury lodging in East Africa.",
        attractions: [
          {
            title: 'The Great Migration',
            body: 'Wildebeest and zebra crossings of the Mara River from late July through October — one of the planet’s great wildlife spectacles.',
            image: '/images/parks/kenya/masai-mara/activites-game-drive.jpg',
          },
          {
            title: 'Big Cat Country',
            body: 'Resident lion, leopard and cheetah on the Mara plains and in the conservancies — the highest big-cat density anywhere in Africa.',
            image: '/images/activities/big-five/roho-ya-selous-elephant.jpg',
          },
          {
            title: 'Hot-Air Balloon Sunrise',
            body: 'Drift over the plains at first light, ending with a bush champagne breakfast on the savannah — a classic Mara experience done right.',
            image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
          },
        ],
        activities: [
          {
            title: 'Private Conservancy Game Drives',
            body: 'Off-road, night-drive and walking-safari options outside the main reserve — lower vehicle density, more privacy.',
            image: '/images/lodges/kenya/masai-mara/mara-plains-camp/getting-a-bird-s-eye-view-in-the-omc.jpg',
          },
          {
            title: 'Sundowners with the Maasai',
            body: 'Bush bar with the Mara Plains team and Maasai hosts — cultural depth alongside the safari.',
            image: '/images/lodges/kenya/masai-mara/mahali-mzuri/bush-sundowners.jpg',
          },
          {
            title: 'Bush Breakfast on the Plains',
            body: 'White linen and silver service set up at first light overlooking the Mara Triangle.',
            image: '/images/lodges/kenya/masai-mara/jw-marriott-masai-mara-lodge/bush-breakfast.jpg',
          },
        ],
        faqs: [
          {
            q: 'When is the best time for the migration?',
            a: 'River crossings peak from late July through October. The herds are most concentrated in the Mara Triangle in August and September.',
          },
          {
            q: 'Reserve vs conservancy — which is better?',
            a: 'Conservancies (Mara North, Olare Motorogi, Mara Naboisho) offer fewer vehicles per sighting, off-road driving and night drives. Many of our itineraries combine both.',
          },
        ],
      },
      {
        slug: 'amboseli',
        name: 'Amboseli National Park',
        blurb:
          "The classic 'elephants under Kilimanjaro' park — small, accessible, and home to some of Africa's largest tuskers in front of an impossibly photogenic mountain backdrop.",
        image: '/images/parks/kenya/amboseli/amboseli-elephants.jpg',
        location: 'Southern Kenya',
        size: '392 km²',
        altitude: '1,100 — 1,200 m',
        bestTime: 'June–October & January–February',
        overview:
          "Amboseli is compact and easy to read — a swampy heart fed by Kilimanjaro's snowmelt sustains hundreds of elephants year-round. The Tortilis and ol Donyo lodges deliver the experience at the highest level.",
        attractions: [
          {
            title: 'Big-Tusker Elephant Herds',
            body: "Among the world's largest concentrations of giant-tusked elephants, easily observed from open vehicles and walking distance.",
            image: '/images/parks/kenya/amboseli/amboseli-elephants.jpg',
          },
          {
            title: 'Kilimanjaro Sundowners',
            body: 'Drinks and small bites at sunset with Africa’s highest peak as the backdrop — a non-negotiable Amboseli evening.',
            image: '/images/parks/kenya/amboseli/sundowner-on-observation-hill-overlooking-mt-kilimanjaro.jpg',
          },
          {
            title: 'Birdlife at the Swamps',
            body: "Amboseli's permanent swamps host pelicans, flamingos, herons and over 400 bird species at the water year-round.",
            image: '/images/parks/kenya/amboseli/amboseli-waterhole.jpg',
          },
        ],
        activities: [
          {
            title: 'Stay at ol Donyo Lodge',
            body: 'Great Plains’ spectacular property in the Chyulu Hills with hide-walking, horseriding and Maasai cultural visits.',
            image: '/images/lodges/kenya/amboseli-national-park/ol-donyo-lodge-1/masaai.jpg',
          },
          {
            title: 'Stay at Elewana Tortilis Camp',
            body: 'Inside the park boundary with Kilimanjaro views from every tent — the most photogenic lodge in Amboseli.',
            image: '/images/lodges/kenya/amboseli-national-park/elewana-tortilis-camp-amboseli/elewana-tortilis-camp-amboseli-1.jpg',
          },
        ],
        faqs: [
          {
            q: 'When is Kilimanjaro most visible?',
            a: 'The mountain is famously shy. Your best window is dawn and the hour before sunset during the dry months (June–October, January–February), when the cloud cap typically lifts. Plan two nights minimum to maximise your chances.',
          },
          {
            q: 'How does Amboseli pair with the Mara?',
            a: 'Beautifully — a quick scheduled flight links the two, and the contrast is the magic. Amboseli for elephants and Kilimanjaro, the Mara for big-cat density and (in season) the migration.',
          },
          {
            q: 'Is it good for families?',
            a: 'Yes. Amboseli\'s short distances, large elephant herds and easy game viewing make it one of the most family-friendly parks in East Africa. ol Donyo and Tortilis both welcome children.',
          },
        ],
      },
      {
        slug: 'laikipia',
        name: 'Laikipia & Loisaba',
        blurb:
          "A 9,500 km² conservancy mosaic north of Mount Kenya — home to half of Kenya's black rhino, all of its Grevy's zebras, and some of the most innovative community-led conservation work in Africa.",
        image: '/images/parks/kenya/laikipia-loisaba/1752747854365-kenya-suyian-lodge-exterior-elephant-view-8.jpg',
        location: 'Central Kenya',
        size: '9,500 km² (private conservancies)',
        altitude: '1,500 — 2,500 m',
        bestTime: 'Year-round',
        overview:
          "Laikipia is private-conservancy Kenya at its purest — a working ecosystem where ranches, communities and wildlife share the land. Sirikoi, Lewa Wilderness, Loisaba and Segera Retreat lead the way.",
        attractions: [
          {
            title: 'Rhino Conservation',
            body: "Visit Lewa, Borana and Ol Pejeta — the conservancies that pioneered private rhino protection in Kenya.",
            image: '/images/lodges/kenya/lakipia/elewana-kifaru-house/1770879317943whiterhino-elewanacar.jpg',
          },
          {
            title: 'Walking & Horseback Safaris',
            body: "Laikipia is one of the few places in East Africa where horseback safari is offered — a quiet, low-impact way to cross the savannah.",
            image: '/images/lodges/kenya/lakipia/lewa-wilderness/fly-camping-star-dome.jpg',
          },
          {
            title: 'Grevy’s Zebra Spotting',
            body: "The endangered Grevy's zebra has its global stronghold across Laikipia and Samburu — distinctive and beautiful.",
            image: '/images/parks/kenya/samburu/grevys-zebra-1.jpg',
          },
        ],
        activities: [
          {
            title: 'Stay at Sirikoi',
            body: 'A small, family-run gem inside Lewa — personal, authentic, and exceptional in every detail.',
            image: '/images/lodges/kenya/lakipia/sirikoi-lodge-kenya/1744025471001-2024-cottage-outside-dec-sunset.jpg',
          },
          {
            title: 'Stay at Segera Retreat',
            body: "An art-filled, sustainability-driven retreat in the heart of Laikipia with private spa villas and the renowned ZEITZ Foundation art collection.",
            image: '/images/lodges/kenya/lakipia/segera-retreat-2/17716019637244-segera-crookesandjackson-vl-2025-0688.jpg',
          },
        ],
        faqs: [
          {
            q: 'How is Laikipia different from the Mara?',
            a: 'Laikipia is private — a working mosaic of conservancies and ranches rather than a public reserve. Expect off-road driving, night drives, walking, horseriding and a small number of vehicles per sighting. Predators are present but not as densely as the Mara.',
          },
          {
            q: 'Best time to visit?',
            a: 'Genuinely year-round. June–October is classic dry-season game viewing, but the green seasons (March–May, November) deliver lush landscapes, newborn wildlife and superb photography light.',
          },
          {
            q: 'Is it good for families?',
            a: 'Outstanding — many Laikipia properties (Sirikoi, Lewa Wilderness, Loisaba) welcome children with bespoke activities, family suites and guides who genuinely engage with younger guests.',
          },
        ],
      },
      {
        slug: 'samburu',
        name: 'Samburu National Reserve',
        blurb:
          "The dry, dramatic north — home to the 'Samburu Five' (Grevy's zebra, reticulated giraffe, gerenuk, beisa oryx and Somali ostrich), found nowhere else in Kenya.",
        image: '/images/parks/kenya/samburu/grevys-zebra-1.jpg',
        location: 'Northern Kenya',
        size: '165 km² (plus surrounding conservancies)',
        altitude: '800 — 1,250 m',
        bestTime: 'June–October & January–February',
        overview:
          "Samburu offers a completely different palette — red earth, doum palms, the Ewaso Ng'iro river, and species you won't see in the Mara. Sasaab and Saruni Samburu deliver the safari at exceptional standards.",
        attractions: [
          {
            title: 'The Samburu Five',
            body: "Five iconic dry-country species — Grevy's zebra, reticulated giraffe, gerenuk, beisa oryx and Somali ostrich — found together only in northern Kenya.",
            image: '/images/parks/kenya/samburu/53a3831.jpg',
          },
          {
            title: 'Ewaso Ng’iro River',
            body: "The lifeblood of the reserve — elephants drinking, crocodiles basking, leopards in the doum palms.",
            image: '/images/parks/kenya/samburu/grevys-zebra-1.jpg',
          },
          {
            title: 'Samburu Cultural Visits',
            body: 'Time with the Samburu people — cousins of the Maasai, but with their own distinctive dress, culture and worldview.',
            image: '/images/lodges/kenya/sasaab/images/aerial-view-of-sasaab.jpg',
          },
        ],
        activities: [
          {
            title: 'Stay at Sasaab',
            body: "The Safari Collection's Moorish-inspired villa-style lodge above the Ewaso Ng'iro — vast open-air suites, plunge pools and one of the most distinctive properties in northern Kenya.",
            image: '/images/parks/kenya/samburu/sasaab.jpg',
          },
          {
            title: 'Camel-Back Bush Walks',
            body: 'A relaxed half-day walking safari with a string of pack camels — the Samburu way of crossing the bush, with bush breakfast served on a riverbank.',
            image: '/images/parks/kenya/laikipia-loisaba/1752747977434-kenya-suyian-conservancy-walk-with-camels-5.jpg',
          },
          {
            title: 'Visit a Samburu Manyatta',
            body: "A genuine, unstaged visit to a Samburu homestead — singing, beadwork, and the everyday life of a semi-nomadic pastoralist community.",
            image: '/images/parks/kenya/samburu/samburu-manyatta.jpg',
          },
        ],
        faqs: [
          {
            q: 'How does Samburu pair with the rest of Kenya?',
            a: "It's the ideal counterpoint to the Mara — opposite landscape, different species, a fraction of the vehicles. Most of our itineraries combine Samburu (2–3 nights) with the Mara or Laikipia.",
          },
          {
            q: 'Is it hot?',
            a: "Yes, Samburu is the warmest of Kenya's classic safari regions — expect 30–35°C in the daytime. Lodges design around the heat with airy architecture, pools and siesta hours.",
          },
          {
            q: 'When is the best time to visit?',
            a: "Dry season (June–October, January–February) is best for game concentrations along the river. The greens of November and April–May are stunning for photography but expect occasional afternoon showers.",
          },
        ],
      },
      {
        slug: 'tsavo',
        name: 'Tsavo National Park',
        blurb:
          "Kenya's largest park — a vast, red-earth wilderness famous for its 'red elephants' coated in Tsavo's distinctive dust, and for raw, uncrowded wildness.",
        image: '/images/parks/kenya/tsavo/1736494647848-4z6a7096.jpg',
        location: 'Southern Kenya',
        size: '21,812 km²',
        altitude: '230 — 2,400 m',
        bestTime: 'June–October & January–February',
        overview:
          "Tsavo East and Tsavo West together cover 4% of Kenya — vast, raw and beautifully under-visited. Best experienced as part of a longer Kenya circuit alongside Amboseli or the coast.",
        attractions: [
          {
            title: '“Red Elephants” of Tsavo',
            body: "Tsavo's iron-rich red dust coats the elephants who bathe in it — yielding the iconic ochre-skinned giants the park is famous for. Herds along the Galana River are a sure sighting.",
            image: '/images/parks/kenya/tsavo/1736494647848-4z6a7096.jpg',
          },
          {
            title: 'Mzima Springs',
            body: 'Crystal-clear, hippo-filled springs welling up at the base of the Chyulu Hills — viewable from a partly submerged glass tank, one of the more unusual experiences in East Africa.',
            image: '/images/parks/kenya/tsavo/1736494647850-dzf3773.jpg',
          },
          {
            title: 'Lugard Falls & Yatta Plateau',
            body: 'The fissure-falls on the Galana River and the world\'s longest lava flow at Yatta — Tsavo\'s scale is geological as much as wild.',
            image: '/images/parks/kenya/tsavo/1736494647851-img-8731.jpg',
          },
        ],
        activities: [
          {
            title: 'Combined Tsavo & Coast Itinerary',
            body: 'Fly from the Mara or Nairobi straight into Tsavo for two nights of raw wilderness, then onward to the Lamu archipelago or Diani for a beach finish — the classic “bush-and-beach” combination.',
            image: '/images/parks/kenya/tsavo/1736494647851-img-8731.jpg',
          },
          {
            title: 'Walking Safari',
            body: "Tsavo's vast wilderness lends itself to walking with specialist guides — an evening hike to a fly-camp on the riverbank is one of the most authentic experiences in Kenya.",
            image: '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.jpg',
          },
          {
            title: 'Chyulu Hills Riding & Hiking',
            body: 'Tsavo West blurs into the Chyulu Hills — open volcanic grasslands ideal for horseriding and walking from ol Donyo Lodge.',
            image: '/images/lodges/kenya/amboseli-national-park/ol-donyo-lodge-1/masaai.jpg',
          },
        ],
        faqs: [
          {
            q: 'East or West Tsavo?',
            a: 'Tsavo East is bigger, drier and the home of the red elephants. Tsavo West is more dramatic — volcanic, watered and home to Mzima Springs. A combined-circuit itinerary gives you the full picture.',
          },
          {
            q: 'How many nights should I plan?',
            a: "Two nights is the minimum — three to four if you want to walk, visit both East and West, and experience the Chyulu Hills. Pair it with Amboseli (1-hour drive) or onward flights to the coast.",
          },
          {
            q: 'Is it as good for wildlife as the Mara?',
            a: "Different. Sightings are less concentrated than the Mara, but you'll have entire stretches of bush to yourself, and the elephants here are bigger, dustier, and far less photographed.",
          },
        ],
      },
    ],
    privilegedAccess: [
      {
        title: 'Helicopter Sunrise Picnic over the Mara',
        location: 'Masai Mara',
        body: 'Lift off at dawn for a breakfast on a remote escarpment with Mara Plains — an unforgettable way to experience the migration in motion.',
        image: '/images/parks/kenya/masai-mara/activites-game-drive.jpg',
      },
      {
        title: 'Rhino Tracking on Foot at Lewa',
        location: 'Laikipia (Lewa Conservancy)',
        body: "Track black rhino on foot with a Lewa ranger — a small-group, by-permit experience that funds frontline anti-poaching.",
        image: '/images/lodges/kenya/lakipia/elewana-kifaru-house/1770879317943whiterhino-elewanacar.jpg',
      },
      {
        title: 'Giraffe Manor Breakfast',
        location: 'Nairobi',
        body: "Endangered Rothschild's giraffes joining you for breakfast — the most photographed twelve hours of any Kenya itinerary.",
        image: '/images/lodges/kenya/nairobi/giraffe-manor/a-spot-of-tea-and-a-giraffe.jpg',
      },
    ],
    lodges: [
      {
        name: 'Angama Mara',
        location: 'Masai Mara',
        body: 'Suspended on the Oloololo Escarpment with sweeping views of the Mara Triangle — architecturally distinctive, service-driven luxury.',
        image: '/images/lodges/kenya/masai-mara/angama-mara/a-rocking-chair-safari.jpg',
      },
      {
        name: 'Mara Plains Camp',
        location: 'Masai Mara (Olare Motorogi Conservancy)',
        body: "Great Plains' flagship Mara camp — just seven tented suites in the heart of the migration corridor.",
        image: '/images/lodges/kenya/masai-mara/mara-plains-camp/getting-a-bird-s-eye-view-in-the-omc.jpg',
      },
      {
        name: 'Sirikoi',
        location: 'Lewa Wildlife Conservancy',
        body: 'Family-run, deeply personal, and one of the few lodges where the founders are still on the floor every night — a sanctuary inside Lewa.',
        image: '/images/lodges/kenya/lakipia/sirikoi-lodge-kenya/1744025471001-2024-cottage-outside-dec-sunset.jpg',
      },
      {
        name: 'Sasaab',
        location: 'Samburu',
        body: 'Moroccan-inspired suites overlooking the Ewaso Ng’iro — the standout lodge in northern Kenya.',
        image: '/images/lodges/kenya/sasaab/images/aerial-view-of-sasaab.jpg',
      },
      {
        name: 'ol Donyo Lodge',
        location: 'Chyulu Hills (Amboseli)',
        body: 'Great Plains’ stunning property in Maasai community land — with views to Kilimanjaro and one of the finest hide systems in East Africa.',
        image: '/images/lodges/kenya/amboseli-national-park/ol-donyo-lodge-1/masaai.jpg',
      },
      {
        name: 'Giraffe Manor',
        location: 'Nairobi',
        body: 'A boutique manor home outside Nairobi where Rothschild’s giraffes pop their heads through the breakfast windows — the perfect bookend to a Kenya safari.',
        image: '/images/lodges/kenya/nairobi/giraffe-manor/a-spot-of-tea-and-a-giraffe.jpg',
      },
    ],
    seoKeywords:
      'luxury Kenya safari, Masai Mara migration, Amboseli elephants Kilimanjaro, Laikipia rhino conservation, Samburu safari, Giraffe Manor Nairobi.',
  },
}
