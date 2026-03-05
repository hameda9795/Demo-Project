'use client'

import Link from 'next/link'
import CustomCursor from '@/components/CustomCursor'
import FloatingButton from '@/components/FloatingButton'

const stats = [
  { icon: '📦', title: 'Nieuwe bestellingen', period: 'Vandaag', value: '12' },
  { icon: '💰', title: 'Omzet', period: 'Vandaag', value: '€486' },
  { icon: '👥', title: 'Klanten', period: 'Nieuw deze week', value: '8' },
  { icon: '📅', title: 'Catering', period: 'Aanvragen deze maand', value: '5' },
]

const recentOrders = [
  { id: '#1024', customer: 'Pieter van Dijk', items: 'Utrechter, Koffie', amount: '€9,00', time: '11:42', status: 'success' },
  { id: '#1025', customer: 'Sanne Jansen', items: 'Caesar Salade, Limonade', amount: '€12,00', time: '11:38', status: 'pending' },
  { id: '#1026', customer: 'Bakkerij Deeg', items: '10x Broodjes (catering)', amount: '€65,00', time: '11:15', status: 'pending' },
  { id: '#1027', customer: 'Mark de Vries', items: 'Italiaanse Klassieker, Soep', amount: '€10,45', time: '11:05', status: 'success' },
  { id: '#1028', customer: 'Lisa Bakker', items: 'Quinoa Bowl, Smoothie', amount: '€13,75', time: '10:52', status: 'success' },
]

const cateringRequests = [
  { id: '#C-45', customer: 'TechStart Utrecht', type: 'Vergaderlunch', date: '15 maart 2024', people: '15 personen', status: 'pending' },
  { id: '#C-46', customer: 'Bureau Groen', type: 'Bedrijfsevent', date: '20 maart 2024', people: '50 personen', status: 'new' },
  { id: '#C-47', customer: 'Familie Van den Berg', type: 'Bruiloft', date: '25 maart 2024', people: '80 personen', status: 'success' },
]

export default function DashboardPage() {
  return (
    <>
      <CustomCursor />
      <FloatingButton />
      
      <div className="min-h-screen bg-cream">
        {/* Admin Header */}
        <header className="bg-white py-sm border-b border-black/10 sticky top-0 z-50">
          <div className="max-w-[1400px] mx-auto px-md flex justify-between items-center">
            <Link href="/" className="flex flex-col font-display leading-none">
              <span className="text-xs font-body font-medium tracking-[0.2em] uppercase text-stone">De</span>
              <span className="text-xl font-bold text-primary">Lunchkamer</span>
            </Link>
            
            <nav className="flex gap-md max-md:hidden">
              <Link href="/dashboard" className="text-sm font-medium text-accent">Dashboard</Link>
              <Link href="#" className="text-sm font-medium text-stone hover:text-accent transition-colors">Bestellingen</Link>
              <Link href="#" className="text-sm font-medium text-stone hover:text-accent transition-colors">Menu</Link>
              <Link href="#" className="text-sm font-medium text-stone hover:text-accent transition-colors">Klanten</Link>
              <Link href="#" className="text-sm font-medium text-stone hover:text-accent transition-colors">Instellingen</Link>
            </nav>
            
            <div className="flex items-center gap-sm">
              <span className="text-sm font-medium">Demo Gebruiker</span>
              <Link 
                href="/" 
                className="text-xs text-stone px-4 py-2 border border-stone-light hover:bg-accent hover:text-white hover:border-accent transition-all"
              >
                Uitloggen
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[1400px] mx-auto px-md py-xl">
          {/* Welcome */}
          <div className="mb-xl">
            <h1 className="text-2xl mb-xs">Welkom, Demo Gebruiker</h1>
            <p className="text-stone">Hier is een overzicht van je lunchroom vandaag.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-md mb-xl">
            {stats.map((stat) => (
              <div 
                key={stat.title}
                className="bg-white p-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-[50px] h-[50px] bg-cream flex items-center justify-center text-xl mb-sm">
                  {stat.icon}
                </div>
                <h3 className="font-body text-lg font-semibold mb-0.5">{stat.title}</h3>
                <p className="text-sm text-stone mb-sm">{stat.period}</p>
                <div className="font-display text-3xl font-bold text-accent leading-none">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white p-lg overflow-x-auto mb-lg">
            <h3 className="mb-md font-display text-xl">Recente bestellingen</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Bestelnr.</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Klant</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Items</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Bedrag</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Tijd</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-cream transition-colors">
                    <td className="p-4 border-b border-cream">{order.id}</td>
                    <td className="p-4 border-b border-cream">{order.customer}</td>
                    <td className="p-4 border-b border-cream">{order.items}</td>
                    <td className="p-4 border-b border-cream">{order.amount}</td>
                    <td className="p-4 border-b border-cream">{order.time}</td>
                    <td className="p-4 border-b border-cream">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded ${
                        order.status === 'success' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status === 'success' ? 'Afgerond' : 'In behandeling'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Catering Requests Table */}
          <div className="bg-white p-lg overflow-x-auto">
            <h3 className="mb-md font-display text-xl">Openstaande catering aanvragen</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Aanvraag</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Klant</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Type</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Datum</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Aantal personen</th>
                  <th className="text-left p-4 border-b border-cream font-semibold text-stone uppercase text-xs tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {cateringRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-cream transition-colors">
                    <td className="p-4 border-b border-cream">{request.id}</td>
                    <td className="p-4 border-b border-cream">{request.customer}</td>
                    <td className="p-4 border-b border-cream">{request.type}</td>
                    <td className="p-4 border-b border-cream">{request.date}</td>
                    <td className="p-4 border-b border-cream">{request.people}</td>
                    <td className="p-4 border-b border-cream">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded ${
                        request.status === 'success' 
                          ? 'bg-green-100 text-green-800' 
                          : request.status === 'new'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {request.status === 'success' ? 'Bevestigd' : request.status === 'new' ? 'Nieuw' : 'Offerte verstuurd'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-warm-white py-md">
          <div className="max-w-[1400px] mx-auto px-md text-center">
            <p className="text-xs text-stone mb-xs">
              Dit is een demoversie en alle materiële en intellectuele rechten behoren toe aan{' '}
              <Link href="https://www.techsolutionsutrecht.nl" target="_blank" className="text-accent-light underline">
                TechSolutions Utrecht
              </Link>.
            </p>
            <p className="text-xs text-stone">
              © 2024 De Lunchkamer. Website door{' '}
              <Link href="https://www.techsolutionsutrecht.nl" target="_blank" className="text-accent-light">
                www.techsolutionsutrecht.nl
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
