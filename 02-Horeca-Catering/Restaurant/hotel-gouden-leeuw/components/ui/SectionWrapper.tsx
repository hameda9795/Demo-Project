'use client';

/**
 * SectionWrapper Component
 * 
 * A reusable wrapper for page sections with:
 * - Consistent padding and max-width
 * - Optional background color
 * - Scroll reveal animation
 */

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'cream' | 'navy' | 'white';
  padding?: 'small' | 'medium' | 'large';
}

const backgroundStyles = {
  cream: 'bg-cream',
  navy: 'bg-navy',
  white: 'bg-white',
};

const paddingStyles = {
  small: 'py-12',
  medium: 'py-16',
  large: 'py-24',
};

export default function SectionWrapper({
  children,
  className,
  id,
  background = 'cream',
  padding = 'large',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        paddingStyles[padding],
        'relative overflow-hidden',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
