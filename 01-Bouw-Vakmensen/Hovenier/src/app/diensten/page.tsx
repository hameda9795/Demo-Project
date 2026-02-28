import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Pencil, Hammer, Scissors, TreePine, Waves,
  Check, ArrowRight, Leaf 
} from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";

export const metadata: Metadata = {
  title: "Diensten | Tuinontwerp, Aanleg & Onderhoud - Groen & Tuin Architectuur",
  description: "Professionele diensten voor tuinontwerp, tuinaanleg, onderhoud, boomverzorging en vijveraanleg in Amsterdam en Haarlem.",
};

const services = [
  {
    id: 'ontwerp',
    title: 'Tuinontwerp',
    subtitle: 'Van idee tot plan',
    description: `Een goed tuinontwerp vormt de basis van elke succesvolle tuin. Wij luisteren naar uw wensen, 
      analyseren de locatie en creëren een uniek ontwerp dat perfect aansluit bij uw huis, stijl en budget.`,
    icon: Pencil,
    features: [
      'Persoonlijk intakegesprek op locatie',
      'Schetsontwerp in 2D',
      'Detaillerd 3D-visualisatie',
      'Complete plantenlijst met benamingen',
      'Verlichtingsplan voor sfeer in de avond',
      'Materiaaladvies voor bestrating',
    ],
    price: 'Vanaf €850',
    image: '/images/hovenier/hero/modern-garden.jpg',
  },
  {
    id: 'aanleg',
    title: 'Tuinaanleg',
    subtitle: 'Vakkundige realisatie',
    description: `Onze ervaren hoveniers zetten het ontwerp met precisie en vakmanschap om in werkelijkheid. 
      We gebruiken hoogwaardige materialen en gezonde planten van vertrouwde kwekerijen.`,
    icon: Hammer,
    features: [
      'Professioneel grondwerk en drainage',
      'Strakke bestrating en terrassen',
      'Aanplanten van bomen, heesters en vaste planten',
      'Gazon aanleg: zaaien of sods',
      'Aanleggen van borders en raised beds',
      'Oplevering met onderhoudsinstructies',
    ],
    price: 'Vanaf €2.500',
    image: '/images/hovenier/projects/villa-lawn.jpg',
  },
  {
    id: 'onderhoud',
    title: 'Tuinonderhoud',
    subtitle: 'Jaarrond zorg',
    description: `Een mooie tuin vraagt om regelmatig onderhoud. Wij bieden flexibele onderhoudscontracten 
      zodat u optimaal kunt genieten van uw buitenruimte zonder zorgen.`,
    icon: Scissors,
    features: [
      'Periodiek snoeien van heesters en bomen',
      'Gazon maaien, verticuteren en bemesten',
      'Onkruidbestrijding op natuurlijke wijze',
      'Seizoensgebonden beplanting vervangen',
      'Bladruiming in de herfst',
      'Voorjaars- en najaarsgrote beurt',
    ],
    price: 'Vanaf €125/maand',
    image: '/images/hovenier/projects/maintenance-1.jpg',
  },
  {
    id: 'bomen',
    title: 'Boomverzorging',
    subtitle: 'Gecertificeerde specialisten',
    description: `Bomen zijn waardevolle elementen in de tuin die specialistische zorg verdienen. 
      Onze gecertificeerde boomverzorgers werken veilig en met respect voor de boom.`,
    icon: TreePine,
    features: [
      'Kroonreiniging en dode takken verwijderen',
      'Vorm- en groeisnoei',
      'Kabel- en stutwerk voor zwakke takken',
      'Veilig vellen van zieke of gevaarlijke bomen',
      'Stormschade herstel (spoed 24/7)',
      'Boomveiligheidsinspecties',
    ],
    price: 'Op aanvraag',
    image: '/images/hovenier/projects/tree-care.jpg',
  },
  {
    id: 'vijver',
    title: 'Vijveraanleg',
    subtitle: 'Water in de tuin',
    description: `Een vijver brengt leven en rust in de tuin. Van natuurlijke vijvers tot strakke waterpartijen, 
      wij ontwerpen en realiseren het perfecte water element voor uw tuin.`,
    icon: Waves,
    features: [
      'Natuurlijke zwemvijvers zonder chemicaliën',
      'Moderne koivijvers met filtersysteem',
      'Waterlopen en watervallen',
      'Fonteinen en waterornamenten',
      'Vijverrenovatie en onderhoud',
      'Winterklaar maken van vijvers',
    ],
    price: 'Vanaf €3.500',
    image: '/images/hovenier/projects/pond-garden.jpg',
  },
];

export default function DienstenPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Hero */}
      <section className="relative py-24 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hovenier/hero/garden-sunset.jpg"
            alt="Tuin achtergrond"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DemoBadge variant="inline" />
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-4 mb-6">
            Onze Diensten
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Van ontwerp tot onderhoud: wij verzorgen elke stap van uw tuinproject 
            met passie en vakmanschap.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Image */}
                    <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-nature-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 
                        bg-green-600 rounded-3xl flex items-center justify-center shadow-xl">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                      <h2 className="font-serif text-4xl text-forest-900 mt-2 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-forest-600 text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-forest-700">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="px-4 py-2 bg-forest-100 text-forest-800 rounded-full font-medium">
                          {service.price}
                        </span>
                        <Link
                          href="/contact/"
                          className="inline-flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all">
                          Vraag offerte aan
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-12 h-12 text-green-400 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Klaar om uw tuin te transformeren?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Neem contact met ons op voor een vrijblijvend adviesgesprek. 
            We bespreken uw wensen en maken graag een passende offerte.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 
              bg-green-600 text-white rounded-full font-medium text-lg
              hover:bg-green-500 transition-colors">
            <Leaf className="w-5 h-5" />
            Offerte Aanvragen
          </Link>
        </div>
      </section>
    </div>
  );
}
