import { useTheme } from '@/hooks'
import { Filter as FilterType } from '@/types/Filter'

import { FormButton, Input, Select } from '../atoms'

import React from 'react'
import { toast } from 'react-toastify'

type SetFilterState = (value: (currentState: FilterType) => FilterType) => void

interface FilterProps {
  filter: {
    establishment: string
    startDate: string
    endDate: string
    tag: string
    orderNumber: string
    adapter: string
  }
  setFilter: SetFilterState
  onFilter: () => void
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter, onFilter }) => {
  const [error, setError] = React.useState(false)

  const { theme } = useTheme()

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (!filter.orderNumber) {
      setError(true)
      toast.error('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    setError(false)
    onFilter()
  }

  const handleChange =
    (name: keyof FilterProps['filter']) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFilter((currentFilter) => ({ ...currentFilter, [name]: e.target.value }))

      console.log(filter)
    }

  const currentDate = new Date()
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(
    currentDate.getDate()
  ).padStart(2, '0')}`

  return (
    <div
      className={
        theme == 'dark' ? 'bg-main-1 p-4 rounded-md w-4/5 sm:w-full' : 'bg-main-8 p-4 rounded-md min-w-4/5 sm:w-full'
      }
    >
      <div className='flex flex-row gap-4 mb-4'>
        <Input
          type='text'
          placeholder='Estabelecimento'
          value={filter.establishment}
          onChange={handleChange('establishment')}
        />
        <Input type='text' placeholder='Tag' value={filter.tag} onChange={handleChange('tag')} />
      </div>
      <div className='flex flex-row gap-4 mb-4'>
        <Input
          type='text'
          placeholder='Número do Pedido'
          value={filter.orderNumber}
          onChange={handleChange('orderNumber')}
          className={error ? 'error' : ''}
          required
        />
        <Select value={filter.adapter} onChange={handleChange('adapter')}>
          <option value=''>Selecione um adapter</option>
          <option value='adapter1'>Adapter 1</option>
          <option value='adapter2'>Adapter 2</option>
          <option value='adapter3'>Adapter 3</option>
        </Select>
      </div>
      <div className='flex flex-row gap-4 mb-4'>
        <div className='flex flex-col w-4/5'>
          <label htmlFor='start-date' className={theme == 'dark' ? 'mb-2 text-main-8' : 'mb-2 text-main-1'}>
            Data de Início
          </label>
          <Input
            id='start-date'
            type='date'
            max={filter.endDate}
            value={filter.startDate}
            onChange={handleChange('startDate')}
          />
        </div>
        <div className='flex flex-col w-4/5'>
          <label htmlFor='end-date' className={theme == 'dark' ? 'mb-2 text-main-8' : 'mb-2 text-main-1'}>
            Data de Fim
          </label>
          <Input
            id='end-date'
            type='date'
            max={formattedDate}
            min={filter.startDate}
            value={filter.endDate}
            onChange={handleChange('endDate')}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <FormButton onClick={handleClick}>Filtrar</FormButton>
      </div>
    </div>
  )
}

export default Filter
