const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middlewares/errorHandler')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})