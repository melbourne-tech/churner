import Link from 'next/link'
import { useEffect, useState } from 'react'
import supabase from '~/lib/supabase'
import SignIn from '../SignIn'
import { Button } from '../ui/Button'

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setIsSignedIn(session !== null)
    })

    return subscription.unsubscribe
  }, [])

  return (
    <header className="border-b bg-white sticky top-0">
      <div className="flex h-16 justify-between items-center px-4">
        <h1 className="font-medium">
          <Link href="/">Credit Card Churner Australia</Link>
        </h1>

        <div className="flex items-center gap-4">
          <Link
            href="/posts"
            className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
          >
            Posts
          </Link>

          <Link
            href="/faq"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            FAQ
          </Link>

          {!isSignedIn ? (
            <SignIn />
          ) : (
            <Button
              variant="ghost"
              onClick={() => {
                supabase.auth.signOut()
              }}
            >
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
