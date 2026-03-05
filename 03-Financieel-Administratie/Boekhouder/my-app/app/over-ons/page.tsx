"use client";

import { motion } from "framer-motion";
import { Award, Target, Heart, Users } from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import { AnimatedCounter } from "@/components/custom/AnimatedCounter";

const values = [
  {
    icon: Award,
    title: "Kwaliteit",
    description: "Wij leveren altijd werk van de hoogste kwaliteit, volgens de nieuwse standaarden.",
  },
  {
    icon: Target,
    title: "Precisie",
    description: "Elk cijfer telt. Wij zorgen voor nauwkeurige en foutloze boekhouding.",
  },
  {
    icon: Heart,
    title: "Betrokkenheid",
    description: "Wij gaan voor een persoonlijke relatie met al onze klanten.",
  },
  {
    icon: Users,
    title: "Samenwerking",
    description: "Samen bereiken we meer. Wij denken mee over uw bedrijfsstrategie.",
  },
];

const team = [
  {
    name: "Robert van den Berg",
    role: "Directeur / Registeraccountant",
    image: "/images/team-1.jpg",
  },
  {
    name: "Sanne de Vries",
    role: "Senior Belastingadviseur",
    image: "/images/team-1.jpg",
  },
  {
    name: "Thomas Janssen",
    role: "Junior Accountant",
    image: "/images/team-1.jpg",
  },
  {
    name: "Emma Bakker",
    role: "Administratief Medewerker",
    image: "/images/team-1.jpg",
  },
];

const timeline = [
  {
    year: "2009",
    title: "Het begin",
    description: "De Betrouwbare Boekhouder wordt opgericht in een klein kantoor in Amsterdam.",
  },
  {
    year: "2012",
    title: "Eerste uitbreiding",
    description: "Het team groeit naar 5 medewerkers en we verhuizen naar een groter kantoor.",
  },
  {
    year: "2016",
    title: "RB erkenning",
    description: "We behalen de prestigieuze RB erkenning als registeraccountantskantoor.",
  },
  {
    year: "2020",
    title: "Digitalisering",
    description: "Volledige transitie naar digitale boekhouding en cloud-oplossingen.",
  },
  {
    year: "2024",
    title: "500+ klanten",
    description: "We mogen meer dan 500 tevreden klanten aan ons portfolio toevoegen.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] dark:text-white mb-6">
                Over <span className="text-gradient">De Betrouwbare Boekhouder</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Sinds 2009 zijn wij dé financiële partner voor ondernemers in Amsterdam. 
                Met een team van ervaren professionals helpen wij bedrijven van elke omvang 
                met hun boekhouding, belastingaangiftes en financiële strategie.
              </p>
              <p className="text-muted-foreground">
                Onze missie is simpel: wij maken financiën begrijpelijk en zorgen ervoor 
                dat u zich kunt focussen op wat écht belangrijk is - uw onderneming laten groeien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="blob overflow-hidden aspect-square bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] flex items-center justify-center">
                <Award className="w-32 h-32 text-[#d4af37]/50" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 blob-2 bg-[#d4af37] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#1e3a5f]">
                  <AnimatedCounter end={15} suffix="+" />
                </span>
                <span className="text-sm text-[#1e3a5f] ml-1">jaar</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1e3a5f]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Onze Kernwaarden
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deze waarden vormen de basis van alles wat wij doen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <GlassCard key={value.title} delay={index * 0.1}>
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Onze Geschiedenis
            </h2>
            <p className="text-muted-foreground">
              Een reis van 15 jaar groei en succes
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#d4af37]/30 md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#d4af37] border-4 border-white dark:border-[#0f172a] md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                }`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-sm font-bold mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-[#1e3a5f] dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e3a5f]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Ons Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ontmoet de professionals achter uw financiële succes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] flex items-center justify-center">
                    <Users className="w-20 h-20 text-[#d4af37]/30" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-[#d4af37]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
