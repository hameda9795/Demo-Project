'use client'

import { motion } from 'framer-motion'
import { useDeviceToggle } from '@/hooks/useDeviceToggle'
import { Smartphone, Tablet, Monitor } from 'lucide-react'
import { DeviceType } from '@/types'

/**
 * Device Toggle Component
 * Fixed at top-right of screen, allows switching between mobile/tablet/desktop views
 */
export function DeviceToggle() {
  const { device, setDevice, maxWidth } = useDeviceToggle()

  const devices: { id: DeviceType; icon: React.ReactNode; label: string }[] = [
    { id: 'mobile', icon: <Smartphone size={18} />, label: 'Mobile' },
    { id: 'tablet', icon: <Tablet size={18} />, label: 'Tablet' },
    { id: 'desktop', icon: <Monitor size={18} />, label: 'Desktop' },
  ]

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-charcoal/90 backdrop-blur-sm rounded-lg p-1.5 border border-white/10">
      {devices.map(({ id, icon, label }) => (
        <motion.button
          key={id}
          onClick={() => setDevice(id)}
          className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            device === id ? 'text-white' : 'text-white/50 hover:text-white/80'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {device === id && (
            <motion.div
              layoutId="activeDevice"
              className="absolute inset-0 bg-safety rounded-md"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{icon}</span>
          <span className="relative z-10 hidden sm:inline">{label}</span>
        </motion.button>
      ))}
      <div className="ml-2 pl-2 border-l border-white/20">
        <span className="text-xs text-white/40 font-mono">{maxWidth}</span>
      </div>
    </div>
  )
}
