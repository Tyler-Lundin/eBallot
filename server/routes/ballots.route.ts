import { Router, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

const router = Router()

router.get(
  '/feed',
  asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Route 1 Controller Works' })
  })
)

export default router
