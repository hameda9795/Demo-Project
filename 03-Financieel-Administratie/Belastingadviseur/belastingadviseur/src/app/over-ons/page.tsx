import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import Link from "next/link";
import { ArrowRight, Award, Heart, Lightbulb, Users, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passie",
    description: "Wij doen ons werk met enthousiasme en toewijding. Financiën zijn niet alleen cijfers, maar mensenwerk.",
  },
  {
    icon: Lightbulb,
    title: "Innovatie",
    description: "Traditie en vernieuwing gaan hand in hand. We blijven investeren in kennis en technologie.",
  },
  {
    icon: Target,
    title: "Precisie",
    description: "Accuratesse is essentieel in ons vak. We werken zorgvuldig en controleren dubbel.",
  },
  {
    icon: Users,
    title: "Mensgericht",
    description: "Achter elke aangifte en elk advies staat een mens. We luisteren echt naar uw wensen.",
  },
];

const team = [
  {
    name: "Pieter de Brug",
    role: "Oprichter & Senior Belastingadviseur",
    description: "Met 40 jaar ervaring is Pieter de grondlegger van onze filosofie: persoonlijk, professioneel, betrouwbaar.",
  },
  {
    name: "Sanne van Dijk",
    role: "Fiscaal Jurist",
    description: "Sanne specialiseert zich in complexe fiscale vraagstukken en estate planning voor vermogende particulieren.",
  },
  {
    name: "Thomas Jansen",
    role: "Accountant-Administratieconsulent",
    description: "Thomas begeleidt MKB-ondernemers bij groei, financiering en strategische beslissingen.",
  },
  {
    name: "Emma Bakker",
    role: "Salarisadministrateur",
    description: "Emma zorgt ervoor dat loonadministratie soepel verloopt en werkgevers altijd compliant zijn.",
  },
];

const milestones = [
  { year: "1987", event: "Oprichting De Brug Adviseurs door Pieter de Brug" },
  { year: "1995", event: "Uitbreiding naar salarisadministratie en personeelszaken" },
  { year: "2003", event: "Verhuizing naar huidig kantoor aan de Nobelstraat" },
  { year: "2012", event: "Introductie online klantomgeving MijnDeBrug" },
  { year: "2018", event: "Team uitgebreid naar 15 medewerkers" },
  { year: "2024", event: "Certificering als erkend leerbedrijf" },
];

export default function OverOnsPage() {
  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-cream-200">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-concrete-200/20 -skew-x-12 translate-x-1/4" />
          
          <div className="container-asymmetric relative z-10">
            <div className="max-w-3xl">
              <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Over Ons
              </p>
              <h1 className="editorial-title mb-8">
                Een familiebedrijf met een missie
              </h1>
              <p className="editorial-body text-xl">
                Sinds 1987 helpen wij ondernemers en particulieren met hun financiële 
                vraagstukken. Wat begon als een eenmanskantoor is uitgegroeid tot een 
                toonaangevend advieskantoor in regio Utrecht.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story - Asymmetric */}
        <section className="editorial-spacing">
          <div className="container-asymmetric">
            <div className="asymmetric-grid items-start gap-12 md:gap-16">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif">Ons verhaal</h2>
                <div className="space-y-4 editorial-body">
                  <p>
                    De Brug Adviseurs is in 1987 opgericht door Pieter de Brug, 
                    een ambitieuze belastingadviseur met een duidelijke visie: 
                    financieel advies moet toegankelijk en persoonlijk zijn.
                  </p>
                  <p>
                    Wat begon als een klein kantoor aan de huiskeukentafel, groeide 
                    al snel uit tot een vertrouwd adres voor ondernemers in Utrecht 
                    en omgeving. De naam "De Brug" staat symbool voor onze rol: 
                    wij bouwen een brug tussen complexe fiscale wetgeving en 
                    begrijpelijk advies.
                  </p>
                  <p>
                    Inmiddels zijn we meer dan 35 jaar later een modern advieskantoor 
                    met 15 gespecialiseerde medewerkers. Maar onze kernwaarden zijn 
                    onveranderd: persoonlijke aandacht, vakmanschap en een 
                    langetermijnrelatie met onze klanten.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] bg-concrete-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-concrete-300 to-concrete-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-16 h-16 mx-auto mb-4 text-concrete-500" />
                      <span className="text-concrete-600 font-serif text-lg">Sinds 1987</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-terracotta-300 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="editorial-spacing bg-cream-200">
          <div className="container-asymmetric">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Onze Waarden
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">
                Waar staan wij voor?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="w-14 h-14 bg-terracotta-100 flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <value.icon className="w-7 h-7 text-terracotta-500" />
                  </div>
                  <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                  <p className="text-concrete-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="editorial-spacing">
          <div className="container-asymmetric">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                  Tijdlijn
                </p>
                <h2 className="text-4xl md:text-5xl font-serif">
                  De geschiedenis van De Brug
                </h2>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-concrete-300 md:-translate-x-1/2" />
                
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-start gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <span className="text-3xl font-serif text-terracotta-400">{milestone.year}</span>
                    </div>
                    
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-terracotta-400 rounded-full -translate-x-1/2 mt-2" />
                    
                    <div className="pl-12 md:pl-0 md:w-1/2">
                      <span className="md:hidden text-2xl font-serif text-terracotta-400 block mb-1">
                        {milestone.year}
                      </span>
                      <p className="text-ink-light">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="editorial-spacing bg-ink text-cream-50">
          <div className="container-asymmetric">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-terracotta-400 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Ons Team
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">
                Maak kennis met onze experts
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {team.map((member, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-concrete-700 flex items-center justify-center">
                    <Users className="w-8 h-8 text-concrete-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                    <p className="text-terracotta-400 text-sm mb-3">{member.role}</p>
                    <p className="text-concrete-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container-asymmetric">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Wordt onderdeel van ons verhaal
              </h2>
              <p className="text-concrete-600 text-lg mb-10 max-w-xl mx-auto">
                Wij zijn altijd op zoek naar talentvolle professionals die onze 
                passie voor financieel advies delen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="btn-brutalist"
                >
                  Neem contact op
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="#vacatures" 
                  className="btn-brutalist-outline"
                >
                  Bekijk vacatures
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingActionButton />
    </>
  );
}
