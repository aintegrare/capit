import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Capit Design System - Componentes React Modernos',
  description: 'Sistema de design completo com componentes React reutilizáveis, construído com TypeScript, Tailwind CSS e Next.js. Acelere o desenvolvimento com nossa biblioteca de componentes profissionais.',
  keywords: ['design system', 'react', 'typescript', 'tailwind', 'components', 'ui library', 'next.js'],
  authors: [{ name: 'Capit Team' }],
  creator: 'Capit',
  publisher: 'Capit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://capit-design-system.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Capit Design System - Componentes React Modernos',
    description: 'Sistema de design completo com componentes React reutilizáveis, construído com TypeScript, Tailwind CSS e Next.js.',
    url: 'https://capit-design-system.netlify.app',
    siteName: 'Capit Design System',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Capit Design System - Sistema de Design Moderno',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capit Design System - Componentes React Modernos',
    description: 'Sistema de design completo com componentes React reutilizáveis, construído com TypeScript, Tailwind CSS e Next.js.',
    images: ['/og-image.svg'],
    creator: '@capit',
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/capit-store-logo-simple.png" />
        <link rel="apple-touch-icon" href="/capit-store-logo-simple.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
