import { Router } from 'express'
import ballotsRoutes from './ballot.routes'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import verifyAuthToken from '../middleware/verifyAuthToken'

const router = Router()

router.use('/auth', authRoutes)
router.use('/ballots', verifyAuthToken, ballotsRoutes)
router.use('/user', verifyAuthToken, userRoutes)
// router.use('/comments', verifyAuthToken, commentsRoutes)
// router.use('/vote', verifyAuthToken, voteRoutes)
// router.use('/friends', verifyAuthToken, friendRoutes)
// router.use('/requests', verifyAuthToken, requestRoutes)
// router.use('/messages', verifyAuthToken, messageRoutes)

export default router
