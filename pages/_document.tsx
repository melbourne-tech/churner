import { Head, Html, Main, NextScript } from 'next/document'

const CustomDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://fav.farm/🧈" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default CustomDocument
