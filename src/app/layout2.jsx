import { CounterContextProvider } from 'src/contexts/counter.context'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from 'src/contexts/auth-context'
import { Layout } from 'src/layouts/dashboard/layout'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo Console | Admyre',
  description: 'Small Demo application of Admyre.Club Software',
}

export default function RootLayout({ children }) {
  return (
        <html lang="en">
          <body className={inter.className}>
            <CounterContextProvider>
              <AuthProvider>
                {children}</AuthProvider></CounterContextProvider>
          </body>
        </html>
  )
}


