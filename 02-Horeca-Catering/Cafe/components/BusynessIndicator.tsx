'use client';

/**
 * Live Busyness Indicator
 * Shows current café busyness level
 * 
 * Traffic Light System:
 * - Green (Rustig): Come on in!
 * - Orange (Gezellig druk): 15 min wait
 * - Red (Even wachten): 30+ min wait
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BusynessLevel } from '@/types';

interface BusynessIndicatorProps {
  level?: BusynessLevel;
  waitTime?: number;
  className?: string;
}

const config = {
  quiet: {
    color: 'bg-green-500',
    textColor: 'text-green-700',
    bgColor: 'bg-green-100',
    label: 'Rustig',
    message: 'Kom gezellig langs!',
  },
  busy: {
    color: 'bg-amber-500',
    textColor: 'text-amber-700',
    bgColor: 'bg-amber-100',
    label: 'Gezellig druk',
    message: 'Bestel vooruit om te wachten',
  },
  crowded: {
    color: 'bg-red-500',
    textColor: 'text-red-700',
    bgColor: 'bg-red-100',
    label: 'Even wachten',
    message: '30+ minuten wachttijd',
  },
};

export function BusynessIndicator({ 
  level = 'busy', 
  waitTime = 15,
  className 
}: BusynessIndicatorProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const currentConfig = config[level];

  // Pulse animation when level changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <motion.div
      animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
        currentConfig.bgColor,
        className
      )}
    >
      {/* Traffic Light Dot */}
      <span className="relative flex h-3 w-3">
        {/* Pulse ring */}
        <span className={cn(
          'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
          currentConfig.color
        )} />
        {/* Solid dot */}
        <span className={cn(
          'relative inline-flex rounded-full h-3 w-3',
          currentConfig.color
        )} />
      </span>

      {/* Status Text */}
      <div className="flex items-center gap-2">
        <Users className={cn('w-4 h-4', currentConfig.textColor)} />
        <span className={cn('text-sm font-semibold', currentConfig.textColor)}>
          {currentConfig.label}
        </span>
        
        {/* Wait time indicator */}
        {waitTime > 0 && level !== 'quiet' && (
          <span className="flex items-center gap-1 text-xs text-espresso-600">
            <Clock className="w-3 h-3" />
            {waitTime} min
          </span>
        )}
      </div>
    </motion.div>
  );
}
