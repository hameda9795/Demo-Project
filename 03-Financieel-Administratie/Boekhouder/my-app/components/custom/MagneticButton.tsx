"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className,
  onClick,
  disabled,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    setPosition({
      x: distanceX * 0.15,
      y: distanceY * 0.15,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={cn(
        "relative inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
