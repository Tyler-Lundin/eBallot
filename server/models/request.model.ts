import mongoose, { Schema, SchemaTimestampsConfig } from 'mongoose'

export enum RequestStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Rejected = 'rejected',
}

export interface IRequest extends mongoose.Document {
  sender: Schema.Types.ObjectId
  receiver: Schema.Types.ObjectId
  status: RequestStatus
  createdAt: SchemaTimestampsConfig['createdAt']
  updatedAt: SchemaTimestampsConfig['updatedAt']
}

const RequestSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: RequestStatus,
      default: RequestStatus.Pending,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Request = mongoose.model<IRequest>('Request', RequestSchema)

export default Request
