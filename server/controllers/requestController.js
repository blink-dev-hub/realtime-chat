import asyncHandler from 'express-async-handler'
import RequestModel from '../models/requestModel.js'

//   Create request
//   POST api/request/:userId
//   Private
export const createNewRequest = asyncHandler(async (req, res) => {
    const { receiverId, senderId } = req.body

    const checkRequest = await RequestModel.findOne({ receiverId, senderId })

    if (checkRequest) {
        res.status(400)
        throw new Error('Request already made')
    }

    let newRequest = new RequestModel(req.body)
    newRequest = await newRequest.save()
    res.status(201).json({ message: 'Successfully sent request', newRequest })
})

//   All requests
//   GET api/request/:userId
//   Private
export const allRequests = asyncHandler(async (req, res) => {
    const allRequests = await RequestModel.find({ $or: [{ senderId: req.user.id }, { receiverId: req.user.id }] })
    res.status(200).json(allRequests)
})

//   Delete request
//   DELETE api/request/:userId
//   Private
export const deleteRequest = asyncHandler(async (req, res) => {
    const { reqId, reqMessage } = req.body
    await RequestModel.deleteOne({ _id: reqId })
    res.status(200).json({ reqId, message: reqMessage })
})