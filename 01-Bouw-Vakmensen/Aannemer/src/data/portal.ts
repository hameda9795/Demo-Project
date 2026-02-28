import { ClientProject, ChatMessage } from '@/types'

export const clientProjects: ClientProject[] = [
  {
    id: '1',
    title: 'Keuken renovatie',
    status: 'in-uitvoering',
    progress: 65,
    startDate: '2024-01-15',
    endDate: '2024-03-01',
    documents: [
      { id: '1', name: 'Offerte Keuken.pdf', type: 'pdf', size: '2.4 MB', uploadedAt: '2024-01-10' },
      { id: '2', name: 'Plattegrond.pdf', type: 'pdf', size: '1.8 MB', uploadedAt: '2024-01-12' },
      { id: '3', name: 'Contract.pdf', type: 'pdf', size: '3.2 MB', uploadedAt: '2024-01-14' },
    ],
  },
  {
    id: '2',
    title: 'Dak vervanging',
    status: 'planning',
    progress: 15,
    startDate: '2024-03-01',
    documents: [
      { id: '4', name: 'Offerte Dakwerk.pdf', type: 'pdf', size: '2.1 MB', uploadedAt: '2024-02-01' },
    ],
  },
]

export const chatMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'contractor',
    message: 'Goedemorgen! De tegels voor de keuken zijn binnen. We kunnen maandag beginnen met het leggen.',
    timestamp: '2024-01-25T09:00:00',
    read: true,
  },
  {
    id: '2',
    sender: 'client',
    message: 'Fijn om te horen! Welke tijd maandag?',
    timestamp: '2024-01-25T10:30:00',
    read: true,
  },
  {
    id: '3',
    sender: 'contractor',
    message: 'We starten om 08:00 uur. Tot maandag!',
    timestamp: '2024-01-25T11:00:00',
    read: true,
  },
  {
    id: '4',
    sender: 'contractor',
    message: 'De keuken vordert goed! Morgen plaatsen we het aanrecht.',
    timestamp: '2024-01-30T16:00:00',
    read: false,
  },
]
