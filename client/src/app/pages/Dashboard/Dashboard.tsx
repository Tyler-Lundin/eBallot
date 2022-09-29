import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Friends from '../../features/friend/components/Friends'
import Welcome from '../../features/friend/components/WelcomeMessage'
import useDashboard from '../hooks/useDashboard'

const Dashboard = () => {
  useDashboard()
  return (
    <DASHBOARD>
      <Welcome />
      <Friends />
      {/* <Outlet /> */}
      {/* <FEED OF BALLOTS /> */}
    </DASHBOARD>
  )
}

export default Dashboard

const DASHBOARD = styled.div<{ theme: string }>`
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 20, 20);
  padding: 10px;
  padding-top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
