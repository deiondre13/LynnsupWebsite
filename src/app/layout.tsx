import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Lynnsup (Pty) Ltd | Professional Industrial Services & Solutions',
  description: 'CIPC registered multi-service company providing construction, electrical, plumbing, PPE supply, mining support, and technical services across South Africa. Trusted by industry leaders.',
  keywords: ['construction services', 'electrical CoC', 'plumbing', 'PPE supply', 'mining services', 'technical support', 'South Africa', 'Lynnsup', 'industrial services', 'CIPC registered'],
  authors: [{ name: 'Lynnsup (Pty) Ltd' }],
  openGraph: {
    title: 'Lynnsup (Pty) Ltd | Professional Industrial Services & Solutions',
    description: 'CIPC registered multi-service company providing construction, electrical, plumbing, PPE supply, mining support, and technical services across South Africa.',
    type: 'website',
    siteName: 'Lynnsup (Pty) Ltd',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lynnsup (Pty) Ltd | Professional Industrial Services',
    description: 'CIPC registered multi-service company serving South Africa with excellence and integrity.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingCTA />
      </body>
    </html>
  )
}
