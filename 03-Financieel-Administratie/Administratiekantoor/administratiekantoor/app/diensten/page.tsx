"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Check,
  Building2,
  Receipt,
  PieChart,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "boekhouding",
    icon: Calculator,
    title: "Boekhouding",
    subtitle: "Complete administratieve ontzorging",
    description: "Wij verzorgen uw complete boekhouding, van het invoeren van facturen tot het opstellen van de jaarrekening. Met onze online boekhoudportal heeft u altijd inzicht in uw cijfers.",
    features: [
      "Dagelijkse boekhouding en facturatie",
      "Debiteuren- en crediteurenbeheer",
      "Bankafschriften verwerken",
      "BTW-aangiften",
      "Jaarrekening opstellen",
      "Online portal 24/7 toegang",
    ],
    price: "Vanaf € 175,- per maand",
    color: "#C17A5C",
  },
  {
    id: "belastingadvies",
    icon: FileText,
    title: "Belastingadvies",
    subtitle: "Optimaal fiscaal voordeel",
    description: "Onze belastingadviseurs helpen u bij alle fiscale vraagstukken. Van het optimaal structureren van uw onderneming tot het verdedigen van uw positie bij de Belastingdienst.",
    features: [
      "Inkomstenbelasting aangiften",
      "Vennootschapsbelasting",
      "Omzetbelasting (BTW)",
      "Successiewet planning",
      "Fiscale optimalisatie",
      "Bezwaar en beroep procedures",
    ],
    price: "Vanaf € 125,- per uur",
    color: "#6D5B4F",
  },
  {
    id: "salaris",
    icon: Users,
    title: "Salarisadministratie",
    subtitle: "Nauwkeurige loonverwerking",
    description: "Laat uw salarisadministratie over aan onze specialisten. Wij zorgen voor tijdige en accurate loonverwerking, inclusief alle verplichte aangiften en rapportages.",
    features: [
      "Loonberekening en uitbetaling",
      "Contracten en aanstellingskeuring",
      "Verlof- en verzuimregistratie",
      "Loonbeslagen en inhoudingen",
      "Jaaropgaven en loonjournaal",
      "Koppeling met pensioenfondsen",
    ],
    price: "Vanaf € 12,50 per loonstrook",
    color: "#B8956B",
  },
  {
    id: "advies",
    icon: TrendingUp,
    title: "Financieel advies",
    subtitle: "Strategisch groeipad",
    description: "Als ondernemer staat u voor belangrijke beslissingen. Onze adviseurs helpen u bij het maken van keuzes die uw bedrijf verder brengen, nu en in de toekomst.",
    features: [
      "Jaarrekening analyse",
      "Begrotingen en prognoses",
      "Investeringsanalyses",
      "Financieringsadvies",
      "Bedrijfsovername begeleiding",
      "Startersbegeleiding",
    ],
    price: "Op aanvraag",
    color: "#A67B5B",
  },
];

const additionalServices = [
  {
    icon: Building2,
    title: " startersbegeleiding",
    description: "Van kvk-inschrijving tot eerste jaarrekening",
  },
  {
    icon: Receipt,
    title: "Facturatie",
    description: " Professionele facturatie op uw huisstijl",
  },
  {
    icon: PieChart,
    title: "Managementrapportages",
    description: "Inzichtelijke rapportages voor stuurinformatie",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Altijd compliant met wet- en regelgeving",
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#2C2420] text-[#F5F0E8] brutal-border-bottom">
        <div className="absolute inset-0 bg-grid-light opacity-20" />
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-[#C17A5C] text-white brutal-border font-mono text-xs uppercase tracking-wider">
              Onze Diensten
            </Badge>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[0.95] mb-6">
              Compleet ontzorgd op financieel gebied
            </h1>
            <p className="text-xl text-[#B8A99A] max-w-2xl leading-relaxed">
              Van boekhouding tot strategisch advies. Bureau Dekker biedt alle financiële diensten 
              die uw onderneming nodig heeft om succesvol te zijn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:col-start-7' : 'lg:col-start-1'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 brutal-border flex items-center justify-center"
                        style={{ backgroundColor: service.color }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="font-mono text-sm uppercase tracking-wider text-[#6D5B4F]">
                        {service.subtitle}
                      </span>
                    </div>
                    
                    <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-[#6D5B4F] leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#C17A5C] flex-shrink-0 mt-0.5" />
                          <span className="text-[#2C2420]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="px-4 py-2 brutal-border bg-white">
                        <span className="font-mono text-sm text-[#6D5B4F]">{service.price}</span>
                      </div>
                      <Link href="/contact">
                        <Button className="bg-[#2C2420] brutal-border text-white hover:bg-[#C17A5C] transition-all font-mono uppercase tracking-wider">
                          Meer informatie
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'}`}>
                    <div className="relative">
                      <div 
                        className="aspect-[4/3] brutal-border flex items-center justify-center"
                        style={{ backgroundColor: service.color + '20' }}
                      >
                        <service.icon className="w-24 h-24" style={{ color: service.color, opacity: 0.3 }} />
                      </div>
                      {/* Offset decoration */}
                      <div 
                        className="absolute -bottom-4 -right-4 w-full h-full brutal-border -z-10"
                        style={{ backgroundColor: service.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 lg:py-32 bg-white brutal-border-top">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Aanvullend</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold">Meer mogelijkheden</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-[#F5F0E8] brutal-border p-6 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#C17A5C] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="w-10 h-10 text-[#C17A5C] mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-[#6D5B4F]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#E8DFD0]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            className="bg-[#2C2420] brutal-border p-8 lg:p-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-4">
              Maatwerk nodig?
            </h2>
            <p className="text-[#B8A99A] max-w-2xl mx-auto mb-8">
              Iedere onderneming is uniek. Neem contact met ons op voor een vrijblijvend gesprek 
              over een dienstenpakket dat perfect aansluit bij uw wensen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-[#C17A5C] brutal-border text-white hover:bg-white hover:text-[#2C2420] transition-all font-mono uppercase tracking-wider"
                >
                  Contact opnemen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+31301234567">
                <Button 
                  size="lg"
                  variant="outline"
                  className="brutal-border bg-transparent border-white text-white hover:bg-white hover:text-[#2C2420] transition-all font-mono uppercase tracking-wider"
                >
                  Bel +31 (0)30 123 4567
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
