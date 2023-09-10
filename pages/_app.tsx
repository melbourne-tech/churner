import { DefaultSeo, DefaultSeoProps } from 'next-seo'
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
  const getLayout = Component.getLayout ?? identity

  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      {getLayout(<Component {...pageProps} />)}{' '}
    </>
  )
}

export default App
