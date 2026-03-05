import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import Link from "next/link";
import { 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  Building2,
  Briefcase,
  PiggyBank,
  Scale
} from "lucide-react";

const services = [
  {
    id: "belasting",
    icon: Calculator,
    title: "Belastingadvies",
    subtitle: "Optimale fiscale structuur voor uw situatie",
    description: "Belastingwetgeving is complex en verandert voortdurend. Onze belastingadviseurs helpen u om maximaal te profiteren van fiscale mogelijkheden en zorgen ervoor dat u compliant blijft.",
    features: [
      "Aangifte Inkomstenbelasting (IB)",
      "Aangifte Vennootschapsbelasting (VPB)",
      "Aangifte Omzetbelasting (BTW)",
      "Fiscale jaarplanning en optimalisatie",
      "Bezwaar- en beroepsprocedures",
      "Internationale belastingheffing",
    ],
    target: "Particulieren en ondernemers",
  },
  {
    id: "administratie",
    icon: FileText,
    title: "Financiële Administratie",
    subtitle: "Complete ontzorging van uw administratie",
    description: "Een goede administratie vormt de basis van elke gezonde onderneming. Wij verzorgen uw boekhouding van A tot Z, zodat u zich kunt focussen op uw kernactiviteiten.",
    features: [
      "Volledige boekhouding",
      "Debiteuren- en crediteurenbeheer",
      "Bankafschriften verwerking",
      "Jaarrekening opstelling",
      "Fiscale aangiften",
      "Managementrapportages",
    ],
    target: "MKB-ondernemingen",
  },
  {
    id: "salaris",
    icon: Users,
    title: "Salarisadministratie",
    subtitle: "Professionele verwerking van loonadministratie",
    description: "Loonheffingen, CAO's, vakantiedagen en ziekteverzuim: salarisadministratie is een specialistisch vakgebied. Laat dit over aan onze ervaren salarisadministrateurs.",
    features: [
      "Loonberekeningen en uitbetalingen",
      "Loonaangiften bij de Belastingdienst",
      "Jaaropgaven en loonstroken",
      "Verzuimregistratie",
      "Arbeidsovereenkomsten",
      "Pensioenadministratie",
    ],
    target: "Werkgevers met personeel",
  },
  {
    id: "advies",
    icon: TrendingUp,
    title: "Bedrijfsadvies",
    subtitle: "Strategische begeleiding voor groei",
    description: "Of u nu wilt groeien, investeren of uw bedrijf wilt overdragen: wij denken met u mee over strategische keuzes en financiële planning.",
    features: [
      "Bedrijfsopvolging en overdracht",
      "Financieringsadvies",
      "Investeringsanalyses",
      "Starterbegeleiding",
      "Jaarplanning en begrotingen",
      "Due diligence onderzoek",
    ],
    target: "Ondernemers in alle fasen",
  },
];

const additionalServices = [
  {
    icon: Building2,
    title: "Estate Planning",
    description: "Structureren van uw vermogen voor nu en later.",
  },
  {
    icon: Briefcase,
    title: "Juridisch Advies",
    description: "Contracten, algemene voorwaarden en rechtsvormkeuze.",
  },
  {
    icon: PiggyBank,
    title: "Pensioenadvies",
    description: "Optimaliseren van uw pensioenopbouw en -uitkering.",
  },
  {
    icon: Scale,
    title: "Fusies & Overnames",
    description: "Begeleiding bij bedrijfsovernames en restructuring.",
  },
];

export default function DienstenPage() {
  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-cream-200">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-concrete-200/20 skew-x-12 -translate-x-1/4" />
          
          <div className="container-asymmetric relative z-10">
            <div className="max-w-3xl">
              <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Onze Diensten
              </p>
              <h1 className="editorial-title mb-8">
                Alles onder één dak
              </h1>
              <p className="editorial-body text-xl">
                Van belastingaangifte tot strategisch bedrijfsadvies. 
                Wij bieden een compleet pakket aan financiële diensten voor 
                particulieren en ondernemers.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="editorial-spacing">
          <div className="container-asymmetric space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`asymmetric-grid items-center gap-12 md:gap-16 ${
                  index % 2 === 1 ? "asymmetric-grid-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-terracotta-100 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-terracotta-500" />
                    </div>
                    <span className="text-sm text-concrete-500 uppercase tracking-wider">
                      Voor: {service.target}
                    </span>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif mb-3">{service.title}</h2>
                    <p className="text-terracotta-500 font-medium">{service.subtitle}</p>
                  </div>
                  
                  <p className="editorial-body">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 pt-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                        <span className="text-ink-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className="btn-brutalist inline-flex mt-4"
                  >
                    Vraag een offerte aan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                
                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="aspect-[4/3] bg-concrete-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-concrete-200 to-concrete-400 opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-concrete-500 opacity-50" />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className={`absolute -z-10 w-full h-full border-2 border-terracotta-300 ${
                    index % 2 === 0 
                      ? "-bottom-4 -right-4" 
                      : "-bottom-4 -left-4"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="editorial-spacing bg-cream-200">
          <div className="container-asymmetric">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Aanvullende Diensten
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">
                Meer dan alleen cijfers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="brutalist-card p-6">
                  <service.icon className="w-10 h-10 text-terracotta-400 mb-4" />
                  <h3 className="text-lg font-serif mb-2">{service.title}</h3>
                  <p className="text-concrete-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="editorial-spacing">
          <div className="container-asymmetric">
            <div className="asymmetric-grid items-center gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif">
                  Transparante tarieven
                </h2>
                <p className="editorial-body">
                  Wij geloven in eerlijke en transparante prijzen. Vooraf weet u 
                  waar u aan toe bent. Geen verborgen kosten, geen verrassingen achteraf.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between items-center py-3 border-b border-concrete-200">
                    <span className="text-ink-light">Aangifte Inkomstenbelasting (particulier)</span>
                    <span className="font-medium">vanaf € 175,-</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-concrete-200">
                    <span className="text-ink-light">Aangifte Inkomstenbelasting (ZZP)</span>
                    <span className="font-medium">vanaf € 295,-</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-concrete-200">
                    <span className="text-ink-light">Administratie (per maand)</span>
                    <span className="font-medium">vanaf € 195,-</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-concrete-200">
                    <span className="text-ink-light">Salarisadministratie (per medewerker)</span>
                    <span className="font-medium">vanaf € 15,-</span>
                  </div>
                </div>
                <p className="text-sm text-concrete-500">
                  * Genoemde prijzen zijn indicatief en exclusief BTW. 
                  Vraag een vrijblijvende offerte voor een exacte prijsopgave.
                </p>
              </div>
              
              <div className="bg-ink text-cream-50 p-8 md:p-12">
                <h3 className="text-2xl font-serif mb-4">Maatwerk advies</h3>
                <p className="text-concrete-300 mb-6">
                  Voor complexere situaties maken wij graag een offerte op maat. 
                  Neem contact met ons op voor een vrijblijvend gesprek.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-terracotta-500 text-cream-50 font-medium tracking-wide uppercase text-sm hover:bg-terracotta-600 transition-colors"
                >
                  Vraag een offerte aan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-ink text-cream-50">
          <div className="container-asymmetric">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Niet gevonden wat u zoekt?
              </h2>
              <p className="text-concrete-300 text-lg mb-10 max-w-xl mx-auto">
                Iedere situatie is uniek. Neem contact met ons op en bespreek 
                uw specifieke wensen met één van onze adviseurs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-terracotta-500 text-cream-50 font-medium tracking-wide uppercase text-sm hover:bg-terracotta-600 transition-colors"
                >
                  Neem contact op
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a 
                  href="tel:0301234567" 
                  className="inline-flex items-center px-8 py-4 border border-concrete-600 text-cream-50 font-medium tracking-wide uppercase text-sm hover:border-cream-50 transition-colors"
                >
                  Bel 030 - 123 4567
                </a>
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
