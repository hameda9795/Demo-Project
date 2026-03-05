"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Star,
} from "lucide-react";
import { MagneticButton } from "@/components/custom/MagneticButton";
import { GlassCard } from "@/components/custom/GlassCard";
import { BTWCalculator } from "@/components/custom/BTWCalculator";
import { FinancialHealthWidget } from "@/components/custom/FinancialHealthWidget";
import { AnimatedCounter } from "@/components/custom/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Tevreden klanten" },
  { value: 15, suffix: "+", label: "Jaar ervaring" },
  { value: 99, suffix: "%", label: "Succespercentage" },
  { value: 24, suffix: "u", label: "Reactietijd" },
];

const services = [
  {
    icon: FileText,
    title: "Jaarrekeningen",
    description: "Complete jaarrekeningen opgesteld volgens de nieuwste wetgeving.",
  },
  {
    icon: Users,
    title: "Loonadministratie",
    description: "Vakkundige verwerking van uw loonadministratie en salarisstroken.",
  },
  {
    icon: Calculator,
    title: "BTW-aangifte",
    description: "Tijdige en accurate BTW-aangiftes voor uw onderneming.",
  },
  {
    icon: TrendingUp,
    title: "Fiscaal advies",
    description: "Strategisch fiscaal advies om uw belastinglast te optimaliseren.",
  },
];

const testimonials = [
  {
    name: "Marie van Dijk",
    company: "Mode & Design BV",
    text: "De Betrouwbare Boekhouder heeft onze boekhouding volledig op orde gebracht. Zeer professioneel en altijd bereikbaar.",
    rating: 5,
  },
  {
    name: "Peter Jansen",
    company: "Jansen Bouw",
    text: "Eindelijk een boekhouder die meedenkt met mijn bedrijf. De fiscale besparingen zijn significant.",
    rating: 5,
  },
  {
    name: "Lisa de Boer",
    company: "Creative Studio",
    text: "Snelle reactietijden en duidelijke communicatie. Een aanrader voor elke ondernemer.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#1e3a5f]/10 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-sm font-medium mb-6"
              >
                <Award className="w-4 h-4" />
                <span>15+ jaar ervaring in Amsterdam</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] dark:text-white leading-tight mb-6"
              >
                Uw financiële toekomst,{" "}
                <span className="text-gradient">onze zorg</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8 max-w-lg"
              >
                Professionele boekhoudkundige diensten voor ondernemers in Amsterdam. 
                Van jaarrekeningen tot fiscaal advies, wij staan voor u klaar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <MagneticButton className="bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold text-lg px-8 py-4">
                    Gratis adviesgesprek
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </MagneticButton>
                </Link>
                <Link href="/diensten">
                  <MagneticButton className="bg-transparent border-2 border-[#1e3a5f]/20 text-[#1e3a5f] dark:text-white hover:bg-[#1e3a5f]/10 font-semibold text-lg px-8 py-4">
                    Onze diensten
                  </MagneticButton>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 mt-10"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-sm text-muted-foreground">RB erkend</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-sm text-muted-foreground">Snelle service</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image Grid with Hexagons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Hexagon 1 - Main */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-0 right-0 w-80 h-80 hexagon overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73]"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <Calculator className="w-32 h-32" />
                  </div>
                </motion.div>

                {/* Hexagon 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-40 left-0 w-56 h-56 hexagon overflow-hidden bg-gradient-to-br from-[#d4af37] to-[#e5c158]"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-[#1e3a5f]/30">
                    <TrendingUp className="w-24 h-24" />
                  </div>
                </motion.div>

                {/* Hexagon 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-10 right-20 w-48 h-48 hexagon overflow-hidden bg-[#1e3a5f]/10 border-2 border-[#d4af37]/30"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-[#d4af37]/40">
                    <FileText className="w-20 h-20" />
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-20 left-1/2 w-16 h-16 rounded-full bg-[#d4af37]/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Star className="w-6 h-6 text-[#d4af37]" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-40 right-0 w-12 h-12 rounded-full bg-[#1e3a5f]/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Award className="w-5 h-5 text-[#1e3a5f]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4"
            >
              Onze Diensten
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Van complete boekhouding tot strategisch fiscaal advies. 
              Wij bieden alle financiële diensten die uw onderneming nodig heeft.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <GlassCard key={service.title} delay={index * 0.1}>
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1e3a5f]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4"
            >
              Handige Tools
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Gebruik onze gratis tools om snel inzicht te krijgen in uw financiële situatie.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BTWCalculator />
            <FinancialHealthWidget />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4"
            >
              Wat Klanten Zeggen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Ontdek waarom ondernemers voor ons kiezen
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={testimonial.name} delay={index * 0.1}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1e3a5f] dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#d4af37]">{testimonial.company}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4">
                Klaar om uw financiën te optimaliseren?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Plan een gratis adviesgesprek en ontdek hoe wij uw onderneming 
                kunnen helpen groeien met professioneel boekhoudadvies.
              </p>
              <Link href="/contact">
                <MagneticButton className="bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold text-lg px-10 py-4">
                  Afspraak maken
                  <ChevronRight className="w-5 h-5 ml-1" />
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
