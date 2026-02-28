'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { adminProjects } from '@/data/admin'
import { Badge } from '@/components/atoms/Badge'
import { cn } from '@/lib/utils'

/**
 * Projects Table Component
 * Shows recent projects with toggleable visibility
 */
export function ProjectsTable() {
  const [projects, setProjects] = useState(adminProjects)

  const toggleVisibility = (id: string) => {
    setProjects(prev => 
      prev.map(p => p.id === id ? { ...p, visibility: !p.visibility } : p)
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-navy-light rounded-xl border border-white/5 overflow-hidden"
    >
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-white text-lg">Recente Projecten</h3>
          <button className="text-safety text-sm hover:underline">
            Bekijk alle
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-white/40 text-sm border-b border-white/5">
              <th className="px-6 py-4 font-medium">Project</th>
              <th className="px-6 py-4 font-medium">Categorie</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Zichtbaar</th>
              <th className="px-6 py-4 font-medium">Klant</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-concrete/20 flex items-center justify-center">
                      <span className="text-white/40 font-bold">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-white font-medium">{project.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white/60 capitalize">{project.category}</span>
                </td>
                <td className="px-6 py-4">
                  <Badge 
                    variant={project.status === 'afgerond' ? 'success' : 'warning'}
                  >
                    {project.status === 'afgerond' ? 'Afgerond' : 'In uitvoering'}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleVisibility(project.id)}
                    className={cn(
                      'w-12 h-6 rounded-full transition-colors relative',
                      project.visibility ? 'bg-safety' : 'bg-white/20'
                    )}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full"
                      animate={{ left: project.visibility ? 'calc(100% - 20px)' : '4px' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                    <span className="sr-only">
                      {project.visibility ? 'Verberg' : 'Toon'}
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4 text-white/60">
                  {project.clientName || '-'}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
