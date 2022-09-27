import styled from 'styled-components'
import useNavMenu from '../../hooks/useNavMenu'
import NavMenuLinks from './NavMenuLinks'

const NavMenu = () => {
  const { isOpen, closeNav, links } = useNavMenu()

  return (
    <>
      {isOpen && <BACKGROUND onClick={closeNav} />}
      <CONTAINER id='nav-menu-container' isOpen={isOpen}>
        <HEADER>
          <h1>eBallot Menu</h1>
        </HEADER>
        <NavMenuLinks links={links} closeNav={closeNav} />
      </CONTAINER>
    </>
  )
}

export default NavMenu

const BACKGROUND = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, 0.7);
  backdrop-filter: blur(3px);
  animation: fadeIn 500ms ease-in-out forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const CONTAINER = styled.nav<{ isOpen: boolean }>`
  isolation: isolate;
  width: 340px;
  height: 100vh;
  background-color: rgb(20, 20, 20); // TODO: change to theme color
  position: fixed;
  transition: 250ms;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  border-left: 1px solid black;
  @media (max-width: 400px) {
    width: 100vw;
  }
`

const HEADER = styled.div`
  height: 100px;
  h1 {
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin: 0;
    padding: 0rem 2rem;
    line-height: 100px;
    color: lightcoral;
  }
`
