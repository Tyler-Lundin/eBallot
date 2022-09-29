import styled from 'styled-components'

const HowAreYou = () => {
  return (
    <HOW_ARE_YOU>
      HOW ARE YOU FEELING TODAY?
      <FAKE_INPUT type='text' maxLength={50} required={false} />
      <FAKE_SEND_BUTTON onClick={(e) => e.preventDefault()}>Respond</FAKE_SEND_BUTTON>
    </HOW_ARE_YOU>
  )
}
export default HowAreYou

const HOW_ARE_YOU = styled.div`
  color: white;
  display: grid;
`

const FAKE_INPUT = styled.input``

const FAKE_SEND_BUTTON = styled.button`
  color: white;
  background: none;
  border: 2px solid transparent;
  background-color: #7141be;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  font-weight: 700;
  transition: 250ms;
  :hover {
    cursor: pointer;
    border: 2px solid #7141be;
    background-color: #906acc;
  }
`
