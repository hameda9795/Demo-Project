"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, ChevronDown, Minus, Plus, Sparkles } from "lucide-react";
import { format, addDays, differenceInDays } from "date-fns";
import { nl } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";

interface BookingWidgetProps {
  pricePerNight: number;
  cleaningFee?: number;
  serviceFee?: number;
  className?: string;
  compact?: boolean;
}

export function BookingWidget({
  pricePerNight,
  cleaningFee = 75,
  serviceFee = 45,
  className,
  compact = false,
}: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const subtotal = nights * pricePerNight;
  const total = subtotal + cleaningFee + serviceFee;

  // Quick date selection for demo
  const quickSelectDates = [
    { label: "Morgen", checkIn: new Date(), checkOut: addDays(new Date(), 3) },
    { label: "Volgend weekend", checkIn: addDays(new Date(), 5), checkOut: addDays(new Date(), 7) },
    { label: "Over 2 weken", checkIn: addDays(new Date(), 14), checkOut: addDays(new Date(), 17) },
  ];

  if (compact) {
    return (
      <div className={cn("glass rounded-2xl p-4 shadow-xl", className)}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-display font-bold text-charcoal">{formatPrice(pricePerNight)}</span>
            <span className="text-charcoal/60"> / nacht</span>
          </div>
          <Button className="bg-terracotta hover:bg-terracotta-600">
            Direct boeken
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "glass rounded-3xl p-6 shadow-2xl shadow-charcoal/10 sticky top-24",
        className
      )}
    >
      {/* Price Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-3xl font-display font-bold text-charcoal">{formatPrice(pricePerNight)}</span>
          <span className="text-charcoal/60 ml-1">/ nacht</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Sparkles className="w-4 h-4 text-terracotta" />
          <span className="text-charcoal/70">Direct boeken</span>
        </div>
      </div>

      {/* Date Selection */}
      <div className="space-y-3 mb-4">
        <div
          className="relative"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        >
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-cream-200 cursor-pointer hover:border-terracotta/50 transition-colors">
            <Calendar className="w-5 h-5 text-terracotta" />
            <div className="flex-1">
              <p className="text-xs text-charcoal/60 uppercase tracking-wider">Datums</p>
              <p className="text-sm font-medium text-charcoal">
                {checkIn && checkOut
                  ? `${format(checkIn, "d MMM", { locale: nl })} - ${format(checkOut, "d MMM", { locale: nl })}`
                  : "Check-in - Check-out"}
              </p>
            </div>
            <ChevronDown className={cn("w-5 h-5 text-charcoal/40 transition-transform", isCalendarOpen && "rotate-180")} />
          </div>

          {/* Calendar Dropdown */}
          <AnimatePresence>
            {isCalendarOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-cream-200 p-4 z-20"
              >
                <p className="text-sm font-medium text-charcoal mb-3">Snel selecteren:</p>
                <div className="space-y-2">
                  {quickSelectDates.map((option) => (
                    <button
                      key={option.label}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCheckIn(option.checkIn);
                        setCheckOut(option.checkOut);
                        setIsCalendarOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-cream-100 transition-colors text-left"
                    >
                      <span className="text-sm font-medium text-charcoal">{option.label}</span>
                      <span className="text-xs text-charcoal/60">
                        {format(option.checkIn, "d MMM", { locale: nl })} - {format(option.checkOut, "d MMM", { locale: nl })}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Guest Selection */}
        <div className="relative">
          <div
            onClick={() => setIsGuestsOpen(!isGuestsOpen)}
            className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-cream-200 cursor-pointer hover:border-terracotta/50 transition-colors"
          >
            <Users className="w-5 h-5 text-terracotta" />
            <div className="flex-1">
              <p className="text-xs text-charcoal/60 uppercase tracking-wider">Gasten</p>
              <p className="text-sm font-medium text-charcoal">{guests} {guests === 1 ? "gast" : "gasten"}</p>
            </div>
            <ChevronDown className={cn("w-5 h-5 text-charcoal/40 transition-transform", isGuestsOpen && "rotate-180")} />
          </div>

          {/* Guests Dropdown */}
          <AnimatePresence>
            {isGuestsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-cream-200 p-4 z-20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-charcoal">Gasten</p>
                    <p className="text-sm text-charcoal/60">Maximaal 8 gasten</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setGuests(Math.max(1, guests - 1));
                      }}
                      className="w-8 h-8 rounded-full border-2 border-cream-300 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center font-medium">{guests}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setGuests(Math.min(8, guests + 1));
                      }}
                      className="w-8 h-8 rounded-full border-2 border-cream-300 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Price Breakdown */}
      {nights > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-2 pb-4 border-b border-cream-200 mb-4"
        >
          <div className="flex justify-between text-sm">
            <span className="text-charcoal/70">{formatPrice(pricePerNight)} x {nights} nachten</span>
            <span className="text-charcoal">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-charcoal/70">Schoonmaakkosten</span>
            <span className="text-charcoal">{formatPrice(cleaningFee)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-charcoal/70">Servicekosten</span>
            <span className="text-charcoal">{formatPrice(serviceFee)}</span>
          </div>
        </motion.div>
      )}

      {/* Total */}
      {nights > 0 && (
        <div className="flex justify-between items-center mb-6">
          <span className="font-display font-bold text-lg text-charcoal">Totaal</span>
          <span className="font-display font-bold text-xl text-terracotta">{formatPrice(total)}</span>
        </div>
      )}

      {/* Book Button */}
      <Button
        className="w-full h-14 text-lg font-semibold shadow-lg shadow-terracotta/30"
        disabled={!checkIn || !checkOut}
      >
        {checkIn && checkOut ? "Direct boeken" : "Selecteer datums"}
      </Button>

      {/* No extra costs note */}
      <p className="text-center text-xs text-charcoal/50 mt-3">
        Geen verborgen kosten. Annuleren is gratis tot 48 uur voor aankomst.
      </p>
    </motion.div>
  );
}
