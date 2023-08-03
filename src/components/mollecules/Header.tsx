import { useTheme } from '@/hooks'
import { twclsx } from '@/utils'

import Button from '../atoms/Button'
import CustomTitle from '../atoms/GradientTitle'

import { HiMoon, HiSun } from 'react-icons/hi'

export type HeaderProps = {
  title?: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const { theme, toggleTheme } = useTheme()
  const className = twclsx('flex justify-between items-center px-2', 'h-20 w-screen sticky top-0 left-0 bg-emerald-6')

  return (
    <header className={className}>
      <CustomTitle>{title}</CustomTitle>
      <Button onClick={toggleTheme} className='p-0 h-8 w-8'>
        {theme === 'dark' ? <HiSun size={32} /> : <HiMoon size={32} />}
      </Button>
    </header>
  )
}

export default Header
