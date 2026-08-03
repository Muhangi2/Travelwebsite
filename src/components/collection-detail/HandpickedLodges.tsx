import { useState } from 'react'
import Reveal, { Stagger } from '@/components/ui/Reveal'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'
import type { JourneyLodge } from '@/data/journeys'

type LodgeEntry = { name: string; nights?: string; image: string; tier: 'luxury' | 'midRange' }
type LocationGroup = { location: string; lodges: LodgeEntry[] }

function groupsFromLodges(lodges: JourneyLodge[]): LocationGroup[] {
  const locationMap = new Map<string, LodgeEntry[]>()
  for (const lodge of lodges) {
    const location = lodge.location ?? 'Other'
    if (!locationMap.has(location)) locationMap.set(location, [])
    locationMap.get(location)!.push({
      name: lodge.name,
      image: lodge.image,
      tier: lodge.tier ?? 'luxury',
    })
  }
  return Array.from(locationMap.entries()).map(([location, entries]) => ({ location, lodges: entries }))
}

const LODGE_IMAGES: Record<string, string> = {
  'Kigali Serena Hotel':          '/images/lodges/rwanda/kigali/serena-kigali/1000045517.jpg',
  'The Retreat by Heaven':        '/images/lodges/rwanda/kigali/serena-kigali/1000045517.jpg',
  'Hotel des Mille Collines':     '/images/lodges/rwanda/kigali/serena-kigali/1000045518.jpg',
  'Lemigo Hotel':                 '/images/lodges/rwanda/kigali/serena-kigali/1000045518.jpg',
  'Sabyinyo Silverback Lodge':    '/images/lodges/rwanda/volcanoes-national-park/wildernes-bisate-lodge/1753110933515-bisate-gorilla-trekking-06-25-fr-31.jpg',
  'Virunga Lodge':                '/images/parks/rwanda/volcanoes/wilderness-bisate-15.jpg',
  'Five Volcanoes Boutique Hotel':'/images/lodges/rwanda/volcanoes-national-park/singita-kwitonda-lodge/dsc07739.jpg',
  'Mountain Gorilla View Lodge':  '/images/parks/rwanda/volcanoes/wilderness-bisate-1.jpg',
  'Da Vinci Gorilla Lodge':       '/images/parks/rwanda/volcanoes/wilderness-bisate-29.jpg',
  'Gorilla Forest Camp':          '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
  'Gorilla Forest Camp by A&K':   '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
  'Sanctuary Gorilla Forest Camp':'/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
  'Gorilla Forest Lodge by A&K Sanctuary': '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7389.jpg',
  'Clouds Mountain Gorilla Lodge': '/images/lodges/uganda/bwindi/clouds-moutain-gorilla-lodge-by-wildplaces/1761689756443ugandawildplaces-samchurchill-6773.jpg',
  'Mahogany Springs':             '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7419.jpg',
  'Buhoma Lodge':                 '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7518.jpg',
  'Bwindi Lodge':                 '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7863.jpg',
  'Mount Gahinga Lodge':          '/images/activities/gorilla-trekking/35-mount-gahinga-lodge-golden-monkey.jpg',
  'Clouds Mountain Lodge':        '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'Ichumbi Gorilla Lodge':        '/images/activities/gorilla-trekking/33-mount-gahinga-lodge-gorilla.jpg',
  'Primate Lodge':                '/images/activities/gorilla-trekking/6-kibale-lodge-chimpanzee-tadevs-vs-08101.jpg',
  'Ndali Lodge':                  '/images/activities/gorilla-trekking/7-kibale-lodge-chimpanzee-tadevs-vs-08284.jpg',
  'Turaco Treetops':              '/images/activities/gorilla-trekking/22-chimpanzee-kya-7-s-g13.jpg',
  'Chimpundu Lodge':              '/images/activities/gorilla-trekking/20-chimp-ah1i4531.jpg',
  "Baker's Lodge":                '/images/parks/uganda/murchison-falls/mf-1.jpg',
  'Paraa Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-6226.jpg',
  'Murchison River Lodge':        '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
  'Mweya Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-6490.jpg',
  'Kyambura Gorge Lodge':         '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/7-kyambura-gorge-lodge-swimming-pool.jpg',
  'Buffalo Safari Lodge':         '/images/parks/uganda/murchison-falls/dsc-5888.jpg',
  'Ishasha Wilderness Camp':      '/images/parks/uganda/lake-mburo/15651972443-ec37184968-o.jpg',
  'Mihingo Lodge':                '/images/parks/uganda/lake-mburo/52760819772-d845e2062c-o.jpg',
  'Rwakobo Rock':                 '/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg',
  'Arcadia Cottages Lake Bunyonyi':'/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'No.5 Boutique Hotel':          '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.jpg',
  'Protea Hotel Entebbe':         '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.jpg',
  'Serena Kampala Hotel':         '/images/parks/uganda/murchison-falls/dsc-7062.jpg',
  'Kansanga Guest House':         '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
  'Amuka Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-7442.jpg',
  'Jinja Nile Resort':            '/images/parks/uganda/murchison-falls/dsc-6200.jpg',
  'Nile Porch':                   '/images/activities/gorilla-trekking/5-mgl-golden-monkey-bb.jpg',
  "Mountains of the Moon Hotel":  '/images/parks/uganda/murchison-falls/dsc-5888.jpg',
  'Apoka Safari Lodge':           '/images/lodges/uganda/kidepo-national-park/apoka-safari-lodge/apoka7.jpg',
  'Aardvark Safari Lodge':        '/images/parks/uganda/murchison-falls/dsc-5888.jpg',
  'Arcadia Cottages':             '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'Birdnest Resort':              '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'Buhoma Community Lodge':       '/images/activities/gorilla-trekking/26-ah1i3781.jpg',
  'Bwindi Lodge (Volcanoes Safaris)': '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7863.jpg',
  'Chameleon Hill Lodge':         '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'Chobe Safari Lodge':           '/images/parks/uganda/murchison-falls/dsc-6828.jpg',
  'Crater Safari Lodge':          '/images/lodges/uganda/kibale-national-park/crater-safari-lodge/1746563630437_090A2589.jpg',
  'Enjojo Lodge (Luxury Cottages)': '/images/parks/uganda/lake-mburo/15651972443-ec37184968-o.jpg',
  'Enjojo Lodge (Standard)':      '/images/parks/uganda/lake-mburo/15651972443-ec37184968-o.jpg',
  'Fort Murchison Lodge':         '/images/parks/uganda/murchison-falls/dsc-6271.jpg',
  'Four Gorillas Lodge':          '/images/activities/gorilla-trekking/4-mgl-gorilla-bb.jpg',
  'Gorilla Safari Lodge':         '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  'Ishasha Jungle Lodge':         '/images/parks/uganda/lake-mburo/16261416770-9668a9647a-o.jpg',
  'Karibu Guest House':           '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.jpg',
  'Kibale Canopy Lodge':          '/images/lodges/uganda/kibale-national-park/kibale-lodges-by-volcanoes/28-kibale-lodge-landscape.jpg',
  'Kibale Tourist Lodge':         '/images/activities/gorilla-trekking/18-kibale-lodge-chimpanzee-tadevs-vs-08183.jpg',
  'Kigambira Safari Lodge':       '/images/parks/uganda/lake-mburo/16261416770-9668a9647a-o.jpg',
  'Kyaninga Lodge':               '/images/lodges/uganda/kibale-national-park/kyaninga-lodge/Kyanainga.jpg',
  'Lake Albert Safari Lodge':     '/images/parks/uganda/murchison-falls/dsc-7494.jpg',
  'Lake Bunyonyi Rock Resort':    '/images/parks/uganda/lake-bunyonyi/image-20260406160732.jpg',
  'Lake Mulehe Safari Lodge':     '/images/activities/gorilla-trekking/31-mount-gahinga-lodge-gorilla.jpg',
  'Latitude 0° Hotel':            '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  'Mount Gahinga Safari Lodge':   '/images/parks/rwanda/volcanoes/wilderness-bisate.jpg',
  "Traveller's Rest":             '/images/activities/gorilla-trekking/1-mgl-gorilla-bb.jpg',
  'Mpogo Safari Lodge':           '/images/parks/uganda/lake-mburo/16498738142-978e9993ef-o.jpg',
  'Mucha Hotel Kisoro':           '/images/activities/gorilla-trekking/32-mount-gahinga-lodge-gorilla.jpg',
  'Mutanda Lake Resort':          '/images/activities/gorilla-trekking/34-mount-gahinga-lodge-gorilla.jpg',
  'Nile River Camp':              '/images/activities/gorilla-trekking/15-gorilla-ah1i7197.jpg',
  'Nile Safari Lodge':            '/images/parks/uganda/murchison-falls/dsc-6951.jpg',
  'Nkuringo Bwindi Gorilla Lodge':'/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
  'Pakuba Safari Lodge':          '/images/parks/uganda/murchison-falls/dsc-6584.jpg',
  'Queen Elizabeth Bush Lodge':   '/images/parks/uganda/murchison-falls/dsc-7081.jpg',
  'Red Chilli Rest Camp':         '/images/parks/uganda/murchison-falls/dsc-6884.jpg',
  'Rushaga Gorilla Lodge':        '/images/activities/gorilla-trekking/12-mgl-gorilla-bb.jpg',
  'The Boma Entebbe':             '/images/lodges/uganda/entebbe-hotels/karibu-guesthouse/1karibu-guest-house-entebbe-52473407576-o.jpg',
  'Volcanoes Bwindi Lodge':       '/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7863.jpg',
  'Wildwaters Lodge':             '/images/activities/gorilla-trekking/19-chimp-kya-bbp-img-20190218-wa0007.jpg',
  'Ziwa Rhino Sanctuary Camp':    '/images/parks/uganda/murchison-falls/dsc-6271.jpg',
  'Engagi Lodge':                 '/images/activities/gorilla-trekking/8-gorilla-ah1i2661.jpg',
  'Gorilla Heights Lodge':        '/images/activities/gorilla-trekking/9-gorilla3-bfo9.jpg',
  'Hemingways Nairobi':           '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.jpg',
  "Fairmont The Norfolk":         '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.jpg',
  'Villa Rosa Kempinski':         '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.jpg',
  'Ole Sereni':                   '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.jpg',
  'Eka Hotel':                    '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.jpg',
  'Sarova Panafric':              '/images/lodges/kenya/nairobi/hemingways-nairobi/fountain.jpg',
  'Mara Serena Safari Lodge':     '/images/parks/kenya/masai-mara/angama-mara-s-sundowner-boma.jpg',
  "Governors' Camp":              '/images/parks/kenya/masai-mara/the-dangers-of-crossing-the-mara-river.jpg',
  'Kichwa Tembo Tented Camp':     '/images/parks/kenya/masai-mara/cheetahs-in-the-conservancy.jpg',
  'Mara Sopa Lodge':              '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
  'Ashnil Mara Camp':             '/images/parks/kenya/masai-mara/hot-air-balloon-safari.jpg',
  'Sarova Mara Game Camp':        '/images/parks/kenya/masai-mara/activites-game-drive.jpg',
  'Kichwa Tembo':                 '/images/parks/kenya/masai-mara/cheetahs-in-the-conservancy.jpg',
  'Sarova Mara':                  '/images/parks/kenya/masai-mara/activites-game-drive.jpg',
  'Tortilis Camp':                '/images/parks/kenya/amboseli/amboseli-elephants.jpg',
  'Ol Tukai Lodge':               '/images/parks/kenya/amboseli/amboseli-waterhole.jpg',
  'Amboseli Serena Safari Lodge': '/images/parks/kenya/amboseli/view-from-observation-hill.jpg',
  'Amboseli Serena':              '/images/parks/kenya/amboseli/view-from-observation-hill.jpg',
  'Kibo Safari Camp':             '/images/lodges/kenya/amboseli-national-park/ol-donyo-lodge-1/masaai.jpg',
  'Amboseli Sopa Lodge':          '/images/parks/kenya/amboseli/sundowner-on-observation-hill-overlooking-mt-kilimanjaro.jpg',
  'Enashipai Resort & Spa':       '/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.jpg',
  'Lake Naivasha Sopa Resort':    '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
  'Lake Naivasha Country Club':   '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.jpg',
  'Sawela Lodge':                 '/images/activities/walking-safari/1752763546178-kenya-suyian-wild-dog-4.jpg',
  'Elephant Bedroom Camp':        '/images/parks/kenya/samburu/sasaab.jpg',
  'Saruni Samburu':               '/images/parks/kenya/samburu/grevys-zebra.jpg',
  'Ashnil Samburu':               '/images/parks/kenya/samburu/kenya-8346.jpg',
  'Ashnil Samburu Camp':          '/images/parks/kenya/samburu/kenya-8346.jpg',
  'Samburu Sopa Lodge':           '/images/parks/kenya/samburu/samburu-village-visit-residents.jpg',
  'Samburu Simba Lodge':          '/images/parks/kenya/samburu/grevys-zebra-1.jpg',
  'Ol Pejeta Bush Camp':          '/images/lodges/kenya/lakipia/segera-retreat-2/17716019637244-segera-crookesandjackson-vl-2025-0688.jpg',
  'Sweetwaters Serena Camp':      '/images/lodges/kenya/lakipia/lewa-wilderness/fly-camping-star-dome.jpg',
  'Ol Pejeta House':              '/images/lodges/kenya/lakipia/sirikoi-lodge-kenya/1744025471001-2024-cottage-outside-dec-sunset.jpg',
  'Sarova Lion Hill Game Lodge':  '/images/parks/kenya/lake-nakuru/rhinos-lake-nakuru.jpg',
  'Lake Nakuru Lodge':            '/images/parks/kenya/lake-nakuru/flamingos-lake-nakuru.jpg',
  'Flamingo Hill Tented Camp':    '/images/parks/kenya/lake-nakuru/baboon-cliff-view.jpg',
  'Arusha Coffee Lodge':          '/images/destinations/tanzania/kite-in-lodge1.jpg',
  'Legendary Lodge':              '/images/destinations/tanzania/dunia-view-from-the-main-area.jpg',
  'Mount Meru Hotel':             '/images/destinations/tanzania/sayari-elephant.jpg',
  'Arusha Planet Lodge':          '/images/destinations/tanzania/rubondo-island-camp-landscape.jpg',
  'Tarangire Treetops':           '/images/destinations/tanzania/sayari-elephant.jpg',
  'Tarangire Safari Lodge':       '/images/destinations/tanzania/sayari-camp-game-drive-leopard-on-mound2.jpg',
  'Tarangire Simba Lodge':        '/images/destinations/tanzania/dunia-game-drive.jpg',
  'Maramboi Tented Lodge':        '/images/destinations/tanzania/sayari-lioness.jpg',
  'Four Seasons Safari Lodge':    '/images/destinations/tanzania/sayari-lioness.jpg',
  'Serengeti Serena':             '/images/destinations/tanzania/dunia-camp-game-drive-serengeti-safari-2.jpg',
  'Sanctuary Kichakani':          '/images/destinations/tanzania/dunia-view-from-the-main-area.jpg',
  'Serengeti Kati Kati Tented Camp': '/images/destinations/tanzania/dunia-lion-and-plane-in-the-serengeti.jpg',
  'Mbuzi Mawe Serena Camp':       '/images/destinations/tanzania/dunia-seronera-river.jpg',
  'Ngorongoro Serena Safari Lodge': '/images/destinations/tanzania/dunia-view-from-the-main-area.jpg',
  'Ngorongoro Sopa Lodge':        '/images/destinations/tanzania/dunia-camp-game-drive-vehicle-lookout-hr-eliza-deacon1.jpg',
  'Rhino Lodge':                  '/images/destinations/tanzania/dunia-crane.jpg',
  'Ngorongoro Farm House':        '/images/destinations/tanzania/dunia-giraffe.jpg',
  'Baraza Resort & Spa':          '/images/destinations/tanzania/rubondo-island-camp-beach.jpg',
  'The Residence Zanzibar':       '/images/destinations/tanzania/rubondo-island-camp-fish-eagle-eric-frank-mr.jpg',
  'Sunset Kendwa':                '/images/destinations/tanzania/rubondo-island-camp-hippos.jpg',
  'Zanzibar Bay Resort':          '/images/destinations/tanzania/rubondo-island-camp-landscape.jpg',
}

const LODGE_LOCATION: Record<string, string> = {
  'Kigali Serena Hotel':           'Kigali, Rwanda',
  'Hotel des Mille Collines':      'Kigali, Rwanda',
  'The Retreat by Heaven':         'Kigali, Rwanda',
  'Lemigo Hotel':                  'Kigali, Rwanda',
  'Marriott Kigali':               'Kigali, Rwanda',
  'Sabyinyo Silverback Lodge':     'Volcanoes National Park',
  'Virunga Lodge':                 'Volcanoes National Park',
  'Five Volcanoes Boutique Hotel': 'Volcanoes National Park',
  'Mountain Gorilla View Lodge':   'Volcanoes National Park',
  'Da Vinci Gorilla Lodge':        'Volcanoes National Park',
  'Gorilla Forest Camp':           'Bwindi Impenetrable Forest',
  'Gorilla Forest Camp by A&K':    'Bwindi Impenetrable Forest',
  'Sanctuary Gorilla Forest Camp': 'Bwindi Impenetrable Forest',
  'Mahogany Springs':              'Bwindi Impenetrable Forest',
  'Buhoma Lodge':                  'Bwindi Impenetrable Forest',
  'Bwindi Lodge':                  'Bwindi Impenetrable Forest',
  'Gorilla Forest Lodge by A&K Sanctuary': 'Bwindi Impenetrable Forest',
  'Mahogany Springs Lodge':        'Bwindi Impenetrable Forest',
  'Clouds Mountain Gorilla Lodge': 'Bwindi Impenetrable Forest',
  'Clouds Mountain Lodge':         'Bwindi Impenetrable Forest',
  'Ichumbi Gorilla Lodge':         'Bwindi Impenetrable Forest',
  'Mount Gahinga Lodge':           'Mgahinga Gorilla National Park',
  "Baker's Lodge":                 'Murchison Falls National Park',
  'Paraa Safari Lodge':            'Murchison Falls National Park',
  'Murchison River Lodge':         'Murchison Falls National Park',
  'Buffalo Safari Lodge':          'Murchison Falls National Park',
  'Amuka Safari Lodge':            'Murchison Falls National Park',
  'Mweya Safari Lodge':            'Queen Elizabeth National Park',
  'Kyambura Gorge Lodge':          'Queen Elizabeth National Park',
  'Ishasha Wilderness Camp':       'Queen Elizabeth National Park',
  'Mihingo Lodge':                 'Lake Mburo National Park',
  'Rwakobo Rock':                  'Lake Mburo National Park',
  'Primate Lodge':                 'Kibale Forest National Park',
  'Ndali Lodge':                   'Kibale Forest National Park',
  'Turaco Treetops':               'Kibale Forest National Park',
  'Chimpundu Lodge':               'Kibale Forest National Park',
  'Arcadia Cottages Lake Bunyonyi':'Lake Bunyonyi',
  'No.5 Boutique Hotel':           'Entebbe',
  'Protea Hotel Entebbe':          'Entebbe',
  'Serena Kampala Hotel':          'Kampala',
  'Kansanga Guest House':          'Kampala',
  'Jinja Nile Resort':             'Jinja',
  'Nile Porch':                    'Jinja',
  "Mountains of the Moon Hotel":   'Fort Portal',
  'Apoka Safari Lodge':            'Kidepo Valley National Park',
  'Aardvark Safari Lodge':         'Queen Elizabeth National Park',
  'Arcadia Cottages':              'Lake Bunyonyi',
  'Birdnest Resort':               'Lake Bunyonyi',
  'Buhoma Community Lodge':        'Bwindi Impenetrable Forest',
  'Bwindi Lodge (Volcanoes Safaris)': 'Bwindi Impenetrable Forest',
  'Chameleon Hill Lodge':          'Lake Bunyonyi',
  'Chobe Safari Lodge':            'Murchison Falls National Park',
  'Crater Safari Lodge':           'Kibale Forest National Park',
  'Enjojo Lodge (Luxury Cottages)':'Ishasha Sector',
  'Enjojo Lodge (Standard)':       'Ishasha Sector',
  'Fort Murchison Lodge':          'Lake Albert',
  'Four Gorillas Lodge':           'Bwindi Impenetrable Forest',
  'Gorilla Safari Lodge':          'Bwindi Impenetrable Forest',
  'Ishasha Jungle Lodge':          'Ishasha Sector',
  'Karibu Guest House':            'Entebbe',
  'Kibale Canopy Lodge':           'Kibale Forest National Park',
  'Kibale Tourist Lodge':          'Kibale Forest National Park',
  'Kigambira Safari Lodge':        'Lake Mburo National Park',
  'Kyaninga Lodge':                'Fort Portal',
  'Lake Albert Safari Lodge':      'Lake Albert',
  'Lake Bunyonyi Rock Resort':     'Lake Bunyonyi',
  'Lake Mulehe Safari Lodge':      'Lake Mutanda',
  'Latitude 0° Hotel':             'Kampala',
  'Mount Gahinga Safari Lodge':    'Volcanoes National Park',
  "Traveller's Rest":              'Volcanoes National Park',
  'Mpogo Safari Lodge':            'Lake Mburo National Park',
  'Mucha Hotel Kisoro':            'Lake Mutanda',
  'Mutanda Lake Resort':           'Lake Mutanda',
  'Nile River Camp':               'Jinja',
  'Nile Safari Lodge':             'Murchison Falls National Park',
  'Nkuringo Bwindi Gorilla Lodge': 'Bwindi Impenetrable Forest',
  'Pakuba Safari Lodge':           'Murchison Falls National Park',
  'Queen Elizabeth Bush Lodge':    'Queen Elizabeth National Park',
  'Red Chilli Rest Camp':          'Murchison Falls National Park',
  'Rushaga Gorilla Lodge':         'Bwindi Impenetrable Forest',
  'The Boma Entebbe':              'Entebbe',
  'Volcanoes Bwindi Lodge':        'Bwindi Impenetrable Forest',
  'Wildwaters Lodge':              'Jinja',
  'Ziwa Rhino Sanctuary Camp':     'Ziwa Rhino Sanctuary',
  'Engagi Lodge':                  'Bwindi Impenetrable Forest',
  'Gorilla Heights Lodge':         'Bwindi Impenetrable Forest',
  'Hemingways Nairobi':            'Nairobi',
  "Fairmont The Norfolk":          'Nairobi',
  'Villa Rosa Kempinski':          'Nairobi',
  'Ole Sereni':                    'Nairobi',
  'Eka Hotel':                     'Nairobi',
  'Sarova Panafric':               'Nairobi',
  'Mara Serena Safari Lodge':      'Masai Mara',
  "Governors' Camp":               'Masai Mara',
  'Kichwa Tembo Tented Camp':      'Masai Mara',
  'Kichwa Tembo':                  'Masai Mara',
  'Mara Sopa Lodge':               'Masai Mara',
  'Ashnil Mara Camp':              'Masai Mara',
  'Sarova Mara Game Camp':         'Masai Mara',
  'Sarova Mara':                   'Masai Mara',
  'Tortilis Camp':                 'Amboseli',
  'Ol Tukai Lodge':                'Amboseli',
  'Amboseli Serena Safari Lodge':  'Amboseli',
  'Amboseli Serena':               'Amboseli',
  'Kibo Safari Camp':              'Amboseli',
  'Amboseli Sopa Lodge':           'Amboseli',
  'Enashipai Resort & Spa':        'Lake Naivasha',
  'Lake Naivasha Sopa Resort':     'Lake Naivasha',
  'Lake Naivasha Country Club':    'Lake Naivasha',
  'Sawela Lodge':                  'Lake Naivasha',
  'Elephant Bedroom Camp':         'Samburu',
  'Saruni Samburu':                'Samburu',
  'Ashnil Samburu':                'Samburu',
  'Ashnil Samburu Camp':           'Samburu',
  'Samburu Sopa Lodge':            'Samburu',
  'Samburu Simba Lodge':           'Samburu',
  'Ol Pejeta Bush Camp':           'Ol Pejeta Conservancy',
  'Sweetwaters Serena Camp':       'Ol Pejeta Conservancy',
  'Ol Pejeta House':               'Ol Pejeta Conservancy',
  'Sarova Lion Hill Game Lodge':   'Lake Nakuru',
  'Lake Nakuru Lodge':             'Lake Nakuru',
  'Flamingo Hill Tented Camp':     'Lake Nakuru',
  'Arusha Coffee Lodge':           'Arusha',
  'Legendary Lodge':               'Arusha',
  'Mount Meru Hotel':              'Arusha',
  'Arusha Planet Lodge':           'Arusha',
  'Tarangire Treetops':            'Tarangire National Park',
  'Tarangire Safari Lodge':        'Tarangire National Park',
  'Tarangire Simba Lodge':         'Tarangire National Park',
  'Maramboi Tented Lodge':         'Tarangire National Park',
  'Four Seasons Safari Lodge':     'Serengeti National Park',
  'Serengeti Serena':              'Serengeti National Park',
  'Sanctuary Kichakani':           'Serengeti National Park',
  'Serengeti Kati Kati Tented Camp': 'Serengeti National Park',
  'Mbuzi Mawe Serena Camp':        'Serengeti National Park',
  'Ngorongoro Serena Safari Lodge':'Ngorongoro Crater',
  'Ngorongoro Sopa Lodge':         'Ngorongoro Crater',
  'Rhino Lodge':                   'Ngorongoro Crater',
  'Ngorongoro Farm House':         'Ngorongoro Crater',
  'Baraza Resort & Spa':           'Zanzibar',
  'The Residence Zanzibar':        'Zanzibar',
  'Sunset Kendwa':                 'Zanzibar',
  'Zanzibar Bay Resort':           'Zanzibar',
}

const FALLBACK = '/images/activities/gorilla-trekking/3-mgl-gorilla-bb.jpg'

function parseDays(days: JourneyDay[]): LocationGroup[] {
  const locationMap = new Map<string, Map<string, { nights: number; tier: 'luxury' | 'midRange' }>>()

  for (const day of days) {
    const acc = day.accommodation
    if (!acc || acc === '—') continue

    const segments = acc.split('|').map((s) => s.trim())
    for (const seg of segments) {
      let tier: 'luxury' | 'midRange' = 'luxury'
      let namesPart = seg

      if (/^mid-range:/i.test(seg)) {
        tier = 'midRange'
        namesPart = seg.replace(/^mid-range:/i, '').trim()
      } else if (/^luxury:/i.test(seg)) {
        namesPart = seg.replace(/^luxury:/i, '').trim()
      }

      namesPart.split('/').map((n) => n.trim()).filter(Boolean).forEach((name) => {
        const location = LODGE_LOCATION[name] ?? 'Other'
        if (!locationMap.has(location)) locationMap.set(location, new Map())
        const lodgeMap = locationMap.get(location)!
        const existing = lodgeMap.get(name)
        lodgeMap.set(name, { nights: (existing?.nights ?? 0) + 1, tier })
      })
    }
  }

  return Array.from(locationMap.entries()).map(([location, lodgeMap]) => ({
    location,
    lodges: Array.from(lodgeMap.entries()).map(([name, { nights, tier }]) => ({
      name,
      nights: `${nights} ${nights === 1 ? 'NIGHT' : 'NIGHTS'}`,
      image: LODGE_IMAGES[name] ?? FALLBACK,
      tier,
    })),
  }))
}

const STATIC_GROUPS: LocationGroup[] = [
  {
    location: 'Bwindi Impenetrable Forest',
    lodges: [
      { name: 'Gorilla Forest Camp', nights: '2 NIGHTS', image: LODGE_IMAGES['Gorilla Forest Camp'], tier: 'luxury' },
      { name: 'Mahogany Springs',     nights: '1 NIGHT',  image: LODGE_IMAGES['Mahogany Springs'],    tier: 'luxury' },
      { name: 'Buhoma Lodge',         nights: '2 NIGHTS', image: LODGE_IMAGES['Buhoma Lodge'],        tier: 'midRange' },
    ],
  },
  {
    location: 'Murchison Falls National Park',
    lodges: [
      { name: "Baker's Lodge",        nights: '1 NIGHT',  image: LODGE_IMAGES["Baker's Lodge"],       tier: 'luxury' },
    ],
  },
  {
    location: 'Lake Mburo National Park',
    lodges: [
      { name: 'Mihingo Lodge',        nights: '1 NIGHT',  image: LODGE_IMAGES['Mihingo Lodge'],       tier: 'luxury' },
      { name: 'Rwakobo Rock',         nights: '1 NIGHT',  image: LODGE_IMAGES['Rwakobo Rock'],        tier: 'midRange' },
    ],
  },
]

type Props = { days?: JourneyDay[]; lodges?: JourneyLodge[] }

export default function HandpickedLodges({ days, lodges }: Props) {
  const groups = lodges?.length ? groupsFromLodges(lodges) : days ? parseDays(days) : STATIC_GROUPS

  const [activeLocation, setActiveLocation] = useState(groups[0]?.location ?? '')

  if (groups.length === 0) return null

  const activeGroup = groups.find((g) => g.location === activeLocation) ?? groups[0]

  return (
    <section className="section-alt py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <h2>Handpicked Lodges</h2>
            <p className="mt-2 text-xs tracking-wide text-neutral-600">Carefully selected stays along your safari journey</p>
          </div>
        </Reveal>

        {/* Location tabs */}
        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {groups.map((g) => (
                <button
                  key={g.location}
                  type="button"
                  onClick={() => setActiveLocation(g.location)}
                  className={`rounded-xl px-4 sm:px-5 py-2 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] font-bold uppercase transition-all duration-200 ${
                    activeLocation === g.location
                      ? 'bg-black text-white shadow-sm'
                      : 'ring-1 ring-black text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {g.location}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Lodge cards for active location */}
        <Stagger
          key={activeLocation}
          className="cards-scroll-3 mt-10 gap-5"
          staggerMs={80}
        >
          {activeGroup.lodges.map((l) => (
            <article
              key={l.name}
              className="group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Full-bleed image */}
              <img
                src={l.image}
                alt={l.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient overlay stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

              {/* Top badges */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm shadow-sm ${
                  l.tier === 'luxury'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white/90 text-neutral-700'
                }`}>
                  {l.tier === 'luxury' ? 'Luxury' : 'Mid-Range'}
                </span>
                {l.nights && (
                  <span className="rounded-full bg-black/70 px-3 py-1 text-[10px] tracking-[0.18em] text-white backdrop-blur-sm">
                    {l.nights}
                  </span>
                )}
              </div>

              {/* Bottom name + divider */}
              <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                <div className="mb-2.5 h-[1px] w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-14 group-hover:bg-white/70" />
                <p className="font-serif text-[17px] leading-snug text-white">{l.name}</p>
                <p className="mt-1 text-[11px] text-white/60 tracking-wide">{activeLocation}</p>
              </div>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
