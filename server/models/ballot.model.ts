import mongoose, { Schema } from 'mongoose'
import { IBallot } from '../types'

const BallotSchema = new Schema<IBallot>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    options: {
      type: [
        {
          title: String,
          votes: Number,
        },
      ],
      required: true,
    },
    comments: {
      type: Array<Schema.Types.ObjectId>(),
      ref: 'Comment',
    },
  },
  {
    timestamps: true,
  }
)

const Ballot = mongoose.model<IBallot>('Ballot', BallotSchema)

export default Ballot
