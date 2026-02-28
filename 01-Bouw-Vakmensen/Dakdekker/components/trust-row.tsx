/**
 * Certification/Trust Row Component
 * Dakwerken Van der Berg
 * 
 * @description Trust indicators: certifications, guarantees, and USPs
 * Logos for VCA, Bouwend Nederland, KOMO
 */

"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, Phone, ThumbsUp, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "VCA",
    fullName: "Veiligheid, Gezondheid en Milieu",
    description: "Gecertificeerd voor veilig werken",
  },
  {
    name: "Bouwend Nederland",
    fullName: "Branchevereniging",
    description: "Aangesloten bij branchevereniging",
  },
  {
    name: "KOMO",
    fullName: "Kwaliteitskeurmerk",
    description: "Gecertificeerde materialen",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "10 jaar garantie",
    description: "Op al ons werk en gebruikte materialen",
  },
  {
    icon: Award,
    title: "GRATIS inspectie",
    description: "Geen kosten voor een eerste dakinspectie",
  },
  {
    icon: Clock,
    title: "Snel ter plaatse",
    description: "Binnen 24 uur bij spoed",
  },
  {
    icon: CheckCircle,
    title: "All-risk verzekerd",
    description: "Uw pand is volledig gedekt tijdens werkzaamheden",
  },
];

const stats = [
  { value: "25+", label: "Jaar ervaring" },
  { value: "2.500+", label: "Tevreden klanten" },
  { value: "4.9/5", label: "Gemiddelde beoordeling" },
  { value: "24/7", label: "Spoedservice" },
];

export function TrustRow() {
  return (
    <section className="py-20 bg-white">
      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-storm-gray rounded-3xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-safety-orange mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Guarantees Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-storm-gray mb-4">
            Waarom kiezen voor <span className="text-safety-orange">Van der Berg</span>?
          </h2>
          <p className="text-storm-gray/70 max-w-2xl mx-auto">
            Wij staan garant voor kwaliteit, betrouwbaarheid en vakmanschap. 
            Uw dak is bij ons in veilige handen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-cloud-white rounded-2xl hover:bg-safety-orange hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-safety-orange/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <item.icon className="w-7 h-7 text-safety-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-storm-gray group-hover:text-white mb-2 transition-colors">
                {item.title}
              </h3>
              <p className="text-storm-gray/70 group-hover:text-white/80 text-sm transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-storm-gray/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-heading text-2xl font-bold text-storm-gray mb-2">
              Gecertificeerd en erkend
            </h3>
            <p className="text-storm-gray/60">
              Wij voldoen aan de hoogste kwaliteitsnormen
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Placeholder Logo - Replace with actual certification logos */}
                <div className="w-24 h-24 bg-storm-gray/10 group-hover:bg-safety-orange/10 rounded-2xl flex items-center justify-center mb-4 transition-colors border-2 border-transparent group-hover:border-safety-orange/30">
                  <span className="font-heading font-bold text-2xl text-storm-gray/40 group-hover:text-safety-orange transition-colors">
                    {cert.name}
                  </span>
                </div>
                <span className="font-semibold text-storm-gray group-hover:text-safety-orange transition-colors">
                  {cert.name}
                </span>
                <span className="text-xs text-storm-gray/60 text-center max-w-[150px]">
                  {cert.description}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Note about logos */}
          <p className="text-center text-xs text-storm-gray/40 mt-8">
            * Plaats uw werkelijke certificeringslogo&apos;s in /public/images/dakdekker/icons/
          </p>
        </div>
      </div>
    </section>
  );
}
