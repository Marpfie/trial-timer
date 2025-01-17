import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsWithChildren } from "react"
import classnames from "classnames"

interface IButtonProps extends PropsWithChildren {
  onClick?: () => void
  text?: string
  icon?: IconDefinition
  className?: string
  disabled?: boolean
}

export const Button = (props: IButtonProps) => {
  const { children, className, disabled, icon, onClick, text } = props

  return (
    <button
      className={classnames("font-bold text-xl", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text && <span className="ml-2">{text}</span>}
      {children}
    </button>
  )
}
