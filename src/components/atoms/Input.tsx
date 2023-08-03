import { twclsx } from '@/utils'

import { createElement } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FunctionComponent<InputProps> = ({ className: c, ...props }) => {
  const className = twclsx('border rounded p-2 flex-grow min-w-4/5 w-full h-10', c)

  return createElement('input', { ...props, className })
}

export default Input
