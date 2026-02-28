import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'verbouwing',
    title: 'Verbouwing',
    description: 'Van kleine renovatie tot complete transformatie. Wij behouden het karakter van uw woning terwijl we modern comfort toevoegen.',
    icon: 'hammer',
    features: [
      'Interieur renovatie',
      'Keuken & badkamer',
      'Aanbouw & uitbouw',
      'Monumentale panden',
    ],
    image: '/images/service-verbouwing.jpg',
  },
  {
    id: 'nieuwbouw',
    title: 'Nieuwbouw',
    description: 'Uw droomhuis vanaf de grond opbouwen. Duurzame technieken en hoogwaardige materialen voor een toekomstbestendig resultaat.',
    icon: 'building',
    features: [
      'Vrijstaande woningen',
      'Dakappartementen',
      'Energieneutraal bouwen',
      'Passiefbouw',
    ],
    image: '/images/service-nieuwbouw.jpg',
  },
  {
    id: 'dakdekken',
    title: 'Dakdekken',
    description: 'Specialist in alle type daken. Van traditionele pannen tot moderne groene daken. Gegarandeerde waterdichtheid.',
    icon: 'home',
    features: [
      'Dakrenovatie',
      'Dakisolatie',
      'Dakramen & dakkapellen',
      'Dakgoot & hemelwater',
    ],
    image: '/images/service-dakwerk.jpg',
  },
  {
    id: 'timmerwerk',
    title: 'Timmerwerk',
    description: 'Vakkundig maatwerk in hout. Van kozijnen tot complete interieurs. Ambachtelijke kwaliteit met moderne technieken.',
    icon: 'ruler',
    features: [
      'Kozijnen & deuren',
      'Maatwerk interieurs',
      'Houtrot sanering',
      'Gevelbekleding',
    ],
    image: '/images/service-timmerwerk.jpg',
  },
]
