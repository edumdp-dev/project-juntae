import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { SidebarProvider } from '@/lib/sidebar-context'
import { Sidebar } from '@/components/ui/sidebar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'JUNTAE',
  description: 'Custódia institucional para grupos financeiros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <SidebarProvider>
          <Sidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  )
}
