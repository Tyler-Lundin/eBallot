/* BALLOT CONTROLLER */
/* @collapse */
/*[[BALLOT] - /api/ballot ]----------------------------------------
 *     [GET] - /api/ballot/feed - get array of ballotIDs
 *     [GET] - /api/ballot/:ballotID - get ballot by ballotID
 *    [POST] - /api/ballot - create ballot
 *     [PUT] - /api/ballot/:ballotID - update ballot by ballotID
 *  [DELETE] - /api/ballot/:ballotID - delete ballot if user is owner or admin
 *    [POST] - /api/ballot/:ballotID/vote - vote on ballot
 *    [POST] - /api/ballot/:ballotID/unvote - unvote on ballot
 *    [POST] - /api/ballot/:ballotID/comment - comment on ballot
 *    [POST] - /api/ballot/:ballotID/uncomment - uncomment on ballot
 * ----------------------------------------------------------------
 */
/* [IBallot] extends mongoose.Document {
 *      userID: userID
 *      title: title
 *      description: description
 *      options: options
 *      comments: comments
 *      expiresAt: expiresAt
 *      createdAt: createdAt
 *      updatedAt: updatedAt
 * }
 */

import { ballots } from '../types'

import Ballot from '../models/ballot.model'
import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

// *    [GET] - /api/ballot/feed - get array of ballotIDs
export const getBallotFeed = asyncHandler(async (req: Request, res: Response) => {
  const ballots = (await Ballot.find({}).sort({ createdAt: -1 })) as ballots
  res.status(200).json(ballots)
})

// *    [GET] - /api/ballot/:ballotID - get ballot by ballotID
export const getBallotById = asyncHandler(async (req: Request, res: Response) => {
  const ballot = (await Ballot.findById(req.params.id)) as ballots
  if (ballot) {
    res.status(200).json(ballot)
  } else {
    res.status(404)
    throw new Error('Ballot not found')
  }
})

// *    [POST] - /api/ballot - create ballot
export const createBallot = asyncHandler(async (req: Request, res: Response) => {
  const { title, description, options } = req.body
  const ballot = await Ballot.create({
    title,
    description,
    options,
    user: req.user._id,
  })
  if (ballot) {
    res.status(201).json(ballot)
  } else {
    res.status(400)
    throw new Error('Invalid ballot data')
  }
})

// *    [PUT] - /api/ballot/:ballotID - update ballot by ballotID
export const updateBallot = asyncHandler(async (req: Request, res: Response) => {
  const ballot = await Ballot.findById(req.params.id)
  if (ballot) {
    ballot.title = req.body.title || ballot.title
    ballot.description = req.body.description || ballot.description
    ballot.options = req.body.options || ballot.options
    const updatedBallot = await ballot.save()
    res.status(200).json(updatedBallot)
  } else {
    res.status(404)
    throw new Error('Ballot not found')
  }
})

// *    [DELETE] - /api/ballot/:ballotID - delete ballot if user is owner or admin
export const deleteBallot = asyncHandler(async (req: Request, res: Response) => {
  const ballot = await Ballot.findById(req.params.id)
  if (ballot) {
    await ballot.remove()
    res.status(200).json({ message: 'Ballot removed' })
  } else {
    res.status(404)
    throw new Error('Ballot not found')
  }
})

// *    [POST] - /api/ballot/:ballotID/vote - vote on ballot
export const voteBallot = asyncHandler(async (req: Request, res: Response) => {
  //   const ballot = await Ballot.findById(req.params.id)
  //   if (ballot) {
  //     const alreadyVoted = ballot.votes.filter(
  //       (vote) => vote.user.toString() === req.user._id.toString()
  //     )
  //     if (alreadyVoted.length === 0) {
  //       ballot.votes.push({ user: req.user._id })
  //       await ballot.save()
  //       res.status(200).json({ message: 'Vote added' })
  //     } else {
  //       res.status(400)
  //       throw new Error('Ballot already voted')
  //     }
  //   } else {
  //     res.status(404)
  //     throw new Error('Ballot not found')
  //   }
})

// *    [POST] - /api/ballot/:ballotID/unvote - unvote on ballot
export const unvoteBallot = asyncHandler(async (req: Request, res: Response) => {
  //   const ballot = await Ballot.findById(req.params.id)
  //   if (ballot) {
  //     const voteIndex = ballot.votes.findIndex(
  //       (vote) => vote.user.toString() === req.user._id.toString()
  //     )
  //     if (voteIndex !== -1) {
  //       ballot.votes.splice(voteIndex, 1)
  //       await ballot.save()
  //       res.status(200).json({ message: 'Vote removed' })
  //     } else {
  //       res.status(400)
  //       throw new Error('Ballot not voted')
  //     }
  //   } else {
  //     res.status(404)
  //     throw new Error('Ballot not found')
  //   }
})

// *    [POST] - /api/ballot/:ballotID/comment - comment on ballot
export const commentBallot = asyncHandler(async (req: Request, res: Response) => {
  //   const ballot = await Ballot.findById(req.params.id)
  //   if (ballot) {
  //     const alreadyCommented = ballot.comments.filter(
  //       (comment) => comment.userID.toString() === req.user._id.toString()
  //     )
  //     if (alreadyCommented.length === 0) {
  //       ballot.comments.push({
  //         userID: req.user._id,
  //         comment: req.body.comment,
  //       })
  //       await ballot.save()
  //       res.status(200).json({ message: 'Comment added' })
  //     } else {
  //       res.status(400)
  //       throw new Error('Ballot already commented')
  //     }
  //   } else {
  //     res.status(404)
  //     throw new Error('Ballot not found')
  //   }
})

// *    [POST] - /api/ballot/:ballotID/uncomment - uncomment on ballot
export const uncommentBallot = asyncHandler(async (req: Request, res: Response) => {
  const ballot = await Ballot.findById(req.params.id)
  if (ballot) {
    const commentIndex = ballot.comments.findIndex(
      (comment) => comment.userID.toString() === req.user._id.toString()
    )
    if (commentIndex !== -1) {
      ballot.comments.splice(commentIndex, 1)
      await ballot.save()
      res.status(200).json({ message: 'Comment removed' })
    } else {
      res.status(400)
      throw new Error('Ballot not commented')
    }
  } else {
    res.status(404)
    throw new Error('Ballot not found')
  }
})
