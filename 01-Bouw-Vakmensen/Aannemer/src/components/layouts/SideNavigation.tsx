'use client'

import { motion } from 'framer-motion'
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
} from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projecten', href: '/projecten/', icon: Briefcase },
  { label: 'Diensten', href: '/diensten/', icon: Wrench },
  { label: 'Over Ons', href: '/over-ons/', icon: Users },
  { label: 'Blog', href: '/blog/', icon: FileText },
  { label: 'Contact', href: '/contact/', icon: Phone },
]

const ctaItem = { label: 'Offerte', href: '/offerte/', icon: Calculator }

/**
 * Vertical Side Navigation
 * Sticky left-side nav with dark charcoal background
 * Only visible on desktop
 */
export function SideNavigation() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex fixed left-0 top-0 h-screen w-20 xl:w-64 bg-charcoal z-30 flex-col"
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/" className="block">
          <h1 className="font-heading font-bold text-white text-lg xl:text-xl leading-tight">
            <span className="text-safety">Bouw</span>
            <span className="hidden xl:inline">bedrijf</span>
          </h1>
          <p className="text-white/60 text-xs hidden xl:block">Van den Berg</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-3">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href.slice(0, -1))

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300',
                    isActive
                      ? 'bg-safety text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <Icon
                    size={22}
                    className={cn(
                      'transition-transform duration-300',
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    )}
                  />
                  <span className="hidden xl:block font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-0 w-1 h-8 bg-safety rounded-r-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* CTA Button */}
      <div className="p-4 border-t border-white/10">
        <Link
          href={ctaItem.href}
          className={cn(
            'flex items-center justify-center xl:justify-start gap-3 px-3 py-3 rounded-lg',
            'bg-safety text-white hover:bg-safety-dark transition-colors',
            pathname === ctaItem.href && 'ring-2 ring-white/20'
          )}
        >
          <ctaItem.icon size={22} />
          <span className="hidden xl:block font-heading font-bold">{ctaItem.label}</span>
        </Link>
      </div>

      {/* Contact Info - Desktop only */}
      <div className="hidden xl:block p-4 border-t border-white/10">
        <a
          href="tel:+31301234567"
          className="flex items-center gap-2 text-white/60 hover:text-safety transition-colors text-sm"
        >
          <Phone size={16} />
          <span>030 - 123 4567</span>
        </a>
      </div>
    </motion.aside>
  )
}
