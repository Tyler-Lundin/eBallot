import { Router, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

const router = Router()

router.post(
    '/login',
    asyncHandler(async (req: Request, res: Response) => {
        
export default router
