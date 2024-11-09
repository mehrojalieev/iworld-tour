import {  Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Loading from './utils/loading/Loading.tsx'
import { BrowserRouter } from 'react-router-dom'
import "./language/index.ts"
const App = lazy(() => import('./App.tsx'))

createRoot(document.getElementById('root')!).render(
  <>
  <BrowserRouter>
  <Suspense fallback={<Loading/>}>
    <App />
  </Suspense>
  </BrowserRouter>
  </>,
)
