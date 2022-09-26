import mongoose, { Schema } from 'mongoose'
import { IFriend } from '../types'

const friendSchema = new Schema<IFriend>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    matchPercentage: {
      type: Number,
      required: true,
      default: 0,
    },
    interactionRate: {
      type: Number,
      required: true,
      default: 0,
    },
    isFavorite: {
      type: Boolean,
      required: true,
      default: false,
    },
    nickname: {
      type: String,
      default: '',
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Friend = mongoose.model<IFriend>('Friend', friendSchema)

export default Friend
