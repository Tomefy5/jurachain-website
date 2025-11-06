import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'  // ← IMPORTANT
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JuraChain - Legal Blockchain Innovation',
  description: 'Revolutionary blockchain technology designed for compliance, transparency, and security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body className="bg-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
