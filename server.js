import express from 'express'
import errorHandlerMiddleware from './middleware/error-handler.js'
const app = express()
//middleware

import notFoundMiddleware from './middleware/not-found.js'

app.get('/', (req, res) => {
  throw new Error('error')
  res.send('Welcome!')
})
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server is listening on ${port}...`)
})
