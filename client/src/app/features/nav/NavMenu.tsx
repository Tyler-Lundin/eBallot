import styled from 'styled-components'
import useNavMenu from './hooks/useNavMenu'

const NavMenu = () => {
  useNavMenu()

  return <CONTAINER id='nav-menu-container'></CONTAINER>
}

export default NavMenu

const CONTAINER = styled.div``
