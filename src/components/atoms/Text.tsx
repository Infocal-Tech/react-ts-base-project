import { useTheme } from '@/hooks'
import { twclsx } from '@/utils'

import { ReactNode } from 'react'

export type TextProps = {
  className?: string
  children?: ReactNode
}

const Text: React.FunctionComponent<TextProps> = ({ className: c, children, ...props }) => {
  const { theme } = useTheme()
  const className = twclsx('text-base', theme == 'dark' ? 'text-main-8' : 'text-main-1', c)

  return (
    <span {...props} className={className}>
      {children}
    </span>
  )
}

export default Text
