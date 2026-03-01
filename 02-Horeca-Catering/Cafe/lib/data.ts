/**
 * Demo Data for De Gouden Boon Café
 * All data is fictional for demonstration purposes
 */

import { MenuItem, BlogPost, BusynessStatus, InventoryItem, UserProfile, Order } from '@/types';

// ============================================
// DEMO CONTACT INFORMATION
// ============================================
export const DEMO_CONTACT = {
  phone: '030-1234567 (DEMO - Voorbeeld)',
  email: 'hello@demo-goudenboon.nl (DEMO)',
  address: 'DEMO Oudegracht 45, 3511 AP Utrecht (Voorbeeldadres)',
  kvk: '12345678 (DEMO nummer)',
  disclaimer: 'DIT IS EEN DEMO WEBSITE - Alle gegevens zijn fictief',
} as const;

// ============================================
// OPENING HOURS
// ============================================
export const OPENING_HOURS = [
  { day: 'Maandag', hours: '08:00 - 18:00' },
  { day: 'Dinsdag', hours: '08:00 - 18:00' },
  { day: 'Woensdag', hours: '08:00 - 18:00' },
  { day: 'Donderdag', hours: '08:00 - 20:00' },
  { day: 'Vrijdag', hours: '08:00 - 20:00' },
  { day: 'Zaterdag', hours: '09:00 - 18:00' },
  { day: 'Zondag', hours: '10:00 - 17:00' },
];

// ============================================
// MENU ITEMS
// ============================================
export const MENU_ITEMS: MenuItem[] = [
  // KOFFIE
  {
    id: 'koffie-1',
    name: 'Espresso',
    description: 'Intense, krachtige koffie met rijke crema. Gebrouwen met onze huisblend bonen.',
    price: 2.50,
    category: 'koffie',
    image: '/images/cafe/coffee/espresso-detail.jpg',
    dietary: ['vegan'],
    popular: true,
    customization: {
      sizes: [
        { label: 'S', priceModifier: 0, ml: 30 },
        { label: 'Dubbel', priceModifier: 1.00, ml: 60 },
      ],
    },
  },
  {
    id: 'koffie-2',
    name: 'Cappuccino',
    description: 'Perfecte balans tussen espresso, gestoomde melk en zijdezacht schuim.',
    price: 3.50,
    category: 'koffie',
    image: '/images/cafe/coffee/pour-latte-art.jpg',
    dietary: ['vegetarian'],
    popular: true,
    customization: {
      sizes: [
        { label: 'S', priceModifier: 0, ml: 180 },
        { label: 'M', priceModifier: 0.50, ml: 240 },
        { label: 'L', priceModifier: 1.00, ml: 350 },
      ],
      milkOptions: [
        { label: 'Volle melk', priceModifier: 0, type: 'cow' },
        { label: 'Havermelk', priceModifier: 0.50, type: 'oat' },
        { label: 'Amandelmelk', priceModifier: 0.50, type: 'almond' },
        { label: 'Sojamelk', priceModifier: 0.50, type: 'soy' },
        { label: 'Kokosmelk', priceModifier: 0.50, type: 'coconut' },
      ],
    },
  },
  {
    id: 'koffie-3',
    name: 'Latte Macchiato',
    description: 'Gelaagde koffie met veel melk en een vleugje espresso. Met prachtige latte art.',
    price: 3.75,
    category: 'koffie',
    image: '/images/cafe/barista/latte-art-pour.jpg',
    dietary: ['vegetarian'],
    customization: {
      sizes: [
        { label: 'M', priceModifier: 0, ml: 240 },
        { label: 'L', priceModifier: 0.50, ml: 350 },
      ],
      milkOptions: [
        { label: 'Volle melk', priceModifier: 0, type: 'cow' },
        { label: 'Havermelk', priceModifier: 0.50, type: 'oat' },
        { label: 'Amandelmelk', priceModifier: 0.50, type: 'almond' },
        { label: 'Sojamelk', priceModifier: 0.50, type: 'soy' },
      ],
    },
  },
  {
    id: 'koffie-4',
    name: 'Americano',
    description: 'Twee shots espresso met heet water. Puur en krachtig van smaak.',
    price: 3.00,
    category: 'koffie',
    image: '/images/cafe/coffee/americano.jpg',
    dietary: ['vegan'],
    customization: {
      sizes: [
        { label: 'S', priceModifier: 0, ml: 240 },
        { label: 'M', priceModifier: 0.50, ml: 350 },
        { label: 'L', priceModifier: 1.00, ml: 470 },
      ],
    },
  },
  {
    id: 'koffie-5',
    name: 'Cold Brew',
    description: '24 uur koud getrokken koffie. Zacht, minder zuur en verfrissend.',
    price: 4.00,
    category: 'koffie',
    image: '/images/cafe/coffee/cold-brew.jpg',
    dietary: ['vegan'],
    popular: true,
    customization: {
      sizes: [
        { label: 'M', priceModifier: 0, ml: 350 },
        { label: 'L', priceModifier: 1.00, ml: 470 },
      ],
      extras: [
        { label: 'Vanille siroop', priceModifier: 0.50 },
        { label: 'Caramel siroop', priceModifier: 0.50 },
      ],
    },
  },
  {
    id: 'koffie-6',
    name: 'Flat White',
    description: 'Australische klassieker: dubbele espresso met microfoam.',
    price: 3.75,
    category: 'koffie',
    image: '/images/cafe/coffee/cappuccino.jpg',
    dietary: ['vegetarian'],
    customization: {
      milkOptions: [
        { label: 'Volle melk', priceModifier: 0, type: 'cow' },
        { label: 'Havermelk', priceModifier: 0.50, type: 'oat' },
      ],
    },
  },
  
  // LUNCH
  {
    id: 'lunch-1',
    name: 'Avocado Toast',
    description: 'Geroosterd zuurdesem met romige avocado, gekruid met chili vlokken en citroen.',
    price: 8.50,
    category: 'lunch',
    image: '/images/cafe/food/avocado-toast.jpg',
    dietary: ['vegan'],
    popular: true,
    customization: {
      extras: [
        { label: 'Gepocheerd ei', priceModifier: 1.50 },
        { label: ' feta', priceModifier: 1.00 },
      ],
    },
  },
  {
    id: 'lunch-2',
    name: 'Club Sandwich',
    description: 'Dubbeldekker met gerookte kip, bacon, ei, tomaat en sla. Geserveerd met chips.',
    price: 9.50,
    category: 'lunch',
    image: '/images/cafe/food/sandwich-club.jpg',
    dietary: [],
  },
  {
    id: 'lunch-3',
    name: 'Croissant Belegd',
    description: 'Versgebakken croissant met kaas, ham en mosterd.',
    price: 6.50,
    category: 'lunch',
    image: '/images/cafe/food/croissant-butter.jpg',
    dietary: ['vegetarian'],
    customization: {
      extras: [
        { label: 'Extra kaas', priceModifier: 0.75 },
        { label: 'Zalm', priceModifier: 2.00 },
      ],
    },
  },
  
  // ZOET
  {
    id: 'zoet-1',
    name: 'Boter Croissant',
    description: 'Elke ochtend versgebakken, boterrijke Franse croissant.',
    price: 2.75,
    category: 'zoet',
    image: '/images/cafe/food/croissant-butter.jpg',
    dietary: ['vegetarian'],
    popular: true,
  },
  {
    id: 'zoet-2',
    name: 'Chocolade Brownie',
    description: 'Huisgemaakte brownie met Belgische chocolade en walnoten.',
    price: 3.50,
    category: 'zoet',
    image: '/images/cafe/food/brownie.jpg',
    dietary: ['vegetarian'],
  },
  {
    id: 'zoet-3',
    name: 'Blueberry Muffin',
    description: 'Luchtige muffin vol met verse bosbessen.',
    price: 3.25,
    category: 'zoet',
    image: '/images/cafe/food/muffin.jpg',
    dietary: ['vegetarian'],
  },
  {
    id: 'zoet-4',
    name: 'Pastry Selectie',
    description: 'Dagelijkse selectie van onze beste gebakjes. Vraag onze barista!',
    price: 4.50,
    category: 'zoet',
    image: '/images/cafe/food/pastry-display.jpg',
    dietary: ['vegetarian'],
  },
  
  // DRANK
  {
    id: 'drank-1',
    name: 'Vers Sinaasappelsap',
    description: 'Elke ochtend versgeperst. 100% puur fruit.',
    price: 4.00,
    category: 'drank',
    image: '/images/cafe/food/muffin.jpg',
    dietary: ['vegan', 'gluten-free'],
  },
  {
    id: 'drank-2',
    name: 'Huisgemaakte Limonade',
    description: 'Verfrissende citroen-munt limonade. Perfect voor zonnige dagen.',
    price: 3.50,
    category: 'drank',
    image: '/images/cafe/food/pastry-display.jpg',
    dietary: ['vegan'],
  },
];

// ============================================
// CATEGORY CONFIGURATION
// ============================================
export const CATEGORIES = [
  { id: 'koffie', label: 'Koffie', icon: 'Coffee' },
  { id: 'lunch', label: 'Lunch', icon: 'Sandwich' },
  { id: 'zoet', label: 'Zoet', icon: 'Croissant' },
  { id: 'drank', label: 'Drank', icon: 'CupSoda' },
] as const;

// ============================================
// BLOG POSTS
// ============================================
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'De Kunst van Latte Art',
    excerpt: 'Ontdek hoe onze barista\'s die prachtige patronen in je koffie maken.',
    content: '...',
    image: '/images/cafe/barista/latte-art-pour.jpg',
    author: 'Lisa de Barista',
    publishDate: '2025-02-15',
    category: 'barista',
    readTimeMinutes: 5,
  },
  {
    id: 'blog-2',
    title: 'Onze Koffiebonen: Van Boer tot Boon',
    excerpt: 'Een reis door Ethiopië, Colombia en Brazilië voor de perfecte blend.',
    content: '...',
    image: '/images/cafe/coffee/beans-roasted.jpg',
    author: 'Marcus de Brandmeester',
    publishDate: '2025-02-10',
    category: 'beans',
    readTimeMinutes: 8,
  },
  {
    id: 'blog-3',
    title: 'Thuis Barista: De Perfecte Pour-Over',
    excerpt: 'Stap-voor-stap guide voor het zetten van specialty coffee thuis.',
    content: '...',
    image: '/images/cafe/barista/making-coffee-action.jpg',
    author: 'Lisa de Barista',
    publishDate: '2025-02-05',
    category: 'brewing',
    readTimeMinutes: 6,
  },
  {
    id: 'blog-4',
    title: 'Seizoensupdate: Lentekoffies',
    excerpt: 'Ontdek onze nieuwe lentedrankjes met florale noten.',
    content: '...',
    image: '/images/cafe/interior/terras-sunny.jpg',
    author: 'Team De Gouden Boon',
    publishDate: '2025-03-01',
    category: 'news',
    readTimeMinutes: 3,
  },
];

// ============================================
// DEMO USER PROFILE
// ============================================
export const DEMO_USER: UserProfile = {
  id: 'user-demo-001',
  name: 'Demo Gebruiker',
  email: 'demo@example.com',
  phone: '06-12345678',
  favoriteItems: ['koffie-2', 'zoet-1'],
  orderHistory: [],
  loyaltyCard: {
    stamps: 7,
    freeDrinksAvailable: 0,
    totalDrinksPurchased: 47,
    lastStampDate: '2025-02-28',
  },
  preferences: {
    defaultMilk: 'havermelk',
    defaultSize: 'M',
    dietaryPreferences: [],
    notificationsEnabled: true,
  },
};

// ============================================
// DEMO ORDERS
// ============================================
export const DEMO_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    items: [],
    type: 'pickup',
    status: 'preparing',
    customerName: 'Anna',
    customerPhone: '06-12345678',
    totalAmount: 12.50,
    createdAt: new Date(Date.now() - 5 * 60000).toISOString(),
    estimatedReadyTime: new Date(Date.now() + 10 * 60000).toISOString(),
  },
  {
    id: 'ORD-002',
    items: [],
    type: 'dine-in',
    status: 'pending',
    tableNumber: '5',
    customerName: 'Table 5',
    customerPhone: '',
    totalAmount: 18.00,
    createdAt: new Date(Date.now() - 2 * 60000).toISOString(),
  },
  {
    id: 'ORD-003',
    items: [],
    type: 'pickup',
    status: 'ready',
    customerName: 'Pieter',
    customerPhone: '06-87654321',
    totalAmount: 8.50,
    createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
  },
];

// ============================================
// INVENTORY ITEMS
// ============================================
export const INVENTORY_ITEMS: InventoryItem[] = [
  { id: 'inv-1', name: 'Arabica Bonen (Huisblend)', category: 'koffie', currentStock: 15, minStock: 10, unit: 'kg', lastRestocked: '2025-02-25' },
  { id: 'inv-2', name: 'Oatly Barista Havermelk', category: 'melk', currentStock: 24, minStock: 12, unit: 'liter', lastRestocked: '2025-02-28' },
  { id: 'inv-3', name: 'Volle Melk', category: 'melk', currentStock: 18, minStock: 15, unit: 'liter', lastRestocked: '2025-02-28' },
  { id: 'inv-4', name: 'Croissants (diepvries)', category: 'gebak', currentStock: 45, minStock: 30, unit: 'stuks', lastRestocked: '2025-02-27' },
  { id: 'inv-5', name: 'Avocado\'s', category: 'vers', currentStock: 12, minStock: 15, unit: 'stuks', lastRestocked: '2025-02-28' },
  { id: 'inv-6', name: 'Koffiebekers (small)', category: 'verpakking', currentStock: 500, minStock: 200, unit: 'stuks', lastRestocked: '2025-02-20' },
];

// ============================================
// BUSYNESS STATUS
// ============================================
export const BUSYNESS_STATUS: BusynessStatus = {
  level: 'busy',
  label: 'Gezellig druk',
  waitTimeMinutes: 15,
  message: 'Op dit moment gezellig druk. Bestel vooruit om te wachten!',
  lastUpdated: new Date().toISOString(),
};
