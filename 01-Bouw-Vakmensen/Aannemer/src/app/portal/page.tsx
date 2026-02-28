'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  LogOut,
  CheckCircle,
  Clock,
  Upload,
  Download,
  File,
  Send
} from 'lucide-react'
import { clientProjects, chatMessages } from '@/data/portal'
import { cn } from '@/lib/utils'

export default function PortalDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'chat'>('overview')
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Portal Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-xl text-navy">
            <span className="text-safety">Bouw</span>bedrijf
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-concrete text-sm hidden sm:inline">Welkom, Familie De Vries</span>
            <Link href="/portal/login/" className="p-2 hover:bg-gray-100 rounded-lg">
              <LogOut size={20} className="text-concrete" />
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm p-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  activeTab === 'overview' ? 'bg-safety text-white' : 'text-concrete hover:bg-gray-50'
                )}
              >
                <LayoutDashboard size={20} />
                <span className="font-medium">Overzicht</span>
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  activeTab === 'documents' ? 'bg-safety text-white' : 'text-concrete hover:bg-gray-50'
                )}
              >
                <FileText size={20} />
                <span className="font-medium">Documenten</span>
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  activeTab === 'chat' ? 'bg-safety text-white' : 'text-concrete hover:bg-gray-50'
                )}
              >
                <MessageSquare size={20} />
                <span className="font-medium">Berichten</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'documents' && <DocumentsTab />}
            {activeTab === 'chat' && <ChatTab newMessage={newMessage} setNewMessage={setNewMessage} />}
          </div>
        </div>
      </div>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Active Project */}
      {clientProjects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-heading font-bold text-xl text-navy">{project.title}</h2>
              <p className="text-concrete text-sm">Gestart op {new Date(project.startDate).toLocaleDateString('nl-NL')}</p>
            </div>
            <span className="px-3 py-1 bg-safety/10 text-safety rounded-full text-sm font-medium">
              {project.status === 'in-uitvoering' ? 'In uitvoering' : 'Planning'}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-concrete">Voortgang</span>
              <span className="font-bold text-navy">{project.progress}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-safety rounded-full"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center justify-between">
            {['Planning', 'Voorbereiding', 'Uitvoering', 'Oplevering'].map((step, index) => {
              const isCompleted = (project.progress / 100) * 4 > index
              const isCurrent = Math.floor((project.progress / 100) * 4) === index
              
              return (
                <div key={step} className="flex flex-col items-center">
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center mb-2',
                    isCompleted ? 'bg-green-500 text-white' :
                    isCurrent ? 'bg-safety text-white' : 'bg-gray-200 text-gray-400'
                  )}>
                    {isCompleted ? <CheckCircle size={16} /> : index + 1}
                  </div>
                  <span className={cn(
                    'text-xs',
                    isCompleted || isCurrent ? 'text-navy font-medium' : 'text-concrete'
                  )}>
                    {step}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function DocumentsTab() {
  return (
    <div className="space-y-6">
      {/* Upload Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-8 shadow-sm border-2 border-dashed border-gray-200 hover:border-safety/50 transition-colors text-center cursor-pointer"
      >
        <Upload className="mx-auto mb-4 text-concrete" size={40} />
        <h3 className="font-heading font-bold text-navy mb-2">Documenten Uploaden</h3>
        <p className="text-concrete text-sm">Sleep bestanden hierheen of klik om te bladeren</p>
      </motion.div>

      {/* Document List */}
      {clientProjects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-4 border-b">
            <h3 className="font-heading font-bold text-navy">{project.title} - Documenten</h3>
          </div>
          <div className="divide-y">
            {project.documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-safety/10 rounded-lg flex items-center justify-center">
                    <File className="text-safety" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy">{doc.name}</p>
                    <p className="text-concrete text-sm">{doc.size} • {doc.uploadedAt}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-concrete hover:text-safety">
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function ChatTab({ newMessage, setNewMessage }: { newMessage: string; setNewMessage: (v: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-[600px]"
    >
      {/* Header */}
      <div className="p-4 border-b">
        <h3 className="font-heading font-bold text-navy">Berichten met Bouwbedrijf Van den Berg</h3>
        <p className="text-concrete text-sm">Reactie binnen 24 uur</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              'flex',
              msg.sender === 'client' ? 'justify-end' : 'justify-start'
            )}
          >
            <div className={cn(
              'max-w-[80%] px-4 py-3 rounded-2xl',
              msg.sender === 'client'
                ? 'bg-safety text-white rounded-br-md'
                : 'bg-gray-100 text-navy rounded-bl-md'
            )}>
              <p>{msg.message}</p>
              <p className={cn(
                'text-xs mt-1',
                msg.sender === 'client' ? 'text-white/70' : 'text-concrete'
              )}>
                {new Date(msg.timestamp).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Typ een bericht..."
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-safety focus:border-transparent"
          />
          <button className="px-6 py-3 bg-safety text-white rounded-xl hover:bg-safety-dark transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
