import { useCallback, useEffect, useRef, useState } from "react"
import dayjs from "dayjs"

import { diffBetweenTimestamps, formatDuration } from "../../lib/utils"

import { TimerDisplay } from "./components/timerDisplay"
import { TimerControls } from "./components/controls"
import { Laps } from "./components/laps"

export const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0) // Elapsed time in milliseconds
  const [timestamp, setTimestamp] = useState("") // Timestamp of timer start/unpause
  const [timerActive, setTimerActive] = useState(false)
  const [laps, setLaps] = useState<Array<string>>([])

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

  // No reason to memoize these functions
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
    setLaps([])
  }

  const addLap = () => {
    // This could be slightly inaccurate as is (within 100 ms, the interval timer) depending on when the button is clicked.
    // To fix that this step would need to update elapsed Time and set a new timestamp - I won't go into those details for demo purposes here
    // Creates a new array so removeLap stays up to date
    setLaps([...laps, formatDuration(elapsedTime)])
  }

  const removeLap = useCallback(
    (index: number) => {
      // Don't mutate the original array
      const lapsCopy = [...laps]
      lapsCopy.splice(index, 1)
      setLaps(lapsCopy)
    },
    [laps]
  )

  return (
    <>
      <h1 className="flex justify-center text-5xl m-6">Trial Timer</h1>
      <TimerDisplay elapsedTime={elapsedTime} />
      <TimerControls
        addLap={addLap}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        elapsedTime={elapsedTime}
        timerActive={timerActive}
      />
      <Laps laps={laps} removeLap={removeLap} />
    </>
  )
}
