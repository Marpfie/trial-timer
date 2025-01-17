import { useState } from "react"

export const TimerDisplay = () => {
  const [time] = useState(0)

  return <div className="flex justify-center text-9xl m-6">{time}</div>
}
