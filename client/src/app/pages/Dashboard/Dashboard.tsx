import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import useDashboard from '../hooks/useDashboard'

const Dashboard = () => {
  useDashboard()
  return (
    <DASHBOARD>
      <Outlet />
    </DASHBOARD>
  )
}

export default Dashboard

const DASHBOARD = styled.div<{ theme: string }>`
  width: 100vw;
  height: 100vh;
  background-color: rgb(25, 25, 25);
`
