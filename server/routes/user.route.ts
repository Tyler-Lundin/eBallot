import { Router, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { getUser } from '../controllers/user.controller'
import usedConsoleLog from '../util/usedLog'

const router = Router()

router.get('/', usedConsoleLog, getUser)

export default router
