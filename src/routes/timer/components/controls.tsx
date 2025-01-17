import {
  faArrowRotateLeft,
  faFlagCheckered,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"

import classNames from "classnames"

import { Button } from "../../../components/button"

interface ITimerControlsProps {
  addLap: () => void
  elapsedTime: number
  resetTimer: () => void
  timerActive: boolean
  toggleTimer: () => void
}

export const TimerControls = (props: ITimerControlsProps) => {
  const { addLap, elapsedTime, resetTimer, timerActive, toggleTimer } = props

  return (
    <div className="grid grid-cols-3 gap-3">
      <Button
        onClick={resetTimer}
        className="bg-orange-400"
        disabled={!elapsedTime}
        icon={faArrowRotateLeft}
        text="Reset"
      />
      <Button
        onClick={toggleTimer}
        className={classNames({
          "bg-red-500": timerActive,
          "bg-green-400": !timerActive,
          "text-black": !timerActive,
        })}
        icon={timerActive ? faPause : faPlay}
        text={timerActive ? "Pause" : "Start"}
      />
      <Button
        className="bg-blue-500"
        onClick={addLap}
        icon={faFlagCheckered}
        text="Lap"
      />
    </div>
  )
}
