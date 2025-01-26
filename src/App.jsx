import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import routes from './routes'
import Sidebar from './components/common/Sidebar'
export default function App() {
  return (
    <main className='bg-light-main-bg overflow-x-hidden'>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='grid grid-cols-12'>
          <div className='sidebar-wrapper col-span-2'>
            <Sidebar />
          </div>

          <div className='route-wrapper col-span-10'>
            <Navbar />
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
        </div>
      </Suspense>
    </main>
  )
}
