/**
 * Static Data for Hotel De Gouden Leeuw
 * Demo data for rooms, amenities, reviews, and more
 */

import type { 
  Room, 
  Amenity, 
  Review, 
  BlogPost, 
  SpaTreatment, 
  MenuItem,
  HousekeepingRoom,
  RestaurantReservation,
  Booking,
  Guest
} from '@/types';

// ============================================
// DEMO CONTACT INFO (MARKED AS DEMO)
// ============================================

export const DEMO_CONTACT = {
  phone: '030-1234567 (DEMO - Voorbeeld)',
  email: 'info@demo-hotel.nl (DEMO)',
  address: 'DEMO Domplein 1, 3512 JC Utrecht (Voorbeeldadres)',
  kvk: '87654321 (DEMO nummer)',
} as const;

// ============================================
// ROOMS DATA
// ============================================

export const rooms: Room[] = [
  {
    id: 'room-001',
    slug: 'superior-kamer',
    name: 'Superior Kamer',
    type: 'superior',
    description: 'Een comfortabele kamer met alles wat u nodig heeft voor een heerlijk verblijf. Geniet van het uitzicht op de historische binnenstad van Utrecht.',
    shortDescription: 'Comfortabele kamer met stadszicht',
    pricePerNight: 149,
    originalPrice: 189,
    size: 22,
    maxGuests: 2,
    bedType: 'Kingsize bed (180x200)',
    images: [
      '/images/hotel/rooms/superior-room-1.jpg',
      '/images/hotel/rooms/superior-room-bathroom.jpg',
      '/images/hotel/rooms/room-detail-1.jpg',
    ],
    amenities: [
      { icon: 'wifi', label: 'Gratis WiFi', description: 'High-speed internet' },
      { icon: 'bath', label: 'Luxe badkamer', description: 'Regendouche & toilet' },
      { icon: 'coffee', label: 'Nespresso', description: 'Koffiezetapparaat' },
      { icon: 'tv', label: 'Smart TV', description: '50" 4K Smart TV' },
      { icon: 'wind', label: 'Airco', description: 'Individuele klimaatregeling' },
    ],
    features: ['Stadszicht', 'Geluidsisolatie', 'Zitgedeelte', 'Kluis'],
    isAvailable: true,
    view: 'Stadszicht',
    floor: 2,
  },
  {
    id: 'room-002',
    slug: 'deluxe-suite',
    name: 'Deluxe Suite',
    type: 'deluxe',
    description: 'Ruime suite met apart zitgedeelte en prachtig uitzicht. Perfect voor een romantisch weekend of zakenreis met extra comfort.',
    shortDescription: 'Ruime suite met apart zitgedeelte',
    pricePerNight: 199,
    originalPrice: 249,
    size: 35,
    maxGuests: 2,
    bedType: 'Kingsize bed (180x200)',
    images: [
      '/images/hotel/rooms/deluxe-suite-living.jpg',
      '/images/hotel/rooms/deluxe-suite-view.jpg',
      '/images/hotel/rooms/superior-room-bathroom.jpg',
    ],
    amenities: [
      { icon: 'wifi', label: 'Gratis WiFi', description: 'High-speed internet' },
      { icon: 'bath', label: 'Luxe badkamer', description: 'Bad & regendouche' },
      { icon: 'wine', label: 'Minibar', description: 'Gevulde minibar' },
      { icon: 'tv', label: 'Smart TV', description: '55" 4K Smart TV' },
      { icon: 'wind', label: 'Airco', description: 'Individuele klimaatregeling' },
      { icon: 'sofa', label: 'Zitgedeelte', description: 'Comfortabele sofa' },
    ],
    features: ['Domtoren zicht', 'Apart zitgedeelte', 'Balkon', 'Badjassen'],
    isAvailable: true,
    view: 'Domtoren zicht',
    floor: 3,
  },
  {
    id: 'room-003',
    slug: 'junior-suite',
    name: 'Junior Suite',
    type: 'junior-suite',
    description: 'Onze Junior Suite biedt de perfecte balans tussen luxe en comfort. Met een kingsize bed en luxe badkamer met ligbad.',
    shortDescription: 'Luxe suite met ligbad en stadszicht',
    pricePerNight: 249,
    originalPrice: 299,
    size: 42,
    maxGuests: 3,
    bedType: 'Kingsize bed (180x200)',
    images: [
      '/images/hotel/rooms/junior-suite-bed.jpg',
      '/images/hotel/rooms/room-detail-2.jpg',
      '/images/hotel/rooms/deluxe-suite-view.jpg',
    ],
    amenities: [
      { icon: 'wifi', label: 'Gratis WiFi', description: 'High-speed internet' },
      { icon: 'bath', label: 'Luxe badkamer', description: 'Ligbad & regendouche' },
      { icon: 'wine', label: 'Minibar', description: 'Gevulde minibar' },
      { icon: 'tv', label: 'Smart TV', description: '65" 4K Smart TV' },
      { icon: 'wind', label: 'Airco', description: 'Individuele klimaatregeling' },
      { icon: 'sofa', label: 'Zitgedeelte', description: 'Ruime zithoek' },
      { icon: 'user-plus', label: 'Extra bed', description: 'Mogelijk op aanvraag' },
    ],
    features: ['Panoramisch uitzicht', 'Ligbad', 'Walk-in closet', 'Welkomstdrankje'],
    isAvailable: true,
    view: 'Panoramisch uitzicht',
    floor: 4,
  },
  {
    id: 'room-004',
    slug: 'domtoren-suite',
    name: 'Domtoren Suite',
    type: 'domtoren-suite',
    description: 'Onze kroonjuweel: de penthouse suite met 360° uitzicht over Utrecht en de Domtoren. Voor een verblijf dat u nooit zult vergeten.',
    shortDescription: 'Penthouse met panoramisch uitzicht',
    pricePerNight: 399,
    originalPrice: 499,
    size: 65,
    maxGuests: 4,
    bedType: 'Super kingsize (200x200)',
    images: [
      '/images/hotel/rooms/penthouse-panorama.jpg',
      '/images/hotel/rooms/junior-suite-bed.jpg',
      '/images/hotel/rooms/deluxe-suite-living.jpg',
      '/images/hotel/rooms/room-detail-2.jpg',
    ],
    amenities: [
      { icon: 'wifi', label: 'Gratis WiFi', description: 'High-speed internet' },
      { icon: 'bath', label: 'Luxe badkamer', description: 'Dubbele wastafel & ligbad' },
      { icon: 'wine', label: 'Minibar', description: 'Premium minibar' },
      { icon: 'tv', label: 'Smart TV', description: '75" 4K Smart TV' },
      { icon: 'wind', label: 'Airco', description: 'Individuele klimaatregeling' },
      { icon: 'sofa', label: 'Zitgedeelte', description: 'Ruime woonkamer' },
      { icon: 'utensils', label: 'Dining', description: 'Eethoek voor 4 personen' },
      { icon: 'star', label: 'Butler service', description: '24/7 conciërge' },
    ],
    features: ['360° Panoramisch uitzicht', 'Private terrace', 'Jacuzzi', 'Champagne bij aankomst', 'Late checkout'],
    isAvailable: true,
    view: '360° Panoramisch uitzicht',
    floor: 5,
  },
];

// ============================================
// REVIEWS DATA
// ============================================

export const reviews: Review[] = [
  {
    id: 'review-001',
    author: 'Familie De Jong',
    location: 'Amsterdam',
    rating: 5,
    date: new Date('2025-02-15'),
    text: 'Wat een fantastisch hotel! De kamers zijn prachtig en het personeel is zeer behulpzaam. De locatie is perfect, midden in het centrum van Utrecht. Zeker een aanrader!',
    tripType: 'family',
    verified: true,
  },
  {
    id: 'review-002',
    author: 'Zakenreiziger Ahmed',
    location: 'Rotterdam',
    rating: 5,
    date: new Date('2025-02-10'),
    text: 'Perfect voor zakelijke trips. Snelle WiFi, rustige kamers en uitstekende service. Het ontbijt is heerlijk en de meeting rooms zijn goed uitgerust.',
    tripType: 'business',
    verified: true,
  },
  {
    id: 'review-003',
    author: 'Stel uit Amsterdam',
    location: 'Amsterdam',
    rating: 5,
    date: new Date('2025-02-05'),
    text: 'Romantisch weekend gehad in de Domtoren Suite. Het uitzicht is adembenemend! Het restaurant "De Leeuwenkelder" serveert voortreffelijk eten.',
    tripType: 'couple',
    verified: true,
  },
  {
    id: 'review-004',
    author: 'Maria & Peter',
    location: 'Den Haag',
    rating: 4,
    date: new Date('2025-01-28'),
    text: 'Heerlijk verblijf gehad. De spa is een echte aanrader na een dag winkelen in Utrecht. De locatie kan niet beter!',
    tripType: 'leisure',
    verified: true,
  },
  {
    id: 'review-005',
    author: 'Thomas Bergman',
    location: 'Eindhoven',
    rating: 5,
    date: new Date('2025-01-20'),
    text: 'Geweldig hotel met persoonlijke service. Het personeel kent je naam en doet echt hun best om het verblijf perfect te maken.',
    tripType: 'business',
    verified: true,
  },
  {
    id: 'review-006',
    author: 'Familie Van Dijk',
    location: 'Groningen',
    rating: 5,
    date: new Date('2025-01-15'),
    text: 'Met onze kinderen verbleven in de Junior Suite. Genoeg ruimte en het extra bed was perfect geregeld. De kinderen vonden het geweldig!',
    tripType: 'family',
    verified: true,
  },
];

// ============================================
// SPA TREATMENTS
// ============================================

export const spaTreatments: SpaTreatment[] = [
  {
    id: 'spa-001',
    name: 'Klassieke Massage',
    description: 'Een ontspannende massage die spanning en stress vermindert. Perfect na een dag sightseeing in Utrecht.',
    duration: 60,
    price: 85,
    category: 'massage',
    image: '/images/hotel/spa/massage.jpg',
    benefits: ['Vermindert stress', 'Verbetert bloedsomloop', 'Verlicht spierspanning'],
  },
  {
    id: 'spa-002',
    name: 'Dieptemassage',
    description: 'Intensieve massage voor verlichting van chronische spierspanning en pijn.',
    duration: 90,
    price: 125,
    category: 'massage',
    image: '/images/hotel/spa/treatment-room.jpg',
    benefits: ['Diepe spierontspanning', 'Verwijdert knopen', 'Herstel bevorderend'],
  },
  {
    id: 'spa-003',
    name: 'Hydraterend Gezicht',
    description: 'Een verfrissende gezichtsbehandeling die uw huid hydrateert en laat stralen.',
    duration: 75,
    price: 95,
    category: 'facial',
    image: '/images/hotel/spa/treatment-room.jpg',
    benefits: ['Hydrateert de huid', 'Verjongend effect', 'Diepe reiniging'],
  },
  {
    id: 'spa-004',
    name: 'Wellness Pakket',
    description: 'Compleet wellness pakket inclusief massage, gezichtsbehandeling en toegang tot sauna.',
    duration: 180,
    price: 225,
    category: 'package',
    image: '/images/hotel/spa/relaxation-area.jpg',
    benefits: ['Totale ontspanning', 'Huidverzorging', 'Sauna toegang'],
  },
];

// ============================================
// MENU ITEMS
// ============================================

export const menuItems: MenuItem[] = [
  {
    id: 'menu-001',
    name: 'Hollandse Haring',
    description: 'Traditioneel gerecht met verse haring, uitjes en zuur. Een eerbetoon aan de Nederlandse keuken.',
    price: 18,
    category: 'dinner',
    isVegetarian: false,
    image: '/images/hotel/restaurant/dish-gourmet-1.jpg',
  },
  {
    id: 'menu-002',
    name: 'Gegrilde Zalm',
    description: 'Verse zalm van de markt, gegrild met kruiden uit de regionale tuinen. Geserveerd met seizoensgroenten.',
    price: 28,
    category: 'dinner',
    isVegetarian: false,
    image: '/images/hotel/restaurant/dish-gourmet-2.jpg',
  },
  {
    id: 'menu-003',
    name: 'Risotto Funghi',
    description: 'Romige risotto met paddenstoelen, truffelolie en Parmezaanse kaas.',
    price: 24,
    category: 'dinner',
    isVegetarian: true,
    image: '/images/hotel/restaurant/dish-gourmet-1.jpg',
  },
  {
    id: 'menu-004',
    name: 'Leeuw Ontbijt',
    description: 'Uitgebreid ontbijt met vers gebakken broodjes, eieren, kaas, vleeswaren en vers fruit.',
    price: 22,
    category: 'breakfast',
    isVegetarian: true,
    image: '/images/hotel/restaurant/breakfast-buffet.jpg',
  },
];

// ============================================
// BLOG POSTS
// ============================================

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'beste-terrassen-gracht',
    title: 'De 5 beste terrassen aan de gracht',
    excerpt: 'Ontdek de mooiste plekken om te genieten van een drankje aan het water in Utrecht.',
    content: 'Utrecht staat bekend om zijn prachtige grachten en gezellige terrassen...',
    category: 'city-guide',
    author: 'Sophie van Berg',
    publishedAt: new Date('2025-02-20'),
    readingTime: 5,
    image: '/images/hotel/exterior/terrace-canal.jpg',
    tags: ['terrassen', 'grachten', 'uitgaan', 'zomer'],
  },
  {
    id: 'blog-002',
    slug: 'romantisch-dineren-utrecht',
    title: 'Romantisch dineren in Utrecht',
    excerpt: 'De beste restaurants voor een romantisch diner met uw geliefde.',
    content: 'Utrecht biedt talloze mogelijkheden voor een romantisch diner...',
    category: 'romantic',
    author: 'Mark Jansen',
    publishedAt: new Date('2025-02-14'),
    readingTime: 4,
    image: '/images/hotel/restaurant/dining-room.jpg',
    tags: ['romantisch', 'dineren', 'restaurants', 'date'],
  },
  {
    id: 'blog-003',
    slug: 'zakelijke-meetings-hotel',
    title: 'Zakelijke meetings in het hotel',
    excerpt: 'Waarom ons hotel de perfecte locatie is voor uw volgende zakelijke bijeenkomst.',
    content: 'Met onze moderne meeting rooms en uitstekende faciliteiten...',
    category: 'business',
    author: 'Lisa de Vries',
    publishedAt: new Date('2025-02-01'),
    readingTime: 6,
    image: '/images/hotel/lobby/lobby-seating.jpg',
    tags: ['zakelijk', 'meetings', 'vergaderen', 'faciliteiten'],
  },
];

// ============================================
// HOUSEKEEPING DEMO DATA
// ============================================

export const housekeepingRooms: HousekeepingRoom[] = Array.from({ length: 25 }, (_, i) => {
  const roomNum = 101 + i;
  const floor = Math.floor(roomNum / 100);
  const roomOnFloor = roomNum % 100;
  const statuses: HousekeepingRoom['status'][] = ['clean', 'dirty', 'in-progress', 'inspection'];
  const types: ('superior' | 'deluxe' | 'junior-suite' | 'domtoren-suite')[] = [
    'superior', 'superior', 'superior', 'deluxe', 'deluxe',
    'superior', 'superior', 'superior', 'deluxe', 'deluxe',
    'superior', 'superior', 'deluxe', 'deluxe', 'junior-suite',
    'superior', 'deluxe', 'deluxe', 'junior-suite', 'junior-suite',
    'deluxe', 'junior-suite', 'junior-suite', 'domtoren-suite', 'domtoren-suite'
  ];
  
  return {
    roomNumber: `${floor}${roomOnFloor.toString().padStart(2, '0')}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    roomType: types[i] || 'superior',
    lastCleaned: new Date(Date.now() - Math.random() * 86400000 * 2),
    priority: Math.random() > 0.8,
  };
});

// ============================================
// DEMO BOOKINGS
// ============================================

export const demoBookings: Booking[] = [
  {
    id: 'booking-001',
    confirmationNumber: 'GL-2025-2847',
    guest: {
      id: 'guest-001',
      firstName: 'Jan',
      lastName: 'Jansen',
      email: 'jan.jansen@voorbeeld.nl',
      phone: '06-12345678',
    },
    room: rooms[0],
    checkIn: new Date('2025-03-15'),
    checkOut: new Date('2025-03-17'),
    nights: 2,
    totalPrice: 298,
    status: 'confirmed',
    specialRequests: 'Hoge verdieping als mogelijk',
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date('2025-02-01'),
  },
  {
    id: 'booking-002',
    confirmationNumber: 'GL-2025-2848',
    guest: {
      id: 'guest-002',
      firstName: 'Emma',
      lastName: 'van den Berg',
      email: 'emma.berg@voorbeeld.nl',
      phone: '06-87654321',
    },
    room: rooms[2],
    checkIn: new Date('2025-03-15'),
    checkOut: new Date('2025-03-18'),
    nights: 3,
    totalPrice: 747,
    status: 'confirmed',
    createdAt: new Date('2025-02-10'),
    updatedAt: new Date('2025-02-10'),
  },
];

// ============================================
// DEMO RESTAURANT RESERVATIONS
// ============================================

export const demoRestaurantReservations: RestaurantReservation[] = [
  {
    id: 'res-001',
    guestName: 'De Jong Familie',
    date: new Date('2025-03-01'),
    time: '19:00',
    partySize: 4,
    tableNumber: 'A3',
    specialRequests: 'Kinderstoel nodig',
    status: 'confirmed',
  },
  {
    id: 'res-002',
    guestName: 'Van Dijk & Partner',
    date: new Date('2025-03-01'),
    time: '20:00',
    partySize: 2,
    tableNumber: 'B1',
    specialRequests: 'Romantisch tafeltje',
    status: 'confirmed',
  },
  {
    id: 'res-003',
    guestName: 'Zakenlunch Groep',
    date: new Date('2025-03-02'),
    time: '12:30',
    partySize: 8,
    tableNumber: 'C1',
    specialRequests: 'Projector nodig',
    status: 'pending',
  },
];

// ============================================
// NAVIGATION ITEMS
// ============================================

export const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Kamers', 
    href: '#kamers',
    children: [
      { label: 'Superior Kamer', href: '#kamers' },
      { label: 'Deluxe Suite', href: '#kamers' },
      { label: 'Junior Suite', href: '#kamers' },
      { label: 'Domtoren Suite', href: '#kamers' },
    ]
  },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Spa & Wellness', href: '#spa' },
  { label: 'Locatie', href: '#locatie' },
  { label: 'Blog', href: '/utrecht-tips/' },
  { label: 'Contact', href: '/contact/' },
];

// ============================================
// TRUST BADGES
// ============================================

export const trustBadges = [
  { label: '4.9/5', sublabel: 'op Booking.com', icon: 'star' },
  { label: 'Top 10', sublabel: 'Vrijdag Magazine', icon: 'award' },
  { label: 'Duurzaam', sublabel: '4-sterren', icon: 'leaf' },
];

// ============================================
// JOURNEY STEPS
// ============================================

export const journeySteps = [
  {
    number: '01',
    title: 'Reserveren',
    description: 'Boek eenvoudig online uw verblijf',
    icon: 'calendar',
  },
  {
    number: '02',
    title: 'Welkom',
    description: 'Ontvangst met een glas champagne',
    icon: 'glass-water',
  },
  {
    number: '03',
    title: 'Verblijven',
    description: 'Geniet van luxe en comfort',
    icon: 'bed',
  },
  {
    number: '04',
    title: 'Ontdekken',
    description: 'Verken de mooiste plekken van Utrecht',
    icon: 'map-pin',
  },
  {
    number: '05',
    title: 'Tot ziens',
    description: 'Vertrek met een herinneringscadeau',
    icon: 'gift',
  },
];
