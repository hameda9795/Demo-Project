"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X, TreePine } from "lucide-react";
import { DemoBadge } from "./DemoBadge";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diensten/", label: "Diensten" },
  { href: "/tuinblog/", label: "Tuinblog" },
  { href: "/over-ons/", label: "Over Ons" },
  { href: "/contact/", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 
      bg-white/95 backdrop-blur-md 
      border-b border-green-100
      shadow-nature">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 
                bg-gradient-to-br from-green-600 to-green-800
                rounded-organic 
                flex items-center justify-center
                group-hover:rounded-organic-alt transition-all duration-500">
                <TreePine className="w-7 h-7 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 
                  bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl text-forest-900 leading-tight">
                Groen & Tuin
              </h1>
              <p className="text-xs text-forest-600">Architectuur</p>
            </div>
          </Link>

          {/* Demo Badge - Desktop */}
          <div className="hidden lg:block">
            <DemoBadge variant="header" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href.slice(0, -1));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-2 text-sm font-medium text-forest-800 
                    hover:text-green-600 transition-colors group">
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 
                    transition-all duration-300 origin-left
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                    style={{ borderRadius: '2px' }} />
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact/"
            className="hidden md:flex items-center gap-2 px-5 py-2.5
              bg-forest-800 text-white
              rounded-full text-sm font-medium
              hover:bg-forest-700 transition-all duration-300
              hover:shadow-nature-lg hover:-translate-y-0.5">
            <Leaf className="w-4 h-4" />
            Offerte Aanvragen
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-forest-800 hover:text-green-600 transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Demo Badge - Mobile (in header) */}
        <div className="lg:hidden pb-3 flex justify-center">
          <DemoBadge variant="header" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-green-100">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors
                    ${pathname === item.href 
                      ? 'bg-green-50 text-green-700' 
                      : 'text-forest-800 hover:bg-green-50 hover:text-green-700'}`}>
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 px-4 py-3
                  bg-forest-800 text-white
                  rounded-xl font-medium">
                <Leaf className="w-4 h-4" />
                Offerte Aanvragen
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
