/**
 * Cookie Banner Component
 * Dakwerken Van der Berg
 * 
 * @description GDPR compliant cookie consent banner
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      date: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      ...preferences,
      date: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleDecline = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      date: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-white border-t border-storm-gray/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {!showPreferences ? (
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-safety-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-safety-orange" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-storm-gray mb-2">
                        Cookie instellingen
                      </h3>
                      <p className="text-storm-gray/70 text-sm max-w-xl">
                        Wij gebruiken cookies om uw ervaring te verbeteren. 
                        Noodzakelijke cookies zijn altijd actief. Bekijk ons{" "}
                        <a href="#" className="text-safety-orange hover:underline">
                          cookiebeleid
                        </a>{" "}
                        voor meer informatie.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="flex items-center gap-2 px-4 py-3 border-2 border-storm-gray/20 rounded-xl font-semibold text-storm-gray hover:border-safety-orange hover:text-safety-orange transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Voorkeuren
                    </button>
                    <button
                      onClick={handleDecline}
                      className="px-4 py-3 border-2 border-storm-gray/20 rounded-xl font-semibold text-storm-gray hover:border-storm-gray transition-colors"
                    >
                      Alleen noodzakelijk
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 bg-safety-orange text-white font-semibold rounded-xl hover:bg-safety-orange/90 transition-colors"
                    >
                      Alle cookies accepteren
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-xl text-storm-gray">
                      Cookie voorkeuren
                    </h3>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="p-2 hover:bg-storm-gray/5 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-storm-gray" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Necessary Cookies */}
                    <div className="flex items-start justify-between p-4 bg-storm-gray/5 rounded-xl">
                      <div>
                        <div className="font-semibold text-storm-gray mb-1">
                          Noodzakelijk
                        </div>
                        <p className="text-sm text-storm-gray/60">
                          Deze cookies zijn essentieel voor het functioneren van de website.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={preferences.necessary}
                          disabled
                          className="w-12 h-6 bg-safety-orange rounded-full appearance-none cursor-not-allowed opacity-60"
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between p-4 bg-storm-gray/5 rounded-xl">
                      <div>
                        <div className="font-semibold text-storm-gray mb-1">
                          Analytisch
                        </div>
                        <p className="text-sm text-storm-gray/60">
                          Helpen ons de website te verbeteren door anonieme gebruiksdata te verzamelen.
                        </p>
                      </div>
                      <label className="relative cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) =>
                            setPreferences((p) => ({ ...p, analytics: e.target.checked }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-12 h-6 bg-storm-gray/20 peer-focus:ring-2 peer-focus:ring-safety-orange rounded-full peer peer-checked:bg-safety-orange transition-colors" />
                        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6" />
                      </label>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between p-4 bg-storm-gray/5 rounded-xl">
                      <div>
                        <div className="font-semibold text-storm-gray mb-1">
                          Marketing
                        </div>
                        <p className="text-sm text-storm-gray/60">
                          Gebruikt voor gepersonaliseerde advertenties en social media.
                        </p>
                      </div>
                      <label className="relative cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) =>
                            setPreferences((p) => ({ ...p, marketing: e.target.checked }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-12 h-6 bg-storm-gray/20 peer-focus:ring-2 peer-focus:ring-safety-orange rounded-full peer peer-checked:bg-safety-orange transition-colors" />
                        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6" />
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="px-6 py-3 border-2 border-storm-gray/20 rounded-xl font-semibold text-storm-gray hover:border-safety-orange hover:text-safety-orange transition-colors"
                    >
                      Annuleren
                    </button>
                    <button
                      onClick={handleAcceptSelected}
                      className="px-6 py-3 bg-safety-orange text-white font-semibold rounded-xl hover:bg-safety-orange/90 transition-colors"
                    >
                      Voorkeuren opslaan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
