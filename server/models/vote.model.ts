import mongoose, { Schema, SchemaTimestampsConfig } from 'mongoose'

export interface IVote extends mongoose.Document {
  ballot: Schema.Types.ObjectId
  voter: Schema.Types.ObjectId
  option: Schema.Types.ObjectId
  createdAt: SchemaTimestampsConfig['createdAt']
  updatedAt: SchemaTimestampsConfig['updatedAt']
}

const VoteSchema = new Schema<IVote>(
  {
    ballot: {
      type: Schema.Types.ObjectId,
      ref: 'Ballot',
      required: true,
    },
    voter: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    option: {
      type: Schema.Types.ObjectId,
      ref: 'Option',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Vote = mongoose.model<IVote>('Vote', VoteSchema)

export default Vote
