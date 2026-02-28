import { DashboardStats, MonthlyRevenue, AdminProject } from '@/types'

export const dashboardStats: DashboardStats = {
  openQuotes: 12,
  activeProjects: 8,
  completedProjects: 156,
  reviews: 48,
}

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: 'Jan', revenue: 125000 },
  { month: 'Feb', revenue: 145000 },
  { month: 'Mrt', revenue: 138000 },
  { month: 'Apr', revenue: 165000 },
  { month: 'Mei', revenue: 178000 },
  { month: 'Jun', revenue: 195000 },
  { month: 'Jul', revenue: 188000 },
  { month: 'Aug', revenue: 210000 },
  { month: 'Sep', revenue: 195000 },
  { month: 'Okt', revenue: 185000 },
  { month: 'Nov', revenue: 220000 },
  { month: 'Dec', revenue: 235000 },
]

export const adminProjects: AdminProject[] = [
  {
    id: '1',
    title: 'Villa Renovatie Lombok',
    category: 'renovatie',
    location: 'Utrecht, Lombok',
    description: 'Complete renovatie jaren 30 villa',
    image: '/images/project-renovatie.jpg',
    year: 2023,
    status: 'afgerond',
    visibility: true,
    clientName: 'Familie De Vries',
  },
  {
    id: '2',
    title: 'Nieuwbouw Dakappartement',
    category: 'nieuwbouw',
    location: 'Utrecht, Wittevrouwen',
    description: 'Luxueus dakappartement',
    image: '/images/project-nieuwbouw.jpg',
    year: 2023,
    status: 'afgerond',
    visibility: true,
    clientName: 'Dhr. Van Dijk',
  },
  {
    id: '3',
    title: 'Dakrenovatie Rijtjeshuis',
    category: 'dakwerk',
    location: 'Utrecht, Oudwijk',
    description: 'Compleet dak vervangen',
    image: '/images/project-dakwerk.jpg',
    year: 2024,
    status: 'in-uitvoering',
    visibility: true,
    clientName: 'Mevr. Bakker',
  },
  {
    id: '4',
    title: 'Grachtenpand Restauratie',
    category: 'renovatie',
    location: 'Utrecht, Binnenstad',
    description: 'Monumentaal pand restauratie',
    image: '/images/project-renovatie.jpg',
    year: 2022,
    status: 'afgerond',
    visibility: false,
    clientName: 'Familie Jansen',
  },
]
