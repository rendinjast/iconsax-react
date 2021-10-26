import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components'
import { IconContainer } from '../Containers/IconContainer'

const Home: NextPage = () => {
  return (
    <div className="font-sans text-gray-50">
      <Head>
        <title>Iconsax React</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F0F0F" />

        <meta
          name="description"
          content="1000 pixel perfect icons in 6 different styles for React and React Native"
        />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta property="og:site_name" content="Iconsax React" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Iconsax React" />
        <meta property="og:locale" content="en" />
        <meta
          property="og:url"
          content="https://rendinjast.github.io/iconsax-react"
        />
      </Head>
      <Header />
      <IconContainer />
    </div>
  )
}

export default Home
