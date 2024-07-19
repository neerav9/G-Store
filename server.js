const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static('public'));
app.post('/addBook', (req, res) => {
    const newBook = req.body;

    fs.readFile(path.join(__dirname, 'public', 'books.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const books = JSON.parse(data);
        newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
        books.push(newBook);

        fs.writeFile(path.join(__dirname, 'public', 'books.json'), JSON.stringify(books, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }

            res.status(200).send({ message: 'Book added successfully!' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
