/**
 * Projects Gallery Component
 * Dakwerken Van der Berg
 * 
 * @description Masonry grid with filter tabs, before/after hover effect
 * Uses Swiper.js for mobile gallery view
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import type { Project, ProjectCategory } from "@/types";

// Project data with realistic roofing scenarios
const projects: Project[] = [
  {
    id: "1",
    title: "Stormschade Herstel",
    location: "Utrecht",
    category: "dakpannen",
    description: "Complete herstel van stormschade inclusief vervanging van 200+ dakpannen en reparatie van beschadigde lattage.",
    beforeImage: "/images/dakdekker/projects/before-storm.jpg",
    afterImage: "/images/dakdekker/projects/after-renovation.jpg",
    images: [],
    materials: ["Monier stonewold", "Eiken lattage"],
    completionDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Moderne Villa",
    location: "Amsterdam",
    category: "leien",
    description: "Plaatsing van natuurleien op een moderne villa met complex dakontwerp en meerdere vlakken.",
    beforeImage: "/images/dakdekker/projects/modern-house.jpg",
    afterImage: "/images/dakdekker/projects/after-renovation.jpg",
    images: [],
    materials: ["Natuurlei", "Koperen dakkapellen"],
    completionDate: "2023-11-20",
  },
  {
    id: "3",
    title: "Traditionele Woning",
    location: "Hilversum",
    category: "dakpannen",
    description: "Renovatie van jaren '30 woning met behoud van authentieke uitstraling en modern comfort.",
    beforeImage: "/images/dakdekker/projects/traditional-house.jpg",
    afterImage: "/images/dakdekker/projects/after-renovation.jpg",
    images: [],
    materials: ["Vieilliards rood", "Zinken dakgoten"],
    completionDate: "2023-09-08",
  },
  {
    id: "4",
    title: "Zakelijke Ruimte",
    location: "Amersfoort",
    category: "zink",
    description: "Vervanging van plat dak op bedrijfspand met moderne zinken afwerking en verbeterde isolatie.",
    beforeImage: "/images/dakdekker/projects/commercial-building.jpg",
    afterImage: "/images/dakdekker/projects/after-renovation.jpg",
    images: [],
    materials: ["Zinken kolommen", "PIR isolatie"],
    completionDate: "2024-02-01",
  },
  {
    id: "5",
    title: "Zonne-energie Integratie",
    location: "Breukelen",
    category: "solar",
    description: "Combinatie van dakrenovatie met zonnepanelen installatie voor maximale energiebesparing.",
    beforeImage: "/images/dakdekker/projects/modern-house.jpg",
    afterImage: "/images/dakdekker/projects/solar-roof.jpg",
    images: [],
    materials: ["SunPower panelen", "Enphase omvormers"],
    completionDate: "2023-12-10",
  },
  {
    id: "6",
    title: "Dakgoot Vervanging",
    location: "De Bilt",
    category: "hout",
    description: "Complete vervanging van houten dakgoten met prefab zinken systemen inclusief bladroosters.",
    beforeImage: "/images/dakdekker/projects/detail-work.jpg",
    afterImage: "/images/dakdekker/projects/after-renovation.jpg",
    images: [],
    materials: ["Zinken bakgoten", "RVS bladroosters"],
    completionDate: "2024-01-25",
  },
  {
    id: "7",
    title: "Nieuwbouw Project",
    location: "Zeist",
    category: "dakpannen",
    description: "Complete dakaanleg voor nieuwbouw woning met moderne keramische pannen.",
    beforeImage: "/images/dakdekker/projects/modern-house.jpg",
    afterImage: "/images/dakdekker/projects/after-renovation.jpg",
    images: [],
    materials: ["Wienerberger Koramic", "Rhenofol onderdak"],
    completionDate: "2023-10-15",
  },
  {
    id: "8",
    title: "Monumentaal Pand",
    location: "Baarn",
    category: "leien",
    description: "Zorgvuldige restauratie van monumentaal pand met traditionele leitechnieken.",
    beforeImage: "/images/dakdekker/projects/traditional-house.jpg",
    afterImage: "/images/dakdekker/projects/detail-work.jpg",
    images: [],
    materials: ["Historische lei", "Traditioneel lood"],
    completionDate: "2023-08-20",
  },
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "alle", label: "Alle" },
  { value: "dakpannen", label: "Dakpannen" },
  { value: "leien", label: "Leien" },
  { value: "zink", label: "Zink" },
  { value: "hout", label: "Hout" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("alle");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const filteredProjects =
    activeCategory === "alle"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projecten" className="py-24 bg-storm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-safety-orange/20 text-safety-orange font-semibold text-sm rounded-full mb-4">
            Onze Realisaties
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Projecten in de <span className="text-safety-orange">regio</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Bekijk onze recente dakprojecten. Van stormschade herstel tot 
            complete renovaties - kwaliteit die u kunt zien.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-safety-orange text-white shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""
                } ${index % 5 === 0 ? "lg:row-span-2" : ""}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* Image - Grayscale initially, color on hover */}
                  <Image
                    src={project.beforeImage}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-storm-gray via-storm-gray/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-safety-orange font-semibold text-sm">
                          Bekijk resultaat
                        </span>
                        <ChevronRight className="w-4 h-4 text-safety-orange" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-storm-gray">
                    {categories.find((c) => c.value === project.category)?.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-storm-gray/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2">
                {/* Image Section with Before/After Toggle */}
                <div className="relative aspect-[4/3] bg-storm-gray">
                  <Image
                    src={showBefore ? selectedProject.beforeImage : selectedProject.afterImage}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />

                  {/* Toggle */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex bg-white/90 backdrop-blur-sm rounded-full p-1">
                    <button
                      onClick={() => setShowBefore(true)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        showBefore ? "bg-storm-gray text-white" : "text-storm-gray"
                      }`}
                    >
                      Voor
                    </button>
                    <button
                      onClick={() => setShowBefore(false)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        !showBefore ? "bg-safety-orange text-white" : "text-storm-gray"
                      }`}
                    >
                      Na
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-safety-orange text-sm font-medium mb-3">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                    <span className="text-storm-gray/30">|</span>
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedProject.completionDate).toLocaleDateString("nl-NL")}
                  </div>

                  <h3 className="font-heading text-3xl font-bold text-storm-gray mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-storm-gray/70 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-storm-gray mb-3">Gebruikte materialen:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.materials.map((material, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cloud-white rounded-full text-sm text-storm-gray"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-tile w-full">
                    <span>Vergelijkbaar project aanvragen</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
