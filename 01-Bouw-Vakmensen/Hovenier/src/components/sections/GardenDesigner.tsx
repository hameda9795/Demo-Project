"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Home, Building, 
  Minus, Leaf, Waves, Sun, Carrot,
  Check, ArrowRight, ArrowLeft 
} from "lucide-react";

const gardenTypes = [
  { id: 'stadstuin', label: 'Stadstuin', icon: Building2, desc: 'Compact & efficiënt' },
  { id: 'villa', label: 'Villa Tuin', icon: Home, desc: 'Ruim & representatief' },
  { id: 'bedrijfstuin', label: 'Bedrijfstuin', icon: Building, desc: 'Professioneel & groen' },
] as const;

const gardenStyles = [
  { id: 'modern', label: 'Modern', color: 'from-gray-700 to-gray-900' },
  { id: 'landelijk', label: 'Landelijk', color: 'from-green-600 to-green-800' },
  { id: 'mediterraans', label: 'Mediterraans', color: 'from-amber-600 to-orange-700' },
  { id: 'ecologisch', label: 'Ecologisch', color: 'from-emerald-500 to-teal-700' },
] as const;

const gardenFeatures = [
  { id: 'vijver', label: 'Vijver', icon: Waves, price: 2500 },
  { id: 'terras', label: 'Terras', icon: Minus, price: 1800 },
  { id: 'bomen', label: 'Bomen', icon: Leaf, price: 800 },
  { id: 'moestuin', label: 'Moestuin', icon: Carrot, price: 600 },
  { id: 'verlichting', label: 'Verlichting', icon: Sun, price: 1200 },
] as const;

const basePrices: Record<string, number> = {
  stadstuin: 3500,
  villa: 8500,
  bedrijfstuin: 12000,
};

const styleMultipliers: Record<string, number> = {
  modern: 1.1,
  landelijk: 1.0,
  mediterraans: 1.15,
  ecologisch: 0.95,
};

export function GardenDesigner() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    type: '',
    style: '',
    features: [] as string[],
  });

  const calculatePrice = () => {
    if (!selection.type) return 0;
    let price = basePrices[selection.type];
    if (selection.style) {
      price *= styleMultipliers[selection.style];
    }
    selection.features.forEach(featureId => {
      const feature = gardenFeatures.find(f => f.id === featureId);
      if (feature) price += feature.price;
    });
    return Math.round(price);
  };

  const getBackgroundGradient = () => {
    if (!selection.style) return 'from-forest-900 to-forest-800';
    const style = gardenStyles.find(s => s.id === selection.style);
    return style?.color || 'from-forest-900 to-forest-800';
  };

  return (
    <section className={`py-24 bg-gradient-to-br ${getBackgroundGradient()} transition-all duration-700`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 
            bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Ontwerp Tool
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            TuinOntwerper
          </h2>
          <p className="text-white/80 text-lg">
            Ontwerp uw droomtuin in 3 eenvoudige stappen en ontvang een indicatie van de investering.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="flex justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                s === step ? 'w-12 bg-green-400' : 
                s < step ? 'w-8 bg-green-400/50' : 'w-8 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Tool Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* Step 1: Garden Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6">
                  <h3 className="font-serif text-2xl text-forest-900 text-center">
                    Kies uw tuintype
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {gardenTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selection.type === type.id;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelection({ ...selection, type: type.id })}
                          className={`p-8 rounded-2xl border-2 transition-all duration-300 text-center
                            ${isSelected 
                              ? 'border-green-600 bg-green-50' 
                              : 'border-forest-200 hover:border-green-400 hover:bg-green-50/50'}`}>
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                            ${isSelected ? 'bg-green-600' : 'bg-forest-100'}`}>
                            <Icon className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-forest-600'}`} />
                          </div>
                          <h4 className="font-serif text-lg text-forest-900 mb-1">{type.label}</h4>
                          <p className="text-forest-500 text-sm">{type.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Style */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6">
                  <h3 className="font-serif text-2xl text-forest-900 text-center">
                    Kies uw stijl
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {gardenStyles.map((style) => {
                      const isSelected = selection.style === style.id;
                      return (
                        <button
                          key={style.id}
                          onClick={() => setSelection({ ...selection, style: style.id })}
                          className={`relative h-32 rounded-2xl overflow-hidden transition-all duration-300
                            ${isSelected ? 'ring-4 ring-green-600 scale-105' : 'hover:scale-105'}`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-80`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-serif text-xl">{style.label}</span>
                          </div>
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-6 h-6 
                              bg-white rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Features & Result */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6">
                  <h3 className="font-serif text-2xl text-forest-900 text-center">
                    Kies gewenste elementen
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {gardenFeatures.map((feature) => {
                      const Icon = feature.icon;
                      const isSelected = selection.features.includes(feature.id);
                      return (
                        <button
                          key={feature.id}
                          onClick={() => {
                            const newFeatures = isSelected
                              ? selection.features.filter(f => f !== feature.id)
                              : [...selection.features, feature.id];
                            setSelection({ ...selection, features: newFeatures });
                          }}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 text-center
                            ${isSelected 
                              ? 'border-green-600 bg-green-50' 
                              : 'border-forest-200 hover:border-green-300'}`}>
                          <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? 'text-green-600' : 'text-forest-400'}`} />
                          <p className="text-sm font-medium text-forest-800">{feature.label}</p>
                          <p className="text-xs text-forest-500">+€{feature.price.toLocaleString()}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Price Result */}
                  <div className="bg-forest-50 rounded-2xl p-8 text-center">
                    <p className="text-forest-600 mb-2">Geschatte investering vanaf:</p>
                    <p className="font-serif text-5xl text-forest-900 mb-4">
                      €{calculatePrice().toLocaleString()}
                    </p>
                    <p className="text-forest-500 text-sm mb-6">
                      * Dit is een indicatie. Voor een exacte offerte neem contact met ons op.
                    </p>
                    <a
                      href="https://techsolutionsutrecht.nl/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 
                        bg-green-600 text-white rounded-full font-medium
                        hover:bg-green-700 transition-colors">
                      Vraag adviesgesprek aan
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t border-forest-100">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors
                  ${step === 1 
                    ? 'text-forest-300 cursor-not-allowed' 
                    : 'text-forest-700 hover:bg-forest-100'}`}>
                <ArrowLeft className="w-5 h-5" />
                Terug
              </button>
              <button
                onClick={() => setStep(Math.min(3, step + 1))}
                disabled={step === 3}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors
                  ${step === 3 
                    ? 'text-forest-300 cursor-not-allowed' 
                    : 'bg-forest-800 text-white hover:bg-forest-700'}`}>
                Volgende
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
