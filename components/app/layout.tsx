import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const siteTitle = 'CutTube - Free Youtube Video Cut and Downloader'

export default function Layout({ children }) {
  return (
    <main className="font-medium text-gray-700 bg-white">
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Free youtube video cut online download. Easy cut youtube video online free"
        />
        <meta
          property="og:image"
          content="/_next/image?url=%2Fimages%2Flogo.png&w=1200&q=75"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <div className="py-12 bg-gray-100 md:py-24">
        {children}
      </div>
      <Footer />
    </main>
  )
}
