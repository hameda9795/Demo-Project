/**
 * Services Section Component
 * Dakwerken Van der Berg
 * 
 * @description Asymmetric masonry grid of 6 roofing services
 * Each card features the roof tile clip-path and hover animations
 * Implements the Roof Angle Design System
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Droplets, 
  Home, 
  Thermometer, 
  Sun, 
  Flame, 
  Wind,
  ArrowRight 
} from "lucide-react";
import type { Service } from "@/types";

// Service data with roof-industry specific content
const services: Service[] = [
  {
    id: "1",
    title: "Dakreparatie",
    slug: "dakreparatie",
    description: "Snelle en professionele reparatie van lekkages, beschadigde dakpannen en stormschade. Wij komen binnen 24 uur ter plaatse.",
    shortDescription: "Lekkages en stormschade snel gerepareerd",
    image: "/images/dakdekker/services/repair-leak.jpg",
    icon: "Droplets",
    features: ["24/7 spoedservice", "Lekkage opsporing", "Tijdelijke reparatie", "Definitieve oplossing"],
    warranty: "5 jaar",
  },
  {
    id: "2",
    title: "Dakrenovatie",
    slug: "dakrenovatie",
    description: "Complete dakrenovatie voor een duurzaam en mooi resultaat. Nieuwe dakpannen, leien of zinkwerk - wij regelen alles.",
    shortDescription: "Compleet nieuw dak, jarenlang zekerheid",
    image: "/images/dakdekker/services/new-tiles.jpg",
    icon: "Home",
    features: ["Gratis inspectie", "Materialen advies", "Complete uitvoering", "Afvalverwerking"],
    warranty: "10 jaar",
  },
  {
    id: "3",
    title: "Dakisolatie",
    slug: "dakisolatie",
    description: "Verlaag uw energiekosten met professionele dakisolatie. Wij werken met de beste isolatiematerialen voor optimaal comfort.",
    shortDescription: "Bespaar op energiekosten",
    image: "/images/dakdekker/services/insulation.jpg",
    icon: "Thermometer",
    features: ["Energiebesparing", "Subsidie mogelijk", "Snelle montage", "Direct resultaat"],
    warranty: "10 jaar",
  },
  {
    id: "4",
    title: "Zonnepanelen",
    slug: "zonnepanelen",
    description: "Duurzame energie met zonnepanelen op uw dak. Wij verzorgen de complete installatie inclusief aanvraag subsidies.",
    shortDescription: "Duurzame energie op uw dak",
    image: "/images/dakdekker/services/solar-roof.jpg",
    icon: "Sun",
    features: ["Gratis advies", "Complete installatie", "Subsidie aanvraag", "Monitoring app"],
    warranty: "15 jaar",
  },
  {
    id: "5",
    title: "Schoorsteen renovatie",
    slug: "schoorsteen",
    description: "Voorkom vochtproblemen met een gereviseerde schoorsteen. Reparatie, voegwerk en nieuwe bekleding.",
    shortDescription: "Voorkom vochtproblemen",
    image: "/images/dakdekker/services/chimney.jpg",
    icon: "Flame",
    features: ["Voegwerk", "Waterdicht maken", "Nieuwe bekleding", "Certificaat"],
    warranty: "5 jaar",
  },
  {
    id: "6",
    title: "Dakgoot reiniging",
    slug: "dakgoot",
    description: "Voorkom waterschade met regelmatige dakgoot onderhoud. Reiniging, reparatie en vervanging van goten en afvoeren.",
    shortDescription: "Voorkom waterschade",
    image: "/images/dakdekker/services/gutter-cleaning.jpg",
    icon: "Wind",
    features: ["Grondige reiniging", "Lekkage reparatie", "Nieuwe goten", "Jaarlijks onderhoud"],
    warranty: "2 jaar",
  },
];

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Home,
  Thermometer,
  Sun,
  Flame,
  Wind,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Services() {
  return (
    <section id="diensten" className="py-24 bg-cloud-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-safety-orange/10 text-safety-orange font-semibold text-sm rounded-full mb-4">
            Onze Diensten
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-storm-gray mb-6">
            Alles voor uw <span className="text-safety-orange">dak</span>
          </h2>
          <p className="text-lg text-storm-gray/70 max-w-2xl mx-auto">
            Van kleine reparatie tot complete renovatie - onze vakmensen staan 
            voor u klaar met meer dan 25 jaar ervaring.
          </p>
        </motion.div>

        {/* Asymmetric Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            // Create asymmetric layout with different heights
            const isTall = index === 0 || index === 3;
            const isWide = index === 1;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-2xl
                  ${isTall ? "lg:row-span-2" : ""}
                  ${isWide ? "md:col-span-2 lg:col-span-1" : ""}
                `}
              >
                <Link href={`#${service.slug}`} className="block h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-storm-gray via-storm-gray/60 to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full min-h-[320px] lg:min-h-[380px] p-6 flex flex-col justify-end">
                    {/* Icon - Rotated for roof tile effect */}
                    <motion.div
                      className="absolute top-6 right-6 w-14 h-14 bg-safety-orange rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg"
                    >
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </motion.div>

                    {/* Warranty Badge */}
                    <div className="absolute top-6 left-6 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {service.warranty} garantie
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-bold text-white group-hover:text-safety-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                            <span className="w-1.5 h-1.5 bg-safety-orange rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="pt-4 flex items-center gap-2 text-safety-orange font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span>Meer informatie</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Tile Clip-path Overlay - Creates roof tile shape on hover */}
                  <div 
                    className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-safety-orange/30 rounded-2xl transition-colors duration-300"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)" }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-storm-gray/70 mb-6">
            Niet zeker welke service u nodig heeft? Wij adviseren u graag.
          </p>
          <Link
            href="#offerte"
            className="inline-flex items-center gap-2 px-8 py-4 bg-safety-orange text-white font-heading font-semibold rounded-xl hover:bg-safety-orange/90 transition-colors shadow-lg"
          >
            <span>Gratis adviesgesprek</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
