import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple Test Website',
  description: 'A simple test website built with AI Builder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*Adding head tag for SEO and metadata*/}
      </head>
      <body>{children}</body>
    </html>
  )
}
