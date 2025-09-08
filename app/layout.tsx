import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tablan | Industrial AI Automation Expert - Boost Sales & Cut Manual Work',
  description: 'Industrial AI automation expert helping manufacturers, suppliers, and distributors improve sales, marketing and operations using no-code AI automation & workflow automation. 70% manual task reduction guaranteed.',
  keywords: 'industrial AI automation, manufacturing automation, no-code AI, workflow automation, industrial sales automation, manufacturing AI, distribution automation, technical sales AI',
  authors: [{ name: 'Tablan' }],
  openGraph: {
    type: 'website',
    url: 'https://tablanio.netlify.app/',
    title: 'Tablan | Industrial AI Automation Expert',
    description: 'Industrial AI automation expert helping manufacturers improve sales & operations. 70% manual task reduction guaranteed.',
    images: [
      {
        url: 'https://tablanio.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tablan Industrial AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tablan | Industrial AI Automation Expert',
    description: 'Industrial AI automation expert helping manufacturers improve sales & operations. 70% manual task reduction guaranteed.',
    images: ['https://tablanio.netlify.app/og-image.jpg'],
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}