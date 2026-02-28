'use client'

import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { StatsCard } from '@/components/admin/StatsCard'
import { RevenueChart } from '@/components/admin/RevenueChart'
import { ProjectsTable } from '@/components/admin/ProjectsTable'
import { dashboardStats } from '@/data/admin'
import { FileText, Briefcase, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Admin Dashboard Page
 * Stats cards, revenue chart, and projects table
 */
export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-navy">
      <AdminSidebar />
      
      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-heading font-bold text-3xl text-white">Dashboard</h1>
          <p className="text-white/50">Welkom terug, Johan</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Openstaande Offertes"
            value={dashboardStats.openQuotes}
            icon={FileText}
            trend={5}
            color="orange"
          />
          <StatsCard
            title="Lopende Projecten"
            value={dashboardStats.activeProjects}
            icon={Briefcase}
            trend={12}
            color="blue"
          />
          <StatsCard
            title="Afgeronde Projecten"
            value={dashboardStats.completedProjects}
            suffix="+"
            icon={CheckCircle}
            trend={8}
            color="green"
          />
          <StatsCard
            title="Reviews"
            value={dashboardStats.reviews}
            icon={Star}
            trend={3}
            color="purple"
          />
        </div>

        {/* Chart & Table Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-navy-light rounded-xl p-6 border border-white/5"
            >
              <h3 className="font-heading font-bold text-white text-lg mb-4">Snelle Acties</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors">
                  + Nieuw project toevoegen
                </button>
                <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors">
                  + Nieuwe offerte maken
                </button>
                <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors">
                  📊 Rapport exporteren
                </button>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-navy-light rounded-xl p-6 border border-white/5"
            >
              <h3 className="font-heading font-bold text-white text-lg mb-4">Recente Activiteit</h3>
              <div className="space-y-4">
                {[
                  { action: 'Nieuwe offerte aangevraagd', time: '5 min geleden', color: 'bg-blue-500' },
                  { action: 'Project "Dakrenovatie" bijgewerkt', time: '1 uur geleden', color: 'bg-green-500' },
                  { action: 'Klantreactie ontvangen', time: '3 uur geleden', color: 'bg-purple-500' },
                  { action: 'Factuur verstuurd', time: 'Gisteren', color: 'bg-orange-500' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.color} mt-2`} />
                    <div>
                      <p className="text-white/80 text-sm">{item.action}</p>
                      <p className="text-white/40 text-xs">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="mt-8">
          <ProjectsTable />
        </div>
      </main>
    </div>
  )
}
