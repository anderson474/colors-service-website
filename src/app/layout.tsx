import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import BotonWhatsApp from '@/components/botonWhatsApp'
import ParallaxWrapper from '@/components/parallaxWrapper'
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
  // El title.template se usará en todas las páginas hijas
  title: {
    template: '%s | Color Service Painting',
    default: 'Color Service Painting | Professional Painters in Boston, MA', // Título por defecto
  },
  description: 'Top-rated residential and commercial painting services in the Boston, MA area. Get a free quote today for interior and exterior painting projects.',
  // Puedes añadir más metadata base aquí si quieres
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
        <ParallaxWrapper>
          {children}
          <Footer/>
          <BotonWhatsApp />
        </ParallaxWrapper>
        
      </body>
    </html>
  )
}