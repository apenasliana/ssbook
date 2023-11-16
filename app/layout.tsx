import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SSBook',
  description: 'Fullstack Dev'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
        bg-[#F7F7F7] text-[#555] relative `}
      >
        {children}
      </body>
    </html>
  )
}
