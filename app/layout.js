// app/layout.js
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Viktória & Tomi Esküvője',
  description: 'Szeretettel meghívunk az esküvőnkre!',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className={montserrat.variable}>
      <head>
        {/* Google Font importálása */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-800">
        <main>{children}</main>
      </body>
    </html>
  )
}