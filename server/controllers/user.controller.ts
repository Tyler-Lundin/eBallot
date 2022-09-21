import { Request, Response } from 'express'

export const getProfile = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'get Profile',
  })
}

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
