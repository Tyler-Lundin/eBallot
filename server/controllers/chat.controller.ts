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

import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

export const getChats = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'getChats' })
})

export const getChat = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'getChat' })
})

export const createChat = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'createChat' })
})

export const sendMessage = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'sendMessage' })
})

export const deleteMessage = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'deleteMessage' })
})

export const leaveChat = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'leaveChat' })
})

export const joinChat = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'joinChat' })
})

export const inviteUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'inviteUser' })
})

export const kickUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'kickUser' })
})
