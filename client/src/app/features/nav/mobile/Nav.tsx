import styled from 'styled-components'
import NavMenu from './components/NavMenu'
import NavToggle from './components/NavToggle'

const Nav = () => {
  return (
    <CONTAINER id='nav-container'>
      <NavToggle />
      <NavMenu />
    </CONTAINER>
  )
}

export default Nav

const CONTAINER = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
`
