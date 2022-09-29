import styled from 'styled-components'
import useNavMenu from '../hooks/useNavMenu'
import NavMenuLinksDesktop from './NavMenuLinksDesktop'

const NavMenuDesktop = () => {
  const { isOpen, closeNav, links } = useNavMenu()

  return (
    <CONTAINER id='nav-menu-container' isOpen={isOpen}>
      <HEADER>
        <h1>eBallot</h1>
      </HEADER>
      <NavMenuLinksDesktop links={links} closeNav={closeNav} />
    </CONTAINER>
  )
}

export default NavMenuDesktop

const CONTAINER = styled.nav<{ isOpen: boolean }>`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: min-content 1fr;
`

const HEADER = styled.div`
  width: fit-content;
  padding-right: 20px;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }
`
