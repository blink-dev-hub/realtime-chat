import express from 'express'
import { allRequests, createNewRequest, deleteRequest } from '../controllers/requestController.js'

const router = express.Router()

router.route('/:userId')
    .post(createNewRequest)
    .get(allRequests)
    .delete(deleteRequest)

export default router