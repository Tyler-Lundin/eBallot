/* @collapse
 *
 *
 *
 */
import mongoose, { Schema, SchemaTimestampsConfig } from 'mongoose'

export interface IErrors {
  [key: string]: string
}
export interface IBallot extends mongoose.Document {
  ballotStats: ballotStats
  userID: userID
  question: string
  options: options
  commentIDs: commentIDs
  expiresAt: expiresAt
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IComment extends mongoose.Document {
  commentStats: commentStats
  userID: userID
  parentID: parentID
  parentType: parentType
  childrenIDs: commentIDs
  comment: comment
  reactions: reactions
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IChat extends mongoose.Document {
  chatStats: chatStats
  chatName: chatName
  messageIDs: messageIDs
  userIDs: userIDs
}

export interface IFriend extends mongoose.Document {
  userID: userID
  matchPercentage: matchPercentage
  interactions: interactions
  isFavorite: isFavorite
  nickname: nickname
  messageIDs: messageIDs
  createdAt: createdAt
  updatedAt: updatedAt
}
export interface IMessage extends mongoose.Document {
  sender: userID
  chatID: chatID
  status: MessageStatus
  message: message
  reactions: reactions
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IReaction {
  parentID: parentID
  userID: userID
  reactionType: reactionTypes
}

export interface IRequest extends mongoose.Document {
  sender: sender
  receiver: receiver
  status: status
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IUser extends mongoose.Document {
  userStats: userStats
  username: username
  email: email
  password: password
  phoneNumber: phoneNumber
  profilePhotoURL: profilePhotoURL
  ballotIDs: ballotIDs
  chatIDs: chatIDs
  commentIDs: commentIDs
  reactions: reactions
  requestIDs: requestIDs
  voteIDs: voteIDs
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IVote extends mongoose.Document {
  userID: userID
  ballotID: ballotID
  optionIndex: optionIndex
  createdAt: createdAt
  updatedAt: updatedAt
}

// common
export type createdAt = SchemaTimestampsConfig['createdAt']
export type expiresAt = Date
export type updatedAt = SchemaTimestampsConfig['updatedAt']

export type chatName = string
export type description = string
export type email = string
export type message = string
export type nickname = string
export type password = string
export type phoneNumber = string
export type profilePhotoURL = string
export type status = 'pending' | 'accepted' | 'rejected'
export type title = string
export type username = string

// BALLOT
export type ballotID = Schema.Types.ObjectId
export type ballotIDs = ballotID[]
export type ballots = IBallot[]
export type option = { index: optionIndex; title: title; voteIDs: voteIDs }
export type optionIndex = number
export type options = option[]
export type voteID = Schema.Types.ObjectId
export type voteIDs = voteID[]
export type votes = IVote[]
export type voterIDs = userID[]

// COMMENT
export type comment = string
export type commentID = Schema.Types.ObjectId
export type commentIDs = commentID[]
export type comments = IComment[]
export type parentID = ballotID | commentID | userID
export type parentType = 'ballot' | 'comment' | 'user'

// CHAT
export type chatID = Schema.Types.ObjectId
export type chatIDs = chatID[]
export type chats = IChat[]

// MESSAGE
export type messageID = Schema.Types.ObjectId
export type messageIDs = messageID[]
export type messages = IMessage[]
export type sender = Schema.Types.ObjectId
export type MessageStatus = 'sent' | 'received' | 'read' | 'edited' | 'unsent'

// REACTION
export type reactionID = Schema.Types.ObjectId
export type reactions = IReaction[]

// REQUEST
export type receiver = Schema.Types.ObjectId
export type requestID = Schema.Types.ObjectId
export type requestIDs = requestID[]
export type requests = IRequest[]

// USER
export type userID = Schema.Types.ObjectId
export type userIDs = userID[]
export type users = IUser[]

export type interactions = number
export type isFavorite = boolean
export type matchPercentage = number

export type BallotOption = {
  title: title
  voterIDs: voterIDs
}

export type reactionTypes =
  | 'like'
  | 'dislike'
  | 'laugh'
  | 'cry'
  | 'angry'
  | 'heart'
  | 'wow'
  | 'confused'
  | 'hmm'

export type ballotStats = {
  totalVotes: number
  totalComments: number
  totalReactions: number
}

export type commentStats = {
  totalReplies: number
  totalReactions: number
}

export type chatStats = {
  totalMessages: number
  totalUsers: number
}

export type reactionStats = {
  totalReactions: number
}

export type friendStats = {
  totalFriends: number
  totalMessages: number
}

export type userStats = {
  ballotStats: ballotStats
  commentStats: commentStats
  reactionStats: reactionStats
  friendStats: friendStats
  viewCount: number
}

export type appStats = {
  totalUsers: number
  totalBallots: number
  totalComments: number
  totalReactions: number
  totalFriends: number
  totalMessages: number
}
