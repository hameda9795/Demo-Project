"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Menu, X, Phone, Clock } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kennis/", label: "Kennisbank" },
  { href: "/admin/", label: "Admin" },
  { href: "/mijn-stroom/", label: "Mijn Stroom" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-8 z-40 w-full bg-circuit-dark/95 backdrop-blur-md border-b border-electric-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-electric-600 rounded-lg blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-electric-500 to-electric-700 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" fill="currentColor" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-white leading-tight">
                Stroom & Veiligheid
              </span>
              <span className="text-xs text-electric-400 font-heading tracking-wider">
                ELEKTRO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-electric-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-electric-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* 24/7 Badge & Phone */}
          <div className="hidden md:flex items-center gap-4">
            {/* 24/7 Badge */}
            <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-3 py-1.5">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-red-500 rounded-full"
              />
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs font-medium text-red-400">24/7 Spoedhulp</span>
            </div>
            
            {/* Phone */}
            <a
              href="tel:020-1234567"
              className="flex items-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">020-1234567 (DEMO)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-circuit-dark border-t border-electric-800"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-4 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-electric-900/50 text-electric-400"
                      : "text-gray-300 hover:bg-electric-900/30 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile 24/7 Badge */}
              <div className="flex items-center justify-center gap-2 bg-red-600/20 border border-red-500/30 rounded-lg px-4 py-3 mt-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-red-500 rounded-full"
                />
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">24/7 Spoedhulp</span>
              </div>
              
              {/* Mobile Phone */}
              <a
                href="tel:020-1234567"
                className="flex items-center justify-center gap-2 bg-electric-600 text-white px-4 py-3 rounded-lg mt-2"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">020-1234567 (DEMO)</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
