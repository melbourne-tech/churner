import * as Fathom from 'fathom-client'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AppPropsWithLayout } from '~/lib/types'
import { identity } from '~/lib/void'

import 'react-circular-progressbar/dist/styles.css'
import '~/styles/globals.css'

const SITE_URL = 'https://www.churner.com.au'

const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: '%s | Credit Card Churner Australia',
  defaultTitle:
    'Credit Card Churner Australia — Compare Welcome Point Bonuses & Offers',
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    site_name: 'Credit Card Churner Australia',
    images: [],
  },
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter()

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_FATHOM_SITE_ID) {
      return
    }

    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ['www.churner.com.au'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getLayout = Component.getLayout ?? identity

  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      {getLayout(<Component {...pageProps} />)}{' '}
    </>
  )
}

export default App
