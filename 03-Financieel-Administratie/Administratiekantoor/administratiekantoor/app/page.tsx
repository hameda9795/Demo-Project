"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calculator, FileText, TrendingUp, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "28+", label: "Jaar ervaring" },
  { value: "500+", label: "Tevreden klanten" },
  { value: "15", label: "Medewerkers" },
  { value: "99%", label: "Klanttevredenheid" },
];

const services = [
  {
    icon: Calculator,
    title: "Boekhouding",
    description: "Complete boekhouding en administratie voor ZZP'ers, MKB en grootbedrijf.",
    href: "/diensten#boekhouding",
  },
  {
    icon: FileText,
    title: "Belastingadvies",
    description: "Deskundig advies voor alle fiscale zaken, aangiften en fiscale optimalisatie.",
    href: "/diensten#belastingadvies",
  },
  {
    icon: Users,
    title: "Salarisadministratie",
    description: "Nauwkeurige loonverwerking en HR-advies voor uw personeel.",
    href: "/diensten#salaris",
  },
  {
    icon: TrendingUp,
    title: "Financieel advies",
    description: "Strategisch advies voor groei, investeringen en bedrijfsontwikkeling.",
    href: "/diensten#advies",
  },
];

const testimonials = [
  {
    quote: "Bureau Dekker heeft onze boekhouding volledig gestroomlijnd. Ze denken mee en zijn altijd bereikbaar.",
    author: "Marieke van Dijk",
    company: "Dijk & Partners Architecten",
  },
  {
    quote: "Eindelijk een accountant die begrijpt wat een ondernemer nodig heeft. Duidelijk, snel en betrouwbaar.",
    author: "Johan Petersen",
    company: "Petersen Horeca Groep",
  },
  {
    quote: "De persoonlijke aanpak maakt echt het verschil. Ze kennen ons bedrijf door en door.",
    author: "Lisa Chen",
    company: "Chen Innovations BV",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-light" />
        
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Asymmetric positioning */}
            <motion.div 
              className="lg:col-span-6 lg:col-start-1 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge className="mb-6 bg-[#C17A5C] text-white brutal-border font-mono text-xs uppercase tracking-wider">
                Administratiekantoor sinds 1995
              </Badge>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.9] tracking-tight mb-8">
                <span className="block">Uw cijfers,</span>
                <span className="block text-[#C17A5C] italic">onze zorg.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-[#6D5B4F] max-w-lg mb-10 leading-relaxed">
                Bureau Dekker combineert vakmanschap met persoonlijke aandacht. 
                Wij regelen uw administratie, zodat u zich kunt focussen op ondernemen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="bg-[#2C2420] brutal-border text-white hover:bg-[#6D5B4F] transition-all font-mono uppercase tracking-wider group"
                  >
                    Gratis kennismaking
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/diensten">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="brutal-border bg-transparent hover:bg-[#E8DFD0] transition-all font-mono uppercase tracking-wider"
                  >
                    Bekijk diensten
                  </Button>
                </Link>
              </div>

              {/* Decorative element */}
              <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 font-mono text-[200px] font-bold text-[#2C2420] opacity-[0.03] select-none pointer-events-none rotate-90">
                01
              </div>
            </motion.div>

            {/* Right Image - Offset position */}
            <motion.div 
              className="lg:col-span-6 lg:col-start-7 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/5] brutal-border overflow-hidden">
                  <div className="absolute inset-0 bg-[#6D5B4F]" />
                  {/* Placeholder for warm brutalism office image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#B8A99A] to-[#6D5B4F]">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 brutal-border bg-[#C17A5C] flex items-center justify-center">
                        <Calculator className="w-12 h-12 text-white" />
                      </div>
                      <span className="font-serif text-2xl text-white/80">Kantoorimpressie</span>
                    </div>
                  </div>
                </div>
                
                {/* Offset decorative block */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C17A5C] brutal-border -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#2C2420] -z-10" />
              </div>

              {/* Stats Card - Floating */}
              <motion.div 
                className="absolute -bottom-8 -left-8 lg:-left-16 bg-white brutal-border p-6 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="font-serif text-3xl font-bold text-[#2C2420]">{stat.value}</div>
                      <div className="font-mono text-xs text-[#6D5B4F] uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#6D5B4F]">Scroll</span>
          <motion.div 
            className="w-[1px] h-12 bg-[#2C2420]"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 brutal-border-top bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header - Asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Wat wij doen</span>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                Onze diensten voor uw succes
              </h2>
            </motion.div>
            <motion.div 
              className="lg:col-span-5 lg:col-start-8 flex items-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-[#6D5B4F] leading-relaxed">
                Van complete boekhouding tot strategisch financieel advies. 
                Wij bieden maatwerkoplossingen die aansluiten bij de behoeften van uw onderneming.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block">
                  <div className="relative bg-[#F5F0E8] brutal-border p-8 lg:p-10 h-full transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#C17A5C]">
                    <div className="flex flex-col h-full">
                      <div className="w-14 h-14 bg-[#2C2420] brutal-border flex items-center justify-center mb-6 group-hover:bg-[#C17A5C] transition-colors">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-[#C17A5C] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#6D5B4F] leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#2C2420] group-hover:text-[#C17A5C] transition-colors">
                        <span>Lees meer</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Asymmetric Layout */}
      <section className="py-24 lg:py-32 bg-[#2C2420] text-[#F5F0E8] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C17A5C]/10 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left - Image Area */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-square brutal-border bg-[#3D332D] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-8 brutal-border bg-[#C17A5C] flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-white" />
                    </div>
                    <span className="font-serif text-3xl text-[#B8A99A]">Werkruimte</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#C17A5C] -z-10" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Waarom Bureau Dekker</span>
                <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-8 leading-tight">
                  Persoonlijke aandacht, professioneel resultaat
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  "Meer dan 28 jaar ervaring in het MKB",
                  "Gecertificeerd en up-to-date met alle regelgeving",
                  "Persoonlijk contact met uw vaste adviseur",
                  "Moderne online portal 24/7 beschikbaar",
                  "Scherpe tarieven zonder verborgen kosten",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-[#C17A5C] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-[#B8A99A]">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/over-ons">
                  <Button 
                    size="lg"
                    className="bg-[#C17A5C] brutal-border text-white hover:bg-[#F5F0E8] hover:text-[#2C2420] transition-all font-mono uppercase tracking-wider"
                  >
                    Meer over ons
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal scroll */}
      <section className="py-24 lg:py-32 bg-[#E8DFD0] brutal-border-top brutal-border-bottom overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Testimonials</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold">Wat klanten zeggen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white brutal-border p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-serif text-6xl text-[#C17A5C] leading-none mb-4">"</div>
                <p className="text-[#6D5B4F] leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="brutal-border-top pt-4">
                  <div className="font-semibold text-[#2C2420]">{testimonial.author}</div>
                  <div className="font-mono text-xs text-[#6D5B4F] uppercase tracking-wider">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            className="relative bg-[#2C2420] brutal-border p-8 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4">
                  Klaar om uw administratie uit te besteden?
                </h2>
                <p className="text-[#B8A99A] text-lg">
                  Plan een vrijblijvend kennismakingsgesprek en ontdek wat Bureau Dekker voor u kan betekenen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="bg-[#C17A5C] brutal-border text-white hover:bg-white hover:text-[#2C2420] transition-all font-mono uppercase tracking-wider w-full sm:w-auto"
                  >
                    Afspraak maken
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+31301234567">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="brutal-border bg-transparent border-white text-white hover:bg-white hover:text-[#2C2420] transition-all font-mono uppercase tracking-wider w-full sm:w-auto"
                  >
                    Bel direct
                  </Button>
                </a>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C17A5C] brutal-border -z-10" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
