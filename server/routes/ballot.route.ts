/*
 * [BALLOT] - /api/ballot
 *    [GET] - /api/ballot/:id - get ballot by id
 *    [GET] - /api/ballot/feed - get feed of ballots
 *    [POST] - /api/ballot - create ballot
 *    [POST] - /api/ballot/:id/comment - comment on ballot
 *    [POST] - /api/ballot/:id/unvote - unvote on ballot
 *    [POST] - /api/ballot/:id/vote - vote on ballot
 *    [PUT] - /api/ballot/:id - update ballot
 *    [DELETE] - /api/ballot/:id - delete ballot
 *    [DELETE] - /api/ballot/:id/uncomment - uncomment on ballot
 */
import { Router } from 'express'
import {
  commentBallot,
  createBallot,
  deleteBallot,
  getBallotById,
  getBallotFeed,
  uncommentBallot,
  unvoteBallot,
  updateBallot,
  voteBallot,
} from '../controllers/ballot.controller'

const router = Router()

router.get('/feed', getBallotFeed)
router.get('/:id', getBallotById)
router.post('/', createBallot)
router.put('/:id', updateBallot)
router.delete('/:id', deleteBallot)
router.post('/:id/vote', voteBallot)
router.post('/:id/unvote', unvoteBallot)
router.post('/:id/comment', commentBallot)
router.delete('/:id/uncomment', uncommentBallot)
export default router
