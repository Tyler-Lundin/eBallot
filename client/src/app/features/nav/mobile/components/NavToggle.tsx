import styled from 'styled-components'
import useNavToggle from '../../hooks/useNavToggle'

const NavToggle = () => {
  const { openNav } = useNavToggle()
  return (
    <TOGGLE_CONTAINER onClick={openNav}>
      <LINE className='line-a' />
      <LINE className='line-b' />
      <LINE className='line-c' />
    </TOGGLE_CONTAINER>
  )
}

export default NavToggle

const W = 40
const H = 6

const LINE = styled.div`
  width: ${W}px;
  height: ${H}px;
  background-color: white;
  margin: 0.25rem 0;
  transition: 250ms;
  border-radius: 10px;
`

const TOGGLE_CONTAINER = styled.div`
  position: relative;
  top: 10px;
  right: 0;
  padding: 10px;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  transition: 250ms;
  border: 3px solid transparent;
  border-radius: 30px;
  :hover > .line-a {
    border-radius: 0 10px 10px 0;
    height: 6px;
    width: ${W / 1.3}px;
    transform: rotate(-45deg) translateY(3px);
  }
  :hover > .line-b {
    width: ${W / 2}px;
    transform: translateX(100%);
  }
  :hover > .line-c {
    border-radius: 0 10px 10px 0;
    height: 6px;
    width: ${W / 1.3}px;
    transform: rotate(45deg) translateY(-3px);
  }
  :hover {
    background-color: black;
    border-radius: 30px 0 0 30px;
    border-left: 3px solid lightcoral;
    border-bottom: 3px solid lightcoral;
    border-top: 3px solid lightcoral;
    right: 20px;
    width: 150%;
  }
`
