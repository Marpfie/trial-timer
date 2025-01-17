import { useCallback, useEffect, useRef, useState } from "react"
import dayjs from "dayjs"

import { Button } from "../../components/button"
import { diffBetweenTimestamps } from "../../lib/utils"

import { TimerDisplay } from "./components/timerDisplay"

export const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0) // Elapsed time in milliseconds
  const [timestamp, setTimestamp] = useState("") // Timestamp of timer start/unpause
  const [timerActive, setTimerActive] = useState(false)

  const interval = useRef<number>(undefined)

  const addElapsedTime = useCallback(() => {
    // Adds elapsed time since last timestamp to the elapsedTime counter
    setElapsedTime(
      elapsedTime + diffBetweenTimestamps(dayjs().toISOString(), timestamp)
    )
  }, [elapsedTime, timestamp])

  useEffect(() => {
    if (timerActive) {
      interval.current = setInterval(() => {
        // Updates the elapsed time every 100 milliseconds.
        // We do this instead of just a 1 second interval so the timer remains accurate after pausing
        addElapsedTime()
        setTimestamp(dayjs().toISOString())
      }, 100)
    }

    return () => clearInterval(interval.current)
  }, [addElapsedTime, elapsedTime, timerActive, timestamp])

  const startTimer = () => {
    setTimestamp(dayjs().toISOString())
    setTimerActive(true)
  }

  const stopTimer = () => {
    setTimerActive(false)
    addElapsedTime()
  }

  const toggleTimer = () => (timerActive ? stopTimer() : startTimer())

  const resetTimer = () => {
    setTimerActive(false)
    setElapsedTime(0)
  }

  return (
    <>
      <h1 className="flex justify-center text-5xl m-6">Trial Timer</h1>
      <h1>{timestamp}</h1>
      <h1>{elapsedTime}</h1>
      <TimerDisplay elapsedTime={elapsedTime} />
      <div className="grid grid-cols-3 gap-3">
        <Button onClick={toggleTimer}>{timerActive ? "Stop" : "Start"}</Button>
        <Button onClick={resetTimer}>Reset</Button>
        <Button>Lap - Todo :)</Button>
      </div>
    </>
  )
}
