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

export type Season = {
  dates: string
  name: string
  wildlife: string
  description: string
  image?: string
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
  travelStats?: { bestTime: string; duration: string; keyWildlife: string; travelStyle: string }
  whyVisit?: { intro: string; bullets: Array<string | { title: string; body: string }>; stats: Array<{ number: string; label: string }> }
  seasons?: Season[]
  specialistQuote?: { quote: string; author: string; role: string }
  conservation?: { intro: string; stats: Array<{ number: string; label: string }>; partners: string[] }
  countryFaqs?: Array<{ question: string; answer: string }>
}

const bwindi: Park = {
  slug: 'bwindi',
  name: 'Bwindi Impenetrable National Park',
  blurb:
    "Bwindi Impenetrable National Park is a UNESCO World Heritage site and one of Africa’s most ancient and biologically diverse rainforests. Located in southwestern Uganda, this mist-covered primeval forest is home to roughly half of the world’s remaining mountain gorilla population.",
  image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
  location: 'Southwestern Uganda',
  size: '331 km² (128 sq mi)',
  altitude: '1,160 — 2,607 m (3,806 — 8,553 ft)',
  bestTime: 'June–August & December–February',
  overview:
    "Bwindi Impenetrable National Park is a UNESCO World Heritage site and one of Africa’s most ancient and biologically diverse rainforests. Located in southwestern Uganda, this mist-covered primeval forest is home to roughly half of the world’s remaining mountain gorilla population. Its rugged terrain and dense canopy provide a sanctuary for a staggering array of wildlife, making it a bucket-list destination for nature enthusiasts and adventurers alike.",
  attractions: [
    {
      title: 'Mountain Gorillas',
      body: "The park’s primary draw, offering a rare opportunity to observe these gentle giants in their natural habitat.",
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
    "Uganda’s most popular savanna park, famed for tree-climbing lions, the Kazinga Channel and the volcanic crater lakes of the Rift Valley.",
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
      body: "Ishasha’s southern sector is one of only two places on earth where lions habitually rest in the limbs of giant fig trees — a sighting our guides specifically plan for.",
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
  blurb: "Uganda’s largest national park, where the mighty Nile thunders through a 7-metre gorge before fanning into a delta on Lake Albert.",
  image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
  location: 'Northwestern Uganda',
  size: '3,840 km²',
  altitude: '619 — 1,292 m',
  bestTime: 'December–February & June–September',
  overview:
    "Murchison Falls is Uganda at its most theatrical — the Nile compressed through a seven-metre rock cleft, a thunder of water that defines the park and gives it its name. Above the falls, vast savannahs of borassus palms host elephants, Rothschild’s giraffe, lions and the highest density of leopards in the country. Below, the river opens into a wildlife-rich delta on Lake Albert where Nile crocodiles, hippos and the elusive shoebill make their home. A perfect three- to four-night stay combining big-game drives, boat safaris and a hike to the top of the falls.",
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
  blurb: "Uganda’s smallest savanna park — a compact mosaic of acacia and lake habitats famous for zebra, eland and walking safaris.",
  image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.jpg',
  location: 'Western Uganda',
  size: '370 km²',
  altitude: '1,220 — 1,828 m',
  bestTime: 'Year-round',
  overview:
    "Lake Mburo punches well above its weight. The only Ugandan park with plains zebra, it’s also the most accessible for guests breaking the long drive between Entebbe and the gorillas. Without lions in the open park, walking and horseback safaris are part of daily life — a rare way to feel the African bush at ground level. Compact, friendly and underrated, it makes an elegant first or last night on a Uganda journey.",
  attractions: [
    {
      title: 'Plains Zebra',
      body: "The only park in Uganda where you’ll see large herds of zebra grazing in the open — alongside impala, topi, eland and the largest population of Uganda’s only antelope, the topi.",
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
    "Mgahinga is Uganda’s quiet alternative to Bwindi — smaller, higher and dramatically framed by three Virunga volcanoes that march along the Rwandan border. A single habituated gorilla family, the Nyakagezi group, roams freely across the three countries (Uganda, Rwanda and the DRC) and when they’re home, the trekking is exceptional. Add habituated golden monkeys found nowhere else in Uganda, a half-day immersion with the indigenous Batwa, and the option to summit Mt Sabyinyo straddling all three borders — Mgahinga is small but layered, and well worth the effort.",
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
      body: "Climb Mt Sabyinyo (3,669 m) to stand simultaneously in Uganda, Rwanda and the DRC, or take on the steeper Muhabura (4,127 m) — for fit walkers, two of East Africa’s most rewarding day-summits.",
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

const serengetiPark = {
  slug: 'serengeti',
  name: 'Serengeti National Park',
  blurb:
    "The greatest wildlife spectacle on earth — 1.5 million wildebeest and 250,000 zebra crossing an endless plain, with lion, leopard and cheetah in extraordinary numbers year-round.",
  image: '/images/destinations/tanzania/sayari-serengeti-elephant-walking-safari.jpg',
  location: 'Northern Tanzania',
  size: '14,763 km²',
  altitude: '920 — 1,850 m',
  bestTime: 'June–October (northern crossings) & January–March (calving season)',
  overview:
    "The Serengeti is Tanzania’s crown jewel and the stage for the most iconic safari experience on the planet. An ancient ecosystem stretching from the volcanic plains of the south to the Mara River in the north, it supports the single largest terrestrial mammal migration in the world. Beyond the migration, the Serengeti harbours more lions than almost anywhere on earth, dense resident leopard, cheetah on the open plains and a year-round cast of supporting wildlife that makes every drive compelling. The private concessions to the north and west — home to Sayari and Dunia camps — offer off-road driving and night-drive access that transforms the experience entirely.",
  attractions: [
    {
      title: 'The Great Migration',
      body: 'Over 1.5 million wildebeest and 250,000 zebra move in an annual clockwise loop — with dramatic Mara River crossings from July to October and calving season on the short-grass plains in January and February.',
      image: '/images/destinations/tanzania/sayari-game-drive-with-hyena-viewing1.jpg',
    },
    {
      title: 'Lion & Leopard Density',
      body: 'The Serengeti holds one of the highest concentrations of lion in Africa, plus resident leopard in the riverine forest, cheetah on the open plains and a near-certain chance of wild dog in the north.',
      image: '/images/destinations/tanzania/sayari-lioness.jpg',
    },
    {
      title: 'Private Northern Concessions',
      body: "The far north — Lamai Wedge, Mara Triangle interface — offers off-road driving, night drives and a far lower vehicle count than the central Seronera area. It’s where Sayari Camp and our most exclusive itineraries are based.",
      image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.jpg',
    },
  ],
  activities: [
    {
      title: 'Stay at Sayari Camp',
      body: "Asilia’s northernmost Serengeti camp — closest to the Mara River crossings, with just fifteen tented rooms, a stellar guiding team and full off-road access.",
      image: '/images/destinations/tanzania/sayari-elephant.jpg',
    },
    {
      title: 'Stay at Dunia Camp',
      body: "A mobile-style camp in the Central Serengeti — brilliantly positioned for the resident game of the Seronera valley and following the migration into the south in calving season.",
      image: '/images/destinations/tanzania/dunia-camp-game-drive-vehicle-lookout-hr-eliza-deacon1.jpg',
    },
    {
      title: 'Ballooning over the Plains',
      body: 'A dawn balloon flight over the Serengeti, following migrating herds from 500 feet, ending with a champagne breakfast in the bush — the definitive aerial safari experience.',
      image: '/images/destinations/tanzania/dunia-lion-and-plane-in-the-serengeti.jpg',
    },
  ],
  faqs: [
    {
      q: 'When are the Mara River crossings?',
      a: 'Crossings are most reliable from late July through October, peaking in August and September. The exact timing shifts by a week or two each year — our in-field team monitors the herds daily and positions guests accordingly.',
    },
    {
      q: 'Is calving season worth visiting?',
      a: "Absolutely. January and February, when half a million wildebeest calves are born in ten days on the short-grass southern plains, is one of Africa’s great wildlife events — dramatic predator action, enormous herds, and exceptional photographic light.",
    },
    {
      q: 'Private concession vs the main reserve — which is better?',
      a: "For luxury safari, the private concessions (northern Serengeti, Wogakuria) are transformative — off-road access, night drives, no vehicle queues. We design itineraries that use both: northern concessions for exclusivity, central Seronera for the long-established resident game.",
    },
  ],
}

const ngorongoroPark = {
  slug: 'ngorongoro',
  name: 'Ngorongoro Conservation Area',
  blurb:
    "An ancient, collapsed caldera sheltering the densest concentration of wildlife in Africa — the world’s largest intact volcanic crater and home to all of the Big Five in a single enclosed ecosystem.",
  image: '/images/destinations/tanzania/dunia-giraffe.jpg',
  location: 'Northern Tanzania',
  size: '8,292 km² (crater floor: 260 km²)',
  altitude: '1,800 — 3,648 m',
  bestTime: 'Year-round (driest June–September)',
  overview:
    "Ngorongoro Crater is a natural wonder — a collapsed volcano the size of a small city, its 600-metre walls sheltering a permanently enclosed ecosystem with an extraordinary density of wildlife. More than 25,000 large mammals live on the crater floor, including one of the densest black rhino populations in East Africa. The drive down from the rim at dawn, with the mist clearing to reveal the plains below, is one of the defining moments of an African safari. Ngorongoro pairs beautifully with the Serengeti as part of our northern Tanzania circuit.",
  attractions: [
    {
      title: 'Black Rhino on the Crater Floor',
      body: 'One of the last strongholds for critically endangered black rhino in East Africa — sightings are regular at the Lerai Forest and the crater lake margins.',
      image: '/images/destinations/tanzania/dunia-leopard.jpg',
    },
    {
      title: 'Crater Rim Viewpoints',
      body: 'The panoramic viewpoint from the crater rim at 2,300 m — looking down over the entire enclosed ecosystem at dawn as the mist lifts from the crater floor.',
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.jpg',
    },
    {
      title: 'Lerai Forest & Flamingo Lake',
      body: 'The crater floor\'s fever-tree forest shelters elephant and leopard; the soda lake at its centre draws thousands of flamingos and is a prime staging ground for the predator–prey dramas that play out here daily.',
      image: '/images/destinations/tanzania/dunia-crane.jpg',
    },
  ],
  activities: [
    {
      title: 'Full-Day Crater Drive',
      body: 'An immersive full-day game drive on the crater floor — a circuit of the lake, the Lerai Forest, the Hippo Pool and the open plains, with a bush picnic at a designated viewpoint.',
      image: '/images/destinations/tanzania/dunia-camp-game-drive-serengeti-safari-2.jpg',
    },
    {
      title: 'Olduvai Gorge Visit',
      body: 'A short diversion to the cradle of human evolution — the site where Mary Leakey discovered the 1.8-million-year-old footprints that changed our understanding of human ancestry.',
      image: '/images/destinations/tanzania/dunia-game-drive.jpg',
    },
    {
      title: 'Maasai Village Visit',
      body: 'The Ngorongoro Conservation Area is co-managed with the Maasai community — a genuine homestead visit, arranged through our local partners, is one of the most memorable cultural encounters in northern Tanzania.',
      image: '/images/destinations/tanzania/dunia-seronera-river.jpg',
    },
  ],
  faqs: [
    {
      q: 'Can I sleep inside the crater?',
      a: 'No — overnight access to the crater floor is not permitted. All lodges are on the rim or outside the conservation area. The drive to the floor takes approximately 45 minutes each way.',
    },
    {
      q: 'How does it fit with the Serengeti?',
      a: "Ngorongoro is a natural one- or two-night add-on to a Serengeti safari — the lodges are 2–3 hours by road from the central Serengeti, or 1 hour by charter flight. The two destinations complement each other perfectly.",
    },
    {
      q: 'When is the best time to visit?',
      a: "Year-round — the crater is productive in every season. June to September (dry season) offer easier wildlife viewing. The green season (November–May) brings lush vegetation, newborn wildlife and softer photography light.",
    },
  ],
}

const selousPark = {
  slug: 'nyerere',
  name: 'Nyerere National Park',
  blurb:
    "Africa’s largest national park — a vast, wild, boat-safari heartland of the Rufiji River, famous for African wild dogs, hippos and a remote, uncrowded safari atmosphere.",
  image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
  location: 'Southern Tanzania',
  size: '30,893 km²',
  altitude: '50 — 1,000 m',
  bestTime: 'June–October',
  overview:
    "Formerly the Selous Game Reserve, now Nyerere National Park, this vast southern wilderness is four times the size of the Serengeti and sees a fraction of its visitors. The Rufiji River and its system of lakes and channels is the lifeblood of the park — boat safaris here, drifting past hippo pods, crocodile banks and waterbirds, rival anything in East Africa. Nyerere holds one of the largest lion populations on the continent, significant wild-dog packs, and elephant herds in the thousands. For the traveller who values space, privacy and an authentic bush experience, it is incomparable.",
  attractions: [
    {
      title: 'Rufiji River Boat Safaris',
      body: 'The most dramatic river safari in East Africa — hippos, crocodiles, fish eagles and bathing elephants at close quarters from a motorised pontoon.',
      image: '/images/activities/big-five/roho-ya-selous-hippo.jpg',
    },
    {
      title: 'African Wild Dog',
      body: "One of Tanzania’s most reliable places to track packs of the endangered African wild dog — Nyerere’s vast, unfenced wilderness supports several large packs with regular denning activity.",
      image: '/images/activities/game-drive/roho-ya-selous-wild-dogs.jpg',
    },
    {
      title: 'Walking Safaris',
      body: "Nyerere is one of the few Tanzanian parks where walking safaris are permitted — a profoundly different pace, with specialist guides reading tracks, insects and ecosystem in a way a vehicle cannot replicate.",
      image: '/images/activities/game-drive/roho-ya-selous-walking-safari-guide-showing-off-a-hippos-skull.jpg',
    },
  ],
  activities: [
    {
      title: 'Stay at Roho ya Selous',
      body: 'Eight tented suites on a private concession within the park — boat safaris, game drives, walking, and a guiding team with decades of Selous experience.',
      image: '/images/activities/big-five/roho-ya-selous-elephant.jpg',
    },
    {
      title: 'Fly Camping on the Rufiji',
      body: 'Spend a night on a sandbank under the stars, with your guide and a campfire — the ultimate immersion in the southern wilderness.',
      image: '/images/activities/game-drive/roho-ya-selous-fishing-at-sunrise.jpg',
    },
    {
      title: 'Fishing the Rufiji',
      body: 'Catch-and-release tigerfish and catfish on the river — an optional afternoon activity for keen anglers staying at Roho ya Selous.',
      image: '/images/activities/big-five/roho-ya-selous-giraffes.jpg',
    },
  ],
  faqs: [
    {
      q: 'How do we get there?',
      a: 'A 45-minute charter flight from Dar es Salaam or a 1.5-hour flight from Kilimanjaro — the park is not accessible by scheduled airline. We include charter flights in all Nyerere itineraries.',
    },
    {
      q: 'Why visit the south instead of the Serengeti?',
      a: "Nyerere is for guests who value raw wilderness over big-name recognition. You’ll share the park with almost no other vehicles, you can take a boat and a walk on the same morning, and the scale of the landscape is humbling. It pairs perfectly with the Serengeti as a contrasting final leg.",
    },
    {
      q: 'How many nights do we need?',
      a: "Three nights minimum — one for the boat safari, one for a full game drive and walking, one to simply exhale and appreciate the scale. Four nights is better.",
    },
  ],
}

const rubondoPark = {
  slug: 'rubondo',
  name: 'Rubondo Island National Park',
  blurb:
    "An island wilderness on Lake Victoria — chimp habituation, forest walks, fishing, and a cast of reintroduced species in one of Africa’s most unusual and uncrowded national parks.",
  image: '/images/destinations/tanzania/rubondo-island-camp-landscape.jpg',
  location: 'Northwestern Tanzania, Lake Victoria',
  size: '457 km²',
  altitude: '1,130 — 1,480 m',
  bestTime: 'June–February',
  overview:
    "Rubondo Island is one of Africa’s best-kept secrets — an island park on Lake Victoria where chimps were reintroduced and are now partially habituated, where sitatunga and grey-cheeked mangabey move through riverine forest, and where Nile perch fishing from the lake shore can be world class. With just one camp on the island, this is genuinely off-the-beaten-track East Africa — best woven into an itinerary as a remarkable four-night detour from the northern Tanzania circuit.",
  attractions: [
    {
      title: 'Chimpanzee Habituation',
      body: 'A long-running habituation project with a community of reintroduced chimps — forest walks with researchers tracking their progress, an intimate and rarely-visited alternative to Kibale.',
      image: '/images/destinations/tanzania/rubondo-island-camp-chimp.jpg',
    },
    {
      title: 'Birdlife of Lake Victoria',
      body: 'Over 300 bird species recorded — African fish eagle, pied kingfisher, goliath heron, and the rare shoebill in the papyrus fringe of the lake.',
      image: '/images/destinations/tanzania/rubondo-island-camp-fish-eagle-eric-frank-mr.jpg',
    },
    {
      title: 'Pristine Forest Walks',
      body: 'A dense tropical forest of ebony, wild mango and giant ficus — walked with specialist naturalist guides, tracking chimp signs and the island\'s unique community of reintroduced mammals.',
      image: '/images/destinations/tanzania/rubondo-island-forest-walks-experience-with-your-guide1.jpg',
    },
  ],
  activities: [
    {
      title: 'Forest Walk with Chimp Team',
      body: 'Early morning walk with the habituation team — tracking chimp nests, calls and movement, with close encounters increasingly possible as the project matures.',
      image: '/images/destinations/tanzania/rubondo-island-camp-forest-walk-mr1.jpg',
    },
    {
      title: 'Nile Perch Fishing',
      body: 'Lake Victoria is one of the great sport-fishing destinations in Africa — Nile perch in the hundreds of kilos, plus tilapia and catfish on a catch-and-release basis from the camp launch.',
      image: '/images/destinations/tanzania/rubondo-island-game-drives-on-the-hills-above-lake-victoria1.jpg',
    },
    {
      title: 'Canoe Safari',
      body: "A slow, silent exploration of the island’s shoreline by dugout canoe — hippos, crocodiles, sitatunga and a gallery of waterbirds at a pace that no motor safari can match.",
      image: '/images/destinations/tanzania/rubondo-island-camp-beach.jpg',
    },
  ],
  faqs: [
    {
      q: 'How do we get to Rubondo Island?',
      a: 'A charter flight from the Serengeti or Mwanza (1–1.5 hours) lands on the island\'s grass airstrip, followed by a short boat transfer to camp. We include the full routing in our itineraries.',
    },
    {
      q: 'Are chimp encounters guaranteed?',
      a: "No — the chimps are partially habituated, not fully. Close encounters are increasingly common but depend on daily ranging behaviour. The forest walk is wonderful regardless; a chimp sighting makes it extraordinary.",
    },
    {
      q: 'How does it fit into a Tanzania itinerary?',
      a: "Best as a 3–4 night detour from a northern Tanzania circuit — fly from the Serengeti to Rubondo, spend three nights on the island, then fly directly back to Kilimanjaro or Dar es Salaam.",
    },
  ],
}

export const countries: Record<string, Country> = {
  uganda: {
    slug: 'uganda',
    name: 'Uganda',
    heroTitle: 'The Pearl of Africa,\nWhere the Wild Reigns Supreme',
    heroSubtitle:
      "In the heart of equatorial Africa, where the Nile begins its legendary journey northward and ancient forests shelter half the world’s remaining mountain gorillas, Uganda emerges as a destination of extraordinary, intimate wilderness. We invite you to be changed by it.",
    heroImage: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
    exploreIntro:
      "From misty rainforests and endangered gorillas to wide savannahs and roaring waterfalls, Uganda is Africa’s most diverse safari destination.",
    parkSummary:
      "Each of Uganda’s national parks offers a completely different world — rich wildlife, dramatic landscapes, and unforgettable encounters. Choose your journey and explore the wild heart of the Pearl of Africa.",
    parkSummaryImage: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
    parks: [bwindi, queenElizabeth, murchison, kibale, lakeMburo, mgahinga],
    privilegedAccess: [
      {
        title: "Gorilla Researcher’s Morning Briefing",
        location: 'Bwindi Impenetrable Forest, SW Uganda',
        body: 'A private pre-trek session with the Uganda Wildlife Authority\'s gorilla monitoring team. Learn exactly how your permit fee funds gorilla protection, meet the research staff who track these families daily, and understand which family you will visit that morning and what to expect from their current behaviour.',
        image: '/images/activities/gorilla-trekking/15-gorilla-ah1i7197.jpg',
      },
      {
        title: 'Chimpanzee Wake-Up at First Light',
        location: 'Kibale National Park, W Uganda',
        body: "Enter Kibale’s chimpanzee zone before the park opens to general visitors. Watch a habituated troupe rise from their night nests, begin grooming, and commence morning foraging — with no other guests present, in complete silence, accompanied by a specialist primatologist.",
        image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
      },
      {
        title: 'Private Helicopter Flight over Murchison Falls',
        location: 'Murchison Falls National Park, NW Uganda',
        body: 'A private charter directly over the seven-metre gorge where the entire River Nile is compressed into one extraordinary point of power and spray. The helicopter then lands at a remote game-viewing site inaccessible by road, where a champagne sundowner awaits with your private ranger.',
        image: '/images/parks/uganda/murchison-falls/dsc-6951.jpg',
      },
    ],
    lodges: [
      {
        name: 'Bwindi Lodge',
        location: 'Bwindi Impenetrable Forest (Buhoma)',
        body: 'Eight stone cottages on the forest rim with panoramic canopy views and direct access to the gorilla trekking assembly point — the most established luxury address in Bwindi.',
        image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
      },
      {
        name: 'Clouds Mountain Gorilla Lodge',
        location: 'Bwindi Impenetrable Forest (Nkuringo)',
        body: "Uganda’s highest-altitude gorilla lodge, with heated plunge pools, private butler service, and the most dramatic viewpoint in the entire Bwindi region.",
        image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
      },
      {
        name: 'Apoka Safari Lodge',
        location: 'Kidepo Valley National Park',
        body: "The most exclusive address in Uganda’s most remote park. Private game drives across Kidepo’s semi-arid savannah with zero other tourist vehicles in sight.",
        image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
      },
      {
        name: 'Wildwaters Lodge',
        location: 'Nile River, Jinja',
        body: 'A private island accessible only by boat — total seclusion on the Nile within reach of Jinja\'s white-water rapids and adventure activities.',
        image: '/images/parks/uganda/murchison-falls/dsc-6271.jpg',
      },
      {
        name: 'Primate Lodge Kibale',
        location: 'Kibale National Park',
        body: 'Set within the park boundary for direct forest access — private guided night walks and the dawn chimpanzee experience are available exclusively to lodge guests.',
        image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.jpg',
      },
      {
        name: "Baker’s Lodge",
        location: 'Murchison Falls National Park',
        body: "Eight East African-style cottages on the northern bank of the Nile with resident hippo pools, private river decks, and the falls thundering upstream.",
        image: '/images/parks/uganda/murchison-falls/dsc-6884.jpg',
      },
    ],
    seoKeywords:
      'luxury Uganda safari, gorilla trekking Uganda, bespoke Uganda primate safari, private gorilla trek Bwindi, Murchison Falls luxury camp, Kidepo Valley exclusive safari, Uganda chimp tracking Kibale, mountain gorilla permit Uganda',
    travelStats: {
      bestTime: 'Jun–Sep & Dec–Feb',
      duration: '8–12 Days',
      keyWildlife: 'Mountain Gorilla · Chimpanzee · Elephant · Lion',
      travelStyle: 'Trekking · Forest Lodge · Fly-In',
    },
    whyVisit: {
      intro:
        "Uganda is Africa's most intimate wildlife destination. Half the world’s remaining mountain gorillas, the largest chimpanzee population in East Africa, and tree-climbing lions — all in a country the size of the United Kingdom.",
      bullets: [
        {
          title: "Half the World's Mountain Gorillas",
          body: "Bwindi and Mgahinga together shelter over 54% of the global mountain gorilla population — making Uganda the single most important gorilla conservation site on earth.",
        },
        {
          title: '13 Primate Species in Kibale Alone',
          body: "Kibale National Park holds the highest concentration of primates in Africa — 13 species including chimpanzees, olive baboons, L'Hoest's monkeys, and the black-and-white colobus.",
        },
        {
          title: '1,066 Recorded Bird Species',
          body: 'More bird species than the entire North American continent, including the prehistoric shoebill, the rare African green broadbill, and 150 species found nowhere else in East Africa.',
        },
        {
          title: 'Year-Round Safari Destination',
          body: 'Unlike seasonal East African destinations, Uganda offers productive wildlife encounters across all months — gorilla trekking, chimp tracking, and savannah game drives are available year-round.',
        },
      ],
      stats: [
        { number: '460+', label: 'mountain gorillas in Uganda' },
        { number: '1,000+', label: 'bird species recorded' },
        { number: '10', label: 'national parks' },
      ],
    },
    seasons: [
      {
        dates: 'Jun – Sep',
        name: 'Long Dry Season',
        wildlife: 'Mountain Gorilla · Chimpanzee · Savannah Big Five',
        description:
          'The main trekking season. Firmer trails in Bwindi, clear forest visibility in Kibale, and excellent savannah game viewing in Murchison and Queen Elizabeth. Gorilla permit demand is highest — book 6+ months ahead.',
      },
      {
        dates: 'Dec – Feb',
        name: 'Short Dry Season',
        wildlife: 'Mountain Gorilla · Chimpanzee · Migratory Birds',
        description:
          'The second peak trekking window. Lower visitor numbers than June–September, with equally good conditions for gorilla and chimp trekking. Christmas and New Year in the forest is a profoundly special experience.',
      },
      {
        dates: 'Mar – May',
        name: 'Long Green Season',
        wildlife: 'Migratory Birds · Forest Newborns · Lush Bwindi',
        description:
          'Wet season brings extraordinary birdlife and vivid green forest. Gorilla trekking is still possible, though trails are muddier. Lodge rates are significantly lower — excellent value for the adventurous traveller.',
      },
    ],
    specialistQuote: {
      quote:
        "The moment a mountain gorilla makes eye contact with you in the forest, everything else falls away. Uganda delivers that encounter in a way that no other country can — intimate, unhurried, and deeply personal.",
      author: 'David Ochieng',
      role: 'Uganda & Rwanda Specialist, Still Wild Safaris',
    },
    conservation: {
      intro:
        'Uganda’s gorilla population has grown from 620 to over 1,000 individuals in two decades — a conservation success directly funded by gorilla trekking permits. Every Still Wild Uganda journey contributes to this extraordinary recovery.',
      stats: [
        { number: '1,000+', label: 'mountain gorillas now living' },
        { number: '$800', label: 'gorilla permit fee funds conservation' },
        { number: '45%', label: 'permit revenue to local communities' },
      ],
      partners: [
        'Uganda Wildlife Authority (UWA)',
        'Bwindi Community Hospital',
        'International Gorilla Conservation Programme',
        'Volcanoes Safaris Partnership Trust',
      ],
    },
    countryFaqs: [
      {
        question: 'How do I get a gorilla trekking permit for Uganda?',
        answer:
          'Uganda Wildlife Authority gorilla permits cost USD 800 per person per trek and must be booked in advance. We secure permits as part of your itinerary planning — availability is limited, especially June–September, so we recommend booking 6–12 months ahead.',
      },
      {
        question: 'Is gorilla trekking in Uganda difficult?',
        answer:
          'Treks range from 1 to 8 hours depending on gorilla family location that day. Bwindi is steep and can be muddy — good fitness and waterproof hiking boots are essential. Porters are available and strongly recommended.',
      },
      {
        question: 'Can I combine gorilla trekking with a traditional safari?',
        answer:
          'Yes — this is the classic Uganda itinerary. Gorilla trekking in Bwindi, chimp tracking in Kibale, and a savannah safari in Murchison Falls or Queen Elizabeth can be combined in 10–12 days using light aircraft between parks.',
      },
      {
        question: 'Is Uganda safe to visit?',
        answer:
          'Uganda is one of East Africa’s safest and most welcoming destinations. We monitor FCO and US State Department travel advisories continuously and will advise you if anything changes ahead of your departure.',
      },
    ],
  },

  rwanda: {
    slug: 'rwanda',
    name: 'Rwanda',
    heroTitle: "The Land of a Thousand Hills\nWhere Purpose and Luxury Converge",
    heroSubtitle:
      "Beyond the mist-shrouded peaks of the Virunga Mountains, Rwanda is Africa’s most remarkable conservation success story and one of its most sophisticated travel destinations. From intimate gorilla encounters in ancient volcanic forests to Big Five savannah in Akagera, Rwanda rewards those who travel with both curiosity and conscience.",
    heroImage: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.jpg',
    exploreIntro:
      "Rwanda is conservation-led luxury at its purest — gorilla trekking in Volcanoes, the Big Five in restored Akagera, canopy walks in Nyungwe and lakeside elegance on Kivu.",
    parkSummary:
      "Two flagship national parks, two distinct safari worlds. Volcanoes opens the door to mountain gorillas in their misty bamboo realm; Akagera’s restored savannahs unite lions, leopards, elephants, buffalo and rhino on a single horizon.",
    parkSummaryImage: '/images/parks/rwanda/akagera/wilderness-magashi-1.jpg',
    parks: [
      {
        slug: 'volcanoes',
        name: 'Volcanoes National Park',
        blurb:
          "The Rwandan section of the Virunga Massif — five towering volcanoes cloaked in bamboo and rainforest, sanctuary to roughly a third of the world’s mountain gorillas and a thriving population of golden monkeys.",
        image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
        location: 'Northwestern Rwanda',
        size: '160 km²',
        altitude: '2,400 — 4,507 m',
        bestTime: 'June–September & December–February',
        overview:
          "Volcanoes is where Dian Fossey changed the world for mountain gorillas, and where the model of conservation-driven tourism continues to flourish. Trekking groups are kept small and intimate; lodges are some of Africa’s most refined.",
        attractions: [
          {
            title: 'Mountain Gorilla Tracking',
            body: "An intimate hour with a habituated family group in a bamboo cathedral — the experience that defined Rwanda’s modern tourism.",
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
          "Africa’s most successful conservation comeback story — savannahs, papyrus swamps and lakes restored to a full Big Five reserve since 2010, with reintroduced lions and rhinos thriving alongside elephants, leopards and buffalo.",
        image: '/images/parks/rwanda/akagera/wilderness-magashi-1.jpg',
        location: 'Eastern Rwanda',
        size: '1,122 km²',
        altitude: '1,250 — 1,825 m',
        bestTime: 'July–September & December–February',
        overview:
          "Akagera is Rwanda’s only savannah park — a landscape of acacia plains, hippo-filled lakes and rolling escarpments. African Parks took over management in 2010; lions returned in 2015, rhinos in 2017, and the Big Five circle is now complete.",
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
        title: 'Behind-the-Scenes Briefing — Karisoke Research Centre',
        location: 'Volcanoes National Park, NW Rwanda',
        body: "An exclusive opportunity to meet with a senior researcher at the Dian Fossey Gorilla Fund’s Karisoke Research Centre. Receive a private briefing on current gorilla monitoring methods, the science behind habituation, and how your permit fee flows directly into the conservation programme — before your trek begins.",
        image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.jpg',
      },
      {
        title: 'Private Canopy Walkway at Sunrise — Nyungwe',
        location: 'Nyungwe Forest National Park, SW Rwanda',
        body: "Access the famous Nyungwe Canopy Walkway — suspended 70 metres above the forest floor — before the park opens to general visitors, for a completely private, silent sunrise experience. The ancient rainforest spreads below in the morning mist, colobus monkeys move through the canopy at eye level, and 310 bird species wake around you.",
        image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
      },
      {
        title: 'Rhino Tracking with the Research Team',
        location: 'Akagera National Park, Eastern Rwanda',
        body: "Join a dedicated research team for a morning tracking Rwanda’s critically endangered black and white rhinos — reintroduced to Akagera after an absence of decades. Accompany researchers monitoring collar data, recording behaviour, and assessing range. Scientific insight few travellers ever receive, in a park that represents one of Africa’s most successful rewilding stories.",
        image: '/images/parks/rwanda/akagera/wilderness-magashi-31.jpg',
      },
    ],
    lodges: [
      {
        name: 'Singita Kwitonda Lodge',
        location: 'Volcanoes National Park',
        body: 'Ultra-luxury low-impact suites with Sabyinyo volcano views and direct gorilla trekking access. Conservation-first ethos throughout.',
        image: '/images/lodges/rwanda/volcanoes-national-park/singita-kwitonda-lodge/dsc07739.jpg',
      },
      {
        name: 'Bisate Lodge',
        location: 'Volcanoes National Park',
        body: 'Six spherical forest villas built in an eroded volcanic cone. An active reforestation programme on-site. Among Africa\'s most architecturally significant lodges.',
        image: '/images/lodges/rwanda/volcanoes-national-park/wildernes-bisate-lodge/1753110933515-bisate-gorilla-trekking-06-25-fr-31.jpg',
      },
      {
        name: "One&Only Gorilla’s Nest",
        location: 'Volcanoes National Park',
        body: 'Nestled in eucalyptus forest moments from the gorilla trekking starting point. Unparalleled luxury in immediate proximity to the gorillas.',
        image: '/images/lodges/rwanda/volcanoes-national-park/one-and-only-gorilla-nest/ajqwtbm-sghilb7nle6tsj60kf09t2y-5t9-yogkjdukgiwdyxdqa3q5xhnkhpsmgq-zfpyh4-wq0ahhc9fjpalj-rthz6sczpv5eey2khgmwvwq0mmt-h400-nu.jpg',
      },
      {
        name: 'One&Only Nyungwe House',
        location: 'Nyungwe Forest National Park',
        body: 'A tea plantation transformed into a luxury forest retreat — the ideal base for chimpanzee trekking and the famous Nyungwe canopy walkway.',
        image: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.jpg',
      },
      {
        name: 'Magashi Peninsula',
        location: 'Akagera National Park',
        body: 'Exclusive lakeside camp on Lake Rwanyakizinga. Classic Big Five safari in an intimate tented setting, operated in partnership with African Parks.',
        image: '/images/parks/rwanda/akagera/wilderness-magashi.jpg',
      },
      {
        name: 'The Retreat by Heaven',
        location: 'Kigali',
        body: "The finest arrival and departure experience in Kigali — world-class spa, the city’s best dining, and a serene garden setting.",
        image: '/images/destinations/rwanda/image-20260331125636.jpg',
      },
    ],
    seoKeywords:
      'luxury Rwanda safari, gorilla trekking Rwanda, Rwanda gorilla permit, Volcanoes National Park lodge, Bisate Lodge Rwanda, Dian Fossey gorilla tour, Akagera Big Five Rwanda, Nyungwe canopy walk, bespoke Rwanda travel',
    travelStats: {
      bestTime: 'Jun–Sep & Dec–Feb',
      duration: '6–10 Days',
      keyWildlife: 'Mountain Gorilla · Golden Monkey · Black Rhino · Chimp',
      travelStyle: 'Lodge · Trekking · Conservation-First',
    },
    whyVisit: {
      intro:
        "Rwanda is Africa’s most remarkable conservation success story. In three decades, the country has transformed from crisis to become one of the continent’s most sought-after destinations — its gorillas thriving, its parks rewilded, its lodges setting the global standard for sustainable luxury.",
      bullets: [
        'Volcanoes National Park — the original Dian Fossey gorilla habitat',
        'Bisate Lodge — one of Africa’s most awarded conservation properties',
        'Akagera — the Big Five, restored through community-led conservation',
        'Nyungwe — ancient montane forest with chimpanzees and canopy walks',
        'Kigali — one of Africa’s cleanest, safest and most fascinating cities',
        'Compact geography — everything within a short flight or scenic drive',
      ],
      stats: [
        { number: '604', label: 'mountain gorillas in Volcanoes NP' },
        { number: '30%', label: 'of Volcanoes NP revenue to communities' },
        { number: '3', label: 'distinct ecosystems in one country' },
      ],
    },
    seasons: [
      {
        dates: 'Jun – Sep',
        name: 'Long Dry Season',
        wildlife: 'Mountain Gorilla · Golden Monkey · Black Rhino',
        description:
          'The best season for gorilla trekking in the Virungas. Clear skies, firm forest trails and excellent visibility. Akagera is outstanding for Big Five game viewing with water levels low and animals concentrated around rivers.',
      },
      {
        dates: 'Dec – Feb',
        name: 'Short Dry Season',
        wildlife: 'Mountain Gorilla · Chimpanzee · Canopy Birds',
        description:
          'The second peak trekking window. Fewer visitors than the June–September season, with equally good conditions in the Virungas and Nyungwe. An excellent time for a quieter, more intimate Rwanda journey.',
      },
      {
        dates: 'Mar – May',
        name: 'Long Green Season',
        wildlife: 'Migratory Birds · Lush Forest · Gorilla Families',
        description:
          'Rain transforms Rwanda into vivid green. Gorilla trekking continues year-round and trails are passable. Significantly lower lodge rates and very few other visitors — ideal for the experienced traveller.',
      },
    ],
    specialistQuote: {
      quote:
        "Rwanda has rebuilt itself into one of the most inspiring destinations on earth. The gorillas, the lodges, the story of renewal — it is unlike anywhere else in Africa, and our guests leave profoundly changed by it.",
      author: 'David Ochieng',
      role: 'Uganda & Rwanda Specialist, Still Wild Safaris',
    },
    conservation: {
      intro:
        'Rwanda reinvested gorilla permit revenue directly into conservation and community programmes — and the gorilla population has doubled as a result. Every Still Wild Rwanda journey is part of that story.',
      stats: [
        { number: '604', label: 'mountain gorillas in Volcanoes NP' },
        { number: '30%', label: 'permit revenue to communities' },
        { number: '2x', label: 'gorilla population growth since 2008' },
      ],
      partners: [
        'Rwanda Development Board (RDB)',
        'Dian Fossey Gorilla Fund',
        'African Parks (Akagera)',
        'Wilderness Safaris',
      ],
    },
    countryFaqs: [
      {
        question: 'How much does a Rwanda gorilla permit cost?',
        answer:
          'A Rwanda gorilla trekking permit costs USD 1,500 per person per trek — the highest in Africa, and deliberately so. The premium funds Rwanda’s world-class conservation programme directly. We secure permits as part of your itinerary.',
      },
      {
        question: 'Can I see the Big Five in Rwanda?',
        answer:
          'Yes — Akagera National Park in eastern Rwanda is home to lion, leopard, elephant, buffalo and black rhino, successfully reintroduced through a partnership with African Parks. A classic Rwanda itinerary combines Volcanoes with Akagera.',
      },
      {
        question: 'How do I get to Rwanda?',
        answer:
          'Rwanda’s Kigali International Airport has direct connections to London Heathrow (RwandAir), Amsterdam, Brussels, Dubai and Nairobi. It is one of the easiest African countries to fly to from Europe. Your trip manager will advise on the best routing.',
      },
      {
        question: 'Is Rwanda suitable for first-time Africa visitors?',
        answer:
          'Rwanda is an excellent first Africa destination. The country is exceptionally safe, clean, well-organised and English-speaking. The gorilla experience is one of the most powerful encounters available anywhere on earth — ideal for a first safari of genuine depth.',
      },
    ],
  },

  kenya: {
    slug: 'kenya',
    name: 'Kenya',
    heroTitle: 'The Classic Stage of Africa,\nRewritten in Luxury',
    heroSubtitle:
      "Where else on earth does a single horizon contain a million wildebeest, a pride of lions in golden light, and a hot-air balloon drifting silently at dawn? Kenya is Africa’s most storied safari destination — and for those who know where to look, it remains a place of profound, unhurried discovery.",
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
          "The northern extension of the Serengeti and the stage for the Great Migration each July to October — plus year-round resident lion, leopard and cheetah on Africa’s most photographed plains.",
        image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
        location: 'Southwest Kenya',
        size: '1,510 km² + 6 conservancies',
        altitude: '1,500 — 2,170 m',
        bestTime: 'July–October (migration) & January–February (calving in Serengeti)',
        overview:
          "The Mara reserve and its surrounding private conservancies are where you’ll find the highest big-cat density in Africa, the most reliable migration crossings and the most varied luxury lodging in East Africa.",
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
          "The classic 'elephants under Kilimanjaro' park — small, accessible, and home to some of Africa’s largest tuskers in front of an impossibly photogenic mountain backdrop.",
        image: '/images/parks/kenya/amboseli/amboseli-elephants.jpg',
        location: 'Southern Kenya',
        size: '392 km²',
        altitude: '1,100 — 1,200 m',
        bestTime: 'June–October & January–February',
        overview:
          "Amboseli is compact and easy to read — a swampy heart fed by Kilimanjaro’s snowmelt sustains hundreds of elephants year-round. The Tortilis and ol Donyo lodges deliver the experience at the highest level.",
        attractions: [
          {
            title: 'Big-Tusker Elephant Herds',
            body: "Among the world’s largest concentrations of giant-tusked elephants, easily observed from open vehicles and walking distance.",
            image: '/images/parks/kenya/amboseli/amboseli-elephants.jpg',
          },
          {
            title: 'Kilimanjaro Sundowners',
            body: 'Drinks and small bites at sunset with Africa’s highest peak as the backdrop — a non-negotiable Amboseli evening.',
            image: '/images/parks/kenya/amboseli/sundowner-on-observation-hill-overlooking-mt-kilimanjaro.jpg',
          },
          {
            title: 'Birdlife at the Swamps',
            body: "Amboseli’s permanent swamps host pelicans, flamingos, herons and over 400 bird species at the water year-round.",
            image: '/images/parks/kenya/amboseli/amboseli-waterhole.jpg',
          },
        ],
        activities: [
          {
            title: 'Stay at ol Donyo Lodge',
            body: "Great Plains' spectacular property in the Chyulu Hills with hide-walking, horseriding and Maasai cultural visits.",
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
          "A 9,500 km² conservancy mosaic north of Mount Kenya — home to half of Kenya’s black rhino, all of its Grevy’s zebras, and some of the most innovative community-led conservation work in Africa.",
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
            body: "The endangered Grevy’s zebra has its global stronghold across Laikipia and Samburu — distinctive and beautiful.",
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
          "The dry, dramatic north — home to the 'Samburu Five' (Grevy’s zebra, reticulated giraffe, gerenuk, beisa oryx and Somali ostrich), found nowhere else in Kenya.",
        image: '/images/parks/kenya/samburu/grevys-zebra-1.jpg',
        location: 'Northern Kenya',
        size: '165 km² (plus surrounding conservancies)',
        altitude: '800 — 1,250 m',
        bestTime: 'June–October & January–February',
        overview:
          "Samburu offers a completely different palette — red earth, doum palms, the Ewaso Ng’iro river, and species you won’t see in the Mara. Sasaab and Saruni Samburu deliver the safari at exceptional standards.",
        attractions: [
          {
            title: 'The Samburu Five',
            body: "Five iconic dry-country species — Grevy’s zebra, reticulated giraffe, gerenuk, beisa oryx and Somali ostrich — found together only in northern Kenya.",
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
            body: "The Safari Collection’s Moorish-inspired villa-style lodge above the Ewaso Ng’iro — vast open-air suites, plunge pools and one of the most distinctive properties in northern Kenya.",
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
            a: "It’s the ideal counterpoint to the Mara — opposite landscape, different species, a fraction of the vehicles. Most of our itineraries combine Samburu (2–3 nights) with the Mara or Laikipia.",
          },
          {
            q: 'Is it hot?',
            a: "Yes, Samburu is the warmest of Kenya’s classic safari regions — expect 30–35°C in the daytime. Lodges design around the heat with airy architecture, pools and siesta hours.",
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
          "Kenya’s largest park — a vast, red-earth wilderness famous for its 'red elephants' coated in Tsavo’s distinctive dust, and for raw, uncrowded wildness.",
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
            body: "Tsavo’s iron-rich red dust coats the elephants who bathe in it — yielding the iconic ochre-skinned giants the park is famous for. Herds along the Galana River are a sure sighting.",
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
            body: "Tsavo’s vast wilderness lends itself to walking with specialist guides — an evening hike to a fly-camp on the riverbank is one of the most authentic experiences in Kenya.",
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
            a: "Different. Sightings are less concentrated than the Mara, but you’ll have entire stretches of bush to yourself, and the elephants here are bigger, dustier, and far less photographed.",
          },
        ],
      },
    ],
    privilegedAccess: [
      {
        title: 'Hot-Air Balloon Safari at Sunrise',
        location: 'Masai Mara Private Conservancy, SW Kenya',
        body: 'An exclusively arranged early-morning balloon flight over private conservancy land — launching before the public balloon companies depart. You float in near-silence over lions, elephants, and golden grasslands, landing on the open plain for a private champagne bush breakfast as the African sun fully rises.',
        image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
      },
      {
        title: 'Anti-Poaching Unit Field Morning',
        location: 'Laikipia Private Conservancy, Central Kenya',
        body: 'Join a ranger team for a four-hour morning patrol across private conservancy land. You will track, observe, and learn about the front-line reality of Kenya’s wildlife protection — how technology, community informants, and ranger expertise combine to protect rhinos and elephants.',
        image: '/images/lodges/kenya/lakipia/elewana-kifaru-house/1770879317943whiterhino-elewanacar.jpg',
      },
      {
        title: 'Private Riverside Fly-Camp on the Ewaso Nyiro',
        location: 'Samburu National Reserve, N Kenya',
        body: 'A private one-night fly-camp on a sandbank beside the Ewaso Nyiro River — available to no more than two guests. Your personal ranger accompanies you from sunset, when elephant and crocodile patrol the opposite bank, through a night of river sounds, to dawn when the birds begin on the water.',
        image: '/images/parks/kenya/samburu/grevys-zebra-1.jpg',
      },
    ],
    lodges: [
      {
        name: 'Angama Mara',
        location: 'Mara Triangle, Masai Mara Conservancy',
        body: 'Suspended on the Rift Valley escarpment with the most dramatic Mara views available. Private conservancy access, exceptional guide team.',
        image: '/images/lodges/kenya/masai-mara/angama-mara/a-rocking-chair-safari.jpg',
      },
      {
        name: 'Mahali Mzuri',
        location: 'Mara North Conservancy',
        body: "Sir Richard Branson’s private camp — 12 tented suites on an exclusive conservancy with zero shared game drives, ever.",
        image: '/images/lodges/kenya/masai-mara/mahali-mzuri/bush-sundowners.jpg',
      },
      {
        name: 'Sasaab Lodge',
        location: 'Samburu District',
        body: 'Moroccan-influenced retreat on the Ewaso Nyiro River with private plunge pools overlooking elephant-rich riverine forest.',
        image: '/images/lodges/kenya/sasaab/images/aerial-view-of-sasaab.jpg',
      },
      {
        name: 'Segera Retreat',
        location: 'Laikipia Plateau',
        body: 'A 50,000-acre conservancy featuring Africa’s finest contemporary art collection and community conservation on an extraordinary scale.',
        image: '/images/lodges/kenya/lakipia/segera-retreat-2/17716019637244-segera-crookesandjackson-vl-2025-0688.jpg',
      },
      {
        name: 'Giraffe Manor',
        location: 'Nairobi',
        body: 'East Africa’s most iconic boutique hotel. Resident Rothschild giraffes appear at breakfast — the ultimate arrival or farewell experience.',
        image: '/images/lodges/kenya/nairobi/giraffe-manor/a-spot-of-tea-and-a-giraffe.jpg',
      },
      {
        name: 'The Emakoko',
        location: 'Nairobi National Park Edge',
        body: 'City convenience meets genuine wilderness — an ideal gateway or farewell property with direct access to Nairobi National Park.',
        image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
      },
    ],
    seoKeywords:
      'luxury Kenya safari, Masai Mara private conservancy, Great Migration luxury tour, Samburu exclusive camp, Laikipia rhino tracking safari, bespoke Kenya travel, Kenya hot-air balloon safari, private conservancy game drives',
    travelStats: {
      bestTime: 'Jul–Oct & Jan–Mar',
      duration: '8–12 Days',
      keyWildlife: 'Big Five · Wildebeest · Cheetah · Rhino',
      travelStyle: 'Fly-In · Private Conservancy · Tented Camps',
    },
    whyVisit: {
      intro:
        "Kenya is Africa's original safari destination — and for those who know where to look, it remains the continent's most rewarding. Private conservancies bordering the Masai Mara offer exclusivity that the national reserve cannot match.",
      bullets: [
        'Masai Mara — the greatest wildlife spectacle on earth, year-round',
        'Private conservancies — exclusive access, night drives, walking safaris',
        'Samburu — dry-country species found nowhere else in the region',
        'Laikipia Plateau — large-scale rhino and elephant conservation',
        'Giraffe Manor — one of the world’s most photographed properties',
        'Nairobi — a genuine cultural capital to open or close your journey',
      ],
      stats: [
        { number: '1,500', label: 'km² Masai Mara ecosystem' },
        { number: '7%', label: 'of Africa’s lion population' },
        { number: '60+', label: 'private conservancies' },
      ],
    },
    seasons: [
      {
        dates: 'Jul – Oct',
        name: 'The Great Migration',
        wildlife: 'Wildebeest Crossings · Lion · Leopard · Cheetah',
        description:
          'The Mara River crossings draw the wildebeest in their millions from Tanzania. This is the most dramatic wildlife spectacle on earth — and Kenya’s private conservancies give you front-row access.',
      },
      {
        dates: 'Jan – Mar',
        name: 'Dry Shoulder Season',
        wildlife: 'Resident Wildlife · Calving Herds · Predators',
        description:
          'Lower rainfall and excellent visibility make January to March outstanding for predator sightings. Laikipia and Samburu are at their best. Far fewer visitors than peak migration season.',
      },
      {
        dates: 'Apr – Jun',
        name: 'Long Green Season',
        wildlife: 'Migratory Birds · Newborn Animals · Lush Scenery',
        description:
          'The long rains bring a different kind of beauty — vivid green landscapes, abundant birdlife, and significantly lower lodge rates. An ideal time for a first Kenya safari at exceptional value.',
      },
    ],
    specialistQuote: {
      quote:
        "Kenya rewards those who choose to go beyond the reserve fence. In a private conservancy you have the landscape to yourself — no other vehicles, no fixed circuit. That is the Kenya most travellers never find.",
      author: 'Sarah Mwangi',
      role: 'Kenya Safari Specialist, Still Wild Safaris',
    },
    conservation: {
      intro:
        'Kenya’s private conservancies have reversed local wildlife decline through community-owned conservation. Every Still Wild Kenya itinerary supports anti-poaching, ranger training and school programmes.',
      stats: [
        { number: '60+', label: 'private conservancies' },
        { number: '25,000', label: 'Maasai community members benefiting' },
        { number: '1,100', label: 'black rhino in Kenya' },
      ],
      partners: [
        'Kenya Wildlife Service (KWS)',
        'Ol Pejeta Conservancy',
        'Mara Elephant Project',
        'Space for Giants',
      ],
    },
    countryFaqs: [
      {
        question: 'When is the best time to visit Kenya?',
        answer:
          'July to October offers the Great Migration river crossings in the Masai Mara — the most dramatic wildlife spectacle on earth. January to March is excellent for predator sightings with fewer visitors. Kenya is genuinely good year-round.',
      },
      {
        question: 'Do I need a visa to enter Kenya?',
        answer:
          'Kenya uses an Electronic Travel Authorisation (ETA) system. Most nationalities apply online before travel. We will walk you through the process as part of your pre-departure briefing.',
      },
      {
        question: 'What is the difference between the Masai Mara and a private conservancy?',
        answer:
          'The Masai Mara National Reserve is open to all licensed vehicles — popular crossings can attract 30+ safari vehicles. A private conservancy (Olare Motorogi, Naboisho, Ol Kinyei) bordering the reserve limits vehicles, allows night drives and off-road driving, and typically has exclusive camp access.',
      },
      {
        question: 'Can I combine Kenya and Tanzania?',
        answer:
          'Absolutely. A classic East Africa itinerary starts in Kenya’s Masai Mara, crosses into the Serengeti by light aircraft, continues to Ruaha or Nyerere, and ends in Zanzibar. We can design this as a seamless 14–18 day journey.',
      },
    ],
  },

  tanzania: {
    slug: 'tanzania',
    name: 'Tanzania',
    heroTitle: 'The Serengeti Eternal\nAfrica in Its Most Original State',
    heroSubtitle:
      "No country holds as much concentrated, uninterrupted wilderness as Tanzania. From the infinite Serengeti where 1.5 million wildebeest move in ancient circular rhythm, to the world’s largest intact volcanic caldera at Ngorongoro, the remote wild south, and the spice-scented Indian Ocean coast of Zanzibar — Tanzania is not merely a safari. It is the Earth in its most original state.",
    heroImage: '/images/destinations/tanzania/sayari-serengeti-elephant-walking-safari.jpg',
    exploreIntro:
      'From the Great Migration of the Serengeti to the remote river safaris of Nyerere, Tanzania offers the full spectrum of the African wild — curated through private concessions and exclusive camps.',
    parkSummary:
      "Tanzania’s national parks range from the world’s most famous plains to an island wilderness on Lake Victoria and Africa’s largest game reserve in the south. No two experiences are alike — and no other country offers quite this range in a single itinerary.",
    parkSummaryImage: '/images/destinations/tanzania/forest-walk-096.webp',
    parks: [serengetiPark, ngorongoroPark, selousPark, rubondoPark],
    privilegedAccess: [
      {
        title: 'Private Migration Crossing with Sayari Camp',
        location: 'Serengeti (Northern Mara River)',
        body: 'A Mara River crossing viewed from a private vehicle with just your guide — no queues, no competing vehicles. Sayari Camp positions guests based on daily herd intelligence from our partner rangers on the ground.',
        image: '/images/destinations/tanzania/sayari-game-drive-with-hyena-viewing1.jpg',
      },
      {
        title: 'Wild Dog Tracking with the Research Team',
        location: 'Nyerere National Park',
        body: 'Join a specialist researcher for a morning tracking the wild-dog packs of the Rufiji ecosystem — collared packs, telemetry equipment, and the kind of behavioural insight you cannot get from a standard game drive.',
        image: '/images/activities/game-drive/roho-ya-selous-wild-dogs.jpg',
      },
      {
        title: 'Rubondo Island Chimp Habituation Walk',
        location: 'Rubondo Island National Park',
        body: 'Access the chimp habituation programme with the island\'s resident researchers — a morning in the forest with the team, learning how a wild community is slowly brought into human company.',
        image: '/images/destinations/tanzania/rubondo-island-camp-chimp.jpg',
      },
    ],
    lodges: [
      {
        name: 'Singita Grumeti',
        location: 'Western Serengeti',
        body: 'A private concession of 350,000 acres with four distinct camps. Unmatched migration-season access across the entire Serengeti ecosystem.',
        image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.jpg',
      },
      {
        name: 'Nomad Tanzania Lamai',
        location: 'Northern Serengeti',
        body: 'Positioned in the migration corridor’s most productive crossing section — an intimate camp with exceptional big-cat and crossing sightings.',
        image: '/images/destinations/tanzania/sayari-game-drive-with-hyena-viewing1.jpg',
      },
      {
        name: 'Ngorongoro Crater Lodge',
        location: 'Ngorongoro Crater Rim',
        body: 'Three camps perched on the crater rim with butler service, open-fire boudoirs, and the crater floor unfolding 600 metres below your private veranda.',
        image: '/images/destinations/tanzania/dunia-view-from-the-main-area.jpg',
      },
      {
        name: 'Jongomero Camp',
        location: 'Ruaha National Park',
        body: 'Eight exclusive tented suites on the Jongomero River — wild dogs, lions, and elephant, with zero other camps in visible range.',
        image: '/images/activities/game-drive/roho-ya-selous-wild-dogs.jpg',
      },
      {
        name: 'Roho ya Selous',
        location: 'Nyerere National Park',
        body: 'Private sand-bank camp on the Rufiji River with boat safaris, walking safaris, and total seclusion inside Africa’s largest game reserve.',
        image: '/images/activities/big-five/roho-ya-selous-elephant.jpg',
      },
      {
        name: 'The Manta Resort',
        location: 'Pemba Island, Zanzibar Archipelago',
        body: "Africa’s legendary underwater room — a private floating suite anchored above a coral reef with the Indian Ocean as your entire horizon.",
        image: '/images/destinations/tanzania/rubondo-island-camp-beach.jpg',
      },
    ],
    seoKeywords:
      'luxury Tanzania safari, Serengeti private camp, Great Migration luxury tour, Ngorongoro crater exclusive access, Ruaha wild dog safari, Zanzibar luxury villa, southern Tanzania safari, bespoke Tanzania travel, Tanzania fly-camp',
    travelStats: {
      bestTime: 'Jun–Oct & Jan–Feb',
      duration: '10–14 Days',
      keyWildlife: 'Wildebeest · Lion · Elephant · Wild Dog',
      travelStyle: 'Fly-In · Tented Camps · Island',
    },
    whyVisit: {
      intro:
        "Tanzania is the only safari destination on earth where four of Africa's greatest wild landscapes — the Serengeti, Ngorongoro, Ruaha and Nyerere — exist within a single itinerary. Add the Indian Ocean islands of Zanzibar and Pemba, and you have the continent's most complete safari.",
      bullets: [
        'The Great Migration — 1.5 million wildebeest in perpetual seasonal circuit',
        'Ngorongoro Crater — the world’s largest intact volcanic caldera',
        'Ruaha & Nyerere — wild south, wild dogs, almost no other guests',
        'Zanzibar — spice coast, coral reefs, barefoot Indian Ocean luxury',
        'Year-round game viewing across four distinct ecosystems',
        'Fly-in infrastructure means seamless multi-park itineraries',
      ],
      stats: [
        { number: '30,000', label: 'km² Serengeti ecosystem' },
        { number: '1.5M', label: 'wildebeest migration' },
        { number: '4', label: 'UNESCO World Heritage Sites' },
      ],
    },
    seasons: [
      {
        dates: 'Jun – Oct',
        name: 'The Dry Season',
        image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.jpg',
        wildlife: 'Migration Crossings · Predators · All Big Five',
        description:
          'The premier safari season. Clear skies and sparse vegetation make wildlife viewing exceptional across all parks. Mara River crossings peak July–September in the northern Serengeti — one of nature’s most intense spectacles.',
      },
      {
        dates: 'Nov – Dec',
        name: 'Short Green Season',
        image: '/images/destinations/tanzania/dunia-game-drive.jpg',
        wildlife: 'Migratory Birds · Lush Landscapes · Newborn Calves',
        description:
          'Short rains transform the landscape to emerald. Far fewer guests, lower rates, and the arrival of thousands of migratory birds. The southern Serengeti sees the first calving action begin in December.',
      },
      {
        dates: 'Jan – Feb',
        name: 'The Calving Season',
        image: '/images/destinations/tanzania/sayari-lioness.jpg',
        wildlife: 'Wildebeest Calves · Cheetah · Lion · Hyena',
        description:
          'Roughly 8,000 wildebeest calves are born every day in the southern Serengeti. The concentration of predators — cheetah, lion, hyena — creates some of the most intense natural drama on earth.',
      },
    ],
    specialistQuote: {
      quote:
        "Tanzania is the only place on earth where the sheer scale of wildlife still takes your breath away, no matter how many times you have been. The Serengeti humbles you — and Zanzibar restores you.",
      author: 'James Kariuki',
      role: 'Senior Safari Specialist, Still Wild Safaris',
    },
    conservation: {
      intro:
        'Tanzania protects more land than almost any other African country. Every Still Wild itinerary contributes directly to anti-poaching, community ranger programmes and wildlife research.',
      stats: [
        { number: '38%', label: 'of Tanzania under conservation' },
        { number: '800+', label: 'bird species recorded' },
        { number: '4', label: 'UNESCO World Heritage Sites' },
      ],
      partners: [
        'Tanzania National Parks (TANAPA)',
        'Ruaha Carnivore Project',
        'African Wildlife Foundation',
        'Singita Grumeti Fund',
      ],
    },
    countryFaqs: [
      {
        question: 'When is the best time to see the Great Migration?',
        answer:
          'Mara River crossings peak July–September in the northern Serengeti. For the calving season — 8,000 calves per day — visit January–February in the southern Serengeti. Tanzania offers outstanding game viewing year-round.',
      },
      {
        question: 'Do I need a visa for Tanzania?',
        answer:
          'Most nationalities require a visa. We recommend applying for an e-Visa online before arrival. Your trip manager will guide you through current requirements for your nationality.',
      },
      {
        question: 'How do you get around Tanzania on safari?',
        answer:
          'We build all Tanzania itineraries around fly-in travel — light aircraft connecting the Serengeti, Ruaha, Nyerere and the islands. This eliminates long road transfers and maximises time in the wild.',
      },
      {
        question: 'Can I combine a Tanzania safari with Zanzibar?',
        answer:
          'Absolutely — we strongly recommend it. A classic Still Wild itinerary pairs 7 nights in the Serengeti and Ruaha with 3 nights on Zanzibar or Pemba Island. Bush to barefoot ocean is an unmatched contrast.',
      },
      {
        question: 'What is the best lodge for Ngorongoro Crater?',
        answer:
          'Ngorongoro Crater Lodge sits on the crater rim with butler service and views 600 metres down to the crater floor. We combine it with an early-morning private descent — arriving before the day-trippers — for the definitive crater experience.',
      },
    ],
  },
}
