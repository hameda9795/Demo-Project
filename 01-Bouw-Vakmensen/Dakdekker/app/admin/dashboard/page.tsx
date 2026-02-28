/**
 * Admin Dashboard
 * Dakwerken Van der Berg
 * 
 * @description Main admin dashboard with stats, map, and priority list
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  FolderKanban,
  FileText,
  Package,
  LogOut,
  Bell,
  Search,
  CloudSun,
  MapPin,
  AlertTriangle,
  Clock,
  Users,
  Euro,
  Phone,
  Upload,
  Plus,
} from "lucide-react";
import type { DashboardStats, Appointment, JobLocation } from "@/types";

// Demo data
const stats: DashboardStats = {
  openInspections: 12,
  scheduledThisWeek: 8,
  totalRevenue: 45600,
  newLeads: 24,
  stormDamageCases: 3,
};

const appointments: Appointment[] = [
  {
    id: "1",
    customerName: "Familie Jansen",
    customerPhone: "06-12345678",
    customerEmail: "jansen@example.com",
    address: "Dorpsstraat 42, Utrecht",
    date: "2024-02-28",
    time: "09:00",
    type: "nood",
    status: "gepland",
    priority: "spoed",
    notes: "Stormschade - losse dakpannen",
  },
  {
    id: "2",
    customerName: "De Vries B.V.",
    customerPhone: "06-87654321",
    customerEmail: "info@devries.nl",
    address: "Industrieweg 15, Hilversum",
    date: "2024-02-28",
    time: "14:00",
    type: "inspectie",
    status: "gepland",
    priority: "hoog",
    notes: "Jaarlijkse dakinspectie",
  },
  {
    id: "3",
    customerName: "Mw. Bakker",
    customerPhone: "06-11223344",
    customerEmail: "bakker@example.com",
    address: "Kerkstraat 8, Amersfoort",
    date: "2024-02-29",
    time: "10:30",
    type: "werk",
    status: "gepland",
    priority: "normaal",
    notes: "Dakgoot vervanging",
  },
  {
    id: "4",
    customerName: "Familie Van den Berg",
    customerPhone: "06-55667788",
    customerEmail: "vandenberg@example.com",
    address: "Hoofdweg 123, Breukelen",
    date: "2024-02-29",
    time: "13:00",
    type: "offerte",
    status: "gepland",
    priority: "normaal",
    notes: "Offerte dakrenovatie",
  },
];

const jobLocations: JobLocation[] = [
  { id: "1", lat: 52.0907, lng: 5.1214, address: "Utrecht", type: "nood", status: "pending" },
  { id: "2", lat: 52.228, lng: 5.17, address: "Hilversum", type: "werk", status: "in-progress" },
  { id: "3", lat: 52.156, lng: 5.388, address: "Amersfoort", type: "inspectie", status: "completed" },
  { id: "4", lat: 52.172, lng: 5.01, address: "Breukelen", type: "werk", status: "in-progress" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard/", active: true },
  { icon: Calendar, label: "Afspraken", href: "/admin/dashboard/appointments/" },
  { icon: FolderKanban, label: "Projecten", href: "/admin/dashboard/projects/" },
  { icon: FileText, label: "Offertes", href: "/admin/dashboard/quotes/" },
  { icon: Package, label: "Materialen", href: "/admin/dashboard/materials/" },
];

// Simple SVG Map Component
function ServiceAreaMap({ locations }: { locations: JobLocation[] }) {
  return (
    <div className="relative w-full h-64 bg-sky-50 rounded-xl overflow-hidden">
      {/* Simplified map background */}
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        {/* Water */}
        <rect width="400" height="300" fill="#e0f2fe" />
        
        {/* Land areas (simplified Utrecht region) */}
        <path
          d="M50,50 Q150,30 250,60 Q350,50 380,120 Q400,200 350,280 Q200,300 100,250 Q20,200 50,50"
          fill="#dcfce7"
        />
        
        {/* Roads */}
        <line x1="100" y1="100" x2="300" y2="150" stroke="#94a3b8" strokeWidth="2" />
        <line x1="150" y1="50" x2="200" y2="250" stroke="#94a3b8" strokeWidth="2" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="#94a3b8" strokeWidth="2" />
        
        {/* Job location pins */}
        {locations.map((loc) => {
          // Map coordinates to SVG space (simplified projection)
          const x = 100 + (loc.lng - 5.01) * 200;
          const y = 250 - (loc.lat - 52.09) * 1500;
          
          const color = loc.type === "nood" ? "#dc2626" : loc.type === "inspectie" ? "#0ea5e9" : "#22c55e";
          
          return (
            <g key={loc.id}>
              <circle cx={x} cy={y} r="8" fill={color} opacity="0.3">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy={y} r="6" fill={color} />
              <text x={x + 10} y={y + 4} fontSize="10" fill="#475569">{loc.address}</text>
            </g>
          );
        })}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-emergency-red" />
          <span>Spoed</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-sky-blue" />
          <span>Inspectie</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span>Werk</span>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/admin/");
  };

  return (
    <div className="min-h-screen bg-storm-gray flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-slate flex-shrink-0 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link href="/admin/dashboard/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-safety-orange flex items-center justify-center rounded-lg">
              <span className="font-heading font-bold text-white">VdB</span>
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm">Dakwerken</div>
              <div className="text-white/50 text-xs">Admin Portal</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                item.active
                  ? "bg-safety-orange text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Uitloggen</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-auto">
        {/* Header */}
        <header className="bg-dark-slate border-b border-white/10 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="relative w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Zoeken..."
                className="w-full pl-12 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-safety-orange"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Weather Widget */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl">
                <CloudSun className="w-5 h-5 text-sky-blue" />
                <div>
                  <div className="text-white text-sm font-semibold">18°C</div>
                  <div className="text-white/50 text-xs">Utrecht</div>
                </div>
              </div>

              {/* Notifications */}
              <button className="relative p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5 text-white/70" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-emergency-red rounded-full text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
              </button>

              {/* User */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl">
                <div className="w-8 h-8 bg-safety-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Admin</div>
                  <div className="text-white/50 text-xs">Beheerder</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark-slate rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emergency-red/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-emergency-red" />
                </div>
                <span className="text-emergency-red text-sm font-semibold">+2 vandaag</span>
              </div>
              <div className="text-3xl font-heading font-bold text-white">{stats.stormDamageCases}</div>
              <div className="text-white/50 text-sm">Stormschade</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-dark-slate rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-sky-blue/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-sky-blue" />
                </div>
              </div>
              <div className="text-3xl font-heading font-bold text-white">{stats.openInspections}</div>
              <div className="text-white/50 text-sm">Openstaand</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-slate rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-safety-orange/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-safety-orange" />
                </div>
              </div>
              <div className="text-3xl font-heading font-bold text-white">{stats.scheduledThisWeek}</div>
              <div className="text-white/50 text-sm">Deze week</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-slate rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Euro className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-green-500 text-sm font-semibold">+12%</span>
              </div>
              <div className="text-3xl font-heading font-bold text-white">
                €{stats.totalRevenue.toLocaleString()}
              </div>
              <div className="text-white/50 text-sm">Omzet deze maand</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-slate rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-green-500 text-sm font-semibold">+8%</span>
              </div>
              <div className="text-3xl font-heading font-bold text-white">{stats.newLeads}</div>
              <div className="text-white/50 text-sm">Nieuwe leads</div>
            </motion.div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Appointments List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-dark-slate rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-bold text-white">Afspraken</h2>
                  <Link
                    href="/admin/dashboard/appointments/"
                    className="text-safety-orange hover:underline text-sm"
                  >
                    Alles bekijken →
                  </Link>
                </div>

                <div className="space-y-3">
                  {appointments.map((apt) => (
                    <div
                      key={apt.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border ${
                        apt.priority === "spoed"
                          ? "bg-emergency-red/10 border-emergency-red/30"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      {/* Date/Time */}
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-white font-bold">
                          {new Date(apt.date).toLocaleDateString("nl-NL", { day: "numeric" })}
                        </div>
                        <div className="text-white/50 text-xs">
                          {new Date(apt.date).toLocaleDateString("nl-NL", { month: "short" })}
                        </div>
                        <div className="text-safety-orange text-sm font-semibold mt-1">
                          {apt.time}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-white truncate">{apt.customerName}</h3>
                          {apt.priority === "spoed" && (
                            <span className="px-2 py-0.5 bg-emergency-red text-white text-xs rounded-full">
                              SPOED
                            </span>
                          )}
                        </div>
                        <p className="text-white/50 text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {apt.address}
                        </p>
                        <p className="text-white/40 text-xs mt-1">{apt.notes}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${apt.customerPhone}`}
                          className="p-2 bg-white/10 rounded-lg hover:bg-safety-orange transition-colors"
                        >
                          <Phone className="w-4 h-4 text-white" />
                        </a>
                        <button className="px-4 py-2 bg-safety-orange text-white text-sm rounded-lg hover:bg-safety-orange/90 transition-colors">
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-dark-slate rounded-2xl p-6 border border-white/10">
                <h2 className="font-heading text-xl font-bold text-white mb-6">Inspecties per maand</h2>
                <div className="h-48 flex items-end justify-between gap-2">
                  {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"].map((month, i) => {
                    const height = [30, 45, 35, 50, 65, 45, 40, 35, 80, 70, 55, 40][i];
                    return (
                      <div key={month} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className="w-full bg-safety-orange/20 rounded-t-lg relative group"
                        >
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-safety-orange rounded-t-lg transition-all group-hover:bg-safety-orange/80"
                            style={{ height: `${height}%` }}
                          />
                        </motion.div>
                        <span className="text-white/40 text-xs">{month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-dark-slate rounded-2xl p-6 border border-white/10">
                <h2 className="font-heading text-xl font-bold text-white mb-4">Werkgebied</h2>
                <ServiceAreaMap locations={jobLocations} />
              </div>

              {/* Photo Upload */}
              <div className="bg-dark-slate rounded-2xl p-6 border border-white/10">
                <h2 className="font-heading text-xl font-bold text-white mb-4">Foto upload</h2>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-safety-orange/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-white/30 mx-auto mb-4" />
                  <p className="text-white/50 text-sm mb-2">
                    Sleep foto&apos;s hierheen of klik om te uploaden
                  </p>
                  <p className="text-white/30 text-xs">JPG, PNG tot 10MB</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-dark-slate rounded-2xl p-6 border border-white/10">
                <h2 className="font-heading text-xl font-bold text-white mb-4">Snelle acties</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-safety-orange text-white rounded-xl hover:bg-safety-orange/90 transition-colors">
                    <Plus className="w-5 h-5" />
                    <span>Nieuwe afspraak</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                    <FileText className="w-5 h-5" />
                    <span>Nieuwe offerte</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
