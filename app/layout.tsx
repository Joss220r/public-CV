import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../src/styles.css'

export const metadata: Metadata = {
  title: 'Jose Ayala | Desarrollador iOS',
  description: 'CV y portafolio profesional de Jose Julian Ayala Flores, desarrollador iOS de Guatemala.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
