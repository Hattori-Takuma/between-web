import { getBetween } from '@/models/azopenai/azopenaiApplicationService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const add1 = req.body.add1;
    const add2 = req.body.add2;
    const data = await getBetween(add1, add2);
    res.json(data);
  } catch (error) {
    console.log('🚀 ~ file: hello.ts:13 ~ error:', error);
  }
}
