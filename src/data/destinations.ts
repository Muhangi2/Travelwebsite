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
  whyVisit?: string[]
  attractions: { title: string; body: string; image: string }[]
  activities: { title: string; body?: string; image: string }[]
  gettingThere?: string
  whereToStay?: { category: string; picks: string[] }[]
  practicalInfo?: { label: string; body: string }[]
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
    "Home to roughly half the world's remaining mountain gorillas, this UNESCO World Heritage Site protects 331 km² of ancient Albertine Rift rainforest — one of the most extraordinary wildlife destinations on the planet, where a face-to-face encounter with a wild gorilla family changes you forever.",
  image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
  location: 'Southwestern Uganda',
  size: '331 km²',
  altitude: '1,160 — 2,607 m',
  bestTime: 'June–September & December–February',
  overview:
    "Bwindi Impenetrable National Park is one of the most extraordinary wildlife destinations on the planet. Nestled in the rugged Albertine Rift mountains, this UNESCO World Heritage Site protects 331 square kilometres of some of Africa's most ancient and biodiverse tropical rainforest — a dense tangle of ancient trees, vines, bamboo, and undergrowth covering steep ridges and mist-filled valleys that have sheltered life through ice ages and millennia of human history. Today Bwindi is home to approximately 459 mountain gorillas — roughly half the entire global population of this critically endangered great ape. With 19 habituated gorilla families spread across four distinct trekking sectors (Buhoma, Ruhija, Rushaga, and Nkuringo), it offers the largest selection of gorilla families at any destination on earth. Beyond the gorillas, the forest holds over 350 bird species including 23 Albertine Rift endemics found nowhere else on earth, 120 mammal species, and profound cultural connections to the Batwa Forest People — the original inhabitants of this ancient ecosystem.",
  attractions: [
    {
      title: 'Mountain Gorilla Trekking',
      body:
        "Trek through ancient rainforest with expert Uganda Wildlife Authority rangers and trackers to spend one precious hour observing a wild mountain gorilla family — watching silverbacks demonstrate their power, mothers nurse infants, and juveniles play. With 19 habituated families across four sectors, Bwindi offers more gorilla families than any other destination. Treks range from 1 to 8 hours depending on gorilla location that day. Permits cost USD 800 per person.",
      image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
    },
    {
      title: 'Gorilla Habituation Experience',
      body:
        "Spend a full day — dawn to dusk — accompanying researchers with a gorilla family being habituated to human presence. Available exclusively in the Rushaga sector, this exceptional programme provides 8–10 hours with the same group, witnessing a complete day in their social world. The deepest possible gorilla immersion anywhere on earth. Permits cost USD 1,500 per person.",
      image: '/images/activities/gorilla-trekking/15-gorilla-ah1i7197.jpg',
    },
    {
      title: 'Batwa Cultural Trail & Albertine Rift Birding',
      body:
        "Walk with the Batwa Forest People — the indigenous forest-dwellers whose ancestors lived in Bwindi for thousands of years — learning traditional survival skills, medicinal plant knowledge, fire-making techniques, and the profound story of a people whose ancestral forest was set aside for conservation. Combine with specialist forest birding for 23 Albertine Rift endemics found nowhere else on earth.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.jpg',
    },
  ],
  activities: [
    {
      title: 'Trek in Buhoma — The Original Sector',
      body:
        "Bwindi's first and most established gorilla trekking sector, with the best infrastructure, most comfortable approach track, and multiple gorilla families including the famous Mubare group — the first habituated gorilla family in Uganda. The natural choice for first-time trekkers.",
      image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
    },
    {
      title: 'Nkuringo — The Most Dramatic Sector',
      body:
        "The most scenically spectacular sector, with ridge-top accommodation and stunning views into the Democratic Republic of Congo. The gorillas here range across Bwindi's most dramatic terrain — a visually unforgettable combination of wilderness and wildlife.",
      image: '/images/activities/gorilla-trekking/10-gorilla-ah1i2740.jpg',
    },
    {
      title: 'Stay at Clouds Mountain Gorilla Lodge',
      body:
        "Uganda's highest-altitude gorilla lodge on the Nkuringo ridge, with heated plunge pools, private butler service, and the most dramatic panoramic viewpoint in the entire Bwindi region — including views into the Democratic Republic of Congo.",
      image: '/images/lodges/uganda/bwindi/clouds-moutain-gorilla-lodge-by-wildplaces/1761689756443ugandawildplaces-samchurchill-6773.jpg',
    },
  ],
  faqs: [
    {
      q: 'When is the best time for gorilla trekking?',
      a: "The two dry seasons — June to September and December to February — offer the most comfortable trekking conditions with firmer trails and lower rainfall. Gorilla trekking is available every day of the year in Bwindi, however. Many experienced trekkers prefer the wet seasons when gorillas descend to lower elevations, the forest is magnificently lush, and there are fewer other visitors.",
    },
    {
      q: 'How much does a gorilla permit cost?',
      a: 'A Uganda Wildlife Authority gorilla trekking permit costs USD 800 per person for foreign non-residents. The full-day Gorilla Habituation Experience in Rushaga costs USD 1,500 per person. Permit availability is limited — we recommend booking 6–12 months ahead for the dry season.',
    },
    {
      q: 'Which of the four trekking sectors should I choose?',
      a: "Buhoma is the most established with the best infrastructure. Rushaga has the most habituated families and is the only sector offering the Habituation Experience. Nkuringo has the most dramatic scenery with DRC views. Ruhija at over 2,300m is the best sector for Albertine Rift birdwatching. We will match you to the right sector based on your fitness, interests, and available dates.",
    },
  ],
}

const queenElizabeth: Park = {
  slug: 'queen-elizabeth',
  name: 'Queen Elizabeth National Park',
  blurb:
    "Uganda's most visited and ecologically complex park — tree-climbing lions in Ishasha, the wildlife-dense Kazinga Channel, chimpanzee trekking in Kyambura Gorge, and over 600 bird species across 1,978 km² of Albertine Rift wilderness.",
  image: '/images/activities/game-drive/asilia-roho-2017-1-1.jpg',
  location: 'Western Uganda',
  size: '1,978 km²',
  altitude: '910 — 1,845 m',
  bestTime: 'June–September & December–February',
  overview:
    "Queen Elizabeth National Park is Uganda's most visited, most diverse, and most ecologically complex national park. Stretching across 1,978 square kilometres of the spectacular Albertine Rift Valley, the park encompasses a remarkable mosaic — open savannah grasslands, tropical rainforest, papyrus swamps, volcanic crater lakes, and the shores of both Lake Edward and Lake George, connected by the famous Kazinga Channel. The park has earned a legendary reputation for several extraordinary wildlife experiences: the tree-climbing lions of the Ishasha sector (one of only a handful of populations in the world that habitually rest in trees), the Kazinga Channel launch cruise (a 2-hour boat safari along one of Africa's most wildlife-rich waterways with enormous hippo pods and 100+ bird species), and chimpanzee trekking at the atmospheric Kyambura Gorge — a dramatic 100-metre-deep rainforest canyon cutting through open savannah. With over 600 recorded bird species, Queen Elizabeth is one of Africa's greatest birding destinations.",
  attractions: [
    {
      title: 'Kazinga Channel Boat Cruise',
      body:
        "The unmissable centrepiece of any Queen Elizabeth safari. The 2-hour launch trip along the Kazinga Channel passes what may be Africa's highest concentration of hippos in any single waterway, massive Nile crocodiles basking on sandbars, African elephants bathing at the water's edge, and a staggering diversity of waterbirds including Goliath herons, African fish eagles, pink-backed pelicans, and African skimmers. The experience of drifting past hundreds of hippos at close range is one of the most memorable in East African safari. Cruises at USD 30 per person.",
      image: '/images/activities/game-drive/boating-safari-hippo-spot2.jpg',
    },
    {
      title: 'Tree-Climbing Lions of Ishasha',
      body:
        "The southern Ishasha sector is one of the world's most unique wildlife destinations. Queen Elizabeth's lions have developed the remarkable habit of climbing and resting in the branches of large fig trees — probably to escape insects and gain better views over their territory. Morning game drives in the Ntungwe River area from 6 to 9am offer the best opportunities to witness this extraordinary behaviour, available nowhere else in Uganda.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/ishasha-wilderness-camp/DSC_6859.jpg',
    },
    {
      title: 'Kyambura Gorge Chimpanzee Trekking',
      body:
        "Descend into the remarkable Kyambura Gorge — a deep, forested ravine cutting dramatically through open savannah — to find the habituated chimpanzee community that lives here. The gorge is one of the most visually striking landscapes in Uganda. Permits cost USD 150 per person. The combination of chimpanzees, dramatic gorge scenery, and surrounding savannah makes this a uniquely Queen Elizabeth primate experience.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/25-kyambura-gorge-rf-dsc-3399-copie.jpg',
    },
  ],
  activities: [
    {
      title: 'Stay at Kyambura Gorge Lodge',
      body:
        "Perched on the gorge rim with the chimpanzee habitat below, managed by Volcanoes Safaris with exceptional guiding and one of Uganda's most progressive community-conservation models. Direct access to chimp trekking from the lodge doorstep.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/23-kyambura-gorge-lodge-qe-30042024-volcanoessafaris-8624-edit-copy.jpg',
    },
    {
      title: 'Crater Lakes Scenic Drive',
      body:
        "Wind along the dramatic escarpment road above the Albertine Rift past a string of ancient volcanic crater lakes. Lake Munyanyange regularly hosts flocks of flamingos, while Lake Katwe is the site of traditional salt extraction. The views from the escarpment edge across Lake Edward and into the Democratic Republic of Congo are extraordinary.",
      image: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
    },
    {
      title: 'Night Game Drive',
      body:
        "After dark in the northern sector, leopards emerge in the riverine thickets, African civets and large-spotted genets appear in the headlights, and the unmistakable silhouette of the aardvark crosses the track. Night drives at USD 20 per person reveal an entirely different dimension of the park.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg',
    },
  ],
  faqs: [
    {
      q: 'How many nights should I plan in Queen Elizabeth?',
      a: "A minimum of 3 nights is recommended to experience both the northern Mweya area and the southern Ishasha sector, approximately 90km apart by road. One night in the north for the Kazinga cruise and game drives, two in the south for tree-climbing lions and Kyambura chimp trekking.",
    },
    {
      q: 'Where exactly are the tree-climbing lions?',
      a: "Tree-climbing lions are found exclusively in the southern Ishasha sector. The lions favour large fig trees along the Ntungwe River drainage. Morning game drives between 6 and 9am offer the best viewing — the dry season produces the most reliable tree-climbing sightings when shade is scarce.",
    },
    {
      q: 'Best time to visit?',
      a: "June to September is the primary dry season with the best road conditions and game viewing. December to February is equally good. The Kazinga Channel boat cruise is outstanding year-round regardless of season.",
    },
  ],
}


const murchison: Park = {
  slug: 'murchison-falls',
  name: 'Murchison Falls National Park',
  blurb:
    "Uganda's largest national park — where the entire volume of the Victoria Nile is forced through a 7-metre gorge in the world's most powerful waterfall, then fans into a wildlife-rich delta on Lake Albert. Lions, Rothschild's giraffes, elephants, and shoebill storks across 3,840 km².",
  image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
  location: 'Northwestern Uganda',
  size: '3,840 km²',
  altitude: '619 — 1,292 m',
  bestTime: 'December–February & June–September',
  overview:
    "Murchison Falls National Park stands as Uganda's largest and most magnificent national park, encompassing 3,840 square kilometres of diverse wilderness in the northwestern corner of the country. The park takes its name from the extraordinary Murchison Falls — where the entire volume of the Victoria Nile is forced through a rocky gorge barely 7 metres wide before plunging 45 metres in a thundering curtain of white water, recognised as one of the world's most powerful waterfalls. Above the falls, vast savannahs of borassus palms host Rothschild's giraffes (in Uganda's largest population), elephants, Cape buffalos, lions, and leopards. Below the falls, the legendary Nile boat cruise brings visitors within metres of massive hippo pods, enormous Nile crocodiles, and forest elephants drinking at the river's edge. For sport fishing enthusiasts, the Victoria Nile is one of the world's greatest Nile Perch fisheries, while the adjacent Budongo Forest Reserve hosts the largest known chimpanzee population in Uganda.",
  attractions: [
    {
      title: 'Murchison Falls Nile Boat Cruise',
      body:
        "The iconic 3-hour launch trip from Paraa upstream to the base of the falls is one of East Africa's great safari experiences. Drift past enormous hippo pods (hundreds at a time), Nile crocodiles reaching 5 metres in length, forest elephants drinking on the banks, and over 100 bird species. The approach to the base of Murchison Falls, where the Nile thunders through its 7-metre gorge in a cloud of spray, is one of the most dramatic moments in African safari.",
      image: '/images/parks/uganda/murchison-falls/dsc-6271.jpg',
    },
    {
      title: "Rothschild's Giraffe & North Bank Game Drives",
      body:
        "The savannah north of the Victoria Nile hosts outstanding game viewing. Lions in family prides, Rothschild's giraffes (Uganda's largest and most endangered giraffe subspecies), African elephants, Cape buffalos, Uganda kobs, oribi, and Jackson's hartebeests are regularly seen on morning and afternoon drives. The Buligi Circuit is particularly productive for large predators and giraffe.",
      image: '/images/parks/uganda/murchison-falls/dsc-6828.jpg',
    },
    {
      title: 'Nile Delta Shoebill Boat Trip',
      body:
        "A specialist boat safari downstream from Paraa toward the point where the Victoria Nile meets Lake Albert. Exceptionally rich in waterbirds including the prehistoric shoebill stork — one of Africa's most sought-after bird sightings — plus African skimmers, various kingfisher species, herons, and waders in the papyrus delta.",
      image: '/images/parks/uganda/murchison-falls/dsc-6951.jpg',
    },
  ],
  activities: [
    {
      title: 'Hike to the Top of the Falls',
      body:
        "After the boat cruise ends at the base of the falls, a short but strenuous 30-minute hike climbs to the viewing platform directly above Murchison Falls — providing the most dramatic possible perspective on this extraordinary natural feature, looking directly down into the 7-metre gorge.",
      image: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
    },
    {
      title: 'Nile Perch Sport Fishing',
      body:
        "The Victoria Nile is one of the world's greatest Nile Perch fisheries. Fish exceeding 80–100kg have been landed at Murchison. Fishing from boats at Pakuba is the primary method, with morning sessions from 6am when the fish are most active. All guided and fully serviced from the riverside.",
      image: '/images/parks/uganda/murchison-falls/dsc-7062.jpg',
    },
    {
      title: 'Chimp Trekking at Budongo Forest',
      body:
        "The Budongo Forest Reserve, adjacent to Murchison's southern boundary, contains the largest known population of East African chimpanzees in Uganda. Guided treks depart from Kaniyo-Pabidi and Busingiro forest stations at USD 90 per person — a remarkable primate experience combined with savannah game drives.",
      image: '/images/parks/uganda/murchison-falls/dsc-6884.jpg',
    },
  ],
  faqs: [
    {
      q: 'How do we get there?',
      a: "A 90-minute charter or scheduled flight from Entebbe to Pakuba or Chobe Airstrip is the recommended option. The road journey is 4–5 hours via the Ziwa Rhino Sanctuary (worth a half-day stop to track rhinos on foot — the only wild rhinos in Uganda).",
    },
    {
      q: 'How many days do we need?',
      a: "Three nights gives you the falls boat cruise, full north bank game drives, a Top of the Falls hike, and the Nile delta shoebill trip. A fourth night allows Budongo chimpanzee trekking. Two nights is the absolute minimum.",
    },
    {
      q: 'What makes Murchison different from other Uganda parks?',
      a: "The combination of the world's most powerful waterfall, the legendary Nile boat cruise with hundreds of hippos, Rothschild's giraffe herds, sport fishing for giant Nile Perch, and the option to combine with Budongo chimp trekking — all in Uganda's largest park — makes Murchison uniquely spectacular.",
    },
  ],
}


const kibale: Park = {
  slug: 'kibale',
  name: 'Kibale National Park',
  blurb:
    "The primate capital of the world — 13 species in a single park, including over 1,500 chimpanzees in some of the most accessible and best-studied communities in Africa. Kibale is Uganda's premier chimpanzee trekking destination.",
  image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  location: 'Western Uganda',
  size: '795 km²',
  altitude: '1,100 — 1,590 m',
  bestTime: 'June–September & December–February',
  overview:
    "Kibale National Park holds a title that is superlative yet entirely accurate: the primate capital of the world. This magnificent tropical rainforest park in western Uganda covers 795 square kilometres of ancient montane and lowland forest that is home to 13 species of primates — the highest primate diversity of any protected area in East Africa. At the centre of this primate world are the chimpanzees: over 1,500 individuals estimated to live within Kibale's boundaries, the highest density of any national park in Uganda and one of the highest anywhere on earth. Multiple chimpanzee communities in the Kanyanchu area have been habituated to human presence through years of patient scientific research, and twice-daily guided trekking sessions allow visitors to observe these remarkable animals in their natural forest environment. Beyond the chimpanzees, Kibale's canopy resonates with red colobus monkeys in troops of up to 500 — one of East Africa's most spectacular primate sights — alongside grey-cheeked mangabeys, L'Hoest's monkeys, olive baboons, and eight other primate species. The Bigodi Wetland Sanctuary, a community-managed area on the park's boundary, offers superb birdwatching with over 200 species and all revenue benefiting local communities. Kibale is also one of Uganda's finest birding destinations with over 375 species including 35 Albertine Rift endemics.",
  attractions: [
    {
      title: 'Chimpanzee Trekking',
      body:
        "Led by expert Uganda Wildlife Authority rangers and trackers, morning and afternoon trekking sessions follow habituated chimpanzee communities through ancient rainforest. You spend one hour with the chimpanzees — observing complex social interactions, grooming, foraging, infant play, and the extraordinary vocal performances that fill the forest. With over 1,500 chimpanzees in the park, success rates run at over 90%. Permits cost USD 250 per person.",
      image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
    },
    {
      title: 'Chimpanzee Habituation Experience',
      body:
        "For the deepest possible primate engagement, the full-day Habituation Experience accompanies researchers from before dawn (approximately 5:30am) through to dusk, tracking a chimpanzee community as it wakes, feeds, travels, rests, and eventually builds its sleeping nests. This exceptional programme provides 8–10 hours with the same group of chimpanzees, witnessing a complete day in their social world. Permits cost USD 300 per person.",
      image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
    },
    {
      title: 'Bigodi Wetland Sanctuary',
      body:
        "A community-managed 4km guided walk through papyrus wetland and forest edge adjacent to Kibale. Over 200 bird species recorded here including the Great Blue Turaco, Papyrus Gonolek, and numerous kingfishers and sunbirds. Red colobus and L'Hoest's monkeys are regularly seen. All entrance fees (USD 10 per person) go directly to surrounding communities.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.jpg',
    },
  ],
  activities: [
    {
      title: 'Kanyanchu Primate Walk',
      body:
        "A guided 3–4 hour forest walk through Kibale's diverse habitats, encountering multiple primate species along the route — red colobus, grey-cheeked mangabeys, L'Hoest's monkeys, red-tailed monkeys, and olive baboons — before locating the chimpanzee community. The most comprehensive primate experience in the park at USD 30 per person.",
      image: '/images/lodges/uganda/kibale-national-park/primate-lodge/1.jpg',
    },
    {
      title: 'Stay at Kibale Lodge by Volcanoes Safaris',
      body:
        "Hand-built bandas perched on a hilltop ridge above Kibale's forest canopy with panoramic Rwenzori mountain views and direct access to the chimp trekking departure point. Personal butler service, spa, and exceptional guiding.",
      image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.jpg',
    },
    {
      title: "Crater Lakes Walk",
      body:
        "A gentle afternoon walk along the chain of volcanic crater lakes between Kibale and Fort Portal — passing through tea estates, swimming in crater lakes, and experiencing rural Uganda. Fort Portal town (22km from Kanyanchu) offers a pleasant highland base.",
      image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
    },
  ],
  faqs: [
    {
      q: 'How likely am I to see chimpanzees?',
      a: "Success rates on the morning trek run at over 90%. Communities are tracked daily by researchers and our guides coordinate with the ranger team to position guests correctly. The afternoon session is equally productive.",
    },
    {
      q: 'Standard trek or Habituation Experience?',
      a: "The 1-hour trek is the right choice for most travellers — high success rate, memorable encounter. The full-day Habituation Experience is for keen primatologists and wildlife photographers willing to invest a long, demanding day for an extraordinary 8–10 hour chimp encounter.",
    },
    {
      q: 'How does Kibale fit into a western Uganda circuit?',
      a: "Kibale is a natural centrepiece of the western circuit — 5–6 hours from Kampala by road (or 1 hour by flight to Kasese), 2–3 hours from Queen Elizabeth National Park, and 4 hours from Bwindi. Most of our itineraries combine all three in 7–10 nights.",
    },
  ],
}


const lakeMburo: Park = {
  slug: 'lake-mburo',
  name: 'Lake Mburo National Park',
  blurb:
    "Uganda's walking safari capital — the only national park in the country offering walking, cycling, and horse-riding safaris through open African savannah. Zebras, impalas, hippos, and leopards on night drives, perfectly positioned between Kampala and Bwindi.",
  image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.jpg',
  location: 'Western Uganda',
  size: '370 km²',
  altitude: '1,220 — 1,828 m',
  bestTime: 'Year-round',
  overview:
    "Lake Mburo National Park occupies a uniquely special position in Uganda's safari landscape as the country's smallest savannah national park at 370 square kilometres, yet one that offers several wildlife experiences unavailable anywhere else in Uganda. Most significantly, Lake Mburo is the only national park in Uganda where visitors can undertake walking safaris, cycling safaris, and horse-riding safaris through open African savannah — an extraordinary opportunity to experience the bush at ground level, tracking animals by spoor, listening to sounds unfiltered by a vehicle engine. The park is also the only place in southern Uganda where Burchell's zebras are found in numbers, alongside impalas (found in southern Uganda only within Mburo), elands, topis, Defassa waterbucks, and a large hippo population in the lake. With five lakes within its boundaries, the boat cruise on Lake Mburo provides outstanding hippo, crocodile, and waterbird viewing. Perfectly positioned as a stopover destination — just 3–4 hours from Kampala and 3 hours from Bwindi — Lake Mburo is the natural overnight stop on the Uganda western circuit.",
  attractions: [
    {
      title: 'Walking Safari',
      body:
        "The centrepiece experience of Lake Mburo. Armed Uganda Wildlife Authority rangers lead walks of 2–3 hours through the park's savannah, tracking zebras, impalas, elands, topis, and warthogs on foot. With no lions in the open areas, walking is safe and immersive — the experience of being part of the African bush ecosystem rather than observing it from a vehicle is one that every Lake Mburo visitor should have.",
      image: '/images/parks/uganda/lake-mburo/15829575593-2fb45ea828-o.jpg',
    },
    {
      title: "Burchell's Zebra & Birdwatching",
      body:
        "Lake Mburo is the only national park in southern Uganda with plains zebra — herds graze alongside impalas, elands, topis, and warthogs. The park's diverse habitats (savannah, acacia woodland, lakeshore, wetland, and forest) support over 350 bird species. Key targets include the African finfoot, White-winged Warbler, Bare-faced Go-away Bird, and numerous raptors including Bateleur Eagle.",
      image: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
    },
    {
      title: 'Lake Mburo Boat Cruise',
      body:
        "A 2-hour boat trip on Lake Mburo encounters enormous hippo pods (one of Uganda's densest hippo populations), Nile crocodiles, African fish eagles, various kingfisher species, herons, and ibis. The water-level view of hippos surfacing and the sounds of their calls across the lake is a highlight of any Uganda safari. USD 25 per person.",
      image: '/images/parks/uganda/lake-mburo/16498738142-978e9993ef-o.jpg',
    },
  ],
  activities: [
    {
      title: 'Horse-Riding Safari',
      body:
        "Arranged through the Mihingo Lodge stables, horse-riding safaris allow visitors to approach wildlife more closely than in vehicles. Experienced, wildlife-habituated horses and guides cater to all riding abilities. Sunset rides across the savannah are particularly magical. USD 35–50 per person per hour.",
      image: '/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.jpg',
    },
    {
      title: 'Night Game Drive',
      body:
        "Guided night drives after sunset reveal Lake Mburo's nocturnal fauna: leopards (regularly seen), African civets, large-spotted genets, white-tailed mongooses, spring hares, and African bushbabies. The sounds of hippos grunting on the lake and hyenas calling across the savannah add to the atmosphere. USD 20 per person.",
      image: '/images/parks/uganda/lake-mburo/16261416770-9668a9647a-o.jpg',
    },
    {
      title: 'Stay at Mihingo Lodge',
      body:
        "Uganda's most distinctive luxury lodge — 12 beautifully designed stone and wood cottages perched dramatically on rocky outcrops above the savannah, with stunning views, private pools, horse-riding stables, and exceptional guiding. One of Uganda's most photographed safari properties.",
      image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg',
    },
  ],
  faqs: [
    {
      q: 'How does Lake Mburo fit into a Uganda safari?',
      a: "Most often as a first night out of Entebbe (or Kampala) before heading to Bwindi — it breaks the long drive into a rewarding overnight stay, adds a completely different savannah habitat to the itinerary, and offers the unique walking and horseback experience unavailable in Uganda's forest parks.",
    },
    {
      q: "What makes Lake Mburo different from Uganda's other parks?",
      a: "Lake Mburo is the only national park in Uganda offering walking safaris, cycling safaris, and horse-riding safaris through open savannah. It also has the only accessible zebra and impala populations on the Uganda western circuit. The combination of these unique activities makes it an essential stop.",
    },
    {
      q: 'When is the best time to visit?',
      a: "Lake Mburo is a genuine year-round destination. The dry seasons (June–September and December–February) offer firmer ground for walking and cycling. The park's proximity to Kampala and the main tarmac highway means it is accessible in all weather.",
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
      a: "Mgahinga pairs beautifully with Bwindi (2.5-hour drive) and is the natural border-crossing point into Rwanda's Volcanoes National Park — a classic combined-Virunga itinerary.",
    },
  ],
}

const kidepo: Park = {
  slug: 'kidepo-valley',
  name: 'Kidepo Valley National Park',
  blurb:
    "Uganda's most remote and most rewarding safari destination — 1,442 km² of dramatic semi-arid savannah in the far northeast, with cheetahs, wild dogs, lions, and Karamojong warrior culture in a park that receives very few visitors.",
  image: '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.jpg',
  location: 'Northeastern Uganda (Karamoja Region)',
  size: '1,442 km²',
  altitude: '914 — 2,750 m',
  bestTime: 'June–September & December–February',
  overview:
    "Kidepo Valley National Park is widely regarded by those who have experienced it as one of the finest and most authentic national parks in all of Africa. Located in the Karamoja region near the borders with South Sudan and Kenya, Kidepo covers 1,442 square kilometres of dramatic semi-arid savannah, vast open plains, dry riverbeds, and imposing mountain ranges that create one of the most visually dramatic safari landscapes on the continent. The park receives very few visitors relative to its size and wildlife richness — this remoteness is its greatest asset. In terms of wildlife, Kidepo stands apart from all other Uganda parks: it supports species found nowhere else in the country including the cheetah, caracal, Burchell's zebra, greater kudu, roan antelope, and ostrich — species more typically associated with the dry savannahs of Kenya and Ethiopia. The park also holds Uganda's best population of lions and reliably produces the most dramatic predator sightings in the country. With 475 recorded bird species (the highest of any Uganda park), Kidepo is also one of East Africa's great birding destinations.",
  attractions: [
    {
      title: 'Narus Valley Game Drives',
      body:
        "The Narus Valley is the heart of Kidepo's game viewing. The seasonal Narus River and its associated waterhole attract enormous concentrations of wildlife during the dry season. Lions in large prides of up to 20 individuals, elephants, Cape buffalos, Burchell's zebras, Uganda kobs, Defassa waterbucks, and Jackson's hartebeests are regularly seen on extended morning and afternoon drives.",
      image: '/images/activities/game-drive/asilia-roho-2017-1-1.jpg',
    },
    {
      title: 'Cheetah Tracking & Species Unique to Kidepo',
      body:
        "Kidepo's open savannah habitats support a small but established cheetah population — one of the only places in Uganda where cheetah sightings are possible. Expert guides know the territories of resident cheetahs and sightings occur regularly. Species found in Uganda ONLY at Kidepo include cheetah, caracal, ostrich, Burchell's zebra, greater kudu, roan antelope, and African wild dog (occasional).",
      image: '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.jpg',
    },
    {
      title: 'Karamojong Warrior Cultural Visit',
      body:
        "The Karamojong people — one of East Africa's most distinctive and traditionally proud cattle-herding cultures — maintain villages around the park periphery. Arranged visits provide extraordinary encounters with warriors, elders, and community members in traditional dress. The cultural context of the Karamoja region adds a dimension to the Kidepo experience unavailable elsewhere in Uganda.",
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
    },
  ],
  activities: [
    {
      title: 'Walking Safari in the Savannah',
      body:
        "Guided walks with armed Uganda Wildlife Authority rangers through the park's open savannahs and dry riverbeds provide an intimate, ground-level perspective — reading animal tracks, identifying insects and plants, and approaching wildlife in a fundamentally different way than vehicle-based game drives. In Kidepo's empty wilderness, walking is a profound experience.",
      image: '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.jpg',
    },
    {
      title: 'Stay at Apoka Safari Lodge',
      body:
        "Inside the park on a rocky kopje with sweeping Narus Valley views. Stone and canvas cottages with a rock-carved pool, outdoor stone bathtubs, and some of the most exclusive guiding in Uganda. Managed by Wildplaces Africa — Apoka punches well above its weight as a genuine luxury property in Uganda's most remote park.",
      image: '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.jpg',
    },
    {
      title: 'Birdwatching (475 Species)',
      body:
        "Kidepo has the highest bird count of any national park in Uganda. Many species here have Ethiopian and Sudanese affinities and are found nowhere else in Uganda — including the Kori Bustard (Africa's heaviest flying bird), Black-bellied Bustard, Yellow-billed Shrike, and numerous raptors. A specialist birding guide transforms the experience.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.jpg',
    },
  ],
  faqs: [
    {
      q: 'Is Kidepo Valley National Park worth the long journey?',
      a: "Unanimously yes — every visitor who makes the effort to reach Kidepo ranks it among their finest African safari experiences. The combination of extraordinary wildlife, dramatic landscapes, cultural encounters, and near-zero tourist density creates an experience of authentic African wilderness that is becoming increasingly rare on the continent.",
    },
    {
      q: 'How do I get to Kidepo?',
      a: "Flying from Entebbe (1.5–2 hours by charter) is strongly recommended. The road journey is 10–12 hours from Kampala via Gulu — possible but exhausting. We arrange all Kidepo logistics including charter flights with Aerolink Uganda, park permits, and accommodation.",
    },
    {
      q: 'What wildlife can I see in Kidepo that I cannot see elsewhere in Uganda?',
      a: "Species unique to Kidepo within Uganda include cheetah, caracal, ostrich, Burchell's zebra, greater kudu, roan antelope, and African wild dog (occasional). Many of these species are typically found only in the drier savannahs of Kenya and Ethiopia — making Kidepo an entirely different safari experience from any other Uganda park.",
    },
  ],
}

const semuliki: Park = {
  slug: 'semuliki',
  name: 'Semuliki National Park',
  blurb:
    "Uganda's most underrated national park — ancient Congo Basin rainforest, boiling Sempaya Hot Springs, and 441 bird species including 40 Congo Basin endemics found nowhere else in East Africa. The most important forest birding destination in Uganda.",
  image: '/images/lodges/uganda/kibale-national-park/kyaninga-lodge/Kyanainga.jpg',
  location: 'Western Uganda (Bundibugyo District)',
  size: '220 km²',
  altitude: '670 — 2,350 m',
  bestTime: 'June–August & December–January',
  overview:
    "Semuliki National Park is Uganda's most underrated and most rewarding national park for birders and wilderness seekers. The park protects 220 square kilometres of lowland tropical rainforest that forms an eastern extension of the vast Congo Basin forest — one of the world's great forest ecosystems and the second-largest tropical rainforest on earth. This Congo connection is what makes Semuliki so special: the park harbours wildlife assemblages and bird species with strong central African affinities, many found nowhere else in East Africa. Of Semuliki's 441 recorded bird species, approximately 40 are Congo Basin endemics — species whose East African populations exist only in this small park, making it the most important forest birding destination in Uganda and one of the best in the African Great Lakes region. Beyond the extraordinary birdlife, Semuliki is famous for the Sempaya Hot Springs — two spectacular boiling geysers in the heart of the forest, one of which can project water and steam up to 2 metres into the air. The park is also home to chimpanzees, red-tailed monkeys, De Brazza's monkeys, and forest elephants.",
  attractions: [
    {
      title: 'Congo Basin Birding — 40 Endemics',
      body:
        "Semuliki has 441 bird species including approximately 40 Congo Basin endemics found in Uganda ONLY in this park — entirely absent from Bwindi, Kibale, and other Uganda parks. Priority targets include the Yellow-throated Nicator, African Piculet, Chocolate-backed Kingfisher, Black Dwarf Hornbill, Lemon-bellied Crombec, and the spectacular African Broadbill. Early morning guided walks with specialist birding guides are essential.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.jpg',
    },
    {
      title: 'Sempaya Hot Springs',
      body:
        "The park's most visited attraction — two spectacular thermal features in the heart of ancient forest. The female Sempaya Spring (Nyasimbi) maintains a large circular pool at near 100 degrees Celsius surrounded by colourful mineral terraces and steam. The male spring (Bitente) periodically erupts as a geyser. Local communities attribute deep spiritual significance to both springs. The forest walk to the springs is rewarding in itself.",
      image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
    },
    {
      title: 'Primate Tracking in Congo Forest',
      body:
        "Semuliki's forests support chimpanzees, red-tailed monkeys, De Brazza's monkeys, olive baboons, and black-and-white colobus in entirely undisturbed forest conditions. Guided forest walks allow encounters with these primates in some of the most pristine and least-visited rainforest in East Africa.",
      image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
    },
  ],
  activities: [
    {
      title: 'Early Morning Specialist Bird Walk',
      body:
        "Semuliki's birdwatching is best conducted on foot with expert specialist guides in the pre-dawn hours when Congo Basin endemics are most active. A dedicated 3–4 hour walk through the forest at first light, with a knowledgeable guide interpreting the extraordinary sounds and sightings, is an unforgettable experience for any birder.",
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
    },
    {
      title: 'Stay at Kyaninga Lodge (Fort Portal)',
      body:
        "Stone-and-wood cottages on the rim of a volcanic crater lake near Fort Portal — one of Uganda's most spectacular properties and the perfect luxury base for a Semuliki day trip. The lodge is 1.5 hours from the park and combines beautifully with Kibale National Park for a western Uganda circuit.",
      image: '/images/lodges/uganda/kibale-national-park/kyaninga-lodge/Kyanainga.jpg',
    },
    {
      title: 'Combine with Kibale & Queen Elizabeth',
      body:
        "Semuliki is best experienced as a 1–2 day addition to a western Uganda circuit from Fort Portal. Combine with Kibale National Park (1.5 hours away) and Queen Elizabeth National Park (3 hours via Kasese) for an outstanding 5–6 day western Uganda birding and primate itinerary.",
      image: '/images/lodges/uganda/kibale-national-park/crater-safari-lodge/1746563630437_090A2589.jpg',
    },
  ],
  faqs: [
    {
      q: 'What makes Semuliki special for birdwatching?',
      a: "Semuliki has 441 bird species including approximately 40 Congo Basin endemics — species found in Uganda ONLY in this park. These Congo specialities are entirely absent from Bwindi, Kibale, Murchison, and all other Uganda parks. For serious birders, Semuliki is an unmissable Uganda destination.",
    },
    {
      q: 'What are the Sempaya Hot Springs?',
      a: "The Sempaya Hot Springs are two boiling thermal features in the heart of Semuliki's forest. The larger female spring (Nyasimbi) maintains a large pool at near boiling point with beautiful mineral terraces. The male spring (Bitente) periodically erupts as a geyser. Local communities attribute deep spiritual significance to both features.",
    },
    {
      q: 'How do I combine Semuliki with other Uganda parks?',
      a: "Semuliki is best combined with Kibale National Park (1.5 hours from the park via Fort Portal) and Queen Elizabeth National Park (3 hours via Kasese). A 5–6 day western Uganda circuit visiting all three is one of Uganda's most rewarding itineraries. We can fly you to Kasese (1 hour from Entebbe) as the starting point.",
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
    "The Serengeti is Tanzania's crown jewel and the stage for the most iconic safari experience on the planet. An ancient ecosystem stretching from the volcanic plains of the south to the Mara River in the north, it supports the single largest terrestrial mammal migration in the world. Beyond the migration, the Serengeti harbours more lions than almost anywhere on earth, dense resident leopard, cheetah on the open plains and a year-round cast of supporting wildlife that makes every drive compelling. The private concessions to the north and west — home to Sayari and Dunia camps — offer off-road driving and night-drive access that transforms the experience entirely.",
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
      body: "The far north — Lamai Wedge, Mara Triangle interface — offers off-road driving, night drives and a far lower vehicle count than the central Seronera area. It's where Sayari Camp and our most exclusive itineraries are based.",
      image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.jpg',
    },
  ],
  activities: [
    {
      title: 'Stay at Sayari Camp',
      body: "Asilia's northernmost Serengeti camp — closest to the Mara River crossings, with just fifteen tented rooms, a stellar guiding team and full off-road access.",
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
      a: "Absolutely. January and February, when half a million wildebeest calves are born in ten days on the short-grass southern plains, is one of Africa's great wildlife events — dramatic predator action, enormous herds, and exceptional photographic light.",
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
    "An ancient, collapsed caldera sheltering the densest concentration of wildlife in Africa — the world's largest intact volcanic crater and home to all of the Big Five in a single enclosed ecosystem.",
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
      body: "The crater floor\'s fever-tree forest shelters elephant and leopard; the soda lake at its centre draws thousands of flamingos and is a prime staging ground for the predator–prey dramas that play out here daily.",
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
    "Africa's largest national park — a vast, wild, boat-safari heartland of the Rufiji River, famous for African wild dogs, hippos and a remote, uncrowded safari atmosphere.",
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
      body: "One of Tanzania's most reliable places to track packs of the endangered African wild dog — Nyerere's vast, unfenced wilderness supports several large packs with regular denning activity.",
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
      a: "Nyerere is for guests who value raw wilderness over big-name recognition. You'll share the park with almost no other vehicles, you can take a boat and a walk on the same morning, and the scale of the landscape is humbling. It pairs perfectly with the Serengeti as a contrasting final leg.",
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
    "An island wilderness on Lake Victoria — chimp habituation, forest walks, fishing, and a cast of reintroduced species in one of Africa's most unusual and uncrowded national parks.",
  image: '/images/destinations/tanzania/rubondo-island-camp-landscape.jpg',
  location: 'Northwestern Tanzania, Lake Victoria',
  size: '457 km²',
  altitude: '1,130 — 1,480 m',
  bestTime: 'June–February',
  overview:
    "Rubondo Island is one of Africa's best-kept secrets — an island park on Lake Victoria where chimps were reintroduced and are now partially habituated, where sitatunga and grey-cheeked mangabey move through riverine forest, and where Nile perch fishing from the lake shore can be world class. With just one camp on the island, this is genuinely off-the-beaten-track East Africa — best woven into an itinerary as a remarkable four-night detour from the northern Tanzania circuit.",
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
      body: "A dense tropical forest of ebony, wild mango and giant ficus — walked with specialist naturalist guides, tracking chimp signs and the island\'s unique community of reintroduced mammals.",
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
      body: "A slow, silent exploration of the island's shoreline by dugout canoe — hippos, crocodiles, sitatunga and a gallery of waterbirds at a pace that no motor safari can match.",
      image: '/images/destinations/tanzania/rubondo-island-camp-beach.jpg',
    },
  ],
  faqs: [
    {
      q: 'How do we get to Rubondo Island?',
      a: "A charter flight from the Serengeti or Mwanza (1–1.5 hours) lands on the island\'s grass airstrip, followed by a short boat transfer to camp. We include the full routing in our itineraries.",
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
      "In the heart of equatorial Africa, where the Nile begins its legendary journey northward and ancient forests shelter half the world's remaining mountain gorillas, Uganda emerges as a destination of extraordinary, intimate wilderness. We invite you to be changed by it.",
    heroImage: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
    exploreIntro:
      "From misty rainforests and endangered gorillas to wide savannahs and roaring waterfalls, Uganda is Africa's most diverse safari destination.",
    parkSummary:
      "Each of Uganda's national parks offers a completely different world — rich wildlife, dramatic landscapes, and unforgettable encounters. Choose your journey and explore the wild heart of the Pearl of Africa.",
    parkSummaryImage: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
    parks: [bwindi, queenElizabeth, murchison, kibale, lakeMburo, mgahinga, kidepo, semuliki],
    privilegedAccess: [
      {
        title: "Gorilla Researcher's Morning Briefing",
        location: 'Bwindi Impenetrable Forest, SW Uganda',
        body: "A private pre-trek session with the Uganda Wildlife Authority\'s gorilla monitoring team. Learn exactly how your permit fee funds gorilla protection, meet the research staff who track these families daily, and understand which family you will visit that morning and what to expect from their current behaviour.",
        image: '/images/activities/gorilla-trekking/15-gorilla-ah1i7197.jpg',
      },
      {
        title: 'Chimpanzee Wake-Up at First Light',
        location: 'Kibale National Park, W Uganda',
        body: "Enter Kibale's chimpanzee zone before the park opens to general visitors. Watch a habituated troupe rise from their night nests, begin grooming, and commence morning foraging — with no other guests present, in complete silence, accompanied by a specialist primatologist.",
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
        body: "Uganda's highest-altitude gorilla lodge, with heated plunge pools, private butler service, and the most dramatic viewpoint in the entire Bwindi region.",
        image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
      },
      {
        name: 'Apoka Safari Lodge',
        location: 'Kidepo Valley National Park',
        body: "The most exclusive address in Uganda's most remote park. Private game drives across Kidepo's semi-arid savannah with zero other tourist vehicles in sight.",
        image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
      },
      {
        name: 'Wildwaters Lodge',
        location: 'Nile River, Jinja',
        body: "A private island accessible only by boat — total seclusion on the Nile within reach of Jinja\'s white-water rapids and adventure activities.",
        image: '/images/parks/uganda/murchison-falls/dsc-6271.jpg',
      },
      {
        name: 'Primate Lodge Kibale',
        location: 'Kibale National Park',
        body: 'Set within the park boundary for direct forest access — private guided night walks and the dawn chimpanzee experience are available exclusively to lodge guests.',
        image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.jpg',
      },
      {
        name: "Baker's Lodge",
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
        "Uganda is Africa's most intimate wildlife destination. Half the world's remaining mountain gorillas, the largest chimpanzee population in East Africa, and tree-climbing lions — all in a country the size of the United Kingdom.",
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
        "Uganda's gorilla population has grown from 620 to over 1,000 individuals in two decades — a conservation success directly funded by gorilla trekking permits. Every Still Wild Uganda journey contributes to this extraordinary recovery.",
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
          "Uganda is one of East Africa's safest and most welcoming destinations. We monitor FCO and US State Department travel advisories continuously and will advise you if anything changes ahead of your departure.",
      },
    ],
  },

  rwanda: {
    slug: 'rwanda',
    name: 'Rwanda',
    heroTitle: "The Land of a Thousand Hills\nWhere Purpose and Luxury Converge",
    heroSubtitle:
      "Beyond the mist-shrouded peaks of the Virunga Mountains, Rwanda is Africa's most remarkable conservation success story and one of its most sophisticated travel destinations. From intimate gorilla encounters in ancient volcanic forests to Big Five savannah in Akagera, Rwanda rewards those who travel with both curiosity and conscience.",
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
          "Volcanoes National Park is Rwanda's crown jewel and one of the most extraordinary wildlife destinations on Earth. Nestled in the Virunga Massif — a chain of ancient volcanoes straddling Rwanda, Uganda, and the Democratic Republic of Congo — this 160 square kilometre park protects some of the last remaining mountain gorillas on the planet. The park was made famous by primatologist Dian Fossey, whose decades of research and conservation advocacy are documented in Gorillas in the Mist. Her grave lies within the park alongside the gorillas she dedicated her life to protecting, and her legacy continues through the Dian Fossey Gorilla Fund, headquartered in Kigali. Trekking permits are priced at USD 1,500 per person — the revenue directly funds park management, anti-poaching operations, and community development programmes. The trek winds through bamboo forest, Hagenia woodland, and volcanic moorland, with treks ranging from 1 to 7 hours depending on where the gorilla family has settled for the day.",
        attractions: [
          {
            title: 'Mountain Gorilla Trekking',
            body: "Trek with expert rangers through misty forest to spend one magical hour with a habituated gorilla family, observing silverbacks, mothers, and infants in natural behaviour — the experience that defined Rwanda's modern tourism.",
            image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
          },
          {
            title: 'Golden Monkey Tracking',
            body: 'Follow rangers through bamboo forest to encounter troops of the endangered golden monkey, found nowhere else in the world outside the Virunga range — playful, photogenic, and utterly captivating.',
            image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
          },
          {
            title: 'Dian Fossey Tomb Trail',
            body: "Hike to Karisoke Research Centre and the grave of Dian Fossey, passing through the gorilla habitat she studied and fought to protect for nearly two decades — a pilgrimage for the conservation-minded traveller.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-15.jpg',
          },
          {
            title: "Iby'iwacu Cultural Village",
            body: "Experience traditional Rwandan culture with local community members through dance, archery, traditional medicine demonstrations, and storytelling — a meaningful connection to the people who share this landscape with the gorillas.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.jpg',
          },
          {
            title: 'Twin Lakes — Lake Ruhondo & Lake Bulera',
            body: 'Visit the scenic twin volcanic lakes at the foot of the Virunga range for boat rides, birdwatching, and stunning reflections of the volcano chain — a beautiful addition to any Volcanoes itinerary.',
            image: '/images/destinations/rwanda/image-20260331125636.jpg',
          },
          {
            title: 'Gorilla Naming Ceremony — Kwita Izina',
            body: "If visiting in September, attend Rwanda's famous annual gorilla naming ceremony — a spectacular national celebration of conservation success where newly born gorilla infants receive their names.",
            image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
          },
        ],
        activities: [
          {
            title: 'Helicopter Transfers',
            body: 'Skip the road and arrive in style — aerial transfers from Kigali deliver guests to the lodges with sweeping views over the Twin Lakes and the Virunga volcanoes.',
            image: '/images/activities/helicopter-rwanda/1000045745.jpg',
          },
          {
            title: 'Bisate Reforestation Walk',
            body: 'Plant a sapling in the Wilderness Bisate reforestation project — your contribution to a 100,000-tree restoration of native forest at the foot of the volcanoes.',
            image: '/images/parks/rwanda/volcanoes/1750336906468-the-sanctuary-at-bisate-view-1-aerial.jpg',
          },
          {
            title: 'Kigali Genocide Memorial',
            body: 'A respectful, contextual visit to the Kigali Genocide Memorial — essential reading on the journey of modern Rwanda, ideally on arrival or departure day.',
            image: '/images/destinations/rwanda/image-20260331125636.jpg',
          },
        ],
        gettingThere:
          "Volcanoes National Park is approximately 2–3 hours by road from Kigali (110km). Most visitors are transferred by their tour operator from Kigali hotels to the park briefing point at 7:00am for the morning trek. The nearest town is Musanze (Ruhengeri), which has basic accommodation options. Beautiful Safaris Uganda arranges all transport and logistics for Kigali-based gorilla trekking departures. Helicopter transfers from Kigali are also available.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              "Bisate Lodge — iconic volcanic bowl setting, active forest restoration project, plunge pools. Wilderness Safaris at their finest.",
              "One&Only Gorilla's Nest — ultra-exclusive forest suites with direct park access and world-class service.",
              "Singita Kwitonda Lodge — understated ultra-luxury in a forest setting, Singita's signature conservation-first style.",
              "Sabyinyo Silverback Lodge — stunning highland stone cottages, community trust ownership model, spectacular Virunga views.",
              "Virunga Lodge — dramatic ridge-top location with arguably the finest views of the volcanoes in Rwanda.",
              "Sambora Kinigi — intimate boutique luxury at the park entrance, warm Rwandan hospitality and volcano panoramas.",
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              "Bishop's House — charming historic guesthouse in Musanze with colonial character and a warm, welcoming atmosphere.",
              "Mountain Gorilla View Lodge — well-appointed lodge with panoramic Virunga views, reliable and popular with gorilla trekkers.",
              "Le Bambou Gorilla Lodge — comfortable, good value, convenient location near the park.",
            ],
          },
        ],
        practicalInfo: [
          { label: 'Gorilla Permits', body: 'USD 1,500 per person, booked through the Rwanda Development Board (RDB) or an authorised operator. Book 3–6 months in advance for preferred dates.' },
          { label: 'Fitness Level', body: 'Treks last 1–7 hours depending on gorilla location that day. Moderate fitness required. Porters are available at the trailhead for luggage and personal support.' },
          { label: 'What to Wear', body: 'Long trousers, long-sleeved shirt, waterproof jacket, sturdy hiking boots, and gardening gloves for pushing through nettles. Gaiters strongly recommended.' },
          { label: 'Age Restriction', body: 'Minimum age for gorilla trekking is 15 years old.' },
          { label: 'Photography', body: 'No flash photography permitted within the gorilla family. Cameras with silent shutter modes are recommended.' },
          { label: 'Health', body: 'Maintain a minimum 7-metre distance from gorillas. If you are ill with respiratory symptoms you may be asked not to trek to protect the gorillas from human disease.' },
          { label: 'Altitude', body: 'The park sits at 2,400–4,500m. Allow time to acclimatise in Kigali (1,500m) before trekking to minimise altitude effects.' },
        ],
        faqs: [
          {
            q: 'How much does a gorilla trekking permit cost in Rwanda?',
            a: "Rwanda gorilla permits are priced at USD 1,500 per person per trek — higher than Uganda's permit (USD 800) — but the revenue directly funds Rwanda's world-class conservation programme. The permit covers one hour with a habituated gorilla family.",
          },
          {
            q: 'How do I book a Rwanda gorilla permit?',
            a: 'Permits are booked through the Rwanda Development Board (RDB) or through an authorised tour operator like Beautiful Safaris Uganda, which handles all permit procurement, transport, and lodge bookings as part of a complete package.',
          },
          {
            q: 'What is the difference between gorilla trekking in Rwanda vs. Uganda?',
            a: "Both offer outstanding gorilla experiences. Rwanda's permits are more expensive but the park infrastructure, lodge quality, and organisation are exceptional. Uganda's Bwindi offers a wilder, more remote atmosphere with more gorilla families. Many guests choose to trek in both countries on a combined itinerary.",
          },
          {
            q: 'Can I do gorilla trekking on a day trip from Kigali?',
            a: "Yes — Volcanoes National Park is approximately 2–3 hours from Kigali, making a day trip feasible. However, staying overnight in a park lodge is strongly recommended to fully appreciate the Virunga atmosphere and avoid an early morning long-distance drive.",
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
          "Akagera National Park is Rwanda's most dramatic conservation success story and the country's only savannah wildlife park. Covering 1,122 square kilometres of rolling savannahs, dense woodlands, lakes, and wetlands along the Tanzanian border, Akagera has undergone a remarkable transformation from a neglected, poaching-ravaged park in the 1990s to a thriving Big Five destination that stands as a model for African wildlife management. The park is managed in partnership by the Rwanda Development Board and African Parks — a non-profit conservation organisation that has driven extraordinary results since taking over management in 2010. Lions were reintroduced in 2015, black rhinoceros were brought back in 2017 and 2021, and the overall wildlife population has surged. Today Akagera offers elephant, buffalo, hippopotamus, giraffe, zebra, leopard, spotted hyena, and numerous antelope species alongside its recovering lion and rhino populations. Boat safaris on Lake Ihema are one of Akagera's signature experiences, drifting past pods of hundreds of hippos and basking crocodiles while painted storks, African fish eagles, and malachite kingfishers watch from the papyrus fringe.",
        attractions: [
          {
            title: 'Big Five Game Drives',
            body: "Guided morning and afternoon game drives in search of lion, leopard, elephant, buffalo, and black rhino across the park's diverse savannah habitats — one of Africa's great conservation comeback stories on a single game drive.",
            image: '/images/parks/rwanda/akagera/wilderness-magashi-7.jpg',
          },
          {
            title: 'Lake Ihema Boat Safari',
            body: "A two-hour boat safari on Lake Ihema, drifting through papyrus-fringed channels past hundreds of hippos, Nile crocodiles, and extraordinary waterbird congregations including African fish eagles and malachite kingfishers.",
            image: '/images/parks/rwanda/akagera/1738327984199-magashi-boating-12-24-tc-025.jpg',
          },
          {
            title: 'Black Rhino Tracking',
            body: 'Join a specialist ranger for a guided black rhino tracking experience, following the rhino monitoring team to observe these critically endangered animals in their restored bush habitat.',
            image: '/images/parks/rwanda/akagera/wilderness-magashi-31.jpg',
          },
          {
            title: 'Giraffe & Zebra Plains Drive',
            body: 'Drive the open northern savannahs for spectacular concentrations of Masai giraffe, plains zebra, topi, and waterbuck against a backdrop of rolling acacia hills stretching to the Tanzania border.',
            image: '/images/parks/rwanda/akagera/wilderness-magashi-19.jpg',
          },
        ],
        activities: [
          {
            title: 'Wilderness Magashi Camp Stay',
            body: "Six tented suites on the shore of Lake Rwanyakazinga — Rwanda's flagship eco-luxury safari camp in the heart of the best game-viewing terrain.",
            image: '/images/parks/rwanda/akagera/wilderness-magashi-23.jpg',
          },
          {
            title: 'Behind-the-Scenes with Park Rangers',
            body: "Spend a morning with the African Parks ranger team — a privileged window into anti-poaching operations, rhino monitoring, and the conservation science driving Akagera's recovery.",
            image: '/images/parks/rwanda/akagera/1738328418703-magashi-staff-12-24-tc-035.jpg',
          },
          {
            title: 'Sundowners on the Plains',
            body: 'Bush bar set up at sunset on a remote escarpment with views over the Tanzania border — the perfect end to an Akagera game drive day.',
            image: '/images/parks/rwanda/akagera/1738328545766-magashi-sundowners-12-24-tc-012.jpg',
          },
        ],
        gettingThere:
          "Akagera National Park is approximately 2.5–3 hours east of Kigali by road (90km). The main gate is near Kayonza on the highway to Tanzania. Most visitors are driven by their tour operator or can arrange transfers from Kigali. There is no commercial air access to the park.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              "Magashi Camp — exclusive tented camp on Lake Rwanyakazinga. Wilderness Safaris at their finest, with prime access to the park's best game-viewing terrain.",
              "Ruzizi Tented Lodge — intimate lakeside luxury on the shores of Lake Ihema.",
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              "Akagera Game Lodge — the park's main lodge, comfortable and well-run with sweeping views across the savannah and lake.",
            ],
          },
        ],
        practicalInfo: [
          { label: 'Park Fees', body: 'USD 40 per person per day plus vehicle fees. Game drive vehicle hire available at the gate. Book in advance through African Parks or your tour operator.' },
          { label: 'Best Season', body: 'June–September for concentrated wildlife and dry conditions. December–February as a second option. Year-round visits are productive.' },
          { label: 'Malaria', body: 'Akagera is a malaria zone. Prophylaxis is essential. Use insect repellent and sleep under a net or in screened accommodation.' },
          { label: 'Self-Drive', body: 'Self-drive safaris are permitted. Roads are generally accessible in 2WD during dry season; 4WD recommended in wet season.' },
          { label: 'Night Drives', body: 'Book in advance as spaces are limited. Depart at approximately 6:00pm and return by 9:00pm.' },
          { label: 'Photography', body: 'Excellent wildlife photography park with good light year-round. Longest golden light hours in June–July.' },
        ],
        faqs: [
          {
            q: 'Does Akagera have lions?',
            a: "Yes — lions were successfully reintroduced to Akagera in 2015 after being locally extinct for decades. The population has grown steadily and lion sightings, while not guaranteed, are increasingly common on game drives.",
          },
          {
            q: 'Are there rhinos in Akagera?',
            a: "Yes — black rhinos were reintroduced to Akagera in 2017 and again in 2021, bringing Rwanda into the elite group of countries with wild black rhino populations. The growing rhino population can sometimes be tracked on specialist rhino monitoring walks.",
          },
          {
            q: 'Can I see the Big Five in Akagera?',
            a: "Akagera offers genuine Big Five viewing — lion, leopard, elephant, buffalo, and black rhino are all present. Leopard and rhino require patience and luck, but elephant, buffalo, and lion are regularly encountered on game drives.",
          },
          {
            q: 'How does Akagera compare to Kenya and Tanzania for safaris?',
            a: "Akagera is smaller and less famous than Kenya's Maasai Mara or Tanzania's Serengeti, but it offers an exceptional, uncrowded safari experience with genuine Big Five animals and world-class conservation management — ideal for travellers seeking quality over crowds.",
          },
        ],
      },
      {
        slug: 'kigali',
        name: 'Kigali',
        blurb:
          "Africa's cleanest, safest and most captivating capital — a city of immaculate streets, profound history, world-class dining and forward momentum that defies every expectation. The essential gateway to gorilla trekking, and a destination in its own right.",
        image: '/images/destinations/rwanda/image-20260331125652.jpg',
        location: "Rwanda's Capital City",
        size: 'Metropolitan Capital',
        altitude: '~1,500 m',
        bestTime: 'Year-round (Jun–Sep & Dec–Feb preferred)',
        overview:
          "Kigali is one of Africa's most remarkable capital cities — clean, safe, orderly, and utterly captivating. Perched across a series of rolling hills at an elevation of roughly 1,500 metres, the city offers a cool climate, stunning views, and a sense of forward momentum that is rare on the continent. Rwanda's extraordinary transformation from the tragedy of 1994 into a model of reconciliation, development, and environmental consciousness is most visible here in its capital. Streets are immaculate — plastic bags are banned, and the last Saturday of every month is Umuganda, a community work day when residents clean and repair their neighbourhoods together. Kigali serves as the primary entry point for travellers heading to Volcanoes National Park for gorilla trekking, but the city rewards those who linger: the Kigali Genocide Memorial is one of Africa's most profound historical sites, while the vibrant Kimironko Market, contemporary art galleries, rooftop restaurants, and thriving café culture offer days of rich exploration.",
        whyVisit: [
          "Africa's Cleanest Capital — Kigali consistently ranks as one of the cleanest, safest, and most liveable cities on the continent, with well-maintained roads, green parks, and a visible civic pride.",
          'Gateway to Gorilla Trekking — Just 2–3 hours from Volcanoes National Park, Kigali is the natural starting point for gorilla and golden monkey trekking experiences.',
          "Kigali Genocide Memorial — One of Africa's most important historical sites, offering a deeply moving and essential experience of Rwanda's journey through tragedy to reconciliation.",
          "World-Class Dining & Nightlife — From rooftop bars with panoramic hill views to fine dining restaurants serving Rwandan and international cuisine, Kigali's food scene is exceptional.",
          'Contemporary African Art — The city hosts a thriving arts scene, with galleries like Inema Arts Center showcasing bold, vibrant work by Rwandan artists.',
          "Kimironko Market — One of East Africa's most colourful and well-organised markets, perfect for fabrics, crafts, fresh produce, and authentic local atmosphere.",
          "Coffee Culture — Rwanda produces some of Africa's finest single-origin coffee, and Kigali's cafés serve it with passion and expertise.",
          "Umuganda Community Spirit — Visit on the last Saturday of the month to witness Umuganda, Rwanda's unique community service tradition that has transformed the country's public spaces.",
          "Safe Solo & Female Travel — Kigali is widely regarded as one of Africa's safest cities for solo and female travellers, with low crime rates and a visible police presence.",
          "Rwanda's Economic Miracle — The city is a living showcase of Rwanda's Vision 2050 development agenda, with gleaming convention centres, tech hubs, and green architecture.",
        ],
        attractions: [
          {
            title: 'Kigali Genocide Memorial',
            body:
              "Visit the solemn and profoundly important memorial, which documents the 1994 genocide and honours the 250,000 victims buried on its grounds. One of Africa's most important historical sites — essential for understanding modern Rwanda.",
            image: '/images/destinations/rwanda/image-20260331125705.jpg',
          },
          {
            title: 'Inema Arts Center',
            body:
              "Explore one of East Africa's most dynamic contemporary art galleries, where resident artists create and sell bold, expressive work rooted in Rwandan culture and identity. A thriving showcase of Rwanda's creative renaissance.",
            image: '/images/destinations/rwanda/image-20260331125717.jpg',
          },
          {
            title: "Nyamirambo Women's Centre Walking Tour",
            body:
              "Join a community-led guided walk through Kigali's most authentic neighbourhood, sampling local food and hearing stories of women-led empowerment. One of the most genuine cultural experiences in the city.",
            image: '/images/destinations/rwanda/image-20260331125729.jpg',
          },
        ],
        activities: [
          {
            title: 'Kimironko Market',
            body:
              "One of East Africa's most colourful and well-organised markets — perfect for fabrics, crafts, fresh produce, and authentic local atmosphere. A highlight of any Kigali visit.",
            image: '/images/destinations/rwanda/image-20260331125738.jpg',
          },
          {
            title: 'Rooftop Dining & Kigali Coffee Culture',
            body:
              "From rooftop bars with panoramic hill views to fine dining restaurants serving Rwandan and international cuisine, Kigali's food and café scene is exceptional. Rwanda produces some of Africa's finest single-origin coffee.",
            image: '/images/destinations/rwanda/image-20260331125748.jpg',
          },
          {
            title: 'Presidential Palace Museum',
            body:
              "Explore the former residence of President Habyarimana, preserved exactly as it was on the night of April 6, 1994 — including the wreckage of the plane that was shot down. A powerful window into contemporary Rwandan history.",
            image: '/images/destinations/rwanda/image-20260331125809.jpg',
          },
        ],
        gettingThere:
          "Kigali is served by Kigali International Airport (KGL), with direct flights from Nairobi, Entebbe, Addis Ababa, Dubai, Brussels, and London. RwandAir is the national carrier offering connections across Africa and beyond. Overland, Kigali is approximately 9–10 hours from Kampala by road (via the Cyanika or Katuna border), and Beautiful Safaris Uganda arranges cross-border transfers for combined Uganda–Rwanda itineraries.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              "Kigali Marriott Hotel — flagship 5-star in the heart of the CBD. Rooftop pool, multiple restaurants, impeccable service.",
              "Radisson Blu Hotel & Convention Centre — contemporary luxury with Kigali's most impressive conference facilities.",
              "Mövenpick Hotel Kigali — sleek modern property with panoramic hill views and Swiss-standard hospitality.",
              "The Retreat by Heaven — boutique luxury in a beautiful hillside garden setting. Intimate, elegant, and very Kigali.",
            ],
          },
          {
            category: 'Upper Mid-Range',
            picks: [
              "Zaria Court Kigali — stylish, well-appointed suites in a quiet Kigali neighbourhood.",
              "The Pinnacle Kigali — modern apartment-style hotel with excellent facilities and great city views.",
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              "Hotel des Mille Collines — the historic Hotel Rwanda landmark. Iconic pool, beautiful gardens, central location.",
              "Serena Hotel Kigali — reliable, comfortable, and well-positioned in a quiet garden setting.",
              "Four Points by Sheraton — solid international-brand comfort in the city centre.",
              "The Nest — popular mid-range pick with a warm atmosphere and great guest reviews.",
            ],
          },
        ],
        practicalInfo: [
          { label: 'Visa', body: 'Most nationalities can obtain a Rwanda visa on arrival or via the online portal (irembo.gov.rw). East African Community passport holders enter visa-free.' },
          { label: 'Currency', body: 'Rwandan Franc (RWF). USD is widely accepted in hotels and safari operators. ATMs are plentiful in Kigali.' },
          { label: 'Language', body: 'Kinyarwanda, French, and English are all official languages. English is widely spoken in tourism and business settings.' },
          { label: 'Health', body: 'Yellow fever vaccination required. Malaria prophylaxis recommended, though risk is relatively low in Kigali due to altitude.' },
          { label: 'Plastic Bags', body: 'Completely banned in Rwanda. Do not bring plastic bags into the country; dispose of any before arrival.' },
          { label: 'Safety', body: "Kigali is one of Africa's safest cities. Normal travel precautions apply but crime against tourists is rare." },
          { label: 'Connectivity', body: 'Excellent 4G LTE coverage throughout the city. SIM cards available at the airport from MTN or Airtel Rwanda.' },
        ],
        faqs: [
          {
            q: 'How far is Kigali from Volcanoes National Park?',
            a: 'Volcanoes National Park is approximately 2–3 hours from Kigali by road (about 110km), making it easily reachable for gorilla trekking on either a day trip or as a multi-night stay at a park lodge. Helicopter transfers are also available.',
          },
          {
            q: 'Is Kigali safe for tourists?',
            a: "Yes — Kigali is consistently ranked as one of Africa\'s safest cities. Crime rates are low, streets are well-lit, and there is a visible police presence. Solo and female travellers report feeling very comfortable here.",
          },
          {
            q: 'Can I combine a Kigali visit with a Uganda safari?',
            a: 'Absolutely. Beautiful Safaris Uganda specialises in combined Uganda–Rwanda itineraries departing from Kigali, including gorilla trekking in both Bwindi (Uganda) and Volcanoes (Rwanda), as well as Uganda wildlife safaris.',
          },
          {
            q: 'What should I not bring to Rwanda?',
            a: 'Plastic bags are strictly prohibited and will be confiscated at the border or airport. Leave all single-use plastic bags at home and pack reusable alternatives.',
          },
        ],
      },
      {
        slug: 'nyungwe',
        name: 'Nyungwe Forest National Park',
        blurb:
          "One of Africa's oldest and most biodiverse rainforests — 1,019 km² of ancient montane forest home to 13 primate species including chimpanzees, and the iconic canopy walkway suspended 70 metres above the forest floor.",
        image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
        location: 'Southwestern Rwanda',
        size: '1,019 km²',
        altitude: '1,600 — 2,950 m',
        bestTime: 'June–September & December–February',
        overview:
          "Nyungwe Forest National Park is one of Africa's oldest and most biodiverse rainforests, covering 1,019 square kilometres of ancient montane forest in Rwanda's south-west corner. Estimated to be over 29,000 years old, Nyungwe has survived multiple ice ages and global climate shifts, earning its status as one of the continent's most ecologically significant protected areas. The forest is home to 13 primate species — the highest concentration in East Africa — including chimpanzees, Angola colobus, L'Hoest's monkeys, olive baboons, and the rare grey-cheeked mangabey. Nyungwe's iconic canopy walkway — a series of suspended bridges stretching 200 metres through the forest canopy at heights of up to 70 metres — has become one of Rwanda's most photographed tourist attractions. The park is also exceptional for birdwatching, with over 310 recorded species including 29 Albertine Rift endemics. The forest protects the headwaters of the Nile river, adding historical and geographical significance to its ecological importance.",
        attractions: [
          {
            title: 'Chimpanzee Trekking',
            body: "Follow expert trackers through dense rainforest to spend time with habituated chimpanzee groups, watching them forage, socialise, and travel through their ancient forest home — an experience increasingly rivalling Uganda's Kibale Forest.",
            image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
          },
          {
            title: 'Canopy Walkway Experience',
            body: "Cross the 200m suspended canopy bridge network at heights of up to 70m, scanning for colobus monkeys, turacos, and hornbills in the forest crown — one of Rwanda's most spectacular and photographed experiences.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-15.jpg',
          },
          {
            title: 'Colobus Monkey Habituation',
            body: "Join trackers following troops of Angola colobus monkeys as they move through the forest — one of the most visually spectacular primate encounters in Africa, with troops of hundreds moving through the canopy overhead.",
            image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
          },
        ],
        activities: [
          {
            title: "One&Only Nyungwe House Stay",
            body: "Set within a working tea estate at the forest edge — exceptional service, sweeping views across the plantation to the ancient forest, and the most luxurious base for all Nyungwe activities.",
            image: '/images/parks/rwanda/volcanoes/1750336906468-the-sanctuary-at-bisate-view-1-aerial.jpg',
          },
          {
            title: 'Albertine Rift Birding',
            body: "Over 310 recorded bird species including 29 Albertine Rift endemics found nowhere else on earth — Nyungwe is one of Africa's premier birdwatching destinations for serious listers.",
            image: '/images/activities/birding/lensoffthegreen-1748944212110.jpg',
          },
          {
            title: 'Combine with Lake Kivu',
            body: "Nyungwe is most rewarding when combined with a Lake Kivu stay, creating a complete south-western Rwanda circuit of ancient forest, primates, and lakeside relaxation.",
            image: '/images/parks/rwanda/akagera/1738328545766-magashi-sundowners-12-24-tc-012.jpg',
          },
        ],
        gettingThere:
          "Nyungwe Forest is approximately 5–6 hours by road from Kigali (225km south-west). Most visitors travel via Huye (Butare), Rwanda's second city. The park entrance at Uwinka is on the main Huye–Cyangugu highway. Some travellers combine Nyungwe with a Lake Kivu stay, arriving via the scenic road from Cyangugu. Domestic flights may connect Kigali to Kamembe airport near the forest.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              "One&Only Nyungwe House — set within a working tea estate at the forest edge. Exceptional service and sweeping views across the plantation to the forest.",
              "Nyungwe Top View Hill Hotel — elevated position with panoramic forest views.",
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              "Gisakura Guest House — park-operated, simple and convenient, right by the forest.",
              "Bigugu Eco-Lodge — comfortable eco-lodge close to the main trailheads.",
            ],
          },
        ],
        practicalInfo: [
          { label: 'Permits', body: 'Chimpanzee trekking permit: USD 100 per person. Canopy walkway: USD 60 per person. Book through Rwanda Development Board or your tour operator.' },
          { label: 'Fitness', body: 'Chimpanzee trekking involves navigating steep, dense forest terrain. Good fitness and sturdy waterproof hiking boots are essential.' },
          { label: 'What to Wear', body: 'Long waterproof trousers, long-sleeved shirt, waterproof jacket, gaiters, and solid hiking boots. Rain gear is essential in all seasons.' },
          { label: 'Altitude', body: 'The park ranges from 1,600m to 2,950m. Expect cool to cold temperatures, especially at night. Pack warm layers.' },
          { label: 'Insects & Repellent', body: 'Apply insect repellent before entering the forest. Long clothing provides essential protection against safari ants and other forest insects.' },
          { label: 'Start Early', body: 'All trekking activities depart from park headquarters at 5:00–6:00am to maximise time finding primates before they move deep into the forest.' },
        ],
        faqs: [
          {
            q: "Is chimpanzee trekking in Nyungwe as good as in Uganda?",
            a: "Nyungwe's chimpanzee trekking is increasingly regarded as one of Africa's finest, with well-habituated groups and a beautiful forest setting. Uganda's Kibale Forest remains the global leader in volume, but Nyungwe offers a more remote, adventurous experience with fewer fellow trekkers.",
          },
          {
            q: 'How long does the canopy walkway take?',
            a: 'The canopy walkway experience takes approximately 1.5–2 hours, including the walk to and from the bridge network. It can be combined with a short forest hike for a half-day activity.',
          },
          {
            q: 'Can I combine Nyungwe with gorilla trekking in Rwanda?',
            a: "Yes — a classic Rwanda safari combines Volcanoes National Park (gorilla trekking) in the north with Nyungwe (chimpanzees and canopy walk) in the south, often with a Lake Kivu stop in between.",
          },
          {
            q: "What primates can I see in Nyungwe?",
            a: "Nyungwe hosts 13 primate species including chimpanzees, Angola colobus, L'Hoest's monkey, grey-cheeked mangabey, olive baboon, vervet monkey, blue monkey, and several nocturnal species including bush babies and pottos.",
          },
        ],
      },
      {
        slug: 'lake-kivu',
        name: 'Lake Kivu',
        blurb:
          "One of Africa's Great Lakes — a deep mountain lake at 1,460m above sea level, entirely safe for swimming, fringed by volcanic hills, island archipelagos, and Rwanda's most beautiful lakeside resort towns.",
        image: '/images/destinations/rwanda/image-20260331125636.jpg',
        location: "Rwanda's Western Shore",
        size: '2,700 km² (lake surface)',
        altitude: '1,460 m',
        bestTime: 'Year-round (Jun–Sep & Dec–Feb preferred)',
        overview:
          "Lake Kivu is one of Africa's Great Lakes and one of the continent's most beautiful and unique freshwater bodies. Straddling the border between Rwanda and the Democratic Republic of Congo, this deep mountain lake sits at 1,460 metres above sea level, framed by steep volcanic hills, lush island archipelagos, and the dramatic Congo-Nile watershed escarpment. Unlike many East African lakes, Lake Kivu is free from bilharzia and dangerous aquatic animals, making it safe for swimming and water sports — a rare quality that has made it Rwanda's premier beach destination. The lake's shores are dotted with charming resort towns, the most prominent being Rubavu (Gisenyi) in the north and Rusizi (Cyangugu) in the south. The Congo Nile Trail — a 227-kilometre cycling and hiking route along the lake's shore — is rapidly establishing itself as one of Africa's premier adventure tourism routes.",
        attractions: [
          {
            title: 'Island Boat Trip',
            body: "Take a motorboat or traditional wooden pirogue to explore the lake's island archipelago, stopping for swimming, snorkelling, and picnics on secluded shores in crystal-clear mountain water.",
            image: '/images/parks/rwanda/akagera/1738327984199-magashi-boating-12-24-tc-025.jpg',
          },
          {
            title: 'Congo Nile Trail Cycling',
            body: "Rent a bicycle and cycle sections of the scenic 227km lakeside trail through fishing villages, hill farms, coffee estates, and forest patches — one of Africa's most rewarding adventure tourism routes.",
            image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
          },
          {
            title: 'Sunset Boat Cruise',
            body: "Board a dhow or motor launch for a lake sunset cruise as the volcanic hills of Congo reflect in golden water — one of the most spectacular evenings anywhere in Rwanda.",
            image: '/images/parks/rwanda/akagera/1738328545766-magashi-sundowners-12-24-tc-012.jpg',
          },
        ],
        activities: [
          {
            title: 'Kayaking on Lake Kivu',
            body: "Paddle on the lake's calm highland waters, exploring bays and coves at a leisurely pace with magnificent volcanic hill views stretching to the Congo border.",
            image: '/images/parks/uganda/lake-mburo/52760819657-a6f9d6bf99-o.jpg',
          },
          {
            title: 'Lake Kivu Beach Relaxation',
            body: "Spend a day at one of the lake's resort beaches — swimming in clear, safe mountain water and enjoying fresh sambaza (the local endemic sardine, deep-fried and eaten whole) and cold Primus beer.",
            image: '/images/destinations/rwanda/image-20260331125809.jpg',
          },
          {
            title: 'Rusizi & Southern Shore Exploration',
            body: "Visit the southern shore town of Rusizi near Nyungwe, exploring the DRC border area and the dramatic southern lake scenery — often combined with a Nyungwe Forest visit on the same circuit.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.jpg',
          },
        ],
        gettingThere:
          "Rubavu (Gisenyi) on Lake Kivu's northern shore is approximately 2.5–3 hours from Kigali by road (157km) via Musanze. Domestic flights may connect Kigali to Kamembe Airport near Rusizi on the southern shore. Lake Kivu is ideally positioned on a northern Rwanda circuit combining Volcanoes National Park, and pairs perfectly with a Nyungwe Forest visit on the south-western circuit.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              "Kivu Serena Hotel (Rubavu) — Rwanda's premier lakeside resort with beautiful gardens and direct beach access.",
              "Cormoran Lodge (Kibuye/Karongi) — scenic hillside setting overlooking the lake's island-studded waters.",
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              "Hotel La Palme (Rubavu) — reliable comfort in the heart of Rubavu town.",
              "Inzu Lodge (Karongi) — charming hillside lodge with lake views.",
              "Paradise Malahide Hotel — relaxed lakeside atmosphere, good value.",
            ],
          },
        ],
        practicalInfo: [
          { label: 'Swimming Safety', body: 'Lake Kivu is safe for swimming — no bilharzia, no crocodiles, and no dangerous aquatic life. The best swimming beaches are at Rubavu and around the islands.' },
          { label: 'DRC Border', body: 'The Rubavu-Goma border is accessible to tourists with appropriate visas. Goma and Nyiragongo volcano tours can be arranged from Rubavu with specialist operators.' },
          { label: 'Local Fish', body: "Try sambaza — the small endemic sardine-like fish that is Lake Kivu's speciality, deep-fried and eaten whole. A must-try local delicacy." },
          { label: 'Currency', body: 'Rwandan Francs used in Rubavu. USD accepted in hotels and major restaurants.' },
          { label: 'Boat Hire', body: 'Motorboats and traditional pirogues can be hired from the beach at Rubavu and Karongi. Negotiate rates in advance and agree on whether fuel is included.' },
          { label: 'Congo Nile Trail', body: 'The trail can be walked or cycled in sections. Bicycle hire available in Rubavu and Karongi. Full trail takes 7–10 days to complete.' },
        ],
        faqs: [
          {
            q: 'Is Lake Kivu safe for swimming?',
            a: "Yes — Lake Kivu is one of Africa's only major lakes entirely safe for swimming. There is no bilharzia, no crocodiles, and no dangerous aquatic life. The lake's high altitude and unique chemistry make it exceptionally clean and safe.",
          },
          {
            q: 'What is the Congo Nile Trail?',
            a: "The Congo Nile Trail is a 227km hiking and cycling route along the western shore of Lake Kivu, connecting Rubavu in the north to Rusizi in the south. It passes through fishing villages, terraced hillside farms, coffee estates, and forest patches — one of Africa's most scenic adventure routes.",
          },
          {
            q: 'Can I visit the DRC from Lake Kivu?',
            a: "Yes — the Rubavu-Goma border crossing is accessible for day trips into the Democratic Republic of Congo. From Goma, specialist operators run tours to the active Nyiragongo volcano. Ensure you have a valid DRC visa before attempting the crossing.",
          },
          {
            q: 'How do I combine Lake Kivu with gorilla trekking?',
            a: "Lake Kivu is an ideal add-on to a Volcanoes National Park gorilla trekking trip. After trekking, drive 2.5 hours to Rubavu for 1–2 nights of lake relaxation — a perfect combination of high-altitude wildlife adventure and lakeside recovery.",
          },
        ],
      },
    ],
    privilegedAccess: [
      {
        title: 'Behind-the-Scenes Briefing — Karisoke Research Centre',
        location: 'Volcanoes National Park, NW Rwanda',
        body: "An exclusive opportunity to meet with a senior researcher at the Dian Fossey Gorilla Fund's Karisoke Research Centre. Receive a private briefing on current gorilla monitoring methods, the science behind habituation, and how your permit fee flows directly into the conservation programme — before your trek begins.",
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
        body: "Join a dedicated research team for a morning tracking Rwanda's critically endangered black and white rhinos — reintroduced to Akagera after an absence of decades. Accompany researchers monitoring collar data, recording behaviour, and assessing range. Scientific insight few travellers ever receive, in a park that represents one of Africa's most successful rewilding stories.",
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
        body: "Six spherical forest villas built in an eroded volcanic cone. An active reforestation programme on-site. Among Africa\'s most architecturally significant lodges.",
        image: '/images/lodges/rwanda/volcanoes-national-park/wildernes-bisate-lodge/1753110933515-bisate-gorilla-trekking-06-25-fr-31.jpg',
      },
      {
        name: "One&Only Gorilla's Nest",
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
        body: "The finest arrival and departure experience in Kigali — world-class spa, the city's best dining, and a serene garden setting.",
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
        "Rwanda is Africa's most remarkable conservation success story. In three decades, the country has transformed from crisis to become one of the continent's most sought-after destinations — its gorillas thriving, its parks rewilded, its lodges setting the global standard for sustainable luxury.",
      bullets: [
        'Volcanoes National Park — the original Dian Fossey gorilla habitat',
        "Bisate Lodge — one of Africa's most awarded conservation properties",
        'Akagera — the Big Five, restored through community-led conservation',
        'Nyungwe — ancient montane forest with chimpanzees and canopy walks',
        "Kigali — one of Africa's cleanest, safest and most fascinating cities",
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
          "A Rwanda gorilla trekking permit costs USD 1,500 per person per trek — the highest in Africa, and deliberately so. The premium funds Rwanda's world-class conservation programme directly. We secure permits as part of your itinerary.",
      },
      {
        question: 'Can I see the Big Five in Rwanda?',
        answer:
          'Yes — Akagera National Park in eastern Rwanda is home to lion, leopard, elephant, buffalo and black rhino, successfully reintroduced through a partnership with African Parks. A classic Rwanda itinerary combines Volcanoes with Akagera.',
      },
      {
        question: 'How do I get to Rwanda?',
        answer:
          "Rwanda's Kigali International Airport has direct connections to London Heathrow (RwandAir), Amsterdam, Brussels, Dubai and Nairobi. It is one of the easiest African countries to fly to from Europe. Your trip manager will advise on the best routing.",
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
      "Where else on earth does a single horizon contain a million wildebeest, a pride of lions in golden light, and a hot-air balloon drifting silently at dawn? Kenya is Africa's most storied safari destination — and for those who know where to look, it remains a place of profound, unhurried discovery.",
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
          "The Maasai Mara National Reserve is Kenya's most celebrated wildlife sanctuary and one of the greatest wildlife destinations on Earth. Covering 1,510 square kilometres of open savannah grassland in Kenya's south-western corner, the Mara forms the northern extension of Tanzania's Serengeti ecosystem — together creating the world's largest continuous savannah wildlife sanctuary stretching over 25,000 square kilometres. The Maasai Mara is most famous for the annual Great Wildebeest Migration, widely regarded as the greatest natural spectacle on the planet. Between July and October each year, over 1.5 million wildebeest, accompanied by hundreds of thousands of zebra and gazelle, cross the Mara River in dramatic scenes — with enormous Nile crocodiles launching from the water to intercept the crossing herds. Beyond the Migration, the Mara maintains the highest density of large predators in Africa year-round. Lion prides are large and frequently visible in open grassland. Leopard are seen with exceptional regularity along the riverine forest. Cheetah hunt on the open plains. The Mara's private conservancy system — including Mara North, Naboisho, Ol Kinyei and Oiseki — extends the protected ecosystem, offering exclusive game drives and premium lodge experiences beyond the main reserve's boundaries.",
        attractions: [
          {
            title: 'Mara River Crossing',
            body:
              "Position at the river from early morning to watch wildebeest build courage and plunge into the crocodile-filled waters in one of nature's most breathtaking dramas. The iconic river crossings occur from late July through October, peaking in August and September.",
            image: '/images/parks/kenya/masai-mara/the-dangers-of-crossing-the-mara-river.jpg',
          },
          {
            title: 'Big Five Game Drive',
            body:
              'Morning and afternoon drives with expert Maasai guides tracking lion prides, leopard, cheetah, elephant herds and buffalo across the open Mara plains and private conservancies. The Mara offers year-round predator sightings unmatched anywhere in Africa.',
            image: '/images/parks/kenya/masai-mara/activites-game-drive.jpg',
          },
          {
            title: 'Hot Air Balloon Safari',
            body:
              "Rise at dawn for a magical balloon flight over the Mara, watching herds of wildebeest, elephant and giraffe from above before landing for a champagne bush breakfast. The definitive Maasai Mara experience and one of Africa's most iconic wildlife moments.",
            image: '/images/parks/kenya/masai-mara/hot-air-balloon-safari.jpg',
          },
        ],
        activities: [
          {
            title: 'Private Conservancy Game Drives',
            body: 'Off-road, night-drive and walking-safari options outside the main reserve — lower vehicle density, more privacy, and exclusive sightings unavailable within the public reserve.',
            image: '/images/lodges/kenya/masai-mara/mara-plains-camp/getting-a-bird-s-eye-view-in-the-omc.jpg',
          },
          {
            title: 'Sundowners with the Maasai',
            body: "Bush bar set up at sunset on a private termite mound or riverbank as the Mara sky blazes in shades of gold and crimson — cultural depth alongside the safari.",
            image: '/images/parks/kenya/masai-mara/angama-mara-s-sundowner-boma.jpg',
          },
          {
            title: 'Guided Bush Walk',
            body: 'Walk the Mara plains with an armed Maasai ranger guide, reading animal tracks and experiencing the landscape at a pace impossible from a vehicle. Available in most private conservancies bordering the reserve.',
            image: '/images/parks/kenya/masai-mara/cheetahs-in-the-conservancy.jpg',
          },
        ],
        faqs: [
          {
            q: 'When is the best time to see the Great Migration in the Maasai Mara?',
            a: 'The iconic Mara River crossings typically occur from late July to October, peaking in August and September. Exact timing varies year to year depending on rainfall. The wildebeest are present in the Mara from approximately July through November.',
          },
          {
            q: 'Reserve vs conservancy — which is better?',
            a: 'Conservancies (Mara North, Olare Motorogi, Mara Naboisho) offer fewer vehicles per sighting, off-road driving and night drives. The main reserve can get crowded at crossings in peak season. Many of our itineraries combine both.',
          },
          {
            q: 'How many days should I spend in the Maasai Mara?',
            a: 'A minimum of 3 nights is recommended — two full days of game drives. During Migration season, 4–5 nights maximises your chances of witnessing river crossings.',
          },
          {
            q: 'Is the Maasai Mara or Serengeti better for the Migration?',
            a: 'Both are outstanding. The Mara offers the famous river crossings; the Serengeti offers the calving season (January–February) and a longer stretch of Migration territory. Many travellers visit both on a combined Kenya–Tanzania itinerary.',
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
          "Amboseli National Park covers 392 sq km and is home to one of Africa's most iconic images — vast elephant herds moving across open plains with the snow-capped peak of Mount Kilimanjaro behind them. The park protects one of the highest densities of free-roaming elephants in Africa and has been the site of landmark elephant research for over 50 years. A swampy heart fed by Kilimanjaro's snowmelt sustains hundreds of elephants year-round, alongside lion, cheetah, giraffe, hippo and over 600 bird species. The Observation Hill viewpoint delivers one of the most photographed sunsets in Africa — Kilimanjaro glowing pink above a sea of elephants as the plains below turn to gold.",
        attractions: [
          {
            title: 'Big-Tusker Elephant Herds',
            body:
              "Among the world's largest concentrations of giant-tusked elephants, easily observed from open vehicles. Amboseli's elephant research, running for over 50 years, has produced the most comprehensive elephant behavioural database in the world — and the guides here know individual animals by name.",
            image: '/images/parks/kenya/amboseli/amboseli-elephants.jpg',
          },
          {
            title: 'Observation Hill Sundowners with Kilimanjaro',
            body:
              "Climb Observation Hill at sunset for the definitive Amboseli panorama — Africa's highest peak turning gold and pink behind a sea of elephants at the swamp below. Kilimanjaro is clearest in early morning and late afternoon during the dry months.",
            image: '/images/parks/kenya/amboseli/sundowner-on-observation-hill-overlooking-mt-kilimanjaro.jpg',
          },
          {
            title: 'Swamp & Wetland Birdlife',
            body:
              "Amboseli's permanent swamps — fed year-round by Kilimanjaro's snowmelt — host pelicans, flamingos, herons, sacred ibis and over 600 bird species. The swamps also draw lion and cheetah that hunt the waterbirds and wading birds at the water's edge.",
            image: '/images/parks/kenya/amboseli/amboseli-waterhole.jpg',
          },
        ],
        activities: [
          {
            title: 'Stay at ol Donyo Lodge',
            body:
              "Great Plains' spectacular property in the Chyulu Hills with hide-walking, horseriding and Maasai cultural visits — the most complete safari experience in the greater Amboseli ecosystem.",
            image: '/images/lodges/kenya/amboseli-national-park/ol-donyo-lodge-1/masaai.jpg',
          },
          {
            title: 'Stay at Elewana Tortilis Camp',
            body: 'Inside the park boundary with Kilimanjaro views from every tent — the most photogenic lodge in Amboseli and the closest to the iconic elephant herds.',
            image: '/images/lodges/kenya/amboseli-national-park/elewana-tortilis-camp-amboseli/elewana-tortilis-camp-amboseli-1.jpg',
          },
          {
            title: 'Maasai Cultural Village Visit',
            body:
              'Spend a morning with a local Maasai community — traditional homestead, warrior demonstrations and beadwork. The pastoral Maasai culture has coexisted with Amboseli wildlife for centuries and adds rich human depth to the safari experience.',
            image: '/images/parks/kenya/amboseli/view-from-observation-hill.jpg',
          },
        ],
        faqs: [
          {
            q: 'When is Kilimanjaro most visible?',
            a: "The mountain is famously shy. Your best window is dawn and the hour before sunset during the dry months (June–October, January–February), when the cloud cap typically lifts. Plan two nights minimum to maximise your chances.",
          },
          {
            q: 'How does Amboseli pair with the Mara?',
            a: 'Beautifully — a quick scheduled flight links the two, and the contrast is the magic. Amboseli for elephants and Kilimanjaro, the Mara for big-cat density and (in season) the migration.',
          },
          {
            q: 'Is Amboseli good for families?',
            a: "Yes. Amboseli's short distances, large elephant herds and easy game viewing make it one of the most family-friendly parks in East Africa. ol Donyo and Tortilis both welcome children with dedicated family activities.",
          },
          {
            q: 'How do I get to Amboseli?',
            a: 'Fly from Wilson Airport to Amboseli airstrip in 45 minutes — or drive from Nairobi in approximately 4 hours via Namanga. The flight is strongly recommended to maximise time in the park.',
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
            title: "Grevy's Zebra Spotting",
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
          "Kenya's remote northern frontier — home to the Samburu Special Five (Grevy's zebra, reticulated giraffe, gerenuk, beisa oryx and Somali ostrich) found nowhere else in the region, in a dramatic landscape defined by the Ewaso Ng'iro River.",
        image: '/images/parks/kenya/samburu/grevys-zebra-1.jpg',
        location: 'Northern Kenya',
        size: '165 km² (plus surrounding conservancies)',
        altitude: '800 — 1,250 m',
        bestTime: 'June–October & January–February',
        overview:
          "Samburu National Reserve is one of Kenya's most compelling wildlife destinations — a remote, dramatic wilderness in the arid north where the Ewaso Ng'iro River cuts through a landscape of doum palms, acacia scrub and dramatic rocky escarpments to create an unexpected oasis of extraordinary biodiversity. What makes Samburu genuinely unique in East Africa is its collection of five wildlife species found nowhere else in the region — collectively known as the Samburu Special Five: the reticulated giraffe, Grevy's zebra, Somali ostrich, beisa oryx and gerenuk. These northern dry-country specialists occur only in Kenya's arid northern frontier, making Samburu an essential destination for any serious wildlife enthusiast. The Ewaso Ng'iro River is Samburu's lifeblood — a permanent waterway attracting enormous concentrations of wildlife in an otherwise stark landscape. Game drives along the river reveal elephant drinking in the morning light, crocodile basking on the banks, leopard resting in the riverside trees, and a constant parade of dry-country specialists. The river is also the cultural heartland of the Samburu people — a Nilo-Cushitic community closely related to the Maasai, whose distinctive beaded jewellery, warrior traditions and semi-nomadic cattle culture add rich dimensions to the wilderness experience.",
        attractions: [
          {
            title: 'Samburu Special Five Game Drive',
            body:
              "Five iconic dry-country species found only in Kenya's northern frontier: reticulated giraffe, Grevy's zebra, Somali ostrich, beisa oryx and gerenuk. Dedicated drives with specialist northern Kenya guides offer the best opportunity to observe all five in a single morning.",
            image: '/images/parks/kenya/samburu/grevys-zebra.jpg',
          },
          {
            title: "Ewaso Ng'iro River Drive",
            body:
              "Follow the river's course as elephants drink at dawn, crocodiles bask on the banks and leopard rest in the doum palm and acacia trees. The Ewaso Ng'iro is the lifeblood of the reserve — a constant theatre of wildlife in one of East Africa's most photogenic riverside habitats.",
            image: '/images/parks/kenya/samburu/sasaab-1.jpg',
          },
          {
            title: 'Leopard Tracking',
            body:
              "Samburu has one of the highest leopard sighting rates in Kenya. Leopards are regularly seen resting in the riverside acacia and doum palm trees along the Ewaso Ng'iro — making sightings far more predictable than in most other Kenyan parks. Samburu's guides are expert trackers.",
            image: '/images/parks/kenya/samburu/kenya-8346.jpg',
          },
        ],
        activities: [
          {
            title: 'Stay at Sasaab',
            body:
              "The Safari Collection's Moroccan-inspired villa-style lodge above the Ewaso Ng'iro — vast open-air suites with private plunge pools and one of the most distinctive architectural addresses in northern Kenya.",
            image: '/images/parks/kenya/samburu/sasaab.jpg',
          },
          {
            title: 'Camel-Back Bush Walks',
            body:
              "A relaxed half-day walking safari with a string of pack camels — the Samburu way of crossing the bush, with bush breakfast served on a riverbank. A genuinely immersive and culturally authentic experience.",
            image: '/images/parks/kenya/laikipia-loisaba/1752747977434-kenya-suyian-conservancy-walk-with-camels-5.jpg',
          },
          {
            title: 'Samburu Cultural Village Visit',
            body:
              "A genuine, unstaged visit to a Samburu manyatta — meeting warrior families and seeing the extraordinary beaded jewellery, warrior demonstrations and the everyday life of a semi-nomadic pastoralist community whose culture is distinct from the Maasai despite their relatedness.",
            image: '/images/parks/kenya/samburu/samburu-village-visit-residents.jpg',
          },
        ],
        faqs: [
          {
            q: 'What is the Samburu Special Five?',
            a: "The Samburu Special Five are five wildlife species found only in Kenya's arid northern frontier: the reticulated giraffe (bold patterning), Grevy's zebra (narrowly striped, endangered), Somali ostrich (blue-necked), beisa oryx (scimitar-horned antelope) and gerenuk (long-necked antelope that stands on hind legs to browse). None occur in Kenya's southern parks.",
          },
          {
            q: 'How does Samburu compare to the Maasai Mara?',
            a: "Samburu and the Mara offer completely different experiences. The Mara has the Migration, Big Five in open grassland and classic savannah. Samburu offers exclusive northern wildlife species, far fewer vehicles, dramatic dry-country landscapes and an authentic cultural encounter with the Samburu people. Both are essential Kenya experiences.",
          },
          {
            q: 'Can I see leopard in Samburu?',
            a: "Yes — Samburu has one of the highest leopard sighting rates in Kenya. Leopards are regularly seen resting in the riverside acacia and doum palm trees along the Ewaso Ng'iro, making sightings far more predictable than in most other parks.",
          },
          {
            q: 'Is it hot?',
            a: "Yes, Samburu is the warmest of Kenya's classic safari regions — expect 30–35°C in the daytime. Lodges are designed around the heat with airy architecture, pools and siesta hours between midday and late afternoon.",
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
            body: "The fissure-falls on the Galana River and the world\'s longest lava flow at Yatta — Tsavo\'s scale is geological as much as wild.",
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
      {
        slug: 'lake-nakuru',
        name: 'Lake Nakuru National Park',
        blurb:
          "A compact soda lake sanctuary in the heart of the Great Rift Valley — famous for its dramatic flamingo flocks, Kenya's best rhino viewing, and remarkable wildlife diversity packed into just 188 square kilometres.",
        image: '/images/parks/kenya/lake-nakuru/flamingos-lake-nakuru.jpg',
        location: 'Central Kenya, Rift Valley',
        size: '188 km²',
        altitude: '1,760 m',
        bestTime: 'June–October & January–February',
        overview:
          "Lake Nakuru National Park is one of Kenya's most visited and visually spectacular parks — a compact 188 square kilometre sanctuary built around the alkaline soda lake of Lake Nakuru in the heart of the Great Rift Valley. At its most spectacular, Lake Nakuru was home to millions of lesser flamingos that turned its shores an extraordinary shade of pink — one of the most famous wildlife images in the world. Flamingo concentrations fluctuate as the birds periodically shift to other Rift Valley lakes, but even when flamingo numbers are reduced, Lake Nakuru remains an outstanding wildlife destination. It is now Kenya's best park for rhino viewing, with both black and white rhinos protected within a 74km electric security fence — one of the highest rhino densities in Africa. Beyond rhinos and flamingos, Lake Nakuru supports remarkably diverse wildlife for its size. Euphorbia-studded escarpment and forested ridges shelter leopard, lion, hyena, waterbuck, buffalo and Rothschild's giraffe. The lake draws pelicans, cormorants and an extraordinary diversity of waterbirds. Nakuru is easily combined with Kenya's other Rift Valley attractions — Lake Bogoria, Lake Elementaita and Ol Pejeta Conservancy.",
        attractions: [
          {
            title: 'Flamingo Shore Drive',
            body:
              "Drive the lake's perimeter road scanning for flamingo concentrations, pelican flocks and the extraordinary diversity of Nakuru's waterbirds. The pink wash of thousands of lesser flamingos against the alkaline white shore is one of Kenya's most photographed natural spectacles.",
            image: '/images/parks/kenya/lake-nakuru/flamingos-lake-nakuru.jpg',
          },
          {
            title: 'Rhino Tracking',
            body:
              "Focus a dedicated game drive on tracking Nakuru's black and white rhino populations — one of Kenya's best rhino viewing opportunities. The park's electric security fence has created one of the highest rhino densities in Africa, and sightings are excellent year-round.",
            image: '/images/parks/kenya/lake-nakuru/rhinos-lake-nakuru.jpg',
          },
          {
            title: "Baboon Cliff & Rothschild's Giraffe",
            body:
              "Drive to Baboon Cliff, the park's signature panoramic viewpoint, for a sweeping view of the entire lake and Rift Valley floor. Then photograph the elegant and endangered Rothschild's giraffe against the lake backdrop — an image unique to Nakuru.",
            image: '/images/parks/kenya/lake-nakuru/baboon-cliff-view.jpg',
          },
        ],
        activities: [
          {
            title: 'Leopard & Lion Tracking',
            body:
              "The lake-shore forest is excellent leopard habitat — the park's resident individuals are regularly spotted in forest trees and rocky outcrops. Nakuru's lion pride is also regularly located by guides in the woodland and grassland habitats.",
            image: '/images/lodges/kenya/lake-nakuru-national-park/the-cliff/The Cliff_3.jpg',
          },
          {
            title: 'Stay at Sarova Lion Hill',
            body:
              "Perched on Lion Hill with panoramic views over the lake and savannah — the classic Nakuru lodge address, combining comfort with direct park access and excellent guiding.",
            image: '/images/lodges/kenya/lake-nakuru-national-park/the-cliff/The Cliff_1.jpg',
          },
          {
            title: 'Rift Valley Two-Lake Circuit',
            body:
              "Combine Lake Nakuru with Lake Naivasha (60km south) and Lake Bogoria for a scenic Rift Valley circuit — the flamingos, hot springs and geysers of Bogoria alongside Nakuru's rhinos make one of Kenya's finest scenic road journeys.",
            image: '/images/lodges/kenya/lake-nakuru-national-park/loldia-house-1/Governors Loldia House.jpg',
          },
        ],
        faqs: [
          {
            q: 'Are the flamingos still at Lake Nakuru?',
            a: "Flamingo numbers at Lake Nakuru fluctuate significantly based on water levels and algae growth cycles. In some years the lake hosts millions; in others, most flamingos shift to Lake Bogoria or Lake Magadi. Check with your operator for current flamingo conditions before booking specifically for flamingos.",
          },
          {
            q: 'Does Lake Nakuru have the Big Five?',
            a: "Lake Nakuru has four of the Big Five — lion, leopard, buffalo, and both black and white rhino. Elephant are occasionally present but not residents. For rhino viewing specifically, Nakuru is one of Kenya's best options.",
          },
          {
            q: 'How long does a Lake Nakuru game drive take?',
            a: "The park is small enough to cover thoroughly in half a day. A typical full-day visit includes a morning game drive, lunch at a park lodge, and afternoon game drive — with return to Nairobi possible by early evening.",
          },
          {
            q: 'Can I combine Lake Nakuru with the Maasai Mara?',
            a: "Yes — Nakuru lies en route between Nairobi and the Mara, making it easy to stop for a game drive when driving to or from the Mara. Some travellers do a half-day at Nakuru and continue to a Mara lodge for the night.",
          },
        ],
      },
      {
        slug: 'nairobi',
        name: 'Nairobi',
        blurb:
          "Africa's safari capital — a dynamic metropolis where lions and rhinos roam in a national park on the city's doorstep, elephant orphans are bottle-fed at 11am, and giraffes join guests for breakfast.",
        image: '/images/lodges/kenya/nairobi/giraffe-manor/a-spot-of-tea-and-a-giraffe.jpg',
        location: 'Central Kenya',
        size: 'Metropolitan city at 1,660 m elevation',
        altitude: '1,660 m',
        bestTime: 'Year-round',
        overview:
          "Nairobi is Africa's safari capital — a sprawling, energetic metropolis of over 4 million people that sits at the intersection of the modern African city and the wild natural world. What makes Nairobi genuinely unique among world capitals is the presence of Nairobi National Park directly on the city's doorstep — a 117 square kilometre wildlife sanctuary where lion, leopard, black rhino, buffalo and giraffe roam against the backdrop of the city's skyscraper skyline. Watching a giraffe walk past with glass towers behind it is one of Africa's most surreal and memorable visual experiences, available within 20 minutes of the city centre. Beyond the national park, Nairobi offers a richness of wildlife and conservation experiences unmatched by any other African capital. The David Sheldrick Wildlife Trust operates the world's most successful elephant orphanage. The AFEW Giraffe Centre allows visitors to hand-feed endangered Rothschild's giraffes at eye level. For safari travellers, Nairobi is the natural hub for Kenya's extraordinary network of national parks and reserves, all accessible within half a day's drive.",
        attractions: [
          {
            title: 'Nairobi National Park Game Drive',
            body:
              "A morning game drive through the world's only capital city wildlife park, with good chances of lion, leopard, rhino, buffalo and giraffe against the city skyline. The juxtaposition of wild animals and glass towers is genuinely unlike anything else in Africa.",
            image: '/images/parks/kenya/masai-mara/activites-game-drive.jpg',
          },
          {
            title: 'David Sheldrick Elephant Orphanage',
            body:
              "Attend the daily 11:00am visiting hours to watch orphaned elephant calves being bottle-fed and mud-bathed by their dedicated keepers. The world's most successful elephant orphanage and one of Africa's most moving wildlife encounters.",
            image: '/images/parks/kenya/amboseli/amboseli-elephants.jpg',
          },
          {
            title: 'Giraffe Centre',
            body:
              "Hand-feed Rothschild's giraffes from an elevated platform at the AFEW Giraffe Centre — one of Africa's most joyful and photogenic wildlife experiences. The same endangered subspecies featured at Giraffe Manor joins guests for an intimate eye-level encounter.",
            image: '/images/lodges/kenya/nairobi/giraffe-manor/giraffes-popping-in-for-treats.jpg',
          },
        ],
        activities: [
          {
            title: 'Stay at Giraffe Manor',
            body:
              "East Africa's most iconic boutique hotel — resident Rothschild's giraffes poke their heads through breakfast windows and join guests for sundowners. Booking typically required 18+ months in advance. The ultimate Nairobi arrival or farewell experience.",
            image: '/images/lodges/kenya/nairobi/giraffe-manor/afternoon-tea-experience.jpg',
          },
          {
            title: 'Karen Blixen Museum',
            body:
              "Tour the beautifully preserved farmhouse where Karen Blixen lived and wrote Out of Africa, surrounded by the Ngong Hills she described. An essential cultural visit combining colonial history with the landscape that inspired one of Africa's most celebrated memoirs.",
            image: '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.jpg',
          },
          {
            title: 'Stay at The Emakoko',
            body:
              "Safari-edge luxury right on the Nairobi National Park boundary — direct park access, game-viewing decks over the Mbagathi River, and a genuine wild atmosphere within minutes of the city centre.",
            image: '/images/lodges/kenya/nairobi/giraffe-manor/giraffes-at-giraffe-manor-1.jpg',
          },
        ],
        faqs: [
          {
            q: 'How long should I spend in Nairobi?',
            a: "Most safari travellers spend 1–2 nights — enough for a national park game drive, elephant orphanage, giraffe centre and dinner. If interested in culture and history, 3 nights allows a more relaxed exploration.",
          },
          {
            q: 'Is Nairobi National Park worth visiting?',
            a: "Absolutely. The concept of watching lions and rhinos against a city skyline is genuinely unique in the world. Morning game drives offer good wildlife sightings in approximately 2–3 hours.",
          },
          {
            q: 'What is Giraffe Manor?',
            a: "Giraffe Manor is Nairobi's most famous boutique hotel, where resident Rothschild's giraffes roam the grounds and famously poke their heads through breakfast room windows. It is one of Africa's most iconic hotel experiences, booking 18+ months in advance.",
          },
          {
            q: 'Can I do a day trip to a national park from Nairobi?',
            a: "Nairobi National Park is within the city — ideal for a morning visit. Amboseli is 4 hours away by road. The Maasai Mara is 5–6 hours, best visited as a minimum 2-night safari. Most travellers depart Nairobi on safari rather than doing day trips.",
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
        body: "Join a ranger team for a four-hour morning patrol across private conservancy land. You will track, observe, and learn about the front-line reality of Kenya's wildlife protection — how technology, community informants, and ranger expertise combine to protect rhinos and elephants.",
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
        body: "Sir Richard Branson's private camp — 12 tented suites on an exclusive conservancy with zero shared game drives, ever.",
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
        body: "A 50,000-acre conservancy featuring Africa's finest contemporary art collection and community conservation on an extraordinary scale.",
        image: '/images/lodges/kenya/lakipia/segera-retreat-2/17716019637244-segera-crookesandjackson-vl-2025-0688.jpg',
      },
      {
        name: 'Giraffe Manor',
        location: 'Nairobi',
        body: "East Africa's most iconic boutique hotel. Resident Rothschild giraffes appear at breakfast — the ultimate arrival or farewell experience.",
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
        "Giraffe Manor — one of the world's most photographed properties",
        'Nairobi — a genuine cultural capital to open or close your journey',
      ],
      stats: [
        { number: '1,500', label: 'km² Masai Mara ecosystem' },
        { number: '7%', label: "of Africa's lion population" },
        { number: '60+', label: 'private conservancies' },
      ],
    },
    seasons: [
      {
        dates: 'Jul – Oct',
        name: 'The Great Migration',
        wildlife: 'Wildebeest Crossings · Lion · Leopard · Cheetah',
        description:
          "The Mara River crossings draw the wildebeest in their millions from Tanzania. This is the most dramatic wildlife spectacle on earth — and Kenya's private conservancies give you front-row access.",
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
        "Kenya's private conservancies have reversed local wildlife decline through community-owned conservation. Every Still Wild Kenya itinerary supports anti-poaching, ranger training and school programmes.",
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
          "Absolutely. A classic East Africa itinerary starts in Kenya's Masai Mara, crosses into the Serengeti by light aircraft, continues to Ruaha or Nyerere, and ends in Zanzibar. We can design this as a seamless 14–18 day journey.",
      },
    ],
  },

  tanzania: {
    slug: 'tanzania',
    name: 'Tanzania',
    heroTitle: 'The Serengeti Eternal\nAfrica in Its Most Original State',
    heroSubtitle:
      "No country holds as much concentrated, uninterrupted wilderness as Tanzania. From the infinite Serengeti where 1.5 million wildebeest move in ancient circular rhythm, to the world's largest intact volcanic caldera at Ngorongoro, the remote wild south, and the spice-scented Indian Ocean coast of Zanzibar — Tanzania is not merely a safari. It is the Earth in its most original state.",
    heroImage: '/images/destinations/tanzania/sayari-serengeti-elephant-walking-safari.jpg',
    exploreIntro:
      'From the Great Migration of the Serengeti to the remote river safaris of Nyerere, Tanzania offers the full spectrum of the African wild — curated through private concessions and exclusive camps.',
    parkSummary:
      "Tanzania's national parks range from the world's most famous plains to an island wilderness on Lake Victoria and Africa's largest game reserve in the south. No two experiences are alike — and no other country offers quite this range in a single itinerary.",
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
        body: "Access the chimp habituation programme with the island\'s resident researchers — a morning in the forest with the team, learning how a wild community is slowly brought into human company.",
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
        body: "Positioned in the migration corridor's most productive crossing section — an intimate camp with exceptional big-cat and crossing sightings.",
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
        body: "Private sand-bank camp on the Rufiji River with boat safaris, walking safaris, and total seclusion inside Africa's largest game reserve.",
        image: '/images/activities/big-five/roho-ya-selous-elephant.jpg',
      },
      {
        name: 'The Manta Resort',
        location: 'Pemba Island, Zanzibar Archipelago',
        body: "Africa's legendary underwater room — a private floating suite anchored above a coral reef with the Indian Ocean as your entire horizon.",
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
        "Ngorongoro Crater — the world's largest intact volcanic caldera",
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
          "The premier safari season. Clear skies and sparse vegetation make wildlife viewing exceptional across all parks. Mara River crossings peak July–September in the northern Serengeti — one of nature's most intense spectacles.",
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
