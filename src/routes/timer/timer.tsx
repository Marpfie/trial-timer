import { Button } from "../../components/button"
import { TimerDisplay } from "./components/timerDisplay"

export const Timer = () => {
  return (
    <>
      <h1 className="flex justify-center text-5xl m-6">Trial Timer</h1>
      <TimerDisplay />
      <div className="grid grid-cols-3 gap-3">
        <Button>Start</Button>
        <Button>Reset</Button>
        <Button>Lap</Button>
      </div>
    </>
  )
}
