"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Leaf, ArrowUpRight } from "lucide-react";

const categories = [
  { id: 'all', label: 'Alle Projecten' },
  { id: 'stadstuin', label: 'Stadstuinen' },
  { id: 'villa', label: "Villa's" },
  { id: 'bedrijfstuin', label: 'Bedrijfstuinen' },
  { id: 'dakterras', label: 'Dakterrassen' },
] as const;

const projects = [
  { id: '1', title: 'Urban Jungle', category: 'stadstuin', image: '/images/hovenier/projects/city-garden-1.jpg', location: 'Amsterdam' },
  { id: '2', title: 'Landgoed Groenveld', category: 'villa', image: '/images/hovenier/projects/villa-lawn.jpg', location: 'Haarlem' },
  { id: '3', title: 'Sky Garden', category: 'dakterras', image: '/images/hovenier/projects/roof-garden.jpg', location: 'Amsterdam' },
  { id: '4', title: 'Zen Vijvertuin', category: 'villa', image: '/images/hovenier/projects/pond-garden.jpg', location: 'Heemstede' },
  { id: '5', title: 'Kantoorpark Groen', category: 'bedrijfstuin', image: '/images/hovenier/projects/maintenance-1.jpg', location: 'Amsterdam' },
  { id: '6', title: 'Bomenexpertise', category: 'villa', image: '/images/hovenier/projects/tree-care.jpg', location: 'Zandvoort' },
  { id: '7', title: 'Lentebloesem', category: 'stadstuin', image: '/images/hovenier/projects/seasonal-spring.jpg', location: 'Amsterdam' },
  { id: '8', title: 'Herfstpracht', category: 'villa', image: '/images/hovenier/projects/seasonal-autumn.jpg', location: 'Bloemendaal' },
];

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 
            bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest-900 mb-4">
            Onze Projecten
          </h2>
          <p className="text-forest-600 text-lg">
            Een selectie van tuinen die we hebben ontworpen, aangelegd en onderhouden.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === cat.id
                  ? 'bg-forest-800 text-white'
                  : 'bg-white text-forest-700 border border-forest-200 hover:border-green-400'}`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden 
                  cursor-pointer shadow-nature hover:shadow-nature-lg transition-shadow">
                <div className={`relative ${index % 3 === 0 ? 'h-80' : index % 3 === 1 ? 'h-64' : 'h-96'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-green-400 text-xs uppercase tracking-wider">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                        <h3 className="font-serif text-xl text-white mt-1">{project.title}</h3>
                        <p className="text-white/70 text-sm flex items-center gap-1 mt-1">
                          <Leaf className="w-3 h-3" />
                          {project.location}
                        </p>
                      </div>
                      <div className="p-2 bg-white/20 rounded-full">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
