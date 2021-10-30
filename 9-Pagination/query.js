const express = require("express")
const app = express()

const pokedex = [
    {  pokemon: "Bulbasaur", type: ["Grass", "Poison"] },
    {  pokemon: "Ivysaur",   type: ["Grass", "Poison"] },
    {  pokemon: "Venasaur",  type: ["Grass", "Poison"] },
    {  pokemon: "Charmander",type: ["Fire"] },
    {  pokemon: "Charmeleon",type: ["Fire"] },
    {  pokemon: "Charizard", type: ["Fire", "Flying"] },
    {  pokemon: "Squirtle",  type: ["Water"] },
    {  pokemon: "Wartortle", type: ["Water"] },
    {  pokemon: "Blastoise", type: ["Water"] },
]

app.get('/pokedex', (req, res) => {

    /* Params from url is obtained by => req.params.id 
       Since the value of req.params.id is a string we are converting it into integer.
    */
    page = parseInt(req.query.page)
    limit = parseInt(req.query.limit) // Determines the no. of objects that should be sent back

    result = [] // Result array

    /*
        We use startIndex and endIndex to send the data as response
        For example if the requesting url is http://localhost:3000/1

        page will be req.params.id  i.e.  1 
        startIndex will be (1-0)*3 = 0
        endIndex will be 1*3 = 3

        Now we perform a slice operation pokedex array based on startIndex
        and endIndex

        pokedex.slice(0,3)
        which will send back 0 , 1 and 2nd element of the pokedex array.
    */
    startIndex = (page - 1) * limit
    endIndex = page * limit


    result = pokedex.slice(startIndex, endIndex)
    res.send(result)

})


app.listen(3000, () => {
    console.log("Server running on port 3000 ...")
})
