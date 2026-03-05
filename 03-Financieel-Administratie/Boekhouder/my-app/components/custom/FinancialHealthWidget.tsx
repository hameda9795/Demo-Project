"use client";

import { motion } from "framer-motion";
import { Heart, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface FinancialHealthWidgetProps {
  score?: number;
}

export function FinancialHealthWidget({ score = 78 }: FinancialHealthWidgetProps) {
  const getStatus = (s: number) => {
    if (s >= 80) return { label: "Uitstekend", color: "#22c55e", icon: TrendingUp };
    if (s >= 60) return { label: "Goed", color: "#d4af37", icon: TrendingUp };
    if (s >= 40) return { label: "Gemiddeld", color: "#f97316", icon: Minus };
    return { label: "Aandacht nodig", color: "#ef4444", icon: TrendingDown };
  };

  const status = getStatus(score);
  const Icon = status.icon;

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <GlassCard className="max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center">
          <Heart className="w-5 h-5 text-[#d4af37]" />
        </div>
        <div>
          <h3 className="font-bold text-[#1e3a5f] dark:text-white">Financieel Gezondheid</h3>
          <p className="text-xs text-muted-foreground">Bedrijfsgesondheid indicator</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-40 h-40">
          {/* Background circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(30, 58, 95, 0.1)"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={status.color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold text-[#1e3a5f] dark:text-white"
            >
              {score}%
            </motion.span>
            <div className="flex items-center gap-1 mt-1">
              <Icon className="w-4 h-4" style={{ color: status.color }} />
              <span className="text-xs font-medium" style={{ color: status.color }}>
                {status.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#1e3a5f]/10">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-xs text-muted-foreground">Liquide middelen</p>
            <p className="font-semibold text-[#1e3a5f] dark:text-white">Goed</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Schuldratio</p>
            <p className="font-semibold text-[#1e3a5f] dark:text-white">Laag</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
