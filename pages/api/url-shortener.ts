import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body

  const shortUrl = Math.random().toString(36).slice(2, 6)
  console.log(url, shortUrl)
  res.status(200).send({ url, shortUrl })
}
