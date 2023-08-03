import { Text } from '@/components/atoms'

import { useTheme } from '@/hooks'
import { twclsx } from '@/utils'

import React from 'react'

export type DataCardProps = {
  className?: string
  item: {
    status: string
    order: string
    establishment: string
    adapter: string
    updateDateTime: string
  }
}

const TITLES = {
  status: 'Status',
  order: 'Order',
  establishment: 'Estabelecimento',
  adapter: 'Adapter',
  updateDateTime: 'Data e hora da atualização'
}

const DataCard: React.FunctionComponent<DataCardProps> = ({ className: c, item, ...props }) => {
  const { theme } = useTheme()
  const className = twclsx('my-5', c)

  return (
    <div {...props} className={className}>
      {Object.entries(TITLES).map(([key, title]) => (
        <div key={key} className={theme === 'dark' ? 'text-main-8' : 'text-main-1'}>
          <Text>{title}:</Text> {item[key as keyof typeof item]}
        </div>
      ))}
    </div>
  )
}

export default DataCard
