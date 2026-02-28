'use client'

import { motion } from 'framer-motion'
import { SideNavigation } from './SideNavigation'
import { MobileNavigation } from './MobileNavigation'
import { CustomCursor } from '@/components/molecules/CustomCursor'
import { DeviceToggle } from '@/components/molecules/DeviceToggle'
import { CookieConsent } from '@/components/molecules/CookieConsent'
import { useDeviceToggle } from '@/hooks/useDeviceToggle'
import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
  showDeviceToggle?: boolean
}

/**
 * Main Layout Component
 * Wraps all pages with navigation, custom cursor, and device toggle
 * Handles the asymmetric layout with side navigation
 */
export function MainLayout({ children, showDeviceToggle = true }: MainLayoutProps) {
  const { maxWidth } = useDeviceToggle()

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Device Toggle (demo only) */}
      {showDeviceToggle && <DeviceToggle />}

      {/* Desktop Side Navigation */}
      <SideNavigation />

      {/* Mobile/Tablet Navigation */}
      <MobileNavigation />

      {/* Main Content */}
      <main
        className="transition-all duration-500 ease-in-out"
        style={{
          marginLeft: '0',
          maxWidth: maxWidth,
          margin: '0 auto',
        }}
      >
        {/* Desktop: Add left margin for side nav */}
        <div className="lg:ml-20 xl:lg:ml-64">
          {/* Mobile/Tablet: Add top padding for header */}
          <div className="pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}
