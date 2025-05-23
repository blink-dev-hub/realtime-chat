import asyncHandler from "express-async-handler"
import conversationModel from "../models/conversationModel.js"
import MessageModel from "../models/messageModel.js"

//   Create conversation
//   POST api/conversation/:userId/
//   Private
export const createConversation = asyncHandler(async (req, res) => {
    let newConversation = new conversationModel(req.body)
    newConversation = await newConversation.save()
    res.status(201).json(newConversation)
})

//   all conversations
//   POST api/conversation/:userId/
//   Private
export const allConversations = asyncHandler(async (req, res) => {
    const userId = req.user.id
    let conversations = await conversationModel.find({ members: { $elemMatch: { memberId: userId } } })
    res.status(200).json(conversations)
})

//   Delete conversation
//   DELETE api/conversation/:userId/:cid
//   Private
export const deleteConversation = asyncHandler(async (req, res) => {
    const { cid } = req.params
    await Promise.all([
        conversationModel.deleteOne({ _id: cid }),
        MessageModel.deleteMany({ conversationId: cid })
    ])
    res.status(200).json({ cid, message: 'Removed friend from friend list' })
})