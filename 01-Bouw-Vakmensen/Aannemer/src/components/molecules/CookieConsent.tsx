'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Cookie Consent Banner
 * GDPR compliant cookie notice
 */
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted
    const accepted = localStorage.getItem('cookie-consent')
    if (!accepted) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal border-t border-white/10 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-heading font-bold mb-1">Cookies</h3>
              <p className="text-white/70 text-sm">
                Wij gebruiken cookies om uw ervaring te verbeteren. Bekijk onze{' '}
                <a href="/privacy" className="text-safety hover:underline">
                  privacyverklaring
                </a>{' '}
                voor meer informatie.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                Weigeren
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-safety text-white text-sm font-semibold hover:bg-safety-dark transition-colors"
              >
                Accepteren
              </button>
            </div>
            <button
              onClick={handleDecline}
              className="absolute top-2 right-2 md:static text-white/50 hover:text-white"
              aria-label="Sluiten"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
