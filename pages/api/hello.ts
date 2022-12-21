// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const helloSchema = z.object({
  name: z.string(),
});

export const catchAsync = async (
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<any>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      fn(req, res);
    } catch (error) {
      res.status(500).json({ name: "Error" });
    }
  };
};

export default catchAsync(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name } = helloSchema.parse(req.body);

    res.status(200).json({ name: name });
  } catch (error) {
    res.status(400).json({ name: "Error" });
  }
});
