const express = require('express')
const dotenv= require('dotenv')

const app = express()
dotenv.config()


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server running in Port ${port}`)
})