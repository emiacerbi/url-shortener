import { PrismaClient } from '@prisma/client'

type Props = {
  params: {
    shortId: string
  }
}

export default function ShortIdPage() {
  return <div>ShortID Redirect URL</div>
}

export async function getServerSideProps({ params }: Props) {
  const prisma = new PrismaClient()
  const { shortId } = params

  const data = await prisma.link.findUnique({
    where: { shortUrl: shortId },
  })

  prisma.$disconnect()

  if (!data) {
    return {
      redirect: {
        destination: '/',
      },
      props: { message: `That page doesn't exist` },
    }
  }

  return {
    redirect: {
      destination: data.url,
      permantent: false,
      basePath: false,
    },
  }
}
