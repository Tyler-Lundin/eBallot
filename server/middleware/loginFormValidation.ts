import { NextFunction, Request, Response } from 'express'
import { IErrors } from '../types'

export default function loginFormValidation(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body

  const errors: IErrors = {}
  if (!username) {
    errors.username = 'Username is required'
  }
  if (!password) {
    errors.password = 'Password is required'
  }

  if (Object.keys(errors).length > 0) {
    res.status(400).json({ errors })
    throw new Error(JSON.stringify(errors))
  }
  next()
}
