export type Park = {
  slug: string
  name: string
  blurb: string
  metaDescription?: string
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
  metaDescription:
    "Track mountain gorillas in Bwindi Impenetrable National Park, home to half the world's remaining gorillas — permit costs, sectors, and lodges.",
  image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.webp',
  location: 'Southwestern Uganda',
  size: '331 km²',
  altitude: '1,160 — 2,607 m',
  bestTime: 'June–September & December–February',
  overview:
    "Bwindi Impenetrable National Park is one of the most extraordinary wildlife destinations on the planet. Nestled in the rugged Albertine Rift mountains, this UNESCO World Heritage Site protects 331 square kilometres of some of Africa's most ancient and biodiverse tropical rainforest — a dense tangle of ancient trees, vines, bamboo, and undergrowth covering steep ridges and mist-filled valleys that have sheltered life through ice ages and millennia of human history. Today Bwindi is home to approximately 459 mountain gorillas — roughly half the entire global population of this critically endangered great ape. With 19 habituated gorilla families spread across four distinct trekking sectors (Buhoma, Ruhija, Rushaga, and Nkuringo), it offers the largest selection of gorilla families at any destination on earth. Beyond the gorillas, the forest holds over 350 bird species including 23 Albertine Rift endemics found nowhere else on earth, 120 mammal species, and 200 tree species, and profound cultural connections to the Batwa Forest People — the original inhabitants of this ancient ecosystem. This is one of Africa's oldest forest ecosystems, estimated at over 25,000 years old and having survived multiple ice ages — a living record of how long life has flourished on these ridges.",
  attractions: [
    {
      title: 'Mountain Gorilla Trekking',
      body:
        "Trek through ancient rainforest with expert Uganda Wildlife Authority rangers and trackers to spend one precious hour observing a wild mountain gorilla family — watching silverbacks demonstrate their power, mothers nurse infants, and juveniles play. With 19 habituated families across four sectors, Bwindi offers more gorilla families than any other destination. Treks range from 1 to 8 hours depending on gorilla location that day. Permits cost USD 800 per person.",
      image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.webp',
    },
    {
      title: 'Gorilla Habituation Experience',
      body:
        "Spend a full day — dawn to dusk — accompanying researchers with a gorilla family being habituated to human presence. Available exclusively in the Rushaga sector, this exceptional programme provides 8–10 hours with the same group, witnessing a complete day in their social world. The deepest possible gorilla immersion anywhere on earth. Permits cost USD 1,500 per person.",
      image: '/images/activities/gorilla-trekking/15-gorilla-ah1i7197.webp',
    },
    {
      title: 'Batwa Cultural Trail & Albertine Rift Birding',
      body:
        "Walk with the Batwa Forest People — the indigenous forest-dwellers whose ancestors lived in Bwindi for thousands of years — learning traditional survival skills, medicinal plant knowledge, fire-making techniques, and the profound story of a people whose ancestral forest was set aside for conservation. Combine with specialist forest birding for 23 Albertine Rift endemics found nowhere else on earth, including the African green broadbill, Grauer's broadbill (the rarest broadbill in Africa), Shelley's crimsonwing, and the yellow-eyed black flycatcher.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.webp',
    },
    {
      title: 'Waterfall Hikes & Nature Walks',
      body:
        "Bwindi's network of guided nature trails leads through dramatic terrain of ridges, rushing rivers, and forest waterfalls — a rewarding way to experience the park beyond gorilla trekking. Keep watch for forest elephants, golden monkeys, and other rare forest mammals as you walk beneath the ancient canopy.",
      image: '/images/activities/gorilla-trekking/10-gorilla-ah1i2740.webp',
    },
    {
      title: 'Bwindi Community Walk',
      body:
        "Visit the communities surrounding the park to meet women's cooperative craft groups, taste local food, and learn about the complex relationship between conservation and community livelihoods in this challenging mountain landscape — a meaningful complement to a gorilla trekking itinerary.",
      image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.webp',
    },
  ],
  activities: [
    {
      title: 'Trek in Buhoma — The Original Sector',
      body:
        "Bwindi's first and most established gorilla trekking sector, with the best infrastructure, most comfortable approach track, and multiple gorilla families including the famous Mubare group — the first habituated gorilla family in Uganda. The natural choice for first-time trekkers.",
      image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.webp',
    },
    {
      title: 'Nkuringo — The Most Dramatic Sector',
      body:
        "The most scenically spectacular sector, with ridge-top accommodation and stunning views into the Democratic Republic of Congo. The gorillas here range across Bwindi's most dramatic terrain — a visually unforgettable combination of wilderness and wildlife.",
      image: '/images/activities/gorilla-trekking/10-gorilla-ah1i2740.webp',
    },
    {
      title: 'Stay at Clouds Mountain Gorilla Lodge',
      body:
        "Uganda's highest-altitude gorilla lodge on the Nkuringo ridge, with heated plunge pools, private butler service, and the most dramatic panoramic viewpoint in the entire Bwindi region — including views into the Democratic Republic of Congo.",
      image: '/images/lodges/uganda/bwindi/clouds-moutain-gorilla-lodge-by-wildplaces/1761689756443ugandawildplaces-samchurchill-6773.webp',
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
    {
      q: 'Can I combine Bwindi with Rwanda gorilla trekking?',
      a: "Yes — this is one of East Africa's most popular combinations. The Nkuringo sector of Bwindi is just 4–5 hours from Kigali via the Cyanika border crossing, making a cross-border Rwanda-Uganda gorilla safari very practical.",
    },
  ],
  gettingThere:
    "By air (recommended): fly from Entebbe International Airport or Kajjansi Airstrip to Kihihi Airstrip — approximately 45 minutes by charter or scheduled flight — followed by a 1.5–2 hour road transfer to the Buhoma or Ruhija sectors. For the Rushaga and Nkuringo sectors, fly to Kisoro Airstrip (2 hours from Entebbe). By road from Kampala: 8–9 hours via Mbarara and Kabale on tarmac the entire way. By road from Kigali: 4–5 hours via the Cyanika border crossing (Nkuringo) or the Katuna/Kabale border (Buhoma). A 4WD vehicle is essential for the final mountain tracks approaching every sector.",
  whereToStay: [
    {
      category: 'Ultra-Luxury',
      picks: [
        "Sanctuary Gorilla Forest Camp — an iconic, intimate tented camp with six tents set within Bwindi's forest boundary, walking distance from the Buhoma trekking start.",
      ],
    },
    {
      category: 'Luxury',
      picks: [
        "Bwindi Lodge — top-end stone cottages with spectacular forest valley views above the Buhoma sector.",
        "Mahogany Springs — high-end tented camp on a hill above Buhoma.",
        "Clouds Mountain Gorilla Lodge — Uganda's highest-altitude gorilla lodge on the Nkuringo ridge, with heated plunge pools, private butler service, and views into the Democratic Republic of Congo.",
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        "Silverback Lodge — well-appointed lodge with beautiful gardens and great views above Buhoma.",
        "Gorilla Safari Lodge — comfortable mid-range option in Buhoma.",
        "Rushaga Gorilla Camp — solid mid-range base in the Rushaga sector.",
      ],
    },
    {
      category: 'Budget',
      picks: [
        "Buhoma Community Rest Camp — community-owned and operated camp adjacent to the forest in Buhoma.",
        "Nkuringo Gorilla Camp — affordable base for the Nkuringo sector.",
      ],
    },
  ],
  practicalInfo: [
    { label: 'What to Pack', body: 'Sturdy waterproof hiking boots with ankle support, long trousers and long sleeves for nettles and insects, a light rain jacket, gardening gloves for grabbing vegetation on steep terrain, insect repellent, sunscreen, and at least 2 litres of water for the day.' },
    { label: 'Porter Fees', body: 'Local community porters are available for hire at each sector’s starting point for approximately USD 10–15 per trek — they carry bags and provide welcome support on steep terrain, and hiring one directly benefits the local community.' },
    { label: 'Group Size', body: 'Maximum 8 people per gorilla family per day, keeping encounters intimate and minimising stress on the gorillas.' },
    { label: 'Minimum Age', body: 'Gorilla trekking is restricted to those 15 years and older.' },
    { label: 'Health Restrictions', body: 'Do not trek if you have an infectious illness.' },
  ],
}

const queenElizabeth: Park = {
  slug: 'queen-elizabeth',
  name: 'Queen Elizabeth National Park',
  blurb:
    "Uganda's most visited and ecologically complex park — tree-climbing lions in Ishasha, the wildlife-dense Kazinga Channel, chimpanzee trekking in Kyambura Gorge, and over 600 bird species across 1,978 km² of Albertine Rift wilderness.",
  metaDescription:
    "Queen Elizabeth National Park — Uganda's most visited park with tree-climbing lions, the Kazinga Channel boat cruise, and 600+ bird species.",
  image: '/images/activities/game-drive/asilia-roho-2017-1-1.webp',
  location: 'Western Uganda',
  size: '1,978 km²',
  altitude: '910 — 1,845 m',
  bestTime: 'June–September & December–February',
  overview:
    "Queen Elizabeth National Park is Uganda's most visited, most diverse, and most ecologically complex national park. Stretching across 1,978 square kilometres of the spectacular Albertine Rift Valley, the park encompasses a remarkable mosaic — open savannah grasslands, tropical rainforest, papyrus swamps, volcanic crater lakes, and the shores of both Lake Edward and Lake George, connected by the famous Kazinga Channel. Named after Queen Elizabeth II, who visited Uganda in 1954, the park has earned a legendary reputation for several extraordinary wildlife experiences: the tree-climbing lions of the Ishasha sector (one of only a handful of populations in the world that habitually rest in trees), the Kazinga Channel launch cruise (a 2-hour boat safari along one of Africa's most wildlife-rich waterways with enormous hippo pods and 100+ bird species), and chimpanzee trekking at the atmospheric Kyambura Gorge — a dramatic 100-metre-deep rainforest canyon cutting through open savannah. With over 600 recorded bird species, Queen Elizabeth is one of Africa's greatest birding destinations.",
  attractions: [
    {
      title: 'Kazinga Channel Boat Cruise',
      body:
        "The unmissable centrepiece of any Queen Elizabeth safari. The 2-hour launch trip along the Kazinga Channel passes what may be Africa's highest concentration of hippos in any single waterway, massive Nile crocodiles basking on sandbars, African elephants bathing at the water's edge, and a staggering diversity of waterbirds including Goliath herons, African fish eagles, pink-backed pelicans, and African skimmers. The experience of drifting past hundreds of hippos at close range is one of the most memorable in East African safari. Cruises at USD 30 per person.",
      image: '/images/activities/game-drive/boating-safari-hippo-spot2.webp',
    },
    {
      title: 'Tree-Climbing Lions of Ishasha',
      body:
        "The southern Ishasha sector is one of the world's most unique wildlife destinations. Queen Elizabeth's lions have developed the remarkable habit of climbing and resting in the branches of large fig trees — probably to escape insects and gain better views over their territory. Morning game drives in the Ntungwe River area from 6 to 9am offer the best opportunities to witness this extraordinary behaviour, available nowhere else in Uganda.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/ishasha-wilderness-camp/DSC_6859.webp',
    },
    {
      title: 'Kyambura Gorge Chimpanzee Trekking',
      body:
        "Descend into the remarkable Kyambura Gorge — a deep, forested ravine cutting dramatically through open savannah — to find the habituated chimpanzee community that lives here. The gorge is one of the most visually striking landscapes in Uganda. Permits cost USD 150 per person. The combination of chimpanzees, dramatic gorge scenery, and surrounding savannah makes this a uniquely Queen Elizabeth primate experience.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/25-kyambura-gorge-rf-dsc-3399-copie.webp',
    },
    {
      title: 'Northern Sector Game Drives',
      body:
        "The savannah north of the Kazinga Channel supports exceptional concentrations of wildlife. Uganda kobs are the park's most abundant antelope, grazing in their hundreds alongside topi and warthogs, while lions, elephants, and Cape buffalos are regularly encountered. Leopard sightings are relatively frequent in the riverine thickets — among the best odds for this elusive cat anywhere in Uganda.",
      image: '/images/activities/game-drive/asilia-roho-2017-1-1.webp',
    },
  ],
  activities: [
    {
      title: 'Stay at Kyambura Gorge Lodge',
      body:
        "Perched on the gorge rim with the chimpanzee habitat below, managed by Volcanoes Safaris with exceptional guiding and one of Uganda's most progressive community-conservation models. Direct access to chimp trekking from the lodge doorstep.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/23-kyambura-gorge-lodge-qe-30042024-volcanoessafaris-8624-edit-copy.webp',
    },
    {
      title: 'Crater Lakes Scenic Drive',
      body:
        "Wind along the dramatic escarpment road above the Albertine Rift past a string of ancient volcanic crater lakes. Lake Munyanyange regularly hosts flocks of flamingos, while Lake Katwe is the site of traditional salt extraction. The views from the escarpment edge across Lake Edward and into the Democratic Republic of Congo are extraordinary.",
      image: '/images/parks/uganda/murchison-falls/dsc-6584.webp',
    },
    {
      title: 'Night Game Drive',
      body:
        "After dark in the northern sector, leopards emerge in the riverine thickets, African civets and large-spotted genets appear in the headlights, and the unmistakable silhouette of the aardvark crosses the track. Night drives at USD 20 per person reveal an entirely different dimension of the park.",
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.webp',
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
    {
      q: 'Can I combine Queen Elizabeth with Bwindi?',
      a: "Absolutely — this is Uganda's classic safari circuit. Queen Elizabeth and Bwindi's Buhoma sector are approximately 3–4 hours apart. A 5–7 day package combining the Kazinga Channel, Ishasha lions, Kyambura chimp trekking, and Bwindi gorilla trekking is our most popular itinerary.",
    },
  ],
  gettingThere:
    "By air: fly from Entebbe International Airport to Kasese Airstrip (approximately 55 minutes); charter flights can also use the Mweya Airstrip within the park. By road from Kampala: 5–6 hours via Mbarara and Bushenyi on excellent paved roads. By road from Bwindi (Buhoma): 3–4 hours. By road from Kibale: 2–3 hours. By road from Kigali (Rwanda): 6–7 hours via the Gatuna/Katuna border. The park is well-connected by road and is a natural component of the western Uganda safari circuit.",
  whereToStay: [
    {
      category: 'Ultra-Luxury',
      picks: [
        "The River Station — private plunge pools, a safari spa over a waterhole, and the only lodge in the Kyambura Wildlife Reserve.",
        "Kyambura Gorge Lodge — perched on the gorge rim with exceptional guiding, managed by Volcanoes Safaris.",
      ],
    },
    {
      category: 'Luxury',
      picks: [
        "Elephant Hab Lodge — infinity pool overlooking Kyambura Gorge with elephant herds grazing below, 10 minutes from chimp trekking.",
        "Mweya Safari Lodge — iconic peninsula lodge between Lake Edward, Lake George, and the Kazinga Channel.",
        "Enjojo Lodge — 40 lush acres near the Ishasha gate, thatched cottages connected by wooden walkways, with elephants as regular visitors.",
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        "Buffalo Safari Lodge — 25 acres near the Kazinga Channel, with elephants and hippos wandering the grounds.",
        "Ishasha Jungle Lodge — raised wooden deck cottages along the Ntungwe River, right in tree-climbing lion territory.",
      ],
    },
  ],
}


const murchison: Park = {
  slug: 'murchison-falls',
  name: 'Murchison Falls National Park',
  blurb:
    "Uganda's largest national park — where the entire volume of the Victoria Nile is forced through a 7-metre gorge in the world's most powerful waterfall, then fans into a wildlife-rich delta on Lake Albert. Lions, Rothschild's giraffes, elephants, and shoebill storks across 3,840 km².",
  metaDescription:
    "Uganda's largest national park and home to the world's most powerful waterfall — game drives, Nile boat cruise, chimp trekking, and sport fishing.",
  image: '/images/parks/uganda/murchison-falls/dsc-6280.webp',
  location: 'Northwestern Uganda',
  size: '3,840 km²',
  altitude: '619 — 1,292 m',
  bestTime: 'December–February & June–September',
  overview:
    "Murchison Falls National Park stands as Uganda's largest and most magnificent national park, encompassing 3,840 square kilometres of diverse wilderness in the northwestern corner of the country. The park takes its name from the extraordinary Murchison Falls — where the entire volume of the Victoria Nile is forced through a rocky gorge barely 7 metres wide before plunging 45 metres in a thundering curtain of white water, recognised as one of the world's most powerful waterfalls. The sheer power of the falls has awed every visitor since Sir Samuel Baker became the first European to see them in 1864, naming them after Sir Roderick Murchison, President of the Royal Geographical Society. Above the falls, vast savannahs host Rothschild's giraffes, elephants, Cape buffalos, lions, and leopards. Below the falls, the legendary Nile boat cruise brings visitors within metres of massive hippo pods, enormous Nile crocodiles, and forest elephants drinking at the river's edge. For sport fishing enthusiasts, the Victoria Nile is one of the world's greatest Nile Perch fisheries, while the adjacent Budongo Forest Reserve hosts the largest known chimpanzee population in Uganda.",
  attractions: [
    {
      title: 'Murchison Falls Nile Boat Cruise',
      body:
        "The iconic 3-hour launch trip from Paraa upstream to the base of the falls is one of East Africa's great safari experiences. Drift past enormous hippo pods (hundreds at a time), Nile crocodiles reaching 5 metres in length, forest elephants drinking on the banks, and over 100 bird species. The approach to the base of Murchison Falls, where the Nile thunders through its 7-metre gorge in a cloud of spray, is one of the most dramatic moments in African safari.",
      image: '/images/parks/uganda/murchison-falls/dsc-6271.webp',
    },
    {
      title: "Rothschild's Giraffe & North Bank Game Drives",
      body:
        "The savannah north of the Victoria Nile hosts outstanding game viewing. Lions in family prides, Rothschild's giraffes, African elephants, Cape buffalos, Uganda kobs, oribi, and Jackson's hartebeests are regularly seen on morning and afternoon drives. The Buligi Circuit is particularly productive for large predators and giraffe.",
      image: '/images/parks/uganda/murchison-falls/dsc-6828.webp',
    },
    {
      title: 'Nile Delta Shoebill Boat Trip',
      body:
        "A specialist boat safari downstream from Paraa toward the point where the Victoria Nile meets Lake Albert. Exceptionally rich in waterbirds including the prehistoric shoebill stork — one of Africa's most sought-after bird sightings — plus African skimmers, various kingfisher species, herons, and waders in the papyrus delta.",
      image: '/images/parks/uganda/murchison-falls/dsc-6951.webp',
    },
    {
      title: 'Ziwa Rhino Sanctuary Rhino Tracking',
      body:
        "Located 3 hours from Kampala on the drive to Murchison, Ziwa Rhino Sanctuary is home to Uganda's only wild rhinos — approximately 36 individuals in one of Africa's most impressive conservation success stories. Track the southern white rhinos on foot with armed rangers, approaching to within a safe distance of these magnificent animals. A worthwhile half-day stop en route to or from the park.",
      image: '/images/parks/uganda/murchison-falls/dsc-6280.webp',
    },
  ],
  activities: [
    {
      title: 'Hike to the Top of the Falls',
      body:
        "After the boat cruise ends at the base of the falls, a short but strenuous 30-minute hike climbs to the viewing platform directly above Murchison Falls — providing the most dramatic possible perspective on this extraordinary natural feature, looking directly down into the 7-metre gorge.",
      image: '/images/parks/uganda/murchison-falls/dsc-6584.webp',
    },
    {
      title: 'Nile Perch Sport Fishing',
      body:
        "The Victoria Nile is one of the world's greatest Nile Perch fisheries. Fish exceeding 80–100kg have been landed at Murchison. Fishing from boats at Pakuba is the primary method, with morning sessions from 6am when the fish are most active. All guided and fully serviced from the riverside.",
      image: '/images/parks/uganda/murchison-falls/dsc-7062.webp',
    },
    {
      title: 'Tiger Fish Sport Fishing',
      body:
        "The African tigerfish is one of the world's most exciting sport fish, renowned for explosive strikes and acrobatic aerial battles. The stretch of the Victoria Nile below Murchison Falls is prime Tiger Fish territory, fished alongside the river's famous Nile Perch on the same guided boat outings.",
      image: '/images/parks/uganda/murchison-falls/dsc-7062.webp',
    },
    {
      title: 'Night Game Drive',
      body:
        "After dark, Murchison's savannahs reveal an entirely different cast of characters — leopards, spotted hyenas, African wild cats, civets, genets, and porcupines emerge to hunt and forage under cover of darkness. A rewarding addition to daytime game drives for a fuller picture of the park's wildlife.",
      image: '/images/parks/uganda/murchison-falls/dsc-6828.webp',
    },
    {
      title: 'Chimp Trekking at Budongo Forest',
      body:
        "The Budongo Forest Reserve, adjacent to Murchison's southern boundary, contains the largest known population of East African chimpanzees in Uganda. Guided treks depart from Kaniyo-Pabidi and Busingiro forest stations at USD 90 per person — a remarkable primate experience combined with savannah game drives.",
      image: '/images/parks/uganda/murchison-falls/dsc-6884.webp',
    },
  ],
  faqs: [
    {
      q: 'How do we get there?',
      a: "A 90-minute charter or scheduled flight from Entebbe to Pakuba or Chobe Airstrip is the recommended option. The road journey is 4–5 hours via the Ziwa Rhino Sanctuary (worth a half-day stop to track rhinos on foot — the only wild rhinos in Uganda).",
    },
    {
      q: 'Are there rhinos in Murchison Falls National Park?',
      a: "Not within the park itself, but Ziwa Rhino Sanctuary — 3 hours from Kampala on the road to Murchison — is home to Uganda's only wild rhinos, approximately 36 individuals. Most Murchison itineraries include a rhino tracking stop at Ziwa en route.",
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
  gettingThere:
    "By air (recommended for time-efficiency): fly from Entebbe International Airport to Pakuba or Chobe Airstrip (approximately 90 minutes by charter), with lodge transfers arranged by your accommodation. By road from Kampala: approximately 305km, 4–5 hours via Ziwa Rhino Sanctuary and Masindi town on fully paved roads. A 4WD vehicle is strongly recommended within the park, especially in the wet season. To access the North Bank and its best game viewing, vehicles cross the Victoria Nile by ferry at Paraa — a memorable part of the Murchison experience that runs throughout the day.",
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Kulu Ora — brand new lodge on the banks of the Nile within a private 75,000-hectare low-impact zone, with 11 canvas suites, private plunge pools, and uninterrupted river views.",
        "Nile Safari Lodge — stunning clifftop lodge on the south bank with breathtaking Nile views, a long-standing Murchison favourite.",
        "Pabidi Lodge — forest luxury on the edge of Budongo Forest Reserve, ideal for combining game drives with chimpanzee trekking.",
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        "Pakuba Safari Lodge — on the north bank of the Albert Nile in prime game-viewing territory, with 46 en-suite rooms and panoramic river views.",
        "Murchison River Lodge — eco-conscious south bank lodge on 28 acres of riverine land, with room types from cottages to tented camps.",
        "Twiga Safari Lodge — tented eco-camp on the south bank just 5 minutes from the Paraa ferry, with hippos grazing through the grounds at night.",
      ],
    },
  ],
}


const kibale: Park = {
  slug: 'kibale',
  name: 'Kibale National Park',
  blurb:
    "The primate capital of the world — 13 species in a single park, including over 1,500 chimpanzees in some of the most accessible and best-studied communities in Africa. Kibale is Uganda's premier chimpanzee trekking destination.",
  metaDescription:
    "Kibale is the primate capital of the world — 13 species including 1,500 chimpanzees. Chimp trekking, Bigodi Wetland, and birding in Uganda's finest primate park.",
  image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.webp',
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
        "Led by expert Uganda Wildlife Authority rangers and trackers, morning and afternoon trekking sessions follow habituated chimpanzee communities through ancient rainforest. You spend one hour with the chimpanzees — observing complex social interactions, grooming, foraging, infant play, and the extraordinary vocal performances that fill the forest. Kibale is home to over 1,500 chimpanzees. Permits cost USD 250 per person.",
      image: '/images/destinations/tanzania/chimp-habituation-project1.webp',
    },
    {
      title: 'Chimpanzee Habituation Experience',
      body:
        "For the deepest possible primate engagement, the full-day Habituation Experience accompanies researchers from before dawn (approximately 5:30am) through to dusk, tracking a chimpanzee community as it wakes, feeds, travels, rests, and eventually builds its sleeping nests. This exceptional programme provides 8–10 hours with the same group of chimpanzees, witnessing a complete day in their social world. Permits cost USD 300 per person.",
      image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.webp',
    },
    {
      title: 'Bigodi Wetland Sanctuary',
      body:
        "A community-managed 4km guided walk through papyrus wetland and forest edge adjacent to Kibale. Over 200 bird species recorded here including the Great Blue Turaco, Papyrus Gonolek, and numerous kingfishers and sunbirds. Red colobus and L'Hoest's monkeys are regularly seen. All entrance fees (USD 10 per person) go directly to surrounding communities.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.webp',
    },
    {
      title: 'Kibale Birdwatching — 375 Species',
      body:
        "Kibale is one of Uganda's finest birding destinations, with over 375 species recorded including 35 Albertine Rift endemics. Priority targets include the African Pitta (one of Africa's most sought-after birds), Yellow-spotted Nicator, Purple-breasted Sunbird, White-naped Pigeon, and Nahan's Partridge, alongside the spectacular Great Blue Turaco.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.webp',
    },
  ],
  activities: [
    {
      title: 'Kanyanchu Primate Walk',
      body:
        "A guided 3–4 hour forest walk through Kibale's diverse habitats, encountering multiple primate species along the route — red colobus, grey-cheeked mangabeys, L'Hoest's monkeys, red-tailed monkeys, and olive baboons — before locating the chimpanzee community. The most comprehensive primate experience in the park at USD 30 per person.",
      image: '/images/lodges/uganda/kibale-national-park/primate-lodge/1.webp',
    },
    {
      title: 'Stay at Kibale Lodge by Volcanoes Safaris',
      body:
        "Hand-built bandas perched on a hilltop ridge above Kibale's forest canopy with panoramic Rwenzori mountain views and direct access to the chimp trekking departure point. Personal butler service, spa, and exceptional guiding.",
      image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.webp',
    },
    {
      title: "Crater Lakes Walk",
      body:
        "A gentle afternoon walk along the chain of volcanic crater lakes between Kibale and Fort Portal — passing through tea estates, swimming in crater lakes, and experiencing rural Uganda. Fort Portal town (22km from Kanyanchu) offers a pleasant highland base.",
      image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.webp',
    },
    {
      title: 'Night Forest Walk',
      body:
        "A guided walk after dark reveals Kibale's hidden nocturnal life — bushbabies leaping through the understorey and pottos moving slowly along branches overhead, picked out by spotlight. A fascinating contrast to the daytime primate experience, at USD 20 per person.",
      image: '/images/destinations/tanzania/chimp-habituation-project1.webp',
    },
  ],
  faqs: [
    {
      q: 'How likely am I to see chimpanzees?',
      a: "Communities are tracked daily by researchers and our guides coordinate with the ranger team to position guests correctly. The afternoon session is equally productive.",
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
  gettingThere:
    "By road from Kampala: 5–6 hours on the A109 highway via Fort Portal town. By air from Entebbe: fly to Kasese Airstrip (approximately 1 hour), then a 45-minute road transfer to Kibale/Kanyanchu. Fort Portal town is 22km from Kanyanchu Visitor Centre and serves as the practical base for most Kibale visitors. From Queen Elizabeth National Park: 2–3 hours by road. From Bwindi (Buhoma sector): approximately 4 hours.",
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Kibale Lodge by Volcanoes Safaris — hand-built bandas on a hilltop ridge with Rwenzori views, personal butler service, and spa.",
        "Crater Safari Lodge — award-winning eco-lodge on Nyinabulitwa Crater Lake with thatched chalets and stunning crater views.",
        "Tabebuia Spa & Safari Resort — forest sanctuary with full spa, elegant rooms, and scenic garden terraces.",
        "Mirima Kibale Lodge — luxury cottages perched on a forested ridge above twin crater lakes, perfectly positioned for early morning chimp trekking.",
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        "Kibale Canopy Lodge — forest cottages with raised wooden entrances and jungle canopy balcony views.",
        "Kibale Tourist Safari Lodge — on the shores of Bigodi Swamp, right on the chimp trekking road.",
        "Turaco Treetops — creative treehouse stays near the park at very reasonable rates.",
      ],
    },
  ],
  practicalInfo: [
    { label: 'Park Entry Fee', body: 'USD 40 per person per day for foreign non-residents.' },
    { label: 'Group Size', body: 'Maximum 6 people per habituated chimpanzee community per trekking session.' },
    { label: 'Minimum Age', body: '12 years for standard chimp trekking, though some operators require a minimum age of 15.' },
    { label: 'Recommended Stay', body: 'A minimum of 2 nights in the Kibale area is strongly recommended to combine chimp trekking with Bigodi Wetland Sanctuary and other forest activities.' },
  ],
}


const lakeMburo: Park = {
  slug: 'lake-mburo',
  name: 'Lake Mburo National Park',
  blurb:
    "Uganda's walking safari capital — the only national park in the country offering walking, cycling, and horse-riding safaris through open African savannah. Zebras, impalas, hippos, and leopards on night drives, perfectly positioned between Kampala and Bwindi.",
  metaDescription:
    "Lake Mburo is Uganda's only savannah park offering walking safaris, cycling, horse riding, and boat cruises — the perfect stopover to Bwindi.",
  image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.webp',
  location: 'Western Uganda',
  size: '370 km²',
  altitude: '1,220 — 1,828 m',
  bestTime: 'Year-round',
  overview:
    "Lake Mburo National Park occupies a uniquely special position in Uganda's safari landscape as the country's smallest savannah national park at 370 square kilometres, yet one that offers several wildlife experiences unavailable anywhere else in Uganda. Most significantly, Lake Mburo is the only national park in Uganda where visitors can undertake walking safaris, cycling safaris, and horse-riding safaris through open African savannah — an extraordinary opportunity to experience the bush at ground level, tracking animals by spoor, listening to sounds unfiltered by a vehicle engine. The park is also the only place in southern Uganda where Burchell's zebras are found in numbers, alongside impalas (found in southern Uganda only within Mburo), elands, topis, Defassa waterbucks, oribis, and a large hippo population in the lake. With five lakes within its boundaries, the boat cruise on Lake Mburo provides outstanding hippo, crocodile, and waterbird viewing. Perfectly positioned as a stopover destination — just 3–4 hours from Kampala and 3 hours from Bwindi — Lake Mburo is the natural overnight stop on the Uganda western circuit.",
  attractions: [
    {
      title: 'Walking Safari',
      body:
        "The centrepiece experience of Lake Mburo. Armed Uganda Wildlife Authority rangers lead walks of 2–3 hours through the park's savannah, tracking zebras, impalas, elands, topis, and warthogs on foot. With no lions in the open areas, walking is safe and immersive — the experience of being part of the African bush ecosystem rather than observing it from a vehicle is one that every Lake Mburo visitor should have.",
      image: '/images/parks/uganda/lake-mburo/15829575593-2fb45ea828-o.webp',
    },
    {
      title: "Burchell's Zebra & Birdwatching",
      body:
        "Lake Mburo is the only national park in southern Uganda with plains zebra — herds graze alongside impalas, elands, topis, and warthogs. The park's diverse habitats (savannah, acacia woodland, lakeshore, wetland, and forest) support over 350 bird species. Key targets include the African finfoot, White-winged Warbler, Bare-faced Go-away Bird, and numerous raptors including Bateleur Eagle.",
      image: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.webp',
    },
    {
      title: 'Lake Mburo Boat Cruise',
      body:
        "A 2-hour boat trip on Lake Mburo encounters enormous hippo pods (one of Uganda's densest hippo populations), Nile crocodiles, African fish eagles, various kingfisher species, herons, and ibis. The water-level view of hippos surfacing and the sounds of their calls across the lake is a highlight of any Uganda safari. USD 25 per person.",
      image: '/images/parks/uganda/lake-mburo/16498738142-978e9993ef-o.webp',
    },
  ],
  activities: [
    {
      title: 'Cycling Safari',
      body:
        "A genuinely thrilling experience unique in East Africa at this scale. Guided by armed rangers, cycling groups ride mountain bikes through Lake Mburo's open savannah, encountering zebras, impalas, warthogs, and buffalos at surprisingly close range. The combination of silence, speed, and wildlife proximity creates an extraordinary safari experience. USD 20–30 per person.",
      image: '/images/parks/uganda/lake-mburo/52759056582-ed6e6f1573-o.webp',
    },
    {
      title: 'Horse-Riding Safari',
      body:
        "Arranged through the Mihingo Lodge stables, horse-riding safaris allow visitors to approach wildlife more closely than in vehicles. Experienced, wildlife-habituated horses and guides cater to all riding abilities. Sunset rides across the savannah are particularly magical. USD 35–50 per person per hour.",
      image: '/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.webp',
    },
    {
      title: 'Night Game Drive',
      body:
        "Guided night drives after sunset reveal Lake Mburo's nocturnal fauna: leopards (regularly seen), African civets, large-spotted genets, white-tailed mongooses, spring hares, and African bushbabies. The sounds of hippos grunting on the lake and hyenas calling across the savannah add to the atmosphere. USD 20 per person.",
      image: '/images/parks/uganda/lake-mburo/16261416770-9668a9647a-o.webp',
    },
    {
      title: 'Stay at Mihingo Lodge',
      body:
        "Uganda's most distinctive luxury lodge — 12 beautifully designed stone and wood cottages perched dramatically on rocky outcrops above the savannah, with stunning views, private pools, horse-riding stables, and exceptional guiding. One of Uganda's most photographed safari properties.",
      image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.webp',
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
    {
      q: 'Can I see Big Five animals in Lake Mburo?',
      a: "Lake Mburo has no lions, rhinos, or elephants, so it is not a Big Five destination. It does, however, have leopards (seen on night drives), Cape buffalos, hippos, and excellent wildlife including zebras, impalas, elands, topis, and over 350 bird species — and the unique walking, cycling, and horse-riding activities more than compensate.",
    },
  ],
  gettingThere:
    "By road from Kampala: 3–4 hours on the A109 Kampala–Mbarara highway, one of Uganda's best roads and fully paved. The park entrance is near Lyantonde town. By road from Bwindi (Buhoma sector): approximately 3 hours. Mbarara town, Uganda's second-largest city, is 30km from the park and has ATMs and full facilities. Lake Mburo has no airstrip of its own — the nearest domestic airports are Kasese (for Queen Elizabeth/Kibale) or Entebbe (for Kampala).",
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Mihingo Lodge — Uganda's most distinctive luxury lodge, with 12 stone and wood cottages perched dramatically on rocky outcrops above the savannah, private pools, and horse-riding stables.",
        "Rwakobo Rock — a similarly dramatic rocky hilltop setting with high-end accommodation and excellent views.",
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        "Arcadia Cottages — comfortable, well-run option adjacent to the park with good facilities and friendly staff.",
      ],
    },
    {
      category: 'Budget',
      picks: [
        "Rwonyo Rest Camp — Uganda Wildlife Authority bandas at the lakeshore, the most affordable option within the park with stunning lake views.",
      ],
    },
  ],
}


const mgahinga: Park = {
  slug: 'mgahinga',
  name: 'Mgahinga Gorilla National Park',
  blurb: 'A small park dominated by three Virunga volcanoes, home to mountain gorillas and the only park in Uganda where you can track golden monkeys.',
  metaDescription:
    "Mgahinga Gorilla National Park sits among three Virunga volcanoes on Uganda's border with Rwanda and the DRC — gorilla trekking, golden monkeys, and volcano summit hikes.",
  image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.webp',
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
      image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.webp',
    },
    {
      title: 'Habituated Golden Monkeys',
      body: 'A vibrant, endemic monkey species found only in the Virunga bamboo zone. The morning trek is far easier than gorilla tracking and the photography is sensational.',
      image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.webp',
    },
    {
      title: 'Three Virunga Volcanoes',
      body: 'Mt Sabyinyo, Mt Gahinga and Mt Muhabura — three dormant volcanoes that define the park, each climbable as a full-day summit hike with extraordinary triple-country views.',
      image: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.webp',
    },
  ],
  activities: [
    {
      title: 'Batwa Trail Experience',
      body: "A half-day cultural walk led by Batwa elders — the original forest-dwelling people of the Virungas — showing fire-making, hunting techniques, medicinal plants and traditional song in the lower forest.",
      image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.webp',
    },
    {
      title: 'Volcano Summit Hike',
      body: "Climb Mt Sabyinyo (3,669 m) to stand simultaneously in Uganda, Rwanda and the DRC, or take on the steeper Muhabura (4,127 m) — for fit walkers, two of East Africa's most rewarding day-summits.",
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.webp',
    },
    {
      title: 'Stay at Mount Gahinga Lodge',
      body: 'Stone-and-thatch bandas at the foot of the volcanoes — intimate, fire-warmed and the most direct base for both gorilla and golden-monkey trekking.',
      image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.webp',
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
  metaDescription:
    "Kidepo Valley National Park is Uganda's most remote and wild safari destination — lions, cheetahs, wild dogs, and Karamojong cultural encounters.",
  image: '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.webp',
  location: 'Northeastern Uganda (Karamoja Region)',
  size: '1,442 km²',
  altitude: '914 — 2,750 m',
  bestTime: 'June–September & December–February',
  overview:
    "Kidepo Valley National Park is widely regarded by those who have experienced it as one of the finest and most authentic national parks in all of Africa. Located in the Karamoja region near the borders with South Sudan and Kenya, Kidepo covers 1,442 square kilometres of dramatic semi-arid savannah, vast open plains, dry riverbeds, and imposing mountain ranges that create one of the most visually dramatic safari landscapes on the continent. The park receives very few visitors relative to its size and wildlife richness — this remoteness is its greatest asset. In terms of wildlife, Kidepo stands apart from all other Uganda parks: it supports species found nowhere else in the country including the cheetah, caracal, Burchell's zebra, greater kudu, roan antelope, Guenther's dik-dik, and ostrich — species more typically associated with the dry savannahs of Kenya and Ethiopia. The park also holds Uganda's best population of lions and reliably produces the most dramatic predator sightings in the country. With 475 recorded bird species (the highest of any Uganda park), Kidepo is also one of East Africa's great birding destinations.",
  attractions: [
    {
      title: 'Narus Valley Game Drives',
      body:
        "The Narus Valley is the heart of Kidepo's game viewing. The seasonal Narus River and its associated waterhole attract enormous concentrations of wildlife during the dry season. Lions in large prides of up to 20 individuals, elephants, Cape buffalos, Burchell's zebras, Uganda kobs, Defassa waterbucks, and Jackson's hartebeests are regularly seen on extended morning and afternoon drives.",
      image: '/images/activities/game-drive/asilia-roho-2017-1-1.webp',
    },
    {
      title: 'Cheetah Tracking & Species Unique to Kidepo',
      body:
        "Kidepo's open savannah habitats support a small but established cheetah population — one of the only places in Uganda where cheetah sightings are possible. Expert guides know the territories of resident cheetahs and sightings occur regularly. Species found in Uganda ONLY at Kidepo include cheetah, caracal, ostrich, Burchell's zebra, greater kudu, roan antelope, Guenther's dik-dik, and African wild dog (occasional).",
      image: '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.webp',
    },
    {
      title: 'Karamojong Warrior Cultural Visit',
      body:
        "The Karamojong people — one of East Africa's most distinctive and traditionally proud cattle-herding cultures — maintain villages around the park periphery. Arranged visits provide extraordinary encounters with warriors, elders, and community members in traditional dress. The cultural context of the Karamoja region adds a dimension to the Kidepo experience unavailable elsewhere in Uganda.",
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.webp',
    },
  ],
  activities: [
    {
      title: 'Walking Safari in the Savannah',
      body:
        "Guided walks with armed Uganda Wildlife Authority rangers through the park's open savannahs and dry riverbeds provide an intimate, ground-level perspective — reading animal tracks, identifying insects and plants, and approaching wildlife in a fundamentally different way than vehicle-based game drives. In Kidepo's empty wilderness, walking is a profound experience.",
      image: '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.webp',
    },
    {
      title: 'Stay at Apoka Safari Lodge',
      body:
        "Inside the park on a rocky kopje with sweeping Narus Valley views. Stone and canvas cottages with a rock-carved pool, outdoor stone bathtubs, and some of the most exclusive guiding in Uganda. Managed by Wildplaces Africa — Apoka punches well above its weight as a genuine luxury property in Uganda's most remote park.",
      image: '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.webp',
    },
    {
      title: 'Birdwatching (475 Species)',
      body:
        "Kidepo has the highest bird count of any national park in Uganda. Many species here have Ethiopian and Sudanese affinities and are found nowhere else in Uganda — including the Kori Bustard (Africa's heaviest flying bird), Black-bellied Bustard, Yellow-billed Shrike, and numerous raptors. A specialist birding guide transforms the experience.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.webp',
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
      a: "Species unique to Kidepo within Uganda include cheetah, caracal, ostrich, Burchell's zebra, greater kudu, roan antelope, Guenther's dik-dik, and African wild dog (occasional). Many of these species are typically found only in the drier savannahs of Kenya and Ethiopia — making Kidepo an entirely different safari experience from any other Uganda park.",
    },
    {
      q: 'Is there luxury accommodation in Kidepo?',
      a: "Yes — Apoka Safari Lodge is a genuine luxury property with stone and canvas cottages, a rock-carved pool, outdoor stone bathtubs, and outstanding guiding. For such a remote destination, it punches well above its weight in quality and comfort.",
    },
  ],
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Apoka Safari Lodge — inside the park on a rocky kopje, with a rock-carved pool, outdoor stone bathtubs, canvas cottages, and sweeping Narus Valley views. Managed by Wildplaces Africa.",
        "Adere Safari Lodge — 17 thatched cottages on the park edge with private patios, spa, sauna, pool, and bush cuisine.",
        "Kidepo Valley Lodge — comfortable luxury near the park with direct savannah views.",
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        "Kidepo Savannah Lodge — 12 safari tents on raised decks, 500m from the gate, with unbeatable Narus Valley and Mount Morungole views.",
        "Zebra Safari Lodge — 5 king-size cottages near Kalokudo Gate with a wildlife waterhole visible from the restaurant.",
      ],
    },
  ],
  practicalInfo: [
    { label: 'Park Entry Fee', body: 'USD 40 per person per day for foreign non-residents.' },
    { label: 'Cash', body: 'There are no ATMs in the remote Karamoja region — bring sufficient cash for the duration of your stay, as resupply is difficult.' },
    { label: 'Recommended Stay', body: 'A minimum of 3–4 nights is recommended given the effort of reaching Kidepo — enough time to properly explore the Narus Valley and beyond.' },
    { label: 'Connectivity', body: 'Mobile connectivity is very limited in the park — Airtel has some coverage near Apoka, but do not rely on a signal elsewhere.' },
  ],
}

const semuliki: Park = {
  slug: 'semuliki',
  name: 'Semuliki National Park',
  blurb:
    "Uganda's most underrated national park — ancient Congo Basin rainforest, boiling Sempaya Hot Springs, and 441 bird species including 40 Congo Basin endemics found nowhere else in East Africa. The most important forest birding destination in Uganda.",
  metaDescription:
    "Semuliki is Uganda's hidden gem — ancient Congo rainforest, Sempaya Hot Springs, and 441 bird species including 40 Congo Basin endemics.",
  image: '/images/lodges/uganda/kibale-national-park/kyaninga-lodge/Kyanainga.webp',
  location: 'Western Uganda (Bundibugyo District)',
  size: '220 km²',
  altitude: '670 — 2,350 m',
  bestTime: 'June–August & December–January',
  overview:
    "Semuliki National Park is Uganda's most underrated and most rewarding national park for birders and wilderness seekers. The park protects 220 square kilometres of lowland tropical rainforest that forms an eastern extension of the vast Congo Basin forest — one of the world's great forest ecosystems and the second-largest tropical rainforest on earth. This Congo connection is what makes Semuliki so special: the park harbours wildlife assemblages and bird species with strong central African affinities, many found nowhere else in East Africa. Of Semuliki's 441 recorded bird species, approximately 40 are Congo Basin endemics — species whose East African populations exist only in this small park, making it the most important forest birding destination in Uganda and one of the best in the African Great Lakes region. Beyond the extraordinary birdlife, Semuliki is famous for the Sempaya Hot Springs — two spectacular boiling geysers in the heart of the forest, one of which can project water and steam up to 2 metres into the air. The park is also home to chimpanzees, red-tailed monkeys, De Brazza's monkeys, and forest elephants, and borders the territory of the Batwa pygmy people, who have historical connections to the Semuliki forest.",
  attractions: [
    {
      title: 'Congo Basin Birding — 40 Endemics',
      body:
        "Semuliki has 441 bird species including approximately 40 Congo Basin endemics found in Uganda ONLY in this park — entirely absent from Bwindi, Kibale, and other Uganda parks. Priority targets include the Yellow-throated Nicator, African Piculet, Chocolate-backed Kingfisher, Black Dwarf Hornbill, Lemon-bellied Crombec, and the spectacular African Broadbill. Early morning guided walks with specialist birding guides are essential.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.webp',
    },
    {
      title: 'Sempaya Hot Springs',
      body:
        "The park's most visited attraction — two spectacular thermal features in the heart of ancient forest. The female Sempaya Spring (Nyasimbi) maintains a large circular pool at near 100 degrees Celsius surrounded by colourful mineral terraces and steam. The male spring (Bitente) periodically erupts as a geyser. Local communities attribute deep spiritual significance to both springs. The forest walk to the springs is rewarding in itself.",
      image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.webp',
    },
    {
      title: 'Primate Tracking in Congo Forest',
      body:
        "Semuliki's forests support chimpanzees, red-tailed monkeys, De Brazza's monkeys, olive baboons, and black-and-white colobus in entirely undisturbed forest conditions. Guided forest walks allow encounters with these primates in some of the most pristine and least-visited rainforest in East Africa.",
      image: '/images/destinations/tanzania/chimp-habituation-project1.webp',
    },
  ],
  activities: [
    {
      title: 'Early Morning Specialist Bird Walk',
      body:
        "Semuliki's birdwatching is best conducted on foot with expert specialist guides in the pre-dawn hours when Congo Basin endemics are most active. A dedicated 3–4 hour walk through the forest at first light, with a knowledgeable guide interpreting the extraordinary sounds and sightings, is an unforgettable experience for any birder.",
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.webp',
    },
    {
      title: 'Stay at Kyaninga Lodge (Fort Portal)',
      body:
        "Stone-and-wood cottages on the rim of a volcanic crater lake near Fort Portal — one of Uganda's most spectacular properties and the perfect luxury base for a Semuliki day trip. The lodge is 1.5 hours from the park and combines beautifully with Kibale National Park for a western Uganda circuit.",
      image: '/images/lodges/uganda/kibale-national-park/kyaninga-lodge/Kyanainga.webp',
    },
    {
      title: 'Combine with Kibale & Queen Elizabeth',
      body:
        "Semuliki is best experienced as a 1–2 day addition to a western Uganda circuit from Fort Portal. Combine with Kibale National Park (1.5 hours away) and Queen Elizabeth National Park (3 hours via Kasese) for an outstanding 5–6 day western Uganda birding and primate itinerary.",
      image: '/images/lodges/uganda/kibale-national-park/crater-safari-lodge/1746563630437_090A2589.webp',
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
    {
      q: 'Can I see chimpanzees in Semuliki National Park?',
      a: "Chimpanzees are present in Semuliki's forest but are not habituated for regular trekking as they are in Kibale. Encounters can occur on guided forest walks but are not guaranteed. For reliable chimpanzee trekking, Kibale National Park (1.5 hours from Semuliki) is the recommended destination.",
    },
  ],
  gettingThere:
    "By road from Fort Portal: 1.5 hours via the spectacular escarpment road through Bundibugyo. Fort Portal is 5 hours from Kampala by road (A109 highway) or approximately 1 hour by domestic flight from Entebbe to Kasese Airstrip. There is no airstrip in Semuliki itself, and a 4WD vehicle is recommended for the approach road, especially in the wet season.",
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Kyaninga Lodge — stone-and-wood cottages on the rim of a volcanic crater lake near Fort Portal, one of Uganda's most spectacular properties and the perfect base for a Semuliki day trip.",
        "Semliki Safari Lodge — tented luxury directly in a private wildlife reserve at the park itself, the closest upmarket lodge to the forest and hot springs.",
      ],
    },
  ],
}

const entebbe: Park = {
  slug: 'entebbe',
  name: 'Entebbe',
  blurb:
    "Uganda's serene lakeside gateway on the shores of Lake Victoria — home to the international airport, a wildlife education centre, and Ngamba Island's rescued chimpanzees, this is where almost every Uganda safari quietly begins and ends.",
  metaDescription:
    "Entebbe is Uganda's international gateway on Lake Victoria — the Wildlife Education Centre, Ngamba Island Chimpanzee Sanctuary, and botanical gardens.",
  image: '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.webp',
  location: 'Central Uganda, on the shores of Lake Victoria',
  size: 'Lakeside town of approximately 70,000 people',
  altitude: '',
  bestTime: 'June–September & December–February',
  overview:
    "Entebbe is Uganda's international gateway to the world — a charming, leafy lakeside town of approximately 70,000 people spread across a green peninsula jutting into the vast expanse of Lake Victoria, the world's second-largest freshwater lake. Home to Uganda's only international airport, Entebbe has a pleasantly unhurried atmosphere compared to the bustle of Kampala 40km to the north, and offers visitors a graceful, colonial-era setting of wide avenues, magnificent trees, and beautiful lakeshore gardens. Most international visitors to Uganda spend at least one night in Entebbe — either on arrival before heading into the national parks, or on departure after completing their safari. However, Entebbe is far more than simply a transit point. The Uganda Wildlife Education Centre, Ngamba Island Chimpanzee Sanctuary, beautiful botanical gardens, and the tranquil shores of Lake Victoria all make Entebbe a destination worth exploring properly. Entebbe enjoys a pleasant, lake-moderated climate year-round, with temperatures averaging a comfortable 22–27°C thanks to the cooling effect of Lake Victoria. The two dry seasons — June to September and December to February — are the most pleasant for outdoor activities and boat trips to Ngamba Island, while the rainy seasons (March to May and October to November) bring afternoon showers but leave the town easily navigable. For those who prefer a quieter base than Kampala, Entebbe's lakeshore hotels offer an idyllic pre- or post-safari staging point.",
  whyVisit: [
    "The most family-friendly wildlife encounter in Uganda at the Uganda Wildlife Education Centre — lions, leopards, chimpanzees, shoebills and 300+ other rescued species across 45 hectares of naturalistic enclosures.",
    "A sanctuary for rescued chimpanzees on Ngamba Island — a 100-acre forested island reached by a scenic 45-minute boat ride across Lake Victoria.",
    "The country's oldest botanical gardens, established in 1898, with outstanding lakeside birding and the setting used to film the 1950s Tarzan movies.",
    "The natural, relaxed launchpad for every Uganda safari — direct road and domestic flight connections to Bwindi, Murchison Falls, Queen Elizabeth, Kidepo and beyond.",
  ],
  attractions: [
    {
      title: 'Uganda Wildlife Education Centre (UWEC)',
      body:
        "A 45-hectare conservation centre housing lions, leopards, chimpanzees, shoebill storks, hippos and over 300 other rescued and rehabilitated wildlife species in spacious, naturalistic enclosures. UWEC conducts vital conservation education work and is one of Uganda's top family attractions — a perfect introduction to Uganda's wildlife for travellers on their first day in the country.",
      image: '/images/destinations/tanzania/chimp-habituation-project1.webp',
    },
    {
      title: 'Ngamba Island Chimpanzee Sanctuary',
      body:
        "Take a 45-minute boat ride from Entebbe's marina to this 100-acre forested island sanctuary managed by the Chimpanzee Trust. Observe over 50 orphaned and rescued chimpanzees in a natural forested setting with expert ranger commentary. Volunteer programmes and overnight stays on the island are available for those wanting a deeper immersion.",
      image: '/images/lodges/uganda/kibale-national-park/crater-safari-lodge/1746563630437_090A2589.webp',
    },
    {
      title: 'Entebbe Botanical Gardens',
      body:
        "Stroll through Uganda's oldest botanical gardens, established in 1898 on the shores of Lake Victoria. The gardens feature magnificent specimens of tropical trees, including the location used for filming scenes in the 1950s version of Tarzan, plus outstanding lakeside birding among the towering forest canopy.",
      image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.webp',
    },
    {
      title: 'Shoebill Tracking in Mabamba Swamp',
      body:
        "A specialised excursion by canoe into the heart of a vast papyrus wetland on the shores of Lake Victoria in search of the prehistoric-looking shoebill stork — one of Africa's most sought-after and unusual birds, along with a rich supporting cast of swamp and waterbird species.",
      image: '/images/activities/birding/lensoffthegreen-1748944212110.webp',
    },
    {
      title: 'Lake Victoria Sport Fishing',
      body:
        "Uganda's waters are famous for giant Nile Perch (Lates niloticus) and tilapia. Fishing charters depart from the Entebbe marina for both day trips and multi-day fishing expeditions across Africa's largest lake.",
      image: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.webp',
    },
  ],
  activities: [
    {
      title: 'Stay at Lake Victoria Serena Golf Resort & Spa',
      body:
        "A full resort experience on the Lake Victoria shoreline, with a golf course, spa, and sweeping lake views — the most complete luxury base for an Entebbe stay before or after safari.",
      image: '/images/parks/uganda/lake-mburo/16498738142-978e9993ef-o.webp',
    },
    {
      title: 'Sunset Boat Cruise on Lake Victoria',
      body:
        "An easy, relaxed way to see the lake at its most beautiful — gliding past fishing villages and forested shoreline as the sun sets over the world's second-largest freshwater lake, often combined with a Ngamba Island or Mabamba Swamp excursion.",
      image: '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.webp',
    },
    {
      title: 'Stay at Boma Guesthouse',
      body:
        "Colonial-era charm, beautiful gardens, and an excellent restaurant make this a local favourite — a relaxed, characterful alternative to the larger resort hotels, perfect for an unhurried arrival or departure night.",
      image: '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.webp',
    },
  ],
  gettingThere:
    "Entebbe International Airport (EBB) is the primary international gateway to Uganda, receiving flights from Nairobi, Addis Ababa, Dubai, Amsterdam, London, Johannesburg, Kigali, and many other destinations. The town is directly adjacent to the airport — just 5 minutes by road. From Kampala: 40–60 minutes by private transfer or taxi (longer during peak traffic). Entebbe is also the hub for all Uganda domestic flights: Aerolink Uganda and BAA Uganda operate scheduled services to Kihihi (Bwindi/Queen Elizabeth), Pakuba and Chobe (Murchison Falls), Kisoro (Mgahinga), and other destinations.",
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        'Lake Victoria Serena Golf Resort & Spa — golf course, spa, lake views, full resort facilities.',
        'Protea Hotel Entebbe by Marriott — reliable international standard, right near the airport.',
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        'Boma Guesthouse — colonial-era charm, beautiful gardens, excellent restaurant. A local favourite.',
        'Airport View Hotel — convenient, comfortable, no-fuss.',
        'Entebbe Backpackers — great social atmosphere, easy on the wallet.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Currency', body: 'UGX (Ugandan Shilling). USD is accepted at hotels and major establishments.' },
    { label: 'Safety', body: "Entebbe is one of Uganda's most relaxed and secure towns. The airport area and main town are easy to navigate on foot or by boda-boda." },
    { label: 'Health', body: 'Malaria prophylaxis is recommended. Lake Victoria swimming is safe at designated beaches, but avoid swimming in undesignated areas where bilharzia (schistosomiasis) risk exists.' },
    { label: 'Connectivity', body: 'Excellent 4G coverage throughout the town from MTN and Airtel.' },
  ],
  faqs: [
    {
      q: 'How far is Entebbe from Kampala?',
      a: 'Entebbe is approximately 40km south of Kampala, taking 45 minutes to 1.5 hours by road depending on traffic. The Entebbe Expressway (opened 2018) significantly reduced journey times. Most hotels offer airport-Kampala transfers.',
    },
    {
      q: 'Is it worth spending a night in Entebbe?',
      a: 'Yes — Entebbe is a much more relaxed and pleasant alternative to Kampala for an arrival or departure night. The UWEC, botanical gardens, and lakeshore make it a destination in its own right.',
    },
    {
      q: 'How do I get to Ngamba Island?',
      a: 'Ngamba Island is reached by a 45-minute boat ride from Entebbe Marina. Trips can be arranged through the Chimpanzee Trust directly or through Still Wild Safaris as part of a package.',
    },
    {
      q: 'Can I fly directly from Entebbe to Bwindi or Murchison Falls?',
      a: 'Yes — Aerolink Uganda and BAA Uganda operate domestic flights from Entebbe/Kampala to airstrips near all major Uganda national parks, including Kihihi (Bwindi), Pakuba (Murchison Falls), and Kasese (Queen Elizabeth/Kibale).',
    },
  ],
}

const kampala: Park = {
  slug: 'kampala',
  name: 'Kampala',
  blurb:
    "Uganda's vibrant capital, built across seven hills on the shores of Lake Victoria — a sprawling, energetic city of royal tombs, buzzing markets and vibrant culture that rewards every traveller who slows down long enough to explore it.",
  metaDescription:
    "Discover Kampala, Uganda's dynamic capital — the Kasubi Tombs, Ndere Cultural Centre, vibrant markets, and the best restaurants and nightlife.",
  image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.webp',
  location: 'Central Uganda, on the northern shores of Lake Victoria',
  size: 'Capital city of over 3.5 million people across seven hills',
  altitude: '1,190 m',
  bestTime: 'June–September & December–February',
  overview:
    "Kampala, the vibrant capital of Uganda, is a city that surprises and delights every visitor. Built across seven hills overlooking the northern shores of Lake Victoria — Africa's largest lake — Kampala is a sprawling, energetic metropolis of over 3.5 million people that serves as the heartbeat of Ugandan culture, commerce and history. Often overlooked by travellers rushing to reach Uganda's legendary national parks, Kampala richly rewards those who take the time to explore it. From the ancient royal tombs of the Buganda Kingdom to the neon-lit streets of Kabalagala, from the tranquil shores of Lake Victoria to the cacophony of Owino Market, Kampala is one of East Africa's most compelling and authentic urban experiences. As the undisputed commercial and political capital of the Pearl of Africa, Kampala has seen rapid modernisation over the past two decades with new shopping malls, international hotels, restaurants and a vibrant creative arts scene — yet it retains a deeply African character, warmth and energy that draws visitors back time and again. Kampala is a year-round destination with a warm equatorial climate moderated by its elevation of 1,190m above sea level; temperatures average a very comfortable 24–28°C throughout the year. The two dry seasons — June to September and December to February — offer the most pleasant conditions for sightseeing, while the rainy seasons (March to May and October to November) bring afternoon thunderstorms that clear quickly, leaving the city fully operational year-round. For safari travellers, scheduling a city exploration day in Kampala on arrival, before heading out to the parks, is an excellent way to begin a Uganda trip.",
  whyVisit: [
    "The UNESCO World Heritage Kasubi Tombs — burial site of four Buganda kings and one of the largest thatched structures in sub-Saharan Africa.",
    "East Africa's largest mosque, with panoramic minaret views, alongside a stunning hilltop Catholic cathedral on Rubaga Hill.",
    "Friday and Saturday evening performances of traditional Ugandan music, dance and acrobatics at the Ndere Cultural Centre — one of the most entertaining evenings in East Africa.",
    "The natural start and end point for every Uganda safari — 45 minutes to 1.5 hours from Entebbe International Airport, with domestic flight and road connections to every national park.",
  ],
  attractions: [
    {
      title: 'Kasubi Tombs',
      body:
        "Visit the royal enclosure and burial site of four Kabakas (Buganda kings), a UNESCO World Heritage Site since 2001. The main building (Muzibu-Azaala-Mpanga) is one of the largest thatched structures in sub-Saharan Africa and remains an active spiritual site for the Buganda Kingdom.",
      image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.webp',
    },
    {
      title: 'Uganda Museum',
      body:
        "Explore ancient tools, musical instruments, household artefacts and cultural objects dating back thousands of years, telling the story of Uganda's diverse ethnic groups.",
      image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.webp',
    },
    {
      title: 'Namugongo Martyrs Shrine',
      body:
        "A striking modern church and pilgrimage centre marking where 22 Catholic and Anglican martyrs were executed in 1886 on the orders of Kabaka Mwanga II. The shrine hosts over 3 million pilgrims on 3 June each year and is one of the most significant religious sites in East Africa.",
      image: '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.webp',
    },
    {
      title: 'Ndere Cultural Centre',
      body:
        "Attend Friday or Saturday evening performances of traditional Ugandan music, dance and acrobatics from across Uganda's diverse ethnic groups — one of the most entertaining evenings in East Africa and an essential cultural introduction to the country.",
      image: '/images/destinations/tanzania/chimp-habituation-project1.webp',
    },
    {
      title: 'Owino Market & Kampala Craft Village',
      body:
        "Navigate East Africa's largest second-hand clothing and general market (Owino, also known as St. Balikuddembe Market) for fabrics, spices and a genuine slice of Kampala daily life, then browse handmade jewellery, bark cloth art and Ugandan souvenirs from dozens of artisan stalls at the Kampala Craft Village on Buganda Road.",
      image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.webp',
    },
    {
      title: 'Gadaffi Mosque & Rubaga Cathedral',
      body:
        "Climb the minaret of the Uganda National Mosque — East Africa's largest, built with funding from Muammar Gaddafi — for panoramic views across the city, then visit Rubaga Cathedral, Kampala's stunning Catholic cathedral on Rubaga Hill, with sweeping views across the city's seven hills.",
      image: '/images/parks/uganda/lake-mburo/52760819657-a6f9d6bf99-o.webp',
    },
  ],
  activities: [
    {
      title: 'Rolex Street-Food Tour',
      body:
        "Sample Uganda's most beloved street food: the rolex (a rolled omelette and vegetables in chapati) from street vendors across Kampala. A culinary adventure costing less than a dollar and one of the most authentic ways to experience the city.",
      image: '/images/lodges/uganda/kibale-national-park/kyaninga-lodge/Kyanainga.webp',
    },
    {
      title: 'Stay at Serena Kampala Hotel',
      body:
        "A 5-star hotel on Nakasero Hill with a pool and fine dining — the most established luxury address in the capital, and a comfortable base for a city exploration day before heading out on safari.",
      image: '/images/parks/uganda/lake-mburo/16498738142-978e9993ef-o.webp',
    },
    {
      title: 'Guided City Cultural Tour',
      body:
        "A half-day or full-day guided tour combining the Kasubi Tombs, Uganda Museum, Ndere Cultural Centre and the markets — tailored for groups, families and solo travellers, and the ideal way to see Kampala's highlights in limited time.",
      image: '/images/parks/uganda/lake-mburo/16261416770-9668a9647a-o.webp',
    },
  ],
  gettingThere:
    "Entebbe International Airport (EBB), located 40km south of Kampala on the Lake Victoria peninsula, is Uganda's only international airport. It receives direct flights from Nairobi (Kenya Airways, Ethiopian Airlines), Addis Ababa (Ethiopian Airlines), Dubai (Emirates), Amsterdam (KLM), London (British Airways), Johannesburg (South African Airways, RwandAir), Kigali (RwandAir), Brussels (Brussels Airlines) and multiple other African hubs. Travel time from Entebbe Airport to Kampala city centre is 45 minutes to 1.5 hours depending on traffic conditions (morning and evening rush hours can be very congested). Options include a registered taxi (approximately USD 30–50), pre-booked private transfers (recommended), or ride-hailing apps (Bolt, SafeBoda). By road from neighbouring countries: Kigali is 8–9 hours, Nairobi 10–12 hours via Jinja and Eldoret, and Dar es Salaam 18–20 hours.",
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        'Serena Kampala Hotel — 5-star, Nakasero hill, pool & fine dining.',
        'Sheraton Kampala — iconic city tower, large pool, central location.',
        'Hotel Mestil — boutique luxury in upmarket Kololo.',
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        'Protea Hotel Kampala — reliable Marriott-branded comfort.',
        'Emin Pasha Hotel — colonial-era charm with beautiful gardens.',
        'Latitude — solid choice in the Ntinda neighbourhood.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Currency', body: 'Ugandan Shilling (UGX). USD is widely accepted at hotels, restaurants and tour operators. ATMs are widely available in the city centre and at all major shopping malls (Garden City, Acacia Mall, Oasis Mall, Forest Mall, Lugogo Mall).' },
    { label: 'Language', body: 'English is the official language and is widely spoken; Luganda is the most common local language.' },
    { label: 'Connectivity', body: 'Excellent 4G LTE coverage throughout the city from MTN Uganda and Airtel Uganda. Purchase a SIM card at the airport on arrival for very affordable data.' },
    { label: 'Safety', body: 'Kampala is generally safe for tourists in the main tourist and hotel areas. Exercise normal urban precautions — do not display expensive equipment openly, use registered taxis or ride-hailing apps (SafeBoda, Bolt, Uber) rather than walking alone at night, and secure valuables.' },
    { label: 'Health', body: 'Malaria is present in Kampala — take prophylaxis and use repellent. A yellow fever vaccination certificate is required for entry to Uganda.' },
    { label: 'Dress Code', body: 'Smart-casual is appropriate for restaurants and bars; modest dress is required for religious sites.' },
  ],
  faqs: [
    {
      q: 'How many days should I spend in Kampala?',
      a: '2–3 days is sufficient to visit the main attractions, including the Kasubi Tombs, Uganda Museum, Namugongo Shrine, Ndere Cultural Centre, and to explore the markets and restaurant scene. Many safari visitors spend a night on arrival and a final night before flying out.',
    },
    {
      q: 'Is Kampala safe for tourists?',
      a: 'Yes, Kampala is generally safe for tourists in the main areas. The city has a police presence in tourist zones, and most of the areas frequented by visitors are secure during daylight hours. Take normal urban precautions and use ride-hailing apps rather than walking alone at night in unfamiliar areas.',
    },
    {
      q: 'What is the best way to get around Kampala?',
      a: 'Ride-hailing apps (SafeBoda for boda-bodas, Bolt for cars) are the safest and most convenient options. Private taxis negotiated in advance are also reliable. The city\'s boda-boda motorcycle taxis are ubiquitous but not recommended for tourists with luggage or unfamiliar with Kampala traffic.',
    },
    {
      q: 'Can I do a gorilla trekking safari departing from Kampala?',
      a: 'Yes — Bwindi Impenetrable National Park is approximately 8–9 hours from Kampala by road, or 45 minutes by domestic flight to Kihihi. Still Wild Safaris operates gorilla trekking packages departing from Kampala and Entebbe.',
    },
  ],
}

const serengetiPark = {
  slug: 'serengeti',
  name: 'Serengeti National Park',
  blurb:
    "The greatest wildlife spectacle on earth — 1.5 million wildebeest and 350,000 zebra crossing an endless plain, with lion, leopard and cheetah in extraordinary numbers year-round.",
  metaDescription:
    "Experience the Serengeti — Africa's most famous national park. Witness the Great Wildebeest Migration, Big Five game drives, and endless savannah.",
  image: '/images/destinations/tanzania/sayari-serengeti-elephant-walking-safari.webp',
  location: 'Northern Tanzania',
  size: '14,763 km²',
  altitude: '920 — 1,850 m',
  bestTime: 'June–October (northern crossings), January–March (calving season) & November–December (green season)',
  overview:
    "The Serengeti is Tanzania's crown jewel and the stage for the most iconic safari experience on the planet. A UNESCO World Heritage Site and one of the Seven Natural Wonders of Africa, this ancient ecosystem stretches from the volcanic plains of the south to the Mara River in the north, supporting the single largest terrestrial mammal migration in the world — over 1.5 million wildebeest, 350,000 zebra and 500,000 Thomson's gazelle moving in an endless clockwise loop. Beyond the migration, the Serengeti harbours more lions than almost anywhere on earth, dense resident leopard, cheetah on the open plains and a year-round cast of supporting wildlife that makes every drive compelling. The private concessions to the north and west — home to Sayari and Dunia camps — offer off-road driving and night-drive access that transforms the experience entirely. The green season (November–December) brings a quieter, lusher Serengeti with beautiful light and far fewer vehicles — a rewarding alternative for travellers who don't need to time a river crossing.",
  attractions: [
    {
      title: 'The Great Migration',
      body: "Over 1.5 million wildebeest, 350,000 zebra and 500,000 Thomson's gazelle move in an annual clockwise loop — with dramatic Mara River crossings from July to October and calving season on the short-grass plains in January and February.",
      image: '/images/destinations/tanzania/sayari-game-drive-with-hyena-viewing1.webp',
    },
    {
      title: 'Lion & Leopard Density',
      body: 'The Serengeti holds one of the highest concentrations of lion in Africa, plus resident leopard in the riverine forest, cheetah on the open plains and a near-certain chance of wild dog in the north.',
      image: '/images/destinations/tanzania/sayari-lioness.webp',
    },
    {
      title: 'Private Northern Concessions',
      body: "The far north — Lamai Wedge, Mara Triangle interface, the Eastern Loliondo area and the Klein's Camp concession — offers off-road driving, night drives targeting aardvark and serval, and a far lower vehicle count than the central Seronera area. It's where Sayari Camp and our most exclusive itineraries are based.",
      image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.webp',
    },
    {
      title: 'Western Corridor & Grumeti River Crossings',
      body: 'The Grumeti River in the western corridor produces its own dramatic crocodile-wildebeest encounters as the migration passes through, in scenes second only to the famous Mara crossings — with a fraction of the crowds.',
      image: '/images/destinations/tanzania/dunia-camp-game-drive-vehicle-lookout-hr-eliza-deacon1.webp',
    },
    {
      title: 'Granite Kopjes & Kopje Lion Photography',
      body: "The Serengeti's scattered granite kopjes — ancient rock outcrops rising from the open plains — are a favourite sunning spot for resident lion prides, producing some of Africa's most iconic and beautifully staged big-cat photography.",
      image: '/images/destinations/tanzania/sayari-lioness.webp',
    },
  ],
  activities: [
    {
      title: 'Stay at Sayari Camp',
      body: "Asilia's northernmost Serengeti camp — closest to the Mara River crossings, with just fifteen tented rooms, a stellar guiding team and full off-road access.",
      image: '/images/destinations/tanzania/sayari-elephant.webp',
    },
    {
      title: 'Stay at Dunia Camp',
      body: "A mobile-style camp in the Central Serengeti — brilliantly positioned for the resident game of the Seronera valley and following the migration into the south in calving season.",
      image: '/images/destinations/tanzania/dunia-camp-game-drive-vehicle-lookout-hr-eliza-deacon1.webp',
    },
    {
      title: 'Ballooning over the Plains',
      body: 'A dawn balloon flight over the Serengeti, following migrating herds from 500 feet, ending with a champagne breakfast in the bush — the definitive aerial safari experience.',
      image: '/images/destinations/tanzania/dunia-lion-and-plane-in-the-serengeti.webp',
    },
  ],
  gettingThere:
    "The Serengeti is accessed via Arusha — approximately 8–9 hours by road, or 1–2 hours by charter flight from Kilimanjaro or Arusha airports. Several airstrips within the park (Seronera, Kogatende, Lobo and Grumeti) receive scheduled and charter flights daily. Flying into the Serengeti is strongly recommended over the long, rough road journey.",
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Sayari Camp — Asilia's northernmost Serengeti camp, closest to the Mara River crossings, with just fifteen tented rooms and full off-road access. Our featured partner camp.",
        'andBeyond Serengeti Under Canvas — a mobile luxury camp that relocates with the Migration throughout the year.',
        'Singita Mara River Tented Camp — riverside luxury in the northern Serengeti, in prime crossing territory.',
        'Four Seasons Safari Lodge Serengeti — the only permanent luxury structure in the central Serengeti.',
        'Nomad Tanzania camps — seasonal mobile camps that follow the herds across the ecosystem.',
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        'Dunia Camp — a mobile-style camp in the Central Serengeti, brilliantly positioned for the resident game of the Seronera valley. Our featured partner camp.',
        "Seronera Wildlife Lodge — a central location in the Serengeti's best year-round predator territory.",
        'Serengeti Serena Safari Lodge — comfortable, well-positioned and reliable.',
        'Kati Kati Tented Camp — a classic tented safari experience at good value.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Conservation Fees', body: "Park fees run approximately USD 60–70 per person per day, usually included in lodge rates. Budget carefully — the Serengeti is among Tanzania's more expensive parks." },
    { label: 'Malaria', body: 'The Serengeti is a malaria zone. Take prophylaxis, use repellent, and wear long, light-coloured clothing at dusk.' },
    { label: 'Crowds at Crossings', body: 'Popular river crossing points can attract many vehicles in peak season. Private concessions and the far northern Serengeti offer a more exclusive experience away from the crowds.' },
    { label: 'Flying vs Driving', body: 'The road from Arusha to Seronera takes 8–9 hours and is rough going. Flying in (1–2 hours) is significantly more comfortable and well worth the additional cost.' },
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
    {
      q: 'How many days should I spend in the Serengeti?',
      a: 'A minimum of 3 nights is recommended — ideally 4–5. The Serengeti is vast, and multiple game drives over several days are needed to explore different areas and behaviours. For the Migration specifically, 4–5 nights maximises your chance of witnessing a river crossing.',
    },
    {
      q: 'Is the Serengeti or the Maasai Mara better?',
      a: 'Both share the same ecosystem and Migration. The Serengeti is much larger, with more diverse experiences across different zones; the Mara offers smaller-scale exclusivity and its own famous river crossing sites. Many travellers combine both on a single Kenya–Tanzania circuit — the most complete Migration experience available.',
    },
    {
      q: 'Can I visit the Serengeti on a budget?',
      a: "The Serengeti is Tanzania's most expensive national park. Budget options — public campsites and simple tented camps — start from around USD 100–150 per person per night. Mid-range options begin around USD 250–350, while luxury camps range from USD 500 to 2,500+ per person per night, all-inclusive.",
    },
  ],
}

const ngorongoroPark = {
  slug: 'ngorongoro',
  name: 'Ngorongoro Conservation Area',
  blurb:
    "An ancient, collapsed caldera sheltering the densest concentration of wildlife in Africa — the world's largest intact volcanic crater and home to all of the Big Five in a single enclosed ecosystem.",
  metaDescription:
    "Descend into Ngorongoro Crater, the world's largest intact volcanic caldera and a natural Big Five arena.",
  image: '/images/destinations/tanzania/dunia-giraffe.webp',
  location: 'Northern Tanzania',
  size: '8,292 km² (crater floor: 260 km²)',
  altitude: '1,800 — 3,648 m',
  bestTime: 'Year-round (driest June–September)',
  overview:
    "Ngorongoro Crater is a natural wonder — the intact floor of an ancient volcano estimated to have once stood higher than Kilimanjaro before it collapsed in on itself some 2–3 million years ago, leaving a caldera 600 metres deep that shelters a permanently enclosed ecosystem of extraordinary density. More than 25,000 large mammals live on the crater floor, drinking from freshwater springs and the alkaline Lake Magadi at its centre, and including a population of approximately 20–30 black rhino — one of the densest black rhino populations in East Africa. The crater also holds one of Africa's highest lion densities; the resident prides form a self-contained population, separate from the lions living on the forested rim above. The drive down from the rim at dawn, with the mist clearing to reveal the plains below, is one of the defining moments of an African safari. Ngorongoro pairs beautifully with the Serengeti as part of our northern Tanzania circuit.",
  attractions: [
    {
      title: 'Black Rhino on the Crater Floor',
      body: 'One of the last strongholds for critically endangered black rhino in East Africa — a population of approximately 20–30 individuals roams the crater floor, with sightings regular at the Lerai Forest and the crater lake margins.',
      image: '/images/destinations/tanzania/dunia-leopard.webp',
    },
    {
      title: 'Crater Rim Viewpoints',
      body: 'The panoramic viewpoint from the crater rim at 2,300 m — looking down over the entire enclosed ecosystem at dawn as the mist lifts from the crater floor.',
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
    },
    {
      title: 'Lerai Forest & Flamingo Lake',
      body: "The crater floor\'s fever-tree forest shelters elephant and leopard; the alkaline Lake Magadi at its centre draws thousands of flamingos and is a prime staging ground for the predator–prey dramas that play out here daily.",
      image: '/images/destinations/tanzania/dunia-crane.webp',
    },
    {
      title: 'Crater Lion Prides',
      body: "The crater is home to one of Africa's highest lion densities — a self-contained population, separate from the lions living on the forested rim above, with prides of up to 20 individuals often seen resting together on the open grassland in superb light.",
      image: '/images/destinations/tanzania/dunia-camp-game-drive-serengeti-safari-2.webp',
    },
  ],
  activities: [
    {
      title: 'Full-Day Crater Drive',
      body: 'An immersive full-day game drive on the crater floor — a circuit of the lake, the Lerai Forest, the Hippo Pool and the open plains, with a bush picnic at a designated viewpoint.',
      image: '/images/destinations/tanzania/dunia-camp-game-drive-serengeti-safari-2.webp',
    },
    {
      title: 'Olduvai Gorge Visit',
      body: "A short diversion to the cradle of human evolution — a 48km ravine where Mary and Louis Leakey discovered hominid fossils including Paranthropus boisei, nicknamed 'Nutcracker Man', in 1959, transforming our understanding of human ancestry. The small on-site museum explains the discoveries and their global significance.",
      image: '/images/destinations/tanzania/dunia-game-drive.webp',
    },
    {
      title: 'Maasai Village Visit',
      body: 'The Ngorongoro Conservation Area is co-managed with the Maasai community — a genuine homestead visit, arranged through our local partners, is one of the most memorable cultural encounters in northern Tanzania.',
      image: '/images/destinations/tanzania/dunia-seronera-river.webp',
    },
    {
      title: 'Ngorongoro Highlands Walking Safari',
      body: "Multi-day guided walks through the crater highlands with Maasai guides, camping under star-filled skies in some of Tanzania's most dramatic and least-visited terrain — a rewarding, active alternative to game drives.",
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
    },
  ],
  gettingThere:
    'Ngorongoro is approximately 2–3 hours by road from Arusha (180km), reached via the Karatu junction. Most visitors arrive by road transfer or overland safari vehicle from Arusha, often combined with a Serengeti itinerary. Manyara Airport, 60km away, serves scheduled flights from Arusha and Dar es Salaam.',
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Ngorongoro Crater Lodge — one of Africa's most theatrical properties, with opulent stone-and-thatch suites on the crater rim and extraordinary views down to the caldera floor. Managed by andBeyond.",
        'One Nature Ngorongoro — spectacular rim-edge luxury with direct access to the descent road.',
        'Sanctuary Ngorongoro Crater Camp — an equally dramatic rim setting with attentive, personal service.',
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        'Ngorongoro Serena Safari Lodge — built right into the crater rim with sweeping views.',
        'Ngorongoro Wildlife Lodge — comfortable and reliable.',
        'Lemala Ngorongoro — a more intimate tented experience on the rim.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Crater Descent Fee', body: 'A separate crater service fee applies — approximately USD 295 per vehicle per day — in addition to standard conservation area fees. This is non-negotiable and significant, so factor it into your budget.' },
    { label: 'Vehicle Numbers', body: 'Vehicles inside the crater are limited to control congestion. Arrive early at the descent gate to secure access, especially in peak season.' },
    { label: 'Crater Exit Time', body: 'Overnight stays on the crater floor are not permitted — all vehicles must exit by 6:00pm. Only day visits are allowed below the rim.' },
    { label: 'Malaria', body: 'A lower risk than the lowland parks thanks to the altitude, but prophylaxis is still recommended.' },
    { label: 'Warm Layers', body: 'The crater rim sits at roughly 2,300m and nights can be cold. Pack warm layers for early-morning drives.' },
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
    {
      q: 'What makes Ngorongoro Crater unique?',
      a: "Its intact volcanic caldera creates a natural, enclosed ecosystem where large wildlife populations are permanently concentrated in a relatively small area. Unlike open savannah parks where animals range over hundreds of kilometres, Ngorongoro's crater floor guarantees consistently spectacular wildlife encounters.",
    },
    {
      q: 'Can I see all of the Big Five in Ngorongoro?',
      a: "Ngorongoro is one of Africa's most reliable Big Five destinations. Elephant, lion, buffalo and black rhino are regularly encountered, though leopard is present but rarely seen due to the dense vegetation. With a full day's game driving, seeing four of the Big Five in a single visit is realistic.",
    },
  ],
}

const selousPark = {
  slug: 'nyerere',
  name: 'Nyerere National Park',
  blurb:
    "Africa's largest national park — a vast, wild, boat-safari heartland of the Rufiji River, famous for African wild dogs, hippos and a remote, uncrowded safari atmosphere.",
  metaDescription:
    "Explore Nyerere National Park, Africa's largest — Rufiji River boat safaris, walking safaris, and some of Tanzania's best African wild dog sightings.",
  image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.webp',
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
      image: '/images/activities/big-five/roho-ya-selous-hippo.webp',
    },
    {
      title: 'African Wild Dog',
      body: "One of Tanzania's most reliable places to track packs of the endangered African wild dog — Nyerere's vast, unfenced wilderness supports several large packs with regular denning activity.",
      image: '/images/activities/game-drive/roho-ya-selous-wild-dogs.webp',
    },
    {
      title: 'Walking Safaris',
      body: "Nyerere is one of the few Tanzanian parks where walking safaris are permitted — a profoundly different pace, with specialist guides reading tracks, insects and ecosystem in a way a vehicle cannot replicate.",
      image: '/images/activities/game-drive/roho-ya-selous-walking-safari-guide-showing-off-a-hippos-skull.webp',
    },
  ],
  activities: [
    {
      title: 'Stay at Roho ya Selous',
      body: 'Eight tented suites on a private concession within the park — boat safaris, game drives, walking, and a guiding team with decades of Selous experience.',
      image: '/images/activities/big-five/roho-ya-selous-elephant.webp',
    },
    {
      title: 'Fly Camping on the Rufiji',
      body: 'Spend a night on a sandbank under the stars, with your guide and a campfire — the ultimate immersion in the southern wilderness.',
      image: '/images/activities/game-drive/roho-ya-selous-fishing-at-sunrise.webp',
    },
    {
      title: 'Fishing the Rufiji',
      body: 'Catch-and-release tigerfish and catfish on the river — an optional afternoon activity for keen anglers staying at Roho ya Selous.',
      image: '/images/activities/big-five/roho-ya-selous-giraffes.webp',
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
  metaDescription:
    "Discover Rubondo Island National Park on Lake Victoria — chimpanzee reintroduction, forest walks, sitatunga, and a uniquely remote island safari.",
  image: '/images/destinations/tanzania/rubondo-island-camp-landscape.webp',
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
      image: '/images/destinations/tanzania/rubondo-island-camp-chimp.webp',
    },
    {
      title: 'Birdlife of Lake Victoria',
      body: 'Over 300 bird species recorded — African fish eagle, pied kingfisher, goliath heron, and the rare shoebill in the papyrus fringe of the lake.',
      image: '/images/destinations/tanzania/rubondo-island-camp-fish-eagle-eric-frank-mr.webp',
    },
    {
      title: 'Pristine Forest Walks',
      body: "A dense tropical forest of ebony, wild mango and giant ficus — walked with specialist naturalist guides, tracking chimp signs and the island\'s unique community of reintroduced mammals.",
      image: '/images/destinations/tanzania/rubondo-island-forest-walks-experience-with-your-guide1.webp',
    },
  ],
  activities: [
    {
      title: 'Forest Walk with Chimp Team',
      body: 'Early morning walk with the habituation team — tracking chimp nests, calls and movement, with close encounters increasingly possible as the project matures.',
      image: '/images/destinations/tanzania/rubondo-island-camp-forest-walk-mr1.webp',
    },
    {
      title: 'Nile Perch Fishing',
      body: 'Lake Victoria is one of the great sport-fishing destinations in Africa — Nile perch in the hundreds of kilos, plus tilapia and catfish on a catch-and-release basis from the camp launch.',
      image: '/images/destinations/tanzania/rubondo-island-game-drives-on-the-hills-above-lake-victoria1.webp',
    },
    {
      title: 'Canoe Safari',
      body: "A slow, silent exploration of the island's shoreline by dugout canoe — hippos, crocodiles, sitatunga and a gallery of waterbirds at a pace that no motor safari can match.",
      image: '/images/destinations/tanzania/rubondo-island-camp-beach.webp',
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

const arushaPark = {
  slug: 'arusha',
  name: 'Arusha',
  blurb:
    "Tanzania's safari capital and gateway to the northern circuit — a lively highland city beneath Mount Meru, with a half-day safari on its own doorstep, world-famous Tanzanite, and easy connections to the Serengeti, Ngorongoro and Kilimanjaro.",
  metaDescription:
    "Discover Arusha, Tanzania's safari capital and gateway to the Serengeti, Ngorongoro, and Kilimanjaro — a vibrant highland city before your safari.",
  image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
  location: 'Northern Tanzania',
  size: 'Highland city, gateway to the Northern Circuit',
  altitude: '1,400 m',
  bestTime: 'June–October (main dry season) & January–February (short dry season)',
  overview:
    "Arusha is Tanzania's safari capital — a lively, welcoming highland city at the foot of Mount Meru that serves as the gateway to the country's legendary northern safari circuit: Serengeti, Ngorongoro, Tarangire and the start of the Kilimanjaro climb. Set at 1,400 metres in the shadow of the 4,566m Mount Meru, Arusha enjoys a beautifully temperate climate and a cosmopolitan energy fuelled by its status as East Africa's most important safari hub. The city punches above its weight in cultural and historical significance too. Arusha National Park sits literally on its doorstep, offering a half-day safari experience with giraffe, buffalo and flamingo within minutes of the city centre. The Arusha Declaration Museum commemorates the founding of Tanzania's political independence movement, while the Cultural Heritage Centre houses one of the finest collections of East African art, craft and gemstones in the region, including Tanzanite — a gemstone found nowhere else on Earth outside a small area near Kilimanjaro. Arusha also hosts the Arusha International Conference Centre, site of the International Criminal Tribunal for Rwanda and the East African Court of Justice, lending the city a significance that extends well beyond tourism into the fabric of regional history and governance. For travellers combining Uganda and Tanzania safaris, Arusha is the logical African hub — connecting flights from Entebbe via Nairobi are under two hours, and the northern circuit can be covered in 5–10 days from Arusha.",
  attractions: [
    {
      title: 'Arusha National Park Half-Day Safari',
      body: "A morning game drive in the compact park on Mount Meru's slopes, with giraffe, buffalo, colobus, waterbuck and flamingo on the Momella Lakes — just 20–25 minutes from the city centre.",
      image: '/images/destinations/tanzania/dunia-giraffe.webp',
    },
    {
      title: 'Mount Meru Crater Hike',
      body: "A 3–4 day guided trek to Mount Meru's summit at 4,566m, passing through forest, moorland and the dramatic inner crater ash cone — a superb, less-crowded acclimatisation climb before Kilimanjaro.",
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
    },
    {
      title: 'Cultural Heritage Centre & Tanzanite',
      body: "Browse one of East Africa's finest craft and art collections, including authentic Maasai beadwork and Makonde ebony carvings, alongside a dedicated gemstone section selling certified Tanzanite — a rare violet-blue stone found nowhere else on Earth.",
      image: '/images/destinations/tanzania/kite-in-lodge1.webp',
    },
    {
      title: 'Arusha Declaration Museum & International Justice',
      body: "The museum commemorating the 1967 Arusha Declaration and Tanzania's path to independence, plus the Arusha International Conference Centre — home to the International Criminal Tribunal for Rwanda and the East African Court of Justice.",
      image: '/images/destinations/tanzania/photo-2013-03-06-11-59-58.webp',
    },
    {
      title: 'Arusha City Walking Tour',
      body: "Explore Arusha's markets, clock tower and cultural sites with a local guide, tasting street food and experiencing the daily rhythm of East Africa's busiest safari hub.",
      image: '/images/destinations/tanzania/forest-walk-096.webp',
    },
    {
      title: 'Maasai Village Day Trip',
      body: 'Visit Maasai communities on the Arusha outskirts for cultural exchanges, warrior demonstrations and beadwork purchases that directly support Maasai livelihoods.',
      image: '/images/destinations/tanzania/dunia-seronera-river.webp',
    },
  ],
  activities: [
    {
      title: 'Stay at Arusha Coffee Lodge',
      body: "An atmospheric lodge set within a working coffee estate — one of northern Tanzania's most charming properties and an ideal first or last night before and after safari.",
      image: '/images/destinations/tanzania/rubondo-island-camp-landscape.webp',
    },
    {
      title: 'Tanzanite Shopping',
      body: 'Buy certified Tanzanite — found only in a small mining area near Kilimanjaro — from reputable dealers including Tanzanite Experience, Himo Gems, and the Cultural Heritage Centre gemstone section.',
      image: '/images/destinations/tanzania/sayari-elephant.webp',
    },
    {
      title: 'Momella Lakes Flamingo & Giraffe Drive',
      body: "A satisfying 2–3 hour morning game drive around Arusha National Park's Momella Lakes, with reliable giraffe, buffalo and flamingo sightings — perfect on the morning you depart for Serengeti or Ngorongoro.",
      image: '/images/destinations/tanzania/dunia-crane.webp',
    },
  ],
  gettingThere:
    'Arusha is served by Kilimanjaro International Airport (JRO), 50km east of the city, with connections from Nairobi, Dar es Salaam, Addis Ababa, Dubai, Amsterdam and London. Arusha Airport (ARK) in the city centre serves domestic and charter routes. Bus services connect Arusha to Nairobi (5–6 hours) and Dar es Salaam (10–12 hours).',
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        "Arusha Coffee Lodge — an atmospheric lodge set within a working coffee estate, one of northern Tanzania's most charming properties.",
        'Elewana Mount Meru Game Lodge — comfortable luxury with views toward Mount Meru.',
        'Rivertrees Country Inn — colonial-style country house with beautiful gardens on the Usa River.',
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        "The Arusha Hotel — the city's classic historic institution, centrally located.",
        'Gran Melia Arusha — modern comfort with reliable international standards.',
        'Moivaro Coffee Lodge — a relaxed garden setting on a working coffee farm.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Visa', body: 'Most nationalities require a Tanzania visa, available online (eservices.immigration.go.tz) or on arrival. East African Community passport holders may be exempt.' },
    { label: 'Currency', body: 'Tanzanian Shilling (TZS). USD widely accepted in tourist businesses. ATMs available in Arusha city centre.' },
    { label: 'Health', body: 'Yellow fever vaccination required if arriving from an endemic country. Malaria prophylaxis recommended.' },
    { label: 'Altitude', body: 'Arusha sits at 1,400m. Most visitors adapt comfortably within a day.' },
    { label: 'Safari Booking', body: 'Arusha has hundreds of safari operators ranging from highly reputable to unreliable. Always book through established operators with verifiable references.' },
    { label: 'Internet', body: 'Good 4G coverage in Arusha city. Vodacom and Airtel are the most reliable networks.' },
  ],
  faqs: [
    {
      q: 'Is it worth spending time in Arusha or should I go straight to the parks?',
      a: 'One night in Arusha is usually sufficient for pre-safari logistics, gear shopping, and a visit to Arusha National Park or the Cultural Heritage Centre. The city itself is pleasant, but the northern parks are the real draw.',
    },
    {
      q: 'What is Tanzanite and where can I buy it in Arusha?',
      a: "Tanzanite is a rare violet-blue gemstone found only in a small mining area near Kilimanjaro, making Tanzania its only source in the world. In Arusha, reputable dealers include Tanzanite Experience, Himo Gems, and the Cultural Heritage Centre gemstone section. Always buy with a certification of authenticity.",
    },
    {
      q: 'Can I visit Arusha National Park in one morning?',
      a: 'Yes — Arusha National Park is just 20–25 minutes from the city centre and can be explored on a satisfying 2–3 hour morning game drive, making it a perfect pre-departure activity on the day you travel to Serengeti or Ngorongoro.',
    },
    {
      q: 'How do I combine a Tanzania safari with a Uganda trip?',
      a: 'Daily flights connect Entebbe to Kilimanjaro via Nairobi in under two hours. We design combined Uganda–Tanzania itineraries covering gorilla trekking, chimpanzee tracking, and Tanzania\'s northern safari circuit in a single integrated trip.',
    },
  ],
}

const kilimanjaroPark = {
  slug: 'kilimanjaro',
  name: 'Kilimanjaro National Park',
  blurb:
    "Africa's highest mountain and the world's highest walkable peak — a snow-capped 5,895m volcanic massif rising from the Tanzanian plains to Uhuru Peak, reached via five ecological zones and a choice of legendary trekking routes.",
  metaDescription:
    "Climb Mount Kilimanjaro, Africa's highest peak at 5,895m — expert guides, multiple trekking routes, and the summit of a lifetime.",
  image: '/images/destinations/tanzania/photo-2013-03-06-11-59-58.webp',
  location: 'Northern Tanzania, near Moshi',
  size: '1,668 km² (park); summit at 5,895 m',
  altitude: '1,800 — 5,895 m',
  bestTime: 'January–March (short dry season) & June–October (main dry season)',
  overview:
    "Mount Kilimanjaro is Africa's highest mountain and one of the world's most iconic natural landmarks — a massive free-standing volcanic massif rising 5,895 metres above the Tanzanian plains to its snow-capped Uhuru Peak, the highest point on the African continent. A UNESCO World Heritage Site, Kilimanjaro is the world's highest walkable mountain and attracts tens of thousands of trekkers annually, making it the most-climbed major mountain in the world. Kilimanjaro's extraordinary altitude creates five distinct ecological zones arranged in concentric bands from base to summit — cultivated lower slopes, montane rainforest, heath and moorland, alpine desert, and arctic summit zone. Traversing these zones during a summit ascent is one of trekking's most extraordinary ecological journeys, compressing environments that would otherwise span tens of degrees of latitude into a single vertical, kilometre-wide sequence on one magnificent mountain. Kilimanjaro is fundamentally accessible to non-technical trekkers — no rope, ice axe or technical climbing skills are required — but the extreme altitude demands respect, appropriate preparation, a slow ascent schedule and experienced guide support. Success rates on the mountain vary significantly based on the route chosen and the trekker's fitness, acclimatisation and mental preparation.",
  whyVisit: [
    'Roof of Africa — standing on Uhuru Peak at 5,895m is one of life\'s most profound physical and emotional achievements, offering an extraordinary sense of perspective over the continent below.',
    "World's Highest Walkable Mountain — unlike Everest or the Himalayas, Kilimanjaro requires no technical climbing skills, making the summit of Africa's highest mountain accessible to any fit, determined trekker.",
    'Five Ecological Zones — the ascent takes trekkers through five completely different ecosystems in sequence, from tropical rainforest to arctic summit, in a single extraordinary journey.',
    "Glaciers & Icefields — Kilimanjaro's retreating glaciers are one of the world's most dramatic visual representations of climate change — see them before they are gone.",
    'Multiple Route Options — several major routes offer different approaches, scenery, acclimatisation profiles and difficulty levels, suited to a range of trekker abilities and timescales.',
    "Guided Trekking Excellence — Tanzania's Kilimanjaro guides are among Africa's most professional, with deep knowledge of the mountain's ecology, weather patterns and altitude management.",
    'Wildlife in the Forest Zone — the lower montane forest teems with wildlife including colobus monkeys, blue monkeys, elephant and over 180 bird species.',
    "Sunrise at Uhuru — watching the African dawn spread over the continent from Africa's highest point, with Kilimanjaro's shadow cast to the west, is an experience of rare and lasting beauty.",
    'Combination with Safari — Kilimanjaro combines perfectly with the northern circuit, and many travellers pair a summit climb with the Serengeti and Ngorongoro on a classic Tanzania adventure.',
  ],
  attractions: [
    {
      title: 'Uhuru Peak Summit at Sunrise',
      body: "Reaching Africa's highest point at 5,895m as dawn breaks over the continent, with Kilimanjaro's own shadow cast far across the plains to the west — the defining moment of the climb.",
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
    },
    {
      title: 'Five Ecological Zones',
      body: 'A single ascent passes through cultivated lower slopes, montane rainforest, heath and moorland, alpine desert and arctic summit zone — a vertical journey through environments that would otherwise span thousands of kilometres of latitude.',
      image: '/images/destinations/tanzania/forest-walk-096.webp',
    },
    {
      title: 'Montane Forest Wildlife',
      body: "Kilimanjaro's lush lower forest zone shelters colobus monkeys, blue monkeys, forest elephant and over 180 recorded bird species — a rewarding first day on the mountain.",
      image: '/images/destinations/tanzania/rubondo-island-forest-walks-experience-with-your-guide1.webp',
    },
    {
      title: 'Glaciers & Icefields',
      body: "Kilimanjaro's retreating summit glaciers, including the dramatic Southern Icefields crossed on the Lemosho route, are among the most visually striking — and rapidly vanishing — features on the mountain.",
      image: '/images/destinations/tanzania/dunia-crane.webp',
    },
    {
      title: 'Moshi Cultural Visit',
      body: "Explore the charming town of Moshi at Kilimanjaro's base, visiting coffee farms, craft markets and the vibrant Chagga culture of the mountain's farming communities.",
      image: '/images/destinations/tanzania/photo-2013-03-06-11-59-58.webp',
    },
  ],
  activities: [
    {
      title: 'Machame Route (the "Whiskey Route")',
      body: 'The most popular and scenic route at 6–7 days, approaching through dense rainforest with stunning views throughout. Success rates of roughly 65–80% thanks to a strong acclimatisation profile.',
      image: '/images/destinations/tanzania/dunia-game-drive.webp',
    },
    {
      title: 'Lemosho Route',
      body: 'Widely regarded as the finest route for acclimatisation and scenery — 7–8 days approaching from the west, traversing the dramatic Southern Icefields before descending via Mweka. Success rates of roughly 65–80%.',
      image: '/images/destinations/tanzania/dunia-lion-and-plane-in-the-serengeti.webp',
    },
    {
      title: 'Marangu Route',
      body: 'The most accessible route at 5–6 days, using hut accommodation rather than tents. Its shorter duration gives it the lowest summit success rate of the main routes, at roughly 30–40%.',
      image: '/images/destinations/tanzania/sayari-game-drive-with-hyena-viewing1.webp',
    },
    {
      title: 'Rongai Route',
      body: 'A 6–7 day approach from the north, offering a different geological and ecological perspective and a quieter, drier trail — a strong alternative during the rainier seasons.',
      image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.webp',
    },
  ],
  gettingThere:
    "Kilimanjaro is served by Kilimanjaro International Airport (JRO), with connections from Nairobi, Dar es Salaam, Dubai, Amsterdam and other international destinations. The mountain's main gate towns of Marangu, Machame and Londorossi are 20–45 minutes from the nearby town of Moshi by road. Arusha is 90 minutes from Moshi.",
  whereToStay: [
    {
      category: 'Luxury (Moshi)',
      picks: [
        'Aishi Machame Hotel — comfortable rooms, good food, a relaxed pre- and post-climb base.',
        'Kilimanjaro Mountain Resort — well-earned recovery after the summit.',
      ],
    },
    {
      category: 'Mid-Range (Moshi)',
      picks: [
        "Keys Hotel — a long-standing climbers' favourite.",
        'Kindoroko Hotel — right in central Moshi.',
        'Chanya Lodge — a quieter option.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Acclimatisation is Everything', body: 'Choose a route with sufficient acclimatisation days. The Lemosho (7–8 days) and Machame (6–7 days) routes have significantly higher summit success rates than the shorter Marangu (5–6 days).' },
    { label: 'Guides and Porters', body: 'By law, all Kilimanjaro climbers must be accompanied by a licensed guide. Porters carry equipment and camp gear. Always use operators who pay porters fair wages.' },
    { label: 'Equipment', body: 'Hire quality cold-weather gear in Moshi or Arusha if you do not own it. Essential items: a -20°C sleeping bag, down jacket, waterproof outer layers, gaiters and trekking poles.' },
    { label: 'Fitness Preparation', body: 'Train with weighted day hikes for 3–6 months before your climb. Core fitness and cardiovascular conditioning significantly improve summit success rates.' },
    { label: 'Summit Night Start', body: 'All routes summit at night, departing camp around midnight to reach Uhuru Peak at sunrise. This is the most physically demanding section — mental preparation is as important as physical fitness.' },
    { label: 'Park Fees', body: 'Kilimanjaro has steep park fees, approximately USD 800–1,000 per person for a full climb, included in all reputable operator packages.' },
  ],
  faqs: [
    {
      q: 'How hard is it to climb Kilimanjaro?',
      a: 'Kilimanjaro is a strenuous but non-technical trek — no climbing experience or equipment is needed. The main challenge is altitude, which causes altitude sickness in many trekkers regardless of fitness level. Choosing a longer route with better acclimatisation, going slowly, staying hydrated, and being prepared to descend if necessary are the keys to success.',
    },
    {
      q: 'What is the success rate for climbing Kilimanjaro?',
      a: 'Overall summit success rates vary between 45–65% depending on the route and operator. Longer routes (Lemosho 7–8 days, Machame 6–7 days) have significantly higher success rates (65–80%) than shorter routes (Marangu 5–6 days, roughly 30–40%). Choosing the right route is the single most important decision in a Kilimanjaro climb.',
    },
    {
      q: 'What time of year is best to climb Kilimanjaro?',
      a: 'January–March and June–October offer the best conditions. June–October is the busiest and clearest period. January–February is drier and colder at the summit but has fewer trekkers. April–May and November are rainier seasons with lower summit success rates but still possible with a good weather window.',
    },
    {
      q: 'Can I combine Kilimanjaro with a Tanzania safari?',
      a: 'Yes — Kilimanjaro and the northern circuit (Serengeti, Ngorongoro, Tarangire) make a classic combined Tanzania adventure. Most itineraries do the safari first, then climb, or reverse the order. Post-climb, many trekkers reward themselves with a beach stay on Zanzibar.',
    },
    {
      q: 'Do I need previous climbing experience?',
      a: 'No technical climbing experience is required — Kilimanjaro is a walk, not a climb, with no ropes or ice axes needed on any of the standard trekking routes. What matters far more is cardiovascular fitness, a slow and steady pace, and mental resilience through the cold summit night.',
    },
    {
      q: 'Can I rent trekking gear in Tanzania?',
      a: "Yes — quality cold-weather gear, including -20°C sleeping bags, down jackets and trekking poles, can be hired in Moshi or Arusha if you don't own your own. By law you must also climb with a licensed guide, and porters carry camp equipment throughout the trek.",
    },
  ],
}

const lakeManyaraPark = {
  slug: 'lake-manyara',
  name: 'Lake Manyara National Park',
  blurb:
    "A compact Rift Valley gem famous for tree-climbing lions, flamingo-filled soda-lake shores, and a groundwater forest of primates — Ernest Hemingway's 'Green Hills of Africa' and the perfect opening chapter to a northern Tanzania circuit.",
  metaDescription:
    "Visit Lake Manyara for tree-climbing lions, flamingo spectacles, and diverse Rift Valley wildlife — the perfect opener to a Tanzania safari.",
  image: '/images/destinations/tanzania/rubondo-island-camp-hippos.webp',
  location: 'Northern Tanzania, Rift Valley',
  size: '325 km²',
  altitude: '960 — 1,830 m',
  bestTime: 'Year-round (driest June–October & January–February)',
  overview:
    "Lake Manyara National Park is one of Tanzania's most compact and yet surprisingly diverse wildlife destinations — a narrow strip of land between the dramatic Rift Valley escarpment and the soda shores of Lake Manyara, covering just 325 square kilometres but harbouring exceptional wildlife and one of East Africa's most famous animal behavioural curiosities: lions that climb trees. The park was immortalised by Ernest Hemingway in The Green Hills of Africa, and its tree-climbing lions — large prides that regularly lounge in the branches of acacia and sycamore fig trees — have fascinated wildlife biologists and delighted visitors for decades. While tree-climbing lion behaviour occurs in a few other locations across Africa, Manyara's lions do so with a frequency and regularity that makes sightings relatively predictable for patient visitors. Lake Manyara itself is an alkaline soda lake that periodically hosts hundreds of thousands of lesser flamingos, turning the lake shore spectacular pink; even when flamingo concentrations are lower, the shores support pelicans, marabou storks, yellow-billed storks and hundreds of other waterbird species. The park's habitat diversity is remarkable for its size — groundwater forest at the escarpment base shelters olive baboons, blue monkeys and red-tailed monkeys, open savannah and acacia woodland support elephant, impala, zebra and giraffe, and the lake margins draw hippopotamus, water mongoose and a staggering diversity of aquatic birds. Manyara's richness makes it a perfect opening or closing chapter for any Tanzania northern circuit, complementing the Serengeti and Ngorongoro with its intimate, accessible scale.",
  attractions: [
    {
      title: 'Tree-Climbing Lions',
      body: "Manyara's most famous residents — prides that regularly lounge in the branches of acacia and sycamore fig trees, a behaviour immortalised by Ernest Hemingway in The Green Hills of Africa and seen here more predictably than almost anywhere else in Africa.",
      image: '/images/destinations/tanzania/sayari-lioness.webp',
    },
    {
      title: 'Alkaline Soda Lake & Flamingo Flocks',
      body: "Lake Manyara's alkaline waters periodically host hundreds of thousands of lesser flamingos, turning the shoreline pink, alongside pelicans, marabou storks and yellow-billed storks.",
      image: '/images/destinations/tanzania/dunia-crane.webp',
    },
    {
      title: 'Groundwater Forest Primates',
      body: 'The lush groundwater forest at the base of the Rift Valley escarpment shelters olive baboons, blue monkeys and red-tailed monkeys alongside Manyara\'s forest elephants.',
      image: '/images/destinations/tanzania/rubondo-island-forest-walks-experience-with-your-guide1.webp',
    },
    {
      title: 'Rift Valley Escarpment Viewpoint',
      body: 'A drive to the top of the escarpment above the park delivers a panoramic view of Lake Manyara spread below, with the Rift Valley extending to the horizon.',
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
    },
    {
      title: 'Diverse Habitats in a Compact Park',
      body: 'Open savannah and acacia woodland support elephant, impala, zebra and giraffe, while the lake and its margins draw hippopotamus, water mongoose and an exceptional diversity of aquatic birds — remarkable range for such a small park.',
      image: '/images/destinations/tanzania/rubondo-island-camp-hippos.webp',
    },
  ],
  activities: [
    {
      title: 'Canoe Safari on Lake Manyara',
      body: 'A guided canoe or kayak experience along the lake edge, paddling among waterbirds and approaching flamingo flocks from the water for a completely different perspective on the park.',
      image: '/images/destinations/tanzania/rubondo-island-camp-beach.webp',
    },
    {
      title: 'Night Drive from your Lodge',
      body: 'Lodge-based night drives on private land bordering the park, targeting bushbabies, genets, African civets and other nocturnal species rarely seen on daytime game drives.',
      image: '/images/destinations/tanzania/dunia-leopard.webp',
    },
    {
      title: 'Mto wa Mbu Cultural Town Walk',
      body: "A walking tour of Mto wa Mbu ('River of Mosquitoes'), the bustling town at the park gate where traders from over 100 Tanzanian ethnic groups live and work — a genuinely unique multicultural East African market experience.",
      image: '/images/destinations/tanzania/forest-walk-096.webp',
    },
    {
      title: 'Flamingo Photography Drive',
      body: 'When flamingo numbers are high, a dedicated lake-shore drive offers extraordinary photography opportunities, with massed pink reflections in the alkaline water.',
      image: '/images/destinations/tanzania/rubondo-island-camp-fish-eagle-eric-frank-mr.webp',
    },
  ],
  gettingThere:
    'Lake Manyara is approximately 2 hours by road from Arusha (130km) on the well-maintained A104 highway. The park gate sits on the western edge of the Rift Valley below the escarpment. Manyara Airport is 8km from the gate and receives scheduled flights from Arusha and Dar es Salaam.',
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        'andBeyond Lake Manyara Tree Lodge — built on stilts within the groundwater forest, immersive and intimate, right among the trees the tree-climbing lions favour.',
        'Chem Chem Lodge — refined luxury just outside the park with access to a private conservancy.',
        "Gibb's Farm (Karatu) — a beautifully restored coffee farm retreat with renowned cuisine and gardens, a relaxed stop between Manyara and Ngorongoro.",
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        'Lake Manyara Hotel — TANAPA-run, perched on the escarpment rim with sweeping lake and valley views.',
        'Serena Manyara — comfortable and reliable.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Tree-Climbing Lions', body: 'Sightings are never guaranteed. Patient morning drives with experienced guides offer the best chances, particularly in the acacia woodland area near the lake.' },
    { label: 'Flamingo Status', body: 'Flamingo numbers fluctuate with water levels and algae growth. Check with your operator for current lake conditions before including Manyara specifically for flamingos.' },
    { label: 'Park Size', body: 'Manyara is small — one full day is sufficient to cover the main park thoroughly.' },
    { label: 'Combining Parks', body: 'Manyara combines naturally with Ngorongoro (1 hour) and Tarangire (2 hours). Most northern circuit itineraries include all three.' },
    { label: 'Malaria', body: 'A malaria zone at lake level. Take prophylaxis and use insect repellent.' },
    { label: 'Crowds', body: "Manyara's proximity to Arusha makes it popular for day trips. Start early to enjoy the park before day-trip vehicles arrive." },
  ],
  faqs: [
    {
      q: 'Why do lions climb trees in Lake Manyara?',
      a: "The exact reason is debated by wildlife biologists. Possible explanations include escaping ground-level insects and heat, gaining vantage points for spotting prey, and avoiding aggression from other lion groups. Whatever the reason, the behaviour is well-established in Manyara's lions and provides remarkable wildlife viewing.",
    },
    {
      q: 'How many days do I need at Lake Manyara?',
      a: 'One full day, or even a half-day for tight itineraries, is enough to experience Lake Manyara\'s highlights. Most visitors include it as part of a northern Tanzania circuit rather than as a standalone destination.',
    },
    {
      q: "Is Lake Manyara worth visiting if I'm also doing Ngorongoro and Serengeti?",
      a: 'Yes — Manyara adds genuine value with its unique tree-climbing lions, groundwater forest and lake scenery, all in a compact format that does not add much travel time. It is the natural opening chapter for any northern circuit.',
    },
    {
      q: 'What is Mto wa Mbu?',
      a: "Mto wa Mbu ('River of Mosquitoes' in Swahili) is the bustling town at the Lake Manyara gate, famous for its extraordinary cultural diversity — traders from over 100 Tanzanian ethnic groups live and work here. The market and walking tours through the town offer a genuinely unique multicultural East African urban experience.",
    },
  ],
}

const tarangirePark = {
  slug: 'tarangire',
  name: 'Tarangire National Park',
  blurb:
    "Tanzania's most underrated wildlife destination — ancient baobab-studded plains and dry-season elephant herds of 200-300 individuals along the Tarangire River, with a fraction of the Serengeti's crowds.",
  metaDescription:
    "Discover Tarangire — Tanzania's hidden gem. Thousands of elephants, ancient baobab trees, diverse wildlife, and far fewer crowds than the Serengeti.",
  image: '/images/destinations/tanzania/sayari-elephant.webp',
  location: 'Manyara Region, south of Arusha',
  size: '2,850 km²',
  altitude: '1,000 — 1,500 m',
  bestTime: 'June–October (dry season, peak elephant concentrations)',
  overview:
    "Tarangire National Park is Tanzania's most underrated wildlife destination and one of Africa's genuine hidden gems. Covering 2,850 square kilometres in the Manyara region south of Arusha, Tarangire is famous for its extraordinary baobab landscape — ancient sentinel trees of immense girth and character dotting open savannah plains that in the dry season host some of Africa's largest elephant concentrations outside Botswana. The Tarangire River is the park's lifeblood. During Tanzania's long dry season (June–October), when surrounding areas dry out completely, the Tarangire remains the only permanent water source in a vast region. As a result, wildlife from an enormous catchment area — well beyond the park's boundaries — converges on the river in spectacular concentrations. Elephant herds of 200–300 individuals are a routine dry-season sighting, while lion prides, leopard, cheetah, wild dog and enormous herds of buffalo follow the water and the prey. The bird diversity is staggering — over 550 species recorded, including large numbers of dry-country specials and migrant species. What makes Tarangire additionally special is what it lacks: the crowds. Receiving a fraction of the visitors that the Serengeti and Ngorongoro attract, Tarangire delivers genuinely private game drive experiences in a landscape of extraordinary beauty. For travellers combining Tanzania's northern circuit, Tarangire is the perfect opening act — a spectacular introduction to East African wildlife that prepares and excites visitors for the vastness of the Serengeti to come.",
  attractions: [
    {
      title: 'Tarangire River Elephant Herds',
      body: "During the dry season, elephant herds of 200–300 individuals gather along the Tarangire River — among the largest elephant concentrations anywhere in Africa outside Botswana, drinking, bathing and socialising within a single river valley.",
      image: '/images/destinations/tanzania/sayari-elephant.webp',
    },
    {
      title: 'Ancient Baobab Landscape',
      body: "Tarangire's open savannah is studded with ancient baobabs of immense girth and character — the classic scene of an elephant family grazing beneath a baobab against a mountain horizon is one of Africa's most beautiful and most photographed safari images.",
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
    },
    {
      title: 'Prolific Birdlife',
      body: 'Over 550 bird species have been recorded in Tarangire, including large numbers of dry-country specials and migrants — a genuine paradise for birders alongside the exceptional mammal viewing.',
      image: '/images/destinations/tanzania/dunia-crane.webp',
    },
    {
      title: 'Lion, Leopard, Cheetah & Wild Dog',
      body: "Tarangire's predator populations follow the water and the prey along the river — resident lion prides, leopard in the riverine woodland, cheetah on the open plains, and one of northern Tanzania's best chances of encountering elusive wild dog packs.",
      image: '/images/destinations/tanzania/sayari-lioness.webp',
    },
    {
      title: 'Private Concessions (Randilen, Kuro, Sinya)',
      body: "Tarangire's neighbouring private concessions offer walking safaris and night drives unavailable inside the national park itself — an essential add-on for travellers seeking a deeper, more active Tarangire experience.",
      image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.webp',
    },
  ],
  activities: [
    {
      title: 'Elephant River Drive',
      body: 'Follow the Tarangire River course during the dry season, with enormous elephant herds drinking, bathing and socialising in extraordinary concentrations.',
      image: '/images/destinations/tanzania/sayari-elephant.webp',
    },
    {
      title: 'Wild Dog Tracking',
      body: "Work with specialist guides to locate and observe Tarangire's elusive wild dog packs on extended morning drives.",
      image: '/images/destinations/tanzania/dunia-leopard.webp',
    },
    {
      title: 'Tarangire River Canopy Walk',
      body: 'Walk the riverine forest edge with armed guides, observing vervet monkeys, baboons, kingfishers and the extraordinary birdlife of the river corridor.',
      image: '/images/destinations/tanzania/forest-walk-096.webp',
    },
    {
      title: 'Hot Air Balloon Safari',
      body: "Float over Tarangire's baobab plains at dawn, watching elephant herds and lion prides from above in an utterly magical aerial perspective.",
      image: '/images/destinations/tanzania/dunia-lion-and-plane-in-the-serengeti.webp',
    },
  ],
  gettingThere:
    'Tarangire is approximately 2.5–3 hours by road from Arusha (120km south), with the park gate well-signposted from the Arusha–Dodoma highway. Charter flights from Arusha reach Kuro Airstrip within the park in 30 minutes. Most visitors arrive on overland safari circuits from Arusha.',
  whereToStay: [
    {
      category: 'Luxury',
      picks: [
        'andBeyond Tarangire Treetops — elevated suites built into the canopy with sweeping plains views.',
        'Sanctuary Swala Camp — private, secluded corner of the park favoured by elephant herds.',
        "Oliver's Camp — renowned for outstanding walking safaris and an intimate bush atmosphere.",
        'Chem Chem Lodge — luxury with direct access to a private conservancy bordering the park.',
      ],
    },
    {
      category: 'Mid-Range',
      picks: [
        'Tarangire Safari Lodge — perched on a ridge with panoramic valley views.',
        'Tarangire Sopa Lodge — reliable comfort.',
        'Lemala Mpingo Ridge — comfortable tented stay with excellent guiding.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Best Season', body: 'The dry season (June–October) is essential for the famous elephant concentrations. The green season offers different but equally rewarding wildlife experiences.' },
    { label: 'Private Concessions', body: "Tarangire's neighbouring private concessions (Randilen, Kuro, Sinya) offer night drives and walking safaris unavailable in the national park. Highly recommended." },
    { label: 'Park Fees', body: 'Approximately USD 53 per person per day for non-residents, usually included in most package rates.' },
    { label: 'Self-Drive', body: 'Self-drive is permitted and roads are generally accessible, though a 4WD is recommended in the wet season.' },
    { label: 'Malaria', body: 'Tarangire is a malaria zone. Take prophylaxis and use insect repellent, especially at dusk.' },
    { label: 'Photography', body: "Tarangire's baobab landscape and elephant concentrations make it one of Africa's finest photography destinations. Bring a wide-angle lens for landscape-wildlife compositions." },
  ],
  faqs: [
    {
      q: 'Why do so many elephants come to Tarangire?',
      a: 'During Tanzania\'s dry season, the Tarangire River becomes the only permanent water source in a vast dry landscape. Elephants from a catchment area far exceeding the park\'s boundaries converge on the river, creating extraordinary concentrations of thousands of individuals.',
    },
    {
      q: "Is Tarangire worth visiting if I'm also doing Serengeti?",
      a: 'Absolutely — Tarangire and Serengeti offer genuinely complementary experiences. Tarangire delivers intimate elephant encounters, baobab landscapes and uncrowded game drives, while the Serengeti provides scale, the Migration, and the world\'s greatest predator densities. Together they make a complete northern Tanzania safari.',
    },
    {
      q: 'Can I do a walking safari in Tarangire?',
      a: 'Walking safaris are available in private concessions adjoining Tarangire (Randilen, Kuro) but not inside the national park itself. These walking safaris are among Tanzania\'s finest, with armed Maasai guides leading intimate explorations of the savannah in outstanding wildlife territory.',
    },
    {
      q: 'How does Tarangire compare to Amboseli for elephant viewing?',
      a: "Both are outstanding for elephants. Tarangire's dry-season concentrations of thousands of individuals in one river valley are arguably the most spectacular elephant gathering in East Africa. Amboseli offers the additional drama of Kilimanjaro as backdrop. Many travellers rate Tarangire's dry-season elephant spectacle as the most impressive of anywhere they have visited.",
    },
  ],
}

const zanzibarPark = {
  slug: 'zanzibar',
  name: 'Zanzibar Archipelago',
  blurb:
    "Africa's most romantic island destination — the UNESCO-listed lanes of Stone Town, spice plantations that once made the island fabulously wealthy, and Indian Ocean beaches ranging from calm northern shores to kitesurfing hotspots in the east.",
  metaDescription:
    "Discover Zanzibar's turquoise beaches, UNESCO-listed Stone Town, spice plantations, and Indian Ocean marine life — the perfect Tanzania safari finale.",
  image: '/images/destinations/tanzania/rubondo-island-camp-beach.webp',
  location: 'Indian Ocean, 35km off the Tanzanian coast',
  size: 'Archipelago; main island (Unguja) 1,554 km²',
  altitude: '0 — 120 m',
  bestTime: 'June–October (long dry season) & December–February (short dry season)',
  overview:
    "Zanzibar is Africa's most romantic island destination — a spice-scented archipelago of coral islands in the Indian Ocean 35km off Tanzania's coast, where Arab, Persian, Indian, Portuguese and Swahili cultures have fused over millennia to create one of the world's most distinctive and captivating places. The main island, Unguja (Zanzibar Island), combines the labyrinthine lanes of UNESCO-listed Stone Town with some of the Indian Ocean's most beautiful beaches, making it the ideal finale to any East African safari. Stone Town, Zanzibar's historic capital, is one of Africa's most extraordinary urban environments — a UNESCO World Heritage City of winding stone alleys, carved wooden doors, coral-built merchant houses and minarets that reveal the island's extraordinary history as the East African hub of the Arab spice and slave trade. The Omani Arab sultans who ruled Zanzibar from the 17th to 19th centuries built a city of wealth and sophistication whose architectural legacy survives largely intact as a living, breathing urban heritage zone. Zanzibar's beaches are among the Indian Ocean's finest. The northern beaches (Nungwi, Kendwa) offer calm turquoise water year-round with vibrant beach bar culture, while the eastern beaches (Paje, Jambiani, Matemwe) face the open ocean with dramatic tidal changes and excellent kitesurfing conditions. The southern tip hosts the extraordinary Menai Bay conservation area. Beneath the surface, Zanzibar's fringing reefs support outstanding snorkelling and scuba diving, with coral gardens, sea turtles, manta rays and dolphin pods all accessible from shore. For most travellers completing a Uganda or Tanzania safari, Zanzibar is the perfect beach recovery — turquoise water, fresh seafood, Swahili culture and winter sunshine combining to create one of East Africa's most rewarding travel experiences.",
  attractions: [
    {
      title: 'Stone Town (UNESCO World Heritage)',
      body: "A labyrinth of winding stone alleys, carved wooden doors and coral-built merchant houses — the legacy of Omani Arab sultans who ruled Zanzibar from the 17th to 19th centuries and built a city of wealth on the spice trade.",
      image: '/images/destinations/tanzania/photo-2013-03-06-11-59-58.webp',
    },
    {
      title: 'Northern Beaches — Nungwi & Kendwa',
      body: 'Calm, turquoise water year-round with a vibrant beach bar culture, making the north of the island the most reliable choice for swimming and spectacular sunsets.',
      image: '/images/destinations/tanzania/rubondo-island-camp-beach.webp',
    },
    {
      title: 'Eastern Beaches & Kitesurfing — Paje, Jambiani & Matemwe',
      body: "The east coast faces the open ocean with dramatic tidal changes and world-class kitesurfing conditions, while tranquil, upscale Matemwe sits closest to the Mnemba Atoll.",
      image: '/images/destinations/tanzania/rubondo-island-camp-landscape.webp',
    },
    {
      title: 'Menai Bay & Marine Life',
      body: "The southern tip of the island hosts the extraordinary Menai Bay conservation area, home to wild spinner and bottlenose dolphins alongside dugongs and a rich fringing reef ecosystem.",
      image: '/images/destinations/tanzania/dunia-crane.webp',
    },
    {
      title: 'Mnemba Atoll Diving & Snorkelling',
      body: "One of the Indian Ocean's finest snorkelling and diving sites, accessible from Matemwe or Nungwi — coral gardens, sea turtles, reef fish and occasional whale sharks in exceptionally clear water.",
      image: '/images/destinations/tanzania/rubondo-island-camp-fish-eagle-eric-frank-mr.webp',
    },
  ],
  activities: [
    {
      title: 'Stone Town Walking Tour',
      body: "Explore the UNESCO city's maze of alleys with a knowledgeable guide, visiting the old slave market, House of Wonders, Arab Fort and the carved door gallery.",
      image: '/images/destinations/tanzania/photo-2013-03-06-11-59-58.webp',
    },
    {
      title: 'Forodhani Night Market',
      body: "Join locals at Stone Town's famous evening waterfront market for fresh Zanzibari pizza, grilled octopus, samosas, sugar cane juice and spiced Zanzibari coffee.",
      image: '/images/destinations/tanzania/kite-in-lodge1.webp',
    },
    {
      title: 'Spice Farm Tour',
      body: 'Visit a working Zanzibar spice plantation to smell, taste and learn about cloves, nutmeg, vanilla, black pepper, cardamom and the other spices that made Zanzibar fabulously wealthy.',
      image: '/images/destinations/tanzania/forest-walk-096.webp',
    },
    {
      title: 'Dolphin Swimming at Kizimkazi',
      body: 'Take an early morning dhow to the southern tip to swim alongside wild spinner and bottlenose dolphins in the open Indian Ocean.',
      image: '/images/destinations/tanzania/rubondo-island-camp-beach.webp',
    },
    {
      title: 'Dhow Sunset Cruise',
      body: 'Sail on a traditional Zanzibari dhow at sunset with sundowners, watching the Stone Town waterfront glow gold as the Indian Ocean turns crimson.',
      image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
    },
  ],
  gettingThere:
    'Zanzibar is served by Abeid Amani Karume International Airport (ZNZ) on the main island, with direct flights from Dar es Salaam (25 minutes), Nairobi (1.5 hours) and Kilimanjaro/Arusha (45 minutes), plus some international connections. The Zanzibar fast ferry from Dar es Salaam takes 90 minutes and operates multiple times daily.',
  whereToStay: [
    {
      category: 'Luxury — Stone Town',
      picks: [
        'Park Hyatt Zanzibar — heritage architecture meets contemporary comfort.',
        'Zanzibar Serena Inn — elegant, overlooking the harbour.',
        'Emerson Spice — a restored merchant house with a famous rooftop restaurant and sunset views.',
      ],
    },
    {
      category: 'Luxury — Beach',
      picks: [
        'The Residence Zanzibar (Kizingoni) — beachfront resort living with calm year-round water.',
        'Melia Zanzibar (Kiwengwa) — a luxury beach resort on the north coast.',
      ],
    },
  ],
  practicalInfo: [
    { label: 'Dress Respectfully in Stone Town', body: 'Zanzibar is a predominantly Muslim island. Dress modestly (covered shoulders and knees) when exploring Stone Town and inland areas, switching to beachwear only at the beach.' },
    { label: 'Tides', body: "Zanzibar's east coast has dramatic tidal variations. At low tide the sea retreats hundreds of metres from some beaches — check tide times to plan beach swimming." },
    { label: 'Kitesurfing', body: 'Paje and Jambiani on the east coast are world-class kitesurfing destinations. The trade winds blow most reliably June–September and December–February.' },
    { label: 'Currency', body: 'Tanzanian Shilling and USD are both accepted. ATMs are available in Stone Town, but beach villages operate largely as a cash economy.' },
    { label: 'Health', body: 'Malaria is present on Zanzibar. Take prophylaxis and use mosquito repellent. Sunscreen is essential.' },
    { label: 'Bargaining', body: 'Fixed prices are becoming more common in tourist areas but bargaining is still expected in markets and craft stalls. Start at approximately half the asking price and negotiate politely.' },
  ],
  faqs: [
    {
      q: 'How many days should I spend in Zanzibar?',
      a: 'Most travellers spend 3–5 days on Zanzibar — 1–2 days exploring Stone Town and 2–3 days relaxing on a beach of their choice. Those wanting to dive, kitesurf, or explore multiple beaches benefit from 7–10 days.',
    },
    {
      q: 'What is the best beach in Zanzibar?',
      a: 'Different beaches suit different travellers. Nungwi and Kendwa (north) have calm year-round swimming, lively beach bars and spectacular sunsets. Paje and Jambiani (east) offer a more relaxed atmosphere, excellent kitesurfing and dramatic tidal beaches. Matemwe (north-east) is tranquil and upscale with proximity to Mnemba Atoll.',
    },
    {
      q: 'Is Zanzibar good for snorkelling and diving?',
      a: "Excellent. Mnemba Atoll (accessible from Matemwe or Nungwi) is one of the Indian Ocean's finest snorkelling and diving sites, with sea turtles, reef fish and occasional whale sharks. The waters around Zanzibar's main island also offer good snorkelling from most beaches.",
    },
    {
      q: 'Can I combine Zanzibar with a Uganda safari?',
      a: 'Yes — Tanzania-Zanzibar is a natural combination. Flights connect Entebbe to Zanzibar via Nairobi or Dar es Salaam in 3–4 hours, and combined itineraries pairing Uganda gorilla trekking with Zanzibar beach time let travellers experience the best of both in a single trip.',
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
    heroImage: '/images/parks/uganda/murchison-falls/dsc-6584.webp',
    exploreIntro:
      "From misty rainforests and endangered gorillas to wide savannahs and roaring waterfalls, Uganda is Africa's most diverse safari destination.",
    parkSummary:
      "Each of Uganda's national parks offers a completely different world — rich wildlife, dramatic landscapes, and unforgettable encounters. Choose your journey and explore the wild heart of the Pearl of Africa.",
    parkSummaryImage: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.webp',
    parks: [entebbe, kampala, bwindi, queenElizabeth, murchison, kibale, lakeMburo, mgahinga, kidepo, semuliki],
    privilegedAccess: [
      {
        title: "Gorilla Researcher's Morning Briefing",
        location: 'Bwindi Impenetrable Forest, SW Uganda',
        body: "A private pre-trek session with the Uganda Wildlife Authority\'s gorilla monitoring team. Learn exactly how your permit fee funds gorilla protection, meet the research staff who track these families daily, and understand which family you will visit that morning and what to expect from their current behaviour.",
        image: '/images/activities/gorilla-trekking/15-gorilla-ah1i7197.webp',
      },
      {
        title: 'Chimpanzee Wake-Up at First Light',
        location: 'Kibale National Park, W Uganda',
        body: "Enter Kibale's chimpanzee zone before the park opens to general visitors. Watch a habituated troupe rise from their night nests, begin grooming, and commence morning foraging — with no other guests present, in complete silence, accompanied by a specialist primatologist.",
        image: '/images/destinations/tanzania/chimp-habituation-project1.webp',
      },
      {
        title: 'Private Helicopter Flight over Murchison Falls',
        location: 'Murchison Falls National Park, NW Uganda',
        body: 'A private charter directly over the seven-metre gorge where the entire River Nile is compressed into one extraordinary point of power and spray. The helicopter then lands at a remote game-viewing site inaccessible by road, where a champagne sundowner awaits with your private ranger.',
        image: '/images/parks/uganda/murchison-falls/dsc-6951.webp',
      },
    ],
    lodges: [
      {
        name: 'Bwindi Lodge',
        location: 'Bwindi Impenetrable Forest (Buhoma)',
        body: 'Eight stone cottages on the forest rim with panoramic canopy views and direct access to the gorilla trekking assembly point — the most established luxury address in Bwindi.',
        image: '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.webp',
      },
      {
        name: 'Clouds Mountain Gorilla Lodge',
        location: 'Bwindi Impenetrable Forest (Nkuringo)',
        body: "Uganda's highest-altitude gorilla lodge, with heated plunge pools, private butler service, and the most dramatic viewpoint in the entire Bwindi region.",
        image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.webp',
      },
      {
        name: 'Apoka Safari Lodge',
        location: 'Kidepo Valley National Park',
        body: "The most exclusive address in Uganda's most remote park. Private game drives across Kidepo's semi-arid savannah with zero other tourist vehicles in sight.",
        image: '/images/parks/uganda/murchison-falls/dsc-6280.webp',
      },
      {
        name: 'Wildwaters Lodge',
        location: 'Nile River, Jinja',
        body: "A private island accessible only by boat — total seclusion on the Nile within reach of Jinja\'s white-water rapids and adventure activities.",
        image: '/images/parks/uganda/murchison-falls/dsc-6271.webp',
      },
      {
        name: 'Primate Lodge Kibale',
        location: 'Kibale National Park',
        body: 'Set within the park boundary for direct forest access — private guided night walks and the dawn chimpanzee experience are available exclusively to lodge guests.',
        image: '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.webp',
      },
      {
        name: "Baker's Lodge",
        location: 'Murchison Falls National Park',
        body: "Eight East African-style cottages on the northern bank of the Nile with resident hippo pools, private river decks, and the falls thundering upstream.",
        image: '/images/parks/uganda/murchison-falls/dsc-6884.webp',
      },
    ],
    seoKeywords:
      'luxury Uganda safari, gorilla trekking Uganda, bespoke Uganda primate safari, private gorilla trek Bwindi, Murchison Falls luxury camp, Kidepo Valley exclusive safari, Uganda chimp tracking Kibale, mountain gorilla permit Uganda, Entebbe airport stopover, Kampala city tour',
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
    heroImage: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.webp',
    exploreIntro:
      "Rwanda is conservation-led luxury at its purest — gorilla trekking in Volcanoes, the Big Five in restored Akagera, canopy walks in Nyungwe and lakeside elegance on Kivu.",
    parkSummary:
      "Two flagship national parks, two distinct safari worlds. Volcanoes opens the door to mountain gorillas in their misty bamboo realm; Akagera's restored savannahs unite lions, leopards, elephants, buffalo and rhino on a single horizon.",
    parkSummaryImage: '/images/parks/rwanda/akagera/wilderness-magashi-1.webp',
    parks: [
      {
        slug: 'volcanoes',
        name: 'Volcanoes National Park',
        blurb:
          "The Rwandan section of the Virunga Massif — a chain of ancient volcanoes cloaked in bamboo and rainforest, sanctuary to some of the last remaining mountain gorillas on the planet and a thriving population of golden monkeys.",
        metaDescription:
          "Trek to mountain gorillas in Rwanda's Volcanoes National Park — habituated gorilla families, golden monkeys, and the Virunga volcanoes.",
        image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.webp',
        location: 'Northwestern Rwanda',
        size: '160 km²',
        altitude: '2,400 — 4,500 m',
        bestTime: 'June–September & December–February',
        overview:
          "Volcanoes National Park is Rwanda's crown jewel and one of the most extraordinary wildlife destinations on Earth. Nestled in the Virunga Massif — a chain of ancient volcanoes straddling Rwanda, Uganda, and the Democratic Republic of Congo — this 160 square kilometre park protects some of the last remaining mountain gorillas on the planet, with an estimated population of just over 1,000 individuals worldwide. Encountering these magnificent primates in their natural habitat is a profoundly rare and life-changing privilege. The park was made famous by primatologist Dian Fossey, whose decades of research and conservation advocacy are documented in Gorillas in the Mist. Her grave lies within the park alongside the gorillas she dedicated her life to protecting, and her legacy continues through the Dian Fossey Gorilla Fund, headquartered in Kigali. Trekking permits are priced at USD 1,500 per person — the revenue directly funds park management, anti-poaching operations, and community development programmes. The trek winds through bamboo forest, Hagenia woodland, and volcanic moorland, with treks ranging from 1 to 7 hours depending on where the gorilla family has settled for the day. The dry seasons of June–September and December–February offer the firmest trails and clearest skies, while the wetter months bring lush vegetation, fewer visitors, and a mistier, uniquely atmospheric forest — gorillas are present and trekked year-round.",
        attractions: [
          {
            title: 'Mountain Gorilla Trekking',
            body: "Trek with expert rangers through misty forest to spend one magical hour with a habituated gorilla family, observing silverbacks, mothers, and infants in natural behaviour — the experience that defined Rwanda's modern tourism.",
            image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.webp',
          },
          {
            title: 'Golden Monkey Tracking',
            body: 'Follow rangers through bamboo forest to encounter troops of the endangered golden monkey, found nowhere else in the world outside the Virunga range — playful, photogenic, and utterly captivating.',
            image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.webp',
          },
          {
            title: 'Dian Fossey Tomb Trail',
            body: "Hike to Karisoke Research Centre and the grave of Dian Fossey, passing through the gorilla habitat she studied and fought to protect for nearly two decades — a pilgrimage for the conservation-minded traveller.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-15.webp',
          },
          {
            title: "Iby'iwacu Cultural Village",
            body: "Experience traditional Rwandan culture with local community members through dance, archery, traditional medicine demonstrations, and storytelling — a meaningful connection to the people who share this landscape with the gorillas.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.webp',
          },
          {
            title: 'Twin Lakes — Lake Ruhondo & Lake Bulera',
            body: 'Visit the scenic twin volcanic lakes at the foot of the Virunga range for boat rides, birdwatching, and stunning reflections of the volcano chain — a beautiful addition to any Volcanoes itinerary.',
            image: '/images/destinations/rwanda/image-20260331125636.webp',
          },
          {
            title: 'Gorilla Naming Ceremony — Kwita Izina',
            body: "If visiting in September, attend Rwanda's famous annual gorilla naming ceremony — a spectacular national celebration of conservation success where newly born gorilla infants receive their names.",
            image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.webp',
          },
          {
            title: 'Mount Bisoke Summit Hike',
            body: "Climb this active volcano to its summit — a demanding but rewarding day hike through montane forest and bamboo, with sweeping views over the Virunga chain and into the DRC on a clear day.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-15.webp',
          },
          {
            title: 'Mount Karisimbi Summit Hike',
            body: "Tackle the tallest of the Virunga volcanoes — a serious high-altitude challenge for adventurous trekkers, rewarded with sunrise views above the clouds.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.webp',
          },
          {
            title: 'Musanze Caves',
            body: "Explore the remarkable Musanze Caves near Musanze town — an easy, atmospheric half-day addition to a gorilla trekking itinerary.",
            image: '/images/destinations/rwanda/image-20260331125636.webp',
          },
        ],
        activities: [
          {
            title: 'Kigali Genocide Memorial',
            body: 'A respectful, contextual visit to the Kigali Genocide Memorial — essential reading on the journey of modern Rwanda, ideally on arrival or departure day.',
            image: '/images/destinations/rwanda/image-20260331125636.webp',
          },
        ],
        gettingThere:
          "Volcanoes National Park is approximately 2–3 hours by road from Kigali (110km). Most visitors are transferred by their tour operator from Kigali hotels to the park briefing point at 7:00am for the morning trek. The nearest town is Musanze (Ruhengeri), which has basic accommodation options. Still Wild Safaris arranges all transport and logistics for Kigali-based gorilla trekking departures.",
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
            a: 'Permits are booked through the Rwanda Development Board (RDB) or through an authorised tour operator like Still Wild Safaris, which handles all permit procurement, transport, and lodge bookings as part of a complete package.',
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
        metaDescription:
          "Experience Rwanda's only savannah safari park — Akagera offers the Big Five, boat safaris on Lake Ihema, and one of Africa's greatest conservation comebacks.",
        image: '/images/parks/rwanda/akagera/wilderness-magashi-1.webp',
        location: 'Eastern Rwanda',
        size: '1,122 km²',
        altitude: '',
        bestTime: 'July–September & December–February',
        overview:
          "Akagera National Park is Rwanda's most dramatic conservation success story and the country's only savannah wildlife park. Covering 1,122 square kilometres of rolling savannahs, dense woodlands, lakes, and wetlands along the Tanzanian border, Akagera has undergone a remarkable transformation from a neglected, poaching-ravaged park in the 1990s to a thriving Big Five destination that stands as a model for African wildlife management. The park is managed in partnership by the Rwanda Development Board and African Parks — a non-profit conservation organisation that has driven extraordinary results since taking over management in 2010. Lions were reintroduced in 2015, black rhinoceros were brought back in 2017 and 2021, and the overall wildlife population has surged. Today Akagera offers elephant, buffalo, hippopotamus, giraffe, zebra, leopard, spotted hyena, and numerous antelope species alongside its recovering lion and rhino populations. The park's landscape diversity is exceptional, spanning open savannah and acacia-studded hills, dense riverine forest along the Akagera River, and a chain of lakes that support enormous hippo and crocodile populations. Boat safaris on Lake Ihema are one of Akagera's signature experiences, drifting past pods of hundreds of hippos and basking crocodiles while painted storks, African fish eagles, and malachite kingfishers watch from the papyrus fringe. The dry seasons concentrate wildlife around remaining water sources for predictable game viewing, while the wet seasons transform the park into lush green landscapes with excellent birdwatching and newborn animals underfoot.",
        attractions: [
          {
            title: 'Big Five Game Drives',
            body: "Guided morning and afternoon game drives in search of lion, leopard, elephant, buffalo, and black rhino across the park's diverse savannah habitats — one of Africa's great conservation comeback stories on a single game drive.",
            image: '/images/parks/rwanda/akagera/wilderness-magashi-7.webp',
          },
          {
            title: 'Lake Ihema Boat Safari',
            body: "A two-hour boat safari on Lake Ihema, drifting through papyrus-fringed channels past hundreds of hippos, Nile crocodiles, and extraordinary waterbird congregations including African fish eagles and malachite kingfishers.",
            image: '/images/parks/rwanda/akagera/1738327984199-magashi-boating-12-24-tc-025.webp',
          },
          {
            title: 'Black Rhino Tracking',
            body: 'Join a specialist ranger for a guided black rhino tracking experience, following the rhino monitoring team to observe these critically endangered animals in their restored bush habitat.',
            image: '/images/parks/rwanda/akagera/wilderness-magashi-31.webp',
          },
          {
            title: 'Giraffe & Zebra Plains Drive',
            body: 'Drive the open northern savannahs for spectacular concentrations of Masai giraffe, plains zebra, topi, and waterbuck against a backdrop of rolling acacia hills stretching to the Tanzania border.',
            image: '/images/parks/rwanda/akagera/wilderness-magashi-19.webp',
          },
        ],
        activities: [
          {
            title: 'Wilderness Magashi Camp Stay',
            body: "Tented suites on the shore of Lake Rwanyakazinga — Rwanda's flagship eco-luxury safari camp in the heart of the best game-viewing terrain.",
            image: '/images/parks/rwanda/akagera/wilderness-magashi-23.webp',
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
          { label: 'Combine with Rwanda Eastern Province', body: 'Akagera pairs well with a visit to Kigali and the Eastern Province, including the community around Kayonza — an easy addition to any Big Five itinerary.' },
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
        metaDescription:
          "Discover Kigali, Rwanda's vibrant capital — the Genocide Memorial, bustling markets, world-class dining, and your gateway to gorilla trekking.",
        image: '/images/destinations/rwanda/image-20260331125652.webp',
        location: "Rwanda's Capital City",
        size: 'Metropolitan Capital',
        altitude: '~1,500 m',
        bestTime: 'Year-round (Jun–Sep & Dec–Feb preferred)',
        overview:
          "Kigali is one of Africa's most remarkable capital cities — clean, safe, orderly, and utterly captivating. Perched across a series of rolling hills at an elevation of roughly 1,500 metres, the city offers a cool climate, stunning views, and a sense of forward momentum that is rare on the continent. Temperatures are pleasant year-round, typically ranging 18–24°C, with long rains falling March–May and short rains October–November — showers are typically brief and rarely disrupt travel plans. Rwanda's extraordinary transformation from the tragedy of 1994 into a model of reconciliation, development, and environmental consciousness is most visible here in its capital. Streets are immaculate — plastic bags are banned, and the last Saturday of every month is Umuganda, a community work day when residents clean and repair their neighbourhoods together. Kigali serves as the primary entry point for travellers heading to Volcanoes National Park for gorilla trekking, but the city rewards those who linger: the Kigali Genocide Memorial is one of Africa's most profound historical sites, while the vibrant Kimironko Market, contemporary art galleries, rooftop restaurants, and thriving café culture offer days of rich exploration.",
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
            image: '/images/destinations/rwanda/image-20260331125705.webp',
          },
          {
            title: 'Inema Arts Center',
            body:
              "Explore one of East Africa's most dynamic contemporary art galleries, where resident artists create and sell bold, expressive work rooted in Rwandan culture and identity. A thriving showcase of Rwanda's creative renaissance.",
            image: '/images/destinations/rwanda/image-20260331125717.webp',
          },
          {
            title: "Nyamirambo Women's Centre Walking Tour",
            body:
              "Join a community-led guided walk through Kigali's most authentic neighbourhood, sampling local food and hearing stories of women-led empowerment. One of the most genuine cultural experiences in the city.",
            image: '/images/destinations/rwanda/image-20260331125729.webp',
          },
          {
            title: 'Kigali Convention Centre',
            body:
              "Admire the striking dome architecture of this landmark building — it has become the defining symbol of modern Rwanda's economic ambition and rapid development.",
            image: '/images/destinations/rwanda/image-20260331125738.webp',
          },
        ],
        activities: [
          {
            title: 'Kimironko Market',
            body:
              "One of East Africa's most colourful and well-organised markets — perfect for fabrics, crafts, fresh produce, and authentic local atmosphere. A highlight of any Kigali visit.",
            image: '/images/destinations/rwanda/image-20260331125738.webp',
          },
          {
            title: 'Rooftop Dining & Kigali Coffee Culture',
            body:
              "From rooftop bars with panoramic hill views to fine dining restaurants serving Rwandan and international cuisine, Kigali's food and café scene is exceptional. Rwanda produces some of Africa's finest single-origin coffee.",
            image: '/images/destinations/rwanda/image-20260331125748.webp',
          },
          {
            title: 'Presidential Palace Museum',
            body:
              "Explore the former residence of President Habyarimana, preserved exactly as it was on the night of April 6, 1994 — including the wreckage of the plane that was shot down. A powerful window into contemporary Rwandan history.",
            image: '/images/destinations/rwanda/image-20260331125809.webp',
          },
        ],
        gettingThere:
          "Kigali is served by Kigali International Airport (KGL), with direct flights from Nairobi, Entebbe, Addis Ababa, Dubai, Brussels, and London. RwandAir is the national carrier offering connections across Africa and beyond. Overland, Kigali is approximately 9–10 hours from Kampala by road (via the Cyanika or Katuna border), and Still Wild Safaris arranges cross-border transfers for combined Uganda–Rwanda itineraries.",
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
            a: 'Volcanoes National Park is approximately 2–3 hours from Kigali by road (about 110km), making it easily reachable for gorilla trekking on either a day trip or as a multi-night stay at a park lodge.',
          },
          {
            q: 'Is Kigali safe for tourists?',
            a: "Yes — Kigali is consistently ranked as one of Africa\'s safest cities. Crime rates are low, streets are well-lit, and there is a visible police presence. Solo and female travellers report feeling very comfortable here.",
          },
          {
            q: 'Can I combine a Kigali visit with a Uganda safari?',
            a: 'Absolutely. Still Wild Safaris specialises in combined Uganda–Rwanda itineraries departing from Kigali, including gorilla trekking in both Bwindi (Uganda) and Volcanoes (Rwanda), as well as Uganda wildlife safaris.',
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
        metaDescription:
          "Explore Nyungwe Forest, Rwanda's ancient montane rainforest — chimpanzee trekking, the canopy walkway, and 13 primate species.",
        image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.webp',
        location: 'Southwestern Rwanda',
        size: '1,019 km²',
        altitude: '1,600 — 2,950 m',
        bestTime: 'June–September & December–February',
        overview:
          "Nyungwe Forest National Park is one of Africa's oldest and most biodiverse rainforests, covering 1,019 square kilometres of ancient montane forest in Rwanda's south-west corner. Estimated to be over 29,000 years old, Nyungwe has survived multiple ice ages and global climate shifts, earning its status as one of the continent's most ecologically significant protected areas. The forest is home to 13 primate species — the highest concentration in East Africa — including chimpanzees, Angola colobus, L'Hoest's monkeys, olive baboons, and the rare grey-cheeked mangabey. Nyungwe's iconic canopy walkway — a series of suspended bridges stretching 200 metres through the forest canopy at heights of up to 70 metres — has become one of Rwanda's most photographed tourist attractions. The park is also exceptional for birdwatching, with over 310 recorded species including 29 Albertine Rift endemics — the wet season brings migrant species and more active forest bird behaviour, making it a rewarding time for serious birders despite muddier trails. The forest protects the headwaters of the Nile river, adding historical and geographical significance to its ecological importance.",
        attractions: [
          {
            title: 'Chimpanzee Trekking',
            body: "Follow expert trackers through dense rainforest to spend time with habituated chimpanzee groups, watching them forage, socialise, and travel through their ancient forest home — an experience increasingly rivalling Uganda's Kibale Forest.",
            image: '/images/destinations/tanzania/chimp-habituation-project1.webp',
          },
          {
            title: 'Canopy Walkway Experience',
            body: "Cross the 200m suspended canopy bridge network at heights of up to 70m, scanning for colobus monkeys, turacos, and hornbills in the forest crown — one of Rwanda's most spectacular and photographed experiences.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-15.webp',
          },
          {
            title: 'Colobus Monkey Habituation',
            body: "Join trackers following troops of Angola colobus monkeys as they move through the forest — one of the most visually spectacular primate encounters in Africa, with troops of hundreds moving through the canopy overhead.",
            image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.webp',
          },
        ],
        activities: [
          {
            title: "One&Only Nyungwe House Stay",
            body: "Set within a working tea estate at the forest edge — exceptional service, sweeping views across the plantation to the ancient forest, and the most luxurious base for all Nyungwe activities.",
            image: '/images/parks/rwanda/volcanoes/1750336906468-the-sanctuary-at-bisate-view-1-aerial.webp',
          },
          {
            title: 'Albertine Rift Birding',
            body: "Over 310 recorded bird species including 29 Albertine Rift endemics found nowhere else on earth — Nyungwe is one of Africa's premier birdwatching destinations for serious listers.",
            image: '/images/activities/birding/lensoffthegreen-1748944212110.webp',
          },
          {
            title: 'Combine with Lake Kivu',
            body: "Nyungwe is most rewarding when combined with a Lake Kivu stay, creating a complete south-western Rwanda circuit of ancient forest, primates, and lakeside relaxation.",
            image: '/images/parks/rwanda/akagera/1738328545766-magashi-sundowners-12-24-tc-012.webp',
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
        metaDescription:
          "Discover Lake Kivu, one of Africa's Great Lakes — boat trips, island stays, beach relaxation, and coffee tours on Rwanda's most beautiful lake.",
        image: '/images/destinations/rwanda/image-20260331125636.webp',
        location: "Rwanda's Western Shore",
        size: '',
        altitude: '1,460 m',
        bestTime: 'Year-round (Jun–Sep & Dec–Feb preferred)',
        overview:
          "Lake Kivu is one of Africa's Great Lakes and one of the continent's most beautiful and unique freshwater bodies. Straddling the border between Rwanda and the Democratic Republic of Congo, this deep mountain lake sits at 1,460 metres above sea level, framed by steep volcanic hills, lush island archipelagos, and the dramatic Congo-Nile watershed escarpment. Unlike many East African lakes, Lake Kivu is free from bilharzia and dangerous aquatic animals, making it safe for swimming and water sports — a rare quality that has made it Rwanda's premier beach destination. The lake's shores are dotted with charming resort towns, the most prominent being Rubavu (Gisenyi) in the north and Rusizi (Cyangugu) in the south. Lake Kivu is also geologically extraordinary: beneath its tranquil surface lie enormous reserves of dissolved methane gas, an unusual phenomenon caused by the lake's unique chemistry. Rwanda has developed the world's first commercial methane extraction project from the lake's depths, turning a geological curiosity into a source of national electricity and a fascinating industrial tourism story. The Congo Nile Trail — a 227-kilometre cycling and hiking route along the lake's shore — is rapidly establishing itself as one of Africa's premier adventure tourism routes. Temperatures at lake level are pleasant year-round, typically 18–27°C — noticeably warmer than Rwanda's higher-altitude parks.",
        attractions: [
          {
            title: 'Island Boat Trip',
            body: "Take a motorboat or traditional wooden pirogue to explore the lake's island archipelago, stopping for swimming, snorkelling, and picnics on secluded shores in crystal-clear mountain water.",
            image: '/images/parks/rwanda/akagera/1738327984199-magashi-boating-12-24-tc-025.webp',
          },
          {
            title: 'Napoleon Island',
            body: "Visit this small island at dusk to witness an enormous fruit bat colony take to the sky in one of the region's most spectacular wildlife spectacles.",
            image: '/images/parks/rwanda/akagera/1738328545766-magashi-sundowners-12-24-tc-012.webp',
          },
          {
            title: 'Amahoro Island',
            body: "Escape to complete seclusion on this tranquil island, where crystal-clear water makes for exceptional snorkelling — a peaceful counterpoint to the more active corners of the lake.",
            image: '/images/parks/uganda/lake-mburo/52760819657-a6f9d6bf99-o.webp',
          },
          {
            title: 'Congo Nile Trail Cycling',
            body: "Rent a bicycle and cycle sections of the scenic 227km lakeside trail through fishing villages, hill farms, coffee estates, and forest patches — one of Africa's most rewarding adventure tourism routes.",
            image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.webp',
          },
          {
            title: 'Sunset Boat Cruise',
            body: "Board a dhow or motor launch for a lake sunset cruise as the volcanic hills of Congo reflect in golden water — one of the most spectacular evenings anywhere in Rwanda.",
            image: '/images/parks/rwanda/akagera/1738328545766-magashi-sundowners-12-24-tc-012.webp',
          },
        ],
        activities: [
          {
            title: 'Kayaking on Lake Kivu',
            body: "Paddle on the lake's calm highland waters, exploring bays and coves at a leisurely pace with magnificent volcanic hill views stretching to the Congo border.",
            image: '/images/parks/uganda/lake-mburo/52760819657-a6f9d6bf99-o.webp',
          },
          {
            title: 'Lake Kivu Beach Relaxation',
            body: "Spend a day at one of the lake's resort beaches — swimming in clear, safe mountain water and enjoying fresh sambaza (the local endemic sardine, deep-fried and eaten whole) and cold Primus beer.",
            image: '/images/destinations/rwanda/image-20260331125809.webp',
          },
          {
            title: 'Rusizi & Southern Shore Exploration',
            body: "Visit the southern shore town of Rusizi near Nyungwe, exploring the DRC border area and the dramatic southern lake scenery — often combined with a Nyungwe Forest visit on the same circuit.",
            image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.webp',
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
          { label: 'Methane Gas', body: "Lake Kivu contains vast dissolved methane gas reserves beneath its surface, extracted commercially to generate electricity for Rwanda. It is entirely safe for swimmers and boat users, and adds a fascinating industrial tourism dimension to a lake visit." },
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
        image: '/images/parks/rwanda/volcanoes/wilderness-bisate-29.webp',
      },
      {
        title: 'Private Canopy Walkway at Sunrise — Nyungwe',
        location: 'Nyungwe Forest National Park, SW Rwanda',
        body: "Access the famous Nyungwe Canopy Walkway — suspended 70 metres above the forest floor — before the park opens to general visitors, for a completely private, silent sunrise experience. The ancient rainforest spreads below in the morning mist, colobus monkeys move through the canopy at eye level, and 310 bird species wake around you.",
        image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.webp',
      },
      {
        title: 'Rhino Tracking with the Research Team',
        location: 'Akagera National Park, Eastern Rwanda',
        body: "Join a dedicated research team for a morning tracking Rwanda's critically endangered black and white rhinos — reintroduced to Akagera after an absence of decades. Accompany researchers monitoring collar data, recording behaviour, and assessing range. Scientific insight few travellers ever receive, in a park that represents one of Africa's most successful rewilding stories.",
        image: '/images/parks/rwanda/akagera/wilderness-magashi-31.webp',
      },
    ],
    lodges: [
      {
        name: 'Singita Kwitonda Lodge',
        location: 'Volcanoes National Park',
        body: 'Ultra-luxury low-impact suites with Sabyinyo volcano views and direct gorilla trekking access. Conservation-first ethos throughout.',
        image: '/images/lodges/rwanda/volcanoes-national-park/singita-kwitonda-lodge/dsc07739.webp',
      },
      {
        name: 'Bisate Lodge',
        location: 'Volcanoes National Park',
        body: "Six spherical forest villas built in an eroded volcanic cone. An active reforestation programme on-site. Among Africa\'s most architecturally significant lodges.",
        image: '/images/lodges/rwanda/volcanoes-national-park/wildernes-bisate-lodge/1753110933515-bisate-gorilla-trekking-06-25-fr-31.webp',
      },
      {
        name: "One&Only Gorilla's Nest",
        location: 'Volcanoes National Park',
        body: 'Nestled in eucalyptus forest moments from the gorilla trekking starting point. Unparalleled luxury in immediate proximity to the gorillas.',
        image: '/images/lodges/rwanda/volcanoes-national-park/one-and-only-gorilla-nest/ajqwtbm-sghilb7nle6tsj60kf09t2y-5t9-yogkjdukgiwdyxdqa3q5xhnkhpsmgq-zfpyh4-wq0ahhc9fjpalj-rthz6sczpv5eey2khgmwvwq0mmt-h400-nu.webp',
      },
      {
        name: 'One&Only Nyungwe House',
        location: 'Nyungwe Forest National Park',
        body: 'A tea plantation transformed into a luxury forest retreat — the ideal base for chimpanzee trekking and the famous Nyungwe canopy walkway.',
        image: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.webp',
      },
      {
        name: 'Magashi Peninsula',
        location: 'Akagera National Park',
        body: 'Exclusive lakeside camp on Lake Rwanyakizinga. Classic Big Five safari in an intimate tented setting, operated in partnership with African Parks.',
        image: '/images/parks/rwanda/akagera/wilderness-magashi.webp',
      },
      {
        name: 'The Retreat by Heaven',
        location: 'Kigali',
        body: "The finest arrival and departure experience in Kigali — world-class spa, the city's best dining, and a serene garden setting.",
        image: '/images/destinations/rwanda/image-20260331125636.webp',
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
    heroImage: '/images/parks/kenya/masai-mara/a-balloon-sunrise.webp',
    exploreIntro:
      "Kenya offers the broadest variety of any East African safari — wildebeest spectacle, elephant herds beneath Kilimanjaro, rhino conservation pioneers, the unique “Samburu Five” and the most exclusive private conservancies on the continent.",
    parkSummary:
      "Five distinct ecosystems, each curated to a different traveler. The Mara delivers the great migration; Amboseli, the elephants under Kilimanjaro; Laikipia, the conservation pioneers; Samburu, the dry-country specialists; Tsavo, scale and remoteness in equal measure.",
    parkSummaryImage: '/images/parks/kenya/laikipia-loisaba/1752747854365-kenya-suyian-lodge-exterior-elephant-view-8.webp',
    parks: [
      {
        slug: 'masai-mara',
        name: 'Masai Mara National Reserve',
        blurb:
          "The northern extension of the Serengeti and the stage for the Great Migration each July to October — plus year-round resident lion, leopard and cheetah on Africa's most photographed plains.",
        metaDescription:
          "Experience Africa's greatest wildlife spectacle in the Maasai Mara — the Great Wildebeest Migration, Big Five game drives, and hot air balloon safaris.",
        image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.webp',
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
            image: '/images/parks/kenya/masai-mara/the-dangers-of-crossing-the-mara-river.webp',
          },
          {
            title: 'Big Five Game Drive',
            body:
              'Morning and afternoon drives with expert Maasai guides tracking lion prides, leopard, cheetah, elephant herds and buffalo across the open Mara plains and private conservancies. The Mara offers year-round predator sightings unmatched anywhere in Africa.',
            image: '/images/parks/kenya/masai-mara/activites-game-drive.webp',
          },
          {
            title: 'Hot Air Balloon Safari',
            body:
              "Rise at dawn for a magical balloon flight over the Mara, watching herds of wildebeest, elephant and giraffe from above before landing for a champagne bush breakfast. The definitive Maasai Mara experience and one of Africa's most iconic wildlife moments.",
            image: '/images/parks/kenya/masai-mara/hot-air-balloon-safari.webp',
          },
          {
            title: 'Maasai Village Cultural Visit',
            body:
              "Visit an authentic Maasai enkiama (village), meeting community members and learning about Maasai warrior traditions — a rich cultural counterpoint to the game drives.",
            image: '/images/parks/kenya/masai-mara/angama-mara-s-sundowner-boma.webp',
          },
          {
            title: 'Mara River Hippo Pool',
            body:
              "Visit a permanent Mara River hippo pool to watch enormous pods of hippos alongside Nile crocodiles basking on the banks — a reliable and dramatic sighting outside of crossing season.",
            image: '/images/parks/kenya/masai-mara/the-dangers-of-crossing-the-mara-river.webp',
          },
          {
            title: 'Cheetah Coalition Tracking',
            body:
              "The Mara's open plains make cheetah one of the easiest big cats to observe in the world. Tracking coalition hunts across the grassland is an iconic Mara experience.",
            image: '/images/parks/kenya/masai-mara/cheetahs-in-the-conservancy.webp',
          },
        ],
        activities: [
          {
            title: 'Private Conservancy Game Drives',
            body: 'Off-road, night-drive and walking-safari options outside the main reserve — lower vehicle density, more privacy, and exclusive sightings unavailable within the public reserve.',
            image: '/images/lodges/kenya/masai-mara/mara-plains-camp/getting-a-bird-s-eye-view-in-the-omc.webp',
          },
          {
            title: 'Sundowners with the Maasai',
            body: "Bush bar set up at sunset on a private termite mound or riverbank as the Mara sky blazes in shades of gold and crimson — cultural depth alongside the safari.",
            image: '/images/parks/kenya/masai-mara/angama-mara-s-sundowner-boma.webp',
          },
          {
            title: 'Guided Bush Walk',
            body: 'Walk the Mara plains with an armed Maasai ranger guide, reading animal tracks and experiencing the landscape at a pace impossible from a vehicle. Available in most private conservancies bordering the reserve.',
            image: '/images/parks/kenya/masai-mara/cheetahs-in-the-conservancy.webp',
          },
        ],
        gettingThere:
          "The Maasai Mara is approximately 5–6 hours by road from Nairobi (270km) or 45 minutes by scheduled charter flight. Multiple airlines — Air Kenya and Safaricom Aviation — operate daily flights from Nairobi's Wilson Airport to Mara airstrips. Flying is strongly recommended.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              'Angama Mara — spectacular clifftop position above the Rift Valley escarpment, iconic views.',
              'andBeyond Bateleur Camp — classic, exclusive tented camp with timeless safari elegance.',
              "Mahali Mzuri — Sir Richard Branson's camp in Olare Motorogi Conservancy.",
              'Singita Mara River Tented Camp — riverside luxury, exceptional guiding and design.',
              'JW Marriott Masai Mara Lodge — luxury tented suites on the banks of the Talek River, each with a private outdoor jacuzzi and deck.',
              'Fairmont Mara Safari Club — tented camp surrounded on three sides by the Mara River at the foot of the Aitong Hills, with private decks overlooking hippo and crocodile-filled waters.',
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              "Governors' Camp — historic and iconic, set in Musiara Marsh.",
              'Mara Serena Safari Lodge — reliable comfort with sweeping Mara views.',
              "Keekorok Lodge — one of the Mara's original lodges, well-established and central.",
              'Ngenche Camp — intimate 8-tent camp on the Mara River in the Mara North Conservancy, with access to exclusive conservancy game drives.',
            ],
          },
        ],
        practicalInfo: [
          { label: 'Conservation Fees', body: 'Reserve entry fees are approximately USD 80 per day for non-residents. Private conservancy fees are usually included in lodge rates.' },
          { label: 'Malaria', body: 'The Mara is a malaria zone. Take prophylaxis, use repellent, and wear long clothing at dusk.' },
          { label: 'Clothing', body: 'Neutral colours (khaki, olive, beige) for game drives. Warm layers for dawn drives. Smart casual for lodge evenings.' },
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
          {
            q: 'Can I do the Maasai Mara on a budget?',
            a: 'The Mara caters primarily to mid-range and luxury travellers, but more affordable options exist on the reserve boundary. A comfortable mid-range Mara safari starts from approximately USD 300–400 per person per night, all-inclusive.',
          },
        ],
      },
      {
        slug: 'amboseli',
        name: 'Amboseli National Park',
        blurb:
          "The classic 'elephants under Kilimanjaro' park — small, accessible, and home to some of Africa's largest tuskers in front of an impossibly photogenic mountain backdrop.",
        metaDescription:
          "Amboseli National Park: elephant herds beneath Mount Kilimanjaro, one of Africa's most iconic safari backdrops in Kenya.",
        image: '/images/parks/kenya/amboseli/amboseli-elephants.webp',
        location: 'Southern Kenya',
        size: '392 km²',
        altitude: '1,100 — 1,200 m',
        bestTime: 'June–October & January–February',
        overview:
          "Amboseli National Park covers 392 sq km and is home to one of Africa's most iconic images — vast elephant herds moving across open plains with the snow-capped peak of Mount Kilimanjaro behind them. The park protects one of the highest densities of free-roaming elephants in Africa and has been the site of landmark elephant research for over 50 years. A swampy heart sustains the park's elephants and lion, alongside over 600 bird species. The Observation Hill viewpoint delivers one of the most photographed sunsets in Africa — Kilimanjaro glowing pink above a sea of elephants as the plains below turn to gold.",
        attractions: [
          {
            title: 'Big-Tusker Elephant Herds',
            body:
              "Among the world's largest concentrations of giant-tusked elephants, easily observed from open vehicles. Amboseli has been the site of landmark elephant research running for over 50 years.",
            image: '/images/parks/kenya/amboseli/amboseli-elephants.webp',
          },
          {
            title: 'Observation Hill Sundowners with Kilimanjaro',
            body:
              "Climb Observation Hill at sunset for the definitive Amboseli panorama — Africa's highest peak turning gold and pink behind a sea of elephants at the swamp below. Kilimanjaro is clearest in early morning and late afternoon during the dry months.",
            image: '/images/parks/kenya/amboseli/sundowner-on-observation-hill-overlooking-mt-kilimanjaro.webp',
          },
          {
            title: 'Swamp & Wetland Birdlife',
            body:
              "Amboseli's permanent swamps host over 600 bird species, part of a rich wetland ecosystem at the heart of the park.",
            image: '/images/parks/kenya/amboseli/amboseli-waterhole.webp',
          },
        ],
        activities: [
          {
            title: 'Stay at Elewana Tortilis Camp',
            body: 'Elegant tented luxury under fever trees, offering a classic Amboseli safari atmosphere.',
            image: '/images/lodges/kenya/amboseli-national-park/elewana-tortilis-camp-amboseli/elewana-tortilis-camp-amboseli-1.webp',
          },
          {
            title: 'Maasai Cultural Village Visit',
            body:
              'Spend a morning with a local Maasai community — traditional homestead, warrior demonstrations and beadwork. The pastoral Maasai culture has coexisted with Amboseli wildlife for centuries and adds rich human depth to the safari experience.',
            image: '/images/parks/kenya/amboseli/view-from-observation-hill.webp',
          },
        ],
        gettingThere:
          'Fly from Wilson Airport to Amboseli airstrip in 45 minutes, or drive from Nairobi in approximately 4 hours via Namanga.',
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              'andBeyond Tortilis Camp — exclusive tented camp on a private conservancy with unobstructed Kilimanjaro views.',
              'Elewana Tortilis Camp — elegant tented luxury under fever trees, classic Amboseli safari atmosphere.',
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              'Amboseli Serena Lodge — comfortable lodge with excellent swamp and mountain views.',
              'OlTukai Lodge — long-standing favourite right inside the park, well-located for game drives.',
            ],
          },
        ],
        practicalInfo: [
          { label: 'Park Fees', body: 'Park entry costs approximately USD 60 per person per day.' },
          { label: 'Photography', body: "Best light is early morning and late afternoon, when Kilimanjaro's cloud cap is most likely to lift." },
          { label: 'Combine With', body: 'Amboseli pairs naturally with Tsavo for a complete southern Kenya circuit.' },
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
            a: "Yes. Amboseli's short distances, large elephant herds and easy game viewing make it one of the most family-friendly parks in East Africa.",
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
        metaDescription:
          "Laikipia's private conservancies north of Mount Kenya protect half of Kenya's black rhino and all of its Grevy's zebra — walking, horseback, and night safaris in a working conservation landscape.",
        image: '/images/parks/kenya/laikipia-loisaba/1752747854365-kenya-suyian-lodge-exterior-elephant-view-8.webp',
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
            image: '/images/lodges/kenya/lakipia/elewana-kifaru-house/1770879317943whiterhino-elewanacar.webp',
          },
          {
            title: 'Walking & Horseback Safaris',
            body: "Laikipia is one of the few places in East Africa where horseback safari is offered — a quiet, low-impact way to cross the savannah.",
            image: '/images/lodges/kenya/lakipia/lewa-wilderness/fly-camping-star-dome.webp',
          },
          {
            title: "Grevy's Zebra Spotting",
            body: "The endangered Grevy's zebra has its global stronghold across Laikipia and Samburu — distinctive and beautiful.",
            image: '/images/parks/kenya/samburu/grevys-zebra-1.webp',
          },
        ],
        activities: [
          {
            title: 'Stay at Sirikoi',
            body: 'A small, family-run gem inside Lewa — personal, authentic, and exceptional in every detail.',
            image: '/images/lodges/kenya/lakipia/sirikoi-lodge-kenya/1744025471001-2024-cottage-outside-dec-sunset.webp',
          },
          {
            title: 'Stay at Segera Retreat',
            body: "An art-filled, sustainability-driven retreat in the heart of Laikipia with private spa villas and the renowned ZEITZ Foundation art collection.",
            image: '/images/lodges/kenya/lakipia/segera-retreat-2/17716019637244-segera-crookesandjackson-vl-2025-0688.webp',
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
        metaDescription:
          "Explore Samburu National Reserve, home to Kenya's Special Five species found nowhere else, and authentic northern Kenya wilderness.",
        image: '/images/parks/kenya/samburu/grevys-zebra-1.webp',
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
            image: '/images/parks/kenya/samburu/grevys-zebra.webp',
          },
          {
            title: "Ewaso Ng'iro River Drive",
            body:
              "Follow the river's course as elephants drink at dawn, crocodiles bask on the banks and leopard rest in the doum palm and acacia trees. The Ewaso Ng'iro is the lifeblood of the reserve — a constant theatre of wildlife in one of East Africa's most photogenic riverside habitats.",
            image: '/images/parks/kenya/samburu/sasaab-1.webp',
          },
          {
            title: 'Leopard Tracking',
            body:
              "Samburu has one of the highest leopard sighting rates in Kenya. Leopards are regularly seen resting in the riverside acacia and doum palm trees along the Ewaso Ng'iro — making sightings far more predictable than in most other Kenyan parks. Samburu's guides are expert trackers.",
            image: '/images/parks/kenya/samburu/kenya-8346.webp',
          },
          {
            title: 'Buffalo Springs Game Drive',
            body:
              "Cross into neighbouring Buffalo Springs National Reserve, just across the Ewaso Ng'iro, for additional game viewing in a slightly different habitat profile — a natural extension of a Samburu game drive.",
            image: '/images/parks/kenya/samburu/grevys-zebra-1.webp',
          },
          {
            title: 'Sunset River Game Drive',
            body:
              "Drive the Ewaso Ng'iro riverbank at sunset, when animal activity peaks and the doum palms glow gold in the evening light — one of Samburu's most atmospheric game drives.",
            image: '/images/parks/kenya/samburu/sasaab-1.webp',
          },
          {
            title: 'Birdwatching',
            body:
              "Samburu hosts over 350 bird species, including numerous northern Kenya endemics and dry-country specials unavailable further south — a rewarding destination for serious birders.",
            image: '/images/parks/kenya/samburu/kenya-8346.webp',
          },
          {
            title: 'Hot Springs at Samburu',
            body:
              "Visit natural hot springs in the greater Samburu landscape — a fascinating geological feature amid the arid northern frontier terrain.",
            image: '/images/parks/kenya/samburu/grevys-zebra.webp',
          },
        ],
        activities: [
          {
            title: 'Stay at Sasaab',
            body:
              "Sasaab Lodge — striking Moroccan-inspired suites overlooking the river, one of Kenya's most photographed lodges.",
            image: '/images/parks/kenya/samburu/sasaab.webp',
          },
          {
            title: 'Camel-Back Bush Walks',
            body:
              "A relaxed half-day walking safari with a string of pack camels — the Samburu way of crossing the bush. A genuinely immersive and culturally authentic experience.",
            image: '/images/parks/kenya/laikipia-loisaba/1752747977434-kenya-suyian-conservancy-walk-with-camels-5.webp',
          },
          {
            title: 'Samburu Cultural Village Visit',
            body:
              "A genuine, unstaged visit to a Samburu manyatta — meeting warrior families and seeing the extraordinary beaded jewellery, warrior demonstrations and the everyday life of a semi-nomadic pastoralist community whose culture is distinct from the Maasai despite their relatedness.",
            image: '/images/parks/kenya/samburu/samburu-village-visit-residents.webp',
          },
        ],
        gettingThere:
          "Samburu is approximately 6 hours by road from Nairobi (350km north) via Isiolo. Charter flights from Nairobi's Wilson Airport reach Samburu airstrip in approximately 1 hour. Most visitors fly up and drive back, or combine Samburu with a Laikipia stop on a circuit.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              "Elephant Bedroom Camp — riverside luxury tents right on the Ewaso Ng'iro, elephants regularly pass through camp.",
              "Sasaab Lodge — striking Moroccan-inspired suites overlooking the river, one of Kenya's most photographed lodges.",
              'Samburu Intrepids Camp — classic luxury tented camp with excellent river frontage and guiding.',
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              'Samburu Sopa Lodge — comfortable, reliable, good value.',
              'Larsen\'s Tented Camp — elegant tented camp with a long-standing reputation.',
              'Samburu Simba Lodge — solid mid-range choice with river views.',
            ],
          },
        ],
        practicalInfo: [
          { label: 'Heat', body: 'Samburu is hot, averaging 30–35°C. Start game drives before 7am and rest from midday to 4pm.' },
          { label: 'Malaria', body: 'Samburu is a high malaria zone. Take prophylaxis and use insect repellent religiously.' },
          { label: 'Clothing', body: 'Light, breathable neutral-coloured clothing for day drives. Bring a warm layer for early morning drives, which can be surprisingly cool.' },
          { label: 'Currency', body: 'USD is accepted in all major lodges. Bring cash for community markets and craft purchases.' },
          { label: 'Water', body: 'Drink bottled water only. Many lodges filter and purify their own water supply.' },
          { label: 'Photography', body: 'The unique northern species make Samburu exceptional for wildlife photography — wide-angle for landscapes, long telephoto for wildlife.' },
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
        metaDescription:
          "Tsavo National Park is Kenya's largest — a vast red-earth wilderness famous for its dust-red elephants, Mzima Springs, and raw, uncrowded safari country.",
        image: '/images/parks/kenya/tsavo/1736494647848-4z6a7096.webp',
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
            image: '/images/parks/kenya/tsavo/1736494647848-4z6a7096.webp',
          },
          {
            title: 'Mzima Springs',
            body: 'Crystal-clear, hippo-filled springs welling up at the base of the Chyulu Hills — viewable from a partly submerged glass tank, one of the more unusual experiences in East Africa.',
            image: '/images/parks/kenya/tsavo/1736494647850-dzf3773.webp',
          },
          {
            title: 'Lugard Falls & Yatta Plateau',
            body: "The fissure-falls on the Galana River and the world\'s longest lava flow at Yatta — Tsavo\'s scale is geological as much as wild.",
            image: '/images/parks/kenya/tsavo/1736494647851-img-8731.webp',
          },
        ],
        activities: [
          {
            title: 'Combined Tsavo & Coast Itinerary',
            body: 'Fly from the Mara or Nairobi straight into Tsavo for two nights of raw wilderness, then onward to the Lamu archipelago or Diani for a beach finish — the classic “bush-and-beach” combination.',
            image: '/images/parks/kenya/tsavo/1736494647851-img-8731.webp',
          },
          {
            title: 'Walking Safari',
            body: "Tsavo's vast wilderness lends itself to walking with specialist guides — an evening hike to a fly-camp on the riverbank is one of the most authentic experiences in Kenya.",
            image: '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.webp',
          },
          {
            title: 'Chyulu Hills Riding & Hiking',
            body: 'Tsavo West blurs into the Chyulu Hills — open volcanic grasslands ideal for horseriding and walking from ol Donyo Lodge.',
            image: '/images/lodges/kenya/amboseli-national-park/ol-donyo-lodge-1/masaai.webp',
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
        metaDescription:
          "Discover Lake Nakuru's famous flamingo flocks, black and white rhinos, and diverse Rift Valley wildlife on your Kenya safari.",
        image: '/images/parks/kenya/lake-nakuru/flamingos-lake-nakuru.webp',
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
            image: '/images/parks/kenya/lake-nakuru/flamingos-lake-nakuru.webp',
          },
          {
            title: 'Rhino Tracking',
            body:
              "Focus a dedicated game drive on tracking Nakuru's black and white rhino populations — one of Kenya's best rhino viewing opportunities. The park's electric security fence has created one of the highest rhino densities in Africa, and sightings are excellent year-round.",
            image: '/images/parks/kenya/lake-nakuru/rhinos-lake-nakuru.webp',
          },
          {
            title: "Baboon Cliff & Rothschild's Giraffe",
            body:
              "Drive to Baboon Cliff, the park's signature panoramic viewpoint, for a sweeping view of the entire lake and Rift Valley floor. Then photograph the elegant and endangered Rothschild's giraffe against the lake backdrop — an image unique to Nakuru.",
            image: '/images/parks/kenya/lake-nakuru/baboon-cliff-view.webp',
          },
        ],
        activities: [
          {
            title: 'Leopard & Lion Tracking',
            body:
              "The lake-shore forest is excellent leopard habitat — the park's resident individuals are regularly spotted in forest trees and rocky outcrops. Nakuru's lion pride is also regularly located by guides in the woodland and grassland habitats.",
            image: '/images/lodges/kenya/lake-nakuru-national-park/the-cliff/The Cliff_3.webp',
          },
          {
            title: 'Stay at Sarova Lion Hill',
            body:
              "Perched on Lion Hill with panoramic views over the lake and savannah — the classic Nakuru lodge address, combining comfort with direct park access and excellent guiding.",
            image: '/images/lodges/kenya/lake-nakuru-national-park/the-cliff/The Cliff_1.webp',
          },
          {
            title: 'Rift Valley Two-Lake Circuit',
            body:
              "Combine Lake Nakuru with Lake Naivasha (60km south) and Lake Bogoria for a scenic Rift Valley circuit — the flamingos and hot springs of Bogoria alongside Nakuru's rhinos make one of Kenya's finest scenic road journeys.",
            image: '/images/lodges/kenya/lake-nakuru-national-park/loldia-house-1/Governors Loldia House.webp',
          },
        ],
        gettingThere:
          "Lake Nakuru is approximately 160km from Nairobi — about 2.5–3 hours by road via the A104 highway. The nearest town is Nakuru city, Kenya's fourth largest, with good road links. No regular scheduled flights serve Nakuru directly.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              'Sarova Lion Hill Game Lodge — perched on Lion Hill with panoramic views over the lake and savannah.',
              'Lake Nakuru Lodge — lake-view rooms with direct access to the park.',
              'Mbweha Camp (Elementaita) — intimate luxury camp near the neighbouring Lake Elementaita, excellent for a flamingo and conservancy combo.',
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              'Flamingo Hill Tented Camp — comfortable tented stay with good park access.',
              'Kiangazi House — charming, well-run mid-range option.',
              'Sunbird Lodge — reliable comfort with decent views.',
            ],
          },
        ],
        practicalInfo: [
          { label: 'Park Fees', body: 'Approximately USD 60 per day per person for non-residents. Half-day rates may be available.' },
          { label: 'Security Fence', body: 'Nakuru is entirely enclosed by an electric fence, which has successfully eliminated poaching but also means some wildlife movement between parks is restricted.' },
          { label: 'Timing', body: 'Morning and late afternoon game drives offer the best wildlife activity. Midday visits are less rewarding.' },
          { label: 'Combine with Naivasha', body: 'Lake Naivasha is just 60km from Nakuru, making a two-lake Rift Valley circuit easily achievable in a day.' },
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
        metaDescription:
          "Discover Nairobi, Africa's most dynamic safari capital — Nairobi National Park, giraffe centres, world-class restaurants, and Kenya's vibrant culture.",
        image: '/images/lodges/kenya/nairobi/giraffe-manor/a-spot-of-tea-and-a-giraffe.webp',
        location: 'Central Kenya',
        size: 'Metropolitan city at 1,660 m elevation',
        altitude: '1,660 m',
        bestTime: 'Year-round',
        overview:
          "Nairobi is Africa's safari capital — a sprawling, energetic metropolis of over 4 million people that sits at the intersection of the modern African city and the wild natural world. Founded in 1899 as a railway depot for the Uganda Railway, Nairobi grew with extraordinary speed to become the region's dominant commercial hub, and today it hosts the headquarters of more international organisations than any other African city. What makes Nairobi genuinely unique among world capitals is the presence of Nairobi National Park directly on the city's doorstep — a 117 square kilometre wildlife sanctuary where lion, leopard, black rhino, buffalo and giraffe roam against the backdrop of the city's skyscraper skyline. Watching a giraffe walk past with glass towers behind it is one of Africa's most surreal and memorable visual experiences, available within 20 minutes of the city centre. Beyond the national park, Nairobi offers a richness of wildlife and conservation experiences unmatched by any other African capital. The David Sheldrick Wildlife Trust operates the world's most successful elephant orphanage. The AFEW Giraffe Centre allows visitors to hand-feed endangered Rothschild's giraffes at eye level. For safari travellers, Nairobi is the natural hub for Kenya's extraordinary network of national parks and reserves, all accessible within half a day's drive.",
        attractions: [
          {
            title: 'Nairobi National Park Game Drive',
            body:
              "A morning game drive through the world's only capital city wildlife park, with good chances of lion, leopard, rhino, buffalo and giraffe against the city skyline. The juxtaposition of wild animals and glass towers is genuinely unlike anything else in Africa.",
            image: '/images/parks/kenya/masai-mara/activites-game-drive.webp',
          },
          {
            title: 'David Sheldrick Elephant Orphanage',
            body:
              "Attend the daily 11:00am visiting hours to watch orphaned elephant calves being bottle-fed and mud-bathed by their dedicated keepers. The world's most successful elephant orphanage and one of Africa's most moving wildlife encounters.",
            image: '/images/parks/kenya/amboseli/amboseli-elephants.webp',
          },
          {
            title: 'Giraffe Centre',
            body:
              "Hand-feed Rothschild's giraffes from an elevated platform at the AFEW Giraffe Centre — one of Africa's most joyful and photogenic wildlife experiences. The same endangered subspecies featured at Giraffe Manor joins guests for an intimate eye-level encounter.",
            image: '/images/lodges/kenya/nairobi/giraffe-manor/giraffes-popping-in-for-treats.webp',
          },
        ],
        activities: [
          {
            title: 'Stay at Giraffe Manor',
            body:
              "East Africa's most iconic boutique hotel — resident Rothschild's giraffes poke their heads through breakfast windows and join guests for sundowners. Booking typically required 18+ months in advance. The ultimate Nairobi arrival or farewell experience.",
            image: '/images/lodges/kenya/nairobi/giraffe-manor/afternoon-tea-experience.webp',
          },
          {
            title: 'Karen Blixen Museum',
            body:
              "Tour the beautifully preserved farmhouse where Karen Blixen lived and wrote Out of Africa, surrounded by the Ngong Hills she described. An essential cultural visit combining colonial history with the landscape that inspired one of Africa's most celebrated memoirs.",
            image: '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.webp',
          },
          {
            title: 'Stay at The Emakoko',
            body:
              "Safari-edge luxury right on the Nairobi National Park boundary, with a genuine wild atmosphere within minutes of the city centre.",
            image: '/images/lodges/kenya/nairobi/giraffe-manor/giraffes-at-giraffe-manor-1.webp',
          },
        ],
        gettingThere:
          "Nairobi is served by Jomo Kenyatta International Airport (NBO), one of Africa's busiest hubs with direct connections to London, Dubai, Amsterdam, Addis Ababa, Johannesburg, and most major African cities. Wilson Airport serves domestic and safari charter flights. Overland, Nairobi is approximately 8–9 hours from Kampala by road.",
        whereToStay: [
          {
            category: 'Luxury',
            picks: [
              "Fairmont The Norfolk — Nairobi's oldest luxury hotel, colonial-era charm.",
              "Hemingways Nairobi — consistently ranked among the city's top premium hotels.",
              'Giraffe Manor — the iconic breakfast-with-giraffes experience.',
              "JW Marriott Nairobi — one of the city's tallest buildings, state-of-the-art spa.",
              'Villa Rosa Kempinski — regularly featured in current luxury roundups.',
              'Tribe Hotel Gigiri — design-forward, Design Hotels member, near Village Market.',
              'The Emakoko — safari-edge luxury right on the Nairobi National Park boundary.',
              'Radisson Blu Upper Hill — skyline or park views, 20 minutes from Nairobi National Park.',
            ],
          },
          {
            category: 'Mid-Range',
            picks: [
              'Sankara Nairobi — solid upper-mid-range standard.',
              'Nairobi Serena Hotel — reliable comfort, well-regarded.',
              'Ole-Sereni Hotel — park-view rooms, great safari-edge option.',
              'Trademark Hotel — industrial-chic, rooftop bar, skyline views.',
              'Radisson Blu Arboretum — quieter, residential feel, full spa.',
            ],
          },
        ],
        practicalInfo: [
          { label: 'Visa', body: 'Most nationalities require a Kenya e-visa (evisa.go.ke). East African Community passport holders enter visa-free. Apply online before travel.' },
          { label: 'Currency', body: 'Kenyan Shilling (KES). USD is widely accepted, ATMs are plentiful, and mobile money (M-Pesa) is used everywhere.' },
          { label: 'Safety', body: "Use reputable taxis or ride-hailing apps (Bolt, Uber), avoid walking at night, and follow your hotel's security advice." },
          { label: 'Traffic', body: 'Allow extra time for all road transfers. Avoid peak hours 7–9am and 5–8pm.' },
          { label: 'Health', body: 'Malaria prophylaxis recommended. Yellow fever vaccination required if arriving from an endemic country.' },
          { label: 'Internet & SIM', body: 'Excellent 4G coverage throughout. Safaricom is the most reliable network, with SIM cards available at the airport.' },
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
        image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.webp',
      },
      {
        title: 'Anti-Poaching Unit Field Morning',
        location: 'Laikipia Private Conservancy, Central Kenya',
        body: "Join a ranger team for a four-hour morning patrol across private conservancy land. You will track, observe, and learn about the front-line reality of Kenya's wildlife protection — how technology, community informants, and ranger expertise combine to protect rhinos and elephants.",
        image: '/images/lodges/kenya/lakipia/elewana-kifaru-house/1770879317943whiterhino-elewanacar.webp',
      },
      {
        title: 'Private Riverside Fly-Camp on the Ewaso Nyiro',
        location: 'Samburu National Reserve, N Kenya',
        body: 'A private one-night fly-camp on a sandbank beside the Ewaso Nyiro River — available to no more than two guests. Your personal ranger accompanies you from sunset, when elephant and crocodile patrol the opposite bank, through a night of river sounds, to dawn when the birds begin on the water.',
        image: '/images/parks/kenya/samburu/grevys-zebra-1.webp',
      },
    ],
    lodges: [
      {
        name: 'Angama Mara',
        location: 'Mara Triangle, Masai Mara Conservancy',
        body: 'Suspended on the Rift Valley escarpment with the most dramatic Mara views available. Private conservancy access, exceptional guide team.',
        image: '/images/lodges/kenya/masai-mara/angama-mara/a-rocking-chair-safari.webp',
      },
      {
        name: 'Mahali Mzuri',
        location: 'Mara North Conservancy',
        body: "Sir Richard Branson's private camp — 12 tented suites on an exclusive conservancy with zero shared game drives, ever.",
        image: '/images/lodges/kenya/masai-mara/mahali-mzuri/bush-sundowners.webp',
      },
      {
        name: 'Sasaab Lodge',
        location: 'Samburu District',
        body: 'Moroccan-influenced retreat on the Ewaso Nyiro River with private plunge pools overlooking elephant-rich riverine forest.',
        image: '/images/lodges/kenya/sasaab/images/aerial-view-of-sasaab.webp',
      },
      {
        name: 'Segera Retreat',
        location: 'Laikipia Plateau',
        body: "A 50,000-acre conservancy featuring Africa's finest contemporary art collection and community conservation on an extraordinary scale.",
        image: '/images/lodges/kenya/lakipia/segera-retreat-2/17716019637244-segera-crookesandjackson-vl-2025-0688.webp',
      },
      {
        name: 'Giraffe Manor',
        location: 'Nairobi',
        body: "East Africa's most iconic boutique hotel. Resident Rothschild giraffes appear at breakfast — the ultimate arrival or farewell experience.",
        image: '/images/lodges/kenya/nairobi/giraffe-manor/a-spot-of-tea-and-a-giraffe.webp',
      },
      {
        name: 'The Emakoko',
        location: 'Nairobi National Park Edge',
        body: 'City convenience meets genuine wilderness — an ideal gateway or farewell property with direct access to Nairobi National Park.',
        image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.webp',
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
    heroImage: '/images/destinations/tanzania/sayari-serengeti-elephant-walking-safari.webp',
    exploreIntro:
      'From the Great Migration of the Serengeti to the remote river safaris of Nyerere, Tanzania offers the full spectrum of the African wild — curated through private concessions and exclusive camps.',
    parkSummary:
      "Tanzania's national parks range from the world's most famous plains to an island wilderness on Lake Victoria and Africa's largest game reserve in the south. No two experiences are alike — and no other country offers quite this range in a single itinerary.",
    parkSummaryImage: '/images/destinations/tanzania/forest-walk-096.webp',
    parks: [serengetiPark, ngorongoroPark, selousPark, rubondoPark, arushaPark, kilimanjaroPark, lakeManyaraPark, tarangirePark, zanzibarPark],
    privilegedAccess: [
      {
        title: 'Private Migration Crossing with Sayari Camp',
        location: 'Serengeti (Northern Mara River)',
        body: 'A Mara River crossing viewed from a private vehicle with just your guide — no queues, no competing vehicles. Sayari Camp positions guests based on daily herd intelligence from our partner rangers on the ground.',
        image: '/images/destinations/tanzania/sayari-game-drive-with-hyena-viewing1.webp',
      },
      {
        title: 'Wild Dog Tracking with the Research Team',
        location: 'Nyerere National Park',
        body: 'Join a specialist researcher for a morning tracking the wild-dog packs of the Rufiji ecosystem — collared packs, telemetry equipment, and the kind of behavioural insight you cannot get from a standard game drive.',
        image: '/images/activities/game-drive/roho-ya-selous-wild-dogs.webp',
      },
      {
        title: 'Rubondo Island Chimp Habituation Walk',
        location: 'Rubondo Island National Park',
        body: "Access the chimp habituation programme with the island\'s resident researchers — a morning in the forest with the team, learning how a wild community is slowly brought into human company.",
        image: '/images/destinations/tanzania/rubondo-island-camp-chimp.webp',
      },
    ],
    lodges: [
      {
        name: 'Singita Grumeti',
        location: 'Western Serengeti',
        body: 'A private concession of 350,000 acres with four distinct camps. Unmatched migration-season access across the entire Serengeti ecosystem.',
        image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.webp',
      },
      {
        name: 'Nomad Tanzania Lamai',
        location: 'Northern Serengeti',
        body: "Positioned in the migration corridor's most productive crossing section — an intimate camp with exceptional big-cat and crossing sightings.",
        image: '/images/destinations/tanzania/sayari-game-drive-with-hyena-viewing1.webp',
      },
      {
        name: 'Ngorongoro Crater Lodge',
        location: 'Ngorongoro Crater Rim',
        body: 'Three camps perched on the crater rim with butler service, open-fire boudoirs, and the crater floor unfolding 600 metres below your private veranda.',
        image: '/images/destinations/tanzania/dunia-view-from-the-main-area.webp',
      },
      {
        name: 'Jongomero Camp',
        location: 'Ruaha National Park',
        body: 'Eight exclusive tented suites on the Jongomero River — wild dogs, lions, and elephant, with zero other camps in visible range.',
        image: '/images/activities/game-drive/roho-ya-selous-wild-dogs.webp',
      },
      {
        name: 'Roho ya Selous',
        location: 'Nyerere National Park',
        body: "Private sand-bank camp on the Rufiji River with boat safaris, walking safaris, and total seclusion inside Africa's largest game reserve.",
        image: '/images/activities/big-five/roho-ya-selous-elephant.webp',
      },
      {
        name: 'The Manta Resort',
        location: 'Pemba Island, Zanzibar Archipelago',
        body: "Africa's legendary underwater room — a private floating suite anchored above a coral reef with the Indian Ocean as your entire horizon.",
        image: '/images/destinations/tanzania/rubondo-island-camp-beach.webp',
      },
    ],
    seoKeywords:
      'luxury Tanzania safari, Serengeti private camp, Great Migration luxury tour, Ngorongoro crater exclusive access, Ruaha wild dog safari, Zanzibar luxury villa, southern Tanzania safari, bespoke Tanzania travel, Tanzania fly-camp, Arusha safari lodge, Kilimanjaro climbing, Lake Manyara tree-climbing lions, Tarangire elephant safari, Zanzibar beach holiday',
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
        image: '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.webp',
        wildlife: 'Migration Crossings · Predators · All Big Five',
        description:
          "The premier safari season. Clear skies and sparse vegetation make wildlife viewing exceptional across all parks. Mara River crossings peak July–September in the northern Serengeti — one of nature's most intense spectacles.",
      },
      {
        dates: 'Nov – Dec',
        name: 'Short Green Season',
        image: '/images/destinations/tanzania/dunia-game-drive.webp',
        wildlife: 'Migratory Birds · Lush Landscapes · Newborn Calves',
        description:
          'Short rains transform the landscape to emerald. Far fewer guests, lower rates, and the arrival of thousands of migratory birds. The southern Serengeti sees the first calving action begin in December.',
      },
      {
        dates: 'Jan – Feb',
        name: 'The Calving Season',
        image: '/images/destinations/tanzania/sayari-lioness.webp',
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
