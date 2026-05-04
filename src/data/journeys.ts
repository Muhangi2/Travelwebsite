import type { JourneyDay } from '@/components/collection-detail/SafariJourney'

export type JourneyData = {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  overview: string
  days: JourneyDay[]
}

const ugandaPrimateDays: JourneyDay[] = [
  {
    day: 1,
    title: 'Arrival in the Pearl of Africa',
    body: 'Your adventure begins as you touch down at Entebbe International Airport. After a seamless VIP meet-and-greet, you are whisked away to your sanctuary for the evening.',
    accommodation: 'Hotel No. 5 by Exclusive Wild Camps',
    meals: 'Bed & Breakfast',
    image: '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  },
  {
    day: 2,
    title: 'Journey to Lake Mburo',
    body: 'Drive west through rolling hills and banana plantations to Lake Mburo National Park, home to zebra, eland and impala.',
    accommodation: 'Mihingo Lodge',
    meals: 'Breakfast, Lunch, Dinner',
    image: '/images/parks/uganda/lake-mburo/15651972443-ec37184968-o.jpg',
  },
  {
    day: 3,
    title: 'Boat Safari & Walking Wildlife',
    body: 'Morning game drive followed by a guided boat safari on the lake to spot hippos, crocodiles, and a profusion of birdlife.',
    accommodation: 'Mihingo Lodge',
    meals: 'Full Board',
    image: '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
  },
  {
    day: 4,
    title: 'Bwindi Impenetrable Forest',
    body: "Travel to Bwindi, one of Africa's most ancient rainforests and the home of nearly half the world's mountain gorillas.",
    accommodation: 'Mahogany Springs',
    meals: 'Full Board',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  },
  {
    day: 5,
    title: 'Mountain Gorilla Trek',
    body: 'A life-changing trek into the misty forest to spend an unforgettable hour in the company of a habituated gorilla family.',
    accommodation: 'Mahogany Springs',
    meals: 'Full Board',
    image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
  },
  {
    day: 6,
    title: 'Queen Elizabeth & Tree-Climbing Lions',
    body: 'Cross the equator to Queen Elizabeth National Park, with afternoon game viewing in the famed Ishasha sector.',
    accommodation: 'Ishasha Wilderness Camp',
    meals: 'Full Board',
    image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
  },
  {
    day: 7,
    title: 'Kazinga Channel Boat Safari',
    body: 'Game drive in the Kasenyi plains followed by a boat cruise on the Kazinga Channel — one of the highest concentrations of hippos in Africa.',
    accommodation: 'Mweya Safari Lodge',
    meals: 'Full Board',
    image: '/images/activities/big-five/roho-ya-selous-hippo.jpg',
  },
  {
    day: 8,
    title: 'Kibale Chimpanzee Tracking',
    body: 'Track our closest cousins through the canopy of Kibale Forest in a thrilling primate encounter.',
    accommodation: 'Ndali Lodge',
    meals: 'Full Board',
    image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  },
  {
    day: 9,
    title: 'Departure',
    body: 'Final breakfast at the lodge before a leisurely drive back to Entebbe and your departure flight home.',
    accommodation: '—',
    meals: 'Breakfast',
    image: '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
  },
]

export const journeys: Record<string, JourneyData> = {
  'uganda-exclusive-primate': {
    slug: 'uganda-exclusive-primate',
    title: 'Uganda Exclusive\nPrimate  Journey',
    subtitle:
      "Where ancient forests whisper secrets, lions rest in fig trees, and mountain gorillas meet your soul—an unforgettable awakening in Africa's wildest heart.",
    heroImage: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
    overview:
      "This meticulously curated 9-day safari unveils the soul of Uganda, journeying from the tranquil shores of Lake Victoria to the heart of Africa's most ancient forests. You will track chimpanzees in Kibale's canopy, witness the legendary tree-climbing lions of Ishasha, and come face-to-face with the majestic mountain gorillas in Bwindi. Each day is crafted for profound wildlife encounters, while each night is spent in Uganda's most exclusive and immersive camps, ensuring unparalleled comfort and a deep connection to the wild.",
    days: ugandaPrimateDays,
  },
}
