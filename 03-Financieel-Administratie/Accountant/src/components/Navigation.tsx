"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#over-ons", label: "Over Ons" },
  { href: "#testimonials", label: "Klanten" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? "bg-warm-cream/95 backdrop-blur-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50" data-cursor-hover>
              <motion.div
                className="flex flex-col"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="font-display text-xl lg:text-2xl font-semibold tracking-tight text-warm-charcoal">
                  VAN DEN BERG
                </span>
                <span className="text-caption text-warm-taupe">
                  Accountants & Adviseurs
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <ul className="flex items-center gap-10">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative font-display text-sm tracking-wide text-warm-charcoal hover:text-warm-terracotta transition-colors group"
                      data-cursor-hover
                    >
                      <span className="text-warm-taupe text-xs mr-2">0{index + 1}</span>
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-warm-terracotta transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Login Button */}
              <Link
                href="/login"
                className="flex items-center gap-2 px-5 py-2.5 bg-warm-charcoal text-warm-cream font-display text-sm tracking-wide hover:bg-warm-terracotta transition-colors"
                data-cursor-hover
              >
                <User className="w-4 h-4" />
                <span>Inloggen</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center"
              data-cursor-hover
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-warm-charcoal" />
                ) : (
                  <Menu className="w-6 h-6 text-warm-charcoal" />
                )}
              </motion.div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-warm-cream lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-center items-start h-full px-8 pt-20">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline gap-4 py-4"
                      data-cursor-hover
                    >
                      <span className="text-caption text-warm-taupe">0{index + 1}</span>
                      <span className="font-display text-4xl font-medium text-warm-charcoal">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-8 py-4 bg-warm-charcoal text-warm-cream font-display"
                  data-cursor-hover
                >
                  <User className="w-5 h-5" />
                  <span>Inloggen voor Klanten</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
