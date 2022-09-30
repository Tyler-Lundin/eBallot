// CLIENT TYPES

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
  comments: comments
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
  children: comments
  comment: comment
  reactions: reactions
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IChat {
  _id: chatID
  chatStats: chatStats
  chatName: chatName
  messages: messages
  users: users
}

export interface IFriend {
  userID: userID
  profilePhotoURL: profilePhotoURL
  matchPercentage: matchPercentage // based on user's answers to questions
  interactions: interactions
  isFavorite: isFavorite
  nickname: nickname
  messages: messages
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

export interface INotification {
  _id: notificationID
  notificationType: notificationType
  message: message
  sender: sender
  receiver: receiver
  status: status
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IUser {
  _id?: userID
  userStats: userStats
  username: username
  email: email
  password?: password
  phoneNumber: phoneNumber
  profilePhotoURL: profilePhotoURL
  ballots: ballots
  chats: chats
  comments: comments
  friends: friends
  reactions: reactions
  requests: requests
  votes: votes
  createdAt: createdAt | null
  updatedAt: updatedAt | null
}

export interface IVote {
  _id: voteID
  userID: userID
  ballotID: ballotID
  optionIndex: optionIndex
  createdAt: createdAt
  updatedAt: updatedAt
}

export interface IFriends {
  friendRequests: friendRequests
  friends: friends
  favoriteFriends: favoriteFriends
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
export type ballots = ballotID[] | IBallot[]

export type option = { index: optionIndex; title: title; voteIDs: votes }
export type optionIndex = number
export type options = option[]
export type voteID = string
export type votes = voteID[] | IVote[]
export type voters = userID[]

// COMMENT
export type comment = string
export type commentID = string
export type comments = commentID[] | IComment[]
export type parentID = ballotID | commentID | userID
export type parentType = 'ballot' | 'comment' | 'user'

// CHAT
export type chatID = string
export type chats = chatID[] | IChat[]

// FRIENDS
export type friendRequests = IRequest[]
export type friends = IFriend[]
export type favoriteFriends = IFriend[]
export type isFavorite = boolean
export type matchPercentage = number
export type interactions = number

// MESSAGE
export type messageID = string
export type messages = messageID[] | IMessage[]
export type sender = string
export type MessageStatus = 'sent' | 'received' | 'read' | 'edited' | 'unsent'

// NOTIFICATION
export type notificationID = string
export type notificationType =
  | 'friendRequest'
  | 'comment'
  | 'reaction'
  | 'chatRequest'
  | 'ballotStatus'
  | 'message'

// REACTION
export type reactionID = string
export type reactions = reactionID[] | IReaction[]

// REQUEST
export type receiver = string
export type requestID = string
export type requestIDs = requestID[]
export type requests = IRequest[]

// USER
export type userID = string
export type users = userID[] | IUser[]

export type BallotOption = {
  title: title
  voters: voters
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
  totalReactions: {
    like: number
    dislike: number
    laugh: number
    cry: number
    angry: number
    heart: number
    wow: number
    confused: number
    hmm: number
  }
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
