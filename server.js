import express from 'express'
const app = express()
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
dotenv.config()
//db and authenticateUser
import connectDB from './db/connect.js'
//routers
import authRouter from './routes/authRoutes.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server is listening on ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()