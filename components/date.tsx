/*
 * @Author: atwlee
 * @Date: 2023-09-15 15:11:43
 * @LastEditors: atwlee
 * @LastEditTime: 2023-09-28 14:48:09
 * @Description:
 * @FilePath: /nextjs-blog/components/date.tsx
 */
import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
