import styled from 'styled-components'
import { fadeIn, fadeInOut } from '../../../util/keyframes'
import useRegister from '../hooks/useRegister'
import Button from './Button'

const Register = () => {
  const { formFields, onSubmit, handleFocus, handleBlur, error, loading } = useRegister()
  return (
    <REGISTER_FORM onSubmit={onSubmit}>
      {error ? <ERROR children={error} /> : <span />}
      <HEADER>
        <h1>Register</h1>
      </HEADER>
      <INPUTS>
        {formFields.map((field) => (
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
      <Button onClick={onSubmit} name={'REGISTER'} />
    </REGISTER_FORM>
  )
}

export default Register

const ERROR = styled.div`
  color: white;
  background-color: black;
  line-height: 40px;
  font-size: 1.2rem;
  height: 40px;
  font-weight: 700;
  text-align: center;
  animation: ${fadeInOut} 5s ease-in-out forwards;
  border-radius: 10px;
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

const REGISTER_FORM = styled.form`
  width: 400px;
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  justify-content: baseline;
  overflow: hidden;
  position: relative;
  animation: ${fadeIn} 500ms ease-in-out forwards;
  grid-template-rows: 60px;
`
