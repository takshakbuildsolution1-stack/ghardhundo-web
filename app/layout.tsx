import type { Metadata } from 'next'
import { Sora, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GharDhundo — Buy smarter. Save ₹10 lakhs.',
  description:
    'AI-powered group buying for Pune homes. Priya AI matches you with 4 other buyers. One developer negotiation. Zero brokerage. Save ₹7–10 lakhs.',
  openGraph: {
    title: 'GharDhundo — Buy smarter. Save ₹10 lakhs.',
    description: 'AI group buying for Pune homes. Zero brokerage. Save ₹7–10 lakhs.',
    url: 'https://ghardhundo.com',
    siteName: 'GharDhundo',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSerif.variable} ${jetbrains.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
