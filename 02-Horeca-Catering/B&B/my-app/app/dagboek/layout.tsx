import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dagboek | Het Kleine Paradijs',
  description: 'Verhalen, recepten en tips van Het Kleine Paradijs B&B',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
