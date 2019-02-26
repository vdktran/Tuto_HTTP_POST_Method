const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const express = require('express');
const cors = require('cors');


const dbFile = 'test.db';
const db = new sqlite3.Database(dbFile);
const app = express();
app.use( cors() );


// serialize() = otherwise asynchronous problems (INSERT before CREATE TABLE)
db.serialize( () => {
  
    db.run('CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, price INTEGER, img TEXT, like BOOLEAN, html TEXT)');


    db.run('INSERT INTO products (name, price, img, like) VALUES (?, ?, ?, ?)', 'sac', 100, "jpg1", true);
    db.run('INSERT INTO products (name, price, img, like) VALUES (?, ?, ?, ?)', "t-shirt", 20, "jpg2", false);
    db.run('INSERT INTO products (name, price, img, like) VALUES (?, ?, ?, ?)', "chaussures", 50, "jpg3", false);

});

app.listen(3000, function(error) {
    if (!error) {
        console.log('all good');
    }
});



app.post('/', function(req, res) {

    db.run('INSERT INTO products (name, price, img, like) VALUES ("shoes", 15, "jpg4", true)');

    db.all('SELECT * FROM products', function (error, data) {
        res.send(data);
    });
});