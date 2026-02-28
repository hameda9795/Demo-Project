"use client"

import { AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

export default function DemoWatermark() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-1.5 px-4 text-center"
    >
      <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium">
        <AlertTriangle className="w-4 h-4" />
        <span>DEMO WEBSITE - Alle contactgegevens zijn fictief (VOORBEELD)</span>
        <AlertTriangle className="w-4 h-4" />
      </div>
    </motion.div>
  )
}
