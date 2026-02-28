'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { DeviceType } from '@/types'

interface DeviceContextType {
  device: DeviceType
  setDevice: (device: DeviceType) => void
  maxWidth: string
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined)

/**
 * Provider for device toggle state
 * Allows switching between mobile/tablet/desktop view modes
 */
export function DeviceProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<DeviceType>('desktop')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load from localStorage
    const saved = localStorage.getItem('preview-device') as DeviceType
    if (saved && ['mobile', 'tablet', 'desktop'].includes(saved)) {
      setDevice(saved)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('preview-device', device)
    }
  }, [device, mounted])

  const maxWidthMap = {
    mobile: '375px',
    tablet: '768px',
    desktop: '100%',
  }

  return (
    <DeviceContext.Provider value={{ device, setDevice, maxWidth: maxWidthMap[device] }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDeviceToggle() {
  const context = useContext(DeviceContext)
  if (!context) {
    throw new Error('useDeviceToggle must be used within DeviceProvider')
  }
  return context
}
