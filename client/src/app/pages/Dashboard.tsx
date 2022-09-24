import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../features/nav/Nav'
import useDashboard from '../hooks/useDashboard'

const Dashboard = () => {
  useDashboard()

  return (
    <DASHBOARD>
      <Nav />
      <Outlet />
    </DASHBOARD>
  )
}

export default Dashboard

const DASHBOARD = styled.div``
