import { Router } from 'express'
import ballotRoute from './ballot.route'
import chatRoute from './chat.route'
import authRoute from './auth.route'
import userRoute from './user.route'
import verifyAuthToken from '../middleware/verifyAuthToken'
import usedConsoleLog from '../util/usedLog'

const router = Router()

router.use('/auth', usedConsoleLog, authRoute)
// router.use('/ballot', verifyAuthToken, ballotRoute)
// router.use('/chat', verifyAuthToken, chatRoute)
// router.use('/comment', verifyAuthToken, commentRoutes)
// router.use('/friend', verifyAuthToken, friendRoutes)
// router.use('/message', verifyAuthToken, messageRoutes)
router.use('/user', verifyAuthToken, userRoute)

export default router

/*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//             // U N A U T H O R I Z E D // R O U T E S //                      //
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
* Login returns a JWT token to be used for authentication
* Register creates a new user
* ForgotPassword sends an email to the user with a link to reset their password
* ResetPassword resets the user's password
* VerifyEmail verifies the user's email
* ResendVerificationEmail sends a new verification email to the user
*
* [AUTH] - /api/auth
    * [POST] - /api/auth/login
    * [POST] - /api/auth/register
    * [POST] - /api/auth/forgot-password
    * [POST] - /api/auth/reset-password
    * [POST] - /api/auth/verify-email
    * [POST] - /api/auth/resend-verification-email
    * [GET] - /api/auth/verify-email/:token
    * [GET] - /api/auth/reset-password/:token
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//             // A U T H O R I Z E D  //  R O U T E S   //                      //
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
* Use VerifyAuthToken middleware to protect routes
*
* [BALLOT] - /api/ballot
    * [GET] - /api/ballot/feed - get feed of ballots
    * [GET] - /api/ballot/:id - get ballot by id
    * [POST] - /api/ballot - create ballot
    * [PUT] - /api/ballot/:id - update ballot
    * [DELETE] - /api/ballot/:id - delete ballot
    * [POST] - /api/ballot/:id/vote - vote on ballot
    * [POST] - /api/ballot/:id/unvote - unvote on ballot
    * [POST] - /api/ballot/:id/comment - comment on ballot
    * [POST] - /api/ballot/:id/uncomment - uncomment on ballot
    * [POST] - /api/ballot/:id/share - share ballot
* - - - - - - - - - - - - - - - - - - - - - - - - - 
* [CHAT] - /api/chat 
    * [GET] - /api/chat - get all chats meta data (last message, last message time, etc.)
    * [GET] - /api/chat/:id - get chat messages
    * [POST] - /api/chat - create chat 
    * [POST] - /api/chat/:id - send chat message
    * [DELETE] - /api/chat/:id - delete chat message if sender
    * [POST] - /api/chat/:id/leave - leave chat
    * [POST] - /api/chat/:id/join - join chat
    * [POST] - /api/chat/:id/invite - invite user to chat
    * [POST] - /api/chat/:id/kick - kick user from chat
* - - - - - - - - - - - - - - - - - - - - - - - - - 
* [COMMENT] - /api/comment 
    * [GET] - /api/comment/:id - get comment and replies 
    * [PUT] - /api/comment/:id - update comment
    * [POST] - /api/comment/:id - create comment
    * [DELETE] - /api/comment/:id - delete comment
* - - - - - - - - - - - - - - - - - - - - - - - - - 
* [FRIEND] - /api/friend 
    * [GET] - /api/friend - get all friends
    * [GET] - /api/friend/add/:id - add friend
    * [GET] - /api/friend/remove/:id - remove friend
    * [GET] - /api/friend/accept/:id - accept friend request
    * [GET] - /api/friend/decline/:id - decline friend request
    * [GET] - /api/friend/cancel/:id - cancel friend request
    * [GET] - /api/friend/:id - get friend by id
* - - - - - - - - - - - - - - - - - - - - - - - - - 
* [MESSAGE] - /api/message 
    * [GET] - /api/message - get all messages
    * [GET] - /api/message/:id - get message by id
    * [POST] - /api/message - send message
    * [DELETE] - /api/message/:id - delete message
* - - - - - - - - - - - - - - - - - - - - - - - - - 
* [USER] - /api/user 
    * [GET] - /api/user/:id - get user data
    * [PUT] - /api/user/:id - update user 
    * [DELETE] - /api/user/:id - delete user 
*/

const routes = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
    verifyEmail: '/api/auth/verify-email',
    resendVerificationEmail: '/api/auth/resend-verification-email',
    verifyEmailToken: '/api/auth/verify-email/:token',
    resetPasswordToken: '/api/auth/reset-password/:token',
  },
  ballot: {
    feed: '/api/ballot/feed',
    getBallot: '/api/ballot/:id',
    createBallot: '/api/ballot',
    updateBallot: '/api/ballot/:id',
    deleteBallot: '/api/ballot/:id',
    vote: '/api/ballot/:id/vote',
    unvote: '/api/ballot/:id/unvote',
    comment: '/api/ballot/:id/comment',
    uncomment: '/api/ballot/:id/uncomment',
    share: '/api/ballot/:id/share',
  },
  chat: {
    getChats: '/api/chat',
    getChat: '/api/chat/:id',
    createChat: '/api/chat',
    sendMessage: '/api/chat/:id',
    deleteMessage: '/api/chat/:id',
    leaveChat: '/api/chat/:id/leave',
    joinChat: '/api/chat/:id/join',
    inviteUser: '/api/chat/:id/invite',
    kickUser: '/api/chat/:id/kick',
  },
  comment: {
    getComment: '/api/comment/:id',
    updateComment: '/api/comment/:id',
    createComment: '/api/comment/:id',
    deleteComment: '/api/comment/:id',
  },
  friend: {
    getFriends: '/api/friend',
    addFriend: '/api/friend/add/:id',
    removeFriend: '/api/friend/remove/:id',
    acceptFriend: '/api/friend/accept/:id',
    declineFriend: '/api/friend/decline/:id',
    cancelFriend: '/api/friend/cancel/:id',
    getFriend: '/api/friend/:id',
  },
  message: {
    getMessages: '/api/message',
    getMessage: '/api/message/:id',
    sendMessage: '/api/message',
    deleteMessage: '/api/message/:id',
  },
  user: {
    getUser: '/api/user/:id',
    updateUser: '/api/user/:id',
    deleteUser: '/api/user/:id',
  },
}
