import { twclsx } from '@/utils'

import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const LayoutMain = (): JSX.Element => {
  return (
    <>
      <main className={twclsx('layout')}>
        <ToastContainer />
        <Outlet />
      </main>
    </>
  )
}

export default LayoutMain
