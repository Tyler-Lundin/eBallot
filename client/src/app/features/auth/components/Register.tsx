import styled from 'styled-components'
import useRegister from '../hooks/useRegister'
import Button from './Button'

const Register = () => {
  const { FIELDS, onSubmit, handleFocus, handleBlur, buttonClicked } = useRegister()
  return (
    <REGISTER_FORM onSubmit={onSubmit}>
      <HEADER>
        <h1>Register</h1>
      </HEADER>
      <INPUTS>
        {FIELDS.map((field) => (
          <GROUP key={field.name + field.type}>
            <LABEL $on={field.focused || field.value !== ''} htmlFor={field.name}>
              {field.label}
            </LABEL>
            <INPUT
              onFocus={() => handleFocus(field.name)}
              onBlur={() => handleBlur(field.name)}
              value={field.value}
              onChange={field.onChange}
              type={field.type}
              name={field.name}
              id={field.name}
              required={field.required}
            />
          </GROUP>
        ))}
      </INPUTS>
      <Button buttonClicked={buttonClicked} onClick={onSubmit} name={'REGISTER'} />
    </REGISTER_FORM>
  )
}

export default Register

const REGISTER_FORM = styled.form`
  width: 400px;
  height: 400px;
  /* background-color: white; */
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  justify-content: baseline;
  overflow: hidden;
  position: relative;
`

const GROUP = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const LABEL = styled.label<{ $on: boolean }>`
  position: relative;
  width: fit-content;
  top: 100%;
  transition: 250ms;
  ${({ $on }) => $on && 'top: 0;'}
`

const INPUT = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  &:focus {
    outline: none;
    background: none;
  }

  &::placeholder {
    color: white;
  }
  &:autofill {
    color: white;
    background: none;
  }
`

const HEADER = styled.header`
  h1 {
    font-weight: 300;
  }
`

const INPUTS = styled.section`
  margin-bottom: 20px;
`
