"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock, Target, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    icon: Award,
    title: "Vakmanschap",
    description: "Wij zijn trots op ons vak en streven continu naar de hoogste kwaliteit in alles wat we doen.",
  },
  {
    icon: Users,
    title: "Betrokkenheid",
    description: "We kennen onze klanten persoonlijk en denken mee over hun succes, niet alleen hun cijfers.",
  },
  {
    icon: Clock,
    title: "Beschikbaarheid",
    description: "Vragen worden snel beantwoord. U kunt ons bereiken wanneer u ons nodig heeft.",
  },
  {
    icon: Target,
    title: "Transparantie",
    description: "Geen verborgen kosten of verrassingen. Duidelijke afspraken en heldere communicatie.",
  },
];

const team = [
  {
    name: "Pieter Dekker",
    role: "Oprichter & Registeraccountant",
    description: "Met meer dan 30 jaar ervaring is Pieter de drijvende kracht achter Bureau Dekker.",
    color: "#C17A5C",
  },
  {
    name: "Sanne van Bergen",
    role: "Belastingadviseur",
    description: "Sanne is onze fiscale expert en weet alles van de complexe belastingwetgeving.",
    color: "#6D5B4F",
  },
  {
    name: "Thomas Jansen",
    role: "Junior Accountant",
    description: "Thomas brengt frisse energie en de nieuwste inzichten in de accountancy.",
    color: "#B8956B",
  },
  {
    name: "Emma van Dijk",
    role: "Salarisadministrateur",
    description: "Emma zorgt ervoor dat de loonstroken altijd op tijd en foutloos zijn verwerkt.",
    color: "#A67B5B",
  },
];

const timeline = [
  { year: "1995", title: "Het begin", description: "Pieter Dekker start Bureau Dekker vanuit zijn werkkamer." },
  { year: "2003", title: "Verhuizing", description: "De eerste echte kantoorruimte aan de Maliebaan in Utrecht." },
  { year: "2010", title: "Uitbreiding", description: "Het team groeit naar 5 medewerkers en we openen een tweede vestiging." },
  { year: "2018", title: "Digitalisering", description: "Lancering van onze online klantportal voor 24/7 inzicht." },
  { year: "2024", title: "Heden", description: "Een team van 15 professionals bedient meer dan 500 tevreden klanten." },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#F5F0E8] brutal-border-bottom">
        <div className="absolute inset-0 bg-grid-light" />
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-[#C17A5C] text-white brutal-border font-mono text-xs uppercase tracking-wider">
                Over Bureau Dekker
              </Badge>
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[0.95] mb-6">
                Een verhaal van groei en vertrouwen
              </h1>
              <p className="text-xl text-[#6D5B4F] leading-relaxed mb-8">
                Al sinds 1995 helpen wij ondernemers in Utrecht en omgeving met hun financiële zaken. 
                Wat begon als een eenmanszaak is uitgegroeid tot een gerenommeerd administratiekantoor 
                met een team van 15 gedreven professionals.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="font-serif text-4xl font-bold text-[#C17A5C]">28+</div>
                  <div className="font-mono text-sm text-[#6D5B4F] uppercase tracking-wider">Jaar ervaring</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-bold text-[#C17A5C]">500+</div>
                  <div className="font-mono text-sm text-[#6D5B4F] uppercase tracking-wider">Tevreden klanten</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-bold text-[#C17A5C]">15</div>
                  <div className="font-mono text-sm text-[#6D5B4F] uppercase tracking-wider">Medewerkers</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5 lg:col-start-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-[#2C2420] brutal-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-8 brutal-border bg-[#C17A5C] flex items-center justify-center">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <span className="font-serif text-3xl text-[#B8A99A]">Kantoorfoto</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C17A5C] brutal-border -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Onze waarden</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold">Waar wij voor staan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-[#F5F0E8] brutal-border p-8 lg:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#2C2420] brutal-border flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-[#6D5B4F] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-[#2C2420] text-[#F5F0E8] brutal-border-top brutal-border-bottom">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Tijdlijn</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold">Onze geschiedenis</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#C17A5C] lg:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`hidden lg:block lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className={`bg-[#3D332D] brutal-border p-6 inline-block text-left ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                      <h3 className="font-serif text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#B8A99A]">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-[#C17A5C] brutal-border lg:-translate-x-1/2 mt-2" />
                  
                  <div className="pl-12 lg:pl-0 lg:w-1/2 lg:hidden">
                    <span className="font-mono text-3xl font-bold text-[#C17A5C]">{item.year}</span>
                    <div className="bg-[#3D332D] brutal-border p-6 mt-4">
                      <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#B8A99A]">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className={`hidden lg:block lg:w-1/2 ${index % 2 === 0 ? 'lg:text-left lg:pl-12' : 'lg:text-right lg:pr-12'}`}>
                    <span className="font-mono text-5xl font-bold text-[#C17A5C]">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 lg:py-32 bg-[#F5F0E8]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Het team</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold">Maak kennis met ons team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white brutal-border overflow-hidden">
                  {/* Placeholder for team member photo */}
                  <div 
                    className="aspect-[3/4] flex items-center justify-center relative"
                    style={{ backgroundColor: member.color + '20' }}
                  >
                    <div 
                      className="w-24 h-24 brutal-border flex items-center justify-center"
                      style={{ backgroundColor: member.color }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    {/* Overlay with social links */}
                    <div className="absolute inset-0 bg-[#2C2420]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-[#C17A5C] hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-[#C17A5C] hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#C17A5C] mb-3">{member.role}</p>
                    <p className="text-sm text-[#6D5B4F]">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            className="bg-[#C17A5C] brutal-border p-8 lg:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-4">
                Wordt onderdeel van ons verhaal
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Ook uw onderneming verdient een financieel partner die meedenkt en groeit. 
                Laten we kennismaken en kijken wat we voor elkaar kunnen betekenen.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-white brutal-border text-[#2C2420] hover:bg-[#2C2420] hover:text-white transition-all font-mono uppercase tracking-wider"
                >
                  Maak een afspraak
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vacatures Section */}
      <section id="vacatures" className="py-24 lg:py-32 bg-[#E8DFD0]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Werken bij ons</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6">
                Word onderdeel van ons team
              </h2>
              <p className="text-lg text-[#6D5B4F] leading-relaxed mb-8">
                Wij zijn altijd op zoek naar talentvolle collega&apos;s die net als wij 
                passie hebben voor het vak. Bij Bureau Dekker krijgt u de ruimte om 
                zich te ontwikkelen en echt het verschil te maken voor onze klanten.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white brutal-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold">Junior Accountant</h3>
                    <p className="text-sm text-[#6D5B4F]">32-40 uur per week • Utrecht</p>
                  </div>
                  <Button variant="outline" className="brutal-border bg-transparent shrink-0">
                    Bekijk vacature
                  </Button>
                </div>
                <div className="bg-white brutal-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold">Administratief Medewerker</h3>
                    <p className="text-sm text-[#6D5B4F]">24-32 uur per week • Utrecht</p>
                  </div>
                  <Button variant="outline" className="brutal-border bg-transparent shrink-0">
                    Bekijk vacature
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-[#2C2420] brutal-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-8 brutal-border bg-[#C17A5C] flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <span className="font-serif text-3xl text-[#B8A99A]">Teamfoto</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C17A5C] brutal-border -z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
