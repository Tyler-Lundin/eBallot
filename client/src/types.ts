export interface IErrors {
  [key: string]: string
}

export interface ITheme {
  name: string
  colors: {
    primary: string
    secondary: string
    success: string
    info: string
    warning: string
    danger: string
    light: string
    dark: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  fontSizes: {
    xs: string
    s: string
    m: string
    l: string
    xl: string
    xxl: string
    xxxl: string
  }
}

export interface IThemeState {
  currentTheme: ITheme
}
export interface IBallot {
  _id: ballotID
  ballotStats: ballotStats
  userID: userID
  question: string
  options: options
  commentIDs: commentIDs
  expiresAt: expiresAt
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IComment {
  _id: commentID
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

export interface IChat {
  _id: chatID
  chatStats: chatStats
  chatName: chatName
  messageIDs: messageIDs
  userIDs: userIDs
}

export interface IFriend {
  _id: userID
  matchPercentage: matchPercentage
  interactions: interactions
  isFavorite: isFavorite
  nickname: nickname
  messageIDs: messageIDs
  createdAt: createdAt
  updatedAt: updatedAt
}
export interface IMessage {
  _id: messageID
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

export interface IRequest {
  _id: requestID
  sender: sender
  receiver: receiver
  status: status
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IUser {
  _id: userID
  userStats: userStats
  username: username
  email: email
  password: password
  phoneNumber: phoneNumber
  profilePhotoURL: profilePhotoURL
  ballotIDs: ballotIDs
  chatIDs: chatIDs
  commentIDs: commentIDs
  reactionIDs: reactionIDs
  requestIDs: requests
  voteIDs: voteIDs
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IVote {
  _id: voteID
  userID: userID
  ballotID: ballotID
  optionIndex: optionIndex
  createdAt: createdAt
  updatedAt: updatedAt
}

// common
export type createdAt = Date
export type expiresAt = Date
export type updatedAt = Date
export type error = string | string[] | null

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
export type ballotID = string
export type ballotIDs = ballotID[]
export type ballots = IBallot[]
export type option = { index: optionIndex; title: title; voteIDs: voteIDs }
export type optionIndex = number
export type options = option[]
export type voteID = string
export type voteIDs = voteID[]
export type votes = IVote[]
export type voterIDs = userID[]

// COMMENT
export type comment = string
export type commentID = string
export type commentIDs = commentID[]
export type comments = IComment[]
export type parentID = ballotID | commentID | userID
export type parentType = 'ballot' | 'comment' | 'user'

// CHAT
export type chatID = string
export type chatIDs = chatID[]
export type chats = IChat[]

// MESSAGE
export type messageID = string
export type messageIDs = messageID[]
export type messages = IMessage[]
export type sender = string
export type MessageStatus = 'sent' | 'received' | 'read' | 'edited' | 'unsent'

// REACTION
export type reactionID = string
export type reactionIDs = reactionID[]
export type reactions = IReaction[]

// REQUEST
export type receiver = string
export type requestID = string
export type requestIDs = requestID[]
export type requests = IRequest[]

// USER
export type userID = string
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

export type links = {
  to: string
  label: string
}[]

export interface IRegisterForm {
  username: string
  email: string
  password: string
  passwordConfirm: string
}

export interface ILoginForm {
  username: string
  password: string
}

export interface IAuthState {
  user: IUser | null
  authenticated: boolean
  loading: boolean
  error: error
  register: {
    form: IRegisterForm
    loading: boolean
    error: error
  }
  login: {
    form: ILoginForm
    loading: boolean
    error: error
  }
}

export interface IFocusedFields {
  username?: boolean
  email?: boolean
  password?: boolean
  passwordConfirm?: boolean
}
