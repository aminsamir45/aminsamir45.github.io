import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Samir Amin',
  description: 'MIT graduate specializing in AI research, machine learning, and full-stack development. Currently Software Engineer at Mercor and former CTO of HomeRunns.',
  keywords: ['AI', 'Machine Learning', 'Software Engineer', 'MIT', 'Full Stack', 'Research'],
  authors: [{ name: 'Samir Amin' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20">
          {children}
        </div>
      </body>
    </html>
  )
} 