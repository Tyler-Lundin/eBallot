/* @collapse
 *
 *
 *
 */
import mongoose, { Schema, SchemaTimestampsConfig } from 'mongoose'

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
  parentID: parentID
  parentType: parentType
  userID: userID
  replies: replies
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
  parentID: parentID
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
  // personal information
  email: email
  password: password
  phoneNumber: phoneNumber
  profilePhotoURL: profilePhotoURL
  username: username
  // app data
  ballots: ballots
  comments: comments
  reactions: reactions
  requests: requests
  votes: votes
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

export type ballotID = Schema.Types.ObjectId
export type ballots = IBallot[]
export type replies = IComment[]
export type comment = string
export type commentID = Schema.Types.ObjectId
export type comments = IComment[]
export type createdAt = SchemaTimestampsConfig['createdAt']
export type description = string
export type email = string
export type expiresAt = Date
export type interactionRate = number
export type isFavorite = boolean
export type matchPercentage = number
export type message = string
export type messages = IMessage[]
export type nickname = string
export type options = option[]
export type parentID = ballotID | commentID | userID
export type parentType = 'ballot' | 'comment' | 'user'
export type password = string
export type phoneNumber = string
export type profilePhotoURL = string
export type reactionID = Schema.Types.ObjectId
export type reactions = IReaction[]
export type receiver = Schema.Types.ObjectId
export type requestID = Schema.Types.ObjectId
export type requests = IRequest[]
export type sender = Schema.Types.ObjectId
export type status = 'pending' | 'accepted' | 'rejected'
export type title = string
export type updatedAt = SchemaTimestampsConfig['updatedAt']
export type userID = Schema.Types.ObjectId
export type username = string
export type users = IUser[]
export type voteID = Schema.Types.ObjectId
export type voters = userID[]
export type votes = IVote[]

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
