"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  FileText, 
  Receipt, 
  TrendingUp, 
  Settings, 
  LogOut, 
  User,
  Bell,
  Download,
  Eye,
  Calendar,
  Euro,
  ArrowUpRight,
  ArrowDownRight,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { 
    title: "Omzet dit jaar", 
    value: "€ 245.890", 
    change: "+12%", 
    trend: "up",
    icon: Euro 
  },
  { 
    title: "Openstaande facturen", 
    value: "€ 34.250", 
    change: "5 facturen", 
    trend: "neutral",
    icon: Receipt 
  },
  { 
    title: "BTW teruggave Q4", 
    value: "€ 8.420", 
    change: "-3%", 
    trend: "down",
    icon: TrendingUp 
  },
  { 
    title: "Lopende projecten", 
    value: "12", 
    change: "+2 nieuw", 
    trend: "up",
    icon: FileText 
  },
];

const recentDocuments = [
  { name: "Jaarrekening 2024.pdf", date: "15 januari 2025", size: "2.4 MB", type: "pdf" },
  { name: "BTW Aangifte Q4 2024.pdf", date: "31 december 2024", size: "1.1 MB", type: "pdf" },
  { name: "Loonstroken december 2024.zip", date: "24 december 2024", size: "4.8 MB", type: "zip" },
  { name: "Factuur #2024-156.pdf", date: "20 december 2024", size: "0.8 MB", type: "pdf" },
  { name: "Prognose 2025.xlsx", date: "15 december 2024", size: "1.5 MB", type: "xlsx" },
];

const upcomingTasks = [
  { title: "BTW Aangifte Q1 2025", date: "30 april 2025", type: "Belasting", priority: "hoog" },
  { title: "Jaarrekening definitief", date: "15 mei 2025", type: "Administratie", priority: "medium" },
  { title: "Pensioenaangifte", date: "31 mei 2025", type: "Salaris", priority: "medium" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white brutal-border-bottom">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#6D5B4F] brutal-border flex items-center justify-center">
              <span className="font-mono font-bold text-[#F5F0E8] text-lg">BD</span>
            </div>
            <span className="font-serif text-xl font-semibold hidden sm:block">Bureau Dekker</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5B4F]" />
              <Input 
                placeholder="Zoeken..."
                className="brutal-border bg-[#F5F0E8] pl-10"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 brutal-border bg-[#F5F0E8] flex items-center justify-center hover:bg-[#E8DFD0] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C17A5C] text-white text-xs rounded-full flex items-center justify-center font-mono">
                3
              </span>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 p-2 brutal-border bg-[#F5F0E8] hover:bg-[#E8DFD0] transition-colors">
                  <Avatar className="w-8 h-8 brutal-border">
                    <AvatarFallback className="bg-[#C17A5C] text-white text-sm font-mono">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:block font-medium text-sm">Jan Demo</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="brutal-border bg-white">
                <DropdownMenuItem className="font-mono text-sm">
                  <User className="w-4 h-4 mr-2" />
                  Profiel
                </DropdownMenuItem>
                <DropdownMenuItem className="font-mono text-sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Instellingen
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="font-mono text-sm text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Uitloggen
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-[#2C2420] text-[#F5F0E8] min-h-[calc(100vh-64px)] transition-all duration-300 brutal-border-right hidden lg:block`}>
          <nav className="p-4 space-y-2">
            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: FileText, label: "Documenten", active: false },
              { icon: Receipt, label: "Facturen", active: false },
              { icon: TrendingUp, label: "Rapportages", active: false },
              { icon: Calendar, label: "Agenda", active: false },
              { icon: Settings, label: "Instellingen", active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase tracking-wider transition-colors ${
                  item.active 
                    ? 'bg-[#C17A5C] text-white' 
                    : 'hover:bg-[#3D332D] text-[#B8A99A]'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 brutal-border-top bg-[#1A1512]">
            <div className={`${sidebarOpen ? 'block' : 'hidden'} text-xs text-[#6D5B4F] font-mono`}>
              <p>Demo versie</p>
              <p>&copy; 2025 Bureau Dekker</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome */}
            <div className="mb-8">
              <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-2">
                Welkom terug, Jan
              </h1>
              <p className="text-[#6D5B4F]">
                Hier is een overzicht van uw financiën voor deze maand.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="bg-white brutal-border p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-[#F5F0E8] brutal-border flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-[#6D5B4F]" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-mono ${
                      stat.trend === 'up' ? 'text-green-600' : 
                      stat.trend === 'down' ? 'text-red-600' : 'text-[#6D5B4F]'
                    }`}>
                      {stat.trend === 'up' && <ArrowUpRight className="w-4 h-4" />}
                      {stat.trend === 'down' && <ArrowDownRight className="w-4 h-4" />}
                      {stat.change}
                    </div>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#6D5B4F] mb-1">
                    {stat.title}
                  </p>
                  <p className="font-serif text-2xl font-semibold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Documents */}
              <motion.div 
                className="lg:col-span-2 bg-white brutal-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="p-6 brutal-border-bottom flex items-center justify-between">
                  <h2 className="font-serif text-xl font-semibold">Recente documenten</h2>
                  <Button variant="outline" size="sm" className="brutal-border bg-transparent font-mono text-xs uppercase">
                    Alles bekijken
                  </Button>
                </div>
                <div className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent brutal-border-bottom">
                        <TableHead className="font-mono text-xs uppercase">Document</TableHead>
                        <TableHead className="font-mono text-xs uppercase hidden sm:table-cell">Datum</TableHead>
                        <TableHead className="font-mono text-xs uppercase hidden md:table-cell">Grootte</TableHead>
                        <TableHead className="font-mono text-xs uppercase text-right">Actie</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentDocuments.map((doc, index) => (
                        <TableRow key={index} className="brutal-border-bottom last:border-b-0">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-[#F5F0E8] brutal-border flex items-center justify-center">
                                <FileText className="w-4 h-4 text-[#6D5B4F]" />
                              </div>
                              <span className="font-medium text-sm">{doc.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell text-sm text-[#6D5B4F]">
                            {doc.date}
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-sm text-[#6D5B4F]">
                            {doc.size}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="w-8 h-8 brutal-border bg-[#F5F0E8] flex items-center justify-center hover:bg-[#E8DFD0] transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="w-8 h-8 brutal-border bg-[#F5F0E8] flex items-center justify-center hover:bg-[#E8DFD0] transition-colors">
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </motion.div>

              {/* Upcoming Tasks */}
              <motion.div 
                className="bg-white brutal-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-6 brutal-border-bottom">
                  <h2 className="font-serif text-xl font-semibold">Aankomende taken</h2>
                </div>
                <div className="p-6 space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="p-4 bg-[#F5F0E8] brutal-border">
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={`font-mono text-xs uppercase ${
                          task.priority === 'hoog' 
                            ? 'bg-red-100 text-red-700 border-red-200' 
                            : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                        } brutal-border`}>
                          {task.priority}
                        </Badge>
                        <span className="text-xs text-[#6D5B4F] font-mono">{task.date}</span>
                      </div>
                      <h3 className="font-medium mb-1">{task.title}</h3>
                      <p className="text-xs text-[#6D5B4F]">{task.type}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 brutal-border-top">
                  <Button variant="outline" className="w-full brutal-border bg-transparent font-mono text-xs uppercase">
                    Agenda bekijken
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div 
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { label: "Nieuwe factuur", icon: Receipt },
                { label: "Document uploaden", icon: FileText },
                { label: "Afspraak maken", icon: Calendar },
                { label: "Contact opnemen", icon: User },
              ].map((action) => (
                <button
                  key={action.label}
                  className="bg-white brutal-border p-4 text-center hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#C17A5C] transition-all"
                >
                  <action.icon className="w-6 h-6 mx-auto mb-2 text-[#6D5B4F]" />
                  <span className="font-mono text-xs uppercase tracking-wider">{action.label}</span>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
