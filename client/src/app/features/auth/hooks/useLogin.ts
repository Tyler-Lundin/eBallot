import { FormEvent, useEffect, useState } from 'react'
import { IFocusedFields, ILoginForm, IRegisterForm } from '../../../../types'
import { loginUser, registerUser } from '../../../api/auth.api'
import { useAppDispatch, useAuthState } from '../../../hooks'
import isValidForm from '../../../util/isValidForm'
import { clearLoginError, setLoginForm } from '../authSlice'

const useLogin = () => {
  const [focused, setFocused] = useState<IFocusedFields>({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
  })
  const { login } = useAuthState()
  const { form, loading, error } = login
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (error) setTimeout(() => dispatch(clearLoginError()), 5000)
  }, [error])

  const handleUpdateForm = (updatedForm: ILoginForm) => dispatch(setLoginForm(updatedForm))

  const onSubmit = () => isValidForm.login(form) && dispatch(loginUser(form))

  const handleFocus = (name: string) => setFocused((prev) => ({ ...prev, [name]: true }))

  const handleBlur = (name: string) => setFocused((prev) => ({ ...prev, [name]: false }))

  const FIELDS = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      required: true,
      value: form.username,
      focused: focused.username,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleUpdateForm({ ...form, username: e.target.value }),
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      value: form.password,
      focused: focused.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleUpdateForm({ ...form, password: e.target.value }),
    },
  ]

  return { FIELDS, handleUpdateForm, onSubmit, handleFocus, handleBlur, loading, error }
}

export default useLogin
