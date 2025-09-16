import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tablan | Industrial AI Automation Expert - Boost Sales & Cut Manual Work',
  description: 'Industrial AI automation expert helping manufacturers, suppliers, and distributors improve sales, marketing and operations using no-code AI automation & workflow automation. 70% manual task reduction guaranteed.',
  keywords: 'industrial AI automation, manufacturing automation, no-code AI, workflow automation, industrial sales automation, manufacturing AI, distribution automation, technical sales AI, industrial operations, supply chain automation',
  authors: [{ name: 'Tablan', url: 'https://tablan.io' }],
  creator: 'Tablan',
  publisher: 'Tablan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tablan.io',
    siteName: 'Tablan - Industrial AI Automation',
    title: 'Tablan | Industrial AI Automation Expert - Boost Sales & Cut Manual Work',
    description: 'Industrial AI automation expert helping manufacturers improve sales & operations. 70% manual task reduction guaranteed.',
    images: [
      {
        url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/tablaniologo.png',
        width: 1200,
        height: 630,
        alt: 'Tablan Industrial AI Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tablan | Industrial AI Automation Expert',
    description: 'Industrial AI automation expert helping manufacturers improve sales & operations. 70% manual task reduction guaranteed.',
    images: ['https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/tablaniologo.png'],
    creator: '@tablan_io',
    site: '@tablan_io',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console code
  },
  category: 'technology',
  metadataBase: new URL('https://tablan.io'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EC3928" />
        <link rel="canonical" href="https://tablan.io" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://mlwcbcvlqzjbgriwhino.supabase.co" />
        <link rel="dns-prefetch" href="https://mlwcbcvlqzjbgriwhino.supabase.co" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional meta tags for enhanced social sharing */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="article:author" content="Tablan" />
        <meta name="linkedin:owner" content="tablan" />

        {/* Enhanced SEO meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Apple specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tablan" />

        {/* Microsoft specific meta tags */}
        <meta name="msapplication-TileColor" content="#EC3928" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tablan",
              "url": "https://tablan.io",
              "logo": "https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/tablaniologo.png",
              "description": "Industrial AI automation solutions for manufacturers, suppliers, and distributors",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "work@tablan.io"
              },
              "sameAs": [
                "https://linkedin.com/company/tablan"
              ],
              "service": {
                "@type": "Service",
                "name": "Industrial AI Automation",
                "description": "No-code AI automation solutions for industrial sales, marketing, and operations",
                "provider": {
                  "@type": "Organization",
                  "name": "Tablan"
                },
                "areaServed": "Worldwide",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Industrial manufacturers, suppliers, and distributors"
                }
              }
            })
          }}
        />

        {/* Additional structured data for services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tablan",
              "url": "https://tablan.io",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://tablan.io/?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}