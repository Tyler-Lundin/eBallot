import mongoose, { Schema } from 'mongoose'
import { IFriend } from '../types'

// export interface IFriend extends mongoose.Document {
//   userID: userID
//   matchPercentage: matchPercentage
//   interactionRate: interactionRate
//   isFavorite: isFavorite
//   nickname: nickname
//   messageIDs: messageIDs
//   createdAt: createdAt
//   updatedAt: updatedAt
// }

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
    interactions: {
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
    messageIDs: [
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
