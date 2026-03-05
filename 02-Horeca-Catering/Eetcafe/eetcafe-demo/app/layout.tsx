import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eetcafe De Demo - Eten & Drinken in Utrecht',
  description: 'Eetcafe De Demo - Een plek voor goed eten, drinken en gesprekken in Utrecht.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="antialiased">{children}</body>
    </html>
  )
}
