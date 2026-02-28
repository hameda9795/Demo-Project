'use client'

import { motion } from 'framer-motion'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { Badge } from '@/components/atoms/Badge'
import { Search, Filter, Download, Eye } from 'lucide-react'

// Fake quote data
const quotes = [
  { id: 'OFF-001', client: 'Familie De Vries', service: 'Keuken renovatie', status: 'nieuw', date: '2024-01-28', value: 15000 },
  { id: 'OFF-002', client: 'Dhr. Jansen', service: 'Dak vervanging', status: 'in-behandeling', date: '2024-01-27', value: 8500 },
  { id: 'OFF-003', client: 'Mevr. Bakker', service: 'Badkamer renovatie', status: 'afgewacht', date: '2024-01-26', value: 12000 },
  { id: 'OFF-004', client: 'Familie Peters', service: 'Aanbouw', status: 'goedgekeurd', date: '2024-01-25', value: 45000 },
  { id: 'OFF-005', client: 'Dhr. Smit', service: 'Timmerwerk', status: 'nieuw', date: '2024-01-24', value: 3500 },
]

export default function AdminQuotesPage() {
  return (
    <div className="min-h-screen bg-navy">
      <AdminSidebar />
      
      <main className="ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="font-heading font-bold text-3xl text-white">Offertes</h1>
            <p className="text-white/50">Beheer alle offerte-aanvragen</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/80 rounded-xl hover:bg-white/10 transition-colors">
            <Download size={18} />
            Exporteren
          </button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Zoek offertes..."
              className="w-full bg-navy-light border border-white/10 rounded-xl px-4 py-3 pl-12 text-white placeholder-white/30 focus:ring-2 focus:ring-safety focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Quotes Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-navy-light rounded-xl border border-white/5 overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="text-left text-white/40 text-sm border-b border-white/5">
                <th className="px-6 py-4 font-medium">Offerte #</th>
                <th className="px-6 py-4 font-medium">Klant</th>
                <th className="px-6 py-4 font-medium">Dienst</th>
                <th className="px-6 py-4 font-medium">Bedrag</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Datum</th>
                <th className="px-6 py-4 font-medium">Acties</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote, index) => (
                <motion.tr
                  key={quote.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 text-white font-mono">{quote.id}</td>
                  <td className="px-6 py-4 text-white">{quote.client}</td>
                  <td className="px-6 py-4 text-white/60">{quote.service}</td>
                  <td className="px-6 py-4 text-white font-medium">
                    €{quote.value.toLocaleString('nl-NL')}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      quote.status === 'goedgekeurd' ? 'success' :
                      quote.status === 'afgewacht' ? 'warning' :
                      quote.status === 'nieuw' ? 'info' : 'default'
                    }>
                      {quote.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-white/60">{quote.date}</td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white">
                      <Eye size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </main>
    </div>
  )
}
