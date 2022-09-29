import { Request, Response, NextFunction } from 'express'
import { IErrors } from '../types'
import validateEmail from '../util/validateEmail'

export default function registerFormValidation(req: Request, res: Response, next: NextFunction) {
  // const { form } = req.body
  const { username, email, password, passwordConfirm } = req.body
  req.body.email = email.toLowerCase()

  const errors: IErrors = {}
  if (!username) {
    errors.username = 'Username is required'
  }
  if (!email) {
    errors.email = 'Email is required'
  }

  if (email && !validateEmail(email)) {
    errors.email = 'Email is invalid'
  }

  if (!password) {
    errors.password = 'Password is required'
  }
  if (!passwordConfirm) {
    errors.passwordConfirm = 'Password confirmation is required'
  }
  if (password !== passwordConfirm) {
    errors.passwordConfirm = 'Passwords do not match'
  }
  if (password && password.length < 6) {
    errors.password = 'Password must be at least 6 characters long'
  }

  if (password && !/^[a-zA-Z0-9!.@#$%^&*]+$/.test(password)) {
    errors.password = 'Password must contain only letters, numbers, and !.@#$%^&*'
  }
  if (Object.keys(errors).length > 0) {
    res.status(400).json(errors)
    throw new Error(JSON.stringify(errors))
  }
  next()
}
