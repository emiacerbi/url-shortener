import Head from 'next/head'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import AdvancedStatistics from '../components/AdvancedStatistics'
import BoostLinks from '../components/BoostLinks'
import Footer from '../components/Footer'
import Shortener from '../components/Shortener'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-neutral-100 font-primary text-body">
        <Header />
        <MainSection />
        <Shortener />
        <AdvancedStatistics />
        <BoostLinks />
        <Footer />
      </div>
    </>
  )
}
