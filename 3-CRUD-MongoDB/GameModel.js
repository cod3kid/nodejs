const mongoose = require('mongoose')
const { Schema } = mongoose
const gameSchema = new Schema({
    title:String,
    genre: [String],
    year: Number
})

const Game = mongoose.model('Game', gameSchema);

exports.Game = Game
