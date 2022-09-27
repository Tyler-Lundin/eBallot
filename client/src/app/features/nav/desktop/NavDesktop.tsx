import styled from 'styled-components'
import NavMenu from './NavMenuDesktop'

const NavDesktop = () => {
  return (
    <CONTAINER id='nav-container'>
      <NavMenu />
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
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
`
