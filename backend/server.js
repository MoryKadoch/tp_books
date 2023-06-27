const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());

let data = fs.readFileSync('books.json');
let books = JSON.parse(data);

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:id', (req, res) => {
    let book = books.find(b => b.id == req.params.id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.get('/book/search/:name', (req, res) => {
    let book = books.find(b => b.title == req.params.name);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.post('/book', (req, res) => {
    let maxId = Math.max(...books.map(book => book.id));
    let newBook = {
        id: maxId + 1,
        ...req.body
    };
    books.push(newBook);
    fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
    res.status(201).json(newBook);
});


app.put('/book/:id', (req, res) => {
    let id = req.params.id;
    let index = books.findIndex(b => b.id == id);
    if (index !== -1) {
        books[index] = req.body;
        fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.delete('/book/:id', (req, res) => {
    let id = req.params.id;
    let index = books.findIndex(b => b.id == id);
    if (index !== -1) {
        let deletedBook = books.splice(index, 1);
        fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
        res.json(deletedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.listen(3001, () => {
    console.log("Server started");
});