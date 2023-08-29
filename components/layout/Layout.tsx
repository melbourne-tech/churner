import { Inter } from 'next/font/google'
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
      <Header />

      <main className="flex-1 max-w-xl w-full mx-auto bg-white shadow-lg overflow-hidden pb-16 sm:pb-20 lg:pb-24">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
