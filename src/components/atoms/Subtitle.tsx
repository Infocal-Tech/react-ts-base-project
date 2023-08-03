import { useTheme } from '@/hooks'
import { twclsx } from '@/utils'

import { createElement } from 'react'

interface SubtitleProps {
  text: string
}

const Subtitle: React.FunctionComponent<SubtitleProps> = ({ text }) => {
  const { theme } = useTheme()

  const className = twclsx('font-bold text-lg', theme == 'dark' ? 'text-main-8' : 'text-main-1')

  return createElement('span', { className }, text)
}

export default Subtitle
