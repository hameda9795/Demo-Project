/**
 * Header Component
 * Van den Berg Timmerwerken
 * 
 * Features:
 * - Sticky navigation with blur backdrop
 * - Demo badge clearly visible
 * - Dropdown menu for "Diensten"
 * - Admin and Klant Login buttons
 * - Mobile hamburger menu
 * - Wood grain accent line
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Hammer,
  Lock,
  User,
  LogOut,
} from "lucide-react";
import { NavItem } from "@/types";

/**
 * Navigation structure
 * Center-aligned navigation with dropdown support
 */
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Diensten",
    href: "#diensten",
    children: [
      { label: "Maatwerk Meubels", href: "#maatwerk" },
      { label: "Renovatie", href: "#renovatie" },
      { label: "Restauratie", href: "#restauratie" },
      { label: "Tuinhuisjes", href: "#tuinhuisjes" },
    ],
  },
  { label: "Projecten", href: "#projecten" },
  { label: "Over Ons", href: "#over-ons" },
  { label: "Blog", href: "/werkplaats-nieuws/" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5F5DC]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Wood grain accent line at top */}
      <div className="h-1 bg-gradient-to-r from-[#8B5A2B] via-[#D4AF37] to-[#8B5A2B]" />

      <div className="section-container">
        <div className="section-inner">
          <nav className="flex items-center justify-between h-20">
            {/* Left: Logo and Demo Badge */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3 group">
                {/* Logo Icon - Hammer with wood grain effect */}
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B5A2B] to-[#3E2723] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <Hammer className="w-6 h-6 text-[#D4AF37]" />
                </div>
                
                {/* Company Name */}
                <div className="hidden sm:block">
                  <span className="font-playfair text-xl font-bold text-[#3E2723] leading-tight">
                    Van den Berg
                  </span>
                  <span className="block text-xs text-[#8B5A2B] tracking-wider uppercase">
                    Timmerwerken
                  </span>
                </div>
              </Link>

              {/* DEMO Badge */}
              <span className="demo-badge hidden md:inline-flex">
                DEMO WEBSITE
              </span>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#3E2723] hover:text-[#8B5A2B] transition-colors rounded-md hover:bg-[#8B5A2B]/5"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[#8B5A2B]/10 overflow-hidden"
                      >
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-[#3E2723] hover:bg-[#8B5A2B]/5 hover:text-[#8B5A2B] transition-colors border-b border-[#8B5A2B]/5 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right: Admin & Login Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/admin/"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4A5568] hover:text-[#8B5A2B] border border-[#4A5568]/30 hover:border-[#8B5A2B] rounded-lg transition-all"
              >
                <Lock className="w-4 h-4" />
                Admin
              </Link>
              <Link
                href="/portal/"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4A5568] hover:text-[#8B5A2B] border border-[#4A5568]/30 hover:border-[#8B5A2B] rounded-lg transition-all"
              >
                <User className="w-4 h-4" />
                Klant Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#3E2723] hover:text-[#8B5A2B] transition-colors"
              aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#F5F5DC] border-t border-[#8B5A2B]/10"
          >
            <div className="section-container py-4">
              {/* DEMO Badge - Mobile */}
              <div className="mb-4">
                <span className="demo-badge">DEMO WEBSITE</span>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-[#3E2723] hover:bg-[#8B5A2B]/5 rounded-lg"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#8B5A2B]/20 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-[#4A5568] hover:text-[#8B5A2B]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Admin & Login */}
              <div className="mt-6 pt-6 border-t border-[#8B5A2B]/20 space-y-2">
                <Link
                  href="/admin/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#4A5568] hover:text-[#8B5A2B] hover:bg-[#8B5A2B]/5 rounded-lg"
                >
                  <Lock className="w-4 h-4" />
                  Admin
                </Link>
                <Link
                  href="/portal/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#4A5568] hover:text-[#8B5A2B] hover:bg-[#8B5A2B]/5 rounded-lg"
                >
                  <User className="w-4 h-4" />
                  Mijn Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
