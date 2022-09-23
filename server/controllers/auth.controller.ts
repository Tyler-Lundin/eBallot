/* AUTH CONTROLLER
 * @collapse
 *
 */
import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/user.model'
import bcrypt from 'bcryptjs'
import genAuthToken from '../util/genAuthToken'

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body
  const user = await User.findOne({ $or: [{ username }, { email: username }] })
  if (user && (await bcrypt.compare(password, user.password))) {
    const authToken = genAuthToken(user)
    res.json({ authToken })
  }
})

export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  const userExists = await User.findOne({ $or: [{ username }, { email }] })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    username,
    email,
    password: bcrypt.hash(password, 10),
  })
  if (user) {
    const authToken = genAuthToken(user)
    res.json({ authToken })
  }
  res.status(500).json({ message: 'Server error' })
})
