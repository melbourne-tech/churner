import Link from 'next/link'
import { Button } from '../ui/Button'
import SignIn from '../SignIn'

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0">
      <div className="flex h-16 justify-between items-center px-4">
        <h1 className="font-medium">
          <Link href="/">Credit Card Churner Australia</Link>
        </h1>

        <div className="flex items-center gap-2">
          <Link
            href="/faq"
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            FAQ
          </Link>

          {/* <SignIn /> */}

          {/* <Button
          variant="ghost"
          // onClick={() => signOut()}
          // isLoading={isLoading}
          // disabled={isLoading}
          >
          Sign Out
        </Button> */}
        </div>
      </div>
    </header>
  )
}

export default Header
