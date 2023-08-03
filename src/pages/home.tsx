import { UnderlineLink } from '@/components'
import DataContainer from '@/components/mollecules/DataContainer'

import { twclsx } from '@/utils'

const Home: React.FunctionComponent = () => {
  return (
    <section className={twclsx('min-w-full flex flex-col items-center justify-center gap-4 my-5')}>
      <h3 className='text-center'>Infocal Technologies | Consultoria em TI e Software House</h3>

      <DataContainer />

      <UnderlineLink to='/404'>See 404</UnderlineLink>
    </section>
  )
}

export default Home
