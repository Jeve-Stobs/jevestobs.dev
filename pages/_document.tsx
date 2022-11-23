import Document, {
  Html,
  Head,
  Main,
  DocumentContext,
  NextScript
} from 'next/document'
import { DefaultSeo } from 'next-seo'

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
          <link rel="shortcut icon" href="/static/media/favicon.png" />
          <link rel="preconnect" href="https://bred.jevestobs.dev" />
          <link rel="preconnect" href="https://github.com" />
          <link rel="preconnect" href="https://twitter.com" />
          <link rel="dns-prefetch" href="https://bred.jevestobs.dev" />
          <link rel="dns-prefetch" href="https://github.com" />
          <link rel="dns-prefetch" href="https://twitter.com" />
        </Head>
        <body>
          <DefaultSeo
            title="Jeve Stobs - Portfolio"
            description="Hi, I'm Sam 👋 16 y/o developer with a passion for building websites & blazing fast applications."
            openGraph={{
              type: 'website',
              locale: 'en_US',
              url: 'https://jevestobs.dev',
              description:
                "Hi, I'm Sam 👋 16 y/o developer with a passion for building websites & blazing fast applications.",
              site_name: 'Jeve Stobs'
            }}
            twitter={{
              handle: '@devstobs',
              site: '@jevestobs.dev',
              cardType: 'summary_large_image'
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
