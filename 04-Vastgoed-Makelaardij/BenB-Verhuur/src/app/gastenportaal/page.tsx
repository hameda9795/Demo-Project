"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  MessageSquare,
  FileText,
  Home,
  Star,
  Key,
  Utensils,
  Car,
  Info,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock upcoming booking data
const upcomingBooking = {
  id: "BK-2024-001",
  property: {
    name: "Gezellig appartement in hartje Jordaan",
    location: "Jordaan, Amsterdam",
    image: "/images/amsterdam-canal-house.jpg",
  },
  checkIn: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
  checkOut: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000), // 4 nights
  guests: 2,
  totalAmount: 850,
  status: "confirmed",
};

const pastBookings = [
  {
    id: "BK-2023-089",
    property: {
      name: "Romantisch boshuisje in Veluwe",
      location: "Hoenderloo, Gelderland",
      image: "/images/hero-cottage.jpg",
    },
    checkIn: new Date("2023-12-20"),
    checkOut: new Date("2023-12-27"),
    guests: 2,
    status: "completed",
    rating: 5,
  },
  {
    id: "BK-2023-045",
    property: {
      name: "Strandhuis aan de Zeeuwse kust",
      location: "Dishoek, Zeeland",
      image: "/images/modern-bnb-living.jpg",
    },
    checkIn: new Date("2023-08-15"),
    checkOut: new Date("2023-08-22"),
    guests: 4,
    status: "completed",
    rating: null,
  },
];

// Countdown Timer Component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 justify-center">
      {[
        { value: timeLeft.days, label: "dagen" },
        { value: timeLeft.hours, label: "uren" },
        { value: timeLeft.minutes, label: "min" },
        { value: timeLeft.seconds, label: "sec" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-terracotta rounded-xl flex items-center justify-center mb-1">
            <span className="text-2xl font-display font-bold text-white">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-charcoal/60">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function GuestPortalPage() {
  // Tabs state managed internally by Tabs component

  return (
    <main className="min-h-screen bg-cream pt-24 lg:pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl font-bold text-charcoal mb-2">
            Welkom terug, Demo Gebruiker
          </h1>
          <p className="text-charcoal/60">
            Beheer uw boekingen, communicatie en digitale gidsen
          </p>
        </motion.div>

        {/* Upcoming Trip Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Property Info */}
              <div className="p-8">
                <Badge className="bg-sage text-white mb-4">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Bevestigd
                </Badge>
                <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
                  {upcomingBooking.property.name}
                </h2>
                <p className="text-charcoal/60 flex items-center gap-2 mb-6">
                  <MapPin className="w-4 h-4" />
                  {upcomingBooking.property.location}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-cream rounded-xl">
                    <p className="text-sm text-charcoal/60 mb-1">Check-in</p>
                    <p className="font-medium text-charcoal">
                      {upcomingBooking.checkIn.toLocaleDateString("nl-NL", {
                        weekday: "short",
                        day: "numeric",
                        month: "long",
                      })}
                    </p>
                    <p className="text-sm text-charcoal/60">15:00</p>
                  </div>
                  <div className="p-4 bg-cream rounded-xl">
                    <p className="text-sm text-charcoal/60 mb-1">Check-out</p>
                    <p className="font-medium text-charcoal">
                      {upcomingBooking.checkOut.toLocaleDateString("nl-NL", {
                        weekday: "short",
                        day: "numeric",
                        month: "long",
                      })}
                    </p>
                    <p className="text-sm text-charcoal/60">11:00</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Bericht host
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Factuur
                  </Button>
                </div>
              </div>

              {/* Countdown */}
              <div className="bg-gradient-to-br from-terracotta/10 to-sage/10 p-8 flex flex-col items-center justify-center">
                <p className="text-charcoal/70 mb-4 text-center">
                  Nog maar even tot uw verblijf
                </p>
                <CountdownTimer targetDate={upcomingBooking.checkIn} />
                <p className="text-charcoal/60 text-sm mt-6 text-center">
                  We kijken ernaar uit u te verwelkomen!
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="guidebook" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="guidebook" className="flex-1">
              <Key className="w-4 h-4 mr-2" />
              Digitale gids
            </TabsTrigger>
            <TabsTrigger value="bookings" className="flex-1">
              <Calendar className="w-4 h-4 mr-2" />
              Alle boekingen
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex-1">
              <MessageSquare className="w-4 h-4 mr-2" />
              Berichten
            </TabsTrigger>
          </TabsList>

          {/* Digital Guidebook */}
          <TabsContent value="guidebook">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Digitale incheckgids
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Check-in Instructions */}
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                      <Key className="w-6 h-6 text-terracotta" />
                    </div>
                    <CardTitle>Instructies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-charcoal/70">
                      <li className="flex items-start gap-2">
                        <span className="text-terracotta font-bold">1.</span>
                        <span>Sleutel zit in het sleutelkluisje naast de deur. Code: 1234</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terracotta font-bold">2.</span>
                        <span>WiFi netwerk: Jordaan_Guest / Wachtwoord: Welkom2024!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terracotta font-bold">3.</span>
                        <span>Parkeerkaart ligt op de tafel</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* House Rules */}
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4">
                      <Home className="w-6 h-6 text-sage" />
                    </div>
                    <CardTitle>Huisregels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-charcoal/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-sage" />
                        <span>Geen feesten na 22:00</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-sage" />
                        <span>Niet roken binnen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-sage" />
                        <span>Huisdieren op aanvraag</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-sage" />
                        <span>Check-out voor 11:00</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Local Tips */}
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-coral/20 rounded-xl flex items-center justify-center mb-4">
                      <Info className="w-6 h-6 text-amber-600" />
                    </div>
                    <CardTitle>Lokale tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-charcoal/70">
                      <li className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-terracotta mt-0.5" />
                        <span>Restaurant De Reiger - 2 min lopen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Car className="w-4 h-4 text-terracotta mt-0.5" />
                        <span>Supermarkt Albert Heijn - 5 min lopen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-terracotta mt-0.5" />
                        <span>Anne Frank Huis - 10 min lopen</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          {/* All Bookings */}
          <TabsContent value="bookings">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Boekingsgeschiedenis
              </h2>

              <div className="space-y-4">
                {pastBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-display font-bold text-lg text-charcoal">
                            {booking.property.name}
                          </h3>
                          <p className="text-charcoal/60 text-sm">
                            {booking.checkIn.toLocaleDateString("nl-NL")} -{" "}
                            {booking.checkOut.toLocaleDateString("nl-NL")}
                          </p>
                          <Badge variant="outline" className="mt-2">
                            {booking.status === "completed" ? "Afgerond" : "Geannuleerd"}
                          </Badge>
                        </div>
                        <div className="text-right">
                          {booking.rating ? (
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(booking.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                              ))}
                            </div>
                          ) : (
                            <Button size="sm" variant="outline">
                              <Star className="w-4 h-4 mr-2" />
                              Beoordelen
                            </Button>
                          )}
                          <p className="text-xs text-charcoal/50">{booking.id}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Messages */}
          <TabsContent value="messages">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-10 h-10 text-charcoal/30" />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                Geen nieuwe berichten
              </h3>
              <p className="text-charcoal/60">
                Uw communicatie met hosts verschijnt hier
              </p>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
