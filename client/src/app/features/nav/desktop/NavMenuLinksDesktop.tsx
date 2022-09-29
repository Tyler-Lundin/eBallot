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
  color: white;
  width: 100%;
  text-align: center;
  transition: 100ms;
  text-transform: uppercase;
`

const LINK_CONTAINER = styled.li`
  box-sizing: border-box;
  display: grid;
  place-items: center;
  :hover {
    background-color: rgba(20, 20, 20, 0.1);
  }
  :hover ${LINK} {
    color: #7141be;
  }
`
