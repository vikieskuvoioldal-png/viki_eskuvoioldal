import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Esküvői oldal',
  description: 'Szeretettel meghívunk az esküvőnkre!',
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