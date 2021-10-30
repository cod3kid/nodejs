const express = require("express")
const app = express()

const pokedex = [
    {
        number: "#001",
        pokemon: "Bulbasaur",
        type: ["Grass", "Poison"]
    },
    {
        number: "#002",
        pokemon: "Ivysaur",
        type: ["Grass", "Poison"]
    },
    {
        number: "#003",
        pokemon: "Venasaur",
        type: ["Grass", "Poison"]
    },
    {
        number: "#004",
        pokemon: "Charmander",
        type: ["Fire"]
    },
    {
        number: "#005",
        pokemon: "Charmeleon",
        type: ["Fire"]
    },
    {
        number: "#006",
        pokemon: "Charizard",
        type: ["Fire", "Flying"]
    },
    {
        number: "#007",
        pokemon: "Squirtle",
        type: ["Water"]
    },
    {
        number: "#008",
        pokemon: "Wartortle",
        type: ["Water"]
    },
    {
        number: "#009",
        pokemon: "Blastoise",
        type: ["Water"]
    },
]

app.get('/:id', (req, res) => {
    page = parseInt(req.params.id)
    limit = 3

    startIndex = (page - 1) * limit
    endIndex = page * limit

    result = {}

    if (endIndex < pokedex.length) {
        result.next = {
            page: page + 1,
            limit: limit
        }
    }
    else {
        result.next = null
    }

    if (startIndex > 0) {
        result.previous = {
            page: page - 1,
            limit: limit
        }
    }
    else {
        result.previous = null
    }

    result.result = pokedex.slice(startIndex, endIndex)
    res.send(result)

})


app.listen(60000, () => {
    console.log("Server running on port 60000 ...")
})
