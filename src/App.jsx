import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import routes from './routes'

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}
