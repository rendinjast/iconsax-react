import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components'
import { IconContainer } from '../Containers/IconContainer'

const Home: NextPage = () => {
  return (
    <div className="font-sans text-gray-50">
      <Head>
        <title>IconaMoon</title>
        <meta name="description" content="awesome icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <IconContainer />
    </div>
  )
}

export default Home
