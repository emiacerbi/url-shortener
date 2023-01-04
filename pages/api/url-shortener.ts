import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()
  const { url } = req.body

  const shortUrl = Math.random().toString(36).slice(2, 6)
  try {
    const data = await prisma.link.create({
      data: { url, shortUrl },
    })

    prisma.$disconnect()

    return res.status(200).send(data)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
