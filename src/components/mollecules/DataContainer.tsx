import { useFilterState } from '@/hooks/useFilterState'

import { Container } from '../atoms'
import DataDisplay from './DataDisplay'
import Filter from './Filter'

import { useEffect, useState } from 'react'

type DataItem = {
  status: string
  order: string
  establishment: string
  adapter: string
  updateDateTime: string
}

type Data = DataItem[]

const DataContainer = () => {
  const { filter, setFilter, handleFilter } = useFilterState()
  const [data, setData] = useState<Data>()
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    handleFilter().then((filteredData) => {
      console.log(filteredData)
      setData(filteredData)
    })
  }, [])

  return (
    <>
      <Container>
        <Filter
          setFilter={setFilter}
          filter={filter}
          onFilter={() => {
            handleFilter().then(setData)
            setIsFiltered(true)
          }}
        />
      </Container>
      {isFiltered && (
        <Container>
          <DataDisplay data={data} />
        </Container>
      )}
    </>
  )
}

export default DataContainer
