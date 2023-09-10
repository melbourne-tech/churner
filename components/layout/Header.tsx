import Link from 'next/link'
import { Button } from '../ui/Button'
import SignIn from '../SignIn'

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 justify-between items-center px-4">
        <h1 className="font-medium">
          <Link href="/">Credit Card Churner Australia</Link>
        </h1>

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
    </header>
  )
}

export default Header
