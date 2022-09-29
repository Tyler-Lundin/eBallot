// @collapse
// * [CHAT] - /api/chat
//     * [GET] - /api/chat - get all chats meta data (last message, last message time, etc.)
//     * [GET] - /api/chat/:id - get chat messages
//     * [POST] - /api/chat - create chat
//     * [POST] - /api/chat/:id - send chat message
//     * [DELETE] - /api/chat/:id - delete chat message if sender
//     * [POST] - /api/chat/:id/leave - leave chat
//     * [POST] - /api/chat/:id/join - join chat
//     * [POST] - /api/chat/:id/invite - invite user to chat
//     * [POST] - /api/chat/:id/kick - kick user from chat

import { Router } from 'express'
import {
  createChat,
  deleteMessage,
  getChats,
  inviteUser,
  joinChat,
  kickUser,
  leaveChat,
  sendMessage,
} from '../controllers/chat.controller'

const router = Router()

router.get('/', getChats)
router.get('/:id', getChats)
router.post('/', createChat)
router.post('/:id', sendMessage)
router.delete('/:id', deleteMessage)
router.post('/:id/leave', leaveChat)
router.post('/:id/join', joinChat)
router.post('/:id/invite', inviteUser)
router.post('/:id/kick', kickUser)

export default router
