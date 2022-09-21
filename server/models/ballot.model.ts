import { Schema } from 'mongoose'

const BallotSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    votes: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default BallotSchema
