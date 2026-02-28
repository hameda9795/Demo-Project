'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { adminProjects } from '@/data/admin'
import { Badge } from '@/components/atoms/Badge'
import { Search, Plus, Filter, MoreVertical } from 'lucide-react'

/**
 * Admin Projects Page
 * Full projects management interface
 */
export default function AdminProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'afgerond' | 'in-uitvoering'>('all')

  const filteredProjects = adminProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.clientName?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus
    return matchesSearch && matchesFilter
  })

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
            <h1 className="font-heading font-bold text-3xl text-white">Projecten</h1>
            <p className="text-white/50">Beheer alle projecten</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-safety text-white font-semibold rounded-xl hover:bg-safety-dark transition-colors">
            <Plus size={20} />
            Nieuw Project
          </button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Zoek projecten..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-navy-light border border-white/10 rounded-xl px-4 py-3 pl-12 text-white placeholder-white/30 focus:ring-2 focus:ring-safety focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-2">
            {(['all', 'in-uitvoering', 'afgerond'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-safety text-white'
                    : 'bg-navy-light text-white/60 hover:bg-white/5'
                }`}
              >
                {status === 'all' ? 'Alle' : status === 'afgerond' ? 'Afgerond' : 'In uitvoering'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-light rounded-xl border border-white/5 overflow-hidden hover:border-safety/30 transition-colors"
            >
              {/* Project Image */}
              <div className="h-40 bg-gradient-to-br from-concrete/30 to-concrete-dark/50 flex items-center justify-center">
                <span className="font-heading font-bold text-5xl text-white/10">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={project.status === 'afgerond' ? 'success' : 'warning'}>
                    {project.status === 'afgerond' ? 'Afgerond' : 'In uitvoering'}
                  </Badge>
                  <button className="text-white/40 hover:text-white">
                    <MoreVertical size={18} />
                  </button>
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-4">{project.location}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-white/40 text-xs">Klant</p>
                    <p className="text-white/80 text-sm">{project.clientName || '-'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-xs">Jaar</p>
                    <p className="text-white/80 text-sm">{project.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/50">Geen projecten gevonden</p>
          </div>
        )}
      </main>
    </div>
  )
}
