"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Star,
  Heart,
  Share,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Flame,
  Wind,
  Tv,
  Check,
  ChevronLeft,
  MessageCircle,
  Shield,
  Calendar,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingWidget } from "@/components/booking/booking-widget";
import { AvailabilityCalendar } from "@/components/booking/availability-calendar";
import { properties } from "@/lib/data";
import { cn } from "@/lib/utils";

// Gallery Lightbox Component
function GalleryLightbox({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full h-full max-w-6xl max-h-[80vh] mx-6"
        >
          <Image
            src={images[currentIndex]}
            alt={`Afbeelding ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Thumbnails */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex ? "bg-white" : "bg-white/30"
              )}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

interface PropertyDetailClientProps {
  id: string;
}

export default function PropertyDetailClient({ id }: PropertyDetailClientProps) {
  const property = properties.find((p) => p.id === id);

  const [isLiked, setIsLiked] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedDates, setSelectedDates] = useState<{ checkIn: Date | null; checkOut: Date | null }>({
    checkIn: null,
    checkOut: null,
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">Accommodatie niet gevonden</h1>
          <Link href="/vakantiehuizen">
            <Button>Terug naar overzicht</Button>
          </Link>
        </div>
      </div>
    );
  }

  const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    WiFi: Wifi,
    Keuken: Flame,
    Wasmachine: () => <span className="text-lg">🧺</span>,
    Airconditioning: Wind,
    Verwarming: Flame,
    TV: Tv,
    "Gratis parkeren": Car,
    Balkon: () => <span className="text-lg">🌿</span>,
    Terras: () => <span className="text-lg">🌿</span>,
  };

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <main className="min-h-screen bg-white pb-32 lg:pb-12">
      {/* Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/vakantiehuizen">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Terug
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 hover:bg-cream-100 rounded-full transition-colors"
              >
                <Heart
                  className={cn(
                    "w-5 h-5 transition-all",
                    isLiked ? "fill-terracotta text-terracotta" : "text-charcoal"
                  )}
                />
              </button>
              <button className="p-2 hover:bg-cream-100 rounded-full transition-colors">
                <Share className="w-5 h-5 text-charcoal" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[500px]">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => openGallery(0)}>
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Side Images */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openGallery(index + 1)}
              >
                <Image
                  src={image}
                  alt={`${property.title} - ${index + 2}`}
                  fill
                  className="object-cover"
                />
                {index === 3 && property.images.length > 5 && (
                  <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
                    <span className="text-white font-medium">+{property.images.length - 5} foto&apos;s</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-4 text-charcoal/70">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-terracotta text-terracotta" />
                      <span className="font-medium">{property.rating}</span>
                      <span>({property.reviewCount} reviews)</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </span>
                  </div>
                </div>
                {property.instantBook && (
                  <Badge className="bg-sage text-white">
                    <Check className="w-3 h-3 mr-1" />
                    Direct boeken
                  </Badge>
                )}
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 py-6 border-y border-cream-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-terracotta" />
                  <span>{property.maxGuests} gasten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-terracotta" />
                  <span>{property.bedrooms} slaapkamers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-terracotta" />
                  <span>{property.bathrooms} badkamers</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">
                Over deze accommodatie
              </h2>
              <p className="text-charcoal/70 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">
                Voorzieningen
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || Check;
                  return (
                    <div key={amenity} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-charcoal/60" />
                      <span className="text-charcoal/70">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Host */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 p-6 bg-cream rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👋</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg">Verhuurd door {property.host.name}</h3>
                    {property.host.isSuperhost && (
                      <Badge variant="secondary" className="bg-terracotta/10 text-terracotta">
                        Superhost
                      </Badge>
                    )}
                  </div>
                  <p className="text-charcoal/60 text-sm mb-3">
                    Antwoordt {property.host.responseTime} • {property.host.responseRate}% antwoordpercentage
                  </p>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Stuur bericht
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Tabs Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="calendar" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Beschikbaarheid
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">
                    <Star className="w-4 h-4 mr-2" />
                    Reviews
                  </TabsTrigger>
                  <TabsTrigger value="location" className="flex-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    Locatie
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="calendar" className="mt-6">
                  <AvailabilityCalendar
                    selectedDates={selectedDates}
                    onDateSelect={(date) => {
                      if (!selectedDates.checkIn || (selectedDates.checkIn && selectedDates.checkOut)) {
                        setSelectedDates({ checkIn: date, checkOut: null });
                      } else if (date > selectedDates.checkIn) {
                        setSelectedDates({ ...selectedDates, checkOut: date });
                      }
                    }}
                  />
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="p-4 bg-cream rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <span className="text-lg">👤</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Gast {i + 1}</p>
                            <p className="text-xs text-charcoal/50">januari 2024</p>
                          </div>
                        </div>
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-terracotta text-terracotta" />
                          ))}
                        </div>
                        <p className="text-sm text-charcoal/70">
                          &ldquo;Geweldige locatie en hele fijne communicatie met de host. Echt een aanrader!&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6">
                  <div className="relative h-[400px] bg-cream rounded-2xl overflow-hidden map-placeholder flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-sage mx-auto mb-4" />
                      <p className="text-charcoal/70">{property.location}</p>
                      <p className="text-sm text-charcoal/50 mt-2">Precieze locatie wordt na boeking gedeeld</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Right Sidebar - Booking */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <BookingWidget
                pricePerNight={property.pricePerNight}
                cleaningFee={75}
                serviceFee={45}
              />

              {/* Trust Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-charcoal/60">
                  <Shield className="w-5 h-5 text-sage" />
                  <span>Gratis annulering tot 48 uur voor aankomst</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-charcoal/60">
                  <Check className="w-5 h-5 text-sage" />
                  <span>Prijs-kwaliteit verhouding gegarandeerd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Booking Bar */}
      <div className="lg:hidden fixed bottom-24 left-0 right-0 bg-white border-t border-cream-200 p-4 z-30">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-display font-bold text-charcoal">€{property.pricePerNight}</span>
            <span className="text-charcoal/60"> / nacht</span>
          </div>
          <Button className="bg-terracotta hover:bg-terracotta-600">
            Direct boeken
          </Button>
        </div>
      </div>

      {/* Gallery Lightbox */}
      <GalleryLightbox
        images={property.images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={galleryIndex}
      />
    </main>
  );
}
