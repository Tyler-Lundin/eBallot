import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const SUBTITLES = ['The future of voting', 'The future of democracy', 'The future of elections']

const Hero = () => {
  const navTo = useNavigate()
  return (
    <HERO onClick={() => navTo('/auth/register')}>
      <HERO_TEXT>
        <HERO_TITLE>eBallot</HERO_TITLE>
        <HERO_SUBTITLE>
          <Typewriter
            options={{
              strings: SUBTITLES,
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </HERO_SUBTITLE>
      </HERO_TEXT>
      <HERO_BUTTON> GET STARTED </HERO_BUTTON>
    </HERO>
  )
}
export default Hero

const HERO_BUTTON = styled.button`
  background-color: lightgreen;
  border: none;
  padding: 1rem 2rem;
  margin: 2rem;
  border-radius: 20px 5px 20px 5px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: 100ms;
  z-index: 1;
  ::before {
    content: '';
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightgreen;
    transition: 400ms;
    border-radius: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: -1;
  }
`

const HERO = styled.div`
  position: relative;
  width: 100vw;
  max-width: 900px;
  height: fit-content;
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
  transition: 500ms;
  color: white;
  overflow: hidden;
  :hover {
    background-color: lightgreen;
    color: black;
    cursor: pointer;
  }
  :hover ${HERO_BUTTON}::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    cursor: pointer;
  }
`

const HERO_TEXT = styled.div`
  position: relative;
  z-index: 3;
`

const HERO_TITLE = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: inherit;
`

const HERO_SUBTITLE = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  color: inherit;
`
