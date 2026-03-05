"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Settings, 
  Bell, 
  Search,
  LogOut,
  ChevronRight,
  Download,
  Clock,
  CheckCircle2,
  AlertCircle,
  User,
  TrendingUp,
  DollarSign,
  Receipt,
  LayoutDashboard as DashboardIcon
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
  { icon: FileText, label: "Documenten", href: "/dashboard/documenten", active: false },
  { icon: MessageSquare, label: "Berichten", href: "/dashboard/berichten", active: false },
  { icon: Calendar, label: "Afspraken", href: "/dashboard/afspraken", active: false },
  { icon: Settings, label: "Instellingen", href: "/dashboard/instellingen", active: false },
];

const recentDocuments = [
  { name: "Aangifte IB 2023.pdf", date: "15 januari 2024", size: "2.4 MB", type: "Belasting" },
  { name: "Jaarrekening 2023.pdf", date: "3 februari 2024", size: "4.1 MB", type: "Jaarrekening" },
  { name: "Kwartaaloverzicht Q4.pdf", date: "10 januari 2024", size: "1.8 MB", type: "Overzicht" },
  { name: "Loonstrook december.pdf", date: "25 december 2023", size: "156 KB", type: "Salaris" },
];

const upcomingAppointments = [
  { title: "Jaarplanning bespreken", date: "12 maart 2024", time: "14:00 - 15:00", advisor: "Thomas Jansen" },
  { title: "Kwartalaangifte Q1", date: "18 april 2024", time: "10:00 - 11:00", advisor: "Pieter de Brug" },
];

const notifications = [
  { title: "Aangifte ontvangen", message: "Uw aangifte Inkomstenbelasting is succesvol ontvangen.", time: "2 uur geleden", type: "success" },
  { title: "Document vereist", message: "Graag uw nieuwe identiteitsbewijs uploaden.", time: "1 dag geleden", type: "warning" },
  { title: "Afspraak bevestigd", message: "Uw afspraak op 12 maart is bevestigd.", time: "2 dagen geleden", type: "info" },
];

const stats = [
  { label: "Openstaande facturen", value: "€ 2.450", icon: Receipt, trend: "+5%" },
  { label: "Dit jaar betaald", value: "€ 12.800", icon: DollarSign, trend: "-2%" },
  { label: "Documenten", value: "47", icon: FileText, trend: "+12" },
  { label: "Berichten", value: "3", icon: MessageSquare, trend: "nieuw" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-ink text-cream-50 h-16">
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-terracotta-400 flex items-center justify-center">
              <span className="text-cream-50 font-serif text-lg font-medium">DB</span>
            </div>
            <span className="font-serif text-lg hidden md:block">MijnDeBrug</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-concrete-400" />
              <input
                type="text"
                placeholder="Zoek in documenten..."
                className="w-full pl-10 pr-4 py-2 bg-concrete-800 border border-concrete-700 text-cream-50 placeholder-concrete-400 text-sm focus:outline-none focus:border-terracotta-400"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 text-concrete-300 hover:text-cream-50 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-terracotta-400 rounded-full" />
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-concrete-700 flex items-center justify-center">
                <User className="w-4 h-4 text-concrete-300" />
              </div>
              <span className="text-sm hidden md:block">Demo Gebruiker</span>
            </div>

            {/* Logout */}
            <button 
              onClick={handleLogout}
              className="p-2 text-concrete-300 hover:text-cream-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-cream-50 border-r border-concrete-200 hidden lg:block overflow-y-auto">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-ink text-cream-50"
                    : "text-concrete-600 hover:bg-concrete-100 hover:text-ink"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Quick Contact */}
          <div className="p-4 mt-8 border-t border-concrete-200">
            <p className="text-xs text-concrete-500 uppercase tracking-wider mb-3">Uw adviseur</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-terracotta-100 flex items-center justify-center">
                <User className="w-5 h-5 text-terracotta-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Thomas Jansen</p>
                <a href="mailto:thomas@debrug.nl" className="text-xs text-terracotta-500 hover:underline">
                  Stuur bericht
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 md:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif mb-2">Welkom terug, Demo</h1>
            <p className="text-concrete-600">
              Dit is uw persoonlijke omgeving. Hier vindt u al uw documenten, afspraken en berichten.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="brutalist-card p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-concrete-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-serif">{stat.value}</p>
                  </div>
                  <div className="w-10 h-10 bg-terracotta-100 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-terracotta-500" />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">{stat.trend}</span>
                  <span className="text-xs text-concrete-400 ml-1">t.o.v. vorige maand</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Documents */}
            <div className="lg:col-span-2">
              <div className="brutalist-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-serif">Recente documenten</h2>
                  <Link 
                    href="/dashboard/documenten" 
                    className="text-sm text-terracotta-500 hover:text-terracotta-600 flex items-center gap-1"
                  >
                    Bekijk alles
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="space-y-3">
                  {recentDocuments.map((doc, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 bg-cream-100 hover:bg-cream-200 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-concrete-200 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-concrete-500" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{doc.name}</p>
                          <p className="text-xs text-concrete-500">
                            {doc.type} • {doc.date} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 text-concrete-400 hover:text-terracotta-500 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* Upcoming Appointments */}
              <div className="brutalist-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-serif">Komende afspraken</h2>
                  <Calendar className="w-5 h-5 text-concrete-400" />
                </div>
                
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={index} className="border-l-2 border-terracotta-400 pl-4">
                      <p className="font-medium text-sm">{appointment.title}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-concrete-500">
                        <Clock className="w-3 h-3" />
                        <span>{appointment.date}, {appointment.time}</span>
                      </div>
                      <p className="text-xs text-concrete-500 mt-1">
                        met {appointment.advisor}
                      </p>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/dashboard/afspraken"
                  className="mt-6 w-full py-2 border border-concrete-300 text-center text-sm text-concrete-600 hover:bg-concrete-100 transition-colors block"
                >
                  Plan nieuwe afspraak
                </Link>
              </div>

              {/* Notifications */}
              <div className="brutalist-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-serif">Meldingen</h2>
                  <Bell className="w-5 h-5 text-concrete-400" />
                </div>
                
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {notification.type === "success" && (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        )}
                        {notification.type === "warning" && (
                          <AlertCircle className="w-5 h-5 text-amber-500" />
                        )}
                        {notification.type === "info" && (
                          <Bell className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-xs text-concrete-500 mt-0.5">
                          {notification.message}
                        </p>
                        <p className="text-xs text-concrete-400 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-serif mb-4">Snelle acties</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Document uploaden", icon: FileText },
                { label: "Bericht versturen", icon: MessageSquare },
                { label: "Afspraak maken", icon: Calendar },
                { label: "Offerte aanvragen", icon: Receipt },
              ].map((action, index) => (
                <button 
                  key={index}
                  className="p-6 bg-cream-50 border border-concrete-200 hover:border-terracotta-400 hover:shadow-md transition-all text-center group"
                >
                  <action.icon className="w-8 h-8 mx-auto mb-3 text-concrete-400 group-hover:text-terracotta-500 transition-colors" />
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://techsolutionsutrecht.nl/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Neem contact op"
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-terracotta-400 opacity-75 animate-ping" />
          <span className="absolute -inset-2 rounded-full bg-terracotta-400/30 animate-pulse-slow" />
          <div className="relative flex items-center justify-center w-14 h-14 bg-terracotta-500 rounded-full shadow-lg hover:bg-terracotta-600 transition-all duration-300 hover:scale-110 animate-blink">
            <MessageSquare className="w-6 h-6 text-cream-50" />
          </div>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-ink text-cream-50 text-xs font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Laten we praten
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-ink" />
          </span>
        </div>
      </a>
    </div>
  );
}
