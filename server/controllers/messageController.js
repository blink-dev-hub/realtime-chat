import asyncHandler from 'express-async-handler'
import MessageModel from '../models/messageModel.js'

//   Create message
//   POST api/message/:userId
//   Private
export const createMessage = asyncHandler(async (req, res) => {
    let newMessage = new MessageModel(req.body)
    newMessage = await newMessage.save()
    res.status(201).json(newMessage)
})

//   All messages
//   POST api/message/all/:userId
//   Private
export const allMessages = asyncHandler(async (req, res) => {
    const allMsg = await MessageModel.find({ conversationId: { $in: req.body } })
    res.status(200).json(allMsg)
})