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
/**
 *
 * @param elapsedTime in milliseconds
 * @returns Formatted string in `HH:MM:ss` / `MM:ss` format
 */
export const formatDuration = (elapsedTime: number) => {
  const duration = dayjs.duration(elapsedTime)

  if (duration.hours()) {
    //TODO Check requirements for hour display
    // This depends on the requirements. The `MM:ss` format has been defined,
    // but not what should happen with the edge case of reaching an hour or more
    return duration.format("HH:MM:ss")
  }

  return duration.format("MM:ss")
}
