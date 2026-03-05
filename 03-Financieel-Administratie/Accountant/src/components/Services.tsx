"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Users, 
  Building2, 
  Scale,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Boekhouding",
    description: "Complete administratieve ontzorging. Van het invoeren van facturen tot het opstellen van de balans. Wij zorgen ervoor dat je cijfers altijd op orde zijn.",
    icon: Calculator,
    features: ["Inkoop- en verkoopboeking", "Bankafstemming", "BTW-aangifte", "Debiteurenbeheer"],
  },
  {
    number: "02",
    title: "Fiscaal Advies",
    description: "Optimale belastingbesparing door strategisch fiscaal advies. Wij helpen je bij het structuren van je onderneming en het minimaliseren van je fiscale lasten.",
    icon: Scale,
    features: ["Inkomstenbelasting", "Vennootschapsbelasting", "Successiewet", "Internationale fiscaliteit"],
  },
  {
    number: "03",
    title: "Jaarcijfers",
    description: "Professionele jaarrekeningen die voldoen aan alle wettelijke vereisten. Wij stellen de cijfers op en leggen deze helder aan je uit.",
    icon: FileText,
    features: ["Opstellen jaarrekening", "Toelichting cijfers", "Deposito KvK", "Begrotingen"],
  },
  {
    number: "04",
    title: "Salarisadministratie",
    description: "Nauwkeurige en tijdige salarisverwerking voor jou en je personeel. Inclusief alle mutaties, aangiftes en jaaropgaven.",
    icon: Users,
    features: ["Loonstroken", "Loonheffingen", "Ziekteverzuim", "Contracten"],
  },
  {
    number: "05",
    title: "Bedrijfsadvies",
    description: "Strategisch advies voor groei en optimalisatie. Van bedrijfsopvolging tot financiering - wij denken met je mee.",
    icon: TrendingUp,
    features: ["Bedrijfswaardering", "Financiering", "Strategische planning", "Overnames"],
  },
  {
    number: "06",
    title: "Starterbegeleiding",
    description: "Persoonlijke begeleiding bij de start van je onderneming. Wij helpen je bij alle keuzes en formaliteiten.",
    icon: Building2,
    features: ["Rechtsvormkeuze", "KvK-inschrijving", "Financieel plan", "Subsidieadvies"],
  },
];

function ServiceItem({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 lg:py-24 border-t border-warm-taupe/20 ${
        isEven ? "" : "lg:text-right"
      }`}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Number Column */}
      <div className={`lg:col-span-2 ${isEven ? "" : "lg:order-3"}`}>
        <span className="text-display text-warm-beige">{service.number}</span>
      </div>

      {/* Content Column */}
      <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
        <div className={`flex items-center gap-4 mb-6 ${isEven ? "" : "lg:justify-end"}`}>
          <div className="w-12 h-12 bg-warm-terracotta/10 flex items-center justify-center">
            <service.icon className="w-6 h-6 text-warm-terracotta" />
          </div>
          <h3 className="text-headline text-warm-charcoal">{service.title}</h3>
        </div>
        
        <p className="text-body-large text-warm-taupe mb-8 max-w-md">
          {service.description}
        </p>

        <button 
          className={`group inline-flex items-center gap-2 text-caption text-warm-charcoal hover:text-warm-terracotta transition-colors ${
            isEven ? "" : "lg:flex-row-reverse"
          }`}
          data-cursor-hover
        >
          <span>Meer informatie</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Features Column */}
      <div className={`lg:col-span-5 ${isEven ? "lg:col-start-8" : "lg:order-1"}`}>
        <div className={`space-y-4 ${isEven ? "" : "lg:text-left"}`}>
          {service.features.map((feature, i) => (
            <motion.div
              key={feature}
              className="flex items-center gap-4 py-3 border-b border-warm-taupe/20"
              initial={{ opacity: 0, x: isEven ? 40 : -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <span className={`w-1.5 h-1.5 bg-warm-terracotta ${isEven ? "" : "lg:order-2"}`} />
              <span className={`text-body text-warm-charcoal ${isEven ? "" : "lg:order-1 lg:ml-auto"}`}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      id="diensten"
      ref={containerRef}
      className="relative bg-warm-cream overflow-hidden"
    >
      {/* Abstract Background */}
      <motion.div 
        className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-warm-beige/50 shape-blob"
        style={{ y: backgroundY }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="pt-24 lg:pt-32 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-caption text-warm-terracotta mb-4 block">
                Wat wij doen
              </span>
              <h2 className="text-headline text-warm-charcoal">
                Onze diensten voor jouw onderneming
              </h2>
            </motion.div>
            
            <motion.div
              className="lg:col-span-5 lg:col-start-8 flex items-end"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-body-large text-warm-taupe">
                Van dagelijkse boekhouding tot strategisch bedrijfsadvies. 
                Wij bieden een compleet pakket aan financiële diensten.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <ServiceItem key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
