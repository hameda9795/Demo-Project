"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, Eye, Zap, Wrench, Home } from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "all", label: "Alles", icon: Filter },
  { id: "emergency", label: "Noodklussen", icon: Zap },
  { id: "installation", label: "Installatie", icon: Wrench },
  { id: "renovation", label: "Renovatie", icon: Home },
]

const projects = [
  {
    id: 1,
    title: "Complete Meterkast Vervanging",
    category: "renovation",
    image: "/images/elektricien/projects/meterkast-before.svg",
    description: "Vervanging verouderde meterkast naar moderne groepenkast",
  },
  {
    id: 2,
    title: "Laadpaal Installatie Tesla",
    category: "installation",
    image: "/images/elektricien/projects/laadpaal-driveway.svg",
    description: "Wallbox installatie met 3-fase aansluiting",
  },
  {
    id: 3,
    title: "Spoedreparatie Stroomstoring",
    category: "emergency",
    image: "/images/elektricien/services/emergency-repair.svg",
    description: "24/7 spoedhulp bij stroomuitval",
  },
  {
    id: 4,
    title: "Smart Home Domotica",
    category: "installation",
    image: "/images/elektricien/services/smart-home.svg",
    description: "Complete smart home installatie",
  },
  {
    id: 5,
    title: "Zonnepanelen Aansluiting",
    category: "installation",
    image: "/images/elektricien/services/solar-connection.svg",
    description: "Aansluiting 10 zonnepanelen met omvormer",
  },
  {
    id: 6,
    title: "Meterkast Uitbreiding",
    category: "renovation",
    image: "/images/elektricien/hero/meterkast-open.svg",
    description: "Uitbreiding met 4 extra groepen",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-circuit-dark/95 to-circuit-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-electric-500 font-heading font-semibold tracking-wider uppercase text-sm mb-4">
            Onze Projecten
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Realisaties
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Een selectie van recent uitgevoerde elektricienswerkzaamheden voor onze klanten.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-electric-600 text-white shadow-electric"
                  : "bg-electric-900/50 text-gray-400 hover:bg-electric-900 hover:text-white"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-electric-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-circuit-dark via-circuit-dark/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Electric overlay on hover */}
                  <div className="absolute inset-0 bg-electric-600/0 group-hover:bg-electric-600/20 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block text-xs text-electric-400 uppercase tracking-wider mb-2">
                        {
                          categories.find((c) => c.id === project.category)
                            ?.label
                        }
                      </span>
                      <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-electric-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </motion.div>

                    {/* View button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="flex items-center gap-2 bg-white text-circuit-dark px-6 py-3 rounded-full font-bold">
                        <Eye className="w-5 h-5" />
                        Bekijk
                      </div>
                    </motion.div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-electric-500/0 group-hover:border-electric-500 transition-all duration-300 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-electric-500/0 group-hover:border-electric-500 transition-all duration-300 rounded-bl-lg" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="tel:020-1234567"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Zap className="w-5 h-5" fill="currentColor" />
            Start Uw Project (DEMO)
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
