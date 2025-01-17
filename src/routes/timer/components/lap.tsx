interface ITimerDisplayProps {
  formattedTime: string
  index: number
  onClick: (index: number) => void
}

export const Lap = (props: ITimerDisplayProps) => {
  const { formattedTime, onClick, index } = props

  //TODO Add a proper button/icon for removal functionality

  return (
    <div onClick={() => onClick(index)} className="text-2xl m-2 cursor-pointer">
      <span>#{index + 1} </span>
      {formattedTime}
    </div>
  )
}
