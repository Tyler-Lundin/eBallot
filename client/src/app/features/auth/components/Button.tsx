import styled, { css } from 'styled-components'
import Spinner from '../../../util/Spinner'

const Button = ({
  buttonClicked,
  onClick,
  name,
}: {
  buttonClicked: boolean
  onClick: () => void
  name: string
}) => {
  return (
    <BUTTON_CONTAINER $clicked={buttonClicked}>
      <BUTTON
        $clicked={buttonClicked}
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}>
        {name}
        {buttonClicked && <LOADING_CONTAINER children={<Spinner />} />}
      </BUTTON>
    </BUTTON_CONTAINER>
  )
}

export default Button

const BUTTON = styled.button<{ $clicked: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgb(180, 180, 180);
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  position: relative;
  cursor: pointer;
  transition: all 250ms;
  padding: 20px;
  display: grid;
  place-content: center;
  ${({ $clicked }) => $clicked && 'color: black;'}
  overflow: hidden;
`

const BUTTON_CONTAINER = styled.section<{ $clicked: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgb(200, 200, 200);
  border-radius: 10px;
  position: relative;
  margin-top: 20px;
  transition: 250ms;
  display: grid;
  top: 0;
  ${({ $clicked }) =>
    !$clicked &&
    css`
      :hover ${BUTTON} {
        background-color: rgb(100, 100, 100);
      }
    `}
  ${({ $clicked }) =>
    $clicked &&
    css`
      transform: scale(500%);
      top: -160%;
    `}
`

const LOADING_CONTAINER = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  place-content: center;
  animation: fadeIn 250ms forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
