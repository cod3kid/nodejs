const express = require('express')
const app = express()

app.use(express.json())

let books = [
    {
        bookId: "B01",
        name: "To Kill a Mockingbird"
    },
    {
        bookId: "B02",
        name: "The Great Gatsby"
    },
    {
        bookId: "B03",
        name: "One Hundred Years of Solitude"
    },
]

app.delete('/delete/:bookId', (req, res) => {
    const bookId = req.params.bookId
    const book = books.find(b => b.bookId === bookId)

    if (!book) {
        return res.send("Book not found !")
    }

    const index = books.indexOf(book)
    books.splice(index, 1)

    res.send(books)
})

app.listen(3000, () => console.log("Server listening on port 3000 ... "))