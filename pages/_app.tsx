/*
 * @Author: atwlee
 * @Date: 2023-09-13 15:01:02
 * @LastEditors: atwlee
 * @LastEditTime: 2023-09-28 14:04:13
 * @Description: n运行时顶层文件
 * @FilePath: /nextjs-blog/pages/_app.tsx
 */
import type { AppProps } from "next/app";

import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
