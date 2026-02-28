"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sun, Cloud, CloudRain, Droplets, Leaf } from "lucide-react";

const sunFilters = [
  { id: 'all', label: 'Alle', icon: undefined },
  { id: 'zon', label: 'Zon', icon: Sun },
  { id: 'halfschaduw', label: 'Halfschaduw', icon: Cloud },
  { id: 'schaduw', label: 'Schaduw', icon: CloudRain },
] as const;

const plants = [
  {
    id: '1',
    name: 'Hortensia',
    latinName: 'Hydrangea macrophylla',
    image: '/images/hovenier/plants/hydrangea.jpg',
    sunExposure: 'halfschaduw' as const,
    waterNeeds: 'hoog' as const,
    seasonColor: '#e879f9',
    description: 'Prachtige bloeiende struik met grote bloemhoofden.',
  },
  {
    id: '2',
    name: 'Lavendel',
    latinName: 'Lavandula angustifolia',
    image: '/images/hovenier/plants/lavender.jpg',
    sunExposure: 'zon' as const,
    waterNeeds: 'laag' as const,
    seasonColor: '#a855f7',
    description: 'Geurige borderplant, geliefd bij bijen.',
  },
  {
    id: '3',
    name: 'Japanse Esdoorn',
    latinName: 'Acer palmatum',
    image: '/images/hovenier/plants/maple.jpg',
    sunExposure: 'halfschaduw' as const,
    waterNeeds: 'gemiddeld' as const,
    seasonColor: '#ef4444',
    description: 'Sierlijke boom met prachtig blad.',
  },
  {
    id: '4',
    name: 'Buxus',
    latinName: 'Buxus sempervirens',
    image: '/images/hovenier/plants/buxus.jpg',
    sunExposure: 'schaduw' as const,
    waterNeeds: 'gemiddeld' as const,
    seasonColor: '#16a34a',
    description: 'Klassieke haagplant, perfect voor vormsnoei.',
  },
  {
    id: '5',
    name: 'Siergrassen',
    latinName: 'Miscanthus sinensis',
    image: '/images/hovenier/plants/grass.jpg',
    sunExposure: 'zon' as const,
    waterNeeds: 'laag' as const,
    seasonColor: '#d97706',
    description: 'Sierlijke grassen voor beweging in de tuin.',
  },
  {
    id: '6',
    name: 'Vaste Planten Mix',
    latinName: 'Perennials',
    image: '/images/hovenier/plants/perennials.jpg',
    sunExposure: 'zon' as const,
    waterNeeds: 'gemiddeld' as const,
    seasonColor: '#f59e0b',
    description: 'Gemengde border met seizoensgebonden bloei.',
  },
];

const waterIcons: Record<string, number> = {
  laag: 1,
  gemiddeld: 2,
  hoog: 3,
};

export function PlantDatabase() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPlants = activeFilter === 'all'
    ? plants
    : plants.filter(p => p.sunExposure === activeFilter);

  return (
    <section className="py-24 bg-wood">
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
            Plantenkennis
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest-900 mb-4">
            Geschikte Planten
          </h2>
          <p className="text-forest-600 text-lg">
            Een selectie van inheemse en gevestigde planten die het goed doen 
            in Nederlandse tuinen.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sunFilters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full 
                  text-sm font-medium transition-all duration-300
                  ${isActive
                    ? 'bg-green-600 text-white shadow-glow'
                    : 'bg-white text-forest-700 border border-forest-200 hover:border-green-400'}`}>
                {Icon && <Icon className="w-4 h-4" />}
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Plants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-nature 
                hover:shadow-nature-lg transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-white"
                  style={{ backgroundColor: plant.seasonColor }} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-forest-900 mb-1">{plant.name}</h3>
                <p className="text-forest-500 text-sm italic mb-3">{plant.latinName}</p>
                <p className="text-forest-600 text-sm mb-4">{plant.description}</p>

                {/* Icons */}
                <div className="flex items-center gap-4 pt-4 border-t border-forest-100">
                  {/* Sun */}
                  <div className="flex items-center gap-1.5 text-forest-500">
                    <Sun className="w-4 h-4" />
                    <span className="text-xs capitalize">{plant.sunExposure}</span>
                  </div>
                  {/* Water */}
                  <div className="flex items-center gap-1 text-forest-500">
                    {[...Array(3)].map((_, i) => (
                      <Droplets
                        key={i}
                        className={`w-3 h-3 ${
                          i < waterIcons[plant.waterNeeds] ? 'text-blue-500 fill-blue-500' : 'text-forest-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
