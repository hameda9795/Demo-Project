"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sun,
  Umbrella,
  Heart,
  Clock,
} from "lucide-react";

const DAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];
const MONTHS = [
  "Januari", "Februari", "Maart", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "Oktober", "November", "December"
];

interface LeaveBalance {
  type: string;
  icon: React.ReactNode;
  total: number;
  used: number;
  color: string;
}

const leaveBalances: LeaveBalance[] = [
  {
    type: "Vakantie",
    icon: <Sun className="w-5 h-5" />,
    total: 25,
    used: 8,
    color: "bg-amber-500",
  },
  {
    type: "Ziekte",
    icon: <Heart className="w-5 h-5" />,
    total: 100,
    used: 2,
    color: "bg-rose-500",
  },
  {
    type: "ATV/Compensatie",
    icon: <Clock className="w-5 h-5" />,
    total: 12,
    used: 4,
    color: "bg-blue-500",
  },
];

const mockLeaveRequests = [
  { date: "2024-03-15", type: "Vakantie", status: "approved" },
  { date: "2024-03-16", type: "Vakantie", status: "approved" },
  { date: "2024-03-25", type: "Vakantie", status: "pending" },
  { date: "2024-03-26", type: "Vakantie", status: "pending" },
  { date: "2024-03-27", type: "Vakantie", status: "pending" },
];

export function LeaveCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1));
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const toggleDate = (day: number) => {
    const date = new Date(year, month, day);
    const exists = selectedDates.find(
      (d) => d.toDateString() === date.toDateString()
    );
    if (exists) {
      setSelectedDates(selectedDates.filter((d) => d.toDateString() !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const getDateStatus = (day: number) => {
    const dateStr = new Date(year, month, day).toISOString().split("T")[0];
    return mockLeaveRequests.find((r) => r.date === dateStr);
  };

  const isSelected = (day: number) => {
    const date = new Date(year, month, day);
    return selectedDates.some((d) => d.toDateString() === date.toDateString());
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Verlofkalender
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="font-semibold min-w-[120px] text-center">
              {MONTHS[month]} {year}
            </span>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: startingDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const status = getDateStatus(day);
              const selected = isSelected(day);
              const isWeekend =
                (startingDay + day - 1) % 7 === 5 ||
                (startingDay + day - 1) % 7 === 6;

              return (
                <motion.button
                  key={day}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => !isWeekend && toggleDate(day)}
                  className={`
                    aspect-square rounded-lg flex items-center justify-center text-sm relative
                    ${isWeekend ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "cursor-pointer"}
                    ${selected ? "bg-primary text-white" : "hover:bg-gray-100"}
                    ${status?.status === "approved" ? "bg-green-100 text-green-800" : ""}
                    ${status?.status === "pending" ? "bg-amber-100 text-amber-800" : ""}
                  `}
                >
                  {day}
                  {status && (
                    <span
                      className={`absolute bottom-1 w-1.5 h-1.5 rounded-full
                        ${status.status === "approved" ? "bg-green-500" : "bg-amber-500"}
                      `}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-100 border border-green-500 rounded" />
              <span>Goedgekeurd</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-100 border border-amber-500 rounded" />
              <span>In behandeling</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded" />
              <span>Geselecteerd</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Verlofsaldi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {leaveBalances.map((balance) => (
              <div key={balance.type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${balance.color} text-white`}>
                      {balance.icon}
                    </div>
                    <span className="font-medium">{balance.type}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {balance.total - balance.used} van {balance.total} dagen
                  </span>
                </div>
                <Progress value={(balance.used / balance.total) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {selectedDates.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Geselecteerde dagen ({selectedDates.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1 max-h-40 overflow-auto">
                  {selectedDates
                    .sort((a, b) => a.getTime() - b.getTime())
                    .map((date) => (
                      <div
                        key={date.toISOString()}
                        className="text-sm py-1 px-2 bg-gray-50 rounded flex justify-between"
                      >
                        <span>
                          {date.toLocaleDateString("nl-NL", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                        <button
                          onClick={() => toggleDate(date.getDate())}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                </div>
                <Button className="w-full">
                  <Umbrella className="w-4 h-4 mr-2" />
                  Verlof aanvragen
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <Card>
          <CardContent className="pt-6 space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Clock className="w-4 h-4 mr-2" />
              Uren registreren
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Verlofoverzicht
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
