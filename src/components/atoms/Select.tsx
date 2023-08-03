import { twclsx } from '@/utils'

import { createElement } from 'react'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

const Select: React.FunctionComponent<SelectProps> = ({ className: c, ...props }) => {
  const className = twclsx('border rounded p-2 flex-grow min-w-4/5 w-full h-10', c)

  return createElement('select', { ...props, className })
}

export default Select
