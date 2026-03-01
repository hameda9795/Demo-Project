'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { BookOpen, Star, Send, MessageSquare } from 'lucide-react'
import { guestbookEntries } from '@/lib/data'

export default function GuestbookSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', message: '' })
    }, 3000)
  }

  return (
    <section className="py-20 lg:py-28 bg-soft-linen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-linen-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-strawberry-jam" />
            <span className="text-sm font-medium text-coffee-brown/60 tracking-wider uppercase">
              Ervaringen
            </span>
          </div>
          <h2 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-brown mb-4">
            Gastenboek
          </h2>
          <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
            Niet zomaar reviews, maar verhalen van gasten die even deel uitmaakten van ons kleine paradijs.
          </p>
        </motion.div>

        {/* Guestbook Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {guestbookEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-cozy h-full relative overflow-hidden">
                {/* Handwritten style card */}
                <div className="relative">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(entry.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-honey-gold fill-honey-gold" />
                    ))}
                  </div>

                  {/* Story - handwritten style */}
                  <p 
                    className="text-lg leading-relaxed text-coffee-brown/80 mb-6"
                    style={{ fontFamily: 'cursive' }}
                  >
                    &ldquo;{entry.story}&rdquo;
                  </p>

                  {/* Author info */}
                  <div className="flex items-center justify-between pt-4 border-t border-coffee-brown/10">
                    <div>
                      <p className="font-medium text-coffee-brown">{entry.name}</p>
                      <p className="text-xs text-coffee-brown/50">{entry.stayType}</p>
                    </div>
                    <p className="text-xs text-coffee-brown/40">
                      {new Date(entry.date).toLocaleDateString('nl-NL', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-strawberry-jam/5 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave a Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-3xl p-6 lg:p-8 shadow-cozy max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-strawberry-jam" />
            <h3 className="font-lora text-xl font-semibold text-coffee-brown">
              Laat een bericht achter
            </h3>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-fresh-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-fresh-sage" />
              </div>
              <h4 className="font-medium text-coffee-brown mb-2">Bericht verstuurd!</h4>
              <p className="text-sm text-coffee-brown/70">
                Bedankt voor je bericht. We nemen zo snel mogelijk contact op.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-coffee-brown mb-2">
                  Je naam
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-strawberry-jam/50 text-coffee-brown placeholder:text-coffee-brown/40"
                  placeholder="Bijv. Anna uit Amsterdam"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-coffee-brown mb-2">
                  Je bericht of vraag
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-soft-linen rounded-xl border-0 focus:ring-2 focus:ring-strawberry-jam/50 text-coffee-brown placeholder:text-coffee-brown/40 resize-none"
                  placeholder="Vertel ons iets of stel een vraag..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-strawberry-jam text-white font-medium rounded-xl hover:bg-strawberry-jam/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Verstuur bericht
              </button>
              <p className="text-xs text-coffee-brown/50 text-center">
                Dit is een demo formulier. In productie wordt dit een echt contactformulier.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
