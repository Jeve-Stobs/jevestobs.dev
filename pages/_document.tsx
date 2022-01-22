import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  DocumentContext,
  NextScript
} from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Jeve Stobs - Portfolio" />
          <meta property="og:title" content="Jeve Stobs" />
          <meta property="og:description" content="Jeve Stobs - Portfolio" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" className="summary" />
          <meta name="twitter:creator" className="@devstobs" />
          <meta name="twitter:title" className="Jeve Stobs" />
          <meta name="twitter:description" className="Jeve Stobs - Portfolio" />
          <link rel="preconnect" href="https://acoustic.to" />
          <link rel="preconnect" href="https://github.com" />
          <link rel="preconnect" href="https://twitter.com" />
          <link rel="dns-prefetch" href="https://acoustic.to" />
          <link rel="dns-prefetch" href="https://github.com" />
          <link rel="dns-prefetch" href="https://twitter.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600.700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
