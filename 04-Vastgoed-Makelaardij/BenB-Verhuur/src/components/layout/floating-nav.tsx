"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Search, Calendar, User, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/vakantiehuizen", label: "Zoeken", icon: Search },
  { href: "/gastenportaal", label: "Boekingen", icon: Calendar },
  { href: "/login", label: "Account", icon: User },
];

const desktopNavItems = [
  { href: "/", label: "Home" },
  { href: "/vakantiehuizen", label: "Vakantiehuizen" },
  { href: "/voor-eigenaren", label: "Voor Eigenaren" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 p-3 rounded-full glass shadow-2xl shadow-charcoal/10 transition-all duration-300",
          isScrolled && "shadow-charcoal/20"
        )}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative p-3 rounded-full transition-all duration-300 group",
                isActive
                  ? "bg-terracotta text-white"
                  : "hover:bg-cream-200 text-charcoal"
              )}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              {/* Tooltip */}
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-charcoal text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="desktop-nav-indicator"
                  className="absolute inset-0 bg-terracotta rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </motion.nav>

      {/* Desktop Top Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300 hidden lg:block",
          isScrolled && "glass shadow-lg"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-terracotta rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">V</span>
            </div>
            <span className="font-display font-bold text-xl text-charcoal">
              VakantieHuizen <span className="text-terracotta">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-8">
            {desktopNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-terracotta",
                  pathname === item.href
                    ? "text-terracotta"
                    : "text-charcoal/70"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 text-lg">
              <span className="cursor-pointer">🇳🇱</span>
              <span className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity">🇬🇧</span>
              <span className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity">🇩🇪</span>
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+31205550199"
              className="flex items-center gap-2 px-4 py-2 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Bel ons</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden"
      >
        <div className="flex items-center gap-1 p-2 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl shadow-charcoal/20 border border-white/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-terracotta text-white"
                    : "text-charcoal/60 hover:text-charcoal"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
              </Link>
            );
          })}
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="text-[10px] mt-0.5 font-medium">Menu</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 pb-28"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xl font-bold text-charcoal">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-cream-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-charcoal" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-2">
                {desktopNavItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center py-3 px-4 rounded-xl text-lg font-medium transition-colors",
                        pathname === item.href
                          ? "bg-terracotta/10 text-terracotta"
                          : "text-charcoal hover:bg-cream-100"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-cream-200">
                <a
                  href="tel:+31205550199"
                  className="flex items-center gap-3 py-3 text-charcoal"
                >
                  <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60">Bel ons direct</p>
                    <p className="font-medium">+31 20 555 0199</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
