import styled, { css } from 'styled-components'

const Button = ({ onClick, name }: { onClick: () => void; name: string }) => {
  return (
    <BUTTON_CONTAINER>
      <BUTTON
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}>
        {name}
      </BUTTON>
    </BUTTON_CONTAINER>
  )
}

export default Button

const BUTTON = styled.button`
  width: 100%;
  height: 80px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  position: relative;
  cursor: pointer;
  transition: all 250ms;
  padding: 20px;
  display: grid;
  place-content: center;
  overflow: hidden;
  align-self: center;
  &:hover {
    background-color: black;
    color: white;
  }
`

const BUTTON_CONTAINER = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgb(200, 200, 200);
  border-radius: 10px;
  position: relative;
  margin-top: 20px;
  transition: 250ms;
  display: grid;
  top: 0;
`
