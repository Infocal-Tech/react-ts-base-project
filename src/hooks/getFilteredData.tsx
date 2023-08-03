import { Filter } from '@/types/Filter'

import axios, { AxiosResponse } from 'axios'

const adapterUrls: { [key: string]: string } = {
  adapter1: `https://apihti.outraCoisa.getnet.com.br/api/v1`,
  adapter2: `https://onboarding.getnet.com.br/api/v1`
}

export async function getFilteredData(filter: Filter) {
  // Se um adaptador for selecionado
  if (filter.adapter !== '') {
    // Faça uma requisição de API para o adaptador selecionado
    const response = await axios.get(`${adapterUrls[filter.adapter]}/${filter.orderNumber}`)
    return response.data
  }
  // Se nenhum adaptador for selecionado
  else {
    // Cria array de promises para cada requisição
    const promises = Object.entries(adapterUrls).map(([adapter, url]) => {
      console.log(`Adapter: ${adapter}, URL: ${url}`)

      return axios.get(`${url}${filter.orderNumber}`)
    })

    // Usa Promise.allSettled para resolver todas as promises
    const results = await Promise.allSettled(promises)

    // Filtra apenas as requisições bem-sucedidas e extrai os dados de cada resposta
    const data = results
      .filter((result) => result.status === 'fulfilled')
      .map((result) => (result as PromiseFulfilledResult<AxiosResponse>).value.data)

    return data
  }
}
