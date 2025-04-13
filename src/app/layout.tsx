import './globals.css'

// eslint-disable-next-line
import { Nunito, PT_Sans } from 'next/font/google'

import { Header } from '@/components/core/header/header'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const ptSans = PT_Sans({
  variable: '--font-pt-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Explorador de Filmes Ghibli',
  description: 'Explore o mundo mágico dos filmes do Studio Ghibli',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} relative antialiased`}
      >
        <div className="texture" />
        <Header />
        {children}
      </body>
    </html>
  )
}
