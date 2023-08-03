import { twclsx } from '@/utils'

import { ButtonHTMLAttributes, createElement } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FunctionComponent<ButtonProps> = ({ className: c, ...props }) => {
  const className = twclsx(
    'inline-flex items-center justify-center',
    'py-2.5 px-3.5 rounded-lg font-medium transition-all',
    'hover:ring',
    c
  )

  return createElement('button', { ...props, className })
}

export default Button
