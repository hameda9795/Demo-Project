"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Cpu, 
  BatteryCharging, 
  Sun, 
  Grid3X3, 
  Home,
  ArrowRight 
} from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Zap,
    title: "Noodhulp",
    description: "24/7 spoedservice voor stroomstoringen en elektrische problemen. Binnen 30 minuten ter plaatse.",
    color: "from-red-600 to-red-800",
  },
  {
    icon: Cpu,
    title: "Meterkast Vervangen",
    description: "Complete vervanging van oude meterkasten naar moderne, veilige groepenkasten.",
    color: "from-electric-600 to-electric-800",
  },
  {
    icon: BatteryCharging,
    title: "Laadpaal Installatie",
    description: "Thuislaadpunten voor elektrische auto's. Van aanvraag tot installatie en configuratie.",
    color: "from-green-600 to-green-800",
  },
  {
    icon: Sun,
    title: "Zonnepanelen Aansluiten",
    description: "Professionele aansluiting van zonnepanelen op uw groepenkast en omvormer.",
    color: "from-yellow-600 to-orange-600",
  },
  {
    icon: Grid3X3,
    title: "Groepenkast Uitbreiden",
    description: "Uitbreiding van bestaande groepenkasten voor extra ruimte en capaciteit.",
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: Home,
    title: "Smart Home Installatie",
    description: "Domotica oplossingen voor een slimmer, energiezuiniger en comfortabeler huis.",
    color: "from-cyan-600 to-cyan-800",
  },
]

function HexagonCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative"
    >
      {/* Hexagon shape container */}
      <div className="relative">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-electric-600/0 group-hover:bg-electric-600/30 blur-2xl rounded-full transition-all duration-500" />
        
        {/* Card */}
        <div className="relative bg-circuit-dark border border-electric-800/50 group-hover:border-electric-500 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-electric h-full">
          {/* Icon */}
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-lg`}>
            <service.icon className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-electric-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {service.description}
          </p>

          {/* Link */}
          <div className="flex items-center gap-2 text-electric-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Meer info</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Connection dot */}
          <motion.div
            className="absolute -right-2 top-1/2 w-3 h-3 bg-electric-500 rounded-full opacity-0 group-hover:opacity-100"
            animate={{
              boxShadow: [
                "0 0 10px rgba(37,99,235,0.5)",
                "0 0 20px rgba(37,99,235,0.8)",
                "0 0 10px rgba(37,99,235,0.5)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="diensten" className="py-24 bg-circuit-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {isInView && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.line
                key={`conn-${i}`}
                x1="20%"
                y1={`${30 + i * 20}%`}
                x2="80%"
                y2={`${30 + i * 20}%`}
                stroke="url(#connection-gradient)"
                strokeWidth="1"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: 0.5 + i * 0.3,
                }}
              />
            ))}
          </>
        )}
      </svg>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-electric-500 font-heading font-semibold tracking-wider uppercase text-sm mb-4">
            Onze Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Elektrotechnische Diensten
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Van spoedreparaties tot complete installaties. Wij leveren vakwerk voor al uw elektriciteitsbehoeften.
          </p>
        </motion.div>

        {/* Services Grid - Honeycomb Layout */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <HexagonCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Niet gevonden wat u zoekt? Neem contact op voor een vrijblijvend gesprek.
          </p>
          <motion.a
            href="tel:020-1234567"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Zap className="w-5 h-5" fill="currentColor" />
            Bel voor Advies (DEMO)
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
