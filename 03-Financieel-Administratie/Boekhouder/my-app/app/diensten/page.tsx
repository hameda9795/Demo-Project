"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import {
  FileText,
  Users,
  Calculator,
  TrendingUp,
  Building2,
  Receipt,
  Briefcase,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import { MagneticButton } from "@/components/custom/MagneticButton";
import Link from "next/link";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: FileText,
    title: "Jaarrekeningen",
    description: "Complete opmaak en controle van uw jaarrekening volgens de wettelijke bepalingen.",
    features: [
      "Balans en winst- en verliesrekening",
      "Toelichting bij de jaarrekening",
      "Controle door registeraccountant",
      "Digitale archivering",
    ],
    price: "Vanaf € 750,- per jaar",
  },
  {
    icon: Users,
    title: "Loonadministratie",
    description: "Complete verwerking van uw personeels- en salarisadministratie.",
    features: [
      "Maandelijkse loonstroken",
      "Aangifte loonheffingen",
      "Jaaropgaven",
      "Personeelsregistratie",
    ],
    price: "Vanaf € 25,- per medewerker/maand",
  },
  {
    icon: Calculator,
    title: "BTW-aangifte",
    description: "Tijdige en accurate BTW-aangiftes voor uw onderneming.",
    features: [
      "Maandelijkse of kwartaalaangifte",
      "ICP-aangifte",
      "Controle op btw-teruggaaf",
      "Advies bij btw-vraagstukken",
    ],
    price: "Vanaf € 150,- per kwartaal",
  },
  {
    icon: TrendingUp,
    title: "Fiscaal Advies",
    description: "Strategisch advies om uw belastinglast te optimaliseren.",
    features: [
      "Belastingplanning",
      "Vooroverleg met Belastingdienst",
      "Optimalisatie bedrijfsopvolging",
      "Internationale fiscale structuur",
    ],
    price: "Op aanvraag",
  },
  {
    icon: Building2,
    title: "Bedrijfsadministratie",
    description: "Complete verzorging van uw dagelijkse boekhouding.",
    features: [
      "Verwerking van inkoop- en verkoopfacturen",
      "Bankafschriften verwerken",
      "Debiteuren- en crediteurenbeheer",
      "Managementrapportages",
    ],
    price: "Vanaf € 350,- per maand",
  },
  {
    icon: Receipt,
    title: "Aangifte Inkomstenbelasting",
    description: "Voor particulieren en ondernemers.",
    features: [
      "Aangifte IB voor ondernemers",
      "Aangifte IB voor particulieren",
      "Controle aanslag",
      "Bezwaar en beroep",
    ],
    price: "Vanaf € 195,-",
  },
];

const additionalServices = [
  {
    icon: Briefcase,
    title: "Bedrijfsovername",
    description: "Begeleiding bij koop of verkoop van uw bedrijf.",
  },
  {
    icon: Shield,
    title: "Administratieve franchising",
    description: "Administratieve ondersteuning voor franchiseformules.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#1e3a5f] dark:text-white mb-6"
          >
            Onze <span className="text-gradient">Diensten</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Van complete boekhouding tot strategisch fiscaal advies. 
            Wij bieden alle financiële diensten die uw onderneming nodig heeft om succesvol te zijn.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1e3a5f]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <TiltCard key={service.title} className="h-full">
                  <GlassCard delay={index * 0.1} className="h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-[#d4af37]/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#d4af37]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-[#1e3a5f]/10">
                      <p className="font-semibold text-[#1e3a5f] dark:text-white">
                        {service.price}
                      </p>
                    </div>
                  </GlassCard>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Aanvullende Diensten
            </h2>
            <p className="text-muted-foreground">
              Specialistische diensten voor specifieke situaties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <GlassCard key={service.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Niet zeker welke diensten u nodig heeft?
            </h2>
            <p className="text-muted-foreground mb-6">
              Neem contact met ons op voor een vrijblijvend adviesgesprek. 
              Wij helpen u graag bij het samenstellen van een pakket dat past bij uw situatie.
            </p>
            <Link href="/contact">
              <MagneticButton className="bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold">
                Neem contact op
              </MagneticButton>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
