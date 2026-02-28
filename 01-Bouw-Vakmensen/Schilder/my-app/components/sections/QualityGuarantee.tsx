'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle2, Shield, Sparkles, Award,
  MessageCircle, ClipboardCheck, Paintbrush, PartyPopper
} from 'lucide-react'

const guarantees = [
  {
    icon: Sparkles,
    title: 'Streeploos werk',
    description: 'Professionele afwerking zonder zichtbare strepen of rollergrenzen.',
  },
  {
    icon: Shield,
    title: 'Spettervrij garantie',
    description: 'Wij beschermen uw vloeren en meubels. Geen verfspetters achteraf.',
  },
  {
    icon: Award,
    title: '5 jaar garantie',
    description: 'Op al ons buitenschilderwerk geven wij 5 jaar garantie op afbladderen.',
  },
  {
    icon: CheckCircle2,
    title: 'Erkend schilder',
    description: 'Gecertificeerd door de Branchevereniging Schildersbedrijven.',
  },
]

const processSteps = [
  {
    step: 1,
    icon: MessageCircle,
    title: 'Advies',
    description: 'Gratis kleuradvies op locatie met stalen.',
    color: 'bg-teal-500',
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: 'Voorbereiding',
    description: 'Grondige reiniging, schuren en afplakken.',
    color: 'bg-coral-500',
  },
  {
    step: 3,
    icon: Paintbrush,
    title: 'Schilderen',
    description: 'Vakmanschap met hoogwaardige verf.',
    color: 'bg-purple-500',
  },
  {
    step: 4,
    icon: PartyPopper,
    title: 'Oplevering',
    description: 'Nazorg en garantiebewijs.',
    color: 'bg-green-500',
  },
]

export function QualityGuarantee() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-deepblue-100 text-deepblue-700 rounded-full text-sm font-semibold mb-4"
          >
            Kwaliteit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Onze <span className="text-deepblue-700">garanties</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Wij staan voor kwaliteit en tevredenheid, dat garanderen wij.
          </motion.p>
        </div>

        {/* Guarantee cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Ons <span className="text-teal-600">werkwijze</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-coral-200 to-purple-200" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step number & icon */}
                <div className="relative z-10 inline-flex flex-col items-center mb-4">
                  <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-lg mb-2`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold -mt-6 relative z-20 border-4 border-white">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-xs font-bold">
              KOMO
            </div>
            <p className="text-xs text-gray-500">Gecertificeerd</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-xs font-bold">
              FSC
            </div>
            <p className="text-xs text-gray-500">Duurzaam</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-xs font-bold">
              ISO
            </div>
            <p className="text-xs text-gray-500">9001</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-xs font-bold">
              VCA
            </div>
            <p className="text-xs text-gray-500">Veiligheid</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
