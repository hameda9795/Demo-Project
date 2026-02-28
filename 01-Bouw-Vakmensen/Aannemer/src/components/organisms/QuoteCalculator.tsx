'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import confetti from 'canvas-confetti'
import { QuoteFormData } from '@/types'
import { Building2, Home, Castle, ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react'

// Validation schema (Dutch)
const quoteSchema = z.object({
  houseType: z.enum(['appartement', 'rijtjeshuis', 'villa'], {
    required_error: 'Selecteer een type woning',
  }),
  workType: z.enum(['renovatie', 'aanbouw', 'nieuwbouw'], {
    required_error: 'Selecteer een soort werk',
  }),
  squareMeters: z.number().min(10, 'Minimaal 10 m²').max(1000, 'Maximaal 1000 m²'),
  details: z.string().optional(),
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Ongeldig telefoonnummer'),
  address: z.string().min(5, 'Adres is verplicht'),
})

type QuoteFormSchema = z.infer<typeof quoteSchema>

const steps = [
  { id: 1, title: 'Type Woning' },
  { id: 2, title: 'Soort Werk' },
  { id: 3, title: 'Details' },
  { id: 4, title: 'Contact' },
]

const houseTypes = [
  { id: 'appartement', label: 'Appartement', icon: Building2, description: 'Appartement of flat' },
  { id: 'rijtjeshuis', label: 'Rijtjeshuis', icon: Home, description: 'Tussen-, hoek- of eindwoning' },
  { id: 'villa', label: 'Villa', icon: Castle, description: 'Vrijstaand of geschakeld' },
]

const workTypes = [
  { id: 'renovatie', label: 'Renovatie', description: 'Bestaande woning verbeteren' },
  { id: 'aanbouw', label: 'Aanbouw/Uitbouw', description: 'Ruimte uitbreiden' },
  { id: 'nieuwbouw', label: 'Nieuwbouw', description: 'Nieuw bouwen vanaf nul' },
]

/**
 * Quote Calculator - Multi-step Form Wizard
 * Animated progress bar, step transitions, confetti on completion
 */
export function QuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormSchema>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      houseType: undefined,
      workType: undefined,
      squareMeters: 100,
      details: '',
      name: '',
      email: '',
      phone: '',
      address: '',
    },
  })

  const watchedValues = watch()

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const onSubmit = async (data: QuoteFormSchema) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Save to localStorage
    localStorage.setItem('quote-submission', JSON.stringify(data))
    
    // Confetti animation
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#0f172a', '#6b7280'],
    })
    
    setIsSubmitting(false)
    setIsComplete(true)
  }

  // Progress percentage
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  if (isComplete) {
    return <SuccessMessage />
  }

  return (
    <section className="py-20 lg:py-32 bg-navy">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-safety font-semibold text-sm uppercase tracking-wider"
          >
            Offerte Aanvragen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl text-white mt-2"
          >
            Wat Gaat Het Kosten?
          </motion.h2>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="bg-gray-100 h-2">
            <motion.div
              className="h-full bg-safety"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between px-8 py-6 border-b">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center gap-2 ${
                  index + 1 <= currentStep ? 'text-safety' : 'text-gray-300'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index + 1 <= currentStep ? 'bg-safety text-white' : 'bg-gray-100'
                  }`}
                >
                  {index + 1 < currentStep ? <Check size={16} /> : index + 1}
                </div>
                <span className="hidden sm:block text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <Step1HouseType
                  key="step1"
                  control={control}
                  errors={errors}
                />
              )}
              {currentStep === 2 && (
                <Step2WorkType
                  key="step2"
                  control={control}
                  errors={errors}
                />
              )}
              {currentStep === 3 && (
                <Step3Details
                  key="step3"
                  control={control}
                  errors={errors}
                />
              )}
              {currentStep === 4 && (
                <Step4Contact
                  key="step4"
                  control={control}
                  errors={errors}
                />
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-navy hover:bg-gray-100'
                }`}
              >
                <ArrowLeft size={18} />
                Terug
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-safety text-white rounded-lg font-medium hover:bg-safety-dark transition-colors"
                >
                  Volgende
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 bg-safety text-white rounded-lg font-medium hover:bg-safety-dark transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Verzenden...
                    </>
                  ) : (
                    <>
                      Offerte Aanvragen
                      <Check size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

// Step Components
function Step1HouseType({ control, errors }: { control: any; errors: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="font-heading font-bold text-xl text-navy mb-4">
        Wat voor type woning heeft u?
      </h3>
      
      <Controller
        name="houseType"
        control={control}
        render={({ field }) => (
          <div className="grid sm:grid-cols-3 gap-4">
            {houseTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => field.onChange(type.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    field.value === type.id
                      ? 'border-safety bg-safety/5'
                      : 'border-gray-100 hover:border-safety/30'
                  }`}
                >
                  <Icon
                    size={40}
                    className={`mb-4 ${
                      field.value === type.id ? 'text-safety' : 'text-gray-400'
                    }`}
                  />
                  <h4 className="font-heading font-bold text-navy mb-1">{type.label}</h4>
                  <p className="text-sm text-concrete">{type.description}</p>
                </button>
              )
            })}
          </div>
        )}
      />
      
      {errors.houseType && (
        <p className="text-red-500 text-sm">{errors.houseType.message}</p>
      )}
    </motion.div>
  )
}

function Step2WorkType({ control, errors }: { control: any; errors: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="font-heading font-bold text-xl text-navy mb-4">
        Wat voor werk wilt u laten uitvoeren?
      </h3>
      
      <Controller
        name="workType"
        control={control}
        render={({ field }) => (
          <div className="grid sm:grid-cols-3 gap-4">
            {workTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => field.onChange(type.id)}
                className={`p-6 rounded-xl border-2 text-left transition-all ${
                  field.value === type.id
                    ? 'border-safety bg-safety/5'
                    : 'border-gray-100 hover:border-safety/30'
                }`}
              >
                <h4 className="font-heading font-bold text-navy mb-2">{type.label}</h4>
                <p className="text-sm text-concrete">{type.description}</p>
              </button>
            ))}
          </div>
        )}
      />
      
      {errors.workType && (
        <p className="text-red-500 text-sm">{errors.workType.message}</p>
      )}
    </motion.div>
  )
}

function Step3Details({ control, errors }: { control: any; errors: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="font-heading font-bold text-xl text-navy mb-4">
        Vertel ons meer over uw project
      </h3>
      
      <div>
        <label className="block text-sm font-medium text-navy mb-2">
          Hoeveel vierkante meter?
        </label>
        <Controller
          name="squareMeters"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="1000"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="w-24 px-4 py-2 bg-gray-100 rounded-lg text-center font-medium">
                {field.value} m²
              </span>
            </div>
          )}
        />
        {errors.squareMeters && (
          <p className="text-red-500 text-sm mt-1">{errors.squareMeters.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-2">
          Aanvullende details (optioneel)
        </label>
        <Controller
          name="details"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              rows={4}
              placeholder="Beschrijf uw wensen, bijzonderheden, etc."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-safety focus:border-transparent resize-none"
            />
          )}
        />
      </div>
    </motion.div>
  )
}

function Step4Contact({ control, errors }: { control: any; errors: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="font-heading font-bold text-xl text-navy mb-4">
        Uw contactgegevens
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Naam *</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Uw naam"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-safety focus:border-transparent"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-navy mb-2">E-mail *</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                placeholder="uw@email.nl"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-safety focus:border-transparent"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-navy mb-2">Telefoon *</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="06-12345678"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-safety focus:border-transparent"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-navy mb-2">Adres *</label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Straat 123, Utrecht"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-safety focus:border-transparent"
              />
            )}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function SuccessMessage() {
  return (
    <section className="py-20 lg:py-32 bg-navy">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
          <Check size={40} className="text-white" />
        </div>
        <h2 className="font-heading font-bold text-4xl text-white mb-4">
          Bedankt voor uw aanvraag!
        </h2>
        <p className="text-white/70 text-lg mb-8">
          We hebben uw offerte-aanvraag ontvangen. Onze specialist neemt binnen 24 uur contact met u op.
        </p>
        <div className="bg-white/10 rounded-xl p-6 text-left">
          <h3 className="font-heading font-bold text-white mb-2">Wat kunt u verwachten?</h3>
          <ul className="space-y-2 text-white/60">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-safety rounded-full" />
              Binnen 24 uur eerste reactie
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-safety rounded-full" />
              Grondige inspectie ter plaatse
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-safety rounded-full" />
              Gedetailleerde offerte op maat
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
