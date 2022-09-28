import styled from 'styled-components'
import { fadeIn, fadeInOut } from '../../../util/keyframes'
import useLogin from '../hooks/useLogin'

import Button from './Button'

const Login = () => {
  const { onSubmit, FIELDS, handleFocus, handleBlur, error, loading } = useLogin()
  return (
    <LOGIN_FORM onSubmit={onSubmit}>
      {error ? <ERROR children={error} /> : <span />}
      <HEADER children={<h1>Login</h1>} />
      <INPUTS
        children={FIELDS.map((field) => (
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
      />

      <Button onClick={onSubmit} name={'LOGIN'} />
    </LOGIN_FORM>
  )
}

export default Login

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

const LOGIN_FORM = styled.form`
  width: 400px;
  animation: ${fadeIn} 500ms ease-in-out forwards;
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  grid-template-rows: 60px;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: 250ms;
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
  z-index: -1;
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
  height: fit-content;
`

const INPUTS = styled.section`
  display: grid;
  grid-gap: 10px;
  margin: 20px 0;
`
