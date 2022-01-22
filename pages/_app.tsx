import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Jeve Stobs - Portfolio</title>
        <link rel="shortcut icon" href="/static/media/jevestobs.png" />
      </Head>
      <Component {...pageProps} />
      {/* language=CSS */}
      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .container {
          max-width: 1440px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

export default MyApp
