import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import useAuthentication from '../hooks/useAuthentication'

const Authentication = () => {
  useAuthentication()
  return (
    <AUTHENTICATION>
      <Outlet />
    </AUTHENTICATION>
  )
}

export default Authentication

const AUTHENTICATION = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgb(200, 200, 200);
`
