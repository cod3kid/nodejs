const express = require('express')
const router = express.Router()


router.post('/register', (req, res) => {
    res.send('API for creating an account')
})

router.post('/login', (req, res) => {
    res.send('API for signing in')
})

module.exports = router