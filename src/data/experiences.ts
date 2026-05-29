export type ExperienceHighlight = { title: string; body: string }
export type ExperienceLocation = { name: string; country: string; description: string; image?: string }

export type Experience = {
  slug: string
  badge: string
  title: string
  shortTitle: string
  excerpt: string
  cta: string
  image: string
  tagline: string
  intro: string[]
  highlights: ExperienceHighlight[]
  locations: ExperienceLocation[]
  gallery: string[]
}

export const experiences: Experience[] = [
  {
    slug: 'gorilla-trekking',
    badge: 'Primate',
    title: 'Gorilla Trekking: An Intimate Encounter',
    shortTitle: 'Gorilla Trekking',
    excerpt:
      'Journey into the mist-shrouded forests of Uganda and Rwanda for a profound, luxury encounter with mountain gorillas.',
    cta: 'Explore Gorilla Trekking',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
    tagline:
      'A guided, hour-long audience with one of Earth’s last 1,000 mountain gorillas — in the mountains where they were first protected.',
    intro: [
      'A mountain gorilla trek is unlike any other wildlife encounter. After a briefing at the park headquarters, a small group of no more than eight travellers sets off on foot, led by trackers who have followed your assigned family since dawn. The hike can take anywhere from an hour to most of a day, climbing through bamboo, vines and equatorial mist.',
      'When you reach the family, the protocol is hushed and respectful: seven metres of distance, no flash, and exactly sixty minutes in their presence. What follows is an experience guests describe more like a quiet meeting than a sighting — a silverback dozing, juveniles tumbling, a mother nursing — entirely unbothered by your presence.',
    ],
    highlights: [
      {
        title: 'Permits Secured in Advance',
        body: 'We hold a small allocation of Bwindi and Volcanoes permits each season — including the rare habituation experience permits in Uganda for guests who want four hours instead of one.',
      },
      {
        title: 'Luxury Lodges at the Trailhead',
        body: 'Stays at Bisate Lodge, Sabyinyo Silverback, One&Only Gorilla’s Nest or Bwindi Lodge — each within a short drive of the park gate, so you trek rested and return to a hot bath and a fire.',
      },
      {
        title: 'Private Porters & Guides',
        body: 'Every guest is paired with a personal porter (carrying your pack, assisting on slopes), and you travel with your own Still Wild Safaris guide for the entire safari.',
      },
    ],
    locations: [
      {
        name: 'Bwindi Impenetrable Forest',
        country: 'Uganda',
        description:
          'Home to nearly half of the world’s mountain gorillas. Four sectors — Buhoma, Ruhija, Rushaga, Nkuringo — each with different habituated families and varying trek difficulty.',
        image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
      },
      {
        name: 'Volcanoes National Park',
        country: 'Rwanda',
        description:
          'The setting of Dian Fossey’s research. Treks begin at high altitude with views of the Virunga volcanoes, and lodges sit minutes from the park boundary.',
        image: '/images/activities/gorilla-trekking/27-virunga-lodge-goriila-rf-0464.jpg',
      },
      {
        name: 'Mgahinga Gorilla Park',
        country: 'Uganda',
        description:
          'The quiet alternative — one habituated family, dramatic Virunga scenery and the chance to combine gorilla and golden monkey treks in one day.',
        image: '/images/activities/gorilla-trekking/34-mount-gahinga-lodge-gorilla.jpg',
      },
    ],
    gallery: [
      '/images/activities/gorilla-trekking/27-virunga-lodge-goriila-rf-0464.jpg',
      '/images/activities/gorilla-trekking/30-mount-gahinga-lodge-gorilla.jpg',
      '/images/activities/gorilla-trekking/31-mount-gahinga-lodge-gorilla.jpg',
      '/images/activities/gorilla-trekking/32-mount-gahinga-lodge-gorilla.jpg',
    ],
  },
  {
    slug: 'chimpanzee-trekking',
    badge: 'Primate',
    title: 'Chimpanzee Trekking: Forest Primate Adventures',
    shortTitle: 'Chimpanzee Trekking',
    excerpt:
      "Witness the captivating intelligence of chimpanzees in their natural habitat in Uganda's Kibale or Rwanda's Nyungwe Forest.",
    cta: 'Discover Chimpanzee Expeditions',
    image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
    tagline:
      'Track our closest living relatives through equatorial forest in Kibale, Nyungwe and Kyambura — where their calls are heard long before they are seen.',
    intro: [
      'Chimpanzee tracking is loud, kinetic and fast — the opposite of a gorilla encounter. Habituated chimp communities of 80 to 150 individuals roam over wide ranges, and your guides use audible cues — pant-hoots, drumming, branch-cracking — to converge on the group.',
      'Once with them, the forest theatre unfolds: juveniles wrestling overhead, adults grooming on the trail, hunting parties moving fast through the canopy. Standard treks give one hour with the chimps; habituation experiences in Kibale offer a full morning with researchers as they record behaviour.',
    ],
    highlights: [
      {
        title: 'Habituation Experience',
        body: 'In Kibale, join the habituation team for four to six hours — far quieter, far closer access, and limited to four guests per day.',
      },
      {
        title: 'Forest Lodges',
        body: 'Stay at Kyaninga, Ndali or Kibale Lodge in Uganda; One&Only Nyungwe House in Rwanda — all built into the forest with vast verandas overlooking it.',
      },
      {
        title: 'Twin-Primate Combinations',
        body: 'We design itineraries that pair chimps with mountain gorillas or golden monkeys, bridged by short scenic flights to save on travel days.',
      },
    ],
    locations: [
      {
        name: 'Kibale Forest',
        country: 'Uganda',
        description:
          'The continent’s primate capital — 13 species of primate in one forest, and the world’s most reliable chimpanzee tracking, with habituation experiences available.',
        image: '/images/activities/gorilla-trekking/18-kibale-lodge-chimpanzee-tadevs-vs-08183.jpg',
      },
      {
        name: 'Nyungwe Forest',
        country: 'Rwanda',
        description:
          'A montane rainforest with a canopy walkway, 13 primate species, and exceptional birding. Chimp treks can be steep but rewarded with vast forest views.',
        image: '/images/activities/gorilla-trekking/6-kibale-lodge-chimpanzee-tadevs-vs-08101.jpg',
      },
      {
        name: 'Kyambura Gorge',
        country: 'Uganda',
        description:
          'A dramatic forested canyon in Queen Elizabeth National Park — combine a half-day chimp trek with afternoon game drives in the same park.',
        image: '/images/activities/gorilla-trekking/7-kibale-lodge-chimpanzee-tadevs-vs-08284.jpg',
      },
    ],
    gallery: [
      '/images/destinations/tanzania/chimp-habituation-project1.jpg',
      '/images/destinations/tanzania/chimp-habituaion-project1.jpg',
      '/images/activities/gorilla-trekking/6-kibale-lodge-chimpanzee-tadevs-vs-08101.jpg',
      '/images/activities/gorilla-trekking/7-kibale-lodge-chimpanzee-tadevs-vs-08284.jpg',
    ],
  },
  {
    slug: 'golden-monkey-trekking',
    badge: 'Primate',
    title: 'Golden Monkey Trekking: Rare & Vibrant',
    shortTitle: 'Golden Monkey Trekking',
    excerpt:
      "Seek out the elusive and vibrant golden monkeys in Uganda's Mgahinga or Rwanda's Volcanoes National Park for a captivating wildlife experience.",
    cta: 'Learn About Golden Monkey Treks',
    image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
    tagline:
      'A bright-orange Old World primate found only on the slopes of the Virunga volcanoes — fast, photogenic and often paired with a gorilla trek.',
    intro: [
      'Golden monkeys live in troops of up to 80 in the bamboo zones of the Virungas. They are quick, social and far more visible than gorillas — leaping between bamboo, feeding low, and largely unbothered by visitors.',
      'A trek is typically two to four hours, gentler than a gorilla hike, and many guests combine it with a gorilla trek the previous day. Photographers love them — the bright orange against bamboo green produces some of the most striking primate imagery in Africa.',
    ],
    highlights: [
      {
        title: 'Easier Trekking',
        body: 'Shorter and lower-altitude than gorilla treks — a good option for guests building up to (or recovering from) a tougher trek.',
      },
      {
        title: 'Two-Trek Days',
        body: 'Available in Mgahinga (Uganda) and Volcanoes (Rwanda). With careful scheduling we arrange gorillas and goldens on consecutive days from the same lodge.',
      },
      {
        title: 'Photography Permits',
        body: 'We secure photography-priority permits and arrange dedicated time with the troop when the light is right.',
      },
    ],
    locations: [
      {
        name: 'Mgahinga Gorilla Park',
        country: 'Uganda',
        description:
          'The quieter of the two — habituated troops on the slopes of Sabyinyo and Gahinga, accessed from Mount Gahinga Lodge.',
        image: '/images/activities/gorilla-trekking/35-mount-gahinga-lodge-golden-monkey.jpg',
      },
      {
        name: 'Volcanoes National Park',
        country: 'Rwanda',
        description:
          'Larger habituated troops at the base of Karisimbi and Bisoke, easy to combine with gorilla treks from Bisate or Sabyinyo Silverback lodges.',
        image: '/images/activities/gorilla-trekking/36-mount-gahinga-lodge-golden-monkey.jpg',
      },
    ],
    gallery: [
      '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
      '/images/activities/gorilla-trekking/35-mount-gahinga-lodge-golden-monkey.jpg',
      '/images/activities/gorilla-trekking/36-mount-gahinga-lodge-golden-monkey.jpg',
      '/images/activities/gorilla-trekking/37-mount-gahinga-lodge-golden-monkey.jpg',
    ],
  },
  {
    slug: 'white-water-rafting',
    badge: 'Adventure',
    title: 'White Water Rafting: Nile Adrenaline',
    shortTitle: 'White Water Rafting',
    excerpt:
      'Conquer world-class rapids at the source of the Nile in Jinja, Uganda, with luxury rafting packages.',
    cta: 'Plan Your Rafting Adventure',
    image: '/images/parks/rwanda/akagera/1738327984197-magashi-boating-12-24-tc-021.jpg',
    tagline:
      'Grade V rapids at the source of the world’s longest river — paired with luxury riverside lodges and private guides.',
    intro: [
      'Jinja, where the White Nile leaves Lake Victoria, is one of three places on Earth that offers commercial Grade V rafting. We work with the most experienced safety-rated operators on the river, and arrange private boats with no more than four guests plus crew.',
      'Half-day and full-day options are available, all with riverside lunches, hot showers afterwards, and the option to combine with kayaking, sunset boat cruises or a flat-water family-friendly section.',
    ],
    highlights: [
      {
        title: 'Private Boats',
        body: 'We book entire rafts so your group runs the river at your pace, with your own guide — no shuffling between strangers.',
      },
      {
        title: 'Riverside Stays',
        body: 'Wildwaters Lodge sits on a private island in the middle of the rapids — fall asleep to the sound of the cataracts.',
      },
      {
        title: 'Mixed-Ability Options',
        body: 'Combine adrenaline runs with a calm family section for non-paddlers, then meet for a Nile-side lunch.',
      },
    ],
    locations: [
      {
        name: 'Jinja & the Source of the Nile',
        country: 'Uganda',
        description:
          'Grade III–V rapids over a long stretch of warm water — runnable year-round, with the biggest water in March–May and October–November.',
      },
    ],
    gallery: [
      '/images/parks/rwanda/akagera/1738327984197-magashi-boating-12-24-tc-021.jpg',
      '/images/parks/rwanda/akagera/1738327984200-magashi-boating-12-24-tc-026.jpg',
      '/images/parks/rwanda/akagera/1738331396380-magashi-boating-12-24-tc-029.jpg',
    ],
  },
  {
    slug: 'boat-cruise-safaris',
    badge: 'Water Safari',
    title: 'Boat Cruise Safaris: Serene Wildlife Views',
    shortTitle: 'Boat Cruise Safaris',
    excerpt:
      "Glide along Uganda's Kazinga Channel, Murchison Falls, or Kenya's Lake Naivasha for intimate wildlife viewing.",
    cta: 'Explore Boat Cruise Safaris',
    image: '/images/activities/game-drive/boating-safari-hippo-spot2.jpg',
    tagline:
      'A different vantage on the same wildlife — slow, silent, water-level, and unmatched for elephants, hippos and waterbirds.',
    intro: [
      'Africa’s great rivers and lakes concentrate wildlife along their banks. A boat safari brings you within metres of an elephant herd drinking, or a yawning hippo, or a fish eagle striking — angles that simply aren’t available from a vehicle.',
      'We book private boats wherever possible (typically four to eight guests), with your own skipper-guide and timing built around golden hour. Cruises pair perfectly with morning or afternoon game drives in the same park.',
    ],
    highlights: [
      {
        title: 'Private Vessels',
        body: 'Avoid the larger 30-seat cruisers — our boats hold your group only, with binoculars, drinks and a guide who knows the residents.',
      },
      {
        title: 'Golden-Hour Timing',
        body: 'We schedule cruises for late afternoon, when wildlife converges on the water and the light is soft.',
      },
      {
        title: 'Specialist Birding',
        body: 'Our skipper-guides are some of the best birders in their parks — bring a list, leave with surprises.',
      },
    ],
    locations: [
      {
        name: 'Kazinga Channel',
        country: 'Uganda',
        description:
          '32 km of water linking Lake Edward and Lake George — Africa’s densest hippo and elephant concentration along a single waterway.',
      },
      {
        name: 'Murchison Falls (Victoria Nile)',
        country: 'Uganda',
        description:
          'A cruise to the base of the falls, watching elephants, crocodiles and a stunning array of birds.',
      },
      {
        name: 'Lake Naivasha',
        country: 'Kenya',
        description:
          'Hippos, fish eagles and Crescent Island game walks — a peaceful Rift Valley counterpoint to the Mara.',
      },
    ],
    gallery: [
      '/images/activities/game-drive/boating-safari-hippo-spot2.jpg',
      '/images/activities/game-drive/boating-safari-roho1.jpg',
      '/images/parks/rwanda/akagera/1738327984198-magashi-boating-12-24-tc-022.jpg',
    ],
  },
  {
    slug: 'hot-air-balloon',
    badge: 'Aerial',
    title: 'Hot Air Balloon Safaris: Sky-High Spectacle',
    shortTitle: 'Hot Air Balloon Safaris',
    excerpt:
      'Drift silently above the Serengeti or Masai Mara at sunrise, ending in a celebratory bush breakfast.',
    cta: 'Book Your Balloon Experience',
    image: '/images/activities/game-drive/guest-sundown.jpg',
    tagline:
      'A predawn lift-off, a silent hour over open plains, and a sparkling-wine breakfast laid out beneath an acacia.',
    intro: [
      'A balloon safari is a ritual: a 4am wake-up, a drive in the dark to the launch site, the burner lighting the inside of the balloon as the sky greys. Then you’re up — at first low over the dew-wet grass, then climbing for a wider view as the sun crests the horizon.',
      'Drift time is roughly an hour. On landing, a full bush breakfast — eggs, pastries, fresh fruit, sparkling wine, coffee — is laid out under acacias, often with a giraffe or two as company.',
    ],
    highlights: [
      {
        title: 'Migration Months',
        body: 'In the Serengeti and Mara, balloon flights during the great migration months (July–October in the Mara, December–March in southern Serengeti) often pass over enormous herds.',
      },
      {
        title: 'Two-Guest Baskets',
        body: 'On request we book private compartments so couples don’t share a basket — at a premium, but worth it.',
      },
      {
        title: 'Photographer-Friendly',
        body: 'Pilots position the balloon for the light and the herds; longer flights and aerial-photography priority can be arranged.',
      },
    ],
    locations: [
      {
        name: 'Serengeti National Park',
        country: 'Tanzania',
        description:
          'Launch sites in the central and southern Serengeti — best views over the calving grounds in February.',
      },
      {
        name: 'Masai Mara',
        country: 'Kenya',
        description:
          'Sunrise over the Mara plains, with optimal balloon-and-migration overlaps in August and September.',
      },
    ],
    gallery: [
      '/images/activities/game-drive/guest-sundown.jpg',
      '/images/activities/game-drive/cocktail.jpg',
      '/images/activities/game-drive/decking.jpg',
    ],
  },
  {
    slug: 'cultural-experiences',
    badge: 'Culture',
    title: 'Cultural & Community Experiences: The Heart of Africa',
    shortTitle: 'Cultural Experiences',
    excerpt:
      "Immerse yourself in East Africa's living cultures — Batwa, Maasai, Karamojong and many more.",
    cta: 'Discover Cultural Journeys',
    image: '/images/activities/game-drive/cocktail.jpg',
    tagline:
      'Authentic, dignified time with communities — beyond the souvenir-stall stereotype, with profit returning to the people you meet.',
    intro: [
      'A proper cultural visit is not a performance. We work only with community-led programmes where the people you meet have invited visitors on their own terms — and where revenue funds schools, clinics and conservation.',
      'These range from a half-day Batwa forest walk in Mgahinga to a multi-day Maasai stay in a private conservancy, joining herders by day and elders around the fire at night.',
    ],
    highlights: [
      {
        title: 'Community-Owned',
        body: 'Every programme on our list is run, staffed and profited by the community itself.',
      },
      {
        title: 'Translator-Guides',
        body: 'You travel with a local guide who facilitates conversation, not a tour script.',
      },
      {
        title: 'Multi-Day Stays',
        body: 'Where guests want depth, we arrange overnight programmes in community-built lodges and mobile camps.',
      },
    ],
    locations: [
      {
        name: 'Batwa Communities',
        country: 'Uganda',
        description:
          'Forest people displaced from Bwindi and Mgahinga — visit traditional homesteads, herbal-medicine demonstrations and a powerful storytelling session.',
      },
      {
        name: 'Maasai Conservancies',
        country: 'Kenya',
        description:
          'Stays in the Mara, Laikipia or Amboseli conservancies, hosted by Maasai owners who lease the land to safari operators.',
      },
      {
        name: 'Karamojong of Kidepo',
        country: 'Uganda',
        description:
          'A remote, rarely-visited pastoralist culture in northeast Uganda — for travellers wanting somewhere genuinely off the map.',
      },
    ],
    gallery: ['/images/activities/game-drive/cocktail.jpg', '/images/activities/game-drive/picnic.jpg'],
  },
  {
    slug: 'helicopter-safaris',
    badge: 'Aerial',
    title: 'Helicopter Safaris: Unrivaled Access',
    shortTitle: 'Helicopter Safaris',
    excerpt:
      "Private aerial tours and remote landings across East Africa's most spectacular landscapes.",
    cta: 'Plan a Helicopter Safari',
    image: '/images/activities/helicopter-rwanda/1000045751.jpg',
    tagline:
      'Land on a crater rim. Picnic beside a lake no road reaches. Photograph the migration from 200ft.',
    intro: [
      'A helicopter doesn’t replace a safari — it unlocks the parts you’d otherwise never see. From the rim of Nyiragongo to the high lakes of the Virungas, our pilots fly Robinson R44s and Bell 407s with experienced safari guides on board.',
      'Helicopter days are bespoke — anywhere from a 30-minute scenic flight to multi-day adventures landing for fly-camp lunches, sundowners on crater ridges, or doorless photography sorties over Lake Magadi.',
    ],
    highlights: [
      {
        title: 'Doors-Off Flights',
        body: 'For photographers, we arrange doors-off configurations and choreographed flying lines.',
      },
      {
        title: 'Hidden-Lake Picnics',
        body: 'Land at lakes that road vehicles can’t reach — Lake Magadi, Bisoke crater, the high tarns of Mount Kenya.',
      },
      {
        title: 'Add-On Days',
        body: 'A single helicopter day inserted into a road safari turns a good itinerary into a great one.',
      },
    ],
    locations: [
      {
        name: 'Virunga Volcanoes',
        country: 'Rwanda',
        description:
          'The most photographed flight in Africa — circling Karisimbi, Bisoke and Sabyinyo with the Albertine Rift on the horizon.',
      },
      {
        name: 'Northern Kenya',
        country: 'Kenya',
        description:
          'The Suguta Valley, Lake Turkana, Mount Kenya and Lake Magadi — vast, remote, helicopter-only country.',
      },
    ],
    gallery: [
      '/images/activities/helicopter-rwanda/1000045751.jpg',
      '/images/activities/helicopter-rwanda/1000045745.jpg',
      '/images/activities/helicopter-rwanda/1000045744.jpg',
    ],
  },
  {
    slug: 'fly-in-safaris',
    badge: 'Aerial',
    title: 'Fly-In Safaris: Seamless & Scenic',
    shortTitle: 'Fly-In Safaris',
    excerpt:
      'Private bush flights to opulent lodges and aerial views of iconic national parks.',
    cta: 'Arrange a Fly-In Safari',
    image: '/images/activities/helicopter-rwanda/1000045745.jpg',
    tagline:
      'Light aircraft hops between parks — turning a 10-hour drive into a 45-minute window seat.',
    intro: [
      'East Africa has one of the most developed bush-aviation networks on the planet. Most major parks have one or more airstrips, and operators like Auric Air, Coastal Aviation, Aerolink and Akagera Aviation connect them with light aircraft hops, often multiple times a day.',
      'A fly-in safari is the simplest way to combine very distant parks — and the most comfortable. Bags go in the hold, you watch the wildlife below, and the next lodge’s vehicle is waiting at the strip.',
    ],
    highlights: [
      {
        title: 'Time, Recovered',
        body: 'Two parks in a week is realistic by air, where it would mean three days of drives by road.',
      },
      {
        title: 'Smaller Aircraft',
        body: 'Most flights are 6-12 seat Cessna Caravans — quiet, low-altitude and great for spotting from the air.',
      },
      {
        title: 'Private Charters',
        body: 'For groups, we arrange private charters with custom routings and timings — no fixed schedules.',
      },
    ],
    locations: [
      {
        name: 'Northern Tanzania Circuit',
        country: 'Tanzania',
        description:
          'Arusha → Tarangire → Serengeti → Ngorongoro by air — each leg under an hour.',
      },
      {
        name: 'Kenya Mara & North',
        country: 'Kenya',
        description:
          'Wilson Airport in Nairobi to the Mara, Laikipia, Samburu and the Northern Frontier — daily scheduled flights.',
      },
    ],
    gallery: [
      '/images/activities/helicopter-rwanda/1000045745.jpg',
      '/images/activities/helicopter-rwanda/1000045744.jpg',
      '/images/activities/helicopter-rwanda/1000045732.jpg',
    ],
  },
  {
    slug: 'walking-safaris',
    badge: 'On Foot',
    title: 'Walking Safaris: Intimate Wild Encounters',
    shortTitle: 'Walking Safaris',
    excerpt:
      'Guided by expert armed rangers through Laikipia or Selous to track wildlife on foot.',
    cta: 'Embark on a Walking Safari',
    image: '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.jpg',
    tagline:
      'Read tracks at dawn, watch a leopard from 30m on foot, sleep at a mobile fly-camp lit by lanterns.',
    intro: [
      'The walking safari is the original safari. Before the vehicle, this was how it was done — and on foot, the bush takes on detail invisible from a car: tracks, dung, scent, sound.',
      'We work with senior walking guides — most with armed-ranger backup — in the conservancies of Laikipia, Selous and Loisaba. Walks range from a half-day at a single lodge to multi-day point-to-point traverses with mobile fly-camps.',
    ],
    highlights: [
      {
        title: 'Senior Guides',
        body: 'Only the most experienced guides lead walks — many with 20+ years of bush time and rifle certification.',
      },
      {
        title: 'Mobile Fly-Camps',
        body: 'Multi-day walks include lightweight tented camps set up ahead of your arrival each evening.',
      },
      {
        title: 'Specialty Tracking',
        body: 'On request, dedicated tracking days with conservation researchers — wild dog, cheetah, rhino.',
      },
    ],
    locations: [
      {
        name: 'Laikipia',
        country: 'Kenya',
        description:
          'High-altitude plateau north of Mount Kenya — superb walking country with wildlife including elephant, giraffe, lion and rhino.',
      },
      {
        name: 'Selous (Nyerere) Game Reserve',
        country: 'Tanzania',
        description:
          'Vast and wild — walking safaris from Roho ya Selous and mobile camps along the Rufiji.',
      },
    ],
    gallery: [
      '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.jpg',
      '/images/activities/walking-safari/1752763546179-wildwatch-africa-kenya-suyian-damen-pheiffer-grevy-2339-s-zebra-01.jpg',
      '/images/activities/walking-safari/1752763546180-wildwatch-africa-kenya-suyian-damen-pheiffer-lion-pride-on-the-open-plains-07.jpg',
    ],
  },
  {
    slug: 'classic-game-drives',
    badge: 'Wildlife',
    title: 'Classic Game Drives: The Quintessential Safari',
    shortTitle: 'Classic Game Drives',
    excerpt:
      'Private 4×4s and expert guides through Serengeti, Masai Mara, or Ngorongoro Crater.',
    cta: 'Book a Classic Game Drive',
    image: '/images/activities/game-drive/asilia-roho-2017-1-1.jpg',
    tagline:
      'Two drives a day in a private 4×4, with the right guide, in the right park, at the right time.',
    intro: [
      'The classic safari is built around two game drives a day — typically four to five hours each, sandwiching a bush breakfast or a midday rest at the lodge.',
      'What separates a great game drive from a forgettable one is almost always the guide. We work with a hand-picked roster of senior guides across our preferred parks — many of them silver-level guides, several of them gold.',
    ],
    highlights: [
      {
        title: 'Private Vehicles',
        body: 'A private 4×4 with your own guide is standard for every itinerary we design — never shared rotations.',
      },
      {
        title: 'Hand-Picked Guides',
        body: 'We name guides at the proposal stage and lock them in months ahead for the parks they know best.',
      },
      {
        title: 'All-Day Drives',
        body: 'For special interests, we plan all-day drives with picnic lunches in pristine corners far from camp.',
      },
    ],
    locations: [
      {
        name: 'Serengeti',
        country: 'Tanzania',
        description:
          'The greatest game-viewing area on Earth — 14,750 km² of grasslands, woodlands and the heart of the great migration.',
      },
      {
        name: 'Masai Mara',
        country: 'Kenya',
        description:
          'The Mara’s open plains and high cat densities. Stay in private conservancies for off-road and night driving.',
      },
      {
        name: 'Ngorongoro Crater',
        country: 'Tanzania',
        description:
          'A natural wildlife amphitheatre with the densest predator population in Africa — and the only place to reliably see all of the Big Five in a single drive.',
      },
    ],
    gallery: [
      '/images/activities/game-drive/asilia-roho-2017-1-1.jpg',
      '/images/activities/game-drive/asilia-roho-2017-17-1.jpg',
      '/images/activities/game-drive/asilia-roho-2017-49-1.jpg',
      '/images/activities/game-drive/leopard-singita-sabi-sand-ross-couper-421-2.jpg',
    ],
  },
  {
    slug: 'night-game-drives',
    badge: 'Wildlife',
    title: 'Night Game Drives: Unveiling Nocturnal Wonders',
    shortTitle: 'Night Game Drives',
    excerpt:
      'Spot elusive nocturnal predators with expert trackers and specialised equipment.',
    cta: 'Explore Night Game Drives',
    image: '/images/activities/game-drive/night-skies-singita-sabi-sand-ross-couper-12.jpg',
    tagline:
      'A red-filtered spotlight, a sundowner gin, and a different bush entirely after the sun goes down.',
    intro: [
      'National parks across East Africa close their gates at sunset — but private conservancies don’t. That’s where the night drive happens: the same animals you saw at noon are doing different things, and the bush is full of species you simply won’t encounter by day.',
      'Aardvark, pangolin, civet, genet, leopard hunting in the dark — every drive is genuinely a roll of the dice. The set-up is always the same: a tracker on a spotter seat at the front, a red-filtered spotlight, and a vehicle moving slowly with as little engine noise as possible.',
    ],
    highlights: [
      {
        title: 'Private-Conservancy Only',
        body: 'We arrange night drives in Mara conservancies, Laikipia and Selous — never in parks where they’re forbidden.',
      },
      {
        title: 'Trained Spotters',
        body: 'Drives always run with a dedicated spotter on the front seat in addition to your guide.',
      },
      {
        title: 'Red-Filtered Lights',
        body: 'Our partners use red-filter spotlights, far less disruptive to nocturnal wildlife than white light.',
      },
    ],
    locations: [
      {
        name: 'Mara Conservancies',
        country: 'Kenya',
        description:
          'Mara North, Olare Motorogi, Naboisho — night drives included with every conservancy stay.',
      },
      {
        name: 'Laikipia',
        country: 'Kenya',
        description:
          'Some of the most reliable leopard and aardvark sightings in Africa, often on night drives from Loisaba or Borana.',
      },
    ],
    gallery: [
      '/images/activities/game-drive/night-skies-singita-sabi-sand-ross-couper-12.jpg',
      '/images/activities/game-drive/night-skies-singita-sabi-sand-ross-couper-2.jpg',
      '/images/activities/game-drive/leopard-singita-sabi-sand-ross-couper-421-2.jpg',
    ],
  },
  {
    slug: 'wellness-spa',
    badge: 'Wellness',
    title: 'Wellness & Spa Retreats: Safari Serenity',
    shortTitle: 'Wellness Retreats',
    excerpt:
      'Yoga on savannah decks, indigenous spa treatments, and full retreats inside your safari.',
    cta: 'Discover Wellness Retreats',
    image: '/images/destinations/tanzania/kite-in-lodge1.jpg',
    tagline:
      'A massage after a morning drive. Yoga on the deck at first light. Slow days, when slow is the right speed.',
    intro: [
      'Some safaris are built for adventure, some for rest — and a great many guests want both. We pair high-activity safari days with lodges that have proper spas, qualified therapists and outdoor yoga decks.',
      'On request, we add resident wellness practitioners to a private safari — yoga teachers, masseurs, sound-bath facilitators — who travel with you for the duration of the trip.',
    ],
    highlights: [
      {
        title: 'Top-Tier Spas',
        body: 'Singita, Bisate, Mara Plains and Segera all run spa programmes worth the trip on their own.',
      },
      {
        title: 'Resident Practitioners',
        body: 'For multi-day stays, we can bring a yoga teacher or massage therapist as part of your travelling team.',
      },
      {
        title: 'Quiet Itineraries',
        body: 'Where you want it, we’ll design itineraries that simply move less — one lodge, deep stays, no rush.',
      },
    ],
    locations: [
      {
        name: 'Segera Retreat',
        country: 'Kenya',
        description:
          'A 50,000-acre Laikipia conservancy with a holistic wellness programme designed in.',
      },
      {
        name: 'Bisate Lodge',
        country: 'Rwanda',
        description:
          'Forest spa, in-room massages and a programme of gentle hikes between gorilla treks.',
      },
    ],
    gallery: ['/images/destinations/tanzania/kite-in-lodge1.jpg', '/images/activities/big-five/singita-boulders-lodge-27.jpg'],
  },
  {
    slug: 'private-island-escapes',
    badge: 'Coastal',
    title: 'Private Island Escapes: Coastal Paradise',
    shortTitle: 'Private Island Escapes',
    excerpt:
      'Marine safaris, private beach dinners, and bespoke luxury in pristine coastal havens.',
    cta: 'Plan a Private Island Escape',
    image: '/images/destinations/tanzania/rubondo-island-camp-beach.jpg',
    tagline:
      'A bush-and-beach itinerary done right — the safari for the wildlife, the island for everything that comes after.',
    intro: [
      'Most safaris benefit from a few coastal days at the end — slowing down, sleeping in, drying out. We work with private-island and beach properties on Lamu, Manda, Mafia, Mnemba and Pemba, as well as Rubondo Island inside Lake Victoria.',
      'Bush-and-beach itineraries are some of the most popular journeys we plan — and the easiest to extend or shrink based on how the safari has gone.',
    ],
    highlights: [
      {
        title: 'Private Islands',
        body: 'Whole-island bookings at Mnemba, Mafia and Manda Bay are possible — for groups wanting total seclusion.',
      },
      {
        title: 'Marine Safaris',
        body: 'Snorkelling with whale sharks at Mafia, diving Pemba’s walls, swimming with dolphins off Lamu.',
      },
      {
        title: 'Direct Bush-to-Beach Flights',
        body: 'Single-aircraft connections from the Mara, Serengeti or Ruaha straight to the coast — no Nairobi or Dar layovers.',
      },
    ],
    locations: [
      {
        name: 'Mnemba Island',
        country: 'Tanzania (Zanzibar)',
        description:
          'A 12-bed private island ringed with reef — the gold standard of East African beach lodges.',
      },
      {
        name: 'Manda Bay',
        country: 'Kenya (Lamu Archipelago)',
        description:
          'A laid-back family-favourite property on a quiet bay — dhow sailing, fishing and tidal-flat picnics.',
      },
      {
        name: 'Rubondo Island',
        country: 'Tanzania (Lake Victoria)',
        description:
          'A freshwater alternative — forested island, introduced chimpanzees, tiger fish and quiet beaches.',
      },
    ],
    gallery: [
      '/images/destinations/tanzania/rubondo-island-camp-beach.jpg',
      '/images/destinations/tanzania/rubondo-island-camp-chimp.jpg',
      '/images/destinations/tanzania/rubondo-island-camp-hippos.jpg',
    ],
  },
  {
    slug: 'conservation-safaris',
    badge: 'Conservation',
    title: 'Conservation & Research Safaris: Impactful Journeys',
    shortTitle: 'Conservation Safaris',
    excerpt:
      'Behind-the-scenes access and direct contribution to wildlife protection and monitoring.',
    cta: 'Join a Conservation Safari',
    image: '/images/activities/walking-safari/1752763546178-kenya-suyian-wild-dog-4.jpg',
    tagline:
      'A day with the rhino anti-poaching team. A morning collaring a lion. A week with a wild-dog researcher.',
    intro: [
      'For travellers who want to contribute meaningfully, not just visit, we design conservation safaris that put guests inside the conservation work — not on the touristed periphery of it.',
      'These journeys are arranged in partnership with conservancy managers, NGOs and university researchers. Days are spent in the field with scientists and rangers; evenings unpack what was seen with the people doing the work.',
    ],
    highlights: [
      {
        title: 'Field Days',
        body: 'Game-counting, collaring, telemetry tracking, community engagement — actual conservation work, not staged.',
      },
      {
        title: 'Researcher-Led',
        body: 'Designed with the heads of conservation programmes at Ol Pejeta, Lewa, Borana and the Mara Predator Project.',
      },
      {
        title: 'Tangible Funding',
        body: 'A portion of the cost goes directly to the projects you visit — itemised in your trip dossier.',
      },
    ],
    locations: [
      {
        name: 'Ol Pejeta Conservancy',
        country: 'Kenya',
        description:
          'Home of the last two northern white rhinos. Daily field activities with the rhino, lion and chimpanzee teams.',
      },
      {
        name: 'Lewa Wildlife Conservancy',
        country: 'Kenya',
        description:
          'A model conservancy with active rhino and Grevy’s zebra programmes — anti-poaching ride-alongs available.',
      },
    ],
    gallery: [
      '/images/activities/walking-safari/1752763546178-kenya-suyian-wild-dog-4.jpg',
      '/images/activities/walking-safari/1752763546180-wildwatch-africa-kenya-suyian-damen-pheiffer-lion-pride-on-the-open-plains-07.jpg',
    ],
  },
  {
    slug: 'horseback-safaris',
    badge: 'On Horseback',
    title: 'Horseback Safaris: Ride with the Wild',
    shortTitle: 'Horseback Safaris',
    excerpt:
      'Ride alongside giraffes and zebras with luxury mobile fly-camps and expert equestrian guides.',
    cta: 'Book a Horseback Safari',
    image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
    tagline:
      'Horses don’t look like threat. Wildlife reacts to a rider very differently to a vehicle — and that’s the magic.',
    intro: [
      'East Africa has one of the world’s great horseback safari traditions, going back to the early 20th century. Today’s rides are run by long-established outfits with strings of well-schooled horses and senior guides.',
      'Multi-day rides cross conservancies between mobile fly-camps; shorter morning rides can be added to almost any safari at a lodge with a stable.',
    ],
    highlights: [
      {
        title: 'For Experienced Riders',
        body: 'Multi-day rides require confident intermediate-plus riders — but we arrange shorter introduction rides at almost any horse-equipped lodge.',
      },
      {
        title: 'Mobile Camps',
        body: 'Tented camps set up ahead of your arrival, with hot bucket showers and full bush dining.',
      },
      {
        title: 'String of 60+',
        body: 'Our preferred outfitter keeps a string of more than 60 horses — guaranteed match to your size, weight and skill.',
      },
    ],
    locations: [
      {
        name: 'Mara & Loita Hills',
        country: 'Kenya',
        description:
          'A classic horseback country — open plains, scattered wildlife, and the Mara escarpment as a backdrop.',
      },
      {
        name: 'Borana / Laikipia',
        country: 'Kenya',
        description:
          'A working ranch with riding amid giraffe, zebra and rhino on the conservancy.',
      },
    ],
    gallery: [
      '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
      '/images/activities/walking-safari/1752763546179-wildwatch-africa-kenya-suyian-damen-pheiffer-grevy-2339-s-zebra-01.jpg',
    ],
  },
  {
    slug: 'photographic-safaris',
    badge: 'Photography',
    title: 'Photographic Safaris: Capture the Wild',
    shortTitle: 'Photographic Safaris',
    excerpt:
      'Custom-built vehicles and professional photographer guides to capture stunning wildlife imagery.',
    cta: 'Enhance Your Photography',
    image: '/images/destinations/tanzania/photo-2013-03-06-11-59-58.jpg',
    tagline:
      'Custom vehicles, photographer-guides, beanbags, charging, and the time to wait — really wait — for the shot.',
    intro: [
      'Photographic safaris are different. The vehicles are configured for cameras — pop-tops, drop sides, beanbags on the rails, charging stations on the dashboard. The pacing is slower, the lighting prioritised, and the willingness to sit on a single subject for an hour is the point.',
      'We work with professional photographer-guides who lead these trips themselves — including a number of Nikon and Canon ambassadors based in East Africa. Tuition is built in, gear can be rented, and post-processing sessions are an evening fixture.',
    ],
    highlights: [
      {
        title: 'Photo Vehicles',
        body: 'Built for one or two guests per row with full freedom of movement, swing arms and beanbags.',
      },
      {
        title: 'Photographer-Guides',
        body: 'Trips led by senior wildlife photographers — Greg du Toit, Marlon du Toit, Federico Veronesi and others.',
      },
      {
        title: 'Big-Subject Time',
        body: 'A leopard in a tree gets the morning, not 15 minutes. The schedule is built around light, not check-ins.',
      },
    ],
    locations: [
      {
        name: 'Masai Mara (August–October)',
        country: 'Kenya',
        description:
          'Migration river crossings, mega-prides of lion, and the most photographed light in Africa.',
      },
      {
        name: 'South Luangwa (June–October)',
        country: 'Zambia (extension)',
        description:
          'For guests willing to extend — leopard density unrivalled anywhere on the continent.',
      },
    ],
    gallery: [
      '/images/destinations/tanzania/photo-2013-03-06-11-59-58.jpg',
      '/images/activities/game-drive/leopard-singita-sabi-sand-ross-couper-421-2.jpg',
      '/images/activities/game-drive/lion-singita-sabi-sand-ross-couper-366-1.jpg',
    ],
  },
]

export const experiencesBySlug: Record<string, Experience> = Object.fromEntries(
  experiences.map((e) => [e.slug, e]),
)
