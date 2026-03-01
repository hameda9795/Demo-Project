'use client';

/**
 * Availability Calendar - Booking Tool
 * 
 * Features:
 * - Interactive calendar showing next 3 months
 * - Color coding: Available (white), Low availability (orange), Fully booked (burgundy)
 * - Price per day shown on hover
 * - Room selection for selected dates
 * - Demo logic with fluctuating prices
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Users, Check } from 'lucide-react';
import { rooms } from '@/lib/data';
import { generateDateRange, addDays, formatPrice, getMonthName, getDayName } from '@/lib/utils';

// Generate demo availability data
function generateAvailability(startDate: Date, days: number) {
  const availability = [];
  for (let i = 0; i < days; i++) {
    const date = addDays(startDate, i);
    const basePrice = 120 + Math.floor(Math.random() * 200);
    const availabilityLevel = Math.random() > 0.7 ? 'low' : Math.random() > 0.9 ? 'none' : 'high';
    
    availability.push({
      date,
      price: basePrice,
      availabilityLevel,
      roomsLeft: availabilityLevel === 'none' ? 0 : availabilityLevel === 'low' ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * 10) + 5,
    });
  }
  return availability;
}

export default function BookingCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);

  // Generate 3 months of availability
  const availability = useMemo(() => {
    return generateAvailability(new Date(), 90);
  }, []);

  // Get availability for a specific date
  const getDateAvailability = (date: Date) => {
    return availability.find(a => 
      a.date.toDateString() === date.toDateString()
    );
  };

  // Generate calendar days for current month view
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() || 7; // 1 = Monday

    const days = [];
    
    // Empty cells for days before start of month
    for (let i = 1; i < startingDay; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const handleDateClick = (date: Date) => {
    const avail = getDateAvailability(date);
    if (!avail || avail.availabilityLevel === 'none') return;

    if (selectedDates.length === 0 || selectedDates.length === 2) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 1) {
      if (date > selectedDates[0]) {
        setSelectedDates([selectedDates[0], date]);
      } else {
        setSelectedDates([date]);
      }
    }
  };

  const isDateSelected = (date: Date) => {
    return selectedDates.some(d => d.toDateString() === date.toDateString());
  };

  const isInRange = (date: Date) => {
    if (selectedDates.length !== 2) return false;
    return date > selectedDates[0] && date < selectedDates[1];
  };

  const navigateMonth = (direction: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  const nights = selectedDates.length === 2 
    ? Math.ceil((selectedDates[1].getTime() - selectedDates[0].getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <section id="beschikbaarheid" className="py-24 bg-cream">
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
            Direct Boeken
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-semibold mb-6">
            Beschikbaarheid & Prijzen
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto text-lg">
            Bekijk onze beschikbaarheid voor de komende maanden. 
            Selecteer uw data om de beste prijzen te zien.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl text-navy font-semibold">
                {getMonthName(currentMonth)}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="w-10 h-10 rounded-full bg-cream hover:bg-gold/20 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-navy" />
                </button>
                <button
                  onClick={() => navigateMonth(1)}
                  className="w-10 h-10 rounded-full bg-cream hover:bg-gold/20 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-navy" />
                </button>
              </div>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(day => (
                <div key={day} className="text-center text-navy/50 text-sm font-medium py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {getCalendarDays().map((date, index) => {
                if (!date) {
                  return <div key={index} className="aspect-square" />;
                }

                const avail = getDateAvailability(date);
                const isSelected = isDateSelected(date);
                const inRange = isInRange(date);
                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                let bgClass = 'bg-cream hover:bg-gold/10';
                let textClass = 'text-navy';
                
                if (isPast || avail?.availabilityLevel === 'none') {
                  bgClass = 'bg-gray-100 cursor-not-allowed';
                  textClass = 'text-navy/30';
                } else if (isSelected) {
                  bgClass = 'bg-navy';
                  textClass = 'text-white';
                } else if (inRange) {
                  bgClass = 'bg-navy/10';
                  textClass = 'text-navy';
                } else if (avail?.availabilityLevel === 'low') {
                  bgClass = 'bg-orange-50 hover:bg-orange-100';
                  textClass = 'text-orange-700';
                }

                return (
                  <motion.button
                    key={index}
                    whileHover={!isPast && avail?.availabilityLevel !== 'none' ? { scale: 1.05 } : {}}
                    onClick={() => handleDateClick(date)}
                    onMouseEnter={() => setHoveredDate(date)}
                    onMouseLeave={() => setHoveredDate(null)}
                    disabled={isPast || avail?.availabilityLevel === 'none'}
                    className={`aspect-square rounded-lg relative transition-all ${bgClass} ${textClass}`}
                  >
                    <span className="text-sm font-medium">{date.getDate()}</span>
                    
                    {/* Price tooltip on hover */}
                    {hoveredDate?.toDateString() === date.toDateString() && avail && !isPast && avail.availabilityLevel !== 'none' && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-navy text-white text-xs rounded-lg whitespace-nowrap z-10 shadow-lg">
                        {formatPrice(avail.price)}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy" />
                      </div>
                    )}

                    {/* Availability indicator dot */}
                    {avail && !isPast && avail.availabilityLevel !== 'none' && (
                      <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                        avail.availabilityLevel === 'high' ? 'bg-green-500' : 'bg-orange-500'
                      }`} />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm text-navy/70">
                <div className="w-4 h-4 rounded bg-cream border" />
                <span>Beschikbaar</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy/70">
                <div className="w-4 h-4 rounded bg-orange-50 border border-orange-200" />
                <span>Laatste kamers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy/70">
                <div className="w-4 h-4 rounded bg-gray-100" />
                <span>Volgeboekt</span>
              </div>
            </div>
          </motion.div>

          {/* Booking Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Selection Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-serif text-xl text-navy font-semibold mb-4">
                Uw Selectie
              </h3>

              {selectedDates.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                    <div>
                      <p className="text-navy/50 text-xs">Check-in</p>
                      <p className="text-navy font-medium">
                        {selectedDates[0].toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' })}
                      </p>
                    </div>
                    <CalendarIcon className="w-5 h-5 text-gold" />
                  </div>

                  {selectedDates[1] && (
                    <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                      <div>
                        <p className="text-navy/50 text-xs">Check-out</p>
                        <p className="text-navy font-medium">
                          {selectedDates[1].toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' })}
                        </p>
                      </div>
                      <CalendarIcon className="w-5 h-5 text-gold" />
                    </div>
                  )}

                  {nights > 0 && (
                    <div className="p-3 bg-gold/10 rounded-lg text-center">
                      <span className="text-gold-dark font-medium">{nights} nachten</span>
                    </div>
                  )}

                  {/* Guest Selector */}
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-gold" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="flex-1 p-3 bg-cream rounded-lg text-navy focus:border-gold focus:outline-none"
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'gast' : 'gasten'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <p className="text-navy/50 text-center py-8">
                  Selecteer uw aankomst- en vertrekdatum in de kalender
                </p>
              )}
            </div>

            {/* Available Rooms */}
            {selectedDates.length === 2 && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="font-serif text-xl text-navy font-semibold mb-4">
                  Beschikbare Kamers
                </h3>
                <div className="space-y-3">
                  {rooms.map((room) => {
                    const totalPrice = room.pricePerNight * nights;
                    return (
                      <motion.div
                        key={room.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 border border-gray-100 rounded-xl hover:border-gold transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-navy group-hover:text-gold transition-colors">
                            {room.name}
                          </h4>
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-navy/50 text-sm">{room.maxGuests} gasten · {room.size}m²</span>
                          <span className="text-gold font-semibold">{formatPrice(totalPrice)}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                <button className="w-full mt-4 py-4 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-colors btn-shimmer">
                  Selecteer uw verblijf
                </button>
              </div>
            )}

            <p className="text-navy/50 text-xs text-center">
              DEMO - Prijzen zijn indicatief en kunnen variëren
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
