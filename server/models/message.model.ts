import mongoose, { Schema } from 'mongoose'
import { IMessage } from '../types'

// sender: userID
// chatID: chatID
// status: MessageStatus
// message: message
// reactionIDs: reactionIDs
// createdAt: createdAt
// updatedAt: updatedAt

const messageSchema = new Schema<IMessage>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    chatID: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
    status: {
      type: String,
      enum: ['sent', 'received', 'read', 'edited', 'unsent'],
      required: true,
      default: 'sent',
    },
    message: {
      type: String,
      required: true,
    },
    reactions: [
      {
        parentID: {
          type: Schema.Types.ObjectId,
          ref: ['Ballot', 'Comment', 'User', 'Message'],
        },
        userID: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        reactionType: {
          type: String,
          enum: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model<IMessage>('Message', messageSchema)

export default Message
