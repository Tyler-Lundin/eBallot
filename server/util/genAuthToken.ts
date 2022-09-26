import jwt, { Secret } from 'jsonwebtoken'
import { IUser } from '../types'

function genAuthToken(user: IUser) {
  if (!user) return
  const userPayload = {
    id: user._id,
    username: user.username,
    email: user.email,
  }
  return jwt.sign(userPayload, process.env.JWT_SECRET as Secret, {
    expiresIn: process.env.JWT_EXPIRE,
  })
}

export default genAuthToken
