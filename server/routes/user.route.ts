import { Router, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

const router = Router()

router.post(
  '/login',
  asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    console.log(email, password)
    res.status(200).json({ message: 'success' })
  })
)

export default router
