'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PaintBucket, Menu, X, Phone } from 'lucide-react'
import { demoContact } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/diensten/', label: 'Diensten' },
  { href: '/verftips/', label: 'Verf Tips' },
  { href: '/contact/', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-shadow">
              <PaintBucket className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Kleur & Verf
              </span>
              <span className="text-lg font-bold text-gray-800"> Meesters</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${demoContact.phoneRaw}`}
              className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{demoContact.phone}</span>
            </a>
            <Link
              href="/contact/"
              className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5"
            >
              Offerte Aanvragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <a 
                  href={`tel:${demoContact.phoneRaw}`}
                  className="flex items-center gap-2 py-3 px-4 text-gray-600"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{demoContact.phone}</span>
                </a>
                <Link
                  href="/contact/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-2 py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center font-semibold rounded-lg"
                >
                  Offerte Aanvragen
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
