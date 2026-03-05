export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  instantBook: boolean;
  host: {
    name: string;
    image: string;
    isSuperhost: boolean;
    responseRate: number;
    responseTime: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Gezellig appartement in hartje Jordaan",
    description: "Dit karakteristieke appartement ligt in het hart van de beroemde Jordaanbuurt. Met originele houten balken, een moderne keuken en een sfeervol balkon met uitzicht op de gracht. Loop zo de gezellige straatjes in vol met cafés, galerijen en boetieks.",
    location: "Jordaan, Amsterdam",
    pricePerNight: 185,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.92,
    reviewCount: 127,
    images: ["/images/amsterdam-canal-house.jpg", "/images/modern-bnb-living.jpg", "/images/breakfast-table.jpg", "/images/living-room-2.jpg"],
    amenities: ["WiFi", "Keuken", "Wasmachine", "Balkon", "TV", "Verwarming", "Haardroger", "Strijkijzer"],
    instantBook: true,
    host: {
      name: "Sophie",
      image: "/images/host-welcome.jpg",
      isSuperhost: true,
      responseRate: 100,
      responseTime: "binnen een uur",
    },
    coordinates: { lat: 52.3676, lng: 4.9041 },
  },
  {
    id: "2",
    title: "Luxueuze woonboot met uitzicht over de Amstel",
    description: "Ervaar Amsterdam vanaf het water in deze stijlvolle woonboot. Grote ramen bieden een panoramisch uitzicht over de Amstel. Compleet ingericht met designmeubels, een luxe badkamer en een privé terras aan het water.",
    location: "Amstel, Amsterdam",
    pricePerNight: 275,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.98,
    reviewCount: 89,
    images: ["/images/houseboat.jpg", "/images/modern-bnb-living.jpg", "/images/breakfast-table.jpg", "/images/living-room-2.jpg"],
    amenities: ["WiFi", "Keuken", "Airconditioning", "Terras", "TV", "Wasmachine", "Vaatwasser", "Koffiezetapparaat"],
    instantBook: true,
    host: {
      name: "Pieter",
      image: "/images/host-welcome.jpg",
      isSuperhost: true,
      responseRate: 98,
      responseTime: "binnen twee uur",
    },
    coordinates: { lat: 52.3500, lng: 4.9100 },
  },
  {
    id: "3",
    title: "Authentiek grachtenpand in monumentaal pand",
    description: "Verblijf in een echt Amsterdams monument aan de Prinsengracht. Deze ruime woning behoudt alle originele details zoals ornamenten, schouwen en hoge plafonds, maar biedt alle moderne gemakken voor een comfortabel verblijf.",
    location: "Prinsengracht, Amsterdam",
    pricePerNight: 320,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.88,
    reviewCount: 156,
    images: ["/images/living-room-2.jpg", "/images/amsterdam-canal-house.jpg", "/images/breakfast-table.jpg", "/images/cottage-exterior.jpg"],
    amenities: ["WiFi", "Keuken", "Wasmachine", "Terras", "TV", "Verwarming", "Gratis parkeren", "Huisdieren toegestaan"],
    instantBook: false,
    host: {
      name: "Anna",
      image: "/images/host-welcome.jpg",
      isSuperhost: true,
      responseRate: 95,
      responseTime: "binnen vier uur",
    },
    coordinates: { lat: 52.3650, lng: 4.8900 },
  },
  {
    id: "4",
    title: "Modern loft in Utrecht Centrum",
    description: "Een smaakvol ingericht loft appartement op loopafstand van de Domtoren. Open lay-out met hoge plafonds, industriële elementen en veel daglicht. Perfect voor stedentrips en zakenreizen.",
    location: "Centrum, Utrecht",
    pricePerNight: 145,
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.85,
    reviewCount: 203,
    images: ["/images/property-gallery-1.jpg", "/images/modern-bnb-living.jpg", "/images/breakfast-table.jpg", "/images/amsterdam-canal-house.jpg"],
    amenities: ["WiFi", "Keuken", "Wasmachine", "Bureau", "TV", "Verwarming", "Lift", "Fietsen beschikbaar"],
    instantBook: true,
    host: {
      name: "Thomas",
      image: "/images/host-welcome.jpg",
      isSuperhost: false,
      responseRate: 90,
      responseTime: "binnen een dag",
    },
    coordinates: { lat: 52.0907, lng: 5.1214 },
  },
  {
    id: "5",
    title: "Romantisch boshuisje in Veluwe",
    description: "Ontsnap naar de natuur in dit knusse boshuisje op de Veluwe. Omgeven door bos en heide, ideaal voor wandelaars en rustzoekers. Inclusief houtkachel, grote tuin en gratis toegang tot het Nationaal Park.",
    location: "Hoenderloo, Gelderland",
    pricePerNight: 125,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.96,
    reviewCount: 78,
    images: ["/images/cottage-exterior.jpg", "/images/breakfast-table.jpg", "/images/modern-bnb-living.jpg", "/images/property-gallery-1.jpg"],
    amenities: ["WiFi", "Keuken", "Houtkachel", "Tuin", "BBQ", "Gratis parkeren", "Natuurgebied", "Huisdieren toegestaan"],
    instantBook: true,
    host: {
      name: "Marleen",
      image: "/images/host-welcome.jpg",
      isSuperhost: true,
      responseRate: 100,
      responseTime: "binnen een uur",
    },
    coordinates: { lat: 52.1180, lng: 5.8800 },
  },
  {
    id: "6",
    title: "Strandhuis aan de Zeeuwse kust",
    description: "Wakker worden met het geluid van golven in dit sfeervolle strandhuis. Direct aan het strand van Dishoek met een eigen duinovergang. Compleet gerenoveerd met luxe keuken en badkamer.",
    location: "Dishoek, Zeeland",
    pricePerNight: 195,
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.91,
    reviewCount: 134,
    images: ["/images/cottage-exterior.jpg", "/images/amsterdam-canal-house.jpg", "/images/breakfast-table.jpg", "/images/living-room-2.jpg"],
    amenities: ["WiFi", "Keuken", "Wasmachine", "Terras", "Tuin", "Strandtoegang", "Fietsen", "Parkeerplaats"],
    instantBook: false,
    host: {
      name: "Jeroen",
      image: "/images/host-welcome.jpg",
      isSuperhost: true,
      responseRate: 96,
      responseTime: "binnen drie uur",
    },
    coordinates: { lat: 51.4667, lng: 3.5500 },
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Verborgen pareltjes in de Jordaan",
    excerpt: "Ontdek de leukste plekken in de beroemdste buurt van Amsterdam, van geheime hofjes tot de beste koffietentjes.",
    image: "/images/amsterdam-canal-house.jpg",
    category: "Amsterdam Tips",
    date: "2024-03-01",
    readTime: 5,
  },
  {
    id: "2",
    title: "Interieur inspiratie voor je B&B",
    excerpt: "Hoe creëer je een unieke sfeer die gasten naar meer doet verlangen? Tips van onze beste hosts.",
    image: "/images/modern-bnb-living.jpg",
    category: "Interior Design",
    date: "2024-02-28",
    readTime: 8,
  },
  {
    id: "3",
    title: "De perfecte welkomstmand samenstellen",
    excerpt: "Welke lokale producten maken de meeste indruk op je gasten? Een complete gids voor hosts.",
    image: "/images/breakfast-table.jpg",
    category: "Hosting Tips",
    date: "2024-02-25",
    readTime: 6,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Familie De Vries",
    location: "Eigenaars in Utrecht",
    avatar: "/images/host-welcome.jpg",
    rating: 5,
    text: "Sinds we samenwerken met VakantieHuizen Pro is onze bezettingsgraad verdubbeld. Het team is professioneel, gastvrij en denkt echt met ons mee.",
    revenue: "+125%",
  },
  {
    id: "2",
    name: "Peter & Maria",
    location: "Eigenaars in Amsterdam",
    avatar: "/images/host-welcome.jpg",
    rating: 5,
    text: "We wilden onze woonboot verhuren maar hadden geen tijd voor het beheer. Nu verdienen we een mooi extra inkomen zonder enige zorgen.",
    revenue: "+€2.400",
    per: "/maand",
  },
  {
    id: "3",
    name: "Lisa Jansen",
    location: "Eigenaar in Veluwe",
    avatar: "/images/host-welcome.jpg",
    rating: 5,
    text: "De professionele fotografie en het persoonlijke contact met gasten maakt echt het verschil. Onze recensies zijn nog nooit zo goed geweest!",
    revenue: "4.9",
    per: "gem. rating",
  },
];

export const faqs = [
  {
    question: "Hoe werkt het verhuren via VakantieHuizen Pro?",
    answer: "Wij nemen het complete beheer van uw woning over. Dit omvat professionele fotografie, prijsoptimalisatie, gastencommunicatie, schoonmaakcoördinatie en onderhoud. U ontvangt elke maand een uitbetaling zonder zorgen.",
  },
  {
    question: "Wat kost het beheer van mijn woning?",
    answer: "Onze commissie is 15-20% afhankelijk van het pakket dat u kiest. Dit is all-in: inclusief fotografie, marketing, schoonmaakcoördinatie, lakens, gastencommunicatie en technische support. Er zijn geen verborgen kosten.",
  },
  {
    question: "Kan ik zelf nog gebruik maken van mijn woning?",
    answer: "Absoluut! Via uw persoonlijke eigenaarsdashboard kunt u eenvoudig data blokkeren voor eigen gebruik. Wij zorgen dat deze data nooit wordt verhuurd.",
  },
  {
    question: "Hoe snel kan ik starten met verhuren?",
    answer: "Na een kennismakingsgesprek kunnen we binnen 1-2 weken live gaan. Dit hangt af van de huidige staat van uw woning en het moment waarop de professionele fotoshoot kan plaatsvinden.",
  },
  {
    question: "Wat als er iets kapot gaat in mijn woning?",
    answer: "Wij hebben een netwerk van betrouwbare reparateurs die snel kunnen schakelen. Kleine reparaties (tot €250) voeren wij direct uit zonder overleg, grotere schades bespreken we altijd eerst met u. Alle schades worden gedekt door onze verzekering.",
  },
  {
    question: "Hoe worden de prijzen bepaald?",
    answer: "Onze pricing engine analyseert dagelijks honderden data-punten: seizoen, evenementen, vraag in de buurt, en concurrentie. Zo optimaliseren we uw inkomsten terwijl we de bezettingsgraad hoog houden.",
  },
];

export const amenitiesList = [
  { id: "wifi", label: "WiFi", icon: "Wifi" },
  { id: "kitchen", label: "Keuken", icon: "UtensilsCrossed" },
  { id: "washer", label: "Wasmachine", icon: "WashingMachine" },
  { id: "ac", label: "Airconditioning", icon: "Wind" },
  { id: "heating", label: "Verwarming", icon: "Flame" },
  { id: "tv", label: "TV", icon: "Tv" },
  { id: "parking", label: "Gratis parkeren", icon: "Car" },
  { id: "balcony", label: "Balkon/Terras", icon: "Trees" },
  { id: "fireplace", label: "Haard/Open haard", icon: "Flame" },
  { id: "pool", label: "Zwembad", icon: "Waves" },
  { id: "gym", label: "Fitnessruimte", icon: "Dumbbell" },
  { id: "pets", label: "Huisdieren toegestaan", icon: "PawPrint" },
  { id: "workspace", label: "Werkplek", icon: "Laptop" },
  { id: "beach", label: "Strandtoegang", icon: "Umbrella" },
];
