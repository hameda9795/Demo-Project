'use client';

/**
 * Room Showcase - Archway Gallery
 * 
 * Design Philosophy:
 * - Grid with arch-shaped image containers
 * - Swiper.js carousels for room images
 * - Modal for room details on click
 * - Hover effects with gold borders and lift
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { 
  Wifi, 
  Bath, 
  Wine, 
  Tv, 
  Wind, 
  Sofa, 
  X,
  ChevronRight,
  Users,
  Maximize
} from 'lucide-react';
import { rooms } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import type { Room } from '@/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const iconMap: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  bath: <Bath className="w-4 h-4" />,
  wine: <Wine className="w-4 h-4" />,
  tv: <Tv className="w-4 h-4" />,
  wind: <Wind className="w-4 h-4" />,
  sofa: <Sofa className="w-4 h-4" />,
  'user-plus': <Users className="w-4 h-4" />,
  star: <Wifi className="w-4 h-4" />,
  utensils: <Wifi className="w-4 h-4" />,
  coffee: <Wifi className="w-4 h-4" />,
};

export default function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="kamers" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">
            Onze Accommodaties
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-semibold mb-6">
            Ontdek onze kamers
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto text-lg">
            Elk van onze 25 kamers is uniek ingericht met oog voor detail en comfort. 
            Kies de kamer die past bij uw wensen.
          </p>
        </motion.div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Arch Container */}
              <div 
                onClick={() => setSelectedRoom(room)}
                className="cursor-pointer"
              >
                {/* Arch Image Container */}
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-t-[50%] rounded-b-2xl border-4 border-transparent group-hover:border-gold transition-all duration-500 shadow-arch group-hover:shadow-lift">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    className="w-full h-full"
                  >
                    {room.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt={`${room.name} - afbeelding ${imgIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-navy px-6 py-3 rounded-full font-medium shadow-lg">
                      Bekijk Details
                    </span>
                  </div>
                </div>

                {/* Room Info */}
                <div className="px-2">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-2xl text-navy font-semibold group-hover:text-gold transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-navy/60 text-sm mt-1">{room.shortDescription}</p>
                    </div>
                    <div className="text-right">
                      {room.originalPrice && (
                        <span className="block text-navy/40 line-through text-sm">
                          vanaf {formatPrice(room.originalPrice)}
                        </span>
                      )}
                      <span className="text-gold font-semibold text-xl">
                        Nu vanaf {formatPrice(room.pricePerNight)}
                      </span>
                      <span className="text-navy/50 text-xs block">/ nacht (DEMO)</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {room.amenities.slice(0, 4).map((amenity, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-1.5 text-navy/70 text-sm"
                      >
                        <span className="text-gold">{iconMap[amenity.icon] || <Wifi className="w-4 h-4" />}</span>
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Room Details */}
                  <div className="flex items-center gap-4 text-sm text-navy/60">
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      {room.size} m²
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Max {room.maxGuests}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRoom(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-cream rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gold hover:text-navy transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Gallery */}
              <div className="relative aspect-video">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop
                  className="w-full h-full rounded-t-2xl"
                >
                  {selectedRoom.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`${selectedRoom.name} - afbeelding ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Room Details */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h2 className="font-serif text-3xl text-navy font-semibold mb-2">
                      {selectedRoom.name}
                    </h2>
                    <p className="text-navy/70">{selectedRoom.description}</p>
                  </div>
                  <div className="text-left md:text-right">
                    {selectedRoom.originalPrice && (
                      <span className="block text-navy/40 line-through">
                        vanaf {formatPrice(selectedRoom.originalPrice)}
                      </span>
                    )}
                    <span className="text-gold font-bold text-3xl">
                      {formatPrice(selectedRoom.pricePerNight)}
                    </span>
                    <span className="text-navy/50 text-sm block">/ nacht (DEMO prijs)</span>
                  </div>
                </div>

                {/* Room Specs */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-xl">
                  <div className="text-center">
                    <Maximize className="w-6 h-6 text-gold mx-auto mb-2" />
                    <span className="text-navy/70 text-sm">{selectedRoom.size} m²</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                    <span className="text-navy/70 text-sm">Max {selectedRoom.maxGuests} gasten</span>
                  </div>
                  <div className="text-center">
                    <span className="text-gold text-2xl font-bold block mb-1">{selectedRoom.floor}e</span>
                    <span className="text-navy/70 text-sm">Verdieping</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h4 className="font-serif text-xl text-navy font-semibold mb-4">Voorzieningen</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedRoom.amenities.map((amenity, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-2 p-3 bg-white rounded-lg"
                      >
                        <span className="text-gold">{iconMap[amenity.icon] || <Wifi className="w-5 h-5" />}</span>
                        <div>
                          <span className="text-navy font-medium text-sm block">{amenity.label}</span>
                          {amenity.description && (
                            <span className="text-navy/50 text-xs">{amenity.description}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-serif text-xl text-navy font-semibold mb-4">Kenmerken</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoom.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-gold/10 text-navy rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setSelectedRoom(null)}
                    className="flex-1 py-4 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-colors btn-shimmer flex items-center justify-center gap-2"
                  >
                    Boek Nu
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setSelectedRoom(null)}
                    className="flex-1 py-4 border-2 border-navy text-navy font-medium rounded-xl hover:bg-navy hover:text-white transition-colors"
                  >
                    Sluiten
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
