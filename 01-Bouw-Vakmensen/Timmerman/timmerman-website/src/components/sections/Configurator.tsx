/**
 * Maatwerk Configurator
 * Van den Berg Timmerwerken
 * 
 * Interactive furniture builder
 * - Step-by-step configuration
 * - Furniture type selection
 * - Wood type selection
 * - Dimensions input
 * - Options (drawers, doors, handles)
 * - Live price estimation
 */

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Table, 
  Bed, 
  DoorOpen, 
  Ruler,
  ChevronRight,
  ChevronLeft,
  Calculator,
  Check,
  Box,
  ArrowUp
} from "lucide-react";
import { FURNITURE_TYPES, WOOD_TYPES } from "@/lib/data";
import { ConfiguratorState, FurnitureType } from "@/types";

// Icon mapping for furniture types
const furnitureIcons: Record<string, React.ReactNode> = {
  cabinet: <Box className="w-8 h-8" />,
  table: <Table className="w-8 h-8" />,
  bed: <Bed className="w-8 h-8" />,
  door: <DoorOpen className="w-8 h-8" />,
  stairs: <ArrowUp className="w-8 h-8" />,
};

// Wood price multipliers
const woodMultipliers: Record<string, number> = {
  eiken: 1.3,
  walnoot: 1.8,
  beuken: 1.0,
  grenen: 0.7,
  bamboe: 1.4,
};

export function Configurator() {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<ConfiguratorState>({
    furnitureType: null,
    woodType: null,
    dimensions: { length: 120, width: 60, height: 80 },
    options: { drawers: 0, doors: 0, handleType: "Klassiek" },
  });

  const selectedFurniture = FURNITURE_TYPES.find(f => f.id === config.furnitureType);
  const selectedWood = WOOD_TYPES.find(w => w.id === config.woodType);

  // Calculate estimated price
  const estimatedPrice = useMemo(() => {
    if (!selectedFurniture) return 0;

    let price = selectedFurniture.basePrice;
    
    // Wood multiplier
    if (config.woodType) {
      price *= woodMultipliers[config.woodType] || 1;
    }

    // Size factor (base size is 120x60x80)
    const baseVolume = 120 * 60 * 80;
    const actualVolume = config.dimensions.length * config.dimensions.width * config.dimensions.height;
    const sizeFactor = Math.sqrt(actualVolume / baseVolume);
    price *= sizeFactor;

    // Options
    if (selectedFurniture.options.drawers) {
      price += config.options.drawers * selectedFurniture.options.drawers.pricePerUnit;
    }
    if (selectedFurniture.options.doors) {
      price += config.options.doors * selectedFurniture.options.doors.pricePerUnit;
    }
    if (selectedFurniture.options.handles) {
      const handleIndex = selectedFurniture.options.handles.types.indexOf(config.options.handleType);
      price += selectedFurniture.options.handles.prices[handleIndex] || 0;
    }

    return Math.round(price / 50) * 50; // Round to nearest 50
  }, [config, selectedFurniture]);

  const steps = [
    { id: 1, title: "Type", description: "Kies meubel" },
    { id: 2, title: "Hout", description: "Selecteer hout" },
    { id: 3, title: "Maten", description: "Geef afmetingen" },
    { id: 4, title: "Opties", description: "Extra's" },
  ];

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section id="maatwerk" className="py-24 bg-[#F5F5DC]">
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-[#8B5A2B] tracking-wider uppercase mb-4"
            >
              Configurator
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 dovetail-underline inline-block"
            >
              Ontwerp uw meubel
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4A5568] max-w-2xl mx-auto"
            >
              Configureer uw droommeubel en ontvang direct een indicatie van de kosten.
            </motion.p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-center">
              <div className="flex items-center gap-2 sm:gap-4">
                {steps.map((s, index) => (
                  <div key={s.id} className="flex items-center">
                    <div className={`flex flex-col items-center ${
                      step >= s.id ? "text-[#8B5A2B]" : "text-[#4A5568]/50"
                    }`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        step > s.id 
                          ? "bg-[#22C55E] text-white" 
                          : step === s.id 
                            ? "bg-[#8B5A2B] text-white" 
                            : "bg-[#4A5568]/10"
                      }`}>
                        {step > s.id ? <Check className="w-5 h-5" /> : s.id}
                      </div>
                      <span className="hidden sm:block text-xs mt-1 font-medium">{s.title}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 sm:w-16 h-0.5 mx-2 transition-colors ${
                        step > s.id ? "bg-[#8B5A2B]" : "bg-[#4A5568]/20"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Configurator Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Config Area */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Step 1: Furniture Type */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {FURNITURE_TYPES.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setConfig(c => ({ ...c, furnitureType: type.id }));
                          handleNext();
                        }}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          config.furnitureType === type.id
                            ? "border-[#8B5A2B] bg-[#8B5A2B]/5"
                            : "border-[#4A5568]/10 hover:border-[#8B5A2B]/30"
                        }`}
                      >
                        <div className="text-[#8B5A2B] mb-3">{furnitureIcons[type.icon]}</div>
                        <h3 className="font-semibold text-[#3E2723] mb-1">{type.name}</h3>
                        <p className="text-sm text-[#4A5568]">{type.description}</p>
                        <p className="mt-3 text-sm font-medium text-[#8B5A2B]">
                          Vanaf €{type.basePrice.toLocaleString()}
                        </p>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Wood Type */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {WOOD_TYPES.map((wood) => (
                      <button
                        key={wood.id}
                        onClick={() => {
                          setConfig(c => ({ ...c, woodType: wood.id }));
                          handleNext();
                        }}
                        className={`relative overflow-hidden rounded-xl border-2 text-left transition-all ${
                          config.woodType === wood.id
                            ? "border-[#8B5A2B] ring-2 ring-[#D4AF37]"
                            : "border-[#4A5568]/10 hover:border-[#8B5A2B]/30"
                        }`}
                      >
                        <div className="relative h-32">
                          <Image
                            src={wood.image}
                            alt={wood.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="font-semibold text-white">{wood.name}</h3>
                            <p className="text-xs text-white/80">
                              {wood.priceLevel === 1 && "€"}
                              {wood.priceLevel === 2 && "€€"}
                              {wood.priceLevel === 3 && "€€€"}
                              {wood.priceLevel === 4 && "€€€€"}
                              {wood.priceLevel === 5 && "€€€€€"}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 3: Dimensions */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Ruler className="w-6 h-6 text-[#8B5A2B]" />
                      <h3 className="font-playfair text-xl font-bold text-[#3E2723]">
                        Afmetingen (cm)
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {[
                        { key: "length", label: "Lengte", min: 50, max: 300 },
                        { key: "width", label: "Breedte", min: 30, max: 150 },
                        { key: "height", label: "Hoogte", min: 30, max: 250 },
                      ].map((dim) => (
                        <div key={dim.key}>
                          <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-[#3E2723]">
                              {dim.label}
                            </label>
                            <span className="text-sm text-[#8B5A2B] font-semibold">
                              {config.dimensions[dim.key as keyof typeof config.dimensions]} cm
                            </span>
                          </div>
                          <input
                            type="range"
                            min={dim.min}
                            max={dim.max}
                            value={config.dimensions[dim.key as keyof typeof config.dimensions]}
                            onChange={(e) => setConfig(c => ({
                              ...c,
                              dimensions: {
                                ...c.dimensions,
                                [dim.key]: parseInt(e.target.value)
                              }
                            }))}
                            className="w-full h-2 bg-[#4A5568]/20 rounded-lg appearance-none cursor-pointer accent-[#8B5A2B]"
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      className="btn-primary w-full mt-8"
                    >
                      <span>Volgende stap</span>
                    </button>
                  </motion.div>
                )}

                {/* Step 4: Options */}
                {step === 4 && selectedFurniture && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <h3 className="font-playfair text-xl font-bold text-[#3E2723] mb-6">
                      Extra opties
                    </h3>

                    <div className="space-y-6">
                      {/* Drawers */}
                      {selectedFurniture.options.drawers && (
                        <div>
                          <label className="text-sm font-medium text-[#3E2723] mb-2 block">
                            Aantal lades
                          </label>
                          <div className="flex gap-2">
                            {[...Array(selectedFurniture.options.drawers.max + 1)].map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setConfig(c => ({
                                  ...c,
                                  options: { ...c.options, drawers: i }
                                }))}
                                className={`w-12 h-12 rounded-lg font-semibold transition-colors ${
                                  config.options.drawers === i
                                    ? "bg-[#8B5A2B] text-white"
                                    : "bg-[#4A5568]/10 text-[#4A5568] hover:bg-[#8B5A2B]/20"
                                }`}
                              >
                                {i}
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-[#4A5568] mt-1">
                            +€{selectedFurniture.options.drawers.pricePerUnit} per lade
                          </p>
                        </div>
                      )}

                      {/* Doors */}
                      {selectedFurniture.options.doors && (
                        <div>
                          <label className="text-sm font-medium text-[#3E2723] mb-2 block">
                            Aantal deuren
                          </label>
                          <div className="flex gap-2">
                            {[...Array(selectedFurniture.options.doors.max + 1)].map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setConfig(c => ({
                                  ...c,
                                  options: { ...c.options, doors: i }
                                }))}
                                className={`w-12 h-12 rounded-lg font-semibold transition-colors ${
                                  config.options.doors === i
                                    ? "bg-[#8B5A2B] text-white"
                                    : "bg-[#4A5568]/10 text-[#4A5568] hover:bg-[#8B5A2B]/20"
                                }`}
                              >
                                {i}
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-[#4A5568] mt-1">
                            +€{selectedFurniture.options.doors.pricePerUnit} per deur
                          </p>
                        </div>
                      )}

                      {/* Handles */}
                      {selectedFurniture.options.handles && (
                        <div>
                          <label className="text-sm font-medium text-[#3E2723] mb-2 block">
                            Type greep
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {selectedFurniture.options.handles.types.map((type, index) => (
                              <button
                                key={type}
                                onClick={() => setConfig(c => ({
                                  ...c,
                                  options: { ...c.options, handleType: type }
                                }))}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  config.options.handleType === type
                                    ? "bg-[#8B5A2B] text-white"
                                    : "bg-[#4A5568]/10 text-[#4A5568] hover:bg-[#8B5A2B]/20"
                                }`}
                              >
                                {type}
                                {selectedFurniture.options.handles!.prices[index] > 0 && (
                                  <span className="ml-1 text-xs">
                                    (+€{selectedFurniture.options.handles!.prices[index]})
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrev}
                  disabled={step === 1}
                  className="flex items-center gap-2 px-6 py-3 text-[#4A5568] hover:text-[#8B5A2B] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Terug
                </button>
                
                {step === 4 && (
                  <a
                    href="#contact"
                    className="btn-primary"
                  >
                    <span>Vraag exacte offerte aan</span>
                  </a>
                )}
              </div>
            </div>

            {/* Summary Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-[#3E2723] rounded-2xl p-6 text-[#F5F5DC]">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="font-playfair text-xl font-bold">Uw configuratie</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {selectedFurniture ? (
                    <div className="flex justify-between py-2 border-b border-[#F5F5DC]/10">
                      <span className="text-[#F5F5DC]/70">Type</span>
                      <span className="font-medium">{selectedFurniture.name}</span>
                    </div>
                  ) : (
                    <div className="text-[#F5F5DC]/50 italic">Selecteer een meubeltype</div>
                  )}

                  {selectedWood && (
                    <div className="flex justify-between py-2 border-b border-[#F5F5DC]/10">
                      <span className="text-[#F5F5DC]/70">Hout</span>
                      <span className="font-medium">{selectedWood.name}</span>
                    </div>
                  )}

                  {step >= 3 && (
                    <div className="flex justify-between py-2 border-b border-[#F5F5DC]/10">
                      <span className="text-[#F5F5DC]/70">Maten</span>
                      <span className="font-medium text-sm">
                        {config.dimensions.length}×{config.dimensions.width}×{config.dimensions.height} cm
                      </span>
                    </div>
                  )}

                  {step >= 4 && config.options.drawers > 0 && (
                    <div className="flex justify-between py-2 border-b border-[#F5F5DC]/10">
                      <span className="text-[#F5F5DC]/70">Lades</span>
                      <span className="font-medium">{config.options.drawers}</span>
                    </div>
                  )}

                  {step >= 4 && config.options.doors > 0 && (
                    <div className="flex justify-between py-2 border-b border-[#F5F5DC]/10">
                      <span className="text-[#F5F5DC]/70">Deuren</span>
                      <span className="font-medium">{config.options.doors}</span>
                    </div>
                  )}
                </div>

                {estimatedPrice > 0 && (
                  <div className="pt-4 border-t border-[#D4AF37]/30">
                    <p className="text-sm text-[#F5F5DC]/70 mb-1">Geschatte prijs</p>
                    <p className="font-playfair text-3xl font-bold text-[#D4AF37]">
                      Vanaf €{estimatedPrice.toLocaleString()}
                    </p>
                    <p className="text-xs text-[#F5F5DC]/50 mt-2">
                      * Dit is een indicatie. Vraag een exacte offerte aan.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
