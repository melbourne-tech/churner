import * as ProgressPrimitive from '@radix-ui/react-progress'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn, progressColorPair } from '~/lib/utils'

const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const [backgroundColor] = progressColorPair((value ?? 0) / 100)

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-all "
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor,
        }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export default Progress
