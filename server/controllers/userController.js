import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'

//   Get all users
//   POST api/user/
//   Private
export const getUsers = asyncHandler(async (req, res) => {
    const allUsers = await User.find({}, { username: 1, imageUrl: 1 })
    res.status(200).json(allUsers)
})