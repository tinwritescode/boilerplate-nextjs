// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { catchAsync } from '../core/catchAsync'

const helloSchema = z.object({
  name: z.string(),
})

// Must not be async
export default catchAsync(async (req, res) => {
  try {
    const { name } = helloSchema.parse(req?.body)

    res.status(200).json({ name: name })
  } catch (error) {
    res.status(400).json({ name: 'Error' })
  }
})
