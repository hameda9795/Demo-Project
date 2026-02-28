'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Droplets } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/#diensten' },
  { label: 'Werkgebied', href: '/#werkgebied' },
  { label: 'Kennisbank', href: '/kennisbank/' },
  { label: 'Over ons', href: '/#over-ons' },
  { label: 'Contact', href: '/#contact' },
]

/**
 * Navigation component with glass-morphism effect on scroll
 * Transforms from transparent to frosted glass on scroll
 */
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed left-4 right-4 z-40 transition-all duration-500 rounded-2xl mt-10',
          isScrolled 
            ? 'glass shadow-xl top-0 mx-auto max-w-6xl mt-2' 
            : 'bg-transparent top-0'
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-water-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-lg leading-tight text-deep-navy">
                  Van Dijk
                </span>
                <span className="text-xs text-steel-gray leading-tight">
                  Loodgieters
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-water-blue font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-water-blue transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:010-1234567"
                className="flex items-center gap-2 text-water-blue font-semibold hover:text-deep-navy transition-colors phone-shake"
              >
                <Phone className="w-4 h-4" />
                010-1234567
              </a>
              <Link
                href="/#contact"
                className="bg-water-blue text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-water-blue/30 transition-all"
              >
                Offerte aanvragen
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-deep-navy"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 px-4 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-semibold text-deep-navy py-3 block border-b border-gray-100"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:010-1234567"
                className="mt-4 bg-emergency-orange text-white py-4 rounded-xl text-center font-bold text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Bel 010-1234567
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
