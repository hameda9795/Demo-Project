'use client'

import { useState, useEffect, useCallback } from 'react'

interface CursorState {
  x: number
  y: number
  isHovering: boolean
  hoverText: string
}

/**
 * Hook for custom cursor functionality
 * Tracks mouse position and hover states
 */
export function useCustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    hoverText: '',
  })

  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }))
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const clickable = target.closest('a, button, [data-cursor]')
      
      if (clickable) {
        const text = clickable.getAttribute('data-cursor-text') || 'Bekijk'
        setCursor(prev => ({
          ...prev,
          isHovering: true,
          hoverText: text,
        }))
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const related = e.relatedTarget as HTMLElement
      
      if (target.closest('a, button, [data-cursor]') && !related?.closest('a, button, [data-cursor]')) {
        setCursor(prev => ({
          ...prev,
          isHovering: false,
          hoverText: '',
        }))
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isTouchDevice])

  const setHoverText = useCallback((text: string) => {
    setCursor(prev => ({
      ...prev,
      hoverText: text,
    }))
  }, [])

  return { cursor, isTouchDevice, setHoverText }
}
