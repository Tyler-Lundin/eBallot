import mongoose, { Schema } from 'mongoose'
import { IChat } from '../types'

// export interface IChat extends mongoose.Document {
//   _id: chatID
//   chatStats: chatStats
//   chatName: chatName
//   messageIDs: messageIDs
//   userIDs: userIDs
// }

const chatSchema: Schema = new Schema<IChat>(
  {
    chatStats: {
      totalMessages: {
        type: Number,
        default: 0,
      },
    },
    chatName: {
      type: String,
      required: true,
    },
    messageIDs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
    userIDs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Chat = mongoose.model('Chat', chatSchema)

export default Chat
