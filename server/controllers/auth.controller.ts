/* AUTH CONTROLLER
 * @collapse
 *
 */
import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/user.model'
import bcrypt from 'bcryptjs'
import createAuthToken from '../util/createAuthToken'

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body
  const user = await User.findOne({ $or: [{ username }, { email: username }] })
  if (user && (await bcrypt.compare(password, user.password))) {
    const authToken = createAuthToken(user)
    res.cookie('authToken', `BEARER ${authToken}`).json({ message: 'Login successful' })
  }
  res.status(401).json({ message: 'Invalid username or password' })
})

export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  const userExists = await User.findOne({ $or: [{ username }, { email }] })
  if (userExists) {
    if (userExists.username === username && userExists.email === email) {
      res.status(400).json({ message: 'Username and email already exists' })
    }
    if (userExists.email === email) {
      res.status(400).json({ message: 'Email already exists' })
      throw new Error('Email already exists')
    }
    if (userExists.username === username) {
      res.status(400).json({ message: 'Username already exists' })
      throw new Error('Username already exists')
    }
  }
  const user = await User.create({
    username,
    email,
    password: await bcrypt.hash(password, 10),
  })
  if (user) {
    const authToken = createAuthToken(user)
    res.cookie('authToken', `BEARER ${authToken}`).json({ message: 'Register successful' })
  }
  res.status(500).json({ message: 'Server error' })
})

export const forgotPassword = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (user) {
    // send email
  }
  res.json({ message: 'Email sent' })
})

export const resetPassword = asyncHandler(async (req: Request, res: Response) => {
  const { password } = req.body
  const user = await User.findOne({ _id: req.params.id })
  if (user) {
    user.password = await bcrypt.hash(password, 10)
    await user.save()
    res.json({ message: 'Password reset successful' })
  }
  res.status(404).json({ message: 'User not found' })
})

export const verifyEmail = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (user) {
    // send email
  }
  res.json({ message: 'Email sent' })
})

export const resendVerificationEmail = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (user) {
    // send email
  }
  res.json({ message: 'Email sent' })
})

// export const verifyEmailToken = asyncHandler(async (req: Request, res: Response) => {
//   const user = await User.findOne({ _id: req.params.id })
//   if (user) {
//     user.isVerified = true
//     await user.save()
//     res.json({ message: 'Email verified' })
//   }
//   res.status(404).json({ message: 'User not found' })
// })

export const resetPasswordToken = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.params.id })
  if (user) {
    res.json({ message: 'User found' })
  }
  res.status(404).json({ message: 'User not found' })
})
