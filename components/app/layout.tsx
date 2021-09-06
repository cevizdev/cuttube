import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const siteTitle = 'CutTube - Youtube Video Cutter and Downloader'

export default function Layout({ children }) {
  return (
    <main className="font-medium text-gray-700 bg-white">

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
