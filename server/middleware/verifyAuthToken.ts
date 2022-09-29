import { NextFunction, Request, Response } from 'express'
import { IErrors } from '../types'
import jwt, { Secret } from 'jsonwebtoken'
import { BGwhite, BGyellow, black, reset, white } from '../util/escapeColors'

export default function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
  const authToken = req.cookies.authToken.split(' ')[1]
  const errors: IErrors = {}
  if (!authToken) {
    errors.authToken = 'authToken is required'
  }
  jwt.verify(authToken, process.env.JWT_SECRET || '', (err: any) => {
    if (err) {
      errors.authToken = 'authToken is invalid'
    }
  })
  if (Object.keys(errors).length > 0) {
    console.log(BGyellow, black)
    console.log('errors: ', errors)
    console.log(reset)
    res.status(400).json(errors)
    throw new Error(JSON.stringify(errors))
  }
  next()
}
