const express = require('express')
const app = express()

//Setting EJS as default view engine
app.set('view engine', 'ejs');

const pokemon = {
    name: "Pikachu",
    type: "Electric"
}

app.get('/',(req,res)=>{
    res.render('index',{name:pokemon.name})
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})