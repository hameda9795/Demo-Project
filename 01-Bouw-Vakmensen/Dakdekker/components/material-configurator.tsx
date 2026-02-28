/**
 * Roof Material Configurator Component
 * Dakwerken Van der Berg
 * 
 * @description Interactive visual selector for roof materials
 * Step-by-step: house type → material → price estimate
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Check, ChevronRight, ChevronLeft, Calculator } from "lucide-react";
import type { HouseType, RoofMaterial } from "@/types";
import { formatPrice } from "@/lib/utils";

type Step = 1 | 2 | 3;

// Configuration data
const houseTypes: { type: HouseType; label: string; icon: string; basePrice: number }[] = [
  { type: "bungalow", label: "Bungalow", icon: "🏠", basePrice: 15000 },
  { type: "hoekhuis", label: "Hoekhuis", icon: "🏘️", basePrice: 18000 },
  { type: "tussenwoning", label: "Tussenwoning", icon: "🏡", basePrice: 16000 },
  { type: "vrijstaand", label: "Vrijstaand", icon: "🏰", basePrice: 25000 },
];

const materials: { 
  id: RoofMaterial; 
  label: string; 
  color: string; 
  priceMultiplier: number;
  description: string;
}[] = [
  { 
    id: "dakpannen-rood", 
    label: "Rode dakpannen", 
    color: "#b91c1c", 
    priceMultiplier: 1,
    description: "Klassieke rode pannen, tijdloos en betaalbaar"
  },
  { 
    id: "dakpannen-bruin", 
    label: "Bruine dakpannen", 
    color: "#92400e", 
    priceMultiplier: 1.05,
    description: "Warme uitstraling, past bij veel woningen"
  },
  { 
    id: "dakpannen-zwart", 
    label: "Zwarte dakpannen", 
    color: "#1f2937", 
    priceMultiplier: 1.1,
    description: "Modern en stijlvol"
  },
  { 
    id: "leien-grijs", 
    label: "Grijze leien", 
    color: "#6b7280", 
    priceMultiplier: 1.5,
    description: "Premium uitstraling, zeer duurzaam"
  },
  { 
    id: "leien-zwart", 
    label: "Zwarte leien", 
    color: "#111827", 
    priceMultiplier: 1.6,
    description: "Authentiek en exclusief"
  },
  { 
    id: "zink", 
    label: "Zink", 
    color: "#71717a", 
    priceMultiplier: 1.8,
    description: "Moderne look, onderhoudsarm"
  },
];

export function MaterialConfigurator() {
  const [step, setStep] = useState<Step>(1);
  const [selectedHouse, setSelectedHouse] = useState<HouseType | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<RoofMaterial | null>(null);
  const [roofSize, setRoofSize] = useState<string>("100-150");

  const calculatePrice = () => {
    const house = houseTypes.find((h) => h.type === selectedHouse);
    const material = materials.find((m) => m.id === selectedMaterial);
    
    if (!house || !material) return { min: 0, max: 0 };

    const sizeMultiplier = roofSize === "50-100" ? 0.8 : roofSize === "100-150" ? 1 : roofSize === "150-200" ? 1.3 : 1.6;
    const base = house.basePrice * material.priceMultiplier * sizeMultiplier;
    
    return {
      min: Math.round(base * 0.9),
      max: Math.round(base * 1.1),
    };
  };

  const price = calculatePrice();

  const handleNext = () => {
    if (step < 3) setStep((s) => (s + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const canProceed = 
    (step === 1 && selectedHouse) || 
    (step === 2 && selectedMaterial) ||
    step === 3;

  return (
    <section id="offerte" className="py-24 bg-cloud-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-safety-orange/10 text-safety-orange font-semibold text-sm rounded-full mb-4">
            Offerte Configurator
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-storm-gray mb-6">
            Bereken uw <span className="text-safety-orange">prijsindicatie</span>
          </h2>
          <p className="text-lg text-storm-gray/70 max-w-2xl mx-auto">
            Selecteer uw woningtype en gewenste materiaal voor een indicatie 
            van de kosten. Voor een exacte offerte nemen wij contact met u op.
          </p>
        </motion.div>

        {/* Configurator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="bg-storm-gray/5 p-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((s, i) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      step >= s
                        ? "bg-safety-orange text-white"
                        : "bg-storm-gray/20 text-storm-gray/50"
                    }`}
                  >
                    {s}
                  </div>
                  {i < 2 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-colors ${
                        step > s ? "bg-safety-orange" : "bg-storm-gray/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-md mx-auto mt-2 text-sm text-storm-gray/60">
              <span>Woning</span>
              <span>Materiaal</span>
              <span>Resultaat</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* Step 1: House Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-storm-gray mb-2">
                    Kies uw woningtype
                  </h3>
                  <p className="text-storm-gray/70 mb-8">
                    Selecteer het type woning waarvan u het dak wilt laten vervangen of renoveren.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {houseTypes.map((house) => (
                      <button
                        key={house.type}
                        onClick={() => setSelectedHouse(house.type)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                          selectedHouse === house.type
                            ? "border-safety-orange bg-safety-orange/5"
                            : "border-storm-gray/10 hover:border-safety-orange/50"
                        }`}
                      >
                        <div className="text-4xl mb-3">{house.icon}</div>
                        <div className="font-semibold text-storm-gray">
                          {house.label}
                        </div>
                        {selectedHouse === house.type && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 w-6 h-6 bg-safety-orange rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Roof Size */}
                  <div className="mt-8">
                    <label className="block text-sm font-semibold text-storm-gray mb-3">
                      Geschatte dakoppervlakte (m²)
                    </label>
                    <select
                      value={roofSize}
                      onChange={(e) => setRoofSize(e.target.value)}
                      className="w-full md:w-auto px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none"
                    >
                      <option value="50-100">50 - 100 m²</option>
                      <option value="100-150">100 - 150 m²</option>
                      <option value="150-200">150 - 200 m²</option>
                      <option value="200+">200+ m²</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Material */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-storm-gray mb-2">
                    Kies uw dakbedekking
                  </h3>
                  <p className="text-storm-gray/70 mb-8">
                    Selecteer het gewenste materiaal. De prijsindicatie wordt automatisch bijgewerkt.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {materials.map((material) => (
                      <button
                        key={material.id}
                        onClick={() => setSelectedMaterial(material.id)}
                        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                          selectedMaterial === material.id
                            ? "border-safety-orange bg-safety-orange/5"
                            : "border-storm-gray/10 hover:border-safety-orange/50"
                        }`}
                      >
                        {/* Color Swatch */}
                        <div
                          className="w-16 h-16 rounded-xl mb-4 shadow-inner"
                          style={{ backgroundColor: material.color }}
                        />
                        <div className="font-semibold text-storm-gray mb-1">
                          {material.label}
                        </div>
                        <div className="text-sm text-storm-gray/60">
                          {material.description}
                        </div>
                        
                        {selectedMaterial === material.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-6 h-6 bg-safety-orange rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Result */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-storm-gray mb-2">
                    Uw prijsindicatie
                  </h3>
                  <p className="text-storm-gray/70 mb-8">
                    Op basis van uw keuzes hebben wij een indicatie berekend. 
                    Vraag een gratis offerte aan voor een exacte prijs.
                  </p>

                  <div className="bg-storm-gray/5 rounded-2xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-safety-orange/10 rounded-xl flex items-center justify-center">
                        <Calculator className="w-8 h-8 text-safety-orange" />
                      </div>
                      <div>
                        <div className="text-sm text-storm-gray/60">Geschatte investering</div>
                        <div className="font-heading text-4xl font-bold text-storm-gray">
                          {formatPrice(price.min)} - {formatPrice(price.max)}
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-storm-gray/10">
                      <div>
                        <div className="text-sm text-storm-gray/60 mb-1">Woningtype</div>
                        <div className="font-semibold text-storm-gray">
                          {houseTypes.find((h) => h.type === selectedHouse)?.label}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-storm-gray/60 mb-1">Materiaal</div>
                        <div className="font-semibold text-storm-gray">
                          {materials.find((m) => m.id === selectedMaterial)?.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-tile flex-1">
                      <span>Vraag exacte offerte aan</span>
                    </button>
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 border-2 border-storm-gray/20 rounded-xl font-semibold text-storm-gray hover:border-safety-orange hover:text-safety-orange transition-colors"
                    >
                      Opnieuw beginnen
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 3 && (
              <div className="flex justify-between mt-8 pt-8 border-t border-storm-gray/10">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
                    step === 1
                      ? "text-storm-gray/30 cursor-not-allowed"
                      : "text-storm-gray hover:text-safety-orange"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Terug
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                    canProceed
                      ? "bg-safety-orange text-white hover:bg-safety-orange/90 shadow-lg"
                      : "bg-storm-gray/20 text-storm-gray/40 cursor-not-allowed"
                  }`}
                >
                  Verder
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
