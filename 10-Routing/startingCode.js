const express = require('express')
const app = express()

app.post('/api/auth/register', (req, res) => {
    res.send('API for creating an account')
})

app.post('/api/auth/login', (req, res) => {
    res.send('API for signing in')
})

app.post('/api/books/create', (req, res) => {
    res.send('API for creating a book')
})

app.get('/api/books/read-all', (req, res) => {
    res.send('API for getting list of all books')
})

app.delete('/api/books/delete/:id', (req, res) => {
    res.send('API for deleting a book')
})

app.listen(3000, (req, res) => {
    console.log('Server Running on PORT 3000')
})