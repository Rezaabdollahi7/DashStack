import { Suspense } from 'react'
import { StarredProvider } from './pages/Inbox/ContextApiInbox'
import { isAuthContext } from './Contexts/IsAuthContext'
import SignIn from './pages/SignIn/SignIn'
import DashboardLayout from './pages/Home/DashboardLayout'
import { useState } from 'react'
export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  function authHandler() {
    setIsAuth(true)
  }

  return (
    <main className='overflow-x-hidden'>
      <StarredProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <isAuthContext.Provider value={{ isAuth, authHandler }}>
            {!isAuth ? <SignIn /> : <DashboardLayout />}
          </isAuthContext.Provider>
        </Suspense>
      </StarredProvider>
    </main>
  )
}
