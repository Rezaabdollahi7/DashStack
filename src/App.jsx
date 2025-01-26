import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import routes from './routes'

export default function App() {
  return (
    <main className='overflow-x-hidden bg-light-main-bg'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </main>
  )
}
