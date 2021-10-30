const mongoose = require('mongoose')
const { Schema } = mongoose
const pokemonSchema = new Schema({
    name: String,
    type: [String]
})

const Pokemon = mongoose.model('pokemon', pokemonSchema);

exports.Pokemon = Pokemon
