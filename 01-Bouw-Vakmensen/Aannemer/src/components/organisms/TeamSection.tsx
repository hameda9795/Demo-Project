'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { teamMembers } from '@/data/team'
import { cn } from '@/lib/utils'
import { TeamAvatar } from '@/components/atoms/TeamAvatar'

/**
 * Team Section
 * Cards with 3D tilt effect on hover
 * Rotating border on scroll
 */
export function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-safety font-semibold text-sm uppercase tracking-wider"
          >
            Ons Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl text-navy mt-2"
          >
            De Mensen Achter Het Werk
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TeamCardProps {
  member: typeof teamMembers[0]
  index: number
}

function TeamCard({ member, index }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Motion values for tilt effect
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  // Smooth spring animation
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const xPos = (e.clientX - rect.left) / rect.width
    const yPos = (e.clientY - rect.top) / rect.height
    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
        {/* Photo Container with Rotating Border */}
        <div className="relative mx-auto w-40 h-40 mb-6">
          {/* Rotating Border */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-safety/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Photo Circle */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <TeamAvatar 
              name={member.name}
              role={member.role}
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-safety text-white text-xs font-bold rounded-full whitespace-nowrap">
            {index === 0 ? '25+ jaar' : index === 1 ? '10+ jaar' : '15+ jaar'} ervaring
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="font-heading font-bold text-xl text-navy mb-1">
            {member.name}
          </h3>
          <p className="text-safety font-medium text-sm mb-4">
            {member.role}
          </p>
          <p className="text-concrete text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Hover Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-safety scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
      </div>
    </motion.div>
  )
}
