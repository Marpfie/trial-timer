import { Lap } from "./lap"

interface ILapsProps {
  removeLap: (index: number) => void
  laps: string[]
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
