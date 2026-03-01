'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Users, MapPin, Utensils, Star, ChevronDown, Quote } from 'lucide-react'
import { hostTips } from '@/lib/data'

export default function HostsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openTip, setOpenTip] = useState<string | null>(null)

  const tipIcons: Record<string, React.ReactNode> = {
    walking: <MapPin className="w-4 h-4" />,
    food: <Utensils className="w-4 h-4" />,
    secret: <Star className="w-4 h-4" />,
  }

  return (
    <section id="over-ons" className="py-20 lg:py-28 bg-creamy-egg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-6 h-6 text-strawberry-jam" />
            <span className="text-sm font-medium text-coffee-brown/60 tracking-wider uppercase">
              Persoonlijke Gastvrijheid
            </span>
          </div>
          <h2 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-brown mb-4">
            Ontmoet je Gastheren
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main portrait */}
            <div className="relative rounded-3xl overflow-hidden shadow-cozy">
              <Image
                src="/images/bnb/hosts/maria-jan-portrait.jpg"
                alt="Maria en Jan - uw gastheren"
                width={600}
                height={700}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown/40 via-transparent to-transparent" />
              
              {/* Name tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <h3 className="font-lora text-xl font-semibold text-coffee-brown">
                    Maria & Jan
                  </h3>
                  <p className="text-sm text-coffee-brown/70">
                    Jouw gastheer en gastvrouw sinds 2018
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary image - floating */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-cozy border-4 border-white hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/bnb/hosts/kitchen-preparing.jpg"
                alt="In de keuken"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Story & Tips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Story */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-cozy">
              <Quote className="w-8 h-8 text-strawberry-jam/30 mb-4" />
              <p className="text-lg text-coffee-brown/80 leading-relaxed mb-4">
                Wij zijn Maria en Jan. Sinds 2018 verwelkomen wij gasten in ons droomhuis 
                dat we met liefde hebben omgetoverd tot een B&B. Voor ons gaat het niet 
                alleen om een bed en ontbijt - we willen dat je je écht thuis voelt.
              </p>
              <p className="text-coffee-brown/70 leading-relaxed mb-4">
                Jan is de ochtendmens die het vuur aansteekt en de croissants warmt, 
                Maria zorgt voor de versieringen en het persoonlijke contact. Samen 
                maken we jouw verblijf bijzonder.
              </p>
              <p className="font-medium text-coffee-brown">
                We kijken er naar uit om je te verwelkomen!
              </p>
              <div className="mt-4 pt-4 border-t border-coffee-brown/10">
                <p className="text-sm text-coffee-brown/60 italic">
                  — Maria & Jan
                </p>
              </div>
            </div>

            {/* Host Tips Accordion */}
            <div className="space-y-3">
              <h3 className="font-lora text-lg font-semibold text-coffee-brown flex items-center gap-2">
                <Star className="w-5 h-5 text-honey-gold" />
                Onze Lokale Tips
              </h3>
              
              {hostTips.map((tip) => (
                <div
                  key={tip.id}
                  className="bg-white rounded-2xl shadow-cozy overflow-hidden"
                >
                  <button
                    onClick={() => setOpenTip(openTip === tip.id ? null : tip.id)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-soft-linen flex items-center justify-center text-strawberry-jam">
                        {tipIcons[tip.category]}
                      </span>
                      <span className="font-medium text-coffee-brown">{tip.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-coffee-brown/40 transition-transform ${
                        openTip === tip.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openTip === tip.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pl-15">
                          <p className="text-sm text-coffee-brown/70 pl-11">
                            {tip.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Photo Gallery Preview */}
            <div className="bg-white rounded-3xl p-6 shadow-cozy">
              <h4 className="font-medium text-coffee-brown mb-4">Momenten met onze gasten</h4>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/bnb/hosts/hosts-with-guests-blurred.jpg"
                  alt="Momenten met gasten - privacy beschermd"
                  width={500}
                  height={200}
                  className="object-cover w-full h-40 blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-coffee-brown/20">
                  <p className="text-white text-sm font-medium px-4 py-2 bg-coffee-brown/60 rounded-full">
                    📷 Gezichten wazig voor privacy (demo)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
