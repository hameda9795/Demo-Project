'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider'

/**
 * Before/After Slider Component
 * Interactive renovation showcase using react-compare-slider
 * Draggable slider with orange handle
 */
export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)

  return (
    <section className="py-20 lg:py-32 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-safety font-semibold text-sm uppercase tracking-wider"
          >
            Transformatie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl text-navy mt-2 mb-4"
          >
            Voor & Na
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-concrete text-lg max-w-2xl mx-auto"
          >
            Sleep de slider om de transformatie te zien. Van verouderde ruimte naar modern comfort.
          </motion.p>
        </div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Diagonal Clip Container */}
          <div 
            className="relative overflow-hidden shadow-2xl"
            style={{
              clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
            }}
          >
            <ReactCompareSlider
              position={position}
              onPositionChange={setPosition}
              itemOne={
                <BeforeAfterImage
                  label="Voor"
                  color="from-concrete-dark to-charcoal"
                  pattern="diagonal"
                />
              }
              itemTwo={
                <BeforeAfterImage
                  label="Na"
                  color="from-safety/30 to-safety-dark/50"
                  pattern="grid"
                />
              }
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#f97316',
                    border: '4px solid white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                  linesStyle={{
                    width: 2,
                    backgroundColor: '#f97316',
                  }}
                />
              }
              style={{
                height: '500px',
              }}
            />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-4 py-2 bg-charcoal/80 backdrop-blur-sm text-white font-heading font-bold rounded-lg">
              Voor Renovatie
            </span>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <span className="px-4 py-2 bg-safety/90 backdrop-blur-sm text-white font-heading font-bold rounded-lg">
              Na Renovatie
            </span>
          </div>

          {/* Project Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-heading font-bold text-navy mb-1">Project</h4>
                <p className="text-concrete">Complete Woning Renovatie</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy mb-1">Locatie</h4>
                <p className="text-concrete">Utrecht, Lombok</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy mb-1">Duur</h4>
                <p className="text-concrete">8 weken</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface BeforeAfterImageProps {
  label: string
  color: string
  pattern: 'diagonal' | 'grid'
}

function BeforeAfterImage({ label, color, pattern }: BeforeAfterImageProps) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${color} flex items-center justify-center overflow-hidden`}>
      {/* Pattern Overlay */}
      {pattern === 'diagonal' ? (
        <>
          {/* Old/Renovation Pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )`,
            }}
          />
          {/* House Before Illustration */}
          <svg className="absolute inset-0 w-full h-full text-white/10" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
            <rect x="100" y="150" width="200" height="120" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M80 150 L200 80 L320 150" fill="none" stroke="currentColor" strokeWidth="3"/>
            <rect x="130" y="180" width="30" height="30" fill="currentColor" opacity="0.2"/>
            <rect x="185" y="180" width="30" height="30" fill="currentColor" opacity="0.2"/>
            <rect x="240" y="180" width="30" height="30" fill="currentColor" opacity="0.2"/>
            <rect x="185" y="220" width="30" height="50" fill="currentColor" opacity="0.15"/>
            {/* Cracks */}
            <line x1="120" y1="200" x2="140" y2="220" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
            <line x1="280" y1="190" x2="270" y2="210" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          </svg>
        </>
      ) : (
        <>
          {/* New Pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          {/* House After Illustration */}
          <svg className="absolute inset-0 w-full h-full text-white/15" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
            <rect x="100" y="150" width="200" height="120" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M80 150 L200 80 L320 150" fill="none" stroke="currentColor" strokeWidth="3"/>
            {/* Modern Windows */}
            <rect x="130" y="180" width="35" height="35" fill="currentColor" opacity="0.3" rx="2"/>
            <rect x="182" y="180" width="35" height="35" fill="currentColor" opacity="0.3" rx="2"/>
            <rect x="235" y="180" width="35" height="35" fill="currentColor" opacity="0.3" rx="2"/>
            <rect x="182" y="220" width="35" height="50" fill="currentColor" opacity="0.25" rx="2"/>
            {/* Sun */}
            <circle cx="320" cy="60" r="25" fill="currentColor" opacity="0.2"/>
          </svg>
        </>
      )}

      {/* Label Badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
          <span className="text-white font-heading font-bold text-lg">{label}</span>
        </div>
      </div>
    </div>
  )
}
