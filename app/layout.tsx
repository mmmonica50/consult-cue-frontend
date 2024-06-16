import type { Metadata } from 'next'
import { Sumana } from 'next/font/google'
import './globals.css'

const inter = Sumana({weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Consult Cue',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
