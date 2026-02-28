import { Metadata } from "next";
import Image from "next/image";
import { Leaf, Award, Users, TreePine, Check } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";

export const metadata: Metadata = {
  title: "Over Ons | Groen & Tuin Architectuur - Amsterdam & Haarlem",
  description: "Leer meer over Groen & Tuin Architectuur. Uw specialist in tuinontwerp, aanleg en onderhoud in de Amsterdam/Haarlem regio.",
};

const values = [
  {
    icon: Leaf,
    title: 'Duurzaamheid',
    description: 'Wij kiezen bewust voor milieuvriendelijke oplossingen en inheemse planten.',
  },
  {
    icon: Award,
    title: 'Vakmanschap',
    description: 'Ons team bestaat uit gecertificeerde hoveniers met jarenlange ervaring.',
  },
  {
    icon: Users,
    title: 'Persoonlijk',
    description: 'Elke tuin is uniek. Wij luisteren naar uw wensen en werken samen aan het resultaat.',
  },
  {
    icon: TreePine,
    title: 'Passie',
    description: 'Tuinieren is onze passie. Dat ziet u terug in elk project dat wij aanpakken.',
  },
];

const stats = [
  { value: '15+', label: 'Jaar ervaring' },
  { value: '500+', label: 'Tevreden klanten' },
  { value: '50+', label: 'Projecten per jaar' },
  { value: '4', label: 'Gecertificeerde hoveniers' },
];

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Hero */}
      <section className="relative py-24 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hovenier/hero/hands-planting.jpg"
            alt="Hovenier aan het werk"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DemoBadge variant="inline" />
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-4 mb-6">
            Over Ons
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Groen & Tuin Architectuur: uw partner voor alles wat groeit en bloeit 
            in Amsterdam en omgeving.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-nature-lg">
                <Image
                  src="/images/hovenier/hero/hands-planting.jpg"
                  alt="Ons team aan het werk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 
                bg-green-600 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <span className="text-5xl font-bold">15+</span>
                  <p className="text-green-100">Jaar ervaring</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
                Ons Verhaal
              </span>
              <h2 className="font-serif text-4xl text-forest-900 mt-2 mb-6">
                Passie voor groen sinds 2009
              </h2>
              <div className="space-y-4 text-forest-600 leading-relaxed">
                <p>
                  Groen & Tuin Architectuur is ontstaan uit een diepgewortelde passie voor tuinen 
                  en het groene vak. Wat begon als een eenmanszaak is uitgegroeid tot een hecht 
                  team van vier gecertificeerde hoveniers.
                </p>
                <p>
                  Wij geloven dat een tuin meer is dan een verzameling planten. Het is een plek 
                  om te ontspannen, te genieten en te leven. Daarom nemen wij de tijd om echt 
                  te begrijpen wat u zoekt in uw ideale tuin.
                </p>
                <p>
                  Met onze jarenlange ervaring in de Amsterdamse en Haarlemse regio kennen wij 
                  de uitdagingen van het lokale klimaat en de bodem. Dit expertise zetten wij 
                  in om tuinen te creëren die niet alleen mooi zijn, maar ook duurzaam gezond blijven.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {['Gecertificeerde hoveniers', 'Gecertificeerd boomverzorger'].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-forest-700">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-wood">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
              Onze Waarden
            </span>
            <h2 className="font-serif text-4xl text-forest-900 mt-2 mb-4">
              Waar wij voor staan
            </h2>
            <p className="text-forest-600">
              Deze kernwaarden vormen de basis van alles wat wij doen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-nature hover:shadow-nature-lg transition-shadow text-center group">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 
                    group-hover:bg-green-600 transition-colors">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-forest-900 mb-3">{value.title}</h3>
                  <p className="text-forest-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
              Ons Team
            </span>
            <h2 className="font-serif text-4xl text-forest-900 mt-2 mb-4">
              Ontmoet de hoveniers
            </h2>
            <p className="text-forest-600">
              Een team van gepassioneerde vakmensen klaar om uw tuin te verzorgen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Peter van Dijk', role: 'Eigenaar & Tuinontwerper', image: '/images/hovenier/hero/hands-planting.jpg' },
              { name: 'Lisa Bakker', role: 'Hovenier & Plantenexpert', image: '/images/hovenier/projects/maintenance-1.jpg' },
              { name: 'Mark Jansen', role: 'Boomverzorger', image: '/images/hovenier/projects/tree-care.jpg' },
              { name: 'Sophie de Vries', role: 'Hovenier & Onderhoud', image: '/images/hovenier/projects/villa-lawn.jpg' },
            ].map((member, index) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden 
                  ring-4 ring-green-100 group-hover:ring-green-300 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl text-forest-900">{member.name}</h3>
                <p className="text-forest-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-full">
              <Leaf className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-medium text-amber-900 mb-2">DEMO Website</h3>
              <p className="text-amber-800">
                Dit is een demonstratie website. Alle informatie op deze pagina, 
                inclusief teamleden en bedrijfsgeschiedenis, is fictief en uitsluitend 
                bedoeld als voorbeeld van een hoveniersbedrijf website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
