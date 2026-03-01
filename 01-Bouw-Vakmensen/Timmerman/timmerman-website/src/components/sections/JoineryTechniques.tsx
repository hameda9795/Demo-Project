/**
 * Joinery Techniques Showcase
 * Van den Berg Timmerwerken
 * 
 * Educational section displaying traditional joinery methods
 * - SVG animations for each technique
 * - Interactive cards with "Why better than screws" reveal
 * - Dovetail, Mortise-Tenon, and Finger joint visualizations
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JOINERY_TECHNIQUES } from "@/lib/data";
import { ChevronDown, Check } from "lucide-react";

/**
 * Dovetail Joint SVG Animation
 */
function DovetailAnimation({ isActive }: { isActive: boolean }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-32">
      {/* Left piece with tails */}
      <motion.path
        d="M10,10 L70,10 L60,30 L70,50 L60,70 L70,90 L60,110 L10,110 Z"
        fill="#8B5A2B"
        stroke="#3E2723"
        strokeWidth="2"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: isActive ? 0 : -30, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Right piece with pins */}
      <motion.path
        d="M70,10 L130,10 L120,30 L130,50 L120,70 L130,90 L120,110 L70,110 L80,90 L70,70 L80,50 L70,30 Z"
        fill="#A67B5B"
        stroke="#3E2723"
        strokeWidth="2"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: isActive ? 0 : 30, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
      
      {/* Highlight the interlock */}
      <motion.rect
        x="65"
        y="45"
        width="10"
        height="30"
        fill="#D4AF37"
        opacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
    </svg>
  );
}

/**
 * Mortise and Tenon SVG Animation
 */
function MortiseTenonAnimation({ isActive }: { isActive: boolean }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-32">
      {/* Vertical piece with mortise (hole) */}
      <motion.rect
        x="80"
        y="10"
        width="40"
        height="100"
        fill="#8B5A2B"
        stroke="#3E2723"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Mortise hole */}
      <rect x="85" y="45" width="30" height="30" fill="#F5F5DC" />
      
      {/* Horizontal piece with tenon */}
      <motion.g
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isActive ? 0 : -100, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <rect x="10" y="55" width="80" height="20" fill="#A67B5B" stroke="#3E2723" strokeWidth="2" />
        {/* Tenon */}
        <rect x="85" y="50" width="25" height="20" fill="#A67B5B" stroke="#3E2723" strokeWidth="2" />
      </motion.g>
      
      {/* Rotation indicator */}
      <motion.circle
        cx="100"
        cy="60"
        r="15"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeDasharray="5,3"
        initial={{ rotate: 0 }}
        animate={{ rotate: isActive ? 360 : 0 }}
        transition={{ duration: 2, ease: "linear" }}
      />
    </svg>
  );
}

/**
 * Finger Joint SVG Animation
 */
function FingerJointAnimation({ isActive }: { isActive: boolean }) {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-32">
      {/* Top piece */}
      <motion.g
        initial={{ y: -20 }}
        animate={{ y: isActive ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <path
          d="M10,10 L50,10 L50,25 L70,25 L70,10 L110,10 L110,25 L130,25 L130,10 L170,10 L170,45 L130,45 L130,30 L110,30 L110,45 L70,45 L70,30 L50,30 L50,45 L10,45 Z"
          fill="#8B5A2B"
          stroke="#3E2723"
          strokeWidth="2"
        />
      </motion.g>
      
      {/* Bottom piece */}
      <motion.g
        initial={{ y: 20 }}
        animate={{ y: isActive ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <path
          d="M10,55 L50,55 L50,40 L70,40 L70,55 L110,55 L110,40 L130,40 L130,55 L170,55 L170,90 L130,90 L130,75 L110,75 L110,90 L70,90 L70,75 L50,75 L50,90 L10,90 Z"
          fill="#A67B5B"
          stroke="#3E2723"
          strokeWidth="2"
        />
      </motion.g>
      
      {/* Glue lines indication */}
      <motion.path
        d="M10,50 L170,50"
        stroke="#D4AF37"
        strokeWidth="3"
        strokeDasharray="8,4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isActive ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </svg>
  );
}

/**
 * Technique Card Component
 */
function TechniqueCard({ 
  technique, 
  isExpanded, 
  onToggle,
  index
}: { 
  technique: typeof JOINERY_TECHNIQUES[0];
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  const animationComponents: Record<string, React.FC<{ isActive: boolean }>> = {
    "dovetail-interlock": DovetailAnimation,
    "mortise-rotate": MortiseTenonAnimation,
    "fingers-stack": FingerJointAnimation,
  };

  const AnimationComponent = animationComponents[technique.svgAnimation];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${
        isExpanded ? "ring-2 ring-[#D4AF37]" : ""
      }`}
    >
      {/* SVG Animation Area */}
      <div className="p-6 bg-gradient-to-b from-[#F5F5DC] to-white">
        {AnimationComponent && <AnimationComponent isActive={isExpanded} />}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#3E2723]">
              {technique.name}
            </h3>
            <span className="text-sm text-[#4A5568]">{technique.nameEn}</span>
          </div>
          
          {/* Expand/Collapse Button */}
          <button
            onClick={onToggle}
            className="p-2 rounded-full bg-[#8B5A2B]/10 hover:bg-[#8B5A2B]/20 transition-colors"
            aria-label={isExpanded ? "Toon minder" : "Toon meer"}
          >
            <ChevronDown 
              className={`w-5 h-5 text-[#8B5A2B] transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`} 
            />
          </button>
        </div>

        <p className="text-[#4A5568] mb-4">{technique.description}</p>

        {/* Benefits List */}
        <ul className="space-y-2 mb-4">
          {technique.benefits.slice(0, 2).map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm text-[#4A5568]">
              <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-[#8B5A2B]/10">
                <h4 className="font-semibold text-[#3E2723] mb-3">
                  Waarom dit beter is dan schroeven
                </h4>
                <p className="text-sm text-[#4A5568] mb-4">
                  {technique.vsScrews}
                </p>
                
                <h4 className="font-semibold text-[#3E2723] mb-3">
                  Alle voordelen
                </h4>
                <ul className="space-y-2">
                  {technique.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-[#4A5568]">
                      <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function JoineryTechniques() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="over-ons" className="py-24 bg-[#F5F5DC]">
      {/* Wood plank separator */}
      <div className="wood-plank mb-16" />

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
              Ons vakmanschap
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 dovetail-underline inline-block"
            >
              Onze verbindingstechnieken
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4A5568] max-w-2xl mx-auto"
            >
              Traditionele ambachtstechnieken die generaties meegaan. 
              Klik op een kaart om meer te ontdekken.
            </motion.p>
          </div>

          {/* Technique Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {JOINERY_TECHNIQUES.map((technique, index) => (
              <TechniqueCard
                key={technique.id}
                technique={technique}
                isExpanded={expandedId === technique.id}
                onToggle={() => setExpandedId(
                  expandedId === technique.id ? null : technique.id
                )}
                index={index}
              />
            ))}
          </div>

          {/* Trust Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#8B5A2B]/10 rounded-full">
              <Check className="w-5 h-5 text-[#8B5A2B]" />
              <span className="text-[#3E2723] font-medium">
                Levenslange garantie op al onze verbindingen
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
