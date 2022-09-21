import { Request, Response } from 'express'

const registerUser = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'register User',
  })
}

const loginUser = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'login User',
  })
}

const logoutUser = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'logout User',
  })
}
