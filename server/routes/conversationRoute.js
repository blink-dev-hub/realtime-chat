import express from 'express'
import { allConversations, createConversation, deleteConversation } from '../controllers/conversationController.js'

const router = express.Router()

router.route('/:userId')
    .post(createConversation)
    .get(allConversations)

router.delete('/:userId/:cid', deleteConversation)

export default router