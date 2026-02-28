/**
 * Contact Section Component
 * Dakwerken Van der Berg
 * 
 * @description Contact form with React Hook Form and Zod validation
 * Company info and service area map
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle 
} from "lucide-react";
import { companyInfo, serviceAreas, telLink } from "@/lib/utils";

// Dutch form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  phone: z.string().regex(/^([+]\d{2})?\s?(\d{2}|\d{4})\s?\d{6,8}$/, "Voer een geldig telefoonnummer in"),
  address: z.string().min(5, "Voer een geldig adres in"),
  postalCode: z.string().regex(/^\d{4}\s?[A-Z]{2}$/i, "Voer een geldige postcode in (bijv. 1234 AB)"),
  serviceType: z.enum(["dakreparatie", "dakrenovatie", "dakisolatie", "zonnepanelen", "schoorsteen", "dakgoot", "overig"]),
  message: z.string().min(10, "Beschrijf uw situatie in minimaal 10 karakters"),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "U moet akkoord gaan met het privacybeleid" }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-storm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-safety-orange/20 text-safety-orange font-semibold text-sm rounded-full mb-4">
              Contact
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Neem <span className="text-safety-orange">contact</span> op
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Heeft u vragen of wilt u een afspraak maken? Wij staan voor u klaar. 
              Vul het formulier in of neem direct contact met ons op.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <a
                href={telLink(companyInfo.mobile)}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-safety-orange/20 rounded-xl flex items-center justify-center group-hover:bg-safety-orange transition-colors">
                  <Phone className="w-6 h-6 text-safety-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Telefoon (spoed)</div>
                  <div className="text-white font-heading text-xl font-bold group-hover:text-safety-orange transition-colors">
                    {companyInfo.mobile}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-sky-blue/20 rounded-xl flex items-center justify-center group-hover:bg-sky-blue transition-colors">
                  <Mail className="w-6 h-6 text-sky-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">E-mail</div>
                  <div className="text-white font-heading text-lg font-bold group-hover:text-sky-blue transition-colors">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white/60" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Adres</div>
                  <div className="text-white font-heading text-lg font-bold">
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.postcode} {companyInfo.address.city}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white/60" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Openingstijden</div>
                  <div className="text-white text-sm">
                    Ma-Vr: {companyInfo.hours.weekday}
                    <br />
                    Za: {companyInfo.hours.saturday} | Zo: {companyInfo.hours.sunday}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-heading font-bold text-white mb-4">Werkgebied</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-storm-gray mb-4">
                    Bedankt voor uw aanvraag!
                  </h3>
                  <p className="text-storm-gray/70 mb-6">
                    Wij hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-safety-orange font-semibold hover:underline"
                  >
                    Nieuwe aanvraag versturen
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-storm-gray mb-2">
                        Naam *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Jan Jansen"
                        className="w-full px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="text-emergency-red text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-storm-gray mb-2">
                        E-mail *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="jan@example.com"
                        className="w-full px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-emergency-red text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-storm-gray mb-2">
                        Telefoon *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="06 12345678"
                        className="w-full px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-emergency-red text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-sm font-semibold text-storm-gray mb-2">
                        Type dienst *
                      </label>
                      <select
                        {...register("serviceType")}
                        className="w-full px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Selecteer...</option>
                        <option value="dakreparatie">Dakreparatie</option>
                        <option value="dakrenovatie">Dakrenovatie</option>
                        <option value="dakisolatie">Dakisolatie</option>
                        <option value="zonnepanelen">Zonnepanelen</option>
                        <option value="schoorsteen">Schoorsteen renovatie</option>
                        <option value="dakgoot">Dakgoot reiniging</option>
                        <option value="overig">Overig</option>
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-storm-gray mb-2">
                      Adres *
                    </label>
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Dorpsstraat 123"
                      className="w-full px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                    />
                    {errors.address && (
                      <p className="text-emergency-red text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm font-semibold text-storm-gray mb-2">
                      Postcode *
                    </label>
                    <input
                      {...register("postalCode")}
                      type="text"
                      placeholder="1234 AB"
                      className="w-full md:w-1/2 px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors"
                    />
                    {errors.postalCode && (
                      <p className="text-emergency-red text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-storm-gray mb-2">
                      Uw bericht *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Beschrijf uw situatie of vraag..."
                      className="w-full px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-emergency-red text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        {...register("privacyAccepted")}
                        type="checkbox"
                        className="w-5 h-5 mt-0.5 rounded border-2 border-storm-gray/20 text-safety-orange focus:ring-safety-orange"
                      />
                      <span className="text-sm text-storm-gray/70">
                        Ik ga akkoord met het{" "}
                        <a href="#" className="text-safety-orange hover:underline">
                          privacybeleid
                        </a>{" "}
                        en geef toestemming voor het verwerken van mijn gegevens *
                      </span>
                    </label>
                    {errors.privacyAccepted && (
                      <p className="text-emergency-red text-sm mt-1">
                        {errors.privacyAccepted.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-tile disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Versturen...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Verstuur aanvraag
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
