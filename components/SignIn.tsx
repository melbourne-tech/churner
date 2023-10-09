import { Mail, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import supabase from '~/lib/supabase'
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
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget

    const formData = new FormData(form)
    const email = formData.get('email')?.toString()

    if (!email) return

    supabase.auth
      .signInWithOtp({
        email,
      })
      .then(() => {
        form.reset()
        setSubmitted(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Mail className="h-4 w-4" />
          <span>Register for Updates</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="gap-4">
          <DialogTitle>Register for Updates</DialogTitle>
          <DialogDescription>
            Enter your email address and click the link sent to your inbox to
            receive updates about new credit card offers.
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
          <Button
            type="submit"
            form="sign-in-form"
            isLoading={isLoading}
            disabled={isLoading}
          >
            <Send className="h-4 w-4" />
            <span>Register</span>
          </Button>
        </DialogFooter>

        <div>
          {submitted && (
            <p className="text-sm text-green-600">
              Check your email for a link to confirm your subscription.
            </p>
          )}

          <span className="text-xs text-gray-500 dark:text-gray-400 leading-none">
            You can unsubscribe at any time.
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SignIn
