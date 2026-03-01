/**
 * Wood Type Selector Section
 * Van den Berg Timmerwerken
 * 
 * Interactive wood selection component
 * - Horizontal scroll/grid of wood samples
 * - Scratch test animation on hover
 * - Janka hardness visualization
 * - Price indicators
 * - Sticky "Jouw keuze" sidebar
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, Info, Leaf, Euro } from "lucide-react";
import { WOOD_TYPES } from "@/lib/data";
import { WoodType } from "@/types";

/**
 * Price level renderer
 * Shows € to €€€€€ based on price level
 */
function PriceIndicator({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Euro
          key={i}
          className={`w-3 h-3 ${
            i < level ? "text-[#D4AF37]" : "text-[#4A5568]/30"
          }`}
        />
      ))}
    </div>
  );
}

/**
 * Hardness bar visualization
 */
function HardnessBar({ level }: { level: string }) {
  const [current, max] = level.split("/").map(Number);
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-[#3E2723]/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(current / max) * 100}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      <span className="text-xs text-[#4A5568] font-medium whitespace-nowrap">
        {level}
      </span>
    </div>
  );
}

export function WoodSelector() {
  const [selectedWood, setSelectedWood] = useState<WoodType | null>(null);
  const [hoveredWood, setHoveredWood] = useState<string | null>(null);

  return (
    <section id="houtsoorten" className="relative py-24 bg-[#F5F5DC]">
      {/* Section Header */}
      <div className="section-container mb-16">
        <div className="section-inner text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[#8B5A2B] tracking-wider uppercase mb-4"
          >
            Materialen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 dovetail-underline inline-block"
          >
            Kies uw houtsoort
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4A5568] max-w-2xl mx-auto"
          >
            Elk houtsoort heeft zijn eigen karakter. Vergelijk hardheid, duurzaamheid en uitstraling.
          </motion.p>
        </div>
      </div>

      {/* Wood Cards Grid */}
      <div className="section-container">
        <div className="section-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {WOOD_TYPES.map((wood, index) => (
              <motion.div
                key={wood.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedWood(wood)}
                onMouseEnter={() => setHoveredWood(wood.id)}
                onMouseLeave={() => setHoveredWood(null)}
                className={`relative group cursor-pointer rounded-xl overflow-hidden card-lift ${
                  selectedWood?.id === wood.id
                    ? "ring-4 ring-[#D4AF37] ring-offset-4 ring-offset-[#F5F5DC]"
                    : ""
                }`}
              >
                {/* Wood Grain Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={wood.image}
                    alt={`${wood.name} houtnerf textuur`}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredWood === wood.id ? "scale-110" : "scale-100"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  
                  {/* Scratch reveal overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-[#3E2723]/60 via-[#4A5568]/40 to-transparent transition-opacity duration-500 ${
                      hoveredWood === wood.id ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Selection indicator */}
                  {selectedWood?.id === wood.id && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#3E2723]" />
                    </div>
                  )}

                  {/* Wood name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#3E2723] to-transparent">
                    <h3 className="font-playfair text-xl font-bold text-[#F5F5DC]">
                      {wood.name}
                    </h3>
                    <p className="text-sm text-[#F5F5DC]/70">{wood.nameEn}</p>
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-4 bg-white">
                  <HardnessBar level={wood.hardnessLabel} />
                  
                  <div className="flex items-center justify-between mt-3">
                    <PriceIndicator level={wood.priceLevel} />
                    
                    {wood.sustainability.fscCertified && (
                      <div className="flex items-center gap-1 text-[#22C55E]">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs font-medium">FSC</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Wood Detail Panel */}
      <AnimatePresence>
        {selectedWood && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="section-container mt-12"
          >
            <div className="section-inner">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#8B5A2B]/10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={selectedWood.image}
                      alt={selectedWood.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Right: Details */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="font-playfair text-3xl font-bold text-[#3E2723]">
                        {selectedWood.name}
                      </h3>
                      <PriceIndicator level={selectedWood.priceLevel} />
                    </div>

                    <p className="text-[#4A5568] mb-6">{selectedWood.description}</p>

                    {/* Characteristics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#3E2723] mb-3">Kenmerken</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedWood.characteristics.map((char) => (
                          <li key={char} className="flex items-center gap-2 text-sm text-[#4A5568]">
                            <Check className="w-4 h-4 text-[#8B5A2B]" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sustainability Stats */}
                    <div className="flex items-center gap-6 p-4 bg-[#22C55E]/5 rounded-xl">
                      <Leaf className="w-8 h-8 text-[#22C55E]" />
                      <div>
                        <p className="font-semibold text-[#3E2723]">
                          {selectedWood.sustainability.co2Storage} kg CO₂ opgeslagen per m³
                        </p>
                        <p className="text-sm text-[#4A5568]">
                          {selectedWood.sustainability.localSourced 
                            ? "Lokaal geoogst in Nederland" 
                            : "FSC gecertificeerd duurzaam"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Jouw Keuze Sticky Bar */}
      <AnimatePresence>
        {selectedWood && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-0 right-0 z-30 px-4"
          >
            <div className="max-w-md mx-auto">
              <div className="bg-[#3E2723] text-[#F5F5DC] rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8B5A2B] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#F5F5DC]/70">Uw keuze</p>
                    <p className="font-semibold">{selectedWood.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedWood(null)}
                  className="text-sm text-[#D4AF37] hover:underline"
                >
                  Wijzigen
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
