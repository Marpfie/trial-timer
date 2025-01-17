import { useMemo } from "react"
import { formatDuration } from "../../../lib/utils"

interface ITimerDisplayProps {
  elapsedTime: number
}

export const TimerDisplay = (props: ITimerDisplayProps) => {
  const { elapsedTime } = props

  const formattedTime = useMemo(() => {
    return formatDuration(elapsedTime)
  }, [elapsedTime])

  return <div className="flex justify-center text-9xl m-6">{formattedTime}</div>
}
