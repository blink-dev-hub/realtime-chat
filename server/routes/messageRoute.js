import express from 'express'
import { allMessages, createMessage } from '../controllers/messageController.js'

const router = express.Router()

router.post('/:userId', createMessage)
router.post('/all/:userId', allMessages)

export default router