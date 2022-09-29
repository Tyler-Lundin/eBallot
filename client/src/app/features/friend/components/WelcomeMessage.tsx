import styled, { css } from 'styled-components'
import { fadeIn, slideDown } from '../../../util/keyframes'
import useWelcomeMessage from '../hooks/useWelcomeMessage'
import HowAreYou from './HowAreYou'
import { GiPalm, GiMagicPalm } from 'react-icons/gi'

const WelcomeMessage = () => {
  const { welcomeMessage, isHidden, toggleHidden } = useWelcomeMessage()
  return (
    <WELCOME_MESSAGE $isHidden={isHidden} id='welcome-message-container'>
      {!isHidden && <MESSAGE id='welcome-message-text' children={welcomeMessage} />}
      {!isHidden && <HowAreYou />}

      <HIDE_WELCOME_MESSAGE id='toggle-welcome-message-size' onClick={toggleHidden}>
        {/* <GiPalm color={isHidden ? 'black' : 'white'} /> */}
        <GiMagicPalm color={isHidden ? 'black' : 'white'} />
      </HIDE_WELCOME_MESSAGE>
    </WELCOME_MESSAGE>
  )
}

export default WelcomeMessage

const WELCOME_MESSAGE = styled.div<{ $isHidden?: boolean }>`
  background-color: black;
  width: 100%;
  height: 100%;
  justify-self: right;
  max-height: 500px;
  max-width: 2000px;
  border-radius: 15px;
  display: grid;
  align-items: center;
  align-content: center;
  grid-gap: 20px;
  justify-items: center;
  position: relative;
  transition: 300ms;
  animation: ${slideDown} 2s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275),
    ${fadeIn} 3s forwards ease-in-out;
  ${({ $isHidden }) =>
    $isHidden &&
    css`
      max-height: 45px;
      max-width: 45px;
      overflow: hidden;
    `}
  >*:not(#toggle-welcome-message-size) {
    animation: ${fadeIn} 2s forwards ease-in-out;
  }
`

const MESSAGE = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`

const NUM_REQ_CONTAINER = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;
  border: 1px solid #7141be;
  padding: 10px;
  border-radius: 10px;
  transition: 250ms;
  :hover {
    background-color: #7141be;
    cursor: pointer;
  }
`

const NUM_REQ = styled.h4`
  line-height: 1.5rem;
  text-align: center;
  background-color: #7141be;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 5px;
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  :hover {
    cursor: pointer;
  }
`

const NUM_REQ_TEXT = styled.h6`
  color: white;
  font-size: 0.8rem;
`

const HIDE_WELCOME_MESSAGE = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #7141be;
  display: grid;
  place-items: center;
  transition: 250ms;
  :hover {
    background-color: #906acc;
    cursor: pointer;
  }
`
