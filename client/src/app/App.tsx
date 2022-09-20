import styled from 'styled-components'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const router = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ])
  return <APP>{router}</APP>
}

export default App

const APP = styled.div``
