const express = require("express")
const app = express()

const pokedex = [
    {
        pokemon: "Bulbasaur",
        type: ["Grass", "Poison"]
    },
    {
        pokemon: "Ivysaur",
        type: ["Grass", "Poison"]
    },
    {
        pokemon: "Venasaur",
        type: ["Grass", "Poison"]
    },
    {
        pokemon: "Charmander",
        type: ["Fire"]
    },
    {
        pokemon: "Charmeleon",
        type: ["Fire"]
    },
    {
        pokemon: "Charizard",
        type: ["Fire", "Flying"]
    },
    {
        pokemon: "Squirtle",
        type: ["Water"]
    },
    {
        pokemon: "Wartortle",
        type: ["Water"]
    },
    {
        pokemon: "Blastoise",
        type: ["Water"]
    },
]

app.get('/pokedex/:id', (req, res) => {
    page = parseInt(req.params.id)
    limit = 3

    startIndex = (page - 1) * limit
    endIndex = page * limit

    result = []

    result = pokedex.slice(startIndex, endIndex)
    res.send(result)

})


app.listen(3000, () => {
    console.log("Server running on port 3000 ...")
})
