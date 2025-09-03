import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Anna & Balázs Esküvője',
  description: 'Szeretettel meghívunk az esküvőnkre!',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      // Itt megadhatsz további favicon méreteket, ha vannak
    ],
    apple: '/images/apple-touch-icon.png',
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className={montserrat.variable}>
      <body className="bg-white text-gray-800">
        <main>{children}</main>
      </body>
    </html>
  )
}