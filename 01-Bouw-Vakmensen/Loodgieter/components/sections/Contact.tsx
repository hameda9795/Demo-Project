'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

/**
 * Contact Section
 * Contact form with floating labels and company information
 * Includes validation feedback and success state
 */
export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '', privacy: false })
    }, 3000)
  }

  const contactInfo = [
    { icon: Phone, label: 'Telefoon', value: '010-1234567', href: 'tel:010-1234567' },
    { icon: Mail, label: 'Email', value: 'info@vandijkloodgieters.nl', href: 'mailto:info@vandijkloodgieters.nl' },
    { icon: MapPin, label: 'Adres', value: 'Hoofdstraat 123, Rotterdam', href: '#' },
    { icon: Clock, label: 'Bereikbaar', value: '24/7 Spoedhulp', href: '#' },
  ]

  return (
    <section id="contact" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-deep-navy mt-3 mb-4">
            Neem contact op
          </h2>
          <p className="text-steel-gray">
            Heeft u een vraag of wilt u een offerte aanvragen? 
            Vul het formulier in en we nemen zo snel mogelijk contact met u op.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-navy mb-2">
                    Bedankt voor uw aanvraag!
                  </h3>
                  <p className="text-steel-gray">
                    We nemen binnen 24 uur contact met u op.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Naam *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Telefoon *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Input
                    label="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  <div className="floating-label-group relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-water-blue focus:outline-none transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="lekkage">Lekkage reparatie</option>
                      <option value="verwarming">Verwarming/CV</option>
                      <option value="sanitair">Sanitair installatie</option>
                      <option value="riool">Riool ontstoppen</option>
                      <option value="overig">Overig</option>
                    </select>
                    <label className="absolute left-4 top-3 text-steel-gray transition-all duration-200 pointer-events-none origin-left -translate-y-6 scale-75">
                      Dienst *
                    </label>
                  </div>

                  <Textarea
                    label="Bericht"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-water-blue focus:ring-water-blue"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      Ik ga akkoord met de{' '}
                      <a href="/privacy/" className="text-water-blue hover:underline">
                        privacyverklaring
                      </a>
                    </span>
                  </label>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                  >
                    Verstuur aanvraag
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-water-blue/10 rounded-full flex items-center justify-center group-hover:bg-water-blue group-hover:text-white transition-colors text-water-blue">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-steel-gray">{info.label}</p>
                  <p className="font-semibold text-deep-navy">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Emergency box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-emergency-orange rounded-2xl p-6 text-white"
            >
              <h3 className="font-bold text-lg mb-2">Spoedhulp nodig?</h3>
              <p className="text-white/80 mb-4">
                Wij zijn 24/7 beschikbaar voor spoedgevallen. Bel ons direct!
              </p>
              <a
                href="tel:010-1234567"
                className="inline-flex items-center gap-2 bg-white text-emergency-orange px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow"
              >
                <Phone className="w-5 h-5" />
                010-1234567
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
