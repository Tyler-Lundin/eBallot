import { ILoginForm, IRegisterForm } from '../../types'
import isValidEmail from './isValidEmail'

const isValidForm = {
  login: (form: ILoginForm) => {
    const { username, password } = form
    return username.length > 0 && password.length > 0
  },
  register: (form: IRegisterForm) => {
    const { email, username, password, passwordConfirm } = form
    return (
      email.length > 0 &&
      username.length > 0 &&
      password.length > 0 &&
      passwordConfirm.length > 0 &&
      password === passwordConfirm &&
      isValidEmail(email)
    )
  },
}

export default isValidForm
