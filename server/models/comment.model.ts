import mongoose, { Schema } from 'mongoose'
import { IComment } from '../types'

const commentSchema = new Schema<IComment>(
  {
    parent: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: ['Ballot', 'Comment', 'User'],
    },
    parentType: {
      type: String,
      enum: ['ballot', 'comment', 'user'],
      required: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    children: [
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
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Comment = mongoose.model<IComment>('Comment', commentSchema)

export default Comment
