import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { EMPTY_ARR } from './void'

export type UrlStateParams = {
  [k: string]: string | string[] | undefined
}

export function useUrlState<T extends string = string>(
  key: string,
  defaultValue: T,
  validValues: T[] = EMPTY_ARR
) {
  const router = useRouter()

  const valueOrArr = router.query[key] ?? defaultValue
  let value = Array.isArray(valueOrArr) ? valueOrArr[0] : valueOrArr

  if (validValues.length > 0 && !validValues.includes(value as T)) {
    value = defaultValue
  }

  const setValue = useCallback(
    (updatedValue: T) => {
      router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [key]: updatedValue,
          },
        },
        undefined,
        { shallow: true, scroll: false }
      )
    },
    [key, router]
  )

  return [value as T, setValue] as const
}
