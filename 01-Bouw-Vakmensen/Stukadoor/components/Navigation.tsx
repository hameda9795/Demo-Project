'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, BrickWall } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#structuur', label: 'Structuur' },
  { href: '/#calculator', label: 'Calculator' },
  { href: '/#projecten', label: 'Projecten' },
  { href: '/#werkwijze', label: 'Werkwijze' },
  { href: '/stucwerk-kennis/', label: 'Kennisbank' },
  { href: '/contact/', label: 'Contact' },
]

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
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'top-8 bg-white/80 backdrop-blur-md shadow-soft'
            : 'top-8 bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sand-300 to-sand-400 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                <BrickWall className="w-5 h-5 text-stone-700" />
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-lg text-stone-800 leading-tight">
                  Perfect
                </span>
                <span className="block text-xs text-stone-500 -mt-1">Stucwerk</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-full hover:bg-sand-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link
                href="/contact/"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-br from-sand-300 to-sand-400 text-stone-800 font-medium rounded-full shadow-soft hover:shadow-glow transition-all hover:scale-105 text-sm"
              >
                Gratis Offerte
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-sand-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-700" />
              ) : (
                <Menu className="w-6 h-6 text-stone-700" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-stone-900/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-28 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-stone-700 font-medium rounded-2xl hover:bg-sand-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 pt-4 border-t border-sand-200">
                  <Link
                    href="/contact/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-5 py-3 bg-gradient-to-br from-sand-300 to-sand-400 text-stone-800 font-medium rounded-full"
                  >
                    Gratis Offerte Aanvragen
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
