'use client'

import { motion } from 'framer-motion'
import { Sun, Snowflake, CloudRain, Calendar, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const months = [
  { name: 'Jan', type: 'inside', temp: '5°C' },
  { name: 'Feb', type: 'inside', temp: '6°C' },
  { name: 'Mrt', type: 'transition', temp: '9°C' },
  { name: 'Apr', type: 'outside', temp: '13°C' },
  { name: 'Mei', type: 'outside', temp: '17°C' },
  { name: 'Jun', type: 'outside', temp: '20°C' },
  { name: 'Jul', type: 'outside', temp: '22°C' },
  { name: 'Aug', type: 'outside', temp: '22°C' },
  { name: 'Sep', type: 'outside', temp: '19°C' },
  { name: 'Okt', type: 'transition', temp: '14°C' },
  { name: 'Nov', type: 'inside', temp: '9°C' },
  { name: 'Dec', type: 'inside', temp: '6°C' },
]

export function SeasonalAdvisor() {
  const currentMonth = new Date().getMonth()

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
          >
            Planning
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Wanneer <span className="text-green-600">schilderen</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Plan uw schilderwerk optimaal afhankelijk van het seizoen
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calendar visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Schilderkalender
              </h3>
              <div className="flex gap-3 text-sm">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  Buiten
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  Binnen
                </span>
              </div>
            </div>

            {/* Month grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {months.map((month, index) => (
                <motion.div
                  key={month.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "aspect-square rounded-xl flex flex-col items-center justify-center text-center p-2 transition-all",
                    month.type === 'outside' && "bg-green-100 text-green-800 border-2 border-green-200",
                    month.type === 'inside' && "bg-blue-100 text-blue-800 border-2 border-blue-200",
                    month.type === 'transition' && "bg-gray-100 text-gray-700 border-2 border-gray-200 border-dashed",
                    index === currentMonth && "ring-4 ring-yellow-400 ring-offset-2"
                  )}
                >
                  <span className="text-xs font-medium opacity-70">{month.temp}</span>
                  <span className="font-bold">{month.name}</span>
                  {index === currentMonth && (
                    <span className="text-[10px] font-bold text-yellow-600 mt-0.5">NU</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 border-2 border-green-200 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Buiten schilderen</p>
                  <p className="text-gray-600">April t/m September - Minimaal 10°C en droog weer</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 border-2 border-blue-200 flex items-center justify-center flex-shrink-0">
                  <Snowflake className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Binnen schilderen</p>
                  <p className="text-gray-600">Het hele jaar door mogelijk - Gecontroleerd klimaat</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Weather widget & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Weather card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <CloudRain className="w-8 h-8" />
                  <div>
                    <p className="text-blue-100 text-sm">Weersvoorspelling</p>
                    <p className="font-bold">Den Haag vandaag</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">12°C</p>
                  <p className="text-blue-100 text-sm">Licht bewolkt</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-xs text-blue-100">Luchtvochtigheid</p>
                  <p className="font-bold">65%</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-xs text-blue-100">Wind</p>
                  <p className="font-bold">18 km/u</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-xs text-blue-100">Neerslag</p>
                  <p className="font-bold">10%</p>
                </div>
              </div>
            </div>

            {/* CTA cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-100">
                <Sun className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Plan voor het voorjaar</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Reserveer nu uw plek voor buitenschilderwerk in het voorjaar.
                </p>
                <a
                  href="https://techsolutionsutrecht.nl/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-700 font-semibold text-sm hover:underline"
                >
                  Plan nu <Clock className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
                <Snowflake className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Winter actie</h4>
                <p className="text-sm text-gray-600 mb-4">
                  10% korting op binnenschilderwerk in de wintermaanden.
                </p>
                <span className="inline-block text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                  (Indicatie - DEMO)
                </span>
              </div>
            </div>

            {/* Quick tip */}
            <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-100">
              <p className="text-sm text-amber-800">
                <span className="font-bold">Tip:</span> Buitenschilderwerk heeft minimaal 24 uur droogtijd nodig zonder regen. 
                Plan uw project aan het begin van een droge periode.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
