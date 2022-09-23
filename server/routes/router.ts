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

import { Router } from 'express'
import ballotsRoutes from './ballot.routes'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import verifyAuthToken from '../middleware/verifyAuthToken'

const router = Router()

router.use('/auth', authRoutes)
router.use('/ballots', verifyAuthToken, ballotsRoutes)
router.use('/user', verifyAuthToken, userRoutes)
// router.use('/comments', verifyAuthToken, commentsRoutes)
// router.use('/vote', verifyAuthToken, voteRoutes)
// router.use('/friends', verifyAuthToken, friendRoutes)
// router.use('/requests', verifyAuthToken, requestRoutes)
// router.use('/messages', verifyAuthToken, messageRoutes)

export default router
