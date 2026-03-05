import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import Link from "next/link";
import { ArrowRight, Calculator, FileText, Users, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";

const stats = [
  { number: "37+", label: "Jaar ervaring", suffix: "" },
  { number: "850", label: "Tevreden klanten", suffix: "+" },
  { number: "15", label: "Specialistisch medewerkers", suffix: "" },
  { number: "98", label: "Klanttevredenheid", suffix: "%" },
];

const services = [
  {
    icon: Calculator,
    title: "Belastingadvies",
    description: "Optimale belastingbesparing door strategisch advies op maat voor particulieren en ondernemers.",
    href: "/diensten#belasting",
  },
  {
    icon: FileText,
    title: "Financiële Administratie",
    description: "Complete verzorging van uw administratie, van boekhouding tot jaarrekening.",
    href: "/diensten#administratie",
  },
  {
    icon: Users,
    title: "Salarisadministratie",
    description: "Professionele verwerking van loonadministratie en personeelszaken.",
    href: "/diensten#salaris",
  },
  {
    icon: TrendingUp,
    title: "Bedrijfsadvies",
    description: "Strategisch advies voor groei, financiering en bedrijfsvoering.",
    href: "/diensten#advies",
  },
];

const testimonials = [
  {
    quote: "De Brug Adviseurs heeft ons geholpen met complexe fiscale vraagstukken. Hun expertise en persoonlijke aanpak maken het verschil.",
    author: "Jan van den Berg",
    role: "Eigenaar, Berg Techniek BV",
  },
  {
    quote: "Eindelijk een adviseur die begrijpt wat een ondernemer nodig heeft. Snel, accuraat en altijd bereikbaar.",
    author: "Maria Jansen",
    role: "ZZP-er, Jansen Interieur",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section - Asymmetric Layout */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-concrete-200/30 -skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta-100 rounded-full blur-3xl opacity-50" />
          
          <div className="container-asymmetric relative z-10">
            <div className="asymmetric-grid items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-4">
                  <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium">
                    Belastingadviseur sinds 1987
                  </p>
                  <h1 className="editorial-title">
                    Financieel advies<br />
                    <span className="text-terracotta-400">met visie</span>
                  </h1>
                </div>
                
                <p className="editorial-body text-lg">
                  Bij De Brug Adviseurs combineren we decennialange expertise met een 
                  frisse blik op financiële vraagstukken. Wij helpen ondernemers en 
                  particulieren met belastingadvies, administratie en strategische planning.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/contact" className="btn-brutalist group">
                    Maak een afspraak
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/diensten" className="btn-brutalist-outline">
                    Onze diensten
                  </Link>
                </div>
                
                {/* Demo credentials hint */}
                <div className="pt-6 border-t border-concrete-200">
                  <p className="text-sm text-concrete-500">
                    <span className="font-medium text-concrete-700">Demo:</span> Log in met{" "}
                    <code className="px-1.5 py-0.5 bg-concrete-200 rounded text-xs">demo@debrug.nl</code>
                    {" / "}
                    <code className="px-1.5 py-0.5 bg-concrete-200 rounded text-xs">demo123</code>
                  </p>
                </div>
              </div>
              
              {/* Right Content - Visual */}
              <div className="relative hidden md:block">
                <div className="relative">
                  {/* Main image placeholder */}
                  <div className="aspect-[4/5] bg-concrete-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-concrete-200 to-concrete-400" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-cream-100/50 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-12 h-12 text-concrete-500" />
                        </div>
                        <span className="text-concrete-600 font-serif text-lg">Uw financiële partner</span>
                      </div>
                    </div>
                    {/* Decorative frame */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 border border-cream-100/30" />
                  </div>
                  
                  {/* Floating stat card */}
                  <div className="absolute -bottom-8 -left-8 bg-cream-50 p-6 shadow-xl border border-concrete-200">
                    <div className="text-4xl font-serif text-terracotta-400 mb-1">850+</div>
                    <div className="text-sm text-concrete-600 uppercase tracking-wider">Tevreden klanten</div>
                  </div>
                  
                  {/* Accent block */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-400 -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-ink text-cream-50">
          <div className="container-asymmetric">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="stat-number text-cream-50">{stat.number}</div>
                  <div className="text-concrete-400 text-sm uppercase tracking-wider mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container-asymmetric">
          <div className="section-divider">
            <span className="section-divider-text">Onze Diensten</span>
          </div>
        </div>

        {/* Services Section - Asymmetric Grid */}
        <section className="editorial-spacing">
          <div className="container-asymmetric">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Compleet dienstenpakket voor uw financiële zekerheid
              </h2>
              <p className="editorial-body">
                Van belastingaangifte tot complexe bedrijfsadviesvragen. 
                Wij bieden een breed scala aan diensten voor zowel particulieren als ondernemers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="brutalist-card p-8 md:p-10 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-terracotta-100 flex items-center justify-center group-hover:bg-terracotta-200 transition-colors">
                      <service.icon className="w-7 h-7 text-terracotta-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif mb-3 group-hover:text-terracotta-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-concrete-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-terracotta-500">
                        Lees meer
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Asymmetric Layout */}
        <section className="editorial-spacing bg-cream-200">
          <div className="container-asymmetric">
            <div className="asymmetric-grid-reverse items-center gap-12 md:gap-16">
              {/* Visual */}
              <div className="relative order-2 md:order-1">
                <div className="aspect-square bg-concrete-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-concrete-400 to-concrete-200" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 bg-cream-100/50 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-concrete-500" />
                      </div>
                      <span className="text-concrete-600 font-serif">Kwaliteit & Betrouwbaarheid</span>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ochre-200 -z-10" />
                <div className="absolute -top-6 -left-6 w-20 h-20 border-2 border-terracotta-300 -z-10" />
              </div>
              
              {/* Content */}
              <div className="order-1 md:order-2 space-y-8">
                <div>
                  <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                    Waarom kiezen voor ons
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6">
                    Persoonlijk contact,<br />professioneel resultaat
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    "Gecertificeerde belastingadviseurs met jarenlange ervaring",
                    "Persoonlijke aandacht voor elke klant, groot of klein",
                    "Proactief advies, niet alleen reactief",
                    "Vaste contactpersoon voor consistentie en vertrouwen",
                    "Moderne technologie gecombineerd met menselijke expertise",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/over-ons" className="btn-brutalist inline-flex">
                  Ontdek ons verhaal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="editorial-spacing">
          <div className="container-asymmetric">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-terracotta-500 text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Klantverhalen
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">
                Wat onze klanten zeggen
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <div className="editorial-quote mb-6">
                    "{testimonial.quote}"
                  </div>
                  <div className="pl-6">
                    <div className="font-serif text-lg">{testimonial.author}</div>
                    <div className="text-concrete-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-ink relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }} />
          </div>
          
          <div className="container-asymmetric relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream-50 mb-6">
                Klaar voor vrijblijvend advies?
              </h2>
              <p className="text-concrete-300 text-lg mb-10 max-w-xl mx-auto">
                Plan een gratis kennismakingsgesprek en ontdek hoe wij uw financiële 
                zaken kunnen optimaliseren.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-terracotta-500 text-cream-50 font-medium tracking-wide uppercase text-sm hover:bg-terracotta-600 transition-colors"
                >
                  Plan een afspraak
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
