'use client'

import { AlertTriangle, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white relative z-[60]"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>⚠️ DEMO WEBSITE - Alle gegevens zijn fictief / Voor demonstratiedoeleinden</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Sluit waarschuwing"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

export function DemoBadge() {
  return (
    <div className="absolute top-4 right-4 z-20">
      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
        DEMO
      </span>
    </div>
  )
}

export function DemoWarningBox() {
  return (
    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="bg-red-100 p-3 rounded-full">
          <AlertTriangle className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-red-700 mb-2">
            DEMO - Geen echte contactgegevens
          </h3>
          <p className="text-red-600">
            Deze website is een demonstratie. Alle contactgegevens, prijzen en projecten zijn fictief. 
            Voor echte schilderdiensten bezoek onze partner website.
          </p>
        </div>
      </div>
    </div>
  )
}

export function DemoFooterNote() {
  return (
    <div className="bg-amber-100 border-t-2 border-amber-300 p-4 text-center">
      <p className="text-amber-800 font-medium text-sm">
        Dit is een demonstratie website. Voor echte diensten bezoek:{" "}
        <a 
          href="https://techsolutionsutrecht.nl/contact" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 ml-2 px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-colors"
        >
          Tech Solutions Utrecht
        </a>
      </p>
    </div>
  )
}
