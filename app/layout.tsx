import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../src/styles.css'

export const metadata: Metadata = {
  title: 'Jose Ayala | iOS Developer',
  description: 'Professional CV and portfolio of Jose Julian Ayala Flores, an iOS developer based in Guatemala.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
