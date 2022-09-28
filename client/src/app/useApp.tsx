import { useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Authentication from './pages/Authentication/Authentication'
import Register from './features/auth/components/Register'
import axios from 'axios'
import useCurrentWidth from './util/useCurrentWidth'
import { useEffect, useState } from 'react'
import Login from './features/auth/components/Login'
import { useAppDispatch, useAuthState } from './hooks'
import { getUser } from './api/user.api'

export const useApp = () => {
  axios.defaults.baseURL = 'http://localhost:3500/'
  axios.defaults.withCredentials = true
  const screenWidth = useCurrentWidth()
  const [isOnMobile, setIsOnMobile] = useState(false)
  const { authenticated } = useAuthState()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (authenticated) {
      dispatch(getUser())
    }
  }, [authenticated])

  useEffect(() => {
    if (screenWidth < 700) {
      setIsOnMobile(true)
    } else {
      setIsOnMobile(false)
    }
  }, [screenWidth])
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/auth',
      element: <Authentication />,
      children: [
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ])
  return {
    routes,
    isOnMobile,
  }
}
