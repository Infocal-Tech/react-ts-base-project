import { twclsx } from '@/utils'

export type CustomTitleProps = {
  className?: string
  children?: React.ReactNode
}

const CustomTitle: React.FunctionComponent<CustomTitleProps> = ({ className: c, ...props }) => {
  const className = twclsx(
    'bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-primary-5 to-secondary-5',
    c
  )

  return (
    <h1 {...props} className={className}>
      {props.children}
    </h1>
  )
}

export default CustomTitle
