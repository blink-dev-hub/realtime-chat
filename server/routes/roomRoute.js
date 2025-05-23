import express from 'express'
import { createRoom, getRooms, joinRoom, leaveRoom } from '../controllers/roomController.js'

const router = express.Router()

router.route('/:userId')
    .get(getRooms)
    .post(createRoom)
    .put(joinRoom)

router.delete('/:userId/:roomId', leaveRoom)

export default router