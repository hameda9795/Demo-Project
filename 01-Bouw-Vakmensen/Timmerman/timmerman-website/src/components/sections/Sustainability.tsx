/**
 * Sustainability Calculator Section
 * Van den Berg Timmerwerken
 * 
 * "Hout & Milieu" - Wood vs Other Materials comparison
 * - CO2 storage visualization
 * - FSC certification display
 * - Interactive comparison tool
 * - Tree icon with growing animation
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TreePine, 
  Leaf, 
  Factory, 
  FlaskConical,
  Check,
  Info
} from "lucide-react";
import { WOOD_TYPES } from "@/lib/data";

type MaterialType = "hout" | "kunststof" | "staal" | "aluminium";

interface MaterialData {
  name: string;
  co2PerKg: number;
  recyclable: boolean;
  renewable: boolean;
  lifespan: string;
}

const MATERIALS: Record<MaterialType, MaterialData> = {
  hout: {
    name: "Hout (Eiken)",
    co2PerKg: -0.9, // Negative = storage
    recyclable: true,
    renewable: true,
    lifespan: "50+ jaar",
  },
  kunststof: {
    name: "Kunststof",
    co2PerKg: 2.7,
    recyclable: false,
    renewable: false,
    lifespan: "15-20 jaar",
  },
  staal: {
    name: "Staal",
    co2PerKg: 1.9,
    recyclable: true,
    renewable: false,
    lifespan: "30 jaar",
  },
  aluminium: {
    name: "Aluminium",
    co2PerKg: 8.2,
    recyclable: true,
    renewable: false,
    lifespan: "40 jaar",
  },
};

export function Sustainability() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType>("kunststof");
  const [woodAmount, setWoodAmount] = useState(50); // kg of wood

  const wood = MATERIALS.hout;
  const comparison = MATERIALS[selectedMaterial];
  
  // Calculate CO2 savings
  const woodCo2 = wood.co2PerKg * woodAmount; // Negative = storage
  const otherCo2 = comparison.co2PerKg * woodAmount;
  const savings = otherCo2 - woodCo2; // Total benefit

  // Trees needed to offset the other material's CO2
  const treesEquivalent = Math.max(0, Math.round(savings / 20)); // 1 tree absorbs ~20kg CO2/year

  return (
    <section className="py-24 bg-gradient-to-b from-[#F5F5DC] to-[#E8E4D0]">
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full"
            >
              <Leaf className="w-4 h-4 text-[#22C55E]" />
              <span className="text-sm font-medium text-[#22C55E]">Duurzaamheid</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 dovetail-underline inline-block"
            >
              Hoe duurzaam is uw keuze?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4A5568] max-w-2xl mx-auto"
            >
              Hout slaat CO2 op tijdens de groei. Vergelijk met andere materialen en zie het verschil.
            </motion.p>
          </div>

          {/* Calculator */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Controls */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="font-playfair text-2xl font-bold text-[#3E2723] mb-6">
                Vergelijk materialen
              </h3>

              {/* Material Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#3E2723] mb-3">
                  Vergelijk hout met:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(MATERIALS) as MaterialType[])
                    .filter(m => m !== "hout")
                    .map((material) => (
                      <button
                        key={material}
                        onClick={() => setSelectedMaterial(material)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedMaterial === material
                            ? "border-[#8B5A2B] bg-[#8B5A2B]/5"
                            : "border-[#4A5568]/10 hover:border-[#8B5A2B]/30"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {material === "kunststof" && <FlaskConical className="w-4 h-4 text-[#4A5568]" />}
                          {material === "staal" && <Factory className="w-4 h-4 text-[#4A5568]" />}
                          {material === "aluminium" && <Factory className="w-4 h-4 text-[#4A5568]" />}
                          <span className="font-medium text-[#3E2723]">
                            {MATERIALS[material].name}
                          </span>
                        </div>
                      </button>
                    ))}
                </div>
              </div>

              {/* Wood Amount Slider */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#3E2723]">
                    Hoeveelheid hout
                  </label>
                  <span className="text-sm font-bold text-[#8B5A2B]">
                    {woodAmount} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={woodAmount}
                  onChange={(e) => setWoodAmount(parseInt(e.target.value))}
                  className="w-full h-3 bg-[#4A5568]/20 rounded-lg appearance-none cursor-pointer accent-[#8B5A2B]"
                />
                <p className="text-xs text-[#4A5568] mt-2">
                  Een gemiddeld kast gebruikt ~50kg hout
                </p>
              </div>

              {/* FSC Badge */}
              <div className="flex items-center gap-4 p-4 bg-[#22C55E]/5 rounded-xl">
                <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center shrink-0">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#3E2723]">FSC Gecertificeerd</h4>
                  <p className="text-sm text-[#4A5568]">
                    Al ons hout komt uit verantwoord beheerde bossen
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* CO2 Comparison */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="font-semibold text-[#3E2723] mb-6">CO2 Impact vergelijking</h4>
                
                <div className="space-y-4">
                  {/* Wood */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#4A5568]">Hout (Eiken)</span>
                      <span className="text-sm font-bold text-[#22C55E]">
                        {woodCo2.toFixed(1)} kg CO2
                      </span>
                    </div>
                    <div className="h-4 bg-[#22C55E]/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#22C55E] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p className="text-xs text-[#22C55E] mt-1">Opslag (positief!)</p>
                  </div>

                  {/* Comparison Material */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#4A5568]">{comparison.name}</span>
                      <span className="text-sm font-bold text-[#EF4444]">
                        +{otherCo2.toFixed(1)} kg CO2
                      </span>
                    </div>
                    <div className="h-4 bg-[#EF4444]/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#EF4444] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((otherCo2 / Math.abs(woodCo2)) * 100, 100)}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>
                    <p className="text-xs text-[#EF4444] mt-1">Uitstoot</p>
                  </div>
                </div>
              </div>

              {/* Savings Card */}
              <div className="bg-[#3E2723] rounded-2xl p-8 text-[#F5F5DC]">
                <div className="flex items-start gap-6">
                  {/* Growing Tree Animation */}
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TreePine className="w-16 h-16 text-[#22C55E]" />
                    </motion.div>
                    {/* Growing particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 left-1/2 w-2 h-2 bg-[#22C55E] rounded-full"
                        animate={{
                          y: [-20, -40],
                          opacity: [1, 0],
                          x: [0, (i - 1) * 10],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  <div>
                    <h4 className="font-playfair text-2xl font-bold text-[#D4AF37] mb-2">
                      U bespaart
                    </h4>
                    <p className="text-4xl font-bold text-[#22C55E] mb-2">
                      {savings.toFixed(1)} kg CO2
                    </p>
                    <p className="text-[#F5F5DC]/70">
                      Door te kiezen voor hout in plaats van {comparison.name.toLowerCase()}
                    </p>
                  </div>
                </div>

                {treesEquivalent > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#F5F5DC]/10">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[...Array(Math.min(treesEquivalent, 5))].map((_, i) => (
                          <TreePine key={i} className="w-6 h-6 text-[#22C55E]" />
                        ))}
                      </div>
                      <p className="text-sm">
                        Dat staat gelijk aan de jaarlijkse CO2-opname van{" "}
                        <span className="font-bold text-[#22C55E]">{treesEquivalent} bomen</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <Check className="w-6 h-6 text-[#22C55E] mb-2" />
                  <p className="font-medium text-[#3E2723]">Hernieuwbaar</p>
                  <p className="text-sm text-[#4A5568]">Bossen groeien na</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <Check className="w-6 h-6 text-[#22C55E] mb-2" />
                  <p className="font-medium text-[#3E2723]">Biologisch afbreekbaar</p>
                  <p className="text-sm text-[#4A5568]">Aan het einde van de levenscyclus</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
