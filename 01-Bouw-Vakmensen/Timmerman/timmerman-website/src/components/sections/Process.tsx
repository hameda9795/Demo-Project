/**
 * Workshop Timeline Section
 * Van den Berg Timmerwerken
 * 
 * Shows the process from planning to delivery
 * - Horizontal scroll on mobile
 * - Animated icons for each step
 * - Duration estimates
 */

"use client";

import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Pencil, 
  TreePine, 
  Hammer, 
  Truck,
  ArrowRight 
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  ruler: <ClipboardList className="w-6 h-6" />,
  "pen-tool": <Pencil className="w-6 h-6" />,
  "tree-pine": <TreePine className="w-6 h-6" />,
  hammer: <Hammer className="w-6 h-6" />,
  "check-circle": <Truck className="w-6 h-6" />,
};

export function Process() {
  return (
    <section id="diensten" className="py-24 bg-[#3E2723] text-[#F5F5DC] relative overflow-hidden">
      {/* Wood grain background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 4px,
              #D4AF37 4px,
              #D4AF37 5px
            )
          `,
        }}
      />

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-[#D4AF37] tracking-wider uppercase mb-4"
            >
              Ons Proces
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            >
              Van idee tot <span className="text-[#D4AF37]">meubel</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#F5F5DC]/70 max-w-2xl mx-auto"
            >
              Transparant proces met persoonlijke aandacht voor elk detail.
            </motion.p>
          </div>

          {/* Process Steps - Horizontal on desktop, scrollable on mobile */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#8B5A2B] via-[#D4AF37] to-[#8B5A2B]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-6">
                    {/* Outer ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                    
                    {/* Inner circle with icon */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#8B5A2B] to-[#5D4037] flex items-center justify-center shadow-lg">
                      <span className="text-[#D4AF37]">{iconMap[step.icon]}</span>
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-sm font-bold text-[#3E2723]">
                      {step.id}
                    </div>

                    {/* Pulsing animation for current step indicator */}
                    {index === 2 && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="font-playfair text-xl font-bold text-[#D4AF37] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#F5F5DC]/70 mb-3 px-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 text-xs bg-[#8B5A2B]/30 text-[#D4AF37] rounded-full">
                    {step.duration}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <a href="#contact" className="btn-primary inline-flex">
              <span>Start uw project</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
