import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { links } from '../../../../types'

const NavMenuLinksDesktop = ({ links, closeNav }: { links: links; closeNav: () => void }) => {
  return (
    <LINKS id='nav-menu-links'>
      {links.map((link, index) => (
        <LINK_CONTAINER key={index} id={`link_${link.label.toLowerCase()}`} onClick={closeNav}>
          <LINK to={link.to} children={link.label} />
        </LINK_CONTAINER>
      ))}
    </LINKS>
  )
}

export default NavMenuLinksDesktop

const LINKS = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
`

const LINK = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
  text-align: center;
  transition: 100ms;
  text-transform: uppercase;
`

const LINK_CONTAINER = styled.li`
  box-sizing: border-box;
  display: grid;
  place-items: center;
  /* box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1); */
  :hover {
    background-color: black;
  }
  :hover ${LINK} {
    color: white;
  }
`
