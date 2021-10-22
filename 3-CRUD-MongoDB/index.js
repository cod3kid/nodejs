const express = require('express')
const mongoose = require('mongoose')
const { Game } = require('./GameModel')
const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost/GameDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Connected to mongodb !")
    })
    .catch(err => {
        console.log("Could not connect to mongodb", err)
    })



app.listen(3000, () => {
    console.log("Listening on port 3000 !!!!!")
})
