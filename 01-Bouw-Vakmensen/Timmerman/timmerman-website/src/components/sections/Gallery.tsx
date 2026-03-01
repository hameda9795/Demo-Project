/**
 * Project Gallery Section
 * Van den Berg Timmerwerken
 * 
 * "Raw to Refined" Concept
 * - Asymmetric masonry layout
 * - Filter tabs by category
 * - Unique hover effect: raw wood → finished state transition
 * - Dovetail joint underline animation on titles
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { Project } from "@/types";

type Category = "alle" | "maatwerk" | "renovatie" | "restauratie" | "tuinhuis";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "maatwerk", label: "Maatwerk meubels" },
  { id: "renovatie", label: "Renovatie" },
  { id: "restauratie", label: "Restauratie" },
  { id: "tuinhuis", label: "Tuinhuisjes" },
];

/**
 * Project Card with Raw to Refined hover effect
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${
        index % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Finished Image (Bottom Layer) */}
        <Image
          src={project.images.finished}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Raw Image Overlay (Top Layer) - Fades out on hover */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={project.images.raw}
            alt={`${project.title} - raw`}
            fill
            className="object-cover grayscale-[60%] brightness-75 contrast-75"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Raw wood texture overlay */}
          <div className="absolute inset-0 bg-[#4A5568]/20" />
        </div>

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-[#3E2723]/80 text-[#F5F5DC] rounded-full backdrop-blur-sm">
            {CATEGORIES.find((c) => c.id === project.category)?.label}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {/* Title with dovetail underline */}
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#F5F5DC] mb-2 relative inline-block">
            {project.title}
            {/* Dovetail underline */}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-500" 
              style={{ clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)" }}
            />
          </h3>

          {/* Description - appears on hover */}
          <p className="text-sm text-[#F5F5DC]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
            {project.description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 mt-3 text-xs text-[#F5F5DC]/60">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.duration}</span>
          </div>

          {/* Wood types */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.woodTypes.map((wood) => (
              <span
                key={wood}
                className="px-2 py-0.5 text-xs bg-[#8B5A2B]/30 text-[#D4AF37] rounded-full border border-[#D4AF37]/20"
              >
                {wood}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("alle");

  const filteredProjects =
    activeCategory === "alle"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projecten" className="py-24 bg-[#F5F5DC]">
      {/* Section Header */}
      <div className="section-container mb-12">
        <div className="section-inner text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[#8B5A2B] tracking-wider uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 dovetail-underline inline-block"
          >
            Onze realisaties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4A5568] max-w-2xl mx-auto"
          >
            Van ruw hout tot prachtig meubel. Bekijk onze transformaties.
          </motion.p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="section-container mb-12">
        <div className="section-inner">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#8B5A2B] text-[#F5F5DC]"
                    : "bg-white text-[#4A5568] hover:bg-[#8B5A2B]/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="section-container">
        <div className="section-inner">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* View All Button */}
      <div className="section-container mt-12">
        <div className="section-inner text-center">
          <button className="btn-secondary">
            <span>Bekijk alle projecten</span>
          </button>
        </div>
      </div>
    </section>
  );
}
