import { useContext } from 'react'
import { isAuthContext } from '../Contexts/IsAuthContext'

export const useAuth = () => {
  const isAuth = useContext(isAuthContext)

  const handleLogin = (email, password) => {
    if (email === 'DashStack@gmail.com' && password === '@DashStack') {
      isAuth.authHandler()
      localStorage.setItem('isAuth', true)
      return true
    }
    return false
  }

  return { handleLogin }
}
