/*
 * @Author: atwlee
 * @Date: 2023-09-15 15:11:43
 * @LastEditors: atwlee
 * @LastEditTime: 2023-09-15 15:11:49
 * @Description: 
 * @FilePath: /nextjs-blog/components/date.js
 */
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
