const express = require('express')
const router = express.Router()


router.post('/create',(req,res)=>{
    res.send('API for creating a book')
})

router.get('/read-all',(req,res)=>{
    res.send('API for getting list of all books')
})

router.delete('/delete/:id',(req,res)=>{
    res.send('API for deleting a book')
})

module.exports = router