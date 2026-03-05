'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const outlinePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      // Move dot immediately
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const animateCursor = () => {
      if (outlineRef.current) {
        const dx = mousePos.current.x - outlinePos.current.x
        const dy = mousePos.current.y - outlinePos.current.y
        
        outlinePos.current.x += dx * 0.15
        outlinePos.current.y += dy * 0.15
        
        outlineRef.current.style.left = `${outlinePos.current.x}px`
        outlineRef.current.style.top = `${outlinePos.current.y}px`
      }
      requestAnimationFrame(animateCursor)
    }

    const handleMouseEnter = () => {
      outlineRef.current?.classList.add('hover')
    }

    const handleMouseLeave = () => {
      outlineRef.current?.classList.remove('hover')
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    animateCursor()

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div 
        ref={dotRef}
        className="cursor fixed top-0 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
      />
      <div 
        ref={outlineRef}
        className="cursor fixed top-0 left-0 w-10 h-10 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 [&.hover]:scale-150 [&.hover]:opacity-50"
      />
    </>
  )
}
