import mongoose, { Schema } from 'mongoose'
import { IComment, reactions } from '../types'

const commentSchema = new Schema<IComment>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    parentID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: ['Ballot', 'Comment', 'User'],
    },
    parentType: {
      type: String,
      enum: ['ballot', 'comment', 'user'],
      required: true,
    },
    childrenIDs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    comment: {
      type: String,
      required: true,
      minlength: 1,
    },
    commentStats: {
      totalReactions: {
        type: Number,
        default: 0,
      },
    },
    reactions: [
      {
        type: Array<reactions>(),
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Comment = mongoose.model<IComment>('Comment', commentSchema)

export default Comment
