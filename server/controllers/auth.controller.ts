import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/user.model'
import bcrypt from 'bcryptjs'
import jwt, { Secret } from 'jsonwebtoken'
import { IUser } from '../types'

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body
  const user = await User.findOne({ $or: [{ username }, { email: username }] })
  if (user && (await bcrypt.compare(password, user.password))) {
    const authToken = genAuthToken(user)
    res.json({ authToken })
  }
})

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
