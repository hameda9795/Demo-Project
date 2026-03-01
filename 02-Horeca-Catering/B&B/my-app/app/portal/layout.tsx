import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mijn Verblijf | Het Kleine Paradijs',
  description: 'Gast portaal voor Het Kleine Paradijs B&B',
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
