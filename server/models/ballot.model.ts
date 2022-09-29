import mongoose, { Schema } from 'mongoose'
import { commentIDs, IBallot, userIDs } from '../types'

// export interface IBallot extends mongoose.Document {
//   ballotStats: ballotStats
//   userID: userID
//   question: string
//   options: options
//   commentIDs: commentIDs
//   expiresAt: expiresAt
//   createdAt: createdAt
//   updatedAt: updatedAt
// }

const BallotSchema = new Schema<IBallot>(
  {
    ballotStats: {
      totalVotes: {
        type: Number,
        default: 0,
      },
      totalComments: {
        type: Number,
        default: 0,
      },
      totalReactions: {
        type: Number,
        default: 0,
      },
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [
        {
          index: {
            type: Number,
            required: true,
          },
          title: {
            type: String,
          },
          voterIDs: {
            type: Array<userIDs>(),
            ref: 'User',
          },
        },
      ],
      required: true,
    },
    commentIDs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Ballot = mongoose.model<IBallot>('Ballot', BallotSchema)

export default Ballot
