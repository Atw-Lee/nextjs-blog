/*
 * @Author: atwlee
 * @Date: 2023-09-15 17:21:34
 * @LastEditors: atwlee
 * @LastEditTime: 2023-09-28 14:18:22
 * @Description: api routes
 * @FilePath: /nextjs-blog/pages/api/hello.ts
 */
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello" });
}
