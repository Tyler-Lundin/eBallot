import express from 'express'
import cors from 'cors'
import routes from './routes'
import { isListeningOn } from './util/isListeningOn'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3500
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api', routes)

app.listen(PORT, isListeningOn(PORT))
