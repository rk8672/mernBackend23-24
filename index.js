require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

let cors = require("cors")


app.use(cors({
    origin: "https://mernbackend23-24.onrender.com",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

const dataConnection = require("./config/db.js");
dataConnection();

// const main = require("./routes/index.js");
// app.use('/', main);

app.get('/', (req, res) => {
    res.send("Hello from express.js");
})

//Index Route
const main = require("./routes/index.js");
app.use('/', main);

const port =5000;
console.log(port);
app.listen(port, () => {
    console.log(` Radha Krishna Server is up and running on ${port}`)
})
