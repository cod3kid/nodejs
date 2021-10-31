const express = require('express')
const app = express()
const authRouter = require('./authRoutes')
const booksRouter = require('./booksRoutes')

app.use('/api/auth', authRouter)
app.use('/api/books', booksRouter)

app.listen(3000, (req, res) => {
    console.log('Server Running on PORT 3000')
})