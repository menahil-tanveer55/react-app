import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { defaultMetadata } from '@/config/metadata'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <AnnouncementBar />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
