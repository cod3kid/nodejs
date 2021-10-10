const express = require('express')
const app = express()

app.use(express.json())

let names = [
    'John',
    'Phillip',
    'Michael',
    'Daisy'
]

let users = [
    {
        id: 'A01',
        name: 'Aaron Donald'
    },
    {
        id: 'A02',
        name: 'Jackson McRoy'
    },
    {
        id: 'A03',
        name: 'Hugh Campbell'
    }
]


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/names', (req, res) => {
    res.send(names)
})


app.post('/create', (req, res) => {
    const name = req.body.name
    names.push(name)
    res.send(names)
})

app.post('/create-users', (req, res) => {

    const newUser = {
        id: req.body.id,
        name: req.body.name
    }
    users.push(newUser)
    res.send(users)
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(u => u.id === id)

    if (!user) {
        return res.send("User not found !")
    }

    user.name = req.body.name
    res.send(user)

})

app.put('/add-age/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(u => u.id === id)

    if (!user) {
        return res.send("User not found !")
    }

    user.age = req.body.age
    res.send(user)
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(u => u.id === id)

    if (!user) {
        return res.send("User not found !")
    }

    const index = users.indexOf(user)
    users.splice(index, 1)

    res.send(users)
})

app.listen(3000, () => console.log("Server listening on port 3000 ... "))