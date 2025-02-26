import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import routes from './routes'
import Sidebar from './components/common/Sidebar'
import { StarredProvider } from './pages/Inbox/ContextApiInbox'

export default function App() {
  return (
    <main className='bg-light-main-bg overflow-x-hidden'>
      <StarredProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='grid grid-cols-12'>
            <div className='sidebar-wrapper hidden lg:col-span-2 lg:block'>
              <Sidebar />
            </div>

            <div className='route-wrapper col-span-12 lg:col-span-10'>
              <Navbar />
              <div className='px-6'>
                <Routes>
                  {routes.map((route, index) => {
                    return route.children ? (
                      <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                      >
                        {route.children.map((childRoute, i) => (
                          <Route
                            key={i}
                            path={childRoute.path}
                            element={childRoute.element}
                          />
                        ))}
                      </Route>
                    ) : (
                      <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                      />
                    )
                  })}
                </Routes>
              </div>
            </div>
          </div>
        </Suspense>
      </StarredProvider>
    </main>
  )
}
