import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* language=CSS */}
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
          font-size: 10px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .container {
          max-width: 1440px;
          margin: 0 auto;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
