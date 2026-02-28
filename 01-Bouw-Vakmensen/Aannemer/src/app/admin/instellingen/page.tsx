'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { Save, Bell, Shield, Palette } from 'lucide-react'

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    autoPublish: false,
    maintenanceMode: false,
  })

  return (
    <div className="min-h-screen bg-navy">
      <AdminSidebar />
      
      <main className="ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-heading font-bold text-3xl text-white">Instellingen</h1>
          <p className="text-white/50">Beheer uw voorkeuren</p>
        </motion.div>

        {/* Settings Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-navy-light rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-safety/10 rounded-lg flex items-center justify-center">
                <Bell className="text-safety" size={20} />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Notificaties</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <div>
                  <p className="text-white">E-mail notificaties</p>
                  <p className="text-white/50 text-sm">Ontvang updates via e-mail</p>
                </div>
                <button
                  onClick={() => setSettings(s => ({ ...s, emailNotifications: !s.emailNotifications }))}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.emailNotifications ? 'bg-safety' : 'bg-white/20'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-4 h-4 bg-white rounded-full"
                    animate={{ left: settings.emailNotifications ? 'calc(100% - 20px)' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-white">SMS notificaties</p>
                  <p className="text-white/50 text-sm">Ontvang updates via SMS</p>
                </div>
                <button
                  onClick={() => setSettings(s => ({ ...s, smsNotifications: !s.smsNotifications }))}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.smsNotifications ? 'bg-safety' : 'bg-white/20'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-4 h-4 bg-white rounded-full"
                    animate={{ left: settings.smsNotifications ? 'calc(100% - 20px)' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-navy-light rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Shield className="text-blue-500" size={20} />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Beveiliging</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">Huidig wachtwoord</label>
                <input
                  type="password"
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:ring-2 focus:ring-safety focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Nieuw wachtwoord</label>
                <input
                  type="password"
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:ring-2 focus:ring-safety focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </motion.div>

          {/* Website Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-navy-light rounded-xl p-6 border border-white/5 lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Palette className="text-purple-500" size={20} />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Website Instellingen</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <div>
                  <p className="text-white">Automatisch publiceren</p>
                  <p className="text-white/50 text-sm">Projecten direct zichtbaar na aanmaken</p>
                </div>
                <button
                  onClick={() => setSettings(s => ({ ...s, autoPublish: !s.autoPublish }))}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.autoPublish ? 'bg-safety' : 'bg-white/20'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-4 h-4 bg-white rounded-full"
                    animate={{ left: settings.autoPublish ? 'calc(100% - 20px)' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <div>
                  <p className="text-white">Onderhoudsmodus</p>
                  <p className="text-white/50 text-sm">Website tonen als in onderhoud</p>
                </div>
                <button
                  onClick={() => setSettings(s => ({ ...s, maintenanceMode: !s.maintenanceMode }))}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.maintenanceMode ? 'bg-safety' : 'bg-white/20'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-4 h-4 bg-white rounded-full"
                    animate={{ left: settings.maintenanceMode ? 'calc(100% - 20px)' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-end"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-safety text-white font-semibold rounded-xl hover:bg-safety-dark transition-colors">
            <Save size={18} />
            Instellingen Opslaan
          </button>
        </motion.div>
      </main>
    </div>
  )
}
