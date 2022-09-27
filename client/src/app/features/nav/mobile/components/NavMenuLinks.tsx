import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { links } from '../../../../../types'

const NavMenuLinks = ({ links, closeNav }: { links: links; closeNav: () => void }) => {
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

export default NavMenuLinks

const LINKS = styled.ul`
  list-style: none;
`

const LINK = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  transition: 100ms;
  font-weight: 300;
`

const LINK_CONTAINER = styled.li`
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: 10ms;
  :hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  :hover > ${LINK} {
    transform: translateX(-10px);
  }
`
