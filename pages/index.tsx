import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Credit Card Churner Australia &#8212; Compare Welcome Point Bonuses &
          Offers
        </title>
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-center gap-4 p-24 ${inter.className}`}
      >
        <h1 className="text-6xl font-extrabold">
          Credit Card Churner Australia
        </h1>
        <h2 className="text-3xl font-semibold">
          Compare Welcome Point Bonuses & Offers
        </h2>
        <p className="text-2xl mt-8">Coming Soon...</p>
      </main>
    </>
  )
}

export default Home
