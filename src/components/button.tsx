import { PropsWithChildren } from "react"

interface IButtonProps extends PropsWithChildren {
  onClick?: () => void
}

export const Button = (props: IButtonProps) => {
  const { onClick, children } = props

  return (
    <button className="font-bold text-xl" onClick={onClick}>
      {children}
    </button>
  )
}
