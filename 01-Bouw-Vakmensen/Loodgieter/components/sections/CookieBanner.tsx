'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Cookie Banner component
 * GDPR compliant cookie consent banner
 * Appears at bottom of page
 */
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-deep-navy mb-1">
                  Cookie instellingen
                </h3>
                <p className="text-sm text-gray-600">
                  Wij gebruiken cookies om uw ervaring te verbeteren. 
                  Functionele cookies zijn altijd actief. 
                  <a href="/privacy/" className="text-water-blue hover:underline ml-1">
                    Meer informatie
                  </a>
                </p>
              </div>
              
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Weigeren
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-water-blue text-white text-sm font-medium rounded-full hover:bg-deep-navy transition-colors"
                >
                  Accepteren
                </button>
                <button
                  onClick={handleDecline}
                  className="sm:hidden p-2 text-gray-400 hover:text-gray-600"
                  aria-label="Sluiten"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
