"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, AlertTriangle, Zap } from "lucide-react"

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 border-y-2 border-red-500 overflow-hidden"
        >
          {/* Electric spark animation on border */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.5,
              }}
            />
          </div>

          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: Warning text */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  className="p-2 bg-yellow-500/20 rounded-full"
                >
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <div>
                  <p className="text-white font-bold text-lg">Stroomstoring?</p>
                  <p className="text-red-200 text-sm">
                    Bel direct onze spoedlijn - 24/7 beschikbaar
                  </p>
                </div>
              </div>

              {/* Center: Phone number */}
              <motion.a
                href="tel:020-1234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white text-red-900 px-6 py-3 rounded-full font-bold text-xl shadow-lg"
              >
                <Phone className="w-5 h-5" />
                020-1234567 (DEMO)
              </motion.a>

              {/* Right: Emergency CTA */}
              <motion.a
                href="tel:020-1234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-electric flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-red-600/30"
              >
                <Zap className="w-5 h-5" fill="currentColor" />
                SPOED: Stroom eruit?
              </motion.a>

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 p-1 text-red-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
