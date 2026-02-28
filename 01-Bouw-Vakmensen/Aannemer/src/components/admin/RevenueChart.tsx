'use client'

import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { monthlyRevenue } from '@/data/admin'
import { formatCurrency } from '@/lib/utils'

/**
 * Revenue Chart Component
 * Line chart showing monthly revenue using Recharts
 */
export function RevenueChart() {
  const totalRevenue = monthlyRevenue.reduce((acc, curr) => acc + curr.revenue, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-navy-light rounded-xl p-6 border border-white/5"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-bold text-white text-lg">Omzet Deze Maand</h3>
          <p className="text-white/40 text-sm">2024 - alle projecten</p>
        </div>
        <div className="text-right">
          <p className="font-heading font-bold text-2xl text-safety">
            {formatCurrency(totalRevenue)}
          </p>
          <p className="text-green-400 text-sm">+12.5% vs vorig jaar</p>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="month" 
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
              tickFormatter={(value) => `€${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.8)' }}
              formatter={(value: number) => [formatCurrency(value), 'Omzet']}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#f97316" 
              strokeWidth={3}
              dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#f97316', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
