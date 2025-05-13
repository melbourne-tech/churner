import { Lightbulb } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { cn } from '~/lib/utils'
import Footer from './Footer'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export interface LayoutProps {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div
      className={cn(
        inter.className,
        'flex flex-col bg-gray-50 min-h-screen-dvh'
      )}
    >
      <div className="bg-blue-100 text-blue-900 border-b border-blue-200 text-center px-4 py-1.5 w-full flex items-center justify-center text-xs font-medium">
        <Lightbulb className="h-4 w-4 mr-1.5" />
        <span>
          Want to skip the points and book cheap flights directly? Check out our
          new site:{' '}
          <Link
            href="https://www.flightdeals.net/?utm_source=churner&utm_medium=banner"
            target="_blank"
            rel="noopener"
            className="font-semibold underline hover:text-blue-500"
          >
            flightdeals.net
          </Link>
        </span>
      </div>
      <Header />

      <main className="flex-1 max-w-xl w-full mx-auto bg-white shadow-lg overflow-x-hidden pb-16 sm:pb-20 lg:pb-24">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
