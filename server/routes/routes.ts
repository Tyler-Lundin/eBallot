import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import ballotsRouter from './ballots.route'

const router = Router()

router.use('/ballots', ballotsRouter)

export default router
