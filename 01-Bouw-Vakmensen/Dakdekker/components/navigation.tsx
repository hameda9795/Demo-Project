/**
 * Navigation Component
 * Dakwerken Van der Berg
 * 
 * @description Fixed navigation that transitions from transparent to solid on scroll
 * Implements the Roof Angle Design System with subtle animations
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { companyInfo, telLink, cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Offerte", href: "#offerte" },
  { label: "Kennis", href: "/dakenkennis/" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change (simulated with click)
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Icon - Stylized roof */}
              <div
                className={cn(
                  "w-10 h-10 relative transition-all duration-300",
                  isScrolled ? "bg-safety-orange" : "bg-white"
                )}
                style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
              >
                <div
                  className={cn(
                    "absolute inset-1 flex items-center justify-center font-heading font-bold text-lg",
                    isScrolled ? "text-white" : "text-roof-slate"
                  )}
                  style={{ clipPath: "polygon(50% 10%, 90% 90%, 10% 90%)" }}
                >
                  VdB
                </div>
              </div>
              <div className="hidden sm:block">
                <div
                  className={cn(
                    "font-heading font-bold text-lg leading-tight transition-colors duration-300",
                    isScrolled ? "text-storm-gray" : "text-white"
                  )}
                >
                  Dakwerken
                </div>
                <div
                  className={cn(
                    "font-heading text-sm transition-colors duration-300",
                    isScrolled ? "text-roof-slate" : "text-white/80"
                  )}
                >
                  Van der Berg
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-medium text-sm tracking-wide underline-tile transition-colors duration-300",
                    isScrolled
                      ? "text-storm-gray hover:text-safety-orange"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={telLink(companyInfo.mobile)}
                className={cn(
                  "flex items-center gap-2 font-heading font-semibold transition-all duration-300",
                  isScrolled ? "text-safety-orange" : "text-white"
                )}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Phone className="w-5 h-5" />
                </motion.div>
                <span>{companyInfo.mobile}</span>
              </a>
              <Link
                href="#offerte"
                className="btn-tile text-sm"
              >
                <span>Gratis Offerte</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors duration-300",
                isScrolled ? "text-storm-gray" : "text-white"
              )}
              aria-label={isMobileMenuOpen ? "Menu sluiten" : "Menu openen"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-storm-gray/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl pt-20"
            >
              <nav className="flex flex-col p-6 gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="block py-3 px-4 text-lg font-heading font-medium text-storm-gray hover:text-safety-orange hover:bg-safety-orange/5 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-6 pt-6 border-t border-storm-gray/10">
                  <a
                    href={telLink(companyInfo.mobile)}
                    className="flex items-center gap-3 py-3 px-4 text-lg font-heading font-semibold text-safety-orange"
                  >
                    <Phone className="w-5 h-5" />
                    {companyInfo.mobile}
                  </a>
                  <Link
                    href="#offerte"
                    onClick={handleNavClick}
                    className="btn-tile w-full mt-4"
                  >
                    <span>Gratis Offerte</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Call Button */}
      <a
        href={telLink(companyInfo.mobile)}
        className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-6 rounded-xl font-heading font-bold shadow-xl"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Phone className="w-5 h-5" />
        </motion.div>
        Direct Bellen
      </a>
    </>
  );
}
