export type Article = {
  slug: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  tags: string[]
}

export const articles: Article[] = [
  {
    slug: 'beyond-gorillas-rwanda-big-five',
    title: "Beyond the Gorillas: Discovering Rwanda's Big Five and Hidden Gems",
    excerpt:
      'When most travelers think of a Rwanda safari, the iconic image of a silverback gorilla in the misty mountains of Volcanoes National Park immediately comes to mind…',
    image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1600&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Gorillas', 'Rwanda'],
  },
  {
    slug: 'rwanda-safari-planning-101',
    title: 'Rwanda Safari Planning 101: Permits, Packing, and Pro-Tips for 2026',
    excerpt: 'Planning a safari to Rwanda is an exciting endeavor, but the logistics, particularly around securing…',
    image: 'https://images.unsplash.com/photo-1604569370408-cea5e9d99cf6?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Gorillas', 'Rwanda', 'Safari Tips'],
  },
  {
    slug: 'rwanda-future-eco-tourism',
    title: 'Why Rwanda is the Future of High-End Eco-Tourism',
    excerpt: 'Uganda is a photographer’s dream. From the misty, intimate moments with mountain gorillas in Bwindi…',
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Destinations'],
  },
  {
    slug: 'safari-photography-uganda',
    title: "A Beginner's Guide to Safari Photography in Uganda",
    excerpt: "Uganda is a photographer's dream. From the misty, intimate moments…",
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Photography', 'Guide Tips'],
  },
  {
    slug: 'visit-saves-uganda-mountain-gorillas',
    title: "How Your Visit Saves Uganda's Mountain Gorillas",
    excerpt: "The mountain gorilla is one of the world's most endangered species…",
    image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Gorillas', 'Uganda'],
  },
  {
    slug: 'solo-female-travel-uganda',
    title: 'The Ultimate Guide to Solo Female Travel in Uganda: Safety, Tips, and Empowerment',
    excerpt: 'The Ultimate Guide to Solo Female Travel in Uganda…',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Gorillas', 'Uganda'],
  },
  {
    slug: 'kidepo-valley-authentic-wilderness',
    title: "Why Kidepo Valley is Africa's Most Authentic Wilderness",
    excerpt: 'Excerpt:When travelers think of a Uganda safari, the first image that comes to mind…',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2024',
    tags: ['Kidepo', 'Uganda', 'Destinations'],
  },
  {
    slug: 'sustainable-luxury-rwanda',
    title: 'Sustainable Luxury: Why Rwanda is the Future of High-End Eco-Tourism',
    excerpt: "Beyond the Gorillas: Discovering Rwanda's Big Five…",
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Gorilla', 'Uganda'],
  },
  {
    slug: 'rwanda-permits-packing-2026',
    title: 'Rwanda Safari Planning 101: Permits, Packing, and Pro-Tips for 2026',
    excerpt: 'Planning a safari to Rwanda is an exciting endeavor…',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tags: ['Gorilla', 'Uganda'],
  },
]

export const categories = ['All', 'Gorillas', 'Destinations', 'Safari Tips', 'Culture', 'Conservation']
