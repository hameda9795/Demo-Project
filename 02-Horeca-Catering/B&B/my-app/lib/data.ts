import { Room, BreakfastItem, GuestbookEntry, LocalExperience, BlogPost, HostTip, Booking } from '@/types'

export const rooms: Room[] = [
  {
    id: '1',
    slug: 'de-zonnebloem',
    name: 'De Zonnebloem',
    tagline: 'Licht, luchtig en vol karakter',
    description: 'Een zonnige kamer met warme gele accenten die doen denken aan een veld vol zonnebloemen. De ochtendzon streelt je wakker terwijl je geniet van het uitzicht op de tuin.',
    character: 'Perfect voor natuurliefhebbers en vroege vogels',
    pricePerNight: 125,
    maxGuests: 2,
    bedType: 'Queensize bed',
    amenities: [
      { icon: 'Droplets', label: 'Regendouche' },
      { icon: 'Coffee', label: 'Nespresso machine' },
      { icon: 'Flower2', label: 'Tuin uitzicht' },
      { icon: 'Wifi', label: 'Gratis WiFi' },
    ],
    personalTouch: 'Deze kamer heeft originele ornamenten uit 1890 die we zorgvuldig hebben gerestaureerd',
    images: ['/images/bnb/rooms/zonnebloem-room.jpg'],
    size: '22 m²',
    view: 'Tuinzijde',
  },
  {
    id: '2',
    slug: 'het-romantisch-hoekje',
    name: 'Het Romantisch Hoekje',
    tagline: 'Intiem en betoverend',
    description: 'Een intieme schuilplaats met een hemelbed, zachte verlichting en romantische details. De perfecte plek voor een jubileum, huwelijksreis of gewoon quality time samen.',
    character: 'Perfect voor romantici en stelletjes',
    pricePerNight: 145,
    maxGuests: 2,
    bedType: 'Hemelbed queensize',
    amenities: [
      { icon: 'Droplets', label: 'Luxe bad' },
      { icon: 'Flame', label: 'Open haard' },
      { icon: 'Wine', label: 'Champagne koeler' },
      { icon: 'Heart', label: 'Romantisch pakket' },
    ],
    personalTouch: 'Deze kamer heeft een origineel schouw uit 1885 - perfect voor koele avonden',
    images: ['/images/bnb/rooms/romantisch-hoekje.jpg'],
    size: '20 m²',
    view: 'Dorpszijde',
  },
  {
    id: '3',
    slug: 'de-tuinkamer',
    name: 'De Tuinkamer',
    tagline: 'Waar binnen en buiten samenkomen',
    description: 'Grote openslaande deuren openen naar onze bloementuin. Wakker worden met het gefluit van vogels en de geur van versgemalen koffie die door de tuin waait.',
    character: 'Ideaal voor natuurliefhebbers en rustzoekers',
    pricePerNight: 135,
    maxGuests: 2,
    bedType: 'Kingsize bed',
    amenities: [
      { icon: 'TreePine', label: 'Directe tuintoegang' },
      { icon: 'Armchair', label: 'Zitje op terras' },
      { icon: 'Coffee', label: 'Koffiebar' },
      { icon: 'Sun', label: 'Zuidelijk terras' },
    ],
    personalTouch: 'Eigen terras met ochtendzon waar we graag je ontbijt serveren op mooie dagen',
    images: ['/images/bnb/rooms/tuinkamer.jpg'],
    size: '25 m²',
    view: 'Tuinzijde met terras',
  },
  {
    id: '4',
    slug: 'de-attic-suite',
    name: 'De Attic Suite',
    tagline: 'Unieke charme onder de dakpannen',
    description: 'Onze meest ruime kamer met authentieke houten balken en een panoramisch uitzicht over het dorp. Een romantische suite met karakter en alle moderne gemakken.',
    character: 'Perfect voor bijzondere gelegenheden',
    pricePerNight: 165,
    maxGuests: 3,
    bedType: 'Kingsize + extra bed',
    amenities: [
      { icon: 'Maximize', label: 'Ruime zithoek' },
      { icon: 'Droplets', label: 'Luxe badkamer' },
      { icon: 'Mountain', label: 'Panoramisch uitzicht' },
      { icon: 'Sparkles', label: 'Jacuzzi' },
    ],
    personalTouch: 'Originele houten balken uit 1890 en een antiek raam met uitzicht op de kerk',
    images: ['/images/bnb/rooms/attic-suite.jpg'],
    size: '35 m²',
    view: 'Panoramisch dorpszicht',
  },
]

export const breakfastItems: BreakfastItem[] = [
  {
    id: '1',
    name: 'Versgebakken Croissants',
    description: 'Elke ochtend vers uit de oven, knapperig van buiten, zacht van binnen',
    image: '/images/bnb/breakfast/croissants-basket.jpg',
    dietary: ['vegetarian'],
    category: 'bread',
  },
  {
    id: '2',
    name: 'Huisgemaakte Jam',
    description: 'Maria\'s specialiteit: aardbei, framboos en pruim uit eigen tuin',
    image: '/images/bnb/breakfast/jam-jars.jpg',
    dietary: ['vegetarian', 'vegan', 'gluten-free', 'lactose-free'],
    category: 'special',
  },
  {
    id: '3',
    name: 'Barista Koffie',
    description: 'Versgemalen bonen, perfect gezet met liefde en aandacht',
    image: '/images/bnb/breakfast/coffee-pour.jpg',
    dietary: ['vegetarian', 'vegan', 'gluten-free', 'lactose-free'],
    category: 'beverage',
  },
  {
    id: '4',
    name: 'Seizoensfruit',
    description: 'Vers fruit van lokale boeren, dagelijks vers gehaald',
    image: '/images/bnb/breakfast/fresh-fruit.jpg',
    dietary: ['vegetarian', 'vegan', 'gluten-free', 'lactose-free'],
    category: 'fruit',
  },
  {
    id: '5',
    name: 'Hollandse Kaas',
    description: 'Selectie van lokale kazen, rijp en vol van smaak',
    image: '/images/bnb/breakfast/cheese-platter.jpg',
    dietary: ['vegetarian', 'gluten-free'],
    category: 'dairy',
  },
  {
    id: '6',
    name: 'Boeren Eieren',
    description: 'Vers van de boerderij om de hoek, bereid naar wens',
    image: '/images/bnb/breakfast/farm-eggs.jpg',
    dietary: ['vegetarian', 'gluten-free', 'lactose-free'],
    category: 'dairy',
  },
  {
    id: '7',
    name: 'Versgeperst Sap',
    description: 'Sinaasappel, wortel-gember of groene detox - elke dag anders',
    image: '/images/bnb/breakfast/fresh-juice.jpg',
    dietary: ['vegetarian', 'vegan', 'gluten-free', 'lactose-free'],
    category: 'beverage',
  },
  {
    id: '8',
    name: 'Ontbijttafel',
    description: 'De volledige ervaring - samengesteld met liefde',
    image: '/images/bnb/breakfast/breakfast-table-setting.jpg',
    dietary: ['vegetarian'],
    category: 'special',
  },
]

export const dietaryBadges = [
  { key: 'vegetarian', label: 'Vegetarisch', color: 'bg-fresh-sage/20 text-fresh-sage' },
  { key: 'vegan', label: 'Vegan', color: 'bg-green-100 text-green-700' },
  { key: 'gluten-free', label: 'Glutenvrij', color: 'bg-amber-100 text-amber-700' },
  { key: 'lactose-free', label: 'Lactosevrij', color: 'bg-blue-100 text-blue-700' },
]

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: '1',
    name: 'Familie Van Dijk',
    date: '2024-12-15',
    rating: 5,
    story: 'We voelden ons meteen thuis! Maria en Jan verwelkomden ons alsof we oude vrienden waren. Het ontbijt was fenomenaal - de zelfgemaakte jam is niet te verslaan. De kamer was schoon, gezellig en het bed sliep als een droom. We komen zeker terug!',
    stayType: 'Gezinsvakantie',
  },
  {
    id: '2',
    name: 'Peter & Linda',
    date: '2024-11-28',
    rating: 5,
    story: 'Onze 25-jarige bruiloft vierden we in Het Romantisch Hoekje. Wat een magische plek! De champagne bij aankomst, de rozen op het bed, en het advies voor het geheime restaurant aan de gracht maakten het compleet. Dank jullie wel!',
    stayType: 'Jubileum',
  },
  {
    id: '3',
    name: 'Sophie',
    date: '2024-10-10',
    rating: 5,
    story: 'Alleen op vakantie voor het eerst in jaren. De Attic Suite was mijn rustpunt. \'s Ochtends yoga in de tuin, daarna het heerlijke ontbijt, en de tips van Jan voor mooie wandelroutes waren goud waard. Een oase van rust.',
    stayType: 'Solo retreat',
  },
  {
    id: '4',
    name: 'De Jong familie',
    date: '2024-09-05',
    rating: 5,
    story: 'Met onze twee kinderen verbleven we in De Tuinkamer. De kinderen vonden het geweldig om de kippen te voeren en eieren te rapen. Het voelde als logeren bij familie. Het ontbijt met versgeperst sap was een feestje elke ochtend!',
    stayType: 'Gezinsvakantie',
  },
]

export const localExperiences: LocalExperience[] = [
  {
    id: '1',
    name: 'Bakkerij Van den Berg',
    category: 'food',
    description: 'De beste bakker van het dorp volgens Maria. Vers brood elke ochtend om 7 uur. Proef hun gevulde koeken!',
    distance: '3 min',
    distanceType: 'walking',
    image: '/images/bnb/garden/flowers-closeup.jpg',
  },
  {
    id: '2',
    name: 'De Geheime Tuin Route',
    category: 'nature',
    description: 'Een pad alleen bekend bij locals, door oude boomgaarden en langs verborgen vijvers. Perfect voor een ochtendwandeling.',
    distance: '15 min',
    distanceType: 'walking',
    image: '/images/bnb/garden/garden-seating.jpg',
    isLocalSecret: true,
  },
  {
    id: '3',
    name: 'Restaurant De Oude Gracht',
    category: 'food',
    description: 'Een geheim restaurant aan de gracht, bekend bij insiders. Geen menukaart - de kok verrast je. Reserveren essentieel!',
    distance: '20 min',
    distanceType: 'cycling',
    image: '/images/bnb/details/window-view.jpg',
    isLocalSecret: true,
  },
  {
    id: '4',
    name: 'Kasteel het Oude Land',
    category: 'culture',
    description: 'Een prachtig 17e-eeuws kasteel met besloten tuinen. Op woensdagmiddag gratis rondleiding door de gids van Jan.',
    distance: '25 min',
    distanceType: 'cycling',
    image: '/images/bnb/garden/entrance-path.jpg',
  },
  {
    id: '5',
    name: 'Fietstocht langs de Vecht',
    category: 'cycling',
    description: 'De mooiste fietstocht van de regio. Langs water, door polders, met stops bij boerderijwinkels. Jan heeft de route voor je klaarliggen.',
    distance: '35 km',
    distanceType: 'cycling',
    image: '/images/bnb/garden/morning-terrace.jpg',
  },
  {
    id: '6',
    name: 'Centrum Utrecht',
    category: 'culture',
    description: 'De Domstad op 20 minuten fietsen. Jan\'s tip: pak de waterfiets voor een unieke grachtentocht!',
    distance: '20 min',
    distanceType: 'cycling',
    image: '/images/bnb/details/window-view.jpg',
  },
]

export const hostTips: HostTip[] = [
  {
    id: '1',
    title: 'Ons favoriete wandelingetje',
    description: 'Begin bij de oude kerk, loop door het laantje met kastanjebomen, en eindig bij het vijvertje waar de reigers zitten. Perfect voor na het ontbijt - duurt ongeveer 20 minuten.',
    category: 'walking',
  },
  {
    id: '2',
    title: 'De beste bakker van het dorp',
    description: 'Bakkerij Van den Berg op de Dorpsstraat 8. Ze openen om 7 uur en de gevulde koeken zijn meestal op voor 9 uur! Vertel maar dat je van Het Kleine Paradijs komt.',
    category: 'food',
  },
  {
    id: '3',
    title: 'Geheim restaurant aan de gracht',
    description: 'Restaurant De Oude Gracht heeft geen website en geen uithangbord. Bel ze op 030-1234567 (vraag naar Piet) en zeg dat Jan je heeft gestuurd. Verwacht culinaire verrassingen!',
    category: 'secret',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'huisgemaakte-aardbeienjam',
    title: 'Ons recept voor huisgemaakte aardbeienjam',
    excerpt: 'Het geheim van Maria\'s beroemde jam die elke gast verrukt. Met liefde en dit recept maak je het zelf thuis.',
    content: `
## Het recept dat generaties lang meegaat

Elke zomer, wanneer de aardbeien op hun zoetst zijn, sta ik met mijn moeders weckpotten in de keuken. Het recept is eenvoudig, maar het geheim zit 'm in de liefde die je erin stopt.

### Ingrediënten
- 1 kg verse aardbeien (liefst uit de streek)
- 750g jam suiker
- Sap van 1 citroen
- Een snufje liefde

### Bereiding
1. Was de aardbeien voorzichtig en verwijder de kroontjes
2. Prak ze grof - je wilt stukjes terugproeven
3. Meng met suiker en citroensap, laat 2 uur staan
4. Kook op middelhoog vuur, constant roerend
5. Na 15 minuten de proef op de som: druppel op een koud bord
6. Wanneer het niet meer uitloopt, is het goed
7. Direct in warme potten vullen en omdraaien

**Mijn tip**: Een vanillestokje meekoken geeft een hemelse geur!
    `,
    category: 'recipes',
    author: 'Maria',
    date: '2024-07-15',
    image: '/images/bnb/breakfast/jam-jars.jpg',
    tags: ['jam', 'aardbeien', 'recept', 'zomer'],
  },
  {
    id: '2',
    slug: 'september-in-utrecht',
    title: '5 redenen waarom september de beste maand is voor Utrecht',
    excerpt: 'De drukte van de zomer is voorbij, de herfstkleuren beginnen. Dit is waarom wij september het liefst hebben.',
    content: `
## September in de Domstad

Als locals weten we het: september is de geheime parel van het jaar. Hier is waarom:

### 1. Perfect weer
Niet te heet, niet te koud. Ideaal voor fietsen langs de grachten zonder de zomerdrukte.

### 2. Cultureel seizoen begint
De theaters en concertzalen openen hun deuren. Er is altijd wel iets te beleven.

### 3. De terrassen zijn nog open
Maar nu met plek! Geniet van een borrel in de nazomerzon zonder te wachten.

### 4. Prachtige lichtinval
Fotografen opgelet: het gouden uur in september is magisch aan de Oudegracht.

### 5. Onze herfstkorting ;)
Oktober is officieel het begin van het laagseizoen, maar wie slim boekt in september profiteert van zomerse dagen met herfstprijzen!
    `,
    category: 'trips',
    author: 'Jan',
    date: '2024-09-01',
    image: '/images/bnb/garden/morning-terrace.jpg',
    tags: ['utrecht', 'september', 'tips', 'nazomer'],
  },
  {
    id: '3',
    slug: 'achter-de-schermen-ontbijt',
    title: 'Achter de schermen: zo bereiden wij het ontbijt voor',
    excerpt: 'Een kijkje in onze keuken om 6 uur \'s ochtends. Van vers brood tot geperst sap - het ontbijtritueel.',
    content: `
## 6 uur 's ochtends in onze keuken

De wekker gaat om 5:30. Terwijl de wereld nog slaapt, beginnen wij aan ons favoriete onderdeel van de dag: het ontbijt voorbereiden.

### 6:00 - De croissants
Onze leverancier komt om 6 uur met versgebakken croissants. We warmen ze nog even kort op voor die perfecte knapperigheid.

### 6:30 - Het sap
Wortels schillen, sinaasappels persen, gember raspen. Vers sap is de basis van een goed ontbijt.

### 7:00 - De tafel
Elke tafel wordt gedekt met verslinnen, handgeknoopte servetten, en bloemen uit de tuin. Geen twee tafels zijn hetzelfde.

### 7:30 - Koffie
De eerste pot koffie staat te pruttelen. Het aroma vult het huis. Dit is het moment waarop we weten: we zijn er klaar voor.

### 8:00 - De eerste gasten
De bel gaat. Tijd om te verwelkomen!
    `,
    category: 'bnb-life',
    author: 'Maria & Jan',
    date: '2024-08-20',
    image: '/images/bnb/hosts/kitchen-preparing.jpg',
    tags: ['ontbijt', 'achter-de-schermen', 'keuken', 'dagelijks'],
  },
  {
    id: '4',
    slug: 'tulpenseizoen',
    title: 'Tulpenseizoen in Nederland: onze gids voor de beste velden',
    excerpt: 'Wanneer de tulpen bloeien, is Nederland op zijn mooist. Deze velden moet je zien - insider tips van locals.',
    content: `
## Tulpen in alle kleuren

Maart tot mei is tulpentijd. Maar waar ga je heen zonder in de toeristenvalkuilen te trappen?

### De Keukenhof (ja, echt!)
Ondanks de drukte: de Keukenhof is de moeite waard. Onze tip: kom om 8 uur opening. Je hebt een uur rust voor de bussen arriveren.

### De Bollenstreek
Fiets de route van Noordwijk naar Haarlem. Eindeloze velden, minder mensen. We hebben kaarten voor je.

### Onze geheime tip
Vraag ons naar de kleine velden achter het dorp. Geen hekken, geen toegangsprijs, gewoon schoonheid.

### Tulpen plukken
Bij Boerderij De Vliet kan je zelf een bosje plukken. Neem ze mee naar huis als souvenir!
    `,
    category: 'seasons',
    author: 'Jan',
    date: '2024-03-10',
    image: '/images/bnb/garden/flowers-closeup.jpg',
    tags: ['tulpen', 'lente', 'bloemen', 'bollenstreek'],
  },
]

// Demo bookings for admin panel
export const demoBookings: Booking[] = [
  {
    id: 'B001',
    guestName: 'Familie Van Dijk',
    roomId: '3',
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    guests: 3,
    status: 'confirmed',
    notes: 'Jubileum - extra bloemen op de kamer',
    dietaryRequirements: ['vegetarian'],
  },
  {
    id: 'B002',
    guestName: 'Peter & Linda Jansen',
    roomId: '2',
    checkIn: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    guests: 2,
    status: 'confirmed',
    notes: 'Late arrival na 20:00',
    dietaryRequirements: ['gluten-free'],
  },
  {
    id: 'B003',
    guestName: 'Sophie Bakker',
    roomId: '4',
    checkIn: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    guests: 1,
    status: 'confirmed',
    notes: 'Solo retreat - extra stilte gewenst',
  },
  {
    id: 'B004',
    guestName: 'De Jong familie',
    roomId: '1',
    checkIn: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    guests: 2,
    status: 'pending',
    notes: 'Kinderen van 5 en 7',
  },
]
