import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Het Kleine Paradijs',
  description: 'Beheerpaneel voor Het Kleine Paradijs B&B',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
