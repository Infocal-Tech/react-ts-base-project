import { useTheme } from '@/hooks'
import { twclsx } from '@/utils'

import { createElement } from 'react'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

const Container: React.FunctionComponent<ContainerProps> = ({ className: c, ...props }) => {
  const { theme } = useTheme()

  const className = twclsx('p-4 rounded-md min-w-4/5 sm:w-full', theme == 'dark' ? 'bg-main-1' : 'bg-main-8', c)

  return createElement('div', { ...props, className })
}

export default Container
