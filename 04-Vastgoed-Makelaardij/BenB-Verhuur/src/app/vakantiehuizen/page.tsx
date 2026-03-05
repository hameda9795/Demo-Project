"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Heart,
  Filter,
  SlidersHorizontal,
  X,
  Wifi,
  Car,
  Flame,
  Waves,
  PawPrint,
  Dumbbell,
  Wind,
  Tv,
  WashingMachine,
  Trees,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
// import { Input } from "@/components/ui/input";
import { properties } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  WiFi: Wifi,
  Keuken: Flame,
  Wasmachine: WashingMachine,
  Airconditioning: Wind,
  Verwarming: Flame,
  TV: Tv,
  "Gratis parkeren": Car,
  "Balkon/Terras": Trees,
  Zwembad: Waves,
  Fitnessruimte: Dumbbell,
  "Huisdieren toegestaan": PawPrint,
};

const locations = ["Alle locaties", "Amsterdam", "Utrecht", "Den Haag", "Rotterdam", "Veluwe", "Zeeland"];

export default function PropertiesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Alle locaties");
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [likedProperties, setLikedProperties] = useState<Set<string>>(new Set());

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const toggleLike = (id: string) => {
    setLikedProperties((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Filter properties
  const filteredProperties = properties.filter((property) => {
    const matchesLocation = selectedLocation === "Alle locaties" || 
      property.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesPrice = property.pricePerNight >= priceRange[0] && 
      property.pricePerNight <= priceRange[1];
    const matchesAmenities = selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) => property.amenities.includes(amenity));
    
    return matchesLocation && matchesPrice && matchesAmenities;
  });

  return (
    <main className="min-h-screen bg-cream pt-24 lg:pt-32 pb-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Vind uw perfecte verblijf
          </h1>
          <p className="text-charcoal/60 text-lg">
            {filteredProperties.length} accommodaties beschikbaar
          </p>
        </motion.div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-0 z-30 bg-cream/95 backdrop-blur-sm border-b border-cream-200 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar">
            {/* Location Filter */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-terracotta" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-white px-4 py-2 rounded-full border border-cream-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-terracotta whitespace-nowrap"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-cream-200">
              <span className="text-sm text-charcoal/60">Prijs:</span>
              <span className="text-sm font-medium">€{priceRange[0]} - €{priceRange[1]}</span>
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden ml-auto"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* More Filters Button (Desktop) */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="hidden md:flex ml-auto"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Meer filters
              {selectedAmenities.length > 0 && (
                <Badge className="ml-2 bg-terracotta">{selectedAmenities.length}</Badge>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "lg:w-64 flex-shrink-0",
              isFilterOpen ? "block" : "hidden lg:block"
            )}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-lg">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="lg:hidden p-2 hover:bg-cream-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <label className="font-medium text-charcoal mb-3 block">Prijs per nacht</label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={50}
                  max={500}
                  step={10}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-charcoal/60">
                  <span>€{priceRange[0]}</span>
                  <span>€{priceRange[1]}</span>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="font-medium text-charcoal mb-3 block">Voorzieningen</label>
                <div className="space-y-2">
                  {["WiFi", "Keuken", "Wasmachine", "Airconditioning", "Gratis parkeren", "Huisdieren toegestaan"].map(
                    (amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-cream-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-4 h-4 rounded border-cream-300 text-terracotta focus:ring-terracotta"
                        />
                        <span className="text-sm">{amenity}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedAmenities.length > 0 || selectedLocation !== "Alle locaties" || priceRange[0] !== 50 || priceRange[1] !== 500) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-6"
                  onClick={() => {
                    setSelectedLocation("Alle locaties");
                    setPriceRange([50, 500]);
                    setSelectedAmenities([]);
                  }}
                >
                  Wis alle filters
                </Button>
              )}
            </div>
          </motion.aside>

          {/* Properties Grid */}
          <div className="flex-1">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-charcoal/60 text-lg">Geen accommodaties gevonden met deze filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedLocation("Alle locaties");
                    setPriceRange([50, 500]);
                    setSelectedAmenities([]);
                  }}
                >
                  Wis filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => {
                  const isLiked = likedProperties.has(property.id);
                  return (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={`/vakantiehuizen/${property.id}`}>
                        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                          {/* Image */}
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={property.images[0]}
                              alt={property.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Instant Book Badge */}
                            {property.instantBook && (
                              <div className="absolute top-3 left-3 z-10">
                                <Badge className="bg-white/90 text-charcoal">
                                  Direct boeken
                                </Badge>
                              </div>
                            )}

                            {/* Wishlist Button */}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleLike(property.id);
                              }}
                              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                            >
                              <Heart
                                className={cn(
                                  "w-5 h-5 transition-all duration-300",
                                  isLiked
                                    ? "fill-terracotta text-terracotta scale-110"
                                    : "text-white"
                                )}
                              />
                            </button>

                            {/* Price Badge */}
                            <div className="absolute bottom-3 left-3">
                              <div className="glass px-3 py-1.5 rounded-full">
                                <span className="font-bold text-charcoal">{formatPrice(property.pricePerNight)}</span>
                                <span className="text-xs text-charcoal/70"> /nacht</span>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-display font-semibold text-lg text-charcoal line-clamp-1 group-hover:text-terracotta transition-colors">
                                  {property.title}
                                </h3>
                                <p className="text-sm text-charcoal/60 flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5" />
                                  {property.location}
                                </p>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Star className="w-4 h-4 fill-terracotta text-terracotta" />
                                <span className="font-medium">{property.rating}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3">
                              <span>{property.maxGuests} gasten</span>
                              <span>•</span>
                              <span>{property.bedrooms} slaapkamers</span>
                            </div>

                            {/* Amenities */}
                            <div className="flex flex-wrap gap-2">
                              {property.amenities.slice(0, 3).map((amenity) => {
                                const Icon = amenityIcons[amenity];
                                return Icon ? (
                                  <span
                                    key={amenity}
                                    className="inline-flex items-center gap-1 text-xs text-charcoal/50"
                                  >
                                    <Icon className="w-3 h-3" />
                                    {amenity}
                                  </span>
                                ) : null;
                              })}
                              {property.amenities.length > 3 && (
                                <span className="text-xs text-charcoal/50">
                                  +{property.amenities.length - 3}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
