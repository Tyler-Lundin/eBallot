import mongoose, { Schema, SchemaTimestampsConfig } from 'mongoose'

type MessageStatus = 'sent' | 'received' | 'read'

export interface IMessage extends mongoose.Document {
  sender: Schema.Types.ObjectId
  recipient: Schema.Types.ObjectId
  status: MessageStatus
  message: string
  createdAt: SchemaTimestampsConfig['createdAt']
  updatedAt: SchemaTimestampsConfig['updatedAt']
}

const messageSchema = new Schema<IMessage>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['sent', 'received', 'read'],
      required: true,
      default: 'sent',
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model<IMessage>('Message', messageSchema)

export default Message
