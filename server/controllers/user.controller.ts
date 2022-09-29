import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/user.model'
import decodeAuthToken from '../util/decodeAuthToken'

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const { _id, username, email } = decodeAuthToken(req.cookies.authToken)
  const user = await User.findById(_id, { password: 0 })
  if (user) {
    res.status(200).json({ user })
  }

  res.status(404).json({ message: 'User not found' })
})

export const addFriend = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'add Friend ',
  })
}

export const removeFriend = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'remove Friend',
  })
}

export const getFriends = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'get Friends',
  })
}

export const getFriendRequests = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'get Friend Requests',
  })
}

export const acceptFriendRequest = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'accept Friend Request',
  })
}

export const declineFriendRequest = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'decline Friend Request',
  })
}
