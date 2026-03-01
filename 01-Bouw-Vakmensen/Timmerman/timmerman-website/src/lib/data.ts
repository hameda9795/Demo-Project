/**
 * Data Constants and Mock Data
 * Van den Berg Timmerwerken Website
 * 
 * ALL DATA IN THIS FILE IS DEMO/FICTITIOUS
 * Contact details, addresses, and business information are examples only.
 */

import { 
  WoodType, 
  Project, 
  JoineryTechnique, 
  ProcessStep, 
  BlogPost,
  ContactInfo,
  ServiceArea,
  FurnitureType,
  WoodStockItem,
  CustomerProject,
  DashboardStats
} from "@/types";

/**
 * DEMO CONTACT INFORMATION
 * All contact details clearly marked as DEMO/Voorbeeld
 */
export const CONTACT_INFO: ContactInfo = {
  phone: "030-1234567 (DEMO - Voorbeeld)",
  email: "info@demo-timmerman.nl (DEMO)",
  address: "DEMO Houtstraat 45, 1234 AB Utrecht (Voorbeeldadres)",
  kvk: "12345678 (DEMO nummer)",
  btw: "NL001234567B01 (Voorbeeld)",
  hours: {
    weekdays: "08:00 - 17:00 (DEMO)",
    saturday: "09:00 - 14:00 (DEMO)",
    sunday: "Gesloten",
  },
};

/**
 * Service Areas - Regions served
 * DEMO locations
 */
export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Utrecht", distance: "0 km" },
  { name: "Amersfoort", distance: "25 km" },
  { name: "Hilversum", distance: "22 km" },
  { name: "Leusden", distance: "28 km" },
  { name: "Zeist", distance: "12 km" },
  { name: "Nieuwegein", distance: "15 km" },
];

/**
 * Wood Types - Available wood species
 * Detailed specifications for the wood selector
 */
export const WOOD_TYPES: WoodType[] = [
  {
    id: "eiken",
    name: "Eiken",
    nameEn: "Oak",
    description: "Klassiek Nederlands hardhout met prachtige tekening. Zeer duurzaam en geschikt voor meubels die generaties meegaan.",
    hardness: 1360,
    hardnessLabel: "4/5",
    color: "Warm lichtbruin tot goudgeel",
    priceLevel: 3,
    image: "/images/timmerman/wood-types/oak-grain.jpg",
    characteristics: [
      "Sterke houtnerf",
      "Duurzaam (25+ jaar)",
      "Goed bewerkbaar",
      "Prachtige patina",
    ],
    sustainability: {
      co2Storage: 750,
      fscCertified: true,
      localSourced: true,
    },
  },
  {
    id: "walnoot",
    name: "Walnoot",
    nameEn: "Walnut",
    description: "Elegant donker hardhout met rijke kleurvariaties. Perfect voor exclusieve meubels en statement pieces.",
    hardness: 1010,
    hardnessLabel: "3/5",
    color: "Diep bruin tot chocolade",
    priceLevel: 5,
    image: "/images/timmerman/wood-types/walnut-grain.jpg",
    characteristics: [
      "Rijke kleurdiepte",
      "Fijne nerf",
      "Natuurlijke olie",
      "Mat glans",
    ],
    sustainability: {
      co2Storage: 680,
      fscCertified: true,
      localSourced: false,
    },
  },
  {
    id: "beuken",
    name: "Beuken",
    nameEn: "Beech",
    description: "Hard en stabiel hout met fijne structuur. Ideaal voor keukens en kindermeubels vanwege de neutraliteit.",
    hardness: 1300,
    hardnessLabel: "4/5",
    color: "Rozig wit tot lichtbruin",
    priceLevel: 2,
    image: "/images/timmerman/wood-types/oak-grain.jpg", // Placeholder
    characteristics: [
      "Zeer stabiel",
      "Gemakkelijk te beitsen",
      "Slijtvast",
      "Hygiënisch",
    ],
    sustainability: {
      co2Storage: 720,
      fscCertified: true,
      localSourced: true,
    },
  },
  {
    id: "grenen",
    name: "Grenen",
    nameEn: "Pine",
    description: "Zacht hout met karakteristieke knoesten. Landelijke uitstraling en budgetvriendelijk voor grotere projecten.",
    hardness: 420,
    hardnessLabel: "2/5",
    color: "Geelwit tot lichtbruin",
    priceLevel: 1,
    image: "/images/timmerman/wood-types/pine-grain.jpg",
    characteristics: [
      "Karakteristieke knoesten",
      "Lichtgewicht",
      "Gemakkelijk te bewerken",
      "Snelle groei",
    ],
    sustainability: {
      co2Storage: 450,
      fscCertified: true,
      localSourced: true,
    },
  },
  {
    id: "bamboe",
    name: "Bamboe",
    nameEn: "Bamboo",
    description: "Duurzame grassoort die harder is dan eiken. Moderne uitstraling en zeer milieuvriendelijk.",
    hardness: 1380,
    hardnessLabel: "5/5",
    color: "Natuurlijk geel tot caramel",
    priceLevel: 3,
    image: "/images/timmerman/wood-types/bamboo-grain.jpg",
    characteristics: [
      "Extreem duurzaam",
      "Snel hernieuwbaar",
      "Unieke structuur",
      "Waterbestendig",
    ],
    sustainability: {
      co2Storage: 890,
      fscCertified: true,
      localSourced: false,
    },
  },
];

/**
 * Projects - Portfolio items
 * DEMO projects showcasing various work
 */
export const PROJECTS: Project[] = [
  {
    id: "eiken-kast-2024",
    title: "Maatwerk Eiken Vitrinekast",
    category: "maatwerk",
    description: "Handgemaakte vitrinekast voor een klant in Zeist. Met geïntegreerde LED-verlichting en glazen schuifdeuren.",
    location: "Zeist",
    year: 2024,
    images: {
      raw: "/images/timmerman/projects/cabinet-oak-raw.jpg",
      finished: "/images/timmerman/projects/cabinet-oak-finished.jpg",
    },
    woodTypes: ["Eiken"],
    duration: "3 weken",
    techniques: ["Zwaluwstaartverbinding", "Mortise-tenon"],
    testimonial: {
      author: "Fam. de Vries",
      text: "Prachtig vakmanschap! De kast is precies zoals we wilden.",
    },
  },
  {
    id: "walnoot-trap-2024",
    title: "Walnoot Traprenovatie",
    category: "renovatie",
    description: "Complete renovatie van een jaren-30 trap met massieve walnoot treden en stootborden.",
    location: "Amersfoort",
    year: 2024,
    images: {
      raw: "/images/timmerman/projects/staircase-walnut.jpg",
      finished: "/images/timmerman/projects/staircase-walnut.jpg",
    },
    woodTypes: ["Walnoot"],
    duration: "2 weken",
    techniques: ["Pen-en-gat", "Lamello"],
  },
  {
    id: "tuinhuis-ceder-2023",
    title: "Ceder Tuinhuis met Overkapping",
    category: "tuinhuis",
    description: "Robuust tuinhuis van duurzaam cederhout met geïntegreerde veranda en opbergruimte.",
    location: "Hilversum",
    year: 2023,
    images: {
      raw: "/images/timmerman/projects/garden-house-cedar.jpg",
      finished: "/images/timmerman/projects/garden-house-cedar.jpg",
    },
    woodTypes: ["Ceder"],
    duration: "4 weken",
    techniques: ["Blind verbinding", "Waterafstotende afwerking"],
  },
  {
    id: "monumentale-deur-2023",
    title: "Restauratie Monumentale Deur",
    category: "restauratie",
    description: "Zorgvuldige restauratie van een originele 19e eeuwse voordeur, inclusief nieuw beslag op maat.",
    location: "Utrecht",
    year: 2023,
    images: {
      raw: "/images/timmerman/projects/restored-door-heritage.jpg",
      finished: "/images/timmerman/projects/restored-door-heritage.jpg",
    },
    woodTypes: ["Eiken"],
    duration: "6 weken",
    techniques: ["Traditionele verbindingen", "Patineren"],
  },
  {
    id: "boomstamtafel-2024",
    title: "Live-Edge Boomstamtafel",
    category: "maatwerk",
    description: "Unieke eettafel van een enkele walnoot plank met natuurlijke boomkant en stalen onderstel.",
    location: "Leusden",
    year: 2024,
    images: {
      raw: "/images/timmerman/projects/custom-table-live-edge.jpg",
      finished: "/images/timmerman/projects/custom-table-live-edge.jpg",
    },
    woodTypes: ["Walnoot"],
    duration: "4 weken",
    techniques: ["Epoxy gieten", "Natuurlijke rand behouden"],
  },
];

/**
 * Joinery Techniques - Educational content
 */
export const JOINERY_TECHNIQUES: JoineryTechnique[] = [
  {
    id: "zwaluwstaart",
    name: "Zwaluwstaart",
    nameEn: "Dovetail",
    description: "Een van de sterkste en mooiste houtverbindingen. De trapeziumvormige 'staarten' haken in elkaar en zorgen voor een verbinding die nooit loslaat.",
    benefits: [
      "Grote treksterkte",
      "Geen lijm of schroeven nodig",
      "Decoratieve uitstraling",
      "Levenslange garantie",
    ],
    vsScrews: "Schroeven werken zich los door houtbeweging. Een zwaluwstaart wordt alleen maar strakker naarmate het hout ouder wordt.",
    svgAnimation: "dovetail-interlock",
  },
  {
    id: "pen-en-gat",
    name: "Pen-en-gat",
    nameEn: "Mortise and Tenon",
    description: "De klassieke pen (tong) past precies in het gat (mortise). Gebruikt voor stoelen, tafels en deuren al eeuwenlang.",
    benefits: [
      "Grote buigsterkte",
      "Verborgen verbinding",
      "Snel te demonteren",
      "Traditioneel ambacht",
    ],
    vsScrews: "Een pen-en-gat verbinding verdeelt kracht over het hele oppervlak. Schroeven concentreren spanning op één punt.",
    svgAnimation: "mortise-rotate",
  },
  {
    id: "fingerjoint",
    name: "Fingerjoint",
    nameEn: "Box Joint",
    description: "Overlappende vingers creëren een groot lijmoppervlak. Perfect voor laden en kisten die zwaar belast worden.",
    benefits: [
      "Maximaal lijmoppervlak",
      "Grote schuifkracht",
      "Moderne uitstraling",
      "Snel te maken",
    ],
    vsScrews: "Een fingerjoint heeft 10x meer lijmoppervlak dan schroeven. Deze verbinding zal nooit scheuren of loslaten.",
    svgAnimation: "fingers-stack",
  },
];

/**
 * Process Steps - Workshop workflow
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Inventarisatie",
    description: "We bezoeken uw locatie, bespreken uw wensen en nemen de juiste maten op.",
    icon: "ruler",
    duration: "1-2 uur",
  },
  {
    id: 2,
    title: "Ontwerp",
    description: "Op basis van ons gesprek maken we een gedetailleerd ontwerp met 3D-visualisatie.",
    icon: "pen-tool",
    duration: "3-5 dagen",
  },
  {
    id: 3,
    title: "Materiaal Selectie",
    description: "Samen kiezen we de perfecte houtsoort en afwerking voor uw project.",
    icon: "tree-pine",
    duration: "1 uur",
  },
  {
    id: 4,
    title: "Vervaardiging",
    description: "In onze werkplaats vervaardigen we uw meubel met traditioneel vakmanschap.",
    icon: "hammer",
    duration: "2-6 weken",
  },
  {
    id: 5,
    title: "Aflevering",
    description: "We plaatsen en monteren het meubel op locatie en zorgen voor perfecte afwerking.",
    icon: "check-circle",
    duration: "2-4 uur",
  },
];

/**
 * Blog Posts - Workshop news
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "eiken-onderhoud",
    title: "Hoe onderhoud ik eiken meubels?",
    excerpt: "Eiken is een duurzame houtsoort, maar juiste verzorging zorgt ervoor dat uw meubel generaties meegaat.",
    content: "Eiken meubels vragen om regelmatige verzorging...",
    category: "onderhoud",
    date: "2024-01-15",
    image: "/images/timmerman/workshop/varnish-application.jpg",
    readTime: 5,
  },
  {
    id: "zwaluwstaart-geschiedenis",
    title: "De geschiedenis van de zwaluwstaartverbinding",
    excerpt: "Een verbinding die al duizenden jaren wordt gebruikt. Waarom is deze techniek zo tijdloos?",
    content: "De zwaluwstaartverbinding werd al gebruikt in het Oude Egypte...",
    category: "restauratie",
    date: "2024-01-10",
    image: "/images/timmerman/workshop/sanding-detail.jpg",
    readTime: 8,
  },
  {
    id: "houtsoorten-vergelijking",
    title: "Houtsoorten vergelijkingstabel 2024",
    excerpt: "Alle houtsoorten vergeleken op hardheid, duurzaamheid en toepassing. Download de complete tabel.",
    content: "Download onze uitgebreide vergelijkingstabel...",
    category: "houtsoorten",
    date: "2024-01-05",
    image: "/images/timmerman/wood-types/oak-grain.jpg",
    readTime: 3,
    download: {
      name: "Houtsoorten-Vergelijkingstabel-2024.pdf",
      url: "/downloads/houtsoorten-vergelijking.pdf",
    },
  },
  {
    id: "duurzaam-bouwen",
    title: "Hout: de meest duurzame bouwstof",
    excerpt: "Waarom hout beter is dan kunststof en staal voor het milieu. De cijfers op een rij.",
    content: "Hout slaat CO2 op tijdens de groei...",
    category: "duurzaamheid",
    date: "2023-12-20",
    image: "/images/timmerman/workshop/tools-wall.jpg",
    readTime: 6,
  },
];

/**
 * Furniture Types - For configurator
 */
export const FURNITURE_TYPES: FurnitureType[] = [
  {
    id: "kast",
    name: "Kast",
    icon: "box",
    description: "Vitrinekast, boekenkast of opbergkast op maat",
    basePrice: 1200,
    options: {
      drawers: { max: 6, pricePerUnit: 150 },
      doors: { max: 4, pricePerUnit: 200 },
      handles: { types: ["Klassiek", "Modern", "Zonder"], prices: [25, 35, 0] },
    },
  },
  {
    id: "tafel",
    name: "Tafel",
    icon: "table",
    description: "Eettafel, salontafel of bureau op maat",
    basePrice: 850,
    options: {
      drawers: { max: 2, pricePerUnit: 120 },
      handles: { types: ["Klassiek", "Modern", "Zonder"], prices: [25, 35, 0] },
    },
  },
  {
    id: "bed",
    name: "Bed",
    icon: "bed",
    description: "Eenpersoons of tweepersoons bed met hoofdeinde",
    basePrice: 950,
    options: {
      handles: { types: ["Zonder"], prices: [0] },
    },
  },
  {
    id: "deur",
    name: "Deur",
    icon: "door",
    description: "Binnendeur, voordeur of schuifdeur op maat",
    basePrice: 650,
    options: {
      handles: { types: ["Klassiek", "Modern"], prices: [85, 120] },
    },
  },
  {
    id: "trap",
    name: "Trap",
    icon: "arrowup",
    description: "Traprenovatie of complete nieuwe trap",
    basePrice: 2500,
    options: {
      handles: { types: ["Zonder"], prices: [0] },
    },
  },
];

/**
 * Wood Stock - Admin panel data
 */
export const WOOD_STOCK: WoodStockItem[] = [
  { id: "1", woodType: "Eiken", quantity: 450, minLevel: 100, supplier: "Houtimport Nederland", lastDelivery: "2024-01-10" },
  { id: "2", woodType: "Walnoot", quantity: 120, minLevel: 50, supplier: "Premium Woods Europe", lastDelivery: "2024-01-05" },
  { id: "3", woodType: "Beuken", quantity: 280, minLevel: 80, supplier: "Houtimport Nederland", lastDelivery: "2024-01-12" },
  { id: "4", woodType: "Grenen", quantity: 600, minLevel: 150, supplier: "Nordic Timber", lastDelivery: "2024-01-08" },
  { id: "5", woodType: "Bamboe", quantity: 85, minLevel: 40, supplier: "Asian Bamboo Co", lastDelivery: "2023-12-28" },
];

/**
 * Dashboard Stats - Admin panel
 */
export const DASHBOARD_STATS: DashboardStats = {
  activeProjects: 12,
  quotesThisMonth: 28,
  woodStock: 1535,
  totalCustomers: 156,
};

/**
 * Customer Projects - For portal
 */
export const CUSTOMER_PROJECTS: CustomerProject[] = [
  {
    id: "PRJ-2024-001",
    customerName: "Fam. de Vries",
    furnitureType: "Vitrinekast",
    woodType: "Eiken",
    status: [
      { id: "1", phase: "ontwerp", status: "completed", date: "2024-01-05" },
      { id: "2", phase: "productie", status: "completed", date: "2024-01-15" },
      { id: "3", phase: "afwerking", status: "current" },
      { id: "4", phase: "oplevering", status: "pending" },
    ],
    currentPhase: "Schuren en lakken",
    estimatedDelivery: "2024-01-25",
    hasCertificate: true,
  },
];

/**
 * Trust Badges - Homepage trust indicators
 */
export const TRUST_BADGES = [
  { icon: "award", text: "20 jaar ervaring" },
  { icon: "leaf", text: "Duurzaam hout" },
  { icon: "home", text: "Eigen werkplaats" },
  { icon: "shield", text: "Garantie op verbindingen" },
];

/**
 * Admin credentials - For demo only
 */
export const ADMIN_CREDENTIALS = {
  username: "demo",
  password: "demo123",
};
