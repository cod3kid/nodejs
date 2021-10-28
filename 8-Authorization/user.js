const mongoose = require('mongoose')


const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 50,
        required: true
    },
    email: {
        type: String,
        min: 3,
        max: 30,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 255,
        required: true
    }
}));


exports.User = User
