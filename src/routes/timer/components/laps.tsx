import { Lap } from "./lap"

interface ILapsProps {
  laps: string[]
  removeLap: (index: number) => void
}

export const Laps = (props: ILapsProps) => {
  const { laps, removeLap } = props

  return laps.map((lap, i) => (
    <Lap
      key={`lap-${lap}-${i}`}
      onClick={removeLap}
      formattedTime={lap}
      index={i}
    />
  ))
}
