import { Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    ballots: {
      type: [Schema.Types.ObjectId],
      ref: 'Ballot',
    },
  },
  {
    timestamps: true,
  }
)

export default UserSchema
