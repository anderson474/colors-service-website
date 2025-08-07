import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import BotonWhatsApp from '@/components/botonWhatsApp'

// Configuración de las fuentes
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair', // Variable CSS para la fuente de títulos
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat', // Variable CSS para la fuente de cuerpo
})

export const metadata: Metadata = {
  title: 'Color Service - Painting Services in Boston, MA',
  description: 'Professional residential and commercial painting services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Aplicamos las variables de fuente al body */}
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        {children}
        <Footer/>
        <BotonWhatsApp />
      </body>
    </html>
  )
}