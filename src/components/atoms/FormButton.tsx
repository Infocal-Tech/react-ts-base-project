import { twclsx } from '@/utils'

import { createElement } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const FormButton: React.FunctionComponent<ButtonProps> = ({ className: c, ...props }) => {
  const className = twclsx(
    'mt-4 bg-emerald-6 hover:bg-emerald-8 text-white font-bold py-2 px-4 rounded max-w-xs w-full',
    c
  )

  return createElement('button', { ...props, className })
}

export default FormButton
