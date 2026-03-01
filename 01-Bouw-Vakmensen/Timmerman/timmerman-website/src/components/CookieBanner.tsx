/**
 * Cookie Banner Component
 * Van den Berg Timmerwerken
 * 
 * GDPR-compliant cookie consent banner
 * Functional cookies only - no tracking in this demo
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

/**
 * CookieBanner Component
 * Displays cookie consent notice
 */
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#3E2723] border-t border-[#8B5A2B]/30"
        >
          <div className="section-container py-4">
            <div className="section-inner">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Icon */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#8B5A2B]/20 shrink-0">
                  <Cookie className="w-6 h-6 text-[#D4AF37]" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-playfair text-base font-semibold text-[#F5F5DC] mb-1">
                    Cookie instellingen
                  </h3>
                  <p className="text-sm text-[#F5F5DC]/70">
                    Deze DEMO website gebruikt alleen functionele cookies. 
                    Geen tracking of marketing cookies worden geplaatst. 
                    <a href="#" className="text-[#D4AF37] hover:underline ml-1">
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleDecline}
                    className="flex-1 sm:flex-none px-4 py-2 text-sm text-[#F5F5DC]/70 hover:text-[#F5F5DC] transition-colors"
                  >
                    Weigeren
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium text-[#3E2723] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors"
                  >
                    Accepteren
                  </button>
                </div>

                {/* Close button */}
                <button
                  onClick={handleDecline}
                  className="absolute top-4 right-4 sm:static p-1 text-[#F5F5DC]/50 hover:text-[#F5F5DC] transition-colors"
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
