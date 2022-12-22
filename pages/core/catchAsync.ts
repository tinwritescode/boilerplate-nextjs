import { NextApiRequest, NextApiResponse } from 'next'

export const catchAsync = (
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await fn(req, res)
    } catch (error) {
      res.status(500).json({ name: 'Error zzz' })
    }
  }
}
