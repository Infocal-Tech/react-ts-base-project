import Header from '@/components/mollecules/Header'

import { useTheme } from '@/hooks'
import LayoutMain from '@/layouts'

import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages').then((m) => ({ default: m.HomePage })))
const NotFoundPage = lazy(() => import('@/pages').then((m) => ({ default: m.NotFoundPage })))

// you can add Header, footer anything else you might want to, or else leave it to be
const StravitalApp: React.FunctionComponent = () => {
  // useTheme shold always on top of app
  useTheme()
  return (
    <Suspense fallback={null}>
      <Header title={'Infocal Technologies | React Chassi'} />
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </Suspense>
  )
}

export default StravitalApp
