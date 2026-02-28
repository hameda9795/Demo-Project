"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BatteryCharging, Zap, Calculator, Check, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EVCharging() {
  const [dailyKm, setDailyKm] = useState(50)
  const recommendedKw = Math.min(22, Math.max(3.7, Math.ceil(dailyKm / 20) * 3.7))

  return (
    <section className="py-24 bg-gradient-to-b from-circuit-dark to-circuit-dark/95 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-600/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content & Calculator */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2 mb-6"
            >
              <BatteryCharging className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Trending 2024</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              Laadpaal <span className="text-electric-500 text-glow">Thuis</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              Stap over op elektrisch rijden met een professioneel geïnstalleerde thuislaadpaal. 
              Wij regelen alles van aansluiting tot configuratie.
            </motion.p>

            {/* Before/After Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-4">
                <h4 className="text-red-400 font-bold mb-2">Standaard Stopcontact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    2,3 kW laadvermogen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    20+ uur laadtijd
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    Oververhitting risico
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-900/20 border border-green-600/30 rounded-xl p-4">
                <h4 className="text-green-400 font-bold mb-2">Wallbox Laadpaal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    11-22 kW laadvermogen
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    2-4 uur laadtijd
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Veilig & getest
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-circuit-dark border border-electric-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-electric-500" />
                <h4 className="font-heading font-bold text-white">Bereken uw laadvermogen</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-400 text-sm">Dagelijks aantal kilometers</label>
                    <span className="text-electric-400 font-bold">{dailyKm} km</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={dailyKm}
                    onChange={(e) => setDailyKm(Number(e.target.value))}
                    className="w-full h-2 bg-electric-900 rounded-lg appearance-none cursor-pointer accent-electric-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20 km</span>
                    <span>200 km</span>
                  </div>
                </div>
                
                <div className="bg-electric-900/50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Aanbevolen vermogen</p>
                    <p className="text-2xl font-heading font-bold text-electric-400">
                      {recommendedKw.toFixed(1)} kW
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Laadtijd (overnacht)</p>
                    <p className="text-lg font-bold text-white">
                      ~{Math.ceil((dailyKm * 0.2) / recommendedKw)} uur
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Glow */}
              <div className="absolute -inset-4 bg-green-600/20 blur-3xl rounded-full" />
              
              <div className="relative h-full bg-gradient-to-br from-green-900 to-circuit-dark rounded-2xl overflow-hidden">
                <Image
                  src="/images/elektricien/services/ev-charging.svg"
                  alt="Laadpaal installatie"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay with charging indicator */}
                <div className="absolute inset-0 bg-gradient-to-t from-circuit-dark/80 via-transparent to-transparent" />
                
                {/* Charging animation overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-circuit-dark/90 backdrop-blur-sm rounded-xl p-4 border border-green-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-600/20 rounded-lg">
                        <Zap className="w-5 h-5 text-green-400" fill="currentColor" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Laadpaal Actief</p>
                        <p className="text-gray-400 text-sm">11 kW • 3-fase</p>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-electric-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-electric-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-400">75% opgeladen</span>
                      <span className="text-green-400">45 min resterend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { label: "KEMA Gekeurd", value: "100% Veilig" },
                { label: "Installatie", value: "In 1 Dag" },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  whileHover={{ scale: 1.02 }}
                  className="bg-circuit-dark border border-electric-800 rounded-xl p-4 text-center"
                >
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{badge.label}</p>
                  <p className="text-white font-bold">{badge.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="tel:020-1234567"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg shadow-green-600/30 transition-all"
          >
            <BatteryCharging className="w-6 h-6" />
            Vraag Laadpaal Advies aan (DEMO)
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
