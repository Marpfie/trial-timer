import dayjs from "dayjs"
import { useMemo } from "react"

interface ITimerDisplayProps {
  elapsedTime: number
}

export const TimerDisplay = (props: ITimerDisplayProps) => {
  const { elapsedTime } = props

  const formattedTime = useMemo(() => {
    const duration = dayjs.duration(elapsedTime)

    if (duration.hours()) {
      //TODO Check requirements for hour display
      // This depends on the requirements. The `MM:ss` format has been defined,
      // but not what should happen with the edge case of reaching an hour or more
      return duration.format("HH:MM:ss")
    }

    return duration.format("MM:ss")
  }, [elapsedTime])

  return <div className="flex justify-center text-9xl m-6">{formattedTime}</div>
}
