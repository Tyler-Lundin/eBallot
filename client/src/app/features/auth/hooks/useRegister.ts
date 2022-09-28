import React, { ChangeEvent, useEffect, useState } from 'react'
import { IFocusedFields, IRegisterForm } from '../../../../types'
import { registerUser } from '../../../api/auth.api'
import { useAppDispatch, useAuthState } from '../../../hooks'
import isValidForm from '../../../util/isValidForm'
import { clearRegisterError, setRegisterError, setRegisterForm } from '../authSlice'

const useRegister = () => {
  const [focused, setFocused] = useState<IFocusedFields>({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
  })

  const { register } = useAuthState()
  const { form, loading, error } = register
  const dispatch = useAppDispatch()
  const handleUpdateForm = (form: IRegisterForm) => dispatch(setRegisterForm(form))

  useEffect(() => {
    error && setTimeout(() => dispatch(clearRegisterError()), 5000)
  }, [error])
  const onSubmit = () => {
    dispatch(
      isValidForm.register(form)
        ? registerUser(form)
        : setRegisterError(' Please fill out all fields')
    )
  }

  const handleFocus = (name: string) => setFocused((prev: any) => ({ ...prev, [name]: true }))

  const handleBlur = (name: string) => setFocused((prev: any) => ({ ...prev, [name]: false }))

  const FIELDS = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'username',
      label: 'Username',
      type: 'text',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
    },
    {
      name: 'passwordConfirm',
      label: 'Confirm Password',
      type: 'password',
    },
  ]

  const formFields = FIELDS.map((field) => ({
    ...field,
    required: true,
    value: form[field.name as keyof IRegisterForm],
    focused: focused[field.name as keyof IFocusedFields],
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      handleUpdateForm({ ...form, [field.name]: e.target.value }),
  }))

  return { formFields, handleUpdateForm, onSubmit, handleFocus, handleBlur, error, loading }
}

export default useRegister
