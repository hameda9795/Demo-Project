"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  FileText,
  Calendar,
  DollarSign,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  LogOut,
  Shield,
} from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import { useAuth } from "@/lib/context/AuthContext";
import { Input } from "@/components/ui/input";
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
    title: "Totaal klanten",
    value: "523",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Maandomzet",
    value: "€ 84.250",
    change: "+8%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Openstaande facturen",
    value: "€ 12.450",
    change: "-3%",
    trend: "down",
    icon: FileText,
  },
  {
    title: "Afspraken deze week",
    value: "18",
    change: "+5",
    trend: "up",
    icon: Calendar,
  },
];

const recentClients = [
  { id: "DB-2024-523", name: "Van Dijk Techniek BV", contact: "Marie van Dijk", lastActive: "2 uur geleden", status: "actief", package: "Business" },
  { id: "DB-2024-522", name: "Jansen Bouw", contact: "Peter Jansen", lastActive: "5 uur geleden", status: "actief", package: "Starter" },
  { id: "DB-2024-521", name: "Creative Studio", contact: "Lisa de Boer", lastActive: "1 dag geleden", status: "actief", package: "Enterprise" },
  { id: "DB-2024-520", name: "Amsterdam Catering", contact: "Ahmed Hassan", lastActive: "2 dagen geleden", status: "inactief", package: "Business" },
  { id: "DB-2024-519", name: "Tech Solutions NL", contact: "John Smith", lastActive: "3 dagen geleden", status: "actief", package: "Starter" },
];

const recentDocuments = [
  { name: "Jaarrekening 2023 - Van Dijk Techniek", type: "PDF", size: "2.4 MB", uploaded: "2 uur geleden" },
  { name: "BTW Q4 2023 - Jansen Bouw", type: "PDF", size: "1.1 MB", uploaded: "5 uur geleden" },
  { name: "Loonadministratie dec 2023", type: "XLSX", size: "856 KB", uploaded: "1 dag geleden" },
  { name: "Fiscaal advies - Creative Studio", type: "PDF", size: "3.2 MB", uploaded: "2 dagen geleden" },
];

export default function AdminPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
    if (!isLoading && user?.role !== "admin") {
      router.push("/dashboard");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
                Admin Panel
              </h1>
              <p className="text-sm text-muted-foreground">
                Beheer uw klanten en administratie
              </p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-[#1e3a5f] dark:text-white hover:bg-red-500/10 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Uitloggen
          </button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
                        {stat.value}
                      </p>
                      <div className={`flex items-center gap-1 text-sm mt-2 ${
                        stat.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}>
                        <TrendIcon className="w-4 h-4" />
                        {stat.change}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Revenue Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <GlassCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                Omzet Overzicht
              </h2>
              <select className="px-3 py-1.5 rounded-lg border border-[#1e3a5f]/20 bg-transparent text-sm">
                <option>Afgelopen 6 maanden</option>
                <option>Afgelopen jaar</option>
                <option>Alles</option>
              </select>
            </div>
            <div className="aspect-[3/1] bg-gradient-to-t from-[#d4af37]/10 to-transparent rounded-xl flex items-end justify-around p-6 gap-2">
              {[65, 45, 80, 55, 70, 90].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-[#d4af37] to-[#e5c158] rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-around mt-4 text-xs text-muted-foreground">
              <span>Aug</span>
              <span>Sep</span>
              <span>Okt</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Recent Clients Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <GlassCard>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                Recent Klanten
              </h2>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Zoek klanten..."
                  className="pl-10"
                  aria-label="Zoek klanten"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Klantnummer</TableHead>
                    <TableHead>Bedrijf</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Pakket</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Laatst actief</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentClients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.id}</TableCell>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.contact}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          client.package === "Enterprise"
                            ? "bg-purple-500/20 text-purple-600"
                            : client.package === "Business"
                            ? "bg-[#d4af37]/20 text-[#d4af37]"
                            : "bg-blue-500/20 text-blue-600"
                        }`}>
                          {client.package}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`flex items-center gap-1.5 ${
                          client.status === "actief" ? "text-green-500" : "text-red-500"
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${
                            client.status === "actief" ? "bg-green-500" : "bg-red-500"
                          }`} />
                          {client.status === "actief" ? "Actief" : "Inactief"}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{client.lastActive}</TableCell>
                      <TableCell>
                        <button className="p-2 rounded-lg hover:bg-[#1e3a5f]/10 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassCard>
        </motion.div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Documents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                  Recent Documenten
                </h2>
                <button className="text-sm text-[#d4af37] hover:underline">
                  Alles bekijken
                </button>
              </div>

              <div className="space-y-3">
                {recentDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#1e3a5f]/5 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1e3a5f] dark:text-white text-sm">
                          {doc.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{doc.uploaded}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassCard className="h-full">
              <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white mb-6">
                Snelle Acties
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Nieuwe klant", icon: Users, color: "bg-blue-500/20 text-blue-600" },
                  { label: "Factuur maken", icon: FileText, color: "bg-green-500/20 text-green-600" },
                  { label: "Afspraak inplannen", icon: Calendar, color: "bg-[#d4af37]/20 text-[#d4af37]" },
                  { label: "Rapportage", icon: TrendingUp, color: "bg-purple-500/20 text-purple-600" },
                ].map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      className="p-4 rounded-xl bg-[#1e3a5f]/5 dark:bg-white/5 hover:bg-[#1e3a5f]/10 transition-colors text-left"
                    >
                      <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-[#1e3a5f] dark:text-white">
                        {action.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
