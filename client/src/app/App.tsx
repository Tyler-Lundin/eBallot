import styled from 'styled-components'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  const router = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/dash/',
      element: <Dashboard />,
    },
  ])
  return <APP>{router}</APP>
}

export default App

const APP = styled.div``
