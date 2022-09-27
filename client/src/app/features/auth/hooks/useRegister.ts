import { FormEvent, useState } from 'react'
import { IRegisterFieldFocused, IRegisterForm } from '../../../../types'
import { registerUser } from '../../../api/auth.api'
import { useAppDispatch, useAuthState } from '../../../hooks'
import isValidEmail from '../../../util/isValidEmail'
import { setRegisterForm } from '../authSlice'

const useRegister = () => {
  const [buttonClicked, setButtonClicked] = useState(false)
  const [focused, setFocused] = useState<IRegisterFieldFocused>({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
  })

  const { register } = useAuthState()
  const dispatch = useAppDispatch()
  const handleUpdateForm = (form: IRegisterForm) => dispatch(setRegisterForm(form))

  const onSubmit = () => {
    setButtonClicked(true)
    if (
      isValidEmail(register.form.email) &&
      register.form.password === register.form.passwordConfirm
    ) {
      dispatch(registerUser(register.form))
    }
  }

  const handleFocus = (name: string) => {
    setFocused((prev) => ({ ...prev, [name]: true }))
  }

  const handleBlur = (name: string) => {
    setFocused((prev) => ({ ...prev, [name]: false }))
  }

  const FIELDS = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      value: register.form.email,
      focused: focused.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleUpdateForm({ ...register.form, email: e.target.value }),
    },
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      required: true,
      value: register.form.username,
      focused: focused.username,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleUpdateForm({ ...register.form, username: e.target.value }),
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      value: register.form.password,
      focused: focused.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleUpdateForm({ ...register.form, password: e.target.value }),
    },
    {
      name: 'passwordConfirm',
      label: 'Confirm Password',
      type: 'password',
      required: true,
      value: register.form.passwordConfirm,
      focused: focused.passwordConfirm,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleUpdateForm({ ...register.form, passwordConfirm: e.target.value }),
    },
  ]

  return { FIELDS, handleUpdateForm, onSubmit, handleFocus, handleBlur, buttonClicked }
}

export default useRegister
