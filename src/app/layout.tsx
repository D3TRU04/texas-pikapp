import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pi Kappa Phi - The University of Texas at Austin',
  description: 'The official website of the Zeta Theta Chapter of Pi Kappa Phi at The University of Texas at Austin.',
  keywords: ['Pi Kappa Phi', 'UT Austin', 'Fraternity', 'Greek Life', 'Texas Pi Kapp'],
  authors: [{ name: 'Pi Kappa Phi - Zeta Theta Chapter' }],
  creator: 'Pi Kappa Phi - Zeta Theta Chapter',
  publisher: 'Pi Kappa Phi - Zeta Theta Chapter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 