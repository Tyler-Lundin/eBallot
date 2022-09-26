import mongoose, { Schema } from 'mongoose'
import { IReaction } from '../types'

const reactionSchema = new Schema<IReaction>(
  {
    parent: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    reaction: {
      type: String,
      enum: ['like', 'dislike', 'laugh', 'cry', 'angry', 'heart', 'wow', 'confused', 'hmm'],
    },
  },
  {
    timestamps: true,
  }
)

const Reaction = mongoose.model<IReaction>('Reaction', reactionSchema)

export default Reaction
