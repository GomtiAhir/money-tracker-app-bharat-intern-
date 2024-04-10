const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

// Middleware to parse incoming request bodiesx
app.use(bodyParser.json());


 mongoose
   .connect(process.env.MONGODB_URL)
  const db = mongoose.connection
  db.on('error', ()=> console.log("Error in connecting to the Database"))
db.once('open', () => console.log("Connected to Database"))


app.post("/add", (req, res) => {
    var category_select = req.body.category_select;
    const amount_input = req.body.amount_input;
    const info = req.body.info;
    const date_input = req.body.date_input;

    const data = {
        "Category": category_select,
        "Amount": amount_input,
        "Info": info,
        "Date": date_input
    };
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.html');
}).listen(5000);

console.log("Listening on port 5000");
