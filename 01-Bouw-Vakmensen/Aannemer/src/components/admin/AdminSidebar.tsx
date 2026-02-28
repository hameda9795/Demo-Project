'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Briefcase,
  Calculator,
  Settings,
  LogOut,
  ArrowLeft,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/admin/', icon: LayoutDashboard },
  { label: 'Projecten', href: '/admin/projecten/', icon: Briefcase },
  { label: 'Offertes', href: '/admin/offertes/', icon: Calculator },
  { label: 'Instellingen', href: '/admin/instellingen/', icon: Settings },
]

/**
 * Admin Sidebar Navigation
 * Dark theme sidebar for admin panel
 */
export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-navy border-r border-white/10 z-30">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-white text-xl">
            <span className="text-safety">Admin</span>
          </span>
        </Link>
        <p className="text-white/40 text-xs mt-1">Demo omgeving</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href.slice(0, -1))

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-safety text-white'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
        >
          <ArrowLeft size={20} />
          <span>Terug naar site</span>
        </Link>
        <Link
          href="/admin/login/"
          className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5 mt-1"
        >
          <LogOut size={20} />
          <span>Uitloggen</span>
        </Link>
      </div>
    </aside>
  )
}
