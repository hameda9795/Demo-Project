/**
 * Storm Damage Alert Component
 * Dakwerken Van der Berg
 * 
 * @description Prominent emergency banner for storm damage
 * Pulsing animation, emergency phone, and closable
 * Only shows on first load (using localStorage)
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Phone, X, Wind } from "lucide-react";
import { companyInfo, telLink, formatPhone } from "@/lib/utils";

export function StormAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the alert before
    const dismissed = localStorage.getItem("storm-alert-dismissed");
    const dismissedTime = dismissed ? parseInt(dismissed, 10) : 0;
    const oneDay = 24 * 60 * 60 * 1000;
    
    // Show if never dismissed or dismissed more than 24 hours ago
    if (!dismissed || Date.now() - dismissedTime > oneDay) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("storm-alert-dismissed", Date.now().toString());
    setTimeout(() => setIsDismissed(true), 500);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-24 left-4 right-4 md:left-auto md:right-8 md:w-[480px] z-40"
        >
          <div className="relative bg-gradient-to-br from-emergency-red to-red-700 text-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 20px,
                    rgba(255,255,255,0.1) 20px,
                    rgba(255,255,255,0.1) 40px
                  )`,
                }}
              />
            </div>

            {/* Pulsing Alert Ring */}
            <div className="absolute top-4 left-4">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-white/30"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Melding sluiten"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative p-6">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Wind className="w-7 h-7 text-emergency-red" />
                </motion.div>

                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-5 h-5 text-yellow-300" />
                    <span className="font-bold text-sm uppercase tracking-wider text-yellow-300">
                      Noodhulp beschikbaar
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-2">
                    Stormschade? Wij helpen direct!
                  </h3>

                  <p className="text-white/90 text-sm mb-4">
                    Na storm of extreem weer direct hulp nodig? Wij zijn 24/7 
                    bereikbaar voor noodreparaties. Snel ter plaatse in heel 
                    de regio Utrecht.
                  </p>

                  {/* Emergency Phone */}
                  <a
                    href={telLink(companyInfo.mobile)}
                    className="group flex items-center gap-3 bg-white text-emergency-red px-5 py-3 rounded-xl font-heading font-bold text-lg shadow-lg hover:bg-yellow-300 transition-colors"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Phone className="w-6 h-6" />
                    </motion.div>
                    <span>{formatPhone(companyInfo.mobile)}</span>
                  </a>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/70">
                    <span>✓ Directe spoedhulp</span>
                    <span>✓ Tijdelijke reparatie</span>
                    <span>✓ All-risk verzekerd</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
