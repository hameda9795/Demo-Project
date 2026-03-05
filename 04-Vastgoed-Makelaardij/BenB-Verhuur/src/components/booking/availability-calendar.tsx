"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  isBefore,
  startOfDay,
} from "date-fns";
import { nl } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface AvailabilityCalendarProps {
  bookedDates?: Date[];
  onDateSelect?: (date: Date) => void;
  selectedDates?: { checkIn: Date | null; checkOut: Date | null };
  className?: string;
}

const WEEKDAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

// Generate some mock booked dates for demo
const generateMockBookedDates = (): Date[] => {
  const dates: Date[] = [];
  const today = new Date();
  
  // Book some random dates in the next 3 months
  for (let i = 0; i < 15; i++) {
    const randomDays = Math.floor(Math.random() * 90);
    dates.push(addDays(today, randomDays));
  }
  
  return dates;
};

export function AvailabilityCalendar({
  bookedDates = generateMockBookedDates(),
  onDateSelect,
  selectedDates,
  className,
}: AvailabilityCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [, setHoveredDate] = useState<Date | null>(null);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const isDateBooked = (date: Date) => {
    return bookedDates.some((bookedDate) => isSameDay(bookedDate, date));
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfDay(new Date())) || isDateBooked(date);
  };

  const isDateSelected = (date: Date) => {
    if (!selectedDates) return false;
    return (
      (selectedDates.checkIn && isSameDay(date, selectedDates.checkIn)) ||
      (selectedDates.checkOut && isSameDay(date, selectedDates.checkOut))
    );
  };

  const isDateInRange = (date: Date) => {
    if (!selectedDates?.checkIn || !selectedDates?.checkOut) return false;
    return (
      date > selectedDates.checkIn &&
      date < selectedDates.checkOut
    );
  };

  const renderCalendar = (monthOffset: number = 0) => {
    const month = addMonths(currentMonth, monthOffset);
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows: React.ReactNode[] = [];
    let days: React.ReactNode[] = [];
    let day = startDate;

    // Weekday headers
    const weekdayHeaders = WEEKDAYS.map((weekday) => (
      <div
        key={weekday}
        className="h-10 flex items-center justify-center text-xs font-medium text-charcoal/50"
      >
        {weekday}
      </div>
    ));

    // Calendar days
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isBooked = isDateBooked(cloneDay);
        const isDisabled = isDateDisabled(cloneDay);
        const isSelected = isDateSelected(cloneDay);
        const isInRange = isDateInRange(cloneDay);
        const isCurrentMonth = isSameMonth(cloneDay, month);

        days.push(
          <motion.button
            key={cloneDay.toISOString()}
            whileHover={!isDisabled ? { scale: 1.1 } : {}}
            whileTap={!isDisabled ? { scale: 0.95 } : {}}
            onClick={() => !isDisabled && onDateSelect?.(cloneDay)}
            onMouseEnter={() => setHoveredDate(cloneDay)}
            onMouseLeave={() => setHoveredDate(null)}
            disabled={isDisabled}
            className={cn(
              "relative h-10 w-full flex items-center justify-center text-sm rounded-lg transition-all duration-200",
              !isCurrentMonth && "text-charcoal/20",
              isCurrentMonth && !isDisabled && "text-charcoal hover:bg-cream-100",
              isBooked && "bg-red-100 text-red-600 cursor-not-allowed",
              isSelected && "bg-terracotta text-white hover:bg-terracotta-600",
              isInRange && "bg-terracotta/20 text-terracotta",
              isDisabled && !isBooked && "text-charcoal/30 cursor-not-allowed"
            )}
          >
            {format(cloneDay, "d")}
            
            {/* Available indicator dot */}
            {isCurrentMonth && !isDisabled && !isBooked && !isSelected && (
              <span className="absolute bottom-1 w-1 h-1 rounded-full bg-sage" />
            )}
          </motion.button>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div key={day.toISOString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }

    return (
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-display font-semibold text-lg text-charcoal capitalize">
            {format(month, "MMMM yyyy", { locale: nl })}
          </h4>
          {monthOffset === 0 && (
            <div className="flex gap-1">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-cream-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-cream-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-charcoal" />
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">{weekdayHeaders}</div>
        {rows}
      </div>
    );
  };

  return (
    <div className={cn("bg-white rounded-2xl p-6 shadow-lg", className)}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl font-semibold text-charcoal">
          Beschikbaarheid
        </h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sage" />
            <span className="text-charcoal/70">Beschikbaar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-charcoal/70">Bezet</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderCalendar(0)}
        <div className="hidden md:block">{renderCalendar(1)}</div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-cream-200 flex items-center gap-2 text-sm text-charcoal/60">
        <Info className="w-4 h-4" />
        <p>Klik op een datum om te selecteren. Rood gemarkeerde datums zijn al geboekt.</p>
      </div>
    </div>
  );
}
