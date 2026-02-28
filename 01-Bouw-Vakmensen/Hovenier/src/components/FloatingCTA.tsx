"use client";

import { Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function FloatingCTA() {
  const pathname = usePathname();
  
  // Hide on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const handleClick = () => {
    window.open("https://techsolutionsutrecht.nl/contact", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed z-50 group"
      style={{
        bottom: "24px",
        right: "24px",
      }}
    >
      {/* Desktop version - circular pill */}
      <div className="hidden md:flex items-center gap-3 px-6 py-4 
        bg-green-600/90 backdrop-blur-md
        rounded-full
        border-2 border-green-400/30
        shadow-lg shadow-green-500/30
        transition-all duration-300
        hover:scale-110 hover:bg-green-600
        animate-pulse-slow">
        <Leaf className="w-6 h-6 text-white" />
        <span className="text-white font-medium whitespace-nowrap">
          Direct Contact
        </span>
      </div>

      {/* Mobile version - centered, icon only with text */}
      <div className="md:hidden flex items-center gap-2 px-4 py-3 
        bg-green-600/90 backdrop-blur-md
        rounded-2xl
        border-2 border-green-400/30
        shadow-lg shadow-green-500/30
        transition-all duration-300
        hover:scale-105 hover:bg-green-600">
        <Leaf className="w-5 h-5 text-white" />
        <span className="text-white text-sm font-medium whitespace-nowrap">
          Direct Contact
        </span>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 rounded-full bg-green-500/20 blur-xl animate-pulse-slow" />
    </motion.button>
  );
}
