import { Container, Subtitle } from '../atoms'
import { Text } from '../atoms'
import DataCard from './DataCard'

import { FunctionComponent } from 'react'

type DataItem = {
  status: string
  order: string
  establishment: string
  adapter: string
  updateDateTime: string
}

type Data = DataItem[]

interface DataDisplayProps {
  data: Data | undefined
}

const DataDisplay: FunctionComponent<DataDisplayProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <Text>No data to display</Text>
  }

  return (
    <Container>
      <Subtitle text='Dados Filtrados' />
      {data.map((item: DataItem, index: number) => (
        <DataCard key={index} item={item} />
      ))}
    </Container>
  )
}

export default DataDisplay
