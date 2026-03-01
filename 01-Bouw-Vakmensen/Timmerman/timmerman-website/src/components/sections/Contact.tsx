/**
 * Contact Section
 * Van den Berg Timmerwerken
 * 
 * - Contact form with pencil-style inputs
 * - Demo contact info clearly marked
 * - Service areas map/list
 * - Opening hours
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Check,
  AlertTriangle
} from "lucide-react";
import { CONTACT_INFO, SERVICE_AREAS } from "@/lib/data";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    furnitureType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F5DC]">
      <div className="section-container">
        <div className="section-inner">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-[#8B5A2B] tracking-wider uppercase mb-4"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 dovetail-underline inline-block"
            >
              Start uw project
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4A5568] max-w-2xl mx-auto"
            >
              Vraag een vrijblijvende offerte aan of neem contact op voor vragen.
            </motion.p>
          </div>

          {/* Demo Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-amber-800">
              <strong>DEMO WEBSITE:</strong> Dit contactformulier is uitsluitend voor demonstratiedoeleinden. 
              Er worden geen echte berichten verzonden.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="font-playfair text-2xl font-bold text-[#3E2723] mb-6">
                  Vraag offerte aan
                </h3>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#3E2723] mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="input-pencil"
                      placeholder="Uw naam"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#3E2723] mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                      className="input-pencil"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[#3E2723] mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState(s => ({ ...s, phone: e.target.value }))}
                      className="input-pencil"
                      placeholder="06-12345678"
                    />
                  </div>

                  {/* Furniture Type */}
                  <div>
                    <label className="block text-sm font-medium text-[#3E2723] mb-2">
                      Type meubel
                    </label>
                    <select
                      value={formState.furnitureType}
                      onChange={(e) => setFormState(s => ({ ...s, furnitureType: e.target.value }))}
                      className="input-pencil"
                    >
                      <option value="">Selecteer...</option>
                      <option value="kast">Kast</option>
                      <option value="tafel">Tafel</option>
                      <option value="bed">Bed</option>
                      <option value="deur">Deur</option>
                      <option value="trap">Trap</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#3E2723] mb-2">
                    Bericht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="input-pencil resize-none"
                    placeholder="Beschrijf uw wensen..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Verzonden!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Verstuur aanvraag</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-[#4A5568] mt-4 text-center">
                  * Demo: dit formulier verstuurt geen echte data
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-[#3E2723] rounded-2xl p-8 text-[#F5F5DC]">
                <h3 className="font-playfair text-xl font-bold text-[#D4AF37] mb-6">
                  Contactgegevens
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Adres</p>
                      <p className="text-sm text-[#F5F5DC]/70">{CONTACT_INFO.address}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <div>
                      <p className="font-medium">Telefoon</p>
                      <p className="text-sm text-[#F5F5DC]/70">{CONTACT_INFO.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-sm text-[#F5F5DC]/70">{CONTACT_INFO.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Openingstijden</p>
                      <p className="text-sm text-[#F5F5DC]/70">
                        Ma-Vr: {CONTACT_INFO.hours.weekdays}<br />
                        Za: {CONTACT_INFO.hours.saturday}<br />
                        Zo: {CONTACT_INFO.hours.sunday}
                      </p>
                    </div>
                  </li>
                </ul>

                {/* KVK/BTW */}
                <div className="mt-6 pt-6 border-t border-[#F5F5DC]/10 text-xs text-[#F5F5DC]/50">
                  <p>KVK: {CONTACT_INFO.kvk}</p>
                  <p>BTW: {CONTACT_INFO.btw}</p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-playfair text-xl font-bold text-[#3E2723] mb-4">
                  Werkgebied
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area.name}
                      className="px-3 py-1 text-sm bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full"
                    >
                      {area.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
