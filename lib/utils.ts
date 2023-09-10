import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function progressColorPair(number: number): [string, string] {
  if (number < 0.25) {
    // red
    return ['#dc2626', '#b91c1c']
  } else if (number < 0.5) {
    // orange
    return ['#f97316', '#c2410c']
  } else if (number < 0.75) {
    // yellow
    return ['#facc15', '#eab308']
  } else {
    // green
    return ['#22c55e', '#16a34a']
  }
}

const AUDollar = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0,
})

export function formatAUDollars(number: number) {
  return AUDollar.format(number)
}
