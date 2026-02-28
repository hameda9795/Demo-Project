'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home,
  Briefcase,
  Wrench,
  Users,
  FileText,
  Phone,
  Calculator,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projecten', href: '/projecten/', icon: Briefcase },
  { label: 'Diensten', href: '/diensten/', icon: Wrench },
  { label: 'Over Ons', href: '/over-ons/', icon: Users },
  { label: 'Blog', href: '/blog/', icon: FileText },
  { label: 'Contact', href: '/contact/', icon: Phone },
]

/**
 * Mobile Navigation
 * - Tablet: Top navigation with hamburger menu
 * - Mobile: Bottom navigation bar (app-like)
 */
export function MobileNavigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Bottom navigation for mobile
  const bottomNavItems = navItems.slice(0, 5) // First 5 items

  return (
    <>
      {/* Tablet: Top Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-charcoal z-30 flex items-center justify-between px-4 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-white text-xl">
            <span className="text-safety">Bouw</span>bedrijf
          </span>
          <span className="text-white/60 text-sm hidden sm:inline">Van den Berg</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/offerte/"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-safety text-white text-sm font-semibold rounded-lg"
          >
            <Calculator size={18} />
            Offerte
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile: Bottom Navigation */}
      <nav className="lg:hidden sm:hidden fixed bottom-0 left-0 right-0 h-16 bg-charcoal z-30 border-t border-white/10">
        <ul className="flex items-center justify-around h-full px-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href.slice(0, -1))

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors',
                    isActive ? 'text-safety' : 'text-white/60'
                  )}
                >
                  <Icon size={20} />
                  <span className="text-[10px]">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile/Tablet: Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 z-20 bg-charcoal"
          >
            <nav className="p-6">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href || pathname.startsWith(item.href.slice(0, -1))

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          'flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors',
                          isActive
                            ? 'bg-safety text-white'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        <Icon size={24} />
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
                <li className="pt-4 border-t border-white/10 mt-4">
                  <Link
                    href="/offerte/"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 bg-safety text-white rounded-xl text-lg font-bold"
                  >
                    <Calculator size={24} />
                    Vraag Offerte Aan
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-white/5 rounded-xl">
                <h3 className="text-white font-heading font-bold mb-2">Contact</h3>
                <p className="text-white/60 text-sm mb-1">Bouwbedrijf Van den Berg</p>
                <p className="text-white/60 text-sm mb-1">1234 AB Utrecht</p>
                <a href="tel:+31301234567" className="text-safety text-sm hover:underline">
                  030 - 123 4567
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
