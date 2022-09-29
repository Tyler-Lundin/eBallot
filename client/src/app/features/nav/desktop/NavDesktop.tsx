import styled from 'styled-components'
import NavMenuDesktop from './NavMenuDesktop'

const NavDesktop = () => {
  return (
    <CONTAINER id='nav-container'>
      <NavMenuDesktop />
    </CONTAINER>
  )
}

export default NavDesktop

const CONTAINER = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
`
