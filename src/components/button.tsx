import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsWithChildren } from "react"
import classnames from "classnames"

interface IButtonProps extends PropsWithChildren {
  onClick?: () => void
  className?: string
  disabled?: boolean
  icon?: IconDefinition
  text?: string
}

export const Button = (props: IButtonProps) => {
  const { children, className, disabled, icon, onClick, text } = props

  return (
    <button
      className={classnames(
        "font-bold text-2xl hover:opacity-75 p-3 px-5 transition-all",
        "rounded-lg border-2 border-transparent hover:border-slate-700",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text && <span className="ml-2">{text}</span>}
      {children}
    </button>
  )
}
