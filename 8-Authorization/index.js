const express = require('express')
const mongoose = require('mongoose')
const { User } = require('./user')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const app = express()
const auth = require('./auth')

app.use(express.json())

mongoose.connect('mongodb://localhost/User', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongodb")
    })
    .catch(err => {
        console.log("Could not connect to mongodb", err)
    })


app.post('/create', async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    const result = await user.save()
    res.send(result)
})

app.post('/login', async (req, res) => {

    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.send("Invalid User or Password")
    }
    const validatePassword = await bcrypt.compare(req.body.password, user.password)
    if (!validatePassword) {
        return res.send("Invalid User or Password")
    }

    const token = jwt.sign({ _id: user._id }, 'dummyTokenSecret')
    return res.header('x-auth-token',token).send('Login Successful')
})

app.get('/users', auth, async (req, res) => {
    res.send("You are in a protected route")
})

app.listen(4000, () => {
    console.log("Server Running On Port 4000")
})