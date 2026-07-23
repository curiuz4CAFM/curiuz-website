import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const sora = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://curiuz.com'),
  title: {
    default: 'Curiuz Technologies — Curiosity that drives clarity.',
    template: '%s · Curiuz Technologies',
  },
  description:
    'Curiuz is a business-transformation and AI advisory firm — and the maker of Premyz, the AI-powered operating system for modern facilities. 26+ years turning curiosity into measurable outcomes.',
  keywords: [
    'Curiuz', 'Premyz', 'CAFM software', 'facilities management platform',
    'AI advisory', 'digital transformation', 'preventive maintenance software', 'Dubai',
  ],
  openGraph: {
    title: 'Curiuz — Powered by Curiosity. Enabled by AI.',
    description: 'AI-enabled transformation — and Premyz, the software to run it.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-curi focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
