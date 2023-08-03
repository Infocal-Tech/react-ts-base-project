import { Filter } from '@/types/Filter'

import { getFilteredData } from './getFilteredData'

import { useState } from 'react'

export function useFilterState() {
  const [filter, setFilter] = useState<Filter>({
    establishment: '',
    startDate: '',
    endDate: '',
    tag: '',
    orderNumber: '',
    adapter: ''
  })

  const handleFilter = () => {
    return getFilteredData(filter)
  }

  return { filter, setFilter, handleFilter }
}
