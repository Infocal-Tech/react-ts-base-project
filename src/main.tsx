import '@/styles/tailwind.css'

import App from '@/app'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const element = document.getElementById('__app') as HTMLDivElement

element.style.height = '100vh'
element.style.overflow = 'auto'

const root = createRoot(element)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
