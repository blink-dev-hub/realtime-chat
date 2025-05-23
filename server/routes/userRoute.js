import express from 'express'
import { getUsers } from '../controllers/userController.js'

const router = express.Router()

router.get('/:userId', getUsers)

export default router