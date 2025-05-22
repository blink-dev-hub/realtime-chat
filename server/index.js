import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

async function connect() {
    try {
        mongoose.connect("mongodb://localhost:27017/chatdb");
        console.log('connected to mongodb')
    } catch (error) {
        throw error
    }
}

const origin = process.env.CLIENT_ORIGIN

app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(cors({
    credentials: true,
    origin
}))

app.get('/', (req, res) => {
    res.send('Hello from api')
})

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Running backend server at port ${port}`)
    connect()
})