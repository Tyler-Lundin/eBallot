import mongoose, { Schema, SchemaTimestampsConfig } from 'mongoose'

export type ballotID = Schema.Types.ObjectId
export type ballots = Schema.Types.ObjectId[]
export type children = Schema.Types.ObjectId[]
export type comment = string
export type commentID = Schema.Types.ObjectId
export type CommentParentType = 'ballot' | 'comment' | 'user'
export type comments = Schema.Types.ObjectId[]
export type cover = string
export type createdAt = SchemaTimestampsConfig['createdAt']
export type description = string
export type email = string
export type expiresAt = Date
export type interactionRate = number
export type isFavorite = boolean
export type matchPercentage = number
export type message = string
export type messages = Schema.Types.ObjectId[]
export type nickname = string
export type options = option[]
export type parent = Schema.Types.ObjectId
export type parentType = CommentParentType
export type password = string
export type phoneNumber = string
export type profile = string
export type reactionID = Schema.Types.ObjectId
export type reactions = Schema.Types.ObjectId[]
export type received = Schema.Types.ObjectId[]
export type receiver = Schema.Types.ObjectId
export type requestID = Schema.Types.ObjectId
export type sender = Schema.Types.ObjectId
export type sent = Schema.Types.ObjectId[]
export type status = 'pending' | 'accepted' | 'rejected'
export type title = string
export type updatedAt = SchemaTimestampsConfig['updatedAt']
export type userID = Schema.Types.ObjectId
export type username = string
export type voteID = Schema.Types.ObjectId
export type voters = number
export type votes = Schema.Types.ObjectId[]

export type BallotOption = {
  title: title
  voters: voters
}

export type option = {
  title: title
  voters: voters
}

export type reaction =
  | 'like'
  | 'dislike'
  | 'laugh'
  | 'cry'
  | 'angry'
  | 'heart'
  | 'wow'
  | 'confused'
  | 'hmm'

export interface IBallot extends mongoose.Document {
  userID: userID
  title: title
  description: description
  options: options
  comments: comments
  expiresAt: expiresAt
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IComment extends mongoose.Document {
  parent: parent
  parentType: parentType
  userID: userID
  children: children
  comment: comment
  reactions: reactions
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IFriend extends mongoose.Document {
  userID: userID
  matchPercentage: matchPercentage
  interactionRate: interactionRate
  isFavorite: isFavorite
  nickname: nickname
  messages: messages
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IMessage extends mongoose.Document {
  sender: sender
  receiver: receiver
  message: message
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IReaction extends mongoose.Document {
  parent: parent
  userID: userID
  reaction: reaction
}

export interface IRequest extends mongoose.Document {
  sender: sender
  receiver: receiver
  status: status
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IUser extends mongoose.Document {
  username: username
  email: email
  phoneNumber: phoneNumber
  password: password
  profile: profile
  cover: cover
  ballots: ballots
  comments: comments
  reactions: reactions
  votes: votes
  sent: sent
  received: received
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IVote extends mongoose.Document {
  userID: userID
  ballotID: ballotID
  option: option
  createdAt: createdAt
  updatedAt: updatedAt
}
