import dayjs from "dayjs"

/**
 * @param timestamp1 ISO string
 * @param timestamp2 ISO string
 * @returns Difference in milliseconds
 */
export const diffBetweenTimestamps = (
  timestamp1: string,
  timestamp2: string
): number => {
  // Of course this isn't exactly a complicated function. It's put into this file just to demonstrate
  // the use of library functions that may be reused across the application.
  const date1 = dayjs(timestamp1)
  const date2 = dayjs(timestamp2)

  return date1.diff(date2)
}
