import { Router } from 'express'
import ballotsRoutes from './ballot.routes'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/ballots', ballotsRoutes)
router.use('/user', userRoutes)

export default router
