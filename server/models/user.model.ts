/* User Schema
 *
 * @collapse - vscode extension to collapse code
 */
import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const userSchema = new Schema<IUser>(
  {
    userStats: {
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
      commentStats: {
        totalReplies: {
          type: Number,
          default: 0,
        },
        totalReactions: {
          type: Number,
          default: 0,
        },
      },
      reactionStats: {
        totalReactions: {
          type: Number,
          default: 0,
        },
      },
      friendStats: {
        totalFriends: {
          type: Number,
          default: 0,
        },
        totalMessages: {
          type: Number,
          default: 0,
        },
      },
      viewCount: {
        type: Number,
        default: 0,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      trim: true,
      minlength: 10,
      default: '0000000000',
    },
    profilePhotoURL: {
      type: String,
      default: '',
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request',
      },
    ],
    votes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Vote',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model<IUser>('User', userSchema)

export default User
