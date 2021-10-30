const express = require('express')
const mongoose = require('mongoose')
const { Pokemon } = require('./PokemonModel')
const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost/Pokedex', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongodb !")
    })
    .catch(err => {
        console.log("Could not connect to mongodb", err)
    })

app.post('/addpokemon', async (req, res) => {

    let pokemon = new Pokemon({
        name: req.body.name,
        type: req.body.type
    })

    const result = await pokemon.save()
    res.send(result)
})

app.get('/pokedex', async (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const pokemon = await Pokemon.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .select(['name','type'])


    res.send(pokemon)
})

app.listen(3000)