/*
 * @Author: atwlee
 * @Date: 2023-09-15 17:21:34
 * @LastEditors: atwlee
 * @LastEditTime: 2023-09-15 17:21:39
 * @Description: 
 * @FilePath: /nextjs-blog/pages/api/hello.js
 */
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }