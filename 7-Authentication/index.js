const express = require('express')
const mongoose = require('mongoose')
const { User } = require('./user')
var bcrypt = require('bcryptjs');
const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost/User', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Connected to mongodb !")
    })
    .catch(err => {
        console.log("Could not connect to mongodb", err)
    })


app.post('/register', async (req, res) => {

    const userExists = await User.findOne({ email: req.body.email })

    if (userExists) {
        return res.send("An account with this email already exists.")
    }
    
    await bcrypt.hash(req.body.password, 10,  async(err, hash)=> {

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })

        const result = await user.save()
        res.send(result)

    });

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

    return res.send(`Login Successful`)
})



app.listen(4000, () => {
    console.log("Server Running On Port 4000")
})