require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 10000;
app.use(express.json());




// app.use(cors({
//     origin: "https://mernbackend23-24.onrender.com",
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
// }));

// Allow CORS for requests from 'https://mernbackend23-24.onrender.com'
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://mernbackend23-24.onrender.com');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });

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

app.options('*', cors());
console.log(port);
app.listen(port, () => {
    console.log(` Radha Krishna Server is up and running on ${port}`)
})
