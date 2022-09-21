import { Router, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

const router = Router()

router.post(
  '/login',
  asyncHandler(async (req: Request, res: Response) => {
    res.send('Hello World!')
  })
)

export default router
