/**
 * Seasonal Check Reminder Component
 * Dakwerken Van der Berg
 * 
 * @description Rotating tips based on current season
 * Features animated icons (falling leaf, snow, sun)
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Snowflake, Sun, CloudRain, Calendar, ArrowRight } from "lucide-react";
import { getCurrentSeason } from "@/lib/utils";
import type { SeasonalTip } from "@/types";

const seasonalTips: Record<string, SeasonalTip> = {
  spring: {
    season: "spring",
    title: "Voorjaarscheck: voorkom lekkage",
    description: "Na de winter is het tijd om uw dak te controleren op eventuele schade door vorst en sneeuw. Een kleine reparatie nu voorkomt grote kosten later.",
    icon: "Sun",
    action: "Plan een gratis inspectie",
  },
  summer: {
    season: "summer",
    title: "Zomer: ideaal voor renovatie",
    description: "De zomermaanden zijn perfect voor dakwerkzaamheden. Droog weer betekent snellere uitvoering en minder vertraging.",
    icon: "Sun",
    action: "Vraag een offerte aan",
  },
  autumn: {
    season: "autumn",
    title: "Laat uw dakgoot controleren voor bladval",
    description: "Voordat de bladeren vallen, is het verstandig om uw goten te laten reinigen. Verstopte goten kunnen leiden tot waterschade.",
    icon: "Leaf",
    action: "Plan dakgoot onderhoud",
  },
  winter: {
    season: "winter",
    title: "Controleer op stormschade",
    description: "Storm en extreme regenval kunnen uw dak belasten. Controleer na hevig weer op losse pannen of lekkages.",
    icon: "Snowflake",
    action: "Spoedhulp nodig? Bel ons",
  },
};

// Animation components for each season
function LeafAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, x: Math.random() * 200 - 100, rotate: 0, opacity: 0 }}
          animate={{
            y: 200,
            x: Math.random() * 100 - 50,
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2"
        >
          <Leaf className="w-6 h-6 text-orange-500/60" />
        </motion.div>
      ))}
    </div>
  );
}

function SnowAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, x: Math.random() * 300, opacity: 0 }}
          animate={{
            y: 250,
            x: Math.random() * 50,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
          className="absolute top-0"
          style={{ left: `${Math.random() * 100}%` }}
        >
          <Snowflake className="w-4 h-4 text-blue-200/60" />
        </motion.div>
      ))}
    </div>
  );
}

function SunAnimation() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -right-10 -top-10 w-40 h-40 opacity-20 pointer-events-none"
    >
      <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-dashed" />
    </motion.div>
  );
}

export function SeasonalTips() {
  const [currentSeason, setCurrentSeason] = useState(getCurrentSeason());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const tip = seasonalTips[currentSeason];

  // Auto-rotate through seasons for demo purposes
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const seasons: Array<"spring" | "summer" | "autumn" | "winter"> = ["spring", "summer", "autumn", "winter"];
    let index = seasons.indexOf(currentSeason);
    
    const interval = setInterval(() => {
      index = (index + 1) % seasons.length;
      setCurrentSeason(seasons[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSeason]);

  const handleManualSelect = (season: typeof currentSeason) => {
    setCurrentSeason(season);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const iconMap = {
    Sun: Sun,
    Leaf: Leaf,
    Snowflake: Snowflake,
    CloudRain: CloudRain,
  };

  const SeasonIcon = iconMap[tip.icon as keyof typeof iconMap] || Sun;

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 to-cloud-white relative overflow-hidden">
      {/* Background Decorations */}
      {currentSeason === "autumn" && <LeafAnimation />}
      {currentSeason === "winter" && <SnowAnimation />}
      {currentSeason === "spring" && <SunAnimation />}
      {currentSeason === "summer" && <SunAnimation />}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Season Selector */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-sky-blue/10 text-sky-blue font-semibold text-sm rounded-full mb-4">
              <Calendar className="w-4 h-4 inline mr-2" />
              Seizoensgebonden tips
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-storm-gray mb-6">
              Slimme tips voor elk <span className="text-sky-blue">seizoen</span>
            </h2>
            <p className="text-lg text-storm-gray/70 mb-8">
              Uw dak heeft elk seizoen andere aandacht nodig. Bekijk onze tips 
              en zorg dat uw dak optimaal beschermd is, het hele jaar door.
            </p>

            {/* Season Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(["spring", "summer", "autumn", "winter"] as const).map((season) => {
                const isActive = currentSeason === season;
                const labels = {
                  spring: "Lente",
                  summer: "Zomer",
                  autumn: "Herfst",
                  winter: "Winter",
                };
                const colors = {
                  spring: "text-green-500 bg-green-50",
                  summer: "text-yellow-500 bg-yellow-50",
                  autumn: "text-orange-500 bg-orange-50",
                  winter: "text-blue-500 bg-blue-50",
                };
                const activeColors = {
                  spring: "bg-green-500 text-white",
                  summer: "bg-yellow-500 text-white",
                  autumn: "bg-orange-500 text-white",
                  winter: "bg-blue-500 text-white",
                };

                return (
                  <button
                    key={season}
                    onClick={() => handleManualSelect(season)}
                    className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      isActive ? activeColors[season] : colors[season]
                    }`}
                  >
                    {labels[season]}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Tip Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSeason}
                initial={{ opacity: 0, y: 20, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -20, rotate: -2 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Background */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-10 ${
                    currentSeason === "spring" ? "bg-green-500" :
                    currentSeason === "summer" ? "bg-yellow-500" :
                    currentSeason === "autumn" ? "bg-orange-500" :
                    "bg-blue-500"
                  }`}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                    currentSeason === "spring" ? "bg-green-100 text-green-600" :
                    currentSeason === "summer" ? "bg-yellow-100 text-yellow-600" :
                    currentSeason === "autumn" ? "bg-orange-100 text-orange-600" :
                    "bg-blue-100 text-blue-600"
                  }`}
                >
                  <SeasonIcon className="w-10 h-10" />
                </motion.div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-storm-gray mb-4">
                  {tip.title}
                </h3>
                <p className="text-storm-gray/70 mb-6 leading-relaxed">
                  {tip.description}
                </p>

                {/* CTA */}
                <button className="group flex items-center gap-2 text-safety-orange font-semibold hover:gap-4 transition-all">
                  <span>{tip.action}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-storm-gray/10">
                  <motion.div
                    key={currentSeason}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className={`h-full ${
                      currentSeason === "spring" ? "bg-green-500" :
                      currentSeason === "summer" ? "bg-yellow-500" :
                      currentSeason === "autumn" ? "bg-orange-500" :
                      "bg-blue-500"
                    }`}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
