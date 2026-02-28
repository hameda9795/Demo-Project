"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, title, description }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}>
        {/* After Image (Full width) */}
        <Image
          src={afterImage}
          alt={`${title} - Na`}
          fill
          className="object-cover"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image
            src={beforeImage}
            alt={`${title} - Voor`}
            fill
            className="object-cover"
          />
          {/* Label */}
          <div className="absolute top-4 left-4 px-3 py-1.5 
            bg-amber-600 text-white text-sm font-medium rounded-full">
            Voor
          </div>
        </div>

        {/* After Label */}
        <div className="absolute top-4 right-4 px-3 py-1.5 
          bg-green-600 text-white text-sm font-medium rounded-full">
          Na
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-12 h-12 bg-white rounded-full shadow-xl 
            flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 text-forest-800" />
          </div>
        </div>

        {/* Swipe instruction */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2
          px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full
          text-white text-sm flex items-center gap-2">
          <MoveHorizontal className="w-4 h-4" />
          Swipe om te vergelijken
        </div>
      </div>

      <div>
        <h3 className="font-serif text-xl text-forest-900 mb-1">{title}</h3>
        <p className="text-forest-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

const transformations = [
  {
    beforeImage: "/images/hovenier/before/messy-garden-1.jpg",
    afterImage: "/images/hovenier/after/design-1.jpg",
    title: "Moderne Stadstuin",
    description: "Transformatie van een verwaarloosde stadstuin naar een modern groen buitenkamer.",
  },
  {
    beforeImage: "/images/hovenier/before/bare-soil.jpg",
    afterImage: "/images/hovenier/after/design-2.jpg",
    title: "Landelijke Achtertuin",
    description: "Van kale grond naar een bloeiende landelijke tuin met borders en gazon.",
  },
  {
    beforeImage: "/images/hovenier/before/wild-grass.jpg",
    afterImage: "/images/hovenier/after/terrace-garden.jpg",
    title: "Dakterras Oase",
    description: "Dakterrastransformatie met duurzame plantenbakken en loungeruimte.",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-24 bg-wood">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 
            bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Transformaties
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest-900 mb-4">
            Voor & Na
          </h2>
          <p className="text-forest-600 text-lg">
            Zie hoe wij verwaarloosde tuinen transformeren tot groene paradijzen. 
            Sleep over de afbeeldingen om de magie te zien.
          </p>
        </motion.div>

        {/* Sliders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>
              <BeforeAfterSlider {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
