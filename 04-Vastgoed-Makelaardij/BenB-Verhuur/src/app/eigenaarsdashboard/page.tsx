"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Euro,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Star,
  ArrowRight,
  Plus,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock revenue data
const revenueData = [
  { month: "Jan", revenue: 2450, bookings: 8 },
  { month: "Feb", revenue: 2800, bookings: 10 },
  { month: "Mrt", revenue: 3200, bookings: 12 },
  { month: "Apr", revenue: 4100, bookings: 15 },
  { month: "Mei", revenue: 4800, bookings: 18 },
  { month: "Jun", revenue: 5200, bookings: 20 },
  { month: "Jul", revenue: 5800, bookings: 22 },
  { month: "Aug", revenue: 6100, bookings: 24 },
  { month: "Sep", revenue: 4900, bookings: 19 },
  { month: "Okt", revenue: 4200, bookings: 16 },
  { month: "Nov", revenue: 3600, bookings: 13 },
  { month: "Dec", revenue: 5200, bookings: 20 },
];

// Mock booking requests
const bookingRequests = [
  {
    id: "REQ-001",
    property: "Gezellig appartement in hartje Jordaan",
    guest: "Familie Jansen",
    dates: "15 - 18 maart 2024",
    guests: 3,
    amount: 555,
    status: "pending",
    requestedAt: "2 uur geleden",
  },
  {
    id: "REQ-002",
    property: "Luxueuze woonboot met uitzicht over de Amstel",
    guest: "Peter & Linda",
    dates: "22 - 25 maart 2024",
    guests: 2,
    amount: 825,
    status: "pending",
    requestedAt: "5 uur geleden",
  },
  {
    id: "REQ-003",
    property: "Gezellig appartement in hartje Jordaan",
    guest: "De Vries Familie",
    dates: "1 - 5 april 2024",
    guests: 4,
    amount: 740,
    status: "approved",
    requestedAt: "1 dag geleden",
  },
];

// Mock properties
const ownerProperties = [
  {
    id: "1",
    name: "Gezellig appartement in hartje Jordaan",
    location: "Amsterdam",
    image: "/images/amsterdam-canal-house.jpg",
    occupancy: 87,
    revenue: 2847,
    rating: 4.92,
    reviews: 127,
    nextBooking: "15 mrt",
  },
  {
    id: "2",
    name: "Luxueuze woonboot met uitzicht over de Amstel",
    location: "Amsterdam",
    image: "/images/hero-cottage.jpg",
    occupancy: 92,
    revenue: 3520,
    rating: 4.98,
    reviews: 89,
    nextBooking: "22 mrt",
  },
];

// Stats cards
const stats = [
  {
    title: "Totale omzet deze maand",
    value: "€5.200",
    change: "+12%",
    trend: "up",
    icon: Euro,
  },
  {
    title: "Bezettingsgraad",
    value: "87%",
    change: "+5%",
    trend: "up",
    icon: Calendar,
  },
  {
    title: "Nieuwe boekingen",
    value: "24",
    change: "+8",
    trend: "up",
    icon: Users,
  },
  {
    title: "Gem. waardering",
    value: "4.9",
    change: "+0.2",
    trend: "up",
    icon: Star,
  },
];

export default function OwnerDashboardPage() {
  const [requests, setRequests] = useState(bookingRequests);

  const handleApprove = (id: string) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "approved" } : req))
    );
  };

  const handleReject = (id: string) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "rejected" } : req))
    );
  };

  return (
    <main className="min-h-screen bg-cream pt-24 lg:pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="font-display text-4xl font-bold text-charcoal mb-2">
              Eigenaarsdashboard
            </h1>
            <p className="text-charcoal/60">
              Welkom terug! Dit is hoe uw woningen het doen deze maand.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notificaties
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Nieuwe woning
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sage" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-display font-bold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-sm text-charcoal/60">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Charts & Properties */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Omzet overzicht</CardTitle>
                      <CardDescription>Afgelopen 12 maanden</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-sage/10 text-sage">
                      +18% vs vorig jaar
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#E07A5F" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#E07A5F" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E1D3" />
                        <XAxis dataKey="month" stroke="#3D405B" fontSize={12} />
                        <YAxis stroke="#3D405B" fontSize={12} tickFormatter={(value) => `€${value}`} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #E5E1D3",
                            borderRadius: "8px",
                          }}
                          formatter={(value) => [`€${value}`, "Omzet"]}
                        />
                        <Area
                          type="monotone"
                          dataKey="revenue"
                          stroke="#E07A5F"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorRevenue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Properties Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-bold text-charcoal">
                  Uw woningen
                </h2>
                <Link href="#">
                  <Button variant="ghost" size="sm">
                    Bekijk alles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {ownerProperties.map((property) => (
                  <Card key={property.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-cream rounded-xl flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-lg text-charcoal">
                            {property.name}
                          </h3>
                          <p className="text-charcoal/60 text-sm">{property.location}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1 text-sm">
                              <Star className="w-4 h-4 fill-terracotta text-terracotta" />
                              {property.rating} ({property.reviews})
                            </span>
                            <span className="text-sm text-charcoal/60">
                              Volgende boeking: {property.nextBooking}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-display font-bold text-charcoal">
                            €{property.revenue}
                          </p>
                          <p className="text-sm text-charcoal/60">deze maand</p>
                          <div className="mt-2">
                            <Badge className="bg-sage/10 text-sage">
                              {property.occupancy}% bezet
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Booking Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="sticky top-32">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Boekingsverzoeken</CardTitle>
                  <Badge className="bg-terracotta">
                    {requests.filter((r) => r.status === "pending").length} nieuw
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {requests.map((request) => (
                  <div
                    key={request.id}
                    className="p-4 bg-cream rounded-xl space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-charcoal">{request.guest}</p>
                        <p className="text-xs text-charcoal/60">{request.requestedAt}</p>
                      </div>
                      <Badge
                        variant={request.status === "pending" ? "default" : "secondary"}
                        className={
                          request.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : request.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : ""
                        }
                      >
                        {request.status === "pending"
                          ? "In afwachting"
                          : request.status === "approved"
                          ? "Goedgekeurd"
                          : "Afgewezen"}
                      </Badge>
                    </div>
                    <p className="text-sm text-charcoal/70">{request.property}</p>
                    <div className="flex items-center gap-4 text-sm text-charcoal/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {request.dates}
                      </span>
                      <span>{request.guests} gasten</span>
                    </div>
                    <p className="font-bold text-terracotta">€{request.amount}</p>

                    {request.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() => handleApprove(request.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Goedkeuren
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleReject(request.id)}
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Afwijzen
                        </Button>
                      </div>
                    )}
                  </div>
                ))}

                {requests.filter((r) => r.status === "pending").length === 0 && (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-sage mx-auto mb-3" />
                    <p className="text-charcoal/60">Alle verzoeken behandeld!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
