import mongoose, { Schema, SchemaTimestampsConfig } from 'mongoose'

export interface IUser extends mongoose.Document {
  username: string
  email: string
  phoneNumber: string
  password: string
  history: {
    ballots: Schema.Types.ObjectId[]
    comments: Schema.Types.ObjectId[]
    reactions: Schema.Types.ObjectId[]
    votes: Schema.Types.ObjectId[]
    login: SchemaTimestampsConfig['createdAt'][]
    profilesViewed: Schema.Types.ObjectId[]
  }
  friends: {
    public: boolean
    friends: Schema.Types.ObjectId[]
    requests: {
      sent: Schema.Types.ObjectId[]
      received: Schema.Types.ObjectId[]
    }
  }
  photos: {
    profile: string
    cover: string
  }
  createdAt: SchemaTimestampsConfig['createdAt']
  updatedAt: SchemaTimestampsConfig['updatedAt']
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
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
      required: true,
      unique: true,
      trim: true,
      minlength: 10,
    },
    history: {
      ballots: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Ballot',
        },
      ],
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
      reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction',
        },
      ],
      votes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Vote',
        },
      ],
      login: [
        {
          type: Date,
          default: Date.now,
        },
      ],
      profilesViewed: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    friends: {
      public: {
        type: Boolean,
        default: false,
      },
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      requests: {
        sent: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Request',
          },
        ],
        received: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Request',
          },
        ],
      },
    },
    photos: {
      profile: {
        type: String,
        default: '',
      },
      cover: {
        type: String,
        default: '',
      },
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model<IUser>('User', UserSchema)

export default User
