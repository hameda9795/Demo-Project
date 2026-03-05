"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);
      
      // Delay to ensure DOM is ready
      setTimeout(addHoverListeners, 100);
      
      // Re-add listeners when DOM changes
      const observer = new MutationObserver(addHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("resize", checkMobile);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="bg-white rounded-full"
          animate={{
            width: isHovering ? 60 : 12,
            height: isHovering ? 60 : 12,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            width: { type: "spring", damping: 20, stiffness: 300 },
            height: { type: "spring", damping: 20, stiffness: 300 },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>
      
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: useSpring(cursorX, { damping: 30, stiffness: 200 }),
          y: useSpring(cursorY, { damping: 30, stiffness: 200 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="border border-warm-terracotta rounded-full"
          animate={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            opacity: isVisible ? (isHovering ? 0.5 : 0.3) : 0,
          }}
          transition={{
            width: { type: "spring", damping: 25, stiffness: 200 },
            height: { type: "spring", damping: 25, stiffness: 200 },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>
    </>
  );
}
