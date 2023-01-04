import Head from 'next/head'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import AdvancedStatistics from '../components/AdvancedStatistics'
import BoostLinks from '../components/BoostLinks'
import Footer from '../components/Footer'
import Shortener from '../components/Shortener'
import CreatedLinks from '../components/CreatedLinks'
import { PrismaClient } from '@prisma/client'
import { Link } from '../types'

export async function getServerSideProps() {
  const prisma = new PrismaClient()
  const links = await prisma.link.findMany()

  prisma.$disconnect()

  return {
    props: { links },
  }
}

export default function Home({ links }: { links: Link[] }) {
  console.log(links)
  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <meta
          name="description"
          content="URL Shortener for practicing purposes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen font-primary text-body">
        <Header />
        <MainSection />
        <Shortener />
        <CreatedLinks links={links} />
        <AdvancedStatistics />
        <BoostLinks />
        <Footer />
      </div>
    </>
  )
}
