import { AppPropsWithLayout } from '~/lib/types'
import { identity } from '~/lib/void'

import 'react-circular-progressbar/dist/styles.css'
import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? identity

  return getLayout(<Component {...pageProps} />)
}

export default App
