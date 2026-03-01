'use client';

/**
 * Cookie Consent Banner
 * 
 * Elegant, bottom-positioned banner with gold accents
 * GDPR compliant demo
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-md border-t border-gold/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">
                    Cookievoorkeuren
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm max-w-xl">
                    Deze DEMO website gebruikt cookies om uw ervaring te verbeteren. 
                    Door verder te gaan accepteert u ons gebruik van cookies.{' '}
                    <a href="#" className="text-gold hover:underline">
                      Meer informatie
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none px-4 py-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  Weigeren
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-6 py-2 bg-gold text-navy font-medium text-sm rounded-lg hover:bg-gold-light transition-colors"
                >
                  Accepteren
                </button>
                <button
                  onClick={handleDecline}
                  className="p-2 text-white/50 hover:text-white transition-colors sm:hidden"
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
  );
}
