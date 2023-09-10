import { Send } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from './ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog'
import { Input } from './ui/Input'
import { Label } from './ui/Label'

const SignIn = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')?.toString()
    console.log('email:', email)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <span>Sign In</span>
          <span className="text-gray-500">&bull;</span>
          <span>Sign Up</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="gap-4">
          <DialogTitle>Sign In or Sign Up</DialogTitle>
          <DialogDescription>
            Enter your email address to get a sign in link.
          </DialogDescription>
        </DialogHeader>

        <form
          id="sign-in-form"
          className="flex flex-col gap-2"
          method="POST"
          onSubmit={onSubmit}
        >
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            autoComplete="email"
            required={true}
            autoFocus={true}
          />
        </form>

        <DialogFooter>
          <Button type="submit" form="sign-in-form">
            <Send className="h-4 w-4" />
            <span>Email Link</span>
          </Button>
        </DialogFooter>

        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400 leading-none">
            By signing in you agree to receive occasional emails from us.
            <br />
            You can unsubscribe at any time.
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SignIn
