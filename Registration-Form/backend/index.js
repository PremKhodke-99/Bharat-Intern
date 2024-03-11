require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const userRoutes = require("./routes/user.routes");

const mongoDB_url = process.env.MongoDB_URL;

mongoose.connect(mongoDB_url)
    .then(() => console.log("Connected to DB", mongoDB_url))
    .catch((err) => console.log("Failed to connect", err));

const app = express();
const port = 8082;


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/', userRoutes);

app.listen(port, () => {
    console.log('Listening at', port)
})